import React from 'react';
import { Phone, Video, Calendar, Clock, ShieldCheck, HeartPulse, Sparkles, MessageSquare } from 'lucide-react';
import { pushToDataLayer } from '../utils/AnalyticsUtils';

const HumanTrust = ({ isEn = false }) => {
  const coordinators = [
    {
      name: "Ioana Georgescu",
      role: isEn ? "Senior Medical Coordinator" : "Coordonator Medical Senior",
      msg: isEn ? "I am here to guide you from Bucharest to Istanbul." : "Sunt aici să te ghidez de la București la Istanbul.",
      img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400&auto=format&fit=crop"
    },
    {
      name: "Mihai Stan",
      role: isEn ? "Patient Support Specialist" : "Specialist Suport Pacienți",
      msg: isEn ? "Your safety and comfort in Istanbul are my priority." : "Siguranța și confortul tău în Istanbul sunt prioritatea mea.",
      img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=400&auto=format&fit=crop"
    }
  ];

  const monitoring = [
    { icon: Video, title: isEn ? "Month 1 Video Call" : "Luna 1: Video Call", desc: isEn ? "Personal clinical check with your surgeon." : "Verificare clinică personală cu chirurgul tău." },
    { icon: Calendar, title: isEn ? "Month 3 Progress" : "Luna 3: Analiză Progres", desc: isEn ? "Detailed review of biological markers." : "Analiza detaliată a markerilor biologici." },
    { icon: ShieldCheck, title: isEn ? "24/7 Priority Support" : "Suport Prioritar 24/7", desc: isEn ? "Immediate access to your medical team." : "Acces imediat la echipa ta medicală." }
  ];

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-24">
          <div className="reveal">
             <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 text-prime text-[10px] font-bold uppercase tracking-widest mb-6 border border-accent/20">
                <Sparkles size={14} className="text-accent" />
                {isEn ? "Native Support Team" : "Echipă de Suport Nativă"}
             </div>
             <h2 className="text-4xl md:text-6xl font-serif font-bold text-prime mb-8 leading-tight">
                {isEn ? "Meet Your Clinical Coordinator" : "Cunoaște-ți Coordonatorul Clinic"}
             </h2>
             <p className="text-lg text-gray-500 mb-12 leading-relaxed">
                {isEn 
                  ? "Medicine is about people. Our Romanian-speaking team ensures that nothing is lost in translation during your medical journey in Istanbul." 
                  : "Medicina este despre oameni. Echipa noastră vorbitoare de limba română se asigură că nimic nu se pierde în traducere în timpul călătoriei tale."}
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
                   {isEn ? "Care Beyond the Border" : "Îngrijire Dincolo de Granițe"}
                </h3>
                <p className="text-gray-400 mb-12 leading-relaxed">
                   {isEn 
                     ? "Your journey doesn't end when you leave Istanbul. Our remote monitoring system keeps us connected for 12 months." 
                     : "Călătoria ta nu se termină când pleci din Istanbul. Sistemul nostru de monitorizare de la distanță ne menține conectați timp de 12 luni."}
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
                         {isEn ? "Tele-Medicine Active" : "Tele-Medicină Activă"}
                      </span>
                   </div>
                   <a 
                     href="https://wa.me/905324675941" 
                     onClick={() => pushToDataLayer('whatsapp_click', { location: 'human_trust_followup' })}
                     className="text-accent font-bold text-sm hover:text-white transition-colors flex items-center gap-2"
                   >
                      {isEn ? "Ask About Follow-up" : "Întreabă despre Monitorizare"} <Clock size={16} />
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
