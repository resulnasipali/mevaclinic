const puppeteer = require('puppeteer');
const path = require('path');

(async () => {
  try {
    console.log('Launching browser...');
    const browser = await puppeteer.launch({ headless: 'new' });
    const page = await browser.newPage();
    
    // Set a good desktop viewport
    await page.setViewport({ width: 1440, height: 1080 });
    
    console.log('Navigating to local site...');
    await page.goto('http://localhost:3000/en', { waitUntil: 'load', timeout: 60000 });
    
    // Scroll to AI Assistant section to ensure lazy loading is triggered and it's visible
    await page.evaluate(() => {
      const element = document.getElementById('ai-assistant');
      if (element) {
        element.scrollIntoView();
      }
    });
    
    // Wait for smooth scroll and any animations
    await new Promise(r => setTimeout(r, 2000));
    
    // Step 1: Take screenshot of the initial state
    const outPath1 = path.join('C:', 'Users', 'Lenovo', '.gemini', 'antigravity', 'brain', 'd34a08f1-d2f3-405c-9800-2464ea07bbc7', 'ai_step1.png');
    await page.screenshot({ path: outPath1 });
    console.log('Took screenshot 1');
    
    // Click on Bariatric (first option usually, let's just click the first button in the grid)
    await page.click('#ai-assistant button');
    await new Promise(r => setTimeout(r, 1000));
    
    const outPath2 = path.join('C:', 'Users', 'Lenovo', '.gemini', 'antigravity', 'brain', 'd34a08f1-d2f3-405c-9800-2464ea07bbc7', 'ai_step2.png');
    await page.screenshot({ path: outPath2 });
    console.log('Took screenshot 2');

    // Fill form Step 2
    // Weight, Height, Age
    const inputs = await page.$$('#ai-assistant input[type="number"]');
    if (inputs.length >= 3) {
      await inputs[0].type('120');
      await inputs[1].type('170');
      await inputs[2].type('35');
    }
    await page.click('#ai-assistant button[type="submit"]');
    await new Promise(r => setTimeout(r, 1000));

    const outPath3 = path.join('C:', 'Users', 'Lenovo', '.gemini', 'antigravity', 'brain', 'd34a08f1-d2f3-405c-9800-2464ea07bbc7', 'ai_step3.png');
    await page.screenshot({ path: outPath3 });
    console.log('Took screenshot 3');

    // Fill form Step 3
    await page.type('#ai-assistant textarea', 'Diabetes');
    const textInputs = await page.$$('#ai-assistant input:not([type="number"])');
    if (textInputs.length >= 2) {
      await textInputs[0].type('John Doe'); // Name
      await textInputs[1].type('+44 123456'); // Phone
    }
    
    // Finalize
    await page.click('#ai-assistant button[type="submit"]');
    
    // Wait for the loading animation (progress bar) to finish and result to appear
    console.log('Waiting for AI Analysis to complete (max 6 seconds)...');
    await new Promise(r => setTimeout(r, 6000));
    
    const outPath4 = path.join('C:', 'Users', 'Lenovo', '.gemini', 'antigravity', 'brain', 'd34a08f1-d2f3-405c-9800-2464ea07bbc7', 'ai_step4.png');
    await page.screenshot({ path: outPath4 });
    console.log('Took screenshot 4');
    
    await browser.close();
    console.log('All done!');
    
  } catch (err) {
    console.error('Error during puppeteer script:', err);
    process.exit(1);
  }
})();
