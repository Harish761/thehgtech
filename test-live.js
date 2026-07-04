const puppeteer = require('puppeteer');
(async () => {
    const browser = await puppeteer.launch({ args: ['--no-sandbox'] });
    const page = await browser.newPage();
    page.on('console', msg => console.log('PAGE LOG:', msg.text()));
    page.on('pageerror', error => console.log('PAGE ERROR:', error.message));
    page.on('requestfailed', request => console.log('REQUEST FAILED:', request.url(), request.failure().errorText));
    await page.goto('https://thehgtech.com', { waitUntil: 'networkidle0' });
    const title = await page.title();
    console.log("Title:", title);
    const content = await page.content();
    console.log("Articles rendered:", content.includes('article-card'));
    await browser.close();
})();
