const fs = require('fs');
const path = require('path');

// This script will find all instances of `isEn ? 'EN_TEXT' : 'RO_TEXT'`
// and replace them with `t("EN_TEXT", lang)`

const filesToProcess = [
  '../components/Header.tsx',
  '../components/HeroSection.tsx',
  '../components/PatientJourney.tsx',
  '../components/Footer.tsx',
  '../app/components/TreatmentDetailClient.tsx'
];

// We need a way to pass 'lang' to these components if they don't have it.
// For now, let's just do a dry run to extract them.

const extracted = [];

filesToProcess.forEach(file => {
  const p = path.join(__dirname, file);
  if (fs.existsSync(p)) {
    const content = fs.readFileSync(p, 'utf-8');
    
    // Regex to match: isEn ? 'Text 1' : 'Text 2'
    // Also matches double quotes
    const regex = /isEn\s*\?\s*(['"`])(.*?)\1\s*:\s*(['"`])(.*?)\3/g;
    
    let match;
    while ((match = regex.exec(content)) !== null) {
      extracted.push({
        en: match[2],
        ro: match[4],
        file: file
      });
    }
  }
});

fs.writeFileSync(path.join(__dirname, 'extracted_strings.json'), JSON.stringify(extracted, null, 2));
console.log(`Extracted ${extracted.length} strings.`);
