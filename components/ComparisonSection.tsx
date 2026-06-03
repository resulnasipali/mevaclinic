// @ts-nocheck
'use client';

import React from 'react';
import { usePathname } from 'next/navigation';

import { ShieldCheck, Cpu, HeartPulse, Scale, X, Check } from 'lucide-react';
import { pushToDataLayer } from '../utils/AnalyticsUtils';
import { tUI } from '@/utils/uiTranslations';

const ComparisonSection = ({ lang = 'en' }: { lang?: string }) => {
  const pathname = usePathname();
  const isEn = lang === 'en';

  const features = [
    {
      title: tUI("Technology Access", lang),
      meva: tUI("Immediate (CyberKnife S7, Da Vinci)", lang),
      eu: tUI("Waitlists up to 6-12 months", lang),
      icon: Cpu
    },
    {
      title: tUI("Clinical Protocol", lang),
      meva: tUI("JCI Gold Standard Accreditation", lang),
      eu: tUI("Varies by country/hospital", lang),
      icon: ShieldCheck
    },
    {
      title: tUI("Board Evaluation", lang),
      meva: tUI("Daily Multidisciplinary Review", lang),
      eu: tUI("Scheduled weekly/bi-weekly", lang),
      icon: HeartPulse
    },
    {
      title: tUI("Personalized Care", lang),
      meva: tUI("1-on-1 Patient Concierge", lang),
      eu: tUI("General nursing staff", lang),
      icon: Scale
    }
  ];

  return (
    <section className="py-24 bg-gray-50 relative overflow-hidden" id="compare-clinics">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 reveal">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent text-[10px] font-bold uppercase tracking-widest mb-4">
            <Scale size={14} />
            {tUI("Medical Comparison", lang)}
          </div>
          <h2 className="text-4xl md:text-6xl font-serif font-bold text-prime mb-6 leading-tight">
            {tUI("Excellence Without Compromise", lang)}
          </h2>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed">
            {tUI("Why high-intent patients choose Meva Clinic over local European alternatives: A clinical and ethical analysis.", lang)}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 reveal">
           <div className="bg-white rounded-[3rem] shadow-2xl overflow-hidden border border-gray-100">
              <div className="grid grid-cols-3 bg-prime text-white p-6 md:p-10 text-center font-bold uppercase tracking-widest text-xs">
                 <div className="text-left">{tUI("Metric", lang)}</div>
                 <div className="text-accent flex items-center justify-center gap-2">
                   <ShieldCheck size={16} /> Meva Clinic (Istanbul)
                 </div>
                 <div className="opacity-60">{tUI("EU/UK Standard", lang)}</div>
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
