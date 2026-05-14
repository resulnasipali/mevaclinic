import React, { useEffect, useState } from 'react';
import DoctorBadge from '../components/DoctorBadge';
import PatientJourneyTimeline from '../components/PatientJourneyTimeline';
import DynamicSEO from '../components/DynamicSEO';
import { Activity, Plus, Minus, Cpu, Zap, Shield, HeartPulse, Microscope } from 'lucide-react';
import { TechCard, CertRow, VerifiedBadge } from '../components/ClinicalBadges';
import BmiCalculator from '../components/BmiCalculator';
import RecoverySimulator from '../components/RecoverySimulator';
import SuitabilityQuiz from '../components/SuitabilityQuiz';
import LocalContext from '../components/LocalContext';
import LogisticsHub from '../components/LogisticsHub';
import Breadcrumbs from '../components/Breadcrumbs';
import { pushToDataLayer } from '../utils/AnalyticsUtils';
import MedicalReviewer, { REVIEWERS } from '../components/MedicalReviewer';

const Bariatric = ({ lang = 'ro' }) => {
  const [activeFaq, setActiveFaq] = useState(0);
  const isEn = lang === 'en';
  useEffect(() => window.scrollTo(0, 0), [lang]);

  const faqEn = [
    { q: "Is the surgery laparoscopic?", a: "Yes. All our procedures are minimally invasive or robotic-assisted, using small 1cm incisions for rapid healing and minimal scarring." },
    { q: "What is the 12-Month Nutritional Intelligence program?", a: "A clinical follow-up protocol where our bariatric dietitians monitor your macros and micronutrients to ensure sustainable weight loss and prevent rebound." },
    { q: "How much weight will I lose?", a: "On average, patients lose 60-80% of their excess body weight within the first 12-18 months." },
    { q: "What is the benefit of Da Vinci Robotic surgery?", a: "It provides the surgeon with 3D high-definition vision and sub-millimeter precision, reducing the risk of leaks." }
  ];

  const faqRo = [
    { q: "Operația este laparoscopică?", a: "Da. Toate procedurile noastre sunt minim invazive sau asistate robotic, folosind incizii mici de 1cm pentru vindecare rapidă." },
    { q: "Ce este programul de Inteligență Nutrițională de 12 luni?", a: "Un protocol de urmărire clinică în care dieteticienii noștri monitorizează macro și micronutrienții." },
    { q: "Câtă greutate voi pierde?", a: "În medie, pacienții pierd 60-80% din excesul ponderal în primele 12-18 luni." },
    { q: "Care este beneficiul chirurgiei robotice Da Vinci?", a: "Oferă chirurgului o viziune 3D de înaltă definiție și precizie sub-milimetrică, reducând riscurile." }
  ];

  const faqs = isEn ? faqEn : faqRo;

  return (
    <div className="bg-white min-h-screen pt-32 pb-24">
      <DynamicSEO 
        title={isEn ? "Advanced Bariatric & Metabolic Surgery | Meva Clinic" : "Chirurgie Bariatrică și Metabolică Avansată | Meva Clinic"}
        description={isEn ? "Robotic-assisted Gastric Sleeve and Bypass in Istanbul. JCI-accredited metabolic engineering." : "Gastric Sleeve și Bypass asistat robotic în Istanbul. Inginerie metabolică acreditată JCI."}
        path={isEn ? "/en/gastric-sleeve" : "/ro/gastric-sleeve"}
        schemaType="MedicalProcedure"
        keywords={isEn ? "gastric sleeve surgery Turkey, robotic bariatric surgery" : "chirurgie bariatrica, gastric sleeve pret Istanbul"}
        reviewer={isEn ? REVIEWERS.bariatric : { ...REVIEWERS.bariatric, name: REVIEWERS.bariatric.nameRo, specialty: REVIEWERS.bariatric.specialtyRo, credentials: REVIEWERS.bariatric.credentialsRo }}
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs 
          isEn={isEn} 
          items={[{ label: isEn ? "Treatments" : "Tratamente", path: null }, { label: isEn ? "Bariatric Surgery" : "Chirurgie Bariatrică", path: null }]} 
        />

        <div className="text-center mb-4 animate-fade-up"><VerifiedBadge isEn={isEn} /></div>
        <h1 className="text-4xl md:text-7xl font-serif font-bold text-prime mb-8 text-center animate-fade-up [animation-delay:100ms]">
          {isEn ? "Metabolic Engineering & Precision" : "Inginerie Metabolică de Precizie"}
        </h1>

        <div className="flex justify-center mb-12 animate-fade-up [animation-delay:200ms]">
           <DoctorBadge text={isEn ? "JCI-Accredited Bariatric Center — Da Vinci Robotic Systems" : "Centru Bariatric Acreditat JCI — Sisteme Robotice Da Vinci"} />
        </div>

        {/* Glassmorphism Tech Spec Cards */}
        <div className="bg-[#0b1626] rounded-[2.5rem] p-8 md:p-12 mb-20 shadow-2xl relative overflow-hidden animate-fade-up [animation-delay:300ms]">
          <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full -mr-32 -mt-32 blur-3xl" aria-hidden="true"></div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
            <TechCard icon={Cpu} title="Da Vinci Robotic" sub={isEn ? 'Surgical Platform' : 'Platformă Chirurgicală'} value={isEn ? 'Sub-millimeter' : 'Sub-milimetrică'} />
            <TechCard icon={HeartPulse} title="Metabolic Reset" sub={isEn ? 'Clinical Outcome' : 'Rezultat Clinic'} value={isEn ? 'T2 Diabetes Remission' : 'Remisia Diabetului'} />
            <TechCard icon={Zap} title="12-Month Support" sub={isEn ? 'Nutritional Intel' : 'Inteligență Nutrițională'} value={isEn ? 'Personalized Care' : 'Îngrijire Personalizată'} />
            <TechCard icon={Shield} title="JCI Safety" sub={isEn ? 'Certification' : 'Certificare'} value={isEn ? 'Gold Standard' : 'Standard de Aur'} />
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 mb-24 reveal">
          <div className="lg:col-span-2 space-y-12">
            <section>
              <h2 className="text-3xl font-serif font-bold text-prime mb-6 flex items-center gap-3">
                <Microscope className="text-accent" />
                {isEn ? "Beyond Weight Loss: The Reset" : "Dincolo de Slăbire: Resetarea"}
              </h2>
              <div className="prose prose-lg text-gray-600 font-sans leading-relaxed">
                <p>{isEn ? "Bariatric surgery at Meva Clinic is a complete metabolic recalibration. We utilize the Da Vinci Robotic system to ensure maximum precision in gastric suturing, ensuring a fast recovery. Get a quote for Gastric Sleeve in Istanbul." : "Chirurgia bariatrică la Meva Clinic este o recalibrare metabolică completă. Oferim cele mai avansate proceduri de Gastric Sleeve și Chirurgie Bariatrică în Turcia. Utilizăm sistemul robotic Da Vinci pentru a asigura precizie maximă în sutura gastrică, facilitând o recuperare rapidă. Solicită o ofertă pentru a afla cel mai bun preț Gastric Sleeve Istanbul."}</p>
              </div>
            </section>
          </div>
        </div>

        <div className="bg-gray-50 rounded-[3rem] p-12 mb-24 border border-gray-100 reveal">
           <div className="max-w-2xl mx-auto text-center">
              <h3 className="text-2xl font-serif font-bold text-prime mb-8">{isEn ? "Candidate Status Evaluation" : "Evaluarea Statusului de Candidat"}</h3>
              <BmiCalculator />
           </div>
        </div>

        <div className="mb-24 reveal">
           <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-prime mb-4">
                 {isEn ? "The 12-Month Recovery Roadmap" : "Drumul tău spre Recuperare (12 Luni)"}
              </h2>
           </div>
           <RecoverySimulator type="bariatric" isEn={isEn} />
        </div>

        <div className="bg-gray-50 py-24 rounded-[3rem] mb-24 border border-gray-100 reveal">
           <div className="max-w-3xl mx-auto px-6 text-center">
              <div className="mb-12">
                 <h2 className="text-3xl font-serif font-bold text-prime mb-4">{isEn ? "Advanced Suitability Test" : "Test de Eligibilitate Avansat"}</h2>
                 <p className="text-gray-500">{isEn ? "Determine your candidacy for robotic metabolic surgery in 30 seconds." : "Determină eligibilitatea ta pentru chirurgia metabolică robotică în 30 de secunde."}</p>
              </div>
              <SuitabilityQuiz procedure={isEn ? "Robotic Bariatric Surgery" : "Chirurgie Bariatrică Robotică"} isEn={isEn} />
           </div>
        </div>

        <div className="mb-24 reveal">
           <PatientJourneyTimeline />
        </div>

        <LogisticsHub isEn={isEn} />

        <div className="max-w-4xl mx-auto mb-24 reveal">
          <h3 className="text-3xl font-serif font-bold text-prime mb-12 text-center">{isEn ? "Clinical Intelligence FAQ" : "Întrebări Frecvente Clinice"}</h3>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white border border-gray-100 rounded-2xl shadow-sm overflow-hidden">
                <button 
                  onClick={() => setActiveFaq(activeFaq === index ? -1 : index)} 
                  className="w-full px-8 py-6 flex items-center justify-between text-left group"
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
                  className={`px-8 overflow-hidden transition-all duration-300 ${activeFaq === index ? 'max-h-96 pb-6 opacity-100' : 'max-h-0 opacity-0'}`}
                >
                  <p className="text-gray-600 border-t border-gray-100 pt-6 leading-relaxed">{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <MedicalReviewer reviewer={REVIEWERS.bariatric} isEn={isEn} />
        <CertRow isEn={isEn} />
        <LocalContext isEn={isEn} />

        <div className="text-center mt-20">
           <a 
             href={`https://wa.me/905324675941?text=${encodeURIComponent(isEn ? "I want a robotic bariatric quote." : "Doresc o ofertă pentru chirurgie bariatrică robotică.")}`} 
             onClick={() => pushToDataLayer('whatsapp_click', { location: 'bariatric_page_cta' })}
             target="_blank" 
             rel="noreferrer" 
             className="bg-prime text-white font-bold py-6 px-16 rounded-2xl shadow-2xl hover:bg-[#0f1f38] transition-all text-xl inline-flex items-center group"
             aria-label={isEn ? "Contact us on WhatsApp for a metabolic quote" : "Contactați-ne pe WhatsApp pentru o ofertă metabolică"}
           >
              {isEn ? "Get Your Metabolic Quote" : "Obține Oferta Metabolică"} 
              <Activity size={24} className="ml-4 text-accent group-hover:scale-125 transition-transform" aria-hidden="true" />
           </a>
        </div>
      </div>
    </div>
  );
}
export default Bariatric;
