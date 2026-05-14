import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import DynamicSEO from '../components/DynamicSEO';
import FAQSection from '../components/FAQSection';
import { Microscope, Activity, ShieldCheck } from 'lucide-react';
import { pushToDataLayer } from '../utils/AnalyticsUtils';

const FAQPage = () => {
  const location = useLocation();
  const isEn = location.pathname.startsWith('/en');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-gray-50 min-h-screen pt-40 pb-24">
      <DynamicSEO 
        title={isEn ? "Medical FAQ & Clinical Protocols | Meva Clinic Istanbul" : "FAQ Medical & Protocoale Clinice | Meva Clinic Istanbul"}
        description={isEn 
          ? "Comprehensive clinical FAQ on robotic surgery, CyberKnife oncology, and advanced aesthetic protocols. Expert answers for your medical journey." 
          : "Întrebări frecvente despre chirurgia robotică, oncologia CyberKnife și protocoale estetice avansate. Răspunsuri de la experți pentru pacienți."}
        path={isEn ? "/en/faq" : "/ro/faq"}
        schemaType="FAQPage"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-prime/5 border border-prime/10 text-prime text-xs font-bold uppercase tracking-widest mb-6">
            <Microscope size={14} className="text-accent" />
            {isEn ? "Clinical Knowledge Hub" : "Hub de Cunoștințe Clinice"}
          </div>
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-prime mb-6">
            {isEn ? "Expert Clinical Answers" : "Răspunsuri Clinice de la Experți"}
          </h1>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed">
            {isEn 
              ? "Everything you need to know about our technology, safety protocols, and recovery timelines in Istanbul." 
              : "Tot ce trebuie să știi despre tehnologia noastră, protocoalele de siguranță și timpii de recuperare în Istanbul."}
          </p>
        </div>

        {/* Global FAQ Component with Search */}
        <FAQSection isEn={isEn} />

        {/* Trust Footnote */}
        <div className="mt-24 p-8 rounded-3xl bg-prime text-white relative overflow-hidden shadow-2xl">
           <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl -mr-32 -mt-32"></div>
           <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="flex items-center gap-6">
                 <div className="w-16 h-16 rounded-2xl bg-accent/20 flex items-center justify-center shrink-0">
                    <ShieldCheck size={32} className="text-accent" />
                 </div>
                 <div>
                    <h3 className="text-xl font-serif font-bold mb-1">
                       {isEn ? "Clinical Transparency Guarantee" : "Garanția Transparenței Clinice"}
                    </h3>
                    <p className="text-gray-400 text-sm">
                       {isEn 
                         ? "All answers are reviewed by our multidisciplinary medical board and updated weekly." 
                         : "Toate răspunsurile sunt revizuite de consiliul nostru medical multidisciplinar și actualizate săptămânal."}
                    </p>
                 </div>
              </div>
              <a 
                href="https://wa.me/905324675941" 
                onClick={() => pushToDataLayer('whatsapp_click', { location: 'faq_page_cta' })}
                className="bg-accent hover:bg-white text-prime font-bold py-4 px-8 rounded-xl transition-all shadow-lg whitespace-nowrap"
                aria-label={isEn ? "Ask a specific question via WhatsApp" : "Puneți o întrebare specifică prin WhatsApp"}
              >
                 {isEn ? "Ask a Specific Question" : "Pune o Întrebare Specifică"}
              </a>
           </div>
        </div>
      </div>
    </div>
  );
};

export default FAQPage;
