const fs = require('fs');
const path = require('path');

const newTranslations = {
  "Verified Authority": { en: "Verified Authority", ro: "Autoritate Verificată", de: "Verifizierte Autorität", es: "Autoridad Verificada", it: "Autorità Verificata", fr: "Autorité Vérifiée", ru: "Подтвержденный авторитет" },
  "International Medical Board": { en: "International Medical Board", ro: "Consiliul Medical Internațional", de: "Internationales Medical Board", es: "Junta Médica Internacional", it: "Consiglio Medico Internazionale", fr: "Conseil Médical International", ru: "Международный медицинский совет" }
};

const transPath = path.join(__dirname, 'utils/uiTranslations.ts');
let transContent = fs.readFileSync(transPath, 'utf-8');

let translationStr = '';
for (const [key, val] of Object.entries(newTranslations)) {
  translationStr += `  ${JSON.stringify(key)}: ${JSON.stringify(val)},\n`;
}

if (!transContent.includes('"Verified Authority"')) {
  transContent = transContent.replace(/export const T: Record<string, Record<string, string>> = \{/, 'export const T: Record<string, Record<string, string>> = {\n' + translationStr);
  fs.writeFileSync(transPath, transContent, 'utf-8');
}

const badgePath = path.join(__dirname, 'components/FloatingTrustBadge.tsx');
let badgeContent = fs.readFileSync(badgePath, 'utf-8');
if (!badgeContent.includes('import { tUI } from \'@/utils/uiTranslations\';')) {
  badgeContent = badgeContent.replace('import { usePathname } from \'next/navigation\';', 'import { usePathname } from \'next/navigation\';\nimport { tUI } from \'@/utils/uiTranslations\';');
}
badgeContent = badgeContent.replace(/const pathname = usePathname\(\);\n  const isEn = \(pathname \|\| "\/"\)\.startsWith\('\/en'\);/, 'const isEn = lang === \'en\';');
badgeContent = badgeContent.replace(/isEn \? "Verified Authority" : "Autoritate Verificată"/g, 'tUI("Verified Authority", lang)');
badgeContent = badgeContent.replace(/isEn \? "International Medical Board" : "Consiliul Medical Internațional"/g, 'tUI("International Medical Board", lang)');
fs.writeFileSync(badgePath, badgeContent, 'utf-8');
