// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2025-11-26T18:21:59.755673+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de
// NOTE: Full IOC lists are stored in Cloudflare R2 and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2025-11-26T18:21:59.749294+05:30",
    "lastUpdatedFormatted": "Nov 26, 2025 at 06:21 PM IST",
    "comparisonPeriod": "Nov 25 \u2013 Nov 26, 2025",
    "vendors": {
        "OpenPhish": {
            "description": "Real-time phishing URL feed updated every 15 minutes. Tracks active phishing sites targeting major brands and financial institutions.",
            "website": "https://openphish.com/",
            "updateFrequency": "Every 15 minutes",
            "iocCount": 300,
            "r2Url": "https://thehgtech.com/ioc-data/openphish.json",
            "stats": {
                "total": 300,
                "newInLastHour": 300,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://www[.]kaancagirman[.]com/",
                "hxxp://spotiwap[.]com/latest-version",
                "hxxps://wordpress-1555654-6027424[.]cloudwaysapps[.]com/Contractandcontactdocs[.]html",
                "hxxp://central[.]pr-universe[.]com/s/63bzgfsvbwsfcdx7y9/584dd8/90eab167-7429-489f-99f6-ce86e8d0d81a",
                "hxxp://a1[.]hb1p[.]com/"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 681,
            "r2Url": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 681,
                "newInLastHour": 39,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"0b4716771191526e4e274b9092b7f8508629d24ff2a3f5f6f49ce187f08fa83a",
                " \"f700d8f24641f9310d77efafa721c329d43b1b568fa5c122cb624de9a8708968",
                " \"5f03feb954996ba1a7c6e998fb736130202e287f174430c2ac0814aa80bb0b30",
                " \"3f3016804c38ec622929a19d77a478b75235198636062d1877c3688696fa40dc",
                " \"3d5df0a46056f74adb2d277221585f217d740f9830a4550a22f82f6db84f7692"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1453,
            "r2Url": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1453,
                "newInLastHour": 3,
                "lastUpdate": "just now"
            },
            "types": [
                "ip-range"
            ],
            "sampleIndicators": [
                "1.10.16.0/20",
                "1.19.0.0/16",
                "1.32.128.0/18",
                "2.56.192.0/22",
                "2.57.122.0/24"
            ]
        },
        "CINS Army": {
            "description": "Malicious IPs from CINS Army threat intelligence. Fast-updating list of confirmed attackers.",
            "website": "http://cinsscore.com/",
            "updateFrequency": "Every 15 minutes",
            "iocCount": 15000,
            "r2Url": "https://thehgtech.com/ioc-data/cins-army.json",
            "stats": {
                "total": 15000,
                "newInLastHour": 15000,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]116[.]180[.]98",
                "1[.]119[.]194[.]226",
                "1[.]13[.]197[.]76",
                "1[.]15[.]118[.]23",
                "1[.]15[.]20[.]205"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 5296,
            "r2Url": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 5296,
                "newInLastHour": 5296,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]117[.]227[.]101",
                "1[.]15[.]100[.]2",
                "1[.]15[.]114[.]102",
                "1[.]161[.]60[.]50",
                "1[.]214[.]179[.]202"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 0,
            "activeSources": 0,
            "criticalAlerts": 0,
            "activeCampaigns": 0
        },
        "topThreats": [
            {
                "category": "Phishing",
                "count": 0,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Malware",
                "count": 0,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "C2",
                "count": 0,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 0,
                "trend": "stable",
                "percentage": 0
            }
        ],
        "targetedSectors": [],
        "campaigns": []
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious IPs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": "SSH Attacks",
        "totalAttacksThisHour": 20638,
        "lastCalculated": "2025-11-26 18:21 IST"
    }
};
