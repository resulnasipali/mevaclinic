const fs = require('fs');

const content = fs.readFileSync('data/treatmentsData.ts', 'utf8');
const regex = /title:\s*t\('([^']+)',\s*'([^']+)'\)/g;

let match;
const titles = [];

while ((match = regex.exec(content)) !== null) {
  titles.push({ en: match[1], ro: match[2] });
}

console.log(JSON.stringify(titles, null, 2));
