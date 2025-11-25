// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2025-11-25T14:20:34.005580+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de
// NOTE: Full IOC lists are stored in Cloudflare R2 and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2025-11-25T14:20:33.999866+05:30",
    "lastUpdatedFormatted": "Nov 25, 2025 at 02:20 PM IST",
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
                "hxxps://www[.]fs[.]hidravitalis[.]com/",
                "hxxps://0426f7e[.]netsolhost[.]com/netsolutions[.]html",
                "hxxps://bigthinkcapitals[.]biz/",
                "hxxps://sachinbhauryal[.]github[.]io/Netflix_clone/",
                "hxxp://sso--robinhood-com--aauthh[.]webflow[.]io/"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 1810,
            "r2Url": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 1810,
                "newInLastHour": 1810,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"5780c7788362c809ba2c53895b953c61dfcb68660800a20c822c594469e22770",
                " \"63bfe63a4a15554b74b55b4dd08a32b326c94b92f206b75d8dfe53ab270a829b",
                " \"b1f8c719a40850ab2e82df9c515a9dad02e551a1b31a1ca8a3047bd176af83e7",
                " \"9f757885a590b75116ee6ea87f09d94d8519e4df3456eb66194b00fef1107918",
                " \"8796e7bd40f68f5fb3f14f89beef053a83a70ef832fdf06f509b24627a439e1d"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1448,
            "r2Url": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1448,
                "newInLastHour": 1448,
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
                "1[.]177[.]162[.]2",
                "1[.]181[.]69[.]174"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 4630,
            "r2Url": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 4630,
                "newInLastHour": 4630,
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
                "1[.]15[.]148[.]9"
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
        "fastestRisingThreat": "CINS Threat List",
        "totalAttacksThisHour": 23188,
        "lastCalculated": "2025-11-25 14:20 IST"
    }
};
