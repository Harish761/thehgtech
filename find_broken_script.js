const puppeteer = require('puppeteer');
(async () => {
    const browser = await puppeteer.launch({ args: ['--no-sandbox'] });
    const page = await browser.newPage();
    
    page.on('pageerror', error => {
        console.log('--- PAGE ERROR ---');
        console.log(error.message);
        console.log(error.stack);
    });
    
    await page.goto('http://127.0.0.1:8000', { waitUntil: 'networkidle0' });
    await browser.close();
})();
