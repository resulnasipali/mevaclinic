import { tUI } from '@/utils/uiTranslations';
// @ts-nocheck
import React from 'react';
import { Car, Hotel, Languages, ShieldCheck, MapPin, CheckCircle2, Clock, Smartphone } from 'lucide-react';

const LogisticsHub = ({ isEn = false, lang = 'en' }: { isEn?: boolean, lang?: string }) => {
  const steps = [
    {
      icon: Car,
      title: tUI("Private Patient Transfer", lang),
      desc: tUI("Chauffeur-driven private van fleet with comfortable, spacious seating.", lang)
    },
    {
      icon: Hotel,
      title: tUI("Premium Partner Hotels", lang),
      desc: tUI("Marriott and Hilton alliance for comfortable post-operative recovery.", lang)
    },
    {
      icon: Languages,
      title: tUI("Personal Translator", lang),
      desc: tUI("24/7 Romanian-speaking medical assistant by your side.", lang)
    }
  ];

  const checklist = isEn 
    ? ["Private Airport Greeting", "Mobile App Tracking", "12-Month Remote Follow-up", "Priority Clinic Access"]
    : ["Întâmpinare Privată la Aeroport", "Monitorizare prin Aplicație", "Follow-up la distanță 12 luni", "Acces Prioritar în Clinică"];

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div className="reveal">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/10 border border-accent/20 text-prime text-[10px] font-bold uppercase tracking-[0.2em] mb-6">
               <MapPin size={14} className="text-accent" />
               {tUI("The Istanbul Patient Protocol", lang)}
            </div>
            <h2 className="text-4xl md:text-6xl font-serif font-bold text-prime mb-8 leading-tight">
               {tUI("Premium Medical Logistics", lang)}
            </h2>
            <p className="text-lg text-gray-500 mb-12 leading-relaxed">
               {tUI("We manage every second of your journey, ensuring that your focus remains entirely on your recovery and clinical excellence.", lang)}
            </p>

            <div className="space-y-6">
               {steps.map((step, i) => (
                 <div key={i} className="flex items-start gap-5 p-6 rounded-3xl hover:bg-gray-50 transition-colors border border-transparent hover:border-gray-100 group">
                    <div className="w-14 h-14 rounded-2xl bg-prime text-white flex items-center justify-center shrink-0 shadow-lg group-hover:bg-accent group-hover:text-prime transition-all">
                       <step.icon size={28} />
                    </div>
                    <div>
                       <h3 className="text-xl font-bold text-prime mb-1">{step.title}</h3>
                       <p className="text-gray-500 text-sm">{step.desc}</p>
                    </div>
                 </div>
               ))}
            </div>
          </div>

          <div className="relative reveal">
             <div className="aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl relative group-hover:shadow-[0_0_40px_rgba(212,175,55,0.2)] transition-shadow duration-700">
                <img 
                  src="/images/vip-transfer.jpg" 
                  alt="Private Transfer Istanbul" 
                  aria-label="Private Transfer Istanbul" 
                  width="1200"
                  height="1500"
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-prime via-prime/40 to-transparent opacity-80"></div>
                
                <div className="absolute bottom-10 left-10 right-10">
                   <div className="bg-white/10 backdrop-blur-xl border border-white/20 p-8 rounded-[2rem]">
                      <h4 className="text-white font-serif font-bold text-2xl mb-6">
                         {tUI("Stress-Free Journey Checklist", lang)}
                      </h4>
                      <ul className="space-y-4">
                         {checklist.map((item, i) => (
                           <li key={i} className="flex items-center gap-3 text-white/90 text-sm font-medium">
                              <CheckCircle2 size={18} className="text-accent" />
                              {item}
                           </li>
                         ))}
                      </ul>
                   </div>
                </div>
             </div>

             {/* Floating Trust Indicator */}
             <div className="absolute -top-10 -right-10 bg-accent text-prime p-8 rounded-full w-40 h-40 flex flex-col items-center justify-center text-center shadow-2xl animate-float border-4 border-white">
                <ShieldCheck size={32} className="mb-2" />
                <span className="text-[10px] font-bold uppercase tracking-widest leading-tight">100% Secure Logistics</span>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default LogisticsHub;
