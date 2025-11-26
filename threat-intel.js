// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2025-11-26T15:57:27.665015+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de
// NOTE: Full IOC lists are stored in Cloudflare R2 and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2025-11-26T15:57:27.658689+05:30",
    "lastUpdatedFormatted": "Nov 26, 2025 at 03:57 PM IST",
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
            "iocCount": 673,
            "r2Url": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 673,
                "newInLastHour": 18,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"933ec48d0d4733464d6d92559841efdb7c41befe002724ba03c7336f0df542f9",
                " \"eb3657cdccabe5ed9fbd8492724d8a7993ab2a084164e557b2a0302e38cfa798",
                " \"8ffa90c78b47c3d74ecdf0bbe4296e855daa9567bb29c8f4fbb61e82fd1a2808",
                " \"5d1d97443eee5a16379ce2010df00b21d95063e6be4d041694ca51dcf385b9ee",
                " \"c66375da0755a75664baf92bc6776fc98404aff815b584bc668a8aba07e0b3a8"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1450,
            "r2Url": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1450,
                "newInLastHour": 1,
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
            "iocCount": 5212,
            "r2Url": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 5212,
                "newInLastHour": 5212,
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
                "1[.]214[.]197[.]163"
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
        "totalAttacksThisHour": 20531,
        "lastCalculated": "2025-11-26 15:57 IST"
    }
};
