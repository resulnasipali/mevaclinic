// @ts-nocheck
'use client';

import React from 'react';
import { Heart, Star, ShieldCheck } from 'lucide-react';
import { tUI } from '@/utils/uiTranslations';

const SocialProof = ({ lang = 'en' }: { lang?: string }) => {
  const localT = (obj: Record<string, string>) => {
    return obj[lang] || obj['en'] || Object.values(obj)[0] || '';
  };

  const labelFeedback = localT({
    en: "Patient Feedback Excerpt",
    ro: "Fragment Feedback Pacient",
    es: "Extracto de Opinión de Paciente",
    it: "Estratto di Feedback del Paziente",
    ru: "Отзыв пациента",
    fr: "Extrait de Retour Patient",
    de: "Auszug aus Patientenfeedback"
  });

  const testimonials = [
    {
      name: "A.M. (" + localT({ en: "Oncology Support", ro: "Suport Oncologie", es: "Soporte Oncológico", it: "Supporto Oncologico", ru: "Онкологическая поддержка", fr: "Soutien Oncologique", de: "Onkologische Unterstützung" }) + ")",
      text: localT({
        en: "I chose Meva Clinic's clinical guidance for the CyberKnife S7 facility partnership, and the team's medical guidance was exceptional.",
        ro: "Am ales coordonarea Meva pentru parteneriatul cu clinica CyberKnife S7, iar îndrumarea medicală a fost excepțională.",
        es: "Elegí la coordinación de Meva para la asociación con el centro CyberKnife S7, y la guía médica fue excepcional.",
        it: "Ho scelto il coordinamento di Meva per la partnership con il centro CyberKnife S7, e la guida medica è stata eccezionale.",
        ru: "Я выбрал координацию Meva для партнерства с центром CyberKnife S7, и медицинское руководство было исключительным.",
        fr: "J'ai choisi la coordination de Meva pour le partenariat avec le centre CyberKnife S7, et les conseils médicaux ont été exceptionnels.",
        de: "Ich habe mich für die Koordination von Meva für die Partnerschaft mit dem CyberKnife S7-Zentrum entschieden, und die medizinische Begleitung war außergewöhnlich."
      })
    },
    {
      name: "E.S. (" + localT({ en: "Bariatric Support", ro: "Suport Bariatric", es: "Soporte Bariátrico", it: "Supporto Bariatrico", ru: "Бариатрическая поддержка", fr: "Soutien Bariatrique", de: "Bariatrische Unterstützung" }) + ")",
      text: localT({
        en: "The international patient support made everything feel smooth and reassuring from booking to aftercare.",
        ro: "Coordonarea pacienților a făcut ca totul să pară simplu și liniștitor, de la rezervare până la îngrijirea postoperatorie.",
        es: "La coordinación de pacientes hizo que todo se sintiera fluido y tranquilizador desde la reserva hasta el cuidado posterior.",
        it: "Il coordinamento dei pazienti ha reso tutto semplice e rassicurante, dalla prenotazione all'assistenza successiva.",
        ru: "Координация пациентов сделала весь процесс гладким и обнадеживающим — от бронирования до послеоперационного ухода.",
        fr: "La coordination des patients a rendu tout fluide et rassurant, de la réservation au suivi postopératoire.",
        de: "Die Patientenkoordination sorgte dafür, dass sich von der Buchung bis zur Nachsorge alles reibungslos und beruhigend anfühlte."
      })
    },
    {
      name: "M.D. (" + localT({ en: "Hair Tech Patient", ro: "Pacient Implant Păr", es: "Paciente de Injerto Capilar", it: "Paziente Trapianto Capelli", ru: "Пациент трихологии", fr: "Patient Greffe Cheveux", de: "Haartransplantations-Patient" }) + ")",
      text: localT({
        en: "Professional care at its peak. The high standards of the partner clinics are visible in every detail.",
        ro: "Îngrijire profesională la cel mai înalt nivel. Standardele ridicate ale clinicilor partenere sunt vizibile în fiecare detaliu.",
        es: "Atención profesional en su punto máximo. Los altos estándares de las clínicas asociadas son visibles en cada detalle.",
        it: "Cura professionale ai massimi livelli. Gli standard elevati delle cliniche partner sono visibili in ogni dettaglio.",
        ru: "Профессиональный уход на высшем уровне. Высокие стандарты партнерских клиник видны в каждой детали.",
        fr: "Des soins professionnels au sommet. Les normes élevées des cliniques partenaires sont visibles dans les moindres détails.",
        de: "Professionelle Betreuung auf höchstem Niveau. Die hohen Standards der Partnerkliniken sind in jedem Detail sichtbar."
      })
    },
    {
      name: "O.P. (" + localT({ en: "Dental Restoration", ro: "Restaurare Dentară", es: "Restauración Dental", it: "Restaurazione Dentale", ru: "Стоматологическая реставрация", fr: "Restauration Dentaire", de: "Zahnrekonstruktion" }) + ")",
      text: localT({
        en: "The international patient care pathway was completely seamless and stress-free.",
        ro: "Coordonarea turismului medical a fost complet transparentă și fără stres.",
        es: "La coordinación del turismo médico fue completamente fluida y sin estrés.",
        it: "Il coordinamento del turismo medico è stato del tout fluido e senza stress.",
        ru: "Координация медицинского туризма была абсолютно отлаженной и беззаботной.",
        fr: "La coordination du tourisme médical s'est déroulée de manière fluide et sans stress.",
        de: "Die Organisation des Medizintourismus verlief absolut reibungslos und stressfrei."
      })
    },
    {
      name: "R.K. (" + localT({ en: "Rhinoplasty Patient", ro: "Pacient Rinoplastie", es: "Paciente de Rinoplastia", it: "Paziente Rinoplastica", ru: "Пациент ринопластики", fr: "Patient Rhinoplastie", de: "Nasenkorrektur-Patient" }) + ")",
      text: localT({
        en: "The modern ultrasonic rhinoplasty partner clinic exceeded all my expectations for comfort.",
        ro: "Clinica parteneră modernă de rinoplastie ultrasonică a depășit toate așteptările mele privind confortul.",
        es: "La moderna clínica asociada de rinoplastia ultrasónica superó todas mis expectativas de comodidad.",
        it: "La moderna clinica partner di rinoplastica ultrasonica ha superato tutte le mie aspettative di comfort.",
        ru: "Современная партнерская клиника ультразвуковой ринопластики превзошла все мои ожидания относительно комфорта.",
        fr: "La clinique partenaire moderne de rhinoplastie ultrasonique a dépassé toutes mes attentes en matière de confort.",
        de: "Die moderne Partnerklinik für Ultraschall-Nasenkorrektur hat all meine Erwartungen an den Komfort übertroffen."
      })
    },
    {
      name: "C.V. (" + localT({ en: "Plastic Surgery", ro: "Chirurgie Plastică", es: "Cirugía Plástica", it: "Chirurgia Plastica", ru: "Пластическая хирургия", fr: "Chirurgie Plastique", de: "Plastische Chirurgie" }) + ")",
      text: localT({
        en: "Transparent package details and dedicated patient guides made my clinical visit very comfortable.",
        ro: "Detaliile transparente ale pachetului și ghizii dedicați pacienților mi-au făcut vizita clinică foarte confortabilă.",
        es: "Los detalles transparentes del paquete y los guías de pacientes dedicados hicieron que mi visita clínica fuera muy cómoda.",
        it: "I dettagli trasparenti del pacchetto e le guide dedicate ai pazienti hanno reso la mia visita clinica molto confortevole.",
        ru: "Прозрачные детали пакета услуг и преданные своему делу гиды сделали мой визит в клинику очень комфортным.",
        fr: "Les détails transparents des forfaits et les guides dédiés aux patients ont rendu ma visite clinique très confortable.",
        de: "Transparente Paketdetails und engagierte Patientenbetreuer machten meinen Klinikaufenthalt sehr komfortabel."
      })
    },
    {
      name: "T.N. (" + localT({ en: "Clinical Advisory", ro: "Consiliere Clinică", es: "Asesoría Clínica", it: "Consulenza Clinica", ru: "Клиническая консультация", fr: "Conseil Clinique", de: "Klinische Beratung" }) + ")",
      text: localT({
        en: "Outstanding medical advisory board and highly competent partner specialists.",
        ro: "Consiliu consultativ medical remarcabil și specialiști parteneri extrem de competenți.",
        es: "Destacada junta asesora médica y especialistas asociados altamente competentes.",
        it: "Comitato consultivo medico eccezionale e specialisti partner altamente competenti.",
        ru: "Выдающийся медицинский консультативный совет и высококомпетентные партнерские специалисты.",
        fr: "Comité consultatif médical exceptionnel et spécialistes partenaires hautement compétents.",
        de: "Hervorragender medizinischer Beirat und äußerst kompetente Partnerspezialisten."
      })
    },
    {
      name: "S.L. (" + localT({ en: "Patient Support", ro: "Suport Pacienți", es: "Soporte al Paciente", it: "Supporto ai Pazienti", ru: "Служба поддержки пациентов", fr: "Soutien aux Patients", de: "Patientenunterstützung" }) + ")",
      text: localT({
        en: "A truly professional international patient care team. Highly recommended for international patients.",
        ro: "O companie de facilitare medicală cu adevărat profesionistă. Recomandată cu căldură pacienților internaționali.",
        es: "Una empresa de facilitación médica verdaderamente profesional. Muy recomendable para pacientes internacionales.",
        it: "Una società di facilitazione medica davvero professionale. Altamente raccomandata per i pazienti internazionali.",
        ru: "Действительно профессиональный медицинский фасилитатор. Настоятельно рекомендуется для иностранных пациентов.",
        fr: "Une agence de facilitation médicale vraiment professionnelle. Hautement recommandée pour les patients internationaux.",
        de: "Ein wirklich professioneller medizinischer Vermittler. Sehr empfehlenswert für internationale Patienten."
      })
    }
  ];

  return (
    <div className="bg-prime py-12 overflow-hidden border-y border-white/5 relative group">
      <div className="absolute inset-y-0 left-0 w-40 bg-gradient-to-r from-prime to-transparent z-10"></div>
      <div className="absolute inset-y-0 right-0 w-40 bg-gradient-to-l from-prime to-transparent z-10"></div>
      
      <div className="flex animate-marquee whitespace-nowrap gap-16 items-center">
        {testimonials.map((t, i) => (
          <div key={i} className="inline-flex items-center gap-6 group/item">
             <div className="flex items-center gap-2">
                <Heart size={16} className="text-accent fill-accent" />
                <div className="flex">
                   {[1,2,3,4,5].map(s => <Star key={s} size={10} className="text-accent fill-accent" />)}
                </div>
             </div>
             <p className="text-white/90 text-lg font-serif italic tracking-wide">
                "{t.text}"
             </p>
             <div className="flex items-center gap-2">
                <span className="text-accent font-bold uppercase tracking-[0.2em] text-[10px]">— {t.name}</span>
                <span className="text-white/30 text-[9px] uppercase tracking-wider font-semibold border border-white/10 px-1.5 py-0.5 rounded">{labelFeedback}</span>
                <ShieldCheck size={12} className="text-white/20" />
             </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SocialProof;
