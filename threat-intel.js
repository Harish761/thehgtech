// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2025-12-09T22:11:58.502652+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2025-12-09T22:11:58.105387+05:30",
    "lastUpdatedFormatted": "Dec 09, 2025 at 10:11 PM IST",
    "comparisonPeriod": "Dec 08 \u2013 Dec 09, 2025",
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
                "hxxps://roblox[.]com[.]ge/games/2753915549/Blox-Fruits?privateServerLinkCode=33305052478489294833197911204491",
                "hxxps://roblox[.]com[.]ml/communities/3100973784/",
                "hxxp://coiinbasawallatextensonweb3[.]created[.]app/",
                "hxxp://reservation[.]thailand-id5272[.]com/LSPLZWV4/",
                "hxxp://nadx-us-en[.]addpotion[.]com/"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 1484,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 1484,
                "newInLastHour": 110,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"b78c25e39b1cffa04b76119b0406e02943f108b0b65b67031c05047eea81f530",
                " \"e78e8495504dfbee78dcb54f982e2ad24311b626bd6dcac63de72dae6fd4efb1",
                " \"ef47cc1b8d27320cd1b032a43131c77728cc49b00446d3c747db0de224429429",
                " \"062bd9a18ff847c86217d89ff6956a7e84ecd4244ba3a4feb9e2c1ded2cb9407",
                " \"e1639816682dfab588eeeaf7282aacaf9653183ba4bd1610d6e6777d714c9c14"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 56,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 56,
                "newInLastHour": 0,
                "lastUpdate": "just now"
            },
            "types": [
                "ip-range"
            ],
            "sampleIndicators": [
                "5.101.82.0/24",
                "23.147.52.0/24",
                "23.147.148.0/24",
                "23.147.156.0/24",
                "23.147.164.0/24"
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
                "1[.]1[.]176[.]58",
                "1[.]15[.]118[.]23",
                "1[.]176[.]134[.]251",
                "1[.]177[.]162[.]4",
                "1[.]177[.]22[.]68"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 6345,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 6345,
                "newInLastHour": 6345,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]13[.]19[.]219",
                "1[.]15[.]24[.]14",
                "1[.]162[.]251[.]28",
                "1[.]194[.]200[.]251",
                "1[.]214[.]197[.]163"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 29000,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 29000,
                "newInLastHour": 29000,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://110[.]37[.]39[.]129:48547/i",
                "hxxp://178[.]16[.]55[.]189/files/8352719041/kR9sBV6[.]exe",
                "hxxp://60[.]22[.]204[.]80:58230/i",
                "hxxp://60[.]22[.]204[.]80:58230/bin[.]sh",
                "hxxp://178[.]16[.]55[.]189/files/7149348537/wmOV2d3[.]exe"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 4751,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 4751,
                "newInLastHour": 4343,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"wavren[.]oceanpath[.]ru\"",
                " \"oceryl[.]oceanpath[.]ru\"",
                " \"91[.]219[.]239[.]50:80\"",
                " \"merqil[.]bl0omgate[.]ru\"",
                " \"teldan[.]bl0omgate[.]ru\""
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
                "51[.]210[.]96[.]48"
            ]
        },
        "SSL Blacklist": {
            "description": "Malicious SSL certificates used by botnet C2 servers. Helps detect encrypted malware communications.",
            "website": "https://sslbl.abuse.ch/",
            "updateFrequency": "Daily",
            "iocCount": 8601,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 8601,
                "newInLastHour": 7,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "c078625aea4e1e9c0adf87a8a36998d6feab851a",
                "6ddf090c6ddcee20ae94b25b9a2944541620a64b",
                "f428360c1605f4853897e7fcc6805ab3c327e207",
                "4fc7ae833fc2ba4f6c54e180849c7f4ecaca1b1a",
                "e2293f74d8d72bde90bb0424038259a9e3126e1b"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 60175,
            "activeSources": 8,
            "criticalAlerts": 38937,
            "activeCampaigns": 225
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 30367,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "C2",
                "count": 8570,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 1986,
                "trend": "stable",
                "percentage": -2
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
                "count": 28837,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://117[.]72[.]56[.]12/02[.]08[.]2022[.]exe",
                    "hxxp://111[.]228[.]40[.]85:9981/02[.]08[.]2022[.]exe",
                    "hxxp://180[.]76[.]141[.]175:8090/02[.]08[.]2022[.]exe"
                ]
            },
            {
                "name": "CINS Threat List",
                "count": 15000,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]1[.]176[.]58",
                    "1[.]15[.]118[.]23",
                    "1[.]176[.]134[.]242"
                ]
            },
            {
                "name": " \"unknown_stealer\"",
                "count": 1728,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"77[.]83[.]207[.]208:3243\"",
                    " \"wp[.]postanidostavljac[.]rs\"",
                    " \"wp[.]zyratalk[.]co\""
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1493,
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
                "count": 1359,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "aebe846393cee6199796dc1524f82c22f5f1bb35",
                    "2f0654bc0b155cba85aa0be287860feff2045195",
                    "463d2faa6b38a16140bc5dc7cfbffc6c5d30761c"
                ]
            },
            {
                "name": " \"win.dcrat\"",
                "count": 761,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"54[.]38[.]110[.]98:22\"",
                    " \"xoilaczk[.]net\"",
                    " \"xoilaczl[.]com\""
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
                "count": 593,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "5d5c32a9bf92da1d16d0558ed2ed9f19c821c8a9",
                    "31e9cb5ace32adba5c43bce257a6396f9fa0f21c",
                    "9432f61b3afd49f0c35b548b09db103221d9b8c5"
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
        "fastestRisingThreat": " \"unknown_stealer\"",
        "totalAttacksThisHour": 55108,
        "lastCalculated": "2025-12-09 22:11 IST"
    }
};
