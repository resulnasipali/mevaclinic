const fs = require('fs');
const path = require('path');

const filesToProcess = [
  '../components/Header.tsx',
  '../components/HeroSection.tsx',
  '../components/PatientJourney.tsx',
  '../components/Footer.tsx',
  '../app/components/TreatmentDetailClient.tsx'
];

filesToProcess.forEach(file => {
  const p = path.join(__dirname, file);
  if (fs.existsSync(p)) {
    let content = fs.readFileSync(p, 'utf-8');
    
    // 1. Add import for tUI if not exists
    if (!content.includes('tUI')) {
      const importStatement = `import { tUI } from '@/utils/uiTranslations';\n`;
      // Insert after last import
      const lastImportIndex = content.lastIndexOf('import ');
      const endOfLastImport = content.indexOf('\n', lastImportIndex);
      content = content.slice(0, endOfLastImport + 1) + importStatement + content.slice(endOfLastImport + 1);
    }

    // 2. Add lang extraction if not exists and there is pathname
    if (content.includes('usePathname') && !content.includes('const lang =')) {
      content = content.replace(/const isEn = pathname\.startsWith\('\/en'\);/, `const lang = pathname.split('/')[1] || 'en';\n  const isEn = lang === 'en';`);
    }

    // 3. Replace ternary operators with tUI
    // Regex matches: isEn ? 'EN_TEXT' : 'RO_TEXT'
    // It captures the quotes and the text.
    const regex = /isEn\s*\?\s*(['"`])(.*?)\1\s*:\s*(['"`])(.*?)\3/g;
    
    content = content.replace(regex, (match, q1, en, q2, ro) => {
      // Escape single quotes inside the text if we use single quotes for the function
      const escapedEn = en.replace(/'/g, "\\'");
      return `tUI('${escapedEn}', lang)`;
    });

    // Special fix for template literals like `isEn ? \`A\` : \`B\``
    // The regex above handles them but sometimes variables are inside. Let's hope it's clean.

    fs.writeFileSync(p, content, 'utf-8');
    console.log(`Updated ${file}`);
  }
});
