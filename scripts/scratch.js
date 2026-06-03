const http = require('http');

http.get('http://localhost:3000/de', (res) => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    const matches = data.match(/href="([^"]+\.css)"/g);
    if (!matches) return console.log('No CSS found');
    
    let pending = matches.length;
    for (let m of matches) {
      const url = 'http://localhost:3000' + m.match(/href="([^"]+)"/)[1];
      http.get(url, (cres) => {
        let cdata = '';
        cres.on('data', chunk => cdata += chunk);
        cres.on('end', () => {
          if (cdata.includes('top-[110px]')) console.log('FOUND top-[110px] in', url);
          if (cdata.includes('translate-x-full')) console.log('FOUND translate-x-full in', url);
          if (cdata.includes('lg:hidden')) console.log('FOUND lg:hidden in', url);
          if (--pending === 0) console.log('Done scanning CSS');
        });
      });
    }
  });
});
