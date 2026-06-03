const fs = require('fs');
const path = require('path');

const targetFiles = [
  'components/SocialProof.tsx',
  'components/StatsSection.tsx',
  'components/SuitabilityQuiz.tsx',
  'components/TestimonialGallery.tsx',
  'app/components/PatientJourney.tsx',
  'app/components/AiDiagnosticModal.tsx'
];

targetFiles.forEach(file => {
  const fullPath = path.join(__dirname, file);
  if (fs.existsSync(fullPath)) {
    let content = fs.readFileSync(fullPath, 'utf-8');
    
    content = content.replace(/\{ isEn \}: \{ isEn: boolean \}/g, '{ lang }: { lang: string }');
    content = content.replace(/\{ isEn \}: \{ isEn: any \}/g, '{ lang }: { lang: string }');
    content = content.replace(/\{ isEn = true \}/g, '{ lang = "en" }: { lang?: string }');
    content = content.replace(/\{ isEn = false \}/g, '{ lang = "en" }: { lang?: string }');
    content = content.replace(/\{ isEn \}/g, '{ lang }: { lang: string }');
    
    // Also anywhere it still says isEn, change to lang?
    // Wait, let's just make sure the props are right.
    
    fs.writeFileSync(fullPath, content, 'utf-8');
    console.log('Fixed props in ' + file);
  }
});
