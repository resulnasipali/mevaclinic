const fs = require('fs');
const path = require('path');

function fixFile(file, originalRegex, replacement) {
  const fp = path.join(__dirname, file);
  if (!fs.existsSync(fp)) return;
  let content = fs.readFileSync(fp, 'utf-8');
  content = content.replace(originalRegex, replacement);
  fs.writeFileSync(fp, content, 'utf-8');
}

fixFile(
  'components/Breadcrumbs.tsx', 
  /const Breadcrumbs = \(\{ isEn = false, items = \[\], lang = 'en' \}: \{ isEn = false, items = \[\]: any, lang\?: string \}\) => \{/,
  "const Breadcrumbs = ({ isEn = false, items = [], lang = 'en' }: { isEn?: boolean, items?: any[], lang?: string }) => {"
);

fixFile(
  'components/FAQSection.tsx', 
  /const FAQSection = \(\{ isEn = false, category = null, lang = 'en' \}: \{ isEn = false, category = null: any, lang\?: string \}\) => \{/,
  "const FAQSection = ({ isEn = false, category = null, lang = 'en' }: { isEn?: boolean, category?: any, lang?: string }) => {"
);

fixFile(
  'components/HumanTrust.tsx',
  /const HumanTrust = \(\{ isEn = false, lang = 'en' \}: \{ isEn = false: any, lang\?: string \}\) => \{/,
  "const HumanTrust = ({ isEn = false, lang = 'en' }: { isEn?: boolean, lang?: string }) => {"
);

fixFile(
  'components/LogisticsHub.tsx',
  /const LogisticsHub = \(\{ isEn = false, lang = 'en' \}: \{ isEn = false: any, lang\?: string \}\) => \{/,
  "const LogisticsHub = ({ isEn = false, lang = 'en' }: { isEn?: boolean, lang?: string }) => {"
);

fixFile(
  'components/RecoverySimulator.tsx',
  /const RecoverySimulator = \(\{ type = 'bariatric', isEn = true, lang = 'en' \}: \{ type = 'bariatric', isEn = true: any, lang\?: string \}\) => \{/,
  "const RecoverySimulator = ({ type = 'bariatric', isEn = true, lang = 'en' }: { type?: string, isEn?: boolean, lang?: string }) => {"
);

console.log("Types fixed.");
