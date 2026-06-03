const fs = require('fs');
const path = require('path');

function searchFilesInDirectory(dir, filter, ext) {
  if (!fs.existsSync(dir)) return;
  const files = fs.readdirSync(dir);
  for (let i = 0; i < files.length; i++) {
    const filename = path.join(dir, files[i]);
    const stat = fs.lstatSync(filename);
    if (stat.isDirectory()) {
      searchFilesInDirectory(filename, filter, ext);
    } else if (filename.endsWith(ext) || filename.endsWith('.tsx')) {
      const content = fs.readFileSync(filename, 'utf-8');
      if (content.toLowerCase().includes(filter.toLowerCase())) {
        console.log('Found in:', filename);
      }
    }
  }
}

searchFilesInDirectory(path.join(__dirname, 'components'), 'AUTORITATE', '.ts');
searchFilesInDirectory(path.join(__dirname, 'app'), 'AUTORITATE', '.ts');
