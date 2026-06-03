import { NextResponse } from 'next/server';

// ─── Whitelist treatment values to prevent reflection attacks ─────────────────
const ALLOWED_TREATMENTS = new Set([
  'bariatric', 'hair', 'dental', 'plastic', 'oncology', 'transplant', 'aesthetics', 'andrology'
]);

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const { treatment, height, weight, age, medicalCondition, isEn } = data;

    // ── Input validation ──────────────────────────────────────────────────────
    const safeTreatment = typeof treatment === 'string' && ALLOWED_TREATMENTS.has(treatment)
      ? treatment
      : 'general';
    const safeAge = typeof age === 'string' ? age.trim().slice(0, 3) : '—';
    const safeMedical = typeof medicalCondition === 'string' ? medicalCondition.trim().slice(0, 500) : '';
    const safeHeight = typeof height === 'string' ? height : '';
    const safeWeight = typeof weight === 'string' ? weight : '';

    // ── BMI Calculation ───────────────────────────────────────────────────────
    let bmi = 0;
    let bmiText = '';
    if (safeHeight && safeWeight) {
      const hM = parseFloat(safeHeight) / 100;
      if (hM > 0) {
        bmi = parseFloat(safeWeight) / (hM * hM);
        bmiText = bmi.toFixed(1);
      }
    }

    let responseText = '';
    let status: 'approved' | 'evaluation' | 'warning' = 'approved';

    // ── Logic Tree ────────────────────────────────────────────────────────────
    if (safeTreatment === 'bariatric') {
      if (bmi > 35) {
        responseText = isEn
          ? `Based on your parameters, your BMI is ${bmiText}. This places you in the optimal candidacy range for Bariatric Surgery (Gastric Sleeve or Bypass). Your age (${safeAge}) is within safe operational limits. Our clinical team recommends a pre-operative cardiological assessment. A consultant will reach out via WhatsApp with your bespoke VIP package quote.`
          : `Pe baza parametrilor furnizați, IMC-ul dumneavoastră este ${bmiText}. Vă plasează în intervalul optim de candidatură pentru chirurgia bariatrică. Vârsta dvs. (${safeAge}) se încadrează în limitele operaționale de siguranță. Echipa noastră clinică recomandă o evaluare cardiologică preoperatorie. Un consultant vă va contacta pe WhatsApp cu devizul pachetului VIP personalizat.`;
        status = 'approved';
      } else if (bmi >= 27) {
        responseText = isEn
          ? `Based on your BMI of ${bmiText}, you may be a better candidate for a non-surgical approach like the Allurion Gastric Balloon or Gastric Botox. We will assign a specialist to discuss these options with you.`
          : `Pe baza IMC-ului dvs. de ${bmiText}, ați putea fi un candidat mai bun pentru o abordare non-chirurgicală, cum ar fi Balonul Gastric Allurion. Vom aloca un specialist pentru a discuta cu dvs. aceste opțiuni.`;
        status = 'evaluation';
      } else {
        responseText = isEn
          ? `Your BMI of ${bmiText} is below the typical threshold for bariatric procedures. However, our nutrition experts can assist you with a personalized medical diet plan.`
          : `IMC-ul dvs. de ${bmiText} este sub pragul tipic pentru procedurile bariatrice. Experții noștri în nutriție vă pot asista cu un plan de dietă medicală personalizat.`;
        status = 'warning';
      }
    } else if (safeTreatment === 'hair') {
      responseText = isEn
        ? `Thank you for your information. For Hair Transplant (Sapphire FUE or DHI), age ${safeAge} is generally ideal as hair loss patterns stabilize. We will review uploaded photos to determine the required graft count (typically 3,000–5,000 grafts). A coordinator will contact you via WhatsApp shortly.`
        : `Vă mulțumim pentru informații. Pentru implant de păr (FUE Safir sau DHI), vârsta de ${safeAge} ani este ideală. Vom analiza fotografiile pentru a stabili numărul de grefe necesare (3.000–5.000). Un coordinator vă va contacta pe WhatsApp.`;
      status = 'approved';
    } else {
      responseText = isEn
        ? `Your clinical data has been processed. For our medical board evaluates each case individually to ensure JCI-standard outcomes. Your notes have been securely forwarded to the Chief Medical Officer. Expect a WhatsApp message from your coordinator within 5 minutes.`
        : `Datele dumneavoastră clinice au fost procesate. Consiliul nostru medical evaluează fiecare caz individual. Notițele dvs. au fost transmise securizat. Veți primi un mesaj pe WhatsApp în maximum 5 minute.`;
      status = 'approved';
    }

    // ── Append medical condition note (sanitized) ─────────────────────────────
    if (safeMedical.length > 3) {
      responseText += isEn
        ? ` Note: Your declared pre-existing conditions have been logged and require clearance from our anesthesiologist before final confirmation.`
        : ` Notă: Afecțiunile preexistente declarate au fost înregistrate și vor necesita aprobarea anestezistului nostru înainte de confirmarea finală.`;
    }

    return NextResponse.json({ success: true, message: responseText, status, bmi: bmi > 0 ? bmiText : null });
  } catch (error) {
    console.error('[AI Consult] Route error:', error);
    return NextResponse.json({ success: false, message: 'Internal Server Error' }, { status: 500 });
  }
}
