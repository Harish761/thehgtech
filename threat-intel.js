// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-05-22T23:33:13.390364+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-05-22T23:33:13.042135+05:30",
    "lastUpdatedFormatted": "May 22, 2026 at 11:33 PM IST",
    "comparisonPeriod": "May 21 \u2013 May 22, 2026",
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
                "hxxps://suporte-inc[.]com/StHNI/",
                "hxxps://chrome-chrome-chrome-cn[.]com[.]cn/",
                "hxxps://atendimento-flow-sp-free[.]my[.]id/via5/",
                "hxxps://sontungmtpmaidinhnhe[.]pages[.]dev/help/contact/736194688276319",
                "hxxps://sontungmtpmaidinhnhe[.]pages[.]dev/help/contact/194269659855175"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 2647,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 2647,
                "newInLastHour": 60,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"b62c85bd2d6dee50ab46ab0691e4c8f6075b5ee4d4656a24324b5330b57e5674",
                " \"547986a43260eb299f13b1129f0e3ea244e60737b09a0d0cb51c2abd4bf7326d",
                " \"ae6a6bdcf684b40580e161d3225a2b83be4dad98678d14b8c4b295d00ab203a9",
                " \"45d0464a55298987781c2e1d4327aa2ce1ab77ad7ca9f58d85322f1e77a64966",
                " \"ea43c3de37ff0a0cc029e8503dd174b3c4c9e0baefe60dd180a84d57d95bd9dd"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1630,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1630,
                "newInLastHour": 32,
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
                "1[.]172[.]148[.]176",
                "1[.]176[.]118[.]246",
                "1[.]180[.]153[.]254",
                "1[.]180[.]183[.]158",
                "1[.]180[.]42[.]2"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 6035,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 6035,
                "newInLastHour": 6035,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]0[.]164[.]165",
                "1[.]116[.]61[.]217",
                "1[.]14[.]105[.]179",
                "1[.]15[.]103[.]109",
                "1[.]162[.]228[.]189"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 23631,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 23631,
                "newInLastHour": 23631,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://61[.]53[.]138[.]169:49416/i",
                "hxxp://125[.]47[.]107[.]31:46998/bin[.]sh",
                "hxxp://118[.]125[.]5[.]90:44717/i",
                "hxxp://196[.]189[.]68[.]239:49504/i",
                "hxxp://182[.]116[.]116[.]164:53607/bin[.]sh"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 3165,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 3165,
                "newInLastHour": 3125,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"www[.]danafilesbackup1[.]com\"",
                " \"www[.]danafilesbackup2[.]com\"",
                " \"www[.]danafilesbackup3[.]com\"",
                " \"www[.]danafiles[.]com\"",
                " \"phase-shiftbridge[.]christmas\""
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
            "iocCount": 9740,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 9740,
                "newInLastHour": 63,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "34a8dc4fb4f4b41fc7bbae738f988305739eb56a",
                "167ddfd671ef30c31528515389cfdd11d9251558",
                "3cf2e022211760871544ad891d3b3b698c5f8792",
                "0d5b0889c583e4da90b365b1d73959a9ea745a86",
                "53c0f0608e2d03a10eab7e3a98d1de6c4ff534e6"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 56933,
            "activeSources": 8,
            "criticalAlerts": 36835,
            "activeCampaigns": 248
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 27178,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "C2",
                "count": 9657,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 2898,
                "trend": "stable",
                "percentage": 2
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
                "percentage": 94
            },
            {
                "name": "Tech",
                "percentage": 5
            },
            {
                "name": "Finance",
                "percentage": 0
            }
        ],
        "campaigns": [
            {
                "name": "malware_download",
                "count": 23594,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://110[.]39[.]226[.]207:47931/i",
                    "hxxp://182[.]121[.]206[.]237:51898/i",
                    "hxxps://labdjang[.]asia/ca6dcb4d-a7bd-4116-80f4-992b542c3567/ton[.]ch"
                ]
            },
            {
                "name": "CINS Threat List",
                "count": 15000,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]172[.]148[.]176",
                    "1[.]176[.]118[.]246",
                    "1[.]180[.]153[.]254"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1598,
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
                "count": 1411,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"35[.]220[.]177[.]232:4343\"",
                    " \"46[.]20[.]109[.]225:8999\"",
                    " \"158[.]94[.]173[.]11:12345\""
                ]
            },
            {
                "name": "AsyncRAT",
                "count": 1410,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "167ddfd671ef30c31528515389cfdd11d9251558",
                    "d42a4a7e721a0503d81e3f47c72a0f93c53e4f2c",
                    "b08643668d383e55dd2698e1bcc34571c8dfcc6a"
                ]
            },
            {
                "name": " \"n/a",
                "count": 966,
                "types": [
                    "hash"
                ],
                "sampleIndicators": [
                    " \"ded59ec4522cc19e2ae926ba1938452f70d8739d687154b9150141dc79af294c",
                    " \"ac20be185f5e5d931516336e80d7c3fd3adda6519418877de50181acf6986873",
                    " \"ffdd7105679e62d8d5c7f22907d5ffe1ffbbe9b6374d957a1c3639f112f7778c"
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
                "count": 677,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "493f6dbb48806992e524df2a3a0fa0348cef243b",
                    "c47bcbcbe0b1c474542c7fdc233ec68ffb4dcf14",
                    "a08099ae4318bfc81af69fd382081262cc4e9487"
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
                "name": "Vidar",
                "count": 518,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "34a8dc4fb4f4b41fc7bbae738f988305739eb56a",
                    "cbcbab57af719e97174407cc1e97c57c3478d481",
                    "971333b66a8266c1bf37aba686b9b89fcd9a9e44"
                ]
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious URLs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": "malware_download",
        "totalAttacksThisHour": 48251,
        "lastCalculated": "2026-05-22 23:33 IST"
    }
};
