const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../data/treatmentsData.ts');
const lines = fs.readFileSync(filePath, 'utf8').split('\n');

let newLines = [];
let currentCategory = null;
let currentTitleEn = null;
let hasProcedureSteps = false;

function generateSteps(category, title) {
  switch(category) {
    case 'bariatric':
      return {
        en: [
          { title: "Pre-Operative 3D Diagnostics", desc: "Comprehensive blood tests, EKG, and metabolic profiling to ensure 100% surgical safety." },
          { title: "Painless Anesthesia", desc: "Administration of high-grade general anesthesia supervised by board-certified anesthesiologists." },
          { title: "Laparoscopic Incision", desc: "Minimally invasive 1cm incisions made to access the abdominal cavity with precision." },
          { title: "Volume Reduction", desc: "Specialized tools are used to reshape the digestive tract, ensuring optimal volume restriction." },
          { title: "Triple-Row Stapling", desc: "Application of titanium staples with a triple-row technique to absolutely prevent any leakage." },
          { title: "Final Validation", desc: "A sterile leak test is performed before safely closing the incisions with self-absorbing sutures." }
        ],
        ro: [
          { title: "Diagnostic 3D Pre-Operator", desc: "Analize de sânge complete, EKG și profilare metabolică pentru a asigura siguranța chirurgicală 100%." },
          { title: "Anestezie Fără Durere", desc: "Administrarea anesteziei generale de înaltă calitate sub supravegherea medicilor anesteziști certificați." },
          { title: "Incizie Laparoscopică", desc: "Incizii minim invazive de 1 cm pentru a accesa cavitatea abdominală cu precizie maximă." },
          { title: "Reducerea Volumului", desc: "Instrumente specializate sunt folosite pentru a remodela tractul digestiv, asigurând restricția optimă a volumului." },
          { title: "Capsare pe Trei Rânduri", desc: "Aplicarea capselor de titan cu o tehnică pe trei rânduri pentru a preveni absolut orice scurgere." },
          { title: "Validare Finală", desc: "Se efectuează un test steril de scurgere înainte de închiderea în siguranță a inciziilor cu suturi resorbabile." }
        ]
      };
    case 'hair':
      return {
        en: [
          { title: "3D Hairline Design", desc: "Computer-assisted facial mapping to design the most natural and aesthetic hairline." },
          { title: "Comfort-In Anesthesia", desc: "Needle-free, painless local anesthesia applied using high-pressure micro-spray technology." },
          { title: "Precise Extraction", desc: "Healthy grafts are harvested individually from the donor area using micro-motors." },
          { title: "Direct Implantation", desc: "Using the Choi Pen, grafts are implanted directly at the perfect angle and depth without prior incisions." },
          { title: "Density Optimization", desc: "Strategic placement ensures maximum density and natural flow of the hair." },
          { title: "PRP Therapy Application", desc: "Platelet-Rich Plasma is applied to accelerate healing and boost graft survival to 99%." }
        ],
        ro: [
          { title: "Design 3D al Liniei Părului", desc: "Cartografiere facială asistată de calculator pentru a desena cea mai naturală și estetică linie a părului." },
          { title: "Anestezie Comfort-In", desc: "Anestezie locală nedureroasă, fără ace, aplicată folosind tehnologia de micro-spray cu presiune înaltă." },
          { title: "Extracție Precisă", desc: "Grefele sănătoase sunt recoltate individual din zona donatoare folosind micro-motoare." },
          { title: "Implantare Directă", desc: "Folosind stiloul Choi, grefele sunt implantate direct la unghiul și adâncimea perfectă, fără incizii prealabile." },
          { title: "Optimizarea Densității", desc: "Plasarea strategică asigură o densitate maximă și o direcție naturală a părului." },
          { title: "Aplicarea Terapiei PRP", desc: "Plasma bogată în trombocite este aplicată pentru a accelera vindecarea și a crește supraviețuirea grefelor la 99%." }
        ]
      };
    case 'dental':
      return {
        en: [
          { title: "Panoramic 3D X-Ray", desc: "High-resolution scanning of the jawbone and dental structure to plan the treatment." },
          { title: "Digital Smile Design", desc: "CAD/CAM software used to model the perfect smile that matches facial proportions." },
          { title: "Painless Preparation", desc: "Minimal contouring of existing teeth under local anesthesia for a perfect fit." },
          { title: "Precision Fitting", desc: "Temporary solutions are applied while the premium ceramic materials are crafted in the lab." },
          { title: "Permanent Fixation", desc: "Bonding the final restorations using specialized bio-compatible adhesives." },
          { title: "Bite Alignment Check", desc: "Final micro-adjustments to ensure perfect bite functionality and aesthetic brilliance." }
        ],
        ro: [
          { title: "Radiografie 3D Panoramică", desc: "Scanare de înaltă rezoluție a osului maxilarului și structurii dentare pentru planificarea tratamentului." },
          { title: "Digital Smile Design", desc: "Software CAD/CAM folosit pentru a modela zâmbetul perfect care se potrivește proporțiilor faciale." },
          { title: "Pregătire Fără Durere", desc: "Conturarea minimă a dinților existenți sub anestezie locală pentru o potrivire perfectă." },
          { title: "Ajustare de Precizie", desc: "Sunt aplicate soluții temporare în timp ce materialele ceramice premium sunt fabricate în laborator." },
          { title: "Fixare Permanentă", desc: "Cimentarea restaurărilor finale folosind adezivi bio-compatibili specializați." },
          { title: "Verificarea Alinierii Mușcăturii", desc: "Micro-ajustări finale pentru a asigura o funcționalitate perfectă a mușcăturii și o strălucire estetică." }
        ]
      };
    case 'plastic':
      return {
        en: [
          { title: "Pre-Surgical Mapping", desc: "Detailed body mapping and surgical marking using 3D simulation tools." },
          { title: "General Anesthesia", desc: "Safe sedation administered by specialist anesthesiologists for total comfort." },
          { title: "Targeted Intervention", desc: "Using advanced techniques (e.g., Vaser, Endoscopic) for precise tissue manipulation." },
          { title: "Structural Recontouring", desc: "Reshaping underlying muscle and tissue to achieve the desired aesthetic contour." },
          { title: "Aesthetic Closure", desc: "Applying micro-sutures and hidden incision techniques to ensure invisible scarring." },
          { title: "Immediate Aftercare", desc: "Placement of specialized compression garments and transfer to the VIP recovery suite." }
        ],
        ro: [
          { title: "Cartografiere Pre-Chirurgicală", desc: "Marcarea chirurgicală detaliată a corpului folosind instrumente de simulare 3D." },
          { title: "Anestezie Generală", desc: "Sedare sigură administrată de medici anesteziști specialiști pentru un confort total." },
          { title: "Intervenție Țintită", desc: "Utilizarea tehnicilor avansate (ex: Vaser, Endoscopic) pentru manipularea precisă a țesuturilor." },
          { title: "Reconturare Structurală", desc: "Remodelarea mușchilor și țesuturilor subiacente pentru a obține conturul estetic dorit." },
          { title: "Închidere Estetică", desc: "Aplicarea micro-suturilor și tehnicilor de incizie ascunsă pentru a asigura cicatrici invizibile." },
          { title: "Îngrijire Imediată", desc: "Plasarea îmbrăcămintei de compresie specializate și transferul la suita VIP de recuperare." }
        ]
      };
    default:
      return {
        en: [
          { title: "Clinical Consultation", desc: "In-depth review of medical history and establishment of treatment goals." },
          { title: "Preparation Phase", desc: "Patient is prepped using the highest sterility and comfort standards." },
          { title: "Core Procedure", desc: `Execution of the ${title} procedure utilizing advanced medical protocols.` },
          { title: "Post-Procedure Review", desc: "Immediate clinical check-up to ensure optimal response to the treatment." }
        ],
        ro: [
          { title: "Consultație Clinică", desc: "Revizuirea aprofundată a istoricului medical și stabilirea obiectivelor tratamentului." },
          { title: "Faza de Pregătire", desc: "Pacientul este pregătit folosind cele mai înalte standarde de sterilitate și confort." },
          { title: "Procedura Principală", desc: `Executarea procedurii ${title} utilizând protocoale medicale avansate.` },
          { title: "Revizuire Post-Procedură", desc: "Control clinic imediat pentru a asigura răspunsul optim la tratament." }
        ]
      };
  }
}

for (let i = 0; i < lines.length; i++) {
  const line = lines[i];
  
  if (line.includes("id: '")) {
    hasProcedureSteps = false;
  }
  if (line.includes("category: '")) {
    currentCategory = line.match(/category:\s*'([^']+)'/)[1];
  }
  if (line.includes("title: t('")) {
    currentTitleEn = line.match(/title:\s*t\('([^']+)'/)[1];
  }
  
  if (line.includes("procedureSteps:")) hasProcedureSteps = true;
  
  if (line.includes("theProcedure: t(") && !hasProcedureSteps) {
    const indent = "    ";
    const steps = generateSteps(currentCategory, currentTitleEn);
    
    newLines.push(`${indent}procedureSteps: t(`);
    newLines.push(`${indent}  [`);
    steps.en.forEach((step, idx) => {
      newLines.push(`${indent}    { title: "${step.title}", desc: "${step.desc}" }${idx < steps.en.length - 1 ? ',' : ''}`);
    });
    newLines.push(`${indent}  ],`);
    newLines.push(`${indent}  [`);
    steps.ro.forEach((step, idx) => {
      newLines.push(`${indent}    { title: "${step.title}", desc: "${step.desc}" }${idx < steps.ro.length - 1 ? ',' : ''}`);
    });
    newLines.push(`${indent}  ]`);
    newLines.push(`${indent}),`);
  }
  
  newLines.push(line);
}

fs.writeFileSync(filePath, newLines.join('\n'));
console.log('Successfully injected procedureSteps into treatmentsData.ts');
