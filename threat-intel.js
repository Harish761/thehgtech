// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-02-27T02:21:28.467367+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-02-27T02:21:28.183269+05:30",
    "lastUpdatedFormatted": "Feb 27, 2026 at 02:21 AM IST",
    "comparisonPeriod": "Feb 26 \u2013 Feb 27, 2026",
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
                "hxxp://pub-0c1a56b09e0d486882eda1d2f972fe31[.]r2[.]dev/index[.]html",
                "hxxps://roblox[.]com[.]py/games/87681080828382/1612-59?privateServerLinkCode=94039917790950526947285783345931",
                "hxxp://whatsapp-clone-frontend-liart[.]vercel[.]app/",
                "hxxp://pub-22cd87913c484496a71b7d21d6243800[.]r2[.]dev/index[.]html",
                "hxxp://kuccycoins[.]pages[.]dev/"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 781,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 781,
                "newInLastHour": 95,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"b7bc94fa7efcf76c60e2a66c708375cf51d2a37dcab5d02c7143fbf5dbace137",
                " \"382d9df30a0ef92ecd95ebec2d7efa6bda5a174c402eb729b688b4a93e66fd7a",
                " \"e703a796f4a46943e52b2ec8503fa76bbdb665543a586be0c51b00ee3be96f28",
                " \"f7da8172d8fe2e253e63fb609d861a8caff88bd53e35f64da0b97145f8c95f70",
                " \"5f6f7790ed01309e893355e0a54d9a7e79838601b60b08e6909064bad625cec6"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1529,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1529,
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
                "1[.]0[.]219[.]253",
                "1[.]10[.]247[.]16",
                "1[.]11[.]132[.]194",
                "1[.]15[.]116[.]189",
                "1[.]15[.]22[.]112"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 5459,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 5459,
                "newInLastHour": 5459,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]14[.]12[.]141",
                "1[.]204[.]166[.]3",
                "1[.]214[.]197[.]163",
                "1[.]214[.]42[.]172",
                "1[.]233[.]104[.]29"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 22007,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 22007,
                "newInLastHour": 22007,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://59[.]97[.]181[.]75:44076/i",
                "hxxp://182[.]119[.]186[.]109:44787/i",
                "hxxp://120[.]61[.]17[.]222:50691/i",
                "hxxp://42[.]232[.]224[.]73:60021/bin[.]sh",
                "hxxp://182[.]123[.]235[.]99:60477/i"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 818,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 818,
                "newInLastHour": 818,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"magicrenovationpainting[.]com\"",
                " \"magazine[.]sorrentotransfer[.]com\"",
                " \"magazin[.]meilenstiefel-zuckerbrot[.]de\"",
                " \"36[.]147[.]16[.]28:10250\"",
                " \"103[.]23[.]255[.]74:80\""
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
                "162[.]243[.]103[.]246",
                "178[.]62[.]3[.]223",
                "34[.]204[.]119[.]63"
            ]
        },
        "SSL Blacklist": {
            "description": "Malicious SSL certificates used by botnet C2 servers. Helps detect encrypted malware communications.",
            "website": "https://sslbl.abuse.ch/",
            "updateFrequency": "Daily",
            "iocCount": 9089,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 9089,
                "newInLastHour": 0,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "56b86accd46807abc847389f1fcc4c73ef629841",
                "4034b813560128a7b5b72e65b9c58a15eeacf93c",
                "4c50e93c6a443306224c60f569205a7c44850295",
                "1489745b5c5f066b8beaec7181567513ca9eafd2",
                "d55e92f3ecb26b75c5ee55c29893b6dc3e9aa887"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 49460,
            "activeSources": 8,
            "criticalAlerts": 31820,
            "activeCampaigns": 215
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 22745,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "C2",
                "count": 9075,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 682,
                "trend": "stable",
                "percentage": 6
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
                "count": 21980,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://42[.]235[.]102[.]239:43753/i",
                    "hxxp://hui228[.]ru:82/hosted/ctrl[.]exe",
                    "hxxp://hui228[.]ru:82/hosted/FRPWrapper[.]exe"
                ]
            },
            {
                "name": "CINS Threat List",
                "count": 15000,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]0[.]219[.]253",
                    "1[.]10[.]247[.]16",
                    "1[.]11[.]132[.]194"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1531,
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
                "count": 1383,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "bef81c1fd26e84e5e25a4182bf668304ba2891da",
                    "adb1b31a6283691b205839f5e3ce4f8ed7aa5f54",
                    "97e58eec776ad990a10d1f4a932e1a4ae48636b3"
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
                "count": 627,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "1489745b5c5f066b8beaec7181567513ca9eafd2",
                    "a49ad700b0042b6d1e20153a6253bcc8ff17cff2",
                    "56dd33cfae66685bb9cf7f923d6e6752ff791705"
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
                "name": "Vidar",
                "count": 374,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "a9376a357aebf80af91a289f9fcb916ee1c04384",
                    "2fe17ef982c9dcbecd93baa4c77df1bf7c8d19b0",
                    "66afb632b2131a12c4ee5896e88bc485662077eb"
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
            },
            {
                "name": "Gozi",
                "count": 349,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "61d991d7063e5e7470daa3059357f8282e680bb7",
                    "68b4fc7da837c64332b9f019adaef4c7038ec85d",
                    "e0f7072057c5deeb21c598673740debc7f6eb8a1"
                ]
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious URLs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": "SSH Attacks",
        "totalAttacksThisHour": 43682,
        "lastCalculated": "2026-02-27 02:21 IST"
    }
};
