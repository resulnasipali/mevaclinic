import React from 'react';
import { CheckCircle2, Star, ShieldCheck, Lock } from 'lucide-react';
import { useLeadContext } from '../context/LeadContext';
import { useLocation, Link } from 'react-router-dom';
import { pushToDataLayer } from '../utils/AnalyticsUtils';

const HeroSection = () => {
  const { bmiData } = useLeadContext();
  const location = useLocation();
  const isEn = location.pathname.startsWith('/en');
  const [heroTreatment, setHeroTreatment] = React.useState('');

  return (
    <section className="relative min-h-[90vh] md:min-h-screen flex items-center pt-20 overflow-hidden bg-[#0b1626]">
      {/* Background Image with Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=2000" 
          srcSet="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=800 800w, https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=2000 2000w"
          sizes="(max-width: 768px) 800px, 2000px"
          width="2000"
          height="1000"
          fetchpriority="high"
          loading="eager"
          alt="Meva Clinic Premium Facility" 
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0b1626] via-[#0b1626]/80 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#0b1626] via-transparent to-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8 relative z-10 w-full py-12 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start lg:items-center">
          
          {/* Content Column (7/12) */}
          <div className="lg:col-span-7 animate-fade-up">
            <div className="inline-flex items-center space-x-2 py-1.5 px-4 rounded-full bg-accent/10 text-accent text-xs font-bold tracking-widest uppercase mb-6 md:mb-8 border border-accent/20">
              <Star size={14} className="fill-accent" />
              <span>{isEn ? "Medical Excellence in Istanbul" : "Excelență Medicală în Istanbul"}</span>
            </div>
            
            <h1 className="text-3xl sm:text-5xl lg:text-7xl font-serif text-white font-bold leading-[1.2] md:leading-[1.1] mb-6 md:mb-8">
              {isEn ? "Transform your life with Meva Clinic – " : "Transformă-ți viața cu Meva Clinic – "}
              <span className="text-accent relative inline-block">
                {isEn ? "Top Expertise" : "Expertiză de Top"}
                <svg className="absolute w-full h-3 -bottom-1 left-0 text-accent/30" viewBox="0 0 100 10" preserveAspectRatio="none" aria-hidden="true">
                  <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="3" fill="transparent" />
                </svg>
              </span>
              {isEn ? " in Bariatric Surgery." : " în Chirurgia Bariatrică."}
            </h1>
            
            <p className="text-lg sm:text-xl text-gray-300 font-sans mb-10 leading-relaxed max-w-2xl border-l-4 border-accent pl-6">
              {isEn ? "Premium all-inclusive packages in Istanbul: Gastric Sleeve and Bypass with internationally renowned specialists." : "Pachete premium all-inclusive în Istanbul: Gastric Sleeve și Bypass cu specialiști de renume internațional."}
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm font-medium text-white/80">
               <div className="flex items-center gap-3">
                 <CheckCircle2 size={20} className="text-accent" />
                 <span>{isEn ? "VIP Transfer Included" : "Transfer VIP Inclus"}</span>
               </div>
               <div className="flex items-center gap-3">
                 <CheckCircle2 size={20} className="text-accent" />
                 <span>{isEn ? "5-Star Accommodation" : "Cazare 5 Stele"}</span>
               </div>
               <div className="flex items-center gap-3">
                 <CheckCircle2 size={20} className="text-accent" />
                 <span>{isEn ? "JCI Accredited Facility" : "Facilitate Acreditată JCI"}</span>
               </div>
               <div className="flex items-center gap-3">
                 <CheckCircle2 size={20} className="text-accent" />
                 <span>{isEn ? "Native Support (EN/RO)" : "Asistență Nativă (EN/RO)"}</span>
               </div>
            </div>
          </div>

          {/* Form Column (5/12) — order-last on mobile keeps H1 always above form */}
          <div className="lg:col-span-5 animate-fade-up [animation-delay:200ms] relative z-10">
            <div className="bg-white rounded-[2.5rem] shadow-2xl p-8 lg:p-10 border border-white/10 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-2 bg-accent"></div>

              <div className="flex justify-between items-start mb-6">
                 <h3 className="text-2xl font-serif font-bold text-prime">
                   {isEn ? "Free Consultation" : "Consultație Gratuită"}
                 </h3>
                 <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-green-50 text-green-700 border border-green-100">
                    <ShieldCheck size={14} />
                    <span className="text-[10px] font-bold uppercase tracking-widest">Secure</span>
                 </div>
              </div>
              
              <form 
                className="space-y-4" 
                aria-label={isEn ? "Free Consultation Form" : "Formular Consultație Gratuită"}
                onSubmit={(e) => {
                  e.preventDefault();
                  pushToDataLayer('generate_lead', { form_location: 'hero_section' });
                  pushToDataLayer('form_submission_success', { form_location: 'hero_section' });
                  alert(isEn ? "Thank you! We will contact you shortly." : "Mulțumim! Vă vom contacta în scurt timp.");
                }}
              >
                <div>
                  <label htmlFor="hero-name" className="block text-gray-700 text-xs font-bold uppercase tracking-wider mb-2">{isEn ? "Full Name *" : "Nume și Prenume *"}</label>
                  <input id="hero-name" type="text" className="w-full border border-gray-200 rounded-xl px-4 py-3.5 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-accent outline-none transition-all" placeholder={isEn ? "Your full name" : "Numele tău complet"} required autoComplete="name" />
                </div>

                <div>
                  <label htmlFor="hero-phone" className="block text-gray-700 text-xs font-bold uppercase tracking-wider mb-2">{isEn ? "Phone Number *" : "Număr Telefon *"}</label>
                  <div className="flex gap-2">
                    <label htmlFor="hero-phone-prefix" className="sr-only">{isEn ? "Country Code" : "Prefix Țară"}</label>
                    <select id="hero-phone-prefix" className="border border-gray-200 rounded-xl px-3 bg-gray-50 outline-none text-sm font-bold" aria-label={isEn ? "Country Code" : "Prefix Țară"}>
                      <option value="+40">+40</option>
                      <option value="+44">+44</option>
                      <option value="+90">+90</option>
                    </select>
                    <input id="hero-phone" type="tel" className="w-full border border-gray-200 rounded-xl px-4 py-3.5 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-accent outline-none transition-all" placeholder="7xx xxx xxx" required autoComplete="tel" />
                  </div>
                </div>

                <div>
                  <label htmlFor="hero-treatment" className="block text-gray-700 text-xs font-bold uppercase tracking-wider mb-2">{isEn ? "Treatment *" : "Tratament *"}</label>
                  <select
                    id="hero-treatment"
                    className="w-full border border-gray-200 rounded-xl px-4 py-3.5 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-accent outline-none transition-all appearance-none"
                    required
                    aria-required="true"
                    value={heroTreatment}
                    onChange={(e) => setHeroTreatment(e.target.value)}
                  >
                    <option value="">{isEn ? 'Select Treatment...' : 'Selectează Tratament...'}</option>
                    <option value="gastric-sleeve">Gastric Sleeve</option>
                    <option value="gastric-bypass">Gastric Bypass</option>
                    <option value="gastric-balloon">Gastric Balloon</option>
                    <option value="hair-transplant">Hair Transplant</option>
                    <option value="dental-implants">Dental Implants</option>
                    <option value="ivf">{isEn ? 'IVF / In-Vitro Fertilization' : 'FIV / Fertilizare In Vitro'}</option>
                  </select>

                  {/* IVF Cyprus note */}
                  {heroTreatment === 'ivf' && (
                    <div role="note" aria-live="polite" className="mt-2 flex items-start gap-2 px-3 py-2.5 rounded-xl bg-blue-50 border border-blue-100">
                      <span className="text-blue-400 mt-0.5 shrink-0 text-xs" aria-hidden="true">ℹ️</span>
                      <p className="text-[11px] italic text-blue-600 leading-relaxed">
                        {isEn
                          ? 'Note: Our IVF treatments are performed at our specialized branch in Northern Cyprus.'
                          : 'Notă: Tratamentele noastre IVF sunt efectuate la sucursala noastră specializată din Ciprul de Nord.'}
                      </p>
                    </div>
                  )}
                </div>

                <div className="pt-4">
                  <button type="submit" aria-label={isEn ? "Submit consultation request" : "Trimite cererea de consultație"} className="w-full bg-prime hover:bg-[#112440] text-white font-bold py-5 rounded-xl shadow-xl transition-all hover:-translate-y-1 active:scale-95 flex justify-center items-center gap-2">
                    {isEn ? "Get Your Quote Now" : "Obține Devizul Acum"}
                  </button>
                </div>

                <div className="flex items-center justify-center gap-4 mt-4 opacity-40" aria-hidden="true">
                   <div className="flex items-center gap-1 text-[9px] font-bold text-gray-500 uppercase tracking-widest">
                      <Lock size={10} /> HIPAA Compliant
                   </div>
                   <div className="flex items-center gap-1 text-[9px] font-bold text-gray-500 uppercase tracking-widest">
                      <ShieldCheck size={10} /> GDPR Ready
                   </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
