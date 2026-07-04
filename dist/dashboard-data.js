// Dashboard Data Aggregation
// Processes all vendor JSON files to generate dashboard statistics

class ThreatDashboard {
    constructor() {
        this.vendors = [
            'urlhaus', 'threatfox', 'malware-bazaar', 'feodo-tracker',
            'ssl-blacklist', 'openphish', 'spamhaus-drop', 'cins-army', 'blocklist-de'
        ];
        this.data = {};
        this.stats = {};
    }

    async loadAllData() {
        // Start history load in parallel but wait for it
        const historyPromise = this.loadHistoryData();

        const promises = this.vendors.map(vendor =>
            fetch(`ioc-data/${vendor}.json`)
                .then(r => r.json())
                .catch(() => ({ vendor, iocs: [], totalCount: 0 }))
        );

        const results = await Promise.all(promises);
        results.forEach(data => {
            this.data[data.vendor] = data;
        });

        // Ensure history is loaded before calculating stats/rendering
        await historyPromise;

        this.calculateStats();
        return this.stats;
    }

    async loadHistoryData() {
        // Try to use preloaded global variable first
        if (window.threatIntelHistory) {
            this.history = window.threatIntelHistory.dailySnapshots || window.threatIntelHistory.daily_snapshots || [];
            return;
        }

        try {
            const response = await fetch('threat-intel-history.json');
            if (!response.ok) throw new Error('Failed to load history');
            const data = await response.json();
            this.history = data.dailySnapshots || data.daily_snapshots || [];
        } catch (e) {
            console.warn('History data not available, using mock data for trends');
            this.history = [];
        }
    }

    calculateStats() {
        // Total IOC counts
        let totalIOCs = 0;
        let byType = { url: 0, ip: 0, hash: 0, domain: 0, 'ssl-cert': 0 };
        let byVendor = {};
        let malwareFamilies = {};
        let recentIOCs = [];

        // Check if we have loaded actual IOC data or if we should fallback to summary stats
        const hasLoadedData = Object.keys(this.data).length > 0 && Object.values(this.data).some(v => v.iocs && v.iocs.length > 0);

        if (!hasLoadedData && window.threatIntelData && window.threatIntelData.vendors) {
            // Fallback: Use summary stats from window.threatIntelData
            console.log('Using summary stats fallback');
            Object.entries(window.threatIntelData.vendors).forEach(([vendorName, vendorInfo]) => {
                const count = vendorInfo.iocCount || 0;
                byVendor[vendorName] = count;
                totalIOCs += count;

                // Infer type
                if (vendorInfo.types && vendorInfo.types.length > 0) {
                    // Distribute count among types (simplified)
                    const primaryType = vendorInfo.types[0];
                    if (byType[primaryType] !== undefined) {
                        byType[primaryType] += count;
                    }
                }
            });
        } else {
            // Normal calculation from detailed IOC data
            Object.values(this.data).forEach(vendorData => {
                const vendor = vendorData.vendor;
                const iocs = vendorData.iocs || [];

                byVendor[vendor] = iocs.length;
                totalIOCs += iocs.length;

                // Process each IOC
                iocs.forEach(ioc => {
                    // Count by type
                    if (byType[ioc.type] !== undefined) {
                        byType[ioc.type]++;
                    }

                    // Extract malware families from tags
                    if (ioc.tags && Array.isArray(ioc.tags)) {
                        ioc.tags.forEach(tag => {
                            // Filter out generic tags
                            const genericTags = ['malware', 'url', 'hash', 'ip', 'domain', 'exe', 'dll',
                                'elf', '32-bit', '64-bit', 'live', 'online', 'offline'];
                            if (!genericTags.includes(tag.toLowerCase()) && tag.length > 2) {
                                malwareFamilies[tag] = (malwareFamilies[tag] || 0) + 1;
                            }
                        });
                    }

                    // Collect recent IOCs (last 24h)
                    if (ioc.addedAt) {
                        const addedTime = new Date(ioc.addedAt);
                        const now = new Date();
                        const hoursDiff = (now - addedTime) / (1000 * 60 * 60);

                        if (hoursDiff < 24) {
                            recentIOCs.push({
                                ...ioc,
                                vendor,
                                hoursAgo: Math.floor(hoursDiff)
                            });
                        }
                    }
                });
            });
        }

        // Sort malware families by count
        const topMalware = Object.entries(malwareFamilies)
            .sort((a, b) => b[1] - a[1])
            .slice(0, 15)
            .map(([name, count]) => ({ name, count }));

        // Sort recent IOCs by time
        recentIOCs.sort((a, b) => new Date(b.addedAt) - new Date(a.addedAt));

        this.stats = {
            totalIOCs,
            byType,
            byVendor,
            topMalware,
            recentIOCs: recentIOCs.slice(0, 20),
            lastUpdated: new Date().toISOString()
        };
    }

    // Get 7-day trend data
    get7DayTrend() {
        if (this.history && this.history.length > 0) {
            // Use real history data
            // Sort by date ascending
            const sortedHistory = [...this.history].sort((a, b) => new Date(a.date) - new Date(b.date));

            // Get last 7 days
            const last7Days = sortedHistory.slice(-7);

            return last7Days.map(snapshot => ({
                date: new Date(snapshot.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' }),
                count: snapshot.metrics ? snapshot.metrics.totalIOCs : 0
            }));
        }

        // Fallback to mock data if no history
        const days = 7;
        const trend = [];
        const today = new Date();
        const baseCount = (this.stats && this.stats.totalIOCs) ? this.stats.totalIOCs : 50000;

        for (let i = days - 1; i >= 0; i--) {
            const date = new Date(today);
            date.setDate(date.getDate() - i);

            trend.push({
                date: date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' }),
                count: Math.floor(baseCount * (0.85 + Math.random() * 0.3))
            });
        }

        return trend;
    }

    // Calculate threat severity score
    getThreatScore(malwareName) {
        const knownSevere = ['ransomware', 'cryptolocker', 'emotet', 'trickbot', 'cobalt', 'apt'];
        const knownModerate = ['mirai', 'mozi', 'botnet', 'coinminer'];

        const lower = malwareName.toLowerCase();

        if (knownSevere.some(s => lower.includes(s))) return 'critical';
        if (knownModerate.some(s => lower.includes(s))) return 'high';
        return 'medium';
    }
}

// Export for use in dashboard
window.ThreatDashboard = ThreatDashboard;
