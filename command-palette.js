/**
 * THEHGTECH COMMAND PALETTE
 * Modern CMD+K style search with quick actions and keyboard navigation
 * @version 2.0
 */

class CommandPalette {
    constructor() {
        this.isOpen = false;
        this.selectedIndex = 0;
        this.results = [];
        this.recentSearches = this.loadRecentSearches();
        this.searchIndex = [];
        this.hasLoaded = false;
        this.debounceTimer = null;

        this.quickActions = [
            { id: 'home', icon: 'fa-home', title: 'Go to Homepage', type: 'action', url: '/', shortcut: 'G H' },
            { id: 'cve', icon: 'fa-bug', title: 'CVE Tracker', type: 'action', url: '/cve-tracker.html', shortcut: 'G C' },
            { id: 'threat', icon: 'fa-shield-halved', title: 'Threat Intelligence', type: 'action', url: '/threat-intel.html', shortcut: 'G T' },
            { id: 'articles', icon: 'fa-newspaper', title: 'All Articles', type: 'action', url: '/articles.html', shortcut: 'G A' },
            { id: 'guides', icon: 'fa-book', title: 'Security Guides', type: 'action', url: '/guides/', shortcut: 'G G' },
            { id: 'compare', icon: 'fa-scale-balanced', title: 'Tool Comparisons', type: 'action', url: '/comparisons/', shortcut: 'G M' },
            { id: 'dark', icon: 'fa-moon', title: 'Toggle Dark Mode', type: 'command', action: 'toggleTheme' },
            { id: 'top', icon: 'fa-arrow-up', title: 'Scroll to Top', type: 'command', action: 'scrollTop' },
        ];

        this.init();
    }

    init() {
        this.injectCSS();
        this.createPalette();
        this.bindEvents();
        console.log('[CommandPalette] ✓ Initialized');
    }

    injectCSS() {
        if (!document.querySelector('link[href*="command-palette.css"]')) {
            const link = document.createElement('link');
            link.rel = 'stylesheet';
            link.href = '/command-palette.css';
            document.head.appendChild(link);
        }
    }

    createPalette() {
        const overlay = document.createElement('div');
        overlay.className = 'cmd-palette-overlay';
        overlay.id = 'commandPalette';
        overlay.innerHTML = `
            <div class="cmd-palette" onclick="event.stopPropagation()">
                <div class="cmd-palette__header">
                    <i class="fas fa-terminal cmd-palette__icon"></i>
                    <input type="text" class="cmd-palette__input" placeholder="Search guides, articles, CVEs..." autocomplete="off">
                    <div class="cmd-palette__shortcut"><kbd>ESC</kbd></div>
                </div>
                <div class="cmd-palette__results"></div>
                <div class="cmd-palette__footer">
                    <div class="cmd-palette__footer-hints">
                        <span class="cmd-palette__footer-hint"><kbd>↑</kbd><kbd>↓</kbd> Navigate</span>
                        <span class="cmd-palette__footer-hint"><kbd>↵</kbd> Select</span>
                    </div>
                    <span class="cmd-palette__branding"><i class="fas fa-shield-halved"></i> TheHGTech</span>
                </div>
            </div>
        `;

        document.body.appendChild(overlay);
        this.overlay = overlay;
        this.input = overlay.querySelector('.cmd-palette__input');
        this.resultsContainer = overlay.querySelector('.cmd-palette__results');
        this.showQuickActions();
    }

    bindEvents() {
        document.addEventListener('keydown', (e) => {
            if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
                e.preventDefault();
                this.toggle();
                return;
            }
            if (e.key === 'Escape' && this.isOpen) {
                e.preventDefault();
                this.close();
                return;
            }
            if (this.isOpen) {
                if (e.key === 'ArrowDown') { e.preventDefault(); this.navigate(1); }
                else if (e.key === 'ArrowUp') { e.preventDefault(); this.navigate(-1); }
                else if (e.key === 'Enter') { e.preventDefault(); this.selectCurrent(); }
            }
        });

        this.input.addEventListener('input', (e) => {
            clearTimeout(this.debounceTimer);
            this.debounceTimer = setTimeout(() => this.handleSearch(e.target.value.trim()), 150);
        });

        this.overlay.addEventListener('click', (e) => {
            if (e.target === this.overlay) this.close();
        });

        document.addEventListener('click', (e) => {
            if (e.target.closest('.desktop-search-btn') || e.target.closest('[data-action="command-palette"]')) {
                e.preventDefault();
                this.open();
            }
        });
    }

    async loadSearchIndex() {
        if (this.hasLoaded) return;
        this.showLoadingSkeleton();

        try {
            const [articlesRes, cveRes] = await Promise.all([
                fetch('/articles.json').catch(() => null),
                fetch('/cve-data.json').catch(() => null)
            ]);

            if (articlesRes?.ok) {
                const data = await articlesRes.json();
                this.searchIndex.push(...data.articles.slice(0, 40).map(a => ({
                    title: a.title, desc: a.excerpt || a.category,
                    url: `/articles/${a.slug || a.id}.html`, type: 'article'
                })));
            }

            if (cveRes?.ok) {
                const data = await cveRes.json();
                this.searchIndex.push(...data.cves.slice(0, 25).map(c => ({
                    title: `${c.cveId}: ${c.vendor} ${c.product}`,
                    desc: c.shortDescription?.substring(0, 60) || 'CVE Details',
                    url: `/cve-tracker.html?cve=${c.cveId}`, type: 'cve', severity: c.severity
                })));
            }

            // Add all guides with searchable titles and descriptions
            const guides = [
                // NEW - December 2025
                { title: 'DORA Compliance Guide', url: '/guides/dora-compliance.html', desc: 'Digital Operational Resilience Act for financial services' },
                { title: 'NIST CSF 2.0 Implementation', url: '/guides/nist-csf-2-implementation.html', desc: 'New GOVERN function and 6 core functions' },
                { title: 'AI Governance Framework', url: '/guides/ai-governance-framework.html', desc: 'ChatGPT, Copilot security policies, EU AI Act' },
                { title: 'ZTNA Deployment Guide', url: '/guides/ztna-deployment.html', desc: 'Zero Trust Network Access architecture' },
                { title: 'Third-Party Risk Management', url: '/guides/third-party-risk-management.html', desc: 'TPRM vendor security assessment' },
                { title: 'Splunk SPL Query Guide', url: '/guides/splunk-spl-guide.html', desc: 'SPL commands and security detection queries' },
                { title: 'CVE Prioritization & Patch Management', url: '/guides/cve-prioritization-patch-management.html', desc: 'CVSS, EPSS, CISA KEV vulnerability management' },
                { title: 'MITRE ATT&CK Mapping', url: '/guides/mitre-attack-mapping.html', desc: 'Detection engineering with ATT&CK framework' },
                { title: 'Threat Intelligence Feeds Integration', url: '/guides/threat-intelligence-feeds-integration.html', desc: 'STIX/TAXII SIEM integration' },
                { title: 'SOC 2 Compliance Checklist', url: '/guides/soc2-compliance-checklist.html', desc: 'Trust Services Criteria audit prep' },
                // Previous guides
                { title: 'SIEM Log Analysis', url: '/guides/siem-log-analysis.html', desc: 'Security event correlation and analysis' },
                { title: 'Security Metrics & KPIs Dashboard', url: '/guides/security-metrics-kpis-dashboard.html', desc: 'Security reporting and metrics' },
                { title: 'Threat Intelligence for SOC', url: '/guides/threat-intelligence-soc.html', desc: 'TI integration for security operations' },
                { title: 'Threat Intelligence Feeds Comparison', url: '/guides/threat-intelligence-feeds-comparison.html', desc: 'Paid vs free TI feeds' },
                { title: 'Incident Response Automation', url: '/guides/incident-response-automation.html', desc: 'SOAR playbook automation' },
                { title: 'Phishing Simulation & Security Awareness', url: '/guides/phishing-simulation-security-awareness.html', desc: 'Employee security training' },
                { title: 'Insider Threat Detection', url: '/guides/insider-threat-detection.html', desc: 'UEBA and insider risk management' },
            ];
            this.searchIndex.push(...guides.map(g => ({ ...g, type: 'guide' })));

            this.hasLoaded = true;
            console.log(`[CommandPalette] ✓ Indexed ${this.searchIndex.length} items`);
        } catch (e) {
            console.warn('[CommandPalette] Index error:', e);
            this.hasLoaded = true;
        }
        this.showQuickActions();
    }

    showLoadingSkeleton() {
        this.resultsContainer.innerHTML = `
            <div class="cmd-palette__section">Loading...</div>
            ${[1, 2, 3].map(() => `<div class="cmd-palette__skeleton"><div class="skeleton-icon"></div><div class="skeleton-text"><div class="skeleton-line"></div><div class="skeleton-line"></div></div></div>`).join('')}
        `;
    }

    showQuickActions() {
        let html = '<div class="cmd-palette__section">Quick Actions</div>';
        this.quickActions.forEach((a, i) => { html += this.renderItem(a, i); });

        if (this.recentSearches.length) {
            html += '<div class="cmd-palette__section">Recent</div>';
            this.recentSearches.slice(0, 3).forEach((s, i) => {
                html += this.renderItem({ icon: 'fa-clock-rotate-left', title: s.query, desc: s.title, type: 'recent', url: s.url }, this.quickActions.length + i);
            });
        }

        this.resultsContainer.innerHTML = html;
        this.results = [...this.quickActions, ...this.recentSearches.slice(0, 3)];
        this.selectedIndex = 0;
        this.updateSelection();
    }

    handleSearch(query) {
        if (!query) { this.showQuickActions(); return; }
        const q = query.toLowerCase();
        let results = this.quickActions.filter(a => a.title.toLowerCase().includes(q));
        results.push(...this.searchIndex.filter(i => i.title.toLowerCase().includes(q) || i.desc?.toLowerCase().includes(q)).slice(0, 8));
        this.results = results;

        if (!results.length) {
            this.resultsContainer.innerHTML = `<div class="cmd-palette__empty"><i class="fas fa-search"></i><div>No results for "${query}"</div></div>`;
            return;
        }

        const grouped = results.reduce((a, r) => { (a[r.type] = a[r.type] || []).push(r); return a; }, {});
        let html = '';
        const labels = { action: 'Quick Actions', command: 'Commands', article: 'Articles', guide: 'Guides', cve: 'CVEs', recent: 'Recent' };

        for (const [type, items] of Object.entries(grouped)) {
            html += `<div class="cmd-palette__section">${labels[type] || 'Results'}</div>`;
            items.forEach(item => { html += this.renderItem(item, results.indexOf(item), query); });
        }

        this.resultsContainer.innerHTML = html;
        this.selectedIndex = 0;
        this.updateSelection();
    }

    renderItem(item, index, query = '') {
        const icons = { action: 'fa-link', command: 'fa-wand-magic-sparkles', article: 'fa-newspaper', guide: 'fa-book', cve: 'fa-bug', recent: 'fa-clock-rotate-left' };
        const icon = item.icon || icons[item.type] || 'fa-file';
        const title = query ? item.title.replace(new RegExp(`(${query})`, 'gi'), '<mark>$1</mark>') : item.title;
        let badges = '';
        if (item.severity === 'Critical') badges = '<span class="cmd-palette__item-badge badge-critical">Critical</span>';

        return `
            <div class="cmd-palette__item ${index === this.selectedIndex ? 'selected' : ''}" data-index="${index}" onclick="commandPalette.selectItem(${index})">
                <div class="cmd-palette__item-icon type-${item.type}"><i class="fas ${icon}"></i></div>
                <div class="cmd-palette__item-content">
                    <div class="cmd-palette__item-title">${title}</div>
                    ${item.desc ? `<div class="cmd-palette__item-desc">${item.desc}</div>` : ''}
                </div>
                <div class="cmd-palette__item-meta">${badges}${item.shortcut ? `<span class="cmd-palette__item-shortcut">${item.shortcut}</span>` : ''}</div>
            </div>
        `;
    }

    navigate(dir) {
        const items = this.resultsContainer.querySelectorAll('.cmd-palette__item');
        if (!items.length) return;
        this.selectedIndex = (this.selectedIndex + dir + items.length) % items.length;
        this.updateSelection();
        items[this.selectedIndex]?.scrollIntoView({ block: 'nearest' });
    }

    updateSelection() {
        this.resultsContainer.querySelectorAll('.cmd-palette__item').forEach((el, i) => {
            el.classList.toggle('selected', i === this.selectedIndex);
        });
    }

    selectItem(index) { this.selectedIndex = index; this.selectCurrent(); }

    selectCurrent() {
        const item = this.results[this.selectedIndex];
        if (!item) return;

        if (item.action) {
            if (item.action === 'toggleTheme') {
                typeof toggleTheme === 'function' ? toggleTheme() : document.body.classList.toggle('light-mode');
            } else if (item.action === 'scrollTop') {
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }
            this.close();
            return;
        }

        if (item.url) {
            const q = this.input.value.trim();
            if (q) this.saveRecent(q, item.title, item.url);
            this.close();
            window.location.href = item.url;
        }
    }

    saveRecent(query, title, url) {
        this.recentSearches = [{ query, title, url }, ...this.recentSearches.filter(s => s.query !== query)].slice(0, 5);
        localStorage.setItem('cmdPaletteRecent', JSON.stringify(this.recentSearches));
    }

    loadRecentSearches() {
        try { return JSON.parse(localStorage.getItem('cmdPaletteRecent') || '[]'); } catch { return []; }
    }

    open() {
        this.overlay.classList.add('active');
        this.isOpen = true;
        this.input.focus();
        document.body.style.overflow = 'hidden';
        if (!this.hasLoaded) this.loadSearchIndex();
    }

    close() {
        this.overlay.classList.remove('active');
        this.isOpen = false;
        document.body.style.overflow = '';
        this.input.value = '';
        setTimeout(() => this.showQuickActions(), 200);
    }

    toggle() { this.isOpen ? this.close() : this.open(); }
}

const commandPalette = new CommandPalette();
