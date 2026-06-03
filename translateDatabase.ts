import { Project, SyntaxKind, ArrayLiteralExpression, ObjectLiteralExpression } from 'ts-morph';
import { translate } from 'bing-translate-api';
import { translate as googleTranslate } from '@vitalets/google-translate-api';

const project = new Project();
const sourceFile = project.addSourceFileAtPath('data/treatmentsData.ts');

const langs = ['ro', 'es', 'it', 'ru', 'fr', 'de'];
const langCodes = {
    ro: 'ro',
    es: 'es',
    it: 'it',
    ru: 'ru',
    fr: 'fr',
    de: 'de'
};

async function sleep(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function translateText(text: string, toLang: string): Promise<string> {
    try {
        const res = await translate(text, null, toLang, true);
        return res.translation;
    } catch (e) {
        console.log(`Bing failed, trying Google for: ${toLang}`);
        try {
            const gRes = await googleTranslate(text, { to: toLang as any });
            return gRes.text;
        } catch (e2) {
            console.error(`Both failed for ${toLang}`);
            return text; // fallback to English
        }
    }
}

async function translateArray(enArray: string[], targetLang: string): Promise<string[]> {
    if (enArray.length === 0) return enArray;
    
    // Some strings might be too long for a single batch if using Bing, but let's try.
    const textToTranslate = enArray.join(' ||| ');
    const translatedText = await translateText(textToTranslate, targetLang);
    
    // Bing sometimes adds spaces around ||| 
    return translatedText.split(/\|\|\|/i).map(s => s.trim().replace(/^['"]|['"]$/g, ''));
}

async function processFile() {
    console.log("Starting translation process (Bing + Google fallback)...");
    let translatedCount = 0;

    const calls = sourceFile.getDescendantsOfKind(SyntaxKind.CallExpression)
        .filter(call => call.getExpression().getText() === 't');

    for (const call of calls) {
        const args = call.getArguments();
        
        if (args.length > 0 && args[0].getKind() === SyntaxKind.ArrayLiteralExpression) {
            const enArrayNode = args[0] as ArrayLiteralExpression;
            const enElements = enArrayNode.getElements();
            if (enElements.length === 0) continue;

            const isObjectArray = enElements[0].getKind() === SyntaxKind.ObjectLiteralExpression;
            
            if (!isObjectArray) {
                // String Array
                const enStrings = enElements.map(e => e.getText().replace(/^["']|["']$/g, '').replace(/\\"/g, '"'));
                
                for (let i = 1; i <= 6; i++) {
                    const currentLang = langs[i-1];
                    const langCode = langCodes[currentLang as keyof typeof langCodes];
                    
                    if (args.length <= i || args[i].getText() === args[0].getText()) {
                        console.log(`Translating string array to ${currentLang}...`);
                        const translatedStrings = await translateArray(enStrings, langCode);
                        const newArrayText = `[${translatedStrings.map(s => JSON.stringify(s)).join(', ')}]`;
                        
                        while (call.getArguments().length <= i) call.addArgument('[]');
                        call.getArguments()[i].replaceWithText(newArrayText);
                        translatedCount++;
                        sourceFile.saveSync(); // Save immediately to not lose progress
                        await sleep(2000); // 2 second delay to avoid rate limits
                    }
                }
            } else {
                // Object Array (faq, timeline, steps)
                const keys: string[][] = [];
                const enStrings: string[] = [];
                
                enElements.forEach(el => {
                    const obj = el as ObjectLiteralExpression;
                    const elKeys: string[] = [];
                    obj.getProperties().forEach(prop => {
                        if (prop.getKind() === SyntaxKind.PropertyAssignment) {
                            const p = prop as any;
                            const key = p.getName();
                            const val = p.getInitializer()?.getText().replace(/^["']|["']$/g, '').replace(/\\"/g, '"') || "";
                            elKeys.push(key);
                            enStrings.push(val);
                        }
                    });
                    keys.push(elKeys);
                });

                for (let i = 1; i <= 6; i++) {
                    const currentLang = langs[i-1];
                    const langCode = langCodes[currentLang as keyof typeof langCodes];
                    
                    if (args.length <= i || args[i].getText() === args[0].getText()) {
                        console.log(`Translating object array to ${currentLang}...`);
                        const translatedStrings = await translateArray(enStrings, langCode);
                        
                        let strIdx = 0;
                        const newObjArrayText = "[\n" + keys.map(objKeys => {
                            const props = objKeys.map(k => {
                                // Provide fallback if index is out of bounds
                                const tVal = translatedStrings[strIdx] ? translatedStrings[strIdx] : enStrings[strIdx];
                                strIdx++;
                                return `${k}: ${JSON.stringify(tVal)}`;
                            }).join(', ');
                            return `  { ${props} }`;
                        }).join(',\n') + "\n]";
                        
                        while (call.getArguments().length <= i) call.addArgument('[]');
                        call.getArguments()[i].replaceWithText(newObjArrayText);
                        translatedCount++;
                        sourceFile.saveSync(); // Save immediately to not lose progress
                        await sleep(2000); // 2 second delay to avoid rate limits
                    }
                }
            }
        }
    }

    console.log(`Finished! Replaced ${translatedCount} arrays.`);
}

processFile().catch(console.error);
