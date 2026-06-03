import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { type, name, email, phone, message, procedure, details } = body;

    // GoDaddy / Office365 SMTP Ayarları (Ortam değişkenlerinden alınır)
    const smtpEmail = process.env.SMTP_USER; // GoDaddy e-posta adresiniz (örn: info@mevaclinic.com)
    const smtpPassword = process.env.SMTP_PASS; // E-posta şifreniz

    const toEmail = process.env.NEXT_PUBLIC_CONTACT_EMAIL || smtpEmail || 'resulnasipali@gmail.com';

    let subject = '';
    let htmlContent = '';

    if (type === 'quiz') {
      subject = `New Medical Quiz Result: ${procedure}`;
      htmlContent = `
        <h2>Medical Suitability Quiz Result</h2>
        <p><strong>Procedure:</strong> ${procedure}</p>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <br/>
        <h3>Quiz Details:</h3>
        <p>${details ? details.replace(/\\n/g, '<br/>') : ''}</p>
      `;
    } else {
      subject = `New Contact Form Submission from ${name}`;
      htmlContent = `
        <h2>Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <br/>
        <h3>Message:</h3>
        <p>${message}</p>
      `;
    }

    // Nodemailer transporter oluşturuluyor (GoDaddy Office365 için genel ayarlar)
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.office365.com', // GoDaddy genelde Office365 altyapısını kullanır
      port: Number(process.env.SMTP_PORT) || 587,
      secure: false, // 587 portu için false, TLS ile şifrelenir
      auth: {
        user: smtpEmail,
        pass: smtpPassword,
      },
    });

    // E-postayı gönder
    const info = await transporter.sendMail({
      from: `"Meva Clinic System" <${smtpEmail}>`, // GoDaddy'de gönderici adresi doğrulama gerektirdiği için kendi adresiniz olmalı
      to: toEmail,
      replyTo: email, // Müşteri hizmetleriniz "Yanıtla" dediğinde müşterinin e-postasına gider
      subject: subject,
      html: htmlContent,
    });

    return NextResponse.json({ success: true, messageId: info.messageId });
  } catch (error: any) {
    console.error("Email send error:", error);
    return NextResponse.json({ error: error.message || 'Error sending email' }, { status: 500 });
  }
}
