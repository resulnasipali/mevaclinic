const fs = require('fs');
const path = require('path');

const transPath = path.join(__dirname, 'utils/uiTranslations.ts');
let transContent = fs.readFileSync(transPath, 'utf-8');

const newTranslations = {
  "JCI Accreditation & Safety": {
    en: "JCI Accreditation & Safety", ro: "Acreditare JCI & Siguranță", 
    de: "JCI Akkreditierung & Sicherheit", es: "Acreditación JCI y Seguridad", 
    it: "Accreditamento JCI e Sicurezza", fr: "Accréditation JCI et Sécurité", ru: "Аккредитация JCI и Безопасность"
  },
  "We Make No Compromises When It Comes To Your Life.": {
    en: "We Make No Compromises When It Comes To Your Life.", ro: "Nu Facem Compromisuri Când Vine Vorba de Viața Ta.", 
    de: "Wir machen keine Kompromisse, wenn es um Ihr Leben geht.", es: "No Hacemos Compromisos Cuando Se Trata De Su Vida.", 
    it: "Non Facciamo Compromessi Quando Si Tratta Della Tua Vita.", fr: "Nous Ne Faisons Aucun Compromis Quand Il S'agit De Votre Vie.", ru: "Мы не идем на компромиссы, когда дело касается вашей жизни."
  },
  "Meva Clinic operates under the strictest international and European safety standards. Impeccable care, experienced surgeons and 21st century technology.": {
    en: "Meva Clinic operates under the strictest international and European safety standards. Impeccable care, experienced surgeons and 21st century technology.", 
    ro: "Meva Clinic activează sub cele mai stricte norme internaționale de siguranță europeană și globală. O asistență impecabilă, chirurgi experimentați și tehnologie secolului 21.",
    de: "Die Meva Clinic arbeitet nach den strengsten internationalen und europäischen Sicherheitsstandards. Tadellose Betreuung, erfahrene Chirurgen und Technologie des 21. Jahrhunderts.",
    es: "Meva Clinic opera bajo los más estrictos estándares de seguridad internacionales y europeos. Atención impecable, cirujanos experimentados y tecnología del siglo XXI.",
    it: "Meva Clinic opera secondo i più severi standard di sicurezza internazionali ed europei. Assistenza impeccabile, chirurghi esperti e tecnologia del 21° secolo.",
    fr: "Meva Clinic opère selon les normes de sécurité internationales et européennes les plus strictes. Des soins impeccables, des chirurgiens expérimentés et une technologie du 21e siècle.",
    ru: "Клиника Meva работает по самым строгим международным и европейским стандартам безопасности. Безупречный уход, опытные хирурги и технологии 21 века."
  },
  "International Patients": {
    en: "International Patients", ro: "Pacienți Internaționali", de: "Internationale Patienten", es: "Pacientes Internacionales", it: "Pazienti Internazionali", fr: "Patients Internationaux", ru: "Международные Пациенты"
  },
  "Frequently Asked Questions": {
    en: "Frequently Asked Questions", ro: "Întrebări Frecvente", de: "Häufig gestellte Fragen", es: "Preguntas Frecuentes", it: "Domande Frequenti", fr: "Foire Aux Questions", ru: "Часто задаваемые вопросы"
  },
  "Meva Medical Board": {
    en: "Meva Medical Board", ro: "Board-ul Medical Meva", de: "Medizinischer Vorstand", es: "Junta Médica Meva", it: "Comitato Medico Meva", fr: "Conseil Médical Meva", ru: "Медицинский совет Meva"
  },
  "View all doctors": {
    en: "View all doctors", ro: "Vezi toți medicii", de: "Alle Ärzte ansehen", es: "Ver todos los médicos", it: "Vedi tutti i medici", fr: "Voir tous les médecins", ru: "Смотреть всех врачей"
  },
  "Video Interview Dr. Erdem": {
    en: "Video Interview Dr. Erdem", ro: "Interviu Video Dr. Erdem", de: "Videointerview Dr. Erdem", es: "Entrevista en video al Dr. Erdem", it: "Video intervista Dott. Erdem", fr: "Interview vidéo Dr. Erdem", ru: "Видеоинтервью с доктором Эрдемом"
  },
  "Bariatric Surgeon": {
    en: "Bariatric Surgeon", ro: "Chirurg Bariatric", de: "Adipositaschirurg", es: "Cirujano Bariátrico", it: "Chirurgo Bariatrico", fr: "Chirurgien Bariatrique", ru: "Бариатрический Хирург"
  },
  "Over 15 years of experience in complex Gastric Sleeve and Bypass surgeries. Titular member of IFSO Europe.": {
    en: "Over 15 years of experience in complex Gastric Sleeve and Bypass surgeries. Titular member of IFSO Europe.",
    ro: "Peste 15 ani de experiență în intervenții complexe de Gastric Sleeve și Bypass. Membru titular IFSO Europe.",
    de: "Über 15 Jahre Erfahrung bei komplexen Magenverkleinerungs- und Bypass-Operationen. Ordentliches Mitglied der IFSO Europe.",
    es: "Más de 15 años de experiencia en cirugías complejas de Manga Gástrica y Bypass. Miembro titular de IFSO Europe.",
    it: "Oltre 15 anni di esperienza in complessi interventi di Sleeve Gastrectomy e Bypass. Membro titolare IFSO Europe.",
    fr: "Plus de 15 ans d'expérience dans les chirurgies complexes de Sleeve Gastrectomie et Bypass. Membre titulaire de l'IFSO Europe.",
    ru: "Более 15 лет опыта проведения сложных операций по желудочному шунтированию и резекции. Действительный член IFSO Europe."
  },
  "International Board Accreditation": {
    en: "International Board Accreditation", ro: "Acreditare Board Internațional", de: "Internationale Akkreditierung", es: "Acreditación de la Junta Internacional", it: "Accreditamento Board Internazionale", fr: "Accréditation du Conseil International", ru: "Аккредитация Международного Совета"
  },
  "Dr. Turan's Expertise": {
    en: "Dr. Turan's Expertise", ro: "Expertiza Dr. Turan", de: "Dr. Turans Expertise", es: "Experiencia de la Dra. Turan", it: "L'esperienza del Dott. Turan", fr: "L'expertise du Dr Turan", ru: "Опыт доктора Туран"
  },
  "Dental Aesthetics": {
    en: "Dental Aesthetics", ro: "Estetică Dentară", de: "Zahnästhetik", es: "Estética Dental", it: "Estetica Dentale", fr: "Esthétique Dentaire", ru: "Эстетическая Стоматология"
  },
  "Hollywood Smile, implantology and 3D reconstruction aesthetics expert. 8000+ implante successfully completed.": {
    en: "Hollywood Smile, implantology and 3D reconstruction aesthetics expert. 8000+ implante successfully completed.",
    ro: "Expertă în estetică Hollywood Smile, implantologie și reconstrucție 3D. 8000+ implante finalizate cu succes.",
    de: "Expertin für Hollywood Smile, Implantologie und 3D-Rekonstruktionsästhetik. Über 8000 Implantate erfolgreich eingesetzt.",
    es: "Experta en Sonrisa de Hollywood, implantología y estética de reconstrucción 3D. Más de 8000 implantes completados con éxito.",
    it: "Esperta in Hollywood Smile, implantologia ed estetica ricostruttiva 3D. Oltre 8000 impianti completati con successo.",
    fr: "Experte en Sourire Hollywoodien, implantologie et esthétique de reconstruction 3D. Plus de 8000 implants réalisés avec succès.",
    ru: "Эксперт по Голливудской улыбке, имплантологии и эстетике 3D-реконструкции. Более 8000 успешно установленных имплантатов."
  },
  "EACMFS European Member": {
    en: "EACMFS European Member", ro: "Membru European EACMFS", de: "EACMFS Europäisches Mitglied", es: "Miembro Europeo de EACMFS", it: "Membro Europeo EACMFS", fr: "Membre Européen de l'EACMFS", ru: "Европейский член EACMFS"
  },
  "Medical Solutions": {
    en: "Medical Solutions", ro: "Soluții Medicale", de: "Medizinische Lösungen", es: "Soluciones Médicas", it: "Soluzioni Mediche", fr: "Solutions Médicales", ru: "Медицинские решения"
  },
  "Top Treatments": {
    en: "Top Treatments", ro: "Tratamente de Top", de: "Top Behandlungen", es: "Tratamientos Principales", it: "Trattamenti Principali", fr: "Meilleurs Traitements", ru: "Лучшие Процедуры"
  },
  "The list below is strictly ordered based on other patients' interest, prioritizing the most requested international procedures.": {
    en: "The list below is strictly ordered based on other patients' interest, prioritizing the most requested international procedures.",
    ro: "Lista de mai jos se ordonează automat în funcție de interesul celorlalți pacienți, aducând în prim plan cele mai solicitate proceduri la nivel internațional.",
    de: "Die unten stehende Liste ist strikt nach dem Interesse anderer Patienten geordnet und priorisiert die am häufigsten nachgefragten internationalen Verfahren.",
    es: "La lista a continuación está estrictamente ordenada según el interés de otros pacientes, priorizando los procedimientos internacionales más solicitados.",
    it: "L'elenco seguente è rigorosamente ordinato in base all'interesse di altri pazienti, dando la priorità alle procedure internazionali più richieste.",
    fr: "La liste ci-dessous est strictement ordonnée en fonction de l'intérêt d'autres patients, en priorisant les procédures internationales les plus demandées.",
    ru: "Приведенный ниже список строго отсортирован на основе интереса других пациентов, отдавая приоритет наиболее востребованным международным процедурам."
  },
  "Discover Package": {
    en: "Discover Package", ro: "Descoperă Pachetul", de: "Paket entdecken", es: "Descubrir Paquete", it: "Scopri il Pacchetto", fr: "Découvrir le Forfait", ru: "Узнать о Пакете"
  }
};

let translationStr = '';
for (const [key, val] of Object.entries(newTranslations)) {
  translationStr += `  "${key}": ${JSON.stringify(val)},\n`;
}

if (!transContent.includes('"JCI Accreditation & Safety"')) {
  transContent = transContent.replace(/export const T: Record<string, Record<string, string>> = \{/, 'export const T: Record<string, Record<string, string>> = {\n' + translationStr);
  fs.writeFileSync(transPath, transContent, 'utf-8');
  console.log('Added translations to uiTranslations.ts');
} else {
  console.log('Translations already in uiTranslations.ts');
}
