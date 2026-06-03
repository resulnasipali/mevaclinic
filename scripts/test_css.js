const fs = require('fs');
const css = fs.readFileSync('.next/static/chunks/0db3~d9.hgp-n.css', 'utf8');
console.log('Size:', css.length);
console.log('Contains bg:', css.includes('bg-\\[\\#0b1626\\]'));
console.log('Contains text-white:', css.includes('text-white'));
