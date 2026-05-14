import React, { useEffect } from 'react';
import { Plane, Hotel, Stethoscope, Activity, Map, ShieldCheck } from 'lucide-react';
import DynamicSEO from '../components/DynamicSEO';
import SmartConcierge from '../components/SmartConcierge';

const journeySteps = [
  {
    id: 1,
    icon: Plane,
    title: "Sosire în Istanbul & VIP Pickup",
    description: "Zborul tău de la București (Otopeni) la Istanbul decurge perfect. La sosire, un șofer privat te așteaptă la terminal pentru a asigura un transfer premium, fără stres, într-un van Mercedes VIP."
  },
  {
    id: 2,
    icon: Hotel,
    title: "Cazare la Hotel 5 Stele",
    description: "Te cazezi într-un hotel partener de elită, selectat pentru standardele sale clienți VIP. Camerele sunt liniștite, confortabile și aflate la doar câteva minute de clinica noastră."
  },
  {
    id: 3,
    icon: Stethoscope,
    title: "Consultul la Meva Clinic",
    description: "A doua zi ești preluat și dus direct la clinică. Împreună cu traducătorul tău personal (Română - Engleză) finalizezi consultul medical detaliat și analizele de sânge."
  },
  {
    id: 4,
    icon: Activity,
    title: "Intervenția și Monitorizarea",
    description: "Intervenția chirurgicală se desfășoară într-o sală hibridă premium. După trezire, te recuperezi într-o rezervă VIP dotată complet, fiind monitorizat non-stop de echipa medicală."
  },
  {
    id: 5,
    icon: Map,
    title: "Relaxare & Întoarcerea Acasă",
    description: "Ultimele zile sunt dedicate odihnei. Te bucuri de peisajele Istanbulului fără să te obosești. Medicul finalizează ultimul control, iar șoferul te aduce în siguranță la aeroport."
  }
];

const ConciergePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const isEn = window.location.pathname.startsWith('/en');

  return (
    <div className="bg-white min-h-screen pt-24 pb-0">
      <DynamicSEO 
        title={isEn ? "Concierge & Travel - Meva Clinic VIP Experience" : "Concierge & Travel - Experiența VIP Meva Clinic"}
        description={isEn ? "Discover your medical journey from Romania to Istanbul. VIP transfer, 24/7 assistance, and 5-star accommodation." : "Descoperă traseul tău medical de la București la Istanbul. Transfer VIP, asistență 24/7, translator român și cazare 5 stele."}
        path={isEn ? "/en/concierge" : "/ro/concierge"}
      />

      {/* Hero Parallax Header */}
      <div className="relative h-[65vh] flex items-center justify-center bg-[#0b1626] overflow-hidden">
        <div className="absolute inset-0 bg-fixed bg-center bg-cover opacity-30 transform scale-105" style={{ backgroundImage: "radial-gradient(ellipse at top right, #d4af37 0%, transparent 60%), linear-gradient(to bottom right, #0f2139, #050a12)" }}></div>
        <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent"></div>
        
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4 mt-10">
          <div className="inline-flex items-center space-x-2 py-2 px-6 rounded-full bg-white/5 backdrop-blur-xl border border-white/10 text-white text-xs font-bold tracking-[0.2em] uppercase mb-8 shadow-2xl">
            <ShieldCheck size={18} className="text-accent" />
            <span>Luxury Concierge</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-6 drop-shadow-2xl">
             {isEn ? "Your Medical Journey" : "Călătoria Ta Medicală"}
          </h1>
          <p className="text-xl md:text-2xl font-sans text-gray-300 font-light drop-shadow-md leading-relaxed">
             {isEn 
               ? "From the moment you leave Romania until your return, we redefine all-inclusive health packages." 
               : "Din momentul în care tranzitezi România până la reîntoarcere, redefinim standardele pachetelor de sănătate all-inclusive."}
          </p>
        </div>
      </div>

      {/* Smart Concierge Interactive Module */}
      <section className="py-24 bg-gray-50">
         <div className="max-w-4xl mx-auto px-6">
            <div className="text-center mb-16">
               <h2 className="text-4xl font-serif font-bold text-prime mb-4">
                  {isEn ? "Customize Your Itinerary" : "Personalizează-ți Itinerariul"}
               </h2>
               <p className="text-gray-500 font-medium">
                  {isEn ? "Select your treatment and specialist to see your clinical protocol." : "Selectează tratamentul și specialistul pentru a vedea protocolul tău clinic."}
               </p>
            </div>
            <SmartConcierge isEn={isEn} />
         </div>
      </section>

      {/* Interactive Timeline */}
      <section className="py-24 bg-white relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-24">
             <h2 className="text-4xl md:text-5xl font-serif font-bold text-prime mb-5">
                {isEn ? "VIP Patient Journey" : "Traseul Pacientului VIP"}
             </h2>
             <p className="text-gray-500 font-sans max-w-3xl mx-auto text-lg leading-relaxed">
                {isEn ? "A clear and transparent guide to the Meva Clinic experience for Romanian patients." : "Un ghid clar și transparent al experienței Meva Clinic, creat special pentru pacienții noștri care pleacă de pe aeroporturile din România."}
             </p>
          </div>

          <div className="relative pt-6">
            <div className="absolute left-10 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-accent/80 via-prime/30 to-transparent transform md:-translate-x-1/2 rounded-full"></div>
            <div className="space-y-16 lg:space-y-24">
              {journeySteps.map((step, index) => (
                <div key={step.id} className={`flex flex-col md:flex-row items-center justify-between w-full relative group ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                  <div className="absolute left-10 md:left-1/2 transform -translate-x-1/2 w-20 h-20 rounded-full bg-white border-[6px] border-white shadow-2xl flex items-center justify-center z-10 transition-transform duration-500 group-hover:scale-110">
                     <div className="w-14 h-14 bg-gradient-to-br from-prime to-[#112440] rounded-full flex items-center justify-center text-accent shadow-inner">
                       <step.icon size={28} strokeWidth={1.5} />
                     </div>
                  </div>
                  <div className="hidden md:block w-5/12"></div>
                  <div className="w-full md:w-5/12 pl-24 md:pl-0 z-20">
                    <div className="bg-white p-10 rounded-3xl shadow-[0_8px_40px_rgb(0,0,0,0.06)] border border-gray-50 hover:shadow-[0_20px_50px_rgb(0,0,0,0.1)] transition-all duration-500 relative overflow-hidden">
                      <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-prime/5 to-transparent rounded-full blur-3xl -mr-16 -mt-16 group-hover:bg-accent/10 transition-colors duration-700 pointer-events-none"></div>
                      <span className="text-7xl font-bold font-serif text-gray-50 absolute -bottom-4 right-2 pointer-events-none group-hover:text-prime/5 transition-colors duration-500 select-none">0{index + 1}</span>
                      <h3 className="text-2xl font-bold font-serif text-prime mb-4 relative z-10 leading-tight">{step.title}</h3>
                      <p className="text-gray-600 font-sans leading-relaxed relative z-10">{step.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Luxury Partners */}
      <section className="relative py-32 bg-black overflow-hidden flex flex-col justify-center border-t-8 border-accent">
        <div className="absolute inset-0 bg-fixed bg-cover bg-center opacity-30 grayscale blur-[1px]" style={{ backgroundImage: "linear-gradient(to top, rgba(0,0,0,0.8), transparent), radial-gradient(circle at center, #1a365d 0%, #000 100%)" }}></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center w-full">
           <div className="inline-flex items-center space-x-2 py-1 px-4 rounded-full border border-white/20 text-white/80 text-xs font-bold tracking-widest uppercase mb-6">
              <span>{isEn ? "Accredited Standard" : "Standard Acreditat"}</span>
           </div>
           <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-20 drop-shadow-2xl">
              {isEn ? "Our Luxury Partners" : "Partenerii Noștri de Lux"}
           </h2>
           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 items-center justify-center opacity-90 hover:opacity-100 transition-opacity duration-500 w-full">
              <div className="h-28 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl flex flex-col items-center justify-center hover:bg-white/10 transition-colors cursor-pointer hover:-translate-y-1 transform duration-300">
                <span className="font-serif font-bold text-white text-xl tracking-[0.2em] uppercase">Hilton</span>
                <span className="text-[10px] text-accent tracking-widest uppercase mt-1">Bosphorus</span>
              </div>
              <div className="h-28 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl flex flex-col items-center justify-center hover:bg-white/10 transition-colors cursor-pointer hover:-translate-y-1 transform duration-300">
                <span className="font-serif font-bold text-white text-xl tracking-[0.2em] uppercase">Acıbadem</span>
                <span className="text-[10px] text-accent tracking-widest uppercase mt-1">Healthcare Group</span>
              </div>
              <div className="h-28 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl flex flex-col items-center justify-center hover:bg-white/10 transition-colors cursor-pointer hover:-translate-y-1 transform duration-300">
                <span className="font-serif font-bold text-white text-xl tracking-[0.2em] uppercase">Mercedes</span>
                <span className="text-[10px] text-accent tracking-widest uppercase mt-1">VIP Transfers</span>
              </div>
              <div className="h-28 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl flex flex-col items-center justify-center hover:bg-white/10 transition-colors cursor-pointer hover:-translate-y-1 transform duration-300">
                <span className="font-serif font-bold text-white text-xl tracking-[0.2em] uppercase">Turkish</span>
                <span className="text-[10px] text-accent tracking-widest uppercase mt-1">Airlines</span>
              </div>
           </div>
           <div className="mt-20 text-gray-400 font-sans text-sm tracking-wide max-w-2xl mx-auto">
              {isEn 
                ? "We meticulously select each provider for performance, confidentiality, and prestige." 
                : "Alegem meticulos fiecare furnizor pentru performanță, confidențialitate și prestigiu."}
           </div>
        </div>
      </section>
    </div>
  );
};

export default ConciergePage;
