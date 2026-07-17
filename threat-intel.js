// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-07-17T11:54:38.624587+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-07-17T11:54:38.256223+05:30",
    "lastUpdatedFormatted": "Jul 17, 2026 at 11:54 AM IST",
    "comparisonPeriod": "Jul 16 \u2013 Jul 17, 2026",
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
                "hxxps://www[.]roblox[.]com[.]ml/users/162176377204/profile",
                "hxxps://s4w[.]in/www-roblox-com-hk-users-162176377204-profile",
                "hxxps://www[.]ti[.]biogasos[.]com/",
                "hxxp://www[.]hr-paymentincrement-payroll[.]sbs/",
                "hxxps://trezarsuit-en[.]wasmer[.]app/"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 939,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 939,
                "newInLastHour": 10,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"f14937900247bbc5690a77efa2c85f55fa8d88c7ef0128c177aab9581290e9b1",
                " \"5d38468be1bebfed0309c68875e07a6d2a5d928f4117c7293f3e04c30811d361",
                " \"5ef1aa40084a122011be62539f8d67aebcf7f9a0b1a31e6a057cbd1726a2b575",
                " \"ed92e83b34b68c9898477f927fa6de6571ffa2f305703f99c7a27fd4cec9241b",
                " \"fd8d4423c933a7eadabe22e580dea1f75289f63e7f87cab1b9511507d7f8cdf5"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1628,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1628,
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
                "1[.]119[.]194[.]226",
                "1[.]12[.]229[.]231",
                "1[.]159[.]52[.]66",
                "1[.]159[.]90[.]31",
                "1[.]175[.]81[.]181"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 4936,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 4936,
                "newInLastHour": 4936,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]0[.]164[.]165",
                "1[.]1[.]220[.]166",
                "1[.]116[.]61[.]217",
                "1[.]14[.]203[.]20",
                "1[.]15[.]103[.]109"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 20781,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 20781,
                "newInLastHour": 20781,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://42[.]224[.]93[.]190:55917/bin[.]sh",
                "hxxp://222[.]141[.]10[.]41:52985/i",
                "hxxps://scjzlqeyk[.]hazzarat[.]world/0de0d410-4251-423e-a572-31f8b40404ac",
                "hxxp://119[.]116[.]39[.]34:59036/i",
                "hxxp://177[.]223[.]57[.]224:55211/i"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 5063,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 5063,
                "newInLastHour": 4968,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"217[.]60[.]97[.]3:9200\"",
                " \"23[.]227[.]203[.]205:6579\"",
                " \"23[.]227[.]203[.]246:6579\"",
                " \"79[.]135[.]160[.]20:8080\"",
                " \"85[.]158[.]57[.]247:8080\""
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
            "iocCount": 1630,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 1630,
                "newInLastHour": 0,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "d490abc2eba705abb1b6391b9be0a12f1e75331b",
                "e86cb30b97c8af13b305fa5cdc7357e23f633447",
                "c4e9396a3a0543fa79cc0a8f23395f90a15e03b0",
                "83424f01b8b7262f3a3cd61048d3337afdcca58a",
                "1db0412338ca7c2407e54aeb6791beeedd146c4c"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 53931,
            "activeSources": 8,
            "criticalAlerts": 31899,
            "activeCampaigns": 249
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 21702,
                "trend": "stable",
                "percentage": -2
            },
            {
                "category": "C2",
                "count": 10197,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 4580,
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
                "count": 20738,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://110[.]37[.]23[.]188:58259/bin[.]sh",
                    "hxxps://u5dn1e6x[.]bazisangkaqazgeychidancepoli[.]com/?ublib=5c5507fb-8db4-45f5-8f9b-49c5ed0e5fbe",
                    "hxxp://222[.]219[.]74[.]84:50681/i"
                ]
            },
            {
                "name": "CINS Threat List",
                "count": 15000,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]119[.]194[.]226",
                    "1[.]12[.]229[.]231",
                    "1[.]159[.]52[.]66"
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
                "name": " \"win.cobalt_strike\"",
                "count": 1443,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"203[.]9[.]150[.]13:8443\"",
                    " \"107[.]173[.]85[.]194:8443\"",
                    " \"203[.]91[.]75[.]89:5005\""
                ]
            },
            {
                "name": "AsyncRAT",
                "count": 1429,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "e86cb30b97c8af13b305fa5cdc7357e23f633447",
                    "c4e9396a3a0543fa79cc0a8f23395f90a15e03b0",
                    "c11fd105f60ade90dc2611391ee6aa93e6c73375"
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
        "totalAttacksThisHour": 46000,
        "lastCalculated": "2026-07-17 11:54 IST"
    }
};
