const fs = require('fs');
const path = require('path');

const transPath = path.join(__dirname, 'utils/uiTranslations.ts');
let transContent = fs.readFileSync(transPath, 'utf-8');

const T = {}; // In-memory map for new translations

function addTranslation(en, ro) {
  if (!en) return en;
  // If we already have it in the file, skip
  if (transContent.includes(`"${en}"`) || transContent.includes(`'${en}'`)) return en;
  if (!T[en]) {
    T[en] = {
      en, ro, es: en, it: en, ru: en, fr: en, de: en
    };
  }
  return en;
}

function processFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf-8');
  let originalContent = content;

  // Ensure tUI is imported
  if (content.includes('isEn ?') || content.includes('isRo ?')) {
    if (!content.includes("import { tUI }")) {
      // Find last import
      const imports = content.match(/import .*?;?\n/g);
      if (imports && imports.length > 0) {
        const lastImport = imports[imports.length - 1];
        content = content.replace(lastImport, lastImport + "import { tUI } from '@/utils/uiTranslations';\n");
      } else {
        content = "import { tUI } from '@/utils/uiTranslations';\n" + content;
      }
    }
  }

  // Common pattern: isEn ? "EN" : "RO"
  // regex to match: isEn\s*\?\s*(["'])(.*?)\1\s*:\s*(["'])(.*?)\3
  const regex1 = /isEn\s*\?\s*(["'])(.*?)\1\s*:\s*(["'])(.*?)\3/g;
  content = content.replace(regex1, (match, q1, en, q2, ro) => {
    addTranslation(en, ro);
    return `tUI("${en}", lang)`;
  });

  const regex2 = /isRo\s*\?\s*(["'])(.*?)\1\s*:\s*(["'])(.*?)\3/g;
  content = content.replace(regex2, (match, q1, ro, q2, en) => {
    addTranslation(en, ro);
    return `tUI("${en}", lang)`;
  });

  // Handle template literals `EN` : `RO`
  const regex3 = /isEn\s*\?\s*`(.*?)`\s*:\s*`(.*?)`/g;
  content = content.replace(regex3, (match, en, ro) => {
    addTranslation(en, ro);
    return `tUI(\`${en}\`, lang)`;
  });

  // Ensure component accepts lang if it uses tUI(..., lang)
  // For pages (export default async function Page({ params })) we have lang already.
  // For client components (const Component = () => {) we need ({ lang = 'en' }: { lang?: string })
  if (content.includes('tUI(') && content.includes('lang)')) {
    if (content.includes('const lang = pathname')) {
      content = content.replace(/const lang = pathname\?\.split\('\/'\)\[1\] \|\| 'en';/, '');
    }
    
    // Convert const Comp = () => to const Comp = ({ lang = 'en' }: { lang?: string }) =>
    const compRegex = /const ([A-Z][a-zA-Z0-9_]*) = \(\) => {/g;
    content = content.replace(compRegex, "const $1 = ({ lang = 'en' }: { lang?: string }) => {");
    
    // Also convert const Comp = ({ props }) => to accept lang
    const compRegex2 = /const ([A-Z][a-zA-Z0-9_]*) = \(\{ (.*?) \}\) => {/g;
    content = content.replace(compRegex2, (match, name, props) => {
      if (props.includes('lang')) return match;
      // if it has typescript types like { a: string }
      if (match.includes(':')) return match; // skip complex ones, we'll fix manually if needed
      return `const ${name} = ({ ${props}, lang = 'en' }: { ${props}: any, lang?: string }) => {`;
    });

    // Remove isEn = lang === 'en' if unused
    // But we might need isEn for other things, so let's just make sure it's defined
    if (!content.includes('const isEn') && content.includes('isEn')) {
      // It's probably defined, but just in case
    }
    
    // Fix isEn definition
    if (content.match(/const isEn = \(pathname \|\| "\/"\)\.startsWith\('\/en'\);/)) {
        content = content.replace(/const isEn = \(pathname \|\| "\/"\)\.startsWith\('\/en'\);/, "const isEn = lang === 'en';");
    }
  }

  if (content !== originalContent) {
    fs.writeFileSync(filePath, content, 'utf-8');
  }
}

const files = [
  "app/components/BeforeAfterGallery.tsx",
  "app/components/BlogArchiveClient.tsx",
  "app/components/BlogPostClient.tsx",
  "app/components/ContactClient.tsx",
  "app/components/QuizClient.tsx",
  "app/components/TrustBadges.tsx",
  "app/components/VideoTestimonials.tsx",
  "app/[lang]/about-us/page.tsx",
  "app/[lang]/blog/page.tsx",
  "app/[lang]/contact/page.tsx",
  "app/[lang]/faq/page.tsx",
  "app/[lang]/medical-comparison/page.tsx",
  "app/[lang]/privacy-policy/page.tsx",
  "app/[lang]/quiz/page.tsx",
  "components/AIAssistant.tsx",
  "components/AppointmentModal.tsx",
  "components/Breadcrumbs.tsx",
  "components/ClinicalBadges.tsx",
  "components/ComparisonSection.tsx",
  "components\ConsultationModal.tsx",
  "components/ContactForm.tsx",
  "components/CookieBanner.tsx",
  "components/CostEstimator.tsx",
  "components/FAQSection.tsx",
  "components/FloatingWhatsApp.tsx",
  "components/HumanTrust.tsx",
  "components/LogisticsHub.tsx",
  "components/MedicalDossier.tsx",
  "components/PatientJourneyCarousel.tsx",
  "components/PatientJourneyTimeline.tsx",
  "components/PremiumTreatmentSlider.tsx",
  "components/RecoverySimulator.tsx",
  "components/SafetyQualitySection.tsx",
  "components/ServicesSection.tsx",
  "components/SmartConcierge.tsx",
  "components/SuitabilityQuiz.tsx"
];

files.forEach(f => {
  const fp = path.join(__dirname, f);
  if (fs.existsSync(fp)) {
    processFile(fp);
  }
});

// Update uiTranslations.ts
let translationStr = '';
for (const [key, val] of Object.entries(T)) {
  if (!transContent.includes(`"${key}"`) && !transContent.includes(`'${key}'`)) {
    translationStr += `  "${key}": ${JSON.stringify(val)},\n`;
  }
}

if (translationStr) {
  transContent = transContent.replace(/export const T: Record<string, Record<string, string>> = \{/, 'export const T: Record<string, Record<string, string>> = {\n' + translationStr);
  fs.writeFileSync(transPath, transContent, 'utf-8');
}

console.log("Done refactoring.");
