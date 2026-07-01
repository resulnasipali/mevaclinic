/**
 * Utility to format/mask doctor names to their safe UI representation.
 * Generic compliance safety net: detects doctor patterns (titles, initials)
 * and maps them dynamically to institutional review boards without storing explicit names.
 */

export function maskDoctorName(name: string | null | undefined, category?: string): string {
  if (!name) return '';
  const trimmed = name.trim();
  const lower = trimmed.toLowerCase();

  // If already formatted as a board, committee, team, or pathway, return as-is
  if (
    lower.includes('board') ||
    lower.includes('team') ||
    lower.includes('committee') ||
    lower.includes('editorial') ||
    lower.includes('pathway')
  ) {
    return trimmed;
  }

  // Doctor indicator patterns: titles (Dr, Prof, Op, Dt, MD, Uzm) or initials
  const doctorRegex = /\b(dr|prof|op|dt|md|uzm)\b/i;
  
  // Detect initials unless they are part of HA (Hyaluronic Acid) filler context
  const isInitials = /\b([A-Z]{2})\b/.test(trimmed) && 
                     !lower.includes('ha filler') && 
                     !lower.includes('filler ha') &&
                     !lower.includes('acid');

  const hasDoctorSignal = doctorRegex.test(trimmed) || isInitials;

  if (hasDoctorSignal) {
    // Resolve category context
    let cat = (category || '').toLowerCase();
    
    if (!cat) {
      // Heuristic inference based on string keywords
      if (
        lower.includes('sleeve') ||
        lower.includes('bypass') ||
        lower.includes('balloon') ||
        lower.includes('bariatric') ||
        lower.includes('weight') ||
        lower.includes('stomach') ||
        lower.includes('obesity')
      ) {
        cat = 'bariatric';
      } else if (
        lower.includes('hair') ||
        lower.includes('transplant') ||
        lower.includes('follicle') ||
        lower.includes('trichology')
      ) {
        cat = 'hair';
      } else if (
        lower.includes('dental') ||
        lower.includes('implant') ||
        lower.includes('tooth') ||
        lower.includes('teeth') ||
        lower.includes('stomatology')
      ) {
        cat = 'dental';
      } else if (
        lower.includes('plastic') ||
        lower.includes('aesthetic') ||
        lower.includes('lifting') ||
        lower.includes('rhinoplasty') ||
        lower.includes('liposuction') ||
        lower.includes('breast') ||
        lower.includes('mommy')
      ) {
        cat = 'plastic';
      } else if (
        lower.includes('ivf') ||
        lower.includes('fertility') ||
        lower.includes('embryology')
      ) {
        cat = 'fertility';
      } else if (
        lower.includes('oncology') ||
        lower.includes('cancer') ||
        lower.includes('cyberknife') ||
        lower.includes('radiosurgery')
      ) {
        cat = 'oncology';
      }
    }

    if (cat === 'bariatric') {
      return 'Bariatric Surgery Medical Review Board';
    }
    if (cat === 'hair') {
      return 'Hair Restoration Medical Review Board';
    }
    if (cat === 'dental') {
      return 'Dental Medical Review Board';
    }
    if (cat === 'plastic') {
      return 'Plastic Surgery Medical Review Board';
    }
    if (cat === 'fertility') {
      return 'Fertility Coordination Medical Review Board';
    }
    if (cat === 'oncology') {
      return 'Oncology Coordination Medical Review Board';
    }
    
    return 'Meva Clinic Medical Review Board';
  }

  return trimmed;
}
