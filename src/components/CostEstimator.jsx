import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { ArrowRight, Lock, ChevronDown, DollarSign, Plus } from 'lucide-react';
import { pushToDataLayer } from '../utils/AnalyticsUtils';

const treatments = [
  { id: 'hair', labelRo: 'Implant de Păr (FUE/DHI)', labelEn: 'Hair Transplant (FUE/DHI)', minPrice: 1500, maxPrice: 3500 },
  { id: 'bariatric', labelRo: 'Chirurgie Bariatrică (Sleeve/Bypass)', labelEn: 'Bariatric Surgery (Sleeve/Bypass)', minPrice: 3500, maxPrice: 6500 },
  { id: 'dental', labelRo: 'Implant Dentar / Hollywood Smile', labelEn: 'Dental Implants / Hollywood Smile', minPrice: 800, maxPrice: 4500 },
  { id: 'plastic', labelRo: 'Chirurgie Plastică (Rinoplastie/Lifting)', labelEn: 'Plastic Surgery (Rhinoplasty/Facelift)', minPrice: 2000, maxPrice: 5500 },
  { id: 'oncology', labelRo: 'Oncologie CyberKnife', labelEn: 'CyberKnife Oncology', minPrice: 8000, maxPrice: 20000 },
  { id: 'transplant', labelRo: 'Transplant Organe', labelEn: 'Organ Transplant', minPrice: 35000, maxPrice: 80000 }
];

const addons = [
  { id: 'hotel3', labelRo: 'Hotel 3★ (5 nopți)', labelEn: 'Hotel 3★ (5 nights)', price: 350 },
  { id: 'hotel5', labelRo: 'Hotel 5★ (5 nopți)', labelEn: 'Hotel 5★ (5 nights)', price: 900 },
  { id: 'transfer', labelRo: 'Transfer VIP Aeroport', labelEn: 'VIP Airport Transfer', price: 120 },
  { id: 'translator', labelRo: 'Translator Dedicat (RO)', labelEn: 'Dedicated Translator', price: 200 },
  { id: 'companion', labelRo: 'Cameră însoțitor', labelEn: 'Companion Room', price: 300 }
];

const CostEstimator = () => {
  const location = useLocation();
  const isEn = location.pathname.startsWith('/en');

  const [selectedTreatment, setSelectedTreatment] = useState('');
  const [selectedAddons, setSelectedAddons] = useState([]);
  const [email, setEmail] = useState('');
  const [unlocked, setUnlocked] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const treatment = treatments.find(t => t.id === selectedTreatment);
  const addonTotal = selectedAddons.reduce((sum, id) => {
    const a = addons.find(a => a.id === id);
    return sum + (a ? a.price : 0);
  }, 0);

  const minTotal = treatment ? treatment.minPrice + addonTotal : addonTotal;
  const maxTotal = treatment ? treatment.maxPrice + addonTotal : addonTotal;

  const toggleAddon = (id) => {
    setSelectedAddons(prev => prev.includes(id) ? prev.filter(a => a !== id) : [...prev, id]);
  };

  const handleUnlock = (e) => {
    e.preventDefault();
    const payload = { email, treatment: selectedTreatment, addons: selectedAddons, estimatedRange: `€${minTotal} - €${maxTotal}`, timestamp: new Date().toISOString() };
    console.log('[MEVA CRM PRICE LEAD]', payload);
    pushToDataLayer('generate_lead', { form_location: 'cost_estimator' });
    pushToDataLayer('form_submission_success', { form_location: 'cost_estimator' });
    setSubmitted(true);
    setUnlocked(true);
  };

  return (
    <div className="bg-white rounded-3xl border border-gray-100 shadow-[0_10px_40px_rgba(0,0,0,0.06)] overflow-hidden">
      {/* Header */}
      <div className="bg-[#0b1626] px-7 py-6">
        <div className="flex items-center gap-2 mb-1">
          <DollarSign size={16} className="text-accent" />
          <span className="text-xs font-bold text-accent uppercase tracking-widest">
            {isEn ? 'Cost Estimator' : 'Estimator Costuri'}
          </span>
        </div>
        <h3 className="text-2xl font-serif font-bold text-white">
          {isEn ? 'Build Your Package' : 'Configurează Pachetul Tău'}
        </h3>
        <p className="text-sm text-gray-400 mt-1">
          {isEn ? 'Select your treatment and add-ons to see an estimated range.' : 'Selectați tratamentul și opțiunile pentru a vedea o estimare de preț.'}
        </p>
      </div>

      <div className="p-7 space-y-6">
        {/* Step 1: Treatment */}
        <div>
          <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-3">
            {isEn ? '1. Select Treatment' : '1. Selectează Tratamentul'}
          </label>
          <div className="relative">
            <select
              value={selectedTreatment}
              onChange={e => setSelectedTreatment(e.target.value)}
              className="w-full appearance-none bg-gray-50 border border-gray-200 rounded-xl p-4 pr-10 text-sm font-medium text-gray-700 focus:outline-none focus:border-accent transition-colors cursor-pointer"
            >
              <option value="">{isEn ? '— Choose a procedure —' : '— Alege o procedură —'}</option>
              {treatments.map(t => (
                <option key={t.id} value={t.id}>{isEn ? t.labelEn : t.labelRo}</option>
              ))}
            </select>
            <ChevronDown size={16} className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
          </div>
        </div>

        {/* Step 2: Add-ons */}
        <div>
          <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-3">
            {isEn ? '2. Add-on Options' : '2. Opțiuni Suplimentare'}
          </label>
          <div className="grid grid-cols-1 gap-2">
            {addons.map(a => (
              <label key={a.id} className={`flex items-center justify-between p-3 rounded-xl border cursor-pointer transition-all ${selectedAddons.includes(a.id) ? 'border-accent bg-accent/5' : 'border-gray-100 bg-gray-50 hover:border-gray-200'}`}>
                <div className="flex items-center gap-3">
                  <div className={`w-5 h-5 rounded-md border-2 flex items-center justify-center transition-all ${selectedAddons.includes(a.id) ? 'border-accent bg-accent' : 'border-gray-300'}`}>
                    {selectedAddons.includes(a.id) && <svg className="w-3 h-3 text-[#0b1626]" viewBox="0 0 12 12" fill="none"><path d="M2 6l3 3 5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>}
                  </div>
                  <span className="text-sm font-medium text-gray-700">{isEn ? a.labelEn : a.labelRo}</span>
                </div>
                <span className="text-sm font-bold text-prime">+€{a.price}</span>
                <input type="checkbox" className="hidden" checked={selectedAddons.includes(a.id)} onChange={() => toggleAddon(a.id)} />
              </label>
            ))}
          </div>
        </div>

        {/* Estimated range display */}
        {selectedTreatment && (
          <div className="bg-gray-50 rounded-2xl p-5 border border-gray-100">
            <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">
              {isEn ? 'Estimated Package Range' : 'Estimare Pachet'}
            </p>
            <div className="flex items-end gap-2">
              <span className={`text-3xl font-serif font-bold text-prime transition-all ${unlocked ? '' : 'blur-sm select-none'}`}>
                €{minTotal.toLocaleString()} – €{maxTotal.toLocaleString()}
              </span>
              {!unlocked && <Lock size={18} className="text-gray-400 mb-1" />}
            </div>
            <p className="text-xs text-gray-400 mt-1">
              {isEn ? '* Indicative range. Final quote provided after clinical evaluation.' : '* Estimare orientativă. Oferta finală după evaluarea clinică.'}
            </p>
          </div>
        )}

        {/* Email gate / unlock */}
        {!unlocked ? (
          <form onSubmit={handleUnlock}>
            <p className="text-xs text-gray-500 mb-3 flex items-center gap-1.5">
              <Lock size={12} className="text-accent" />
              {isEn ? 'Enter your email to unlock the full price breakdown.' : 'Introduceți emailul pentru a debloca lista completă de prețuri.'}
            </p>
            <div className="flex gap-2">
              <input
                type="email" required
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder={isEn ? 'your@email.com' : 'email@exemplu.com'}
                className="flex-grow bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-accent transition-colors"
              />
              <button type="submit" className="bg-accent hover:bg-yellow-400 text-[#0b1626] font-bold px-5 py-3 rounded-xl transition-all text-sm whitespace-nowrap flex items-center gap-1.5">
                <ArrowRight size={15} />
              </button>
            </div>
          </form>
        ) : (
          <div className="space-y-2">
            <a
              href={`https://wa.me/905324675941?text=${encodeURIComponent(isEn ? `Hello, I used the cost estimator and I'm interested in ${selectedTreatment}. Estimated: €${minTotal}-€${maxTotal}` : `Buna ziua, am folosit estimatorul de costuri pentru ${selectedTreatment}. Estimat: €${minTotal}-€${maxTotal}`)}`}
              onClick={() => pushToDataLayer('whatsapp_click', { location: 'cost_estimator_success' })}
              target="_blank" rel="noreferrer"
              className="flex items-center justify-center gap-2 w-full bg-[#25D366] hover:bg-green-500 text-white font-bold py-3.5 rounded-xl transition-all text-sm"
            >
              {isEn ? 'Confirm on WhatsApp' : 'Confirmă pe WhatsApp'} <ArrowRight size={15} />
            </a>
            <p className="text-center text-xs text-gray-400">
              {isEn ? 'Price list sent to your email.' : 'Lista de prețuri trimisă pe email.'}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CostEstimator;
