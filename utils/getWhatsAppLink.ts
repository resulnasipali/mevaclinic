export function getWhatsAppLink(treatmentTitle: string, lang: string): string {
  // Use specified phone numbers
  const number = lang === 'ro' ? '905324675941' : '905366511599';
  
  let message = `Hi Meva Clinic! I'm interested in the VIP Premium package for ${treatmentTitle}. Can you share details?`;
  
  if (lang === 'ro') {
    message = `Buna Meva Clinic! Sunt interesat de pachetul VIP Premium pentru ${treatmentTitle}. Imi puteti oferi detalii?`;
  } else if (lang === 'es') {
    message = `¡Hola Clínica Meva! Estoy interesado en el paquete VIP Premium para ${treatmentTitle}. ¿Puede compartir detalles?`;
  } else if (lang === 'it') {
    message = `Ciao Meva Clinic! Sono interessato al pacchetto VIP Premium per ${treatmentTitle}. Puoi condividere i dettagli?`;
  } else if (lang === 'fr') {
    message = `Bonjour Meva Clinic ! Je suis intéressé par le forfait VIP Premium pour ${treatmentTitle}. Pouvez-vous partager les détails ?`;
  } else if (lang === 'de') {
    message = `Hallo Meva Klinik! Ich interessiere mich für das VIP Premium-Paket für ${treatmentTitle}. Können Sie Details mitteilen?`;
  } else if (lang === 'ru') {
    message = `Здравствуйте, Meva Clinic! Меня интересует VIP Премиум пакет для ${treatmentTitle}. Можете поделиться подробностями?`;
  }
  
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}
