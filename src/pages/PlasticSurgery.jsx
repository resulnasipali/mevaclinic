import React, { useEffect, useState } from 'react';
import { Activity, Plus, Minus, Scissors, Zap, Shield, Sparkles, Ruler, Microscope, ChevronDown } from 'lucide-react';
import PLASTIC from '../data/plasticData';
import DoctorBadge from '../components/DoctorBadge';
import PatientJourneyTimeline from '../components/PatientJourneyTimeline';
import DynamicSEO from '../components/DynamicSEO';
import BeforeAfterSlider from '../components/BeforeAfterSlider';
import { TechCard, CertRow, RecoveryTimeline, VerifiedBadge, LeadMagnetBox } from '../components/ClinicalBadges';

const plasticRecoveryEn = [
  { period: 'Day 1', label: 'Post-op observation, vital monitoring' },
  { period: 'Day 3-5', label: 'Cast removal (Rhinoplasty) / Drain removal' },
  { period: 'Week 2', label: 'Edema reduction, vertical vector stability' },
  { period: 'Month 3', label: 'Return to physical exertion, swelling 90% gone' },
  { period: 'Month 12', label: 'Final tissue maturation and aesthetic refinement' },
];

const plasticRecoveryRo = [
  { period: 'Ziua 1', label: 'Observație post-operatorie, monitorizare vitală' },
  { period: 'Ziua 3-5', label: 'Îndepărtarea atelei (Rinoplastie) / scoaterea tuburilor' },
  { period: 'Săptămâna 2', label: 'Reducerea edemului, stabilitate verticală' },
  { period: 'Luna 3', label: 'Revenire la efort fizic, 90% din umflături dispărute' },
  { period: 'Luna 12', label: 'Maturarea finală a țesuturilor și rafinament estetic' },
];

const faqEn = [
  { q: "What is a Deep Plane Facelift?", a: "Unlike a traditional facelift that only pulls the skin, a Deep Plane Facelift repositions the underlying muscular layers (SMAS) and fat, creating a natural, younger look that lasts 15+ years." },
  { q: "Why use Ultrasonic Piezo for Rhinoplasty?", a: "Piezo technology uses sound waves to reshape the nasal bone without damaging soft tissue, nerves, or blood vessels, resulting in zero bruising and faster recovery." },
  { q: "Is the vertical vector approach better?", a: "Yes. By lifting tissues vertically rather than horizontally, we avoid the 'wind-blown' artificial look and achieve a much more anatomical rejuvenation." }
];

const faqRo = [
  { q: "Ce este un Lifting Facial Deep Plane?", a: "Spre deosebire de un lifting tradițional care trage doar pielea, procedura Deep Plane repoziționează straturile musculare profunde (SMAS), oferind un aspect natural ce durează peste 15 ani." },
  { q: "De ce folosim Ultrasonic Piezo pentru Rinoplastie?", a: "Tehnologia Piezo folosește unde sonore pentru a remodela osul nazal fără a distruge țesuturile moi, nervii sau vasele de sânge, eliminând vânătăile." },
  { q: "Este mai bună abordarea pe vector vertical?", a: "Da. Prin ridicarea țesuturilor vertical, evităm aspectul artificial 'tras' și obținem o întinerire mult mai anatomică." }
];

const PlasticSurgery = ({ lang = 'ro' }) => {
  const [activeFaq, setActiveFaq] = useState(0);
  const [openTx, setOpenTx] = useState(null);
  const isEn = lang === 'en';
  useEffect(() => window.scrollTo(0, 0), [lang]);
  const faqs = isEn ? faqEn : faqRo;
  const g = (obj) => obj[isEn ? 'en' : 'ro'];

  return (
    <div className="bg-white min-h-screen pt-32 pb-24">
      <DynamicSEO 
        title={isEn ? "Advanced Biomechanical Plastic Surgery | Meva Clinic" : "Chirurgie Plastică Biomecanică Avansată | Meva Clinic"}
        description={isEn ? "Specializing in Deep Plane Facelifts and Ultrasonic Piezo Rhinoplasty. Natural rejuvenation by master surgeons." : "Specializați în Lifting Facial Deep Plane și Rinoplastie Ultrasonică Piezo. Întinerire naturală de către maeștri chirurgi."}
        path={isEn ? "/en/plastic-surgery" : "/ro/chirurgie-plastica"}
        schemaType="MedicalProcedure"
        keywords="estetica faciala Turcia, plastic surgery Istanbul, rhinoplasty Turkey"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-6">
          <VerifiedBadge isEn={isEn} />
        </div>
        
        <h1 className="text-4xl md:text-7xl font-serif font-bold text-prime mb-8 text-center leading-tight">
          {isEn ? "The Art of Vertical Rejuvenation" : "Arta Întineririi pe Vector Vertical"}
        </h1>

        <div className="flex justify-center mb-12">
           <DoctorBadge text={isEn ? "Board Certified ISAPS Specialists" : "Specialiști Certificați ISAPS"} />
        </div>

        {/* Tech Spec Grid */}
        <div className="bg-[#0b1626] rounded-[2.5rem] p-8 md:p-12 mb-20 shadow-2xl relative overflow-hidden">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <TechCard icon={Scissors} title="Deep Plane Lift" sub={isEn ? 'Technique' : 'Tehnică'} value={isEn ? 'SMAS Relocation' : 'Relocare SMAS'} />
            <TechCard icon={Zap} title="Ultrasonic Piezo" sub={isEn ? 'Rhinoplasty' : 'Rinoplastie'} value={isEn ? 'Zero Trauma' : 'Zero Traumă'} />
            <TechCard icon={Ruler} title="Vertical Vector" sub={isEn ? 'Geometry' : 'Geometrie'} value={isEn ? 'Natural Flow' : 'Flux Natural'} />
            <TechCard icon={Shield} title="JCI Safety" sub={isEn ? 'Accreditation' : 'Acreditare'} value="Gold Standard" />
          </div>
        </div>

        {/* ── 15 TREATMENT CARDS ── */}
        <div className="mb-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-prime mb-3">
              {isEn ? '15 Aesthetic Procedures — Meva Clinic' : '15 Proceduri Estetice — Meva Clinic'}
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              {isEn
                ? 'Select any procedure to see candidacy criteria, surgical technique and Meva quality standards.'
                : 'Selectați orice procedură pentru a vedea criteriile de candidatură, tehnica chirurgicală și standardele de calitate Meva.'}
            </p>
          </div>

          {/* Post-Bariatric Featured Banner */}
          <div className="bg-[#0b1626] rounded-[2rem] p-8 mb-10 text-white relative overflow-hidden border border-accent/20">
            <div className="absolute top-0 right-0 w-48 h-48 bg-accent/10 rounded-full blur-3xl" />
            <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
              <div className="text-5xl">⚕️</div>
              <div className="flex-1">
                <span className="text-accent font-black text-xs uppercase tracking-widest">
                  {isEn ? 'Specialist Service · Post-Bariatric' : 'Serviciu Specialist · Post-Bariatric'}
                </span>
                <h3 className="text-2xl font-serif font-bold mt-2 mb-3">
                  {isEn ? 'Post-Bariatric Body Contouring — Our Specialist Unit' : 'Conturare Corporală Post-Bariatrică — Unitatea Noastră Specialist'}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed max-w-3xl">
                  {isEn
                    ? 'After Gastric Sleeve or Bypass, dramatic weight loss leaves excess skin on the abdomen, arms, thighs and breasts that no exercise can resolve. Our post-bariatric surgical team — directly coordinated with the bariatric unit — designs a staged body contouring plan starting with belt lipectomy (360° circumferential body lift), followed by brachioplasty, medial thigh lift and breast restoration. Timing is critical: we require 12–18 months post-surgery with stable weight for 6+ months before any contouring procedure. Progressive tension sutures reduce drain usage by 80%.'
                    : 'După Gastric Sleeve sau Bypass, pierderea dramatică în greutate lasă exces de piele pe abdomen, brațe, coapse și sâni pe care niciun exercițiu nu îl poate rezolva. Echipa noastră chirurgicală post-bariatrică — coordonată direct cu unitatea bariatrică — proiectează un plan de conturare corporală etapizat începând cu belt lipectomy (body lift circumferențial 360°), urmat de brahioplastie, lifting medial al coapselor și restaurare mamară. Timing-ul este critic: necesităm 12–18 luni post-chirurgie cu greutate stabilă 6+ luni înainte de orice procedură de conturare. Suturile cu tensiune progresivă reduc utilizarea drenurilor cu 80%.'}
                </p>
              </div>
            </div>
          </div>

          {/* Accordion Grid */}
          <div className="space-y-3">
            {PLASTIC.map((tx) => (
              <div key={tx.id} className="border border-gray-100 rounded-2xl overflow-hidden shadow-sm">
                <button
                  onClick={() => setOpenTx(openTx === tx.id ? null : tx.id)}
                  className="w-full px-6 py-5 flex items-center gap-4 text-left bg-white hover:bg-gray-50 transition-colors group"
                  aria-expanded={openTx === tx.id}
                >
                  <span className="text-2xl">{tx.icon}</span>
                  <div className="flex-1">
                    <p className="font-bold text-prime text-base leading-tight">{g(tx.name)}</p>
                    <p className="text-xs text-accent font-semibold mt-0.5">{g(tx.tag)}</p>
                  </div>
                  <div className="flex items-center gap-3 shrink-0">
                    <span className="hidden sm:block text-xs text-gray-400 bg-gray-100 px-3 py-1 rounded-full">
                      {g(tx.recovery)} · {g(tx.stay)}
                    </span>
                    <ChevronDown size={18} className={`text-gray-400 transition-transform duration-300 ${openTx === tx.id ? 'rotate-180' : ''}`} />
                  </div>
                </button>

                <div className={`overflow-hidden transition-all duration-300 ${openTx === tx.id ? 'max-h-[800px]' : 'max-h-0'}`}>
                  <div className="px-6 pb-7 pt-2 bg-gray-50 grid grid-cols-1 md:grid-cols-3 gap-5">
                    {/* Is this for me? */}
                    <div className="bg-white rounded-xl p-5 border border-gray-100">
                      <p className="text-accent font-black text-xs uppercase tracking-widest mb-2">🎯 {isEn ? 'Is This For Me?' : 'Este Potrivit pentru Mine?'}</p>
                      <p className="text-sm text-gray-600 leading-relaxed">{g(tx.isForMe)}</p>
                    </div>
                    {/* Techniques */}
                    <div className="bg-white rounded-xl p-5 border border-gray-100">
                      <p className="text-prime font-black text-xs uppercase tracking-widest mb-2">⚡ {isEn ? 'Techniques' : 'Tehnici'}</p>
                      <p className="text-sm text-gray-600 leading-relaxed">{g(tx.techniques)}</p>
                    </div>
                    {/* Meva Quality */}
                    <div className="bg-white rounded-xl p-5 border border-gray-100">
                      <p className="text-green-600 font-black text-xs uppercase tracking-widest mb-2">✅ {isEn ? 'Meva Quality' : 'Calitate Meva'}</p>
                      <p className="text-sm text-gray-600 leading-relaxed">{g(tx.mevaQuality)}</p>
                      <div className="flex gap-3 mt-4">
                        <span className="text-xs bg-prime/5 text-prime font-bold px-3 py-1 rounded-full">{g(tx.recovery)}</span>
                        <span className="text-xs bg-accent/10 text-prime font-bold px-3 py-1 rounded-full">{g(tx.stay)}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>


        <div className="mb-24">
          <h2 className="text-3xl font-serif font-bold text-prime mb-12 text-center">{isEn ? "Clinical Transformations" : "Transformări Clinice"}</h2>
          <BeforeAfterSlider 
            beforeImage="https://images.unsplash.com/photo-1522337660859-02fbefca4702?auto=format&fit=crop&q=80&w=800"
            afterImage="https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&q=80&w=800"
            beforeLabel={isEn ? "Initial" : "Inițial"}
            afterLabel={isEn ? "3 Months Post-Op" : "3 Luni Post-Op"}
          />
        </div>

        <div className="mb-24">
          <h2 className="text-3xl font-serif font-bold text-prime mb-12 text-center">{isEn ? "Surgical Recovery Roadmap" : "Harta Recuperării Chirurgicale"}</h2>
          <RecoveryTimeline steps={isEn ? plasticRecoveryEn : plasticRecoveryRo} isEn={isEn} />
        </div>

        <div className="mb-24">
           <h2 className="text-3xl font-serif font-bold text-prime mb-12 text-center">{isEn ? "Integrated Patient Journey" : "Călătoria Integrată a Pacientului"}</h2>
           <PatientJourneyTimeline />
        </div>

        <div className="max-w-4xl mx-auto mb-24">
          <h2 className="text-3xl font-serif font-bold text-prime mb-12 text-center">{isEn ? "Clinical FAQ" : "Întrebări Clinice"}</h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white border border-gray-100 rounded-3xl shadow-sm overflow-hidden">
                <button 
                  onClick={() => setActiveFaq(activeFaq === index ? -1 : index)} 
                  className="w-full px-8 py-6 flex items-center justify-between text-left"
                  aria-expanded={activeFaq === index}
                  aria-controls={`faq-answer-${index}`}
                  id={`faq-button-${index}`}
                >
                  <span className="font-bold text-prime text-lg">{faq.q}</span>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all ${activeFaq === index ? 'bg-accent text-white' : 'bg-gray-50'}`} aria-hidden="true">
                    <Plus size={18} />
                  </div>
                </button>
                <div 
                  id={`faq-answer-${index}`}
                  aria-labelledby={`faq-button-${index}`}
                  role="region"
                  className={`px-8 overflow-hidden transition-all duration-500 ${activeFaq === index ? 'max-h-96 pb-8 opacity-100' : 'max-h-0 opacity-0'}`}
                >
                  <p className="text-gray-600 border-t border-gray-50 pt-6 leading-relaxed">{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <CertRow isEn={isEn} />
      </div>
    </div>
  );
}

export default PlasticSurgery;
