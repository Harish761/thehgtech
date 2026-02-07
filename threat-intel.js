// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-02-08T00:31:18.722300+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-02-08T00:31:18.453909+05:30",
    "lastUpdatedFormatted": "Feb 08, 2026 at 12:31 AM IST",
    "comparisonPeriod": "Feb 07 \u2013 Feb 08, 2026",
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
                "hxxp://pub-ba929d2ab1f04e75869e394f6d120bba[.]r2[.]dev/index[.]html",
                "hxxps://ipfs[.]io/ipfs/bafkreic2zu35b3dgqrknxnridzgte3nv5jzdw3jjaopaovolv432u2wwda/?eta=3mail@a[.]b[.]c0",
                "hxxp://www[.]p200h[.]xyz/",
                "hxxps://bybitvar[.]com/en/",
                "hxxps://bybitvar[.]com/"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 603,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 603,
                "newInLastHour": 20,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"d39fa8e2d179e2d0c8a51994d07f45bcd49157edb5b711b2505615b978642a80",
                " \"105e15e1a5e5f9be80fd65ccc44884f2403bb31a19d6191a44e08f4bb9d5fb06",
                " \"586ff0ff4b5bb490e12ac550b69964f32a915000bfdff8fed93ca7d483330813",
                " \"0992a2d2f68b550a9d2c261aceece823810a184f6c599190f6382c1099dca99d",
                " \"a29d6ca899a2a2c1497b192dc8aeb1cb6290109c347ffe3bc66d950dc0b0f1a6"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1472,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1472,
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
                "1[.]15[.]116[.]189",
                "1[.]15[.]14[.]29",
                "1[.]157[.]80[.]72",
                "1[.]170[.]7[.]241",
                "1[.]176[.]118[.]246"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 5820,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 5820,
                "newInLastHour": 5820,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]214[.]197[.]163",
                "1[.]220[.]38[.]246",
                "1[.]234[.]83[.]55",
                "1[.]246[.]14[.]161",
                "1[.]248[.]227[.]206"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 21467,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 21467,
                "newInLastHour": 21467,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://117[.]215[.]56[.]209:47769/i",
                "hxxp://45[.]83[.]207[.]194/cbot/subprocess[.]exe",
                "hxxp://45[.]83[.]207[.]194/cbot/subprocess_debug[.]exe",
                "hxxp://45[.]83[.]207[.]194/cbot/raw_subprocess[.]exe",
                "hxxp://45[.]83[.]207[.]194/cbot/raw_subprocess_debug[.]exe"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 718,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 718,
                "newInLastHour": 716,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"45[.]194[.]92[.]43:9772\"",
                " \"84[.]46[.]255[.]242:8888\"",
                " \"83[.]97[.]20[.]176:80\"",
                " \"82[.]22[.]36[.]103:8888\"",
                " \"57[.]129[.]110[.]30:8888\""
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
                "172[.]232[.]59[.]14",
                "34[.]204[.]119[.]63"
            ]
        },
        "SSL Blacklist": {
            "description": "Malicious SSL certificates used by botnet C2 servers. Helps detect encrypted malware communications.",
            "website": "https://sslbl.abuse.ch/",
            "updateFrequency": "Daily",
            "iocCount": 8890,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 8890,
                "newInLastHour": 8523,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "8c027aea9f5810c556e38f4fe450504eee4fa910",
                "509bc2a51be1d6e6c4e4b76e2e2c3b21825c06f9",
                "97e58eec776ad990a10d1f4a932e1a4ae48636b3",
                "f7e2a35e1a581deef9040e6b02ff6b8c0f0f7134",
                "1a9293158cd9c2f346490d6fa18dc5390359e4ab"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 39975,
            "activeSources": 8,
            "criticalAlerts": 22377,
            "activeCampaigns": 97
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 22006,
                "trend": "stable",
                "percentage": -1
            },
            {
                "category": "Botnet",
                "count": 546,
                "trend": "down",
                "percentage": -15
            },
            {
                "category": "C2",
                "count": 371,
                "trend": "down",
                "percentage": -95
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
                "count": 21418,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://119[.]115[.]244[.]111:38221/i",
                    "hxxp://27[.]215[.]45[.]116:57346/bin[.]sh",
                    "hxxp://45[.]83[.]207[.]188/x86_64"
                ]
            },
            {
                "name": "CINS Threat List",
                "count": 15000,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]15[.]116[.]189",
                    "1[.]15[.]14[.]29",
                    "1[.]157[.]80[.]72"
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
                "name": " \"Mirai",
                "count": 301,
                "types": [
                    "hash"
                ],
                "sampleIndicators": [
                    " \"582dd16ae6f2671813f30f116808eec3f5bd97ceaf5d8edbfcf4d018b6b5c273",
                    " \"083c9ebe27e1175659961a804f3e4d540e3d5eaebf733425bca65d5384f1c95c",
                    " \"533bf88efc2f6999603395a8c061268e414c6eb31e2d06269fa4a635225ad2a6"
                ]
            },
            {
                "name": "Generic Phishing",
                "count": 289,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://pub-ba929d2ab1f04e75869e394f6d120bba[.]r2[.]dev/index[.]html",
                    "hxxps://ipfs[.]io/ipfs/bafkreic2zu35b3dgqrknxnridzgte3nv5jzdw3jjaopaovolv432u2wwda/?eta=3mail@a[.]b[.]c0",
                    "hxxp://www[.]p200h[.]xyz/"
                ]
            },
            {
                "name": " \"win.asyncrat\"",
                "count": 158,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"www[.]perlecoiffeur[.]ch\"",
                    " \"mabougies[.]ch\"",
                    " \"172[.]67[.]71[.]10:8080\""
                ]
            },
            {
                "name": "Vidar",
                "count": 151,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "509bc2a51be1d6e6c4e4b76e2e2c3b21825c06f9",
                    "e224a0e12477fad80756859e96bf89af4af904ef",
                    "971eff3b46008afa8e51412a1f92e56fb16c0c8b"
                ]
            },
            {
                "name": " \"n/a",
                "count": 108,
                "types": [
                    "hash"
                ],
                "sampleIndicators": [
                    " \"63fb1bb6af66fbe29823c5ac577034207888c3bf23218c96777ec63bf7499afd",
                    " \"2c7db9d7977e0de038fe6cac5d224553322efd751c301305f82e61bf50c7100c",
                    " \"12f3d201846cf967e3e915333a1fbaa8a5c389c4e6c23b709d96484ece82083d"
                ]
            },
            {
                "name": " \"unknown_stealer\"",
                "count": 97,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"macsignalwarehouse[.]com\"",
                    " \"filetransferdock51[.]com\"",
                    " \"macoblique[.]com\""
                ]
            },
            {
                "name": " \"unknown\"",
                "count": 89,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"193[.]34[.]69[.]245:51184\"",
                    " \"89[.]234[.]157[.]254:9001\"",
                    " \"102[.]117[.]169[.]94:7443\""
                ]
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious URLs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": "AsyncRAT",
        "totalAttacksThisHour": 51849,
        "lastCalculated": "2026-02-08 00:31 IST"
    }
};
