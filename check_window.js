const fs = require('fs');
const path = require('path');

function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat && stat.isDirectory()) {
      if (file !== 'node_modules' && file !== '.next' && file !== '.git' && file !== '.vercel' && file !== 'public') {
        results = results.concat(walk(filePath));
      }
    } else {
      if (filePath.endsWith('.tsx') || filePath.endsWith('.ts') || filePath.endsWith('.js') || filePath.endsWith('.jsx')) {
        results.push(filePath);
      }
    }
  });
  return results;
}

const codeFiles = walk('.');

console.log("Searching for window/localStorage/sessionStorage in code...");
codeFiles.forEach(cf => {
  if (cf.includes('check_') || cf.includes('find_')) return;
  const content = fs.readFileSync(cf, 'utf8');
  if (content.includes('window') || content.includes('localStorage') || content.includes('sessionStorage')) {
    console.log(`Found in: ${cf}`);
    const lines = content.split('\n');
    lines.forEach((line, idx) => {
      if (line.includes('window') || line.includes('localStorage') || line.includes('sessionStorage')) {
        // Print context if it looks suspicious (e.g. not inside useEffect)
        console.log(`  Line ${idx + 1}: ${line.trim()}`);
      }
    });
  }
});
