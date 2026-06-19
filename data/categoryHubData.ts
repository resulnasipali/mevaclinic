// data/categoryHubData.ts

export interface CategoryData {
  title: Record<string, string>;
  subtitle: Record<string, string>;
  description: Record<string, string>;
  suitabilityTitle: Record<string, string>;
  suitabilityDesc: Record<string, string>;
  suitabilityPoints: Record<string, string[]>;
  faq: Record<string, { q: string; a: string }[]>;
}

export const categoryHubData: Record<string, CategoryData> = {
  bariatric: {
    title: {
      en: 'Bariatric Surgery & Metabolic Solutions in Istanbul',
      ro: 'Chirurgie Bariatrică și Soluții Metabolice în Istanbul',
      es: 'Cirugía Bariátrica y Soluciones Metabólicas en Estambul',
      it: 'Chirurgia Bariatrica e Soluzioni Metaboliche a Istanbul',
      fr: 'Chirurgie Bariatrique et Solutions Métaboliques à Istanbul',
      de: 'Bariatrische Chirurgie & Metabolische Lösungen in Istanbul',
      ru: 'Бариатрическая хирургия и метаболические решения в Стамбуле'
    },
    subtitle: {
      en: 'Accredited weight loss surgeries utilizing advanced robotic laparoscopy and personalized post-operative metabolic tracking.',
      ro: 'Chirurgii acreditate de slăbire utilizând laparoscopie robotică avansată și monitorizare metabolică postoperatorie personalizată.',
      es: 'Cirugías acreditadas de pérdida de peso utilizando laparoscopia robótica avanzada y seguimiento metabólico posoperatorio personalizado.',
      it: 'Chirurgia dell\'obesità accreditata utilizzando laparoscopia robotica avanzata e monitoraggio metabolico post-operatorio personalizzato.',
      fr: 'Chirurgies accréditées de perte de poids utilisant la laparoscopie robotique avancée et un suivi métabolique post-opératoire.',
      de: 'Akkreditierte Gewichtsverlust-Operationen unter Verwendung fortschrittlicher robotergestützter Laparoskopie und personalisierter postoperativer metabolischer Nachsorge.',
      ru: 'Сертифицированные операции по снижению веса с использованием передовой роботизированной лапароскопии и индивидуального послеоперационного наблюдения.'
    },
    description: {
      en: 'Meva Clinic facilitates elite bariatric surgery services in Istanbul, Turkey, cooperating exclusively with JCI-accredited clinical campuses. Our network specializes in minimally invasive weight loss interventions including Gastric Sleeve (Sleeve Gastrectomy), Gastric Bypass, Gastric Balloon, and Gastric Botox. By utilizing the Da Vinci robotic surgical system, our partner surgeons execute stomach reductions with enhanced 3D visualization and extreme accuracy, which dramatically reduces the risks of surgical leaks, post-operative pain, and recovery times. Obesity is a complex metabolic disease, which is why we do not offer simple surgeries but comprehensive 12-month metabolic packages. Every package includes comprehensive pre-operative screening (cardiologist, pulmonologist, endocrinologist evaluation), personalized dietary plans designed by clinical bariatric nutritionists, and regular aftercare tracking. We bridge the gap between world-class surgical expertise and ultimate patient comfort, providing all-inclusive premium services including VIP transport, luxury 5-star Bosphorus hotels, and dedicated native translation support throughout your clinical journey in Turkey.',
      ro: 'Meva Clinic facilitează servicii de chirurgie bariatrică de elită în Istanbul, colaborând exclusiv cu campusuri clinice acreditate JCI. Rețeaua noastră este specializată în intervenții minim invazive de slăbire, inclusiv Gastric Sleeve (micșorare de stomac), Bypass Gastric, Balon Gastric și Botox Gastric. Prin utilizarea sistemului chirurgical robotic Da Vinci, chirurgii noștri parteneri execută reduceri gastrice cu vizualizare 3D HD îmbunătățită și o precizie extremă, ceea ce reduce dramatic riscurile de complicații, durerile postoperatorii și timpul de recuperare. Obezitatea este o boală metabolică complexă, motiv pentru care nu oferim doar simple intervenții, ci pachete metabolice complete de 12 luni. Fiecare pachet include screening preoperatoriu complet (evaluare cardiolog, pneumolog, endocrinolog), planuri nutriționale personalizate concepute de dieteticieni clinici și monitorizare postoperatorie pe termen lung. Conectăm expertiza chirurgicală de clasă mondială cu confortul absolut al pacientului, oferind servicii all-inclusive premium, inclusiv transport VIP, cazare la hoteluri de lux de 5 stele pe Bosfor și asistență dedicată pentru traducere în limba maternă pe tot parcursul călătoriei dumneavoastră medicale în Turcia.',
      de: 'Meva Clinic vermittelt erstklassige bariatrische Chirurgie in Istanbul, Türkei, und arbeitet ausschließlich mit JCI-akkreditierten klinischen Zentren zusammen. Unser Netzwerk ist auf minimal-invasive Gewichtsverlust-Eingriffe spezialisiert, darunter Schlauchmagen-Operationen (Sleeve Gastrektomie), Magenbypässe, Magenballons und Magen-Botox. Durch den Einsatz des Da-Vinci-Roboter-Chirurgiesystems führen unsere Partnerchirurgen Magenverkleinerungen mit verbesserter 3D-HD-Visualisierung und extremer Präzision durch, was das Risiko von Operationskomplikationen, postoperativen Schmerzen und Genesungszeiten drastisch reduziert. Adipositas ist eine komplexe Stoffwechselerkrankung, weshalb wir keine einfachen Operationen, sondern umfassende 12-monatige Stoffwechselpakete anbieten. Jedes Paket beinhaltet eine umfassende präoperative Voruntersuchung (Kardiologe, Pneumologe, Endokrinologe), personalisierte Ernährungspläne von klinischen Adipositas-Ernährungsberatern sowie eine regelmäßige Nachsorge. Wir verbinden erstklassige chirurgische Kompetenz mit höchstem Patientenkomfort und bieten all-inclusive Premium-Services wie VIP-Transfer, luxuriöse 5-Sterne-Hotels am Bosporus und engagierte muttersprachliche Übersetzungsunterstützung während Ihrer medizinischen Reise in der Türkei.',
      es: 'Meva Clinic facilita servicios de cirugía bariátrica de élite en Estambul, Turquía, cooperando exclusivamente con campus clínicos acreditados por la JCI. Nuestra red se especializa en intervenciones de pérdida de peso mínimamente invasivas, que incluyen Manga Gástrica (Gastrectomía en Manga), Bypass Gástrico, Balón Gástrico y Botox Gástrico. Al utilizar el sistema quirúrgico robótico Da Vinci, nuestros cirujanos asociados ejecutan reducciones estomacales con una visualización 3D mejorada y una precisión extrema, lo que reduce drásticamente los riesgos de fugas quirúrgicas, dolor posoperatorio y tiempos de recuperación. La obesidad es una enfermedad metabólica compleja, por lo que no ofrecemos cirugías simples sino paquetes metabólicos integrales de 12 meses. Cada paquete incluye un examen preoperatorio completo (evaluación de cardiólogo, neumólogo, endocrinólogo), planes dietéticos personalizados diseñados por nutricionistas bariátricos clínicos y un seguimiento regular. Cerramos la brecha entre la experiencia quirúrgica de clase mundial y la máxima comodidad del paciente, brindando servicios premium todo incluido que incluyen transporte VIP, hoteles de lujo de 5 estrellas en el Bósforo y soporte de traducción nativo dedicado durante todo su viaje clínico en Turquía.',
      it: 'Meva Clinic facilita servizi di chirurgia bariatrica d\'élite a Istanbul, in Turchia, collaborando esclusivamente con campus clinici accreditati JCI. La nostra rete è specializzata in interventi di perdita di peso minimamente invasivi, tra cui la Sleeve Gastrectomy (riduzione dello stomaco), il Bypass Gastrico, il Palloncino Gastrico e il Botox Gastrico. Utilizzando il sistema chirurgico robotico Da Vinci, i nostri chirurghi partner eseguono riduzioni dello stomaco con una visualizzazione 3D avanzata e una precisione estrema, riducendo drasticamente i rischi di complicazioni, dolore post-operatorio e tempi di recupero. L\'obesità è una malattia metabolica complessa, motivo per cui non offriamo semplici interventi chirurgici ma pacchetti metabolici completi di 12 mesi. Ogni pacchetto include uno screening pre-operatorio completo (valutazione cardiologica, pneumologica, endocrinologica), piani dietetici personalizzati progettati da nutrizionisti bariatrici clinici e un monitoraggio regolare. Uniamo l\'esperienza chirurgica di livello mondiale con il massimo comfort del paziente, offrendo servizi all-inclusive di qualità superiore che includono trasferimenti VIP, hotel di lusso a 5 stelle sul Bosforo e un supporto di traduzione dedicato in lingua madre durante tutto il viaggio clinico in Turchia.',
      fr: 'Meva Clinic propose des services de chirurgie bariatrique d\'élite à Istanbul, en Turquie, en collaborant exclusivement con des campus cliniques accrédités JCI. Notre réseau est spécialisé dans les interventions de perte de poids minimalement invasives, notamment la Sleeve Gastrectomie, le Bypass Gastrique, le Ballon Gastrique et le Botox Gastrique. En utilisant le système chirurgical robotisé Da Vinci, nos chirurgiens partenaires effectuent des réductions d\'estomac avec une visualisation 3D améliorée et une précision extrême, ce qui réduit considérablement les risques de complications, de douleurs post-opératoires et les temps de récupération. L\'obésité étant une maladie métabolique complexe, nous ne proposons pas de simples chirurgies mais des forfaits métaboliques complets sur 12 mois. Chaque forfait comprend un bilan préopératoire complet (évaluation par un cardiologue, un pneumologue, un endocrinologue), des plans diététiques personnalisés conçus par des nutritionnistes bariatriques cliniques et un suivi régulier. Nous comblons le fossé entre l\'expertise chirurgicale de classe mondiale et le confort ultime du patient, en fournissant des services premium tout compris, notamment des transferts VIP, des hôtels de luxe 5 étoiles sur le Bosphore et une assistance de traduction dédiée.',
      ru: 'Meva Clinic предоставляет услуги бариатрической хирургии элитного уровня в Стамбуле, Турция, сотрудничая исключительно с клиниками, аккредитованными JCI. Наша сеть специализируется на малоинвазивных вмешательствах для снижения веса, включая рукавную резекцию желудка (Gastric Sleeve), желудочное шунтирование (Gastric Bypass), установку внутрижелудочного баллона (Gastric Balloon) и ботокс желудка (Gastric Botox). Используя роботизированную хирургическую систему Da Vinci, наши хирурги-партнеры проводят операции по уменьшению объема желудка с улучшенной 3D-визуализацией и высокой точностью, что значительно снижает риски осложнений, послеоперационную боль и время восстановления. Ожирение — это сложное метаболическое заболевание, поэтому мы предлагаем не просто операции, а комплексные 12-месячные пакеты метаболического наблюдения. Каждая программа включает полное предоперационное обследование (оценка кардиолога, пульмонолога, эндокринолога), индивидуальные планы питания от клинических диетологов-бариаторов и регулярный контроль. Мы объединяем хирургический опыт мирового класса и максимальный комфорт пациентов, предоставляя премиальные услуги «все включено», включая VIP-трансфер, проживание в роскошных 5-звездочных отелях на берегу Босфора и сопровождение персонального переводчика на протяжении всего лечения.'
    },
    suitabilityTitle: {
      en: 'Bariatric Candidate Assessment criteria',
      ro: 'Criterii de Evaluare a Candidaților Bariatrici',
      es: 'Criterios de Evaluación de Candidatos Bariátricos',
      it: 'Criteri di Valutazione dei Candidati alla Chirurgia Bariatrica',
      fr: 'Critères d\'Évaluation des Candidats à la Chirurgie Bariatrique',
      de: 'Kriterien zur Bewertung bariatrischer Kandidaten',
      ru: 'Критерии оценки кандидатов на бариатрическую операцию'
    },
    suitabilityDesc: {
      en: 'Weight loss surgery is highly effective but requires specific clinical profiles to ensure safety and surgical efficacy.',
      ro: 'Chirurgia de slăbire este extrem de eficientă, dar necesită profiluri clinice specifice pentru a asigura siguranța și eficacitatea chirurgicală.',
      es: 'La cirugía de pérdida de peso es muy eficaz, pero requiere perfiles clínicos específicos para garantizar la seguridad y la eficacia quirúrgica.',
      it: 'La chirurgia bariatrica è altamente efficace ma richiede specifici profili clinici per garantire la sicurezza e l\'efficacia chirurgica.',
      fr: 'La chirurgie de perte de poids est très efficace mais nécessite des profils cliniques spécifiques pour garantir la sécurité et l\'efficacité.',
      de: 'Gewichtsverlust-Operationen sind äußerst effektiv, erfordern jedoch spezifische klinische Profile, um Sicherheit und chirurgische Wirksamkeit zu gewährleisten.',
      ru: 'Операции по снижению веса высокоэффективны, но требуют определенных клинических показателей для обеспечения безопасности и эффективности.'
    },
    suitabilityPoints: {
      en: [
        'Body Mass Index (BMI) of 35 or higher (or 30+ with obesity-related conditions like type 2 diabetes or hypertension).',
        'History of unsuccessful supervised weight loss attempts through diet and physical exercise.',
        'No active substance abuse or untreated severe psychological conditions.',
        'Commitment to permanent lifestyle, dietary, and physical activity modifications after the surgery.'
      ],
      ro: [
        'Indicele de masă corporală (IMC) de 35 sau mai mare (sau 30+ cu afecțiuni asociate obezității, cum ar fi diabetul de tip 2 sau hipertensiunea).',
        'Istoric de încercări nereușite de slăbire prin dietă și exerciții fizice supravegheate.',
        'Fără abuz de substanțe active sau afecțiuni psihologice severe netratate.',
        'Angajamentul de a face modificări permanente ale stilului de viață, dietei și activității fizice după operație.'
      ],
      de: [
        'Body-Mass-Index (BMI) von 35 oder höher (oder 30+ bei adipositasbedingten Erkrankungen wie Typ-2-Diabetes oder Bluthochdruck).',
        'Historie erfolgloser Gewichtsabnahmeversuche durch Diät und Bewegung unter Aufsicht.',
        'Kein aktiver Substanzmissbrauch oder unbehandelte schwere psychische Erkrankungen.',
        'Bereitschaft zu dauerhaften Lebensstil-, Ernährungs- und Bewegungsänderungen nach dem Eingriff.'
      ],
      es: [
        'Índice de Masa Corporal (IMC) de 35 o más (o 30+ con condiciones relacionadas con la obesidad como diabetes tipo 2 o hipertensión).',
        'Historial de intentos fallidos de pérdida de peso bajo supervisión mediante dieta y ejercicio físico.',
        'Sin abuso de sustancias activo ni condiciones psicológicas graves no tratadas.',
        'Compromiso con modificaciones permanentes del estilo de vida, la dieta y la actividad física después de la cirugía.'
      ],
      it: [
        'Indice di Massa Corporea (IMC) pari o superiore a 35 (o 30+ in presenza di patologie correlate all\'obesità come diabete di tipo 2 o ipertensione).',
        'Storia di tentativi infruttuosi di perdita di peso attraverso dieta ed esercizio fisico supervisionati.',
        'Assenza di abuso di sostanze attivo o di gravi condizioni psicologiche non trattate.',
        'Impegno a modificare permanentemente lo stile di vita, la dieta e l\'attività fisica dopo l\'intervento.'
      ],
      fr: [
        'Indice de masse corporelle (IMC) de 35 ou plus (ou 30+ avec des comorbidités liées à l\'obésité comme le diabète de type 2 ou l\'hypertension).',
        'Antécédents de tentatives infructueuses de perte de peso par le régime et l\'exercice physique.',
        'Pas d\'abus de substances actif ni de troubles psychologiques graves non traités.',
        'Engagement à modifier durablement son mode de vie, son alimentation et son activité physique après l\'intervention.'
      ],
      ru: [
        'Индекс массы тела (ИМТ) 35 или выше (или 30+ при наличии заболеваний, связанных с ожирением, таких как диабет 2 типа или гипертония).',
        'Наличие в анамнезе неудачных попыток снижения веса с помощью диет и физических упражнений.',
        'Отсутствие активной зависимости от психоактивных веществ или нелеченых тяжелых психологических расстройств.',
        'Готовность к постоянным изменениям образа жизни, питания и физической активности после операции.'
      ]
    },
    faq: {
      en: [
        { q: 'How much weight will I lose after a Robotic Gastric Sleeve?', a: 'Patients typically lose 60% to 70% of their excess body weight within the first 12 to 18 months, provided they strictly follow post-op nutritional protocols.' },
        { q: 'When can I fly home after weight loss surgery in Istanbul?', a: 'We require a minimum stay of 5 to 7 days in Istanbul. A final pre-flight surgical check is conducted on day 5, after which it is completely safe to fly.' }
      ],
      ro: [
        { q: 'Cât în greutate voi pierde după un Gastric Sleeve Robotic?', a: 'Pacienții pierd de obicei 60% până la 70% din excesul de greutate corporală în primele 12 până la 18 luni, cu condiția să urmeze cu strictețe protocoalele nutriționale postoperatorii.' },
        { q: 'Când pot zbura acasă după chirurgia de slăbire în Istanbul?', a: 'Solicităm o ședere de minimum 5 până la 7 zile în Istanbul. Un control chirurgical final înainte de zbor este efectuat în ziua 5, după care este complet sigur să zburați.' }
      ],
      de: [
        { q: 'Wie viel Gewicht werde ich nach einem robotergestützten Schlauchmagen verlieren?', a: 'Patienten verlieren in der Regel 60 % bis 70 % ihres überschüssigen Körpergewichts innerhalb der ersten 12 bis 18 Monate, vorausgesetzt, sie halten sich strikt an die postoperativen Ernährungsprotokolle.' },
        { q: 'Wann kann ich nach einer Gewichtsverlust-Operation in Istanbul nach Hause fliegen?', a: 'Wir verlangen einen Mindestaufenthalt von 5 bis 7 Tagen in Istanbul. Am 5. Tag wird eine abschließende chirurgische Untersuchung vor dem Flug durchgeführt, nach der das Fliegen völlig sicher ist.' }
      ],
      es: [
        { q: '¿Cuánto peso perderé después de una Manga Gástrica Robótica?', a: 'Los pacientes suelen perder entre el 60% y el 70% de su exceso de peso corporal en los primeros 12 a 18 meses, siempre que sigan estrictamente los protocolos nutricionales posoperatorios.' },
        { q: '¿Cuándo puedo volar a casa después de la cirugía de pérdida de peso en Estambul?', a: 'Requerimos una estancia mínima de 5 a 7 días en Estambul. En el día 5 se realiza un control quirúrgico final antes del vuelo, tras el cual es completamente seguro volar.' }
      ],
      it: [
        { q: 'Quanto peso perderò dopo una Sleeve Gastrectomy robotica?', a: 'I pazienti in genere perdono dal 60% al 70% del peso corporeo in eccesso entro i primi 12-18 mesi, a condizione che seguano rigorosamente i protocolli nutrizionali post-operatori.' },
        { q: 'Quando posso volare a casa dopo l\'intervento di chirurgia bariatrica a Istanbul?', a: 'Richiediamo un soggiorno minimo di 5-7 giorni a Istanbul. Un controllo chirurgico finale pre-volo viene eseguito il quinto giorno, dopodiché è completamente sicuro volare.' }
      ],
      fr: [
        { q: 'Combien de poids vais-je perdre après une Sleeve Gastrectomie robotisée ?', a: 'Les patients perdent généralement 60 % à 70 % de leur excès de poids corporel au cours des 12 à 18 premiers mois, à condition de suivre strictement les protocolles nutritionnels.' },
        { q: 'Quand puis-je rentrer chez moi en avion après ma chirurgie à Istanbul ?', a: 'Nous exigeons un séjour minimum de 5 à 7 jours à Istanbul. Un contrôle chirurgical final est effectué le 5ème jour, après quoi vous pouvez voler en toute sécurité.' }
      ],
      ru: [
        { q: 'Сколько веса я сброшу после роботизированной рукавной резекции желудка?', a: 'Пациенты обычно теряют от 60% до 70% лишнего веса в течение первых 12–18 месяцев при условии строгого соблюдения послеоперационных диетологических протоколов.' },
        { q: 'Когда я смогу полететь домой после бариатрической операции в Стамбуле?', a: 'Требуется минимальное пребывание в Стамбуле в течение 5–7 дней. На 5-й день проводится контрольный осмотр, после которого перелет абсолютно безопасен.' }
      ]
    }
  },
  hair: {
    title: {
      en: 'Elite Hair & Eyebrow Transplantation in Turkey',
      ro: 'Implant de Păr și Sprâncene de Elită în Turcia',
      es: 'Trasplante de Cabello y Cejas de Élite en Turquía',
      it: 'Trapianto di Capelli e Sopracciglia d\'Élite in Turchia',
      fr: 'Greffe de Cheveux et Sourcils d\'Élite en Turquie',
      de: 'Elite Haar- & Augenbrauentransplantation in der Türkei',
      ru: 'Элитная пересадка волос и бровей в Турции'
    },
    subtitle: {
      en: 'Maximizing graft survival rates using Sapphire blades, DHI implanter pens, and premium regenerative Exosome therapy.',
      ro: 'Maximizarea ratelor de supraviețuire a grefelor folosind lame de safir, stilouri de implantare DHI și terapie regenerativă cu exozomi.',
      es: 'Maximización de las tasas de supervivencia de los injertos utilizando hojas de zafiro, bolígrafos implantadores DHI y terapia regenerativa de exosomas.',
      it: 'Massimizzazione del tasso di sopravvivenza dei bulbi utilizzando lame in zaffiro, penne implanter DHI e terapia rigenerativa con esosomi.',
      fr: 'Maximiser le taux de survie des greffons grâce aux lames de saphir, aux stylos DHI et à la thérapie régénérative par exosomes.',
      de: 'Maximierung der Überlebensrate der Transplantate durch Saphirklingen, DHI-Implanter-Pens und erstklassige regenerative Exosomen-Therapie.',
      ru: 'Максимизация выживаемости графтов с помощью лезвий Sapphire, имплантеров DHI и передовой регенеративной экзосомной терапии.'
    },
    description: {
      en: 'Meva Clinic offers world-leading hair restoration facilities in Istanbul, Turkey, using cutting-edge microscopic follicular unit extraction methods. We specialize in Sapphire FUE, Direct Hair Implantation (DHI), and specialized eyebrow and beard transplants. Sapphire FUE utilizes micro-blades crafted from single-crystal sapphire, creating V-shaped micro-channels that minimize scalp tissue trauma, reduce bleeding, and accelerate post-operative healing by 40% compared to traditional steel slits. For patients seeking maximum density without shaving their recipient areas, our Direct Hair Implantation (DHI) technique utilizes custom Choi Implanter Pens, allowing for simultaneous channel creation and graft insertion with precise depth, angle, and direction control. Additionally, our premium packages integrate advanced Exosome therapy—a cell-free regenerative protocol utilizing purified stem cell exosomes to stimulate follicular regeneration and boost hair graft survival rates to 98%+. We support international patients with premium all-inclusive concierge arrangements: airport pick-ups via VIP Mercedes-Benz transfers, luxury 5-star hotel accommodations near the clinical locations, and native translators who ensure seamless communication with your surgical specialists.',
      ro: 'Meva Clinic oferă unități de restaurare capilară de top în Istanbul, utilizând metode avansate de extracție a unităților foliculare microscopice. Suntem specializați în Sapphire FUE, Direct Hair Implantation (DHI) și transplanturi specializate de sprâncene și barbă. Sapphire FUE folosește micro-lame din safir monocristal, creând micro-canale în formă de V care reduc trauma scalpului, sângerarea și accelerează vindecarea cu 40% față de lamele tradiționale de oțel. Pentru pacienții care doresc o densitate maximă fără a fi nevoiți să își radă complet părul, tehnica DHI utilizează stilouri Choi, permițând crearea canalului și introducerea grefei simultan, cu un control precis al unghiului și direcției de creștere. Integrăm în pachetele premium terapia cu exozomi - un protocol regenerativ avansat bazat pe celule stem pentru a stimula foliculii și a crește rata de prindere a grefelor la peste 98%. Oferim asistență completă all-inclusive: preluare de la aeroport cu vehicule VIP Mercedes-Benz, cazare la hoteluri de lux de 5 stele și traducători personali pe tot parcursul procedurilor.',
      de: 'Die Meva Clinic bietet weltweit führende Einrichtungen zur Haarwiederherstellung in Istanbul, Türkei, unter Anwendung modernster mikroskopischer Follicular Unit Extraction-Methoden. Wir sind auf Saphir-FUE, Direct Hair Implantation (DHI) sowie spezielle Augenbrauen- und Barttransplantationen spezialisiert. Saphir-FUE verwendet Mikroklingen aus Einkristall-Saphir, die V-förmige Mikrokanäle erzeugen. Dies minimiert das Trauma des Kopfhautgewebes, reduziert Blutungen und beschleunigt die postoperative Heilung im Vergleich zu herkömmlichen Stahlschlitzen um 40 %. Für Patienten, die maximale Dichte wünschen, ohne den Empfängerbereich rasieren zu müssen, nutzt unsere DHI-Technik spezielle Choi-Implanter-Pens. Dies ermöglicht die gleichzeitige Kanalerstellung und Platzierung der Transplantate mit präziser Kontrolle über Tiefe, Winkel und Richtung. Darüber hinaus integrieren unsere Premium-Pakete die fortschrittliche Exosomen-Therapie – ein zellfreies regeneratives Protokoll, das gereinigte Stammzell-Exosomen nutzt, um die Follikelregeneration zu stimulieren und die Überlebensrate der Haartransplantate auf über 98 % zu steigern. Wir unterstützen internationale Patienten mit Premium-All-Inclusive-Concierge-Arrangements: VIP-Mercedes-Benz-Transfers, Luxus-5-Sterne-Unterkünfte und muttersprachliche Dolmetscher.',
      es: 'Meva Clinic ofrece centros de restauración capilar líderes en el mundo en Estambul, Turquía, utilizando métodos avanzados de extracción de unidades foliculares microscópicas. Nos especializamos en Sapphire FUE, Implantación Directa de Cabello (DHI) y trasplantes especializados de cejas y barba. Sapphire FUE utiliza microhojas fabricadas a partir de zafiro monocristalino, creando microcanales en forma de V que minimizan el trauma del tejido del cuero cabelludo, reducen el sangrado y aceleran la cicatrización posoperatoria en un 40% en comparación con las incisiones de acero tradicionales. Para los pacientes que buscan la máxima densidad sin afeitarse las áreas receptoras, nuestra técnica DHI utiliza Choi Implanter Pens personalizados, lo que permite la creación simultánea de canales y la inserción de injertos con un control preciso de la profundidad, el ángulo y la dirección. Además, nuestros paquetes premium integran la terapia avanzada de exosomas, un protocolo regenerativo libre de células que utiliza exosomas purificados de células madre para estimular la regeneración folicular y aumentar las tasas de supervivencia de los injertos capilares a más del 98%. Respaldamos a los pacientes internacionales con arreglos de conserjería premium todo incluido: traslados VIP, hoteles de 5 estrellas y traductores nativos.',
      it: 'Meva Clinic offre strutture per il trapianto di capelli leader a livello mondiale a Istanbul, in Turchia, utilizzando metodi microscopici avanzati di estrazione delle unità follicolari. Siamo specializzati in Sapphire FUE, Direct Hair Implantation (DHI) e trapianti specifici di sopracciglia e barba. La tecnica Sapphire FUE utilizza micro-lame in zaffiro monocristallino, creando micro-canali a V che riducono il trauma del cuoio capelluto, limitano il sanguinamento e velocizzano la guarigione post-operatoria del 40% rispetto alle tradizionali lame in acciaio. Per i pazienti che desiderano la massima densità senza radere la zona ricevente, la nostra tecnica DHI utilizza speciali Choi Implanter Pen, consentendo la creazione del canale e l\'inserimento del bulbo contemporaneamente con un controllo preciso di profondità, angolo e direzione. Inoltre, i nostri pacchetti includono la terapia avanzata con esosomi, un protocollo rigenerativo che utilizza esosomi purificati da cellule staminali per stimolare la rigenerazione dei follicoli e aumentare la sopravvivenza dei bulbi a oltre il 98%. Assistiamo i pazienti con servizi all-inclusive d\'eccellenza: trasferimenti VIP Mercedes-Benz, hotel di lusso a 5 stelle e traduttori dedicati in lingua madre.',
      fr: 'Meva Clinic propose des centres de restauration capillaire de premier plan à Istanbul, en Turquie, en utilisant des méthodes d\'extraction d\'unités folliculaires microscopiques de pointe. Nous sommes spécialisés dans le Sapphire FUE, l\'implantation directe de cheveux (DHI) et les greffes de sourcils et de barbe. La Sapphire FUE utilise des micro-lames en saphir, créant des micro-canaux en V qui minimisent le traumatisme du cuir chevelu, réduisent les saignements et accélèrent la cicatrisation post-opératoire de 40 % par rapport aux fentes en acier. Pour les patients qui recherchent une densité maximale sans raser la zone donneuse, notre technique DHI utilise des stylos implanteurs Choi, permettant la création simultanée de canaux et l\'insertion des greffons. Nos forfaits premium intègrent la thérapie par exosomes, un protocole de régénération cellulaire stimulant la repousse et augmentant le taux de survie des greffons à plus de 98 %.',
      ru: 'Meva Clinic предлагает ведущие мировые центры восстановления волос в Стамбуле, Турция, использующие передовые методы микроскопической экстракции фолликулярных объединений. Мы специализируемся на технологиях Sapphire FUE, Direct Hair Implantation (DHI), а также на пересадке бровей и бороды. Метод Sapphire FUE использует микролезвия из монокристаллического сапфира, создающие V-образные микроканалы, что снижает травматизацию тканей кожи головы, уменьшает кровотечение и ускоряет послеоперационное заживление на 40% по сравнению с традиционными стальными лезвиями. Для пациентов, желающих получить максимальную густоту без бритья донорской зоны, метод DHI использует специальные имплантеры Choi Implanter Pens, позволяющие одновременно создавать канал и вживлять графт с точным контролем глубины, угла и направления роста. Наши премиум-пакеты также включают экзосомную терапию — протокол регенерации с использованием очищенных экзосом стволовых клеток для стимуляции фолликулов и повышения выживаемости графтов до 98%+.'
    },
    suitabilityTitle: {
      en: 'Hair Restoration Candidate Criteria',
      ro: 'Criterii de Eligibilitate pentru Implantul de Păr',
      es: 'Criterios de Candidato para Restauración Capilar',
      it: 'Criteri per il Candidato al Trapianto di Capelli',
      fr: 'Critères d\'Éligibilité à la Greffe de Cheveux',
      de: 'Kriterien für Haartransplantations-Kandidaten',
      ru: 'Критерии отбора кандидатов на пересадку волос'
    },
    suitabilityDesc: {
      en: 'Evaluating donor hair quality and the degree of hair thinning is essential to project realistic, high-density results.',
      ro: 'Evaluarea calității părului donator și a gradului de calviție este esențială pentru a asigura rezultate realiste cu densitate mare.',
      es: 'Evaluar la calidad del cabello donante y el grado de adelgazamiento capilar es esencial para proyectar resultados realistas y de alta densidad.',
      it: 'Valutare la qualità dei capelli della zona donatrice e il grado di diradamento è essenziale per garantire risultati realistici ad alta densità.',
      fr: 'L\'évaluation de la qualité de la zone donneuse et du degré de calvitie est essentielle pour garantir des résultats denses.',
      de: 'Die Bewertung der Qualität des Spenderhaars und des Ausmaßes des Haarausfalls ist wesentlich, um realistische, dichte Ergebnisse zu prognostizieren.',
      ru: 'Оценка качества донорских волос и степени облысения необходима для планирования реалистичных результатов высокой густоты.'
    },
    suitabilityPoints: {
      en: [
        'Stable and sufficient donor hair density on the back and sides of the scalp.',
        'Moderate to advanced androgenetic alopecia (male/female pattern baldness) or localized thinning.',
        'Absence of active, untreated scalp inflammation, alopecia areata, or scarring alopecias.',
        'Realistic expectations regarding density matching based on donor hair capacity.'
      ],
      ro: [
        'Densitate stabilă și suficientă a părului donator în zona cefei și pe părțile laterale ale scalpului.',
        'Alopecie androgenetică moderată până la avansată (calviție masculină/feminină) sau rărire localizată.',
        'Absența inflamațiilor active ale scalpului, alopeciei areata sau alopeciilor cicatriciale.',
        'Așteptări realiste privind densitatea obținută pe baza capacității zonei donatoare.'
      ],
      de: [
        'Stabile und ausreichende Spenderhaardichte am Hinterkopf und an den Seiten der Kopfhaut.',
        'Moderate bis fortgeschrittene androgenetische Alopezie (Haarausfall nach männlichem/weiblichem Muster) oder lokalisierte Lichtung.',
        'Keine aktive, unbehandelte Entzündung der Kopfhaut, Alopecia areata oder vernarbende Alopezie.',
        'Realistische Erwartungen hinsichtlich der Dichte basierend auf der Kapazität des Spenderbereichs.'
      ],
      es: [
        'Densidad estable y suficiente de cabello donante en la parte posterior y los lados del cuero cabelludo.',
        'Alopecia androgenética moderada a avanzada (calvicie de patrón masculino/femenino) o adelgazamiento localizado.',
        'Ausencia de inflamación activa del cuero cabelludo no tratada, alopecia areata o alopecias cicatrizales.',
        'Expectativas realistas sobre la densidad obtenida basadas en la capacidad del área donante.'
      ],
      it: [
        'Densità stabile e sufficiente di capelli nella zona donatrice (nuca e lati del cuoio capelluto).',
        'Alopecia androgenetica da moderata ad avanzata o diradamento localizzato.',
        'Assenza di infiammazioni attive del cuoio capelluto non trattate, alopecia areata o alopecie cicatriziali.',
        'Aspettative realistiche sulla densità finale basate sulla capacità della zona donatrice.'
      ],
      fr: [
        'Zone donneuse stable et suffisamment dense à l\'arrière et sur les côtés du cuir chevelu.',
        'Alopécie androgénétique modérée à avancée ou calvitie localisée.',
        'Absence d\'inflammation active du cuir chevelu, d\'alopecia areata ou d\'alopécie cicatricielle.',
        'Attentes réalistes quant à la densité obtenue basées sur la capacité de la zone donneuse.'
      ],
      ru: [
        'Стабильная и достаточная густота донорских волос на затылке и височных областях.',
        'Умеренная или выраженная андрогенетическая алопеция (облысение по мужскому/женскому типу) или локальное поредение.',
        'Отсутствие активных воспалений кожи головы, очаговой алопеции или рубцовых изменений.',
        'Реалистичные ожидания относительно густоты волос, основанные на возможностях донорской зоны.'
      ]
    },
    faq: {
      en: [
        { q: 'Is a Sapphire FUE hair transplant painful?', a: 'The procedure is performed under local anesthesia, which is administered using comfort-injections (needle-free pressure delivery). Patients feel no pain during graft extraction or implantation.' },
        { q: 'How long do transplanted hair follicles last?', a: 'Transplanted hair is harvested from the permanent donor zone (resistant to DHT hormones). Once successfully integrated, these hair follicles grow naturally long-term.' }
      ],
      ro: [
        { q: 'Este dureros transplantul de păr Sapphire FUE?', a: 'Procedura se efectuează sub anestezie locală administrată prin injecții fără ac. Pacienții nu resimt durere în timpul extracției grefelor sau implantării.' },
        { q: 'Cât timp rezistă foliculii de păr transplantați?', a: 'Părul transplantat este recoltat din zona donatoare permanentă (rezistentă la hormonul DHT). Odată integrați, acești foliculii cresc permanent, pe viață.' }
      ],
      de: [
        { q: 'Ist eine Sapphire-FUE-Haartransplantation schmerzhaft?', a: 'Der Eingriff wird unter lokaler Anästhesie durchgeführt, die mittels nadelfreier Komfort-Injektionen verabreicht wird. Die Patienten spüren während der Entnahme oder Implantation der Transplantate keine Schmerzen.' },
        { q: 'Wie lange halten die transplantierten Haarfollikel?', a: 'Das transplantierte Haar wird aus der permanenten Spenderzone entnommen, die resistent gegen DHT-Hormone ist. Nach erfolgreichem Einwachsen wachsen diese Haarfollikel ein Leben lang permanent.' }
      ],
      es: [
        { q: '¿Es doloroso el trasplante de cabello Sapphire FUE?', a: 'El procedimiento se realiza bajo anestesia local administrada mediante inyecciones de confort sin aguja. Los pacientes no sienten dolor durante la extracción o implantación de injertos.' },
        { q: '¿Cuánto tiempo duran los folículos pilosos transplantados?', a: 'El cabello transplantado se extrae de la zona donante permanente (resistente a la hormona DHT). Una vez integrados con éxito, estos folículos pilosos crecen de forma permanente de por vida.' }
      ],
      it: [
        { q: 'Il trapianto di capelli Sapphire FUE è doloroso?', a: 'La procedura viene eseguita in anestesia locale somministrata tramite iniettori senza ago. I pazienti non avvertono alcun dolore durante l\'estrazione o l\'innesto dei bulbi.' },
        { q: 'Quanto durano i capelli trapiantati?', a: 'I capelli trapiantati vengono prelevati dalla zona donatrice permanente (resistente all\'ormone DHT). Una vez integrati, questi follicoli crescono in modo permanente per tutta la vita.' }
      ],
      fr: [
        { q: 'Une greffe de cheveux Sapphire FUE est-elle douloureuse ?', a: 'La procédure est réalisée sous anesthésie locale administrée à l\'aide d\'injecteurs sans aiguille. Les patients ne ressentent aucune douleur pendant l\'extraction ou l\'implantation.' },
        { q: 'Quelle est la durée de vie des greffons transplantés ?', a: 'Les cheveux transplantés sont prélevés dans la zone donneuse permanente. Une fois intégrés, ces follicules pileux poussent de manière permanente à vie.' }
      ],
      ru: [
        { q: 'Болезненна ли пересадка волос Sapphire FUE?', a: 'Процедура проводится под местной анестезией, которая вводится с помощью безыгольных инъекторов. Пациенты не чувствуют боли во время забора или имплантации графтов.' },
        { q: 'Как долго держатся пересаженные волосяные фолликулы?', a: 'Пересаженные волосы берутся из постоянной донорской зоны, устойчивой к гормону ДГТ. После успешной приживаемости эти фолликулы растут на протяжении всей жизни.' }
      ]
    }
  },
  dental: {
    title: {
      en: 'Premium Aesthetic Dentistry & Implants in Istanbul',
      ro: 'Estetică Dentară Premium și Implanturi în Istanbul',
      es: 'Odontología Estética Premium e Implantes en Estambul',
      it: 'Odontoiatria Estetica Premium e Impianti a Istanbul',
      fr: 'Dentisterie Esthétique Premium & Implants à Istanbul',
      de: 'Premium Ästhetische Zahnmedizin & Implantate in Istanbul',
      ru: 'Премиальная эстетическая стоматология и имплантация в Стамбуле'
    },
    subtitle: {
      en: 'Transforming smiles utilizing CAD/CAM digital labs, biocompatible Zirconium crowns, and computer-guided implants.',
      ro: 'Transformarea zâmbetului utilizând laboratoare digitale CAD/CAM, coroane biocompatibile de zirconiu și implanturi ghidate digital.',
      es: 'Transformando sonrisas utilizando laboratorios digitales CAD/CAM, coronas de circonio biocompatibles e implantes guiados digitalmente.',
      it: 'Trasforma il tuo sorriso utilizzando laboratori digitali CAD/CAM, corone in zirconio biocompatibile e impianti guidati dal computer.',
      fr: 'Transformer les sourires grâce aux laboratoires numériques CAD/CAM, aux couronnes en zirconium et aux implants guidés.',
      de: 'Verwandlung von Lächeln unter Verwendung digitaler CAD/CAM-Labore, biokompatibler Zirkoniumkronen und computergestützter Implantate.',
      ru: 'Преображение улыбки с использованием цифровых лабораторий CAD/CAM, биосовместимых коронок из диоксида циркония и компьютерной имплантации.'
    },
    description: {
      en: 'Meva Clinic facilitates elite dental restoration procedures in Istanbul, Turkey, cooperating exclusively with advanced dental clinics and in-house digital laboratories. We offer comprehensive services including custom Hollywood Smile designs, CAD/CAM-machined Zirconium Crowns, biocompatible Porcelain Veneers, and advanced implantology solutions such as All-on-4 and All-on-6 computer-guided surgeries. By utilizing advanced 3D intraoral scanners and Digital Smile Design (DSD) software, our partner prosthodontists simulate your aesthetic outcome before any work begins, ensuring optimal shape, alignment, and shade matching that complements your facial structure. We utilize only certified, premium dental implants from global leaders (such as Straumann and Nobel Biocare) with lifetime guarantees. All procedures are conducted by board-certified dental surgeons with extensive experience in international restorative cases. We ensure a stress-free dental holiday by providing all-inclusive arrangements: private VIP airport pick-ups, Bosphorus luxury hotel accommodations, and bilingual patient advocates who coordinate every dental visit, laboratory check, and clinical follow-up during your stay in Turkey.',
      ro: 'Meva Clinic facilitează proceduri de restaurare dentară de elită în Istanbul, colaborând exclusiv cu clinici dentare avansate și laboratoare digitale proprii. Oferim servicii complete, inclusiv Hollywood Smile personalizat, coroane de Zirconiu realizate prin tehnologie CAD/CAM, fațete de porțelan biocompatibile și soluții avansate de implantologie, cum ar fi chirurgia ghidată computerizat All-on-4 și All-on-6. Prin utilizarea scanerelor intraorale 3D și a software-ului Digital Smile Design (DSD), medicii noștri stomatologi simulează rezultatul estetic înainte de începerea tratamentului, asigurând forma și culoarea perfectă. Utilizăm numai implanturi dentare premium certificate, de la lideri mondiali (cum ar fi Straumann și Nobel Biocare), cu garanție pe viață. Toate procedurile sunt conduse de chirurgi dentari certificați cu experiență vastă. Vă asigurăm o vacanță dentară fără stres prin pachete all-inclusive: transferuri private VIP, hoteluri de lux și asistenți medicali vorbitori de limba maternă.',
      de: 'Die Meva Clinic vermittelt erstklassige Zahnrestaurationsverfahren in Istanbul, Türkei, und arbeitet ausschließlich mit hochentwickelten Zahnkliniken und hauseigenen Digitallaboren zusammen. Wir bieten umfassende Dienstleistungen wie individuelles Hollywood-Lächeln-Design, CAD/CAM-gefräste Zirkoniumkronen, biokompatible Porzellan-Veneers sowie fortschrittliche Implantologie-Lösungen wie computergestützte All-on-4- und All-on-6-Eingriffe. Unter Verwendung fortschrittlicher 3D-Intraoralscanner und Digital Smile Design (DSD)-Software simulieren unsere Partner-Prothetiker Ihr ästhetisches Ergebnis vor Beginn der Arbeit, um eine optimale Form, Ausrichtung und Farbanpassung an Ihre Gesichtsstruktur zu gewährleisten. Wir verwenden ausschließlich zertifizierte Premium-Zahnimplantate von Weltmarktführern (wie Straumann und Nobel Biocare) mit lebenslanger Garantie. Alle Eingriffe werden von staatlich geprüften Zahnchirurgen mit umfassender Erfahrung bei internationalen Patienten durchgeführt. Wir sorgen für einen stressfreien Zahnurlaub durch All-Inclusive-Pakete: VIP-Transfers, 5-Sterne-Hotels am Bosporus und zweisprachige Patientenbetreuer.',
      es: 'Meva Clinic facilita procedimientos de restauración dental de élite en Estambul, Turquía, cooperando exclusivamente con clínicas dentales avanzadas y laboratorios digitales internos. Ofrecemos servicios integrales que incluyen diseños personalizados de Hollywood Smile, coronas de circonio mecanizadas por CAD/CAM, carillas de porcelana biocompatibles y soluciones de implantología avanzadas como cirugías guiadas por computadora All-on-4 y All-on-6. Al utilizar escáneres intraorales 3D avanzados y software de Diseño Digital de Sonrisa (DSD), nuestros odontólogos asociados simulan su resultado estético antes de comenzar cualquier trabajo, lo que garantiza una forma, alineación y combinación de colores óptimas que complementan su estructura facial. Utilizamos únicamente implantes dentales premium certificados de líderes mundiales (como Straumann y Nobel Biocare) con garantías de por vida. Todos los procedimientos son realizados por cirujanos dentistas certificados con amplia experiencia en casos de restauración internacionales. Aseguramos vacaciones dentales sin estrés al brindar arreglos todo incluido: traslados VIP, hoteles y traductores.',
      it: 'Meva Clinic facilita procedure di riabilitazione dentale d\'élite a Istanbul, in Turchia, collaborando esclusivamente con cliniche dentali avanzate e laboratori digitali interni. Offriamo servizi completi tra cui Hollywood Smile, corone in zirconio fresate con tecnologia CAD/CAM, faccette in ceramica biocompatibile e soluzioni implantari avanzate come la chirurgia computer-guidata All-on-4 e All-on-6. Utilizzando scanner intraorali 3D e il software Digital Smile Design (DSD), i nostri odontoiatri partner simulano il risultato estetico prima di iniziare il trattamento, garantendo forma, allineamento e colore perfetti per il vostro viso. Utilizziamo solo impianti certificati dei leader mondiali (Straumann e Nobel Biocare) con garanzia a vita. Tutte le procedure sono eseguite da chirurghi implantologi accreditati. Garantiamo un viaggio sereno con pacchetti all-inclusive: auto VIP privata, sistemazione in hotel di lusso e interprete dedicato.',
      fr: 'Meva Clinic propose des soins de restauration dentaire d\'élite à Istanbul, en Turquie, en collaborant avec des cliniques dentaires équipées de laboratoires numériques CAD/CAM. Nous proposons des services complets, notamment la conception sur mesure de Hollywood Smile, des couronnes en zirconium, des facettes en porcelaine et des implants All-on-4 ou All-on-6. Grâce aux scanners intraoraux 3D et aux logiciels Digital Smile Design, nos praticiens modélisent votre sourire avant le début des soins. Nous utilisons exclusivement des implants haut de gamme garantis à vie (comme Straumann ou Nobel Biocare), posés par des chirurgiens dentistes certifiés. Nous organisons vos soins tout compris : transports VIP, hébergement de luxe et traducteur dédié.',
      ru: 'Meva Clinic предоставляет стоматологические услуги элитного уровня в Стамбуле, Турция, сотрудничая исключительно с современными стоматологическими клиниками и собственными цифровыми лабораториями. Мы предлагаем комплекс услуг, включая индивидуальный дизайн улыбки Hollywood Smile, изготовление циркониевых коронок на станках CAD/CAM, биосовместимые виниры и передовую имплантацию All-on-4 и All-on-6 по навигационным шаблонам. Используя 3D-сканеры и программы Digital Smile Design (DSD), наши ортопеды моделируют улыбку до начала лечения, подбирая форму и цвет зубов под индивидуальные пропорции лица. Мы устанавливаем только сертифицированные имплантаты от ведущих брендов (таких как Straumann и Nobel Biocare) с пожизненной гарантией. Все процедуры выполняются опытными сертифицированными хирургами-стоматологами. Мы гарантируем комфорт благодаря программам «все включено»: VIP-трансфер, проживание в отелях 5 звезд и личный переводчик.'
    },
    suitabilityTitle: {
      en: 'Dental Candidate Evaluation',
      ro: 'Evaluarea Candidaților pentru Tratamente Dentare',
      es: 'Evaluación de Candidatos Dentales',
      it: 'Valutazione del Candidato ai Trattamenti Dentari',
      fr: 'Évaluation des Candidats aux Soins Dentaires',
      de: 'Zahnmedizinische Kandidatenbewertung',
      ru: 'Оценка кандидатов на стоматологическое лечение'
    },
    suitabilityDesc: {
      en: 'Healthy bone structure and gum health are key prerequisites for successful and durable dental implants and veneers.',
      ro: 'Structura osoasă sănătoasă și sănătatea gingiilor sunt premise esențiale pentru succesul și durabilitatea implanturilor și fațetelor.',
      es: 'La estructura ósea sana y la salud de las encías son requisitos previos clave para el éxito y la durabilidad de los implantes y carillas dentales.',
      it: 'Una struttura ossea sana e la salute gengivale sono prerequisiti fondamentali per il successo a lungo termine di impianti e faccette.',
      fr: 'Une structure osseuse saine et des gencives saines sont essentielles pour la réussite des implants et des facettes.',
      de: 'Eine gesunde Knochenstruktur und Zahnfleischgesundheit sind wichtige Voraussetzungen für erfolgreiche und dauerhafte Zahnimplantate und Veneers.',
      ru: 'Здоровая костная структура и здоровые десны — ключевые условия для успешной установки имплантатов и коронок.'
    },
    suitabilityPoints: {
      en: [
        'Adequate jawbone density to anchor dental implants (bone grafting available if bone loss is present).',
        'Absence of active periodontal disease (severe gum disease must be treated prior to cosmetic work).',
        'Desire to correct missing teeth, severe discolouration, alignment issues, or structural tooth decay.',
        'Good general health status suitable for outpatient dental procedures.'
      ],
      ro: [
        'Densitate osoasă maxilară adecvată pentru ancorarea implanturilor (adiția de os este disponibilă dacă există pierderi).',
        'Absența bolilor parodontale active (afecțiunile gingivale severe trebuie tratate înainte de lucrările cosmetice).',
        'Dorința de a corecta dinții lipsă, decolorarea severă, problemele de aliniere sau cariile structurale.',
        'Stare generală de sănătate bună, potrivită pentru proceduri dentare ambulatorii.'
      ],
      de: [
        'Ausreichende Kieferknochendichte zur Verankerung von Implantaten (Knochenaufbau bei Knochenverlust möglich).',
        'Keine aktive Parodontalerkrankung (schwere Zahnfleischerkrankungen müssen vor kosmetischen Arbeiten behandelt werden).',
        'Wunsch nach Korrektur fehlender Zähne, starker Verfärbungen, Fehlstellungen oder struktureller Karies.',
        'Guter allgemeiner Gesundheitszustand, geeignet für ambulante zahnärztliche Eingriffe.'
      ],
      es: [
        'Densidad ósea maxilar adecuada para anclar los implantes dentales (injerto óseo disponible si hay pérdida ósea).',
        'Ausencia de enfermedad periodontal activa (la enfermedad de las encías grave debe tratarse antes del trabajo estético).',
        'Deseo de corregir la pérdida de dientes, la decoloración severa, los problemas de alineación o las caries estructurales.',
        'Buen estado de salud general adecuado para procedimientos dentales ambulatorios.'
      ],
      it: [
        'Densità dell\'osso mascellare o mandibolare adeguata (possibilità di innesto osseo in caso di atrofia).',
        'Assenza di parodontite attiva (le malattie gengivali devono essere curate prima del lavoro estetico).',
        'Desiderio di risolvere problemi di edentulia, discromie gravi, disallineamenti o lesioni strutturali dei denti.',
        'Buona salute generale compatibile con le cure dentistiche ambulatoriali.'
      ],
      fr: [
        'Densité osseuse suffisante pour ancrer les implants (greffe osseuse possible en cas de perte osseuse).',
        'Absence de maladie parodontale active (les gencives doivent être saines avant toute pose de facettes).',
        'Souhait de corriger des dents manquantes, des décolorations sévères, des défauts d\'alignement ou des caries.',
        'Bon état de santé général adapté aux soins dentaires ambulatoires.'
      ],
      ru: [
        'Достаточный объем челюстной кости для фиксации имплантатов (при необходимости проводится костная пластика).',
        'Отсутствие активного пародонтита (заболевания десен должны быть пролечены до эстетических процедур).',
        'Показания к восстановлению отсутствующих зубов, исправлению прикуса, сильного потемнения эмали или разрушения зубов.',
        'Хорошее общее состояние здоровья, подходящее для амбулаторных стоматологических вмешательств.'
      ]
    },
    faq: {
      en: [
        { q: 'How many days do I need to stay in Istanbul for a Hollywood Smile?', a: 'A complete Hollywood Smile makeover takes between 5 to 7 days, requiring only 2 to 3 clinic appointments.' },
        { q: 'Are zirconium crowns biocompatible?', a: 'Yes, zirconium dioxide is 100% biocompatible, metal-free, and does not cause allergic reactions or gray lines along the gumline.' }
      ],
      ro: [
        { q: 'Câte zile trebuie să stau în Istanbul pentru un Hollywood Smile?', a: 'O transformare completă Hollywood Smile durează între 5 și 7 zile, necesitând doar 2 până la 3 programări la clinică.' },
        { q: 'Sunt coroanele de zirconiu biocompatibile?', a: 'Da, dioxidul de zirconiu este 100% biocompatibil, nu conține metal și nu provoacă reacții alergice sau linii cenușii la nivelul gingiei.' }
      ],
      de: [
        { q: 'Wie viele Tage muss ich für ein Hollywood-Lächeln in Istanbul bleiben?', a: 'Ein komplettes Hollywood-Lächeln-Makeover dauert zwischen 5 und 7 Tagen und erfordert nur 2 bis 3 Zahnarzttermine.' },
        { q: 'Sind Zirkoniumkronen biokompatibel?', a: 'Ja, Zirkoniumdioxid ist zu 100 % biokompatibel, metallfrei und verursacht keine allergischen Reaktionen oder grauen Ränder am Zahnfleischsaum.' }
      ],
      es: [
        { q: '¿Cuántos días debo permanecer en Estambul para un Hollywood Smile?', a: 'Un cambio de imagen Hollywood Smile completo toma entre 5 y 7 días, requiriendo solo de 2 a 3 citas en la clínica.' },
        { q: '¿Son biocompatibles las coronas de circonio?', a: 'Sí, el dióxido de circonio es 100% biocompatible, libre de metales y no causa reacciones alérgicas ni líneas grises en las encías.' }
      ],
      it: [
        { q: 'Quanti giorni devo rimanere a Istanbul per un Hollywood Smile?', a: 'Il trattamento Hollywood Smile richiede da 5 a 7 giorni, con solo 2 o 3 appuntamenti in clinica.' },
        { q: 'Le corone in zirconio sono biocompatibili?', a: 'Sì, l\'ossido di zirconio è al 100% biocompatibile, privo di metalli e non provoca reazioni allergiche o aloni scuri vicino alla gengiva.' }
      ],
      fr: [
        { q: 'Combien de jours dois-je rester à Istanbul pour un Hollywood Smile ?', a: 'Un Hollywood Smile complet nécessite 5 à 7 jours sur place, avec seulement 2 ou 3 rendez-vous à la clinique.' },
        { q: 'Les couronnes en zirconium sont-elles biocompatibles ?', a: 'Oui, le dioxyde de zirconium est 100 % biocompatible, sans métal et ne provoque pas d\'allergies ni de liseré gris sur la gencive.' }
      ],
      ru: [
        { q: 'Сколько дней нужно пробыть в Стамбуле для установки Hollywood Smile?', a: 'Полная эстетическая реставрация Hollywood Smile занимает от 5 до 7 дней и требует всего 2–3 посещения клиники.' },
        { q: 'Биосовместимы ли циркониевые коронки?', a: 'Да, диоксид циркония на 100% биосовместим, не содержит металлов, не вызывает аллергических реакций и потемнения края десны.' }
      ]
    }
  },
  plastic: {
    title: {
      en: 'Premium Plastic & Reconstructive Surgery in Turkey',
      ro: 'Chirurgie Plastică și Reconstructivă Premium în Turcia',
      es: 'Cirugía Plástica y Reconstructiva Premium en Turquía',
      it: 'Chirurgia Plastica e Ricostruttiva Premium in Turchia',
      fr: 'Chirurgie Plastique & Reconstructrice Premium en Turquie',
      de: 'Erstklassige plastische & rekonstruktive Chirurgie in der Türkei',
      ru: 'Премиальная пластическая и реконструктивная хирургия в Турции'
    },
    subtitle: {
      en: 'Refining aesthetic proportions using Piezo ultrasonic rhinoplasty, Deep Plane facelift, and high-safety body contouring.',
      ro: 'Rafinarea proporțiilor estetice utilizând rinoplastia ultrasonică Piezo, facelift Deep Plane și remodelare corporală de înaltă siguranță.',
      es: 'Refinamiento de las proporciones estéticas mediante rinoplastia ultrasónica Piezo, estiramiento facial Deep Plane y contorno corporal de alta seguridad.',
      it: 'Raffina le proporzioni estetiche utilizzando la rinoplastica ultrasonica Piezo, il lifting Deep Plane e il rimodellamento corporeo sicuro.',
      fr: 'Raffiner les proportions esthétiques grâce à la rhinoplastie ultrasonique Piezo, au lifting Deep Plane et au remodelage corporel.',
      de: 'Verfeinerung ästhetischer Proportionen mittels Piezo-Ultraschall-Rhinoplastik, Deep-Plane-Facelift und hochsicherer Körperformung.',
      ru: 'Эстетическая коррекция пропорций с использованием ультразвуковой пьезо-ринопластики, подтяжки лица Deep Plane и безопасного контурирования тела.'
    },
    description: {
      en: 'Meva Clinic facilitates elite plastic and reconstructive surgery services in Istanbul, Turkey, cooperating exclusively with advanced JCI-accredited medical centers. Our network specializes in comprehensive face, breast, and body contouring procedures including Piezo Rhinoplasty, Deep Plane Facelift, Breast Augmentation, Vaser Liposuction, Abdominoplasty (Tummy Tuck), Brazilian Butt Lift (BBL), and Mommy Makeover packages. By utilizing advanced ultrasonic technologies such as Piezo Rhinoplasty, our surgeons shape nasal bones without damaging delicate blood vessels or surrounding soft tissues. This results in minimal post-operative bruising, reduced swelling, and a significantly shorter downtime. Our partner surgeons are recognized board-certified board members who strictly follow safety protocols. All procedures are conducted under general anesthesia managed by experienced anesthesiologists. We combine high-end surgical precision with top-tier hospitality: VIP airport transfers in luxury Mercedes-Benz vehicles, luxury 5-star Bosphorus accommodations, and personal, bilingual patient hosts who handle clinical follow-up and coordinate every detail of your care.',
      ro: 'Meva Clinic facilitează servicii de chirurgie plastică și reconstructivă de elită în Istanbul, colaborând exclusiv cu centre medicale acreditate JCI. Rețeaua noastră este specializată în proceduri complete de conturare a feței, sânilor și corpului, inclusiv Rinoplastie Piezo, Facelift Deep Plane, Mărire de Sâni, Liposucție Vaser, Abdominoplastie, Brazilian Butt Lift (BBL) și pachete Mommy Makeover. Prin utilizarea tehnologiilor avansate cu ultrasunete, cum ar fi Rinoplastia Piezo, chirurgii noștri modelează oasele nazale fără a deteriora vasele de sânge delicate sau țesuturile moi. Acest lucru are ca rezultat vânătăi minime și o recuperare mult mai rapidă. Chirurgii noștri parteneri sunt medici certificați care urmează cu strictețe protocoalele europene de siguranță. Oferim servicii premium: transferuri private VIP cu vehicule Mercedes-Benz, cazare la hoteluri de 5 stele pe Bosfor și asistenți medicali dedicați.',
      de: 'Die Meva Clinic vermittelt erstklassige plastische und rekonstruktive Chirurgie in Istanbul, Türkei, und arbeitet ausschließlich mit hochentwickelten, JCI-akkreditierten medizinischen Zentren zusammen. Unser Netzwerk ist auf umfassende Gesichts-, Brust- und Körperformungsverfahren spezialisiert, darunter Piezo-Rhinoplastik, Deep-Plane-Facelift, Brustvergrößerung, Vaser-Liposuktion, Abdominoplastik (Bauchdeckenstraffung), Brazilian Butt Lift (BBL) und Mommy-Makeover-Pakete. Durch den Einsatz fortschrittlicher Ultraschalltechnologie bei der Piezo-Rhinoplastik formen unsere Chirurgen die Nasenknochen, ohne die empfindlichen Blutgefäße oder das umliegende Weichgewebe zu beschädigen. Dies führt zu minimalen postoperativen Blutergüssen, reduzierten Schwellungen und einer deutlich kürzeren Ausfallzeit. Alle Eingriffe werden unter Vollnarkose durchgeführt, die von erfahrenen Anästhesisten überwacht wird. Wir verbinden chirurgische Präzision mit erstklassiger Gastfreundschaft: VIP-Flughafentransfers, Luxusunterkünfte am Bosporus und zweisprachige Patientenbetreuer.',
      es: 'Meva Clinic facilita servicios de cirugía plástica y reconstructiva de élite en Estambul, Turquía, cooperando exclusivamente con centros médicos avanzados acreditados por la JCI. Nuestra red se especializa en procedimientos integrales de contorno facial, mamario y corporal, que incluyen rinoplastia piezoeléctrica, estiramiento facial Deep Plane, aumento de senos, liposucción Vaser, abdominoplastia (reestiramiento de abdomen), levantamiento de glúteos brasileño (BBL) y paquetes de Mommy Makeover. Al utilizar tecnologías ultrasónicas avanzadas, nuestros cirujanos moldean los huesos nasales sin dañar los vasos sanguíneos delicados ni los tejidos blandos circundantes, lo que resulta en hematomas posoperatorios mínimos y un tiempo de inactividad más corto. Brindamos traslados VIP, hoteles de 5 estrellas y traductores.',
      it: 'Meva Clinic facilita servizi di chirurgia plastica e ricostruttiva d\'élite a Istanbul, in Turchia, collaborando esclusivamente con centri medici accreditati JCI. La nostra rete è specializzata in interventi per il viso, il seno e il corpo, tra cui la rinoplastica piezoellettrica, il lifting Deep Plane, la mastoplastica additiva, la liposuzione Vaser, l\'addominoplastica, il BBL e i pacchetti Mommy Makeover. Grazie alla tecnologia ultrasonica della rinoplastica piezoelettrica, i nostri chirurghi modellano le ossa nasali senza danneggiare i vasi sanguigni e i tessuti molli, minimizzando lividi e gonfiore per un recupero molto rapido. Gli interventi sono eseguiti in anestesia generale da chirurghi plastici accreditati. Offriamo transfer VIP Mercedes-Benz, sistemazioni a 5 stelle sul Bosforo e interprete dedicato.',
      fr: 'Meva Clinic propose des soins de chirurgie plastique et reconstructrice d\'élite à Istanbul, en Turquie, en collaborant exclusivement avec des centres accrédités JCI. Notre réseau est spécialisé dans le remodelage du visage, des seins et de la silhouette (Rhinoplastie Piézo, lifting Deep Plane, augmentation mammaire, liposuccion Vaser, abdominoplastie, BBL et Mommy Makeover). Grâce aux ultrasons de la Rhinoplastie Piézo, nos chirurgiens sculptent les os du nez sans léser les tissus mous ou les vaisseaux, réduisant le gonflement et le temps de récupération. Toutes les chirurgies sont réalisées sous anesthésie générale. Nous fournissons des navettes VIP Mercedes-Benz, un hôtel de luxe et un traducteur.',
      ru: 'Meva Clinic предоставляет услуги пластической и реконструктивной хирургии элитного уровня в Стамбуле, Турция, сотрудничая исключительно с современными медицинскими центрами, аккредитованными JCI. Наша сеть специализируется на операциях по коррекции лица, груди и контуров тела, включая пьезо-ринопластику, подтяжку лица Deep Plane, увеличение груди, Vaser-липосакцию, абдоминопластику, бразильскую подтяжку ягодиц (BBL) и комплексные программы Mommy Makeover. Использование ультразвукового аппарата Piezo позволяет хирургам корректировать форму костей носа, не травмируя кровеносные сосуды и мягкие ткани, что сводит к минимуму послеоперационные отеки и синяки. Мы предлагаем VIP-трансфер, проживание в роскошных отелях на берегу Босфора и личного переводчика.'
    },
    suitabilityTitle: {
      en: 'Plastic Surgery Candidate Guide',
      ro: 'Ghidul Candidatului pentru Chirurgie Plastică',
      es: 'Guía de Candidato para Cirugía Plástica',
      it: 'Guida al Candidato alla Chirurgia Plastica',
      fr: 'Gide du Candidat à la Chirurgie Plastique',
      de: 'Leitfaden für plastisch-chirurgische Kandidaten',
      ru: 'Руководство для кандидатов на пластическую операцию'
    },
    suitabilityDesc: {
      en: 'Surgical readiness requires good general health, a stable body weight, and non-smoking status to ensure optimal wound healing.',
      ro: 'Pregătirea chirurgicală necesită o stare generală de sănătate bună, greutate stabilă și nefumător pentru a asigura vindecarea optimă.',
      es: 'La preparación quirúrgica requiere buena salud general, un peso corporal estable y no fumar para garantizar una cicatrización óptima de las heridas.',
      it: 'La preparazione all\'intervento richiede una buona salute generale, un peso corporeo stabile e l\'astensione dal fumo per garantire una corretta guarigione delle ferite.',
      fr: 'Une bonne santé générale, un poids stable et l\'absence de tabagisme sont requis pour garantir une cicatrisation optimale.',
      de: 'Die OP-Bereitschaft erfordert eine gute allgemeine Gesundheit, ein stabiles Körpergewicht und Rauchfreiheit, um eine optimale Wundheilung zu gewährleisten.',
      ru: 'Для проведения операции требуется хорошее общее состояние здоровья, стабильный вес и отказ от курения для обеспечения правильного заживления.'
    },
    suitabilityPoints: {
      en: [
        'Close to ideal body weight (BMI below 30 is highly recommended for body contouring and abdominoplasty).',
        'Non-smoker or willing to cease smoking at least 3-4 weeks prior to and after the surgical intervention.',
        'No active severe medical conditions like uncontrolled diabetes or bleeding disorders.',
        'Understanding that surgery refines proportions, with realistic post-operative cosmetic expectations.'
      ],
      ro: [
        'Aproape de greutatea corporală ideală (IMC sub 30 este recomandat pentru remodelare corporală și abdominoplastie).',
        'Nefumător sau dispus să înceteze fumatul cu cel puțin 3-4 săptămâni înainte și după intervenție.',
        'Fără afecțiuni medicale grave active, cum ar fi diabetul necontrolat sau tulburările de coagulare.',
        'Înțelegerea faptului că chirurgia îmbunătățește proporțiile, având așteptări cosmetice realiste.'
      ],
      de: [
        'Nahe am Idealgewicht (BMI unter 30 wird für Körperformung und Abdominoplastik dringend empfohlen).',
        'Nichtraucher oder bereit, das Rauchen mindestens 3-4 Wochen vor und nach dem Eingriff einzustellen.',
        'Keine aktiven schweren Erkrankungen wie unkontrollierter Diabetes oder Blutungsstörungen.',
        'Verständnis dafür, dass der Eingriff Proportionen verfeinert, verbunden mit realistischen Erwartungen.'
      ],
      es: [
        'Cerca del peso corporal ideal (se recomienda un IMC inferior a 30 para el contorno corporal y la abdominoplastia).',
        'No fumador o dispuesto a dejar de fumar al menos 3 o 4 semanas antes y después de la intervención quirúrgica.',
        'Sin condiciones médicas graves activas como diabetes no controlada o trastornos hemorrágicos.',
        'Comprensión de que la cirugía mejora las proporciones, con expectativas estéticas realistes.'
      ],
      it: [
        'Peso corporeo vicino a quello ideale (IMC inferiore a 30 caldamente consigliato per liposuzione e addominoplastica).',
        'Non fumatore o disposto a sospendere il fumo almeno 3-4 settimane prima e dopo l\'intervento.',
        'Assenza di patologie gravi non controllate (es. diabete non controllato o disturbi della coagulazione).',
        'Consapevolezza che l\'intervento migliora i contorni corporei, con aspettative estetiche realistiche.'
      ],
      fr: [
        'Proche du poids de forme (un IMC inférieur a 30 est fortement recommandé pour l\'abdominoplastie et le remodelage).',
        'Non-fumeur ou prêt à arrêter le tabac au moins 3-4 semaines avant et après la chirurgie.',
        'Absence de pathologies lourdes non contrôlées (diabète instable, troubles de la coagulation).',
        'Compréhension du fait que la chirurgie harmonise la silhouette, avec des attentes réalistes.'
      ],
      ru: [
        'Вес, близкий к идеальному (ИМТ ниже 30 настоятельно рекомендуется для липосакции и абдоминопластики).',
        'Отказ от курения как минимум за 3-4 недели до и после хирургического вмешательства.',
        'Отсутствие тяжелых хронических заболеваний, таких как неконтролируемый диабет или нарушения свертываемости крови.',
        'Понимание того, что операция улучшает пропорции, и наличие реалистичных ожиданий от результата.'
      ]
    },
    faq: {
      en: [
        { q: 'How long should I stay in Turkey after a Tummy Tuck?', a: 'We require a minimum stay of 7 to 8 days in Istanbul. Suture removal and final surgeon checks are completed before your return flight.' },
        { q: 'What is the recovery timeline for a rhinoplasty?', a: 'Initial swelling and bruising resolve in 10-14 days. The nasal cast is removed on day 7. The final shape takes 6-12 months to fully mature.' }
      ],
      ro: [
        { q: 'Cât timp trebuie să stau în Turcia după o abdominoplastie?', a: 'Solicităm o ședere de minimum 7 până la 8 zile în Istanbul. Îndepărtarea firelor și controalele chirurgicale finale sunt finalizate înainte de zbor.' },
        { q: 'Care este perioada de recuperare pentru o rinoplastie?', a: 'Umflăturile și vânătăile inițiale dispar în 10-14 zile. Atela nazală este îndepărtată în ziua 7. Forma finală se obține în 6-12 luni.' }
      ],
      de: [
        { q: 'Wie lange sollte ich nach einer Bauchdeckenstraffung in der Türkei bleiben?', a: 'Wir verlangen einen Mindestaufenthalt von 7 bis 8 Tagen in Istanbul. Das Ziehen der Fäden und die abschließende Kontrolle erfolgen vor Ihrem Rückflug.' },
        { q: 'Wie lange dauert die Genesung nach einer Nasenkorrektur?', a: 'Anfängliche Schwellungen und Blutergüsse klingen in 10-14 Tagen ab. Die Nasenschienung wird am 7. Tag entfernt. Die endgültige Form zeigt sich nach 6-12 Monaten.' }
      ],
      es: [
        { q: '¿Cuánto tiempo debo permanecer en Turquía después de una abdominoplastia?', a: 'Requerimos una estancia mínima de 7 a 8 días en Estambul. La extracción de puntos y los controles finales del cirujano se completan antes de su vuelo de regreso.' },
        { q: '¿Cuál es el tiempo de recuperación para una rinoplastia?', a: 'La inflamación y los hematomas iniciales desaparecen en 10-14 días. La férula nasal se retira al día 7. La forma final tarda entre 6 y 12 meses en madurar.' }
      ],
      it: [
        { q: 'Quanto tempo devo rimanere a Istanbul dopo un\'addominoplastica?', a: 'Richiediamo un soggiorno minimo di 7-8 giorni a Istanbul. La rimozione dei punti e i controlli finali del chirurgo si effettuano prima del volo.' },
        { q: 'Quali sono i tempi di recupero per la rinoplastica?', a: 'Il gonfiore e i lividi iniziali si risolvono in 10-14 giorni. Il gesso nasale viene rimosso al settimo giorno. Il profilo definitivo si stabilizza in 6-12 mesi.' }
      ],
      fr: [
        { q: 'Combien de temps dois-je rester en Turquie après une abdominoplastie ?', a: 'Nous exigeons un séjour de 7 à 8 jours à Istanbul. Le retrait des sutures et les contrôles postopératoires sont effectués avant votre départ.' },
        { q: 'Quel est le temps de convalescence pour une rhinoplastie ?', a: 'Les ecchymoses et le gonflement s\'estompent en 10 à 14 jours. L\'attelle est retirée le 7ème jour. Le nez prend sa forme définitive sous 6 à 12 mois.' }
      ],
      ru: [
        { q: 'Как долго нужно оставаться в Турции после абдоминопластики?', a: 'Требуется минимальное пребывание в Стамбуле в течение 7–8 дней. Снятие швов и финальный осмотр проводятся до обратного вылета.' },
        { q: 'Каковы сроки восстановления после ринопластики?', a: 'Первичные отеки и синяки проходят за 10–14 дней. Гипс снимается на 7-й день. Окончательная форма носа формируется в течение 6–12 месяцев.' }
      ]
    }
  },
  andrology: {
    title: {
      en: 'Advanced Male Aesthetic & Urological Solutions in Turkey',
      ro: 'Soluții Urologice și Estetice Masculine Avansate în Turcia',
      es: 'Soluciones Urológicas y Estéticas Masculinas Avanzadas en Turquía',
      it: 'Soluzioni Urologiche ed Estetiche Maschili Avanzate in Turchia',
      fr: 'Solutions Esthétiques et Urologiques Masculines en Turquie',
      de: 'Fortschrittliche ästhetische & urologische Lösungen für den Mann in der Türkei',
      ru: 'Современные мужские эстетические и урологические решения в Турции'
    },
    subtitle: {
      en: 'Specialized andrological procedures conducted by dynamic, board-certified reconstructive urologists.',
      ro: 'Proceduri andrologice specializate conduse de urologi reconstructori dinamici, certificați.',
      es: 'Procedimientos andrológicos especializados realizados por urólogos reconstructores certificados.',
      it: 'Procedure andrologiche specializzate eseguite da urologi ricostruttori accreditati.',
      fr: 'Procédures andrologiques spécialisées menées par des urologues reconstructeurs certifiés.',
      de: 'Spezialisierte andrologische Eingriffe, durchgeführt von staatlich geprüften rekonstruktiven Urologen.',
      ru: 'Специализированные андрологические процедуры, проводимые опытными сертифицированными урологами-реконструкторами.'
    },
    description: {
      en: 'Meva Clinic facilitates highly specialized male andrological and functional surgeries in Istanbul, Turkey, cooperating exclusively with JCI-accredited clinics and board-certified reconstructive urological surgeons. We cover specialized procedures including Ligamentolysis (surgical lengthening), Autologous Fat Grafting, Dermal Graft implantation, Hyaluronic Acid filler contouring, and advanced erectile dysfunction treatments (ESWT Shockwave and Penile Implants). Since these procedures require advanced anatomical knowledge of male reproductive systems, all surgeries are planned and executed exclusively by high-volume urological professors. We emphasize absolute medical safety and total patient discretion. Under our medical confidentiality charter, individual surgeon portfolios and sensitive clinical cases are kept confidential and shared only during private consultations. We handle all logistics seamlessly: private VIP Mercedes airport pickups, premium Bosphorus hotel reservations, and personal medical consultants who offer support in your native language.',
      ro: 'Meva Clinic facilitează intervenții chirurgicale andrologice și funcționale masculine înalt specializate în Istanbul, colaborând exclusiv cu clinici acreditate JCI și chirurgi urologi reconstructori certificați. Acoperim proceduri specializate, inclusiv Ligamentoliză (lungire chirurgicală), Lipofilling Autolog (grefă de grăsime), implant de grefă dermică, injectări cu acid hialuronic și tratamente avansate pentru disfuncția erectilă (ESWT Shockwave și implanturi peniene). Deoarece aceste proceduri necesită cunoștințe anatomice avansate, toate operațiile sunt planificate și executate exclusiv de profesori urologi cu experiență vastă. Punem accent pe siguranța medicală absolută și pe discreția totală a pacientului. Toate detaliile călătoriei sunt asigurate prin pachete all-inclusive: transferuri private VIP, hoteluri de lux pe Bosfor și asistenți medicali dedicați în limba maternă.',
      de: 'Die Meva Clinic vermittelt hochspezialisierte andrologische und funktionelle Eingriffe beim Mann in Istanbul, Türkei, und arbeitet ausschließlich mit JCI-akkreditierten Kliniken und staatlich geprüften rekonstruktiven Urologen zusammen. Wir bieten spezialisierte Verfahren wie Ligamentolyse (operative Verlängerung), autologen Fetttransfer, dermale Transplantate, Hyaluronsäure-Filler-Konturierung sowie fortschrittliche Behandlungen bei erektiler Dysfunktion (ESWT-Stoßwelle und Schwellkörper-Implantate). Da diese Eingriffe fortgeschrittene anatomische Kenntnisse der männlichen Fortpflanzungsorgane erfordern, werden alle Operationen ausschließlich von erfahrenen Urologie-Professoren geplant und durchgeführt. Wir legen größten Wert auf absolute medizinische Sicherheit und Diskretion. Wir organisieren alle Logistikleistungen nahtlos: private VIP-Mercedes-Transfers, Premium-Hotelreservierungen am Bosporus und persönliche medizinische Berater in Ihrer Muttersprache.',
      es: 'Meva Clinic facilita cirugías andrológicas y funcionales masculinas altamente especializadas en Estambul, Turquía, cooperando exclusivamente con clínicas acreditadas por la JCI y cirujanos urólogos reconstructores certificados. Cubrimos procedimientos especializados que incluyen ligamentólisis (alargamiento quirúrgico), injerto de grasa autólogo, implantación de injerto dérmico, contorneado con relleno de ácido hialurónico y tratamientos avanzados para la disfunción eréctil. Dado que estos procedimientos requieren un conocimiento anatómico avanzado, todas las cirugías son planificadas y ejecutadas exclusivamente por profesores de urología. Manejamos toda la logística: traslados VIP, hoteles de 5 estrellas y consultores médicos personales.',
      it: 'Meva Clinic facilita interventi andrologici e funzionali maschili altamente specializzati a Istanbul, in Turchia, collaborando esclusivamente con cliniche accreditate JCI e chirurghi urologi ricostruttori accreditati. Copriamo procedure specializzate tra cui la ligamentolisi (allungamento chirurgico), il lipofilling autologo, l\'impianto di derma omologo, il rimodellamento con acido ialuronico e trattamenti avanzati per la disfunzione erettile (onde d\'urto ESWT e protesi peniene). Poiché queste procedure richiedono una profonda conoscenza anatomica, tutti gli interventi sono eseguiti da professori di urologia accreditati. Garantiamo massima riservatezza e logistica curata: transfer VIP, hotel a 5 stelle e interprete dedicato.',
      fr: 'Meva Clinic propose des chirurgies andrologiques et urologiques masculines hautement spécialisées à Istanbul, en Turquie, en collaborant avec des urologues reconstructeurs certifiés dans des cliniques accréditées JCI. Nous réalisons des ligamentolyses (allongement chirurgical), des transferts de graisse autologue, des implants de greffon dermique, des injections d\'acide hyaluronique et des traitements de la dysfonction érectile (ondes de choc ESWT et implants péniens). Ces interventions délicates sont planifiées et réalisées exclusivement par des professeurs d\'urologie. Nous garantissons une discrétion absolue et gérons la logistique : navettes VIP, hôtel de luxe et traducteur.',
      ru: 'Meva Clinic организует высокоспециализированные мужские андрологические и функциональные операции в Стамбуле, Турция, сотрудничая исключительно с клиниками, аккредитованными JCI, и сертифицированными урологами-реконструкторами. Мы предлагаем такие процедуры, как лигаментотомия (хирургическое удлинение), липофилинг, имплантация дермального лоскута, контурная пластика филлерами с гиалуроновой кислотой и современные методы лечения эректильной дисфункции (ударно-волновая терапия ESWT и фаллопротезирование). Учитывая сложность данных процедур, все операции проводятся профессорами урологии. Мы гарантируем полную конфиденциальность, предоставляя VIP-трансфер, отели 5 звезд и личного переводчика.'
    },
    suitabilityTitle: {
      en: 'Andrology Candidate assessment',
      ro: 'Evaluarea Candidaților pentru Andrologie',
      es: 'Evaluación de Candidatos de Andrología',
      it: 'Valutazione del Candidato in Andrologia',
      fr: 'Évaluation des Candidats en Andrologie',
      de: 'Andrologische Kandidatenbewertung',
      ru: 'Оценка кандидатов на андрологическое лечение'
    },
    suitabilityDesc: {
      en: 'Discretion, urological health clearance, and realistic expectations are paramount prior to executing male enhancement procedures.',
      ro: 'Discreția, avizul urologic de sănătate și așteptările realiste sunt esențiale înainte de efectuarea procedurilor de andrologie.',
      es: 'La discreción, la autorización de salud urológica y las expectativas realistes son primordiales antes de realizar procedimientos de andrología.',
      it: 'Discrezione, idoneità urologica e aspettative realistiche sono fondamentali prima di procedere a interventi di andrologia.',
      fr: 'La discrétion, un bilan urologique favorable et des attentes réalistes sont requis avant tout soin andrologique.',
      de: 'Diskretion, urologische Unbedenklichkeit und realistische Erwartungen sind vor der Durchführung andrologischer Eingriffe von größter Bedeutung.',
      ru: 'Конфиденциальность, отсутствие урологических противопоказаний и реалистичные ожидания крайне важны перед проведением андрологических процедур.'
    },
    suitabilityPoints: {
      en: [
        'Absence of active, untreated genitourinary infections or severe local skin conditions.',
        'No anatomical deformities like active, severe Peyronie\'s disease (unless undergoing corrective surgery).',
        'Normal coagulation parameters and stable general health suitable for urological surgery.',
        'Realistic understanding of post-operative anatomy and required recovery restrictions (e.g. temporary abstinence).'
      ],
      ro: [
        'Absența infecțiilor genito-urinare active netratate sau a afecțiunilor severe ale pielii locale.',
        'Fără deformări anatomice precum boala Peyronie severă activă (cu excepția cazului în care se face corecție).',
        'Parametri normali de coagulare și stare de sănătate stabilă, potrivită pentru chirurgie urologică.',
        'Înțelegerea realistă a anatomiei postoperatorii și a restricțiilor de recuperare (de exemplu, abstinența temporară).'
      ],
      de: [
        'Keine aktiven, unbehandelten Urogenitalinfektionen oder schweren lokalen Hauterkrankungen.',
        'Keine anatomischen Deformationen wie aktive, schwere Peyronie-Krankheit (außer bei korrigierenden Eingriffen).',
        'Normale Gerinnungswerte und stabiler allgemeiner Gesundheitszustand, geeignet für urologische Operationen.',
        'Realistisches Verständnis der postoperativen Anatomie und der erforderlichen Einschränkungen (z. B. vorübergehende Abstinenz).'
      ],
      es: [
        'Ausencia de infecciones genitourinarias activas no tratadas o condiciones graves de la piel local.',
        'Sin deformidades anatómicas como la enfermedad de Peyronie grave activa (a menos que se someta a cirugía correctiva).',
        'Parámetros de coagulación normales y estado de salud general estable adecuado para cirugía urológica.',
        'Comprensión realista de la anatomía posoperatoria y las restricciones de recuperación requeridas (por ejemplo, abstinencia temporal).'
      ],
      it: [
        'Assenza di infezioni urogenitali attive non trattate o di gravi patologie cutanee locali.',
        'Assenza di gravi incurvamenti o deformità anatomiche come la malattia di Peyronie (salvo interventi correttivi).',
        'Parametri di coagulazione nella norma e buona salute generale compatibile con la chirurgia urologica.',
        'Consapevolezza dell\'anatomia post-operatoria e delle restrizioni post-intervento (es. astensione dai rapporti).'
      ],
      fr: [
        'Absence d\'infection génito-urinaire active ou de pathologie cutanée locale sévère.',
        'Absence de déformation anatomique comme une maladie de Peyronie active non stabilisée.',
        'Bilan de coagulation normal et état de santé compatible avec une chirurgie urologique.',
        'Compréhension réaliste de l\'anatomie postopératoire et des consignes de convalescence (ex: abstinence temporaire).'
      ],
      ru: [
        'Отсутствие активных нелеченых инфекций мочеполовой системы или тяжелых дерматологических заболеваний.',
        'Отсутствие выраженных анатомических деформаций, таких как болезнь Пейрони (если не проводится ее коррекция).',
        'Нормальные показатели свертываемости крови и стабильное общее состояние здоровья.',
        'Реалистичное понимание результатов и соблюдение послеоперационных ограничений (например, временный половой покой).'
      ]
    },
    faq: {
      en: [
        { q: 'Is ligamentolysis permanent?', a: 'Yes, surgical release of the suspensory ligament gains long-term length. However, post-op stretching protocols must be strictly followed to prevent ligament reattachment.' },
        { q: 'What is the required recovery period after andrological procedures?', a: 'Most patients return to light desk work in 3 to 5 days. However, sexual activities and heavy physical training must be avoided for 4 to 6 weeks.' }
      ],
      ro: [
        { q: 'Este ligamentoliza permanentă?', a: 'Da, secționarea chirurgicală a ligamentului suspensor oferă o lungire permanentă. Totuși, protocoalele de întindere postoperatorie trebuie urmate cu strictețe.' },
        { q: 'Care este perioada de recuperare după procedurile andrologice?', a: 'Majoritatea pacienților revin la munca de birou în 3-5 zile. Totuși, activitatea sexuală și efortul fizic intens trebuie evitate timp de 4-6 săptămâni.' }
      ],
      de: [
        { q: 'Ist eine Ligamentolyse dauerhaft?', a: 'Ja, die chirurgische Durchtrennung des Haltebandes führt zu einer dauerhaften Verlängerung. Allerdings müssen die postoperativen Dehnungsprotokolle strikt eingehalten werden, um ein Wiederanwachsen des Bandes zu verhindern.' },
        { q: 'Wie lange dauert die Genesung nach andrologischen Eingriffen?', a: 'Die meisten Patienten kehren nach 3 bis 5 Tagen zu leichter Bürotätigkeit zurück. Sexuelle Aktivitäten und schweres körperliches Training müssen jedoch für 4 bis 6 Wochen vermieden werden.' }
      ],
      es: [
        { q: '¿Es permanente la ligamentólisis?', a: 'Sí, la sección quirúrgica del ligamento suspensorio aumenta la longitud de forma permanente. Sin embargo, se deben seguir estrictamente los protocolos de estiramiento posoperatorios.' },
        { q: '¿Cuál es el período de recuperación requerido después de los procedimientos andrológicos?', a: 'La mayoría de los pacientes regresan al trabajo ligero de oficina en 3 a 5 días. Sin embargo, las actividades sexuales y el entrenamiento físico pesado deben evitarse durante 4 a 6 semanas.' }
      ],
      it: [
        { q: 'La ligamentolisi è un intervento permanente?', a: 'Sì, la sezione chirurgica del legamento sospensorio determina un allungamento permanente. È tuttavia necessario seguire i protocolli post-operatori per evitare che il legamento si risaldi.' },
        { q: 'Quali sono i tempi di recupero dopo interventi andrologici?', a: 'La maggior parte dei pazienti riprende il lavoro d\'ufficio in 3-5 giorni. L\'attività sessuale e gli sforzi fisici intensi vanno evitati per 4-6 settimane.' }
      ],
      fr: [
        { q: 'La ligamentolyse est-elle permanente ?', a: 'Oui, la section chirurgicale du ligament suspenseur offre un allongement permanent. Toutefois, des étirements postopératoires doivent être réalisés pour éviter les adhérences.' },
        { q: 'Quelle est la convalescence requise après un soin andrologique ?', a: 'La plupart des patients reprennent le travail de bureau en 3 à 5 jours. L\'activité sexuelle et le sport intensif doivent être évités pendant 4 à 6 semaines.' }
      ],
      ru: [
        { q: 'Является ли лигаментотомия постоянной?', a: 'Да, хирургическое рассечение поддерживающей связки дает пожизненное удлинение. Однако необходимо строго соблюдать послеоперационные протоколы натяжения для предотвращения повторного сращения.' },
        { q: 'Каков период восстановления после андрологических процедур?', a: 'Большинство пациентов возвращаются к легкой офисной работе через 3–5 дней. Половые контакты и тяжелые физические нагрузки исключаются на 4–6 недель.' }
      ]
    }
  },
  specialist: {
    title: {
      en: 'Advanced Specialist Medical Treatments in Istanbul',
      ro: 'Tratamente Medicale Avansate de Specialitate în Istanbul',
      es: 'Tratamientos Médicos Especializados Avanzados en Estambul',
      it: 'Trattamenti Medici Specialistici Avanzati a Istanbul',
      fr: 'Traitements Médicaux Spécialisés à Istanbul',
      de: 'Fortschrittliche medizinische Spezialbehandlungen in Istanbul',
      ru: 'Передовые специализированные медицинские услуги в Стамбуле'
    },
    subtitle: {
      en: 'Elite clinical solutions in oncology robotic radiosurgery, high-accuracy organ transplantation, and dynamic IVF therapies.',
      ro: 'Soluții clinice de elită în radiochirurgie robotică oncologică, transplant de organe de înaltă precizie și terapii FIV avansate.',
      es: 'Soluciones clínicas de élite en radiocirugía robótica oncológica, trasplantes de órganos de alta precisión y terapias de FIV avanzadas.',
      it: 'Soluzioni cliniche d\'élite in radiochirurgia oncologica robotica, trapianto di organi ad alta precisione e terapie IVF avanzate.',
      fr: 'Solutions cliniques d\'élite en radiochirurgie oncologique robotisée, transplantation d\'organes et thérapies de FIV.',
      de: 'Elite klinische Lösungen in der onkologischen robotergestützten Radiochirurgie, hochpräzise Organtransplantationen und fortschrittliche IVF-Therapien.',
      ru: 'Элитные клинические решения в роботизированной онкологической радиохирургии, трансплантации органов и передовых методах ЭКО.'
    },
    description: {
      en: 'Meva Clinic facilitates highly sophisticated medical treatments in Istanbul, Turkey, cooperating exclusively with dynamic, academic university hospitals and JCI-accredited clinical hubs. We cover complex specialist procedures including robotic oncology radiosurgery (CyberKnife S7, Gamma Knife Icon), liver and kidney transplants, IVF (In Vitro Fertilization) packages in Cyprus, smart chemotherapy, and ovarian PRP therapies. Our partner oncology departments utilize the CyberKnife S7 robotic system to deliver radiation with sub-millimeter (±0.44mm) precision, protecting healthy tissues and eliminating the need for surgical incisions or general anesthesia for complex tumors. For patients undergoing fertility treatments, we organize IVF packages in high-success Cyprus clinics, offering advanced pre-implantation genetic testing (NGS) and ovarian rejuvenation protocols. All transplants and complex medical oncology therapies are managed by recognized academic professors. We handle all concierge arrangements: VIP Mercedes-Benz transfers, luxury Bosphorus hotel stays, and personal medical translators who coordinate every clinical visit during your stay in Turkey.',
      ro: 'Meva Clinic facilitează tratamente medicale extrem de sofisticate în Istanbul, colaborând exclusiv cu spitale universitare academice și clinici acreditate JCI. Acoperim proceduri complexe de specialitate, inclusiv radiochirurgie oncologică robotică (CyberKnife S7, Gamma Knife Icon), transplant renal și hepatic, pachete de fertilizare in vitro (FIV) în Cipru, chimioterapie inteligentă și terapii PRP ovariene. Departamentele noastre de oncologie partenere utilizează sistemul CyberKnife S7 pentru a administra radiații cu o precizie sub-milimetrică (±0.44mm), protejând țesuturile sănătoase și eliminând necesitatea inciziilor chirurgicale. Pentru pacienții care urmează tratamente de fertilitate, organizăm pachete FIV în clinici cu rate mari de succes din Cipru, oferind testare genetică pre-implantațională avansată (NGS). Toate serviciile noastre includ: transferuri VIP Mercedes-Benz, cazare la hoteluri de lux și traducători autorizați.',
      de: 'Die Meva Clinic vermittelt hochkomplexe medizinische Behandlungen in Istanbul, Türkei, und arbeitet ausschließlich mit akademischen Universitätskliniken und JCI-akkreditierten klinischen Zentren zusammen. Wir bieten komplexe Spezialverfahren wie robotergestützte Onkologie-Radiochirurgie (CyberKnife S7, Gamma Knife Icon), Leber- und Nierentransplantationen, IVF-Pakete (In-vitro-Fertilisation) in Zypern, intelligente Chemotherapie und ovarielle PRP-Therapien. Unsere Partner-Onkologieabteilungen nutzen das CyberKnife S7-Robotersystem, um Strahlung mit Submillimeterpräzision (±0,44 mm) abzugeben. Dies schont gesundes Gewebe und macht chirurgische Schnitte überflüssig. Für Fertilitätspatienten organisieren wir IVF-Pakete in zypriotischen Kliniken mit hohen Erfolgsraten, die fortschrittliche genetische Präimplantationsdiagnostik (NGS) bieten. Wir koordinieren die gesamte Logistik: private VIP-Mercedes-Transfers, 5-Sterne-Hotels am Bosporus und muttersprachliche Dolmetscher.',
      es: 'Meva Clinic facilita tratamientos médicos altamente sofisticados en Estambul, Turquía, cooperando exclusivamente con hospitales universitarios académicos y centros clínicos acreditados por la JCI. Cubrimos procedimientos especializados complejos que incluyen radiocirugía oncológica robótica (CyberKnife S7, Gamma Knife Icon), trasplantes de hígado y riñón, paquetes de FIV en Chipre, quimioterapia inteligente y terapias de PRP ovárico. Ofrecemos arreglos de conserjería todo incluido: traslados VIP, hoteles de 5 estrellas y traductores.',
      it: 'Meva Clinic facilita trattamenti medici avanzati a Istanbul, in Turchia, collaborando esclusivamente con ospedali universitari e centri accreditati JCI. Copriamo procedure specialistiche complesse tra cui la radiochirurgia oncologica robotica (CyberKnife S7, Gamma Knife Icon), i trapianti di fegato e rene, i pacchetti IVF a Cipro, la chemioterapia intelligente e le terapie PRP ovariche. I reparti di oncologia partner utilizzano il sistema CyberKnife S7 per irradiare i tumori con precisione sub-millimetrica (±0.44mm), salvaguardando i tessuti sani senza incisioni. Per i trattamenti di fertilità, organizziamo pacchetti IVF a Cipro con diagnosi genetica pre-impianto (NGS). Gestiamo ogni dettaglio: transfer VIP, hotel a 5 stelle e interprete.',
      fr: 'Meva Clinic propose des soins médicaux de haute technicité à Istanbul, en Turquie, en partenariat avec des hôpitaux universitaires et des centres accrédités JCI. Nous réalisons des radiochirurgies oncologiques robotisées (CyberKnife S7, Gamma Knife Icon), des greffes de foie et de rein, des forfaits de FIV à Chypre, des chimiothérapies ciblées et des PRP ovariens. Nos services de radiothérapie utilisent le CyberKnife S7 pour traiter les tumeurs avec une précision submillimétrique (±0,44 mm) sans incision. Pour la fertilité, nous organisons les FIV à Chypre avec test génétique préimplantatoire (NGS). Nous prenons tout en charge : transports VIP, hébergement et traducteur.',
      ru: 'Meva Clinic организует высокотехнологичное медицинское лечение в Стамбуле, Турция, сотрудничая исключительно с ведущими академическими университетскими клиниками и медицинскими центрами, аккредитованными JCI. Мы предлагаем сложные специализированные процедуры, включая роботизированную радиохирургию в онкологии (CyberKnife S7, Gamma Knife Icon), трансплантацию печени и почек, пакеты ЭКО на Кипре, таргетную химиотерапию и терапию PRP яичников. В лечении опухолей используется система CyberKnife S7, доставляющая излучение с точностью до доли миллиметра (±0,44 мм), что сохраняет здоровые ткани без хирургических разрезов. Все программы включают VIP-трансфер, отели 5 звезд и личного переводчика.'
    },
    suitabilityTitle: {
      en: 'Specialist Candidacy Clearance',
      ro: 'Aviz de Candidatură pentru Tratamente de Specialitate',
      es: 'Autorización de Candidatura Especializada',
      it: 'Idoneità ai Trattamenti Specialistici',
      fr: 'Bilan de Candidature aux Traitements Spécialisés',
      de: 'Eignungsprüfung für Spezialbehandlungen',
      ru: 'Медицинский допуск к специализированному лечению'
    },
    suitabilityDesc: {
      en: 'Complex treatments require rigorous clinical files review and multi-disciplinary medical board approvals.',
      ro: 'Tratamentele complexe necesită o analiză riguroasă a dosarelor clinice și aprobarea comisiei medicale multidisciplinare.',
      es: 'Los tratamientos complejos requieren una revisión rigurosa de los expedientes clínicos y la aprobación de la junta médica multidisciplinaria.',
      it: 'I trattamenti complessi richiedono una rigorosa valutazione delle cartelle cliniche e l\'approvazione di un comitato medico multidisciplinare.',
      fr: 'Les soins complexes nécessitent une étude rigoureuse de votre dossier médical et l\'accord d\'un conseil multidisciplinaire.',
      de: 'Komplexe Behandlungen erfordern eine strenge Überprüfung der klinischen Unterlagen und die Genehmigung durch ein multidisziplinäres Ärztegremium.',
      ru: 'Сложные методы лечения требуют тщательного изучения медицинской документации и одобрения междисциплинарного консилиума.'
    },
    suitabilityPoints: {
      en: [
        'Submission of comprehensive clinical files (MRI/CT scans, biopsy reports, or endocrine profiles).',
        'Official medical board evaluation confirming candidate eligibility for transplantation or radiosurgery.',
        'Absence of absolute contraindications like severe multi-organ failure (unrelated to the treated pathology).',
        'Physical status classified as fit to undergo international travel and hospital admission protocols.'
      ],
      ro: [
        'Trimiterea dosarelor clinice complete (RMN/CT, rapoarte de biopsie sau profiluri endocrine).',
        'Evaluarea oficială a comisiei medicale care confirmă eligibilitatea pentru transplant sau radiochirurgie.',
        'Absența contraindicațiilor absolute, cum ar fi insuficiența multiorganică severă.',
        'Stare fizică clasificată ca fiind aptă pentru călătorii internaționale și protocoale de spitalizare.'
      ],
      de: [
        'Einreichung vollständiger klinischer Unterlagen (MRT/CT-Aufnahmen, Biopsieberichte oder Hormonprofile).',
        'Offizielle Bewertung durch das Ärztegremium zur Bestätigung der Eignung für eine Transplantation oder Radiochirurgie.',
        'Keine absoluten Kontraindikationen wie schweres Multiorganversagen (ohne Zusammenhang mit der behandelten Erkrankung).',
        'Körperlicher Zustand, der für Auslandsreisen und Krankenhausaufnahmen als geeignet eingestuft wird.'
      ],
      es: [
        'Envío de expedientes clínicos completos (resonancias magnéticas/TC, informes de biopsia o perfiles endocrinos).',
        'Evaluación oficial de la junta médica que confirme la elegibilidad del candidato para trasplante o radiocirugía.',
        'Ausencia de contraindicaciones absolutas como insuficiencia multiorgánica grave.',
        'Estado físico clasificado como apto para realizar viajes internacionales y protocolos de ingreso hospitalario.'
      ],
      it: [
        'Invio della documentazione clinica completa (risonanze magnetiche, TC, biopsie o profili endocrini).',
        'Valutazione positiva del comitato medico che conferma l\'idoneità al trapianto o alla radiochirurgia.',
        'Assenza di controindicazioni assolute come grave insufficienza multiorgano.',
        'Stato fisico idoneo al viaggio aereo internazionale e al ricovero ospedaliero.'
      ],
      fr: [
        'Transmission d\'un dossier clinique complet (IRM/scanner, rapports de biopsie, bilans hormonaux).',
        'Validation par le conseil médical confirmant l\'éligibilité pour une greffe ou une radiochirurgie.',
        'Absence de contre-indication absolue (ex: défaillance multi-viscérale sévère).',
        'État général jugé compatible avec un voyage international et une hospitalisation.'
      ],
      ru: [
        'Предоставление полной медицинской документации (снимки МРТ/КТ, результаты биопсии или гормональные профили).',
        'Заключение медицинского консилиума, подтверждающее показания к трансплантации или радиохирургии.',
        'Отсутствие абсолютных противопоказаний, таких как тяжелая полиорганная недостаточность.',
        'Физическое состояние, позволяющее перенести авиаперелет и госпитализацию.'
      ]
    },
    faq: {
      en: [
        { q: 'Is CyberKnife S7 treatment performed as an outpatient procedure?', a: 'Yes, CyberKnife is completely non-invasive, requires no anesthesia, and is performed as an outpatient day-procedure. You can return to your hotel immediately after the session.' },
        { q: 'What is the success rate for Cyprus donor IVF packages?', a: 'At our Northern Cyprus partner branches, live-birth success rates for egg donation protocols exceed 80% per cycle.' }
      ],
      ro: [
        { q: 'Tratamentul CyberKnife S7 se efectuează în regim ambulatoriu?', a: 'Da, CyberKnife este complet non-invaziv, nu necesită anestezie și se efectuează în ambulatoriu. Vă puteți întoarce la hotel imediat după sesiune.' },
        { q: 'Care este rata de succes pentru pachetele FIV cu donator în Cipru?', a: 'La clinicile noastre partenere din Cipru de Nord, ratele de succes ale nașterilor vii pentru protocoalele de donare de ovule depășesc 80% pe ciclu.' }
      ],
      de: [
        { q: 'Wird die CyberKnife S7-Behandlung ambulant durchgeführt?', a: 'Ja, die CyberKnife-Behandlung ist völlig schmerzfrei, erfordert keine Anästhesie und wird ambulant durchgeführt. Sie können direkt nach der Sitzung in Ihr Hotel zurückkehren.' },
        { q: 'Wie hoch ist die Erfolgsquote bei IVF-Paketen mit Eizellspende in Zypern?', a: 'In unseren zypriotischen Partnerkliniken übersteigen die Lebendgeburtenraten bei Eizellspenden-Protokollen 80 % pro Zyklus.' }
      ],
      es: [
        { q: '¿El tratamiento con CyberKnife S7 se realiza de forma ambulatoria?', a: 'Sí, CyberKnife es completamente no invasivo, no requiere anestesia y se realiza como un procedimiento ambulatorio. Puede regresar a su hotel inmediatamente después de la sesión.' },
        { q: '¿Cuál es la tasa de éxito de los paquetes de FIV con donante en Chipre?', a: 'En nuestras clínicas asociadas del norte de Chipre, las tasas de éxito de nacidos vivos para los protocolos de donación de óvulos superan el 80% por ciclo.' }
      ],
      it: [
        { q: 'Il trattamento CyberKnife S7 viene eseguito in regime ambulatoriale?', a: 'Sì, la tecnologia CyberKnife è completamente non invasiva, non richiede anestesia e viene eseguita in day hospital. È possibile tornare in hotel subito dopo la seduta.' },
        { q: 'Qual è la percentuale di successo dei pacchetti IVF con donatrice a Cipro?', a: 'Nelle nostre cliniche partner a Cipro Nord, la percentuale di successo delle nascite da protocolli di ovodonazione supera l\'80% per ciclo.' }
      ],
      fr: [
        { q: 'Le traitement par CyberKnife S7 est-il réalisé en ambulatoire ?', a: 'Oui, le CyberKnife est non invasif, ne nécessite pas d\'anesthésie et se fait en ambulatoire. Vous pouvez retourner à l\'hôtel immédiatement après.' },
        { q: 'Quel est le taux de réussite pour les FIV avec don d\'ovocytes à Chypre ?', a: 'Dans nos cliniques partenaires de Chypre du Nord, le taux de réussite des naissances vivantes dépasse 80 % par cycle.' }
      ],
      ru: [
        { q: 'Проводится ли лечение CyberKnife S7 амбулаторно?', a: 'Да, процедура CyberKnife абсолютно неинвазивна, не требует анестезии и проводится в амбулаторных условиях. Вы сможете вернуться в отель сразу после сеанса.' },
        { q: 'Какова вероятность успеха программ ЭКО с донорской яйцеклеткой на Кипре?', a: 'В наших партнерских клиниках на Северном Кипре показатели рождения живых детей при использовании донорских яйцеклеток превышают 80% за один цикл.' }
      ]
    }
  }
};
