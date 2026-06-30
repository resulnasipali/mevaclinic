const t = (en: any) => ({
  en,
  ro: en,
  es: en,
  it: en,
  ru: en,
  fr: en,
  de: en
});

export const dentalImplantsClinical = {
  suitability: t([
    "Patients missing a single tooth or multiple teeth due to trauma, decay, or age-related tooth loss.",
    "International patients planning full-mouth restoration or implant-supported restorations in Istanbul, Turkey.",
    "Patients with sufficient healthy jawbone volume, or those who have been evaluated as suitable for bone grafting or sinus lifts.",
    "Individuals seeking a stable, premium alternative to loose, uncomfortable dentures or traditional dental bridges."
  ]),
  contraindications: t([
    "Active, uncontrolled periodontal (gum) disease or untreated oral infections in the target implant zones.",
    "Uncontrolled systemic illnesses (such as uncontrolled diabetes, active autoimmune conditions) that compromise bone healing.",
    "Inadequate bone volume or thickness where pre-implant grafting or sinus elevation is clinically contraindicated.",
    "Heavy smoking or tobacco use, which significantly increases the risk of implant failure and impairs mucosal blood flow.",
    "Poor compliance with daily oral hygiene protocols and post-surgical maintenance schedules.",
    "Medical history including recent head/neck radiation or high-dose intravenous bisphosphonate therapy."
  ]),
  preOpEvaluation: t([
    "3D CBCT Imaging: Cone Beam Computed Tomography scanning to assess bone height, density, and locate the inferior alveolar nerve and maxillary sinuses.",
    "Occlusal Bite Assessment: Precise digital or physical bite mapping to ensure perfect alignment with opposing teeth.",
    "Bone and Gum Volume Review: Visual and physical evaluation of soft tissue thickness and underlying ridge structure.",
    "Comprehensive Medical History: Detailed review of systemic conditions, bleeding tendencies, and current medications."
  ]),
  risksComplications: t([
    "Osseointegration Failure: The implant post fails to fuse with the jawbone, requiring removal, healing, and eventual re-evaluation.",
    "Peri-Implantitis: Post-surgical localized bacterial infection of the gum and bone, managed with cleanings and hygiene adjustments.",
    "Nerve Irritation: Injury to the lower jaw nerve causing temporary or persistent numbness in the lip, chin, or tongue.",
    "Sinus Complications: Upper jaw implants perforating the sinus membrane, managed with sinus elevation or grafting procedures.",
    "Infection or Healing Delay: Standard surgical healing delays minimized by sterile protocols and patient compliance."
  ]),
  procedureSteps: t([
    { title: "Panoramic 3D Scan", desc: "High-resolution bone scanning and digital mapping of the jaw structure to ensure correct planning." },
    { title: "Digital Implant Planning", desc: "Virtual CAD/CAM simulation to determine exact implant depth and angulation metrics." },
    { title: "Surgical Placement", desc: "Precise surgical insertion of the titanium implant post into the jawbone under local anesthesia." },
    { title: "Osseointegration Period", desc: "A healing phase of 3 to 6 months allowing the bone tissue to fuse naturally with the implant post." },
    { title: "Abutment Placement", desc: "Fitting the custom connector abutment to support the final restoration structure." },
    { title: "Prosthesis Crown Loading", desc: "Securing the final custom crown, bridge, or hybrid prosthesis to complete structural and aesthetic restoration." }
  ]),
  recoveryTimeline: t([
    { time: "First 24-72 Hours", desc: "Manage mild swelling and sensitivity using cold compresses and prescribed analgesics. Consume soft foods and follow gentle mouth rinsing instructions." },
    { time: "First Week Check-up", desc: "Follow-up evaluation to inspect gum healing and suture integrity. Swelling subsides and normal gentle chewing resumes." },
    { time: "Weeks 2-6 (Soft Tissue)", desc: "Gums heal completely over the implant site. If applicable, temporary/provisional restorations are adjusted to prevent load on the implant." },
    { time: "Months 2-6 (Osseointegration)", desc: "Bone tissue fuses with the titanium implant post. Osseointegration timeline varies based on bone quality and any grafting done." },
    { time: "Final Restoration", desc: "Verification of implant stability, custom abutment attachment, and loading of the permanent zirconium or porcelain crowns." }
  ]),
  realisticOutcomes: t("Clinical studies show high long-term success rates for dental implants in Turkey when proper surgical protocols and patient hygiene are maintained. However, results depend on bone quality, systemic health, and smoking. Dental implants do not include an absolute lifetime claim, and same-day final restorations are not suitable for all patients. Osseointegration yields a highly stable, functional, and natural-looking tooth restoration that looks and feels like a natural tooth."),
  revisionPolicy: t("If an implant fails to integrate during the osseointegration period, a secondary clinical plan is developed. The implant is removed to allow bone healing, and re-implantation or alternative prosthetic designs are proposed after diagnostic review and physical evaluation by our dental specialists."),
  doctorNote: t("Dental implants are the gold standard for tooth replacement, but their survival relies on healthy bone and gums. Diligent oral hygiene and regular professional cleanings are essential to protect your investment. Our clinical coordination team is here to support you at every stage of your dental journey in Istanbul."),
  medicalDisclaimer: t("The clinical information on this page is for educational purposes only. Individual bone volume and periodontal profiles vary. Final eligibility and treatment planning for dental implants are determined exclusively during an in-person clinical consultation with our dentists."),
  faq: t([
    { q: "Is dental implant treatment painful?", a: "The procedure is performed under local anesthesia, ensuring the surgical placement itself is comfortable. Any mild post-operative soreness or swelling in the first few days is managed with standard over-the-counter pain medications." },
    { q: "How long does osseointegration take?", a: "Osseointegration typically takes between 3 to 6 months. This timeline depends on your individual bone density, the implant location (upper or lower jaw), and whether bone grafting was required during the placement." },
    { q: "Will I need bone grafting or a sinus lift?", a: "If you have experienced bone loss or thin jaw structure due to long-term missing teeth, a bone graft or sinus lift is clinically indicated to provide the necessary volume to support the titanium implant post securely." },
    { q: "How many trips to Turkey are needed for dental implants?", a: "The standard treatment requires two trips to Istanbul. The first trip (typically 3-5 days) is for the surgical implant placement. The second trip (typically 5-7 days), taken 3 to 6 months later, is for abutment loading and final crown placement." },
    { q: "What is the difference between an implant, abutment, and crown?", a: "The implant is the titanium screw that acts as the artificial root in the bone. The abutment is the custom connector screwed into the implant. The crown is the visible, natural-looking porcelain or zirconium tooth secured on top." },
    { q: "How long can dental implants last?", a: "With excellent oral hygiene, regular professional cleanings, and avoiding smoking, dental implant posts can last for decades. However, they do not include an absolute lifetime claim, and long-term performance depends on bone quality, oral hygiene, systemic health, smoking status, and follow-up care." },
    { q: "Can smokers have dental implants?", a: "Yes, but smokers have a significantly higher risk of implant failure because nicotine restricts blood flow to the gums, delaying healing. We strongly advise smoking cessation for at least two weeks before and several weeks after surgery." },
    { q: "What aftercare is needed after implant surgery?", a: "Initial aftercare includes eating soft foods, avoiding hot liquids, and brushing surrounding teeth gently. Long-term care is identical to natural teeth: twice-daily brushing, flossing around the implant, and bi-annual dental check-ups." }
  ]),
  references: t([
    {
      text: "International Congress of Oral Implantologists (ICOI): Consensus Guidelines on Bone Grafting and Sinus Elevation Criteria.",
      url: "https://www.icoi.org/",
      type: "source"
    },
    {
      text: "Clinical Oral Implants Research: 'Long-term survival and success rates of dental implants in patients with controlled systemic conditions' (2023).",
      url: "https://onlinelibrary.wiley.com/journal/16000501",
      type: "study"
    },
    {
      text: "American Academy of Implant Dentistry (AAID): Clinical Guidelines and Treatment Standards for Dental Implant Restorations.",
      url: "https://www.aaid.com/",
      type: "source"
    }
  ])
};
