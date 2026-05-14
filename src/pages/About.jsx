import React, { useEffect, useState } from 'react';
import { ShieldCheck, Award, Users, HeartPulse, GraduationCap, Microscope, CheckCircle2, Globe, Building2, BarChart3, Scale, Zap, Star } from 'lucide-react';
import { useLocation } from 'react-router-dom';
import { CertRow } from '../components/ClinicalBadges';
import DynamicSEO from '../components/DynamicSEO';

const CountUp = ({ end, duration = 2000, suffix = "" }) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    let start = 0;
    const increment = end / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [end, duration]);
  return <span>{count.toLocaleString()}{suffix}</span>;
};

const About = () => {
  const location = useLocation();
  const isEn = location.pathname.startsWith('/en');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-white min-h-screen pt-24 pb-0 overflow-hidden font-sans selection:bg-accent selection:text-prime">
      <DynamicSEO 
        title={isEn ? "Engineering Perfection | Meva Clinic Authority" : "Ingineria Perfecțiunii | Autoritatea Meva Clinic"}
        description={isEn ? "Where surgical science meets art. Discover the Meva difference in clinical precision and safety." : "Unde știința chirurgicală întâlnește arta. Descoperă diferența Meva în precizie clinică și siguranță."}
        path={isEn ? "/en/about-us" : "/ro/despre-noi"}
        schemaType="AboutPage"
      />

      {/* 1. VISIONARY SLOGANS (Hero Section) */}
      <section className="relative py-32 md:py-48 bg-[#0b1626] overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,#A689111a,transparent_50%)]"></div>
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
           <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent rounded-full blur-[150px]"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center space-x-2 py-2 px-4 rounded-full bg-white/5 border border-white/10 text-accent text-[10px] font-bold tracking-[0.4em] uppercase mb-10 animate-fade-in">
            <Star size={14} className="fill-accent" />
            <span>{isEn ? "Elite Medical Authority" : "Autoritate Medicală de Elită"}</span>
          </div>
          <h1 className="text-4xl md:text-8xl font-serif font-bold text-white mb-10 leading-[1.1] max-w-6xl mx-auto">
            {isEn ? "Engineering Perfection," : "Ingineria Perfecțiunii,"} <br/>
            <span className="text-accent">{isEn ? "One Patient at a Time" : "Un Pacient pe Rând"}</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed font-light italic">
            {isEn 
              ? "Where surgical science meets art. Meva Clinic is the bridge between clinical data and human transformation." 
              : "Unde știința chirurgicală întâlnește arta. Meva Clinic este puntea dintre datele clinice și transformarea umană."}
          </p>
        </div>
      </section>

      {/* 2. ICONIC VALUE PROPOSITION (3-Column Grid) */}
      <section className="py-24 bg-white relative -mt-20 z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                icon: ShieldCheck, 
                title: isEn ? "Precision Safety" : "Siguranță de Precizie", 
                desc: isEn ? "99.9% Safety Accuracy" : "99.9% Acuratețe Siguranță",
                sub: "JCI Verified Protocols"
              },
              { 
                icon: Globe, 
                title: isEn ? "Global Reach" : "Acoperire Globală", 
                desc: isEn ? "45+ Countries Served" : "Peste 45 de Țări Deservite",
                sub: "Bilingual Clinical Support"
              },
              { 
                icon: Microscope, 
                title: isEn ? "Surgical Science" : "Știință Chirurgicală", 
                desc: isEn ? "Advanced Bio-Integration" : "Integrare Bio-Avansată",
                sub: "Evidence-Based Outcomes"
              }
            ].map((pillar, i) => (
              <div key={i} className="bg-white p-12 rounded-[2.5rem] shadow-[0_20px_60px_rgba(0,0,0,0.06)] border border-gray-50 flex flex-col items-center text-center group hover:-translate-y-3 transition-all duration-700">
                <div className="w-20 h-20 rounded-3xl bg-[#0b1626]/5 flex items-center justify-center text-prime mb-8 group-hover:bg-[#0b1626] group-hover:text-white transition-all duration-500 shadow-inner">
                  <pillar.icon size={40} />
                </div>
                <h2 className="text-2xl font-serif font-bold text-prime mb-2 uppercase tracking-wide">{pillar.title}</h2>
                <p className="text-accent font-black text-sm mb-1 uppercase tracking-widest">{pillar.desc}</p>
                <p className="text-xs text-gray-600 font-bold uppercase tracking-[0.2em]">{pillar.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. THE MEVA DIFFERENCE (Stylized Checklist) */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div className="relative">
               <div className="aspect-square rounded-[3rem] overflow-hidden shadow-2xl relative border-[12px] border-white">
                  <img 
                    src="https://images.unsplash.com/photo-1579154235602-3c2c2aa99017?auto=format&fit=crop&q=80&w=1000" 
                    alt="Precision Technology in Istanbul Medical Tourism"
                    aria-label="Precision Technology in Istanbul Medical Tourism"
                    width="1000"
                    height="1000"
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-prime/10"></div>
               </div>
               <div className="absolute -bottom-10 -left-10 bg-[#0b1626] p-10 rounded-[3rem] shadow-2xl border border-white/10">
                  <Zap size={32} className="text-accent mb-4" />
                  <h2 className="text-white font-serif font-bold text-xl mb-1">{isEn ? "Rapid Recovery" : "Recuperare Rapidă"}</h2>
                  <p className="text-gray-400 text-xs font-bold uppercase tracking-widest">{isEn ? "S7 Bio-Protocols" : "Bio-Protocoale S7"}</p>
               </div>
            </div>

            <div className="space-y-10">
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-prime leading-tight">
                {isEn ? "The Meva Difference: Why Patients Trust Our Board" : "Diferența Meva: De ce Pacienții au Încredere în Consiliul Nostru"}
              </h2>
              <ul className="space-y-6">
                {[
                  isEn ? "Multidisciplinary Medical Board Review" : "Revizuire Multidisciplinară de către Consiliul Medical",
                  isEn ? "24/7 Bucharest-Istanbul Logistics Bridge" : "Pod Logistic 24/7 București-Istanbul",
                  isEn ? "Transparent Post-Op Data & Recovery Tracking" : "Date Post-Op Transparente și Urmărirea Recuperării",
                  isEn ? "Board-Certified Surgeons with 15+ Years Experience" : "Chirurgi Certificați de Consiliu cu 15+ Ani de Experiență",
                  isEn ? "Bespoke Surgical Engineering per Patient Anatomy" : "Inginerie Chirurgicală Personalizată pe Anatomia Pacientului"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-4 group">
                    <div className="w-6 h-6 rounded-full bg-accent flex items-center justify-center shrink-0 mt-1 shadow-lg shadow-accent/20 group-hover:scale-110 transition-transform">
                       <CheckCircle2 size={14} className="text-prime stroke-[3px]" />
                    </div>
                    <span className="text-lg font-bold text-prime leading-tight">
                       {item.split(' ').map((word, j) => 
                         ['Medical', 'Excellence', 'Precision', 'Safety', 'Board', 'JCI', '15+'].includes(word.replace(/[.,]/g, '')) 
                         ? <strong key={j} className="text-accent">{word} </strong> 
                         : word + ' '
                       )}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 4. NUMBERS THAT SPEAK (Counters) */}
      <section className="py-24 bg-[#0b1626] relative overflow-hidden text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
           <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8 text-center">
              <div className="space-y-2">
                 <div className="text-6xl md:text-7xl font-serif font-bold text-accent mb-4">
                    <CountUp end={12500} suffix="+" />
                 </div>
                 <p className="text-xs font-bold uppercase tracking-[0.4em] text-gray-400">{isEn ? "International Patients" : "Pacienți Internaționali"}</p>
                 <p className="text-sm font-sans text-gray-600 italic">{isEn ? "Clinically Validated Data" : "Date Validate Clinic"}</p>
              </div>
              <div className="space-y-2">
                 <div className="text-6xl md:text-7xl font-serif font-bold text-accent mb-4">
                    <CountUp end={45} suffix="+" />
                 </div>
                 <p className="text-xs font-bold uppercase tracking-[0.4em] text-gray-400">{isEn ? "Global Countries" : "Țări Globale"}</p>
                 <p className="text-sm font-sans text-gray-600 italic">{isEn ? "World-Class Reach" : "Acoperire de Clasă Mondială"}</p>
              </div>
              <div className="space-y-2">
                 <div className="text-6xl md:text-7xl font-serif font-bold text-accent mb-4">
                    <CountUp end={15} suffix="+" />
                 </div>
                 <p className="text-xs font-bold uppercase tracking-[0.4em] text-gray-400">{isEn ? "Years of Leadership" : "Ani de Leadership"}</p>
                 <p className="text-sm font-sans text-gray-600 italic">{isEn ? "Clinical Excellence" : "Excelență Clinică"}</p>
              </div>
           </div>
        </div>
      </section>

      {/* 5. REFINED TYPOGRAPHY & CALL TO ACTION */}
      <section className="py-32 bg-white">
        <div className="max-w-5xl mx-auto px-4 text-center">
           <h2 className="text-4xl md:text-7xl font-serif font-bold text-prime mb-12 leading-tight">
              {isEn ? "Experience the Future of" : "Experimentează Viitorul"} <br/>
              <span className="italic text-accent">{isEn ? "Personalized Healthcare" : "Sănătății Personalizate"}</span>
           </h2>
           <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-16 font-sans">
              {isEn 
                ? "Our board is ready to engineer your transformation with absolute medical precision and safety." 
                : "Consiliul nostru este gata să proiecteze transformarea ta cu precizie medicală absolută și siguranță."}
           </p>
           <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
              <button 
                onClick={() => window.location.href = isEn ? '/en/contact' : '/ro/contact'}
                className="group relative bg-prime text-white font-bold py-6 px-16 rounded-[2rem] shadow-2xl hover:bg-[#0f1f38] transition-all overflow-hidden"
                aria-label={isEn ? "Book Board Evaluation" : "Programează Evaluare Consiliu"}
              >
                 <span className="relative z-10 flex items-center gap-4 text-lg">
                    {isEn ? "Book Board Evaluation" : "Programează Evaluare Consiliu"}
                    <CheckCircle2 size={24} className="text-accent" />
                 </span>
                 <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-accent/0 via-white/5 to-accent/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              </button>
           </div>
        </div>
        <div className="mt-32">
           <CertRow isEn={isEn} />
        </div>
      </section>

    </div>
  );
};

export default About;
