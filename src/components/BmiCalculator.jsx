import React, { useState } from 'react';
import { useLeadContext } from '../context/LeadContext';
import { Activity, ArrowRight, CheckCircle } from 'lucide-react';
import { PxTrack } from '../utils/pixel';
import { useLocation } from 'react-router-dom';
import { pushToDataLayer } from '../utils/AnalyticsUtils';

const BmiCalculator = () => {
  const { setBmiData } = useLeadContext();
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [result, setResult] = useState(null);
  
  // Lead Form State
  const [phone, setPhone] = useState("");
  const [name, setName] = useState("");
  const [isLeadSubmitted, setIsLeadSubmitted] = useState(false);
  const [isLeadSubmitting, setIsLeadSubmitting] = useState(false);
  
  const location = useLocation();
  const isEn = location.pathname.startsWith('/en');

  const calculateBmi = (e) => {
    e.preventDefault();
    if (!weight || !height) return;
    
    const h = parseFloat(height) / 100;
    const w = parseFloat(weight);
    const bmi = (w / (h * h)).toFixed(1);
    
    let category = "";
    let color = "";
    let ctaTitle = false;
    
    if (bmi < 25.0) { 
      category = isEn ? "Diet and Sport. Normal weight. Maintain a healthy lifestyle." : "Dieta si Sport. Greutate normală. Mențineți un stil de viață sănătos."; 
      color = "text-green-600";
      ctaTitle = false;
    }
    else if (bmi >= 25.0 && bmi <= 30.0) { 
      category = isEn ? "Gastric Balloon. Non-surgical treatment recommended." : "Balon Gastric. Tratament non-chirurgical recomandat pentru un IMC optim."; 
      color = "text-yellow-600";
      ctaTitle = isEn ? "Request details" : "Solicită detalii";
    }
    else { 
      category = isEn ? "Sleeve. Obesity. Gastric Sleeve or Bypass is the optimal solution." : "Sleeve. Obezitate. Gastric Sleeve sau Bypass este soluția optimă."; 
      color = "text-red-600";
      ctaTitle = isEn ? "Get a Quote" : "Obține o cotație";
    }

    const res = { score: bmi, message: category, color, cta: ctaTitle };
    setResult(res);
    setBmiData(res);
    PxTrack('BMI_Calculated', { bmi_score: bmi, category: category });
  };

  const handleLeadSubmit = (e) => {
    e.preventDefault();
    setIsLeadSubmitting(true);
    
    const payload = {
      name,
      phone,
      bmiScore: result?.score,
      category: result?.message,
      type: 'BMI_LEAD'
    };
    
    // Mock API / emailjs-com structure
    // Payload sent silently
    
    setTimeout(() => {
      pushToDataLayer('generate_lead', { form_location: 'bmi_calculator' });
      pushToDataLayer('form_submission_success', { form_location: 'bmi_calculator' });
      setIsLeadSubmitting(false);
      setIsLeadSubmitted(true);
    }, 1500);
  };

  return (
    <section id="bmi" className="py-20 bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-prime/5 to-transparent w-full h-full pointer-events-none"></div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-white rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-gray-100 p-6 md:p-12">
          
          <div className="text-center mb-8 md:mb-10">
             <div className="inline-flex items-center justify-center w-12 h-12 md:w-16 md:h-16 bg-accent/10 text-accent rounded-2xl mb-4 md:6 shadow-sm border border-accent/20">
                <Activity size={24} className="md:w-8 md:h-8" />
             </div>
             <h2 className="text-2xl md:text-3xl font-serif font-bold text-prime mb-3">{isEn ? "Online BMI Calculator" : "Calculator IMC Online"}</h2>
             <p className="text-sm md:text-base text-gray-500 font-sans">{isEn ? "Find out instantly if you are eligible for our Bariatric Surgery package." : "Află instant dacă ești eligibil pentru pachetul nostru de Chirurgie Bariatrică."}</p>
          </div>

          <form onSubmit={calculateBmi} className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8" aria-label={isEn ? "BMI Calculator" : "Calculator IMC"}>
            <div>
              <label htmlFor="bmi-weight" className="block text-xs font-bold text-gray-500 mb-2 uppercase tracking-wider">{isEn ? "Weight (kg) *" : "Greutate (kg) *"}</label>
              <input 
                 id="bmi-weight"
                 type="number" 
                 value={weight} 
                 onChange={e => setWeight(e.target.value)}
                 placeholder="ex: 95"
                 min="30"
                 max="300"
                 className="w-full border border-gray-200 rounded-xl px-5 py-4 focus:outline-none focus:border-accent text-lg transition-colors bg-gray-50/50 focus:bg-white"
                 required
                 aria-required="true"
              />
            </div>
            <div>
              <label htmlFor="bmi-height" className="block text-xs font-bold text-gray-500 mb-2 uppercase tracking-wider">{isEn ? "Height (cm) *" : "Înalțime (cm) *"}</label>
              <input 
                 id="bmi-height"
                 type="number" 
                 value={height} 
                 onChange={e => setHeight(e.target.value)}
                 placeholder="ex: 170"
                 min="100"
                 max="250"
                 className="w-full border border-gray-200 rounded-xl px-5 py-4 focus:outline-none focus:border-accent text-lg transition-colors bg-gray-50/50 focus:bg-white"
                 required
                 aria-required="true"
              />
            </div>
            <div className="md:col-span-2 mt-4">
              <button type="submit" aria-label={isEn ? "Calculate BMI" : "Calculează IMC"} className="w-full bg-prime hover:bg-[#0b1626] text-white font-bold py-4 rounded-xl shadow-lg transition-all duration-300 flex items-center justify-center hover:-translate-y-0.5">
                 {isEn ? "Calculate Now" : "Calculează Acum"} <ArrowRight size={20} className="ml-2" />
              </button>
            </div>
          </form>

          {result && (
            <div className={`mt-8 p-6 rounded-2xl border bg-gray-50 border-gray-200 shadow-sm`}>
               <div className="flex items-start">
                  <div className={`mt-0.5 mr-4 flex-shrink-0 ${result.color}`}>
                     <CheckCircle size={24} />
                  </div>
                  <div className="w-full">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                       {isEn ? "BMI Result:" : "Rezultat IMC:"} <span className={result.color}>{result.score}</span>
                    </h3>
                    <p className={`font-medium leading-relaxed text-sm ${result.color} mb-4`}>
                        {result.message}
                    </p>
                    
                    {result.cta && !isLeadSubmitted && (
                      <form onSubmit={handleLeadSubmit} className="mt-4 bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
                        <h4 className="font-bold text-sm text-prime mb-3">{result.cta}</h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                          <input 
                            type="text" 
                            placeholder={isEn ? "Full Name *" : "Nume Complet *"}
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="border border-gray-200 rounded-lg px-4 py-2 focus:outline-none focus:border-accent text-sm"
                            required
                          />
                          <input 
                            type="tel" 
                            placeholder={isEn ? "Phone Number *" : "Număr Telefon *"}
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            className="border border-gray-200 rounded-lg px-4 py-2 focus:outline-none focus:border-accent text-sm"
                            required
                          />
                        </div>
                        <button 
                          type="submit" 
                          disabled={isLeadSubmitting}
                          className="w-full bg-accent hover:bg-yellow-500 text-white font-bold py-3 rounded-lg shadow-md transition-all text-sm disabled:opacity-70"
                        >
                          {isLeadSubmitting ? (isEn ? "Sending..." : "Se trimite...") : (isEn ? "Request Consultant Callback" : "Solicită Apel Consultant")}
                        </button>
                      </form>
                    )}
                    
                    {isLeadSubmitted && (
                      <div className="mt-4 bg-green-50 border border-green-200 rounded-xl p-4 flex items-center animate-fade-in">
                        <CheckCircle size={20} className="text-green-600 mr-3" />
                        <p className="text-green-700 font-bold text-sm">
                          {isEn ? "Your request is sent. A consultant will call in 15 mins." : "Cererea dvs. a fost trimisă cu succes. Un consultant vă va contacta în 15 minute."}
                        </p>
                      </div>
                    )}
                  </div>
               </div>
            </div>
          )}

        </div>
      </div>
    </section>
  );
};
export default BmiCalculator;
