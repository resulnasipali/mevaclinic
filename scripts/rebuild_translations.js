const fs = require('fs');
const path = require('path');

// 1. Read JSON sources
const part1 = JSON.parse(fs.readFileSync('translations_part1.json', 'utf8'));
const ext = JSON.parse(fs.readFileSync('extracted_translations.json', 'utf8'));
const titles = JSON.parse(fs.readFileSync('titles_translations.json', 'utf8'));

// 2. Read from JS scripts using regex/eval
const c1 = fs.readFileSync('scripts/translations_map.js', 'utf8');
const m1 = c1.match(/const newTranslations = ({[\s\S]*?});/);
const mapObj = eval('(' + m1[1] + ')');

const c2 = fs.readFileSync('scripts/inject_translations.js', 'utf8');
const m2 = c2.match(/const data = ({[\s\S]*?});/);
const injObj = eval('(' + m2[1] + ')');

// 3. Merge everything
const merged = { ...part1, ...ext, ...titles, ...mapObj };

// inject_translations used keys like 'clinical_approach' instead of English text,
// but the original uiTranslations.ts used English text as the key.
// Let's map injObj to use the 'en' value as the key.
for (const val of Object.values(injObj)) {
    if (val.en) {
        merged[val.en] = val;
    }
}

// 4. Generate uiTranslations.ts content
let tsContent = `export const T: Record<string, { en?: string, ro?: string, es?: string, it?: string, ru?: string, fr?: string, de?: string }> = {\n`;

for (const [key, val] of Object.entries(merged)) {
    tsContent += `  ${JSON.stringify(key)}: ${JSON.stringify(val)},\n`;
}

tsContent += `};

export function tUI(enString: string, lang: string): string {
  if (T[enString] && (T[enString] as any)[lang]) {
    return (T[enString] as any)[lang];
  }
  const cleanStr = enString.trim();
  if (T[cleanStr] && (T[cleanStr] as any)[lang]) {
    return (T[cleanStr] as any)[lang];
  }
  return enString;
}
`;

fs.writeFileSync('utils/uiTranslations.ts', tsContent, 'utf8');
console.log('Successfully rebuilt utils/uiTranslations.ts with UTF-8 encoding. Total keys: ' + Object.keys(merged).length);
