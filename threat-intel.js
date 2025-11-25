// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2025-11-25T18:20:59.953176+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de
// NOTE: Full IOC lists are stored in Cloudflare R2 and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2025-11-25T18:20:59.946794+05:30",
    "lastUpdatedFormatted": "Nov 25, 2025 at 06:20 PM IST",
    "comparisonPeriod": "Nov 24 \u2013 Nov 25, 2025",
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
                "hxxps://feiraolimpabrasil-afk[.]github[.]io/comecar/inicio/",
                "hxxp://platform-usage-policies-and-accountability[.]pages[.]dev/",
                "hxxp://platform-terms-and-accountability[.]pages[.]dev/",
                "hxxp://live-mingiftin11[.]vercel[.]app/",
                "hxxp://ondoislucky[.]com/wp-includes/cgi-ent/newwwaluzzyyyy[.]html"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 746,
            "r2Url": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 746,
                "newInLastHour": 28,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"6fa2d60677477e0f48707a1f4c90bf871f41327c1f85369bcf7ef2729d94fe99",
                " \"5b8b5bd3a52253dcc76ab78ae410cb5edc76f65506ab49446287f20139dfb59b",
                " \"6fd99f61a7ad7f883e14d98990c6438b23e85b510296a8aaa65399c166bb16dd",
                " \"da59569cf8855d3e4097975838da2969600f1b4489cc8215f856be4d87051133",
                " \"302d786a68d133ca0d767590c241f6cd2b305070a3d0e2d2498ddffdedd10fa6"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1446,
            "r2Url": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1446,
                "newInLastHour": 0,
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
                "1[.]13[.]197[.]76",
                "1[.]15[.]118[.]23",
                "1[.]172[.]234[.]138",
                "1[.]176[.]134[.]238",
                "1[.]181[.]69[.]174"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 4385,
            "r2Url": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 4385,
                "newInLastHour": 4385,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]116[.]180[.]98",
                "1[.]117[.]227[.]101",
                "1[.]12[.]64[.]80",
                "1[.]14[.]12[.]168",
                "1[.]15[.]100[.]2"
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
        "totalAttacksThisHour": 19713,
        "lastCalculated": "2025-11-25 18:20 IST"
    }
};
