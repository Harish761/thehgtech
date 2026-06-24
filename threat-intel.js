// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-06-24T23:33:49.894464+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-06-24T23:33:49.486793+05:30",
    "lastUpdatedFormatted": "Jun 24, 2026 at 11:33 PM IST",
    "comparisonPeriod": "Jun 23 \u2013 Jun 24, 2026",
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
                "hxxp://arshina896[.]github[.]io/instagram/",
                "hxxp://z-maniac-sidd[.]github[.]io/Netflix_clone/",
                "hxxp://nishkarsh71[.]github[.]io/Mini-Project/",
                "hxxps://ig[.]do/asuranlha1",
                "hxxps://qr[.]link/PwvkS2"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 542,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 542,
                "newInLastHour": 49,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"ee9e97d914a0745cd56f138517c8dceaab1626b5a8ec71103c731a28ff0097d5",
                " \"7fc832491e04b83425646c5039c7e8684aab087f54b2d94ad25bcd8b567ff529",
                " \"46e38f2839d615ab351b206b7571c1686f99f54470e48925ac62b2cf2d771adb",
                " \"8b2be6abdbb3062becc9c3b73c9148e06f623d0a3dc44df3775c05ee7355c5a0",
                " \"3f72211404ff5670355048653520db21461daab20f4b7e09aeb1fd987ae1b939"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1692,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1692,
                "newInLastHour": 22,
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
                "1[.]11[.]228[.]4",
                "1[.]15[.]51[.]236",
                "1[.]159[.]80[.]125",
                "1[.]176[.]118[.]246",
                "1[.]183[.]161[.]114"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 4557,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 4557,
                "newInLastHour": 4557,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]0[.]164[.]165",
                "1[.]1[.]220[.]166",
                "1[.]160[.]229[.]25",
                "1[.]162[.]239[.]42",
                "1[.]192[.]61[.]19"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 22912,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 22912,
                "newInLastHour": 22912,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://221[.]14[.]122[.]191:40951/bin[.]sh",
                "hxxp://123[.]5[.]156[.]187:59149/bin[.]sh",
                "hxxp://123[.]5[.]137[.]114:55245/bin[.]sh",
                "hxxp://115[.]48[.]137[.]17:60073/bin[.]sh",
                "hxxp://103[.]160[.]130[.]109:40388/i"
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
                "newInLastHour": 3994,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"online-blackjack-j[.]info\"",
                " \"hxxps://ghr[.]esteghlal[.]news/\"",
                " \"ghr[.]holidaysm188[.]top\"",
                " \"hxxps://ghr[.]holidaysm188[.]top/\"",
                " \"ghr[.]esteghlal[.]news\""
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
            "iocCount": 10060,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 10060,
                "newInLastHour": 132,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "fa2f278d16337931408552d5d7a0b75b229f8f31",
                "324e2fb8e2cef0b9cc4ed108f79f6006cce4ce34",
                "526b4a8604d900869439980614e56e4b288fb46d",
                "1f0ec506802cd022908e8029e20d7b5d3c525a39",
                "b3d9f61d0ccbe25f2239a1a50071c9a5b7b4e1ec"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 54890,
            "activeSources": 8,
            "criticalAlerts": 33499,
            "activeCampaigns": 257
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 23593,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "C2",
                "count": 9906,
                "trend": "stable",
                "percentage": -1
            },
            {
                "category": "Botnet",
                "count": 3336,
                "trend": "stable",
                "percentage": -8
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
                "count": 22872,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://110[.]37[.]123[.]170:45886/bin[.]sh",
                    "hxxp://222[.]139[.]33[.]64:54465/bin[.]sh",
                    "hxxp://125[.]43[.]229[.]4:36249/bin[.]sh"
                ]
            },
            {
                "name": "CINS Threat List",
                "count": 15000,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]11[.]228[.]4",
                    "1[.]15[.]51[.]236",
                    "1[.]159[.]80[.]125"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1673,
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
                "count": 1429,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"60[.]217[.]58[.]49:2121\"",
                    " \"43[.]131[.]240[.]236:8015\"",
                    " \"67[.]216[.]197[.]83:2083\""
                ]
            },
            {
                "name": "AsyncRAT",
                "count": 1410,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "526b4a8604d900869439980614e56e4b288fb46d",
                    "15a47f45b77ef377b9ec7f6aff1fc3fcca1c6035",
                    "3361a98a6c2746e41390b299202f149699f5a17d"
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
                "count": 678,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "ae590545961e96de860ea7434c0e8c69b924de6f",
                    "28c3106cd1cec9a5dfec7f2ba3b0dd7e70784429",
                    "bf26c599e3f5ea932f7b8c592138d42d49837713"
                ]
            },
            {
                "name": "Vidar",
                "count": 583,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "1b74f82a9f35a6f50d374d9c4471ad5762654eee",
                    "f64cde665218b5b87ca3413a068864247c237b95",
                    "e14da247abd27ab816d07e94f012ba4a405ee77f"
                ]
            },
            {
                "name": "LummaStealer",
                "count": 555,
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
                "name": "OffLoader",
                "count": 414,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "dd3ba97127142419e80ef9ae606bec55ca8500fd",
                    "fbb234bb7df601783c1d25be2a386c9ab5d45e41",
                    "f453b4a0cf623b8f2659c584f583ea90d5f8d432"
                ]
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious URLs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": "malware_download",
        "totalAttacksThisHour": 46971,
        "lastCalculated": "2026-06-24 23:33 IST"
    }
};
