# Meva Clinic - Luxury Medical Tourism Platform

A high-performance, SEO-driven SPA built for a premium medical tourism clinic operating out of Istanbul, Turkey. Engineered for maximum organic traffic capture, localized landing pages, and automated lead generation.

## 🚀 Built With

* **Framework:** React 19 + Vite
* **Styling:** Tailwind CSS (Custom Royal Blue & Gold theme)
* **Routing:** React Router v7 (Dynamic Page Generation)
* **SEO:** React Helmet Async (Automated Schema.org JSON-LD generation)
* **Tracking:** Direct Meta Pixel (CAPI) Integration wrapped in GDPR logics
* **Icons:** Lucide React

## 💎 Core Features

1. **AI Diagnostic Assistant:** A multi-step form utilizing a state-machine architecture that predicts patient eligibility and extracts highly-qualified leads via **EmailJS**.
2. **SEO Blog Engine:** Dynamic `/ro/blog/:slug` generator built to parse HTML payloads and automatically construct deep-linked 'Table of Contents' modules. E-E-A-T Badges included.
3. **Automated Conversion Anchors:** High-intent 'Bariatric' and 'Dental' dedicated landing pages featuring fixed sticky sidebars and embedded BMI calculators.
4. **Vercel Ready:** SPA fallback completely mapped in `vercel.json`.

## ⚙️ Local Development

1. Clone or download the repository.
2. Run `npm install` to grab the dependencies.
3. Add your `EmailJS` credentials into `src/components/AIAssistant.jsx`.
4. Run `npm run dev` to launch the lightning-fast Vite server on localhost:5173.

To compile for production:
```bash
npm run build
```

## 📈 Lead Architecture

Leads are primarily captured in two ways:
- **Direct API:** The `HeroSection` bypasses server logic and can be tied into Webhooks.
- **Progressive Profiling:** Evaluated organically using `BmiCalculator` (which triggers Meta 'BMI_Calculated' pixel) and ultimately funnels the patient to `/ro/despre-noi` or the WhatsApp quick-actions.
