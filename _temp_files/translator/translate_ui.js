import fs from 'fs';
import path from 'path';
import { Project, SyntaxKind } from 'ts-morph';
import translate from 'google-translate-api-x';

const locales = ['es', 'it', 'ru', 'fr', 'de'];
const dataPath = path.resolve('../../utils/uiTranslations.ts');

const sleep = (ms) => new Promise(r => setTimeout(r, ms));

async function safeTranslate(text, targetLang) {
    if (!text || text.trim() === '') return text;
    try {
        await sleep(200); // 200ms delay to prevent ban
        const res = await translate(text, { to: targetLang });
        return res.text;
    } catch (e) {
        console.error(`Translation error for ${targetLang}:`, e.message);
        return text;
    }
}

async function processUiTranslations() {
    console.log("Starting UI Translations...");
    const project = new Project();
    const sourceFile = project.addSourceFileAtPath(dataPath);
    
    // Find the exported const T = { ... }
    const variableDecl = sourceFile.getVariableDeclaration('T');
    if (!variableDecl) return;
    
    const initializer = variableDecl.getInitializerIfKind(SyntaxKind.ObjectLiteralExpression);
    if (!initializer) return;

    const properties = initializer.getProperties();
    let i = 1;

    for (const prop of properties) {
        if (prop.getKind() === SyntaxKind.PropertyAssignment) {
            const propName = prop.getName(); // the English key string
            const valueObj = prop.getInitializerIfKind(SyntaxKind.ObjectLiteralExpression);
            if (valueObj) {
                console.log(`Processing key ${i++}/${properties.length}: ${propName}`);
                
                const existingLangs = valueObj.getProperties().map(p => p.getName());
                
                // Get the en or ro string to translate from
                let sourceText = propName.replace(/['"]/g, '');
                const enProp = valueObj.getProperty('en');
                if (enProp && enProp.getKind() === SyntaxKind.PropertyAssignment) {
                    const init = enProp.getInitializer();
                    if (init && (init.getKind() === SyntaxKind.StringLiteral || init.getKind() === SyntaxKind.NoSubstitutionTemplateLiteral)) {
                        sourceText = init.getLiteralText();
                    }
                }

                for (const lang of locales) {
                    if (!existingLangs.includes(lang)) {
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

    console.log("Saving uiTranslations.ts...");
    sourceFile.saveSync();
    console.log("Done UI translations!");
}

processUiTranslations();
