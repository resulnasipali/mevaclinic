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
const HairTransplant = lazy(() => import('./pages/HairTransplant'));
const Oncology = lazy(() => import('./pages/Oncology'));
const Bariatric = lazy(() => import('./pages/Bariatric'));
const DentalImplants = lazy(() => import('./pages/DentalImplants'));
const PlasticSurgery = lazy(() => import('./pages/PlasticSurgery'));
const EyebrowTransplant = lazy(() => import('./pages/EyebrowTransplant'));
const OrganTransplant = lazy(() => import('./pages/OrganTransplant'));
const RomaniaSpecial = lazy(() => import('./pages/RomaniaSpecial'));
const QuizPage = lazy(() => import('./pages/QuizPage'));
const FAQPage = lazy(() => import('./pages/FAQPage'));
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy'));
const ComparisonHub = lazy(() => import('./pages/ComparisonHub'));
const TreatmentDetail = lazy(() => import('./pages/TreatmentDetail'));
const Andrology = lazy(() => import('./pages/Andrology'));

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
               <Route path="/ro/gastric-sleeve" element={<Bariatric lang="ro" />} />
               <Route path="/ro/gastric-bypass" element={<Bariatric lang="ro" />} />
               <Route path="/ro/balon-gastric" element={<Bariatric lang="ro" />} />
               <Route path="/ro/implant-par" element={<HairTransplant lang="ro" />} />
               <Route path="/ro/implant-sprancene" element={<EyebrowTransplant lang="ro" />} />
               <Route path="/ro/oncologie" element={<Oncology lang="ro" />} />
               <Route path="/ro/implant-dentar" element={<DentalImplants lang="ro" />} />
               <Route path="/ro/chirurgie-plastica" element={<PlasticSurgery lang="ro" />} />
               <Route path="/ro/transplant-organe" element={<OrganTransplant lang="ro" />} />
               <Route path="/ro/blog" element={<BlogArchive />} />
               <Route path="/ro/blog/:slug" element={<BlogPost />} />
               <Route path="/ro/quiz" element={<QuizPage lang="ro" />} />
               <Route path="/ro/faq" element={<FAQPage />} />
               <Route path="/ro/contact" element={<Contact />} />
               <Route path="/ro/politica-confidentialitate" element={<PrivacyPolicy />} />
               <Route path="/ro/comparatie-medicala" element={<ComparisonHub />} />
               <Route path="/ro/romani-istanbul" element={<RomaniaSpecial />} />
               <Route path="/ro/andrologie" element={<Andrology lang="ro" />} />
               {/* IVF pages */}
               <Route path="/ro/ivf-ciprul-de-nord" element={<TreatmentDetail />} />
               <Route path="/ro/hair-transplant" element={<HairTransplant lang="ro" />} />
               {/* /:lng/treatments/:slug — dynamic detail pages */}
               <Route path="/ro/treatments/:slug" element={<TreatmentDetail />} />
               {/* Hair technique detail pages */}
               <Route path="/ro/transplant-par-mixt" element={<TreatmentDetail />} />
               <Route path="/ro/transplant-par-dhi" element={<TreatmentDetail />} />
               <Route path="/ro/transplant-sprancene" element={<TreatmentDetail />} />
               {/* wildcard last */}
               <Route path="/ro/:slug" element={<TreatmentPage />} />
    
               {/* EN routes — specific before wildcard */}
               <Route path="/en/about-us" element={<About />} />
               <Route path="/en/gastric-sleeve" element={<Bariatric lang="en" />} />
               <Route path="/en/gastric-bypass" element={<Bariatric lang="en" />} />
               <Route path="/en/gastric-balloon" element={<Bariatric lang="en" />} />
               <Route path="/en/hair-transplant" element={<HairTransplant lang="en" />} />
               <Route path="/en/eyebrow-transplant" element={<EyebrowTransplant lang="en" />} />
               <Route path="/en/oncology" element={<Oncology lang="en" />} />
               <Route path="/en/dental-implants" element={<DentalImplants lang="en" />} />
               <Route path="/en/plastic-surgery" element={<PlasticSurgery lang="en" />} />
               <Route path="/en/organ-transplant" element={<OrganTransplant lang="en" />} />
               <Route path="/en/blog" element={<BlogArchive />} />
               <Route path="/en/blog/:slug" element={<BlogPost />} />
               <Route path="/en/quiz" element={<QuizPage lang="en" />} />
               <Route path="/en/faq" element={<FAQPage />} />
               <Route path="/en/contact" element={<Contact />} />
               <Route path="/en/privacy-policy" element={<PrivacyPolicy />} />
               <Route path="/en/medical-comparison" element={<ComparisonHub />} />
               <Route path="/en/andrology" element={<Andrology lang="en" />} />
               {/* IVF pages */}
               <Route path="/en/ivf-northern-cyprus" element={<TreatmentDetail />} />
               {/* /:lng/treatments/:slug — dynamic detail pages */}
               <Route path="/en/treatments/:slug" element={<TreatmentDetail />} />
               {/* Hair technique detail pages */}
               <Route path="/en/mixed-hair-transplant" element={<TreatmentDetail />} />
               <Route path="/en/dhi-hair-transplant" element={<TreatmentDetail />} />
               <Route path="/en/eyebrow-transplant" element={<TreatmentDetail />} />
               {/* wildcard last */}
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
