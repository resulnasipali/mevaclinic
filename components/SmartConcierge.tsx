// @ts-nocheck
'use client';

  import React, { useState, useMemo, useEffect } from 'react';
import { treatmentRules } from '../data/treatmentRules';
import { User, Hospital, Calendar, Clock, Shield, ChevronRight, CheckCircle2, AlertCircle, Info, Download, Loader2 } from 'lucide-react';
import MedicalDossier from './MedicalDossier';
import { pushToDataLayer } from '../utils/AnalyticsUtils';
import { tUI } from '@/utils/uiTranslations';

const SmartConcierge = ({ lang = 'en' }: { lang?: string }) => {
  const isEn = lang === 'en';
  const [step, setStep] = useState(1);
  const [isGenerating, setIsGenerating] = useState(false);
  const [generationProgress, setGenerationProgress] = useState(0);
  const [isUnlocked, setIsUnlocked] = useState(false);
  
const [selection, setSelection] = useState({
    treatment: '',
    doctor: null,
    hospital: null
  });

  const treatments = [
    { id: 'hair_transplant', label: tUI("Hair Transplant", lang) },
    { id: 'plastic_surgery', label: tUI("Plastic Surgery", lang) },
    { id: 'oncology', label: tUI("Oncology", lang) }
  ];

  const filteredDoctors = useMemo(() => {
    if (!selection.treatment) return [];
    return treatmentRules.doctors.filter(d => d.protocols[selection.treatment]);
  }, [selection.treatment]);

  const itinerary = useMemo(() => {
    if (!selection.doctor || !selection.hospital) return null;
    const protocol = selection.doctor.protocols[selection.treatment];
    return {
      doctorName: selection.doctor.name,
      hospitalName: selection.hospital.name,
      transferTime: selection.hospital.distanceIST,
      specifics: protocol
    };
  }, [selection.doctor, selection.hospital, selection.treatment]);

  const handleGenerateReport = () => {
    setIsGenerating(true);
    let prog = 0;
    const interval = setInterval(() => {
      prog += 5;
      setGenerationProgress(prog);
      if (prog >= 100) {
        clearInterval(interval);
        setTimeout(() => {
          setIsGenerating(false);
          setStep(5); // Show Dossier
        }, 500);
      }
    }, 100);
  };

  const handleUnlock = () => {
     const phone = prompt(tUI("Enter your WhatsApp number to unlock & download the official report:", lang));
     if (phone && phone.length > 5) {
        setIsUnlocked(true);
        import('../utils/pixel').then(({ PxTrack }) => {
          PxTrack('Lead', { type: 'Dossier_Unlock', phone, ...selection });
          pushToDataLayer('generate_lead', { form_location: 'smart_concierge' });
          pushToDataLayer('form_submission_success', { form_location: 'smart_concierge' });
          pushToDataLayer('whatsapp_click', { location: 'smart_concierge_unlock' });
          alert(tUI("Full PDF & Exact Pricing Unlocked! A specialist will contact you on WhatsApp.", lang));
          window.open(`https://wa.me/905324675941?text=Bună ziua, am deblocat raportul meu clinic pentru ${selection.treatment}. Aș dori să discut prețul exact și programarea.`, '_blank');
        });
     }
  };

  return (
    <div className="bg-white rounded-[3rem] shadow-2xl overflow-hidden border border-gray-100 reveal">
      <div className="bg-prime p-10 text-white relative">
        <div className="absolute top-0 right-0 w-32 h-32 bg-accent/20 rounded-full blur-3xl -mr-16 -mt-16"></div>
        <h3 className="text-3xl font-serif font-bold mb-2">SmartConcierge™</h3>
        <p className="text-gray-400 text-sm">{tUI("AI-Driven Clinical Itinerary Generator", lang)}</p>
      </div>

      <div className="p-10">
        {step < 5 && (
          <div className="flex justify-between mb-12 relative">
            <div className="absolute top-1/2 left-0 w-full h-[1px] bg-gray-100 -z-10"></div>
            {[1, 2, 3, 4].map(i => (
              <div key={i} className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-xs transition-all ${step >= i ? 'bg-accent text-prime shadow-lg' : 'bg-white border border-gray-100 text-gray-300'}`}>
                {i}
              </div>
            ))}
          </div>
        )}

        {isGenerating ? (
          <div className="py-20 text-center animate-fade-up">
             <Loader2 className="w-16 h-16 text-accent animate-spin mx-auto mb-8" />
             <h4 className="text-2xl font-serif font-bold text-prime mb-4">
                {tUI("Generating Your Clinical Blueprint...", lang)}
             </h4>
             <div className="max-w-xs mx-auto h-2 bg-gray-100 rounded-full overflow-hidden">
                <div className="h-full bg-accent transition-all duration-300" style={{ width: `${generationProgress}%` }}></div>
             </div>
             <p className="mt-4 text-xs text-gray-400 font-bold uppercase tracking-widest">{generationProgress}% {tUI("Completed", lang)}</p>
          </div>
        ) : (
          <>
            {step === 1 && (
              <div className="animate-fade-up">
                <h4 className="text-xl font-bold text-prime mb-6">{tUI("Select Your Clinical Interest", lang)}</h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {treatments.map(t => (
                    <button 
                      key={t.id}
                      onClick={() => {
                        setSelection({...selection, treatment: t.id});
                        setStep(2);
                      }}
                      className="p-6 rounded-2xl border-2 border-gray-50 hover:border-accent hover:bg-accent/5 transition-all text-left group"
                    >
                      <span className="block font-bold text-prime group-hover:text-accent">{t.label}</span>
                      <span className="text-[10px] text-gray-400 uppercase tracking-widest">{tUI("View Specialists", lang)}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="animate-fade-up">
                <h4 className="text-xl font-bold text-prime mb-6">{tUI("Choose Your Specialist", lang)}</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {filteredDoctors.map(d => (
                    <button 
                      key={d.id} 
                      onClick={() => {
                        setSelection({...selection, doctor: d});
                        setStep(3);
                      }}
                      className="p-8 rounded-3xl border-2 border-gray-50 hover:border-accent transition-all text-left relative overflow-hidden group"
                    >
                       <div className="flex items-center gap-4 mb-4">
                          <div className="w-12 h-12 rounded-xl bg-gray-100 flex items-center justify-center group-hover:bg-accent transition-colors">
                             <User size={24} />
                          </div>
                          <div>
                             <h5 className="font-bold text-prime">{d.name}</h5>
                             <p className="text-xs text-gray-500">{d.specialty}</p>
                          </div>
                       </div>
                       <div className="flex gap-4">
                          <div className="bg-green-50 px-3 py-1 rounded-lg text-green-700 text-[10px] font-bold">Success: {d.successRate}</div>
                          <div className="bg-blue-50 px-3 py-1 rounded-lg text-blue-700 text-[10px] font-bold">Exp: {d.experience}</div>
                       </div>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="animate-fade-up">
                <h4 className="text-xl font-bold text-prime mb-6">{tUI("Select Preferred Infrastructure", lang)}</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {treatmentRules.hospitals.map(h => (
                    <button 
                      key={h.id}
                      onClick={() => {
                        setSelection({...selection, hospital: h});
                        setStep(4);
                      }}
                      className="p-8 rounded-3xl border-2 border-gray-50 hover:border-accent transition-all text-left group"
                    >
                       <div className="w-12 h-12 rounded-xl bg-gray-100 flex items-center justify-center mb-4 group-hover:bg-accent transition-colors">
                          <Hospital size={24} />
                       </div>
                       <h5 className="font-bold text-prime mb-2">{h.name}</h5>
                       <p className="text-xs text-gray-500 mb-4">{tUI("Airport Transfer:", lang)} {h.distanceIST}</p>
                       <div className="flex flex-wrap gap-2">
                          {h.amenities.map(a => <span key={a} className="text-[9px] bg-gray-50 px-2 py-1 rounded-md text-gray-400 font-bold uppercase">{a}</span>)}
                       </div>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {step === 4 && itinerary && (
              <div className="animate-fade-up space-y-8">
                <div className="bg-gray-50 p-8 rounded-[2rem] border border-gray-100">
                   <h4 className="text-xl font-bold text-prime mb-6 flex items-center gap-3">
                      <CheckCircle2 className="text-green-500" />
                      {tUI("Your Personalized Itinerary", lang)}
                   </h4>
                   
                   <div className="space-y-6">
                      <div className="flex items-start gap-4">
                         <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-accent shadow-sm">
                            <Clock size={20} />
                         </div>
                         <div>
                            <p className="text-xs text-gray-400 font-bold uppercase tracking-widest mb-1">{tUI("Logistics Impact", lang)}</p>
                            <p className="text-prime font-medium">
                               {tUI(`Hospital ${itinerary.hospitalName} is ${itinerary.transferTime} from IST Airport.`, lang)}
                            </p>
                         </div>
                      </div>

                      <div className="flex items-start gap-4 p-6 bg-white rounded-2xl border border-gray-100 relative group">
                         <div className="w-10 h-10 rounded-xl bg-prime text-white flex items-center justify-center shrink-0">
                            <Shield size={20} />
                         </div>
                         <div>
                            <p className="text-xs text-gray-400 font-bold uppercase tracking-widest mb-1">
                               {tUI("Clinical Review Pathway", lang)}: {itinerary.doctorName}
                            </p>
                            <ul className="space-y-2 text-prime font-medium">
                               {Object.entries(itinerary.specifics).filter(([key]) => key !== 'reason').map(([key, val]) => (
                                 <li key={key} className="flex items-center gap-2">
                                    <ChevronRight size={14} className="text-accent" />
                                    <span className="capitalize">{key.replace(/([A-Z])/g, ' $1')}:</span> {val}
                                 </li>
                               ))}
                            </ul>
                         </div>
                         <div className="absolute top-6 right-6 group">
                            <div className="cursor-help text-accent hover:text-prime transition-colors relative">
                               <AlertCircle size={20} />
                               <div className="absolute bottom-full right-0 mb-4 w-64 p-4 bg-prime text-white text-[10px] rounded-xl opacity-0 group-hover:opacity-100 transition-all pointer-events-none shadow-2xl z-50">
                                  <p className="leading-relaxed font-medium">
                                     <Info size={14} className="inline mr-2 text-accent" />
                                     {itinerary.specifics.reason}
                                  </p>
                               </div>
                            </div>
                         </div>
                      </div>
                   </div>
                </div>

                <button 
                  onClick={handleGenerateReport}
                  className="w-full bg-prime text-white font-bold py-5 rounded-2xl shadow-xl flex items-center justify-center gap-3 hover:bg-accent hover:text-prime transition-all"
                >
                   {tUI("Generate Clinical Blueprint", lang)} <Download size={20} />
                </button>
              </div>
            )}

            {step === 5 && (
              <div className="animate-fade-up">
                 <MedicalDossier 
                    data={{
                      treatment: treatments.find(t => t.id === selection.treatment)?.label,
                      doctorName: selection.doctor?.name,
                      hospitalName: selection.hospital?.name,
                      technology: selection.treatment === 'oncology' ? 'CyberKnife S7' : 'Sapphire FUE / Da Vinci'
                    }}
                    lang={lang}
                    isUnlocked={isUnlocked}
                    onUnlock={handleUnlock}
                 />
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default SmartConcierge;
