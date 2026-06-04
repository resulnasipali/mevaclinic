// @ts-nocheck
import React from 'react';

const HospitalSchema = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "MedicalOrganization",
    "name": "Meva Clinic",
    "alternateName": "Meva Istanbul Healthcare",
    "url": "https://www.mevaclinic.com",
    "logo": "https://www.mevaclinic.com/logo.png",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+90-532-467-59-41",
      "contactType": "customer service",
      "areaServed": "Global",
      "availableLanguage": ["Romanian", "English", "Turkish"]
    },
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Altunizade, Uskudar, Istanbul, Turkey",
      "addressLocality": "Istanbul",
      "addressCountry": "TR"
    }
  };

  return (
    <script type="application/ld+json">
      {JSON.stringify(schema)}
    </script>
  );
};

export default HospitalSchema;
