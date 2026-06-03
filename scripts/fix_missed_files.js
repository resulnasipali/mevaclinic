const fs = require('fs');
const path = require('path');

function replaceIsEnProp(filePath) {
  const fullPath = path.join(__dirname, filePath);
  if (!fs.existsSync(fullPath)) return;
  
  let content = fs.readFileSync(fullPath, 'utf-8');
  
  // Fix props
  content = content.replace(/\{ isEn \}: \{ isEn: boolean \}/g, '{ lang }: { lang: string }');
  content = content.replace(/\{ isEn \}: \{ isEn: any \}/g, '{ lang }: { lang: string }');
  content = content.replace(/\{ isEn = true \}/g, '{ lang = "en" }: { lang?: string }');
  content = content.replace(/\{ isEn = false \}/g, '{ lang = "en" }: { lang?: string }');
  
  // Add const isEn = lang === 'en' if lang is defined but isEn is not
  if (content.includes('lang') && !content.includes('const isEn =')) {
    content = content.replace(/(const \[step.*?useState.*?;)/, 'const isEn = lang === \'en\';\n  $1');
  }
  
  fs.writeFileSync(fullPath, content, 'utf-8');
  console.log('Fixed ' + filePath);
}

replaceIsEnProp('components/SuitabilityQuiz.tsx');
replaceIsEnProp('components/TreatmentQuiz.tsx');
replaceIsEnProp('components/SmartConcierge.tsx');
