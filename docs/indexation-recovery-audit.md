# Phase 3C Indexation Recovery Audit

This audit diagnoses why specific pages on `mevaclinic.com` remain in Google Search Console's **"Crawled - currently not indexed"** and **"Discovered - currently not indexed"** statuses despite having correct technical SEO configurations (returns HTTP 200, self-referential canonicals, present in sitemaps, no `noindex` headers).

---

## 1. GSC URL Inventory & Diagnostic Data

### A. Crawled - currently not indexed (Live GSC Targets)

These are pages Google has crawled but decided not to index, usually due to content value, duplication, or lack of structural internal linking equity.

| Page | Word Count | Internal Links | Sitemap | Canonical Status | Reviewer Status | Author Status | Schema Status | Quality Score | Risk Score |
| :--- | :---: | :---: | :---: | :--- | :--- | :--- | :--- | :---: | :---: |
| **`/en/blog/ovarian-prp-low-amh-treatment`** | 256 | 0 | Yes | Self-referencing | Meva Medical Board | Editorial Team (Org) | BlogPosting, TechArticle, MedicalWebPage | 70 | **Low** |
| **`/fr/treatments/organ-transplant-turkey`** | 823 | 2 | Yes | Self-referencing | Dr. Fatih E. (Physician) | N/A | MedicalProcedure | 95 | **Low** |
| **`/ro/blog/immunotherapy-breakthroughs`** | 160 | 0 | Yes | Self-referencing | Prof. Dr. Gökhan K. | Prof. Dr. Mehmet A. (Person) | BlogPosting, TechArticle, MedicalWebPage | 25 | **High (Thin)** |
| **`/es/blog/istanbul-to-cyprus-ivf-travel-guide`** | 273 | 0 | Yes | Self-referencing | Meva Medical Board | Patient Coord. Team (Person)| BlogPosting, TechArticle, MedicalWebPage | 70 | **Low** |
| **`/es/blog/dental-3d-smile-design`** | 141 | 0 | Yes | Self-referencing | Dr. Osman B. (Physician) | Dental Experts (Person) | BlogPosting, TechArticle, MedicalWebPage | 25 | **High (Thin)** |
| **`/fr/blog/immunotherapy-breakthroughs`** | 160 | 0 | Yes | Self-referencing | Prof. Dr. Gökhan K. | Prof. Dr. Mehmet A. (Person) | BlogPosting, TechArticle, MedicalWebPage | 25 | **High (Thin)** |
| **`/en/treatments/vaser-liposuction`** | 757 | 3 | Yes | Self-referencing | Prof. Dr. Yakup S. | N/A | MedicalProcedure | 75 | **Low** |
| **`/ro/blog/jci-standards-importance`** | 160 | 0 | Yes | Self-referencing | Meva Medical Board | Medical Board (Org) | BlogPosting, TechArticle, MedicalWebPage | 25 | **High (Thin)** |

---

### B. Discovered - currently not indexed (Key Pending Targets)

These are pages Google knows about but has not crawled yet, primarily due to weak internal link paths and crawl budget limitations.

| Page | Word Count | Internal Links | Sitemap | Canonical Status | Reviewer Status | Author Status | Schema Status | Quality Score | Risk Score |
| :--- | :---: | :---: | :---: | :--- | :--- | :--- | :--- | :---: | :---: |
| **`/en/treatments/gastric-botox`** | 823 | 0 | Yes | Self-referencing | Dr. Cuma M. (Physician) | N/A | MedicalProcedure | 95 | **Low** |
| **`/en/treatments/eyebrow-transplant`** | 940 | 0 | Yes | Self-referencing | MD Harun A. (Physician) | N/A | MedicalProcedure | 95 | **Low** |
| **`/en/treatments/double-chin-liposuction`** | 886 | 0 | Yes | Self-referencing | Prof. Dr. Yakup S. | N/A | MedicalProcedure | 95 | **Low** |
| **`/en/treatments/deep-plane-facelift`** | 756 | 0 | Yes | Self-referencing | Prof. Dr. Yakup S. | N/A | MedicalProcedure | 75 | **Low** |
| **`/en/treatments/blepharoplasty-eyelid`** | 760 | 0 | Yes | Self-referencing | Prof. Dr. Yakup S. | N/A | MedicalProcedure | 75 | **Low** |
| **`/en/treatments/otoplasty-ear`** | 722 | 0 | Yes | Self-referencing | Prof. Dr. Yakup S. | N/A | MedicalProcedure | 75 | **Low** |
| **`/en/treatments/arm-thigh-lift`** | 760 | 0 | Yes | Self-referencing | Prof. Dr. Yakup S. | N/A | MedicalProcedure | 75 | **Low** |
| **`/en/treatments/mentoplasty-chin`** | 730 | 0 | Yes | Self-referencing | Prof. Dr. Yakup S. | N/A | MedicalProcedure | 75 | **Low** |
| **`/en/treatments/labiaplasty-fem`** | 726 | 0 | Yes | Self-referencing | Prof. Dr. Yakup S. | N/A | MedicalProcedure | 75 | **Low** |
| **`/en/treatments/fat-grafting-girth`** | 781 | 0 | Yes | Self-referencing | Meva Medical Board | N/A | MedicalProcedure | 75 | **Low** |
| **`/en/treatments/ha-filler-girth`** | 824 | 0 | Yes | Self-referencing | Meva Medical Board | N/A | MedicalProcedure | 95 | **Low** |
| **`/en/treatments/dermal-graft-permanent`**| 776 | 0 | Yes | Self-referencing | Meva Medical Board | N/A | MedicalProcedure | 75 | **Low** |
| **`/en/treatments/p-shot-prp`** | 765 | 0 | Yes | Self-referencing | Meva Medical Board | N/A | MedicalProcedure | 75 | **Low** |
| **`/en/treatments/glans-aug-pe`** | 759 | 0 | Yes | Self-referencing | Meva Medical Board | N/A | MedicalProcedure | 75 | **Low** |
| **`/en/treatments/eswt-shockwave-ed`** | 788 | 0 | Yes | Self-referencing | Meva Medical Board | N/A | MedicalProcedure | 75 | **Low** |
| **`/en/treatments/penile-implant-ed`** | 785 | 0 | Yes | Self-referencing | Meva Medical Board | N/A | MedicalProcedure | 75 | **Low** |
| **`/en/treatments/ivf-cyprus-special`** | 848 | 0 | Yes | Self-referencing | Meva Medical Board | N/A | MedicalProcedure | 95 | **Low** |
| **`/en/treatments/anti-gravity-lifting`** | 772 | 0 | Yes | Self-referencing | Meva Medical Board | N/A | MedicalProcedure | 75 | **Low** |
| **`/en/blog/evolution-sapphire-fue`** | 172 | 0 | Yes | Self-referencing | MD Harun A. (Physician) | Dr. Harun A. (Person) | BlogPosting | 25 | **High (Thin)** |
| **`/en/blog/cyberknife-s7-oncology`** | 136 | 0 | Yes | Self-referencing | Prof. Dr. Gökhan K. | Prof. Dr. Mehmet A. (Person) | BlogPosting | 25 | **High (Thin)** |
| **`/en/blog/exosome-therapy-healing`** | 129 | 0 | Yes | Self-referencing | Prof. Dr. Yakup S. | Dr. Ayşe Y. (Person) | BlogPosting | 25 | **High (Thin)** |
| **`/en/blog/post-op-logistics-istanbul`** | 168 | 0 | Yes | Self-referencing | Meva Medical Board | Patient Coord. (Org) | BlogPosting | 25 | **High (Thin)** |
| **`/en/blog/bariatric-precision-robotics`**| 168 | 0 | Yes | Self-referencing | Dr. Cuma M. (Physician) | Editorial Team (Org) | BlogPosting | 25 | **High (Thin)** |
| **`/en/blog/anesthesia-safety-protocols`** | 149 | 0 | Yes | Self-referencing | Meva Medical Board | Anesthesia Board (Org) | BlogPosting | 25 | **High (Thin)** |
| **`/en/blog/organ-transplant-ethics-excellence`**| 159 | 0 | Yes | Self-referencing | Meva Medical Board | Transplant Board (Org) | BlogPosting | 25 | **High (Thin)** |
| **`/en/blog/ivf-success-rates-cyprus-2026`** | 242 | 0 | Yes | Self-referencing | Meva Medical Board | IVF Board (Org) | BlogPosting | 70 | **Low** |
| **`/en/blog/ngs-ai-embryo-selection-ivf`** | 241 | 0 | Yes | Self-referencing | Meva Medical Board | Embryology Dept. (Person)| BlogPosting | 70 | **Low** |

---

## 2. Issue Classification Groups

### Group A: Thin Content (Low Quality Risk)
These pages lack descriptive body text. They contain only a title and excerpt, using the shared recovery fallback block. Google easily detects this repetitive pattern and flags them as thin content.
* **Target Pages**: 10 empty blog stubs (e.g. `evolution-sapphire-fue`, `cyberknife-s7-oncology`, `exosome-therapy-healing`, `jci-standards-importance`, `post-op-logistics-istanbul`, `bariatric-precision-robotics`, `dental-3d-smile-design`, `immunotherapy-breakthroughs`, `anesthesia-safety-protocols`, `organ-transplant-ethics-excellence`).
* **SEO Action**: Temporarily apply `noindex` tag and filter from sitemap, then gradually write full articles (800+ words) before re-indexing.

### Group B: Weak Internal Linking (Orphaned Pages)
These pages have strong content but are not linked from other local pages. Search bots cannot find them naturally, resulting in the "Discovered - currently not indexed" status.
* **Target Pages**: IVF articles (`istanbul-to-cyprus-ivf-travel-guide`, `ngs-ai-embryo-selection-ivf`, `ivf-success-rates-cyprus-2026`, `ovarian-prp-low-amh-treatment`), and deep treatments (`gastric-botox`, `eyebrow-transplant`, `double-chin-liposuction`, andrology treatments).
* **SEO Action**: Build cross-links from parent category hubs and relevant primary treatments (e.g., link PRP blog from IVF treatments).

### Group C: Weak E-E-A-T (Medical Trust Discrepancy)
These pages displayed unverified doctors or mismatches between visible names and background schemas. Google checks E-E-A-T credentials for "Your Money or Your Life" (YMYL) pages.
* **Target Pages**: Bariatric blog, `vaser-liposuction`, `dental-implants`.
* **SEO Action**: (Completed) Aligned authors and reviewers to verified board-certified physicians, and resolved fake Person schemas.

### Group D: Duplicate Intent
Multiple empty blog stubs across different languages render the exact same fallback text in English.
* **Target Pages**: Localized stubs like `/fr/blog/immunotherapy-breakthroughs` and `/ro/blog/immunotherapy-breakthroughs`.
* **SEO Action**: Either delete the localized database entry or redirect/noindex them.

### Group E: Soft-404 Risk
Very thin pages with minimal text and no unique purpose.
* **Target Pages**: Empty blog stubs.
* **SEO Action**: Handle via 301 redirects to category hubs if content cannot be written.

### Group F: Healthy but Waiting
Technically perfect pages that have rich text, correct schemas, sitemaps, and verified reviewers. They are simply waiting for Google recrawl.
* **Target Pages**: `/fr/treatments/organ-transplant-turkey`, `/en/treatments/vaser-liposuction`.
* **SEO Action**: Request manual indexation via GSC API/dashboard.

---

## 3. Top 20 Pages Most Likely to Gain Indexation (Ranked by Impact)

These high-value pages have strong content and are critical for business traffic. Resolving their internal linking and content depth will unlock indexing:

1. **`/en/treatments/dental-implants`** (Underlinked, critical money page)
2. **`/en/treatments/vaser-liposuction`** (Needs internal linking boost)
3. **`/en/treatments/dhi-hair-transplant`** (Underlinked)
4. **`/fr/treatments/organ-transplant-turkey`** (Needs GSC recrawl request)
5. **`/en/treatments/gastric-botox`** (Needs internal linking boost)
6. **`/en/treatments/eyebrow-transplant`** (Needs internal linking boost)
7. **`/en/treatments/double-chin-liposuction`** (Needs internal links)
8. **`/en/treatments/ivf-cyprus-special`** (Needs internal links)
9. **`/es/blog/istanbul-to-cyprus-ivf-travel-guide`** (Needs links from IVF pages)
10. **`/en/blog/ngs-ai-embryo-selection-ivf`** (Needs links from IVF pages)
11. **`/en/blog/ivf-success-rates-cyprus-2026`** (Needs links from IVF pages)
12. **`/en/blog/ovarian-prp-low-amh-treatment`** (Needs links from IVF pages)
13. **`/en/treatments/deep-plane-facelift`** (Needs internal links)
14. **`/en/treatments/blepharoplasty-eyelid`** (Needs internal links)
15. **`/en/treatments/anti-gravity-lifting`** (Needs internal links)
16. **`/en/treatments/arm-thigh-lift`** (Needs internal links)
17. **`/en/treatments/otoplasty-ear`** (Needs internal links)
18. **`/en/treatments/labiaplasty-fem`** (Needs internal links)
19. **`/en/treatments/penile-implant-ed`** (Needs internal links)
20. **`/en/treatments/ha-filler-girth`** (Needs internal links)
