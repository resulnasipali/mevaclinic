import React from 'react';
import { ShieldCheck, Check, Star, Car, Hotel, Languages, Activity } from 'lucide-react';
import { useLocation } from 'react-router-dom';

const PremiumPackageSection = () => {
  const location = useLocation();
  const isEn = location.pathname.startsWith('/en');

  return (
    <section id="pachete" className="py-24 bg-gray-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 py-1.5 px-4 rounded-full bg-accent/10 border border-accent/20 text-[#8B6914] text-sm font-bold tracking-widest uppercase mb-4 shadow-sm">
            <ShieldCheck size={18} aria-hidden="true" />
            <span>Premium Care</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-prime mb-6 leading-tight">
             {isEn ? "All-Inclusive Package Built Around You" : "Pachet All-Inclusive Construit în Jurul Tău"}
          </h2>
          <p className="text-lg text-gray-600 font-sans leading-relaxed">
             {isEn ? "Your medical experience in Istanbul should be stress-free. We have prepared a premium package where details make the difference." : "Experiența ta medicală la Istanbul trebuie să fie lipsită de stres. Am pregătit un pachet premium în care detaliile fac diferența."}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center bg-white rounded-3xl p-8 lg:p-12 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100/50 relative">
          
          <div className="absolute top-0 right-10 transform -translate-y-1/2 flex flex-col items-center justify-center bg-gradient-to-br from-accent to-accentHov text-white w-24 h-24 rounded-full shadow-lg shadow-accent/20 border-[3px] border-white z-10 hover:scale-105 transition-transform duration-300">
            <Star className="fill-white mb-1" size={20} />
            <span className="text-[10px] font-bold uppercase tracking-wider text-center leading-tight">Luxury<br/>Concierge</span>
          </div>

          <div className="space-y-10">
            <div className="flex items-start group">
              <div className="flex-shrink-0 w-14 h-14 bg-prime/5 rounded-2xl flex items-center justify-center text-prime border border-prime/10 group-hover:bg-prime group-hover:text-white transition-colors duration-300" aria-hidden="true">
                <Car size={26} strokeWidth={1.5} />
              </div>
              <div className="ml-5 pt-1">
                <h3 className="text-xl font-bold text-prime mb-2">{isEn ? "VIP Airport & Clinic Transfer" : "VIP Transfer Aeroport & Clinică"}</h3>
                <p className="text-gray-600 font-sans leading-relaxed">{isEn ? "Personal driver at your disposal from landing in Istanbul and throughout all medical visits." : "Șofer personal la dispoziția ta de la aterizarea în Istanbul și pe parcursul tuturor vizitelor medicale."}</p>
              </div>
            </div>

            <div className="flex items-start group">
              <div className="flex-shrink-0 w-14 h-14 bg-prime/5 rounded-2xl flex items-center justify-center text-prime border border-prime/10 group-hover:bg-prime group-hover:text-white transition-colors duration-300" aria-hidden="true">
                <Hotel size={26} strokeWidth={1.5} />
              </div>
              <div className="ml-5 pt-1">
                <h3 className="text-xl font-bold text-prime mb-2">{isEn ? "5-Star Hotel Accommodation" : "Cazare la Hotel 5 Stele"}</h3>
                <p className="text-gray-600 font-sans leading-relaxed">{isEn ? "Recovery in luxury conditions. The package fully covers accommodation in one of our prestigious partner hotels." : "Recuperare în condiții de lux. Pachetul acoperă integral cazarea într-unul dintre hotelurile partenere de prestigiu."}</p>
              </div>
            </div>

            <div className="flex items-start group">
              <div className="flex-shrink-0 w-14 h-14 bg-prime/5 rounded-2xl flex items-center justify-center text-prime border border-prime/10 group-hover:bg-prime group-hover:text-white transition-colors duration-300" aria-hidden="true">
                <Languages size={26} strokeWidth={1.5} />
              </div>
              <div className="ml-5 pt-1">
                <h3 className="text-xl font-bold text-prime mb-2">{isEn ? "Native English Translator" : "Traducător (Română - Engleză)"}</h3>
                <p className="text-gray-600 font-sans leading-relaxed">{isEn ? "There will be no language barriers. A dedicated medical assistant will accompany you to translate every detail." : "Nu vor exista bariere lingvistice. Asistentul medical dedicat te va însoți pentru a traduce fiecare detaliu."}</p>
              </div>
            </div>

            <div className="flex items-start group">
              <div className="flex-shrink-0 w-14 h-14 bg-prime/5 rounded-2xl flex items-center justify-center text-prime border border-prime/10 group-hover:bg-prime group-hover:text-white transition-colors duration-300" aria-hidden="true">
                <Activity size={26} strokeWidth={1.5} />
              </div>
              <div className="ml-5 pt-1">
                <h3 className="text-xl font-bold text-prime mb-2">{isEn ? "Pre/Post-Operative Tests" : "Teste Pre/Post-Operatorii"}</h3>
                <p className="text-gray-600 font-sans leading-relaxed">{isEn ? "All analyzes, consultations (cardiological, anesthetic) and necessary tests are 100% covered." : "Toate analizele, consulturile (cardiologic, anestezic) și testele necesare sunt acoperite 100%."}</p>
              </div>
            </div>
          </div>

          <div className="bg-prime rounded-2xl p-8 lg:p-10 text-white relative overflow-hidden shadow-2xl h-full flex flex-col justify-between">
             <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/3 translate-x-1/3 pointer-events-none"></div>
             
             <div>
               <h3 className="text-3xl font-serif font-bold mb-8">{isEn ? "The Premium Treatment" : "Tratamentul Premium"}</h3>
               <ul className="space-y-4.5 mb-8 font-sans">
                 <li className="flex items-start">
                   <Check className="text-accent mr-3 mt-1 flex-shrink-0" size={20} strokeWidth={3} />
                   <span className="font-medium text-white/90">{isEn ? "Guaranteed Surgical Intervention" : "Intervenția Chirurgicală Garantată"}</span>
                 </li>
                 <li className="flex items-start">
                   <Check className="text-accent mr-3 mt-1 flex-shrink-0" size={20} strokeWidth={3} />
                   <span className="font-medium text-white/90">{isEn ? "Team formed by Doctor Professors" : "Echipă formată din Profesori Doctori"}</span>
                 </li>
                 <li className="flex items-start">
                   <Check className="text-accent mr-3 mt-1 flex-shrink-0" size={20} strokeWidth={3} />
                   <span className="font-medium text-white/90">{isEn ? "VIP Hospitalization in Private Clinic (1-3 Days)" : "Spitalizare VIP în Clinică Privată (1-3 Zile)"}</span>
                 </li>
                 <li className="flex items-start">
                   <Check className="text-accent mr-3 mt-1 flex-shrink-0" size={20} strokeWidth={3} />
                   <span className="font-medium text-white/90">{isEn ? "Home Medication Included" : "Medicamentația pentru Acasă Inclusă"}</span>
                 </li>
                 <li className="flex items-start">
                   <Check className="text-accent mr-3 mt-1 flex-shrink-0" size={20} strokeWidth={3} />
                   <span className="font-medium text-white/90">{isEn ? "Dedicated Post-Operative Diet Plan" : "Plan de Dieta Dedicat Post-Operator"}</span>
                 </li>
               </ul>
             </div>
             
             <div className="border-t border-white/20 pt-6 mt-4 text-center bg-white/5 mx-[-2rem] mb-[-2.5rem] px-8 pb-10 hidden sm:block">
                <p className="text-lg italic font-serif text-accent drop-shadow-md">
                   {isEn ? "\"No hidden costs – Everything included for your comfort\"" : "\"Fără costuri ascunse – Totul inclus pentru confortul tău\""}
                </p>
             </div>
             
             <div className="border-t border-white/20 pt-6 mt-4 text-center sm:hidden block">
                <p className="text-lg italic font-serif text-accent drop-shadow-md">
                   {isEn ? "\"No hidden costs – Everything included for your comfort\"" : "\"Fără costuri ascunse – Totul inclus pentru confortul tău\""}
                </p>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default PremiumPackageSection;
