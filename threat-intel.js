// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2025-11-26T10:00:37.732711+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de
// NOTE: Full IOC lists are stored in Cloudflare R2 and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2025-11-26T10:00:37.726742+05:30",
    "lastUpdatedFormatted": "Nov 26, 2025 at 10:00 AM IST",
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
            "iocCount": 715,
            "r2Url": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 715,
                "newInLastHour": 2,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"4a4c9a252db22b324ab6f0ce7fcb3de8baee142762712be57345590d86821478",
                " \"86856c3e885d7907b690df3588ef2204ffcc06503404a5e57323616362e02d1a",
                " \"d7491c4e7c1981c039189cf7b772dc0b532b0bb6fd53f255aeafc9bbde029927",
                " \"5ca1cd75c510adff5ec4d592556594d86db181dc1e6bb3b8bc5cb98c70708921",
                " \"2b63ff1a501c9691349592ee32a0c265fbdf162129d727549db43a510a6cdeb7"
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
            "iocCount": 5078,
            "r2Url": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 5078,
                "newInLastHour": 5078,
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
        "totalAttacksThisHour": 20380,
        "lastCalculated": "2025-11-26 10:00 IST"
    }
};
