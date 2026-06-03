import fs from 'fs';
import path from 'path';
import { Project, SyntaxKind } from 'ts-morph';
import { translate } from 'bing-translate-api';

const locales = ['es', 'it', 'ru', 'fr', 'de'];
const dataPath = path.resolve('../../utils/uiTranslations.ts');

const sleep = (ms) => new Promise(r => setTimeout(r, ms));

async function safeTranslate(text, targetLang) {
    if (!text || text.trim() === '') return text;
    try {
        await sleep(100); 
        const res = await translate(text, null, targetLang);
        return res.translation;
    } catch (e) {
        console.error(`Bing error for ${targetLang}:`, e.message);
        return text;
    }
}

async function processUiTranslations() {
    console.log("Starting UI Translations with BING...");
    const project = new Project();
    const sourceFile = project.addSourceFileAtPath(dataPath);
    
    const variableDecl = sourceFile.getVariableDeclaration('T');
    if (!variableDecl) return;
    
    const initializer = variableDecl.getInitializerIfKind(SyntaxKind.ObjectLiteralExpression);
    if (!initializer) return;

    const properties = initializer.getProperties();
    let i = 1;

    for (const prop of properties) {
        if (prop.getKind() === SyntaxKind.PropertyAssignment) {
            const propName = prop.getName(); 
            const valueObj = prop.getInitializerIfKind(SyntaxKind.ObjectLiteralExpression);
            if (valueObj) {
                console.log(`Processing key ${i++}/${properties.length}: ${propName}`);
                
                const existingLangs = valueObj.getProperties().map(p => p.getName().replace(/['"]/g, ''));
                
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
    console.log("Done UI translations with Bing!");
}

processUiTranslations();
