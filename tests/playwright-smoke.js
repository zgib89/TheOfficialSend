const { chromium } = require('playwright');
const fs = require('fs');

(async () => {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();
  const consoleErrors = [];
  const consoleMessages = [];

  page.on('console', msg => {
    const text = msg.text();
    consoleMessages.push({type: msg.type(), text});
    if (msg.type() === 'error') consoleErrors.push(text);
    console.log('[console]', msg.type(), text);
  });

  page.on('pageerror', err => {
    consoleErrors.push(err.message || String(err));
    console.error('[pageerror]', err.message || err);
  });

  try {
    console.log('Opening page...');
    await page.goto('http://localhost:8000/index.html', { waitUntil: 'networkidle' });

    // Try to click the first mission card (if present)
    const missionCard = await page.$('#home-view a.block');
    if (missionCard) {
      console.log('Clicking first mission card...');
      await missionCard.click();
      await page.waitForTimeout(700);
    } else {
      console.log('No mission card selector found on home view.');
    }

    // Wait a moment for any runtime actions
    await page.waitForTimeout(500);

    // Save a screenshot to help debugging
    const screenshotPath = 'smoke-screenshot.png';
    await page.screenshot({ path: screenshotPath, fullPage: true });
    console.log('Saved screenshot to', screenshotPath);

    // Save captured console messages JSON
    fs.writeFileSync('smoke-console.json', JSON.stringify({consoleMessages, consoleErrors}, null, 2));
    console.log('Wrote smoke-console.json');

    console.log('Console errors length:', consoleErrors.length);
    await browser.close();
    process.exit(consoleErrors.length ? 2 : 0);
  } catch (err) {
    console.error('Test runner error:', err);
    try { await browser.close(); } catch(e){}
    process.exit(3);
  }
})();
