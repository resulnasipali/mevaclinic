const fs = require('fs');

const dataFile = 'data/treatmentsData.ts';
const transFile = 'titles_translations.json';

let content = fs.readFileSync(dataFile, 'utf8');
const translations = JSON.parse(fs.readFileSync(transFile, 'utf8'));

// We are looking for: title: t('Gastric Sleeve (Sleeve Gastrectomy)', 'Gastric Sleeve (Micșorare Stomac)')
// Note that some titles might have single quotes inside, but in this case none of the English titles have single quotes.
const regex = /title:\s*t\('([^']+)',\s*'([^']+)'\)/g;

let modifiedContent = content.replace(regex, (match, en, ro) => {
  if (translations[en]) {
    const esc = (str) => str.replace(/'/g, "\\'");
    return `title: t('${esc(en)}', '${esc(ro)}', '${esc(translations[en].es)}', '${esc(translations[en].it)}', '${esc(translations[en].ru)}', '${esc(translations[en].fr)}', '${esc(translations[en].de)}')`;
  }
  return match;
});

fs.writeFileSync(dataFile, modifiedContent, 'utf8');
console.log('Title translations applied successfully.');
