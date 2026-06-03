import fs from 'fs';
import path from 'path';

export interface TreatmentImage {
  url: string;
  alt: string;
  caption: string;
}

export function getTreatmentImages(slug: string, title: string = '', lang: string = 'en'): TreatmentImage[] {
  try {
    const imagesDirectory = path.join(process.cwd(), 'public', 'images', 'procedures', slug);
    
    // Check if directory exists
    if (!fs.existsSync(imagesDirectory)) {
      return [];
    }

    const fileNames = fs.readdirSync(imagesDirectory);
    
    // Filter only images
    const imageFiles = fileNames.filter(file => {
      const ext = path.extname(file).toLowerCase();
      return ['.jpg', '.jpeg', '.png', '.webp', '.avif', '.gif'].includes(ext);
    });

    // Return the public URLs with SEO data
    return imageFiles.map((file, index) => {
      let alt = `${title} - Case ${index + 1}`;
      let caption = `Premium ${title} Results`;
      
      if (lang === 'ro') {
        alt = `Rezultate ${title} - Cazul ${index + 1}`;
        caption = `Rezultate Premium ${title}`;
      } else if (lang === 'it') {
        alt = `Risultati ${title} - Caso ${index + 1}`;
        caption = `Risultati Premium ${title}`;
      } else if (lang === 'es') {
        alt = `Resultados ${title} - Caso ${index + 1}`;
        caption = `Resultados Premium ${title}`;
      } else if (lang === 'fr') {
        alt = `Résultats ${title} - Cas ${index + 1}`;
        caption = `Résultats Premium ${title}`;
      } else if (lang === 'de') {
        alt = `Ergebnisse ${title} - Fall ${index + 1}`;
        caption = `Premium ${title} Ergebnisse`;
      } else if (lang === 'ru') {
        alt = `Результаты ${title} - Случай ${index + 1}`;
        caption = `Премиум результаты ${title}`;
      }

      return {
        url: `/images/procedures/${slug}/${file}`,
        alt,
        caption
      };
    });
  } catch (error) {
    console.error(`Error reading images for procedure ${slug}:`, error);
    return [];
  }
}
