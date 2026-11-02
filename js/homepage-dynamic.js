/* ==========================================================================
   THEHGTECH — DYNAMIC LIQUID GLASS HOMEPAGE ENGINE (V2 DEDUPLICATED & TOOLS-FIRST)
   Hydrates 100% live data across:
   - Stage 1 Full-Width Command Hero: Research Monographs | Security Guides | Weekly Dossier
     (Lead Featured Publication + 4 Recent Items side-by-side)
   - Stage 2 Single Twice-Daily News Shorts Studio (40 Briefings, inline reader & mobile sheet)
   - Stage 3 & 4 Live Data Showcases for all 8 Practitioner Tools:
     1. CVE Triage Workbench (cve-data.json)
     2. Threat Intel & SIEM Feeds (threat-intel-history.json)
     3. Ransomware Leak Monitor (ransomware-data.json)
     4. Hacker Chatter OSINT DB (stream-head inspect of data/hacker-chatter.json + fallback)
     5. Zero-Day Stack Exposure Checker (live vendor exposure index + inline stack check)
     6. ISO 27001:2022 GRC Readiness Engine (93 Annex A controls across 4 domains)
     7. n8n Security & SOAR Workflows (workflows/workflows.json)
     8. Security Platform Comparisons (Gartner MQ + G2 practitioner scorecards)
   ========================================================================== */

(function () {
    'use strict';

    function escapeHTML(str) {
        if (str === null || str === undefined) return '';
        return String(str)
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#39;');
    }

    function safeExternalUrl(url) {
        if (!url || typeof url !== 'string') return '#';
        try {
            const parsed = new URL(url, window.location.origin);
            if (parsed.protocol === 'http:' || parsed.protocol === 'https:') {
                return parsed.href;
            }
        } catch (_) { /* ignore */ }
        return '#';
    }

    function cleanRelativePath(p) {
        if (!p) return '';
        return String(p).replace(/^\//, '');
    }

    function parseTimestamp(dateStr) {
        if (!dateStr) return 0;
        const ts = Date.parse(dateStr);
        return Number.isNaN(ts) ? 0 : ts;
    }

    function formatCompact(num) {
        const n = Number(num) || 0;
        if (n >= 1000) return (n / 1000).toFixed(1).replace(/\.0$/, '') + 'K';
        return n.toLocaleString();
    }

    function sanitizeReportHTML(htmlStr) {
        if (!htmlStr) return '';
        const parser = new DOMParser();
        const doc = parser.parseFromString(htmlStr, 'text/html');
        doc.querySelectorAll('script, iframe, object, embed, link, style').forEach(el => el.remove());
        doc.querySelectorAll('*').forEach(el => {
            Array.from(el.attributes).forEach(attr => {
                if (attr.name.toLowerCase().startsWith('on')) {
                    el.removeAttribute(attr.name);
                }
            });
        });
        return doc.body.innerHTML;
    }

    const state = {
        shorts: {
            all: [],
            cyber: [],
            ai: [],
            studioFilter: 'all',
            searchQuery: '',
            selectedId: null
        },
        hero: {
            tab: 'research', // 'research' | 'guides' | 'dossier'
            pools: {
                research: [],
                guides: [],
                dossier: []
            },
            meta: {
                research: {
                    heading: 'Recent Research Monographs',
                    countLabel: 'Newest Investigations',
                    subNote: 'Original Technical Investigations',
                    archiveUrl: 'article-list.html',
                    archiveLabel: 'Research Library (197+) →',
                    secondaryUrl: 'articles.html',
                    secondaryLabel: 'Articles Portal'
                },
                guides: {
                    heading: 'Recent Security Engineering Guides',
                    countLabel: 'Practitioner Manuals',
                    subNote: 'Vendor-Neutral Implementation Blueprints',
                    archiveUrl: 'guides/',
                    archiveLabel: 'All 70 Field Guides →',
                    secondaryUrl: 'guides/',
                    secondaryLabel: 'Browse All Guides'
                },
                dossier: {
                    heading: 'Recent Automated Weekly Dossiers',
                    countLabel: 'Weekly Rollups',
                    subNote: 'Automated 7-Day Threat & IOC Synthesis',
                    archiveUrl: 'article-list.html',
                    archiveLabel: 'All Weekly Reports →',
                    secondaryUrl: 'threat-intel.html',
                    secondaryLabel: 'Live IOC Feeds'
                }
            }
        },
        cves: {
            data: null,
            mode: 'CISA_KEV'
        },
        chatter: {
            loadedFromStream: false
        }
    };

    /* ======================================================================
       1. NATIVE <dialog closedby="any"> LIGHT-DISMISS SETUP & SAFARI FALLBACK
       ====================================================================== */
    function setupLightDismissDialog(dialog) {
        if (!dialog) return;
        if (!('closedBy' in HTMLDialogElement.prototype)) {
            dialog.addEventListener('click', (event) => {
                if (event.target !== dialog) return;
                const rect = dialog.getBoundingClientRect();
                const isInside = (
                    rect.top <= event.clientY &&
                    event.clientY <= rect.top + rect.height &&
                    rect.left <= event.clientX &&
                    event.clientX <= rect.left + rect.width
                );
                if (!isInside) dialog.close();
            });
        }
    }

    /* ======================================================================
       2. SINGLE TWICE-DAILY NEWS SHORTS STUDIO (content.js — 40 BRIEFINGS)
       ====================================================================== */
    function initNewsShorts() {
        const rawCyber = (typeof websiteContent !== 'undefined' && Array.isArray(websiteContent.cyberShorts))
            ? websiteContent.cyberShorts : [];
        const rawAi = (typeof websiteContent !== 'undefined' && Array.isArray(websiteContent.aiShorts))
            ? websiteContent.aiShorts : [];

        const mapShort = (item, idx, stream) => ({
            id: `${stream}-${idx}`,
            stream,
            streamLabel: stream === 'cyber' ? 'Cyber Security' : 'AI & Governance',
            date: item.date || 'Recent',
            ts: parseTimestamp(item.date),
            origIndex: idx,
            headline: item.headline || item.title || 'Security Briefing',
            title: item.title || item.headline || 'Security Briefing',
            content: item.content || '',
            source: (item.source || 'TheHGTech Wire').split('|')[0].trim(),
            sourceUrl: safeExternalUrl(item.sourceUrl)
        });

        const sortChronologically = (a, b) => {
            if (b.ts !== a.ts) return b.ts - a.ts;
            if (a.stream !== b.stream) return a.stream === 'cyber' ? -1 : 1;
            return a.origIndex - b.origIndex;
        };

        state.shorts.cyber = rawCyber.map((x, i) => mapShort(x, i, 'cyber')).sort(sortChronologically);
        state.shorts.ai = rawAi.map((x, i) => mapShort(x, i, 'ai')).sort(sortChronologically);
        state.shorts.all = [...state.shorts.cyber, ...state.shorts.ai].sort(sortChronologically);

        if (state.shorts.all.length > 0) {
            state.shorts.selectedId = state.shorts.all[0].id;
        }

        const totalCount = state.shorts.all.length;
        const ribbonShorts = document.getElementById('metricShortsCount');
        if (ribbonShorts && totalCount > 0) ribbonShorts.textContent = String(totalCount);

        const countAll = document.getElementById('shortsCountAll');
        const countCyber = document.getElementById('shortsCountCyber');
        const countAi = document.getElementById('shortsCountAi');
        if (countAll) countAll.textContent = String(state.shorts.all.length);
        if (countCyber) countCyber.textContent = String(state.shorts.cyber.length);
        if (countAi) countAi.textContent = String(state.shorts.ai.length);

        renderNewsroomStudio();
    }

    function getFilteredShorts() {
        let base = state.shorts.all;
        if (state.shorts.studioFilter === 'cyber') base = state.shorts.cyber;
        if (state.shorts.studioFilter === 'ai') base = state.shorts.ai;

        const q = state.shorts.searchQuery.trim().toLowerCase();
        if (!q) return base;

        return base.filter(item =>
            item.headline.toLowerCase().includes(q) ||
            item.title.toLowerCase().includes(q) ||
            item.content.toLowerCase().includes(q) ||
            item.source.toLowerCase().includes(q)
        );
    }

    function renderNewsroomStudio() {
        const streamEl = document.getElementById('shortsStreamList');
        if (!streamEl) return;

        const filtered = getFilteredShorts();
        if (filtered.length === 0) {
            streamEl.innerHTML = `
                <div style="padding:1.5rem;text-align:center;color:var(--lg-ink-3);font-size:0.86rem;">
                    No briefings match "${escapeHTML(state.shorts.searchQuery)}".
                </div>`;
            return;
        }

        if (!filtered.some(x => x.id === state.shorts.selectedId)) {
            state.shorts.selectedId = filtered[0].id;
        }

        streamEl.innerHTML = filtered.map(item => {
            const isSelected = item.id === state.shorts.selectedId;
            return `
                <button type="button" class="lg-short-row${isSelected ? ' is-selected' : ''}" data-short-id="${escapeHTML(item.id)}">
                    <div class="lg-short-row-top">
                        <span class="lg-short-domain">
                            <span class="lg-stream-dot${item.stream === 'ai' ? ' is-ai' : ''}" aria-hidden="true"></span>
                            ${escapeHTML(item.source)}
                        </span>
                        <span>${escapeHTML(item.date)}</span>
                    </div>
                    <span class="lg-short-row-title">${escapeHTML(item.headline)}</span>
                </button>
            `;
        }).join('');

        streamEl.querySelectorAll('.lg-short-row').forEach(btn => {
            btn.addEventListener('click', () => {
                const id = btn.getAttribute('data-short-id');
                state.shorts.selectedId = id;
                renderNewsroomStudio();
                if (window.matchMedia('(max-width: 860px)').matches) {
                    openShortModal(id);
                }
            });
        });

        renderSelectedShortPane(filtered);
    }

    function extractMentionedCVEs(text) {
        if (!text) return [];
        const matches = text.match(/CVE-\d{4}-\d{4,7}/gi);
        return matches ? Array.from(new Set(matches.map(m => m.toUpperCase()))) : [];
    }

    function buildShortDetailMarkup(item, index, total) {
        const cveMentions = extractMentionedCVEs(`${item.title} ${item.content}`);
        const badgeClass = item.stream === 'ai' ? 'lg-badge lg-badge-blue' : 'lg-badge';
        const cveChips = cveMentions.map(cve =>
            `<a href="cve-tracker.html" class="lg-chip">${escapeHTML(cve)} &rarr;</a>`
        ).join('');

        return `
            <div class="lg-reader-top">
                <div class="lg-reader-meta">
                    <div style="display:flex;align-items:center;gap:0.5rem;flex-wrap:wrap;">
                        <span class="${badgeClass}">${escapeHTML(item.streamLabel)}</span>
                        <span class="lg-chip">${escapeHTML(item.source)}</span>
                    </div>
                    <span class="lg-reader-headline-kicker">${escapeHTML(item.date)} &bull; Briefing ${index + 1} of ${total}</span>
                </div>
                <h3 class="lg-reader-title">${escapeHTML(item.title)}</h3>
                <p class="lg-reader-content">${escapeHTML(item.content)}</p>
                ${cveChips ? `<div class="lg-reader-tags">${cveChips}</div>` : ''}
            </div>
            <div class="lg-reader-footer">
                <div class="lg-reader-nav">
                    <button type="button" class="lg-btn-glass" data-nav-short="prev" aria-label="Previous Briefing">&larr; Prev</button>
                    <button type="button" class="lg-btn-glass" data-nav-short="next" aria-label="Next Briefing">Next &rarr;</button>
                    <button type="button" class="lg-btn-glass" data-copy-short="${escapeHTML(item.id)}">Copy Brief</button>
                </div>
                ${item.sourceUrl !== '#' ? `
                    <a href="${escapeHTML(item.sourceUrl)}" target="_blank" rel="noopener noreferrer" class="lg-btn-primary">
                        <span>Original Source</span>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M7 17L17 7M7 7h10v10"/></svg>
                    </a>
                ` : ''}
            </div>
        `;
    }

    function wireReaderButtons(rootEl, filteredList) {
        if (!rootEl) return;
        rootEl.querySelectorAll('[data-nav-short]').forEach(btn => {
            btn.addEventListener('click', () => {
                const dir = btn.getAttribute('data-nav-short');
                const idx = filteredList.findIndex(x => x.id === state.shorts.selectedId);
                if (idx === -1) return;
                const nextIdx = dir === 'next'
                    ? (idx + 1) % filteredList.length
                    : (idx - 1 + filteredList.length) % filteredList.length;
                state.shorts.selectedId = filteredList[nextIdx].id;
                renderNewsroomStudio();
                const dialog = document.getElementById('shortReaderDialog');
                if (dialog && dialog.open) {
                    openShortModal(state.shorts.selectedId);
                }
            });
        });

        const copyBtn = rootEl.querySelector('[data-copy-short]');
        if (copyBtn) {
            copyBtn.addEventListener('click', async () => {
                const item = state.shorts.all.find(x => x.id === state.shorts.selectedId);
                if (!item) return;
                try {
                    await navigator.clipboard.writeText(`${item.title} (${item.date} — ${item.source})\n\n${item.content}`);
                    copyBtn.textContent = 'Copied';
                    setTimeout(() => { copyBtn.textContent = 'Copy Brief'; }, 1600);
                } catch (_) { /* ignore */ }
            });
        }
    }

    function renderSelectedShortPane(filteredList) {
        const pane = document.getElementById('shortsReaderStage');
        if (!pane) return;
        const idx = filteredList.findIndex(x => x.id === state.shorts.selectedId);
        const item = idx >= 0 ? filteredList[idx] : filteredList[0];
        if (!item) return;

        pane.innerHTML = buildShortDetailMarkup(item, Math.max(0, idx), filteredList.length);
        wireReaderButtons(pane, filteredList);
    }

    function openShortModal(shortId) {
        const dialog = document.getElementById('shortReaderDialog');
        const body = document.getElementById('shortDialogBody');
        if (!dialog || !body) return;

        const filtered = getFilteredShorts();
        const idx = filtered.findIndex(x => x.id === shortId);
        const item = idx >= 0 ? filtered[idx] : state.shorts.all.find(x => x.id === shortId);
        if (!item) return;

        body.innerHTML = buildShortDetailMarkup(item, Math.max(0, idx), filtered.length || state.shorts.all.length);
        wireReaderButtons(body, filtered.length ? filtered : state.shorts.all);

        if (!dialog.open) {
            dialog.showModal();
        }
    }

    /* ======================================================================
       3. FULL-WIDTH COMMAND HERO (RESEARCH | GUIDES | WEEKLY DOSSIER)
          Lead Featured Item (#1) on Left + 4 Recent Items (#2-#5) on Right
       ====================================================================== */
    function openWeeklyReportModal(report) {
        if (!report) return;
        const dialog = document.getElementById('shortReaderDialog');
        const body = document.getElementById('shortDialogBody');
        if (!dialog || !body) return;

        body.innerHTML = `
            <div class="lg-reader-top">
                <div class="lg-reader-meta">
                    <span class="lg-badge lg-badge-amber">Automated Weekly Threat Report</span>
                    <span class="lg-reader-headline-kicker">${escapeHTML(report.date || '')}</span>
                </div>
                <div style="font-size:0.92rem;line-height:1.68;color:var(--lg-ink-2);max-height:62vh;overflow-y:auto;padding-right:0.4rem;">
                    ${sanitizeReportHTML(report.content || `<p>${escapeHTML(report.excerpt || '')}</p>`)}
                </div>
            </div>
        `;
        if (!dialog.open) dialog.showModal();
    }

    function renderHeroSpotlight() {
        const tabKey = state.hero.tab;
        const pool = state.hero.pools[tabKey] || [];
        const meta = state.hero.meta[tabKey] || state.hero.meta.research;
        if (pool.length === 0) return;

        const lead = pool[0];
        const recent = pool.slice(1, 5);

        const imgEl = document.getElementById('heroCoverImg');
        const mediaLink = document.getElementById('heroCoverMediaLink');
        const badgeEl = document.getElementById('heroCoverBadge');
        const dateEl = document.getElementById('heroCoverDate');
        const readEl = document.getElementById('heroCoverReadTime');
        const titleLink = document.getElementById('heroCoverTitleLink');
        const excerptEl = document.getElementById('heroCoverExcerpt');
        const primaryBtn = document.getElementById('heroPrimaryCta');
        const secondaryBtn = document.getElementById('heroSecondaryCta');
        const topArchiveBtn = document.getElementById('heroTopArchiveLink');
        const recentHeading = document.getElementById('heroRecentHeading');
        const recentCountLbl = document.getElementById('heroRecentCountLabel');
        const recentListEl = document.getElementById('heroRecentList');
        const recentSubNote = document.getElementById('heroRecentSubNote');
        const recentArchiveLink = document.getElementById('heroRecentArchiveLink');

        if (imgEl && lead.image) {
            imgEl.src = cleanRelativePath(lead.image);
            imgEl.alt = lead.title;
        }
        if (badgeEl) {
            badgeEl.textContent = lead.category || 'Research';
            badgeEl.className = tabKey === 'guides'
                ? 'lg-badge lg-badge-emerald'
                : (tabKey === 'dossier' ? 'lg-badge lg-badge-amber' : 'lg-badge');
        }
        if (dateEl) dateEl.textContent = lead.date || '';
        if (readEl) readEl.textContent = lead.readTime || '10 min read';

        const wireLeadAction = (el) => {
            if (!el) return;
            el.href = lead.isReportModal ? '#intelligence' : lead.url;
            el.onclick = lead.isReportModal
                ? (e) => { e.preventDefault(); openWeeklyReportModal(lead.rawReport); }
                : null;
        };

        if (titleLink) {
            titleLink.textContent = lead.title;
            wireLeadAction(titleLink);
        }
        wireLeadAction(mediaLink);

        if (excerptEl) excerptEl.textContent = lead.excerpt || '';
        if (primaryBtn) {
            const span = primaryBtn.querySelector('span');
            if (span) span.textContent = lead.ctaLabel || 'Read Monograph';
            wireLeadAction(primaryBtn);
        }
        if (secondaryBtn) {
            secondaryBtn.href = meta.secondaryUrl;
            secondaryBtn.textContent = meta.secondaryLabel;
        }
        if (topArchiveBtn) {
            topArchiveBtn.href = meta.archiveUrl;
            topArchiveBtn.textContent = meta.archiveLabel;
        }
        if (recentHeading) recentHeading.textContent = meta.heading;
        if (recentCountLbl) recentCountLbl.textContent = meta.countLabel;
        if (recentSubNote) recentSubNote.textContent = meta.subNote;
        if (recentArchiveLink) {
            recentArchiveLink.href = meta.archiveUrl;
            recentArchiveLink.textContent = meta.archiveLabel;
        }

        if (recentListEl) {
            recentListEl.innerHTML = recent.map((item, idx) => `
                <a href="${escapeHTML(item.isReportModal ? '#intelligence' : item.url)}"
                   class="lg-hero-recent-item"
                   data-recent-idx="${idx + 1}">
                    <div class="lg-hero-recent-thumb">
                        <img src="${escapeHTML(cleanRelativePath(item.image))}" alt="${escapeHTML(item.title)}" loading="lazy" width="184" height="116">
                    </div>
                    <div class="lg-hero-recent-info">
                        <div class="lg-hero-recent-meta">
                            <span class="lg-hero-recent-cat">${escapeHTML(item.category || 'Research')}</span>
                            <span>&bull;</span>
                            <span>${escapeHTML(item.date || '')}</span>
                            <span>&bull;</span>
                            <span>${escapeHTML(item.readTime || '')}</span>
                        </div>
                        <h3 class="lg-hero-recent-title">${escapeHTML(item.title)}</h3>
                    </div>
                </a>
            `).join('');

            if (tabKey === 'dossier') {
                recentListEl.querySelectorAll('[data-recent-idx]').forEach(link => {
                    link.addEventListener('click', (e) => {
                        const poolIdx = Number(link.getAttribute('data-recent-idx')) || 1;
                        const target = pool[poolIdx];
                        if (target && target.isReportModal) {
                            e.preventDefault();
                            openWeeklyReportModal(target.rawReport);
                        }
                    });
                });
            }
        }
    }

    function hydrateArticles(data) {
        const all = Array.isArray(data && data.articles) ? data.articles : [];

        const monographs = all
            .filter(a => a.author !== 'TheHGTech Bot' && a.externalUrl && !String(a.id || '').startsWith('report-'))
            .map((a, idx) => ({ ...a, _ts: parseTimestamp(a.date), _idx: idx }))
            .sort((a, b) => (b._ts !== a._ts ? b._ts - a._ts : a._idx - b._idx));

        const weeklyReports = all
            .filter(a => String(a.id || '').startsWith('report-') || a.badge === 'WEEKLY')
            .map((a, idx) => ({ ...a, _ts: parseTimestamp(a.date), _idx: idx }))
            .sort((a, b) => (b._ts !== a._ts ? b._ts - a._ts : a._idx - b._idx));

        state.hero.pools.research = monographs.slice(0, 5).map(a => ({
            title: a.title,
            excerpt: a.excerpt,
            date: a.date,
            readTime: a.readTime || '9 min read',
            category: a.category || (a.tags && a.tags[0]) || 'Research Monograph',
            image: a.image || 'images/articles/enterprise-vulnerability-management-exposure-blind-spot-2026.png',
            url: cleanRelativePath(a.externalUrl),
            ctaLabel: 'Read Monograph'
        }));

        state.hero.pools.dossier = weeklyReports.slice(0, 5).map(r => ({
            title: r.title,
            excerpt: r.excerpt,
            date: r.date,
            readTime: '6 min telemetry read',
            category: 'Weekly Threat Dossier',
            image: r.image || 'images/articles/weekly-threat-report-generic.png',
            url: '#intelligence',
            isReportModal: true,
            rawReport: r,
            ctaLabel: 'Open Weekly Dossier'
        }));

        state.hero.meta.research.archiveLabel = `Research Library (${all.length}+) →`;
        state.hero.meta.dossier.archiveLabel = `All Weekly Reports (${weeklyReports.length}) →`;

        const metricArticles = document.getElementById('metricArticlesCount');
        if (metricArticles) metricArticles.textContent = `${all.length}+`;

        renderHeroSpotlight();
    }

    function hydrateGuides(data) {
        const raw = Array.isArray(data && data.guides) ? data.guides : [];
        const sorted = raw
            .map((g, idx) => ({
                ...g,
                _ts: parseTimestamp(g.date),
                _idx: idx,
                url: `guides/${g.id}.html`
            }))
            .sort((a, b) => (b._ts !== a._ts ? b._ts - a._ts : a._idx - b._idx));

        state.hero.pools.guides = sorted.slice(0, 5).map(g => ({
            title: g.title,
            excerpt: g.excerpt,
            date: g.date,
            readTime: `${g.readTime || '20 min'} guide`,
            category: g.category || 'Field Manual',
            image: g.image || 'images/guides/soc-analyst-fundamentals.png',
            url: g.url,
            ctaLabel: 'Open Field Manual'
        }));

        state.hero.meta.guides.archiveLabel = `All ${sorted.length} Field Guides →`;

        const metricGuides = document.getElementById('metricGuidesCount');
        if (metricGuides) metricGuides.textContent = String(sorted.length);

        if (state.hero.tab === 'guides') {
            renderHeroSpotlight();
        }
    }

    /* ======================================================================
       4. LIVE TOOL DATA SHOWCASES (ALL 8 PRACTITIONER TOOLS)
       ====================================================================== */

    // Tool 1 (CVE Triage Workbench) & Tool 5 (Zero-Day Stack Exposure Checker)
    function hydrateCVEs(data) {
        if (!data || !Array.isArray(data.cves)) return;
        state.cves.data = data;

        const totalCount = data.totalCVEs || data.cves.length;
        const kevCount = (data.sources && data.sources.cisaKev) || data.cves.filter(c => c.source === 'CISA_KEV').length;
        const zeroDays = data.cves.filter(c => c.isZeroDay).length;

        const metricCves = document.getElementById('metricCveCount');
        if (metricCves) metricCves.textContent = String(totalCount);

        const kpiTotal = document.getElementById('cveKpiTotal');
        const kpiKev = document.getElementById('cveKpiKev');
        const kpiZero = document.getElementById('cveKpiZero');
        if (kpiTotal) kpiTotal.textContent = String(totalCount);
        if (kpiKev) kpiKev.textContent = String(kevCount);
        if (kpiZero) kpiZero.textContent = String(zeroDays);

        renderCVEFeedRows();
        hydrateZeroDayVendorChecker(data.cves);
    }

    function renderCVEFeedRows() {
        const listEl = document.getElementById('liveCveRows');
        if (!listEl || !state.cves.data) return;

        const items = state.cves.data.cves
            .filter(c => state.cves.mode === 'CISA_KEV' ? c.source === 'CISA_KEV' : c.source !== 'CISA_KEV')
            .slice(0, 5);

        listEl.innerHTML = items.map(c => {
            const vendorProduct = [c.vendor, c.product && c.product !== 'Unknown' ? c.product : ''].filter(Boolean).join(' · ') || c.shortDescription || 'Critical Advisory';
            const rightBadge = c.isZeroDay
                ? '<span class="lg-badge">Zero-Day</span>'
                : (c.cvssScore ? `<span class="lg-badge lg-badge-amber">CVSS ${escapeHTML(c.cvssScore)}</span>` : '<span class="lg-badge lg-badge-blue">CISA KEV</span>');

            return `
                <a href="cve-tracker.html" class="lg-feed-row">
                    <div class="lg-feed-row-main">
                        <span class="lg-feed-row-id">${escapeHTML(c.cveId)}</span>
                        <span class="lg-feed-row-sub">${escapeHTML(vendorProduct)}</span>
                    </div>
                    <div style="flex-shrink:0;">${rightBadge}</div>
                </a>
            `;
        }).join('');
    }

    function evaluateVendorExposure(vendorQuery) {
        const resultEl = document.getElementById('inlineZeroDayResult');
        if (!resultEl || !state.cves.data) return;

        const q = (vendorQuery || '').trim();
        if (!q) {
            resultEl.innerHTML = `
                <span>Select or type any vendor below to preview active KEV &amp; critical CVE exposure.</span>
                <span class="lg-chip">${state.cves.data.cves.length} CVEs Indexed</span>
            `;
            return;
        }

        const lower = q.toLowerCase();
        const matches = state.cves.data.cves.filter(c =>
            (c.vendor && c.vendor.toLowerCase().includes(lower)) ||
            (c.product && c.product.toLowerCase().includes(lower)) ||
            (c.shortDescription && c.shortDescription.toLowerCase().includes(lower))
        );

        if (matches.length === 0) {
            resultEl.innerHTML = `
                <span style="color:var(--lg-signal-emerald);font-weight:600;">0 active KEV/Critical CVEs matched "${escapeHTML(q)}" in current window.</span>
                <a href="cve-tracker.html?q=${encodeURIComponent(q)}" class="lg-chip">Full Triage &rarr;</a>
            `;
            return;
        }

        const kevMatches = matches.filter(m => m.source === 'CISA_KEV').length;
        const topCve = matches[0].cveId;
        resultEl.innerHTML = `
            <span><strong style="color:var(--lg-accent);">${matches.length} Active Advisories</strong> for "${escapeHTML(q)}" (${kevMatches} CISA KEV &bull; Latest: <code style="font-family:var(--lg-font-mono);">${escapeHTML(topCve)}</code>)</span>
            <a href="cve-tracker.html?q=${encodeURIComponent(q)}" class="lg-chip">Inspect &rarr;</a>
        `;
    }

    function hydrateZeroDayVendorChecker(cves) {
        const cloudEl = document.getElementById('zeroDayVendorCloud');
        const inputEl = document.getElementById('inlineZeroDayInput');
        if (!cloudEl || !Array.isArray(cves)) return;

        const vendorCounts = new Map();
        cves.forEach(c => {
            const v = (c.vendor || '').trim();
            if (!v || v === 'Unknown' || v === 'N/A') return;
            vendorCounts.set(v, (vendorCounts.get(v) || 0) + 1);
        });

        const topVendors = Array.from(vendorCounts.entries())
            .sort((a, b) => b[1] - a[1])
            .slice(0, 7);

        cloudEl.innerHTML = topVendors.map(([vendor, count]) => `
            <button type="button" class="lg-chip" data-check-vendor="${escapeHTML(vendor)}" style="cursor:pointer;">
                <strong style="color:var(--lg-ink-1);">${escapeHTML(vendor)}</strong> &middot; ${count} CVEs
            </button>
        `).join('');

        cloudEl.querySelectorAll('[data-check-vendor]').forEach(btn => {
            btn.addEventListener('click', () => {
                const vendor = btn.getAttribute('data-check-vendor') || '';
                if (inputEl) inputEl.value = vendor;
                evaluateVendorExposure(vendor);
            });
        });

        if (inputEl) {
            inputEl.addEventListener('input', () => {
                evaluateVendorExposure(inputEl.value);
            });
        }

        // Pre-highlight the #1 most exposed enterprise vendor on load
        if (topVendors.length > 0) {
            evaluateVendorExposure(topVendors[0][0]);
        }
    }

    // Tool 2: Threat Intel & SIEM Feeds
    function hydrateThreatIntel(data) {
        if (!data) return;
        const cats = (data.previous_day && data.previous_day.categories) || {};
        const total24h = Object.values(cats).reduce((sum, v) => sum + (Number(v) || 0), 0);

        const metricIocs = document.getElementById('metricIocCount');
        if (metricIocs && total24h > 0) metricIocs.textContent = formatCompact(total24h);

        const kpi24h = document.getElementById('tiKpiTotal');
        if (kpi24h && total24h > 0) kpi24h.textContent = formatCompact(total24h);

        const distEl = document.getElementById('tiDistBars');
        if (distEl && total24h > 0) {
            const entries = Object.entries(cats).sort((a, b) => b[1] - a[1]);
            const maxVal = Math.max(...entries.map(e => e[1]), 1);
            distEl.innerHTML = entries.map(([label, val], idx) => {
                const pct = Math.max(8, Math.round((val / maxVal) * 100));
                return `
                    <div class="lg-dist-item">
                        <div class="lg-dist-label-row">
                            <span>${escapeHTML(label)}</span>
                            <strong>${Number(val).toLocaleString()}</strong>
                        </div>
                        <div class="lg-dist-track">
                            <div class="lg-dist-fill${idx % 2 === 1 ? ' is-blue' : ''}" style="width:${pct}%"></div>
                        </div>
                    </div>
                `;
            }).join('');
        }

        const campaigns = data.previous_hour_campaigns || {};
        const excludedGeneric = new Set(['CINS Threat List', 'malware_download', 'SSH Attacks', 'Generic Phishing', 'Spamhaus DROP List', 'Unassigned Malware', 'Unknown malware', 'Unknown Loader']);
        const topNamed = Object.entries(campaigns)
            .filter(([name]) => !excludedGeneric.has(name))
            .sort((a, b) => b[1] - a[1])
            .slice(0, 6);

        const cloudEl = document.getElementById('tiCampaignCloud');
        if (cloudEl && topNamed.length > 0) {
            cloudEl.innerHTML = topNamed.map(([name, count]) => `
                <a href="threat-intel.html" class="lg-chip">
                    <strong style="color:var(--lg-ink-1);">${escapeHTML(name)}</strong> &middot; ${Number(count).toLocaleString()}
                </a>
            `).join('');
        }
    }

    // Tool 3 (Ransomware Leak Monitor) & Fallback for Tool 4 (Hacker Chatter OSINT)
    function hydrateRansomware(data) {
        if (!data) return;
        const groupsCount = data.total_groups || (Array.isArray(data.groups) ? data.groups.length : 0);
        const victims7d = data.total_victims || 0;
        const last24h = data.disclosures_24h || 0;

        const metricRw = document.getElementById('metricRansomwareCount');
        if (metricRw) metricRw.textContent = String(groupsCount);

        const rwGroupsEl = document.getElementById('rwKpiGroups');
        const rw24hEl = document.getElementById('rwKpi24h');
        const rw7dEl = document.getElementById('rwKpi7d');
        if (rwGroupsEl) rwGroupsEl.textContent = String(groupsCount);
        if (rw24hEl) rw24hEl.textContent = String(last24h);
        if (rw7dEl) rw7dEl.textContent = String(victims7d);

        const groups = Array.isArray(data.groups) ? data.groups : [];
        const recentDisclosures = [];
        groups.forEach(g => {
            (g.victims || []).slice(0, 2).forEach(v => {
                recentDisclosures.push({
                    victim: v.victim_name || v.domain || 'Undisclosed Entity',
                    group: g.name || v.group_name || 'Unknown',
                    country: v.country_code || v.country || 'Global',
                    sector: v.sector || v.activity || 'Enterprise',
                    date: v.discovered_date || '',
                    ts: parseTimestamp(v.discovered || v.discovered_date)
                });
            });
        });
        recentDisclosures.sort((a, b) => b.ts - a.ts);

        const rowsEl = document.getElementById('liveRansomwareRows');
        if (rowsEl) {
            rowsEl.innerHTML = recentDisclosures.slice(0, 5).map(item => `
                <a href="ransomware-tracker.html" class="lg-feed-row">
                    <div class="lg-feed-row-main">
                        <span class="lg-feed-row-id">${escapeHTML(item.victim)}</span>
                        <span class="lg-feed-row-sub">Actor: ${escapeHTML(item.group)} &bull; ${escapeHTML(item.date)}</span>
                    </div>
                    <span class="lg-chip" style="flex-shrink:0;">${escapeHTML(item.country)}</span>
                </a>
            `).join('');
        }

        // Populate Hacker Chatter rows if stream-head reader hasn't populated them yet
        const chatterEl = document.getElementById('liveChatterRows');
        if (chatterEl && !state.chatter.loadedFromStream && recentDisclosures.length > 0) {
            chatterEl.innerHTML = recentDisclosures.slice(0, 5).map(item => `
                <a href="hacker-chatter.html" class="lg-feed-row">
                    <div class="lg-feed-row-main">
                        <span class="lg-feed-row-id">${escapeHTML(item.victim)}</span>
                        <span class="lg-feed-row-sub">Claim by ${escapeHTML(item.group)} &bull; ${escapeHTML(item.sector)}</span>
                    </div>
                    <span class="lg-chip" style="flex-shrink:0;">OSINT</span>
                </a>
            `).join('');
        }
    }

    // Tool 4: Lightweight <12KB Stream-Head Reader for data/hacker-chatter.json (avoids 21MB full download)
    async function hydrateHackerChatterHead() {
        const controller = new AbortController();
        try {
            const res = await fetch('data/hacker-chatter.json', { signal: controller.signal });
            if (!res.ok || !res.body) return;

            const reader = res.body.getReader();
            const decoder = new TextDecoder();
            let headChunk = '';

            while (headChunk.length < 12000) {
                const { value, done } = await reader.read();
                if (value) headChunk += decoder.decode(value, { stream: true });
                if (done) break;
            }
            try { await reader.cancel(); } catch (_) { /* ignore */ }
            controller.abort();

            const totalMatch = headChunk.match(/"total_incidents"\s*:\s*(\d+)/);
            if (totalMatch) {
                const total = Number(totalMatch[1]);
                const hcKpi = document.getElementById('hcKpiTotal');
                if (hcKpi && total > 0) hcKpi.textContent = `${formatCompact(total)}+`;
            }

            // Extract up to 5 incident objects cleanly from the opening JSON array
            const incidents = [];
            const objRegex = /\{\s*"id"\s*:\s*"[^"]*"[\s\S]*?"source"\s*:\s*"[^"]*"\s*\}/g;
            let m;
            while ((m = objRegex.exec(headChunk)) !== null && incidents.length < 5) {
                try {
                    incidents.push(JSON.parse(m[0]));
                } catch (_) { /* ignore partial chunk */ }
            }

            const chatterEl = document.getElementById('liveChatterRows');
            if (chatterEl && incidents.length > 0) {
                state.chatter.loadedFromStream = true;
                chatterEl.innerHTML = incidents.map(inc => {
                    const datePart = (inc.date_discovered || '').split('T')[0];
                    const industry = (inc.industry && inc.industry !== 'Other') ? inc.industry : 'OSINT Claim';
                    return `
                        <a href="hacker-chatter.html" class="lg-feed-row">
                            <div class="lg-feed-row-main">
                                <span class="lg-feed-row-id">${escapeHTML(inc.victim_name || 'Undisclosed')}</span>
                                <span class="lg-feed-row-sub">Actor: ${escapeHTML(inc.threat_actor || 'Unknown')} &bull; ${escapeHTML(datePart)}</span>
                            </div>
                            <span class="lg-chip" style="flex-shrink:0;">${escapeHTML(industry)}</span>
                        </a>
                    `;
                }).join('');
            }
        } catch (_) {
            /* AbortError after reading first 12KB is expected */
        }
    }

    // Tool 7: n8n Security & SOAR Workflows
    function hydrateWorkflows(data) {
        if (!Array.isArray(data) || data.length === 0) return;

        const totalNodes = data.reduce((sum, w) => sum + (Number(w.nodes) || 0), 0);
        const pbEl = document.getElementById('wfKpiPlaybooks');
        const nodesEl = document.getElementById('wfKpiNodes');
        if (pbEl) pbEl.textContent = String(data.length);
        if (nodesEl && totalNodes > 0) nodesEl.textContent = String(totalNodes);

        const rowsEl = document.getElementById('liveWorkflowRows');
        if (rowsEl) {
            rowsEl.innerHTML = data.slice(0, 4).map(wf => {
                const href = wf.live && wf.id === 'cve-slack-alerts'
                    ? 'workflows/cve-slack-alerts.html'
                    : 'workflows/';
                const statusBadge = wf.live
                    ? '<span class="lg-badge lg-badge-emerald">Live JSON</span>'
                    : `<span class="lg-chip">${escapeHTML(wf.nodes || 8)} Nodes</span>`;

                return `
                    <a href="${escapeHTML(href)}" class="lg-feed-row">
                        <div class="lg-feed-row-main">
                            <span class="lg-feed-row-id">${escapeHTML(wf.title)}</span>
                            <span class="lg-feed-row-sub">${escapeHTML(wf.category || 'SOAR')} &bull; ${escapeHTML(wf.nodes || 6)} Nodes &bull; ${escapeHTML(wf.estimatedTime || '15 min')}</span>
                        </div>
                        <div style="flex-shrink:0;">${statusBadge}</div>
                    </a>
                `;
            }).join('');
        }
    }

    /* ======================================================================
       5. EVENT BINDINGS & PARALLEL LIVE FETCH BOOTSTRAP
       ====================================================================== */
    function bindControls() {
        setupLightDismissDialog(document.getElementById('shortReaderDialog'));

        // Full-Width Hero Tab Switcher (Research | Guides | Weekly Dossier)
        document.querySelectorAll('[data-hero-tab]').forEach(btn => {
            btn.addEventListener('click', () => {
                state.hero.tab = btn.getAttribute('data-hero-tab') || 'research';
                document.querySelectorAll('[data-hero-tab]').forEach(b =>
                    b.classList.toggle('is-active', b === btn)
                );
                renderHeroSpotlight();
            });
        });

        // Newsroom Studio Filter Tabs (All | Cyber | AI)
        document.querySelectorAll('[data-shorts-filter]').forEach(btn => {
            btn.addEventListener('click', () => {
                state.shorts.studioFilter = btn.getAttribute('data-shorts-filter') || 'all';
                document.querySelectorAll('[data-shorts-filter]').forEach(b =>
                    b.classList.toggle('is-active', b === btn)
                );
                renderNewsroomStudio();
            });
        });

        // Newsroom Studio Instant Search
        const searchInput = document.getElementById('shortsSearchInput');
        if (searchInput) {
            searchInput.addEventListener('input', () => {
                state.shorts.searchQuery = searchInput.value || '';
                renderNewsroomStudio();
            });
        }

        // CVE Module Mode Switcher (CISA KEV | Critical NVD)
        document.querySelectorAll('[data-cve-mode]').forEach(btn => {
            btn.addEventListener('click', () => {
                state.cves.mode = btn.getAttribute('data-cve-mode') || 'CISA_KEV';
                document.querySelectorAll('[data-cve-mode]').forEach(b =>
                    b.classList.toggle('is-active', b === btn)
                );
                renderCVEFeedRows();
            });
        });
    }

    async function fetchJSON(url) {
        const res = await fetch(url);
        if (!res.ok) throw new Error(`${url}: ${res.status}`);
        return res.json();
    }

    async function bootstrap() {
        bindControls();
        initNewsShorts();

        const [articlesRes, guidesRes, cveRes, tiRes, rwRes, wfRes] = await Promise.allSettled([
            fetchJSON('ioc-data/articles.json'),
            fetchJSON('guides/guides.json'),
            fetchJSON('cve-data.json'),
            fetchJSON('threat-intel-history.json'),
            fetchJSON('ransomware-data.json'),
            fetchJSON('workflows/workflows.json'),
            hydrateHackerChatterHead()
        ]);

        if (articlesRes.status === 'fulfilled') hydrateArticles(articlesRes.value);
        if (guidesRes.status === 'fulfilled') hydrateGuides(guidesRes.value);
        if (cveRes.status === 'fulfilled') hydrateCVEs(cveRes.value);
        if (tiRes.status === 'fulfilled') hydrateThreatIntel(tiRes.value);
        if (rwRes.status === 'fulfilled') hydrateRansomware(rwRes.value);
        if (wfRes.status === 'fulfilled') hydrateWorkflows(wfRes.value);
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', bootstrap);
    } else {
        bootstrap();
    }
})();
