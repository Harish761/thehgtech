// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2025-12-12T14:11:16.869642+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2025-12-12T14:11:16.592633+05:30",
    "lastUpdatedFormatted": "Dec 12, 2025 at 02:11 PM IST",
    "comparisonPeriod": "Dec 11 \u2013 Dec 12, 2025",
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
                "hxxps://ghaeapost-gh[.]ink/GH",
                "hxxps://themusicbelow[.]com/wp-content/maintenance/assets/font-awesome/login[.]php/",
                "hxxps://en-us-suites[.]framer[.]ai/",
                "hxxp://www[.]88024[.]xyz/",
                "hxxps://santosga[.]dreamhosters[.]com/bokl/auth/login[.]php"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 791,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 791,
                "newInLastHour": 87,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"68b84a389df928ac1d9a04d68a864f2e1ab131ad9b3068d37f18cfb3775d5f01",
                " \"6001c708a211b194771aeec96576dda3a6adf3debd3ead7059444f29f47950f0",
                " \"efb816c7730318172e5d19b3cd32ad557fa4ca66a87bb92593ba0ef71481f958",
                " \"8e5f5b0f4b585296027c7e59a8184771cec34ea3cfcec2688bf4da4026b271d3",
                " \"f5427c4f5808a6bc1da015f3ec7886023c25c49db7b10d8f1447f377640256df"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1495,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1495,
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
                "1[.]1[.]179[.]25",
                "1[.]177[.]22[.]68",
                "1[.]181[.]114[.]38",
                "1[.]181[.]69[.]174",
                "1[.]193[.]63[.]113"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 5952,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 5952,
                "newInLastHour": 5952,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]1[.]179[.]25",
                "1[.]12[.]53[.]235",
                "1[.]12[.]64[.]80",
                "1[.]13[.]79[.]144",
                "1[.]162[.]231[.]97"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 28732,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 28732,
                "newInLastHour": 28732,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxps://cwt[.]m1stleaf[.]ru/63v5ljdc",
                "hxxps://cwt[.]m1stleaf[.]ru/616k64bq",
                "hxxps://qo1u[.]m1stleaf[.]ru/r8nmokw2",
                "hxxps://yljy[.]m1stleaf[.]ru/drvohwk7",
                "hxxps://yljy[.]m1stleaf[.]ru/xe4vsg9m"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 2324,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 2324,
                "newInLastHour": 2102,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"8l8gr[.]clearh0st[.]ru\"",
                " \"crest[.]m1stleaf[.]ru\"",
                " \"cwt[.]m1stleaf[.]ru\"",
                " \"77[.]83[.]240[.]193:8001\"",
                " \"77[.]83[.]240[.]194:8001\""
            ]
        },
        "Feodo Tracker": {
            "description": "Botnet C2 server IPs from Feodo Tracker. Tracks Dridex, Emotet, TrickBot, QakBot, and BazarLoader.",
            "website": "https://feodotracker.abuse.ch/",
            "updateFrequency": "Hourly",
            "iocCount": 4,
            "iocDataUrl": "https://thehgtech.com/ioc-data/feodo-tracker.json",
            "stats": {
                "total": 4,
                "newInLastHour": 4,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "15[.]204[.]219[.]215",
                "162[.]243[.]103[.]246",
                "167[.]86[.]75[.]145",
                "51[.]210[.]96[.]48"
            ]
        },
        "SSL Blacklist": {
            "description": "Malicious SSL certificates used by botnet C2 servers. Helps detect encrypted malware communications.",
            "website": "https://sslbl.abuse.ch/",
            "updateFrequency": "Daily",
            "iocCount": 8618,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 8618,
                "newInLastHour": 8523,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "d290f26e5af29e87034418cfd5b100d7d2fead9d",
                "50def7da0eb236fcb1d55eb802039ddd95049da9",
                "d6e284f5f98ea579d66235833e9f2dc1bfaa59dd",
                "84c5b32bdca11a7e3850b93be0624cd8f75f2ef5",
                "7df151365b79ad2689b01337e63203476768d37a"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 48460,
            "activeSources": 8,
            "criticalAlerts": 29502,
            "activeCampaigns": 114
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 29403,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 1382,
                "trend": "stable",
                "percentage": -2
            },
            {
                "category": "Phishing",
                "count": 300,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "C2",
                "count": 99,
                "trend": "down",
                "percentage": -98
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
                "count": 28571,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxps://sun[.]s0ftcrest[.]ru/wzz0muo4",
                    "hxxps://sun[.]s0ftcrest[.]ru/vl1s5gyu",
                    "hxxps://storm[.]s0ftcrest[.]ru/v36fbsnu"
                ]
            },
            {
                "name": "CINS Threat List",
                "count": 15000,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]177[.]22[.]68",
                    "1[.]181[.]114[.]38",
                    "1[.]181[.]69[.]174"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1495,
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
                "name": " \"win.phorpiex\"",
                "count": 467,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"ssofhoseuegsgrfnuy[.]net\"",
                    " \"slpsrgpsrhojifdijy[.]net\"",
                    " \"srndndubsbsifurfd[.]biz\""
                ]
            },
            {
                "name": " \"js.clearfake\"",
                "count": 313,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"sun[.]s0ftcrest[.]ru\"",
                    " \"storm[.]s0ftcrest[.]ru\"",
                    " \"dh28[.]s0ftcrest[.]ru\""
                ]
            },
            {
                "name": "Generic Phishing",
                "count": 296,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxps://ghaeapost-gh[.]ink/GH",
                    "hxxps://themusicbelow[.]com/wp-content/maintenance/assets/font-awesome/login[.]php/",
                    "hxxps://en-us-suites[.]framer[.]ai/"
                ]
            },
            {
                "name": " \"Mirai",
                "count": 280,
                "types": [
                    "hash"
                ],
                "sampleIndicators": [
                    " \"c39a920d495e23eb8737cd033605e8509df57e909a059b538359371fb18bc4f9",
                    " \"2d7050a46a7f2cbf557a6b5e03b0ec750d8eff591c5eba7060307c063ab1e2e0",
                    " \"6a445cf6b80b7e0032939a7a0d9973be4ec06a350577044cef6de5953c97f306"
                ]
            },
            {
                "name": " \"win.cobalt_strike\"",
                "count": 275,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"119[.]45[.]250[.]8:443\"",
                    " \"43[.]138[.]159[.]121:88\"",
                    " \"156[.]234[.]145[.]37:43131\""
                ]
            },
            {
                "name": " \"n/a",
                "count": 219,
                "types": [
                    "hash"
                ],
                "sampleIndicators": [
                    " \"50e1f1ac7b3562bb9042be699b7810f76e3e03607aea073f119006d489c3277e",
                    " \"e82b64bf5f0b83aedd91ee4b96b0cc864a58fdb1b2774cdd327d4e5ef83a9381",
                    " \"4f535ecbbfd6e2057f6670e2993a9a05425802623e73cd1d90f8ef1e95c6aa96"
                ]
            },
            {
                "name": " \"unknown_stealer\"",
                "count": 201,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"23[.]227[.]202[.]244:1224\"",
                    " \"146[.]70[.]253[.]107:1224\"",
                    " \"23[.]227[.]202[.]51:1224\""
                ]
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious URLs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": "AsyncRAT",
        "totalAttacksThisHour": 60700,
        "lastCalculated": "2025-12-12 14:11 IST"
    }
};
