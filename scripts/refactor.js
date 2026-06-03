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

const basePath = path.join(__dirname, 'components');
const appBasePath = path.join(__dirname, 'app/components');
const dictionary = {};

function processFile(filePath) {
  const fullPath = path.join(__dirname, filePath);
  if (!fs.existsSync(fullPath)) {
    console.log(`Skipping ${fullPath} - does not exist.`);
    return;
  }
  
  let content = fs.readFileSync(fullPath, 'utf-8');
  const originalContent = content;

  // Add import if not exists
  if (!content.includes('tUI')) {
    content = `import { tUI } from '@/utils/uiTranslations';\n` + content;
  }

  // 1. Fix Client Component pathname logic
  content = content.replace(
    /const isEn = .*?;/g,
    `const lang = (pathname || "/").split('/')[1] || 'en';`
  );

  // 2. Fix Prop logic (({ isEn = true }) => ...)
  content = content.replace(
    /\(\{\s*isEn[^}]*\}\)/g,
    `({ lang = 'en' }: { lang?: string })`
  );
  content = content.replace(
    /\(\{\s*(.*?),\s*isEn[^}]*\}\)/g,
    `({ $1, lang = 'en' }: { ${'$1'}: any, lang?: string })`
  );

  // 3. Extract and replace ternaries
  const regex = /isEn\s*\?\s*(['"`])(.*?)\1\s*:\s*(['"`])(.*?)\3/g;
  content = content.replace(regex, (match, q1, enText, q2, roText) => {
    // Add to dictionary
    dictionary[enText] = { en: enText, ro: roText };
    return `tUI("${enText.replace(/"/g, '\\"')}", lang)`;
  });
  
  // Handling variables in ternaries: isEn ? item.quoteEn : item.quoteRo
  content = content.replace(
    /isEn\s*\?\s*([a-zA-Z0-9_.]+En)\s*:\s*([a-zA-Z0-9_.]+Ro)/g,
    `($1)` // Just fallback to English variable for now, or assume data has lang
  );

  // Another edge case: isEn ? `string ${var}` : `string ${var}`
  // Handled partially by the regex if we have `...` but interpolation is tricky.
  // We'll see if there are any remaining `isEn` after this.

  if (content !== originalContent) {
    fs.writeFileSync(fullPath, content, 'utf-8');
    console.log(`Updated ${filePath}`);
  }
}

targetFiles.forEach(processFile);

// Save dictionary to a JSON file to easily merge into uiTranslations.ts
fs.writeFileSync(path.join(__dirname, 'extracted_translations.json'), JSON.stringify(dictionary, null, 2));
console.log('Dictionary saved to extracted_translations.json');
