// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2025-12-01T18:32:30.053907+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2025-12-01T18:32:29.690795+05:30",
    "lastUpdatedFormatted": "Dec 01, 2025 at 06:32 PM IST",
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
                "hxxp://www[.]thegederalist[.]com/",
                "hxxps://kysgo[.]pe/jdd/am/infospage[.]php",
                "hxxps://hero-shanon[.]github[.]io/netflix-clone/",
                "hxxps://www[.]roblox[.]com[.]ml/communities/880092909/ROBUXGIVERAWAYS",
                "hxxps://pub-48d78b8179584b6a887a19c1e157a693[.]r2[.]dev/index[.]html"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 677,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 677,
                "newInLastHour": 90,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"b3d678865abbab8c545ae7947f738e764a0a0c078a4bb268894137c6af0f4ed9",
                " \"8562260a9835de79d39e5b7ef2096cd8fc671362cf23a0dadc81f1350597f3f9",
                " \"7cee51cf30d332a319b127bc8b3d6cff7c07d9e069ac0021f8c16c81c9cab036",
                " \"9637633bd1a0b2f9f4caabdf6bec6813c226e8e59a40dd135a3616c7fcce6c9b",
                " \"dbc8fb59d9134a0f27c97fbbf03fa0cf805928eec01712db973ef5463ffc055d"
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
            "iocCount": 5103,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 5103,
                "newInLastHour": 5103,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]13[.]79[.]144",
                "1[.]15[.]114[.]102",
                "1[.]15[.]148[.]9",
                "1[.]161[.]58[.]137",
                "1[.]162[.]245[.]162"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 29649,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 29649,
                "newInLastHour": 29649,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxps://rwg[.]amb1gf0rest[.]ru/vnwwvj6b",
                "hxxp://125[.]44[.]209[.]33:49702/i",
                "hxxps://rwg[.]amb1gf0rest[.]ru/8yy1s1yo",
                "hxxp://222[.]127[.]170[.]84:48711/bin[.]sh",
                "hxxps://uv3mf[.]amb1gf0rest[.]ru/3c63alf1"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 2459,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 2459,
                "newInLastHour": 2277,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"185[.]208[.]206[.]205:8443\"",
                " \"rwg[.]amb1gf0rest[.]ru\"",
                " \"uv3mf[.]amb1gf0rest[.]ru\"",
                " \"122[.]114[.]10[.]199:8001\"",
                " \"160[.]202[.]245[.]232:10012\""
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
            "totalIndicators": 60044,
            "activeSources": 8,
            "criticalAlerts": 38764,
            "activeCampaigns": 203
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 30263,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "C2",
                "count": 8501,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 3958,
                "trend": "up",
                "percentage": 59
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
                "count": 29518,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxps://x4dpn[.]sun5park[.]ru/g850jsrf",
                    "hxxp://175[.]165[.]86[.]44:38977/bin[.]sh",
                    "hxxps://x4dpn[.]sun5park[.]ru/ds6u84ef"
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
                "count": 2289,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"x4dpn[.]sun5park[.]ru\"",
                    " \"q6[.]sun5park[.]ru\"",
                    " \"zwdq[.]sun5park[.]ru\""
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
                "name": " \"unknown\"",
                "count": 1442,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"hxxps://edm[.]phm-hotels[.]com/\"",
                    " \"43[.]131[.]43[.]145:800\"",
                    " \"hxxps://voko9yil1fmxl6svyehr[.]104east[.]net/\""
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
                "count": 396,
                "types": [
                    "hash"
                ],
                "sampleIndicators": [
                    " \"69669dd446b2d4244c7d11ea3f536012d5890f0c25e66fb64fe1e9afa2e7fc4f",
                    " \"21b2096177230f28589c5667b8b2ec596d5380acb5a57cb29650b1801e1d9f1f",
                    " \"fbaa2083f4322defe719fe7efcb67741d5b7c0ee1107f696b548dda629bd69fc"
                ]
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious URLs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": "malware_download",
        "totalAttacksThisHour": 52422,
        "lastCalculated": "2025-12-01 18:32 IST"
    }
};
