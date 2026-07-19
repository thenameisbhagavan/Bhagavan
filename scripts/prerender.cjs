const puppeteer = require('puppeteer');
const express = require('express');
const fs = require('fs');
const path = require('path');

// Defined directly from the sitemap generator
const routes = [
  '/',
  '/overview',
  '/experience',
  '/projects',
  '/skills',
  '/credentials',
  '/innovation',
  '/vision',
  '/ecosystem',
  '/resume',
  '/connect',
  '/contact'
];

async function prerender() {
  const app = express();
  const distPath = path.resolve(__dirname, '../dist');
  
  if (!fs.existsSync(distPath)) {
    console.error('dist folder not found! Run npm run build first.');
    process.exit(1);
  }

  app.use(express.static(distPath));
  
  // Serve index.html for all non-file routes (SPA fallback)
  app.use((req, res) => {
    res.sendFile(path.resolve(distPath, 'index.html'));
  });

  const server = app.listen(0, async () => {
    const port = server.address().port;
    console.log(`Prerender server running on port ${port}`);

    console.log('Launching browser...');
    const isVercel = process.env.VERCEL === '1';
    let browser;
    
    if (isVercel) {
      const puppeteerCore = require('puppeteer-core');
      const chromium = require('@sparticuz/chromium').default;
      
      browser = await puppeteerCore.launch({
        args: chromium.args,
        defaultViewport: chromium.defaultViewport,
        executablePath: await chromium.executablePath(),
        headless: chromium.headless,
      });
    } else {
      const puppeteerOptions = {
        headless: true,
        args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage', '--disable-gpu']
      };
      
      if (process.platform === 'win32') {
        puppeteerOptions.channel = 'chrome';
      }
      
      browser = await puppeteer.launch(puppeteerOptions);
    }

    const page = await browser.newPage();
    
    // We want to make sure animations or lazy loading completes
    // We wait for network idle to ensure everything is fetched
    for (const route of routes) {
      console.log(`Prerendering ${route}...`);
      await page.goto(`http://localhost:${port}${route}`, { waitUntil: 'networkidle0', timeout: 30000 });
      
      // Give a tiny bit of extra time for Framer Motion to settle
      await new Promise(r => setTimeout(r, 1000));
      
      let html = await page.content();
      
      // Create folder structure if needed
      const routeDir = path.join(distPath, route);
      if (route !== '/' && !fs.existsSync(routeDir)) {
        fs.mkdirSync(routeDir, { recursive: true });
      }
      
      const filePath = route === '/' ? path.join(distPath, 'index.html') : path.join(routeDir, 'index.html');
      fs.writeFileSync(filePath, html, 'utf8');
      console.log(`Saved ${filePath}`);
    }

    await browser.close();
    server.close();
    console.log('Prerendering complete!');
  });
}

prerender().catch(err => {
  console.error('Prerendering failed:', err);
  process.exit(1);
});
