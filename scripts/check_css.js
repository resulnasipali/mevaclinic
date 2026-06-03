fetch('http://localhost:3000/en').then(r=>r.text()).then(t=>{
  const m = t.match(/<link rel=\"stylesheet\" href=\"(.*?)\"/);
  if(m) {
    console.log('CSS file:', m[1]);
    fetch('http://localhost:3000'+m[1]).then(r=>r.text()).then(css => {
      console.log('CSS size:', css.length);
      console.log('Contains bg-[#0b1626]:', css.includes('bg-[#0b1626]'));
    });
  } else {
    console.log('No stylesheet found');
  }
});
