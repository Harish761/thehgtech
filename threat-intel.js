// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2025-11-23T00:06:35.373951+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, Phishing Database
// NOTE: Full IOC lists are stored in Cloudflare R2 and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2025-11-23T00:06:34.979654+05:30",
    "lastUpdatedFormatted": "Nov 23, 2025 at 12:06 AM IST",
    "comparisonPeriod": "Nov 22 \u2013 Nov 23, 2025",
    "vendors": {
        "OpenPhish": {
            "description": "Real-time phishing URL feed updated every 15 minutes. Tracks active phishing sites targeting major brands and financial institutions.",
            "website": "https://openphish.com/",
            "updateFrequency": "Every 15 minutes",
            "iocCount": 0,
            "r2Url": "https://github.com/Harish761/thehgtech/releases/download/iocs-latest/openphish.json",
            "stats": {
                "total": 300,
                "newInLastHour": 300,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxps://serasa-feirao[.]github[.]io/2025/",
                "hxxps://e571tn-nu[.]myshopify[.]com/password",
                "hxxp://express[.]rakutenglobal[.]com/",
                "hxxps://www[.]ti6ktopshop[.]com/",
                "hxxp://view-location[.]app/A1A"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 0,
            "r2Url": "https://github.com/Harish761/thehgtech/releases/download/iocs-latest/malware-bazaar.json",
            "stats": {
                "total": 693,
                "newInLastHour": 693,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"12e812ec7b1983d4be3667107061a43a22250be46e7fb4962f179722e0ee2cde",
                " \"332c9afa08430dfff162d5a0feefa0ed0374a4678a0f0d866320e67be88fd34c",
                " \"d465bd915c35f6090b834326af8c055f8a457468e584ad0ac40dc76ec002901f",
                " \"5ccf216c20a7a2990b30c15b9d1318f338befa151d31f075a1b16e0a6badf6e3",
                " \"58c1c25104bfda841e39b52cba4d0f7999922fe3b66580a3bdee5601caac0ca6"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 0,
            "r2Url": "https://github.com/Harish761/thehgtech/releases/download/iocs-latest/spamhaus-drop.json",
            "stats": {
                "total": 1450,
                "newInLastHour": 1450,
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
            "iocCount": 0,
            "r2Url": "https://github.com/Harish761/thehgtech/releases/download/iocs-latest/cins-army.json",
            "stats": {
                "total": 15000,
                "newInLastHour": 15000,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]1[.]176[.]58",
                "1[.]116[.]180[.]98",
                "1[.]121[.]198[.]97",
                "1[.]123[.]65[.]64",
                "1[.]13[.]197[.]76"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 0,
            "r2Url": "https://github.com/Harish761/thehgtech/releases/download/iocs-latest/blocklist.de.json",
            "stats": {
                "total": 6495,
                "newInLastHour": 6495,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]13[.]79[.]144",
                "1[.]14[.]12[.]168",
                "1[.]161[.]44[.]62",
                "1[.]197[.]102[.]62",
                "1[.]20[.]174[.]59"
            ]
        },
        "Phishing Database": {
            "description": "Large database of active phishing URLs. Complements OpenPhish with additional phishing site coverage.",
            "website": "https://github.com/mitchellkrogza/Phishing.Database",
            "updateFrequency": "Hourly",
            "iocCount": 0,
            "r2Url": "https://github.com/Harish761/thehgtech/releases/download/iocs-latest/phishing-database.json",
            "stats": {
                "total": 1273413,
                "newInLastHour": 1273413,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://00000000000000000000000000000000000000dfjjjhv[.]000webhostapp[.]com/yahoo/yahooattt/global/attverzon/login[.]php?[.]intl=us&[.]lang=en-us&hxxps://login[.]yahoo[.]com/?[.]src=ym",
                "hxxp://000000000000000000000000000000000000dbscrfg[.]000webhostapp[.]com/yahoo/yahooattt/global/attverzon/login[.]php?https%3a//login[.]yahoo[.]com/?[.]src=ym&[.]intl=us&[.]lang=en-us",
                "hxxp://000000000000000000000000000yteyeuya[.]000webhostapp[.]com/yahoo/yahooattt/global/attverzon/login[.]php",
                "hxxp://0000000000000000000000000[.]findyourjacket[.]com",
                "hxxp://00000000000000000000000[.]fielty[.]mx"
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
        "topAttackVector": "Malicious URLs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": " \"Mirai",
        "totalAttacksThisHour": 1297351,
        "lastCalculated": "2025-11-23 00:06 IST"
    }
};
