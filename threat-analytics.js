// Comprehensive Threat Intelligence Analytics
// Calculates metrics and generates professional analytics dashboard

function generateComprehensiveAnalytics() {
    console.log('Generating comprehensive analytics...');

    if (!window.threatIntelData || !window.threatIntelData.vendors) {
        console.log('No threat data available for analytics');
        return;
    }

    const metrics = calculateThreatMetrics();
    updateAnalyticsDisplay(metrics);
}

function calculateThreatMetrics() {
    const data = window.threatIntelData;
    const metrics = {
        iocTypes: { urls: 0, hashes: 0, ips: 0, networks: 0 },
        severity: { critical: 0, high: 0, medium: 0, low: 0 },
        vendors: {},
        attackVectors: { phishing: 0, malware: 0, network: 0, c2: 0 },
        campaigns: {},
        freshness: { last6h: 0, last12h: 0, last24h: 0 },
        totalIOCs: 0
    };

    // Calculate from vendor stats (IOCs are in R2, not loaded here)
    Object.entries(data.vendors).forEach(([vendor, vendorData]) => {
        const count = vendorData.stats?.total || vendorData.iocCount || 0;
        const newInHour = vendorData.stats?.newInLastHour || 0;

        metrics.vendors[vendor] = count;
        metrics.totalIOCs += count;
        metrics.freshness.last24h += newInHour; // Approximate

        // Type classification based on vendor
        const types = vendorData.types || [];
        types.forEach(type => {
            if (type === 'url') {
                metrics.iocTypes.urls += count;
                metrics.attackVectors.phishing += count;
            } else if (type === 'hash') {
                metrics.iocTypes.hashes += count;
                metrics.attackVectors.malware += count;
            } else if (type === 'ip') {
                metrics.iocTypes.ips += count;
                metrics.attackVectors.network += count;
            } else if (type === 'ip-range' || type === 'network') {
                metrics.iocTypes.networks += count;
                metrics.attackVectors.c2 += count;
            }
        });

        // Severity classification
        if (vendor === 'Malware Bazaar') {
            metrics.severity.critical += count;
        } else if (vendor === 'Spamhaus DROP' || vendor === 'CINS Army' || vendor === 'Blocklist.de') {
            metrics.severity.high += count;
        } else {
            metrics.severity.medium += count;
        }
    });

    // Calculate derived metrics
    metrics.velocity = metrics.totalIOCs > 0 ? (metrics.freshness.last24h / 24).toFixed(1) : 0;
    metrics.freshnessPercent = metrics.totalIOCs > 0 ?
        Math.round((metrics.freshness.last24h / metrics.totalIOCs) * 100) : 100; // Assume all fresh

    console.log('Analytics metrics calculated:', metrics);
    return metrics;
}

function updateAnalyticsDisplay(metrics) {
    // Show analytics section
    const analyticsSection = document.getElementById('analyticsSection');
    if (analyticsSection) {
        analyticsSection.style.display = 'block';
    }

    // Update metric cards
    updateMetricCard('threatVelocity', metrics.velocity, 'IOCs/hour');
    updateMetricCard('dataFreshness', metrics.freshnessPercent + '%', 'Last 24h');
    updateMetricCard('criticalThreats', metrics.severity.critical, 'Requires Action');

    // Create analytics summary
    createAnalyticsSummary(metrics);
}

function updateMetricCard(id, value, label) {
    const element = document.getElementById(id);
    if (element) {
        element.textContent = value;
    }
}

function createAnalyticsSummary(metrics) {
    const container = document.getElementById('analyticsGrid');
    if (!container) return;

    // Clear existing content
    container.innerHTML = '';

    // IOC Type Breakdown
    const typeCard = createAnalyticsCard('IOC Type Distribution', [
        { label: 'Phishing URLs', value: metrics.iocTypes.urls, color: '#FF9500' },
        { label: 'Malware Hashes', value: metrics.iocTypes.hashes, color: '#FF4C4C' },
        { label: 'Malicious IPs', value: metrics.iocTypes.ips, color: '#FFD60A' },
        { label: 'Hijacked Networks', value: metrics.iocTypes.networks, color: '#00D9FF' }
    ]);
    container.appendChild(typeCard);

    // Severity Breakdown
    const severityCard = createAnalyticsCard('Threat Severity', [
        { label: 'Critical', value: metrics.severity.critical, color: '#FF4C4C' },
        { label: 'High', value: metrics.severity.high, color: '#FF9500' },
        { label: 'Medium', value: metrics.severity.medium, color: '#FFD60A' },
        { label: 'Low', value: metrics.severity.low, color: '#30D158' }
    ]);
    container.appendChild(severityCard);

    // Attack Vectors
    const vectorCard = createAnalyticsCard('Attack Vectors', [
        { label: 'Phishing', value: metrics.attackVectors.phishing, color: '#FF9500' },
        { label: 'Malware', value: metrics.attackVectors.malware, color: '#FF4C4C' },
        { label: 'Network', value: metrics.attackVectors.network, color: '#FFD60A' },
        { label: 'C2/Botnet', value: metrics.attackVectors.c2, color: '#00D9FF' }
    ]);
    container.appendChild(vectorCard);

    // Top Campaigns (get from dailySummary instead of metrics)
    const campaigns = window.threatIntelData.dailySummary?.campaigns || [];
    const campaignCard = createCampaignsCard(campaigns);
    container.appendChild(campaignCard);
}

function createAnalyticsCard(title, items) {
    const card = document.createElement('div');
    card.className = 'analytics-card';
    card.style.cssText = 'background: var(--glass); border: 1px solid var(--border); border-radius: 12px; padding: 1.5rem;';

    const total = items.reduce((sum, item) => sum + item.value, 0);

    let html = `<h3 style="margin: 0 0 1rem 0; color: var(--text-primary); font-size: 1.1rem;">${title}</h3>`;

    items.forEach(item => {
        const percentage = total > 0 ? ((item.value / total) * 100).toFixed(1) : 0;
        html += `
            <div style="margin-bottom: 0.75rem;">
                <div style="display: flex; justify-content: space-between; margin-bottom: 0.25rem;">
                    <span style="color: var(--text-secondary); font-size: 0.9rem;">${item.label}</span>
                    <span style="color: var(--text-primary); font-weight: 600;">${item.value} (${percentage}%)</span>
                </div>
                <div style="background: rgba(255, 255, 255, 0.05); height: 8px; border-radius: 4px; overflow: hidden;">
                    <div style="background: ${item.color}; height: 100%; width: ${percentage}%; transition: width 0.3s ease;"></div>
                </div>
            </div>
        `;
    });

    card.innerHTML = html;
    return card;
}

function createCampaignsCard(campaigns) {
    const card = document.createElement('div');
    card.className = 'analytics-card';
    card.style.cssText = 'background: var(--glass); border: 1px solid var(--border); border-radius: 12px; padding: 1.5rem;';

    // campaigns is now an array of objects with {name, count, types, sampleIndicators}
    const sortedCampaigns = Array.isArray(campaigns) ?
        campaigns.slice(0, 5) : // Already sorted by Python script
        [];

    let html = `<h3 style="margin: 0 0 1rem 0; color: var(--text-primary); font-size: 1.1rem;">Top Threat Campaigns</h3>`;

    if (sortedCampaigns.length === 0) {
        html += `<p style="color: var(--text-muted); font-size: 0.9rem;">No campaign data available</p>`;
    } else {
        html += `<div style="overflow-x: auto;">`;
        sortedCampaigns.forEach((campaign, index) => {
            const badge = index === 0 ? '🥇' : index === 1 ? '🥈' : index === 2 ? '🥉' : '•';
            const name = campaign.name || 'Unknown';
            const count = campaign.count || 0;
            const types = campaign.types ? campaign.types.join(', ') : 'unknown';

            html += `
                <div style="padding: 0.75rem; background: rgba(255, 255, 255, 0.02); border-radius: 8px; margin-bottom: 0.5rem; border-left: 3px solid var(--accent-cyan);">
                    <div style="display: flex; justify-content: space-between; align-items: center;">
                        <div>
                            <span style="margin-right: 0.5rem;">${badge}</span>
                            <span style="color: var(--text-primary); font-weight: 500;">${name}</span>
                            <div style="color: var(--text-muted); font-size: 0.75rem; margin-top: 0.25rem; margin-left: 1.5rem;">Types: ${types}</div>
                        </div>
                        <span style="color: var(--accent-cyan); font-weight: 600;">${count} IOCs</span>
                    </div>
                </div>
            `;
        });
        html += `</div>`;
    }

    card.innerHTML = html;
    return card;
}

// Call this after data loads
window.addEventListener('load', function () {
    setTimeout(() => {
        if (window.threatIntelData) {
            generateComprehensiveAnalytics();
        }
    }, 1500);
});

// Load AI Insights Sidebar
async function loadAIInsightsSidebar() {
    const container = document.getElementById('aiInsightsContent');
    if (!container) return;

    try {
        container.innerHTML = '<div class="loading-spinner"></div><p style="text-align:center; color:var(--text-muted);">Loading AI insights...</p>';

        // Fetch history data which contains the AI summaries
        const response = await fetch('threat-intel-history.json');
        if (!response.ok) throw new Error('Failed to load history data');

        const historyData = await response.json();
        const snapshots = historyData.dailySnapshots || historyData.daily_snapshots;

        if (!historyData || !snapshots) {
            throw new Error('No history data available');
        }

        // Get latest snapshot
        // If it's an array (dailySnapshots), get the last element
        // If it's an object (daily_snapshots), get by key
        let latest;
        let latestDate;

        if (Array.isArray(snapshots)) {
            latest = snapshots[snapshots.length - 1];
            latestDate = latest.date;
        } else {
            latestDate = Object.keys(snapshots).sort().pop();
            latest = snapshots[latestDate];
        }

        // Try to get AI insights from top-level object (new structure) or snapshot (old structure)
        let aiData = null;
        let aiDate = latestDate;

        if (historyData.aiInsights && historyData.aiInsights.dailySummary) {
            aiData = historyData.aiInsights.dailySummary;
            aiDate = aiData.date || latestDate;
        } else if (latest && (latest.ai_summary || latest.aiSummary)) {
            aiData = latest.ai_summary || latest.aiSummary;
        }

        if (!aiData) {
            container.innerHTML = '<p style="text-align:center; color:var(--text-muted);">No AI insights available for today.</p>';
            return;
        }

        // Extract content based on structure
        const dailySummary = aiData.summary || aiData.daily_summary || 'No daily summary available.';

        // Handle weekly trends or key findings
        let secondaryTitle = 'Weekly Trends';
        let secondaryContent = aiData.weekly_trend || 'No weekly trend analysis available.';

        // If we have keyFindings (new structure), use that instead
        if (aiData.keyFindings && Array.isArray(aiData.keyFindings)) {
            secondaryTitle = 'Key Findings';
            secondaryContent = '<ul>' + aiData.keyFindings.map(f => `<li>${f}</li>`).join('') + '</ul>';
        }

        // Generate HTML with Premium UI
        let html = `
            <div class="stat-card" style="background: linear-gradient(135deg, rgba(0, 217, 255, 0.08), rgba(0, 217, 255, 0.03)); border: 1px solid rgba(0, 217, 255, 0.3); border-radius: 10px; padding: 1.25rem; backdrop-filter: blur(10px); box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
                <div class="insight-header" style="display: flex; align-items: center; gap: 8px; margin-bottom: 0.75rem; padding-bottom: 0.5rem; border-bottom: 1px solid rgba(0, 217, 255, 0.2);">
                    <span style="font-size: 1.3rem;">📅</span>
                    <div style="flex: 1;">
                        <div style="font-size: 0.95rem; font-weight: 600; color: var(--accent-cyan);">Daily Summary</div>
                        <div style="font-size: 0.75rem; color: var(--text-muted); margin-top: 2px;">${aiDate}</div>
                    </div>
                </div>
                <div class="insight-body" style="color: var(--text-primary); line-height: 1.5; font-size: 0.875rem;">
                    ${formatAIContent(dailySummary)}
                </div>
            </div>
            
            <div class="stat-card" style="background: linear-gradient(135deg, rgba(16, 185, 129, 0.08), rgba(16, 185, 129, 0.03)); border: 1px solid rgba(16, 185, 129, 0.3); border-radius: 10px; padding: 1.25rem; backdrop-filter: blur(10px); box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
                <div class="insight-header" style="display: flex; align-items: center; gap: 8px; margin-bottom: 0.75rem; padding-bottom: 0.5rem; border-bottom: 1px solid rgba(16, 185, 129, 0.2);">
                    <span style="font-size: 1.3rem;">📊</span>
                    <div style="font-size: 0.95rem; font-weight: 600; color: #10b981;">${secondaryTitle}</div>
                </div>
                <div class="insight-body" style="color: var(--text-primary); font-size: 0.875rem;">
                    ${secondaryTitle === 'Key Findings' ?
                '<ul style="margin: 0; padding-left: 1.25rem; line-height: 1.6;">' + aiData.keyFindings.map(f => `<li style="margin-bottom: 0.4rem;">${f}</li>`).join('') + '</ul>'
                : formatAIContent(secondaryContent)}
                </div>
            </div>
        `;

        container.innerHTML = html;

    } catch (error) {
        console.error('Error loading AI insights:', error);
        container.innerHTML = `<p style="text-align:center; color:var(--accent-red);">Failed to load insights. <br><small>${error.message}</small></p>`;
    }
}

// Helper to format AI content (convert markdown-like bullets to HTML)
function formatAIContent(text) {
    if (!text) return '';
    return text
        .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') // Bold
        .replace(/- (.*?)(?=\n|$)/g, '<li>$1</li>') // List items
        .replace(/\n/g, '<br>'); // Line breaks
}

// Export for global use
window.loadAIInsightsSidebar = loadAIInsightsSidebar;
