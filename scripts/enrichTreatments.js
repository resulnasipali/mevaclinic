const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../data/treatmentsData.ts');
const lines = fs.readFileSync(filePath, 'utf8').split('\n');

let newLines = [];
let currentId = null;
let currentTitleEn = null;
let currentCategory = null;
let hasSeo = false;
let hasPremium = false;
let hasTimeline = false;

function generateTech(category) {
  switch(category) {
    case 'bariatric': return 'laparoscopic and metabolic';
    case 'hair': return 'micro-grafting and DHI';
    case 'dental': return 'CAD/CAM digital dentistry';
    case 'plastic': return '3D-vectored surgical';
    case 'medical': return 'precision molecular';
    case 'wellness': return 'regenerative anti-aging';
    default: return 'next-generation medical';
  }
}

function generateTechRo(category) {
  switch(category) {
    case 'bariatric': return 'laparoscopice și metabolice';
    case 'hair': return 'micro-grefare și DHI';
    case 'dental': return 'stomatologie digitală CAD/CAM';
    case 'plastic': return 'chirurgicale vectorizate 3D';
    case 'medical': return 'moleculare de precizie';
    case 'wellness': return 'anti-îmbătrânire regenerativă';
    default: return 'medicale de ultimă generație';
  }
}

for (let i = 0; i < lines.length; i++) {
  const line = lines[i];
  
  if (line.includes("id: '")) {
    currentId = line.match(/id:\s*'([^']+)'/)[1];
    hasSeo = false;
    hasPremium = false;
    hasTimeline = false;
  }
  if (line.includes("category: '")) {
    currentCategory = line.match(/category:\s*'([^']+)'/)[1];
  }
  if (line.includes("title: t('")) {
    currentTitleEn = line.match(/title:\s*t\('([^']+)'/)[1];
  }
  
  if (line.includes("semanticSeoText:")) hasSeo = true;
  if (line.includes("premiumInclusions:")) hasPremium = true;
  if (line.includes("recoveryTimeline:")) hasTimeline = true;
  
  if (line.includes("theProcedure: t(")) {
    // Inject missing fields before this line
    const indent = "    ";
    
    if (!hasSeo && currentTitleEn && currentCategory) {
      const tech = generateTech(currentCategory);
      const techRo = generateTechRo(currentCategory);
      
      const enSeo = `The ${currentTitleEn} procedure at Meva Clinic represents the highest standard of medical excellence in Istanbul. Leveraging advanced ${tech} protocols, our board-certified surgeons deliver precision-driven outcomes that prioritize your safety and aesthetic harmony. This intervention is tailored to your unique anatomical structure, ensuring a natural and lasting transformation. Patients from around the world choose Meva Clinic for our zero-compromise approach to luxury healthcare, where clinical precision meets 5-star comfort.`;
      
      const roSeo = `Procedura de ${currentTitleEn} la Meva Clinic reprezintă cel mai înalt standard de excelență medicală din Istanbul. Utilizând protocoale avansate ${techRo}, chirurgii noștri certificați oferă rezultate precise care prioritizează siguranța și armonia estetică. Această intervenție este personalizată pe structura dumneavoastră anatomică unică, asigurând o transformare naturală și durabilă. Pacienți din întreaga lume aleg Meva Clinic pentru abordarea noastră fără compromisuri în domeniul sănătății de lux, unde precizia clinică întâlnește confortul de 5 stele.`;
      
      newLines.push(`${indent}semanticSeoText: t(`);
      newLines.push(`${indent}  "${enSeo}",`);
      newLines.push(`${indent}  "${roSeo}"`);
      newLines.push(`${indent}),`);
    }
    
    if (!hasPremium) {
      newLines.push(`${indent}premiumInclusions: t(`);
      newLines.push(`${indent}  ["VIP Mercedes Airport Transfer", "5-Star Luxury Hotel Accommodation", "24/7 Dedicated Nursing Support", "Premium Medical Aftercare Kit", "Lifetime Guarantee Certificate"],`);
      newLines.push(`${indent}  ["Transfer VIP cu Mercedes la Aeroport", "Cazare la Hotel de Lux 5 Stele", "Asistență Medicală 24/7", "Kit Premium de Îngrijire Medicală", "Certificat de Garanție pe Viață"]`);
      newLines.push(`${indent}),`);
    }
    
    if (!hasTimeline) {
      newLines.push(`${indent}recoveryTimeline: t(`);
      newLines.push(`${indent}  [`);
      newLines.push(`${indent}    { time: "Phase 1: Immediate", desc: "Clinical observation, initial stabilization, and 5-star hotel rest." },`);
      newLines.push(`${indent}    { time: "Phase 2: Early Recovery", desc: "Mild activities resume, follow-up consultations, and structured aftercare." },`);
      newLines.push(`${indent}    { time: "Phase 3: Transformation", desc: "Visible results begin to emerge as tissues integrate and heal." },`);
      newLines.push(`${indent}    { time: "Phase 4: Final Result", desc: "Full aesthetic and functional maturation achieved. Lifelong support continues." }`);
      newLines.push(`${indent}  ],`);
      newLines.push(`${indent}  [`);
      newLines.push(`${indent}    { time: "Faza 1: Imediată", desc: "Observație clinică, stabilizare inițială și odihnă la hotelul de 5 stele." },`);
      newLines.push(`${indent}    { time: "Faza 2: Recuperare Timpurie", desc: "Reluarea activităților ușoare, consultații de urmărire și îngrijire structurată." },`);
      newLines.push(`${indent}    { time: "Faza 3: Transformare", desc: "Rezultatele vizibile încep să apară pe măsură ce țesuturile se integrează și se vindecă." },`);
      newLines.push(`${indent}    { time: "Faza 4: Rezultat Final", desc: "Maturare estetică și funcțională completă. Suportul pe viață continuă." }`);
      newLines.push(`${indent}  ]`);
      newLines.push(`${indent}),`);
    }
  }
  
  newLines.push(line);
}

fs.writeFileSync(filePath, newLines.join('\n'));
console.log('Successfully enriched treatmentsData.ts');
