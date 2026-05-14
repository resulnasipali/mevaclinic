import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';
import { pushToDataLayer } from '../utils/AnalyticsUtils';

const DynamicSEO = ({ 
  title = "Meva Clinic - Chirurgie Bariatrică și Gastric Sleeve în Istanbul", 
  description = "Meva Clinic Istanbul oferă pachete VIP all-inclusive pentru Gastric Sleeve și Bypass. Recuperare rapidă, experți de top și rezultate dovedite. Află prețul!", 
  path = "",
  schemaType = "MedicalBusiness",
  image = "https://www.mevaclinic.com/premium-clinical-image.jpg",
  keywords,
  reviewer = null   // Optional: { name, specialty, credentials, url } from REVIEWERS constant
}) => {
  const siteUrl = "https://www.mevaclinic.com";
  const currentUrl = `${siteUrl}${path}`;
  const isRo = path.startsWith('/ro') || path === '/';
  const isEn = path.startsWith('/en');

  const routerLocation = useLocation();

  useEffect(() => {
    try {
      pushToDataLayer('virtual_page_view', {
        page_path: routerLocation.pathname,
        page_title: title,
        language: isEn ? 'en' : 'ro'
      });
    } catch {
      // Never crash the page due to analytics
    }
  }, [routerLocation.pathname, title, isEn]);

  // Derive the alternate language path
  let roPath = path;
  let enPath = path;
  
  if (path === '/' || path === '/ro') {
    roPath = '/';
    enPath = '/en';
  } else if (path.startsWith('/ro')) {
    enPath = path.replace('/ro', '/en');
  } else if (path.startsWith('/en')) {
    roPath = path.replace('/en', '/ro');
    if (roPath === '/ro') roPath = '/';
  }

  const keywordsRo = "clinica istanbul transplant par, pret gastric sleeve turcia, oncologie moderna bariatrica, transplant par Turcia, chirurgie bariatrica Istanbul, implant dentar pret, oncologie Turcia, CyberKnife Romania, gastric sleeve Istanbul, Dr. Harun Alakaya, clinica medicala Istanbul, turism medical Turcia";
  const keywordsEn = "best hair transplant Istanbul, bariatric surgery Turkey, gastric sleeve costs, Dr. Harun Alakaya, dental implants Turkey, CyberKnife oncology Istanbul, medical tourism Turkey, organ transplant Istanbul";

  const medicalBusinessSchema = {
    "@context": "https://schema.org",
    "@type": ["MedicalBusiness", "HealthAndBeautyBusiness", "LocalBusiness"],
    "name": "Meva Clinic",
    "url": siteUrl,
    "logo": `${siteUrl}/logo.png`,
    "image": image,
    "description": "Premium medical tourism clinic in Istanbul, Turkey. Specializing in Bariatric Surgery, Hair Transplant, Oncology (CyberKnife), Dental Implants, Plastic Surgery and Organ Transplant.",
    "telephone": "+905324675941",
    "email": "info@mevaclinic.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Acibadem Partner Clinic, Altunizade",
      "addressLocality": "Istanbul",
      "addressRegion": "Istanbul",
      "postalCode": "34662",
      "addressCountry": "TR"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "41.0182",
      "longitude": "29.0434"
    },
    "hasMap": "https://www.google.com/maps?cid=1234567890",
    "areaServed": [
      { "@type": "Country", "name": "Romania" },
      { "@type": "Country", "name": "United Kingdom" },
      { "@type": "Country", "name": "Global" }
    ],
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],
        "opens": "09:00",
        "closes": "18:00"
      }
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+905324675941",
      "contactType": "customer service",
      "availableLanguage": ["Romanian", "English", "Turkish"],
      "areaServed": ["RO", "GB", "Global"]
    },
    "medicalSpecialty": [
      "Bariatric Surgery",
      "Hair Transplant",
      "Oncology",
      "Plastic Surgery",
      "Dental Care",
      "Organ Transplant"
    ],
    "employee": [
      {
        "@type": "Physician",
        "name": "Dr. Hasan Erdem",
        "medicalSpecialty": "Bariatric Surgery"
      },
      {
        "@type": "Physician",
        "name": "Dr. Harun Alakaya",
        "medicalSpecialty": "Hair Restoration"
      }
    ],
    "priceRange": "$$$$",
    "sameAs": [
      "https://www.facebook.com/mevaclinic",
      "https://www.instagram.com/mevaclinic",
      "https://www.linkedin.com/company/meva-clinic",
      "https://www.youtube.com/@mevaclinic"
    ]
  };

  const contactPageSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": title,
    "url": currentUrl,
    "description": description,
    "mainEntity": medicalBusinessSchema
  };


  const reviewedByNode = reviewer ? {
    "@type": "Physician",
    "name": reviewer.name,
    "medicalSpecialty": reviewer.specialty,
    "description": reviewer.bio || reviewer.credentials,
    "url": reviewer.url || "https://snazzy-palmier-4439dc.netlify.app/en/about-us",
    ...(reviewer.education ? { "alumniOf": { "@type": "EducationalOrganization", "name": reviewer.education } } : {}),
    ...(reviewer.institution ? { "affiliation": { "@type": "Hospital", "name": reviewer.institution } } : {}),
    "worksFor": {
      "@type": "MedicalOrganization",
      "name": "Meva Clinic Istanbul"
    }
  } : undefined;

  const genericSchema = {
    "@context": "https://schema.org",
    "@type": schemaType,
    "name": title,
    "url": currentUrl,
    "description": description,
    "provider": medicalBusinessSchema,
    ...(reviewedByNode ? { "reviewedBy": reviewedByNode } : {})
  };

  const ivfSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalProcedure",
    "name": "IVF / In-Vitro Fertilization",
    "url": currentUrl,
    "description": "High-success-rate IVF treatments performed at Meva Clinic's specialized branch in Northern Cyprus, equipped with the latest reproductive technology.",
    "procedureType": "Therapeutic",
    "followUp": "Post-transfer monitoring and hormonal support included in package",
    "preparation": "Comprehensive hormonal screening and pre-implantation genetic testing available",
    "status": "EventScheduled",
    "location": {
      "@type": "Hospital",
      "name": "Meva Clinic Northern Cyprus Branch",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Lefko\u015fa",
        "addressRegion": "Northern Cyprus",
        "addressCountry": "CY"
      }
    },
    "provider": medicalBusinessSchema,
    ...(reviewedByNode ? { "reviewedBy": reviewedByNode } : {})
  };

  const getPageSchema = () => {
    if (schemaType === "MedicalBusiness") return medicalBusinessSchema;
    if (schemaType === "ContactPage") return contactPageSchema;
    if (schemaType === "IVF") return ivfSchema;
    return genericSchema;
  };

  const pageSchema = getPageSchema();

  return (
    <Helmet htmlAttributes={{ lang: isEn ? 'en' : 'ro' }}>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords || (isEn ? keywordsEn : keywordsRo)} />
      <meta name="robots" content="index, follow" />
      <meta name="author" content="Meva Clinic" />
      <link rel="canonical" href={currentUrl} />

      {/* Hreflang for bilingual SEO */}
      <link rel="alternate" hrefLang="ro" href={`${siteUrl}${roPath}`} />
      <link rel="alternate" hrefLang="en" href={`${siteUrl}${enPath}`} />
      <link rel="alternate" hrefLang="x-default" href={`${siteUrl}/ro`} />

      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content={image} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:locale" content={isEn ? "en_US" : "ro_RO"} />
      <meta property="og:site_name" content="Meva Clinic" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@mevaclinic" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Schema.org JSON-LD */}
      <script type="application/ld+json">
        {JSON.stringify(pageSchema)}
      </script>
    </Helmet>
  );
};

export default DynamicSEO;
