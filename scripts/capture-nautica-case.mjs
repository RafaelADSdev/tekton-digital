import { chromium } from 'playwright-core';

const browser = await chromium.launch({
  headless: true,
  executablePath: 'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe',
});

const targets = [
  { key: 'before-current', url: 'https://nauticaengenharia.com' },
  { key: 'after-current', url: 'https://nauticaengenharia.vercel.app' },
];

const results = [];
const deviceCaptures = [];

for (const target of targets) {
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 }, deviceScaleFactor: 1 });
  const errors = [];
  page.on('pageerror', (error) => errors.push(error.message));
  page.on('console', (message) => {
    if (message.type() === 'error') errors.push(message.text());
  });

  try {
    const response = await page.goto(target.url, { waitUntil: 'domcontentloaded', timeout: 60_000 });
    await page.waitForTimeout(5_000);
    await page.evaluate(() => window.scrollTo(0, 0));
    await page.screenshot({ path: `.impeccable/review/${target.key}-viewport.png` });
    await page.screenshot({ path: `.impeccable/review/${target.key}-full.png`, fullPage: true });

    results.push({
      key: target.key,
      requestedUrl: target.url,
      finalUrl: page.url(),
      status: response?.status(),
      title: await page.title(),
      heading: await page.locator('h1').first().textContent().catch(() => null),
      textSample: (await page.locator('body').innerText()).replaceAll(/\s+/g, ' ').slice(0, 420),
      errors: [...new Set(errors)].slice(0, 10),
    });
  } catch (error) {
    results.push({ key: target.key, requestedUrl: target.url, failure: error.message, errors });
  } finally {
    await page.close();
  }
}

for (const target of targets) {
  for (const device of [
    { key: 'desktop', width: 1440, height: 900 },
    { key: 'mobile', width: 390, height: 844 },
  ]) {
    const page = await browser.newPage({
      viewport: { width: device.width, height: device.height },
      deviceScaleFactor: 1,
      reducedMotion: 'reduce',
    });

    await page.goto(target.url, { waitUntil: 'domcontentloaded', timeout: 60_000 });
    await page.evaluate(() => document.fonts.ready);
    await page.waitForFunction(() => [...document.images].every((image) => image.complete), null, { timeout: 20_000 }).catch(() => {});
    await page.waitForTimeout(2_000);
    await page.evaluate(() => window.scrollTo(0, 0));

    const version = target.key.startsWith('before') ? 'before' : 'after';
    const path = `public/assets/cases/nautica-${version}-${device.key}.jpg`;
    const screenshot = await page.screenshot({ path, type: 'jpeg', quality: 84 });
    deviceCaptures.push({ version, device: device.key, path, bytes: screenshot.length, finalUrl: page.url() });
    await page.close();
  }
}

await browser.close();
console.log(JSON.stringify({ pages: results, captures: deviceCaptures }, null, 2));
