// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2025-12-03T00:26:27.200610+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2025-12-03T00:26:26.850914+05:30",
    "lastUpdatedFormatted": "Dec 03, 2025 at 12:26 AM IST",
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
                "hxxps://web-coinbase-pro-us[.]framer[.]media/",
                "hxxps://scprthss[.]rec-datacheck[.]it[.]com/",
                "hxxps://suiteapp-trezor-io[.]typedream[.]app/",
                "hxxps://cjpqb[.]com/",
                "hxxps://roblox[.]com[.]ge/communities/660792757/"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 945,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 945,
                "newInLastHour": 63,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"6f1e5deea29ea4ed7877b4194740a861cb933a24ec58885ea85a41c807deea91",
                " \"15f48617894a5c46863519eb3df87cf064eceb0694d655357878f8c796a29f88",
                " \"5a443230aae83cfc0074b9e08ccbf4b48ebdafbf5e15f6315ed76039499404f5",
                " \"e3e7a1b13b451a7b0207359b54b1179301f9cdf73275fb3bf440f4f366ff0144",
                " \"1eb42d3c9788ea9f11d9100b89f3748c40d7e054f76fcd5a22e15cdf5d1c2ab3"
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
                "1[.]181[.]69[.]174",
                "1[.]189[.]11[.]194"
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
                "1[.]162[.]245[.]162",
                "1[.]194[.]200[.]251",
                "1[.]194[.]239[.]240"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 29810,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 29810,
                "newInLastHour": 29810,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://172[.]86[.]114[.]146/up[.]exe",
                "hxxps://brume1[.]hubr1s5ajor[.]ru/7r9dzlut",
                "hxxp://42[.]224[.]174[.]226:51191/bin[.]sh",
                "hxxps://brume1[.]hubr1s5ajor[.]ru/rw0b5afx",
                "hxxp://61[.]52[.]45[.]64:57655/i"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 2613,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 2613,
                "newInLastHour": 2426,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"99[.]83[.]215[.]169:8127\"",
                " \"46[.]246[.]80[.]12:4444\"",
                " \"191[.]112[.]4[.]221:443\"",
                " \"120[.]233[.]83[.]48:10250\"",
                " \"brume1[.]hubr1s5ajor[.]ru\""
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
            "totalIndicators": 58497,
            "activeSources": 8,
            "criticalAlerts": 39118,
            "activeCampaigns": 213
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 30615,
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
                "count": 2048,
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
                "count": 29685,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://42[.]238[.]239[.]139:39654/i",
                    "hxxp://117[.]220[.]74[.]146:48093/bin[.]sh",
                    "hxxp://61[.]52[.]78[.]79:59746/bin[.]sh"
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
                    "1[.]15[.]20[.]205",
                    "1[.]157[.]242[.]238"
                ]
            },
            {
                "name": " \"unknown\"",
                "count": 1463,
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
                "count": 490,
                "types": [
                    "hash"
                ],
                "sampleIndicators": [
                    " \"ea6de352cd8e37834fce1f309c07daf8e4120fb97abf2be3e0c98b0d3937a96e",
                    " \"38cb0dc21b8da925e1fcd145257708a5f06b61842bb0677a30f116b021f4da3c",
                    " \"edd5c6f137d1bae351e8127f5f507698439d48005d429fb58b5a681c28bf5135"
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
        "fastestRisingThreat": "malware_download",
        "totalAttacksThisHour": 52660,
        "lastCalculated": "2025-12-03 00:26 IST"
    }
};
