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

    const now = Date.now();
    const hour6 = 6 * 60 * 60 * 1000;
    const hour12 = 12 * 60 * 60 * 1000;
    const hour24 = 24 * 60 * 60 * 1000;

    Object.entries(data.vendors).forEach(([vendor, vendorData]) => {
        metrics.vendors[vendor] = vendorData.iocs ? vendorData.iocs.length : 0;

        if (vendorData.iocs) {
            vendorData.iocs.forEach(ioc => {
                metrics.totalIOCs++;

                // Type classification
                const type = (ioc.type || '').toLowerCase();
                if (type.includes('url')) {
                    metrics.iocTypes.urls++;
                    metrics.attackVectors.phishing++;
                } else if (type.includes('hash')) {
                    metrics.iocTypes.hashes++;
                    metrics.attackVectors.malware++;
                } else if (type.includes('ip')) {
                    metrics.iocTypes.ips++;
                    metrics.attackVectors.network++;
                } else if (type.includes('network') || type.includes('cidr')) {
                    metrics.iocTypes.networks++;
                    metrics.attackVectors.c2++;
                }

                // Severity classification
                if (vendor === 'Malware Bazaar') {
                    metrics.severity.critical++;
                } else if (vendor === 'Spamhaus DROP') {
                    metrics.severity.high++;
                } else if (vendor === 'CINS Army' || vendor === 'Blocklist.de') {
                    metrics.severity.high++;
                } else {
                    metrics.severity.medium++;
                }

                // Freshness analysis
                if (ioc.addedAt) {
                    const age = now - new Date(ioc.addedAt).getTime();
                    if (age < hour6) metrics.freshness.last6h++;
                    if (age < hour12) metrics.freshness.last12h++;
                    if (age < hour24) metrics.freshness.last24h++;
                }

                // Campaign tracking
                if (ioc.campaign) {
                    if (!metrics.campaigns[ioc.campaign]) {
                        metrics.campaigns[ioc.campaign] = {
                            count: 0,
                            lastSeen: ioc.addedAt || new Date().toISOString(),
                            severity: 'medium'
                        };
                    }
                    metrics.campaigns[ioc.campaign].count++;
                }
            });
        }
    });

    // Calculate derived metrics
    metrics.velocity = metrics.totalIOCs > 0 ? (metrics.freshness.last24h / 24).toFixed(1) : 0;
    metrics.freshnessPercent = metrics.totalIOCs > 0 ?
        Math.round((metrics.freshness.last24h / metrics.totalIOCs) * 100) : 0;

    console.log('Analytics metrics calculated:', metrics);
    return metrics;
}

function updateAnalyticsDisplay(metrics) {
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

    // Top Campaigns
    const campaignCard = createCampaignsCard(metrics.campaigns);
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

    const sortedCampaigns = Object.entries(campaigns)
        .sort((a, b) => b[1].count - a[1].count)
        .slice(0, 5);

    let html = `<h3 style="margin: 0 0 1rem 0; color: var(--text-primary); font-size: 1.1rem;">Top Threat Campaigns</h3>`;

    if (sortedCampaigns.length === 0) {
        html += `<p style="color: var(--text-muted); font-size: 0.9rem;">No campaign data available</p>`;
    } else {
        html += `<div style="overflow-x: auto;">`;
        sortedCampaigns.forEach(([name, data], index) => {
            const badge = index === 0 ? '🥇' : index === 1 ? '🥈' : index === 2 ? '🥉' : '•';
            html += `
                <div style="padding: 0.75rem; background: rgba(255, 255, 255, 0.02); border-radius: 8px; margin-bottom: 0.5rem; border-left: 3px solid var(--accent-cyan);">
                    <div style="display: flex; justify-content: space-between; align-items: center;">
                        <div>
                            <span style="margin-right: 0.5rem;">${badge}</span>
                            <span style="color: var(--text-primary); font-weight: 500;">${name}</span>
                        </div>
                        <span style="color: var(--accent-cyan); font-weight: 600;">${data.count} IOCs</span>
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
