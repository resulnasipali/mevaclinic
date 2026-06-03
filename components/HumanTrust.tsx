import { tUI } from '@/utils/uiTranslations';
// @ts-nocheck
import React from 'react';
import { Phone, Video, Calendar, Clock, ShieldCheck, HeartPulse, Sparkles, MessageSquare } from 'lucide-react';
import { pushToDataLayer } from '../utils/AnalyticsUtils';

const HumanTrust = ({ isEn = false, lang = 'en' }: { isEn?: boolean, lang?: string }) => {
  const coordinators = [
    {
      name: "Ioana Georgescu",
      role: tUI("Senior Medical Coordinator", lang),
      msg: tUI("I am here to guide you from Bucharest to Istanbul.", lang),
      img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400&auto=format&fit=crop"
    },
    {
      name: "Mihai Stan",
      role: tUI("Patient Support Specialist", lang),
      msg: tUI("Your safety and comfort in Istanbul are my priority.", lang),
      img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=400&auto=format&fit=crop"
    }
  ];

  const monitoring = [
    { icon: Video, title: tUI("Month 1 Video Call", lang), desc: tUI("Personal clinical check with your surgeon.", lang) },
    { icon: Calendar, title: tUI("Month 3 Progress", lang), desc: tUI("Detailed review of biological markers.", lang) },
    { icon: ShieldCheck, title: tUI("24/7 Priority Support", lang), desc: tUI("Immediate access to your medical team.", lang) }
  ];

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-24">
          <div className="reveal">
             <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 text-prime text-[10px] font-bold uppercase tracking-widest mb-6 border border-accent/20">
                <Sparkles size={14} className="text-accent" />
                {tUI("Native Support Team", lang)}
             </div>
             <h2 className="text-4xl md:text-6xl font-serif font-bold text-prime mb-8 leading-tight">
                {tUI("Meet Your Clinical Coordinator", lang)}
             </h2>
             <p className="text-lg text-gray-500 mb-12 leading-relaxed">
                {tUI("Medicine is about people. Our Romanian-speaking team ensures that nothing is lost in translation during your medical journey in Istanbul.", lang)}
             </p>
             
             <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {coordinators.map((c, i) => (
                  <div key={i} className="group cursor-default">
                     <div className="aspect-square rounded-3xl overflow-hidden mb-4 shadow-xl border border-gray-100 relative">
                        <img src={c.img} alt={c.name} aria-label={c.name} loading="lazy" className="w-full h-full object-cover transition-transform group-hover:scale-105" />
                        <div className="absolute bottom-4 left-4 right-4">
                           <div className="bg-white/20 backdrop-blur-md border border-white/30 p-3 rounded-2xl flex items-center justify-center gap-2 text-white">
                              <MessageSquare size={14} />
                              <span className="text-[10px] font-bold uppercase tracking-widest">Online Now</span>
                           </div>
                        </div>
                     </div>
                     <h4 className="font-bold text-prime text-lg">{c.name}</h4>
                     <p className="text-xs text-accent font-bold uppercase tracking-widest mb-2">{c.role}</p>
                     <p className="text-sm text-gray-500 italic">"{c.msg}"</p>
                  </div>
                ))}
             </div>
          </div>

          <div className="bg-prime rounded-[4rem] p-12 md:p-20 text-white relative overflow-hidden shadow-2xl reveal">
             <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl -mr-32 -mt-32"></div>
             
             <div className="relative z-10">
                <HeartPulse className="text-accent mb-6" size={48} />
                <h3 className="text-3xl md:text-4xl font-serif font-bold mb-6 leading-tight">
                   {tUI("Care Beyond the Border", lang)}
                </h3>
                <p className="text-gray-400 mb-12 leading-relaxed">
                   {tUI("Your journey doesn't end when you leave Istanbul. Our remote monitoring system keeps us connected for 12 months.", lang)}
                </p>

                <div className="space-y-8">
                   {monitoring.map((m, i) => (
                     <div key={i} className="flex items-start gap-6 group">
                        <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-prime transition-all">
                           <m.icon size={24} />
                        </div>
                        <div>
                           <h4 className="font-bold text-white text-lg mb-1">{m.title}</h4>
                           <p className="text-sm text-gray-400">{m.desc}</p>
                        </div>
                     </div>
                   ))}
                </div>

                <div className="mt-16 p-8 rounded-3xl bg-white/5 border border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
                   <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center text-green-500">
                         <ShieldCheck size={20} />
                      </div>
                      <span className="text-xs font-bold uppercase tracking-widest text-gray-300">
                         {tUI("Tele-Medicine Active", lang)}
                      </span>
                   </div>
                   <a 
                     href="https://wa.me/905324675941" 
                     onClick={() => pushToDataLayer('whatsapp_click', { location: 'human_trust_followup' })}
                     className="text-accent font-bold text-sm hover:text-white transition-colors flex items-center gap-2"
                   >
                      {tUI("Ask About Follow-up", lang)} <Clock size={16} />
                   </a>
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HumanTrust;
