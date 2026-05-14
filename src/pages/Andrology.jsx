import React, { useEffect, useState } from 'react';
import { ChevronDown, Activity, Shield, Zap, Target } from 'lucide-react';
import DynamicSEO from '../components/DynamicSEO';
import ANDROLOGY_METHODS, { DECISION_GUIDE } from '../data/andrologyData';

const TYPE_COLORS = {
  length: 'bg-blue-50 border-blue-200 text-blue-700',
  girth: 'bg-purple-50 border-purple-200 text-purple-700',
  function: 'bg-green-50 border-green-200 text-green-700',
  sensitivity: 'bg-yellow-50 border-yellow-200 text-yellow-700',
  combined: 'bg-prime text-white border-prime',
  prosthesis: 'bg-red-50 border-red-200 text-red-700',
};

const GOAL_BADGE = {
  length: '📏',
  girth: '⭕',
  function: '❤️',
  sensitivity: '🎯',
  combined: '⭐',
  prosthesis: '⚙️',
};

const Andrology = ({ lang = 'ro' }) => {
  const [openId, setOpenId] = useState(null);
  const [activeFilter, setActiveFilter] = useState('all');
  const isEn = lang === 'en';
  const g = obj => obj[isEn ? 'en' : 'ro'];

  useEffect(() => window.scrollTo(0, 0), [lang]);

  const filters = [
    { key: 'all', label: isEn ? 'All Methods' : 'Toate Metodele' },
    { key: 'Surgical', label: isEn ? 'Surgical' : 'Chirurgical' },
    { key: 'Non-Surgical', label: isEn ? 'Non-Surgical' : 'Non-Chirurgical' },
  ];

  const filtered = activeFilter === 'all'
    ? ANDROLOGY_METHODS
    : ANDROLOGY_METHODS.filter(m => g(m.type) === activeFilter || m.type.en === activeFilter);

  return (
    <div className="bg-white min-h-screen pt-32 pb-24">
      <DynamicSEO
        title={isEn ? 'Andrology & Penile Enlargement | Meva Clinic Istanbul' : 'Andrologie & Mărire Penis | Meva Clinic Istanbul'}
        description={isEn
          ? '8 clinically proven penile enlargement and erectile function methods at Meva Clinic. Ligamentolysis, fat injection, HA filler, dermal graft, P-Shot, ESWT and penile prosthesis.'
          : '8 metode clinic dovedite de mărire a penisului și funcție erectilă la Meva Clinic. Ligamentolizā, injecție grāsime, filler HA, grefā dermicā, P-Shot, ESWT și proteząpenianā.'}
        path={isEn ? '/en/andrology' : '/ro/andrologie'}
        keywords="penile enlargement Istanbul, andrology Turkey, ligamentolysis Istanbul, penis enlargement clinic, P-Shot Istanbul, penile prosthesis Turkey, Meva Clinic andrology"
        schemaType="MedicalProcedure"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Hero */}
        <div className="text-center mb-16">
          <span className="inline-block text-xs font-black uppercase tracking-widest text-accent mb-4 bg-accent/10 px-4 py-2 rounded-full">
            {isEn ? 'Meva Andrology Unit · Istanbul' : 'Unitatea de Andrologie Meva · Istanbul'}
          </span>
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-prime mb-6 leading-tight">
            {isEn ? 'Penile Enlargement & Erectile Restoration' : 'Mārire Penis & Restaurare Erectilā'}
          </h1>
          <p className="text-lg text-gray-500 max-w-3xl mx-auto leading-relaxed">
            {isEn
              ? '8 clinically validated procedures — from 15-minute non-surgical fillers to permanent surgical augmentation. Every recommendation follows a personalised anatomical assessment.'
              : '8 proceduri clinic validate — de la fillers non-chirurgicale în 15 minute pânā la augmentare chirurgicalā permanentā. Fiecare recomandare urmeazā o evaluare anatomicā personalizatā.'}
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            {[
              { icon: Shield, label: isEn ? 'Full Confidentiality' : 'Confidențialitate Completā' },
              { icon: Zap, label: isEn ? '15-min Non-Surgical Options' : 'Opțiuni Non-Chirurgicale 15 min' },
              { icon: Target, label: isEn ? 'Anatomical Assessment First' : 'Evaluare Anatomicā Primul Pas' },
            ].map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-2 bg-gray-50 px-4 py-2 rounded-full text-sm text-prime border border-gray-100">
                <Icon size={14} className="text-accent" /> {label}
              </div>
            ))}
          </div>
        </div>

        {/* ── DECISION GUIDE ── */}
        <div className="mb-20">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-prime mb-3">
              {isEn ? 'Which Procedure Is Right for You?' : 'Ce Procedurā vi se Potrivește?'}
            </h2>
            <p className="text-gray-500 text-sm max-w-2xl mx-auto">
              {isEn
                ? 'Match your primary anatomical goal to the recommended procedure. Final selection always follows in-clinic assessment.'
                : 'Potriviți obiectivul anatomic principal cu procedura recomandatā. Selecția finalā urmeazā întotdeauna evaluarea în clinicā.'}
            </p>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-gray-100 shadow-sm">
            <table className="w-full text-sm">
              <thead className="bg-prime text-white">
                <tr>
                  {[
                    isEn ? 'Your Primary Goal' : 'Obiectivul Tāu Principal',
                    isEn ? 'Recommended Procedure' : 'Procedurā Recomandatā',
                    isEn ? 'Key Benefit' : 'Beneficiu Cheie',
                  ].map(h => (
                    <th key={h} className="px-5 py-4 text-left text-xs font-black uppercase tracking-widest">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {DECISION_GUIDE.map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50/60'}>
                    <td className="px-5 py-4">
                      <div className="flex items-center gap-2">
                        <span className="text-lg">{GOAL_BADGE[row.type]}</span>
                        <span className="font-bold text-prime text-xs leading-tight">{g(row.need)}</span>
                      </div>
                    </td>
                    <td className="px-5 py-4">
                      <span className={`inline-block text-xs font-bold px-3 py-1.5 rounded-full border ${TYPE_COLORS[row.type]}`}>
                        {row.primary}
                      </span>
                    </td>
                    <td className="px-5 py-4 text-gray-500 text-xs leading-relaxed">{g(row.secondary)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* ── 8 METHOD FAQ ACCORDION ── */}
        <div className="mb-20">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-prime mb-3">
              {isEn ? '8 Methods — Clinical Detail' : '8 Metode — Detaliu Clinic'}
            </h2>
          </div>

          {/* Filter Tabs */}
          <div className="flex gap-2 mb-6 flex-wrap">
            {filters.map(f => (
              <button
                key={f.key}
                onClick={() => setActiveFilter(f.key)}
                className={`px-4 py-2 rounded-full text-sm font-bold transition-all ${
                  activeFilter === f.key
                    ? 'bg-prime text-white'
                    : 'bg-gray-100 text-gray-500 hover:bg-gray-200'
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>

          <div className="space-y-3">
            {filtered.map(m => (
              <div key={m.id} className="border border-gray-100 rounded-2xl overflow-hidden shadow-sm">
                <button
                  onClick={() => setOpenId(openId === m.id ? null : m.id)}
                  className="w-full px-6 py-5 flex items-center gap-4 text-left bg-white hover:bg-gray-50 transition-colors"
                  aria-expanded={openId === m.id}
                >
                  <span className="text-2xl">{m.icon}</span>
                  <div className="flex-1">
                    <p className="font-bold text-prime text-base leading-tight">{g(m.name)}</p>
                    <div className="flex flex-wrap gap-2 mt-1.5">
                      <span className="text-xs bg-accent/10 text-prime font-bold px-2.5 py-0.5 rounded-full">
                        {isEn ? 'Goal:' : 'Scop:'} {g(m.goal)}
                      </span>
                      <span className="text-xs bg-gray-100 text-gray-500 font-semibold px-2.5 py-0.5 rounded-full">
                        {g(m.type)}
                      </span>
                      <span className="text-xs bg-prime/5 text-prime font-semibold px-2.5 py-0.5 rounded-full hidden sm:inline-block">
                        {g(m.recovery)} recovery
                      </span>
                    </div>
                  </div>
                  <ChevronDown size={18} className={`text-gray-400 transition-transform duration-300 shrink-0 ${openId === m.id ? 'rotate-180' : ''}`} />
                </button>

                <div className={`overflow-hidden transition-all duration-300 ${openId === m.id ? 'max-h-[1000px]' : 'max-h-0'}`}>
                  <div className="px-6 pb-7 pt-3 bg-gray-50 grid grid-cols-1 md:grid-cols-2 gap-5">

                    {/* Technique */}
                    <div className="md:col-span-2 bg-white rounded-xl p-5 border border-gray-100">
                      <p className="text-prime font-black text-xs uppercase tracking-widest mb-3">
                        ⚡ {isEn ? 'Clinical Technique' : 'Tehnicā Clinicā'}
                      </p>
                      <p className="text-sm text-gray-600 leading-relaxed">{g(m.summary)}</p>
                    </div>

                    {/* Is this for me */}
                    <div className="bg-white rounded-xl p-5 border border-gray-100">
                      <p className="text-accent font-black text-xs uppercase tracking-widest mb-3">
                        🎯 {isEn ? 'Is This For Me?' : 'Este Pentru Mine?'}
                      </p>
                      <p className="text-sm text-gray-600 leading-relaxed">{g(m.isForMe)}</p>
                    </div>

                    {/* Meva Note */}
                    <div className="bg-white rounded-xl p-5 border border-gray-100">
                      <p className="text-green-600 font-black text-xs uppercase tracking-widest mb-3">
                        ✅ {isEn ? 'Meva Quality' : 'Calitate Meva'}
                      </p>
                      <p className="text-sm text-gray-600 leading-relaxed">{g(m.mevaNote)}</p>
                      <div className="flex flex-wrap gap-2 mt-4">
                        <span className="text-xs bg-prime/5 text-prime font-bold px-3 py-1 rounded-full">
                          {isEn ? 'Recovery:' : 'Recuperare:'} {g(m.recovery)}
                        </span>
                        <span className="text-xs bg-accent/10 text-prime font-bold px-3 py-1 rounded-full">
                          {isEn ? 'Duration:' : 'Durată:'} {g(m.duration)}
                        </span>
                        <span className="text-xs bg-gray-100 text-gray-600 font-bold px-3 py-1 rounded-full">
                          {isEn ? 'Anaesthesia:' : 'Anestezie:'} {g(m.anesthesia)}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── CONFIDENTIALITY FOOTER ── */}
        <div className="bg-[#0b1626] rounded-[2rem] p-10 text-white text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(212,175,55,0.1),_transparent_60%)]" />
          <Shield size={40} className="text-accent mx-auto mb-4" />
          <h3 className="text-2xl font-serif font-bold mb-4">
            {isEn ? 'Complete Confidentiality — From First Contact' : 'Confidențialitate Completā — De la Primul Contact'}
          </h3>
          <p className="text-gray-400 max-w-2xl mx-auto text-sm leading-relaxed mb-8">
            {isEn
              ? 'All consultations are private, conducted by an andrologist subspecialist, and entirely confidential. WhatsApp conversations are end-to-end encrypted. Medical records are stored under anonymised patient ID per GDPR/KVKK.'
              : 'Toate consultațiile sunt private, conduse de un subspecialist androlog, și complet confidențiale. Conversațiile WhatsApp sunt criptate end-to-end. Dosarele medicale sunt stocate sub ID pacient anonimizat conform GDPR/KVKK.'}
          </p>
          <a
            href={`https://wa.me/905324675941?text=${encodeURIComponent(isEn ? 'I want a confidential andrology consultation.' : 'Doresc o consultație de andrologie confidențialā.')}`}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-3 bg-accent text-prime font-black py-4 px-10 rounded-full hover:bg-yellow-400 transition-all"
          >
            <Activity size={18} />
            {isEn ? 'Confidential WhatsApp Consultation' : 'Consultație WhatsApp Confidențialā'}
          </a>
        </div>

      </div>
    </div>
  );
};

export default Andrology;
