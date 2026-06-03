// @ts-nocheck
'use client';

import React, { useState, useEffect } from 'react';
import {
  Stethoscope,
  Activity,
  Scissors,
  ArrowRight,
  ShieldCheck,
  UploadCloud,
  CheckCircle,
  Brain,
  HeartPulse,
  Syringe,
} from 'lucide-react';
import { PxTrack } from '../utils/pixel';
import emailjs from '@emailjs/browser';
import { usePathname } from 'next/navigation';
import { pushToDataLayer } from '../utils/AnalyticsUtils';
import { tUI } from '@/utils/uiTranslations';

const AIAssistant = ({ lang = 'en' }: { lang?: string }) => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    treatment: '',
    height: '',
    weight: '',
    age: '',
    medicalCondition: '',
    phone: '',
    name: '',
  });
  const [progress, setProgress] = useState(0);
  const [progressText, setProgressText] = useState('');

  const pathname = usePathname();
  const isEn = (pathname || '/').startsWith('/en');

  const treatmentOptions = [
    {
      id: 'bariatric',
      title: tUI("Bariatric Surgery", lang),
      icon: Activity,
      desc: tUI("Gastric Sleeve & Bypass", lang),
    },
    {
      id: 'dental',
      title: tUI("Dentistry", lang),
      icon: ShieldCheck,
      desc: tUI("Hollywood Smile & Reconstruction", lang),
    },
    {
      id: 'plastic',
      title: tUI("Plastic Surgery", lang),
      icon: Scissors,
      desc: tUI("Lifting, Rhinoplasty, Body Sculpting", lang),
    },
    {
      id: 'oncology',
      title: tUI("Oncology", lang),
      icon: Brain,
      desc: tUI("CyberKnife, Chemotherapy", lang),
    },
    {
      id: 'transplant',
      title: tUI("Organ Transplant", lang),
      icon: HeartPulse,
      desc: tUI("Kidney & Liver Transplants", lang),
    },
    {
      id: 'hair',
      title: tUI("Hair Transplant", lang),
      icon: Syringe,
      desc: tUI("Sapphire FUE, Stem Cells", lang),
    },
  ];

  const handleStep1 = (t: string) => {
    setFormData({ ...formData, treatment: t });
    setStep(2);
    PxTrack('AI_Assistant_Started', { chosen_treatment: t });
  };

  const handleStep2 = (e: React.FormEvent) => {
    e.preventDefault();
    setStep(3);
  };

  const handleStep3 = (e: React.FormEvent) => {
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
      medical_condition: formData.medicalCondition || 'Unspecified',
    };

    // 1. Next.js: NEXT_PUBLIC_ prefix required for client-side env vars (EmailJS Fallback)
    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    if (serviceId && templateId && publicKey) {
      emailjs
        .send(serviceId, templateId, templateParams, publicKey)
        .catch(() => {}); // Silent fail — do not break UX
    }

    // 2. Direct CRM Backend Integration (Saves to our JSON DB)
    fetch('/api/leads', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: formData.name,
        phone: formData.phone,
        treatment: formData.treatment,
        metrics: `Weight: ${formData.weight}kg | Height: ${formData.height}cm | Age: ${formData.age}`,
        medical_condition: formData.medicalCondition,
        source: 'AIAssistant'
      }),
    }).catch((err) => console.error('Failed to save lead:', err));
  };

  const [aiResponse, setAiResponse] = useState<string | null>(null);

  useEffect(() => {
    if (step === 4 && progress === 0 && !aiResponse) {
      setProgressText(tUI("Initializing Med AI...", lang));
      
      // Artificial UI progress bar to keep the user entertained while fetch happens
      let currentProgress = 0;
      const interval = setInterval(() => {
        currentProgress += 10;
        if (currentProgress < 40) {
          setProgressText(tUI("Synthesizing medical data...", lang));
        } else if (currentProgress < 75) {
          setProgressText(tUI("Identifying expert protocol...", lang));
        } else {
          setProgressText(tUI("Generating private treatment plan...", lang));
        }
        
        if (currentProgress <= 90) {
          setProgress(currentProgress);
        }
      }, 300);

      // Production AI API Route call with robust S-Tier error boundaries
      const executeAiConsultation = async () => {
        try {
          const response = await fetch('/api/ai-consult', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ ...formData, isEn })
          });
          
          if (!response.ok) throw new Error('API Execution Failure');
          
          const data = await response.json();
          clearInterval(interval);
          setProgress(100);
          
          if (data && data.success) {
            setAiResponse(data.message);
          } else {
            throw new Error('Invalid AI Payload');
          }
        } catch (error) {
          console.error('S-Tier Guardrail Intercepted Error:', error);
          clearInterval(interval);
          setProgress(100);
          // High-ticket fallback routing
          setAiResponse(tUI("Our systems are experiencing high VIP volume. Connecting you directly to our medical coordinators via WhatsApp...", lang));
        }
      };
      
      executeAiConsultation();

      return () => clearInterval(interval);
    }
  }, [step, isEn, progress, aiResponse, formData]);

  return (
    <div className="bg-[#0b1626] py-24 sm:py-32 relative overflow-hidden" id="ai-assistant">
      <div className="absolute top-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-prime/20 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10 text-white">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 py-1.5 px-4 rounded-full border border-white/10 bg-white/5 mb-6 text-xs uppercase tracking-widest font-bold backdrop-blur-sm">
            <Stethoscope size={16} className="text-accent" />
            <span>{tUI("Rapid AI Diagnostic", lang)}</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4 drop-shadow-lg text-white">
            {tUI("Intelligent Medical", lang)}{' '}
            <span className="text-accent">{tUI("Assistant", lang)}</span>
          </h2>
          <p className="text-gray-400 font-sans text-lg max-w-2xl mx-auto leading-relaxed">
            {tUI("Complete our interactive tool for a fast, confidential, and 100% free clinical evaluation.", lang)}
          </p>
        </div>

        {/* Card */}
        <div className="bg-[#112440]/80 backdrop-blur-xl border border-white/10 rounded-3xl p-6 md:p-10 shadow-2xl relative">
          {/* Step Indicator */}
          {step < 4 && (
            <div className="flex justify-between items-center mb-10 relative w-64 mx-auto z-20">
              <div className="absolute top-1/2 left-0 w-full h-[2px] bg-white/10 -z-10" />
              {[1, 2, 3].map((s) => (
                <div
                  key={s}
                  className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold transition-all duration-500 ${
                    step >= s
                      ? 'bg-accent text-[#0b1626] shadow-[0_0_20px_rgba(212,175,55,0.4)]'
                      : 'bg-[#0f1f38] border border-white/10 text-gray-500'
                  }`}
                >
                  {step > s ? <CheckCircle size={18} strokeWidth={3} /> : s}
                </div>
              ))}
            </div>
          )}

          {/* Step 1 — Treatment Selection */}
          <div
            className={`transition-all duration-700 p-4 md:p-8 w-full ${
              step === 1
                ? 'opacity-100 translate-y-0 z-10 relative'
                : 'opacity-0 translate-y-12 -z-10 pointer-events-none absolute inset-0'
            }`}
          >
            <h3 className="text-xl md:text-3xl font-serif font-bold mb-6 text-center mt-4 leading-relaxed">
              {tUI("What is your area of interest?", lang)}
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 pb-8">
              {treatmentOptions.map((opt) => (
                <button
                  key={opt.id}
                  onClick={() => handleStep1(opt.id)}
                  className="p-4 md:p-5 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 hover:border-accent/40 hover:-translate-y-1 hover:shadow-lg transition-all duration-300 text-left group shadow-sm h-full flex flex-col"
                >
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg bg-[#0b1626] border border-white/5 flex items-center justify-center mb-4 drop-shadow-md group-hover:scale-110 transition-transform duration-300">
                    <opt.icon size={20} className="text-accent" />
                  </div>
                  <h4 className="font-bold text-base md:text-lg mb-1">{opt.title}</h4>
                  <p className="text-[10px] md:text-sm text-gray-400 leading-tight font-sans">
                    {opt.desc}
                  </p>
                </button>
              ))}
            </div>
          </div>

          {/* Step 2 — Medical Metrics / Upload */}
          <div
            className={`transition-all duration-700 p-4 md:p-8 w-full ${
              step === 2
                ? 'opacity-100 translate-x-0 z-10 relative'
                : 'opacity-0 translate-x-12 -z-10 pointer-events-none absolute inset-0'
            }`}
          >
            <div className="mt-16">
              <button
                type="button"
                onClick={() => setStep(1)}
                className="text-xs text-gray-400 hover:text-white uppercase tracking-widest font-bold mb-4 flex items-center transition-colors py-2 px-3 hover:bg-white/5 rounded-lg -ml-3"
              >
                <ArrowRight size={14} className="mr-2 transform rotate-180" />
                {tUI("Modify Section", lang)}
              </button>

              <h3 className="text-3xl font-serif font-bold mb-2">
                {formData.treatment === 'bariatric'
                  ? tUI("Metric Calibration", lang)
                  : tUI("Visual Analysis System", lang)}
              </h3>
              <p className="text-gray-400 text-sm font-sans mb-8">
                {formData.treatment === 'bariatric'
                  ? tUI("For an accurate prognosis, the doctor needs your physical parameters.", lang)
                  : tUI("For an accurate 3D diagnosis, upload 2-3 clear photos of the area of interest. Also provide your age.", lang)}
              </p>

              <form onSubmit={handleStep2} className="w-full">
                {formData.treatment === 'bariatric' ? (
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
                    <div>
                      <label className="block text-xs uppercase tracking-widest text-gray-400 mb-2 font-bold">
                        {tUI("Weight (kg)", lang)}
                      </label>
                      <input
                        type="number"
                        required
                        value={formData.weight}
                        onChange={(e) => setFormData({ ...formData, weight: e.target.value })}
                        className="w-full bg-[#0b1626]/50 border border-white/10 rounded-xl p-4 text-white focus:outline-none focus:border-accent focus:bg-[#0b1626] transition-all font-sans text-lg"
                      />
                    </div>
                    <div>
                      <label className="block text-xs uppercase tracking-widest text-gray-400 mb-2 font-bold">
                        {tUI("Height (cm)", lang)}
                      </label>
                      <input
                        type="number"
                        required
                        value={formData.height}
                        onChange={(e) => setFormData({ ...formData, height: e.target.value })}
                        className="w-full bg-[#0b1626]/50 border border-white/10 rounded-xl p-4 text-white focus:outline-none focus:border-accent focus:bg-[#0b1626] transition-all font-sans text-lg"
                      />
                    </div>
                    <div>
                      <label className="block text-xs uppercase tracking-widest text-gray-400 mb-2 font-bold">
                        {tUI("Age", lang)}
                      </label>
                      <input
                        type="number"
                        required
                        value={formData.age}
                        onChange={(e) => setFormData({ ...formData, age: e.target.value })}
                        className="w-full bg-[#0b1626]/50 border border-white/10 rounded-xl p-4 text-white focus:outline-none focus:border-accent focus:bg-[#0b1626] transition-all font-sans text-lg"
                      />
                    </div>
                  </div>
                ) : (
                  <div>
                    <div className="mb-6">
                      <label className="block text-xs uppercase tracking-widest text-gray-400 mb-2 font-bold">
                        {tUI("Age", lang)}
                      </label>
                      <input
                        type="number"
                        required
                        value={formData.age}
                        onChange={(e) => setFormData({ ...formData, age: e.target.value })}
                        className="w-full sm:w-1/3 bg-[#0b1626]/50 border border-white/10 rounded-xl p-4 text-white focus:outline-none focus:border-accent focus:bg-[#0b1626] transition-all font-sans text-lg"
                      />
                    </div>
                    <div className="border-2 border-dashed border-white/20 rounded-2xl p-10 mb-8 flex flex-col items-center justify-center text-center cursor-pointer hover:border-accent/50 hover:bg-[#0b1626]/50 transition-all group">
                      <div className="w-20 h-20 rounded-full bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                        <UploadCloud size={32} className="text-accent" />
                      </div>
                      <p className="font-bold text-lg mb-2 text-white">
                        {tUI("Upload Image References", lang)}
                      </p>
                      <p className="text-sm text-gray-400">
                        {tUI("Max size 10MB (JPG, PNG). Encrypted.", lang)}
                      </p>
                    </div>
                  </div>
                )}

                <button
                  type="submit"
                  className="w-full bg-accent hover:bg-yellow-500 text-[#0b1626] font-bold py-4 rounded-xl transition-all shadow-lg flex items-center justify-center hover:-translate-y-1 mb-10"
                >
                  {tUI("Confirm and Continue", lang)}
                  <ArrowRight size={18} className="ml-2" />
                </button>
              </form>
            </div>
          </div>

          {/* Step 3 — Lead Form */}
          <div
            className={`transition-all duration-700 p-4 md:p-8 w-full ${
              step === 3
                ? 'opacity-100 translate-x-0 z-10 relative'
                : 'opacity-0 translate-x-12 -z-10 pointer-events-none absolute inset-0'
            }`}
          >
            <div className="mt-16">
              <button
                type="button"
                onClick={() => setStep(2)}
                className="text-xs text-gray-400 hover:text-white uppercase tracking-widest font-bold mb-2 flex items-center transition-colors py-2 px-3 hover:bg-white/5 rounded-lg -ml-3"
              >
                <ArrowRight size={14} className="mr-2 transform rotate-180" />
                {tUI("Medical Parameters", lang)}
              </button>
              <h3 className="text-3xl font-serif font-bold mb-1">
                {tUI("Medical File & Contact", lang)}
              </h3>
              <p className="text-gray-400 text-sm font-sans mb-8">
                {tUI("Your data is strictly used for contact and procedure planning.", lang)}
              </p>

              <form onSubmit={handleStep3} className="space-y-5">
                <div>
                  <label className="block text-xs uppercase tracking-widest text-gray-400 mb-2 font-bold">
                    {tUI("Pre-existing Conditions (Optional)", lang)}
                  </label>
                  <textarea
                    value={formData.medicalCondition}
                    onChange={(e) => setFormData({ ...formData, medicalCondition: e.target.value })}
                    placeholder={
                      tUI("Ex: High blood pressure, Diabetes...", lang)
                    }
                    className="w-full bg-[#0b1626]/50 border border-white/10 rounded-xl p-4 text-white focus:border-accent focus:bg-[#0b1626] h-20 resize-none transition-all font-sans"
                  />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs uppercase tracking-widest text-gray-400 mb-2 font-bold">
                      {tUI("Full Name", lang)}
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-[#0b1626]/50 border border-white/10 rounded-xl p-4 text-white focus:border-accent focus:bg-[#0b1626] transition-all font-sans"
                    />
                  </div>
                  <div>
                    <label className="block text-xs uppercase tracking-widest text-gray-400 mb-2 font-bold">
                      {tUI("Phone (WhatsApp)", lang)}
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+44"
                      className="w-full bg-[#0b1626]/50 border border-white/10 rounded-xl p-4 text-white focus:border-accent focus:bg-[#0b1626] transition-all font-sans tracking-wider"
                    />
                  </div>
                </div>
                <button
                  type="submit"
                  className="w-full bg-prime hover:bg-[#0f1f38] text-white border border-white/10 hover:border-accent/40 font-bold py-4 rounded-xl mt-2 transition-all shadow-xl flex items-center justify-center hover:-translate-y-1 mb-10"
                >
                  {tUI("Finalize and AI Prediction", lang)}
                  <Activity size={18} className="ml-3 text-accent" />
                </button>
              </form>
            </div>
          </div>

          {/* Step 4 — AI Progress / Success */}
          <div
            className={`transition-all duration-1000 p-4 md:p-8 flex flex-col items-center justify-center w-full ${
              step === 4 ? 'opacity-100 scale-100 z-10 relative' : 'opacity-0 scale-95 -z-10 pointer-events-none absolute inset-0'
            }`}
          >
            {progress < 100 ? (
              <div className="text-center w-full max-w-sm">
                <div className="mb-8 w-24 h-24 border-4 border-white/5 border-t-accent rounded-full animate-spin mx-auto relative">
                  <div className="absolute inset-0 border-4 border-transparent border-l-prime border-r-prime rounded-full animate-spin-slow opacity-50" />
                </div>
                <h3 className="text-2xl font-serif font-bold text-white mb-2 tracking-wide">
                  {progressText}
                </h3>
                <div className="text-accent text-sm font-bold tracking-widest uppercase mb-8">
                  {progress}% {tUI("Completed", lang)}
                </div>
                <div className="w-full h-1.5 bg-[#0b1626] rounded-full overflow-hidden shadow-inner">
                  <div
                    className="h-full bg-gradient-to-r from-prime to-accent transition-all duration-300 ease-out relative"
                    style={{ width: `${progress}%` }}
                  >
                    <div className="absolute top-0 right-0 bottom-0 left-0 bg-white/20 animate-pulse" />
                  </div>
                </div>
              </div>
            ) : (
              <div className="text-center w-full transform transition-all duration-700 translate-y-0 opacity-100 scale-100 px-4 md:px-12">
                <div className="w-20 h-20 bg-green-500/10 border border-green-500/20 text-green-400 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <CheckCircle size={36} strokeWidth={2} />
                </div>
                <h3 className="text-2xl font-serif font-bold text-white mb-4">
                  {tUI("AI Analysis Complete", lang)}
                </h3>
                <div className="bg-white/5 border border-white/10 rounded-2xl p-6 mb-8 text-left">
                  <div className="flex items-center gap-2 mb-3 border-b border-white/10 pb-3">
                     <Brain size={16} className="text-accent" />
                     <span className="text-xs font-bold uppercase tracking-widest text-gray-400">
                       {tUI("Clinical Recommendation", lang)}
                     </span>
                  </div>
                  <p className="text-gray-300 text-sm leading-relaxed font-serif">
                    {aiResponse}
                  </p>
                </div>
                
                <p className="text-gray-400 mb-8 text-xs leading-relaxed max-w-sm mx-auto">
                  {tUI("A consultant will return on WhatsApp with further details.", lang)}
                </p>
                <button
                  onClick={() => {
                    setStep(1);
                    setProgress(0);
                    setAiResponse(null);
                    setFormData({...formData, treatment: ''});
                  }}
                  className="bg-[#0b1626] border border-white/10 hover:border-white/30 text-white font-bold py-3.5 px-10 rounded-xl transition-all hover:bg-[#0f1f38] text-xs uppercase tracking-widest shadow-lg"
                >
                  {tUI("Start New Analysis", lang)}
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
