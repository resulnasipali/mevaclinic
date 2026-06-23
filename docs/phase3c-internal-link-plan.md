# Phase 3C-1B Internal Link Recovery Plan

This plan outlines the contextual, natural internal link placements proposed to strengthen link equity and crawl paths for the 5 priority treatment pages:
1. `/en/treatments/dental-implants`
2. `/en/treatments/dhi-hair-transplant`
3. `/en/treatments/vaser-liposuction`
4. `/en/treatments/gastric-botox`
5. `/en/treatments/ivf-cyprus-special`

---

## Scope Limitation Note
Phase 3C-1B implementation will strictly only modify:
- The English `semanticSeoText.en` fields within `data/treatmentsData.ts`.
- The English content (`content.en` properties) for the 4 IVF blog posts within `data/blogData.js`.

No sitemap, robots, metadata, layout, component, or locale-wide (non-English) changes will be introduced.

---

## 1. Target Page: `/en/treatments/dental-implants`

### Proposal A (zirconium-crowns)
* **Source Page**: `zirconium-crowns`
* **Source Field/File**: `data/treatmentsData.ts` (line 338, `semanticSeoText.en`)
* **Exact Sentence Before**: `Specializing in translucent zirconium crowns, ultra-thin E-Max veneers, and full-mouth implant reconstructions (All-on-4/6), our master dentists focus on seamless occlusion and pristine natural light reflection.`
* **Modified Sentence**: `Specializing in translucent zirconium crowns, ultra-thin E-Max veneers, and full-mouth <a href="/en/treatments/dental-implants" class="text-amber-500 hover:underline font-bold">implant-supported restorations</a> (All-on-4/6), our master dentists focus on seamless occlusion and pristine natural light reflection.`
* **Exact Sentence After**: `Every dental transformation is structurally tailored to your unique jaw anatomy and lip-line architecture under a comfort-focused anesthesia protocol, ensuring maximum biocompatibility, premium gum-line integration, and a long-lasting Hollywood smile profile.`
* **Anchor Text**: `implant-supported restorations`
* **Target URL**: `/en/treatments/dental-implants`
* **Why the link is relevant**: Restorations like crowns on implants are a core subset of dental implantology, providing direct contextual relevance.
* **Risk Level**: **Low** (Safe medical phrasing, contextual).

### Proposal B (hollywood-smile)
* **Source Page**: `hollywood-smile`
* **Source Field/File**: `data/treatmentsData.ts` (line 381, `semanticSeoText.en`)
* **Exact Sentence Before**: `Specializing in translucent zirconium crowns, ultra-thin E-Max veneers, and full-mouth implant reconstructions (All-on-4/6), our master dentists focus on seamless occlusion and pristine natural light reflection.`
* **Modified Sentence**: `Specializing in translucent zirconium crowns, ultra-thin E-Max veneers, and <a href="/en/treatments/dental-implants" class="text-amber-500 hover:underline font-bold">full-mouth implant reconstructions</a> (All-on-4/6), our master dentists focus on seamless occlusion and pristine natural light reflection.`
* **Exact Sentence After**: `Every dental transformation is structurally tailored to your unique jaw anatomy and lip-line architecture under a comfort-focused anesthesia protocol, ensuring maximum biocompatibility, premium gum-line integration, and a long-lasting Hollywood smile profile.`
* **Anchor Text**: `full-mouth implant reconstructions`
* **Target URL**: `/en/treatments/dental-implants`
* **Why the link is relevant**: Full smile makeovers often incorporate full-mouth reconstructions on implants.
* **Risk Level**: **Low**.

---

## 2. Target Page: `/en/treatments/dhi-hair-transplant`

### Proposal A (meva-mixed-hair)
* **Status**: **Already Implemented**.
* **Source Page**: `meva-mixed-hair`
* **Source Field/File**: `data/treatmentsData.ts` (line 177, `semanticSeoText.en`)
* **Verification**: Already contains a link using `DHI hair transplant` as anchor text.
* **Action**: No modifications needed.

### Proposal B (eyebrow-transplant)
* **Source Page**: `eyebrow-transplant`
* **Source Field/File**: `data/treatmentsData.ts` (line 239, `semanticSeoText.en`)
* **Exact Sentence Before**: `Utilizing precision sapphire blades for V-shaped micro-channel incisions and elite DHI Choi Pen implantation methodologies, our specialized clinical teams use careful graft handling and aftercare protocols designed to support strong graft retention.`
* **Modified Sentence**: `Utilizing precision sapphire blades for V-shaped micro-channel incisions and elite <a href="/en/treatments/dhi-hair-transplant" class="text-amber-500 hover:underline font-bold">DHI Choi Pen implantation</a> methodologies, our specialized clinical teams use careful graft handling and aftercare protocols designed to support strong graft retention.`
* **Exact Sentence After**: `Designed to address advanced alopecia and thinning without compromising the donor area, all hair transplant interventions feature comfort-focused local anesthesia protocol, computer-assisted follicular unit mapping, a premium medical aftercare kit, and a long-term follow-up support.`
* **Anchor Text**: `DHI Choi Pen implantation`
* **Target URL**: `/en/treatments/dhi-hair-transplant`
* **Why the link is relevant**: Eyebrow transplantation utilizes DHI Choi Pen implanters for precision angle placement, linking to the main DHI methodology page is logically consistent.
* **Risk Level**: **Low**.

---

## 3. Target Page: `/en/treatments/vaser-liposuction`

### Proposal A (abdominoplasty-tummy)
* **Source Page**: `abdominoplasty-tummy`
* **Source Field/File**: `data/treatmentsData.ts` (line 658, `semanticSeoText.en`)
* **Exact Sentence Before**: `From precision Piezo ultrasonic rhinoplasty to high-definition Vaser liposuction, deep plane facelifts, and integrated Mommy Makeovers, our board-certified plastic surgeons leverage 3D-vectored contouring matrices. We prioritize invisible incision placements, multi-layer anatomical re-anchoring (SMAS manipulation), and tissue protection protocols to designed to support efficient recovery downtime while producing elegant, natural-looking, and enduring aesthetic proportions.`
* **Modified Sentence**: `From precision Piezo ultrasonic rhinoplasty to <a href="/en/treatments/vaser-liposuction" class="text-amber-500 hover:underline font-bold">high-definition Vaser liposuction</a>, deep plane facelifts, and integrated Mommy Makeovers, our board-certified plastic surgeons leverage 3D-vectored contouring matrices. We prioritize invisible incision placements, multi-layer anatomical re-anchoring (SMAS manipulation), and tissue protection protocols designed to support efficient recovery downtime while producing elegant, natural-looking, and enduring aesthetic proportions.`
* **Note**: Corrected the grammatical error `protocols to designed to support` to `protocols designed to support`.
* **Anchor Text**: `high-definition Vaser liposuction`
* **Target URL**: `/en/treatments/vaser-liposuction`
* **Why the link is relevant**: Tummy tuck procedures are regularly paired with Vaser liposuction of the flanks.
* **Risk Level**: **Low**.

### Proposal B (mommy-makeover-full)
* **Source Page**: `mommy-makeover-full`
* **Source Field/File**: `data/treatmentsData.ts` (line 830, `semanticSeoText.en`)
* **Exact Sentence Before**: `From precision Piezo ultrasonic rhinoplasty to high-definition Vaser liposuction, deep plane facelifts, and integrated Mommy Makeovers, our board-certified plastic surgeons leverage 3D-vectored contouring matrices. We prioritize invisible incision placements, multi-layer anatomical re-anchoring (SMAS manipulation), and tissue protection protocols to designed to support efficient recovery downtime while producing elegant, natural-looking, and enduring aesthetic proportions.`
* **Modified Sentence**: `From precision Piezo ultrasonic rhinoplasty to <a href="/en/treatments/vaser-liposuction" class="text-amber-500 hover:underline font-bold">Vaser liposuction</a>, deep plane facelifts, and integrated Mommy Makeovers, our board-certified plastic surgeons leverage 3D-vectored contouring matrices. We prioritize invisible incision placements, multi-layer anatomical re-anchoring (SMAS manipulation), and tissue protection protocols designed to support efficient recovery downtime while producing elegant, natural-looking, and enduring aesthetic proportions.`
* **Note**: Corrected the grammatical error `protocols to designed to support` to `protocols designed to support`.
* **Anchor Text**: `Vaser liposuction`
* **Target URL**: `/en/treatments/vaser-liposuction`
* **Why the link is relevant**: Liposuction is a major component of body reshaping in mommy makeovers.
* **Risk Level**: **Low**.

### Proposal C (gynecomastia-male)
* **Source Page**: `gynecomastia-male`
* **Source Field/File**: `data/treatmentsData.ts` (line 917, `semanticSeoText.en`)
* **Exact Sentence Before**: `From precision Piezo ultrasonic rhinoplasty to high-definition Vaser liposuction, deep plane facelifts, and integrated Mommy Makeovers, our board-certified plastic surgeons leverage 3D-vectored contouring matrices. We prioritize invisible incision placements, multi-layer anatomical re-anchoring (SMAS manipulation), and tissue protection protocols to designed to support efficient recovery downtime while producing elegant, natural-looking, and enduring aesthetic proportions.`
* **Modified Sentence**: `From precision Piezo ultrasonic rhinoplasty to high-definition <a href="/en/treatments/vaser-liposuction" class="text-amber-500 hover:underline font-bold">Vaser-assisted contouring</a>, deep plane facelifts, and integrated Mommy Makeovers, our board-certified plastic surgeons leverage 3D-vectored contouring matrices. We prioritize invisible incision placements, multi-layer anatomical re-anchoring (SMAS manipulation), and tissue protection protocols designed to support efficient recovery downtime while producing elegant, natural-looking, and enduring aesthetic proportions.`
* **Note**: Corrected the grammatical error `protocols to designed to support` to `protocols designed to support`.
* **Anchor Text**: `Vaser-assisted contouring`
* **Target URL**: `/en/treatments/vaser-liposuction`
* **Why the link is relevant**: Vaser-assisted contouring is used to sculpt male chest contours during gynecomastia surgery.
* **Risk Level**: **Low**.

---

## 4. Target Page: `/en/treatments/gastric-botox`

### Proposal A (gastric-sleeve)
* **Source Page**: `gastric-sleeve`
* **Source Field/File**: `data/treatmentsData.ts` (line 26, `semanticSeoText.en`)
* **Exact Sentence Before**: `Every premium bariatric package integrates comprehensive pre-operative physical evaluations, metabolic mapping, luxury 5-star hotel recovery setups, private VIP logistics, and 12 months of structured post-operative nutritional coaching to ensure sustainable long-term health transformations.`
* **Modified Sentence**: `Every premium bariatric package integrates comprehensive pre-operative physical evaluations, metabolic mapping, luxury 5-star hotel recovery setups, private VIP logistics, and 12 months of structured post-operative nutritional coaching to ensure sustainable long-term health transformations. For patients seeking less invasive approaches, our clinic also coordinates candidate assessments for <a href="/en/treatments/gastric-botox" class="text-amber-500 hover:underline font-bold">gastric Botox</a> as a temporary endoscopic weight management option after medical assessment.`
* **Exact Sentence After**: `(N/A - end of semanticSeoText)`
* **Anchor Text**: `gastric Botox`
* **Target URL**: `/en/treatments/gastric-botox`
* **Why the link is relevant**: Inquiries about bariatric options often benefit from seeing non-surgical alternatives like Gastric Botox under medical review.
* **Risk Level**: **Low** (Maintains safety context and states clinical review is necessary).

### Proposal B (gastric-balloon)
* **Source Page**: `gastric-balloon`
* **Source Field/File**: `data/treatmentsData.ts` (line 87, `semanticSeoText.en`)
* **Exact Sentence Before**: `Every premium bariatric package integrates comprehensive pre-operative physical evaluations, metabolic mapping, luxury 5-star hotel recovery setups, private VIP logistics, and 12 months of structured post-operative nutritional coaching to ensure sustainable long-term health transformations.`
* **Modified Sentence**: `Every premium bariatric package integrates comprehensive pre-operative physical evaluations, metabolic mapping, luxury 5-star hotel recovery setups, private VIP logistics, and 12 months of structured post-operative nutritional coaching to ensure sustainable long-term health transformations. Alongside gastric balloon treatment, <a href="/en/treatments/gastric-botox" class="text-amber-500 hover:underline font-bold">gastric Botox</a> may be discussed as a non-surgical endoscopic weight management option based on patient suitability.`
* **Exact Sentence After**: `(N/A - end of semanticSeoText)`
* **Anchor Text**: `gastric Botox`
* **Target URL**: `/en/treatments/gastric-botox`
* **Why the link is relevant**: Both treatments are non-surgical, endoscopic weight loss options, making them mutually relevant.
* **Risk Level**: **Low**.

---

## 5. Target Page: `/en/treatments/ivf-cyprus-special`

### Proposal A (istanbul-to-cyprus-ivf-travel-guide - Custom Blog)
* **Source Page**: `istanbul-to-cyprus-ivf-travel-guide` (Blog slug)
* **Source Field/File**: `data/blogData.js` (Step 6 under `sections`)
* **Exact Sentence Before**: `Meva arranges your Pegasus/Turkish Airlines flight to Ercan Airport, Northern Cyprus (1.5 hrs).`
* **Modified Sentence**: `Meva arranges your Pegasus/Turkish Airlines flight to Ercan Airport, Northern Cyprus (1.5 hrs) to begin your <a href="/en/treatments/ivf-cyprus-special" class="text-amber-500 hover:underline font-bold">Cyprus IVF treatment coordination</a> phase.`
* **Exact Sentence After**: `VIP airport transfer to our partner hotel in Lefkoşa.`
* **Anchor Text**: `Cyprus IVF treatment coordination`
* **Target URL**: `/en/treatments/ivf-cyprus-special`
* **Why the link is relevant**: Relates travel stages directly to the corresponding treatment package setup.
* **Risk Level**: **Low** (Purely operational/logistical phrasing, no medical outcome claims).

### Proposal B (ngs-ai-embryo-selection-ivf - Custom Blog)
* **Source Page**: `ngs-ai-embryo-selection-ivf` (Blog slug)
* **Source Field/File**: `data/blogData.js` (Intro paragraph)
* **Exact Sentence Before**: `Two technologies are fundamentally changing IVF outcomes in 2026: Next-Generation Sequencing (NGS) for preimplantation genetic testing, and Artificial Intelligence–powered embryo selection algorithms. At Meva Clinic Cyprus, both are standard of care—not optional add-ons.`
* **Modified Sentence**: `Two technologies are fundamentally changing IVF outcomes in 2026: Next-Generation Sequencing (NGS) for preimplantation genetic testing, and Artificial Intelligence–powered embryo selection algorithms. At Meva Clinic Cyprus, these modern technologies are part of our <a href="/en/treatments/ivf-cyprus-special" class="text-amber-500 hover:underline font-bold">Cyprus IVF clinical planning</a> for couples undergoing fertility treatment.`
* **Exact Sentence After**: `(N/A - end of intro paragraph)`
* **Anchor Text**: `Cyprus IVF clinical planning`
* **Target URL**: `/en/treatments/ivf-cyprus-special`
* **Why the link is relevant**: Contextually links detailed genetic/AI testing features back to the clinic's core Cyprus program planning page.
* **Risk Level**: **Low**.

### Proposal C (ivf-success-rates-cyprus-2026 - Custom Blog)
* **Source Page**: `ivf-success-rates-cyprus-2026` (Blog slug)
* **Source Field/File**: `data/blogData.js` (Intro paragraph)
* **Exact Sentence Before**: `Cyprus has emerged as Europe's premier IVF destination, combining world-class embryology laboratories, permissive donor legislation, and costs 40–60% below Western European clinics. At Meva Clinic's Northern Cyprus branch, our 2025 live-birth rate for patients under 35 reached 68%—exceeding the EU average of 52%.`
* **Modified Sentence**: `Cyprus has emerged as Europe's premier IVF destination, combining world-class embryology laboratories, permissive donor legislation, and costs 40–60% below Western European clinics. For couples seeking comprehensive pathways, our <a href="/en/treatments/ivf-cyprus-special" class="text-amber-500 hover:underline font-bold">IVF Cyprus candidate assessment</a> program offers clinical clarity before treatment planning. At Meva Clinic's Northern Cyprus branch, our 2025 live-birth rate for patients under 35 reached 68%—exceeding the EU average of 52%.`
* **Exact Sentence After**: `At Meva Clinic's Northern Cyprus branch, our 2025 live-birth rate for patients under 35 reached 68%—exceeding the EU average of 52%.`
* **Anchor Text**: `IVF Cyprus candidate assessment`
* **Target URL**: `/en/treatments/ivf-cyprus-special`
* **Why the link is relevant**: Directs success rate researchers to the candidate assessment phase of the IVF program.
* **Risk Level**: **Low**.

### Proposal D (ovarian-prp-low-amh-treatment - Custom Blog)
* **Source Page**: `ovarian-prp-low-amh-treatment` (Blog slug)
* **Source Field/File**: `data/blogData.js` (Intro paragraph)
* **Exact Sentence Before**: `Platelet-Rich Plasma (PRP) ovarian rejuvenation—pioneered in Greece and now offered at Meva Clinic Cyprus—represents a scientifically substantiated adjuvant therapy that may restore follicular activity in previously non-responsive ovaries.`
* **Modified Sentence**: `Platelet-Rich Plasma (PRP) ovarian rejuvenation—pioneered in Greece and now offered at Meva Clinic Cyprus—represents a scientifically substantiated adjuvant therapy that may restore follicular activity in previously non-responsive ovaries. This rejuvenation protocol is one of the <a href="/en/treatments/ivf-cyprus-special" class="text-amber-500 hover:underline font-bold">Cyprus IVF options</a> that can be discussed during consultation.`
* **Exact Sentence After**: `(N/A - end of intro paragraph)`
* **Anchor Text**: `Cyprus IVF options`
* **Target URL**: `/en/treatments/ivf-cyprus-special`
* **Why the link is relevant**: Adjuvant protocols are logical options presented during the IVF program consultation.
* **Risk Level**: **Low**.
