const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'data', 'treatmentsData.ts');
let content = fs.readFileSync(filePath, 'utf8');

// Regex to find the id and insert SEO fields
content = content.replace(/id:\s*'([^']+)',/g, (match, id) => {
  // Generate SEO strings based on id
  let enTitle = `Premium ${id.replace(/-/g, ' ')} in Istanbul | Meva Clinic`;
  let roTitle = `${id.replace(/-/g, ' ')} Premium în Istanbul | Meva Clinic`;
  
  let enDesc = `Discover world-class ${id.replace(/-/g, ' ')} at Meva Clinic Turkey. JCI-accredited facilities, top surgeons, and VIP all-inclusive packages.`;
  let roDesc = `Descoperă ${id.replace(/-/g, ' ')} la standarde mondiale la Meva Clinic Turcia. Facilități acreditate JCI, chirurgi de top și pachete VIP all-inclusive.`;
  
  let enKeywords = `"${id.replace(/-/g, ' ')} turkey", "best clinic for ${id.replace(/-/g, ' ')}", "istanbul medical tourism"`;
  let roKeywords = `"${id.replace(/-/g, ' ')} turcia", "cea mai buna clinica pentru ${id.replace(/-/g, ' ')}", "turism medical istanbul"`;

  return `${match}\n    metaTitle: t('${enTitle}', '${roTitle}'),\n    metaDesc: t('${enDesc}', '${roDesc}'),\n    keywords: t([${enKeywords}], [${roKeywords}]),`;
});

fs.writeFileSync(filePath, content, 'utf8');
console.log('Successfully injected SEO metadata into treatmentsData.ts');
