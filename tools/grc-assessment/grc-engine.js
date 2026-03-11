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
        btnFinishDashboard: document.getElementById('btnFinishAssessment'),

        // Dashboard elements
        btnBackToEngine: document.getElementById('btnBackToEngine'),
        btnPdfExport: document.getElementById('btnPdfExport'),
        btnFinalExcelExport: document.getElementById('btnFinalExcelExport'),
        dashDate: document.getElementById('dashDate'),
        dashOverallScore: document.getElementById('dashOverallScore'),
        gapsContainer: document.getElementById('gapsContainer'),
        printableDashboard: document.getElementById('printableDashboard')
    };

    let grcData = null;
    let activeDomainIndices = [];     // Which domains the user selected to scope in
    let currentNavIndex = 0;          // Index relative to the activeDomainIndices array
    const STORAGE_KEY = 'thehgtech_grc_state_v2'; // Changed key due to data structure upgrade

    let userState = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
    let radarChartInstance = null;

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

        // Check if there are existing answers to auto-select scopes (if a user refreshes)
        const hasExistingData = Object.keys(userState).length > 0;

        grcData.domains.forEach((dom, index) => {
            const card = document.createElement('div');
            card.className = 'scope-card';

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
                <div style="display:flex; justify-content:space-between; width:100%; align-items:center;">
                    <i class="fas ${dom.icon || 'fa-folder'}"></i>
                    <div class="custom-checkbox" style="width:20px; height:20px; border-radius:50%; border:2px solid var(--border); ${card.classList.contains('selected') ? 'background:var(--accent-green); border-color:var(--accent-green);' : ''}"></div>
                </div>
                <h3>${dom.name}</h3>
                <p>${dom.description}</p>
                <div style="font-size:0.8rem; color:var(--text-muted); margin-top:auto;"><span style="color:var(--accent-cyan); font-weight:bold;">${dom.controls.length}</span> Controls</div>
            `;

            card.addEventListener('click', () => {
                card.classList.toggle('selected');
                const checkbox = card.querySelector('.custom-checkbox');
                if (card.classList.contains('selected')) {
                    if (!activeDomainIndices.includes(index)) activeDomainIndices.push(index);
                    checkbox.style.background = 'var(--accent-green)';
                    checkbox.style.borderColor = 'var(--accent-green)';
                } else {
                    activeDomainIndices = activeDomainIndices.filter(i => i !== index);
                    checkbox.style.background = 'transparent';
                    checkbox.style.borderColor = 'var(--border)';
                }

                // Allow start if at least 1 domain selected
                ui.btnStartAssess.disabled = activeDomainIndices.length === 0;
            });

            ui.scopeGrid.appendChild(card);
        });

        ui.btnStartAssess.disabled = activeDomainIndices.length === 0;

        ui.btnStartAssess.addEventListener('click', () => {
            activeDomainIndices.sort(); // Ensure chronological order mapping
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
        renderDomain(currentNavIndex);
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
                renderDomain(currentNavIndex);
            });

            ui.domainNav.appendChild(navBtn);
        });
    }

    function renderDomain(navIndex) {
        const globalIndex = activeDomainIndices[navIndex];
        const domain = grcData.domains[globalIndex];

        // Update Headers
        const cleanDomainId = domain.id.replace('domain_', '');
        ui.domainBadge.innerText = `Domain ${cleanDomainId}`;
        ui.domainTitle.innerText = domain.name;

        // Render Cards
        ui.viewport.innerHTML = '';
        domain.controls.forEach(control => {
            const card = document.createElement('article');
            card.className = 'control-card';
            card.id = `card_${control.control_id}`;

            const savedValue = userState[control.control_id] || '';

            card.innerHTML = `
                <div class="control-header" style="display:flex; gap:10px; align-items:center; flex-wrap:wrap; margin-bottom:0.5rem;">
                    <span class="control-id" style="background:var(--bg-dark); padding:0.2rem 0.6rem; border-radius:4px; font-weight:bold; color:var(--text-primary); border:1px solid var(--border); font-size:0.9rem;">Control A.${control.control_id}</span>
                    <span class="domain-tag" style="background:rgba(0, 217, 255, 0.1); color:#00D9FF; padding:0.2rem 0.6rem; border-radius:4px; font-size:0.8rem; font-weight:600;"><i class="fas fa-layer-group"></i> ${domain.name}</span>
                </div>
                <h3 class="control-title" style="margin-top:0.2rem;">${control.control_title}</h3>
                <p class="control-objective" style="color:var(--text-muted); font-size:0.85rem; margin-bottom: 2rem; font-style: italic;">
                    <i class="fas fa-bullseye"></i> Objective: ${control.objective}
                </p>
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
            `;

            const btns = card.querySelectorAll('.btn-option');
            btns.forEach(btn => {
                btn.addEventListener('click', (e) => {
                    const value = e.currentTarget.getAttribute('data-val');
                    saveAnswer(control.control_id, value, btns);
                });
            });
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
        localStorage.setItem(STORAGE_KEY, JSON.stringify(userState));

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

        activeDomainIndices.forEach(globalIdx => {
            const d = grcData.domains[globalIdx];
            d.controls.forEach(c => {
                totalControls++;
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

        if (Object.keys(userState).length > 0) {
            ui.btnExportDraft.removeAttribute('disabled');
            ui.btnFinishDashboard.style.display = 'inline-block';
        } else {
            ui.btnExportDraft.setAttribute('disabled', 'true');
            ui.btnFinishDashboard.style.display = 'none';
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

        generateDashboard();
    });

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

        const labels = [];
        const dataset = [];
        const criticalGaps = [];

        activeDomainIndices.forEach(globalIdx => {
            const d = grcData.domains[globalIdx];
            labels.push(d.name.replace(' Controls', ''));

            let total = 0;
            let impl = 0;

            d.controls.forEach(c => {
                total++;
                const ans = userState[c.control_id];
                if (ans === 'yes' || ans === 'na') impl++;
                else if (ans === 'partial') impl += 0.5;

                // Identify critical gaps
                if (ans === 'no' || ans === 'partial') {
                    criticalGaps.push({
                        id: c.control_id,
                        title: c.control_title,
                        domain: d.name,
                        ans: ans,
                        remediation: c.remediation_advice || "Review control requirements to implement baseline security."
                    });
                }
            });
            dataset.push(total === 0 ? 0 : Math.round((impl / total) * 100));
        });

        // 1. Render Chart.js Radar
        const ctx = document.getElementById('radarChart').getContext('2d');
        if (radarChartInstance) radarChartInstance.destroy(); // clear previous

        radarChartInstance = new Chart(ctx, {
            type: 'radar',
            data: {
                labels: labels,
                datasets: [{
                    label: 'Domain Readiness (%)',
                    data: dataset,
                    backgroundColor: 'rgba(0, 217, 255, 0.2)',
                    borderColor: '#00D9FF',
                    pointBackgroundColor: '#8B5CF6',
                    pointBorderColor: '#fff',
                    pointHoverBackgroundColor: '#fff',
                    pointHoverBorderColor: '#00D9FF'
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
                    <p style="margin: 0.5rem 0 1rem; color: var(--text-muted); font-size:0.9rem;">Requires immediate action to meet conceptual compliance.</p>
                    <div class="gap-remediation">
                        <strong><i class="fas fa-wrench"></i> Suggested Remediation:</strong><br>
                        ${g.remediation}
                    </div>
                `;
                ui.gapsContainer.appendChild(item);
            });
        }
    }

    // ==========================================
    // PHASE 4/5: EXPORT CAPABILITIES
    // ==========================================

    // PDF Export
    ui.btnPdfExport.addEventListener('click', () => {
        const originalText = ui.btnPdfExport.innerHTML;
        ui.btnPdfExport.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Generating PDF...';
        ui.btnPdfExport.disabled = true;

        // Temporarily reveal branding for the PDF and force light mode to avoid black PDF text issues
        document.querySelector('.pdf-branding').style.display = 'block';
        const wasLightMode = document.body.classList.contains('light-mode');
        document.body.classList.add('light-mode');

        const element = document.getElementById('printableDashboard');
        const opt = {
            margin: 0.5,
            filename: 'ISO27001_Gap_Assessment_' + new Date().toISOString().split('T')[0] + '.pdf',
            image: { type: 'jpeg', quality: 0.98 },
            html2canvas: { scale: 2, useCORS: true, backgroundColor: '#ffffff' },
            jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
        };

        // Delay to allow DOM update
        setTimeout(() => {
            html2pdf().set(opt).from(element).save().then(() => {
                document.querySelector('.pdf-branding').style.display = 'none';
                if (!wasLightMode) document.body.classList.remove('light-mode');
                ui.btnPdfExport.innerHTML = originalText;
                ui.btnPdfExport.disabled = false;
            });
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
                exportData.push(["Domain", "Control ID", "Control Title", "Implementation Status", "Risk Level", "Objective", "Auditor Check", "Evidence Required", "Remediation Advice"]);

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
                            control.objective,
                            control.auditor_question,
                            control.evidence_required,
                            control.remediation_advice || "Review mapping and implement process"
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
                ws['!cols'] = [{ wch: 25 }, { wch: 10 }, { wch: 30 }, { wch: 20 }, { wch: 10 }, { wch: 40 }, { wch: 45 }, { wch: 45 }, { wch: 50 }];
                
                // Add AutoFilter to data sheet
                ws['!autofilter'] = { ref: `A1:I${exportData.length}` };

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

    // Kickoff
    loadGRCData();
});
