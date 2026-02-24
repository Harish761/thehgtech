// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-02-24T22:45:49.232115+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-02-24T22:45:48.939560+05:30",
    "lastUpdatedFormatted": "Feb 24, 2026 at 10:45 PM IST",
    "comparisonPeriod": "Feb 23 \u2013 Feb 24, 2026",
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
                "hxxps://oicana-34794-myltabas[.]pages[.]dev/help/contact/399121418862456",
                "hxxp://news[.]cistronixperu[.]com/rs3/login[.]php",
                "hxxp://www[.]g33wq-lzgz[.]vercel[.]app/",
                "hxxps://notafakedomain[.]org/landing/form/d5f3c9f7-ea9d-4326-a15a-ad9fed9d2cce",
                "hxxp://cesserieuxcette[.]weebly[.]com/"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 1214,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 1214,
                "newInLastHour": 68,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"201ba6258cfa079e3daf4e90c089d25d1eecaf6f2bdf2b2575a7f81a9bad7d64",
                " \"8a248046e3e5e81b40f42fe8fadfcf25696d9ae6853879303137e99f584f0ea6",
                " \"392e1b6ab3702ec39cbe2742f8fed047c723b9a8bea31f33289167f997880009",
                " \"8eac663c2da5748fad47104b0fab2e7e9bb9acfb56ce58097df9d0995ea5a9ad",
                " \"d8903e265c9f3f1df7a603972873758224fbde9463b94ff2223b689f972dd1d7"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1479,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1479,
                "newInLastHour": 2,
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
                "1[.]11[.]132[.]194",
                "1[.]14[.]3[.]240",
                "1[.]15[.]116[.]189",
                "1[.]15[.]118[.]23",
                "1[.]15[.]22[.]112"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 7081,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 7081,
                "newInLastHour": 7081,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]14[.]12[.]141",
                "1[.]15[.]116[.]189",
                "1[.]15[.]77[.]170",
                "1[.]194[.]219[.]159",
                "1[.]214[.]197[.]163"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 21602,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 21602,
                "newInLastHour": 21602,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://119[.]162[.]66[.]3:34351/bin[.]sh",
                "hxxp://110[.]37[.]26[.]106:39348/bin[.]sh",
                "hxxp://115[.]63[.]9[.]97:57447/i",
                "hxxp://59[.]101[.]150[.]11:41424/i",
                "hxxp://180[.]190[.]240[.]131:44916/bin[.]sh"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 1493,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 1493,
                "newInLastHour": 1493,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"tfx[.]it-bd[.]com\"",
                " \"tfx[.]cardiffphysio[.]com\"",
                " \"hxxps://tfx[.]it-bd[.]com/\"",
                " \"hxxps://tfx[.]cardiffphysio[.]com/\"",
                " \"midwestopenwheel[.]com\""
            ]
        },
        "Feodo Tracker": {
            "description": "Botnet C2 server IPs from Feodo Tracker. Tracks Dridex, Emotet, TrickBot, QakBot, and BazarLoader.",
            "website": "https://feodotracker.abuse.ch/",
            "updateFrequency": "Hourly",
            "iocCount": 2,
            "iocDataUrl": "https://thehgtech.com/ioc-data/feodo-tracker.json",
            "stats": {
                "total": 2,
                "newInLastHour": 2,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "162[.]243[.]103[.]246",
                "178[.]62[.]3[.]223"
            ]
        },
        "SSL Blacklist": {
            "description": "Malicious SSL certificates used by botnet C2 servers. Helps detect encrypted malware communications.",
            "website": "https://sslbl.abuse.ch/",
            "updateFrequency": "Daily",
            "iocCount": 9054,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 9054,
                "newInLastHour": 1,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "deb508613e3293efe553c8d8d97ef35be71b5c5c",
                "eb23db59e4b3b55b41a9db1435ee07eebb398e7d",
                "2910817b2b70d3fcaf3ff8380f931948431c1178",
                "9422880b79f24259e5c81d28a5c90027a034f6aa",
                "4569809a1b2c3a8f6a10b0d630302ea802923614"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 50271,
            "activeSources": 8,
            "criticalAlerts": 31982,
            "activeCampaigns": 222
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 22934,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "C2",
                "count": 9048,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 1097,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Phishing",
                "count": 301,
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
                "count": 21418,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://42[.]227[.]2[.]151:54243/i",
                    "hxxp://219[.]156[.]186[.]139:50659/bin[.]sh",
                    "hxxp://42[.]227[.]2[.]151:54243/bin[.]sh"
                ]
            },
            {
                "name": "CINS Threat List",
                "count": 15000,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]0[.]164[.]165",
                    "1[.]10[.]247[.]65",
                    "1[.]11[.]132[.]194"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1481,
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
                "count": 1383,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "bef81c1fd26e84e5e25a4182bf668304ba2891da",
                    "adb1b31a6283691b205839f5e3ce4f8ed7aa5f54",
                    "97e58eec776ad990a10d1f4a932e1a4ae48636b3"
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
                "count": 626,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "a49ad700b0042b6d1e20153a6253bcc8ff17cff2",
                    "56dd33cfae66685bb9cf7f923d6e6752ff791705",
                    "2568edbf429d4745fe7ec67848063d60b82823d8"
                ]
            },
            {
                "name": " \"n/a",
                "count": 598,
                "types": [
                    "hash"
                ],
                "sampleIndicators": [
                    " \"1fd25cfec4fb450be589d9e4ab8a2193a001c014484b212f427d34acd223e4b6",
                    " \"f3fbb7cd3f74be82f7f41dd36c20957ea5ef2de4c918c9a6e0be651e44557a1f",
                    " \"ea382f4b7a5ebeba505e56d42046a420f23a9a126d868bebf3ca04a67cb241bd"
                ]
            },
            {
                "name": " \"js.iclickfix\"",
                "count": 570,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"bennettarbitration[.]com\"",
                    " \"eventocontaduriafce[.]viajandoalcielo[.]com\"",
                    " \"gconfisur[.]com\""
                ]
            },
            {
                "name": "LummaStealer",
                "count": 537,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "2987e30402370bdcbf291aedc9cd52a9a79bda0c",
                    "6fd95f4a2d9cec238cbe2e1756890381c4fae3cb",
                    "e2293f74d8d72bde90bb0424038259a9e3126e1b"
                ]
            },
            {
                "name": " \"Mirai",
                "count": 456,
                "types": [
                    "hash"
                ],
                "sampleIndicators": [
                    " \"7ffb27b237d33da2ac4a20c3560db2876f5f398f39a0a28dee2d775c7b62ad89",
                    " \"f9f67d4e9cb5366480631d75db0122680595a6d471e51eaebf8f4ac2b1ad5e1e",
                    " \"5761949e5aa032c31433ab3efe97998814ba3830b4886ed0c23b391eb0d95185"
                ]
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious URLs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": "malware_download",
        "totalAttacksThisHour": 45549,
        "lastCalculated": "2026-02-24 22:45 IST"
    }
};
