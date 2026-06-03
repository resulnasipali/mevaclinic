import { Project, SyntaxKind, ObjectLiteralExpression, PropertyAssignment } from 'ts-morph';
import { translate } from 'bing-translate-api';
import { translate as googleTranslate } from '@vitalets/google-translate-api';

const project = new Project();
const sourceFile = project.addSourceFileAtPath('utils/uiTranslations.ts');

async function translateText(text: string, toLang: string): Promise<string> {
    try {
        const res = await translate(text, null, toLang, true);
        return res.translation;
    } catch (e) {
        try {
            const gRes = await googleTranslate(text, { to: toLang as any });
            return gRes.text;
        } catch (e2) {
            return text; // fallback
        }
    }
}

async function processFile() {
    console.log("Translating missing RO keys in uiTranslations.ts FAST...");
    let addedCount = 0;

    const tObjDec = sourceFile.getVariableDeclaration('T');
    if (!tObjDec) return console.log("T object not found");
    const tObj = tObjDec.getInitializerIfKindOrThrow(SyntaxKind.ObjectLiteralExpression);

    const props = tObj.getProperties();
    const tasks: Promise<void>[] = [];

    for (const prop of props) {
        if (prop.getKind() === SyntaxKind.PropertyAssignment) {
            const p = prop as PropertyAssignment;
            const englishText = p.getName().replace(/^['"]|['"]$/g, '');
            const valObj = p.getInitializerIfKind(SyntaxKind.ObjectLiteralExpression);
            
            if (valObj) {
                const roProp = valObj.getProperty('ro') || valObj.getProperty('"ro"');
                let needsTranslation = false;
                
                if (!roProp) {
                    needsTranslation = true;
                } else if (roProp.getKind() === SyntaxKind.PropertyAssignment) {
                    const roVal = (roProp as PropertyAssignment).getInitializer()?.getText().replace(/^['"]|['"]$/g, '');
                    if (roVal === englishText && englishText.length > 5) {
                        needsTranslation = true; // Placeholder
                    }
                }

                if (needsTranslation) {
                    tasks.push((async () => {
                        console.log(`Translating: ${englishText.substring(0, 30)}...`);
                        const translated = await translateText(englishText, 'ro');
                        if (translated && translated !== englishText) {
                            if (roProp) {
                                (roProp as PropertyAssignment).getInitializer()?.replaceWithText(JSON.stringify(translated));
                            } else {
                                valObj.addPropertyAssignment({
                                    name: '"ro"',
                                    initializer: JSON.stringify(translated)
                                });
                            }
                            addedCount++;
                        }
                    })());
                    
                    // Batch to avoid memory/rate limit issues, but fast
                    if (tasks.length >= 10) {
                        await Promise.all(tasks);
                        tasks.length = 0;
                        sourceFile.saveSync();
                    }
                }
            }
        }
    }

    if (tasks.length > 0) {
        await Promise.all(tasks);
        sourceFile.saveSync();
    }

    console.log(`Finished! Translated ${addedCount} missing Romanian strings.`);
}

processFile().catch(console.error);
