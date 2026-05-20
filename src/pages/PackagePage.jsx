/**
 * PackagePage.jsx — Premium All-Inclusive Treatment Package Page
 * Route: /en/packages/:slug  |  /ro/pachete/:slug
 *
 * Features:
 * - Dark mode with gold (#d4af37) + navy (#0b1626) palette
 * - "Her Şey Dahil" / "All-Inclusive" package breakdown
 * - No pricing — WhatsApp "Consult Now" CTA
 * - Fully bilingual EN / RO
 * - MedicalProcedure schema
 */

import React, { useEffect } from 'react';
import { useParams, Link, useLocation } from 'react-router-dom';
import {
  ArrowLeft, CheckCircle, Car, Hotel, Languages,
  Activity, Stethoscope, Phone, Shield, Star,
  ChevronRight, MessageCircle, Clock, Calendar, Zap
} from 'lucide-react';
import DynamicSEO from '../components/DynamicSEO';
import { findTreatment } from '../data/treatmentsData';
import treatmentData from '../data/treatmentDetails.json';

// ─── Slug aliases (same as TreatmentDetail) ─────────────────────────────────
const SLUG_ALIASES = {
  'balon-gastric': 'gastric-balloon',
  'implant-dentar': 'dental-implants',
  'implant-par': 'meva-mixed-hair',
  'transplant-par': 'meva-mixed-hair',
  'hair-transplant': 'meva-mixed-hair',
  'transplant-par-mixt': 'meva-mixed-hair',
  'transplant-par-dhi': 'dhi-hair-transplant',
  'implant-sprancene': 'eyebrow-transplant',
  'eyebrow-transplant': 'eyebrow-transplant',
  'dental': 'dental-implants',
  'chirurgie-plastica': 'piezo-rhinoplasty',
  'oncologie': 'smart-oncology-drugs',
  'oncology': 'smart-oncology-drugs',
  'andrologie': 'ligamentolysis-andrology',
  'andrology': 'ligamentolysis-andrology',
  'fiv': 'ivf-cyprus-special',
  'ivf': 'ivf-cyprus-special',
  'ivf-cyprus': 'ivf-cyprus-special',
  'ivf-ciprul-de-nord': 'ivf-cyprus-special',
  'ivf-northern-cyprus': 'ivf-cyprus-special',
  'ivf-icsi-pgd': 'ivf-cyprus-special',
  // Premium Slider Aliases
  'mommy-makeover': 'mommy-makeover-full',
  'liposuction-360': 'vaser-liposuction',
  'bbl': 'brazilian-butt-lift-bbl',
  'breast-implants': 'breast-augmentation'
};

// ─── All-inclusive items (bilingual) ────────────────────────────────────────
const PACKAGE_ITEMS = [
  {
    icon: <Stethoscope size={22} />,
    en: 'Surgical Intervention by Professor Doctors',
    ro: 'Intervenție Chirurgicală de către Profesori Doctori',
  },
  {
    icon: <Car size={22} />,
    en: 'VIP Airport ↔ Hotel ↔ Clinic Transfers',
    ro: 'Transferuri VIP Aeroport ↔ Hotel ↔ Clinică',
  },
  {
    icon: <Hotel size={22} />,
    en: '5-Star Hotel Accommodation (Full Stay)',
    ro: 'Cazare la Hotel 5 Stele (Ședere Completă)',
  },
  {
    icon: <Languages size={22} />,
    en: 'Native English Clinical Coordinator (24/7)',
    ro: 'Coordonator Clinic Vorbitor Nativ Română (24/7)',
  },
  {
    icon: <Activity size={22} />,
    en: 'All Pre & Post-Operative Tests Included',
    ro: 'Toate Testele Pre & Post-Operatorii Incluse',
  },
  {
    icon: <Shield size={22} />,
    en: 'JCI-Accredited Hospital with Full ICU',
    ro: 'Spital Acreditat JCI cu Terapie Intensivă Completă',
  },
  {
    icon: <Clock size={22} />,
    en: 'Post-Operative Medication for Home',
    ro: 'Medicamentație Post-Operatorie pentru Acasă',
  },
  {
    icon: <Zap size={22} />,
    en: '1-Year Remote Follow-Up via Telemedicine',
    ro: '1 An Follow-Up la Distanță prin Telemedicină',
  },
];

// ─── WhatsApp number ─────────────────────────────────────────────────────────
const WA_NUMBER = '905324675941';

// ─── Component ───────────────────────────────────────────────────────────────
const PackagePage = () => {
  const { slug } = useParams();
  const location = useLocation();
  const isEn = location.pathname.startsWith('/en');

  const resolvedSlug = SLUG_ALIASES[slug] || slug;
  const tdNew = findTreatment(resolvedSlug);
  const tdLeg = !tdNew
    ? treatmentData.find(t => t.slug === resolvedSlug) || treatmentData.find(t => t.slug === slug)
    : null;
  const treatment = tdNew || tdLeg;

  useEffect(() => { window.scrollTo(0, 0); }, [slug]);

  // ── 404 ──
  if (!treatment) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-[#0b1626] px-6 text-center pt-32">
        <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mb-6">
          <Activity size={28} className="text-accent" />
        </div>
        <h1 className="text-3xl font-serif font-bold text-white mb-4">
          {isEn ? 'Package Not Found' : 'Pachet Negăsit'}
        </h1>
        <p className="text-gray-400 mb-8">
          {isEn
            ? 'This package does not exist or has been moved.'
            : 'Acest pachet nu există sau a fost mutat.'}
        </p>
        <Link
          to={isEn ? '/en' : '/ro'}
          className="bg-accent text-prime font-bold px-8 py-3 rounded-full hover:bg-yellow-400 transition-all"
        >
          {isEn ? 'Back to Home' : 'Înapoi Acasă'}
        </Link>
      </div>
    );
  }

  // ── Field helpers ──
  const isNew = !!tdNew;
  const getSafe = (val) => {
    if (!val) return '';
    if (typeof val === 'object' && !Array.isArray(val)) return val[isEn ? 'en' : 'ro'] || '';
    return val;
  };

  const title = isNew
    ? getSafe(tdNew.title)
    : isEn ? (treatment.title_en || treatment.title) : treatment.title;

  const subtitle = isNew
    ? getSafe(tdNew.shortDesc)
    : isEn ? (treatment.subtitle_en || treatment.subtitle) : treatment.subtitle;

  const newSpecs = isNew ? getSafe(tdNew.specs) : null;
  const details = isNew
    ? {
        hospitalStay: newSpecs?.hospitalStay || (isEn ? '2-3 Nights' : '2-3 Nopți'),
        hotelStay: newSpecs?.hotelStay || (isEn ? '4 Nights' : '4 Nopți'),
        returnToWork: newSpecs?.returnToWork || (isEn ? '7-10 Days' : '7-10 Zile'),
        anesthesia: newSpecs?.anesthesia || (isEn ? 'General' : 'Generală'),
      }
    : isEn ? treatment.details_en : treatment.details;

  const expert = isNew
    ? getSafe(tdNew.expert)
    : treatment.expert || (isEn ? 'Meva Clinical Team' : 'Echipa Clinică Meva');

  const waMessage = encodeURIComponent(
    isEn
      ? `Hello, I'd like to get information about the ${title} all-inclusive package at Meva Clinic.`
      : `Bună ziua, doresc informații despre pachetul all-inclusive ${title} la Meva Clinic.`
  );
  const waLink = `https://wa.me/${WA_NUMBER}?text=${waMessage}`;

  const heroImage = isNew
    ? (tdNew.heroImage || 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=1920&auto=format&fit=crop')
    : treatment.heroImage;

  return (
    <div className="bg-[#0b1626] min-h-screen selection:bg-accent/20">
      <DynamicSEO
        title={`${title} — All-Inclusive Package | Meva Clinic`}
        description={subtitle?.substring(0, 155) || ''}
        path={isEn ? `/en/packages/${slug}` : `/ro/pachete/${slug}`}
        schemaType="MedicalProcedure"
      />

      {/* ── HERO ──────────────────────────────────────────────────────────── */}
      <section className="relative pt-32 pb-28 lg:pt-48 lg:pb-40 overflow-hidden">
        {/* BG image */}
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt={title}
            width="1920" height="1080"
            loading="eager"
            fetchPriority="high"
            className="w-full h-full object-cover opacity-15 scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0b1626] via-[#0b1626]/90 to-[#0b1626]/60" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0b1626] via-transparent to-transparent" />
        </div>

        {/* Decorative circles */}
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-accent/3 rounded-full blur-2xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Back link */}
          <Link
            to={isEn ? '/en' : '/ro'}
            className="inline-flex items-center gap-2 text-xs font-bold text-accent hover:text-white uppercase tracking-widest mb-8 transition-colors group"
          >
            <ArrowLeft size={15} className="group-hover:-translate-x-1 transition-transform" />
            {isEn ? 'All Treatments' : 'Toate Tratamentele'}
          </Link>

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/15 border border-accent/30 text-accent text-xs font-bold uppercase tracking-widest mb-6">
            <Star size={12} className="fill-accent" />
            {isEn ? 'All-Inclusive VIP Package' : 'Pachet VIP Complet Inclus'}
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-white mb-5 leading-tight max-w-3xl">
            {title}
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl border-l-4 border-accent pl-5 font-medium leading-relaxed mb-10">
            {subtitle}
          </p>

          {/* Expert badge */}
          {expert && (
            <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md mb-8">
              <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center text-accent">
                <Stethoscope size={16} />
              </div>
              <div>
                <p className="text-[10px] font-bold text-accent uppercase tracking-widest leading-none mb-0.5">
                  {isEn ? 'Clinical Lead' : 'Coordonator Clinic'}
                </p>
                <p className="text-sm font-bold text-white leading-none">{expert}</p>
              </div>
            </div>
          )}

          {/* Hero CTAs */}
          <div className="flex flex-wrap gap-4 mt-2">
            <a
              href={waLink}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-3 bg-accent text-[#0b1626] font-bold py-4 px-8 rounded-full hover:bg-yellow-400 transition-all shadow-[0_10px_30px_rgba(212,175,55,0.35)] hover:-translate-y-0.5 text-sm"
            >
              <MessageCircle size={18} />
              {isEn ? 'Consult Now on WhatsApp' : 'Consultați Acum pe WhatsApp'}
            </a>
            <button
              onClick={() => {
                const el = document.getElementById('package-details');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              className="inline-flex items-center gap-2 border border-white/20 text-white font-bold py-4 px-8 rounded-full hover:border-accent hover:text-accent transition-all text-sm cursor-pointer bg-transparent"
            >
              <ChevronRight size={18} />
              {isEn ? 'See What\'s Included' : 'Vezi Ce Include'}
            </button>
          </div>
        </div>
      </section>

      {/* ── STATS BAR ─────────────────────────────────────────────────────── */}
      <div className="border-y border-white/5 bg-white/3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { label: isEn ? 'Hospital Stay' : 'Spitalizare', value: details?.hospitalStay, icon: <Calendar size={16} /> },
              { label: isEn ? 'Hotel Package' : 'Pachet Hotel', value: details?.hotelStay, icon: <Hotel size={16} /> },
              { label: isEn ? 'Return to Work' : 'Revenire Muncă', value: details?.returnToWork, icon: <Clock size={16} /> },
              { label: isEn ? 'Anaesthesia' : 'Anestezie', value: details?.anesthesia, icon: <Activity size={16} /> },
            ].map(({ label, value, icon }) => (
              <div key={label} className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center text-accent shrink-0">
                  {icon}
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest font-bold text-gray-500">{label}</p>
                  <p className="font-bold text-white text-sm">{value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── ALL-INCLUSIVE PACKAGE SECTION ─────────────────────────────────── */}
      <section id="package-details" className="py-24 scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs font-bold uppercase tracking-widest mb-4">
              <Shield size={13} />
              {isEn ? 'Zero Hidden Costs' : 'Zero Costuri Ascunse'}
            </div>
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-4">
              {isEn ? 'Everything Included in One Package' : 'Totul Inclus într-un Singur Pachet'}
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
              {isEn
                ? 'Your medical journey should be stress-free. Every detail is handled — from the moment you land until you return home.'
                : 'Parcursul tău medical trebuie să fie lipsit de stres. Fiecare detaliu este gestionat — de la aterizare până la întoarcerea acasă.'}
            </p>
          </div>

          {/* Package items grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-16">
            {PACKAGE_ITEMS.map((item, i) => (
              <div
                key={i}
                className="flex items-start gap-4 p-6 rounded-2xl bg-white/3 border border-white/8 hover:border-accent/30 hover:bg-white/5 transition-all group"
              >
                <div className="w-12 h-12 rounded-2xl bg-accent/10 flex items-center justify-center text-accent shrink-0 group-hover:bg-accent group-hover:text-[#0b1626] transition-all duration-300">
                  {item.icon}
                </div>
                <div className="pt-1">
                  <p className="font-bold text-white text-base leading-snug">
                    {isEn ? item.en : item.ro}
                  </p>
                  <div className="flex items-center gap-1.5 mt-2">
                    <CheckCircle size={13} className="text-accent shrink-0" />
                    <span className="text-xs text-accent font-semibold uppercase tracking-wider">
                      {isEn ? 'Included' : 'Inclus'}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Quote banner */}
          <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-accent/15 via-accent/5 to-transparent border border-accent/20 p-10 text-center mb-16">
            <div className="absolute top-0 left-0 w-32 h-32 bg-accent/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-0 w-48 h-48 bg-accent/5 rounded-full blur-3xl" />
            <p className="relative text-2xl md:text-3xl font-serif italic text-white mb-4 max-w-3xl mx-auto leading-relaxed">
              "{isEn
                ? 'No hidden costs — everything is included for your comfort and peace of mind.'
                : 'Fără costuri ascunse — totul este inclus pentru confortul și liniștea ta.'}"
            </p>
            <p className="relative text-accent font-bold text-sm uppercase tracking-widest">
              — Meva Clinic · Istanbul
            </p>
          </div>
        </div>
      </section>

      {/* ── SEO CLINICAL DEEP DIVE ────────────────────────────────────────── */}
      {(isNew && tdNew.seoContent) && (
        <section className="py-24 bg-[#0a111c] border-y border-white/5">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-gray-400 text-lg">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-8">
                {isEn ? `Comprehensive Guide to ${title}` : `Ghid Complet pentru ${title}`}
              </h2>
              {/* Splitting the paragraphs array */}
              {(isEn ? tdNew.seoContent.en : tdNew.seoContent.ro).map((paragraph, idx) => (
                <p key={idx} className="mb-6 leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── WHY MEVA ──────────────────────────────────────────────────────── */}
      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                num: '15,000+',
                label: isEn ? 'Successful Procedures' : 'Proceduri de Succes',
                icon: <Stethoscope size={24} />,
              },
              {
                num: 'JCI',
                label: isEn ? 'Accredited Hospital' : 'Spital Acreditat',
                icon: <Shield size={24} />,
              },
              {
                num: '24/7',
                label: isEn ? 'Romanian Support Team' : 'Echipă Suport Română',
                icon: <Phone size={24} />,
              },
            ].map(({ num, label, icon }) => (
              <div
                key={num}
                className="flex flex-col items-center text-center p-8 rounded-2xl bg-white/3 border border-white/8"
              >
                <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center text-accent mb-4">
                  {icon}
                </div>
                <p className="text-4xl font-serif font-bold text-accent mb-2">{num}</p>
                <p className="text-gray-400 text-sm font-medium">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── STICKY CTA SECTION ────────────────────────────────────────────── */}
      <section className="py-20 border-t border-white/5">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs font-bold uppercase tracking-widest mb-6">
            <Phone size={13} />
            {isEn ? 'Free — No Commitment' : 'Gratuit — Fără Angajament'}
          </div>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-5">
            {isEn
              ? `Ready to Start Your ${(title || '').split(' ')[0]} Journey?`
              : `Gata să Începi Parcursul pentru ${(title || '').split(' ')[0]}?`}
          </h2>
          <p className="text-gray-400 mb-10 leading-relaxed text-lg">
            {isEn
              ? 'Get a personalised quote in 24 hours — completely free, zero obligation. Our Romanian-speaking coordinators are available now.'
              : 'Primești o ofertă personalizată în 24 de ore — complet gratuit, fără obligații. Coordonatorii noștri vorbitori de română sunt disponibili acum.'}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {/* WhatsApp primary CTA */}
            <a
              href={waLink}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center gap-3 bg-accent text-[#0b1626] font-bold py-4 px-10 rounded-full hover:bg-yellow-400 transition-all shadow-[0_10px_40px_rgba(212,175,55,0.4)] hover:-translate-y-0.5 text-sm"
            >
              <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              {isEn ? 'Consult Now on WhatsApp' : 'Consultați Acum pe WhatsApp'}
            </a>

            {/* Contact link secondary */}
            <Link
              to={isEn ? '/en/contact' : '/ro/contact'}
              className="flex items-center justify-center gap-2 border border-white/20 text-white font-bold py-4 px-10 rounded-full hover:border-accent hover:text-accent transition-all text-sm"
            >
              <Phone size={16} />
              {isEn ? 'Book Free Consultation' : 'Rezervă Consultație Gratuită'}
            </Link>
          </div>

          {/* Trust line */}
          <p className="mt-8 text-xs text-gray-600 font-medium">
            {isEn
              ? '🔒 Your information is 100% confidential. GDPR & KVKK compliant.'
              : '🔒 Informațiile tale sunt 100% confidențiale. Conform GDPR & KVKK.'}
          </p>
        </div>
      </section>
    </div>
  );
};

export default PackagePage;
