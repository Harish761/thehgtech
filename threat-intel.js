// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2025-11-24T03:56:49.464641+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, Phishing Database
// NOTE: Full IOC lists are stored in Cloudflare R2 and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2025-11-24T03:56:49.083412+05:30",
    "lastUpdatedFormatted": "Nov 24, 2025 at 03:56 AM IST",
    "comparisonPeriod": "Nov 23 \u2013 Nov 24, 2025",
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
                "hxxps://lvsclinic[.]ir/swisspass/index[.]html",
                "hxxps://largely-helpful-swift[.]global[.]ssl[.]fastly[.]net/OTQ0YTcwNWMxZjhjNDIwN2NjMjZlYg==/xhtq[.]php?profileid=780840778&auth=ZWY3MTMxZDllNzIyM2Q2OTEzZjVjNQ==",
                "hxxps://vvdt[.]net/#trap@trap[.]trap",
                "hxxps://unfazed-akash[.]github[.]io/Netflix-clone-/",
                "hxxps://geatuawe[.]top/acc-overview/DghFtR/error[.]php/"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 2772,
            "r2Url": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 2772,
                "newInLastHour": 2772,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"d81305aa62c634523e9e7244fa27113954cfb1fa0c729c5a4c44441248d8ba6c",
                " \"f2bc8307e42e84cd5566f2ed701b55dfc8288e78b8f929e21d03feeabc738b87",
                " \"6a1f3f2805f56b4e7fcf6e8c15542754442b33af9451ff300d446a24b5289e4b",
                " \"6ca855c1129470ae340e54a33fe2bfbe2a68bbaec189f6f6e7256a50212bcdf1",
                " \"261ebc0a8084076064155e9b148c702f4505878c795b4e20ff61be50f54dce17"
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
                "1[.]119[.]194[.]226",
                "1[.]123[.]65[.]64",
                "1[.]14[.]3[.]240",
                "1[.]145[.]110[.]55",
                "1[.]15[.]100[.]2"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 6684,
            "r2Url": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 6684,
                "newInLastHour": 6684,
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
        "fastestRisingThreat": "SSH Attacks",
        "totalAttacksThisHour": 1299619,
        "lastCalculated": "2025-11-24 03:56 IST"
    }
};
