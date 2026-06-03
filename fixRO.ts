import { Project, SyntaxKind, ObjectLiteralExpression } from 'ts-morph';

const project = new Project();
const sourceFile = project.addSourceFileAtPath('utils/uiTranslations.ts');

const translations: Record<string, string> = {
  "Global Gold Standard": "Standardul de Aur Global",
  "Quality Management": "Managementul Calității",
  "Surgical Excellence": "Excelență Chirurgicală",
  "End-to-End Concierge": "Servicii Concierge Complete",
  "PREMIUM LOGISTICS": "LOGISTICĂ PREMIUM",
  "Curated VIP Packages": "Pachete VIP Alese cu Grijă",
  "Experience absolute peace of mind. Every treatment comes with JCI-accredited care, 5-star Bosphorus hotels, and luxury transfers included.": "Bucurați-vă de liniște absolută. Fiecare tratament include îngrijire acreditată JCI, hoteluri de 5 stele pe Bosfor și transferuri de lux incluse.",
  "MEDICAL SOLUTIONS": "SOLUȚII MEDICALE",
  "Top Treatments": "Tratamente de Top",
  "The list below is strictly ordered based on other patients' interest, prioritizing the most requested international procedures.": "Lista de mai jos este ordonată strict în funcție de interesul pacienților, prioritizând cele mai solicitate proceduri internaționale.",
  "All-Inclusive Package Built Around You": "Pachet All-Inclusive Construit în Jurul Tău",
  "Your medical experience in Istanbul should be stress-free. We have prepared a premium package where details make the difference.": "Experiența dumneavoastră medicală la Istanbul ar trebui să fie fără stres. Am pregătit un pachet premium în care detaliile fac diferența.",
  "VIP Airport & Clinic Transfer": "Transfer VIP Aeroport și Clinică",
  "Personal driver at your disposal from landing in Istanbul and throughout all medical visits.": "Șofer personal la dispoziție de la aterizarea în Istanbul și pe durata tuturor vizitelor medicale.",
  "5-Star Hotel Accommodation": "Cazare la Hotel de 5 Stele",
  "Recovery in luxury conditions. The package fully covers accommodation in one of our prestigious partner hotels.": "Recuperare în condiții de lux. Pachetul acoperă integral cazarea la unul dintre hotelurile noastre partenere de prestigiu.",
  "The Premium Treatment": "Tratament Premium",
  "Guaranteed Surgical Intervention": "Intervenție Chirurgicală Garantată",
  "Team formed by Doctor Professors": "Echipă formată din Doctori Profesori",
  "VIP Hospitalization in Private Clinic (1-3 Days)": "Spitalizare VIP în Clinică Privată (1-3 Zile)",
  "Home Medication Included": "Medicație pentru Acasă Inclusă",
  "Dedicated Post-Operative Diet Plan": "Plan de Dietă Post-Operator Dedicat",
  "LUXURY CONCIERGE": "CONCIERGE DE LUX",
  "Premium all-inclusive packages in Istanbul: Gastric Sleeve and Bypass with internationally renowned specialists.": "Pachete premium all-inclusive în Istanbul: Gastric Sleeve și Bypass cu specialiști de renume internațional.",
  "The Meva All-Inclusive Protocol": "Protocolul Meva All-Inclusive",
  "Hello, I want to know more about the VIP all-inclusive package.": "Bună, aș dori să aflu mai multe despre pachetul VIP all-inclusive."
};

const tObjDec = sourceFile.getVariableDeclaration('T');
if (tObjDec) {
    const tObj = tObjDec.getInitializerIfKindOrThrow(SyntaxKind.ObjectLiteralExpression);
    
    // Check if key exists. If it does, update the 'ro' property.
    // Otherwise, create a new property at the end.
    for (const [enKey, roVal] of Object.entries(translations)) {
        let existingProp = tObj.getProperty(`"${enKey}"`) || tObj.getProperty(`'${enKey}'`) || tObj.getProperty(enKey);
        
        if (existingProp && existingProp.getKind() === SyntaxKind.PropertyAssignment) {
            const valObj = (existingProp as any).getInitializerIfKind(SyntaxKind.ObjectLiteralExpression);
            if (valObj) {
                const roProp = valObj.getProperty('ro') || valObj.getProperty('"ro"');
                if (roProp) {
                    (roProp as any).getInitializer()?.replaceWithText(JSON.stringify(roVal));
                } else {
                    valObj.addPropertyAssignment({ name: '"ro"', initializer: JSON.stringify(roVal) });
                }
            }
        } else {
            // Add a new entry at the very end
            tObj.addPropertyAssignment({
                name: JSON.stringify(enKey),
                initializer: `{ "en": ${JSON.stringify(enKey)}, "ro": ${JSON.stringify(roVal)} }`
            });
        }
    }
    
    sourceFile.saveSync();
    console.log("Romanian UI translations successfully injected!");
} else {
    console.log("Could not find T object in uiTranslations.ts");
}
