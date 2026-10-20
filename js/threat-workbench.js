/**
 * ==========================================================================
 * THEHGTECH THREAT INTELLIGENCE WORKBENCH — JAVASCRIPT CONTROLLER
 * HG-THREAT-INTEL-V1: UI | WORKBENCH_CONTROLLER | 2026-10-18
 * Modern, performant, accessible Apple-inspired threat intelligence client.
 * Features ambient vector canvas, instant summary rendering, on-demand loading,
 * unified search, slide-out dossier drawer, and bidirectional refanging.
 * ==========================================================================
 */

(function () {
    'use strict';

    // State Management
    const state = {
        activeTab: 'ledger',
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

        // Update live tab badge
        setText('tabLedgerBadge', formatNumber(totalIOCs));
        setText('tabDirectoryBadge', activeFeeds.toString());

        // 2. Load Overview IOCs for Immediate Live Ledger
        state.allOverviewIOCs = (rawData.overview || []).map(normalizeIOCRecord);
        state.filteredIOCs = [...state.allOverviewIOCs];

        renderLedgerTable();
        renderFeedDirectory(rawData.vendors);
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

                // Lazy-load sub-dashboards only when their tab is clicked
                if (target === 'ai' && !state.aiDataCache) {
                    loadAISecurityData();
                } else if (target === 'ransomware' && !state.ransomwareCache) {
                    loadRansomwareData();
                }
            });
        });
    }

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

        // Support outbound search pivots via URL query param (e.g., ?search=<group> or ?q=<term>)
        try {
            const urlParams = new URLSearchParams(window.location.search);
            const queryParam = urlParams.get('search') || urlParams.get('q');
            if (queryParam && searchInput) {
                searchInput.value = queryParam;
                state.currentSearch = queryParam.trim().toLowerCase();
                state.currentPage = 1;
                applyFilters();
            }
        } catch (e) {
            console.warn('[ThreatWorkbench] Unable to parse URL search params:', e);
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

            // Search text matching across indicator, description, campaign, and tags
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
            counterEl.textContent = `Showing ${total > 0 ? startIdx + 1 : 0}–${endIdx} of ${total} Recent Indicators`;
        }

        updatePaginationControls(startIdx, endIdx, total);

        if (pageItems.length === 0) {
            tbody.innerHTML = `
                <tr>
                    <td colspan="5" style="text-align: center; padding: 3rem 1rem; color: var(--ti-text-muted);">
                        No threat indicators match the current query and filters.
                    </td>
                </tr>
            `;
            return;
        }

        tbody.innerHTML = pageItems.map((ioc) => {
            return `
                <tr class="ti-row-clickable" data-indicator="${escapeHtml(ioc.indicator)}">
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
    // 5. DETAIL DOSSIER DRAWER & REFANGING
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

        if (!drawer || !backdrop) return;

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

    function closeDossierDrawer() {
        const drawer = document.getElementById('tiDrawer');
        const backdrop = document.getElementById('tiDrawerBackdrop');
        if (drawer) drawer.classList.remove('active');
        if (backdrop) backdrop.classList.remove('active');
        document.body.style.overflow = '';
        state.selectedIOC = null;
    }

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
                <div class="ti-feed-card">
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
                            <button class="ti-btn-subtle" onclick="window.exploreFeedOnDemand('${escapeHtml(name)}')">
                                Explore
                            </button>
                        </div>
                    </div>
                </div>
            `;
        }).join('');
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
            const res = await fetch(vendor.iocDataUrl);
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
        const ledgerTabBtn = document.querySelector('.ti-tab-btn[data-tab="ledger"]');
        if (ledgerTabBtn) ledgerTabBtn.click();

        renderLedgerTable();
    }

    // ==========================================================================
    // 7. ON-DEMAND SUB-DASHBOARDS (AI SECURITY & RANSOMWARE)
    // ==========================================================================
    async function loadAISecurityData() {
        const atlasContainer = document.getElementById('tiAtlasList');
        const aiidContainer = document.getElementById('tiAiidList');
        const owaspContainer = document.getElementById('tiOwaspList');

        try {
            const [atlasRes, aiidRes, owaspRes] = await Promise.all([
                fetch('ioc-data/mitre-atlas.json').then((r) => r.ok ? r.json() : null).catch(() => null),
                fetch('ioc-data/aiid-incidents.json').then((r) => r.ok ? r.json() : null).catch(() => null),
                fetch('ioc-data/owasp-llm-top10.json').then((r) => r.ok ? r.json() : null).catch(() => null)
            ]);

            state.aiDataCache = { atlas: atlasRes, aiid: aiidRes, owasp: owaspRes };

            // Render ATLAS Techniques (Top 8)
            if (atlasContainer) {
                if (atlasRes && atlasRes.techniques && atlasRes.techniques.length > 0) {
                    atlasContainer.innerHTML = atlasRes.techniques.slice(0, 8).map((tech) => `
                        <li class="ti-ai-item">
                            <div class="ti-ai-item__header">
                                <a href="https://atlas.mitre.org/techniques/${encodeURIComponent(tech.id)}" target="_blank" rel="noopener noreferrer" class="ti-ai-item__id" style="text-decoration: none;">
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
                        <li class="ti-ai-item">
                            <div class="ti-ai-item__header">
                                <a href="https://incidentdatabase.ai/cite/${encodeURIComponent(inc.incident_id || '')}" target="_blank" rel="noopener noreferrer" class="ti-ai-item__id" style="text-decoration: none;">
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
                        <li class="ti-ai-item">
                            <div class="ti-ai-item__header">
                                <a href="${escapeHtml(vuln.sourceUrl || 'https://owasp.org/www-project-top-10-for-large-language-model-applications/')}" target="_blank" rel="noopener noreferrer" class="ti-ai-item__id" style="text-decoration: none;">
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
        } catch (err) {
            console.error('Error loading AI security data:', err);
        }
    }

    async function loadRansomwareData() {
        const grid = document.getElementById('tiRansomwareGrid');
        if (!grid) return;

        try {
            const res = await fetch('ransomware-data.json');
            if (!res.ok) throw new Error(`HTTP ${res.status}`);
            const data = await res.json();
            state.ransomwareCache = data;

            const groups = data.groups || [];
            if (groups.length === 0) {
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
                    <div class="ti-ransom-card">
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
        } catch (err) {
            console.error('Error loading ransomware data:', err);
            grid.innerHTML = '<p style="color: var(--ti-accent-crimson); padding: 1.5rem 0;">Unable to load ransomware data.</p>';
        }
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
