// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-02-18T14:29:29.185585+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-02-18T14:29:28.904539+05:30",
    "lastUpdatedFormatted": "Feb 18, 2026 at 02:29 PM IST",
    "comparisonPeriod": "Feb 17 \u2013 Feb 18, 2026",
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
                "hxxps://find[.]location-global[.]info/help?zZ7",
                "hxxp://find[.]location-global[.]info/zZ7",
                "hxxps://steamcommunitu[.]com/tradeofer/new/?partner=216937179&token=-XvYio4992s1124FS1452121",
                "hxxps://www[.]online-statements[.]site/signin?t=eyJhbGciOiJIUzI1NiJ9[.]eyJ0cmFja2luZ190b2tlbiI6Ijg4MmRiNzY3LWM5NzQtNDk5NS1iNzBlLWVkNzRhMjkzNmY3ZiIsImNlbGwiOiJodHRwczovL3FnYmZ3b3c2MGYuZXhlY3V0ZS1hcGkudXMtd2VzdC0yLmFtYXpvbmF3cy5jb20vcHJvZC9hcGkvcGhpc2hpbmdjYW1wYWlnbiIsImNhbXBhaWduX3Rva2VuIjoiMjIzYjYyZjMtNGMyZC00NGIwLTlhOTktNjVmNzI1ZDQ2Nzk3IiwidGVzdF90b2tlbiI6ZmFsc2UsImV4dGVybmFsX3RyYWluaW5nIjpmYWxzZSwiZGlyZWN0X2RlbGl2ZXJ5Ijp0cnVlLCJpYXQiOjE3NzEzNDcxMzYsImlzcyI6Imh0dHBzOi8vYXBwLnBoaXNodGhyZWF0LmNvbSIsImV4cCI6MTc3OTEyMzEzNn0[.]X8ySovUpQcbTQdavgB5r78nv6KA7zoWnRpkJgU5tF5w",
                "hxxps://web-whatsapp-app[.]hl[.]cn/"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 1128,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 1128,
                "newInLastHour": 34,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"730fcc3ba3b9029eda9faf1a28fb107da62e10131a1248ad2e0dfc015cc9d75a",
                " \"7a7de01481722db7530391f19fffd16fa6fc7b358833aa1e86d22fbc99cce1a1",
                " \"7da7034e44451497d95f76aacfb0a6a78ea8c7c4f20668e627e6a00375d2eae5",
                " \"eee4f03d3ac46e5f6b01d34f9c30636ea0b6b49b6f1eecd6a2c6c9d56de10faa",
                " \"b43fd53e89c28a5d2cd3c9ba8bc2c5581d8d24063507632d5df1d79b77592fd9"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1475,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1475,
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
                "1[.]0[.]164[.]165",
                "1[.]10[.]211[.]66",
                "1[.]11[.]132[.]194",
                "1[.]15[.]118[.]23",
                "1[.]15[.]22[.]112"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 5871,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 5871,
                "newInLastHour": 5871,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]145[.]11[.]218",
                "1[.]15[.]77[.]170",
                "1[.]162[.]225[.]217",
                "1[.]165[.]130[.]37",
                "1[.]214[.]197[.]163"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 20140,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 20140,
                "newInLastHour": 20140,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://130[.]12[.]180[.]43/files/5411854720/jJ7xJzX[.]exe",
                "hxxp://61[.]53[.]203[.]196:37104/bin[.]sh",
                "hxxp://123[.]11[.]13[.]12:50879/i",
                "hxxp://182[.]119[.]248[.]106:36245/i",
                "hxxp://123[.]11[.]13[.]12:50879/bin[.]sh"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 1006,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 1006,
                "newInLastHour": 772,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"99[.]83[.]215[.]169:8121\"",
                " \"84[.]17[.]45[.]180:8443\"",
                " \"84[.]17[.]45[.]180:8888\"",
                " \"82[.]165[.]218[.]73:8888\"",
                " \"34[.]9[.]91[.]140:8888\""
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
                "162[.]243[.]103[.]246",
                "172[.]232[.]59[.]14",
                "178[.]62[.]3[.]223"
            ]
        },
        "SSL Blacklist": {
            "description": "Malicious SSL certificates used by botnet C2 servers. Helps detect encrypted malware communications.",
            "website": "https://sslbl.abuse.ch/",
            "updateFrequency": "Daily",
            "iocCount": 8958,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 8958,
                "newInLastHour": 7,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "adf3f697ee22a8dc8ea8706f940bcdde0a72b6a5",
                "9b64cd9e6bd74585beeb263fcff0e91988921f88",
                "5d305d42cc44324b7106529b6f12df92c22d8dcd",
                "9f831773e516dae214ced3e163619e2719fd9606",
                "30d40197d9a7eefa83cc76a302b8768b42276166"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 47786,
            "activeSources": 8,
            "criticalAlerts": 30074,
            "activeCampaigns": 226
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 21119,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "C2",
                "count": 8955,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 423,
                "trend": "stable",
                "percentage": -5
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
            },
            {
                "name": "Government",
                "percentage": 0
            }
        ],
        "campaigns": [
            {
                "name": "malware_download",
                "count": 19979,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://119[.]179[.]249[.]211:51247/bin[.]sh",
                    "hxxps://gearsync[.]metalheart[.]coupons/engine_val",
                    "hxxp://119[.]185[.]191[.]219:46577/i"
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
                    "1[.]10[.]211[.]66",
                    "1[.]11[.]132[.]194"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1473,
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
                "count": 621,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "313aa465da1c887d1189e74be08d3e79306192c2",
                    "4091cdf235522076668c6f698479d4af4e5d2bf8",
                    "f7b6ed231ee6c9dc773697ae24f09c559fbee477"
                ]
            },
            {
                "name": "LummaStealer",
                "count": 535,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "e2293f74d8d72bde90bb0424038259a9e3126e1b",
                    "69101b8edfa5d5e2ead4512a6d71c84748b0c012",
                    "1d28cc6dca52e95f859739c39a04d794671f66d9"
                ]
            },
            {
                "name": " \"Mirai",
                "count": 370,
                "types": [
                    "hash"
                ],
                "sampleIndicators": [
                    " \"b823eeb737c32467cd191989d5320d13d5c5b82262a18164a7b84b88c8d1dbb6",
                    " \"5487767cd817a57dc1fbf77509cab82462bb2b8bbaa727509b9661ea09ccac75",
                    " \"7272632cc19f5f3a2249ff0bd9f11d553158047b3f112aad19ed1e74255b3a47"
                ]
            },
            {
                "name": "Vidar",
                "count": 369,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "e89906297ea54d3a4d9648c9b2602552d24f050e",
                    "ddc804f989c85db6fb3f1185a6a3f8c73489f827",
                    "c8289f1dbf34119443a3077fd879c3433506f358"
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
        "totalAttacksThisHour": 42129,
        "lastCalculated": "2026-02-18 14:29 IST"
    }
};
