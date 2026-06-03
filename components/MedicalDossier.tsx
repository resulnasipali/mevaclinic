import { tUI } from '@/utils/uiTranslations';
import { maskDoctorName } from '@/utils/doctorUtils';
// @ts-nocheck
import React from 'react';
import { Activity, ShieldCheck, Download, Lock, CheckCircle2, Award, FileText, CheckCircle, Smartphone } from 'lucide-react';

const MedicalDossier = ({ data, lang = "en", isUnlocked = false, onUnlock }: { data: any, lang?: string, isUnlocked?: boolean, onUnlock?: () => void }) => {
  const isEn = lang === "en";
  const reportId = `MEVA-${Math.random().toString(36).substr(2, 9).toUpperCase()}`;
  
  return (
    <div className="bg-white border-8 border-gray-50 p-6 md:p-16 shadow-2xl relative overflow-hidden font-sans text-prime max-w-4xl mx-auto rounded-[3rem]">
      {/* Verified Watermark */}
      <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] pointer-events-none select-none rotate-45">
         <h1 className="text-[120px] font-black uppercase tracking-[0.2em]">VERIFIED</h1>
      </div>

      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start border-b border-gray-100 pb-10 mb-10 relative z-10">
        <div className="flex items-center gap-3 mb-6 md:mb-0">
          <div className="w-14 h-14 bg-prime rounded-xl flex items-center justify-center text-accent shadow-lg">
             <Activity size={32} />
          </div>
          <div>
            <h1 className="text-2xl font-serif font-bold leading-none">Meva<span className="text-accent">Clinic</span></h1>
            <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-gray-400 mt-1">Istanbul Clinical Board</p>
          </div>
        </div>
        <div className="text-left md:text-right w-full md:w-auto">
          <h2 className="text-lg font-bold uppercase tracking-widest text-prime mb-1">
             {tUI("Personalized Clinical Report", lang)}
          </h2>
          <p className="text-xs font-bold text-gray-400">Report ID: <span className="text-prime">{reportId}</span></p>
        </div>
      </div>

      {/* Summary Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 relative z-10">
         <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
            <h3 className="text-[10px] font-bold text-accent uppercase tracking-widest mb-4">{tUI("Specialist & Facility", lang)}</h3>
            <p className="text-sm mb-2"><strong>{tUI("Specialist", lang)}:</strong> {maskDoctorName(data.doctorName || 'MD Harun')}</p>
            <p className="text-sm mb-2"><strong>{tUI("Hospital", lang)}:</strong> {data.hospitalName || 'Istanbul Excellence Hospital'}</p>
            <p className="text-sm"><strong>{tUI("Technology", lang)}:</strong> {data.technology || 'Sapphire FUE / CyberKnife S7'}</p>
         </div>
         <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
            <h3 className="text-[10px] font-bold text-accent uppercase tracking-widest mb-4">{tUI("Clinical Protocol", lang)}</h3>
            <div className="space-y-2">
               {['Initial 3D Mapping', 'Targeted Intervention', 'Post-Op Monitoring'].map((step, i) => (
                 <div key={i} className="flex items-center gap-2 text-xs font-medium">
                    <CheckCircle size={14} className="text-green-500" /> {step}
                 </div>
               ))}
            </div>
         </div>
      </div>

      {/* Technical Specs */}
      <div className="mb-12 relative z-10">
         <h3 className="text-xs font-bold text-prime uppercase tracking-[0.2em] mb-6">{tUI("Clinical Analysis & Tech Specs", lang)}</h3>
         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 bg-white border border-gray-100 rounded-2xl shadow-sm">
               <h4 className="font-bold text-sm mb-2">{tUI("Hardware Precision", lang)}</h4>
               <p className="text-xs text-gray-500 leading-relaxed">
                  {tUI("Sub-millimeter alignment utilizing AI-driven robotic assistance for maximum tissue preservation.", lang)}
               </p>
            </div>
            <div className="p-6 bg-white border border-gray-100 rounded-2xl shadow-sm">
               <h4 className="font-bold text-sm mb-2">{tUI("Bio-Safety Level", lang)}</h4>
               <p className="text-xs text-gray-500 leading-relaxed">
                  {tUI("JCI-accredited surgical protocols ensuring zero-contamination environment.", lang)}
               </p>
            </div>
         </div>
      </div>

      {/* Conversion Lock Section */}
      <div className={`transition-all duration-1000 relative z-10 ${!isUnlocked ? 'blur-lg select-none pointer-events-none' : ''}`}>
         <div className="p-8 bg-prime text-white rounded-[2rem] mb-12">
            <h3 className="text-xl font-serif font-bold mb-4">{tUI("Prognosis & Recovery Timeline", lang)}</h3>
            <div className="space-y-4">
               <div className="h-4 bg-white/10 rounded w-full"></div>
               <div className="h-4 bg-white/10 rounded w-3/4"></div>
               <div className="h-4 bg-white/10 rounded w-1/2"></div>
            </div>
         </div>
         
         {/* Digital Signature Area */}
         <div className="flex flex-col md:flex-row justify-between items-end gap-8 pt-10 border-t border-gray-100">
            <div className="text-left">
               <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Document Status</p>
               <div className="flex items-center gap-2 text-green-600 font-bold text-xs">
                  <ShieldCheck size={14} /> {tUI("Legally Valid Clinical Brief", lang)}
               </div>
            </div>
            <div className="text-center md:text-right">
               <div className="font-handwriting text-prime text-3xl mb-1 opacity-80">Meva Board</div>
               <div className="w-48 h-px bg-prime/20 ml-auto mb-2"></div>
               <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">{tUI("Digital Clinical Signature", lang)}</p>
            </div>
         </div>
      </div>

      {!isUnlocked && (
        <div className="absolute inset-0 flex items-center justify-center z-20 p-6">
           <div className="bg-white rounded-[3rem] p-8 md:p-12 shadow-2xl border border-gray-100 text-center max-w-md w-full animate-fade-up">
              <div className="w-20 h-20 bg-accent text-prime rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-xl">
                 <Lock size={40} />
              </div>
              <h3 className="text-2xl font-serif font-bold text-prime mb-4">
                 {tUI("Access Full Pricing & Plan", lang)}
              </h3>
              <p className="text-sm text-gray-500 mb-10 leading-relaxed">
                 {tUI("Unlock the technical recovery timeline and get your exact pricing quote via WhatsApp.", lang)}
              </p>
              <button 
                onClick={onUnlock}
                className="w-full bg-prime text-white font-bold py-5 rounded-2xl shadow-xl flex items-center justify-center gap-4 hover:bg-accent hover:text-prime transition-all text-lg"
              >
                 <Smartphone size={24} />
                 {tUI("Unlock via WhatsApp", lang)}
              </button>
              <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest mt-6">
                 {tUI("Encrypted Clinical Data Transfer", lang)}
              </p>
           </div>
        </div>
      )}

      <style dangerouslySetInnerHTML={{ __html: `
        @import url('https://fonts.googleapis.com/css2?family=Caveat:wght@400;700&display=swap');
        .font-handwriting {
          font-family: 'Caveat', cursive;
        }
      `}} />
    </div>
  );
};

export default MedicalDossier;
