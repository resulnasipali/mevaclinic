// @ts-nocheck
'use client';

import React from 'react';
import { ShieldCheck, Check, Star, Car, Hotel, Languages, Activity } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { tUI } from '@/utils/uiTranslations';


const PremiumPackageSection = ({ lang = 'en' }: { lang?: string }) => {
  const pathname = usePathname();
  const isEn = (pathname || "/").startsWith('/en');

  return (
    <section id="pachete" className="py-12 md:py-24 bg-gray-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-8 md:mb-16">
          <div className="inline-flex items-center space-x-2 py-1.5 px-4 rounded-full bg-accent/10 border border-accent/20 text-[#8B6914] text-xs md:text-sm font-bold tracking-widest uppercase mb-4 shadow-sm">
            <ShieldCheck size={16} aria-hidden="true" />
            <span>Premium Care</span>
          </div>
          <h2 className="text-2xl md:text-5xl font-serif font-bold text-prime mb-4 md:mb-6 leading-tight">
             {tUI("All-Inclusive Package Built Around You", lang)}
          </h2>
          <p className="text-base md:text-lg text-gray-600 font-sans leading-relaxed">
             {tUI("Your medical experience in Istanbul should be stress-free. We have prepared a premium package where details make the difference.", lang)}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 items-center bg-white rounded-3xl p-6 lg:p-12 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100/50 relative">
          
          <div className="absolute top-0 right-10 transform -translate-y-1/2 flex flex-col items-center justify-center bg-gradient-to-br from-accent to-accentHov text-white w-20 h-20 md:w-24 md:h-24 rounded-full shadow-lg shadow-accent/20 border-[3px] border-white z-10 hover:scale-105 transition-transform duration-300">
            <Star className="fill-white mb-1" size={18} />
            <span className="text-[9px] md:text-[10px] font-bold uppercase tracking-wider text-center leading-tight">Luxury<br/>Concierge</span>
          </div>

          <div className="grid grid-cols-2 gap-x-4 gap-y-6 md:gap-x-6 md:gap-y-8 z-10 relative">
            <div className="flex flex-col items-center text-center sm:flex-row sm:items-start sm:text-left group">
              <div className="flex-shrink-0 w-16 h-16 md:w-20 md:h-20 rounded-2xl overflow-hidden border border-gray-100 shadow-md group-hover:scale-105 transition-transform duration-300 mb-3 sm:mb-0" aria-hidden="true">
                <img 
                  src="/images/vip-transfer.jpg" 
                  alt={tUI("VIP Airport & Clinic Transfer", lang)} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="sm:ml-4 pt-1">
                <h3 className="text-base sm:text-lg font-bold text-prime mb-1 sm:mb-2">{tUI("VIP Airport & Clinic Transfer", lang)}</h3>
                <p className="hidden sm:block text-xs text-gray-500 font-sans leading-relaxed">{tUI("Personal driver at your disposal from landing in Istanbul and throughout all medical visits.", lang)}</p>
              </div>
            </div>

            <div className="flex flex-col items-center text-center sm:flex-row sm:items-start sm:text-left group">
              <div className="flex-shrink-0 w-16 h-16 md:w-20 md:h-20 rounded-2xl overflow-hidden border border-gray-100 shadow-md group-hover:scale-105 transition-transform duration-300 mb-3 sm:mb-0" aria-hidden="true">
                <img 
                  src="/images/hotel.jpg" 
                  alt={tUI("5-Star Hotel Accommodation", lang)} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="sm:ml-4 pt-1">
                <h3 className="text-base sm:text-lg font-bold text-prime mb-1 sm:mb-2">{tUI("5-Star Hotel Accommodation", lang)}</h3>
                <p className="hidden sm:block text-xs text-gray-500 font-sans leading-relaxed">{tUI("Recovery in luxury conditions. The package fully covers accommodation in one of our prestigious partner hotels.", lang)}</p>
              </div>
            </div>

            <div className="flex flex-col items-center text-center sm:flex-row sm:items-start sm:text-left group">
              <div className="flex-shrink-0 w-16 h-16 md:w-20 md:h-20 rounded-2xl overflow-hidden border border-gray-100 shadow-md group-hover:scale-105 transition-transform duration-300 mb-3 sm:mb-0" aria-hidden="true">
                <img 
                  src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=300&auto=format&fit=crop" 
                  alt={tUI("Native English Translator", lang)} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="sm:ml-4 pt-1">
                <h3 className="text-base sm:text-lg font-bold text-prime mb-1 sm:mb-2">{tUI("Native English Translator", lang)}</h3>
                <p className="hidden sm:block text-xs text-gray-500 font-sans leading-relaxed">{tUI("There will be no language barriers. A dedicated medical assistant will accompany you to translate every detail.", lang)}</p>
              </div>
            </div>

            <div className="flex flex-col items-center text-center sm:flex-row sm:items-start sm:text-left group">
              <div className="flex-shrink-0 w-16 h-16 md:w-20 md:h-20 rounded-2xl overflow-hidden border border-gray-100 shadow-md group-hover:scale-105 transition-transform duration-300 mb-3 sm:mb-0" aria-hidden="true">
                <img 
                  src="/images/hospital.webp" 
                  alt={tUI("Pre/Post-Operative Tests", lang)} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="sm:ml-4 pt-1">
                <h3 className="text-base sm:text-lg font-bold text-prime mb-1 sm:mb-2">{tUI("Pre/Post-Operative Tests", lang)}</h3>
                <p className="hidden sm:block text-xs text-gray-500 font-sans leading-relaxed">{tUI("All analyzes, consultations (cardiological, anesthetic) and necessary tests are 100% covered.", lang)}</p>
              </div>
            </div>
          </div>

          <div className="bg-prime rounded-2xl p-6 lg:p-10 text-white relative overflow-hidden shadow-2xl h-full flex flex-col justify-between group">
             {/* S-Tier Luxury Hotel Image Overlay */}
             <div className="absolute inset-0 z-0 overflow-hidden">
                <img 
                   src="https://images.unsplash.com/photo-1542314831-c6a4d14d8373?q=80&w=1200&auto=format&fit=crop" 
                   alt="5-Star Accommodation" 
                   className="w-full h-full object-cover opacity-20 mix-blend-overlay group-hover:scale-110 group-hover:opacity-30 transition-all duration-1000 ease-out" 
                />
             </div>
             <div className="absolute inset-0 bg-gradient-to-tr from-[#0B1E33]/95 via-[#0B1E33]/80 to-[#D4AF37]/20 z-0"></div>

             <div className="absolute top-0 right-0 w-96 h-96 bg-[#D4AF37]/10 rounded-full blur-3xl -translate-y-1/3 translate-x-1/3 pointer-events-none z-0 transition-transform duration-1000 group-hover:scale-125"></div>
             
             <div className="relative z-10">
               <h3 className="text-2xl md:text-3xl font-serif font-bold mb-4 md:mb-8 drop-shadow-md">{tUI("The Premium Treatment", lang)}</h3>
               <ul className="space-y-3 md:space-y-4 mb-6 md:mb-8 font-sans text-sm md:text-base">
                 <li className="flex items-start">
                   <Check className="text-accent mr-3 mt-1 flex-shrink-0" size={18} strokeWidth={3} />
                   <span className="font-medium text-white/95">{tUI("Guaranteed Surgical Intervention", lang)}</span>
                 </li>
                 <li className="flex items-start">
                   <Check className="text-accent mr-3 mt-1 flex-shrink-0" size={18} strokeWidth={3} />
                   <span className="font-medium text-white/95">{tUI("Team formed by Doctor Professors", lang)}</span>
                 </li>
                 <li className="flex items-start">
                   <Check className="text-accent mr-3 mt-1 flex-shrink-0" size={18} strokeWidth={3} />
                   <span className="font-medium text-white/95">{tUI("VIP Hospitalization in Private Clinic (1-3 Days)", lang)}</span>
                 </li>
                 <li className="flex items-start">
                   <Check className="text-accent mr-3 mt-1 flex-shrink-0" size={18} strokeWidth={3} />
                   <span className="font-medium text-white/95">{tUI("Home Medication Included", lang)}</span>
                 </li>
                 <li className="flex items-start">
                   <Check className="text-accent mr-3 mt-1 flex-shrink-0" size={18} strokeWidth={3} />
                   <span className="font-medium text-white/95">{tUI("Dedicated Post-Operative Diet Plan", lang)}</span>
                 </li>
               </ul>
             </div>
             
             <div className="relative z-10 border-t border-white/20 pt-6 mt-4 text-center bg-white/10 backdrop-blur-sm mx-[-1.5rem] md:mx-[-2rem] mb-[-1.5rem] md:mb-[-2.5rem] px-8 pb-10 hidden sm:block">
                <p className="text-base md:text-lg italic font-serif text-accent drop-shadow-md">
                   {tUI("\"No hidden costs – Everything included for your comfort\"", lang)}
                </p>
             </div>
             
             <div className="relative z-10 border-t border-white/20 pt-6 mt-4 text-center sm:hidden block backdrop-blur-sm">
                <p className="text-base md:text-lg italic font-serif text-accent drop-shadow-md">
                   {tUI("\"No hidden costs – Everything included for your comfort\"", lang)}
                </p>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default PremiumPackageSection;
