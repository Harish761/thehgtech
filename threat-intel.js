// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2025-11-23T14:56:44.106427+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, Phishing Database
// NOTE: Full IOC lists are stored in Cloudflare R2 and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2025-11-23T14:56:43.728575+05:30",
    "lastUpdatedFormatted": "Nov 23, 2025 at 02:56 PM IST",
    "comparisonPeriod": "Nov 22 \u2013 Nov 23, 2025",
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
                "hxxp://royal[.]midasbuy-page[.]com/",
                "hxxps://roblox[.]com[.]py/users/5853697982/profile",
                "hxxps://checkin-arrivals[.]com/NIK7XYTXV",
                "hxxps://checkin-arrivals[.]com/8DFT64FK1",
                "hxxps://checkin-arrivals[.]com/AOGE97GBH"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 1667,
            "r2Url": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 1667,
                "newInLastHour": 1667,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"48bd5c447cda868707dfc0210f84567197deb7f2a81b2af3e93e90be4547589d",
                " \"afbcb4d7bb14477ae44f45451d913eb3378c7c99f820bb5c0eea36871fffb7d4",
                " \"bc14bb7a29ba5e46e530190a862d9ca0b28bad5cf2504ba8730f7f7db3e50a9a",
                " \"074ca5637549f4b3c9f3dacd13d5c2957abfca6abcce51420129e4396402dd01",
                " \"bef894e294ef5c1f544b33898e30eea390db88bfd752bb30c651ab0c52bef1a7"
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
            "iocCount": 6710,
            "r2Url": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 6710,
                "newInLastHour": 6710,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]117[.]227[.]101",
                "1[.]12[.]64[.]80",
                "1[.]13[.]19[.]219",
                "1[.]13[.]79[.]144",
                "1[.]14[.]12[.]168"
            ]
        },
        "Phishing Database": {
            "description": "Large database of active phishing URLs. Complements OpenPhish with additional phishing site coverage.",
            "website": "https://github.com/mitchellkrogza/Phishing.Database",
            "updateFrequency": "Hourly",
            "iocCount": 1273413,
            "r2Url": "https://thehgtech.com/ioc-data/phishing-database.json",
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
        "fastestRisingThreat": " \"QuasarRAT",
        "totalAttacksThisHour": 1298540,
        "lastCalculated": "2025-11-23 14:56 IST"
    }
};
