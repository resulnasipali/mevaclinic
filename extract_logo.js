const fs = require('fs');
const content = fs.readFileSync('C:\\\\Users\\\\Lenovo\\\\Desktop\\\\meva_clinic logo svg.svg', 'utf8');
const match = content.match(/data:image\/png;base64,([^"]+)/);
if (match) {
  fs.writeFileSync('public/images/meva-logo-premium.png', Buffer.from(match[1], 'base64'));
  console.log('Successfully extracted PNG');
} else {
  console.log('Base64 not found');
}
