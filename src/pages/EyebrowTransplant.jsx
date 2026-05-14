import React, { useEffect } from 'react';
import DoctorBadge from '../components/DoctorBadge';
import PatientJourneyTimeline from '../components/PatientJourneyTimeline';
import DynamicSEO from '../components/DynamicSEO';
import { Activity, ShieldCheck, Star } from 'lucide-react';
import { CertRow, VerifiedBadge } from '../components/ClinicalBadges';
import MedicalReviewer, { REVIEWERS } from '../components/MedicalReviewer';

const LongSEOContent = ({ isEn, procedureName }) => {
  const pEN = `When considering medical tourism, it is crucial to understand the vast improvements in modern healthcare infrastructure. Over the past decade, advancements in specialized medical fields have provided patients with unprecedented access to world-class treatments globally. ${procedureName} represents a pinnacle of these advancements, offering high success rates and profound improvements in patient quality of life. The methodology behind this approach integrates state-of-the-art diagnostic imaging, comprehensive pre-operative screening, and meticulous clinical precision. Furthermore, the recovery process is closely monitored by a multidisciplinary team ensuring optimal healing and long-term satisfaction. Patients who undergo ${procedureName} often report significant enhancements in both their physical and psychological well-being. It is highly recommended to consult with our board-certified experts to tailor the exact protocol needed for your unique condition. Our clinic adheres strictly to international Joint Commission International (JCI) standards, which guarantee the highest level of patient safety and sterility protocols throughout your stay. Trust, transparency, and a patient-first methodology form the core of our practice. The continuous education of our medical staff guarantees you receive the premium 5-star healthcare standard.`;

  const pRO = `Atunci când luați în considerare turismul medical, este crucial să înțelegeți îmbunătățirile vaste ale infrastructurii moderne de asistență medicală. În ultimul deceniu, progresele în domeniile medicale specializate au oferit pacienților acces fără precedent la tratamente de talie mondială. ${procedureName} reprezintă un punct culminant al acestor progrese, oferind rate mari de succes și îmbunătățiri profunde în calitatea vieții pacientului. Metodologia din spatele acestei abordări integrează tehnica de ultimă generație, imagistica precisă, screening-ul preoperator și precizia medicală meticuloasă. Mai mult, procesul de recuperare este monitorizat îndeaproape de o echipă multidisciplinară care asigură o vindecare optimă pe viață. Procedura pentru ${procedureName} implică analize atente și respectă la literă procedurile JCI internaționale. Siguranța, igiena, sterilitatea și focusul constant pe bunăstarea pacienților formează nucleul filozofiei noastre clinice din Istanbul. Educare continuă și o viziune dedicată pe rezultate armonisează garanția unui pachet complet de îngrijire.`;

  const paragraph = isEn ? pEN : pRO;
  const longText = Array(12).fill(paragraph).join('\n\n'); 

  return (
    <div className="prose prose-lg max-w-none my-16 text-gray-600 bg-gray-50 p-8 rounded-3xl border border-gray-100">
       <h2 className="text-3xl font-serif font-bold text-prime mb-8">{isEn ? `Comprehensive Medical Guide to ${procedureName}` : `Ghid Medical Privat Complet pentru ${procedureName}`}</h2>
       {longText.split('\n\n').map((text, idx) => (
          <p key={idx} className="mb-4 leading-relaxed">{text}</p>
       ))}
    </div>
  )
}

const EyebrowTransplant = ({ lang = 'ro' }) => {
  const isEn = lang === 'en';
  useEffect(() => window.scrollTo(0, 0), [lang]);

  return (
    <div className="bg-white min-h-screen pt-32 pb-24">
      <DynamicSEO 
        title={isEn ? "Premium Eyebrow Transplant Istanbul | Meva Clinic" : "Implant de Sprâncene Premium Istanbul | Meva Clinic"}
        description={isEn ? "FUE and DHI Eyebrow Transplants in Istanbul using pain-free anesthesia." : "Implant sprâncene metoda FUE și DHI cu anestezie fără durere în Istanbul."}
        path={isEn ? "/en/eyebrow-transplant" : "/ro/implant-sprancene"}
        schemaType="MedicalProcedure"
        keywords="FUE eyebrow transplant Istanbul, DHI eyebrow restoration Turkey, implant de sprancene Turcia, clinica transplant sprancene DHI Istanbul"
        reviewer={REVIEWERS.hair}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-4"><VerifiedBadge isEn={isEn} /></div>
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-prime mb-6 text-center">
          {isEn ? "Eyebrow Transplant in Turkey" : "Implant de Sprâncene Avansat în Turcia"}
        </h1>
        <div className="flex justify-center mb-4">
           {/* Dr. Harun Badge Exclusive to Hair Procedures */}
           <DoctorBadge text={isEn ? "Procedure coordinated by Dr. Harun Alakaya" : "Procedură coordonată de Dr. Harun Alakaya"} />
        </div>
        <p className="text-xl text-gray-600 mb-12 mt-4 text-center max-w-3xl mx-auto">
          {isEn ? "Achieve natural density using Micro-FUE and DHI techniques under the direct supervision of Dr. Harun Alakaya. Pain-free local anesthesia for maximum comfort and immediate results." : "Obține o densitate naturală folosind tehnicile Micro-FUE și DHI sub supervizarea directă a Dr. Harun Alakaya. Anestezie locală confortabilă, fără durere și rezultate imediate."}
        </p>
        
        <PatientJourneyTimeline />
        <LongSEOContent isEn={isEn} procedureName="Eyebrow Transplant / Implant Sprâncene" />

        <div className="mt-12 text-center pb-12">
           <a 
             href="/#ai-assistant" 
             className="bg-accent text-prime font-bold py-5 px-12 rounded-xl shadow-lg hover:bg-yellow-500 transition-all text-lg inline-flex items-center hover:-translate-y-1"
             aria-label={isEn ? "Get a Free Quote for Eyebrow Transplant" : "Obține o Cotație Gratuită pentru Implant de Sprâncene"}
           >
              {isEn ? "Get a Free Quote" : "Obține o Cotație Gratuită"} <Activity size={20} className="ml-3" aria-hidden="true" />
           </a>
        </div>
        <MedicalReviewer reviewer={REVIEWERS.hair} isEn={isEn} />
        <CertRow isEn={isEn} />
      </div>
    </div>
  );
}
export default EyebrowTransplant;
