'use client';

import React, { useState } from 'react';
import { ShieldAlert, Send, MessageSquare, Check } from 'lucide-react';
import { motion } from 'framer-motion';

interface PrivacyCtaCardProps {
  lang: string;
  treatmentId: string;
  treatmentTitle: string;
}

const translations: Record<string, {
  title: string;
  descAndrology: string;
  descPlastic: string;
  protocol: string;
  whatsappBtn: string;
  emailBtn: string;
  emailCopied: string;
  footerCopy: string;
  emailSubject: string;
  emailBody: string;
}> = {
  en: {
    title: "VIP Patient Confidentiality & International Medical Regulations",
    descAndrology: "In strict compliance with international healthcare communication standards and our uncompromising dedication to VIP patient privacy, explicit before-and-after clinical photographic results for advanced andrology procedures are not displayed publicly on our digital platform.",
    descPlastic: "In strict compliance with international healthcare communication standards and our uncompromising dedication to VIP patient privacy, explicit before-and-after clinical photographic results for advanced plastic, breast, and body contouring procedures are not displayed publicly on our digital platform.",
    protocol: "To preserve the elite discretion our clientele expects, we manage clinical outcomes exclusively through a secure, private disclosure protocol.",
    whatsappBtn: "Request Private Access via WhatsApp",
    emailBtn: "Request via E-mail",
    emailCopied: "Email Copied!",
    footerCopy: "Click below to instantly connect with our elite medical consultants to receive our confidential results catalog, personalized treatment brochures, and private case studies.",
    emailSubject: "VIP Access Request - {treatmentTitle} Outcomes Catalog",
    emailBody: "Dear Meva Clinic Team,\n\nI am interested in learning more about the {treatmentTitle} procedure. In accordance with your elite patient confidentiality protocol, I would like to request private access to the confidential results catalog, personalized treatment brochures, and private case studies.\n\nThank you."
  },
  ro: {
    title: "Confidențialitatea Pacienților VIP și Reglementările Medicale Internaționale",
    descAndrology: "În strictă conformitate cu standardele internaționale de comunicare în domeniul sănătății și cu dedicarea noastră necompromisă față de confidențialitatea pacienților VIP, rezultatele fotografice clinice explicite înainte și după pentru procedurile avansate de andrologie nu sunt afișate public pe platforma noastră digitală.",
    descPlastic: "În strictă conformitate cu standardele internaționale de comunicare în domeniul sănătății și cu dedicarea noastră necompromisă față de confidențialitatea pacienților VIP, rezultatele fotografice clinice explicite înainte și după pentru procedurile avansate de chirurgie plastică, remodelare mamară și corporală nu sunt afișate public pe platforma noastră digitală.",
    protocol: "Pentru a păstra discreția de elită pe care o așteaptă clientela noastră, gestionăm rezultatele clinice exclusiv printr-un protocol securizat de dezvăluire privată.",
    whatsappBtn: "Solicită Acces Privat prin WhatsApp",
    emailBtn: "Solicită prin E-mail",
    emailCopied: "E-mail Copiat!",
    footerCopy: "Faceți clic mai jos pentru a vă conecta instantaneu cu consultanții noștri medicali de elită pentru a primi catalogul nostru confidențial de rezultate, broșuri de tratament personalizate și studii de caz private.",
    emailSubject: "Solicitare Acces Confidențial - Catalog Rezultate {treatmentTitle}",
    emailBody: "Stimată echipă Meva Clinic,\n\nDoresc să aflu mai multe detalii despre procedura de {treatmentTitle}. În conformitate cu protocolul dvs. de confidențialitate, doresc să solicit acces privat la catalogul confidențial de rezultate înainte/după, broșurile de tratament personalizate și studiile de caz private.\n\nVă mulțumesc."
  },
  es: {
    title: "Confidencialidad de Pacientes VIP y Regulaciones Médicas Internacionales",
    descAndrology: "En estricto cumplimiento con los estándares internacionales de comunicación de atención médica y nuestra inquebrantable dedicación a la privacidad de los pacientes VIP, los resultados fotográficos clínicos explícitos de antes y después para procedimientos avanzados de andrología no se muestran públicamente en nuestra plataforma digital.",
    descPlastic: "En estricto cumplimiento con los estándares internacionales de comunicación de atención médica y nuestra inquebrantable dedicación a la privacidad de los pacientes VIP, los resultados fotográficos clínicos explícitos de antes y después para procedimientos avanzados de cirugía plástica, senos y contorno corporal no se muestran públicamente en nuestra plataforma digital.",
    protocol: "Para preservar la discreción de élite que espera nuestra clientela, gestionamos los resultados clínicos exclusivamente a través de un protocolo seguro de divulgación privada.",
    whatsappBtn: "Solicitar Acceso Privado vía WhatsApp",
    emailBtn: "Solicitar vía Correo Electrónico",
    emailCopied: "¡Correo Copiado!",
    footerCopy: "Haga clic a continuación para conectarse instantáneamente con nuestros asesores médicos de élite y recibir nuestro catálogo de resultados confidenciales, folletos de tratamiento personalizados y estudios de casos privados.",
    emailSubject: "Solicitud de Acceso Confidencial - Catálogo de Resultados de {treatmentTitle}",
    emailBody: "Estimado equipo de Meva Clinic,\n\nEstoy interesado en obtener más información sobre el procedimiento de {treatmentTitle}. De acuerdo con su estricto protocolo de confidencialidad para pacientes, solicito acceso privado a su catálogo de resultados de antes y después, folletos de tratamiento personalizados y estudios de casos privados.\n\nGracias."
  },
  it: {
    title: "Riservatezza dei Pazienti VIP e Regolamentazioni Mediche Internazionali",
    descAndrology: "In stretta conformità con gli standard internazionali di comunicazione sanitaria e la nostra dedizione incrollabile alla privacy dei pazienti VIP, i risultati fotografici clinici espliciti prima e dopo per le procedure andrologiche avanzate non sono visualizzati pubblicamente sulla nostra piattaforma digitale.",
    descPlastic: "In stretta conformità con gli standard internazionali di comunicazione sanitaria e la nostra dedizione incrollabile alla privacy dei pazienti VIP, i risultati fotografici clinici espliciti prima e dopo per le procedure avanzate di chirurgia plastica, del seno e del contorno corporeo non sono visualizzati pubblicamente sulla nostra piattaforma digitale.",
    protocol: "Per preservare l'élite discrezione che la nostra clientela si aspetta, gestiamo i risultati clinici esclusivamente tramite un protocollo di divulgazione privato e sicuro.",
    whatsappBtn: "Richiedi Accesso Riservato via WhatsApp",
    emailBtn: "Richiedi via E-mail",
    emailCopied: "E-mail Copiata!",
    footerCopy: "Clicca qui sotto per connetterti istantaneamente con i nostri consulenti medici d'élite per ricevere il nostro catalogo dei risultati riservato, brochure di trattamento personalizzate e casi di studio privati.",
    emailSubject: "Richiesta Accesso Riservato - Catalogo Risultati {treatmentTitle}",
    emailBody: "Gentile Team di Meva Clinic,\n\nSono interessato a ricevere maggiori informazioni sulla procedura di {treatmentTitle}. In linea con il vostro protocollo di riservatezza, desidero richiedere l'accesso privato al catalogo riservato dei risultati prima/dopo, alle brochure informative personalizzate e ai casi di studio privati.\n\nGrazie."
  },
  de: {
    title: "VIP-Patientenvertraulichkeit & Internationale Medizinische Vorschriften",
    descAndrology: "In strikter Übereinstimmung mit internationalen Standards für die Kommunikation im Gesundheitswesen und unserer kompromisslosen Hingabe an die Privatsphäre von VIP-Patienten werden explizite klinische Vorher-Nachher-Fotografien für fortgeschrittene andrologische Eingriffe auf unserer digitalen Plattform nicht öffentlich gezeigt.",
    descPlastic: "In strikter Übereinstimmung mit internationalen Standards für die Kommunikation im Gesundheitswesen und unserer kompromisslosen Hingabe an die Privatsphäre von VIP-Patienten werden explizite klinische Vorher-Nachher-Fotografien für fortgeschrittene plastische Eingriffe, Brust- und Körperkonturierungen auf unserer digitalen Plattform nicht öffentlich gezeigt.",
    protocol: "Um die elitäre Diskretion zu wahren, die unsere Klientel erwartet, verwalten wir klinische Ergebnisse ausschließlich über ein sicheres, privates Offenlegungsprotokoll.",
    whatsappBtn: "Privaten Zugang per WhatsApp anfordern",
    emailBtn: "Per E-Mail anfordern",
    emailCopied: "E-Mail kopiert!",
    footerCopy: "Klicken Sie unten, um sich sofort mit unseren Elite-Medizinberatern in Verbindung zu setzen und unseren vertraulichen Ergebniskatalog, personalisierte Behandlungsbroschüren und private Fallstudien zu erhalten.",
    emailSubject: "Vertrauliche Zugangsbestellung - Ergebniskatalog für {treatmentTitle}",
    emailBody: "Sehr geehrtes Team der Meva Clinic,\n\nich interessiere mich für das Verfahren {treatmentTitle}. In Übereinstimmung mit Ihrem strengen Protokoll zur Patientengeheimhaltung bitte ich um privaten Zugang zu Ihrem vertraulichen Vorher-Nachher-Ergebniskatalog, personalisierten Behandlungsbroschüren und privaten Fallstudien.\n\nVielen Dank."
  },
  fr: {
    title: "Confidentialité des Patients VIP & Réglementations Médicales Internationales",
    descAndrology: "En stricte conformité avec les normes internationales de communication en matière de santé et avec notre dévouement sans compromis à la vie privée des patients VIP, les résultats photographiques cliniques explicites avant-après pour les procédures andrologiques avancées ne sont pas affichés publiquement sur notre plateforme numérique.",
    descPlastic: "En stricte conformité avec les normes internationales de communication en matière de santé et avec notre dévouement sans compromis à la vie privée des patients VIP, les résultats photographiques cliniques explicites avant-après pour les procédures avancées de chirurgie plastique, mammaire et de remodelage corporel ne sont pas affichés publiquement sur notre plateforme numérique.",
    protocol: "Pour préserver la discrétion d'élite attendue par notre clientèle, nous gérons les résultats cliniques exclusivement via un protocole de divulgation privé et sécurisé.",
    whatsappBtn: "Demander un Accès Privé via WhatsApp",
    emailBtn: "Demander par E-mail",
    emailCopied: "E-mail Copié !",
    footerCopy: "Cliquez ci-dessous pour vous connecter instantanément avec nos conseillers médicaux d'élite afin de recevoir notre catalogue de résultats confidentiels, nos brochures de traitement personnalisées et nos études de cas privées.",
    emailSubject: "Demande d'Accès Confidentiel - Catalogue de Résultats pour {treatmentTitle}",
    emailBody: "Chère équipe de Meva Clinic,\n\nJe suis intéressé par la procédure de {treatmentTitle}. Conformément à votre protocole d'extrême confidentialité, je souhaite demander un accès privé à votre catalogue de résultats avant-après, à vos brochures de traitement personnalisées et à vos études de cas privées.\n\nMerci."
  },
  ru: {
    title: "Конфиденциальность VIP-пациентов и Международные Медицинские Правила",
    descAndrology: "В строгом соответствии с международными стандартами информирования в сфере здравоохранения и нашей бескомпромиссной заботой о конфиденциальности VIP-пациентов, откровенные клинические фотографии до и после для сложных андрологических процедур не публикуются в открытом доступе на нашей цифровой платформе.",
    descPlastic: "В строгом соответствии с международными стандартами информирования в сфере здравоохранения и нашей бескомпромиссной заботой о конфиденциальности VIP-пациентов, откровенные клинические фотографии до и после для сложных процедур пластической хирургии, пластики груди и контурирования тела не публикуются в открытом доступе на нашей цифровой платформе.",
    protocol: "Для обеспечения исключительной конфиденциальности, которую ожидает наша клиентура, мы предоставляем клинические результаты исключительно через безопасный протокол закрытого доступа.",
    whatsappBtn: "Запросить частный доступ через WhatsApp",
    emailBtn: "Запросить по электронной почте",
    emailCopied: "Email скопирован!",
    footerCopy: "Нажмите ниже, чтобы мгновенно связаться с нашими элитными медицинскими консультантами и получить конфиденциальный каталог результатов, персонализированные брошюры о лечении и частные кейсы.",
    emailSubject: "Запрос закрытого доступа - Каталог результатов процедуры {treatmentTitle}",
    emailBody: "Уважаемая команда клиники Meva,\n\nЯ интересуюсь процедурой {treatmentTitle}. В соответствии с вашим протоколом конфиденциальности для VIP-пациентов, я хотел бы запросить закрытый доступ к вашему конфиденциальному каталогу результатов до/после, индивидуальным брошюрам и частным клиническим случаям.\n\nСпасибо."
  }
};

export default function PrivacyCtaCard({ lang, treatmentId, treatmentTitle }: PrivacyCtaCardProps) {
  const [copied, setCopied] = useState(false);
  const currentLang = translations[lang] ? lang : 'en';
  const t = translations[currentLang];

  // Dynamically select description based on treatment type
  const isAndrology = treatmentId === 'ligamentolysis-andrology';
  const descriptionText = isAndrology ? t.descAndrology : t.descPlastic;

  // Substitute dynamic treatmentTitle into subject and body strings
  const subjectText = t.emailSubject.replace(/{treatmentTitle}/g, treatmentTitle);
  const bodyText = t.emailBody.replace(/{treatmentTitle}/g, treatmentTitle);

  // WhatsApp configuration
  const number = currentLang === 'ro' ? '905324675941' : '905366511599';
  const whatsappUrl = `https://wa.me/${number}?text=${encodeURIComponent(bodyText)}`;

  // Email configuration
  const emailUrl = `mailto:info@mevaclinic.com?subject=${encodeURIComponent(subjectText)}&body=${encodeURIComponent(bodyText)}`;

  const handleEmailClick = () => {
    try {
      navigator.clipboard.writeText('info@mevaclinic.com');
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    } catch (err) {
      console.error('Failed to copy email to clipboard: ', err);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-[#0b1626] text-white rounded-[2rem] p-8 md:p-10 shadow-2xl border-2 border-amber-500/25 relative overflow-hidden"
    >
      {/* Decorative Gold Glow Effects */}
      <div className="absolute top-0 right-0 w-48 h-48 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

      {/* Header Icon */}
      <div className="flex justify-center mb-6">
        <div className="w-16 h-16 rounded-full bg-amber-500/10 flex items-center justify-center border border-amber-500/30 animate-pulse">
          <ShieldAlert size={32} className="text-amber-500" />
        </div>
      </div>

      {/* Card Contents */}
      <div className="text-center space-y-6">
        <h3 className="text-xl md:text-2xl font-serif font-bold text-amber-500 tracking-wide leading-snug">
          {t.title}
        </h3>
        
        <p className="text-gray-300 text-sm leading-relaxed max-w-xl mx-auto font-light">
          {descriptionText}
        </p>

        <p className="text-amber-500/90 text-sm font-semibold tracking-wide italic max-w-xl mx-auto">
          {t.protocol}
        </p>

        {/* Buttons Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-center gap-2.5 bg-[#25D366] text-white font-bold py-3.5 px-6 rounded-2xl shadow-lg hover:bg-green-500 transition-all transform hover:-translate-y-0.5 min-h-[48px] text-xs md:text-sm"
          >
            <MessageSquare size={18} />
            {t.whatsappBtn}
          </a>

          <a
            href={emailUrl}
            onClick={handleEmailClick}
            className={`flex items-center justify-center gap-2.5 border font-bold py-3.5 px-6 rounded-2xl transition-all transform hover:-translate-y-0.5 min-h-[48px] text-xs md:text-sm ${
              copied 
                ? 'border-green-500 bg-green-500/10 text-green-400' 
                : 'border-white/20 text-white hover:border-amber-500 hover:bg-white/5'
            }`}
          >
            {copied ? (
              <>
                <Check size={16} className="text-green-400" />
                {t.emailCopied}
              </>
            ) : (
              <>
                <Send size={16} className="text-amber-500" />
                {t.emailBtn}
              </>
            )}
          </a>
        </div>

        {/* Footer Copy */}
        <p className="text-[11px] text-gray-400 leading-normal max-w-lg mx-auto pt-4 border-t border-t-white/10 font-light">
          {t.footerCopy}
        </p>
      </div>
    </motion.div>
  );
}
