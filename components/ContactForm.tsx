'use client';

// @ts-nocheck
import React, { useState } from 'react';
import { Send, Globe, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { usePathname } from 'next/navigation';
import MedicalFileUpload from './MedicalFileUpload';
import { pushToDataLayer } from '../utils/AnalyticsUtils';
import { tUI } from '@/utils/uiTranslations';

const ContactForm = ({ isEn: isEnProp, lang = 'en' }: any) => {
  const pathname = usePathname();
  const isEn = isEnProp ?? (pathname || "/").startsWith('/en');

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    treatment: '',
    message: ''
  });
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [selectedCode, setSelectedCode] = useState('+40');
  const isIVF = formData.treatment === 'ivf';

  const countryCodes = [
    { code: '+40', name: tUI("Romania", lang) },
    { code: '+44', name: 'UK' },
    { code: '+49', name: 'Germany' },
    { code: '+33', name: 'France' },
    { code: '+39', name: 'Italy' },
    { code: '+34', name: 'Spain' },
    { code: '+90', name: tUI("Turkey", lang) },
    { code: '+1', name: 'USA/Canada' },
    { code: '+31', name: 'Netherlands' },
    { code: '+32', name: 'Belgium' },
    { code: '+353', name: 'Ireland' },
    { code: '+41', name: 'Switzerland' },
    { code: '+971', name: 'UAE' },
    { code: '+966', name: 'Saudi Arabia' }
  ];

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const fullPhone = `${selectedCode} ${formData.phone}`;

    // CRM & Email Integration
    fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        type: 'contact',
        name: formData.name,
        email: formData.email,
        phone: fullPhone,
        procedure: formData.treatment,
        message: formData.message
      })
    }).catch(err => console.error('Failed to send message:', err));

    import('../utils/pixel').then(({ PxTrack }) => {
      PxTrack('Lead', {
        form_location: 'ContactPage',
        selectedCode,
        fileCount: uploadedFiles.length,
        ...formData
      });
      pushToDataLayer('generate_lead', { form_location: 'contact_page' });
      pushToDataLayer('form_submission_success', { form_location: 'contact_page' });
      alert(isEn
        ? `Message Sent! A clinical consultant will contact you shortly.${
            uploadedFiles.length > 0 ? ` (${uploadedFiles.length} file(s) attached)` : ''
          }`
        : `Mesaj Trimis! Un consultant clinic te va contacta în scurt timp.${
            uploadedFiles.length > 0 ? ` (${uploadedFiles.length} fișier(e) atașat(e))` : ''
          }`
      );
      setFormData({ name: '', email: '', phone: '', treatment: '', message: '' });
    });
  };

  return (
    <div className="bg-white rounded-[3rem] shadow-2xl p-8 md:p-12 border border-gray-100 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-full blur-3xl -mr-16 -mt-16"></div>
      
      <div className="relative z-10">
        <div className="flex items-center gap-3 mb-8">
           <div className="w-12 h-12 rounded-xl bg-prime flex items-center justify-center text-accent shadow-lg">
              <Send size={24} />
           </div>
           <div>
              <h3 className="text-2xl font-serif font-bold text-prime">{tUI("Direct Inquiry", lang)}</h3>
              <p className="text-[10px] font-bold text-gray-600 uppercase tracking-widest">{tUI("Global Clinical Access", lang)}</p>
           </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="full-name" className="block text-xs font-bold text-gray-600 uppercase tracking-widest mb-2">{tUI("Full Name", lang)}</label>
              <input 
                id="full-name"
                type="text" 
                required 
                className="w-full px-5 py-4 rounded-2xl bg-gray-50 border border-gray-100 focus:border-accent outline-none transition-all font-medium"
                placeholder={tUI("John Doe", lang)}
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
              />
            </div>
            <div>
              <label htmlFor="email-address" className="block text-xs font-bold text-gray-600 uppercase tracking-widest mb-2">{tUI("Email Address", lang)}</label>
              <input 
                id="email-address"
                type="email" 
                required 
                className="w-full px-5 py-4 rounded-2xl bg-gray-50 border border-gray-100 focus:border-accent outline-none transition-all font-medium"
                placeholder="office@example.com"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="phone-number" className="block text-xs font-bold text-gray-600 uppercase tracking-widest mb-2">{tUI("Phone (WhatsApp)", lang)}</label>
              <div className="flex items-center gap-0 border border-gray-100 rounded-2xl bg-gray-50 overflow-hidden focus-within:border-accent transition-all">
                 <label htmlFor="country-select" className="sr-only">Country Code</label>
                 <select 
                   id="country-select"
                   className="w-[90px] pl-4 pr-2 py-4 bg-transparent outline-none text-sm font-bold border-r border-gray-200 cursor-pointer"
                   onChange={(e) => setSelectedCode(e.target.value)}
                   value={selectedCode}
                 >
                    {countryCodes.map(c => (
                      <option key={c.code} value={c.code}>{c.code} ({c.name})</option>
                    ))}
                 </select>
                 <input 
                  id="phone-number"
                  type="tel" 
                  required 
                  aria-label="Phone Number Input"
                  className="flex-grow px-5 py-4 bg-transparent outline-none font-medium"
                  placeholder="7xx xxx xxx"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                />
              </div>
            </div>
            <div>
              <label htmlFor="treatment-area" className="block text-xs font-bold text-gray-600 uppercase tracking-widest mb-2">{tUI("Treatment Area", lang)}</label>
              <select 
                id="treatment-area"
                className="w-full px-5 py-4 rounded-2xl bg-gray-50 border border-gray-100 focus:border-accent outline-none transition-all text-gray-700 font-medium cursor-pointer"
                value={formData.treatment}
                onChange={(e) => setFormData({...formData, treatment: e.target.value})}
                required
              >
                 <option value="">{tUI("Choose an option...", lang)}</option>
                  <option value="bariatric">{tUI("Bariatric Surgery", lang)}</option>
                  <option value="hair">{tUI("Hair Transplant", lang)}</option>
                  <option value="eyebrow">{tUI("Eyebrow Transplant", lang)}</option>
                  <option value="dental">{tUI("Dental Care", lang)}</option>
                  <option value="plastic">{tUI("Plastic Surgery", lang)}</option>
                  <option value="ivf">{tUI("IVF / In-Vitro Fertilization", lang)}</option>
                  <option value="organ-transplant">{tUI("Organ Transplant", lang)}</option>
                  <option value="oncology">{tUI("Oncology", lang)}</option>
                  <option value="andrology">{tUI("Andrology & Men's Health", lang)}</option>
                  <option value="special">{tUI("Special Treatments", lang)}</option>
                  <option value="other">{tUI("Other", lang)}</option>
               </select>

               {isIVF && (
                 <div
                   role="note"
                   aria-live="polite"
                   className="mt-2 flex items-start gap-2 px-4 py-3 rounded-xl bg-blue-50 border border-blue-100"
                 >
                   <span className="text-blue-400 mt-0.5 shrink-0" aria-hidden="true">ℹ️</span>
                   <p className="text-[11px] italic text-blue-600 leading-relaxed">
                     {tUI("Note: Our IVF treatments are performed at our specialized branch in Northern Cyprus.", lang)}
                   </p>
                 </div>
               )}
            </div>
          </div>

          <div>
            <label htmlFor="medical-background" className="block text-xs font-bold text-gray-600 uppercase tracking-widest mb-2">{tUI("Medical Background", lang)}</label>
            <textarea 
              id="medical-background"
              className="w-full px-5 py-4 rounded-2xl bg-gray-50 border border-gray-100 focus:border-accent outline-none transition-all h-32 resize-none text-gray-700 font-medium"
              placeholder={tUI("Briefly describe your condition...", lang)}
              value={formData.message}
              onChange={(e) => setFormData({...formData, message: e.target.value})}
            />
          </div>

          <MedicalFileUpload isEn={isEn} onFilesChange={setUploadedFiles} />

          <button 
            type="submit"
            className="w-full bg-prime text-white font-bold py-5 rounded-2xl shadow-xl flex items-center justify-center gap-3 hover:bg-accent hover:text-prime transition-all text-lg"
          >
             {tUI("Send Secure Message", lang)} <CheckCircle2 size={20} />
          </button>

          <div className="flex flex-col items-center justify-center gap-3 mt-4 border-t border-gray-50 pt-5">
             <div className="flex items-center justify-center gap-6 opacity-60">
                 <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-gray-600">
                    <ShieldCheck size={14} /> {lang === 'ro' ? "Date Securizate" : "Secure Handling"}
                 </div>
                <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-gray-600">
                   <Globe size={14} /> Worldwide Service
                </div>
             </div>
              <div className="flex flex-wrap justify-center items-center gap-3 text-[10px] font-bold text-prime mt-2">
                <span className="flex items-center gap-1"><span className="text-accent">✓</span> {
                  lang === 'ro' ? "Căi Spitalicești Partenere Acreditate" 
                  : lang === 'es' ? "Vías de Hospitales Socios Acreditados"
                  : lang === 'it' ? "Percorsi Ospedalieri Partner Accreditati"
                  : lang === 'de' ? "Akkreditierte Partnerklinikpfade"
                  : lang === 'fr' ? "Parcours Hospitaliers Partenaires Accrédités"
                  : lang === 'ru' ? "Аккредитованные Сети Клиник-Партнеров"
                  : "Accredited Partner Hospital Pathways"
                }</span>
                <span className="w-1 h-1 rounded-full bg-gray-200"></span>
                <span className="flex items-center gap-1"><span className="text-accent">✓</span> {
                  lang === 'ro' ? "Coordonare Premium Pacienți" 
                  : lang === 'es' ? "Coordinación Premium de Pacientes"
                  : lang === 'it' ? "Coordinamento Premium dei Pazienti"
                  : lang === 'de' ? "Premium-Patientenkoordination"
                  : lang === 'fr' ? "Coordination Premium des Patients"
                  : lang === 'ru' ? "Премиум-Координация Пациентов"
                  : "Premium Patient Coordination"
                }</span>
                <span className="w-1 h-1 rounded-full bg-gray-200"></span>
                <span className="flex items-center gap-1"><span className="text-accent">✓</span> {
                  lang === 'ro' ? "Evaluare Inițială Gratuită" 
                  : lang === 'es' ? "Evaluación Inicial Gratuita"
                  : lang === 'it' ? "Valutazione Iniziale Gratuita"
                  : lang === 'de' ? "Kostenlose Erstbewertung"
                  : lang === 'fr' ? "Évaluation Initiale Gratuite"
                  : lang === 'ru' ? "Бесплатная Первичная Оценка"
                  : "Free Initial Assessment"
                }</span>
              </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
