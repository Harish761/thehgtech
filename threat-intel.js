// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2025-12-28T00:20:43.993211+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2025-12-28T00:20:43.632134+05:30",
    "lastUpdatedFormatted": "Dec 28, 2025 at 12:20 AM IST",
    "comparisonPeriod": "Dec 27 \u2013 Dec 28, 2025",
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
                "hxxps://shortlink[.]st/8V-Ob7dw",
                "hxxps://roblox[.]com[.]ge/users/2392720665/profile",
                "hxxps://roblox[.]com[.]ly/users/2134549133/profile",
                "hxxps://gemniixilogiem[.]gitbook[.]io/us/",
                "hxxp://gemniixilogiem[.]gitbook[.]io/"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 1388,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 1388,
                "newInLastHour": 144,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"86496d0fc8c507967ce76422e9d6521e65b2ea980d23738a0f58570c231382d4",
                " \"4789596a02f679da63289c925df54db17d2250b0f642d55d6a6fd431ffb3def9",
                " \"d9b4d2a3bbe6f47122f85bfc8208803aacd05e7366ed66c53182786029cb0d5d",
                " \"e2faa72a9069f827216d63f1044bbc3d4dac8c255fcc92600b1e9a5d57e3dec5",
                " \"1fcc38485486e3fb24437dc758750a4bcb5faacf1f9ac5b4cfcdffd04f968468"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1474,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1474,
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
                "1[.]15[.]149[.]209",
                "1[.]15[.]51[.]236",
                "1[.]157[.]99[.]66",
                "1[.]176[.]134[.]251"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 4886,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 4886,
                "newInLastHour": 4886,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]14[.]12[.]141",
                "1[.]214[.]197[.]163",
                "1[.]220[.]64[.]218",
                "1[.]233[.]104[.]29",
                "1[.]234[.]83[.]55"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 27265,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 27265,
                "newInLastHour": 27265,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://110[.]37[.]60[.]79:53329/bin[.]sh",
                "hxxp://115[.]63[.]11[.]69:45861/bin[.]sh",
                "hxxp://110[.]37[.]43[.]189:56346/i",
                "hxxp://110[.]37[.]72[.]134:41614/i",
                "hxxp://110[.]37[.]72[.]134:41614/bin[.]sh"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 809,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 809,
                "newInLastHour": 659,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"178[.]79[.]133[.]112:443\"",
                " \"106[.]225[.]234[.]89:10250\"",
                " \"5[.]178[.]103[.]58:6606\"",
                " \"5[.]178[.]103[.]58:7707\"",
                " \"tspmo-40154[.]portmap[.]host\""
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
                "15[.]204[.]219[.]215",
                "162[.]243[.]103[.]246",
                "167[.]86[.]75[.]145"
            ]
        },
        "SSL Blacklist": {
            "description": "Malicious SSL certificates used by botnet C2 servers. Helps detect encrypted malware communications.",
            "website": "https://sslbl.abuse.ch/",
            "updateFrequency": "Daily",
            "iocCount": 8693,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 8693,
                "newInLastHour": 0,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "18f6fb081557a654b26c348d6d9e6bffeb064e6f",
                "0b3c03d2685bcf32115f71fad8323c8c79f3ecf3",
                "e3f74b63bb455a42d4351baff1f1eccd69ae5747",
                "77ccc60769c2fcec1b720094cdaa0ff49e37227d",
                "8e22e996d0215c4e2cb73e5621cb9de904b861cf"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 54757,
            "activeSources": 8,
            "criticalAlerts": 37165,
            "activeCampaigns": 190
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 28496,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "C2",
                "count": 8669,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 333,
                "trend": "stable",
                "percentage": 4
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
                "percentage": 98
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
                "count": 27215,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://113[.]221[.]97[.]79:34496/i",
                    "hxxp://103[.]149[.]29[.]38/curl[.]sh",
                    "hxxp://103[.]149[.]29[.]38/wget[.]sh"
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
                    "1[.]15[.]149[.]209",
                    "1[.]15[.]51[.]236"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1474,
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
                "count": 1363,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "1a5aa767c2675014c5c0a10b2d9f4c63844a84f8",
                    "3a56a66eb43b679afa1edb58e0fddcadf74bb2a4",
                    "47800989ef4eda671b2a76a0cd9123ec7b0bc324"
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
                "name": " \"Mirai",
                "count": 683,
                "types": [
                    "hash"
                ],
                "sampleIndicators": [
                    " \"d12407b08ed4ce5d582c0d3fa32aec04f3e02f330e8954b3ea6ccb97c9141c1f",
                    " \"dd16dfe34adcb5fc03edabefbb238701fbc1fd1c6f711806c9a95da009286bcd",
                    " \"34299eb401d3573ac44a80f7dda161ec8c230261ea6d8d6248636bce9c149868"
                ]
            },
            {
                "name": "QuasarRAT",
                "count": 599,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "69affd6a91e38229fb655a62a52eb2b7af9fdfb4",
                    "be3b160ebe83bfc2e609bf912b36096e8dd2ffa3",
                    "243253f396aa30124e62cdd95a58cf8a3353fd88"
                ]
            },
            {
                "name": "LummaStealer",
                "count": 535,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "e2293f74d8d72bde90bb0424038259a9e3126e1b",
                    "69101b8edfa5d5e2ead4512a6d71c84748b0c012",
                    "1d28cc6dca52e95f859739c39a04d794671f66d9"
                ]
            },
            {
                "name": " \"n/a",
                "count": 423,
                "types": [
                    "hash"
                ],
                "sampleIndicators": [
                    " \"c5d37b6ab40c3dab6512dd1b516f73229616aa48cc911a3b1b0beb1481fde542",
                    " \"470a49ef8af5044943be991886e13a59b27182f7bf655a1de99f4e26ae5a52cb",
                    " \"bc6fcb450024b38f113f01cf7873657aede61549758191cd33d8597ad808f8e7"
                ]
            },
            {
                "name": "Rhadamanthys",
                "count": 355,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "f999c0da0e983becc1c935444c5e609be26b0bcf",
                    "4101579ae950c954fc1096adf43bdefcf0364cfd",
                    "0c3ee8188ce35b6bb11d5b12a0e1e28310188b4e"
                ]
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious URLs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": " \"n/a",
        "totalAttacksThisHour": 48257,
        "lastCalculated": "2025-12-28 00:20 IST"
    }
};
