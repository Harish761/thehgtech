/**
 * THEHGTECH SITE-WIDE SEARCH ENGINE
 * Unified search across Articles, CVEs, Guides, and Tools.
 */

class SearchEngine {
    constructor() {
        this.index = [];
        this.isOpen = false;
        this.hasLoaded = false;

        // Static Content Index (Guides, Pages, Tools)
        this.staticContent = [
            // Main Pages
            { title: "Home", url: "/", type: "Page", desc: "Main dashboard and overview" },
            { title: "CVE Tracker", url: "/cve-tracker.html", type: "Tool", desc: "Track actively exploited vulnerabilities (CISA KEV)" },
            { title: "Threat Intelligence", url: "/threat-intel.html", type: "Tool", desc: "Real-time IOCs and threat feeds" },
            { title: "Articles", url: "/articles.html", type: "Page", desc: "Latest security news and analysis" },

            // Guides & Resources
            { title: "Security Metrics & KPIs Dashboard", url: "/guides/security-metrics-kpis-dashboard.html", type: "Guide", desc: "Building effective security dashboards" },
            { title: "SIEM Log Analysis Guide", url: "/guides/siem-log-analysis.html", type: "Guide", desc: "Mastering log analysis for security events" },
            { title: "Threat Intelligence Feeds Comparison", url: "/guides/threat-intelligence-feeds-comparison.html", type: "Guide", desc: "Comparing top paid vs free TI feeds" },
            { title: "Incident Response Automation", url: "/guides/incident-response-automation.html", type: "Guide", desc: "Automating IR workflows" },

            // TI Vendors (Deep links)
            { title: "OpenPhish", url: "/threat-intel.html#openphish", type: "Vendor", desc: "Phishing intelligence provider" },
            { title: "URLhaus", url: "/threat-intel.html#urlhaus", type: "Vendor", desc: "Malicious URL tracking" },
            { title: "ThreatFox", url: "/threat-intel.html#threatfox", type: "Vendor", desc: "Indicators of Compromise sharing" },
            { title: "Feodo Tracker", url: "/threat-intel.html#feodo", type: "Vendor", desc: "Botnet C2 tracking" }
        ];

        this.init();
    }

    init() {
        // Inject styles
        if (!document.querySelector('link[href*="search.css"]')) {
            const link = document.createElement('link');
            link.rel = 'stylesheet';
            link.href = '/search.css';
            document.head.appendChild(link);
        }

        // Create Modal HTML
        this.createModal();

        // Inject Desktop Search Button
        this.injectDesktopButton();

        // Bind global keys
        document.addEventListener('keydown', (e) => {
            if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
                e.preventDefault();
                this.toggle();
            }
            if (e.key === 'Escape' && this.isOpen) {
                this.close();
            }
        });

        // Bind click triggers (Delegate)
        document.addEventListener('click', (e) => {
            if (e.target.closest('.m-header__btn--search') || e.target.closest('.desktop-search-btn') || e.target.closest('[data-action="search"]')) {
                e.preventDefault();
                this.open();
            }
        });
    }

    injectDesktopButton() {
        // Try to find the desktop nav container
        const nav = document.querySelector('.nav') || document.querySelector('.header-actions') || document.querySelector('.header-content');
        if (nav && !document.querySelector('.desktop-search-btn')) {
            const btn = document.createElement('button');
            btn.className = 'desktop-search-btn';
            btn.innerHTML = '<i class="fas fa-search"></i>';
            btn.setAttribute('aria-label', 'Search');
            btn.title = 'Search (Cmd+K)';

            // Insert before the theme toggle if it exists, otherwise append
            const themeToggle = nav.querySelector('.theme-toggle-wrapper') || nav.querySelector('.theme-toggle');
            if (themeToggle) {
                // If theme toggle logic complicates things, just insert before
                themeToggle.parentNode.insertBefore(btn, themeToggle);
            } else {
                nav.appendChild(btn);
            }
        }
    }

    createModal() {
        const modal = document.createElement('div');
        modal.className = 'search-modal-overlay';
        modal.innerHTML = `
            <div class="search-modal" onclick="event.stopPropagation()">
                <div class="search-header">
                    <i class="fas fa-search search-icon"></i>
                    <input type="text" class="search-input" placeholder="Search articles, CVEs, tools..." autocomplete="off">
                    <button class="search-close" onclick="searchEngine.close()">ESC</button>
                </div>
                <div class="search-results">
                    <!-- Results go here -->
                    <div class="search-empty">
                        <i class="fas fa-terminal" style="font-size: 2rem; margin-bottom: 1rem; opacity: 0.5;"></i>
                        <p>Type to search...</p>
                    </div>
                </div>
                <div class="search-footer">
                    <span><span class="key-hint">↑↓</span> to navigate</span>
                    <span><span class="key-hint">ENTER</span> to select</span>
                    <span><span class="key-hint">ESC</span> to close</span>
                </div>
            </div>
        `;
        document.body.appendChild(modal);

        // Bind Input
        this.input = modal.querySelector('.search-input');
        this.resultsContainer = modal.querySelector('.search-results');

        this.input.addEventListener('input', (e) => this.handleSearch(e.target.value));

        // Close on overlay click
        modal.addEventListener('click', () => this.close());
    }

    async loadData() {
        if (this.hasLoaded) return;

        // Start with static content
        this.index = [...this.staticContent];

        try {
            // Fetch Articles
            const articlesReq = await fetch('/articles.json');
            if (articlesReq.ok) {
                const articleData = await articlesReq.json();
                const articles = articleData.articles.map(a => ({
                    title: a.title,
                    url: `/articles.html?id=${a.id}`, // Force web URL format
                    type: 'Article',
                    desc: a.excerpt || a.category,
                    date: a.date
                }));
                this.index.push(...articles);
            }

            // Fetch CVEs (Lightweight fetch)
            const cveReq = await fetch('/cve-data.json');
            if (cveReq.ok) {
                const cveData = await cveReq.json();
                // Take top 50 recent/critical to avoid bloating search
                const cves = cveData.cves.slice(0, 50).map(c => ({
                    title: `${c.cveId}: ${c.vendor} ${c.product}`,
                    url: `/cve-tracker.html?cve=${c.cveId}`,
                    type: 'CVE',
                    desc: c.shortDescription || c.description.substring(0, 100) + '...',
                    severity: c.severity
                }));
                this.index.push(...cves);
            }

            this.hasLoaded = true;
            console.log(`Search Engine Ready: ${this.index.length} items indexed.`);
        } catch (e) {
            console.warn('Search index partial load:', e);
        }
    }

    handleSearch(query) {
        if (!query) {
            this.resultsContainer.innerHTML = `
                <div class="search-empty">
                    <i class="fas fa-terminal" style="font-size: 2rem; margin-bottom: 1rem; opacity: 0.5;"></i>
                    <p>Type to search...</p>
                </div>
            `;
            return;
        }

        const q = query.toLowerCase();
        const results = this.index.filter(item =>
            item.title.toLowerCase().includes(q) ||
            (item.desc && item.desc.toLowerCase().includes(q))
        ).slice(0, 10); // Limit to 10 results for performance

        this.renderResults(results);
    }

    renderResults(results) {
        if (results.length === 0) {
            this.resultsContainer.innerHTML = '<div class="search-empty">No matching results found</div>';
            return;
        }

        // Group by type
        const grouped = results.reduce((acc, item) => {
            if (!acc[item.type]) acc[item.type] = [];
            acc[item.type].push(item);
            return acc;
        }, {});

        let html = '';

        for (const [type, items] of Object.entries(grouped)) {
            html += `<div class="search-section-header">${type}s</div>`;
            items.forEach(item => {
                let icon = 'fa-file-alt';
                if (type === 'Tool') icon = 'fa-tools';
                if (type === 'CVE') icon = 'fa-bug';
                if (type === 'Guide') icon = 'fa-book';
                if (type === 'Vendor') icon = 'fa-shield-alt';

                html += `
                    <a href="${item.url}" class="search-item" onclick="searchEngine.close()">
                        <div class="search-item-icon"><i class="fas ${icon}"></i></div>
                        <div class="search-item-content">
                            <span class="search-item-title">${item.title}</span>
                            <span class="search-item-desc">${item.desc}</span>
                        </div>
                        ${item.type === 'CVE' ? '<i class="fas fa-external-link-alt" style="font-size: 0.7rem; opacity: 0.5;"></i>' : ''}
                    </a>
                `;
            });
        }

        this.resultsContainer.innerHTML = html;
    }

    open() {
        document.querySelector('.search-modal-overlay').classList.add('active');
        this.input.focus();
        this.isOpen = true;
        document.body.style.overflow = 'hidden';

        // Lazy load data on first open
        this.loadData();
    }

    close() {
        document.querySelector('.search-modal-overlay').classList.remove('active');
        this.isOpen = false;
        document.body.style.overflow = '';
        this.input.value = '';
        setTimeout(() => {
            this.resultsContainer.innerHTML = `
                <div class="search-empty">
                    <i class="fas fa-terminal" style="font-size: 2rem; margin-bottom: 1rem; opacity: 0.5;"></i>
                    <p>Type to search...</p>
                </div>
            `;
        }, 300);
    }

    toggle() {
        if (this.isOpen) this.close();
        else this.open();
    }
}

// Initialize Global Search Engine
const searchEngine = new SearchEngine();
