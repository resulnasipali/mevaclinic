// scripts/seo-audit.mjs
import { spawn } from 'child_process';
import http from 'http';

const LOCAL_PORT = 3000;
const LOCAL_HOST = `http://localhost:${LOCAL_PORT}`;
const CANONICAL_DOMAIN = 'https://www.mevaclinic.com';

// The 22 exact GSC URLs
const GSC_TEST_URLS = [
  'https://www.mevaclinic.com/fr/despre-noi',
  'https://www.mevaclinic.com/en/despre-noi',
  'https://www.mevaclinic.com/it/despre-noi',
  'https://mevaclinic.com/ro/implant-dentar',
  'https://www.mevaclinic.com/ro/oncologie',
  'https://mevaclinic.com/ro/romani-istanbul',
  'https://www.mevaclinic.com/en/packages/breast-implants',
  'https://www.mevaclinic.com/ro/comparatie-medicala',
  'https://www.mevaclinic.com/ro/despre-noi',
  'https://www.mevaclinic.com/ru/comparatie-medicala',
  'https://www.mevaclinic.com/en/comparatie-medicala',
  'https://www.mevaclinic.com/ru/despre-noi',
  'https://www.mevaclinic.com/de/despre-noi',
  'https://www.mevaclinic.com/fr/comparatie-medicala',
  'https://www.mevaclinic.com/ro/implant-par',
  'https://www.mevaclinic.com/it/comparatie-medicala',
  'https://www.mevaclinic.com/en/gastric-sleeve',
  'https://www.mevaclinic.com/en/oncology',
  'https://mevaclinic.com/en/packages/liposuction-360',
  'https://www.mevaclinic.com/es/comparatie-medicala',
  'https://www.mevaclinic.com/de/comparatie-medicala',
  'https://www.mevaclinic.com/en/hair-transplant'
];



// Function to fetch a URL and follow redirects manually to inspect the chain
async function checkRedirectChain(urlPath, host = LOCAL_HOST) {
  let currentUrl = `${host}${urlPath}`;
  const chain = [];
  let redirectsCount = 0;
  const maxRedirects = 5;

  while (redirectsCount < maxRedirects) {
    const res = await new Promise((resolve, reject) => {
      const req = http.get(currentUrl, (response) => {
        resolve(response);
      });
      req.on('error', (err) => reject(err));
    });

    const status = res.statusCode;
    chain.push({ url: currentUrl, status });

    if (status === 301 || status === 302 || status === 307 || status === 308) {
      let location = res.headers.location;
      if (!location) {
        break;
      }
      // If location is relative, convert to absolute
      if (location.startsWith('/')) {
        currentUrl = `${host}${location}`;
      } else {
        // If it points to production domain, map it to local host for auditing
        if (location.startsWith('https://www.mevaclinic.com')) {
          currentUrl = location.replace('https://www.mevaclinic.com', host);
        } else if (location.startsWith('https://mevaclinic.com')) {
          currentUrl = location.replace('https://mevaclinic.com', host);
        } else {
          currentUrl = location;
        }
      }
      redirectsCount++;
    } else {
      // Consume response body to avoid leaking file descriptors
      let body = '';
      res.setEncoding('utf8');
      for await (const chunk of res) {
        body += chunk;
      }
      return { chain, finalStatus: status, finalBody: body, finalUrl: currentUrl };
    }
  }

  return { chain, finalStatus: 500, finalBody: '', finalUrl: currentUrl, error: 'Max redirects exceeded' };
}

// Extract meta tags using regex
function parseHtmlMetadata(html) {
  const titleMatch = html.match(/<title>([\s\S]*?)<\/title>/i);
  const title = titleMatch ? titleMatch[1].trim() : 'MISSING';

  const canonicalMatch = html.match(/<link\s+[^>]*rel=["']canonical["'][^>]*href=["'](.*?)["']/i);
  const canonical = canonicalMatch ? canonicalMatch[1] : 'MISSING';

  const robotsMatch = html.match(/<meta\s+[^>]*name=["']robots["'][^>]*content=["'](.*?)["']/i) ||
                      html.match(/<meta\s+[^>]*content=["'](.*?)["'][^>]*name=["']robots["']/i);
  const robots = robotsMatch ? robotsMatch[1] : 'MISSING';

  const descMatch = html.match(/<meta\s+[^>]*name=["']description["'][^>]*content=["']([\s\S]*?)["']/i) ||
                    html.match(/<meta\s+[^>]*content=["']([\s\S]*?)["'][^>]*name=["']description["']/i);
  const description = descMatch ? descMatch[1].trim() : 'MISSING';

  // Find all H1s
  const h1Regex = /<h1[^>]*>([\s\S]*?)<\/h1>/gi;
  const h1s = [];
  let match;
  while ((match = h1Regex.exec(html)) !== null) {
    h1s.push(match[1].replace(/<[^>]*>/g, '').trim());
  }

  return { title, canonical, robots, description, h1s };
}

// Fetch Sitemap and parse URLs
async function getSitemapUrls(host = LOCAL_HOST) {
  return new Promise((resolve) => {
    http.get(`${host}/sitemap.xml`, (res) => {
      let body = '';
      res.on('data', (chunk) => body += chunk);
      res.on('end', () => {
        // Extract all <loc> contents
        const locRegex = /<loc>(.*?)<\/loc>/g;
        const urls = [];
        let match;
        while ((match = locRegex.exec(body)) !== null) {
          urls.push(match[1]);
        }
        resolve(urls);
      });
    }).on('error', () => {
      resolve([]);
    });
  });
}

async function runAudit() {
  console.log('=== Starting SEO Audit ===\n');

  console.log('Fetching sitemap URLs...');
  const sitemapUrls = await getSitemapUrls();
  console.log(`Found ${sitemapUrls.length} URLs in the sitemap.\n`);

  let passedTests = 0;
  const results = [];

  for (const rawUrl of GSC_TEST_URLS) {
    // Parse the path of the URL
    const urlObj = new URL(rawUrl);
    const path = urlObj.pathname;

    console.log(`Auditing path: ${path} (from ${rawUrl})`);
    const { chain, finalStatus, finalBody, finalUrl } = await checkRedirectChain(path);

    const redirectPath = chain.length > 1 ? new URL(chain[chain.length - 1].url).pathname : 'None';
    const isRedirect = chain.length > 1;

    let seo = { title: 'N/A', canonical: 'N/A', robots: 'N/A', description: 'N/A', h1s: [] };
    if (finalStatus === 200 && finalBody) {
      seo = parseHtmlMetadata(finalBody);
    }

    // Check if the original path is in the sitemap
    // (Either using the rawUrl hostname or just matching path suffix)
    const inSitemap = sitemapUrls.some(sUrl => {
      try {
        return new URL(sUrl).pathname === path;
      } catch {
        return false;
      }
    });

    // Verify if final URL is indexable: must be 200 OK, canonical matches final URL, and no "noindex" robots tag
    const finalUrlObj = new URL(finalUrl);
    const expectedCanonical = `${CANONICAL_DOMAIN}${finalUrlObj.pathname}`;
    const canonicalMatches = seo.canonical === expectedCanonical;
    const noNoindex = !seo.robots.toLowerCase().includes('noindex');
    const isIndexable = finalStatus === 200 && canonicalMatches && noNoindex;

    results.push({
      originalUrl: rawUrl,
      initialStatus: chain[0].status,
      isRedirect,
      redirectDestination: redirectPath,
      finalUrl: finalUrlObj.pathname,
      finalStatus,
      title: seo.title,
      canonical: seo.canonical,
      h1s: seo.h1s,
      robots: seo.robots,
      inSitemap,
      isIndexable
    });

    // Print summary for this URL
    console.log(`  Initial Status: ${chain[0].status}`);
    if (isRedirect) {
      console.log(`  Redirect Chain: ${chain.map(c => `${c.status}`).join(' -> ')}`);
      console.log(`  Final Destination: ${finalUrlObj.pathname}`);
    }
    console.log(`  Final Status: ${finalStatus}`);
    console.log(`  Canonical: ${seo.canonical} (${canonicalMatches ? 'MATCH' : 'MISMATCH'})`);
    console.log(`  H1s: [${seo.h1s.join(', ')}]`);
    console.log(`  Robots: ${seo.robots}`);
    console.log(`  In Sitemap: ${inSitemap ? '❌ YES (Failing)' : '✅ NO (Passing)'}`);
    console.log(`  Indexable: ${isIndexable ? '✅ YES' : '❌ NO'}`);
    console.log('-'.repeat(50));

    if (finalStatus === 200 && !inSitemap && isIndexable) {
      passedTests++;
    }
  }

  // Print final validation table
  console.log('\n=== GSC 404 URL Audit Summary ===\n');
  console.table(results.map(r => ({
    'Original URL Path': new URL(r.originalUrl).pathname,
    'Init Status': r.initialStatus,
    'Final Path': r.finalUrl,
    'Final Status': r.finalStatus,
    'H1 Count': r.h1s.length,
    'In Sitemap': r.inSitemap ? 'YES (Err)' : 'NO',
    'Indexable': r.isIndexable ? 'YES' : 'NO'
  })));

  // Validate sitemap exclusions in bulk
  const sitemapDeprecatedCount = sitemapUrls.filter(sUrl => {
    try {
      const sPath = new URL(sUrl).pathname;
      return GSC_TEST_URLS.some(gUrl => new URL(gUrl).pathname === sPath);
    } catch {
      return false;
    }
  }).length;

  console.log(`\nSitemap validation: ${sitemapDeprecatedCount} deprecated URLs found in sitemap.`);
  
  const allPassed = passedTests === GSC_TEST_URLS.length && sitemapDeprecatedCount === 0;
  if (allPassed) {
    console.log('\n✅ All technical SEO validations PASSED successfully!');
    process.exit(0);
  } else {
    console.error('\n❌ SEO validations failed. Check the errors above.');
    process.exit(1);
  }
}

// Start Next.js dev server, wait for it to be ready, run audit, then kill dev server
function startServerAndAudit() {
  console.log('Building Next.js production app (npm run build)...');
  const buildProc = spawn('npm', ['run', 'build'], { shell: true, stdio: 'inherit' });

  buildProc.on('exit', (code) => {
    if (code !== 0) {
      console.error('Build failed. Aborting SEO audit.');
      process.exit(1);
    }

    console.log('\nStarting Next.js production server (npm run start)...');
    const serverProc = spawn('npm', ['run', 'start'], { shell: true });

    let started = false;
    serverProc.stdout.on('data', (data) => {
      const output = data.toString();
      console.log(`[Next.js Server] ${output.trim()}`);
      if (!started && (output.includes('ready') || output.includes('started server') || output.includes('localhost:3000') || output.includes('http://localhost:3000'))) {
        started = true;
        // Wait another 3 seconds to be safe
        setTimeout(() => {
          runAudit().finally(() => {
            console.log('Stopping Next.js server...');
            serverProc.kill();
          });
        }, 3000);
      }
    });

    serverProc.stderr.on('data', (data) => {
      console.error(`[Next.js Error] ${data.toString()}`);
    });

    serverProc.on('error', (err) => {
      console.error('Failed to start server:', err);
      process.exit(1);
    });
    
    serverProc.on('exit', (code) => {
      console.log(`Server process exited with code ${code}`);
    });
  });
}

startServerAndAudit();
