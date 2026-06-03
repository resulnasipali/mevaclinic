const fs = require('fs');
const path = require('path');

// PatientJourney.tsx
const pjPath = path.join(__dirname, 'components/PatientJourney.tsx');
let pjContent = fs.readFileSync(pjPath, 'utf-8');

// Replace imports and declaration
if (!pjContent.includes('const PatientJourney = ({ lang = \'en\' }: { lang?: string }) => {')) {
  pjContent = pjContent.replace('const PatientJourney = () => {', 'const PatientJourney = ({ lang = \'en\' }: { lang?: string }) => {');
  pjContent = pjContent.replace(/const pathname = usePathname\(\);\n  const lang = pathname\?\.split\('\/'\)\[1\] \|\| 'en';\n  const isRo = lang === 'ro';/, 'const isRo = lang === \'ro\';');
  
  // Replace titleRo/titleEn usages with tUI(titleEn, lang)
  pjContent = pjContent.replace(/isRo \? s\.titleRo : s\.titleEn/g, 'tUI(s.titleEn, lang)');
  pjContent = pjContent.replace(/isRo \? s\.descRo : s\.descEn/g, 'tUI(s.descEn, lang)');
  pjContent = pjContent.replace(/isRo \? item\.titleRo : item\.titleEn/g, 'tUI(item.titleEn, lang)');
  pjContent = pjContent.replace(/isRo \? item\.descRo : item\.descEn/g, 'tUI(item.descEn, lang)');
  fs.writeFileSync(pjPath, pjContent, 'utf-8');
}

// BmiCalculator.tsx
const bmiPath = path.join(__dirname, 'components/BmiCalculator.tsx');
let bmiContent = fs.readFileSync(bmiPath, 'utf-8');
if (!bmiContent.includes('import { tUI } from \'@/utils/uiTranslations\';')) {
  bmiContent = bmiContent.replace('import { usePathname } from \'next/navigation\';', 'import { usePathname } from \'next/navigation\';\nimport { tUI } from \'@/utils/uiTranslations\';');
}

if (!bmiContent.includes('const BmiCalculator = ({ lang = \'en\' }: { lang?: string }) => {')) {
  bmiContent = bmiContent.replace('const BmiCalculator = () => {', 'const BmiCalculator = ({ lang = \'en\' }: { lang?: string }) => {');
  bmiContent = bmiContent.replace(/const pathname = usePathname\(\);\n  const isEn = \(pathname \|\| "\/"\)\.startsWith\('\/en'\);/, 'const isEn = lang === \'en\';');
  
  // Replace all the ternary operators in BmiCalculator with tUI calls
  // This is a bit complex with regex, so I'll just do manual replacements for the main ones.
  bmiContent = bmiContent.replace(/isEn \? 'Medical BMI Screening Tool' : 'Instrument Medical de Screening IMC'/g, 'tUI("Medical BMI Screening Tool", lang)');
  bmiContent = bmiContent.replace(/isEn \? 'BMI Calculator & ' : 'Calculator IMC & '/g, 'tUI("BMI Calculator & ", lang)');
  bmiContent = bmiContent.replace(/isEn \? 'Bariatric Check' : 'Verificare Bariatrică'/g, 'tUI("Bariatric Check", lang)');
  bmiContent = bmiContent.replace(/isEn\s*\?\s*'Calculate your BMI instantly\. Our algorithm analyses gender, age and height to provide a medically personalised result\.'\s*:\s*'Calculați IMC-ul instantaneu\. Algoritmul nostru analizează sexul, vârsta și înălțimea pentru un rezultat medical personalizat\.'/g, 'tUI("Calculate your BMI instantly. Our algorithm analyses gender, age and height to provide a medically personalised result.", lang)');
  
  bmiContent = bmiContent.replace(/isEn \? 'Gender' : 'Sex'/g, 'tUI("Gender", lang)');
  bmiContent = bmiContent.replace(/isEn \? 'Select gender' : 'Selectați sexul'/g, 'tUI("Select gender", lang)');
  bmiContent = bmiContent.replace(/isEn \? labelEn : labelRo/g, 'tUI(labelEn, lang)');
  
  bmiContent = bmiContent.replace(/isEn \? 'Age \(years\)' : 'Vârstă \(ani\)'/g, 'tUI("Age (years)", lang)');
  bmiContent = bmiContent.replace(/isEn \? 'Height \(cm\)' : 'Înălțime \(cm\)'/g, 'tUI("Height (cm)", lang)');
  bmiContent = bmiContent.replace(/isEn \? 'Weight \(kg\)' : 'Greutate \(kg\)'/g, 'tUI("Weight (kg)", lang)');
  bmiContent = bmiContent.replace(/isEn \? 'Analyse My BMI' : 'Analizați IMC-ul Meu'/g, 'tUI("Analyse My BMI", lang)');
  bmiContent = bmiContent.replace(/isEn \? 'Your BMI:' : 'IMC-ul dumneavoastră:'/g, 'tUI("Your BMI:", lang)');
  
  bmiContent = bmiContent.replace(/isEn \? 'Ideal Weight Range' : 'Intervalul de Greutate Ideală'/g, 'tUI("Ideal Weight Range", lang)');
  bmiContent = bmiContent.replace(/isEn \? 'Excess Weight' : 'Greutate în Exces'/g, 'tUI("Excess Weight", lang)');
  bmiContent = bmiContent.replace(/isEn \? 'to reach your ideal weight range' : 'pentru a ajunge la intervalul de greutate ideală'/g, 'tUI("to reach your ideal weight range", lang)');
  
  bmiContent = bmiContent.replace(/isEn \? 'Bariatric Surgery Eligible' : 'Eligibil pentru Chirurgie Bariatrică'/g, 'tUI("Bariatric Surgery Eligible", lang)');
  bmiContent = bmiContent.replace(/isEn \? 'WHO Class II–III Obesity' : 'Obezitate WHO Clasa II–III'/g, 'tUI("WHO Class II–III Obesity", lang)');
  bmiContent = bmiContent.replace(/isEn\s*\?\s*'Based on your BMI, you meet the international clinical criteria \(WHO\/IFSO\) for bariatric surgery\. Gastric Sleeve or Bypass at Meva Clinic Istanbul could be the decisive step toward lasting weight loss\.'\s*:\s*'Pe baza IMC-ului dumneavoastră, îndepliniți criteriile clinice internaționale \(WHO\/IFSO\) pentru chirurgia bariatrică\. Gastric Sleeve sau Bypass la Meva Clinic Istanbul ar putea fi pasul decisiv spre pierderea durabilă în greutate\.'/g, 'tUI("Based on your BMI, you meet the international clinical criteria (WHO/IFSO) for bariatric surgery. Gastric Sleeve or Bypass at Meva Clinic Istanbul could be the decisive step toward lasting weight loss.", lang)');
  bmiContent = bmiContent.replace(/isEn \? 'Book Free Bariatric Consultation' : 'Rezervați Consultație Bariatrică Gratuită'/g, 'tUI("Book Free Bariatric Consultation", lang)');
  
  bmiContent = bmiContent.replace(/isEn \? 'Full Name \*' : 'Nume Complet \*'/g, 'tUI("Full Name *", lang)');
  bmiContent = bmiContent.replace(/isEn \? 'Phone Number \*' : 'Număr Telefon \*'/g, 'tUI("Phone Number *", lang)');
  bmiContent = bmiContent.replace(/isEn \? 'Sending…' : 'Se trimite…'/g, 'tUI("Sending…", lang)');
  bmiContent = bmiContent.replace(/isEn \? 'Request Callback in 15 min' : 'Solicitați Apel în 15 min'/g, 'tUI("Request Callback in 15 min", lang)');
  
  bmiContent = bmiContent.replace(/isEn \? '✅ Request sent! A consultant will call within 15 minutes\.' : '✅ Cerere trimisă! Un consultant vă va suna în 15 minute\.'/g, 'tUI("✅ Request sent! A consultant will call within 15 minutes.", lang)');
  bmiContent = bmiContent.replace(/isEn\s*\?\s*'⚕️ This tool is for informational purposes only and does not constitute medical advice\. Always consult a qualified physician before making health decisions\.'\s*:\s*'⚕️ Acest instrument are scop informativ și nu constituie sfat medical\. Consultați întotdeauna un medic calificat înainte de a lua decizii privind sănătatea\.'/g, 'tUI("⚕️ This tool is for informational purposes only and does not constitute medical advice. Always consult a qualified physician before making health decisions.", lang)');
  
  bmiContent = bmiContent.replace(/isEn \? 'Underweight' : 'Subponderal'/g, 'tUI("Underweight", lang)');
  bmiContent = bmiContent.replace(/isEn \? 'Normal Weight' : 'Greutate Normală'/g, 'tUI("Normal Weight", lang)');
  bmiContent = bmiContent.replace(/isEn \? 'Overweight' : 'Supraponderal'/g, 'tUI("Overweight", lang)');
  bmiContent = bmiContent.replace(/isEn \? 'Request Gastric Balloon Info' : 'Solicită Info Balon Gastric'/g, 'tUI("Request Gastric Balloon Info", lang)');
  bmiContent = bmiContent.replace(/isEn \? 'Obesity Class I' : 'Obezitate Clasa I'/g, 'tUI("Obesity Class I", lang)');
  bmiContent = bmiContent.replace(/isEn \? 'Get a Free Evaluation' : 'Obțineți Evaluare Gratuită'/g, 'tUI("Get a Free Evaluation", lang)');
  bmiContent = bmiContent.replace(/isEn \? 'Obesity Class II–III' : 'Obezitate Clasa II–III'/g, 'tUI("Obesity Class II–III", lang)');
  bmiContent = bmiContent.replace(/isEn \? 'Request Bariatric Consultation' : 'Solicită Consultație Bariatrică'/g, 'tUI("Request Bariatric Consultation", lang)');
  
  bmiContent = bmiContent.replace(/isEn \? '⚠️ For patients over 65, bariatric eligibility requires additional cardiac evaluation\.' : '⚠️ Pentru pacienții peste 65 de ani, eligibilitatea bariatrică necesită evaluare cardiacă suplimentară\.'/g, 'tUI("⚠️ For patients over 65, bariatric eligibility requires additional cardiac evaluation.", lang)');
  
  // Re-inject lang for the interpret function
  bmiContent = bmiContent.replace(/const interpret = \(bmi, isEn\) => \{/g, 'const interpret = (bmi, lang) => {');
  bmiContent = bmiContent.replace(/const interp = interpret\(bmi, isEn\);/g, 'const interp = interpret(bmi, lang);');
  
  fs.writeFileSync(bmiPath, bmiContent, 'utf-8');
}

// PremiumPackageSection.tsx
const ppsPath = path.join(__dirname, 'components/PremiumPackageSection.tsx');
let ppsContent = fs.readFileSync(ppsPath, 'utf-8');
if (!ppsContent.includes('import { tUI } from \'@/utils/uiTranslations\';')) {
  ppsContent = ppsContent.replace('import { usePathname } from \'next/navigation\';', 'import { usePathname } from \'next/navigation\';\nimport { tUI } from \'@/utils/uiTranslations\';');
}

if (!ppsContent.includes('const PremiumPackageSection = ({ lang = \'en\' }: { lang?: string }) => {')) {
  ppsContent = ppsContent.replace('const PremiumPackageSection = () => {', 'const PremiumPackageSection = ({ lang = \'en\' }: { lang?: string }) => {');
  ppsContent = ppsContent.replace(/const pathname = usePathname\(\);\n  const isEn = \(pathname \|\| "\/"\)\.startsWith\('\/en'\);/, 'const isEn = lang === \'en\';');

  // Replace translations
  ppsContent = ppsContent.replace(/isEn \? "All-Inclusive Package Built Around You" : "Pachet All-Inclusive Construit în Jurul Tău"/g, 'tUI("All-Inclusive Package Built Around You", lang)');
  ppsContent = ppsContent.replace(/isEn \? "Your medical experience in Istanbul should be stress-free\. We have prepared a premium package where details make the difference\." : "Experiența ta medicală la Istanbul trebuie să fie lipsită de stres\. Am pregătit un pachet premium în care detaliile fac diferența\."/g, 'tUI("Your medical experience in Istanbul should be stress-free. We have prepared a premium package where details make the difference.", lang)');
  ppsContent = ppsContent.replace(/isEn \? "VIP Airport & Clinic Transfer" : "VIP Transfer Aeroport & Clinică"/g, 'tUI("VIP Airport & Clinic Transfer", lang)');
  ppsContent = ppsContent.replace(/isEn \? "Personal driver at your disposal from landing in Istanbul and throughout all medical visits\." : "Șofer personal la dispoziția ta de la aterizarea în Istanbul și pe parcursul tuturor vizitelor medicale\."/g, 'tUI("Personal driver at your disposal from landing in Istanbul and throughout all medical visits.", lang)');
  ppsContent = ppsContent.replace(/isEn \? "5-Star Hotel Accommodation" : "Cazare la Hotel 5 Stele"/g, 'tUI("5-Star Hotel Accommodation", lang)');
  ppsContent = ppsContent.replace(/isEn \? "Recovery in luxury conditions\. The package fully covers accommodation in one of our prestigious partner hotels\." : "Recuperare în condiții de lux\. Pachetul acoperă integral cazarea într-unul dintre hotelurile partenere de prestigiu\."/g, 'tUI("Recovery in luxury conditions. The package fully covers accommodation in one of our prestigious partner hotels.", lang)');
  ppsContent = ppsContent.replace(/isEn \? "Native English Translator" : "Traducător \(Română - Engleză\)"/g, 'tUI("Native English Translator", lang)');
  ppsContent = ppsContent.replace(/isEn \? "There will be no language barriers\. A dedicated medical assistant will accompany you to translate every detail\." : "Nu vor exista bariere lingvistice\. Asistentul medical dedicat te va însoți pentru a traduce fiecare detaliu\."/g, 'tUI("There will be no language barriers. A dedicated medical assistant will accompany you to translate every detail.", lang)');
  ppsContent = ppsContent.replace(/isEn \? "Pre\/Post-Operative Tests" : "Teste Pre\/Post-Operatorii"/g, 'tUI("Pre/Post-Operative Tests", lang)');
  ppsContent = ppsContent.replace(/isEn \? "All analyzes, consultations \(cardiological, anesthetic\) and necessary tests are 100% covered\." : "Toate analizele, consulturile \(cardiologic, anestezic\) și testele necesare sunt acoperite 100%\."/g, 'tUI("All analyzes, consultations (cardiological, anesthetic) and necessary tests are 100% covered.", lang)');
  ppsContent = ppsContent.replace(/isEn \? "The Premium Treatment" : "Tratamentul Premium"/g, 'tUI("The Premium Treatment", lang)');
  ppsContent = ppsContent.replace(/isEn \? "Guaranteed Surgical Intervention" : "Intervenția Chirurgicală Garantată"/g, 'tUI("Guaranteed Surgical Intervention", lang)');
  ppsContent = ppsContent.replace(/isEn \? "Team formed by Doctor Professors" : "Echipă formată din Profesori Doctori"/g, 'tUI("Team formed by Doctor Professors", lang)');
  ppsContent = ppsContent.replace(/isEn \? "VIP Hospitalization in Private Clinic \(1-3 Days\)" : "Spitalizare VIP în Clinică Privată \(1-3 Zile\)"/g, 'tUI("VIP Hospitalization in Private Clinic (1-3 Days)", lang)');
  ppsContent = ppsContent.replace(/isEn \? "Home Medication Included" : "Medicamentația pentru Acasă Inclusă"/g, 'tUI("Home Medication Included", lang)');
  ppsContent = ppsContent.replace(/isEn \? "Dedicated Post-Operative Diet Plan" : "Plan de Dieta Dedicat Post-Operator"/g, 'tUI("Dedicated Post-Operative Diet Plan", lang)');
  ppsContent = ppsContent.replace(/isEn \? "\\"No hidden costs – Everything included for your comfort\\"" : "\\"Fără costuri ascunse – Totul inclus pentru confortul tău\\""/g, 'tUI("\\"No hidden costs – Everything included for your comfort\\"", lang)');
  
  fs.writeFileSync(ppsPath, ppsContent, 'utf-8');
}
