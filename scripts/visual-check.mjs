import { chromium } from 'playwright-core';

const browser = await chromium.launch({
  headless: true,
  executablePath: 'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe',
});

const results = {};
const siteUrl = process.env.VISUAL_CHECK_URL || 'http://127.0.0.1:4323/';

for (const spec of [
  { name: 'desktop', width: 1440, height: 1000 },
  { name: 'mobile-wide', width: 430, height: 932 },
  { name: 'mobile', width: 390, height: 844 },
  { name: 'mobile-narrow', width: 320, height: 740 },
]) {
  const page = await browser.newPage({
    viewport: { width: spec.width, height: spec.height },
    deviceScaleFactor: 1,
    reducedMotion: 'no-preference',
  });
  const errors = [];

  page.on('console', (message) => {
    if (message.type() === 'error') errors.push(message.text());
  });
  page.on('pageerror', (error) => errors.push(error.message));

  await page.goto(siteUrl, { waitUntil: 'networkidle' });
  await page.evaluate(() => document.fonts.ready);

  const metrics = await page.evaluate(() => ({
    title: document.title,
    textLength: document.body.innerText.trim().length,
    overlay: Boolean(document.querySelector('.vite-error-overlay, #webpack-dev-server-client-overlay')),
    scrollWidth: document.documentElement.scrollWidth,
    clientWidth: document.documentElement.clientWidth,
    h1: document.querySelector('h1')?.textContent?.trim(),
    sections: ['sobre', 'servicos', 'equipe', 'case', 'contato'].map((id) =>
      Boolean(document.getElementById(id)),
    ),
    disabledSubmit: document.querySelector('.form-submit')?.hasAttribute('disabled'),
    navigationLinks: document.querySelectorAll('.main-navigation a').length,
    fonts: [...document.fonts].map((font) => font.family).filter((value, index, all) => all.indexOf(value) === index),
  }));

  const isMobile = spec.width <= 760;

  if (isMobile) {
    await page.locator('.menu-toggle').click();
    metrics.menuExpanded = await page.locator('.menu-toggle').getAttribute('aria-expanded');
    metrics.menuVisible = await page.locator('.main-navigation').evaluate((element) => getComputedStyle(element).visibility);
    await page.keyboard.press('Escape');
    metrics.menuClosedWithEscape = await page.locator('.menu-toggle').getAttribute('aria-expanded');
  }

  const expectedDevice = isMobile ? 'mobile' : 'desktop';
  metrics.initialCaseDevice = await page.locator('[data-comparison]').getAttribute('data-device');
  const alternateDevice = expectedDevice === 'desktop' ? 'mobile' : 'desktop';
  await page.locator(`[data-device-button="${alternateDevice}"]`).click();
  metrics.alternateCaseDevice = await page.locator('[data-comparison]').getAttribute('data-device');
  await page.locator(`[data-device-button="${expectedDevice}"]`).click();
  metrics.finalCaseDevice = await page.locator('[data-comparison]').getAttribute('data-device');
  await page.locator('.comparison-stage').scrollIntoViewIfNeeded();
  metrics.caseImagesLoaded = await page.locator(`.capture-${expectedDevice}`).evaluateAll((images) =>
    images.every((image) => image instanceof HTMLImageElement && image.complete && image.naturalWidth > 0),
  );

  const foundersSection = page.locator('#equipe');
  await foundersSection.scrollIntoViewIfNeeded();
  const founderNames = ['Rafael Arcanjo', 'Kaio Seabra', 'Miguel Leite'];
  const founderPortraits = founderNames.map((name) => foundersSection.locator(`img[alt="Retrato de ${name}"]`));
  await Promise.all(founderPortraits.map((portrait) => portrait.waitFor({ state: 'visible' })));
  await page.waitForFunction(
    (names) => names.every((name) => {
      const image = document.querySelector(`img[alt="Retrato de ${name}"]`);
      return image instanceof HTMLImageElement && image.complete && image.naturalWidth > 0;
    }),
    founderNames,
  );
  await Promise.all(founderPortraits.map((portrait) => portrait.evaluate((image) =>
    image instanceof HTMLImageElement ? image.decode() : Promise.resolve(),
  )));
  await page.waitForTimeout(50);
  metrics.founders = await Promise.all(founderNames.map(async (name, index) => ({
    name,
    visible: await foundersSection.getByText(name, { exact: true }).isVisible(),
    portrait: await founderPortraits[index].evaluate((image) => ({
      loaded: image instanceof HTMLImageElement && image.complete && image.naturalWidth > 0,
      naturalWidth: image instanceof HTMLImageElement ? image.naturalWidth : 0,
      naturalHeight: image instanceof HTMLImageElement ? image.naturalHeight : 0,
    })),
  })));
  await foundersSection.screenshot({ path: `.impeccable/review/founders-${spec.name}.png` });

  await page.locator('[data-comparison-range]').fill('0');
  metrics.comparisonStart = await page.locator('[data-comparison]').evaluate((element) => {
    const stageBounds = element.querySelector('.comparison-stage')?.getBoundingClientRect();
    const handleBounds = element.querySelector('.comparison-line span')?.getBoundingClientRect();
    return {
      position: element.style.getPropertyValue('--comparison-position'),
      edge: element.getAttribute('data-comparison-edge'),
      handleInside: Boolean(
        stageBounds && handleBounds && handleBounds.left >= stageBounds.left - 1 && handleBounds.right <= stageBounds.right + 1,
      ),
    };
  });
  await page.locator('[data-comparison-range]').fill('100');
  metrics.comparisonEnd = await page.locator('[data-comparison]').evaluate((element) => {
    const stageBounds = element.querySelector('.comparison-stage')?.getBoundingClientRect();
    const handleBounds = element.querySelector('.comparison-line span')?.getBoundingClientRect();
    return {
      position: element.style.getPropertyValue('--comparison-position'),
      edge: element.getAttribute('data-comparison-edge'),
      handleInside: Boolean(
        stageBounds && handleBounds && handleBounds.left >= stageBounds.left - 1 && handleBounds.right <= stageBounds.right + 1,
      ),
    };
  });
  const stage = page.locator('.comparison-stage');
  await stage.scrollIntoViewIfNeeded();
  const stageBounds = await stage.boundingBox();
  if (stageBounds) {
    const visibleTop = Math.max(8, stageBounds.y);
    const visibleBottom = Math.min(spec.height - 8, stageBounds.y + stageBounds.height);
    const dragY = visibleTop + (visibleBottom - visibleTop) * 0.5;
    await page.mouse.move(stageBounds.x + stageBounds.width * 0.25, dragY);
    await page.mouse.down();
    await page.mouse.move(stageBounds.x + stageBounds.width * 0.75, dragY, { steps: 4 });
    await page.mouse.up();
  }
  metrics.comparisonPointerDrag = await page.locator('[data-comparison]').evaluate((element) =>
    element.style.getPropertyValue('--comparison-position'),
  );
  await page.locator('[data-comparison-range]').fill('50');
  await page.locator('[data-comparison]').screenshot({ path: `.impeccable/review/case-${spec.name}.png` });

  await page.evaluate(() => {
    document.documentElement.style.scrollBehavior = 'auto';
  });
  await page.waitForTimeout(30);
  await page.evaluate(() => window.scrollTo({ top: 0, left: 0, behavior: 'instant' }));
  await page.waitForTimeout(60);
  metrics.heroProgressStart = await page.evaluate(() =>
    Number.parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--hero-progress')),
  );
  await page.evaluate(() => {
    const hero = document.querySelector('.hero');
    if (hero instanceof HTMLElement) {
      window.scrollTo({ top: hero.offsetTop + hero.offsetHeight * 0.55, left: 0, behavior: 'instant' });
    }
  });
  await page.waitForTimeout(60);
  metrics.heroProgressEnd = await page.evaluate(() =>
    Number.parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--hero-progress')),
  );
  metrics.heroVisibleAtProgressEnd = await page.locator('.hero').evaluate((element) =>
    element.getBoundingClientRect().bottom > 0,
  );

  metrics.touchTargets = isMobile
    ? await page.locator('.menu-toggle, .device-toggle button, .form-submit').evaluateAll((elements) =>
        elements.map((element) => {
          const bounds = element.getBoundingClientRect();
          return {
            label: element.textContent?.trim() || element.getAttribute('aria-label'),
            width: Math.round(bounds.width),
            height: Math.round(bounds.height),
          };
        }),
      )
    : [];

  await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
  await page.waitForTimeout(150);
  await page.evaluate(() => window.scrollTo(0, 0));
  await page.waitForTimeout(150);

  const screenshot = await page.screenshot({
    path: `.impeccable/review/${spec.name}.png`,
    fullPage: true,
  });

  results[spec.name] = { ...metrics, errors, screenshotBytes: screenshot.length };
  await page.close();
}

await browser.close();
console.log(JSON.stringify(results, null, 2));
