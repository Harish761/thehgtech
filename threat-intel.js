// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-06-03T01:20:21.586627+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-06-03T01:20:21.363967+05:30",
    "lastUpdatedFormatted": "Jun 03, 2026 at 01:20 AM IST",
    "comparisonPeriod": "Jun 02 \u2013 Jun 03, 2026",
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
                "hxxp://galeripemenangshopee012[.]blogspot[.]com/",
                "hxxp://galeri-promo2021[.]blogspot[.]com/",
                "hxxps://bafkreiegbqbcfv3bye424hhdqirq2wqiftdkjywtxlivtmx4zyhzkotcta[.]ipfs[.]dweb[.]link/",
                "hxxp://t-mobile[.]rxomdi[.]top/pay",
                "hxxp://t-mobile[.]cvnghb[.]top/pay"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 672,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 672,
                "newInLastHour": 95,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"813aeb7a3cac0a916501d370ad1f350a56b4bb36835f52b3cc92d624da728674",
                " \"7c1275b93737536b8eb0901801bcbb042d2ef9b47c310cbfedff8916679f5c6b",
                " \"df038e02242237d76887422b36cfbccdda497949ff254a717b8ddf82cebdfde3",
                " \"665598166efa71674b561fc02ca1d6e0ebfddbaf7d2b75008b71e540a5ea4158",
                " \"ff28966fd236b12f88c3a6aef0e56e467259560a5aff0edce5a3c9823767bbb8"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1563,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1563,
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
            "iocCount": 0,
            "iocDataUrl": "https://thehgtech.com/ioc-data/cins-army.json",
            "stats": {
                "total": 0,
                "newInLastHour": 0,
                "lastUpdate": "just now"
            },
            "types": [],
            "sampleIndicators": []
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 6163,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 6163,
                "newInLastHour": 6163,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]0[.]164[.]165",
                "1[.]14[.]176[.]139",
                "1[.]14[.]180[.]163",
                "1[.]14[.]192[.]95",
                "1[.]15[.]22[.]22"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 20315,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 20315,
                "newInLastHour": 20315,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://91[.]92[.]242[.]236/files-129312398/files/file_0326a71c1857de0a[.]exe",
                "hxxp://91[.]92[.]242[.]236/files-129312398/files/file_6bac2fb194aa2b36[.]exe",
                "hxxps://wwiiiss[.]oss-ap-northeast-1[.]aliyuncs[.]com/soggou_ofice_word[.]zip",
                "hxxps://alioss[.]cdn-go[.]com[.]cn/sogoupinyin_x64_v1[.]1_win[.]zip",
                "hxxp://42[.]235[.]139[.]35:45670/bin[.]sh"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 3751,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 3751,
                "newInLastHour": 3744,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"45[.]198[.]224[.]19:4321\"",
                " \"195[.]246[.]230[.]99:7443\"",
                " \"155[.]103[.]70[.]198:13407\"",
                " \"155[.]103[.]71[.]115:13408\"",
                " \"my-electrum[.]at\""
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
            "iocCount": 9709,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 9709,
                "newInLastHour": 1,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "d345baf20bd0de3b5004bd6d8d5b72cac4e7d04c",
                "c977d795cf06f3bdb9e88ec4700aebe3d3bbaf08",
                "7e1b7861379d0043ae42bac6a060e5a230bd2576",
                "b733673f2c221400c4e14bb6cea0f528a5dff337",
                "3b8b88139678299948bf1ccc9c0fbb2b4cb5e861"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 35630,
            "activeSources": 7,
            "criticalAlerts": 30541,
            "activeCampaigns": 209
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 20733,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "C2",
                "count": 9808,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 2867,
                "trend": "stable",
                "percentage": -1
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
                "percentage": 93
            },
            {
                "name": "Tech",
                "percentage": 6
            },
            {
                "name": "Finance",
                "percentage": 0
            }
        ],
        "campaigns": [
            {
                "name": "malware_download",
                "count": 20016,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxps://kuyquso[.]akharinbama[.]ir/9ebf6775-3b11-4bb4-88d2-f072482839bc",
                    "hxxps://ps10z3qz[.]eutoor[.]com/?ublib=8aa7fe04-5688-4b9d-8abe-bb2ac9914a29",
                    "hxxp://42[.]227[.]243[.]1:59062/bin[.]sh"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1597,
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
                "count": 1416,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "6a998d33a87c7b36c2be68ed5c1c63929c0d6be4",
                    "167ddfd671ef30c31528515389cfdd11d9251558",
                    "d42a4a7e721a0503d81e3f47c72a0f93c53e4f2c"
                ]
            },
            {
                "name": " \"win.cobalt_strike\"",
                "count": 1371,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"113[.]44[.]136[.]127:8087\"",
                    " \"64[.]177[.]70[.]33:443\"",
                    " \"130[.]94[.]43[.]198:443\""
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
                "count": 683,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "8e733b34e95a7b98ada40292b8d35e9040016e65",
                    "9f0d33c1eaa7afd41009d0ec594c0a408d2df123",
                    "493f6dbb48806992e524df2a3a0fa0348cef243b"
                ]
            },
            {
                "name": "Vidar",
                "count": 567,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "c977d795cf06f3bdb9e88ec4700aebe3d3bbaf08",
                    "7e1b7861379d0043ae42bac6a060e5a230bd2576",
                    "b733673f2c221400c4e14bb6cea0f528a5dff337"
                ]
            },
            {
                "name": "LummaStealer",
                "count": 554,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "272e76f605bec1da1ea719df8dc0e7269de7d44e",
                    "ab7f083d77dc2b1b71c0aec9a417e0a5a036a5f9",
                    "7ce02a4df627573696141e40970ef60e246f9f3f"
                ]
            },
            {
                "name": "OffLoader",
                "count": 422,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "7bba8eb1da43142534144a1aaf30b1be8a5ed134",
                    "3190ff29e738f3a056a97190ae61386c21eddefd",
                    "e9a78163613f7608cc9236ba4cb47ab2861c580e"
                ]
            },
            {
                "name": "ConnectWise",
                "count": 366,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "1fe4d1c9b7106f25e606894cb6a64f69c4862b29",
                    "a9f5a1cdf5c8168262c2e6cf9351698e156eeebd",
                    "f3b02175ff6d2bbf0149b4a450acdf2a9f2897c8"
                ]
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious URLs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": "malware_download",
        "totalAttacksThisHour": 30623,
        "lastCalculated": "2026-06-03 01:20 IST"
    }
};
