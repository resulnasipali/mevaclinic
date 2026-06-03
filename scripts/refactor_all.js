const fs = require('fs');
const path = require('path');

// 1. Update page.tsx
const pagePath = path.join(__dirname, 'app/[lang]/page.tsx');
let pageContent = fs.readFileSync(pagePath, 'utf-8');
pageContent = pageContent.replace(/<BmiCalculator \/>/g, '<BmiCalculator lang={lang} />');
pageContent = pageContent.replace(/<PremiumTreatmentSlider \/>/g, '<PremiumTreatmentSlider lang={lang} />');
pageContent = pageContent.replace(/<ServicesSection \/>/g, '<ServicesSection lang={lang} />');
pageContent = pageContent.replace(/<PremiumPackageSection \/>/g, '<PremiumPackageSection lang={lang} />');
pageContent = pageContent.replace(/<TestimonialsGrid \/>/g, '<TestimonialsGrid lang={lang} />');
pageContent = pageContent.replace(/<SafetyQualitySection \/>/g, '<SafetyQualitySection lang={lang} />');
pageContent = pageContent.replace(/<PatientJourneyCarousel \/>/g, '<PatientJourneyCarousel lang={lang} />');
pageContent = pageContent.replace(/<AIAssistant \/>/g, '<AIAssistant lang={lang} />');
pageContent = pageContent.replace(/<Footer \/>/g, '<Footer lang={lang} />');
pageContent = pageContent.replace(/<FloatingWhatsApp \/>/g, '<FloatingWhatsApp lang={lang} />');
pageContent = pageContent.replace(/<FloatingTrustBadge \/>/g, '<FloatingTrustBadge lang={lang} />');
pageContent = pageContent.replace(/<CookieBanner \/>/g, '<CookieBanner lang={lang} />');
fs.writeFileSync(pagePath, pageContent, 'utf-8');

// Helper to add lang prop to components
function addLangProp(filePath) {
  if (!fs.existsSync(filePath)) return;
  let content = fs.readFileSync(filePath, 'utf-8');
  
  // Replace component declaration
  const componentMatch = content.match(/const ([A-Za-z0-9_]+) = \(\) => {/);
  if (componentMatch) {
    const compName = componentMatch[1];
    content = content.replace(`const ${compName} = () => {`, `const ${compName} = ({ lang = 'en' }: { lang?: string }) => {`);
    
    // Check if usePathname is used to get lang
    if (content.includes('const pathname = usePathname();') && !content.includes('lang = pathname')) {
      content = content.replace('const pathname = usePathname();\n  const isEn = (pathname || "/").startsWith(\'/en\');', 'const isEn = lang === \'en\';');
    }
  }
  
  fs.writeFileSync(filePath, content, 'utf-8');
}

// Ensure all components accept lang
addLangProp(path.join(__dirname, 'components/PremiumTreatmentSlider.tsx'));
addLangProp(path.join(__dirname, 'components/ServicesSection.tsx'));
addLangProp(path.join(__dirname, 'components/TestimonialsGrid.tsx'));
addLangProp(path.join(__dirname, 'components/SafetyQualitySection.tsx'));
addLangProp(path.join(__dirname, 'components/PatientJourneyCarousel.tsx'));
addLangProp(path.join(__dirname, 'components/AIAssistant.tsx'));
addLangProp(path.join(__dirname, 'components/FloatingWhatsApp.tsx'));
addLangProp(path.join(__dirname, 'components/FloatingTrustBadge.tsx'));
addLangProp(path.join(__dirname, 'components/CookieBanner.tsx'));

// 2. Remove ExitIntentPopup from layout.tsx
const layoutPath = path.join(__dirname, 'app/[lang]/layout.tsx');
if (fs.existsSync(layoutPath)) {
  let layoutContent = fs.readFileSync(layoutPath, 'utf-8');
  layoutContent = layoutContent.replace(/<ExitIntentPopup \/>/g, '{/* <ExitIntentPopup /> */}');
  fs.writeFileSync(layoutPath, layoutContent, 'utf-8');
}
