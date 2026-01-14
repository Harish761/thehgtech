// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-01-14T14:14:20.149842+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-01-14T14:14:19.672822+05:30",
    "lastUpdatedFormatted": "Jan 14, 2026 at 02:14 PM IST",
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
                "hxxps://87468[.]xyz/m/",
                "hxxps://wwu[.]bnsa[.]click/",
                "hxxps://hong888[.]cyou/",
                "hxxp://hd54f[.]baollll2[.]cc/",
                "hxxps://robiloneso[.]cc/blc/"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 802,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 802,
                "newInLastHour": 37,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"a9748173bb602313b8b1fc6eb71d4036ad98ba25c19b360326dd74cfd71c6522",
                " \"5bd461c406516998a763704f0bc7992f79aab37fafeee8bc8ee4f0562493c4fa",
                " \"e3d5dec266eadd53bd507d450e556aafe6707e936f45f92b6e4a25b9fd571e75",
                " \"3633dddcaf46a323cbcad2d7dbc8e4a5a3405d0346eda8c916b1298d905fbbc3",
                " \"7b0c7909fb060fe012799727776e56a27675a4e40b7cf826e439f5ccc29622a7"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1461,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1461,
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
            "iocCount": 7308,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 7308,
                "newInLastHour": 7308,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]12[.]64[.]80",
                "1[.]162[.]249[.]243",
                "1[.]194[.]219[.]159",
                "1[.]194[.]233[.]49",
                "1[.]197[.]102[.]62"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 24010,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 24010,
                "newInLastHour": 24010,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxps://github[.]com/sahanmerkez-byte/tvler/raw/refs/heads/main/inattv[.]apk",
                "hxxps://github[.]com/Selimkukucu12/sa/raw/8d10a82d3c39eec468fe168ed89d52af29ea3744/Chrome[.]apk",
                "hxxps://github[.]com/karaaytac192-oss/sa/raw/refs/heads/main/foto[.]apk",
                "hxxps://github[.]com/3pmagneto/inattv/raw/refs/heads/main/inat18[.]apk",
                "hxxps://github[.]com/turkiyecanliyayinlari/sevkardesim/blob/main/inat%20Tv%20Video%20Oynaticisi[.]apk"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 30922,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 30922,
                "newInLastHour": 30694,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"hxxp://179[.]43[.]186[.]214:7889/zEk3\"",
                " \"xhsq[.]sa[.]com\"",
                " \"newpappernews211[.]ru[.]com\"",
                " \"46[.]62[.]237[.]55:443\"",
                " \"138[.]226[.]237[.]203:443\""
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
            "iocCount": 8777,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 8777,
                "newInLastHour": 2,
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
            "totalIndicators": 80874,
            "activeSources": 8,
            "criticalAlerts": 33523,
            "activeCampaigns": 218
        },
        "topThreats": [
            {
                "category": "Botnet",
                "count": 30282,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Malware",
                "count": 24770,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "C2",
                "count": 8753,
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
                "count": 29855,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"130[.]12[.]182[.]91:80\"",
                    " \"103[.]236[.]77[.]184:36349\"",
                    " \"142[.]93[.]173[.]58:443\""
                ]
            },
            {
                "name": "malware_download",
                "count": 23954,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://158[.]94[.]208[.]27/fernisafuckingddosbossfuckkrebsandshitlabs[.]sh",
                    "hxxp://158[.]94[.]208[.]27/react[.]sh[.]1",
                    "hxxp://158[.]94[.]208[.]27/react[.]sh"
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
                "count": 448,
                "types": [
                    "hash"
                ],
                "sampleIndicators": [
                    " \"df02ff2457c637cfbcca18a65d7195ec6d94d9c5953495676f75a97e30cfb963",
                    " \"00e95c15e6e37aea8bfa668f75a3847054b130246d7bc7ec715abc9b849bd7f7",
                    " \"0b36b403eff658e1b4dc8d563b449f97c0e982f416943353695d268922e320f9"
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
        "fastestRisingThreat": " \"unknown_stealer\"",
        "totalAttacksThisHour": 77356,
        "lastCalculated": "2026-01-14 14:14 IST"
    }
};
