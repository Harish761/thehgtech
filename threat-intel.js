// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-07-09T16:46:06.910848+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-07-09T16:46:06.517245+05:30",
    "lastUpdatedFormatted": "Jul 09, 2026 at 04:46 PM IST",
    "comparisonPeriod": "Jul 08 \u2013 Jul 09, 2026",
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
                "hxxps://www[.]g87365[.]com/",
                "hxxp://www[.]17669[.]xyz/",
                "hxxps://unl[.]one/httpswwwrobloxcomusers10091533529profile[.]lnk",
                "hxxps://click-hostopoint-ch-redirect5824312[.]blogspot[.]com/",
                "hxxp://www[.]kmnnn[.]top/"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 1328,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 1328,
                "newInLastHour": 174,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"0565795a8d4ebc7778581c4953d4146e7f747c335cfc0a9750b41cfe695a5f4e",
                " \"2d3612c0a12fa42f09af233918b0d4971a36fe33fbde67f8c57cd6a5d0df4387",
                " \"c45ab3f555c478b6ba4ecf4e3aa3505a9358ca1d564b25d79f1f77bba9c73793",
                " \"88ca388566f9466c996dd725340153e41f4f864550c958569b01063a4d434212",
                " \"bb3ccdbef170acd8a990acf5c053e288f1bbe7283d074d8c37298cbdbf70d6b1"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1680,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1680,
                "newInLastHour": 0,
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
                "1[.]158[.]52[.]79",
                "1[.]159[.]52[.]66",
                "1[.]165[.]41[.]139",
                "1[.]188[.]100[.]176"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 9000,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 9000,
                "newInLastHour": 9000,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]0[.]164[.]165",
                "1[.]1[.]220[.]166",
                "1[.]162[.]197[.]67",
                "1[.]162[.]225[.]185",
                "1[.]162[.]226[.]31"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 22100,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 22100,
                "newInLastHour": 22100,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://112[.]248[.]110[.]0:35255/i",
                "hxxps://xfcv55u8[.]iraniporn[.]video/?ublib=6ecfa6fe-e170-4920-b8e4-d9e5399d8e0a",
                "hxxp://115[.]50[.]95[.]121:59995/bin[.]sh",
                "hxxps://getsolara[.]live/Launcher[.]exe",
                "hxxp://94[.]154[.]43[.]192/fmkyq9[.]sh"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 4271,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 4271,
                "newInLastHour": 4161,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"abrmot[.]pro\"",
                " \"hxxps://henreques[.]lol/file[.]js\"",
                " \"henreques[.]lol\"",
                " \"hxxps://henreques[.]lol/api/v1/session\"",
                " \"hxxps://henreques[.]lol/api/v1/verify\""
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
            "iocCount": 10123,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 10123,
                "newInLastHour": 16,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "d06dfdf841a409515705fdf652154c78cf34a21e",
                "206219a2b2d7704733e09b28d639f4e574ed81df",
                "1e9d00de147af3c24b22721d8c18680150dad2d5",
                "16e2a45afc9c237a463c23e14110aebb700085db",
                "d05f2a01d4f42a8373c707d3622fb447e5aeda86"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 54558,
            "activeSources": 8,
            "criticalAlerts": 33408,
            "activeCampaigns": 251
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 23303,
                "trend": "stable",
                "percentage": -2
            },
            {
                "category": "C2",
                "count": 10105,
                "trend": "stable",
                "percentage": 1
            },
            {
                "category": "Botnet",
                "count": 3390,
                "trend": "stable",
                "percentage": 0
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
                "count": 21919,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxps://eiuphpvo[.]fiorentini[.]ir/8477f959-ef4f-460e-a604-625a89e32902",
                    "hxxp://110[.]37[.]39[.]234:40735/i",
                    "hxxp://182[.]117[.]148[.]156:56226/bin[.]sh"
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
                    "1[.]15[.]14[.]29",
                    "1[.]158[.]52[.]79"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1680,
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
                "count": 1461,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"47[.]108[.]60[.]27:443\"",
                    " \"47[.]108[.]60[.]27:8080\"",
                    " \"173[.]249[.]27[.]195:443\""
                ]
            },
            {
                "name": "AsyncRAT",
                "count": 1421,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "41cbe997a63cc9211fd19593cfcf27602d10bcd8",
                    "526b4a8604d900869439980614e56e4b288fb46d",
                    "15a47f45b77ef377b9ec7f6aff1fc3fcca1c6035"
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
                "count": 691,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "1b64957d1d878c0c0b0b346849db2e64d487aa17",
                    "83ff65960d2df4b29e78d6fd0342dcd5f053eb13",
                    "ac563907d31a21443760cee92a98b50bba6152aa"
                ]
            },
            {
                "name": "Vidar",
                "count": 633,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "72a2354f33ff1d38b31cb19209b4b90acafaf46d",
                    "ec452c3c30499a1a6983877a2d881c1a8f2955ea",
                    "e553bfd006337f4cb3a3acf5a681980d184b79e6"
                ]
            },
            {
                "name": "LummaStealer",
                "count": 556,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "2beac2ee8b2fe7625d4de9f5381d37f200965f91",
                    "a46841d623a191366909b24375bee0eceea23bbe",
                    "272e76f605bec1da1ea719df8dc0e7269de7d44e"
                ]
            },
            {
                "name": " \"n/a",
                "count": 456,
                "types": [
                    "hash"
                ],
                "sampleIndicators": [
                    " \"44133ca548dcd718f6e93db14a46697d5fe6b250a2cd071dbf27cc4b0e2739be",
                    " \"b0194c2c0f5d3779822b8ea3ec8ddb802b66b661079955809d7a397c19b70d32",
                    " \"fa9e15d16073b0be6dcca03fa47440d84d982988a2612c98c9d45be2ce3c4d14"
                ]
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious URLs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": "malware_download",
        "totalAttacksThisHour": 50756,
        "lastCalculated": "2026-07-09 16:46 IST"
    }
};
