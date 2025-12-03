// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2025-12-03T10:07:49.082346+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2025-12-03T10:07:48.716195+05:30",
    "lastUpdatedFormatted": "Dec 03, 2025 at 10:07 AM IST",
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
                "hxxps://www[.]robiox[.]com[.]py/users/293178651088/profile",
                "hxxps://fidelityworkplacelo[.]click/individual/page[.]html",
                "hxxps://fidelityworkplacehr[.]click/individual/page[.]html",
                "hxxps://fidelityworkplacehr[.]click/individual",
                "hxxps://fidelityworkplacelo[.]click/individual"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 837,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 837,
                "newInLastHour": 14,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"c541e889ba556bac37bd0359aeb24224d15363228f213b4acb87073ea6f56713",
                " \"5094adea3ae4d0374a126b2cf316c1f17a2f8eceb2b1c76fd5b334ccf4a85dd0",
                " \"f4fb80f3436077aa3023cb662858ac662a88b9a7fdf2179d06205d7ad624e75d",
                " \"711b890873df3573927acfd309bd85e5506fb68a282e5cfc29f59d467e50986d",
                " \"67dcb03549ffff37f461654efb7ade244bcd032d9f68a598771d3d0cacf1de2c"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1458,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1458,
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
                "1[.]15[.]20[.]205",
                "1[.]157[.]242[.]238",
                "1[.]176[.]134[.]253",
                "1[.]181[.]69[.]174"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 5026,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 5026,
                "newInLastHour": 5026,
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
                "1[.]214[.]197[.]163"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 29295,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 29295,
                "newInLastHour": 29295,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://112[.]248[.]103[.]6:54801/bin[.]sh",
                "hxxp://27[.]215[.]125[.]78:58764/i",
                "hxxps://3x7[.]p7ecunder8[.]ru/eyx5ln05",
                "hxxps://a64[.]f1auntre6[.]ru/ywninvi0",
                "hxxps://a64[.]f1auntre6[.]ru/tmujlnk1"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 2633,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 2633,
                "newInLastHour": 2628,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"39c294390009834552aae2fbcae03fe3cf9f4fe5eda668c224448a0f4679c0c0\"",
                " \"796a4ba3254887981f8661c3e8c7832e\"",
                " \"859ffef0278c9c9835db23202f3aa67b69ad1e00a3f326350f613ab701a45ee3\"",
                " \"6ad6b8e8dad4f6555786a44725800fc0\"",
                " \"2ca4c29daf94d5fc9f92479b9cb3f8ca0881fc7b\""
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
            "totalIndicators": 57766,
            "activeSources": 8,
            "criticalAlerts": 38594,
            "activeCampaigns": 198
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 30091,
                "trend": "stable",
                "percentage": -2
            },
            {
                "category": "C2",
                "count": 8503,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 2031,
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
                "count": 29230,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://195[.]177[.]94[.]107/arm6",
                    "hxxp://195[.]177[.]94[.]107/arm4t",
                    "hxxp://195[.]177[.]94[.]107/m2"
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
                    "1[.]15[.]135[.]58",
                    "1[.]15[.]20[.]205"
                ]
            },
            {
                "name": " \"unknown\"",
                "count": 1461,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"email[.]meta-email[.]online\"",
                    " \"hxxp://vtubers[.]uwunekochan[.]com/panel[.]html\"",
                    " \"hxxps://www[.]cymage-media[.]com/\""
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
                "count": 421,
                "types": [
                    "hash"
                ],
                "sampleIndicators": [
                    " \"f04f737fdd16534707045063a21f541df6f93346e6b1d4a9c0d955d5b728ed7e",
                    " \"ba69344e4f9b1497c002e8c8b85710704d7ac7bd40ab643f7ea6600b0be9e9a7",
                    " \"7d98b3cc8507fa58772f6e9c491e164d2ab39cecde19124c6e893aa8ab203ed6"
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
        "totalAttacksThisHour": 52267,
        "lastCalculated": "2025-12-03 10:07 IST"
    }
};
