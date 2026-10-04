// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-10-04T11:12:24.519842+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-10-04T11:12:24.183689+05:30",
    "lastUpdatedFormatted": "Oct 04, 2026 at 11:12 AM IST",
    "comparisonPeriod": "Oct 03 \u2013 Oct 04, 2026",
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
                "hxxps://jdbdkdbsosu[.]blogspot[.]com/",
                "hxxp://xgd0i-mdm-r16h-cvouz-04-10-2026-aa[.]pages[.]dev/",
                "hxxp://081if-vhn-vzc9-i8pos-06-10-2026-aa[.]pages[.]dev/",
                "hxxp://4g1du-nv1-xpyi-kl50r-04-10-2026-aa[.]pages[.]dev/",
                "hxxps://s4w[.]in/qNrlF"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 1017,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 1017,
                "newInLastHour": 166,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"18b0bf993cf38b1585611b0d3424741955ac76a5d91ca0fa389accbeddce9b50",
                " \"57ae15c4725f1c6640905d816160069b6adb3f2b8751087590fe54db235de90e",
                " \"eead4ced63cc53508d205537583eca3ed32ac2aba488ff55d4ff2153b645d350",
                " \"c8ef73f41b3a1e5c876c03e0447ac52ba39e5457b37fa2098398a1d80b5526e4",
                " \"96b288aac49d0adc66a3de8855a0f699cb89a02b6861b67fb59ff0ccd8ef15fd"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1681,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1681,
                "newInLastHour": 16,
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
                "1[.]189[.]248[.]116",
                "1[.]193[.]56[.]152",
                "1[.]24[.]16[.]105"
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
            "iocCount": 16144,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 16144,
                "newInLastHour": 16144,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://119[.]167[.]7[.]197:48851/i",
                "hxxp://5[.]166[.]76[.]110:36709/bin[.]sh",
                "hxxp://42[.]6[.]60[.]204:52051/i",
                "hxxp://182[.]123[.]244[.]214:55994/bin[.]sh",
                "hxxp://112[.]198[.]195[.]40:50034/i"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 10860,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 10860,
                "newInLastHour": 8245,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"hxxp://neortal[.]click:8321/reviews\"",
                " \"44[.]243[.]239[.]80:443\"",
                " \"38[.]76[.]190[.]209:5700\"",
                " \"ed2add9aaf0b3b354331bb952975c5648f185b88743ca5c1af943c7675159695\"",
                " \"b7c026a5464800b78d27a46a6ba01b553de96e9dfb81a26e2d2940358b3802b9\""
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
            "iocCount": 10838,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 10838,
                "newInLastHour": 286,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "33330e829893dd29699f09a04726f7d489b32157",
                "58b3990b07e9caaa2c504a5b9759d14eefcbc5e5",
                "64c5f719aa0111be2ac04d785a8904b5baa22a88",
                "ef85e36f55755b6b85e9b3739ff7bfbb90f22e3b",
                "8c4c2867daf5d6ef1cc9d304fb4c6be488cd645a"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 55551,
            "activeSources": 8,
            "criticalAlerts": 27766,
            "activeCampaigns": 257
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 17198,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "C2",
                "count": 10568,
                "trend": "stable",
                "percentage": -2
            },
            {
                "category": "Botnet",
                "count": 4490,
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
                "count": 16237,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://121[.]231[.]117[.]51:34841/bin[.]sh",
                    "hxxp://39[.]90[.]148[.]38:35621/bin[.]sh",
                    "hxxp://154[.]242[.]244[.]29:49130/i"
                ]
            },
            {
                "name": "CINS Threat List",
                "count": 15000,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]14[.]149[.]30",
                    "1[.]15[.]14[.]29",
                    "1[.]189[.]248[.]116"
                ]
            },
            {
                "name": " \"unknown_loader\"",
                "count": 2613,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"peluqueriastyloslapelu[.]com\"",
                    " \"petasport[.]ir\"",
                    " \"podologiacanto[.]com\""
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1675,
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
                "count": 1442,
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
                "count": 1382,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"c40317bafe39ec13bd944009bd6c53e6db8430c488433fdace6a3527b26588bb\"",
                    " \"46[.]246[.]84[.]17:2703\"",
                    " \"2[.]26[.]30[.]186:8808\""
                ]
            },
            {
                "name": " \"win.cobalt_strike\"",
                "count": 1325,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"144[.]172[.]68[.]200:80\"",
                    " \"144[.]172[.]68[.]200:8080\"",
                    " \"153[.]80[.]242[.]105:2080\""
                ]
            },
            {
                "name": " \"elf.mirai\"",
                "count": 1198,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"ce114fea8ed5d7e5925fa373b90c3f4e616427720bfcdf421e8159ae2582c727\"",
                    " \"c3732db414d3db1339c1a0a2088b6ba81acc7dc8ad1eeea4df502b97c15a9dcf\"",
                    " \"b1a9ae7d0b9b6bc29c39d91d9499a87e50ee166dca40b0070c32d2d8cf952609\""
                ]
            },
            {
                "name": "Vidar",
                "count": 748,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "33330e829893dd29699f09a04726f7d489b32157",
                    "b243f74faeb0e8cf30b79e84c846f40b31ce5f55",
                    "8bc45d63603370c41a2d7d352cdecb01281f5264"
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
        "fastestRisingThreat": " \"elf.mirai\"",
        "totalAttacksThisHour": 40162,
        "lastCalculated": "2026-10-04 11:12 IST"
    }
};
