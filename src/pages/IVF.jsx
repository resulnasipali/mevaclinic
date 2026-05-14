import React, { useEffect, useState } from 'react';
import { ChevronDown, Activity, Shield, Microscope, HeartPulse, Zap } from 'lucide-react';
import DynamicSEO from '../components/DynamicSEO';
import Breadcrumbs from '../components/Breadcrumbs';
import { VerifiedBadge, CertRow } from '../components/ClinicalBadges';

const IVF_TECHNIQUES = [
  {
    id: 'icsi', icon: '🔬',
    en: {
      name: 'ICSI (Intracytoplasmic Sperm Injection)',
      tag: 'Gold Standard · Severe Male Factor',
      summary: 'ICSI involves direct microinjection of a single morphologically-selected spermatozoon into the ooplasm of a mature (MII) oocyte using a micropipette under 400× magnification. This bypasses the zona pellucida and sperm-oocyte fusion mechanisms entirely, making it the definitive solution for severe oligozoospermia (< 1 million/mL), azoospermia (with surgical sperm retrieval — TESE/PESA), teratozoospermia, or previous total fertilisation failure. Fertilisation rate: 70–85%.',
      mevaNote: 'Heated stage (37°C) Nikon inverted microscope. Piezo-ICSI option for improved oocyte survival. Combined with TESE/PESA on same day. Embryologist seniority minimum 8 years.',
    },
    ro: {
      name: 'ICSI (Injecție Intracitoplasmatică de Spermatozoid)',
      tag: 'Standard de Aur · Factor Masculin Sever',
      summary: 'ICSI implică microinjecția directă a unui spermatozoid unic selectat morfologic în ooplasma unui ovocit matur (MII) folosind o micropipetă la mărire 400×. Aceasta ocolește complet zona pellucida și mecanismele de fuziune spermatozoid-ovocit, devenind soluția definitivă pentru oligozoospermie severă (< 1 milion/mL), azoospermie (cu recuperare chirurgicală a spermei — TESE/PESA), teratozoospermie sau eșec total de fertilizare anterior. Rată fertilizare: 70–85%.',
      mevaNote: 'Microscop inversat Nikon cu platină încălzită (37°C). Opțiune Piezo-ICSI pentru supraviețuire îmbunătățită a ovocitelor. Combinat cu TESE/PESA în aceeași zi. Senioritate embriolog minimum 8 ani.',
    },
  },
  {
    id: 'imsi', icon: '🔭',
    en: {
      name: 'IMSI (Intracytoplasmic Morphologically-Selected Sperm Injection)',
      tag: 'Ultra-High Magnification · DNA Integrity',
      summary: 'IMSI extends ICSI by using a Nomarski differential interference contrast (DIC) inverted microscope at 6,000–10,000× magnification — 25× higher than standard ICSI. This ultra-high resolution enables embryologists to identify and exclude spermatozoa with vacuoles in the nuclear region, which are associated with sperm DNA fragmentation (DFI > 25%) and reduced embryo developmental competence. Studies (Berkovitz et al.) show IMSI increases blastocyst rate by 12–18% vs. standard ICSI in couples with prior IVF failure.',
      mevaNote: 'Leica DM IRB platform with DIC optics. Indicated for couples with ≥ 2 failed IVF cycles, elevated DFI, or severe teratozoospermia (Kruger < 2%). Sperm DNA fragmentation test included pre-cycle.',
    },
    ro: {
      name: 'IMSI (Injecție de Spermatozoid Selectat Morfologic Intracitoplasmatic)',
      tag: 'Magnificație Ultra-Înaltă · Integritate ADN',
      summary: 'IMSI extinde ICSI utilizând un microscop inversat cu contrast diferențial interferometric (DIC) Nomarski la mărire 6.000–10.000× — de 25× mai mare decât ICSI standard. Această rezoluție ultra-înaltă permite embriologilor să identifice și să excludă spermatozoizii cu vacuole în regiunea nucleară, asociate cu fragmentarea ADN-ului spermei (DFI > 25%) și competența redusă de dezvoltare a embrionilor. Studiile (Berkovitz et al.) arată că IMSI crește rata de blastocist cu 12–18% vs. ICSI standard la cuplurile cu eșec IVF anterior.',
      mevaNote: 'Platformă Leica DM IRB cu optică DIC. Indicat pentru cupluri cu ≥ 2 cicluri IVF eșuate, DFI crescut sau teratozoospermie severă (Kruger < 2%). Test fragmentare ADN spermă inclus pre-ciclu.',
    },
  },
  {
    id: 'pgd', icon: '🧬',
    en: {
      name: 'PGD / PGT-A (Preimplantation Genetic Testing)',
      tag: 'Personalised Embryo Selection · Chromosomal Screening',
      summary: 'PGT-A (Preimplantation Genetic Testing for Aneuploidy) screens embryos at the blastocyst stage (Day 5–6) by biopsying 5–10 trophectoderm cells and performing Next-Generation Sequencing (NGS) to determine chromosomal copy number across all 24 chromosomes. Only euploid (chromosomally normal) embryos are selected for transfer. This approach reduces miscarriage rate from 30% to under 10%, increases implantation rate from 40–50% to 65–75%, and enables sex selection where legally permitted. PGT-M (monogenic) screens for specific inherited mutations (BRCA1/2, CF, SMA).',
      mevaNote: 'NGS platform (Illumina): 24-chromosome full aneuploidy screen. Results in 5 days. Euploid embryo FET protocol. PGT-M available for 200+ genetic conditions. Genetic counselling session included.',
    },
    ro: {
      name: 'PGD / PGT-A (Testare Genetică Preimplantare)',
      tag: 'Selecție Personalizată a Embrionilor · Screening Cromozomial',
      summary: 'PGT-A (Testare Genetică Preimplantare pentru Aneuploidie) screenează embrionii în stadiul de blastocist (Ziua 5–6) prin biopsierea a 5–10 celule trofectodermice și efectuarea Secvențierii de Nouă Generație (NGS) pentru a determina numărul de copii cromozomiale pe toți cei 24 de cromozomi. Doar embrionii euploizi (normali cromozomial) sunt selectați pentru transfer. Această abordare reduce rata de avort de la 30% la sub 10%, crește rata de implantare de la 40–50% la 65–75% și permite selecția sexului unde este legal permis. PGT-M (monogenic) screenează pentru mutații ereditare specifice (BRCA1/2, FC, SMA).',
      mevaNote: 'Platformă NGS (Illumina): screening aneuploidie completă 24 cromozomi. Rezultate în 5 zile. Protocol FET embrion euploid. PGT-M disponibil pentru 200+ condiții genetice. Sesiune consiliere genetică inclusă.',
    },
  },
  {
    id: 'era', icon: '⏰',
    en: {
      name: 'ERA (Endometrial Receptivity Array)',
      tag: 'Personalised Implantation Window · Recurrent Failure',
      summary: 'The ERA test uses transcriptomic analysis (next-generation sequencing of 236 genes expressed in the endometrial lining) to identify the personalised implantation window (WOI — Window of Implantation). Standard fresh embryo transfer assumes Day 5 receptivity, but 30% of patients have a displaced WOI — 12–24 hours earlier or later. ERA-guided Personalised Embryo Transfer (pET) increases implantation rates by 28% in women with ≥ 2 failed FET cycles with euploid embryos.',
      mevaNote: 'ERA biopsy Day 5 of progesterone. Igenomix laboratory analysis. pET protocol for all patients with ≥ 2 failed cycles. Combined with EMMA/ALICE microbiome testing available.',
    },
    ro: {
      name: 'ERA (Array de Receptivitate Endometrială)',
      tag: 'Fereastră de Implantare Personalizată · Eșec Recurent',
      summary: 'Testul ERA utilizează analiza transcriptomică (secvențierea de nouă generație a 236 gene exprimate în mucoasa endometrială) pentru a identifica fereastra de implantare personalizată (WOI — Window of Implantation). Transferul standard de embrion proaspăt presupune receptivitate în Ziua 5, dar 30% din paciente au un WOI deplasat — cu 12–24 ore mai devreme sau mai târziu. Transferul Personalizat de Embrion (pET) ghidat de ERA crește ratele de implantare cu 28% la femeile cu ≥ 2 cicluri FET eșuate cu embrioni euploizi.',
      mevaNote: 'Biopsie ERA Ziua 5 de progesteron. Analiză laborator Igenomix. Protocol pET pentru toți pacienții cu ≥ 2 cicluri eșuate. Testare microbiom EMMA/ALICE combinată disponibilă.',
    },
  },
  {
    id: 'egg-freezing', icon: '❄️',
    en: {
      name: 'Oocyte Vitrification (Egg Freezing)',
      tag: 'Fertility Preservation · Social or Medical',
      summary: 'Vitrification (ultra-rapid cryopreservation at −196°C in liquid nitrogen) achieves post-thaw survival rates of 90–95% for mature MII oocytes — a dramatic improvement over the 60–70% of slow-freeze methods. Dehydration with cryoprotectants (DMSO, ethylene glycol) prevents intracellular ice crystal formation. Fertilisation rates post-thaw are equivalent to fresh oocytes. Indicated for oncology patients pre-treatment, women with diminished ovarian reserve wishing to defer pregnancy, or social fertility preservation.',
      mevaNote: 'Cryotop vitrification system. Liquid nitrogen vapour storage with remote temperature monitoring. Post-thaw survival guarantee protocol. Medical and elective preservation both available.',
    },
    ro: {
      name: 'Vitrificarea Ovocitelor (Înghețarea Ovulelor)',
      tag: 'Prezervarea Fertilității · Socială sau Medicală',
      summary: 'Vitrificarea (criopreservare ultra-rapidă la −196°C în azot lichid) obține rate de supraviețuire post-decongelare de 90–95% pentru ovocitele MII mature — o îmbunătățire dramatică față de 60–70% al metodelor de congelare lentă. Deshidratarea cu crioprotectori (DMSO, etilenglicol) previne formarea cristalelor de gheață intracelulare. Ratele de fertilizare post-decongelare sunt echivalente cu ovocitele proaspete. Indicat pentru pacienți oncologici pre-tratament, femei cu rezervă ovariană diminuată care doresc să amâne sarcina sau prezervare electivă.',
      mevaNote: 'Sistem vitrificare Cryotop. Stocare în vapori de azot lichid cu monitorizare temperatură la distanță. Protocol garanție supraviețuire post-decongelare. Prezervare medicală și electivă ambele disponibile.',
    },
  },
];

const IVF_STATS = [
  { val: '68%', en: 'Clinical pregnancy rate / cycle (blastocyst + PGT-A)', ro: 'Rată sarcină clinică / ciclu (blastocist + PGT-A)' },
  { val: '< 10%', en: 'Miscarriage rate with euploid embryo transfer', ro: 'Rată avort cu transfer embrion euploid' },
  { val: '5 days', en: 'Full PGT-A NGS results turnaround', ro: 'Timp rezultate PGT-A NGS complet' },
  { val: '90–95%', en: 'Vitrified oocyte post-thaw survival rate', ro: 'Rată supraviețuire ovocit vitrificat post-decongelare' },
];

const faqEn = [
  { q: 'What is the difference between IVF, ICSI and IMSI?', a: 'Standard IVF places sperm around the egg for natural fertilisation. ICSI injects one sperm directly into the egg — required for male factor infertility. IMSI uses 10,000× magnification (vs. 400× for ICSI) to select sperm with no nuclear vacuoles, improving embryo quality in couples with repeated IVF failure or elevated sperm DNA fragmentation.' },
  { q: 'Who needs PGT-A genetic screening?', a: 'PGT-A is indicated for: women over 37, couples with ≥ 2 failed IVF cycles, recurrent pregnancy loss (≥ 2 miscarriages), severe male factor, or known chromosomal rearrangements. It screens all 24 chromosomes using NGS, selecting only euploid embryos for transfer.' },
  { q: 'What is the ERA test and when is it needed?', a: 'ERA (Endometrial Receptivity Array) identifies your unique implantation window using endometrial gene expression profiling. It is recommended after ≥ 2 failed transfers with good-quality embryos. 30% of patients have a non-standard implantation window, and ERA-guided personalised transfer (pET) corrects this.' },
  { q: 'Can I use donor eggs or sperm at Meva?', a: 'Yes. Anonymous and known donation is available under Turkish reproductive medicine law. Donor egg IVF uses young, PGT-A screened donors. All donors undergo full infectious disease and genetic carrier screening.' },
  { q: 'How many embryos will be transferred?', a: 'Single Embryo Transfer (SET) is our standard protocol for euploid embryos — this minimises twin risk while maintaining high success rates. Double embryo transfer is considered in specific clinical scenarios after board discussion.' },
];

const faqRo = [
  { q: 'Care este diferența dintre FIV, ICSI și IMSI?', a: 'FIV standard plasează sperma în jurul ovulului pentru fertilizare naturală. ICSI injectează un spermatozoid direct în ovul — necesar în factorul masculin de infertilitate. IMSI utilizează magnificație 10.000× (față de 400× pentru ICSI) pentru a selecta spermatozoizi fără vacuole nucleare, îmbunătățind calitatea embrionilor la cuplurile cu eșec repetat IVF sau fragmentare crescută a ADN-ului spermei.' },
  { q: 'Cine are nevoie de screening genetic PGT-A?', a: 'PGT-A este indicat pentru: femei peste 37 ani, cupluri cu ≥ 2 cicluri IVF eșuate, pierdere recurentă de sarcină (≥ 2 avorturi), factor masculin sever sau rearanjamente cromozomiale cunoscute. Screenează toți cei 24 cromozomi prin NGS, selectând doar embrionii euploizi pentru transfer.' },
  { q: 'Ce este testul ERA și când este necesar?', a: 'ERA (Array de Receptivitate Endometrială) identifică fereastra dvs. unică de implantare prin profilarea expresiei genice endometriale. Este recomandat după ≥ 2 transferuri eșuate cu embrioni de calitate bună. 30% din paciente au o fereastră de implantare non-standard, iar transferul personalizat ghidat de ERA (pET) corectează acest lucru.' },
  { q: 'Pot folosi ovule sau spermă de donator la Meva?', a: 'Da. Donarea anonimă și cunoscută este disponibilă conform legii medicinei reproductive turce. FIV cu ovule de donator utilizează donatoare tinere, screenate PGT-A. Toți donatorii sunt supuși screeningului complet pentru boli infecțioase și purtători genetici.' },
  { q: 'Câți embrioni vor fi transferați?', a: 'Transferul unui Singur Embrion (SET) este protocolul nostru standard pentru embrionii euploizi — aceasta minimizează riscul de gemeni menținând rate de succes ridicate. Transferul dublu de embrioni este considerat în scenarii clinice specifice după discuția board-ului.' },
];

const IVF = ({ lang = 'ro' }) => {
  const [openId, setOpenId] = useState(null);
  const [activeFaq, setActiveFaq] = useState(null);
  const isEn = lang === 'en';
  const g = (obj) => obj[isEn ? 'en' : 'ro'];
  useEffect(() => window.scrollTo(0, 0), [lang]);
  const faqs = isEn ? faqEn : faqRo;

  return (
    <div className="bg-white min-h-screen pt-32 pb-24">
      <DynamicSEO
        title={isEn ? 'IVF & Personalised Embryo Selection | Meva Clinic Istanbul' : 'FIV & Selecție Personalizată Embrioni | Meva Clinic Istanbul'}
        description={isEn
          ? 'Advanced IVF with ICSI, IMSI 10,000× magnification, PGT-A genetic screening and ERA personalised implantation window at Meva Clinic. 68% clinical pregnancy rate.'
          : 'FIV avansat cu ICSI, IMSI magnificație 10.000×, screening genetic PGT-A și ERA fereastră implantare personalizată la Meva Clinic. Rată sarcină clinică 68%.'}
        path={isEn ? '/en/ivf' : '/ro/fiv'}
        keywords="IVF Turkey Istanbul, ICSI IMSI clinic Istanbul, PGT-A genetic embryo screening, IVF Romania Turcia, FIV Istanbul pret, egg freezing Istanbul"
        schemaType="MedicalProcedure"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs isEn={isEn} items={[{ label: isEn ? 'Treatments' : 'Tratamente', path: null }, { label: isEn ? 'IVF' : 'FIV', path: null }]} />

        <div className="text-center mb-6"><VerifiedBadge isEn={isEn} /></div>

        <h1 className="text-4xl md:text-7xl font-serif font-bold text-prime mb-8 text-center leading-tight">
          {isEn ? 'Personalised Embryo Selection: The New IVF Standard' : 'Selecție Personalizată de Embrioni: Noul Standard FIV'}
        </h1>
        <p className="text-center text-gray-500 max-w-3xl mx-auto mb-16 text-lg leading-relaxed">
          {isEn
            ? 'ICSI · IMSI 10,000× · PGT-A NGS 24-Chromosome Screening · ERA Implantation Window · Oocyte Vitrification — engineered for the highest possible live birth rate.'
            : 'ICSI · IMSI 10.000× · Screening PGT-A NGS 24 Cromozomi · Fereastră Implantare ERA · Vitrificare Ovocite — concepute pentru cea mai mare rată de naștere vie posibilă.'}
        </p>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mb-20">
          {IVF_STATS.map(s => (
            <div key={s.val} className="bg-prime rounded-2xl p-6 text-white text-center">
              <p className="text-3xl font-black text-accent">{s.val}</p>
              <p className="text-xs text-gray-400 mt-2 leading-tight">{isEn ? s.en : s.ro}</p>
            </div>
          ))}
        </div>

        {/* Techniques Accordion */}
        <div className="mb-20">
          <h2 className="text-2xl md:text-3xl font-serif font-bold text-prime mb-8 text-center">
            {isEn ? '5 Advanced IVF Techniques at Meva' : '5 Tehnici IVF Avansate la Meva'}
          </h2>
          <div className="space-y-3">
            {IVF_TECHNIQUES.map(tx => {
              const d = g(tx);
              return (
                <div key={tx.id} className="border border-gray-100 rounded-2xl overflow-hidden shadow-sm">
                  <button
                    onClick={() => setOpenId(openId === tx.id ? null : tx.id)}
                    className="w-full px-6 py-5 flex items-center gap-4 text-left bg-white hover:bg-gray-50 transition-colors"
                    aria-expanded={openId === tx.id}
                  >
                    <span className="text-2xl">{tx.icon}</span>
                    <div className="flex-1">
                      <p className="font-bold text-prime text-sm md:text-base leading-tight">{d.name}</p>
                      <p className="text-xs text-accent font-semibold mt-0.5">{d.tag}</p>
                    </div>
                    <ChevronDown size={18} className={`text-gray-400 shrink-0 transition-transform duration-300 ${openId === tx.id ? 'rotate-180' : ''}`} />
                  </button>
                  <div className={`overflow-hidden transition-all duration-300 ${openId === tx.id ? 'max-h-[800px]' : 'max-h-0'}`}>
                    <div className="px-6 pb-7 pt-3 bg-gray-50 grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div className="md:col-span-2 bg-white rounded-xl p-5 border border-gray-100">
                        <p className="text-prime font-black text-xs uppercase tracking-widest mb-3">⚡ {isEn ? 'Clinical Detail' : 'Detaliu Clinic'}</p>
                        <p className="text-sm text-gray-600 leading-relaxed">{d.summary}</p>
                      </div>
                      <div className="md:col-span-2 bg-white rounded-xl p-5 border border-gray-100">
                        <p className="text-green-600 font-black text-xs uppercase tracking-widest mb-3">✅ {isEn ? 'Meva Quality Standard' : 'Standard Calitate Meva'}</p>
                        <p className="text-sm text-gray-600 leading-relaxed">{d.mevaNote}</p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* FAQ */}
        <div className="max-w-4xl mx-auto mb-20">
          <h2 className="text-2xl font-serif font-bold text-prime mb-8 text-center">
            {isEn ? 'IVF Clinical FAQ' : 'Întrebări Frecvente Clinice FIV'}
          </h2>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <div key={i} className="border border-gray-100 rounded-2xl overflow-hidden bg-white shadow-sm">
                <button
                  onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                  className="w-full px-7 py-5 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
                  aria-expanded={activeFaq === i}
                >
                  <span className="font-bold text-prime pr-4 text-sm md:text-base">{faq.q}</span>
                  <ChevronDown size={16} className={`text-gray-400 shrink-0 transition-transform duration-300 ${activeFaq === i ? 'rotate-180' : ''}`} />
                </button>
                <div className={`overflow-hidden transition-all duration-300 ${activeFaq === i ? 'max-h-96' : 'max-h-0'}`}>
                  <p className="px-7 pb-6 pt-2 text-sm text-gray-600 leading-relaxed border-t border-gray-50">{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="bg-[#0b1626] rounded-[2rem] p-10 text-white text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(212,175,55,0.1),_transparent_60%)]" />
          <HeartPulse size={40} className="text-accent mx-auto mb-4" />
          <h3 className="text-2xl font-serif font-bold mb-4">
            {isEn ? 'Start Your Personalised IVF Journey' : 'Începeți Călătoria Personalizată FIV'}
          </h3>
          <p className="text-gray-400 max-w-2xl mx-auto text-sm leading-relaxed mb-8">
            {isEn
              ? 'Our fertility coordinator will review your full medical history and design a protocol — ICSI, IMSI, PGT-A or ERA — tailored to your specific diagnosis. First consultation is complimentary.'
              : 'Coordonatorul nostru de fertilitate va analiza istoricul dvs. medical complet și va proiecta un protocol — ICSI, IMSI, PGT-A sau ERA — adaptat diagnosticului dvs. specific. Prima consultație este gratuită.'}
          </p>
          <a
            href={`https://wa.me/905324675941?text=${encodeURIComponent(isEn ? 'I want a personalised IVF consultation.' : 'Doresc o consultație personalizată FIV.')}`}
            target="_blank" rel="noreferrer"
            className="inline-flex items-center gap-3 bg-accent text-prime font-black py-4 px-10 rounded-full hover:bg-yellow-400 transition-all"
          >
            <Activity size={18} />
            {isEn ? 'Free IVF Consultation via WhatsApp' : 'Consultație FIV Gratuită pe WhatsApp'}
          </a>
        </div>

        <div className="mt-12"><CertRow isEn={isEn} /></div>
      </div>
    </div>
  );
};

export default IVF;
