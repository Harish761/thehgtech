// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-01-14T18:36:45.949325+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-01-14T18:36:45.475881+05:30",
    "lastUpdatedFormatted": "Jan 14, 2026 at 06:36 PM IST",
    "comparisonPeriod": "Jan 13 \u2013 Jan 14, 2026",
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
                "hxxps://roblox[.]com[.]ge/games/920587237/DAY-16-Adopt-Me?privateServerLinkCode=62824827491820618435381397230697",
                "hxxps://final-kimchi-072485[.]framer[.]app/",
                "hxxps://public-exoduswallt[.]framer[.]media/",
                "hxxps://consistent-play-637903[.]framer[.]app/",
                "hxxps://broader-presentations-469008[.]framer[.]app/"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 610,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 610,
                "newInLastHour": 19,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"853ce6e1ed15c20ee25bf205cd7d67a83b6c73a8d1c5053cd4dba2b77c1bf62e",
                " \"3237cae549a7bb71a86b555f95bfee6661352437874b055e7712a815bd147dad",
                " \"99817567029914797376e0754617877e1ed2bf24e3104510f6635061db5567b4",
                " \"0ae7229c0de30264bd54cc4c8066c7461552c0033fa7375c70bdceb3aa3d0b35",
                " \"77be2ee5c55a9c5f20b6522fb6fbd174465481ad60b5143c95ee31e16fccaf8e"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 86,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 86,
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
                "1[.]14[.]3[.]240",
                "1[.]15[.]118[.]23",
                "1[.]15[.]14[.]29",
                "1[.]157[.]99[.]66",
                "1[.]170[.]47[.]115"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 7119,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 7119,
                "newInLastHour": 7119,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]12[.]64[.]80",
                "1[.]162[.]249[.]243",
                "1[.]178[.]38[.]103",
                "1[.]194[.]219[.]159",
                "1[.]194[.]233[.]49"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 24080,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 24080,
                "newInLastHour": 24080,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://42[.]7[.]222[.]18:37688/bin[.]sh",
                "hxxp://60[.]23[.]207[.]99:51727/i",
                "hxxp://182[.]127[.]55[.]197:51884/bin[.]sh",
                "hxxp://123[.]172[.]81[.]219:43168/bin[.]sh",
                "hxxp://180[.]190[.]203[.]41:60344/i"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 30946,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 30946,
                "newInLastHour": 30718,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"195[.]24[.]237[.]79:8443\"",
                " \"110[.]42[.]67[.]208:8088\"",
                " \"pierrhp[.]cyou\"",
                " \"possuhb[.]cyou\"",
                " \"jailqjm[.]cyou\""
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
                "137[.]184[.]9[.]29",
                "162[.]243[.]103[.]246",
                "167[.]86[.]75[.]145",
                "34[.]204[.]119[.]63",
                "50[.]16[.]16[.]211"
            ]
        },
        "SSL Blacklist": {
            "description": "Malicious SSL certificates used by botnet C2 servers. Helps detect encrypted malware communications.",
            "website": "https://sslbl.abuse.ch/",
            "updateFrequency": "Daily",
            "iocCount": 8770,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 8770,
                "newInLastHour": 0,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "6b965254f0991e2c19ba17ce4ba589dd6c2f2fda",
                "bee0ff91f5800361e8e470af7c0a12f06b8fdcf8",
                "15640ab78d74431d1643b4eb62ae3d9153666ae8",
                "8c03dadea265fd3a083ceb6610d6a89411d635ea",
                "c5dd75a59ccf69e1112a3e5667d0975a242fbc4a"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 81277,
            "activeSources": 8,
            "criticalAlerts": 33594,
            "activeCampaigns": 218
        },
        "topThreats": [
            {
                "category": "Botnet",
                "count": 30257,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Malware",
                "count": 24839,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "C2",
                "count": 8755,
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
                "name": " \"unknown\"",
                "count": 29852,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"hxxps://www[.]sgardenchild[.]com/\"",
                    " \"hxxp://165[.]154[.]224[.]129:8888/supershell/login/\"",
                    " \"130[.]12[.]182[.]91:80\""
                ]
            },
            {
                "name": "malware_download",
                "count": 24010,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxps://github[.]com/sahanmerkez-byte/tvler/raw/refs/heads/main/inattv[.]apk",
                    "hxxps://github[.]com/Selimkukucu12/sa/raw/8d10a82d3c39eec468fe168ed89d52af29ea3744/Chrome[.]apk",
                    "hxxps://github[.]com/karaaytac192-oss/sa/raw/refs/heads/main/foto[.]apk"
                ]
            },
            {
                "name": "CINS Threat List",
                "count": 15000,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]14[.]3[.]240",
                    "1[.]15[.]118[.]23",
                    "1[.]15[.]14[.]29"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1461,
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
                "count": 1371,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "9655effafe3c6c663b4e64c12e41c9495e4fdfee",
                    "f5ceb2552024990dc2a9057b8938c4a0c1ea9fe3",
                    "d8c4d1a95c17efd9c3d51ddcbe2010d5f1b0de14"
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
                "count": 604,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "d3d8dc6a9d41a817b319484d943d3c86be823650",
                    "ab3f93138fcf2dbaad6e32fe4a5e8c06ca499cfa",
                    "659e6830e2b4abbaacfd7a6b8b16637dbc5465e0"
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
                "count": 456,
                "types": [
                    "hash"
                ],
                "sampleIndicators": [
                    " \"7b0c7909fb060fe012799727776e56a27675a4e40b7cf826e439f5ccc29622a7",
                    " \"1b4a795fd219f9e446dc40c87ec74b16f1d35d0357ce118195a5fbc6afe558e3",
                    " \"e4cbc94d05cf68b17152711ab035bfb71e9d98e36b342ce45198d26f1d374e6a"
                ]
            },
            {
                "name": " \"unknown_stealer\"",
                "count": 371,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"zabaikalsk[.]logomebel[.]ru\"",
                    " \"walta[.]zergaw[.]et\"",
                    " \"yatagarasu1123[.]com\""
                ]
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious URLs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": "malware_download",
        "totalAttacksThisHour": 77241,
        "lastCalculated": "2026-01-14 18:36 IST"
    }
};
