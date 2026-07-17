// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-07-17T15:37:51.159683+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-07-17T15:37:50.916860+05:30",
    "lastUpdatedFormatted": "Jul 17, 2026 at 03:37 PM IST",
    "comparisonPeriod": "Jul 16 \u2013 Jul 17, 2026",
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
                "hxxps://www[.]roblox[.]com[.]ml/users/162176377204/profile",
                "hxxps://s4w[.]in/www-roblox-com-hk-users-162176377204-profile",
                "hxxps://www[.]ti[.]biogasos[.]com/",
                "hxxp://www[.]hr-paymentincrement-payroll[.]sbs/",
                "hxxps://trezarsuit-en[.]wasmer[.]app/"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 871,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 871,
                "newInLastHour": 106,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"3e6fa0cee27201c9fc93852415abd8085a54361a5f04b222876cf8b7eabcb0ec",
                " \"fefa44f1a88a69b16f38030100a60c38dddb77d9c2f2089f8c51ffd782917cac",
                " \"fb1484da86fde095c472120323958e0e9f4ccbc6a42045782afbdbabbdcf3bd6",
                " \"ba0847586f71982c999dbd4f2555b4231a32d497cc3a1e9c57900913c7c3cc4a",
                " \"61a574f58f0ff9e1ceeb6088d726c604d43c6e7323c702ea90a69de3cf00402b"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1677,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1677,
                "newInLastHour": 49,
                "lastUpdate": "just now"
            },
            "types": [
                "ip-range"
            ],
            "sampleIndicators": [
                "1.10.16.0/20",
                "1.19.0.0/16",
                "1.32.128.0/18",
                "2.26.75.0/24",
                "2.27.5.0/24"
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
                "1[.]12[.]229[.]231",
                "1[.]159[.]90[.]31",
                "1[.]173[.]98[.]163",
                "1[.]175[.]99[.]212",
                "1[.]191[.]147[.]34"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 5475,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 5475,
                "newInLastHour": 5475,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]0[.]164[.]165",
                "1[.]116[.]61[.]217",
                "1[.]14[.]203[.]20",
                "1[.]15[.]103[.]109",
                "1[.]15[.]227[.]58"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 20852,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 20852,
                "newInLastHour": 20852,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://146[.]190[.]244[.]239/pty4",
                "hxxp://146[.]190[.]244[.]239/pty3",
                "hxxp://146[.]190[.]244[.]239/pty10",
                "hxxps://vzsagfrw[.]derbi[.]football/a02b928d-c48d-4e91-a56e-b2f83f3a22a2",
                "hxxps://dvc734k1[.]hazaratbet[.]game/?ublib=72cb809a-c116-4cc8-986e-8a84d448199a"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 4930,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 4930,
                "newInLastHour": 4837,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"38[.]54[.]63[.]135:8080\"",
                " \"38[.]54[.]63[.]135:443\"",
                " \"38[.]54[.]63[.]135:80\"",
                " \"23[.]227[.]203[.]191:10443\"",
                " \"38[.]132[.]122[.]145:6579\""
            ]
        },
        "Feodo Tracker": {
            "description": "Botnet C2 server IPs from Feodo Tracker. Tracks Dridex, Emotet, TrickBot, QakBot, and BazarLoader.",
            "website": "https://feodotracker.abuse.ch/",
            "updateFrequency": "Hourly",
            "iocCount": 5,
            "iocDataUrl": "https://thehgtech.com/ioc-data/feodo-tracker.json",
            "stats": {
                "total": 5,
                "newInLastHour": 5,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "162[.]243[.]103[.]246",
                "178[.]62[.]3[.]223",
                "27[.]133[.]154[.]218",
                "34[.]204[.]119[.]63",
                "50[.]16[.]16[.]211"
            ]
        },
        "SSL Blacklist": {
            "description": "Malicious SSL certificates used by botnet C2 servers. Helps detect encrypted malware communications.",
            "website": "https://sslbl.abuse.ch/",
            "updateFrequency": "Daily",
            "iocCount": 10220,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 10220,
                "newInLastHour": 8590,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "573ff46149f8feb36cd0dbf80427b88aa156ed7b",
                "d490abc2eba705abb1b6391b9be0a12f1e75331b",
                "e86cb30b97c8af13b305fa5cdc7357e23f633447",
                "c4e9396a3a0543fa79cc0a8f23395f90a15e03b0",
                "83424f01b8b7262f3a3cd61048d3337afdcca58a"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 45346,
            "activeSources": 8,
            "criticalAlerts": 23355,
            "activeCampaigns": 159
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 21720,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 4596,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "C2",
                "count": 1635,
                "trend": "down",
                "percentage": -83
            },
            {
                "category": "Phishing",
                "count": 300,
                "trend": "stable",
                "percentage": 0
            }
        ],
        "targetedSectors": [
            {
                "name": "General",
                "percentage": 99
            },
            {
                "name": "Tech",
                "percentage": 0
            },
            {
                "name": "Finance",
                "percentage": 0
            }
        ],
        "campaigns": [
            {
                "name": "malware_download",
                "count": 20781,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://42[.]224[.]93[.]190:55917/bin[.]sh",
                    "hxxp://222[.]141[.]10[.]41:52985/i",
                    "hxxps://scjzlqeyk[.]hazzarat[.]world/0de0d410-4251-423e-a572-31f8b40404ac"
                ]
            },
            {
                "name": "CINS Threat List",
                "count": 15000,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]119[.]194[.]226",
                    "1[.]12[.]229[.]231",
                    "1[.]159[.]52[.]66"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1628,
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
                "name": " \"win.cobalt_strike\"",
                "count": 1443,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"203[.]9[.]150[.]13:8443\"",
                    " \"107[.]173[.]85[.]194:8443\"",
                    " \"203[.]91[.]75[.]89:5005\""
                ]
            },
            {
                "name": " \"win.metastealer\"",
                "count": 997,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"yyowcsswsesksomi[.]xyz\"",
                    " \"yyqewussumqweisi[.]xyz\"",
                    " \"yyqisgekkgammukq[.]xyz\""
                ]
            },
            {
                "name": "Vidar",
                "count": 444,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "4264b1c47eac055ce604ef3509d23cd7e3bd584b",
                    "58a5ded84c93621d72ecc14b386e0e6bea5d103a",
                    "1dedacf3710f30c15b9e73c9d719a969eec755e5"
                ]
            },
            {
                "name": " \"win.remcos\"",
                "count": 387,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"102[.]220[.]160[.]105:2404\"",
                    " \"204[.]44[.]93[.]75:14641\"",
                    " \"204[.]44[.]93[.]75:14642\""
                ]
            },
            {
                "name": " \"Mirai",
                "count": 356,
                "types": [
                    "hash"
                ],
                "sampleIndicators": [
                    " \"199370e9ef009d12fee9b3c4ad682dd95d2809d3081396a839d4316b9107b1ac",
                    " \"3bf8bc35c9909047deea7338c690480e8e2e36e5eb36b207c449080bda0e9a40",
                    " \"94a7cc706c15d397c1269f95c40b34d0ad7b9d4a90289bc1a133fc77323a3e98"
                ]
            },
            {
                "name": " \"win.asyncrat\"",
                "count": 305,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"45[.]32[.]90[.]122:6606\"",
                    " \"43[.]225[.]157[.]146:7707\"",
                    " \"217[.]60[.]241[.]10:8808\""
                ]
            },
            {
                "name": "Generic Phishing",
                "count": 298,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxps://www[.]roblox[.]com[.]ml/users/162176377204/profile",
                    "hxxps://s4w[.]in/www-roblox-com-hk-users-162176377204-profile",
                    "hxxps://www[.]ti[.]biogasos[.]com/"
                ]
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious URLs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": "AsyncRAT",
        "totalAttacksThisHour": 55214,
        "lastCalculated": "2026-07-17 15:37 IST"
    }
};
