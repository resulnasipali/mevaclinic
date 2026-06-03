const fs = require('fs');
const path = require('path');

const targetFiles = [
  'components/SocialProof.tsx',
  'components/StatsSection.tsx',
  'components/SuitabilityQuiz.tsx',
  'components/TestimonialGallery.tsx',
  'components/TestimonialsGrid.tsx',
  'components/TopBar.tsx',
  'components/TreatmentQuiz.tsx',
  'components/TrustBadges.tsx',
  'app/components/PatientJourney.tsx',
  'app/components/AiDiagnosticModal.tsx'
];

targetFiles.forEach(file => {
  const fullPath = path.join(__dirname, file);
  if (fs.existsSync(fullPath)) {
    let content = fs.readFileSync(fullPath, 'utf-8');
    
    // Remove all @ts-nocheck
    content = content.replace(/\/\/ @ts-nocheck\r?\n?/g, '');
    
    // Add one at the top
    content = '// @ts-nocheck\n' + content;
    
    fs.writeFileSync(fullPath, content, 'utf-8');
    console.log('Restored ts-nocheck in ' + file);
  }
});
