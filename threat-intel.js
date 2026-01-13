// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-01-13T18:36:50.301193+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-01-13T18:36:49.819828+05:30",
    "lastUpdatedFormatted": "Jan 13, 2026 at 06:36 PM IST",
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
                "hxxp://365[.]505-606-707-808-909[.]canvbot[.]cn/betx/",
                "hxxp://netfimarketing[.]com/tde30e272t540c475fa9057c118s9ec03551[.]html",
                "hxxps://ipfs[.]io/ipfs/bafybeibpmuu4kmzgpvuboaeuqzia6jivzzxipx2cbruzvozskr2apfh42e",
                "hxxps://emailupdatechecking[.]weebly[.]com/",
                "hxxps://www[.]roblox[.]com[.]ml/users/7400871224/profile"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 887,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 887,
                "newInLastHour": 39,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"8de4bc010c80965c39a6b7551154ff1478bb868080d2083f875197cf2a35af4e",
                " \"306b34a4faadebaf1454419c54a981ed93a538b466aa0a220f1f3f9f228da85c",
                " \"ea55f218dbc396c487b6219e4939db16208597a4e8a80d7416f9d6ac6ad09d7b",
                " \"e6264e23ab6c57f4c3afde927733cdaf959061a5f0fb89d5802d83d047fb11e9",
                " \"c95af17c862d3291c788d29a08711fde97a73e1a1c65a5578f7cb31199072c0c"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1460,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1460,
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
                "1[.]15[.]14[.]29",
                "1[.]15[.]51[.]236",
                "1[.]170[.]47[.]115",
                "1[.]172[.]195[.]228",
                "1[.]172[.]200[.]46"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 6189,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 6189,
                "newInLastHour": 6189,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]12[.]251[.]79",
                "1[.]12[.]64[.]80",
                "1[.]159[.]145[.]162",
                "1[.]194[.]219[.]159",
                "1[.]194[.]233[.]49"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 23855,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 23855,
                "newInLastHour": 23855,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://130[.]12[.]180[.]64/bins/z",
                "hxxp://r61-7-209-88[.]static[.]phangnga[.]cloud/arm6",
                "hxxp://r61-7-209-88[.]static[.]phangnga[.]cloud/arm5",
                "hxxp://r61-7-209-88[.]static[.]phangnga[.]cloud/mpsl",
                "hxxp://r61-7-209-88[.]static[.]phangnga[.]cloud/run[.]sh"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 30730,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 30730,
                "newInLastHour": 30352,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"185[.]196[.]41[.]95:181\"",
                " \"110[.]42[.]67[.]208:8443\"",
                " \"hxxps://meta-check[.]t3[.]storage[.]dev/Verify-me-to-continue-ID-75099[.]html\"",
                " \"hxxps://t[.]me/tech_trending_daily\"",
                " \"hxxps://t[.]me/contributingversion\""
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
            "iocCount": 8773,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 8773,
                "newInLastHour": 28,
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
            "totalIndicators": 80897,
            "activeSources": 8,
            "criticalAlerts": 33415,
            "activeCampaigns": 225
        },
        "topThreats": [
            {
                "category": "Botnet",
                "count": 30264,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Malware",
                "count": 24689,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "C2",
                "count": 8726,
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
                "count": 29838,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"209[.]74[.]85[.]219:3333\"",
                    " \"93[.]95[.]227[.]249:7443\"",
                    " \"hxxps://creditreview[.]sg/\""
                ]
            },
            {
                "name": "malware_download",
                "count": 23764,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxps://cdn[.]jsdelivr[.]net/gh/browse-fb-clock/folders-tree/dash",
                    "hxxps://github[.]com/cayse3206-art/katara/raw/refs/heads/main/Chrome[.]apk",
                    "hxxps://github[.]com/Chromup/Chrome/raw/refs/heads/main/Chrome[.]apk"
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
                "count": 1368,
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
                "name": " \"Mirai",
                "count": 619,
                "types": [
                    "hash"
                ],
                "sampleIndicators": [
                    " \"4142821aac3ac715e8e10b2f55bafa71b9a7413466bd8fbf0a8384c93a881290",
                    " \"d32bf186fb090964c9843695db00485035fb001d71734eda57b3812d81770cc4",
                    " \"aadb60b065347f839c2cfe3be804c81a5a45fe2019761a0de30d61c1f5eb5f76"
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
        "fastestRisingThreat": "malware_download",
        "totalAttacksThisHour": 75769,
        "lastCalculated": "2026-01-13 18:36 IST"
    }
};
