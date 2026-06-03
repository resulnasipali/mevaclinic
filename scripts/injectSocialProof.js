const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../data/treatmentsData.ts');
let content = fs.readFileSync(filePath, 'utf8');

const bariatricBeforeAfter = `
    beforeAfterCases: t(
      [
        { beforeImg: "https://images.unsplash.com/photo-1616450849313-0988647b0e1d?w=800&q=80", afterImg: "https://images.unsplash.com/photo-1595152772835-219674b2a8a6?w=800&q=80", title: "Incredible Transformation", desc: "Lost 45kg in 12 months." },
        { beforeImg: "https://images.unsplash.com/photo-1552699611-e2c208d538e1?w=800&q=80", afterImg: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80", title: "A New Life", desc: "Lost 60kg in 18 months." }
      ],
      [
        { beforeImg: "https://images.unsplash.com/photo-1616450849313-0988647b0e1d?w=800&q=80", afterImg: "https://images.unsplash.com/photo-1595152772835-219674b2a8a6?w=800&q=80", title: "Transformare Incredibilă", desc: "A slăbit 45kg în 12 luni." },
        { beforeImg: "https://images.unsplash.com/photo-1552699611-e2c208d538e1?w=800&q=80", afterImg: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80", title: "O Nouă Viață", desc: "A slăbit 60kg în 18 luni." }
      ]
    ),`;

const hairBeforeAfter = `
    beforeAfterCases: t(
      [
        { beforeImg: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=800&q=80", afterImg: "https://images.unsplash.com/photo-1531891437562-4301cf35b7e4?w=800&q=80", title: "Hairline Restoration", desc: "4000 Grafts DHI Technique" }
      ],
      [
        { beforeImg: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=800&q=80", afterImg: "https://images.unsplash.com/photo-1531891437562-4301cf35b7e4?w=800&q=80", title: "Restaurarea Liniei Părului", desc: "4000 Grefe Tehnica DHI" }
      ]
    ),`;

const genericBeforeAfter = `
    beforeAfterCases: t(
      [
        { beforeImg: "https://images.unsplash.com/photo-1552699611-e2c208d538e1?w=800&q=80", afterImg: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80", title: "Perfect Result", desc: "Meva Clinic Excellence" }
      ],
      [
        { beforeImg: "https://images.unsplash.com/photo-1552699611-e2c208d538e1?w=800&q=80", afterImg: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80", title: "Rezultat Perfect", desc: "Excelența Meva Clinic" }
      ]
    ),`;

let lines = content.split('\\n');
let newLines = [];
let currentCat = null;
let hasBeforeAfter = false;

for (let i = 0; i < lines.length; i++) {
  let line = lines[i];
  if (line.includes("id: '")) hasBeforeAfter = false;
  if (line.includes("category: '")) {
    currentCat = line.match(/category:\\s*'([^']+)'/)[1];
  }
  if (line.includes("beforeAfterCases:")) hasBeforeAfter = true;
  
  if (line.includes("faq: t(") && !hasBeforeAfter) {
    if (currentCat === 'bariatric') newLines.push(bariatricBeforeAfter);
    else if (currentCat === 'hair') newLines.push(hairBeforeAfter);
    else newLines.push(genericBeforeAfter);
  }
  newLines.push(line);
}

fs.writeFileSync(filePath, newLines.join('\\n'));
console.log('Injected beforeAfterCases!');
