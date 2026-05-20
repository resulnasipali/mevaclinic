import React from 'react';
import { useLocation } from 'react-router-dom';
import { ShieldCheck, Cpu, HeartPulse, Scale, X, Check } from 'lucide-react';
import { pushToDataLayer } from '../utils/AnalyticsUtils';

const ComparisonSection = () => {
  const location = useLocation();
  const isEn = location.pathname.startsWith('/en');

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
    <section className="py-24 bg-gray-50 relative overflow-hidden" id="compare-clinics">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 reveal">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent text-[10px] font-bold uppercase tracking-widest mb-4">
            <Scale size={14} />
            {isEn ? "Medical Comparison" : "Comparație Medicală"}
          </div>
          <h2 className="text-4xl md:text-6xl font-serif font-bold text-prime mb-6 leading-tight">
            {isEn ? "Excellence Without Compromise" : "Excelență Fără Compromis"}
          </h2>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed">
            {isEn 
              ? "Why high-intent patients choose Meva Clinic over local European alternatives: A clinical and ethical analysis." 
              : "De ce pacienții cu exigențe ridicate aleg Meva Clinic în detrimentul alternativelor locale europene: O analiză clinică și etică."}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 reveal">
           <div className="bg-white rounded-[3rem] shadow-2xl overflow-hidden border border-gray-100">
              <div className="grid grid-cols-3 bg-prime text-white p-6 md:p-10 text-center font-bold uppercase tracking-widest text-xs">
                 <div className="text-left">{isEn ? "Metric" : "Metrică"}</div>
                 <div className="text-accent flex items-center justify-center gap-2">
                   <ShieldCheck size={16} /> Meva Clinic (Istanbul)
                 </div>
                 <div className="opacity-60">{isEn ? "EU/UK Standard" : "Standard UE/UK"}</div>
              </div>

              <div className="divide-y divide-gray-50">
                 {features.map((f, i) => (
                   <div key={i} className="grid grid-cols-3 p-6 md:p-10 items-center hover:bg-gray-50 transition-colors group">
                      <div className="flex items-center gap-4">
                         <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-prime transition-all shrink-0">
                            <f.icon size={20} />
                         </div>
                         <span className="font-bold text-prime text-sm md:text-base">{f.title}</span>
                      </div>
                      <div className="text-center px-4">
                         <div className="inline-flex items-center justify-center gap-2 text-prime font-bold text-sm md:text-base bg-accent/10 px-4 py-2 rounded-xl border border-accent/20 w-full md:w-auto">
                            <Check size={18} className="text-accent" /> {f.meva}
                         </div>
                      </div>
                      <div className="text-center px-4 opacity-50 italic text-xs md:text-sm font-medium">
                         <div className="inline-flex items-center justify-center gap-2">
                            <X size={16} /> {f.eu}
                         </div>
                      </div>
                   </div>
                 ))}
              </div>
           </div>
        </div>

      </div>
    </section>
  );
};

export default ComparisonSection;
