const fs = require('fs');

const tsFile = 'utils/uiTranslations.ts';
const jsonFile = 'translations_part1.json';

let tsContent = fs.readFileSync(tsFile, 'utf8');
const translations = JSON.parse(fs.readFileSync(jsonFile, 'utf8'));

// Regex to find "Key": { en: "...", ro: "...", es: "...", it: "...", ru: "...", fr: "...", de: "..." }
const regex = /("([^"]+)"|'([^']+)'):(\s*\{\s*en:\s*(["`].*?["`]),\s*ro:\s*(["`].*?["`]),\s*es:\s*(["`].*?["`]),\s*it:\s*(["`].*?["`]),\s*ru:\s*(["`].*?["`]),\s*fr:\s*(["`].*?["`]),\s*de:\s*(["`].*?["`])\s*\})/g;

let modifiedContent = tsContent.replace(regex, (match, p1, p2, p3, p4, p5, p6, p7, p8, p9, p10, p11) => {
  const key = p2 || p3;
  if (translations[key]) {
    // Escape double quotes in translations
    const esc = (str) => str.replace(/"/g, '\\"');
    
    return `"${key}": { en: ${p5}, ro: ${p6}, es: "${esc(translations[key].es)}", it: "${esc(translations[key].it)}", ru: "${esc(translations[key].ru)}", fr: "${esc(translations[key].fr)}", de: "${esc(translations[key].de)}" }`;
  }
  return match;
});

fs.writeFileSync(tsFile, modifiedContent, 'utf8');
console.log('Translations updated successfully.');
