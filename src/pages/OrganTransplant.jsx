import React, { useEffect, useState } from 'react';
import DoctorBadge from '../components/DoctorBadge';
import PatientJourneyTimeline from '../components/PatientJourneyTimeline';
import DynamicSEO from '../components/DynamicSEO';
import { Activity, Plus, Minus, Cpu, Shield, HeartPulse, Microscope } from 'lucide-react';
import { TechCard, CertRow, VerifiedBadge } from '../components/ClinicalBadges';

const faqEn = [
  { q: "Do you offer cadaveric organ transplants?", a: "No, Meva Clinic exclusively coordinates Living-Donor transplants to ensure vastly superior organ longevity and immediate viability." },
  { q: "Who can be a living donor?", a: "A living donor is typically a relative up to the 4th degree of consanguinity. Comprehensive ethical and medical compatibility panels are mandated." },
  { q: "Is the donor surgery safe?", a: "Exceedingly safe. We employ laparoscopic and robotic-assisted techniques that minimize donor recovery time tremendously." },
  { q: "How long is the hospitalization?", a: "A recipient usually stays 1-3 weeks in our VIP isolation transplant suite depending on the graft's rapid integration." },
  { q: "Do you use Robotic Surgery?", a: "Yes, our surgical teams utilize the Da Vinci Xi Robotic System for both donor safety and delicate micro-anastomoses." }
];

const faqRo = [
  { q: "Oferiți transplanturi de la cadavru?", a: "Nu, Meva Clinic coordonează strict Transplanturi de la Donator Viu, asigurând astfel o durată de viață și viabilitate superioară a organului." },
  { q: "Cine poate fi donator viu?", a: "Un donator viu este, de regulă, o rudă cu consanguinitate până la gradul 4, condiționată de investigații etice și teste severe de compatibilitate." },
  { q: "Operația donatorului prezintă riscuri majore?", a: "Riscurile sunt atenuate enorm. Folosim abordarea laparoscopică închisă care facilitează o recuperare ultra-rapidă a donatorului sănătos." },
  { q: "Cât de lungă este spitalizarea?", a: "Receptorul stă spitalizat între 1 și 3 săptămâni în izolatoare VIP speciale, monitorizat permanent pe baza ecografiei de perfuzie." },
  { q: "Utilizați Chirurgia Robotică Da Vinci?", a: "Da, echipele noastre de prestigiu folosesc sistemul Da Vinci Xi pentru o acuratețe absolută în anastomozarea vasculară." }
];

const OrganTransplant = ({ lang = 'ro' }) => {
  const [activeFaq, setActiveFaq] = useState(0);
  const isEn = lang === 'en';
  useEffect(() => window.scrollTo(0, 0), [lang]);
  const faqs = isEn ? faqEn : faqRo;

  return (
    <div className="bg-white min-h-screen pt-32 pb-24">
      <DynamicSEO 
        title={isEn ? "Organ Transplant | Meva Clinic Istanbul" : "Transplant de Organe | Meva Clinic Istanbul"}
        description={isEn ? "Living Donor Kidney and Liver transplants via state-of-the-art Robotic Surgery." : "Transplant Renal și Hepatic de la donator viu prin chirurgie robotică de precizie."}
        path={isEn ? "/en/organ-transplant" : "/ro/transplant-organe"}
        schemaType="MedicalProcedure"
        keywords="transplant de organe Turcia, liver transplant Istanbul, kidney transplant Turkey"
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-4"><VerifiedBadge isEn={isEn} /></div>
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-prime mb-6 text-center">
          {isEn ? "Life-Saving Medical Excellence" : "Excelență Medicală Salvatoare de Vieți"}
        </h1>
        <div className="flex justify-center mb-8">
           <DoctorBadge text={isEn ? "Da Vinci Robotic Center — JCI Accredited" : "Centru Robotic Da Vinci — Acreditat JCI"} />
        </div>

        {/* Glassmorphism Tech Spec Cards */}
        <div className="bg-[#0b1626] rounded-3xl p-6 mb-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <TechCard icon={Cpu} title="Da Vinci Xi Robotic" sub={isEn ? 'Platform' : 'Platformă'} value={isEn ? 'Micro-anastomosis precision' : 'Precizie micro-anastomoză'} />
          <TechCard icon={Microscope} title="Cross-Matching Hub" sub={isEn ? 'Immunology' : 'Imunologie'} value={isEn ? 'Advanced compatibility panel' : 'Panel de compatibilitate avansat'} />
          <TechCard icon={HeartPulse} title="Living Donor Focus" sub={isEn ? 'Graft Strategy' : 'Strategie Grefă'} value={isEn ? 'Superior organ longevity' : 'Longevitate superioară'} />
          <TechCard icon={Shield} title="JCI Sterile Isolation" sub={isEn ? 'Environment' : 'Mediu'} value={isEn ? 'Zero-infection target' : 'Țintă zero-infecții'} />
        </div>
        
        <div className="prose prose-lg max-w-none text-gray-600 mb-16">
           <h3 className="text-2xl font-bold text-prime mb-4">{isEn ? "What is it?" : "Ce este?"}</h3>
           <p className="mb-8">{isEn ? "The Organ Transplant division at Meva Clinic addresses ultimate systemic failures. Focusing solely on Living-Donor operations, our center is reputed globally for exceptionally complex Liver and Kidney Transplantation procedures driven by absolute immunological competence." : "Divizia de Transplant a clinicii Meva abordează afecțiunile renale și hepatice în ultimul stadiu. Concentrându-ne exclusiv pe transplantul cu Donator Viu, protocolul garantează eficiență de nivel înalt prin inginerie imunologică de vârf și precizie chirurgicală internațională."}</p>

           <h3 className="text-2xl font-bold text-prime mb-4">{isEn ? "How it Works?" : "Cum funcționează?"}</h3>
           <div className="space-y-6 mb-8">
              <div><strong className="text-accent">{isEn ? "Kidney Transplant & Laparoscopic Harmony:" : "Transplant Renal și Armonie Laparoscopică:"}</strong> {isEn ? "Following cross-matching, the dysfunctional kidney receives a healthy substitute. The living donor operates under Laparoscopic (closed) extraction techniques—reducing significant recovery trauma, facilitating a fast return to everyday life while granting the recipient unparalleled independence from grueling dialysis." : "La scurt timp după testul de compatibilitate încrucișată, grefa e obținută prin extragere laparoscopică complet integrată a donatorului - fără daune masive, un timp rapid de vindecare oferind independența supremă a primitorului față de dializa repetată."}</div>
              <div><strong className="text-accent">{isEn ? "Liver Transplant Dynamics:" : "Dinamica Transplantului Hepatic:"}</strong> {isEn ? "Due to the liver's phenomenal ability to undergo hyper-regeneration, only a specific functional lobe is transplanted. Our internationally decorated hepatobiliary surgeons orchestrate this with flawless venous anastomoses to treat profound cirrhosis and end-stage hepatic impairments permanently." : "Datorită capacității magistrale de regenerare celulară a ficatului, transplantăm doar lobul necesar de la un grad de rudenie. Această intervenție extrem de complexă tratează formele avansate de ciroză readucând în funcțiune aparatul hepatic a ambilor actanți în câteva săptămâni."}</div>
           </div>

           <h3 className="text-2xl font-bold text-prime mb-4">{isEn ? "Why Meva Clinic?" : "De ce Meva Clinic?"}</h3>
           <p className="mb-12">{isEn ? "Transplantation mandates zero-tolerance for error. Thus, our surgical suites utilize Da Vinci Robot mechanics for unshakeable tremor-free accuracy. Your multi-disciplinary team features immunologists overseeing graft tolerance to ensure the international longevity metrics are aggressively satisfied." : "Transplantul mandatează o marjă de eroare zero. Astfel, blocul operator beneficiază de mecanică Da Vinci asigurând microchirurgie milimetrică. Ești îngrijit în camere complet sterile cu o echipă complexă de la nefrologi, psihologi, coordonatori și experți în imuno-supresoare de nouă generație."}</p>
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
             aria-label={isEn ? "Discuss Your Organ Transplant Case" : "Discută Cazul de Transplant de Organe"}
           >
              {isEn ? "Discuss Your Case Confidentially" : "Discută Cazul Tău în Confidențialitate"} <Activity size={20} className="ml-3 text-accent" aria-hidden="true" />
           </a>
        </div>
        <CertRow isEn={isEn} />
      </div>
    </div>
  );
}
export default OrganTransplant;
