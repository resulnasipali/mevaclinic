const fs = require('fs');
const path = require('path');

// SafetyQualitySection
const sqPath = path.join(__dirname, 'components/SafetyQualitySection.tsx');
let sq = fs.readFileSync(sqPath, 'utf-8');

if (!sq.includes('import { tUI }')) {
  sq = sq.replace("import { usePathname } from 'next/navigation';", "import { usePathname } from 'next/navigation';\nimport { tUI } from '@/utils/uiTranslations';");
  
  // Replace the FAQ arrays
  sq = sq.replace(/const faqDataRo = \[[\s\S]*?\];\s*const faqDataEn = \[[\s\S]*?\];/, `
const getFaqData = (lang: string) => [
  { question: tUI("Ce se întâmplă dacă apare o complicație medicală?", lang, "What happens if a medical complication occurs?"), answer: tUI("Siguranța ta este prioritatea absolută. Toate intervențiile noastre au loc în spitale acreditate JCI (Joint Commission International) din Turcia. Pachetele includ o asigurare medicală specializată împotriva complicațiilor.", lang, "Your safety is our absolute priority. All our surgeries take place in JCI (Joint Commission International) accredited hospitals in Turkey. The packages include specialized medical insurance against complications.") },
  { question: tUI("Cât de sigură este călătoria și șederea în Istanbul?", lang, "How safe is traveling and staying in Istanbul?"), answer: tUI("Istanbul este un hub internațional de prestigiu pentru turismul medical. Încă de la coborârea din avion, asistentul nostru VIP te va prelua direct de la poartă. Cazarea se face în hoteluri de cinci stele, aflate în zone premium.", lang, "Istanbul is a prestigious international hub for medical tourism. From the moment you step off the plane, our VIP assistant will pick you up. Accommodation is provided in five-star hotels located in premium areas.") },
  { question: tUI("Sunt acoperit de o formă de garanție sau asigurare?", lang, "Am I covered by a guarantee or insurance?"), answer: tUI("Absolut. Colaborăm exclusiv cu medici care au o rată de succes documentată de peste 99%. Suplimentar, beneficiezi de asistența noastră dedicată și proceduri legale și transparente.", lang, "Absolutely. We exclusively collaborate with doctors who have a documented success rate of over 99%. Additionally, you benefit from our dedicated assistance and transparent legal procedures.") }
];
`);
  
  sq = sq.replace('const faqData = isEn ? faqDataEn : faqDataRo;', 'const lang = (pathname || "/").split("/")[1] || "en";\n  const faqData = getFaqData(lang);');
  
  // Replace strings
  sq = sq.replace(/isEn \? "JCI Accreditation & Safety" : "Acreditare JCI & Siguranță"/g, 'tUI("JCI Accreditation & Safety", lang)');
  sq = sq.replace(/isEn \? "We Make No Compromises When It Comes To Your Life\." : "Nu Facem Compromisuri Când Vine Vorba de Viața Ta\."/g, 'tUI("We Make No Compromises When It Comes To Your Life.", lang)');
  sq = sq.replace(/isEn \? "Meva Clinic operates under the strictest international and European safety standards\. Impeccable care, experienced surgeons and 21st century technology\." : "Meva Clinic activează sub cele mai stricte norme internaționale de siguranță europeană și globală\. O asistență impecabilă, chirurgi experimentați și tehnologie secolului 21\."/g, 'tUI("Meva Clinic operates under the strictest international and European safety standards. Impeccable care, experienced surgeons and 21st century technology.", lang)');
  sq = sq.replace(/isEn \? "International Patients" : "Pacienți Internaționali"/g, 'tUI("International Patients", lang)');
  sq = sq.replace(/isEn \? "Frequently Asked Questions" : "Întrebări Frecvente"/g, 'tUI("Frequently Asked Questions", lang)');
  sq = sq.replace(/isEn \? "Meva Medical Board" : "Board-ul Medical Meva"/g, 'tUI("Meva Medical Board", lang)');
  sq = sq.replace(/isEn \? "View all doctors" : "Vezi toți medicii"/g, 'tUI("View all doctors", lang)');
  sq = sq.replace(/isEn \? "Video Interview Dr\. Erdem" : "Interviu Video Dr\. Erdem"/g, 'tUI("Video Interview Dr. Erdem", lang)');
  sq = sq.replace(/isEn \? "Bariatric Surgeon" : "Chirurg Bariatric"/g, 'tUI("Bariatric Surgeon", lang)');
  sq = sq.replace(/isEn \? "Over 15 years of experience in complex Gastric Sleeve and Bypass surgeries\. Titular member of IFSO Europe\." : "Peste 15 ani de experiență în intervenții complexe de Gastric Sleeve și Bypass\. Membru titular IFSO Europe\."/g, 'tUI("Over 15 years of experience in complex Gastric Sleeve and Bypass surgeries. Titular member of IFSO Europe.", lang)');
  sq = sq.replace(/isEn \? "International Board Accreditation" : "Acreditare Board Internațional"/g, 'tUI("International Board Accreditation", lang)');
  sq = sq.replace(/isEn \? "Dr\. Turan's Expertise" : "Expertiza Dr\. Turan"/g, 'tUI("Dr. Turan\'s Expertise", lang)');
  sq = sq.replace(/isEn \? "Dental Aesthetics" : "Estetică Dentară"/g, 'tUI("Dental Aesthetics", lang)');
  sq = sq.replace(/isEn \? "Hollywood Smile, implantology and 3D reconstruction aesthetics expert\. 8000\+ implante successfully completed\." : "Expertă în estetică Hollywood Smile, implantologie și reconstrucție 3D\. 8000\+ implante finalizate cu succes\."/g, 'tUI("Hollywood Smile, implantology and 3D reconstruction aesthetics expert. 8000+ implante successfully completed.", lang)');
  sq = sq.replace(/isEn \? "EACMFS European Member" : "Membru European EACMFS"/g, 'tUI("EACMFS European Member", lang)');
  
  fs.writeFileSync(sqPath, sq, 'utf-8');
  console.log('Patched SafetyQualitySection.tsx');
}

// ServicesSection
const ssPath = path.join(__dirname, 'components/ServicesSection.tsx');
let ss = fs.readFileSync(ssPath, 'utf-8');

if (!ss.includes('import { tUI }')) {
  ss = ss.replace("import { usePathname } from 'next/navigation';", "import { usePathname } from 'next/navigation';\nimport { tUI } from '@/utils/uiTranslations';");
  
  ss = ss.replace(/const OptimizedImage = \(\{ src, title, className, isEn \}\) => \{/g, 'const OptimizedImage = ({ src, title, className, lang }) => {');
  ss = ss.replace(/alt=\{isEn \? `Medical treatment: \$\{title\}` : `Imagine pentru tratament medical: \$\{title\}`\}/g, 'alt={`${tUI("Medical Solutions", lang)}: ${title}`}');
  ss = ss.replace(/aria-label=\{isEn \? `Medical treatment: \$\{title\}` : `Imagine pentru tratament medical: \$\{title\}`\}/g, 'aria-label={`${tUI("Medical Solutions", lang)}: ${title}`}');
  
  // In the component
  ss = ss.replace(/const isEn = \(pathname \|\| "\/"\)\.startsWith\('\/en'\);/g, 'const lang = (pathname || "/").split("/")[1] || "en";\n  const isEn = lang === "en";');
  
  ss = ss.replace(/isEn \? "Medical Solutions" : "Soluții Medicale"/g, 'tUI("Medical Solutions", lang)');
  ss = ss.replace(/isEn \? "Top Treatments" : "Tratamente de Top"/g, 'tUI("Top Treatments", lang)');
  ss = ss.replace(/isEn \s*\? "The list below is strictly ordered based on other patients' interest, prioritizing the most requested international procedures\."\s*: "Lista de mai jos se ordonează automat în funcție de interesul celorlalți pacienți, aducând în prim plan cele mai solicitate proceduri la nivel internațional\."/g, 'tUI("The list below is strictly ordered based on other patients\' interest, prioritizing the most requested international procedures.", lang)');
  ss = ss.replace(/isEn \? "Discover Package" : "Descoperă Pachetul"/g, 'tUI("Discover Package", lang)');
  
  fs.writeFileSync(ssPath, ss, 'utf-8');
  console.log('Patched ServicesSection.tsx');
}
