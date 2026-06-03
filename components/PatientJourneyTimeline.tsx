// @ts-nocheck
'use client';

import React from 'react';
import { PlaneTakeoff, Microscope, Crosshair, Hotel, ShieldCheck, HeartPulse, Sparkles } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { tUI } from '@/utils/uiTranslations';


const PatientJourneyTimeline = ({ lang = 'en' }: { lang?: string }) => {
  const pathname = usePathname();
  const isEn = lang === 'en';

  const steps = [
    { 
      id: 1, 
      title: tUI("I. VIP Arrival", lang), 
      desc: tUI("Private Mercedes-Benz pickup from IST/SAW airport.", lang), 
      icon: PlaneTakeoff 
    },
    { 
      id: 2, 
      title: tUI("II. Clinical Screening", lang), 
      desc: tUI("Multi-disciplinary JCI diagnostic and blood work.", lang), 
      icon: Microscope 
    },
    { 
      id: 3, 
      title: tUI("III. Precision Procedure", lang), 
      desc: tUI("Execution by world-renowned clinical specialists.", lang), 
      icon: Crosshair 
    },
    { 
      id: 4, 
      title: tUI("IV. 5-Star Recovery", lang), 
      desc: tUI("Premium stay in Istanbul partner luxury hotels.", lang), 
      icon: Hotel 
    },
    { 
      id: 5, 
      title: tUI("V. 12-Month Follow-Up", lang), 
      desc: tUI("Remote care continues once you return home.", lang), 
      icon: HeartPulse 
    }
  ];

  return (
    <div className="bg-white p-8 md:p-16 rounded-[3rem] shadow-[0_20px_50px_rgba(0,0,0,0.04)] border border-gray-100 my-16 relative overflow-hidden reveal">
       <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-full blur-3xl"></div>
       <div className="absolute bottom-0 left-0 w-32 h-32 bg-prime/5 rounded-full blur-3xl"></div>
       
       <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent text-prime text-[9px] font-bold uppercase tracking-widest mb-4">
             <Sparkles size={12} />
             {tUI("The Meva All-Inclusive Protocol", lang)}
          </div>
          <h3 className="text-3xl md:text-4xl font-serif font-bold text-prime">
             {tUI("Your Path to Transformation", lang)}
          </h3>
       </div>

       <div className="flex flex-col md:flex-row justify-between relative mt-12">
          {/* Connector Line */}
          <div className="hidden md:block absolute top-[28px] left-[10%] right-[10%] h-[1px] bg-gradient-to-r from-transparent via-gray-200 to-transparent z-0"></div>
          
          {steps.map((step) => (
            <div key={step.id} className="relative z-10 flex flex-col items-center text-center px-4 mb-12 md:mb-0 w-full md:w-1/5 group">
               <div className="w-14 h-14 bg-white border border-gray-100 group-hover:border-accent group-hover:bg-prime rounded-2xl flex items-center justify-center shadow-xl mb-6 text-prime transition-all duration-500 transform group-hover:-translate-y-2 group-hover:rotate-6">
                  <step.icon size={24} className="text-accent group-hover:text-white transition-colors duration-500" />
               </div>
               <h4 className="font-bold text-base text-prime mb-3">{step.title}</h4>
               <p className="text-xs text-gray-500 font-sans leading-relaxed">{step.desc}</p>
            </div>
          ))}
       </div>

       <div className="mt-16 pt-8 border-t border-gray-50 flex items-center justify-center gap-2 text-xs font-bold text-gray-400 uppercase tracking-widest">
          <ShieldCheck size={16} className="text-accent" />
          {tUI("Clinical care continues 12 months post-op", lang)}
       </div>
    </div>
  );
};

export default PatientJourneyTimeline;
