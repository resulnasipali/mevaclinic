const fs = require('fs');
const path = require('path');
const componentsDir = path.join(__dirname, 'components');
const files = fs.readdirSync(componentsDir).filter(f => f.endsWith('.tsx'));
let missing = [];
files.forEach(f => {
  const content = fs.readFileSync(path.join(componentsDir, f), 'utf8');
  const hasUseClient = content.split('\n')[0].includes('use client');
  const usesHook = /\b(useState|useEffect|useContext|useReducer)\b/.test(content);
  if (usesHook && !hasUseClient) missing.push(f);
});
if (missing.length) console.log('Missing use client:', missing.join(', '));
else console.log('All hook files have use client');
