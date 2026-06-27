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
    'Dr. Cuma': 'Op. Dr. Cuma A.',
    'MD Harun': 'Dr. Harun A.',
    'Dr. Harun': 'Dr. Harun A.',
    'Dr. Yusuf': 'Dt. Yusuf Y.',
    'Prof. Dr. Emre': 'Prof. Dr. Emre K.',
    'Op. Dr. Yunus': 'Op. Dr. Yunus E.',
    'Prof. Dr. Yakup': 'Prof. Dr. Yakup Ç.',
    'MD Victor': 'MD Victor V.',
    'MD Murat': 'MD Murat M.',
    'Prof. Dr. Gökhan': 'Prof. Dr. Gökhan K.',
    'Prof. Dr. Gokhan': 'Prof. Dr. Gökhan K.',
    'Dr. Ayşe': 'Dr. Ayşe K.',
    'Dr. Ayse': 'Dr. Ayşe K.',
    'Dr. Ayşe Kaya': 'Dr. Ayşe K.',
    'Dr. Ayse Kaya': 'Dr. Ayşe K.',
    'Dr. Osman': 'Dt. Osman B.',
    'Dr. Osman B.': 'Dt. Osman B.',

    // Lowercase variants for robustness
    'dr. cuma': 'Op. Dr. Cuma A.',
    'md harun': 'Dr. Harun A.',
    'dr. harun': 'Dr. Harun A.',
    'dr. yusuf': 'Dt. Yusuf Y.',
    'prof. dr. emre': 'Prof. Dr. Emre K.',
    'op. dr. yunus': 'Op. Dr. Yunus E.',
    'prof. dr. yakup': 'Prof. Dr. Yakup Ç.',
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
