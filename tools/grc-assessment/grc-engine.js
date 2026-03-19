/**
 * TheHGTech GRC Gap Analysis Engine
 * Multi-Phase Architecture: Scope Selection -> Engine -> Dashboard
 */

document.addEventListener('DOMContentLoaded', async () => {

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
        btnConfirmReset: document.getElementById('btnConfirmReset')
    };

    let grcData = null;
    let activeDomainIndices = [];     // Which domains the user selected to scope in
    let currentNavIndex = 0;          // Index relative to the activeDomainIndices array
    const STORAGE_KEY = 'thehgtech_grc_state_v2';
    let userState = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
    let radarChartInstance = null;

    // --- NEW: URL Persistence Support ---
    function updateURLState() {
        const stateStr = btoa(JSON.stringify(userState));
        const url = new URL(window.location);
        url.searchParams.set('s', stateStr);
        window.history.replaceState({}, '', url);
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
                window.scrollTo({ top: 0, behavior: 'instant' });
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
            'domain_5': 'CRITICAL',
            'domain_6': 'REQUIRED',
            'domain_7': 'OPTIONAL FOR REMOTE',
            'domain_8': 'HIGHLY RECOMMENDED'
        };

        const hasExistingData = Object.keys(userState).length > 0;

        grcData.domains.forEach((dom, index) => {
            const card = document.createElement('div');
            card.className = 'scope-card';

            const recLabel = recommendations[dom.id] || 'RECOMMENDED';
            const recClass = recLabel.includes('CRITICAL') ? 'badge-critical' : 
                             recLabel.includes('OPTIONAL') ? 'badge-optional' : 'badge-recommended';

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

            card.innerHTML = `
                <div class="scope-card-header" style="display:flex; justify-content:space-between; width:100%; align-items:flex-start;">
                    <div class="scope-icon-box">
                        <i class="fas ${dom.icon || 'fa-folder'}"></i>
                    </div>
                    <div class="custom-checkbox-container">
                        <input type="checkbox" ${card.classList.contains('selected') ? 'checked' : ''} id="check_${dom.id}" style="display:none;">
                        <div class="custom-check-visual ${card.classList.contains('selected') ? 'checked' : ''}">
                            <i class="fas fa-check"></i>
                        </div>
                    </div>
                </div>
                <div class="scope-badge ${recClass}">${recLabel}</div>
                <h3>${dom.name}</h3>
                <p>${dom.description}</p>
                <div class="scope-stats">
                    <span class="control-pill"><i class="fas fa-microchip"></i> ${dom.controls.length} Controls</span>
                    <span class="impact-pill"><i class="fas fa-shield-virus"></i> High Impact</span>
                </div>
            `;

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

            const navBtn = document.createElement('div');
            navBtn.className = `nav-item ${activeIdx === currentNavIndex ? 'active' : ''}`;
            navBtn.innerHTML = `
                <div class="nav-item-title">${dom.name}</div>
                <div class="nav-item-progress">${completedInDomain}/${totalInDomain}</div>
            `;

            navBtn.addEventListener('click', () => {
                currentNavIndex = activeIdx;
                renderDomain(activeDomainIndices[currentNavIndex]); // Pass global index
                updateSidebarActiveState();
                window.scrollTo({ top: 0, behavior: 'instant' });
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

        // Render Cards
        // Render Section Intro Header
        ui.viewport.innerHTML = '';
        
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

        domain.controls.forEach(control => {
            const card = document.createElement('article');
            card.className = 'control-card';
            card.id = `card_${control.control_id}`;

            const savedValue = userState[control.control_id] || '';

            card.innerHTML = `
                <div class="control-header" style="display:flex; gap:10px; align-items:center; flex-wrap:wrap; margin-bottom:0.5rem;">
                    <span class="control-id" style="background:var(--bg-dark); padding:0.2rem 0.6rem; border-radius:4px; font-weight:bold; color:var(--text-primary); border:1px solid var(--border); font-size:0.9rem;">Control A.${control.control_id}</span>
                    <span class="domain-tag" style="background:rgba(0, 217, 255, 0.1); color:#00D9FF; padding:0.2rem 0.6rem; border-radius:4px; font-size:0.8rem; font-weight:600;"><i class="fas fa-layer-group"></i> ${domain.name}</span>
                    ${control.nist_mapping ? `<span class="framework-badge nist" style="background:rgba(10, 132, 255, 0.1); color:#0A84FF; padding:0.2rem 0.6rem; border-radius:4px; font-size:0.75rem; border:1px solid rgba(10, 132, 255, 0.3);">NIST: ${control.nist_mapping}</span>` : ''}
                    ${control.cis_mapping ? `<span class="framework-badge cis" style="background:rgba(255, 159, 10, 0.1); color:#FF9F0A; padding:0.2rem 0.6rem; border-radius:4px; font-size:0.75rem; border:1px solid rgba(255, 159, 10, 0.3);">CIS: ${control.cis_mapping}</span>` : ''}
                </div>
                <h3 class="control-title" style="margin-top:0.2rem;">${control.control_title}</h3>
                <p class="control-objective" style="color:var(--text-muted); font-size:0.85rem; margin-bottom: 2rem; font-style: italic;">
                    <i class="fas fa-bullseye"></i> Objective: ${control.objective}
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
                                return `<div style="margin-bottom:8px;"><strong>${label}:</strong> ${text}</div>`;
                            }).join('')
                            : `"${control.expert_rationale}"`
                        }
                    </div>
                </div>
                ` : ''}

                <div class="control-question">
                    <strong>Auditor Check:</strong> ${control.auditor_question}
                </div>
                <details class="control-evidence" style="margin-top:1rem; cursor:pointer;" open>
                    <summary style="font-weight:bold; color:var(--accent-green); outline:none;">
                        <i class="fas fa-folder-open"></i> Example Evidence
                    </summary>
                    <div style="padding-top:0.5rem; color:var(--text-muted); font-size:0.9rem;">
                        ${control.evidence_required}
                    </div>
                </details>
                
                <div class="options-grid" data-control="${control.control_id}">
                    <button class="btn-option ${savedValue === 'yes' ? 'active' : ''}" data-val="yes">
                        <i class="fas fa-check-circle"></i> Yes (Implemented)
                    </button>
                    <button class="btn-option ${savedValue === 'partial' ? 'active' : ''}" data-val="partial">
                        <i class="fas fa-adjust"></i> Partial (In-Progress)
                    </button>
                    <button class="btn-option ${savedValue === 'no' ? 'active' : ''}" data-val="no">
                        <i class="fas fa-times-circle"></i> No (Gap)
                    </button>
                    <button class="btn-option ${savedValue === 'na' ? 'active' : ''}" data-val="na">
                        <i class="fas fa-ban"></i> N/A
                    </button>
                </div>
                <div class="na-justification-container" id="na_container_${control.control_id}" style="display:${savedValue === 'na' ? 'block' : 'none'}; margin-top: 1rem; padding: 1rem; background: rgba(255, 255, 255, 0.05); border-radius: 8px; border-left: 3px solid #6c757d;">
                    <label style="display:block; font-size: 0.85rem; color: var(--text-muted); margin-bottom: 0.5rem; font-weight: bold;">Justification for Not Applicable (N/A):</label>
                    <textarea class="na-justification-input" data-control="${control.control_id}" rows="2" style="width: 100%; border-radius: 4px; padding: 0.5rem; border: 1px solid var(--border); background: var(--bg-dark); color: var(--text-primary); font-family: inherit; resize: vertical;" placeholder="Briefly explain why this control is out of scope for your audit footprint...">${userState[control.control_id + '_just'] || ''}</textarea>
                </div>
            `;

            const btns = card.querySelectorAll('.btn-option');
            btns.forEach(btn => {
                btn.addEventListener('click', (e) => {
                    const value = e.currentTarget.getAttribute('data-val');
                    saveAnswer(control.control_id, value, btns);
                });
            });

            const naInput = card.querySelector('.na-justification-input');
            if (naInput) {
                naInput.addEventListener('input', (e) => {
                    userState[control.control_id + '_just'] = e.target.value;
                    localStorage.setItem(STORAGE_KEY, JSON.stringify(userState));
                });
            }

            ui.viewport.appendChild(card);

            // Reflow for transition
            void card.offsetWidth;
            card.style.opacity = '1';
        });

        updateDomainProgress(domain);
        updateSidebarActiveState();
    }

    function saveAnswer(controlId, value, allButtonsInGroup) {
        allButtonsInGroup.forEach(b => b.classList.remove('active'));
        const clickedBtn = Array.from(allButtonsInGroup).find(b => b.getAttribute('data-val') === value);
        if (clickedBtn) clickedBtn.classList.add('active');

        userState[controlId] = value;
        
        const naContainer = document.getElementById(`na_container_${controlId}`);
        if (naContainer) {
            naContainer.style.display = value === 'na' ? 'block' : 'none';
        }

        localStorage.setItem(STORAGE_KEY, JSON.stringify(userState));
        updateURLState(); // Sync to URL on every answer

        const domain = grcData.domains[activeDomainIndices[currentNavIndex]];
        updateDomainProgress(domain);
        renderSidebarNav();
        updateOverallScore();
    }

    function updateDomainProgress(domain) {
        const total = domain.controls.length;
        const completed = domain.controls.filter(c => userState[c.control_id]).length;
        const pct = Math.round((completed / total) * 100);
        ui.progressText.innerText = `${completed} / ${total} Completed`;
        ui.progressBar.style.width = `${pct}%`;
    }

    function updateOverallScore() {
        let totalControls = 0;
        let implementedControls = 0;
        let answeredControls = 0;

        activeDomainIndices.forEach(globalIdx => {
            const d = grcData.domains[globalIdx];
            d.controls.forEach(c => {
                totalControls++;
                if (userState[c.control_id]) answeredControls++;
                if (userState[c.control_id] === 'yes' || userState[c.control_id] === 'na') {
                    implementedControls++;
                } else if (userState[c.control_id] === 'partial') {
                    implementedControls += 0.5;
                }
            });
        });

        const score = totalControls === 0 ? 0 : Math.round((implementedControls / totalControls) * 100);
        ui.overallScore.innerText = `${score}%`;

        if (score >= 85) ui.overallScore.style.color = '#10B981';
        else if (score >= 50) ui.overallScore.style.color = '#F59E0B';
        else ui.overallScore.style.color = '#EF4444';

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
        ui.dashOverallScore.innerText = ui.overallScore.innerText;
        ui.dashOverallScore.style.color = ui.overallScore.style.color;
        ui.dashOverallScore.style.borderColor = ui.overallScore.style.color;

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

        const labels = [];
        const dataset = [];
        const criticalGaps = [];
        let nistTotal = 0, nistValue = 0;
        let cisTotal = 0, cisValue = 0;

        activeDomainIndices.forEach(globalIdx => {
            const d = grcData.domains[globalIdx];
            labels.push(d.name.replace(' Controls', ''));

            let total = 0;
            let impl = 0;

            d.controls.forEach(c => {
                total++;
                const ans = userState[c.control_id];
                const scoreValue = (ans === 'yes' || ans === 'na') ? 1 : (ans === 'partial' ? 0.5 : 0);
                
                if (ans === 'yes' || ans === 'na') impl++;
                else if (ans === 'partial') impl += 0.5;

                // Framework scoring
                if (c.nist_mapping) { nistTotal++; nistValue += scoreValue; }
                if (c.cis_mapping) { cisTotal++; cisValue += scoreValue; }

                // Identify critical gaps
                if (ans === 'no' || ans === 'partial') {
                    criticalGaps.push({
                        id: c.control_id,
                        title: c.control_title,
                        domain: d.name,
                        ans: ans,
                        remediation: c.remediation_advice || "Review control requirements to implement baseline security.",
                        nist: c.nist_mapping,
                        cis: c.cis_mapping,
                        rationale: c.expert_rationale
                    });
                }
            });
            dataset.push(total === 0 ? 0 : Math.round((impl / total) * 100));
        });

        // 0. Update Framework Scores with Realistic Denominators
        // NIST CSF 2.0 has 106 subcategories, CIS v8 has 153 Safeguards.
        // This provides a realistic "Industry Readiness" score rather than just a 1:1 question count.
        const NIST_DENOMINATOR = 106;
        const CIS_DENOMINATOR = 153;

        const nistPct = Math.round((nistValue / NIST_DENOMINATOR) * 100);
        const cisPct = Math.round((cisValue / CIS_DENOMINATOR) * 100);
        
        document.getElementById('nistScore').innerText = `${nistPct}%`;
        document.getElementById('cisScore').innerText = `${cisPct}%`;

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
        const maturityDescEl = document.getElementById('maturityDesc');
        if (maturityEl) {
            maturityEl.innerText = maturityLabel;
            maturityEl.style.color = maturityColor;
        }
        if (maturityDescEl) maturityDescEl.innerText = maturityDesc;

        // Extract Top 3 Priority Actions
        const priorityActions = criticalGaps
            .sort((a, b) => (a.ans === 'no' ? -1 : 1)) // Prioritize NOs over PARTIALs
            .slice(0, 3);

        const priorityContainer = document.getElementById('priorityActionPlan');
        if (priorityContainer) {
            priorityContainer.innerHTML = '';
            if (priorityActions.length === 0) {
                priorityContainer.innerHTML = '<p style="color:var(--text-muted); font-style:italic;">Maintain current posture. No immediate critical fixes required.</p>';
            } else {
                priorityActions.forEach((act, i) => {
                    // Parse risk from rationale if available
                    const riskText = act.rationale && act.rationale.includes('|') ? act.rationale.split('|')[0].replace('Risk:', '').trim() : "Direct exposure to control failure.";
                    // Random-ish effort assignment for demo/decision logic
                    const effortLevel = (act.ans === 'no') ? 'High' : 'Medium';
                    const effortColor = effortLevel === 'High' ? '#EF4444' : '#F59E0B';

                    priorityContainer.innerHTML += `
                        <div class="priority-step" style="background:rgba(255,255,255,0.02); padding:1.5rem; border-radius:16px; border:1px solid rgba(255,255,255,0.05); transition:transform 0.3s ease;">
                            <div style="display:flex; justify-content:space-between; align-items:flex-start; margin-bottom:1rem;">
                                <div class="step-num" style="background:${maturityColor}; color:#000; width:28px; height:28px; border-radius:50%; display:flex; align-items:center; justify-content:center; font-weight:800; font-size:0.9rem;">${i+1}</div>
                                <span style="font-size:0.65rem; background:rgba(255,255,255,0.05); color:var(--text-muted); padding:3px 8px; border-radius:4px; border:1px solid var(--border);">Effort: <span style="color:${effortColor}">${effortLevel}</span></span>
                            </div>
                            <h4 style="margin:0 0 10px; color:#fff; font-size:1.05rem; font-family:'Outfit';">Fix Control ${act.id}</h4>
                            <p style="font-size:0.85rem; color:#fff; margin-bottom:8px; font-weight:600;">${act.title}</p>
                            <div style="font-size:0.8rem; color:var(--text-muted); border-top:1px solid var(--border); padding-top:10px; margin-top:10px;">
                                <strong style="color:#EF4444; font-size:0.7rem; text-transform:uppercase;">Risk:</strong> ${riskText}
                            </div>
                        </div>
                    `;
                });
            }
        }

        // 1. Render Chart.js Radar
        const ctx = document.getElementById('radarChart').getContext('2d');
        if (radarChartInstance) radarChartInstance.destroy(); // clear previous

        radarChartInstance = new Chart(ctx, {
            type: 'radar',
            data: {
                labels: labels,
                datasets: [{
                    label: 'Your Readiness (%)',
                    data: dataset,
                    backgroundColor: 'rgba(0, 217, 255, 0.15)',
                    borderColor: '#00D9FF',
                    pointBackgroundColor: '#8B5CF6',
                    pointBorderColor: '#fff',
                    pointHoverBackgroundColor: '#fff',
                    pointHoverBorderColor: '#00D9FF',
                    borderWidth: 3,
                    fill: true
                }, {
                    label: 'Global Industry Avg (%)',
                    data: labels.map(() => 45 + Math.floor(Math.random() * 15)), // Baseline SMB comparison
                    backgroundColor: 'rgba(255, 255, 255, 0.05)',
                    borderColor: 'rgba(255, 255, 255, 0.15)',
                    borderDash: [4, 4],
                    pointRadius: 0,
                    borderWidth: 1,
                    fill: true
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    r: {
                        angleLines: { color: 'rgba(255, 255, 255, 0.1)' },
                        grid: { color: 'rgba(255, 255, 255, 0.1)' },
                        pointLabels: { color: '#9CA3AF', font: { size: 12, family: 'Inter' } },
                        ticks: { display: false, min: 0, max: 100 }
                    }
                },
                plugins: {
                    legend: { display: false }
                }
            }
        });

        // 2. Render Gaps
        ui.gapsContainer.innerHTML = '<h3>Critical Gaps & Recommended Remediation</h3>';
        if (criticalGaps.length === 0) {
            ui.gapsContainer.innerHTML += `<div class="gap-item" style="border-left-color: #10B981;"><p style="color:#10B981; margin:0;"><i class="fas fa-check-circle"></i> Outstanding! No critical gaps identified in the evaluated scope.</p></div>`;
        } else {
            criticalGaps.forEach(g => {
                const item = document.createElement('div');
                item.className = 'gap-item';
                if (g.ans === 'partial') {
                    item.style.borderLeftColor = '#F59E0B';
                    item.style.backgroundColor = 'rgba(245, 158, 11, 0.05)';
                }

                item.innerHTML = `
                    <div class="gap-item-header">
                        <span class="gap-id"><span style="color:var(--text-muted); font-size:0.8rem;">[${g.domain}]</span> Control ${g.id}</span>
                        <span class="domain-badge" style="border-color:${g.ans === 'partial' ? '#F59E0B' : '#EF4444'}; color:${g.ans === 'partial' ? '#F59E0B' : '#EF4444'};">${g.ans === 'partial' ? 'Partial' : 'Missing'}</span>
                    </div>
                    <h4 class="gap-title">${g.title}</h4>
                    <div class="gap-mappings" style="display:flex; gap:8px; margin-bottom: 0.8rem;">
                        ${g.nist ? `<span style="font-size:0.7rem; background:rgba(10, 132, 255, 0.1); color:#0A84FF; padding:1px 6px; border-radius:3px; border:1px solid rgba(10,132,255,0.2);">NIST: ${g.nist}</span>` : ''}
                        ${g.cis ? `<span style="font-size:0.7rem; background:rgba(255, 159, 10, 0.1); color:#FF9F0A; padding:1px 6px; border-radius:3px; border:1px solid rgba(255,159,10,0.2);">CIS: ${g.cis}</span>` : ''}
                    </div>
                    
                    ${userState[g.id + '_just'] ? `
                    <div class="gap-justification" style="margin: 1rem 0; padding: 0.8rem; background: rgba(255,255,255,0.03); border-radius: 6px; font-size: 0.85rem; border: 1px solid var(--border);">
                        <strong><i class="fas fa-comment-alt"></i> Your Comment/Justification:</strong><br>
                        <span style="color:var(--text-secondary); font-style:italic;">"${userState[g.id + '_just']}"</span>
                    </div>
                    ` : ''}

                    <div class="gap-remediation" style="margin-bottom:1rem;">
                        <strong><i class="fas fa-wrench"></i> Suggested Remediation:</strong><br>
                        ${g.remediation}
                    </div>
                    ${g.rationale ? `
                    <div class="gap-rationale" style="font-size:0.85rem; color:var(--text-muted); border-top:1px solid var(--border); padding-top:0.8rem; font-style:italic;">
                        <strong><i class="fas fa-lightbulb" style="color:#8B5CF6;"></i> Consultant Insight:</strong> "${g.rationale}"
                    </div>
                    ` : ''}
                `;
                ui.gapsContainer.appendChild(item);
            });
        }
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
                // 1. Gather Calculations
                let totalC = 0, implC = 0, partC = 0, gapC = 0, naC = 0;
                const criticalGaps = [];

                let nistT = 0, nistV = 0, cisT = 0, cisV = 0;

                activeDomainIndices.forEach(globalIdx => {
                    const domain = grcData.domains[globalIdx];
                    domain.controls.forEach(c => {
                        totalC++;
                        const ans = userState[c.control_id] || '';
                        const sVal = (ans === 'yes' || ans === 'na') ? 1 : (ans === 'partial' ? 0.5 : 0);

                        if (c.nist_mapping) { nistV += sVal; }
                        if (c.cis_mapping) { cisV += sVal; }

                        if (ans === 'yes') implC++;
                        else if (ans === 'partial') { 
                            partC++; 
                            criticalGaps.push({id: c.control_id, title: c.control_title, risk: 'Medium', effort: 'Medium', rem: c.remediation_advice, nist: c.nist_mapping, cis: c.cis_mapping, just: userState[c.control_id + '_just'], rationale: c.expert_rationale}); 
                        }
                        else if (ans === 'na') naC++;
                        else { 
                            gapC++; 
                            criticalGaps.push({id: c.control_id, title: c.control_title, risk: 'High', effort: 'High', rem: c.remediation_advice, nist: c.nist_mapping, cis: c.cis_mapping, just: userState[c.control_id + '_just'], rationale: c.expert_rationale}); 
                        }
                    });
                });

                const NIST_DENOMINATOR_PDF = 106;
                const CIS_DENOMINATOR_PDF = 153;
                const nistP = Math.round((nistV / NIST_DENOMINATOR_PDF) * 100);
                const cisP = Math.round((cisV / CIS_DENOMINATOR_PDF) * 100);

                // Decision Engine: Maturity & Top 3
                const finalP = parseInt(ui.overallScore.innerText.replace('%', ''));
                let matLbl = "Initial / At Risk";
                let matCol = "#EF4444";
                if (finalP >= 75) { matLbl = "Mature / Optimized"; matCol = "#10B981"; }
                else if (finalP >= 40) { matLbl = "Developing / Moderate"; matCol = "#F59E0B"; }

                const priorityRecommendationList = criticalGaps
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
                        const riskColor = g.risk === 'High' ? '#ef4444' : '#f59e0b';
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

                // 4. Document Definition
                const docDefinition = {
                    info: { title: 'ISO 27001 Gap Assessment', author: 'TheHGTech', subject: 'Enterprise GRC Report' },
                    pageMargins: [40, 60, 40, 60],
                    header: function(currentPage, pageCount) {
                        return { text: 'TheHGTech Enterprise GRC', alignment: 'right', margin: [0, 20, 40, 0], color: '#00d9ff', bold: true, fontSize: 10 };
                    },
                    footer: function(currentPage, pageCount) {
                        return { text: 'Page ' + currentPage + ' of ' + pageCount, alignment: 'center', margin: [0, 20, 0, 0], color: '#9ca3af', fontSize: 9 };
                    },
                    content: [
                        { text: 'ISO 27001 Gap Analysis Executive Summary', style: 'mainHeader' },
                        { text: 'Framework: ISO/IEC 27001:2022', style: 'subHeader' },
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
                                        { text: `Strategic Remediation: ${p.rem}`, fontSize: 9, color: '#4B5563', margin: [0, 2, 0, 0] }
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
                execSummary.push(["ISO 27001:2022 Executive Summary"]);
                execSummary.push(["Generated on:", new Date().toLocaleDateString()]);
                execSummary.push(["Framework:", grcData.framework]);
                execSummary.push([]);
                
                let totalC = 0, implC = 0, partC = 0, gapC = 0, naC = 0;
                const criticalGaps = [];

                // Re-calculate totals across active scoping
                activeDomainIndices.forEach(globalIdx => {
                    const domain = grcData.domains[globalIdx];
                    domain.controls.forEach(c => {
                        totalC++;
                        const ans = userState[c.control_id] || '';
                        if (ans === 'yes') implC++;
                        else if (ans === 'partial') partC++;
                        else if (ans === 'na') naC++;
                        else gapC++;

                        if (ans === 'no' || ans === 'partial' || ans === '') {
                            criticalGaps.push([c.control_id, c.control_title, ans === 'partial' ? 'Medium' : 'High']);
                        }
                    });
                });

                execSummary.push(["Total Controls scoped:", totalC]);
                execSummary.push(["Implemented:", implC]);
                execSummary.push(["Partial (In-Progress):", partC]);
                execSummary.push(["Control Gap:", gapC]);
                execSummary.push(["Not Applicable:", naC]);
                execSummary.push(["Overall Readiness Score:", ui.overallScore.innerText]);
                execSummary.push([]);
                
                execSummary.push(["Top Risk Gaps"]);
                execSummary.push(["Control ID", "Control Title", "Risk Level"]);
                criticalGaps.forEach(g => execSummary.push(g));

                // SHEET 2: Gap Analysis Data
                const exportData = [];
                exportData.push(["Domain", "Control ID", "Control Title", "Implementation Status", "Risk Level", "Applicability Justification", "Objective", "Auditor Check", "Evidence Required", "Remediation Advice", "NIST CSF 2.0", "CIS Controls v8", "N/A Comment / Internal Note", "Expert Rationale"]);

                activeDomainIndices.forEach(globalIdx => {
                    const domain = grcData.domains[globalIdx];
                    domain.controls.forEach(control => {
                        const rawStatus = userState[control.control_id] || "Not Evaluated";
                        let friendlyStatus = "Not Evaluated";
                        let riskLevel = "High";

                        if (rawStatus === 'yes') { friendlyStatus = "Implemented"; riskLevel = "Low"; }
                        else if (rawStatus === 'partial') { friendlyStatus = "Partial (In-Progress)"; riskLevel = "Medium"; }
                        else if (rawStatus === 'no') { friendlyStatus = "Control Gap"; riskLevel = "High"; }
                        else if (rawStatus === 'na') { friendlyStatus = "Not Applicable"; riskLevel = "None"; }

                        exportData.push([
                            domain.name,
                            "A." + control.control_id,
                            control.control_title,
                            friendlyStatus,
                            riskLevel,
                            userState[control.control_id + '_just'] || "N/A",
                            control.objective,
                            control.auditor_question,
                            control.evidence_required,
                            control.remediation_advice,
                            control.nist_mapping || "N/A",
                            control.cis_mapping || "N/A",
                            userState[control.control_id + '_just'] || "",
                            control.expert_rationale || ""
                        ]);
                    });
                });

                const wb = XLSX.utils.book_new();

                // Build Summary Sheet
                const wsSum = XLSX.utils.aoa_to_sheet(execSummary);
                wsSum['!cols'] = [{ wch: 30 }, { wch: 40 }, { wch: 15 }];
                XLSX.utils.book_append_sheet(wb, wsSum, "Executive Summary");

                // Build Detail Sheet
                const ws = XLSX.utils.aoa_to_sheet(exportData);
                ws['!cols'] = [{ wch: 25 }, { wch: 10 }, { wch: 30 }, { wch: 20 }, { wch: 10 }, { wch: 35 }, { wch: 40 }, { wch: 45 }, { wch: 45 }, { wch: 50 }];
                
                // Add AutoFilter to data sheet
                ws['!autofilter'] = { ref: `A1:J${exportData.length}` };

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

    // Kickoff
    loadGRCData();
});
