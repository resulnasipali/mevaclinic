import React, { useEffect } from 'react';
import TreatmentQuiz from '../components/TreatmentQuiz';
import DynamicSEO from '../components/DynamicSEO';

const QuizPage = ({ lang = 'ro' }) => {
  const isEn = lang === 'en';

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [lang]);

  return (
    <div className="bg-gray-50 min-h-screen pt-32 pb-24">
      <DynamicSEO 
        title={isEn ? "Treatment Suitability Test | Meva Clinic" : "Test de Eligibilitate Tratament | Meva Clinic"}
        description={isEn ? "30-second medical assessment to find your ideal treatment protocol in Istanbul." : "Evaluare medicală de 30 de secunde pentru a găsi protocolul tău ideal de tratament în Istanbul."}
        path={isEn ? "/en/quiz" : "/ro/quiz"}
      />
      
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
           <h1 className="text-4xl md:text-5xl font-serif font-bold text-prime mb-4">
             {isEn ? "Medical Suitability Engine" : "Motor de Eligibilitate Medicală"}
           </h1>
           <p className="text-gray-500 font-medium">
             {isEn 
               ? "Answer 5 clinical questions to receive your personalized surgical compatibility score." 
               : "Răspunde la 5 întrebări clinice pentru a primi scorul tău personalizat de compatibilitate chirurgicală."}
           </p>
        </div>

        <div className="bg-white rounded-[2.5rem] shadow-2xl border border-gray-100 overflow-hidden">
           <TreatmentQuiz />
        </div>

        <div className="mt-12 text-center text-xs text-gray-400 font-bold uppercase tracking-widest">
           {isEn ? "JCI Compliant Data Encryption" : "Criptare Date Conformă JCI"}
        </div>
      </div>
    </div>
  );
};

export default QuizPage;
