const fs = require('fs');
const path = require('path');
const https = require('https');
const sharp = require('sharp');

const IMAGES_DIR = path.join(__dirname, '..', 'public', 'images');

// Helper function to download a file
function downloadFile(url, destPath) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(destPath);
    https.get(url, (response) => {
      if (response.statusCode !== 200) {
        reject(new Error(`Failed to download ${url}: Status code ${response.statusCode}`));
        return;
      }
      response.pipe(file);
      file.on('finish', () => {
        file.close(resolve);
      });
    }).on('error', (err) => {
      fs.unlink(destPath, () => {}); // Delete temporary file
      reject(err);
    });
  });
}

async function run() {
  try {
    console.log('Starting S-Tier Image Optimization process with sharp...');

    // 1. Optimize hospital.webp (Resize to 500x500)
    const hospitalSrc = path.join(IMAGES_DIR, 'hospital.webp');
    const hospitalTemp = path.join(IMAGES_DIR, 'hospital_temp.webp');
    if (fs.existsSync(hospitalSrc)) {
      console.log('Optimizing hospital.webp...');
      // Load file into buffer first to prevent Windows EPERM file lock
      const hospitalBuf = fs.readFileSync(hospitalSrc);
      await sharp(hospitalBuf)
        .resize(500, 500)
        .webp({ quality: 80 })
        .toFile(hospitalTemp);
      
      // Delete original and rename temp
      fs.unlinkSync(hospitalSrc);
      fs.renameSync(hospitalTemp, hospitalSrc);
      console.log(`Successfully optimized hospital.webp. New size: ${(fs.statSync(hospitalSrc).size / 1024).toFixed(1)} KB`);
    } else {
      console.warn('Warning: hospital.webp not found!');
    }

    // 2. Optimize meva-logo-premium.png (Resize to 440px width, compress PNG)
    const logoSrc = path.join(IMAGES_DIR, 'meva-logo-premium.png');
    const logoTemp = path.join(IMAGES_DIR, 'logo_temp.png');
    if (fs.existsSync(logoSrc)) {
      console.log('Optimizing meva-logo-premium.png (9.75 MB original)...');
      // Load file into buffer first to prevent Windows EPERM file lock
      const logoBuf = fs.readFileSync(logoSrc);
      await sharp(logoBuf)
        .resize(440) // w: 440, h: auto
        .png({ compressionLevel: 9, palette: true }) // optimized palette-based PNG compression
        .toFile(logoTemp);
      
      // Delete original and rename temp
      fs.unlinkSync(logoSrc);
      fs.renameSync(logoTemp, logoSrc);
      console.log(`Successfully optimized meva-logo-premium.png. New size: ${(fs.statSync(logoSrc).size / 1024).toFixed(1)} KB`);
    } else {
      console.warn('Warning: meva-logo-premium.png not found!');
    }

    // 3. Download & optimize broken Unsplash replacement images
    const tempBucharest = path.join(IMAGES_DIR, 'temp_bucharest.jpg');
    const destBucharest = path.join(IMAGES_DIR, 'bucharest-istanbul.webp');
    console.log('Downloading Bucharest-Istanbul replacement image...');
    await downloadFile(
      'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800&q=80',
      tempBucharest
    );
    console.log('Converting Bucharest-Istanbul to compressed WebP...');
    const buchBuf = fs.readFileSync(tempBucharest);
    await sharp(buchBuf)
      .resize(600)
      .webp({ quality: 80 })
      .toFile(destBucharest);
    fs.unlinkSync(tempBucharest);
    console.log(`Saved bucharest-istanbul.webp. Size: ${(fs.statSync(destBucharest).size / 1024).toFixed(1)} KB`);

    const tempTransform = path.join(IMAGES_DIR, 'temp_transform.jpg');
    const destTransform = path.join(IMAGES_DIR, 'transformation.webp');
    console.log('Downloading Transformation testimonial replacement image...');
    await downloadFile(
      'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?w=800&q=80',
      tempTransform
    );
    console.log('Converting Transformation testimonial to compressed WebP...');
    const transBuf = fs.readFileSync(tempTransform);
    await sharp(transBuf)
      .resize(600)
      .webp({ quality: 80 })
      .toFile(destTransform);
    fs.unlinkSync(tempTransform);
    console.log(`Saved transformation.webp. Size: ${(fs.statSync(destTransform).size / 1024).toFixed(1)} KB`);

    console.log('Image optimization process completed successfully!');
  } catch (error) {
    console.error('Error during image optimization:', error);
    process.exit(1);
  }
}

run();
