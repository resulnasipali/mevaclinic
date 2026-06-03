const fs = require('fs');
const path = require('path');

// Fix SmartConcierge
const scPath = path.join(__dirname, 'components/SmartConcierge.tsx');
let scContent = fs.readFileSync(scPath, 'utf-8');

const missingHeader = `import React, { useState, useMemo, useEffect } from 'react';
import { treatmentRules } from '../data/treatmentRules';
import { User, Hospital, Calendar, Clock, Shield, ChevronRight, CheckCircle2, AlertCircle, Info, Download, Loader2 } from 'lucide-react';
import MedicalDossier from './MedicalDossier';
import { pushToDataLayer } from '../utils/AnalyticsUtils';

const SmartConcierge = ({ lang = 'en' }: { lang?: string }) => {
  const isEn = lang === 'en';
  const [step, setStep] = useState(1);
  const [isGenerating, setIsGenerating] = useState(false);
  const [generationProgress, setGenerationProgress] = useState(0);
  const [isUnlocked, setIsUnlocked] = useState(false);
  
`;

if (!scContent.includes('const SmartConcierge =')) {
  scContent = scContent.replace(/const \[selection, setSelection\] = useState\(\{/, missingHeader + 'const [selection, setSelection] = useState({');
  fs.writeFileSync(scPath, scContent, 'utf-8');
  console.log('Restored SmartConcierge.tsx');
}

// Fix MedicalDossier
const mdPath = path.join(__dirname, 'components/MedicalDossier.tsx');
let mdContent = fs.readFileSync(mdPath, 'utf-8');
if (mdContent.includes('isEn = false')) {
  mdContent = mdContent.replace('isEn = false', 'lang = "en"');
  mdContent = mdContent.replace('const reportId', 'const isEn = lang === "en";\n  const reportId');
  fs.writeFileSync(mdPath, mdContent, 'utf-8');
  console.log('Fixed MedicalDossier.tsx');
}
