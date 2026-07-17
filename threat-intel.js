// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-07-18T02:34:41.696525+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-07-18T02:34:41.301019+05:30",
    "lastUpdatedFormatted": "Jul 18, 2026 at 02:34 AM IST",
    "comparisonPeriod": "Jul 17 \u2013 Jul 18, 2026",
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
                "hxxps://live[.]aaveapp[.]com/",
                "hxxps://www[.]sywsywml[.]rumahsakit[.]de/",
                "hxxp://mmma[.]rumahsakit[.]de/",
                "hxxp://ref1507vlxkpr[.]srv-corestreamnetwork[.]com/",
                "hxxps://tj4228[.]craftum[.]io/"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 906,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 906,
                "newInLastHour": 38,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"6cb0a8e59c97cbc4eeb6bea68ad0856178fb77b86bd40b9beb09cd95bdf91e8f",
                " \"38ec2a642d499bf7ed9a566a800fee83ab31e5b3bf548fc8841f719a7065fd68",
                " \"d5bcffe6c397267ffc56923c7703d4c2d125e6b96c3f07dfcf3c5ee001b4badd",
                " \"b1864f056c3166df653b5f4400255b681c4f9ab7a44ef2d8f118e6ebce8aab35",
                " \"d4a2ad392b20b2e4ba82b37ade4fbdcf9c99cd22444241951c2da5fc4b675948"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1677,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1677,
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
                "1[.]159[.]34[.]223",
                "1[.]159[.]90[.]31",
                "1[.]173[.]98[.]163",
                "1[.]177[.]162[.]2"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 5344,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 5344,
                "newInLastHour": 5344,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]0[.]164[.]165",
                "1[.]116[.]61[.]217",
                "1[.]14[.]203[.]20",
                "1[.]15[.]103[.]109",
                "1[.]15[.]227[.]58"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 21047,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 21047,
                "newInLastHour": 21047,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://123[.]13[.]1[.]8:38138/bin[.]sh",
                "hxxps://pgfiv[.]jbgroup21[.]com/e887731f-9842-4886-a6a2-bbb588c2e5e3",
                "hxxp://45[.]207[.]196[.]86/huhu/titanjr[.]mips",
                "hxxps://maytwilcz[.]easternartmuseum[.]com/e30a5555-b3f7-4fa4-a367-39bb0c5baeb2",
                "hxxp://42[.]225[.]204[.]96:54324/bin[.]sh"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 4799,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 4799,
                "newInLastHour": 4773,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"hxxps://basebaistat[.]my/dl/file/\"",
                " \"hxxps://basebaistat[.]my/ccheck\"",
                " \"hxxps://basebaistat[.]my/cload\"",
                " \"hxxps://basebaistat[.]my/tracker[.]js\"",
                " \"basebaistat[.]my\""
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
            "iocCount": 10226,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 10226,
                "newInLastHour": 1,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "a6df6eca49e13a8c5ebba1f86ca4c5766b1c1b97",
                "3cf6a282d22b606bce0ba5ad74526257eff4cf81",
                "3fb1dbcabe3bab0eb06fefe295821bff1007fb25",
                "50cad154b9d5fdd19c3f67162257de03d3a6afcd",
                "f9a55e7a59b0fcbd7df9f5a445475480368598ce"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 53945,
            "activeSources": 8,
            "criticalAlerts": 32161,
            "activeCampaigns": 232
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 21958,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "C2",
                "count": 10203,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 4452,
                "trend": "stable",
                "percentage": 0
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
                "count": 21026,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://125[.]47[.]240[.]62:41604/bin[.]sh",
                    "hxxp://182[.]117[.]78[.]154:39801/i",
                    "hxxps://eqxun[.]jayswraps[.]com/04738ac6-ec94-41c3-a327-ad2edcab661a"
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
                    "1[.]159[.]90[.]31",
                    "1[.]191[.]147[.]34"
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
                "name": "AsyncRAT",
                "count": 1430,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "c31650da58712771ad83fd5c6cef97905a255cc5",
                    "e86cb30b97c8af13b305fa5cdc7357e23f633447",
                    "c4e9396a3a0543fa79cc0a8f23395f90a15e03b0"
                ]
            },
            {
                "name": " \"win.cobalt_strike\"",
                "count": 1413,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"114[.]134[.]187[.]38:5000\"",
                    " \"114[.]134[.]187[.]38:22\"",
                    " \"114[.]134[.]187[.]38:8082\""
                ]
            },
            {
                "name": " \"win.metastealer\"",
                "count": 997,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"yyowcsswsesksomi[.]xyz\"",
                    " \"yyqewussumqweisi[.]xyz\"",
                    " \"yyqisgekkgammukq[.]xyz\""
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
                "count": 649,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "4264b1c47eac055ce604ef3509d23cd7e3bd584b",
                    "58a5ded84c93621d72ecc14b386e0e6bea5d103a",
                    "1dedacf3710f30c15b9e73c9d719a969eec755e5"
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
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious URLs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": "malware_download",
        "totalAttacksThisHour": 46508,
        "lastCalculated": "2026-07-18 02:34 IST"
    }
};
