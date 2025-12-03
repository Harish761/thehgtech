// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2025-12-03T07:41:47.434549+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2025-12-03T07:41:47.065038+05:30",
    "lastUpdatedFormatted": "Dec 03, 2025 at 07:41 AM IST",
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
            "iocCount": 834,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 834,
                "newInLastHour": 29,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"eb714b49abb26c3cd644abc6b6b74ea5a2b44dd17434d40fe2a5d1d0685efabc",
                " \"c430256840a5795787ab14b715a12c2ae98276425d418040c178d85c988de1f3",
                " \"f04f737fdd16534707045063a21f541df6f93346e6b1d4a9c0d955d5b728ed7e",
                " \"ba69344e4f9b1497c002e8c8b85710704d7ac7bd40ab643f7ea6600b0be9e9a7",
                " \"7f0b01ee40014edf8c97610ebabdc91130a36ab7e96782c8d95c25b48a920a8e"
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
                "newInLastHour": 3,
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
                "1[.]15[.]135[.]58",
                "1[.]15[.]20[.]205",
                "1[.]157[.]242[.]238",
                "1[.]181[.]69[.]174"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 4958,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 4958,
                "newInLastHour": 4958,
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
            "iocCount": 29230,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 29230,
                "newInLastHour": 29230,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://195[.]177[.]94[.]107/arm6",
                "hxxp://195[.]177[.]94[.]107/arm4t",
                "hxxp://195[.]177[.]94[.]107/m2",
                "hxxp://195[.]177[.]94[.]107/lnksys",
                "hxxp://195[.]177[.]94[.]107/arm5"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 2414,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 2414,
                "newInLastHour": 2409,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"5f6[.]crust5p1ant[.]ru\"",
                " \"storm[.]crust5p1ant[.]ru\"",
                " \"nova[.]cheb0t5agit[.]ru\"",
                " \"t77n[.]cheb0t5agit[.]ru\"",
                " \"192[.]227[.]217[.]229:7229\""
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
            "totalIndicators": 58684,
            "activeSources": 8,
            "criticalAlerts": 39320,
            "activeCampaigns": 212
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 30817,
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
                "count": 2043,
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
                "count": 29853,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://182[.]126[.]126[.]19:55952/i",
                    "hxxp://42[.]232[.]232[.]34:53698/i",
                    "hxxp://221[.]15[.]165[.]71:36386/bin[.]sh"
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
                "count": 1455,
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
                "count": 523,
                "types": [
                    "hash"
                ],
                "sampleIndicators": [
                    " \"e3e7a1b13b451a7b0207359b54b1179301f9cdf73275fb3bf440f4f366ff0144",
                    " \"7382e9eed7e207cf41c8137690eeb5d3d7e66c30c1fec337b6af7f14b900a385",
                    " \"6174f7d79e48448d38278254374a2d30a7c2880f7d055b8a8484c2fe00cb277d"
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
        "fastestRisingThreat": " \"n/a",
        "totalAttacksThisHour": 51933,
        "lastCalculated": "2025-12-03 07:41 IST"
    }
};
