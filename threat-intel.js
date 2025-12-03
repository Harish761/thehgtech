// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2025-12-03T18:33:09.087011+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2025-12-03T18:33:08.715286+05:30",
    "lastUpdatedFormatted": "Dec 03, 2025 at 06:33 PM IST",
    "comparisonPeriod": "Dec 02 \u2013 Dec 03, 2025",
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
                "hxxps://www[.]whtasapp-xc[.]com/",
                "hxxps://ipfs[.]io/ipfs/bafkreiagmqc2ekwgapx7ln3agjmpm62dd2f7kzq5vwikdussuq6iwpiuxq/?eta=3mail@a[.]b[.]c0",
                "hxxp://mimosawedding[.]vn/wp-content/themes/mimosa/languages/Antaii/home",
                "hxxp://m[.]bybtis[.]com/",
                "hxxps://ipfs[.]io/ipfs/bafkreiaqobyzemgayn6j66qdxa6xicjzgjf2bp43c55w2sust57ks7ssvy"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 910,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 910,
                "newInLastHour": 72,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"233eafff1151fd0215671666905334490e7206265995e9ea025db700655bb69e",
                " \"ce29f64530cd8f84d588aaefe6e6ccdb1ecf1f6b1f1554b367e455127c342bac",
                " \"e493fb5dd552583243a53616c5d145f3e0e560b983e3eec034b546b066bba85c",
                " \"d7c47e0080424c58241a7d24bbd94a9285d4763215f31ca1a0bf6af1b503929f",
                " \"dd8a4d03bf1729bd7cb717b1e6213663853570d73c1112459e0db5558a5bb479"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1454,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1454,
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
                "1[.]117[.]17[.]128",
                "1[.]14[.]3[.]240",
                "1[.]15[.]118[.]23",
                "1[.]15[.]20[.]205",
                "1[.]157[.]242[.]238"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 5057,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 5057,
                "newInLastHour": 5057,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]12[.]64[.]80",
                "1[.]14[.]254[.]146",
                "1[.]161[.]58[.]137",
                "1[.]194[.]200[.]251",
                "1[.]194[.]239[.]240"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 29618,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 29618,
                "newInLastHour": 29618,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://116[.]138[.]107[.]103:34324/i",
                "hxxp://175[.]149[.]88[.]22:50456/i",
                "hxxps://e9[.]f1y5agacious[.]ru/wueohtqo",
                "hxxp://42[.]229[.]166[.]135:52293/bin[.]sh",
                "hxxps://soft[.]f1y5agacious[.]ru/iy9ig3hd"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 1457,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 1457,
                "newInLastHour": 1263,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"xeno-roblox[.]lol\"",
                " \"vqjhg08j-5500[.]euw[.]devtunnels[.]ms\"",
                " \"e9[.]f1y5agacious[.]ru\"",
                " \"soft[.]f1y5agacious[.]ru\"",
                " \"122[.]114[.]10[.]199:443\""
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
                "15[.]204[.]219[.]215",
                "152[.]89[.]239[.]34",
                "162[.]243[.]103[.]246",
                "51[.]210[.]96[.]48"
            ]
        },
        "SSL Blacklist": {
            "description": "Malicious SSL certificates used by botnet C2 servers. Helps detect encrypted malware communications.",
            "website": "https://sslbl.abuse.ch/",
            "updateFrequency": "Daily",
            "iocCount": 8526,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 8526,
                "newInLastHour": 0,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "635cdd5ea708ffedf1b084a9b7c55c3c3dca17b3",
                "8cefee8d802734490dd43f2920ed11afc5323858",
                "2bec8c70e95295eb0fc6cb9ab8328197202070e6",
                "fdcf8b52c97ad488a35c1211bd4834326a9f6bc2",
                "f30a84e5e4404701c9cdf35dc9f041e9387dd669"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 57115,
            "activeSources": 8,
            "criticalAlerts": 38935,
            "activeCampaigns": 211
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 30432,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "C2",
                "count": 8503,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 688,
                "trend": "down",
                "percentage": -66
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
                "percentage": 98
            },
            {
                "name": "Tech",
                "percentage": 1
            },
            {
                "name": "Finance",
                "percentage": 0
            }
        ],
        "campaigns": [
            {
                "name": "malware_download",
                "count": 29500,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxps://masuraonline[.]com/aplikasi/masuraplay77[.]apk",
                    "hxxps://masuraplay[.]org/aplikasi/masuraplay77[.]apk",
                    "hxxps://unitv-apk[.]org/apk/unitv-celular[.]apk"
                ]
            },
            {
                "name": "CINS Threat List",
                "count": 15000,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]117[.]17[.]128",
                    "1[.]14[.]3[.]240",
                    "1[.]15[.]20[.]205"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1458,
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
                "count": 1352,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "6137c89b82c858af9f0101ebc77af7d262ce5b73",
                    "6f6c70df3fd9f7a5f984e44b63720d670ea7ee0f",
                    "c342706c95a15711fd6d9d6e3f4a543957b85a76"
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
                "count": 590,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "3100a40b0b16050f4befdffd447a5a16c7bb23de",
                    "ec1ed7b8bd2ed1362b76197ba2c662c51b8761de",
                    "7e14ce629dff54a5b6a7b65ecdfe3f45e17bb135"
                ]
            },
            {
                "name": "LummaStealer",
                "count": 533,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "1d28cc6dca52e95f859739c39a04d794671f66d9",
                    "7b7c48a7d10c11ab988801fec68db41f6935ecf4",
                    "b57cc0f34294222d350c45d62c735547c8882195"
                ]
            },
            {
                "name": " \"Mirai",
                "count": 479,
                "types": [
                    "hash"
                ],
                "sampleIndicators": [
                    " \"f3d62ef5384d652eada72ac38603793a332e7ae74def72f6d20c5c5afe6e87df",
                    " \"2d7aad4cd9f534449106df11d19e3aed6a65db961acdd232885aee5cde939131",
                    " \"3217056a47b76cb9d5b9ce1368c38c1994f1d6f07205961cf1faa2dbe479fddd"
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
        "fastestRisingThreat": "malware_download",
        "totalAttacksThisHour": 51314,
        "lastCalculated": "2025-12-03 18:33 IST"
    }
};
