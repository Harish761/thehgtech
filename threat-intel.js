// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-01-13T10:19:27.754028+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-01-13T10:19:27.273630+05:30",
    "lastUpdatedFormatted": "Jan 13, 2026 at 10:19 AM IST",
    "comparisonPeriod": "Jan 12 \u2013 Jan 13, 2026",
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
                "hxxps://palleymgmt[.]github[.]io/Rogers/",
                "hxxps://www[.]roblox[.]com[.]ht/games/920587237/Adopt-Me?privateServerLinkCode=320213181280705132671550573457",
                "hxxps://www[.]6hcp99[.]cc/",
                "hxxps://ipfs[.]io/ipfs/bafkreienkrhshyfwpc4z5wknym5fsq7gv32drrrr2mvj4y4nhb5s6fkvli?eta=thj2356",
                "hxxps://promosenlineacreddenciales[.]onrender[.]com/"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 1012,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 1012,
                "newInLastHour": 13,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"51e101f3adb3b0f4767771e8a0b1936867d2c5cd928e94eec8c6f52fc9eef2a2",
                " \"609d7a7fba9a3b6d8be2206f3717454c083f32a43bf6cd3206c7197ae7f2e396",
                " \"1c777dcfb1e61753edae3ba0fa17e9ad1b3a445ab196b173a0a1bc1f15b0954f",
                " \"392f6b46f45bad21bf7e18de9d62f46651516f7e1b89e2581a1e4e7f71df141b",
                " \"5d92de8b0bfb73af84a9b9e253a13581e5b9834028e8c14555ddddf83c8e709e"
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
                "1[.]15[.]51[.]236",
                "1[.]170[.]47[.]115",
                "1[.]172[.]195[.]228",
                "1[.]172[.]200[.]46",
                "1[.]176[.]134[.]253"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 5918,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 5918,
                "newInLastHour": 5918,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]12[.]251[.]79",
                "1[.]12[.]64[.]80",
                "1[.]145[.]90[.]220",
                "1[.]159[.]145[.]162",
                "1[.]194[.]219[.]159"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 23696,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 23696,
                "newInLastHour": 23696,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://175[.]148[.]156[.]34:34931/i",
                "hxxp://117[.]241[.]93[.]90:38504/bin[.]sh",
                "hxxp://106[.]40[.]242[.]67:59642/bin[.]sh",
                "hxxp://61[.]53[.]74[.]10:52199/bin[.]sh",
                "hxxp://61[.]53[.]74[.]10:52199/i"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 30667,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 30667,
                "newInLastHour": 30517,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"0425a339a1173e2847d22912b14d53b1fd5a7f85b736c8c320ca3a2c76fd883e\"",
                " \"52f36c4f989a78b5a4f4ae050b0de9e1\"",
                " \"1614a8ab1ed65c8cb57c4a12238d924b\"",
                " \"c9e112e07d4778ca572fce94c0077236b38d2bc1\"",
                " \"028a8554ecac010f61460f61f39fe6a0\""
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
                "137[.]184[.]9[.]29",
                "162[.]243[.]103[.]246",
                "167[.]86[.]75[.]145",
                "50[.]16[.]16[.]211"
            ]
        },
        "SSL Blacklist": {
            "description": "Malicious SSL certificates used by botnet C2 servers. Helps detect encrypted malware communications.",
            "website": "https://sslbl.abuse.ch/",
            "updateFrequency": "Daily",
            "iocCount": 8767,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 8767,
                "newInLastHour": 0,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "8c03dadea265fd3a083ceb6610d6a89411d635ea",
                "c5dd75a59ccf69e1112a3e5667d0975a242fbc4a",
                "9655effafe3c6c663b4e64c12e41c9495e4fdfee",
                "f5ceb2552024990dc2a9057b8938c4a0c1ea9fe3",
                "5e6df62e5a421a7fa1c932f0a12ea21ad308f5d9"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 80680,
            "activeSources": 8,
            "criticalAlerts": 33482,
            "activeCampaigns": 204
        },
        "topThreats": [
            {
                "category": "Botnet",
                "count": 30224,
                "trend": "up",
                "percentage": 7079
            },
            {
                "category": "Malware",
                "count": 24731,
                "trend": "stable",
                "percentage": -2
            },
            {
                "category": "C2",
                "count": 8751,
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
                "count": 29826,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"172[.]183[.]215[.]25:3333\"",
                    " \"217[.]154[.]9[.]81:3333\"",
                    " \"45[.]63[.]43[.]238:443\""
                ]
            },
            {
                "name": "malware_download",
                "count": 23664,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://42[.]53[.]131[.]168:57861/bin[.]sh",
                    "hxxp://125[.]40[.]2[.]154:51614/i",
                    "hxxp://116[.]138[.]242[.]61:55590/i"
                ]
            },
            {
                "name": "CINS Threat List",
                "count": 15000,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]15[.]51[.]236",
                    "1[.]170[.]47[.]115",
                    "1[.]172[.]195[.]228"
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
                "name": " \"Mirai",
                "count": 762,
                "types": [
                    "hash"
                ],
                "sampleIndicators": [
                    " \"cc830474d003e4c72b0e70d62acc544cadba12fc322200a889e0c751ed2493b2",
                    " \"bde8f13fae659528196f1f8e322b5e06602ec726968d101100fad5d6029b5986",
                    " \"771b24ae004fa65a9df902619cca3f898abaae95961f8ea812198ecf8e4a049b"
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
        "fastestRisingThreat": " \"win.global\"",
        "totalAttacksThisHour": 75448,
        "lastCalculated": "2026-01-13 10:19 IST"
    }
};
