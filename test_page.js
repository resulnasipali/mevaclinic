const https = require('https');

function testUrl(url) {
  return new Promise((resolve) => {
    https.get(url, (res) => {
      console.log(`URL: ${url}`);
      console.log(`  Status Code: ${res.statusCode}`);
      console.log(`  Headers:`, res.headers);
      let body = '';
      res.on('data', chunk => body += chunk);
      res.on('end', () => {
        console.log(`  Body length: ${body.length}`);
        if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
          console.log(`  Redirect Location: ${res.headers.location}`);
        }
        resolve();
      });
    }).on('error', (err) => {
      console.error(`Error fetching ${url}:`, err.message);
      resolve();
    });
  });
}

async function run() {
  await testUrl('https://meva-clinic-next.vercel.app/');
  await testUrl('https://meva-clinic-next.vercel.app/en');
  await testUrl('https://meva-clinic-next.vercel.app/tr');
}

run();
