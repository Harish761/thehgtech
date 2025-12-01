// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2025-12-01T08:05:36.463275+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2025-12-01T08:05:36.093247+05:30",
    "lastUpdatedFormatted": "Dec 01, 2025 at 08:05 AM IST",
    "comparisonPeriod": "Nov 30 \u2013 Dec 01, 2025",
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
                "hxxps://www[.]roblox[.]tc/users/2279414243/profile",
                "hxxp://www[.]streamcami[.]net/",
                "hxxp://easy-bank-landing-page-eta[.]vercel[.]app/",
                "hxxps://www[.]tkshopasn[.]top/",
                "hxxp://secure-coinpro-web-cdn[.]framer[.]ai/"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 762,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 762,
                "newInLastHour": 147,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"87ffe7535f7e221d713ce338cb8f1ad3481c6a1a48932203f1658d6a1cd1c201",
                " \"a9adeb4b5083f8169fdc374d2764898e42edecc5e9a29259325433068758d26e",
                " \"0d264a2c7fb588b3db2caa44a0acb13ac694ff7fc8b389382ae914087db37ed8",
                " \"c627a0523b9e552988e0496ea06c91b6095f8e9ff5d03393f64bf1d95b306567",
                " \"575af709ba5540a2819c82d51f75b78445c620b2536c977baf76e424a8a6bcf6"
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
                "1[.]116[.]180[.]98",
                "1[.]117[.]17[.]128",
                "1[.]119[.]194[.]226",
                "1[.]15[.]118[.]23",
                "1[.]15[.]135[.]58"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 4768,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 4768,
                "newInLastHour": 4768,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]13[.]79[.]144",
                "1[.]15[.]114[.]102",
                "1[.]15[.]148[.]9",
                "1[.]162[.]245[.]162",
                "1[.]194[.]239[.]240"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 29348,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 29348,
                "newInLastHour": 29348,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://123[.]189[.]128[.]184:56245/bin[.]sh",
                "hxxps://qit[.]evacu0t0nova[.]ru/una6iyi9",
                "hxxp://117[.]208[.]101[.]53:52935/bin[.]sh",
                "hxxp://61[.]137[.]197[.]162:49059/bin[.]sh",
                "hxxp://115[.]48[.]151[.]190:44347/i"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 2996,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 2996,
                "newInLastHour": 2996,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"9iqq[.]evacu0t0nova[.]ru\"",
                " \"qit[.]evacu0t0nova[.]ru\"",
                " \"river[.]def1nmem0r[.]ru\"",
                " \"pmv[.]def1nmem0r[.]ru\"",
                " \"9pft[.]def1nmem0r[.]ru\""
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
                "152[.]89[.]239[.]34",
                "51[.]210[.]96[.]48"
            ]
        },
        "SSL Blacklist": {
            "description": "Malicious SSL certificates used by botnet C2 servers. Helps detect encrypted malware communications.",
            "website": "https://sslbl.abuse.ch/",
            "updateFrequency": "Daily",
            "iocCount": 8525,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 8525,
                "newInLastHour": 0,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "8cefee8d802734490dd43f2920ed11afc5323858",
                "2bec8c70e95295eb0fc6cb9ab8328197202070e6",
                "fdcf8b52c97ad488a35c1211bd4834326a9f6bc2",
                "f30a84e5e4404701c9cdf35dc9f041e9387dd669",
                "12b35a8ec2b2eeeeca8cd423572a2a1e03325bdb"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 59075,
            "activeSources": 8,
            "criticalAlerts": 39542,
            "activeCampaigns": 185
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 31040,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "C2",
                "count": 8502,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 2477,
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
                "count": 30098,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://61[.]53[.]86[.]25:56940/i",
                    "hxxp://189[.]165[.]110[.]121:1539/i",
                    "hxxp://115[.]55[.]229[.]252:60971/bin[.]sh"
                ]
            },
            {
                "name": "CINS Threat List",
                "count": 15000,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]116[.]180[.]98",
                    "1[.]117[.]17[.]128",
                    "1[.]119[.]194[.]226"
                ]
            },
            {
                "name": " \"js.clearfake\"",
                "count": 2208,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"cl5t1d[.]c1othwou1d[.]ru\"",
                    " \"w1d7ou[.]c1othwou1d[.]ru\"",
                    " \"oth5c1[.]c1othwou1d[.]ru\""
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
                "name": " \"Mirai",
                "count": 541,
                "types": [
                    "hash"
                ],
                "sampleIndicators": [
                    " \"c63d8479e20ecb819f4e926d6cce732c9400dbb1767cb37feaf094752a30c245",
                    " \"df1c394a80b2a0e8db0ee19366b206562ab0d2ad03a195e63ee15848142c9163",
                    " \"ea572c241bcbb3074abc231a0425bf6a00511df62f1bbcaa9bcc5111d7f06898"
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
        "fastestRisingThreat": " \"js.clearfake\"",
        "totalAttacksThisHour": 52562,
        "lastCalculated": "2025-12-01 08:05 IST"
    }
};
