// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-10-05T10:55:58.785310+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-10-05T10:55:58.391762+05:30",
    "lastUpdatedFormatted": "Oct 05, 2026 at 10:55 AM IST",
    "comparisonPeriod": "Oct 04 \u2013 Oct 05, 2026",
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
                "hxxps://www[.]roblox[.]com[.]ml/games/920587237/Adopt-Me?privateServerLinkCode=224828442134377448645912919533",
                "hxxps://zustellzentrumfurpakete5x[.]ink/hJ72m8",
                "hxxps://zustellzentrumfurpakete4x[.]ink/bX9w4M",
                "hxxp://datagivers[.]com/08156ebefeaa7a44f468ad54363b56876eb0[.]html",
                "hxxp://datagivers[.]com/078ec3ce7e6f374b5c6b1376a54b33a4b32a[.]html"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 970,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 970,
                "newInLastHour": 76,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"cb06b7dc4bcdf7ce1ac83fdd17bb2638bf3cefcae956ee053899b30a31a97d8d",
                " \"a61ba4f611fc68f33bbd445ab53b7d8d3fc373746d99ae264d77961a52a071e9",
                " \"c63226d1962d07fcb5303ca2b8e0d82aa6468aed86050197db502525654cf095",
                " \"36a048b70f0add874047b8b9e794182497fe7a0580e9a0a4eb3638cbf0111a21",
                " \"1d6fd65e639d9a3ac93a8c15bf2d39f518b27ff34bbb8b806fc16a1435948a7f"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1614,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1614,
                "newInLastHour": 9,
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
                "1[.]14[.]149[.]30",
                "1[.]15[.]11[.]89",
                "1[.]15[.]14[.]29",
                "1[.]193[.]56[.]152"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 0,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 0,
                "newInLastHour": 0,
                "lastUpdate": "just now"
            },
            "types": [],
            "sampleIndicators": []
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 16373,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 16373,
                "newInLastHour": 16373,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://59[.]180[.]158[.]18:57700/bin[.]sh",
                "hxxp://120[.]84[.]212[.]119:45721/i",
                "hxxp://106[.]58[.]126[.]44:36106/i",
                "hxxp://59[.]96[.]141[.]231:59746/i",
                "hxxp://27[.]44[.]147[.]229:34870/i"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 10133,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 10133,
                "newInLastHour": 8043,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"130[.]185[.]82[.]117:8080\"",
                " \"6vc5tque[.]baldreamloans[.]com[.]au\"",
                " \"70d911746eed11854ee20db2103a7fd453a7ec5e3124163b2e32eb03d3165b76\"",
                " \"e7aeac7b5834cc74cc104dfb928a328c8182c0dd24d02ba43d2b831e9f63ec72\"",
                " \"6ebed3c1e81d673fa1dfce726b7adfffcce35de329ffdf4f666f86c5ff61c7d1\""
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
            "iocCount": 10796,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 10796,
                "newInLastHour": 8,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "2d22783f272d8fb12ff94ac13466fcd9a9a2ccc2",
                "fec72b31ad1f9e2e080c83f3964b34fe81e4a8e4",
                "bfc3decb728fc2becb887cc23c6cf46a2fdcbb8d",
                "1c04120f29c25a1e06b4f48651fc9eaaecd45eaa",
                "07fa3f9a48cdbe0d045c16a741f09237aacf2c3d"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 56498,
            "activeSources": 8,
            "criticalAlerts": 28497,
            "activeCampaigns": 254
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 17639,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "C2",
                "count": 10858,
                "trend": "up",
                "percentage": 376
            },
            {
                "category": "Botnet",
                "count": 4189,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Phishing",
                "count": 301,
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
                "count": 16627,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://27[.]215[.]124[.]85:40583/bin[.]sh",
                    "hxxp://210[.]208[.]111[.]36:45746/i",
                    "hxxp://115[.]57[.]230[.]101:45103/i"
                ]
            },
            {
                "name": "CINS Threat List",
                "count": 15000,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]12[.]229[.]231",
                    "1[.]14[.]149[.]30",
                    "1[.]15[.]14[.]29"
                ]
            },
            {
                "name": " \"unknown_loader\"",
                "count": 2617,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"call-united[.]com\"",
                    " \"cvpro4u[.]com\"",
                    " \"depannage-porte-sectionnelle[.]com\""
                ]
            },
            {
                "name": " \"elf.mirai\"",
                "count": 1929,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"f6fbb28a2648634d262e7a8786ad78302e0c9d0c93ab7f541f1c5c8856591fd4\"",
                    " \"e7f014c57e9566c2c513b9e774e912b0e11c28e451b06702fadc692c57823ba8\"",
                    " \"66024c3e81837a3a9513ebc6e8e93176b82529db47a43de88fd4cf2d859f712f\""
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1682,
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
                "count": 1458,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "58b3990b07e9caaa2c504a5b9759d14eefcbc5e5",
                    "64c5f719aa0111be2ac04d785a8904b5baa22a88",
                    "5fe196813d0bf092a5d8f3ef550fe959a86ccf87"
                ]
            },
            {
                "name": " \"win.asyncrat\"",
                "count": 1411,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"08efdc76f3809e93f6d0fa8bcea60aa4849a3cb0d04f3b5c8293559cca82af74\"",
                    " \"46[.]246[.]6[.]4:2703\"",
                    " \"45[.]32[.]135[.]118:7777\""
                ]
            },
            {
                "name": " \"win.cobalt_strike\"",
                "count": 1313,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"144[.]172[.]68[.]200:8443\"",
                    " \"115[.]159[.]101[.]177:50050\"",
                    " \"106[.]55[.]253[.]229:8080\""
                ]
            },
            {
                "name": "Vidar",
                "count": 814,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "80a11d8978c116516b3e6e0dabdcd381bc3511a1",
                    "30cc75ff5ee466fba938458513d89d8270a5b882",
                    "60fd7f114b0a4015ad7f634223491259bc50ab7d"
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
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious URLs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": " \"py.pxa_stealer\"",
        "totalAttacksThisHour": 39814,
        "lastCalculated": "2026-10-05 10:55 IST"
    }
};
