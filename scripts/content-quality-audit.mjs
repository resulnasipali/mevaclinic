// scripts/content-quality-audit.mjs
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { spawn } from 'child_process';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT_DIR = path.resolve(__dirname, '..');

// Elegant wrapper to automatically run with tsx if started with plain node
if (!process.execArgv.join(' ').includes('tsx') && !process.env.TSX_CHILD) {
  const child = spawn('npx.cmd', ['tsx', __filename], {
    env: { ...process.env, TSX_CHILD: '1' },
    stdio: 'inherit',
    shell: true
  });
  child.on('exit', (code) => {
    process.exit(code || 0);
  });
} else {
  runAuditWrapper();
}

async function runAuditWrapper() {
  // Dynamically import TS modules since we are running inside tsx context now
  const { treatmentsData } = await import('../data/treatmentsData.ts');
  const { blogPosts } = await import('../data/blogData.js');

  // Helper to count words
  function countWords(str) {
    if (!str || typeof str !== 'string') return 0;
    return str.split(/\s+/).filter(w => w.length > 0).length;
  }

  // Helper to get nested word count
  function getNestedWordCount(obj) {
    if (!obj) return 0;
    if (typeof obj === 'string') return countWords(obj);
    if (Array.isArray(obj)) {
      return obj.reduce((sum, item) => sum + getNestedWordCount(item), 0);
    }
    if (typeof obj === 'object') {
      return Object.values(obj).reduce((sum, val) => sum + getNestedWordCount(val), 0);
    }
    return 0;
  }

  function getSafeVal(val, locale) {
    if (!val) return '';
    if (Array.isArray(val)) return val.join(', ');
    if (typeof val === 'object') {
      return val[locale] || val['en'] || Object.values(val)[0] || '';
    }
    return val;
  }

  // List of all supported languages
  const LOCALES = ['en', 'ro', 'es', 'it', 'ru', 'fr', 'de'];

  console.log('=== STARTING SITEWIDE CONTENT QUALITY, METADATA, AND TRUST AUDIT ===');
  
  const issues = [];
  
  // -------------------------------------------------------------
  // 1 & 2 & 6. METADATA TITLE & TREATMENT NAME CASING & TAB QUALITY
  // -------------------------------------------------------------
  const lowercaseTreatmentTerms = [
    'gastric sleeve', 'gastric bypass', 'gastric balloon', 'vaser liposuction',
    'piezo rhinoplasty', 'hair transplant', 'dental implants', 'zirconium crowns',
    'organ transplant', 'breast augmentation', 'deep plane facelift', 'cyberknife',
    'sapphire fue', 'gastric botox', 'mixed hair'
  ];

  // Audit Treatment Meta Titles & Casing
  treatmentsData.forEach(treatment => {
    LOCALES.forEach(lang => {
      const metaTitle = getSafeVal(treatment.metaTitle, lang);
      const title = getSafeVal(treatment.title, lang);
      
      if (!metaTitle) {
        issues.push({
          source: `data/treatmentsData.ts (id: ${treatment.id}, lang: ${lang})`,
          type: 'Missing Meta Title',
          currentValue: '',
          recommendedValue: `Premium ${title} in Istanbul | Meva Clinic`,
          risk: 'High',
          seoImpact: 'Critical - Missing search engine title',
          impactType: 'metadata',
          safeToAutoFix: 'yes',
          manualApproval: 'no'
        });
        return;
      }

      // Check lowercase treatment terms in metaTitle
      lowercaseTreatmentTerms.forEach(term => {
        if (metaTitle.toLowerCase().includes(term) && metaTitle.includes(term)) {
          const capitalizedTerm = term.split(' ').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
          const correctedTitle = metaTitle.replace(term, capitalizedTerm);
          issues.push({
            source: `data/treatmentsData.ts (id: ${treatment.id}, lang: ${lang})`,
            type: 'Metadata Casing Issue',
            currentValue: metaTitle,
            recommendedValue: correctedTitle,
            risk: 'Medium',
            seoImpact: 'Medium - Lowercase keyword in SERP reduces click-through rate',
            impactType: 'metadata',
            safeToAutoFix: 'yes',
            manualApproval: 'no'
          });
        }
      });

      // Browser tab title quality checks
      if (metaTitle.length > 70) {
        issues.push({
          source: `data/treatmentsData.ts (id: ${treatment.id}, lang: ${lang})`,
          type: 'Tab Title Too Long',
          currentValue: metaTitle,
          recommendedValue: metaTitle.substring(0, 60) + ' | Meva Clinic',
          risk: 'Low',
          seoImpact: 'Low - Title truncated in Google search results',
          impactType: 'metadata',
          safeToAutoFix: 'no',
          manualApproval: 'yes'
        });
      }
      if (!metaTitle.includes('Meva Clinic') && !metaTitle.includes('Clínica Meva') && !metaTitle.includes('Clinique Méva') && !metaTitle.includes('Clinica Meva') && !metaTitle.includes('Meva-Klinik') && !metaTitle.includes('Клиника Мева')) {
        issues.push({
          source: `data/treatmentsData.ts (id: ${treatment.id}, lang: ${lang})`,
          type: 'Tab Title Missing Brand',
          currentValue: metaTitle,
          recommendedValue: `${metaTitle} | Meva Clinic`,
          risk: 'Medium',
          seoImpact: 'Medium - Brand consistency and trust signal missing',
          impactType: 'metadata',
          safeToAutoFix: 'yes',
          manualApproval: 'no'
        });
      }
    });
  });

  // Audit Blog Meta Titles
  blogPosts.forEach(post => {
    LOCALES.forEach(lang => {
      const metaTitle = getSafeVal(post.metaTitle, lang);
      const title = getSafeVal(post.title, lang);

      if (!metaTitle) {
        issues.push({
          source: `data/blogData.js (slug: ${post.slug}, lang: ${lang})`,
          type: 'Missing Meta Title',
          currentValue: '',
          recommendedValue: `${title} | Meva Clinic Blog`,
          risk: 'High',
          seoImpact: 'Critical',
          impactType: 'metadata',
          safeToAutoFix: 'yes',
          manualApproval: 'no'
        });
        return;
      }

      // Check for casing issues in blog titles
      lowercaseTreatmentTerms.forEach(term => {
        if (metaTitle.toLowerCase().includes(term) && metaTitle.includes(term)) {
          const capitalizedTerm = term.split(' ').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
          const correctedTitle = metaTitle.replace(term, capitalizedTerm);
          issues.push({
            source: `data/blogData.js (slug: ${post.slug}, lang: ${lang})`,
            type: 'Metadata Casing Issue',
            currentValue: metaTitle,
            recommendedValue: correctedTitle,
            risk: 'Medium',
            seoImpact: 'Medium - Lowercase keyword in SERP',
            impactType: 'metadata',
            safeToAutoFix: 'yes',
            manualApproval: 'no'
          });
        }
      });
    });
  });

  // -------------------------------------------------------------
  // 3. DUPLICATE TITLES AND META DESCRIPTIONS (Sitewide)
  // -------------------------------------------------------------
  LOCALES.forEach(locale => {
    const titlesSeen = {};
    const descsSeen = {};

    treatmentsData.forEach(t => {
      const title = getSafeVal(t.metaTitle, locale);
      const desc = getSafeVal(t.metaDesc, locale);
      if (title) {
        if (!titlesSeen[title]) titlesSeen[title] = [];
        titlesSeen[title].push({ id: t.id, type: 'treatment' });
      }
      if (desc) {
        if (!descsSeen[desc]) descsSeen[desc] = [];
        descsSeen[desc].push({ id: t.id, type: 'treatment' });
      }
    });

    blogPosts.forEach(p => {
      const title = getSafeVal(p.metaTitle, locale);
      const desc = getSafeVal(p.metaDesc, locale);
      if (title) {
        if (!titlesSeen[title]) titlesSeen[title] = [];
        titlesSeen[title].push({ id: p.slug, type: 'blog' });
      }
      if (desc) {
        if (!descsSeen[desc]) descsSeen[desc] = [];
        descsSeen[desc].push({ id: p.slug, type: 'blog' });
      }
    });

    Object.keys(titlesSeen).forEach(titleVal => {
      if (titlesSeen[titleVal].length > 1) {
        issues.push({
          source: `Duplicate title detection (lang: ${locale})`,
          type: 'Duplicate Meta Title',
          currentValue: `Duplicated on: ${titlesSeen[titleVal].map(x => `${x.type}:${x.id}`).join(', ')}`,
          recommendedValue: 'Customize each title for strict distinctness',
          risk: 'High',
          seoImpact: 'High - Title cannibalization risk',
          impactType: 'metadata',
          safeToAutoFix: 'no',
          manualApproval: 'yes'
        });
      }
    });

    Object.keys(descsSeen).forEach(descVal => {
      if (descsSeen[descVal].length > 1) {
        issues.push({
          source: `Duplicate desc detection (lang: ${locale})`,
          type: 'Duplicate Meta Description',
          currentValue: `Duplicated on: ${descsSeen[descVal].map(x => `${x.type}:${x.id}`).join(', ')}`,
          recommendedValue: 'Customize each description for strict distinctness',
          risk: 'Medium',
          seoImpact: 'Medium - Duplicate snippet display',
          impactType: 'metadata',
          safeToAutoFix: 'no',
          manualApproval: 'yes'
        });
      }
    });
  });

  // -------------------------------------------------------------
  // 4. H1/TITLE MISMATCHES
  // -------------------------------------------------------------
  treatmentsData.forEach(treatment => {
    LOCALES.forEach(lang => {
      const h1 = getSafeVal(treatment.title, lang);
      const metaTitle = getSafeVal(treatment.metaTitle, lang);
      if (!h1 || !metaTitle) return;

      const h1Clean = h1.toLowerCase().replace(/[^a-z0-9]/g, ' ');
      const metaClean = metaTitle.toLowerCase().replace(/[^a-z0-9]/g, ' ');

      const h1Words = h1Clean.split(/\s+/).filter(w => w.length > 3);
      const matchedWords = h1Words.filter(word => metaClean.includes(word));

      if (matchedWords.length === 0 && h1Words.length > 0) {
        issues.push({
          source: `data/treatmentsData.ts (id: ${treatment.id}, lang: ${lang})`,
          type: 'H1/Title Mismatch',
          currentValue: `H1: "${h1}" | MetaTitle: "${metaTitle}"`,
          recommendedValue: `Align key topic words in H1 and Meta Title`,
          risk: 'Medium',
          seoImpact: 'Medium - Search engines rewrite titles due to semantic misalignment',
          impactType: 'visible content vs metadata',
          safeToAutoFix: 'no',
          manualApproval: 'yes'
        });
      }
    });
  });

  // -------------------------------------------------------------
  // 5. META DESCRIPTION QUALITY
  // -------------------------------------------------------------
  treatmentsData.forEach(t => {
    LOCALES.forEach(lang => {
      const desc = getSafeVal(t.metaDesc, lang);
      if (!desc) return;
      if (desc.length < 100) {
        issues.push({
          source: `data/treatmentsData.ts (id: ${t.id}, lang: ${lang})`,
          type: 'Meta Description Too Short',
          currentValue: `Length: ${desc.length} chars`,
          recommendedValue: `Expand to 120-155 characters`,
          risk: 'Low',
          seoImpact: 'Low - Low keyword enrichment',
          impactType: 'metadata',
          safeToAutoFix: 'no',
          manualApproval: 'yes'
        });
      } else if (desc.length > 165) {
        issues.push({
          source: `data/treatmentsData.ts (id: ${t.id}, lang: ${lang})`,
          type: 'Meta Description Too Long',
          currentValue: `Length: ${desc.length} chars`,
          recommendedValue: `Truncate to under 160 characters`,
          risk: 'Low',
          seoImpact: 'Low - SERP truncation',
          impactType: 'metadata',
          safeToAutoFix: 'no',
          manualApproval: 'yes'
        });
      }
    });
  });

  // -------------------------------------------------------------
  // 7 & 8. DOCTOR / REVIEWER / SCHEMA CONSISTENCY
  // -------------------------------------------------------------
  treatmentsData.forEach(t => {
    if (!t.expert) {
      issues.push({
        source: `data/treatmentsData.ts (id: ${t.id})`,
        type: 'Missing Expert / Clinical Lead',
        currentValue: 'empty',
        recommendedValue: `Assign a specific Clinical Lead`,
        risk: 'High',
        seoImpact: 'High - Missing E-E-A-T signals',
        impactType: 'visible content / schema',
        safeToAutoFix: 'no',
        manualApproval: 'yes'
      });
    }
  });

  blogPosts.forEach(p => {
    if (!p.authorFullName && !p.author) {
      issues.push({
        source: `data/blogData.js (slug: ${p.slug})`,
        type: 'Missing Reviewer / Author Bylines',
        currentValue: 'empty',
        recommendedValue: 'Assign a clinical author',
        risk: 'High',
        seoImpact: 'High - Loss of E-E-A-T',
        impactType: 'visible content / schema',
        safeToAutoFix: 'no',
        manualApproval: 'yes'
      });
    }
  });

  // -------------------------------------------------------------
  // 10 & 11 & 12. COPYWRITING, MEDICAL CLAIMS, AUTHORITY CLAIMS
  // -------------------------------------------------------------
  const riskyTerms = [
    { term: '100%', recommendation: 'replace with high percentage or range' },
    { term: 'guarantee', recommendation: 'replace with commitment to care or quality' },
    { term: 'cure', recommendation: 'replace with treat or manage' },
    { term: 'safest', recommendation: 'replace with highly secure or utilizing strict safety protocols' },
    { term: 'no risks', recommendation: 'replace with minimized risk profiles' }
  ];

  treatmentsData.forEach(t => {
    LOCALES.forEach(lang => {
      const text = JSON.stringify(t);
      riskyTerms.forEach(item => {
        if (text.toLowerCase().includes(item.term)) {
          issues.push({
            source: `data/treatmentsData.ts (id: ${t.id}, lang: ${lang})`,
            type: 'Medical Claim Risk',
            currentValue: `Contains absolute claim term "${item.term}"`,
            recommendedValue: `Rephrase: ${item.recommendation}`,
            risk: 'High',
            seoImpact: 'High - Trustworthiness penalty',
            impactType: 'visible content',
            safeToAutoFix: 'no',
            manualApproval: 'yes'
          });
        }
      });
    });
  });

  // -------------------------------------------------------------
  // 13 & 14. INTERNAL LINK LABEL VS TARGET MISMATCH
  // -------------------------------------------------------------
  const linkRegex = /href=["']([^"']+)["']/g;
  treatmentsData.forEach(t => {
    LOCALES.forEach(lang => {
      const seoText = getSafeVal(t.semanticSeoText, lang);
      if (!seoText) return;

      let match;
      while ((match = linkRegex.exec(seoText)) !== null) {
        const href = match[1];
        if (href.startsWith('/') || href.includes('mevaclinic.com')) {
          const cleanHref = href.replace(/https?:\/\/(www\.)?mevaclinic\.com/, '');
          
          const deprecatedSlugs = [
            'hair-transplant-dhi', 'hair-transplant-sapphire-fue', 'gastric-balloon-allurion',
            'full-mouth-dental-implants', 'zirconium-dental-crowns', 'rhinoplasty-nose-job'
          ];
          
          deprecatedSlugs.forEach(slug => {
            if (cleanHref.includes(slug)) {
              const correctedSlug = slug === 'rhinoplasty-nose-job' ? 'piezo-rhinoplasty' : 
                                    slug === 'zirconium-dental-crowns' ? 'zirconium-crowns' : 
                                    slug === 'hair-transplant-dhi' ? 'dhi-hair-transplant' :
                                    slug === 'hair-transplant-sapphire-fue' ? 'meva-mixed-hair' :
                                    slug === 'gastric-balloon-allurion' ? 'gastric-balloon' :
                                    'all-on-4-dental';
              issues.push({
                source: `data/treatmentsData.ts (id: ${t.id}, lang: ${lang})`,
                type: 'Internal Link Target Mismatch',
                currentValue: `Link points to deprecated route: "${href}"`,
                recommendedValue: `Update to active route: "${href.replace(slug, correctedSlug)}"`,
                risk: 'High',
                seoImpact: 'High - Unnecessary redirect chain',
                impactType: 'visible content',
                safeToAutoFix: 'yes',
                manualApproval: 'no'
              });
            }
          });

          if (cleanHref.includes('undefined')) {
            issues.push({
              source: `data/treatmentsData.ts (id: ${t.id}, lang: ${lang})`,
              type: 'Internal Link Target Mismatch',
              currentValue: `Link target contains "undefined"`,
              recommendedValue: `Resolve link routing: "${href}"`,
              risk: 'Critical',
              seoImpact: 'Critical - Broken internal link',
              impactType: 'visible content',
              safeToAutoFix: 'yes',
              manualApproval: 'no'
            });
          }
        }
      }
    });
  });

  // -------------------------------------------------------------
  // 16 & 17. PLACEHOLDER / THIN CONTENT / EMPTY BLOG CONTENT
  // -------------------------------------------------------------
  blogPosts.forEach(p => {
    LOCALES.forEach(lang => {
      const h1 = getSafeVal(p.title, lang);
      const excerpt = getSafeVal(p.excerpt, lang);
      
      let bodyText = 0;
      if (p.content && p.content[lang]) {
        bodyText = getNestedWordCount(p.content[lang]);
      } else {
        bodyText = getNestedWordCount(p.content);
      }

      const totalWords = countWords(h1) + countWords(excerpt) + bodyText;

      if (totalWords < 200) {
        issues.push({
          source: `data/blogData.js (slug: ${p.slug}, lang: ${lang})`,
          type: 'Thin Page Content',
          currentValue: `Total word count: ${totalWords} words`,
          recommendedValue: `Expand blog post content to >500 words`,
          risk: 'High',
          seoImpact: 'High - Low ranking value',
          impactType: 'visible content',
          safeToAutoFix: 'no',
          manualApproval: 'yes'
        });
      }

      const contentStr = JSON.stringify(p);
      const matchedPlaceholder = contentStr.match(/\b(TODO|TBD|Lorem Ipsum|placeholder)\b/);
      if (matchedPlaceholder) {
        issues.push({
          source: `data/blogData.js (slug: ${p.slug}, lang: ${lang})`,
          type: 'Placeholder Content',
          currentValue: `Contains placeholder text: "${matchedPlaceholder[0]}"`,
          recommendedValue: `Replace with professional clinical text`,
          risk: 'Critical',
          seoImpact: 'Critical - Indexation blocker',
          impactType: 'visible content',
          safeToAutoFix: 'no',
          manualApproval: 'yes'
        });
      }
    });
  });

  // Verify treatments word count
  treatmentsData.forEach(t => {
    LOCALES.forEach(lang => {
      const h1 = getSafeVal(t.title, lang);
      const shortDesc = getSafeVal(t.shortDesc, lang);
      const seoText = getSafeVal(t.semanticSeoText, lang);
      const totalWords = countWords(h1) + countWords(shortDesc) + countWords(seoText);

      if (totalWords < 150) {
        issues.push({
          source: `data/treatmentsData.ts (id: ${t.id}, lang: ${lang})`,
          type: 'Thin Page Content',
          currentValue: `Total word count: ${totalWords} words`,
          recommendedValue: `Expand treatment page description with technical parameters`,
          risk: 'High',
          seoImpact: 'High - Low semantic value',
          impactType: 'visible content',
          safeToAutoFix: 'no',
          manualApproval: 'yes'
        });
      }
    });
  });

  // Output summary
  console.log(`\nAudit complete! Found ${issues.length} potential issues.`);

  const auditReportPath = path.join(ROOT_DIR, 'scripts/live_audit_results.json');
  fs.writeFileSync(auditReportPath, JSON.stringify(issues, null, 2));
  console.log(`Results cached to: ${auditReportPath}\n`);

  // Print top 20 issues
  console.log('--- TOP 20 ISSUES FOUND ---');
  issues.slice(0, 20).forEach((issue, idx) => {
    console.log(`${idx + 1}. [${issue.risk}] ${issue.type} - ${issue.source}`);
    console.log(`   Current: ${issue.currentValue}`);
    console.log(`   Recommend: ${issue.recommendedValue}`);
    console.log(`   Safe to auto-fix: ${issue.safeToAutoFix} | Manual approval: ${issue.manualApproval}\n`);
  });
}
