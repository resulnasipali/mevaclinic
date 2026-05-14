import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import DynamicSEO from '../components/DynamicSEO';
import { ShieldCheck, Cpu, Clock, HeartPulse, Scale, X, Check } from 'lucide-react';
import Breadcrumbs from '../components/Breadcrumbs';
import { pushToDataLayer } from '../utils/AnalyticsUtils';

const ComparisonHub = () => {
  const location = useLocation();
  const isEn = location.pathname.startsWith('/en');

  useEffect(() => window.scrollTo(0, 0), []);

  const features = [
    {
      title: isEn ? "Technology Access" : "Acces la Tehnologie",
      meva: isEn ? "Immediate (CyberKnife S7, Da Vinci)" : "Imediat (CyberKnife S7, Da Vinci)",
      eu: isEn ? "Waitlists up to 6-12 months" : "Liste de așteptare 6-12 luni",
      icon: Cpu
    },
    {
      title: isEn ? "Clinical Protocol" : "Protocol Clinic",
      meva: isEn ? "JCI Gold Standard Accreditation" : "Acreditare JCI Gold Standard",
      eu: isEn ? "Varies by country/hospital" : "Variază în funcție de țară",
      icon: ShieldCheck
    },
    {
      title: isEn ? "Board Evaluation" : "Evaluare Tumor Board",
      meva: isEn ? "Daily Multidisciplinary Review" : "Revizuire Zilnică Multidisciplinară",
      eu: isEn ? "Scheduled weekly/bi-weekly" : "Programată săptămânal/bisăptămânal",
      icon: HeartPulse
    },
    {
      title: isEn ? "Personalized Care" : "Îngrijire Personalizată",
      meva: isEn ? "1-on-1 Patient Concierge" : "Concierge 1-la-1 pentru Pacient",
      eu: isEn ? "General nursing staff" : "Personal medical generalist",
      icon: Scale
    }
  ];

  return (
    <div className="bg-gray-50 min-h-screen pt-40 pb-24">
      <DynamicSEO 
        title={isEn ? "Medical Standards: Istanbul vs. EU/UK | Meva Clinic" : "Standarde Medicale: Istanbul vs. UE/UK | Meva Clinic"}
        description={isEn ? "An ethical comparison of medical technology access, safety protocols, and clinical outcomes between Istanbul and European centers." : "O comparație etică a accesului la tehnologie medicală, protocoale de siguranță și rezultate clinice între Istanbul și centrele europene."}
        path={isEn ? "/en/comparison" : "/ro/comparatie"}
      />

      <div className="max-w-7xl mx-auto px-6">
        <Breadcrumbs 
          isEn={isEn} 
          items={[{ label: isEn ? "Authority" : "Autoritate", path: null }, { label: isEn ? "Medical Comparison" : "Comparație Medicală", path: null }]} 
        />

        <div className="text-center mb-20 reveal">
          <h1 className="text-4xl md:text-7xl font-serif font-bold text-prime mb-6 leading-tight">
            {isEn ? "Excellence Without Compromise" : "Excelență Fără Compromis"}
          </h1>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed">
            {isEn 
              ? "Why high-intent patients choose Meva Clinic over local European alternatives: A clinical and ethical analysis." 
              : "De ce pacienții cu exigențe ridicate aleg Meva Clinic în detrimentul alternativelor locale europene: O analiză clinică și etică."}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 reveal">
           <div className="bg-white rounded-[3rem] shadow-2xl overflow-hidden border border-gray-100">
              <div className="grid grid-cols-3 bg-prime text-white p-8 md:p-12 text-center font-bold uppercase tracking-[0.2em] text-xs">
                 <div className="text-left">{isEn ? "Metric" : "Metrică"}</div>
                 <div className="text-accent">Meva Clinic (Istanbul)</div>
                 <div className="opacity-40">{isEn ? "EU/UK Standard" : "Standard UE/UK"}</div>
              </div>

              <div className="divide-y divide-gray-50">
                 {features.map((f, i) => (
                   <div key={i} className="grid grid-cols-3 p-8 md:p-12 items-center hover:bg-gray-50 transition-colors group">
                      <div className="flex items-center gap-4">
                         <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-prime transition-all">
                            <f.icon size={20} />
                         </div>
                         <span className="font-bold text-prime text-sm md:text-base">{f.title}</span>
                      </div>
                      <div className="text-center px-4">
                         <div className="inline-flex items-center gap-2 text-green-600 font-bold text-sm md:text-base">
                            <Check size={18} /> {f.meva}
                         </div>
                      </div>
                      <div className="text-center px-4 opacity-40 italic text-xs md:text-sm">
                         <div className="inline-flex items-center gap-2">
                            <X size={16} /> {f.eu}
                         </div>
                      </div>
                   </div>
                 ))}
              </div>
           </div>
        </div>

        {/* Closing Trust Box */}
        <div className="mt-20 p-12 bg-prime rounded-[3rem] text-white text-center shadow-2xl reveal">
           <h3 className="text-2xl font-serif font-bold mb-4">
              {isEn ? "Clinical Transparency First" : "Transparența Clinică pe Primul Loc"}
           </h3>
           <p className="text-gray-400 max-w-2xl mx-auto mb-8 leading-relaxed text-sm">
              {isEn 
                ? "Our comparison is based on 2024 JCI global metrics and waitlist data from national health services. We encourage all patients to verify these standards." 
                : "Comparația noastră se bazează pe metricile globale JCI 2024 și datele privind listele de așteptare din serviciile naționale de sănătate."}
           </p>
           <a 
             href="https://wa.me/905324675941" 
             onClick={() => pushToDataLayer('whatsapp_click', { location: 'comparison_hub_cta' })}
             className="bg-accent text-prime font-bold py-5 px-12 rounded-2xl hover:bg-white transition-all inline-block"
           >
              {isEn ? "Request Full Quality Report" : "Solicită Raportul Complet de Calitate"}
           </a>
        </div>
      </div>
    </div>
  );
};

export default ComparisonHub;
