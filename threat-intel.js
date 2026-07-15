// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-07-16T01:15:47.267197+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-07-16T01:15:46.904267+05:30",
    "lastUpdatedFormatted": "Jul 16, 2026 at 01:15 AM IST",
    "comparisonPeriod": "Jul 15 \u2013 Jul 16, 2026",
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
                "hxxps://maxiis[.]eu[.]cc/my",
                "hxxps://ammkbd[.]com/mycss/ch/376/step5[.]php",
                "hxxps://ammkbd[.]com/mycss/ch/376/load[.]php",
                "hxxp://shopee-performance-dashboard[.]pages[.]dev/",
                "hxxp://agenciatribteries[.]top/es"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 841,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 841,
                "newInLastHour": 14,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"e11773b22889ab6dab23e98f5359fc502adda92fbbf0bfc983e07d578612f73e",
                " \"50fd629e4aa499cf0d489cd94edbad5ad84fb1b0128a7b99763d987cfe29fa08",
                " \"006ccbda5434c9ae7c9aff1d223faba4d1fe3b0ab2ac07701a7751e088c98c17",
                " \"3d17911507c02bc52ef71467a18775918e575ba356283a155dd8cab59c1617c5",
                " \"25b58fff1db2ffe258838fd7155c76c78819c9e3cfa3f94b8907e967365f4bb1"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1621,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1621,
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
                "1[.]15[.]14[.]29",
                "1[.]159[.]90[.]31",
                "1[.]175[.]81[.]181",
                "1[.]177[.]162[.]2"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 5275,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 5275,
                "newInLastHour": 5275,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]0[.]164[.]165",
                "1[.]1[.]220[.]166",
                "1[.]162[.]231[.]16",
                "1[.]197[.]102[.]62",
                "1[.]20[.]140[.]252"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 21383,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 21383,
                "newInLastHour": 21383,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxps://ajzzqcazg[.]nextbahis[.]one/3d1b418d-9c8f-40fd-905f-c847013762fc",
                "hxxp://113[.]236[.]97[.]10:46916/bin[.]sh",
                "hxxp://62[.]60[.]226[.]140/files/7782139129/QbWm8Dl[.]exe",
                "hxxp://61[.]53[.]85[.]95:40375/bin[.]sh",
                "hxxps://rxxcydjgk[.]enfejartime[.]com/895adee6-db86-4b2c-b9c1-d70698e4c525"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 4358,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 4358,
                "newInLastHour": 4083,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"ajzzqcazg[.]nextbahis[.]one\"",
                " \"gtm-service[.]xyz\"",
                " \"116[.]198[.]233[.]179:4434\"",
                " \"14[.]29[.]160[.]181:123\"",
                " \"14[.]29[.]160[.]181:22\""
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
            "iocCount": 10193,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 10193,
                "newInLastHour": 0,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "47a42b7e960e081fb973d80964554f4dea813c9d",
                "8ef5bc8cb7d00d8b89bacbd4f9405f402d1a002e",
                "0f50074c5489b97def2d220b8cd70bada3361220",
                "58a5ded84c93621d72ecc14b386e0e6bea5d103a",
                "1dedacf3710f30c15b9e73c9d719a969eec755e5"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 53794,
            "activeSources": 8,
            "criticalAlerts": 32458,
            "activeCampaigns": 268
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 22269,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "C2",
                "count": 10189,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 3606,
                "trend": "stable",
                "percentage": -2
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
                "count": 21355,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxps://tom[.]bouesti[.]edu[.]ng/Installer_L_X64_x86_2024[.]zip",
                    "hxxp://105[.]224[.]109[.]82:60337/i",
                    "hxxps://thepullmanfolkestone[.]com/ppisondeers[.]exe"
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
                    "1[.]159[.]52[.]66",
                    "1[.]159[.]90[.]31"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1677,
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
                "count": 1437,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"39[.]106[.]80[.]126:22\"",
                    " \"39[.]106[.]80[.]126:7000\"",
                    " \"115[.]190[.]161[.]178:3306\""
                ]
            },
            {
                "name": "AsyncRAT",
                "count": 1427,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "c11fd105f60ade90dc2611391ee6aa93e6c73375",
                    "34ba6ed6fdcf11e71f689efe8e8bb5d723339125",
                    "8f000dbd7cc73e8857d42a3c7c15676305af6889"
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
                "count": 693,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "4c67471be88dd63db2466621fe9e2a2d848f5b79",
                    "9cc76149b07c25893611bc8339406a6312ab2053",
                    "1b64957d1d878c0c0b0b346849db2e64d487aa17"
                ]
            },
            {
                "name": "Vidar",
                "count": 648,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "58a5ded84c93621d72ecc14b386e0e6bea5d103a",
                    "1dedacf3710f30c15b9e73c9d719a969eec755e5",
                    "3403986d256e4ce608c0b4e9648d867a373ff6cc"
                ]
            },
            {
                "name": "LummaStealer",
                "count": 557,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "501d817bb1780acfe5e47082c43472bda8068e4d",
                    "2beac2ee8b2fe7625d4de9f5381d37f200965f91",
                    "a46841d623a191366909b24375bee0eceea23bbe"
                ]
            },
            {
                "name": "OffLoader",
                "count": 445,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "572029fec2909ba613cee3c3698b8a49af83b428",
                    "68ffb512bc3f1f544502736127d3bdbd6ece390b",
                    "d75206e1bb0d0ab79c93e78178e102f6ef071732"
                ]
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious URLs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": "malware_download",
        "totalAttacksThisHour": 46060,
        "lastCalculated": "2026-07-16 01:15 IST"
    }
};
