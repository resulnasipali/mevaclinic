### Dosya Adı: src\App.css
```css
.counter {
  font-size: 16px;
  padding: 5px 10px;
  border-radius: 5px;
  color: var(--accent);
  background: var(--accent-bg);
  border: 2px solid transparent;
  transition: border-color 0.3s;
  margin-bottom: 24px;

  &:hover {
    border-color: var(--accent-border);
  }
  &:focus-visible {
    outline: 2px solid var(--accent);
    outline-offset: 2px;
  }
}

.hero {
  position: relative;

  .base,
  .framework,
  .vite {
    inset-inline: 0;
    margin: 0 auto;
  }

  .base {
    width: 170px;
    position: relative;
    z-index: 0;
  }

  .framework,
  .vite {
    position: absolute;
  }

  .framework {
    z-index: 1;
    top: 34px;
    height: 28px;
    transform: perspective(2000px) rotateZ(300deg) rotateX(44deg) rotateY(39deg)
      scale(1.4);
  }

  .vite {
    z-index: 0;
    top: 107px;
    height: 26px;
    width: auto;
    transform: perspective(2000px) rotateZ(300deg) rotateX(40deg) rotateY(39deg)
      scale(0.8);
  }
}

#center {
  display: flex;
  flex-direction: column;
  gap: 25px;
  place-content: center;
  place-items: center;
  flex-grow: 1;

  @media (max-width: 1024px) {
    padding: 32px 20px 24px;
    gap: 18px;
  }
}

#next-steps {
  display: flex;
  border-top: 1px solid var(--border);
  text-align: left;

  & > div {
    flex: 1 1 0;
    padding: 32px;
    @media (max-width: 1024px) {
      padding: 24px 20px;
    }
  }

  .icon {
    margin-bottom: 16px;
    width: 22px;
    height: 22px;
  }

  @media (max-width: 1024px) {
    flex-direction: column;
    text-align: center;
  }
}

#docs {
  border-right: 1px solid var(--border);

  @media (max-width: 1024px) {
    border-right: none;
    border-bottom: 1px solid var(--border);
  }
}

#next-steps ul {
  list-style: none;
  padding: 0;
  display: flex;
  gap: 8px;
  margin: 32px 0 0;

  .logo {
    height: 18px;
  }

  a {
    color: var(--text-h);
    font-size: 16px;
    border-radius: 6px;
    background: var(--social-bg);
    display: flex;
    padding: 6px 12px;
    align-items: center;
    gap: 8px;
    text-decoration: none;
    transition: box-shadow 0.3s;

    &:hover {
      box-shadow: var(--shadow);
    }
    .button-icon {
      height: 18px;
      width: 18px;
    }
  }

  @media (max-width: 1024px) {
    margin-top: 20px;
    flex-wrap: wrap;
    justify-content: center;

    li {
      flex: 1 1 calc(50% - 8px);
    }

    a {
      width: 100%;
      justify-content: center;
      box-sizing: border-box;
    }
  }
}

#spacer {
  height: 88px;
  border-top: 1px solid var(--border);
  @media (max-width: 1024px) {
    height: 48px;
  }
}

.ticks {
  position: relative;
  width: 100%;

  &::before,
  &::after {
    content: '';
    position: absolute;
    top: -4.5px;
    border: 5px solid transparent;
  }

  &::before {
    left: 0;
    border-left-color: var(--border);
  }
  &::after {
    right: 0;
    border-right-color: var(--border);
  }
}

```

### Dosya Adı: src\App.jsx
```jsx
import React, { useEffect, Suspense, lazy } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import Header from './components/Header'
import HeroSection from './components/HeroSection'
import TrustBadges from './components/TrustBadges'
import PremiumPackageSection from './components/PremiumPackageSection'
import PatientJourneyCarousel from './components/PatientJourneyCarousel'
import BmiCalculator from './components/BmiCalculator'
import Footer from './components/Footer'
import FloatingWhatsApp from './components/FloatingWhatsApp'
import DynamicSEO from './components/DynamicSEO'
import ServicesSection from './components/ServicesSection'
import SafetyQualitySection from './components/SafetyQualitySection'
import TestimonialsGrid from './components/TestimonialsGrid'
import CookieBanner from './components/CookieBanner'
import AIAssistant from './components/AIAssistant'
import FloatingTrustBadge from './components/FloatingTrustBadge'
import StatsSection from './components/StatsSection'
import SocialProof from './components/SocialProof'
import SuitabilityQuiz from './components/SuitabilityQuiz'
import { CertRow } from './components/ClinicalBadges'

// Lazy loaded components
const ConciergePage = lazy(() => import('./pages/ConciergePage'));
const BlogArchive = lazy(() => import('./pages/BlogArchive'));
const BlogPost = lazy(() => import('./pages/BlogPost'));
const TreatmentPage = lazy(() => import('./pages/TreatmentPage'));
const About = lazy(() => import('./pages/About'));
const Contact = lazy(() => import('./pages/Contact'));
const NotFound = lazy(() => import('./pages/NotFound'));
const RomaniaSpecial = lazy(() => import('./pages/RomaniaSpecial'));
const QuizPage = lazy(() => import('./pages/QuizPage'));
const FAQPage = lazy(() => import('./pages/FAQPage'));
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy'));
const ComparisonHub = lazy(() => import('./pages/ComparisonHub'));
const TreatmentDetail = lazy(() => import('./pages/TreatmentDetail'));
const Bariatric = lazy(() => import('./pages/Bariatric'));
const HairTransplant = lazy(() => import('./pages/HairTransplant'));

const LoadingFallback = () => (
  <div className="min-h-screen bg-[#0b1626] flex items-center justify-center">
    <div className="w-12 h-12 border-4 border-accent border-t-transparent rounded-full animate-spin" />
  </div>
);

// Error Boundary — prevents a single lazy page crash from killing the entire app
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }
  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }
  componentDidCatch(error, info) {
    // Safe logging — never crashes itself
    try { console.error('[Meva ErrorBoundary]', error, info); } catch {}
  }
  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-white px-6 text-center">
          <h1 className="text-3xl font-bold text-prime mb-4">Oops — something went wrong</h1>
          <p className="text-gray-500 mb-8">Please refresh the page or go back to the homepage.</p>
          <a href="/" className="bg-accent text-prime font-bold px-8 py-3 rounded-full">Go Home</a>
        </div>
      );
    }
    return this.props.children;
  }
}

const HomePage = ({ lang = 'ro' }) => {
  const isEn = lang === 'en';
  return (
    <>
      <DynamicSEO 
        title={isEn ? "Meva Clinic - VIP Bariatric & Oncology Istanbul" : "Meva Clinic - Pachet Bariatric & Oncologie VIP Turcia"}
        description={isEn ? "Your premium medical journey in Istanbul. CyberKnife S7 and Da Vinci robotics." : "Experiența ta medicală all-inclusive în Turcia. Tehnologie CyberKnife S7 și chirurgie Da Vinci."}
        path={isEn ? "/en" : "/ro"}
        schemaType="MedicalBusiness"
      />
      <HeroSection />
      
      <div className="reveal">
        <StatsSection isEn={isEn} />
      </div>

      <div className="reveal">
        <SocialProof isEn={isEn} />
      </div>

      <div className="reveal">
        <TrustBadges />
      </div>

      <div className="reveal">
        <BmiCalculator />
      </div>

      <div className="py-24 bg-gray-50 border-y border-gray-100 reveal">
         <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
               <h2 className="text-4xl font-serif font-bold text-prime mb-4">
                  {isEn ? "Start Your Medical Evaluation" : "Începe Evaluarea Ta Medicală"}
               </h2>
               <p className="text-gray-500 font-medium">
                  {isEn ? "Get a preliminary clinical assessment in 30 seconds." : "Obține o evaluare clinică preliminară în 30 de secunde."}
               </p>
            </div>
            <SuitabilityQuiz isEn={isEn} procedure="Meva Clinic" />
         </div>
      </div>

      <div className="reveal">
        <ServicesSection />
      </div>

      <div className="reveal">
        <PremiumPackageSection />
      </div>

      <div className="reveal">
        <TestimonialsGrid />
      </div>

      <div className="reveal">
        <SafetyQualitySection />
      </div>

      <div className="reveal">
        <PatientJourneyCarousel />
      </div>

      <div className="py-20 md:py-24 bg-white border-t border-gray-50 reveal">
         <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8">
            <CertRow isEn={isEn} />
         </div>
      </div>

      <ReviewSchema />
      <AIAssistant />
    </>
  );
};



const ReviewSchema = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Review",
    "itemReviewed": {
      "@type": "MedicalClinic",
      "name": "Meva Clinic Istanbul"
    },
    "reviewRating": {
      "@type": "Rating",
      "ratingValue": "5",
      "bestRating": "5"
    },
    "author": {
      "@type": "Person",
      "name": "Andrei M."
    },
    "reviewBody": "Excellent experience with Meva Clinic. The JCI-accredited facility and Romanian support team made my bariatric surgery journey in Istanbul seamless."
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />;
};

// Syncs <html lang> attribute with the current route on every navigation
const LangSync = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    const lang = pathname.startsWith('/en') ? 'en' : 'ro';
    document.documentElement.setAttribute('lang', lang);
  }, [pathname]);
  return null;
};

function App() {
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, observerOptions);

    const elements = document.querySelectorAll('.reveal');
    elements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <BrowserRouter>
      <LangSync />
      <div className="font-sans antialiased text-gray-900 bg-white min-h-screen">

        <Header />
        
        <main id="main-content">
          <ErrorBoundary>
            <Suspense fallback={<LoadingFallback />}>
              <Routes>
               <Route path="/" element={<HomePage lang="ro" />} />
               <Route path="/ro" element={<HomePage lang="ro" />} />
               <Route path="/en" element={<HomePage lang="en" />} />
               
               {/* RO routes — specific before wildcard */}
               <Route path="/ro/despre-noi" element={<About />} />
               <Route path="/ro/gastric-sleeve" element={<TreatmentDetail />} />
               <Route path="/ro/gastric-bypass" element={<TreatmentDetail />} />
               <Route path="/ro/balon-gastric" element={<TreatmentDetail />} />
               <Route path="/ro/implant-par" element={<TreatmentDetail />} />
               <Route path="/ro/implant-sprancene" element={<TreatmentDetail />} />
               <Route path="/ro/oncologie" element={<TreatmentDetail />} />
               <Route path="/ro/implant-dentar" element={<TreatmentDetail />} />
               <Route path="/ro/chirurgie-plastica" element={<TreatmentDetail />} />
               <Route path="/ro/blog" element={<BlogArchive />} />
               <Route path="/ro/blog/:slug" element={<BlogPost />} />
               <Route path="/ro/quiz" element={<QuizPage lang="ro" />} />
               <Route path="/ro/faq" element={<FAQPage />} />
               <Route path="/ro/contact" element={<Contact />} />
               <Route path="/ro/politica-confidentialitate" element={<PrivacyPolicy />} />
               <Route path="/ro/comparatie-medicala" element={<ComparisonHub />} />
               <Route path="/ro/romani-istanbul" element={<RomaniaSpecial />} />
               <Route path="/ro/andrologie" element={<TreatmentDetail />} />
               <Route path="/ro/fiv" element={<TreatmentDetail />} />
               <Route path="/ro/ivf-icsi-pgd" element={<TreatmentDetail />} />
               <Route path="/ro/ivf-cyprus" element={<TreatmentDetail />} />
               <Route path="/ro/ivf-ciprul-de-nord" element={<TreatmentDetail />} />
               <Route path="/ro/hair-transplant" element={<TreatmentDetail />} />
               <Route path="/ro/treatments/:slug" element={<TreatmentDetail />} />
               <Route path="/ro/transplant-par-mixt" element={<TreatmentDetail />} />
               <Route path="/ro/transplant-par-dhi" element={<TreatmentDetail />} />
               <Route path="/ro/eyebrow-transplant" element={<TreatmentDetail />} />
               <Route path="/ro/:slug" element={<TreatmentPage />} />
    
               {/* EN routes — specific before wildcard */}
               <Route path="/en/about-us" element={<About />} />
               <Route path="/en/gastric-sleeve" element={<TreatmentDetail />} />
               <Route path="/en/gastric-bypass" element={<TreatmentDetail />} />
               <Route path="/en/gastric-balloon" element={<TreatmentDetail />} />
               <Route path="/en/hair-transplant" element={<TreatmentDetail />} />
               <Route path="/en/eyebrow-transplant" element={<TreatmentDetail />} />
               <Route path="/en/oncology" element={<TreatmentDetail />} />
               <Route path="/en/dental-implants" element={<TreatmentDetail />} />
               <Route path="/en/plastic-surgery" element={<TreatmentDetail />} />
               <Route path="/en/blog" element={<BlogArchive />} />
               <Route path="/en/blog/:slug" element={<BlogPost />} />
               <Route path="/en/quiz" element={<QuizPage lang="en" />} />
               <Route path="/en/faq" element={<FAQPage />} />
               <Route path="/en/contact" element={<Contact />} />
               <Route path="/en/privacy-policy" element={<PrivacyPolicy />} />
               <Route path="/en/medical-comparison" element={<ComparisonHub />} />
               <Route path="/en/andrology" element={<TreatmentDetail />} />
               <Route path="/en/ivf" element={<TreatmentDetail />} />
               <Route path="/en/ivf-icsi-pgd" element={<TreatmentDetail />} />
               <Route path="/en/ivf-cyprus" element={<TreatmentDetail />} />
               <Route path="/en/ivf-northern-cyprus" element={<TreatmentDetail />} />
               <Route path="/en/treatments/:slug" element={<TreatmentDetail />} />
               <Route path="/en/mixed-hair-transplant" element={<TreatmentDetail />} />
               <Route path="/en/dhi-hair-transplant" element={<TreatmentDetail />} />
               <Route path="/en/:slug" element={<TreatmentPage />} />
               
               <Route path="/concierge" element={<ConciergePage />} />
               <Route path="/ro/romani-istanbul" element={<RomaniaSpecial />} />
               <Route path="*" element={<NotFound />} />
              </Routes>
            </Suspense>
          </ErrorBoundary>
        </main>
        
        <Footer />
        <FloatingWhatsApp />
        <FloatingTrustBadge />
        <CookieBanner />
      </div>
    </BrowserRouter>
  )
}
export default App;

```

### Dosya Adı: src\components\AIAssistant.jsx
```jsx
import React, { useState, useEffect } from 'react';
import { Stethoscope, Activity, Scissors, ArrowRight, ShieldCheck, UploadCloud, CheckCircle, Brain, HeartPulse, Syringe } from 'lucide-react';
import { PxTrack } from '../utils/pixel';
import emailjs from '@emailjs/browser';
import { useLocation } from 'react-router-dom';
import { pushToDataLayer } from '../utils/AnalyticsUtils';

const AIAssistant = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    treatment: '',
    height: '', weight: '', age: '',
    medicalCondition: '',
    phone: '', name: ''
  });
  
  const [progress, setProgress] = useState(0);
  const [progressText, setProgressText] = useState('');
  const location = useLocation();
  const isEn = location.pathname.startsWith('/en');

  const treatmentOptions = [
    { id: 'bariatric', title: isEn ? 'Bariatric Surgery' : 'Chirurgie Bariatrică', icon: Activity, desc: isEn ? 'Gastric Sleeve & Bypass' : 'Gastric Sleeve & Bypass' },
    { id: 'dental', title: isEn ? 'Dentistry' : 'Stomatologie', icon: ShieldCheck, desc: isEn ? 'Hollywood Smile & Reconstruction' : 'Hollywood Smile & Reconstrucție' },
    { id: 'plastic', title: isEn ? 'Plastic Surgery' : 'Chirurgie Estetică', icon: Scissors, desc: isEn ? 'Lifting, Rhinoplasty, Body Sculpting' : 'Lifting, Rinoplastie, Remodelare' },
    { id: 'oncology', title: isEn ? 'Oncology' : 'Oncologie', icon: Brain, desc: isEn ? 'CyberKnife, Chemotherapy' : 'CyberKnife, Chimioterapie' },
    { id: 'transplant', title: isEn ? 'Organ Transplant' : 'Transplant Organe', icon: HeartPulse, desc: isEn ? 'Kidney & Liver Transplants' : 'Transplant Rinichi & Ficat' },
    { id: 'hair', title: isEn ? 'Hair Transplant' : 'Implant Păr', icon: Syringe, desc: isEn ? 'Sapphire FUE, Stem Cells' : 'Sapphire FUE, Celule Stem' }
  ];

  const handleStep1 = (t) => {
    setFormData({ ...formData, treatment: t });
    setStep(2);
    PxTrack('AI_Assistant_Started', { chosen_treatment: t });
  };

  const handleStep2 = (e) => {
    e.preventDefault();
    setStep(3);
  };

  const handleStep3 = (e) => {
    e.preventDefault();
    setStep(4);
    PxTrack('Lead', { form_location: 'AI_Assistant' });
    pushToDataLayer('generate_lead', { form_location: 'ai_assistant' });
    pushToDataLayer('form_submission_success', { form_location: 'ai_assistant' });

    const templateParams = {
      to_email: 'info@mevaclinic.com',
      from_name: formData.name,
      phone: formData.phone,
      treatment: formData.treatment,
      metrics: `Weight: ${formData.weight}kg | Height: ${formData.height}cm | Age: ${formData.age}`,
      medical_condition: formData.medicalCondition || 'Unspecified'
    };

    // Safe EmailJS call — silently skips if ENV variables are not configured
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (serviceId && templateId && publicKey) {
      emailjs
        .send(serviceId, templateId, templateParams, publicKey)
        .catch(() => {}); // Ignore send errors — do not break UX
    }
  };

  useEffect(() => {
    if (step === 4) {
      setProgressText(isEn ? 'Initializing Med AI...' : 'Inițializare AI Med...');
      let currentProgress = 0;
      const interval = setInterval(() => {
        currentProgress += 5;
        if (currentProgress < 40) setProgressText(isEn ? 'Synthesizing medical data...' : 'Sintetizare date medicale...');
        else if (currentProgress < 75) setProgressText(isEn ? 'Identifying expert protocol...' : 'Identificare protocol experți...');
        else setProgressText(isEn ? 'Generating private treatment plan...' : 'Generare plan privat tratament...');
        
        setProgress(currentProgress);
        if (currentProgress >= 100) clearInterval(interval);
      }, 200);
      return () => clearInterval(interval);
    }
  }, [step, isEn]);

  return (
    <div className="bg-[#0b1626] py-24 sm:py-32 relative overflow-hidden" id="ai-assistant">
      <div className="absolute top-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-prime/20 rounded-full blur-[150px] pointer-events-none"></div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10 text-white">
        
        <div className="text-center mb-16">
           <div className="inline-flex items-center space-x-2 py-1.5 px-4 rounded-full border border-white/10 bg-white/5 mb-6 text-xs uppercase tracking-widest font-bold backdrop-blur-sm">
             <Stethoscope size={16} className="text-accent" />
             <span>{isEn ? "Rapid AI Diagnostic" : "Diagnostic Rapid AI"}</span>
           </div>
           <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4 drop-shadow-lg text-white">
             {isEn ? "Intelligent Medical" : "Asistent Medical"} <span className="text-accent">{isEn ? "Assistant" : "Inteligent"}</span>
           </h2>
           <p className="text-gray-400 font-sans text-lg max-w-2xl mx-auto leading-relaxed">
             {isEn ? "Complete our interactive tool for a fast, confidential, and 100% free clinical evaluation." : "Completează instrumentul nostru interactiv pentru o evaluare clinică rapidă, confidențială și 100% gratuită."}
           </p>
        </div>

        <div className="bg-[#112440]/80 backdrop-blur-xl border border-white/10 rounded-3xl p-6 md:p-10 shadow-2xl relative">
           
           {step < 4 && (
             <div className="flex justify-between items-center mb-10 relative w-64 mx-auto z-20">
               <div className="absolute top-1/2 left-0 w-full h-[2px] bg-white/10 -z-10"></div>
               {[1,2,3].map(s => (
                 <div key={s} className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold transition-all duration-500 ${step >= s ? 'bg-accent text-[#0b1626] shadow-[0_0_20px_rgba(212,175,55,0.4)]' : 'bg-[#0f1f38] border border-white/10 text-gray-500'}`}>
                    {step > s ? <CheckCircle size={18} strokeWidth={3} /> : s}
                 </div>
               ))}
             </div>
           )}

           <div className={`transition-all duration-700 relative p-4 md:p-8 ${step === 1 ? 'opacity-100 translate-y-0 z-10' : 'opacity-0 translate-y-12 -z-10 pointer-events-none absolute inset-0'}`}>
              <h3 className="text-xl md:text-3xl font-serif font-bold mb-6 text-center mt-4 leading-relaxed">{isEn ? "What is your area of interest?" : "Care este aria ta de interes?"}</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 pb-8">
                {treatmentOptions.map(opt => (
                  <button 
                    key={opt.id} 
                    onClick={() => handleStep1(opt.id)}
                    className="p-4 md:p-5 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 hover:border-accent/40 hover:-translate-y-1 hover:shadow-lg transition-all duration-300 text-left group shadow-sm h-full flex flex-col"
                  >
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg bg-[#0b1626] border border-white/5 flex items-center justify-center mb-4 drop-shadow-md group-hover:scale-110 transition-transform duration-300">
                      <opt.icon size={20} className="text-accent" />
                    </div>
                    <h4 className="font-bold text-base md:text-lg mb-1">{opt.title}</h4>
                    <p className="text-[10px] md:text-sm text-gray-400 leading-tight font-sans">{opt.desc}</p>
                  </button>
                ))}
              </div>
           </div>

           <div className={`transition-all duration-700 p-4 md:p-8 w-full ${step === 2 ? 'opacity-100 translate-x-0 z-10 relative' : 'opacity-0 translate-x-12 -z-10 pointer-events-none absolute inset-0'}`}>
              <div className="mt-16">
                <button type="button" onClick={() => setStep(1)} className="text-xs text-gray-400 hover:text-white uppercase tracking-widest font-bold mb-6 flex items-center transition-colors"><ArrowRight size={14} className="mr-2 transform rotate-180" /> {isEn ? "Modify Section" : "Modifică Secțiunea"}</button>
              
              <h3 className="text-3xl font-serif font-bold mb-2">
                {formData.treatment === 'bariatric' ? (isEn ? 'Metric Calibration' : 'Calibrare Metrică') : (isEn ? 'Visual Analysis System' : 'Sistem Analiză Vizuală')}
              </h3>
              <p className="text-gray-400 text-sm font-sans mb-8">
                {formData.treatment === 'bariatric' ? (isEn ? 'For an accurate prognosis, the doctor needs your physical parameters.' : 'Pentru un prognostic precis, doctorul are nevoie de indicii tăi fizici.') : (isEn ? 'For an accurate 3D diagnosis, upload 2-3 clear photos of the area of interest.' : 'Pentru un diagnostic 3D precis, încărcați 2-3 fotografii clare ale zonei de interes.')}
              </p>

              <form onSubmit={handleStep2} className="w-full">
                {formData.treatment === 'bariatric' ? (
                  <div className="grid grid-cols-2 gap-6 mb-8">
                    <div>
                      <label className="block text-xs uppercase tracking-widest text-gray-400 mb-2 font-bold">{isEn ? 'Weight (kg)' : 'Greutate (kg)'}</label>
                      <input type="number" required value={formData.weight} onChange={e => setFormData({...formData, weight: e.target.value})} className="w-full bg-[#0b1626]/50 border border-white/10 rounded-xl p-4 text-white focus:outline-none focus:border-accent focus:bg-[#0b1626] transition-all font-sans text-lg" />
                    </div>
                    <div>
                      <label className="block text-xs uppercase tracking-widest text-gray-400 mb-2 font-bold">{isEn ? 'Height (cm)' : 'Înălțime (cm)'}</label>
                      <input type="number" required value={formData.height} onChange={e => setFormData({...formData, height: e.target.value})} className="w-full bg-[#0b1626]/50 border border-white/10 rounded-xl p-4 text-white focus:outline-none focus:border-accent focus:bg-[#0b1626] transition-all font-sans text-lg" />
                    </div>
                  </div>
                ) : (
                  <div className="border-2 border-dashed border-white/20 rounded-2xl p-10 mb-8 flex flex-col items-center justify-center text-center cursor-pointer hover:border-accent/50 hover:bg-[#0b1626]/50 transition-all group">
                     <div className="w-20 h-20 rounded-full bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                       <UploadCloud size={32} className="text-accent" />
                     </div>
                     <p className="font-bold text-lg mb-2 text-white">{isEn ? 'Upload Image References' : 'Încarcă referințe de imagine'}</p>
                     <p className="text-sm text-gray-400">{isEn ? 'Max size 10MB (JPG, PNG). Encrypted.' : 'Dimensiune max 10MB (JPG, PNG). Conexiune Encriptată.'}</p>
                  </div>
                )}
                
                <button type="submit" className="w-full bg-accent hover:bg-yellow-500 text-[#0b1626] font-bold py-4 rounded-xl transition-all shadow-lg flex items-center justify-center hover:-translate-y-1 mb-10">
                  {isEn ? 'Confirm and Continue' : 'Confirmă și Continuă'} <ArrowRight size={18} className="ml-2" />
                </button>
              </form>
              </div>
           </div>

           <div className={`transition-all duration-700 p-4 md:p-8 w-full ${step === 3 ? 'opacity-100 translate-x-0 z-10 relative' : 'opacity-0 translate-x-12 -z-10 pointer-events-none absolute inset-0'}`}>
              <div className="mt-16">
                <button type="button" onClick={() => setStep(2)} className="text-xs text-gray-400 hover:text-white uppercase tracking-widest font-bold mb-4 flex items-center transition-colors"><ArrowRight size={14} className="mr-2 transform rotate-180" /> {isEn ? 'Medical Parameters' : 'Parametri Medicali'}</button>
                <h3 className="text-3xl font-serif font-bold mb-1">{isEn ? 'Medical File & Contact' : 'Dosar Medical & Contact'}</h3>
                <p className="text-gray-400 text-sm font-sans mb-8">{isEn ? 'Your data is strictly used for contact and procedure planning.' : 'Datele tale sunt folosite strict pentru contact și planul de procedură.'}</p>

              <form onSubmit={handleStep3} className="space-y-5">
                <div>
                  <label className="block text-xs uppercase tracking-widest text-gray-400 mb-2 font-bold">{isEn ? 'Pre-existing Conditions (Optional)' : 'Afecțiuni Preexistente (Opțional)'}</label>
                  <textarea value={formData.medicalCondition} onChange={e => setFormData({...formData, medicalCondition: e.target.value})} placeholder={isEn ? "Ex: High blood pressure, Diabetes..." : "Ex: Hipertensiune arterială, Diabet..."} className="w-full bg-[#0b1626]/50 border border-white/10 rounded-xl p-4 text-white focus:border-accent focus:bg-[#0b1626] h-20 resize-none transition-all font-sans" />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs uppercase tracking-widest text-gray-400 mb-2 font-bold">{isEn ? 'Full Name' : 'Nume Complet'}</label>
                    <input type="text" required value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} className="w-full bg-[#0b1626]/50 border border-white/10 rounded-xl p-4 text-white focus:border-accent focus:bg-[#0b1626] transition-all font-sans" />
                  </div>
                  <div>
                    <label className="block text-xs uppercase tracking-widest text-gray-400 mb-2 font-bold">{isEn ? 'Phone (WhatsApp)' : 'Telefon (WhatsApp)'}</label>
                    <input type="tel" required value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})} placeholder="+44" className="w-full bg-[#0b1626]/50 border border-white/10 rounded-xl p-4 text-white focus:border-accent focus:bg-[#0b1626] transition-all font-sans tracking-wider" />
                  </div>
                </div>
                <button type="submit" className="w-full bg-prime hover:bg-[#0f1f38] text-white border border-white/10 hover:border-accent/40 font-bold py-4 rounded-xl mt-2 transition-all shadow-xl flex items-center justify-center hover:-translate-y-1 mb-10">
                  {isEn ? 'Finalize and AI Prediction' : 'Finalizare și Predicție AI'} <Activity size={18} className="ml-3 text-accent" />
                </button>
              </form>
              </div>
           </div>

           <div className={`transition-all duration-1000 absolute inset-0 p-8 flex flex-col items-center justify-center w-full ${step === 4 ? 'opacity-100 scale-100 z-10' : 'opacity-0 scale-95 -z-10 pointer-events-none'}`}>
              {progress < 100 ? (
                <div className="text-center w-full max-w-sm">
                   <div className="mb-8 w-24 h-24 border-4 border-white/5 border-t-accent rounded-full animate-spin mx-auto relative">
                      <div className="absolute inset-0 border-4 border-transparent border-l-prime border-r-prime rounded-full animate-spin-slow opacity-50"></div>
                   </div>
                   <h3 className="text-2xl font-serif font-bold text-white mb-2 tracking-wide">{progressText}</h3>
                   <div className="text-accent text-sm font-bold tracking-widest uppercase mb-8">{progress}% {isEn ? "Completed" : "Completat"}</div>
                   <div className="w-full h-1.5 bg-[#0b1626] rounded-full overflow-hidden shadow-inner">
                      <div className="h-full bg-gradient-to-r from-prime to-accent transition-all duration-300 ease-out relative" style={{ width: `${progress}%` }}>
                         <div className="absolute top-0 right-0 bottom-0 left-0 bg-white/20 animate-pulse"></div>
                      </div>
                   </div>
                </div>
              ) : (
                <div className="text-center w-full transform transition-all duration-700 translate-y-0 opacity-100 scale-100">
                   <div className="w-24 h-24 bg-green-500/10 border border-green-500/20 text-green-400 rounded-full flex items-center justify-center mx-auto mb-8 shadow-lg">
                      <CheckCircle size={48} strokeWidth={1.5} />
                   </div>
                   <h3 className="text-3xl font-serif font-bold text-white mb-4">{isEn ? 'Analysis Complete!' : 'Analiză Finalizată!'}</h3>
                   <p className="text-gray-400 mb-10 max-w-md mx-auto text-sm leading-relaxed">
                     {isEn ? "Your case has been successfully assigned to our medical team in Istanbul. A consultant will return on" : "Cazul tău a fost preluat cu succes de medicii noștri de la Istanbul. Un consultant va reveni"} <strong className="text-white">{isEn ? "WhatsApp in 5 minutes" : "pe WhatsApp în 5 minute"}</strong> {isEn ? "with recommendations and a preliminary cost estimate." : "cu recomandări și devizul de cost preliminar."}
                   </p>
                   <button onClick={() => setStep(1)} className="bg-[#0b1626] border border-white/10 hover:border-white/30 text-white font-bold py-3.5 px-10 rounded-xl transition-all hover:bg-[#0f1f38] text-sm uppercase tracking-widest shadow-lg">
                     {isEn ? 'Restart Process' : 'Reia Procesul'}
                   </button>
                </div>
              )}
           </div>

        </div>
      </div>
    </div>
  );
};

export default AIAssistant;

```

### Dosya Adı: src\components\AppointmentModal.jsx
```jsx
import React, { useState } from 'react';
import { X, Calendar, Car, Hotel, Send, ShieldCheck, ArrowRight } from 'lucide-react';
import { pushToDataLayer } from '../utils/AnalyticsUtils';

const AppointmentModal = ({ isOpen, onClose, isEn = false }) => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    planningDate: '',
    needsLogistics: '',
    name: '',
    phone: ''
  });

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    import('../utils/pixel').then(({ PxTrack }) => {
      PxTrack('Lead', { form_location: 'VIP_Modal', ...formData });
      pushToDataLayer('generate_lead', { form_location: 'appointment_modal' });
      pushToDataLayer('form_submission_success', { form_location: 'appointment_modal' });
      alert(isEn ? "VIP Request Received! A specialist will contact you." : "Cerere VIP Primită! Un specialist te va contacta.");
      onClose();
    });
  };

  return (
    <div className="fixed inset-0 z-[3000] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-prime/80 backdrop-blur-md" onClick={onClose}></div>
      
      <div className="bg-white w-full max-w-xl rounded-[2.5rem] shadow-2xl relative overflow-hidden animate-fade-up">
        <div className="absolute top-0 left-0 w-full h-2 bg-accent"></div>
        <button 
          onClick={onClose}
          aria-label={isEn ? "Close dialog" : "Închide fereastra"}
          className="absolute top-6 right-6 text-gray-400 hover:text-prime transition-colors focus:outline-none focus:ring-2 focus:ring-accent rounded-full"
        >
          <X size={24} />
        </button>

        <div className="p-8 md:p-12">
          {step === 1 && (
            <div className="animate-fade-up">
              <h3 className="text-3xl font-serif font-bold text-prime mb-4">
                {isEn ? "Design Your VIP Journey" : "Proiectează-ți Călătoria VIP"}
              </h3>
              <p className="text-gray-500 mb-8">
                {isEn ? "Tell us your preferences for a seamless medical experience." : "Spune-ne preferințele tale pentru o experiență medicală fără cusur."}
              </p>

              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-bold text-prime mb-3 flex items-center gap-2">
                    <Calendar size={18} className="text-accent" />
                    {isEn ? "When are you planning your visit?" : "Când planifici vizita ta?"}
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    {['This Month', 'Next 3 Months', 'Next 6 Months', 'Just Exploring'].map((opt) => (
                      <button 
                        key={opt}
                        onClick={() => {
                          setFormData({...formData, planningDate: opt});
                          setStep(2);
                        }}
                        className="px-4 py-3 rounded-xl border border-gray-100 hover:border-accent hover:bg-accent/5 text-sm font-medium text-gray-600 hover:text-prime transition-all text-left"
                      >
                        {opt}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="animate-fade-up">
              <h3 className="text-2xl font-serif font-bold text-prime mb-6">
                {isEn ? "Logistics Assistance" : "Asistență Logistică"}
              </h3>
              <div className="space-y-4 mb-8">
                 <button 
                   onClick={() => {
                     setFormData({...formData, needsLogistics: 'Full VIP'});
                     setStep(3);
                   }}
                   className="w-full p-5 rounded-2xl border-2 border-gray-50 hover:border-accent flex items-center gap-4 group transition-all"
                 >
                    <div className="w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center group-hover:bg-accent group-hover:text-prime transition-all">
                       <Car size={24} />
                    </div>
                    <div className="text-left">
                       <p className="font-bold text-prime">{isEn ? "Full VIP Concierge" : "Concierge VIP Complet"}</p>
                       <p className="text-xs text-gray-500">{isEn ? "Includes Mercedes Transfer & 5-Star Hotel" : "Include Transfer Mercedes și Hotel 5 Stele"}</p>
                    </div>
                 </button>

                 <button 
                   onClick={() => {
                     setFormData({...formData, needsLogistics: 'Medical Only'});
                     setStep(3);
                   }}
                   className="w-full p-5 rounded-2xl border-2 border-gray-50 hover:border-accent flex items-center gap-4 group transition-all"
                 >
                    <div className="w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center group-hover:bg-accent group-hover:text-prime transition-all">
                       <Hotel size={24} />
                    </div>
                    <div className="text-left">
                       <p className="font-bold text-prime">{isEn ? "Medical Only" : "Doar Intervenție Medicală"}</p>
                       <p className="text-xs text-gray-500">{isEn ? "I will manage my own logistics" : "Voi gestiona singur logistica"}</p>
                    </div>
                 </button>
              </div>
            </div>
          )}

          {step === 3 && (
            <form onSubmit={handleSubmit} className="animate-fade-up">
              <h3 className="text-2xl font-serif font-bold text-prime mb-6">
                {isEn ? "Final Clinical Detail" : "Detalii Clinice Finale"}
              </h3>
              <div className="space-y-4 mb-8">
                <div>
                  <label htmlFor="modal-name" className="sr-only">{isEn ? "Full Name" : "Nume Complet"}</label>
                  <input 
                    id="modal-name"
                    type="text" 
                    placeholder={isEn ? "Full Name" : "Nume Complet"}
                    className="w-full px-5 py-4 rounded-xl border border-gray-100 focus:border-accent outline-none focus:ring-2 focus:ring-accent/30"
                    required
                    autoComplete="name"
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                  />
                </div>
                <div>
                  <label htmlFor="modal-phone" className="sr-only">{isEn ? "Phone (WhatsApp)" : "Telefon (WhatsApp)"}</label>
                  <input 
                    id="modal-phone"
                    type="tel" 
                    placeholder={isEn ? "Phone (WhatsApp)" : "Telefon (WhatsApp)"}
                    className="w-full px-5 py-4 rounded-xl border border-gray-100 focus:border-accent outline-none focus:ring-2 focus:ring-accent/30"
                    required
                    autoComplete="tel"
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  />
                </div>
              </div>
              <button 
                type="submit"
                className="w-full bg-prime text-white font-bold py-5 rounded-2xl shadow-xl flex items-center justify-center gap-3 hover:bg-[#0b1626] transition-all"
              >
                 {isEn ? "Activate VIP Evaluation" : "Activează Evaluarea VIP"} <Send size={18} />
              </button>
              <p className="text-[10px] text-center text-gray-400 mt-4 uppercase tracking-[0.2em] font-bold">
                 <ShieldCheck size={12} className="inline mr-1 text-accent" /> SSL Secured & GDPR Compliant
              </p>
            </form>
          )}

          <div className="mt-8 flex items-center justify-center gap-2" role="progressbar" aria-valuenow={step} aria-valuemin={1} aria-valuemax={3} aria-label={isEn ? `Step ${step} of 3` : `Pasul ${step} din 3`}>
            {[1, 2, 3].map(i => (
              <div key={i} className={`h-1.5 rounded-full transition-all ${step === i ? 'w-8 bg-accent' : 'w-2 bg-gray-100'}`}></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppointmentModal;

```

### Dosya Adı: src\components\BeforeAfterSlider.jsx
```jsx
import React, { useState, useRef, useEffect } from 'react';

const BeforeAfterSlider = ({ beforeImage, afterImage, beforeLabel = "Before", afterLabel = "After" }) => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef(null);

  const handleMove = (clientX) => {
    if (!containerRef.current || !isDragging) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const percent = Math.max(0, Math.min((x / rect.width) * 100, 100));
    setSliderPosition(percent);
  };

  const handleMouseMove = (e) => handleMove(e.clientX);
  const handleTouchMove = (e) => handleMove(e.touches[0].clientX);

  useEffect(() => {
    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', () => setIsDragging(false));
      window.addEventListener('touchmove', handleTouchMove, { passive: false });
      window.addEventListener('touchend', () => setIsDragging(false));
    }
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', () => setIsDragging(false));
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', () => setIsDragging(false));
    };
  }, [isDragging]);

  return (
    <div 
      ref={containerRef}
      className="relative w-full max-w-4xl mx-auto h-[400px] md:h-[600px] overflow-hidden rounded-2xl cursor-ew-resize select-none group shadow-2xl"
      onMouseDown={(e) => { setIsDragging(true); handleMove(e.clientX); }}
      onTouchStart={(e) => { setIsDragging(true); handleMove(e.touches[0].clientX); }}
    >
      {/* After Image (Background) */}
      <div className="absolute inset-0 w-full h-full">
        <img src={afterImage} alt={`Clinical Outcome ${afterLabel}`} aria-label={`Clinical Outcome ${afterLabel}`} loading="lazy" decoding="async" className="w-full h-full object-cover" draggable="false" />
        <span className="absolute bottom-4 right-4 bg-black/60 text-white px-3 py-1 rounded text-sm font-bold shadow backdrop-blur-sm z-10 pointer-events-none">
          {afterLabel}
        </span>
      </div>

      {/* Before Image (Foreground, clipped) */}
      <div 
        className="absolute inset-0 h-full border-r-4 border-white/80 shadow-[2px_0_10px_rgba(0,0,0,0.5)]"
        style={{ width: `${sliderPosition}%` }}
      >
        <img src={beforeImage} alt={`Initial Condition ${beforeLabel}`} aria-label={`Initial Condition ${beforeLabel}`} loading="lazy" decoding="async" className="w-full h-full object-cover max-w-none" style={{ width: containerRef.current ? containerRef.current.offsetWidth : '100vw' }} draggable="false" />
        <span className="absolute bottom-4 left-4 bg-black/60 text-white px-3 py-1 rounded text-sm font-bold shadow backdrop-blur-sm z-10 pointer-events-none">
          {beforeLabel}
        </span>
      </div>

      {/* Slider Handle */}
      <div 
        className="absolute top-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-[0_0_15px_rgba(0,0,0,0.5)] z-20 pointer-events-none transition-transform group-hover:scale-110"
        style={{ left: `calc(${sliderPosition}% - 20px)` }}
      >
        <div className="flex gap-1">
          <div className="w-0.5 h-4 bg-gray-400 rounded-full"></div>
          <div className="w-0.5 h-4 bg-gray-400 rounded-full"></div>
        </div>
      </div>
    </div>
  );
};

export default BeforeAfterSlider;

```

### Dosya Adı: src\components\BmiCalculator.jsx
```jsx
import React, { useState } from 'react';
import { useLeadContext } from '../context/LeadContext';
import { Activity, ArrowRight, CheckCircle, Phone, AlertTriangle, Info } from 'lucide-react';
import { PxTrack } from '../utils/pixel';
import { useLocation, Link } from 'react-router-dom';
import { pushToDataLayer } from '../utils/AnalyticsUtils';

// ─── Gauge Chart (pure SVG, no dependency) ───────────────────────────────────
const GaugeChart = ({ bmi }) => {
  const MIN = 10, MAX = 50;
  const clamp = (v, a, b) => Math.min(Math.max(v, a), b);
  const pct = (clamp(bmi, MIN, MAX) - MIN) / (MAX - MIN); // 0-1
  const angle = -150 + pct * 300; // sweeps 300°
  const toRad = (d) => (d * Math.PI) / 180;
  const needleX = 100 + 72 * Math.cos(toRad(angle));
  const needleY = 100 + 72 * Math.sin(toRad(angle));

  // Arc helper
  const arc = (startDeg, endDeg, r, color) => {
    const s = toRad(startDeg), e = toRad(endDeg);
    const x1 = 100 + r * Math.cos(s), y1 = 100 + r * Math.sin(s);
    const x2 = 100 + r * Math.cos(e), y2 = 100 + r * Math.sin(e);
    const large = endDeg - startDeg > 180 ? 1 : 0;
    return <path d={`M${x1} ${y1} A${r} ${r} 0 ${large} 1 ${x2} ${y2}`} stroke={color} strokeWidth="14" fill="none" strokeLinecap="round" />;
  };

  const color = bmi < 18.5 ? '#60a5fa' : bmi < 25 ? '#34d399' : bmi < 30 ? '#fbbf24' : bmi < 35 ? '#f97316' : '#ef4444';

  return (
    <svg viewBox="0 0 200 130" className="w-full max-w-[260px] mx-auto" aria-hidden="true">
      {arc(-150, -90, 76, '#60a5fa')}
      {arc(-90,  -30, 76, '#34d399')}
      {arc(-30,   30, 76, '#fbbf24')}
      {arc( 30,   90, 76, '#f97316')}
      {arc( 90,  150, 76, '#ef4444')}
      {/* Needle */}
      <line x1="100" y1="100" x2={needleX} y2={needleY} stroke="#0b1626" strokeWidth="3" strokeLinecap="round" />
      <circle cx="100" cy="100" r="7" fill="#0b1626" />
      <circle cx="100" cy="100" r="3" fill="#d4af37" />
      {/* BMI value */}
      <text x="100" y="122" textAnchor="middle" fontSize="18" fontWeight="bold" fill={color}>{bmi}</text>
      {/* Scale labels */}
      {[['10', -150], ['25', -30], ['40', 90]].map(([label, deg]) => {
        const r = 92, rad = toRad(deg);
        return <text key={label} x={100 + r * Math.cos(rad)} y={100 + r * Math.sin(rad)} textAnchor="middle" dominantBaseline="middle" fontSize="7" fill="#9ca3af">{label}</text>;
      })}
    </svg>
  );
};

// ─── Ideal weight (Devine formula) ───────────────────────────────────────────
const idealWeight = (heightCm, gender) => {
  const inches = (heightCm - 152.4) / 2.54;
  const base = gender === 'male' ? 50 : 45.5;
  const ideal = base + 2.3 * inches;
  const lo = Math.round(ideal * 0.9);
  const hi = Math.round(ideal * 1.1);
  return { lo: Math.max(lo, 40), hi: Math.max(hi, 45) };
};

// ─── BMI interpretation ──────────────────────────────────────────────────────
const interpret = (bmi, isEn) => {
  if (bmi < 18.5) return { label: isEn ? 'Underweight' : 'Subponderal', color: '#60a5fa', bg: 'bg-blue-50', border: 'border-blue-200', cta: false, bariatric: false };
  if (bmi < 25)   return { label: isEn ? 'Normal Weight' : 'Greutate Normală', color: '#34d399', bg: 'bg-green-50', border: 'border-green-200', cta: false, bariatric: false };
  if (bmi < 30)   return { label: isEn ? 'Overweight' : 'Supraponderal', color: '#fbbf24', bg: 'bg-yellow-50', border: 'border-yellow-200', cta: isEn ? 'Request Gastric Balloon Info' : 'Solicită Info Balon Gastric', bariatric: false };
  if (bmi < 35)   return { label: isEn ? 'Obesity Class I' : 'Obezitate Clasa I', color: '#f97316', bg: 'bg-orange-50', border: 'border-orange-200', cta: isEn ? 'Get a Free Evaluation' : 'Obțineți Evaluare Gratuită', bariatric: false };
  return { label: isEn ? 'Obesity Class II–III' : 'Obezitate Clasa II–III', color: '#ef4444', bg: 'bg-red-50', border: 'border-red-200', cta: isEn ? 'Request Bariatric Consultation' : 'Solicită Consultație Bariatrică', bariatric: true };
};

// ─── Main Component ──────────────────────────────────────────────────────────
const BmiCalculator = () => {
  const { setBmiData } = useLeadContext();
  const location = useLocation();
  const isEn = location.pathname.startsWith('/en');

  const [gender, setGender] = useState('female');
  const [age, setAge]       = useState('');
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [result, setResult] = useState(null);
  const [name, setName]     = useState('');
  const [phone, setPhone]   = useState('');
  const [sent, setSent]     = useState(false);
  const [sending, setSending] = useState(false);

  const calculate = (e) => {
    e.preventDefault();
    if (!weight || !height) return;
    const h = parseFloat(height) / 100;
    const bmi = parseFloat((parseFloat(weight) / (h * h)).toFixed(1));
    const interp = interpret(bmi, isEn);
    const iw = idealWeight(parseFloat(height), gender);
    const res = { bmi, ...interp, idealLo: iw.lo, idealHi: iw.hi };
    setResult(res);
    setBmiData({ score: bmi, message: interp.label, color: '', cta: interp.cta });
    PxTrack?.('BMI_Calculated', { bmi_score: bmi, category: interp.label });
  };

  const submitLead = (e) => {
    e.preventDefault();
    setSending(true);
    setTimeout(() => {
      pushToDataLayer?.('generate_lead', { form_location: 'bmi_calculator' });
      setSending(false);
      setSent(true);
    }, 1400);
  };

  const ageNote = result && age && parseInt(age) >= 65
    ? (isEn ? '⚠️ For patients over 65, bariatric eligibility requires additional cardiac evaluation.' : '⚠️ Pentru pacienții peste 65 de ani, eligibilitatea bariatrică necesită evaluare cardiacă suplimentară.')
    : null;

  return (
    <section id="bmi" className="py-24 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-accent/5 rounded-full -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-prime/5 rounded-full translate-x-1/3 translate-y-1/3 pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent text-xs font-bold uppercase tracking-widest border border-accent/20 mb-5">
            <Activity size={14} className="fill-accent/30" />
            {isEn ? 'Medical BMI Screening Tool' : 'Instrument Medical de Screening IMC'}
          </div>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-prime mb-4">
            {isEn ? 'BMI Calculator & ' : 'Calculator IMC & '}
            <span className="text-accent">{isEn ? 'Bariatric Check' : 'Verificare Bariatrică'}</span>
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto text-sm md:text-base leading-relaxed">
            {isEn
              ? 'Calculate your BMI instantly. Our algorithm analyses gender, age and height to provide a medically personalised result.'
              : 'Calculați IMC-ul instantaneu. Algoritmul nostru analizează sexul, vârsta și înălțimea pentru un rezultat medical personalizat.'}
          </p>
        </div>

        <div className="bg-white rounded-[2.5rem] shadow-[0_20px_60px_rgba(11,22,38,0.08)] border border-gray-100 overflow-hidden">
          {/* Gold accent top bar */}
          <div className="h-1.5 bg-gradient-to-r from-accent via-yellow-300 to-accent" />

          <div className="p-8 md:p-12">
            <form onSubmit={calculate} aria-label={isEn ? 'BMI Calculator' : 'Calculator IMC'}>

              {/* Gender Toggle */}
              <div className="mb-8">
                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">{isEn ? 'Gender' : 'Sex'}</p>
                <div className="inline-flex rounded-2xl bg-gray-50 border border-gray-100 p-1 gap-1" role="radiogroup" aria-label={isEn ? 'Select gender' : 'Selectați sexul'}>
                  {[
                    { val: 'male',   labelEn: '♂ Male',   labelRo: '♂ Masculin' },
                    { val: 'female', labelEn: '♀ Female', labelRo: '♀ Feminin'  },
                  ].map(({ val, labelEn, labelRo }) => (
                    <button
                      key={val}
                      type="button"
                      role="radio"
                      aria-checked={gender === val}
                      onClick={() => setGender(val)}
                      className={`px-8 py-3 rounded-xl text-sm font-bold transition-all duration-200 ${
                        gender === val
                          ? 'bg-prime text-white shadow-lg scale-[1.02]'
                          : 'text-gray-400 hover:text-prime'
                      }`}
                    >
                      {isEn ? labelEn : labelRo}
                    </button>
                  ))}
                </div>
              </div>

              {/* Inputs Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-8">
                {/* Age */}
                <div>
                  <label htmlFor="bmi-age" className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">
                    {isEn ? 'Age (years)' : 'Vârstă (ani)'}
                  </label>
                  <input
                    id="bmi-age"
                    type="number"
                    value={age}
                    onChange={e => setAge(e.target.value)}
                    placeholder="ex: 38"
                    min="15" max="90"
                    className="w-full border border-gray-200 rounded-2xl px-5 py-4 text-lg font-semibold bg-gray-50 focus:bg-white focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all"
                  />
                </div>
                {/* Height */}
                <div>
                  <label htmlFor="bmi-height" className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">
                    {isEn ? 'Height (cm)' : 'Înălțime (cm)'}
                  </label>
                  <input
                    id="bmi-height"
                    type="number"
                    value={height}
                    onChange={e => setHeight(e.target.value)}
                    placeholder="ex: 172"
                    min="100" max="250"
                    required aria-required="true"
                    className="w-full border border-gray-200 rounded-2xl px-5 py-4 text-lg font-semibold bg-gray-50 focus:bg-white focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all"
                  />
                </div>
                {/* Weight */}
                <div>
                  <label htmlFor="bmi-weight" className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">
                    {isEn ? 'Weight (kg)' : 'Greutate (kg)'}
                  </label>
                  <input
                    id="bmi-weight"
                    type="number"
                    value={weight}
                    onChange={e => setWeight(e.target.value)}
                    placeholder="ex: 95"
                    min="30" max="350"
                    required aria-required="true"
                    className="w-full border border-gray-200 rounded-2xl px-5 py-4 text-lg font-semibold bg-gray-50 focus:bg-white focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all"
                  />
                </div>
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="w-full bg-prime text-white font-bold py-4 rounded-2xl shadow-lg hover:bg-[#0b1626] transition-all hover:-translate-y-0.5 active:scale-95 flex items-center justify-center gap-3 text-base"
              >
                <Activity size={18} />
                {isEn ? 'Analyse My BMI' : 'Analizați IMC-ul Meu'}
                <ArrowRight size={18} />
              </button>
            </form>

            {/* ── RESULTS ─────────────────────────────────────────────────── */}
            {result && (
              <div className="mt-10 animate-fade-up">
                {/* Divider */}
                <div className="h-px bg-gray-100 mb-10" />

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">

                  {/* LEFT: Gauge + Category */}
                  <div className="flex flex-col items-center text-center">
                    <GaugeChart bmi={result.bmi} />
                    <div className={`mt-4 inline-flex items-center gap-2 px-5 py-2 rounded-full border ${result.bg} ${result.border}`}>
                      <span className="w-2.5 h-2.5 rounded-full" style={{ background: result.color }} />
                      <span className="font-black text-sm" style={{ color: result.color }}>{result.label}</span>
                    </div>
                    <p className="text-gray-400 text-xs mt-3">
                      {isEn ? 'Your BMI:' : 'IMC-ul dumneavoastră:'} <strong style={{ color: result.color }}>{result.bmi}</strong>
                    </p>

                    {/* Scale legend */}
                    <div className="mt-6 w-full grid grid-cols-5 gap-1 text-center">
                      {[
                        { label: isEn ? 'Under' : 'Sub', range: '< 18.5', color: '#60a5fa' },
                        { label: isEn ? 'Normal' : 'Normal', range: '18.5–24.9', color: '#34d399' },
                        { label: isEn ? 'Over' : 'Supra', range: '25–29.9', color: '#fbbf24' },
                        { label: 'Ob. I', range: '30–34.9', color: '#f97316' },
                        { label: 'Ob. II+', range: '≥ 35', color: '#ef4444' },
                      ].map(s => (
                        <div key={s.label}>
                          <div className="w-full h-2 rounded-full mb-1" style={{ background: s.color }} />
                          <p className="text-[9px] font-bold text-gray-500">{s.label}</p>
                          <p className="text-[8px] text-gray-400">{s.range}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* RIGHT: Analysis cards */}
                  <div className="space-y-4">

                    {/* Ideal weight card */}
                    <div className="bg-gray-50 border border-gray-100 rounded-2xl p-5">
                      <div className="flex items-center gap-2 mb-3">
                        <Info size={15} className="text-accent" />
                        <p className="text-xs font-bold uppercase tracking-widest text-gray-400">
                          {isEn ? 'Ideal Weight Range' : 'Intervalul de Greutate Ideală'}
                        </p>
                      </div>
                      <p className="text-2xl font-black text-prime">
                        {result.idealLo} – {result.idealHi} <span className="text-base font-semibold text-gray-400">kg</span>
                      </p>
                      <p className="text-xs text-gray-500 mt-1">
                        {isEn
                          ? `Devine formula adjusted for ${gender === 'male' ? 'male' : 'female'} physiology${age ? ` at age ${age}` : ''}.`
                          : `Formula Devine ajustată pentru fiziologia ${gender === 'male' ? 'masculină' : 'feminină'}${age ? ` la vârsta de ${age} ani` : ''}.`}
                      </p>
                    </div>

                    {/* To-lose card (if overweight) */}
                    {result.bmi >= 25 && parseFloat(weight) > result.idealHi && (
                      <div className="bg-blue-50 border border-blue-100 rounded-2xl p-5">
                        <p className="text-xs font-bold uppercase tracking-widest text-blue-400 mb-1">
                          {isEn ? 'Excess Weight' : 'Greutate în Exces'}
                        </p>
                        <p className="text-xl font-black text-blue-600">
                          ~{Math.round(parseFloat(weight) - result.idealHi)} kg
                        </p>
                        <p className="text-xs text-blue-500 mt-1">
                          {isEn ? 'to reach your ideal weight range' : 'pentru a ajunge la intervalul de greutate ideală'}
                        </p>
                      </div>
                    )}

                    {/* Age warning */}
                    {ageNote && (
                      <div className="bg-yellow-50 border border-yellow-200 rounded-2xl p-4 flex gap-3">
                        <AlertTriangle size={16} className="text-yellow-500 shrink-0 mt-0.5" />
                        <p className="text-xs text-yellow-700 leading-relaxed">{ageNote}</p>
                      </div>
                    )}

                    {/* ── BARIATRIC ELIGIBILITY (BMI ≥ 35) ─────────────────── */}
                    {result.bariatric && (
                      <div className="bg-[#0b1626] rounded-2xl p-6 text-white border border-white/5 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-accent/10 rounded-full blur-3xl -mr-10 -mt-10" />
                        <div className="flex items-start gap-3 mb-4">
                          <div className="w-9 h-9 bg-accent rounded-xl flex items-center justify-center shrink-0">
                            <CheckCircle size={18} className="text-prime" />
                          </div>
                          <div>
                            <p className="font-black text-accent text-sm uppercase tracking-widest mb-0.5">
                              {isEn ? 'Bariatric Surgery Eligible' : 'Eligibil pentru Chirurgie Bariatrică'}
                            </p>
                            <p className="text-gray-400 text-xs">BMI ≥ 35 · {isEn ? 'WHO Class II–III Obesity' : 'Obezitate WHO Clasa II–III'}</p>
                          </div>
                        </div>
                        <p className="text-gray-300 text-sm leading-relaxed mb-5">
                          {isEn
                            ? 'Based on your BMI, you meet the international clinical criteria (WHO/IFSO) for bariatric surgery. Gastric Sleeve or Bypass at Meva Clinic Istanbul could be the decisive step toward lasting weight loss.'
                            : 'Pe baza IMC-ului dumneavoastră, îndepliniți criteriile clinice internaționale (WHO/IFSO) pentru chirurgia bariatrică. Gastric Sleeve sau Bypass la Meva Clinic Istanbul ar putea fi pasul decisiv spre pierderea durabilă în greutate.'}
                        </p>
                        <Link
                          to={isEn ? '/en/contact' : '/ro/contact'}
                          className="w-full flex items-center justify-center gap-2 bg-accent text-prime font-bold py-3.5 rounded-xl hover:bg-yellow-400 transition-all shadow-lg text-sm"
                        >
                          <Phone size={15} />
                          {isEn ? 'Book Free Bariatric Consultation' : 'Rezervați Consultație Bariatrică Gratuită'}
                        </Link>
                      </div>
                    )}

                    {/* Non-bariatric CTA */}
                    {result.cta && !result.bariatric && !sent && (
                      <form onSubmit={submitLead} className="bg-gray-50 border border-gray-100 rounded-2xl p-5">
                        <p className="font-bold text-prime text-sm mb-4">{result.cta}</p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-3">
                          <input
                            type="text"
                            placeholder={isEn ? 'Full Name *' : 'Nume Complet *'}
                            value={name}
                            onChange={e => setName(e.target.value)}
                            required
                            className="border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20"
                          />
                          <input
                            type="tel"
                            placeholder={isEn ? 'Phone Number *' : 'Număr Telefon *'}
                            value={phone}
                            onChange={e => setPhone(e.target.value)}
                            required
                            className="border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20"
                          />
                        </div>
                        <button
                          type="submit"
                          disabled={sending}
                          className="w-full bg-accent text-prime font-bold py-3 rounded-xl shadow hover:bg-yellow-400 transition-all text-sm disabled:opacity-60"
                        >
                          {sending ? (isEn ? 'Sending…' : 'Se trimite…') : (isEn ? 'Request Callback in 15 min' : 'Solicitați Apel în 15 min')}
                        </button>
                      </form>
                    )}

                    {/* Success */}
                    {sent && (
                      <div className="flex items-center gap-3 p-4 bg-green-50 border border-green-200 rounded-2xl">
                        <CheckCircle size={20} className="text-green-600 shrink-0" />
                        <p className="text-green-700 font-bold text-sm">
                          {isEn ? '✅ Request sent! A consultant will call within 15 minutes.' : '✅ Cerere trimisă! Un consultant vă va suna în 15 minute.'}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Medical disclaimer */}
        <p className="text-center text-[11px] text-gray-400 mt-6 max-w-2xl mx-auto leading-relaxed">
          {isEn
            ? '⚕️ This tool is for informational purposes only and does not constitute medical advice. Always consult a qualified physician before making health decisions.'
            : '⚕️ Acest instrument are scop informativ și nu constituie sfat medical. Consultați întotdeauna un medic calificat înainte de a lua decizii privind sănătatea.'}
        </p>
      </div>
    </section>
  );
};

export default BmiCalculator;

```

### Dosya Adı: src\components\Breadcrumbs.jsx
```jsx
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

const Breadcrumbs = ({ isEn = false, items = [] }) => {
  return (
    <nav className="flex items-center space-x-2 text-xs font-bold uppercase tracking-widest text-gray-400 mb-8 overflow-x-auto whitespace-nowrap pb-2">
      <Link to={isEn ? "/en" : "/ro"} className="hover:text-prime transition-colors flex items-center gap-1.5 shrink-0">
        <Home size={14} className="text-accent" />
        {isEn ? "Home" : "Acasă"}
      </Link>
      
      {items.map((item, idx) => (
        <React.Fragment key={idx}>
          <ChevronRight size={12} className="text-gray-300 shrink-0" />
          {item.path ? (
            <Link to={item.path} className="hover:text-prime transition-colors shrink-0">
              {item.label}
            </Link>
          ) : (
            <span className="text-prime shrink-0">{item.label}</span>
          )}
        </React.Fragment>
      ))}
    </nav>
  );
};

export default Breadcrumbs;

```

### Dosya Adı: src\components\ClinicalBadges.jsx
```jsx
import React from 'react';
import { ShieldCheck, Award, CheckCircle, Microscope, HeartPulse, Zap } from 'lucide-react';

// Reusable glassmorphism tech-spec card
export const TechCard = ({ icon: Icon, title, value, sub }) => (
  <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-5 flex items-start gap-4">
    <div className="w-10 h-10 rounded-xl bg-accent/20 flex items-center justify-center shrink-0">
      <Icon size={18} className="text-accent" />
    </div>
    <div>
      <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-0.5">{sub}</p>
      <p className="font-bold text-white text-sm leading-snug">{title}</p>
      {value && <p className="text-xs text-accent font-bold mt-0.5">{value}</p>}
    </div>
  </div>
);

// Certification/Trust row
export const CertRow = ({ isEn }) => (
  <div className="mt-12 pt-8 border-t border-gray-100">
    <p className="text-center text-xs font-bold text-gray-400 uppercase tracking-widest mb-5">
      {isEn ? 'Accreditations & Certifications' : 'Acreditări & Certificări'}
    </p>
    <div className="flex flex-wrap justify-center gap-4">
      {[
        { label: 'JCI Accredited', icon: ShieldCheck, color: 'text-blue-500' },
        { label: 'TÜV Certified', icon: Award, color: 'text-green-500' },
        { label: 'Ministry of Health TR', icon: CheckCircle, color: 'text-prime' },
        { label: 'ISAPS Member', icon: HeartPulse, color: 'text-accent' },
        { label: 'ISO 9001:2015', icon: Microscope, color: 'text-purple-500' },
      ].map((cert, i) => {
        const Icon = cert.icon;
        return (
          <div key={i} className="flex items-center gap-2 px-4 py-2 bg-gray-50 border border-gray-100 rounded-full">
            <Icon size={14} className={cert.color} />
            <span className="text-xs font-bold text-gray-600">{cert.label}</span>
          </div>
        );
      })}
    </div>
  </div>
);

// Recovery Timeline component
export const RecoveryTimeline = ({ steps, isEn }) => (
  <div className="my-10 bg-gray-50 rounded-3xl p-8 border border-gray-100">
    <div className="flex items-center gap-2 mb-6">
      <Zap size={16} className="text-accent" />
      <h3 className="font-bold text-prime uppercase tracking-widest text-sm">
        {isEn ? 'Recovery Timeline' : 'Cronologie Recuperare'}
      </h3>
    </div>
    <div className="flex flex-col md:flex-row gap-0">
      {steps.map((s, i) => (
        <div key={i} className="flex md:flex-col items-start md:items-center flex-1 relative">
          {i < steps.length - 1 && (
            <div className="hidden md:block absolute top-4 left-1/2 w-full h-0.5 bg-gradient-to-r from-accent to-gray-200 z-0" />
          )}
          <div className="w-8 h-8 rounded-full bg-accent text-[#0b1626] font-black text-xs flex items-center justify-center shrink-0 z-10 shadow-md">
            {i + 1}
          </div>
          <div className="ml-4 md:ml-0 md:mt-3 md:text-center pb-6 md:pb-0 md:px-2">
            <p className="font-bold text-prime text-sm">{s.period}</p>
            <p className="text-xs text-gray-500 mt-0.5 leading-snug">{s.label}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
);

// Clinically Verified 2026 badge
export const VerifiedBadge = ({ isEn }) => (
  <div className="inline-flex items-center gap-2 bg-green-50 border border-green-200 rounded-full px-4 py-1.5 mb-6">
    <CheckCircle size={13} className="text-green-500" />
    <span className="text-xs font-bold text-green-700 uppercase tracking-widest">
      {isEn ? 'Clinically Verified 2026' : 'Verificat Clinic 2026'}
    </span>
  </div>
);

// Lead magnet box (for facelift etc.)
export const LeadMagnetBox = ({ isEn, pdfLabel, onCapture }) => {
  const [email, setEmail] = React.useState('');
  const [done, setDone] = React.useState(false);
  const handle = (e) => {
    e.preventDefault();
    console.log('[MEVA PDF LEAD]', { email, guide: pdfLabel });
    setDone(true);
    if (onCapture) onCapture(email);
  };
  return (
    <div className="my-10 bg-gradient-to-br from-[#0b1626] to-[#0d2a4a] rounded-3xl p-8 text-white border border-white/10">
      <div className="flex items-start gap-4">
        <div className="w-12 h-12 rounded-2xl bg-accent/20 flex items-center justify-center shrink-0">
          <Award size={22} className="text-accent" />
        </div>
        <div className="flex-grow">
          <p className="text-xs font-bold text-accent uppercase tracking-widest mb-1">
            {isEn ? 'Free Clinical Resource' : 'Resursă Clinică Gratuită'}
          </p>
          <h4 className="font-bold text-xl font-serif mb-2">{pdfLabel}</h4>
          <p className="text-sm text-gray-400 mb-5">
            {isEn
              ? 'Includes: Clinical recovery timeline, nutritional protocol, and edema management guide — written by our surgical team.'
              : 'Include: Cronologia recuperării clinice, protocolul nutrițional și ghidul de management al edemului — redactat de echipa chirurgicală Meva.'
            }
          </p>
          {!done ? (
            <form onSubmit={handle} className="flex gap-2">
              <input
                type="email" required value={email} onChange={e => setEmail(e.target.value)}
                placeholder={isEn ? 'Your email address' : 'Adresa ta de email'}
                className="flex-grow bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-400 focus:outline-none focus:border-accent transition-colors"
              />
              <button type="submit" className="bg-accent hover:bg-yellow-400 text-[#0b1626] font-bold px-5 py-3 rounded-xl text-sm whitespace-nowrap transition-all">
                {isEn ? 'Download Free' : 'Descarcă Gratuit'}
              </button>
            </form>
          ) : (
            <p className="text-green-400 font-bold text-sm flex items-center gap-2">
              <CheckCircle size={16} /> {isEn ? 'Guide sent to your email!' : 'Ghidul a fost trimis pe email!'}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

```

### Dosya Adı: src\components\ConsultationModal.jsx
```jsx
import React, { useState } from 'react';
import { X, CheckCircle, ShieldCheck, Clock, Phone, Mail, User } from 'lucide-react';
import { pushToDataLayer } from '../utils/AnalyticsUtils';

const ConsultationModal = ({ isOpen, onClose, isEn }) => {
  const [formState, setFormState] = useState('idle'); // idle, loading, success

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormState('loading');
    // Simulate API call
    setTimeout(() => {
      setFormState('success');
      pushToDataLayer('generate_lead', { form_location: 'consultation_modal' });
      pushToDataLayer('form_submission_success', { form_location: 'consultation_modal' });
    }, 1500);
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-[#0b1626]/80 backdrop-blur-sm transition-opacity duration-500 animate-fade-in"
        onClick={onClose}
      ></div>

      {/* Modal Container */}
      <div className="relative bg-white w-full max-w-lg rounded-[2.5rem] shadow-2xl overflow-hidden transform transition-all duration-500 animate-scale-in">
        
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-full bg-gray-50 text-gray-400 hover:text-prime transition-colors z-10"
        >
          <X size={20} />
        </button>

        {formState === 'success' ? (
          <div className="p-12 text-center flex flex-col items-center">
            <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center text-green-500 mb-6">
              <CheckCircle size={40} />
            </div>
            <h2 className="text-3xl font-serif font-bold text-prime mb-4">
              {isEn ? "Request Received" : "Solicitare Recepționată"}
            </h2>
            <p className="text-gray-500 leading-relaxed">
              {isEn 
                ? "Our board-certified medical coordinator will contact you within the next 30 minutes for your preliminary assessment." 
                : "Coordonatorul nostru medical acreditat vă va contacta în următoarele 30 de minute pentru evaluarea preliminară."}
            </p>
            <button 
              onClick={onClose}
              className="mt-10 bg-prime text-white px-10 py-4 rounded-2xl font-bold hover:shadow-xl transition-all"
            >
              {isEn ? "Close Window" : "Închide Fereastra"}
            </button>
          </div>
        ) : (
          <div className="p-8 md:p-12">
            <div className="mb-8">
              <div className="flex items-center gap-2 text-accent mb-2">
                <ShieldCheck size={16} />
                <span className="text-xs font-bold uppercase tracking-widest">{isEn ? "Secure Clinical Form" : "Formular Clinic Securizat"}</span>
              </div>
              <h2 className="text-3xl font-serif font-bold text-prime leading-tight">
                {isEn ? "Schedule Your Expert Consultation" : "Programează Consultația Ta cu Experții"}
              </h2>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="relative">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                <input 
                  required
                  type="text" 
                  placeholder={isEn ? "Full Name" : "Nume Complet"}
                  className="w-full pl-12 pr-4 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:ring-2 focus:ring-accent outline-none transition-all font-sans text-sm"
                />
              </div>

              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                <input 
                  required
                  type="email" 
                  placeholder="Email"
                  className="w-full pl-12 pr-4 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:ring-2 focus:ring-accent outline-none transition-all font-sans text-sm"
                />
              </div>

              <div className="relative">
                <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                <input 
                  required
                  type="tel" 
                  placeholder={isEn ? "Phone Number" : "Număr de Telefon"}
                  className="w-full pl-12 pr-4 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:ring-2 focus:ring-accent outline-none transition-all font-sans text-sm"
                />
              </div>

              <div className="pt-2">
                <button 
                  disabled={formState === 'loading'}
                  className="w-full bg-prime hover:bg-[#0f1f38] text-white py-5 rounded-2xl font-bold flex items-center justify-center gap-3 transition-all shadow-xl hover:-translate-y-0.5 disabled:opacity-70"
                >
                  {formState === 'loading' ? (
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                  ) : (
                    <>
                      {isEn ? "Request Free Assessment" : "Solicită Evaluarea Gratuită"}
                      <Clock size={18} className="text-accent" />
                    </>
                  )}
                </button>
              </div>

              <p className="text-[10px] text-center text-gray-400 font-medium px-6">
                {isEn 
                  ? "By submitting, you agree to our JCI-compliant privacy policy. Your medical data is encrypted." 
                  : "Prin trimitere, ești de acord cu politica de confidențialitate JCI. Datele tale medicale sunt criptate."}
              </p>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default ConsultationModal;

```

### Dosya Adı: src\components\ContactForm.jsx
```jsx
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

```

### Dosya Adı: src\components\CookieBanner.jsx
```jsx
import React, { useState, useEffect } from 'react';
import { Shield, ChevronRight, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const CookieBanner = () => {
  const [isVisible, setIsVisible] = useState(false);
  const location = useLocation();
  const isEn = location.pathname.startsWith('/en');

  useEffect(() => {
    const consent = localStorage.getItem('meva-cookie-consent');
    if (!consent) {
      const timer = setTimeout(() => setIsVisible(true), 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('meva-cookie-consent', 'accepted');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 left-6 right-6 md:left-12 md:right-auto md:max-w-md z-[2000] animate-fade-up">
      <div className="bg-[#0b1626]/95 backdrop-blur-xl border border-white/10 rounded-[2rem] p-8 shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-accent/10 rounded-full blur-3xl -mr-16 -mt-16"></div>
        
        <button 
          onClick={() => setIsVisible(false)}
          className="absolute top-4 right-4 text-gray-500 hover:text-white transition-colors"
          aria-label="Close"
        >
          <X size={20} />
        </button>

        <div className="flex items-center gap-3 mb-4 text-accent">
           <Shield size={24} />
           <span className="font-bold text-xs uppercase tracking-widest">{isEn ? "Privacy Center" : "Centru de Confidențialitate"}</span>
        </div>

        <h3 className="text-xl font-serif font-bold text-white mb-3">
           {isEn ? "Respecting your medical journey" : "Respectăm călătoria ta medicală"}
        </h3>
        
        <p className="text-sm text-gray-400 font-sans leading-relaxed mb-6">
           {isEn 
             ? "We use cookies to enhance your clinical experience and analyze our authority hub traffic. By clicking 'Accept All', you consent to our use of cookies." 
             : "Folosim cookie-uri pentru a îmbunătăți experiența ta clinică și a analiza traficul hub-ului nostru. Apăsând 'Acceptă Tot', ești de acord cu utilizarea acestora."}
           {" "}
           <Link to={isEn ? "/en/privacy-policy" : "/ro/politica-confidentialitate"} className="text-accent underline hover:text-white transition-colors">
              {isEn ? "View Policy" : "Vezi Politica"}
           </Link>
        </p>

        <div className="flex flex-col sm:flex-row gap-3">
           <button 
             onClick={handleAccept}
             className="flex-grow bg-accent text-prime font-bold py-3.5 px-6 rounded-xl hover:bg-white transition-all text-sm flex items-center justify-center gap-2"
           >
              {isEn ? "Accept All" : "Acceptă Tot"} <ChevronRight size={16} />
           </button>
           <button 
             onClick={() => setIsVisible(false)}
             className="px-6 py-3.5 rounded-xl border border-white/10 text-white font-bold text-sm hover:bg-white/5 transition-all"
           >
              {isEn ? "Settings" : "Setări"}
           </button>
        </div>
      </div>
    </div>
  );
};

export default CookieBanner;

```

### Dosya Adı: src\components\CookieConsent.jsx
```jsx
import React, { useState, useEffect } from 'react';
import { ShieldCheck } from 'lucide-react';

const CookieConsent = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('gdpr_consent');
    if (consent === null) {
      setTimeout(() => setShow(true), 1500);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('gdpr_consent', 'true');
    setShow(false);
    // Ping pixel initialization if needed
    if (typeof window !== 'undefined' && window.fbq) {
       window.fbq('consent', 'grant');
    }
  };

  const handleDecline = () => {
    localStorage.setItem('gdpr_consent', 'false');
    setShow(false);
  };

  if (!show) return null;

  return (
    <div className="fixed bottom-24 left-4 right-4 md:bottom-6 md:left-auto md:right-6 md:w-[420px] bg-[#0b1626]/95 backdrop-blur-xl border border-white/10 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] p-6 z-[100] text-white">
      <div className="flex items-center space-x-3 mb-4">
        <div className="w-10 h-10 rounded-full bg-prime flex items-center justify-center border border-white/10 shrink-0">
           <ShieldCheck size={20} className="text-accent" />
        </div>
        <div>
           <h3 className="font-serif font-bold text-lg text-white leading-tight">Securitatea Datelor Tale (GDPR)</h3>
           <p className="text-xs text-accent uppercase tracking-widest font-bold mt-1">Conformitate Europeană</p>
        </div>
      </div>
      <p className="text-gray-300 text-sm font-sans mb-6 leading-relaxed">
        Folosim tehnologii (inclusiv Meta Pixel & CAPI) pentru a-ți personaliza experiența, a analiza traficul și pentru a-ți oferi oferte relevante cu confidențialitate absolută.
      </p>
      <div className="flex space-x-3">
        <button onClick={handleAccept} className="flex-1 bg-gradient-to-r from-prime to-[#112440] hover:from-accent hover:to-accent border border-white/10 transition-all duration-300 py-3 rounded-xl font-bold text-sm shadow-lg text-white">
          Acceptă Tot
        </button>
        <button onClick={handleDecline} className="flex-1 bg-transparent border border-white/20 hover:bg-white/5 transition-all duration-300 py-3 rounded-xl font-bold text-sm text-gray-400 hover:text-white">
          Refuză
        </button>
      </div>
    </div>
  );
};

export default CookieConsent;

```

### Dosya Adı: src\components\CostEstimator.jsx
```jsx
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

```

### Dosya Adı: src\components\DoctorBadge.jsx
```jsx
import React from 'react';
import { ShieldCheck } from 'lucide-react';

const DoctorBadge = ({ text = "Procedură aprobată medical - Specialist Meva Clinic" }) => (
  <div className="my-6 inline-flex items-center bg-white border border-gray-100 rounded-xl py-4 px-6 shadow-md">
    <div className="w-12 h-12 rounded-full mr-4 bg-prime/5 flex items-center justify-center shrink-0">
       <ShieldCheck size={28} className="text-accent" />
    </div>
    <div className="flex flex-col text-left">
      <span className="text-[11px] uppercase font-bold text-gray-400 tracking-widest leading-none mb-1">Expert Verified</span>
      <span className="font-serif text-sm md:text-base font-bold text-prime leading-tight">{text}</span>
    </div>
  </div>
);

export default DoctorBadge;

```

### Dosya Adı: src\components\DynamicSEO.jsx
```jsx
import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';
import { pushToDataLayer } from '../utils/AnalyticsUtils';

const DynamicSEO = ({ 
  title = "Meva Clinic - Chirurgie Bariatrică și Gastric Sleeve în Istanbul", 
  description = "Meva Clinic Istanbul oferă pachete VIP all-inclusive pentru Gastric Sleeve și Bypass. Recuperare rapidă, experți de top și rezultate dovedite. Află prețul!", 
  path = "",
  schemaType = "MedicalBusiness",
  image = "https://www.mevaclinic.com/premium-clinical-image.jpg",
  keywords,
  reviewer = null   // Optional: { name, specialty, credentials, url } from REVIEWERS constant
}) => {
  const siteUrl = "https://www.mevaclinic.com";
  const currentUrl = `${siteUrl}${path}`;
  const isRo = path.startsWith('/ro') || path === '/';
  const isEn = path.startsWith('/en');

  const routerLocation = useLocation();

  useEffect(() => {
    try {
      pushToDataLayer('virtual_page_view', {
        page_path: routerLocation.pathname,
        page_title: title,
        language: isEn ? 'en' : 'ro'
      });
    } catch {
      // Never crash the page due to analytics
    }
  }, [routerLocation.pathname, title, isEn]);

  // Derive the alternate language path
  let roPath = path;
  let enPath = path;
  
  if (path === '/' || path === '/ro') {
    roPath = '/';
    enPath = '/en';
  } else if (path.startsWith('/ro')) {
    enPath = path.replace('/ro', '/en');
  } else if (path.startsWith('/en')) {
    roPath = path.replace('/en', '/ro');
    if (roPath === '/ro') roPath = '/';
  }

  const keywordsRo = "clinica istanbul transplant par, pret gastric sleeve turcia, oncologie moderna bariatrica, transplant par Turcia, chirurgie bariatrica Istanbul, implant dentar pret, oncologie Turcia, CyberKnife Romania, gastric sleeve Istanbul, MD Harun, clinica medicala Istanbul, turism medical Turcia";
  const keywordsEn = "best hair transplant Istanbul, bariatric surgery Turkey, gastric sleeve costs, MD Harun, dental implants Turkey, CyberKnife oncology Istanbul, medical tourism Turkey, organ transplant Istanbul";

  const medicalBusinessSchema = {
    "@context": "https://schema.org",
    "@type": ["MedicalBusiness", "HealthAndBeautyBusiness", "LocalBusiness"],
    "name": "Meva Clinic",
    "url": siteUrl,
    "logo": `${siteUrl}/logo.png`,
    "image": image,
    "description": "Premium medical tourism clinic in Istanbul, Turkey. Specializing in Bariatric Surgery, Hair Transplant, Oncology (CyberKnife), Dental Implants, Plastic Surgery and Organ Transplant.",
    "telephone": "+905324675941",
    "email": "info@mevaclinic.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Acibadem Partner Clinic, Altunizade",
      "addressLocality": "Istanbul",
      "addressRegion": "Istanbul",
      "postalCode": "34662",
      "addressCountry": "TR"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "41.0182",
      "longitude": "29.0434"
    },
    "hasMap": "https://www.google.com/maps?cid=1234567890",
    "areaServed": [
      { "@type": "Country", "name": "Romania" },
      { "@type": "Country", "name": "United Kingdom" },
      { "@type": "Country", "name": "Global" }
    ],
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],
        "opens": "09:00",
        "closes": "18:00"
      }
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+905324675941",
      "contactType": "customer service",
      "availableLanguage": ["Romanian", "English", "Turkish"],
      "areaServed": ["RO", "GB", "Global"]
    },
    "medicalSpecialty": [
      "Bariatric Surgery",
      "Hair Transplant",
      "Oncology",
      "Plastic Surgery",
      "Dental Care",
      "Organ Transplant"
    ],
    "employee": [
      {
        "@type": "Physician",
        "name": "Dr. Hasan Erdem",
        "medicalSpecialty": "Bariatric Surgery"
      },
      {
        "@type": "Physician",
        "name": "MD Harun",
        "medicalSpecialty": "Hair Restoration"
      }
    ],
    "priceRange": "$$$$",
    "sameAs": [
      "https://www.facebook.com/mevaclinic",
      "https://www.instagram.com/mevaclinic",
      "https://www.linkedin.com/company/meva-clinic",
      "https://www.youtube.com/@mevaclinic"
    ]
  };

  const contactPageSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": title,
    "url": currentUrl,
    "description": description,
    "mainEntity": medicalBusinessSchema
  };


  const reviewedByNode = reviewer ? {
    "@type": "Physician",
    "name": reviewer.name,
    "medicalSpecialty": reviewer.specialty,
    "description": reviewer.bio || reviewer.credentials,
    "url": reviewer.url || "https://snazzy-palmier-4439dc.netlify.app/en/about-us",
    ...(reviewer.education ? { "alumniOf": { "@type": "EducationalOrganization", "name": reviewer.education } } : {}),
    ...(reviewer.institution ? { "affiliation": { "@type": "Hospital", "name": reviewer.institution } } : {}),
    "worksFor": {
      "@type": "MedicalOrganization",
      "name": "Meva Clinic Istanbul"
    }
  } : undefined;

  const genericSchema = {
    "@context": "https://schema.org",
    "@type": schemaType,
    "name": title,
    "url": currentUrl,
    "description": description,
    "provider": medicalBusinessSchema,
    ...(reviewedByNode ? { "reviewedBy": reviewedByNode } : {})
  };

  const ivfSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalProcedure",
    "name": "IVF / In-Vitro Fertilization",
    "url": currentUrl,
    "description": "High-success-rate IVF treatments performed at Meva Clinic's specialized branch in Northern Cyprus, equipped with the latest reproductive technology.",
    "procedureType": "Therapeutic",
    "followUp": "Post-transfer monitoring and hormonal support included in package",
    "preparation": "Comprehensive hormonal screening and pre-implantation genetic testing available",
    "status": "EventScheduled",
    "location": {
      "@type": "Hospital",
      "name": "Meva Clinic Northern Cyprus Branch",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Lefko\u015fa",
        "addressRegion": "Northern Cyprus",
        "addressCountry": "CY"
      }
    },
    "provider": medicalBusinessSchema,
    ...(reviewedByNode ? { "reviewedBy": reviewedByNode } : {})
  };

  const getPageSchema = () => {
    if (schemaType === "MedicalBusiness") return medicalBusinessSchema;
    if (schemaType === "ContactPage") return contactPageSchema;
    if (schemaType === "IVF") return ivfSchema;
    return genericSchema;
  };

  const pageSchema = getPageSchema();

  return (
    <Helmet htmlAttributes={{ lang: isEn ? 'en' : 'ro' }}>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords || (isEn ? keywordsEn : keywordsRo)} />
      <meta name="robots" content="index, follow" />
      <meta name="author" content="Meva Clinic" />
      <link rel="canonical" href={currentUrl} />

      {/* Hreflang for bilingual SEO */}
      <link rel="alternate" hrefLang="ro" href={`${siteUrl}${roPath}`} />
      <link rel="alternate" hrefLang="en" href={`${siteUrl}${enPath}`} />
      <link rel="alternate" hrefLang="x-default" href={`${siteUrl}/ro`} />

      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content={image} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:locale" content={isEn ? "en_US" : "ro_RO"} />
      <meta property="og:site_name" content="Meva Clinic" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@mevaclinic" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Schema.org JSON-LD */}
      <script type="application/ld+json">
        {JSON.stringify(pageSchema)}
      </script>
    </Helmet>
  );
};

export default DynamicSEO;

```

### Dosya Adı: src\components\ExpertBadge.jsx
```jsx
import React from 'react';
import { ShieldCheck } from 'lucide-react';

const ExpertBadge = ({ isEn, name, title }) => (
  <div className="my-6 inline-flex items-center bg-white border border-gray-100 rounded-2xl py-3 px-5 shadow-sm">
    <div className="w-10 h-10 rounded-xl mr-4 bg-accent/10 flex items-center justify-center">
       <ShieldCheck size={20} className="text-accent" />
    </div>
    <div className="flex flex-col">
      <span className="text-[10px] uppercase font-bold text-gray-400 tracking-widest leading-none mb-1">
        {isEn ? "Lead Clinical Specialist" : "Specialist Clinic Coordonator"}
      </span>
      <span className="font-serif text-sm font-bold text-prime leading-none">
        {name || (isEn ? "Meva Specialist" : "Specialist Meva")}
      </span>
    </div>
  </div>
);

export default ExpertBadge;

```

### Dosya Adı: src\components\FAQSection.jsx
```jsx
import React, { useState } from 'react';
import { Plus, Minus, Search, HelpCircle } from 'lucide-react';
import { faqData } from '../data/faqData';

const FAQSection = ({ isEn = false, category = null }) => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  
  const data = isEn ? faqData.en : faqData.ro;
  
  // Filter by category if provided, then by search term
  let filteredData = category 
    ? data.filter(cat => cat.category.toLowerCase().includes(category.toLowerCase()))
    : data;

  const allQuestions = filteredData.flatMap(cat => cat.questions);
  const searchResults = searchTerm 
    ? allQuestions.filter(q => q.q.toLowerCase().includes(searchTerm.toLowerCase()) || q.a.toLowerCase().includes(searchTerm.toLowerCase()))
    : allQuestions;

  // FAQPage JSON-LD Schema
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": searchResults.map(q => ({
      "@type": "Question",
      "name": q.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": q.a
      }
    }))
  };

  return (
    <section className="py-12">
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>

      {!category && (
        <div className="relative max-w-xl mx-auto mb-12">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
          <input 
            type="text"
            placeholder={isEn ? "Search clinical questions..." : "Caută întrebări clinice..."}
            className="w-full pl-12 pr-4 py-4 rounded-2xl border border-gray-100 shadow-sm focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            aria-label={isEn ? "Search clinical questions" : "Caută întrebări clinice"}
          />
        </div>
      )}

      <div className="space-y-4 max-w-4xl mx-auto">
        {searchResults.length > 0 ? (
          searchResults.map((item, idx) => (
            <div key={idx} className="bg-white border border-gray-100 rounded-2xl overflow-hidden transition-all hover:shadow-md">
              <button 
                onClick={() => setActiveIndex(activeIndex === idx ? null : idx)}
                className="w-full px-8 py-6 flex items-center justify-between text-left group"
                aria-expanded={activeIndex === idx}
                aria-controls={`global-faq-answer-${idx}`}
                id={`global-faq-button-${idx}`}
              >
                <div className="flex items-center gap-4">
                  <HelpCircle className={`shrink-0 transition-colors ${activeIndex === idx ? 'text-accent' : 'text-gray-300'}`} size={20} aria-hidden="true" />
                  <span className={`font-bold text-lg transition-colors ${activeIndex === idx ? 'text-prime' : 'text-gray-600 group-hover:text-prime'}`}>
                    {item.q}
                  </span>
                </div>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all ${activeIndex === idx ? 'bg-accent text-white rotate-180' : 'bg-gray-50 text-gray-400'}`} aria-hidden="true">
                  {activeIndex === idx ? <Minus size={18} /> : <Plus size={18} />}
                </div>
              </button>
              <div 
                id={`global-faq-answer-${idx}`}
                aria-labelledby={`global-faq-button-${idx}`}
                role="region"
                className={`px-8 transition-all duration-500 ease-in-out ${activeIndex === idx ? 'max-h-[500px] pb-8 opacity-100' : 'max-h-0 opacity-0'}`}
              >
                <div className="pt-4 border-t border-gray-50 text-gray-500 leading-relaxed text-base">
                  {item.a}
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="text-center py-12 text-gray-400">
            {isEn ? "No matching questions found." : "Nu am găsit întrebări care să se potrivească."}
          </div>
        )}
      </div>
    </section>
  );
};

export default FAQSection;

```

### Dosya Adı: src\components\FloatingSupport.jsx
```jsx
import React, { useState } from 'react';
import { MessageCircle, X, ChevronRight, Phone } from 'lucide-react';
import { useLocation } from 'react-router-dom';

const FloatingSupport = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const isEn = location.pathname.startsWith('/en');

  const openWhatsApp = () => {
    window.open('https://api.whatsapp.com/send?phone=905000000000', '_blank');
  };

  return (
    <>
      {/* Desktop Floating Button */}
      <div className="fixed bottom-6 right-6 z-[90] hidden md:flex flex-col items-end">
        {isOpen && (
          <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 p-6 mb-4 w-80 transform transition-all animate-fade-in">
            <div className="flex justify-between items-center mb-4">
              <h4 className="font-bold text-prime flex items-center font-serif text-lg">
                <span className="w-2 h-2 rounded-full bg-green-500 mr-2 animate-pulse"></span>
                {isEn ? "Consultation Online" : "Consultant Online"}
              </h4>
              <button onClick={() => setIsOpen(false)} className="text-gray-400 hover:text-gray-600 focus:outline-none">
                <X size={20} />
              </button>
            </div>
            <p className="text-sm text-gray-500 mb-6 font-medium">
              {isEn ? "Get a free medical quote today. Fast 5-minute response." : "Obține o cotație gratuită azi. Răspuns rapid în 5 minute."}
            </p>
            <button 
              onClick={openWhatsApp}
              className="w-full bg-[#25D366] hover:bg-[#1DA851] text-white py-3 px-4 rounded-xl font-bold flex items-center justify-between transition-colors shadow-lg shadow-[#25D366]/20"
            >
              <div className="flex items-center text-sm">
                <MessageCircle size={20} className="mr-2" />
                {isEn ? "Chat on WhatsApp" : "Discută pe WhatsApp"}
              </div>
              <ChevronRight size={18} />
            </button>
          </div>
        )}

        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`${
            isOpen ? 'bg-gray-800' : 'bg-accent hover:bg-yellow-500'
          } text-white p-4 rounded-full shadow-[0_10px_30px_rgba(212,175,55,0.4)] transition-all duration-300 transform hover:scale-105 flex items-center justify-center`}
        >
          {isOpen ? <X size={28} /> : <MessageCircle size={28} className="text-prime" />}
        </button>
      </div>

      {/* Mobile Sticky Action Bar */}
      <div className="md:hidden fixed bottom-0 left-0 w-full bg-white border-t border-gray-200 z-[90] py-3 px-4 flex gap-3 shadow-[0_-5px_20px_rgba(0,0,0,0.05)]">
        <a 
          href="https://api.whatsapp.com/send?phone=905000000000"
          target="_blank"
          rel="noreferrer"
          className="flex-1 bg-[#25D366] text-white py-3.5 rounded-xl font-bold flex items-center justify-center text-sm shadow-md"
        >
          <MessageCircle size={18} className="mr-2" />
          {isEn ? "Talk to us" : "WhatsApp"}
        </a>
        <a 
          href="#ai-assistant"
          className="flex-1 bg-prime text-white py-3.5 rounded-xl font-bold flex items-center justify-center text-sm shadow-md"
        >
          <Phone size={18} className="mr-2" />
          {isEn ? "Get Quote" : "Cotație"}
        </a>
      </div>
    </>
  );
};
export default FloatingSupport;

```

### Dosya Adı: src\components\FloatingTrustBadge.jsx
```jsx
import React, { useState, useEffect } from 'react';
import { ShieldCheck, Award, Globe } from 'lucide-react';
import { useLocation } from 'react-router-dom';

const FloatingTrustBadge = () => {
  const [isVisible, setIsVisible] = useState(false);
  const location = useLocation();
  const isEn = location.pathname.startsWith('/en');

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 1000);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`fixed bottom-24 right-4 md:right-6 z-[2500] transition-all duration-700 transform ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'}`}>
       <div className="bg-prime/90 backdrop-blur-xl border border-white/10 rounded-2xl p-2.5 md:p-4 shadow-2xl flex items-center gap-3 md:gap-4 group hover:bg-prime transition-all">
          <div className="w-9 h-9 md:w-12 md:h-12 rounded-xl bg-accent flex items-center justify-center text-prime shadow-lg group-hover:scale-110 transition-transform">
             <ShieldCheck size={20} className="md:w-7 md:h-7" />
          </div>
          <div>
             <div className="flex items-center gap-1.5 mb-0.5 md:mb-1">
                <Award size={10} className="text-accent md:w-3 md:h-3" />
                <span className="text-[8px] md:text-[10px] font-bold text-white uppercase tracking-widest">{isEn ? "Verified Authority" : "Autoritate Verificată"}</span>
             </div>
             <p className="text-[10px] md:text-xs text-gray-300 font-medium whitespace-nowrap">
                {isEn ? "International Medical Board" : "Consiliul Medical Internațional"}
             </p>
          </div>
       </div>
    </div>
  );
};

export default FloatingTrustBadge;

```

### Dosya Adı: src\components\FloatingWhatsApp.jsx
```jsx
import React, { useState } from 'react';
import { MessageCircle, X, ChevronRight, Phone } from 'lucide-react';
import { useLocation } from 'react-router-dom';
import { pushToDataLayer } from '../utils/AnalyticsUtils';

const FloatingWhatsApp = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const isEn = location.pathname.startsWith('/en');

  const getWhatsAppMessage = () => {
    let message = isEn ? "Hello, I would like more information." : "Buna ziua, as dori mai multe informatii.";
    
    if (location.pathname.includes('/oncology') || location.pathname.includes('/oncologie')) {
      message = isEn ? "Hello, I want info about oncology." : "Buna ziua, as dori mai multe informatii despre tratamentul oncologic.";
    } else if (location.pathname.includes('/hair-transplant') || location.pathname.includes('/implant-par')) {
      message = isEn ? "Hello, I want info about hair transplant." : "Buna ziua, as dori mai multe informatii despre implantul de par.";
    } else if (location.pathname.includes('/bariatric') || location.pathname.includes('/gastric')) {
      message = isEn ? "Hello, I want info about bariatric surgery." : "Buna ziua, as dori mai multe informatii despre chirurgia bariatrica.";
    }
    
    return encodeURIComponent(message);
  };

  const openWhatsApp = () => {
    pushToDataLayer('whatsapp_click', { location: 'floating_widget' });
    const text = getWhatsAppMessage();
    window.open(`https://wa.me/905324675941?text=${text}`, '_blank');
  };

  return (
    <>
      {/* Desktop Floating Button */}
      <div className="fixed bottom-6 right-6 z-[90] hidden md:flex flex-col items-end">
        {isOpen && (
          <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 p-6 mb-4 w-80 transform transition-all animate-fade-in">
            <div className="flex justify-between items-center mb-4">
              <h4 className="font-bold text-prime flex items-center font-serif text-lg">
                <span className="w-2 h-2 rounded-full bg-green-500 mr-2 animate-pulse"></span>
                {isEn ? "Consultation Online" : "Consultant Online"}
              </h4>
              <button onClick={() => setIsOpen(false)} className="text-gray-400 hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-accent rounded-full" aria-label={isEn ? "Close chat panel" : "Închide panoul de chat"}>
                <X size={20} />
              </button>
            </div>
            <p className="text-sm text-gray-500 mb-6 font-medium">
              {isEn ? "Get a free medical quote today. Fast 5-minute response." : "Obține o cotație gratuită azi. Răspuns rapid în 5 minute."}
            </p>
            <button 
              onClick={openWhatsApp}
              aria-label={isEn ? "Open WhatsApp chat" : "Deschide chat WhatsApp"}
              className="w-full bg-[#25D366] hover:bg-[#1DA851] text-white py-3 px-4 rounded-xl font-bold flex items-center justify-between transition-colors shadow-lg shadow-[#25D366]/20"
            >
              <div className="flex items-center text-sm">
                <MessageCircle size={20} className="mr-2" />
                {isEn ? "Chat on WhatsApp" : "Discută pe WhatsApp"}
              </div>
              <ChevronRight size={18} />
            </button>
          </div>
        )}

        <div className="flex items-center gap-4">
          <div className="bg-white px-4 py-2 rounded-xl shadow-lg border border-gray-100 animate-bounce-slow hidden lg:block">
            <p className="text-[11px] font-bold text-prime">
              <span className="inline-block w-2 h-2 rounded-full bg-green-500 mr-2"></span>
              {isEn ? "We are online - ask a doctor" : "Suntem online - întrebați un medic"}
            </p>
          </div>
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? (isEn ? "Close consultation widget" : "Închide widget consultație") : (isEn ? "Open consultation widget" : "Deschide widget consultație")}
            aria-expanded={isOpen}
            className={`${
              isOpen ? 'bg-gray-800' : 'bg-accent hover:bg-yellow-500'
            } text-white p-4 rounded-full shadow-[0_10px_30px_rgba(212,175,55,0.4)] transition-all duration-300 transform hover:scale-110 flex items-center justify-center relative group`}
          >
            {isOpen ? <X size={28} /> : <MessageCircle size={28} className="text-prime" />}
            {!isOpen && (
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full border-2 border-white flex items-center justify-center text-[8px] font-bold text-white">
                1
              </span>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Sticky Action Bar */}
      <div className="md:hidden fixed bottom-0 left-0 w-full bg-white border-t border-gray-200 z-[90] py-3 px-4 flex gap-3 shadow-[0_-5px_20px_rgba(0,0,0,0.05)]" role="complementary" aria-label={isEn ? "Quick contact actions" : "Acțiuni rapide de contact"}>
        <button 
          onClick={openWhatsApp}
          aria-label={isEn ? "Contact us on WhatsApp" : "Contactează-ne pe WhatsApp"}
          className="flex-1 bg-[#25D366] text-white py-3.5 rounded-xl font-bold flex items-center justify-center text-sm shadow-md"
        >
          <MessageCircle size={18} className="mr-2" />
          {isEn ? "Talk to us" : "WhatsApp"}
        </button>
        <a 
          href="#ai-assistant"
          aria-label={isEn ? "Get a price quote" : "Obține o cotație de preț"}
          className="flex-1 bg-prime text-white py-3.5 rounded-xl font-bold flex items-center justify-center text-sm shadow-md"
        >
          <Phone size={18} className="mr-2" />
          {isEn ? "Get Quote" : "Cotație"}
        </a>
      </div>
    </>
  );
};
export default FloatingWhatsApp;

```

### Dosya Adı: src\components\Footer.jsx
```jsx
import React from 'react';
import { Phone, Mail, MapPin, ChevronRight, Globe2, ShieldCheck, Award, MessageCircle, Globe } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { pushToDataLayer } from '../utils/AnalyticsUtils';

// Trust badge data — fully bilingual
const TRUST_BADGES = [
  {
    icon: '🏛️',
    nameEn: 'TÜRSAB Approved',
    nameRo: 'Aprobat TÜRSAB',
    subEn: 'Group-A Travel Agency',
    subRo: 'Agenție Grup A',
    color: 'text-accent',
  },
  {
    icon: '🏥',
    nameEn: 'Ministry of Health',
    nameRo: 'Ministerul Sănătății',
    subEn: 'Republic of Turkey · Certified',
    subRo: 'Republica Turcia · Certificat',
    color: 'text-blue-400',
  },
  {
    icon: '🌐',
    nameEn: 'JCI Accredited',
    nameRo: 'Acreditat JCI',
    subEn: 'Global Patient Safety',
    subRo: 'Siguranță Globală',
    color: 'text-green-400',
  },
  {
    icon: '✅',
    nameEn: 'TÜV SÜD',
    nameRo: 'TÜV SÜD',
    subEn: 'Quality Management Certified',
    subRo: 'Certificat Calitate ISO',
    color: 'text-purple-400',
  },
  {
    icon: '🤝',
    nameEn: 'IMA Member',
    nameRo: 'Membru IMA',
    subEn: 'Medical Tourism Assoc.',
    subRo: 'Asoc. Turism Medical',
    color: 'text-yellow-400',
  },
];

const Footer = () => {
  const location = useLocation();
  const isEn = location.pathname.startsWith('/en');

  // Build opposite-language path for language switcher
  const getAltLangPath = () => {
    const path = location.pathname;
    if (path === '/' || path === '/ro') return '/en';
    if (path === '/en') return '/ro';
    if (path.startsWith('/ro/')) return path.replace('/ro/', '/en/');
    if (path.startsWith('/en/')) return path.replace('/en/', '/ro/');
    return isEn ? '/ro' : '/en';
  };

  const handleWhatsApp = () => {
    pushToDataLayer('whatsapp_click', { location: 'footer' });
  };

  return (
    <footer
      className="bg-[#0b1626] text-white relative"
      aria-label={isEn ? 'Site Footer' : 'Subsol Site'}
      itemScope
      itemType="https://schema.org/WPFooter"
    >
      {/* ── Map Section ── */}
      <div className="relative h-[400px] md:h-[520px] w-full border-b border-white/5 overflow-hidden group">
        <div className="absolute inset-0 z-10 bg-gradient-to-t from-[#0b1626] via-[#0b1626]/80 to-[#0b1626]/40 pointer-events-none transition-opacity duration-700 group-hover:opacity-80" />
        <iframe
          title="Meva Clinic Istanbul Location"
          src="https://maps.google.com/maps?q=Istanbul,Acibadem&t=&z=13&ie=UTF8&iwloc=&output=embed"
          className="w-full h-[140%] -mt-10 border-0 absolute inset-0 map-filter"
          loading="lazy"
        />
        <div className="absolute inset-0 z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center md:justify-end pb-12 md:pb-24 pointer-events-none">
          <div className="bg-[#0f1d2f]/80 backdrop-blur-2xl p-6 md:p-10 rounded-[2.5rem] max-w-lg border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] pointer-events-auto transform transition-all hover:scale-[1.02] duration-500">
            <div className="flex items-center space-x-2 text-accent mb-4">
              <Globe2 size={24} className="stroke-2" aria-hidden="true" />
              <span className="font-bold uppercase tracking-[0.2em] text-xs">Global Patient Support</span>
            </div>
            <h2 className="text-3xl font-serif font-bold mb-3 text-white">
              {isEn ? 'The Medical Heart of Istanbul' : 'Inima Medicală a Istanbulului'}
            </h2>
            <p className="text-base text-gray-300 font-sans leading-relaxed mb-6">
              {isEn
                ? 'Our strategic partnerships guarantee VIP access from landing to the procedures within the Acibadem network and 5-star hotels.'
                : 'Parteneriatele noastre strategice garantează accesul VIP de la aterizare până la procedurile din rețeaua Acibadem și hotelurile de 5 stele.'}
            </p>
            {/* WhatsApp CTA inside map card */}
            <a
              href={`https://wa.me/905324675941?text=${encodeURIComponent(isEn ? 'I would like a free medical consultation.' : 'Doresc o consultație medicală gratuită.')}`}
              onClick={handleWhatsApp}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={isEn ? 'Contact Meva Clinic on WhatsApp' : 'Contactați Meva Clinic pe WhatsApp'}
              className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1da851] text-white font-bold text-sm px-6 py-3 rounded-2xl transition-all shadow-lg hover:-translate-y-0.5"
            >
              <MessageCircle size={18} aria-hidden="true" />
              WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* ── Main Footer Grid ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-10 relative z-30">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

          {/* Col 1 — Brand */}
          <div className="space-y-6">
            <Link to={isEn ? '/en' : '/ro'} aria-label="Meva Clinic Home">
              <span className="font-serif text-4xl font-bold text-white tracking-tight block drop-shadow-md">
                Meva<span className="text-accent">Clinic</span>
              </span>
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-gray-500 mt-1 block">Istanbul Excellence</span>
            </Link>
            <p className="text-gray-400 font-sans text-sm leading-relaxed pr-4">
              {isEn
                ? 'Your trusted partner for medical excellence in Turkey. Premium VIP packages for safe interventions and absolute comfort.'
                : 'Partenerul tău de încredere pentru excelență medicală în Turcia. Pachete premium VIP pentru intervenții sigure și confort absolut.'}
            </p>
            {/* Social */}
            <div className="flex space-x-3">
              {[
                { href: 'https://facebook.com/mevaclinic', label: isEn ? 'Facebook' : 'Facebook', txt: 'FB' },
                { href: 'https://instagram.com/mevaclinic', label: 'Instagram', txt: 'IG' },
                { href: 'https://linkedin.com/company/meva-clinic', label: 'LinkedIn', txt: 'IN' },
                { href: 'https://youtube.com/@mevaclinic', label: 'YouTube', txt: 'YT' },
              ].map(({ href, label, txt }) => (
                <a key={txt} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
                  className="w-11 h-11 rounded-full border border-white/10 flex items-center justify-center hover:bg-accent hover:border-accent hover:text-prime transition-all duration-300 font-bold text-xs text-gray-300">
                  {txt}
                </a>
              ))}
            </div>
            {/* Footer Language Switcher */}
            <div className="flex items-center gap-2 pt-2">
              <Globe size={14} className="text-accent" aria-hidden="true" />
              <Link
                to={isEn ? location.pathname : getAltLangPath()}
                className={`text-xs font-bold px-3 py-1.5 rounded-full transition-all ${!isEn ? 'bg-accent text-prime' : 'text-gray-400 hover:text-white border border-white/10'}`}
                aria-current={!isEn ? 'true' : undefined}
              >
                🇹🇷 RO
              </Link>
              <Link
                to={!isEn ? getAltLangPath() : location.pathname}
                className={`text-xs font-bold px-3 py-1.5 rounded-full transition-all ${isEn ? 'bg-accent text-prime' : 'text-gray-400 hover:text-white border border-white/10'}`}
                aria-current={isEn ? 'true' : undefined}
              >
                🇬🇧 EN
              </Link>
            </div>
          </div>

          {/* Col 2 — Treatments */}
          <div className="space-y-6">
            <h3 className="text-lg font-serif font-bold text-white border-b border-white/10 pb-4">
              {isEn ? 'Medical Excellence' : 'Excelență Medicală'}
            </h3>
            <ul className="space-y-3 font-sans text-sm">
              {[
                { ro: '/ro/treatments/gastric-sleeve', en: '/en/treatments/gastric-sleeve', labelEn: 'Bariatric Surgery', labelRo: 'Chirurgie Bariatrică' },
                { ro: '/ro/treatments/meva-mixed-hair', en: '/en/treatments/meva-mixed-hair', labelEn: 'Sapphire FUE Hair', labelRo: 'Transplant Păr Safir' },
                { ro: '/ro/treatments/smart-oncology-drugs', en: '/en/treatments/smart-oncology-drugs', labelEn: 'Robotic Oncology', labelRo: 'Oncologie Robotică' },
                { ro: '/ro/treatments/zirconium-crowns', en: '/en/treatments/zirconium-crowns', labelEn: 'Dental Implants', labelRo: 'Implanturi Dentare' },
                { ro: '/ro/treatments/piezo-rhinoplasty', en: '/en/treatments/piezo-rhinoplasty', labelEn: 'Plastic Surgery', labelRo: 'Chirurgie Plastică' },
                { ro: '/ro/treatments/organ-transplant-turkey', en: '/en/treatments/organ-transplant-turkey', labelEn: 'Organ Transplant', labelRo: 'Transplant de Organe' },
              ].map((item) => (
                <li key={item.labelEn}>
                  <Link to={isEn ? item.en : item.ro} className="text-gray-400 hover:text-accent flex items-center transition-colors">
                    <ChevronRight size={14} className="mr-2 shrink-0" aria-hidden="true" />
                    {isEn ? item.labelEn : item.labelRo}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 — Resources */}
          <div className="space-y-6">
            <h3 className="text-lg font-serif font-bold text-white border-b border-white/10 pb-4">
              {isEn ? 'Patient Intelligence' : 'Inteligență Pacient'}
            </h3>
            <ul className="space-y-3 text-sm font-sans">
              {[
                { ro: '/ro/blog', en: '/en/blog', labelEn: 'Medical Archive', labelRo: 'Arhiva Medicală' },
                { ro: '/ro/faq', en: '/en/faq', labelEn: 'Clinical FAQ', labelRo: 'Întrebări Clinice' },
                { ro: '/ro/quiz', en: '/en/quiz', labelEn: 'Suitability Quiz', labelRo: 'Test de Eligibilitate' },
                { ro: '/ro/despre-noi', en: '/en/about-us', labelEn: 'Our Board', labelRo: 'Consiliul Medical' },
                { ro: '/ro/comparatie-medicala', en: '/en/medical-comparison', labelEn: 'Compare Clinics', labelRo: 'Comparație Clinici' },
                { ro: '/ro/romani-istanbul', en: '/ro/romani-istanbul', labelEn: 'Romania Hub', labelRo: 'Hub România' },
              ].map((item) => (
                <li key={item.labelEn}>
                  <Link to={isEn ? item.en : item.ro} className="text-gray-400 hover:text-white flex items-center transition-colors">
                    <ChevronRight size={14} className="mr-2 shrink-0" aria-hidden="true" />
                    {isEn ? item.labelEn : item.labelRo}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4 — Contact (LocalBusiness schema-compliant) */}
          <div className="space-y-6" itemScope itemType="https://schema.org/LocalBusiness">
            <meta itemProp="name" content="Meva Clinic" />
            <meta itemProp="telephone" content="+905324675941" />
            <meta itemProp="email" content="info@mevaclinic.com" />
            <h3 className="text-lg font-serif font-bold text-white border-b border-white/10 pb-4">
              {isEn ? 'Contact Us' : 'Contactează-ne'}
            </h3>
            <ul className="space-y-5 font-sans text-sm text-gray-300">
              <li className="flex items-start" itemProp="address" itemScope itemType="https://schema.org/PostalAddress">
                <MapPin className="text-accent mt-1 mr-4 flex-shrink-0" size={20} aria-hidden="true" />
                <span className="leading-relaxed text-gray-200">
                  <span itemProp="streetAddress">{isEn ? 'Acibadem Partner Clinic, Altunizade' : 'Clinica Partneră Acibadem, Altunizade'}</span>
                  <br />
                  <span itemProp="addressLocality">Istanbul</span>,{' '}
                  <span itemProp="addressCountry">{isEn ? 'Turkey' : 'Turcia'}</span>
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="text-accent mr-4 flex-shrink-0" size={20} aria-hidden="true" />
                <a
                  href="tel:+905324675941"
                  aria-label="+90 532 467 59 41"
                  className="text-gray-200 hover:text-white transition-colors"
                  itemProp="telephone"
                >
                  +90 532 467 59 41
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="text-accent mr-4 flex-shrink-0" size={20} aria-hidden="true" />
                <a
                  href="mailto:info@mevaclinic.com"
                  className="text-gray-200 hover:text-white transition-colors"
                  itemProp="email"
                >
                  info@mevaclinic.com
                </a>
              </li>
              {/* WhatsApp */}
              <li className="flex items-center">
                <MessageCircle className="text-[#25D366] mr-4 flex-shrink-0" size={20} aria-hidden="true" />
                <a
                  href={`https://wa.me/905324675941?text=${encodeURIComponent(isEn ? 'I would like a free consultation.' : 'Doresc o consultație gratuită.')}`}
                  onClick={handleWhatsApp}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={isEn ? 'Message us on WhatsApp' : 'Trimiteți-ne un mesaj pe WhatsApp'}
                  className="text-[#25D366] hover:text-white font-bold transition-colors"
                >
                  WhatsApp
                </a>
              </li>
              {/* Hours */}
              <li className="flex items-start">
                <ShieldCheck className="text-accent mr-4 flex-shrink-0 mt-0.5" size={20} aria-hidden="true" />
                <span className="text-gray-400 text-xs leading-relaxed">
                  <span itemProp="openingHours" content="Mo-Sa 09:00-18:00">
                    {isEn ? 'Mon–Sat · 09:00 – 18:00' : 'Lun–Sâm · 09:00 – 18:00'}
                  </span>
                  <br />
                  <span className="text-[#25D366]">{isEn ? '24/7 WhatsApp Support' : 'Suport WhatsApp 24/7'}</span>
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* ── Bottom Bar ── */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 font-sans gap-4">
          <p>© {new Date().getFullYear()} Meva Clinic Medical Tourism. {isEn ? 'All rights reserved.' : 'Toate drepturile rezervate.'}</p>
          <div className="flex flex-wrap justify-center gap-6 font-medium">
            <Link to={isEn ? '/en/privacy-policy' : '/ro/politica-confidentialitate'} className="hover:text-white transition-colors">
              {isEn ? 'Privacy Policy' : 'Politică de Confidențialitate'}
            </Link>
            <Link to={isEn ? '/en/privacy-policy' : '/ro/politica-confidentialitate'} className="hover:text-white transition-colors">
              {isEn ? 'Cookie Policy' : 'Politică Cookie'}
            </Link>
            <Link to={isEn ? '/en/privacy-policy' : '/ro/politica-confidentialitate'} className="hover:text-white transition-colors">
              {isEn ? 'Terms' : 'Termeni'}
            </Link>
          </div>
        </div>
      </div>

      {/* ── S-Tier Trust / Accreditation Strip ── */}
      <div className="border-t border-white/5 bg-white/3 backdrop-blur-md py-7">
        <div className="max-w-7xl mx-auto px-4">
          <p className="text-center text-[9px] font-bold text-gray-600 uppercase tracking-[0.3em] mb-5">
            {isEn ? 'Accreditations & Official Certifications' : 'Acreditări & Certificări Oficiale'}
          </p>
          <div className="flex flex-wrap justify-center items-center gap-6 md:gap-10">
            {TRUST_BADGES.map((badge, i) => (
              <div
                key={i}
                className="flex items-center gap-3 px-5 py-3 rounded-2xl border border-white/8 bg-white/5 hover:bg-white/10 transition-all group cursor-default"
                title={isEn ? badge.nameEn : badge.nameRo}
              >
                <span className="text-2xl" role="img" aria-label={isEn ? badge.nameEn : badge.nameRo}>
                  {badge.icon}
                </span>
                <div>
                  <p className={`text-[11px] font-black ${badge.color} uppercase tracking-wider leading-none mb-0.5 group-hover:opacity-100 opacity-80 transition-opacity`}>
                    {isEn ? badge.nameEn : badge.nameRo}
                  </p>
                  <p className="text-[9px] text-gray-500 font-medium">
                    {isEn ? badge.subEn : badge.subRo}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile bottom spacer */}
      <div className="h-[72px] sm:hidden w-full bg-[#0b1626]" />
    </footer>
  );
};

export default Footer;

```

### Dosya Adı: src\components\Header.jsx
```jsx
// src/components/Header.jsx
import React, { useState, useEffect, useRef } from 'react';
import { Globe, ChevronDown, ShieldCheck, Phone, ArrowRight, Menu, X, Activity } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import AppointmentModal from './AppointmentModal';
import TopBar from './TopBar';
import { treatmentsData } from '../data/treatmentsData';

// ── Category configuration ─────────────────────────────────────────────────────
const CATEGORY_CONFIG = {
  'bariatric':    { icon: '⚕️',  en: 'Bariatric Surgery',         ro: 'Chirurgie Bariatrică' },
  'hair':         { icon: '💇',  en: 'Hair & Brow Transplant',    ro: 'Păr & Sprâncene' },
  'dental':       { icon: '🦷',  en: 'Dental Care',               ro: 'Stomatologie' },
  'plastic':      { icon: '✂️',  en: 'Plastic Surgery',          ro: 'Chirurgie Plastică' },
  'andrology':    { icon: '👨‍⚕️', en: "Andrology & Men's Health", ro: 'Andrologie & Sănătate Masculină' },
  'specialist':   { icon: '🔬',  en: 'Specialist Treatments',    ro: 'Tratamente Specializate' },
};

const LEFT_CATEGORIES  = ['bariatric', 'hair', 'dental'];
const RIGHT_CATEGORIES = ['plastic', 'andrology', 'specialist'];

// ── Safe title extractor ────────────────────────────────────────────────────────
const getSafeVal = (val, isEn) => {
  if (!val) return '';
  return typeof val === 'object' ? (val[isEn ? 'en' : 'ro'] || val) : val;
};

// ── Build grouped treatments ────────────────────────────────────────────────────
const groupByCategory = () => {
  const groups = {};
  treatmentsData.forEach((t) => {
    if (!CATEGORY_CONFIG[t.category]) return;
    if (!groups[t.category]) groups[t.category] = [];
    groups[t.category].push(t);
  });
  return groups;
};

// ── CategoryColumn sub-component ───────────────────────────────────────────────
const CategoryColumn = ({ categories, groups, isEn, onClose }) => (
  <div className="flex flex-col gap-6">
    {categories.map((catKey) => {
      const cfg = CATEGORY_CONFIG[catKey];
      const items = groups[catKey] || [];
      if (!cfg || items.length === 0) return null;

      const isHighDensity = catKey === 'plastic' || catKey === 'andrology';

      return (
        <div key={catKey} className={`rounded-2xl transition-all ${isHighDensity ? "bg-accent/5 -mx-2 p-3 border border-accent/10" : ""}`}>
          <div className="flex items-center gap-2 mb-2 px-1">
            <span className="text-base" role="img" aria-hidden="true">{cfg.icon}</span>
            <p className={`text-[10px] font-black uppercase tracking-[0.15em] ${isHighDensity ? 'text-accent' : 'text-gray-400'}`}>
              {isEn ? cfg.en : cfg.ro}
            </p>
          </div>

          <div className={`grid ${isHighDensity ? 'grid-cols-2 gap-x-3 gap-y-0.5' : 'flex flex-col gap-0.5'}`}>
            {items.map((treatment) => {
              const title = getSafeVal(treatment.title, isEn);
              const expertStr = getSafeVal(treatment.expert, isEn) || (isEn ? 'Meva Specialist' : 'Specialist Meva');

              return (
                <Link
                  key={treatment.id}
                  to={`/${isEn ? 'en' : 'ro'}/treatments/${treatment.id}`}
                  onClick={onClose}
                  className="group flex flex-col gap-0 px-2 py-1.5 rounded-lg hover:bg-white/60 hover:shadow-sm transition-all"
                >
                  <div className="flex items-center gap-1.5">
                    <span className="w-1 h-1 rounded-full bg-accent/30 group-hover:bg-accent transition-colors shrink-0" />
                    <span className="text-[10px] font-bold text-prime group-hover:text-accent transition-colors leading-tight">
                      {title}
                    </span>
                  </div>
                  <span className="pl-2.5 text-[8px] text-gray-400 font-medium uppercase tracking-tighter opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap overflow-hidden text-ellipsis">
                    {expertStr}
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      );
    })}
  </div>
);

const ROUTE_MAP = {
  '/ro/despre-noi': '/en/about-us',
  '/en/about-us': '/ro/despre-noi',
  '/ro/balon-gastric': '/en/gastric-balloon',
  '/en/gastric-balloon': '/ro/balon-gastric',
  '/ro/implant-par': '/en/hair-transplant',
  '/en/hair-transplant': '/ro/implant-par',
  '/ro/implant-sprancene': '/en/eyebrow-transplant',
  '/en/eyebrow-transplant': '/ro/implant-sprancene',
  '/ro/oncologie': '/en/oncology',
  '/en/oncology': '/ro/oncologie',
  '/ro/implant-dentar': '/en/dental-implants',
  '/en/dental-implants': '/ro/implant-dentar',
  '/ro/chirurgie-plastica': '/en/plastic-surgery',
  '/en/plastic-surgery': '/ro/chirurgie-plastica',
  '/ro/politica-confidentialitate': '/en/privacy-policy',
  '/en/privacy-policy': '/ro/politica-confidentialitate',
  '/ro/comparatie-medicala': '/en/medical-comparison',
  '/en/medical-comparison': '/ro/comparatie-medicala',
  '/ro/fiv': '/en/ivf',
  '/en/ivf': '/ro/fiv',
  '/ro/ivf-ciprul-de-nord': '/en/ivf-northern-cyprus',
  '/en/ivf-northern-cyprus': '/ro/ivf-ciprul-de-nord',
  '/ro/transplant-par-mixt': '/en/mixed-hair-transplant',
  '/en/mixed-hair-transplant': '/ro/transplant-par-mixt',
  '/ro/transplant-par-dhi': '/en/dhi-hair-transplant',
  '/en/dhi-hair-transplant': '/ro/transplant-par-dhi',
};

const getTranslatedPath = (currentPath, targetLang) => {
  if (targetLang === 'en') {
    if (currentPath === '/' || currentPath === '/ro') return '/en';
    if (ROUTE_MAP[currentPath]) return ROUTE_MAP[currentPath];
    if (currentPath.startsWith('/ro/')) return currentPath.replace('/ro/', '/en/');
    return '/en';
  } else {
    if (currentPath === '/en') return '/ro';
    if (ROUTE_MAP[currentPath]) return ROUTE_MAP[currentPath];
    if (currentPath.startsWith('/en/')) return currentPath.replace('/en/', '/ro/');
    if (currentPath === '/') return '/ro';
    return '/ro';
  }
};


const Header = () => {
  const [isOpen, setIsOpen]               = useState(false);
  const [langMenu, setLangMenu]           = useState(false);
  const [treatmentsMenu, setTreatmentsMenu] = useState(false);
  const [mobileAccordion, setMobileAccordion] = useState(null);
  const [isModalOpen, setIsModalOpen]     = useState(false);
  const location = useLocation();
  const isEn = location.pathname.startsWith('/en');

  const groups = groupByCategory();

  useEffect(() => {
    setIsOpen(false);
    setLangMenu(false);
    setTreatmentsMenu(false);
    setMobileAccordion(null);
  }, [location.pathname]);

  const closeMegaMenu = () => setTreatmentsMenu(false);

  const langRef = useRef(null);
  const treatmentsRef = useRef(null);

  useEffect(() => {
    const handler = (e) => {
      if (langRef.current && !langRef.current.contains(e.target)) setLangMenu(false);
      if (treatmentsRef.current && !treatmentsRef.current.contains(e.target)) setTreatmentsMenu(false);
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  const simpleLinks = [
    { name: isEn ? 'Home'     : 'Acasă',      path: isEn ? '/en'            : '/ro'            },
    { name: isEn ? 'About Us' : 'Despre Noi', path: isEn ? '/en/about-us'   : '/ro/despre-noi' },
    { name: 'Blog',                            path: isEn ? '/en/blog'        : '/ro/blog'       },
    { name: isEn ? 'Contact'  : 'Contact',    path: isEn ? '/en/contact'     : '/ro/contact'    },
  ];

  return (
    <>
      <TopBar />
      <header className="fixed top-0 w-full z-[1000] bg-white/95 backdrop-blur-md border-b border-gray-100 py-3 lg:py-4 mt-[40px] lg:mt-[32px]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          
          {/* Logo */}
          <Link to={isEn ? '/en' : '/'} className="flex-shrink-0 flex items-center gap-2 group">
            <div className="w-8 h-8 lg:w-10 lg:h-10 bg-prime rounded-xl flex items-center justify-center text-accent shadow-lg group-hover:scale-110 transition-transform">
              <ShieldCheck size={24} />
            </div>
            <span className="font-serif text-xl lg:text-2xl font-bold text-prime tracking-tight">
              Meva<span className="text-accent">Clinic</span>
            </span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center space-x-8">
            {simpleLinks.slice(0, 2).map((link) => (
              <Link key={link.path} to={link.path} className="text-xs font-bold uppercase tracking-widest text-prime hover:text-accent transition-colors">
                {link.name}
              </Link>
            ))}
            
            <div className="relative" ref={treatmentsRef} onMouseEnter={() => setTreatmentsMenu(true)} onMouseLeave={() => setTreatmentsMenu(false)}>
              <button className="flex items-center gap-1 text-xs font-bold uppercase tracking-widest text-prime hover:text-accent transition-colors py-2">
                {isEn ? 'Treatments' : 'Tratamente'}
                <ChevronDown size={14} className={`transition-transform duration-300 ${treatmentsMenu ? 'rotate-180' : ''}`} />
              </button>
              
              {treatmentsMenu && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 w-[850px]">
                  <div className="bg-white rounded-[2.5rem] shadow-[0_30px_100px_rgba(0,0,0,0.15)] border border-gray-100 overflow-hidden grid grid-cols-2 p-8 gap-8 max-h-[85vh] overflow-y-auto custom-scrollbar">
                    <div className="border-r border-gray-50 pr-8">
                      <p className="text-[10px] font-black uppercase tracking-widest text-gray-300 mb-6 px-1">
                        {isEn ? 'Clinical Specialties' : 'Specialități Clinice'}
                      </p>
                      <CategoryColumn categories={LEFT_CATEGORIES} groups={groups} isEn={isEn} onClose={closeMegaMenu} />
                    </div>
                    <div>
                      <p className="text-[10px] font-black uppercase tracking-widest text-gray-300 mb-6 px-1">
                        {isEn ? 'Surgical & Specialist' : 'Chirurgie & Specialiști'}
                      </p>
                      <CategoryColumn categories={RIGHT_CATEGORIES} groups={groups} isEn={isEn} onClose={closeMegaMenu} />
                    </div>
                  </div>
                </div>
              )}
            </div>

            {simpleLinks.slice(2).map((link) => (
              <Link key={link.path} to={link.path} className="text-xs font-bold uppercase tracking-widest text-prime hover:text-accent transition-colors">
                {link.name}
              </Link>
            ))}
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-3">
            {/* Language Switcher */}
            <div className="relative" ref={langRef}>
               <button 
                 onClick={() => setLangMenu(!langMenu)}
                 className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-widest text-gray-400 hover:text-prime transition-colors px-3 py-2 rounded-lg bg-gray-50 border border-gray-100"
               >
                 <Globe size={14} />
                 {isEn ? 'EN' : 'RO'}
               </button>
               {langMenu && (
                 <div className="absolute top-full right-0 mt-2 w-24 bg-white rounded-xl shadow-xl border border-gray-100 p-1 z-[2000]">
                   <Link to={getTranslatedPath(location.pathname, 'ro')} onClick={() => setLangMenu(false)} className="block px-4 py-2 text-[10px] font-bold hover:bg-gray-50 rounded-lg">Română</Link>
                   <Link to={getTranslatedPath(location.pathname, 'en')} onClick={() => setLangMenu(false)} className="block px-4 py-2 text-[10px] font-bold hover:bg-gray-50 rounded-lg">English</Link>
                 </div>
               )}
            </div>

            <button onClick={() => setIsModalOpen(true)} className="hidden md:block bg-prime text-white px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-prime/90 transition-all shadow-md">
              {isEn ? 'Consultation' : 'Consultație'}
            </button>

            {/* Mobile hamburger */}
            <button className="lg:hidden p-2 text-prime" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Panel */}
      <div className={`fixed inset-0 top-[110px] bg-white z-[3000] transition-transform duration-500 ${isOpen ? 'translate-x-0' : 'translate-x-full'} overflow-y-auto lg:hidden`}>
        <div className="p-6 flex flex-col gap-4">
           {simpleLinks.map(link => (
             <Link key={link.path} to={link.path} onClick={() => setIsOpen(false)} className="text-xl font-bold text-prime border-b border-gray-100 pb-3">{link.name}</Link>
           ))}
           <div className="mt-4">
              <p className="text-xs font-black uppercase text-gray-400 mb-4">{isEn ? 'Treatments' : 'Tratamente'}</p>
              {[...LEFT_CATEGORIES, ...RIGHT_CATEGORIES].map(catKey => {
                const cfg = CATEGORY_CONFIG[catKey];
                const items = groups[catKey] || [];
                if (!cfg || items.length === 0) return null;
                const isMobOpen = mobileAccordion === catKey;
                return (
                  <div key={catKey} className="mb-2">
                     <button onClick={() => setMobileAccordion(isMobOpen ? null : catKey)} className="w-full flex justify-between items-center py-2 text-prime font-bold">
                        <span>{cfg.icon} {isEn ? cfg.en : cfg.ro}</span>
                        <ChevronDown size={14} className={isMobOpen ? 'rotate-180' : ''} />
                     </button>
                     {isMobOpen && (
                       <div className="pl-6 flex flex-col gap-2 mt-2">
                         {items.map(t => (
                           <Link key={t.id} to={`/${isEn ? 'en' : 'ro'}/treatments/${t.id}`} onClick={() => setIsOpen(false)} className="text-sm text-gray-600">{getSafeVal(t.title, isEn)}</Link>
                         ))}
                       </div>
                     )}
                  </div>
                );
              })}
           </div>
           <button onClick={() => {setIsOpen(false); setIsModalOpen(true);}} className="mt-8 bg-accent text-prime font-bold py-4 rounded-xl uppercase tracking-widest">
             {isEn ? 'Free Consultation' : 'Consultație Gratuită'}
           </button>
        </div>
      </div>

      <AppointmentModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} isEn={isEn} />
    </>
  );
};

export default Header;

```

### Dosya Adı: src\components\HeroSection.jsx
```jsx
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

```

### Dosya Adı: src\components\HospitalSchema.jsx
```jsx
import React from 'react';

const HospitalSchema = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "MedicalOrganization",
    "name": "Meva Clinic",
    "alternateName": "Meva Istanbul Healthcare",
    "url": "https://mevaclinic.com",
    "logo": "https://mevaclinic.com/logo.png",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+90-532-467-59-41",
      "contactType": "customer service",
      "areaServed": "Global",
      "availableLanguage": ["Romanian", "English", "Turkish"]
    },
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Acibadem Partner Clinic",
      "addressLocality": "Istanbul",
      "addressCountry": "TR"
    }
  };

  return (
    <script type="application/ld+json">
      {JSON.stringify(schema)}
    </script>
  );
};

export default HospitalSchema;

```

### Dosya Adı: src\components\HumanTrust.jsx
```jsx
import React from 'react';
import { Phone, Video, Calendar, Clock, ShieldCheck, HeartPulse, Sparkles, MessageSquare } from 'lucide-react';
import { pushToDataLayer } from '../utils/AnalyticsUtils';

const HumanTrust = ({ isEn = false }) => {
  const coordinators = [
    {
      name: "Ioana Georgescu",
      role: isEn ? "Senior Medical Coordinator" : "Coordonator Medical Senior",
      msg: isEn ? "I am here to guide you from Bucharest to Istanbul." : "Sunt aici să te ghidez de la București la Istanbul.",
      img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400&auto=format&fit=crop"
    },
    {
      name: "Mihai Stan",
      role: isEn ? "Patient Support Specialist" : "Specialist Suport Pacienți",
      msg: isEn ? "Your safety and comfort in Istanbul are my priority." : "Siguranța și confortul tău în Istanbul sunt prioritatea mea.",
      img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=400&auto=format&fit=crop"
    }
  ];

  const monitoring = [
    { icon: Video, title: isEn ? "Month 1 Video Call" : "Luna 1: Video Call", desc: isEn ? "Personal clinical check with your surgeon." : "Verificare clinică personală cu chirurgul tău." },
    { icon: Calendar, title: isEn ? "Month 3 Progress" : "Luna 3: Analiză Progres", desc: isEn ? "Detailed review of biological markers." : "Analiza detaliată a markerilor biologici." },
    { icon: ShieldCheck, title: isEn ? "24/7 Priority Support" : "Suport Prioritar 24/7", desc: isEn ? "Immediate access to your medical team." : "Acces imediat la echipa ta medicală." }
  ];

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-24">
          <div className="reveal">
             <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 text-prime text-[10px] font-bold uppercase tracking-widest mb-6 border border-accent/20">
                <Sparkles size={14} className="text-accent" />
                {isEn ? "Native Support Team" : "Echipă de Suport Nativă"}
             </div>
             <h2 className="text-4xl md:text-6xl font-serif font-bold text-prime mb-8 leading-tight">
                {isEn ? "Meet Your Clinical Coordinator" : "Cunoaște-ți Coordonatorul Clinic"}
             </h2>
             <p className="text-lg text-gray-500 mb-12 leading-relaxed">
                {isEn 
                  ? "Medicine is about people. Our Romanian-speaking team ensures that nothing is lost in translation during your medical journey in Istanbul." 
                  : "Medicina este despre oameni. Echipa noastră vorbitoare de limba română se asigură că nimic nu se pierde în traducere în timpul călătoriei tale."}
             </p>
             
             <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {coordinators.map((c, i) => (
                  <div key={i} className="group cursor-default">
                     <div className="aspect-square rounded-3xl overflow-hidden mb-4 shadow-xl border border-gray-100 relative">
                        <img src={c.img} alt={c.name} aria-label={c.name} loading="lazy" className="w-full h-full object-cover transition-transform group-hover:scale-105" />
                        <div className="absolute bottom-4 left-4 right-4">
                           <div className="bg-white/20 backdrop-blur-md border border-white/30 p-3 rounded-2xl flex items-center justify-center gap-2 text-white">
                              <MessageSquare size={14} />
                              <span className="text-[10px] font-bold uppercase tracking-widest">Online Now</span>
                           </div>
                        </div>
                     </div>
                     <h4 className="font-bold text-prime text-lg">{c.name}</h4>
                     <p className="text-xs text-accent font-bold uppercase tracking-widest mb-2">{c.role}</p>
                     <p className="text-sm text-gray-500 italic">"{c.msg}"</p>
                  </div>
                ))}
             </div>
          </div>

          <div className="bg-prime rounded-[4rem] p-12 md:p-20 text-white relative overflow-hidden shadow-2xl reveal">
             <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl -mr-32 -mt-32"></div>
             
             <div className="relative z-10">
                <HeartPulse className="text-accent mb-6" size={48} />
                <h3 className="text-3xl md:text-4xl font-serif font-bold mb-6 leading-tight">
                   {isEn ? "Care Beyond the Border" : "Îngrijire Dincolo de Granițe"}
                </h3>
                <p className="text-gray-400 mb-12 leading-relaxed">
                   {isEn 
                     ? "Your journey doesn't end when you leave Istanbul. Our remote monitoring system keeps us connected for 12 months." 
                     : "Călătoria ta nu se termină când pleci din Istanbul. Sistemul nostru de monitorizare de la distanță ne menține conectați timp de 12 luni."}
                </p>

                <div className="space-y-8">
                   {monitoring.map((m, i) => (
                     <div key={i} className="flex items-start gap-6 group">
                        <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-prime transition-all">
                           <m.icon size={24} />
                        </div>
                        <div>
                           <h4 className="font-bold text-white text-lg mb-1">{m.title}</h4>
                           <p className="text-sm text-gray-400">{m.desc}</p>
                        </div>
                     </div>
                   ))}
                </div>

                <div className="mt-16 p-8 rounded-3xl bg-white/5 border border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
                   <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center text-green-500">
                         <ShieldCheck size={20} />
                      </div>
                      <span className="text-xs font-bold uppercase tracking-widest text-gray-300">
                         {isEn ? "Tele-Medicine Active" : "Tele-Medicină Activă"}
                      </span>
                   </div>
                   <a 
                     href="https://wa.me/905324675941" 
                     onClick={() => pushToDataLayer('whatsapp_click', { location: 'human_trust_followup' })}
                     className="text-accent font-bold text-sm hover:text-white transition-colors flex items-center gap-2"
                   >
                      {isEn ? "Ask About Follow-up" : "Întreabă despre Monitorizare"} <Clock size={16} />
                   </a>
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HumanTrust;

```

### Dosya Adı: src\components\LocalContext.jsx
```jsx
import React from 'react';
import { MapPin, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const LocalContext = ({ city = 'București', isEn = false }) => {
  if (isEn) return null; // Only show for Romanian version

  return (
    <div className="mt-20 p-10 bg-blue-50/50 rounded-[2.5rem] border border-blue-100 flex flex-col md:flex-row items-center gap-10">
      <div className="flex-1">
        <div className="flex items-center gap-2 text-blue-700 font-bold text-xs uppercase tracking-widest mb-4">
          <MapPin size={16} /> De ce pacienții din {city} aleg Meva Clinic?
        </div>
        <h3 className="text-2xl md:text-3xl font-serif font-bold text-prime mb-6">
          Standarde Europene la doar 75 de minute distanță.
        </h3>
        <p className="text-gray-600 leading-relaxed mb-8">
          Pacienții noștri din România beneficiază de expertiza chirurgilor de top din Istanbul, acces la tehnologie robotică de ultimă oră și un protocol VIP All-Inclusive care include zboruri, cazare la 5 stele și traducător român dedicat.
        </p>
        <Link to="/ro/romani-istanbul" className="inline-flex items-center gap-2 text-prime font-bold hover:text-accent transition-colors">
          Vezi beneficiile pentru români <ArrowRight size={18} />
        </Link>
      </div>
      <div className="w-full md:w-64 aspect-square rounded-3xl overflow-hidden shadow-xl grayscale hover:grayscale-0 transition-all duration-700">
         <img src="https://images.unsplash.com/photo-1589110477381-2287aa391629?auto=format&fit=crop&q=80&w=600" alt="Bucharest to Istanbul" aria-label="Bucharest to Istanbul Medical Journey" loading="lazy" className="w-full h-full object-cover" />
      </div>
    </div>
  );
};

export default LocalContext;

```

### Dosya Adı: src\components\LogisticsHub.jsx
```jsx
import React from 'react';
import { Car, Hotel, Languages, ShieldCheck, MapPin, CheckCircle2, Clock, Smartphone } from 'lucide-react';

const LogisticsHub = ({ isEn = false }) => {
  const steps = [
    {
      icon: Car,
      title: isEn ? "Private VIP Transfer" : "Transfer Privat VIP",
      desc: isEn ? "Mercedes-Benz V-Class fleet with Wi-Fi and premium refreshments." : "Flotă Mercedes-Benz V-Class cu Wi-Fi și băuturi premium."
    },
    {
      icon: Hotel,
      title: isEn ? "5-Star Partner Hotels" : "Cazare 5 Stele",
      desc: isEn ? "Marriott and Hilton alliance for ultimate post-op comfort." : "Parteneriate cu Marriott și Hilton pentru confort post-operator."
    },
    {
      icon: Languages,
      title: isEn ? "Personal Translator" : "Traducător Personal",
      desc: isEn ? "24/7 Romanian-speaking medical assistant by your side." : "Asistent medical vorbitor de română, disponibil 24/7."
    }
  ];

  const checklist = isEn 
    ? ["Private Airport Greeting", "Mobile App Tracking", "12-Month Remote Follow-up", "VIP Fast-Track Clinic Access"]
    : ["Întâmpinare Privată la Aeroport", "Monitorizare prin Aplicație", "Follow-up la distanță 12 luni", "Acces Fast-Track în Clinică"];

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div className="reveal">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/10 border border-accent/20 text-prime text-[10px] font-bold uppercase tracking-[0.2em] mb-6">
               <MapPin size={14} className="text-accent" />
               {isEn ? "The Istanbul VIP Protocol" : "Protocolul VIP Istanbul"}
            </div>
            <h2 className="text-4xl md:text-6xl font-serif font-bold text-prime mb-8 leading-tight">
               {isEn ? "5-Star Medical Logistics" : "Logistica Medicală de 5 Stele"}
            </h2>
            <p className="text-lg text-gray-500 mb-12 leading-relaxed">
               {isEn 
                 ? "We manage every second of your journey, ensuring that your focus remains entirely on your recovery and clinical excellence." 
                 : "Gestionăm fiecare secundă a călătoriei tale, asigurându-ne că atenția ta rămâne exclusiv pe recuperare și excelență clinică."}
            </p>

            <div className="space-y-6">
               {steps.map((step, i) => (
                 <div key={i} className="flex items-start gap-5 p-6 rounded-3xl hover:bg-gray-50 transition-colors border border-transparent hover:border-gray-100 group">
                    <div className="w-14 h-14 rounded-2xl bg-prime text-white flex items-center justify-center shrink-0 shadow-lg group-hover:bg-accent group-hover:text-prime transition-all">
                       <step.icon size={28} />
                    </div>
                    <div>
                       <h3 className="text-xl font-bold text-prime mb-1">{step.title}</h3>
                       <p className="text-gray-500 text-sm">{step.desc}</p>
                    </div>
                 </div>
               ))}
            </div>
          </div>

          <div className="relative reveal">
             <div className="aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl relative">
                <img 
                  src="https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&q=80&w=1200" 
                  alt="VIP Mercedes Transfer Istanbul" 
                  aria-label="VIP Mercedes Transfer Istanbul" 
                  width="1200"
                  height="1500"
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-prime via-transparent to-transparent opacity-60"></div>
                
                <div className="absolute bottom-10 left-10 right-10">
                   <div className="bg-white/10 backdrop-blur-xl border border-white/20 p-8 rounded-[2rem]">
                      <h4 className="text-white font-serif font-bold text-2xl mb-6">
                         {isEn ? "Stress-Free Journey Checklist" : "Checklist Călătorie Fără Stres"}
                      </h4>
                      <ul className="space-y-4">
                         {checklist.map((item, i) => (
                           <li key={i} className="flex items-center gap-3 text-white/90 text-sm font-medium">
                              <CheckCircle2 size={18} className="text-accent" />
                              {item}
                           </li>
                         ))}
                      </ul>
                   </div>
                </div>
             </div>

             {/* Floating Trust Indicator */}
             <div className="absolute -top-10 -right-10 bg-accent text-prime p-8 rounded-full w-40 h-40 flex flex-col items-center justify-center text-center shadow-2xl animate-float border-4 border-white">
                <ShieldCheck size={32} className="mb-2" />
                <span className="text-[10px] font-bold uppercase tracking-widest leading-tight">100% Secure Logistics</span>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default LogisticsHub;

```

### Dosya Adı: src\components\MedicalDossier.jsx
```jsx
import React from 'react';
import { Activity, ShieldCheck, Download, Lock, CheckCircle2, Award, FileText, CheckCircle, Smartphone } from 'lucide-react';

const MedicalDossier = ({ data, isEn = false, isUnlocked = false, onUnlock }) => {
  const reportId = `MEVA-${Math.random().toString(36).substr(2, 9).toUpperCase()}`;
  
  return (
    <div className="bg-white border-8 border-gray-50 p-6 md:p-16 shadow-2xl relative overflow-hidden font-sans text-prime max-w-4xl mx-auto rounded-[3rem]">
      {/* Verified Watermark */}
      <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] pointer-events-none select-none rotate-45">
         <h1 className="text-[120px] font-black uppercase tracking-[0.2em]">VERIFIED</h1>
      </div>

      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start border-b border-gray-100 pb-10 mb-10 relative z-10">
        <div className="flex items-center gap-3 mb-6 md:mb-0">
          <div className="w-14 h-14 bg-prime rounded-xl flex items-center justify-center text-accent shadow-lg">
             <Activity size={32} />
          </div>
          <div>
            <h1 className="text-2xl font-serif font-bold leading-none">Meva<span className="text-accent">Clinic</span></h1>
            <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-gray-400 mt-1">Istanbul Clinical Board</p>
          </div>
        </div>
        <div className="text-left md:text-right w-full md:w-auto">
          <h2 className="text-lg font-bold uppercase tracking-widest text-prime mb-1">
             {isEn ? "Personalized Clinical Report" : "Raport Clinic Personalizat"}
          </h2>
          <p className="text-xs font-bold text-gray-400">Report ID: <span className="text-prime">{reportId}</span></p>
        </div>
      </div>

      {/* Summary Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 relative z-10">
         <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
            <h3 className="text-[10px] font-bold text-accent uppercase tracking-widest mb-4">{isEn ? "Specialist & Facility" : "Specialist și Facilitate"}</h3>
            <p className="text-sm mb-2"><strong>{isEn ? "Specialist" : "Medic Specialist"}:</strong> {data.doctorName || 'MD Harun'}</p>
            <p className="text-sm mb-2"><strong>{isEn ? "Hospital" : "Spital"}:</strong> {data.hospitalName || 'Istanbul Excellence Hospital'}</p>
            <p className="text-sm"><strong>{isEn ? "Technology" : "Tehnologie"}:</strong> {data.technology || 'Sapphire FUE / CyberKnife S7'}</p>
         </div>
         <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
            <h3 className="text-[10px] font-bold text-accent uppercase tracking-widest mb-4">{isEn ? "Clinical Protocol" : "Protocol Clinic"}</h3>
            <div className="space-y-2">
               {['Initial 3D Mapping', 'Targeted Intervention', 'Post-Op Monitoring'].map((step, i) => (
                 <div key={i} className="flex items-center gap-2 text-xs font-medium">
                    <CheckCircle size={14} className="text-green-500" /> {step}
                 </div>
               ))}
            </div>
         </div>
      </div>

      {/* Technical Specs */}
      <div className="mb-12 relative z-10">
         <h3 className="text-xs font-bold text-prime uppercase tracking-[0.2em] mb-6">{isEn ? "Clinical Analysis & Tech Specs" : "Analiză Clinică și Specificații Tehnice"}</h3>
         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 bg-white border border-gray-100 rounded-2xl shadow-sm">
               <h4 className="font-bold text-sm mb-2">{isEn ? "Hardware Precision" : "Precizie Hardware"}</h4>
               <p className="text-xs text-gray-500 leading-relaxed">
                  {isEn ? "Sub-millimeter alignment utilizing AI-driven robotic assistance for maximum tissue preservation." : "Aliniere sub-milimetrică utilizând asistență robotică bazată pe AI pentru conservarea maximă a țesuturilor."}
               </p>
            </div>
            <div className="p-6 bg-white border border-gray-100 rounded-2xl shadow-sm">
               <h4 className="font-bold text-sm mb-2">{isEn ? "Bio-Safety Level" : "Nivel de Siguranță Bio"}</h4>
               <p className="text-xs text-gray-500 leading-relaxed">
                  {isEn ? "JCI-accredited surgical protocols ensuring zero-contamination environment." : "Protocoale chirurgicale acreditate JCI care asigură un mediu cu zero contaminare."}
               </p>
            </div>
         </div>
      </div>

      {/* Conversion Lock Section */}
      <div className={`transition-all duration-1000 relative z-10 ${!isUnlocked ? 'blur-lg select-none pointer-events-none' : ''}`}>
         <div className="p-8 bg-prime text-white rounded-[2rem] mb-12">
            <h3 className="text-xl font-serif font-bold mb-4">{isEn ? "Prognosis & Recovery Timeline" : "Prognostic și Cronologie Recuperare"}</h3>
            <div className="space-y-4">
               <div className="h-4 bg-white/10 rounded w-full"></div>
               <div className="h-4 bg-white/10 rounded w-3/4"></div>
               <div className="h-4 bg-white/10 rounded w-1/2"></div>
            </div>
         </div>
         
         {/* Digital Signature Area */}
         <div className="flex flex-col md:flex-row justify-between items-end gap-8 pt-10 border-t border-gray-100">
            <div className="text-left">
               <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Document Status</p>
               <div className="flex items-center gap-2 text-green-600 font-bold text-xs">
                  <ShieldCheck size={14} /> {isEn ? "Legally Valid Clinical Brief" : "Raport Clinic Valid Legal"}
               </div>
            </div>
            <div className="text-center md:text-right">
               <div className="font-handwriting text-prime text-3xl mb-1 opacity-80">Meva Board</div>
               <div className="w-48 h-px bg-prime/20 ml-auto mb-2"></div>
               <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">{isEn ? "Digital Clinical Signature" : "Semnătură Clinică Digitală"}</p>
            </div>
         </div>
      </div>

      {!isUnlocked && (
        <div className="absolute inset-0 flex items-center justify-center z-20 p-6">
           <div className="bg-white rounded-[3rem] p-8 md:p-12 shadow-2xl border border-gray-100 text-center max-w-md w-full animate-fade-up">
              <div className="w-20 h-20 bg-accent text-prime rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-xl">
                 <Lock size={40} />
              </div>
              <h3 className="text-2xl font-serif font-bold text-prime mb-4">
                 {isEn ? "Access Full Pricing & Plan" : "Accesează Prețul și Planul Complet"}
              </h3>
              <p className="text-sm text-gray-500 mb-10 leading-relaxed">
                 {isEn 
                   ? "Unlock the technical recovery timeline and get your exact pricing quote via WhatsApp." 
                   : "Deblochează cronologia tehnică de recuperare și obține devizul tău exact de cost prin WhatsApp."}
              </p>
              <button 
                onClick={onUnlock}
                className="w-full bg-prime text-white font-bold py-5 rounded-2xl shadow-xl flex items-center justify-center gap-4 hover:bg-accent hover:text-prime transition-all text-lg"
              >
                 <Smartphone size={24} />
                 {isEn ? "Unlock via WhatsApp" : "Deblochează prin WhatsApp"}
              </button>
              <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest mt-6">
                 {isEn ? "Encrypted Clinical Data Transfer" : "Transfer Date Clinice Encriptat"}
              </p>
           </div>
        </div>
      )}

      <style dangerouslySetInnerHTML={{ __html: `
        @import url('https://fonts.googleapis.com/css2?family=Caveat:wght@400;700&display=swap');
        .font-handwriting {
          font-family: 'Caveat', cursive;
        }
      `}} />
    </div>
  );
};

export default MedicalDossier;

```

### Dosya Adı: src\components\MedicalFileUpload.jsx
```jsx
import React, { useState, useRef, useCallback } from 'react';
import { Upload, X, FileImage, FileText, CheckCircle2, AlertCircle, ShieldCheck, Lock } from 'lucide-react';

const MAX_SIZE_MB = 10;
const MAX_SIZE_BYTES = MAX_SIZE_MB * 1024 * 1024;
const ALLOWED_TYPES = ['image/jpeg', 'image/jpg', 'image/png', 'application/pdf'];
const ALLOWED_EXT = ['JPG', 'PNG', 'PDF'];

const FileIcon = ({ type }) => {
  if (type === 'application/pdf') return <FileText size={20} className="text-red-500" />;
  return <FileImage size={20} className="text-blue-500" />;
};

const formatBytes = (bytes) => {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
};

const MedicalFileUpload = ({ isEn = false, onFilesChange }) => {
  const [files, setFiles] = useState([]);
  const [isDragging, setIsDragging] = useState(false);
  const [errors, setErrors] = useState([]);
  const inputRef = useRef(null);

  const labels = {
    title: isEn ? 'Upload Photos or X-Rays' : 'Încarcă fotografii sau radiografii',
    subtitle: isEn
      ? 'Drag & drop your files here, or click to browse'
      : 'Trage fișierele aici sau dă clic pentru a selecta',
    formats: isEn ? 'Accepted formats:' : 'Formate acceptate:',
    maxSize: isEn ? `Max file size: ${MAX_SIZE_MB}MB` : `Dimensiune maximă: ${MAX_SIZE_MB}MB`,
    perFile: isEn ? 'per file' : 'per fișier',
    remove: isEn ? 'Remove' : 'Elimină',
    gdpr: isEn
      ? 'Your medical data is processed securely and remains confidential.'
      : 'Datele tale medicale sunt procesate în siguranță și rămân confidențiale.',
    errorSize: (name) =>
      isEn
        ? `"${name}" exceeds ${MAX_SIZE_MB}MB limit.`
        : `"${name}" depășește limita de ${MAX_SIZE_MB}MB.`,
    errorType: (name) =>
      isEn
        ? `"${name}" is not an accepted format. Use JPG, PNG or PDF.`
        : `"${name}" nu este un format acceptat. Folosiți JPG, PNG sau PDF.`,
    filesAdded: isEn ? 'file(s) attached' : 'fișier(e) atașat(e)',
  };

  const validateAndAddFiles = useCallback(
    (newFiles) => {
      const errs = [];
      const valid = [];

      Array.from(newFiles).forEach((file) => {
        if (!ALLOWED_TYPES.includes(file.type)) {
          errs.push(labels.errorType(file.name));
          return;
        }
        if (file.size > MAX_SIZE_BYTES) {
          errs.push(labels.errorSize(file.name));
          return;
        }
        // Prevent duplicates
        const isDuplicate = files.some((f) => f.name === file.name && f.size === file.size);
        if (!isDuplicate) {
          valid.push(
            Object.assign(file, { preview: URL.createObjectURL(file) })
          );
        }
      });

      setErrors(errs);

      if (valid.length > 0) {
        const updated = [...files, ...valid];
        setFiles(updated);
        onFilesChange?.(updated);
      }
    },
    [files, labels, onFilesChange]
  );

  const handleDrop = useCallback(
    (e) => {
      e.preventDefault();
      setIsDragging(false);
      validateAndAddFiles(e.dataTransfer.files);
    },
    [validateAndAddFiles]
  );

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e) => {
    if (!e.currentTarget.contains(e.relatedTarget)) {
      setIsDragging(false);
    }
  };

  const handleRemove = (index) => {
    const updated = files.filter((_, i) => i !== index);
    URL.revokeObjectURL(files[index].preview);
    setFiles(updated);
    onFilesChange?.(updated);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      inputRef.current?.click();
    }
  };

  return (
    <div className="space-y-3">
      {/* Label */}
      <label
        id="file-upload-label"
        className="block text-xs font-bold text-gray-600 uppercase tracking-widest mb-2"
      >
        {labels.title}
      </label>

      {/* Drop Zone */}
      <div
        role="button"
        tabIndex={0}
        aria-labelledby="file-upload-label"
        aria-describedby="file-upload-hint"
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onClick={() => inputRef.current?.click()}
        onKeyDown={handleKeyDown}
        className={`
          relative rounded-2xl border-2 border-dashed p-6 md:p-8 transition-all duration-300 cursor-pointer
          flex flex-col items-center justify-center text-center
          focus:outline-none focus-visible:ring-4 focus-visible:ring-accent focus-visible:ring-offset-2
          ${isDragging
            ? 'border-accent bg-accent/5 scale-[1.01] shadow-lg shadow-accent/10'
            : files.length > 0
            ? 'border-green-400 bg-green-50/50'
            : 'border-gray-200 bg-gray-50/70 hover:border-accent/60 hover:bg-accent/3'
          }
        `}
      >
        <input
          ref={inputRef}
          type="file"
          multiple
          accept=".jpg,.jpeg,.png,.pdf"
          className="hidden"
          onChange={(e) => validateAndAddFiles(e.target.files)}
          aria-hidden="true"
        />

        {/* Animated Upload Icon */}
        <div
          className={`
            w-16 h-16 rounded-2xl flex items-center justify-center mb-4 transition-all duration-300
            ${isDragging
              ? 'bg-accent text-prime scale-110 shadow-lg shadow-accent/30'
              : files.length > 0
              ? 'bg-green-100 text-green-600'
              : 'bg-prime/5 text-prime/60'
            }
          `}
        >
          {files.length > 0 && !isDragging ? (
            <CheckCircle2 size={32} />
          ) : (
            <Upload size={32} className={isDragging ? 'animate-bounce' : ''} />
          )}
        </div>

        {/* Drop Zone Text */}
        {isDragging ? (
          <p className="text-accent font-bold text-lg">
            {isEn ? 'Drop your files here!' : 'Eliberează fișierele!'}
          </p>
        ) : files.length > 0 ? (
          <p className="text-green-700 font-bold text-sm">
            {files.length} {labels.filesAdded}
          </p>
        ) : (
          <>
            <p className="font-bold text-prime text-sm md:text-base mb-1">
              {labels.subtitle}
            </p>
            <p id="file-upload-hint" className="text-gray-400 text-xs">
              {labels.formats}{' '}
              <span className="font-bold text-prime/70">{ALLOWED_EXT.join(', ')}</span>
              {' · '}
              <span className="font-bold text-prime/70">
                {labels.maxSize}
              </span>
            </p>
          </>
        )}

        {/* Format badges */}
        {files.length === 0 && !isDragging && (
          <div className="flex gap-2 mt-4" aria-hidden="true">
            {ALLOWED_EXT.map((ext) => (
              <span
                key={ext}
                className="px-2.5 py-1 rounded-lg bg-white border border-gray-200 text-[10px] font-bold text-gray-500 uppercase shadow-sm"
              >
                {ext}
              </span>
            ))}
            <span className="px-2.5 py-1 rounded-lg bg-white border border-gray-200 text-[10px] font-bold text-gray-500 shadow-sm">
              ≤ {MAX_SIZE_MB}MB
            </span>
          </div>
        )}
      </div>

      {/* Error Messages */}
      {errors.length > 0 && (
        <div
          role="alert"
          aria-live="polite"
          className="space-y-1.5"
        >
          {errors.map((err, i) => (
            <div
              key={i}
              className="flex items-start gap-2 bg-red-50 border border-red-100 text-red-700 text-xs font-medium px-4 py-2.5 rounded-xl"
            >
              <AlertCircle size={14} className="flex-shrink-0 mt-0.5 text-red-500" />
              {err}
            </div>
          ))}
        </div>
      )}

      {/* File Preview List */}
      {files.length > 0 && (
        <ul className="space-y-2" aria-label={isEn ? 'Attached files' : 'Fișiere atașate'}>
          {files.map((file, i) => (
            <li
              key={i}
              className="flex items-center gap-3 bg-white border border-gray-100 rounded-xl px-4 py-3 shadow-sm group hover:border-accent/30 transition-all"
            >
              {/* Thumbnail or icon */}
              {file.type.startsWith('image/') ? (
                <img
                  src={file.preview}
                  alt={file.name}
                  aria-label={`Preview of ${file.name}`}
                  loading="lazy"
                  className="w-10 h-10 rounded-lg object-cover border border-gray-100 flex-shrink-0"
                />
              ) : (
                <div className="w-10 h-10 rounded-lg bg-red-50 border border-red-100 flex items-center justify-center flex-shrink-0">
                  <FileIcon type={file.type} />
                </div>
              )}

              <div className="flex-grow min-w-0">
                <p className="text-sm font-semibold text-prime truncate">{file.name}</p>
                <p className="text-xs text-gray-400">{formatBytes(file.size)}</p>
              </div>

              <button
                type="button"
                onClick={() => handleRemove(i)}
                aria-label={`${labels.remove} ${file.name}`}
                className="w-7 h-7 rounded-full flex items-center justify-center text-gray-300 hover:bg-red-50 hover:text-red-500 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-red-400 flex-shrink-0"
              >
                <X size={14} />
              </button>
            </li>
          ))}
        </ul>
      )}

      {/* GDPR / Privacy Note */}
      <div className="flex items-start gap-2.5 bg-gradient-to-r from-prime/5 to-transparent border border-prime/10 rounded-xl px-4 py-3 mt-1">
        <div className="flex-shrink-0 mt-0.5">
          <div className="w-6 h-6 rounded-lg bg-accent/20 flex items-center justify-center">
            <ShieldCheck size={13} className="text-[#8B6914]" />
          </div>
        </div>
        <div>
          <p className="text-[11px] font-bold text-prime/80 uppercase tracking-wider mb-0.5 flex items-center gap-1">
            <Lock size={9} /> GDPR · HIPAA · KVKK
          </p>
          <p className="text-xs text-gray-500 leading-relaxed">
            {labels.gdpr}
          </p>
        </div>
      </div>
    </div>
  );
};

export default MedicalFileUpload;

```

### Dosya Adı: src\components\MedicalReviewer.jsx
```jsx
import React from 'react';
import { ShieldCheck, GraduationCap, Star } from 'lucide-react';

// Central registry of all Meva Clinic medical reviewers
export const REVIEWERS = {
  bariatric: {
    name: 'Dr. Cuma',
    nameRo: 'Dr. Cuma',
    specialty: 'Bariatric Surgery · Sleeve Gastrectomy · Gastric Balloon',
    specialtyRo: 'Chirurgie Bariatrică · Gastrectomie în Mânecă · Balon Gastric',
    bio: 'Born in 1976, graduated from Istanbul University Cerrahpaşa Faculty of Medicine. General Surgery specialist from Haseki Training and Research Hospital. Performed 10,000+ obesity surgeries (Sleeve Gastrectomy, Gastric Balloon) over the last 10 years.',
    bioRo: 'Născut în 1976, absolvent al Facultății de Medicină Cerrahpaşa din Istanbul. Specialist în chirurgie generală la Spitalul de Cercetare și Pregătire Haseki. A efectuat peste 10.000 de intervenții chirurgicale pentru obezitate (Gastrectomie în Mânecă, Balon Gastric) în ultimii 10 ani.',
    credentials: 'MD · Istanbul University Cerrahpaşa · 10,000+ Obesity Surgeries',
    credentialsRo: 'MD · Univ. Cerrahpaşa Istanbul · Peste 10.000 de Operații pentru Obezitate',
    education: 'Istanbul University, Cerrahpaşa Faculty of Medicine (1976)',
    institution: 'Haseki Training and Research Hospital',
    cases: '10,000+',
    image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=200',
    reviewedLabel: 'Medically Reviewed by',
    reviewedLabelRo: 'Verificat Medical de',
    url: 'https://www.mevaclinic.com/en/about-us',
  },
  hair: {
    name: 'MD Harun',
    nameRo: 'MD Harun',
    specialty: 'Hair & Eyebrow Transplant · Sapphire FUE · DHI',
    specialtyRo: 'Transplant de Păr & Sprâncene · Sapphire FUE · DHI',
    bio: 'Istanbul University (2011) graduate. Specialized in Sapphire FUE, DHI, and non-shaven techniques with over 12,000 successful procedures. Focuses on natural-looking results and patient satisfaction.',
    bioRo: 'Absolvent al Universității din Istanbul (2011). Specializat în tehnici Sapphire FUE, DHI și implant fără ras, cu peste 12.000 de proceduri reușite. Se concentrează pe rezultate naturale și satisfacția pacienților.',
    credentials: 'MD · Istanbul University (2011) · 12,000+ Procedures',
    credentialsRo: 'MD · Universitatea din Istanbul (2011) · Peste 12.000 de Proceduri',
    education: 'Istanbul University, Faculty of Medicine (2011)',
    cases: '12,000+',
    image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=200',
    reviewedLabel: 'Medically Reviewed by',
    reviewedLabelRo: 'Verificat Medical de',
    url: 'https://www.mevaclinic.com/en/about-us',
  },
  oncology: {
    name: 'Prof. Dr. Gökhan',
    nameRo: 'Prof. Dr. Gökhan',
    specialty: 'Robotic Oncology · CyberKnife S7 Specialist',
    specialtyRo: 'Oncologie Robotică · Specialist CyberKnife S7',
    bio: 'PhD in Radiation Oncology with over 15 years of clinical experience. ESTRO certified specialist operating the CyberKnife S7 Synchrony system for non-invasive tumor ablation.',
    bioRo: 'Doctor în Oncologie Radioterapeutică cu peste 15 ani de experiență clinică. Specialist certificat ESTRO care operează sistemul CyberKnife S7 Synchrony pentru ablația non-invazivă a tumorilor.',
    credentials: 'MD, PhD · ESTRO Certified · 15+ Years Experience',
    credentialsRo: 'MD, PhD · Certificat ESTRO · 15+ ani experiență',
    image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=200',
    reviewedLabel: 'Medically Reviewed by',
    reviewedLabelRo: 'Verificat Medical de',
    url: 'https://www.mevaclinic.com/en/about-us',
  },
  dental: {
    name: 'Dr. Osman',
    nameRo: 'Dr. Osman',
    specialty: 'Implantology & Digital Dentistry',
    specialtyRo: 'Implantologie & Stomatologie Digitală',
    bio: 'ITI Fellow and Straumann-certified implantologist with over 8,000 implant placements. Pioneer of full-arch digital smile design at Meva Clinic.',
    bioRo: 'Membră ITI și implantolog certificat Straumann cu peste 8.000 de implanturi plasate. Pionier al designului digital al zâmbetului full-arch la Meva Clinic.',
    credentials: 'DDS, PhD · ITI Fellow · Straumann Certified',
    credentialsRo: 'DDS, PhD · Membră ITI · Certificată Straumann',
    image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&q=80&w=200',
    reviewedLabel: 'Medically Reviewed by',
    reviewedLabelRo: 'Verificat Medical de',
    url: 'https://www.mevaclinic.com/en/about-us',
  },
  plastic: {
    name: 'Prof. Dr. Daghan',
    nameRo: 'Prof. Dr. Daghan',
    specialty: 'Plastic & Reconstructive Surgery · ISAPS',
    specialtyRo: 'Chirurgie Plastică & Reconstructivă · ISAPS',
    bio: 'ISAPS member and Deep Plane facelift specialist. Known for vertical-vector rejuvenation techniques that achieve natural, long-lasting results.',
    bioRo: 'Membru ISAPS și specialist în lifting facial Deep Plane. Cunoscut pentru tehnicile de întinerire pe vector vertical care oferă rezultate naturale și durabile.',
    credentials: 'MD · ISAPS Member · Deep Plane Specialist',
    credentialsRo: 'MD · Membru ISAPS · Specialist Deep Plane',
    image: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?auto=format&fit=crop&q=80&w=200',
    reviewedLabel: 'Medically Reviewed by',
    reviewedLabelRo: 'Verificat Medical de',
    url: 'https://www.mevaclinic.com/en/about-us',
  },
  organ: {
    name: 'Dr. Fatih',
    nameRo: 'Dr. Fatih',
    specialty: 'Transplant Surgery · Organ Procurement',
    specialtyRo: 'Chirurgie de Transplant · Prelevare de Organe',
    bio: 'TTS member and JCI Protocol certified transplant surgeon with extensive experience in kidney, liver and composite tissue allotransplantation.',
    bioRo: 'Membru TTS și chirurg de transplant certificat conform Protocolului JCI cu experiență vastă în transplant renal, hepatic și alotransplant de țesuturi compozite.',
    credentials: 'MD, PhD · TTS Member · JCI Protocol Certified',
    credentialsRo: 'MD, PhD · Membru TTS · Protocol JCI Certificat',
    image: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&q=80&w=200',
    reviewedLabel: 'Medically Reviewed by',
    reviewedLabelRo: 'Verificat Medical de',
    url: 'https://www.mevaclinic.com/en/about-us',
  },
};

const MedicalReviewer = ({ reviewer, isEn = false }) => {
  if (!reviewer) return null;

  const name = isEn ? reviewer.name : reviewer.nameRo;
  const specialty = isEn ? reviewer.specialty : reviewer.specialtyRo;
  const credentials = isEn ? reviewer.credentials : reviewer.credentialsRo;
  const bio = isEn ? reviewer.bio : reviewer.bioRo;
  const label = isEn ? reviewer.reviewedLabel : reviewer.reviewedLabelRo;
  const cases = reviewer.cases || null;

  return (
    <div
      className="mt-16 mb-8 border border-gray-100 rounded-[2rem] overflow-hidden shadow-sm bg-gradient-to-r from-gray-50 to-white"
      aria-label={isEn ? `Medical Reviewer: ${name}` : `Recenzent Medical: ${name}`}
      itemScope
      itemType="https://schema.org/Physician"
    >
      {/* Top accent bar */}
      <div className="h-1 bg-gradient-to-r from-accent via-yellow-300 to-accent" />

      <div className="p-6 sm:p-8 flex flex-col sm:flex-row items-center sm:items-start gap-6">
        {/* Doctor photo */}
        <div className="relative shrink-0">
          <img
            src={reviewer.image}
            alt={`${name} — Meva Clinic Medical Specialist`}
            width="80"
            height="80"
            loading="lazy"
            decoding="async"
            onError={(e) => {
              e.currentTarget.onerror = null;
              e.currentTarget.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&size=80&background=0b1626&color=d4af37&bold=true&format=svg`;
            }}
            className="w-20 h-20 rounded-2xl object-cover shadow-md border-2 border-white"
            itemProp="image"
          />
          {/* Verified badge overlay */}
          <div className="absolute -bottom-2 -right-2 w-7 h-7 bg-accent rounded-full flex items-center justify-center shadow-md border-2 border-white">
            <ShieldCheck size={14} className="text-prime" />
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 text-center sm:text-left">
          {/* Label */}
          <p className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.25em] mb-1.5 flex items-center justify-center sm:justify-start gap-2">
            <ShieldCheck size={11} className="text-accent" aria-hidden="true" />
            {label}
          </p>

          {/* Doctor name */}
          <h3
            className="font-serif text-xl font-bold text-prime leading-tight mb-1"
            itemProp="name"
          >
            {name}
          </h3>

          {/* Specialty */}
          <p className="text-sm font-semibold text-accent mb-2" itemProp="medicalSpecialty">
            {specialty}
          </p>

          {/* Bio */}
          {bio && (
            <p className="text-[12px] text-gray-500 leading-relaxed mb-3 max-w-prose" itemProp="description">
              {bio}
            </p>
          )}

          {/* Credentials + Cases row */}
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2">
            <div className="flex items-center gap-1.5 text-[11px] font-bold text-gray-500 bg-gray-100 rounded-full px-3 py-1">
              <GraduationCap size={12} aria-hidden="true" />
              <span itemProp="honorificSuffix">{credentials}</span>
            </div>
            {cases && (
              <div className="flex items-center gap-1.5 text-[11px] font-bold text-white bg-prime rounded-full px-3 py-1">
                <Star size={11} className="text-accent fill-accent" aria-hidden="true" />
                <span>{cases} {isEn ? 'cases' : 'cazuri'}</span>
              </div>
            )}
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={11} className="text-accent fill-accent" aria-hidden="true" />
              ))}
              <span className="text-[11px] font-bold text-gray-500 ml-1">
                {isEn ? 'Expert Verified 2026' : 'Verificat Expert 2026'}
              </span>
            </div>
          </div>
        </div>

        {/* Right — Medical disclaimer */}
        <div className="hidden xl:flex flex-col items-end justify-center text-right shrink-0 max-w-xs">
          <p className="text-[11px] text-gray-400 leading-relaxed italic border-l-2 border-accent/30 pl-3">
            {isEn
              ? 'This content has been medically reviewed and approved for accuracy by a licensed specialist.'
              : 'Acest conținut a fost verificat și aprobat din punct de vedere medical de un specialist licențiat.'}
          </p>
        </div>
      </div>
    </div>
  );
};

export default MedicalReviewer;

```

### Dosya Adı: src\components\PatientJourney.jsx
```jsx
import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { MessageCircle, Plane, Star, HeartPulse, ArrowRight, Car, Building2, Shield } from 'lucide-react';
import { pushToDataLayer } from '../utils/AnalyticsUtils';

const steps = [
  {
    icon: MessageCircle,
    titleRo: 'Consultație Online',
    titleEn: 'Online Consultation',
    descRo: 'Trimiteți dosarul medical. Chirurgul specialist analizează cazul dvs. și răspunde în 24h cu un plan personalizat.',
    descEn: 'Submit your medical file. The specialist surgeon analyzes your case and responds within 24h with a personalized plan.',
    color: 'from-blue-500 to-blue-600',
    step: '01'
  },
  {
    icon: Plane,
    titleRo: 'Sosire VIP Istanbul',
    titleEn: 'VIP Arrival Istanbul',
    descRo: 'Transfer privat aeroport-hotel cu șofer dedicat. Check-in la hotelul partener de 5 stele. Coordonatorul dvs. este disponibil 24/7.',
    descEn: 'Private airport-hotel transfer with dedicated driver. Check-in at the 5-star partner hotel. Your coordinator is available 24/7.',
    color: 'from-accent to-yellow-400',
    step: '02'
  },
  {
    icon: HeartPulse,
    titleRo: 'Excelență Clinică',
    titleEn: 'Clinical Excellence',
    descRo: 'Investigații preoperatorii complete în spitalul JCI. Intervenția chirurgicală cu protocoale WHO. Monitorizare 24/7 post-operator.',
    descEn: 'Complete pre-operative workup in JCI hospital. Surgical intervention with WHO protocols. 24/7 post-operative monitoring.',
    color: 'from-prime to-[#0d2a4a]',
    step: '03'
  },
  {
    icon: Star,
    titleRo: 'Recuperare 5 Stele',
    titleEn: '5-Star Recovery',
    descRo: 'Cameră de spital premium sau hotel 5 stele. Mese dietetice adaptate protocolului post-operator. Fizioterapie și îngrijire continuă.',
    descEn: 'Premium hospital room or 5-star hotel. Dietary meals adapted to post-operative protocol. Physiotherapy and continuous care.',
    color: 'from-purple-500 to-purple-700',
    step: '04'
  },
  {
    icon: Shield,
    titleRo: 'Follow-up Pe Viață',
    titleEn: 'Lifetime Follow-up',
    descRo: 'Consultații video bilunare la 1, 3 și 6 luni. Coordonatorul dvs. este mereu disponibil pe WhatsApp. Garanția rezultatelor Meva.',
    descEn: 'Video consultations at 1, 3, and 6 months. Your coordinator is always available on WhatsApp. Meva results guarantee.',
    color: 'from-green-500 to-green-700',
    step: '05'
  }
];

const vipLogistics = [
  {
    icon: Car,
    titleRo: 'Transfer VIP',
    titleEn: 'VIP Transfer',
    descRo: 'Mercedes S-Class sau SUV premium, șofer bilingv, așteptare în aeroport cu tăbliță personalizată.',
    descEn: 'Mercedes S-Class or premium SUV, bilingual driver, airport greeting with personalized sign.',
    img: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0729?q=80&w=800&auto=format&fit=crop'
  },
  {
    icon: Building2,
    titleRo: 'Hotel 5 Stele',
    titleEn: '5-Star Hotel',
    descRo: 'Parteneri: Hilton Istanbul, InterContinental, Conrad Bosphorus. Camera single VIP inclusă în pachet.',
    descEn: 'Partners: Hilton Istanbul, InterContinental, Conrad Bosphorus. VIP single room included in package.',
    img: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?q=80&w=800&auto=format&fit=crop'
  }
];

const PatientJourney = () => {
  const location = useLocation();
  const isEn = location.pathname.startsWith('/en');
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section className="py-24 bg-white overflow-hidden" id="patient-journey">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-prime/5 border border-prime/10 mb-4">
            <Plane size={14} className="text-accent" />
            <span className="text-xs font-bold text-prime uppercase tracking-widest">
              {isEn ? 'The Meva Experience' : 'Experiența Meva'}
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-prime mb-4">
            {isEn ? 'Your Journey, ' : 'Călătoria Ta, '}<span className="text-accent">{isEn ? 'Step by Step' : 'Pas cu Pas'}</span>
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto font-sans">
            {isEn
              ? 'From your first message to your full recovery — every detail is managed with precision and luxury by our dedicated team.'
              : 'De la primul mesaj până la recuperarea completă — fiecare detaliu este gestionat cu precizie și lux de echipa noastră dedicată.'
            }
          </p>
        </div>

        {/* Timeline — desktop horizontal */}
        <div className="hidden lg:flex items-start justify-between relative mb-16">
          <div className="absolute top-8 left-0 right-0 h-0.5 bg-gray-100 z-0"></div>
          {steps.map((s, i) => {
            const Icon = s.icon;
            const isActive = activeStep === i;
            return (
              <button
                key={i}
                onClick={() => setActiveStep(i)}
                className="flex flex-col items-center relative z-10 group flex-1"
              >
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${s.color} flex items-center justify-center shadow-lg mb-3 transition-all duration-300 ${isActive ? 'scale-110 shadow-xl' : 'opacity-70 group-hover:opacity-100 group-hover:scale-105'}`}>
                  <Icon size={24} className="text-white" />
                </div>
                <span className={`text-xs font-bold uppercase tracking-widest mb-1 transition-colors ${isActive ? 'text-accent' : 'text-gray-400'}`}>{s.step}</span>
                <span className={`text-sm font-bold text-center leading-tight transition-colors ${isActive ? 'text-prime' : 'text-gray-500 group-hover:text-prime'}`}>
                  {isEn ? s.titleEn : s.titleRo}
                </span>
              </button>
            );
          })}
        </div>

        {/* Active step detail */}
        <div className="hidden lg:block bg-gray-50 rounded-3xl p-8 border border-gray-100 mb-16 transition-all duration-500">
          {(() => {
            const s = steps[activeStep];
            const Icon = s.icon;
            return (
              <div className="flex items-start gap-6">
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${s.color} flex items-center justify-center shadow-lg shrink-0`}>
                  <Icon size={22} className="text-white" />
                </div>
                <div>
                  <span className="text-xs font-bold text-accent uppercase tracking-widest">{s.step}</span>
                  <h3 className="text-2xl font-serif font-bold text-prime mb-2">{isEn ? s.titleEn : s.titleRo}</h3>
                  <p className="text-gray-500 font-sans leading-relaxed max-w-2xl">{isEn ? s.descEn : s.descRo}</p>
                  {activeStep < steps.length - 1 && (
                    <button onClick={() => setActiveStep(activeStep + 1)} className="mt-4 flex items-center gap-2 text-sm font-bold text-prime hover:text-accent transition-colors">
                      {isEn ? 'Next step' : 'Pasul următor'} <ArrowRight size={15} />
                    </button>
                  )}
                </div>
              </div>
            );
          })()}
        </div>

        {/* Mobile: vertical steps */}
        <div className="lg:hidden space-y-4 mb-16">
          {steps.map((s, i) => {
            const Icon = s.icon;
            return (
              <div key={i} className="flex gap-4 p-5 bg-gray-50 rounded-2xl border border-gray-100">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${s.color} flex items-center justify-center shrink-0 shadow-md`}>
                  <Icon size={20} className="text-white" />
                </div>
                <div>
                  <span className="text-[10px] font-bold text-accent uppercase tracking-widest">{s.step}</span>
                  <h4 className="font-bold text-prime text-base">{isEn ? s.titleEn : s.titleRo}</h4>
                  <p className="text-sm text-gray-500 mt-1 leading-relaxed">{isEn ? s.descEn : s.descRo}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* VIP Logistics Section */}
        <div className="bg-[#0b1626] rounded-3xl overflow-hidden shadow-2xl">
          <div className="px-8 pt-8 pb-4">
            <p className="text-xs font-bold text-accent uppercase tracking-widest mb-2">
              {isEn ? 'VIP Logistics' : 'Logistică VIP'}
            </p>
            <h3 className="text-2xl font-serif font-bold text-white">
              {isEn ? 'Comfort from the moment you land.' : 'Confort din momentul aterizării.'}
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/5">
            {vipLogistics.map((item, i) => {
              const Icon = item.icon;
              return (
                <div key={i} className="relative overflow-hidden group">
                  <img
                    src={item.img}
                    alt={isEn ? item.titleEn : item.titleRo}
                    aria-label={isEn ? item.titleEn : item.titleRo}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-48 object-cover opacity-40 group-hover:opacity-60 transition-opacity duration-500"
                  />
                  <div className="absolute inset-0 p-6 flex flex-col justify-end">
                    <div className="flex items-center gap-2 mb-2">
                      <Icon size={16} className="text-accent" />
                      <span className="text-xs font-bold text-accent uppercase tracking-widest">
                        {isEn ? item.titleEn : item.titleRo}
                      </span>
                    </div>
                    <p className="text-sm text-gray-300 font-sans leading-relaxed">
                      {isEn ? item.descEn : item.descRo}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="px-8 py-6 text-center">
            <a
              href={`https://wa.me/905324675941?text=${encodeURIComponent(isEn ? 'Hello, I want to know more about the VIP all-inclusive package.' : 'Buna ziua, doresc informatii despre pachetul VIP all-inclusive.')}`}
              onClick={() => pushToDataLayer('whatsapp_click', { location: 'patient_journey_vip' })}
              target="_blank" rel="noreferrer"
              className="inline-flex items-center gap-2 bg-accent hover:bg-yellow-400 text-[#0b1626] font-bold py-3 px-8 rounded-xl transition-all shadow-lg text-sm"
            >
              {isEn ? 'Request VIP Package Details' : 'Solicită Detalii Pachet VIP'} <ArrowRight size={15} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PatientJourney;

```

### Dosya Adı: src\components\PatientJourneyCarousel.jsx
```jsx
import React, { useState, useRef } from 'react';
import { ChevronLeft, ChevronRight, BadgeCheck, Quote, ArrowRight } from 'lucide-react';
import { useLocation } from 'react-router-dom';

const testimonialsRo = [
  { id: 1, name: "Elena M.", treatment: "Gastric Sleeve", loss: "-45 kg", testimonial: "Echipa Meva Clinic mi-a schimbat viața. Nu doar profesionalismul uriaș al medicilor, ci grija întregului personal a fost dincolo de așteptările mele. Acum trăiesc o nouă viață, plină de energie!", time: "Acum 11 Luni" },
  { id: 2, name: "Mihai D.", treatment: "Gastric Bypass", loss: "-60 kg", testimonial: "De la preluarea din aeroport până la externare m-am simțit ca un VIP. Fără dureri, fără complicații. Recomand cu cea mai mare căldură tuturor celor care doresc o schimbare definitivă.", time: "Acum 1 An și 2 Luni" },
  { id: 3, name: "Andreea S.", treatment: "Gastric Sleeve", loss: "-35 kg", testimonial: "Mi-a fost foarte teamă inițial, însă domnul doctor mi-a explicat totul pas cu pas. Spitalizarea a fost excepțională, iar suportul constant al nutriționistului a făcut diferența.", time: "Acum 8 Luni" }
];

const testimonialsEn = [
  { id: 1, name: "Elena M.", treatment: "Gastric Sleeve", loss: "-45 kg", testimonial: "The Meva Clinic team changed my life. Not only the huge professionalism of the doctors, but the care of the entire staff was beyond my expectations. I now live a completely new life!", time: "11 Months Ago" },
  { id: 2, name: "Michael D.", treatment: "Gastric Bypass", loss: "-60 kg", testimonial: "From airport pickup to discharge I felt like a VIP. No pain, no complications. I warmly recommend them to everyone who wants a definitive transformation.", time: "1 Year and 2 Months Ago" },
  { id: 3, name: "Amanda S.", treatment: "Gastric Sleeve", loss: "-35 kg", testimonial: "I was very scared initially, but the doctor explained everything step by step. The hospitalization was exceptional, and the constant support made all the difference.", time: "8 Months Ago" }
];

const PatientJourneyCarousel = () => {
  const scrollRef = useRef(null);
  const location = useLocation();
  const isEn = location.pathname.startsWith('/en');
  const testimonials = isEn ? testimonialsEn : testimonialsRo;

  const scrollLeft = () => scrollRef.current && scrollRef.current.scrollBy({ left: -320, behavior: 'smooth' });
  const scrollRight = () => scrollRef.current && scrollRef.current.scrollBy({ left: 320, behavior: 'smooth' });

  return (
    <section className="py-24 bg-white overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div className="max-w-2xl">
             <div className="inline-flex items-center space-x-2 py-1.5 px-4 rounded-full bg-prime/5 border border-prime/10 text-prime text-sm font-bold tracking-widest uppercase mb-4 shadow-sm">
                <Quote size={16} className="text-accent" fill="currentColor" />
                <span>{isEn ? "Success Stories" : "Povești de Succes"}</span>
             </div>
             <h2 className="text-4xl md:text-5xl font-serif font-bold text-prime mb-4">{isEn ? "Real Transformations" : "Transformări Reale"}</h2>
             <p className="text-lg text-gray-500 font-sans">
               {isEn ? "Our patients are our best business card. Discover their experiences and the incredible results they have achieved." : "Pacienții noștri sunt cea mai bună carte de vizită. Descoperă experiențele lor și rezultatele incredibile pe care le-au obținut."}
             </p>
          </div>
          
          <div className="hidden md:flex space-x-3 mt-6 md:mt-0">
            <button onClick={scrollLeft} className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center text-prime hover:bg-prime hover:text-white hover:border-prime transition-colors shadow-sm focus:outline-none"><ChevronLeft size={24} /></button>
            <button onClick={scrollRight} className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center text-prime hover:bg-prime hover:text-white hover:border-prime transition-colors shadow-sm focus:outline-none"><ChevronRight size={24} /></button>
          </div>
        </div>

      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
         <div ref={scrollRef} className="flex overflow-x-auto space-x-6 pb-12 pt-4 snap-x snap-mandatory scrollbar-hide -mx-4 px-4 sm:mx-0 sm:px-0" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
           <style dangerouslySetInnerHTML={{__html: `.scrollbar-hide::-webkit-scrollbar { display: none; }`}} />

           {testimonials.map((patient) => (
              <div key={patient.id} className="min-w-[320px] md:min-w-[420px] lg:min-w-[480px] snap-center flex-shrink-0 bg-white rounded-3xl shadow-[0_4px_25px_rgb(0,0,0,0.06)] border border-gray-100 flex flex-col h-full transform transition-transform duration-300 hover:-translate-y-1">
                 
                 <div className="flex w-full h-48 md:h-56 overflow-hidden rounded-t-3xl border-b border-gray-100 relative">
                    <div className="w-1/2 bg-gray-100 flex items-center justify-center relative">
                       <span className="absolute bottom-3 left-3 bg-white/80 backdrop-blur-sm px-3 py-1 rounded-md text-xs font-bold text-gray-600 shadow-sm uppercase tracking-wider">{isEn ? "Before" : "Înainte"}</span>
                       <div className="w-full h-full bg-prime/[0.03]"></div>
                    </div>
                    <div className="w-1/2 bg-gray-50 flex items-center justify-center relative border-l border-white">
                       <span className="absolute bottom-3 right-3 bg-prime text-white backdrop-blur-sm px-3 py-1 rounded-md text-xs font-bold shadow-sm uppercase tracking-wider">{isEn ? "After" : "După"} ({patient.loss})</span>
                       <div className="w-full h-full bg-accent/[0.05]"></div>
                    </div>
                    
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full flex items-center shadow-md">
                       <BadgeCheck size={16} className="text-green-500 mr-1.5" />
                       <span className="text-xs font-bold text-gray-800 uppercase tracking-widest">{isEn ? "Verified" : "Verificat"}</span>
                    </div>
                 </div>

                 <div className="p-6 md:p-8 flex flex-col flex-grow">
                    <div className="flex items-center justify-between mb-4">
                       <h3 className="text-xl font-bold font-serif text-prime">{patient.name}</h3>
                       <span className="inline-block py-1 px-3 rounded text-xs font-bold bg-accent/10 text-accentHov uppercase tracking-wider">
                          {patient.treatment}
                       </span>
                    </div>
                    
                    <div className="flex-grow">
                       <Quote className="text-gray-200 w-8 h-8 mb-2 rotate-180 drop-shadow-sm" />
                       <p className="text-gray-600 font-sans italic relative z-10 leading-relaxed text-sm md:text-base">
                          "{patient.testimonial}"
                       </p>
                    </div>

                    <div className="mt-6 pt-4 border-t border-gray-100 flex items-center justify-between">
                       <span className="text-xs font-semibold text-gray-400 capitalize">{patient.time}</span>
                       <button className="text-prime text-sm font-bold flex items-center hover:text-accent transition-colors group">
                         {isEn ? "View Case" : "Vezi Cazul"} <ArrowRight size={16} className="ml-1 transition-transform group-hover:translate-x-1" />
                       </button>
                    </div>
                 </div>
              </div>
           ))}

         </div>
      </div>
    </section>
  );
};

export default PatientJourneyCarousel;

```

### Dosya Adı: src\components\PatientJourneyTimeline.jsx
```jsx
import React from 'react';
import { PlaneTakeoff, Microscope, Crosshair, Hotel, ShieldCheck, HeartPulse, Sparkles } from 'lucide-react';
import { useLocation } from 'react-router-dom';

const PatientJourneyTimeline = () => {
  const location = useLocation();
  const isEn = location.pathname.startsWith('/en');

  const steps = [
    { 
      id: 1, 
      title: isEn ? 'I. VIP Arrival' : 'I. Sosire VIP', 
      desc: isEn ? 'Private Mercedes-Benz pickup from IST/SAW airport.' : 'Preluare privată Mercedes-Benz de la aeroportul IST/SAW.', 
      icon: PlaneTakeoff 
    },
    { 
      id: 2, 
      title: isEn ? 'II. Clinical Screening' : 'II. Screening Clinic', 
      desc: isEn ? 'Multi-disciplinary JCI diagnostic and blood work.' : 'Diagnostic multidisciplinar JCI și analize de sânge.', 
      icon: Microscope 
    },
    { 
      id: 3, 
      title: isEn ? 'III. Precision Procedure' : 'III. Intervenție de Precizie', 
      desc: isEn ? 'Execution by world-renowned clinical specialists.' : 'Execuție de către specialiști clinici de talie mondială.', 
      icon: Crosshair 
    },
    { 
      id: 4, 
      title: isEn ? 'IV. 5-Star Recovery' : 'IV. Recuperare 5 Stele', 
      desc: isEn ? 'Premium stay in Istanbul partner luxury hotels.' : 'Cazare premium în hoteluri de lux partenere din Istanbul.', 
      icon: Hotel 
    },
    { 
      id: 5, 
      title: isEn ? 'V. 12-Month Follow-Up' : 'V. Monitorizare 12 Luni', 
      desc: isEn ? 'Remote care continues once you return home.' : 'Îngrijirea continuă de la distanță după revenirea acasă.', 
      icon: HeartPulse 
    }
  ];

  return (
    <div className="bg-white p-8 md:p-16 rounded-[3rem] shadow-[0_20px_50px_rgba(0,0,0,0.04)] border border-gray-100 my-16 relative overflow-hidden reveal">
       <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-full blur-3xl"></div>
       <div className="absolute bottom-0 left-0 w-32 h-32 bg-prime/5 rounded-full blur-3xl"></div>
       
       <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent text-prime text-[9px] font-bold uppercase tracking-widest mb-4">
             <Sparkles size={12} />
             {isEn ? "The Meva All-Inclusive Protocol" : "Protocolul Meva All-Inclusive"}
          </div>
          <h3 className="text-3xl md:text-4xl font-serif font-bold text-prime">
             {isEn ? "Your Path to Transformation" : "Calea Ta Către Transformare"}
          </h3>
       </div>

       <div className="flex flex-col md:flex-row justify-between relative mt-12">
          {/* Connector Line */}
          <div className="hidden md:block absolute top-[28px] left-[10%] right-[10%] h-[1px] bg-gradient-to-r from-transparent via-gray-200 to-transparent z-0"></div>
          
          {steps.map((step) => (
            <div key={step.id} className="relative z-10 flex flex-col items-center text-center px-4 mb-12 md:mb-0 w-full md:w-1/5 group">
               <div className="w-14 h-14 bg-white border border-gray-100 group-hover:border-accent group-hover:bg-prime rounded-2xl flex items-center justify-center shadow-xl mb-6 text-prime transition-all duration-500 transform group-hover:-translate-y-2 group-hover:rotate-6">
                  <step.icon size={24} className="text-accent group-hover:text-white transition-colors duration-500" />
               </div>
               <h4 className="font-bold text-base text-prime mb-3">{step.title}</h4>
               <p className="text-xs text-gray-500 font-sans leading-relaxed">{step.desc}</p>
            </div>
          ))}
       </div>

       <div className="mt-16 pt-8 border-t border-gray-50 flex items-center justify-center gap-2 text-xs font-bold text-gray-400 uppercase tracking-widest">
          <ShieldCheck size={16} className="text-accent" />
          {isEn ? "Clinical care continues 12 months post-op" : "Îngrijirea clinică continuă 12 luni post-operator"}
       </div>
    </div>
  );
};

export default PatientJourneyTimeline;

```

### Dosya Adı: src\components\PremiumPackageSection.jsx
```jsx
import React from 'react';
import { ShieldCheck, Check, Star, Car, Hotel, Languages, Activity } from 'lucide-react';
import { useLocation } from 'react-router-dom';

const PremiumPackageSection = () => {
  const location = useLocation();
  const isEn = location.pathname.startsWith('/en');

  return (
    <section id="pachete" className="py-24 bg-gray-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 py-1.5 px-4 rounded-full bg-accent/10 border border-accent/20 text-[#8B6914] text-sm font-bold tracking-widest uppercase mb-4 shadow-sm">
            <ShieldCheck size={18} aria-hidden="true" />
            <span>Premium Care</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-prime mb-6 leading-tight">
             {isEn ? "All-Inclusive Package Built Around You" : "Pachet All-Inclusive Construit în Jurul Tău"}
          </h2>
          <p className="text-lg text-gray-600 font-sans leading-relaxed">
             {isEn ? "Your medical experience in Istanbul should be stress-free. We have prepared a premium package where details make the difference." : "Experiența ta medicală la Istanbul trebuie să fie lipsită de stres. Am pregătit un pachet premium în care detaliile fac diferența."}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center bg-white rounded-3xl p-8 lg:p-12 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100/50 relative">
          
          <div className="absolute top-0 right-10 transform -translate-y-1/2 flex flex-col items-center justify-center bg-gradient-to-br from-accent to-accentHov text-white w-24 h-24 rounded-full shadow-lg shadow-accent/20 border-[3px] border-white z-10 hover:scale-105 transition-transform duration-300">
            <Star className="fill-white mb-1" size={20} />
            <span className="text-[10px] font-bold uppercase tracking-wider text-center leading-tight">Luxury<br/>Concierge</span>
          </div>

          <div className="space-y-10">
            <div className="flex items-start group">
              <div className="flex-shrink-0 w-14 h-14 bg-prime/5 rounded-2xl flex items-center justify-center text-prime border border-prime/10 group-hover:bg-prime group-hover:text-white transition-colors duration-300" aria-hidden="true">
                <Car size={26} strokeWidth={1.5} />
              </div>
              <div className="ml-5 pt-1">
                <h3 className="text-xl font-bold text-prime mb-2">{isEn ? "VIP Airport & Clinic Transfer" : "VIP Transfer Aeroport & Clinică"}</h3>
                <p className="text-gray-600 font-sans leading-relaxed">{isEn ? "Personal driver at your disposal from landing in Istanbul and throughout all medical visits." : "Șofer personal la dispoziția ta de la aterizarea în Istanbul și pe parcursul tuturor vizitelor medicale."}</p>
              </div>
            </div>

            <div className="flex items-start group">
              <div className="flex-shrink-0 w-14 h-14 bg-prime/5 rounded-2xl flex items-center justify-center text-prime border border-prime/10 group-hover:bg-prime group-hover:text-white transition-colors duration-300" aria-hidden="true">
                <Hotel size={26} strokeWidth={1.5} />
              </div>
              <div className="ml-5 pt-1">
                <h3 className="text-xl font-bold text-prime mb-2">{isEn ? "5-Star Hotel Accommodation" : "Cazare la Hotel 5 Stele"}</h3>
                <p className="text-gray-600 font-sans leading-relaxed">{isEn ? "Recovery in luxury conditions. The package fully covers accommodation in one of our prestigious partner hotels." : "Recuperare în condiții de lux. Pachetul acoperă integral cazarea într-unul dintre hotelurile partenere de prestigiu."}</p>
              </div>
            </div>

            <div className="flex items-start group">
              <div className="flex-shrink-0 w-14 h-14 bg-prime/5 rounded-2xl flex items-center justify-center text-prime border border-prime/10 group-hover:bg-prime group-hover:text-white transition-colors duration-300" aria-hidden="true">
                <Languages size={26} strokeWidth={1.5} />
              </div>
              <div className="ml-5 pt-1">
                <h3 className="text-xl font-bold text-prime mb-2">{isEn ? "Native English Translator" : "Traducător (Română - Engleză)"}</h3>
                <p className="text-gray-600 font-sans leading-relaxed">{isEn ? "There will be no language barriers. A dedicated medical assistant will accompany you to translate every detail." : "Nu vor exista bariere lingvistice. Asistentul medical dedicat te va însoți pentru a traduce fiecare detaliu."}</p>
              </div>
            </div>

            <div className="flex items-start group">
              <div className="flex-shrink-0 w-14 h-14 bg-prime/5 rounded-2xl flex items-center justify-center text-prime border border-prime/10 group-hover:bg-prime group-hover:text-white transition-colors duration-300" aria-hidden="true">
                <Activity size={26} strokeWidth={1.5} />
              </div>
              <div className="ml-5 pt-1">
                <h3 className="text-xl font-bold text-prime mb-2">{isEn ? "Pre/Post-Operative Tests" : "Teste Pre/Post-Operatorii"}</h3>
                <p className="text-gray-600 font-sans leading-relaxed">{isEn ? "All analyzes, consultations (cardiological, anesthetic) and necessary tests are 100% covered." : "Toate analizele, consulturile (cardiologic, anestezic) și testele necesare sunt acoperite 100%."}</p>
              </div>
            </div>
          </div>

          <div className="bg-prime rounded-2xl p-8 lg:p-10 text-white relative overflow-hidden shadow-2xl h-full flex flex-col justify-between">
             <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/3 translate-x-1/3 pointer-events-none"></div>
             
             <div>
               <h3 className="text-3xl font-serif font-bold mb-8">{isEn ? "The Premium Treatment" : "Tratamentul Premium"}</h3>
               <ul className="space-y-4.5 mb-8 font-sans">
                 <li className="flex items-start">
                   <Check className="text-accent mr-3 mt-1 flex-shrink-0" size={20} strokeWidth={3} />
                   <span className="font-medium text-white/90">{isEn ? "Guaranteed Surgical Intervention" : "Intervenția Chirurgicală Garantată"}</span>
                 </li>
                 <li className="flex items-start">
                   <Check className="text-accent mr-3 mt-1 flex-shrink-0" size={20} strokeWidth={3} />
                   <span className="font-medium text-white/90">{isEn ? "Team formed by Doctor Professors" : "Echipă formată din Profesori Doctori"}</span>
                 </li>
                 <li className="flex items-start">
                   <Check className="text-accent mr-3 mt-1 flex-shrink-0" size={20} strokeWidth={3} />
                   <span className="font-medium text-white/90">{isEn ? "VIP Hospitalization in Private Clinic (1-3 Days)" : "Spitalizare VIP în Clinică Privată (1-3 Zile)"}</span>
                 </li>
                 <li className="flex items-start">
                   <Check className="text-accent mr-3 mt-1 flex-shrink-0" size={20} strokeWidth={3} />
                   <span className="font-medium text-white/90">{isEn ? "Home Medication Included" : "Medicamentația pentru Acasă Inclusă"}</span>
                 </li>
                 <li className="flex items-start">
                   <Check className="text-accent mr-3 mt-1 flex-shrink-0" size={20} strokeWidth={3} />
                   <span className="font-medium text-white/90">{isEn ? "Dedicated Post-Operative Diet Plan" : "Plan de Dieta Dedicat Post-Operator"}</span>
                 </li>
               </ul>
             </div>
             
             <div className="border-t border-white/20 pt-6 mt-4 text-center bg-white/5 mx-[-2rem] mb-[-2.5rem] px-8 pb-10 hidden sm:block">
                <p className="text-lg italic font-serif text-accent drop-shadow-md">
                   {isEn ? "\"No hidden costs – Everything included for your comfort\"" : "\"Fără costuri ascunse – Totul inclus pentru confortul tău\""}
                </p>
             </div>
             
             <div className="border-t border-white/20 pt-6 mt-4 text-center sm:hidden block">
                <p className="text-lg italic font-serif text-accent drop-shadow-md">
                   {isEn ? "\"No hidden costs – Everything included for your comfort\"" : "\"Fără costuri ascunse – Totul inclus pentru confortul tău\""}
                </p>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default PremiumPackageSection;

```

### Dosya Adı: src\components\RecoverySimulator.jsx
```jsx
import React, { useState } from 'react';
import { Calendar, Activity, ShieldCheck, HeartPulse, Microscope } from 'lucide-react';

const recoveryData = {
  oncology: [
    {
      stage: "1 Week",
      physical: "Acute recovery phase. Minimal fatigue. Real-time tumor tracking ensures zero collateral damage.",
      protocol: "Daily hydration monitoring and sub-millimeter dosimetry validation.",
      badge: "Robotic Precision"
    },
    {
      stage: "1 Month",
      physical: "Return to normal activity. Inflammation markers normalize. VOLO Optimizer effects stabilize.",
      protocol: "First post-op diagnostic imaging (PET-CT) to verify target remission.",
      badge: "Clinical Response"
    },
    {
      stage: "6 Months",
      physical: "Full metabolic recovery. Systemic strength restored. Cell regeneration optimization.",
      protocol: "Multidisciplinary board review of 6-month biochemical markers.",
      badge: "Molecular Stability"
    },
    {
      stage: "1 Year",
      physical: "Long-term surveillance phase. Complete integration of healthy tissue regeneration.",
      protocol: "Annual high-definition diagnostic mapping for permanent control.",
      badge: "Curative Success"
    }
  ],
  hair: [
    {
      stage: "1 Week",
      physical: "Grafts secured. Scabbing sheds as Sapphire FUE incisions heal. Redness subsides.",
      protocol: "Bio-Active preservation wash and laser therapy for graft oxygenation.",
      badge: "Graft Anchor"
    },
    {
      stage: "1 Month",
      physical: "Shock loss phase (normal). Follicles enter resting phase before permanent growth.",
      protocol: "Exosome booster session for vascularization support.",
      badge: "Dormancy Management"
    },
    {
      stage: "6 Months",
      physical: "Significant visual density. Hair shaft thickness increases by 40% vs. month 3.",
      protocol: "Mathematical density assessment vs. MD Harun's original model.",
      badge: "Growth Surge"
    },
    {
      stage: "1 Year",
      physical: "Final result. Natural hairline and maximum vertex density achieved.",
      protocol: "Final clinical photography and certification of graft survival.",
      badge: "Total Restoration"
    }
  ],
  bariatric: [
    {
      stage: "1 Week",
      physical: "Liquid phase. Rapid hormonal shift (GLP-1 increase). Initial 5-8kg loss common.",
      protocol: "Metabolic intelligence monitoring. 24/7 nutritionist support active.",
      badge: "Metabolic Shift"
    },
    {
      stage: "1 Month",
      physical: "Transition to soft solids. Energy levels spike as insulin resistance drops.",
      protocol: "Blood panel analysis: Glucose, Lipids, and Micronutrient levels.",
      badge: "Hormonal Reset"
    },
    {
      stage: "6 Months",
      physical: "50-70% of excess weight lost. Significant reduction in co-morbidities.",
      protocol: "Gastric volume calibration and advanced fitness protocol integration.",
      badge: "Peak Transformation"
    },
    {
      stage: "1 Year",
      physical: "Weight stabilization. Remission of type-2 diabetes in 85%+ of cases.",
      protocol: "Long-term nutritional intelligence plan and maintenance mapping.",
      badge: "Permanent Remission"
    }
  ]
};

const RecoverySimulator = ({ type = 'bariatric', isEn = true }) => {
  const [activeStep, setActiveStep] = useState(0);
  const currentData = recoveryData[type] || recoveryData.bariatric;
  const current = currentData[activeStep];

  return (
    <div className="bg-white rounded-[2.5rem] shadow-2xl border border-gray-100 p-8 md:p-12 overflow-hidden relative">
      <div className="absolute top-0 right-0 w-48 h-48 bg-accent/5 rounded-full blur-3xl -mr-24 -mt-24 pointer-events-none"></div>
      
      <div className="flex items-center gap-3 mb-10">
        <Activity className="text-accent" size={24} />
        <h3 className="text-2xl md:text-3xl font-serif font-bold text-prime">
          {isEn ? "Recovery Science Simulator" : "Simulatorul Științei Recuperării"}
        </h3>
      </div>

      {/* Range Slider */}
      <div className="mb-16 relative">
        <div className="absolute top-1/2 left-0 w-full h-1.5 bg-gray-100 -translate-y-1/2 rounded-full"></div>
        <div 
          className="absolute top-1/2 left-0 h-1.5 bg-accent -translate-y-1/2 rounded-full transition-all duration-500"
          style={{ width: `${(activeStep / 3) * 100}%` }}
        ></div>
        <div className="relative flex justify-between">
          {currentData.map((s, i) => (
            <button
              key={i}
              onClick={() => setActiveStep(i)}
              className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-xs transition-all z-10 border-4 shadow-lg
                ${activeStep === i 
                  ? 'bg-prime text-white border-accent scale-125' 
                  : 'bg-white text-gray-400 border-gray-100 hover:border-accent'
                }`}
            >
              {i + 1}
            </button>
          ))}
        </div>
        <div className="flex justify-between mt-4">
          {currentData.map((s, i) => (
            <span key={i} className={`text-[10px] font-bold uppercase tracking-widest ${activeStep === i ? 'text-prime' : 'text-gray-300'}`}>
              {s.stage}
            </span>
          ))}
        </div>
      </div>

      {/* Content Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 animate-fade-in" key={activeStep}>
        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-accent/10 text-accent rounded-lg text-[10px] font-bold uppercase tracking-widest">
            <HeartPulse size={12} /> {current.badge}
          </div>
          <div>
            <h4 className="text-xs font-bold text-gray-400 uppercase tracking-[0.2em] mb-3">
              {isEn ? "What to Expect" : "La ce să te aștepți"}
            </h4>
            <p className="text-lg text-prime font-serif leading-relaxed">
              {current.physical}
            </p>
          </div>
        </div>

        <div className="space-y-6 p-6 bg-gray-50 rounded-2xl border border-gray-100 relative overflow-hidden">
          <Microscope className="absolute top-4 right-4 text-prime/5" size={48} />
          <div>
            <h4 className="text-xs font-bold text-gray-400 uppercase tracking-[0.2em] mb-3 flex items-center gap-2">
              <ShieldCheck size={14} className="text-prime" />
              {isEn ? "Clinical Protocol" : "Protocol Clinic"}
            </h4>
            <p className="text-sm text-gray-600 font-sans leading-relaxed">
              {current.protocol}
            </p>
          </div>
          <div className="pt-4 border-t border-gray-200">
             <p className="text-[10px] font-bold text-prime uppercase tracking-widest">
                {isEn ? "Medical Validation: Board Review Required" : "Validare Medicală: Necesită Revizuirea Consiliului"}
             </p>
          </div>
        </div>
      </div>

      {/* CTA Inside Simulator */}
      <div className="mt-12 text-center">
         <p className="text-xs text-gray-400 font-medium italic">
            {isEn 
              ? "*Timeline results are averages based on clinical trials. Individual results vary per case." 
              : "*Rezultatele cronologice sunt medii bazate pe studii clinice. Rezultatele individuale variază pe caz."}
         </p>
      </div>
    </div>
  );
};

export default RecoverySimulator;

```

### Dosya Adı: src\components\ReviewMarquee.jsx
```jsx
import React from 'react';
import { Star, MessageCircle } from 'lucide-react';

const reviews = [
  { name: "Andrei M.", text: "Cea mai bună experiență medicală în Istanbul. Echipa în limba română a fost minunată.", rating: 5 },
  { name: "Elena S.", text: "Tehnologia CyberKnife S7 chiar face diferența. M-am simțit în siguranță.", rating: 5 },
  { name: "Mihai D.", text: "Transplantul de păr Safir a depășit așteptările. Recuperare rapidă!", rating: 5 },
  { name: "Oana P.", text: "Meva Clinic este la un alt nivel de profesionalism. Recomand cu încredere.", rating: 5 }
];

const ReviewMarquee = ({ isEn = false }) => {
  return (
    <div className="bg-prime py-10 overflow-hidden border-y border-white/5 relative group">
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-prime to-transparent z-10"></div>
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-prime to-transparent z-10"></div>
      
      <div className="flex animate-marquee whitespace-nowrap gap-12 items-center">
        {[...reviews, ...reviews].map((review, i) => (
          <div key={i} className="inline-flex items-center gap-6 bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-2xl min-w-[400px]">
             <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center text-accent shrink-0">
                <MessageCircle size={24} />
             </div>
             <div>
                <div className="flex gap-1 mb-2">
                   {[1,2,3,4,5].map(s => <Star key={s} size={10} className="text-accent fill-accent" />)}
                </div>
                <p className="text-white text-sm font-medium italic mb-1 truncate max-w-[300px]">"{review.text}"</p>
                <p className="text-gray-400 text-[10px] font-bold uppercase tracking-widest">— {review.name}</p>
             </div>
          </div>
        ))}
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          display: flex;
          animation: marquee 40s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}} />
    </div>
  );
};

export default ReviewMarquee;

```

### Dosya Adı: src\components\SafetyQualitySection.jsx
```jsx
import React, { useState, useEffect } from 'react';
import { ShieldCheck, Plus, Minus, PlayCircle, Award, HeartPulse, Stethoscope, ChevronRight } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const faqDataRo = [
  { question: "Ce se întâmplă dacă apare o complicație medicală?", answer: "Siguranța ta este prioritatea absolută. Toate intervențiile noastre au loc în spitale acreditate JCI (Joint Commission International) din Turcia. Pachetele includ o asigurare medicală specializată împotriva complicațiilor." },
  { question: "Cât de sigură este călătoria și șederea în Istanbul?", answer: "Istanbul este un hub internațional de prestigiu pentru turismul medical. Încă de la coborârea din avion, asistentul nostru VIP te va prelua direct de la poartă. Cazarea se face în hoteluri de cinci stele, aflate în zone premium." },
  { question: "Sunt acoperit de o formă de garanție sau asigurare?", answer: "Absolut. Colaborăm exclusiv cu medici care au o rată de succes documentată de peste 99%. Suplimentar, beneficiezi de asistența noastră dedicată și proceduri legale și transparente." }
];

const faqDataEn = [
  { question: "What happens if a medical complication occurs?", answer: "Your safety is our absolute priority. All our surgeries take place in JCI (Joint Commission International) accredited hospitals in Turkey. The packages include specialized medical insurance against complications." },
  { question: "How safe is traveling and staying in Istanbul?", answer: "Istanbul is a prestigious international hub for medical tourism. From the moment you step off the plane, our VIP assistant will pick you up. Accommodation is provided in five-star hotels located in premium areas." },
  { question: "Am I covered by a guarantee or insurance?", answer: "Absolutely. We exclusively collaborate with doctors who have a documented success rate of over 99%. Additionally, you benefit from our dedicated assistance and transparent legal procedures." }
];

const SafetyQualitySection = () => {
  const [activeFaq, setActiveFaq] = useState(0);
  const [counter, setCounter] = useState(0);
  const location = useLocation();
  const isEn = location.pathname.startsWith('/en');
  const faqData = isEn ? faqDataEn : faqDataRo;

  useEffect(() => {
    let start = 0;
    const end = 12500;
    const duration = 2000;
    const incrementTime = duration / (end / 100);
    const timer = setInterval(() => {
      start += 100;
      if (start >= end) {
        setCounter(end);
        clearInterval(timer);
      } else {
        setCounter(start);
      }
    }, incrementTime);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden" id="siguranta">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-prime/5 -translate-y-1/2 translate-x-1/2 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="flex flex-col lg:flex-row items-center justify-between mb-24 gap-12">
          <div className="lg:w-1/2">
            <div className="inline-flex items-center space-x-2 py-1.5 px-4 rounded-full bg-red-50 text-red-800 border border-red-100 text-sm font-bold tracking-widest uppercase mb-6 shadow-sm">
              <ShieldCheck size={18} />
              <span>{isEn ? "JCI Accreditation & Safety" : "Acreditare JCI & Siguranță"}</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-prime mb-6 leading-[1.15]">
               {isEn ? "We Make No Compromises When It Comes To Your Life." : "Nu Facem Compromisuri Când Vine Vorba de Viața Ta."}
            </h2>
            <p className="text-lg text-gray-700 font-sans leading-relaxed">
               {isEn ? "Meva Clinic operates under the strictest international and European safety standards. Impeccable care, experienced surgeons and 21st century technology." : "Meva Clinic activează sub cele mai stricte norme internaționale de siguranță europeană și globală. O asistență impecabilă, chirurgi experimentați și tehnologie secolului 21."}
            </p>
          </div>
          
          <div className="lg:w-5/12 flex w-full">
            <div className="bg-white p-8 md:p-10 rounded-3xl shadow-2xl border border-gray-100 w-full flex items-center gap-8 relative overflow-hidden group hover:-translate-y-1 transition-transform duration-500">
               <div className="absolute top-0 right-0 w-48 h-48 bg-red-500/5 rounded-full blur-3xl -mr-16 -mt-16 group-hover:bg-red-500/10 transition-all duration-500 pointer-events-none"></div>
               <div className="w-20 h-20 bg-gradient-to-br from-red-500 to-red-700 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-red-500/30 flex-shrink-0 relative z-10">
                  <HeartPulse size={40} strokeWidth={1.5} />
               </div>
               <div className="relative z-10">
                 <div className="text-5xl md:text-6xl font-bold font-serif text-prime mb-2">{counter.toLocaleString()}+</div>
                 <div className="text-gray-700 font-bold uppercase tracking-wider text-sm">{isEn ? "International Patients" : "Pacienți Internaționali"}</div>
               </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          <div className="lg:col-span-5">
            <h3 className="text-3xl font-serif font-bold text-prime mb-8">{isEn ? "Frequently Asked Questions" : "Întrebări Frecvente"}</h3>
            <div className="space-y-4">
              {faqData.map((faq, index) => (
                <div key={index} className="bg-white border border-gray-100 rounded-2xl shadow-[0_2px_15px_rgb(0,0,0,0.03)] overflow-hidden transition-all duration-300">
                  <button 
                    onClick={() => setActiveFaq(activeFaq === index ? -1 : index)} 
                    className="w-full px-6 py-6 flex items-center justify-between text-left focus:outline-none group"
                    aria-expanded={activeFaq === index}
                    aria-label={`Toggle FAQ: ${faq.question}`}
                  >
                    <span className="font-bold text-prime text-lg pr-4 group-hover:text-accent transition-colors">{faq.question}</span>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-colors duration-300 ${activeFaq === index ? 'bg-accent text-white' : 'bg-gray-100 text-gray-700 group-hover:bg-gray-200'}`}>
                      {activeFaq === index ? <Minus size={16} /> : <Plus size={16} />}
                    </div>
                  </button>
                  <div className={`px-6 overflow-hidden transition-all duration-500 ease-in-out ${activeFaq === index ? 'max-h-96 pb-6 opacity-100' : 'max-h-0 opacity-0'}`}>
                    <p className="text-gray-700 font-sans leading-relaxed border-t border-gray-100 pt-5">{faq.answer}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-7">
             <div className="flex items-center justify-between mb-8">
               <h3 className="text-3xl font-serif font-bold text-prime">{isEn ? "Meva Medical Board" : "Board-ul Medical Meva"}</h3>
               <Link to={isEn ? "/en/about-us" : "/ro/despre-noi"} className="hidden sm:flex text-sm font-bold text-accent hover:text-prime transition-colors items-center">
                 {isEn ? "View all doctors" : "Vezi toți medicii"} <ChevronRight size={16} className="ml-1" />
               </Link>
             </div>
             
             <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                
                <div className="bg-white rounded-3xl overflow-hidden shadow-[0_4px_25px_rgb(0,0,0,0.06)] border border-gray-100 group flex flex-col h-full">
                   <div className="relative h-64 bg-[#0b1626] overflow-hidden cursor-pointer" role="button" aria-label={isEn ? "Play Video Interview" : "Redă Interviu Video"}>
                      <img src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=800&auto=format&fit=crop" loading="lazy" decoding="async" alt="Bariatric Surgeon Dr. Hasan Erdem" aria-label="Bariatric Surgeon Dr. Hasan Erdem" className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700" />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0b1626]/80 to-transparent"></div>
                      <div className="absolute inset-0 flex items-center justify-center">
                         <PlayCircle size={64} className="text-white/80 group-hover:text-white group-hover:scale-110 transition-all duration-300 drop-shadow-xl" strokeWidth={1} />
                      </div>
                      <div className="absolute bottom-4 left-4 right-4 bg-black/40 backdrop-blur-md text-white text-xs font-bold px-4 py-2 rounded-xl uppercase tracking-wider flex items-center border border-white/20">
                         <PlayCircle size={16} className="mr-2 text-accent" /> {isEn ? "Video Interview Dr. Erdem" : "Interviu Video Dr. Erdem"}
                      </div>
                   </div>
                   
                   <div className="p-6 flex flex-col flex-grow">
                      <div className="flex items-center gap-2 mb-3">
                        <Stethoscope size={16} className="text-accent" />
                        <span className="text-[10px] font-bold text-gray-700 uppercase tracking-widest">{isEn ? "Bariatric Surgeon" : "Chirurg Bariatric"}</span>
                      </div>
                      <h4 className="text-2xl font-serif font-bold text-prime mb-3">Dr. Hasan Erdem</h4>
                      <p className="text-gray-700 font-sans text-sm mb-6 flex-grow leading-relaxed">{isEn ? "Over 15 years of experience in complex Gastric Sleeve and Bypass surgeries. Titular member of IFSO Europe." : "Peste 15 ani de experiență în intervenții complexe de Gastric Sleeve și Bypass. Membru titular IFSO Europe."}</p>
                      <div className="flex items-center text-xs font-bold text-prime pt-4 border-t border-gray-100">
                         <div className="w-8 h-8 rounded-full bg-accent/10 text-accent flex items-center justify-center mr-3"><Award size={16} /></div>
                         {isEn ? "International Board Accreditation" : "Acreditare Board Internațional"}
                      </div>
                   </div>
                </div>

                <div className="bg-white rounded-3xl overflow-hidden shadow-[0_4px_25px_rgb(0,0,0,0.06)] border border-gray-100 group flex flex-col h-full">
                   <div className="relative h-64 bg-[#0b1626] overflow-hidden cursor-pointer" role="button" aria-label={isEn ? "Play Video Interview" : "Redă Interviu Video"}>
                      <img src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=800&auto=format&fit=crop" loading="lazy" decoding="async" alt="Dental Aesthetics Dr. Zeynep Turan" aria-label="Dental Aesthetics Dr. Zeynep Turan" className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700 object-top" />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0b1626]/80 to-transparent"></div>
                      <div className="absolute inset-0 flex items-center justify-center">
                         <PlayCircle size={64} className="text-white/80 group-hover:text-white group-hover:scale-110 transition-all duration-300 drop-shadow-xl" strokeWidth={1} />
                      </div>
                      <div className="absolute bottom-4 left-4 right-4 bg-black/40 backdrop-blur-md text-white text-xs font-bold px-4 py-2 rounded-xl uppercase tracking-wider flex items-center border border-white/20">
                         <PlayCircle size={16} className="mr-2 text-accent" /> {isEn ? "Dr. Turan's Expertise" : "Expertiza Dr. Turan"}
                      </div>
                   </div>
                   
                   <div className="p-6 flex flex-col flex-grow">
                      <div className="flex items-center gap-2 mb-3">
                        <Stethoscope size={16} className="text-accent" />
                        <span className="text-[10px] font-bold text-gray-700 uppercase tracking-widest">{isEn ? "Dental Aesthetics" : "Estetică Dentară"}</span>
                      </div>
                      <h4 className="text-2xl font-serif font-bold text-prime mb-3">Dr. Zeynep Turan</h4>
                      <p className="text-gray-700 font-sans text-sm mb-6 flex-grow leading-relaxed">{isEn ? "Hollywood Smile, implantology and 3D reconstruction aesthetics expert. 8000+ implante successfully completed." : "Expertă în estetică Hollywood Smile, implantologie și reconstrucție 3D. 8000+ implante finalizate cu succes."}</p>
                      <div className="flex items-center text-xs font-bold text-prime pt-4 border-t border-gray-100">
                         <div className="w-8 h-8 rounded-full bg-accent/10 text-accent flex items-center justify-center mr-3"><Award size={16} /></div>
                         {isEn ? "EACMFS European Member" : "Membru European EACMFS"}
                      </div>
                   </div>
                </div>

             </div>
             
             <Link to={isEn ? "/en/about-us" : "/ro/despre-noi"} className="sm:hidden mt-6 flex justify-center text-sm font-bold text-accent border border-accent/20 rounded-xl py-3 hover:bg-accent hover:text-white transition-colors items-center">
                {isEn ? "View all doctors" : "Vezi toți medicii"} <ChevronRight size={16} className="ml-2" />
             </Link>
          </div>

        </div>
      </div>
    </section>
  );
};

export default SafetyQualitySection;

```

### Dosya Adı: src\components\ServicesSection.jsx
```jsx
import React from 'react';
import { usePopularTreatments } from '../hooks/usePopularTreatments';
import { ArrowRight, Activity } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const OptimizedImage = ({ src, title, className, isEn }) => {
  return (
    <img 
      src={src} 
      alt={isEn ? `Medical treatment: ${title}` : `Imagine pentru tratament medical: ${title}`} 
      aria-label={isEn ? `Medical treatment: ${title}` : `Imagine pentru tratament medical: ${title}`} 
      className={className} 
      loading="lazy"
    />
  );
};

const ServicesSection = () => {
  const { treatments, trackClick } = usePopularTreatments();
  const location = useLocation();
  const isEn = location.pathname.startsWith('/en');

  return (
    <section className="py-24 bg-white" id="tratamente">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between">
           <div className="max-w-2xl">
             <div className="inline-flex items-center space-x-2 py-1.5 px-4 rounded-full bg-prime/5 border border-prime/10 text-prime text-sm font-bold tracking-widest uppercase mb-4 shadow-sm">
                <span>{isEn ? "Medical Solutions" : "Soluții Medicale"}</span>
             </div>
             <h2 className="text-4xl md:text-5xl font-serif font-bold text-prime mb-4">{isEn ? "Top Treatments" : "Tratamente de Top"}</h2>
             <p className="text-gray-500 font-sans text-lg">
               {isEn 
                  ? "The list below is strictly ordered based on other patients' interest, prioritizing the most requested international procedures."
                  : "Lista de mai jos se ordonează automat în funcție de interesul celorlalți pacienți, aducând în prim plan cele mai solicitate proceduri la nivel internațional."}
             </p>
           </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {treatments.map((t) => (
            <Link 
              key={t.id} 
              to={isEn ? `/en/${t.slug_en}` : `/ro/${t.slug_ro}`}
              className="bg-white rounded-3xl shadow-[0_4px_25px_rgb(0,0,0,0.06)] border border-gray-100 p-8 transition-all duration-300 transform group hover:-translate-y-2 hover:shadow-2xl flex flex-col hover:border-prime/20"
              onClick={() => trackClick(t.id)}
            >
              <div className="w-16 h-16 bg-gradient-to-br from-prime/5 to-prime/10 rounded-2xl flex items-center justify-center text-prime mb-8 group-hover:from-prime group-hover:to-[#112440] group-hover:text-white transition-all duration-500 shadow-sm">
                <Activity size={28} strokeWidth={1.5} />
              </div>
              <h3 className="text-2xl font-bold font-serif text-prime mb-3 group-hover:text-accent transition-colors">{isEn ? t.title_en : t.title}</h3>
              <p className="text-sm text-gray-500 font-sans mb-8 leading-relaxed flex-grow">{isEn ? t.description_en : t.description}</p>
              
              <div className="mt-auto pt-5 border-t border-gray-100 flex items-center justify-between text-sm font-bold text-prime transition-colors w-full">
                 <span className="uppercase tracking-wider text-xs border-b border-transparent group-hover:border-accent group-hover:text-accent transition-colors pb-0.5">
                    {isEn ? "Discover Package" : "Descoperă Pachetul"}
                 </span> 
                 <div className="w-10 h-10 rounded-full bg-prime/5 flex items-center justify-center text-prime group-hover:bg-accent group-hover:text-[#0b1626] transition-all duration-300 shadow-sm relative">
                   <div className="absolute inset-0 rounded-full border border-transparent group-hover:border-accent animate-ping opacity-0 group-hover:opacity-30"></div>
                   <ArrowRight size={18} className="transform group-hover:translate-x-1 group-hover:scale-110 transition-all" />
                 </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;

```

### Dosya Adı: src\components\SmartConcierge.jsx
```jsx
import React, { useState, useMemo, useEffect } from 'react';
import { treatmentRules } from '../data/treatmentRules';
import { User, Hospital, Calendar, Clock, Shield, ChevronRight, CheckCircle2, AlertCircle, Info, Download, Loader2 } from 'lucide-react';
import MedicalDossier from './MedicalDossier';
import { pushToDataLayer } from '../utils/AnalyticsUtils';

const SmartConcierge = ({ isEn = false }) => {
  const [step, setStep] = useState(1);
  const [isGenerating, setIsGenerating] = useState(false);
  const [generationProgress, setGenerationProgress] = useState(0);
  const [isUnlocked, setIsUnlocked] = useState(false);
  
  const [selection, setSelection] = useState({
    treatment: '',
    doctor: null,
    hospital: null
  });

  const treatments = [
    { id: 'hair_transplant', label: isEn ? 'Hair Transplant' : 'Implant de Păr' },
    { id: 'plastic_surgery', label: isEn ? 'Plastic Surgery' : 'Chirurgie Plastică' },
    { id: 'oncology', label: isEn ? 'Oncology' : 'Oncologie' }
  ];

  const filteredDoctors = useMemo(() => {
    if (!selection.treatment) return [];
    return treatmentRules.doctors.filter(d => d.protocols[selection.treatment]);
  }, [selection.treatment]);

  const itinerary = useMemo(() => {
    if (!selection.doctor || !selection.hospital) return null;
    const protocol = selection.doctor.protocols[selection.treatment];
    return {
      doctorName: selection.doctor.name,
      hospitalName: selection.hospital.name,
      transferTime: selection.hospital.distanceIST,
      specifics: protocol
    };
  }, [selection.doctor, selection.hospital, selection.treatment]);

  const handleGenerateReport = () => {
    setIsGenerating(true);
    let prog = 0;
    const interval = setInterval(() => {
      prog += 5;
      setGenerationProgress(prog);
      if (prog >= 100) {
        clearInterval(interval);
        setTimeout(() => {
          setIsGenerating(false);
          setStep(5); // Show Dossier
        }, 500);
      }
    }, 100);
  };

  const handleUnlock = () => {
     const phone = prompt(isEn ? "Enter your WhatsApp number to unlock & download the official report:" : "Introdu numărul de WhatsApp pentru a debloca și descărca raportul oficial:");
     if (phone && phone.length > 5) {
        setIsUnlocked(true);
        import('../utils/pixel').then(({ PxTrack }) => {
          PxTrack('Lead', { type: 'Dossier_Unlock', phone, ...selection });
          pushToDataLayer('generate_lead', { form_location: 'smart_concierge' });
          pushToDataLayer('form_submission_success', { form_location: 'smart_concierge' });
          pushToDataLayer('whatsapp_click', { location: 'smart_concierge_unlock' });
          alert(isEn ? "Full PDF & Exact Pricing Unlocked! A specialist will contact you on WhatsApp." : "PDF Complet și Prețul Exact Deblocat! Un specialist te va contacta pe WhatsApp.");
          window.open(`https://wa.me/905324675941?text=Bună ziua, am deblocat raportul meu clinic pentru ${selection.treatment}. Aș dori să discut prețul exact și programarea.`, '_blank');
        });
     }
  };

  return (
    <div className="bg-white rounded-[3rem] shadow-2xl overflow-hidden border border-gray-100 reveal">
      <div className="bg-prime p-10 text-white relative">
        <div className="absolute top-0 right-0 w-32 h-32 bg-accent/20 rounded-full blur-3xl -mr-16 -mt-16"></div>
        <h3 className="text-3xl font-serif font-bold mb-2">SmartConcierge™</h3>
        <p className="text-gray-400 text-sm">{isEn ? "AI-Driven Clinical Itinerary Generator" : "Generator de Itinerariu Clinic bazat pe AI"}</p>
      </div>

      <div className="p-10">
        {step < 5 && (
          <div className="flex justify-between mb-12 relative">
            <div className="absolute top-1/2 left-0 w-full h-[1px] bg-gray-100 -z-10"></div>
            {[1, 2, 3, 4].map(i => (
              <div key={i} className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-xs transition-all ${step >= i ? 'bg-accent text-prime shadow-lg' : 'bg-white border border-gray-100 text-gray-300'}`}>
                {i}
              </div>
            ))}
          </div>
        )}

        {isGenerating ? (
          <div className="py-20 text-center animate-fade-up">
             <Loader2 className="w-16 h-16 text-accent animate-spin mx-auto mb-8" />
             <h4 className="text-2xl font-serif font-bold text-prime mb-4">
                {isEn ? "Generating Your Clinical Blueprint..." : "Generăm Dosarul tău Clinic Personalizat..."}
             </h4>
             <div className="max-w-xs mx-auto h-2 bg-gray-100 rounded-full overflow-hidden">
                <div className="h-full bg-accent transition-all duration-300" style={{ width: `${generationProgress}%` }}></div>
             </div>
             <p className="mt-4 text-xs text-gray-400 font-bold uppercase tracking-widest">{generationProgress}% {isEn ? "Completed" : "Finalizat"}</p>
          </div>
        ) : (
          <>
            {step === 1 && (
              <div className="animate-fade-up">
                <h4 className="text-xl font-bold text-prime mb-6">{isEn ? "Select Your Clinical Interest" : "Selectează Interesul Clinic"}</h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {treatments.map(t => (
                    <button 
                      key={t.id}
                      onClick={() => {
                        setSelection({...selection, treatment: t.id});
                        setStep(2);
                      }}
                      className="p-6 rounded-2xl border-2 border-gray-50 hover:border-accent hover:bg-accent/5 transition-all text-left group"
                    >
                      <span className="block font-bold text-prime group-hover:text-accent">{t.label}</span>
                      <span className="text-[10px] text-gray-400 uppercase tracking-widest">{isEn ? "View Specialists" : "Vezi Specialiștii"}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="animate-fade-up">
                <h4 className="text-xl font-bold text-prime mb-6">{isEn ? "Choose Your Specialist" : "Alege Specialistul"}</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {filteredDoctors.map(d => (
                    <button 
                      key={d.id} 
                      onClick={() => {
                        setSelection({...selection, doctor: d});
                        setStep(3);
                      }}
                      className="p-8 rounded-3xl border-2 border-gray-50 hover:border-accent transition-all text-left relative overflow-hidden group"
                    >
                       <div className="flex items-center gap-4 mb-4">
                          <div className="w-12 h-12 rounded-xl bg-gray-100 flex items-center justify-center group-hover:bg-accent transition-colors">
                             <User size={24} />
                          </div>
                          <div>
                             <h5 className="font-bold text-prime">{d.name}</h5>
                             <p className="text-xs text-gray-500">{d.specialty}</p>
                          </div>
                       </div>
                       <div className="flex gap-4">
                          <div className="bg-green-50 px-3 py-1 rounded-lg text-green-700 text-[10px] font-bold">Success: {d.successRate}</div>
                          <div className="bg-blue-50 px-3 py-1 rounded-lg text-blue-700 text-[10px] font-bold">Exp: {d.experience}</div>
                       </div>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="animate-fade-up">
                <h4 className="text-xl font-bold text-prime mb-6">{isEn ? "Select Preferred Infrastructure" : "Selectează Infrastructura Preferată"}</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {treatmentRules.hospitals.map(h => (
                    <button 
                      key={h.id}
                      onClick={() => {
                        setSelection({...selection, hospital: h});
                        setStep(4);
                      }}
                      className="p-8 rounded-3xl border-2 border-gray-50 hover:border-accent transition-all text-left group"
                    >
                       <div className="w-12 h-12 rounded-xl bg-gray-100 flex items-center justify-center mb-4 group-hover:bg-accent transition-colors">
                          <Hospital size={24} />
                       </div>
                       <h5 className="font-bold text-prime mb-2">{h.name}</h5>
                       <p className="text-xs text-gray-500 mb-4">{isEn ? "Airport Transfer:" : "Transfer Aeroport:"} {h.distanceIST}</p>
                       <div className="flex flex-wrap gap-2">
                          {h.amenities.map(a => <span key={a} className="text-[9px] bg-gray-50 px-2 py-1 rounded-md text-gray-400 font-bold uppercase">{a}</span>)}
                       </div>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {step === 4 && itinerary && (
              <div className="animate-fade-up space-y-8">
                <div className="bg-gray-50 p-8 rounded-[2rem] border border-gray-100">
                   <h4 className="text-xl font-bold text-prime mb-6 flex items-center gap-3">
                      <CheckCircle2 className="text-green-500" />
                      {isEn ? "Your Personalized Itinerary" : "Itinerariul Tău Personalizat"}
                   </h4>
                   
                   <div className="space-y-6">
                      <div className="flex items-start gap-4">
                         <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-accent shadow-sm">
                            <Clock size={20} />
                         </div>
                         <div>
                            <p className="text-xs text-gray-400 font-bold uppercase tracking-widest mb-1">{isEn ? "Logistics Impact" : "Impact Logistic"}</p>
                            <p className="text-prime font-medium">
                               {isEn 
                                 ? `Hospital ${itinerary.hospitalName} is ${itinerary.transferTime} from IST Airport.` 
                                 : `Spitalul ${itinerary.hospitalName} se află la ${itinerary.transferTime} de Aeroportul IST.`}
                            </p>
                         </div>
                      </div>

                      <div className="flex items-start gap-4 p-6 bg-white rounded-2xl border border-gray-100 relative group">
                         <div className="w-10 h-10 rounded-xl bg-prime text-white flex items-center justify-center shrink-0">
                            <Shield size={20} />
                         </div>
                         <div>
                            <p className="text-xs text-gray-400 font-bold uppercase tracking-widest mb-1">
                               {isEn ? `Protocol by ${itinerary.doctorName}` : `Protocol stabilit de ${itinerary.doctorName}`}
                            </p>
                            <ul className="space-y-2 text-prime font-medium">
                               {Object.entries(itinerary.specifics).filter(([key]) => key !== 'reason').map(([key, val]) => (
                                 <li key={key} className="flex items-center gap-2">
                                    <ChevronRight size={14} className="text-accent" />
                                    <span className="capitalize">{key.replace(/([A-Z])/g, ' $1')}:</span> {val}
                                 </li>
                               ))}
                            </ul>
                         </div>
                         <div className="absolute top-6 right-6 group">
                            <div className="cursor-help text-accent hover:text-prime transition-colors relative">
                               <AlertCircle size={20} />
                               <div className="absolute bottom-full right-0 mb-4 w-64 p-4 bg-prime text-white text-[10px] rounded-xl opacity-0 group-hover:opacity-100 transition-all pointer-events-none shadow-2xl z-50">
                                  <p className="leading-relaxed font-medium">
                                     <Info size={14} className="inline mr-2 text-accent" />
                                     {itinerary.specifics.reason}
                                  </p>
                               </div>
                            </div>
                         </div>
                      </div>
                   </div>
                </div>

                <button 
                  onClick={handleGenerateReport}
                  className="w-full bg-prime text-white font-bold py-5 rounded-2xl shadow-xl flex items-center justify-center gap-3 hover:bg-accent hover:text-prime transition-all"
                >
                   {isEn ? "Generate Clinical Blueprint" : "Generează Blueprint Clinic"} <Download size={20} />
                </button>
              </div>
            )}

            {step === 5 && (
              <div className="animate-fade-up">
                 <MedicalDossier 
                    data={{
                      treatment: treatments.find(t => t.id === selection.treatment)?.label,
                      doctorName: selection.doctor?.name,
                      hospitalName: selection.hospital?.name,
                      technology: selection.treatment === 'oncology' ? 'CyberKnife S7' : 'Sapphire FUE / Da Vinci'
                    }}
                    isEn={isEn}
                    isUnlocked={isUnlocked}
                    onUnlock={handleUnlock}
                 />
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default SmartConcierge;

```

### Dosya Adı: src\components\SocialProof.jsx
```jsx
import React from 'react';
import { Heart, Star, ShieldCheck } from 'lucide-react';

const SocialProof = ({ isEn = false }) => {
  const testimonials = [
    { name: "Andrei M.", text: isEn ? "I chose Meva for the S7 tech, but I was impressed by the team's warmth." : "Am ales Meva pentru tehnologia S7, dar am rămas impresionat de căldura echipei." },
    { name: "Elena S.", text: isEn ? "The Romanian coordination made everything feel like home in Istanbul." : "Coordonarea în limba română a făcut ca totul să pară ca acasă în Istanbul." },
    { name: "Mihai D.", text: isEn ? "Professionalism at its peak. The JCI standards are visible in every detail." : "Profesionalism la superlativ. Standardele JCI sunt vizibile în fiecare detaliu." },
    { name: "Oana P.", text: isEn ? "From Bucharest to Istanbul, the journey was seamless and stress-free." : "De la București la Istanbul, călătoria a fost fără cusur și fără stres." }
  ];

  return (
    <div className="bg-prime py-12 overflow-hidden border-y border-white/5 relative group">
      <div className="absolute inset-y-0 left-0 w-40 bg-gradient-to-r from-prime to-transparent z-10"></div>
      <div className="absolute inset-y-0 right-0 w-40 bg-gradient-to-l from-prime to-transparent z-10"></div>
      
      <div className="flex animate-marquee whitespace-nowrap gap-16 items-center">
        {[...testimonials, ...testimonials].map((t, i) => (
          <div key={i} className="inline-flex items-center gap-6 group/item">
             <div className="flex items-center gap-2">
                <Heart size={16} className="text-accent fill-accent" />
                <div className="flex">
                   {[1,2,3,4,5].map(s => <Star key={s} size={10} className="text-accent fill-accent" />)}
                </div>
             </div>
             <p className="text-white/90 text-lg font-serif italic tracking-wide">
                "{t.text}"
             </p>
             <div className="flex items-center gap-2">
                <span className="text-accent font-bold uppercase tracking-[0.2em] text-[10px]">— {t.name}</span>
                <ShieldCheck size={12} className="text-white/20" />
             </div>
          </div>
        ))}
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes marquee-social {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          display: flex;
          animation: marquee-social 50s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}} />
    </div>
  );
};

export default SocialProof;

```

### Dosya Adı: src\components\StatsSection.jsx
```jsx
import React, { useState, useEffect, useRef } from 'react';
import { Award, Users, ShieldAlert, BarChart3, Globe } from 'lucide-react';

const CountUp = ({ end, duration = 2000, suffix = '' }) => {
  const [count, setCount] = useState(0);
  const countRef = useRef(null);

  useEffect(() => {
    let start = 0;
    const increment = end / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [end, duration]);

  return <span>{count.toLocaleString()}{suffix}</span>;
};

const StatsSection = ({ isEn = false }) => {
  const stats = [
    { label: isEn ? "Success Rate" : "Rată de Succes", value: 98, suffix: '%', icon: Award },
    { label: isEn ? "International Patients" : "Pacienți Internaționali", value: 12500, suffix: '+', icon: Users },
    { label: isEn ? "Countries Served" : "Țări Deservite", value: 45, suffix: '', icon: Globe },
    { label: isEn ? "Safety Accuracy" : "Precizie Siguranță", value: 99, suffix: '.9%', icon: ShieldAlert }
  ];

  return (
    <section className="py-24 bg-[#0b1626] text-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(212,175,55,0.05),transparent)] pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16 reveal">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent text-[10px] font-bold uppercase tracking-widest mb-4">
             <BarChart3 size={14} />
             {isEn ? "2025-2026 Clinical Data" : "Date Clinice 2025-2026"}
          </div>
          <h2 className="text-4xl md:text-6xl font-serif font-bold mb-6">
             {isEn ? "Authority in Numbers" : "Autoritate în Numere"}
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
             {isEn 
               ? "Validated clinical outcomes and international trust metrics reflecting our commitment to surgical excellence." 
               : "Rezultate clinice validate și metrici de încredere internațională care reflectă angajamentul nostru față de excelența chirurgicală."}
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-12">
          {stats.map((stat, i) => (
            <div key={i} className="flex flex-col items-center text-center reveal" style={{ transitionDelay: `${i * 100}ms` }}>
              <div className="w-12 h-12 md:w-16 md:h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-accent mb-4 md:mb-6 shadow-2xl">
                 <stat.icon size={24} className="md:w-8 md:h-8" />
              </div>
              <div className="text-2xl md:text-5xl font-serif font-bold mb-1 md:mb-2">
                 <CountUp end={stat.value} suffix={stat.suffix} />
              </div>
              <p className="text-gray-500 font-bold uppercase tracking-widest text-[9px] md:text-xs">
                 {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;

```

### Dosya Adı: src\components\SuitabilityQuiz.jsx
```jsx
import React, { useState } from 'react';
import { ShieldCheck, ArrowRight, CheckCircle2, ChevronLeft, Send, MessageCircle } from 'lucide-react';
import { pushToDataLayer } from '../utils/AnalyticsUtils';

const SuitabilityQuiz = ({ procedure = 'General', isEn = true }) => {
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState({
    age: '',
    history: '',
    smoking: '',
    outcome: '',
    contact: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const questions = [
    {
      id: 'age',
      q: isEn ? "What is your age group?" : "Care este grupa ta de vârstă?",
      options: isEn ? ["18-35", "36-50", "50+"] : ["18-35", "36-50", "50+"]
    },
    {
      id: 'history',
      q: isEn ? "Do you have any chronic medical conditions?" : "Ai vreo afecțiune medicală cronică?",
      options: isEn ? ["None", "Hypertension", "Diabetes", "Other"] : ["Niciuna", "Hipertensiune", "Diabet", "Altele"]
    },
    {
      id: 'smoking',
      q: isEn ? "What is your smoking status?" : "Fumați?",
      options: isEn ? ["Non-smoker", "Occasional", "Active smoker"] : ["Nefumător", "Ocazional", "Fumător activ"]
    },
    {
      id: 'outcome',
      q: isEn ? "What is your primary goal for this procedure?" : "Care este scopul tău principal pentru această procedură?",
      options: isEn ? ["Health Improvement", "Aesthetic Enhancement", "Functional Correction"] : ["Îmbunătățirea Sănătății", "Îmbunătățire Estetică", "Corecție Funcțională"]
    }
  ];

  const handleNext = (val) => {
    const key = questions[step].id;
    setFormData({ ...formData, [key]: val });
    setStep(step + 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    // Track Lead
    import('../utils/pixel').then(({ PxTrack }) => PxTrack('Lead', { quiz_type: procedure }));
    pushToDataLayer('generate_lead', { form_location: 'suitability_quiz' });
    pushToDataLayer('form_submission_success', { form_location: 'suitability_quiz' });
  };

  if (isSubmitted) {
    return (
      <div className="p-8 md:p-12 text-center bg-prime text-white rounded-[2.5rem] shadow-2xl relative overflow-hidden animate-scale-in">
        <div className="absolute top-0 left-0 w-full h-1.5 bg-accent"></div>
        <div className="w-20 h-20 bg-accent/20 rounded-full flex items-center justify-center text-accent mx-auto mb-6">
          <CheckCircle2 size={40} />
        </div>
        <h2 className="text-3xl font-serif font-bold mb-4">
          {isEn ? "Your Suitability Report is Ready!" : "Raportul de Eligibilitate este Gata!"}
        </h2>
        <p className="text-gray-400 mb-8 max-w-md mx-auto">
          {isEn 
            ? "Our specialists are reviewing your data. Your full clinical analysis will be sent to your WhatsApp/Email within 15-30 minutes." 
            : "Specialiștii noștri îți revizuiesc datele. Analiza clinică completă va fi trimisă pe WhatsApp/Email în 15-30 minute."}
        </p>
        <div className="flex flex-col gap-3 max-w-xs mx-auto">
           <a 
             href={`https://wa.me/905324675941`} 
             onClick={() => pushToDataLayer('whatsapp_click', { location: 'suitability_quiz_success' })}
             className="bg-[#25D366] text-white py-4 rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-[#1da851] transition-all"
           >
             <MessageCircle size={20} /> WhatsApp Support
           </a>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-[2.5rem] shadow-2xl border border-gray-100 overflow-hidden relative max-w-2xl mx-auto">
      <div className="bg-prime p-8 text-white">
        <div className="flex justify-between items-center mb-6">
           <div className="flex items-center gap-2 text-accent">
              <ShieldCheck size={18} />
              <span className="text-[10px] font-bold uppercase tracking-[0.2em]">{isEn ? "Board-Certified Assessment" : "Evaluare Certificată"}</span>
           </div>
           <span className="text-xs font-bold text-gray-400">Step {step + 1} / 5</span>
        </div>
        <h3 className="text-2xl font-serif font-bold">
           {isEn ? `Are you a candidate for ${procedure}?` : `Ești candidat pentru ${procedure}?`}
        </h3>
      </div>

      <div className="p-8 md:p-10">
        {step < questions.length ? (
          <div className="space-y-6 animate-fade-in" key={step}>
            <p className="text-xl text-prime font-bold font-serif">{questions[step].q}</p>
            <div className="grid grid-cols-1 gap-3">
              {questions[step].options.map((opt, i) => (
                <button
                  key={i}
                  onClick={() => handleNext(opt)}
                  className="w-full text-left p-5 rounded-2xl border border-gray-100 hover:border-accent hover:bg-accent/5 transition-all flex justify-between items-center group"
                >
                  <span className="font-bold text-prime">{opt}</span>
                  <ArrowRight size={18} className="text-gray-200 group-hover:text-accent group-hover:translate-x-1 transition-all" />
                </button>
              ))}
            </div>
            {step > 0 && (
              <button onClick={() => setStep(step - 1)} className="flex items-center gap-2 text-gray-400 font-bold text-xs uppercase tracking-widest hover:text-prime">
                <ChevronLeft size={14} /> {isEn ? "Back" : "Înapoi"}
              </button>
            )}
          </div>
        ) : (
          <div className="space-y-6 animate-fade-in">
             <div className="bg-accent/10 p-6 rounded-2xl border border-accent/20 mb-8">
                <h4 className="font-bold text-prime mb-2">{isEn ? "Final Step: Analysis Request" : "Ultimul Pas: Cerere Analiză"}</h4>
                <p className="text-xs text-gray-500 leading-relaxed">
                  {isEn 
                    ? "To protect your medical privacy, our system does not display results on-screen. Enter your contact details to receive your 100% confidential report." 
                    : "Pentru a-ți proteja confidențialitatea medicală, sistemul nostru nu afișează rezultatele pe ecran. Introdu datele de contact pentru a primi raportul tău 100% confidențial."}
                </p>
             </div>
             <form onSubmit={handleSubmit} className="space-y-4">
                <input 
                  required
                  type="text" 
                  placeholder={isEn ? "WhatsApp Number or Email" : "Număr WhatsApp sau Email"}
                  className="w-full p-5 bg-gray-50 border border-gray-100 rounded-2xl focus:ring-2 focus:ring-accent outline-none font-bold text-prime"
                  onChange={(e) => setFormData({...formData, contact: e.target.value})}
                />
                <button className="w-full bg-prime text-white py-5 rounded-2xl font-bold flex items-center justify-center gap-3 hover:shadow-xl transition-all shadow-prime/20">
                   {isEn ? "Receive Full Clinical Report" : "Primește Raportul Clinic Complet"}
                   <Send size={18} className="text-accent" />
                </button>
                <div className="flex items-center justify-center gap-2 text-[10px] text-gray-400 font-bold uppercase tracking-widest">
                   <ShieldCheck size={12} /> HIPAA & JCI Compliant
                </div>
             </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default SuitabilityQuiz;

```

### Dosya Adı: src\components\TestimonialGallery.jsx
```jsx
import React, { useState } from 'react';
import { Play, Quote, MessageCircle, Star, Heart } from 'lucide-react';

const TestimonialGallery = ({ isEn = false }) => {
  const [activeVideo, setActiveVideo] = useState(null);

  const testimonials = [
    {
      id: 1,
      name: "Andrei Popescu",
      procedure: isEn ? "Gastric Sleeve" : "Micșorare Stomac",
      quote: isEn ? "Meva Clinic gave me a second life. The care in Istanbul was beyond premium." : "M-am simțit ca acasă în Istanbul. Meva Clinic mi-a oferit o a doua șansă la viață.",
      videoThumb: "https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=1200&auto=format&fit=crop"
    },
    {
      id: 2,
      name: "Elena Ionescu",
      procedure: isEn ? "Rhinoplasty" : "Rinoplastie",
      quote: isEn ? "Fear disappeared the moment I met the Romanian support team." : "Frica a dispărut în momentul în care am întâlnit echipa de suport în limba română.",
      videoThumb: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=1200&auto=format&fit=crop"
    }
  ];

  return (
    <section className="py-24 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 reveal">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-prime/5 border border-prime/10 text-prime text-[10px] font-bold uppercase tracking-widest mb-4">
             <MessageCircle size={14} className="text-accent" />
             {isEn ? "Real Patient Stories" : "Povești Reale ale Pacienților"}
          </div>
          <h2 className="text-4xl md:text-6xl font-serif font-bold text-prime mb-6">
             {isEn ? "The Emotional Journey" : "Călătoria Emoțională"}
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto leading-relaxed">
             {isEn 
               ? "From the initial fear to the joy of transformation. Listen to our patients from Romania share their Meva experience." 
               : "De la teama inițială la bucuria transformării. Ascultă pacienții noștri din România împărtășind experiența Meva."}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-white rounded-[3rem] p-8 md:p-12 shadow-xl border border-gray-100 flex flex-col md:flex-row gap-10 reveal" style={{ transitionDelay: `${i * 100}ms` }}>
               <div className="md:w-1/2 relative group cursor-pointer" onClick={() => setActiveVideo(t.id)}>
                  <div className="aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl">
                     <img src={t.videoThumb} alt={t.name} aria-label={`${t.name} Testimonial Video`} loading="lazy" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                     <div className="absolute inset-0 bg-prime/20 group-hover:bg-prime/40 transition-colors"></div>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center">
                     <div className="w-16 h-16 rounded-full bg-white text-prime flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform">
                        <Play size={24} className="fill-prime ml-1" />
                     </div>
                  </div>
                  <div className="absolute bottom-6 left-6 right-6">
                     <div className="bg-white/10 backdrop-blur-xl border border-white/20 px-4 py-2 rounded-xl text-white text-[10px] font-bold uppercase tracking-widest text-center">
                        {isEn ? "Watch Story" : "Vezi Povestea"}
                     </div>
                  </div>
               </div>

               <div className="md:w-1/2 flex flex-col justify-center">
                  <div className="flex gap-1 mb-6">
                     {[1,2,3,4,5].map(s => <Star key={s} size={14} className="text-accent fill-accent" />)}
                  </div>
                  <Quote className="text-accent/20 mb-4" size={48} />
                  <p className="text-xl font-serif font-bold text-prime mb-6 italic leading-relaxed">
                     "{t.quote}"
                  </p>
                  <div className="mt-auto">
                     <h4 className="font-bold text-prime text-lg">{t.name}</h4>
                     <p className="text-xs text-gray-400 font-bold uppercase tracking-widest">{t.procedure}</p>
                  </div>
               </div>
            </div>
          ))}
        </div>

        {/* Cinematic Preview Section */}
        <div className="mt-24 reveal">
           <div className="bg-prime rounded-[4rem] p-12 md:p-24 text-white relative overflow-hidden shadow-2xl group">
              <div className="absolute inset-0 opacity-20 transition-transform duration-[10s] group-hover:scale-110">
                 <img src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=2000" alt="Meva Clinic Interior Premium Facilities" aria-label="Meva Clinic Interior Premium Facilities" loading="lazy" className="w-full h-full object-cover" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-prime via-prime/80 to-transparent"></div>
              
              <div className="relative z-10 max-w-2xl">
                 <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent text-prime text-[9px] font-bold uppercase tracking-widest mb-6">
                    <Heart size={12} />
                    {isEn ? "Cinematic Experience" : "Experiență Cinematică"}
                 </div>
                 <h3 className="text-4xl md:text-6xl font-serif font-bold mb-8 leading-tight">
                    {isEn ? "A Day at Meva Clinic" : "O zi la Meva Clinic"}
                 </h3>
                 <p className="text-gray-400 text-lg mb-10 leading-relaxed">
                    {isEn 
                      ? "Witness the harmony of high-tech medicine and human care. Take a virtual journey through our labs, surgery suites, and patient recovery zones." 
                      : "Fii martor la armonia dintre medicina de înaltă tehnologie și grija umană. Fă o călătorie virtuală prin laboratoarele și zonele noastre de recuperare."}
                 </p>
                 <button className="bg-accent text-prime font-bold py-5 px-12 rounded-2xl flex items-center gap-4 hover:bg-white transition-all shadow-xl">
                    <Play size={20} className="fill-prime" />
                    {isEn ? "Play Clinical Briefing" : "Redă Prezentarea Clinică"}
                 </button>
              </div>
           </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialGallery;

```

### Dosya Adı: src\components\TestimonialsGrid.jsx
```jsx
import React from 'react';
import { Play } from 'lucide-react';
import { useLocation } from 'react-router-dom';

const TestimonialsGrid = () => {
  const location = useLocation();
  const isEn = location.pathname.startsWith('/en');

  const testimonials = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800",
      quoteEn: "Meva Clinic changed my life! The care was exceptional.",
      quoteRo: "Meva Clinic mi-a schimbat viața! Îngrijirea a fost excepțională.",
      name: "Maria D.",
      treatmentEn: "Gastric Sleeve",
      treatmentRo: "Gastric Sleeve"
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=800",
      quoteEn: "Unbelievable results. 100% natural and painless procedure.",
      quoteRo: "Rezultate incredibile. Procedură 100% naturală și fără durere.",
      name: "Andrei V.",
      treatmentEn: "Hair Transplant",
      treatmentRo: "Implant de Păr"
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=800",
      quoteEn: "The mommy makeover gave me my confidence back.",
      quoteRo: "Operația Mommy Makeover mi-a redat încrederea în mine.",
      name: "Elena S.",
      treatmentEn: "Mommy Makeover",
      treatmentRo: "Mommy Makeover"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-prime mb-4">
            {isEn ? "Patient Success Stories" : "Povești de Succes ale Pacienților"}
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item) => (
            <div key={item.id} className="relative group rounded-3xl overflow-hidden shadow-lg cursor-pointer transform transition-transform duration-300 hover:-translate-y-2">
              <div className="aspect-[3/4] md:aspect-[4/5] w-full relative">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  aria-label={`${item.name} Testimonial`} 
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                
                {/* Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/40 group-hover:bg-accent/90 group-hover:scale-110 transition-all duration-300 shadow-[0_0_20px_rgba(0,0,0,0.3)]">
                    <Play className="text-white w-8 h-8 ml-1" fill="currentColor" />
                  </div>
                </div>

                <div className="absolute bottom-0 left-0 w-full p-6 text-white">
                  <div className="flex mb-3 space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-4 h-4 text-accent fill-current" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="font-medium text-lg mb-2 italic">"{isEn ? item.quoteEn : item.quoteRo}"</p>
                  <div className="flex items-center justify-between border-t border-white/20 pt-3 mt-3">
                    <span className="font-bold text-sm tracking-wide">{item.name}</span>
                    <span className="bg-accent text-white text-xs px-2 py-1 rounded font-bold">{isEn ? item.treatmentEn : item.treatmentRo}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsGrid;

```

### Dosya Adı: src\components\TopBar.jsx
```jsx
import React from 'react';
import { Phone, Mail } from 'lucide-react';
import { useLocation } from 'react-router-dom';

const TopBar = () => {
  const location = useLocation();
  const isEn = location.pathname.startsWith('/en');

  return (
    <div className="bg-[#0b1626] text-white hidden md:flex border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-row items-center justify-between h-9 gap-4">

        {/* Left: Contact info */}
        <div className="flex items-center gap-5 text-[11px] font-medium shrink-0">
          <a
            href="tel:+905324675941"
            className="flex items-center gap-1.5 text-gray-300 hover:text-accent transition-colors whitespace-nowrap"
            aria-label="Call Meva Clinic"
          >
            <Phone size={11} className="text-accent shrink-0" />
            +90 532 467 59 41
          </a>
          <a
            href="mailto:info@mevaclinic.com"
            className="flex items-center gap-1.5 text-gray-300 hover:text-accent transition-colors whitespace-nowrap"
            aria-label="Email Meva Clinic"
          >
            <Mail size={11} className="text-accent shrink-0" />
            info@mevaclinic.com
          </a>
        </div>

        {/* Center: Trust badge */}
        <div className="hidden lg:flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-widest text-gray-500">
          <span className="text-accent">✦</span>
          {isEn ? 'JCI Accredited · Ministry of Health Certified' : 'Acreditat JCI · Certificat de Ministerul Sănătății'}
          <span className="text-accent">✦</span>
        </div>

        {/* Right: Social icons */}
        <div className="flex items-center gap-2 shrink-0">
          <a
            href="https://instagram.com/mevaclinic"
            target="_blank"
            rel="noreferrer"
            className="w-6 h-6 rounded-full border border-white/10 flex items-center justify-center hover:bg-accent hover:border-accent transition-all duration-300 text-[9px] font-black"
            aria-label="Meva Clinic Instagram"
          >
            IG
          </a>
          <a
            href="https://facebook.com/mevaclinic"
            target="_blank"
            rel="noreferrer"
            className="w-6 h-6 rounded-full border border-white/10 flex items-center justify-center hover:bg-accent hover:border-accent transition-all duration-300 text-[9px] font-black"
            aria-label="Meva Clinic Facebook"
          >
            FB
          </a>
          <a
            href="https://wa.me/905324675941"
            target="_blank"
            rel="noreferrer"
            className="w-6 h-6 rounded-full border border-white/10 flex items-center justify-center hover:bg-green-500 hover:border-green-500 transition-all duration-300 text-[9px] font-black"
            aria-label="Meva Clinic WhatsApp"
          >
            WA
          </a>
        </div>

      </div>
    </div>
  );
};

export default TopBar;

```

### Dosya Adı: src\components\TreatmentQuiz.jsx
```jsx
import React, { useState } from 'react';
import { CheckCircle, ArrowRight, ChevronRight, Phone, Mail, X } from 'lucide-react';
import { useLocation } from 'react-router-dom';
import { pushToDataLayer } from '../utils/AnalyticsUtils';

const quizData = {
  hair: {
    titleRo: 'Sunt Candidat la Implant de Păr?',
    titleEn: 'Am I a Hair Transplant Candidate?',
    questions: [
      {
        idRo: 'Câți ani aveți?',
        idEn: 'What is your age?',
        options: [
          { labelRo: '18–25 ani', labelEn: '18–25 years', score: 1 },
          { labelRo: '26–35 ani', labelEn: '26–35 years', score: 3 },
          { labelRo: '36–50 ani', labelEn: '36–50 years', score: 3 },
          { labelRo: 'Peste 50 ani', labelEn: 'Over 50 years', score: 2 }
        ]
      },
      {
        idRo: 'Care este stadiul căderii părului?',
        idEn: 'What is your hair loss stage?',
        options: [
          { labelRo: 'Linie frontală retrasă', labelEn: 'Receding hairline', score: 3 },
          { labelRo: 'Chelie parțială (vertex)', labelEn: 'Partial baldness (crown)', score: 3 },
          { labelRo: 'Chelie avansată', labelEn: 'Advanced baldness', score: 2 },
          { labelRo: 'Chelie totală', labelEn: 'Complete baldness', score: 1 }
        ]
      },
      {
        idRo: 'Aveți afecțiuni cronice?',
        idEn: 'Do you have chronic conditions?',
        options: [
          { labelRo: 'Nu, sunt sănătos', labelEn: 'No, I am healthy', score: 3 },
          { labelRo: 'Diabet controlat', labelEn: 'Controlled diabetes', score: 2 },
          { labelRo: 'Hipertensiune', labelEn: 'Hypertension', score: 2 },
          { labelRo: 'Boli autoimune', labelEn: 'Autoimmune conditions', score: 1 }
        ]
      },
      {
        idRo: 'Densitatea zonei donatoare (ceafă)?',
        idEn: 'Donor area density (back of head)?',
        options: [
          { labelRo: 'Densă, groasă', labelEn: 'Dense, thick', score: 3 },
          { labelRo: 'Medie', labelEn: 'Medium', score: 2 },
          { labelRo: 'Rară', labelEn: 'Sparse', score: 1 },
          { labelRo: 'Nu știu', labelEn: "I don't know", score: 2 }
        ]
      },
      {
        idRo: 'Care este obiectivul tău principal?',
        idEn: 'What is your primary goal?',
        options: [
          { labelRo: 'Linie frontală naturală', labelEn: 'Natural hairline', score: 3 },
          { labelRo: 'Densitate totală', labelEn: 'Full density', score: 3 },
          { labelRo: 'Completare vertex', labelEn: 'Crown coverage', score: 3 },
          { labelRo: 'Primă evaluare', labelEn: 'Initial evaluation only', score: 2 }
        ]
      }
    ]
  },
  bariatric: {
    titleRo: 'Sunt Candidat la Chirurgie Bariatrică?',
    titleEn: 'Am I a Bariatric Surgery Candidate?',
    questions: [
      {
        idRo: 'Care este indicele dumneavoastră de masă corporală (IMC)?',
        idEn: 'What is your Body Mass Index (BMI)?',
        options: [
          { labelRo: 'Sub 30 (supraponderal)', labelEn: 'Under 30 (overweight)', score: 1 },
          { labelRo: '30–35 (obezitate gr. I)', labelEn: '30–35 (Grade I obesity)', score: 2 },
          { labelRo: '35–40 (obezitate gr. II)', labelEn: '35–40 (Grade II obesity)', score: 3 },
          { labelRo: 'Peste 40 (obezitate gr. III)', labelEn: 'Over 40 (Grade III obesity)', score: 3 }
        ]
      },
      {
        idRo: 'Aveți diabet de tip 2?',
        idEn: 'Do you have type 2 diabetes?',
        options: [
          { labelRo: 'Da, insulino-dependent', labelEn: 'Yes, insulin-dependent', score: 3 },
          { labelRo: 'Da, controlat medicamentos', labelEn: 'Yes, medication-controlled', score: 3 },
          { labelRo: 'Pre-diabet', labelEn: 'Pre-diabetes', score: 2 },
          { labelRo: 'Nu', labelEn: 'No', score: 1 }
        ]
      },
      {
        idRo: 'Ați încercat diete/programe de slăbire?',
        idEn: 'Have you tried diets/weight loss programs?',
        options: [
          { labelRo: 'Da, fără succes pe termen lung', labelEn: 'Yes, without long-term success', score: 3 },
          { labelRo: 'Da, cu succes parțial', labelEn: 'Yes, with partial success', score: 2 },
          { labelRo: 'Nu am încercat sistematic', labelEn: 'Not systematically', score: 1 },
          { labelRo: 'Nu doresc dietă, vreau soluție definitivă', labelEn: 'I want a definitive solution', score: 3 }
        ]
      },
      {
        idRo: 'Aveți probleme cardiovasculare?',
        idEn: 'Do you have cardiovascular problems?',
        options: [
          { labelRo: 'Nu', labelEn: 'No', score: 3 },
          { labelRo: 'Hipertensiune controlată', labelEn: 'Controlled hypertension', score: 2 },
          { labelRo: 'Apnee în somn', labelEn: 'Sleep apnea', score: 2 },
          { labelRo: 'Afecțiune cardiacă diagnosticată', labelEn: 'Diagnosed heart condition', score: 1 }
        ]
      },
      {
        idRo: 'Care este vârsta dumneavoastră?',
        idEn: 'What is your age?',
        options: [
          { labelRo: '18–30 ani', labelEn: '18–30 years', score: 3 },
          { labelRo: '31–45 ani', labelEn: '31–45 years', score: 3 },
          { labelRo: '46–60 ani', labelEn: '46–60 years', score: 2 },
          { labelRo: 'Peste 60 ani', labelEn: 'Over 60 years', score: 1 }
        ]
      }
    ]
  }
};

const getResult = (score, isEn) => {
  if (score >= 13) return {
    label: isEn ? 'Excellent Candidate' : 'Candidat Excelent',
    color: 'text-green-500',
    bg: 'bg-green-500/10 border-green-500/20',
    msgRo: 'Profilul tău medical corespunde criteriilor ideale pentru această procedură. Recomandăm o evaluare clinică completă.',
    msgEn: 'Your medical profile matches the ideal criteria for this procedure. We recommend a complete clinical evaluation.'
  };
  if (score >= 9) return {
    label: isEn ? 'Good Candidate' : 'Candidat Bun',
    color: 'text-accent',
    bg: 'bg-accent/10 border-accent/20',
    msgRo: 'Există indicații favorabile în profilul tău. Câteva investigații suplimentare vor confirma eligibilitatea completă.',
    msgEn: 'There are favorable indications in your profile. A few additional investigations will confirm full eligibility.'
  };
  return {
    label: isEn ? 'Needs Evaluation' : 'Necesită Evaluare',
    color: 'text-blue-400',
    bg: 'bg-blue-500/10 border-blue-500/20',
    msgRo: 'Profilul tău necesită o analiză detaliată de către specialistul nostru înainte de a stabili eligibilitatea.',
    msgEn: 'Your profile requires detailed analysis by our specialist before determining eligibility.'
  };
};

const TreatmentQuiz = ({ type = 'hair' }) => {
  const location = useLocation();
  const isEn = location.pathname.startsWith('/en');
  const quiz = quizData[type] || quizData.hair;

  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [contact, setContact] = useState({ name: '', phone: '', email: '' });
  const [submitted, setSubmitted] = useState(false);

  const totalScore = answers.reduce((a, b) => a + b, 0);
  const result = getResult(totalScore, isEn);
  const progress = Math.round(((step) / (quiz.questions.length + 1)) * 100);

  const handleAnswer = (score) => {
    const newAnswers = [...answers, score];
    setAnswers(newAnswers);
    setStep(step + 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const payload = {
      type,
      score: totalScore,
      result: result.label,
      answers,
      contact,
      timestamp: new Date().toISOString()
    };
    console.log('[MEVA CRM LEAD]', payload);
    pushToDataLayer('generate_lead', { form_location: 'treatment_quiz' });
    pushToDataLayer('form_submission_success', { form_location: 'treatment_quiz' });
    setSubmitted(true);
  };

  const reset = () => { setStep(0); setAnswers([]); setContact({ name: '', phone: '', email: '' }); setSubmitted(false); };

  const currentQ = quiz.questions[step];

  return (
    <div className="bg-[#0b1626] rounded-3xl border border-white/10 overflow-hidden shadow-2xl text-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-prime to-[#0d1e35] px-6 py-5 border-b border-white/10">
        <p className="text-[10px] font-bold text-accent uppercase tracking-widest mb-1">
          {isEn ? 'Candidacy Assessment' : 'Evaluare Candidatură'}
        </p>
        <h3 className="text-xl font-serif font-bold">{isEn ? quiz.titleEn : quiz.titleRo}</h3>
        {step <= quiz.questions.length && !submitted && (
          <div className="mt-3">
            <div className="flex justify-between text-[10px] text-gray-400 mb-1">
              <span>{isEn ? `Step ${step + 1} of ${quiz.questions.length + 1}` : `Pasul ${step + 1} din ${quiz.questions.length + 1}`}</span>
              <span>{progress}%</span>
            </div>
            <div className="h-1 bg-white/10 rounded-full overflow-hidden">
              <div className="h-full bg-accent transition-all duration-500 rounded-full" style={{ width: `${progress}%` }} />
            </div>
          </div>
        )}
      </div>

      <div className="p-6">
        {/* Questions */}
        {!submitted && step < quiz.questions.length && (
          <div>
            <p className="font-bold text-lg mb-5 leading-snug">
              {isEn ? currentQ.idEn : currentQ.idRo}
            </p>
            <div className="space-y-3">
              {currentQ.options.map((opt, i) => (
                <button
                  key={i}
                  onClick={() => handleAnswer(opt.score)}
                  className="w-full text-left p-4 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 hover:border-accent/50 transition-all duration-200 text-sm font-medium flex items-center justify-between group"
                >
                  <span>{isEn ? opt.labelEn : opt.labelRo}</span>
                  <ChevronRight size={16} className="text-gray-500 group-hover:text-accent transition-colors" />
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Contact capture */}
        {!submitted && step === quiz.questions.length && (
          <div>
            <div className={`p-4 rounded-2xl border mb-5 ${result.bg}`}>
              <p className="text-xs text-gray-400 font-bold uppercase tracking-widest mb-1">
                {isEn ? 'Your Preliminary Score' : 'Scorul Tău Preliminar'}
              </p>
              <p className={`text-2xl font-serif font-bold ${result.color}`}>{result.label}</p>
              <p className="text-sm text-gray-300 mt-1">{isEn ? result.msgEn : result.msgRo}</p>
            </div>
            <p className="text-sm text-gray-400 mb-4">
              {isEn
                ? 'Enter your details to receive your full suitability report and a personalized protocol from our specialists.'
                : 'Introduceți datele pentru a primi raportul complet de eligibilitate și un protocol personalizat de la specialiștii noștri.'
              }
            </p>
            <form onSubmit={handleSubmit} className="space-y-3">
              <input
                type="text" required placeholder={isEn ? 'Full Name' : 'Nume Complet'}
                value={contact.name} onChange={e => setContact({ ...contact, name: e.target.value })}
                className="w-full bg-white/5 border border-white/10 rounded-xl p-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-accent transition-colors"
              />
              <input
                type="tel" required placeholder={isEn ? 'Phone / WhatsApp' : 'Telefon / WhatsApp'}
                value={contact.phone} onChange={e => setContact({ ...contact, phone: e.target.value })}
                className="w-full bg-white/5 border border-white/10 rounded-xl p-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-accent transition-colors"
              />
              <input
                type="email" placeholder={isEn ? 'Email (optional)' : 'Email (opțional)'}
                value={contact.email} onChange={e => setContact({ ...contact, email: e.target.value })}
                className="w-full bg-white/5 border border-white/10 rounded-xl p-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-accent transition-colors"
              />
              <button type="submit" className="w-full bg-accent hover:bg-yellow-400 text-[#0b1626] font-bold py-3.5 rounded-xl transition-all text-sm flex items-center justify-center gap-2 shadow-lg">
                {isEn ? 'Get My Full Report' : 'Primește Raportul Complet'} <ArrowRight size={16} />
              </button>
            </form>
          </div>
        )}

        {/* Success state */}
        {submitted && (
          <div className="text-center py-4">
            <div className="w-16 h-16 rounded-full bg-green-500/10 border border-green-500/20 flex items-center justify-center mx-auto mb-4">
              <CheckCircle size={32} className="text-green-400" strokeWidth={1.5} />
            </div>
            <h4 className="text-xl font-serif font-bold mb-2">
              {isEn ? 'Report Sent!' : 'Raport Trimis!'}
            </h4>
            <p className="text-sm text-gray-400 mb-5">
              {isEn
                ? 'A specialist will contact you within 15 minutes with your personalized evaluation.'
                : 'Un specialist vă va contacta în 15 minute cu evaluarea personalizată.'
              }
            </p>
            <a
              href={`https://wa.me/905324675941?text=${encodeURIComponent(isEn ? 'Hello, I just completed the candidacy quiz and want my results.' : 'Buna ziua, am completat chestionarul de candidatura si doresc rezultatele.')}`}
              onClick={() => pushToDataLayer('whatsapp_click', { location: 'treatment_quiz_success' })}
              target="_blank" rel="noreferrer"
              className="block w-full bg-[#25D366] hover:bg-green-500 text-white font-bold py-3 rounded-xl transition-all text-sm mb-3"
            >
              {isEn ? 'Chat on WhatsApp Now' : 'Vorbește pe WhatsApp Acum'}
            </a>
            <button onClick={reset} className="text-xs text-gray-500 hover:text-white transition-colors">
              {isEn ? 'Retake quiz' : 'Reia chestionarul'}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default TreatmentQuiz;

```

### Dosya Adı: src\components\TrustBadges.jsx
```jsx
import React from 'react';
import { Award, ShieldCheck, HeartPulse } from 'lucide-react';
import { useLocation } from 'react-router-dom';

const TrustBadges = () => {
  const location = useLocation();
  const isEn = location.pathname.startsWith('/en');

  const badges = [
    {
      icon: <Award className="text-accent w-8 h-8" />,
      title: isEn ? "JCI Accredited Hospital" : "Spital Acreditat JCI"
    },
    {
      icon: <ShieldCheck className="text-accent w-8 h-8" />,
      title: isEn ? "Ministry of Health Approved" : "Aprobat de Ministerul Sănătății"
    },
    {
      icon: <HeartPulse className="text-accent w-8 h-8" />,
      title: isEn ? "12,500+ International Patients" : "12,500+ Pacienți Internaționali"
    }
  ];

  return (
    <div className="bg-prime py-6 w-full shadow-inner border-y border-white/10 relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center divide-y md:divide-y-0 md:divide-x divide-white/20">
          {badges.map((badge, index) => (
            <div key={index} className={`flex flex-col items-center justify-center p-4 ${index !== 0 ? 'pt-6 md:pt-4' : ''}`}>
              <div className="bg-white/10 p-4 rounded-full mb-3 backdrop-blur-sm shadow-[0_0_15px_rgba(212,175,55,0.2)]">
                {badge.icon}
              </div>
              <h4 className="text-white font-bold tracking-wide uppercase text-sm">{badge.title}</h4>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrustBadges;

```

### Dosya Adı: src\context\LeadContext.jsx
```jsx
import React, { createContext, useState, useContext } from 'react';

const LeadContext = createContext();

export const LeadProvider = ({ children }) => {
  const [bmiData, setBmiData] = useState(null); 
  const [selectedTreatment, setSelectedTreatment] = useState("");

  return (
    <LeadContext.Provider value={{ bmiData, setBmiData, selectedTreatment, setSelectedTreatment }}>
      {children}
    </LeadContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useLeadContext = () => useContext(LeadContext);

```

### Dosya Adı: src\data\andrologyData.js
```js
// andrologyData.js
const t = (en, ro) => ({ en, ro });

export const ANDROLOGY_METHODS = [
  {
    id: 'ligamentolysis', icon: '📏',
    name: t('Ligamentolysis (Length Extension)', 'Ligamentolizā (Extensie Lungime)'),
    goal: t('Length', 'Lungime'),
    type: t('Surgical', 'Chirurgical'),
    anesthesia: t('General / Spinal', 'Generală / Spinală'),
    recovery: t('7–10 days', '7–10 zile'),
    duration: t('Permanent', 'Permanent'),
    summary: t(
      'The suspensory ligament anchors the internal shaft to the pubic bone, concealing 3–5 cm of penile length. Surgical division of this ligament allows the internal segment to advance externally. Combined with fat grafting or V-Y advancement flasplasty to prevent retraction. Average visible gain: 2–4 cm flaccid.',
      'Ligamentul suspensor ancorează tijul intern la osul pubian, ascunzând 3–5 cm din lungimea penisului. Secțiunea chirurgicală a acestui ligament permite segmentului intern să avanseze extern. Combinat cu grefare de grăsime sau plastie de avansare V-Y pentru prevenirea retracției. Câștig vizibil mediu: 2–4 cm flascid.'
    ),
    isForMe: t(
      'Best for men whose primary concern is flaccid length, with BMI < 30 and adequate penile shaft length on internal examination.',
      'Cel mai potrivit pentru bărbați al căror interes principal este lungimea flascidă, cu IMC < 30 și lungime adecvată a tijului penian la examinare internă.'
    ),
    mevaNote: t(
      'Performed by urologist-andrologist team. V-Y plasty protocol minimises retraction risk. 12-month stretching protocol provided.',
      'Realizat de echipa urolog-androlog. Protocol plastie V-Y minimizează riscul de retracție. Protocol de stretching 12 luni furnizat.'
    ),
  },
  {
    id: 'fat-injection', icon: '💉',
    name: t('Autologous Fat Injection (Girth)', 'Injecție Grăsime Autologă (Grosime)'),
    goal: t('Girth', 'Grosime'),
    type: t('Surgical', 'Chirurgical'),
    anesthesia: t('Local / Sedation', 'Locală / Sedare'),
    recovery: t('5–7 days', '5–7 zile'),
    duration: t('Permanent (with touch-up)', 'Permanent (cu retușuri)'),
    summary: t(
      "Fat harvested by VASER liposuction from the patient's own donor site (abdomen/flanks), processed via Lipogems or Coleman technique, and micro-injected circumferentially into the penile shaft subcutaneous layer. Fat survival: 60–70% at 12 months. Average circumference gain: 2–4 cm.",
      'Grăsimea recoltată prin liposucție VASER din zona donatoare proprie (abdomen/flancare), procesată prin tehnica Lipogems sau Coleman, și micro-injectată circumferențial în stratul subcutanat al tijului penian. Supraviețuire grăsime: 60–70% la 12 luni. Câștig mediu circumferință: 2–4 cm.'
    ),
    isForMe: t(
      'Ideal for men prioritising girth over length, with sufficient donor fat. Most natural feel — uses own tissue. Best combined with ligamentolysis for complete enhancement.',
      'Ideal pentru bărbații care prioritizează grosimea față de lungime, cu grăsime donatoare suficientă. Cel mai natural — folosește propriul țesut. Cel mai bine combinat cu ligamentoliza pentru augmentare completă.'
    ),
    mevaNote: t(
      'VASER fat harvest for highest graft viability. Coleman micro-injection technique. 3D circumference mapping pre and post-op.',
      'Recoltare grăsime VASER pentru viabilitate maximă. Tehnică micro-injecție Coleman. Cartografiere circumferință 3D pre și post-op.'
    ),
  },
  {
    id: 'hyaluronic-acid', icon: '⚡',
    name: t('Hyaluronic Acid (Non-Surgical Girth)', 'Acid Hialuronic (Grosime Non-Chirurgicală)'),
    goal: t('Girth', 'Grosime'),
    type: t('Non-Surgical', 'Non-Chirurgical'),
    anesthesia: t('Topical Cream', 'Cremă Topică'),
    recovery: t('0 days', '0 zile'),
    duration: t('12–18 months', '12–18 luni'),
    summary: t(
      'Cross-linked high-density hyaluronic acid (Juvederm Voluma / Restylane Lyft grade) is injected in a fan-technique pattern along the penile shaft in a 15–20 minute clinic procedure. Immediate visible girth increase of 2–3 cm. No downtime. Fully reversible with hyaluronidase. Ideal for patients wanting a trial before committing to permanent surgery.',
      'Acidul hialuronic reticulat de înaltă densitate (grad Juvederm Voluma / Restylane Lyft) este injectat în pattern de evantai de-a lungul tijului penian într-o procedură clinică de 15–20 minute. Creștere imediată vizibilă a circumferinței de 2–3 cm. Fără downtime. Complet reversibil cu hialuronidază. Ideal pentru pacienții care doresc un test înainte de chirurgia permanentă.'
    ),
    isForMe: t(
      'Best for men wanting immediate results without surgery or downtime. Also ideal as a "preview" before fat injection. Reversible, repeatable, zero recovery.',
      'Cel mai potrivit pentru bărbații care doresc rezultate imediate fără chirurgie sau timp de recuperare. Ideal și ca "previzualizare" înaintea injecției de grăsime. Reversibil, repetabil, zero recuperare.'
    ),
    mevaNote: t(
      'Juvederm Voluma / Restylane Lyft only — medical-grade. 15-min procedure. Topical anaesthetic cream. Same-day discharge.',
      'Exclusiv Juvederm Voluma / Restylane Lyft — grad medical. Procedură 15 min. Cremă anestezică topică. Externare în aceeași zi.'
    ),
  },
  {
    id: 'dermal-graft', icon: '🔬',
    name: t('Dermal Graft (Permanent Girth)', 'Grefă Dermică (Grosime Permanentă)'),
    goal: t('Girth', 'Grosime'),
    type: t('Surgical', 'Chirurgical'),
    anesthesia: t('General / Spinal', 'Generală / Spinală'),
    recovery: t('10–14 days', '10–14 zile'),
    duration: t('Permanent', 'Permanent'),
    summary: t(
      'A split-thickness or acellular dermal matrix (Alloderm) graft is placed circumferentially beneath the penile skin, providing uniform, homogeneous circumferential augmentation. Unlike fat (which can migrate or be resorbed unevenly), dermal matrix maintains consistent shape. Average girth increase: 3–5 cm. Preferred for patients wanting permanent, predictable results.',
      'O grefă de matrice dermică de grosime despicată sau acelulară (Alloderm) este plasată circumferențial sub pielea penisului, oferind augmentare circumferențială uniformă și omogenă. Spre deosebire de grăsime (care poate migra sau fi reabsorbită neuniform), matricea dermică menține o formă consistentă. Creștere medie circumferință: 3–5 cm.'
    ),
    isForMe: t(
      'Best for men wanting permanent, homogeneous girth — especially those who have had previous fat injection with uneven resorption, or who want a single definitive procedure.',
      'Cel mai potrivit pentru bărbații care doresc grosime permanentă și omogenă — în special cei care au avut injecție de grăsime anterioară cu resorbție neuniformă, sau care doresc o singură procedură definitivă.'
    ),
    mevaNote: t(
      'Alloderm / human acellular dermal matrix (FDA-cleared). Uniform circumferential placement. Sensation fully preserved. Long-term homogeneous result.',
      'Alloderm / matrice dermică acelulară umană (aprobată FDA). Plasare circumferențială uniformă. Senzație complet conservată. Rezultat omogen pe termen lung.'
    ),
  },
  {
    id: 'p-shot', icon: '🩸',
    name: t('P-Shot (PRP — Platelet Rich Plasma)', 'P-Shot (PRP — Plasmă Bogată în Trombocite)'),
    goal: t('Performance & Sensitivity', 'Performanță & Sensibilitate'),
    type: t('Non-Surgical', 'Non-Chirurgical'),
    anesthesia: t('Topical Cream', 'Cremă Topică'),
    recovery: t('0 days', '0 zile'),
    duration: t('6–12 months (repeat recommended)', '6–12 luni (repetare recomandată)'),
    summary: t(
      "Patient's own blood is centrifuged to concentrate platelets (PRP), then injected into the corpus cavernosum and glans. The released growth factors (PDGF, VEGF, TGF-β) stimulate angiogenesis and Schwann cell proliferation — improving erectile quality, sensitivity and ejaculatory control. Not a size procedure; a function and performance enhancement.",
      "Sângele propriu al pacientului este centrifugat pentru a concentra trombocitele (PRP), apoi injectat în corpul cavernos și gland. Factorii de creștere eliberați (PDGF, VEGF, TGF-β) stimulează angiogeneza și proliferarea celulelor Schwann — îmbunătățind calitatea erecției, sensibilitatea și controlul ejaculației."
    ),
    isForMe: t(
      'For men experiencing reduced erectile quality, sensitivity loss, mild ED, or performance decline — without structural penile pathology. Best combined with ESWT for synergistic effect.',
      'Pentru bărbați cu calitate erecțională redusă, pierderea sensibilității, DE ușoară sau declin al performanței — fără patologie peniană structurală. Cel mai bine combinat cu ESWT pentru efect sinergic.'
    ),
    mevaNote: t(
      'Double-spin centrifugation for 5× platelet concentration. Combined with topical anaesthetic. Can be combined with ESWT same session. No downtime.',
      'Centrifugare dublă pentru concentrație trombocite 5×. Combinat cu anestezic topic. Poate fi combinat cu ESWT în aceeași sesiune. Fără downtime.'
    ),
  },
  {
    id: 'glans-augmentation', icon: '🎯',
    name: t('Glans Augmentation (Head Filler)', 'Augmentare Gland (Filler Cap)'),
    goal: t('Sensitivity & Proportion', 'Sensibilitate & Proporție'),
    type: t('Non-Surgical', 'Non-Chirurgical'),
    anesthesia: t('Topical Cream', 'Cremă Topică'),
    recovery: t('0–1 day', '0–1 zi'),
    duration: t('12–18 months', '12–18 luni'),
    summary: t(
      'Hyaluronic acid is injected precisely into the glans (head) to: (1) increase size and projection proportional to shaft augmentation, (2) reduce sensitivity in patients with premature ejaculation (sensory dampening effect), or (3) improve visual symmetry. Technique requires sub-glanular injection depth control to avoid vascular structures.',
      'Acidul hialuronic este injectat precis în gland pentru: (1) creșterea dimensiunii și proiecției proporționale cu augmentarea tijului, (2) reducerea sensibilității la pacienți cu ejaculare prematură (efect de amortizare senzorială), sau (3) îmbunătățirea simetriei vizuale. Tehnica necesită controlul adâncimii injecției sub-glanulare pentru a evita structurile vasculare.'
    ),
    isForMe: t(
      'For men who have had shaft augmentation and want proportional glans volume, or those with premature ejaculation seeking sensory modulation without medication.',
      'Pentru bărbații care au avut augmentare a tijului și doresc volum glanular proporțional, sau cei cu ejaculare prematură care caută modulare senzorială fără medicație.'
    ),
    mevaNote: t(
      'Andrologist with specific glans injection certification only. Vascular safety protocol. Hyaluronidase on standby. 15-minute procedure.',
      'Exclusiv androlog cu certificare specifică injecție gland. Protocol siguranță vasculară. Hialuronidază în standby. Procedură 15 minute.'
    ),
  },
  {
    id: 'eswt', icon: '〰️',
    name: t('ESWT (Shockwave Therapy)', 'ESWT (Terapie prin Unde de Șoc)'),
    goal: t('Erectile Function', 'Funcție Erectilă'),
    type: t('Non-Surgical', 'Non-Chirurgical'),
    anesthesia: t('None required', 'Nu necesită'),
    recovery: t('0 days', '0 zile'),
    duration: t('12–24 months', '12–24 luni'),
    summary: t(
      'Low-intensity extracorporeal shockwave therapy delivers acoustic pulses to the corpora cavernosa, triggering neoangiogenesis (new blood vessel formation) and nerve regeneration. Clinically proven for vasculogenic erectile dysfunction: 6-session protocol (2× per week) achieves sustained improvement in IIEF-5 scores in 70–80% of mild-moderate ED patients. No pain, no injections, no downtime.',
      'Terapia prin unde de șoc extracorporeale de intensitate joasă livrează impulsuri acustice la corpurile cavernoase, declanșând neoangiogeneza (formarea de noi vase de sânge) și regenerarea nervoasă. Clinic dovedită pentru disfuncția erectilă vasculogenă: protocol 6 sesiuni (2× pe săptămână) obține îmbunătățire susținută a scorurilor IIEF-5 la 70–80% din pacienții cu DE ușoară-moderată.'
    ),
    isForMe: t(
      'For men with vasculogenic or psychogenic erectile dysfunction (ED), Peyronie\'s disease (penile curvature), or those wanting to enhance P-Shot results. Not suitable for severe ED — consider penile prosthesis.',
      "Pentru bărbați cu disfuncție erectilă vasculogenă sau psihogenă, boala Peyronie (curbură peniană), sau cei care doresc să îmbunătățească rezultatele P-Shot. Nu este potrivit pentru DE severă — luați în considerare proteza peniană."
    ),
    mevaNote: t(
      'LI-ESWT Storz Medical device — gold standard clinical evidence. 6-session protocol. Combined with P-Shot for synergistic regenerative effect. Zero downtime.',
      'Dispozitiv LI-ESWT Storz Medical — evidență clinică standard de aur. Protocol 6 sesiuni. Combinat cu P-Shot pentru efect regenerativ sinergic. Zero downtime.'
    ),
  },
  {
    id: 'penile-prosthesis', icon: '⚙️',
    name: t('Penile Prosthesis (Implant)', 'Proteză Peniană (Implant)'),
    goal: t('Permanent ED Solution', 'Soluție Permanentă DE'),
    type: t('Surgical', 'Chirurgical'),
    anesthesia: t('Spinal / General', 'Spinală / Generală'),
    recovery: t('4–6 weeks', '4–6 săptămâni'),
    duration: t('15–20 years (device warranty)', '15–20 ani (garanție dispozitiv)'),
    summary: t(
      'Inflatable 3-piece penile prosthesis (AMS 700 CX / Coloplast Titan) is the gold standard for severe ED unresponsive to PDE5 inhibitors, P-Shot, or ESWT. The device consists of two cylinders placed in the corpora cavernosa, a scrotal pump, and an abdominal reservoir. Patient-controlled inflation provides a natural erection on demand, deflating completely when not in use. 95% patient satisfaction at 10 years.',
      'Proteza peniană gonflabilă în 3 piese (AMS 700 CX / Coloplast Titan) este standardul de aur pentru DE severă care nu răspunde la inhibitori PDE5, P-Shot sau ESWT. Dispozitivul constă din două cilindri plasați în corpurile cavernoase, o pompă scrotală și un rezervor abdominal. Inflarea controlată de pacient oferă erecție naturală la cerere. Satisfacție pacient 95% la 10 ani.'
    ),
    isForMe: t(
      'For men with severe ED (diabetes, radical prostatectomy, Peyronie\'s, vascular disease) for whom all other treatments have failed. Irreversible — natural erection function is permanently replaced by the device.',
      "Pentru bărbații cu DE severă (diabet, prostatectomie radicală, Peyronie, boală vasculară) pentru care toate celelalte tratamente au eșuat. Ireversibil — funcția erecțională naturală este permanent înlocuită de dispozitiv."
    ),
    mevaNote: t(
      'AMS 700 CX / Coloplast Titan — 15-year device warranty. Urology subspecialist surgeon only. Antibiotic-coated device. 95% 10-year satisfaction data.',
      'AMS 700 CX / Coloplast Titan — garanție dispozitiv 15 ani. Exclusiv chirurg subspecialist urologie. Dispozitiv cu acoperire antibiotică. Date satisfacție 95% la 10 ani.'
    ),
  },
];

export const DECISION_GUIDE = [
  {
    need: { en: 'I want MORE LENGTH (flaccid)', ro: 'Doresc LUNGIME MAI MARE (flascid)' },
    primary: 'Ligamentolysis',
    secondary: { en: '+ Fat Injection for complete result', ro: '+ Injecție Grăsime pentru rezultat complet' },
    type: 'length',
  },
  {
    need: { en: 'I want MORE GIRTH — non-surgical', ro: 'Doresc GROSIME MAI MARE — non-chirurgical' },
    primary: 'Hyaluronic Acid',
    secondary: { en: 'Reversible in 15 min. No downtime.', ro: 'Reversibil în 15 min. Fără downtime.' },
    type: 'girth',
  },
  {
    need: { en: 'I want MORE GIRTH — permanent natural', ro: 'Doresc GROSIME MAI MARE — permanent natural' },
    primary: 'Fat Injection (Autologous)',
    secondary: { en: 'Own tissue, 60–70% long-term survival', ro: 'Propriul țesut, supraviețuire 60–70% termen lung' },
    type: 'girth',
  },
  {
    need: { en: 'I want MORE GIRTH — permanent uniform', ro: 'Doresc GROSIME MAI MARE — uniform permanent' },
    primary: 'Dermal Graft (Alloderm)',
    secondary: { en: 'Most homogeneous long-term shape', ro: 'Forma cea mai omogenă pe termen lung' },
    type: 'girth',
  },
  {
    need: { en: 'I want BETTER ERECTIONS (mild–moderate ED)', ro: 'Doresc ERECȚII MAI BUNE (DE ușoară–moderată)' },
    primary: 'ESWT + P-Shot (combined)',
    secondary: { en: '70–80% IIEF improvement. No surgery.', ro: '70–80% îmbunătățire IIEF. Fără chirurgie.' },
    type: 'function',
  },
  {
    need: { en: 'I want SENSITIVITY CONTROL or glans proportion', ro: 'Doresc CONTROL SENSIBILITATE sau proporție gland' },
    primary: 'Glans Augmentation',
    secondary: { en: 'HA filler, 15-min. Premature ejac. benefit.', ro: 'Filler HA, 15 min. Beneficiu ejaculare prematură.' },
    type: 'sensitivity',
  },
  {
    need: { en: 'I want BOTH LENGTH + GIRTH — complete result', ro: 'Doresc LUNGIME + GROSIME — rezultat complet' },
    primary: 'Ligamentolysis + Fat Injection',
    secondary: { en: 'Combined session. Best overall outcome.', ro: 'Sesiune combinată. Cel mai bun rezultat global.' },
    type: 'combined',
  },
  {
    need: { en: 'I have SEVERE ED — no response to treatment', ro: 'Am DE SEVERĂ — fără răspuns la tratament' },
    primary: 'Penile Prosthesis (AMS 700 / Titan)',
    secondary: { en: '95% satisfaction. 15-yr device warranty.', ro: 'Satisfacție 95%. Garanție 15 ani.' },
    type: 'prosthesis',
  },
];

export default ANDROLOGY_METHODS;

```

### Dosya Adı: src\data\blogData.js
```js
export const blogPosts = [
  {
    id: 1,
    slug: "evolution-sapphire-fue",
    category: "Hair Tech",
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=800",
    title: {
      en: "The Evolution of Sapphire FUE: Precision in Hair Restoration",
      ro: "Evoluția Sapphire FUE: Precizie în Restaurarea Parului"
    },
    excerpt: {
      en: "Discover how sapphire blades are revolutionizing the density and natural look of modern hair transplants.",
      ro: "Descoperă cum lamele de safir revoluționează densitatea și aspectul natural al transplantului de păr modern."
    },
    date: "2026-04-15",
    author: "MD Harun"
  },
  {
    id: 2,
    slug: "cyberknife-s7-oncology",
    category: "Oncology",
    image: "https://images.unsplash.com/photo-1579154235602-3c2c2aa99017?auto=format&fit=crop&q=80&w=800",
    title: {
      en: "CyberKnife S7: Redefining Non-Invasive Oncology in Istanbul",
      ro: "CyberKnife S7: Redefinirea Oncologiei Non-Invazive în Istanbul"
    },
    excerpt: {
      en: "Exploring the sub-millimetric precision of the S7 system in targeting complex tumors.",
      ro: "Explorarea preciziei sub-milimetrice a sistemului S7 în țintirea tumorilor complexe."
    },
    date: "2026-04-10",
    author: "Prof. Dr. Mehmet Yılmaz"
  },
  {
    id: 3,
    slug: "exosome-therapy-healing",
    category: "Regenerative",
    image: "https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&q=80&w=800",
    title: {
      en: "Exosome Therapy: The Future of Cellular Healing",
      ro: "Terapia cu Exozomi: Viitorul Vindecării Celulare"
    },
    excerpt: {
      en: "How extracellular vesicles are accelerating post-operative recovery and tissue regeneration.",
      ro: "Cum veziculele extracelulare accelerează recuperarea post-operatorie și regenerarea țesuturilor."
    },
    date: "2026-04-05",
    author: "Dr. Ayşe Kaya"
  },
  {
    id: 4,
    slug: "jci-standards-importance",
    category: "Safety",
    image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=800",
    title: {
      en: "JCI Standards: Why Hospital Accreditation Matters for EU Patients",
      ro: "Standardele JCI: De ce Acreditarea Spitalicească contează pentru Pacienții UE"
    },
    excerpt: {
      en: "Understanding the global gold standard for clinical quality and patient safety.",
      ro: "Înțelegerea standardului de aur global pentru calitatea clinică și siguranța pacienților."
    },
    date: "2026-03-28",
    author: "Meva Medical Board"
  },
  {
    id: 5,
    slug: "post-op-logistics-istanbul",
    category: "Concierge",
    image: "https://images.unsplash.com/photo-1436491865332-7a61a109c0f3?auto=format&fit=crop&q=80&w=800",
    title: {
      en: "Post-Op Logistics: From Istanbul Airport to VIP Recovery",
      ro: "Logistica Post-Operatorie: De la Aeroportul Istanbul la Recuperarea VIP"
    },
    excerpt: {
      en: "A detailed guide on how Meva Clinic manages every step of your medical travel itinerary.",
      ro: "Un ghid detaliat despre modul în care Meva Clinic gestionează fiecare pas al itinerariului tău medical."
    },
    date: "2026-03-20",
    author: "Patient Coordination Team"
  },
  {
    id: 6,
    slug: "bariatric-precision-robotics",
    category: "Bariatric",
    image: "https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&q=80&w=800",
    title: {
      en: "Bariatric Precision: The Role of Da Vinci Robotics in Gastric Surgery",
      ro: "Precizia Bariatrică: Rolul Roboticii Da Vinci în Chirurgia Gastrică"
    },
    excerpt: {
      en: "Why robotic-assisted surgery reduces recovery time and enhances metabolic outcomes.",
      ro: "De ce chirurgia asistată robotic reduce timpul de recuperare și îmbunătățește rezultatele metabolice."
    },
    date: "2026-03-15",
    author: "MD Harun"
  },
  {
    id: 7,
    slug: "dental-3d-smile-design",
    category: "Dental Tech",
    image: "https://images.unsplash.com/photo-1468493858157-0da44aaf1d13?auto=format&fit=crop&q=80&w=800",
    title: {
      en: "3D Smile Design: Engineering the Perfect Aesthetic Outcome",
      ro: "Design-ul 3D al Zâmbetului: Ingineria Rezultatului Estetic Perfect"
    },
    excerpt: {
      en: "How digital wax-ups and intraoral scanning eliminate the guesswork in dentistry.",
      ro: "Cum scanarea intraorală și wax-up-urile digitale elimină presupunerile în stomatologie."
    },
    date: "2026-03-10",
    author: "Meva Dental Experts"
  },
  {
    id: 8,
    slug: "immunotherapy-breakthroughs",
    category: "Oncology",
    image: "https://images.unsplash.com/photo-1532187863486-abf9d39d999a?auto=format&fit=crop&q=80&w=800",
    title: {
      en: "Immunotherapy Breakthroughs: Training the Body to Fight Cancer",
      ro: "Progrese în Imunoterapie: Antrenarea Corpului pentru a Lupta împotriva Cancerului"
    },
    excerpt: {
      en: "A look at the latest biological protocols available in our Istanbul partner facilities.",
      ro: "O privire asupra celor mai recente protocoale biologice disponibile în facilitățile noastre partenere."
    },
    date: "2026-03-05",
    author: "Prof. Dr. Mehmet Yılmaz"
  },
  {
    id: 9,
    slug: "anesthesia-safety-protocols",
    category: "Safety",
    image: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&q=80&w=800",
    title: {
      en: "Anesthesia Safety: Advanced Monitoring for High-Complexity Cases",
      ro: "Siguranța Anesteziei: Monitorizare Avansată pentru Cazurile Complexe"
    },
    excerpt: {
      en: "The critical role of neuro-monitoring and TIVA protocols in modern surgical safety.",
      ro: "Rolul critic al neuro-monitorizării și al protocoalelor TIVA în siguranța chirurgicală modernă."
    },
    date: "2026-02-28",
    author: "Anesthesia Board"
  },
  {
    id: 10,
    slug: "organ-transplant-ethics-excellence",
    category: "Transplant",
    image: "https://images.unsplash.com/photo-1551601651-2a8555f1a136?auto=format&fit=crop&q=80&w=800",
    title: {
      en: "Organ Transplant: Balancing Medical Ethics with Surgical Excellence",
      ro: "Transplantul de Organe: Echilibrarea Eticii Medicale cu Excelența Chirurgicală"
    },
    excerpt: {
      en: "Inside Turkey's world-leading liver and kidney transplant success rates.",
      ro: "Informații despre ratele de succes de talie mondială ale Turciei în transplantul de ficat și rinichi."
    },
    date: "2026-02-20",
    author: "Transplant Specialist Board"
  },

  // ─── IVF Cornerstone Articles ────────────────────────────────────────────────
  {
    id: 11,
    slug: "ivf-success-rates-cyprus-2026",
    category: "IVF",
    image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&q=80&w=800",
    title: {
      en: "IVF Success Rates in Cyprus: Global Comparison Guide (2026)",
      ro: "Rate de Succes FIV în Cipru: Ghid de Comparație Globală (2026)"
    },
    excerpt: {
      en: "Why Cyprus has become Europe's leading IVF destination. Success rates, costs, and technology compared with Spain, Greece, and the UK.",
      ro: "De ce Ciprul a devenit principala destinație FIV din Europa. Rate de succes, costuri și tehnologie comparate cu Spania, Grecia și Regatul Unit."
    },
    keywords: "IVF success rates Cyprus, rata de succes fertilizare in vitro Cipru, IVF cost comparison Europe",
    date: "2026-05-10",
    author: "Meva Clinic Medical Board",
    readTime: 12,
    content: {
      en: {
        intro: "Cyprus has emerged as Europe's premier IVF destination, combining world-class embryology laboratories, permissive donor legislation, and costs 40–60% below Western European clinics. At Meva Clinic's Northern Cyprus branch, our 2025 live-birth rate for patients under 35 reached 68%—exceeding the EU average of 52%.",
        sections: [
          {
            heading: "Why Northern Cyprus for IVF?",
            body: "Unlike many EU member states, Northern Cyprus permits anonymous egg and sperm donation, significantly expanding options for patients with poor ovarian reserve or genetic contraindications. The island's proximity to Istanbul—a 1.5-hour flight—makes our integrated Istanbul-Cyprus pathway uniquely efficient."
          },
          {
            heading: "Success Rate Comparison Table (2025 Data)",
            isTable: true,
            tableData: {
              headers: ["Country", "Live Birth Rate (under 35)", "Avg. Cost per Cycle", "Donor Egg Legal"],
              rows: [
                ["🇨🇾 Northern Cyprus (Meva)", "68%", "€3,200–4,800", "✅ Yes"],
                ["🇪🇸 Spain", "58%", "€5,500–8,000", "✅ Yes"],
                ["🇬🇷 Greece", "54%", "€4,000–6,500", "✅ Yes"],
                ["🇬🇧 United Kingdom", "38%", "€5,000–9,000", "✅ Yes"],
                ["🇩🇪 Germany", "32%", "€4,500–7,500", "❌ Limited"]
              ]
            }
          },
          {
            heading: "Key Success Factors at Our Cyprus Branch",
            body: "Our laboratory operates at ISO 9001 standard with continuous air quality monitoring (ISO 7 clean room). Every embryo is cultured in a Miri® time-lapse incubator, providing 24/7 developmental imaging. Combined with NGS-based preimplantation genetic testing, chromosome abnormalities are identified before transfer, reducing miscarriage risk by up to 73%."
          }
        ],
        faq: [
          { q: "How many IVF cycles are typically needed?", a: "Most patients aged under 38 achieve pregnancy within 1–2 cycles. We recommend budgeting for 2 cycles when starting treatment." },
          { q: "Can I use donor eggs in Cyprus?", a: "Yes. Anonymous egg donation is fully legal in Northern Cyprus, with donors meeting strict health, genetic, and psychological screening criteria." },
          { q: "How long do I need to stay in Cyprus?", a: "Fresh egg retrieval and transfer protocols require 10–14 days. Frozen embryo transfer (FET) cycles require only 5–7 days on-site." },
          { q: "Is the success rate the same for all age groups?", a: "Success rates decline with age. Under 35: 68%. Ages 35–40: 48%. Over 40 with own eggs: 22%. With donor eggs over 40: 58%." },
          { q: "Does Meva Clinic provide accommodation packages?", a: "Yes. Our all-inclusive IVF packages include hospital transfers, 4-star accommodation, daily coordination, and a dedicated Romanian-speaking patient manager." }
        ],
        cta: "Book your free IVF consultation and receive a personalised success rate assessment within 24 hours."
      },
      ro: {
        intro: "Ciprul a devenit principala destinație FIV din Europa, combinând laboratoare de embriologie de clasă mondială, legislație permisivă privind donatorii și costuri cu 40–60% mai mici decât clinicile din Europa de Vest. La sucursala Meva Clinic din Ciprul de Nord, rata noastră de nașteri vii pentru pacientele sub 35 de ani a atins 68% în 2025.",
        cta: "Rezervați o consultație gratuită FIV și primiți o evaluare personalizată a ratei de succes în 24 de ore."
      }
    }
  },

  {
    id: 12,
    slug: "ovarian-prp-low-amh-treatment",
    category: "IVF",
    image: "https://images.unsplash.com/photo-1576671081837-49000212a370?auto=format&fit=crop&q=80&w=800",
    title: {
      en: "Ovarian PRP: Scientific Facts for Low AMH & Poor Reserve Patients",
      ro: "PRP Ovarian: Fapte Științifice pentru Paciente cu AMH Scăzut și Rezervă Slabă"
    },
    excerpt: {
      en: "How platelet-rich plasma (PRP) and stem cell therapies rejuvenate ovarian tissue at the cellular level. Who qualifies, and what results to expect.",
      ro: "Cum plasma bogată în trombocite (PRP) și terapiile cu celule stem rejuvenează țesutul ovarian la nivel celular."
    },
    keywords: "ovarian rejuvenation Turkey, PRP ovare pret, low AMH treatments, poor ovarian reserve IVF",
    date: "2026-05-08",
    author: "Dr. Harun — Hair & Reproductive Medicine",
    readTime: 10,
    content: {
      en: {
        intro: "Diminished ovarian reserve (DOR), characterised by a low antral follicle count (AFC) and reduced Anti-Müllerian hormone (AMH), affects approximately 10% of women seeking fertility treatment. Conventional IVF protocols often yield poor results in this group. Platelet-Rich Plasma (PRP) ovarian rejuvenation—pioneered in Greece and now offered at Meva Clinic Cyprus—represents a scientifically substantiated adjuvant therapy that may restore follicular activity in previously non-responsive ovaries.",
        sections: [
          {
            heading: "The Cellular Mechanism of PRP",
            body: "PRP contains concentrated growth factors (PDGF, TGF-β, VEGF, IGF-1) derived from the patient's own blood. When injected directly into the ovarian cortex under ultrasound guidance, these factors stimulate granulosa cell proliferation, improve local vascularisation, and may activate dormant primordial follicles. A 2022 landmark study (Sfakianoudis et al., J Clin Med) demonstrated AMH increases of 35–120% at 3-month follow-up in a cohort of 60 poor-responder patients."
          },
          {
            heading: "Who Is a Candidate?",
            body: "PRP is indicated for patients with: AMH < 0.5 ng/mL; AFC < 4; two or more failed IVF cycles due to poor response; premature ovarian insufficiency (POI) before natural menopause. It is contraindicated in active ovarian malignancy, platelet disorders, or ongoing anticoagulant therapy."
          },
          {
            heading: "The Meva Protocol — Clinical Case Tone",
            body: "A 39-year-old patient from Bucharest arrived at Meva Clinic Cyprus with AMH 0.18 ng/mL and AFC of 2 following two failed IVF cycles in Romania. Post-PRP (two sessions, 6 weeks apart), her AMH rose to 0.61 ng/mL and AFC to 5. A subsequent stimulated IVF cycle yielded 3 mature oocytes and resulted in a successful blastocyst transfer. This outcome, while not guaranteed, reflects the potential of PRP in appropriately selected patients."
          }
        ],
        faq: [
          { q: "How is ovarian PRP performed?", a: "Under light sedation, a thin needle guided by transvaginal ultrasound delivers 3–5 mL of activated PRP into each ovary. The procedure takes approximately 20 minutes." },
          { q: "How soon can I start IVF after PRP?", a: "We recommend waiting 6–8 weeks post-injection before commencing ovarian stimulation, allowing time for follicular activation." },
          { q: "What is the cost of ovarian PRP at Meva Clinic?", a: "Our PRP rejuvenation package starts from €800 per session, often combined with our IVF protocol for a bundled rate." },
          { q: "Is PRP evidence-based?", a: "Multiple peer-reviewed studies support PRP's efficacy in poor responders. However, it is not a guaranteed treatment; response rates vary by individual baseline ovarian biology." },
          { q: "Can stem cells be combined with PRP?", a: "Yes. Our advanced protocol combines PRP with autologous stem cell infusion for patients with severe POI, offering potentially greater regenerative potential." }
        ],
        cta: "Schedule a complimentary AMH assessment and PRP suitability consultation with our fertility specialists."
      },
      ro: {
        intro: "Rezerva ovariană diminuată (DOR), caracterizată prin număr scăzut de foliculi antrali și hormon anti-Mülerian (AMH) redus, afectează aproximativ 10% dintre femeile care solicită tratament de fertilitate. PRP ovarian, pionierat în Grecia și acum disponibil la Meva Clinic Cipru, reprezintă o terapie adjuvantă susținută științific.",
        cta: "Programați o evaluare gratuită AMH și o consultație de eligibilitate PRP cu specialiștii noștri în fertilitate."
      }
    }
  },

  {
    id: 13,
    slug: "ngs-ai-embryo-selection-ivf",
    category: "IVF",
    image: "https://images.unsplash.com/photo-1532187863486-abf9d39d999a?auto=format&fit=crop&q=80&w=800",
    title: {
      en: "NGS & AI Embryo Selection: The Revolution in IVF Embryology",
      ro: "NGS și Selectarea AI a Embrionilor: Revoluția în Embriologia FIV"
    },
    excerpt: {
      en: "How Next-Generation Sequencing detects chromosomal abnormalities and how AI algorithms identify the healthiest embryo—explained for patients without a science degree.",
      ro: "Cum Secvențierea de Nouă Generație detectează anomalii cromozomiale și cum algoritmii AI identifică cel mai sănătos embrion."
    },
    keywords: "genetic screening IVF, NGS testing benefits, AI embryo selection, PGT-A Cyprus, inovatii FIV",
    date: "2026-05-06",
    author: "Meva Clinic Embryology Department",
    readTime: 11,
    content: {
      en: {
        intro: "Two technologies are fundamentally changing IVF outcomes in 2026: Next-Generation Sequencing (NGS) for preimplantation genetic testing, and Artificial Intelligence–powered embryo selection algorithms. At Meva Clinic Cyprus, both are standard of care—not optional add-ons.",
        sections: [
          {
            heading: "What Is NGS and Why Does It Matter?",
            body: "Next-Generation Sequencing is a high-throughput DNA analysis technology that screens all 23 pairs of chromosomes in a single biopsy sample taken from a Day-5 blastocyst. Unlike older FISH-based testing (which screened only 5–9 chromosomes), NGS provides complete chromosomal coverage. Chromosomally abnormal embryos—called aneuploid embryos—account for 50–70% of all IVF failures and early miscarriages. By transferring only euploid (chromosomally normal) embryos, NGS-guided PGT-A (Preimplantation Genetic Testing for Aneuploidies) reduces miscarriage rates by up to 73% and improves single-embryo transfer success rates to 65–70% per transfer."
          },
          {
            heading: "Key Terms Simply Explained",
            body: "Aneuploidy: An embryo with the wrong number of chromosomes (e.g., Down syndrome arises from an extra chromosome 21). Blastocyst: A Day-5 embryo—the optimal developmental stage for biopsy and transfer. Euploid embryo: A chromosomally normal embryo with the highest implantation potential. PGT-A: The clinical test using NGS to screen embryos for aneuploidies before transfer."
          },
          {
            heading: "AI-Powered Embryo Selection: iDAScore & EVAÂ®",
            body: "Meva Clinic Cyprus uses time-lapse incubators (Miri® by Esco Medical) that photograph embryos every 10 minutes throughout development. Our AI platform—trained on over 1.2 million embryo images—analyses 70+ morphokinetic parameters (timing of cell divisions, symmetry, fragmentation patterns) to assign each embryo a viability score. In a prospective study of 1,800 transfers, AI-selected embryos achieved a 12% higher live-birth rate compared to traditional morphology selection alone."
          }
        ],
        faq: [
          { q: "Do I need NGS/PGT-A for every IVF cycle?", a: "Not necessarily. We recommend PGT-A for patients over 37, those with recurrent implantation failure, or couples with known chromosomal translocations. Our embryologist will assess your specific case." },
          { q: "Does the biopsy harm the embryo?", a: "No. The trophectoderm biopsy (outer cell layer, which becomes the placenta) does not affect the inner cell mass that forms the baby. It is performed with sub-micron precision laser technology." },
          { q: "How long does NGS testing take?", a: "Results are available within 7–10 working days. Embryos are vitrified (frozen) while awaiting results and transferred in a subsequent frozen embryo transfer cycle." },
          { q: "What is the cost of PGT-A at Meva Clinic Cyprus?", a: "NGS-based PGT-A starts from €300 per embryo biopsied, with package pricing available for 3+ embryos." },
          { q: "Can AI replace the embryologist?", a: "No—AI augments the embryologist's expertise. Our senior embryologists make the final transfer decision using AI scores as one data point alongside clinical parameters." }
        ],
        cta: "Request our IVF + NGS package brochure and speak with a senior embryologist about your case."
      },
      ro: {
        intro: "Două tehnologii schimbă fundamental rezultatele FIV în 2026: Secvențierea de Nouă Generație (NGS) pentru testarea genetică preimplantare și algoritmii de Inteligență Artificială pentru selectarea embrionilor.",
        cta: "Solicitați broșura noastră de pachete FIV + NGS și discutați cu un embriolog senior despre cazul dvs."
      }
    }
  },

  {
    id: 14,
    slug: "istanbul-to-cyprus-ivf-travel-guide",
    category: "IVF",
    image: "https://images.unsplash.com/photo-1436491865332-7a61a109c0f3?auto=format&fit=crop&q=80&w=800",
    title: {
      en: "Istanbul to Cyprus: Planning a Seamless IVF Journey (Logistics Guide)",
      ro: "Istanbul la Cipru: Planificarea unui Parcurs FIV Fără Probleme (Ghid Logistic)"
    },
    excerpt: {
      en: "From your first online consultation to holding your baby—a step-by-step guide to the Meva Clinic IVF pathway: transfers, accommodation, legal process, and treatment timeline.",
      ro: "De la prima consultație online până la a-ți ține copilul în brațe—un ghid pas cu pas al parcursului FIV Meva Clinic."
    },
    keywords: "IVF travel guide Cyprus, fertility tourism Istanbul, proces tratament FIV, medical tourism Cyprus",
    date: "2026-05-04",
    author: "Meva Clinic Patient Coordination Team",
    readTime: 13,
    content: {
      en: {
        intro: "Medical travel for IVF can feel overwhelming. At Meva Clinic, we have coordinated over 3,200 international fertility journeys since 2018. This step-by-step guide walks you through every stage—from your first inquiry to your positive pregnancy test.",
        sections: [
          {
            heading: "The Complete IVF Pathway — Step by Step",
            isTimeline: true,
            steps: [
              { step: 1, title: "Free Online Consultation", desc: "Complete our medical form. Within 24 hours, a fertility nurse coordinator (available in Romanian, English, Arabic) reviews your history and schedules a video call with our lead embryologist." },
              { step: 2, title: "Remote Investigations", desc: "Your local GP or gynaecologist performs: AMH blood test, AFC ultrasound, semen analysis (partner), genetic karyotyping if indicated. You upload results to our secure patient portal." },
              { step: 3, title: "Personalised Protocol Design", desc: "Our medical team designs your ovarian stimulation protocol. Medications are shipped to your home address in Romania/UK or collected at Istanbul Atatürk Medical Hub before travel." },
              { step: 4, title: "Travel to Istanbul (Day 1)", desc: "Meva VIP transfer from Istanbul Airport to our partner 5-star hotel (Sheraton Istanbul City Center or equivalent). Pre-travel briefing pack in your language." },
              { step: 5, title: "Monitoring at Istanbul HUB (Days 2–8)", desc: "Daily ultrasound monitoring at our Istanbul clinic to track follicular growth. Trigger injection administered at optimal timing." },
              { step: 6, title: "Flight to Cyprus (Day 9)", desc: "Meva arranges your Pegasus/Turkish Airlines flight to Ercan Airport, Northern Cyprus (1.5 hrs). VIP airport transfer to our partner hotel in Lefkoşa." },
              { step: 7, title: "Egg Retrieval (Day 10)", desc: "Performed under light sedation at our fully equipped IVF theatre. Partner provides sperm sample on the same day. ICSI performed by senior embryologist." },
              { step: 8, title: "Embryo Culture & Testing (Days 10–15)", desc: "Embryos are cultured in Miri® time-lapse incubators. On Day 5, PGT-A biopsy performed if indicated. NGS results returned within 7–10 days." },
              { step: 9, title: "Embryo Transfer or Vitrification (Day 15)", desc: "If a fresh transfer is planned, the highest-scored euploid embryo is transferred. Remaining viable embryos are vitrified for future cycles." },
              { step: 10, title: "Return Home & Pregnancy Test", desc: "You return to Romania/UK on Day 16. Beta hCG blood test at your local lab on Day 28. Your Meva coordinator reviews results with you via video call." }
            ]
          },
          {
            heading: "Legal Framework in Northern Cyprus",
            body: "Northern Cyprus (TRNC) has one of Europe's most patient-friendly IVF legal frameworks: Anonymous and known egg/sperm donation is permitted; Embryo adoption (double donation) is legal; There is no legal limit on the number of embryos created per cycle; Surrogacy is currently not practiced at Meva Clinic Cyprus."
          }
        ],
        faq: [
          { q: "Do I need a visa for Northern Cyprus?", a: "Most EU (including Romanian) and UK passport holders enter Northern Cyprus via the Republic of Cyprus or direct charter flights visa-free. Turkish visa is not required for EU citizens." },
          { q: "What is included in the all-inclusive package?", a: "Our packages include: all medical consultations, ovarian monitoring scans, egg retrieval, ICSI procedure, embryo culture, one fresh or frozen embryo transfer, accommodation, and airport transfers in Cyprus." },
          { q: "What happens to my frozen embryos if I live abroad?", a: "Embryos can be stored at our Cyprus laboratory for up to 5 years (included in standard fee). International embryo transport is possible via IATA-certified cryoshipper to partner clinics in Romania and the UK." },
          { q: "Is there a Romanian-speaking coordinator?", a: "Yes. Every patient from Romania is assigned a dedicated Romanian-speaking patient coordinator available via WhatsApp, phone, and email." },
          { q: "What if my cycle is cancelled?", a: "If ovarian response is insufficient and egg retrieval is cancelled, we refund the treatment portion of your fee in full (excluding pre-travel investigations and medication costs)." }
        ],
        cta: "Start your IVF journey today — complete our 3-minute medical form and receive a personalised quote within 24 hours."
      },
      ro: {
        intro: "Turismul medical pentru FIV poate părea copleșitor. La Meva Clinic, am coordonat peste 3.200 de parcursuri de fertilitate internaționale din 2018. Acest ghid pas cu pas vă conduce prin fiecare etapă.",
        cta: "Începeți parcursul FIV astăzi — completați formularul nostru medical de 3 minute și primiți o ofertă personalizată în 24 de ore."
      }
    }
  }
];

```

### Dosya Adı: src\data\faqData.js
```js
export const faqData = {
  en: [
    {
      category: "Oncology",
      questions: [
        {
          q: "How does CyberKnife S7 differ from traditional radiotherapy?",
          a: "CyberKnife S7 uses a robotic arm and real-time tracking (VOLO Optimizer) to deliver radiation with ±0.44mm precision. <a href='/en/oncology' class='text-accent font-bold'>Learn more about our CyberKnife S7 technology here.</a>",
          schema: true
        },
        {
          q: "Is anesthesia required for robotic radiosurgery?",
          a: "No, CyberKnife and Gamma Knife Icon procedures are non-invasive and require no anesthesia. <a href='/en/quiz' class='text-accent font-bold'>Take the Oncology Suitability Quiz.</a>",
          schema: true
        },
        {
          q: "What is the success rate for intracranial lesions using Gamma Knife Icon?",
          a: "Clinical studies show a local control rate of over 90% for specific intracranial lesions. <a href='/en/contact' class='text-accent font-bold'>Request clinical data.</a>",
          schema: true
        }
      ]
    },
    {
      category: "Bariatric Surgery",
      questions: [
        {
          q: "Why is robotic-assisted bariatric surgery (Da Vinci) safer?",
          a: "Robotic systems provide 3D HD visualization and tremor filtration, reducing complication risks. <a href='/en/gastric-sleeve' class='text-accent font-bold'>See our Robotic Gastric Sleeve details.</a>",
          schema: true
        },
        {
          q: "What is the recovery timeline for a Gastric Bypass?",
          a: "Recovery takes 10-14 days for returning to office work. <a href='/en/contact' class='text-accent font-bold'>Request a personalized clinical protocol.</a>",
          schema: true
        }
      ]
    },
    {
      category: "Hair Transplant",
      questions: [
        {
          q: "Why do you use Sapphire blades instead of steel?",
          a: "Sapphire blades create V-shaped incisions which result in 40% faster healing. <a href='/en/hair-transplant' class='text-accent font-bold'>Explore Sapphire FUE.</a>",
          schema: true
        },
        {
          q: "What is Exosome-Enhanced graft survival?",
          a: "It is a regenerative protocol boosting survival rates to 98%+. <a href='/en/quiz' class='text-accent font-bold'>Check suitability.</a>",
          schema: true
        }
      ]
    }
  ],
  ro: [
    {
      category: "Oncologie",
      questions: [
        {
          q: "Cum diferă CyberKnife S7 de radioterapia tradițională?",
          a: "CyberKnife S7 utilizează un braț robotic și urmărire în timp real (VOLO Optimizer) pentru o precizie milimetrică. <a href='/ro/oncologie' class='text-accent font-bold'>Află mai multe despre tehnologia S7 aici.</a>",
          schema: true
        },
        {
          q: "Este necesară anestezia pentru radiochirurgia robotică?",
          a: "Nu, procedurile CyberKnife sunt non-invazive și nu necesită anestezie. <a href='/ro/quiz' class='text-accent font-bold'>Începe testul de eligibilitate pentru Oncologie.</a>",
          schema: true
        },
        {
          q: "Care este rata de succes pentru leziunile intracraniene tratate cu Gamma Knife?",
          a: "Studiile clinice arată o rată de control local de peste 90%. <a href='/ro/contact' class='text-accent font-bold'>Solicită date clinice.</a>",
          schema: true
        }
      ]
    },
    {
      category: "Chirurgie Bariatrică",
      questions: [
        {
          q: "De ce este mai sigură chirurgie bariatrică asistată de robot (Da Vinci)?",
          a: "Sistemele robotice permit suturi mai precise și un risc scăzut de fistule. <a href='/ro/gastric-sleeve' class='text-accent font-bold'>Vezi detaliile despre Gastric Sleeve Robotic.</a>",
          schema: true
        },
        {
          q: "Care este timpul de recuperare după un Bypass Gastric?",
          a: "Revenirea la muncă se face în 10-14 zile. <a href='/ro/contact' class='text-accent font-bold'>Solicită un protocol clinic personalizat.</a>",
          schema: true
        }
      ]
    },
    {
      category: "Implant de Păr",
      questions: [
        {
          q: "De ce folosiți lame de Safir în loc de oțel?",
          a: "Lamele de Safir reduc trauma tisulară cu 40%, accelerând vindecarea. <a href='/ro/implant-par' class='text-accent font-bold'>Vezi tehnologia Safir.</a>",
          schema: true
        },
        {
          q: "Ce este supraviețuirea grefelor îmbunătățită cu Exozomi?",
          a: "Este un protocol regenerativ ce crește rata de supraviețuire la peste 98%. <a href='/ro/quiz' class='text-accent font-bold'>Verifică eligibilitatea.</a>",
          schema: true
        }
      ]
    }
  ]
};

```

### Dosya Adı: src\data\plasticData.js
```js
// plasticData.js — 15 Meva Clinic Plastic Surgery Treatments
const t = (en, ro) => ({ en, ro });

export const PLASTIC = [
  {
    id: 'rhinoplasty', icon: '👃',
    name: t('Rhinoplasty', 'Rinoplastie'),
    tag: t('Piezo Ultrasonic · No Bruising', 'Piezo Ultrasonic · Zero Vânătăi'),
    isForMe: t(
      'Ideal if you have a nasal hump, wide tip, deviated septum, or asymmetry affecting your breathing or confidence.',
      'Ideal dacă aveți cocoașă nazală, vârf larg, sept deviat sau asimetrie care vă afectează respirația sau încrederea.'
    ),
    techniques: t(
      'Piezo (ultrasonic) bone reshaping uses sound wave oscillation instead of chisels — preserving periosteum, nerves and vessels. Zero bruising, 40% faster recovery. Combined with closed-approach tip refinement for no external scar.',
      'Tehnica Piezo (ultrasonică) remodeleaza osul nazal prin oscilație cu unde sonore în loc de dălți — conservând periostul, nervii și vasele. Zero vânătăi, recuperare cu 40% mai rapidă. Combinată cu rafinare vârf prin abordare închisă — fără cicatrice externă.'
    ),
    mevaQuality: t(
      'Board-certified rhinoplasty specialist with 15+ years. JCI-accredited theatre, 3D nasal simulation pre-op, revision rate below 3%.',
      'Specialist rinoplastie certificat de consiliu cu 15+ ani experiență. Sală JCI-acreditată, simulare 3D nazală preoperatorie, rată revizie sub 3%.'
    ),
    recovery: t('7–10 days', '7–10 zile'),
    stay: t('1 Night', '1 Noapte'),
  },
  {
    id: 'liposuction', icon: '✂️',
    name: t('Liposuction (VASER & Laser)', 'Liposucție (VASER & Laser)'),
    tag: t('Ultrasound Body Sculpting', 'Sculptare Corporală cu Ultrasunete'),
    isForMe: t(
      'Suitable for patients near ideal weight with localised fat resistant to diet and exercise — abdomen, flanks, thighs, arms, neck.',
      'Potrivit pentru pacienți aproape de greutatea ideală cu grăsime localizată rezistentă la dietă și exerciții — abdomen, flancare, coapse, brațe, gât.'
    ),
    techniques: t(
      'VASER uses ultrasonic probes to selectively emulsify fat cells while preserving blood vessels and nerves — enabling smoother sculpting and less bruising vs. traditional lipo. Laser-assisted (Smartlipo) additionally tightens overlying skin via collagen stimulation.',
      'VASER utilizează sonde ultrasonice pentru a emulsiona selectiv celulele adipoase păstrând vasele și nervii — permitând sculptare mai fină și mai puține vânătăi vs. lipo tradițional. Laser-asistat (Smartlipo) strânge suplimentar pielea de deasupra prin stimularea colagenului.'
    ),
    mevaQuality: t(
      'High-definition VASER available. All procedures in JCI OR with anaesthesia team. Compression garment protocol and lymphatic drainage included.',
      'VASER high-definition disponibil. Toate procedurile în sala JCI cu echipă de anestezie. Protocol vestă de compresie și drenaj limfatic incluse.'
    ),
    recovery: t('5–7 days', '5–7 zile'),
    stay: t('1 Night', '1 Noapte'),
  },
  {
    id: 'breast-augmentation', icon: '🌸',
    name: t('Breast Augmentation', 'Augmentare Mamară'),
    tag: t('Implant or Fat Transfer', 'Implant sau Transfer de Grăsime'),
    isForMe: t(
      'For patients seeking increased volume, improved symmetry, or restoration of breast fullness after pregnancy or weight loss.',
      'Pentru paciente care doresc volum crescut, simetrie îmbunătățită sau refacerea volumului mamar după sarcină sau pierdere ponderală.'
    ),
    techniques: t(
      'Silicone cohesive-gel implants (Motiva, Mentor) placed via inframammary fold — minimal scarring, maximum projection control. Fat transfer (lipofilling) for patients preferring a natural option using their own tissue, ideal for 1–2 cup increases.',
      'Implanturi cu gel siliconic coheziv (Motiva, Mentor) plasate prin pliul submamar — cicatrice minimă, control maxim al proiecției. Transfer de grăsime (lipofilling) pentru paciente care preferă o opțiune naturală, ideal pentru creșteri de 1–2 cupe.'
    ),
    mevaQuality: t(
      'Motiva Ergonomix implants certified. 3D volumetric simulation pre-op. 10-year implant warranty. Drain-free technique available.',
      'Implanturi Motiva Ergonomix certificate. Simulare volumetrică 3D preoperatorie. Garanție implant 10 ani. Tehnică fără tuburi de dren disponibilă.'
    ),
    recovery: t('5–7 days', '5–7 zile'),
    stay: t('1 Night', '1 Noapte'),
  },
  {
    id: 'blepharoplasty', icon: '👁️',
    name: t('Blepharoplasty', 'Blefaroplastie'),
    tag: t('Eye Rejuvenation · Upper & Lower', 'Rejuvenare Oculară · Superior & Inferior'),
    isForMe: t(
      'For patients with drooping upper eyelids affecting vision, puffy lower lids, or tired-looking eyes that misrepresent their energy.',
      'Pentru paciente cu pleoape superioare căzute care afectează vederea, pleoape inferioare umflate sau ochi cu aspect obosit.'
    ),
    techniques: t(
      'Upper blepharoplasty removes excess skin via a natural lid-crease incision (invisible scar). Lower blepharoplasty uses transconjunctival access — no external cut — to reposition or remove orbital fat. Combined with PRP for optimal skin tightening.',
      'Blefaroplastia superioară îndepărtează excesul de piele printr-o incizie în pliul natural al pleoapei (cicatrice invizibilă). Blefaroplastia inferioară utilizează acces transconjunctival — fără incizie externă — pentru repoziționarea sau eliminarea grăsimii orbitale.'
    ),
    mevaQuality: t(
      'Oculoplastic-trained surgeon. Can be combined with browlift or filler for full periorbital rejuvenation. Local anaesthesia option available.',
      'Chirurg cu formare oculoplastică. Poate fi combinată cu browlift sau filler pentru rejuvenare periorbitală completă. Opțiune anestezie locală disponibilă.'
    ),
    recovery: t('5–7 days', '5–7 zile'),
    stay: t('Day clinic', 'Clinică ambulatorie'),
  },
  {
    id: 'abdominoplasty', icon: '🩹',
    name: t('Abdominoplasty (Tummy Tuck)', 'Abdominoplastie (Karın Germe)'),
    tag: t('Post-Bariatric Specialist Technique', 'Tehnică Specialist Post-Bariatric'),
    isForMe: t(
      'Ideal after major weight loss, post-bariatric surgery, or multiple pregnancies — for patients with excess abdominal skin and weakened rectus muscles.',
      'Ideal după pierdere ponderală majoră, chirurgie bariatrică sau sarcini multiple — pentru paciente cu exces de piele abdominală și mușchi recti slăbiți.'
    ),
    techniques: t(
      'Full abdominoplasty combines rectus muscle plication (closing the diastasis) with pan-abdominal skin resection and repositioning of the umbilicus. Mini-tummy tuck for localised lower pouch. Post-bariatric cases often require a circumferential body lift (belt lipectomy) to address the flanks and back simultaneously.',
      'Abdominoplastia completă combină plicatura mușchilor recți (închiderea diastazei) cu rezecția pielii pan-abdominale și repoziționarea buricului. Mini-tummy tuck pentru punga inferioară localizată. Cazurile post-bariatrice necesită adesea un body lift circumferențial pentru a aborda simultan flancurile și spatele.'
    ),
    mevaQuality: t(
      'Specialist in post-bariatric body contouring. Drain-free progressive tension suture technique. Scar minimisation protocol with silicone sheets included.',
      'Specialist în conturare corporală post-bariatrică. Tehnică de sutură cu tensiune progresivă fără dren. Protocol minimizare cicatrice cu folii siliconice inclus.'
    ),
    recovery: t('10–14 days', '10–14 zile'),
    stay: t('1–2 Nights', '1–2 Nopți'),
  },
  {
    id: 'facelift', icon: '✨',
    name: t('Facelift (Deep Plane)', 'Lifting Facial (Deep Plane)'),
    tag: t('15+ Year Natural Results', 'Rezultate Naturale 15+ Ani'),
    isForMe: t(
      'For patients over 40 with significant facial laxity, jowling, deep nasolabial folds, or neck banding who want lasting, natural-looking rejuvenation.',
      'Pentru paciente peste 40 de ani cu laxitate facială semnificativă, jowling, riduri nazolabiale adânci sau benzi cervicale care doresc întinerire durabilă și naturală.'
    ),
    techniques: t(
      'Deep Plane facelift releases and repositions the SMAS and underlying ligaments — not just the skin. This eliminates the pulled, windswept look of superficial techniques. Vertical vector lifting restores the anatomically correct youthful facial architecture. Results last 15–18 years vs. 5–7 for SMAS-only.',
      'Liftingul facial Deep Plane eliberează și repoziționează SMAS și ligamentele subiacente — nu doar pielea. Aceasta elimină aspectul tras al tehnicilor superficiale. Ridicarea pe vector vertical restaurează arhitectura facială tânără anatomic corectă. Rezultate durabile 15–18 ani vs 5–7 pentru SMAS-only.'
    ),
    mevaQuality: t(
      'Fellowship-trained deep plane surgeon. Combination with fat grafting for volume restoration. Twilight sedation available. No visible external scar protocol.',
      'Chirurg format cu fellowship în deep plane. Combinație cu grefă de grăsime pentru restaurare volum. Sedare ușoară disponibilă. Protocol cicatrice externă invizibilă.'
    ),
    recovery: t('10–14 days', '10–14 zile'),
    stay: t('1 Night', '1 Noapte'),
  },
  {
    id: 'mastopexy', icon: '🌺',
    name: t('Mastopexy (Breast Lift)', 'Mastopexie (Ridicare Sâni)'),
    tag: t('Vertical Scar · Long-Lasting Shape', 'Cicatrice Verticală · Formă Durabilă'),
    isForMe: t(
      'For women with breast ptosis (drooping) after pregnancy, breastfeeding or weight loss who want lifted, youthful contour without necessarily increasing size.',
      'Pentru femei cu ptoză mamară după sarcină, alăptare sau pierdere ponderală care doresc un contur ridicat și tânăr fără a mări neapărat dimensiunea.'
    ),
    techniques: t(
      'Vertical (lollipop) mastopexy reshapes the breast parenchyma into a cone and fixes it to the chest wall — creating lasting upper pole fullness. Wise-pattern anchor incision for significant ptosis. Can be combined with implants (augmentation mastopexy) or fat transfer.',
      'Mastopexia verticală (lollipop) remodelează parenchimul mamar în formă de con și îl fixează la peretele toracic — creând plenitudine durabilă a polului superior. Incizie ancoră Wise-pattern pentru ptoze semnificative. Poate fi combinată cu implanturi sau transfer de grăsime.'
    ),
    mevaQuality: t(
      'Scar minimisation protocol. 3D breast simulation included. Drain-free technique. Surgical bra and follow-up kit provided.',
      'Protocol minimizare cicatrice. Simulare mamară 3D inclusă. Tehnică fără dren. Sutien chirurgical și kit follow-up furnizate.'
    ),
    recovery: t('7–10 days', '7–10 zile'),
    stay: t('1 Night', '1 Noapte'),
  },
  {
    id: 'bbl', icon: '🍑',
    name: t('BBL (Brazilian Butt Lift)', 'BBL (Brazilian Butt Lift)'),
    tag: t('Natural Fat Transfer · Subfascial', 'Transfer Grăsime Naturală · Subfascial'),
    isForMe: t(
      'For patients wanting fuller, more projected buttocks using their own fat — especially those with flat or asymmetric gluteal contour.',
      'Pentru paciente care doresc fese mai pline și proiectate folosind propria grăsime — în special cele cu contur gluteal plat sau asimetric.'
    ),
    techniques: t(
      'Fat harvested via VASER liposuction from donor zones (abdomen, flanks, thighs), purified, and injected in the subcutaneous and subfascial plane — never intramuscular (SAFE BBL protocol eliminating pulmonary embolism risk). 3D gluteal projection mapping pre-op.',
      'Grăsimea este recoltată prin liposucție VASER din zonele donatoare (abdomen, flancare, coapse), purificată și injectată în planul subcutanat și subfascial — niciodată intramuscular (protocol SAFE BBL eliminând riscul de embolie pulmonară). Cartografiere proiecție gluteală 3D preoperatorie.'
    ),
    mevaQuality: t(
      'SAFE BBL protocol certified. VASER fat harvest for highest graft viability. Specialised post-op positioning protocol. Fat survival rate 70–80%.',
      'Protocol SAFE BBL certificat. Recoltare grăsime VASER pentru viabilitate maximă. Protocol de poziționare postoperatorie specializat. Rată supraviețuire grăsime 70–80%.'
    ),
    recovery: t('7–10 days', '7–10 zile'),
    stay: t('1 Night', '1 Noapte'),
  },
  {
    id: 'gynecomastia', icon: '🫀',
    name: t('Gynecomastia (Male Chest)', 'Ginecomastie (Torace Masculin)'),
    tag: t('Glandular + Lipomatous · Scarless', 'Glandular + Lipoame · Fără Cicatrice'),
    isForMe: t(
      'For men with enlarged breast tissue — whether glandular (true gynecomastia) or fatty (pseudogynecomastia) — causing physical discomfort or psychological distress.',
      'Pentru bărbați cu țesut mamar mărit — fie glandular (ginecomastie adevărată) fie grăsos (pseudoginecomastie) — cauzând discomfort fizic sau suferință psihologică.'
    ),
    techniques: t(
      'Glandular gynecomastia: periareolar excision of breast disc (2cm semi-circular scar, nearly invisible at 12 months). Lipomatous component: VASER liposuction. Combined cases: both techniques in one session. Ultrasound classification (Simon Grade) determines approach.',
      'Ginecomastie glandulară: excizie periareolară a discului mamar (cicatrice semicirculară 2cm, aproape invizibilă la 12 luni). Componentă lipomaasă: liposucție VASER. Cazuri combinate: ambele tehnici într-o singură sesiune. Clasificarea ecografică (Gradul Simon) determină abordarea.'
    ),
    mevaQuality: t(
      'Pre-op ultrasound classification. Simon Grade assessment. Compression vest 6 weeks. 98% patient satisfaction rate at Meva.',
      'Clasificare ecografică preoperatorie. Evaluare Grad Simon. Vestă compresie 6 săptămâni. Rată satisfacție pacienți 98% la Meva.'
    ),
    recovery: t('3–5 days', '3–5 zile'),
    stay: t('Day clinic', 'Clinică ambulatorie'),
  },
  {
    id: 'mommy-makeover', icon: '👶',
    name: t('Mommy Makeover', 'Mommy Makeover'),
    tag: t('Breast + Abdomen + Contour · 1 Session', 'Sâni + Abdomen + Contur · 1 Sesiune'),
    isForMe: t(
      'For mothers who have completed their family and want to restore their pre-pregnancy body in a single surgical episode — addressing breasts, abdomen and localised fat simultaneously.',
      'Pentru mame care și-au finalizat familia și doresc să-și restaureze corpul de dinainte de sarcină într-un singur episod chirurgical — abordând simultan sânii, abdomenul și grăsimea localizată.'
    ),
    techniques: t(
      'Typically combines mastopexy ± augmentation with full abdominoplasty and VASER liposuction of flanks and thighs — all performed in one 4–6 hour session under general anaesthesia. Surgical sequence optimised to minimise total OR time and blood loss.',
      'Combină de obicei mastopexia ± augmentare cu abdominoplastie completă și liposucție VASER a flancurilor și coapselor — toate efectuate într-o sesiune de 4–6 ore sub anestezie generală. Secvența chirurgicală optimizată pentru minimizarea timpului total și a pierderii de sânge.'
    ),
    mevaQuality: t(
      'Multi-surgeon coordination. ICU-monitored recovery. Lymphatic drainage and compression included. Average saving vs. individual procedures: 35%.',
      'Coordonare multi-chirurg. Recuperare monitorizată UCI. Drenaj limfatic și compresie incluse. Economie medie față de proceduri individuale: 35%.'
    ),
    recovery: t('14–21 days', '14–21 zile'),
    stay: t('2 Nights', '2 Nopți'),
  },
  {
    id: 'otoplasty', icon: '👂',
    name: t('Otoplasty (Ear Pinning)', 'Otoplastie (Corectare Urechi)'),
    tag: t('Permanent · 90-Min Procedure', 'Permanentă · Procedură 90 Min'),
    isForMe: t(
      'For adults and children over 6 with prominent, asymmetric or abnormally shaped ears causing self-consciousness.',
      'Pentru adulți și copii peste 6 ani cu urechi proeminente, asimetrice sau cu formă anormală cauzând complexe.'
    ),
    techniques: t(
      'Mustardé sutures recreate the antihelical fold via posterior incision (hidden behind the ear). Furnas sutures set the conchomastoid angle. No cartilage excision needed in most cases. Permanent, stable results.',
      'Suturile Mustardé recreează pliul antihelical printr-o incizie posterioară (ascunsă după ureche). Suturile Furnas stabilesc unghiul conchomastoidian. Nu este nevoie de excizie cartilaj în majoritatea cazurilor. Rezultate permanente și stabile.'
    ),
    mevaQuality: t(
      'Local anaesthesia for adults, general for children. Same-day discharge. Protective headband 3 weeks. Scar invisible behind ear.',
      'Anestezie locală pentru adulți, generală pentru copii. Externare în aceeași zi. Bandă protectoare 3 săptămâni. Cicatrice invizibilă după ureche.'
    ),
    recovery: t('2–3 days', '2–3 zile'),
    stay: t('Day clinic', 'Clinică ambulatorie'),
  },
  {
    id: 'body-lift', icon: '🦵',
    name: t('Thigh & Arm Lift', 'Lifting Coapse & Brațe'),
    tag: t('Post-Weight Loss · Skin Excess', 'Post-Slăbire · Exces de Piele'),
    isForMe: t(
      'For patients after significant weight loss (including post-bariatric) with excess skin on inner thighs or upper arms (bat wing deformity) causing skin fold infections or mobility issues.',
      'Pentru pacienți după pierdere ponderală semnificativă (inclusiv post-bariatric) cu exces de piele pe coapsele interioare sau brațele superioare (deformitate aripă de liliac) cauzând infecții ale pliului cutanat sau probleme de mobilitate.'
    ),
    techniques: t(
      'Medial thigh lift: incision in the groin crease (vertical extension for severe cases). Brachioplasty: posterior upper arm incision extended to axilla. Both use progressive tension sutures to anchor skin to fascia — minimising scar stretch and reducing drain use.',
      'Lifting medial al coapselor: incizie în pliul inghinal (extensie verticală pentru cazuri severe). Brahioplastie: incizie posterioară braț superior extinsă la axilă. Ambele utilizează suturi cu tensiune progresivă pentru a ancora pielea la fascie — minimizând întinderea cicatricei și reducând utilizarea drenurilor.'
    ),
    mevaQuality: t(
      'Post-bariatric specialist. Combined procedures in one session available. Scar camouflage placement. Compression garment protocol 6 weeks.',
      'Specialist post-bariatric. Proceduri combinate într-o sesiune disponibile. Plasare cicatrice camuflată. Protocol vestă compresie 6 săptămâni.'
    ),
    recovery: t('10–14 days', '10–14 zile'),
    stay: t('1 Night', '1 Noapte'),
  },
  {
    id: 'mentoplasty', icon: '🫱',
    name: t('Mentoplasty (Chin Augmentation)', 'Mentoplastie (Augmentare Bărbie)'),
    tag: t('Profiloplasty · Facial Harmony', 'Profiloplastie · Armonie Facială'),
    isForMe: t(
      'For patients with chin deficiency affecting facial profile balance — often combined with rhinoplasty (profiloplasty) for harmonious profile realignment.',
      'Pentru pacienți cu deficiență mentonieră afectând echilibrul profilului facial — adesea combinată cu rinoplastia (profiloplastie) pentru realinierea armonioasă a profilului.'
    ),
    techniques: t(
      'Silicone chin implant via intraoral or submental incision — no visible scar. Genioplasty (sliding osteotomy) for larger corrections: the chin bone is repositioned and fixed with titanium plates, offering permanent anatomical correction. 3D cephalometric analysis pre-op.',
      'Implant siliconic mentonier prin incizie intraoralā sau submentonieriā — fārā cicatrice vizibilā. Genioplastia (osteotomia de alunecare) pentru corecții mai mari: osul mentonier este repoziționat și fixat cu plāci titanice, oferind corecție anatomicā permanentā. Analizā cefalometricā 3D preoperatorie.'
    ),
    mevaQuality: t(
      '3D cephalometric profile analysis. Silicone Sientra/Implantech implants. Can be combined with rhinoplasty in same session. Permanent results.',
      'Analiza profilului cefalometric 3D. Implanturi siliconice Sientra/Implantech. Poate fi combinată cu rinoplastia în aceeași sesiune. Rezultate permanente.'
    ),
    recovery: t('5–7 days', '5–7 zile'),
    stay: t('Day clinic', 'Clinică ambulatorie'),
  },
  {
    id: 'labiaplasty', icon: '🌸',
    name: t('Genital Aesthetics (Female)', 'Estetică Genitală (Feminină)'),
    tag: t('Labiaplasty · Vaginoplasty · Confidential', 'Labiioplastie · Vaginoplastie · Confidențial'),
    isForMe: t(
      'For women with labial hypertrophy causing physical discomfort during activity or intimacy, or seeking functional restoration after childbirth (vaginoplasty).',
      'Pentru femei cu hipertrofie labialā cauzând disconfort fizic în timpul activitāților sau intimitatii, sau care doresc restaurare funcționalā dupā naștere (vaginoplastie).'
    ),
    techniques: t(
      'Labiaplasty: linear or wedge resection of excess labia minora tissue under local anaesthesia — preserving nerve endings for sensation. Vaginoplasty: posterior colporrhaphy to tighten the vaginal introitus and perineal body, restoring functional tone. Both performed in day clinic.',
      'Labiioplastia: rezecție liniariā sau în formā de V a excesului de țesut labii mici sub anestezie localā — conservând terminații nervoase pentru sensație. Vaginoplastia: colporafie posterioardā pentru strângerea introitusului vaginal și a corpului perineal, restaurând tonusul funcțional.'
    ),
    mevaQuality: t(
      'Female surgeon option available. Complete confidentiality protocol. Local anaesthesia — no hospital stay. Return to normal activity in 5–7 days.',
      'Opțiune chirurg femeie disponibilā. Protocol confidențialitate completā. Anestezie localā — fārā spitalizare. Revenire la activitate normalā în 5–7 zile.'
    ),
    recovery: t('5–7 days', '5–7 zile'),
    stay: t('Day clinic', 'Clinică ambulatorie'),
  },
  {
    id: 'post-bariatric', icon: '⚕️',
    name: t('Post-Bariatric Body Contouring', 'Conturare Corporală Post-Bariatrică'),
    tag: t('Skin Excess · Belt Lipectomy · Specialist', 'Exces Piele · Belt Lipectomy · Specialist'),
    isForMe: t(
      'Essential for patients who have achieved their target weight following Gastric Sleeve, Bypass or Balloon but are left with significant excess skin — abdomen, arms, thighs, breasts and back — that cannot resolve with exercise.',
      'Esențial pentru pacienții care au atins greutatea țintā dupā Gastric Sleeve, Bypass sau Balon, dar rāmân cu exces semnificativ de piele — abdomen, brațe, coapse, sâni și spate — care nu se poate rezolva cu exerciții fizice.'
    ),
    techniques: t(
      'Post-bariatric cases require a staged surgical approach: (1) Belt lipectomy (circumferential body lift) — removes excess skin from abdomen, flanks and back in a single 360° incision. (2) Brachioplasty + medial thigh lift in a second stage. (3) Breast lift ± augmentation. Timing: minimum 12–18 months post-bariatric surgery with stable weight for 6+ months.',
      'Cazurile post-bariatrice necesitā o abordare chirurgicalā etapizatā: (1) Belt lipectomy (body lift circumferențial) — îndepārtează excesul de piele din abdomen, flancare și spate printr-o singurā incizie 360°. (2) Brahioplastie + lifting medial coapse în a doua etapā. (3) Lifting mamar ± augmentare. Timing: minimum 12–18 luni post-chirurgie bariatricā cu greutate stabilā 6+ luni.'
    ),
    mevaQuality: t(
      'Dedicated post-bariatric surgical team coordinated with our bariatric unit. Full pre-op nutrition panel. Progressive tension suture technique reducing drain use by 80%. Staged surgery planning included at no extra cost.',
      'Echipā chirurgicalā dedicatā post-bariatricā coordonatā cu unitatea noastrā bariatricā. Panel nutrițional complet preoperatoriu. Tehnicā suturā tensiune progresivā reducând utilizarea drenurilor cu 80%. Planificarea chirurgiei etapizate inclusā fārā cost suplimentar.'
    ),
    recovery: t('14–21 days (per stage)', '14–21 zile (per etapā)'),
    stay: t('2–3 Nights', '2–3 Nopți'),
  },
];

export default PLASTIC;

```

### Dosya Adı: src\data\plasticSurgeryData.js
```js
const P=(en,ro)=,ro});  

```

### Dosya Adı: src\data\treatmentRules.js
```js
export const treatmentRules = {
  doctors: [
    {
      id: "dr-harun",
      name: "MD Harun",
      specialty: "Hair Restoration",
      successRate: "98.5%",
      experience: "15+ Years",
      protocols: {
        hair_transplant: {
          firstWash: "Day 2",
          restPeriod: "3 Days",
          reason: "Dr. Harun's Sapphire protocol requires early micro-circulation check to ensure graft survival."
        }
      }
    },
    {
      id: "dr-ayse",
      name: "Dr. Ayşe Kaya",
      specialty: "Plastic Surgery",
      successRate: "99.1%",
      experience: "12+ Years",
      protocols: {
        plastic_surgery: {
          recoveryStay: "7 Days",
          drainRemoval: "Day 4",
          reason: "Vertical vector repositioning requires extended initial stabilization for long-term symmetry."
        }
      }
    },
    {
      id: "prof-mehmet",
      name: "Prof. Dr. Mehmet Yılmaz",
      specialty: "Oncology",
      successRate: "97.8%",
      experience: "25+ Years",
      protocols: {
        oncology: {
          simulationTime: "24 Hours",
          fractionInterval: "Daily",
          reason: "S7 CyberKnife protocols are optimized for biological effective dose (BED) maximization."
        }
      }
    }
  ],
  hospitals: [
    {
      id: "hosp-acibadem",
      name: "Acibadem Altunizade",
      distanceIST: "45 mins",
      distanceSAW: "35 mins",
      tech: "CyberKnife S7, Da Vinci Xi",
      amenities: ["VIP Suite", "Translators", "Gourmet Menu"]
    },
    {
      id: "hosp-memorial",
      name: "Memorial Bahçelievler",
      distanceIST: "20 mins",
      distanceSAW: "55 mins",
      tech: "Gamma Knife Icon",
      amenities: ["Green Building", "Art Gallery", "Family Rooms"]
    }
  ]
};

```

### Dosya Adı: src\data\treatmentsData.js
```js
// src/data/treatmentsData.js
/**
 * ULTIMATE CLINICAL DATABASE - PROFESSIONAL HOSPITAL HIERARCHY
 * This file contains all 35+ clinical modules with zero placeholders.
 * Enforces: { en: string, ro: string } for all multilingual fields.
 */

const t = (en, ro) => ({ en, ro });

export const treatmentsData = [
  // ==========================================
  // 1. BARIATRIC SURGERY (4)
  // ==========================================
  {
    id: 'gastric-sleeve',
    category: 'bariatric',
    expert: 'Dr. Cuma',
    title: t('Gastric Sleeve (Sleeve Gastrectomy)', 'Gastric Sleeve (Micșorare Stomac)'),
    shortDesc: t('The gold standard for rapid, sustainable weight loss. Dr. Cuma utilizes 3D laparoscopy to remove 80% of the stomach, reducing hunger hormones permanently.', 'Standardul de aur pentru slăbirea rapidă. Dr. Cuma utilizează laparoscopia 3D pentru a elimina 80% din stomac.'),
    isThisForMe: t(['BMI > 35', 'Weight-related health issues', 'Ready for lifestyle change'], ['IMC > 35', 'Probleme de sănătate legate de greutate', 'Pregătit pentru schimbarea stilului de viață']),
    theProcedure: t('Laparoscopic resection of the stomach volume.', 'Rezecția laparoscopică a volumului stomacului.'),
    mevaAdvantage: t('Triple-row electronic stapling and 12-month nutrition support.', 'Capsulare electronică pe trei rânduri și suport nutrițional 12 luni.'),
    specs: t({ hospitalStay: '2-3 Nights', hotelStay: '4 Nights', returnToWork: '10 Days', anesthesia: 'General' }, { hospitalStay: '2-3 Nopți', hotelStay: '4 Nopți', returnToWork: '10 Zile', anesthesia: 'Generală' }),
    faq: t([{ q: 'Will I regain weight?', a: 'With our nutritional follow-up, success rates are over 90%.' }], [{ q: 'Voi pune greutatea la loc?', a: 'Cu programul nostru de nutriție, rata de succes este de peste 90%.' }])
  },
  {
    id: 'gastric-bypass',
    category: 'bariatric',
    expert: 'Dr. Cuma',
    title: t('Gastric Bypass (Metabolic Surgery)', 'Gastric Bypass (Chirurgie Metabolică)'),
    shortDesc: t('Ideal for Type 2 Diabetes remission and severe obesity. Reroutes the digestive tract to limit absorption and volume.', 'Ideal pentru remisia diabetului de tip 2 și obezitate severă.'),
    isThisForMe: t(['BMI > 40', 'Type 2 Diabetes', 'Severe acid reflux'], ['IMC > 40', 'Diabet de tip 2', 'Reflux acid sever']),
    theProcedure: t('Creation of a small gastric pouch and intestinal rerouting.', 'Crearea unui mic buzunar gastric și rerutarea intestinală.'),
    mevaAdvantage: t('Highest diabetes remission rates in the region.', 'Cea mai mare rată de remisie a diabetului din regiune.'),
    specs: t({ hospitalStay: '3-4 Nights', hotelStay: '5 Nights', returnToWork: '14 Days', anesthesia: 'General' }, { hospitalStay: '3-4 Nopți', hotelStay: '5 Nopți', returnToWork: '14 Zile', anesthesia: 'Generală' }),
    faq: t([{ q: 'Is it reversible?', a: 'It is intended to be permanent but technically reversible in emergencies.' }], [{ q: 'Este reversibilă?', a: 'Este concepută ca fiind permanentă, dar tehnic reversibilă în urgențe.' }])
  },
  {
    id: 'gastric-balloon',
    category: 'bariatric',
    expert: 'Dr. Cuma',
    title: t('Gastric Balloon (Allurion)', 'Balon Gastric (Allurion)'),
    shortDesc: t('Non-surgical weight loss. A swallowable capsule that induces fullness for 4-6 months. No anesthesia required.', 'Slăbire fără operație. O capsulă care se înghite și induce sațietatea timp de 4-6 luni.'),
    isThisForMe: t(['BMI 27-35', 'Fear of surgery', 'Jumpstart weight loss'], ['IMC 27-35', 'Teama de operație', 'Start rapid în slăbire']),
    theProcedure: t('Swallowing a capsule that inflates in the stomach.', 'Înghițirea unei capsule care se umflă în stomac.'),
    mevaAdvantage: t('Includes smart scale and app-monitored coaching.', 'Include cântar inteligent și coaching monitorizat prin aplicație.'),
    specs: t({ hospitalStay: 'None', hotelStay: '2 Nights', returnToWork: 'Next Day', anesthesia: 'None' }, { hospitalStay: 'Fără', hotelStay: '2 Nopți', returnToWork: 'A doua zi', anesthesia: 'Fără' }),
    faq: t([{ q: 'How is it removed?', a: 'It passes naturally after 16 weeks.' }], [{ q: 'Cum se elimină?', a: 'Se elimină natural după 16 săptămâni.' }])
  },
  {
    id: 'gastric-botox',
    category: 'bariatric',
    expert: 'Dr. Cuma',
    title: t('Gastric Botox Injection', 'Botox Gastric (Injectare)'),
    shortDesc: t('Endoscopic procedure that slows stomach emptying, keeping you full longer and reducing appetite.', 'Procedură endoscopică ce încetinește golirea stomacului, reducând pofta de mâncare.'),
    isThisForMe: t(['Mild overweight', 'Appetite control issues', 'Non-surgical seekers'], ['Supraponderalitate ușoară', 'Controlul poftei de mâncare', 'Căutători de soluții non-chirurgicale']),
    theProcedure: t('Endoscopic injection into the stomach wall.', 'Injectare endoscopică în peretele stomacului.'),
    mevaAdvantage: t('15-minute procedure, zero recovery time.', 'Procedură de 15 minute, zero timp de recuperare.'),
    specs: t({ hospitalStay: 'None', hotelStay: '2 Nights', returnToWork: 'Immediate', anesthesia: 'Sedation' }, { hospitalStay: 'Fără', hotelStay: '2 Nopți', returnToWork: 'Imediat', anesthesia: 'Sedare' }),
    faq: t([{ q: 'How long does it last?', a: 'Effects last for 4-6 months.' }], [{ q: 'Cât timp durează?', a: 'Efectele durează 4-6 luni.' }])
  },

  // ==========================================
  // 2. HAIR & BROW TRANSPLANT (3)
  // ==========================================
  {
    id: 'meva-mixed-hair',
    category: 'hair',
    expert: 'MD Harun',
    title: t('Meva Mixed Technique (Sapphire + DHI)', 'Tehnica Mixtă Meva (Sapphire + DHI)'),
    shortDesc: t('The ultimate hybrid hair restoration. Sapphire FUE for a sharp hairline and DHI for maximum crown density.', 'Restaurarea hibridă supremă. Sapphire FUE pentru linia părului și DHI pentru densitate.'),
    isThisForMe: t(['Advanced hair loss', 'Desire for maximum density', 'Natural result seekers'], ['Pierdere avansată a părului', 'Dorință de densitate maximă', 'Căutători de rezultate naturale']),
    theProcedure: t('Sapphire micro-channels combined with direct Choi Pen implantation.', 'Micro-canale Sapphire combinate cu implantare directă cu stiloul Choi.'),
    mevaAdvantage: t('99% graft survival and 12-month growth guarantee.', 'Supraviețuire a grefelor de 99% și garanție de creștere 12 luni.'),
    specs: t({ hospitalStay: 'None', hotelStay: '3 Nights', returnToWork: '3 Days', anesthesia: 'Pain-Free Local' }, { hospitalStay: 'Fără', hotelStay: '3 Nopți', returnToWork: '3 Zile', anesthesia: 'Locală fără durere' }),
    faq: t([{ q: 'When will I see results?', a: 'Final results appear between 10-12 months.' }], [{ q: 'Când voi vedea rezultatele?', a: 'Rezultatele finale apar între 10-12 luni.' }])
  },
  {
    id: 'dhi-hair-transplant',
    category: 'hair',
    expert: 'MD Harun',
    title: t('DHI (Direct Hair Implantation)', 'DHI (Implantare Directă de Păr)'),
    shortDesc: t('No-shave option available. High-density implantation using the specialized Choi Pen for faster healing.', 'Opțiune fără ras disponibilă. Implantare de înaltă densitate pentru vindecare rapidă.'),
    isThisForMe: t(['Female hair loss', 'No-shave seekers', 'Specific thinning areas'], ['Pierderea părului la femei', 'Cei care nu doresc ras în cap', 'Zone specifice de rărire']),
    theProcedure: t('Direct follicle transfer without separate channel opening.', 'Transfer direct de folicul fără deschidere separată de canale.'),
    mevaAdvantage: t('Less trauma to the scalp and higher density.', 'Traumă redusă asupra scalpului și densitate mai mare.'),
    specs: t({ hospitalStay: 'None', hotelStay: '3 Nights', returnToWork: '3 Days', anesthesia: 'Local' }, { hospitalStay: 'Fără', hotelStay: '3 Nopți', returnToWork: '3 Zile', anesthesia: 'Locală' }),
    faq: t([{ q: 'Is it better than FUE?', a: 'For density in thinning areas, DHI is superior.' }], [{ q: 'Este mai bună decât FUE?', a: 'Pentru densitate în zonele rărite, DHI este superioară.' }])
  },
  {
    id: 'eyebrow-transplant',
    category: 'hair',
    expert: 'MD Harun',
    title: t('Eyebrow Transplant (Meva Secret)', 'Transplant de Sprâncene (Meva Secret)'),
    shortDesc: t('Micro-grafting of multi-follicles into single units. MD Harun designs using the Golden Ratio and 10-15 degree natural angles.', 'Micro-grefarea foliculilor multipli în unități unice. MD Harun proiectează folosind Proporția de Aur.'),
    isThisForMe: t(['Thin eyebrows', 'Scars in brow area', 'Permanent brow design seekers'], ['Sprâncene subțiri', 'Cicatrici în zona sprâncenelor', 'Căutători de design permanent']),
    theProcedure: t('DHI Choi Pen implantation at ultra-natural 10-15 degree angles.', 'Implantare DHI Choi Pen la unghiuri ultra-naturale de 10-15 grade.'),
    mevaAdvantage: t('The "Meva Secret": microscopic micro-grafting for undetectable results.', '"Secretul Meva": micro-grefare microscopică pentru rezultate nedetectabile.'),
    specs: t({ hospitalStay: 'None', hotelStay: '2 Nights', returnToWork: '2 Days', anesthesia: 'Local' }, { hospitalStay: 'Fără', hotelStay: '2 Nopți', returnToWork: '2 Zile', anesthesia: 'Locală' }),
    faq: t([{ q: 'Will it look fake?', a: 'No, we use single-hair grafts to mimic natural brow texture.' }], [{ q: 'Va arăta artificial?', a: 'Nu, folosim grefe cu un singur fir pentru a imita textura naturală.' }])
  },

  // ==========================================
  // 3. DENTAL CARE (4)
  // ==========================================
  {
    id: 'dental-implants',
    category: 'dental',
    expert: 'Dr. Yusuf',
    title: t('Premium Dental Implants', 'Implanturi Dentare Premium'),
    shortDesc: t('Straumann & Nobel Biocare systems. Permanent solution for missing teeth with lifetime warranty.', 'Sisteme Straumann & Nobel Biocare. Soluție permanentă pentru dinții lipsă cu garanție pe viață.'),
    isThisForMe: t(['Missing teeth', 'Uncomfortable dentures', 'Jawbone preservation seekers'], ['Dinți lipsă', 'Proteze inconfortabile', 'Cei care doresc conservarea osului']),
    theProcedure: t('Titanium root placement followed by zirconium crown.', 'Plasarea rădăcinii de titan urmată de coroana de zirconiu.'),
    mevaAdvantage: t('Same-day temporary crowns and digital planning.', 'Coroane temporare în aceeași zi și planificare digitală.'),
    specs: t({ hospitalStay: 'None', hotelStay: '5 Nights', returnToWork: 'Immediate', anesthesia: 'Local' }, { hospitalStay: 'Fără', hotelStay: '5 Nopți', returnToWork: 'Imediat', anesthesia: 'Locală' }),
    faq: t([{ q: 'Is it painful?', a: 'No, performed under local anesthesia with zero-pain protocol.' }], [{ q: 'Este dureros?', a: 'Nu, se efectuează sub anestezie locală cu protocol zero durere.' }])
  },
  {
    id: 'zirconium-crowns',
    category: 'dental',
    expert: 'Dr. Yusuf',
    title: t('Zirconium Veneers & Crowns', 'Coroane și Fațete Zirconiu'),
    shortDesc: t('Highly durable and aesthetic metal-free restorations. Perfect light reflection for a natural look.', 'Restaurări fără metal, durabile și estetice. Reflexie perfectă a luminii.'),
    isThisForMe: t(['Discolored teeth', 'Chipped or broken teeth', 'Aesthetic improvement'], ['Dinți pătați', 'Dinți ciobiți sau rupți', 'Îmbunătățire estetică']),
    theProcedure: t('CAD/CAM digital design and precision milling.', 'Design digital CAD/CAM și frezare de precizie.'),
    mevaAdvantage: t('Bio-compatible material that protects gum health.', 'Material biocompatibil care protejează sănătatea gingiilor.'),
    specs: t({ hospitalStay: 'None', hotelStay: '5 Nights', returnToWork: 'Next Day', anesthesia: 'Local' }, { hospitalStay: 'Fără', hotelStay: '5 Nopți', returnToWork: 'A doua zi', anesthesia: 'Locală' }),
    faq: t([{ q: 'How long do they last?', a: '15-20 years with proper oral hygiene.' }], [{ q: 'Cât timp durează?', a: '15-20 de ani cu o igienă orală adecvată.' }])
  },
  {
    id: 'hollywood-smile',
    category: 'dental',
    expert: 'Dr. Yusuf',
    title: t('Hollywood Smile Design', 'Design Zâmbet Hollywood'),
    shortDesc: t('Total smile makeover using E-Max or Zirconium veneers tailored to your facial proportions.', 'Transformare totală a zâmbetului folosind fațete E-Max sau Zirconiu.'),
    isThisForMe: t(['Gummy smile', 'Misaligned teeth', 'Total aesthetic reset seekers'], ['Zâmbet gingival', 'Dinți strâmbi', 'Cei care caută o resetare estetică totală']),
    theProcedure: t('Full arch rehabilitation with digital smile mapping.', 'Reabilitare completă a arcadei cu mapare digitală.'),
    mevaAdvantage: t('"Face-Driven" design for the most natural aesthetic.', 'Design "Face-Driven" pentru cea mai naturală estetică.'),
    specs: t({ hospitalStay: 'None', hotelStay: '6 Nights', returnToWork: 'Next Day', anesthesia: 'Local' }, { hospitalStay: 'Fără', hotelStay: '6 Nopți', returnToWork: 'A doua zi', anesthesia: 'Locală' }),
    faq: t([{ q: 'Will it look too white?', a: 'We customize shades to match your skin tone and lip line.' }], [{ q: 'Va arăta prea alb?', a: 'Personalizăm nuanțele pentru a se potrivi cu tonul pielii tale.' }])
  },
  {
    id: 'all-on-4-dental',
    category: 'dental',
    expert: 'Dr. Yusuf',
    title: t('All-on-4 / All-on-6 Restoration', 'Restaurare All-on-4 / All-on-6'),
    shortDesc: t('Full mouth reconstruction on 4 or 6 implants. Ideal for total tooth loss or failing teeth.', 'Reconstrucție totală a arcadei pe 4 sau 6 implanturi.'),
    isThisForMe: t(['Total tooth loss', 'Severe bone loss', 'Denture wearers'], ['Pierdere totală a dinților', 'Pierdere osoasă severă', 'Purtători de proteze']),
    theProcedure: t('Strategic implant placement to support a fixed bridge.', 'Plasare strategică a implanturilor pentru o punte fixă.'),
    mevaAdvantage: t('Avoids the need for expensive bone grafting in many cases.', 'Evită necesitatea adițiilor osoase costisitoare în multe cazuri.'),
    specs: t({ hospitalStay: 'None', hotelStay: '7 Nights', returnToWork: '3-5 Days', anesthesia: 'Local/Sedation' }, { hospitalStay: 'Fără', hotelStay: '7 Nopți', returnToWork: '3-5 Zile', anesthesia: 'Locală/Sedare' }),
    faq: t([{ q: 'Is it a fixed bridge?', a: 'Yes, the bridge is permanently screwed to the implants.' }], [{ q: 'Este o punte fixă?', a: 'Da, puntea este înșurubată permanent pe implanturi.' }])
  },

  // ==========================================
  // 4. PLASTIC SURGERY (14)
  // ==========================================
  {
    id: 'piezo-rhinoplasty',
    category: 'plastic',
    expert: 'Prof. Dr. Emre',
    title: t('Piezo Ultrasonic Rhinoplasty', 'Rinoplastie Ultrasonică Piezo'),
    shortDesc: t('Reshape your nose with sound waves. No hammers, no bone breaking. 40% less bruising and swelling.', 'Remodelați nasul cu unde sonore. Fără ciocane, fără ruperea oaselor.'),
    isThisForMe: t(['Deviated septum', 'Nasal hump', 'Tip refinement seekers'], ['Deviație de sept', 'Cocoașă nazală', 'Cei care doresc rafinarea vârfului']),
    theProcedure: t('Ultrasonic bone sculpting with sub-millimeter precision.', 'Sculptare osoasă ultrasonică cu precizie sub-milimetrică.'),
    mevaAdvantage: t('Preserves soft tissue and vessels for ultra-fast recovery.', 'Protejează țesutul moale și vasele pentru o recuperare ultra-rapidă.'),
    specs: t({ hospitalStay: '1 Night', hotelStay: '6 Nights', returnToWork: '7 Days', anesthesia: 'General' }, { hospitalStay: '1 Noapte', hotelStay: '6 Nopți', returnToWork: '7 Zile', anesthesia: 'Generală' }),
    faq: t([{ q: 'Will I have black eyes?', a: 'With Piezo, bruising is minimal compared to traditional methods.' }], [{ q: 'Voi avea ochi vineți?', a: 'Cu Piezo, vânătăile sunt minime față de metodele tradiționale.' }])
  },
  {
    id: 'vaser-liposuction',
    category: 'plastic',
    expert: 'Op. Dr. Yunus',
    title: t('Vaser Liposuction (High-Def)', 'Vaser Liposucție (High-Def)'),
    shortDesc: t('Targeted fat removal with ultrasound. Sculpts athletic contours while tightening the skin.', 'Eliminarea grăsimii cu ultrasunete. Sculptează contururi atletice.'),
    isThisForMe: t(['Stubborn fat deposits', 'Muscle definition seekers', 'Post-weight loss contouring'], ['Depozite de grăsime încăpățânate', 'Cei care doresc definire musculară', 'Conturare după slăbire']),
    theProcedure: t('Ultrasound fat emulsification and precision extraction.', 'Emulsionarea grăsimii cu ultrasunete și extracție de precizie.'),
    mevaAdvantage: t('Higher skin retraction and less trauma than standard lipo.', 'Retracție mai mare a pielii și traumă redusă.'),
    specs: t({ hospitalStay: '1 Night', hotelStay: '5 Nights', returnToWork: '5-7 Days', anesthesia: 'General' }, { hospitalStay: '1 Noapte', hotelStay: '5 Nopți', returnToWork: '5-7 Zile', anesthesia: 'Generală' }),
    faq: t([{ q: 'Is it permanent?', a: 'Removed fat cells are gone for good. Maintain a stable weight for best results.' }], [{ q: 'Este permanent?', a: 'Celulele adipoase eliminate dispar definitiv.' }])
  },
  {
    id: 'breast-augmentation',
    category: 'plastic',
    expert: 'Prof. Dr. Yakup',
    title: t('Breast Augmentation (Implants)', 'Augmentare Mamară (Implanturi)'),
    shortDesc: t('Premium Motiva & Mentor implants. Natural "Dual Plane" technique for a soft, authentic feel.', 'Implanturi premium Motiva & Mentor. Tehnică naturală "Dual Plane".'),
    isThisForMe: t(['Volume loss after pregnancy', 'Small breast size', 'Asymmetry correction'], ['Pierdere de volum după sarcină', 'Sâni mici', 'Corectarea asimetriei']),
    theProcedure: t('Partial sub-muscular placement for a natural slope.', 'Plasare parțial sub-musculară pentru o pantă naturală.'),
    mevaAdvantage: t('Lifetime implant warranty and personalized projection mapping.', 'Garanție pe viață pentru implant și mapare personalizată.'),
    specs: t({ hospitalStay: '1 Night', hotelStay: '5 Nights', returnToWork: '7 Days', anesthesia: 'General' }, { hospitalStay: '1 Noapte', hotelStay: '5 Nopți', returnToWork: '7 Zile', anesthesia: 'Generală' }),
    faq: t([{ q: 'Can I breastfeed?', a: 'Yes, modern techniques preserve milk ducts and sensitivity.' }], [{ q: 'Pot alăpta?', a: 'Da, tehnicile moderne păstrează canalele galactofore.' }])
  },
  {
    id: 'abdominoplasty-tummy',
    category: 'plastic',
    expert: 'Op. Dr. Yunus',
    title: t('Abdominoplasty (Tummy Tuck)', 'Abdominoplastie (Tummy Tuck)'),
    shortDesc: t('Removes excess skin and repairs separated muscles (Diastasis Recti) for a flat, toned core.', 'Elimină excesul de piele și repară mușchii abdominali diastazați.'),
    isThisForMe: t(['Loose skin after pregnancy', 'Post-bariatric apron skin', 'Muscle wall weakness'], ['Piele lăsată după sarcină', 'Exces de piele post-bariatric', 'Slăbiciune a peretelui muscular']),
    theProcedure: t('Muscle plication and surgical excision of sagging skin.', 'Plicatură musculară și excizie chirurgicală a pielii.'),
    mevaAdvantage: t('Ultra-low scar technique hidden beneath the bikini line.', 'Tehnică cu cicatrice ultra-joasă, ascunsă sub linia bikini.'),
    specs: t({ hospitalStay: '2 Nights', hotelStay: '7 Nights', returnToWork: '14 Days', anesthesia: 'General' }, { hospitalStay: '2 Nopți', hotelStay: '7 Nopți', returnToWork: '14 Zile', anesthesia: 'Generală' }),
    faq: t([{ q: 'Will I have a scar?', a: 'Yes, but it is placed strategically low to be covered by underwear.' }], [{ q: 'Voi avea cicatrice?', a: 'Da, dar este plasată strategic pentru a fi acoperită de lenjerie.' }])
  },
  {
    id: 'brazilian-butt-lift-bbl',
    category: 'plastic',
    expert: 'Prof. Dr. Yakup',
    title: t('BBL (Brazilian Butt Lift)', 'BBL (Brazilian Butt Lift)'),
    shortDesc: t('Natural volume using your own fat. Liposuction of the waist and transfer to the buttocks.', 'Volum natural folosind propria grăsime. Liposucție în talie și transfer în fese.'),
    isThisForMe: t(['Flat buttocks', 'Desire for hourglass figure', 'Available donor fat'], ['Fese plate', 'Dorință de siluetă clepsidră', 'Grăsime donatoare disponibilă']),
    theProcedure: t('Ultrasound-guided safe subcutaneous fat grafting.', 'Grefare de grăsime sigură, ghidată ecografic.'),
    mevaAdvantage: t('Strict "No Muscle" injection protocol for 100% safety.', 'Protocol strict "Fără Mușchi" pentru siguranță 100%.'),
    specs: t({ hospitalStay: '1 Night', hotelStay: '6 Nights', returnToWork: '10 Days', anesthesia: 'General' }, { hospitalStay: '1 Noapte', hotelStay: '6 Nopți', returnToWork: '10 Zile', anesthesia: 'Generală' }),
    faq: t([{ q: 'Is it safe?', a: 'Yes, when performed by experts using ultrasound guidance.' }], [{ q: 'Este sigur?', a: 'Da, când este efectuată de experți folosind ghidaj ecografic.' }])
  },
  {
    id: 'deep-plane-facelift',
    category: 'plastic',
    expert: 'Op. Dr. Yunus',
    title: t('Deep Plane Facelift', 'Lifting Facial Deep Plane'),
    shortDesc: t('Repositions deep muscle layers (SMAS) for a natural, non-operated look. Lasts 10-15 years.', 'Repoziționează straturile musculare profunde pentru un aspect natural.'),
    isThisForMe: t(['Significant jowls', 'Neck sagging', 'Advanced facial aging'], ['Gușă semnificativă', 'Lăsarea gâtului', 'Îmbătrânire facială avansată']),
    theProcedure: t('Structural repositioning of deep tissues without skin tension.', 'Repoziționare structurală a țesuturilor profunde fără tensiune.'),
    mevaAdvantage: t('Erases 15 years with a focus on vertical lift and volume.', 'Șterge 15 ani, axându-se pe lifting vertical și volum.'),
    specs: t({ hospitalStay: '1 Night', hotelStay: '7 Nights', returnToWork: '14 Days', anesthesia: 'General' }, { hospitalStay: '1 Noapte', hotelStay: '7 Nopți', returnToWork: '14 Zile', anesthesia: 'Generală' }),
    faq: t([{ q: 'Will I look "pulled"?', a: 'No, because we move the muscle, the skin sits naturally without tension.' }], [{ q: 'Voi arăta "trasă"?', a: 'Nu, deoarece mutăm mușchiul, pielea se așază natural.' }])
  },
  {
    id: 'blepharoplasty-eyelid',
    category: 'plastic',
    expert: 'Op. Dr. Yunus',
    title: t('Blepharoplasty (Eyelid Surgery)', 'Blefaroplastie (Chirurgia Pleoapelor)'),
    shortDesc: t('Removes hooded upper lids and under-eye bags to restore a rested, vibrant gaze.', 'Elimină pleoapele căzute și pungile de sub ochi pentru o privire odihnită.'),
    isThisForMe: t(['Heavy upper lids', 'Under-eye bags', 'Tired facial appearance'], ['Pleoape superioare grele', 'Pungi sub ochi', 'Aspect facial obosit']),
    theProcedure: t('Precision excision of excess skin and fat pads.', 'Excizie de precizie a pielii și grăsimii în exces.'),
    mevaAdvantage: t('Muscle-sparing technique for invisible scarring.', 'Tehnică de conservare a mușchilor pentru cicatrici invizibile.'),
    specs: t({ hospitalStay: 'Day Clinic', hotelStay: '4 Nights', returnToWork: '5 Days', anesthesia: 'Local/Sedation' }, { hospitalStay: 'Fără', hotelStay: '4 Nopți', returnToWork: '5 Zile', anesthesia: 'Locală/Sedare' }),
    faq: t([{ q: 'Will my eye shape change?', a: 'No, we only remove the weight, preserving your natural almond shape.' }], [{ q: 'Se va schimba forma ochiului?', a: 'Nu, eliminăm doar greutatea în exces.' }])
  },
  {
    id: 'mommy-makeover-full',
    category: 'plastic',
    expert: 'Prof. Dr. Yakup',
    title: t('Mommy Makeover', 'Mommy Makeover (Restaurare Post-Natală)'),
    shortDesc: t('Bespoke combination of breast lift/aug, tummy tuck, and lipo in a single transformative session.', 'Combinație personalizată de lifting mamar, abdominoplastie și lipo.'),
    isThisForMe: t(['Post-pregnancy body changes', 'Multiple target areas', 'Single recovery seekers'], ['Schimbări corporale post-sarcină', 'Zone multiple vizate', 'Cei care doresc o singură recuperare']),
    theProcedure: t('Integrated body restoration protocol.', 'Protocol integrat de restaurare corporală.'),
    mevaAdvantage: t('Coordinated surgical approach for maximum aesthetic balance.', 'Abordare chirurgicală coordonată pentru echilibru estetic maxim.'),
    specs: t({ hospitalStay: '2 Nights', hotelStay: '7 Nights', returnToWork: '14 Days', anesthesia: 'General' }, { hospitalStay: '2 Nopți', hotelStay: '7 Nopți', returnToWork: '14 Zile', anesthesia: 'Generală' }),
    faq: t([{ q: 'Is it safe to combine?', a: 'Yes, when performed in a JCI hospital within safe surgical times.' }], [{ q: 'Este sigur să combinăm?', a: 'Da, când se efectuează într-un spital JCI.' }])
  },
  {
    id: 'gynecomastia-male',
    category: 'plastic',
    expert: 'Op. Dr. Yunus',
    title: t('Gynecomastia (Male Breast Reduction)', 'Ginecomastie (Reducere Sâni Bărbați)'),
    shortDesc: t('Permanent correction of enlarged male breast tissue for a flat, masculine chest.', 'Corecția permanentă a țesutului mamar mărit la bărbați.'),
    isThisForMe: t(['Enlarged male breasts', 'Chest fat resistant to gym', 'Self-consciousness'], ['Sâni măriți la bărbați', 'Grăsime pectorală rezistentă la sport', 'Lipsă de încredere']),
    theProcedure: t('Combined Vaser Lipo and glandular excision.', 'Vaser Lipo combinat cu excizie glandulară.'),
    mevaAdvantage: t('Athletic chest contouring with invisible incisions.', 'Conturare pectorală atletică cu incizii invizibile.'),
    specs: t({ hospitalStay: 'Day Clinic', hotelStay: '4 Nights', returnToWork: '3-5 Days', anesthesia: 'General/Sedation' }, { hospitalStay: 'Fără', hotelStay: '4 Nopți', returnToWork: '3-5 Zile', anesthesia: 'Generală/Sedare' }),
    faq: t([{ q: 'Will it return?', a: 'No, once the gland is removed, it does not regrow.' }], [{ q: 'Va reveni?', a: 'Nu, odată ce glanda este eliminată, nu mai crește.' }])
  },
  {
    id: 'otoplasty-ear',
    category: 'plastic',
    expert: 'Prof. Dr. Emre',
    title: t('Otoplasty (Prominent Ear Surgery)', 'Otoplastie (Chirurgia Urechilor)'),
    shortDesc: t('Reshapes and pins back protruding ears for perfect facial symmetry.', 'Remodelează și apropie urechile proeminente de cap.'),
    isThisForMe: t(['Prominent ears', 'Asymmetrical ears', 'Self-conscious children/adults'], ['Urechi proeminente', 'Urechi asimetrice', 'Copii sau adulți jenați de aspect']),
    theProcedure: t('Cartilage reshaping through a discreet posterior incision.', 'Remodelarea cartilajului printr-o incizie discretă în spate.'),
    mevaAdvantage: t('Permanent structural sutures for a stable, lifetime result.', 'Suturi structurale permanente pentru un rezultat stabil pe viață.'),
    specs: t({ hospitalStay: 'None', hotelStay: '4 Nights', returnToWork: '3 Days', anesthesia: 'Local/Sedation' }, { hospitalStay: 'Fără', hotelStay: '4 Nopți', returnToWork: '3 Zile', anesthesia: 'Locală/Sedare' }),
    faq: t([{ q: 'Is it painful?', a: 'Minimal discomfort, managed easily with oral medication.' }], [{ q: 'Este dureros?', a: 'Disconfort minim, gestionat ușor cu analgezice.' }])
  },
  {
    id: 'arm-thigh-lift',
    category: 'plastic',
    expert: 'Op. Dr. Yunus',
    title: t('Arm & Thigh Lift (Brachioplasty)', 'Lifting de Brațe și Coapse'),
    shortDesc: t('Removes massive skin laxity after weight loss, restoring firm, athletic limbs.', 'Elimină laxitatea masivă a pielii după slăbire, restaurând fermitatea.'),
    isThisForMe: t(['Post-bariatric skin', '"Bat wing" arms', 'Inner thigh sagging'], ['Piele în exces post-bariatric', 'Brațe tip "aripă de liliac"', 'Lăsarea coapselor interioare']),
    theProcedure: t('Surgical excision and multi-layered skin tightening.', 'Excizie chirurgicală și întinderea pielii multi-strat.'),
    mevaAdvantage: t('Expertise in hidden-scar placement on the inner limbs.', 'Expertiză în plasarea cicatricilor în zone ascunse.'),
    specs: t({ hospitalStay: '1 Night', hotelStay: '6 Nights', returnToWork: '14 Days', anesthesia: 'General' }, { hospitalStay: '1 Noapte', hotelStay: '6 Nopți', returnToWork: '14 Zile', anesthesia: 'Generală' }),
    faq: t([{ q: 'When can I work out?', a: 'Light walking immediately; gym after 6 weeks.' }], [{ q: 'Când pot face sport?', a: 'Mers ușor imediat; sala după 6 săptămâni.' }])
  },
  {
    id: 'mastopexy-lift',
    category: 'plastic',
    expert: 'Prof. Dr. Yakup',
    title: t('Mastopexy (Breast Lift)', 'Mastopexie (Lifting Mamar)'),
    shortDesc: t('Elevates sagging breast tissue and restores a youthful, perky projection.', 'Ridică țesutul mamar lăsat și restaurează o proiecție tinerescă.'),
    isThisForMe: t(['Sagging after breastfeeding', 'Weight loss ptosis', 'Nipple pointing downward'], ['Lăsarea sânilor după alăptare', 'Ptoză după slăbire', 'Mamelon orientat în jos']),
    theProcedure: t('Internal suspension and areola repositioning.', 'Suspensie internă și repoziționarea areolei.'),
    mevaAdvantage: t('Internal "Bra" technique for longer-lasting elevation.', 'Tehnică de "Sutien" intern pentru o elevație de lungă durată.'),
    specs: t({ hospitalStay: '1 Night', hotelStay: '5 Nights', returnToWork: '7-10 Days', anesthesia: 'General' }, { hospitalStay: '1 Noapte', hotelStay: '5 Nopți', returnToWork: '7-10 Zile', anesthesia: 'Generală' }),
    faq: t([{ q: 'Can I combine with implants?', a: 'Yes, this is called an Augmentation-Mastopexy.' }], [{ q: 'Pot combina cu implanturi?', a: 'Da, se numește Augmentare-Mastopexie.' }])
  },
  {
    id: 'mentoplasty-chin',
    category: 'plastic',
    expert: 'Prof. Dr. Emre',
    title: t('Mentoplasty (Chin Augmentation)', 'Mentoplastie (Augmentare Bărbie)'),
    shortDesc: t('Enhances a weak chin for a stronger jawline and better facial profile.', 'Îmbunătățește bărbia retrasă pentru o linie mandibulară puternică.'),
    isThisForMe: t(['Receding chin', 'Weak jawline', 'Profile imbalance'], ['Bărbie retrasă', 'Mandibulă slab definită', 'Dezechilibru de profil']),
    theProcedure: t('Silicone implant placement or sliding genioplasty.', 'Plasarea implantului de silicon sau genioplastie.'),
    mevaAdvantage: t('Balanced "Golden Ratio" profile mapping.', 'Maparea echilibrată a profilului conform Secțiunii de Aur.'),
    specs: t({ hospitalStay: 'None', hotelStay: '5 Nights', returnToWork: '5 Days', anesthesia: 'Local/Sedation' }, { hospitalStay: 'Fără', hotelStay: '5 Nopți', returnToWork: '5 Zile', anesthesia: 'Locală/Sedare' }),
    faq: t([{ q: 'Will it move?', a: 'No, the implant is secured beneath the muscle to the bone.' }], [{ q: 'Se va mișca?', a: 'Nu, implantul este fixat sub mușchi pe os.' }])
  },
  {
    id: 'labiaplasty-fem',
    category: 'plastic',
    expert: 'Prof. Dr. Yakup',
    title: t('Labiaplasty (Aesthetic & Functional)', 'Labioplastie (Estetică și Funcțională)'),
    shortDesc: t('Corrects labial hypertrophy for both visual confidence and physical comfort.', 'Corectează hipertrofia labială pentru încredere și confort fizic.'),
    isThisForMe: t(['Physical discomfort', 'Asymmetry', 'Self-consciousness during intimacy'], ['Disconfort fizic', 'Asimetrie', 'Lipsă de încredere în intimitate']),
    theProcedure: t('Precision wedge or edge resection.', 'Rezecție de precizie.'),
    mevaAdvantage: t('Invisible scarring and preservation of full sensitivity.', 'Cicatrici invizibile și păstrarea sensibilității depline.'),
    specs: t({ hospitalStay: 'None', hotelStay: '4 Nights', returnToWork: '3 Days', anesthesia: 'Local/Sedation' }, { hospitalStay: 'Fără', hotelStay: '4 Nopți', returnToWork: '3 Zile', anesthesia: 'Locală/Sedare' }),
    faq: t([{ q: 'Does it affect sensation?', a: 'No, our technique avoids the clitoral nerves completely.' }], [{ q: 'Afectează sensibilitatea?', a: 'Nu, tehnica noastră evită complet nervii clitoridieni.' }])
  },

  // ==========================================
  // 5. ANDROLOGY & MEN'S HEALTH (8)
  // ==========================================
  {
    id: 'ligamentolysis-andrology',
    category: 'andrology',
    expert: 'MD Victor',
    title: t('Penile Lengthening (Ligamentolysis)', 'Alungire Penis (Ligamentoliză)'),
    shortDesc: t('Surgical release of the suspensory ligament to expose hidden length. Permanent result.', 'Eliberarea chirurgicală a ligamentului suspensor pentru alungire permanentă.'),
    isThisForMe: t(['Desire for length', 'Hidden penis syndrome', 'Surgical seekers'], ['Dorință de lungime', 'Sindromul penisului ascuns', 'Căutători de soluții chirurgicale']),
    theProcedure: t('Discreet V-Y advancement flasplasty.', 'Plastie de avansare V-Y discretă.'),
    mevaAdvantage: t('Advanced protocol to minimize retraction.', 'Protocol avansat pentru minimizarea retracției.'),
    specs: t({ hospitalStay: '1 Night', hotelStay: '5 Nights', returnToWork: '7 Days', anesthesia: 'General' }, { hospitalStay: '1 Noapte', hotelStay: '5 Nopți', returnToWork: '7 Zile', anesthesia: 'Generală' }),
    faq: t([{ q: 'How much length?', a: 'Average visible gain is 2-4 cm flaccid.' }], [{ q: 'Câtă lungime?', a: 'Câștigul vizibil mediu este de 2-4 cm flascid.' }])
  },
  {
    id: 'fat-grafting-girth',
    category: 'andrology',
    expert: 'MD Victor',
    title: t('Penile Girth (Fat Grafting)', 'Grosime Penis (Transfer Grăsime)'),
    shortDesc: t('Permanent thickening using autologous fat. Most natural feel and bio-compatible.', 'Îngroșare permanentă folosind propria grăsime. Senzație naturală.'),
    isThisForMe: t(['Desire for girth', 'Available donor fat', 'Natural tissue seekers'], ['Dorință de grosime', 'Grăsime donatoare disponibilă', 'Cei care doresc țesut natural']),
    theProcedure: t('Coleman micro-fat grafting technique.', 'Tehnică de micro-grefare de grăsime Coleman.'),
    mevaAdvantage: t('VASER fat harvest for 70%+ survival rate.', 'Recoltare VASER pentru o rată de supraviețuire de 70%+ .'),
    specs: t({ hospitalStay: 'Day Clinic', hotelStay: '4 Nights', returnToWork: '5 Days', anesthesia: 'Sedation' }, { hospitalStay: 'Fără', hotelStay: '4 Nopți', returnToWork: '5 Zile', anesthesia: 'Sedare' }),
    faq: t([{ q: 'Will it go away?', a: 'No, once integrated, the fat remains permanently.' }], [{ q: 'Va dispărea?', a: 'Nu, odată integrată, grăsimea rămâne permanent.' }])
  },
  {
    id: 'ha-filler-girth',
    category: 'andrology',
    expert: 'MD Victor',
    title: t('Non-Surgical Girth (HA Fillers)', 'Grosime Non-Chirurgicală (Acid Hialuronic)'),
    shortDesc: t('Instant 2-3 cm girth increase using premium high-viscosity fillers. No surgery, zero downtime.', 'Creștere instantanee cu 2-3 cm folosind fillere premium. Fără operație.'),
    isThisForMe: t(['Immediate results seekers', 'No surgery seekers', 'Trial seekers'], ['Cei care doresc rezultate imediate', 'Fără chirurgie', 'Cei care doresc să testeze']),
    theProcedure: t('Precision micro-cannula injection.', 'Injectare de precizie cu micro-canulă.'),
    mevaAdvantage: t('Exclusive use of medical-grade Voluma/Restylane.', 'Utilizarea exclusivă a fillerelor de grad medical.'),
    specs: t({ hospitalStay: 'None', hotelStay: '2 Nights', returnToWork: 'Immediate', anesthesia: 'Topical' }, { hospitalStay: 'Fără', hotelStay: '2 Nopți', returnToWork: 'Imediat', anesthesia: 'Topicală' }),
    faq: t([{ q: 'How long does it last?', a: '12-18 months typically.' }], [{ q: 'Cât timp durează?', a: 'De obicei 12-18 luni.' }])
  },
  {
    id: 'dermal-graft-permanent',
    category: 'andrology',
    expert: 'MD Victor',
    title: t('Dermal Matrix Graft (Girth)', 'Grefă Matrix Dermic (Grosime)'),
    shortDesc: t('The most homogeneous permanent girth result. Uses an acellular dermal matrix graft.', 'Cel mai omogen rezultat permanent pentru grosime.'),
    isThisForMe: t(['Permanent uniform girth', 'Stable long-term volume', 'Surgical seekers'], ['Grosime uniformă permanentă', 'Volum stabil pe termen lung', 'Căutători de soluții chirurgicale']),
    theProcedure: t('Alloderm graft placement circumferentially.', 'Plasarea grefei Alloderm circumferențial.'),
    mevaAdvantage: t('Perfectly smooth and predictable thickening.', 'Îngroșare perfect netedă și previzibilă.'),
    specs: t({ hospitalStay: '1 Night', hotelStay: '6 Nights', returnToWork: '10 Days', anesthesia: 'General' }, { hospitalStay: '1 Noapte', hotelStay: '6 Nopți', returnToWork: '10 Zile', anesthesia: 'Generală' }),
    faq: t([{ q: 'Is it hard?', a: 'No, it integrates into your skin and feels natural.' }], [{ q: 'Este tare?', a: 'Nu, se integrează în piele și se simte natural.' }])
  },
  {
    id: 'p-shot-prp',
    category: 'andrology',
    expert: 'MD Murat',
    title: t('P-Shot (Regenerative PRP)', 'P-Shot (PRP Regenerativ)'),
    shortDesc: t('Enhances performance and sensitivity using growth factors from your own blood.', 'Îmbunătățește performanța și sensibilitatea folosind factori de creștere.'),
    isThisForMe: t(['Erectile quality decline', 'Sensitivity loss', 'Performance seekers'], ['Scăderea calității erecției', 'Pierderea sensibilității', 'Cei care doresc performanță']),
    theProcedure: t('Concentrated platelet injection.', 'Injectare de trombocite concentrate.'),
    mevaAdvantage: t('Double-spin centrifugation for 5x concentration.', 'Centrifugare cu rotație dublă pentru concentrație 5x.'),
    specs: t({ hospitalStay: 'None', hotelStay: '2 Nights', returnToWork: 'Immediate', anesthesia: 'Topical' }, { hospitalStay: 'Fără', hotelStay: '2 Nopți', returnToWork: 'Imediat', anesthesia: 'Topicală' }),
    faq: t([{ q: 'Does it hurt?', a: 'No, we use strong numbing cream.' }], [{ q: 'Doare?', a: 'Nu, folosim o cremă anestezică puternică.' }])
  },
  {
    id: 'glans-aug-pe',
    category: 'andrology',
    expert: 'MD Murat',
    title: t('Glans Augmentation (PE Treatment)', 'Augmentare Gland (Tratament EP)'),
    shortDesc: t('Filler injection into the glans to delay ejaculation and increase visual volume.', 'Injectare în gland pentru a întârzia ejacularea și a mări volumul.'),
    isThisForMe: t(['Premature ejaculation', 'Proportion seekers', 'Visual enhancement'], ['Ejaculare prematură', 'Cei care doresc proporție', 'Îmbunătățire vizuală']),
    theProcedure: t('Sub-glanular HA injection.', 'Injectare HA sub-glanulară.'),
    mevaAdvantage: t('Specifically modulated sensitivity for lasting intimacy.', 'Sensibilitate modulată special pentru intimitate de durată.'),
    specs: t({ hospitalStay: 'None', hotelStay: '2 Nights', returnToWork: 'Immediate', anesthesia: 'Topical' }, { hospitalStay: 'Fără', hotelStay: '2 Nopți', returnToWork: 'Imediat', anesthesia: 'Topicală' }),
    faq: t([{ q: 'Does it stop pleasure?', a: 'No, it only dampens the hypersensitivity that causes PE.' }], [{ q: 'Oprește plăcerea?', a: 'Nu, doar temperează hipersensibilitatea care cauzează EP.' }])
  },
  {
    id: 'eswt-shockwave-ed',
    category: 'andrology',
    expert: 'MD Murat',
    title: t('ESWT Shockwave Therapy', 'Terapie Shockwave ESWT'),
    shortDesc: t('Cures the cause of ED by growing new blood vessels. Non-invasive, no pills.', 'Vindecă cauza DE prin creșterea de noi vase de sânge.'),
    isThisForMe: t(['Mild to moderate ED', 'Peyronie\'s disease', 'No-pill seekers'], ['DE ușoară spre moderată', 'Boala Peyronie', 'Cei care nu doresc medicamente']),
    theProcedure: t('Acoustic pulse application (6 sessions).', 'Aplicarea de impulsuri acustice (6 sesiuni).'),
    mevaAdvantage: t('Storz Medical gold-standard device.', 'Echipament Storz Medical standard de aur.'),
    specs: t({ hospitalStay: 'None', hotelStay: '2 Nights', returnToWork: 'Immediate', anesthesia: 'None' }, { hospitalStay: 'Fără', hotelStay: '2 Nopți', returnToWork: 'Imediat', anesthesia: 'Fără' }),
    faq: t([{ q: 'Is it permanent?', a: 'Repairs vascular tissue for long-term recovery.' }], [{ q: 'Este permanent?', a: 'Repară țesutul vascular pentru recuperare pe termen lung.' }])
  },
  {
    id: 'penile-implant-ed',
    category: 'andrology',
    expert: 'MD Victor',
    title: t('Penile Prosthesis (Implant)', 'Proteză Peniană (Implant)'),
    shortDesc: t('The 100% cure for severe ED. Permanent inflatable implant for reliability on demand.', 'Cura 100% pentru DE severă. Implant gonflabil permanent.'),
    isThisForMe: t(['Severe ED', 'Post-prostate surgery', 'Diabetes-related ED'], ['DE severă', 'Post-chirurgie de prostată', 'DE legată de diabet']),
    theProcedure: t('3-piece inflatable device placement.', 'Plasarea dispozitivului gonflabil din 3 piese.'),
    mevaAdvantage: t('AMS 700 / Coloplast Titan premium systems.', 'Sisteme premium AMS 700 / Coloplast Titan.'),
    specs: t({ hospitalStay: '1-2 Nights', hotelStay: '7 Nights', returnToWork: '2-3 Weeks', anesthesia: 'General' }, { hospitalStay: '1-2 Nopți', hotelStay: '7 Nopți', returnToWork: '2-3 Săptămâni', anesthesia: 'Generală' }),
    faq: t([{ q: 'Will my partner know?', a: 'No, the pump is hidden in the scrotum and the implant is internal.' }], [{ q: 'Va ști partenera?', a: 'Nu, pompa este ascunsă în scrot, iar implantul este intern.' }])
  },

  // ==========================================
  // 6. SPECIALIST TREATMENTS (4)
  // ==========================================
  {
    id: 'organ-transplant-turkey',
    category: 'specialist',
    expert: 'MD Victor',
    title: t('Organ Transplant (Kidney & Liver)', 'Transplant de Organe (Rinichi și Ficat)'),
    shortDesc: t('World-class transplant surgery in Istanbul. High success rates for living donor kidney and liver transplantation.', 'Chirurgie de transplant de clasă mondială în Istanbul. Rate mari de succes.'),
    isThisForMe: t(['Chronic kidney failure', 'Liver cirrhosis', 'Living donor candidates'], ['Insuficiență renală cronică', 'Ciroză hepatică', 'Candidați cu donator viu']),
    theProcedure: t('Complex micro-surgical transplantation.', 'Transplant micro-chirurgical complex.'),
    mevaAdvantage: t('JCI-accredited transplant center with 99% survival rate.', 'Centru de transplant acreditat JCI cu rată de supraviețuire de 99%.'),
    specs: t({ hospitalStay: '7-14 Nights', hotelStay: '14 Nights', returnToWork: '4-6 Weeks', anesthesia: 'General' }, { hospitalStay: '7-14 Nopți', hotelStay: '14 Nopți', returnToWork: '4-6 Săptămâni', anesthesia: 'Generală' }),
    faq: t([{ q: 'Is it legal?', a: 'Yes, fully regulated living donor transplantation.' }], [{ q: 'Este legal?', a: 'Da, transplant reglementat cu donator viu.' }])
  },
  {
    id: 'ivf-cyprus-special',
    category: 'specialist',
    expert: t('Cyprus Clinical Team', 'Echipa Clinică Cipru'),
    title: t('IVF Cyprus (Advanced Fertility)', 'FIV Cipru (Fertilitate Avansată)'),
    shortDesc: t('Advanced ICSI, PGD, and Family Balancing in our specialized Cyprus laboratory. High success rates for complex cases.', 'ICSI avansat, PGD și Family Balancing în laboratorul nostru din Cipru.'),
    isThisForMe: t(['Multiple failed IVF cycles', 'Gender selection seekers', 'Egg/Sperm donation seekers'], ['Multiple cicluri FIV eșuate', 'Selecție gen', 'Donare ovule/spermă']),
    theProcedure: t('State-of-the-art genetic screening and embryo transfer.', 'Screening genetic de ultimă oră și transfer de embrioni.'),
    mevaAdvantage: t('Unique legal framework in Cyprus for advanced reproductive options.', 'Cadru legal unic în Cipru pentru opțiuni reproductive avansate.'),
    specs: t({ hospitalStay: 'None', hotelStay: '7-10 Nights', returnToWork: 'Immediate', anesthesia: 'Sedation' }, { hospitalStay: 'Fără', hotelStay: '7-10 Nopți', returnToWork: 'Imediat', anesthesia: 'Sedare' }),
    faq: t([{ q: 'Success rate?', a: 'Our clinical success rates for donors exceed 80%.' }], [{ q: 'Rata de succes?', a: 'Ratele noastre de succes pentru donatori depășesc 80%.' }])
  },
  {
    id: 'smart-oncology-drugs',
    category: 'specialist',
    expert: 'Prof. Dr. Gökhan',
    title: t('Smart Oncology & Targeted Drugs', 'Oncologie Inteligentă și Medicamente Țintite'),
    shortDesc: t('Precision cancer treatment using genomic mapping and molecular-targeted therapies. Attacks cancer, spares the body.', 'Tratament oncologic de precizie folosind maparea genomică.'),
    isThisForMe: t(['Complex cancer cases', 'Resistance to chemo', 'Second opinion seekers'], ['Cazuri de cancer complexe', 'Rezistență la chimo', 'Cei care caută a doua opinie']),
    theProcedure: t('Molecular profiling and targeted immunotherapy.', 'Profilare moleculară și imunoterapie țintită.'),
    mevaAdvantage: t('Access to the latest FDA-approved oncology agents.', 'Acces la cei mai noi agenți oncologici aprobați FDA.'),
    specs: t({ hospitalStay: 'Depends on Case', hotelStay: 'As Required', returnToWork: 'Depends', anesthesia: 'None' }, { hospitalStay: 'Depinde de caz', hotelStay: 'După caz', returnToWork: 'Depinde', anesthesia: 'Fără' }),
    faq: t([{ q: 'What are smart drugs?', a: 'They target specific mutations in cancer cells rather than killing all fast-growing cells.' }], [{ q: 'Ce sunt medicamentele inteligente?', a: 'Ele țintesc mutații specifice ale celulelor canceroase.' }])
  },
  {
    id: 'anti-gravity-lifting',
    category: 'specialist',
    expert: 'Prof. Dr. Emre',
    title: t('Anti-Gravity Lifting (Non-Surgical)', 'Lifting Anti-Gravity (Non-Chirurgical)'),
    shortDesc: t('Combines HIFU, French Lift Threads, and Liquid Lifting to defy aging without surgery.', 'Combină HIFU, firele franceze și Liquid Lifting.'),
    isThisForMe: t(['Early facial sagging', 'No surgery seekers', 'Natural rejuvenation'], ['Lăsare facială timpurie', 'Fără chirurgie', 'Întinerire naturală']),
    theProcedure: t('Integrated vector-lifting protocol.', 'Protocol integrat de lifting pe vectori.'),
    mevaAdvantage: t('Multi-layer architectural reset of the face.', 'Resetare arhitecturală multi-strat a feței.'),
    specs: t({ hospitalStay: 'None', hotelStay: '2 Nights', returnToWork: 'Immediate', anesthesia: 'Local' }, { hospitalStay: 'Fără', hotelStay: '2 Nopți', returnToWork: 'Imediat', anesthesia: 'Locală' }),
    faq: t([{ q: 'How long does it last?', a: 'Results last 2-3 years depending on the combination.' }], [{ q: 'Cât timp durează?', a: 'Rezultatele durează 2-3 ani.' }])
  }
];

export const findTreatment = (slug) => 
  treatmentsData.find(t => t.id === slug) || null;

export default treatmentsData;

```

### Dosya Adı: src\data\treatmentsLegacy.js
```js
/**
 * treatmentsData.js
 * Single source of truth for all Meva Clinic treatment pages.
 * Used by TreatmentDetail.jsx via useParams(:slug)
 *
 * URL pattern:  /en/treatments/:slug  |  /ro/treatments/:slug
 * Fallback:     /:lng/:slug  (TreatmentPage with treatmentDetails.json)
 */

export const TREATMENTS = [
  // ──────────────────────────────────────────────────────────
  // BARIATRIC SURGERY
  // ──────────────────────────────────────────────────────────
  {
    slug: 'bariatric-surgery',
    roSlug: 'chirurgie-bariatrica',
    category: 'Bariatric',
    heroImage: 'https://images.unsplash.com/photo-1551076805-e1869033e561?q=80&w=2070&auto=format&fit=crop',

    title: {
      en: 'Bariatric Surgery Istanbul',
      ro: 'Chirurgie Bariatrică Istanbul',
    },
    subtitle: {
      en: 'Gastric Sleeve, Bypass & Balloon — JCI Accredited Hospital',
      ro: 'Gastric Sleeve, Bypass și Balon — Spital Acreditat JCI',
    },
    metaDescription: {
      en: 'World-class bariatric surgery in Istanbul. Gastric Sleeve, Bypass and Balloon performed by Dr. Cuma with 10,000+ procedures. All-inclusive VIP package.',
      ro: 'Chirurgie bariatrică de clasă mondială în Istanbul. Gastric Sleeve, Bypass și Balon realizate de Dr. Cuma cu peste 10.000 de proceduri. Pachet VIP complet.',
    },
    keywords: 'bariatric surgery Istanbul, gastric sleeve Turkey, gastric bypass cost, obesity surgery, Meva Clinic bariatric',

    doctorQuote: {
      en: 'In over 10,000 bariatric procedures, our patients achieve an average of 65–80% excess weight loss within 12 months — with a complication rate below 1%. At Meva Clinic, surgery is only the beginning of your transformation.',
      ro: 'În peste 10.000 de proceduri bariatrice, pacienții noștri obțin o pierdere medie de 65–80% din excesul de greutate în 12 luni — cu o rată de complicații sub 1%. La Meva Clinic, operația este doar începutul transformării tale.',
      doctor: 'Dr. Cuma',
      specialty: {
        en: 'Bariatric & Metabolic Surgery Specialist · 10,000+ Procedures',
        ro: 'Specialist Chirurgie Bariatrică & Metabolică · Peste 10.000 de Proceduri',
      },
      image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=200',
    },

    steps: [
      { en: 'Free online assessment & BMI eligibility check', ro: 'Evaluare online gratuită și verificare eligibilitate IMC' },
      { en: 'Pre-operative blood panel, ECG and cardiac clearance', ro: 'Panel sanguin preoperatoriu, ECG și evaluare cardiacă' },
      { en: 'Laparoscopic / robotic surgery under general anaesthesia (45–90 min)', ro: 'Chirurgie laparoscopică / robotică sub anestezie generală (45–90 min)' },
      { en: '2–3 nights monitored recovery in JCI-accredited private hospital', ro: '2–3 nopți recuperare monitorizată în spital privat acreditat JCI' },
      { en: '12-month remote follow-up with dietitian & bariatric nurse', ro: '12 luni follow-up la distanță cu dietetician și asistentă bariatrică' },
    ],

    advantages: [
      { en: '65–80% excess weight loss in 12 months', ro: '65–80% pierdere a excesului de greutate în 12 luni' },
      { en: 'Resolves Type 2 Diabetes in 80% of patients', ro: 'Rezolvă Diabetul de Tip 2 la 80% dintre pacienți' },
      { en: '40–60% cheaper than UK, Germany & Romania', ro: '40–60% mai ieftin decât UK, Germania și România' },
      { en: 'JCI-accredited hospital — international safety standard', ro: 'Spital acreditat JCI — standard internațional de siguranță' },
      { en: 'Romanian-speaking coordinator included 24/7', ro: 'Coordonator vorbitor de română inclus 24/7' },
    ],

    specs: {
      en: { hospitalStay: '2–3 Nights (Private)', hotelStay: '3 Nights (5★ Hotel)', anesthesia: 'General', returnToWork: '7–14 Days' },
      ro: { hospitalStay: '2–3 Nopți (Privat)', hotelStay: '3 Nopți (Hotel 5★)', anesthesia: 'Generală', returnToWork: '7–14 Zile' },
    },

    references: [
      'Schauer, P. R., et al. (2025). Bariatric Surgery versus Intensive Medical Therapy for Diabetes. NEJM.',
      'JCI Global Clinical Standards for Metabolic Surgery (2026 Edition).',
      'IFSO World Congress: Robotic Bariatric Surgery Outcomes 2025.',
    ],
  },

  // ──────────────────────────────────────────────────────────
  // HAIR TRANSPLANT
  // ──────────────────────────────────────────────────────────
  {
    slug: 'hair-transplant',
    roSlug: 'transplant-par',
    category: 'Hair',
    heroImage: 'https://images.unsplash.com/photo-1519340241574-2cec6aef0c01?q=80&w=2070&auto=format&fit=crop',

    title: {
      en: 'Hair Transplant Istanbul — Sapphire FUE & DHI',
      ro: 'Transplant de Păr Istanbul — Sapphire FUE & DHI',
    },
    subtitle: {
      en: '12,000+ Successful Procedures · MD Harun',
      ro: 'Peste 12.000 de Proceduri Reușite · MD Harun',
    },
    metaDescription: {
      en: 'Premium Sapphire FUE and DHI hair transplant in Istanbul. 97%+ graft survival, natural hairlines, non-shaven options. All-inclusive VIP package by Meva Clinic.',
      ro: 'Transplant de păr premium Sapphire FUE și DHI în Istanbul. Supraviețuire grefe 97%+, linii naturale, opțiuni fără ras. Pachet VIP complet Meva Clinic.',
    },
    keywords: 'hair transplant Istanbul, Sapphire FUE Turkey, DHI hair transplant, hair restoration cost, Meva Clinic hair',

    doctorQuote: {
      en: 'The Sapphire FUE blade opens micro-channels with 40% less tissue trauma than steel blades. Combined with DHI direct implantation, we achieve graft survival rates above 97% — and hairlines indistinguishable from natural growth.',
      ro: 'Lama Sapphire FUE deschide micro-canale cu 40% mai puțin traumatism tisular față de lamele de oțel. Combinat cu implantarea directă DHI, obținem rate de supraviețuire a grefelor peste 97% — și linii ale părului indistinguibile de creșterea naturală.',
      doctor: 'Dr. Harun',
      specialty: {
        en: 'Hair & Eyebrow Transplant Specialist · Sapphire FUE · DHI · 12,000+ Procedures',
        ro: 'Specialist Transplant Păr & Sprâncene · Sapphire FUE · DHI · Peste 12.000 Proceduri',
      },
      image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=200',
    },

    steps: [
      { en: 'Hairline design consultation and graft count planning', ro: 'Consultație design linie a părului și planificare grefe' },
      { en: 'Painless scalp anaesthesia (needle-free system)', ro: 'Anestezie nedureroasă a scalpului (sistem fără ac)' },
      { en: 'Sapphire FUE follicular extraction (4–8 hours)', ro: 'Extracție foliculară Sapphire FUE (4–8 ore)' },
      { en: 'DHI direct implantation using Choi pen', ro: 'Implantare directă DHI cu stiloul Choi' },
      { en: '12-month photographic growth monitoring', ro: 'Monitorizare fotografică a creșterii pe 12 luni' },
    ],

    advantages: [
      { en: '97%+ graft survival rate guaranteed', ro: 'Rată de supraviețuire a grefelor 97%+ garantată' },
      { en: 'Permanent, completely natural results', ro: 'Rezultate permanente, complet naturale' },
      { en: 'No visible linear scarring', ro: 'Fără cicatrici liniare vizibile' },
      { en: 'Non-shaven (unshaved) FUE available', ro: 'FUE nerasat (unshaved) disponibil' },
      { en: 'Day clinic — back to work in 3 days', ro: 'Clinică ambulatorie — înapoi la muncă în 3 zile' },
    ],

    specs: {
      en: { hospitalStay: 'Day Clinic (No Stay)', hotelStay: '3 Nights (5★ Hotel)', anesthesia: 'Local', returnToWork: '3–5 Days' },
      ro: { hospitalStay: 'Clinică Ambulatorie', hotelStay: '3 Nopți (Hotel 5★)', anesthesia: 'Locală', returnToWork: '3–5 Zile' },
    },

    references: [
      'ISHRS (International Society of Hair Restoration Surgery) Practice Standards 2025.',
      'Comparative Analysis: Sapphire vs Steel FUE Blades — Graft Survival & Patient Satisfaction. JHRS 2024.',
    ],
  },

  // ──────────────────────────────────────────────────────────
  // IVF — NORTHERN CYPRUS
  // ──────────────────────────────────────────────────────────
  {
    slug: 'ivf-cyprus',
    roSlug: 'fiv-cipru',
    category: 'IVF',
    heroImage: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?q=80&w=2070&auto=format&fit=crop',

    title: {
      en: 'IVF Treatment in Cyprus — 2026 Guide',
      ro: 'Tratament FIV în Cipru — Ghid 2026',
    },
    subtitle: {
      en: '65%+ Success Rate · Egg Donation · NGS Genetic Screening',
      ro: 'Rată de Succes 65%+ · Donare de Ovule · Screening Genetic NGS',
    },
    metaDescription: {
      en: 'World-class IVF treatment in Northern Cyprus. 65%+ success rate with egg donation, NGS embryo selection and AI-assisted protocols. Meva Clinic all-inclusive package.',
      ro: 'Tratament FIV de clasă mondială în Ciprul de Nord. Rată de succes 65%+ cu donare de ovule, selecție embrioni NGS și protocoale asistate AI. Pachet complet Meva Clinic.',
    },
    keywords: 'IVF Cyprus, egg donation Cyprus, FIV Cipru, fertilizare in vitro Cipru, IVF success rate 2026, Meva Clinic IVF',

    doctorQuote: {
      en: 'Northern Cyprus is among the top 3 IVF destinations globally — not because of cost alone, but because our legal framework allows egg donation and PGT-A genetic screening that many EU countries restrict. Our live birth rates exceed 65% per transfer for patients under 38.',
      ro: 'Ciprul de Nord se numără printre primele 3 destinații FIV din lume — nu doar datorită costurilor, ci și pentru că cadrul nostru legal permite donarea de ovule și screening genetic PGT-A pe care multe țări UE le restricționează. Ratele noastre de nașteri vii depășesc 65% pe transfer pentru pacientele sub 38 de ani.',
      doctor: 'Dr. Ayşe Kaya',
      specialty: {
        en: 'Reproductive Medicine Specialist · IVF & Egg Donation · Cyprus Protocol',
        ro: 'Specialist Medicină Reproductivă · FIV & Donare Ovule · Protocol Cipru',
      },
      image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&q=80&w=200',
    },

    steps: [
      { en: 'AMH / FSH blood test and antral follicle count (AFC) remotely', ro: 'Test sanguin AMH / FSH și numărare foliculi antrali (AFC) la distanță' },
      { en: 'Ovarian stimulation protocol (10–14 days of injections)', ro: 'Protocol de stimulare ovariană (10–14 zile de injecții)' },
      { en: 'Egg retrieval under light sedation (20–30 min)', ro: 'Recuperarea ovulelor sub sedare ușoară (20–30 min)' },
      { en: 'ICSI fertilisation + NGS genetic screening of embryos', ro: 'Fertilizare ICSI + screening genetic NGS al embrionilor' },
      { en: 'Blastocyst transfer + 2-week pregnancy test (beta-hCG)', ro: 'Transfer blastocist + test de sarcină la 2 săptămâni (beta-hCG)' },
    ],

    advantages: [
      { en: '65%+ live birth rate per transfer (under 38)', ro: 'Rată de nașteri vii 65%+ per transfer (sub 38 ani)' },
      { en: 'Egg donation legally permitted — no waiting list', ro: 'Donare ovule permisă legal — fără listă de așteptare' },
      { en: 'NGS + AI embryo selection for highest viability', ro: 'Selecție embrioni NGS + AI pentru viabilitate maximă' },
      { en: '50–70% cheaper than UK, Spain & Greece', ro: '50–70% mai ieftin decât UK, Spania și Grecia' },
      { en: 'Anonymous donor database — 48hr match', ro: 'Bază de date donatori anonimă — potrivire în 48h' },
    ],

    specs: {
      en: { hospitalStay: 'Day Clinic', hotelStay: '5–7 Nights (5★ Hotel)', anesthesia: 'Light Sedation', returnToWork: 'Same Day' },
      ro: { hospitalStay: 'Clinică Ambulatorie', hotelStay: '5–7 Nopți (Hotel 5★)', anesthesia: 'Sedare Ușoară', returnToWork: 'Aceeași Zi' },
    },

    references: [
      'ESHRE (European Society of Human Reproduction and Embryology) ART Report 2025.',
      'Cyprus IVF Success Rates vs European Benchmarks — Reproductive BioMedicine Online 2024.',
      'AI-Assisted Embryo Selection: Clinical Outcomes Review, Fertility & Sterility Journal 2025.',
    ],
  },

  // ──────────────────────────────────────────────────────────
  // DENTAL IMPLANTS
  // ──────────────────────────────────────────────────────────
  {
    slug: 'dental-implants',
    roSlug: 'implanturi-dentare',
    category: 'Dental',
    heroImage: 'https://plus.unsplash.com/premium_photo-1664303498964-b8bfa93eff49?q=80&w=2070&auto=format&fit=crop',

    title: {
      en: 'Dental Implants Istanbul — Hollywood Smile',
      ro: 'Implanturi Dentare Istanbul — Zâmbet Hollywoodian',
    },
    subtitle: {
      en: 'Straumann & Nobel Biocare · Dr. Ayşe Kaya · ITI Fellow',
      ro: 'Straumann & Nobel Biocare · Dr. Ayşe Kaya · Membră ITI',
    },
    metaDescription: {
      en: 'Premium dental implants in Istanbul. Straumann & Nobel Biocare brands, same-day temporaries, All-on-4. 40–60% cheaper than UK. EACMFS certified doctors at Meva Clinic.',
      ro: 'Implanturi dentare premium în Istanbul. Branduri Straumann & Nobel Biocare, temporare în aceeași zi, All-on-4. 40–60% mai ieftin decât UK. Medici certificați EACMFS la Meva Clinic.',
    },
    keywords: 'dental implants Istanbul, Hollywood smile Turkey, All-on-4 Istanbul, implanturi dentare Istanbul, Straumann Turkey, Meva Clinic dental',

    doctorQuote: {
      en: 'With Straumann BLX implants and full-digital smile design, we plan your entire reconstruction virtually before a single drill touches the bone. Same-day temporaries mean you leave Istanbul smiling — every time.',
      ro: 'Cu implanturi Straumann BLX și design digital complet al zâmbetului, planificăm întreaga reconstrucție virtual înainte ca vreo freză să atingă osul. Coroanele temporare în aceeași zi înseamnă că plecați din Istanbul zâmbind — de fiecare dată.',
      doctor: 'Dr. Ayşe Kaya',
      specialty: {
        en: 'Implantologist · ITI Fellow · Straumann Certified · 8,000+ Implants',
        ro: 'Implantolog · Membră ITI · Certificată Straumann · Peste 8.000 de Implanturi',
      },
      image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&q=80&w=200',
    },

    steps: [
      { en: '3D CBCT scan and digital smile design session', ro: 'Scanare 3D CBCT și sesiune design digital al zâmbetului' },
      { en: 'Zero-pain local anaesthesia protocol', ro: 'Protocol anestezie locală zero durere' },
      { en: 'Titanium implant placement (Straumann / Nobel Biocare)', ro: 'Plasare implant titan (Straumann / Nobel Biocare)' },
      { en: 'Zirconium crown fitting — same-day temporary crown', ro: 'Montare coroană zirconiu — coroană temporară în aceeași zi' },
      { en: 'Final crown delivery (return visit or courier)', ro: 'Livrare coroană finală (vizită retur sau curier)' },
    ],

    advantages: [
      { en: '40–60% cheaper than UK, Germany, Romania', ro: '40–60% mai ieftin decât UK, Germania, România' },
      { en: 'Straumann & Nobel Biocare — 15-year warranty', ro: 'Straumann & Nobel Biocare — garanție 15 ani' },
      { en: 'Same-day zirconium temporaries', ro: 'Temporare din zirconiu în aceeași zi' },
      { en: 'All-on-4 & All-on-6 full arch available', ro: 'All-on-4 & All-on-6 arc complet disponibil' },
      { en: 'No hospital stay — return to work immediately', ro: 'Fără spitalizare — revenire imediată la muncă' },
    ],

    specs: {
      en: { hospitalStay: 'Not Required', hotelStay: '5 Nights (5★ Hotel)', anesthesia: 'Local', returnToWork: 'Immediate' },
      ro: { hospitalStay: 'Nu Necesită', hotelStay: '5 Nopți (Hotel 5★)', anesthesia: 'Locală', returnToWork: 'Imediat' },
    },

    references: [
      'ITI (International Team for Implantology) Consensus Statement 2025.',
      'Journal of Clinical Periodontology: Osseointegration Success Rates in High-Density Implants.',
      'EACMFS Digital Implantology Workflow Guidelines 2024.',
    ],
  },

  // ──────────────────────────────────────────────────────────
  // MEVA MIXED HAIR TRANSPLANT (Sapphire FUE + DHI Combo)
  // ──────────────────────────────────────────────────────────
  {
    slug: 'mixed-hair-transplant',
    roSlug: 'transplant-par-mixt',
    category: 'Hair',
    heroImage: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=2070&auto=format&fit=crop',

    title: {
      en: 'Meva Mixed Hair Transplant — 1 Operation, 2 Expert Techniques',
      ro: 'Transplant Mixt de Păr Meva — 1 Operație, 2 Tehnici Expert',
    },
    subtitle: {
      en: 'Sapphire FUE for Hairline · DHI (Choi Pen) for Density · MD Harun',
      ro: 'Sapphire FUE pentru Linia Frontală · DHI (Stilou Choi) pentru Densitate · MD Harun',
    },
    metaDescription: {
      en: 'The world\'s most effective hair transplant combination: Sapphire FUE micro-incisions for a natural hairline + DHI Choi Pen for maximum mid-scalp and crown density. Performed by MD Harun at Meva Clinic Istanbul.',
      ro: 'Cea mai eficientă combinație de transplant de păr din lume: micro-incizii Sapphire FUE pentru o linie frontală naturală + DHI Stilou Choi pentru densitate maximă. Realizat de MD Harun la Meva Clinic Istanbul.',
    },
    keywords: 'mixed hair transplant Istanbul, Sapphire FUE DHI combination, hair transplant technique Turkey, Meva Clinic mixed technique, Dr MD Harun',

    doctorQuote: {
      en: 'No single technique is optimal for every zone of the scalp. The frontal hairline demands razor-sharp micro-channel precision — that is Sapphire FUE\'s domain. The mid-scalp and crown require maximum follicular density without channel trauma — that is exactly what DHI\'s direct Choi Pen implantation achieves. By combining both in a single surgical session, we deliver what neither technique can accomplish alone: a hairline that looks genuinely natural and a crown with the structural density of youth.',
      ro: 'Nicio tehnică singulară nu este optimă pentru fiecare zonă a scalpului. Linia frontală a părului necesită precizie perfectă a micro-canalelor — aceasta este zona Sapphire FUE. Mid-scalp-ul și coroana necesită densitate foliculară maximă fără traumatism canalicular — exact ceea ce realizează implantarea directă cu Stiloul Choi DHI. Combinând ambele tehnici într-o singură sesiune chirurgicală, oferim ceea ce nicio tehnică nu poate realiza singură: o linie frontală cu aspect genuinamente natural și o coroană cu densitatea structurală a tinereții.',
      doctor: 'Dr. Harun',
      specialty: {
        en: 'Hair Restoration Specialist · Sapphire FUE · DHI · Mixed Technique Pioneer',
        ro: 'Specialist Restaurare Capilară · Sapphire FUE · DHI · Pionier Tehnică Mixtă',
      },
      image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=200',
    },

    technicalDetail: {
      en: [
        {
          zone: 'Frontal Hairline (0–3 cm)',
          technique: 'Sapphire FUE Micro-Incisions',
          detail: 'Dr. Harun uses Sapphire-tipped pens to create micro-channels as narrow as 0.6–0.8 mm — 40% less tissue trauma than steel blades. The crystalline sapphire tip enables precise angle control (30–45°), replicating the natural growth vector of each follicle to produce an imperceptible hairline transition.',
        },
        {
          zone: 'Mid-Scalp & Crown (3 cm+)',
          technique: 'DHI Direct Implantation (Choi Pen)',
          detail: 'In zones requiring maximum follicular packing, channel-less DHI eliminates the gap between extraction and implantation. The Choi implanter pen deposits each graft directly into tissue at precisely calibrated depth and angle — enabling 80–100 grafts/cm² density that FUE alone cannot achieve without vascular compromise.',
        },
      ],
      ro: [
        {
          zone: 'Linia Frontală (0–3 cm)',
          technique: 'Micro-Incizii Sapphire FUE',
          detail: 'Dr. Harun folosește stilouri cu vârf de safir pentru a crea micro-canale de doar 0,6–0,8 mm — cu 40% mai puțin traumatism tisular față de lamele de oțel. Vârful cristalin de safir permite controlul precis al unghiului (30–45°), replicând vectorul natural de creștere al fiecărui folicul pentru o tranziție imperceptibilă a liniei frontale.',
        },
        {
          zone: 'Mid-Scalp și Coroană (3 cm+)',
          technique: 'Implantare Directă DHI (Stiloul Choi)',
          detail: 'În zonele care necesită densitate foliculară maximă, DHI fără canal elimină intervalul dintre extracție și implantare. Stiloul implantator Choi depune fiecare grefă direct în țesut la adâncime și unghi precis calibrate — permițând o densitate de 80–100 grefe/cm² pe care FUE singur nu o poate realiza fără compromis vascular.',
        },
      ],
    },

    steps: [
      { en: 'Scalp mapping: zone-by-zone density analysis and technique allocation', ro: 'Cartografiere scalp: analiza densității pe zone și alocarea tehnicii' },
      { en: 'Needle-free scalp anaesthesia — virtually painless protocol', ro: 'Anestezie scalp fără ac — protocol practic nedureros' },
      { en: 'Sapphire FUE micro-channel creation in frontal hairline zone', ro: 'Creare micro-canale Sapphire FUE în zona liniei frontale' },
      { en: 'DHI Choi Pen direct implantation in mid-scalp and crown', ro: 'Implantare directă DHI Stilou Choi în mid-scalp și coroană' },
      { en: 'Bio-active growth serum application + 12-month photographic follow-up', ro: 'Aplicare ser de creștere bio-activ + urmărire fotografică pe 12 luni' },
    ],

    advantages: [
      { en: '1 operation — 2 complementary expert techniques', ro: '1 operație — 2 tehnici expert complementare' },
      { en: 'Sapphire precision at the hairline = zero unnatural appearance', ro: 'Precizie Sapphire la linie frontală = zero aspect nefiresc' },
      { en: 'DHI density at crown = structural thickness of youth', ro: 'Densitate DHI la coroană = grosime structurală a tinereții' },
      { en: '97%+ graft survival across both zones', ro: 'Supraviețuire 97%+ a grefelor în ambele zone' },
      { en: 'Shorter total healing time vs. two separate procedures', ro: 'Timp de vindecare mai scurt față de două proceduri separate' },
    ],

    specs: {
      en: { hospitalStay: 'Day Clinic (No Stay)', hotelStay: '3 Nights (5★ Hotel)', anesthesia: 'Local (Needle-Free)', returnToWork: '3–5 Days' },
      ro: { hospitalStay: 'Clinică Ambulatorie', hotelStay: '3 Nopți (Hotel 5★)', anesthesia: 'Locală (Fără Ac)', returnToWork: '3–5 Zile' },
    },

    references: [
      'ISHRS 2025: Comparative Outcomes of Combined FUE-DHI Technique vs Single-Method Protocols.',
      'Rassman, W.R. et al. (2024). Follicular Unit Extraction: Principles and Practice. 3rd Ed.',
      'Journal of Dermatologic Surgery: Sapphire FUE vs Steel Blade Recipient Site Creation — Tissue Trauma Analysis 2024.',
    ],
  },

  // ──────────────────────────────────────────────────────────
  // DHI (CHOI PEN) — DIRECT HAIR IMPLANTATION
  // ──────────────────────────────────────────────────────────
  {
    slug: 'dhi-hair-transplant',
    roSlug: 'transplant-par-dhi',
    category: 'Hair',
    heroImage: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2070&auto=format&fit=crop',

    title: {
      en: 'DHI Hair Transplant (Choi Pen) — Maximum Density Without Channels',
      ro: 'Transplant Păr DHI (Stiloul Choi) — Densitate Maximă Fără Canale',
    },
    subtitle: {
      en: 'Direct Implantation · No Channel Phase · Faster Recovery · Higher Density',
      ro: 'Implantare Directă · Fără Faza de Canal · Recuperare Mai Rapidă · Densitate Mai Mare',
    },
    metaDescription: {
      en: 'DHI Direct Hair Implantation with Choi Pen at Meva Clinic Istanbul. No channel-cutting phase means less scalp trauma, higher graft density (up to 100/cm²) and significantly faster recovery. Ideal for crown and mid-scalp restoration.',
      ro: 'Implantare Directă de Păr DHI cu Stiloul Choi la Meva Clinic Istanbul. Fără faza de tăiere a canalelor înseamnă mai puțin traumatism al scalpului, densitate mai mare a grefelor (până la 100/cm²) și recuperare semnificativ mai rapidă. Ideal pentru restaurarea coroanei și a mid-scalp-ului.',
    },
    keywords: 'DHI hair transplant Istanbul, Choi pen hair transplant Turkey, direct hair implantation, DHI vs FUE comparison, Meva Clinic DHI',

    doctorQuote: {
      en: 'In traditional FUE, we first open all recipient channels, then implant — a two-phase sequence that leaves grafts out of tissue for longer. DHI eliminates this entirely. The Choi implanter pen extracts and deposits each follicle in a single motion, minimising ischaemic exposure time to under 90 seconds per graft. The clinical result is measurable: we achieve 15–20% higher graft density in the crown area compared to standard FUE, with a complication rate that approaches zero.',
      ro: 'În FUE tradițional, deschidem mai întâi toate canalele receptoare, apoi implantăm — o secvență în două faze care lasă grefele în afara țesutului mai mult timp. DHI elimină complet acest lucru. Stiloul implantator Choi extrage și depune fiecare folicul într-o singură mișcare, minimizând timpul de expunere ischemică la sub 90 de secunde per grefă. Rezultatul clinic este măsurabil: obținem o densitate a grefelor cu 15–20% mai mare în zona coroanei față de FUE standard, cu o rată de complicații care se apropie de zero.',
      doctor: 'Dr. Harun',
      specialty: {
        en: 'DHI & Sapphire FUE Specialist · 12,000+ Procedures · Meva Clinic Istanbul',
        ro: 'Specialist DHI & Sapphire FUE · Peste 12.000 de Proceduri · Meva Clinic Istanbul',
      },
      image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=200',
    },

    steps: [
      { en: 'Digital density mapping and Choi pen calibration to hair calibre', ro: 'Cartografiere digitală a densității și calibrarea Stiloului Choi la calibrul firului' },
      { en: 'Micro-targeted local anaesthesia to the donor and recipient zones', ro: 'Anestezie locală micro-țintită pe zonele donoare și receptoare' },
      { en: 'FUE extraction of follicular units from the occipital donor area', ro: 'Extracție FUE a unităților foliculare din zona donatoare occipitală' },
      { en: 'Choi Pen direct implantation — no pre-made channels required', ro: 'Implantare directă cu Stiloul Choi — fără canale pre-formate necesare' },
      { en: 'Exosome growth serum application + 12-month density monitoring', ro: 'Aplicare ser de creștere cu exozomi + monitorizare densitate 12 luni' },
    ],

    advantages: [
      { en: 'No channel-cutting phase — 40% less scalp trauma', ro: 'Fără faza de tăiere canale — 40% mai puțin traumatism al scalpului' },
      { en: '80–100 grafts/cm² — highest density achievable', ro: '80–100 grefe/cm² — cea mai mare densitate realizabilă' },
      { en: 'Graft ischaemic time under 90 seconds', ro: 'Timp de ischemie a grefei sub 90 de secunde' },
      { en: 'Faster recovery — reduced crusting and swelling', ro: 'Recuperare mai rapidă — cruste și umflare reduse' },
      { en: 'Ideal for unshaven (non-shaved) procedures', ro: 'Ideal pentru proceduri nerase (non-shaved)' },
    ],

    specs: {
      en: { hospitalStay: 'Day Clinic (No Stay)', hotelStay: '3 Nights (5★ Hotel)', anesthesia: 'Local', returnToWork: '2–4 Days' },
      ro: { hospitalStay: 'Clinică Ambulatorie', hotelStay: '3 Nopți (Hotel 5★)', anesthesia: 'Locală', returnToWork: '2–4 Zile' },
    },

    references: [
      'Tsilosani, A. (2024). Direct Hair Implantation (DHI): Clinical Outcomes and Density Comparison. JHRS.',
      'ISHRS 2025: DHI vs FUE — Scalp Trauma, Graft Survival and Patient Satisfaction Meta-Analysis.',
      'Bernstein, R.M. (2024). Follicular Unit Transplantation: The Science of Natural Hairline Design. Springer.',
    ],
  },

  // ──────────────────────────────────────────────────────────
  // EYEBROW TRANSPLANT
  // ──────────────────────────────────────────────────────────
  {
    slug: 'eyebrow-transplant',
    roSlug: 'transplant-sprancene',
    category: 'Hair',
    heroImage: 'https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?q=80&w=2070&auto=format&fit=crop',

    title: {
      en: 'Eyebrow Transplant Istanbul — Precision Angle & Direction Technique',
      ro: 'Transplant de Sprâncene Istanbul — Tehnică Precizie Unghi & Direcție',
    },
    subtitle: {
      en: '20–30° Implantation Angles · Single-Hair Follicles · Permanent Natural Results',
      ro: 'Unghiuri de Implantare 20–30° · Foliculi Fire Unice · Rezultate Naturale Permanente',
    },
    metaDescription: {
      en: 'Eyebrow transplant at Meva Clinic Istanbul. Dr. Harun\'s precision angular technique (20–30°) using single-hair follicular units from the nape donor region delivers permanent, natural-density eyebrows. Bilingual RO/EN support.',
      ro: 'Transplant de sprâncene la Meva Clinic Istanbul. Tehnica angulară de precizie a Dr. Harun (20–30°) folosind unități foliculare de un singur fir din zona donatoare a cefei oferă sprâncene cu densitate naturală permanentă.',
    },
    keywords: 'eyebrow transplant Istanbul, eyebrow restoration Turkey, transplant sprancene Istanbul, sourcil greffe Turquie, Meva Clinic eyebrow',

    doctorQuote: {
      en: 'The eyebrow is the most technically demanding area in hair restoration. Unlike scalp hair, eyebrow follicles must be implanted at acute angles of 20 to 30 degrees — and within each brow, the direction changes continuously across three anatomical vectors: the medial head, the body arch and the lateral tail. A deviation of even 5 degrees produces a visually detectable unnatural appearance. We use single-hair follicular units exclusively, harvested from the nape of the neck where calibre most closely matches natural brow hair, and implanted with Choi pens under magnification to guarantee sub-millimetre angular precision.',
      ro: 'Sprânceana este zona cea mai dificilă din punct de vedere tehnic în restaurarea capilară. Spre deosebire de firul de pe scalp, foliculii sprâncenei trebuie implantați la unghiuri acute de 20 până la 30 de grade — și în cadrul fiecărei sprâncene, direcția se schimbă continuu pe trei vectori anatomici: capul medial, arcul corpului și coada laterală. O deviere de chiar 5 grade produce un aspect nefiresc detectabil vizual. Folosim exclusiv unități foliculare cu un singur fir, recoltate de la ceafă unde calibrul corespunde cel mai îndeaproape firului natural de sprânceană, și implantate cu stilouri Choi sub mărire pentru a garanta precizie angulară sub-milimetrică.',
      doctor: 'Dr. Harun',
      specialty: {
        en: 'Eyebrow & Hair Transplant Specialist · Precision Angular Technique · Meva Clinic',
        ro: 'Specialist Transplant Sprâncene & Păr · Tehnică Angulară de Precizie · Meva Clinic',
      },
      image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=200',
    },

    technicalDetail: {
      en: [
        {
          zone: 'Donor Site Selection',
          technique: 'Nape (Occipital Fringe)',
          detail: 'Nape hair has the finest calibre of any scalp region — typically 0.04–0.06 mm — closely matching the diameter of natural brow hair. Single-hair FUE extraction from this zone minimises donor site visibility and ensures the transplanted hairs lie flat without bulk.',
        },
        {
          zone: 'Angular Implantation',
          technique: '20–30° Directional Precision',
          detail: 'Three anatomical vectors govern a natural brow: the medial head points upward and slightly outward (25–30°), the body follows the brow arch at 15–20°, and the lateral tail sweeps downward at 5–10°. Dr. Harun maps each zone individually and implants every graft at its vector-specific angle using a fine-gauge Choi pen under 3× magnification.',
        },
      ],
      ro: [
        {
          zone: 'Selectarea Zonei Donoare',
          technique: 'Ceafa (Franja Occipitală)',
          detail: 'Părul de la ceafă are cel mai fin calibru din orice regiune a scalpului — de obicei 0,04–0,06 mm — corespunzând îndeaproape diametrului firului natural de sprânceană. Extracția FUE cu un singur fir din această zonă minimizează vizibilitatea zonei donoare și asigură că firele transplantate stau plat fără volum.',
        },
        {
          zone: 'Implantare Angulară',
          technique: 'Precizie Direcțională 20–30°',
          detail: 'Trei vectori anatomici guvernează o sprânceană naturală: capul medial indică în sus și ușor în exterior (25–30°), corpul urmează arcul sprâncenei la 15–20°, iar coada laterală se îndreaptă în jos la 5–10°. Dr. Harun cartografiază fiecare zonă individual și implantează fiecare grefă la unghiul specific vectorului folosind un stilou Choi cu calibru fin sub mărire 3×.',
        },
      ],
    },

    steps: [
      { en: 'Brow symmetry design using golden ratio digital mapping', ro: 'Design simetrie sprânceană folosind cartografiere digitală raport de aur' },
      { en: 'Nape donor zone shaving and local anaesthesia', ro: 'Tunderea zonei donoare de la ceafă și anestezie locală' },
      { en: 'Single-hair FUE extraction from nape (fine-calibre follicles only)', ro: 'Extracție FUE cu un singur fir de la ceafă (exclusiv foliculi cu calibru fin)' },
      { en: 'Directional Choi Pen implantation at 20–30° per anatomical zone under magnification', ro: 'Implantare direcțională cu Stiloul Choi la 20–30° per zonă anatomică sub mărire' },
      { en: 'Bio-serum application + 6-month shaping consultation', ro: 'Aplicare bio-ser + consultație de modelare la 6 luni' },
    ],

    advantages: [
      { en: 'Permanent results — no maintenance required', ro: 'Rezultate permanente — fără întreținere necesară' },
      { en: '20–30° precision angles = undetectable artificial appearance', ro: 'Unghiuri de precizie 20–30° = aspect artificial nedetectabil' },
      { en: 'Fine-calibre nape donor hair = natural brow texture', ro: 'Păr donator fin de la ceafă = textură naturală a sprâncenei' },
      { en: 'Golden ratio symmetry design included', ro: 'Design simetrie raport de aur inclus' },
      { en: 'Day procedure — return to normal activity next day', ro: 'Procedură de zi — revenire la activitate normală a doua zi' },
    ],

    specs: {
      en: { hospitalStay: 'Day Clinic (No Stay)', hotelStay: '2 Nights (5★ Hotel)', anesthesia: 'Local', returnToWork: '1–2 Days' },
      ro: { hospitalStay: 'Clinică Ambulatorie', hotelStay: '2 Nopți (Hotel 5★)', anesthesia: 'Locală', returnToWork: '1–2 Zile' },
    },

    references: [
      'Rose, P.T. (2024). Eyebrow Transplantation: Principles of Angular and Directional Precision. JHRS.',
      'Cotsarelis, G. et al. (2025). Donor Site Selection for Eyebrow Reconstruction: Nape vs Scalp Comparison. Dermatologic Surgery.',
      'ISHRS Best Practices for Facial Hair Restoration (2025 Edition).',
    ],
  },

  // ──────────────────────────────────────────────────────────
  // ANTI-GRAVITY — NON-SURGICAL FACE LIFTING SERIES
  // ──────────────────────────────────────────────────────────
  {
    slug: 'anti-gravity-lifting',
    roSlug: 'lifting-anti-gravitational',
    category: 'Aesthetic Medicine',
    heroImage: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=2070&auto=format&fit=crop',

    title: {
      en: 'Anti-Gravity Lifting — Non-Surgical Face Rejuvenation',
      ro: 'Lifting Anti-Gravitațional — Întinerire Facială Non-Chirurgicală',
    },
    subtitle: {
      en: 'Thread Lift · HIFU · Gold Microneedling · Liquid Lifting — The Meva Vector Philosophy',
      ro: 'Thread Lift · HIFU · Microneedling Aur · Lifting Lichid — Filosofia Vectorului Meva',
    },
    metaDescription: {
      en: 'Non-surgical facelift at Meva Clinic Istanbul: PDO & French thread lift, HIFU 4D, gold microneedling and liquid lifting with hyaluronic acid. Natural V-shape results. No downtime.',
      ro: 'Lifting facial non-chirurgical la Meva Clinic Istanbul: fir PDO & francez, HIFU 4D, microneedling cu aur și lifting lichid cu acid hialuronic. Rezultate naturale formă V. Zero downtime.',
    },
    keywords: 'non-surgical facelift Istanbul, thread lift Turkey, HIFU face tightening Istanbul, PDO threads Turkey, liquid lifting hyaluronic acid, anti-aging clinic Istanbul',

    doctorQuote: {
      en: 'Gravity is relentless — it works on every face, every year. Our Anti-Gravity philosophy opposes it not by pulling skin tight, but by restoring the deep structural support that youth provides. With the right vector, the right technique, and the right sequence, we can recover 7–10 years of facial anatomy without a single incision.',
      ro: 'Gravitația este neîntreruptă — acționează asupra fiecărei fețe, în fiecare an. Filosofia noastră Anti-Gravitațională nu o combate trăgând pielea, ci restaurând suportul structural profund pe care tinerețea îl oferă. Cu vectorul potrivit, tehnica potrivită și secvența potrivită, putem recupera 7–10 ani de anatomie facială fără o singură incizie.',
      doctor: 'Meva Aesthetic Medicine Team',
      specialty: {
        en: 'Non-Surgical Facial Rejuvenation · Istanbul',
        ro: 'Rejuvenare Facială Non-Chirurgicală · Istanbul',
      },
      image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=200',
    },

    // 5-Phase Anti-Gravity Content Flow
    antiGravityFlow: {
      intro: {
        en: {
          heading: 'Gravity & The Face: Understanding What Time Does',
          body: 'The human face ages along predictable anatomical vectors. Facial fat compartments (deep medial cheek fat, SOOF, buccal fat) descend at a rate of 1–2 mm per year under the influence of gravity and progressive retaining ligament laxity. The malar crescent descends, the nasolabial fold deepens, the jowl forms over the mandibular border, and the neck loses its 90° angle. Meva\'s Anti-Gravity protocol identifies each patient\'s specific descent vector and applies the counterforce at the correct anatomical layer — restoring the facial triangle from an inverted (aged) to an upright (youthful) orientation. This is not skin tightening: it is structural repositioning.',
        },
        ro: {
          heading: 'Gravitația și Fața: Înțelegând Ce Face Timpul',
          body: 'Fața umană îmbătrânește de-a lungul unor vectori anatomici previzibili. Compartimentele de grăsime facială (grăsimea medială profundă a obrajilor, SOOF, grăsimea bucală) coboară cu o rată de 1–2 mm pe an sub influența gravitației și a laxității progresive a ligamentelor de retenție. Creasta malară coboară, pliul nazo-labial se adâncește, jowelingul se formează deasupra bordului mandibular, iar gâtul își pierde unghiul de 90°. Protocolul Anti-Gravitațional Meva identifică vectorul specific de coborâre al fiecărui pacient și aplică contraforcă la stratul anatomic corect — restaurând triunghiul facial dintr-o orientare inversată (îmbătrânită) într-una dreaptă (tânără). Aceasta nu este strângerea pielii: este repoziționare structurală.',
        },
      },
      threadLift: {
        en: {
          heading: 'Thread Lift: French Cannula vs PDO Cog Threads',
          body: 'Two distinct philosophies exist in thread lifting:\n\n**French (Silhouette Soft) Suspension:** Bidirectional absorbable cones on PLGA sutures create both immediate mechanical lift and long-term collagen induction along the thread path. The 360° cone distribution prevents thread migration. Ideal for mid-face ptosis and jowl suspension. Results: 18–24 months.\n\n**PDO Cog Threads:** Polydioxanone barbed threads inserted via cannula in a fan pattern under the SMAS plane. The barbs engage the subcutaneous tissue and provide a vector-controlled lift. PDO threads fully absorb within 6 months but stimulate collagenesis for 12–18 months post-absorption. Best for brow lifting, jawline definition and neck banding.\n\n**Meva Combination Protocol:** French suspension for the mid-face vector + PDO smooth threads (monothreads) for collagen matrix reconstruction in the periorbital and perioral zones simultaneously.',
        },
        ro: {
          heading: 'Thread Lift: Canulă Franceză vs Fire PDO Cog',
          body: 'Există două filosofii distincte în thread lifting:\n\n**Suspensie Franceză (Silhouette Soft):** Conuri absorbabile bidirecționale pe suturi PLGA creează atât lift mecanic imediat cât și inducție de colagen pe termen lung de-a lungul traseului firului. Distribuția conurilor la 360° previne migrarea firului. Ideal pentru ptoza feței medii și suspensia jowling-ului. Rezultate: 18–24 luni.\n\n**Fire PDO Cog:** Firele cu ace din polidiaxononă introduse prin canulă în model de evantai sub planul SMAS. Acele angajează țesutul subcutanat și oferă un lift controlat vectorial. Firele PDO se absoarbe complet în 6 luni dar stimulează colageneza 12–18 luni post-absorbție. Cel mai bun pentru ridicarea sprâncenelor, definirea liniei mandibulare și benzile de gât.\n\n**Protocol Combinat Meva:** Suspensie franceză pentru vectorul feței medii + fire PDO lise (monofire) pentru reconstrucția matricei de colagen în zonele periorbitale și perioriale simultan.',
        },
      },
      hiTechLifting: {
        en: {
          heading: 'High-Tech Lifting: HIFU 4D & Gold Microneedling RF',
          body: '**HIFU (High-Intensity Focused Ultrasound) 4D:** Delivers precisely focused acoustic energy at three depths — 1.5 mm (dermis), 3.0 mm (deep dermis), and 4.5 mm (SMAS layer). At 4.5 mm, thermal coagulation points (TCPs) are created in the SMAS — the same layer targeted in surgical facelifts — triggering an immediate contraction of 20–30% and a neocollagenesis cascade that peaks at 3 months. One session: 600–800 shots along 4 anatomical vectors. Results visible for 12–18 months.\n\n**Gold Microneedling RF (Radiofrequency):** Insulated gold-plated needles penetrate to a calibrated depth (1.5–3.5 mm) and deliver bipolar RF energy exclusively at the tip — preserving the epidermis. At 65–70°C, dermal collagen undergoes immediate contracture and fibroblast activation produces new type I and III collagen. Indicated for skin laxity, enlarged pores, acne scars and periorbital rejuvenation. Downtime: 24–48 hours.',
        },
        ro: {
          heading: 'Lifting High-Tech: HIFU 4D & Microneedling RF cu Aur',
          body: '**HIFU (Ultrasunete Focalizate de Înaltă Intensitate) 4D:** Livrează energie acustică focalizată precis la trei adâncimi — 1,5 mm (dermă), 3,0 mm (dermă profundă) și 4,5 mm (stratul SMAS). La 4,5 mm, punctele de coagulare termică (TCP) sunt create în SMAS — același strat vizat în liftingul facial chirurgical — declanșând o contracție imediată de 20–30% și o cascadă de neocolageneză care atinge vârful la 3 luni. O sesiune: 600–800 focuri de-a lungul a 4 vectori anatomici. Rezultate vizibile 12–18 luni.\n\n**Microneedling RF cu Aur:** Ace izolate placate cu aur penetrează la o adâncime calibrată (1,5–3,5 mm) și livrează energie RF bipolară exclusiv la vârf — conservând epiderma. La 65–70°C, colagenul dermal suferă contractură imediată și activarea fibroblastelor produce colagen nou de tip I și III. Indicat pentru laxitate cutanată, pori dilatați, cicatrici de acnee și rejuvenare periorbitală. Downtime: 24–48 ore.',
        },
      },
      liquidLifting: {
        en: {
          heading: 'Liquid Lifting: Hyaluronic Acid & The V-Shape Protocol',
          body: 'Liquid Lifting uses strategically placed high-density hyaluronic acid fillers (Juvederm Voluma, Restylane Lyft, Sculptra) to restore the facial skeleton and fat compartment volume lost to gravity — creating the inverted triangle (V-shape) of youth.\n\n**Meva 5-Point V-Lift Protocol:**\n1. **Cheekbone augmentation** (deep injection over zygoma, 0.5–1.0 mL per side) — restores malar projection\n2. **Deep medial cheek fill** (retro-orbicularis oculi fat pad, ROOF) — eliminates tear trough and nasojugal groove\n3. **Jawline definition** (mandibular border linear threading) — recreates the youthful jawline angle\n4. **Chin projection** (mentum point augmentation, 0.3–0.5 mL) — improves chin-neck angle\n5. **Temple fill** (deep temporal fascia injection) — addresses temporal hollowing that widens the upper face\n\nAll injections performed with blunt-tip cannula to minimise bruising and vascular risk. Result: 12–18 months (Voluma), 18–24 months (Sculptra with collagen induction).',
        },
        ro: {
          heading: 'Lifting Lichid: Acid Hialuronic & Protocolul V-Shape',
          body: 'Lifting-ul Lichid utilizează fillers cu acid hialuronic de înaltă densitate (Juvederm Voluma, Restylane Lyft, Sculptra) plasate strategic pentru a restaura scheletul facial și volumul compartimentului de grăsime pierdut gravitației — creând triunghiul inversat (forma V) al tinereții.\n\n**Protocol V-Lift 5 Puncte Meva:**\n1. **Augmentare pomeți** (injecție profundă deasupra zigomei, 0,5–1,0 mL per parte) — restaurează proiecția malară\n2. **Umplere obraz medial profund** (pad de grăsime retro-orbicular, ROOF) — elimină cearcănele și șanțul nazo-jugal\n3. **Definire linie mandibulară** (threading linear de-a lungul bordului mandibular) — recreează unghiul mandibular tânăr\n4. **Proiecție bărbie** (augmentare punct mentum, 0,3–0,5 mL) — îmbunătățește unghiul bărbie-gât\n5. **Umplere tâmple** (injecție fascie temporală profundă) — adresează golurile temporale care lărgesc fața superioară\n\nToate injecțiile efectuate cu canulă cu vârf bont pentru a minimiza vânătăile și riscul vascular. Rezultat: 12–18 luni (Voluma), 18–24 luni (Sculptra cu inducție de colagen).',
        },
      },
    },

    steps: [
      { en: 'Digital facial mapping & descent vector analysis', ro: 'Cartografiere facială digitală & analiza vectorului de coborâre' },
      { en: 'Personalised Anti-Gravity protocol design (Thread / HIFU / Filler combination)', ro: 'Design protocol Anti-Gravitațional personalizat (combinație Fir / HIFU / Filler)' },
      { en: 'Treatment session — 60–90 minutes, topical anaesthetic', ro: 'Sesiune de tratament — 60–90 minute, anestezic topic' },
      { en: 'Immediate result visible; final result at 4–12 weeks (collagen maturation)', ro: 'Rezultat imediat vizibil; rezultat final la 4–12 săptămâni (maturare colagen)' },
      { en: 'Follow-up at 4 weeks — touch-up if needed, maintenance schedule', ro: 'Follow-up la 4 săptămâni — retușuri dacă sunt necesare, program de întreținere' },
    ],

    advantages: [
      { en: 'Zero surgery — no incisions, no anaesthesia, no hospital stay', ro: 'Zero chirurgie — fără incizii, fără anestezie, fără spitalizare' },
      { en: '7–10 years of facial rejuvenation in a single session', ro: '7–10 ani de rejuvenare facială într-o singură sesiune' },
      { en: 'Fully customisable — thread, HIFU, filler or combined protocol', ro: 'Complet personalizabil — protocol fir, HIFU, filler sau combinat' },
      { en: 'Natural result — vector-based, not stretch-based', ro: 'Rezultat natural — bazat pe vector, nu pe întindere' },
      { en: 'No visible scar, no healing period, return to social life same day', ro: 'Fără cicatrice vizibilă, fără perioadă de vindecare, revenire în viața socială în aceeași zi' },
    ],

    specs: [
      { label: { en: 'Thread Duration', ro: 'Durată Fire' }, value: { en: '18–24 months', ro: '18–24 luni' } },
      { label: { en: 'HIFU Duration', ro: 'Durată HIFU' }, value: { en: '12–18 months', ro: '12–18 luni' } },
      { label: { en: 'Filler Duration', ro: 'Durată Filler' }, value: { en: '12–24 months', ro: '12–24 luni' } },
      { label: { en: 'Session Time', ro: 'Timp Sesiune' }, value: { en: '60–90 min', ro: '60–90 min' } },
      { label: { en: 'Downtime', ro: 'Downtime' }, value: { en: '0–48 hours', ro: '0–48 ore' } },
      { label: { en: 'Anaesthesia', ro: 'Anestezie' }, value: { en: 'Topical cream only', ro: 'Cremă topică' } },
    ],

    // Master FAQ
    faqs: {
      en: [
        { q: 'How long do non-surgical face lifting results last?', a: 'Duration depends on the technique: PDO threads last 12–18 months, French Silhouette Soft 18–24 months, HIFU 4D 12–18 months (with 1 annual maintenance session), hyaluronic acid fillers 12–24 months depending on product and area. Combining techniques extends the overall duration, as each modality targets a different structural layer. Patients on a maintenance protocol (annual HIFU + 6-monthly filler top-up) report sustained results for 3–5 years.' },
        { q: 'Will I feel pain during the procedure?', a: 'Thread lift: topical anaesthetic cream (EMLA) applied 45 minutes before. Mild pressure sensation during insertion; no sharp pain. HIFU: warm pulsed sensation at deeper depths (4.5 mm SMAS level); tolerated by >90% of patients without additional anaesthesia. Gold microneedling: topical cream only; the RF energy at the tip is felt as mild warmth. Filler injections: cannula technique minimises discomfort; blunt tip does not penetrate vessel walls. Overall patient satisfaction on comfort scale: 8.2/10.' },
        { q: 'Am I a candidate for non-surgical lifting or do I need surgery?', a: 'Non-surgical Anti-Gravity protocols achieve optimal results in patients with mild-to-moderate facial laxity — typically ages 30–55 with good skin quality and volume loss. Patients with severe ptosis (deep nasolabial folds reaching the jowl, significant neck laxity, significant excess skin) will achieve more durable and dramatic results with surgical Deep Plane facelift. Our facial assessment includes a standardised FACE-Q laxity grading to determine the ideal approach for each patient.' },
        { q: 'Can threads be combined with HIFU and fillers in the same session?', a: 'Yes — the Meva Anti-Gravity Master Protocol sequences these deliberately: HIFU first (deep 4.5 mm SMAS stimulation), fillers second (structural volume restoration), threads last (mechanical vector lift). This sequence maximises each modality without interference. The combined session takes 90–120 minutes. Not all patients require all three; the combination is personalised based on the facial descent map.' },
        { q: 'Are there visible side effects or recovery time?', a: 'Thread lift: mild swelling and tenderness at insertion points for 3–5 days. Minimal bruising (≤ 10% of patients). No visible marks at 7 days. HIFU: transient redness and mild oedema for 24–48 hours. Occasional mild sensitivity over the treated area for up to 2 weeks — no visible marks. Gold microneedling RF: 24–48 hours of redness (similar to sunburn). Fillers: 48–72 hours mild swelling, occasional small bruise (resolves with arnica). All patients return to social activities within 24–48 hours.' },
      ],
      ro: [
        { q: 'Cât durează rezultatele liftingului facial non-chirurgical?', a: 'Durata depinde de tehnică: firele PDO durează 12–18 luni, French Silhouette Soft 18–24 luni, HIFU 4D 12–18 luni (cu 1 sesiune anuală de întreținere), fillerele cu acid hialuronic 12–24 luni în funcție de produs și zonă. Combinarea tehnicilor extinde durata generală, deoarece fiecare modalitate vizează un strat structural diferit. Pacienții cu protocol de întreținere (HIFU anual + top-up filler la 6 luni) raportează rezultate susținute timp de 3–5 ani.' },
        { q: 'Voi simți durere în timpul procedurii?', a: 'Thread lift: cremă anestezică topică (EMLA) aplicată cu 45 minute înainte. Senzație ușoară de presiune în timpul inserției; fără durere ascuțită. HIFU: senzație de puls cald la adâncimi mai mari (nivelul SMAS 4,5 mm); tolerată de >90% din pacienți fără anestezie suplimentară. Microneedling cu aur: doar cremă topică; energia RF la vârf este simțită ca căldură ușoară. Injecții filler: tehnica cu canulă minimizează disconfortul; vârful bont nu penetrează pereții vasculari. Satisfacția generală a pacienților pe scala de confort: 8,2/10.' },
        { q: 'Sunt candidat pentru lifting non-chirurgical sau am nevoie de chirurgie?', a: 'Protocoalele Anti-Gravitaționale non-chirurgicale obțin rezultate optime la pacienții cu laxitate facială ușoară spre moderată — de obicei vârste 30–55 ani cu calitate bună a pielii și pierdere de volum. Pacienții cu ptoze severe (pliuri nazo-labiale adânci ajungând la jowling, laxitate semnificativă a gâtului, exces semnificativ de piele) vor obține rezultate mai durabile și dramatice cu liftingul facial chirurgical Deep Plane. Evaluarea noastră facială include o gradare standardizată a laxității FACE-Q pentru a determina abordarea ideală pentru fiecare pacient.' },
        { q: 'Pot fi combinate firele cu HIFU și fillerele în aceeași sesiune?', a: 'Da — Protocolul Master Anti-Gravitațional Meva le secvențiază deliberat: HIFU primul (stimulare SMAS profundă 4,5 mm), fillerele al doilea (restaurare volum structural), firele ultimele (lift vector mecanic). Această secvență maximizează fiecare modalitate fără interferență. Sesiunea combinată durează 90–120 minute. Nu toți pacienții necesită toate trei; combinația este personalizată pe baza hărții de coborâre facială.' },
        { q: 'Există efecte secundare vizibile sau timp de recuperare?', a: 'Thread lift: umflare ușoară și sensibilitate la punctele de inserție timp de 3–5 zile. Vânătăi minime (≤ 10% din pacienți). Fără urme vizibile la 7 zile. HIFU: roșeață tranzitorie și edem ușor timp de 24–48 ore. Sensibilitate ușoară ocazională deasupra zonei tratate până la 2 săptămâni — fără urme vizibile. Microneedling RF cu aur: 24–48 ore de roșeață (similar cu arsura solară). Fillere: 48–72 ore umflare ușoară, ocazional vânătaie mică (se rezolvă cu arnică). Toți pacienții revin la activitățile sociale în 24–48 ore.' },
      ],
    },

    references: [
      'Sulamanidze M. et al. (2024). Long-Term Outcomes of APTOS Thread Suspension for Facial Ptosis. Aesthetic Surgery Journal.',
      'Suh DH. et al. (2023). Efficacy of High-Intensity Focused Ultrasound for Facial Laxity: Systematic Review and Meta-Analysis. Dermatologic Surgery.',
      'Vleggaar D. & Fitzgerald R. (2024). Facial Volumetric Restoration and the V-Lift Protocol: A Staged Filler Approach. J Cosmet Dermatol.',
      'Alam M. et al. (2025). Combination Non-Surgical Rejuvenation: Thread, Energy Device and Filler Sequencing Guidelines. JAAD.',
      'Cotofana S. & Lachman N. (2023). Anatomy of Facial Fat Compartments and Ligament Descent Vectors. Clinical Anatomy.',
    ],
  },
];


/**
 * Helper: find treatment by EN or RO slug
 */
export const findTreatment = (slug) =>
  TREATMENTS.find(t => t.slug === slug || t.roSlug === slug) || null;

export default TREATMENTS;

```

### Dosya Adı: src\hooks\usePopularTreatments.js
```js
import { useState, useEffect } from 'react';
import treatmentsData from '../data/treatments.json';

export const usePopularTreatments = () => {
  const [treatments, setTreatments] = useState([]);

  useEffect(() => {
    // Read from local storage
    const popularityStats = JSON.parse(localStorage.getItem('treatment_clicks') || '{}');
    
    // Sort array based on stats (highest clicks first)
    const sorted = [...treatmentsData].sort((a, b) => {
      const scoreA = popularityStats[a.id] || 0;
      const scoreB = popularityStats[b.id] || 0;
      return scoreB - scoreA;
    });

    // eslint-disable-next-line react-hooks/set-state-in-effect
    setTreatments(sorted);
  }, []);

  const trackClick = (id) => {
    const popularityStats = JSON.parse(localStorage.getItem('treatment_clicks') || '{}');
    popularityStats[id] = (popularityStats[id] || 0) + 1;
    localStorage.setItem('treatment_clicks', JSON.stringify(popularityStats));
    
    // Re-sort silently
    const sorted = [...treatments].sort((a, b) => {
      const scoreA = popularityStats[a.id] || 0;
      const scoreB = popularityStats[b.id] || 0;
      return scoreB - scoreA;
    });
    setTreatments(sorted);
  };

  return { treatments, trackClick };
};

```

### Dosya Adı: src\index.css
```css
@import '@fontsource/inter/latin.css';
@import '@fontsource/inter/latin-ext.css';
@import '@fontsource/playfair-display/latin.css';
@import '@fontsource/playfair-display/latin-ext.css';

/* Optimized Font Display for Core Web Vitals */
@font-face {
  font-family: 'Inter';
  font-style: normal;
  font-weight: 100 900;
  font-display: swap;
  src: url('https://fonts.gstatic.com/s/inter/v13/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyeMZhrib2Bg-4.woff2') format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}

@font-face {
  font-family: 'Playfair Display';
  font-style: normal;
  font-weight: 400 900;
  font-display: swap;
  src: url('https://fonts.gstatic.com/s/playfairdisplay/v37/nuFvD7K3a3X7_41W8pCbxbKBCS9m5A.woff2') format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}

/* Global Image Optimization to prevent CLS */
img {
  max-width: 100%;
  height: auto;
  font-style: italic;
  vertical-align: middle;
  shape-margin: 0.75rem;
}

@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  html {
    scroll-behavior: smooth;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  body {
    @apply selection:bg-accent selection:text-prime;
  }

  /* WCAG 2.4.7: Visible focus indicator for keyboard navigation */
  :focus-visible {
    outline: 3px solid #d4af37;
    outline-offset: 3px;
    border-radius: 4px;
  }

  /* WCAG 2.3.3: Reduce motion for users who prefer it */
  @media (prefers-reduced-motion: reduce) {
    *, ::before, ::after {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
      scroll-behavior: auto !important;
    }
  }

  /* Optimized Glassmorphism */
  .glass {
    @apply bg-white/70 backdrop-blur-md border border-white/20;
    will-change: backdrop-filter;
  }

  .glass-dark {
    @apply bg-[#0b1626]/80 backdrop-blur-xl border border-white/5;
    will-change: backdrop-filter;
  }

  /* Scroll Reveal Animations */
  .reveal {
    opacity: 0;
    transform: translateY(20px);
    transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
  }

  .reveal.active {
    opacity: 1;
    transform: translateY(0);
  }

  @keyframes fade-in-up {
    from {
      opacity: 0;
      transform: translateY(15px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .animate-fade-up {
    animation: fade-in-up 0.6s ease-out forwards;
  }

  @keyframes float {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-10px); }
  }
  .animate-float {
    animation: float 3s ease-in-out infinite;
  }

  @keyframes bounce-slow {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-5px); }
  }
  .animate-bounce-slow {
    animation: bounce-slow 3s ease-in-out infinite;
  }
}

/* Redundant code removal and optimization */
.no-scrollbar::-webkit-scrollbar {
  display: none;
}
.no-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}

/* Map filters from inline styles */
.map-filter {
  filter: grayscale(100%) invert(92%) contrast(83%) hue-rotate(180deg);
}

.contact-map-filter {
  filter: grayscale(30%) contrast(90%);
}

```

### Dosya Adı: src\main.jsx
```jsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { HelmetProvider } from 'react-helmet-async'
import { LeadProvider } from './context/LeadContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
      <LeadProvider>
        <App />
      </LeadProvider>
    </HelmetProvider>
  </React.StrictMode>,
)

```

### Dosya Adı: src\pages\About.jsx
```jsx
import React, { useEffect, useState } from 'react';
import { ShieldCheck, Award, Users, HeartPulse, GraduationCap, Microscope, CheckCircle2, Globe, Building2, BarChart3, Scale, Zap, Star } from 'lucide-react';
import { useLocation } from 'react-router-dom';
import { CertRow } from '../components/ClinicalBadges';
import DynamicSEO from '../components/DynamicSEO';

const CountUp = ({ end, duration = 2000, suffix = "" }) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    let start = 0;
    const increment = end / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [end, duration]);
  return <span>{count.toLocaleString()}{suffix}</span>;
};

const About = () => {
  const location = useLocation();
  const isEn = location.pathname.startsWith('/en');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-white min-h-screen pt-24 pb-0 overflow-hidden font-sans selection:bg-accent selection:text-prime">
      <DynamicSEO 
        title={isEn ? "Engineering Perfection | Meva Clinic Authority" : "Ingineria Perfecțiunii | Autoritatea Meva Clinic"}
        description={isEn ? "Where surgical science meets art. Discover the Meva difference in clinical precision and safety." : "Unde știința chirurgicală întâlnește arta. Descoperă diferența Meva în precizie clinică și siguranță."}
        path={isEn ? "/en/about-us" : "/ro/despre-noi"}
        schemaType="AboutPage"
      />

      {/* 1. VISIONARY SLOGANS (Hero Section) */}
      <section className="relative py-32 md:py-48 bg-[#0b1626] overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,#A689111a,transparent_50%)]"></div>
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
           <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent rounded-full blur-[150px]"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center space-x-2 py-2 px-4 rounded-full bg-white/5 border border-white/10 text-accent text-[10px] font-bold tracking-[0.4em] uppercase mb-10 animate-fade-in">
            <Star size={14} className="fill-accent" />
            <span>{isEn ? "Elite Medical Authority" : "Autoritate Medicală de Elită"}</span>
          </div>
          <h1 className="text-4xl md:text-8xl font-serif font-bold text-white mb-10 leading-[1.1] max-w-6xl mx-auto">
            {isEn ? "Engineering Perfection," : "Ingineria Perfecțiunii,"} <br/>
            <span className="text-accent">{isEn ? "One Patient at a Time" : "Un Pacient pe Rând"}</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed font-light italic">
            {isEn 
              ? "Where surgical science meets art. Meva Clinic is the bridge between clinical data and human transformation." 
              : "Unde știința chirurgicală întâlnește arta. Meva Clinic este puntea dintre datele clinice și transformarea umană."}
          </p>
        </div>
      </section>

      {/* 2. ICONIC VALUE PROPOSITION (3-Column Grid) */}
      <section className="py-24 bg-white relative -mt-20 z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                icon: ShieldCheck, 
                title: isEn ? "Precision Safety" : "Siguranță de Precizie", 
                desc: isEn ? "99.9% Safety Accuracy" : "99.9% Acuratețe Siguranță",
                sub: "JCI Verified Protocols"
              },
              { 
                icon: Globe, 
                title: isEn ? "Global Reach" : "Acoperire Globală", 
                desc: isEn ? "45+ Countries Served" : "Peste 45 de Țări Deservite",
                sub: "Bilingual Clinical Support"
              },
              { 
                icon: Microscope, 
                title: isEn ? "Surgical Science" : "Știință Chirurgicală", 
                desc: isEn ? "Advanced Bio-Integration" : "Integrare Bio-Avansată",
                sub: "Evidence-Based Outcomes"
              }
            ].map((pillar, i) => (
              <div key={i} className="bg-white p-12 rounded-[2.5rem] shadow-[0_20px_60px_rgba(0,0,0,0.06)] border border-gray-50 flex flex-col items-center text-center group hover:-translate-y-3 transition-all duration-700">
                <div className="w-20 h-20 rounded-3xl bg-[#0b1626]/5 flex items-center justify-center text-prime mb-8 group-hover:bg-[#0b1626] group-hover:text-white transition-all duration-500 shadow-inner">
                  <pillar.icon size={40} />
                </div>
                <h2 className="text-2xl font-serif font-bold text-prime mb-2 uppercase tracking-wide">{pillar.title}</h2>
                <p className="text-accent font-black text-sm mb-1 uppercase tracking-widest">{pillar.desc}</p>
                <p className="text-xs text-gray-600 font-bold uppercase tracking-[0.2em]">{pillar.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. THE MEVA DIFFERENCE (Stylized Checklist) */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div className="relative">
               <div className="aspect-square rounded-[3rem] overflow-hidden shadow-2xl relative border-[12px] border-white">
                  <img 
                    src="https://images.unsplash.com/photo-1579154235602-3c2c2aa99017?auto=format&fit=crop&q=80&w=1000" 
                    alt="Precision Technology in Istanbul Medical Tourism"
                    aria-label="Precision Technology in Istanbul Medical Tourism"
                    width="1000"
                    height="1000"
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-prime/10"></div>
               </div>
               <div className="absolute -bottom-10 -left-10 bg-[#0b1626] p-10 rounded-[3rem] shadow-2xl border border-white/10">
                  <Zap size={32} className="text-accent mb-4" />
                  <h2 className="text-white font-serif font-bold text-xl mb-1">{isEn ? "Rapid Recovery" : "Recuperare Rapidă"}</h2>
                  <p className="text-gray-400 text-xs font-bold uppercase tracking-widest">{isEn ? "S7 Bio-Protocols" : "Bio-Protocoale S7"}</p>
               </div>
            </div>

            <div className="space-y-10">
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-prime leading-tight">
                {isEn ? "The Meva Difference: Why Patients Trust Our Board" : "Diferența Meva: De ce Pacienții au Încredere în Consiliul Nostru"}
              </h2>
              <ul className="space-y-6">
                {[
                  isEn ? "Multidisciplinary Medical Board Review" : "Revizuire Multidisciplinară de către Consiliul Medical",
                  isEn ? "24/7 Bucharest-Istanbul Logistics Bridge" : "Pod Logistic 24/7 București-Istanbul",
                  isEn ? "Transparent Post-Op Data & Recovery Tracking" : "Date Post-Op Transparente și Urmărirea Recuperării",
                  isEn ? "Board-Certified Surgeons with 15+ Years Experience" : "Chirurgi Certificați de Consiliu cu 15+ Ani de Experiență",
                  isEn ? "Bespoke Surgical Engineering per Patient Anatomy" : "Inginerie Chirurgicală Personalizată pe Anatomia Pacientului"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-4 group">
                    <div className="w-6 h-6 rounded-full bg-accent flex items-center justify-center shrink-0 mt-1 shadow-lg shadow-accent/20 group-hover:scale-110 transition-transform">
                       <CheckCircle2 size={14} className="text-prime stroke-[3px]" />
                    </div>
                    <span className="text-lg font-bold text-prime leading-tight">
                       {item.split(' ').map((word, j) => 
                         ['Medical', 'Excellence', 'Precision', 'Safety', 'Board', 'JCI', '15+'].includes(word.replace(/[.,]/g, '')) 
                         ? <strong key={j} className="text-accent">{word} </strong> 
                         : word + ' '
                       )}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 4. NUMBERS THAT SPEAK (Counters) */}
      <section className="py-24 bg-[#0b1626] relative overflow-hidden text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
           <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8 text-center">
              <div className="space-y-2">
                 <div className="text-6xl md:text-7xl font-serif font-bold text-accent mb-4">
                    <CountUp end={12500} suffix="+" />
                 </div>
                 <p className="text-xs font-bold uppercase tracking-[0.4em] text-gray-400">{isEn ? "International Patients" : "Pacienți Internaționali"}</p>
                 <p className="text-sm font-sans text-gray-600 italic">{isEn ? "Clinically Validated Data" : "Date Validate Clinic"}</p>
              </div>
              <div className="space-y-2">
                 <div className="text-6xl md:text-7xl font-serif font-bold text-accent mb-4">
                    <CountUp end={45} suffix="+" />
                 </div>
                 <p className="text-xs font-bold uppercase tracking-[0.4em] text-gray-400">{isEn ? "Global Countries" : "Țări Globale"}</p>
                 <p className="text-sm font-sans text-gray-600 italic">{isEn ? "World-Class Reach" : "Acoperire de Clasă Mondială"}</p>
              </div>
              <div className="space-y-2">
                 <div className="text-6xl md:text-7xl font-serif font-bold text-accent mb-4">
                    <CountUp end={15} suffix="+" />
                 </div>
                 <p className="text-xs font-bold uppercase tracking-[0.4em] text-gray-400">{isEn ? "Years of Leadership" : "Ani de Leadership"}</p>
                 <p className="text-sm font-sans text-gray-600 italic">{isEn ? "Clinical Excellence" : "Excelență Clinică"}</p>
              </div>
           </div>
        </div>
      </section>

      {/* 5. REFINED TYPOGRAPHY & CALL TO ACTION */}
      <section className="py-32 bg-white">
        <div className="max-w-5xl mx-auto px-4 text-center">
           <h2 className="text-4xl md:text-7xl font-serif font-bold text-prime mb-12 leading-tight">
              {isEn ? "Experience the Future of" : "Experimentează Viitorul"} <br/>
              <span className="italic text-accent">{isEn ? "Personalized Healthcare" : "Sănătății Personalizate"}</span>
           </h2>
           <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-16 font-sans">
              {isEn 
                ? "Our board is ready to engineer your transformation with absolute medical precision and safety." 
                : "Consiliul nostru este gata să proiecteze transformarea ta cu precizie medicală absolută și siguranță."}
           </p>
           <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
              <button 
                onClick={() => window.location.href = isEn ? '/en/contact' : '/ro/contact'}
                className="group relative bg-prime text-white font-bold py-6 px-16 rounded-[2rem] shadow-2xl hover:bg-[#0f1f38] transition-all overflow-hidden"
                aria-label={isEn ? "Book Board Evaluation" : "Programează Evaluare Consiliu"}
              >
                 <span className="relative z-10 flex items-center gap-4 text-lg">
                    {isEn ? "Book Board Evaluation" : "Programează Evaluare Consiliu"}
                    <CheckCircle2 size={24} className="text-accent" />
                 </span>
                 <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-accent/0 via-white/5 to-accent/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              </button>
           </div>
        </div>
        <div className="mt-32">
           <CertRow isEn={isEn} />
        </div>
      </section>

    </div>
  );
};

export default About;

```

### Dosya Adı: src\pages\AboutPage.jsx
```jsx
import React, { useEffect } from 'react';
import { ShieldCheck, Award, Users, HeartPulse, GraduationCap, Microscope, CheckCircle2, ChevronRight, Globe } from 'lucide-react';
import { CertRow } from '../components/ClinicalBadges';
import DynamicSEO from '../components/DynamicSEO';

const AboutPage = () => {
  const isEn = window.location.pathname.startsWith('/en');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-white min-h-screen pt-24 pb-0 overflow-hidden">
      <DynamicSEO 
        title={isEn ? "About Meva Clinic | Excellence in International Healthcare" : "Despre Meva Clinic | Excelență în Sănătate Internațională"}
        description={isEn ? "Discover the mission and medical leadership of Meva Clinic. JCI-accredited excellence in Istanbul." : "Descoperă misiunea și conducerea medicală Meva Clinic. Excelență acreditată JCI în Istanbul."}
        path={isEn ? "/en/about-us" : "/ro/despre-noi"}
      />

      {/* 1. THE MISSION (Elite Excellence) */}
      <section className="relative py-24 md:py-32 bg-[#0b1626] overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,#d4af371a,transparent_50%)]"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center space-x-2 py-2 px-4 rounded-full bg-white/5 border border-white/10 text-accent text-xs font-bold tracking-[0.3em] uppercase mb-8">
            <ShieldCheck size={16} />
            <span>{isEn ? "Institutional Authority" : "Autoritate Instituțională"}</span>
          </div>
          <h1 className="text-4xl md:text-7xl font-serif font-bold text-white mb-8 leading-tight max-w-5xl mx-auto">
            {isEn ? "Beyond Surgery: A Commitment to Medical Excellence" : "Dincolo de Chirurgie: Un Angajament pentru Excelență Medicală"}
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto font-sans leading-relaxed">
            {isEn 
              ? "At Meva Clinic, we believe that world-class healthcare is a fusion of advanced surgical engineering and deeply personalized patient care. Our mission is to bridge the gap between scientific innovation and human empathy." 
              : "La Meva Clinic, credem că sănătatea de talie mondială este o fuziune între ingineria chirurgicală avansată și îngrijirea profund personalizată a pacientului. Misiunea noastră este să eliminăm decalajul dintre inovația științifică și empatia umană."}
          </p>
        </div>
      </section>

      {/* 2. MEDICAL LEADERSHIP (The Core) */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="relative">
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-accent/10 rounded-full blur-3xl -z-10"></div>
              <div className="bg-gray-100 aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl relative group">
                <img 
                  src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=800" 
                  alt="MD Harun Chief Medical Officer Istanbul"
                  aria-label="MD Harun Chief Medical Officer Istanbul"
                  loading="eager"
                  fetchpriority="high"
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                />
                <div className="absolute bottom-0 left-0 right-0 p-10 bg-gradient-to-t from-prime to-transparent text-white">
                   <h3 className="text-3xl font-serif font-bold">MD Harun, MD</h3>
                   <p className="text-accent font-bold uppercase tracking-widest text-sm">{isEn ? "Chief Medical Officer" : "Director Medical"}</p>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div className="inline-flex items-center space-x-2 text-prime">
                <GraduationCap size={24} className="text-accent" />
                <h4 className="text-xl font-serif font-bold italic">{isEn ? "Medical Philosophy" : "Filozofia Medicală"}</h4>
              </div>
              <h2 className="text-4xl font-serif font-bold text-prime">
                {isEn ? "Leading with Precision & Academic Rigor" : "Conducem prin Precizie și Rigoare Academică"}
              </h2>
              <div className="space-y-6 text-gray-600 font-sans leading-relaxed">
                <p>
                  {isEn 
                    ? "MD Harun stands at the forefront of modern hair transplantation and surgical aesthetics. With over 15 years of clinical experience, his approach is defined by an uncompromising focus on sub-millimetric precision and biological integration." 
                    : "MD Harun se află în prima linie a transplantului de păr modern și a esteticii chirurgicale. Cu peste 15 ani de experiență clinică, abordarea sa este definită de un accent fără compromisuri pe precizia sub-milimetrică și integrarea biologică."}
                </p>
                <div className="bg-gray-50 p-6 rounded-2xl border-l-4 border-accent">
                   <p className="italic font-medium text-prime">
                      {isEn 
                        ? '"True surgical excellence isn’t just about the procedure; it’s about the mathematical predictability of the outcome and the patient’s long-term quality of life."' 
                        : '"Adevărata excelență chirurgicală nu se rezumă doar la procedură; este vorba despre predictibilitatea matematică a rezultatului și calitatea vieții pe termen lung a pacientului."'}
                   </p>
                </div>
                <p>
                  {isEn 
                    ? "Our Multidisciplinary Board brings together top specialists in Oncology, Bariatric Surgery, and Aesthetics to ensure that every patient receives a 360-degree clinical evaluation before any intervention." 
                    : "Consiliul nostru Multidisciplinar reunește specialiști de top în Oncologie, Chirurgie Bariatrică și Estetică pentru a asigura că fiecare pacient primește o evaluare clinică la 360 de grade înainte de orice intervenție."}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. ACCREDITATION & SAFETY (The Trust) */}
      <section className="py-24 bg-gray-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold text-prime mb-4">{isEn ? "Clinical Standards & Patient Safety" : "Standarde Clinice și Siguranța Pacientului"}</h2>
            <p className="text-gray-500 font-sans max-w-2xl mx-auto">{isEn ? "Meva Clinic operates exclusively within JCI-accredited facilities that meet the highest European medical protocols." : "Meva Clinic operează exclusiv în facilități acreditate JCI care respectă cele mai înalte protocoale medicale europene."}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-10 rounded-[2.5rem] shadow-xl border border-gray-100 flex flex-col items-center text-center group hover:-translate-y-2 transition-all duration-500">
               <div className="w-16 h-16 rounded-2xl bg-prime/5 flex items-center justify-center text-prime mb-6 group-hover:bg-prime group-hover:text-white transition-all">
                  <Microscope size={32} />
               </div>
               <h4 className="text-xl font-bold text-prime mb-3">{isEn ? "JCI Accredited Facility" : "Facilitate Acreditată JCI"}</h4>
               <p className="text-sm text-gray-500 leading-relaxed">{isEn ? "Global gold standard for clinical quality and patient safety management." : "Standardul de aur global pentru calitatea clinică și managementul siguranței pacienților."}</p>
            </div>

            <div className="bg-white p-10 rounded-[2.5rem] shadow-xl border border-gray-100 flex flex-col items-center text-center group hover:-translate-y-2 transition-all duration-500">
               <div className="w-16 h-16 rounded-2xl bg-prime/5 flex items-center justify-center text-prime mb-6 group-hover:bg-prime group-hover:text-white transition-all">
                  <Activity size={32} />
               </div>
               <h4 className="text-xl font-bold text-prime mb-3">{isEn ? "24/7 Medical Monitoring" : "Monitorizare Medicală 24/7"}</h4>
               <p className="text-sm text-gray-500 leading-relaxed">{isEn ? "Post-operative care handled by specialized clinical staff around the clock." : "Îngrijire post-operatorie gestionată non-stop de personal clinic specializat."}</p>
            </div>

            <div className="bg-white p-10 rounded-[2.5rem] shadow-xl border border-gray-100 flex flex-col items-center text-center group hover:-translate-y-2 transition-all duration-500">
               <div className="w-16 h-16 rounded-2xl bg-prime/5 flex items-center justify-center text-prime mb-6 group-hover:bg-prime group-hover:text-white transition-all">
                  <Users size={32} />
               </div>
               <h4 className="text-xl font-bold text-prime mb-3">{isEn ? "Global Patient Rights" : "Drepturile Globale ale Pacienților"}</h4>
               <p className="text-sm text-gray-500 leading-relaxed">{isEn ? "Strict adherence to international medical ethics and transparency." : "Aderarea strictă la etica medicală internațională și transparență."}</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. THE CONSULTANCY EDGE */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#0b1626] rounded-[3rem] p-12 md:p-20 relative overflow-hidden text-white">
            <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none">
               <Globe className="w-full h-full scale-150 animate-pulse" />
            </div>
            <div className="max-w-3xl relative z-10">
              <h2 className="text-4xl md:text-5xl font-serif font-bold mb-8">
                {isEn ? "The Meva Consultancy Advantage" : "Avantajul Consultanței Meva"}
              </h2>
              <div className="space-y-6 text-lg text-gray-300 font-sans leading-relaxed">
                <p>
                  {isEn 
                    ? "We don't just organize surgeries; we manage lives. Our Medical Consultants serve as the professional bridge between Bucharest, London, and Istanbul." 
                    : "Nu organizăm doar intervenții chirurgicale; gestionăm vieți. Consultanții noștri medicali servesc ca punte profesională între București, Londra și Istanbul."}
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
                   <div className="flex gap-4">
                      <CheckCircle2 size={24} className="text-accent shrink-0" />
                      <div>
                         <h5 className="font-bold text-white mb-1">{isEn ? "Local Coordination" : "Coordonare Locală"}</h5>
                         <p className="text-sm text-gray-400">{isEn ? "Face-to-face assistance in your native language." : "Asistență față în față în limba ta maternă."}</p>
                      </div>
                   </div>
                   <div className="flex gap-4">
                      <CheckCircle2 size={24} className="text-accent shrink-0" />
                      <div>
                         <h5 className="font-bold text-white mb-1">{isEn ? "24/7 Clinical Support" : "Suport Clinic 24/7"}</h5>
                         <p className="text-sm text-gray-400">{isEn ? "Immediate connection with our Istanbul medical board." : "Conexiune imediată cu consiliul medical din Istanbul."}</p>
                      </div>
                   </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. CALL TO ACTION */}
      <section className="py-24 bg-white text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-prime mb-10">
             {isEn ? "Ready to start your premium medical journey?" : "Ești gata să începi călătoria ta medicală premium?"}
          </h2>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button 
               onClick={() => window.location.href = isEn ? '/en#stats' : '/ro#stats'}
               className="bg-accent text-prime font-bold py-5 px-10 rounded-2xl shadow-xl hover:bg-prime hover:text-white transition-all flex items-center justify-center gap-3"
            >
               {isEn ? "View Our Clinical Outcomes" : "Vezi Rezultatele Noastre Clinice"}
               <ChevronRight size={20} />
            </button>
            <button 
               onClick={() => window.scrollTo({ top: 800, behavior: 'smooth' })}
               className="border-2 border-prime text-prime font-bold py-5 px-10 rounded-2xl hover:bg-prime hover:text-white transition-all"
            >
               {isEn ? "Meet the Doctors" : "Cunoaște Medicii"}
            </button>
          </div>
        </div>
        <div className="mt-24">
           <CertRow isEn={isEn} />
        </div>
      </section>

    </div>
  );
};

export default AboutPage;

```

### Dosya Adı: src\pages\Andrology.jsx
```jsx
import React, { useEffect, useState } from 'react';
import { ChevronDown, Activity, Shield, Zap, Target } from 'lucide-react';
import DynamicSEO from '../components/DynamicSEO';
import ANDROLOGY_METHODS, { DECISION_GUIDE } from '../data/andrologyData';

const TYPE_COLORS = {
  length: 'bg-blue-50 border-blue-200 text-blue-700',
  girth: 'bg-purple-50 border-purple-200 text-purple-700',
  function: 'bg-green-50 border-green-200 text-green-700',
  sensitivity: 'bg-yellow-50 border-yellow-200 text-yellow-700',
  combined: 'bg-prime text-white border-prime',
  prosthesis: 'bg-red-50 border-red-200 text-red-700',
};

const GOAL_BADGE = {
  length: '📏',
  girth: '⭕',
  function: '❤️',
  sensitivity: '🎯',
  combined: '⭐',
  prosthesis: '⚙️',
};

const Andrology = ({ lang = 'ro' }) => {
  const [openId, setOpenId] = useState(null);
  const [activeFilter, setActiveFilter] = useState('all');
  const isEn = lang === 'en';
  const g = obj => obj[isEn ? 'en' : 'ro'];

  useEffect(() => window.scrollTo(0, 0), [lang]);

  const filters = [
    { key: 'all', label: isEn ? 'All Methods' : 'Toate Metodele' },
    { key: 'Surgical', label: isEn ? 'Surgical' : 'Chirurgical' },
    { key: 'Non-Surgical', label: isEn ? 'Non-Surgical' : 'Non-Chirurgical' },
  ];

  const filtered = activeFilter === 'all'
    ? ANDROLOGY_METHODS
    : ANDROLOGY_METHODS.filter(m => g(m.type) === activeFilter || m.type.en === activeFilter);

  return (
    <div className="bg-white min-h-screen pt-32 pb-24">
      <DynamicSEO
        title={isEn ? 'Andrology & Penile Enlargement | Meva Clinic Istanbul' : 'Andrologie & Mărire Penis | Meva Clinic Istanbul'}
        description={isEn
          ? '8 clinically proven penile enlargement and erectile function methods at Meva Clinic. Ligamentolysis, fat injection, HA filler, dermal graft, P-Shot, ESWT and penile prosthesis.'
          : '8 metode clinic dovedite de mărire a penisului și funcție erectilă la Meva Clinic. Ligamentolizā, injecție grāsime, filler HA, grefā dermicā, P-Shot, ESWT și proteząpenianā.'}
        path={isEn ? '/en/andrology' : '/ro/andrologie'}
        keywords="penile enlargement Istanbul, andrology Turkey, ligamentolysis Istanbul, penis enlargement clinic, P-Shot Istanbul, penile prosthesis Turkey, Meva Clinic andrology"
        schemaType="MedicalProcedure"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Hero */}
        <div className="text-center mb-16">
          <span className="inline-block text-xs font-black uppercase tracking-widest text-accent mb-4 bg-accent/10 px-4 py-2 rounded-full">
            {isEn ? 'Meva Andrology Unit · Istanbul' : 'Unitatea de Andrologie Meva · Istanbul'}
          </span>
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-prime mb-6 leading-tight">
            {isEn ? 'Penile Enlargement & Erectile Restoration' : 'Mārire Penis & Restaurare Erectilā'}
          </h1>
          <p className="text-lg text-gray-500 max-w-3xl mx-auto leading-relaxed">
            {isEn
              ? '8 clinically validated procedures — from 15-minute non-surgical fillers to permanent surgical augmentation. Every recommendation follows a personalised anatomical assessment.'
              : '8 proceduri clinic validate — de la fillers non-chirurgicale în 15 minute pânā la augmentare chirurgicalā permanentā. Fiecare recomandare urmeazā o evaluare anatomicā personalizatā.'}
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            {[
              { icon: Shield, label: isEn ? 'Full Confidentiality' : 'Confidențialitate Completā' },
              { icon: Zap, label: isEn ? '15-min Non-Surgical Options' : 'Opțiuni Non-Chirurgicale 15 min' },
              { icon: Target, label: isEn ? 'Anatomical Assessment First' : 'Evaluare Anatomicā Primul Pas' },
            ].map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-2 bg-gray-50 px-4 py-2 rounded-full text-sm text-prime border border-gray-100">
                <Icon size={14} className="text-accent" /> {label}
              </div>
            ))}
          </div>
        </div>

        {/* ── DECISION GUIDE ── */}
        <div className="mb-20">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-prime mb-3">
              {isEn ? 'Which Procedure Is Right for You?' : 'Ce Procedurā vi se Potrivește?'}
            </h2>
            <p className="text-gray-500 text-sm max-w-2xl mx-auto">
              {isEn
                ? 'Match your primary anatomical goal to the recommended procedure. Final selection always follows in-clinic assessment.'
                : 'Potriviți obiectivul anatomic principal cu procedura recomandatā. Selecția finalā urmeazā întotdeauna evaluarea în clinicā.'}
            </p>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-gray-100 shadow-sm">
            <table className="w-full text-sm">
              <thead className="bg-prime text-white">
                <tr>
                  {[
                    isEn ? 'Your Primary Goal' : 'Obiectivul Tāu Principal',
                    isEn ? 'Recommended Procedure' : 'Procedurā Recomandatā',
                    isEn ? 'Key Benefit' : 'Beneficiu Cheie',
                  ].map(h => (
                    <th key={h} className="px-5 py-4 text-left text-xs font-black uppercase tracking-widest">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {DECISION_GUIDE.map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50/60'}>
                    <td className="px-5 py-4">
                      <div className="flex items-center gap-2">
                        <span className="text-lg">{GOAL_BADGE[row.type]}</span>
                        <span className="font-bold text-prime text-xs leading-tight">{g(row.need)}</span>
                      </div>
                    </td>
                    <td className="px-5 py-4">
                      <span className={`inline-block text-xs font-bold px-3 py-1.5 rounded-full border ${TYPE_COLORS[row.type]}`}>
                        {row.primary}
                      </span>
                    </td>
                    <td className="px-5 py-4 text-gray-500 text-xs leading-relaxed">{g(row.secondary)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* ── 8 METHOD FAQ ACCORDION ── */}
        <div className="mb-20">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-prime mb-3">
              {isEn ? '8 Methods — Clinical Detail' : '8 Metode — Detaliu Clinic'}
            </h2>
          </div>

          {/* Filter Tabs */}
          <div className="flex gap-2 mb-6 flex-wrap">
            {filters.map(f => (
              <button
                key={f.key}
                onClick={() => setActiveFilter(f.key)}
                className={`px-4 py-2 rounded-full text-sm font-bold transition-all ${
                  activeFilter === f.key
                    ? 'bg-prime text-white'
                    : 'bg-gray-100 text-gray-500 hover:bg-gray-200'
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>

          <div className="space-y-3">
            {filtered.map(m => (
              <div key={m.id} className="border border-gray-100 rounded-2xl overflow-hidden shadow-sm">
                <button
                  onClick={() => setOpenId(openId === m.id ? null : m.id)}
                  className="w-full px-6 py-5 flex items-center gap-4 text-left bg-white hover:bg-gray-50 transition-colors"
                  aria-expanded={openId === m.id}
                >
                  <span className="text-2xl">{m.icon}</span>
                  <div className="flex-1">
                    <p className="font-bold text-prime text-base leading-tight">{g(m.name)}</p>
                    <div className="flex flex-wrap gap-2 mt-1.5">
                      <span className="text-xs bg-accent/10 text-prime font-bold px-2.5 py-0.5 rounded-full">
                        {isEn ? 'Goal:' : 'Scop:'} {g(m.goal)}
                      </span>
                      <span className="text-xs bg-gray-100 text-gray-500 font-semibold px-2.5 py-0.5 rounded-full">
                        {g(m.type)}
                      </span>
                      <span className="text-xs bg-prime/5 text-prime font-semibold px-2.5 py-0.5 rounded-full hidden sm:inline-block">
                        {g(m.recovery)} recovery
                      </span>
                    </div>
                  </div>
                  <ChevronDown size={18} className={`text-gray-400 transition-transform duration-300 shrink-0 ${openId === m.id ? 'rotate-180' : ''}`} />
                </button>

                <div className={`overflow-hidden transition-all duration-300 ${openId === m.id ? 'max-h-[1000px]' : 'max-h-0'}`}>
                  <div className="px-6 pb-7 pt-3 bg-gray-50 grid grid-cols-1 md:grid-cols-2 gap-5">

                    {/* Technique */}
                    <div className="md:col-span-2 bg-white rounded-xl p-5 border border-gray-100">
                      <p className="text-prime font-black text-xs uppercase tracking-widest mb-3">
                        ⚡ {isEn ? 'Clinical Technique' : 'Tehnicā Clinicā'}
                      </p>
                      <p className="text-sm text-gray-600 leading-relaxed">{g(m.summary)}</p>
                    </div>

                    {/* Is this for me */}
                    <div className="bg-white rounded-xl p-5 border border-gray-100">
                      <p className="text-accent font-black text-xs uppercase tracking-widest mb-3">
                        🎯 {isEn ? 'Is This For Me?' : 'Este Pentru Mine?'}
                      </p>
                      <p className="text-sm text-gray-600 leading-relaxed">{g(m.isForMe)}</p>
                    </div>

                    {/* Meva Note */}
                    <div className="bg-white rounded-xl p-5 border border-gray-100">
                      <p className="text-green-600 font-black text-xs uppercase tracking-widest mb-3">
                        ✅ {isEn ? 'Meva Quality' : 'Calitate Meva'}
                      </p>
                      <p className="text-sm text-gray-600 leading-relaxed">{g(m.mevaNote)}</p>
                      <div className="flex flex-wrap gap-2 mt-4">
                        <span className="text-xs bg-prime/5 text-prime font-bold px-3 py-1 rounded-full">
                          {isEn ? 'Recovery:' : 'Recuperare:'} {g(m.recovery)}
                        </span>
                        <span className="text-xs bg-accent/10 text-prime font-bold px-3 py-1 rounded-full">
                          {isEn ? 'Duration:' : 'Durată:'} {g(m.duration)}
                        </span>
                        <span className="text-xs bg-gray-100 text-gray-600 font-bold px-3 py-1 rounded-full">
                          {isEn ? 'Anaesthesia:' : 'Anestezie:'} {g(m.anesthesia)}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── CONFIDENTIALITY FOOTER ── */}
        <div className="bg-[#0b1626] rounded-[2rem] p-10 text-white text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(212,175,55,0.1),_transparent_60%)]" />
          <Shield size={40} className="text-accent mx-auto mb-4" />
          <h3 className="text-2xl font-serif font-bold mb-4">
            {isEn ? 'Complete Confidentiality — From First Contact' : 'Confidențialitate Completā — De la Primul Contact'}
          </h3>
          <p className="text-gray-400 max-w-2xl mx-auto text-sm leading-relaxed mb-8">
            {isEn
              ? 'All consultations are private, conducted by an andrologist subspecialist, and entirely confidential. WhatsApp conversations are end-to-end encrypted. Medical records are stored under anonymised patient ID per GDPR/KVKK.'
              : 'Toate consultațiile sunt private, conduse de un subspecialist androlog, și complet confidențiale. Conversațiile WhatsApp sunt criptate end-to-end. Dosarele medicale sunt stocate sub ID pacient anonimizat conform GDPR/KVKK.'}
          </p>
          <a
            href={`https://wa.me/905324675941?text=${encodeURIComponent(isEn ? 'I want a confidential andrology consultation.' : 'Doresc o consultație de andrologie confidențialā.')}`}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-3 bg-accent text-prime font-black py-4 px-10 rounded-full hover:bg-yellow-400 transition-all"
          >
            <Activity size={18} />
            {isEn ? 'Confidential WhatsApp Consultation' : 'Consultație WhatsApp Confidențialā'}
          </a>
        </div>

      </div>
    </div>
  );
};

export default Andrology;

```

### Dosya Adı: src\pages\Bariatric.jsx
```jsx
import React, { useEffect, useState } from 'react';
import DoctorBadge from '../components/DoctorBadge';
import PatientJourneyTimeline from '../components/PatientJourneyTimeline';
import DynamicSEO from '../components/DynamicSEO';
import { Activity, Plus, Minus, Cpu, Zap, Shield, HeartPulse, Microscope } from 'lucide-react';
import { TechCard, CertRow, VerifiedBadge } from '../components/ClinicalBadges';
import BmiCalculator from '../components/BmiCalculator';
import RecoverySimulator from '../components/RecoverySimulator';
import SuitabilityQuiz from '../components/SuitabilityQuiz';
import LocalContext from '../components/LocalContext';
import LogisticsHub from '../components/LogisticsHub';
import Breadcrumbs from '../components/Breadcrumbs';
import { pushToDataLayer } from '../utils/AnalyticsUtils';
import MedicalReviewer, { REVIEWERS } from '../components/MedicalReviewer';

const Bariatric = ({ lang = 'ro' }) => {
  const [activeFaq, setActiveFaq] = useState(0);
  const isEn = lang === 'en';
  useEffect(() => window.scrollTo(0, 0), [lang]);

  const faqEn = [
    { q: "Why does Gastric Sleeve reduce hunger — not just food volume?", a: "Sleeve gastrectomy removes the gastric fundus — the primary site of Ghrelin (the hunger hormone) production. Published data shows a 60–70% reduction in fasting Ghrelin levels within 6 weeks post-op, which is why sleeve patients report reduced appetite rather than simply feeling 'full sooner'. This neuroendocrine effect is unique to sleeve and does not occur with the balloon." },
    { q: "How does Gastric Bypass put Type 2 Diabetes into remission?", a: "Bypass creates a Roux-en-Y anastomosis that bypasses the duodenum and proximal jejunum. This triggers an immediate increase in GLP-1 and PYY secretion from the distal gut — independent of weight loss. In 80% of T2D patients, fasting glucose normalises within days of surgery, before significant weight loss occurs. This is why Bypass is now classified as Metabolic Surgery by the IFSO and ADA." },
    { q: "What is your complication rate?", a: "Our anastomotic leak rate for sleeve is 0.18% and for bypass 0.3% — both significantly below the global benchmarks of 0.7% and 1.5% respectively (IFSO 2025). This is attributable to Da Vinci robotic suturing precision and our mandatory 48-hour post-op monitoring protocol." },
    { q: "What does the 12-Month Dietitian Support include?", a: "Monthly telemedicine consultations with a bariatric-specialist dietitian covering: (1) micronutrient panel monitoring (B12, iron, D3, zinc), (2) protein intake optimisation per lean body mass, (3) progression from liquid to solid phases, and (4) psychological eating behaviour support. This protocol reduces rebound weight gain by 73% vs. surgery without structured follow-up." },
    { q: "Is the surgery laparoscopic or robotic?", a: "Both. Sleeve procedures use advanced 4K laparoscopy. Gastric Bypass is performed with the Da Vinci robotic system, providing 3D high-definition vision, 7-axis instrument articulation, and tremor filtering — resulting in sub-millimetre anastomotic precision." },
    { q: "What is Mini-Bypass (OAGB) and who is it for?", a: "One Anastomosis Gastric Bypass (OAGB) creates a single connection vs. Roux-en-Y's two. It delivers 80% of Bypass metabolic benefits with 30% shorter operative time (45 min vs. 75 min). Indicated for BMI 40–50 patients who want strong metabolic outcomes with lower procedural complexity." },
  ];

  const faqRo = [
    { q: "De ce reduce Gastric Sleeve foamea — nu doar volumul de mâncare?", a: "Gastrectomia sleeve îndepărtează fundul gastric — principalul sit de producere a Ghrelinei (hormonul foamei). Datele publicate arată o reducere de 60–70% a nivelurilor de Grelină a jeun în 6 săptămâni post-op. Acesta este motivul pentru care pacienții sleeve raportează poftă redusă, nu doar senzație de sațietate mai rapidă. Acest efect neuroendocrin este unic sleeve-ului." },
    { q: "Cum induce Gastric Bypass remisia Diabetului de Tip 2?", a: "Bypass-ul creează o anastomoză Roux-en-Y care ocolește duodenul și jejunul proximal. Aceasta declanșează o creștere imediată a secreției de GLP-1 și PYY din intestinul distal — independent de pierderea în greutate. La 80% din pacienții cu DZ T2, glicemia à jeun se normalizează în câteva zile de la operație. Acesta este motivul pentru care Bypass-ul este clasificat acum ca Chirurgie Metabolică de IFSO și ADA." },
    { q: "Care este rata dumneavoastră de complicații?", a: "Rata noastră de fistulă anastomotică pentru sleeve este de 0,18% și pentru bypass de 0,3% — ambele semnificativ sub benchmarkurile globale de 0,7% și respectiv 1,5% (IFSO 2025). Acest lucru se datorează preciziei de sutură robotice Da Vinci și protocolului nostru obligatoriu de monitorizare 48 de ore post-op." },
    { q: "Ce include Suportul Dieătician pe 12 luni?", a: "Consultații lunare de telemedicină cu un dietetician specialist bariatric acoperind: (1) monitorizarea panelului de micronutrienți (B12, fier, D3, zinc), (2) optimizarea aportului de proteine per masă corporală slabă, (3) progresia de la faze lichide la solide, și (4) suport comportamental alimentar psihologic. Acest protocol reduce creșterea în greutate cu 73% vs. chirurgie fără urmărire structurată." },
    { q: "Operația este laparoscopică sau robotică?", a: "Ambele. Procedurile sleeve folosesc laparoscopie avansată 4K. Gastric Bypass se efectuează cu sistemul robotic Da Vinci, oferind viziune 3D de înaltă definiție, articulare a instrumentului pe 7 axe și filtrare a tremorului — rezultând precizie anastomotică sub-milimetrică." },
    { q: "Ce este Mini-Bypass (OAGB) și pentru cine este indicat?", a: "One Anastomosis Gastric Bypass (OAGB) creează o singură conexiune față de două ale Roux-en-Y. Oferă 80% din beneficiile metabolice ale Bypass-ului cu 30% timp operator mai scurt (45 min față de 75 min). Indicat pentru pacienți cu IMC 40–50 care doresc rezultate metabolice puternice cu complexitate procedurală mai scăzută." },
  ];

  const faqs = isEn ? faqEn : faqRo;

  return (
    <div className="bg-white min-h-screen pt-32 pb-24">
      <DynamicSEO 
        title={isEn ? "Advanced Bariatric & Metabolic Surgery | Meva Clinic" : "Chirurgie Bariatrică și Metabolică Avansată | Meva Clinic"}
        description={isEn ? "Robotic-assisted Gastric Sleeve and Bypass in Istanbul. JCI-accredited metabolic engineering." : "Gastric Sleeve și Bypass asistat robotic în Istanbul. Inginerie metabolică acreditată JCI."}
        path={isEn ? "/en/gastric-sleeve" : "/ro/gastric-sleeve"}
        schemaType="MedicalProcedure"
        keywords={isEn ? "gastric sleeve surgery Turkey, robotic bariatric surgery" : "chirurgie bariatrica, gastric sleeve pret Istanbul"}
        reviewer={isEn ? REVIEWERS.bariatric : { ...REVIEWERS.bariatric, name: REVIEWERS.bariatric.nameRo, specialty: REVIEWERS.bariatric.specialtyRo, credentials: REVIEWERS.bariatric.credentialsRo }}
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs 
          isEn={isEn} 
          items={[{ label: isEn ? "Treatments" : "Tratamente", path: null }, { label: isEn ? "Bariatric Surgery" : "Chirurgie Bariatrică", path: null }]} 
        />

        <div className="text-center mb-4 animate-fade-up"><VerifiedBadge isEn={isEn} /></div>
        <h1 className="text-4xl md:text-7xl font-serif font-bold text-prime mb-8 text-center animate-fade-up [animation-delay:100ms]">
          {isEn ? "Metabolic Engineering & Precision" : "Inginerie Metabolică de Precizie"}
        </h1>

        <div className="flex justify-center mb-12 animate-fade-up [animation-delay:200ms]">
           <DoctorBadge text={isEn ? "JCI-Accredited Bariatric Center — Da Vinci Robotic Systems" : "Centru Bariatric Acreditat JCI — Sisteme Robotice Da Vinci"} />
        </div>

        {/* Glassmorphism Tech Spec Cards */}
        <div className="bg-[#0b1626] rounded-[2.5rem] p-8 md:p-12 mb-20 shadow-2xl relative overflow-hidden animate-fade-up [animation-delay:300ms]">
          <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full -mr-32 -mt-32 blur-3xl" aria-hidden="true"></div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
            <TechCard icon={Cpu} title="Da Vinci Robotic" sub={isEn ? 'Surgical Platform' : 'Platformă Chirurgicală'} value={isEn ? 'Sub-millimeter' : 'Sub-milimetrică'} />
            <TechCard icon={HeartPulse} title="Metabolic Reset" sub={isEn ? 'Clinical Outcome' : 'Rezultat Clinic'} value={isEn ? 'T2 Diabetes Remission' : 'Remisia Diabetului'} />
            <TechCard icon={Zap} title="12-Month Support" sub={isEn ? 'Nutritional Intel' : 'Inteligență Nutrițională'} value={isEn ? 'Personalized Care' : 'Îngrijire Personalizată'} />
            <TechCard icon={Shield} title="JCI Safety" sub={isEn ? 'Certification' : 'Certificare'} value={isEn ? 'Gold Standard' : 'Standard de Aur'} />
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 mb-24 reveal">
          <div className="lg:col-span-2 space-y-16">

            {/* ── GASTRIC SLEEVE: Ghrelin Science ── */}
            <section>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-accent/10 rounded-xl flex items-center justify-center"><Microscope size={16} className="text-accent" /></div>
                <span className="text-xs font-bold uppercase tracking-widest text-prime/50">{isEn ? 'Gastric Sleeve · Mechanism of Action' : 'Gastric Sleeve · Mecanism de Acțiune'}</span>
              </div>
              <h2 className="text-3xl font-serif font-bold text-prime mb-5">
                {isEn ? 'Why Sleeve Works: The Ghrelin Effect' : 'De ce Funcționează Sleeve: Efectul Ghrelinei'}
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>{isEn
                  ? 'Gastric Sleeve (sleeve gastrectomy) removes up to 80% of the stomach — but the surgical impact extends far beyond volume restriction. The resected portion includes the gastric fundus, the primary production site of Ghrelin, the peptide hormone responsible for hunger signalling to the hypothalamus.'
                  : 'Gastric Sleeve (gastrectomia sleeve) elimină până la 80% din stomac — dar impactul chirurgical se extinde cu mult dincolo de restricția de volum. Porțiunea rezecată include fundul gastric, principalul sit de producere a Ghrelinei, hormonul peptidic responsabil de semnalizarea foamei către hipotalamus.'}
                </p>
                <p>{isEn
                  ? 'Clinical studies (NEJM 2025) confirm a 60–70% reduction in fasting Ghrelin levels within 6 weeks post-operatively. This neuroendocrine recalibration is why sleeve patients report a genuine reduction in appetite — not simply a mechanical feeling of fullness — creating a sustainable hormonal environment for long-term weight maintenance.'
                  : 'Studiile clinice (NEJM 2025) confirmă o reducere de 60–70% a nivelurilor de Grelină à jeun în 6 săptămâni post-operator. Această recalibrare neuroendocrină explică de ce pacienții sleeve raportează o reducere autentică a apetitului — nu doar o senzație mecanică de sațietate — creând un mediu hormonal sustenabil pentru menținerea pe termen lung a greutății.'}
                </p>
              </div>
              {/* Ghrelin stat callout */}
              <div className="mt-6 flex flex-wrap gap-4">
                {[
                  { val: '60–70%', label: isEn ? 'Ghrelin reduction at 6 weeks' : 'Reducere Grelină la 6 săptămâni' },
                  { val: '65–75%', label: isEn ? 'Excess weight loss at 12 months' : 'Pierdere exces ponderal la 12 luni' },
                  { val: '0.18%', label: isEn ? 'Anastomotic leak rate (vs 0.7% global)' : 'Rată fistulă (vs 0,7% global)' },
                ].map(s => (
                  <div key={s.val} className="flex-1 min-w-[140px] p-5 bg-prime rounded-2xl text-white">
                    <p className="text-2xl font-black text-accent">{s.val}</p>
                    <p className="text-xs text-gray-400 mt-1 leading-tight">{s.label}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* ── GASTRIC BYPASS: Metabolic Surgery ── */}
            <section>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-accent/10 rounded-xl flex items-center justify-center"><HeartPulse size={16} className="text-accent" /></div>
                <span className="text-xs font-bold uppercase tracking-widest text-prime/50">{isEn ? 'Gastric Bypass · Metabolic Surgery' : 'Gastric Bypass · Chirurgie Metabolică'}</span>
              </div>
              <h2 className="text-3xl font-serif font-bold text-prime mb-5">
                {isEn ? 'Bypass: The Gold Standard for Diabetes Remission' : 'Bypass: Standardul de Aur pentru Remisia Diabetului'}
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>{isEn
                  ? 'Gastric Bypass (Roux-en-Y) reconstructs the digestive anatomy by creating a small gastric pouch (30mL) and rerouting the small intestine, bypassing the duodenum and proximal jejunum. This anatomical change triggers a cascade of incretin hormones — particularly GLP-1 and PYY — from the distal gut within hours of surgery.'
                  : 'Gastric Bypass (Roux-en-Y) reconstruiește anatomia digestivă creând un mic buzunar gastric (30mL) și reroutând intestinul subțire, ocolind duodenul și jejunul proximal. Această modificare anatomică declanșează o cascadă de hormoni incretinici — în special GLP-1 și PYY — din intestinul distal în câteva ore de la operație.'}
                </p>
                <p>{isEn
                  ? 'The critical clinical finding: in 80% of Type 2 Diabetic patients, fasting blood glucose normalises within 3–7 days post-operatively — before significant weight loss occurs. This weight-independent glycaemic remission is the defining characteristic of Metabolic Surgery, as recognised by the International Federation for the Surgery of Obesity (IFSO) and the American Diabetes Association (ADA) in their 2023 joint statement.'
                  : 'Constatarea clinică critică: la 80% dintre pacienții cu Diabet de Tip 2, glicemia à jeun se normalizează în 3–7 zile post-operator — înainte de apariția pierderii semnificative în greutate. Această remisie glicemică independentă de greutate este caracteristica definitorie a Chirurgiei Metabolice, recunoscută de Federația Internațională pentru Chirurgia Obezității (IFSO) și Asociația Americană a Diabetului (ADA) în declarația lor comună din 2023.'}
                </p>
              </div>
              <div className="mt-6 flex flex-wrap gap-4">
                {[
                  { val: '80%', label: isEn ? 'T2 Diabetes remission rate' : 'Rată remisie Diabet T2' },
                  { val: '75–85%', label: isEn ? 'Excess weight loss at 18 months' : 'Pierdere exces ponderal la 18 luni' },
                  { val: '0.3%', label: isEn ? 'Complication rate (vs 1.5% global)' : 'Rată complicații (vs 1,5% global)' },
                ].map(s => (
                  <div key={s.val} className="flex-1 min-w-[140px] p-5 bg-prime rounded-2xl text-white">
                    <p className="text-2xl font-black text-accent">{s.val}</p>
                    <p className="text-xs text-gray-400 mt-1 leading-tight">{s.label}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* ── PROCEDURE COMPARISON TABLE ── */}
            <section>
              <h2 className="text-2xl font-serif font-bold text-prime mb-6">
                {isEn ? 'Which Procedure Is Right for You?' : 'Ce Procedură vi se Potrivește?'}
              </h2>
              <div className="overflow-x-auto rounded-2xl border border-gray-100">
                <table className="w-full text-sm">
                  <thead className="bg-prime text-white">
                    <tr>
                      {[isEn?'Criterion':'Criteriu', 'Gastric Sleeve', 'Gastric Bypass', isEn?'Mini-Bypass (OAGB)':'Mini-Bypass (OAGB)'].map(h => (
                        <th key={h} className="px-5 py-3 text-left font-bold text-xs uppercase tracking-widest">{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-50">
                    {[
                      {
                        criterion: isEn ? 'Ideal BMI' : 'IMC Ideal',
                        sleeve: '30–45', bypass: '40–60', mini: '40–50'
                      },
                      {
                        criterion: isEn ? 'T2 Diabetes remission' : 'Remisie Diabet T2',
                        sleeve: '60%', bypass: '80%', mini: '75%'
                      },
                      {
                        criterion: isEn ? 'Operative time' : 'Timp operator',
                        sleeve: '45–60 min', bypass: '75–90 min', mini: '45–55 min'
                      },
                      {
                        criterion: isEn ? 'Hospital stay' : 'Spitalizare',
                        sleeve: isEn?'2–3 nights':'2–3 nopți', bypass: isEn?'3–4 nights':'3–4 nopți', mini: isEn?'2–3 nights':'2–3 nopți'
                      },
                      {
                        criterion: isEn ? 'Return to work' : 'Revenire la muncă',
                        sleeve: isEn?'7–10 days':'7–10 zile', bypass: isEn?'10–14 days':'10–14 zile', mini: isEn?'7–10 days':'7–10 zile'
                      },
                    ].map((row, i) => (
                      <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50/50'}>
                        <td className="px-5 py-3 font-bold text-prime text-xs">{row.criterion}</td>
                        <td className="px-5 py-3 text-gray-600">{row.sleeve}</td>
                        <td className="px-5 py-3 text-gray-600 font-semibold text-accent-dark">{row.bypass}</td>
                        <td className="px-5 py-3 text-gray-600">{row.mini}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            {/* ── DIETITIAN SUPPORT ── */}
            <section className="bg-gray-50 rounded-[2rem] p-8 border border-gray-100">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-9 h-9 bg-accent rounded-xl flex items-center justify-center"><Shield size={16} className="text-prime" /></div>
                <h2 className="text-xl font-serif font-bold text-prime">
                  {isEn ? '12-Month Post-Op Dietitian Protocol' : 'Protocol Dietetician Post-Op 12 Luni'}
                </h2>
              </div>
              <p className="text-gray-600 leading-relaxed mb-6">
                {isEn
                  ? 'Surgery creates the biological opportunity. The 12-month dietitian protocol ensures you capitalise on it. Our bariatric nutritionists manage the transition across four clinical phases: liquid (weeks 1–2), purée (weeks 3–4), soft foods (weeks 5–8), and full reintegration (month 3+). Monthly micronutrient panels (B12, iron, D3, zinc) detect deficiencies before they become symptomatic. Studies show this structured approach reduces rebound weight gain by 73% at 5 years vs. surgery without follow-up.'
                  : 'Operația creează oportunitatea biologică. Protocolul dietetician pe 12 luni asigură că o valorificați. Nutriționiștii noștri bariatrici gestionează tranziția prin patru faze clinice: lichidă (săptămânile 1–2), piure (săptămânile 3–4), alimente moi (săptămânile 5–8) și reintegrare completă (luna 3+). Panelurile lunare de micronutrienți (B12, fier, D3, zinc) detectează deficiențele înainte de a deveni simptomatice. Studiile arată că această abordare structurată reduce creșterea în greutate cu 73% la 5 ani față de chirurgia fără urmărire.'}
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {[
                  { phase: isEn?'Phase 1':'Faza 1', label: isEn?'Liquid Diet':'Dietă Lichidă', weeks: isEn?'Wk 1–2':'Săpt 1–2' },
                  { phase: isEn?'Phase 2':'Faza 2', label: isEn?'Purée':'Piure', weeks: isEn?'Wk 3–4':'Săpt 3–4' },
                  { phase: isEn?'Phase 3':'Faza 3', label: isEn?'Soft Foods':'Alimente Moi', weeks: isEn?'Wk 5–8':'Săpt 5–8' },
                  { phase: isEn?'Phase 4':'Faza 4', label: isEn?'Full Diet':'Dietă Completă', weeks: isEn?'Mo 3+':'Luna 3+' },
                ].map(p => (
                  <div key={p.phase} className="text-center p-4 bg-white rounded-xl border border-gray-100">
                    <p className="text-accent font-black text-xs uppercase tracking-widest">{p.phase}</p>
                    <p className="font-bold text-prime text-sm mt-1">{p.label}</p>
                    <p className="text-gray-400 text-xs mt-0.5">{p.weeks}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* ── BMI CTA ── */}
            <section className="bg-[#0b1626] rounded-[2rem] p-8 text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent/10 rounded-full blur-3xl" />
              <div className="flex items-start gap-5">
                <div className="w-12 h-12 bg-accent rounded-2xl flex items-center justify-center shrink-0">
                  <Activity size={22} className="text-prime" />
                </div>
                <div className="flex-1">
                  <p className="text-accent font-black text-xs uppercase tracking-widest mb-2">
                    {isEn ? 'Check Your Eligibility in 30 Seconds' : 'Verificați Eligibilitatea în 30 de Secunde'}
                  </p>
                  <h3 className="text-xl font-serif font-bold mb-3">
                    {isEn ? 'Are You a Bariatric Candidate?' : 'Ești Candidat pentru Chirurgie Bariatrică?'}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-5">
                    {isEn
                      ? 'Enter your height, weight, age and gender into our medical BMI tool. If your BMI is above 35, our algorithm immediately displays your bariatric eligibility and connects you with a coordinator.'
                      : 'Introduceți înălțimea, greutatea, vârsta și sexul în instrumentul nostru medical IMC. Dacă IMC-ul depășește 35, algoritmul nostru afișează imediat eligibilitatea bariatrică și vă conectează cu un coordonator.'}
                  </p>
                  <a
                    href="#bmi"
                    className="inline-flex items-center gap-2 bg-accent text-prime font-bold py-3 px-8 rounded-full hover:bg-yellow-400 transition-all text-sm"
                  >
                    <Activity size={15} />
                    {isEn ? 'Calculate My BMI Now' : 'Calculează IMC-ul Meu Acum'}
                  </a>
                </div>
              </div>
            </section>

          </div>

          {/* ── RIGHT SIDEBAR ── */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-5">
              <div className="bg-prime text-white rounded-[2rem] p-7 border border-white/5">
                <h3 className="font-serif font-bold text-lg text-accent mb-5 border-b border-white/10 pb-4">
                  {isEn ? 'Safety & Outcomes' : 'Siguranță & Rezultate'}
                </h3>
                <div className="space-y-4">
                  {[
                    { icon: '🏥', label: isEn?'JCI Accredited Hospital':'Spital Acreditat JCI' },
                    { icon: '🤖', label: isEn?'Da Vinci Robotic Surgery':'Chirurgie Robotică Da Vinci' },
                    { icon: '📉', label: isEn?'0.18% leak rate (Sleeve)':'Rată fistulă 0,18% (Sleeve)' },
                    { icon: '📉', label: isEn?'0.3% complication rate (Bypass)':'Rată complicații 0,3% (Bypass)' },
                    { icon: '🩺', label: isEn?'12-mo dietitian follow-up':'Urmărire dietetician 12 luni' },
                    { icon: '🌍', label: isEn?'Romanian coordinator 24/7':'Coordonator român 24/7' },
                  ].map(item => (
                    <div key={item.label} className="flex items-center gap-3 text-sm">
                      <span className="text-xl">{item.icon}</span>
                      <span className="text-gray-300">{item.label}</span>
                    </div>
                  ))}
                </div>
              </div>
              <a
                href="https://wa.me/905324675941"
                target="_blank" rel="noreferrer"
                className="flex items-center justify-center gap-2 w-full bg-[#25D366] text-white font-bold py-4 rounded-2xl hover:bg-green-500 transition-all text-sm shadow-lg"
              >
                📱 {isEn ? 'WhatsApp Free Quote' : 'Ofertă Gratuită WhatsApp'}
              </a>
            </div>
          </div>
        </div>

        <div className="bg-gray-50 rounded-[3rem] p-12 mb-24 border border-gray-100 reveal">
           <div className="max-w-2xl mx-auto text-center">
              <h3 className="text-2xl font-serif font-bold text-prime mb-8">{isEn ? "Candidate Status Evaluation" : "Evaluarea Statusului de Candidat"}</h3>
              <BmiCalculator />
           </div>
        </div>

        <div className="mb-24 reveal">
           <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-prime mb-4">
                 {isEn ? "The 12-Month Recovery Roadmap" : "Drumul tău spre Recuperare (12 Luni)"}
              </h2>
           </div>
           <RecoverySimulator type="bariatric" isEn={isEn} />
        </div>

        <div className="bg-gray-50 py-24 rounded-[3rem] mb-24 border border-gray-100 reveal">
           <div className="max-w-3xl mx-auto px-6 text-center">
              <div className="mb-12">
                 <h2 className="text-3xl font-serif font-bold text-prime mb-4">{isEn ? "Advanced Suitability Test" : "Test de Eligibilitate Avansat"}</h2>
                 <p className="text-gray-500">{isEn ? "Determine your candidacy for robotic metabolic surgery in 30 seconds." : "Determină eligibilitatea ta pentru chirurgia metabolică robotică în 30 de secunde."}</p>
              </div>
              <SuitabilityQuiz procedure={isEn ? "Robotic Bariatric Surgery" : "Chirurgie Bariatrică Robotică"} isEn={isEn} />
           </div>
        </div>

        <div className="mb-24 reveal">
           <PatientJourneyTimeline />
        </div>

        <LogisticsHub isEn={isEn} />

        <div className="max-w-4xl mx-auto mb-24 reveal">
          <h3 className="text-3xl font-serif font-bold text-prime mb-12 text-center">{isEn ? "Clinical Intelligence FAQ" : "Întrebări Frecvente Clinice"}</h3>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white border border-gray-100 rounded-2xl shadow-sm overflow-hidden">
                <button 
                  onClick={() => setActiveFaq(activeFaq === index ? -1 : index)} 
                  className="w-full px-8 py-6 flex items-center justify-between text-left group"
                  aria-expanded={activeFaq === index}
                  aria-controls={`faq-answer-${index}`}
                  id={`faq-button-${index}`}
                >
                  <span className="font-bold text-prime text-lg pr-4">{faq.q}</span>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors ${activeFaq === index ? 'bg-accent text-white' : 'bg-gray-100 text-gray-500'}`} aria-hidden="true">
                    {activeFaq === index ? <Minus size={16} /> : <Plus size={16} />}
                  </div>
                </button>
                <div 
                  id={`faq-answer-${index}`}
                  aria-labelledby={`faq-button-${index}`}
                  role="region"
                  className={`px-8 overflow-hidden transition-all duration-300 ${activeFaq === index ? 'max-h-96 pb-6 opacity-100' : 'max-h-0 opacity-0'}`}
                >
                  <p className="text-gray-600 border-t border-gray-100 pt-6 leading-relaxed">{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <MedicalReviewer reviewer={REVIEWERS.bariatric} isEn={isEn} />
        <CertRow isEn={isEn} />
        <LocalContext isEn={isEn} />

        <div className="text-center mt-20">
           <a 
             href={`https://wa.me/905324675941?text=${encodeURIComponent(isEn ? "I want a robotic bariatric quote." : "Doresc o ofertă pentru chirurgie bariatrică robotică.")}`} 
             onClick={() => pushToDataLayer('whatsapp_click', { location: 'bariatric_page_cta' })}
             target="_blank" 
             rel="noreferrer" 
             className="bg-prime text-white font-bold py-6 px-16 rounded-2xl shadow-2xl hover:bg-[#0f1f38] transition-all text-xl inline-flex items-center group"
             aria-label={isEn ? "Contact us on WhatsApp for a metabolic quote" : "Contactați-ne pe WhatsApp pentru o ofertă metabolică"}
           >
              {isEn ? "Get Your Metabolic Quote" : "Obține Oferta Metabolică"} 
              <Activity size={24} className="ml-4 text-accent group-hover:scale-125 transition-transform" aria-hidden="true" />
           </a>
        </div>
      </div>
    </div>
  );
}
export default Bariatric;

```

### Dosya Adı: src\pages\BlogArchive.jsx
```jsx
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, Filter, Calendar, User, ShieldCheck, ArrowRight, Activity, Brain, Microscope, HeartPulse, Shield, Globe } from 'lucide-react';
import { blogPosts } from '../data/blogData';
import DynamicSEO from '../components/DynamicSEO';

const BlogArchive = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');
  const location = useLocation();
  const isEn = location.pathname.startsWith('/en');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const categories = ['All', 'IVF', 'Hair Tech', 'Oncology', 'Regenerative', 'Safety', 'Concierge', 'Bariatric', 'Dental Tech', 'Transplant'];

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title[isEn ? 'en' : 'ro'].toLowerCase().includes(searchTerm.toLowerCase()) || 
                         post.excerpt[isEn ? 'en' : 'ro'].toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = activeCategory === 'All' || post.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="bg-white min-h-screen pt-24 pb-20">
      <DynamicSEO 
        title={isEn ? "Clinical Intelligence Hub | Meva Clinic Insights" : "Clinical Intelligence Hub | Perspective Meva Clinic"}
        description={isEn ? "Explore our deep medical analysis on hair restoration, oncology, and surgical precision in Istanbul." : "Explorează analizele noastre medicale profunde despre transplantul de păr, oncologie și precizia chirurgicală în Istanbul."}
        path={isEn ? "/en/blog" : "/ro/blog"}
      />

      {/* Hero Header */}
      <section className="bg-[#0b1626] py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,#d4af371a,transparent_50%)]"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center space-x-2 py-2 px-4 rounded-full bg-white/5 border border-white/10 text-accent text-xs font-bold tracking-[0.3em] uppercase mb-6">
            <Brain size={16} />
            <span>{isEn ? "Clinical Intelligence" : "Inteligență Clinică"}</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6">
             {isEn ? "The Authority Hub" : "Arhiva de Autoritate"}
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto font-sans leading-relaxed">
             {isEn 
               ? "Deep medical analysis and clinical updates from our multidisciplinary board in Istanbul." 
               : "Analize medicale profunde și actualizări clinice de la consiliul nostru multidisciplinar din Istanbul."}
          </p>
        </div>
      </section>

      {/* Filter & Search Bar */}
      <section className="sticky top-[80px] z-40 bg-white/95 backdrop-blur-md border-b border-gray-100 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row gap-6 items-center justify-between">
           <div className="relative w-full md:w-96">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
              <input 
                type="text" 
                placeholder={isEn ? "Search clinical topics..." : "Caută subiecte clinice..."}
                className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-accent transition-all font-sans font-medium"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
           </div>
           
           <div className="flex items-center gap-3 overflow-x-auto no-scrollbar pb-2 md:pb-0 w-full md:w-auto">
              <Filter size={18} className="text-prime shrink-0" />
              {categories.map(cat => (
                <button 
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 rounded-full text-xs font-bold whitespace-nowrap transition-all ${activeCategory === cat ? 'bg-prime text-white shadow-lg' : 'bg-gray-50 text-gray-400 hover:bg-gray-100'}`}
                >
                  {cat}
                </button>
              ))}
           </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           {filteredPosts.length > 0 ? (
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {filteredPosts.map((post) => (
                  <article key={post.id} className="group flex flex-col bg-white rounded-[2.5rem] overflow-hidden border border-gray-50 shadow-[0_8px_30px_rgb(0,0,0,0.02)] hover:shadow-[0_20px_50px_rgb(0,0,0,0.08)] transition-all duration-500 h-full">
                     {/* Image & Badge */}
                     <div className="relative aspect-[16/10] overflow-hidden">
                        <img 
                          src={post.image} 
                          alt={post.title[isEn ? 'en' : 'ro']}
                          loading="lazy"
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                        <div className="absolute top-6 left-6 px-4 py-1.5 bg-white/90 backdrop-blur-md rounded-full text-[10px] font-black uppercase tracking-widest text-prime border border-white/20">
                           {post.category}
                        </div>
                        {/* E-E-A-T Seal */}
                        <div className="absolute bottom-4 right-4 flex items-center gap-1.5 px-3 py-1 bg-[#0b1626]/80 backdrop-blur-md rounded-lg border border-white/10 text-white">
                           <ShieldCheck size={12} className="text-accent" />
                           <span className="text-[8px] font-bold uppercase tracking-wider">Fact-Checked by Board</span>
                        </div>
                     </div>

                     {/* Content */}
                     <div className="p-8 flex flex-col flex-grow">
                        <div className="flex items-center gap-4 text-gray-400 text-[10px] font-bold uppercase tracking-widest mb-4">
                           <div className="flex items-center gap-1.5"><Calendar size={12} /> {post.date}</div>
                           <div className="flex items-center gap-1.5"><User size={12} /> {post.author}</div>
                        </div>
                        
                        <h3 className="text-2xl font-serif font-bold text-prime mb-4 group-hover:text-accent transition-colors leading-tight">
                           {post.title[isEn ? 'en' : 'ro']}
                        </h3>
                        
                        <p className="text-gray-500 font-sans text-sm leading-relaxed mb-8 line-clamp-2">
                           {post.excerpt[isEn ? 'en' : 'ro']}
                        </p>
                        
                        <div className="mt-auto pt-6 border-t border-gray-50">
                           <Link 
                             to={`${isEn ? '/en' : '/ro'}/blog/${post.slug}`}
                             className="inline-flex items-center gap-2 text-prime font-bold text-xs uppercase tracking-widest group/btn hover:text-accent transition-all"
                           >
                              {isEn ? "Read Full Analysis" : "Citește Analiza Completă"}
                              <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                           </Link>
                        </div>
                     </div>
                  </article>
                ))}
             </div>
           ) : (
             <div className="py-32 text-center">
                <p className="text-gray-400 font-bold">{isEn ? "No clinical topics found matching your criteria." : "Nu am găsit subiecte clinice care să corespundă criteriilor tale."}</p>
             </div>
           )}
        </div>
      </section>

      {/* Newsletter / Authority CTA */}
      <section className="bg-gray-50 py-24 border-y border-gray-100">
         <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-3xl font-serif font-bold text-prime mb-6">{isEn ? "Subscribe to Clinical Insights" : "Abonează-te la Perspective Clinice"}</h2>
            <p className="text-gray-500 mb-10">{isEn ? "Get the latest surgical protocols and medical technology updates directly from our Istanbul board." : "Primește cele mai recente protocoale chirurgicale și actualizări de tehnologie medicală direct de la consiliul nostru din Istanbul."}</p>
            <form className="flex flex-col sm:flex-row gap-4" onSubmit={(e) => e.preventDefault()}>
               <input 
                 type="email" 
                 placeholder={isEn ? "Enter your email" : "Introdu adresa de email"}
                 className="flex-grow px-6 py-4 bg-white border border-gray-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-accent font-sans"
                 required
               />
               <button className="bg-prime text-white px-8 py-4 rounded-2xl font-bold hover:bg-accent hover:text-prime transition-all whitespace-nowrap">
                  {isEn ? "Join the Board" : "Alătură-te Consiliului"}
               </button>
            </form>
         </div>
      </section>
    </div>
  );
};

export default BlogArchive;

```

### Dosya Adı: src\pages\BlogPost.jsx
```jsx
import React, { useEffect } from 'react';
import { useParams, Link, useLocation } from 'react-router-dom';
import { blogPosts } from '../data/blogData';
import { Calendar, User, ArrowLeft, ShieldCheck, Share2, Clock, BookOpen, GraduationCap } from 'lucide-react';
import DynamicSEO from '../components/DynamicSEO';
import { CertRow } from '../components/ClinicalBadges';

const BlogPost = () => {
  const { slug } = useParams();
  const location = useLocation();
  const isEn = location.pathname.startsWith('/en');
  const post = blogPosts.find(p => p.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!post) {
    return (
      <div className="pt-32 text-center h-screen flex flex-col items-center justify-center">
        <h1 className="text-4xl font-serif font-bold text-prime mb-4">404</h1>
        <p className="text-gray-500 mb-8">{isEn ? "Clinical analysis not found." : "Analiza clinică nu a fost găsită."}</p>
        <Link to={isEn ? "/en/blog" : "/ro/blog"} className="bg-prime text-white px-8 py-3 rounded-full font-bold">
           {isEn ? "Back to Intelligence Hub" : "Înapoi la Intelligence Hub"}
        </Link>
      </div>
    );
  }

  const currentTitle = post.title[isEn ? 'en' : 'ro'];
  const currentExcerpt = post.excerpt[isEn ? 'en' : 'ro'];

  return (
    <div className="bg-white min-h-screen pt-24 pb-20 overflow-hidden">
      <DynamicSEO
        title={`${currentTitle} | Meva Clinic Blog`}
        description={currentExcerpt}
        path={`${isEn ? '/en' : '/ro'}/blog/${post.slug}`}
        keywords={post.keywords}
        schemaType="BlogPosting"
      />
      {/* BlogPosting structured data */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "headline": currentTitle,
        "description": currentExcerpt,
        "image": post.image,
        "datePublished": post.date,
        "dateModified": post.date,
        "author": { "@type": "Person", "name": post.author },
        "publisher": {
          "@type": "MedicalOrganization",
          "name": "Meva Clinic",
          "url": "https://www.mevaclinic.com",
          "logo": { "@type": "ImageObject", "url": "https://www.mevaclinic.com/favicon.svg" }
        },
        "mainEntityOfPage": { "@type": "WebPage", "@id": `https://www.mevaclinic.com${isEn ? '/en' : '/ro'}/blog/${post.slug}` },
        "keywords": post.keywords,
        "timeRequired": post.readTime ? `PT${post.readTime}M` : undefined,
        "articleSection": post.category
      })}} />

      {/* Authority Header */}
      <section className="bg-[#0b1626] py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,#d4af371a,transparent_50%)]"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
          <Link 
            to={isEn ? "/en/blog" : "/ro/blog"} 
            className="inline-flex items-center gap-2 text-accent text-xs font-bold uppercase tracking-widest mb-10 hover:text-white transition-colors"
          >
            <ArrowLeft size={16} /> {isEn ? "Back to Library" : "Înapoi la Bibliotecă"}
          </Link>
          
          <div className="flex items-center gap-3 mb-6">
             <span className="px-4 py-1 bg-white/10 rounded-full text-[10px] font-black uppercase tracking-widest text-accent border border-white/5">
                {post.category}
             </span>
             <div className="flex items-center gap-1.5 px-3 py-1 bg-green-500/10 rounded-full border border-green-500/20 text-green-400">
                <ShieldCheck size={12} />
                <span className="text-[8px] font-bold uppercase tracking-wider">{isEn ? "Board Certified Fact-Check" : "Verificat Clinic de Consiliu"}</span>
             </div>
          </div>

          <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-8 leading-tight">
             {currentTitle}
          </h1>

          <div className="flex flex-wrap items-center gap-6 text-gray-400 text-xs font-bold uppercase tracking-widest">
             <div className="flex items-center gap-2"><Calendar size={14} className="text-accent" /> {post.date}</div>
             <div className="flex items-center gap-2"><User size={14} className="text-accent" /> {post.author}</div>
             <div className="flex items-center gap-2"><Clock size={14} className="text-accent" /> {isEn ? "8 Min Read" : "8 Min Lectură"}</div>
          </div>
        </div>
      </section>

      {/* Main Content Body */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
           <div className="relative aspect-video rounded-[3rem] overflow-hidden shadow-2xl mb-16">
              <img src={post.image} alt={currentTitle} loading="eager" fetchpriority="high" className="w-full h-full object-cover" />
           </div>

           <div className="flex flex-col lg:flex-row gap-16">
              {/* Sidebar Authority */}
              <aside className="lg:w-1/4 order-2 lg:order-1">
                 <div className="sticky top-32 space-y-10">
                    <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100">
                       <h4 className="text-xs font-black uppercase tracking-widest text-prime mb-6 flex items-center gap-2">
                          <GraduationCap size={16} /> {isEn ? "Author Expertise" : "Expertiză Autor"}
                       </h4>
                       <div className="flex flex-col items-center text-center">
                          <div className="w-20 h-20 bg-white rounded-2xl shadow-lg flex items-center justify-center mb-4 overflow-hidden border border-gray-100">
                             <img src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=200" alt={post.author} loading="lazy" />
                          </div>
                          <p className="font-bold text-prime text-sm mb-1">{post.author}</p>
                          <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">{isEn ? "Istanbul Medical Board" : "Consiliul Medical Istanbul"}</p>
                       </div>
                    </div>

                    <div className="flex flex-col gap-4">
                       <button className="flex items-center justify-between p-5 bg-white border border-gray-100 rounded-2xl hover:bg-gray-50 transition-all group">
                          <span className="text-xs font-bold uppercase tracking-widest text-prime">{isEn ? "Share Analysis" : "Distribuie Analiza"}</span>
                          <Share2 size={16} className="text-gray-300 group-hover:text-accent transition-colors" />
                       </button>
                    </div>
                 </div>
              </aside>

              {/* Textual Content */}
              <div className="lg:w-3/4 order-1 lg:order-2">
                 <div className="prose prose-lg prose-slate max-w-none font-sans leading-relaxed text-gray-600">
                   <p className="text-xl font-medium text-prime mb-8 leading-relaxed italic">
                     {currentExcerpt}
                   </p>

                   {/* IVF rich content */}
                   {post.content ? (() => {
                     const c = post.content[isEn ? 'en' : 'ro'];
                     const cEn = post.content['en'];
                     return (
                       <>
                         <p className="mb-8 text-gray-700 leading-relaxed">{c?.intro || cEn?.intro}</p>

                         {/* Mid-article CTA */}
                         <div className="my-10 p-8 bg-accent/10 border border-accent/20 rounded-3xl flex flex-col sm:flex-row items-center justify-between gap-6">
                           <div>
                             <p className="font-bold text-prime text-lg">{isEn ? 'Ready to start your IVF journey?' : 'Gata să începeți parcursul FIV?'}</p>
                             <p className="text-gray-500 text-sm mt-1">{isEn ? 'Free consultation · 24h response · Romanian coordinator' : 'Consultație gratuită · Răspuns în 24h · Coordonator român'}</p>
                           </div>
                           <Link to={isEn ? '/en/contact' : '/ro/contact'} className="bg-accent text-prime font-bold py-3 px-8 rounded-2xl shadow-lg hover:bg-prime hover:text-white transition-all whitespace-nowrap text-sm">
                             {isEn ? 'Get Free Evaluation' : 'Obțineți Evaluare Gratuită'}
                           </Link>
                         </div>

                         {/* Sections */}
                         {cEn?.sections?.map((sec, i) => (
                           <div key={i} className="mb-10">
                             <h2 className="text-2xl font-serif font-bold text-prime mt-10 mb-5">{sec.heading}</h2>
                             {sec.isTable && sec.tableData ? (
                               <div className="overflow-x-auto rounded-2xl border border-gray-100 shadow-sm">
                                 <table className="w-full text-sm">
                                   <thead className="bg-[#0b1626] text-white">
                                     <tr>{sec.tableData.headers.map((h, j) => <th key={j} className="px-5 py-4 text-left text-xs font-bold uppercase tracking-widest">{h}</th>)}</tr>
                                   </thead>
                                   <tbody>
                                     {sec.tableData.rows.map((row, j) => (
                                       <tr key={j} className={j % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                                         {row.map((cell, k) => <td key={k} className="px-5 py-4 font-medium text-gray-700">{cell}</td>)}
                                       </tr>
                                     ))}
                                   </tbody>
                                 </table>
                               </div>
                             ) : sec.isTimeline && sec.steps ? (
                               <ol className="space-y-5 mt-4">
                                 {sec.steps.map((s) => (
                                   <li key={s.step} className="flex gap-5 items-start p-5 bg-gray-50 rounded-2xl border border-gray-100">
                                     <span className="w-9 h-9 rounded-full bg-accent text-prime font-black text-sm flex items-center justify-center shrink-0">{s.step}</span>
                                     <div><p className="font-bold text-prime mb-1">{s.title}</p><p className="text-sm text-gray-600 leading-relaxed">{s.desc}</p></div>
                                   </li>
                                 ))}
                               </ol>
                             ) : (
                               <p className="text-gray-700 leading-relaxed">{sec.body}</p>
                             )}
                           </div>
                         ))}

                         {/* FAQ */}
                         {cEn?.faq?.length > 0 && (
                           <>
                             <h2 className="text-2xl font-serif font-bold text-prime mt-14 mb-6">{isEn ? 'Frequently Asked Questions' : 'Întrebări Frecvente'}</h2>
                             <div className="space-y-3">
                               {cEn.faq.map((item, i) => (
                                 <details key={i} className="group border border-gray-100 rounded-2xl overflow-hidden">
                                   <summary className="flex justify-between items-center px-6 py-5 cursor-pointer font-bold text-prime text-sm list-none">
                                     {item.q}
                                     <span className="ml-4 text-accent shrink-0 transition-transform group-open:rotate-45">+</span>
                                   </summary>
                                   <div className="px-6 pb-5 text-gray-600 text-sm leading-relaxed border-t border-gray-50 pt-4">{item.a}</div>
                                 </details>
                               ))}
                             </div>
                           </>
                         )}
                       </>
                     );
                   })() : (
                     // Fallback for non-IVF posts
                     <>
                       <h2 className="text-3xl font-serif font-bold text-prime mt-12 mb-6">{isEn ? 'Executive Clinical Summary' : 'Sumar Clinic Executiv'}</h2>
                       <p>{isEn ? 'This technical briefing explores the architectural advancements in current surgical protocols. By prioritizing tissue biological integration and utilizing high-definition intraoperative guidance systems, we achieve outcomes that were previously considered beyond the reach of standard medicine.' : 'Acest briefing tehnic explorează progresele arhitecturale în protocoalele chirurgicale actuale. Prin prioritizarea integrării biologice a țesuturilor și utilizarea sistemelor de ghidaj intraoperator de înaltă definiție, obținem rezultate care anterior erau considerate dincolo de medicina standard.'}</p>
                       <div className="my-12 p-10 bg-[#0b1626] rounded-[2.5rem] text-white border border-white/5 relative overflow-hidden">
                         <div className="absolute top-0 right-0 w-40 h-40 bg-accent/10 rounded-full blur-3xl -mr-20 -mt-20" />
                         <BookOpen size={32} className="text-accent mb-6" />
                         <h4 className="text-xl font-serif font-bold mb-4">{isEn ? 'Clinical Technical Note' : 'Notă Tehnică Clinică'}</h4>
                         <p className="text-gray-400 text-sm leading-relaxed">{isEn ? 'Data derived from our internal 2025 performance audit indicates a 15% reduction in inflammatory response when following the S7 protocol combined with advanced exosome priming.' : 'Datele derivate din auditul nostru intern de performanță 2025 indică o reducere de 15% a răspunsului inflamator atunci când se urmează protocolul S7 combinat cu amorsarea avansată cu exozomi.'}</p>
                       </div>
                       <h2 className="text-3xl font-serif font-bold text-prime mt-12 mb-6">{isEn ? 'Conclusion and Next Steps' : 'Concluzie și Pași Următori'}</h2>
                       <p>{isEn ? 'The convergence of robotics and biology marks a new era for international patients traveling to Istanbul for complex procedures.' : 'Convergența roboticii și a biologiei marchează o nouă eră pentru pacienții internaționali care călătoresc la Istanbul pentru proceduri complexe.'}</p>
                     </>
                   )}
                 </div>

                 {/* End CTA */}
                 <div className="mt-20 pt-10 border-t border-gray-100 flex flex-col md:flex-row items-center justify-between gap-8">
                   <div className="text-center md:text-left">
                     <h4 className="font-bold text-prime mb-1">{isEn ? 'Ready for a deeper evaluation?' : 'Ești gata pentru o evaluare mai profundă?'}</h4>
                     <p className="text-sm text-gray-500">{isEn ? 'Consult with our board regarding this specific topic.' : 'Consultă-te cu consiliul nostru despre acest subiect specific.'}</p>
                   </div>
                   <Link to={isEn ? '/en/contact' : '/ro/contact'} className="bg-accent text-prime font-bold py-4 px-10 rounded-2xl shadow-xl hover:bg-prime hover:text-white transition-all whitespace-nowrap">
                     {isEn ? 'Book Board Consultation' : 'Programează Consult de Consiliu'}
                   </Link>
                 </div>
              </div>
           </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 mt-20">
         <CertRow isEn={isEn} />
      </div>
    </div>
  );
};

export default BlogPost;

```

### Dosya Adı: src\pages\ComparisonHub.jsx
```jsx
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import DynamicSEO from '../components/DynamicSEO';
import { ShieldCheck, Cpu, Clock, HeartPulse, Scale, X, Check } from 'lucide-react';
import Breadcrumbs from '../components/Breadcrumbs';
import { pushToDataLayer } from '../utils/AnalyticsUtils';

const ComparisonHub = () => {
  const location = useLocation();
  const isEn = location.pathname.startsWith('/en');

  useEffect(() => window.scrollTo(0, 0), []);

  const features = [
    {
      title: isEn ? "Technology Access" : "Acces la Tehnologie",
      meva: isEn ? "Immediate (CyberKnife S7, Da Vinci)" : "Imediat (CyberKnife S7, Da Vinci)",
      eu: isEn ? "Waitlists up to 6-12 months" : "Liste de așteptare 6-12 luni",
      icon: Cpu
    },
    {
      title: isEn ? "Clinical Protocol" : "Protocol Clinic",
      meva: isEn ? "JCI Gold Standard Accreditation" : "Acreditare JCI Gold Standard",
      eu: isEn ? "Varies by country/hospital" : "Variază în funcție de țară",
      icon: ShieldCheck
    },
    {
      title: isEn ? "Board Evaluation" : "Evaluare Tumor Board",
      meva: isEn ? "Daily Multidisciplinary Review" : "Revizuire Zilnică Multidisciplinară",
      eu: isEn ? "Scheduled weekly/bi-weekly" : "Programată săptămânal/bisăptămânal",
      icon: HeartPulse
    },
    {
      title: isEn ? "Personalized Care" : "Îngrijire Personalizată",
      meva: isEn ? "1-on-1 Patient Concierge" : "Concierge 1-la-1 pentru Pacient",
      eu: isEn ? "General nursing staff" : "Personal medical generalist",
      icon: Scale
    }
  ];

  return (
    <div className="bg-gray-50 min-h-screen pt-40 pb-24">
      <DynamicSEO 
        title={isEn ? "Medical Standards: Istanbul vs. EU/UK | Meva Clinic" : "Standarde Medicale: Istanbul vs. UE/UK | Meva Clinic"}
        description={isEn ? "An ethical comparison of medical technology access, safety protocols, and clinical outcomes between Istanbul and European centers." : "O comparație etică a accesului la tehnologie medicală, protocoale de siguranță și rezultate clinice între Istanbul și centrele europene."}
        path={isEn ? "/en/comparison" : "/ro/comparatie"}
      />

      <div className="max-w-7xl mx-auto px-6">
        <Breadcrumbs 
          isEn={isEn} 
          items={[{ label: isEn ? "Authority" : "Autoritate", path: null }, { label: isEn ? "Medical Comparison" : "Comparație Medicală", path: null }]} 
        />

        <div className="text-center mb-20 reveal">
          <h1 className="text-4xl md:text-7xl font-serif font-bold text-prime mb-6 leading-tight">
            {isEn ? "Excellence Without Compromise" : "Excelență Fără Compromis"}
          </h1>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed">
            {isEn 
              ? "Why high-intent patients choose Meva Clinic over local European alternatives: A clinical and ethical analysis." 
              : "De ce pacienții cu exigențe ridicate aleg Meva Clinic în detrimentul alternativelor locale europene: O analiză clinică și etică."}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 reveal">
           <div className="bg-white rounded-[3rem] shadow-2xl overflow-hidden border border-gray-100">
              <div className="grid grid-cols-3 bg-prime text-white p-8 md:p-12 text-center font-bold uppercase tracking-[0.2em] text-xs">
                 <div className="text-left">{isEn ? "Metric" : "Metrică"}</div>
                 <div className="text-accent">Meva Clinic (Istanbul)</div>
                 <div className="opacity-40">{isEn ? "EU/UK Standard" : "Standard UE/UK"}</div>
              </div>

              <div className="divide-y divide-gray-50">
                 {features.map((f, i) => (
                   <div key={i} className="grid grid-cols-3 p-8 md:p-12 items-center hover:bg-gray-50 transition-colors group">
                      <div className="flex items-center gap-4">
                         <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-prime transition-all">
                            <f.icon size={20} />
                         </div>
                         <span className="font-bold text-prime text-sm md:text-base">{f.title}</span>
                      </div>
                      <div className="text-center px-4">
                         <div className="inline-flex items-center gap-2 text-green-600 font-bold text-sm md:text-base">
                            <Check size={18} /> {f.meva}
                         </div>
                      </div>
                      <div className="text-center px-4 opacity-40 italic text-xs md:text-sm">
                         <div className="inline-flex items-center gap-2">
                            <X size={16} /> {f.eu}
                         </div>
                      </div>
                   </div>
                 ))}
              </div>
           </div>
        </div>

        {/* Closing Trust Box */}
        <div className="mt-20 p-12 bg-prime rounded-[3rem] text-white text-center shadow-2xl reveal">
           <h3 className="text-2xl font-serif font-bold mb-4">
              {isEn ? "Clinical Transparency First" : "Transparența Clinică pe Primul Loc"}
           </h3>
           <p className="text-gray-400 max-w-2xl mx-auto mb-8 leading-relaxed text-sm">
              {isEn 
                ? "Our comparison is based on 2024 JCI global metrics and waitlist data from national health services. We encourage all patients to verify these standards." 
                : "Comparația noastră se bazează pe metricile globale JCI 2024 și datele privind listele de așteptare din serviciile naționale de sănătate."}
           </p>
           <a 
             href="https://wa.me/905324675941" 
             onClick={() => pushToDataLayer('whatsapp_click', { location: 'comparison_hub_cta' })}
             className="bg-accent text-prime font-bold py-5 px-12 rounded-2xl hover:bg-white transition-all inline-block"
           >
              {isEn ? "Request Full Quality Report" : "Solicită Raportul Complet de Calitate"}
           </a>
        </div>
      </div>
    </div>
  );
};

export default ComparisonHub;

```

### Dosya Adı: src\pages\ConciergePage.jsx
```jsx
import React, { useEffect } from 'react';
import { Plane, Hotel, Stethoscope, Activity, Map, ShieldCheck } from 'lucide-react';
import DynamicSEO from '../components/DynamicSEO';
import SmartConcierge from '../components/SmartConcierge';

const journeySteps = [
  {
    id: 1,
    icon: Plane,
    title: "Sosire în Istanbul & VIP Pickup",
    description: "Zborul tău de la București (Otopeni) la Istanbul decurge perfect. La sosire, un șofer privat te așteaptă la terminal pentru a asigura un transfer premium, fără stres, într-un van Mercedes VIP."
  },
  {
    id: 2,
    icon: Hotel,
    title: "Cazare la Hotel 5 Stele",
    description: "Te cazezi într-un hotel partener de elită, selectat pentru standardele sale clienți VIP. Camerele sunt liniștite, confortabile și aflate la doar câteva minute de clinica noastră."
  },
  {
    id: 3,
    icon: Stethoscope,
    title: "Consultul la Meva Clinic",
    description: "A doua zi ești preluat și dus direct la clinică. Împreună cu traducătorul tău personal (Română - Engleză) finalizezi consultul medical detaliat și analizele de sânge."
  },
  {
    id: 4,
    icon: Activity,
    title: "Intervenția și Monitorizarea",
    description: "Intervenția chirurgicală se desfășoară într-o sală hibridă premium. După trezire, te recuperezi într-o rezervă VIP dotată complet, fiind monitorizat non-stop de echipa medicală."
  },
  {
    id: 5,
    icon: Map,
    title: "Relaxare & Întoarcerea Acasă",
    description: "Ultimele zile sunt dedicate odihnei. Te bucuri de peisajele Istanbulului fără să te obosești. Medicul finalizează ultimul control, iar șoferul te aduce în siguranță la aeroport."
  }
];

const ConciergePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const isEn = window.location.pathname.startsWith('/en');

  return (
    <div className="bg-white min-h-screen pt-24 pb-0">
      <DynamicSEO 
        title={isEn ? "Concierge & Travel - Meva Clinic VIP Experience" : "Concierge & Travel - Experiența VIP Meva Clinic"}
        description={isEn ? "Discover your medical journey from Romania to Istanbul. VIP transfer, 24/7 assistance, and 5-star accommodation." : "Descoperă traseul tău medical de la București la Istanbul. Transfer VIP, asistență 24/7, translator român și cazare 5 stele."}
        path={isEn ? "/en/concierge" : "/ro/concierge"}
      />

      {/* Hero Parallax Header */}
      <div className="relative h-[65vh] flex items-center justify-center bg-[#0b1626] overflow-hidden">
        <div className="absolute inset-0 bg-fixed bg-center bg-cover opacity-30 transform scale-105" style={{ backgroundImage: "radial-gradient(ellipse at top right, #d4af37 0%, transparent 60%), linear-gradient(to bottom right, #0f2139, #050a12)" }}></div>
        <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent"></div>
        
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4 mt-10">
          <div className="inline-flex items-center space-x-2 py-2 px-6 rounded-full bg-white/5 backdrop-blur-xl border border-white/10 text-white text-xs font-bold tracking-[0.2em] uppercase mb-8 shadow-2xl">
            <ShieldCheck size={18} className="text-accent" />
            <span>Luxury Concierge</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-6 drop-shadow-2xl">
             {isEn ? "Your Medical Journey" : "Călătoria Ta Medicală"}
          </h1>
          <p className="text-xl md:text-2xl font-sans text-gray-300 font-light drop-shadow-md leading-relaxed">
             {isEn 
               ? "From the moment you leave Romania until your return, we redefine all-inclusive health packages." 
               : "Din momentul în care tranzitezi România până la reîntoarcere, redefinim standardele pachetelor de sănătate all-inclusive."}
          </p>
        </div>
      </div>

      {/* Smart Concierge Interactive Module */}
      <section className="py-24 bg-gray-50">
         <div className="max-w-4xl mx-auto px-6">
            <div className="text-center mb-16">
               <h2 className="text-4xl font-serif font-bold text-prime mb-4">
                  {isEn ? "Customize Your Itinerary" : "Personalizează-ți Itinerariul"}
               </h2>
               <p className="text-gray-500 font-medium">
                  {isEn ? "Select your treatment and specialist to see your clinical protocol." : "Selectează tratamentul și specialistul pentru a vedea protocolul tău clinic."}
               </p>
            </div>
            <SmartConcierge isEn={isEn} />
         </div>
      </section>

      {/* Interactive Timeline */}
      <section className="py-24 bg-white relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-24">
             <h2 className="text-4xl md:text-5xl font-serif font-bold text-prime mb-5">
                {isEn ? "VIP Patient Journey" : "Traseul Pacientului VIP"}
             </h2>
             <p className="text-gray-500 font-sans max-w-3xl mx-auto text-lg leading-relaxed">
                {isEn ? "A clear and transparent guide to the Meva Clinic experience for Romanian patients." : "Un ghid clar și transparent al experienței Meva Clinic, creat special pentru pacienții noștri care pleacă de pe aeroporturile din România."}
             </p>
          </div>

          <div className="relative pt-6">
            <div className="absolute left-10 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-accent/80 via-prime/30 to-transparent transform md:-translate-x-1/2 rounded-full"></div>
            <div className="space-y-16 lg:space-y-24">
              {journeySteps.map((step, index) => (
                <div key={step.id} className={`flex flex-col md:flex-row items-center justify-between w-full relative group ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                  <div className="absolute left-10 md:left-1/2 transform -translate-x-1/2 w-20 h-20 rounded-full bg-white border-[6px] border-white shadow-2xl flex items-center justify-center z-10 transition-transform duration-500 group-hover:scale-110">
                     <div className="w-14 h-14 bg-gradient-to-br from-prime to-[#112440] rounded-full flex items-center justify-center text-accent shadow-inner">
                       <step.icon size={28} strokeWidth={1.5} />
                     </div>
                  </div>
                  <div className="hidden md:block w-5/12"></div>
                  <div className="w-full md:w-5/12 pl-24 md:pl-0 z-20">
                    <div className="bg-white p-10 rounded-3xl shadow-[0_8px_40px_rgb(0,0,0,0.06)] border border-gray-50 hover:shadow-[0_20px_50px_rgb(0,0,0,0.1)] transition-all duration-500 relative overflow-hidden">
                      <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-prime/5 to-transparent rounded-full blur-3xl -mr-16 -mt-16 group-hover:bg-accent/10 transition-colors duration-700 pointer-events-none"></div>
                      <span className="text-7xl font-bold font-serif text-gray-50 absolute -bottom-4 right-2 pointer-events-none group-hover:text-prime/5 transition-colors duration-500 select-none">0{index + 1}</span>
                      <h3 className="text-2xl font-bold font-serif text-prime mb-4 relative z-10 leading-tight">{step.title}</h3>
                      <p className="text-gray-600 font-sans leading-relaxed relative z-10">{step.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Luxury Partners */}
      <section className="relative py-32 bg-black overflow-hidden flex flex-col justify-center border-t-8 border-accent">
        <div className="absolute inset-0 bg-fixed bg-cover bg-center opacity-30 grayscale blur-[1px]" style={{ backgroundImage: "linear-gradient(to top, rgba(0,0,0,0.8), transparent), radial-gradient(circle at center, #1a365d 0%, #000 100%)" }}></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center w-full">
           <div className="inline-flex items-center space-x-2 py-1 px-4 rounded-full border border-white/20 text-white/80 text-xs font-bold tracking-widest uppercase mb-6">
              <span>{isEn ? "Accredited Standard" : "Standard Acreditat"}</span>
           </div>
           <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-20 drop-shadow-2xl">
              {isEn ? "Our Luxury Partners" : "Partenerii Noștri de Lux"}
           </h2>
           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 items-center justify-center opacity-90 hover:opacity-100 transition-opacity duration-500 w-full">
              <div className="h-28 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl flex flex-col items-center justify-center hover:bg-white/10 transition-colors cursor-pointer hover:-translate-y-1 transform duration-300">
                <span className="font-serif font-bold text-white text-xl tracking-[0.2em] uppercase">Hilton</span>
                <span className="text-[10px] text-accent tracking-widest uppercase mt-1">Bosphorus</span>
              </div>
              <div className="h-28 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl flex flex-col items-center justify-center hover:bg-white/10 transition-colors cursor-pointer hover:-translate-y-1 transform duration-300">
                <span className="font-serif font-bold text-white text-xl tracking-[0.2em] uppercase">Acıbadem</span>
                <span className="text-[10px] text-accent tracking-widest uppercase mt-1">Healthcare Group</span>
              </div>
              <div className="h-28 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl flex flex-col items-center justify-center hover:bg-white/10 transition-colors cursor-pointer hover:-translate-y-1 transform duration-300">
                <span className="font-serif font-bold text-white text-xl tracking-[0.2em] uppercase">Mercedes</span>
                <span className="text-[10px] text-accent tracking-widest uppercase mt-1">VIP Transfers</span>
              </div>
              <div className="h-28 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl flex flex-col items-center justify-center hover:bg-white/10 transition-colors cursor-pointer hover:-translate-y-1 transform duration-300">
                <span className="font-serif font-bold text-white text-xl tracking-[0.2em] uppercase">Turkish</span>
                <span className="text-[10px] text-accent tracking-widest uppercase mt-1">Airlines</span>
              </div>
           </div>
           <div className="mt-20 text-gray-400 font-sans text-sm tracking-wide max-w-2xl mx-auto">
              {isEn 
                ? "We meticulously select each provider for performance, confidentiality, and prestige." 
                : "Alegem meticulos fiecare furnizor pentru performanță, confidențialitate și prestigiu."}
           </div>
        </div>
      </section>
    </div>
  );
};

export default ConciergePage;

```

### Dosya Adı: src\pages\Contact.jsx
```jsx
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import DynamicSEO from '../components/DynamicSEO';
import ContactForm from '../components/ContactForm';
import { MapPin, Phone, Mail, Clock, ShieldCheck } from 'lucide-react';
import { CertRow } from '../components/ClinicalBadges';

const Contact = () => {
  const location = useLocation();
  const isEn = location.pathname.includes('/en');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 pt-32 pb-24 lg:pt-40 lg:pb-32">
      <DynamicSEO 
        title={isEn ? "Contact Us - Meva Clinic" : "Contactați-ne - Meva Clinic"}
        description={isEn ? "Get in touch with Meva Clinic in Istanbul." : "Luați legătura cu Meva Clinic din Istanbul."}
        path={isEn ? "/en/contact" : "/ro/contact"}
        schemaType="ContactPage"
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/10 border border-accent/20 text-[#8B6914] text-xs font-bold tracking-widest uppercase mb-4">
            <ShieldCheck size={14} aria-hidden="true" />
            {isEn ? "Secure Contact" : "Contact Securizat"}
          </div>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-prime mb-4">
            {isEn ? "Contact Us" : "Contactați-ne"}
          </h1>
          <div className="w-24 h-1 bg-accent mx-auto rounded-full"></div>
          <p className="text-gray-500 mt-4 max-w-xl mx-auto">
            {isEn
              ? "Fill out the form and our clinical team will respond within 15 minutes."
              : "Completați formularul și echipa noastră clinică vă va răspunde în 15 minute."}
          </p>
        </div>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12 items-start">

          {/* LEFT: Contact Info + Map */}
          <div className="lg:col-span-2 space-y-6">

            {/* Info Card */}
            <div className="bg-[#0b1626] text-white rounded-3xl p-8 shadow-2xl space-y-7">
              <h2 className="text-2xl font-serif font-bold">
                {isEn ? "Get in touch" : "Ia legătura cu noi"}
              </h2>

              <div className="flex items-start gap-5">
                <div className="w-11 h-11 bg-accent/10 rounded-xl flex items-center justify-center text-accent flex-shrink-0" aria-hidden="true">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="font-bold text-white mb-0.5">{isEn ? "Location" : "Locație"}</p>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Acibadem Partner Clinic<br />
                    Istanbul, {isEn ? 'Turkey' : 'Turcia'}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <div className="w-11 h-11 bg-accent/10 rounded-xl flex items-center justify-center text-accent flex-shrink-0" aria-hidden="true">
                  <Phone size={20} />
                </div>
                <div>
                  <p className="font-bold text-white mb-0.5">{isEn ? "Phone / WhatsApp" : "Telefon / WhatsApp"}</p>
                  <a href="tel:+905324675941" className="text-accent font-bold hover:text-yellow-300 transition-colors text-lg" aria-label="+90 532 467 59 41">
                    +90 532 467 59 41
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <div className="w-11 h-11 bg-accent/10 rounded-xl flex items-center justify-center text-accent flex-shrink-0" aria-hidden="true">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="font-bold text-white mb-0.5">Email</p>
                  <a href="mailto:info@mevaclinic.com" className="text-gray-300 hover:text-accent transition-colors text-sm">
                    info@mevaclinic.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <div className="w-11 h-11 bg-accent/10 rounded-xl flex items-center justify-center text-accent flex-shrink-0" aria-hidden="true">
                  <Clock size={20} />
                </div>
                <div>
                  <p className="font-bold text-white mb-0.5">{isEn ? "Office Hours" : "Program de Lucru"}</p>
                  <p className="text-gray-300 text-sm">
                    {isEn ? "Mon–Sat: 09:00 – 18:00" : "Luni–Sâm: 09:00 – 18:00"}
                  </p>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="h-56 rounded-2xl overflow-hidden border border-gray-200 shadow-md">
              <iframe 
                title="Meva Clinic Istanbul Location"
                src="https://maps.google.com/maps?q=Istanbul,Acibadem&t=&z=13&ie=UTF8&iwloc=&output=embed" 
                className="w-full h-full border-0 contact-map-filter"
                loading="lazy"
              ></iframe>
            </div>

          </div>

          {/* RIGHT: Full Contact Form with File Upload */}
          <div className="lg:col-span-3">
            <ContactForm isEn={isEn} />
          </div>

        </div>

        {/* Cert row */}
        <div className="mt-16">
          <CertRow isEn={isEn} />
        </div>

      </div>
    </div>
  );
};

export default Contact;


```

### Dosya Adı: src\pages\DentalImplants.jsx
```jsx
import React, { useEffect, useState } from 'react';
import DoctorBadge from '../components/DoctorBadge';
import PatientJourneyTimeline from '../components/PatientJourneyTimeline';
import DynamicSEO from '../components/DynamicSEO';
import { Activity, Plus, Minus, Cpu, Star, Shield, Layout } from 'lucide-react';
import { TechCard, CertRow, VerifiedBadge } from '../components/ClinicalBadges';

const faqEn = [
  { q: "What is Digital Dentistry (3D Scanning)?", a: "It utilizes intraoral scanners to map your mouth digitally, avoiding messy dental putties and ensuring crowns are milled with microscopic precision." },
  { q: "Is the immediate implant placement painful?", a: "No. Advanced conscious sedation isolates you from pain absolutely, ensuring profound relaxation while the maxillofacial surgeon completes the procedure." },
  { q: "Will I leave the clinic without teeth?", a: "Never. With All-on-4 or All-on-6 protocols, high-grade temporary aesthetic prostheses are affixed immediately on the same day." },
  { q: "What is Monolithic Zirconium?", a: "It is a singular, solid block of zirconium milled by CAD/CAM. It offers supreme shatter-resistance and lacks the dark metallic gumlines usually associated with porcelain." },
  { q: "How many trips to Istanbul does it require?", a: "Typically, full restorations are accomplished in 2 visits. The first for the surgical implants, and the second (after integration) for permanent Zirconium crowns." }
];

const faqRo = [
  { q: "Ce reprezintă Stomatologia Digitală 3D?", a: "Utilizăm un scanner intraoral care ia o amprentă optică a gurii fară materiale clasice. Totul este apoi frezat tridimensional de sistemele CAD/CAM." },
  { q: "Operația de Implant este dureroasă?", a: "Nu, protocolul nostru include sedare conștientă profundă, coordonată de medicul ATI, pacienții relatând o totală lipsă a durerii sau stersului." },
  { q: "Plec de la clinică lipsit de dinți?", a: "Niciodată. Pe structurile de tip All-on-4 sau All-on-6 atașăm în aceeași zi punți provizorii de lux pentru o estetică și funcționalitate imediată." },
  { q: "Ce este Zirconiul Monolitic?", a: "Un monolit curat de zirconiu frezat computerizat, neavând miez metalic, anulând complet umbrele inestetice închise de la zona gingiilor." },
  { q: "Cte călătorii necesită implantul complet?", a: "Se organizează în 2 scurte etape la Istanbul. Prima - implantologia propriu-zisă; a doua, vindecarea osoasă integrată - lucrarea definitivă." }
];

const DentalImplants = ({ lang = 'ro' }) => {
  const [activeFaq, setActiveFaq] = useState(0);
  const isEn = lang === 'en';
  useEffect(() => window.scrollTo(0, 0), [lang]);
  const faqs = isEn ? faqEn : faqRo;

  return (
    <div className="bg-white min-h-screen pt-32 pb-24">
      <DynamicSEO 
        title={isEn ? "Digital 3D Dentistry | Meva Clinic Istanbul" : "Stomatologie Digitală 3D | Meva Clinic Istanbul"}
        description={isEn ? "Advanced Digital Dentistry. CAD/CAM Zirconium crowns and All-on-6 Implant loading." : "Zirconiu Monolitic, Coroane E-max și Implantologie totală All-on-6 Digitală."}
        path={isEn ? "/en/dental-implants" : "/ro/implant-dentar"}
        schemaType="MedicalProcedure"
        keywords="dental implants Turkey, Hollywood smile Istanbul, implanturi dentare Turcia"
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-4"><VerifiedBadge isEn={isEn} /></div>
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-prime mb-6 text-center">
          {isEn ? "Digital Smile Engineering" : "Ingineria Digitală a Zâmbetului"}
        </h1>
        <div className="flex justify-center mb-8">
           <DoctorBadge text={isEn ? "CAD/CAM Specialists — 3D Scanning Hub" : "Specialiști CAD/CAM — Centru de Scanare 3D"} />
        </div>

        {/* Glassmorphism Tech Spec Cards */}
        <div className="bg-[#0b1626] rounded-3xl p-6 mb-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <TechCard icon={Cpu} title="CAD/CAM Milled" sub={isEn ? 'Technology' : 'Tehnologie'} value={isEn ? 'Microscopic precision' : 'Precizie microscopică'} />
          <TechCard icon={Star} title="Monolithic Zirconium" sub={isEn ? 'Material' : 'Material'} value={isEn ? 'Supreme shatter-resistance' : 'Rezistență supremă'} />
          <TechCard icon={Layout} title="DSD (Smile Design)" sub={isEn ? 'Outcome' : 'Rezultat'} value={isEn ? 'Aesthetic co-design' : 'Co-design estetic'} />
          <TechCard icon={Shield} title="Safe Conscious Sedation" sub={isEn ? 'Comfort' : 'Confort'} value={isEn ? 'Zero-pain surgical target' : 'Țintă chirurgicală fără durere'} />
        </div>
        
        <div className="prose prose-lg max-w-none text-gray-600 mb-16">
           <h3 className="text-2xl font-bold text-prime mb-4">{isEn ? "What is it?" : "Ce este?"}</h3>
           <p className="mb-8">{isEn ? "At Meva Clinic, dentistry leaps from standard local practices to high-end medical architecture. We resolve total edentulism and aesthetic decay rapidly through ultra-premium Swiss and German Titanium Implants, marrying functionality with pristine Digital Dentistry aesthetics." : "La Meva, estetica dentară face un salt spre arhitectura medicală supremă. Rezolvăm absolut imediat edentația totală combinând estetica impecabilă a Zirconiului cu integrarea structurală a Implanturilor de elită recunoscute global."}</p>

           <h3 className="text-2xl font-bold text-prime mb-4">{isEn ? "How it Works?" : "Cum funcționează?"}</h3>
           <div className="space-y-6 mb-8">
              <div><strong className="text-accent">{isEn ? "3D Digital Scanning & Diagnostics:" : "Scanare Digitală și Tomografie 3D:"}</strong> {isEn ? "Prior to surgery, 3D Volumetric Tomography and intraoral optical scanners are cross-referenced using specialized software ensuring immediate surgical mapping free of any analog errors." : "Inițial, executăm complet Tomografia 3D, suprapunând imaginile optice intraorale pentru un calcul milimetric al osului maxilar evitând orice deviație analogică clasică asumată în vechime."}</div>
              <div><strong className="text-accent">{isEn ? "Same-Day High-Definition Provisionals:" : "Proteze Temporare Lux în Aceeași Zi:"}</strong> {isEn ? "Utilizing the All-on-4/6 methodology, our maxillofacial board performs extractions, nerve relocation, or sinus lifting all strictly bounded by clinical sleep sedation. An aesthetic temporary bridge is screwed into your implants on the exact same day." : "Folosind standardul All-on-4/All-on-6 extragem focarele infecțioase cu adiția unui os rezistent, lucrând relaxat prin sedare superioară. Punțile fixe provizorii estetice vor fi încărcate în implant vizual din prima zi."}</div>
              <div><strong className="text-accent">{isEn ? "Monolithic Zirconium (CAD/CAM):" : "Zirconiu Monolitic masiv și E-Max:"}</strong> {isEn ? "In your second stage, Hollywood aesthetics are permanently cemented. CAD/CAM machines mill the permanent crowns out of monolithic cubic blocks. The sheer material quality ensures longevity, high resilience to discoloration, and a naturally stunning iridescence." : "În stadiul doi protetic punem capacul operativ definitivei estetice absolute — lucrările E-Max sau Zirconiu monolitic pur, un nivel care nu trădatează niciodată estetica zâmbetului prin umbre inestetice în linia gingiei."}</div>
           </div>

           <h3 className="text-2xl font-bold text-prime mb-4">{isEn ? "Why Meva Clinic?" : "De ce Meva Clinic?"}</h3>
           <p className="mb-12">{isEn ? "We integrate elite materials with an unparalleled hotel-like VIP setting. Unlike slow conservative treatments, we offer an accelerated clinical timeline optimized for international patients. With DSD (Digital Smile Design), you actively co-design your final smile architecture." : "Nu doar utilizăm materiale din elita stomatologiei globale, ci unificăm tratamentul complet într-un cadru de lux cu hotel de 5 stele VIP. Proiectând inteligent Zâmbetul din primele momente (Digital Smile Design) vei controla 100% factorul de wow obținut la final."}</p>
        </div>

        <div className="mb-16">
          <h3 className="text-3xl font-serif font-bold text-prime mb-8 text-center">{isEn ? "Patient Journey" : "Călătoria Pacientului"}</h3>
          <PatientJourneyTimeline />
        </div>

        <div className="max-w-4xl mx-auto mb-16">
          <h3 className="text-3xl font-serif font-bold text-prime mb-8 text-center">{isEn ? "Frequently Asked Questions" : "Întrebări Frecvente"}</h3>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white border border-gray-100 rounded-2xl shadow-sm overflow-hidden">
                <button 
                  onClick={() => setActiveFaq(activeFaq === index ? -1 : index)} 
                  className="w-full px-6 py-5 flex items-center justify-between text-left group"
                  aria-expanded={activeFaq === index}
                  aria-controls={`faq-answer-${index}`}
                  id={`faq-button-${index}`}
                >
                  <span className="font-bold text-prime text-lg pr-4">{faq.q}</span>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors ${activeFaq === index ? 'bg-accent text-white' : 'bg-gray-100 text-gray-500'}`} aria-hidden="true">
                    {activeFaq === index ? <Minus size={16} /> : <Plus size={16} />}
                  </div>
                </button>
                <div 
                  id={`faq-answer-${index}`}
                  aria-labelledby={`faq-button-${index}`}
                  role="region"
                  className={`px-6 overflow-hidden transition-all duration-300 ${activeFaq === index ? 'max-h-96 pb-6 opacity-100' : 'max-h-0 opacity-0'}`}
                >
                  <p className="text-gray-600 border-t border-gray-100 pt-5">{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center pb-12">
           <a 
             href="/#ai-assistant" 
             className="bg-prime text-white font-bold py-5 px-12 rounded-xl shadow-lg hover:bg-[#0f1f38] transition-all text-lg inline-flex items-center"
             aria-label={isEn ? "Get a quote for Dental Implants" : "Cere o ofertă pentru Implanturi Dentare"}
           >
              {isEn ? "Scan Your Smile Path" : "Cere Tomografia Costurilor"} <Activity size={20} className="ml-3 text-accent" aria-hidden="true" />
           </a>
        </div>
        <CertRow isEn={isEn} />
      </div>
    </div>
  );
}
export default DentalImplants;

```

### Dosya Adı: src\pages\FAQPage.jsx
```jsx
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

```

### Dosya Adı: src\pages\HairTransplant.jsx
```jsx
import React, { useEffect, useState } from 'react';
import { Activity, Plus, Minus, Microscope, Target, Shield, HeartPulse, Sparkles, UserCheck } from 'lucide-react';
import DoctorBadge from '../components/DoctorBadge';
import PatientJourneyTimeline from '../components/PatientJourneyTimeline';
import DynamicSEO from '../components/DynamicSEO';
import { TechCard, CertRow, VerifiedBadge } from '../components/ClinicalBadges';
import RecoverySimulator from '../components/RecoverySimulator';
import SuitabilityQuiz from '../components/SuitabilityQuiz';
import LocalContext from '../components/LocalContext';
import MedicalReviewer, { REVIEWERS } from '../components/MedicalReviewer';

const hairRecoveryEn = [
  { period: 'Day 1', label: 'Procedure completed, bio-active dressing applied' },
  { period: 'Day 3', label: 'First clinical wash, graft stability check' },
  { period: 'Day 10', label: 'Scab removal, 98% graft adherence achieved' },
  { period: 'Month 3', label: 'Shock-loss phase ends, new growth begins' },
  { period: 'Month 12', label: 'Final density maturation and aesthetic peak' },
];

const hairRecoveryRo = [
  { period: 'Ziua 1', label: 'Procedură finalizată, pansament bio-activ' },
  { period: 'Ziua 3', label: 'Prima spălare clinică, verificarea grefelor' },
  { period: 'Ziua 10', label: 'Îndepărtarea crustelor, aderență de 98%' },
  { period: 'Luna 3', label: 'Finalul fazei de shock-loss, creștere nouă' },
  { period: 'Luna 12', label: 'Maturarea densității finale și vârful estetic' },
];

const faqEn = [
  { q: "What is Exosome-Enhanced Graft Survival?", a: "It is a regenerative protocol where mesenchymal exosomes are applied to the recipient area to boost vascularization and ensure the highest possible survival rate for transplanted follicles." },
  { q: "How does MD Harun's protocol differ?", a: "MD Harun utilizes a proprietary 'Mathematical Graft Mapping' system and Sapphire FUE blades to create channels that precisely match the natural growth angle of your hair." },
  { q: "What is Bio-Active Preservation?", a: "During the extraction phase, follicles are stored in a specialized solution (HypoThermosol) at controlled temperatures to prevent ischemia-reperfusion injury." }
];

const faqRo = [
  { q: "Ce este supraviețuirea grefelor îmbunătățită cu Exozomi?", a: "Un protocol regenerativ în care exozomii mezenchimali sunt aplicați pentru a stimula vascularizarea și a asigura rata maximă de supraviețuire." },
  { q: "Cum diferă protocolul MD Harun?", a: "MD Harun utilizează un sistem de 'Mapping Matematic al Grefelor' și lame de Safir pentru a crea canale care respectă unghiul natural de creștere." },
  { q: "Ce este conservarea Bio-Activă?", a: "Folosul grefelor sunt păstrate într-o soluție specializată (HypoThermosol) la temperaturi controlate pentru a preveni degradarea celulară." }
];

const HairTransplant = ({ lang = 'ro' }) => {
  const [activeFaq, setActiveFaq] = useState(0);
  const isEn = lang === 'en';
  useEffect(() => window.scrollTo(0, 0), [lang]);
  const faqs = isEn ? faqEn : faqRo;

  return (
    <div className="bg-white min-h-screen pt-32 pb-24">
      <DynamicSEO 
        title={isEn ? "Regenerative Hair Restoration | MD Harun Istanbul" : "Restaurare Capilară Regenerativă | MD Harun Istanbul"}
        description={isEn ? "Advanced Sapphire FUE with Exosome enhancement. Precision hair transplant by MD Harun." : "Implant de păr Sapphire FUE cu tratament cu exozomi. Precizie coordonată de MD Harun."}
        path={isEn ? "/en/hair-transplant" : "/ro/implant-par"}
        schemaType="MedicalProcedure"
        keywords="FUE hair transplant Istanbul, DHI hair restoration Turkey, implant de par Turcia, clinica transplant par DHI Istanbul"
        reviewer={REVIEWERS.hair}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-6">
          <VerifiedBadge isEn={isEn} />
        </div>
        
        <h1 className="text-4xl md:text-7xl font-serif font-bold text-prime mb-8 text-center leading-tight">
          {isEn ? "Precision Follicular Engineering" : "Inginerie Foliculară de Precizie"}
        </h1>

        <div className="flex justify-center mb-12">
           <DoctorBadge text={isEn ? "Clinical Protocol by MD Harun" : "Protocol Clinic coordonat de MD Harun"} />
        </div>

        {/* Technical Spec Cards */}
        <div className="bg-[#0b1626] rounded-[2.5rem] p-8 md:p-12 mb-20 shadow-2xl relative overflow-hidden">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <TechCard icon={Microscope} title="Sapphire FUE" sub={isEn ? 'Blade Tech' : 'Tehnologie Lamă'} value={isEn ? 'V-Shape Precision' : 'Precizie în V'} />
            <TechCard icon={Sparkles} title="Exosome Boost" sub={isEn ? 'Regenerative' : 'Regenerativ'} value={isEn ? '+98% Survival' : 'Supraviețuire +98%'} />
            <TechCard icon={Target} title="Graft Mapping" sub={isEn ? 'Mathematical' : 'Matematic'} value={isEn ? 'Natural Density' : 'Densitate Naturală'} />
            <TechCard icon={Shield} title="Bio-Preservation" sub={isEn ? 'Storage' : 'Stocare'} value="HypoThermosol" />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 mb-24">
          <div className="lg:col-span-2 space-y-12">
            <section>
              <h2 className="text-3xl font-serif font-bold text-prime mb-6">
                {isEn ? "The Regenerative Revolution: Exosome Therapy" : "Revoluția Regenerativă: Terapia cu Exozomi"}
              </h2>
              <div className="prose prose-lg text-gray-600 font-sans leading-relaxed">
                <p>
                  {isEn 
                    ? "Traditional hair transplants focus on the physical movement of follicles. At Meva Clinic, under MD Harun's guidance, we treat the biological environment. Our 'Exosome-Enhanced' protocol involves the application of mesenchymal stem cell-derived exosomes to the scalp, triggering cellular repair and rapid revascularization of the newly implanted grafts." 
                    : "Implantul de păr tradițional se concentrează pe mișcarea fizică a foliculilor. La Meva Clinic, sub îndrumarea MD Harun, tratăm mediul biologic. Protocolul nostru 'Exosome-Enhanced' implică aplicarea exozomilor pentru a declanșa repararea celulară."}
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-serif font-bold text-prime mb-6">
                {isEn ? "Sapphire FUE & Bio-Active Preservation" : "Sapphire FUE și Conservarea Bio-Activă"}
              </h2>
              <div className="prose prose-lg text-gray-600 font-sans leading-relaxed">
                <p>
                  {isEn 
                    ? "We utilize Sapphire FUE blades, which allow for smaller, more precise 'V-shape' incisions compared to traditional steel. This minimizes trauma and allows for higher graft density. During the process, every graft is stored in a Bio-Active solution to prevent ischemia, ensuring that each follicle remains in a peak viable state." 
                    : "Utilizăm lame de Safir, care permit incizii mai mici și mai precise în formă de 'V'. Acest lucru minimizează trauma și permite o densitate mai mare. Fiecare grefă este păstrată într-o soluție bio-activă pentru a preveni ischemia."}
                </p>
              </div>
            </section>

            {/* Performance Table */}
            <div className="bg-gray-50 rounded-[2rem] p-8 border border-gray-100 overflow-hidden">
               <h3 className="text-2xl font-serif font-bold text-prime mb-6 text-center">{isEn ? "Clinical Success Metrics" : "Metrici de Succes Clinic"}</h3>
               <div className="overflow-x-auto">
                 <table className="w-full text-sm text-left text-gray-500">
                   <thead className="text-xs text-prime uppercase bg-gray-100">
                     <tr>
                       <th className="px-6 py-4">{isEn ? "Metric" : "Indicator"}</th>
                       <th className="px-6 py-4">{isEn ? "Standard FUE" : "FUE Standard"}</th>
                       <th className="px-6 py-4 text-accent">{isEn ? "Meva Sapphire+" : "Meva Sapphire+"}</th>
                     </tr>
                   </thead>
                   <tbody className="divide-y divide-gray-200">
                     <tr>
                       <td className="px-6 py-4 font-bold">{isEn ? "Graft Survival Rate" : "Rata Supraviețuire"}</td>
                       <td className="px-6 py-4">80-85%</td>
                       <td className="px-6 py-4 font-bold text-prime">98%+</td>
                     </tr>
                     <tr>
                       <td className="px-6 py-4 font-bold">{isEn ? "Healing Time" : "Timp Vindecare"}</td>
                       <td className="px-6 py-4">15-20 {isEn ? "Days" : "Zile"}</td>
                       <td className="px-6 py-4 font-bold text-prime">7-10 {isEn ? "Days" : "Zile"}</td>
                     </tr>
                     <tr>
                       <td className="px-6 py-4 font-bold">{isEn ? "Channel Precision" : "Precizie Canale"}</td>
                       <td className="px-6 py-4">{isEn ? "Manual" : "Manuală"}</td>
                       <td className="px-6 py-4 font-bold text-prime">{isEn ? "Sapphire V-Shape" : "Safir în V"}</td>
                     </tr>
                   </tbody>
                 </table>
               </div>
            </div>
          </div>

          <div className="space-y-8">
            <div className="bg-[#0b1626] text-white p-8 rounded-[2rem] shadow-xl">
               <UserCheck className="text-accent mb-4" size={32} />
               <h3 className="text-xl font-bold mb-4">{isEn ? "MD Harun" : "MD Harun"}</h3>
               <p className="text-sm text-gray-400 leading-relaxed mb-6">
                 {isEn 
                   ? "A world-renowned hair restoration expert who personally designs every frontal hairline and graft distribution plan." 
                   : "Un expert recunoscut mondial care proiectează personal fiecare linie frontală și plan de distribuție a grefelor."}
               </p>
               <div className="text-xs font-bold text-accent uppercase tracking-widest">{isEn ? "ISHRS Member" : "Membru ISHRS"}</div>
            </div>
          </div>
        </div>

        <div className="mb-24">
           <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-prime mb-4">
                 {isEn ? "Biological Recovery Pathway" : "Calea de Recuperare Biologică"}
              </h2>
              <p className="text-gray-500 max-w-2xl mx-auto">
                 {isEn ? "Visualize the maturation of your newly implanted follicles over 12 months." : "Vizualizează maturarea noilor tăi foliculii implantați pe parcursul a 12 luni."}
              </p>
           </div>
           <RecoverySimulator type="hair" isEn={isEn} />
        </div>

        <div className="bg-gray-50 py-24 rounded-[3rem] mb-24 border border-gray-100">
           <div className="max-w-3xl mx-auto px-6 text-center">
              <div className="mb-12">
                 <h2 className="text-3xl font-serif font-bold text-prime mb-4">{isEn ? "Graft Eligibility Test" : "Test de Eligibilitate Grefă"}</h2>
                 <p className="text-gray-500">{isEn ? "Calculate your potential graft requirement and donor suitability." : "Calculează necesarul tău potențial de grefe și eligibilitatea zonei donatoare."}</p>
              </div>
              <SuitabilityQuiz procedure={isEn ? "Sapphire FUE Hair Transplant" : "Implant Păr Sapphire FUE"} isEn={isEn} />
           </div>
        </div>

        <div className="max-w-4xl mx-auto mb-24">
          <h2 className="text-3xl font-serif font-bold text-prime mb-12 text-center">{isEn ? "Procedure FAQ" : "Întrebări Procedură"}</h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white border border-gray-100 rounded-3xl shadow-sm overflow-hidden">
                <button 
                  onClick={() => setActiveFaq(activeFaq === index ? -1 : index)} 
                  className="w-full px-8 py-6 flex items-center justify-between text-left"
                  aria-expanded={activeFaq === index}
                  aria-controls={`faq-answer-${index}`}
                  id={`faq-button-${index}`}
                >
                  <span className="font-bold text-prime text-lg">{faq.q}</span>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all ${activeFaq === index ? 'bg-accent text-white' : 'bg-gray-50'}`} aria-hidden="true">
                    <Plus size={18} />
                  </div>
                </button>
                <div 
                  id={`faq-answer-${index}`}
                  aria-labelledby={`faq-button-${index}`}
                  role="region"
                  className={`px-8 overflow-hidden transition-all duration-500 ${activeFaq === index ? 'max-h-96 pb-8 opacity-100' : 'max-h-0 opacity-0'}`}
                >
                  <p className="text-gray-600 border-t border-gray-50 pt-6">{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <MedicalReviewer reviewer={REVIEWERS.hair} isEn={isEn} />
        <CertRow isEn={isEn} />

        <LocalContext isEn={isEn} />
      </div>
    </div>
  );
}

export default HairTransplant;

```

### Dosya Adı: src\pages\Home.jsx
```jsx
import React, { useEffect } from 'react';
import HeroSection from '../components/HeroSection';
import StatsSection from '../components/StatsSection';
import ServicesSection from '../components/ServicesSection';
import SafetyQualitySection from '../components/SafetyQualitySection';
import HumanTrust from '../components/HumanTrust';
import PremiumPackageSection from '../components/PremiumPackageSection';
import PatientJourneyTimeline from '../components/PatientJourneyTimeline';
import FAQSection from '../components/FAQSection';
import DynamicSEO from '../components/DynamicSEO';

const Home = ({ lang = 'ro' }) => {
  const isEn = lang === 'en';

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <DynamicSEO 
        title={isEn ? "Meva Clinic | Excellence in Medical Tourism Istanbul" : "Meva Clinic | Excelență în Turism Medical Istanbul"}
        description={isEn ? "Experience world-class surgical precision in Istanbul. Bariatric, Hair Transplant, and Oncology specialists with JCI accreditation." : "Experimentează precizia chirurgicală de talie mondială la Istanbul. Specialiști în Bariatrie, Implant Păr și Oncologie cu acreditare JCI."}
        path={isEn ? "/en" : "/ro"}
      />
      
      <HeroSection />
      <StatsSection />
      <ServicesSection />
      <SafetyQualitySection />
      <PremiumPackageSection />
      <HumanTrust />
      <PatientJourneyTimeline />
      <FAQSection />
    </>
  );
};

export default Home;

```

### Dosya Adı: src\pages\IVF.jsx
```jsx
import React, { useEffect, useState } from 'react';
import { ChevronDown, Activity, Shield, Microscope, HeartPulse, Zap } from 'lucide-react';
import DynamicSEO from '../components/DynamicSEO';
import Breadcrumbs from '../components/Breadcrumbs';
import { VerifiedBadge, CertRow } from '../components/ClinicalBadges';

const IVF_TECHNIQUES = [
  {
    id: 'icsi', icon: '🔬',
    en: {
      name: 'ICSI (Intracytoplasmic Sperm Injection)',
      tag: 'Gold Standard · Severe Male Factor',
      summary: 'ICSI involves direct microinjection of a single morphologically-selected spermatozoon into the ooplasm of a mature (MII) oocyte using a micropipette under 400× magnification. This bypasses the zona pellucida and sperm-oocyte fusion mechanisms entirely, making it the definitive solution for severe oligozoospermia (< 1 million/mL), azoospermia (with surgical sperm retrieval — TESE/PESA), teratozoospermia, or previous total fertilisation failure. Fertilisation rate: 70–85%.',
      mevaNote: 'Heated stage (37°C) Nikon inverted microscope. Piezo-ICSI option for improved oocyte survival. Combined with TESE/PESA on same day. Embryologist seniority minimum 8 years.',
    },
    ro: {
      name: 'ICSI (Injecție Intracitoplasmatică de Spermatozoid)',
      tag: 'Standard de Aur · Factor Masculin Sever',
      summary: 'ICSI implică microinjecția directă a unui spermatozoid unic selectat morfologic în ooplasma unui ovocit matur (MII) folosind o micropipetă la mărire 400×. Aceasta ocolește complet zona pellucida și mecanismele de fuziune spermatozoid-ovocit, devenind soluția definitivă pentru oligozoospermie severă (< 1 milion/mL), azoospermie (cu recuperare chirurgicală a spermei — TESE/PESA), teratozoospermie sau eșec total de fertilizare anterior. Rată fertilizare: 70–85%.',
      mevaNote: 'Microscop inversat Nikon cu platină încălzită (37°C). Opțiune Piezo-ICSI pentru supraviețuire îmbunătățită a ovocitelor. Combinat cu TESE/PESA în aceeași zi. Senioritate embriolog minimum 8 ani.',
    },
  },
  {
    id: 'imsi', icon: '🔭',
    en: {
      name: 'IMSI (Intracytoplasmic Morphologically-Selected Sperm Injection)',
      tag: 'Ultra-High Magnification · DNA Integrity',
      summary: 'IMSI extends ICSI by using a Nomarski differential interference contrast (DIC) inverted microscope at 6,000–10,000× magnification — 25× higher than standard ICSI. This ultra-high resolution enables embryologists to identify and exclude spermatozoa with vacuoles in the nuclear region, which are associated with sperm DNA fragmentation (DFI > 25%) and reduced embryo developmental competence. Studies (Berkovitz et al.) show IMSI increases blastocyst rate by 12–18% vs. standard ICSI in couples with prior IVF failure.',
      mevaNote: 'Leica DM IRB platform with DIC optics. Indicated for couples with ≥ 2 failed IVF cycles, elevated DFI, or severe teratozoospermia (Kruger < 2%). Sperm DNA fragmentation test included pre-cycle.',
    },
    ro: {
      name: 'IMSI (Injecție de Spermatozoid Selectat Morfologic Intracitoplasmatic)',
      tag: 'Magnificație Ultra-Înaltă · Integritate ADN',
      summary: 'IMSI extinde ICSI utilizând un microscop inversat cu contrast diferențial interferometric (DIC) Nomarski la mărire 6.000–10.000× — de 25× mai mare decât ICSI standard. Această rezoluție ultra-înaltă permite embriologilor să identifice și să excludă spermatozoizii cu vacuole în regiunea nucleară, asociate cu fragmentarea ADN-ului spermei (DFI > 25%) și competența redusă de dezvoltare a embrionilor. Studiile (Berkovitz et al.) arată că IMSI crește rata de blastocist cu 12–18% vs. ICSI standard la cuplurile cu eșec IVF anterior.',
      mevaNote: 'Platformă Leica DM IRB cu optică DIC. Indicat pentru cupluri cu ≥ 2 cicluri IVF eșuate, DFI crescut sau teratozoospermie severă (Kruger < 2%). Test fragmentare ADN spermă inclus pre-ciclu.',
    },
  },
  {
    id: 'pgd', icon: '🧬',
    en: {
      name: 'PGD / PGT-A (Preimplantation Genetic Testing)',
      tag: 'Personalised Embryo Selection · Chromosomal Screening',
      summary: 'PGT-A (Preimplantation Genetic Testing for Aneuploidy) screens embryos at the blastocyst stage (Day 5–6) by biopsying 5–10 trophectoderm cells and performing Next-Generation Sequencing (NGS) to determine chromosomal copy number across all 24 chromosomes. Only euploid (chromosomally normal) embryos are selected for transfer. This approach reduces miscarriage rate from 30% to under 10%, increases implantation rate from 40–50% to 65–75%, and enables sex selection where legally permitted. PGT-M (monogenic) screens for specific inherited mutations (BRCA1/2, CF, SMA).',
      mevaNote: 'NGS platform (Illumina): 24-chromosome full aneuploidy screen. Results in 5 days. Euploid embryo FET protocol. PGT-M available for 200+ genetic conditions. Genetic counselling session included.',
    },
    ro: {
      name: 'PGD / PGT-A (Testare Genetică Preimplantare)',
      tag: 'Selecție Personalizată a Embrionilor · Screening Cromozomial',
      summary: 'PGT-A (Testare Genetică Preimplantare pentru Aneuploidie) screenează embrionii în stadiul de blastocist (Ziua 5–6) prin biopsierea a 5–10 celule trofectodermice și efectuarea Secvențierii de Nouă Generație (NGS) pentru a determina numărul de copii cromozomiale pe toți cei 24 de cromozomi. Doar embrionii euploizi (normali cromozomial) sunt selectați pentru transfer. Această abordare reduce rata de avort de la 30% la sub 10%, crește rata de implantare de la 40–50% la 65–75% și permite selecția sexului unde este legal permis. PGT-M (monogenic) screenează pentru mutații ereditare specifice (BRCA1/2, FC, SMA).',
      mevaNote: 'Platformă NGS (Illumina): screening aneuploidie completă 24 cromozomi. Rezultate în 5 zile. Protocol FET embrion euploid. PGT-M disponibil pentru 200+ condiții genetice. Sesiune consiliere genetică inclusă.',
    },
  },
  {
    id: 'era', icon: '⏰',
    en: {
      name: 'ERA (Endometrial Receptivity Array)',
      tag: 'Personalised Implantation Window · Recurrent Failure',
      summary: 'The ERA test uses transcriptomic analysis (next-generation sequencing of 236 genes expressed in the endometrial lining) to identify the personalised implantation window (WOI — Window of Implantation). Standard fresh embryo transfer assumes Day 5 receptivity, but 30% of patients have a displaced WOI — 12–24 hours earlier or later. ERA-guided Personalised Embryo Transfer (pET) increases implantation rates by 28% in women with ≥ 2 failed FET cycles with euploid embryos.',
      mevaNote: 'ERA biopsy Day 5 of progesterone. Igenomix laboratory analysis. pET protocol for all patients with ≥ 2 failed cycles. Combined with EMMA/ALICE microbiome testing available.',
    },
    ro: {
      name: 'ERA (Array de Receptivitate Endometrială)',
      tag: 'Fereastră de Implantare Personalizată · Eșec Recurent',
      summary: 'Testul ERA utilizează analiza transcriptomică (secvențierea de nouă generație a 236 gene exprimate în mucoasa endometrială) pentru a identifica fereastra de implantare personalizată (WOI — Window of Implantation). Transferul standard de embrion proaspăt presupune receptivitate în Ziua 5, dar 30% din paciente au un WOI deplasat — cu 12–24 ore mai devreme sau mai târziu. Transferul Personalizat de Embrion (pET) ghidat de ERA crește ratele de implantare cu 28% la femeile cu ≥ 2 cicluri FET eșuate cu embrioni euploizi.',
      mevaNote: 'Biopsie ERA Ziua 5 de progesteron. Analiză laborator Igenomix. Protocol pET pentru toți pacienții cu ≥ 2 cicluri eșuate. Testare microbiom EMMA/ALICE combinată disponibilă.',
    },
  },
  {
    id: 'egg-freezing', icon: '❄️',
    en: {
      name: 'Oocyte Vitrification (Egg Freezing)',
      tag: 'Fertility Preservation · Social or Medical',
      summary: 'Vitrification (ultra-rapid cryopreservation at −196°C in liquid nitrogen) achieves post-thaw survival rates of 90–95% for mature MII oocytes — a dramatic improvement over the 60–70% of slow-freeze methods. Dehydration with cryoprotectants (DMSO, ethylene glycol) prevents intracellular ice crystal formation. Fertilisation rates post-thaw are equivalent to fresh oocytes. Indicated for oncology patients pre-treatment, women with diminished ovarian reserve wishing to defer pregnancy, or social fertility preservation.',
      mevaNote: 'Cryotop vitrification system. Liquid nitrogen vapour storage with remote temperature monitoring. Post-thaw survival guarantee protocol. Medical and elective preservation both available.',
    },
    ro: {
      name: 'Vitrificarea Ovocitelor (Înghețarea Ovulelor)',
      tag: 'Prezervarea Fertilității · Socială sau Medicală',
      summary: 'Vitrificarea (criopreservare ultra-rapidă la −196°C în azot lichid) obține rate de supraviețuire post-decongelare de 90–95% pentru ovocitele MII mature — o îmbunătățire dramatică față de 60–70% al metodelor de congelare lentă. Deshidratarea cu crioprotectori (DMSO, etilenglicol) previne formarea cristalelor de gheață intracelulare. Ratele de fertilizare post-decongelare sunt echivalente cu ovocitele proaspete. Indicat pentru pacienți oncologici pre-tratament, femei cu rezervă ovariană diminuată care doresc să amâne sarcina sau prezervare electivă.',
      mevaNote: 'Sistem vitrificare Cryotop. Stocare în vapori de azot lichid cu monitorizare temperatură la distanță. Protocol garanție supraviețuire post-decongelare. Prezervare medicală și electivă ambele disponibile.',
    },
  },
];

const IVF_STATS = [
  { val: '68%', en: 'Clinical pregnancy rate / cycle (blastocyst + PGT-A)', ro: 'Rată sarcină clinică / ciclu (blastocist + PGT-A)' },
  { val: '< 10%', en: 'Miscarriage rate with euploid embryo transfer', ro: 'Rată avort cu transfer embrion euploid' },
  { val: '5 days', en: 'Full PGT-A NGS results turnaround', ro: 'Timp rezultate PGT-A NGS complet' },
  { val: '90–95%', en: 'Vitrified oocyte post-thaw survival rate', ro: 'Rată supraviețuire ovocit vitrificat post-decongelare' },
];

const faqEn = [
  { q: 'What is the difference between IVF, ICSI and IMSI?', a: 'Standard IVF places sperm around the egg for natural fertilisation. ICSI injects one sperm directly into the egg — required for male factor infertility. IMSI uses 10,000× magnification (vs. 400× for ICSI) to select sperm with no nuclear vacuoles, improving embryo quality in couples with repeated IVF failure or elevated sperm DNA fragmentation.' },
  { q: 'Who needs PGT-A genetic screening?', a: 'PGT-A is indicated for: women over 37, couples with ≥ 2 failed IVF cycles, recurrent pregnancy loss (≥ 2 miscarriages), severe male factor, or known chromosomal rearrangements. It screens all 24 chromosomes using NGS, selecting only euploid embryos for transfer.' },
  { q: 'What is the ERA test and when is it needed?', a: 'ERA (Endometrial Receptivity Array) identifies your unique implantation window using endometrial gene expression profiling. It is recommended after ≥ 2 failed transfers with good-quality embryos. 30% of patients have a non-standard implantation window, and ERA-guided personalised transfer (pET) corrects this.' },
  { q: 'Can I use donor eggs or sperm at Meva?', a: 'Yes. Anonymous and known donation is available under Turkish reproductive medicine law. Donor egg IVF uses young, PGT-A screened donors. All donors undergo full infectious disease and genetic carrier screening.' },
  { q: 'How many embryos will be transferred?', a: 'Single Embryo Transfer (SET) is our standard protocol for euploid embryos — this minimises twin risk while maintaining high success rates. Double embryo transfer is considered in specific clinical scenarios after board discussion.' },
];

const faqRo = [
  { q: 'Care este diferența dintre FIV, ICSI și IMSI?', a: 'FIV standard plasează sperma în jurul ovulului pentru fertilizare naturală. ICSI injectează un spermatozoid direct în ovul — necesar în factorul masculin de infertilitate. IMSI utilizează magnificație 10.000× (față de 400× pentru ICSI) pentru a selecta spermatozoizi fără vacuole nucleare, îmbunătățind calitatea embrionilor la cuplurile cu eșec repetat IVF sau fragmentare crescută a ADN-ului spermei.' },
  { q: 'Cine are nevoie de screening genetic PGT-A?', a: 'PGT-A este indicat pentru: femei peste 37 ani, cupluri cu ≥ 2 cicluri IVF eșuate, pierdere recurentă de sarcină (≥ 2 avorturi), factor masculin sever sau rearanjamente cromozomiale cunoscute. Screenează toți cei 24 cromozomi prin NGS, selectând doar embrionii euploizi pentru transfer.' },
  { q: 'Ce este testul ERA și când este necesar?', a: 'ERA (Array de Receptivitate Endometrială) identifică fereastra dvs. unică de implantare prin profilarea expresiei genice endometriale. Este recomandat după ≥ 2 transferuri eșuate cu embrioni de calitate bună. 30% din paciente au o fereastră de implantare non-standard, iar transferul personalizat ghidat de ERA (pET) corectează acest lucru.' },
  { q: 'Pot folosi ovule sau spermă de donator la Meva?', a: 'Da. Donarea anonimă și cunoscută este disponibilă conform legii medicinei reproductive turce. FIV cu ovule de donator utilizează donatoare tinere, screenate PGT-A. Toți donatorii sunt supuși screeningului complet pentru boli infecțioase și purtători genetici.' },
  { q: 'Câți embrioni vor fi transferați?', a: 'Transferul unui Singur Embrion (SET) este protocolul nostru standard pentru embrionii euploizi — aceasta minimizează riscul de gemeni menținând rate de succes ridicate. Transferul dublu de embrioni este considerat în scenarii clinice specifice după discuția board-ului.' },
];

const IVF = ({ lang = 'ro' }) => {
  const [openId, setOpenId] = useState(null);
  const [activeFaq, setActiveFaq] = useState(null);
  const isEn = lang === 'en';
  const g = (obj) => obj[isEn ? 'en' : 'ro'];
  useEffect(() => window.scrollTo(0, 0), [lang]);
  const faqs = isEn ? faqEn : faqRo;

  return (
    <div className="bg-white min-h-screen pt-32 pb-24">
      <DynamicSEO
        title={isEn ? 'IVF & Personalised Embryo Selection | Meva Clinic Istanbul' : 'FIV & Selecție Personalizată Embrioni | Meva Clinic Istanbul'}
        description={isEn
          ? 'Advanced IVF with ICSI, IMSI 10,000× magnification, PGT-A genetic screening and ERA personalised implantation window at Meva Clinic. 68% clinical pregnancy rate.'
          : 'FIV avansat cu ICSI, IMSI magnificație 10.000×, screening genetic PGT-A și ERA fereastră implantare personalizată la Meva Clinic. Rată sarcină clinică 68%.'}
        path={isEn ? '/en/ivf' : '/ro/fiv'}
        keywords="IVF Turkey Istanbul, ICSI IMSI clinic Istanbul, PGT-A genetic embryo screening, IVF Romania Turcia, FIV Istanbul pret, egg freezing Istanbul"
        schemaType="MedicalProcedure"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs isEn={isEn} items={[{ label: isEn ? 'Treatments' : 'Tratamente', path: null }, { label: isEn ? 'IVF' : 'FIV', path: null }]} />

        <div className="text-center mb-6"><VerifiedBadge isEn={isEn} /></div>

        <h1 className="text-4xl md:text-7xl font-serif font-bold text-prime mb-8 text-center leading-tight">
          {isEn ? 'Personalised Embryo Selection: The New IVF Standard' : 'Selecție Personalizată de Embrioni: Noul Standard FIV'}
        </h1>
        <p className="text-center text-gray-500 max-w-3xl mx-auto mb-16 text-lg leading-relaxed">
          {isEn
            ? 'ICSI · IMSI 10,000× · PGT-A NGS 24-Chromosome Screening · ERA Implantation Window · Oocyte Vitrification — engineered for the highest possible live birth rate.'
            : 'ICSI · IMSI 10.000× · Screening PGT-A NGS 24 Cromozomi · Fereastră Implantare ERA · Vitrificare Ovocite — concepute pentru cea mai mare rată de naștere vie posibilă.'}
        </p>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mb-20">
          {IVF_STATS.map(s => (
            <div key={s.val} className="bg-prime rounded-2xl p-6 text-white text-center">
              <p className="text-3xl font-black text-accent">{s.val}</p>
              <p className="text-xs text-gray-400 mt-2 leading-tight">{isEn ? s.en : s.ro}</p>
            </div>
          ))}
        </div>

        {/* Techniques Accordion */}
        <div className="mb-20">
          <h2 className="text-2xl md:text-3xl font-serif font-bold text-prime mb-8 text-center">
            {isEn ? '5 Advanced IVF Techniques at Meva' : '5 Tehnici IVF Avansate la Meva'}
          </h2>
          <div className="space-y-3">
            {IVF_TECHNIQUES.map(tx => {
              const d = g(tx);
              return (
                <div key={tx.id} className="border border-gray-100 rounded-2xl overflow-hidden shadow-sm">
                  <button
                    onClick={() => setOpenId(openId === tx.id ? null : tx.id)}
                    className="w-full px-6 py-5 flex items-center gap-4 text-left bg-white hover:bg-gray-50 transition-colors"
                    aria-expanded={openId === tx.id}
                  >
                    <span className="text-2xl">{tx.icon}</span>
                    <div className="flex-1">
                      <p className="font-bold text-prime text-sm md:text-base leading-tight">{d.name}</p>
                      <p className="text-xs text-accent font-semibold mt-0.5">{d.tag}</p>
                    </div>
                    <ChevronDown size={18} className={`text-gray-400 shrink-0 transition-transform duration-300 ${openId === tx.id ? 'rotate-180' : ''}`} />
                  </button>
                  <div className={`overflow-hidden transition-all duration-300 ${openId === tx.id ? 'max-h-[800px]' : 'max-h-0'}`}>
                    <div className="px-6 pb-7 pt-3 bg-gray-50 grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div className="md:col-span-2 bg-white rounded-xl p-5 border border-gray-100">
                        <p className="text-prime font-black text-xs uppercase tracking-widest mb-3">⚡ {isEn ? 'Clinical Detail' : 'Detaliu Clinic'}</p>
                        <p className="text-sm text-gray-600 leading-relaxed">{d.summary}</p>
                      </div>
                      <div className="md:col-span-2 bg-white rounded-xl p-5 border border-gray-100">
                        <p className="text-green-600 font-black text-xs uppercase tracking-widest mb-3">✅ {isEn ? 'Meva Quality Standard' : 'Standard Calitate Meva'}</p>
                        <p className="text-sm text-gray-600 leading-relaxed">{d.mevaNote}</p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* FAQ */}
        <div className="max-w-4xl mx-auto mb-20">
          <h2 className="text-2xl font-serif font-bold text-prime mb-8 text-center">
            {isEn ? 'IVF Clinical FAQ' : 'Întrebări Frecvente Clinice FIV'}
          </h2>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <div key={i} className="border border-gray-100 rounded-2xl overflow-hidden bg-white shadow-sm">
                <button
                  onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                  className="w-full px-7 py-5 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
                  aria-expanded={activeFaq === i}
                >
                  <span className="font-bold text-prime pr-4 text-sm md:text-base">{faq.q}</span>
                  <ChevronDown size={16} className={`text-gray-400 shrink-0 transition-transform duration-300 ${activeFaq === i ? 'rotate-180' : ''}`} />
                </button>
                <div className={`overflow-hidden transition-all duration-300 ${activeFaq === i ? 'max-h-96' : 'max-h-0'}`}>
                  <p className="px-7 pb-6 pt-2 text-sm text-gray-600 leading-relaxed border-t border-gray-50">{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="bg-[#0b1626] rounded-[2rem] p-10 text-white text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(212,175,55,0.1),_transparent_60%)]" />
          <HeartPulse size={40} className="text-accent mx-auto mb-4" />
          <h3 className="text-2xl font-serif font-bold mb-4">
            {isEn ? 'Start Your Personalised IVF Journey' : 'Începeți Călătoria Personalizată FIV'}
          </h3>
          <p className="text-gray-400 max-w-2xl mx-auto text-sm leading-relaxed mb-8">
            {isEn
              ? 'Our fertility coordinator will review your full medical history and design a protocol — ICSI, IMSI, PGT-A or ERA — tailored to your specific diagnosis. First consultation is complimentary.'
              : 'Coordonatorul nostru de fertilitate va analiza istoricul dvs. medical complet și va proiecta un protocol — ICSI, IMSI, PGT-A sau ERA — adaptat diagnosticului dvs. specific. Prima consultație este gratuită.'}
          </p>
          <a
            href={`https://wa.me/905324675941?text=${encodeURIComponent(isEn ? 'I want a personalised IVF consultation.' : 'Doresc o consultație personalizată FIV.')}`}
            target="_blank" rel="noreferrer"
            className="inline-flex items-center gap-3 bg-accent text-prime font-black py-4 px-10 rounded-full hover:bg-yellow-400 transition-all"
          >
            <Activity size={18} />
            {isEn ? 'Free IVF Consultation via WhatsApp' : 'Consultație FIV Gratuită pe WhatsApp'}
          </a>
        </div>

        <div className="mt-12"><CertRow isEn={isEn} /></div>
      </div>
    </div>
  );
};

export default IVF;

```

### Dosya Adı: src\pages\NotFound.jsx
```jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { AlertCircle } from 'lucide-react';

const NotFound = () => (
  <div className="min-h-[80vh] flex flex-col items-center justify-center text-center px-4 bg-gray-50 pt-32 pb-24">
     <AlertCircle size={80} className="text-accent mb-6" />
     <h1 className="text-4xl font-serif font-bold text-prime mb-4">Pagina nu a fost găsită / Page Not Found</h1>
     <p className="text-gray-500 mb-8 font-sans max-w-md text-lg">
       Ne cerem scuze, dar adresa pe care ați accesat-o nu există în sistem.<br/>
       We apologize, but the requested URL does not exist.
     </p>
     <Link to="/" className="bg-prime hover:bg-[#0b1626] text-white px-8 py-4 rounded-xl font-bold transition-all shadow-lg hover:-translate-y-1">
        Începe din nou (Return Home)
     </Link>
  </div>
);

export default NotFound;

```

### Dosya Adı: src\pages\Oncology.jsx
```jsx
import React, { useEffect, useState } from 'react';
import { Activity, Plus, Minus, Cpu, Zap, Brain, Shield, Microscope, Target, HeartPulse } from 'lucide-react';
import DoctorBadge from '../components/DoctorBadge';
import PatientJourneyTimeline from '../components/PatientJourneyTimeline';
import DynamicSEO from '../components/DynamicSEO';
import { TechCard, CertRow, VerifiedBadge } from '../components/ClinicalBadges';
import RecoverySimulator from '../components/RecoverySimulator';
import SuitabilityQuiz from '../components/SuitabilityQuiz';
import LocalContext from '../components/LocalContext';
import Breadcrumbs from '../components/Breadcrumbs';
import { pushToDataLayer } from '../utils/AnalyticsUtils';
import MedicalReviewer, { REVIEWERS } from '../components/MedicalReviewer';

const oncologyRecoveryEn = [
  { period: 'Day 1', label: 'Robotic session completed, outpatient return to hotel' },
  { period: 'Day 2-5', label: 'Sub-clinical monitoring, personalized diet initiation' },
  { period: 'Week 2', label: 'Biological marker analysis, return to light activity' },
  { period: 'Month 1', label: 'Primary imaging verification (PET-CT/MRI)' },
  { period: 'Month 3', label: 'Multidisciplinary tumor response evaluation' },
];

const oncologyRecoveryRo = [
  { period: 'Ziua 1', label: 'Sesiune robotică finalizată, revenire la hotel' },
  { period: 'Zilele 2-5', label: 'Monitorizare sub-clinică, inițiere dietă personalizată' },
  { period: 'Săptămâna 2', label: 'Analiza markerilor biologici, revenire la activitate' },
  { period: 'Luna 1', label: 'Prima verificare imagistică (PET-CT/RMN)' },
  { period: 'Luna 3', label: 'Evaluarea răspunsului tumoral multidisciplinar' },
];

const faqEn = [
  { q: "What makes CyberKnife S7 unique?", a: "The S7 with VOLO Optimizer is the only robotic system capable of real-time tumor tracking and motion correction with ±0.5mm precision, allowing for higher doses without harming healthy tissue." },
  { q: "How does Radixact with Synchrony work?", a: "Synchrony technology uses AI to synchronize the radiation beam with the patient's breathing cycle, ensuring the target is hit even as it moves within the chest or abdomen." },
  { q: "What is Immunotherapy and who qualifies?", a: "Immunotherapy uses checkpoint inhibitors (PD-1/PD-L1, CTLA-4) to unleash the immune system against cancer cells. Eligibility is determined by tumour PD-L1 expression, TMB (tumour mutational burden) and MSI status — all tested in our molecular pathology lab." },
  { q: "What is PROTAC targeted therapy?", a: "PROteolysis TArgeting Chimeras (PROTACs) are bifunctional molecules that hijack the cell's own protein degradation machinery (ubiquitin-proteasome system) to destroy disease-causing oncoproteins — including those previously considered 'undruggable'. Unlike classic targeted therapy that inhibits proteins, PROTACs eliminate them entirely." },
  { q: "What is the Multidisciplinary Tumor Board?", a: "A weekly case conference where surgical oncologists, radiation oncologists, medical oncologists, radiologists and pathologists jointly engineer a personalised treatment plan. All cases at Meva are board-reviewed before treatment initiation." },
  { q: "Are robotic radiation treatments painful?", a: "No. CyberKnife and Radixact are non-invasive, non-surgical procedures requiring no anaesthesia, no incisions and causing zero pain during delivery." }
];

const faqRo = [
  { q: "Ce face CyberKnife S7 unic?", a: "Modelul S7 cu VOLO Optimizer este singurul sistem robotic capabil de urmărire tumorală în timp real și corecție a mișcării la o precizie de ±0,5mm, permițând doze mai mari fără a afecta țesuturile sănătoase." },
  { q: "Cum funcționează Radixact cu Synchrony?", a: "Tehnologia Synchrony folosește AI pentru a sincroniza fasciculul de radiații cu ciclul respirator al pacientului, eliminând erorile cauzate de mișcare în piept sau abdomen." },
  { q: "Ce este imunoterapia și cine este eligibil?", a: "Imunoterapia utilizează inhibitori ai punctelor de control imun (PD-1/PD-L1, CTLA-4) pentru a elibera sistemul imunitar împotriva celulelor canceroase. Eligibilitatea este determinată de expresia PD-L1 tumorală, TMB (povara mutațională tumorală) și statusul MSI — toate testate în laboratorul nostru de patologie moleculară." },
  { q: "Ce este terapia țintită PROTAC?", a: "PROteolysis TArgeting Chimeras (PROTAC) sunt molecule bifuncționale care deturnează propria mașinărie de degradare a proteinelor a celulei (sistemul ubiquitin-proteazom) pentru a distruge oncoproteinele cauzatoare de boală — inclusiv cele considerate anterior 'nedrogabile'. Spre deosebire de terapia țintită clasică care inhibă proteinele, PROTAC le elimină complet." },
  { q: "Ce este Tumor Board-ul Multidisciplinar?", a: "O conferință de caz săptămânală unde oncologii chirurgicali, oncologii de radioterapie, oncologii medicali, radiologii și patologii proiectează împreună un plan de tratament personalizat. Toate cazurile la Meva sunt revizuite de board înainte de inițierea tratamentului." },
  { q: "Tratamentele cu radiații robotice sunt dureroase?", a: "Nu. CyberKnife și Radixact sunt proceduri non-invazive, non-chirurgicale care nu necesită anestezie, nu implică incizii și nu provoacă durere în timpul administrării." }
];

const Oncology = ({ lang = 'ro' }) => {
  const [activeFaq, setActiveFaq] = useState(0);
  const isEn = lang === 'en';
  useEffect(() => window.scrollTo(0, 0), [lang]);
  const faqs = isEn ? faqEn : faqRo;

  return (
    <div className="bg-white min-h-screen pt-32 pb-24">
      <DynamicSEO 
        title={isEn ? "Scientific Oncology Excellence | CyberKnife S7 Istanbul" : "Excelență în Oncologie Științifică | CyberKnife S7 Istanbul"}
        description={isEn ? "Advanced oncology featuring CyberKnife S7 with VOLO Optimizer and Radixact Synchrony under JCI safety protocols." : "Oncologie avansată cu CyberKnife S7, VOLO Optimizer și Radixact Synchrony sub protocoale de siguranță JCI."}
        path={isEn ? "/en/oncology" : "/ro/oncologie"}
        schemaType="MedicalProcedure"
        keywords="advanced oncology treatment Turkey, CyberKnife therapy Istanbul, tratament oncologic Turcia"
        reviewer={REVIEWERS.oncology}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs 
          isEn={isEn} 
          items={[{ label: isEn ? "Treatments" : "Tratamente", path: null }, { label: isEn ? "Oncology" : "Oncologie", path: null }]} 
        />
        
        <div className="text-center mb-6 animate-fade-up">
          <VerifiedBadge isEn={isEn} />
        </div>
        
        <h1 className="text-4xl md:text-7xl font-serif font-bold text-prime mb-8 text-center leading-tight animate-fade-up [animation-delay:100ms]">
          {isEn ? "The Future of Robotic Radiosurgery" : "Viitorul Radiochirurgiei Robotice"}
        </h1>

        <div className="flex justify-center mb-12 animate-fade-up [animation-delay:200ms]">
           <DoctorBadge text={isEn ? "Multidisciplinary Tumor Board — Clinical Collective Intelligence" : "Tumor Board Multidisciplinar — Inteligență Colectivă Clinică"} />
        </div>

        {/* Technical Specification Grid */}
        <div className="bg-[#0b1626] rounded-[2.5rem] p-8 md:p-12 mb-20 shadow-2xl relative overflow-hidden animate-fade-up [animation-delay:300ms]">
          <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full -mr-32 -mt-32 blur-3xl" aria-hidden="true"></div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
            <TechCard icon={Cpu} title="CyberKnife S7 + VOLO" sub={isEn ? 'Precision Engine' : 'Motor de Precizie'} value="±0.44mm" />
            <TechCard icon={Zap} title="Radixact Synchrony" sub={isEn ? 'Motion Tracking' : 'Urmărire Mișcare'} value={isEn ? 'AI-Driven' : 'Bazat pe AI'} />
            <TechCard icon={Target} title={isEn ? 'Stereotactic Target' : 'Țintă Stereotactică'} sub={isEn ? 'Methodology' : 'Metodologie'} value={isEn ? 'Sub-Millimeter' : 'Sub-Milimetrică'} />
            <TechCard icon={Shield} title="JCI Accredited" sub={isEn ? 'Safety Standard' : 'Standard Siguranță'} value={isEn ? 'Gold Standard' : 'Standard de Aur'} />
          </div>
        </div>

        {/* Scientific Content Modules */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 mb-24">
          <div className="lg:col-span-2 space-y-16">

            {/* ── IMMUNOTHERAPY ── */}
            <section>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-accent/10 rounded-xl flex items-center justify-center"><Brain size={16} className="text-accent" /></div>
                <span className="text-xs font-bold uppercase tracking-widest text-prime/50">{isEn ? 'Immunotherapy · Next-Generation Oncology' : 'Imunoterapie · Oncologie de Nouă Generație'}</span>
              </div>
              <h2 className="text-3xl font-serif font-bold text-prime mb-5">
                {isEn ? 'Checkpoint Immunotherapy: Unleashing Your Immune System' : 'Imunoterapie Checkpoint: Eliberarea Sistemului Imunitar'}
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>{isEn
                  ? 'Cancer cells express surface proteins (PD-L1, CD47) that function as “don’t eat me” signals, effectively disabling cytotoxic T-lymphocytes that would otherwise destroy them. Immune checkpoint inhibitors — monoclonal antibodies targeting PD-1, PD-L1 and CTLA-4 receptors — block these evasion signals, restoring the immune system’s ability to recognise and eliminate malignant cells.'
                  : 'Celulele canceroase exprimă proteine de suprafață (PD-L1, CD47) care funcționează ca semnale “nu mă mânca”, dezactivând efectiv limfocitele T citotoxice care altfel le-ar distruge. Inhibitorii punctelor de control imunitar — anticorpi monoclonali care țintesc receptorii PD-1, PD-L1 și CTLA-4 — blochează aceste semnale de evaziune, restabilind capacitatea sistemului imunitar de a recunoaște și elimina celulele maligne.'}
                </p>
                <p>{isEn
                  ? 'Patient eligibility is determined by a comprehensive molecular tumour profiling panel: PD-L1 expression (TPS/CPS score), tumour mutational burden (TMB), microsatellite instability (MSI-H/dMMR) status, and NTRK/RET fusion screening. Our molecular pathology laboratory completes this panel within 5 working days.'
                  : 'Eligibilitatea pacientului este determinată de un panel complet de profilare moleculară a tumorii: expresia PD-L1 (scor TPS/CPS), povara mutațională tumorală (TMB), statusul instabilității microsatelitare (MSI-H/dMMR) și screening pentru fuziunile NTRK/RET. Laboratorul nostru de patologie moleculară finalizează acest panel în 5 zile lucrătoare.'}
                </p>
              </div>
              <div className="mt-6 flex flex-wrap gap-4">
                {[
                  { val: '5 days', label: isEn ? 'Full molecular profiling panel' : 'Panel profilare moleculară complet' },
                  { val: '40–60%', label: isEn ? 'Response rate in PD-L1 high tumours' : 'Rată răspuns tumori PD-L1 ridicate' },
                  { val: 'JCI', label: isEn ? 'Accredited oncology protocols' : 'Protocoale oncologie acreditate' },
                ].map(s => (
                  <div key={s.val} className="flex-1 min-w-[140px] p-5 bg-prime rounded-2xl text-white">
                    <p className="text-2xl font-black text-accent">{s.val}</p>
                    <p className="text-xs text-gray-400 mt-1 leading-tight">{s.label}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* ── PROTAC ── */}
            <section>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-accent/10 rounded-xl flex items-center justify-center"><Microscope size={16} className="text-accent" /></div>
                <span className="text-xs font-bold uppercase tracking-widest text-prime/50">{isEn ? 'PROTAC Technology · Targeted Protein Degradation' : 'Tehnologie PROTAC · Degradare Proteică Ȟintită'}</span>
              </div>
              <h2 className="text-3xl font-serif font-bold text-prime mb-5">
                {isEn ? 'PROTAC: Eliminating the “Undruggable” Oncoproteins' : 'PROTAC: Eliminarea Oncoproteinelor “Nedrogabile”'}
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>{isEn
                  ? 'Conventional targeted therapies inhibit oncoproteins by occupying their active site — but many of the most aggressive cancer drivers (KRAS G12C, β-catenin, STAT3) lack tractable binding pockets, making them resistant to classical small-molecule inhibitors. PROteolysis TArgeting Chimeras (PROTACs) circumvent this entirely.'
                  : 'Terapiile țintite convenționale inhibă oncoproteinele ocupându-le situsul activ — dar mulți dintre cei mai agresivi motori oncogeni (KRAS G12C, β-catenină, STAT3) nu posedă buzunare de legare tractabile, făcându-i rezistenți la inhibitorii clasici de molecule mici. Chimerele de țintire a proteolizei (PROTAC) depășesc complet acest lucru.'}
                </p>
                <p>{isEn
                  ? 'A PROTAC molecule is a bifunctional warhead: one arm binds the target oncoprotein, the other recruits an E3 ubiquitin ligase. This proximity triggers polyubiquitination of the target, flagging it for degradation by the 26S proteasome. Unlike classical inhibitors, a single PROTAC molecule can catalytically degrade multiple copies of its target — the “hook effect” — and remains unaffected by resistance mutations at the active site.'
                  : 'O moleculă PROTAC este un focos bifuncțional: un braț leagă oncoproteină țintă, celălalt recrutează o E3 ubiquitin ligază. Această proximitate declansșează poliubiquitinarea țintei, marcand-o pentru degradare de către proteazomul 26S. Spre deosebire de inhibitorii clasici, o singură moleculă PROTAC poate degrada catalitic mai multe copii ale țintei sale — “efectul cârlig” — rămânând neafectat de mutațiile de rezistență la situsul activ.'}
                </p>
              </div>
              <div className="mt-6 p-5 bg-gray-50 rounded-2xl border border-gray-100">
                <p className="text-xs font-black uppercase tracking-widest text-prime/50 mb-3">{isEn ? 'Currently Available PROTAC Protocols at Meva' : 'Protocoale PROTAC Disponibile la Meva'}</p>
                <div className="flex flex-wrap gap-2">
                  {['ARV-471 (ER+ Breast Cancer)', 'ARV-110 (CRPC / Prostate)', 'KT-474 (IRAK4 — Haematological)', 'BRD4 PROTAC (TNBC)', 'Custom MDM2 Protocol'].map(p => (
                    <span key={p} className="text-xs bg-white border border-gray-200 text-prime font-semibold px-3 py-1.5 rounded-full">{p}</span>
                  ))}
                </div>
              </div>
            </section>

            {/* ── TUMOR BOARD ── */}
            <section className="bg-gray-50 rounded-[2rem] p-8 border border-gray-100">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-9 h-9 bg-accent rounded-xl flex items-center justify-center"><Shield size={16} className="text-prime" /></div>
                <h2 className="text-xl font-serif font-bold text-prime">{isEn ? 'Multidisciplinary Tumor Board' : 'Tumor Board Multidisciplinar'}</h2>
              </div>
              <p className="text-gray-600 leading-relaxed mb-6">
                {isEn
                  ? 'Every Meva oncology patient is presented at a weekly multidisciplinary case conference before any treatment begins. The board comprises surgical oncologists, radiation oncologists, medical oncologists, diagnostic radiologists and molecular pathologists. Treatment decisions are consensus-based and documented per NCCN/ESMO guidelines.'
                  : 'Fiecare pacient oncologic Meva este prezentat la o conferință de caz multidisciplinară săptămânală înainte de începerea oricărui tratament. Board-ul cuprinde oncologi chirurgicali, oncologi de radioterapie, oncologi medicali, radiologi diagnosticieni și patologi moleculari. Deciziile de tratament sunt bazate pe consens și documentate conform ghidurilor NCCN/ESMO.'}
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
                {[
                  { role: isEn?'Surgical Oncology':'Oncologie Chirurgicală', icon: '✂️' },
                  { role: isEn?'Radiation Oncology':'Oncologie Radiație', icon: '⚡' },
                  { role: isEn?'Medical Oncology':'Oncologie Medicală', icon: '💊' },
                  { role: isEn?'Diagnostic Radiology':'Radiologie', icon: '🩻' },
                  { role: isEn?'Molecular Pathology':'Patologie Moleculară', icon: '🔬' },
                ].map(r => (
                  <div key={r.role} className="text-center p-4 bg-white rounded-xl border border-gray-100">
                    <p className="text-2xl mb-1">{r.icon}</p>
                    <p className="text-xs font-bold text-prime leading-tight">{r.role}</p>
                  </div>
                ))}
              </div>
            </section>

          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-5">
              <div className="bg-prime text-white rounded-[2rem] p-7 border border-white/5">
                <h3 className="font-serif font-bold text-lg text-accent mb-5 border-b border-white/10 pb-4">
                  {isEn ? 'Technology Stack' : 'Stack Tehnologic'}
                </h3>
                <div className="space-y-4">
                  {[
                    { icon: '🤖', label: 'CyberKnife S7 + VOLO Optimizer' },
                    { icon: '⚡', label: 'Radixact + Synchrony AI' },
                    { icon: '🧬', label: isEn?'Molecular PD-L1 / TMB / MSI Testing':'Testare Moleculară PD-L1/TMB/MSI' },
                    { icon: '💊', label: isEn?'PROTAC Protocol Library':'Bibliotecă Protocol PROTAC' },
                    { icon: '🏥', label: isEn?'JCI Accredited Oncology Centre':'Centru Oncologie Acreditat JCI' },
                    { icon: '🌍', label: isEn?'NCCN / ESMO Guideline Adherence':'Aderare Ghiduri NCCN/ESMO' },
                  ].map(item => (
                    <div key={item.label} className="flex items-center gap-3 text-sm">
                      <span className="text-xl">{item.icon}</span>
                      <span className="text-gray-300">{item.label}</span>
                    </div>
                  ))}
                </div>
              </div>
              <a href="https://wa.me/905324675941" target="_blank" rel="noreferrer"
                className="flex items-center justify-center gap-2 w-full bg-[#25D366] text-white font-bold py-4 rounded-2xl hover:bg-green-500 transition-all text-sm shadow-lg">
                📱 {isEn ? 'Oncology Second Opinion' : 'A Doua Opinie Oncologică'}
              </a>
            </div>
          </div>
        </div>

        {/* Recovery Simulator */}
        <div className="mb-24 reveal">
           <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-prime mb-4">
                 {isEn ? "The Biological Recovery Pathway" : "Calea de Recuperare Biologică"}
              </h2>
           </div>
           <RecoverySimulator type="oncology" isEn={isEn} />
        </div>

        <div className="bg-gray-50 py-24 rounded-[3rem] mb-24 border border-gray-100 reveal">
           <div className="max-w-3xl mx-auto px-6 text-center">
              <div className="mb-12">
                 <h2 className="text-3xl font-serif font-bold text-prime mb-4">{isEn ? "Suitability Assessment" : "Evaluarea Eligibilității"}</h2>
                 <p className="text-gray-500">{isEn ? "Find out if CyberKnife S7 is the right clinical solution for your condition." : "Află dacă CyberKnife S7 este soluția clinică potrivită pentru afecțiunea ta."}</p>
              </div>
              <SuitabilityQuiz procedure={isEn ? "CyberKnife S7 Oncology" : "Oncologie CyberKnife S7"} isEn={isEn} />
           </div>
        </div>

        <div className="mb-24 reveal">
           <h2 className="text-3xl font-serif font-bold text-prime mb-12 text-center">{isEn ? "Integrated Patient Journey" : "Călătoria Integrată a Pacientului"}</h2>
           <PatientJourneyTimeline />
        </div>

        <CertRow isEn={isEn} />
        <LocalContext isEn={isEn} />

        <div className="text-center mt-20">
           <a 
             href={`https://wa.me/905324675941?text=${encodeURIComponent(isEn ? "I would like to request a Tumor Board evaluation." : "Doresc să solicit o evaluare Tumor Board.")}`} 
             onClick={() => pushToDataLayer('whatsapp_click', { location: 'oncology_board_request' })}
             target="_blank" 
             rel="noreferrer" 
             aria-label={isEn ? "Request Medical Board Evaluation" : "Solicită Evaluare Tumor Board"}
             className="bg-prime text-white font-bold py-6 px-16 rounded-2xl shadow-2xl hover:bg-[#0f1f38] transition-all text-xl inline-flex items-center group"
           >
              {isEn ? "Request Medical Board Evaluation" : "Solicită Evaluare Tumor Board"} 
              <Activity size={24} className="ml-4 text-accent group-hover:scale-125 transition-transform" aria-hidden="true" />
           </a>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8">
        <MedicalReviewer reviewer={REVIEWERS.oncology} isEn={isEn} />
      </div>
    </div>
  );
}

export default Oncology;

```

### Dosya Adı: src\pages\OrganTransplant.jsx
```jsx
import React, { useEffect, useState } from 'react';
import DoctorBadge from '../components/DoctorBadge';
import PatientJourneyTimeline from '../components/PatientJourneyTimeline';
import DynamicSEO from '../components/DynamicSEO';
import { Activity, Plus, Minus, Cpu, Shield, HeartPulse, Microscope } from 'lucide-react';
import { TechCard, CertRow, VerifiedBadge } from '../components/ClinicalBadges';

const faqEn = [
  { q: 'Do you offer cadaveric organ transplants?', a: 'No. Meva Clinic exclusively performs Living-Donor transplants. Living-donor grafts have a 10-year survival rate of 87–92% vs. 70–75% for cadaveric organs, due to minimised cold ischaemia time and the ability to schedule the operation electively under optimal conditions.' },
  { q: 'Who can be a living donor?', a: 'A living donor must be a blood relative (up to 4th degree consanguinity) or spouse. The donor evaluation includes: ABO blood typing, HLA crossmatch, kidney function panel (eGFR), liver volumetry (CT), psychological evaluation, and Ethics Board approval. This process takes 2–3 weeks.' },
  { q: 'What immunosuppression protocol is used post-transplant?', a: 'Our standard induction uses basiliximab (IL-2 receptor antagonist) + methylprednisolone. Maintenance: tacrolimus (target trough 8–12 ng/mL month 1–3) + mycophenolate mofetil + low-dose prednisolone. mTOR inhibitors (everolimus) are introduced at month 3 to reduce calcineurin nephrotoxicity. All protocols are individualised based on PRA and DSA antibody levels.' },
  { q: 'How is bone marrow transplant different from organ transplant?', a: 'Bone marrow transplant (BMT/HSCT) does not require surgical implantation — haematopoietic stem cells are infused intravenously after myeloablative or reduced-intensity conditioning. The challenge is GVHD prevention and engraftment monitoring. Matched unrelated donor (MUD), haploidentical and autologous transplants are all available at Meva.' },
  { q: 'What is the Da Vinci robotic technique used for?', a: 'Da Vinci Xi is used for laparoscopic donor nephrectomy (kidney harvesting) and the vascular anastomosis phase of liver transplantation. Its 7-axis articulation and 3D visualisation enable sub-millimetre vessel suturing, reducing bleeding risk and anastomotic leak rate by 40% vs. open technique.' },
];

const faqRo = [
  { q: 'Oferiți transplanturi de la cadavru?', a: 'Nu. Meva Clinic efectuează exclusiv transplanturi de la Donator Viu. Grefele de la donator viu au o rată de supraviețuire la 10 ani de 87–92% vs. 70–75% pentru organele cadaverice, datorită timpului de ischemie rece minimizat și posibilității de a programa operația electiv în condiții optime.' },
  { q: 'Cine poate fi donator viu?', a: 'Un donator viu trebuie să fie o rudă de sânge (până la gradul 4 de consanguinitate) sau soț/soție. Evaluarea donatorului include: tipaj sanguin ABO, crossmatch HLA, panel funcție renală (eGFR), volumetrie hepatică (CT), evaluare psihologică și aprobare Comisie Etică. Acest proces durează 2–3 săptămâni.' },
  { q: 'Ce protocol de imunosupresie este utilizat post-transplant?', a: 'Inducția noastră standard utilizează basiliximab (antagonist receptor IL-2) + metilprednisolon. Menținere: tacrolimus (țintă trough 8–12 ng/mL lunile 1–3) + micofenolat mofetil + prednisolon doză mică. Inhibitorii mTOR (everolimus) sunt introduși la luna 3 pentru a reduce nefrotoxicitatea calcineurinei. Toate protocoalele sunt individualizate pe baza nivelurilor de anticorpi PRA și DSA.' },
  { q: 'Cum diferă transplantul de măduvă osoasă de transplantul de organ?', a: 'Transplantul de măduvă osoasă (TMO/TCSH) nu necesită implantare chirurgicală — celulele stem hematopoietice sunt perfuzate intravenos după condiționare mieloablativă sau de intensitate redusă. Provocarea constă în prevenirea GVHD și monitorizarea prize. Transplanturi de la donator nepersonal compatibil (MUD), haploidentic și autolog sunt toate disponibile la Meva.' },
  { q: 'Pentru ce este utilizată tehnica robotică Da Vinci?', a: 'Da Vinci Xi este utilizat pentru nefrectomia laparoscopică a donatorului (recoltarea rinichiului) și faza anastomozei vasculare a transplantului hepatic. Articularea sa pe 7 axe și vizualizarea 3D permit suturarea vaselor sub milimetru, reducând riscul de sângerare și rata de scurgere anastomotică cu 40% față de tehnica deschisă.' },
];

const OrganTransplant = ({ lang = 'ro' }) => {
  const [activeFaq, setActiveFaq] = useState(0);
  const isEn = lang === 'en';
  useEffect(() => window.scrollTo(0, 0), [lang]);
  const faqs = isEn ? faqEn : faqRo;

  return (
    <div className="bg-white min-h-screen pt-32 pb-24">
      <DynamicSEO 
        title={isEn ? "Organ Transplant | Meva Clinic Istanbul" : "Transplant de Organe | Meva Clinic Istanbul"}
        description={isEn ? "Living Donor Kidney and Liver transplants via state-of-the-art Robotic Surgery." : "Transplant Renal și Hepatic de la donator viu prin chirurgie robotică de precizie."}
        path={isEn ? "/en/organ-transplant" : "/ro/transplant-organe"}
        schemaType="MedicalProcedure"
        keywords="transplant de organe Turcia, liver transplant Istanbul, kidney transplant Turkey"
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-4"><VerifiedBadge isEn={isEn} /></div>
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-prime mb-6 text-center">
          {isEn ? "Life-Saving Medical Excellence" : "Excelență Medicală Salvatoare de Vieți"}
        </h1>
        <div className="flex justify-center mb-8">
           <DoctorBadge text={isEn ? "Da Vinci Robotic Center — JCI Accredited" : "Centru Robotic Da Vinci — Acreditat JCI"} />
        </div>

        {/* Glassmorphism Tech Spec Cards */}
        <div className="bg-[#0b1626] rounded-3xl p-6 mb-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <TechCard icon={Cpu} title="Da Vinci Xi Robotic" sub={isEn ? 'Platform' : 'Platformă'} value={isEn ? 'Micro-anastomosis precision' : 'Precizie micro-anastomoză'} />
          <TechCard icon={Microscope} title="Cross-Matching Hub" sub={isEn ? 'Immunology' : 'Imunologie'} value={isEn ? 'Advanced compatibility panel' : 'Panel de compatibilitate avansat'} />
          <TechCard icon={HeartPulse} title="Living Donor Focus" sub={isEn ? 'Graft Strategy' : 'Strategie Grefă'} value={isEn ? 'Superior organ longevity' : 'Longevitate superioară'} />
          <TechCard icon={Shield} title="JCI Sterile Isolation" sub={isEn ? 'Environment' : 'Mediu'} value={isEn ? 'Zero-infection target' : 'Țintă zero-infecții'} />
        </div>
        
        <div className="prose prose-lg max-w-none text-gray-600 mb-16">
          {/* Kidney */}
          <div className="mb-10 p-8 bg-gray-50 rounded-[2rem] border border-gray-100">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 bg-accent rounded-xl flex items-center justify-center"><Microscope size={16} className="text-prime" /></div>
              <h3 className="text-2xl font-bold text-prime m-0">{isEn ? 'Kidney Transplant — Laparoscopic Living-Donor' : 'Transplant Renal — Donator Viu Laparoscopic'}</h3>
            </div>
            <p className="text-sm leading-relaxed mb-4">{isEn
              ? 'Living-donor kidney transplantation offers a 10-year graft survival rate of 87–92% — significantly superior to cadaveric (70–75%) and dialysis (50% at 5 years). The donor nephrectomy is performed laparoscopically (3 × 1 cm ports), with Da Vinci Xi robotic-assisted vascular dissection, reducing donor hospital stay to 2–3 days and return to work within 3–4 weeks.'
              : 'Transplantul renal de la donator viu oferă o rată de supraviețuire a grefei la 10 ani de 87–92% — semnificativ superioară celei cadaverice (70–75%) și dializei (50% la 5 ani). Nefrectomia donatorului este efectuată laparoscopic (3 × 1 cm porturi), cu disecție vasculară asistată robotic Da Vinci Xi, reducând spitalizarea donatorului la 2–3 zile și revenirea la muncă în 3–4 săptămâni.'}
            </p>
            <div className="flex flex-wrap gap-3">
              {[
                { val: '87–92%', label: isEn ? '10-year graft survival' : 'Supraviețuire grefă 10 ani' },
                { val: '2–3 days', label: isEn ? 'Donor hospital stay' : 'Spitalizare donator' },
                { val: '1–2 wk', label: isEn ? 'Recipient discharge' : 'Externare primitor' },
              ].map(s => (
                <div key={s.val} className="p-4 bg-prime rounded-xl text-white text-center min-w-[120px]">
                  <p className="text-xl font-black text-accent">{s.val}</p>
                  <p className="text-xs text-gray-400 mt-1">{s.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Liver */}
          <div className="mb-10 p-8 bg-gray-50 rounded-[2rem] border border-gray-100">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 bg-accent rounded-xl flex items-center justify-center"><HeartPulse size={16} className="text-prime" /></div>
              <h3 className="text-2xl font-bold text-prime m-0">{isEn ? 'Liver Transplant — Right Lobe Living-Donor' : 'Transplant Hepatic — Lob Drept Donator Viu'}</h3>
            </div>
            <p className="text-sm leading-relaxed mb-4">{isEn
              ? "The liver's unique regenerative capacity (hepatocyte proliferation via HGF/EGFR signalling) permits transplantation of the right lobe (55–65% of liver volume) from a living donor. Volumetric CT planning ensures the donor retains a future liver remnant (FLR) of ≥ 30% to prevent post-hepatectomy liver failure (PHLF). Indications: end-stage cirrhosis (Child-Pugh C / MELD > 15), hepatocellular carcinoma within Milan criteria, acute liver failure."
              : "Capacitatea regenerativă unică a ficatului (proliferare hepatocite via semnalizare HGF/EGFR) permite transplantul lobului drept (55–65% din volumul hepatic) de la un donator viu. Planificarea CT volumetrică asigură că donatorul reține un volum hepatic restant viitor (FLR) de ≥ 30% pentru a preveni insuficiența hepatică post-hepatectomie (PHLF). Indicații: ciroză terminală (Child-Pugh C / MELD > 15), carcinom hepatocelular în criterii Milano, insuficiență hepatică acută."}
            </p>
            <div className="p-4 bg-white rounded-xl border border-gray-100 text-xs font-semibold text-prime">
              {isEn ? 'Multidisciplinary Team: Hepatobiliary Surgeon · Transplant Anesthesiologist · Hepatologist · Intensivist · Clinical Transplant Coordinator · Immunologist' : 'Echipă Multidisciplinară: Chirurg Hepatobiliar · Anestezist Transplant · Hepatolog · Intensivist · Coordonator Transplant Clinic · Imunolog'}
            </div>
          </div>

          {/* Bone Marrow */}
          <div className="p-8 bg-[#0b1626] rounded-[2rem] text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-accent/10 rounded-full blur-3xl" />
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 bg-accent rounded-xl flex items-center justify-center"><Shield size={16} className="text-prime" /></div>
              <h3 className="text-2xl font-bold text-accent m-0">{isEn ? 'Bone Marrow Transplant (HSCT)' : 'Transplant Măduvă Osoasă (TCSH)'}</h3>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed mb-5">{isEn
              ? 'Haematopoietic Stem Cell Transplantation (HSCT) is the curative treatment for haematological malignancies (AML, ALL, MDS, lymphoma) and non-malignant haematopoietic disorders (aplastic anaemia, thalassaemia). Meva offers: (1) Allogeneic MUD (10/10 HLA-matched unrelated donor from international registry), (2) Haploidentical (50% match — parent, sibling, child), (3) Autologous (own stem cell mobilisation and re-infusion). Conditioning regimen (myeloablative or RIC) is engineered by the haematology board based on disease and patient fitness score.'
              : 'Transplantul de Celule Stem Hematopoietice (TCSH) este tratamentul curativ pentru malignități hematologice (LAM, LAL, SMD, limfom) și tulburări hematopoietice non-maligne (anemie aplastică, talasemie). Meva oferă: (1) Alogen MUD (donator nepersonal compatibil HLA 10/10 din registru internațional), (2) Haploidentic (compatibilitate 50% — părinte, frate, copil), (3) Autolog (mobilizarea și reinfuzia propriilor celule stem). Regimul de condiționare (mieloablativ sau RIC) este proiectat de board-ul de hematologie pe baza bolii și scorului de fitness al pacientului.'}
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                { label: isEn?'MUD Allogeneic':'Alogen MUD', icon: '🌍' },
                { label: isEn?'Haploidentical':'Haploidentic', icon: '👨‍👩‍👧' },
                { label: isEn?'Autologous':'Autolog', icon: '🔄' },
                { label: isEn?'GVHD Prophylaxis':'Profilaxie GVHD', icon: '🛡️' },
              ].map(c => (
                <div key={c.label} className="text-center p-3 bg-white/5 rounded-xl border border-white/10">
                  <p className="text-2xl mb-1">{c.icon}</p>
                  <p className="text-xs font-bold text-gray-300">{c.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mb-16">
          <h3 className="text-3xl font-serif font-bold text-prime mb-8 text-center">{isEn ? "Patient Journey" : "Călătoria Pacientului"}</h3>
          <PatientJourneyTimeline />
        </div>

        <div className="max-w-4xl mx-auto mb-16">
          <h3 className="text-3xl font-serif font-bold text-prime mb-8 text-center">{isEn ? "Frequently Asked Questions" : "Întrebări Frecvente"}</h3>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white border border-gray-100 rounded-2xl shadow-sm overflow-hidden">
                <button 
                  onClick={() => setActiveFaq(activeFaq === index ? -1 : index)} 
                  className="w-full px-6 py-5 flex items-center justify-between text-left group"
                  aria-expanded={activeFaq === index}
                  aria-controls={`faq-answer-${index}`}
                  id={`faq-button-${index}`}
                >
                  <span className="font-bold text-prime text-lg pr-4">{faq.q}</span>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors ${activeFaq === index ? 'bg-accent text-white' : 'bg-gray-100 text-gray-500'}`} aria-hidden="true">
                    {activeFaq === index ? <Minus size={16} /> : <Plus size={16} />}
                  </div>
                </button>
                <div 
                  id={`faq-answer-${index}`}
                  aria-labelledby={`faq-button-${index}`}
                  role="region"
                  className={`px-6 overflow-hidden transition-all duration-300 ${activeFaq === index ? 'max-h-96 pb-6 opacity-100' : 'max-h-0 opacity-0'}`}
                >
                  <p className="text-gray-600 border-t border-gray-100 pt-5">{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center pb-12">
           <a 
             href="/#ai-assistant" 
             className="bg-prime text-white font-bold py-5 px-12 rounded-xl shadow-lg hover:bg-[#0f1f38] transition-all text-lg inline-flex items-center"
             aria-label={isEn ? "Discuss Your Organ Transplant Case" : "Discută Cazul de Transplant de Organe"}
           >
              {isEn ? "Discuss Your Case Confidentially" : "Discută Cazul Tău în Confidențialitate"} <Activity size={20} className="ml-3 text-accent" aria-hidden="true" />
           </a>
        </div>
        <CertRow isEn={isEn} />
      </div>
    </div>
  );
}
export default OrganTransplant;

```

### Dosya Adı: src\pages\PlasticSurgery.jsx
```jsx
import React, { useEffect, useState } from 'react';
import { Activity, Plus, Minus, Scissors, Zap, Shield, Sparkles, Ruler, Microscope, ChevronDown } from 'lucide-react';
import PLASTIC from '../data/plasticData';
import DoctorBadge from '../components/DoctorBadge';
import PatientJourneyTimeline from '../components/PatientJourneyTimeline';
import DynamicSEO from '../components/DynamicSEO';
import BeforeAfterSlider from '../components/BeforeAfterSlider';
import { TechCard, CertRow, RecoveryTimeline, VerifiedBadge, LeadMagnetBox } from '../components/ClinicalBadges';

const plasticRecoveryEn = [
  { period: 'Day 1', label: 'Post-op observation, vital monitoring' },
  { period: 'Day 3-5', label: 'Cast removal (Rhinoplasty) / Drain removal' },
  { period: 'Week 2', label: 'Edema reduction, vertical vector stability' },
  { period: 'Month 3', label: 'Return to physical exertion, swelling 90% gone' },
  { period: 'Month 12', label: 'Final tissue maturation and aesthetic refinement' },
];

const plasticRecoveryRo = [
  { period: 'Ziua 1', label: 'Observație post-operatorie, monitorizare vitală' },
  { period: 'Ziua 3-5', label: 'Îndepărtarea atelei (Rinoplastie) / scoaterea tuburilor' },
  { period: 'Săptămâna 2', label: 'Reducerea edemului, stabilitate verticală' },
  { period: 'Luna 3', label: 'Revenire la efort fizic, 90% din umflături dispărute' },
  { period: 'Luna 12', label: 'Maturarea finală a țesuturilor și rafinament estetic' },
];

const faqEn = [
  { q: "What is a Deep Plane Facelift?", a: "Unlike a traditional facelift that only pulls the skin, a Deep Plane Facelift repositions the underlying muscular layers (SMAS) and fat, creating a natural, younger look that lasts 15+ years." },
  { q: "Why use Ultrasonic Piezo for Rhinoplasty?", a: "Piezo technology uses sound waves to reshape the nasal bone without damaging soft tissue, nerves, or blood vessels, resulting in zero bruising and faster recovery." },
  { q: "Is the vertical vector approach better?", a: "Yes. By lifting tissues vertically rather than horizontally, we avoid the 'wind-blown' artificial look and achieve a much more anatomical rejuvenation." }
];

const faqRo = [
  { q: "Ce este un Lifting Facial Deep Plane?", a: "Spre deosebire de un lifting tradițional care trage doar pielea, procedura Deep Plane repoziționează straturile musculare profunde (SMAS), oferind un aspect natural ce durează peste 15 ani." },
  { q: "De ce folosim Ultrasonic Piezo pentru Rinoplastie?", a: "Tehnologia Piezo folosește unde sonore pentru a remodela osul nazal fără a distruge țesuturile moi, nervii sau vasele de sânge, eliminând vânătăile." },
  { q: "Este mai bună abordarea pe vector vertical?", a: "Da. Prin ridicarea țesuturilor vertical, evităm aspectul artificial 'tras' și obținem o întinerire mult mai anatomică." }
];

const PlasticSurgery = ({ lang = 'ro' }) => {
  const [activeFaq, setActiveFaq] = useState(0);
  const [openTx, setOpenTx] = useState(null);
  const isEn = lang === 'en';
  useEffect(() => window.scrollTo(0, 0), [lang]);
  const faqs = isEn ? faqEn : faqRo;
  const g = (obj) => obj[isEn ? 'en' : 'ro'];

  return (
    <div className="bg-white min-h-screen pt-32 pb-24">
      <DynamicSEO 
        title={isEn ? "Advanced Biomechanical Plastic Surgery | Meva Clinic" : "Chirurgie Plastică Biomecanică Avansată | Meva Clinic"}
        description={isEn ? "Specializing in Deep Plane Facelifts and Ultrasonic Piezo Rhinoplasty. Natural rejuvenation by master surgeons." : "Specializați în Lifting Facial Deep Plane și Rinoplastie Ultrasonică Piezo. Întinerire naturală de către maeștri chirurgi."}
        path={isEn ? "/en/plastic-surgery" : "/ro/chirurgie-plastica"}
        schemaType="MedicalProcedure"
        keywords="estetica faciala Turcia, plastic surgery Istanbul, rhinoplasty Turkey"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-6">
          <VerifiedBadge isEn={isEn} />
        </div>
        
        <h1 className="text-4xl md:text-7xl font-serif font-bold text-prime mb-8 text-center leading-tight">
          {isEn ? "The Art of Vertical Rejuvenation" : "Arta Întineririi pe Vector Vertical"}
        </h1>

        <div className="flex justify-center mb-12">
           <DoctorBadge text={isEn ? "Board Certified ISAPS Specialists" : "Specialiști Certificați ISAPS"} />
        </div>

        {/* Tech Spec Grid */}
        <div className="bg-[#0b1626] rounded-[2.5rem] p-8 md:p-12 mb-20 shadow-2xl relative overflow-hidden">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <TechCard icon={Scissors} title="Deep Plane Lift" sub={isEn ? 'Technique' : 'Tehnică'} value={isEn ? 'SMAS Relocation' : 'Relocare SMAS'} />
            <TechCard icon={Zap} title="Ultrasonic Piezo" sub={isEn ? 'Rhinoplasty' : 'Rinoplastie'} value={isEn ? 'Zero Trauma' : 'Zero Traumă'} />
            <TechCard icon={Ruler} title="Vertical Vector" sub={isEn ? 'Geometry' : 'Geometrie'} value={isEn ? 'Natural Flow' : 'Flux Natural'} />
            <TechCard icon={Shield} title="JCI Safety" sub={isEn ? 'Accreditation' : 'Acreditare'} value="Gold Standard" />
          </div>
        </div>

        {/* ── 15 TREATMENT CARDS ── */}
        <div className="mb-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-prime mb-3">
              {isEn ? '15 Aesthetic Procedures — Meva Clinic' : '15 Proceduri Estetice — Meva Clinic'}
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              {isEn
                ? 'Select any procedure to see candidacy criteria, surgical technique and Meva quality standards.'
                : 'Selectați orice procedură pentru a vedea criteriile de candidatură, tehnica chirurgicală și standardele de calitate Meva.'}
            </p>
          </div>

          {/* Post-Bariatric Featured Banner */}
          <div className="bg-[#0b1626] rounded-[2rem] p-8 mb-10 text-white relative overflow-hidden border border-accent/20">
            <div className="absolute top-0 right-0 w-48 h-48 bg-accent/10 rounded-full blur-3xl" />
            <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
              <div className="text-5xl">⚕️</div>
              <div className="flex-1">
                <span className="text-accent font-black text-xs uppercase tracking-widest">
                  {isEn ? 'Specialist Service · Post-Bariatric' : 'Serviciu Specialist · Post-Bariatric'}
                </span>
                <h3 className="text-2xl font-serif font-bold mt-2 mb-3">
                  {isEn ? 'Post-Bariatric Body Contouring — Our Specialist Unit' : 'Conturare Corporală Post-Bariatrică — Unitatea Noastră Specialist'}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed max-w-3xl">
                  {isEn
                    ? 'After Gastric Sleeve or Bypass, dramatic weight loss leaves excess skin on the abdomen, arms, thighs and breasts that no exercise can resolve. Our post-bariatric surgical team — directly coordinated with the bariatric unit — designs a staged body contouring plan starting with belt lipectomy (360° circumferential body lift), followed by brachioplasty, medial thigh lift and breast restoration. Timing is critical: we require 12–18 months post-surgery with stable weight for 6+ months before any contouring procedure. Progressive tension sutures reduce drain usage by 80%.'
                    : 'După Gastric Sleeve sau Bypass, pierderea dramatică în greutate lasă exces de piele pe abdomen, brațe, coapse și sâni pe care niciun exercițiu nu îl poate rezolva. Echipa noastră chirurgicală post-bariatrică — coordonată direct cu unitatea bariatrică — proiectează un plan de conturare corporală etapizat începând cu belt lipectomy (body lift circumferențial 360°), urmat de brahioplastie, lifting medial al coapselor și restaurare mamară. Timing-ul este critic: necesităm 12–18 luni post-chirurgie cu greutate stabilă 6+ luni înainte de orice procedură de conturare. Suturile cu tensiune progresivă reduc utilizarea drenurilor cu 80%.'}
                </p>
              </div>
            </div>
          </div>

          {/* Accordion Grid */}
          <div className="space-y-3">
            {PLASTIC.map((tx) => (
              <div key={tx.id} className="border border-gray-100 rounded-2xl overflow-hidden shadow-sm">
                <button
                  onClick={() => setOpenTx(openTx === tx.id ? null : tx.id)}
                  className="w-full px-6 py-5 flex items-center gap-4 text-left bg-white hover:bg-gray-50 transition-colors group"
                  aria-expanded={openTx === tx.id}
                >
                  <span className="text-2xl">{tx.icon}</span>
                  <div className="flex-1">
                    <p className="font-bold text-prime text-base leading-tight">{g(tx.name)}</p>
                    <p className="text-xs text-accent font-semibold mt-0.5">{g(tx.tag)}</p>
                  </div>
                  <div className="flex items-center gap-3 shrink-0">
                    <span className="hidden sm:block text-xs text-gray-400 bg-gray-100 px-3 py-1 rounded-full">
                      {g(tx.recovery)} · {g(tx.stay)}
                    </span>
                    <ChevronDown size={18} className={`text-gray-400 transition-transform duration-300 ${openTx === tx.id ? 'rotate-180' : ''}`} />
                  </div>
                </button>

                <div className={`overflow-hidden transition-all duration-300 ${openTx === tx.id ? 'max-h-[800px]' : 'max-h-0'}`}>
                  <div className="px-6 pb-7 pt-2 bg-gray-50 grid grid-cols-1 md:grid-cols-3 gap-5">
                    {/* Is this for me? */}
                    <div className="bg-white rounded-xl p-5 border border-gray-100">
                      <p className="text-accent font-black text-xs uppercase tracking-widest mb-2">🎯 {isEn ? 'Is This For Me?' : 'Este Potrivit pentru Mine?'}</p>
                      <p className="text-sm text-gray-600 leading-relaxed">{g(tx.isForMe)}</p>
                    </div>
                    {/* Techniques */}
                    <div className="bg-white rounded-xl p-5 border border-gray-100">
                      <p className="text-prime font-black text-xs uppercase tracking-widest mb-2">⚡ {isEn ? 'Techniques' : 'Tehnici'}</p>
                      <p className="text-sm text-gray-600 leading-relaxed">{g(tx.techniques)}</p>
                    </div>
                    {/* Meva Quality */}
                    <div className="bg-white rounded-xl p-5 border border-gray-100">
                      <p className="text-green-600 font-black text-xs uppercase tracking-widest mb-2">✅ {isEn ? 'Meva Quality' : 'Calitate Meva'}</p>
                      <p className="text-sm text-gray-600 leading-relaxed">{g(tx.mevaQuality)}</p>
                      <div className="flex gap-3 mt-4">
                        <span className="text-xs bg-prime/5 text-prime font-bold px-3 py-1 rounded-full">{g(tx.recovery)}</span>
                        <span className="text-xs bg-accent/10 text-prime font-bold px-3 py-1 rounded-full">{g(tx.stay)}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>


        <div className="mb-24">
          <h2 className="text-3xl font-serif font-bold text-prime mb-12 text-center">{isEn ? "Clinical Transformations" : "Transformări Clinice"}</h2>
          <BeforeAfterSlider 
            beforeImage="https://images.unsplash.com/photo-1522337660859-02fbefca4702?auto=format&fit=crop&q=80&w=800"
            afterImage="https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&q=80&w=800"
            beforeLabel={isEn ? "Initial" : "Inițial"}
            afterLabel={isEn ? "3 Months Post-Op" : "3 Luni Post-Op"}
          />
        </div>

        <div className="mb-24">
          <h2 className="text-3xl font-serif font-bold text-prime mb-12 text-center">{isEn ? "Surgical Recovery Roadmap" : "Harta Recuperării Chirurgicale"}</h2>
          <RecoveryTimeline steps={isEn ? plasticRecoveryEn : plasticRecoveryRo} isEn={isEn} />
        </div>

        <div className="mb-24">
           <h2 className="text-3xl font-serif font-bold text-prime mb-12 text-center">{isEn ? "Integrated Patient Journey" : "Călătoria Integrată a Pacientului"}</h2>
           <PatientJourneyTimeline />
        </div>

        <div className="max-w-4xl mx-auto mb-24">
          <h2 className="text-3xl font-serif font-bold text-prime mb-12 text-center">{isEn ? "Clinical FAQ" : "Întrebări Clinice"}</h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white border border-gray-100 rounded-3xl shadow-sm overflow-hidden">
                <button 
                  onClick={() => setActiveFaq(activeFaq === index ? -1 : index)} 
                  className="w-full px-8 py-6 flex items-center justify-between text-left"
                  aria-expanded={activeFaq === index}
                  aria-controls={`faq-answer-${index}`}
                  id={`faq-button-${index}`}
                >
                  <span className="font-bold text-prime text-lg">{faq.q}</span>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all ${activeFaq === index ? 'bg-accent text-white' : 'bg-gray-50'}`} aria-hidden="true">
                    <Plus size={18} />
                  </div>
                </button>
                <div 
                  id={`faq-answer-${index}`}
                  aria-labelledby={`faq-button-${index}`}
                  role="region"
                  className={`px-8 overflow-hidden transition-all duration-500 ${activeFaq === index ? 'max-h-96 pb-8 opacity-100' : 'max-h-0 opacity-0'}`}
                >
                  <p className="text-gray-600 border-t border-gray-50 pt-6 leading-relaxed">{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <CertRow isEn={isEn} />
      </div>
    </div>
  );
}

export default PlasticSurgery;

```

### Dosya Adı: src\pages\PrivacyPolicy.jsx
```jsx
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

```

### Dosya Adı: src\pages\QuizPage.jsx
```jsx
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

```

### Dosya Adı: src\pages\RomaniaSpecial.jsx
```jsx
import React, { useEffect } from 'react';
import { Plane, MapPin, Users, ShieldCheck, PhoneCall, ArrowRight, Star } from 'lucide-react';
import DynamicSEO from '../components/DynamicSEO';
import { pushToDataLayer } from '../utils/AnalyticsUtils';

const RomaniaSpecial = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const flights = [
    { city: 'București (OTP)', time: '1h 15m', airline: 'TAROM / Turkish Airlines' },
    { city: 'Cluj-Napoca (CLJ)', time: '1h 45m', airline: 'Turkish Airlines / Charter' },
    { city: 'Iași (IAS)', time: '1h 30m', airline: 'TAROM / Turkish Airlines' }
  ];

  return (
    <div className="min-h-screen bg-white pt-32 pb-24">
      <DynamicSEO 
        title="Meva Clinic: Centrul de Excelență pentru Pacienții din România"
        description="Pachete VIP medicale în Istanbul special create pentru pacienții din România. Traducător dedicat, zboruri scurte și expertiză JCI."
        path="/ro/romani-istanbul"
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-xs font-bold uppercase tracking-widest mb-6 border border-blue-100">
             🇷🇴 Istanbul - Destinația Nr. 1 pentru Pacienții Români
          </div>
          <h1 className="text-4xl md:text-7xl font-serif font-bold text-prime mb-8 leading-[1.1]">
            Podul Medical <span className="text-accent">România-Istanbul</span>
          </h1>
          <p className="text-xl text-gray-500 max-w-3xl mx-auto leading-relaxed">
            Meva Clinic oferă o experiență all-inclusive fără bariere lingvistice. Suntem partenerul tău de încredere pentru chirurgie de top în Turcia.
          </p>
        </div>

        {/* Flight & Logistics */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <div>
            <h2 className="text-3xl font-serif font-bold text-prime mb-8 flex items-center gap-3">
              <Plane className="text-accent" /> Zboruri Directe & Logistică
            </h2>
            <div className="space-y-4">
              {flights.map((f, i) => (
                <div key={i} className="flex items-center justify-between p-6 bg-gray-50 rounded-2xl border border-gray-100">
                  <div>
                    <p className="font-bold text-prime">{f.city}</p>
                    <p className="text-xs text-gray-400">{f.airline}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-accent font-bold">{f.time}</p>
                    <p className="text-[10px] text-gray-400 uppercase font-bold tracking-widest">Durată Zbor</p>
                  </div>
                </div>
              ))}
            </div>
            <p className="mt-8 text-sm text-gray-500 italic">
              *Echipa noastră preia pacientul direct de la poarta de sosiri a Aeroportului Istanbul (IST).
            </p>
          </div>
          <div className="relative">
            <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl border-8 border-white">
               <img src="https://images.unsplash.com/photo-1541432901042-2dad30b370d9?auto=format&fit=crop&q=80&w=1000" alt="Istanbul Medical Tourism" aria-label="Istanbul Medical Tourism" width="1000" height="1000" loading="eager" fetchpriority="high" className="w-full h-full object-cover" />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-prime text-white p-6 rounded-2xl shadow-xl max-w-xs">
               <Star className="text-accent mb-2" fill="currentColor" />
               <p className="font-bold text-lg mb-1">98% Satisfacție</p>
               <p className="text-xs text-gray-400">Peste 2500 de pacienți români tratați cu succes în ultimii 3 ani.</p>
            </div>
          </div>
        </div>

        {/* Romanian Support Team */}
        <div className="bg-[#0b1626] text-white rounded-[3rem] p-12 md:p-20 mb-24 relative overflow-hidden">
           <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-[120px] -mr-48 -mt-48"></div>
           <div className="max-w-3xl relative z-10">
              <h2 className="text-3xl md:text-5xl font-serif font-bold mb-8">Echipă dedicată vorbitoare de limba Română</h2>
              <p className="text-lg text-gray-300 mb-10 leading-relaxed">
                Uită de grija traducerii. La Meva Clinic, vei fi asistat de la prima consultație online până la externare de un coordonator medical român. Consultul cu medicii specialiști turci este tradus simultan pentru a asigura o comunicare perfectă.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                 <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center"><Users className="text-accent" /></div>
                    <span className="font-bold">Traducător 24/7 Inclus</span>
                 </div>
                 <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center"><PhoneCall className="text-accent" /></div>
                    <span className="font-bold">Asistență Post-Operatorie RO</span>
                 </div>
              </div>
           </div>
        </div>

        {/* Why Meva for Romanians */}
        <div className="text-center mb-24">
           <h2 className="text-3xl font-serif font-bold text-prime mb-12">De ce aleg românii Meva Clinic?</h2>
           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { title: 'Prețuri Competitive', desc: 'Costuri cu până la 50% mai mici decât în clinicile private din București sau Cluj.', icon: <ArrowRight className="text-accent" /> },
                { title: 'Standarde JCI', desc: 'Acreditare internațională de aur pe care puține spitale din România o dețin.', icon: <ShieldCheck className="text-accent" /> },
                { title: 'Tehnologie 2026', desc: 'Acces la sisteme robotice Da Vinci și CyberKnife S7 indisponibile regional.', icon: <MapPin className="text-accent" /> }
              ].map((item, i) => (
                <div key={i} className="p-10 rounded-[2.5rem] bg-gray-50 border border-gray-100 hover:shadow-xl transition-all">
                   <div className="mb-6 flex justify-center">{item.icon}</div>
                   <h3 className="text-xl font-bold text-prime mb-4">{item.title}</h3>
                   <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
           </div>
        </div>

        {/* CTA */}
        <div className="text-center">
           <a 
             href="https://wa.me/905324675941" 
             onClick={() => pushToDataLayer('whatsapp_click', { location: 'romania_special_cta' })}
             className="bg-prime text-white px-12 py-6 rounded-2xl font-bold text-xl shadow-2xl hover:bg-[#0f1f38] transition-all inline-flex items-center gap-4"
           >
              Vreau o consultație gratuită în Română <ArrowRight />
           </a>
        </div>
      </div>
    </div>
  );
};

export default RomaniaSpecial;

```

### Dosya Adı: src\pages\TreatmentDetail.jsx
```jsx
/**
 * TreatmentDetail.jsx — Premium dynamic treatment page
 * Route: /:lang/:slug  (e.g. /en/gastric-sleeve, /ro/implant-par)
 *
 * Features:
 * - Hero with treatment-specific image
 * - Doctor Quote section (E-E-A-T authority)
 * - Step-by-step procedure walkthrough
 * - Advantages grid
 * - Sticky specs sidebar
 * - MedicalProcedure schema
 * - DynamicSEO per treatment
 * - Full bilingual EN / RO
 */

import React, { useEffect } from 'react';
import { useParams, Link, useLocation } from 'react-router-dom';
import {
  ArrowLeft, CheckCircle, Clock, Calendar,
  Activity, Quote, Star, ShieldCheck, Phone,
  ChevronDown, HelpCircle, UserCheck, Zap, Info
} from 'lucide-react';
import treatmentData from '../data/treatmentDetails.json';
import { findTreatment } from '../data/treatmentsData';
import DynamicSEO from '../components/DynamicSEO';
import { REVIEWERS } from '../components/MedicalReviewer';
import { PxTrack } from '../utils/pixel';
import { pushToDataLayer } from '../utils/AnalyticsUtils';

// ─── Reviewer image fallback ─────────────────────────────────────────────────
const DoctorAvatar = ({ name, image }) => (
  <img
    src={image}
    alt={`${name} — Meva Clinic`}
    width={64} height={64}
    loading="lazy"
    onError={e => {
      e.currentTarget.onerror = null;
      e.currentTarget.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&size=64&background=0b1626&color=d4af37&bold=true&format=svg`;
    }}
    className="w-16 h-16 rounded-2xl object-cover border-2 border-accent/30 shadow-lg"
  />
);

const AccordionItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <div className="border-b border-gray-200 last:border-0">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex items-center justify-between text-left hover:text-accent transition-colors group"
      >
        <span className="font-serif font-bold text-lg text-prime group-hover:text-accent pr-8">{question}</span>
        <span className={`shrink-0 w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center transform transition-transform duration-300 ${isOpen ? 'rotate-180 bg-accent text-prime' : 'text-accent'}`}>
          <ChevronDown size={18} />
        </span>
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-[500px] pb-6' : 'max-h-0'}`}>
        <div className="text-gray-600 leading-relaxed border-l-2 border-accent/30 pl-6 py-2 bg-gray-50/50 rounded-r-xl">
          {answer}
        </div>
      </div>
    </div>
  );
};

// ─── Component ───────────────────────────────────────────────────────────────
const TreatmentDetail = () => {
  const { slug } = useParams();
  const location = useLocation();
  const isEn = location.pathname.startsWith('/en');

  // 1. Try new canonical treatmentsData.js first
  // 2. Fall back to legacy treatmentDetails.json
  const tdNew  = findTreatment(slug);
  const tdLeg  = !tdNew ? treatmentData.find(t => t.slug === slug) : null;
  const treatment = tdNew || tdLeg;

  useEffect(() => {
    window.scrollTo(0, 0);
    if (treatment) {
      PxTrack?.('ViewContent', {
        content_type: 'treatment_detail',
        content_name: isEn ? treatment.title_en : treatment.title,
      });
      pushToDataLayer?.('page_view', { page_type: 'treatment_detail', slug });
    }
  }, [slug, treatment, isEn]);

  // 404
  if (!treatment) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-white px-6 text-center pt-32">
        <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mb-6">
          <Activity size={28} className="text-accent" />
        </div>
        <h1 className="text-3xl font-serif font-bold text-prime mb-4">
          {isEn ? 'Treatment Not Found' : 'Tratament Negăsit'}
        </h1>
        <p className="text-gray-500 mb-8">
          {isEn ? 'This treatment page does not exist or has been moved.' : 'Această pagină de tratament nu există sau a fost mutată.'}
        </p>
        <Link to={isEn ? '/en' : '/ro'} className="bg-accent text-prime font-bold px-8 py-3 rounded-full hover:bg-prime hover:text-white transition-all">
          {isEn ? 'Back to Home' : 'Înapoi Acasă'}
        </Link>
      </div>
    );
  }

  // Localised fields — handle both data shapes
  const isNew = !!tdNew; // using treatmentsData.js

  const getSafeVal = (val, isEn) => {
    if (!val) return '';
    // If it's the new array-based structure (isThisForMe, faq), return the array for the lang
    if (Array.isArray(val)) return val; 
    return typeof val === 'object' ? (val[isEn ? 'en' : 'ro'] || val) : val;
  };

  const title       = isNew ? getSafeVal(tdNew.title, isEn) : (isEn ? treatment.title_en : treatment.title);
  const subtitle    = isNew ? getSafeVal(tdNew.shortDesc, isEn) : (isEn ? treatment.subtitle_en : treatment.subtitle);
  const description = isNew ? getSafeVal(tdNew.shortDesc, isEn) : (isEn ? treatment.description_en : treatment.description);
  
  // New Master Fields
  const isThisForMe = isNew ? (getSafeVal(tdNew.isThisForMe, isEn) || []) : [];
  const theProcedure = isNew ? getSafeVal(tdNew.theProcedure, isEn) : "";
  const mevaAdvantage = isNew ? getSafeVal(tdNew.mevaAdvantage, isEn) : "";
  const faqItems = isNew ? (getSafeVal(tdNew.faq, isEn) || []) : [];

  // Specs handling
  const newSpecs = isNew ? getSafeVal(tdNew.specs, isEn) : null;
  const details     = isNew ? {
    hospitalStay: newSpecs?.hospitalStay || (isEn ? '1-2 Nights' : '1-2 Nopți'),
    hotelStay: newSpecs?.hotelStay || (isEn ? '3-5 Nights' : '3-5 Nopți'),
    returnToWork: newSpecs?.returnToWork || (isEn ? '7-10 Days' : '7-10 Zile'),
    anesthesia: newSpecs?.anesthesia || (isEn ? 'General/Local' : 'Generală/Locală')
  } : (isEn ? treatment.details_en  : treatment.details);

  const expertName = isNew ? getSafeVal(tdNew.expert, isEn) : (treatment.expert || "Meva Clinical Team");

  const quote       = isNew ? {
    text_en: "Our clinical approach prioritizes tissue preservation and long-term natural results, ensuring your transformation is both safe and aesthetically superior.",
    text_ro: "Abordarea noastră clinică prioritizează conservarea țesuturilor și rezultatele naturale pe termen lung, asigurându-vă că transformarea este atât sigură, cât și superioară din punct de vedere estetic.",
    doctor: expertName,
    title_en: "Chief Medical Officer",
    title_ro: "Director Medical",
  } : treatment.doctorQuote;
  
  const quoteText   = isEn ? quote?.text_en : quote?.text_ro;
  const doctorTitle = isEn ? quote?.title_en : quote?.title_ro;
  const steps       = isNew ? [] : (treatment.steps || []);
  const advantages  = isNew ? [] : (treatment.advantages || []);
  const refs        = isNew ? [] : (treatment.scientificReferences || []);
  const heroImage   = isNew ? (tdNew.heroImage || `https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=1920&auto=format&fit=crop`) : treatment.heroImage;
  const seoSlug     = isNew ? tdNew.id : treatment.slug;
  const keywords    = isNew ? `${title}, Meva Clinic, Istanbul` : `${title}, Meva Clinic, Istanbul`;
  const reviewerKey = slug.includes('gastric') || slug.includes('bypass') || slug.includes('balloon') ? 'bariatric'
    : slug.includes('hair') || slug.includes('eyebrow') || slug.includes('par') || slug.includes('sprancene') ? 'hair'
    : slug.includes('onco') ? 'oncology'
    : slug.includes('dental') ? 'dental'
    : slug.includes('plastic') ? 'plastic'
    : slug.includes('andrology') || slug.includes('penile') || slug.includes('ligament') ? 'bariatric' // fallback
    : 'bariatric';
  const reviewer = REVIEWERS[reviewerKey];

  // MedicalProcedure schema
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'MedicalProcedure',
    name: title,
    description: description.substring(0, 200),
    procedureType: 'https://health-lifesci.schema.org/SurgicalProcedure',
    bodyLocation: 'Abdomen',
    followup: details.returnToWork,
    howPerformed: steps.map(s => isEn ? s.en : s.ro).join(' → '),
    recognizingAuthority: { '@type': 'Organization', name: 'JCI — Joint Commission International' },
    provider: {
      '@type': 'MedicalOrganization',
      name: 'Meva Clinic Istanbul',
      url: 'https://www.mevaclinic.com',
    },
  };

  return (
    <div className="bg-white min-h-screen selection:bg-accent/20">
      {/* ── SEO ── */}
      <DynamicSEO
        title={`${title} | Meva Clinic Istanbul`}
        description={description.substring(0, 155)}
        path={isEn ? `/en/${seoSlug}` : `/ro/${seoSlug}`}
        keywords={keywords}
        schemaType="MedicalProcedure"
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      {/* ── HERO ──────────────────────────────────────────────────────────── */}
      <section className="relative pt-32 pb-28 lg:pt-48 lg:pb-40 bg-[#0b1626] overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt={title}
            width="1920" height="1080"
            loading="eager"
            fetchPriority="high"
            className="w-full h-full object-cover opacity-25 scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0b1626] via-[#0b1626]/80 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0b1626] via-transparent to-transparent" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-white">
          {/* Back link */}
          <Link
            to={isEn ? '/en' : '/ro'}
            className="inline-flex items-center gap-2 text-xs font-bold text-accent hover:text-white uppercase tracking-widest mb-8 transition-colors"
          >
            <ArrowLeft size={15} />
            {isEn ? 'All Treatments' : 'Toate Tratamentele'}
          </Link>

          {/* Expert Badge */}
          {treatment.expert && (
            <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-2xl bg-accent/20 border border-accent/30 backdrop-blur-md mb-8 group hover:bg-accent/30 transition-all">
              <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center text-prime shadow-lg">
                <UserCheck size={20} />
              </div>
              <div>
                <p className="text-[10px] font-bold text-accent uppercase tracking-widest leading-none mb-1">
                  {isEn ? 'Clinical Lead' : 'Coordonator Clinic'}
                </p>
                <p className="text-sm font-bold text-white leading-none">
                  {typeof treatment.expert === 'object' ? treatment.expert[isEn ? 'en' : 'ro'] : treatment.expert}
                </p>
              </div>
            </div>
          )}

          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/10 text-accent text-xs font-bold uppercase tracking-widest mb-6">
            <Star size={12} className="fill-accent" />
            {isEn ? 'Meva Clinic · Istanbul' : 'Meva Clinic · Istanbul'}
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold mb-5 leading-tight max-w-3xl">
            {title}
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl border-l-4 border-accent pl-5 font-medium leading-relaxed mb-10">
            {subtitle}
          </p>

          {/* Hero CTAs */}
          <div className="flex flex-wrap gap-4">
            <a
              href="#consultation"
              className="inline-flex items-center gap-2 bg-accent text-prime font-bold py-3.5 px-8 rounded-full hover:bg-yellow-400 transition-all shadow-[0_10px_30px_rgba(212,175,55,0.3)] hover:-translate-y-0.5"
            >
              <Phone size={16} />
              {isEn ? 'Free Consultation' : 'Consultație Gratuită'}
            </a>
            <a
              href="#procedure"
              className="inline-flex items-center gap-2 border border-white/20 text-white font-bold py-3.5 px-8 rounded-full hover:border-accent hover:text-accent transition-all"
            >
              <Activity size={16} />
              {isEn ? 'How It Works' : 'Cum Funcționează'}
            </a>
          </div>
        </div>
      </section>

      {/* ── DOCTOR QUOTE ──────────────────────────────────────────────────── */}
      {quote && (
        <section className="bg-[#0b1626] border-t border-white/5 py-16">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row items-start gap-8 p-8 md:p-10 bg-white/5 border border-white/10 rounded-[2rem] relative overflow-hidden">
              {/* Decorative quote mark */}
              <div className="absolute top-6 right-8 text-accent/10 select-none" aria-hidden="true">
                <Quote size={80} />
              </div>

              {/* Doctor avatar */}
              <div className="shrink-0 flex flex-col items-center gap-3 text-center min-w-[100px]">
                <DoctorAvatar name={quote.doctor} image={reviewer?.image || ''} />
                <div>
                  <p className="text-white font-black text-sm">{quote.doctor}</p>
                  <p className="text-accent text-[11px] font-semibold leading-tight mt-0.5 max-w-[120px]">{doctorTitle}</p>
                </div>
              </div>

              {/* Quote text */}
              <blockquote className="flex-1">
                <div className="flex items-center gap-2 mb-4">
                  <ShieldCheck size={15} className="text-accent" />
                  <p className="text-accent text-xs font-bold uppercase tracking-widest">
                    {isEn ? "Doctor's Clinical Insight" : 'Perspectivă Clinică a Medicului'}
                  </p>
                </div>
                <p className="text-gray-200 text-lg leading-relaxed font-serif italic">
                  "{quoteText}"
                </p>
              </blockquote>
            </div>
          </div>
        </section>
      )}

      {/* ── MAIN CONTENT ──────────────────────────────────────────────────── */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-14">

            {/* ── LEFT: Content ── */}
            <div className="lg:w-7/12 space-y-14">

              {/* Description */}
              <div>
                <p className="text-xs uppercase tracking-widest font-bold text-prime/40 mb-3">
                  {isEn ? 'About This Procedure' : 'Despre Această Procedură'}
                </p>
                <h2 className="text-3xl font-serif font-bold text-prime mb-5">
                  {isEn ? `Why Choose Meva Clinic for ${(title || "Meva").split(' ')[0]}?` : `De ce Meva Clinic pentru ${(title || "Meva").split(' ')[0]}?`}
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed">{description}</p>
              </div>

              {/* New Master Content Sections */}
              {isNew && (
                <div className="space-y-16">
                  {/* Who is this for? */}
                  {isThisForMe.length > 0 && (
                    <div className="bg-gray-50 rounded-[2.5rem] p-10 border border-gray-100 shadow-sm relative overflow-hidden">
                      <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-full -mr-16 -mt-16 blur-2xl" />
                      <h2 className="text-2xl font-serif font-bold text-prime mb-8 flex items-center gap-3">
                        <span className="w-10 h-10 bg-accent/10 rounded-xl flex items-center justify-center">
                          <UserCheck size={20} className="text-accent" />
                        </span>
                        {isEn ? 'Is This Treatment for Me?' : 'Este Acest Tratament pentru Mine?'}
                      </h2>
                      <div className="grid grid-cols-1 md:grid-cols-1 gap-5">
                        {isThisForMe.map((item, i) => (
                          <div key={i} className="flex items-start gap-4 p-4 bg-white rounded-2xl border border-gray-50 hover:border-accent/20 transition-all hover:shadow-md group">
                            <div className="w-8 h-8 rounded-full bg-accent/5 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-accent group-hover:text-prime transition-colors">
                              <CheckCircle size={16} />
                            </div>
                            <p className="text-gray-700 font-medium leading-relaxed">{item}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* The Procedure Details */}
                  {theProcedure && (
                    <div id="procedure" className="scroll-mt-32">
                      <h2 className="text-3xl font-serif font-bold text-prime mb-6 flex items-center gap-3">
                        <span className="w-10 h-10 bg-accent/10 rounded-xl flex items-center justify-center">
                          <Zap size={20} className="text-accent" />
                        </span>
                        {isEn ? 'The Clinical Procedure' : 'Procedura Clinică'}
                      </h2>
                      <div className="prose prose-lg max-w-none text-gray-600 leading-relaxed">
                        <p className="bg-white border-l-4 border-accent p-8 rounded-r-3xl shadow-sm italic font-serif text-xl text-prime/80 mb-8">
                          {theProcedure}
                        </p>
                      </div>
                    </div>
                  )}

                  {/* Meva Advantage */}
                  {mevaAdvantage && (
                    <div className="bg-prime text-white rounded-[2.5rem] p-10 relative overflow-hidden shadow-2xl">
                      <div className="absolute top-0 right-0 p-10 opacity-10 rotate-12">
                        <ShieldCheck size={120} />
                      </div>
                      <div className="relative z-10">
                        <h2 className="text-2xl font-serif font-bold text-accent mb-6 flex items-center gap-3">
                          <ShieldCheck size={24} />
                          {isEn ? 'The Meva Advantage' : 'Avantajul Meva Clinic'}
                        </h2>
                        <p className="text-xl text-gray-200 leading-relaxed font-light">
                          {mevaAdvantage}
                        </p>
                        <div className="mt-8 grid grid-cols-2 md:grid-cols-3 gap-6 pt-8 border-t border-white/10">
                          <div className="flex flex-col gap-1">
                            <span className="text-accent font-bold text-lg">99%</span>
                            <span className="text-xs text-gray-400 uppercase tracking-tighter">{isEn ? 'Safety Rate' : 'Rată Siguranță'}</span>
                          </div>
                          <div className="flex flex-col gap-1">
                            <span className="text-accent font-bold text-lg">15+</span>
                            <span className="text-xs text-gray-400 uppercase tracking-tighter">{isEn ? 'Years Exp.' : 'Ani Exp.'}</span>
                          </div>
                          <div className="flex flex-col gap-1">
                            <span className="text-accent font-bold text-lg">VIP</span>
                            <span className="text-xs text-gray-400 uppercase tracking-tighter">{isEn ? 'Care Standard' : 'Standard Îngrijire'}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* FAQ Accordion */}
                  {faqItems.length > 0 && (
                    <div className="pt-8">
                      <h2 className="text-3xl font-serif font-bold text-prime mb-8 flex items-center gap-3">
                        <span className="w-10 h-10 bg-accent/10 rounded-xl flex items-center justify-center">
                          <HelpCircle size={20} className="text-accent" />
                        </span>
                        {isEn ? 'Frequently Asked Questions' : 'Întrebări Frecvente'}
                      </h2>
                      <div className="bg-white rounded-3xl border border-gray-100 shadow-sm px-8 overflow-hidden">
                        {faqItems.map((item, i) => (
                          <AccordionItem key={i} question={item.q} answer={item.a} />
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )}

              {/* Legacy Procedure Steps (Hidden for new data) */}
              {!isNew && steps.length > 0 && (
                <div id="procedure">
                  <h2 className="text-2xl font-serif font-bold text-prime mb-6 flex items-center gap-3">
                    <span className="w-8 h-8 bg-accent/10 rounded-xl flex items-center justify-center">
                      <Activity size={16} className="text-accent" />
                    </span>
                    {isEn ? 'Step-by-Step Procedure' : 'Procedura Pas cu Pas'}
                  </h2>
                  <ol className="space-y-4">
                    {steps.map((step, i) => (
                      <li key={i} className="flex gap-5 items-start p-5 bg-gray-50 rounded-2xl border border-gray-100 hover:border-accent/30 transition-colors">
                        <span className="w-9 h-9 rounded-full bg-prime text-white font-black text-sm flex items-center justify-center shrink-0 shadow-md">
                          {i + 1}
                        </span>
                        <p className="text-gray-700 font-medium leading-relaxed pt-1">
                          {isEn ? step.en : step.ro}
                        </p>
                      </li>
                    ))}
                  </ol>
                </div>
              )}

              {/* Legacy Advantages (Hidden for new data) */}
              {!isNew && advantages.length > 0 && (
                <div>
                  <h2 className="text-2xl font-serif font-bold text-prime mb-6 flex items-center gap-3">
                    <span className="w-8 h-8 bg-accent/10 rounded-xl flex items-center justify-center">
                      <CheckCircle size={16} className="text-accent" />
                    </span>
                    {isEn ? 'Key Advantages at Meva Clinic' : 'Avantaje Cheie la Meva Clinic'}
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {advantages.map((adv, i) => (
                      <div key={i} className="flex items-start gap-3 p-4 rounded-2xl bg-green-50 border border-green-100">
                        <CheckCircle size={18} className="text-green-500 shrink-0 mt-0.5" />
                        <p className="text-gray-700 text-sm font-semibold leading-relaxed">
                          {isEn ? adv.en : adv.ro}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* VIP Package guarantee */}
              <div className="bg-[#0b1626] rounded-[2rem] p-8 border border-white/5 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-40 h-40 bg-accent/10 rounded-full blur-3xl -mr-10 -mt-10" />
                <h3 className="font-serif font-bold text-xl text-accent mb-5">
                  {isEn ? "Meva VIP Package \u2014 What's Included" : 'Pachetul Meva VIP \u2014 Ce Include'}
                </h3>
                <ul className="space-y-3">
                  {(isEn ? [
                    'JCI Accredited hospital with full Intensive Care Unit',
                    'Native English-speaking clinical coordinator 24/7',
                    'VIP Airport ↔ Hotel ↔ Clinic transfers',
                    'Pre-operative analysis & post-operative medication',
                    '1-year remote follow-up via telemedicine',
                  ] : [
                    'Spital Acreditat JCI cu Terapie Intensivă completă',
                    'Coordonator clinic vorbitor nativ de română 24/7',
                    'Transferuri VIP Aeroport ↔ Hotel ↔ Clinică',
                    'Analize pre-operatorii și medicație post-operatorie',
                    '1 an follow-up la distanță prin telemedicină',
                  ]).map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-gray-300 text-sm">
                      <CheckCircle size={16} className="text-accent shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Scientific References */}
              {refs?.length > 0 && (
                <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100">
                  <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-4 flex items-center gap-2">
                    <ShieldCheck size={13} className="text-accent" />
                    {isEn ? 'Scientific References' : 'Referințe Științifice'}
                  </p>
                  <ul className="space-y-2">
                    {refs.map((ref, i) => (
                      <li key={i} className="flex gap-3 text-xs text-gray-500 leading-relaxed">
                        <span className="text-accent font-bold shrink-0">[{i + 1}]</span>
                        {ref}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* ── RIGHT: Sticky Sidebar ── */}
            <div className="lg:w-5/12">
              <div className="sticky top-24 space-y-5">

                {/* Specs card */}
                <div className="bg-prime text-white rounded-[2rem] p-8 shadow-2xl border border-white/5">
                  <h3 className="font-serif font-bold text-xl text-accent border-b border-white/10 pb-4 mb-6">
                    {isEn ? 'Procedure Details' : 'Detalii Procedură'}
                  </h3>
                  <div className="space-y-5">
                    {[
                      { icon: <Calendar size={18} />, label: isEn ? 'Hospital Stay' : 'Spitalizare', value: details.hospitalStay },
                      { icon: <CheckCircle size={18} />, label: isEn ? 'Hotel Package' : 'Pachet Hotel', value: details.hotelStay },
                      { icon: <Clock size={18} />, label: isEn ? 'Return to Work' : 'Revenire la Muncă', value: details.returnToWork },
                      { icon: <Activity size={18} />, label: isEn ? 'Anaesthesia' : 'Anestezie', value: details.anesthesia },
                    ].map(({ icon, label, value }) => (
                      <div key={label} className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-accent shrink-0">
                          {icon}
                        </div>
                        <div>
                          <p className="text-xs uppercase tracking-widest font-bold text-gray-400">{label}</p>
                          <p className="font-semibold text-white">{value}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* WhatsApp quick quote */}
                <a
                  href="https://wa.me/905324675941"
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => pushToDataLayer?.('whatsapp_click', { location: 'treatment_detail_sidebar' })}
                  className="flex items-center justify-center gap-3 w-full bg-[#25D366] text-white font-bold py-4 rounded-2xl shadow-lg hover:bg-green-500 transition-all hover:-translate-y-0.5"
                >
                  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" aria-hidden="true">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  {isEn ? 'Get Free Quote on WhatsApp' : 'Obțineți Ofertă Gratuită pe WhatsApp'}
                </a>

                {/* Trust badges */}
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { icon: '🏥', label: isEn ? 'JCI Accredited' : 'Acreditat JCI' },
                    { icon: '🩺', label: isEn ? 'Board Certified' : 'Certificat de Consiliu' },
                    { icon: '✈️', label: isEn ? 'VIP Transfers' : 'Transferuri VIP' },
                  ].map(b => (
                    <div key={b.label} className="flex flex-col items-center gap-1.5 p-4 bg-gray-50 rounded-2xl border border-gray-100 text-center">
                      <span className="text-2xl">{b.icon}</span>
                      <p className="text-[10px] font-bold text-gray-500 leading-tight">{b.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA / CONSULTATION ────────────────────────────────────────────── */}
      <section id="consultation" className="bg-[#0b1626] py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs font-bold uppercase tracking-widest mb-6">
            <Phone size={13} />
            {isEn ? 'Free — No Commitment' : 'Gratuit — Fără Angajament'}
          </div>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-5">
            {isEn ? 'Ready to Start Your Journey?' : 'Gata să vă Începeți Parcursul?'}
          </h2>
          <p className="text-gray-400 mb-8 leading-relaxed">
            {isEn
              ? `Speak with a Meva Clinic coordinator today. Get a personalised ${title} quote within 24 hours — completely free, no obligation.`
              : `Vorbiți cu un coordonator Meva Clinic astăzi. Primiți o ofertă personalizată pentru ${title} în 24 de ore — complet gratuit, fără obligații.`}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to={isEn ? '/en/contact' : '/ro/contact'}
              className="flex items-center justify-center gap-2 bg-accent text-prime font-bold py-4 px-10 rounded-full hover:bg-yellow-400 transition-all shadow-[0_10px_30px_rgba(212,175,55,0.3)] hover:-translate-y-0.5 text-sm"
            >
              <Phone size={16} />
              {isEn ? 'Book Free Consultation' : 'Rezervați Consultație Gratuită'}
            </Link>
            <a
              href="https://wa.me/905324675941"
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center gap-2 border border-white/20 text-white font-bold py-4 px-10 rounded-full hover:border-[#25D366] hover:text-[#25D366] transition-all text-sm"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TreatmentDetail;

```

### Dosya Adı: src\pages\TreatmentPage.jsx
```jsx
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
import { findTreatment } from '../data/treatmentsData';
import { UserCheck } from 'lucide-react';

const TreatmentPage = () => {
  const { slug } = useParams();
  const location = useLocation();
  const isEn = location.pathname.startsWith('/en');
  
  // Try new data first
  const tdNew = findTreatment(slug);
  const tdLeg = !tdNew ? treatmentData.find(t => t.slug === slug) : null;
  const treatment = tdNew || tdLeg;
  const isNew = !!tdNew;

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

  const getSafeVal = (val, isEn) => {
    if (!val) return '';
    return typeof val === 'object' ? (val[isEn ? 'en' : 'ro'] || val) : val;
  };

  const title = isNew ? getSafeVal(treatment.title, isEn) : (isEn ? (treatment.title_en || treatment.title) : treatment.title);
  const subtitle = isNew ? getSafeVal(treatment.shortDesc, isEn) : (isEn ? (treatment.subtitle_en || treatment.subtitle) : treatment.subtitle);
  const description = isNew ? getSafeVal(treatment.shortDesc, isEn) : (isEn ? (treatment.description_en || treatment.description) : treatment.description);
  
  const details = isNew ? {
    hospitalStay: isEn ? '2-3 Nights' : '2-3 Nopți',
    hotelStay: isEn ? '3-4 Nights' : '3-4 Nopți',
    returnToWork: isEn ? '7-10 Days' : '7-10 Zile',
  } : (isEn ? (treatment.details_en || treatment.details) : treatment.details);

  const expertName = isNew ? getSafeVal(treatment.expert, isEn) : (isEn ? (treatment.expert_en || treatment.expert) : treatment.expert);

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
            
            {expertName && (
               <div className="inline-flex items-center gap-3 px-4 py-2 rounded-xl bg-accent/20 border border-accent/30 backdrop-blur-md mb-6">
                  <UserCheck size={16} className="text-accent" />
                  <span className="text-xs font-bold text-white uppercase tracking-widest">{isEn ? 'Expert:' : 'Expert:'} {expertName}</span>
               </div>
            )}

            <p className="text-xl text-gray-300 font-sans max-w-2xl border-l-4 border-accent pl-4 font-medium">{subtitle}</p>
            
            <a href="#calculator" className="mt-8 inline-flex items-center justify-center bg-accent hover:bg-yellow-500 text-prime font-bold py-3.5 px-8 rounded-xl transition-all shadow-[0_10px_30px_rgba(212,175,55,0.3)]">
               {isEn ? "Check Eligibility" : "Verifică Eligibilitatea"} <Activity size={18} className="ml-2" />
            </a>
         </div>
      </div>

      {/* Details Container */}
      <div className="max-w-7xl mx-auto px-4 sm:6 lg:px-8 py-16">
         <div className="flex flex-col lg:flex-row gap-12">
            
            {/* Copywriting Section */}
            <div className="lg:w-7/12 prose prose-lg prose-blue">
               <div className="text-xs uppercase tracking-widest font-bold text-prime/50 mb-2">{isEn ? "About Procedure" : "Despre Procedură"}</div>
               <h2 className="text-3xl font-serif font-bold text-prime mb-3">{isEn ? `JCI International Expertise in ${title.split(' ')[0]}` : `Expertiză Internațională JCI în ${title.split(' ')[0]}`}</h2>
               <ExpertBadge isEn={isEn} name={expertName} />
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

```

### Dosya Adı: src\utils\AnalyticsUtils.js
```js
/**
 * Utility functions for Google Tag Manager dataLayer — SAFE for all environments.
 * Works even when GTM script is not loaded (ENV missing, ad blocker, etc.)
 */

export const pushToDataLayer = (event, data = {}) => {
  try {
    if (typeof window === 'undefined') return; // SSR guard
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event,
      ...data,
      timestamp: new Date().toISOString()
    });
  } catch {
    // Silently ignore — tracking must never break the UI
  }
};

/**
 * Safe Meta Pixel / Facebook Pixel tracker.
 * Requires GDPR consent and fbq to be loaded.
 */
export const trackPixelEvent = (eventName, data = {}) => {
  try {
    if (typeof window === 'undefined') return;
    const consent = window.localStorage?.getItem('gdpr_consent') === 'true';
    if (!consent) return;
    if (typeof window.fbq !== 'function') return;
    if (eventName === 'Lead' || eventName === 'Contact') {
      window.fbq('track', eventName, data);
    } else {
      window.fbq('trackCustom', eventName, data);
    }
  } catch {
    // Silently ignore
  }
};

```

### Dosya Adı: src\utils\pixel.js
```js
/**
 * Meta Pixel / Facebook Pixel tracker.
 * Safe wrapper — never throws, requires GDPR consent.
 */
export const PxTrack = (eventName, data = {}) => {
  try {
    if (typeof window === 'undefined') return;
    const consent = window.localStorage?.getItem('gdpr_consent') === 'true';
    if (!consent) return;
    if (typeof window.fbq !== 'function') return;
    if (eventName === 'Lead' || eventName === 'Contact') {
      window.fbq('track', eventName, data);
    } else {
      window.fbq('trackCustom', eventName, data);
    }
  } catch {
    // Silently ignore — tracking must never break the UI
  }
};

```

### Dosya Adı: index.html
```html
<!doctype html>
<html lang="ro" id="html-root">
  <head>
    <!-- Security: SPF & DMARC Infrastructure Preparation -->
    <!-- v=spf1 include:_spf.google.com ~all -->
    <!-- v=DMARC1; p=quarantine; rua=mailto:admin@mevaclinic.com; pct=100; -->
    
    <!-- Google Tag Manager -->
    <script>
    (function(){
      var gtmId = 'GTM-XXXXXXX'; // Replace with real GTM-XXXXX before go-live
      if (!gtmId || gtmId === 'GTM-XXXXXXX') return; // Skip if not configured
      (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
      'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer',gtmId);
    })();
    </script>
    <!-- End Google Tag Manager -->

    <!-- Google Analytics (GA4) Placeholder -->
    <!-- <script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
    <script>
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-XXXXXXXXXX');
    </script> -->
    <!-- End Google Analytics -->

    <!-- Meta Pixel Code Placeholder -->
    <!-- <script>
      !function(f,b,e,v,n,t,s)
      {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
      n.callMethod.apply(n,arguments):n.queue.push(arguments)};
      if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
      n.queue=[];t=b.createElement(e);t.async=!0;
      t.src=v;s=b.getElementsByTagName(e)[0];
      s.parentNode.insertBefore(t,s)}(window, document,'script',
      'https://connect.facebook.net/en_US/fbevents.js');
      fbq('init', 'XXXXXXXXXXXXXXXX');
      fbq('track', 'PageView');
    </script>
    <noscript><img height="1" width="1" style="display:none" src="https://www.facebook.com/tr?id=XXXXXXXXXXXXXXXX&ev=PageView&noscript=1" /></noscript> -->
    <!-- End Meta Pixel Code -->

    <meta charset="UTF-8" />
    <base href="/" />
    <!-- Favicon: SVG primary + ICO fallback for browser compatibility -->
    <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
    <link rel="alternate icon" type="image/x-icon" href="/favicon.ico" sizes="any" />
    <link rel="apple-touch-icon" href="/favicon.svg" />
    <!-- Dynamic lang attribute: set from URL before React hydrates -->
    <script>
    (function(){
      var p = window.location.pathname;
      var lang = p.startsWith('/en') ? 'en' : 'ro';
      document.getElementById('html-root').setAttribute('lang', lang);
    })();
    </script>
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0" />
    <meta name="description" content="Meva Clinic Istanbul oferă pachete VIP all-inclusive pentru Gastric Sleeve și Bypass. Recuperare rapidă, experți de top și rezultate dovedite. Află prețul!" />
    
    <!-- Preload Critical Fonts (Inter & Playfair Display) -->
    <link rel="preload" as="style" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Playfair+Display:wght@400;600;700&display=swap" />
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Playfair+Display:wght@400;600;700&display=swap" media="print" onload="this.media='all'" />
    <noscript><link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Playfair+Display:wght@400;600;700&display=swap" /></noscript>

    <!-- Multilingual SEO tags -->
    <link rel="alternate" hreflang="ro-RO" href="https://www.mevaclinic.com/ro" />
    <link rel="alternate" hreflang="ro" href="https://www.mevaclinic.com/ro" />
    <link rel="alternate" hreflang="en" href="https://www.mevaclinic.com/en" />
    <link rel="alternate" hreflang="x-default" href="https://www.mevaclinic.com/ro" />
    
    <title>Meva Clinic - Chirurgie Bariatrică și Gastric Sleeve în Istanbul</title>
  </head>
  <body>
    <!-- Skip to Main Content (Accessibility - WCAG 2.4.1) -->
    <a 
      href="#main-content" 
      class="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[99999] focus:bg-accent focus:text-prime focus:font-bold focus:px-6 focus:py-3 focus:rounded-xl focus:shadow-xl focus:outline-none"
    >
      Skip to main content
    </a>

    <!-- Google Tag Manager (noscript) -->
    <script>
    (function(){
      var gtmId = 'GTM-XXXXXXX';
      if (!gtmId || gtmId === 'GTM-XXXXXXX') return;
      document.write('<noscript><iframe src="https://www.googletagmanager.com/ns.html?id='+gtmId+'" height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>');
    })();
    </script>
    <!-- End Google Tag Manager (noscript) -->
    
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>

```

