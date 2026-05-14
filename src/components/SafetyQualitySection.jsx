import React, { useState, useEffect } from 'react';
import { ShieldCheck, Plus, Minus, PlayCircle, Award, HeartPulse, Stethoscope, ChevronRight } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const faqDataRo = [
  { question: "Ce se întâmplă dacă apare o complicație medicală?", answer: "Siguranța ta este prioritatea absolută. Toate intervențiile noastre au loc în spitale acreditate JCI (Joint Commission International) din Turcia. Pachetele includ o asigurare medicală specializată împotriva complicațiilor." },
  { question: "Cât de sigură este călătoria și șederea în Istanbul?", answer: "Istanbul este un hub internațional de prestigiu pentru turismul medical. Încă de la coborârea din avion, asistentul nostru VIP te va prelua direct de la poartă. Cazarea se face în hoteluri de cinci stele, aflate în zone premium." },
  { question: "Sunt acoperit de o formă de garanție sau asigurare?", answer: "Absolut. Colaborăm exclusiv cu medici care au o rată de succes documentată de peste 99%. Suplimentar, beneficiezi de asistența noastră dedicată și proceduri legale și transparente." }
];

const faqDataEn = [
  { question: "What happens if a medical complication occurs?", answer: "Your safety is our absolute priority. All our surgeries take place in JCI (Joint Commission International) accredited hospitals in Turkey. The packages include specialized medical insurance against complications." },
  { question: "How safe is traveling and staying in Istanbul?", answer: "Istanbul is a prestigious international hub for medical tourism. From the moment you step off the plane, our VIP assistant will pick you up. Accommodation is provided in five-star hotels located in premium areas." },
  { question: "Am I covered by a guarantee or insurance?", answer: "Absolutely. We exclusively collaborate with doctors who have a documented success rate of over 99%. Additionally, you benefit from our dedicated assistance and transparent legal procedures." }
];

const SafetyQualitySection = () => {
  const [activeFaq, setActiveFaq] = useState(0);
  const [counter, setCounter] = useState(0);
  const location = useLocation();
  const isEn = location.pathname.startsWith('/en');
  const faqData = isEn ? faqDataEn : faqDataRo;

  useEffect(() => {
    let start = 0;
    const end = 12500;
    const duration = 2000;
    const incrementTime = duration / (end / 100);
    const timer = setInterval(() => {
      start += 100;
      if (start >= end) {
        setCounter(end);
        clearInterval(timer);
      } else {
        setCounter(start);
      }
    }, incrementTime);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden" id="siguranta">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-prime/5 -translate-y-1/2 translate-x-1/2 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="flex flex-col lg:flex-row items-center justify-between mb-24 gap-12">
          <div className="lg:w-1/2">
            <div className="inline-flex items-center space-x-2 py-1.5 px-4 rounded-full bg-red-50 text-red-800 border border-red-100 text-sm font-bold tracking-widest uppercase mb-6 shadow-sm">
              <ShieldCheck size={18} />
              <span>{isEn ? "JCI Accreditation & Safety" : "Acreditare JCI & Siguranță"}</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-prime mb-6 leading-[1.15]">
               {isEn ? "We Make No Compromises When It Comes To Your Life." : "Nu Facem Compromisuri Când Vine Vorba de Viața Ta."}
            </h2>
            <p className="text-lg text-gray-700 font-sans leading-relaxed">
               {isEn ? "Meva Clinic operates under the strictest international and European safety standards. Impeccable care, experienced surgeons and 21st century technology." : "Meva Clinic activează sub cele mai stricte norme internaționale de siguranță europeană și globală. O asistență impecabilă, chirurgi experimentați și tehnologie secolului 21."}
            </p>
          </div>
          
          <div className="lg:w-5/12 flex w-full">
            <div className="bg-white p-8 md:p-10 rounded-3xl shadow-2xl border border-gray-100 w-full flex items-center gap-8 relative overflow-hidden group hover:-translate-y-1 transition-transform duration-500">
               <div className="absolute top-0 right-0 w-48 h-48 bg-red-500/5 rounded-full blur-3xl -mr-16 -mt-16 group-hover:bg-red-500/10 transition-all duration-500 pointer-events-none"></div>
               <div className="w-20 h-20 bg-gradient-to-br from-red-500 to-red-700 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-red-500/30 flex-shrink-0 relative z-10">
                  <HeartPulse size={40} strokeWidth={1.5} />
               </div>
               <div className="relative z-10">
                 <div className="text-5xl md:text-6xl font-bold font-serif text-prime mb-2">{counter.toLocaleString()}+</div>
                 <div className="text-gray-700 font-bold uppercase tracking-wider text-sm">{isEn ? "International Patients" : "Pacienți Internaționali"}</div>
               </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          <div className="lg:col-span-5">
            <h3 className="text-3xl font-serif font-bold text-prime mb-8">{isEn ? "Frequently Asked Questions" : "Întrebări Frecvente"}</h3>
            <div className="space-y-4">
              {faqData.map((faq, index) => (
                <div key={index} className="bg-white border border-gray-100 rounded-2xl shadow-[0_2px_15px_rgb(0,0,0,0.03)] overflow-hidden transition-all duration-300">
                  <button 
                    onClick={() => setActiveFaq(activeFaq === index ? -1 : index)} 
                    className="w-full px-6 py-6 flex items-center justify-between text-left focus:outline-none group"
                    aria-expanded={activeFaq === index}
                    aria-label={`Toggle FAQ: ${faq.question}`}
                  >
                    <span className="font-bold text-prime text-lg pr-4 group-hover:text-accent transition-colors">{faq.question}</span>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-colors duration-300 ${activeFaq === index ? 'bg-accent text-white' : 'bg-gray-100 text-gray-700 group-hover:bg-gray-200'}`}>
                      {activeFaq === index ? <Minus size={16} /> : <Plus size={16} />}
                    </div>
                  </button>
                  <div className={`px-6 overflow-hidden transition-all duration-500 ease-in-out ${activeFaq === index ? 'max-h-96 pb-6 opacity-100' : 'max-h-0 opacity-0'}`}>
                    <p className="text-gray-700 font-sans leading-relaxed border-t border-gray-100 pt-5">{faq.answer}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-7">
             <div className="flex items-center justify-between mb-8">
               <h3 className="text-3xl font-serif font-bold text-prime">{isEn ? "Meva Medical Board" : "Board-ul Medical Meva"}</h3>
               <Link to={isEn ? "/en/about-us" : "/ro/despre-noi"} className="hidden sm:flex text-sm font-bold text-accent hover:text-prime transition-colors items-center">
                 {isEn ? "View all doctors" : "Vezi toți medicii"} <ChevronRight size={16} className="ml-1" />
               </Link>
             </div>
             
             <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                
                <div className="bg-white rounded-3xl overflow-hidden shadow-[0_4px_25px_rgb(0,0,0,0.06)] border border-gray-100 group flex flex-col h-full">
                   <div className="relative h-64 bg-[#0b1626] overflow-hidden cursor-pointer" role="button" aria-label={isEn ? "Play Video Interview" : "Redă Interviu Video"}>
                      <img src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=800&auto=format&fit=crop" loading="lazy" decoding="async" alt="Bariatric Surgeon Dr. Hasan Erdem" aria-label="Bariatric Surgeon Dr. Hasan Erdem" className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700" />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0b1626]/80 to-transparent"></div>
                      <div className="absolute inset-0 flex items-center justify-center">
                         <PlayCircle size={64} className="text-white/80 group-hover:text-white group-hover:scale-110 transition-all duration-300 drop-shadow-xl" strokeWidth={1} />
                      </div>
                      <div className="absolute bottom-4 left-4 right-4 bg-black/40 backdrop-blur-md text-white text-xs font-bold px-4 py-2 rounded-xl uppercase tracking-wider flex items-center border border-white/20">
                         <PlayCircle size={16} className="mr-2 text-accent" /> {isEn ? "Video Interview Dr. Erdem" : "Interviu Video Dr. Erdem"}
                      </div>
                   </div>
                   
                   <div className="p-6 flex flex-col flex-grow">
                      <div className="flex items-center gap-2 mb-3">
                        <Stethoscope size={16} className="text-accent" />
                        <span className="text-[10px] font-bold text-gray-700 uppercase tracking-widest">{isEn ? "Bariatric Surgeon" : "Chirurg Bariatric"}</span>
                      </div>
                      <h4 className="text-2xl font-serif font-bold text-prime mb-3">Dr. Hasan Erdem</h4>
                      <p className="text-gray-700 font-sans text-sm mb-6 flex-grow leading-relaxed">{isEn ? "Over 15 years of experience in complex Gastric Sleeve and Bypass surgeries. Titular member of IFSO Europe." : "Peste 15 ani de experiență în intervenții complexe de Gastric Sleeve și Bypass. Membru titular IFSO Europe."}</p>
                      <div className="flex items-center text-xs font-bold text-prime pt-4 border-t border-gray-100">
                         <div className="w-8 h-8 rounded-full bg-accent/10 text-accent flex items-center justify-center mr-3"><Award size={16} /></div>
                         {isEn ? "International Board Accreditation" : "Acreditare Board Internațional"}
                      </div>
                   </div>
                </div>

                <div className="bg-white rounded-3xl overflow-hidden shadow-[0_4px_25px_rgb(0,0,0,0.06)] border border-gray-100 group flex flex-col h-full">
                   <div className="relative h-64 bg-[#0b1626] overflow-hidden cursor-pointer" role="button" aria-label={isEn ? "Play Video Interview" : "Redă Interviu Video"}>
                      <img src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=800&auto=format&fit=crop" loading="lazy" decoding="async" alt="Dental Aesthetics Dr. Zeynep Turan" aria-label="Dental Aesthetics Dr. Zeynep Turan" className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700 object-top" />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0b1626]/80 to-transparent"></div>
                      <div className="absolute inset-0 flex items-center justify-center">
                         <PlayCircle size={64} className="text-white/80 group-hover:text-white group-hover:scale-110 transition-all duration-300 drop-shadow-xl" strokeWidth={1} />
                      </div>
                      <div className="absolute bottom-4 left-4 right-4 bg-black/40 backdrop-blur-md text-white text-xs font-bold px-4 py-2 rounded-xl uppercase tracking-wider flex items-center border border-white/20">
                         <PlayCircle size={16} className="mr-2 text-accent" /> {isEn ? "Dr. Turan's Expertise" : "Expertiza Dr. Turan"}
                      </div>
                   </div>
                   
                   <div className="p-6 flex flex-col flex-grow">
                      <div className="flex items-center gap-2 mb-3">
                        <Stethoscope size={16} className="text-accent" />
                        <span className="text-[10px] font-bold text-gray-700 uppercase tracking-widest">{isEn ? "Dental Aesthetics" : "Estetică Dentară"}</span>
                      </div>
                      <h4 className="text-2xl font-serif font-bold text-prime mb-3">Dr. Zeynep Turan</h4>
                      <p className="text-gray-700 font-sans text-sm mb-6 flex-grow leading-relaxed">{isEn ? "Hollywood Smile, implantology and 3D reconstruction aesthetics expert. 8000+ implante successfully completed." : "Expertă în estetică Hollywood Smile, implantologie și reconstrucție 3D. 8000+ implante finalizate cu succes."}</p>
                      <div className="flex items-center text-xs font-bold text-prime pt-4 border-t border-gray-100">
                         <div className="w-8 h-8 rounded-full bg-accent/10 text-accent flex items-center justify-center mr-3"><Award size={16} /></div>
                         {isEn ? "EACMFS European Member" : "Membru European EACMFS"}
                      </div>
                   </div>
                </div>

             </div>
             
             <Link to={isEn ? "/en/about-us" : "/ro/despre-noi"} className="sm:hidden mt-6 flex justify-center text-sm font-bold text-accent border border-accent/20 rounded-xl py-3 hover:bg-accent hover:text-white transition-colors items-center">
                {isEn ? "View all doctors" : "Vezi toți medicii"} <ChevronRight size={16} className="ml-2" />
             </Link>
          </div>

        </div>
      </div>
    </section>
  );
};

export default SafetyQualitySection;
