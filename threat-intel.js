// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-03-07T22:10:05.954623+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-03-07T22:10:05.676749+05:30",
    "lastUpdatedFormatted": "Mar 07, 2026 at 10:10 PM IST",
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
                "hxxps://m-facebookk[.]com[.]vn/1mdf3g383mb?v",
                "hxxp://twtr023[.]surge[.]sh/",
                "hxxps://khalid9096[.]github[.]io/Amazon-Clone-Website",
                "hxxps://authfile[.]us-east-1[.]linodeobjects[.]com/moon052026[.]html",
                "hxxps://kucoin-logink[.]gitbook[.]io/us/"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 1384,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 1384,
                "newInLastHour": 61,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"b93fd9dfa9d03389fc29b4cbeff96b1ebf2da55fd90ef11e64a193bb98d66eb8",
                " \"66adeedfb739774fcc09aa7426c8fad29f8047ab4caee8040d07c0e84d011611",
                " \"34d64b3cd9430e85edefcb883973a086dd5de9917e05fabec89b1f4ab9627e91",
                " \"f36913607356a32ea106103387105c635fa923f8ed98ad0194b66ec79e379a02",
                " \"711d9427ee43bc2186b9124f31cba2db5f54ec9a0d56dc2948e1a4377bada289"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1532,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1532,
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
                "1[.]15[.]14[.]29",
                "1[.]170[.]60[.]81",
                "1[.]177[.]63[.]24",
                "1[.]180[.]252[.]30",
                "1[.]188[.]101[.]189"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 7284,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 7284,
                "newInLastHour": 7284,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]117[.]75[.]174",
                "1[.]12[.]45[.]226",
                "1[.]13[.]6[.]145",
                "1[.]15[.]136[.]101",
                "1[.]15[.]136[.]28"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 19120,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 19120,
                "newInLastHour": 19120,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxps://salv-net[.]crucifionsalval[.]in[.]net/verification[.]google",
                "hxxp://115[.]51[.]93[.]196:53431/bin[.]sh",
                "hxxp://115[.]49[.]203[.]152:35447/i",
                "hxxps://salv-unit[.]crucifionsalval[.]in[.]net/verification[.]google",
                "hxxp://182[.]119[.]58[.]238:39149/bin[.]sh"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 1850,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 1850,
                "newInLastHour": 1679,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"mangabalkan[.]org\"",
                " \"salv-net[.]crucifionsalval[.]in[.]net\"",
                " \"manfredblog[.]de\"",
                " \"cruc-v9[.]crucifionsalval[.]in[.]net\"",
                " \"salv-unit[.]crucifionsalval[.]in[.]net\""
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
                "newInLastHour": 4,
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
            "totalIndicators": 48265,
            "activeSources": 8,
            "criticalAlerts": 29573,
            "activeCampaigns": 226
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 20423,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "C2",
                "count": 9150,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 1290,
                "trend": "stable",
                "percentage": -5
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
                "count": 19007,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://61[.]53[.]89[.]245:44949/i",
                    "hxxp://220[.]202[.]64[.]110:37894/bin[.]sh",
                    "hxxp://117[.]209[.]91[.]65:42726/i"
                ]
            },
            {
                "name": "CINS Threat List",
                "count": 15000,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]15[.]14[.]29",
                    "1[.]170[.]60[.]81",
                    "1[.]177[.]63[.]24"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1538,
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
                "count": 1388,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "d5a586a42fd4e36396467ae8d16045a5efd6bada",
                    "b4f112278f6f59e5e9d0a2aeb252c111a3ae8603",
                    "08ed72afb9e65a6b0c216c2f47dfea81d64c9289"
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
                "name": " \"unknown\"",
                "count": 644,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"20[.]100[.]168[.]21:7443\"",
                    " \"hxxps://cdn3-cloudservices-verify[.]t3[.]storage[.]dev/follow/index[.]html?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=tid_Nl_UVnrlTsPFGJopLnpfmGrvpgTyRTbexMsA_zhm_SbzIxFvyp%2F20260306%2Fauto%2Fs3%2Faws4_request&X-Amz-Date=20260306T125126Z&X-Amz-Expires=172800&X-Amz-SignedHeaders=host&X-Amz-Signature=119933e7d1a96d2c07ac541a641e6de626ce18247ab1555cf5da7838efe9c897\"",
                    " \"tricitiesbydesign[.]com\""
                ]
            },
            {
                "name": "QuasarRAT",
                "count": 633,
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
                "count": 502,
                "types": [
                    "hash"
                ],
                "sampleIndicators": [
                    " \"4e0ae7e62564ae0fe2a288b896b04de374100c20bfe48bf436bc6f0c5b609002",
                    " \"50c771c9dc29be1a5bbe62509ca245ad230db1c1a87f968c53e19e8f941c37fe",
                    " \"a0fc22541c288fadfddb1de69d02f531ba9d88ee507bfeb25aafb071722f1e5b"
                ]
            },
            {
                "name": "Vidar",
                "count": 388,
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
        "topAttackVector": "Malicious IPs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": "SSH Attacks",
        "totalAttacksThisHour": 43451,
        "lastCalculated": "2026-03-07 22:10 IST"
    }
};
