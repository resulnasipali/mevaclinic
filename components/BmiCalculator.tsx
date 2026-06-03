// @ts-nocheck
'use client';

import React, { useState } from 'react';
import { useLeadContext } from '../context/LeadContext';
import { Activity, ArrowRight, CheckCircle, Phone, AlertTriangle, Info } from 'lucide-react';
import { PxTrack } from '../utils/pixel';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { tUI } from '@/utils/uiTranslations';

import { pushToDataLayer } from '../utils/AnalyticsUtils';

// ─── Gauge Chart (pure SVG, no dependency) ───────────────────────────────────
const GaugeChart = ({ bmi }) => {
  const MIN = 10, MAX = 50;
  const clamp = (v, a, b) => Math.min(Math.max(v, a), b);
  const pct = (clamp(bmi, MIN, MAX) - MIN) / (MAX - MIN); // 0-1
  const angle = -150 + pct * 300; // sweeps 300°
  const toRad = (d) => (d * Math.PI) / 180;
  const needleX = 100 + 72 * Math.cos(toRad(angle));
  const needleY = 100 + 72 * Math.sin(toRad(angle));

  // Arc helper
  const arc = (startDeg, endDeg, r, color) => {
    const s = toRad(startDeg), e = toRad(endDeg);
    const x1 = 100 + r * Math.cos(s), y1 = 100 + r * Math.sin(s);
    const x2 = 100 + r * Math.cos(e), y2 = 100 + r * Math.sin(e);
    const large = endDeg - startDeg > 180 ? 1 : 0;
    return <path d={`M${x1} ${y1} A${r} ${r} 0 ${large} 1 ${x2} ${y2}`} stroke={color} strokeWidth="14" fill="none" strokeLinecap="round" />;
  };

  const color = bmi < 18.5 ? '#60a5fa' : bmi < 25 ? '#34d399' : bmi < 30 ? '#fbbf24' : bmi < 35 ? '#f97316' : '#ef4444';

  return (
    <svg viewBox="0 0 200 130" className="w-full max-w-[260px] mx-auto" aria-hidden="true">
      {arc(-150, -90, 76, '#60a5fa')}
      {arc(-90,  -30, 76, '#34d399')}
      {arc(-30,   30, 76, '#fbbf24')}
      {arc( 30,   90, 76, '#f97316')}
      {arc( 90,  150, 76, '#ef4444')}
      {/* Needle */}
      <line x1="100" y1="100" x2={needleX} y2={needleY} stroke="#0b1626" strokeWidth="3" strokeLinecap="round" />
      <circle cx="100" cy="100" r="7" fill="#0b1626" />
      <circle cx="100" cy="100" r="3" fill="#d4af37" />
      {/* BMI value */}
      <text x="100" y="122" textAnchor="middle" fontSize="18" fontWeight="bold" fill={color}>{bmi}</text>
      {/* Scale labels */}
      {[['10', -150], ['25', -30], ['40', 90]].map(([label, deg]) => {
        const r = 92, rad = toRad(deg);
        return <text key={label} x={100 + r * Math.cos(rad)} y={100 + r * Math.sin(rad)} textAnchor="middle" dominantBaseline="middle" fontSize="7" fill="#9ca3af">{label}</text>;
      })}
    </svg>
  );
};

// ─── Ideal weight (Devine formula) ───────────────────────────────────────────
const idealWeight = (heightCm, gender) => {
  const inches = (heightCm - 152.4) / 2.54;
  const base = gender === 'male' ? 50 : 45.5;
  const ideal = base + 2.3 * inches;
  const lo = Math.round(ideal * 0.9);
  const hi = Math.round(ideal * 1.1);
  return { lo: Math.max(lo, 40), hi: Math.max(hi, 45) };
};

// ─── BMI interpretation ──────────────────────────────────────────────────────
const interpret = (bmi, lang) => {
  if (bmi < 18.5) return { label: tUI("Underweight", lang), color: '#60a5fa', bg: 'bg-blue-50', border: 'border-blue-200', cta: false, bariatric: false };
  if (bmi < 25)   return { label: tUI("Normal Weight", lang), color: '#34d399', bg: 'bg-green-50', border: 'border-green-200', cta: false, bariatric: false };
  if (bmi < 30)   return { label: tUI("Overweight", lang), color: '#fbbf24', bg: 'bg-yellow-50', border: 'border-yellow-200', cta: tUI("Request Gastric Balloon Info", lang), bariatric: false };
  if (bmi < 35)   return { label: tUI("Obesity Class I", lang), color: '#f97316', bg: 'bg-orange-50', border: 'border-orange-200', cta: tUI("Get a Free Evaluation", lang), bariatric: false };
  return { label: tUI("Obesity Class II–III", lang), color: '#ef4444', bg: 'bg-red-50', border: 'border-red-200', cta: tUI("Request Bariatric Consultation", lang), bariatric: true };
};

// ─── Main Component ──────────────────────────────────────────────────────────
const BmiCalculator = ({ lang = 'en' }: { lang?: string }) => {
  const { setBmiData } = useLeadContext();
  const pathname = usePathname();
  const isEn = (pathname || "/").startsWith('/en');

  const [gender, setGender] = useState('female');
  const [age, setAge]       = useState('');
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [result, setResult] = useState(null);
  const [name, setName]     = useState('');
  const [phone, setPhone]   = useState('');
  const [sent, setSent]     = useState(false);
  const [sending, setSending] = useState(false);

  const calculate = (e) => {
    e.preventDefault();
    if (!weight || !height) return;
    const h = parseFloat(height) / 100;
    const bmi = parseFloat((parseFloat(weight) / (h * h)).toFixed(1));
    const interp = interpret(bmi, lang);
    const iw = idealWeight(parseFloat(height), gender);
    const res = { bmi, ...interp, idealLo: iw.lo, idealHi: iw.hi };
    setResult(res);
    setBmiData({ score: bmi, message: interp.label, color: '', cta: interp.cta });
    PxTrack?.('BMI_Calculated', { bmi_score: bmi, category: interp.label });
  };

  const submitLead = async (e) => {
    e.preventDefault();
    if (!name || !phone || !result) return;
    setSending(true);
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          type: 'bmi_calculator',
          name,
          phone,
          procedure: result.bariatric ? 'bariatric' : 'weight_loss_consultation',
          bmiScore: result.bmi.toString(),
          details: `BMI Status: ${result.label}. Ideal Weight Range: ${result.idealLo} - ${result.idealHi} kg.`,
          source: 'BmiCalculator',
        }),
      });
      if (response.ok) {
        pushToDataLayer?.('generate_lead', { form_location: 'bmi_calculator' });
        setSent(true);
      } else {
        alert(lang === 'ro' ? 'Eroare la trimiterea datelor.' : 'Error sending details. Please try again.');
      }
    } catch (err) {
      console.error('BMI lead submit error:', err);
      alert(lang === 'ro' ? 'Eroare de rețea.' : 'Network error. Please try again.');
    } finally {
      setSending(false);
    }
  };

  const ageNote = result && age && parseInt(age) >= 65
    ? (tUI("⚠️ For patients over 65, bariatric eligibility requires additional cardiac evaluation.", lang))
    : null;

  return (
    <section id="bmi" className="py-24 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-accent/5 rounded-full -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-prime/5 rounded-full translate-x-1/3 translate-y-1/3 pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent text-xs font-bold uppercase tracking-widest border border-accent/20 mb-5">
            <Activity size={14} className="fill-accent/30" />
            {tUI("Medical BMI Screening Tool", lang)}
          </div>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-prime mb-4">
            {tUI("BMI Calculator & ", lang)}
            <span className="text-accent">{tUI("Bariatric Check", lang)}</span>
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto text-sm md:text-base leading-relaxed">
            {tUI("Calculate your BMI instantly. Our algorithm analyses gender, age and height to provide a medically personalised result.", lang)}
          </p>
        </div>

        <div className="bg-white rounded-[2.5rem] shadow-[0_20px_60px_rgba(11,22,38,0.08)] border border-gray-100 overflow-hidden">
          {/* Gold accent top bar */}
          <div className="h-1.5 bg-gradient-to-r from-accent via-yellow-300 to-accent" />

          <div className="p-8 md:p-12">
            <form onSubmit={calculate} aria-label={isEn ? 'BMI Calculator' : 'Calculator IMC'}>

              {/* Gender Toggle */}
              <div className="mb-8">
                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">{tUI("Gender", lang)}</p>
                <div className="inline-flex rounded-2xl bg-gray-50 border border-gray-100 p-1 gap-1" role="radiogroup" aria-label={tUI("Select gender", lang)}>
                  {[
                    { val: 'male',   labelEn: '♂ Male',   labelRo: '♂ Masculin' },
                    { val: 'female', labelEn: '♀ Female', labelRo: '♀ Feminin'  },
                  ].map(({ val, labelEn, labelRo }) => (
                    <button
                      key={val}
                      type="button"
                      role="radio"
                      aria-checked={gender === val}
                      onClick={() => setGender(val)}
                      className={`px-8 py-3.5 rounded-xl text-sm font-bold transition-all duration-200 ${
                        gender === val
                          ? 'bg-prime text-white shadow-lg scale-[1.02]'
                          : 'text-gray-400 hover:text-prime'
                      }`}
                    >
                      {tUI(labelEn, lang)}
                    </button>
                  ))}
                </div>
              </div>

              {/* Inputs Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-8">
                {/* Age */}
                <div>
                  <label htmlFor="bmi-age" className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">
                    {tUI("Age (years)", lang)}
                  </label>
                  <input
                    id="bmi-age"
                    type="number"
                    value={age}
                    onChange={e => setAge(e.target.value)}
                    placeholder="ex: 38"
                    min="15" max="90"
                    className="w-full border border-gray-200 rounded-2xl px-5 py-4 text-lg font-semibold bg-gray-50 focus:bg-white focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all"
                  />
                </div>
                {/* Height */}
                <div>
                  <label htmlFor="bmi-height" className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">
                    {tUI("Height (cm)", lang)}
                  </label>
                  <input
                    id="bmi-height"
                    type="number"
                    value={height}
                    onChange={e => setHeight(e.target.value)}
                    placeholder="ex: 172"
                    min="100" max="250"
                    required aria-required="true"
                    className="w-full border border-gray-200 rounded-2xl px-5 py-4 text-lg font-semibold bg-gray-50 focus:bg-white focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all"
                  />
                </div>
                {/* Weight */}
                <div>
                  <label htmlFor="bmi-weight" className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">
                    {tUI("Weight (kg)", lang)}
                  </label>
                  <input
                    id="bmi-weight"
                    type="number"
                    value={weight}
                    onChange={e => setWeight(e.target.value)}
                    placeholder="ex: 95"
                    min="30" max="350"
                    required aria-required="true"
                    className="w-full border border-gray-200 rounded-2xl px-5 py-4 text-lg font-semibold bg-gray-50 focus:bg-white focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all"
                  />
                </div>
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="w-full bg-prime text-white font-bold py-4 rounded-2xl shadow-lg hover:bg-[#0b1626] transition-all hover:-translate-y-0.5 active:scale-95 flex items-center justify-center gap-3 text-base"
              >
                <Activity size={18} />
                {tUI("Analyse My BMI", lang)}
                <ArrowRight size={18} />
              </button>
            </form>

            {/* ── RESULTS ─────────────────────────────────────────────────── */}
            {result && (
              <div className="mt-10 animate-fade-up">
                {/* Divider */}
                <div className="h-px bg-gray-100 mb-10" />

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">

                  {/* LEFT: Gauge + Category */}
                  <div className="flex flex-col items-center text-center">
                    <GaugeChart bmi={result.bmi} />
                    <div className={`mt-4 inline-flex items-center gap-2 px-5 py-2 rounded-full border ${result.bg} ${result.border}`}>
                      <span className="w-2.5 h-2.5 rounded-full" style={{ background: result.color }} />
                      <span className="font-black text-sm" style={{ color: result.color }}>{result.label}</span>
                    </div>
                    <p className="text-gray-400 text-xs mt-3">
                      {tUI("Your BMI:", lang)} <strong style={{ color: result.color }}>{result.bmi}</strong>
                    </p>

                    {/* Scale legend */}
                    <div className="mt-6 w-full grid grid-cols-5 gap-1 text-center">
                      {[
                        { label: isEn ? 'Under' : 'Sub', range: '< 18.5', color: '#60a5fa' },
                        { label: isEn ? 'Normal' : 'Normal', range: '18.5–24.9', color: '#34d399' },
                        { label: isEn ? 'Over' : 'Supra', range: '25–29.9', color: '#fbbf24' },
                        { label: 'Ob. I', range: '30–34.9', color: '#f97316' },
                        { label: 'Ob. II+', range: '≥ 35', color: '#ef4444' },
                      ].map(s => (
                        <div key={s.label}>
                          <div className="w-full h-2 rounded-full mb-1" style={{ background: s.color }} />
                          <p className="text-[9px] font-bold text-gray-500">{s.label}</p>
                          <p className="text-[8px] text-gray-400">{s.range}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* RIGHT: Analysis cards */}
                  <div className="space-y-4">

                    {/* Ideal weight card */}
                    <div className="bg-gray-50 border border-gray-100 rounded-2xl p-5">
                      <div className="flex items-center gap-2 mb-3">
                        <Info size={15} className="text-accent" />
                        <p className="text-xs font-bold uppercase tracking-widest text-gray-400">
                          {tUI("Ideal Weight Range", lang)}
                        </p>
                      </div>
                      <p className="text-2xl font-black text-prime">
                        {result.idealLo} – {result.idealHi} <span className="text-base font-semibold text-gray-400">kg</span>
                      </p>
                      <p className="text-xs text-gray-500 mt-1">
                        {isEn
                          ? `Devine formula adjusted for ${gender === 'male' ? 'male' : 'female'} physiology${age ? ` at age ${age}` : ''}.`
                          : `Formula Devine ajustată pentru fiziologia ${gender === 'male' ? 'masculină' : 'feminină'}${age ? ` la vârsta de ${age} ani` : ''}.`}
                      </p>
                    </div>

                    {/* To-lose card (if overweight) */}
                    {result.bmi >= 25 && parseFloat(weight) > result.idealHi && (
                      <div className="bg-blue-50 border border-blue-100 rounded-2xl p-5">
                        <p className="text-xs font-bold uppercase tracking-widest text-blue-400 mb-1">
                          {tUI("Excess Weight", lang)}
                        </p>
                        <p className="text-xl font-black text-blue-600">
                          ~{Math.round(parseFloat(weight) - result.idealHi)} kg
                        </p>
                        <p className="text-xs text-blue-500 mt-1">
                          {tUI("to reach your ideal weight range", lang)}
                        </p>
                      </div>
                    )}

                    {/* Age warning */}
                    {ageNote && (
                      <div className="bg-yellow-50 border border-yellow-200 rounded-2xl p-4 flex gap-3">
                        <AlertTriangle size={16} className="text-yellow-500 shrink-0 mt-0.5" />
                        <p className="text-xs text-yellow-700 leading-relaxed">{ageNote}</p>
                      </div>
                    )}

                    {/* ── BARIATRIC ELIGIBILITY (BMI ≥ 35) ─────────────────── */}
                    {result.bariatric && (
                      <div className="bg-[#0b1626] rounded-2xl p-6 text-white border border-white/5 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-accent/10 rounded-full blur-3xl -mr-10 -mt-10" />
                        <div className="flex items-start gap-3 mb-4">
                          <div className="w-9 h-9 bg-accent rounded-xl flex items-center justify-center shrink-0">
                            <CheckCircle size={18} className="text-prime" />
                          </div>
                          <div>
                            <p className="font-black text-accent text-sm uppercase tracking-widest mb-0.5">
                              {tUI("Bariatric Surgery Eligible", lang)}
                            </p>
                            <p className="text-gray-400 text-xs">BMI ≥ 35 · {tUI("WHO Class II–III Obesity", lang)}</p>
                          </div>
                        </div>
                        <p className="text-gray-300 text-sm leading-relaxed mb-5">
                          {tUI("Based on your BMI, you meet the international clinical criteria (WHO/IFSO) for bariatric surgery. Gastric Sleeve or Bypass at Meva Clinic Istanbul could be the decisive step toward lasting weight loss.", lang)}
                        </p>
                        <Link
                          href={isEn ? '/en/contact' : '/ro/contact'}
                          className="w-full flex items-center justify-center gap-2 bg-accent text-prime font-bold py-3.5 rounded-xl hover:bg-yellow-400 transition-all shadow-lg text-sm"
                        >
                          <Phone size={15} />
                          {tUI("Book Free Bariatric Consultation", lang)}
                        </Link>
                      </div>
                    )}

                    {/* Non-bariatric CTA */}
                    {result.cta && !result.bariatric && !sent && (
                      <form onSubmit={submitLead} className="bg-gray-50 border border-gray-100 rounded-2xl p-5">
                        <p className="font-bold text-prime text-sm mb-4">{result.cta}</p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-3">
                          <input
                            type="text"
                            placeholder={tUI("Full Name *", lang)}
                            value={name}
                            onChange={e => setName(e.target.value)}
                            required
                            className="border border-gray-200 rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20"
                          />
                          <input
                            type="tel"
                            placeholder={tUI("Phone Number *", lang)}
                            value={phone}
                            onChange={e => setPhone(e.target.value)}
                            required
                            className="border border-gray-200 rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20"
                          />
                        </div>
                        <button
                          type="submit"
                          disabled={sending}
                          className="w-full bg-accent text-prime font-bold py-3.5 rounded-xl shadow hover:bg-yellow-400 transition-all text-sm disabled:opacity-60"
                        >
                          {sending ? (tUI("Sending…", lang)) : (tUI("Request Callback in 15 min", lang))}
                        </button>
                      </form>
                    )}

                    {/* Success */}
                    {sent && (
                      <div className="flex items-center gap-3 p-4 bg-green-50 border border-green-200 rounded-2xl">
                        <CheckCircle size={20} className="text-green-600 shrink-0" />
                        <p className="text-green-700 font-bold text-sm">
                          {tUI("✅ Request sent! A consultant will call within 15 minutes.", lang)}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Medical disclaimer */}
        <p className="text-center text-[11px] text-gray-400 mt-6 max-w-2xl mx-auto leading-relaxed">
          {tUI("⚕️ This tool is for informational purposes only and does not constitute medical advice. Always consult a qualified physician before making health decisions.", lang)}
        </p>
      </div>
    </section>
  );
};

export default BmiCalculator;
