const fs = require('fs');
const path = require('path');

function scanDir(dir) {
  let results = [];
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      results = results.concat(scanDir(fullPath));
    } else if (fullPath.endsWith('.tsx') || fullPath.endsWith('.ts')) {
      const content = fs.readFileSync(fullPath, 'utf-8');
      if (content.includes('isEn ?') || content.includes('isRo ?') || content.includes('isEn\n') || content.includes('isRo\n')) {
        results.push(fullPath);
      }
    }
  }
  return results;
}

const allFiles = [
  ...scanDir(path.join(__dirname, 'app')),
  ...scanDir(path.join(__dirname, 'components'))
];

console.log("Files with isEn/isRo:");
allFiles.forEach(f => {
  console.log(f.replace(__dirname, ''));
});
