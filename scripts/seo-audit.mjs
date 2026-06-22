// scripts/seo-audit.mjs
import { spawn } from 'child_process';
import http from 'http';
import { URL } from 'url';

const LOCAL_PORT = 3000;
const LOCAL_HOST = `http://localhost:${LOCAL_PORT}`;
const CANONICAL_DOMAIN = 'https://www.mevaclinic.com';

// Define the audit test URLs with their group, expected behavior, and expected sitemap presence
const TEST_URLS = [
  // --- PHASE 1 GSC 404 URLS ---
  { url: 'https://www.mevaclinic.com/fr/despre-noi', group: 'Phase 1 - 404', isRedirect: true, expectSitemap: false, action: 'Redirect to /fr/about-us' },
  { url: 'https://www.mevaclinic.com/en/despre-noi', group: 'Phase 1 - 404', isRedirect: true, expectSitemap: false, action: 'Redirect to /en/about-us' },
  { url: 'https://www.mevaclinic.com/it/despre-noi', group: 'Phase 1 - 404', isRedirect: true, expectSitemap: false, action: 'Redirect to /it/about-us' },
  { url: 'https://mevaclinic.com/ro/implant-dentar', group: 'Phase 1 - 404', isRedirect: true, expectSitemap: false, action: 'Redirect to /ro/treatments/dental-implants' },
  { url: 'https://www.mevaclinic.com/ro/oncologie', group: 'Phase 1 - 404', isRedirect: true, expectSitemap: false, action: 'Redirect to /ro/treatments/smart-oncology-drugs' },
  { url: 'https://mevaclinic.com/ro/romani-istanbul', group: 'Phase 1 - 404', isRedirect: true, expectSitemap: false, action: 'Redirect to /ro/about-us' },
  { url: 'https://www.mevaclinic.com/en/packages/breast-implants', group: 'Phase 1 - 404', isRedirect: true, expectSitemap: false, action: 'Redirect to /en/treatments/breast-augmentation' },
  { url: 'https://www.mevaclinic.com/ro/comparatie-medicala', group: 'Phase 1 - 404', isRedirect: true, expectSitemap: false, action: 'Redirect to /ro/medical-comparison' },
  { url: 'https://www.mevaclinic.com/ro/despre-noi', group: 'Phase 1 - 404', isRedirect: true, expectSitemap: false, action: 'Redirect to /ro/about-us' },
  { url: 'https://www.mevaclinic.com/ru/comparatie-medicala', group: 'Phase 1 - 404', isRedirect: true, expectSitemap: false, action: 'Redirect to /ru/medical-comparison' },
  { url: 'https://www.mevaclinic.com/en/comparatie-medicala', group: 'Phase 1 - 404', isRedirect: true, expectSitemap: false, action: 'Redirect to /en/medical-comparison' },
  { url: 'https://www.mevaclinic.com/ru/despre-noi', group: 'Phase 1 - 404', isRedirect: true, expectSitemap: false, action: 'Redirect to /ru/about-us' },
  { url: 'https://www.mevaclinic.com/de/despre-noi', group: 'Phase 1 - 404', isRedirect: true, expectSitemap: false, action: 'Redirect to /de/about-us' },
  { url: 'https://www.mevaclinic.com/fr/comparatie-medicala', group: 'Phase 1 - 404', isRedirect: true, expectSitemap: false, action: 'Redirect to /fr/medical-comparison' },
  { url: 'https://www.mevaclinic.com/ro/implant-par', group: 'Phase 1 - 404', isRedirect: true, expectSitemap: false, action: 'Redirect to /ro/treatments/meva-mixed-hair' },
  { url: 'https://www.mevaclinic.com/it/comparatie-medicala', group: 'Phase 1 - 404', isRedirect: true, expectSitemap: false, action: 'Redirect to /it/medical-comparison' },
  { url: 'https://www.mevaclinic.com/en/gastric-sleeve', group: 'Phase 1 - 404', isRedirect: true, expectSitemap: false, action: 'Redirect to /en/treatments/gastric-sleeve' },
  { url: 'https://www.mevaclinic.com/en/oncology', group: 'Phase 1 - 404', isRedirect: true, expectSitemap: false, action: 'Redirect to /en/treatments/smart-oncology-drugs' },
  { url: 'https://mevaclinic.com/en/packages/liposuction-360', group: 'Phase 1 - 404', isRedirect: true, expectSitemap: false, action: 'Redirect to /en/treatments/vaser-liposuction' },
  { url: 'https://www.mevaclinic.com/es/comparatie-medicala', group: 'Phase 1 - 404', isRedirect: true, expectSitemap: false, action: 'Redirect to /es/medical-comparison' },
  { url: 'https://www.mevaclinic.com/de/comparatie-medicala', group: 'Phase 1 - 404', isRedirect: true, expectSitemap: false, action: 'Redirect to /de/medical-comparison' },
  { url: 'https://www.mevaclinic.com/en/hair-transplant', group: 'Phase 1 - 404', isRedirect: true, expectSitemap: false, action: 'Redirect to /en/treatments/meva-mixed-hair' },

  // --- GROUP A: Page with redirect ---
  { url: 'https://www.mevaclinic.com/blog/anesthesia-safety-protocols', group: 'Group A', isRedirect: true, expectSitemap: false, action: 'Redirect to /en/blog/anesthesia-safety-protocols' },
  { url: 'https://www.mevaclinic.com/blog/organ-transplant-ethics-excellence', group: 'Group A', isRedirect: true, expectSitemap: false, action: 'Redirect to /en/blog/organ-transplant-ethics-excellence' },
  { url: 'http://mevaclinic.com/', group: 'Group A', isRedirect: true, expectSitemap: false, action: 'Redirect/Normalize domain to www' },
  { url: 'https://mevaclinic.com/', group: 'Group A', isRedirect: true, expectSitemap: false, action: 'Redirect/Normalize domain to www' },
  { url: 'https://www.mevaclinic.com/', group: 'Group A', isRedirect: true, expectSitemap: false, action: 'Redirect to /en' },
  { url: 'https://mevaclinic.com/ro', group: 'Group A', isRedirect: true, expectSitemap: false, action: 'Redirect/Normalize domain to www' },
  { url: 'https://www.mevaclinic.com/blog/immunotherapy-breakthroughs', group: 'Group A', isRedirect: true, expectSitemap: false, action: 'Redirect to /en/blog/immunotherapy-breakthroughs' },
  { url: 'https://www.mevaclinic.com/treatments/smart-oncology-drugs', group: 'Group A', isRedirect: true, expectSitemap: false, action: 'Redirect to /en/treatments/smart-oncology-drugs' },
  { url: 'https://www.mevaclinic.com/blog/istanbul-to-cyprus-ivf-travel-guide', group: 'Group A', isRedirect: true, expectSitemap: false, action: 'Redirect to /en/blog/istanbul-to-cyprus-ivf-travel-guide' },
  { url: 'https://www.mevaclinic.com/blog/post-op-logistics-istanbul', group: 'Group A', isRedirect: true, expectSitemap: false, action: 'Redirect to /en/blog/post-op-logistics-istanbul' },
  { url: 'https://www.mevaclinic.com/treatments/organ-transplant-turkey', group: 'Group A', isRedirect: true, expectSitemap: false, action: 'Redirect to /en/treatments/organ-transplant-turkey' },
  { url: 'https://www.mevaclinic.com/blog/exosome-therapy-healing', group: 'Group A', isRedirect: true, expectSitemap: false, action: 'Redirect to /en/blog/exosome-therapy-healing' },
  { url: 'https://www.mevaclinic.com/blog/bariatric-precision-robotics', group: 'Group A', isRedirect: true, expectSitemap: false, action: 'Redirect to /en/blog/bariatric-precision-robotics' },
  { url: 'https://www.mevaclinic.com/blog/cyberknife-s7-oncology', group: 'Group A', isRedirect: true, expectSitemap: false, action: 'Redirect to /en/blog/cyberknife-s7-oncology' },
  { url: 'https://mevaclinic.com/blog/ngs-ai-embryo-selection-ivf', group: 'Group A', isRedirect: true, expectSitemap: false, action: 'Redirect/Normalize domain to www' },
  { url: 'http://www.mevaclinic.com/', group: 'Group A', isRedirect: true, expectSitemap: false, action: 'Redirect to https://www.mevaclinic.com' },
  { url: 'https://www.mevaclinic.com/contact', group: 'Group A', isRedirect: true, expectSitemap: false, action: 'Redirect to /en/contact' },
  { url: 'https://mevaclinic.com/medical-comparison', group: 'Group A', isRedirect: true, expectSitemap: false, action: 'Redirect/Normalize domain to www' },

  // --- GROUP B: Alternate canonical / duplicate-like ---
  { url: 'https://mevaclinic.com/de', group: 'Group B', isRedirect: true, expectSitemap: false, action: 'Redirect/Normalize domain to www' },
  { url: 'https://mevaclinic.com/en', group: 'Group B', isRedirect: true, expectSitemap: false, action: 'Redirect/Normalize domain to www' },
  { url: 'https://mevaclinic.com/en/medical-comparison', group: 'Group B', isRedirect: true, expectSitemap: false, action: 'Redirect/Normalize domain to www' },
  { url: 'https://mevaclinic.com/en/quiz', group: 'Group B', isRedirect: true, expectSitemap: false, action: 'Redirect/Normalize domain to www' },
  { url: 'https://mevaclinic.com/ru/medical-comparison', group: 'Group B', isRedirect: true, expectSitemap: false, action: 'Redirect/Normalize domain to www' },
  { url: 'https://mevaclinic.com/fr/medical-comparison', group: 'Group B', isRedirect: true, expectSitemap: false, action: 'Redirect/Normalize domain to www' },
  { url: 'https://mevaclinic.com/ru/treatments/gastric-sleeve', group: 'Group B', isRedirect: true, expectSitemap: false, action: 'Redirect/Normalize domain to www' },
  { url: 'https://mevaclinic.com/en/blog/ngs-ai-embryo-selection-ivf', group: 'Group B', isRedirect: true, expectSitemap: false, action: 'Redirect/Normalize domain to www' },
  { url: 'https://mevaclinic.com/ru/blog/immunotherapy-breakthroughs', group: 'Group B', isRedirect: true, expectSitemap: false, action: 'Redirect/Normalize domain to www' },
  { url: 'https://mevaclinic.com/ru/contact', group: 'Group B', isRedirect: true, expectSitemap: false, action: 'Redirect/Normalize domain to www' },
  { url: 'https://mevaclinic.com/it/medical-comparison', group: 'Group B', isRedirect: true, expectSitemap: false, action: 'Redirect/Normalize domain to www' },
  { url: 'https://mevaclinic.com/en/packages/gastric-balloon', group: 'Group B', isRedirect: true, expectSitemap: false, action: 'Redirect package route to treatment' },
  { url: 'https://www.mevaclinic.com/en/piezo-rhinoplasty', group: 'Group B', isRedirect: true, expectSitemap: false, action: 'Redirect to /en/treatments/piezo-rhinoplasty' },
  { url: 'https://mevaclinic.com/en/treatments/smart-oncology-drugs', group: 'Group B', isRedirect: true, expectSitemap: false, action: 'Redirect/Normalize domain to www' },
  { url: 'https://mevaclinic.com/es/medical-comparison', group: 'Group B', isRedirect: true, expectSitemap: false, action: 'Redirect/Normalize domain to www' },
  { url: 'https://mevaclinic.com/de/medical-comparison', group: 'Group B', isRedirect: true, expectSitemap: false, action: 'Redirect/Normalize domain to www' },

  // --- GROUP C: Possible noindex / wrong hair transplant localized slug ---
  { url: 'https://www.mevaclinic.com/it/treatments/hair-transplant', group: 'Group C', isRedirect: true, expectSitemap: false, action: 'Redirect to /it/treatments/meva-mixed-hair' },
  { url: 'https://www.mevaclinic.com/ru/treatments/hair-transplant', group: 'Group C', isRedirect: true, expectSitemap: false, action: 'Redirect to /ru/treatments/meva-mixed-hair' },
  { url: 'https://www.mevaclinic.com/es/treatments/hair-transplant', group: 'Group C', isRedirect: true, expectSitemap: false, action: 'Redirect to /es/treatments/meva-mixed-hair' },
  { url: 'https://www.mevaclinic.com/fr/treatments/hair-transplant', group: 'Group C', isRedirect: true, expectSitemap: false, action: 'Redirect to /fr/treatments/meva-mixed-hair' },

  // --- GROUP D: Route generation bug ---
  { url: 'https://www.mevaclinic.com/ro/undefined', group: 'Group D', isRedirect: true, expectSitemap: false, action: 'Redirect to /ro/about-us' },

  // --- GROUP E: Crawled, currently not indexed ---
  { url: 'https://www.mevaclinic.com/en/blog/ovarian-prp-low-amh-treatment', group: 'Group E', isRedirect: false, expectSitemap: true, action: 'None' },
  { url: 'https://www.mevaclinic.com/fr/treatments/organ-transplant-turkey', group: 'Group E', isRedirect: false, expectSitemap: true, action: 'None' },
  { url: 'https://www.mevaclinic.com/ro/blog/immunotherapy-breakthroughs', group: 'Group E', isRedirect: false, expectSitemap: true, action: 'None' },
  { url: 'https://www.mevaclinic.com/es/blog/istanbul-to-cyprus-ivf-travel-guide', group: 'Group E', isRedirect: false, expectSitemap: true, action: 'None' },
  { url: 'https://www.mevaclinic.com/es/blog/dental-3d-smile-design', group: 'Group E', isRedirect: false, expectSitemap: true, action: 'None' },
  { url: 'https://www.mevaclinic.com/fr/blog/immunotherapy-breakthroughs', group: 'Group E', isRedirect: false, expectSitemap: true, action: 'None' },
  { url: 'https://www.mevaclinic.com/favicon.ico?favicon.0a6lxq-dzl.it.ico', group: 'Group E', isRedirect: false, expectSitemap: false, expectIndexable: false, action: 'None' },
  { url: 'https://www.mevaclinic.com/en/treatments/vaser-liposuction', group: 'Group E', isRedirect: false, expectSitemap: true, action: 'None' },
  { url: 'https://www.mevaclinic.com/ro/blog/jci-standards-importance', group: 'Group E', isRedirect: false, expectSitemap: true, action: 'None' }
];

// Function to fetch a URL and follow redirects manually to inspect the chain locally
async function checkRedirectChain(originalUrl, host = LOCAL_HOST) {
  const parsedOriginal = new URL(originalUrl);
  let currentUrl = `${host}${parsedOriginal.pathname}${parsedOriginal.search}`;
  let currentHostHeader = parsedOriginal.host;

  const chain = [];
  let redirectsCount = 0;
  const maxRedirects = 5;

  while (redirectsCount < maxRedirects) {
    const parsedCurrent = new URL(currentUrl);
    const res = await new Promise((resolve, reject) => {
      const options = {
        headers: {
          'Host': currentHostHeader,
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
        }
      };
      const req = http.get(currentUrl, options, (response) => {
        resolve(response);
      });
      req.on('error', (err) => reject(err));
    });

    const status = res.statusCode;
    chain.push({ url: currentUrl, status });

    if ([301, 302, 307, 308].includes(status)) {
      let location = res.headers.location;
      if (!location) {
        break;
      }
      if (location.startsWith('/')) {
        currentUrl = `${host}${location}`;
      } else {
        const parsedLocation = new URL(location);
        currentHostHeader = parsedLocation.host;
        
        if (parsedLocation.hostname === 'www.mevaclinic.com' || parsedLocation.hostname === 'mevaclinic.com') {
          currentUrl = `${host}${parsedLocation.pathname}${parsedLocation.search}`;
        } else {
          currentUrl = location;
        }
      }
      redirectsCount++;
    } else {
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

  const h1Regex = /<h1[^>]*>([\s\S]*?)<\/h1>/gi;
  const h1s = [];
  let match;
  while ((match = h1Regex.exec(html)) !== null) {
    h1s.push(match[1].replace(/<[^>]*>/g, '').trim());
  }

  return { title, canonical, robots, h1s };
}

// Fetch Sitemap and parse URLs
async function getSitemapUrls(host = LOCAL_HOST) {
  return new Promise((resolve) => {
    http.get(`${host}/sitemap.xml`, (res) => {
      let body = '';
      res.on('data', (chunk) => body += chunk);
      res.on('end', () => {
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

  console.log('Fetching local sitemap URLs...');
  const sitemapUrls = await getSitemapUrls();
  console.log(`Found ${sitemapUrls.length} URLs in the local sitemap.\n`);

  let passedTests = 0;
  const results = [];

  for (const item of TEST_URLS) {
    const rawUrl = item.url;
    const urlObj = new URL(rawUrl);
    const path = urlObj.pathname + urlObj.search;

    console.log(`Auditing group [${item.group}] path: ${path}`);
    const { chain, finalStatus, finalBody, finalUrl } = await checkRedirectChain(rawUrl);

    const redirectPath = chain.length > 1 ? new URL(chain[chain.length - 1].url).pathname : 'None';
    const isRedirected = chain.length > 1;

    let seo = { title: 'N/A', canonical: 'N/A', robots: 'N/A', h1s: [] };
    if (finalStatus === 200 && finalBody) {
      seo = parseHtmlMetadata(finalBody);
    }

    // Check if the original path is in the sitemap (matching both hostname and pathname)
    const inSitemap = sitemapUrls.some(sUrl => {
      try {
        const sUrlObj = new URL(sUrl);
        return sUrlObj.pathname === urlObj.pathname && sUrlObj.hostname === urlObj.hostname;
      } catch {
        return false;
      }
    });

    const finalUrlObj = new URL(finalUrl);
    const expectedCanonical = `${CANONICAL_DOMAIN}${finalUrlObj.pathname}`;
    const canonicalMatches = seo.canonical === expectedCanonical;
    const noNoindex = !seo.robots.toLowerCase().includes('noindex');
    
    // For redirect routes, they should redirect. For active pages, they should be 200.
    const statusMatchesExpected = item.isRedirect ? isRedirected : (finalStatus === 200);
    const sitemapMatchesExpected = inSitemap === item.expectSitemap;
    
    // Indexability check for 200 destinations
    const isIndexable = finalStatus === 200 && (seo.canonical === 'N/A' || canonicalMatches) && noNoindex;
    
    const expectIndexable = item.expectIndexable !== false;
    const isOk = statusMatchesExpected && sitemapMatchesExpected && (!item.isRedirect && expectIndexable ? isIndexable : true);

    results.push({
      groupName: item.group,
      originalUrlPath: path,
      status: chain[0].status,
      isRedirected,
      finalUrlPath: finalUrlObj.pathname,
      finalStatus,
      title: seo.title,
      canonical: seo.canonical,
      h1Count: seo.h1s.length,
      robots: seo.robots,
      inSitemap,
      isIndexable,
      actionNeeded: isOk ? 'None' : item.action
    });

    console.log(`  Initial Status: ${chain[0].status}`);
    if (isRedirected) {
      console.log(`  Redirect Chain: ${chain.map(c => `${c.status}`).join(' -> ')}`);
      console.log(`  Final Destination: ${finalUrlObj.pathname}`);
    }
    console.log(`  Final Status: ${finalStatus}`);
    console.log(`  Canonical: ${seo.canonical} (Expected: ${expectedCanonical})`);
    console.log(`  H1s: [${seo.h1s.join(', ')}]`);
    console.log(`  Robots: ${seo.robots}`);
    console.log(`  In Sitemap: ${inSitemap} (Expected: ${item.expectSitemap})`);
    console.log(`  Indexable: ${isIndexable}`);
    console.log(`  Test Result: ${isOk ? '✅ PASS' : '❌ FAIL'}`);
    console.log('-'.repeat(50));

    if (isOk) {
      passedTests++;
    }
  }

  // Print final validation table
  console.log('\n=== Technical SEO Audit Table ===\n');
  console.table(results.map(r => ({
    'Group': r.groupName,
    'Original Path': r.originalUrlPath,
    'Status': r.status,
    'Final URL': r.finalUrlPath,
    'Canonical': r.canonical,
    'H1 Count': r.h1Count,
    'Robots Meta': r.robots,
    'Sitemap Presence': r.inSitemap ? 'YES' : 'NO',
    'Indexability': r.isIndexable ? 'YES' : 'NO',
    'Action Needed': r.actionNeeded
  })));

  const allPassed = passedTests === TEST_URLS.length;
  console.log(`\nAudit results: ${passedTests}/${TEST_URLS.length} tests passed.`);
  
  if (allPassed) {
    console.log('\n✅ All technical SEO validations PASSED successfully!');
    process.exit(0);
  } else {
    console.error('\n❌ SEO validations failed. Please check the failures in the table above.');
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
