const fs = require('fs');
const path = require('path');

function fix(file, regex, replace) {
  const fp = path.join(__dirname, file);
  if (!fs.existsSync(fp)) return;
  let content = fs.readFileSync(fp, 'utf-8');
  content = content.replace(regex, replace);
  fs.writeFileSync(fp, content, 'utf-8');
}

// BeforeAfterGallery
fix('app/components/BeforeAfterGallery.tsx', 
  /const BeforeAfterGallery = \(\{ isEn = true, cases = defaultCases \}\) => \{/, 
  "const BeforeAfterGallery = ({ isEn = true, cases = defaultCases, lang = 'en' }: { isEn?: boolean, cases?: any, lang?: string }) => {"
);

// VideoTestimonials
fix('app/components/VideoTestimonials.tsx',
  /const VideoTestimonials = \(\{ isEn = true \}\) => \{/,
  "const VideoTestimonials = ({ isEn = true, lang = 'en' }: { isEn?: boolean, lang?: string }) => {"
);

// AppointmentModal
fix('components/AppointmentModal.tsx',
  /const AppointmentModal = \(\{ isOpen, onClose \}\) => \{/,
  "const AppointmentModal = ({ isOpen, onClose, lang = 'en' }: { isOpen: boolean, onClose: () => void, lang?: string }) => {"
);

// ClinicalBadges
fix('components/ClinicalBadges.tsx',
  /const ClinicalBadges = \(\{ isEn = false \}\) => \{/,
  "const ClinicalBadges = ({ isEn = false, lang = 'en' }: { isEn?: boolean, lang?: string }) => {"
);

// ContactForm
fix('components/ContactForm.tsx',
  /const ContactForm = \(\{ isEn = false \}\) => \{/,
  "const ContactForm = ({ isEn = false, lang = 'en' }: { isEn?: boolean, lang?: string }) => {"
);
// In ContactForm it might be `export default function ContactForm({ isEn = false }) {`
fix('components/ContactForm.tsx',
  /export default function ContactForm\(\{ isEn = false \}\) \{/,
  "export default function ContactForm({ isEn = false, lang = 'en' }: { isEn?: boolean, lang?: string }) {"
);

console.log("Fixed lang parameters");
