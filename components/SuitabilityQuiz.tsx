// @ts-nocheck
'use client';
import { tUI } from '@/utils/uiTranslations';

import React, { useState } from 'react';
import { ShieldCheck, ArrowRight, CheckCircle2, ChevronLeft, Send, MessageCircle } from 'lucide-react';
import { pushToDataLayer } from '../utils/AnalyticsUtils';

const SuitabilityQuiz = ({ procedure = 'General', lang = 'en' }: { procedure?: string, lang?: string }) => {
  const isEn = lang === 'en';
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState({
    age: '',
    history: '',
    smoking: '',
    outcome: '',
    contact: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const questions = [
    {
      id: 'age',
      q: tUI("What is your age group?", lang),
      options: isEn ? ["18-35", "36-50", "50+"] : ["18-35", "36-50", "50+"]
    },
    {
      id: 'history',
      q: tUI("Do you have any chronic medical conditions?", lang),
      options: isEn ? ["None", "Hypertension", "Diabetes", "Other"] : ["Niciuna", "Hipertensiune", "Diabet", "Altele"]
    },
    {
      id: 'smoking',
      q: tUI("What is your smoking status?", lang),
      options: isEn ? ["Non-smoker", "Occasional", "Active smoker"] : ["Nefumător", "Ocazional", "Fumător activ"]
    },
    {
      id: 'outcome',
      q: tUI("What is your primary goal for this procedure?", lang),
      options: isEn ? ["Health Improvement", "Aesthetic Enhancement", "Functional Correction"] : ["Îmbunătățirea Sănătății", "Îmbunătățire Estetică", "Corecție Funcțională"]
    }
  ];

  const handleNext = (val) => {
    const key = questions[step].id;
    setFormData({ ...formData, [key]: val });
    setStep(step + 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);

    // CRM & Email Integration
    fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        type: 'quiz',
        name: 'Quiz User', // Optional, user didn't enter name
        email: formData.contact.includes('@') ? formData.contact : 'No Email',
        phone: !formData.contact.includes('@') ? formData.contact : 'No Phone',
        procedure: procedure,
        details: `Goal: ${formData.outcome} \\n Medical History: ${formData.history} \\n Smoking: ${formData.smoking} \\n Age: ${formData.age}`
      })
    }).catch(err => console.error('Failed to send quiz results:', err));

    // Track Lead
    import('../utils/pixel').then(({ PxTrack }) => PxTrack('Lead', { quiz_type: procedure }));
    pushToDataLayer('generate_lead', { form_location: 'suitability_quiz' });
    pushToDataLayer('form_submission_success', { form_location: 'suitability_quiz' });
  };

  if (isSubmitted) {
    return (
      <div className="p-8 md:p-12 text-center bg-prime text-white rounded-[2.5rem] shadow-2xl relative overflow-hidden animate-scale-in">
        <div className="absolute top-0 left-0 w-full h-1.5 bg-accent"></div>
        <div className="w-20 h-20 bg-accent/20 rounded-full flex items-center justify-center text-accent mx-auto mb-6">
          <CheckCircle2 size={40} />
        </div>
        <h2 className="text-3xl font-serif font-bold mb-4">
          {tUI("Your Suitability Report is Ready!", lang)}
        </h2>
        <p className="text-gray-400 mb-8 max-w-md mx-auto">
          {tUI("Our specialists are reviewing your data. Your full clinical analysis will be sent to your WhatsApp/Email within 15-30 minutes.", lang)}
        </p>
        <div className="flex flex-col gap-3 max-w-xs mx-auto">
           <a 
             href={`https://wa.me/905324675941`} 
             onClick={() => pushToDataLayer('whatsapp_click', { location: 'suitability_quiz_success' })}
             className="bg-[#25D366] text-white py-4 rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-[#1da851] transition-all"
           >
             <MessageCircle size={20} /> WhatsApp Support
           </a>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-[2.5rem] shadow-2xl border border-gray-100 overflow-hidden relative max-w-2xl mx-auto">
      <div className="bg-prime p-8 text-white">
        <div className="flex justify-between items-center mb-6">
           <div className="flex items-center gap-2 text-accent">
              <ShieldCheck size={18} />
              <span className="text-[10px] font-bold uppercase tracking-[0.2em]">{tUI("Board-Certified Assessment", lang)}</span>
           </div>
           <span className="text-xs font-bold text-gray-400">Step {step + 1} / 5</span>
        </div>
        <h3 className="text-2xl font-serif font-bold">
           {tUI("Are you a candidate for ${procedure}?", lang).replace('${procedure}', procedure)}
        </h3>
      </div>

      <div className="p-8 md:p-10">
        {step < questions.length ? (
          <div className="space-y-6 animate-fade-in" key={step}>
            <p className="text-xl text-prime font-bold font-serif">{questions[step].q}</p>
            <div className="grid grid-cols-1 gap-3">
              {questions[step].options.map((opt, i) => (
                <button
                  key={i}
                  onClick={() => handleNext(opt)}
                  className="w-full text-left p-5 rounded-2xl border border-gray-100 hover:border-accent hover:bg-accent/5 transition-all flex justify-between items-center group"
                >
                  <span className="font-bold text-prime">{opt}</span>
                  <ArrowRight size={18} className="text-gray-200 group-hover:text-accent group-hover:translate-x-1 transition-all" />
                </button>
              ))}
            </div>
            {step > 0 && (
              <button onClick={() => setStep(step - 1)} className="flex items-center gap-2 text-gray-400 font-bold text-xs uppercase tracking-widest hover:text-prime">
                <ChevronLeft size={14} /> {tUI("Back", lang)}
              </button>
            )}
          </div>
        ) : (
          <div className="space-y-6 animate-fade-in">
             <div className="bg-accent/10 p-6 rounded-2xl border border-accent/20 mb-8">
                <h4 className="font-bold text-prime mb-2">{tUI("Final Step: Analysis Request", lang)}</h4>
                <p className="text-xs text-gray-500 leading-relaxed">
                  {tUI("To protect your medical privacy, our system does not display results on-screen. Enter your contact details to receive your 100% confidential report.", lang)}
                </p>
             </div>
             <form onSubmit={handleSubmit} className="space-y-4">
                <input 
                  required
                  type="text" 
                  placeholder={tUI("WhatsApp Number or Email", lang)}
                  className="w-full p-5 bg-gray-50 border border-gray-100 rounded-2xl focus:ring-2 focus:ring-accent outline-none font-bold text-prime"
                  value={formData.contact}
                  onChange={(e) => setFormData({...formData, contact: e.target.value})}
                />
                <button className="w-full bg-prime text-white py-5 rounded-2xl font-bold flex items-center justify-center gap-3 hover:shadow-xl transition-all shadow-prime/20">
                   {tUI("Receive Full Clinical Report", lang)}
                   <Send size={18} className="text-accent" />
                </button>
                <div className="flex items-center justify-center gap-2 text-[10px] text-gray-400 font-bold uppercase tracking-widest">
                   <ShieldCheck size={12} /> HIPAA & JCI Compliant
                </div>
             </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default SuitabilityQuiz;
