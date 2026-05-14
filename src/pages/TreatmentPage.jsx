import React, { useEffect } from 'react';
import { useParams, Link, useLocation } from 'react-router-dom';
import { ArrowLeft, CheckCircle, Clock, Calendar, Activity, Shield } from 'lucide-react';
import { CertRow } from '../components/ClinicalBadges';
import treatmentData from '../data/treatmentDetails.json';
import DynamicSEO from '../components/DynamicSEO';
import BmiCalculator from '../components/BmiCalculator';
import ExpertBadge from '../components/ExpertBadge';
import PatientJourneyTimeline from '../components/PatientJourneyTimeline';
import { PxTrack } from '../utils/pixel';
import { pushToDataLayer } from '../utils/AnalyticsUtils';

const TreatmentPage = () => {
  const { slug } = useParams();
  const location = useLocation();
  const isEn = location.pathname.startsWith('/en');
  const treatment = treatmentData.find(t => t.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (treatment) {
       PxTrack('ViewContent', { content_type: 'treatment_page', content_name: isEn ? (treatment.title_en || treatment.title) : treatment.title });
    }
  }, [slug, treatment, isEn]);

  if (!treatment) {
    return (
      <div className="pt-40 min-h-screen text-center text-prime font-serif text-3xl font-bold bg-white">
        {isEn ? "Error. Treatment Not Found." : "Eroare. Tratament Inexistent."}
      </div>
    );
  }

  const title = isEn ? (treatment.title_en || treatment.title) : treatment.title;
  const subtitle = isEn ? (treatment.subtitle_en || treatment.subtitle) : treatment.subtitle;
  const description = isEn ? (treatment.description_en || treatment.description) : treatment.description;
  const details = isEn ? (treatment.details_en || treatment.details) : treatment.details;

  return (
    <div className="bg-white min-h-screen selection:bg-accent/20">
      <DynamicSEO 
        title={`${title} - Meva Clinic Istanbul`}
        description={description.substring(0, 150) + '...'}
        path={isEn ? `/en/${treatment.slug}` : `/ro/${treatment.slug}`}
        schemaType="MedicalProcedure"
      />

      {/* Hero Banner Module */}
      <div className="relative pt-32 pb-24 lg:pt-48 lg:pb-32 bg-[#0b1626] overflow-hidden">
         <div className="absolute inset-0 w-full h-full">
          <img src={treatment.heroImage} width="1920" height="1080" loading="eager" fetchpriority="high" aria-label={isEn ? `Clinical procedure ${title}` : `Procedură clinică ${treatment.title}`} className="w-full h-full object-cover opacity-20 transform scale-105" alt={isEn ? `Clinical procedure ${title}` : `Procedură clinică ${treatment.title}`} />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0b1626] via-[#0b1626]/80 to-transparent"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-[#0b1626] to-transparent"></div>
         </div>
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-white">
            <Link to={isEn ? "/en#tratamente" : "/ro#tratamente"} className="inline-flex items-center text-xs font-bold text-accent hover:text-white uppercase tracking-widest mb-6 transition-colors">
               <ArrowLeft size={16} className="mr-2" /> {isEn ? "Back to Services" : "Înapoi la Servicii"}
            </Link>
            <h1 className="text-4xl md:text-6xl font-serif font-bold mb-4 drop-shadow-lg leading-tight w-full lg:w-2/3">{title}</h1>
            <p className="text-xl text-gray-300 font-sans max-w-2xl border-l-4 border-accent pl-4 font-medium">{subtitle}</p>
            
            <a href="#calculator" className="mt-8 inline-flex items-center justify-center bg-accent hover:bg-yellow-500 text-prime font-bold py-3.5 px-8 rounded-xl transition-all shadow-[0_10px_30px_rgba(212,175,55,0.3)]">
               {isEn ? "Check Eligibility" : "Verifică Eligibilitatea"} <Activity size={18} className="ml-2" />
            </a>
         </div>
      </div>

      {/* Details Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
         <div className="flex flex-col lg:flex-row gap-12">
            
            {/* Copywriting Section */}
            <div className="lg:w-7/12 prose prose-lg prose-blue">
               <div className="text-xs uppercase tracking-widest font-bold text-prime/50 mb-2">{isEn ? "About Procedure" : "Despre Procedură"}</div>
               <h2 className="text-3xl font-serif font-bold text-prime mb-3">{isEn ? `JCI International Expertise in ${title.split(' ')[0]}` : `Expertiză Internațională JCI în ${treatment.title.split(' ')[0]}`}</h2>
               <ExpertBadge isEn={isEn} />
               <p className="text-gray-600 font-sans leading-relaxed text-lg mb-8">{description}</p>
               
               <div className="bg-gray-50 border border-gray-100 rounded-3xl p-8 mb-8">
                  <h3 className="text-xl font-serif font-bold text-prime mb-6 text-center">{isEn ? "Meva VIP Package Guarantee" : "Garanția Pachetului VIP Meva"}</h3>
                  <ul className="space-y-4">
                     {(isEn ? 
                        ['JCI Accredited Hospital with full Intensive Care.', 'Native English-speaking clinical support available 24/7.', 'Premium Transfers (Airport - Hotel - Clinic).', 'Pre-operative analysis and post-operative treatment included.'] :
                        ['Spital Acreditat JCI cu Terapie Intensivă completă.', 'Protocol Translatori Nativi de Limba Română disponibil 24/7.', 'Transferuri Premium (Aeroport - Hotel - Clinică).', 'Analize pre-operatorii și tratament post-operator incluse.']
                     ).map((point, i) => (
                       <li key={i} className="flex items-start text-gray-600 font-sans text-sm font-medium">
                         <CheckCircle size={20} className="text-[#25D366] shrink-0 mr-3 mt-0.5" />
                         <span>{point}</span>
                       </li>
                     ))}
                  </ul>
               </div>
               
               <a href="https://wa.me/905324675941" target="_blank" rel="noreferrer" onClick={() => pushToDataLayer('whatsapp_click', { location: 'treatment_page_cta' })} className="w-full bg-[#112440] hover:bg-prime text-white py-4 rounded-xl flex items-center justify-center font-bold text-sm shadow-xl transition-colors">
                  {isEn ? "Get Quote" : "Obține Preț"}
               </a>
            </div>
            
            {/* Specs Widget */}
            <div className="lg:w-5/12">
               <div className="bg-prime text-white rounded-3xl p-8 shadow-2xl sticky top-32 border border-white/5">
                  <h3 className="font-serif font-bold text-2xl mb-6 text-accent border-b border-white/10 pb-4">{isEn ? "Technical Intervention Details" : "Detalii Tehnice Intervenție"}</h3>
                  
                  <div className="space-y-6">
                     <div className="flex items-center">
                        <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center mr-4 text-accent shrink-0"><Calendar size={20} /></div>
                        <div>
                          <p className="text-xs uppercase tracking-widest font-bold text-gray-400">{isEn ? "Hospital Stay" : "Spitalizare Procedură"}</p>
                          <p className="font-medium">{details.hospitalStay}</p>
                        </div>
                     </div>
                     <div className="flex items-center">
                        <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center mr-4 text-accent shrink-0"><CheckCircle size={20} /></div>
                        <div>
                          <p className="text-xs uppercase tracking-widest font-bold text-gray-400">{isEn ? "Holiday Package" : "Pachet Turistic"}</p>
                          <p className="font-medium">{details.hotelStay}</p>
                        </div>
                     </div>
                     <div className="flex items-center">
                        <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center mr-4 text-accent shrink-0"><Clock size={20} /></div>
                        <div>
                          <p className="text-xs uppercase tracking-widest font-bold text-gray-400">{isEn ? "Active Recovery" : "Recuperare Activa"}</p>
                          <p className="font-medium">{details.returnToWork}</p>
                        </div>
                     </div>
                  </div>
                  {/* Scientific References Section */}
                  {treatment.scientificReferences && (
                    <div className="mt-16 p-8 bg-white/5 rounded-3xl border border-white/10">
                      <h3 className="text-xs font-bold text-accent uppercase tracking-widest mb-4 flex items-center gap-2">
                        <div className="w-5 h-5 rounded-full bg-accent text-prime flex items-center justify-center text-[10px]">✓</div>
                        {isEn ? "Scientific Authority & Clinical References" : "Autoritate Științifică & Referințe Clinice"}
                      </h3>
                      <ul className="space-y-3">
                        {treatment.scientificReferences.map((ref, idx) => (
                          <li key={idx} className="text-xs text-gray-400 font-sans leading-relaxed flex gap-3">
                            <span className="text-accent font-bold">[{idx + 1}]</span>
                            {ref}
                          </li>
                        ))}
                      </ul>
                      <p className="mt-6 text-[10px] text-gray-500 font-medium italic">
                        {isEn 
                          ? "All treatments follow JCI-accredited clinical protocols and are reviewed by our medical board." 
                          : "Toate tratamentele urmează protocoale clinice acreditate JCI și sunt revizuite de consiliul nostru medical."}
                      </p>
                    </div>
                  )}
               </div>
            </div>
         </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
         <PatientJourneyTimeline isEn={isEn} />
      </div>

      {/* Embedded BMI Module */}
      <div id="calculator" className="bg-gray-50 py-16 border-t border-gray-100">
         <div className="text-center max-w-2xl mx-auto mb-10 px-4">
             <h2 className="text-3xl font-serif font-bold text-prime mb-3">{isEn ? "Are you a candidate for this clinic?" : "Esti candidat pentru această clinică?"}</h2>
             <p className="text-gray-500 font-sans">{isEn ? "Entering data takes 5 seconds. Use the official Meva calculator for rapid validation." : "Introducerea datelor durează 5 secunde. Folosește calculatorul oficial Meva pentru validare rapidă."}</p>
         </div>
         <BmiCalculator isEn={isEn} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
         <CertRow isEn={isEn} /> 
      </div>

    </div>
  );
};

export default TreatmentPage;
