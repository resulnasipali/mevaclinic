// src/utils/whatsappRouter.js

/**
 * Robust WhatsApp Link Generator for Meva Clinic
 * Routes based on locale and injects highly-tailored, premium intent messages.
 * 
 * @param {string} slug - The treatment slug (e.g., 'gastric-sleeve', 'bbl')
 * @param {string} locale - The language locale ('en' or 'ro')
 * @returns {string} - The encoded WhatsApp URL ready for CTA links
 */
export function getWhatsAppLink(slug, locale) {
  // STRICT PRIVACY & ROUTING RULE
  const PHONE_EN = "905366511599";
  const PHONE_RO = "905324675941";
  
  const phone = locale === 'ro' ? PHONE_RO : PHONE_EN;
  
  // Base dictionary for customized intent messages
  const messageDict = {
    "gastric-sleeve": {
      "en": "Hello Meva Clinic, I would like to get a personalized quote for Gastric Sleeve Surgery. I am interested in the 4 Nights Premium Hospitalization package with No Hidden Fees.",
      "ro": "Bună Meva Clinic, aș dori să primesc o ofertă personalizată pentru operația de Gastric Sleeve. Sunt interesat(ă) de pachetul cu 4 nopți de spitalizare premium, fără costuri ascunse."
    },
    "mommy-makeover": {
      "en": "Hello Meva Clinic, I am interested in the Mommy Makeover package. Could you provide details regarding the dual-surgeon coordination and JCI accredited facilities?",
      "ro": "Bună Meva Clinic, sunt interesată de pachetul Mommy Makeover. Îmi puteți oferi detalii despre coordonarea combinată cu doi chirurgi și facilitățile acreditate JCI?"
    },
    "liposuction-360": {
      "en": "Hello Meva Clinic, please send me information about Liposuction 360 (HD Sculpting) utilizing advanced Vaser technology.",
      "ro": "Bună Meva Clinic, vă rog să-mi trimiteți informații despre Liposucția 360 (Sculptare HD) care utilizează tehnologia avansată Vaser."
    },
    "bbl": {
      "en": "Hello Meva Clinic, I would like to learn more about the BBL surgery with strategic fat grafting. What is included in your VIP recovery package?",
      "ro": "Bună Meva Clinic, aș dori să aflu mai multe despre operația BBL cu grefare strategică de grăsime. Ce este inclus în pachetul vostru VIP de recuperare?"
    },
    "breast-implants": {
      "en": "Hello Meva Clinic, I am inquiring about Breast Augmentation. I'm specifically interested in your FDA-approved implants with a lifetime warranty.",
      "ro": "Bună Meva Clinic, doresc informații despre Augmentarea Mamară. Sunt interesată în mod special de implanturile aprobate FDA cu garanție pe viață."
    },
    "gastric-bypass": {
      "en": "Hello Meva Clinic, I'd like a consultation for Gastric Bypass Surgery. Can you tell me more about the 1-Year Metabolic Follow-up included?",
      "ro": "Bună Meva Clinic, aș dori o consultație pentru operația de Gastric Bypass. Îmi puteți spune mai multe despre monitorizarea metabolică de 1 an inclusă?"
    },
    "gastric-balloon": {
      "en": "Hello Meva Clinic, I want to jumpstart my weight loss with the non-surgical Gastric Balloon. Could I get details on the All-Inclusive Pre-Op Tests with No Hidden Fees?",
      "ro": "Bună Meva Clinic, vreau să încep procesul de slăbire cu Balonul Gastric non-chirurgical. Aș putea primi detalii despre testele pre-operatorii incluse și garanția fără costuri ascunse?"
    },
    "hair-transplant": {
      "en": "Hello Meva Clinic, I am interested in a premium Hair Transplant. Can you share more about the Painless Anesthesia option and the Lifetime Growth Guarantee?",
      "ro": "Bună Meva Clinic, sunt interesat de un Transplant de Păr premium. Îmi puteți oferi mai multe detalii despre opțiunea de anestezie fără durere și garanția de creștere pe viață?"
    }
  };

  // Premium Fail-Safe Fallback
  const fallbackMessage = {
    "en": "Hello Meva Clinic, I would like to arrange a premium consultation and receive an all-inclusive medical tourism quote for my procedure.",
    "ro": "Bună Meva Clinic, aș dori să programez o consultație premium și să primesc o ofertă completă de turism medical pentru procedura mea."
  };

  // Determine message
  let text = fallbackMessage[locale] || fallbackMessage['en'];
  
  if (messageDict[slug] && messageDict[slug][locale]) {
    text = messageDict[slug][locale];
  } else if (messageDict[slug] && messageDict[slug]['en']) {
    // If exact locale is missing, fallback to English for that specific treatment
    text = messageDict[slug]['en'];
  }

  // Construct and encode the WhatsApp API URL
  const encodedText = encodeURIComponent(text);
  return `https://wa.me/${phone}?text=${encodedText}`;
}
