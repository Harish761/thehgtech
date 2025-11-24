// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2025-11-24T16:03:17.678063+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, Phishing Database
// NOTE: Full IOC lists are stored in Cloudflare R2 and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2025-11-24T16:03:17.294313+05:30",
    "lastUpdatedFormatted": "Nov 24, 2025 at 04:03 PM IST",
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
                "hxxps://localhost[.]gruporecuperabr[.]com/inicio/",
                "hxxp://bafybeiathoymw2rgedvnedxgjyqulgq4iodqzgjprc2hwuczjg2qybnite[.]ipfs[.]dweb[.]link/64[.]html",
                "hxxps://verify[.]aerix[.]com[.]de/WlD5x5TJQl3f@w3raDXLo1Q/",
                "hxxp://meta-prime-egn[.]pages[.]dev/",
                "hxxp://meta-summitx[.]pages[.]dev/"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 2760,
            "r2Url": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 2760,
                "newInLastHour": 2760,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"67b037dbae35e5cf8e46e76ac2e395ddcd604d6f73d08da7a854d4032dfde8e7",
                " \"83322f93f2b3489c9414317e11e66927d35475ba77a537c012180f3b55a85e1c",
                " \"72bf080ea70de278d35c3213557eb34a04a4ca5b8399e890738ecd43423cb5f4",
                " \"72d3af0d29f01286c1f8f399fef566c693d6d391df11a3f9a0a502b09e793c55",
                " \"d50e3b0e68d1cb34fd73549d6e4cbc6433c3c50ad834ca9e30b29e4146e0defa"
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
                "newInLastHour": 1449,
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
                "1[.]15[.]100[.]2",
                "1[.]15[.]118[.]23"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 6341,
            "r2Url": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 6341,
                "newInLastHour": 6341,
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
                "1[.]15[.]114[.]102"
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
        "fastestRisingThreat": " \"n/a",
        "totalAttacksThisHour": 1299263,
        "lastCalculated": "2025-11-24 16:03 IST"
    }
};
