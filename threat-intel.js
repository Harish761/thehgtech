// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-03-07T00:40:37.441368+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-03-07T00:40:37.156419+05:30",
    "lastUpdatedFormatted": "Mar 07, 2026 at 12:40 AM IST",
    "comparisonPeriod": "Mar 06 \u2013 Mar 07, 2026",
    "vendors": {
        "OpenPhish": {
            "description": "Real-time phishing URL feed updated every 15 minutes. Tracks active phishing sites targeting major brands and financial institutions.",
            "website": "https://openphish.com/",
            "updateFrequency": "Every 15 minutes",
            "iocCount": 300,
            "iocDataUrl": "https://thehgtech.com/ioc-data/openphish.json",
            "stats": {
                "total": 300,
                "newInLastHour": 300,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://bitmrtlugie[.]webflow[.]io/",
                "hxxp://dropbox-home-page-cloneable[.]webflow[.]io/",
                "hxxp://www[.]easy-bank-landing-page-ecru[.]vercel[.]app/",
                "hxxps://usmeta-maskloogn[.]godaddysites[.]com/",
                "hxxp://www[.]usmeta-maskloogn[.]godaddysites[.]com/"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 1542,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 1542,
                "newInLastHour": 260,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"9f0cc147bf7561fa53a3c975b605a5ec19deb4457e627598f6b6d51502c46cfb",
                " \"74aadf8374a2b3be8c275179a68d9cb2e4623197d87b3a7b61da1d4a0511adad",
                " \"f59fc31bf08083dcb75f94935ef3810371fcd76c15828fd41dbe1240bfd9952b",
                " \"ac3808558b7dd7dd51b800d98499145e5031895e04732b487787f8fdc6d40562",
                " \"c2964cad2a88c3a03277756d0c3905b3689b6980850975e2ecfd6862cb3bef3e"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1541,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1541,
                "newInLastHour": 31,
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
            "iocDataUrl": "https://thehgtech.com/ioc-data/cins-army.json",
            "stats": {
                "total": 15000,
                "newInLastHour": 15000,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]15[.]118[.]23",
                "1[.]170[.]60[.]81",
                "1[.]176[.]134[.]238",
                "1[.]188[.]101[.]189",
                "1[.]190[.]9[.]42"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 5293,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 5293,
                "newInLastHour": 5293,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]117[.]75[.]174",
                "1[.]13[.]6[.]145",
                "1[.]15[.]136[.]28",
                "1[.]15[.]51[.]45",
                "1[.]161[.]39[.]103"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 19070,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 19070,
                "newInLastHour": 19070,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://39[.]88[.]187[.]161:51321/i",
                "hxxp://27[.]206[.]193[.]16:51039/i",
                "hxxp://219[.]156[.]35[.]217:37425/i",
                "hxxp://182[.]126[.]121[.]10:54450/bin[.]sh",
                "hxxp://123[.]14[.]78[.]161:48958/i"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 1816,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 1816,
                "newInLastHour": 1816,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"mx7society[.]com[.]br\"",
                " \"moro-sync[.]moroshkasvet[.]in[.]net\"",
                " \"pidoras6742-56928[.]portmap[.]host\"",
                " \"aviammo[.]shop\"",
                " \"svet09[.]moroshkasvet[.]in[.]net\""
            ]
        },
        "Feodo Tracker": {
            "description": "Botnet C2 server IPs from Feodo Tracker. Tracks Dridex, Emotet, TrickBot, QakBot, and BazarLoader.",
            "website": "https://feodotracker.abuse.ch/",
            "updateFrequency": "Hourly",
            "iocCount": 3,
            "iocDataUrl": "https://thehgtech.com/ioc-data/feodo-tracker.json",
            "stats": {
                "total": 3,
                "newInLastHour": 3,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "178[.]62[.]3[.]223",
                "27[.]133[.]154[.]218",
                "34[.]204[.]119[.]63"
            ]
        },
        "SSL Blacklist": {
            "description": "Malicious SSL certificates used by botnet C2 servers. Helps detect encrypted malware communications.",
            "website": "https://sslbl.abuse.ch/",
            "updateFrequency": "Daily",
            "iocCount": 9175,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 9175,
                "newInLastHour": 40,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "23c94cd261c3b8f773e75058ec03edc2a23d8858",
                "e6695638f614e1601ecd6371c876351654623e06",
                "55079857bbb8b752780408b8f5ab6e0b6d41b96f",
                "ce5d858d667d8ff8b7368054839cb9861c6dcfac",
                "bdcaabf46794dc1cddf8c619938430fcfad5d281"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 47898,
            "activeSources": 8,
            "criticalAlerts": 29269,
            "activeCampaigns": 215
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 20155,
                "trend": "stable",
                "percentage": 3
            },
            {
                "category": "C2",
                "count": 9114,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 1360,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Phishing",
                "count": 303,
                "trend": "stable",
                "percentage": 0
            }
        ],
        "targetedSectors": [
            {
                "name": "General",
                "percentage": 98
            },
            {
                "name": "Tech",
                "percentage": 1
            },
            {
                "name": "Finance",
                "percentage": 0
            }
        ],
        "campaigns": [
            {
                "name": "malware_download",
                "count": 18842,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://222[.]138[.]117[.]109:34226/bin[.]sh",
                    "hxxp://110[.]37[.]115[.]167:39090/bin[.]sh",
                    "hxxp://27[.]215[.]182[.]207:44013/bin[.]sh"
                ]
            },
            {
                "name": "CINS Threat List",
                "count": 15000,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]15[.]118[.]23",
                    "1[.]170[.]22[.]164",
                    "1[.]170[.]60[.]81"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1514,
                "types": [
                    "ip-range"
                ],
                "sampleIndicators": [
                    "1.10.16.0/20",
                    "1.19.0.0/16",
                    "1.32.128.0/18"
                ]
            },
            {
                "name": "AsyncRAT",
                "count": 1383,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "d5a586a42fd4e36396467ae8d16045a5efd6bada",
                    "b4f112278f6f59e5e9d0a2aeb252c111a3ae8603",
                    "bef81c1fd26e84e5e25a4182bf668304ba2891da"
                ]
            },
            {
                "name": " \"unknown\"",
                "count": 790,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"136[.]244[.]82[.]119:7443\"",
                    " \"157[.]245[.]218[.]126:7443\"",
                    " \"bestbettersolutions[.]com\""
                ]
            },
            {
                "name": "Dridex",
                "count": 737,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "550e1cde5c59d03b6f3b9bd3ebfc4af6c7dbec48",
                    "38ecc7c543c90d25571eae05fbd1948a310761b7",
                    "6c1cd5f3b4f1a6da97a199397b1bae8226aac7bc"
                ]
            },
            {
                "name": "QuasarRAT",
                "count": 629,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "78372e9666177fc65dbd5a41286bcd2f22c12bf0",
                    "58d0977e2eb2f58b80c1441ac8a77c7da332b266",
                    "f856334cbdfb8b6d59158085280f3b830fab2fba"
                ]
            },
            {
                "name": "LummaStealer",
                "count": 537,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "2987e30402370bdcbf291aedc9cd52a9a79bda0c",
                    "6fd95f4a2d9cec238cbe2e1756890381c4fae3cb",
                    "e2293f74d8d72bde90bb0424038259a9e3126e1b"
                ]
            },
            {
                "name": " \"n/a",
                "count": 501,
                "types": [
                    "hash"
                ],
                "sampleIndicators": [
                    " \"03ceed8719bdcef60a9a3b46fee00c2f02df9035e8b9f37b7058e1fc022bbbe9",
                    " \"8ddf24152eb78df606522c0a2080bffe9b09b2fffe21ab4ce9bc4cdbf467a992",
                    " \"c01cc0a3fe9e26e5734cc7c8fd9bc668164cefce3ec796ec9b516be37666819c"
                ]
            },
            {
                "name": "Vidar",
                "count": 373,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "55079857bbb8b752780408b8f5ab6e0b6d41b96f",
                    "b242cf8e0628b8a1804d04399e9170fb5ca86d64",
                    "c6c5cbb14fe2839ef4ece10f4b65bf92808f8440"
                ]
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious URLs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": "malware_download",
        "totalAttacksThisHour": 41813,
        "lastCalculated": "2026-03-07 00:40 IST"
    }
};
