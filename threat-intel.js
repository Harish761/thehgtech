// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2025-11-22T21:14:31.085244+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, Phishing Database
// NOTE: Full IOC lists are stored in Cloudflare R2 and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2025-11-22T21:14:30.702417+05:30",
    "lastUpdatedFormatted": "Nov 22, 2025 at 09:14 PM IST",
    "comparisonPeriod": "Nov 21 \u2013 Nov 22, 2025",
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
                "total": 680,
                "newInLastHour": 680,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"f8b14e9a56f8c8cc53f58be19a76c615bcb23bf7d0ffa32ed2eff58404310d6b",
                " \"9e169da4054cae5b459b7cce25e95d52e8f7658e09b4ee8f86fb9c14fff84c3a",
                " \"a8e7980ed4dbea8bb5ceeca4b5fef3c8aa3a76d1b933ca94239af3efd5ba2a3e",
                " \"97858b4df05b58b93a33bc63a3eaaec53e49ebaa6b59d4a1762593d3ab2ff0ae",
                " \"e3d79adeb8632b2251a4af1cc344c879a5671efa2e22bc2e25eb82615ff56f10"
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
                "total": 6664,
                "newInLastHour": 6664,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]117[.]227[.]101",
                "1[.]14[.]12[.]168",
                "1[.]161[.]44[.]62",
                "1[.]162[.]241[.]130",
                "1[.]194[.]239[.]240"
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
        "fastestRisingThreat": "SSH Attacks",
        "totalAttacksThisHour": 1297507,
        "lastCalculated": "2025-11-22 21:14 IST"
    }
};
