const puppeteer = require('puppeteer');
(async () => {
    const browser = await puppeteer.launch({ args: ['--no-sandbox'] });
    const page = await browser.newPage();
    
    page.on('pageerror', error => {
        console.log('PAGE ERROR:', error.message);
    });
    
    // We can also catch script evaluation errors by listening to the console or response
    await page.goto('https://thehgtech.com', { waitUntil: 'networkidle0' });
    
    await browser.close();
})();
