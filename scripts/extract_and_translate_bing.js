const fs = require('fs');
const path = require('path');

const UI_DICT_PATH = path.join(__dirname, '../utils/uiTranslations.ts');

function escapeRegExp(string) {
  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function extractStrings() {
  const extracted = new Set();
  
  function scanDir(dir) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
      const fullPath = path.join(dir, file);
      if (fs.statSync(fullPath).isDirectory()) {
        scanDir(fullPath);
      } else if (fullPath.endsWith('.tsx') || fullPath.endsWith('.ts')) {
        const content = fs.readFileSync(fullPath, 'utf8');
        
        // Regex to match tUI("string", ...) or tUI('string', ...)
        // This is a bit tricky with quotes, but we'll try:
        const regex1 = /tUI\(\s*"([^"\\]*(?:\\.[^"\\]*)*)"\s*,/g;
        const regex2 = /tUI\(\s*'([^'\\]*(?:\\.[^'\\]*)*)'\s*,/g;
        
        let match;
        while ((match = regex1.exec(content)) !== null) {
          extracted.add(match[1]);
        }
        while ((match = regex2.exec(content)) !== null) {
          extracted.add(match[1]);
        }
      }
    }
  }

  scanDir(path.join(__dirname, '../components'));
  scanDir(path.join(__dirname, '../app'));
  
  // Also add known manual strings we just fixed:
  const manual = [
    "JCI Accredited",
    "ISO 9001:2015",
    "15+ Years",
    "100% VIP",
    "Global Gold Standard",
    "Quality Management",
    "Surgical Excellence",
    "End-to-End Concierge",
    "Ministry of Health TR",
    "ISAPS Member",
    "Gastric Sleeve",
    "Stomach reduction procedure by up to 80%, optimal for patients suffering from obesity.",
    "Gastric Bypass",
    "A high-end combination of restriction and malabsorption, the gold standard in bariatric surgery.",
    "Gastric Balloon",
    "A non-surgical, completely reversible method for rapid weight loss without any scarring.",
    "Dental Implants",
    "Flawless smile with premium implants and 3D constructed zirconium dental crowns.",
    "Over 15 years of experience in complex Gastric Sleeve and Bypass surgeries. Titular member of IFSO Europe.",
    "Hollywood Smile, implantology and oral reconstruction aesthetics expert. Over 5,000 implante successfully completed.",
    "International Board Accreditation",
    "EACMFS European Member"
  ];
  
  for (const s of manual) extracted.add(s);
  
  // Read FAQ data to extract FAQ questions/answers
  try {
    const faqDataPath = path.join(__dirname, '../data/faqData.js');
    const faqContent = fs.readFileSync(faqDataPath, 'utf8');
    // Just a basic extract or we can just translate it...
    // Actually faq.en has the english questions.
  } catch(e) {}
  
  return Array.from(extracted);
}

const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

async function bingTranslateBatch(texts, toLang) {
    if (texts.length === 0) return [];
    
    console.log(`[Bing] Translating ${texts.length} texts to ${toLang}...`);
    try {
        const response = await fetch('https://www.bing.com/ttranslatev3', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'
            },
            body: new URLSearchParams({
                fromLang: 'en',
                to: toLang,
                text: texts.join('\n\n---\n\n')
            })
        });

        if (!response.ok) throw new Error(`HTTP ${response.status}`);
        const data = await response.json();
        
        if (data && data[0] && data[0].translations && data[0].translations[0]) {
            const translatedText = data[0].translations[0].text;
            return translatedText.split('\n\n---\n\n').map(s => s.trim());
        }
        return texts;
    } catch (error) {
        console.error(`[Bing] Translation failed:`, error.message);
        return texts; 
    }
}

async function run() {
  const strings = extractStrings();
  console.log(`Found ${strings.length} strings.`);
  
  let dictContent = fs.readFileSync(UI_DICT_PATH, 'utf8');
  
  // Parse the object using a dirty trick
  const startIndex = dictContent.indexOf('export const T');
  const startBrace = dictContent.indexOf('{', dictContent.indexOf('=', startIndex));
  const endBrace = dictContent.lastIndexOf('};');
  const objectString = dictContent.substring(startBrace, endBrace + 1);
  
  let dict;
  try {
    dict = new Function('return ' + objectString)();
  } catch (e) {
    console.error("Failed to parse dict:", e);
    return;
  }
  
  const targetLangs = ['es', 'it', 'ru', 'fr', 'de'];
  const toTranslate = {}; // lang -> [keys]
  
  for (const lang of targetLangs) {
    toTranslate[lang] = [];
  }
  
  // Check which strings are missing translations
  for (const str of strings) {
    if (str.length <= 1) continue;
    
    if (!dict[str]) {
      dict[str] = { en: str };
    }
    
    for (const lang of targetLangs) {
      if (!dict[str][lang]) {
        toTranslate[lang].push(str);
      }
    }
  }
  
  // Now we need to read FAQ
  const faqDataPath = path.join(__dirname, '../data/faqData.js');
  let faqContent = fs.readFileSync(faqDataPath, 'utf8');
  const enMatch = faqContent.match(/en:\s*\[([\s\S]*?)\]\s*,/);
  if (enMatch) {
    const qMatches = [...enMatch[1].matchAll(/q:\s*["']([^"']+)["']/g)].map(m => m[1]);
    const aMatches = [...enMatch[1].matchAll(/a:\s*["']([^"']+)["']/g)].map(m => m[1]);
    
    for (const str of [...qMatches, ...aMatches]) {
      if (!dict[str]) dict[str] = { en: str };
      for (const lang of targetLangs) {
        if (!dict[str][lang]) toTranslate[lang].push(str);
      }
    }
  }

  // Translate batches
  for (const lang of targetLangs) {
    const keys = toTranslate[lang];
    if (keys.length === 0) continue;
    
    // Batch in 15
    for (let i = 0; i < keys.length; i += 15) {
      const batchKeys = keys.slice(i, i + 15);
      const translated = await bingTranslateBatch(batchKeys, lang);
      
      for (let j = 0; j < batchKeys.length; j++) {
        const key = batchKeys[j];
        if (translated[j]) {
          dict[key][lang] = translated[j];
        }
      }
      await sleep(1000); // rate limit
    }
  }
  
  // Write back
  const newContent = `export const T: Record<string, { en?: string, ro?: string, es?: string, it?: string, ru?: string, fr?: string, de?: string }> = ${JSON.stringify(dict, null, 2)};\n\nexport function tUI(enString: string, lang: string): string {\n  if (T[enString] && (T[enString] as any)[lang]) {\n    return (T[enString] as any)[lang];\n  }\n  const cleanStr = enString.trim();\n  if (T[cleanStr] && (T[cleanStr] as any)[lang]) {\n    return (T[cleanStr] as any)[lang];\n  }\n  return enString;\n}\n`;
  fs.writeFileSync(UI_DICT_PATH, newContent);
  console.log("Translation complete!");
}

run();
