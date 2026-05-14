import React, { useState, useRef } from 'react';
import { ChevronLeft, ChevronRight, BadgeCheck, Quote, ArrowRight } from 'lucide-react';
import { useLocation } from 'react-router-dom';

const testimonialsRo = [
  { id: 1, name: "Elena M.", treatment: "Gastric Sleeve", loss: "-45 kg", testimonial: "Echipa Meva Clinic mi-a schimbat viața. Nu doar profesionalismul uriaș al medicilor, ci grija întregului personal a fost dincolo de așteptările mele. Acum trăiesc o nouă viață, plină de energie!", time: "Acum 11 Luni" },
  { id: 2, name: "Mihai D.", treatment: "Gastric Bypass", loss: "-60 kg", testimonial: "De la preluarea din aeroport până la externare m-am simțit ca un VIP. Fără dureri, fără complicații. Recomand cu cea mai mare căldură tuturor celor care doresc o schimbare definitivă.", time: "Acum 1 An și 2 Luni" },
  { id: 3, name: "Andreea S.", treatment: "Gastric Sleeve", loss: "-35 kg", testimonial: "Mi-a fost foarte teamă inițial, însă domnul doctor mi-a explicat totul pas cu pas. Spitalizarea a fost excepțională, iar suportul constant al nutriționistului a făcut diferența.", time: "Acum 8 Luni" }
];

const testimonialsEn = [
  { id: 1, name: "Elena M.", treatment: "Gastric Sleeve", loss: "-45 kg", testimonial: "The Meva Clinic team changed my life. Not only the huge professionalism of the doctors, but the care of the entire staff was beyond my expectations. I now live a completely new life!", time: "11 Months Ago" },
  { id: 2, name: "Michael D.", treatment: "Gastric Bypass", loss: "-60 kg", testimonial: "From airport pickup to discharge I felt like a VIP. No pain, no complications. I warmly recommend them to everyone who wants a definitive transformation.", time: "1 Year and 2 Months Ago" },
  { id: 3, name: "Amanda S.", treatment: "Gastric Sleeve", loss: "-35 kg", testimonial: "I was very scared initially, but the doctor explained everything step by step. The hospitalization was exceptional, and the constant support made all the difference.", time: "8 Months Ago" }
];

const PatientJourneyCarousel = () => {
  const scrollRef = useRef(null);
  const location = useLocation();
  const isEn = location.pathname.startsWith('/en');
  const testimonials = isEn ? testimonialsEn : testimonialsRo;

  const scrollLeft = () => scrollRef.current && scrollRef.current.scrollBy({ left: -320, behavior: 'smooth' });
  const scrollRight = () => scrollRef.current && scrollRef.current.scrollBy({ left: 320, behavior: 'smooth' });

  return (
    <section className="py-24 bg-white overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div className="max-w-2xl">
             <div className="inline-flex items-center space-x-2 py-1.5 px-4 rounded-full bg-prime/5 border border-prime/10 text-prime text-sm font-bold tracking-widest uppercase mb-4 shadow-sm">
                <Quote size={16} className="text-accent" fill="currentColor" />
                <span>{isEn ? "Success Stories" : "Povești de Succes"}</span>
             </div>
             <h2 className="text-4xl md:text-5xl font-serif font-bold text-prime mb-4">{isEn ? "Real Transformations" : "Transformări Reale"}</h2>
             <p className="text-lg text-gray-500 font-sans">
               {isEn ? "Our patients are our best business card. Discover their experiences and the incredible results they have achieved." : "Pacienții noștri sunt cea mai bună carte de vizită. Descoperă experiențele lor și rezultatele incredibile pe care le-au obținut."}
             </p>
          </div>
          
          <div className="hidden md:flex space-x-3 mt-6 md:mt-0">
            <button onClick={scrollLeft} className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center text-prime hover:bg-prime hover:text-white hover:border-prime transition-colors shadow-sm focus:outline-none"><ChevronLeft size={24} /></button>
            <button onClick={scrollRight} className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center text-prime hover:bg-prime hover:text-white hover:border-prime transition-colors shadow-sm focus:outline-none"><ChevronRight size={24} /></button>
          </div>
        </div>

      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
         <div ref={scrollRef} className="flex overflow-x-auto space-x-6 pb-12 pt-4 snap-x snap-mandatory scrollbar-hide -mx-4 px-4 sm:mx-0 sm:px-0" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
           <style dangerouslySetInnerHTML={{__html: `.scrollbar-hide::-webkit-scrollbar { display: none; }`}} />

           {testimonials.map((patient) => (
              <div key={patient.id} className="min-w-[320px] md:min-w-[420px] lg:min-w-[480px] snap-center flex-shrink-0 bg-white rounded-3xl shadow-[0_4px_25px_rgb(0,0,0,0.06)] border border-gray-100 flex flex-col h-full transform transition-transform duration-300 hover:-translate-y-1">
                 
                 <div className="flex w-full h-48 md:h-56 overflow-hidden rounded-t-3xl border-b border-gray-100 relative">
                    <div className="w-1/2 bg-gray-100 flex items-center justify-center relative">
                       <span className="absolute bottom-3 left-3 bg-white/80 backdrop-blur-sm px-3 py-1 rounded-md text-xs font-bold text-gray-600 shadow-sm uppercase tracking-wider">{isEn ? "Before" : "Înainte"}</span>
                       <div className="w-full h-full bg-prime/[0.03]"></div>
                    </div>
                    <div className="w-1/2 bg-gray-50 flex items-center justify-center relative border-l border-white">
                       <span className="absolute bottom-3 right-3 bg-prime text-white backdrop-blur-sm px-3 py-1 rounded-md text-xs font-bold shadow-sm uppercase tracking-wider">{isEn ? "After" : "După"} ({patient.loss})</span>
                       <div className="w-full h-full bg-accent/[0.05]"></div>
                    </div>
                    
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full flex items-center shadow-md">
                       <BadgeCheck size={16} className="text-green-500 mr-1.5" />
                       <span className="text-xs font-bold text-gray-800 uppercase tracking-widest">{isEn ? "Verified" : "Verificat"}</span>
                    </div>
                 </div>

                 <div className="p-6 md:p-8 flex flex-col flex-grow">
                    <div className="flex items-center justify-between mb-4">
                       <h3 className="text-xl font-bold font-serif text-prime">{patient.name}</h3>
                       <span className="inline-block py-1 px-3 rounded text-xs font-bold bg-accent/10 text-accentHov uppercase tracking-wider">
                          {patient.treatment}
                       </span>
                    </div>
                    
                    <div className="flex-grow">
                       <Quote className="text-gray-200 w-8 h-8 mb-2 rotate-180 drop-shadow-sm" />
                       <p className="text-gray-600 font-sans italic relative z-10 leading-relaxed text-sm md:text-base">
                          "{patient.testimonial}"
                       </p>
                    </div>

                    <div className="mt-6 pt-4 border-t border-gray-100 flex items-center justify-between">
                       <span className="text-xs font-semibold text-gray-400 capitalize">{patient.time}</span>
                       <button className="text-prime text-sm font-bold flex items-center hover:text-accent transition-colors group">
                         {isEn ? "View Case" : "Vezi Cazul"} <ArrowRight size={16} className="ml-1 transition-transform group-hover:translate-x-1" />
                       </button>
                    </div>
                 </div>
              </div>
           ))}

         </div>
      </div>
    </section>
  );
};

export default PatientJourneyCarousel;
