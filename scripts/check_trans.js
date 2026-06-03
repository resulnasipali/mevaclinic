const fs = require('fs');

// We will read uiTranslations.ts and extract the T object.
const content = fs.readFileSync('utils/uiTranslations.ts', 'utf8');

// Quick and dirty way to parse T object (since it's a TS file).
// Let's just find lines that look like: "Key": { en: "...", ro: "...", ... }
const regex = /"([^"]+)":\s*\{\s*en:\s*"([^"]+)",\s*ro:\s*"([^"]+)",\s*es:\s*"([^"]+)",\s*it:\s*"([^"]+)",\s*ru:\s*"([^"]+)",\s*fr:\s*"([^"]+)",\s*de:\s*"([^"]+)"\s*\}/g;

let match;
let untranslated = [];
while ((match = regex.exec(content)) !== null) {
  const key = match[1];
  const en = match[2];
  const ro = match[3];
  const es = match[4];
  const it = match[5];
  const ru = match[6];
  const fr = match[7];
  const de = match[8];

  if (en === de || en === es || en === it || en === ru || en === fr) {
    untranslated.push({ key, en, ro });
  }
}

console.log(`Found ${untranslated.length} untranslated keys.`);
fs.writeFileSync('untranslated.json', JSON.stringify(untranslated, null, 2));
