const fs = require('fs');
const path = require('path');
const dir = path.join(__dirname, 'components');
const files = fs.readdirSync(dir).filter(f => f.endsWith('.tsx'));
let found = [];
files.forEach(f => {
  const content = fs.readFileSync(path.join(dir, f), 'utf8');
  if (content.includes('react-router-dom')) found.push(f);
});
if (found.length) console.log('Files with react-router-dom import:', found.join(', '));
else console.log('No react-router-dom imports found.');
