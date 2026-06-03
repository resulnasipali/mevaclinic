const fs = require('fs');
const path = require('path');

// 1. Update app/[lang]/page.tsx
const pagePath = path.join(__dirname, 'app/[lang]/page.tsx');
if (fs.existsSync(pagePath)) {
  let content = fs.readFileSync(pagePath, 'utf-8');
  
  if (!content.includes('tUI')) {
    content = `import { tUI } from '@/utils/uiTranslations';\n` + content;
  }
  
  // Replace isEn={isEn} with lang={lang}
  content = content.replace(/isEn=\{isEn\}/g, 'lang={lang}');
  
  // Replace the hardcoded ternaries inside page.tsx
  const regex = /isEn\s*\?\s*(['"`])(.*?)\1\s*:\s*(['"`])(.*?)\3/g;
  
  let newPairs = {};
  content = content.replace(regex, (match, q1, enText, q2, roText) => {
    newPairs[enText] = { en: enText, ro: roText };
    return `tUI("${enText.replace(/"/g, '\\"')}", lang)`;
  });
  
  fs.writeFileSync(pagePath, content, 'utf-8');
  console.log('Updated app/[lang]/page.tsx');
  
  // Add newPairs to extracted JSON
  if (Object.keys(newPairs).length > 0) {
     const extPath = path.join(__dirname, 'extracted_translations.json');
     let extData = JSON.parse(fs.readFileSync(extPath, 'utf-8'));
     Object.assign(extData, newPairs);
     fs.writeFileSync(extPath, JSON.stringify(extData, null, 2));
  }
}

// 2. Inject translations into utils/uiTranslations.ts
const transPath = path.join(__dirname, 'utils/uiTranslations.ts');
if (fs.existsSync(transPath)) {
  let content = fs.readFileSync(transPath, 'utf-8');
  const extData = JSON.parse(fs.readFileSync(path.join(__dirname, 'extracted_translations.json'), 'utf-8'));
  
  const entries = [];
  for (const [key, langs] of Object.entries(extData)) {
    // Generate dummy/fallback for others
    const en = langs.en.replace(/"/g, '\\"');
    const ro = langs.ro.replace(/"/g, '\\"');
    entries.push(`  "${en}": { en: "${en}", ro: "${ro}", es: "${en}", it: "${en}", ru: "${en}", fr: "${en}", de: "${en}" }`);
  }
  
  // Insert before the closing brace of T object
  const splitPoint = content.lastIndexOf('};\n');
  if (splitPoint !== -1) {
    const newContent = content.slice(0, splitPoint) + ',\n' + entries.join(',\n') + '\n' + content.slice(splitPoint);
    fs.writeFileSync(transPath, newContent, 'utf-8');
    console.log('Injected translations into uiTranslations.ts');
  } else {
    // maybe it just ends with }
    const splitPoint2 = content.lastIndexOf('}');
    // find the T object end... let's just use string replace
    content = content.replace(/};?\s*export function tUI/, ',\n' + entries.join(',\n') + '\n};\n\nexport function tUI');
    fs.writeFileSync(transPath, content, 'utf-8');
    console.log('Injected translations into uiTranslations.ts (fallback regex)');
  }
}
