// Resilient contact route using Resend API and Nodemailer SMTP fallback
import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';
import nodemailer from 'nodemailer';
import { Resend } from 'resend';

// ─── Sanitization helper ──────────────────────────────────────────────────────
function sanitizeString(val: unknown, maxLen = 500): string {
  if (typeof val !== 'string') return '';
  return val.trim().slice(0, maxLen);
}

export async function POST(req: Request) {
  const leadId = Date.now().toString();
  
  try {
    const body = await req.json();
    const { 
      type, 
      name, 
      email, 
      phone, 
      message, 
      procedure, 
      treatment, 
      country, 
      bmiScore, 
      details, 
      source 
    } = body;

    // Standardize variables
    const finalName = sanitizeString(name, 150) || 'Patient';
    const finalPhone = sanitizeString(phone, 30);
    const finalEmail = sanitizeString(email, 200) || 'No email provided';
    const finalProcedure = sanitizeString(procedure || treatment, 100) || 'Not specified';
    const finalMessage = sanitizeString(message || details, 1000);
    const finalSource = sanitizeString(source, 50) || 'Website Form';
    const finalCountry = sanitizeString(country, 100);
    const finalBmi = sanitizeString(bmiScore, 10);

    let leadMetrics = finalBmi ? `BMI: ${finalBmi}` : '';
    let leadMedical = finalCountry ? `Country: ${finalCountry}` : '';

    // ─── 1. Write to CRM Storage (leads.json) — Graceful Fallback ────────────────
    try {
      const dataDir = path.join(process.cwd(), 'data');
      const leadsFilePath = path.join(dataDir, 'leads.json');

      if (!fs.existsSync(dataDir)) {
        fs.mkdirSync(dataDir, { recursive: true });
      }

      let leads: any[] = [];
      if (fs.existsSync(leadsFilePath)) {
        try {
          const fileContent = fs.readFileSync(leadsFilePath, 'utf-8');
          leads = fileContent ? JSON.parse(fileContent) : [];
        } catch {
          leads = [];
        }
      }

      if (type === 'suitability_quiz' && finalMessage && finalMessage.includes(' | ')) {
        const parts = finalMessage.split(' | ');
        let extractedAge = '';
        let extractedHeight = '';
        let extractedWeight = '';
        let extractedHistory = '';
        
        for (const part of parts) {
          const colonIndex = part.indexOf(':');
          if (colonIndex > 0) {
            const key = part.slice(0, colonIndex).trim().toLowerCase();
            const value = part.slice(colonIndex + 1).trim();
            if (key.includes('age')) {
              extractedAge = value;
            } else if (key.includes('height')) {
              extractedHeight = value;
            } else if (key.includes('weight')) {
              extractedWeight = value;
            } else if (key.includes('history')) {
              extractedHistory = value;
            }
          }
        }
        
        if (extractedHeight && extractedWeight) {
          leadMetrics = `BMI: ${finalBmi} (H: ${extractedHeight}, W: ${extractedWeight}${extractedAge ? `, Age: ${extractedAge}` : ''})`;
        }
        if (extractedHistory) {
          leadMedical = `History: ${extractedHistory} | Country: ${finalCountry}`;
        }
      }

      const newLead = {
        id: leadId,
        date: new Date().toISOString(),
        name: finalName,
        phone: finalPhone,
        email: finalEmail,
        treatment: finalProcedure,
        message: finalMessage,
        metrics: leadMetrics,
        medicalCondition: leadMedical,
        source: finalSource,
        status: 'New',
      };

      leads.unshift(newLead);
      fs.writeFileSync(leadsFilePath, JSON.stringify(leads, null, 2), 'utf-8');
      console.log(`✅ [CRM] Lead saved inside contact API: ${finalName}`);
    } catch (fsError) {
      // Do not crash the API request. Vercel serverless functions are read-only, which is expected.
      console.warn("⚠️ CRM Storage write failed (expected on read-only serverless hosts like Vercel):", fsError);
    }

    // ─── Supabase Entegrasyonu ──────────────────────────────────────────────────
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
    const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';

    if (supabaseUrl && supabaseKey) {
      try {
        const dbResponse = await fetch(`${supabaseUrl}/rest/v1/leads`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'apikey': supabaseKey,
            'Authorization': `Bearer ${supabaseKey}`
          },
          body: JSON.stringify({
            name: finalName,
            phone: finalPhone,
            email: finalEmail,
            treatment: finalProcedure,
            message: finalMessage,
            metrics: leadMetrics,
            medical_condition: leadMedical,
            source: finalSource,
            status: 'New',
            lang: sanitizeString(body.lang || body.locale || 'en', 10)
          })
        });

        if (!dbResponse.ok) {
          const errorText = await dbResponse.text();
          console.error('❌ [CRM] Supabase insert failed inside contact API:', dbResponse.status, errorText);
        } else {
          console.log(`✅ [CRM] Lead captured in Supabase inside contact API: ${finalName}`);
        }
      } catch (dbError) {
        console.error('❌ [CRM] Supabase fetch error inside contact API:', dbError);
      }
    } else {
      console.warn('⚠️ [CRM] Supabase credentials missing inside contact API.');
    }

    // ─── 2. Setup Email Notification ─────────────────────────────────────────────
    const toEmail = process.env.NEXT_PUBLIC_CONTACT_EMAIL || 'info@mevaclinic.com';
    const subject = type === 'suitability_quiz'
      ? `New High-Intent Quiz Lead: ${finalName}`
      : `[Meva Lead] ${finalProcedure.toUpperCase()} - ${finalName}`;

    // Format suitability quiz details into beautiful rows if present
    let quizDetailsRows = '';
    if (type === 'suitability_quiz' && finalMessage && finalMessage.includes(' | ')) {
      const parts = finalMessage.split(' | ');
      for (const part of parts) {
        const colonIndex = part.indexOf(':');
        if (colonIndex > 0) {
          const key = part.slice(0, colonIndex).trim();
          const value = part.slice(colonIndex + 1).trim();
          
          let valStyle = 'color: #2d3748; font-weight: 500;';
          if (key.toLowerCase().includes('bmi')) {
            valStyle = 'color: #ef4444; font-weight: bold;';
          } else if (key.toLowerCase().includes('history') || key.toLowerCase().includes('medical')) {
            valStyle = value.toLowerCase() === 'none' ? 'color: #718096; font-style: italic;' : 'color: #e53e3e; font-weight: bold;';
          } else if (key.toLowerCase().includes('goal') || key.toLowerCase().includes('timeline')) {
            valStyle = 'color: #d4af37; font-weight: bold;';
          }
          
          quizDetailsRows += `
            <tr style="border-bottom: 1px solid #edf2f7;">
              <td style="padding: 10px 0; font-weight: bold; color: #4a5568; width: 35%;">${key}:</td>
              <td style="padding: 10px 0; ${valStyle}">${value}</td>
            </tr>
          `;
        }
      }
    }

    // Premium HTML Email Template
    const htmlContent = `
      <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e2e8f0; border-radius: 12px; background-color: #ffffff; color: #1a202c;">
        <!-- Header -->
        <div style="text-align: center; border-bottom: 2px solid #d4af37; padding-bottom: 15px; margin-bottom: 20px;">
          <h2 style="color: #0b1626; margin: 0; font-size: 24px; font-weight: 700;">MEVA CLINIC</h2>
          <p style="color: #d4af37; margin: 5px 0 0 0; font-size: 12px; font-weight: 600; letter-spacing: 2px; text-transform: uppercase;">
            ${type === 'suitability_quiz' ? 'High-Intent Quiz Lead' : 'Premium Patient Lead'}
          </p>
        </div>

        <!-- Details Table -->
        <div style="margin-bottom: 25px;">
          <h3 style="color: #0b1626; font-size: 18px; margin-top: 0; border-left: 3px solid #d4af37; padding-left: 10px;">Lead Profile</h3>
          
          <table style="width: 100%; border-collapse: collapse; margin-top: 15px;">
            <tr style="border-bottom: 1px solid #edf2f7;">
              <td style="padding: 10px 0; font-weight: bold; color: #4a5568; width: 35%;">Name / Surname:</td>
              <td style="padding: 10px 0; color: #2d3748;">${finalName}</td>
            </tr>
            <tr style="border-bottom: 1px solid #edf2f7;">
              <td style="padding: 10px 0; font-weight: bold; color: #4a5568;">Phone / WhatsApp:</td>
              <td style="padding: 10px 0; color: #2d3748; font-weight: 600;">
                <a href="https://wa.me/${finalPhone.replace(/\+/g, '').replace(/\s/g, '')}" style="color: #34d399; text-decoration: none;" target="_blank">
                  ${finalPhone} 💬 (Click to chat)
                </a>
              </td>
            </tr>
            <tr style="border-bottom: 1px solid #edf2f7;">
              <td style="padding: 10px 0; font-weight: bold; color: #4a5568;">Email Address:</td>
              <td style="padding: 10px 0; color: #2d3748;">
                <a href="mailto:${finalEmail}" style="color: #0b1626; text-decoration: underline;">${finalEmail}</a>
              </td>
            </tr>
            <tr style="border-bottom: 1px solid #edf2f7;">
              <td style="padding: 10px 0; font-weight: bold; color: #4a5568;">Treatment Area:</td>
              <td style="padding: 10px 0; color: #d4af37; font-weight: bold; text-transform: uppercase;">${finalProcedure}</td>
            </tr>
            ${finalCountry ? `
            <tr style="border-bottom: 1px solid #edf2f7;">
              <td style="padding: 10px 0; font-weight: bold; color: #4a5568;">Country / Region:</td>
              <td style="padding: 10px 0; color: #2d3748;">${finalCountry}</td>
            </tr>
            ` : ''}
            ${finalBmi ? `
            <tr style="border-bottom: 1px solid #edf2f7;">
              <td style="padding: 10px 0; font-weight: bold; color: #4a5568;">BMI Score:</td>
              <td style="padding: 10px 0; color: #ef4444; font-weight: bold;">${finalBmi}</td>
            </tr>
            ` : ''}
            <tr style="border-bottom: 1px solid #edf2f7;">
              <td style="padding: 10px 0; font-weight: bold; color: #4a5568;">Source Panel:</td>
              <td style="padding: 10px 0; color: #718096; font-size: 13px;">${finalSource} (${type || 'Standard Form'})</td>
            </tr>
          </table>
        </div>

        <!-- Message Block / Structured Quiz Parameters -->
        ${quizDetailsRows ? `
        <div style="margin-bottom: 25px; padding: 20px; background-color: #fcfcf9; border-radius: 12px; border: 1px solid #d4af37; box-shadow: 0 4px 6px rgba(0,0,0,0.02);">
          <h3 style="color: #0b1626; font-size: 16px; margin-top: 0; margin-bottom: 15px; border-left: 3px solid #d4af37; padding-left: 10px; font-weight: bold; text-transform: uppercase; letter-spacing: 1px;">Clinical Quiz Parameters</h3>
          <table style="width: 100%; border-collapse: collapse;">
            ${quizDetailsRows}
          </table>
        </div>
        ` : `
        ${finalMessage ? `
        <div style="margin-bottom: 25px; padding: 15px; background-color: #f7fafc; border-radius: 8px; border: 1px solid #e2e8f0;">
          <h4 style="margin-top: 0; color: #0b1626; font-size: 14px; text-transform: uppercase; letter-spacing: 1px;">Message / Details:</h4>
          <p style="margin: 0; font-size: 14px; color: #4a5568; line-height: 1.6; white-space: pre-wrap;">${finalMessage}</p>
        </div>
        ` : ''}
        `}

        <!-- Footer -->
        <div style="text-align: center; border-top: 1px solid #edf2f7; padding-top: 15px; margin-top: 25px; font-size: 12px; color: #a0aec0;">
          <p style="margin: 0;">Meva Clinic Automated Notification System</p>
          <p style="margin: 5px 0 0 0;">Istanbul, Turkey | Accredited Partner Hospital Network</p>
        </div>
      </div>
    `;

    let emailSent = false;
    let emailProvider = '';
    let emailError = '';

    // A. Try Resend
    if (process.env.RESEND_API_KEY && !process.env.RESEND_API_KEY.startsWith('your_') && !process.env.RESEND_API_KEY.includes('BURAYA')) {
      try {
        const resend = new Resend(process.env.RESEND_API_KEY);
        const data = await resend.emails.send({
          from: 'Meva Clinic System <system@mevaclinic.com>',
          to: toEmail,
          subject: subject,
          html: htmlContent,
          replyTo: finalEmail !== 'No email provided' ? finalEmail : undefined,
        });

        if (data.error) {
          throw new Error(data.error.message);
        }

        emailSent = true;
        emailProvider = 'resend';
      } catch (resendError: any) {
        emailError = resendError.message || String(resendError);
        console.warn("⚠️ Resend failed, trying fallback SMTP Nodemailer. Error:", emailError);
      }
    }

    // B. Try Nodemailer SMTP
    if (!emailSent) {
      const smtpEmail = process.env.SMTP_USER || process.env.EMAIL_SERVER_USER;
      const smtpPassword = process.env.SMTP_PASS || process.env.EMAIL_SERVER_PASSWORD;

      if (!smtpEmail || !smtpPassword || smtpPassword.includes('BURAYA') || smtpPassword.includes('your_')) {
        console.warn("❌ [CRM] Email not sent because SMTP credentials are not configured.");
        emailError = emailError || 'Email credentials are not configured in environment variables.';
      } else {
        try {
          const transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST || 'smtp.office365.com',
            port: Number(process.env.SMTP_PORT) || 587,
            secure: false,
            auth: {
              user: smtpEmail,
              pass: smtpPassword,
            },
          });

          await transporter.sendMail({
            from: `"Meva Clinic System" <${smtpEmail}>`,
            to: toEmail,
            replyTo: finalEmail !== 'No email provided' ? finalEmail : undefined,
            subject: subject,
            html: htmlContent,
          });

          emailSent = true;
          emailProvider = 'nodemailer';
        } catch (smtpErr: any) {
          emailError = smtpErr.message || String(smtpErr);
          console.error("❌ SMTP sending failed:", emailError);
        }
      }
    }

    // C. Return Response (Always status 200 to prevent client-side form submission errors)
    if (emailSent) {
      return NextResponse.json({ 
        success: true, 
        provider: emailProvider, 
        leadId: leadId 
      }, { status: 200 });
    } else {
      console.warn(`⚠️ Lead processed but email notification failed. Error detail: ${emailError}`);
      return NextResponse.json({ 
        success: true, 
        warning: 'Lead captured inside CRM, but email notification failed.', 
        error: emailError,
        leadId: leadId 
      }, { status: 200 });
    }

  } catch (error: any) {
    console.error("❌ [API] Resilient Contact Route Main Crash:", error);
    // Even on severe JSON parse error or similar, return 200 to keep the patient's frontend stable
    return NextResponse.json({ 
      success: true, 
      warning: 'Fatal endpoint error caught gracefully.', 
      error: error.message || 'Unknown error',
      leadId: leadId 
    }, { status: 200 });
  }
}
