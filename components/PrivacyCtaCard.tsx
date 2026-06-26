'use client';

import React, { useState } from 'react';
import { ShieldAlert, Send, MessageSquare, Check, X, Loader2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

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
  footerCopy: string;
  emailSubject: string;
  emailBody: string;
  namePlaceholder: string;
  emailPlaceholder: string;
  phonePlaceholder: string;
  submitBtn: string;
  submitting: string;
  successMsg: string;
  errorMsg: string;
  backBtn: string;
}> = {
  en: {
    title: "Private Patient Confidentiality & International Medical Regulations",
    descAndrology: "In strict compliance with international healthcare communication standards and our uncompromising dedication to private patient privacy, explicit before-and-after clinical photographic results for advanced andrology procedures are not displayed publicly on our digital platform.",
    descPlastic: "In strict compliance with international healthcare communication standards and our uncompromising dedication to private patient privacy, explicit before-and-after clinical photographic results for advanced plastic, breast, and body contouring procedures are not displayed publicly on our digital platform.",
    protocol: "To preserve the private discretion our clientele expects, we manage clinical outcomes exclusively through a secure, private disclosure protocol.",
    whatsappBtn: "Request Private Access via WhatsApp",
    emailBtn: "Request via E-mail",
    footerCopy: "Click below to instantly connect with our international patient care consultants to receive our confidential results catalog, personalized treatment brochures, and private case studies.",
    emailSubject: "Private Access Request - {treatmentTitle} Outcomes Catalog",
    emailBody: "Dear Meva Clinic Team,\n\nI am interested in learning more about the {treatmentTitle} procedure. In accordance with your private patient confidentiality protocol, I would like to request private access to the confidential results catalog, personalized treatment brochures, and private case studies.\n\nThank you.",
    namePlaceholder: "Your Full Name",
    emailPlaceholder: "Your E-mail Address",
    phonePlaceholder: "Your Phone Number (Optional)",
    submitBtn: "Submit Confidential Request",
    submitting: "Sending...",
    successMsg: "Thank you. Your private access request has been received. Our medical consultants will contact you shortly.",
    errorMsg: "An error occurred. Please try again or request via WhatsApp.",
    backBtn: "Back"
  },
  ro: {
    title: "Confidențialitatea Privată a Pacienților și Reglementările Medicale Internaționale",
    descAndrology: "În strictă conformitate cu standardele internaționale de comunicare în domeniul sănătății și cu dedicarea noastră necompromisă față de confidențialitatea privată a pacienților, rezultatele fotografice clinice explicite înainte și după pentru procedurile avansate de andrologie nu sunt afișate public pe platforma noastră digitală.",
    descPlastic: "În strictă conformitate cu standardele internaționale de comunicare în domeniul sănătății și cu dedicarea noastră necompromisă față de confidențialitatea privată a pacienților, rezultatele fotografice clinice explicite înainte și după pentru procedurile avansate de chirurgie plastică, remodelare mamară și corporală nu sunt afișate public pe platforma noastră digitală.",
    protocol: "Pentru a păstra discreția privată pe care o așteaptă clientela noastră, gestionăm rezultatele clinice exclusiv printr-un protocol securizat de dezvăluire privată.",
    whatsappBtn: "Solicită Acces Privat prin WhatsApp",
    emailBtn: "Solicită prin E-mail",
    footerCopy: "Faceți clic mai jos pentru a vă conecta instantaneu cu consultanții noștri internaționali de asistență medicală pentru a primi catalogul nostru confidențial de rezultate, broșuri de tratament personalizate și studii de caz private.",
    emailSubject: "Solicitare Acces Confidențial - Catalog Rezultate {treatmentTitle}",
    emailBody: "Stimată echipă Meva Clinic,\n\nDoresc să aflu mai multe detalii despre procedura de {treatmentTitle}. În conformitate cu protocolul dvs. de confidențialitate, doresc să solicit acces privat la catalogul confidențial de rezultate înainte/după, broșurile de tratament personalizate și studiile de caz private.\n\nVă mulțumesc.",
    namePlaceholder: "Numele Complet",
    emailPlaceholder: "Adresa de E-mail",
    phonePlaceholder: "Număr de Telefon (Opțional)",
    submitBtn: "Trimite Solicitarea Confidențială",
    submitting: "Se trimite...",
    successMsg: "Vă mulțumim. Solicitarea dvs. de acces privat a fost primită. Consultanții noștri medicali vă vor contacta în cel mai scurt timp.",
    errorMsg: "A apărut o eroare. Vă rugăm să încercați din nou sau să solicitați prin WhatsApp.",
    backBtn: "Înapoi"
  },
  es: {
    title: "Confidencialidad Privada de Pacientes y Regulaciones Médicas Internacionales",
    descAndrology: "En estricto cumplimiento con los estándares internacionales de comunicación de atención médica y nuestra inquebrantable dedicación a la privacidad privada de los pacientes, los resultados fotográficos clínicos explícitos de antes y después para procedimientos avanzados de andrología no se muestran públicamente en nuestra plataforma digital.",
    descPlastic: "En estricto cumplimiento con los estándares internacionales de comunicación de atención médica y nuestra inquebrantable dedicación a la privacidad privada de los pacientes, los resultados fotográficos clínicos explícitos de antes y después para procedimientos avanzados de cirugía plástica, senos y contorno corporal no se muestran públicamente en nuestra plataforma digital.",
    protocol: "Para preservar la discreción privada que espera nuestra clientela, gestionamos los resultados clínicos exclusivamente a través de un protocolo seguro de divulgación privada.",
    whatsappBtn: "Solicitar Acceso Privado vía WhatsApp",
    emailBtn: "Solicitar vía Correo Electrónico",
    footerCopy: "Haga clic a continuación para conectarse instantáneamente con nuestros asesores de atención médica internacional y recibir nuestro catálogo de resultados confidenciales, folletos de tratamiento personalizados y estudios de casos privados.",
    emailSubject: "Solicitud de Acceso Confidencial - Catálogo de Resultados de {treatmentTitle}",
    emailBody: "Estimado equipo de Meva Clinic,\n\nEstoy interesado en obtener más información sobre el procedimiento de {treatmentTitle}. De acuerdo con su estricto protocolo de confidencialidad para pacientes, solicito acceso privado a su catálogo de resultados de antes y después, folletos de tratamiento personalizados y estudios de casos privados.\n\nGracias.",
    namePlaceholder: "Nombre Completo",
    emailPlaceholder: "Dirección de Correo",
    phonePlaceholder: "Número de Teléfono (Opcional)",
    submitBtn: "Enviar Solicitud Confidencial",
    submitting: "Enviando...",
    successMsg: "Gracias. Su solicitud de acceso privado ha sido recibida. Nuestros asesores médicos se pondrán en contacto con usted en breve.",
    errorMsg: "Ocurrió un error. Por favor intente de nuevo o solicite vía WhatsApp.",
    backBtn: "Atrás"
  },
  it: {
    title: "Riservatezza Privata dei Pazienti e Regolamentazioni Mediche Internazionali",
    descAndrology: "In stretta conformità con gli standard internazionali di comunicazione sanitaria e la nostra dedizione incrollabile alla privacy privata dei pazienti, i risultati fotografici clinici espliciti prima e dopo per le procedure andrologiche avanzate non sono visualizzati pubblicamente sulla nostra piattaforma digitale.",
    descPlastic: "In stretta conformità con gli standard internazionali di comunicazione sanitaria e la nostra dedizione incrollabile alla privacy privata dei pazienti, i risultati fotografici clinici espliciti prima e dopo per le procedure avanzate di chirurgia plastica, del seno e del contorno corporeo non sono visualizzati pubblicamente sulla nostra piattaforma digitale.",
    protocol: "Per preservare la riservatezza privata che la nostra clientela si aspetta, gestiamo i risultati clinici esclusivamente tramite un protocollo di divulgazione privato e sicuro.",
    whatsappBtn: "Richiedi Accesso Riservato via WhatsApp",
    emailBtn: "Richiedi via E-mail",
    footerCopy: "Clicca qui sotto per connetterti istantaneamente con i nostri consulenti per la cura dei pazienti internazionali per ricevere il nostro catalogo dei risultati riservato, brochure di trattamento personalizzate e casi di studio privati.",
    emailSubject: "Richiesta Accesso Riservato - Catalogo Risultati {treatmentTitle}",
    emailBody: "Gentile Team di Meva Clinic,\n\nSono interessato a ricevere maggiori informazioni sulla procedura di {treatmentTitle}. In linea con il vostro protocollo di riservatezza, desidero richiedere l'accesso privato al catalogo riservato dei risultati prima/dopo, alle brochure informative personalizzate e ai casi di studio privati.\n\nGrazie.",
    namePlaceholder: "Nome Completo",
    emailPlaceholder: "Indirizzo E-mail",
    phonePlaceholder: "Numero di Telefono (Opzionale)",
    submitBtn: "Invia Richiesta Riservata",
    submitting: "Invio in corso...",
    successMsg: "Grazie. La tua richiesta di acesso riservato è stata ricevuta. I nostri consulenti medici ti contatteranno a breve.",
    errorMsg: "Si è verificato un errore. Riprova o richiedi tramite WhatsApp.",
    backBtn: "Indietro"
  },
  de: {
    title: "Patientenvertraulichkeit für Privatpatienten & Internationale Medizinische Vorschriften",
    descAndrology: "In strikter Übereinstimmung mit internationalen Standards für die Kommunikation im Gesundheitswesen und unserer kompromisslosen Hingabe an die Privatsphäre von Privatpatienten werden explizite klinische Vorher-Nachher-Fotografien für fortgeschrittene andrologische Eingriffe auf unserer digitalen Plattform nicht öffentlich gezeigt.",
    descPlastic: "In strikter Übereinstimmung mit internationalen Standards für die Kommunikation im Gesundheitswesen und unserer kompromisslosen Hingabe an die Privatsphäre von Privatpatienten werden explizite klinische Vorher-Nachher-Fotografien für fortgeschrittene plastische Eingriffe, Brust- und Körperkonturierungen auf unserer digitalen Plattform nicht öffentlich gezeigt.",
    protocol: "Um die private Diskretion zu wahren, die unsere Klientel erwartet, verwalten wir klinische Ergebnisse ausschließlich über ein sicheres, privates Offenlegungsprotokoll.",
    whatsappBtn: "Privaten Zugang per WhatsApp anfordern",
    emailBtn: "Per E-Mail anfordern",
    footerCopy: "Klicken Sie unten, um sich sofort mit unseren internationalen Beratern für die Patientenversorgung in Verbindung zu setzen und unseren vertraulichen Ergebniskatalog, personalisierte Behandlungsbroschüren und private Fallstudien zu erhalten.",
    emailSubject: "Vertrauliche Zugangsbestellung - Ergebniskatalog für {treatmentTitle}",
    emailBody: "Sehr geehrtes Team der Meva Clinic,\n\nich interessiere mich für das Verfahren {treatmentTitle}. In Übereinstimmung mit Ihrem strengen Protokoll zur Patientengeheimhaltung bitte ich um privaten Zugang zu Ihrem vertraulichen Vorher-Nachher-Ergebniskatalog, personalisierten Behandlungsbroschüren und privaten Fallstudien.\n\nVielen Dank.",
    namePlaceholder: "Ihr vollständiger Name",
    emailPlaceholder: "Ihre E-Mail-Adresse",
    phonePlaceholder: "Telefonnummer (Optional)",
    submitBtn: "Anfrage vertraulich senden",
    submitting: "Wird gesendet...",
    successMsg: "Vielen Dank. Ihre vertrauliche Anfrage wurde empfangen. Unsere Medizinberater werden sich in Kürze mit Ihnen in Verbindung setzen.",
    errorMsg: "Ein Fehler ist aufgetreten. Bitte versuchen Sie es erneut oder per WhatsApp.",
    backBtn: "Zurück"
  },
  fr: {
    title: "Confidentialité des Patients Privés & Réglementations Médicales Internationales",
    descAndrology: "En stricte conformité avec les normes internationales de communication en matière de santé et avec notre dévouement sans compromis à la vie privée des patients privés, les résultats photographiques cliniques explicites avant-après pour les procédures andrologiques avancées ne sont pas affichés publiquement sur notre plateforme numérique.",
    descPlastic: "En stricte conformité avec les normes internationales de communication en matière de santé et avec notre dévouement sans compromis à la vie privée des patients privés, les résultats photographiques cliniques explicites avant-après pour les procédures avancées de chirurgie plastique, mammaire et de remodelage corporel ne sont pas affichés publiquement sur notre plateforme numérique.",
    protocol: "Pour préserver la discrétion privée attendue par notre clientèle, nous gérons les résultats cliniques exclusivement via un protocole de divulgation privé et sécurisé.",
    whatsappBtn: "Demander un Accès Privé via WhatsApp",
    emailBtn: "Demander par E-mail",
    footerCopy: "Cliquez ci-dessous pour vous connecter instantanément avec nos conseillers en soins aux patients internationaux afin de recevoir notre catalogue de résultats confidentiels, nos brochures de traitement personnalisées et nos études de cas privées.",
    emailSubject: "Demande d'Accès Confidentiel - Catalogue de Résultats pour {treatmentTitle}",
    emailBody: "Chère équipe de Meva Clinic,\n\nJe suis intéressé par la procédure de {treatmentTitle}. Conformément à votre protocole d'extrême confidentialité, je souhaite demander un accès privé à votre catalogue de résultats avant-après, à vos brochures de traitement personnalisées et à vos études de cas privées.\n\nMerci.",
    namePlaceholder: "Votre nom complet",
    emailPlaceholder: "Votre adresse e-mail",
    phonePlaceholder: "Numéro de téléphone (Optionnel)",
    submitBtn: "Envoyer la demande confidentielle",
    submitting: "Envoi...",
    successMsg: "Merci. Votre demande d'accès privé a bien été reçue. Nos conseillers médicaux vous contacteront sous peu.",
    errorMsg: "Une erreur est survenue. Veuillez réessayer ou demander via WhatsApp.",
    backBtn: "Retour"
  },
  ru: {
    title: "Конфиденциальность частных пациентов и Международные Медицинские Правила",
    descAndrology: "В строгом соответствии с международными стандартами информирования в сфере здравоохранения и нашей бескомпромиссной заботой о конфиденциальности частных пациентов, откровенные клинические фотографии до и после для сложных андрологических процедур не публикуются в открытом доступе на нашей цифровой платформе.",
    descPlastic: "В строгом соответствии с международными стандартами информирования в сфере здравоохранения и нашей бескомпромиссной заботой о конфиденциальности частных пациентов, откровенные клинические фотографии до и после для сложных процедур пластической хирургии, пластики груди и контурирования тела не публикуются в открытом доступе на нашей цифровой платформе.",
    protocol: "Для обеспечения исключительной конфиденциальности, которую ожидает наша клиентура, мы предоставляем клинические результаты исключительно через безопасный протокол закрытого доступа.",
    whatsappBtn: "Запросить частный доступ через WhatsApp",
    emailBtn: "Запросить по электронной почте",
    footerCopy: "Нажмите ниже, чтобы мгновенно связаться с нашими международными консультантами по уходу за пациентами и получить конфиденциальный каталог результатов, персонализированные брошюры о лечении и частные кейсы.",
    emailSubject: "Запрос закрытого доступа - Каталог результатов процедуры {treatmentTitle}",
    emailBody: "Уважаемая команда клиники Meva,\n\nЯ интересуюсь процедурой {treatmentTitle}. В соответствии с вашим протоколом конфиденциальности для частных пациентов, я хотел бы запросить закрытый доступ к вашему конфиденциальному каталогу результатов до/после, индивидуальным брошюрам и частным клиническим случаям.\n\nСпасибо.",
    namePlaceholder: "Ваше полное имя",
    emailPlaceholder: "Ваш адрес электронной почты",
    phonePlaceholder: "Номер телефона (необязательно)",
    submitBtn: "Отправить конфиденциальный запрос",
    submitting: "Отправка...",
    successMsg: "Спасибо. Ваш запрос на закрытый доступ получен. Наши медицинские консультанты свяжутся с вами в ближайшее время.",
    errorMsg: "Произошла ошибка. Пожалуйста, попробуйте еще раз или сделайте запрос через WhatsApp.",
    backBtn: "Назад"
  }
};

export default function PrivacyCtaCard({ lang, treatmentId, treatmentTitle }: PrivacyCtaCardProps) {
  const [showForm, setShowForm] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);

  const currentLang = translations[lang] ? lang : 'en';
  const t = translations[currentLang];

  // Map category code to API requirement
  const getApiCategory = (tid: string): string => {
    const id = tid.toLowerCase();
    if (id.includes('andrology')) return 'andrology';
    if (id.includes('hair') || id.includes('transplant')) return 'hair';
    if (id.includes('dental') || id.includes('crowns') || id.includes('smile')) return 'dental';
    if (id.includes('gastric') || id.includes('balloon') || id.includes('botox')) return 'bariatric';
    return 'plastic'; // Default to plastic for breast, bbl, tummy, facelift, lift, etc.
  };

  const treatmentCategoryForApi = getApiCategory(treatmentId);

  // Dynamically select description based on treatment type
  const isAndrology = treatmentId === 'ligamentolysis-andrology';
  const descriptionText = isAndrology ? t.descAndrology : t.descPlastic;

  const bodyText = t.emailBody.replace(/{treatmentTitle}/g, treatmentTitle);

  // WhatsApp configuration
  const number = currentLang === 'ro' ? '905324675941' : '905366511599';
  const whatsappUrl = `https://wa.me/${number}?text=${encodeURIComponent(bodyText)}`;

  // Handle Form Submission
  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email) return;

    setIsSubmitting(true);
    setIsError(false);

    try {
      const response = await fetch('/api/leads', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          email,
          phone: phone || 'Not specified',
          treatment: treatmentCategoryForApi,
          message: `Confidential access request for: ${treatmentTitle} (${treatmentId})`,
          source: 'Website - Privacy CTA',
          lang: currentLang,
        }),
      });

      if (response.ok) {
        setIsSuccess(true);
        setName('');
        setEmail('');
        setPhone('');
      } else {
        setIsError(true);
      }
    } catch (err) {
      console.error('Lead submission error:', err);
      setIsError(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-[#0b1626] text-white rounded-[2rem] p-8 md:p-10 shadow-2xl border-2 border-amber-500/25 relative overflow-hidden"
    >
      {/* Decorative Gold Glow Effects */}
      <div className="absolute top-0 right-0 w-48 h-48 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

      <AnimatePresence mode="wait">
        {!showForm ? (
          <motion.div
            key="cta-buttons"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            className="text-center space-y-6"
          >
            {/* Header Icon */}
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 rounded-full bg-amber-500/10 flex items-center justify-center border border-amber-500/30 animate-pulse">
                <ShieldAlert size={32} className="text-amber-500" />
              </div>
            </div>

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

              <button
                onClick={() => setShowForm(true)}
                className="flex items-center justify-center gap-2.5 border border-white/20 text-white font-bold py-3.5 px-6 rounded-2xl hover:border-amber-500 hover:bg-white/5 transition-all transform hover:-translate-y-0.5 min-h-[48px] text-xs md:text-sm cursor-pointer"
              >
                <Send size={16} className="text-amber-500" />
                {t.emailBtn}
              </button>
            </div>

            {/* Footer Copy */}
            <p className="text-[11px] text-gray-400 leading-normal max-w-lg mx-auto pt-4 border-t border-t-white/10 font-light">
              {t.footerCopy}
            </p>
          </motion.div>
        ) : (
          <motion.div
            key="lead-form"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-6"
          >
            {/* Form Header */}
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-amber-500/10 flex items-center justify-center border border-amber-500/20">
                  <Send size={18} className="text-amber-500" />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-white uppercase tracking-wider">
                    {t.emailBtn}
                  </h4>
                  <p className="text-[10px] text-amber-500 font-semibold tracking-wide">
                    {treatmentTitle}
                  </p>
                </div>
              </div>
              <button
                onClick={() => {
                  setShowForm(false);
                  setIsSuccess(false);
                  setIsError(false);
                }}
                className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-all cursor-pointer"
              >
                <X size={18} />
              </button>
            </div>

            {/* Form Fields */}
            {isSuccess ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-8 space-y-4"
              >
                <div className="w-16 h-16 rounded-full bg-green-500/20 border-2 border-green-500/30 flex items-center justify-center mx-auto">
                  <Check size={32} className="text-green-400" />
                </div>
                <h4 className="text-lg font-serif font-bold text-green-400">
                  {t.successMsg}
                </h4>
                <button
                  onClick={() => {
                    setShowForm(false);
                    setIsSuccess(false);
                  }}
                  className="mt-4 text-xs font-bold text-amber-500 hover:text-white uppercase tracking-wider underline cursor-pointer"
                >
                  {t.backBtn}
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-4 pt-2">
                <div className="space-y-1">
                  <input
                    type="text"
                    required
                    placeholder={t.namePlaceholder}
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-amber-500/60 focus:bg-white/10 transition-all"
                  />
                </div>

                <div className="space-y-1">
                  <input
                    type="email"
                    required
                    placeholder={t.emailPlaceholder}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-amber-500/60 focus:bg-white/10 transition-all"
                  />
                </div>

                <div className="space-y-1">
                  <input
                    type="tel"
                    placeholder={t.phonePlaceholder}
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-amber-500/60 focus:bg-white/10 transition-all"
                  />
                </div>

                {isError && (
                  <p className="text-xs text-red-400 font-medium bg-red-500/10 border border-red-500/20 px-3 py-2.5 rounded-xl">
                    {t.errorMsg}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-amber-500 hover:bg-amber-400 disabled:bg-amber-500/40 text-[#0b1626] font-bold py-3.5 rounded-xl transition-all shadow-lg hover:shadow-amber-500/10 hover:-translate-y-0.5 flex items-center justify-center gap-2 cursor-pointer text-sm"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 size={16} className="animate-spin" />
                      {t.submitting}
                    </>
                  ) : (
                    <>
                      <Send size={16} />
                      {t.submitBtn}
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
