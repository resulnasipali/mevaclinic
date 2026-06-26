'use client';
import { tUI } from '@/utils/uiTranslations';

// @ts-nocheck
import React, { useState } from 'react';
import { X, Calendar, Car, Hotel, Send, ShieldCheck, ArrowRight } from 'lucide-react';
import { pushToDataLayer } from '../utils/AnalyticsUtils';

interface AppointmentModalProps { isOpen: boolean; onClose: () => void; isEn?: boolean; lang?: string; }
const AppointmentModal = ({ isOpen, onClose, isEn = false, lang = 'en' }: AppointmentModalProps) => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    planningDate: '',
    needsLogistics: '',
    name: '',
    phone: ''
  });

  if (!isOpen) return null;

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          type: 'appointment_modal',
          name: formData.name,
          phone: formData.phone,
          procedure: 'Premium Consultation',
          details: `Planning Date: ${formData.planningDate}. Logistics Needs: ${formData.needsLogistics}.`,
          source: 'PremiumAppointmentModal',
        }),
      });
      if (response.ok) {
        import('../utils/pixel').then(({ PxTrack }) => {
          PxTrack('Lead', { form_location: 'Premium_Modal', ...formData });
          pushToDataLayer('generate_lead', { form_location: 'appointment_modal' });
          pushToDataLayer('form_submission_success', { form_location: 'appointment_modal' });
          alert(tUI("Request Received! A specialist will contact you.", lang));
          onClose();
        });
      } else {
        alert(lang === 'ro' ? 'Eroare la înregistrarea solicitării.' : 'Error submitting request. Please try again.');
      }
    } catch (err) {
      console.error('Submit error:', err);
      alert(lang === 'ro' ? 'Eroare de rețea.' : 'Network error. Please try again.');
    }
  };

  return (
    <div className="fixed inset-0 z-[3000] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-prime/80 backdrop-blur-md" onClick={onClose}></div>
      
      <div className="bg-white w-full max-w-xl rounded-[2.5rem] shadow-2xl relative overflow-hidden animate-fade-up">
        <div className="absolute top-0 left-0 w-full h-2 bg-accent"></div>
        <button 
          onClick={onClose}
          aria-label={tUI("Close dialog", lang)}
          className="absolute top-6 right-6 text-gray-400 hover:text-prime transition-colors focus:outline-none focus:ring-2 focus:ring-accent rounded-full"
        >
          <X size={24} />
        </button>

        <div className="p-8 md:p-12">
          {step === 1 && (
            <div className="animate-fade-up">
              <h3 className="text-3xl font-serif font-bold text-prime mb-4">
                {tUI("Design Your Care Plan", lang)}
              </h3>
              <p className="text-gray-500 mb-8">
                {tUI("Tell us your preferences for a seamless medical experience.", lang)}
              </p>

              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-bold text-prime mb-3 flex items-center gap-2">
                    <Calendar size={18} className="text-accent" />
                    {tUI("When are you planning your visit?", lang)}
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    {['This Month', 'Next 3 Months', 'Next 6 Months', 'Just Exploring'].map((opt) => (
                      <button 
                        key={opt}
                        onClick={() => {
                          setFormData({...formData, planningDate: opt});
                          setStep(2);
                        }}
                        className="px-4 py-3 rounded-xl border border-gray-100 hover:border-accent hover:bg-accent/5 text-sm font-medium text-gray-600 hover:text-prime transition-all text-left"
                      >
                        {opt}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="animate-fade-up">
              <h3 className="text-2xl font-serif font-bold text-prime mb-6">
                {tUI("Logistics Assistance", lang)}
              </h3>
              <div className="space-y-4 mb-8">
                 <button 
                   onClick={() => {
                     setFormData({...formData, needsLogistics: 'Full VIP'});
                     setStep(3);
                   }}
                   className="w-full p-5 rounded-2xl border-2 border-gray-50 hover:border-accent flex items-center gap-4 group transition-all"
                 >
                    <div className="w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center group-hover:bg-accent group-hover:text-prime transition-all">
                       <Car size={24} />
                    </div>
                    <div className="text-left">
                       <p className="font-bold text-prime">{tUI("Full Premium Care", lang)}</p>
                       <p className="text-xs text-gray-500">{tUI("Includes Private Transfer & Partner Hotel", lang)}</p>
                    </div>
                 </button>

                 <button 
                   onClick={() => {
                     setFormData({...formData, needsLogistics: 'Medical Only'});
                     setStep(3);
                   }}
                   className="w-full p-5 rounded-2xl border-2 border-gray-50 hover:border-accent flex items-center gap-4 group transition-all"
                 >
                    <div className="w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center group-hover:bg-accent group-hover:text-prime transition-all">
                       <Hotel size={24} />
                    </div>
                    <div className="text-left">
                       <p className="font-bold text-prime">{tUI("Medical Only", lang)}</p>
                       <p className="text-xs text-gray-500">{tUI("I will manage my own logistics", lang)}</p>
                    </div>
                 </button>
              </div>
            </div>
          )}

          {step === 3 && (
            <form onSubmit={handleSubmit} className="animate-fade-up">
              <h3 className="text-2xl font-serif font-bold text-prime mb-6">
                {tUI("Final Clinical Detail", lang)}
              </h3>
              <div className="space-y-4 mb-8">
                <div>
                  <label htmlFor="modal-name" className="sr-only">{tUI("Full Name", lang)}</label>
                  <input 
                    id="modal-name"
                    type="text" 
                    placeholder={tUI("Full Name", lang)}
                    className="w-full px-5 py-4 rounded-xl border border-gray-100 focus:border-accent outline-none focus:ring-2 focus:ring-accent/30"
                    required
                    autoComplete="name"
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                  />
                </div>
                <div>
                  <label htmlFor="modal-phone" className="sr-only">{tUI("Phone (WhatsApp)", lang)}</label>
                  <input 
                    id="modal-phone"
                    type="tel" 
                    placeholder={tUI("Phone (WhatsApp)", lang)}
                    className="w-full px-5 py-4 rounded-xl border border-gray-100 focus:border-accent outline-none focus:ring-2 focus:ring-accent/30"
                    required
                    autoComplete="tel"
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  />
                </div>
              </div>
              <button 
                type="submit"
                className="w-full bg-prime text-white font-bold py-5 rounded-2xl shadow-xl flex items-center justify-center gap-3 hover:bg-[#0b1626] transition-all"
              >
                 {tUI("Activate Evaluation", lang)} <Send size={18} />
              </button>
              <div className="flex flex-col items-center justify-center gap-2 mt-5 border-t border-gray-50 pt-4">
                 <p className="text-[9px] text-center text-gray-400 uppercase tracking-[0.15em] font-bold">
                    <ShieldCheck size={12} className="inline mr-1 text-accent" /> SSL Secured & GDPR Compliant
                 </p>
                 <div className="flex flex-wrap justify-center items-center gap-3 text-[10px] font-bold text-prime">
                   <span className="flex items-center gap-1"><span className="text-accent">✓</span> {tUI("JCI Accredited", lang)}</span>
                   <span className="w-1 h-1 rounded-full bg-gray-200"></span>
                   <span className="flex items-center gap-1"><span className="text-accent">✓</span> {tUI("Premium Care", lang)}</span>
                   <span className="w-1 h-1 rounded-full bg-gray-200"></span>
                   <span className="flex items-center gap-1"><span className="text-accent">✓</span> {tUI("€0 Consultation", lang)}</span>
                 </div>
              </div>
            </form>
          )}

          <div className="mt-8 flex items-center justify-center gap-2" role="progressbar" aria-valuenow={step} aria-valuemin={1} aria-valuemax={3} aria-label={tUI(`Step ${step} of 3`, lang)}>
            {[1, 2, 3].map(i => (
              <div key={i} className={`h-1.5 rounded-full transition-all ${step === i ? 'w-8 bg-accent' : 'w-2 bg-gray-100'}`}></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppointmentModal;
