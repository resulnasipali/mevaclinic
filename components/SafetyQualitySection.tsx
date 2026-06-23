// @ts-nocheck
'use client';

import React, { useState } from 'react';
import { ShieldCheck, Plus, Minus, PlayCircle, Award, HeartPulse, Stethoscope, ChevronRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { tUI } from '@/utils/uiTranslations';


const getFaqData = (lang: string) => [
  { question: tUI("What happens if a medical complication occurs?", lang), answer: tUI("Your safety is our priority. Procedures are arranged through accredited partner hospitals in Turkey where applicable, with patient briefing, documentation and post-treatment support. Eligible treatment programs may include medical complication insurance depending on the procedure and provider.", lang) },
  { question: tUI("How safe is traveling and staying in Istanbul?", lang), answer: tUI("Istanbul is a prestigious international hub for medical tourism. From the moment you step off the plane, our VIP assistant will pick you up. Accommodation is provided in five-star hotels located in premium areas.", lang) },
  { question: tUI("Am I covered by a guarantee or insurance?", lang), answer: tUI("Absolutely. We exclusively collaborate with experienced partner doctors selected through credential review. Additionally, you benefit from our dedicated assistance and transparent legal procedures.", lang) }
];


const SafetyQualitySection = ({ lang = 'en' }: { lang?: string }) => {
  const [activeFaq, setActiveFaq] = useState(0);
  const isEn = lang === 'en';
  const faqData = getFaqData(lang);

  return (
    <section className="py-12 md:py-24 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden" id="siguranta">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-prime/5 -translate-y-1/2 translate-x-1/2 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="flex flex-col lg:flex-row items-center justify-between mb-12 md:mb-24 gap-8 md:gap-12">
          <div className="lg:w-1/2">
            <div className="inline-flex items-center space-x-2 py-1.5 px-4 rounded-full bg-red-50 text-red-800 border border-red-100 text-xs md:text-sm font-bold tracking-widest uppercase mb-4 md:mb-6 shadow-sm">
              <ShieldCheck size={16} />
              <span>{tUI("Partner Hospital Safety Standards", lang)}</span>
            </div>
            <h2 className="text-2xl md:text-5xl font-serif font-bold text-prime mb-4 md:mb-6 leading-[1.15]">
               {tUI("Patient Safety Comes First.", lang)}
            </h2>
            <p className="text-base md:text-lg text-gray-700 font-sans leading-relaxed">
               {tUI("Meva Clinic supports international patient journeys through specialist doctors and accredited partner hospitals in Turkey, with treatment planning, patient documentation and follow-up guidance designed around safety.", lang)}
            </p>
          </div>
          
          <div className="lg:w-5/12 flex w-full">
            <div className="bg-white p-6 md:p-10 rounded-3xl shadow-2xl border border-gray-100 w-full flex items-center gap-4 md:gap-8 relative overflow-hidden group hover:-translate-y-1 transition-transform duration-500">
               <div className="absolute top-0 right-0 w-48 h-48 bg-red-500/5 rounded-full blur-3xl -mr-16 -mt-16 group-hover:bg-red-500/10 transition-all duration-500 pointer-events-none"></div>
               <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-red-500 to-red-700 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-red-500/30 flex-shrink-0 relative z-10">
                  <HeartPulse size={32} className="md:w-[40px] md:h-[40px]" strokeWidth={1.5} />
               </div>
               <div className="relative z-10">
                 <div className="text-4xl md:text-6xl font-bold font-serif text-prime mb-1 md:mb-2">12,500+</div>
                 <div className="text-gray-700 font-bold uppercase tracking-wider text-xs md:text-sm">{tUI("International Patients", lang)}</div>
               </div>
            </div>
          </div>
        </div>

        <div className="max-w-3xl mx-auto">
          <h3 className="text-2xl md:text-3xl font-serif font-bold text-prime mb-6 md:mb-8 text-center">{tUI("Frequently Asked Questions", lang)}</h3>
          <div className="space-y-4">
            {faqData.map((faq, index) => (
              <div key={index} className="bg-white border border-gray-100 rounded-2xl shadow-[0_2px_15px_rgb(0,0,0,0.03)] overflow-hidden transition-all duration-300">
                <button 
                  onClick={() => setActiveFaq(activeFaq === index ? -1 : index)} 
                  className="w-full px-5 md:px-6 py-4 md:py-6 flex items-center justify-between text-left focus:outline-none group"
                  aria-expanded={activeFaq === index}
                  aria-label={`Toggle FAQ: ${faq.question}`}
                >
                  <span className="font-bold text-prime text-base md:text-lg pr-4 group-hover:text-accent transition-colors">{faq.question}</span>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-colors duration-300 ${activeFaq === index ? 'bg-accent text-white' : 'bg-gray-100 text-gray-700 group-hover:bg-gray-200'}`}>
                    {activeFaq === index ? <Minus size={16} /> : <Plus size={16} />}
                  </div>
                </button>
                <div className={`px-5 md:px-6 overflow-hidden transition-all duration-500 ease-in-out ${activeFaq === index ? 'max-h-96 pb-4 md:pb-6 opacity-100' : 'max-h-0 opacity-0'}`}>
                  <p className="text-sm md:text-base text-gray-700 font-sans leading-relaxed border-t border-gray-100 pt-4 md:pt-5">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SafetyQualitySection;
