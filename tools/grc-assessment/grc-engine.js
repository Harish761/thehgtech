function escapeHTMLBasic(str) { if (!str) return ''; return String(str).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;'); }
/**
 * TheHGTech GRC Gap Analysis Engine v2.0
 * Multi-Phase Architecture: Scope Selection -> Engine -> Dashboard
 * Phase 1 Enhancements: Maturity Slider, Evidence Notes, Assessor Labels,
 *   Keyboard Navigation, Auto-Save Indicator, JSON Export
 */

document.addEventListener('DOMContentLoaded', async () => {

    // --- MATURITY LEVELS (CMMI-inspired, replaces binary Partial) ---
    const MATURITY_LEVELS = {
        'yes':       { label: 'Fully Implemented', multiplier: 1.0,  color: '#10B981', icon: 'fa-check-circle' },
        'optimized': { label: 'Optimized (Continuously Improved)', multiplier: 1.0,  color: '#10B981', icon: 'fa-gem' },
        'managed':   { label: 'Managed (Measured & Controlled)', multiplier: 0.8,  color: '#34D399', icon: 'fa-chart-line' },
        'defined':   { label: 'Defined (Documented Process)', multiplier: 0.6,  color: '#FBBF24', icon: 'fa-file-alt' },
        'repeatable':{ label: 'Repeatable (Ad-hoc but Consistent)', multiplier: 0.4,  color: '#F59E0B', icon: 'fa-redo' },
        'adhoc':     { label: 'Ad Hoc (Initial / Informal)', multiplier: 0.2,  color: '#EF4444', icon: 'fa-exclamation-circle' },
        'no':        { label: 'Not Implemented (Gap)', multiplier: 0.0,  color: '#EF4444', icon: 'fa-times-circle' },
        'na':        { label: 'Not Applicable', multiplier: null, color: '#6B7280', icon: 'fa-ban' }
    };

    /**
     * INDEPENDENT FRAMEWORK SCORING CONFIGURATION
     * ISO Multipliers remain untouched in getMultiplier() as per requirements.
     * CIS v8: Strict technical rigor (high penalty for non-optimized states).
     * NIST CSF 2.0: Outcome-focused (moderate credit for managing processes).
     */
    const CIS_MULTIPLIERS = {
        'yes': 1.0, 'optimized': 1.0, 
        'managed': 0.4, 'defined': 0.25, 
        'repeatable': 0.1, 'adhoc': 0.05, 'no': 0.0, 'na': 0.0
    };

    const NIST_MULTIPLIERS = {
        'yes': 1.0, 'optimized': 1.0, 
        'managed': 0.75, 'defined': 0.65, 
        'repeatable': 0.4, 'adhoc': 0.2, 'no': 0.0, 'na': 0.0
    };

    const NIST_FUNCTIONS = {
        'GV': 'Govern', 'ID': 'Identify', 'PR': 'Protect',
        'DE': 'Detect', 'RS': 'Respond', 'RC': 'Recover'
    };

    // Framework Benchmarks (Full target denominators)
    const NIST_SUB_TOTAL = 106; // Framework target counts
    const CIS_SAFEGUARD_TOTAL = 153; // Framework target counts
    const NIST_MAPPING_STRENGTH = 0.95; // Conceptual alignment factor
    const CIS_MAPPING_STRENGTH = 0.85; // Technical alignment factor

    function getMultiplier(val) {
        if (val === 'yes' || val === 'optimized') return 1.0;
        if (val === 'managed') return 0.8;
        if (val === 'defined') return 0.6;
        if (val === 'repeatable') return 0.4;
        if (val === 'adhoc') return 0.2;
        return 0;
    }

    function getCISMultiplier(val) {
        return CIS_MULTIPLIERS[val] || 0;
    }

    function isAnswered(val) {
        return val && MATURITY_LEVELS[val] !== undefined;
    }

    function isNA(val) {
        return val === 'na';
    }

    const ui = {
        // Views
        viewScope: document.getElementById('viewScope'),
        viewEngine: document.getElementById('viewEngine'),
        viewDashboard: document.getElementById('viewDashboard'),

        // Scope elements
        scopeGrid: document.getElementById('scopeGrid'),
        btnStartAssess: document.getElementById('btnStartAssessment'),

        // Engine elements
        viewport: document.getElementById('assessmentViewport'),
        domainNav: document.getElementById('domainNav'),
        domainBadge: document.getElementById('currentDomainBadge'),
        domainTitle: document.getElementById('currentDomainTitle'),
        progressBar: document.getElementById('domainProgressBar'),
        progressText: document.getElementById('progressText'),
        overallScore: document.getElementById('overallScore'),
        btnExportDraft: document.getElementById('btnExport'),
        btnPartialDashboard: document.getElementById('btnPartialDashboard'),
        btnFinishDashboard: document.getElementById('btnFinishAssessment'),
        btnNextDomain: document.getElementById('btnNextDomain'),

        // Dashboard elements
        btnBackToEngine: document.getElementById('btnBackToEngine'),
        btnPdfExport: document.getElementById('btnPdfExport'),
        btnFinalExcelExport: document.getElementById('btnFinalExcelExport'),
        dashDate: document.getElementById('dashDate'),
        dashOverallScore: document.getElementById('dashOverallScore'),
        gapsContainer: document.getElementById('gapsContainer'),
        printableDashboard: document.getElementById('printableDashboard'),
        btnShareState: document.getElementById('btnShareState'),
        btnResetEngine: document.getElementById('btnResetEngine'),
        resetModal: document.getElementById('resetModal'),
        btnConfirmReset: document.getElementById('btnConfirmReset'),
        btnJsonExport: document.getElementById('btnJsonExport')
    };

    let grcData = null;
    let activeDomainIndices = [];     // Which domains the user selected to scope in
    let currentNavIndex = 0;          // Index relative to the activeDomainIndices array
    let currentControlIndex = 0;      // [11] For Wizard Mode
    let wizardMode = true;            // [11] Default to Wizard Mode
    const STORAGE_KEY = 'thehgtech_grc_state_v2';
    const HISTORY_KEY = 'thehgtech_grc_history_v2';
    const RISK_REGISTER_KEY = 'thehgtech_grc_risk_register_v1';  // [2]
    const REMEDIATION_KEY = 'thehgtech_grc_remediation_v1';       // [10]
    let userState = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
    let riskRegisterState = JSON.parse(localStorage.getItem(RISK_REGISTER_KEY)) || {}; // [2]
    let remediationState = JSON.parse(localStorage.getItem(REMEDIATION_KEY)) || {};    // [10]
    let radarChartInstance = null;

    // --- AUTO-SAVE INDICATOR ---
    let saveIndicatorTimeout = null;
    function flashSaveIndicator() {
        const el = document.getElementById('autoSaveIndicator');
        if (!el) return;
        el.innerHTML = '<i class="fas fa-check-circle" style="color:#10B981;"></i> Saved';
        el.style.opacity = '1';
        clearTimeout(saveIndicatorTimeout);
        saveIndicatorTimeout = setTimeout(() => {
            const now = new Date();
            el.innerHTML = '<i class="fas fa-save" style="color:var(--text-muted);"></i> Last saved ' + now.toLocaleTimeString([], {hour:'2-digit', minute:'2-digit'});
            el.style.opacity = '0.7';
        }, 2000);
    }

    function parseMarkdown(text) {
        if (!text) return '';
        return text
            .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
            .replace(/\*(.*?)\*/g, '<em>$1</em>')
            .replace(/\n\n/g, '<br/><br/>');
    }

    function persistState() {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(userState));
        flashSaveIndicator();
    }

    // --- NEW: History & Progress Tracking ---
    function saveToHistory(score) {
        let history = JSON.parse(localStorage.getItem(HISTORY_KEY)) || [];
        const entry = {
            date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric' }),
            timestamp: Date.now(),
            score: score,
            nist: window.grcNistScore || 0,  // [7]
            cis: window.grcCisScore || 0      // [7]
        };
        const last = history[history.length - 1];
        if (last && last.score === score && (Date.now() - last.timestamp < 3600000)) return;
        history.push(entry);
        if (history.length > 12) history.shift(); // [7] bumped from 5 to 12
        localStorage.setItem(HISTORY_KEY, JSON.stringify(history));
    }

    function initHistoryUI() {
        const history = JSON.parse(localStorage.getItem(HISTORY_KEY)) || [];
        const strip = document.getElementById('prevPerformanceStrip');
        const lastScoreVal = document.getElementById('lastScoreVal');
        const historyCard = document.getElementById('historyCard');
        const noHistory = document.getElementById('noHistory');
        const historyFound = document.getElementById('historyFound');
        const prevScoreVal = document.getElementById('prevScoreVal');
        const trendBadge = document.getElementById('trendBadge');

        if (history.length > 0) {
            const last = history[history.length - 1];
            if (strip) {
                strip.style.display = 'flex';
                lastScoreVal.innerText = last.score + '%';
            }
            if (noHistory) noHistory.style.display = 'none';
            if (historyFound) historyFound.style.display = 'block';
            if (prevScoreVal) prevScoreVal.innerText = last.score + '%';
        }
    }
    initHistoryUI();

    // ==========================================
    // [7] HISTORICAL TREND LINE CHART
    // ==========================================
    let trendChartInstance = null;
    function renderTrendChart() {
        const history = JSON.parse(localStorage.getItem(HISTORY_KEY)) || [];
        const card = document.getElementById('historyCard');
        if (!card) return;

        if (history.length < 2) {
            // Not enough data — show placeholder
            const noHistEl = document.getElementById('noHistory');
            if (noHistEl) noHistEl.innerText = 'Complete 2+ assessments to see your score trend chart here.';
            return;
        }

        // Replace card content with canvas
        const noHistEl = document.getElementById('noHistory');
        const histFoundEl = document.getElementById('historyFound');
        if (noHistEl) noHistEl.style.display = 'none';
        if (histFoundEl) histFoundEl.style.display = 'none';

        let canvas = document.getElementById('trendChartCanvas');
        if (!canvas) {
            canvas = document.createElement('canvas');
            canvas.id = 'trendChartCanvas';
            canvas.style.cssText = 'width:100%; height:200px; margin-top:0.8rem;';
            card.appendChild(canvas);
        }

        if (trendChartInstance) trendChartInstance.destroy();

        const labels = history.map(e => e.date);
        trendChartInstance = new Chart(canvas.getContext('2d'), {
            type: 'line',
            data: {
                labels,
                datasets: [
                    {
                        label: 'ISO 27001',
                        data: history.map(e => e.score || 0),
                        borderColor: '#8B5CF6',
                        backgroundColor: 'rgba(139,92,246,0.08)',
                        borderWidth: 2,
                        pointRadius: 3,
                        tension: 0.35,
                        fill: true
                    },
                    {
                        label: 'NIST CSF',
                        data: history.map(e => e.nist || 0),
                        borderColor: '#06B6D4',
                        backgroundColor: 'transparent',
                        borderWidth: 1.5,
                        pointRadius: 2,
                        tension: 0.35,
                        fill: false
                    },
                    {
                        label: 'CIS v8',
                        data: history.map(e => e.cis || 0),
                        borderColor: '#F59E0B',
                        backgroundColor: 'transparent',
                        borderWidth: 1.5,
                        pointRadius: 2,
                        tension: 0.35,
                        fill: false
                    }
                ]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    x: { ticks: { color: '#6B7280', font: { size: 10 } }, grid: { color: 'rgba(255,255,255,0.04)' } },
                    y: { min: 0, max: 100, ticks: { color: '#6B7280', font: { size: 10 }, callback: v => v + '%' }, grid: { color: 'rgba(255,255,255,0.06)' } }
                },
                plugins: {
                    legend: { display: true, position: 'bottom', labels: { color: '#9CA3AF', font: { size: 10 }, boxWidth: 12, padding: 10 } }
                }
            }
        });
    }



    // ==========================================
    // [15] WELCOME BACK SESSION RECOVERY
    // ==========================================
    (function initWelcomeBack() {
        const answered = Object.keys(userState).filter(k => !k.startsWith('_')).length;
        if (answered < 3) return; // Don't show for trivial sessions
        const modal = document.getElementById('welcomeBackModal');
        if (!modal) return;

        const lastHistory = JSON.parse(localStorage.getItem(HISTORY_KEY)) || [];
        const lastEntry = lastHistory[lastHistory.length - 1];
        const infoEl = document.getElementById('wbSessionInfo');
        const scoreEl = document.getElementById('wbSessionScore');
        const startedDate = userState._started ? new Date(userState._started).toLocaleDateString() : 'recently';
        if (infoEl) infoEl.innerText = `Session started ${startedDate} · ${answered} controls answered`;
        if (scoreEl && lastEntry) scoreEl.innerHTML = `Last recorded score: <strong style="color:var(--accent-cyan);">${escapeHTMLBasic(lastEntry.score)}%</strong>`;

        modal.style.display = 'flex';

        document.getElementById('btnWBResume').addEventListener('click', () => {
            modal.style.display = 'none';
        });
        document.getElementById('btnWBFresh').addEventListener('click', () => {
            if (confirm('This will permanently delete your saved session. Are you sure?')) {
                localStorage.removeItem(STORAGE_KEY);
                localStorage.removeItem(RISK_REGISTER_KEY);
                localStorage.removeItem(REMEDIATION_KEY);
                const url = new URL(window.location);
                url.searchParams.delete('s');
                window.history.replaceState({}, '', url);
                location.reload();
            }
        });
    })();

    // --- NEW: URL Persistence Support ---
    function updateURLState() {
        const stateStr = btoa(JSON.stringify(userState));
        const url = new URL(window.location);
        url.searchParams.set('s', stateStr);
        window.history.replaceState({}, '', url);
        // Persist timestamp for completion tracking
        if (!userState._started) {
            userState._started = Date.now();
            localStorage.setItem(STORAGE_KEY, JSON.stringify(userState));
        }
    }

    function loadURLState() {
        const params = new URLSearchParams(window.location.search);
        const s = params.get('s');
        if (s) {
            try {
                const decoded = JSON.parse(atob(s));
                userState = { ...userState, ...decoded };
                localStorage.setItem(STORAGE_KEY, JSON.stringify(userState));
            } catch (e) {
                console.error("Failed to load state from URL", e);
            }
        }
    }
    loadURLState();
    // ------------------------------------

    if (ui.btnNextDomain) {
        ui.btnNextDomain.addEventListener('click', () => {
            if (currentNavIndex < activeDomainIndices.length - 1) {
                currentNavIndex++;
                renderDomain(activeDomainIndices[currentNavIndex]);
                updateSidebarActiveState();
                const mainArea = document.querySelector('.content-header');
                if (mainArea) {
                    const offset = mainArea.getBoundingClientRect().top + window.scrollY - 100;
                    window.scrollTo({ top: offset, behavior: 'smooth' });
                } else {
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                }
            }
        });
    }

    // 1. Initialize Data
    function loadGRCData() {
        if (typeof THEHGTECH_GRC_DATA !== 'undefined') {
            grcData = THEHGTECH_GRC_DATA;
            initScopeSelection();
        } else {
            console.error("GRC Engine Error: Data not loaded");
            ui.scopeGrid.innerHTML = `<div style="color:red; grid-column:1/-1;">Error: Could not load the knowledge base. Ensure grc-data.js is present.</div>`;
        }
    }

    // ==========================================
    // PHASE 1: SCOPE SELECTION
    // ==========================================
    function initScopeSelection() {
        ui.scopeGrid.innerHTML = '';

        // Consultant logic for recommendations
        const recommendations = {
            'domain_0': 'MANDATORY',
            'domain_5': 'CRITICAL',
            'domain_6': 'REQUIRED',
            'domain_7': 'OPTIONAL FOR REMOTE',
            'domain_8': 'HIGHLY RECOMMENDED'
        };

        // Add Selection Toolbar
        const toolbar = document.createElement('div');
        toolbar.className = 'selection-toolbar';
        toolbar.style.cssText = `
            display: flex;
            gap: 1rem;
            margin-bottom: 1.5rem;
            padding: 1rem;
            background: rgba(255, 255, 255, 0.03);
            border-radius: 12px;
            border: 1px solid var(--border);
            align-items: center;
        `;
        toolbar.innerHTML = `
            <span style="font-size: 0.8rem; color: var(--text-muted); font-weight: 700; text-transform: uppercase; letter-spacing: 1px;">Quick Actions:</span>
            <button id="btnSelectAll" class="btn-mini" style="background: rgba(0, 217, 255, 0.1); color: var(--accent-cyan); border: 1px solid rgba(0, 217, 255, 0.2); padding: 5px 12px; border-radius: 4px; font-size: 0.75rem; cursor: pointer; transition: all 0.2s;">Select All Domains</button>
            <button id="btnDeselectAll" class="btn-mini" style="background: rgba(239, 68, 68, 0.1); color: #EF4444; border: 1px solid rgba(239, 68, 68, 0.2); padding: 5px 12px; border-radius: 4px; font-size: 0.75rem; cursor: pointer; transition: all 0.2s;">Clear Selection</button>
        `;
        ui.scopeGrid.parentNode.insertBefore(toolbar, ui.scopeGrid);

        document.getElementById('btnSelectAll').addEventListener('click', () => {
            document.querySelectorAll('.scope-card').forEach((card, idx) => {
                if (!card.classList.contains('selected')) {
                    card.click();
                }
            });
        });

        document.getElementById('btnDeselectAll').addEventListener('click', () => {
            document.querySelectorAll('.scope-card').forEach((card, idx) => {
                if (card.classList.contains('selected')) {
                    card.click();
                }
            });
        });

        const hasExistingData = Object.keys(userState).length > 0;

        // --- INDUSTRY PRESETS (Feature #9) ---
        const presetBar = document.createElement('div');
        presetBar.className = 'industry-preset-bar';
        presetBar.style.cssText = `
            display: flex;
            gap: 0.6rem;
            margin-bottom: 1.5rem;
            padding: 1rem;
            background: rgba(139, 92, 246, 0.03);
            border-radius: 12px;
            border: 1px solid rgba(139, 92, 246, 0.1);
            align-items: center;
            flex-wrap: wrap;
        `;
        const presets = [
            { label: 'SaaS Startup', icon: 'fa-cloud', domains: [0,1,2,3,5,7], desc: 'Cloud-first: Access Control, Crypto, Ops Security, Comms Security' },
            { label: 'Healthcare', icon: 'fa-hospital', domains: [0,1,2,3,4,5,6,7], desc: 'Full scope — HIPAA crosswalk requires all domains' },
            { label: 'Financial Services', icon: 'fa-university', domains: [0,1,2,3,4,5,6,7], desc: 'PCI-DSS & SOX crosswalk — comprehensive coverage required' },
            { label: 'Government', icon: 'fa-landmark', domains: [0,1,2,3,4,5,7], desc: 'FedRAMP aligned — Physical Security optional for cloud' },
            { label: 'Essential Only', icon: 'fa-bolt', domains: [0,1,5], desc: 'Minimum viable: People, Organizational, Technology Controls' }
        ];
        presetBar.innerHTML = `
            <span style="font-size: 0.75rem; color: var(--accent-purple); font-weight: 700; text-transform: uppercase; letter-spacing: 1px; white-space:nowrap;">
                <i class="fas fa-industry"></i> Industry Presets:
            </span>
        `;
        let activePresetBtn = null; // [13] track active preset
        presets.forEach(preset => {
            const btn = document.createElement('button');
            btn.className = 'preset-btn';
            btn.innerHTML = `<i class="fas ${escapeHTMLBasic(preset.icon)}"></i> ${escapeHTMLBasic(preset.label)}`;
            btn.title = preset.desc;
            btn.style.cssText = `
                background: rgba(255,255,255,0.04); color: var(--text-muted); border: 1px solid var(--border);
                padding: 5px 12px; border-radius: 6px; font-size: 0.75rem; cursor: pointer;
                transition: all 0.2s; font-weight: 600; white-space: nowrap;
            `;
            const applyActive = (b) => { b.style.background='rgba(139,92,246,0.2)'; b.style.color='#C4B5FD'; b.style.borderColor='rgba(139,92,246,0.4)'; };
            const applyInactive = (b) => { b.style.background='rgba(255,255,255,0.04)'; b.style.color='var(--text-muted)'; b.style.borderColor='var(--border)'; };
            btn.addEventListener('click', () => {
                // [13] Reset all preset buttons, then activate this one
                if (activePresetBtn && activePresetBtn !== btn) applyInactive(activePresetBtn);
                applyActive(btn);
                activePresetBtn = btn;
                // Deselect all non-mandatory
                document.querySelectorAll('.scope-card:not([data-mandatory])').forEach((card) => {
                    if (card.classList.contains('selected')) card.click();
                });
                activeDomainIndices = activeDomainIndices.filter(i => grcData.domains[i].isMandatory);
                const allCards = document.querySelectorAll('.scope-card');
                preset.domains.forEach(idx => {
                    if (allCards[idx] && !allCards[idx].classList.contains('selected') && !allCards[idx].dataset.mandatory) {
                        allCards[idx].click();
                    }
                });
            });
            presetBar.appendChild(btn);
        });
        ui.scopeGrid.parentNode.insertBefore(presetBar, toolbar.nextSibling);

        grcData.domains.forEach((dom, index) => {
            const card = document.createElement('div');
            card.className = 'scope-card';
            const isMandatory = dom.isMandatory === true;

            const recLabel = recommendations[dom.id] || 'RECOMMENDED';
            const recClass = isMandatory ? 'badge-critical' :
                             recLabel.includes('CRITICAL') ? 'badge-critical' : 
                             recLabel.includes('OPTIONAL') ? 'badge-optional' : 'badge-recommended';

            // Mandatory domains are always pre-selected and locked
            if (isMandatory) {
                card.classList.add('selected');
                if (!activeDomainIndices.includes(index)) activeDomainIndices.push(index);
            } else {
                if (userState._activeDomains && Array.isArray(userState._activeDomains)) {
                    if (userState._activeDomains.includes(index)) {
                        card.classList.add('selected');
                        if (!activeDomainIndices.includes(index)) activeDomainIndices.push(index);
                    }
                } else {
                    // Check if this domain has answered questions
                    let hasAnswersInDomain = false;
                    if (hasExistingData) {
                        const answered = dom.controls.filter(c => userState[c.control_id]).length;
                        if (answered > 0) hasAnswersInDomain = true;
                    }
                    // Auto-select if no previous baseline, or if it had existing answers
                    if (!hasExistingData || hasAnswersInDomain) {
                        card.classList.add('selected');
                        if (!activeDomainIndices.includes(index)) activeDomainIndices.push(index);
                    }
                }
            }

            // Mandatory domain banner
            const mandatoryBanner = isMandatory ? `
                <div style="position:absolute; top:0; left:0; right:0; background:linear-gradient(90deg, rgba(239,68,68,0.15), rgba(239,68,68,0.05)); border-bottom:1px solid rgba(239,68,68,0.3); padding:6px 14px; font-size:0.65rem; font-weight:800; color:#EF4444; text-transform:uppercase; letter-spacing:1.5px; display:flex; align-items:center; gap:6px;">
                    <i class="fas fa-lock"></i> MANDATORY — Cannot be excluded from scope
                </div>
            ` : '';

            // [13] Mini progress bar for returning sessions
            const answeredCount = dom.controls.filter(c => userState[c.control_id]).length;
            const miniPct = dom.controls.length > 0 ? Math.round((answeredCount / dom.controls.length) * 100) : 0;
            const miniBarHtml = (hasExistingData && !isMandatory && answeredCount > 0) ? `
                <div style="margin-top:0.6rem; width:100%;">
                    <div style="display:flex; justify-content:space-between; font-size:0.65rem; color:var(--text-muted); margin-bottom:3px;">
                        <span>Prior session</span><span>${answeredCount}/${dom.controls.length} answered</span>
                    </div>
                    <div style="height:4px; background:rgba(255,255,255,0.06); border-radius:2px; overflow:hidden;">
                        <div style="height:100%; width:${miniPct}%; background:${miniPct>=80?'#10B981':miniPct>=40?'#F59E0B':'#EF4444'}; border-radius:2px;"></div>
                    </div>
                </div>
            ` : '';

            card.innerHTML = `
                ${mandatoryBanner}
                <div class="scope-card-header" style="display:flex; justify-content:space-between; width:100%; align-items:flex-start; ${isMandatory ? 'margin-top:2rem;' : ''}">
                    <div class="scope-icon-box" style="${isMandatory ? 'background:rgba(239,68,68,0.1); border-color:rgba(239,68,68,0.3); color:#EF4444;' : ''}">
                        <i class="fas ${dom.icon || 'fa-folder'}"></i>
                    </div>
                    <div class="custom-checkbox-container">
                        <input type="checkbox" ${card.classList.contains('selected') ? 'checked' : ''} id="check_${dom.id}" ${isMandatory ? 'disabled' : ''} style="display:none;">
                        <div class="custom-check-visual ${card.classList.contains('selected') ? 'checked' : ''}" style="${isMandatory ? 'opacity:0.5; cursor:not-allowed;' : ''}">
                            <i class="fas ${isMandatory ? 'fa-lock' : 'fa-check'}"></i>
                        </div>
                    </div>
                </div>
                <div class="scope-badge ${recClass}">${isMandatory ? '🔒 MANDATORY' : recLabel}</div>
                <h3 style="${isMandatory ? 'color:#EF4444;' : ''}">${dom.name}</h3>
                <p>${dom.description}</p>
                <div class="scope-stats">
                    <span class="control-pill"><i class="fas fa-microchip"></i> ${dom.controls.length} Clauses</span>
                    <span class="impact-pill" style="${isMandatory ? 'background:rgba(239,68,68,0.1); color:#EF4444; border-color:rgba(239,68,68,0.3);' : ''}"><i class="fas ${isMandatory ? 'fa-exclamation-triangle' : 'fa-shield-virus'}"></i> ${isMandatory ? 'Certification Blocker' : 'High Impact'}</span>
                </div>
                ${miniBarHtml}
            `;

            if (isMandatory) {
                // Mandatory card: apply locked styling, no toggle on click
                card.style.cssText += 'border-color: rgba(239,68,68,0.4); position: relative; overflow: hidden;';
                card.style.cursor = 'default';
                card.addEventListener('click', (e) => e.preventDefault());
            } else {
                card.addEventListener('click', () => {
                    const checkbox = card.querySelector('.custom-check-visual');
                    const input = card.querySelector('input');
                    
                    card.classList.toggle('selected');
                    const isSelected = card.classList.contains('selected');
                    input.checked = isSelected;
                    
                    if (isSelected) {
                        if (!activeDomainIndices.includes(index)) activeDomainIndices.push(index);
                        checkbox.classList.add('checked');
                    } else {
                        activeDomainIndices = activeDomainIndices.filter(i => i !== index);
                        checkbox.classList.remove('checked');
                    }

                    ui.btnStartAssess.disabled = activeDomainIndices.length === 0;
                    updateScopeMetrics();
                });
            }

            ui.scopeGrid.appendChild(card);
        });

        ui.btnStartAssess.disabled = activeDomainIndices.length === 0;

        function updateScopeMetrics() {
            const countEl = document.getElementById('scopeControlCount');
            const domEl = document.getElementById('scopeDomainCount');
            if (countEl && domEl) {
                let totalControls = 0;
                activeDomainIndices.forEach(idx => {
                    totalControls += grcData.domains[idx].controls.length;
                });
                countEl.textContent = totalControls;
                domEl.textContent = activeDomainIndices.length;
            }
        }
        updateScopeMetrics();

        ui.btnStartAssess.addEventListener('click', () => {
            // Save assessor metadata
            const nameInput = document.getElementById('assessorNameInput');
            const orgInput = document.getElementById('orgNameInput');
            if (nameInput && nameInput.value) userState._assessorName = nameInput.value.trim();
            if (orgInput && orgInput.value) userState._orgName = orgInput.value.trim();
            userState._activeDomains = [...activeDomainIndices];
            persistState();

            activeDomainIndices.sort(); 
            ui.viewScope.classList.remove('active');
            ui.viewEngine.style.display = 'flex';
            setTimeout(() => { ui.viewEngine.classList.add('active'); }, 50);
            startEngine();
        });
    }

    // ==========================================
    // PHASE 2: ASSESSMENT ENGINE
    // ==========================================
    function startEngine() {
        currentNavIndex = 0;
        renderSidebarNav();
        renderDomain(activeDomainIndices[currentNavIndex]); // Pass global index
        updateOverallScore();
    }

    function renderSidebarNav() {
        ui.domainNav.innerHTML = '';
        activeDomainIndices.forEach((globalIndex, activeIdx) => {
            const dom = grcData.domains[globalIndex];
            const completedInDomain = dom.controls.filter(c => userState[c.control_id]).length;
            const totalInDomain = dom.controls.length;
            const pct = totalInDomain > 0 ? Math.round((completedInDomain / totalInDomain) * 100) : 0;

            // [14] Color coding: green ≥80%, amber ≥40%, red >0%, grey = untouched
            const dotColor = pct >= 80 ? '#10B981' : pct >= 40 ? '#F59E0B' : pct > 0 ? '#EF4444' : '#6B7280';
            const barColor = dotColor;

            const navBtn = document.createElement('div');
            navBtn.className = `nav-item ${activeIdx === currentNavIndex ? 'active' : ''}`;
            navBtn.innerHTML = `
                <div style="display:flex; align-items:center; gap:8px; width:100%;">
                    <span style="width:8px; height:8px; border-radius:50%; background:${dotColor}; flex-shrink:0; box-shadow:0 0 6px ${dotColor}55; transition:background 0.3s;"></span>
                    <div class="nav-item-title" style="flex:1; overflow:hidden; text-overflow:ellipsis; white-space:nowrap;">${dom.name.replace(' Controls','').replace(' Management System Requirements','Clauses 4–10')}</div>
                    <div class="nav-item-progress" style="color:${dotColor};">${pct}%</div>
                </div>
                <div style="margin-top:5px; height:3px; background:rgba(255,255,255,0.05); border-radius:2px; overflow:hidden;">
                    <div style="height:100%; width:${pct}%; background:${barColor}; border-radius:2px; transition:width 0.4s ease;"></div>
                </div>
            `;

            navBtn.addEventListener('click', () => {
                currentNavIndex = activeIdx;
                renderDomain(activeDomainIndices[currentNavIndex]);
                updateSidebarActiveState();
                const mainArea = document.querySelector('.content-header');
                if (mainArea) {
                    const offset = mainArea.getBoundingClientRect().top + window.scrollY - 100;
                    window.scrollTo({ top: offset, behavior: 'smooth' });
                } else {
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                }
            });

            ui.domainNav.appendChild(navBtn);
        });
    }

    function renderDomain(globalIndex) { // Accepts globalIndex directly
        const domain = grcData.domains[globalIndex];

        // Update Headers
        const cleanDomainId = domain.id.replace('domain_', '');
        ui.domainBadge.innerText = `Domain ${cleanDomainId}`;
        ui.domainTitle.innerText = domain.name;

        // [11] Add View Toggle to Header if not exists
        let toolbar = document.getElementById('engineViewToolbar');
        if (!toolbar) {
            toolbar = document.createElement('div');
            toolbar.id = 'engineViewToolbar';
            toolbar.style.cssText = 'display:flex; gap:0.5rem; margin-top:1rem; background:rgba(255,255,255,0.03); padding:0.4rem; border-radius:10px; border:1px solid var(--border); width:fit-content;';
            toolbar.innerHTML = `
                <button id="btnToggleWizard" class="view-toggle-btn ${wizardMode ? 'active' : ''}" style="padding:0.4rem 0.8rem; border-radius:6px; border:none; font-size:0.7rem; font-weight:700; cursor:pointer; background:${wizardMode ? 'var(--accent-cyan)' : 'transparent'}; color:${wizardMode ? '#000' : 'var(--text-muted)'};"><i class="fas fa-magic"></i> Wizard</button>
                <button id="btnToggleScroll" class="view-toggle-btn ${!wizardMode ? 'active' : ''}" style="padding:0.4rem 0.8rem; border-radius:6px; border:none; font-size:0.7rem; font-weight:700; cursor:pointer; background:${!wizardMode ? 'var(--accent-cyan)' : 'transparent'}; color:${!wizardMode ? '#000' : 'var(--text-muted)'};"><i class="fas fa-align-justify"></i> Scroll</button>
            `;
            ui.domainTitle.parentNode.appendChild(toolbar);

            toolbar.querySelector('#btnToggleWizard').addEventListener('click', () => {
                wizardMode = true;
                currentControlIndex = 0;
                renderDomain(globalIndex);
            });
            toolbar.querySelector('#btnToggleScroll').addEventListener('click', () => {
                wizardMode = false;
                renderDomain(globalIndex);
            });
        }
        
        // Update button states
        toolbar.querySelector('#btnToggleWizard').className = `view-toggle-btn ${wizardMode ? 'active' : ''}`;
        toolbar.querySelector('#btnToggleWizard').style.background = wizardMode ? 'var(--accent-cyan)' : 'transparent';
        toolbar.querySelector('#btnToggleWizard').style.color = wizardMode ? '#000' : 'var(--text-muted)';
        toolbar.querySelector('#btnToggleScroll').className = `view-toggle-btn ${!wizardMode ? 'active' : ''}`;
        toolbar.querySelector('#btnToggleScroll').style.background = !wizardMode ? 'var(--accent-cyan)' : 'transparent';
        toolbar.querySelector('#btnToggleScroll').style.color = !wizardMode ? '#000' : 'var(--text-muted)';

        // Render Cards
        ui.viewport.innerHTML = '';
        
        // Intro Card (only in Scroll mode)
        if (!wizardMode) {
            const intro = document.createElement('div');
            intro.className = 'section-intro-card';
            intro.style.cssText = `
                background: linear-gradient(135deg, rgba(0, 217, 255, 0.03), rgba(139, 92, 246, 0.03));
                border: 1px solid var(--border);
                padding: 2rem;
                border-radius: 20px;
                margin-bottom: 3rem;
                position: relative;
                border-left: 5px solid var(--accent-cyan);
                box-shadow: 0 10px 30px rgba(0,0,0,0.1);
            `;
            intro.innerHTML = `
                <div style="font-size: 0.7rem; text-transform: uppercase; letter-spacing: 2px; color: var(--accent-cyan); font-weight: 800; margin-bottom: 0.8rem; display:flex; align-items:center; gap:8px;">
                    <i class="fas fa-compass"></i> Audit Context & Scope
                </div>
                <h2 style="margin: 0 0 1rem; font-family:'Outfit'; font-size: 2rem; color:#fff;">${domain.name}</h2>
                <p style="margin: 0; color: var(--text-muted); line-height: 1.6; font-size: 1.1rem; font-style:italic;">
                    ${domain.description || "Evaluating core controls and operational compliance markers for this domain."}
                </p>
            `;
            ui.viewport.appendChild(intro);
        }

        domain.controls.forEach((control, idx) => {
            if (wizardMode && idx !== currentControlIndex) return;

            const card = document.createElement('article');
            card.className = 'control-card';
            card.id = `card_${control.control_id}`;
            card.setAttribute('data-id', control.control_id);
            if (wizardMode) card.style.boxShadow = '0 20px 50px rgba(0,0,0,0.3)';

            const savedValue = userState[control.control_id] || '';

            // Determine which maturity level is selected (backward compat with 'partial')
            const isMaturityAnswer = ['adhoc','repeatable','defined','managed','optimized'].includes(savedValue);
            const showMaturityPanel = isMaturityAnswer || savedValue === 'partial';

            card.innerHTML = `
                <div class="control-header" style="display:flex; gap:10px; align-items:center; flex-wrap:wrap; margin-bottom:0.5rem;">
                    <span class="control-id" style="background:var(--bg-dark); padding:0.2rem 0.6rem; border-radius:4px; font-weight:bold; color:var(--text-primary); border:1px solid var(--border); font-size:0.9rem;">Control A.${control.control_id}</span>
                    <span class="domain-tag" style="background:rgba(0, 217, 255, 0.1); color:#00D9FF; padding:0.2rem 0.6rem; border-radius:4px; font-size:0.8rem; font-weight:600;"><i class="fas fa-layer-group"></i> ${domain.name}</span>
                    ${control.criticality ? `<span class="framework-badge criticality" style="background:${control.criticality === 'High' ? 'rgba(239,68,68,0.1)' : control.criticality === 'Medium' ? 'rgba(245,158,11,0.1)' : 'rgba(16,185,129,0.1)'}; color:${control.criticality === 'High' ? '#EF4444' : control.criticality === 'Medium' ? '#F59E0B' : '#10B981'}; padding:0.2rem 0.6rem; border-radius:4px; font-size:0.75rem; border:1px solid ${control.criticality === 'High' ? 'rgba(239,68,68,0.3)' : control.criticality === 'Medium' ? 'rgba(245,158,11,0.3)' : 'rgba(16,185,129,0.3)'};">Risk Impact: ${control.risk_impact} (${control.criticality})</span>` : ''}
                    ${control.nist_mapping ? `<span class="framework-badge nist" style="background:rgba(10, 132, 255, 0.1); color:#0A84FF; padding:0.2rem 0.6rem; border-radius:4px; font-size:0.75rem; border:1px solid rgba(10, 132, 255, 0.3);">NIST: ${control.nist_mapping}</span>` : ''}
                    ${control.cis_mapping ? `<span class="framework-badge cis" style="background:rgba(255, 159, 10, 0.1); color:#FF9F0A; padding:0.2rem 0.6rem; border-radius:4px; font-size:0.75rem; border:1px solid rgba(255, 159, 10, 0.3);">CIS: ${control.cis_mapping}</span>` : ''}
                    ${control.gdpr_mapping ? `<span class="framework-badge gdpr" style="background:rgba(139, 92, 246, 0.1); color:#8B5CF6; padding:0.2rem 0.6rem; border-radius:4px; font-size:0.75rem; border:1px solid rgba(139, 92, 246, 0.3);">GDPR: ${control.gdpr_mapping}</span>` : ''}
                    ${control.soc2_mapping ? `<span class="framework-badge soc2" style="background:rgba(236, 72, 153, 0.1); color:#EC4899; padding:0.2rem 0.6rem; border-radius:4px; font-size:0.75rem; border:1px solid rgba(236, 72, 153, 0.3);">SOC 2: ${control.soc2_mapping}</span>` : ''}
                </div>
                <h3 class="control-title" style="margin-top:0.2rem;">${control.control_title}</h3>
                <p class="control-objective" style="color:var(--text-muted); font-size:0.85rem; margin-bottom: 2rem; font-style: italic;">
                    <i class="fas fa-bullseye"></i> Objective: ${parseMarkdown(control.objective)}
                </p>

                ${control.expert_rationale ? `
                <div class="expert-insight" style="margin: 1.5rem 0; padding: 1.5rem; background: rgba(139, 92, 246, 0.04); border: 1px solid rgba(139, 92, 246, 0.15); border-left: 4px solid #8B5CF6; border-radius: 0 12px 12px 0; font-size: 0.95rem; line-height: 1.6;">
                    <div style="font-weight: 800; color: #8B5CF6; margin-bottom: 0.8rem; display: flex; align-items: center; gap: 8px; text-transform: uppercase; font-size: 0.75rem; letter-spacing: 1px;">
                        <i class="fas fa-user-tie"></i> Strategic Advisor Insight
                    </div>
                    <div style="color: var(--text-primary);">
                        ${control.expert_rationale.includes('|') 
                            ? control.expert_rationale.split('|').map(part => {
                                const [label, text] = part.split(':');
                                return `<div style="margin-bottom:8px;"><strong>${label}:</strong> ${parseMarkdown(text)}</div>`;
                            }).join('')
                            : parseMarkdown(control.expert_rationale)
                        }
                    </div>
                </div>
                ` : ''}

                <div class="control-question">
                    <strong>Auditor Check:</strong> ${parseMarkdown(control.auditor_question)}
                </div>
                <details class="control-evidence" style="margin-top:1rem; cursor:pointer;" open>
                    <summary style="font-weight:bold; color:var(--accent-green); outline:none;">
                        <i class="fas fa-folder-open"></i> Example Evidence
                    </summary>
                    <div style="padding-top:0.5rem; color:var(--text-muted); font-size:0.9rem;">
                        ${parseMarkdown(control.evidence_required)}
                    </div>
                </details>
                
                <div class="options-grid" data-control="${control.control_id}">
                    <button class="btn-option ${savedValue === 'yes' || savedValue === 'optimized' ? 'active' : ''}" data-val="yes" title="Press 1">
                        <i class="fas fa-check-circle"></i> Yes <span class="kbd-hint">1</span>
                    </button>
                    <button class="btn-option btn-option-maturity ${showMaturityPanel ? 'active' : ''}" data-val="maturity" title="Press 2 — Set Maturity Level">
                        <i class="fas fa-layer-group"></i> Partial <span class="kbd-hint">2</span>
                    </button>
                    <button class="btn-option ${savedValue === 'no' ? 'active' : ''}" data-val="no" title="Press 3">
                        <i class="fas fa-times-circle"></i> No (Gap) <span class="kbd-hint">3</span>
                    </button>
                    <button class="btn-option ${savedValue === 'na' ? 'active' : ''}" data-val="na" title="Press 4">
                        <i class="fas fa-ban"></i> N/A <span class="kbd-hint">4</span>
                    </button>
                </div>

                <!-- Maturity Slider Panel -->
                <div class="maturity-panel" id="maturity_panel_${control.control_id}" style="display:${showMaturityPanel ? 'block' : 'none'};">
                    <div class="maturity-panel-header">
                        <i class="fas fa-sliders-h"></i> Select Implementation Maturity (CMMI Scale)
                    </div>
                    <div class="maturity-levels">
                        <button class="maturity-btn ${savedValue === 'adhoc' ? 'active' : ''}" data-mval="adhoc" style="--m-color:#EF4444;">
                            <span class="m-score">20%</span>
                            <span class="m-label">Ad Hoc</span>
                            <span class="m-desc">Informal, undocumented</span>
                        </button>
                        <button class="maturity-btn ${savedValue === 'repeatable' ? 'active' : ''}" data-mval="repeatable" style="--m-color:#F59E0B;">
                            <span class="m-score">40%</span>
                            <span class="m-label">Repeatable</span>
                            <span class="m-desc">Consistent but not documented</span>
                        </button>
                        <button class="maturity-btn ${savedValue === 'defined' || savedValue === 'partial' ? 'active' : ''}" data-mval="defined" style="--m-color:#FBBF24;">
                            <span class="m-score">60%</span>
                            <span class="m-label">Defined</span>
                            <span class="m-desc">Documented process exists</span>
                        </button>
                        <button class="maturity-btn ${savedValue === 'managed' ? 'active' : ''}" data-mval="managed" style="--m-color:#34D399;">
                            <span class="m-score">80%</span>
                            <span class="m-label">Managed</span>
                            <span class="m-desc">Measured & controlled</span>
                        </button>
                        <button class="maturity-btn ${savedValue === 'optimized' ? 'active' : ''}" data-mval="optimized" style="--m-color:#10B981;">
                            <span class="m-score">100%</span>
                            <span class="m-label">Optimized</span>
                            <span class="m-desc">Continuously improved</span>
                        </button>
                    </div>
                </div>

                <!-- N/A Justification -->
                <div class="na-justification-container" id="na_container_${control.control_id}" style="display:${savedValue === 'na' ? 'block' : 'none'}; margin-top: 1rem; padding: 1rem; background: rgba(255, 255, 255, 0.05); border-radius: 8px; border-left: 3px solid #6c757d;">
                    <label style="display:block; font-size: 0.85rem; color: var(--text-muted); margin-bottom: 0.5rem; font-weight: bold;">Justification for Not Applicable (N/A):</label>
                    <textarea class="na-justification-input" data-control="${control.control_id}" rows="2" style="width: 100%; border-radius: 4px; padding: 0.5rem; border: 1px solid var(--border); background: var(--bg-dark); color: var(--text-primary); font-family: inherit; resize: vertical;" placeholder="Briefly explain why this control is out of scope for your audit footprint...">${userState[control.control_id + '_just'] || ''}</textarea>
                </div>

                <!-- [4] Structured Evidence Form (replaces free-text textarea) -->
                <div class="evidence-notes-container" style="margin-top: 1rem;">
                    <details ${(userState[control.control_id + '_ev_docname'] || userState[control.control_id + '_notes']) ? 'open' : ''}>
                        <summary style="font-weight:600; color:var(--accent-cyan); cursor:pointer; font-size:0.85rem; outline:none; user-select:none;">
                            <i class="fas fa-folder-open"></i> Evidence Record &amp; Artifact Reference
                            ${userState[control.control_id + '_ev_docname'] ? '<span style="color:var(--text-muted); font-weight:400; font-size:0.75rem; margin-left:8px;">(logged)</span>' : ''}
                        </summary>
                        <div style="margin-top:0.8rem; display:grid; grid-template-columns:1fr 1fr; gap:0.7rem;">
                            <div>
                                <label style="font-size:0.7rem; color:var(--text-muted); text-transform:uppercase; letter-spacing:0.5px; font-weight:700;">Document Name</label>
                                <input type="text" class="ev-docname" data-control="${control.control_id}" placeholder="e.g., AUP-v3.2, IS Policy" value="${userState[control.control_id + '_ev_docname'] || ''}" style="width:100%; margin-top:0.3rem; padding:0.5rem 0.7rem; border-radius:6px; border:1px solid var(--border); background:rgba(0,217,255,0.03); color:var(--text-primary); font-size:0.85rem; font-family:inherit;">
                            </div>
                            <div>
                                <label style="font-size:0.7rem; color:var(--text-muted); text-transform:uppercase; letter-spacing:0.5px; font-weight:700;">Version / Date</label>
                                <input type="text" class="ev-version" data-control="${control.control_id}" placeholder="e.g., v2.1 / 2026-01" value="${userState[control.control_id + '_ev_version'] || ''}" style="width:100%; margin-top:0.3rem; padding:0.5rem 0.7rem; border-radius:6px; border:1px solid var(--border); background:rgba(0,217,255,0.03); color:var(--text-primary); font-size:0.85rem; font-family:inherit;">
                            </div>
                            <div>
                                <label style="font-size:0.7rem; color:var(--text-muted); text-transform:uppercase; letter-spacing:0.5px; font-weight:700;">Document Owner</label>
                                <input type="text" class="ev-owner" data-control="${control.control_id}" placeholder="e.g., CISO, IT Manager" value="${userState[control.control_id + '_ev_owner'] || ''}" style="width:100%; margin-top:0.3rem; padding:0.5rem 0.7rem; border-radius:6px; border:1px solid var(--border); background:rgba(0,217,255,0.03); color:var(--text-primary); font-size:0.85rem; font-family:inherit;">
                            </div>
                            <div>
                                <label style="font-size:0.7rem; color:var(--text-muted); text-transform:uppercase; letter-spacing:0.5px; font-weight:700;">Document Type</label>
                                <select class="ev-type" data-control="${control.control_id}" style="width:100%; margin-top:0.3rem; padding:0.5rem 0.7rem; border-radius:6px; border:1px solid var(--border); background:var(--bg-dark); color:var(--text-primary); font-size:0.85rem; font-family:inherit;">
                                    <option value="">Select type...</option>
                                    <option value="Policy" ${userState[control.control_id + '_ev_type'] === 'Policy' ? 'selected' : ''}>Policy</option>
                                    <option value="Procedure" ${userState[control.control_id + '_ev_type'] === 'Procedure' ? 'selected' : ''}>Procedure</option>
                                    <option value="Technical Config" ${userState[control.control_id + '_ev_type'] === 'Technical Config' ? 'selected' : ''}>Technical Config</option>
                                    <option value="Record" ${userState[control.control_id + '_ev_type'] === 'Record' ? 'selected' : ''}>Record / Log</option>
                                    <option value="Screenshot" ${userState[control.control_id + '_ev_type'] === 'Screenshot' ? 'selected' : ''}>Screenshot</option>
                                    <option value="Contract" ${userState[control.control_id + '_ev_type'] === 'Contract' ? 'selected' : ''}>Contract / Agreement</option>
                                </select>
                            </div>
                            <div style="grid-column:1/-1;">
                                <label style="font-size:0.7rem; color:var(--text-muted); text-transform:uppercase; letter-spacing:0.5px; font-weight:700;">Verification Status</label>
                                <div style="display:flex; gap:0.5rem; margin-top:0.4rem; flex-wrap:wrap;">
                                    ${['Self-Assessed','Internally Verified','Externally Audited'].map(s => `
                                        <button class="ev-status-btn" data-control="${control.control_id}" data-status="${s}" style="padding:0.35rem 0.8rem; border-radius:6px; font-size:0.75rem; font-weight:700; cursor:pointer; border:1px solid var(--border); background:${userState[control.control_id + '_ev_status'] === s ? 'rgba(0,217,255,0.15)' : 'rgba(255,255,255,0.03)'}; color:${userState[control.control_id + '_ev_status'] === s ? 'var(--accent-cyan)' : 'var(--text-muted)'}; border-color:${userState[control.control_id + '_ev_status'] === s ? 'var(--accent-cyan)' : 'var(--border)'}; transition:all 0.2s;">${s}</button>
                                    `).join('')}
                                </div>
                            </div>
                            <div style="grid-column:1/-1;">
                                <label style="font-size:0.7rem; color:var(--text-muted); text-transform:uppercase; letter-spacing:0.5px; font-weight:700;">Additional Notes / Reference Link</label>
                                <textarea class="evidence-notes-input" data-control="${control.control_id}" rows="2" style="width:100%; margin-top:0.3rem; border-radius:6px; padding:0.5rem 0.7rem; border:1px solid var(--border); background:rgba(0,217,255,0.03); color:var(--text-primary); font-family:inherit; font-size:0.85rem; resize:vertical;" placeholder="e.g., 'See Confluence /security/AUP' or Jira SEC-1234">${userState[control.control_id + '_notes'] || ''}</textarea>
                            </div>
                        </div>
                    </details>
                </div>
            `;

            const btns = card.querySelectorAll('.btn-option');
            btns.forEach(btn => {
                btn.addEventListener('click', (e) => {
                    const value = e.currentTarget.getAttribute('data-val');
                    if (value === 'maturity') {
                        // Toggle maturity panel visibility
                        const panel = document.getElementById(`maturity_panel_${control.control_id}`);
                        if (panel) panel.style.display = panel.style.display === 'none' ? 'block' : 'block';
                        // Don't save 'maturity' as a value — user must pick a level
                        btns.forEach(b => b.classList.remove('active'));
                        e.currentTarget.classList.add('active');
                        return;
                    }
                    saveAnswer(control.control_id, value, btns, card);
                });
            });

            // Maturity level buttons
            const maturityBtns = card.querySelectorAll('.maturity-btn');
            maturityBtns.forEach(mb => {
                mb.addEventListener('click', (e) => {
                    const mval = e.currentTarget.getAttribute('data-mval');
                    maturityBtns.forEach(b => b.classList.remove('active'));
                    e.currentTarget.classList.add('active');
                    // Set the main "Partial" button as active
                    btns.forEach(b => b.classList.remove('active'));
                    const partialBtn = card.querySelector('[data-val="maturity"]');
                    if (partialBtn) partialBtn.classList.add('active');
                    saveAnswer(control.control_id, mval, btns, card);
                });
            });

            const naInput = card.querySelector('.na-justification-input');
            if (naInput) {
                naInput.addEventListener('input', (e) => {
                    userState[control.control_id + '_just'] = e.target.value;
                    persistState();
                });
            }

            // Evidence notes handler
            const notesInput = card.querySelector('.evidence-notes-input');
            if (notesInput) {
                notesInput.addEventListener('input', (e) => {
                    userState[control.control_id + '_notes'] = e.target.value;
                    persistState();
                });
            }

            // [4] Structured Evidence field handlers
            ['ev-docname','ev-version','ev-owner'].forEach(cls => {
                const input = card.querySelector('.' + cls);
                if (input) {
                    input.addEventListener('input', (e) => {
                        userState[control.control_id + '_' + cls.replace('-','_')] = e.target.value;
                        persistState();
                    });
                }
            });
            const evType = card.querySelector('.ev-type');
            if (evType) {
                evType.addEventListener('change', (e) => {
                    userState[control.control_id + '_ev_type'] = e.target.value;
                    persistState();
                });
            }
            card.querySelectorAll('.ev-status-btn').forEach(btn => {
                btn.addEventListener('click', () => {
                    const status = btn.getAttribute('data-status');
                    userState[control.control_id + '_ev_status'] = status;
                    persistState();
                    // Update visual state
                    card.querySelectorAll('.ev-status-btn').forEach(b => {
                        const active = b.getAttribute('data-status') === status;
                        b.style.background = active ? 'rgba(0,217,255,0.15)' : 'rgba(255,255,255,0.03)';
                        b.style.color = active ? 'var(--accent-cyan)' : 'var(--text-muted)';
                        b.style.borderColor = active ? 'var(--accent-cyan)' : 'var(--border)';
                    });
                });
            });

            // [11] Wizard Mode Navigation
            if (wizardMode) {
                const wizNav = document.createElement('div');
                wizNav.style.cssText = 'display:flex; justify-content:space-between; margin-top:2rem; padding-top:1.5rem; border-top:1px solid var(--border); gap:1rem;';
                
                const btnPrev = document.createElement('button');
                btnPrev.innerHTML = '<i class="fas fa-arrow-left"></i> Previous';
                btnPrev.disabled = (idx === 0);
                btnPrev.style.cssText = `flex:1; padding:0.8rem; border-radius:10px; border:1px solid var(--border); background:rgba(255,255,255,0.03); color:${idx===0?'#444':'#fff'}; cursor:${idx===0?'default':'pointer'}; font-weight:700; font-size:0.85rem;`;
                btnPrev.addEventListener('click', () => {
                    if (idx > 0) {
                        currentControlIndex--;
                        renderDomain(globalIndex);
                        const vp = document.getElementById('assessmentViewport');
                        const offset = vp ? (vp.getBoundingClientRect().top + window.scrollY - 100) : 0;
                        window.scrollTo({ top: offset, behavior: 'smooth' });
                    }
                });

                const btnNext = document.createElement('button');
                const isLast = (idx === domain.controls.length - 1);
                btnNext.innerHTML = isLast ? 'Next Domain <i class="fas fa-forward"></i>' : 'Next Control <i class="fas fa-arrow-right"></i>';
                btnNext.style.cssText = `flex:2; padding:0.8rem; border-radius:10px; border:none; background:var(--accent-cyan); color:#000; cursor:pointer; font-weight:800; font-size:0.85rem; box-shadow:0 0 15px rgba(0,217,255,0.3);`;
                btnNext.addEventListener('click', () => {
                    if (!isLast) {
                        currentControlIndex++;
                        renderDomain(globalIndex);
                        const vp = document.getElementById('assessmentViewport');
                        const offset = vp ? (vp.getBoundingClientRect().top + window.scrollY - 100) : 0;
                        window.scrollTo({ top: offset, behavior: 'smooth' });
                    } else {
                        if (ui.btnNextDomain && ui.btnNextDomain.style.display !== 'none') {
                            ui.btnNextDomain.click();
                        }
                    }
                });

                wizNav.appendChild(btnPrev);
                wizNav.appendChild(btnNext);
                card.appendChild(wizNav);
            } else {
                // Add "Next Control" button at bottom of card (Original Scroll Mode)
                const nextBtn = document.createElement('button');
                nextBtn.className = 'btn-next-control';
                nextBtn.innerHTML = 'Next Control <i class="fas fa-chevron-down"></i>';
                nextBtn.style.cssText = `
                    margin-top: 1.5rem; background: transparent; border: 1px solid var(--border);
                    color: var(--text-muted); padding: 0.6rem 1.2rem; border-radius: 6px;
                    font-size: 0.8rem; cursor: pointer; transition: all 0.2s; width: 100%;
                    display: flex; align-items: center; justify-content: center; gap: 8px;
                `;
                nextBtn.addEventListener('click', () => {
                    let nextSibling = card.nextElementSibling;
                    while (nextSibling && !nextSibling.classList.contains('control-card')) {
                        nextSibling = nextSibling.nextElementSibling;
                    }
                    if (nextSibling) {
                        const offset = nextSibling.getBoundingClientRect().top + window.scrollY - 150;
                        window.scrollTo({ top: offset, behavior: 'smooth' });
                    } else {
                        if (ui.btnNextDomain && ui.btnNextDomain.style.display !== 'none') {
                            ui.btnNextDomain.click();
                        }
                    }
                });
                if (idx < domain.controls.length - 1) {
                    card.appendChild(nextBtn);
                }
            }

            // Reflow for transition
            void card.offsetWidth;
            card.style.opacity = '1';
            
            // [FIX] Restore missing append to viewport
            ui.viewport.appendChild(card);
        });

        // [11] Sidebar Wizard Progress Strip
        if (wizardMode) {
            const strip = document.createElement('div');
            strip.id = 'wizardProgressStrip';
            strip.style.cssText = 'margin-top:1.5rem; display:flex; flex-wrap:wrap; gap:5px; padding:1rem; background:rgba(255,255,255,0.02); border-radius:12px; border:1px solid var(--border);';
            domain.controls.forEach((c, i) => {
                const dot = document.createElement('div');
                const isAnswered = !!userState[c.control_id];
                const isActive = (i === currentControlIndex);
                dot.style.cssText = `width:8px; height:8px; border-radius:50%; background:${isActive ? 'var(--accent-cyan)' : (isAnswered ? '#10B981' : '#333')}; cursor:pointer; border:${isActive ? '2px solid #fff' : 'none'}; box-shadow:${isActive ? '0 0 10px var(--accent-cyan)' : 'none'};`;
                dot.title = c.control_title;
                dot.addEventListener('click', () => {
                    currentControlIndex = i;
                    renderDomain(globalIndex);
                });
                strip.appendChild(dot);
            });
            ui.viewport.appendChild(strip);
        }

        updateDomainProgress(domain);
        updateSidebarActiveState();
    }

    function saveAnswer(controlId, value, allButtonsInGroup, cardEl) {
        // For non-maturity answers, clear maturity panel highlighting
        if (!['adhoc','repeatable','defined','managed','optimized'].includes(value)) {
            allButtonsInGroup.forEach(b => b.classList.remove('active'));
            const clickedBtn = Array.from(allButtonsInGroup).find(b => b.getAttribute('data-val') === value);
            if (clickedBtn) clickedBtn.classList.add('active');
        }

        userState[controlId] = value;
        
        const naContainer = document.getElementById(`na_container_${controlId}`);
        if (naContainer) {
            naContainer.style.display = value === 'na' ? 'block' : 'none';
        }

        // Show/hide maturity panel
        const maturityPanel = document.getElementById(`maturity_panel_${controlId}`);
        if (maturityPanel) {
            const isMaturityVal = ['adhoc','repeatable','defined','managed','optimized'].includes(value);
            maturityPanel.style.display = isMaturityVal ? 'block' : 'none';
            // If user clicks Yes or No, hide the maturity panel
            if (value === 'yes' || value === 'no' || value === 'na') {
                maturityPanel.style.display = 'none';
                // Clear maturity button highlights
                if (cardEl) cardEl.querySelectorAll('.maturity-btn').forEach(b => b.classList.remove('active'));
            }
        }

        persistState();
        updateURLState(); // Sync to URL on every answer

        const domain = grcData.domains[activeDomainIndices[currentNavIndex]];
        updateDomainProgress(domain);
        renderSidebarNav();
        updateOverallScore();

        const completed = domain.controls.filter(c => userState[c.control_id]).length;
        
        // Auto-advance logic [11]
        if (wizardMode) {
            setTimeout(() => {
                if (currentControlIndex < domain.controls.length - 1) {
                    currentControlIndex++;
                    renderDomain(activeDomainIndices[currentNavIndex]);
                    const vp = document.getElementById('assessmentViewport');
                    const offset = vp ? (vp.getBoundingClientRect().top + window.scrollY - 100) : 0;
                    window.scrollTo({ top: offset, behavior: 'smooth' });
                } else {
                    // Domain complete in wizard mode
                    renderDomain(activeDomainIndices[currentNavIndex]); // Refresh UI for the last card
                }
            }, 600);
        } else {
            // Auto-advance to next question after answering (Scroll Mode)
            setTimeout(() => {
                const currentCard = document.querySelector(`.control-card[data-id="${controlId}"]`);
                if (currentCard) {
                    const nextCard = currentCard.nextElementSibling;
                    if (nextCard && nextCard.classList.contains('control-card')) {
                        const offset = nextCard.getBoundingClientRect().top + window.scrollY - 150;
                        window.scrollTo({ top: offset, behavior: 'smooth' });
                    }
                }
            }, 400);
        }

        if (completed === domain.controls.length && currentNavIndex < activeDomainIndices.length - 1) {
            setTimeout(() => {
                if (ui.btnNextDomain && ui.btnNextDomain.style.display !== 'none') {
                    ui.btnNextDomain.scrollIntoView({ behavior: 'smooth', block: 'center' });
                    ui.btnNextDomain.style.boxShadow = '0 0 20px rgba(0, 217, 255, 0.4)';
                    setTimeout(() => ui.btnNextDomain.style.boxShadow = 'none', 1000);
                }
            }, 200);
        } else if (completed === domain.controls.length && currentNavIndex === activeDomainIndices.length - 1) {
            setTimeout(() => {
                if (ui.btnFinishDashboard && ui.btnFinishDashboard.style.display !== 'none') {
                    ui.btnFinishDashboard.scrollIntoView({ behavior: 'smooth', block: 'center' });
                    ui.btnFinishDashboard.style.boxShadow = '0 0 20px rgba(16, 185, 129, 0.4)';
                    setTimeout(() => ui.btnFinishDashboard.style.boxShadow = 'none', 1000);
                }
            }, 200);
        }
    }

    function updateDomainProgress(domain) {
        const total = domain.controls.length;
        const completed = domain.controls.filter(c => {
            const v = userState[c.control_id];
            return v && MATURITY_LEVELS[v] !== undefined;
        }).length;
        const pct = Math.round((completed / total) * 100);
        ui.progressText.innerText = `${completed} / ${total} Completed`;
        ui.progressBar.style.width = `${pct}%`;
    }

    function updateOverallScore() {
        let earnedImpact = 0;
        let totalPossibleImpact = 0;
        // [8] Full Scope denominator (unanswered controls count as 0)
        let fullScopeTotalImpact = 0;

        // NIST Accumulators (6 functions for CSF 2.0)
        const nistStats = {};
        Object.keys(NIST_FUNCTIONS).forEach(f => nistStats[f] = { earned: 0, possible: 0 });

        // CIS Accumulators
        let cisEarnedImpact = 0;
        let cisTotalPossibleImpact = 0;
        let gdprEarnedImpact = 0;
        let gdprTotalPossibleImpact = 0;
        let soc2EarnedImpact = 0;
        let soc2TotalPossibleImpact = 0;

        // Flatten all controls in scope for iteration
        const allControls = [];
        activeDomainIndices.forEach(idx => allControls.push(...grcData.domains[idx].controls));

        // [8] Full scope denominator: every selected control counts
        allControls.forEach(c => {
            const ans = userState[c.control_id];
            if (ans !== 'na') fullScopeTotalImpact += (c.risk_impact || 5);
        });

        Object.keys(userState).forEach(controlId => {
            if (controlId.startsWith('_')) return;
            const status = userState[controlId];
            if (status === 'na') return;

            const control = allControls.find(c => c.control_id === controlId);
            if (!control) return;

            const impact = control.risk_impact || 5;

            // 1. ISO Score (Scoped — only answered controls in denominator)
            earnedImpact += (impact * getMultiplier(status));
            totalPossibleImpact += impact;

            // 2. NIST Score (Outcome-focused - Managed processes worth 0.75x)
            if (control.nist_mapping) {
                const func = control.nist_mapping.split('.')[0];
                if (nistStats[func]) {
                    nistStats[func].earned += (impact * NIST_MULTIPLIERS[status]);
                    nistStats[func].possible += impact;
                }
            }

            // 3. CIS Score (Technical-Rigor - Managed processes worth only 0.40x)
            if (control.cis_mapping) {
                cisEarnedImpact += (impact * CIS_MULTIPLIERS[status]);
                cisTotalPossibleImpact += impact;
            }
            if (control.gdpr_mapping) {
                gdprEarnedImpact += (impact * getMultiplier(status));
                gdprTotalPossibleImpact += impact;
            }
            if (control.soc2_mapping) {
                soc2EarnedImpact += (impact * getMultiplier(status));
                soc2TotalPossibleImpact += impact;
            }
        });

        // --- Final ISO 27001 Scores ([8] Dual Scoring) ---
        // Scoped Score: only answered controls in denominator
        const scopedScore = totalPossibleImpact > 0 ? Math.round((earnedImpact / totalPossibleImpact) * 100) : 0;
        // Full Scope Score: all selected controls in denominator (unanswered = 0)
        const fullScopeScore = fullScopeTotalImpact > 0 ? Math.round((earnedImpact / fullScopeTotalImpact) * 100) : 0;
        // Primary displayed score is Full Scope
        const finalScore = fullScopeScore;
        
        // --- Independent NIST CSF 2.0 Calculation ---
        // Calculating outcome-focused readiness (Avg functional % benchmarked vs framework target)
        let nistScoresCount = 0;
        let nistTotalPercent = 0;
        Object.keys(nistStats).forEach(f => {
            if (nistStats[f].possible > 0) {
                nistTotalPercent += (nistStats[f].earned / nistStats[f].possible);
                nistScoresCount++;
            }
        });
        
        // Final NIST Alignment = (Mean Functional Readiness) * (Mapping Depth 93/106) * (Alignment Strength 0.95)
        const meanNistReadiness = nistScoresCount > 0 ? (nistTotalPercent / nistScoresCount) : 0;
        const nistBenchmark = meanNistReadiness * (93 / NIST_SUB_TOTAL) * NIST_MAPPING_STRENGTH;
        const finalNist = Math.round(nistBenchmark * 100);

        // --- Independent CIS Controls v8 Calculation ---
        // Calculating technical-rigor (Weighted Earned vs Applicable, benchmarked vs CIS 153)
        const rawCisReadiness = cisTotalPossibleImpact > 0 ? (cisEarnedImpact / cisTotalPossibleImpact) : 0;
        // Final CIS Readiness = (Technical Safeguard Coverage) * (Mapping Depth 93/153) * (Alignment Strength 0.85)
        const cisBenchmark = rawCisReadiness * (93 / CIS_SAFEGUARD_TOTAL) * CIS_MAPPING_STRENGTH;
        const finalCis = Math.round(cisBenchmark * 100);

        const finalGdpr = gdprTotalPossibleImpact > 0 ? Math.round((gdprEarnedImpact / gdprTotalPossibleImpact) * 100) : 0;
        const finalSoc2 = soc2TotalPossibleImpact > 0 ? Math.round((soc2EarnedImpact / soc2TotalPossibleImpact) * 100) : 0;

        // Update Global UI
        if (ui.overallScore) ui.overallScore.innerText = `${finalScore}%`;
        const sideNist = document.getElementById('sideNistScore');
        const sideCis = document.getElementById('sideCisScore');
        if (sideNist) sideNist.innerText = `${finalNist}%`;
        if (sideCis) sideCis.innerText = `${finalCis}%`;

        // Save to global state
        window.grcSessionScore = finalScore;
        window.grcScopedScore = scopedScore;  // [8]
        window.grcFullScopeScore = fullScopeScore;  // [8]
        window.grcNistScore = finalNist;
        window.grcCisScore = finalCis;
        window.grcGdprScore = finalGdpr;
        window.grcSoc2Score = finalSoc2;

        // Visual feedback
        if (finalScore >= 85) ui.overallScore.style.color = '#10B981';
        else if (finalScore >= 50) ui.overallScore.style.color = '#F59E0B';
        else ui.overallScore.style.color = '#EF4444';

        // Button logic
        const answeredControls = Object.keys(userState).filter(k => !k.startsWith('_') && !k.endsWith('_just') && !k.endsWith('_notes')).length;
        const totalControls = allControls.length;

        if (answeredControls > 0) {
            ui.btnExportDraft.removeAttribute('disabled');
            if (ui.btnPartialDashboard) ui.btnPartialDashboard.removeAttribute('disabled');
            
            // Finish button appears when EVERYTHING in the active scope is answered
            if (answeredControls === totalControls && totalControls > 0) {
                ui.btnFinishDashboard.style.display = 'inline-block';
                ui.btnFinishDashboard.innerHTML = 'Complete Assessment: Generate Dashboard <i class="fas fa-flag-checkered"></i>';
                ui.btnFinishDashboard.style.padding = '1rem 2rem';
                ui.btnFinishDashboard.style.borderRadius = '30px';
                ui.btnFinishDashboard.style.backgroundColor = '#10B981';
                ui.btnFinishDashboard.style.color = '#000';
            } else {
                ui.btnFinishDashboard.style.display = 'none';
            }
        } else {
            ui.btnExportDraft.setAttribute('disabled', 'true');
            if (ui.btnPartialDashboard) ui.btnPartialDashboard.setAttribute('disabled', 'true');
            ui.btnFinishDashboard.style.display = 'none';
        }

        // Next Domain Button Visibility
        if (activeDomainIndices.length > 0) {
            const currentDomainObj = grcData.domains[activeDomainIndices[currentNavIndex]];
            const answeredInCurrentDomain = currentDomainObj.controls.filter(c => userState[c.control_id]).length;
            
            // Show "Next Domain" once the current one is 100% complete, IF there's a next one
            if (answeredInCurrentDomain === currentDomainObj.controls.length && currentNavIndex < activeDomainIndices.length - 1) {
                ui.btnNextDomain.style.display = 'block';
            } else {
                ui.btnNextDomain.style.display = 'none';
            }
        }
    }

    function updateSidebarActiveState() {
        const items = ui.domainNav.querySelectorAll('.nav-item');
        items.forEach((item, idx) => {
            if (idx === currentNavIndex) item.classList.add('active');
            else item.classList.remove('active');
        });
        // [14] Pulse the score displays on update
        const scoreEl = document.getElementById('overallScore');
        if (scoreEl) {
            scoreEl.style.transition = 'transform 0.15s ease, opacity 0.15s ease';
            scoreEl.style.transform = 'scale(1.15)';
            scoreEl.style.opacity = '0.8';
            setTimeout(() => { scoreEl.style.transform = 'scale(1)'; scoreEl.style.opacity = '1'; }, 200);
        }
    }

    // ==========================================
    // PHASE 3: DASHBOARD GENERATION
    // ==========================================

    ui.btnFinishDashboard.addEventListener('click', () => {
        ui.viewEngine.style.display = 'none';
        ui.viewEngine.classList.remove('active');

        ui.viewDashboard.style.display = 'flex';
        setTimeout(() => { ui.viewDashboard.classList.add('active'); }, 50);

        window.scrollTo({ top: 0, behavior: 'instant' });
        generateDashboard();
    });

    // Reset Engine Logic
    if (ui.btnResetEngine) {
        ui.btnResetEngine.addEventListener('click', () => {
            if (ui.resetModal) ui.resetModal.style.display = 'flex';
        });
    }

    if (ui.btnConfirmReset) {
        ui.btnConfirmReset.addEventListener('click', () => {
            localStorage.removeItem(STORAGE_KEY);
            // Also clear the URL state for a true clean start
            const url = new URL(window.location);
            url.searchParams.delete('s');
            window.history.replaceState({}, '', url);
            
            // Reload to start fresh
            location.reload();
        });
    }

    if (ui.btnPartialDashboard) {
        ui.btnPartialDashboard.addEventListener('click', () => {
            ui.viewEngine.style.display = 'none';
            ui.viewEngine.classList.remove('active');

            ui.viewDashboard.style.display = 'flex';
            setTimeout(() => { ui.viewDashboard.classList.add('active'); }, 50);

            generateDashboard();
        });
    }

    ui.btnBackToEngine.addEventListener('click', () => {
        ui.viewDashboard.style.display = 'none';
        ui.viewDashboard.classList.remove('active');

        ui.viewEngine.style.display = 'flex';
        setTimeout(() => { ui.viewEngine.classList.add('active'); }, 50);
    });

    function generateDashboard() {
        ui.dashDate.innerText = `Generated on: ${new Date().toLocaleDateString()}`;

        // [12] Score odometer animation
        const finalScoreNum = parseInt(ui.overallScore.innerText.replace('%', '')) || 0;
        const scoreColor = ui.overallScore.style.color;
        ui.dashOverallScore.style.color = scoreColor;
        ui.dashOverallScore.style.borderColor = scoreColor;
        let currentCount = 0;
        const step = Math.max(1, Math.round(finalScoreNum / 40));
        const raf = () => {
            currentCount = Math.min(currentCount + step, finalScoreNum);
            ui.dashOverallScore.innerText = currentCount + '%';
            if (currentCount < finalScoreNum) requestAnimationFrame(raf);
        };
        requestAnimationFrame(raf);

        // --- Update Badge Preview ---
        const badgeFill = document.getElementById('badgeFill');
        const badgeScore = document.getElementById('badgeScoreValue');
        const embedCode = document.getElementById('grcEmbedCode');
        const currentScore = ui.overallScore.innerText;
        
        if (badgeScore) badgeScore.innerText = currentScore;
        if (badgeFill) {
            badgeFill.style.borderColor = ui.overallScore.style.color;
        }
        if (embedCode) {
            const cleanScore = currentScore.replace('%', '');
            const embedUrl = `https://thehgtech.com/embed/grc-badge.html?score=${cleanScore}`;
            embedCode.innerText = `<iframe src="${embedUrl}" width="280" height="180" frameborder="0"></iframe>`;
        }

        // --- Authority: Save to History ---
        saveToHistory(parseInt(ui.overallScore.innerText.replace('%', '')));
        initHistoryUI(); // Refresh top strip
        renderTrendChart(); // [7] Trend line chart

        const labels = [];
        const datasetISO = [];
        const datasetNIST = [];
        const datasetCIS = [];
        const criticalGaps = [];

        activeDomainIndices.forEach(idx => {
            const d = grcData.domains[idx];
            labels.push(d.name.replace(' Controls', '').replace(' Management System Requirements', 'Clauses 4–10'));
            
            let earnedISO = 0, totalISO = 0;
            let earnedNIST = 0, totalNIST = 0;
            let earnedCIS = 0, totalCIS = 0;

            d.controls.forEach(c => {
                const ans = userState[c.control_id];
                if (ans && ans !== 'na') {
                    const impact = c.risk_impact || 5;
                    const multISO = getMultiplier(ans);
                    const multNIST = NIST_MULTIPLIERS[ans] || 0;
                    const multCIS = CIS_MULTIPLIERS[ans] || 0;

                    earnedISO += (impact * multISO);
                    totalISO += impact;
                    earnedNIST += (impact * multNIST);
                    totalNIST += impact;
                    earnedCIS += (impact * multCIS);
                    totalCIS += impact;

                    // Identify critical gaps (anything not fully implemented or N/A)
                    if (ans !== 'yes' && ans !== 'optimized') {
                        const matLevel = MATURITY_LEVELS[ans];
                        criticalGaps.push({
                            id: c.control_id,
                            title: c.control_title,
                            domain: d.name,
                            isMandatoryDomain: d.isMandatory === true,
                            criticality: c.criticality || 'Medium',
                            ans: ans,
                            maturityLabel: matLevel ? matLevel.label : ans,
                            multiplier: getMultiplier(ans),
                            remediation: c.remediation_advice || "Review control requirements to implement baseline security.",
                            nist: c.nist_mapping,
                            cis: c.cis_mapping,
                            rationale: c.expert_rationale
                        });
                    }
                }
            });
            datasetISO.push(totalISO === 0 ? 0 : Math.round((earnedISO / totalISO) * 100));
            datasetNIST.push(totalNIST === 0 ? 0 : Math.round((earnedNIST / totalNIST) * (93 / 106) * 0.95 * 100));
            datasetCIS.push(totalCIS === 0 ? 0 : Math.round((earnedCIS / totalCIS) * (93 / 153) * 0.85 * 100));
        });

        // 0. Update Framework Scores from Global State
        const nistScoreEl = document.getElementById('nistScore');
        const cisScoreEl = document.getElementById('cisScore');
        if (nistScoreEl) nistScoreEl.innerText = `${window.grcNistScore || 0}%`;
        if (cisScoreEl) cisScoreEl.innerText = `${window.grcCisScore || 0}%`;

        // [8] Show dual scores on dashboard
        const dualScoreEl = document.getElementById('dualScorePanel');
        if (dualScoreEl) {
            const scopedVal = window.grcScopedScore || 0;
            const fullVal = window.grcFullScopeScore || 0;
            dualScoreEl.innerHTML = `
                <div style="display:flex; gap:1.5rem; flex-wrap:wrap; align-items:center; padding:1rem 1.5rem; background:rgba(255,255,255,0.03); border:1px solid var(--border); border-radius:12px; margin-bottom:1.5rem; font-size:0.85rem;">
                    <i class="fas fa-calculator" style="color:var(--accent-cyan);"></i>
                    <div><span style="color:var(--text-muted);">Full Scope Score (primary):</span> <strong style="color:${fullVal>=75?'#10B981':fullVal>=40?'#F59E0B':'#EF4444'}; font-size:1.1rem;">${fullVal}%</strong> <span style="color:var(--text-muted); font-size:0.75rem;">(all selected controls in denominator)</span></div>
                    <div style="border-left:1px solid var(--border); padding-left:1.5rem;"><span style="color:var(--text-muted);">Scoped Score (answered only):</span> <strong style="color:var(--text-primary);">${scopedVal}%</strong></div>
                    <div style="border-left:1px solid var(--border); padding-left:1.5rem;"><span style="color:var(--text-muted);">GDPR Readiness:</span> <strong style="color:#8B5CF6;">${window.grcGdprScore || 0}%</strong></div>
                    <div style="border-left:1px solid var(--border); padding-left:1.5rem;"><span style="color:var(--text-muted);">SOC 2 Compliance:</span> <strong style="color:#EC4899;">${window.grcSoc2Score || 0}%</strong></div>
                </div>
            `;
        }

        // [1] Clause failure banner — check domain_0 controls below 'defined' level
        const domain0 = grcData.domains.find(d => d.id === 'domain_0');
        let clauseFailures = [];
        if (domain0) {
            domain0.controls.forEach(c => {
                const ans = userState[c.control_id];
                // Anything below 'defined' (multiplier < 0.6) or unanswered = clause gap
                const mult = ans ? getMultiplier(ans) : -1;
                if (!ans || (ans !== 'na' && mult < 0.6)) {
                    clauseFailures.push(c.control_title);
                }
            });
        }
        const clauseBannerEl = document.getElementById('clauseFailureBanner');
        if (clauseBannerEl) {
            if (clauseFailures.length > 0) {
                clauseBannerEl.style.display = 'block';
                clauseBannerEl.innerHTML = `
                    <div style="background:linear-gradient(135deg, rgba(239,68,68,0.15), rgba(239,68,68,0.05)); border:2px solid rgba(239,68,68,0.5); border-radius:16px; padding:1.5rem 2rem; margin-bottom:2rem; display:flex; align-items:flex-start; gap:1.5rem;">
                        <div style="font-size:2rem; line-height:1;">🚨</div>
                        <div>
                            <div style="font-size:0.7rem; font-weight:800; color:#EF4444; text-transform:uppercase; letter-spacing:2px; margin-bottom:0.5rem;">MAJOR GAP: Certification is Blocked</div>
                            <div style="font-weight:700; color:#fff; font-size:1.05rem; margin-bottom:0.5rem;">ISO 27001 Clause gaps must be resolved before Stage 1 audit</div>
                            <div style="color:var(--text-muted); font-size:0.85rem; line-height:1.6;">The following mandatory ISMS clauses are below the minimum <strong style="color:#F59E0B;">Defined</strong> maturity threshold required for certification: <strong style="color:#EF4444;">${clauseFailures.slice(0,3).join(', ')}${clauseFailures.length > 3 ? ` +${clauseFailures.length-3} more` : ''}</strong>. Resolve these before attempting an external audit.</div>
                        </div>
                    </div>
                `;
            } else {
                clauseBannerEl.style.display = 'none';
            }
        }

        // [9] Certification Readiness Verdict panel
        const verdictEl = document.getElementById('certReadinessVerdict');
        if (verdictEl) {
            // MNCs: High-criticality controls at 'no' (multiplier 0)
            const mncs = criticalGaps.filter(g => g.criticality === 'High' && g.multiplier === 0);
            // Minor NCs: High-criticality at adhoc (0.2) or repeatable (0.4)
            const minorNCs = criticalGaps.filter(g => g.criticality === 'High' && g.multiplier > 0 && g.multiplier <= 0.4);
            // Observations: Defined/Managed controls needing uplift
            const observations = criticalGaps.filter(g => g.multiplier > 0.4 && g.multiplier < 1.0);

            let verdictText, verdictColor, verdictIcon;
            if (mncs.length === 0 && minorNCs.length === 0) {
                verdictText = 'STAGE 1 READY'; verdictColor = '#10B981'; verdictIcon = 'fa-check-circle';
            } else if (mncs.length === 0 && minorNCs.length <= 3) {
                verdictText = 'BORDERLINE — Resolve Minor NCs First'; verdictColor = '#F59E0B'; verdictIcon = 'fa-exclamation-triangle';
            } else {
                verdictText = 'NOT READY FOR STAGE 1 AUDIT'; verdictColor = '#EF4444'; verdictIcon = 'fa-times-circle';
            }

            verdictEl.innerHTML = `
                <div style="padding:2rem; background:rgba(255,255,255,0.02); border:1px solid var(--border); border-radius:20px; margin-bottom:3rem;">
                    <h3 style="font-family:'Outfit'; font-size:1.4rem; margin:0 0 1.5rem; color:#fff; display:flex; align-items:center; gap:10px;"><i class="fas fa-certificate" style="color:var(--accent-cyan);"></i> Certification Readiness Verdict</h3>
                    <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(200px, 1fr)); gap:1rem; margin-bottom:1.5rem;">
                        <div style="background:rgba(239,68,68,0.07); border:1px solid rgba(239,68,68,0.25); border-radius:12px; padding:1.2rem; text-align:center;">
                            <div style="font-size:2.5rem; font-weight:800; color:#EF4444; font-family:'JetBrains Mono';">${mncs.length}</div>
                            <div style="font-size:0.7rem; font-weight:800; color:#EF4444; text-transform:uppercase; letter-spacing:1px; margin-top:4px;">🔴 Major Non-Conformities</div>
                            <div style="font-size:0.75rem; color:var(--text-muted); margin-top:6px;">High-criticality controls at 'Not Implemented' — auto-fail Stage 1</div>
                        </div>
                        <div style="background:rgba(245,158,11,0.07); border:1px solid rgba(245,158,11,0.25); border-radius:12px; padding:1.2rem; text-align:center;">
                            <div style="font-size:2.5rem; font-weight:800; color:#F59E0B; font-family:'JetBrains Mono';">${minorNCs.length}</div>
                            <div style="font-size:0.7rem; font-weight:800; color:#F59E0B; text-transform:uppercase; letter-spacing:1px; margin-top:4px;">🟡 Minor Non-Conformities</div>
                            <div style="font-size:0.75rem; color:var(--text-muted); margin-top:6px;">High-criticality controls at Ad Hoc or Repeatable maturity</div>
                        </div>
                        <div style="background:rgba(52,211,153,0.07); border:1px solid rgba(52,211,153,0.25); border-radius:12px; padding:1.2rem; text-align:center;">
                            <div style="font-size:2.5rem; font-weight:800; color:#34D399; font-family:'JetBrains Mono';">${observations.length}</div>
                            <div style="font-size:0.7rem; font-weight:800; color:#34D399; text-transform:uppercase; letter-spacing:1px; margin-top:4px;">🟢 Observations</div>
                            <div style="font-size:0.75rem; color:var(--text-muted); margin-top:6px;">Defined/Managed controls that need uplift to Optimized</div>
                        </div>
                    </div>
                    <div style="padding:1.2rem 1.5rem; background:rgba(0,0,0,0.2); border-radius:12px; border-left:5px solid ${verdictColor}; display:flex; align-items:center; gap:1rem;">
                        <i class="fas ${verdictIcon}" style="color:${verdictColor}; font-size:1.5rem;"></i>
                        <div>
                            <div style="font-weight:800; color:${verdictColor}; font-size:1rem; letter-spacing:0.5px;">${verdictText}</div>
                            <div style="font-size:0.8rem; color:var(--text-muted); margin-top:2px;">${mncs.length > 0 ? `Resolve ${mncs.length} MNC${mncs.length>1?'s':''} before scheduling external audit.` : minorNCs.length > 0 ? 'Address minor NCs to strengthen audit confidence.' : 'No blocking issues found. You may proceed to Stage 1.'}</div>
                        </div>
                    </div>
                </div>
            `;
        }

        // 2. Decision Engine: Maturity & Priority Actions
        const finalScoreVal = parseInt(ui.overallScore.innerText.replace('%', ''));
        let maturityLabel = "Initial / At Risk";
        let maturityColor = "#EF4444";
        let maturityDesc = "Critical security gaps detected. Significant exposure to breach and regulatory fines.";
        
        if (finalScoreVal >= 75) { 
            maturityLabel = "Mature / Optimized"; 
            maturityColor = "#10B981";
            maturityDesc = "Proactive posture. Controls are integrated and monitored for continuous improvement. You have achieved a baseline where internal processes are mostly self-correcting.";
        } else if (finalScoreVal >= 40) { 
            maturityLabel = "Developing / Moderate"; 
            maturityColor = "#F59E0B";
            maturityDesc = "Foundational controls are in place, but lack depth and consistent monitoring. Risk is managed reactively rather than through automated or continuous governance.";
        } else {
            maturityDesc = "Critical security gaps detected. Significant exposure to breach and regulatory fines. Core technical and organizational guardrails are either missing or loosely implemented.";
        }

        const maturityEl = document.getElementById('maturityLabel');
        const maturityDescSmall = document.getElementById('maturityDescSmall');
        const executiveMaturityDesc = document.getElementById('executiveMaturityDesc');

        if (maturityEl) {
            maturityEl.innerText = maturityLabel;
            maturityEl.style.color = maturityColor;
        }
        if (maturityDescSmall) maturityDescSmall.innerText = "Current Maturity Evaluation"; 
        if (executiveMaturityDesc) executiveMaturityDesc.innerText = maturityDesc;

        // Improvement Tracker (Comparison with last run)
        const lastScore = localStorage.getItem('thehgtech_grc_last_score');
        const scoreComparisonEl = document.getElementById('scoreComparison');
        if (scoreComparisonEl) {
            if (lastScore) {
                const diff = finalScoreVal - parseInt(lastScore);
                if (diff > 0) {
                    scoreComparisonEl.innerHTML = `<span style="color:#10B981;"><i class="fas fa-caret-up"></i> Up ${escapeHTMLBasic(diff)}%</span> vs last session`;
                } else if (diff < 0) {
                    scoreComparisonEl.innerHTML = `<span style="color:#EF4444;"><i class="fas fa-caret-down"></i> Down ${escapeHTMLBasic(Math.abs(diff))}%</span> vs last session`;
                } else {
                    scoreComparisonEl.innerHTML = `<span style="color:var(--text-muted);">Stable</span> vs last session`;
                }
            } else {
                scoreComparisonEl.innerHTML = "Initial Assessment Baseline established.";
            }
        }
        localStorage.setItem('thehgtech_grc_last_score', finalScoreVal);

        // Completion Metrics (Time & Scope)
        const startTime = userState._started || Date.now();
        const minsTaken = Math.max(2, Math.round((Date.now() - startTime) / 60000));
        const timeTakenEl = document.getElementById('timeTaken');
        if (timeTakenEl) timeTakenEl.innerText = `${minsTaken}m`;
        
        const scopeCoveredEl = document.getElementById('scopeCovered');
        if (scopeCoveredEl) scopeCoveredEl.innerText = `${activeDomainIndices.length} Domains`;

        // Extract Top 3 Priority Actions
        const priorityActions = criticalGaps
            .sort((a, b) => (a.multiplier || 0) - (b.multiplier || 0))
            .slice(0, 3);

        const priorityContainer = document.getElementById('priorityActionPlan');
        if (priorityContainer) {
            priorityContainer.innerHTML = '';
            if (priorityActions.length === 0) {
                priorityContainer.innerHTML = '<p style="color:var(--text-muted); font-style:italic;">Maintain current posture. No immediate critical fixes required.</p>';
            } else {
                priorityActions.forEach((act, i) => {
                    const riskParts = act.rationale && act.rationale.includes('|') ? act.rationale.split('|') : null;
                    const riskText = riskParts ? riskParts[0].replace('Risk:', '').trim() : "Direct exposure to control failure.";
                    const outcomes = [
                        "Dramatically reduces likelihood of successful exploitation.",
                        "Stabilizes foundational security posture for external audits.",
                        "Closes critical visibility gaps in infrastructure.",
                        "Strengthens identity boundary against unauthorized access."
                    ];
                    const expectedOutcome = outcomes[i % outcomes.length];
                    const effortLevel = (act.ans === 'no') ? 'High' : 'Medium';
                    const effortColor = effortLevel === 'High' ? '#EF4444' : '#F59E0B';

                    priorityContainer.innerHTML += `
                        <div class="priority-step" style="background:rgba(255,255,255,0.02); padding:1.5rem; border-radius:16px; border:1px solid rgba(255,255,255,0.05); position:relative; overflow:hidden;">
                            <div style="display:flex; justify-content:space-between; align-items:flex-start; margin-bottom:1rem;">
                                <div class="step-num" style="background:${maturityColor}; color:#000; width:28px; height:28px; border-radius:50%; display:flex; align-items:center; justify-content:center; font-weight:800; font-size:0.9rem;">${i+1}</div>
                                <span style="font-size:0.65rem; background:rgba(255,255,255,0.05); color:var(--text-muted); padding:3px 8px; border-radius:4px; border:1px solid var(--border);">Effort: <span style="color:${effortColor}">${effortLevel}</span></span>
                            </div>
                            <h4 style="margin:0 0 10px; color:#fff; font-size:1.05rem; font-family:'Outfit';">Fix Control ${act.id}</h4>
                            <p style="font-size:0.85rem; color:#fff; margin-bottom:12px; font-weight:600;">${act.title}</p>
                            <div style="display:flex; flex-direction:column; gap:8px;">
                                <div style="font-size:0.8rem; color:var(--text-muted);"><strong style="color:#EF4444; font-size:0.65rem; text-transform:uppercase; letter-spacing:0.5px; display:block; margin-bottom:2px;">Risk & Consequence:</strong>${riskText}</div>
                                <div style="font-size:0.8rem; color:var(--text-muted); border-top:1px solid rgba(255,255,255,0.03); padding-top:8px;"><strong style="color:#10B981; font-size:0.65rem; text-transform:uppercase; letter-spacing:0.5px; display:block; margin-bottom:2px;">Expected Outcome:</strong>${expectedOutcome}</div>
                            </div>
                        </div>
                    `;
                });
            }
        }

        // 1. Render Chart.js Radar
        const ctx = document.getElementById('radarChart').getContext('2d');
        if (radarChartInstance) radarChartInstance.destroy();

        radarChartInstance = new Chart(ctx, {
            type: 'radar',
            data: {
                labels: labels,
                datasets: [
                    {
                        label: 'ISO 27001 (Policy)',
                        data: datasetISO,
                        backgroundColor: 'rgba(139, 92, 246, 0.15)',
                        borderColor: '#8B5CF6',
                        borderWidth: 2,
                        fill: true
                    },
                    {
                        label: 'NIST CSF 2.0 (Outcome)',
                        data: datasetNIST,
                        backgroundColor: 'rgba(6, 182, 212, 0.15)',
                        borderColor: '#06B6D4',
                        borderWidth: 2,
                        fill: true
                    },
                    {
                        label: 'CIS Controls v8 (Technical)',
                        data: datasetCIS,
                        backgroundColor: 'rgba(245, 158, 11, 0.15)',
                        borderColor: '#F59E0B',
                        borderWidth: 2,
                        fill: true
                    },
                    {
                        // [12] Industry benchmark ghost ring — ISO 27001 Stage 1 target
                        label: 'Stage 1 Benchmark (70%)',
                        data: labels.map(() => 70),
                        backgroundColor: 'transparent',
                        borderColor: 'rgba(255,255,255,0.15)',
                        borderWidth: 1.5,
                        borderDash: [5, 5],
                        pointRadius: 0,
                        fill: false
                    }
                ]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    r: {
                        angleLines: { color: 'rgba(255, 255, 255, 0.1)' },
                        grid: { color: 'rgba(255, 255, 255, 0.1)' },
                        pointLabels: { color: '#9CA3AF', font: { size: 11, family: 'Inter' } },
                        ticks: { display: false, min: 0, max: 100 },
                        suggestedMax: 100
                    }
                },
                plugins: {
                    legend: {
                        display: true,
                        position: 'bottom',
                        labels: { color: '#fff', font: { size: 10, family: 'Inter' }, padding: 15 }
                    }
                }
            }
        });

        // [12] Dynamic framework divergence text
        const isoVal = window.grcFullScopeScore || 0;
        const nistVal = window.grcNistScore || 0;
        const cisVal = window.grcCisScore || 0;
        const divergenceEl = document.getElementById('frameworkDivergenceText');
        if (divergenceEl) {
            const isoCisGap = Math.abs(isoVal - cisVal);
            const isoNistGap = Math.abs(isoVal - nistVal);
            let divText;
            if (isoNistGap > 20) {
                divText = `Your ISO score (${isoVal}%) is ${isoVal > nistVal ? 'ahead of' : 'behind'} your NIST readiness (${nistVal}%). This ${isoVal > nistVal ? 'suggests strong policy docs but gaps in operational detection/response.' : 'indicates processes exist but formal ISMS documentation lags.'}`;
            } else if (isoCisGap > 25) {
                divText = `CIS technical enforcement (${cisVal}%) lags your governance posture (${isoVal}%). Prioritise technical hardening — MFA, endpoint controls, network segmentation.`;
            } else {
                divText = `Framework scores are broadly aligned (ISO: ${isoVal}%, NIST: ${nistVal}%, CIS: ${cisVal}%). Balanced maturity detected. Focus on resolving top non-conformities below.`;
            }
            divergenceEl.innerText = divText;
        }

        // 2. Render Gaps — with Top 3 Strongest Controls [12]
        ui.gapsContainer.innerHTML = '';

        // [12] Top 3 Strongest Controls (positive reinforcement)
        const strongControls = [];
        activeDomainIndices.forEach(idx => {
            const d = grcData.domains[idx];
            d.controls.forEach(c => {
                const ans = userState[c.control_id];
                if (ans === 'yes' || ans === 'optimized' || ans === 'managed') {
                    strongControls.push({ control: c, domain: d, ans });
                }
            });
        });
        strongControls.sort((a, b) => (b.control.risk_impact || 0) - (a.control.risk_impact || 0));
        const top3 = strongControls.slice(0, 3);
        if (top3.length > 0) {
            const strengthsDiv = document.createElement('div');
            strengthsDiv.style.cssText = 'margin-bottom:2rem; padding:1.2rem 1.5rem; background:rgba(16,185,129,0.04); border:1px solid rgba(16,185,129,0.2); border-radius:14px;';
            strengthsDiv.innerHTML = `
                <div style="font-size:0.7rem; font-weight:800; color:#10B981; text-transform:uppercase; letter-spacing:1.5px; margin-bottom:0.8rem;"><i class="fas fa-trophy"></i> Top 3 Strongest Controls</div>
                <div style="display:grid; grid-template-columns:repeat(auto-fit,minmax(220px,1fr)); gap:0.7rem;">
                    ${top3.map((s, i) => `
                        <div style="background:rgba(16,185,129,0.06); border:1px solid rgba(16,185,129,0.15); border-radius:10px; padding:0.8rem 1rem;">
                            <div style="font-size:0.65rem; color:#10B981; font-weight:800; margin-bottom:3px;">#${i+1} &mdash; Impact ${s.control.risk_impact || '?'}</div>
                            <div style="font-size:0.82rem; color:var(--text-primary); font-weight:600; line-height:1.4;">${s.control.control_title}</div>
                            <div style="font-size:0.7rem; color:var(--text-muted); margin-top:3px;">${MATURITY_LEVELS[s.ans]?.label || s.ans}</div>
                        </div>
                    `).join('')}
                </div>
            `;
            ui.gapsContainer.appendChild(strengthsDiv);
        }

        const gapsHeader = document.createElement('h3');
        gapsHeader.innerHTML = 'Critical Gaps &amp; Recommended Remediation';
        ui.gapsContainer.appendChild(gapsHeader);

        if (criticalGaps.length === 0) {
            const noneEl = document.createElement('div');
            noneEl.className = 'gap-item';
            noneEl.style.borderLeftColor = '#10B981';
            noneEl.innerHTML = '<p style="color:#10B981; margin:0;"><i class="fas fa-check-circle"></i> Outstanding! No critical gaps identified in the evaluated scope.</p>';
            ui.gapsContainer.appendChild(noneEl);
        } else {
            criticalGaps.sort((a,b) => (a.multiplier || 0) - (b.multiplier || 0));

            criticalGaps.forEach(g => {
                const item = document.createElement('div');
                item.className = 'gap-item';
                
                // Prioritization Logic based on maturity multiplier
                let priorityTag, outcome;
                const mult = g.multiplier || 0;
                const matLevelInfo = MATURITY_LEVELS[g.ans];
                const statusColor = matLevelInfo ? matLevelInfo.color : '#EF4444';
                const statusLabel = g.maturityLabel || g.ans;
                
                if (mult === 0) {
                    // Not implemented at all
                    priorityTag = '<span class="priority-tag" style="background:#EF4444; color:#fff; padding:2px 8px; border-radius:4px; font-size:0.7rem; font-weight:800; margin-right:8px;">HIGH PRIORITY</span>';
                    outcome = "Reduces critical vulnerability surface.";
                    if (g.id.startsWith('5.') || g.id.startsWith('8.5')) {
                        priorityTag = '<span class="priority-tag" style="background:#8B5CF6; color:#fff; padding:2px 8px; border-radius:4px; font-size:0.7rem; font-weight:800; margin-right:8px;">FOUNDATIONAL</span>';
                        outcome = "Establishes mandatory governance/identity boundary.";
                    }
                } else if (mult <= 0.4) {
                    // Ad Hoc or Repeatable — still high priority
                    item.style.borderLeftColor = '#F59E0B';
                    item.style.backgroundColor = 'rgba(245, 158, 11, 0.05)';
                    priorityTag = '<span class="priority-tag" style="background:#F59E0B; color:#000; padding:2px 8px; border-radius:4px; font-size:0.7rem; font-weight:800; margin-right:8px;">NEEDS FORMALIZATION</span>';
                    outcome = "Formalizing process reduces risk of inconsistent execution.";
                } else {
                    // Defined or Managed — quick win to reach Optimized
                    item.style.borderLeftColor = '#34D399';
                    item.style.backgroundColor = 'rgba(52, 211, 153, 0.03)';
                    priorityTag = '<span class="priority-tag" style="background:#34D399; color:#000; padding:2px 8px; border-radius:4px; font-size:0.7rem; font-weight:800; margin-right:8px;">QUICK WIN</span>';
                    outcome = "Hardens existing process to enterprise compliance standard.";
                }

                // Extract custom outcome from rationale if present
                if (g.rationale && g.rationale.includes('Impact:')) {
                    const parts = g.rationale.split('|');
                    const impactPart = parts.find(p => p.includes('Impact:'));
                    if (impactPart) outcome = impactPart.replace('Impact:', '').trim();
                } else if (g.rationale && g.rationale.includes('Guidance:')) {
                    const guidePart = g.rationale.split('Guidance:')[1];
                    if (guidePart) outcome = "Remediation expected to: " + guidePart.trim().split('.')[0] + ".";
                }

                item.innerHTML = `
                    <div class="gap-item-header">
                        <span class="gap-id">${priorityTag} <span style="color:var(--text-muted); font-size:0.8rem;">[${g.domain}]</span> Control ${g.id}</span>
                        <span class="domain-badge" style="border: 1px solid ${statusColor}; color:${statusColor}; padding:2px 8px; border-radius:4px; font-size:0.7rem; font-weight:600;">${statusLabel}</span>
                    </div>
                    <h4 class="gap-title">${g.title}</h4>
                    <div class="gap-mappings" style="display:flex; gap:8px; margin-bottom: 0.8rem;">
                        ${g.nist ? `<span style="font-size:0.7rem; background:rgba(10, 132, 255, 0.1); color:#0A84FF; padding:1px 6px; border-radius:3px; border:1px solid rgba(10,132,255,0.2);">NIST: ${g.nist}</span>` : ''}
                        ${g.cis ? `<span style="font-size:0.7rem; background:rgba(255, 159, 10, 0.1); color:#FF9F0A; padding:1px 6px; border-radius:3px; border:1px solid rgba(255,159,10,0.2);">CIS: ${g.cis}</span>` : ''}
                    </div>

                    <div class="gap-remediation" style="margin-bottom:0.5rem;">
                        <strong><i class="fas fa-wrench"></i> Suggested Remediation:</strong><br>
                        ${g.remediation}
                    </div>

                    <div class="outcome-label">
                        <i class="fas fa-bullseye"></i> Expected Outcome: ${outcome}
                    </div>
                    
                    ${userState[g.id + '_just'] ? `
                    <div class="gap-justification" style="margin: 1rem 0 0; padding: 0.8rem; background: rgba(255,255,255,0.03); border-radius: 6px; font-size: 0.85rem; border: 1px solid var(--border);">
                        <strong><i class="fas fa-comment-alt"></i> Your Comment/Justification:</strong><br>
                        <span style="color:var(--text-secondary); font-style:italic;">"${userState[g.id + '_just']}"</span>
                    </div>
                    ` : ''}
                `;
                // [10] Remediation Task Tracker row
                const remState = remediationState[g.id] || {};
                const remRow = document.createElement('div');
                remRow.style.cssText = 'margin-top:0.8rem; padding:0.8rem 1rem; background:rgba(255,255,255,0.02); border-radius:8px; border:1px solid var(--border); display:flex; gap:0.8rem; align-items:center; flex-wrap:wrap;';
                remRow.innerHTML = `
                    <i class="fas fa-tasks" style="color:var(--accent-cyan); font-size:0.85rem;"></i>
                    <input type="text" class="rem-owner" data-gid="${g.id}" placeholder="Assign owner..." value="${remState.owner||''}" style="flex:1; min-width:120px; padding:0.35rem 0.6rem; border-radius:5px; border:1px solid var(--border); background:var(--bg-dark); color:var(--text-primary); font-size:0.8rem; font-family:inherit;">
                    <input type="date" class="rem-due" data-gid="${g.id}" value="${remState.due||''}" style="padding:0.35rem 0.6rem; border-radius:5px; border:1px solid var(--border); background:var(--bg-dark); color:var(--text-primary); font-size:0.8rem; font-family:inherit;">
                    <label style="display:flex; align-items:center; gap:5px; cursor:pointer; font-size:0.8rem; color:var(--text-muted); white-space:nowrap;">
                        <input type="checkbox" class="rem-resolved" data-gid="${g.id}" ${remState.resolved?'checked':''} style="accent-color:var(--accent-green);">
                        <span style="color:${remState.resolved?'#10B981':'var(--text-muted)'};">Mark Resolved</span>
                    </label>
                `;
                item.appendChild(remRow);

                // Persist remediation state
                remRow.querySelector('.rem-owner').addEventListener('input', e => {
                    remediationState[g.id] = remediationState[g.id] || {};
                    remediationState[g.id].owner = e.target.value;
                    localStorage.setItem(REMEDIATION_KEY, JSON.stringify(remediationState));
                });
                remRow.querySelector('.rem-due').addEventListener('change', e => {
                    remediationState[g.id] = remediationState[g.id] || {};
                    remediationState[g.id].due = e.target.value;
                    localStorage.setItem(REMEDIATION_KEY, JSON.stringify(remediationState));
                });
                remRow.querySelector('.rem-resolved').addEventListener('change', e => {
                    remediationState[g.id] = remediationState[g.id] || {};
                    remediationState[g.id].resolved = e.target.checked;
                    localStorage.setItem(REMEDIATION_KEY, JSON.stringify(remediationState));
                    const lbl = remRow.querySelector('label span');
                    if (lbl) lbl.style.color = e.target.checked ? '#10B981' : 'var(--text-muted)';
                    updateRemediationProgressBar(criticalGaps);
                });

                ui.gapsContainer.appendChild(item);
            });
        }

        // [10] Remediation Progress Bar
        updateRemediationProgressBar(criticalGaps);

        // ==========================================
        // RISK HEATMAP (Feature #3)
        // ==========================================
        renderRiskHeatmap(criticalGaps);

        // ==========================================
        // COMPLIANCE TIMELINE (Feature #5)
        // ==========================================
        renderComplianceTimeline(criticalGaps);
    }

    // ==========================================
    // [10] REMEDIATION PROGRESS BAR HELPER
    // ==========================================
    function updateRemediationProgressBar(gaps) {
        const total = gaps.length;
        if (total === 0) return;
        const resolved = gaps.filter(g => remediationState[g.id] && remediationState[g.id].resolved).length;
        const pct = Math.round((resolved / total) * 100);
        let bar = document.getElementById('remediationProgressBar');
        if (!bar) {
            const section = document.getElementById('gapsContainer');
            if (!section) return;
            const wrapper = document.createElement('div');
            wrapper.id = 'remediationProgressWrapper';
            wrapper.style.cssText = 'margin-bottom:1.5rem; padding:1rem 1.5rem; background:rgba(16,185,129,0.05); border:1px solid rgba(16,185,129,0.2); border-radius:12px;';
            wrapper.innerHTML = `
                <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:0.5rem;">
                    <span style="font-size:0.8rem; font-weight:700; color:var(--accent-green);"><i class="fas fa-tasks"></i> Remediation Progress</span>
                    <span id="remediationProgressText" style="font-size:0.8rem; color:var(--text-muted);">${resolved} / ${total} resolved</span>
                </div>
                <div style="height:6px; background:rgba(255,255,255,0.05); border-radius:3px; overflow:hidden;">
                    <div id="remediationProgressBar" style="height:100%; width:${pct}%; background:linear-gradient(90deg,#10B981,#34D399); border-radius:3px; transition:width 0.4s ease;"></div>
                </div>
            `;
            const firstChild = section.querySelector('h3');
            if (firstChild && firstChild.nextSibling) {
                section.insertBefore(wrapper, firstChild.nextSibling);
            } else {
                section.appendChild(wrapper);
            }
            bar = document.getElementById('remediationProgressBar');
        }
        if (bar) bar.style.width = pct + '%';
        const txt = document.getElementById('remediationProgressText');
        if (txt) txt.innerText = resolved + ' / ' + total + ' resolved';
    }

    // ==========================================
    // [2] RISK REGISTER MODULE
    // ==========================================
    const TREATMENT_OPTIONS = ['', 'Mitigate', 'Accept', 'Transfer', 'Avoid'];
    const TREATMENT_COLORS = { 'Mitigate': '#10B981', 'Accept': '#F59E0B', 'Transfer': '#0A84FF', 'Avoid': '#EF4444' };

    function renderRiskRegister() {
        const tbody = document.getElementById('riskRegisterBody');
        if (!tbody) return;
        tbody.innerHTML = '';

        const allGaps = [];
        activeDomainIndices.forEach(idx => {
            const d = grcData.domains[idx];
            d.controls.forEach(c => {
                const ans = userState[c.control_id];
                if (!ans || ans === 'na' || ans === 'yes' || ans === 'optimized') return;
                allGaps.push({ control: c, domain: d, ans });
            });
        });
        allGaps.sort((a, b) => (b.control.risk_impact || 0) - (a.control.risk_impact || 0));

        if (allGaps.length === 0) {
            tbody.innerHTML = `<tr><td colspan="6" style="padding:2rem; text-align:center; color:var(--text-muted);">No active risks. All controls are implemented or N/A.</td></tr>`;
        } else {
            allGaps.forEach(({ control, domain, ans }, i) => {
                const rr = riskRegisterState[control.control_id] || {};
                const ml = MATURITY_LEVELS[ans];
                const impact = control.risk_impact || 5;
                const riskScore = Math.round(impact * (1 - (ml ? ml.multiplier : 0)));
                const riskColor = riskScore >= 8 ? '#EF4444' : riskScore >= 5 ? '#F59E0B' : '#34D399';
                const riskLabel = riskScore >= 8 ? 'Critical' : riskScore >= 5 ? 'High' : 'Medium';
                const treatment = rr.treatment || '';
                const tColor = TREATMENT_COLORS[treatment] || 'var(--text-muted)';

                const tr = document.createElement('tr');
                tr.style.cssText = 'border-bottom:1px solid rgba(255,255,255,0.04);' + (i % 2 ? 'background:rgba(255,255,255,0.01);' : '');
                tr.innerHTML = `
                    <td style="padding:0.9rem 1rem; white-space:nowrap;">
                        <span style="font-family:'JetBrains Mono'; font-size:0.75rem; color:var(--accent-cyan);">A.${control.control_id}</span><br>
                        <span style="font-size:0.7rem; color:var(--text-muted);">${domain.name.split(' ')[0]}</span>
                    </td>
                    <td style="padding:0.9rem 1rem; color:var(--text-primary); font-size:0.85rem; line-height:1.4;">${control.control_title}</td>
                    <td style="padding:0.9rem 1rem; text-align:center;">
                        <span style="font-size:1.3rem; font-weight:800; color:${riskColor}; font-family:'JetBrains Mono';">${riskScore}</span><br>
                        <span style="font-size:0.65rem; color:${riskColor}; font-weight:700; text-transform:uppercase;">${riskLabel}</span>
                    </td>
                    <td style="padding:0.9rem 1rem; text-align:center;">
                        <span style="font-size:0.75rem; color:${ml ? ml.color : '#EF4444'}; font-weight:700; background:${ml ? ml.color + '22' : 'rgba(239,68,68,0.1)'}; padding:3px 8px; border-radius:4px;">${ml ? ml.label : 'Not Implemented'}</span>
                    </td>
                    <td style="padding:0.9rem 1rem; text-align:center;">
                        <select class="rr-treatment" data-cid="${control.control_id}" style="padding:0.4rem 0.6rem; border-radius:6px; border:1px solid ${tColor !== 'var(--text-muted)' ? tColor + '55' : 'var(--border)'}; background:${tColor !== 'var(--text-muted)' ? tColor + '15' : 'var(--bg-dark)'}; color:${tColor}; font-size:0.8rem; font-weight:700; font-family:inherit; width:100%; cursor:pointer;">
                            <option value="">— Select —</option>
                            ${['Mitigate', 'Accept', 'Transfer', 'Avoid'].map(o => `<option value="${o}" ${treatment === o ? 'selected' : ''}>${o}</option>`).join('')}
                        </select>
                    </td>
                    <td style="padding:0.9rem 1rem;">
                        <input type="text" class="rr-notes" data-cid="${control.control_id}" placeholder="Notes / owner / due date..." value="${rr.notes || ''}" style="width:100%; padding:0.4rem 0.6rem; border-radius:5px; border:1px solid var(--border); background:var(--bg-dark); color:var(--text-primary); font-size:0.8rem; font-family:inherit;">
                    </td>
                `;
                tbody.appendChild(tr);

                tr.querySelector('.rr-treatment').addEventListener('change', e => {
                    riskRegisterState[control.control_id] = riskRegisterState[control.control_id] || {};
                    riskRegisterState[control.control_id].treatment = e.target.value;
                    localStorage.setItem(RISK_REGISTER_KEY, JSON.stringify(riskRegisterState));
                    renderRiskRegisterSummary(allGaps);
                });
                tr.querySelector('.rr-notes').addEventListener('input', e => {
                    riskRegisterState[control.control_id] = riskRegisterState[control.control_id] || {};
                    riskRegisterState[control.control_id].notes = e.target.value;
                    localStorage.setItem(RISK_REGISTER_KEY, JSON.stringify(riskRegisterState));
                });
            });
        }

        renderRiskRegisterSummary(allGaps);
        window._rrAllGaps = allGaps;
    }

    function renderRiskRegisterSummary(allGaps) {
        const el = document.getElementById('riskRegisterSummary');
        if (!el) return;
        const counts = { Mitigate: 0, Accept: 0, Transfer: 0, Avoid: 0, Unset: 0 };
        allGaps.forEach(({ control }) => {
            const t = (riskRegisterState[control.control_id] || {}).treatment || '';
            if (t && counts[t] !== undefined) counts[t]++;
            else counts.Unset++;
        });
        const items = [
            { label: 'Total Risks', val: allGaps.length, color: '#fff' },
            { label: 'Mitigate', val: counts.Mitigate, color: '#10B981' },
            { label: 'Accept', val: counts.Accept, color: '#F59E0B' },
            { label: 'Transfer', val: counts.Transfer, color: '#0A84FF' },
            { label: 'Avoid', val: counts.Avoid, color: '#EF4444' },
            { label: 'No Decision', val: counts.Unset, color: 'var(--text-muted)' }
        ];
        el.innerHTML = items.map(c => `
            <div style="background:rgba(255,255,255,0.03); border:1px solid var(--border); border-radius:12px; padding:1rem; text-align:center;">
                <div style="font-size:1.8rem; font-weight:800; color:${c.color}; font-family:'JetBrains Mono';">${c.val}</div>
                <div style="font-size:0.7rem; color:var(--text-muted); text-transform:uppercase; letter-spacing:1px; margin-top:4px; font-weight:700;">${c.label}</div>
            </div>
        `).join('');
    }

    // [2] Risk Register navigation wiring
    const btnGoToRR = document.getElementById('btnGoToRiskRegister');
    const btnRRBack = document.getElementById('btnRiskRegisterBack');
    const viewRR = document.getElementById('viewRiskRegister');

    if (btnGoToRR && viewRR) {
        btnGoToRR.addEventListener('click', () => {
            ui.viewDashboard.style.display = 'none';
            ui.viewDashboard.classList.remove('active');
            viewRR.style.display = 'flex';
            window.scrollTo({ top: 0, behavior: 'instant' });
            renderRiskRegister();
        });
    }
    if (btnRRBack && viewRR) {
        btnRRBack.addEventListener('click', () => {
            viewRR.style.display = 'none';
            ui.viewDashboard.style.display = 'flex';
            setTimeout(() => ui.viewDashboard.classList.add('active'), 50);
        });
    }

    // [2] Risk Register Excel Export
    const btnExportRR = document.getElementById('btnExportRiskRegister');
    if (btnExportRR) {
        btnExportRR.addEventListener('click', () => {
            const gaps = window._rrAllGaps || [];
            if (gaps.length === 0) { alert('No risk entries to export.'); return; }
            const rows = [['Control ID', 'Control Title', 'Domain', 'Inherent Risk Score', 'Risk Level', 'Current Maturity', 'Treatment Decision', 'Treatment Notes', 'Assessor', 'Assessment Date']];
            gaps.forEach(({ control, domain, ans }) => {
                const ml = MATURITY_LEVELS[ans];
                const impact = control.risk_impact || 5;
                const riskScore = Math.round(impact * (1 - (ml ? ml.multiplier : 0)));
                const riskLabel = riskScore >= 8 ? 'Critical' : riskScore >= 5 ? 'High' : 'Medium';
                const rr = riskRegisterState[control.control_id] || {};
                rows.push([
                    'A.' + control.control_id,
                    control.control_title,
                    domain.name,
                    riskScore,
                    riskLabel,
                    ml ? ml.label : 'Not Implemented',
                    rr.treatment || 'Awaiting Decision',
                    rr.notes || '',
                    userState._assessorName || '',
                    new Date().toLocaleDateString()
                ]);
            });
            const wb = XLSX.utils.book_new();
            const ws = XLSX.utils.aoa_to_sheet(rows);
            ws['!cols'] = [{ wch: 12 }, { wch: 35 }, { wch: 25 }, { wch: 14 }, { wch: 10 }, { wch: 22 }, { wch: 18 }, { wch: 40 }, { wch: 20 }, { wch: 14 }];
            ws['!autofilter'] = { ref: 'A1:J' + rows.length };
            XLSX.utils.book_append_sheet(wb, ws, 'Risk Treatment Plan');
            XLSX.writeFile(wb, 'Risk_Treatment_Plan_' + new Date().toISOString().split('T')[0] + '.xlsx');
        });
    }

    // --- RISK HEATMAP RENDERER ---
    function renderRiskHeatmap(gaps) {
        const container = document.getElementById('riskHeatmapContainer');
        if (!container) return;
        container.innerHTML = '';

        // Build 4x4 grid: Impact (Y: Low→Critical) x Likelihood (X: Low→Critical)
        const grid = [
            [[], [], [], []], // Impact row 1 (Low)
            [[], [], [], []], // Impact row 2 (Medium)
            [[], [], [], []], // Impact row 3 (High)
            [[], [], [], []]  // Impact row 4 (Critical)
        ];

        // Map controls to grid cells
        activeDomainIndices.forEach(globalIdx => {
            const d = grcData.domains[globalIdx];
            d.controls.forEach(c => {
                const ans = userState[c.control_id];
                if (!ans || ans === 'na' || ans === 'yes' || ans === 'optimized') return;
                
                const impact = c.risk_impact || 1;
                const mult = getMultiplier(ans);
                
                // Impact axis (Y): based on risk_impact from data
                let impactIdx = 0;
                if (impact >= 4) impactIdx = 3;
                else if (impact >= 3) impactIdx = 2;
                else if (impact >= 2) impactIdx = 1;
                
                // Likelihood axis (X): inverse of implementation maturity
                let likelihoodIdx = 3; // Default: highest likelihood if not implemented
                if (mult >= 0.8) likelihoodIdx = 0;
                else if (mult >= 0.6) likelihoodIdx = 1;
                else if (mult >= 0.2) likelihoodIdx = 2;
                
                grid[impactIdx][likelihoodIdx].push({
                    id: c.control_id,
                    title: c.control_title,
                    impact: impact,
                    maturity: mult
                });
            });
        });

        const colors = [
            ['#10B981', '#FBBF24', '#F59E0B', '#EF4444'],
            ['#FBBF24', '#F59E0B', '#EF4444', '#DC2626'],
            ['#F59E0B', '#EF4444', '#DC2626', '#991B1B'],
            ['#EF4444', '#DC2626', '#991B1B', '#7F1D1D']
        ];

        const impactLabels = ['Low', 'Medium', 'High', 'Critical'];
        const likelihoodLabels = ['Low', 'Medium', 'High', 'Critical'];

        let html = `
            <div class="heatmap-wrapper">
                <div class="heatmap-y-label"><span>← Impact →</span></div>
                <div class="heatmap-grid-area">
                    <div class="heatmap-grid">
        `;

        // Render top-down (Critical impact first)
        for (let y = 3; y >= 0; y--) {
            html += `<div class="heatmap-row-label">${impactLabels[y]}</div>`;
            for (let x = 0; x < 4; x++) {
                const cellControls = grid[y][x];
                const bgColor = colors[y][x];
                const opacity = cellControls.length > 0 ? 0.85 : 0.15;
                html += `
                    <div class="heatmap-cell" style="background:${bgColor}; opacity:${opacity};" title="${cellControls.map(c => 'A.' + c.id).join(', ') || 'No gaps'}">
                        ${cellControls.length > 0 ? `<span class="heatmap-count">${cellControls.length}</span>` : ''}
                    </div>
                `;
            }
        }

        html += `
                    </div>
                    <div class="heatmap-x-labels">
                        <span></span>
                        ${likelihoodLabels.map(l => `<span>${l}</span>`).join('')}
                    </div>
                    <div class="heatmap-x-label">← Likelihood of Exploitation →</div>
                </div>
            </div>
        `;

        // Count cells in danger zone
        const dangerCount = grid[3][2].length + grid[3][3].length + grid[2][3].length;
        const warningCount = grid[2][2].length + grid[1][3].length + grid[3][1].length;

        html += `
            <div class="heatmap-summary">
                <div class="heatmap-stat" style="border-left:3px solid #991B1B;"><strong>${dangerCount}</strong> controls in <span style="color:#EF4444;">Critical Zone</span></div>
                <div class="heatmap-stat" style="border-left:3px solid #F59E0B;"><strong>${warningCount}</strong> controls in <span style="color:#F59E0B;">Warning Zone</span></div>
                <div class="heatmap-stat" style="border-left:3px solid #10B981;"><strong>${gaps.length === 0 ? 'All clear' : gaps.length + ' total gaps'}</strong></div>
            </div>
        `;

        container.innerHTML = html;
    }

    // --- COMPLIANCE TIMELINE RENDERER (Feature #5) ---
    function renderComplianceTimeline(gaps) {
        const container = document.getElementById('complianceTimeline');
        if (!container) return;
        container.innerHTML = '';

        if (gaps.length === 0) {
            container.innerHTML = '<p style="color:var(--text-muted); font-style:italic; text-align:center; padding:2rem;">No gaps to remediate — maintain current posture.</p>';
            return;
        }

        // Sort by multiplier (lowest first = most urgent)
        const sorted = [...gaps].sort((a, b) => (a.multiplier || 0) - (b.multiplier || 0));

        // Bucket into 30/60/90 day phases
        const phase1 = sorted.filter(g => (g.multiplier || 0) <= 0.2); // Not implemented + Ad Hoc
        const phase2 = sorted.filter(g => (g.multiplier || 0) > 0.2 && (g.multiplier || 0) <= 0.5); // Repeatable + Defined
        const phase3 = sorted.filter(g => (g.multiplier || 0) > 0.5); // Managed ones (quick wins to optimize)

        const phases = [
            { label: 'Days 1–30', title: 'Critical Remediation', items: phase1, color: '#EF4444', icon: 'fa-fire' },
            { label: 'Days 31–60', title: 'Process Formalization', items: phase2, color: '#F59E0B', icon: 'fa-cogs' },
            { label: 'Days 61–90', title: 'Optimization & Audit Prep', items: phase3, color: '#10B981', icon: 'fa-chart-line' }
        ];

        let html = '<div class="timeline-phases">';
        phases.forEach(phase => {
            html += `
                <div class="timeline-phase">
                    <div class="timeline-phase-header" style="border-left: 4px solid ${phase.color};">
                        <div class="timeline-phase-badge" style="background:${phase.color};">
                            <i class="fas ${phase.icon}"></i>
                        </div>
                        <div>
                            <div class="timeline-phase-label" style="color:${phase.color};">${phase.label}</div>
                            <div class="timeline-phase-title">${phase.title}</div>
                        </div>
                        <span class="timeline-count">${phase.items.length} control${phase.items.length !== 1 ? 's' : ''}</span>
                    </div>
                    <div class="timeline-items">
            `;
            if (phase.items.length === 0) {
                html += '<div class="timeline-item-empty">No actions in this phase ✓</div>';
            } else {
                phase.items.slice(0, 5).forEach(g => {
                    const matLabel = g.maturityLabel || g.ans;
                    html += `
                        <div class="timeline-item">
                            <span class="timeline-item-id">A.${g.id}</span>
                            <span class="timeline-item-title">${g.title}</span>
                            <span class="timeline-item-status" style="color:${MATURITY_LEVELS[g.ans] ? MATURITY_LEVELS[g.ans].color : '#EF4444'};">${matLabel}</span>
                        </div>
                    `;
                });
                if (phase.items.length > 5) {
                    html += `<div class="timeline-item-more">+ ${phase.items.length - 5} more controls</div>`;
                }
            }
            html += '</div></div>';
        });
        html += '</div>';
        container.innerHTML = html;
    }

    // ==========================================
    // PHASE 4/5: EXPORT CAPABILITIES
    // ==========================================

    // PDF Export NATIVE GENERATION via pdfMake
    ui.btnPdfExport.addEventListener('click', () => {
        const originalText = ui.btnPdfExport.innerHTML;
        ui.btnPdfExport.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Generating PDF...';
        ui.btnPdfExport.disabled = true;

        setTimeout(() => {
            try {
                // 1. Gather Calculations — uses maturity multipliers
                let totalC = 0, implC = 0, partC = 0, gapC = 0, naC = 0, pendingC = 0;
                const criticalGaps = [];

                let nistT = 0, nistV = 0, cisT = 0, cisV = 0;

                activeDomainIndices.forEach(globalIdx => {
                    const domain = grcData.domains[globalIdx];
                    domain.controls.forEach(c => {
                        const ans = userState[c.control_id];
                        if (!ans) {
                            pendingC++;
                            criticalGaps.push({id: c.control_id, title: c.control_title, risk: 'Pending Evaluation', effort: 'TBD', rem: 'Control requires formal evaluation to determine compliance posture.', nist: c.nist_mapping, cis: c.cis_mapping, gdpr: c.gdpr_mapping, soc2: c.soc2_mapping, just: 'Pending formal evaluation.', rationale: 'Visibility Gap: Baseline not established.'}); 
                            return;
                        }
                        
                        totalC++;
                        const impact = c.risk_impact || 1;
                        const mult = getMultiplier(ans);
                        let fVal = 0; let fTotal = 0;
                        if (!isNA(ans)) {
                            fVal = impact * mult;
                            fTotal = impact;
                        }

                        if (c.nist_mapping && fTotal > 0) { nistT += fTotal; nistV += fVal; }
                        if (c.cis_mapping && fTotal > 0) { cisT += fTotal; cisV += fVal; }

                        if (ans === 'yes' || ans === 'optimized') implC++;
                        else if (isNA(ans)) naC++;
                        else if (ans === 'no') { 
                            gapC++; 
                            criticalGaps.push({id: c.control_id, title: c.control_title, risk: 'High', effort: 'High', rem: c.remediation_advice, nist: c.nist_mapping, cis: c.cis_mapping, gdpr: c.gdpr_mapping, soc2: c.soc2_mapping, just: userState[c.control_id + '_just'], rationale: c.expert_rationale}); 
                        }
                        else {
                            // Maturity levels (adhoc, repeatable, defined, managed)
                            partC++; 
                            const ml = MATURITY_LEVELS[ans];
                            const riskLvl = mult <= 0.4 ? 'High' : 'Medium';
                            criticalGaps.push({id: c.control_id, title: c.control_title, risk: riskLvl, effort: riskLvl, rem: c.remediation_advice, nist: c.nist_mapping, cis: c.cis_mapping, gdpr: c.gdpr_mapping, soc2: c.soc2_mapping, just: userState[c.control_id + '_just'], rationale: c.expert_rationale, maturityLabel: ml ? ml.label : ans}); 
                        }
                    });
                });

                const nistP = nistT === 0 ? 0 : Math.round((nistV / nistT) * 100);
                const cisP = cisT === 0 ? 0 : Math.round((cisV / cisT) * 100);

                // Decision Engine: Maturity & Top 3
                const finalP = parseInt(ui.overallScore.innerText.replace('%', ''));
                let matLbl = "Initial / At Risk";
                let matCol = "#EF4444";
                let matDesc = "Critical security gaps detected. Significant exposure to breach and regulatory fines. Core technical and organizational guardrails are either missing or loosely implemented.";
                if (finalP >= 75) { 
                    matLbl = "Mature / Optimized"; 
                    matCol = "#10B981"; 
                    matDesc = "Proactive posture. Controls are integrated and monitored for continuous improvement. You have achieved a baseline where internal processes are mostly self-correcting.";
                } else if (finalP >= 40) { 
                    matLbl = "Developing / Moderate"; 
                    matCol = "#F59E0B"; 
                    matDesc = "Foundational controls are in place, but lack depth and consistent monitoring. Risk is managed reactively rather than through automated or continuous governance.";
                }

                const priorityRecommendationList = criticalGaps
                    .filter(g => g.risk === 'High' || g.risk === 'Medium')
                    .sort((a,b) => (a.risk === 'High' ? -1 : 1))
                    .slice(0, 3);

                // 2. Build Gap Table
                const gapTableBody = [
                    [
                        { text: 'Control ID', bold: true, fillColor: '#f3f4f6', margin: [0, 4, 0, 4] },
                        { text: 'Title', bold: true, fillColor: '#f3f4f6', margin: [0, 4, 0, 4] },
                        { text: 'Risk', bold: true, fillColor: '#f3f4f6', margin: [0, 4, 0, 4] },
                        { text: 'Comment/Justification', bold: true, fillColor: '#f3f4f6', margin: [0, 4, 0, 4] },
                        { text: 'Remediation Advice', bold: true, fillColor: '#f3f4f6', margin: [0, 4, 0, 4] }
                    ]
                ];

                if(criticalGaps.length === 0){
                    gapTableBody.push([{text: 'Outstanding! No critical gaps identified in the evaluated scope.', colSpan: 4, alignment: 'center', margin: [0, 10, 0, 10], color: '#10B981', bold: true}, {}, {}, {}]);
                } else {
                    criticalGaps.forEach(g => {
                        let riskColor = '#f59e0b';
                        if (g.risk === 'High') riskColor = '#ef4444';
                        else if (g.risk === 'Pending Evaluation') riskColor = '#9ca3af';

                        gapTableBody.push([
                            { text: 'A.' + g.id, margin: [0, 4, 0, 4] },
                            { text: g.title, margin: [0, 4, 0, 4] },
                            { text: g.risk.toUpperCase(), bold: true, color: riskColor, margin: [0, 4, 0, 4] },
                            { text: g.just || 'N/A', fontSize: 8, margin: [0, 4, 0, 4], fontStyle: 'italic' },
                            { text: g.rem || 'Review mapping and implement formal process logic.', margin: [0, 4, 0, 4] }
                        ]);
                    });
                }

                // 3. Extract Chart Canvas
                const chartCanvas = document.getElementById('radarChart');
                // Create a white background canvas so the graph isn't transparent in the PDF
                let finalChartImage = '';
                if(chartCanvas) {
                    const tempCanvas = document.createElement('canvas');
                    tempCanvas.width = chartCanvas.width;
                    tempCanvas.height = chartCanvas.height;
                    const ctx = tempCanvas.getContext('2d');
                    ctx.fillStyle = "#ffffff";
                    ctx.fillRect(0, 0, tempCanvas.width, tempCanvas.height);
                    ctx.drawImage(chartCanvas, 0, 0);
                    finalChartImage = tempCanvas.toDataURL("image/png", 1.0);
                }
                const chartImgObject = finalChartImage ? { image: finalChartImage, width: 280, alignment: 'center' } : { text: '[Chart rendering unavailable]', alignment: 'center' };

                // 3.5 Use Hardcoded Base64 Logo for PDF Generation Offline & Securely
                const logoBase64 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAAXNSR0IArs4c6QAAAIRlWElmTU0AKgAAAAgABQESAAMAAAABAAEAAAEaAAUAAAABAAAASgEbAAUAAAABAAAAUgEoAAMAAAABAAIAAIdpAAQAAAABAAAAWgAAAAAAAABIAAAAAQAAAEgAAAABAAOgAQADAAAAAQABAACgAgAEAAAAAQAAADKgAwAEAAAAAQAAADIAAAAAhvHCqAAAAAlwSFlzAAALEwAACxMBAJqcGAAAAVlpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IlhNUCBDb3JlIDYuMC4wIj4KICAgPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4KICAgICAgPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIKICAgICAgICAgICAgeG1sbnM6dGlmZj0iaHR0cDovL25zLmFkb2JlLmNvbS90aWZmLzEuMC8iPgogICAgICAgICA8dGlmZjpPcmllbnRhdGlvbj4xPC90aWZmOk9yaWVudGF0aW9uPgogICAgICA8L3JkZjpEZXNjcmlwdGlvbj4KICAgPC9yZGY6UkRGPgo8L3g6eG1wbWV0YT4KGV7hBwAACpVJREFUaAXtWWlslMcZfvby2l7b2MYcMTaYImMOczYVbSqlpT+gVCUkTYzUVDSJlIT8SKQkwI9UMRDakkQqDb/apI1CSoQo1KJpq3K1VEJxgJAKx0lLZYyLOWyoD3zbe3r7PLMe5KzWNrvGEoryyrPzfTPzvvM+8x4z89mRnZ0dxReAnF8ADAbCl0DuNkt+aZG7xSI2U7knSiEHBQ+yBIcm8LB2sdiJh5rHXWke0R0HIsERFj/LJJZihwNq+180ig7WGSwTAih+H9GKWZR8TIrEKxA5LPkE0ELl2yNqASa7XJjGtpts6+K7wKQ6j+TFkyMeSPyAsd6lZhpLpqkdCNN5rlFZROhYLie2ZsgGwI6BAbZxNAEVEZCXxc9x/ewLsAjYeChlINbXp3J2OU9DlIoPKioceNibhocIYLnXi0xnzLWk9CeBAP7YP4DfBxg5Akugpc5Y4ryud8NtqqR/DBCr1HDu0cyu8SrpLO1SnkosdLuxIT0dK1ju4ar3sa2Wih+gJWS1xzIzsYwAs6l4Cy1zxu/HOwRVEwoBbCtgoc2Mu402N4ckpJQsoom8LK1U9rG0NKzl6n/F4zFKNFCx4wN+/CbAcA8TgnvIaaQwwT6XmYE1HF/qSTPj/xsO4VBfP94kaMWQwCRa2ITaD2tMGogmyWVRHMzjKr6Xl4cBPh/lyu8kAETCJg40x05a4QZXv439K+lmx2iFKo2RFWmdrbTeAz4fcijnB21t+BfbZyohkDdZqyS9swuIZZrCSfX+q54e7GRZ73FjHRUuo2JSdgWfF9FipbTKOl8mfpqbizPTpuAXeZNQQN4d3T14vauLrhfFPeIhpZqarU5GyO38DF8p+X6YSLKplNzmhewcLKOL1Q2l3H5aoo+APFEH6oMhVHZ2oonuti7Th6pc7jIEqNgID0YR4VhR7Nc8JvWTNJDhk2nSMBUIDs0+yOeQngWMhfqZQFcuU6liHDxMF/pDXx8KXdyLOUbZTH1DIviUGqW0s9tJreL2PUClOpWGjUWi8BOJwISoZlDaMptJ+bcYK63aZzheriTwVoatk4UzLiCaNEgVpKNIq/t1jxfFWS7Tlk+3qaOW6g+yT3Gzk26l9kthJgWS+mRVKyNVICm5ltGAP1HmFsWIVSLA51xucrMYLyUsHq5+YAiolBUVOF0oZwJQnMg6gqNYSxWAZIoSAhlLqO03LkMFlXVEUkg79w+7OvBoZwfquXfo1CuXM3FExZ/u6cRexkg3rSOKkDXEfitT9fCEYgbdxo87EeNYgqwF2sgsd4pthTH3SRMzV11rLNncBk1GMq5FIHA4zdnMytA5TbHUQTki225ekvjhSSh5knKTqdQ1BraOIjOkOJ87uMqxk1VMppRXIGu8rGc2Qk64wptuNkoMRlDC7NXDcf8mbx5l6gCZCiV0rdEECbjuGlkaRAXq6D5z3VpXB/7qH0ATlZPvS2+5kwBolQV4EbPW77Jy4WT7G/29xjrzeFQ5H4wdIvMow563JD4ZShqIhAsM1YCH2WdX0G8y1/aMLBwOB/FnHlHmmhFDQczNsJcgchwubM7MRhtT84/6uvEZz1iv8V1AfxYYoMc50SP0KVLKQLRy+ZqUSu4Z6MN0rvbPM7KNGhe0l9Aq3ayVnmWZHj4fp8U29Xcbntd8kzCDbvV2X68J9unk1OKkpBD5kj40Gk2HfpQ681iaCWYBV/Qpr8+k3GNc4b9EgvR5J0pYtM6fCByt9X1POr7njV22fuvvRQ1jQxetNo5RhkuVxgVEk94CI3X592JaBsrcHlyh0nvpdlejSspAIQE9zr4S9jXQBV8nWJFAtLMWCAFOlcYNRBMLjD406Noqd/q2y4NVXHkfla8Na0sElrq97B/ECYL7eySELPbpbq8j+3gsQXZDdwSIJCkz6bIlp2miq4ke5XFlCTNalO+fUfl9oVhynUErKPPJJtpx7gSNCsTBCX28+Djp/6Iwz0dSqr+/39RqH6SPq83FYM/kRWqAB0KBSeMt8CrvKIXkT+ORpDEURAEvVZIXIp8yX4ipu4djJEdFcga5OUZpVV+Wj1sTrwE8BXh4NRiLEgKxivl57A5QsXiaM2eOUeL69esoLi42IJqamgmw73NDy2bNQt3ly7fapk+fjhs3btx610NZWZlZoKamJvCLDvLz8xHgvI2NjWbc/PnzoXkE2i6o6Yj7SQhEDFqJqVOnoqKiwgj28mra3dWNpuYmHD/+NyNmwYIFOH/+vHkuLS2FJm1paTGKlZSUoKqqCksWLcIjFY+g+tRpHDt6FC88/7yxaAYt1t3djXf27DH8AiTejg59xgNWr16N1pZWnKs5h6KiInTxJinrjwQm4TFeppQbFRYWYs2a72LJ4sVov3mTSv8HxRRaXl6OvXvfMyDWr19vxh46dAgHDx7A/fd/y7jLW2/+Gum8k2/Zshn9/Liwdu0DWEo537jvPnx1+XIE6Wrikfz8/MnYt2+fAbBp04vYteuXeOKJx42FXn65EjU1NbS6Gzk53EBpGbl8PCW0iFzLy/t2Hj8sXLx4EWfOnKYVjmPr1m00+SWzaj1czfff/xMq1lfwlutGdfWH+M7Klbh85QrvVWHMnDnTjOvt7cWDDz6Ed9/dg8uXr2Dbtm0c+wFLNT7++J/4yUsvMatFjazy8oVYtnQZ6i/WU0bEWDjgD+Cjsx/hySefgly6tbXVxFI8kBE3UplxOHAp+7V77zUut3nzFni52ht+vMEAbm9rx2K6UJgAMvm5R0EvfgW5jYlv0hLLli4187ucLrprEBs3Ps2DshNtvP6uWrUKCxcuRNm8eXjjjd3I8mXh9OnTOHLkiGkXo5/xqqSSiEYEosH2JOshCDdNKyuJOvkRQYo2MiDDoTABRFBbWwsnkVdWbsWzzz5nQBw+fAQraaWDBw4gwINh3YU6w+/iRwcfv6p8WvupcZMwP0icPHkSXZ1d+MeJE3jmmY0GoGQr4ahfpDktxW+eLiq33XbaWj4o95KCCnqlzHPnzqG+/iKFRfhcw6EOvPLKDkyZMsWw7d+/HzcZqMowWrUgFdj56qumLp1biqNHjtKttpuxip26ugvYvXs3lCSUpSorK9HQ0ID5C+aj+oNqnPrwFBqZ8err6ymzGWfPnjVpWC4nUpRYMHpOGCMaSBxG6ZycnFvuoSSgYLO1xo1Gs2fPxqVLl24NmTmzmBlrwLiSGhVHVxhTt0PTpk1Db2+fcXez0GSyYEYFIuFikC8XFc0wlhng10SlZKXJgoICCu5lQsg1bidrKKV20j1kNVnq6tVrhjeT7XIt7RVBft8qmlFoNk7xK7VqHgWxXFf7iNqVNbX6qhVzzc3Nn9sYh1vD6Ho7/1aIBT4jhhPqWbnctlm/VZ8Fr7VSu4uBLEXUJ1dVwhBZXvusWvcRuYF2dokSj5Up3pH2D/GKRnStWPfd8ysLxJYqsU6jZq3ELGO3WrOrHl7G5oyNsPzDxwtEonbbNiFA4hUY/q5nO3l8u30faeVHahdfwiOKFZhqbSeMr608227fx1NbWRNukfEomQzvhAORG43lSskoHD/Wyp4wIHYCO3H8u21PVCcz1rrWhMSIlLMT2DqRwiO1pcKT0CLJrEgiZeL5498T8Yy37f8xMsP7Vfl+ggAAAABJRU5ErkJggg==";

                // 4. Document Definition
                // Assessor metadata for PDF
                const assessorName = userState._assessorName || '';
                const orgName = userState._orgName || '';

                const docDefinition = {
                    info: { title: 'ISO 27001 Gap Assessment' + (orgName ? ' — ' + orgName : ''), author: assessorName || 'TheHGTech', subject: 'Enterprise GRC Report' },
                    pageMargins: [40, 60, 40, 60],
                    header: function(currentPage, pageCount) {
                        return { 
                            margin: [40, 20, 40, 0],
                            columns: [
                                logoBase64 ? { image: logoBase64, width: 20 } : { text: 'TheHGTech', bold: true, color: '#00d9ff' },
                                { text: (orgName ? orgName + ' | ' : '') + 'TheHGTech Enterprise GRC Tool', alignment: 'right', color: '#00d9ff', bold: true, fontSize: 10, margin: [0, 5, 0, 0] }
                            ]
                        };
                    },
                    footer: function(currentPage, pageCount) {
                        return { 
                            stack: [
                                { canvas: [{ type: 'line', x1: 40, y1: 0, x2: 555, y2: 0, lineWidth: 0.5, lineColor: '#e5e7eb' }], margin: [0, 10, 0, 10] },
                                { 
                                    columns: [
                                        { text: 'Stay secure. Stay informed. Stay ahead.', fontSize: 8, italic: true, color: '#9ca3af', margin: [40, 0, 0, 0] },
                                        { text: 'Page ' + currentPage + ' of ' + pageCount, alignment: 'right', margin: [0, 0, 40, 0], color: '#9ca3af', fontSize: 8 }
                                    ]
                                }
                            ]
                        };
                    },
                    content: [
                        { text: 'ISO 27001 Gap Analysis Executive Summary', style: 'mainHeader' },
                        { text: 'Framework: ISO/IEC 27001:2022', style: 'subHeader' },
                        (assessorName || orgName) ? { text: (orgName ? 'Organization: ' + orgName + '   |   ' : '') + (assessorName ? 'Assessed by: ' + assessorName : ''), fontSize: 10, color: '#374151', margin: [0, 0, 0, 5] } : {},
                        { text: 'Generated on: ' + new Date().toLocaleDateString(), style: 'dateToken' },
                        
                        {
                            margin: [0, 30, 0, 20],
                            columns: [
                                {
                                    width: '45%',
                                    stack: [
                                        { text: 'Overall Readiness Posture', style: 'sectionHeader' },
                                        { text: ui.overallScore.innerText, style: 'giantScore', color: ui.overallScore.style.color },
                                        { text: matLbl.toUpperCase(), bold: true, fontSize: 13, color: matCol, margin: [0, 5, 0, 15] },
                                        { text: 'Framework Alignment Indicators', bold: true, margin: [0, 15, 0, 5] },
                                        {
                                            layout: 'noBorders',
                                            table: {
                                                widths: ['*', 'auto'],
                                                body: [
                                                    ['• Assessed Controls:', { text: totalC + ' / ' + (totalC + pendingC), bold: true, color: '#4B5563' }],
                                                    ['• NIST CSF 2.0 readiness:', { text: nistP + '%', bold: true, color: '#0A84FF' }],
                                                    ['• CIS Controls v8 readiness:', { text: cisP + '%', bold: true, color: '#FF9F0A' }],
                                                    ['• ISO 27001 Core alignment:', { text: ui.overallScore.innerText, bold: true, color: ui.overallScore.style.color }]
                                                ]
                                            }
                                        }
                                    ]
                                },
                                {
                                    width: '55%',
                                    stack: [
                                        chartImgObject
                                    ]
                                }
                            ]
                        },

                        { canvas: [{ type: 'line', x1: 0, y1: 0, x2: 515, y2: 0, lineWidth: 1, lineColor: '#e5e7eb' }], margin: [0, 20, 0, 20] },
                        
                        { text: 'STRATEGIC MATURITY INTERPRETATION', style: 'sectionHeader', margin: [0, 0, 0, 10] },
                        { text: matDesc, margin: [10, 0, 10, 25], color: '#4B5563', fontSize: 10, lineHeight: 1.4, italic: true },

                        { text: 'EXECUTIVE ACTION PLAN (TOP PRIORITIES)', style: 'sectionHeader', margin: [0, 10, 0, 15] },
                        priorityRecommendationList.length > 0 ? {
                            stack: priorityRecommendationList.map((p, index) => {
                                return {
                                    margin: [0, 0, 0, 15],
                                    stack: [
                                        { columns: [
                                            { text: `${index + 1}. IMMEDIATELY RECTIFY: Control ${p.id}`, bold: true, color: '#111827', fontSize: 11 },
                                            { text: `Effort: ${p.effort}`, alignment: 'right', fontSize: 8, color: p.effort === 'High' ? '#EF4444' : '#F59E0B', bold: true }
                                        ]},
                                        { text: `Risk: ${p.rationale ? p.rationale.split('|')[0].replace('Risk:', '').trim() : 'Critical control gap.'}`, fontSize: 9, color: '#ef4444', margin: [0, 4, 0, 0] },
                                        { text: `Outcome: ${p.id.includes('5.') ? 'Dramatically reduces likelihood of successful exploitation.' : 'Strengthens identity boundary against unauthorized access.'}`, fontSize: 8, color: '#10B981', margin: [0, 2, 0, 0], italic: true },
                                        { text: `Strategic Remediation: ${p.rem}`, fontSize: 9, color: '#4B5563', margin: [0, 4, 0, 0] }
                                    ]
                                };
                            })
                        } : { text: 'Maintain current security posture. No critical remediations prioritized.', italic: true, color: '#6B7280' },

                        { text: 'Domain Readiness Distribution', style: 'sectionHeader', margin: [0, 20, 0, 10] },
                        chartImgObject,

                        { text: 'Detailed Gap Analysis & Risk Registry', style: 'sectionHeader', pageBreak: 'before', margin: [0, 0, 0, 15] },
                        { text: 'The following table outlines all identified gaps (Partial or Missing) with corresponding remediation guidance and framework mapping.', margin: [0, 0, 0, 10], color: '#6b7280', fontSize: 9 },
                        {
                            table: {
                                headerRows: 1,
                                widths: ['8%', '22%', '10%', '20%', '40%'],
                                body: gapTableBody
                            },
                            layout: {
                                hLineWidth: function(i, node) { return (i === 0 || i === node.table.body.length) ? 0 : 1; },
                                vLineWidth: function(i) { return 0; },
                                hLineColor: function(i) { return '#e5e7eb'; },
                                paddingLeft: function(i) { return 4; },
                                paddingRight: function(i) { return 4; },
                            }
                        }
                    ],
                    styles: {
                        mainHeader: { fontSize: 22, bold: true, color: '#111827', margin: [0, 0, 0, 5] },
                        subHeader: { fontSize: 14, color: '#374151', margin: [0, 0, 0, 2] },
                        dateToken: { fontSize: 10, color: '#6b7280', margin: [0, 0, 0, 20] },
                        sectionHeader: { fontSize: 16, bold: true, color: '#111827', margin: [0, 0, 0, 5] },
                        giantScore: { fontSize: 44, bold: true, alignment: 'left' }
                    },
                    defaultStyle: { font: 'Roboto', fontSize: 10, color: '#374151', lineHeight: 1.3 }
                };

                const outName = 'ISO27001_Gap_Assessment_' + new Date().toISOString().split('T')[0] + '.pdf';
                pdfMake.createPdf(docDefinition).download(outName);

            } catch (err) {
                console.error("PDF Native Generation Failed:", err);
                alert("Failed to build PDF structure. Please check console for errors.");
            } finally {
                ui.btnPdfExport.innerHTML = originalText;
                ui.btnPdfExport.disabled = false;
            }
        }, 500);
    });

    // Excel Full Export Logic
    const handleExcelExport = (btnElement) => {
        const originalText = btnElement.innerHTML;
        btnElement.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Building Excel...';
        btnElement.disabled = true;

        setTimeout(() => {
            try {
                // SHEET 1: Executive Summary
                const execSummary = [];
                execSummary.push(["ISO 27001:2022 Statement of Applicability — Executive Summary"]);
                execSummary.push(["Version:", "v" + (grcData ? grcData.version : '2.0')]);
                execSummary.push(["Generated on:", new Date().toLocaleDateString()]);
                execSummary.push(["Assessment Date:", new Date().toLocaleDateString()]);
                execSummary.push(["Framework:", grcData.framework]);
                execSummary.push([]);
                
                let totalC = 0, implC = 0, partC = 0, gapC = 0, naC = 0, pendingC = 0;
                const criticalGaps = [];

                // Assessor metadata for Excel
                const assessorName = userState._assessorName || '';
                const orgName = userState._orgName || '';
                if (assessorName) execSummary.push(["Assessed by:", assessorName]);
                if (orgName) execSummary.push(["Organization:", orgName]);
                execSummary.push([]);

                // Re-calculate totals with maturity awareness
                activeDomainIndices.forEach(globalIdx => {
                    const domain = grcData.domains[globalIdx];
                    domain.controls.forEach(c => {
                        const ans = userState[c.control_id];
                        if (!ans) {
                            pendingC++;
                            criticalGaps.push([c.control_id, c.control_title, 'Pending Evaluation', 'Visibility Gap: Baseline not established.', 'Control requires formal evaluation.']);
                            return; 
                        }
                        
                        totalC++;
                        if (ans === 'yes' || ans === 'optimized') implC++;
                        else if (isNA(ans)) naC++;
                        else if (ans === 'no') {
                            gapC++;
                            const riskText = c.expert_rationale && c.expert_rationale.includes('|') ? c.expert_rationale.split('|')[0].replace('Risk:', '').trim() : "Direct exposure to control failure.";
                            criticalGaps.push([c.control_id, c.control_title, 'High', riskText, c.remediation_advice]);
                        } else {
                            // Maturity levels
                            partC++;
                            const ml = MATURITY_LEVELS[ans];
                            const riskText = c.expert_rationale && c.expert_rationale.includes('|') ? c.expert_rationale.split('|')[0].replace('Risk:', '').trim() : "Process not fully mature.";
                            criticalGaps.push([c.control_id, c.control_title, ml ? ml.label : 'Partial', riskText, c.remediation_advice]);
                        }
                    });
                });

                execSummary.push(["Total Controls evaluated:", totalC]);
                execSummary.push(["Pending Evaluation:", pendingC]);
                execSummary.push(["Fully Implemented:", implC]);
                execSummary.push(["Maturity In-Progress:", partC]);
                execSummary.push(["Control Gap (Not Implemented):", gapC]);
                execSummary.push(["Not Applicable:", naC]);
                execSummary.push(["Overall ISO 27001 Score:", ui.overallScore.innerText]);
                execSummary.push(["NIST CSF 2.0 Readiness:", (window.grcNistScore || 0) + "%"]);
                execSummary.push(["CIS Controls v8 Alignment:", (window.grcCisScore || 0) + "%"]);
                execSummary.push([]);
                
                execSummary.push(["Top Risk Gaps (Priority Remediation Checklist)"]);
                execSummary.push(["Control ID", "Control Title", "Risk / Maturity Level", "Risk & Consequence", "Strategic Remediation Advice"]);
                criticalGaps.forEach(g => execSummary.push(g));

                // SHEET 2: Enriched Gap Analysis Data (Feature #7)
                const exportData = [];
                exportData.push(["Domain", "Control ID", "Control Title", "Justification for Inclusion", "Implementation Status", "Maturity Level", "Maturity Score", "Risk Level", "Control Criticality", "Score Impact", "Justification for Exclusion (N/A only)", "Treatment Reference", "Assessment Date", "Evidence Notes", "Objective", "Auditor Check", "Evidence Required", "Remediation Advice", "NIST CSF 2.0", "CIS Controls v8", "Expert Rationale"]);

                activeDomainIndices.forEach(globalIdx => {
                    const domain = grcData.domains[globalIdx];
                    domain.controls.forEach(control => {
                        const rawStatus = userState[control.control_id] || "Not Evaluated";
                        const ml = MATURITY_LEVELS[rawStatus];
                        const mult = getMultiplier(rawStatus);
                        let friendlyStatus = "Not Evaluated";
                        let maturityLabel = "N/A";
                        let riskLevel = "High";

                        if (rawStatus === 'yes' || rawStatus === 'optimized') { friendlyStatus = "Fully Implemented"; maturityLabel = "Optimized (100%)"; riskLevel = "Low"; }
                        else if (rawStatus === 'managed') { friendlyStatus = "Managed"; maturityLabel = "Managed (80%)"; riskLevel = "Low"; }
                        else if (rawStatus === 'defined' || rawStatus === 'partial') { friendlyStatus = "Defined"; maturityLabel = "Defined (60%)"; riskLevel = "Medium"; }
                        else if (rawStatus === 'repeatable') { friendlyStatus = "Repeatable"; maturityLabel = "Repeatable (40%)"; riskLevel = "Medium"; }
                        else if (rawStatus === 'adhoc') { friendlyStatus = "Ad Hoc"; maturityLabel = "Ad Hoc (20%)"; riskLevel = "High"; }
                        else if (rawStatus === 'no') { friendlyStatus = "Not Implemented"; maturityLabel = "None (0%)"; riskLevel = "Critical"; }
                        else if (rawStatus === 'na') { friendlyStatus = "Not Applicable"; maturityLabel = "N/A"; riskLevel = "None"; }

                        const impact = control.risk_impact || 1;
                        const scoreImpact = '+' + (impact * mult).toFixed(1) + ' / ' + impact;

                        const inclJustification = (rawStatus === 'na') ? 'Excluded — see N/A justification' :
                            (control.objective || 'Applicable to organisation scope');
                        const exclusionJustification = (rawStatus === 'na') ?
                            (userState[control.control_id + '_just'] || 'Not provided') : '';
                        const treatmentRef = ''; // Placeholder for Risk Treatment Plan link
                        const assessmentDate = new Date().toLocaleDateString();

                        exportData.push([
                            domain.name,
                            "A." + control.control_id,
                            control.control_title,
                            inclJustification,
                            friendlyStatus,
                            maturityLabel,
                            (mult * 100) + '%',
                            riskLevel,
                            control.criticality || "Medium",
                            scoreImpact,
                            exclusionJustification,
                            treatmentRef,
                            assessmentDate,
                            userState[control.control_id + '_notes'] || "",
                            control.objective,
                            control.auditor_question,
                            control.evidence_required,
                            control.remediation_advice,
                            control.nist_mapping || "N/A",
                            control.cis_mapping || "N/A",
                            control.expert_rationale || ""
                        ]);
                    });
                });

                const wb = XLSX.utils.book_new();

                // Build Summary Sheet
                const wsSum = XLSX.utils.aoa_to_sheet(execSummary);
                wsSum['!cols'] = [{ wch: 15 }, { wch: 35 }, { wch: 15 }, { wch: 50 }, { wch: 60 }];
                XLSX.utils.book_append_sheet(wb, wsSum, "Executive Summary");

                // Build Detail Sheet
                const ws = XLSX.utils.aoa_to_sheet(exportData);
                ws['!cols'] = [{ wch: 25 }, { wch: 10 }, { wch: 30 }, { wch: 20 }, { wch: 10 }, { wch: 15 }, { wch: 15 }, { wch: 35 }, { wch: 40 }, { wch: 45 }];
                
                // Add AutoFilter to data sheet
                ws['!autofilter'] = { ref: `A1:P${exportData.length}` };

                XLSX.utils.book_append_sheet(wb, ws, "Detailed Gap Analysis");

                let outName = "ISO27001_Gap_Assessment_" + new Date().toISOString().split('T')[0] + ".xlsx";
                XLSX.writeFile(wb, outName);
            } catch (error) {
                console.error("Export Error:", error);
                alert("Error building Excel dump.");
            } finally {
                btnElement.innerHTML = originalText;
                btnElement.disabled = false;
            }
        }, 800);
    };

    ui.btnExportDraft.addEventListener('click', () => handleExcelExport(ui.btnExportDraft));
    ui.btnFinalExcelExport.addEventListener('click', () => handleExcelExport(ui.btnFinalExcelExport));

    // --- JSON EXPORT (Feature #8) ---
    if (ui.btnJsonExport) {
        ui.btnJsonExport.addEventListener('click', () => {
            const exportObj = {
                meta: {
                    tool: 'TheHGTech GRC Gap Analysis Engine v2.0',
                    version: grcData ? grcData.version : '2.0',
                    exportDate: new Date().toISOString(),
                    assessorName: userState._assessorName || '',
                    organizationName: userState._orgName || '',
                    overallScore: ui.overallScore ? ui.overallScore.innerText : '0%',
                    nistScore: (window.grcNistScore || 0) + '%',
                    cisScore: (window.grcCisScore || 0) + '%'
                },
                controls: []
            };

            activeDomainIndices.forEach(globalIdx => {
                const domain = grcData.domains[globalIdx];
                domain.controls.forEach(c => {
                    const status = userState[c.control_id] || 'not_evaluated';
                    const level = MATURITY_LEVELS[status];
                    exportObj.controls.push({
                        domain: domain.name,
                        controlId: 'A.' + c.control_id,
                        title: c.control_title,
                        status: status,
                        maturityLabel: level ? level.label : 'Not Evaluated',
                        multiplier: getMultiplier(status),
                        riskImpact: c.risk_impact,
                        criticality: c.criticality,
                        nistMapping: c.nist_mapping,
                        cisMapping: c.cis_mapping,
                        evidenceNotes: userState[c.control_id + '_notes'] || '',
                        naJustification: userState[c.control_id + '_just'] || ''
                    });
                });
            });

            const blob = new Blob([JSON.stringify(exportObj, null, 2)], { type: 'application/json' });
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = 'GRC_Assessment_' + new Date().toISOString().split('T')[0] + '.json';
            a.click();
            URL.revokeObjectURL(url);

            const origText = ui.btnJsonExport.innerHTML;
            ui.btnJsonExport.innerHTML = '<i class="fas fa-check"></i> Downloaded!';
            setTimeout(() => { ui.btnJsonExport.innerHTML = origText; }, 2000);
        });
    }

    // Share Link Handler
    if (ui.btnShareState) {
        ui.btnShareState.addEventListener('click', () => {
            updateURLState();
            const url = window.location.href;
            navigator.clipboard.writeText(url).then(() => {
                const originalText = ui.btnShareState.innerHTML;
                ui.btnShareState.innerHTML = '<i class="fas fa-check"></i> Link Copied!';
                setTimeout(() => {
                    ui.btnShareState.innerHTML = originalText;
                }, 2000);
            });
        });
    }

    // Badge Copy Handler
    const btnCopyEmbed = document.getElementById('btnCopyEmbed');
    if (btnCopyEmbed) {
        btnCopyEmbed.addEventListener('click', () => {
            const code = document.getElementById('grcEmbedCode').innerText;
            navigator.clipboard.writeText(code).then(() => {
                btnCopyEmbed.innerHTML = '<i class="fas fa-check"></i>';
                btnCopyEmbed.classList.add('success');
                setTimeout(() => {
                    btnCopyEmbed.innerHTML = '<i class="fas fa-copy"></i>';
                    btnCopyEmbed.classList.remove('success');
                }, 2000);
            });
        });
    }

    // --- KEYBOARD NAVIGATION (Feature #10) ---
    document.addEventListener('keydown', (e) => {
        // Only active when engine view is visible
        if (!ui.viewEngine || ui.viewEngine.style.display === 'none') return;
        // Don't capture if user is typing in a textarea/input
        if (e.target.tagName === 'TEXTAREA' || e.target.tagName === 'INPUT') return;

        const cards = document.querySelectorAll('.control-card');
        if (!cards.length) return;

        // Find the currently focused/visible card
        let focusedCard = null;
        let focusedIdx = -1;
        cards.forEach((c, i) => {
            const rect = c.getBoundingClientRect();
            if (rect.top >= 50 && rect.top < window.innerHeight * 0.6 && !focusedCard) {
                focusedCard = c;
                focusedIdx = i;
            }
        });
        if (!focusedCard) {
            focusedCard = cards[0];
            focusedIdx = 0;
        }

        const controlId = focusedCard.getAttribute('data-id');
        const btns = focusedCard.querySelectorAll('.btn-option');

        switch(e.key) {
            case '1': // Yes
                e.preventDefault();
                saveAnswer(controlId, 'yes', btns, focusedCard);
                break;
            case '2': // Partial → open maturity panel
                e.preventDefault();
                saveAnswer(controlId, 'defined', btns, focusedCard); // Default to 'defined' (60%)
                const panel = document.getElementById(`maturity_panel_${controlId}`);
                if (panel) panel.style.display = 'block';
                btns.forEach(b => b.classList.remove('active'));
                const partBtn = focusedCard.querySelector('[data-val="maturity"]');
                if (partBtn) partBtn.classList.add('active');
                focusedCard.querySelectorAll('.maturity-btn').forEach(b => b.classList.remove('active'));
                const defBtn = focusedCard.querySelector('[data-mval="defined"]');
                if (defBtn) defBtn.classList.add('active');
                break;
            case '3': // No
                e.preventDefault();
                saveAnswer(controlId, 'no', btns, focusedCard);
                break;
            case '4': // N/A
                e.preventDefault();
                saveAnswer(controlId, 'na', btns, focusedCard);
                break;
            case 'j': // Next control
            case 'J':
                e.preventDefault();
                if (focusedIdx < cards.length - 1) {
                    const next = cards[focusedIdx + 1];
                    const offset = next.getBoundingClientRect().top + window.scrollY - 150;
                    window.scrollTo({ top: offset, behavior: 'smooth' });
                }
                break;
            case 'k': // Previous control
            case 'K':
                e.preventDefault();
                if (focusedIdx > 0) {
                    const prev = cards[focusedIdx - 1];
                    const offset = prev.getBoundingClientRect().top + window.scrollY - 150;
                    window.scrollTo({ top: offset, behavior: 'smooth' });
                }
                break;
        }
    });

    // ==========================================
    // PHASE 4: JSON IMPORT / MERGE
    // ==========================================
    const btnImportJson = document.getElementById('btnImportJson');
    const jsonImportInput = document.getElementById('jsonImportInput');

    if (btnImportJson && jsonImportInput) {
        btnImportJson.addEventListener('click', () => {
            jsonImportInput.click();
        });

        jsonImportInput.addEventListener('change', (e) => {
            const file = e.target.files[0];
            if (!file) return;

            const reader = new FileReader();
            reader.onload = function(evt) {
                try {
                    const importedData = JSON.parse(evt.target.result);
                    
                    // Basic validation to ensure it's a state object (could have control IDs)
                    if (!importedData || typeof importedData !== 'object') {
                        alert("Invalid Assessment JSON format.");
                        return;
                    }

                    // Merge strategy: Overwrite local state with imported state
                    const confirmMerge = confirm("Are you sure you want to import this assessment? This will overwrite any conflicting answers in your current session.");
                    if (!confirmMerge) return;

                    // Merge userState
                    Object.keys(importedData).forEach(key => {
                        userState[key] = importedData[key];
                    });
                    
                    persistState();
                    alert("Assessment data imported successfully!");
                    
                    // Reload UI to reflect new state
                    location.reload();
                    
                } catch (error) {
                    alert("Error parsing JSON file. Please ensure it is a valid GRC export.");
                    console.error(error);
                }
            };
            reader.readAsText(file);
            // Reset input so the same file can be selected again
            e.target.value = '';
        });
    }

    // Kickoff
    loadGRCData();

    // Methodology Jumper
    window.scrollToMethodology = function() {
        const el = document.getElementById('methodologySection');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
    };

});
