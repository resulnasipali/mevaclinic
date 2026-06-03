import fs from 'fs';
import path from 'path';
import { Project, SyntaxKind } from 'ts-morph';
import { translate } from 'bing-translate-api';

const locales = ['es', 'it', 'ru', 'fr', 'de'];
const basePath = path.resolve('../../');

const sleep = (ms) => new Promise(r => setTimeout(r, ms));

async function safeTranslate(text, targetLang) {
    if (!text || text.trim() === '') return text;
    // Don't translate very short things or pure paths
    if (text.startsWith('/') || text.length <= 1) return text;
    try {
        await sleep(150); 
        const res = await translate(text, null, targetLang);
        return res.translation;
    } catch (e) {
        console.error(`Bing error for ${targetLang} on text "${text.substring(0, 20)}":`, e.message);
        await sleep(2000); 
        try {
            const res2 = await translate(text, null, targetLang);
            return res2.translation;
        } catch(e2) {
             return text; 
        }
    }
}

// 1. Process uiTranslations.ts using extracted_strings.json
async function processUiTranslations() {
    console.log("Processing uiTranslations.ts...");
    const project = new Project();
    const sourceFile = project.addSourceFileAtPath(path.join(basePath, 'utils/uiTranslations.ts'));
    const variableDecl = sourceFile.getVariableDeclaration('T');
    const initializer = variableDecl.getInitializerIfKind(SyntaxKind.ObjectLiteralExpression);
    
    // Load extracted strings
    const extractedPath = path.join(basePath, 'scripts/extracted_strings.json');
    if (fs.existsSync(extractedPath)) {
        const extracted = JSON.parse(fs.readFileSync(extractedPath, 'utf8'));
        for (const item of extracted) {
            if (item.en && item.en.trim() !== '' && !item.en.startsWith('/')) {
                // Check if key exists in T
                const prop = initializer.getProperty(`"${item.en.replace(/"/g, '\\"')}"`) || initializer.getProperty(`'${item.en.replace(/'/g, "\\'")}'`);
                if (!prop) {
                    console.log("Adding missing key to T:", item.en);
                    initializer.addPropertyAssignment({
                        name: `"${item.en.replace(/"/g, '\\"')}"`,
                        initializer: `{ "en": "${item.en.replace(/"/g, '\\"')}", "ro": "${item.ro ? item.ro.replace(/"/g, '\\"') : item.en.replace(/"/g, '\\"')}" }`
                    });
                }
            }
        }
    }

    // Now translate all properties in T
    const properties = initializer.getProperties();
    for (const prop of properties) {
        if (prop.getKind() === SyntaxKind.PropertyAssignment) {
            const propName = prop.getName().replace(/['"]/g, '');
            const valueObj = prop.getInitializerIfKind(SyntaxKind.ObjectLiteralExpression);
            if (valueObj) {
                const existingLangs = valueObj.getProperties().map(p => p.getName().replace(/['"]/g, ''));
                let sourceText = propName;
                const enProp = valueObj.getProperty('en');
                if (enProp && enProp.getKind() === SyntaxKind.PropertyAssignment) {
                    const init = enProp.getInitializer();
                    if (init && (init.getKind() === SyntaxKind.StringLiteral || init.getKind() === SyntaxKind.NoSubstitutionTemplateLiteral)) {
                        sourceText = init.getLiteralText();
                    }
                }
                if (sourceText.startsWith('/') || sourceText.length <= 1) continue;

                for (const lang of locales) {
                    if (!existingLangs.includes(lang)) {
                        console.log(`Translating UI ${lang}: ${sourceText.substring(0, 30)}`);
                        const translatedText = await safeTranslate(sourceText, lang);
                        valueObj.addPropertyAssignment({
                            name: `"${lang}"`,
                            initializer: `"${translatedText.replace(/"/g, '\\"')}"`
                        });
                    }
                }
            }
        }
    }
    sourceFile.saveSync();
}

// 2. Process premiumTreatmentsData.json
async function processPremium() {
    console.log("Processing premiumTreatmentsData.json...");
    const premiumPath = path.join(basePath, 'data/premiumTreatmentsData.json');
    if (!fs.existsSync(premiumPath)) return;
    const data = JSON.parse(fs.readFileSync(premiumPath, 'utf8'));

    for (const item of data) {
        const fields = ['title', 'description', 'priceIncluded'];
        for (const field of fields) {
            if (item[field] && typeof item[field] === 'object' && item[field].en) {
                const enText = item[field].en;
                for (const lang of locales) {
                    if (!item[field][lang] || item[field][lang] === enText || item[field][lang] === item[field].ro) {
                         console.log(`Translating Premium ${lang}: ${enText.substring(0, 30)}`);
                         item[field][lang] = await safeTranslate(enText, lang);
                    }
                }
            }
        }
        if (item.benefits && Array.isArray(item.benefits)) {
            for (const benefit of item.benefits) {
                if (benefit.text && typeof benefit.text === 'object' && benefit.text.en) {
                    const enText = benefit.text.en;
                    for (const lang of locales) {
                        if (!benefit.text[lang] || benefit.text[lang] === enText || benefit.text[lang] === benefit.text.ro) {
                             benefit.text[lang] = await safeTranslate(enText, lang);
                        }
                    }
                }
            }
        }
    }
    fs.writeFileSync(premiumPath, JSON.stringify(data, null, 2));
}

// 3. Process treatmentsData.ts
async function processTreatmentsData() {
    console.log("Processing treatmentsData.ts...");
    const project = new Project();
    const sourceFile = project.addSourceFileAtPath(path.join(basePath, 'data/treatmentsData.ts'));
    
    const calls = sourceFile.getDescendantsOfKind(SyntaxKind.CallExpression);
    for (const call of calls) {
        const expression = call.getExpression();
        if (expression.getKind() === SyntaxKind.Identifier && expression.getText() === 't') {
            const args = call.getArguments();
            if (args.length >= 1) {
                const enArg = args[0];
                let enText = '';
                if (enArg.getKind() === SyntaxKind.StringLiteral || enArg.getKind() === SyntaxKind.NoSubstitutionTemplateLiteral) {
                    enText = enArg.getLiteralText();
                }
                
                if (enText && enText.length > 1 && !enText.startsWith('/')) {
                    const roArg = args.length > 1 ? args[1] : null;
                    let roText = '';
                    if (roArg && (roArg.getKind() === SyntaxKind.StringLiteral || roArg.getKind() === SyntaxKind.NoSubstitutionTemplateLiteral)) {
                        roText = roArg.getLiteralText();
                    }

                    for (let langIdx = 2; langIdx <= 6; langIdx++) {
                        if (args.length > langIdx) {
                            const langArg = args[langIdx];
                            let langText = '';
                            if (langArg.getKind() === SyntaxKind.StringLiteral || langArg.getKind() === SyntaxKind.NoSubstitutionTemplateLiteral) {
                                langText = langArg.getLiteralText();
                            }
                            if (langText === enText || langText === roText) { 
                                 console.log(`Fixing treatmentsData ${locales[langIdx-2]}: ${enText.substring(0,30)}...`);
                                 const translated = await safeTranslate(enText, locales[langIdx-2]);
                                 call.removeArgument(langIdx);
                                 call.insertArgument(langIdx, `\`${translated.replace(/`/g, '\\`')}\``);
                            }
                        }
                    }
                }
            }
        }
    }
    sourceFile.saveSync();
}

async function runAll() {
    await processUiTranslations();
    await processPremium();
    await processTreatmentsData();
    console.log("ALL DONE!");
}

runAll();
