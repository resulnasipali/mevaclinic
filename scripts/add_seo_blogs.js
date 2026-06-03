const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'data', 'blogData.js');
let content = fs.readFileSync(filePath, 'utf8');

// Regex to find slug and insert SEO fields
content = content.replace(/slug:\s*"([^"]+)",/g, (match, slug) => {
  // If it already has keywords somewhere near, we don't care, we just add metaTitle and metaDesc
  let enTitle = `Latest Medical Insights on ${slug.replace(/-/g, ' ')} | Meva Clinic Blog`;
  let roTitle = `Ultimele Noutăți Medicale despre ${slug.replace(/-/g, ' ')} | Blog Meva Clinic`;
  
  let enDesc = `Read the latest medical articles about ${slug.replace(/-/g, ' ')} from top specialists at Meva Clinic Turkey. Stay informed on cutting-edge treatments.`;
  let roDesc = `Citește cele mai recente articole medicale despre ${slug.replace(/-/g, ' ')} scrise de specialiști de top de la Meva Clinic Turcia. Fii la curent cu tratamentele de ultimă generație.`;
  
  let enKeywords = `"${slug.replace(/-/g, ' ')}", "meva clinic blog", "medical tourism turkey"`;
  let roKeywords = `"${slug.replace(/-/g, ' ')}", "blog meva clinic", "turism medical turcia"`;

  return `${match}\n    metaTitle: { en: "${enTitle}", ro: "${roTitle}" },\n    metaDesc: { en: "${enDesc}", ro: "${roDesc}" },\n    keywords: { en: [${enKeywords}], ro: [${roKeywords}] },`;
});

fs.writeFileSync(filePath, content, 'utf8');
console.log('Successfully injected SEO metadata into blogData.js');
