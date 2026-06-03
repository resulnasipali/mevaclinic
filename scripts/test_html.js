fetch('http://localhost:3000/en').then(r=>r.text()).then(t=> {
  const links = [...t.matchAll(/<link rel=\"stylesheet\" href=\"(.*?)\"/g)];
  links.forEach(l => console.log(l[1]));
});
