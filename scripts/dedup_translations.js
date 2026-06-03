const fs = require('fs');
const path = require('path');

const transPath = path.join(__dirname, 'utils/uiTranslations.ts');
if (fs.existsSync(transPath)) {
  let content = fs.readFileSync(transPath, 'utf-8');
  
  // A quick way to fix duplicate keys: since it's just a TS file exporting an object,
  // we can parse it by stripping `export const T: Record<string, Record<string, string>> = {`
  // and `}; export function tUI(...)`. 
  // However, since it's hard to parse arbitrary JS, we can use regex to find lines like `"Key": { ... },`
  
  const lines = content.split('\n');
  const seenKeys = new Set();
  const newLines = [];
  
  // To preserve from bottom to top or top to bottom? 
  // Bottom has our newly appended ones which have the fallback languages added.
  // Wait, if it already existed in the top, it probably had good translations for EN/RO, and maybe others?
  // Let's just keep the LAST occurrence (which is the one we just injected with all 7 languages).
  // We'll iterate backwards.
  
  for (let i = lines.length - 1; i >= 0; i--) {
    const line = lines[i];
    const match = line.match(/^\s*"([^"]+)":\s*\{/);
    if (match) {
      const key = match[1];
      if (seenKeys.has(key)) {
        // Skip this duplicate line
        continue;
      } else {
        seenKeys.add(key);
        newLines.unshift(line);
      }
    } else {
      newLines.unshift(line);
    }
  }
  
  fs.writeFileSync(transPath, newLines.join('\n'), 'utf-8');
  console.log('Deduplicated uiTranslations.ts');
}
