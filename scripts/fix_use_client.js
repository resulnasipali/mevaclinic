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
    
    // Check if use client exists and is not at the top
    if (content.includes("'use client';") || content.includes('"use client";')) {
      // Remove it from wherever it is
      content = content.replace(/'use client';\r?\n?/g, '');
      content = content.replace(/"use client";\r?\n?/g, '');
      
      // Put it at the very top (after any @ts-nocheck if we want, but Next.js prefers it top)
      // Actually, @ts-nocheck can be before it, but let's just make 'use client' the first non-comment line.
      // Easiest is just to put it at the absolute top.
      if (content.startsWith('// @ts-nocheck')) {
        content = content.replace('// @ts-nocheck', '// @ts-nocheck\n\'use client\';');
      } else {
        content = "'use client';\n" + content;
      }
      
      fs.writeFileSync(fullPath, content, 'utf-8');
      console.log('Fixed use client in ' + file);
    }
  }
});
