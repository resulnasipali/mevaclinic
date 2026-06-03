import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';
import nodemailer from 'nodemailer';

// ─── Whitelisted treatment values ────────────────────────────────────────────
const ALLOWED_TREATMENTS = new Set([
  'bariatric', 'hair', 'dental', 'plastic', 'oncology',
  'transplant', 'aesthetics', 'andrology', 'Not specified', ''
]);

// ─── Strict payload schema ────────────────────────────────────────────────────
interface LeadPayload {
  name?: unknown;
  phone?: unknown;
  email?: unknown;
  treatment?: unknown;
  message?: unknown;
  source?: unknown;
  metrics?: unknown;
  medical_condition?: unknown;
}

function sanitizeString(val: unknown, maxLen = 500): string {
  if (typeof val !== 'string') return '';
  return val.trim().slice(0, maxLen);
}

// ─── Simple in-memory rate limiter ────────────────────────────────────────────
const postAttempts = new Map<string, { count: number; resetAt: number }>();
function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = postAttempts.get(ip);
  if (!entry || entry.resetAt < now) {
    postAttempts.set(ip, { count: 1, resetAt: now + 60_000 }); // 1-minute window
    return false;
  }
  if (entry.count >= 10) return true; // max 10 submissions/min per IP
  entry.count++;
  return false;
}

export async function POST(request: Request) {
  try {
    // ── Rate limiting ──────────────────────────────────────────────────────────
    const ip = request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ?? 'unknown';
    if (isRateLimited(ip)) {
      return NextResponse.json({ success: false, message: 'Too many requests.' }, { status: 429 });
    }

    // ── Parse & validate payload ───────────────────────────────────────────────
    let rawData: LeadPayload;
    try {
      rawData = await request.json();
    } catch {
      return NextResponse.json({ success: false, message: 'Invalid JSON payload.' }, { status: 400 });
    }

    const treatment = sanitizeString(rawData.treatment, 100);
    if (!ALLOWED_TREATMENTS.has(treatment)) {
      return NextResponse.json({ success: false, message: 'Invalid treatment value.' }, { status: 400 });
    }

    const newLead = {
      id: Date.now().toString(),
      date: new Date().toISOString(),
      name:             sanitizeString(rawData.name, 150),
      phone:            sanitizeString(rawData.phone, 30),
      email:            sanitizeString(rawData.email, 200),
      treatment:        treatment || 'Not specified',
      message:          sanitizeString(rawData.message, 1000),
      metrics:          sanitizeString(rawData.metrics, 200),
      medicalCondition: sanitizeString(rawData.medical_condition, 500),
      source:           sanitizeString(rawData.source, 50) || 'Website',
      status:           'New',
    };

    // ── Filesystem write ───────────────────────────────────────────────────────
    const dataDir = path.join(process.cwd(), 'data');
    const leadsFilePath = path.join(dataDir, 'leads.json');

    if (!fs.existsSync(dataDir)) {
      fs.mkdirSync(dataDir, { recursive: true });
    }

    let leads: typeof newLead[] = [];
    if (fs.existsSync(leadsFilePath)) {
      try {
        const fileContent = fs.readFileSync(leadsFilePath, 'utf-8');
        leads = fileContent ? JSON.parse(fileContent) : [];
      } catch {
        leads = []; // corrupt file: start fresh rather than crash
      }
    }

    leads.unshift(newLead);
    fs.writeFileSync(leadsFilePath, JSON.stringify(leads, null, 2), 'utf-8');

    // ── Email notification (silent fail) ──────────────────────────────────────
    if (process.env.SMTP_USER && process.env.SMTP_PASS) {
      try {
        const transporter = nodemailer.createTransport({
          service: 'gmail',
          auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
        });
        await transporter.sendMail({
          from: `"Meva Clinic CRM" <${process.env.SMTP_USER}>`,
          to: process.env.SMTP_USER,
          subject: `YENI HASTA TALEBI: ${newLead.name} - ${newLead.treatment}`,
          html: `
            <h2>Yeni Hasta Talebi (CRM)</h2>
            <p><strong>İsim:</strong> ${newLead.name}</p>
            <p><strong>Telefon:</strong> ${newLead.phone}</p>
            <p><strong>E-Posta:</strong> ${newLead.email}</p>
            <p><strong>Tedavi:</strong> ${newLead.treatment}</p>
            <p><strong>Kaynak:</strong> ${newLead.source}</p>
            ${newLead.metrics ? `<p><strong>Ölçüler:</strong> ${newLead.metrics}</p>` : ''}
            ${newLead.medicalCondition ? `<p><strong>Tıbbi Durum:</strong> ${newLead.medicalCondition}</p>` : ''}
            ${newLead.message ? `<p><strong>Mesaj:</strong><br/>${newLead.message}</p>` : ''}
            <hr /><p><small>Meva Clinic web sitesi — otomatik bildirim.</small></p>
          `,
        });
      } catch (mailError) {
        console.error('❌ [CRM] Email send failed:', mailError);
      }
    }

    console.log(`✅ [CRM] Lead captured: ${newLead.name} via ${newLead.source}`);
    return NextResponse.json(
      { success: true, message: 'Lead captured successfully.', leadId: newLead.id },
      { status: 201 }
    );
  } catch (error) {
    console.error('❌ [CRM] Unexpected error:', error);
    return NextResponse.json({ success: false, message: 'Internal Server Error' }, { status: 500 });
  }
}

export async function GET(request: Request) {
  try {
    // ── Auth gate — ADMIN_PASSWORD required ───────────────────────────────────
    const authHeader = request.headers.get('x-admin-key');
    if (!authHeader || authHeader !== process.env.ADMIN_PASSWORD) {
      return NextResponse.json({ success: false, message: 'Unauthorized' }, { status: 401 });
    }

    const leadsFilePath = path.join(process.cwd(), 'data', 'leads.json');
    if (!fs.existsSync(leadsFilePath)) {
      return NextResponse.json({ success: true, leads: [] });
    }

    const fileContent = fs.readFileSync(leadsFilePath, 'utf-8');
    const leads = fileContent ? JSON.parse(fileContent) : [];
    return NextResponse.json({ success: true, leads });
  } catch (error) {
    console.error('❌ [CRM] Error fetching leads:', error);
    return NextResponse.json({ success: false, message: 'Internal Server Error' }, { status: 500 });
  }
}
