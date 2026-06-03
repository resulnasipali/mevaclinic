// @ts-nocheck
import React from 'react';

const HospitalSchema = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "MedicalOrganization",
    "name": "Meva Clinic",
    "alternateName": "Meva Istanbul Healthcare",
    "url": "https://mevaclinic.com",
    "logo": "https://mevaclinic.com/logo.png",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+90-532-467-59-41",
      "contactType": "customer service",
      "areaServed": "Global",
      "availableLanguage": ["Romanian", "English", "Turkish"]
    },
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Acibadem Partner Clinic",
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
