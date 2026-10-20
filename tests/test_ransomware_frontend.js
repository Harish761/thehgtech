/**
 * Comprehensive Automated Frontend Test Suite for Ransomware Workbench
 * Uses Puppeteer to test DOM, state, filters, drawer, pivots, keyboard access,
 * responsive viewports, theme toggling, and visual captures.
 */

const puppeteer = require('puppeteer');
const path = require('path');
const fs = require('fs');

const delay = ms => new Promise(r => setTimeout(r, ms));

const ARTIFACT_DIR = '/Users/harish/.gemini/antigravity/brain/c11ab9d9-63ab-4ca5-ba85-1cf6509c309a';
const BASE_URL = 'http://127.0.0.1:8087';

async function runTests() {
    console.log('🚀 Starting Ransomware Workbench Frontend Test Suite...');
    const browser = await puppeteer.launch({
        headless: 'new',
        args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage']
    });

    const page = await browser.newPage();
    const consoleErrors = [];
    page.on('console', msg => {
        if (msg.type() === 'error') {
            consoleErrors.push(msg.text());
        }
    });

    try {
        // Set Desktop Viewport
        await page.setViewport({ width: 1440, height: 900 });

        // 1. Navigation & Loading
        console.log('1️⃣ Loading ransomware-tracker.html...');
        const resp = await page.goto(`${BASE_URL}/ransomware-tracker.html`, { waitUntil: 'networkidle0' });
        console.log('HTTP Status:', resp.status());
        if (resp.status() !== 200) throw new Error(`HTTP ${resp.status()}`);

        // Wait for data load
        await page.waitForSelector('#rwLedgerBody tr', { timeout: 5000 });

        // 2. Header and Footer Verification
        console.log('2️⃣ Verifying Canonical Header & Footer...');
        const headerExists = await page.$('header.header');
        const footerExists = await page.$('footer.footer');
        if (!headerExists) throw new Error('Desktop header not found');
        if (!footerExists) throw new Error('Footer not found');

        const footerText = await page.$eval('footer.footer', el => el.innerText);
        if (!footerText.includes('TheHGTech. All rights reserved')) {
            throw new Error('Footer copyright text missing');
        }

        // 3. Hero & SVG Lattice Animation Verification (Factual Claims Remediation)
        console.log('3️⃣ Verifying Hero Section & SVG Lattice Animation (Factual Accuracy)...');
        const svgLattice = await page.$('.rw-lattice-svg');
        if (!svgLattice) throw new Error('Cryptographic Syndicate Lattice SVG missing');

        // Check Hero Editorial Text & Badge
        const heroBadgeText = await page.$eval('.rw-hero-badge', el => el.innerText.trim());
        if (!heroBadgeText.toUpperCase().includes('DARK WEB EXTORTION TELEMETRY')) {
            throw new Error(`Hero badge still has misleading wording: ${heroBadgeText}`);
        }

        const heroTitleText = await page.$eval('.rw-hero-title', el => el.innerText.trim());
        if (!heroTitleText.includes('Ransomware Extortion Intelligence Workbench')) {
            throw new Error(`Hero title mismatch: ${heroTitleText}`);
        }

        const heroDescText = await page.$eval('.rw-hero-desc', el => el.innerText.trim());
        if (!heroDescText.includes('not independently verified breaches')) {
            throw new Error(`Hero description missing unverified disclaimer: ${heroDescText}`);
        }

        const heroMetaText = await page.$eval('.rw-hero-meta-bar', el => el.innerText.trim());
        if (heroMetaText.includes('OSINT Corroborated')) {
            throw new Error('Hero meta bar still contains unsupported "OSINT Corroborated" badge!');
        }
        if (!heroMetaText.includes('Dark Web Extortion Notices')) {
            throw new Error(`Hero meta bar missing accurate "Dark Web Extortion Notices" badge: ${heroMetaText}`);
        }

        // Check SVG Lattice labels (no false cipher claims or contradictory velocity)
        const svgContent = await page.$eval('.rw-lattice-svg', el => el.innerHTML);
        if (svgContent.includes('RSA-4096 / AES-GCM')) {
            throw new Error('SVG still contains unsupported cipher claim "RSA-4096 / AES-GCM"!');
        }
        if (!svgContent.includes('EXTORTION CAMPAIGN SIGNALS')) {
            throw new Error('SVG missing neutral architecture label "EXTORTION CAMPAIGN SIGNALS"');
        }
        if (svgContent.includes('ACTIVE BURST')) {
            throw new Error('SVG still contains contradictory "ACTIVE BURST" label for Akira!');
        }
        if (!svgContent.includes('DOUBLE EXTORTION')) {
            throw new Error('SVG missing architectural "DOUBLE EXTORTION" label for Akira');
        }
        if (svgContent.includes('STEADY EXPOS')) {
            throw new Error('SVG still contains contradictory "STEADY EXPOS" label for N0n!');
        }
        if (!svgContent.includes('ACTIVE DISCLOSURES')) {
            throw new Error('SVG missing architectural "ACTIVE DISCLOSURES" label for N0n');
        }

        // Check KPI Tiles
        const totalGroupsText = await page.$eval('#metricTotalGroups', el => el.innerText.trim());
        const totalVictimsText = await page.$eval('#metricTotalVictims', el => el.innerText.trim());
        const velocity24hText = await page.$eval('#metricTodayCount', el => el.innerText.trim());
        const velocity24hSub = await page.$eval('#metricTodaySub', el => el.innerText.trim());
        const topSectorText = await page.$eval('#metricTopSector', el => el.innerText.trim());
        const topSectorSub = await page.$eval('#metricSectorSub', el => el.innerText.trim());
        const retainedHeroCount = await page.$eval('#heroRetainedCount', el => el.innerText.trim());

        console.log(`   - Hero KPI: ${totalGroupsText} Syndicates | ${totalVictimsText} Disclosures`);
        console.log(`   - 24h Velocity KPI: ${velocity24hText} (${velocity24hSub})`);
        console.log(`   - Top Sector KPI: ${topSectorText} (${topSectorSub})`);
        console.log(`   - Dynamic Hero Retained Count: ${retainedHeroCount}`);

        if (parseInt(totalGroupsText, 10) <= 0 || parseInt(totalVictimsText, 10) <= 0) {
            throw new Error('Hero KPI metrics not populated with valid counts');
        }
        if (velocity24hText !== '28') {
            throw new Error(`Expected rolling 24h count to be 28, but got: ${velocity24hText}`);
        }
        if (topSectorText !== 'Multiple / Unclassified') {
            throw new Error(`Expected Top Sector to be 'Multiple / Unclassified', but got: ${topSectorText}`);
        }
        if (!topSectorSub.includes('unclassified')) {
            throw new Error(`Expected Top Sector Sub to report unclassified coverage, but got: ${topSectorSub}`);
        }
        if (retainedHeroCount !== totalVictimsText) {
            throw new Error(`Dynamic retained hero count mismatch: ${retainedHeroCount} vs ${totalVictimsText}`);
        }

        // 4. Default View: Victim Activity Ledger
        console.log('4️⃣ Verifying Default View (Victim Activity Ledger)...');
        const initialRowCount = await page.$$eval('#rwLedgerBody tr', rows => rows.length);
        console.log(`   - Ledger rendered ${initialRowCount} rows on page 1`);
        if (initialRowCount < 5) throw new Error(`Too few rows rendered: ${initialRowCount}`);

        // 5. Filter & Search Interactive Tests
        console.log('5️⃣ Testing Search and Filtering...');
        // Search test
        await page.type('#rwLedgerSearch', 'Akira');
        await delay(300); // debounce
        const searchRowCount = await page.$$eval('#rwLedgerBody tr', rows => rows.length);
        const firstRowText = await page.$eval('#rwLedgerBody tr:first-child', el => el.innerText);
        console.log(`   - Search 'Akira' yielded ${searchRowCount} row(s)`);
        if (!firstRowText.toLowerCase().includes('akira')) {
            throw new Error(`Search row did not match 'Akira': ${firstRowText}`);
        }

        // Clear search
        await page.$eval('#rwLedgerSearch', el => el.value = '');
        await page.type('#rwLedgerSearch', ' ');
        await page.keyboard.press('Backspace');
        await delay(300);

        // 6. Sector Filter Test
        const sectorOptions = await page.$$eval('#rwSectorFilter option', opts => opts.map(o => o.value));
        console.log(`   - Populated ${sectorOptions.length} sector options`);
        if (sectorOptions.length > 2) {
            const targetSector = sectorOptions[1]; // first real sector
            await page.select('#rwSectorFilter', targetSector);
            await delay(200);
            const filteredCount = await page.$$eval('#rwLedgerBody tr', rows => rows.length);
            console.log(`   - Sector filter '${targetSector}' yielded ${filteredCount} row(s)`);
            if (filteredCount <= 0) throw new Error('Sector filter returned 0 rows unexpectedly');
            // Reset sector filter
            await page.select('#rwSectorFilter', 'all');
            await delay(200);
        }

        // 7. Date Range Filter Test
        console.log('7️⃣ Testing Date Range Filters...');
        await page.click('#rwDatePills button[data-range="7d"]');
        await delay(200);
        const count7d = await page.$$eval('#rwLedgerBody tr', rows => rows.length);
        console.log(`   - 7-Day filter rendered ${count7d} rows`);
        await page.click('#rwDatePills button[data-range="all"]');
        await delay(200);

        // Screenshot: Desktop Dark Mode
        await page.evaluate(() => window.scrollTo(0, 0));
        await delay(250);
        await page.screenshot({ path: path.join(ARTIFACT_DIR, 'verified_ransomware_desktop_dark.png'), fullPage: false });
        console.log('   📸 Captured verified_ransomware_desktop_dark.png');

        // 8. Syndicate Directory View Test
        console.log('8️⃣ Testing Syndicate Directory Tab & Sparklines...');
        await page.click('#tabSyndicates');
        await page.waitForSelector('#rwSyndicatesGrid .rw-syndicate-card', { timeout: 3000 });
        const syndicateCardCount = await page.$$eval('.rw-syndicate-card', cards => cards.length);
        console.log(`   - Syndicate Directory rendered ${syndicateCardCount} syndicate cards`);
        if (syndicateCardCount < 5) throw new Error(`Too few syndicate cards: ${syndicateCardCount}`);

        // Verify sparkline SVG presence
        const sparklineExists = await page.$('.rw-syndicate-card svg polyline');
        if (!sparklineExists) throw new Error('Sparkline polyline not found in card');

        // Screenshot: Syndicate Directory
        await page.screenshot({ path: path.join(ARTIFACT_DIR, 'verified_ransomware_syndicate_directory.png'), fullPage: false });
        console.log('   📸 Captured verified_ransomware_syndicate_directory.png');

        // 9. Slide-Out Dossier Drawer Test
        console.log('9️⃣ Testing Slide-Out Dossier Drawer & Keyboard Accessibility...');
        // Click first card's "View Dossier"
        await page.click('.rw-syndicate-card:first-child .rw-card-btn--primary');
        await page.waitForSelector('#rwDrawer.active', { timeout: 2000 });
        const drawerTitle = await page.$eval('#rwDrawerTitle', el => el.innerText.trim());
        console.log(`   - Dossier drawer opened for: ${drawerTitle}`);
        if (!drawerTitle) throw new Error('Drawer title empty');

        // Check Outbound Pivot link to Threat Intel
        const pivotHref = await page.$eval('#rwPivotThreatIntel', el => el.getAttribute('href'));
        console.log(`   - Outbound TI pivot href: ${pivotHref}`);
        if (!pivotHref.includes('/threat-intel.html?search=')) {
            throw new Error(`Invalid pivot URL: ${pivotHref}`);
        }

        // Screenshot: Drawer Open
        await page.screenshot({ path: path.join(ARTIFACT_DIR, 'verified_ransomware_dossier_drawer.png'), fullPage: false });
        console.log('   📸 Captured verified_ransomware_dossier_drawer.png');

        // Test ESC key close
        await page.keyboard.press('Escape');
        await delay(400);
        const isDrawerActive = await page.$eval('#rwDrawer', el => el.classList.contains('active'));
        if (isDrawerActive) throw new Error('Drawer failed to close on Escape key');
        console.log('   - Drawer closed cleanly on Escape key');

        // 10. Threat Intelligence Outbound Pivot End-to-End Test
        console.log('🔟 Testing Outbound Pivot to Threat Intelligence (?search=Akira)...');
        await page.goto(`${BASE_URL}/threat-intel.html?search=Akira`, { waitUntil: 'networkidle0' });
        await page.waitForSelector('#tiSearchInput', { timeout: 5000 });
        const tiSearchValue = await page.$eval('#tiSearchInput', el => el.value);
        console.log(`   - Threat Intel search box populated with: "${tiSearchValue}"`);
        if (tiSearchValue !== 'Akira') {
            throw new Error(`Threat Intel did not auto-populate search param: "${tiSearchValue}"`);
        }

        // Return to Ransomware page
        await page.goto(`${BASE_URL}/ransomware-tracker.html`, { waitUntil: 'networkidle0' });

        // 11. Light Theme Test
        console.log('1️⃣1️⃣ Testing Light Mode Theme...');
        await page.click('#themeToggle');
        await delay(300);
        await page.evaluate(() => window.scrollTo(0, 0));
        await delay(250);
        await page.screenshot({ path: path.join(ARTIFACT_DIR, 'verified_ransomware_desktop_light.png'), fullPage: false });
        console.log('   📸 Captured verified_ransomware_desktop_light.png');

        // Toggle back to dark
        await page.click('#themeToggle');
        await delay(200);

        // 12. Mobile Layout Test
        console.log('1️⃣2️⃣ Testing Mobile Viewport (390x844 iPhone 14)...');
        await page.setViewport({ width: 390, height: 844, isMobile: true });
        await page.reload({ waitUntil: 'networkidle0' });
        await page.waitForSelector('#rwLedgerBody tr', { timeout: 5000 });

        const mobileHeaderVisible = await page.$eval('.m-header.m-only', el => {
            const style = window.getComputedStyle(el);
            return style.display !== 'none';
        });
        if (!mobileHeaderVisible) throw new Error('Mobile header not visible on mobile viewport');

        await page.screenshot({ path: path.join(ARTIFACT_DIR, 'verified_ransomware_mobile.png'), fullPage: false });
        console.log('   📸 Captured verified_ransomware_mobile.png');

        console.log('----------------------------------------------------');
        console.log(`Console Errors Logged: ${consoleErrors.length}`);
        if (consoleErrors.length > 0) {
            console.warn('Console error details:', consoleErrors);
        }
        console.log('🎉 ALL 12 FRONTEND ACCEPTANCE TESTS PASSED!');
        console.log('----------------------------------------------------');

    } finally {
        await browser.close();
    }
}

runTests().catch(err => {
    console.error('❌ Test failed with error:', err);
    process.exit(1);
});
