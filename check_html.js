const fs = require('fs');
if (!fs.existsSync('_temp_about_us.html')) {
  console.log('File _temp_about_us.html not found in current directory:', process.cwd());
  process.exit(1);
}
const html = fs.readFileSync('_temp_about_us.html', 'utf8');

// Match H1 tags
const h1s = html.match(/<h1[^>]*>([\s\S]*?)<\/h1>/gi) || [];
console.log('=== H1 TAGS ===');
h1s.forEach((h, i) => console.log(`${i + 1}: ${h}`));

// Match H2 tags
const h2s = html.match(/<h2[^>]*>([\s\S]*?)<\/h2>/gi) || [];
console.log('\n=== H2 TAGS ===');
h2s.forEach((h, i) => console.log(`${i + 1}: ${h}`));

// Match H3 tags
const h3s = html.match(/<h3[^>]*>([\s\S]*?)<\/h3>/gi) || [];
console.log('\n=== H3 TAGS ===');
h3s.forEach((h, i) => console.log(`${i + 1}: ${h}`));
