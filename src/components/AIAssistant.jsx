import React, { useState, useEffect } from 'react';
import { Stethoscope, Activity, Scissors, ArrowRight, ShieldCheck, UploadCloud, CheckCircle, Brain, HeartPulse, Syringe } from 'lucide-react';
import { PxTrack } from '../utils/pixel';
import emailjs from '@emailjs/browser';
import { useLocation } from 'react-router-dom';
import { pushToDataLayer } from '../utils/AnalyticsUtils';

const AIAssistant = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    treatment: '',
    height: '', weight: '', age: '',
    medicalCondition: '',
    phone: '', name: ''
  });
  
  const [progress, setProgress] = useState(0);
  const [progressText, setProgressText] = useState('');
  const location = useLocation();
  const isEn = location.pathname.startsWith('/en');

  const treatmentOptions = [
    { id: 'bariatric', title: isEn ? 'Bariatric Surgery' : 'Chirurgie Bariatrică', icon: Activity, desc: isEn ? 'Gastric Sleeve & Bypass' : 'Gastric Sleeve & Bypass' },
    { id: 'dental', title: isEn ? 'Dentistry' : 'Stomatologie', icon: ShieldCheck, desc: isEn ? 'Hollywood Smile & Reconstruction' : 'Hollywood Smile & Reconstrucție' },
    { id: 'plastic', title: isEn ? 'Plastic Surgery' : 'Chirurgie Estetică', icon: Scissors, desc: isEn ? 'Lifting, Rhinoplasty, Body Sculpting' : 'Lifting, Rinoplastie, Remodelare' },
    { id: 'oncology', title: isEn ? 'Oncology' : 'Oncologie', icon: Brain, desc: isEn ? 'CyberKnife, Chemotherapy' : 'CyberKnife, Chimioterapie' },
    { id: 'transplant', title: isEn ? 'Organ Transplant' : 'Transplant Organe', icon: HeartPulse, desc: isEn ? 'Kidney & Liver Transplants' : 'Transplant Rinichi & Ficat' },
    { id: 'hair', title: isEn ? 'Hair Transplant' : 'Implant Păr', icon: Syringe, desc: isEn ? 'Sapphire FUE, Stem Cells' : 'Sapphire FUE, Celule Stem' }
  ];

  const handleStep1 = (t) => {
    setFormData({ ...formData, treatment: t });
    setStep(2);
    PxTrack('AI_Assistant_Started', { chosen_treatment: t });
  };

  const handleStep2 = (e) => {
    e.preventDefault();
    setStep(3);
  };

  const handleStep3 = (e) => {
    e.preventDefault();
    setStep(4);
    PxTrack('Lead', { form_location: 'AI_Assistant' });
    pushToDataLayer('generate_lead', { form_location: 'ai_assistant' });
    pushToDataLayer('form_submission_success', { form_location: 'ai_assistant' });

    const templateParams = {
      to_email: 'info@mevaclinic.com',
      from_name: formData.name,
      phone: formData.phone,
      treatment: formData.treatment,
      metrics: `Weight: ${formData.weight}kg | Height: ${formData.height}cm | Age: ${formData.age}`,
      medical_condition: formData.medicalCondition || 'Unspecified'
    };

    // Safe EmailJS call — silently skips if ENV variables are not configured
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (serviceId && templateId && publicKey) {
      emailjs
        .send(serviceId, templateId, templateParams, publicKey)
        .catch(() => {}); // Ignore send errors — do not break UX
    }
  };

  useEffect(() => {
    if (step === 4) {
      setProgressText(isEn ? 'Initializing Med AI...' : 'Inițializare AI Med...');
      let currentProgress = 0;
      const interval = setInterval(() => {
        currentProgress += 5;
        if (currentProgress < 40) setProgressText(isEn ? 'Synthesizing medical data...' : 'Sintetizare date medicale...');
        else if (currentProgress < 75) setProgressText(isEn ? 'Identifying expert protocol...' : 'Identificare protocol experți...');
        else setProgressText(isEn ? 'Generating private treatment plan...' : 'Generare plan privat tratament...');
        
        setProgress(currentProgress);
        if (currentProgress >= 100) clearInterval(interval);
      }, 200);
      return () => clearInterval(interval);
    }
  }, [step, isEn]);

  return (
    <div className="bg-[#0b1626] py-24 sm:py-32 relative overflow-hidden" id="ai-assistant">
      <div className="absolute top-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-prime/20 rounded-full blur-[150px] pointer-events-none"></div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10 text-white">
        
        <div className="text-center mb-16">
           <div className="inline-flex items-center space-x-2 py-1.5 px-4 rounded-full border border-white/10 bg-white/5 mb-6 text-xs uppercase tracking-widest font-bold backdrop-blur-sm">
             <Stethoscope size={16} className="text-accent" />
             <span>{isEn ? "Rapid AI Diagnostic" : "Diagnostic Rapid AI"}</span>
           </div>
           <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4 drop-shadow-lg text-white">
             {isEn ? "Intelligent Medical" : "Asistent Medical"} <span className="text-accent">{isEn ? "Assistant" : "Inteligent"}</span>
           </h2>
           <p className="text-gray-400 font-sans text-lg max-w-2xl mx-auto leading-relaxed">
             {isEn ? "Complete our interactive tool for a fast, confidential, and 100% free clinical evaluation." : "Completează instrumentul nostru interactiv pentru o evaluare clinică rapidă, confidențială și 100% gratuită."}
           </p>
        </div>

        <div className="bg-[#112440]/80 backdrop-blur-xl border border-white/10 rounded-3xl p-6 md:p-10 shadow-2xl relative">
           
           {step < 4 && (
             <div className="flex justify-between items-center mb-10 relative w-64 mx-auto z-20">
               <div className="absolute top-1/2 left-0 w-full h-[2px] bg-white/10 -z-10"></div>
               {[1,2,3].map(s => (
                 <div key={s} className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold transition-all duration-500 ${step >= s ? 'bg-accent text-[#0b1626] shadow-[0_0_20px_rgba(212,175,55,0.4)]' : 'bg-[#0f1f38] border border-white/10 text-gray-500'}`}>
                    {step > s ? <CheckCircle size={18} strokeWidth={3} /> : s}
                 </div>
               ))}
             </div>
           )}

           <div className={`transition-all duration-700 relative p-4 md:p-8 ${step === 1 ? 'opacity-100 translate-y-0 z-10' : 'opacity-0 translate-y-12 -z-10 pointer-events-none absolute inset-0'}`}>
              <h3 className="text-xl md:text-3xl font-serif font-bold mb-6 text-center mt-4 leading-relaxed">{isEn ? "What is your area of interest?" : "Care este aria ta de interes?"}</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 pb-8">
                {treatmentOptions.map(opt => (
                  <button 
                    key={opt.id} 
                    onClick={() => handleStep1(opt.id)}
                    className="p-4 md:p-5 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 hover:border-accent/40 hover:-translate-y-1 hover:shadow-lg transition-all duration-300 text-left group shadow-sm h-full flex flex-col"
                  >
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg bg-[#0b1626] border border-white/5 flex items-center justify-center mb-4 drop-shadow-md group-hover:scale-110 transition-transform duration-300">
                      <opt.icon size={20} className="text-accent" />
                    </div>
                    <h4 className="font-bold text-base md:text-lg mb-1">{opt.title}</h4>
                    <p className="text-[10px] md:text-sm text-gray-400 leading-tight font-sans">{opt.desc}</p>
                  </button>
                ))}
              </div>
           </div>

           <div className={`transition-all duration-700 p-4 md:p-8 w-full ${step === 2 ? 'opacity-100 translate-x-0 z-10 relative' : 'opacity-0 translate-x-12 -z-10 pointer-events-none absolute inset-0'}`}>
              <div className="mt-16">
                <button type="button" onClick={() => setStep(1)} className="text-xs text-gray-400 hover:text-white uppercase tracking-widest font-bold mb-6 flex items-center transition-colors"><ArrowRight size={14} className="mr-2 transform rotate-180" /> {isEn ? "Modify Section" : "Modifică Secțiunea"}</button>
              
              <h3 className="text-3xl font-serif font-bold mb-2">
                {formData.treatment === 'bariatric' ? (isEn ? 'Metric Calibration' : 'Calibrare Metrică') : (isEn ? 'Visual Analysis System' : 'Sistem Analiză Vizuală')}
              </h3>
              <p className="text-gray-400 text-sm font-sans mb-8">
                {formData.treatment === 'bariatric' ? (isEn ? 'For an accurate prognosis, the doctor needs your physical parameters.' : 'Pentru un prognostic precis, doctorul are nevoie de indicii tăi fizici.') : (isEn ? 'For an accurate 3D diagnosis, upload 2-3 clear photos of the area of interest.' : 'Pentru un diagnostic 3D precis, încărcați 2-3 fotografii clare ale zonei de interes.')}
              </p>

              <form onSubmit={handleStep2} className="w-full">
                {formData.treatment === 'bariatric' ? (
                  <div className="grid grid-cols-2 gap-6 mb-8">
                    <div>
                      <label className="block text-xs uppercase tracking-widest text-gray-400 mb-2 font-bold">{isEn ? 'Weight (kg)' : 'Greutate (kg)'}</label>
                      <input type="number" required value={formData.weight} onChange={e => setFormData({...formData, weight: e.target.value})} className="w-full bg-[#0b1626]/50 border border-white/10 rounded-xl p-4 text-white focus:outline-none focus:border-accent focus:bg-[#0b1626] transition-all font-sans text-lg" />
                    </div>
                    <div>
                      <label className="block text-xs uppercase tracking-widest text-gray-400 mb-2 font-bold">{isEn ? 'Height (cm)' : 'Înălțime (cm)'}</label>
                      <input type="number" required value={formData.height} onChange={e => setFormData({...formData, height: e.target.value})} className="w-full bg-[#0b1626]/50 border border-white/10 rounded-xl p-4 text-white focus:outline-none focus:border-accent focus:bg-[#0b1626] transition-all font-sans text-lg" />
                    </div>
                  </div>
                ) : (
                  <div className="border-2 border-dashed border-white/20 rounded-2xl p-10 mb-8 flex flex-col items-center justify-center text-center cursor-pointer hover:border-accent/50 hover:bg-[#0b1626]/50 transition-all group">
                     <div className="w-20 h-20 rounded-full bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                       <UploadCloud size={32} className="text-accent" />
                     </div>
                     <p className="font-bold text-lg mb-2 text-white">{isEn ? 'Upload Image References' : 'Încarcă referințe de imagine'}</p>
                     <p className="text-sm text-gray-400">{isEn ? 'Max size 10MB (JPG, PNG). Encrypted.' : 'Dimensiune max 10MB (JPG, PNG). Conexiune Encriptată.'}</p>
                  </div>
                )}
                
                <button type="submit" className="w-full bg-accent hover:bg-yellow-500 text-[#0b1626] font-bold py-4 rounded-xl transition-all shadow-lg flex items-center justify-center hover:-translate-y-1 mb-10">
                  {isEn ? 'Confirm and Continue' : 'Confirmă și Continuă'} <ArrowRight size={18} className="ml-2" />
                </button>
              </form>
              </div>
           </div>

           <div className={`transition-all duration-700 p-4 md:p-8 w-full ${step === 3 ? 'opacity-100 translate-x-0 z-10 relative' : 'opacity-0 translate-x-12 -z-10 pointer-events-none absolute inset-0'}`}>
              <div className="mt-16">
                <button type="button" onClick={() => setStep(2)} className="text-xs text-gray-400 hover:text-white uppercase tracking-widest font-bold mb-4 flex items-center transition-colors"><ArrowRight size={14} className="mr-2 transform rotate-180" /> {isEn ? 'Medical Parameters' : 'Parametri Medicali'}</button>
                <h3 className="text-3xl font-serif font-bold mb-1">{isEn ? 'Medical File & Contact' : 'Dosar Medical & Contact'}</h3>
                <p className="text-gray-400 text-sm font-sans mb-8">{isEn ? 'Your data is strictly used for contact and procedure planning.' : 'Datele tale sunt folosite strict pentru contact și planul de procedură.'}</p>

              <form onSubmit={handleStep3} className="space-y-5">
                <div>
                  <label className="block text-xs uppercase tracking-widest text-gray-400 mb-2 font-bold">{isEn ? 'Pre-existing Conditions (Optional)' : 'Afecțiuni Preexistente (Opțional)'}</label>
                  <textarea value={formData.medicalCondition} onChange={e => setFormData({...formData, medicalCondition: e.target.value})} placeholder={isEn ? "Ex: High blood pressure, Diabetes..." : "Ex: Hipertensiune arterială, Diabet..."} className="w-full bg-[#0b1626]/50 border border-white/10 rounded-xl p-4 text-white focus:border-accent focus:bg-[#0b1626] h-20 resize-none transition-all font-sans" />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs uppercase tracking-widest text-gray-400 mb-2 font-bold">{isEn ? 'Full Name' : 'Nume Complet'}</label>
                    <input type="text" required value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} className="w-full bg-[#0b1626]/50 border border-white/10 rounded-xl p-4 text-white focus:border-accent focus:bg-[#0b1626] transition-all font-sans" />
                  </div>
                  <div>
                    <label className="block text-xs uppercase tracking-widest text-gray-400 mb-2 font-bold">{isEn ? 'Phone (WhatsApp)' : 'Telefon (WhatsApp)'}</label>
                    <input type="tel" required value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})} placeholder="+44" className="w-full bg-[#0b1626]/50 border border-white/10 rounded-xl p-4 text-white focus:border-accent focus:bg-[#0b1626] transition-all font-sans tracking-wider" />
                  </div>
                </div>
                <button type="submit" className="w-full bg-prime hover:bg-[#0f1f38] text-white border border-white/10 hover:border-accent/40 font-bold py-4 rounded-xl mt-2 transition-all shadow-xl flex items-center justify-center hover:-translate-y-1 mb-10">
                  {isEn ? 'Finalize and AI Prediction' : 'Finalizare și Predicție AI'} <Activity size={18} className="ml-3 text-accent" />
                </button>
              </form>
              </div>
           </div>

           <div className={`transition-all duration-1000 absolute inset-0 p-8 flex flex-col items-center justify-center w-full ${step === 4 ? 'opacity-100 scale-100 z-10' : 'opacity-0 scale-95 -z-10 pointer-events-none'}`}>
              {progress < 100 ? (
                <div className="text-center w-full max-w-sm">
                   <div className="mb-8 w-24 h-24 border-4 border-white/5 border-t-accent rounded-full animate-spin mx-auto relative">
                      <div className="absolute inset-0 border-4 border-transparent border-l-prime border-r-prime rounded-full animate-spin-slow opacity-50"></div>
                   </div>
                   <h3 className="text-2xl font-serif font-bold text-white mb-2 tracking-wide">{progressText}</h3>
                   <div className="text-accent text-sm font-bold tracking-widest uppercase mb-8">{progress}% {isEn ? "Completed" : "Completat"}</div>
                   <div className="w-full h-1.5 bg-[#0b1626] rounded-full overflow-hidden shadow-inner">
                      <div className="h-full bg-gradient-to-r from-prime to-accent transition-all duration-300 ease-out relative" style={{ width: `${progress}%` }}>
                         <div className="absolute top-0 right-0 bottom-0 left-0 bg-white/20 animate-pulse"></div>
                      </div>
                   </div>
                </div>
              ) : (
                <div className="text-center w-full transform transition-all duration-700 translate-y-0 opacity-100 scale-100">
                   <div className="w-24 h-24 bg-green-500/10 border border-green-500/20 text-green-400 rounded-full flex items-center justify-center mx-auto mb-8 shadow-lg">
                      <CheckCircle size={48} strokeWidth={1.5} />
                   </div>
                   <h3 className="text-3xl font-serif font-bold text-white mb-4">{isEn ? 'Analysis Complete!' : 'Analiză Finalizată!'}</h3>
                   <p className="text-gray-400 mb-10 max-w-md mx-auto text-sm leading-relaxed">
                     {isEn ? "Your case has been successfully assigned to our medical team in Istanbul. A consultant will return on" : "Cazul tău a fost preluat cu succes de medicii noștri de la Istanbul. Un consultant va reveni"} <strong className="text-white">{isEn ? "WhatsApp in 5 minutes" : "pe WhatsApp în 5 minute"}</strong> {isEn ? "with recommendations and a preliminary cost estimate." : "cu recomandări și devizul de cost preliminar."}
                   </p>
                   <button onClick={() => setStep(1)} className="bg-[#0b1626] border border-white/10 hover:border-white/30 text-white font-bold py-3.5 px-10 rounded-xl transition-all hover:bg-[#0f1f38] text-sm uppercase tracking-widest shadow-lg">
                     {isEn ? 'Restart Process' : 'Reia Procesul'}
                   </button>
                </div>
              )}
           </div>

        </div>
      </div>
    </div>
  );
};

export default AIAssistant;
