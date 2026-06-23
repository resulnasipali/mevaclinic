# Sitewide Content-Quality, Metadata, and Medical Trust Audit

This document presents the full, sitewide audit for Meva Clinic's Next.js web application. It reviews metadata casing, browser tab title quality, duplicate titles/descriptions, H1 mismatches, medical claim risks, doctor-reviewer inconsistencies, schema safety, and internal link alignments.

---

## 1. Metadata Title Casing Issues

### Audit Summary
Metadata titles across multiple treatment and blog pages contain lowercase keywords or lowercase treatment names in English (`en`) and Romanian (`ro`). Capitalizing these terms increases trust, complies with standard title casing in search engine results pages (SERPs), and improves Click-Through Rate (CTR).

### Issues Identified

| File / Page URL | Issue Type | Current Value | Recommended Value | Risk Level | SEO/GEO Impact | Impact Type | Safe to Auto-fix | Manual Approval Required |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| `data/treatmentsData.ts` (`gastric-sleeve`) | Lowercase Treatment Name | `Premium gastric sleeve in Istanbul \| Meva Clinic` | `Premium Gastric Sleeve in Istanbul \| Meva Clinic` | Medium | CTR decrease | Metadata | Yes | No |
| `data/treatmentsData.ts` (`gastric-bypass`) | Lowercase Treatment Name | `Premium gastric bypass in Istanbul \| Meva Clinic` | `Premium Gastric Bypass in Istanbul \| Meva Clinic` | Medium | CTR decrease | Metadata | Yes | No |
| `data/treatmentsData.ts` (`gastric-balloon`) | Lowercase Treatment Name | `Premium gastric balloon in Istanbul \| Meva Clinic` | `Premium Gastric Balloon in Istanbul \| Meva Clinic` | Medium | CTR decrease | Metadata | Yes | No |
| `data/treatmentsData.ts` (`gastric-botox`) | Lowercase Treatment Name | `Premium gastric botox in Istanbul \| Meva Clinic` | `Premium Gastric Botox in Istanbul \| Meva Clinic` | Medium | CTR decrease | Metadata | Yes | No |
| `data/treatmentsData.ts` (`dhi-hair-transplant`) | Lowercase Treatment Name | `Premium dhi hair transplant in Istanbul \| Meva Clinic` | `Premium DHI Hair Transplant in Istanbul \| Meva Clinic` | Medium | CTR decrease | Metadata | Yes | No |
| `data/treatmentsData.ts` (`piezo-rhinoplasty`) | Lowercase Treatment Name | `Premium piezo rhinoplasty in Istanbul \| Meva Clinic` | `Premium Piezo Rhinoplasty in Istanbul \| Meva Clinic` | Medium | CTR decrease | Metadata | Yes | No |
| `data/treatmentsData.ts` (`vaser-liposuction`) | Lowercase Treatment Name | `Premium vaser liposuction in Istanbul \| Meva Clinic` | `Premium Vaser Liposuction in Istanbul \| Meva Clinic` | Medium | CTR decrease | Metadata | Yes | No |
| `data/treatmentsData.ts` (`zirconium-crowns`) | Lowercase Treatment Name | `Premium zirconium crowns in Istanbul \| Meva Clinic` | `Premium Zirconium Crowns in Istanbul \| Meva Clinic` | Medium | CTR decrease | Metadata | Yes | No |
| `data/treatmentsData.ts` (`dental-implants`) | Lowercase Treatment Name | `Premium dental implants in Istanbul \| Meva Clinic` | `Premium Dental Implants in Istanbul \| Meva Clinic` | Medium | CTR decrease | Metadata | Yes | No |
| `data/treatmentsData.ts` (`breast-augmentation`) | Lowercase Treatment Name | `Premium breast augmentation in Istanbul \| Meva Clinic` | `Premium Breast Augmentation in Istanbul \| Meva Clinic` | Medium | CTR decrease | Metadata | Yes | No |
| `data/treatmentsData.ts` (`deep-plane-facelift`) | Lowercase Treatment Name | `Premium deep plane facelift in Istanbul \| Meva Clinic` | `Premium Deep Plane Facelift in Istanbul \| Meva Clinic` | Medium | CTR decrease | Metadata | Yes | No |
| `data/treatmentsData.ts` (`organ-transplant-turkey`) | Lowercase Treatment Name | `Premium organ transplant turkey in Istanbul \| Meva Clinic` | `Premium Organ Transplant in Turkey \| Meva Clinic` | Medium | CTR decrease | Metadata | Yes | No |
| `data/blogData.js` (`cyberknife-s7-oncology`) | Lowercase Blog Keyword | `Latest Medical Insights on cyberknife s7 oncology...` | `Latest Medical Insights on CyberKnife S7 Oncology...` | Medium | CTR decrease | Metadata | Yes | No |
| `data/blogData.js` (`organ-transplant-ethics-excellence`) | Lowercase Blog Keyword | `Latest Medical Insights on organ transplant ethics...` | `Latest Medical Insights on Organ Transplant Ethics...` | Medium | CTR decrease | Metadata | Yes | No |
| `data/blogData.js` (`evolution-sapphire-fue`) | Lowercase Blog Keyword | `Latest Medical Insights on evolution sapphire fue...` | `Latest Medical Insights on Evolution of Sapphire FUE...` | Medium | CTR decrease | Metadata | Yes | No |

---

## 2. Meta Description Issues

### Audit Summary
Meta descriptions for bariatric, plastic, and dental treatments are fully translated but vary in length:
1. **Descriptions too long (>165 characters)**: Cause Google to truncate the snippet in search results, creating cut-off sentences. (70 occurrences found, primarily on German, Russian, and Italian pages where translated phrases naturally expand).
2. **Descriptions too short (<100 characters)**: Fail to fully utilize the available SERP real estate to promote the clinic's VIP benefits. (2 occurrences found).

### Issues Identified

| File / Page URL | Issue Type | Current Value | Recommended Value | Risk Level | SEO/GEO Impact | Impact Type | Safe to Auto-fix | Manual Approval Required |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| `data/treatmentsData.ts` (`gastric-sleeve` DE) | Meta Description Too Long | `Entdecken Sie erstklassige Schlauchmagen in der Meva Clinic...` (172 chars) | Truncate and optimize: `Premium Schlauchmagen-OP in Istanbul bei der Meva Clinic. JCI-akkreditierte Chirurgen & VIP All-Inclusive-Paket.` | Low | Snippet truncation | Metadata | No | Yes |
| `data/treatmentsData.ts` (Various RU pages) | Meta Description Too Long | Meta descriptions translated to Russian exceed 170 characters due to language structure. | Rephrase to shorter active voice Russian summaries under 155 characters. | Low | Snippet truncation | Metadata | No | Yes |
| `data/treatmentsData.ts` (`anti-gravity-lifting` EN) | Meta Description Too Short | Short, plain descriptions under 95 characters. | Expand to: `Experience premium Anti-Gravity lifting treatments in Istanbul at Meva Clinic. Non-invasive face contouring and VIP recovery included.` | Low | Lower CTR | Metadata | No | Yes |

---

## 3. H1/Title Mismatch Issues

### Audit Summary
A semantic mismatch exists on dynamic pages where the metadata title (`metaTitle`) contains regional targeting keywords (e.g., "in Istanbul") while the visible H1 page title (`title`) contains the generic medical procedure name. Search engine systems (like Google's RankBrain and AI crawlers) prefer semantic alignment.

### Issues Identified

| File / Page URL | Issue Type | Current Value | Recommended Value | Risk Level | SEO/GEO Impact | Impact Type | Safe to Auto-fix | Manual Approval Required |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| `data/treatmentsData.ts` (All treatments) | H1 vs Title targeting difference | H1: `Gastric Sleeve (Sleeve Gastrectomy)` <br> MetaTitle: `Premium Gastric Sleeve in Istanbul \| Meva Clinic` | Normal SEO optimization pattern, but ensure H1 terms are present in Meta Title. | Low | Minor RankBrain semantic mismatch | Visible vs Metadata | No | Yes (SEO standard) |
| `app/[lang]/blog/[slug]/page.tsx` | Ignored data-model metadata | Blog page template generateMetadata ignores the custom `post.metaTitle` and `post.metaDesc` properties and autogenerates a title using `${currentTitle} \| Meva Clinic Blog` | Modify `generateMetadata` in `blog/[slug]/page.tsx` to read `post.metaTitle` and `post.metaDesc` if defined in the data model. | High | Loss of optimized custom SERP keywords | Metadata | Yes | No |

---

## 4. Doctor and Reviewer Consistency Issues

### Audit Summary
A significant trust and E-E-A-T inconsistency exists between the displayed **Clinical Lead (expert)** and the **Medically Reviewed By (reviewer)** section on multiple treatment and blog pages. AI/GEO Search systems cross-reference these schema nodes.

### Issues Identified

| File / Page URL | Issue Type | Current Main Doctor (Clinical Lead) | Resolved Reviewer (schema/visible) | Recommended Alignment | Risk Level | SEO/GEO Impact | Safe to Auto-fix | Manual Approval |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| `treatments/zirconium-crowns` | Doctor Identity Mismatch | `Dr. Yusuf` | `Dr. Osman B.` | Align visible lead and reviewer: Use `Meva Clinic Medical Editorial Team` or update lead to match reviewer. | High | E-E-A-T / Entity trust | No | Yes |
| `treatments/hollywood-smile` | Doctor Identity Mismatch | `Dr. Yusuf` | `Dr. Osman B.` | Align visible lead and reviewer | High | E-E-A-T / Entity trust | No | Yes |
| `treatments/all-on-4-dental` | Doctor Identity Mismatch | `Dr. Yusuf` | `Dr. Osman B.` | Align visible lead and reviewer | High | E-E-A-T / Entity trust | No | Yes |
| `treatments/piezo-rhinoplasty` | Doctor Identity Mismatch | `Prof. Dr. Emre` | `Prof. Dr. Yakup S.` | Align visible lead and reviewer | High | E-E-A-T / Entity trust | No | Yes |
| `treatments/abdominoplasty-tummy` | Doctor Identity Mismatch | `Op. Dr. Yunus` | `Prof. Dr. Yakup S.` | Align visible lead and reviewer | High | E-E-A-T / Entity trust | No | Yes |
| `treatments/deep-plane-facelift` | Doctor Identity Mismatch | `Op. Dr. Yunus` | `Prof. Dr. Yakup S.` | Align visible lead and reviewer | High | E-E-A-T / Entity trust | No | Yes |
| `treatments/blepharoplasty-eyelid` | Doctor Identity Mismatch | `Op. Dr. Yunus` | `Prof. Dr. Yakup S.` | Align visible lead and reviewer | High | E-E-A-T / Entity trust | No | Yes |
| `treatments/gynecomastia-male` | Doctor Identity Mismatch | `Op. Dr. Yunus` | `Prof. Dr. Yakup S.` | Align visible lead and reviewer | High | E-E-A-T / Entity trust | No | Yes |
| `treatments/otoplasty-ear` | Doctor Identity Mismatch | `Prof. Dr. Emre` | `Prof. Dr. Yakup S.` | Align visible lead and reviewer | High | E-E-A-T / Entity trust | No | Yes |
| `treatments/arm-thigh-lift` | Doctor Identity Mismatch | `Op. Dr. Yunus` | `Prof. Dr. Yakup S.` | Align visible lead and reviewer | High | E-E-A-T / Entity trust | No | Yes |
| `treatments/mentoplasty-chin` | Doctor Identity Mismatch | `Prof. Dr. Emre` | `Prof. Dr. Yakup S.` | Align visible lead and reviewer | High | E-E-A-T / Entity trust | No | Yes |
| `treatments/ligamentolysis-andrology` | Lead vs Organization Reviewer | `MD Victor` | `Meva Medical Board` | Set reviewer to `Meva Clinic Medical Editorial Team` (Organization) for consistency. | Medium | E-E-A-T alignment | No | Yes |
| `blog/bariatric-precision-robotics` | Mismatched Expert Specialty | `MD Harun A.` (Hair restoration) | `Dr. Cuma M.` (Bariatric surgeon) | **CRITICAL MISMATCH**: Author must be changed to `Dr. Cuma M.` or `Meva Clinic Medical Board`. A hair specialist cannot author bariatric surgery insights. | High | E-E-A-T / Search Engine penalty | No | Yes |
| `blog/cyberknife-s7-oncology` | Doctor Identity Mismatch | `Prof. Dr. Mehmet Y.` | `Prof. Dr. Gökhan K.` | Set author to match reviewer `Prof. Dr. Gökhan K.`. | High | E-E-A-T / Entity trust | No | Yes |
| `blog/exosome-therapy-healing` | Doctor Identity Mismatch | `Dr. Ayşe K.` | `Prof. Dr. Yakup S.` | Set author to match reviewer `Prof. Dr. Yakup S.`. | High | E-E-A-T / Entity trust | No | Yes |

---

## 5. Schema/Entity Mismatch Issues

### Audit Summary
1. In `app/[lang]/blog/[slug]/page.tsx`, the custom optimized metadata (`metaTitle` and `metaDesc`) from `data/blogData.js` is ignored. This causes a discrepancy between search snippets and page schema mappings.
2. The `reviewedBy` node in JSON-LD maps to the designated reviewer (e.g. `Dr. Osman B.`), but the displayed lead is `Dr. Yusuf`. Crawlers parsing the page HTML notice a mismatch between the schema reviewer entity and the visible clinical author entity.

### Issues Identified

| File / Page URL | Issue Type | Current Wrong Value | Recommended Value | Risk Level | SEO/GEO Impact | Safe to Auto-fix | Manual Approval |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| `app/[lang]/blog/[slug]/page.tsx` | Schema / Metadata Discrepancy | Metadata generated using `currentTitle` while ignoring custom `metaTitle`. | Update `generateMetadata` to fallback to `post.metaTitle` if present. | High | Inconsistent search snippets | Yes | No |
| `app/[lang]/treatments/[slug]/page.tsx` | Schema Reviewer vs visible Lead | Visible: `Dr. Yusuf` <br> Schema reviewedBy: `Dr. Osman B.` | Align visible Clinical Lead with the schema reviewer profile. | High | AI Search engine entity rejection | No | Yes |

---

## 6. Grammar and Copywriting Issues

### Audit Summary
Metadata titles translated into German, French, and Italian are grammatically correct but sound slightly awkward or generic. Adding action verbs or standard regional terms improves the professional quality.

### Issues Identified

| File / Page URL | Issue Type | Current Value | Recommended Value | Risk Level | SEO/GEO Impact | Safe to Auto-fix | Manual Approval |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| `data/treatmentsData.ts` (German pages) | Awkward phrasing | `Premium-Magenbypass in Istanbul` | `Premium-Magenbypass-Operation in Istanbul` | Low | CTR and user trust | Yes | No |
| `data/treatmentsData.ts` (Russian pages) | Translation styling | `Желудочный рукав премиум-класса` | `Рукавная резекция желудка премиум-класса` (Standard Russian medical term) | Low | CTR and search volume | Yes | No |

---

## 7. Medical Claim Risk Issues

### Audit Summary
To satisfy Google’s Quality Rater Guidelines (E-E-A-T) and general advertising standards for medical tourism, absolute claims (e.g. "100%", "guaranteed", "no risks") must be soft-claimed or rephrased.

### Issues Identified

| File / Page URL | Issue Type | Current Value | Recommended Value | Risk Level | SEO/GEO Impact | Safe to Auto-fix | Manual Approval |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| `data/treatmentsData.ts` (`gastric-sleeve`) | absolute claim | `success rate is over 90%` / `guaranteed` | `success rate exceeds 90% in clinical follow-ups` | High | Google Medical Update ranking penalty | No | Yes |
| `data/treatmentsData.ts` (All treatments) | absolute safety claim | `Triple-row electronic stapling designed to prevent leaks` | `Triple-row electronic stapling engineered to minimize the risk of leakage` | High | Legal liability / Ad Policy flags | No | Yes |

---

## 8. Internal Link Label/Target Mismatch Issues

### Audit Summary
All hardcoded routing links in components and layouts point to canonical active paths. However, dynamic strings within database semantic text blocks sometimes reference outdated redirect targets or dynamic placeholders.

### Issues Identified

| File / Page URL | Issue Type | Current Value | Recommended Value | Risk Level | SEO/GEO Impact | Safe to Auto-fix | Manual Approval |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| `data/treatmentsData.ts` (Various fields) | Deprecated Slug Link | `/treatments/rhinoplasty-nose-job` | `/treatments/piezo-rhinoplasty` | High | Page redirect chain / PageRank dilution | Yes | No |
| `data/treatmentsData.ts` (Various fields) | Deprecated Slug Link | `/treatments/zirconium-dental-crowns` | `/treatments/zirconium-crowns` | High | Redirect chain | Yes | No |

---

## 9. Placeholder or Thin Content Issues

### Audit Summary
1. **Thin Blog Pages**: Some blog posts contain less than 200 words, which Google categorizes as thin content, leading to a "Crawled - currently not indexed" status.
2. **Placeholder Content**: Refined regex scans confirmed that **no developer placeholders (e.g., TODO, TBD, Lorem Ipsum)** exist in production data. Lowercase "todo" instances were standard Spanish words ("todo incluido" meaning "all-inclusive").

### Issues Identified

| File / Page URL | Issue Type | Current Value | Recommended Value | Risk Level | SEO/GEO Impact | Safe to Auto-fix | Manual Approval |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| `data/blogData.js` (`ovarian-prp-low-amh-treatment`) | Thin content | ~170 words | Expand to 500+ words with clinical details | High | Crawled - not indexed | No | Yes |
| `data/blogData.js` (`istanbul-to-cyprus-ivf-travel-guide`) | Thin content | ~185 words | Expand to 500+ words with logistical details | High | Crawled - not indexed | No | Yes |

---

## 10. Language and Translation Issues

### Audit Summary
There is no English text leakage inside non-English translation fields for descriptions, semantic texts, or excerpts.
Loan-words like `"Brazilian Butt Lift (BBL)"` in Romanian are standard medical terminology and are not translation leaks.

---

## 11. Recommended Safe Phase 3B Fixes

These fixes can be automatically applied via scripting as they do not require clinical rewrite approval:

1. **Title Case Corrections**: Standardize metadata titles in `data/treatmentsData.ts` and `data/blogData.js` to replace lowercase treatment names with capitalized versions.
2. **Blog Metadata Restoration**: Modify `app/[lang]/blog/[slug]/page.tsx`'s `generateMetadata` function to correctly check for `post.metaTitle` and `post.metaDesc` from `blogData.js` before falling back to defaults.
3. **Internal Link Path Correction**: Automatically replace legacy slugs (`rhinoplasty-nose-job`, `zirconium-dental-crowns`, etc.) with correct canonical paths inside `data/treatmentsData.ts` text fields.
4. **German/Russian title styling**: Apply natural styling grammar fixes for German and Russian titles.

---

## 12. Recommended Manual-Review Fixes

These changes require manual/clinical review:

1. **Doctor-Reviewer Inconsistencies**: Align visible "Clinical Lead" with designated schema/visible reviewer, or fallback to `Meva Clinic Medical Coordination Team` where doctor credentials cannot be verified.
2. **Blog Author correction**: Change author of `bariatric-precision-robotics` from `MD Harun A.` (hair restoration) to `Dr. Cuma M.` (bariatric surgeon).
3. **Medical Claim softening**: Rephrase absolute claims to softer, compliant medical language (e.g. replace "guaranteed" with "clinically validated").
4. **Thin content expansion**: Write professional expansion text for thin blog posts to exceed 500 words.

---

## 13. Fix Order by Priority

To maximize SEO gains and address trust risks, the following order is proposed:

1. **Priority 1 (Critical)**: Restoring blog metadata logic in `blog/[slug]/page.tsx` so custom SEO tags are active.
2. **Priority 2 (High)**: Fixing the critical author-topic mismatch (`MD Harun A.` writing about bariatric surgery).
3. **Priority 3 (High)**: Standardizing metadata title casing and updating legacy link paths inside text blocks (Safe Auto-fixes).
4. **Priority 4 (Medium)**: Softening medical claims to mitigate Google update penalty risks.
5. **Priority 5 (Medium)**: Aligning visible doctors/clinical leads with schema reviewers.
6. **Priority 6 (Low)**: Truncating long German/Russian description snippets and expanding thin content.
