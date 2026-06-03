const fs = require('fs');
const path = require('path');
const uiTranslations = fs.readFileSync('utils/uiTranslations.ts', 'utf8');
const existingKeys = new Set();
const keyRegex = /\"([^\"]+)\":\s*\{/g;
let match;
while ((match = keyRegex.exec(uiTranslations)) !== null) {
  existingKeys.add(match[1]);
}
console.log('Total translation keys:', existingKeys.size);

function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    file = path.join(dir, file);
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) {
      if (!file.includes('.next') && !file.includes('node_modules')) {
        results = results.concat(walk(file));
      }
    } else {
      if (file.endsWith('.tsx') || file.endsWith('.ts')) {
        results.push(file);
      }
    }
  });
  return results;
}

const files = walk('./app').concat(walk('./components'));
const missingKeys = new Set();
const tuiRegex = /tUI\(\s*[\'\"]([^\'\"]+)[\'\"]/g;

files.forEach(file => {
  const content = fs.readFileSync(file, 'utf8');
  let m;
  while ((m = tuiRegex.exec(content)) !== null) {
    if (!existingKeys.has(m[1]) && !existingKeys.has(m[1].trim())) {
      missingKeys.add(m[1]);
    }
  }
});

console.log('Missing Translations:', missingKeys);
