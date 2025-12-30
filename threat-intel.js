// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2025-12-30T22:09:59.469449+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2025-12-30T22:09:59.164860+05:30",
    "lastUpdatedFormatted": "Dec 30, 2025 at 10:09 PM IST",
    "comparisonPeriod": "Dec 29 \u2013 Dec 30, 2025",
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
                "hxxps://openseaprojectsmint03[.]vercel[.]app/index[.]html",
                "hxxps://openseaprojectsmint05[.]vercel[.]app/index[.]html",
                "hxxps://openseaprojectsmint02[.]vercel[.]app/index[.]html",
                "hxxps://roblox[.]com[.]ly/users/1366519603/profile",
                "hxxps://www[.]roblox[.]com[.]ml/users/2252662082/profile"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 1554,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 1554,
                "newInLastHour": 51,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"05699124937cd579bceb4ef3c74299b80f2113e9a7b2318d9515f9bd703074e0",
                " \"dde8d66a35c0e24fc0f930d4a0121676601284855c22710216a89adc75e3d184",
                " \"159cda74ceee9e964ac9c1962e209e8ca44f6b08d5796824535e6bfb198cfb9a",
                " \"c48a992b8dea1c54ae4e4f92ec8fb3968792029758369c7e17dabd92796258ea",
                " \"a4c773dfecaa77c920e55cbfb14205657fc9315acc62df0c217d6c1bd6fbe9df"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1466,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1466,
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
                "1[.]15[.]118[.]23",
                "1[.]157[.]99[.]66",
                "1[.]177[.]162[.]4",
                "1[.]181[.]69[.]174",
                "1[.]193[.]63[.]66"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 6252,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 6252,
                "newInLastHour": 6252,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]12[.]217[.]80",
                "1[.]12[.]64[.]80",
                "1[.]13[.]92[.]86",
                "1[.]145[.]101[.]122",
                "1[.]161[.]57[.]21"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 25719,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 25719,
                "newInLastHour": 25719,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://219[.]156[.]173[.]102:45906/bin[.]sh",
                "hxxps://dvq02enh[.]five5kitt1es[.]ru/?=check&&actmn=yJkabPSyFHAGljEz",
                "hxxps://qj9v9qv3[.]five5kitt1es[.]ru/?=check&&actmn=QpyFkmHgfkIoroZF",
                "hxxp://27[.]37[.]89[.]24:48287/i",
                "hxxp://113[.]236[.]83[.]79:37341/i"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 1175,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 1175,
                "newInLastHour": 1016,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"185[.]11[.]61[.]41:443\"",
                " \"dvq02enh[.]five5kitt1es[.]ru\"",
                " \"ne9w9xl0[.]five5kitt1es[.]ru\"",
                " \"qj9v9qv3[.]five5kitt1es[.]ru\"",
                " \"f82x5kgw[.]five5kitt1es[.]ru\""
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
                "137[.]184[.]9[.]29",
                "15[.]204[.]219[.]215",
                "162[.]243[.]103[.]246",
                "167[.]86[.]75[.]145",
                "50[.]16[.]16[.]211"
            ]
        },
        "SSL Blacklist": {
            "description": "Malicious SSL certificates used by botnet C2 servers. Helps detect encrypted malware communications.",
            "website": "https://sslbl.abuse.ch/",
            "updateFrequency": "Daily",
            "iocCount": 8706,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 8706,
                "newInLastHour": 4,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "ad6e2e21ac68c72c8c702a51c4a6578277c15c0c",
                "3a474c04a2644f781bb3e4609b9f966791e104b5",
                "4b497ae5c83a1f18738d5eca13d3b85e56fffd92",
                "85f0fd986ad4a7955a5ea85764038f3bbb695cba",
                "c2433ae2f074166a3dacd6c8201c89d66a1e0cc1"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 53647,
            "activeSources": 8,
            "criticalAlerts": 35880,
            "activeCampaigns": 203
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 27201,
                "trend": "stable",
                "percentage": 1
            },
            {
                "category": "C2",
                "count": 8679,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 493,
                "trend": "stable",
                "percentage": 1
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
                "count": 25587,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxps://ic3kv9je[.]j1ttercoil[.]ru/?apikey=delTFfVUQgbPSekl&actmn=8a75948e-d6f0-4006-a7b0-75a8269ba680&ocid",
                    "hxxp://182[.]116[.]118[.]205:44657/i",
                    "hxxp://110[.]37[.]100[.]132:45618/i"
                ]
            },
            {
                "name": "CINS Threat List",
                "count": 15000,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]15[.]118[.]23",
                    "1[.]15[.]51[.]236",
                    "1[.]177[.]162[.]4"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1466,
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
                "name": " \"Mirai",
                "count": 759,
                "types": [
                    "hash"
                ],
                "sampleIndicators": [
                    " \"20b2fc2c0e2db1d34a5da873f846f02f75e81e4fd45325096f7976414a335009",
                    " \"45453d011d0bb7cbfdd3d60f8a0aea950e65730a5e75cfdf029632d802d089e2",
                    " \"22ec5a23abd58b01a829b2b54277866ba7e8ae4bc1872b88d3a79036453211ee"
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
                "count": 600,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "2be6327a2b03aed6322898941f4e6c7ca29de8e5",
                    "69affd6a91e38229fb655a62a52eb2b7af9fdfb4",
                    "be3b160ebe83bfc2e609bf912b36096e8dd2ffa3"
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
                "count": 363,
                "types": [
                    "hash"
                ],
                "sampleIndicators": [
                    " \"12c2c22ac2896a283118750f17735f30572671bc7400a30368b4e43767d2acd0",
                    " \"c1a128a64e4b9e16a9cda1439d8736eff37524b5e530620f7137d1e2b4068ca8",
                    " \"0a000edf2313a4349f174537f0368d3cc639fc8875b12989ed2e9bd9dcc671f8"
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
        "fastestRisingThreat": "SSH Attacks",
        "totalAttacksThisHour": 48347,
        "lastCalculated": "2025-12-30 22:09 IST"
    }
};
