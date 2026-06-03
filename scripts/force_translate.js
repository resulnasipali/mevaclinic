const fs = require('fs');
const tPath = './utils/uiTranslations.ts';
let content = fs.readFileSync(tPath, 'utf8');
const dictStr = content.slice(content.indexOf('{'), content.lastIndexOf('}') + 1);
let dict;
try { dict = eval('(' + dictStr + ')'); } catch(e) { console.error('Error parsing', e); process.exit(1); }
const newT = {
  '4 Nights Premium Hospitalization Stay Included': { it: '4 Notti di Ricovero Premium Incluse', fr: "4 Nuits d'Hospitalisation Premium Incluses", es: '4 Noches de Hospitalización Premium Incluidas', de: '4 Nächte Premium-Krankenhausaufenthalt Inbegriffen', ru: '4 Ночи Премиум-госпитализации Включены', ro: '4 Nopți de Spitalizare Premium Incluse' },
  'Optional 5-Star Hotel Stay Available': { it: 'Soggiorno Opzionale in Hotel 5 Stelle Disponibile', fr: 'Séjour Optionnel en Hôtel 5 Étoiles Disponible', es: 'Estancia Opcional en Hotel de 5 Estrellas Disponible', de: 'Optionaler 5-Sterne-Hotelaufenthalt Verfügbar', ru: 'Возможность проживания в 5-звездочном отеле', ro: 'Opțional Cazare la Hotel 5 Stele Disponibilă' },
  'Strict NO HIDDEN FEES Guarantee': { it: 'Garanzia Rigorosa NESSUN COSTO NASCOSTO', fr: 'Garantie Stricte SANS FRAIS CACHÉS', es: 'Garantía Estricta SIN CARGOS OCULTOS', de: 'Strenge KEINE VERSTECKTEN KOSTEN Garantie', ru: 'Строгая гарантия БЕЗ СКРЫТЫХ ПЛАТЕЖЕЙ', ro: 'Garanție strictă FĂRĂ COSTURI ASCUNSE' },
  'CONSULT NOW': { it: 'CONSULTA ORA', fr: 'CONSULTEZ MAINTENANT', es: 'CONSULTAR AHORA', de: 'JETZT BERATEN', ru: 'ПРОКОНСУЛЬТИРОВАТЬСЯ', ro: 'CONSULTĂ ACUM' },
  'DISCOVER PACKAGE': { it: 'SCOPRI IL PACCHETTO', fr: 'DÉCOUVREZ LE FORFAIT', es: 'DESCUBRE EL PAQUETE', de: 'PAKET ENTDECKEN', ru: 'ОТКРОЙТЕ ПАКЕТ', ro: 'DESCOPERĂ PACHETUL' },
  'VIP Airport & Clinic Transfer': { it: 'Trasferimento VIP per Aeroporto e Clinica', fr: 'Transfert VIP Aéroport et Clinique', es: 'Traslado VIP al Aeropuerto y Clínica', de: 'VIP-Flughafen- und Kliniktransfer', ru: 'VIP-трансфер в аэропорт и клинику' },
  'Personal driver at your disposal from landing in Istanbul and throughout all medical visits.': { it: 'Autista personale a tua disposizione dallo sbarco a Istanbul e durante tutte le visite mediche.', fr: "Chauffeur personnel à votre disposition dès l'atterrissage à Istanbul et pendant toutes les visites médicales.", es: 'Conductor personal a su disposición desde el aterrizaje en Estambul y durante todas las visitas médicas.', de: 'Persönlicher Fahrer steht Ihnen ab der Landung in Istanbul und bei allen medizinischen Besuchen zur Verfügung.', ru: 'Личный водитель в вашем распоряжении от посадки в Стамбуле до окончания всех медицинских визитов.' },
  '5-Star Hotel Accommodation': { it: 'Sistemazione in Hotel a 5 Stelle', fr: 'Hébergement en Hôtel 5 Étoiles', es: 'Alojamiento en Hotel de 5 Estrellas', de: '5-Sterne-Hotelunterkunft', ru: 'Размещение в 5-звездочном отеле' },
  'Recovery in luxury conditions. The package fully covers accommodation in one of our prestigious partner hotels.': { it: "Recupero in condizioni di lusso. Il pacchetto copre interamente l'alloggio in uno dei nostri prestigiosi hotel partner.", fr: "Récupération dans des conditions de luxe. Le forfait couvre entièrement l'hébergement dans l'un de nos prestigieux hôtels partenaires.", es: 'Recuperación en condiciones de lujo. El paquete cubre completamente el alojamiento en uno de nuestros prestigiosos hoteles asociados.', de: 'Erholung unter luxuriösen Bedingungen. Das Paket deckt die Unterkunft in einem unserer renommierten Partnerhotels vollständig ab.', ru: 'Восстановление в роскошных условиях. Пакет полностью покрывает проживание в одном из наших престижных партнерских отелей.' },
  'Native English Translator': { it: 'Interprete Madrelingua', fr: 'Interprète de Langue Maternelle', es: 'Intérprete Nativo', de: 'Muttersprachlicher Dolmetscher', ru: 'Переводчик - носитель языка' },
  'There will be no language barriers. A dedicated medical assistant will accompany you to translate every detail.': { it: 'Non ci saranno barriere linguistiche. Un assistente medico dedicato ti accompagnerà per tradurre ogni dettaglio.', fr: "Il n'y aura pas de barrières linguistiques. Un assistant médical dédié vous accompagnera pour traduire chaque détail.", es: 'No habrá barreras idiomáticas. Un asistente médico dedicado lo acompañará para traducir cada detalle.', de: 'Es wird keine Sprachbarrieren geben. Ein engagierter medizinischer Assistent wird Sie begleiten, um jedes Detail zu übersetzen.', ru: 'Языкового барьера не будет. Специальный медицинский ассистент будет сопровождать вас и переводить каждую деталь.' },
  'Pre/Post-Operative Tests': { it: 'Esami Pre/Post-Operatori', fr: 'Examens Pré/Post-Opératoires', es: 'Pruebas Pre/Post-Operatorias', de: 'Prä/Postoperative Tests', ru: 'Пре/Постоперационные тесты' },
  'All analyzes, consultations (cardiological, anesthetic) and necessary tests are 100% covered.': { it: 'Tutte le analisi, consulti (cardiologico, anestetico) e test necessari sono coperti al 100%.', fr: 'Toutes les analyses, consultations (cardiologique, anesthésique) et les examens nécessaires sont couverts à 100%.', es: 'Todos los análisis, consultas (cardiológicas, anestésicas) y pruebas necesarias están 100% cubiertos.', de: 'Alle Analysen, Konsultationen (kardiologisch, anästhetisch) und notwendigen Tests sind zu 100% abgedeckt.', ru: 'Все анализы, консультации (кардиологические, анестезиологические) и необходимые тесты покрыты на 100%.' },
  'All-Inclusive Package Built Around You': { it: 'Pacchetto All-Inclusive Costruito Intorno a Te', fr: 'Forfait Tout Compris Conçu Pour Vous', es: 'Paquete Todo Incluido Construido Alrededor de Ti', de: 'All-Inclusive-Paket, Das Um Sie Herum Aufgebaut Ist', ru: 'Пакет Все Включено, Созданный Для Вас' },
  'Your medical experience in Istanbul should be stress-free. We have prepared a premium package where details make the difference.': { it: 'La tua esperienza medica a Istanbul deve essere senza stress. Abbiamo preparato un pacchetto premium dove i dettagli fanno la differenza.', fr: 'Votre expérience médicale à Istanbul doit être sans stress. Nous avons préparé un forfait premium où les détails font la différence.', es: 'Su experiencia médica en Estambul debe ser libre de estrés. Hemos preparado un paquete premium donde los detalles hacen la diferencia.', de: 'Ihre medizinische Erfahrung in Istanbul sollte stressfrei sein. Wir haben ein Premium-Paket geschnürt, bei dem Details den Unterschied ausmachen.', ru: 'Ваш медицинский опыт в Стамбуле должен быть без стресса. Мы подготовили премиум-пакет, в котором детали имеют значение.' },
  'The Premium Treatment': { it: 'Il Trattamento Premium', fr: 'Le Traitement Premium', es: 'El Tratamiento Premium', de: 'Die Premium-Behandlung', ru: 'Премиум Лечение' },
  'Guaranteed Surgical Intervention': { it: 'Intervento Chirurgico Garantito', fr: 'Intervention Chirurgicale Garantie', es: 'Intervención Quirúrgica Garantizada', de: 'Garantierter Chirurgischer Eingriff', ru: 'Гарантированное хирургическое вмешательство' },
  'Team formed by Doctor Professors': { it: 'Team formato da Dottori Professori', fr: 'Équipe formée de Docteurs Professeurs', es: 'Equipo formado por Doctores Profesores', de: 'Team bestehend aus Doktor Professoren', ru: 'Команда, состоящая из докторов и профессоров' },
  'VIP Hospitalization in Private Clinic (1-3 Days)': { it: 'Ricovero VIP in Clinica Privata (1-3 Giorni)', fr: 'Hospitalisation VIP en Clinique Privée (1-3 Jours)', es: 'Hospitalización VIP en Clínica Privada (1-3 Días)', de: 'VIP-Krankenhausaufenthalt in einer Privatklinik (1-3 Tage)', ru: 'VIP-госпитализация в частной клинике (1-3 дня)' },
  'Home Medication Included': { it: 'Farmaci a Domicilio Inclusi', fr: 'Médicaments à Domicile Inclus', es: 'Medicamentos para el Hogar Incluidos', de: 'Medikamente für zu Hause Inbegriffen', ru: 'Домашние медикаменты включены' },
  'Dedicated Post-Operative Diet Plan': { it: 'Piano Dietetico Post-Operatorio Dedicato', fr: 'Plan Diététique Post-Opératoire Dédié', es: 'Plan de Dieta Postoperatoria Dedicado', de: 'Individueller Postoperativer Diätplan', ru: 'Специализированный послеоперационный план питания' },
  '"No hidden costs – Everything included for your comfort"': { it: '"Nessun costo nascosto – Tutto incluso per il tuo comfort"', fr: '"Aucun coût caché – Tout inclus pour votre confort"', es: '"Sin costos ocultos – Todo incluido para su comodidad"', de: '"Keine versteckten Kosten – Alles für Ihren Komfort inbegriffen"', ru: '"Никаких скрытых расходов – Все включено для вашего комфорта"' },
  'Global Gold Standard': { it: "Standard d'Oro Globale", fr: "Norme d'Or Mondiale", es: 'Estándar de Oro Mundial', de: 'Globaler Goldstandard', ru: 'Глобальный золотой стандарт' },
  'Quality Management': { it: 'Gestione della Qualità', fr: 'Gestion de la Qualité', es: 'Gestión de Calidad', de: 'Qualitätsmanagement', ru: 'Управление качеством' },
  'Surgical Excellence': { it: 'Eccellenza Chirurgica', fr: 'Excellence Chirurgicale', es: 'Excelencia Quirúrgica', de: 'Chirurgische Exzellenz', ru: 'Хирургическое совершенство' },
  'End-to-End Concierge': { it: 'Servizio Concierge Completo', fr: 'Service Concierge de Bout en Bout', es: 'Servicio de Conserjería Integral', de: 'Umfassender Concierge-Service', ru: 'Комплексный консьерж-сервис' },
  'Real Transformations': { it: 'Trasformazioni Reali', fr: 'Transformations Réelles', es: 'Transformaciones Reales', de: 'Echte Transformationen', ru: 'Реальные трансформации' },
  'Our patients are our best business card. Discover their experiences and the incredible results they have achieved.': { it: 'I nostri pazienti sono il nostro miglior biglietto da visita. Scopri le loro esperienze e gli incredibili risultati che hanno raggiunto.', fr: "Nos patients sont notre meilleure carte de visite. Découvrez leurs expériences et les résultats incroyables qu'ils ont obtenus.", es: 'Nuestros pacientes son nuestra mejor tarjeta de presentación. Descubra sus experiencias y los increíbles resultados que han logrado.', de: 'Unsere Patienten sind unsere beste Visitenkarte. Entdecken Sie ihre Erfahrungen und die unglaublichen Ergebnisse, die sie erzielt haben.', ru: 'Наши пациенты — наша лучшая визитная карточка. Откройте для себя их опыт и невероятные результаты, которых они достигли.' },
  'SUCCESS STORIES': { it: 'STORIE DI SUCCESSO', fr: 'HISTOIRES DE RÉUSSITE', es: 'HISTORIAS DE ÉXITO', de: 'ERFOLGSGESCHICHTEN', ru: 'ИСТОРИИ УСПЕХА' },
  'MEDICAL SOLUTIONS': { it: 'SOLUZIONI MEDICHE', fr: 'SOLUTIONS MÉDICALES', es: 'SOLUCIONES MÉDICAS', de: 'MEDIZINISCHE LÖSUNGEN', ru: 'МЕДИЦИНСКИЕ РЕШЕНИЯ' },
  'Stomach reduction procedure by up to 80%, optimal for patients suffering from obesity.': { it: "Procedura di riduzione dello stomaco fino all'80%, ideale per i pazienti affetti da obesità.", fr: "Procédure de réduction de l'estomac jusqu'à 80 %, idéale pour les patients souffrant d'obésité.", es: 'Procedimiento de reducción de estómago de hasta un 80%, ideal para pacientes que sufren de obesidad.', de: 'Magenverkleinerungsverfahren um bis zu 80%, ideal für Patienten mit Fettleibigkeit.', ru: 'Процедура уменьшения желудка до 80%, идеальна для пациентов, страдающих ожирением.' },
  'A high-end combination of restriction and malabsorption, the gold standard in bariatric surgery.': { it: "Una combinazione di alto livello tra restrizione e malassorbimento, lo standard d'oro nella chirurgia bariatrica.", fr: "Une combinaison haut de gamme de restriction et de malabsorption, la norme d'or en chirurgie bariatrique.", es: 'Una combinación de alto nivel de restricción y malabsorción, el estándar de oro en cirugía bariátrica.', de: 'Eine erstklassige Kombination aus Restriktion und Malabsorption, der Goldstandard in der bariatrischen Chirurgie.', ru: 'Высококлассная комбинация рестрикции и мальабсорбции, золотой стандарт в бариатрической хирургии.' },
  'A non-surgical, completely reversible method for rapid weight loss without any scarring.': { it: 'Un metodo non chirurgico e completamente reversibile per una rapida perdita di peso senza cicatrici.', fr: 'Une méthode non chirurgicale et totalement réversible pour une perte de poids rapide sans cicatrices.', es: 'Un método no quirúrgico y completamente reversible para una pérdida de peso rápida sin cicatrices.', de: 'Eine nicht-chirurgische, vollständig reversible Methode zur schnellen Gewichtsabnahme ohne Narbenbildung.', ru: 'Нехирургический, полностью обратимый метод для быстрого снижения веса без рубцов.' },
  'Flawless smile with premium implants and 3D constructed zirconium dental crowns.': { it: 'Sorriso impeccabile con impianti premium e corone dentali in zirconio ricostruite in 3D.', fr: 'Sourire impeccable avec des implants premium et des couronnes dentaires en zirconium conçues en 3D.', es: 'Sonrisa impecable con implantes premium y coronas dentales de circonio construidas en 3D.', de: 'Makelloses Lächeln mit Premium-Implantaten und 3D-konstruierten Zirkonkronen.', ru: 'Безупречная улыбка с премиальными имплантатами и 3D-циркониевыми коронками.' },
  'Meva Clinic operates under the strictest international and European safety standards. Impeccable care, experienced surgeons and 21st century technology.': {
    it: "Meva Clinic opera secondo i più severi standard di sicurezza internazionali ed europei. Assistenza impeccabile, chirurghi esperti e tecnologia del 21° secolo.",
    fr: "Meva Clinic opère selon les normes de sécurité internationales et européennes les plus strictes. Des soins impeccables, des chirurgiens expérimentés et une technologie du 21e siècle.",
    es: "Meva Clinic opera bajo los más estrictos estándares de seguridad internacionales y europeos. Atención impecable, cirujanos experimentados y tecnología del siglo XXI.",
    de: "Die Meva Clinic arbeitet nach den strengsten internationalen und europäischen Sicherheitsstandards. Tadellose Betreuung, erfahrene Chirurgen und Technologie des 21. Jahrhunderts.",
    ru: "Клиника Meva работает по самым строгим международным и европейским стандартам безопасности. Безупречный уход, опытные хирурги и технологии 21 века."
  },
  'Top Treatments': {
    it: "Trattamenti Principali", fr: "Meilleurs Traitements", es: "Tratamientos Principales", de: "Top Behandlungen", ru: "Лучшие Процедуры"
  },
  "The list below is strictly ordered based on other patients' interest, prioritizing the most requested international procedures.": {
    it: "L'elenco seguente è rigorosamente ordinato in base all'interesse di altri pazienti, dando la priorità alle procedure internazionali più richieste.",
    fr: "La liste ci-dessous est strictement ordonnée en fonction de l'intérêt d'autres patients, en priorisant les procédures internationales les plus demandées.",
    es: "La lista a continuación está estrictamente ordenada según el interés de otros pacientes, priorizando los procedimientos internacionales más solicitados.",
    de: "Die unten stehende Liste ist strikt nach dem Interesse anderer Patienten geordnet und priorisiert die am häufigsten nachgefragten internationalen Verfahren.",
    ru: "Приведенный ниже список строго отсортирован на основе интереса других пациентов, отдавая приоритет наиболее востребованным международным процедурам."
  },
  'We Make No Compromises When It Comes To Your Life.': {
    it: "Non Facciamo Compromessi Quando Si Tratta Della Tua Vita.",
    fr: "Nous Ne Faisons Aucun Compromis Quand Il S'agit De Votre Vie.",
    es: "No Hacemos Compromisos Cuando Se Tratta De Su Vida.",
    de: "Wir machen keine Kompromisse, wenn es um Ihr Leben geht.",
    ru: "Мы не идем на компромиссы, когда дело касается вашей жизни."
  }
};
for(let k in newT) {
  if(!dict[k]) dict[k] = {};
  for(let lang in newT[k]) {
    dict[k][lang] = newT[k][lang];
  }
}
const output = `export const T: Record<string, Record<string, string>> = ${JSON.stringify(dict, null, 2)};

export function tUI(enString: string, lang: string): string {
  if (T[enString] && (T[enString] as any)[lang]) {
    return (T[enString] as any)[lang];
  }
  const cleanStr = enString.trim();
  if (T[cleanStr] && (T[cleanStr] as any)[lang]) {
    return (T[cleanStr] as any)[lang];
  }
  return enString;
}`;
fs.writeFileSync(tPath, output, 'utf8');
console.log('Force translated successfully!');
