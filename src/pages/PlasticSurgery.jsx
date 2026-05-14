import React, { useEffect, useState } from 'react';
import { Activity, Plus, Minus, Scissors, Zap, Shield, Sparkles, Ruler, Microscope } from 'lucide-react';
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
  const isEn = lang === 'en';
  useEffect(() => window.scrollTo(0, 0), [lang]);
  const faqs = isEn ? faqEn : faqRo;

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

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 mb-24">
          <div className="lg:col-span-2 space-y-12">
            <section>
              <h2 className="text-3xl font-serif font-bold text-prime mb-6 flex items-center gap-3">
                <Microscope className="text-accent" />
                {isEn ? "Deep Plane Facelift: The Anatomy of Longevity" : "Lifting Facial Deep Plane: Anatomia Longevității"}
              </h2>
              <div className="prose prose-lg text-gray-600 font-sans leading-relaxed">
                <p>
                  {isEn 
                    ? "Unlike standard skin-only facelifts, the Deep Plane technique allows our surgeons to release the retaining ligaments and reposition the underlying structures (SMAS and fat pads) into a higher, more youthful position. By following a vertical vector rather than a horizontal pull, we achieve results that look entirely natural and can last up to 15 years." 
                    : "Spre deosebire de liftingurile standard, tehnica Deep Plane permite chirurgilor noștri să elibereze ligamentele de susținere și să repoziționeze structurile musculare (SMAS) într-o poziție mai înaltă. Urmând un vector vertical, obținem rezultate naturale care durează până la 15 ani."}
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-serif font-bold text-prime mb-6 flex items-center gap-3">
                <Zap className="text-accent" />
                {isEn ? "Atraumatic Rhinoplasty: The Piezo Advantage" : "Rinoplastie Atraumatică: Avantajul Piezo"}
              </h2>
              <div className="prose prose-lg text-gray-600 font-sans leading-relaxed">
                <p>
                  {isEn 
                    ? "Ultrasonic Rhinoplasty (Piezo Surgery) is the gold standard for 2026. Instead of using traditional hammers and chisels, we use sound-wave-driven tips that selectively reshape the bone. This technology does not damage blood vessels or nerves, which means patients experience minimal to zero bruising and a significantly faster return to social life." 
                    : "Rinoplastia Ultrasonică (Piezo Surgery) este standardul de aur pentru 2026. În loc de ciocane și dălți tradiționale, folosim unde sonore pentru a remodela osul selectiv. Această tehnologie nu distruge vasele de sânge, ceea ce înseamnă vânătăi minime spre zero."}
                </p>
              </div>
            </section>

            {/* Performance/Comparison Table */}
            <div className="bg-gray-50 rounded-[2rem] p-8 border border-gray-100">
               <h3 className="text-2xl font-serif font-bold text-prime mb-6 text-center">{isEn ? "Surgical Comparison Data" : "Date de Comparație Chirurgicală"}</h3>
               <div className="overflow-x-auto">
                 <table className="w-full text-sm text-left text-gray-500">
                   <thead className="text-xs text-prime uppercase bg-gray-100">
                     <tr>
                       <th className="px-6 py-4">{isEn ? "Feature" : "Caracteristică"}</th>
                       <th className="px-6 py-4">{isEn ? "Traditional Lift" : "Lifting Tradițional"}</th>
                       <th className="px-6 py-4 text-accent">{isEn ? "Deep Plane Vertical" : "Deep Plane Vertical"}</th>
                     </tr>
                   </thead>
                   <tbody className="divide-y divide-gray-200">
                     <tr>
                       <td className="px-6 py-4 font-bold">{isEn ? "Longevity" : "Longevitate"}</td>
                       <td className="px-6 py-4">5-7 {isEn ? "Years" : "Ani"}</td>
                       <td className="px-6 py-4 font-bold text-prime">12-15+ {isEn ? "Years" : "Ani"}</td>
                     </tr>
                     <tr>
                       <td className="px-6 py-4 font-bold">{isEn ? "Appearance" : "Aspect"}</td>
                       <td className="px-6 py-4">{isEn ? "Pulled / Horizontal" : "Tras / Orizontal"}</td>
                       <td className="px-6 py-4 font-bold text-prime">{isEn ? "Natural / Vertical" : "Natural / Vertical"}</td>
                     </tr>
                     <tr>
                       <td className="px-6 py-4 font-bold">{isEn ? "Bone Trauma (Rhino)" : "Traumă Osoasă"}</td>
                       <td className="px-6 py-4">{isEn ? "Significant" : "Semnificativă"}</td>
                       <td className="px-6 py-4 font-bold text-prime">{isEn ? "Zero (Ultrasonic)" : "Zero (Ultrasonic)"}</td>
                     </tr>
                   </tbody>
                 </table>
               </div>
            </div>
          </div>

          <div className="space-y-8">
            <LeadMagnetBox isEn={isEn} pdfLabel={isEn ? "Facelift Recovery Protocol 2026" : "Protocol Recuperare Facelift 2026"} />
            <div className="bg-prime text-white p-8 rounded-[2rem] shadow-xl">
               <Sparkles className="text-accent mb-4" size={32} />
               <h3 className="text-xl font-bold mb-4">{isEn ? "ISAPS Certified" : "Certificat ISAPS"}</h3>
               <p className="text-sm text-gray-400 leading-relaxed mb-6">
                 {isEn 
                   ? "Our surgeons are members of the International Society of Aesthetic Plastic Surgery, adhering to the world's most rigorous clinical benchmarks." 
                   : "Chirurgii noștri sunt membri ai Societății Internaționale de Chirurgie Plastică Estetică, respectând cele mai riguroase repere."}
               </p>
            </div>
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
