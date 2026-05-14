import React, { useState, useEffect, useRef } from 'react';
import { Award, Users, ShieldAlert, BarChart3, Globe } from 'lucide-react';

const CountUp = ({ end, duration = 2000, suffix = '' }) => {
  const [count, setCount] = useState(0);
  const countRef = useRef(null);

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

const StatsSection = ({ isEn = false }) => {
  const stats = [
    { label: isEn ? "Success Rate" : "Rată de Succes", value: 98, suffix: '%', icon: Award },
    { label: isEn ? "International Patients" : "Pacienți Internaționali", value: 12500, suffix: '+', icon: Users },
    { label: isEn ? "Countries Served" : "Țări Deservite", value: 45, suffix: '', icon: Globe },
    { label: isEn ? "Safety Accuracy" : "Precizie Siguranță", value: 99, suffix: '.9%', icon: ShieldAlert }
  ];

  return (
    <section className="py-24 bg-[#0b1626] text-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(212,175,55,0.05),transparent)] pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16 reveal">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent text-[10px] font-bold uppercase tracking-widest mb-4">
             <BarChart3 size={14} />
             {isEn ? "2025-2026 Clinical Data" : "Date Clinice 2025-2026"}
          </div>
          <h2 className="text-4xl md:text-6xl font-serif font-bold mb-6">
             {isEn ? "Authority in Numbers" : "Autoritate în Numere"}
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
             {isEn 
               ? "Validated clinical outcomes and international trust metrics reflecting our commitment to surgical excellence." 
               : "Rezultate clinice validate și metrici de încredere internațională care reflectă angajamentul nostru față de excelența chirurgicală."}
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-12">
          {stats.map((stat, i) => (
            <div key={i} className="flex flex-col items-center text-center reveal" style={{ transitionDelay: `${i * 100}ms` }}>
              <div className="w-12 h-12 md:w-16 md:h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-accent mb-4 md:mb-6 shadow-2xl">
                 <stat.icon size={24} className="md:w-8 md:h-8" />
              </div>
              <div className="text-2xl md:text-5xl font-serif font-bold mb-1 md:mb-2">
                 <CountUp end={stat.value} suffix={stat.suffix} />
              </div>
              <p className="text-gray-500 font-bold uppercase tracking-widest text-[9px] md:text-xs">
                 {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
