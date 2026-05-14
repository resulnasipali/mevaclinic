import React, { useEffect, useState } from 'react';
import DoctorBadge from '../components/DoctorBadge';
import PatientJourneyTimeline from '../components/PatientJourneyTimeline';
import DynamicSEO from '../components/DynamicSEO';
import { Activity, Plus, Minus, Cpu, Star, Shield, Layout } from 'lucide-react';
import { TechCard, CertRow, VerifiedBadge } from '../components/ClinicalBadges';

const faqEn = [
  { q: "What is Digital Dentistry (3D Scanning)?", a: "It utilizes intraoral scanners to map your mouth digitally, avoiding messy dental putties and ensuring crowns are milled with microscopic precision." },
  { q: "Is the immediate implant placement painful?", a: "No. Advanced conscious sedation isolates you from pain absolutely, ensuring profound relaxation while the maxillofacial surgeon completes the procedure." },
  { q: "Will I leave the clinic without teeth?", a: "Never. With All-on-4 or All-on-6 protocols, high-grade temporary aesthetic prostheses are affixed immediately on the same day." },
  { q: "What is Monolithic Zirconium?", a: "It is a singular, solid block of zirconium milled by CAD/CAM. It offers supreme shatter-resistance and lacks the dark metallic gumlines usually associated with porcelain." },
  { q: "How many trips to Istanbul does it require?", a: "Typically, full restorations are accomplished in 2 visits. The first for the surgical implants, and the second (after integration) for permanent Zirconium crowns." }
];

const faqRo = [
  { q: "Ce reprezintă Stomatologia Digitală 3D?", a: "Utilizăm un scanner intraoral care ia o amprentă optică a gurii fară materiale clasice. Totul este apoi frezat tridimensional de sistemele CAD/CAM." },
  { q: "Operația de Implant este dureroasă?", a: "Nu, protocolul nostru include sedare conștientă profundă, coordonată de medicul ATI, pacienții relatând o totală lipsă a durerii sau stersului." },
  { q: "Plec de la clinică lipsit de dinți?", a: "Niciodată. Pe structurile de tip All-on-4 sau All-on-6 atașăm în aceeași zi punți provizorii de lux pentru o estetică și funcționalitate imediată." },
  { q: "Ce este Zirconiul Monolitic?", a: "Un monolit curat de zirconiu frezat computerizat, neavând miez metalic, anulând complet umbrele inestetice închise de la zona gingiilor." },
  { q: "Cte călătorii necesită implantul complet?", a: "Se organizează în 2 scurte etape la Istanbul. Prima - implantologia propriu-zisă; a doua, vindecarea osoasă integrată - lucrarea definitivă." }
];

const DentalImplants = ({ lang = 'ro' }) => {
  const [activeFaq, setActiveFaq] = useState(0);
  const isEn = lang === 'en';
  useEffect(() => window.scrollTo(0, 0), [lang]);
  const faqs = isEn ? faqEn : faqRo;

  return (
    <div className="bg-white min-h-screen pt-32 pb-24">
      <DynamicSEO 
        title={isEn ? "Digital 3D Dentistry | Meva Clinic Istanbul" : "Stomatologie Digitală 3D | Meva Clinic Istanbul"}
        description={isEn ? "Advanced Digital Dentistry. CAD/CAM Zirconium crowns and All-on-6 Implant loading." : "Zirconiu Monolitic, Coroane E-max și Implantologie totală All-on-6 Digitală."}
        path={isEn ? "/en/dental-implants" : "/ro/implant-dentar"}
        schemaType="MedicalProcedure"
        keywords="dental implants Turkey, Hollywood smile Istanbul, implanturi dentare Turcia"
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-4"><VerifiedBadge isEn={isEn} /></div>
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-prime mb-6 text-center">
          {isEn ? "Digital Smile Engineering" : "Ingineria Digitală a Zâmbetului"}
        </h1>
        <div className="flex justify-center mb-8">
           <DoctorBadge text={isEn ? "CAD/CAM Specialists — 3D Scanning Hub" : "Specialiști CAD/CAM — Centru de Scanare 3D"} />
        </div>

        {/* Glassmorphism Tech Spec Cards */}
        <div className="bg-[#0b1626] rounded-3xl p-6 mb-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <TechCard icon={Cpu} title="CAD/CAM Milled" sub={isEn ? 'Technology' : 'Tehnologie'} value={isEn ? 'Microscopic precision' : 'Precizie microscopică'} />
          <TechCard icon={Star} title="Monolithic Zirconium" sub={isEn ? 'Material' : 'Material'} value={isEn ? 'Supreme shatter-resistance' : 'Rezistență supremă'} />
          <TechCard icon={Layout} title="DSD (Smile Design)" sub={isEn ? 'Outcome' : 'Rezultat'} value={isEn ? 'Aesthetic co-design' : 'Co-design estetic'} />
          <TechCard icon={Shield} title="Safe Conscious Sedation" sub={isEn ? 'Comfort' : 'Confort'} value={isEn ? 'Zero-pain surgical target' : 'Țintă chirurgicală fără durere'} />
        </div>
        
        <div className="prose prose-lg max-w-none text-gray-600 mb-16">
           <h3 className="text-2xl font-bold text-prime mb-4">{isEn ? "What is it?" : "Ce este?"}</h3>
           <p className="mb-8">{isEn ? "At Meva Clinic, dentistry leaps from standard local practices to high-end medical architecture. We resolve total edentulism and aesthetic decay rapidly through ultra-premium Swiss and German Titanium Implants, marrying functionality with pristine Digital Dentistry aesthetics." : "La Meva, estetica dentară face un salt spre arhitectura medicală supremă. Rezolvăm absolut imediat edentația totală combinând estetica impecabilă a Zirconiului cu integrarea structurală a Implanturilor de elită recunoscute global."}</p>

           <h3 className="text-2xl font-bold text-prime mb-4">{isEn ? "How it Works?" : "Cum funcționează?"}</h3>
           <div className="space-y-6 mb-8">
              <div><strong className="text-accent">{isEn ? "3D Digital Scanning & Diagnostics:" : "Scanare Digitală și Tomografie 3D:"}</strong> {isEn ? "Prior to surgery, 3D Volumetric Tomography and intraoral optical scanners are cross-referenced using specialized software ensuring immediate surgical mapping free of any analog errors." : "Inițial, executăm complet Tomografia 3D, suprapunând imaginile optice intraorale pentru un calcul milimetric al osului maxilar evitând orice deviație analogică clasică asumată în vechime."}</div>
              <div><strong className="text-accent">{isEn ? "Same-Day High-Definition Provisionals:" : "Proteze Temporare Lux în Aceeași Zi:"}</strong> {isEn ? "Utilizing the All-on-4/6 methodology, our maxillofacial board performs extractions, nerve relocation, or sinus lifting all strictly bounded by clinical sleep sedation. An aesthetic temporary bridge is screwed into your implants on the exact same day." : "Folosind standardul All-on-4/All-on-6 extragem focarele infecțioase cu adiția unui os rezistent, lucrând relaxat prin sedare superioară. Punțile fixe provizorii estetice vor fi încărcate în implant vizual din prima zi."}</div>
              <div><strong className="text-accent">{isEn ? "Monolithic Zirconium (CAD/CAM):" : "Zirconiu Monolitic masiv și E-Max:"}</strong> {isEn ? "In your second stage, Hollywood aesthetics are permanently cemented. CAD/CAM machines mill the permanent crowns out of monolithic cubic blocks. The sheer material quality ensures longevity, high resilience to discoloration, and a naturally stunning iridescence." : "În stadiul doi protetic punem capacul operativ definitivei estetice absolute — lucrările E-Max sau Zirconiu monolitic pur, un nivel care nu trădatează niciodată estetica zâmbetului prin umbre inestetice în linia gingiei."}</div>
           </div>

           <h3 className="text-2xl font-bold text-prime mb-4">{isEn ? "Why Meva Clinic?" : "De ce Meva Clinic?"}</h3>
           <p className="mb-12">{isEn ? "We integrate elite materials with an unparalleled hotel-like VIP setting. Unlike slow conservative treatments, we offer an accelerated clinical timeline optimized for international patients. With DSD (Digital Smile Design), you actively co-design your final smile architecture." : "Nu doar utilizăm materiale din elita stomatologiei globale, ci unificăm tratamentul complet într-un cadru de lux cu hotel de 5 stele VIP. Proiectând inteligent Zâmbetul din primele momente (Digital Smile Design) vei controla 100% factorul de wow obținut la final."}</p>
        </div>

        <div className="mb-16">
          <h3 className="text-3xl font-serif font-bold text-prime mb-8 text-center">{isEn ? "Patient Journey" : "Călătoria Pacientului"}</h3>
          <PatientJourneyTimeline />
        </div>

        <div className="max-w-4xl mx-auto mb-16">
          <h3 className="text-3xl font-serif font-bold text-prime mb-8 text-center">{isEn ? "Frequently Asked Questions" : "Întrebări Frecvente"}</h3>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white border border-gray-100 rounded-2xl shadow-sm overflow-hidden">
                <button 
                  onClick={() => setActiveFaq(activeFaq === index ? -1 : index)} 
                  className="w-full px-6 py-5 flex items-center justify-between text-left group"
                  aria-expanded={activeFaq === index}
                  aria-controls={`faq-answer-${index}`}
                  id={`faq-button-${index}`}
                >
                  <span className="font-bold text-prime text-lg pr-4">{faq.q}</span>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors ${activeFaq === index ? 'bg-accent text-white' : 'bg-gray-100 text-gray-500'}`} aria-hidden="true">
                    {activeFaq === index ? <Minus size={16} /> : <Plus size={16} />}
                  </div>
                </button>
                <div 
                  id={`faq-answer-${index}`}
                  aria-labelledby={`faq-button-${index}`}
                  role="region"
                  className={`px-6 overflow-hidden transition-all duration-300 ${activeFaq === index ? 'max-h-96 pb-6 opacity-100' : 'max-h-0 opacity-0'}`}
                >
                  <p className="text-gray-600 border-t border-gray-100 pt-5">{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center pb-12">
           <a 
             href="/#ai-assistant" 
             className="bg-prime text-white font-bold py-5 px-12 rounded-xl shadow-lg hover:bg-[#0f1f38] transition-all text-lg inline-flex items-center"
             aria-label={isEn ? "Get a quote for Dental Implants" : "Cere o ofertă pentru Implanturi Dentare"}
           >
              {isEn ? "Scan Your Smile Path" : "Cere Tomografia Costurilor"} <Activity size={20} className="ml-3 text-accent" aria-hidden="true" />
           </a>
        </div>
        <CertRow isEn={isEn} />
      </div>
    </div>
  );
}
export default DentalImplants;
