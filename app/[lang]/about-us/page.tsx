// app/[lang]/about-us/page.tsx
import { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { CertRow } from '@/components/ClinicalBadges';
import { tUI } from '@/utils/uiTranslations';
import { buildMetadata } from '@/app/utils/seo';
import { ShieldCheck, Compass, Award, Activity, Lock, ArrowRight } from 'lucide-react';

type Props = {
  params: Promise<{ lang: string }>;
};

// 7-Language local translation matrix for the overhauled about-us page content
const PAGE_T: Record<string, Record<string, string>> = {
  heroTitle: {
    en: "Redefining the Standards of Global Healthcare Facilitation",
    ro: "Redefinirea Standardelor de Facilitare Medicală Globală",
    es: "Redefiniendo los Estándares de la Facilitación Médica Global",
    it: "Ridefinire gli Standard della Facilitazione Sanitaria Globale",
    fr: "Redéfinir les Normes de la Facilitation Médicale Mondiale",
    de: "Die Standards der globalen medizinischen Vermittlung neu definieren",
    ru: "Переосмысление стандартов глобального медицинского обслуживания"
  },
  heroSubtitle: {
    en: "Meva Clinic was founded with a singular, uncompromised vision: to eliminate the borders, complexities, and stresses of international medical travel. Based in Istanbul, we operate not merely as coordinators, but as your dedicated medical guardians, bridging the world’s elite patients with Turkey's most sophisticated medical infrastructure.",
    ro: "Meva Clinic a fost fondată cu o viziune singulară, fără compromisuri: eliminarea granițelor, complexităților și stresului călătoriilor medicale internaționale. Cu sediul în Istanbul, operăm nu doar ca și coordonatori, ci ca și protectori medicali dedicați, conectând pacienții de elită ai lumii cu cea mai sofisticată infrastructură medicală din Turcia.",
    es: "Meva Clinic se fundó con una visión única y sin concesiones: eliminar las fronteras, complejidades y tensiones de los viajes médicos internacionales. Con sede en Estambul, operamos no solo como coordinadores, sino como sus guardianes médicos dedicados, uniendo a los pacientes de élite del mundo con la infraestructura médica más sofisticada de Turquía.",
    it: "Meva Clinic è stata fondata con una visione unica e senza compromessi: eliminare i confini, le complessità e le tensioni dei viaggi medici internazionali. Con sede a Istanbul, operiamo non solo come coordinatori, ma come vostri custodi medici dedicati, collegando i pazienti d'élite del mondo con la infrastruttura medica più sofisticata della Turchia.",
    fr: "Meva Clinic a été fondée avec une vision unique et sans compromis : éliminer les frontières, les complexités et le stress des voyages médicaux internationaux. Basés à Istanbul, nous n'opérons pas seulement en tant que coordinateurs, mais en tant que vos gardiens médicaux dédiés, reliant les patients d'élite du monde à l'infrastructure médicale la plus sophistiquée de Turquie.",
    de: "Meva Clinic wurde mit einer einzigartigen, kompromisslosen Vision gegründet: die Grenzen, Komplexitäten und Belastungen internationaler medizinischer Reisen zu beseitigen. Mit Sitz in Istanbul agieren wir nicht nur als Koordinatoren, sondern als Ihre engagierten medizinischen Hüter, die die Elite-Patienten der Welt mit der anspruchsvollsten medizinischen Infrastruktur der Türkei verbinden.",
    ru: "Meva Clinic была основана с единственной, бескомпромиссной целью: устранить границы, сложности и стресс, связанные с международными медицинскими поездками. Базируясь в Стамбуле, мы работаем не просто как координаторы, но и как ваши преданные медицинские опекуны, связывая элитных пациентов со всего мира с самой современной медицинской инфраструктурой Турции."
  },
  philosophyTitle: {
    en: "Your Trusted Advocate in Istanbul",
    ro: "Avocatul Tău de Încredere în Istanbul",
    es: "Su Defensor de Confianza en Estambul",
    it: "Il Tuo Difensore di Fiducia a Istanbul",
    fr: "Votre Défenseur de Confiance à Istanbul",
    de: "Ihr vertrauenswürdiger Anwalt in Istanbul",
    ru: "Ваш надежный представитель в Стамбуле"
  },
  philosophyBody: {
    en: "Navigating an unfamiliar healthcare system in a foreign country can be daunting. Hospitals represent their own interests; Meva Clinic represents YOU. We act as an independent, premium quality filter. We do not own hospitals—we audit them. We strictly facilitate medical journeys to premium, JCI-accredited facilities and collaborate exclusively with high-volume, board-certified surgeons who meet the rigorous 'Meva Precision Standard'. From pre-consultation to your lifetime aftercare, our priority is your safety, comfort, and elite medical outcome.",
    ro: "Navigarea într-un sistem de sănătate necunoscut într-o țară străină poate fi copleșitoare. Spitalele își reprezintă propriile interese; Meva Clinic te reprezintă pe TINE. Acționăm ca un filtru independent de calitate premium. Nu deținem spitale - le audităm. Facilităm exclusiv călătoriile medicale către unități premium acreditate JCI și colaborăm numai cu chirurgi cu experiență vastă, certificați, care îndeplinesc standardul riguros 'Meva Precision Standard'. De la pre-consultare până la asistența postoperatorie pe viață, prioritatea noastră este siguranța, confortul și rezultatul dvs. medical de elită.",
    es: "Navegar por un sistema de salud desconocido en un país extranjero puede ser desalentador. Los hospitales representan sus propios intereses; Meva Clinic lo representa a USTED. Actuamos como un filtro de calidad premium independiente. No somos dueños de hospitales, los auditamos. Facilitamos estrictamente los viajes médicos a instalaciones premium acreditadas por la JCI y colaboramos exclusivamente con cirujanos certificados de gran volumen que cumplen con el riguroso 'Meva Precision Standard'. Desde la consulta previa hasta la atención posterior de por vida, nuestra prioridad es su seguridad, comodidad y resultado médico de élite.",
    it: "Orientarsi in un sistema sanitario sconosciuto in un paese straniero può essere scoraggiante. Gli ospedali rappresentano i propri interessi; Meva Clinic rappresenta TE. Agiamo come un filtro di qualità premium indipendente. Non possediamo ospedali, li verifichiamo. Facilitiamo rigorosamente i viaggi medici presso strutture premium accreditate JCI e collaboriamo esclusivamente con chirurghi certificati ad alto volume che soddisfano il rigoroso 'Meva Precision Standard'. Dalla pre-consulenza all'assistenza post-operatoria a vita, la nostra priorità è la vostra sicurezza, il vostro comfort e un risultato medico d'élite.",
    fr: "Naviguer dans un système de santé inconnu dans un pays étranger peut être intimidant. Les hôpitaux représentent leurs propres intérêts ; Meva Clinic vous représente. Nous agissons comme un filtre de qualité premium indépendant. Nous ne possédons pas d'hôpitaux, nous les auditons. Nous facilitons strictement les voyages médicaux vers des établissements haut de gamme accrédités JCI et collaborons exclusivement avec des chirurgiens certifiés à haut volume qui répondent à la norme rigoureuse 'Meva Precision Standard'. De la pré-consultation à votre suivi à vie, notre priorité est votre sécurité, votre confort et un résultat médical d'élite.",
    de: "Sich in einem fremden Gesundheitssystem in einem fremden Land zurechtzufinden, kann entmutigend sein. Krankenhäuser vertreten ihre eigenen Interessen; Meva Clinic vertritt SIE. Wir fungieren als unabhängiger Premium-Qualitätsfilter. Wir besitzen keine Krankenhäuser – wir prüfen sie. Wir vermitteln medizinische Reisen ausschließlich an erstklassige, JCI-akkreditierte Einrichtungen und arbeiten ausschließlich mit erfahrenen, staatlich geprüften Chirurgen zusammen, die den strengen 'Meva Precision Standard' erfüllen. Von der Vorberatung bis hin zu Ihrer lebenslangen Nachsorge stehen Ihre Sicherheit, Ihr Komfort und ein hervorragendes medizinisches Ergebnis an erster Stelle.",
    ru: "Ориентироваться в незнакомой системе здравоохранения в чужой стране может быть непросто. Больницы представляют свои собственные интересы; Meva Clinic представляет ВАС. Мы действуем как независимый фильтр премиального качества. Мы не владеем больницами — мы их проверяем. Мы организуем медицинские поездки исключительно в сертифицированные клиники, аккредитованные JCI, и сотрудничаем исключительно с опытными сертифицированными хирургами, соответствующими строгому стандарту «Meva Precision Standard». От предварительной консультации до пожизненного послеоперационного ухода наш приоритет — ваша безопасность, комфорт и элитный медицинский результат."
  },
  pillar1Title: {
    en: "Uncompromised Facility Audits",
    ro: "Audituri Fără Compromis ale Tesisurilor",
    es: "Auditorías de Instalaciones Sin Concesiones",
    it: "Audit delle Strutture Senza Compromessi",
    fr: "Audits d'Établissements Sans Compromis",
    de: "Kompromisslose Anlagenprüfungen",
    ru: "Бескомпромиссный аудит медицинских центров"
  },
  pillar1Body: {
    en: "We ensure that every bariatric, plastic surgery, dental, and hair restoration procedure is conducted only in dynamic, state-of-the-art medical complexes equipped with advanced diagnostic technologies and full-scale intensive care support.",
    ro: "Ne asigurăm că fiecare procedură bariatrică, de chirurgie plastică, stomatologie și transplant de păr este efectuată numai în complexe medicale dinamice, de ultimă generație, echipate cu tehnologii avansate de diagnosticare și suport complet pentru terapie intensivă.",
    es: "Nos asiguramos de que cada procedimiento bariátrico, de cirugía plástica, dental y de restauración capilar se lleve a cabo únicamente en complejos médicos dinámicos y de vanguardia equipados con tecnologías de diagnóstico avanzadas y soporte de cuidados intensivos a gran escala.",
    it: "Garantiamo che ogni procedura bariatrica, di chirurgia plastica, dentale e di ripristino dei capelli sia condotta solo in complessi medici dinamici e all'avanguardia, dotati di tecnologie diagnostiche avanzate e supporto completo per la terapia intensiva.",
    fr: "Nous veillons à ce que chaque intervention bariatrique, de chirurgie plastique, dentaire et de restauration capillaire soit menée uniquement dans des complexes médicaux dynamiques et de pointe, équipés de technologies de diagnostic avancées et d'un support complet de soins intensifs.",
    de: "Wir stellen sicher, dass jeder bariatrische, plastisch-chirurgische, zahnmedizinische und Haartransplantations-Eingriff nur in dynamischen, hochmodernen medizinischen Komplexen durchgeführt wird, die mit fortschrittlichen Diagnosetechnologien und einer umfassenden Intensivstation ausgestattet sind.",
    ru: "Мы гарантируем, что каждая бариатрическая, пластическая, стоматологическая процедура и процедура по пересадке волос проводится только в передовых медицинских центрах, оснащенных современными диагностическими технологиями и полноценной реанимационной поддержкой."
  },
  pillar2Title: {
    en: "360° Premium Care Management",
    ro: "Management Premium de Îngrijire 360°",
    es: "Gestión de Atención Premium 360°",
    it: "Gestione dell'Assistenza Premium a 360°",
    fr: "Gestion des Soins Premium à 360°",
    de: "360° Premium‑Pflegemanagement",
    ru: "360° Премиальное обслуживание пациентов"
  },
  pillar2Body: {
    en: "International healthcare requires more than scheduling a procedure. It requires clear medical evaluation, experienced clinical teams, transparent communication, and reliable support before, during, and after treatment. Meva Clinic supports international patients with doctor-led treatment planning, trusted hospital partnerships, multilingual communication, and a patient-care experience designed around safety, comfort, and continuity.",
    ro: "Asistența medicală internațională necesită mai mult decât programarea unei proceduri. Necesită o evaluare medicală clară, echipe clinice cu experiență, comunicare transparentă și asistență de încredere înainte, în timpul și după tratament. Meva Clinic sprijină pacienții internaționali cu planificare a tratamentului condusă de medici, parteneriate spitalicești de încredere, comunicare multilingvă și o experiență de îngrijire a pacienților concepută în jurul siguranței, confortului și continuității.",
    es: "La atención médica internacional requiere más que programar un procedimiento. Requiere una evaluación médica clara, equipos clínicos experimentados, comunicación transparente y apoyo confiable antes, durante y después del tratamiento. Meva Clinic apoya a los pacientes internacionales con una planificación del tratamiento dirigida por médicos, asociaciones hospitalarias de confianza, comunicación multilingüe y una experiencia de atención al paciente diseñada en torno a la seguridad, la comodidad y la continuidad.",
    it: "L'assistenza sanitaria internazionale richiede molto più della semplice pianificazione di una procedura. Richiede una chiara valutazione medica, team clinici esperti, una comunicazione trasparente e un supporto affidabile prima, durante e dopo il trattamento. Meva Clinic supporta i pazienti internazionali con una pianificazione del trattamento guidata da medici, partnership ospedaliere di fiducia, comunicazione multilingue e un'esperienza di cura del paziente progettata intorno alla sicurezza, al comfort e alla continuità.",
    fr: "Les soins de santé internationaux exigent plus que la simple planification d'une intervention. Ils nécessitent une évaluation médicale claire, des équipes cliniques expérimentées, une communication transparente et un soutien fiable avant, pendant et après le traitement. Meva Clinic accompagne les patients internationaux grâce à une planification des traitements dirigée par des médecins, des partenariats hospitaliers de confiance, une communication multilingue et une expérience de soins conçue autour de la sécurité, du confort et de la continuité.",
    de: "Internationale Gesundheitsversorgung erfordert mehr als nur die Planung eines Eingriffs. Sie erfordert eine klare medizinische Bewertung, erfahrene klinische Teams, transparente Kommunikation und zuverlässige Unterstützung vor, während und nach der Behandlung. Meva Clinic unterstützt internationale Patienten mit einer ärztlich geleiteten Behandlungsplanung, vertrauenswürdigen Krankenhauspartnerschaften, mehrsprachiger Kommunikation und einer auf Sicherheit, Komfort und Kontinuität ausgerichteten Patientenversorgung.",
    ru: "Международное здравоохранение требует большего, чем просто планирование процедуры. Оно требует четкой медицинской оценки, опытных клинических команд, прозрачного общения и надежной поддержки до, во время и после лечения. Meva Clinic поддерживает иностранных пациентов, предлагая планирование лечения под руководством врача, надежные партнерские отношения с больницами, многоязычное общение и опыт ухода за пациентами, ориентированный на безопасность, комфорт и непрерывность."
  },
  pillar3Title: {
    en: "The Medical Board Standard",
    ro: "Standardul Comisiei Medicale",
    es: "El Estándar de la Junta Médica",
    it: "Lo Standard del Comitato Medico",
    fr: "La Norme du Conseil Médical",
    de: "Der Medical Board Standard",
    ru: "Стандарты медицинского консилиума"
  },
  pillar3Body: {
    en: "We don't showcase names for commercial exploitation; we protect the integrity of our medical network. Meva Clinic collaborates only with recognized medical authorities and academic professors who possess a proven track record of thousands of successful international patient cases.",
    ro: "Nu prezentăm nume pentru exploatare comercială; protejăm integritatea rețelei noastre medicale. Meva Clinic colaborează numai cu autorități medicale recunoscute și profesori universitari care dețin un istoric dovedit de mii de cazuri de pacienți internaționali de succes.",
    es: "No mostramos nombres para explotación comercial; protegemos la integridad de nuestra red médica. Meva Clinic colabora únicamente con autoridades médicas reconocidas y profesores académicos que poseen un historial comprobado de miles de casos exitosos de pacientes internacionales.",
    it: "Non mostriamo nomi a fini di sfruttamento commerciale; proteggiamo l'integrità della nostra rete medica. Meva Clinic collabora solo con autorità mediche riconosciute e professori accademici che vantano una comprovata esperienza di migliaia di casi di pazienti internazionali di successo.",
    fr: "Nous ne présentons pas de noms à des fins d'exploitation commerciale ; nous protégeons l'intégrité de notre réseau médical. Meva Clinic collabore uniquement avec des autorités médicales reconnues et des professeurs d'université qui possèdent une expérience éprouvée de milliers de cas de patients internationaux réussis.",
    de: "Wir präsentieren keine Namen zur kommerziellen Ausbeutung; wir schützen die Integrität unseres medizinischen Netzwerks. Meva Clinic arbeitet nur mit anerkannten medizinischen Kapazitäten und akademischen Professoren zusammen, die auf eine nachgewiesene Erfolgsbilanz von Tausenden erfolgreicher internationaler Patientenfälle verweisen können.",
    ru: "Мы не публикуем имена в коммерческих целях; мы защищаем репутацию нашей медицинской сети. Meva Clinic сотрудничает только с признанными медицинскими авторитетами и профессорами, имеющими за плечами опыт тысяч успешных операций с иностранными пациентами."
  },
  pillar4Title: {
    en: "Lifetime Post-Op Care Ecosystem",
    ro: "Ecosistem de Îngrijire Postoperatorie pe Viață",
    es: "Ecosistema de Atención Posoperatoria de Por Vida",
    it: "Ecosistema di Assistenza Post-Operatoria a Vita",
    fr: "Écosystème de Suivi Postopératoire à Vie",
    de: "Lebenslanges Nachsorge-Ökosystem",
    ru: "Пожизненное послеоперационное сопровождение"
  },
  pillar4Body: {
    en: "Your journey with Meva Clinic does not end at the airport gate. Our dedicated international aftercare consultants stay in constant contact with you when you return home, ensuring your recovery metrics follow the exact clinical protocols required by your treating specialists.",
    ro: "Călătoria dvs. cu Meva Clinic nu se termină la poarta aeroportului. Consultanții noștri dedicați pentru asistență postoperatorie internațională rămân în contact constant cu dvs. atunci când vă întoarceți acasă, asigurându-se că indicatorii de recuperare urmează protocoalele clinice exacte cerute de specialiștii dvs. curanți.",
    es: "Su viaje con Meva Clinic no termina en la puerta del aeropuerto. Nuestros consultores dedicados a la atención posterior internacional se mantienen en contacto constante con usted cuando regresa a casa, garantizando que sus métricas de recuperación sigan los protocolos clínicos exactos requeridos por sus especialistas tratantes.",
    it: "Il tuo viaggio con Meva Clinic non finisce al gate dell'aeroporto. I nostri consulenti dedicati all'assistenza post-operatoria internazionale rimangono in costante contatto con te quando torni a casa, assicurando che i tuoi parametri di recupero seguano gli esatti protocolli clinici richiesti dai tuoi specialisti curanti.",
    fr: "Votre parcours avec Meva Clinic ne s'arrête pas aux portes de l'aéroport. Nos conseillers dédiés au suivi postopératoire international restent en contact permanent avec vous à votre retour chez vous, garantissant que vos indicateurs de rétablissement suivent les protocoles cliniques exacts requis par vos spécialistes traitants.",
    de: "Ihre Reise mit Meva Clinic endet nicht am Flughafengate. Unsere engagierten internationalen Nachsorgeberater bleiben auch nach Ihrer Rückkehr nach Hause in ständigem Kontakt mit Ihnen und stellen sicher, dass Ihre Genesungswerte den genauen klinischen Protokollen entsprechen, die von Ihren behandelnden Spezialisten vorgeschrieben werden.",
    ru: "Ваше путешествие с Meva Clinic не заканчивается в аэропорту. Наши специалисты по послеоперационному сопровождению поддерживают с вами постоянную связь после вашего возвращения домой, гарантируя, что ваше восстановление проходит в строгом соответствии с клиническими протоколами ваших лечащих врачей."
  },
  charterTitle: {
    en: "Global Data Privacy & Network Integrity Protocol",
    ro: "Protocol Global de Confidențialitate a Datelor și Integritate a Rețelei",
    es: "Protocolo Global de Privacidad de Datos e Integridad de la Red",
    it: "Protocollo Globale per la Privacy dei Dati e l'Integrità della Rete",
    fr: "Protocole de Confidentialité Globale des Données et d'Intégrité du Réseau",
    de: "Globaler Datenschutz- und Netzwerkintegritätsprotokoll",
    ru: "Глобальный протокол конфиденциальности данных и целостности сети"
  },
  charterBody: {
    en: "In compliance with European General Data Protection Regulations (GDPR) and international medical network protection standards, Meva Clinic enforces a strict confidentiality charter. We do not display individual surgeon portfolios or specific partner facility identifiers publicly on our digital platforms to prevent unauthorized third-party commercial exploitation and to protect patient medical records. Your highly customized, case-specific treatment plan, official surgeon credentials, and verified Before/After medical case studies will be securely shared with you by your personal medical consultant during your private consultation.",
    ro: "În conformitate cu Regulamentele Generale privind Protecția Datelor din Europa (GDPR) și cu standardele internaționale de protecție a rețelelor medicale, Meva Clinic aplică o cartă strictă de confidențialitate. Nu afișăm public portofoliile individuale ale chirurgilor sau identificatori specifici ai unităților partenere pe platformele noastre digitale pentru a preveni exploatarea comercială neautorizată de către terți și pentru a proteja dosarele medicale ale pacienilor. Planul dumneavoastră de tratament personalizat, acreditările oficiale ale chirurgului și studiile de caz medicale verificate Înainte/După vă vor fi împărtășite în siguranță de către consultantul dumneavoastră medical personal în timpul consultației private.",
    es: "En cumplimiento con el Reglamento General de Protección de Datos de Europa (GDPR) y los estándares internacionales de protección de redes médicas, Meva Clinic aplica una estricta carta de confidencialidad. No mostramos públicamente las carteras de cirujanos individuales ni los identificadores de instalaciones asociadas específicas en nuestras plataformas digitales para evitar la explotación comercial no autorizada por parte de terceros y proteger los registros médicos de los pacientes. Su plan de tratamiento altamente personalizado y específico para su caso, las credenciales oficiales del cirujano y los estudios de casos médicos verificados de Antes/Después se compartirán de manera segura con usted a través de su consultor médico personal durante su consulta privada.",
    it: "In conformità con il Regolamento Generale sulla Protezione dei Dati europeo (GDPR) et con gli standard internazionali di protezione delle reti mediche, Meva Clinic applica una rigorosa carta di riservatezza. Non mostriamo pubblicamente i portfolio dei singoli chirurghi o gli identificatori specifici delle strutture partner sulle nostre piattaforme digitali per prevenire lo sfruttamento commerciale non autorizzato da parte di terzi e per proteggere le cartelle cliniche dei pazienti. Il vostro piano di trattamento altamente personalizzato, le credenziali ufficiali del chirurgo e i casi clinici verificati Prima/Dopo saranno condivisi in modo sicuro dal vostro consulente medico personale durante il colloquio privato.",
    fr: "Conformément au Règlement Général européen sur la Protection des Données (RGPD) et aux normes internationales de protection des réseaux médicaux, Meva Clinic applique une charte de confidentialité stricte. Nous n'affichons pas publiquement les portefeuilles des chirurgiens individuels ni les identifiants spécifiques des établissements partenaires sur nos plateformes numériques afin d'empêcher toute exploitation commerciale non autorisée par des tiers et de protéger les dossiers médicaux des patients. Votre plan de traitement hautement personnalisé, les références officielles du chirurgien et les études de cas cliniques vérifiées Avant/Après vous seront partagés en toute sécurité par votre conseiller médical personnel lors de votre consultation privée.",
    de: "In Übereinstimmung mit der europäischen Datenschutz-Grundverordnung (DSGVO) und internationalen medizinischen Netzwerkschutzstandards wendet Meva Clinic eine strenge Vertraulichkeitscharta an. Wir zeigen keine Portfolios einzelner Chirurgen oder spezifische Identifikatoren von Partnerkliniken öffentlich auf unseren digitalen Plattformen, um unbefugte kommerzielle Ausbeutung durch Dritte zu verhindern und die Krankenakten der Patienten zu schützen. Ihr hochgradig individueller Behandlungsplan, die offiziellen Nachweise des Chirurgen und verifizierte Vorher-Nachher-Fallstudien werden Ihnen während Ihrer privaten Beratung von Ihrem persönlichen medizinischen Berater sicher zur Verfügung gestellt.",
    ru: "В соответствии с Европейским регламентом по защите данных (GDPR) и международными стандартами защиты медицинских сетей, Meva Clinic придерживается строгой хартии конфиденциальности. Мы не публикуем портфолио отдельных хирургов или идентификаторы конкретных партнерских клиник на наших цифровых платформах во избежание несанкционированного коммерческого использования третьими лицами и для защиты медицинских карт пациентов. Ваш индивидуальный план лечения, официальные документы хирурга и верифицированные фотографии «До/После» будут конфиденциально предоставлены вам вашим личным медицинским консультантом во время частной консультации."
  },
  coreOperatingPrinciples: {
    en: "Core Operating Principles",
    ro: "Principii Fundamentale de Operare",
    es: "Principios Operativos Fundamentales",
    it: "Principi Operativi Fondamentali",
    fr: "Principes Opérationnels Fondamentaux",
    de: "Grundlegende Betriebsprinzipien",
    ru: "Основные принципы работы"
  },
  pillarsTitle: {
    en: "Our Pillars of Facilitation Excellence",
    ro: "Pilonii Noștri de Excelență în Facilitare",
    es: "Nuestros Pilares de Excelencia en la Facilitación",
    it: "I Nostri Pilastri di Eccellenza nella Facilitazione",
    fr: "Nos Piliers d'Excellence en Matière de Facilitation",
    de: "Unsere Säulen der Vermittlungsexzellenz",
    ru: "Наши столпы превосходства в содействии"
  }
};

const getTranslation = (key: string, lang: string): string => {
  const safeLang = PAGE_T[key] && PAGE_T[key][lang] ? lang : 'en';
  return PAGE_T[key] ? PAGE_T[key][safeLang] : key;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  return buildMetadata({
    title: `${getTranslation("heroTitle", lang)} | Meva Clinic`,
    description: getTranslation("heroSubtitle", lang).substring(0, 155),
    pathname: '/about-us',
    lang,
    category: 'specialist',
  });
}

export default async function AboutUsPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const isEn = lang === 'en';

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header lang={lang} />
      
      <main className="flex-1 pt-32 pb-24 font-sans">
        
        {/* 1. HERO SECTION (Vizyon Giriş Alanı) */}
        <section className="relative bg-[#0b1626] text-white py-20 md:py-28 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-yellow-900/10 via-[#0b1626] to-[#0b1626] z-10" />
          <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl -mr-32 -mt-32" />
          
          <div className="container mx-auto px-4 max-w-6xl relative z-20 text-center">
            <span className="inline-block bg-white/5 border border-white/10 rounded-full px-5 py-2 text-[10px] font-bold uppercase tracking-[0.25em] text-accent mb-6 animate-fade-in">
              {tUI("Meva Clinic Excellence", lang)}
            </span>
            <h1 className="text-4xl md:text-6xl font-serif font-bold leading-tight max-w-4xl mx-auto mb-8 animate-fade-in">
              {getTranslation("heroTitle", lang)}
            </h1>
            <p className="text-gray-300 text-base md:text-lg max-w-3xl mx-auto leading-relaxed font-light">
              {getTranslation("heroSubtitle", lang)}
            </p>
          </div>
        </section>

        {/* Global Accreditations Row */}
        <div className="container mx-auto px-4 max-w-6xl -mt-8 relative z-30">
          <div className="bg-white rounded-[2rem] p-4 shadow-xl border border-gray-100">
            <CertRow isEn={isEn} />
          </div>
        </div>

        {/* 2. THE MEVA PHILOSOPHY (Biz Kimiz & Felsefemiz) */}
        <section className="py-20 md:py-28 bg-white">
          <div className="container mx-auto px-4 max-w-4xl text-center">
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-[#0b1626] mb-8">
              {getTranslation("philosophyTitle", lang)}
            </h2>
            <div className="w-16 h-1 bg-accent mx-auto mb-8 rounded-full" />
            <p className="text-gray-600 text-base md:text-lg leading-relaxed font-light text-justify md:text-center">
              {getTranslation("philosophyBody", lang)}
            </p>
          </div>
        </section>

        {/* 3. OUR FOUR PILLARS OF EXCELLENCE (4 Büyük Kurumsal Güç Sütunu) */}
        <section className="py-20 bg-gray-50/50 border-y border-gray-100">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="text-center mb-16">
              <span className="text-[10px] font-black uppercase tracking-[0.25em] text-accent">
                {getTranslation("coreOperatingPrinciples", lang)}
              </span>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#0b1626] mt-2">
                {getTranslation("pillarsTitle", lang)}
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Pillar 1 - Facility Audits */}
              <article className="bg-white p-8 md:p-10 rounded-[2.5rem] border border-gray-100 shadow-[0_10px_30px_rgba(0,0,0,0.02)] hover:shadow-xl hover:border-accent/30 transition-all duration-300 group">
                <div className="w-14 h-14 rounded-2xl bg-prime/5 flex items-center justify-center text-accent mb-6 group-hover:scale-110 transition-transform">
                  <ShieldCheck size={28} />
                </div>
                <h3 className="text-xl font-serif font-bold text-[#0b1626] mb-4">
                  {getTranslation("pillar1Title", lang)}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed font-light">
                  {getTranslation("pillar1Body", lang)}
                </p>
              </article>

              {/* Pillar 2 - Premium Care */}
              <article className="bg-white p-8 md:p-10 rounded-[2.5rem] border border-gray-100 shadow-[0_10px_30px_rgba(0,0,0,0.02)] hover:shadow-xl hover:border-accent/30 transition-all duration-300 group">
                <div className="w-14 h-14 rounded-2xl bg-prime/5 flex items-center justify-center text-accent mb-6 group-hover:scale-110 transition-transform">
                  <Compass size={28} />
                </div>
                <h3 className="text-xl font-serif font-bold text-[#0b1626] mb-4">
                  {getTranslation("pillar2Title", lang)}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed font-light">
                  {getTranslation("pillar2Body", lang)}
                </p>
              </article>

              {/* Pillar 3 - Board Standard */}
              <article className="bg-white p-8 md:p-10 rounded-[2.5rem] border border-gray-100 shadow-[0_10px_30px_rgba(0,0,0,0.02)] hover:shadow-xl hover:border-accent/30 transition-all duration-300 group">
                <div className="w-14 h-14 rounded-2xl bg-prime/5 flex items-center justify-center text-accent mb-6 group-hover:scale-110 transition-transform">
                  <Award size={28} />
                </div>
                <h3 className="text-xl font-serif font-bold text-[#0b1626] mb-4">
                  {getTranslation("pillar3Title", lang)}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed font-light">
                  {getTranslation("pillar3Body", lang)}
                </p>
              </article>

              {/* Pillar 4 - Aftercare Ecosystem */}
              <article className="bg-white p-8 md:p-10 rounded-[2.5rem] border border-gray-100 shadow-[0_10px_30px_rgba(0,0,0,0.02)] hover:shadow-xl hover:border-accent/30 transition-all duration-300 group">
                <div className="w-14 h-14 rounded-2xl bg-prime/5 flex items-center justify-center text-accent mb-6 group-hover:scale-110 transition-transform">
                  <Activity size={28} />
                </div>
                <h3 className="text-xl font-serif font-bold text-[#0b1626] mb-4">
                  {getTranslation("pillar4Title", lang)}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed font-light">
                  {getTranslation("pillar4Body", lang)}
                </p>
              </article>
            </div>
          </div>
        </section>

        {/* 4. THE CONFIDENTIALITY & INTEGRITY CHARTER (Yasal Gizlilik Bildirisi) */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="bg-[#0b1626] text-white rounded-[3rem] p-8 md:p-16 relative overflow-hidden shadow-2xl border border-white/5">
              <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl -mr-24 -mt-24 pointer-events-none" />
              
              <div className="relative z-10 flex flex-col md:flex-row items-center md:items-start gap-8">
                <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-accent shrink-0 shadow-lg">
                  <Lock size={30} />
                </div>
                <div>
                  <h3 className="text-2xl font-serif font-bold mb-6 text-white leading-tight">
                    {getTranslation("charterTitle", lang)}
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed font-light mb-8 text-justify">
                    {getTranslation("charterBody", lang)}
                  </p>
                  
                  {/* Lead / Consultation Bridge */}
                  <Link
                    href={`/${lang}/contact`}
                    className="inline-flex items-center gap-2 bg-accent hover:bg-white hover:text-prime text-prime font-bold text-sm px-6 py-4 rounded-xl transition-all shadow-md duration-300"
                  >
                    {tUI("Free Consultation", lang)} <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

      </main>
      
      <Footer lang={lang} />
    </div>
  );
}
