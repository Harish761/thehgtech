// Ransomware Tracker Display
// Loads and displays active ransomware campaigns

(function () {
    'use strict';

    class RansomwareDisplay {
        constructor() {
            this.data = null;
            this.initialized = false;
        }

        async initialize() {
            if (this.initialized) return;

            // Wait for DOM
            if (document.readyState === 'loading') {
                document.addEventListener('DOMContentLoaded', () => this.loadData());
            } else {
                await this.loadData();
            }

            this.initialized = true;
        }

        async loadData() {
            try {
                const response = await fetch('ransomware-data.json');
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }

                this.data = await response.json();
                this.render();

                console.log('✅ Ransomware data loaded:', this.data.total_groups, 'groups');
            } catch (error) {
                console.error('❌ Error loading ransomware data:', error);
                this.renderError();
            }
        }

        render() {
            if (!this.data) return;

            // Update stats bar
            this.updateStats();

            // Render group cards
            this.renderGroups();
        }

        updateStats() {
            const totalGroupsEl = document.getElementById('totalRansomwareGroups');
            const totalVictimsEl = document.getElementById('totalRansomwareVictims');

            if (totalGroupsEl) {
                totalGroupsEl.textContent = this.data.total_groups || 0;
            }

            if (totalVictimsEl) {
                totalVictimsEl.textContent = this.data.total_victims || 0;
            }
        }

        renderGroups() {
            const container = document.getElementById('ransomwareGrid');
            if (!container) {
                console.warn('Ransomware grid container not found');
                return;
            }

            container.innerHTML = '';

            if (!this.data.groups || this.data.groups.length === 0) {
                container.innerHTML = '<p style="text-align: center; color: rgba(255,255,255,0.6);">No active ransomware campaigns in the last 7 days.</p>';
                return;
            }

            this.data.groups.forEach(group => {
                const card = this.createGroupCard(group);
                container.appendChild(card);

                // Render chart if daily counts exist
                if (group.daily_counts && group.daily_counts.length > 0) {
                    this.renderTrendChart(group.name, group.daily_counts);
                }
            });

            // Add attribution footer
            const footer = document.createElement('div');
            footer.className = 'ransomware-attribution';
            footer.innerHTML = `
                <p>🔒 Data from Ransomware.live + OSINT (updated hourly)</p>
            `;
            container.parentNode.appendChild(footer);
        }

        createGroupCard(group) {
            const card = document.createElement('div');
            card.className = 'ransomware-card';
            // Make entire card clickable
            card.onclick = (e) => {
                // Prevent click if clicking button
                if (e.target.tagName === 'BUTTON') return;
                this.showDetails(group.name);
            };

            // Trend indicator
            const trendIcon = group.trend === 'up' ? '↑' :
                group.trend === 'down' ? '↓' : '→';
            const trendClass = group.trend || 'stable';
            const trendText = group.trend === 'up' ? `+${group.trend_percentage}%` :
                group.trend === 'down' ? `${group.trend_percentage}%` :
                    'Stable';

            // Industries
            const industriesHTML = group.industries && group.industries.length > 0
                ? `<div class="industries-list">
                     ${group.industries.map(ind =>
                    `<span class="industry-tag">${this.escapeHtml(ind)}</span>`
                ).join('')}
                   </div>`
                : '';

            // Safe ID for chart
            const safeId = group.name.replace(/[^a-zA-Z0-9]/g, '_');

            card.innerHTML = `
                <div class="ransomware-header">
                    <h3>${this.escapeHtml(group.name)}</h3>
                    <div class="victim-count">
                        <span class="number">${group.count}</span>
                        <span class="label">Victims</span>
                    </div>
                </div>
                
                <div class="ransomware-stats">
                    <div class="ransomware-stat">
                        <span class="stat-label">Trend (7d)</span>
                        <span class="trend-indicator ${trendClass}">
                            ${trendIcon} ${trendText}
                        </span>
                    </div>
                    
                    <!-- Trend Chart Container -->
                    <div class="trend-chart-container" style="height: 40px; margin: 10px 0;">
                        <div style="font-size: 0.75rem; color: rgba(255,255,255,0.5); margin-bottom: 3px;">Victim Trend (7 days)</div>
                        <canvas id="chart_${safeId}"></canvas>
                    </div>
                    
                    ${group.industries && group.industries.length > 0 ? `
                    <div class="ransomware-stat">
                        <span class="stat-label">Target Industries</span>
                        <span class="stat-value">${group.industries.length}</span>
                    </div>
                    ` : ''}
                </div>
                
                ${industriesHTML}
                
                <button class="view-details-btn" onclick="event.stopPropagation(); window.ransomwareDisplay.showDetails('${group.name.replace(/'/g, "\\'")}')">
                    View Victims & Details
                </button>
            `;

            return card;
        }

        renderTrendChart(groupName, data) {
            const safeId = groupName.replace(/[^a-zA-Z0-9]/g, '_');
            const ctx = document.getElementById(`chart_${safeId}`);
            if (!ctx) return;

            new Chart(ctx, {
                type: 'line',
                data: {
                    labels: ['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5', 'Day 6', 'Day 7'],
                    datasets: [{
                        data: data,
                        borderColor: '#FF4C4C',
                        borderWidth: 2,
                        pointRadius: 0,
                        fill: false,
                        tension: 0.4
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: { legend: { display: false }, tooltip: { enabled: false } },
                    scales: {
                        x: { display: false },
                        y: { display: false, min: 0 }
                    },
                    animation: false
                }
            });
        }

        showDetails(groupName) {
            const group = this.data.groups.find(g => g.name === groupName);
            if (!group) return;

            // Create modal
            const modal = document.createElement('div');
            modal.className = 'ransomware-modal-overlay';

            const victimsList = group.victims
                .map(v => `
                    <div class="victim-item">
                        <div class="victim-header">
                            <span class="victim-name">${this.escapeHtml(v.name)}</span>
                            <span class="victim-date">${new Date(v.date).toLocaleDateString()}</span>
                        </div>
                        ${v.url ? `<a href="${v.url}" target="_blank" class="victim-link">View Source ↗</a>` : ''}
                    </div>
                `).join('');

            modal.innerHTML = `
                <div class="ransomware-modal">
                    <div class="modal-header">
                        <h2>🔐 ${this.escapeHtml(group.name)}</h2>
                        <button class="close-modal" onclick="this.closest('.ransomware-modal-overlay').remove()">×</button>
                    </div>
                    
                    <div class="modal-content">
                        <div class="modal-stats-grid">
                            <div class="modal-stat">
                                <span class="label">Total Victims (7d)</span>
                                <span class="value">${group.count}</span>
                            </div>
                            <div class="modal-stat">
                                <span class="label">Trend</span>
                                <span class="value ${group.trend}">${group.trend === 'up' ? '↑ Increasing' : '→ Stable'}</span>
                            </div>
                        </div>
                        
                        <div class="modal-actions">
                            <button class="action-btn primary" onclick="window.ransomwareDisplay.findIOCs('${group.name.replace(/'/g, "\\'")}')">
                                🔍 Find IOCs for ${this.escapeHtml(group.name)}
                            </button>
                        </div>

                        <div class="modal-section">
                            <h3>🎯 Targeted Industries</h3>
                            <div class="industries-list">
                                ${group.industries.map(i => `<span class="industry-tag">${this.escapeHtml(i)}</span>`).join('')}
                            </div>
                        </div>

                        <div class="modal-section">
                            <h3>📋 Recent Victims</h3>
                            <div class="victims-list">
                                ${victimsList}
                            </div>
                        </div>
                    </div>
                </div>
            `;

            document.body.appendChild(modal);

            // Close on click outside
            modal.onclick = (e) => {
                if (e.target === modal) modal.remove();
            };
        }

        findIOCs(groupName) {
            // Close modal
            const modal = document.querySelector('.ransomware-modal-overlay');
            if (modal) modal.remove();

            // Switch to All Threats tab
            const allThreatsTab = document.querySelector('.nav-btn[data-tab="all-threats"]');
            if (allThreatsTab) allThreatsTab.click();

            // Set search input
            const searchInput = document.getElementById('searchInput');
            if (searchInput) {
                searchInput.value = groupName;
                // Trigger search event
                searchInput.dispatchEvent(new Event('input'));
            }

            // Scroll to filters
            const filters = document.querySelector('.advanced-filters');
            if (filters) filters.scrollIntoView({ behavior: 'smooth' });
        }

        renderError() {
            const container = document.getElementById('ransomwareGrid');
            if (!container) return;

            container.innerHTML = `
                <div class="ransomware-error">
                    <h3>⚠️ Unable to Load Ransomware Data</h3>
                    <p>Please try refreshing the page or check back later.</p>
                </div>
            `;
        }

        escapeHtml(text) {
            const div = document.createElement('div');
            div.textContent = text;
            return div.innerHTML;
        }
    }

    // Create global instance
    window.ransomwareDisplay = new RansomwareDisplay();
    window.ransomwareDisplay.initialize();

})();
