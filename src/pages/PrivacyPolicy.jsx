import React, { useEffect } from 'react';
import { ShieldCheck, Lock, Eye, FileText, Globe } from 'lucide-react';
import { useLocation } from 'react-router-dom';
import DynamicSEO from '../components/DynamicSEO';

const PrivacyPolicy = () => {
  const location = useLocation();
  const isEn = location.pathname.startsWith('/en');

  useEffect(() => window.scrollTo(0, 0), []);

  return (
    <div className="bg-white min-h-screen pt-40 pb-24">
      <DynamicSEO 
        title={isEn ? "Privacy Policy & Medical Data Protection | Meva Clinic" : "Politica de Confidențialitate și Protecția Datelor | Meva Clinic"}
        description={isEn ? "How we protect your medical and personal data under GDPR and KVKK standards. SSL encryption and secure clinical evaluation protocols." : "Cum protejăm datele tale medicale și personale conform standardelor GDPR și KVKK. Criptare SSL și protocoale securizate de evaluare clinică."}
        path={isEn ? "/en/privacy-policy" : "/ro/politica-confidentialitate"}
      />

      <div className="max-w-4xl mx-auto px-6">
        <div className="flex items-center gap-4 mb-8">
           <div className="w-12 h-12 rounded-2xl bg-accent/10 flex items-center justify-center text-accent">
              <ShieldCheck size={28} />
           </div>
           <h1 className="text-4xl font-serif font-bold text-prime">
              {isEn ? "Privacy & Data Protection" : "Confidențialitate și Protecția Datelor"}
           </h1>
        </div>

        <div className="prose prose-lg max-w-none text-gray-600 font-sans leading-relaxed space-y-12">
           <section>
              <h2 className="text-2xl font-serif font-bold text-prime mb-4 flex items-center gap-2">
                 <Lock size={20} className="text-accent" />
                 {isEn ? "1. Data Collection & Clinical Evaluation" : "1. Colectarea Datelor și Evaluarea Clinică"}
              </h2>
              <p>
                {isEn 
                  ? "At Meva Clinic, we process your personal and medical data exclusively for the purpose of clinical evaluation and providing medical tourism services. This includes your name, contact details, and any medical history shared via our Suitability Quiz or Consultation forms." 
                  : "La Meva Clinic, prelucrăm datele tale personale și medicale exclusiv în scopul evaluării clinice și furnizării serviciilor de turism medical. Aceasta include numele, datele de contact și istoricul medical partajat prin formularele noastre."}
              </p>
           </section>

           <section>
              <h2 className="text-2xl font-serif font-bold text-prime mb-4 flex items-center gap-2">
                 <Globe size={20} className="text-accent" />
                 {isEn ? "2. GDPR & KVKK Compliance" : "2. Conformitate GDPR și KVKK"}
              </h2>
              <p>
                {isEn 
                  ? "We adhere to the General Data Protection Regulation (GDPR) of the European Union and the Personal Data Protection Law (KVKK) of Turkey. Your data is stored on secure servers with restricted access, protected by 256-bit SSL encryption." 
                  : "Respectăm Regulamentul General privind Protecția Datelor (GDPR) al Uniunii Europene și Legea privind Protecția Datelor cu Caracter Personal (KVKK) din Turcia. Datele tale sunt stocate pe servere securizate cu acces restricționat, protejate prin criptare SSL pe 256 de biți."}
              </p>
           </section>

           <section>
              <h2 className="text-2xl font-serif font-bold text-prime mb-4 flex items-center gap-2">
                 <Eye size={20} className="text-accent" />
                 {isEn ? "3. Your Rights" : "3. Drepturile Tale"}
              </h2>
              <p>
                {isEn 
                  ? "You have the right to access, rectify, or delete your personal data at any time. To exercise these rights, please contact our Data Protection Officer at info@mevaclinic.com." 
                  : "Ai dreptul de a accesa, rectifica sau șterge datele tale personale în orice moment. Pentru a exercita aceste drepturi, te rugăm să contactezi responsabilul nostru cu protecția datelor la info@mevaclinic.com."}
              </p>
           </section>

           <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100 flex items-start gap-6 mt-16">
              <FileText className="text-accent shrink-0" size={32} />
              <div>
                 <h4 className="font-bold text-prime mb-2">{isEn ? "HIPAA-Ready Protocols" : "Protocoale HIPAA-Ready"}</h4>
                 <p className="text-sm text-gray-500 italic">
                    {isEn 
                      ? "While we operate primarily under GDPR/KVKK, our internal handling of patient files follows the spirit of HIPAA guidelines for maximum clinical confidentiality." 
                      : "Deși operăm în principal sub GDPR/KVKK, manipularea internă a dosarelor pacienților urmează spiritul ghidurilor HIPAA pentru confidențialitate clinică maximă."}
                 </p>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
