// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-06-19T17:46:21.629544+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-06-19T17:46:21.386250+05:30",
    "lastUpdatedFormatted": "Jun 19, 2026 at 05:46 PM IST",
    "comparisonPeriod": "Jun 18 \u2013 Jun 19, 2026",
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
                "hxxp://ai-start-faq-trezoor[.]typedream[.]app/",
                "hxxp://faq-trezr-public-en[.]typedream[.]app/",
                "hxxps://sarsdar[.]assuredwebtest[.]info/ga/click/2-6756391-9-9824-19244-10568-0e851c108c-f413840706",
                "hxxp://faq-trezo-or-hard-ware-walle-t[.]typedream[.]app/",
                "hxxp://trezoor-io-learn-cdn[.]typedream[.]app/"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 684,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 684,
                "newInLastHour": 118,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"7e3d33c794a53db6cbefc1cb7bdb960a4518636be4278abd75243efc45f11507",
                " \"251723ad1245e1c87c3d8a656727691a5bb2c7003ae4a952c0941933b2103011",
                " \"6e9fdf40571cb4737a4d729f31b0a1ceff9f91fbe7e8ef775e6a82d915e661fb",
                " \"60df9a8efe346db5a354bfff4be34e6db8130ca84b6359b92e9125bc4ff05d4e",
                " \"3004e4f5304d10bb378d53fcedb28921f19dd5869c23fce6227703a0faa90a57"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1704,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1704,
                "newInLastHour": 89,
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
                "1[.]10[.]185[.]224",
                "1[.]12[.]229[.]231",
                "1[.]15[.]14[.]29",
                "1[.]164[.]104[.]142",
                "1[.]164[.]110[.]70"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 5984,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 5984,
                "newInLastHour": 5984,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]1[.]220[.]166",
                "1[.]15[.]135[.]116",
                "1[.]15[.]32[.]131",
                "1[.]162[.]223[.]232",
                "1[.]192[.]61[.]19"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 17167,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 17167,
                "newInLastHour": 17167,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://42[.]230[.]39[.]207:55643/bin[.]sh",
                "hxxp://113[.]228[.]156[.]46:44642/bin[.]sh",
                "hxxp://163[.]142[.]87[.]221:36330/i",
                "hxxp://113[.]229[.]58[.]57:36784/i",
                "hxxp://115[.]63[.]150[.]140:52390/i"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 3682,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 3682,
                "newInLastHour": 3585,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"64[.]90[.]3[.]208:7891\"",
                " \"185[.]92[.]190[.]214:8896\"",
                " \"185[.]92[.]190[.]216:8896\"",
                " \"www[.]api-aws[.]xyz\"",
                " \"xeno[.]getslax[.]com\""
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
            "iocCount": 9996,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 9996,
                "newInLastHour": 275,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "070ad9d359151a2de5af7cd41295758bf1f4227a",
                "7125469fa26c30ae4d89eb2a8bec1c7a382dcd7d",
                "a23f624eee7847ff3939994ff8922ba8eb645e26",
                "61102ef78d52d044b8ded80e2ad0471c68e6f962",
                "49aa56f946089804e2bc8ae77a7b2fbaa5860e50"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 47794,
            "activeSources": 8,
            "criticalAlerts": 27313,
            "activeCampaigns": 235
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 17610,
                "trend": "stable",
                "percentage": -2
            },
            {
                "category": "C2",
                "count": 9703,
                "trend": "stable",
                "percentage": -2
            },
            {
                "category": "Botnet",
                "count": 3003,
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
                "count": 16883,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://123[.]191[.]63[.]124:55440/bin[.]sh",
                    "hxxp://42[.]226[.]71[.]20:42571/bin[.]sh",
                    "hxxp://27[.]215[.]120[.]23:34081/i"
                ]
            },
            {
                "name": "CINS Threat List",
                "count": 15000,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]10[.]185[.]224",
                    "1[.]15[.]14[.]29",
                    "1[.]15[.]35[.]79"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1616,
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
                "count": 1418,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"51[.]250[.]100[.]14:8080\"",
                    " \"51[.]250[.]100[.]14:80\"",
                    " \"124[.]223[.]112[.]182:8080\""
                ]
            },
            {
                "name": "AsyncRAT",
                "count": 1411,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "49aa56f946089804e2bc8ae77a7b2fbaa5860e50",
                    "6a998d33a87c7b36c2be68ed5c1c63929c0d6be4",
                    "167ddfd671ef30c31528515389cfdd11d9251558"
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
                "count": 670,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "27e3cb5b0043884c7ebc0691e2e73ef3b95339ac",
                    "ae590545961e96de860ea7434c0e8c69b924de6f",
                    "8a9c74049483847464da1ca3cf6f1f44e17a5f0f"
                ]
            },
            {
                "name": "Vidar",
                "count": 553,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "7125469fa26c30ae4d89eb2a8bec1c7a382dcd7d",
                    "3a4d0044eed173808eb2c6b86c70d1121318adf0",
                    "59f0554dda32cbf5b5b5b08fe508480d81172f2d"
                ]
            },
            {
                "name": "LummaStealer",
                "count": 552,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "2beac2ee8b2fe7625d4de9f5381d37f200965f91",
                    "a46841d623a191366909b24375bee0eceea23bbe",
                    "ab7f083d77dc2b1b71c0aec9a417e0a5a036a5f9"
                ]
            },
            {
                "name": "OffLoader",
                "count": 382,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "b7fca0fbc8179ef52e3239907257dcd0315cb2f1",
                    "8f15e3e07c691ae493b4059222638003e0bf0a9b",
                    "031af28814511239c0172b71c2c5092660676632"
                ]
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious URLs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": "malware_download",
        "totalAttacksThisHour": 42523,
        "lastCalculated": "2026-06-19 17:46 IST"
    }
};
