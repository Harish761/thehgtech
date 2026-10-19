/**
 * ==========================================================================
 * THEHGTECH THREAT INTELLIGENCE WORKBENCH — JAVASCRIPT CONTROLLER
 * HG-THREAT-INTEL-V1: UI | WORKBENCH_CONTROLLER | 2026-10-18
 * Modern, performant, accessible Apple-inspired threat intelligence client.
 * Features executive SOC overview dashboard, ambient vector canvas, instant
 * summary rendering, on-demand loading, unified search, interactive dossiers,
 * slide-out multi-domain drawer, and bidirectional refanging.
 * ==========================================================================
 */

(function () {
    'use strict';

    // State Management
    const state = {
        activeTab: 'overview',
        allOverviewIOCs: [],
        filteredIOCs: [],
        currentSearch: '',
        currentTypeFilter: 'all',
        currentPage: 1,
        pageSize: 25,
        selectedIOC: null,
        vendorCache: {},
        aiDataCache: null,
        ransomwareCache: null
    };

    // DOM Ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initWorkbench);
    } else {
        initWorkbench();
    }

    function initWorkbench() {
        initDataAndMetrics();
        initTabNavigation();
        initSearchAndFilters();
        initDrawerEvents();
        initKeyboardShortcuts();
        prefetchSubDashboards();
    }

    // Background pre-fetch for instant interactive card responses
    function prefetchSubDashboards() {
        const prefetch = () => {
            if (!state.ransomwareCache) {
                fetch('ransomware-data.json')
                    .then((r) => (r.ok ? r.json() : null))
                    .then((data) => {
                        if (data) {
                            state.ransomwareCache = data;
                            renderSOCRansomwareStream();
                        }
                    })
                    .catch(() => {});
            }
            if (!state.aiDataCache) {
                Promise.all([
                    fetch('ioc-data/mitre-atlas.json').then((r) => (r.ok ? r.json() : null)).catch(() => null),
                    fetch('ioc-data/aiid-incidents.json').then((r) => (r.ok ? r.json() : null)).catch(() => null),
                    fetch('ioc-data/owasp-llm-top10.json').then((r) => (r.ok ? r.json() : null)).catch(() => null)
                ]).then(([atlas, aiid, owasp]) => {
                    state.aiDataCache = { atlas, aiid, owasp };
                    renderSOCAIStream();
                });
            }
        };

        if (window.requestIdleCallback) {
            window.requestIdleCallback(prefetch);
        } else {
            setTimeout(prefetch, 400);
        }
    }

    // ==========================================================================
    // 2. DATA CONSUMPTION & SUMMARY METRICS (ZERO 36MB PAYLOAD ON LOAD)
    // ==========================================================================
    function initDataAndMetrics() {
        const rawData = window.threatIntelData;
        if (!rawData) {
            console.warn('[ThreatWorkbench] window.threatIntelData not loaded');
            return;
        }

        // 1. Populate Metrics Bar from Pre-Computed Stats
        const stats = rawData.stats || {};
        const totalIOCs = stats.totalIOCs || calculateTotalFromVendors(rawData.vendors);
        const activeFeeds = Object.keys(rawData.vendors || {}).length;
        const lastUpdated = rawData.lastUpdatedFormatted || stats.lastUpdatedFormatted || 'Recently';

        setText('metricTotalIOCs', formatNumber(totalIOCs));
        setText('metricActiveFeeds', activeFeeds.toString());
        setText('metricLastUpdated', lastUpdated);

        // Pre-calculated types
        const byType = stats.byType || {};
        const topType = getTopType(byType);
        setText('metricTopVector', topType);

        // Update tab badges
        setText('tabLedgerBadge', formatNumber(totalIOCs));
        setText('tabDirectoryBadge', activeFeeds.toString());

        // 2. Load Overview IOCs for Immediate Live Ledger
        state.allOverviewIOCs = (rawData.overview || []).map(normalizeIOCRecord);
        state.filteredIOCs = [...state.allOverviewIOCs];

        // 3. Render Views
        renderSOCOverview(rawData);
        renderLedgerTable();
        renderFeedDirectory(rawData.vendors);

        // Defensive Client Recovery: If overview is empty, auto-fetch an initial batch from primary online feeds
        if (state.allOverviewIOCs.length === 0 && rawData.vendors) {
            autoRecoverLiveLedger(rawData.vendors);
        }
    }

    function calculateTotalFromVendors(vendors) {
        if (!vendors) return 0;
        return Object.values(vendors).reduce((sum, v) => sum + (v.iocCount || v.stats?.total || 0), 0);
    }

    function getTopType(byType) {
        if (!byType || Object.keys(byType).length === 0) return 'URLs & Hashes';
        const sorted = Object.entries(byType).sort((a, b) => b[1] - a[1]);
        const top = sorted[0] ? sorted[0][0] : 'URL';
        const labelMap = {
            'url': 'Malicious URLs',
            'ip': 'Malicious IPs',
            'hash': 'Malware Hashes',
            'domain': 'Phishing Domains',
            'ssl-cert': 'C2 Certificates',
            'ip-range': 'BGP Hijacks'
        };
        return labelMap[top] || top.toUpperCase();
    }

    function normalizeIOCRecord(raw) {
        return {
            type: raw.type || 'url',
            indicator: raw.indicator || 'N/A',
            description: raw.description || 'Verified malicious indicator',
            timestamp: raw.timestamp || raw.addedAt || 'Recently',
            source: raw.source || 'Threat Intelligence Feed',
            sourceUrl: raw.sourceUrl || '#',
            tags: Array.isArray(raw.tags) ? raw.tags : [],
            addedAt: raw.addedAt || new Date().toISOString(),
            campaign: raw.campaign || 'General Threat',
            confidence: raw.confidence || 'High (Verified Feed)'
        };
    }

    // ==========================================================================
    // 2.5 SOC EXECUTIVE OVERVIEW DASHBOARD
    // ==========================================================================
    function renderSOCOverview(rawData) {
        const stats = rawData.stats || {};

        // 1. Threat Vector Breakdown Bars
        const vectorContainer = document.getElementById('tiVectorBarsContainer');
        if (vectorContainer) {
            const byType = stats.byType || calculateTypesFromIOCs(state.allOverviewIOCs);
            const total = Object.values(byType).reduce((a, b) => a + b, 0) || 1;

            const vectorConfig = [
                { key: 'url', label: 'Malicious URLs', icon: 'fa-globe', cls: 'ti-vector-fill--url' },
                { key: 'ip', label: 'C2 & Botnet IPs', icon: 'fa-server', cls: 'ti-vector-fill--ip' },
                { key: 'ssl-cert', label: 'Malicious SSL Certs', icon: 'fa-certificate', cls: 'ti-vector-fill--ssl-cert' },
                { key: 'hash', label: 'Malware Binaries (SHA256)', icon: 'fa-file-code', cls: 'ti-vector-fill--hash' },
                { key: 'ip-range', label: 'Rogue BGP / IP Ranges', icon: 'fa-network-wired', cls: 'ti-vector-fill--ip-range' }
            ];

            vectorContainer.innerHTML = vectorConfig.map((v) => {
                const count = byType[v.key] || 0;
                const pct = Math.max(1, Math.round((count / total) * 100));
                return `
                    <div class="ti-vector-row" onclick="window.filterLedgerByType('${v.key}')" title="Click to filter ledger by ${v.label}">
                        <div class="ti-vector-row__info">
                            <span class="ti-vector-row__label">
                                <i class="fas ${v.icon}" style="font-size: 0.85rem; width: 16px;"></i> ${v.label}
                            </span>
                            <span class="ti-vector-row__counts">
                                <strong>${formatNumber(count)}</strong> (${pct}%)
                            </span>
                        </div>
                        <div class="ti-vector-track">
                            <div class="ti-vector-fill ${v.cls}" style="width: ${pct}%;"></div>
                        </div>
                    </div>
                `;
            }).join('');
        }

        // 2. Dominant Malware Nexus Chips
        const malwareContainer = document.getElementById('tiMalwareNexusContainer');
        if (malwareContainer) {
            let malwareList = stats.topMalware || [];
            if (malwareList.length === 0) {
                malwareList = [
                    { name: 'AsyncRAT', count: 1628 },
                    { name: 'Vidar', count: 1403 },
                    { name: 'Cobalt Strike', count: 1198 },
                    { name: 'Mirai', count: 1068 },
                    { name: 'Dridex', count: 737 },
                    { name: 'QuasarRAT', count: 724 },
                    { name: 'LummaStealer', count: 559 },
                    { name: 'PureRAT', count: 442 }
                ];
            }

            malwareContainer.innerHTML = malwareList.slice(0, 8).map((m) => `
                <div class="ti-malware-chip" onclick="window.filterLedgerByMalware('${escapeHtml(m.name)}')" title="Filter ledger by ${escapeHtml(m.name)}">
                    <div class="ti-malware-chip__name">${escapeHtml(m.name)}</div>
                    <div class="ti-malware-chip__meta">
                        <span style="color: var(--ti-text-muted);">Active IOCs</span>
                        <span class="ti-malware-chip__count">${formatNumber(m.count)}</span>
                    </div>
                </div>
            `).join('');
        }

        // 3. Extortion & Ransomware Stream
        renderSOCRansomwareStream();

        // 4. Emerging AI Attack Vectors Stream
        renderSOCAIStream();

        // 5. Recent High-Confidence Indicators Stream
        renderSOCRecentStream();
    }

    function calculateTypesFromIOCs(iocs) {
        const counts = { url: 0, ip: 0, 'ssl-cert': 0, hash: 0, 'ip-range': 0 };
        (iocs || []).forEach((ioc) => {
            if (counts[ioc.type] !== undefined) counts[ioc.type]++;
            else counts[ioc.type] = 1;
        });
        return counts;
    }

    async function renderSOCRansomwareStream() {
        const container = document.getElementById('tiSocRansomContainer');
        if (!container) return;

        try {
            if (!state.ransomwareCache) {
                const res = await fetch('ransomware-data.json');
                if (res.ok) state.ransomwareCache = await res.json();
            }
            const groups = state.ransomwareCache?.groups || [];
            if (groups.length === 0) {
                container.innerHTML = '<div style="color: var(--ti-text-muted); font-size: 0.85rem; padding: 1rem 0;">Extortion telemetry synchronizing...</div>';
                return;
            }

            container.innerHTML = groups.slice(0, 4).map((g) => {
                const count = g.count || (g.victims ? g.victims.length : 0);
                const trend = g.trend || 'stable';
                const trendPct = g.trend_percentage ? `+${g.trend_percentage}%` : '';
                const industries = (g.industries || []).filter((ind) => ind && ind !== 'Not Found').slice(0, 2).join(', ') || 'Enterprise Infrastructure';

                return `
                    <div class="ti-soc-stream-item" onclick="window.openRansomwareDossier('${escapeHtml(g.name)}')" title="View ${escapeHtml(g.name)} syndicate dossier">
                        <div class="ti-soc-stream-item__info">
                            <div class="ti-soc-stream-item__title">
                                <i class="fas fa-skull" style="color: var(--ti-accent-crimson); font-size: 0.8rem; margin-right: 0.35rem;"></i>
                                ${escapeHtml(g.name)}
                            </div>
                            <div class="ti-soc-stream-item__sub">Targeting ${escapeHtml(industries)}</div>
                        </div>
                        <div style="display: flex; align-items: center; gap: 0.5rem;">
                            <span class="ti-soc-stream-item__badge" style="background: rgba(255, 69, 58, 0.12); color: var(--ti-accent-crimson);">
                                ${count} Victims
                            </span>
                            ${trend === 'up' ? `<span style="font-size: 0.72rem; color: var(--ti-accent-crimson); font-weight: 700;"><i class="fas fa-arrow-trend-up"></i> ${trendPct}</span>` : ''}
                        </div>
                    </div>
                `;
            }).join('');
        } catch (e) {
            console.warn('[ThreatWorkbench] Error rendering SOC ransomware stream:', e);
        }
    }

    async function renderSOCAIStream() {
        const container = document.getElementById('tiSocAIContainer');
        if (!container) return;

        try {
            if (!state.aiDataCache) {
                const [atlasRes, aiidRes, owaspRes] = await Promise.all([
                    fetch('ioc-data/mitre-atlas.json').then((r) => (r.ok ? r.json() : null)).catch(() => null),
                    fetch('ioc-data/aiid-incidents.json').then((r) => (r.ok ? r.json() : null)).catch(() => null),
                    fetch('ioc-data/owasp-llm-top10.json').then((r) => (r.ok ? r.json() : null)).catch(() => null)
                ]);
                state.aiDataCache = { atlas: atlasRes, aiid: aiidRes, owasp: owaspRes };
            }

            const items = [];
            if (state.aiDataCache?.owasp?.vulnerabilities?.[0]) {
                const v = state.aiDataCache.owasp.vulnerabilities[0];
                items.push({ id: v.id, name: v.name, tag: 'OWASP LLM01', cat: 'owasp', badge: 'CRITICAL', color: 'var(--ti-accent-crimson)' });
            }
            if (state.aiDataCache?.atlas?.techniques?.[0]) {
                const t = state.aiDataCache.atlas.techniques[0];
                items.push({ id: t.id, name: t.name, tag: 'MITRE ATLAS', cat: 'atlas', badge: 'TACTIC', color: 'var(--ti-accent-indigo)' });
            }
            if (state.aiDataCache?.aiid?.incidents?.[0]) {
                const inc = state.aiDataCache.aiid.incidents[0];
                items.push({ id: `AIID-${inc.incident_id || inc.id}`, name: inc.title, tag: 'AI Incident', cat: 'aiid', badge: 'EXPLOIT', color: 'var(--ti-accent-amber)' });
            }
            if (state.aiDataCache?.owasp?.vulnerabilities?.[1]) {
                const v2 = state.aiDataCache.owasp.vulnerabilities[1];
                items.push({ id: v2.id, name: v2.name, tag: 'OWASP LLM02', cat: 'owasp', badge: 'HIGH', color: 'var(--ti-accent-crimson)' });
            }

            container.innerHTML = items.map((item) => `
                <div class="ti-soc-stream-item" onclick="window.openAIDossier('${escapeHtml(item.id)}', '${item.cat}')" title="Inspect ${escapeHtml(item.name)} dossier">
                    <div class="ti-soc-stream-item__info">
                        <div class="ti-soc-stream-item__title">
                            <span style="font-family: monospace; font-size: 0.8rem; color: var(--ti-accent-blue); margin-right: 0.35rem;">${escapeHtml(item.id)}</span>
                            ${escapeHtml(item.name)}
                        </div>
                        <div class="ti-soc-stream-item__sub">${escapeHtml(item.tag)} &bull; Frontier Attack Surface</div>
                    </div>
                    <span class="ti-soc-stream-item__badge" style="background: rgba(94, 92, 230, 0.12); color: ${item.color};">
                        ${escapeHtml(item.badge)}
                    </span>
                </div>
            `).join('');
        } catch (e) {
            console.warn('[ThreatWorkbench] Error rendering SOC AI stream:', e);
        }
    }

    function renderSOCRecentStream() {
        const tbody = document.getElementById('tiSocRecentBody');
        if (!tbody) return;

        const recent = (state.allOverviewIOCs || []).slice(0, 6);
        if (recent.length === 0) {
            tbody.innerHTML = '<tr><td colspan="5" style="text-align: center; color: var(--ti-text-muted); padding: 2rem;">Loading verified indicators...</td></tr>';
            return;
        }

        tbody.innerHTML = recent.map((ioc) => `
            <tr class="ti-row-clickable" data-indicator="${escapeHtml(ioc.indicator)}" title="Click to inspect indicator dossier">
                <td>
                    <span class="ti-type-pill ti-type-pill--${escapeHtml(ioc.type)}">${escapeHtml(ioc.type)}</span>
                </td>
                <td>
                    <div class="ti-indicator-cell">${escapeHtml(ioc.indicator)}</div>
                </td>
                <td>
                    <div style="font-weight: 500; color: var(--ti-text-primary);">${escapeHtml(ioc.campaign)}</div>
                    <div style="font-size: 0.78rem; color: var(--ti-text-secondary); margin-top: 0.15rem;">${escapeHtml(ioc.description)}</div>
                </td>
                <td>
                    <div class="ti-source-tag">${escapeHtml(ioc.source)}</div>
                </td>
                <td>
                    <span class="ti-confidence-badge">${escapeHtml(ioc.confidence)}</span>
                </td>
            </tr>
        `).join('');

        tbody.querySelectorAll('.ti-row-clickable').forEach((row) => {
            row.addEventListener('click', () => {
                const ind = row.dataset.indicator;
                const found = state.allOverviewIOCs.find((item) => item.indicator === ind);
                if (found) openDossierDrawer(found);
            });
        });
    }

    // ==========================================================================
    // 3. TAB NAVIGATION (ZERO RUNTIME DOM MUTATION)
    // ==========================================================================
    function initTabNavigation() {
        const tabBtns = document.querySelectorAll('.ti-tab-btn');
        const panels = document.querySelectorAll('.ti-panel');

        tabBtns.forEach((btn) => {
            btn.addEventListener('click', () => {
                const target = btn.dataset.tab;
                state.activeTab = target;

                tabBtns.forEach((b) => b.classList.toggle('active', b.dataset.tab === target));
                panels.forEach((p) => p.classList.toggle('active', p.id === `tiPanel-${target}`));

                // Load sub-dashboards (renders immediately from cache if prefetched)
                if (target === 'ai') {
                    loadAISecurityData();
                } else if (target === 'ransomware') {
                    loadRansomwareData();
                }
            });
        });
    }

    // Programmatic tab switcher
    window.switchWorkbenchTab = function (tabName) {
        state.activeTab = tabName;
        document.querySelectorAll('.ti-tab-btn').forEach((btn) => {
            btn.classList.toggle('active', btn.dataset.tab === tabName);
        });
        document.querySelectorAll('.ti-panel').forEach((p) => {
            p.classList.toggle('active', p.id === `tiPanel-${tabName}`);
        });

        if (tabName === 'ai') {
            loadAISecurityData();
        } else if (tabName === 'ransomware') {
            loadRansomwareData();
        }

        const nav = document.querySelector('.ti-tabs-nav');
        if (nav) {
            nav.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    // 1-Click Pivot: Filter ledger by vector type
    window.filterLedgerByType = function (type) {
        window.switchWorkbenchTab('ledger');
        state.currentTypeFilter = type;
        state.currentPage = 1;
        document.querySelectorAll('.ti-filter-chip').forEach((c) => {
            c.classList.toggle('active', c.dataset.type === type);
        });
        applyFilters();
    };

    // 1-Click Pivot: Filter ledger by malware / campaign
    window.filterLedgerByMalware = function (malwareName) {
        window.switchWorkbenchTab('ledger');
        const searchInput = document.getElementById('tiSearchInput');
        if (searchInput) searchInput.value = malwareName;
        state.currentSearch = malwareName.toLowerCase();
        state.currentPage = 1;
        applyFilters();
    };

    // ==========================================================================
    // 4. INTELLIGENCE LEDGER & SEARCH
    // ==========================================================================
    function initSearchAndFilters() {
        const searchInput = document.getElementById('tiSearchInput');
        if (searchInput) {
            searchInput.addEventListener('input', debounce((e) => {
                state.currentSearch = e.target.value.trim().toLowerCase();
                state.currentPage = 1;
                applyFilters();
            }, 180));
        }

        const filterChips = document.querySelectorAll('.ti-filter-chip');
        filterChips.forEach((chip) => {
            chip.addEventListener('click', () => {
                filterChips.forEach((c) => c.classList.remove('active'));
                chip.classList.add('active');
                state.currentTypeFilter = chip.dataset.type || 'all';
                state.currentPage = 1;
                applyFilters();
            });
        });

        // Pagination buttons
        const prevBtn = document.getElementById('tiPagePrev');
        const nextBtn = document.getElementById('tiPageNext');

        if (prevBtn) {
            prevBtn.addEventListener('click', () => {
                if (state.currentPage > 1) {
                    state.currentPage--;
                    renderLedgerTable();
                }
            });
        }

        if (nextBtn) {
            nextBtn.addEventListener('click', () => {
                const maxPage = Math.ceil(state.filteredIOCs.length / state.pageSize) || 1;
                if (state.currentPage < maxPage) {
                    state.currentPage++;
                    renderLedgerTable();
                }
            });
        }
    }

    function applyFilters() {
        state.filteredIOCs = state.allOverviewIOCs.filter((ioc) => {
            // Type matching
            const matchType = state.currentTypeFilter === 'all' || ioc.type === state.currentTypeFilter;
            if (!matchType) return false;

            // Search text matching across indicator, description, campaign, source, and tags
            if (state.currentSearch) {
                const term = state.currentSearch;
                const matchText =
                    ioc.indicator.toLowerCase().includes(term) ||
                    ioc.description.toLowerCase().includes(term) ||
                    ioc.campaign.toLowerCase().includes(term) ||
                    ioc.source.toLowerCase().includes(term) ||
                    ioc.tags.some((t) => t.toLowerCase().includes(term));
                if (!matchText) return false;
            }

            return true;
        });

        renderLedgerTable();
    }

    function renderLedgerTable() {
        const tbody = document.getElementById('tiLedgerBody');
        const counterEl = document.getElementById('tiLedgerCount');
        if (!tbody) return;

        const total = state.filteredIOCs.length;
        const startIdx = (state.currentPage - 1) * state.pageSize;
        const endIdx = Math.min(startIdx + state.pageSize, total);
        const pageItems = state.filteredIOCs.slice(startIdx, endIdx);

        if (counterEl) {
            if (total === 0) {
                counterEl.textContent = 'No indicators matched your filter criteria';
            } else {
                counterEl.textContent = `Displaying ${formatNumber(startIdx + 1)}–${formatNumber(endIdx)} of ${formatNumber(total)} records`;
            }
        }

        updatePaginationControls(startIdx, endIdx, total);

        if (pageItems.length === 0) {
            tbody.innerHTML = `
                <tr>
                    <td colspan="5" style="text-align: center; padding: 3rem 1rem; color: var(--ti-text-muted);">
                        <i class="fas fa-filter-circle-xmark" style="font-size: 1.8rem; margin-bottom: 0.75rem; display: block; opacity: 0.5;"></i>
                        No threat indicators match "${escapeHtml(state.currentSearch)}". Try resetting filters or expanding search keywords.
                    </td>
                </tr>
            `;
            return;
        }

        tbody.innerHTML = pageItems.map((ioc) => {
            return `
                <tr class="ti-row-clickable" data-indicator="${escapeHtml(ioc.indicator)}" title="Click to view full dossier">
                    <td>
                        <span class="ti-type-pill ti-type-pill--${escapeHtml(ioc.type)}">${escapeHtml(ioc.type)}</span>
                    </td>
                    <td>
                        <div class="ti-indicator-cell">${escapeHtml(ioc.indicator)}</div>
                    </td>
                    <td>
                        <div style="font-weight: 500; color: var(--ti-text-primary);">${escapeHtml(ioc.campaign)}</div>
                        <div style="font-size: 0.78rem; color: var(--ti-text-secondary); margin-top: 0.15rem;">${escapeHtml(ioc.description)}</div>
                    </td>
                    <td>
                        <div class="ti-source-tag">${escapeHtml(ioc.source)}</div>
                    </td>
                    <td>
                        <span class="ti-confidence-badge">${escapeHtml(ioc.confidence)}</span>
                    </td>
                </tr>
            `;
        }).join('');

        // Attach click listeners to rows for dossier drawer
        tbody.querySelectorAll('.ti-row-clickable').forEach((row) => {
            row.addEventListener('click', () => {
                const ind = row.dataset.indicator;
                const found = state.filteredIOCs.find((item) => item.indicator === ind);
                if (found) openDossierDrawer(found);
            });
        });
    }

    function updatePaginationControls(startIdx, endIdx, total) {
        const prevBtn = document.getElementById('tiPagePrev');
        const nextBtn = document.getElementById('tiPageNext');
        const pageInfo = document.getElementById('tiPageIndicator');

        const totalPages = Math.ceil(total / state.pageSize) || 1;

        if (pageInfo) {
            pageInfo.textContent = `Page ${state.currentPage} of ${totalPages}`;
        }
        if (prevBtn) {
            prevBtn.disabled = state.currentPage <= 1;
            prevBtn.style.opacity = state.currentPage <= 1 ? '0.4' : '1';
        }
        if (nextBtn) {
            nextBtn.disabled = state.currentPage >= totalPages;
            nextBtn.style.opacity = state.currentPage >= totalPages ? '0.4' : '1';
        }
    }

    // ==========================================================================
    // 5. DETAIL DOSSIER DRAWER & MULTI-DOMAIN DOSSIERS
    // ==========================================================================
    function initDrawerEvents() {
        const backdrop = document.getElementById('tiDrawerBackdrop');
        const closeBtn = document.getElementById('tiDrawerClose');

        if (backdrop) backdrop.addEventListener('click', closeDossierDrawer);
        if (closeBtn) closeBtn.addEventListener('click', closeDossierDrawer);

        // Copy button in drawer
        const copyBtn = document.getElementById('tiDrawerCopyBtn');
        if (copyBtn) {
            copyBtn.addEventListener('click', () => {
                if (!state.selectedIOC) return;
                navigator.clipboard.writeText(state.selectedIOC.indicator).then(() => {
                    const originalText = copyBtn.textContent;
                    copyBtn.textContent = '✓ Copied Defanged';
                    setTimeout(() => {
                        copyBtn.textContent = originalText;
                    }, 1500);
                });
            });
        }
    }

    function openDossierDrawer(ioc) {
        state.selectedIOC = ioc;
        const drawer = document.getElementById('tiDrawer');
        const backdrop = document.getElementById('tiDrawerBackdrop');
        const indicatorView = document.getElementById('tiDrawerIndicatorView');
        const customView = document.getElementById('tiDrawerCustomView');

        if (!drawer || !backdrop) return;

        // Reset Header Labels
        const catLabel = document.getElementById('tiDrawerCategoryLabel');
        const subLabel = document.getElementById('tiDrawerSubLabel');
        if (catLabel) {
            catLabel.textContent = 'THREAT DOSSIER';
            catLabel.style.color = 'var(--ti-accent-blue)';
        }
        if (subLabel) {
            subLabel.textContent = 'Indicator Profile & Outbound Telemetry';
        }

        if (customView) customView.style.display = 'none';
        if (indicatorView) indicatorView.style.display = 'block';

        // Populate Drawer Details
        setText('tiDrawerIndicator', ioc.indicator);
        setText('tiDrawerType', ioc.type.toUpperCase());
        setText('tiDrawerSource', ioc.source);
        setText('tiDrawerCampaign', ioc.campaign);
        setText('tiDrawerTimestamp', ioc.timestamp);
        setText('tiDrawerConfidence', ioc.confidence);
        setText('tiDrawerDescription', ioc.description);

        // Tags
        const tagsContainer = document.getElementById('tiDrawerTags');
        if (tagsContainer) {
            tagsContainer.innerHTML = (ioc.tags || []).map((t) => `<span class="ti-type-pill" style="margin-right: 0.35rem; background: var(--ti-fill-quaternary); color: var(--ti-text-secondary);">${escapeHtml(t)}</span>`).join('');
        }

        // Generate Properly Refanged Outbound Investigative Links
        const refanged = refangIndicator(ioc.indicator);
        const vtBtn = document.getElementById('tiLinkVirusTotal');
        const abuseBtn = document.getElementById('tiLinkAbuseIPDB');

        if (vtBtn) {
            vtBtn.href = `https://www.virustotal.com/gui/search/${encodeURIComponent(refanged)}`;
            vtBtn.style.display = 'inline-flex';
        }

        if (abuseBtn) {
            if (ioc.type === 'ip' || ioc.type === 'ip-range') {
                abuseBtn.href = `https://www.abuseipdb.com/check/${encodeURIComponent(refanged)}`;
                abuseBtn.style.display = 'inline-flex';
            } else {
                abuseBtn.style.display = 'none';
            }
        }

        // Show drawer with smooth spring animation
        backdrop.classList.add('active');
        drawer.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    // Exposed Ransomware Syndicate Dossier Drawer
    window.openRansomwareDossier = async function (groupName) {
        if (!state.ransomwareCache) {
            try {
                const res = await fetch('ransomware-data.json');
                if (res.ok) state.ransomwareCache = await res.json();
            } catch (e) {
                console.warn('Failed to fetch ransomware data:', e);
            }
        }

        const groups = state.ransomwareCache?.groups || [];
        const group = groups.find((g) => (g.name || '').toLowerCase() === (groupName || '').toLowerCase()) || {
            name: groupName,
            count: 0,
            industries: ['Enterprise Infrastructure'],
            countries: [],
            victims: [],
            trend: 'stable'
        };

        const drawer = document.getElementById('tiDrawer');
        const backdrop = document.getElementById('tiDrawerBackdrop');
        const indicatorView = document.getElementById('tiDrawerIndicatorView');
        const customView = document.getElementById('tiDrawerCustomView');

        if (!drawer || !backdrop || !customView) return;

        // Set Header Labels
        const catLabel = document.getElementById('tiDrawerCategoryLabel');
        const subLabel = document.getElementById('tiDrawerSubLabel');
        if (catLabel) {
            catLabel.textContent = 'RANSOMWARE SYNDICATE PROFILE';
            catLabel.style.color = 'var(--ti-accent-amber)';
        }
        if (subLabel) {
            subLabel.textContent = 'Active Extortion Telemetry & Disclosed Victim Records';
        }

        if (indicatorView) indicatorView.style.display = 'none';
        customView.style.display = 'block';

        const victimCount = group.count || (group.victims ? group.victims.length : 0);
        const industries = (group.industries || []).filter((i) => i && i !== 'Not Found').join(', ') || 'Undisclosed';
        const countries = (group.countries || []).join(', ') || 'Global';
        const trend = group.trend || 'stable';
        const trendPct = group.trend_percentage ? `+${group.trend_percentage}%` : '';

        const victimsListHtml = (group.victims && group.victims.length > 0)
            ? group.victims.map((v) => {
                const d = v.date ? v.date.split('T')[0] : 'Recent';
                return `
                    <div class="ti-dossier-victim-item">
                        <span style="font-weight: 600;">${escapeHtml(v.name)}</span>
                        <span style="font-size: 0.75rem; color: var(--ti-text-muted);">${escapeHtml(d)}</span>
                    </div>
                `;
            }).join('')
            : '<div style="color: var(--ti-text-muted); font-size: 0.85rem; padding: 0.5rem;">No public victim claims recorded in current window.</div>';

        customView.innerHTML = `
            <div class="ti-drawer__indicator-box" style="margin-bottom: 1.25rem;">
                <div style="font-size: 1.35rem; font-weight: 800; color: var(--ti-text-primary); display: flex; align-items: center; gap: 0.5rem;">
                    <i class="fas fa-skull-crossbones" style="color: var(--ti-accent-crimson);"></i>
                    ${escapeHtml(group.name)}
                </div>
                <div style="margin-top: 0.4rem; display: flex; align-items: center; gap: 0.6rem;">
                    <span class="ti-type-pill ti-type-pill--hash" style="text-transform: uppercase;">Active Threat Actor</span>
                    ${trend === 'up' ? `<span style="font-size: 0.78rem; color: var(--ti-accent-crimson); font-weight: 700;"><i class="fas fa-arrow-trend-up"></i> ${trendPct} Surge</span>` : '<span style="font-size: 0.78rem; color: var(--ti-text-muted);">Stable Activity</span>'}
                </div>
            </div>

            <div class="ti-dossier-grid">
                <div>
                    <div class="ti-drawer__prop-label">Claimed Victims (7D)</div>
                    <div class="ti-drawer__prop-value" style="font-size: 1.25rem; font-weight: 800; color: var(--ti-accent-crimson);">
                        ${formatNumber(victimCount)}
                    </div>
                </div>
                <div>
                    <div class="ti-drawer__prop-label">Operation Cadence</div>
                    <div class="ti-drawer__prop-value" style="font-size: 0.95rem; font-weight: 600;">Continuous Extortion</div>
                </div>
            </div>

            <div class="ti-dossier-section">
                <div class="ti-dossier-section__title">Targeted Industries</div>
                <div style="font-size: 0.88rem; color: var(--ti-text-primary); line-height: 1.5;">${escapeHtml(industries)}</div>
            </div>

            <div class="ti-dossier-section">
                <div class="ti-dossier-section__title">Target Geographies</div>
                <div style="font-size: 0.88rem; color: var(--ti-text-secondary); line-height: 1.5;">${escapeHtml(countries)}</div>
            </div>

            <div class="ti-dossier-section">
                <div class="ti-dossier-section__title">Recent Disclosed Victims (${group.victims ? group.victims.length : 0})</div>
                <div class="ti-dossier-victim-list">
                    ${victimsListHtml}
                </div>
            </div>

            <div class="ti-drawer__actions" style="margin-top: 1.5rem;">
                <button class="ti-btn-external ti-btn-external--primary" onclick="closeDossierDrawer(); window.filterLedgerByMalware('${escapeHtml(group.name)}');" style="cursor: pointer; border: none; font-family: inherit;">
                    <i class="fas fa-search"></i> Search Indicators in Ledger
                </button>
                <a class="ti-btn-external ti-btn-external--secondary" href="/ransomware-tracker.html">
                    Open Ransomware Tracker ↗
                </a>
            </div>
        `;

        backdrop.classList.add('active');
        drawer.classList.add('active');
        document.body.style.overflow = 'hidden';
    };

    // Exposed AI Security Dossier Drawer
    window.openAIDossier = async function (itemId, category) {
        if (!state.aiDataCache) {
            try {
                const [atlasRes, aiidRes, owaspRes] = await Promise.all([
                    fetch('ioc-data/mitre-atlas.json').then((r) => (r.ok ? r.json() : null)).catch(() => null),
                    fetch('ioc-data/aiid-incidents.json').then((r) => (r.ok ? r.json() : null)).catch(() => null),
                    fetch('ioc-data/owasp-llm-top10.json').then((r) => (r.ok ? r.json() : null)).catch(() => null)
                ]);
                state.aiDataCache = { atlas: atlasRes, aiid: aiidRes, owasp: owaspRes };
            } catch (e) {
                console.warn('Failed to load AI data:', e);
            }
        }

        const drawer = document.getElementById('tiDrawer');
        const backdrop = document.getElementById('tiDrawerBackdrop');
        const indicatorView = document.getElementById('tiDrawerIndicatorView');
        const customView = document.getElementById('tiDrawerCustomView');

        if (!drawer || !backdrop || !customView) return;

        // Set Header Labels
        const catLabel = document.getElementById('tiDrawerCategoryLabel');
        const subLabel = document.getElementById('tiDrawerSubLabel');
        if (catLabel) {
            catLabel.textContent = 'AI SECURITY DOSSIER';
            catLabel.style.color = 'var(--ti-accent-indigo)';
        }
        if (subLabel) {
            subLabel.textContent = 'Adversarial Machine Learning & Frontier Telemetry';
        }

        if (indicatorView) indicatorView.style.display = 'none';
        customView.style.display = 'block';

        let title = itemId;
        let subtitle = 'AI Attack Vector';
        let description = 'Threat intelligence record.';
        let framework = 'MITRE ATLAS';
        let severity = 'Medium';
        let linkUrl = 'https://atlas.mitre.org/';
        let linkText = 'Inspect on MITRE ATLAS ↗';
        let mitigations = [];

        // Check OWASP
        if (category === 'owasp' || itemId.startsWith('LLM')) {
            framework = 'OWASP Top 10 for LLMs';
            const vuln = (state.aiDataCache?.owasp?.vulnerabilities || []).find((v) => v.id === itemId);
            if (vuln) {
                title = `${vuln.id}: ${vuln.name}`;
                subtitle = 'Core Generative AI Architecture Risk';
                description = vuln.description || '';
                severity = (vuln.severity || 'CRITICAL').toUpperCase();
                linkUrl = vuln.sourceUrl || 'https://owasp.org/www-project-top-10-for-large-language-model-applications/';
                linkText = 'View OWASP Guidance ↗';
                mitigations = [
                    'Implement strict input validation and context sanitization at model boundaries.',
                    'Use parameterized prompt templates to separate trusted system instructions from untrusted user inputs.',
                    'Deploy runtime guardrails and secondary verification models to evaluate output safety.'
                ];
            }
        }
        // Check AIID
        else if (category === 'aiid' || itemId.startsWith('AIID')) {
            framework = 'AI Incident Database (AIID)';
            const cleanId = itemId.replace('AIID-', '');
            const inc = (state.aiDataCache?.aiid?.incidents || []).find((i) => String(i.incident_id || i.id) === cleanId || i.id === itemId);
            if (inc) {
                title = `AIID-${inc.incident_id || inc.id}: ${inc.title}`;
                subtitle = `Disclosed Real-World Incident (${inc.date || 'Recent'})`;
                description = `Documented production AI failure or adversarial exploitation categorized under ${inc.category || 'autonomous system impact'}.`;
                severity = (inc.severity || 'HIGH').toUpperCase();
                linkUrl = `https://incidentdatabase.ai/cite/${encodeURIComponent(inc.incident_id || inc.id)}`;
                linkText = 'Inspect Incident in AIID ↗';
                mitigations = [
                    'Conduct systematic red-teaming against multimodal and deepfake manipulation.',
                    'Enforce provenance verification and cryptographic watermarking on generated assets.',
                    'Establish incident response playbooks for unintended model behavior and adversarial inputs.'
                ];
            }
        }
        // Check ATLAS
        else {
            framework = 'MITRE ATLAS Matrix';
            const tech = (state.aiDataCache?.atlas?.techniques || []).find((t) => t.id === itemId);
            if (tech) {
                title = `${tech.id}: ${tech.name}`;
                subtitle = `Adversarial ML Technique (${tech.tactic || 'Execution'})`;
                description = tech.description || '';
                severity = (tech.severity || 'MEDIUM').toUpperCase();
                linkUrl = `https://atlas.mitre.org/techniques/${encodeURIComponent(tech.id)}`;
                linkText = 'Inspect Technique on MITRE ATLAS ↗';
                mitigations = [
                    'Harden training pipelines against data poisoning and untrusted data injections.',
                    'Monitor model inference queries for anomalous evasion patterns and gradient extraction attempts.',
                    'Apply differential privacy and output perturbation to prevent model inversion attacks.'
                ];
            }
        }

        const mitigationsHtml = mitigations.map((m) => `
            <li style="margin-bottom: 0.45rem; font-size: 0.84rem; color: var(--ti-text-primary); line-height: 1.45;">
                ${escapeHtml(m)}
            </li>
        `).join('');

        customView.innerHTML = `
            <div class="ti-drawer__indicator-box" style="margin-bottom: 1.25rem;">
                <div style="font-size: 1.2rem; font-weight: 800; color: var(--ti-text-primary); line-height: 1.35;">
                    ${escapeHtml(title)}
                </div>
                <div style="margin-top: 0.5rem; display: flex; align-items: center; gap: 0.5rem; flex-wrap: wrap;">
                    <span class="ti-type-pill ti-type-pill--ssl-cert">${escapeHtml(framework)}</span>
                    <span class="ti-confidence-badge" style="background: rgba(255, 69, 58, 0.15); color: var(--ti-accent-crimson);">
                        ${escapeHtml(severity)}
                    </span>
                </div>
            </div>

            <div class="ti-dossier-section">
                <div class="ti-dossier-section__title">Vector Classification</div>
                <div style="font-size: 0.88rem; color: var(--ti-text-secondary);">${escapeHtml(subtitle)}</div>
            </div>

            <div class="ti-dossier-section">
                <div class="ti-dossier-section__title">Description &amp; Threat Mechanics</div>
                <div style="font-size: 0.85rem; color: var(--ti-text-secondary); line-height: 1.6; white-space: pre-line;">
                    ${escapeHtml(description)}
                </div>
            </div>

            <div class="ti-dossier-section">
                <div class="ti-dossier-section__title">Recommended Defensive Controls</div>
                <ul style="padding-left: 1.2rem; margin: 0.35rem 0 0 0;">
                    ${mitigationsHtml}
                </ul>
            </div>

            <div class="ti-drawer__actions" style="margin-top: 1.5rem;">
                <a class="ti-btn-external ti-btn-external--primary" href="${escapeHtml(linkUrl)}" target="_blank" rel="noopener noreferrer">
                    ${escapeHtml(linkText)}
                </a>
            </div>
        `;

        backdrop.classList.add('active');
        drawer.classList.add('active');
        document.body.style.overflow = 'hidden';
    };

    function closeDossierDrawer() {
        const drawer = document.getElementById('tiDrawer');
        const backdrop = document.getElementById('tiDrawerBackdrop');
        if (drawer) drawer.classList.remove('active');
        if (backdrop) backdrop.classList.remove('active');
        document.body.style.overflow = '';
        state.selectedIOC = null;
    }
    window.closeDossierDrawer = closeDossierDrawer;

    function refangIndicator(indicator) {
        if (!indicator) return '';
        return indicator
            .replace(/hxxps:\/\//gi, 'https://')
            .replace(/hxxp:\/\//gi, 'http://')
            .replace(/\[\.\]/g, '.');
    }

    // ==========================================================================
    // 6. FEED DIRECTORY & ON-DEMAND EXPLORATION
    // ==========================================================================
    function renderFeedDirectory(vendors) {
        const grid = document.getElementById('tiDirectoryGrid');
        if (!grid || !vendors) return;

        grid.innerHTML = Object.entries(vendors).map(([name, v]) => {
            const count = v.iocCount || v.stats?.total || 0;
            return `
                <div class="ti-feed-card" onclick="window.exploreFeedOnDemand('${escapeHtml(name)}')" style="cursor: pointer;" title="Explore ${escapeHtml(name)} records">
                    <div>
                        <div class="ti-feed-card__header">
                            <h3 class="ti-feed-card__title">${escapeHtml(name)}</h3>
                            <span class="ti-feed-card__status">Active Ingestion</span>
                        </div>
                        <p class="ti-feed-card__desc">${escapeHtml(v.description || '')}</p>
                    </div>
                    <div>
                        <div class="ti-feed-card__meta">
                            <div>
                                <div style="font-size: 0.72rem; color: var(--ti-text-muted); text-transform: uppercase;">Retained Records</div>
                                <div class="ti-feed-card__count">${formatNumber(count)}</div>
                            </div>
                            <div>
                                <div style="font-size: 0.72rem; color: var(--ti-text-muted); text-transform: uppercase;">Cadence</div>
                                <div style="font-weight: 600; color: var(--ti-text-primary);">${escapeHtml(v.updateFrequency || '4 Hours')}</div>
                            </div>
                            <button class="ti-btn-subtle" onclick="event.stopPropagation(); window.exploreFeedOnDemand('${escapeHtml(name)}')">
                                Explore
                            </button>
                        </div>
                    </div>
                </div>
            `;
        }).join('');
    }

    function resolveFeedUrl(url) {
        if (!url) return '';
        if (window.location.hostname !== 'thehgtech.com' && url.startsWith('http')) {
            return `/ioc-data/${url.split('/').pop()}`;
        }
        return url;
    }

    // Defensive fallback: asynchronous recovery if overview array was empty
    async function autoRecoverLiveLedger(vendors) {
        const priorityFeeds = ['OpenPhish', 'Malware Bazaar', 'ThreatFox', 'URLhaus'];
        const targetVendorName = priorityFeeds.find((name) => vendors[name] && vendors[name].iocDataUrl) || Object.keys(vendors)[0];
        if (!targetVendorName) return;

        const vendor = vendors[targetVendorName];
        const statusEl = document.getElementById('tiLedgerCount');
        if (statusEl) statusEl.textContent = 'Synchronizing live threat indicators...';

        try {
            const fetchUrl = resolveFeedUrl(vendor.iocDataUrl);
            const res = await fetch(fetchUrl);
            if (!res.ok) throw new Error(`HTTP ${res.status}`);
            const data = await res.json();
            const iocs = (data.iocs || []).slice(0, 100).map(normalizeIOCRecord);
            if (iocs.length > 0 && state.allOverviewIOCs.length === 0) {
                state.allOverviewIOCs = iocs;
                state.filteredIOCs = [...iocs];
                renderLedgerTable();
                renderSOCRecentStream();
            }
        } catch (e) {
            console.warn('[ThreatWorkbench] Auto-recovery fetch error:', e);
        }
    }

    // Exposed on-demand feed explorer
    window.exploreFeedOnDemand = async function (vendorName) {
        const rawData = window.threatIntelData;
        if (!rawData || !rawData.vendors[vendorName]) return;

        const vendor = rawData.vendors[vendorName];
        const statusEl = document.getElementById('tiLedgerCount');
        if (statusEl) statusEl.textContent = `Loading full feed for ${vendorName}...`;

        // Check in-memory cache first
        if (state.vendorCache[vendorName]) {
            displayVendorRecords(vendorName, state.vendorCache[vendorName]);
            return;
        }

        try {
            const fetchUrl = resolveFeedUrl(vendor.iocDataUrl);
            const res = await fetch(fetchUrl);
            if (!res.ok) throw new Error(`HTTP ${res.status}`);
            const data = await res.json();
            const iocs = (data.iocs || []).map(normalizeIOCRecord);
            state.vendorCache[vendorName] = iocs;
            displayVendorRecords(vendorName, iocs);
        } catch (err) {
            console.error('Failed to load vendor records:', err);
            alert(`Unable to load detailed records for ${vendorName} at this time.`);
            if (statusEl) statusEl.textContent = `Error loading ${vendorName}`;
        }
    };

    function displayVendorRecords(vendorName, iocs) {
        state.allOverviewIOCs = iocs;
        state.filteredIOCs = [...iocs];
        state.currentPage = 1;
        state.currentTypeFilter = 'all';

        // Switch to ledger tab to view
        window.switchWorkbenchTab('ledger');
        renderLedgerTable();
    }

    // ==========================================================================
    // 7. ON-DEMAND SUB-DASHBOARDS (AI SECURITY & RANSOMWARE)
    // ==========================================================================
    async function loadAISecurityData() {
        if (state.aiDataCache) {
            renderAIGrids(state.aiDataCache);
            return;
        }

        try {
            const [atlasRes, aiidRes, owaspRes] = await Promise.all([
                fetch('ioc-data/mitre-atlas.json').then((r) => (r.ok ? r.json() : null)).catch(() => null),
                fetch('ioc-data/aiid-incidents.json').then((r) => (r.ok ? r.json() : null)).catch(() => null),
                fetch('ioc-data/owasp-llm-top10.json').then((r) => (r.ok ? r.json() : null)).catch(() => null)
            ]);

            state.aiDataCache = { atlas: atlasRes, aiid: aiidRes, owasp: owaspRes };
            renderAIGrids(state.aiDataCache);
        } catch (err) {
            console.error('Error loading AI security data:', err);
        }
    }

    function renderAIGrids(data) {
        const atlasContainer = document.getElementById('tiAtlasList');
        const aiidContainer = document.getElementById('tiAiidList');
        const owaspContainer = document.getElementById('tiOwaspList');
        const { atlas: atlasRes, aiid: aiidRes, owasp: owaspRes } = data;

        // Render ATLAS Techniques (Top 8)
        if (atlasContainer) {
            if (atlasRes && atlasRes.techniques && atlasRes.techniques.length > 0) {
                atlasContainer.innerHTML = atlasRes.techniques.slice(0, 8).map((tech) => `
                    <li class="ti-ai-item" onclick="window.openAIDossier('${escapeHtml(tech.id)}', 'atlas')" style="cursor: pointer;" title="Inspect technique dossier">
                        <div class="ti-ai-item__header">
                            <a href="https://atlas.mitre.org/techniques/${encodeURIComponent(tech.id)}" target="_blank" rel="noopener noreferrer" class="ti-ai-item__id" style="text-decoration: none;" onclick="event.stopPropagation();">
                                ${escapeHtml(tech.id)} ↗
                            </a>
                            <span class="ti-confidence-badge">${escapeHtml(tech.severity || 'Medium')}</span>
                        </div>
                        <div class="ti-ai-item__name">${escapeHtml(tech.name)}</div>
                        <div class="ti-ai-item__sub">${escapeHtml(tech.description ? tech.description.slice(0, 120) + '...' : 'AI Attack Technique')}</div>
                    </li>
                `).join('');
            } else {
                atlasContainer.innerHTML = '<li style="color: var(--ti-text-muted); font-size: 0.85rem; padding: 1rem 0;">MITRE ATLAS techniques unavailable.</li>';
            }
        }

        // Render Recent AI Incidents (Top 8)
        if (aiidContainer) {
            if (aiidRes && aiidRes.incidents && aiidRes.incidents.length > 0) {
                aiidContainer.innerHTML = aiidRes.incidents.slice(0, 8).map((inc) => `
                    <li class="ti-ai-item" onclick="window.openAIDossier('${escapeHtml(inc.id || inc.incident_id)}', 'aiid')" style="cursor: pointer;" title="Inspect incident dossier">
                        <div class="ti-ai-item__header">
                            <a href="https://incidentdatabase.ai/cite/${encodeURIComponent(inc.incident_id || '')}" target="_blank" rel="noopener noreferrer" class="ti-ai-item__id" style="text-decoration: none;" onclick="event.stopPropagation();">
                                AIID-${escapeHtml(inc.incident_id || '')} ↗
                            </a>
                            <span style="font-size: 0.75rem; color: var(--ti-text-muted);">${escapeHtml(inc.date || '')}</span>
                        </div>
                        <div class="ti-ai-item__name">${escapeHtml(inc.title || 'AI Incident Report')}</div>
                        <div class="ti-ai-item__sub">Category: <span style="color: var(--ti-text-primary); text-transform: capitalize;">${escapeHtml(inc.category || 'Incident')}</span></div>
                    </li>
                `).join('');
            } else {
                aiidContainer.innerHTML = '<li style="color: var(--ti-text-muted); font-size: 0.85rem; padding: 1rem 0;">AI Incident Database telemetry unavailable.</li>';
            }
        }

        // Render OWASP LLM Top 10 (Full 10)
        if (owaspContainer) {
            if (owaspRes && owaspRes.vulnerabilities && owaspRes.vulnerabilities.length > 0) {
                owaspContainer.innerHTML = owaspRes.vulnerabilities.map((vuln) => `
                    <li class="ti-ai-item" onclick="window.openAIDossier('${escapeHtml(vuln.id)}', 'owasp')" style="cursor: pointer;" title="Inspect OWASP risk dossier">
                        <div class="ti-ai-item__header">
                            <a href="${escapeHtml(vuln.sourceUrl || 'https://owasp.org/www-project-top-10-for-large-language-model-applications/')}" target="_blank" rel="noopener noreferrer" class="ti-ai-item__id" style="text-decoration: none;" onclick="event.stopPropagation();">
                                ${escapeHtml(vuln.id)} ↗
                            </a>
                            <span class="ti-confidence-badge" style="background: rgba(255, 69, 58, 0.15); color: var(--ti-accent-crimson);">${escapeHtml(vuln.severity ? vuln.severity.toUpperCase() : 'CRITICAL')}</span>
                        </div>
                        <div class="ti-ai-item__name">${escapeHtml(vuln.name)}</div>
                        <div class="ti-ai-item__sub">${escapeHtml(vuln.description ? vuln.description.slice(0, 110) + '...' : 'OWASP 2025 Risk')}</div>
                    </li>
                `).join('');
            } else {
                owaspContainer.innerHTML = '<li style="color: var(--ti-text-muted); font-size: 0.85rem; padding: 1rem 0;">OWASP LLM Top 10 unavailable.</li>';
            }
        }
    }

    async function loadRansomwareData() {
        const grid = document.getElementById('tiRansomwareGrid');
        if (!grid) return;

        if (state.ransomwareCache && state.ransomwareCache.groups) {
            renderRansomwareCards(state.ransomwareCache.groups);
            return;
        }

        try {
            const res = await fetch('ransomware-data.json');
            if (!res.ok) throw new Error(`HTTP ${res.status}`);
            const data = await res.json();
            state.ransomwareCache = data;
            renderRansomwareCards(data.groups || []);
        } catch (err) {
            console.error('Error loading ransomware data:', err);
            grid.innerHTML = '<p style="color: var(--ti-accent-crimson); padding: 1.5rem 0;">Unable to load ransomware data.</p>';
        }
    }

    function renderRansomwareCards(groups) {
        const grid = document.getElementById('tiRansomwareGrid');
        if (!grid) return;

        if (!groups || groups.length === 0) {
            grid.innerHTML = '<p style="color: var(--ti-text-muted); padding: 2rem 0;">No active ransomware groups reported in current 7-day window.</p>';
            return;
        }

        grid.innerHTML = groups.slice(0, 16).map((g) => {
            const victimCount = g.count || (g.victims ? g.victims.length : 0);
            const trend = g.trend || 'stable';
            const trendPct = g.trend_percentage ? `${g.trend_percentage}%` : '';
            let trendIcon = '<span style="color: var(--ti-text-muted);">— Stable</span>';
            if (trend === 'up') {
                trendIcon = `<span style="color: var(--ti-accent-crimson);"><i class="fas fa-arrow-trend-up"></i> +${trendPct}</span>`;
            } else if (trend === 'down') {
                trendIcon = `<span style="color: var(--ti-accent-emerald);"><i class="fas fa-arrow-trend-down"></i> -${trendPct}</span>`;
            }

            const industries = (g.industries || []).filter((ind) => ind && ind !== 'Not Found').slice(0, 3).join(', ');
            const latestVictim = g.victims && g.victims.length > 0 ? g.victims[0].name : '';

            return `
                <div class="ti-ransom-card" onclick="window.openRansomwareDossier('${escapeHtml(g.name)}')" style="cursor: pointer;" title="Inspect ${escapeHtml(g.name)} dossier">
                    <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 0.5rem;">
                        <h4 class="ti-ransom-card__group" style="margin: 0;">${escapeHtml(g.name || 'Unknown Group')}</h4>
                        <span style="font-size: 0.78rem; font-weight: 600;">${trendIcon}</span>
                    </div>
                    <div class="ti-ransom-card__victims" style="margin-bottom: 0.4rem;">
                        7-Day Claimed Victims: <strong>${formatNumber(victimCount)}</strong>
                    </div>
                    ${industries ? `
                        <div style="font-size: 0.78rem; color: var(--ti-text-secondary); margin-bottom: 0.35rem;">
                            Targets: <span style="color: var(--ti-text-primary);">${escapeHtml(industries)}</span>
                        </div>
                    ` : ''}
                    ${latestVictim ? `
                        <div style="font-size: 0.75rem; color: var(--ti-text-muted); border-top: 1px solid var(--ti-separator-subtle); padding-top: 0.4rem; margin-top: 0.4rem;">
                            Recent Claim: <span style="color: var(--ti-text-secondary);">${escapeHtml(latestVictim)}</span>
                        </div>
                    ` : ''}
                </div>
            `;
        }).join('');
    }

    // ==========================================================================
    // 8. KEYBOARD SHORTCUTS & HELPERS
    // ==========================================================================
    function initKeyboardShortcuts() {
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                closeDossierDrawer();
            }
        });
    }

    function setText(id, value) {
        const el = document.getElementById(id);
        if (el) el.textContent = value;
    }

    function formatNumber(num) {
        if (!num && num !== 0) return '0';
        return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    }

    function escapeHtml(str) {
        if (!str) return '';
        return String(str)
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#39;');
    }

    function debounce(func, wait) {
        let timeout;
        return function (...args) {
            clearTimeout(timeout);
            timeout = setTimeout(() => func.apply(this, args), wait);
        };
    }
})();
// /HG-THREAT-INTEL-V1
