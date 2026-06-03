import path from 'path';
import { Project, SyntaxKind } from 'ts-morph';
import { translate } from 'bing-translate-api';

const basePath = path.resolve('../../');
const sleep = (ms) => new Promise(r => setTimeout(r, ms));

const badges = [
    { en: 'TÜRSAB Approved', ro: 'Aprobat TÜRSAB' },
    { en: 'Group-A Travel Agency', ro: 'Agenție Grup A' },
    { en: 'Ministry of Health', ro: 'Ministerul Sănătății' },
    { en: 'Republic of Turkey · Certified', ro: 'Republica Turcia · Certificat' },
    { en: 'JCI Accredited', ro: 'Acreditat JCI' },
    { en: 'Global Patient Safety', ro: 'Siguranță Globală' },
    { en: 'TÜV SÜD', ro: 'TÜV SÜD' },
    { en: 'ISO 9001:2015 Management', ro: 'Management ISO 9001:2015' }
];

async function run() {
    const project = new Project();
    const sourceFile = project.addSourceFileAtPath(path.join(basePath, 'utils/uiTranslations.ts'));
    const variableDecl = sourceFile.getVariableDeclaration('T');
    const initializer = variableDecl.getInitializerIfKind(SyntaxKind.ObjectLiteralExpression);

    for (const badge of badges) {
        let prop = initializer.getProperty(`"${badge.en}"`);
        if (!prop) {
            console.log(`Adding ${badge.en}...`);
            initializer.addPropertyAssignment({
                name: `"${badge.en}"`,
                initializer: `{ "en": "${badge.en}", "ro": "${badge.ro}" }`
            });
            prop = initializer.getProperty(`"${badge.en}"`);
        }
        
        if (prop && prop.getKind() === SyntaxKind.PropertyAssignment) {
            const valueObj = prop.getInitializerIfKind(SyntaxKind.ObjectLiteralExpression);
            if (valueObj) {
                const existingLangs = valueObj.getProperties().map(p => p.getName().replace(/['"]/g, ''));
                for (const lang of ['es', 'it', 'ru', 'fr', 'de']) {
                    if (!existingLangs.includes(lang)) {
                        console.log(`Translating ${badge.en} to ${lang}...`);
                        await sleep(150);
                        try {
                            const res = await translate(badge.en, null, lang);
                            valueObj.addPropertyAssignment({
                                name: `"${lang}"`,
                                initializer: `"${res.translation.replace(/"/g, '\\"')}"`
                            });
                        } catch (e) {}
                    }
                }
            }
        }
    }
    sourceFile.saveSync();
    console.log("Badges added!");
}
run();
