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
import ComparisonSection from '../components/ComparisonSection';

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
      <ComparisonSection />
      <PatientJourneyTimeline />
      <FAQSection />
    </>
  );
};

export default Home;
