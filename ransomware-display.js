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
            });
        }

        createGroupCard(group) {
            const card = document.createElement('div');
            card.className = 'ransomware-card';

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
                    
                    ${group.industries && group.industries.length > 0 ? `
                    <div class="ransomware-stat">
                        <span class="stat-label">Target Industries</span>
                        <span class="stat-value">${group.industries.length}</span>
                    </div>
                    ` : ''}
                    
                    ${group.countries && group.countries.length > 0 ? `
                    <div class="ransomware-stat">
                        <span class="stat-label">Countries</span>
                        <span class="stat-value">${group.countries.length}</span>
                    </div>
                    ` : ''}
                </div>
                
                ${industriesHTML}
                
                <button class="view-details-btn" onclick="window.ransomwareDisplay.showDetails('${this.escapeHtml(group.name)}')">
                    View Victims & Details
                </button>
            `;

            return card;
        }

        showDetails(groupName) {
            const group = this.data.groups.find(g => g.name === groupName);
            if (!group) return;

            // Create modal or alert with details
            const victimsText = group.victims
                .slice(0, 5)
                .map(v => `• ${v.name} (${new Date(v.date).toLocaleDateString()})`)
                .join('\n');

            const message = `
🔐 ${group.name} Ransomware Group

📊 Statistics (Last 7 Days):
• Total Victims: ${group.count}
• Trend: ${group.trend === 'up' ? '↑ Increasing' : group.trend === 'down' ? '↓ Decreasing' : '→ Stable'}

🎯 Targeted Industries:
${group.industries.map(i => `• ${i}`).join('\n') || '• Unknown'}

🌍 Countries:
${group.countries.map(c => `• ${c}`).join('\n') || '• Unknown'}

📋 Recent Victims:
${victimsText}

${group.victims.length > 5 ? `\n... and ${group.victims.length - 5} more` : ''}
            `.trim();

            alert(message);

            // TODO: Replace with proper modal in future
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
