// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2025-11-22T21:29:17.916407+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, Phishing Database
// NOTE: Full IOC lists are stored in Cloudflare R2 and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2025-11-22T21:29:17.535685+05:30",
    "lastUpdatedFormatted": "Nov 22, 2025 at 09:29 PM IST",
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
                "total": 687,
                "newInLastHour": 687,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"658d3acfc7e71d6b3451973ab8c207dca57264f9b17fc9e37c8b7a1e46561489",
                " \"8921c1bf22ea060348031a70153ee0953e764f9fffdd75d7a0cb0958a868b009",
                " \"b705dbd06cd39f39a57fc53bcaae998e7412b24920ae84cce303f49c4d0dbd37",
                " \"469e0027cb53e2ba2bfe66d4aac3ea456fe4e91efbd11b631db252a9a1b02a8e",
                " \"17ffce435bf3055bdc807b0b062281493e136f02e8b14d85e3fd6b6c3098088e"
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
                "total": 6451,
                "newInLastHour": 6451,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]14[.]12[.]168",
                "1[.]161[.]44[.]62",
                "1[.]162[.]241[.]130",
                "1[.]194[.]239[.]240",
                "1[.]197[.]102[.]62"
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
        "fastestRisingThreat": " \"n/a",
        "totalAttacksThisHour": 1297301,
        "lastCalculated": "2025-11-22 21:29 IST"
    }
};
