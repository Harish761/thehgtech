// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-10-10T19:55:56.632093+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-10-10T19:55:56.238853+05:30",
    "lastUpdatedFormatted": "Oct 10, 2026 at 07:55 PM IST",
    "comparisonPeriod": "Oct 09 \u2013 Oct 10, 2026",
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
            "iocCount": 947,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 947,
                "newInLastHour": 182,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"1d3f49d61581cd0a90cd1757602b6f99af03c043bfc71e5eb6b13531aa340480",
                " \"9bdedb876d838afbb66ccb1b73f0e2c90a9cce8d8467a506f0a1ecb851279792",
                " \"53d27245ee5e9928482f9ac7bb9b54181586eaea2b4124590a14d8e41fcf088c",
                " \"a21171229054ecc0ddceec11632c2e157991dabd757ff2355b4a10e48962a60f",
                " \"fc9f8b1517a71309775a1911aab9de4d7bedab9846ab5047a8147d2aab098f5d"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1654,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1654,
                "newInLastHour": 60,
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
                "1[.]12[.]229[.]231",
                "1[.]192[.]129[.]106",
                "1[.]193[.]58[.]33",
                "1[.]20[.]175[.]54"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 4307,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 4307,
                "newInLastHour": 4307,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]0[.]164[.]165",
                "1[.]0[.]243[.]191",
                "1[.]117[.]72[.]220",
                "1[.]14[.]192[.]95",
                "1[.]14[.]240[.]247"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 33003,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 33003,
                "newInLastHour": 33003,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://119[.]117[.]251[.]43:56180/i",
                "hxxp://119[.]117[.]251[.]43:56180/bin[.]sh",
                "hxxp://42[.]230[.]38[.]184:40155/bin[.]sh",
                "hxxp://42[.]224[.]84[.]63:33614/bin[.]sh",
                "hxxp://42[.]224[.]84[.]63:33614/i"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 7268,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 7268,
                "newInLastHour": 6419,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"63e726bee554a09ad7de1f8303928850b94174a8e8828c224b9d9c54dc1b2656\"",
                " \"165c77e0cb3fc6551babc2de99e0c5182fb86e20ac3354da7ae980b580721049\"",
                " \"6c2446f06869a50df82165dbbc78527186cc70e8ebb50c48634de0ab9057c00a\"",
                " \"0a5c86ee3956ef4bf3349adaef85208809b41de2f98aefd7956645e7e9ea5342\"",
                " \"6c977cac10245be0d1222fa444aafeed327e840a8864c7a37feb401ed51e7257\""
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
            "iocCount": 10818,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 10818,
                "newInLastHour": 296,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "3644a1d19d369a66e0970ee6e997736f1338727f",
                "9f71ec8a14e7a86f050b0484934ce8acc519fa91",
                "6d90086b95e788305c8127c70122f967f1cd2a48",
                "1f47c0e1175b385853ea70babda305baf0ac8709",
                "6286936434232449af5d2cb4e15d6cb1c0ae61a2"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 68450,
            "activeSources": 8,
            "criticalAlerts": 44349,
            "activeCampaigns": 294
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 33725,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "C2",
                "count": 10624,
                "trend": "stable",
                "percentage": -2
            },
            {
                "category": "Botnet",
                "count": 4248,
                "trend": "stable",
                "percentage": 0
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
                "count": 32711,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://220[.]202[.]91[.]248:55001/i",
                    "hxxp://116[.]10[.]133[.]42:48435/i",
                    "hxxp://79[.]40[.]75[.]47:38286/i"
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
                    "1[.]15[.]14[.]29"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1623,
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
                "count": 1446,
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
                "name": " \"win.cobalt_strike\"",
                "count": 1299,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"39[.]96[.]65[.]0:22\"",
                    " \"156[.]67[.]105[.]187:5602\"",
                    " \"156[.]67[.]105[.]187:6060\""
                ]
            },
            {
                "name": "Vidar",
                "count": 741,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "dad953249b7dc6a1491183ca1f790b78038872c8",
                    "3013447f5f36ed0c97f878cd6106853088a49ef8",
                    "f1d3bed8c625dc1785842ced7f1cf6aadb85942a"
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
                "count": 702,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "b292d5884328be709c0c79ffd7c82c3fe9846417",
                    "eabc77465bebeb1b8b4980dbaa185cfcf64b4f92",
                    "4768d20d3072a30b168c650b11a9e4d3e1a0dc60"
                ]
            },
            {
                "name": " \"unknown_loader\"",
                "count": 664,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"groupby[.]careers\"",
                    " \"includetraining[.]eu\"",
                    " \"whisperingheavens[.]co[.]uk\""
                ]
            },
            {
                "name": " \"win.pure_rat\"",
                "count": 624,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"45[.]88[.]91[.]164:56001\"",
                    " \"45[.]139[.]104[.]26:56015\"",
                    " \"217[.]60[.]77[.]63:56003\""
                ]
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious URLs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": "malware_download",
        "totalAttacksThisHour": 59572,
        "lastCalculated": "2026-10-10 19:55 IST"
    }
};
