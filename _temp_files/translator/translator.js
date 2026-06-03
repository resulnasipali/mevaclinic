import fs from 'fs';
import path from 'path';
import { Project, SyntaxKind } from 'ts-morph';
import translate from 'google-translate-api-x';

const locales = ['es', 'it', 'ru', 'fr', 'de'];
const allLocales = ['ro', 'es', 'it', 'ru', 'fr', 'de'];

const sleep = (ms) => new Promise(r => setTimeout(r, ms));

async function safeTranslate(text, targetLang) {
    if (!text || text.trim() === '') return text;
    try {
        const res = await translate(text, { to: targetLang });
        return res.text;
    } catch (e) {
        console.error(`Translation error for ${targetLang}:`, e.message);
        return text;
    }
}

async function processMessages() {
    const messagesDir = path.resolve('../../messages');
    const enPath = path.join(messagesDir, 'en.json');
    const enData = JSON.parse(fs.readFileSync(enPath, 'utf8'));

    async function traverseAndTranslate(enObj, targetObj, lang) {
        let updated = false;
        for (const key in enObj) {
            if (typeof enObj[key] === 'object') {
                if (!targetObj[key]) targetObj[key] = {};
                const childUpdated = await traverseAndTranslate(enObj[key], targetObj[key], lang);
                if (childUpdated) updated = true;
            } else {
                if (!targetObj[key] || targetObj[key] === enObj[key]) {
                    console.log(`[messages] Translating ${lang} -> ${key}`);
                    targetObj[key] = await safeTranslate(enObj[key], lang);
                    updated = true;
                }
            }
        }
        return updated;
    }

    for (const lang of allLocales) {
        const langPath = path.join(messagesDir, `${lang}.json`);
        let langData = {};
        if (fs.existsSync(langPath)) {
            langData = JSON.parse(fs.readFileSync(langPath, 'utf8'));
        }
        const updated = await traverseAndTranslate(enData, langData, lang);
        if (updated) {
            fs.writeFileSync(langPath, JSON.stringify(langData, null, 2));
            console.log(`Updated messages/${lang}.json`);
        }
    }
}

async function translateStringArray(elements, lang) {
    const translated = [];
    for (const el of elements) {
        if (el.getKind() === SyntaxKind.StringLiteral || el.getKind() === SyntaxKind.NoSubstitutionTemplateLiteral) {
            translated.push(`"${(await safeTranslate(el.getLiteralText(), lang)).replace(/"/g, '\\"')}"`);
        } else {
            translated.push(el.getText()); 
        }
    }
    return `[${translated.join(', ')}]`;
}

async function translateObjectArray(elements, lang) {
    const translated = [];
    for (const el of elements) {
        if (el.getKind() === SyntaxKind.ObjectLiteralExpression) {
            const props = el.getProperties();
            const newProps = [];
            for (const prop of props) {
                if (prop.getKind() === SyntaxKind.PropertyAssignment) {
                    const name = prop.getName();
                    const init = prop.getInitializer();
                    if (init && (init.getKind() === SyntaxKind.StringLiteral || init.getKind() === SyntaxKind.NoSubstitutionTemplateLiteral)) {
                        const translatedText = await safeTranslate(init.getLiteralText(), lang);
                        newProps.push(`${name}: "${translatedText.replace(/"/g, '\\"')}"`);
                    } else {
                        newProps.push(prop.getText());
                    }
                } else {
                    newProps.push(prop.getText());
                }
            }
            translated.push(`{ ${newProps.join(', ')} }`);
        } else {
            translated.push(el.getText());
        }
    }
    return `[${translated.join(', ')}]`;
}

async function processTreatmentsData() {
    const dataPath = path.resolve('../../data/treatmentsData.ts');
    const project = new Project();
    const sourceFile = project.addSourceFileAtPath(dataPath);
    const callExpressions = sourceFile.getDescendantsOfKind(SyntaxKind.CallExpression);
    
    let callsToUpdate = [];
    
    for (const callExpr of callExpressions) {
        if (callExpr.getExpression().getText() === 't') {
            const args = callExpr.getArguments();
            if (args.length > 0 && args.length < 7) {
                callsToUpdate.push(callExpr);
            }
        }
    }

    console.log(`Found ${callsToUpdate.length} incomplete t() calls.`);
    let i = 1;

    for (const callExpr of callsToUpdate) {
        const args = callExpr.getArguments();
        console.log(`Processing call ${i++}/${callsToUpdate.length}...`);
        
        const enArg = args[0];
        const argTexts = args.map(a => a.getText());
        
        if (args.length === 1) {
            argTexts.push(argTexts[0]);
        }

        for (let j = 0; j < locales.length; j++) {
            const lang = locales[j];
            const argIndex = 2 + j;
            if (args.length <= argIndex) {
                if (enArg.getKind() === SyntaxKind.StringLiteral || enArg.getKind() === SyntaxKind.NoSubstitutionTemplateLiteral) {
                    const text = enArg.getLiteralText();
                    const trans = await safeTranslate(text, lang);
                    argTexts.push(`"${trans.replace(/"/g, '\\"')}"`);
                } else if (enArg.getKind() === SyntaxKind.ArrayLiteralExpression) {
                    const elements = enArg.getElements();
                    if (elements.length > 0 && elements[0].getKind() === SyntaxKind.ObjectLiteralExpression) {
                        const newArr = await translateObjectArray(elements, lang);
                        argTexts.push(newArr);
                    } else {
                        const newArr = await translateStringArray(elements, lang);
                        argTexts.push(newArr);
                    }
                } else if (enArg.getKind() === SyntaxKind.ObjectLiteralExpression) {
                    const props = enArg.getProperties();
                    const newProps = [];
                    for (const prop of props) {
                        if (prop.getKind() === SyntaxKind.PropertyAssignment) {
                            const init = prop.getInitializer();
                            if (init && (init.getKind() === SyntaxKind.StringLiteral || init.getKind() === SyntaxKind.NoSubstitutionTemplateLiteral)) {
                                const trans = await safeTranslate(init.getLiteralText(), lang);
                                newProps.push(`${prop.getName()}: "${trans.replace(/"/g, '\\"')}"`);
                            } else {
                                newProps.push(prop.getText());
                            }
                        }
                    }
                    argTexts.push(`{ ${newProps.join(', ')} }`);
                } else {
                    argTexts.push(argTexts[0]);
                }
            }
        }
        
        for (let idx = args.length - 1; idx >= 0; idx--) {
            callExpr.removeArgument(idx);
        }
        
        for (const newArg of argTexts) {
            callExpr.addArgument(newArg);
        }
    }

    console.log('Saving treatmentsData.ts...');
    sourceFile.saveSync();
}

async function run() {
    console.log("Translating messages...");
    await processMessages();
    console.log("Translating treatments data...");
    await processTreatmentsData();
    console.log("All done!");
}

run();
