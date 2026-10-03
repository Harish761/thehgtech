// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-10-03T18:48:12.734264+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-10-03T18:48:12.444229+05:30",
    "lastUpdatedFormatted": "Oct 03, 2026 at 06:48 PM IST",
    "comparisonPeriod": "Oct 02 \u2013 Oct 03, 2026",
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
                "hxxp://www[.]supershopf[.]vip/",
                "hxxps://facebook-auto-liker[.]blogspot[.]com/",
                "hxxps://nhengenharia[.]com/crchildrenscare/crchildrenscare[.]htm",
                "hxxps://facebook-logiin[.]vercel[.]app/",
                "hxxps://roblox[.]com[.]bo/users/3950918659/profile"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 1007,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 1007,
                "newInLastHour": 124,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"eeaaa6954b5ab26b2dad9a4cd85857e3eb5b68c9f8026561cc817b0dba664c80",
                " \"0235d45e88b2b10aa799efc84fc4b60e6a68cbdaa63438d8165419f9f522f001",
                " \"300e68158421dacc2cc075fd8105bc4c95ddcbb6fe40765cf457e9f5811fe437",
                " \"19f5e20eb2532d6455b1685eece088edff04c63cb718ff630f3075218a53f9f3",
                " \"b2c71d3b8001cc8090cc69fda460b78e9c1a5fddd38378fbf5047a72bfc52de7"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1632,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1632,
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
                "1[.]14[.]149[.]30",
                "1[.]15[.]14[.]29",
                "1[.]189[.]248[.]116",
                "1[.]213[.]214[.]233",
                "1[.]24[.]16[.]104"
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
            "iocCount": 15882,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 15882,
                "newInLastHour": 15882,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://123[.]190[.]235[.]239:55013/i",
                "hxxp://42[.]230[.]69[.]42:32990/bin[.]sh",
                "hxxp://42[.]239[.]238[.]71:33555/bin[.]sh",
                "hxxp://45[.]183[.]184[.]74:49148/i",
                "hxxp://182[.]117[.]35[.]19:43635/i"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 11113,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 11113,
                "newInLastHour": 10089,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"124[.]223[.]199[.]101:1588\"",
                " \"6b2e76df[.]pattysole[.]com\"",
                " \"9d24355d[.]pattysole[.]com\"",
                " \"b917460b2f8c5ccc99d24bef30b04011618c75ee9563bd3f5fed003ac90be065\"",
                " \"9bc3b56742c90d4d36f4d550488cb19ac5f4be5c6d78c4e5dfc2ca410e2ae718\""
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
            "iocCount": 10839,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 10839,
                "newInLastHour": 124,
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
            "totalIndicators": 51588,
            "activeSources": 8,
            "criticalAlerts": 27469,
            "activeCampaigns": 263
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 16739,
                "trend": "stable",
                "percentage": -3
            },
            {
                "category": "C2",
                "count": 10730,
                "trend": "stable",
                "percentage": 1
            },
            {
                "category": "Botnet",
                "count": 4556,
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
                "count": 15561,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://182[.]126[.]92[.]177:43112/i",
                    "hxxp://115[.]62[.]57[.]106:60731/i",
                    "hxxp://196[.]190[.]69[.]149:45695/i"
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
                    "1[.]189[.]248[.]116",
                    "1[.]213[.]214[.]233"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1663,
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
                "count": 1332,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"191[.]124[.]5[.]50:443\"",
                    " \"191[.]124[.]5[.]50:80\"",
                    " \"191[.]124[.]5[.]50:8080\""
                ]
            },
            {
                "name": " \"js.iclickfix\"",
                "count": 1030,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"dns-ssl[.]com\"",
                    " \"59na[.]com\"",
                    " \"kalooms[.]com\""
                ]
            },
            {
                "name": "Vidar",
                "count": 785,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "b243f74faeb0e8cf30b79e84c846f40b31ce5f55",
                    "8bc45d63603370c41a2d7d352cdecb01281f5264",
                    "4f2559300051882eff69dc21bc3d27da6f988751"
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
                "count": 708,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "4768d20d3072a30b168c650b11a9e4d3e1a0dc60",
                    "c234496c7b0abcd873bb6bb5a54288b6d340b6ff",
                    "7a215b5a8eaf9b132cf84f22d9ee2202c2a028bf"
                ]
            },
            {
                "name": " \"elf.mirai\"",
                "count": 675,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"4f49e6e001ac5d606022adb8f26232894cbf970844848a9d8e7ed55231e1a8b4\"",
                    " \"cd35793fbff5443d082b29e31971d9e83574a47c9b59e83591e43ca4ba38b096\"",
                    " \"1826e0936569471daf6ba525700dde03a260dcb87a44e2e345d5bd6b8e828fb8\""
                ]
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious URLs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": " \"unknown_loader\"",
        "totalAttacksThisHour": 41553,
        "lastCalculated": "2026-10-03 18:48 IST"
    }
};
