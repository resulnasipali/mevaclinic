const fs = require('fs');

const data = {
  "clinical_approach": {
    "en": "Our clinical approach prioritizes tissue preservation and long-term natural results, ensuring your transformation is both safe and aesthetically superior.",
    "de": "Unser klinischer Ansatz priorisiert den Gewebeerhalt und langfristig natürliche Ergebnisse, um sicherzustellen, dass Ihre Transformation sowohl sicher als auch ästhetisch erstklassig ist.",
    "ro": "Abordarea noastră clinică prioritizează conservarea țesuturilor și rezultatele naturale pe termen lung, asigurând că transformarea dumneavoastră este atât sigură, cât și superioară din punct de vedere estetic.",
    "es": "Nuestro enfoque clínico prioriza la preservación del tejido y los resultados naturales a largo plazo, garantizando que su transformación sea segura y estéticamente superior.",
    "it": "Il nostro approccio clinico privilegia la conservazione dei tessuti e risultati naturali a lungo termine, garantendo che la vostra trasformazione sia sicura ed esteticamente superiore.",
    "fr": "Notre approche clinique donne la priorité à la préservation des tissus et aux résultats naturels à long terme, garantissant que votre transformation est à la fois sûre et esthétiquement supérieure.",
    "ru": "Наш клинический подход ставит в приоритет сохранение тканей и долгосрочные естественные результаты, гарантируя, что ваша трансформация будет безопасной и эстетически безупречной."
  },
  "strategic_partnerships": {
    "en": "Our strategic partnerships guarantee VIP access from landing to the procedures within the Acibadem network and 5-star hotels.",
    "de": "Unsere strategischen Partnerschaften garantieren Ihnen VIP-Zugang von der Landung bis zu den Behandlungen im Acıbadem-Netzwerk und in 5-Sterne-Hotels.",
    "ro": "Parteneriatele noastre strategice garantează acces VIP de la aterizare până la procedurile din cadrul rețelei Acibadem și hoteluri de 5 stele.",
    "es": "Nuestras alianzas estratégicas garantizan acceso VIP desde el aterrizaje hasta los procedimientos dentro de la red Acibadem y hoteles de 5 estrellas.",
    "it": "Le partnership strategiche garantiscono l'accesso VIP dall'atterraggio alle procedure all'interno del network Acibadem e in hotel a 5 stelle.",
    "fr": "Nos partenariats stratégiques garantissent un accès VIP de l'atterrissage aux procédures au sein du réseau Acibadem et dans des hôtels 5 étoiles.",
    "ru": "Наши стратегические партнерства гарантируют VIP-доступ от посадки до процедур в сети клиник Acibadem и 5-звездочных отелях."
  },
  "trusted_partner": {
    "en": "Your trusted partner for medical excellence in Turkey. Premium VIP packages for safe interventions and absolute comfort.",
    "de": "Ihr vertrauenswürdiger Partner für medizinische Exzellenz in der Türkei. Premium-VIP-Pakete für sichere Eingriffe und absoluten Komfort.",
    "ro": "Partenerul tău de încredere pentru excelență medicală în Turcia. Pachete VIP premium pentru intervenții sigure și confort absolut.",
    "es": "Su socio de confianza para la excelencia médica en Turquía. Paquetes VIP premium para intervenciones seguras y confort absoluto.",
    "it": "Il tuo partner di fiducia per l'eccellenza medica in Turchia. Pacchetti VIP premium per interventi sicuri e comfort assoluto.",
    "fr": "Votre partenaire de confiance pour l'excellence médicale en Turquie. Formules VIP premium pour des interventions sûres et un confort absolu.",
    "ru": "Ваш надежный партнер в области медицинского передового опыта в Турции. Премиальные VIP-пакеты для безопасных вмешательств и абсолютного комфорта."
  },
  "facility_description": {
    "en": "As a JCI-accredited premium medical facility in Istanbul, Turkey, we specialize in high-end bariatric, plastic surgery, and elite dental reconstructions. All procedures include VIP transfers, 5-star Bosphorus accommodation, and dedicated concierge support with a no-hidden-fees guarantee.",
    "de": "Als JCI-akkreditierte Premium-Medizineinrichtung in Istanbul, Türkei, sind wir auf erstklassige bariatrische Chirurgie, plastische Chirurgie und exzellente Zahnrekonstruktionen spezialisiert. Alle Eingriffe beinhalten VIP-Transfers, eine 5-Sterne-Unterkunft am Bosporus und eine engagierte Concierge-Betreuung mit einer Garantie ohne versteckte Kosten.",
    "ro": "Ca o instituție medicală premium acreditată JCI în Istanbul, Turcia, suntem specializați în chirurgie bariatrică de înaltă calitate, chirurgie plastică și reconstrucții dentare de elită. Toate procedurile includ transferuri VIP, cazare de 5 stele pe Bosfor și asistență concierge dedicată, cu garanția zero costuri ascunse.",
    "es": "Como centro médico premium acreditado por la JCI en Estambul, Turquía, nos especializamos en cirugía bariátrica, cirugía plástica y reconstrucciones dentales de élite. Todos los procedimientos incluyen traslados VIP, alojamiento de 5 estrellas en el Bósforo y asistencia de conserjería dedicada con garantía de sin tarifas ocultas.",
    "it": "In qualità di struttura medica premium accreditata JCI a Istanbul, in Turchia, siamo specializzati in chirurgia bariatrica di alto livello, chirurgia plastica e ricostruzioni dentali d'élite. Tutte le procedure includono trasferimenti VIP, sistemazione a 5 stelle sul Bosfor e assistenza concierge dedicata con garanzia di zero costi nascosti.",
    "fr": "En tant qu'établissement médical haut de gamme accrédité JCI à Istanbul, en Turquie, nous sommes spécialisés dans la chirurgie bariatrique de pointe, la chirurgie plastique et les reconstructions dentaires d'élite. Toutes les procédures comprennent les transferts VIP, l'hébergement 5 étoiles sur le Bosphore et une assistance conciergerie dédiée avec une garantie sans frais cachés.",
    "ru": "Являясь аккредитованным JCI медицинским учреждением премиум-класса в Стамбуле, Турция, мы специализируемся на высокотехнологичной бариатрической и пластической хирургии, а также элитной реконструкции зубов. Все процедуры включают VIP-трансферы, 5-звездочное проживание на берегу Босфора и выделенную консьерж-поддержку с гарантией отсутствия скрытых комиссий."
  },
  "recovery_detail": {
    "en": "From your first message to your full recovery — every detail is managed with precision and luxury by our dedicated team.",
    "de": "Von Ihrer ersten Nachricht bis zur vollständigen Genesung – jedes Detail wird von unserem engagierten Team mit Präzision und Luxus betreut.",
    "ro": "De la primul mesaj până la recuperarea completă — fiecare detaliu este gestionat cu precizie și lux de echipa noastră dedicată.",
    "es": "Desde su primer mensaje hasta su total recuperación: cada detalle es gestionado con precisión y lujo por nuestro dedicado equipo.",
    "it": "Dal primo messaggio al completo recupero: ogni dettaglio è gestito con precisione e lusso dal nostro team dedicato.",
    "fr": "De votre premier message à votre entière guérison — chaque détail est géré avec précision et luxe par notre équipe dédiée.",
    "ru": "От вашего первого сообщения до полного выздоровления — каждая деталь контролируется с точностью и роскошью нашей преданной командой."
  },
  "whatsapp_chat_start": {
    "en": "Hello, I want to know more about the VIP all-inclusive package.",
    "de": "Hallo, ich möchte mehr über das VIP-All-Inclusive-Paket erfahren.",
    "ro": "Bună ziua, doresc să aflu mai multe detalii despre pachetul VIP all-inclusive.",
    "es": "Hola, quiero saber más sobre el paquete VIP todo incluido.",
    "it": "Ciao, vorrei saperne di più sul pacchetto VIP all-inclusive.",
    "fr": "Bonjour, je souhaite en savoir plus sur la formule VIP tout compris.",
    "ru": "Здравствуйте, я хочу узнать больше о VIP-пакете «все включено»."
  },
  "cta_vip_details": {
    "en": "Request VIP Package Details",
    "de": "VIP-Paketdetails anfordern",
    "ro": "Solicită detalii despre pachetul VIP",
    "es": "Solicitar detalles del paquete VIP",
    "it": "Richiedi dettagli sul pacchetto VIP",
    "fr": "Demander les détails de la formule VIP",
    "ru": "Запросить подробности VIP-пакета"
  }
};

const filePath = './utils/uiTranslations.ts';
let content = fs.readFileSync(filePath, 'utf8');

// The file contains `export const uiDictionary: Record<string, Record<string, string>> = { ... };`
// We will parse the object or just append these keys if they don't exist.
// Since it's a TS file, we can inject before the last closing brace `};` of uiDictionary.

const marker = 'export const uiDictionary';
const startIndex = content.indexOf(marker);
if (startIndex !== -1) {
  const lastBraceIndex = content.lastIndexOf('};');
  if (lastBraceIndex !== -1) {
    let newKeys = '';
    for (const [key, translations] of Object.entries(data)) {
      newKeys += `\n  '${key}': ${JSON.stringify(translations, null, 4).replace(/\\n/g, '\\n')},`;
    }
    
    // Inject at the end of the dictionary
    content = content.slice(0, lastBraceIndex) + newKeys + '\\n' + content.slice(lastBraceIndex);
    fs.writeFileSync(filePath, content);
    console.log('Successfully injected translations.');
  }
}
