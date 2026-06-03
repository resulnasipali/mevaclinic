const http = require('http');

function fetchLang(lang) {
  http.get(`http://localhost:3000/${lang}`, (res) => {
    let data = '';
    res.on('data', (chunk) => data += chunk);
    res.on('end', () => {
      const h1Match = data.match(/<h1[^>]*>([\s\S]*?)<\/h1>/);
      console.log(`[${lang}] H1:`, h1Match ? h1Match[1].trim().replace(/<[^>]+>/g, '') : 'No H1 found');
      
      const titleMatch = data.match(/<title[^>]*>([\s\S]*?)<\/title>/);
      console.log(`[${lang}] Title:`, titleMatch ? titleMatch[1].trim() : 'No Title found');
    });
  }).on('error', (err) => {
    console.log(`Error fetching ${lang}:`, err.message);
  });
}

fetchLang('en');
fetchLang('de');
fetchLang('ro');
fetchLang('es');
