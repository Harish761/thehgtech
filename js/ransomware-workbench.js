/**
 * ==========================================================================
 * THEHGTECH RANSOMWARE INTELLIGENCE WORKBENCH — JAVASCRIPT CONTROLLER
 * HG-RANSOMWARE-V1: UI | WORKBENCH_CONTROLLER | 2026-10-20
 * Fast, accessible, client-side intelligence engine.
 * Features: Dual-View Workbench, Real-Time Ledger, Faceted Filters,
 * Dynamic Sparklines, Apple-style Slide-Out Dossier Drawer, and Outbound Pivots.
 * ==========================================================================
 */

(function () {
    'use strict';

    // Application State
    const state = {
        activeTab: 'ledger', // 'ledger' (default) or 'syndicates'
        allVictims: [],
        filteredVictims: [],
        allGroups: [],
        filteredGroups: [],
        metadata: {},
        
        // Ledger Filters
        ledgerSearch: '',
        ledgerSector: 'all',
        ledgerCountry: 'all',
        ledgerDateRange: 'all', // '24h', '7d', '30d', 'all'
        ledgerSort: 'date-desc',
        currentPage: 1,
        pageSize: 25,

        // Syndicate Directory Filters
        syndicateSearch: '',
        syndicateSort: 'count-desc', // 'count-desc', 'velocity', 'name-asc'

        // Active Drawer Selection
        selectedGroup: null
    };

    // DOM Ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initWorkbench);
    } else {
        initWorkbench();
    }

    async function initWorkbench() {
        try {
            await loadData();
            initTabs();
            initLedgerControls();
            initSyndicateControls();
            initDrawerEvents();
            initUrlParams();
        } catch (err) {
            console.error('[RansomwareWorkbench] Initialization error:', err);
            renderErrorState(err.message);
        }
    }

    // ==========================================================================
    // 1. DATA INGESTION & METRICS POPULATION
    // ==========================================================================
    async function loadData() {
        const response = await fetch('ransomware-data.json?v=' + Date.now());
        if (!response.ok) {
            throw new Error(`Failed to load ransomware data (HTTP ${response.status})`);
        }

        const data = await response.json();
        state.metadata = data;
        state.allGroups = data.groups || [];
        state.allVictims = data.victims || [];

        // If data.victims was not pre-flattened, extract from groups
        if (state.allVictims.length === 0 && state.allGroups.length > 0) {
            state.allVictims = state.allGroups.flatMap(g => g.victims || []);
            // Sort by discovery date descending
            state.allVictims.sort((a, b) => new Date(b.discovered || 0) - new Date(a.discovered || 0));
        }

        state.filteredVictims = [...state.allVictims];
        state.filteredGroups = [...state.allGroups];

        // Populate Hero KPI tiles
        populateMetrics(data);

        // Populate Sector & Country Filter Selects
        populateFilterOptions();

        // Render Views
        renderLedgerTable();
        renderSyndicatesGrid();
    }

    function populateMetrics(data) {
        const totalGroups = data.total_groups || state.allGroups.length;
        const totalVictims = data.total_victims || state.allVictims.length;
        
        // True rolling 24-hour velocity metric (fallback computes against snapshot reference timestamp)
        const disclosures24h = data.disclosures_24h !== undefined
            ? data.disclosures_24h
            : calculateRolling24h(state.allVictims, data.last_updated);
            
        const topActor = data.top_threat_actor || (state.allGroups[0]?.name || 'N/A');
        const topSector = data.top_target_sector || 'Multiple / Unclassified';
        const topSectorSub = data.top_target_sector_sub || calculateSectorSub(state.allVictims);
        const lastUpdated = data.last_updated_formatted || (data.last_updated ? new Date(data.last_updated).toLocaleString() : 'Recently');

        setText('metricTotalGroups', totalGroups.toLocaleString());
        setText('metricTotalVictims', totalVictims.toLocaleString());
        setText('metricTodayCount', disclosures24h.toLocaleString());
        setText('metricTodaySub', 'Past 24 Hours Velocity');
        setText('metricTopActor', topActor);
        setText('metricTopSector', topSector);
        setText('metricSectorSub', `Coverage: ${topSectorSub}`);
        setText('metricLastUpdated', lastUpdated);
        setText('heroRetainedCount', totalVictims.toLocaleString());
        setText('ledgerLastUpdated', `Sync: ${lastUpdated}`);

        // Update tab badges
        setText('badgeLedgerCount', totalVictims.toLocaleString());
        setText('badgeSyndicatesCount', totalGroups.toLocaleString());
    }

    function calculateRolling24h(victims, refTimeStr) {
        if (!Array.isArray(victims) || victims.length === 0) return 0;
        const refTime = refTimeStr ? new Date(refTimeStr).getTime() : Date.now();
        if (isNaN(refTime)) return 0;
        const h24Ago = refTime - (24 * 60 * 60 * 1000);
        const graceMax = refTime + (5 * 60 * 1000); // 5 min clock skew tolerance

        return victims.filter(v => {
            if (!v || !v.discovered) return false;
            const t = new Date(v.discovered).getTime();
            if (isNaN(t) || t > graceMax) return false;
            return t >= h24Ago;
        }).length;
    }

    function calculateSectorSub(victims) {
        if (!Array.isArray(victims) || victims.length === 0) return '0% unclassified';
        const unclassified = victims.filter(v => !v || !v.sector).length;
        const pct = Math.round((unclassified / victims.length) * 100);
        return `${pct}% unclassified`;
    }

    function calculateTodayCount(victims) {
        const todayIso = new Date().toISOString().split('T')[0];
        return victims.filter(v => (v.discovered_date === todayIso || (v.discovered && v.discovered.startsWith(todayIso)))).length;
    }

    function populateFilterOptions() {
        const sectorSelect = document.getElementById('rwSectorFilter');
        const countrySelect = document.getElementById('rwCountryFilter');

        // Sector counts
        const sectorCounts = {};
        state.allVictims.forEach(v => {
            if (v.sector) {
                sectorCounts[v.sector] = (sectorCounts[v.sector] || 0) + 1;
            }
        });

        // Country counts
        const countryCounts = {};
        state.allVictims.forEach(v => {
            const country = v.country || v.country_code;
            if (country) {
                countryCounts[country] = (countryCounts[country] || 0) + 1;
            }
        });

        if (sectorSelect) {
            const sortedSectors = Object.entries(sectorCounts).sort((a, b) => b[1] - a[1]);
            sortedSectors.forEach(([sec, count]) => {
                const opt = document.createElement('option');
                opt.value = sec;
                opt.textContent = `${sec} (${count})`;
                sectorSelect.appendChild(opt);
            });
        }

        if (countrySelect) {
            const sortedCountries = Object.entries(countryCounts).sort((a, b) => b[1] - a[1]);
            sortedCountries.forEach(([ctry, count]) => {
                const opt = document.createElement('option');
                opt.value = ctry;
                opt.textContent = `${ctry} (${count})`;
                countrySelect.appendChild(opt);
            });
        }
    }

    // ==========================================================================
    // 2. TAB WORKBENCH NAVIGATION
    // ==========================================================================
    function initTabs() {
        const tabBtns = document.querySelectorAll('.rw-tab-btn');
        const panels = document.querySelectorAll('.rw-tab-panel');

        tabBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                const target = btn.dataset.tab;
                state.activeTab = target;

                tabBtns.forEach(b => b.classList.toggle('active', b.dataset.tab === target));
                panels.forEach(p => p.classList.toggle('active', p.id === `rwPanel-${target}`));
            });
        });
    }

    // ==========================================================================
    // 3. VICTIM ACTIVITY LEDGER (Default View)
    // ==========================================================================
    function initLedgerControls() {
        const searchInput = document.getElementById('rwLedgerSearch');
        const sectorFilter = document.getElementById('rwSectorFilter');
        const countryFilter = document.getElementById('rwCountryFilter');
        const sortFilter = document.getElementById('rwSortFilter');
        const datePills = document.querySelectorAll('#rwDatePills .rw-pill-filter');
        const prevBtn = document.getElementById('rwPagePrev');
        const nextBtn = document.getElementById('rwPageNext');

        if (searchInput) {
            searchInput.addEventListener('input', debounce((e) => {
                state.ledgerSearch = e.target.value.trim().toLowerCase();
                state.currentPage = 1;
                applyLedgerFilters();
            }, 180));
        }

        if (sectorFilter) {
            sectorFilter.addEventListener('change', (e) => {
                state.ledgerSector = e.target.value;
                state.currentPage = 1;
                applyLedgerFilters();
            });
        }

        if (countryFilter) {
            countryFilter.addEventListener('change', (e) => {
                state.ledgerCountry = e.target.value;
                state.currentPage = 1;
                applyLedgerFilters();
            });
        }

        if (sortFilter) {
            sortFilter.addEventListener('change', (e) => {
                state.ledgerSort = e.target.value;
                applyLedgerFilters();
            });
        }

        datePills.forEach(pill => {
            pill.addEventListener('click', () => {
                datePills.forEach(p => p.classList.remove('active'));
                pill.classList.add('active');
                state.ledgerDateRange = pill.dataset.range || 'all';
                state.currentPage = 1;
                applyLedgerFilters();
            });
        });

        if (prevBtn) {
            prevBtn.addEventListener('click', () => {
                if (state.currentPage > 1) {
                    state.currentPage--;
                    renderLedgerTable();
                    scrollTableIntoView();
                }
            });
        }

        if (nextBtn) {
            nextBtn.addEventListener('click', () => {
                const maxPage = Math.ceil(state.filteredVictims.length / state.pageSize) || 1;
                if (state.currentPage < maxPage) {
                    state.currentPage++;
                    renderLedgerTable();
                    scrollTableIntoView();
                }
            });
        }
    }

    function applyLedgerFilters() {
        const now = Date.now();
        const cutoff24h = now - 24 * 3600 * 1000;
        const cutoff7d = now - 7 * 86400 * 1000;
        const cutoff30d = now - 30 * 86400 * 1000;

        state.filteredVictims = state.allVictims.filter(v => {
            // Text Search matching victim name, syndicate, sector, country, domain, notes
            if (state.ledgerSearch) {
                const q = state.ledgerSearch;
                const matchName = (v.victim_name || '').toLowerCase().includes(q);
                const matchGroup = (v.group_name || '').toLowerCase().includes(q);
                const matchSector = (v.sector || '').toLowerCase().includes(q);
                const matchCountry = (v.country || '').toLowerCase().includes(q);
                const matchDomain = (v.domain || '').toLowerCase().includes(q);
                const matchDesc = (v.description_snippet || '').toLowerCase().includes(q);
                if (!matchName && !matchGroup && !matchSector && !matchCountry && !matchDomain && !matchDesc) {
                    return false;
                }
            }

            // Sector Filter
            if (state.ledgerSector !== 'all') {
                if (v.sector !== state.ledgerSector) return false;
            }

            // Country Filter
            if (state.ledgerCountry !== 'all') {
                if (v.country !== state.ledgerCountry && v.country_code !== state.ledgerCountry) return false;
            }

            // Date Range Filter
            if (state.ledgerDateRange !== 'all') {
                const vTime = new Date(v.discovered || 0).getTime();
                if (state.ledgerDateRange === '24h' && vTime < cutoff24h) return false;
                if (state.ledgerDateRange === '7d' && vTime < cutoff7d) return false;
                if (state.ledgerDateRange === '30d' && vTime < cutoff30d) return false;
            }

            return true;
        });

        // Apply Sorting
        sortVictimsList(state.filteredVictims, state.ledgerSort);

        renderLedgerTable();
    }

    function sortVictimsList(list, sortMode) {
        if (sortMode === 'date-desc') {
            list.sort((a, b) => new Date(b.discovered || 0) - new Date(a.discovered || 0));
        } else if (sortMode === 'date-asc') {
            list.sort((a, b) => new Date(a.discovered || 0) - new Date(b.discovered || 0));
        } else if (sortMode === 'victim-asc') {
            list.sort((a, b) => (a.victim_name || '').localeCompare(b.victim_name || ''));
        } else if (sortMode === 'group-asc') {
            list.sort((a, b) => (a.group_name || '').localeCompare(b.group_name || ''));
        }
    }

    function renderLedgerTable() {
        const tbody = document.getElementById('rwLedgerBody');
        const counterEl = document.getElementById('rwLedgerCount');
        const pageIndicator = document.getElementById('rwPageIndicator');
        const prevBtn = document.getElementById('rwPagePrev');
        const nextBtn = document.getElementById('rwPageNext');

        if (!tbody) return;

        const total = state.filteredVictims.length;
        const totalPages = Math.ceil(total / state.pageSize) || 1;
        const startIdx = (state.currentPage - 1) * state.pageSize;
        const endIdx = Math.min(startIdx + state.pageSize, total);
        const pageItems = state.filteredVictims.slice(startIdx, endIdx);

        if (counterEl) {
            counterEl.textContent = `Showing ${total > 0 ? (startIdx + 1).toLocaleString() : 0}–${endIdx.toLocaleString()} of ${total.toLocaleString()} Disclosures`;
        }

        if (pageIndicator) {
            pageIndicator.textContent = `Page ${state.currentPage} of ${totalPages}`;
        }

        if (prevBtn) prevBtn.disabled = state.currentPage <= 1;
        if (nextBtn) nextBtn.disabled = state.currentPage >= totalPages;

        if (pageItems.length === 0) {
            tbody.innerHTML = `
                <tr>
                    <td colspan="6">
                        <div class="rw-empty-state">
                            <i class="fas fa-search"></i>
                            <h3>No Disclosures Match Your Filters</h3>
                            <p>Try broadening your search term, clearing sector/country filters, or selecting "All Disclosures".</p>
                        </div>
                    </td>
                </tr>
            `;
            return;
        }

        tbody.innerHTML = pageItems.map(v => {
            const relativeDate = formatRelativeTime(v.discovered);
            const exactDate = v.discovered ? new Date(v.discovered).toUTCString().replace('GMT', 'UTC') : '—';
            const statusHtml = v.status ? `<span class="rw-status-pill rw-status-pill--${v.status.toLowerCase().includes('pending') ? 'pending' : 'exposed'}">${escapeHtml(v.status)}</span>` : '';
            const domainHtml = v.domain ? `<div class="rw-victim-domain">${escapeHtml(v.domain)}</div>` : '';
            const descSnippet = v.description_snippet ? `<div class="rw-victim-desc" title="${escapeHtml(v.description_snippet)}">${escapeHtml(v.description_snippet)}</div>` : '';
            const sectorHtml = v.sector ? `<span class="rw-tag rw-tag--sector">${escapeHtml(v.sector)}</span>` : `<span style="color: var(--rw-text-muted);">—</span>`;
            const countryHtml = v.country ? `<span class="rw-tag rw-tag--country">${v.country_code ? `<b>${escapeHtml(v.country_code)}</b> ` : ''}${escapeHtml(v.country)}</span>` : `<span style="color: var(--rw-text-muted);">—</span>`;
            const sourceUrl = v.post_url || 'https://www.ransomware.live/';

            return `
                <tr>
                    <td>
                        <div class="rw-time-cell">
                            <div class="rw-time-relative">${relativeDate}</div>
                            <div class="rw-time-exact">${exactDate}</div>
                            ${statusHtml}
                        </div>
                    </td>
                    <td>
                        <div class="rw-victim-name">${escapeHtml(v.victim_name || 'Undisclosed Entity')}</div>
                        ${domainHtml}
                        ${descSnippet}
                    </td>
                    <td>
                        <button class="rw-syndicate-badge" onclick="window.ransomwareWorkbench.openSyndicateDossier('${escapeHtml(v.group_name)}')">
                            <i class="fas fa-skull-crossbones"></i>
                            ${escapeHtml(v.group_name)}
                        </button>
                    </td>
                    <td>${sectorHtml}</td>
                    <td>${countryHtml}</td>
                    <td>
                        <div style="display: flex; gap: 0.4rem; align-items: center;">
                            <button class="rw-action-btn" onclick="window.ransomwareWorkbench.openSyndicateDossier('${escapeHtml(v.group_name)}')">
                                Inspect
                            </button>
                            <a href="${escapeHtml(sourceUrl)}" target="_blank" rel="noopener noreferrer" class="rw-action-btn" title="View Source on Ransomware.live">
                                <i class="fas fa-external-link-alt"></i>
                            </a>
                        </div>
                    </td>
                </tr>
            `;
        }).join('');
    }

    // ==========================================================================
    // 4. SYNDICATE DIRECTORY VIEW
    // ==========================================================================
    function initSyndicateControls() {
        const searchInput = document.getElementById('rwSyndicateSearch');
        const sortSelect = document.getElementById('rwSyndicateSort');

        if (searchInput) {
            searchInput.addEventListener('input', debounce((e) => {
                state.syndicateSearch = e.target.value.trim().toLowerCase();
                applySyndicateFilters();
            }, 180));
        }

        if (sortSelect) {
            sortSelect.addEventListener('change', (e) => {
                state.syndicateSort = e.target.value;
                applySyndicateFilters();
            });
        }
    }

    function applySyndicateFilters() {
        state.filteredGroups = state.allGroups.filter(g => {
            if (state.syndicateSearch) {
                const q = state.syndicateSearch;
                const matchName = g.name.toLowerCase().includes(q);
                const matchIndustries = (g.industries || []).some(ind => ind.toLowerCase().includes(q));
                const matchCountries = (g.countries || []).some(c => c.toLowerCase().includes(q));
                if (!matchName && !matchIndustries && !matchCountries) return false;
            }
            return true;
        });

        // Sort groups
        if (state.syndicateSort === 'count-desc') {
            state.filteredGroups.sort((a, b) => b.count - a.count);
        } else if (state.syndicateSort === 'name-asc') {
            state.filteredGroups.sort((a, b) => a.name.localeCompare(b.name));
        } else if (state.syndicateSort === 'velocity') {
            const velWeight = { 'up': 3, 'stable': 2, 'down': 1, 'insufficient_data': 0 };
            state.filteredGroups.sort((a, b) => (velWeight[b.trend] || 0) - (velWeight[a.trend] || 0) || b.count - a.count);
        }

        renderSyndicatesGrid();
    }

    function renderSyndicatesGrid() {
        const container = document.getElementById('rwSyndicatesGrid');
        if (!container) return;

        if (state.filteredGroups.length === 0) {
            container.innerHTML = `
                <div class="rw-empty-state" style="grid-column: 1 / -1;">
                    <i class="fas fa-user-secret"></i>
                    <h3>No Syndicates Match Your Search</h3>
                    <p>Try searching for a different group name, sector, or country.</p>
                </div>
            `;
            return;
        }

        container.innerHTML = state.filteredGroups.map(g => {
            const trendClass = g.trend || 'stable';
            const trendText = g.trend_label || 'Steady';
            const industries = (g.industries || []).slice(0, 4);
            const countries = (g.countries || []).slice(0, 4);
            const sparklineSvg = generateSparkline(g.daily_counts || []);

            return `
                <div class="rw-syndicate-card">
                    <div class="rw-card-header">
                        <div class="rw-card-title">${escapeHtml(g.name)}</div>
                        <span class="rw-card-velocity rw-card-velocity--${trendClass}">
                            <i class="fas ${trendClass === 'up' ? 'fa-arrow-trend-up' : trendClass === 'down' ? 'fa-arrow-trend-down' : 'fa-minus'}"></i>
                            ${escapeHtml(trendText)}
                        </span>
                    </div>

                    <div class="rw-card-stats">
                        <div>
                            <div class="rw-card-stat-val">${g.count.toLocaleString()}</div>
                            <div class="rw-card-stat-lbl">Disclosures (7d)</div>
                        </div>
                        <div>
                            <div class="rw-card-stat-val">${(g.victims ? g.victims.length : g.count).toLocaleString()}</div>
                            <div class="rw-card-stat-lbl">Retained Victims</div>
                        </div>
                    </div>

                    <div class="rw-sparkline-wrap">
                        ${sparklineSvg}
                    </div>

                    <div class="rw-card-tags-section">
                        <div class="rw-card-tags-title">Top Target Sectors</div>
                        <div class="rw-card-tags-list">
                            ${industries.length > 0 
                                ? industries.map(ind => `<span class="rw-tag rw-tag--sector">${escapeHtml(ind)}</span>`).join('') 
                                : `<span style="font-size:0.75rem; color:var(--rw-text-muted);">No sector metadata</span>`}
                        </div>
                    </div>

                    <div class="rw-card-tags-section">
                        <div class="rw-card-tags-title">Target Regions</div>
                        <div class="rw-card-tags-list">
                            ${countries.length > 0 
                                ? countries.map(c => `<span class="rw-tag rw-tag--country">${escapeHtml(c)}</span>`).join('') 
                                : `<span style="font-size:0.75rem; color:var(--rw-text-muted);">Global/Unknown</span>`}
                        </div>
                    </div>

                    <div class="rw-card-actions">
                        <button class="rw-card-btn rw-card-btn--primary" onclick="window.ransomwareWorkbench.openSyndicateDossier('${escapeHtml(g.name)}')">
                            View Dossier
                        </button>
                        <button class="rw-card-btn" onclick="window.ransomwareWorkbench.filterLedgerToGroup('${escapeHtml(g.name)}')">
                            Filter Ledger
                        </button>
                    </div>
                </div>
            `;
        }).join('');
    }

    function generateSparkline(counts) {
        if (!counts || counts.length === 0) return '';
        const max = Math.max(...counts, 1);
        const width = 280;
        const height = 36;
        const padding = 4;
        const step = (width - padding * 2) / (counts.length - 1 || 1);

        const points = counts.map((val, idx) => {
            const x = padding + idx * step;
            const y = height - padding - ((val / max) * (height - padding * 2));
            return `${x.toFixed(1)},${y.toFixed(1)}`;
        }).join(' ');

        return `
            <svg viewBox="0 0 ${width} ${height}" style="width: 100%; height: 100%; display: block;" aria-label="7-Day Activity Sparkline">
                <polyline fill="none" stroke="var(--rw-accent-crimson)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" points="${points}" />
            </svg>
        `;
    }

    // ==========================================================================
    // 5. SLIDE-OUT SYNDICATE DOSSIER DRAWER
    // ==========================================================================
    function initDrawerEvents() {
        const backdrop = document.getElementById('rwDrawerBackdrop');
        const drawer = document.getElementById('rwDrawer');
        const closeBtn = document.getElementById('rwDrawerClose');

        if (backdrop) {
            backdrop.addEventListener('click', closeDossierDrawer);
        }

        if (closeBtn) {
            closeBtn.addEventListener('click', closeDossierDrawer);
        }

        // Global ESC key listener
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && drawer && drawer.classList.contains('active')) {
                closeDossierDrawer();
            }
        });
    }

    function openSyndicateDossier(groupName) {
        const group = state.allGroups.find(g => g.name.toLowerCase() === groupName.toLowerCase());
        if (!group) {
            console.warn(`[RansomwareWorkbench] Group ${groupName} not found in state.`);
            return;
        }

        state.selectedGroup = group;
        const backdrop = document.getElementById('rwDrawerBackdrop');
        const drawer = document.getElementById('rwDrawer');

        // Populate drawer contents
        setText('rwDrawerTitle', group.name);
        setText('rwDrawerDisclosuresCount', group.count.toLocaleString());
        setText('rwDrawerTrendLabel', group.trend_label || 'Steady');
        setText('rwDrawerActiveWindow', `${group.victims ? group.victims.length : group.count} Retained Disclosures`);

        // Populate Target Sectors
        const sectorsContainer = document.getElementById('rwDrawerSectors');
        if (sectorsContainer) {
            const industries = group.industries || [];
            sectorsContainer.innerHTML = industries.length > 0
                ? industries.map(ind => `<span class="rw-tag rw-tag--sector">${escapeHtml(ind)}</span>`).join('')
                : `<span style="color:var(--rw-text-muted); font-size:0.85rem;">No sector metadata available</span>`;
        }

        // Populate Target Countries
        const countriesContainer = document.getElementById('rwDrawerCountries');
        if (countriesContainer) {
            const countries = group.countries || [];
            countriesContainer.innerHTML = countries.length > 0
                ? countries.map(c => `<span class="rw-tag rw-tag--country">${escapeHtml(c)}</span>`).join('')
                : `<span style="color:var(--rw-text-muted); font-size:0.85rem;">Global or unverified</span>`;
        }

        // Populate Victim Disclosures List
        const victimsContainer = document.getElementById('rwDrawerVictimsList');
        if (victimsContainer) {
            const victims = group.victims || [];
            victimsContainer.innerHTML = victims.length > 0
                ? victims.map(v => `
                    <div class="rw-drawer-victim-item">
                        <div>
                            <div style="font-weight: 600; color: var(--rw-text-primary);">${escapeHtml(v.victim_name || 'Undisclosed')}</div>
                            <div style="font-size: 0.75rem; color: var(--rw-text-muted);">${formatRelativeTime(v.discovered)} · ${v.country || 'Global'}</div>
                        </div>
                        <a href="${escapeHtml(v.post_url || 'https://www.ransomware.live/')}" target="_blank" rel="noopener noreferrer" class="rw-action-btn" title="View Source">
                            <i class="fas fa-external-link-alt"></i>
                        </a>
                    </div>
                `).join('')
                : `<div style="color:var(--rw-text-muted); font-size:0.85rem; padding:1rem 0;">No individual victim details retained for this syndicate.</div>`;
        }

        // Set Outbound Pivots
        const pivotThreatIntelBtn = document.getElementById('rwPivotThreatIntel');
        if (pivotThreatIntelBtn) {
            // OUTBOUND PIVOT TO THREAT INTEL SEARCH QUERY
            pivotThreatIntelBtn.href = `/threat-intel.html?search=${encodeURIComponent(group.name)}`;
        }

        const pivotRansomwareLiveBtn = document.getElementById('rwPivotRansomwareLive');
        if (pivotRansomwareLiveBtn) {
            pivotRansomwareLiveBtn.href = `https://www.ransomware.live/#${encodeURIComponent(group.name.toLowerCase())}`;
        }

        // Open Drawer
        if (backdrop) backdrop.classList.add('active');
        if (drawer) {
            drawer.classList.add('active');
            drawer.setAttribute('aria-hidden', 'false');
            drawer.focus();
        }
    }

    function closeDossierDrawer() {
        const backdrop = document.getElementById('rwDrawerBackdrop');
        const drawer = document.getElementById('rwDrawer');

        if (backdrop) backdrop.classList.remove('active');
        if (drawer) {
            drawer.classList.remove('active');
            drawer.setAttribute('aria-hidden', 'true');
        }
    }

    function filterLedgerToGroup(groupName) {
        // Switch to ledger tab
        const ledgerTabBtn = document.querySelector('.rw-tab-btn[data-tab="ledger"]');
        if (ledgerTabBtn) ledgerTabBtn.click();

        // Populate search input
        const searchInput = document.getElementById('rwLedgerSearch');
        if (searchInput) {
            searchInput.value = groupName;
            state.ledgerSearch = groupName.toLowerCase();
            state.currentPage = 1;
            applyLedgerFilters();
            scrollTableIntoView();
        }
    }

    // ==========================================================================
    // 6. URL PARAMETERS SUPPORT (?group=<name> or ?search=<query>)
    // ==========================================================================
    function initUrlParams() {
        try {
            const params = new URLSearchParams(window.location.search);
            const groupParam = params.get('group');
            const searchParam = params.get('search') || params.get('q');

            if (groupParam) {
                openSyndicateDossier(groupParam);
            } else if (searchParam) {
                const searchInput = document.getElementById('rwLedgerSearch');
                if (searchInput) {
                    searchInput.value = searchParam;
                    state.ledgerSearch = searchParam.toLowerCase();
                    applyLedgerFilters();
                }
            }
        } catch (e) {
            console.warn('[RansomwareWorkbench] Failed to parse URL parameters:', e);
        }
    }

    // ==========================================================================
    // 7. UTILITIES
    // ==========================================================================
    function formatRelativeTime(dateStr) {
        if (!dateStr) return '—';
        const d = new Date(dateStr);
        if (isNaN(d.getTime())) return '—';

        const diffSecs = Math.floor((Date.now() - d.getTime()) / 1000);
        if (diffSecs < 3600) {
            const mins = Math.max(1, Math.floor(diffSecs / 60));
            return `${mins}m ago`;
        }
        if (diffSecs < 86400) {
            const hrs = Math.floor(diffSecs / 3600);
            return `${hrs}h ago`;
        }
        const days = Math.floor(diffSecs / 86400);
        if (days === 1) return 'Yesterday';
        if (days < 7) return `${days}d ago`;
        return d.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
    }

    function scrollTableIntoView() {
        const table = document.querySelector('.rw-table-wrap');
        if (table) {
            table.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    }

    function setText(id, text) {
        const el = document.getElementById(id);
        if (el) el.textContent = text;
    }

    function escapeHtml(str) {
        if (!str) return '';
        return String(str)
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#039;');
    }

    function debounce(func, wait) {
        let timeout;
        return function (...args) {
            clearTimeout(timeout);
            timeout = setTimeout(() => func.apply(this, args), wait);
        };
    }

    function renderErrorState(message) {
        const container = document.getElementById('rwLedgerBody');
        if (container) {
            container.innerHTML = `
                <tr>
                    <td colspan="6">
                        <div class="rw-empty-state">
                            <i class="fas fa-exclamation-triangle" style="color: var(--rw-accent-crimson);"></i>
                            <h3>Unable to Load Ransomware Telemetry</h3>
                            <p>${escapeHtml(message || 'An error occurred while fetching the live dataset. Please try again.')}</p>
                        </div>
                    </td>
                </tr>
            `;
        }
    }

    // Expose Global Public API for inline event handlers
    window.ransomwareWorkbench = {
        openSyndicateDossier,
        closeDossierDrawer,
        filterLedgerToGroup
    };

})();
