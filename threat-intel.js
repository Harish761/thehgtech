// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-10-11T01:30:29.740491+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-10-11T01:30:29.299295+05:30",
    "lastUpdatedFormatted": "Oct 11, 2026 at 01:30 AM IST",
    "comparisonPeriod": "Oct 10 \u2013 Oct 11, 2026",
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
                "hxxps://trezorio-xearn[.]gitbook[.]io/",
                "hxxps://f003[.]backblazeb2[.]com/file/tiackz/index[.]html",
                "hxxp://uf1k29[.]s[.]gy/NYl7df/",
                "hxxps://magadodia[.]site/produto/8677728",
                "hxxp://web-iostrt-trezr-cloud[.]framer[.]ai/"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 840,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 840,
                "newInLastHour": 81,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"f602c9b0ff36b90c47d65c788200c7d62e898717f1c041848c68e5a07c79ccce",
                " \"80bc4c31dccd5ce5505b10301d0d5edc25218597f03a27c1eebef3c51a442437",
                " \"4a87be45969bf8b7096748378337f3bac9810500e9ccada1238fddfafeb2c6ab",
                " \"ad49ca89869d7fef4850cda6c586abe11b059f590b66192ad0fd5cf81cad4fc1",
                " \"833c70accacc6cbb75bfb29c7b42c9a8b0d4851d0448a29748a08d6a5b163024"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1625,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1625,
                "newInLastHour": 29,
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
                "1[.]0[.]215[.]19",
                "1[.]193[.]58[.]33",
                "1[.]20[.]175[.]54",
                "1[.]215[.]138[.]43",
                "1[.]223[.]11[.]69"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 4238,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 4238,
                "newInLastHour": 4238,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]0[.]164[.]165",
                "1[.]0[.]243[.]191",
                "1[.]117[.]72[.]220",
                "1[.]14[.]240[.]247",
                "1[.]162[.]245[.]71"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 33080,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 33080,
                "newInLastHour": 33080,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://115[.]61[.]115[.]27:49429/bin[.]sh",
                "hxxp://123[.]233[.]198[.]83:52155/bin[.]sh",
                "hxxp://58[.]22[.]19[.]96:48437/i",
                "hxxp://42[.]6[.]56[.]231:34029/i",
                "hxxp://182[.]121[.]156[.]64:56808/bin[.]sh"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 6826,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 6826,
                "newInLastHour": 6180,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"94[.]154[.]43[.]64:4321\"",
                " \"91[.]92[.]41[.]151:56003\"",
                " \"89[.]47[.]99[.]241:443\"",
                " \"82[.]26[.]66[.]167:443\"",
                " \"78[.]71[.]213[.]70:443\""
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
            "iocCount": 10906,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 10906,
                "newInLastHour": 125,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "3904919770fb59a5c74df86090853e3f19a09575",
                "3644a1d19d369a66e0970ee6e997736f1338727f",
                "9f71ec8a14e7a86f050b0484934ce8acc519fa91",
                "6d90086b95e788305c8127c70122f967f1cd2a48",
                "1f47c0e1175b385853ea70babda305baf0ac8709"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 68995,
            "activeSources": 8,
            "criticalAlerts": 44771,
            "activeCampaigns": 288
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 33975,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "C2",
                "count": 10796,
                "trend": "stable",
                "percentage": 1
            },
            {
                "category": "Botnet",
                "count": 4311,
                "trend": "stable",
                "percentage": 1
            },
            {
                "category": "Phishing",
                "count": 302,
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
                "percentage": 0
            },
            {
                "name": "Finance",
                "percentage": 0
            },
            {
                "name": "Government",
                "percentage": 0
            }
        ],
        "campaigns": [
            {
                "name": "malware_download",
                "count": 33003,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://119[.]117[.]251[.]43:56180/i",
                    "hxxp://119[.]117[.]251[.]43:56180/bin[.]sh",
                    "hxxp://42[.]230[.]38[.]184:40155/bin[.]sh"
                ]
            },
            {
                "name": "CINS Threat List",
                "count": 15000,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]0[.]215[.]19",
                    "1[.]12[.]229[.]231",
                    "1[.]192[.]129[.]106"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1654,
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
                "count": 1451,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "5fe196813d0bf092a5d8f3ef550fe959a86ccf87",
                    "205d49b6c7313e16e931e1b5873cc20be0dee85b",
                    "94c4ec66b6f57c29ac935890d7796decea67af37"
                ]
            },
            {
                "name": " \"win.cobalt_strike\"",
                "count": 1327,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"198[.]46[.]143[.]15:8080\"",
                    " \"49[.]235[.]158[.]141:8082\"",
                    " \"198[.]46[.]143[.]15:443\""
                ]
            },
            {
                "name": "Vidar",
                "count": 800,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "3644a1d19d369a66e0970ee6e997736f1338727f",
                    "dad953249b7dc6a1491183ca1f790b78038872c8",
                    "3013447f5f36ed0c97f878cd6106853088a49ef8"
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
                "count": 711,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "9f71ec8a14e7a86f050b0484934ce8acc519fa91",
                    "b292d5884328be709c0c79ffd7c82c3fe9846417",
                    "eabc77465bebeb1b8b4980dbaa185cfcf64b4f92"
                ]
            },
            {
                "name": " \"unknown_loader\"",
                "count": 646,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"6c2446f06869a50df82165dbbc78527186cc70e8ebb50c48634de0ab9057c00a\"",
                    " \"0a5c86ee3956ef4bf3349adaef85208809b41de2f98aefd7956645e7e9ea5342\"",
                    " \"6c977cac10245be0d1222fa444aafeed327e840a8864c7a37feb401ed51e7257\""
                ]
            },
            {
                "name": " \"win.pure_rat\"",
                "count": 625,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"173[.]214[.]167[.]250:7730\"",
                    " \"45[.]88[.]91[.]164:56001\"",
                    " \"45[.]139[.]104[.]26:56015\""
                ]
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious URLs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": "malware_download",
        "totalAttacksThisHour": 59038,
        "lastCalculated": "2026-10-11 01:30 IST"
    }
};
