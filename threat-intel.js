// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2025-11-26T12:06:31.280486+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de
// NOTE: Full IOC lists are stored in Cloudflare R2 and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2025-11-26T12:06:31.274371+05:30",
    "lastUpdatedFormatted": "Nov 26, 2025 at 12:06 PM IST",
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
                "hxxps://creditosbancopromerica[.]netlify[.]app/",
                "hxxps://humanresourcesportal4678fhnbt476gh894790[.]yochaise[.]ru/b8QCdbHP@tqsxjl4ICoW2V/",
                "hxxps://kind-phone-898968[.]framer[.]app/",
                "hxxp://fin[.]tedfullwood[.]com/sitemap/",
                "hxxps://www[.]e-compliants[.]com/?urid=A715lTXpTd36keivfADGihARphERk6ZAVuCU_LTn_GF3lQ17TBxJBf0nSUAKOmOSiTwgdcqc-iVPZnO0VaHIbJGL3fjNApfwqNDc_BTFdZnIkVuE6RGJE3OmSj5w-EhEaRqeI_EZiSKzdO8hz&rg=WEU"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 689,
            "r2Url": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 689,
                "newInLastHour": 11,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"40302451a104f7d6be8066efdd8cf4d22d10bf3a779166a471aab7b88d823c77",
                " \"7081acd9be2d004707f1e94d3a90ffaec1add31906fe3a0eae4455293b3aca23",
                " \"5ab74d9f7575483ff938ba8d759f243ff3688113efd8f93c28e2f2ff88ccb0e5",
                " \"3010bb679dda30dfa265473c590a6e0900360ca981289e32075cb69233d34bb6",
                " \"e6aa919c2df443257268f0cd043630ea829da3b35565745ad3f3b1fca7915970"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1449,
            "r2Url": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1449,
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
                "1[.]116[.]180[.]98",
                "1[.]13[.]197[.]76",
                "1[.]15[.]118[.]23",
                "1[.]15[.]20[.]205",
                "1[.]172[.]234[.]138"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 5197,
            "r2Url": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 5197,
                "newInLastHour": 5197,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]15[.]100[.]2",
                "1[.]161[.]60[.]50",
                "1[.]214[.]197[.]163",
                "1[.]220[.]64[.]218",
                "1[.]226[.]83[.]51"
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
        "totalAttacksThisHour": 20508,
        "lastCalculated": "2025-11-26 12:06 IST"
    }
};
