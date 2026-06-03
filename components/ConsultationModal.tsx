// @ts-nocheck
'use client';

import React, { useState } from 'react';
import { X, CheckCircle, ShieldCheck, Clock, Phone, Mail, User } from 'lucide-react';
import { pushToDataLayer } from '../utils/AnalyticsUtils';

const ConsultationModal = ({ isOpen, onClose, isEn }) => {
  const [formState, setFormState] = useState('idle'); // idle, loading, success
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !phone) return;
    setFormState('loading');
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          type: 'consultation_modal',
          name,
          email,
          phone,
          procedure: 'General Consultation Inquiry',
          source: 'ConsultationModal',
        }),
      });
      if (response.ok) {
        setFormState('success');
        pushToDataLayer('generate_lead', { form_location: 'consultation_modal' });
        pushToDataLayer('form_submission_success', { form_location: 'consultation_modal' });
      } else {
        alert(isEn ? 'Error submitting request. Please try again.' : 'Eroare la înregistrarea solicitării. Reîncercați.');
        setFormState('idle');
      }
    } catch (err) {
      console.error('Consultation Modal Submit error:', err);
      alert(isEn ? 'Network error. Please try again.' : 'Eroare de rețea. Reîncercați.');
      setFormState('idle');
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-[#0b1626]/80 backdrop-blur-sm transition-opacity duration-500 animate-fade-in"
        onClick={onClose}
      ></div>

      {/* Modal Container */}
      <div className="relative bg-white w-full max-w-lg rounded-[2.5rem] shadow-2xl overflow-hidden transform transition-all duration-500 animate-scale-in">
        
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-full bg-gray-50 text-gray-400 hover:text-prime transition-colors z-10"
        >
          <X size={20} />
        </button>

        {formState === 'success' ? (
          <div className="p-12 text-center flex flex-col items-center">
            <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center text-green-500 mb-6">
              <CheckCircle size={40} />
            </div>
            <h2 className="text-3xl font-serif font-bold text-prime mb-4">
              {isEn ? "Request Received" : "Solicitare Recepționată"}
            </h2>
            <p className="text-gray-500 leading-relaxed">
              {isEn 
                ? "Our board-certified medical coordinator will contact you within the next 30 minutes for your preliminary assessment." 
                : "Coordonatorul nostru medical acreditat vă va contacta în următoarele 30 de minute pentru evaluarea preliminară."}
            </p>
            <button 
              onClick={onClose}
              className="mt-10 bg-prime text-white px-10 py-4 rounded-2xl font-bold hover:shadow-xl transition-all"
            >
              {isEn ? "Close Window" : "Închide Fereastra"}
            </button>
          </div>
        ) : (
          <div className="p-8 md:p-12">
            <div className="mb-8">
              <div className="flex items-center gap-2 text-accent mb-2">
                <ShieldCheck size={16} />
                <span className="text-xs font-bold uppercase tracking-widest">{isEn ? "Secure Clinical Form" : "Formular Clinic Securizat"}</span>
              </div>
              <h2 className="text-3xl font-serif font-bold text-prime leading-tight">
                {isEn ? "Schedule Your Expert Consultation" : "Programează Consultația Ta cu Experții"}
              </h2>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="relative">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                <input 
                  required
                  type="text" 
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder={isEn ? "Full Name" : "Nume Complet"}
                  className="w-full pl-12 pr-4 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:ring-2 focus:ring-accent outline-none transition-all font-sans text-sm"
                />
              </div>

              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                <input 
                  required
                  type="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email"
                  className="w-full pl-12 pr-4 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:ring-2 focus:ring-accent outline-none transition-all font-sans text-sm"
                />
              </div>

              <div className="relative">
                <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                <input 
                  required
                  type="tel" 
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder={isEn ? "Phone Number" : "Număr de Telefon"}
                  className="w-full pl-12 pr-4 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:ring-2 focus:ring-accent outline-none transition-all font-sans text-sm"
                />
              </div>

              <div className="pt-2">
                <button 
                  disabled={formState === 'loading'}
                  className="w-full bg-prime hover:bg-[#0f1f38] text-white py-5 rounded-2xl font-bold flex items-center justify-center gap-3 transition-all shadow-xl hover:-translate-y-0.5 disabled:opacity-70"
                >
                  {formState === 'loading' ? (
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                  ) : (
                    <>
                      {isEn ? "Request Free Assessment" : "Solicită Evaluarea Gratuită"}
                      <Clock size={18} className="text-accent" />
                    </>
                  )}
                </button>
              </div>

              <p className="text-[10px] text-center text-gray-400 font-medium px-6">
                {isEn 
                  ? "By submitting, you agree to our JCI-compliant privacy policy. Your medical data is encrypted." 
                  : "Prin trimitere, ești de acord cu politica de confidențialitate JCI. Datele tale medicale sunt criptate."}
              </p>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default ConsultationModal;
