'use client';

import React from 'react';
import { Phone, Mail, MapPin, ChevronRight, ChevronDown, Globe2, ShieldCheck, MessageCircle, Globe } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { pushToDataLayer } from '../utils/AnalyticsUtils';
import { tUI } from '@/utils/uiTranslations';
import { MevaLogo } from './MevaLogo';

// Trust badge data — fully bilingual
const TRUST_BADGES = [
  {
    icon: '🏥',
    name: {
      en: 'Licensed Medical Providers',
      ro: 'Furnizori Medicali Autorizați',
      es: 'Proveedores Médicos Autorizados',
      it: 'Fornitori Medici Autorizzati',
      fr: 'Prestataires Médicaux Agréés',
      de: 'Lizenzierte Medizinische Anbieter',
      ru: 'Лицензированные Медпровайдеры',
    },
    sub: {
      en: 'Care is planned with selected licensed hospitals and specialist physicians in Türkiye.',
      ro: 'Îngrijirea este planificată cu spitale licențiate și medici specialiști din Turcia.',
      es: 'La atención se planifica con hospitales autorizados seleccionados y médicos especialistas en Turquía.',
      it: 'L\'assistenza è pianificata con ospedali autorizzati selezionati e medici specialisti in Turchia.',
      fr: 'Les soins sont planifiés avec des hôpitaux agréés sélectionnés et des médecins spécialistes en Turquie.',
      de: 'Die Betreuung wird mit ausgewählten lizenzierten Krankenhäusern und Fachärzten in der Türkei geplant.',
      ru: 'Лечение планируется с выбранными лицензированными больницами и врачами-специалистами в Турции.',
    },
    color: 'text-blue-400',
  },
  {
    icon: '🌐',
    name: {
      en: 'JCI-Accredited Hospital Pathways',
      ro: 'Căi Spitalicești Acreditate JCI',
      es: 'Vías de Hospitales Acreditados por JCI',
      it: 'Percorsi Ospedalieri Accreditati JCI',
      fr: 'Parcours Hospitaliers Accrédités JCI',
      de: 'JCI-Akkreditierte Klinikpfade',
      ru: 'Госпитали с Аккредитацией JCI',
    },
    sub: {
      en: 'Treatment journeys can be coordinated through JCI-accredited partner hospitals where clinically appropriate.',
      ro: 'Tratamentele pot fi coordonate prin spitale partenere acreditate JCI când este adecvat clinic.',
      es: 'Los viajes de tratamiento se pueden coordinar a través de hospitales asociados acreditados por la JCI cuando sea clínicamente apropiado.',
      it: 'I viaggi di trattamento possono essere coordinati attraverso ospedali convenzionati accreditati JCI ove clinicamente appropriato.',
      fr: 'Les parcours de traitement peuvent être coordonnés via des hôpitaux partenaires accrédités JCI si cela est cliniquement approprié.',
      de: 'Behandlungsreisen können bei klinischer Eignung über JCI-akkreditierte Partnerkliniken koordiniert werden.',
      ru: 'Лечебные поездки могут координироваться через партнерские больницы с аккредитацией JCI при клинической необходимости.',
    },
    color: 'text-green-400',
  },
  {
    icon: '✈️',
    name: {
      en: 'International Patient Coordination',
      ro: 'Coordonare Pacienți Internaționali',
      es: 'Coordinación Internacional de Pacientes',
      it: 'Coordinamento Internazionale Pazienti',
      fr: 'Coordination des Patients Internationaux',
      de: 'Internationale Patientenkoordination',
      ru: 'Координация Иностранных Пациентов',
    },
    sub: {
      en: 'Airport transfers, hotel arrangements and appointment planning are coordinated within each confirmed patient package.',
      ro: 'Transferurile de la aeroport, cazarea și programările sunt coordonate în pachetul confirmat.',
      es: 'Los traslados al aeropuerto, el hotel y las citas se coordinan dentro de cada paquete confirmado.',
      it: 'I trasferimenti dall\'aeroporto, le sistemazioni in hotel e gli appuntamenti sono coordinati all\'interno di ogni pacchetto confermato.',
      fr: 'Les transferts aéroport, l\'hébergement et la planification des rendez-vous sont coordonnés dans chaque forfait corrigé.',
      de: 'Flughafentransfers, Hotelunterkünfte und Terminplanung werden im Rahmen jedes bestätigten Patientenpakets koordiniert.',
      ru: 'Трансфер из аэропорта, проживание и планирование встреч координируются в рамках каждого подтвержденного пакета.',
    },
    color: 'text-purple-400',
  },
  {
    icon: '🔒',
    name: {
      en: 'Confidential Medical File Review',
      ro: 'Evaluare Confidențială a Dosarului',
      es: 'Revisión Confidencial de Expediente Médico',
      it: 'Revisione Riservata del Fascicolo Medico',
      fr: 'Examen Confidentiel du Dossier Médical',
      de: 'Vertrauliche Prüfung der Krankenakte',
      ru: 'Конфиденциальный Анализ Медкарты',
    },
    sub: {
      en: 'Medical history, photos and treatment requests are handled securely for specialist assessment.',
      ro: 'Istoricul medical, fotografiile și cererile de tratament sunt gestionate în siguranță.',
      es: 'El historial médico, las fotos y las solicitudes de tratamiento se manejan de forma segura para la evaluación del especialista.',
      it: 'La storia medica, le foto e le richieste di tratamento sono gestite in modo sicuro per la valutazione dello specialista.',
      fr: 'Les antécédents médicaux, les photos et les demandes de traitement sont traités en toute sécurité pour évaluation par un spécialiste.',
      de: 'Krankengeschichte, Fotos und Behandlungsanfragen werden für die fachärztliche Beurteilung sicher behandelt.',
      ru: 'Медицинский анамнез, фотографии и запросы на лечение обрабатываются безопасно для экспертной оценки.',
    },
    color: 'text-yellow-400',
  },
];

const Footer = ({ lang = 'en' }: { lang?: string }) => {
  const pathname = usePathname();
  const isRo = lang === 'ro';
  
  const headingText = isRo 
    ? "Calitate, Siguranță și Suport pentru Pacienții Internaționali" 
    : lang === 'es' ? "Calidad, Seguridad y Soporte Internacional al Paciente"
    : lang === 'it' ? "Qualità, Sicurezza e Supporto Internazionale al Paziente"
    : lang === 'de' ? "Qualität, Sicherheit und internationale Patientenbetreuung"
    : lang === 'fr' ? "Qualité, Sécurité et Soutien aux Patients Internationaux"
    : lang === 'ru' ? "Качество, Безопасность и Международная Поддержка Пациентов"
    : "Quality, Safety & International Patient Support";

  const subtitleText = isRo 
    ? "Meva Clinic coordonează călătoriile pacienților internaționali prin furnizori medicali licențiați selectați, căi spitalicești acreditate JCI acolo unde este aplicabil și suport structurat pentru pacienți înainte, în timpul și după tratament." 
    : lang === 'es' ? "Meva Clinic coordina los viajes de pacientes internacionales a través de proveedores médicos con licencia seleccionados, vías de hospitales acreditados por la JCI cuando corresponda, y apoyo estructurado al paciente antes, durante y después del tratamiento."
    : lang === 'it' ? "Meva Clinic coordina i viaggi dei pazienti internazionali attraverso fornitori medici autorizzati selezionati, percorsi ospedalieri accreditati JCI ove applicabile e un supporto strutturato al paziente prima, durante e dopo il trattamento."
    : lang === 'de' ? "Meva Clinic koordiniert internationale Patientenreisen über ausgewählte lizenzierte medizinische Anbieter, JCI-akkreditierte Klinikpfade, wo zutreffend, und strukturierte Patientenbetreuung vor, während und nach der Behandlung."
    : lang === 'fr' ? "Meva Clinic coordonne les parcours des patients internationaux via des prestataires médicaux agréés sélectionnés, des parcours hospitaliers accrédités JCI le cas échéant, et un soutien structuré aux patients avant, pendant et après le traitement."
    : lang === 'ru' ? "Meva Clinic координирует поездки иностранных пациентов через выбранных лицензированных медицинских провайдеров, госпитальные сети с аккредитацией JCI, где это применимо, и структурированную поддержку пациентов до, во время и после лечения."
    : "Meva Clinic coordinates international patient journeys through selected licensed medical providers, JCI-accredited hospital pathways where applicable, and structured patient support before, during and after treatment.";

  const [openSection, setOpenSection] = React.useState<string | null>(null);

  const toggleSection = (section: string) => {
    setOpenSection(openSection === section ? null : section);
  };

  const [loadMap, setLoadMap] = React.useState(false);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setLoadMap(true);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  // Translate current path to target language locale
  const getTranslatedPath = (currentPath: string, targetLang: string) => {
    if (!currentPath || currentPath === '/') return `/${targetLang}`;
    const newParts = currentPath.split('/');
    if (newParts.length > 1 && ['en', 'ro', 'es', 'it', 'ru', 'fr', 'de'].includes(newParts[1])) {
      newParts[1] = targetLang;
      return newParts.join('/');
    }
    return `/${targetLang}`;
  };

  const handleWhatsApp = () => {
    pushToDataLayer('whatsapp_click', { location: 'footer' });
  };

  return (
    <footer
      className="bg-[#0b1626] text-white relative"
      aria-label={tUI('Site Footer', lang)}
      itemScope
      itemType="https://schema.org/WPFooter"
    >
      {/* ── Map Section ── */}
      <div
        className="relative h-[400px] md:h-[520px] w-full border-b border-white/5 overflow-hidden group"
        onMouseEnter={() => setLoadMap(true)}
        onTouchStart={() => setLoadMap(true)}
      >
        <div className="absolute inset-0 z-10 bg-gradient-to-t from-[#0b1626] via-[#0b1626]/80 to-[#0b1626]/40 pointer-events-none transition-opacity duration-700 group-hover:opacity-80" />
        {loadMap ? (
          <iframe
            title="Meva Clinic Location"
            src={`https://maps.google.com/maps?q=Altunizade,Uskudar,Istanbul,Turkey&t=&z=13&ie=UTF8&iwloc=&output=embed&hl=${lang === 'ro' ? 'ro' : lang}`}
            className="w-full h-[140%] -mt-10 border-0 absolute inset-0 map-filter"
            loading="lazy"
          />
        ) : (
          <div className="absolute inset-0 bg-[#0f1d2f]/90 flex items-center justify-center">
            {/* Elegant Map Placeholder */}
            <div className="text-center p-4">
              <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-3 animate-pulse">
                <MapPin size={24} className="text-accent" />
              </div>
              <span className="text-xs uppercase tracking-widest text-accent font-bold">Meva Clinic International Patient Office - Istanbul, Turkey</span>
            </div>
          </div>
        )}
        <div className="absolute inset-0 z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center md:justify-end pb-12 md:pb-24 pointer-events-none">
          <div className="bg-[#0f1d2f]/80 backdrop-blur-2xl p-6 md:p-10 rounded-[2.5rem] max-w-lg border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] pointer-events-auto transform transition-all hover:scale-[1.02] duration-500">
            <div className="flex items-center space-x-2 text-accent mb-4">
              <Globe2 size={24} className="stroke-2" aria-hidden="true" />
              <span className="font-bold uppercase tracking-[0.2em] text-xs">{tUI('Global Patient Support', lang)}</span>
            </div>
            <h2 className="text-3xl font-serif font-bold mb-3 text-white">
              {tUI('The Medical Heart of Istanbul', lang)}
            </h2>
            <p className="text-base text-gray-300 font-sans leading-relaxed mb-6">
              {tUI('Through specialist doctors and accredited partner hospitals, Meva Clinic supports patients from arrival to follow-up within a premium clinical care network.', lang)}
            </p>
            {/* WhatsApp CTA inside map card */}
            <a
              href={`https://wa.me/905324675941?text=${encodeURIComponent(tUI('I would like a free medical consultation.', lang))}`}
              onClick={handleWhatsApp}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={tUI('Contact Meva Clinic on WhatsApp', lang)}
              className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1da851] text-white font-bold text-sm px-6 py-3 rounded-2xl transition-all shadow-lg hover:-translate-y-0.5"
            >
              <MessageCircle size={18} aria-hidden="true" />
              WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* ── Main Footer Grid ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-10 relative z-30">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

          {/* Col 1 — Brand */}
          <div className="space-y-6">
            <div className="group block">
              <div className="bg-white/95 rounded-3xl flex items-center justify-center shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-white/20 w-[240px] h-[72px] p-3 backdrop-blur-md">
                <MevaLogo href={`/${lang}`} className="w-full h-auto group-hover:opacity-80 transition-opacity" />
              </div>
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-gray-500 mt-4 block">Istanbul Excellence</span>
            </div>
            <p className="text-gray-400 font-sans text-sm leading-relaxed pr-4">
              {tUI('Your trusted partner for medical excellence in Turkey. Premium international patient care for safe treatment planning and comfort-focused support.', lang)}
            </p>
            {/* Social */}
            <div className="flex space-x-3">
              {[
                { href: 'https://facebook.com/mevaclinic', label: tUI('Facebook', lang), txt: 'FB' },
                { href: 'https://instagram.com/mevaclinic', label: 'Instagram', txt: 'IG' },
                { href: 'https://linkedin.com/company/meva-clinic', label: 'LinkedIn', txt: 'IN' },
                { href: 'https://youtube.com/@mevaclinic', label: 'YouTube', txt: 'YT' },
              ].map(({ href, label, txt }) => (
                <a key={txt} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
                  className="w-11 h-11 rounded-full border border-white/10 flex items-center justify-center hover:bg-accent hover:border-accent hover:text-prime transition-all duration-300 font-bold text-xs text-gray-300">
                  {txt}
                </a>
              ))}
            </div>
            {/* Footer Language Switcher */}
            <div className="flex items-center gap-2 pt-2">
              <Globe size={14} className="text-accent" aria-hidden="true" />
              <Link
                href={getTranslatedPath(pathname || '/', 'ro')}
                className={`text-xs font-bold px-3 py-1.5 rounded-full transition-all ${lang === 'ro' ? 'bg-accent text-prime' : 'text-gray-400 hover:text-white border border-white/10'}`}
              >
                🇷🇴 RO
              </Link>
              <Link
                href={getTranslatedPath(pathname || '/', 'en')}
                className={`text-xs font-bold px-3 py-1.5 rounded-full transition-all ${lang === 'en' ? 'bg-accent text-prime' : 'text-gray-400 hover:text-white border border-white/10'}`}
              >
                🇬🇧 EN
              </Link>
            </div>
          </div>

          {/* Col 2 — Treatments */}
          <div className="space-y-6">
            <h3
              onClick={() => toggleSection('treatments')}
              className="text-lg font-serif font-bold text-white border-b border-white/10 pb-4 flex items-center justify-between cursor-pointer md:cursor-default"
            >
              <span>{tUI('Medical Excellence', lang)}</span>
              <ChevronDown
                size={16}
                className={`transition-transform duration-300 md:hidden ${openSection === 'treatments' ? 'rotate-180' : ''}`}
              />
            </h3>
            <ul className={`space-y-3 font-sans text-sm transition-all duration-300 ${openSection === 'treatments' ? 'block' : 'hidden md:block'}`}>
              {[
                { ro: '/ro/treatments/gastric-sleeve', en: '/en/treatments/gastric-sleeve', labelEn: 'Bariatric Surgery', labelRo: 'Chirurgie Bariatrică' },
                { ro: '/ro/treatments/meva-mixed-hair', en: '/en/treatments/meva-mixed-hair', labelEn: 'Sapphire FUE Hair', labelRo: 'Transplant Păr Safir' },
                { ro: '/ro/treatments/smart-oncology-drugs', en: '/en/treatments/smart-oncology-drugs', labelEn: 'Robotic Oncology', labelRo: 'Oncologie Robotică' },
                { ro: '/ro/treatments/dental-implants', en: '/en/treatments/dental-implants', labelEn: 'Dental Implants', labelRo: 'Implanturi Dentare' },
                { ro: '/ro/treatments/piezo-rhinoplasty', en: '/en/treatments/piezo-rhinoplasty', labelEn: 'Plastic Surgery', labelRo: 'Chirurgie Plastică' },
                { ro: '/ro/treatments/organ-transplant-turkey', en: '/en/treatments/organ-transplant-turkey', labelEn: 'Organ Transplant', labelRo: 'Transplant de Organe' },
              ].map((item) => (
                <li key={item.labelEn}>
                  <Link href={isRo ? item.ro : item.en.replace('/en/', `/${lang}/`)} className="text-gray-400 hover:text-accent flex items-center transition-colors">
                    <ChevronRight size={14} className="mr-2 shrink-0" aria-hidden="true" />
                    {tUI(item.labelEn, lang)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 — Resources */}
          <div className="space-y-6">
            <h3
              onClick={() => toggleSection('resources')}
              className="text-lg font-serif font-bold text-white border-b border-white/10 pb-4 flex items-center justify-between cursor-pointer md:cursor-default"
            >
              <span>{tUI('Patient Intelligence', lang)}</span>
              <ChevronDown
                size={16}
                className={`transition-transform duration-300 md:hidden ${openSection === 'resources' ? 'rotate-180' : ''}`}
              />
            </h3>
            <ul className={`space-y-3 text-sm font-sans transition-all duration-300 ${openSection === 'resources' ? 'block' : 'hidden md:block'}`}>
              {[
                { ro: '/ro/blog', en: '/en/blog', labelEn: 'Medical Archive', labelRo: 'Arhiva Medicală' },
                { ro: '/ro/faq', en: '/en/faq', labelEn: 'Clinical FAQ', labelRo: 'Întrebări Clinice' },
                { ro: '/ro/quiz', en: '/en/quiz', labelEn: 'Suitability Quiz', labelRo: 'Test de Eligibilitate' },
                { ro: '/ro/#pachete', en: '/en/#pachete', labelEn: 'International Patient Services', labelRo: 'Servicii Internaționale Pacienți' },
                { ro: '/ro/medical-comparison', en: '/en/medical-comparison', labelEn: 'Compare Clinics', labelRo: 'Comparație Clinici' },
                { ro: '/ro/contact', en: '/en/contact', labelEn: 'International Hub', labelRo: 'Hub Internațional' },
              ].map((item) => (
                <li key={item.labelEn}>
                  <Link href={isRo ? item.ro : item.en.replace('/en/', `/${lang}/`)} className="text-gray-400 hover:text-white flex items-center transition-colors">
                    <ChevronRight size={14} className="mr-2 shrink-0" aria-hidden="true" />
                    {tUI(item.labelEn, lang)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4 — Contact (LocalBusiness schema-compliant) */}
          <div itemScope itemType="https://schema.org/LocalBusiness">
            <meta itemProp="name" content="Meva Clinic" />
            <meta itemProp="telephone" content="+905324675941" />
            <meta itemProp="email" content="info@mevaclinic.com" />
            <div className="space-y-6">
              <h3
              onClick={() => toggleSection('contact')}
              className="text-lg font-serif font-bold text-white border-b border-white/10 pb-4 flex items-center justify-between cursor-pointer md:cursor-default"
            >
              <span>{tUI('Contact Us', lang)}</span>
              <ChevronDown
                size={16}
                className={`transition-transform duration-300 md:hidden ${openSection === 'contact' ? 'rotate-180' : ''}`}
              />
            </h3>
            <ul className={`space-y-5 font-sans text-sm text-gray-300 transition-all duration-300 ${openSection === 'contact' ? 'block' : 'hidden md:block'}`}>
              <li className="flex items-start" itemProp="address" itemScope itemType="https://schema.org/PostalAddress">
                <MapPin className="text-accent mt-1 mr-4 flex-shrink-0" size={20} aria-hidden="true" />
                <span className="leading-relaxed text-gray-200">
                  <span itemProp="streetAddress">{tUI('Altunizade, Uskudar', lang)}</span>
                  <br />
                  <span itemProp="addressLocality">Istanbul</span>,{' '}
                  <span itemProp="addressCountry">{tUI('Turkey', lang)}</span>
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="text-accent mr-4 flex-shrink-0" size={20} aria-hidden="true" />
                <a
                  href="tel:+905324675941"
                  aria-label="+90 532 467 59 41"
                  className="text-gray-200 hover:text-white transition-colors"
                  itemProp="telephone"
                >
                  +90 532 467 59 41
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="text-accent mr-4 flex-shrink-0" size={20} aria-hidden="true" />
                <a
                  href="mailto:info@mevaclinic.com"
                  className="text-gray-200 hover:text-white transition-colors"
                  itemProp="email"
                >
                  info@mevaclinic.com
                </a>
              </li>
              {/* WhatsApp */}
              <li className="flex items-center">
                <MessageCircle className="text-[#25D366] mr-4 flex-shrink-0" size={20} aria-hidden="true" />
                <a
                  href={`https://wa.me/905324675941?text=${encodeURIComponent(tUI('I would like a free consultation.', lang))}`}
                  onClick={handleWhatsApp}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={tUI('Message us on WhatsApp', lang)}
                  className="text-[#25D366] hover:text-white font-bold transition-colors"
                >
                  WhatsApp
                </a>
              </li>
              {/* Hours */}
              <li className="flex items-start">
                <ShieldCheck className="text-accent mr-4 flex-shrink-0 mt-0.5" size={20} aria-hidden="true" />
                <span className="text-gray-400 text-xs leading-relaxed">
                  <span itemProp="openingHours" content="Mo-Sa 09:00-18:00">
                    {tUI('Mon–Sat · 09:00 – 18:00', lang)}
                  </span>
                  <br />
                  <span className="text-[#25D366]">{tUI('24/7 WhatsApp Support', lang)}</span>
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
        {/* YMYL Medical Disclaimer */}
        <div className="border-t border-white/10 pt-8 text-center">
          <p className="text-[10px] text-gray-500 leading-relaxed max-w-4xl mx-auto font-sans mb-3">
            {tUI("Medical Disclaimer: The clinical information on this website is for educational and informational purposes only. It does not constitute medical advice, diagnosis, or treatment. Always consult with a qualified physician or healthcare provider regarding any medical condition or surgical procedure in Turkey.", lang)}
          </p>
          <p className="text-[10px] text-gray-500 leading-relaxed max-w-4xl mx-auto font-sans mb-6">
            {isRo 
              ? "Aranjamentele de călătorie și cazare pentru pacienții internaționali pot fi coordonate prin agenții de turism partenere autorizate TÜRSAB de Grupa A, atunci când este necesar."
              : lang === 'es' ? "Los arreglos de viaje y alojamiento para pacientes internacionales pueden coordinarse a través de agencias de viajes asociadas autorizadas de TÜRSAB Grupo A cuando sea necesario."
              : lang === 'it' ? "Le modalità di viaggio e alloggio per i pazienti internazionali possono essere coordinate tramite agenzie di viaggio partner autorizzate TÜRSAB Gruppo A quando necessario."
              : lang === 'de' ? "Reise- und Unterkunftsvereinbarungen für internationale Patienten können bei Bedarf über lizenzierte TÜRSAB-Reisebüropartner der Gruppe A koordiniert werden."
              : lang === 'fr' ? "Les préparatifs de voyage et d'hébergement pour les patients internationaux peuvent être coordonnés par l'intermédiaire d'agences de voyages partenaires agréées TÜRSAB de Groupe A lorsque cela est requis."
              : lang === 'ru' ? "Организация поездки и проживания для иностранных пациентов при необходимости может координироваться через лицензированные партнерские туристические агентства TÜRSAB группы А."
              : "Travel and accommodation arrangements for international patients may be coordinated through licensed TÜRSAB Group-A travel agency partners when required."}
          </p>
        </div>

        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 font-sans gap-4">
          <p>© {new Date().getFullYear()} Meva Clinic. {tUI('All rights reserved.', lang)}</p>
          <div className="flex flex-wrap justify-center gap-6 font-medium">
            <Link href={`/${lang}/privacy-policy`} className="hover:text-white transition-colors">
              {tUI('Privacy Policy', lang)}
            </Link>
            <Link href={`/${lang}/cookie-policy`} className="hover:text-white transition-colors">
              {tUI('Cookie Policy', lang)}
            </Link>
            <Link href={`/${lang}/terms-and-conditions`} className="hover:text-white transition-colors">
              {tUI('Terms', lang)}
            </Link>
          </div>
        </div>
      </div>

      {/* ── S-Tier Trust / Accreditation Strip ── */}
      <div className="border-t border-white/5 bg-white/3 backdrop-blur-md py-7">
        <div className="max-w-7xl mx-auto px-4">
          <p className="text-center text-[9px] font-bold text-gray-600 uppercase tracking-[0.3em] mb-3">
            {headingText}
          </p>
          <p className="text-center text-xs text-gray-500 max-w-3xl mx-auto leading-relaxed mb-6 font-sans">
            {subtitleText}
          </p>
          <div className="flex flex-wrap justify-center items-center gap-6 md:gap-10">
            {TRUST_BADGES.map((badge, i) => {
              const badgeName = (badge.name as Record<string, string>)[lang] || (badge.name as Record<string, string>)['en'];
              const badgeSub = (badge.sub as Record<string, string>)[lang] || (badge.sub as Record<string, string>)['en'];
              return (
                <div
                  key={i}
                  className="flex items-center gap-3 px-5 py-3 rounded-2xl border border-white/8 bg-white/5 hover:bg-white/10 transition-all group cursor-default max-w-sm"
                  title={badgeName}
                >
                  <span className="text-2xl" role="img" aria-label={badgeName}>
                    {badge.icon}
                  </span>
                  <div>
                    <p className={`text-[11px] font-black ${badge.color} uppercase tracking-wider leading-none mb-0.5 group-hover:opacity-100 opacity-80 transition-opacity`}>
                      {badgeName}
                    </p>
                    <p className="text-[9px] text-gray-500 font-medium leading-relaxed">
                      {badgeSub}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Mobile bottom spacer */}
      <div className="h-[72px] sm:hidden w-full bg-[#0b1626]" />
    </footer>
  );
};

export default Footer;
