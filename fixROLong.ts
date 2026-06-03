import { Project, SyntaxKind } from 'ts-morph';

const project = new Project();
const sourceFile = project.addSourceFileAtPath('utils/uiTranslations.ts');

const translations: Record<string, string> = {
  "Our patients are our best business card. Discover their experiences and the incredible results they have achieved.": "Pacienții noștri sunt cea mai bună carte de vizită. Descoperiți experiențele lor și rezultatele incredibile pe care le-au obținut.",
  "There will be no language barriers. A dedicated medical assistant will accompany you to translate every detail.": "Nu vor exista bariere lingvistice. Un asistent medical dedicat vă va însoți pentru a traduce fiecare detaliu.",
  "All analyzes, consultations (cardiological, anesthetic) and necessary tests are 100% covered.": "Toate analizele, consultațiile (cardiologice, anestezice) și testele necesare sunt 100% acoperite.",
  "*No hidden costs - Everything included for your comfort*": "*Fără costuri ascunse - Totul inclus pentru confortul dumneavoastră*",
  "\"Meva Clinic changed my life! The care was exceptional.\"": "\"Meva Clinic mi-a schimbat viața! Îngrijirea a fost excepțională.\"",
  "\"Unbelievable results. 100% natural and painless procedure.\"": "\"Rezultate incredibile. Procedură 100% naturală și fără durere.\"",
  "\"The mommy makeover gave me my confidence back.\"": "\"Intervenția mommy makeover mi-a redat încrederea în mine.\"",
  "Patient Success Stories": "Povești de Succes ale Pacienților",
  "Real Transformations": "Transformări Reale",
  "SUCCESS STORIES": "POVEȘTI DE SUCCES",
  "Native English Translator": "Traducător Nativ de Engleză",
  "Pre/Post-Operative Tests": "Teste Pre/Post-Operatorii",
  "Dentistry": "Stomatologie",
  "Hollywood Smile & Reconstruction": "Hollywood Smile și Reconstrucție",
  "Lifting, Rhinoplasty, Body Sculpting": "Lifting, Rinoplastie, Remodelare Corporală",
  "CyberKnife, Chemotherapy": "CyberKnife, Chimioterapie",
  "Kidney & Liver Transplants": "Transplanturi de Rinichi și Ficat",
  "Sapphire FUE, Stem Cells": "Sapphire FUE, Celule Stem",
  "What is your area of interest?": "Care este domeniul dumneavoastră de interes?"
};

const tObjDec = sourceFile.getVariableDeclaration('T');
if (tObjDec) {
    const tObj = tObjDec.getInitializerIfKindOrThrow(SyntaxKind.ObjectLiteralExpression);
    
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
            tObj.addPropertyAssignment({
                name: JSON.stringify(enKey),
                initializer: `{ "en": ${JSON.stringify(enKey)}, "ro": ${JSON.stringify(roVal)} }`
            });
        }
    }
    sourceFile.saveSync();
    console.log("Specific Romanian long translations injected!");
}
