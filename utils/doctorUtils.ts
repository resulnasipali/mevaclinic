/**
 * Utility to format/mask doctor names to their safe UI representation
 * (e.g. Dr. Cuma -> Dr. Cuma A., MD Harun -> MD Harun A., etc.)
 * mapping conforms to the approved Google E-E-A-T and E-E-A-T-safe structure.
 */

export function maskDoctorName(name: string | null | undefined): string {
  if (!name) return '';
  const trimmed = name.trim();
  const mapping: Record<string, string> = {
    // Standard matches
    'Dr. Cuma': 'Dr. Cuma A.',
    'MD Harun': 'MD Harun A.',
    'Dr. Harun': 'MD Harun A.',
    'Dr. Yusuf': 'Dr. Yusuf Y.',
    'Prof. Dr. Emre': 'Prof. Dr. Emre E.',
    'Op. Dr. Yunus': 'Op. Dr. Yunus Y.',
    'Prof. Dr. Yakup': 'Prof. Dr. Yakup Y.',
    'MD Victor': 'MD Victor V.',
    'MD Murat': 'MD Murat M.',
    'Prof. Dr. Gökhan': 'Prof. Dr. Gökhan K.',
    'Prof. Dr. Gokhan': 'Prof. Dr. Gökhan K.',
    'Dr. Ayşe': 'Dr. Ayşe K.',
    'Dr. Ayse': 'Dr. Ayşe K.',
    'Dr. Ayşe Kaya': 'Dr. Ayşe K.',
    'Dr. Ayse Kaya': 'Dr. Ayşe K.',
    'Dr. Osman': 'Dr. Osman B.',
    'Dr. Osman B.': 'Dr. Osman B.',

    // Lowercase variants for robustness
    'dr. cuma': 'Dr. Cuma A.',
    'md harun': 'MD Harun A.',
    'dr. harun': 'MD Harun A.',
    'dr. yusuf': 'Dr. Yusuf Y.',
    'prof. dr. emre': 'Prof. Dr. Emre E.',
    'op. dr. yunus': 'Op. Dr. Yunus Y.',
    'prof. dr. yakup': 'Prof. Dr. Yakup Y.',
    'md victor': 'MD Victor V.',
    'md murat': 'MD Murat M.',
    'prof. dr. gökhan': 'Prof. Dr. Gökhan K.',
    'prof. dr. gokhan': 'Prof. Dr. Gökhan K.',
    'dr. ayşe': 'Dr. Ayşe K.',
    'dr. ayse': 'Dr. Ayşe K.',
  };

  if (mapping[trimmed]) {
    return mapping[trimmed];
  }

  const lowercaseKey = trimmed.toLowerCase();
  if (mapping[lowercaseKey]) {
    return mapping[lowercaseKey];
  }

  // If there's an exact match in the text (like "Dr. Cuma" inside a sentence), we can replace it
  let formatted = trimmed;
  for (const [key, val] of Object.entries(mapping)) {
    // Avoid double-masking if name is already masked
    if (formatted.includes(val)) continue;
    // Replace whole-word occurrences
    const escapedKey = key.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
    const regex = new RegExp(`\\b${escapedKey}\\b`, 'g');
    formatted = formatted.replace(regex, val);
  }

  return formatted;
}
