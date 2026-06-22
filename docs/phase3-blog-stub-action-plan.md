# Meva Clinic Phase 3 Blog Stub & Thin Page Action Plan

This decision report provides a comprehensive review of all 14 blog pages in the Meva Clinic system. It identifies empty stubs and thin pages that risk dragging down the site's search quality scores due to duplicate content fallbacks or lack of substantial text.

As of June 2026, the 10 empty blog posts render a client-side hardcoded fallback containing identical placeholder text. Google's crawler flags these as duplicate and thin content.

---

## Executive Summary of Action Types
* **Action A**: Keep page, expand to 800+ words of unique content in Phase 3B.
* **Action B**: Inject `noindex` tag temporarily to protect search equity.
* **Action C**: 301 Redirect to the most relevant treatment money page or category hub.
* **Action D**: Temporarily remove the URL from `app/sitemap.ts` until content is ready.

---

## Detailed Blog Page Inventory & Actions

### 1. evolution-sapphire-fue
* **URL**: `/:lang/blog/evolution-sapphire-fue`
* **Current Word Count**: 0 (renders fallback template)
* **Current Title**: The Evolution of Sapphire FUE: Precision in Hair Restoration
* **Current Excerpt**: Discover how sapphire blades are revolutionizing the density and natural look of modern hair transplants.
* **Sitemap Status**: Included in sitemap for all 7 languages.
* **Indexability**: Indexable (returns 200, no noindex header/tag).
* **Related Treatment Page**: `/:lang/treatments/meva-mixed-hair`
* **Recommended Action**: **B (temporary noindex)** and **D (remove from sitemap)**.
* **Risk Level**: High (Duplicate content penalty risk).
* **Priority**: High

### 2. cyberknife-s7-oncology
* **URL**: `/:lang/blog/cyberknife-s7-oncology`
* **Current Word Count**: 0 (renders fallback template)
* **Current Title**: CyberKnife S7: Redefining Non-Invasive Oncology in Istanbul
* **Current Excerpt**: Exploring the sub-millimetric precision of the S7 system in targeting complex tumors.
* **Sitemap Status**: Included in sitemap for all 7 languages.
* **Indexability**: Indexable.
* **Related Treatment Page**: `/:lang/treatments/smart-oncology-drugs`
* **Recommended Action**: **B (temporary noindex)** and **D (remove from sitemap)**.
* **Risk Level**: High
* **Priority**: High

### 3. exosome-therapy-healing
* **URL**: `/:lang/blog/exosome-therapy-healing`
* **Current Word Count**: 0 (renders fallback template)
* **Current Title**: Exosome Therapy: The Future of Cellular Healing
* **Current Excerpt**: How extracellular vesicles are accelerating post-operative recovery and tissue regeneration.
* **Sitemap Status**: Included in sitemap for all 7 languages.
* **Indexability**: Indexable.
* **Related Treatment Page**: `/:lang/treatments/meva-mixed-hair` (often paired with hair transplants)
* **Recommended Action**: **B (temporary noindex)** and **D (remove from sitemap)**.
* **Risk Level**: High
* **Priority**: High

### 4. jci-standards-importance
* **URL**: `/:lang/blog/jci-standards-importance`
* **Current Word Count**: 0 (renders fallback template)
* **Current Title**: JCI Standards: Why Hospital Accreditation Matters for EU Patients
* **Current Excerpt**: Understanding the global gold standard for clinical quality and patient safety.
* **Sitemap Status**: Included in sitemap for all 7 languages.
* **Indexability**: Indexable.
* **Related Treatment Page**: `/:lang/about-us`
* **Recommended Action**: **B (temporary noindex)** and **D (remove from sitemap)**.
* **Risk Level**: High
* **Priority**: High

### 5. post-op-logistics-istanbul
* **URL**: `/:lang/blog/post-op-logistics-istanbul`
* **Current Word Count**: 0 (renders fallback template)
* **Current Title**: Post-Op Logistics: From Istanbul Airport to VIP Recovery
* **Current Excerpt**: A detailed guide on how Meva Clinic manages every step of your medical travel itinerary.
* **Sitemap Status**: Included in sitemap for all 7 languages.
* **Indexability**: Indexable.
* **Related Treatment Page**: `/:lang/about-us`
* **Recommended Action**: **B (temporary noindex)** and **D (remove from sitemap)**.
* **Risk Level**: High
* **Priority**: High

### 6. bariatric-precision-robotics
* **URL**: `/:lang/blog/bariatric-precision-robotics`
* **Current Word Count**: 0 (renders fallback template)
* **Current Title**: Bariatric Precision: The Role of Da Vinci Robotics in Gastric Surgery
* **Current Excerpt**: Why robotic-assisted surgery reduces recovery time and enhances metabolic outcomes.
* **Sitemap Status**: Included in sitemap for all 7 languages.
* **Indexability**: Indexable.
* **Related Treatment Page**: `/:lang/treatments/gastric-sleeve`
* **Recommended Action**: **C (redirect to /treatments/gastric-sleeve)** or **B (temporary noindex)**.
* **Risk Level**: High
* **Priority**: High

### 7. dental-3d-smile-design
* **URL**: `/:lang/blog/dental-3d-smile-design`
* **Current Word Count**: 0 (renders fallback template)
* **Current Title**: 3D Smile Design: Engineering the Perfect Aesthetic Outcome
* **Current Excerpt**: How digital wax-ups and intraoral scanning eliminate the guesswork in dentistry.
* **Sitemap Status**: Included in sitemap for all 7 languages.
* **Indexability**: Indexable.
* **Related Treatment Page**: `/:lang/treatments/dental-implants`
* **Recommended Action**: **B (temporary noindex)** and **D (remove from sitemap)**.
* **Risk Level**: High
* **Priority**: High

### 8. immunotherapy-breakthroughs
* **URL**: `/:lang/blog/immunotherapy-breakthroughs`
* **Current Word Count**: 0 (renders fallback template)
* **Current Title**: Immunotherapy Breakthroughs: Training the Body to Fight Cancer
* **Current Excerpt**: A look at the latest biological protocols available in our Istanbul partner facilities.
* **Sitemap Status**: Included in sitemap for all 7 languages.
* **Indexability**: Indexable.
* **Related Treatment Page**: `/:lang/treatments/smart-oncology-drugs`
* **Recommended Action**: **B (temporary noindex)** and **D (remove from sitemap)**.
* **Risk Level**: High
* **Priority**: High

### 9. anesthesia-safety-protocols
* **URL**: `/:lang/blog/anesthesia-safety-protocols`
* **Current Word Count**: 0 (renders fallback template)
* **Current Title**: Anesthesia Safety: Advanced Monitoring for High-Complexity Cases
* **Current Excerpt**: The critical role of neuro-monitoring and TIVA protocols in modern surgical safety.
* **Sitemap Status**: Included in sitemap for all 7 languages.
* **Indexability**: Indexable.
* **Related Treatment Page**: `/:lang/about-us`
* **Recommended Action**: **B (temporary noindex)** and **D (remove from sitemap)**.
* **Risk Level**: High
* **Priority**: High

### 10. organ-transplant-ethics-excellence
* **URL**: `/:lang/blog/organ-transplant-ethics-excellence`
* **Current Word Count**: 0 (renders fallback template)
* **Current Title**: Organ Transplant: Balancing Medical Ethics with Surgical Excellence
* **Current Excerpt**: Inside Turkey's world-leading liver and kidney transplant success rates.
* **Sitemap Status**: Included in sitemap for all 7 languages.
* **Indexability**: Indexable.
* **Related Treatment Page**: `/:lang/treatments/organ-transplant-turkey`
* **Recommended Action**: **B (temporary noindex)** and **D (remove from sitemap)**.
* **Risk Level**: High
* **Priority**: High

### 11. ivf-success-rates-cyprus-2026
* **URL**: `/:lang/blog/ivf-success-rates-cyprus-2026`
* **Current Word Count**: 147 (thin page, custom text)
* **Current Title**: IVF Success Rates in Cyprus: Global Comparison Guide (2026)
* **Current Excerpt**: Why Cyprus has become Europe's leading IVF destination. Success rates, costs, and technology compared with Spain, Greece, and the UK.
* **Sitemap Status**: Included in sitemap for all 7 languages.
* **Indexability**: Indexable.
* **Related Treatment Page**: `/:lang/treatments/ivf-cyprus-special`
* **Recommended Action**: **A (keep and write full content later)**.
* **Risk Level**: Medium (Unique content, but thin).
* **Priority**: Medium

### 12. ovarian-prp-low-amh-treatment
* **URL**: `/:lang/blog/ovarian-prp-low-amh-treatment`
* **Current Word Count**: 258 (thin page, custom text)
* **Current Title**: Ovarian PRP: Scientific Facts for Low AMH & Poor Reserve Patients
* **Current Excerpt**: How platelet-rich plasma (PRP) and stem cell therapies rejuvenate ovarian tissue at the cellular level. Who qualifies, and what results to expect.
* **Sitemap Status**: Included in sitemap for all 7 languages.
* **Indexability**: Indexable.
* **Related Treatment Page**: `/:lang/treatments/ivf-cyprus-special`
* **Recommended Action**: **A (keep and write full content later)**.
* **Risk Level**: Medium
* **Priority**: Medium

### 13. ngs-ai-embryo-selection-ivf
* **URL**: `/:lang/blog/ngs-ai-embryo-selection-ivf`
* **Current Word Count**: 253 (thin page, custom text)
* **Current Title**: NGS & AI Embryo Selection: The Revolution in IVF Embryology
* **Current Excerpt**: How Next-Generation Sequencing detects chromosomal abnormalities and how AI algorithms identify the healthiest embryo—explained for patients without a science degree.
* **Sitemap Status**: Included in sitemap for all 7 languages.
* **Indexability**: Indexable.
* **Related Treatment Page**: `/:lang/treatments/ivf-cyprus-special`
* **Recommended Action**: **A (keep and write full content later)**.
* **Risk Level**: Medium
* **Priority**: Medium

### 14. istanbul-to-cyprus-ivf-travel-guide
* **URL**: `/:lang/blog/istanbul-to-cyprus-ivf-travel-guide`
* **Current Word Count**: 96 (thin page, custom text)
* **Current Title**: Istanbul to Cyprus: Planning a Seamless IVF Journey (Logistics Guide)
* **Current Excerpt**: From your first online consultation to holding your baby—a step-by-step guide to the Meva Clinic IVF pathway: transfers, accommodation, legal process, and treatment timeline.
* **Sitemap Status**: Included in sitemap for all 7 languages.
* **Indexability**: Indexable.
* **Related Treatment Page**: `/:lang/treatments/ivf-cyprus-special`
* **Recommended Action**: **A (keep and write full content later)**.
* **Risk Level**: Medium
* **Priority**: Medium

---

## Action Plan Recommendations

1. **Phase 3A Action**: Keep all empty stubs untouched in terms of codebase edits (as per prompt instructions) but approve this action plan.
2. **Phase 3B Action (Content Population vs Noindex)**:
   * Inject a Next.js `<meta name="robots" content="noindex, follow" />` dynamically in `app/[lang]/blog/[slug]/page.tsx` for posts 1-10 when `hasContent === false`.
   * Remove posts 1-10 from `app/sitemap.ts` by filtering out posts where `hasContent === false`.
   * Systematically write unique, high-quality 800+ word articles for posts 1-10 over the coming weeks, removing the `noindex` and re-adding them to the sitemap as they are completed.
