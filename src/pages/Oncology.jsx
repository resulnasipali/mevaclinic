import React, { useEffect, useState } from 'react';
import { Activity, Plus, Minus, Cpu, Zap, Brain, Shield, Microscope, Target, HeartPulse } from 'lucide-react';
import DoctorBadge from '../components/DoctorBadge';
import PatientJourneyTimeline from '../components/PatientJourneyTimeline';
import DynamicSEO from '../components/DynamicSEO';
import { TechCard, CertRow, VerifiedBadge } from '../components/ClinicalBadges';
import RecoverySimulator from '../components/RecoverySimulator';
import SuitabilityQuiz from '../components/SuitabilityQuiz';
import LocalContext from '../components/LocalContext';
import Breadcrumbs from '../components/Breadcrumbs';
import { pushToDataLayer } from '../utils/AnalyticsUtils';
import MedicalReviewer, { REVIEWERS } from '../components/MedicalReviewer';

const oncologyRecoveryEn = [
  { period: 'Day 1', label: 'Robotic session completed, outpatient return to hotel' },
  { period: 'Day 2-5', label: 'Sub-clinical monitoring, personalized diet initiation' },
  { period: 'Week 2', label: 'Biological marker analysis, return to light activity' },
  { period: 'Month 1', label: 'Primary imaging verification (PET-CT/MRI)' },
  { period: 'Month 3', label: 'Multidisciplinary tumor response evaluation' },
];

const oncologyRecoveryRo = [
  { period: 'Ziua 1', label: 'Sesiune robotică finalizată, revenire la hotel' },
  { period: 'Zilele 2-5', label: 'Monitorizare sub-clinică, inițiere dietă personalizată' },
  { period: 'Săptămâna 2', label: 'Analiza markerilor biologici, revenire la activitate' },
  { period: 'Luna 1', label: 'Prima verificare imagistică (PET-CT/RMN)' },
  { period: 'Luna 3', label: 'Evaluarea răspunsului tumoral multidisciplinar' },
];

const faqEn = [
  { q: "What makes CyberKnife S7 unique?", a: "The S7 with VOLO Optimizer is the only robotic system capable of real-time tumor tracking and motion correction with ±0.5mm precision, allowing for higher doses without harming healthy tissue." },
  { q: "How does Radixact with Synchrony work?", a: "Synchrony technology uses AI to synchronize the radiation beam with the patient's breathing cycle, ensuring the target is hit even as it moves within the chest or abdomen." },
  { q: "What is the Multidisciplinary Tumor Board?", a: "It is a collective intelligence engine where our surgical oncologists, radiation oncologists, and radiologists engineer a personalized treatment plan for each patient." },
  { q: "Are treatments painful?", a: "No. These are non-invasive, robotic procedures that require no anesthesia, no incisions, and cause zero pain during the actual delivery." }
];

const faqRo = [
  { q: "Ce face CyberKnife S7 unic?", a: "Modelul S7 cu VOLO Optimizer este singurul sistem robotic capabil de urmărire tumorală în timp real și corecție a mișcării la o precizie de ±0.5mm." },
  { q: "Cum funcționează Radixact cu Synchrony?", a: "Tehnologia Synchrony folosește AI pentru a sincroniza fasciculul de radiații cu ciclul respirator al pacientului, eliminând erorile cauzate de mișcare." },
  { q: "Ce este Tumor Board-ul Multidisciplinar?", a: "Este un motor de inteligență colectivă unde oncologii, radiologii și chirurgii noștri proiectează un plan de tratament personalizat pentru fiecare caz." },
  { q: "Tratamentele sunt dureroase?", a: "Nu. Acestea sunt proceduri robotice non-invazive care nu necesită anestezie, nu implică incizii și nu provoacă durere." }
];

const Oncology = ({ lang = 'ro' }) => {
  const [activeFaq, setActiveFaq] = useState(0);
  const isEn = lang === 'en';
  useEffect(() => window.scrollTo(0, 0), [lang]);
  const faqs = isEn ? faqEn : faqRo;

  return (
    <div className="bg-white min-h-screen pt-32 pb-24">
      <DynamicSEO 
        title={isEn ? "Scientific Oncology Excellence | CyberKnife S7 Istanbul" : "Excelență în Oncologie Științifică | CyberKnife S7 Istanbul"}
        description={isEn ? "Advanced oncology featuring CyberKnife S7 with VOLO Optimizer and Radixact Synchrony under JCI safety protocols." : "Oncologie avansată cu CyberKnife S7, VOLO Optimizer și Radixact Synchrony sub protocoale de siguranță JCI."}
        path={isEn ? "/en/oncology" : "/ro/oncologie"}
        schemaType="MedicalProcedure"
        keywords="advanced oncology treatment Turkey, CyberKnife therapy Istanbul, tratament oncologic Turcia"
        reviewer={REVIEWERS.oncology}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs 
          isEn={isEn} 
          items={[{ label: isEn ? "Treatments" : "Tratamente", path: null }, { label: isEn ? "Oncology" : "Oncologie", path: null }]} 
        />
        
        <div className="text-center mb-6 animate-fade-up">
          <VerifiedBadge isEn={isEn} />
        </div>
        
        <h1 className="text-4xl md:text-7xl font-serif font-bold text-prime mb-8 text-center leading-tight animate-fade-up [animation-delay:100ms]">
          {isEn ? "The Future of Robotic Radiosurgery" : "Viitorul Radiochirurgiei Robotice"}
        </h1>

        <div className="flex justify-center mb-12 animate-fade-up [animation-delay:200ms]">
           <DoctorBadge text={isEn ? "Multidisciplinary Tumor Board — Clinical Collective Intelligence" : "Tumor Board Multidisciplinar — Inteligență Colectivă Clinică"} />
        </div>

        {/* Technical Specification Grid */}
        <div className="bg-[#0b1626] rounded-[2.5rem] p-8 md:p-12 mb-20 shadow-2xl relative overflow-hidden animate-fade-up [animation-delay:300ms]">
          <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full -mr-32 -mt-32 blur-3xl" aria-hidden="true"></div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
            <TechCard icon={Cpu} title="CyberKnife S7 + VOLO" sub={isEn ? 'Precision Engine' : 'Motor de Precizie'} value="±0.44mm" />
            <TechCard icon={Zap} title="Radixact Synchrony" sub={isEn ? 'Motion Tracking' : 'Urmărire Mișcare'} value={isEn ? 'AI-Driven' : 'Bazat pe AI'} />
            <TechCard icon={Target} title={isEn ? 'Stereotactic Target' : 'Țintă Stereotactică'} sub={isEn ? 'Methodology' : 'Metodologie'} value={isEn ? 'Sub-Millimeter' : 'Sub-Milimetrică'} />
            <TechCard icon={Shield} title="JCI Accredited" sub={isEn ? 'Safety Standard' : 'Standard Siguranță'} value={isEn ? 'Gold Standard' : 'Standard de Aur'} />
          </div>
        </div>

        {/* Scientific Content Modules */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 mb-24">
          <div className="lg:col-span-2 space-y-12">
            <section className="animate-fade-up">
              <h2 className="text-3xl font-serif font-bold text-prime mb-6 flex items-center gap-3">
                <Microscope className="text-accent" />
                {isEn ? "CyberKnife S7: Robotic Perfection" : "CyberKnife S7: Perfecțiune Robotică"}
              </h2>
              <div className="prose prose-lg text-gray-600 font-sans leading-relaxed">
                <p>
                  {isEn 
                    ? "The CyberKnife S7 System represents the pinnacle of robotic radiosurgery. Equipped with the VOLO Optimizer, it delivers ultra-precise radiation to tumors anywhere in the body. Unlike traditional radiation therapy, CyberKnife uses a robotic arm to deliver hundreds of beams from thousands of angles." 
                    : "Sistemul CyberKnife S7 reprezintă vârful de gamă în radiochirurgia robotică. Echipat cu VOLO Optimizer, acesta livrează radiații ultra-precise tumorilor din orice parte a corpului. Spre deosebire de radioterapia tradițională, CyberKnife folosește un braț robotic."}
                </p>
              </div>
            </section>
          </div>

          <div className="space-y-8">
            <div className="bg-gray-50 p-8 rounded-[2rem] border border-gray-100 shadow-sm animate-fade-up">
              <HeartPulse className="text-accent mb-4" size={32} />
              <h3 className="text-xl font-bold text-prime mb-4">{isEn ? "JCI Safety Excellence" : "Excelență în Siguranță JCI"}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                {isEn 
                  ? "Our oncology department operates strictly under Joint Commission International protocols, ensuring double-verification of all dosimetry." 
                  : "Departamentul nostru de oncologie operează strict sub protocoalele JCI, asigurând dubla verificare a tuturor dozimetriilor."}
              </p>
            </div>
          </div>
        </div>

        {/* Recovery Simulator */}
        <div className="mb-24 reveal">
           <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-prime mb-4">
                 {isEn ? "The Biological Recovery Pathway" : "Calea de Recuperare Biologică"}
              </h2>
           </div>
           <RecoverySimulator type="oncology" isEn={isEn} />
        </div>

        <div className="bg-gray-50 py-24 rounded-[3rem] mb-24 border border-gray-100 reveal">
           <div className="max-w-3xl mx-auto px-6 text-center">
              <div className="mb-12">
                 <h2 className="text-3xl font-serif font-bold text-prime mb-4">{isEn ? "Suitability Assessment" : "Evaluarea Eligibilității"}</h2>
                 <p className="text-gray-500">{isEn ? "Find out if CyberKnife S7 is the right clinical solution for your condition." : "Află dacă CyberKnife S7 este soluția clinică potrivită pentru afecțiunea ta."}</p>
              </div>
              <SuitabilityQuiz procedure={isEn ? "CyberKnife S7 Oncology" : "Oncologie CyberKnife S7"} isEn={isEn} />
           </div>
        </div>

        <div className="mb-24 reveal">
           <h2 className="text-3xl font-serif font-bold text-prime mb-12 text-center">{isEn ? "Integrated Patient Journey" : "Călătoria Integrată a Pacientului"}</h2>
           <PatientJourneyTimeline />
        </div>

        <CertRow isEn={isEn} />
        <LocalContext isEn={isEn} />

        <div className="text-center mt-20">
           <a 
             href={`https://wa.me/905324675941?text=${encodeURIComponent(isEn ? "I would like to request a Tumor Board evaluation." : "Doresc să solicit o evaluare Tumor Board.")}`} 
             onClick={() => pushToDataLayer('whatsapp_click', { location: 'oncology_board_request' })}
             target="_blank" 
             rel="noreferrer" 
             aria-label={isEn ? "Request Medical Board Evaluation" : "Solicită Evaluare Tumor Board"}
             className="bg-prime text-white font-bold py-6 px-16 rounded-2xl shadow-2xl hover:bg-[#0f1f38] transition-all text-xl inline-flex items-center group"
           >
              {isEn ? "Request Medical Board Evaluation" : "Solicită Evaluare Tumor Board"} 
              <Activity size={24} className="ml-4 text-accent group-hover:scale-125 transition-transform" aria-hidden="true" />
           </a>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8">
        <MedicalReviewer reviewer={REVIEWERS.oncology} isEn={isEn} />
      </div>
    </div>
  );
}

export default Oncology;
