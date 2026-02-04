// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-02-04T18:52:49.912617+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-02-04T18:52:49.631864+05:30",
    "lastUpdatedFormatted": "Feb 04, 2026 at 06:52 PM IST",
    "comparisonPeriod": "Feb 03 \u2013 Feb 04, 2026",
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
                "hxxp://shopeeid828[.]blogspot[.]com/?m=1",
                "hxxp://merenciano[.]net/serviciodecorreo/login/",
                "hxxps://shopeeid885[.]blogspot[.]com/?m=1",
                "hxxps://info-hadiah0277[.]blogspot[.]com/?m=1",
                "hxxp://shopeeid969[.]blogspot[.]com/?m=1"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 1066,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 1066,
                "newInLastHour": 54,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"bbfd93dbf43236b7f64017ad20f72dd611de1acb4b15e02569e42887467b34d4",
                " \"7b7d69d1b455cd4681e325b610e5053ac201433970ca396fb0c32d9719b0d8d1",
                " \"9819b8bcb72df8cbfb081e848b0105a7e5f38a520db29f10d199430874c94b45",
                " \"db2e0a69bc58c30039fffa25ae521ae3ad0defcb2d488d0d7b3e66ba61cfd984",
                " \"5a9a4061a9a2654f6248c4f4f2ed4c86e6fb23ba460f63d58007a5c5b81d5102"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1475,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1475,
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
                "1[.]10[.]211[.]222",
                "1[.]15[.]116[.]189",
                "1[.]15[.]14[.]29",
                "1[.]15[.]51[.]122",
                "1[.]157[.]80[.]72"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 7186,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 7186,
                "newInLastHour": 7186,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]12[.]251[.]79",
                "1[.]170[.]65[.]104",
                "1[.]194[.]219[.]159",
                "1[.]214[.]197[.]163",
                "1[.]214[.]42[.]172"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 21605,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 21605,
                "newInLastHour": 21605,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://123[.]190[.]141[.]19:55162/i",
                "hxxp://182[.]115[.]191[.]210:34111/i",
                "hxxps://cdn[.]jsdelivr[.]net/gh/keys53/c10ud/midjrney",
                "hxxps://pub-3bc1de741f8149f49bdbafa703067f24[.]r2[.]dev/wa1[.]txt",
                "hxxp://130[.]12[.]180[.]43/files/8408827406/OR4Zq5r[.]exe"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 676,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 676,
                "newInLastHour": 517,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"hxxps://cdn[.]jsdelivr[.]net/gh/keys53/c10ud/midjrney\"",
                " \"hxxps://cdn[.]jsdelivr[.]net/gh/midjrney/c10ud/bn45\"",
                " \"apisyncdata[.]onrender[.]com\"",
                " \"85[.]137[.]253[.]74:443\"",
                " \"hxxps://85[.]137[.]253[.]74/\""
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
                "162[.]243[.]103[.]246",
                "167[.]86[.]75[.]145",
                "172[.]232[.]59[.]14",
                "34[.]204[.]119[.]63"
            ]
        },
        "SSL Blacklist": {
            "description": "Malicious SSL certificates used by botnet C2 servers. Helps detect encrypted malware communications.",
            "website": "https://sslbl.abuse.ch/",
            "updateFrequency": "Daily",
            "iocCount": 8877,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 8877,
                "newInLastHour": 26,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "ae2bcb77201c2a5e7e3e14a58238c30dfac0cf0a",
                "18e41b19704dec838e6450de8c40398ea4dbc635",
                "c4d77ce7e29209bf99a32d7f4eeb80e2bc81d7ac",
                "4e73f6155ee7d6ab862fb322cd8a3dd29c0b8958",
                "2ca092e86fab38941f83b4d6c138ddb3470a0231"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 48872,
            "activeSources": 8,
            "criticalAlerts": 31449,
            "activeCampaigns": 219
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 22621,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "C2",
                "count": 8828,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 439,
                "trend": "stable",
                "percentage": 7
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
                "count": 21526,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://110[.]37[.]115[.]90:54865/bin[.]sh",
                    "hxxp://118[.]125[.]49[.]66:60319/i",
                    "hxxp://117[.]208[.]72[.]69:40375/bin[.]sh"
                ]
            },
            {
                "name": "CINS Threat List",
                "count": 15000,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]10[.]211[.]222",
                    "1[.]15[.]116[.]189",
                    "1[.]15[.]118[.]23"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1476,
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
                "count": 1377,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "f1bb8bd97d70c986438f0cd5f46cd2992875659a",
                    "98bd8df0057497dc91b608f7db0d0358c1e75d6b",
                    "76bc52f6b33ab0650dfdc050c5a15a227ce69ed0"
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
                "count": 615,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "436f02b3a63406707f6467d4880a691a2a3f53ea",
                    "e0cd22588c5eb33b575fd706a8cfb26a73302eac",
                    "0dec713d11506f454580c12573a23f934e9671d4"
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
                "name": " \"Mirai",
                "count": 365,
                "types": [
                    "hash"
                ],
                "sampleIndicators": [
                    " \"811e37d35407d436e4a6677eb25664440773e12e5593feaa37575e0bdcfbdf9b",
                    " \"6e29b244afa34e79c0dc5ac4d38f6ace3e9e049996ab9fcf5b697ecd0819a5e6",
                    " \"7b4d33f3f6e14a5a929d778588cdf1fb82c939037610c88c0f0a0cfedaa43ea3"
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
        "totalAttacksThisHour": 44692,
        "lastCalculated": "2026-02-04 18:52 IST"
    }
};
