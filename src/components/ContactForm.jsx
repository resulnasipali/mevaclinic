import React, { useState } from 'react';
import { Send, Globe, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { useLocation } from 'react-router-dom';
import MedicalFileUpload from './MedicalFileUpload';
import { pushToDataLayer } from '../utils/AnalyticsUtils';

const ContactForm = ({ isEn: isEnProp }) => {
  const location = useLocation();
  const isEn = isEnProp ?? location.pathname.startsWith('/en');

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
    { code: '+40', name: isEn ? 'Romania' : 'România' },
    { code: '+44', name: 'UK' },
    { code: '+49', name: 'Germany' },
    { code: '+33', name: 'France' },
    { code: '+39', name: 'Italy' },
    { code: '+34', name: 'Spain' },
    { code: '+90', name: isEn ? 'Turkey' : 'Turcia' },
    { code: '+1', name: 'USA/Canada' },
    { code: '+31', name: 'Netherlands' },
    { code: '+32', name: 'Belgium' },
    { code: '+353', name: 'Ireland' },
    { code: '+41', name: 'Switzerland' },
    { code: '+971', name: 'UAE' },
    { code: '+966', name: 'Saudi Arabia' }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
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
              <h3 className="text-2xl font-serif font-bold text-prime">{isEn ? "Direct Inquiry" : "Cerere Directă"}</h3>
              <p className="text-[10px] font-bold text-gray-600 uppercase tracking-widest">{isEn ? "Global Clinical Access" : "Acces Clinic Global"}</p>
           </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="full-name" className="block text-xs font-bold text-gray-600 uppercase tracking-widest mb-2">{isEn ? "Full Name" : "Nume Complet"}</label>
              <input 
                id="full-name"
                type="text" 
                required 
                className="w-full px-5 py-4 rounded-2xl bg-gray-50 border border-gray-100 focus:border-accent outline-none transition-all font-medium"
                placeholder={isEn ? "John Doe" : "Popescu Andrei"}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
              />
            </div>
            <div>
              <label htmlFor="email-address" className="block text-xs font-bold text-gray-600 uppercase tracking-widest mb-2">{isEn ? "Email Address" : "Adresă Email"}</label>
              <input 
                id="email-address"
                type="email" 
                required 
                className="w-full px-5 py-4 rounded-2xl bg-gray-50 border border-gray-100 focus:border-accent outline-none transition-all font-medium"
                placeholder="office@example.com"
                onChange={(e) => setFormData({...formData, email: e.target.value})}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="phone-number" className="block text-xs font-bold text-gray-600 uppercase tracking-widest mb-2">{isEn ? "Phone (WhatsApp)" : "Telefon (WhatsApp)"}</label>
              <div className="flex items-center gap-0 border border-gray-100 rounded-2xl bg-gray-50 overflow-hidden focus-within:border-accent transition-all">
                 <label htmlFor="country-select" className="sr-only">Country Code</label>
                 <select 
                   id="country-select"
                   className="pl-4 pr-2 py-4 bg-transparent outline-none text-sm font-bold border-r border-gray-200 cursor-pointer"
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
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                />
              </div>
            </div>
            <div>
              <label htmlFor="treatment-area" className="block text-xs font-bold text-gray-600 uppercase tracking-widest mb-2">{isEn ? "Treatment Area" : "Aria de Tratament"}</label>
              <select 
                id="treatment-area"
                className="w-full px-5 py-4 rounded-2xl bg-gray-50 border border-gray-100 focus:border-accent outline-none transition-all text-gray-700 font-medium cursor-pointer"
                onChange={(e) => setFormData({...formData, treatment: e.target.value})}
                required
              >
                 <option value="">{isEn ? "Choose an option..." : "Alege o opțiune..."}</option>
                  <option value="oncology">{isEn ? 'Oncology' : 'Oncologie'}</option>
                  <option value="bariatric">{isEn ? 'Bariatric Surgery' : 'Chirurgie Bariatrică'}</option>
                  <option value="hair">{isEn ? 'Hair Transplant' : 'Implant Păr'}</option>
                  <option value="dental">{isEn ? 'Dental Implants' : 'Implanturi Dentare'}</option>
                  <option value="plastic">{isEn ? 'Plastic Surgery' : 'Chirurgie Plastică'}</option>
                  <option value="ivf">{isEn ? 'IVF / In-Vitro Fertilization' : 'FIV / Fertilizare In Vitro'}</option>
               </select>

               {/* IVF Cyprus note — shown only when IVF is selected */}
               {isIVF && (
                 <div
                   role="note"
                   aria-live="polite"
                   className="mt-2 flex items-start gap-2 px-4 py-3 rounded-xl bg-blue-50 border border-blue-100"
                 >
                   <span className="text-blue-400 mt-0.5 shrink-0" aria-hidden="true">ℹ️</span>
                   <p className="text-[11px] italic text-blue-600 leading-relaxed">
                     {isEn
                       ? 'Note: Our IVF treatments are performed at our specialized branch in Northern Cyprus.'
                       : 'Notă: Tratamentele noastre IVF sunt efectuate la sucursala noastră specializată din Ciprul de Nord.'}
                   </p>
                 </div>
               )}
            </div>
          </div>

          <div>
            <label htmlFor="medical-background" className="block text-xs font-bold text-gray-600 uppercase tracking-widest mb-2">{isEn ? "Medical Background" : "Istoric Medical"}</label>
            <textarea 
              id="medical-background"
              className="w-full px-5 py-4 rounded-2xl bg-gray-50 border border-gray-100 focus:border-accent outline-none transition-all h-32 resize-none text-gray-700 font-medium"
              placeholder={isEn ? "Briefly describe your condition..." : "Descrieți pe scurt afecțiunea dvs..."}
              onChange={(e) => setFormData({...formData, message: e.target.value})}
            />
          </div>

          {/* --- Medical File Upload --- */}
          <MedicalFileUpload isEn={isEn} onFilesChange={setUploadedFiles} />

          <button 
            type="submit"
            className="w-full bg-prime text-white font-bold py-5 rounded-2xl shadow-xl flex items-center justify-center gap-3 hover:bg-accent hover:text-prime transition-all text-lg"
          >
             {isEn ? "Send Secure Message" : "Trimite Mesaj Securizat"} <CheckCircle2 size={20} />
          </button>

          <div className="flex items-center justify-center gap-6 opacity-60">
             <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-gray-600">
                <ShieldCheck size={14} /> HIPAA Compliant
             </div>
             <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-gray-600">
                <Globe size={14} /> Worldwide Service
             </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
