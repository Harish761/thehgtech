// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-05-25T23:21:02.454590+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-05-25T23:21:02.146102+05:30",
    "lastUpdatedFormatted": "May 25, 2026 at 11:21 PM IST",
    "comparisonPeriod": "May 24 \u2013 May 25, 2026",
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
                "hxxps://acc[.]partner-credit-submission[.]com/__;!!bt8rzum9aw[.][.][.]",
                "hxxp://p25x[.]top/",
                "hxxp://www[.]h19x[.]top/",
                "hxxps://meditationsmoebel[.]info/PL-1466-160526/?u=14C1466&e=bogdan_wym%",
                "hxxp://www[.]83094[.]xyz/"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 478,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 478,
                "newInLastHour": 14,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"8e5b53e2af883ee9bb0b9b4c133db2b7c5fad9ce63234126cbdde40ea2798e02",
                " \"8e31d8ea218e372cf5c90398aa91c6d8bf77fda473a8d5d645f2812e846232b7",
                " \"aa61cd81aa7a31d87727827b667ceefc3a32a9f77c686cfe6d74098aee79a50e",
                " \"5f20b0430c5f395f2e2b81074a144deb09ad432f37ffeddf66024e83cae31104",
                " \"f58c66cfa44c6761e477c78a83e764138200e849e43fcf0ffc443fc87161696d"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1624,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1624,
                "newInLastHour": 20,
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
                "1[.]1[.]223[.]16",
                "1[.]162[.]93[.]188",
                "1[.]176[.]118[.]246",
                "1[.]177[.]162[.]4",
                "1[.]180[.]183[.]158"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 5912,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 5912,
                "newInLastHour": 5912,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]0[.]164[.]165",
                "1[.]12[.]51[.]198",
                "1[.]14[.]105[.]179",
                "1[.]14[.]70[.]12",
                "1[.]214[.]214[.]114"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 22084,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 22084,
                "newInLastHour": 22084,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://123[.]4[.]205[.]5:33029/i",
                "hxxp://42[.]233[.]106[.]199:49145/i",
                "hxxp://123[.]148[.]241[.]160:43983/bin[.]sh",
                "hxxps://cftxqt[.]lifemax[.]hu/1dd56c0c-f3fa-4171-8362-9ad55f3688e1",
                "hxxp://115[.]55[.]196[.]186:47541/i"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 3162,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 3162,
                "newInLastHour": 3158,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"cftxqt[.]lifemax[.]hu\"",
                " \"paaglx[.]lifemax[.]hu\"",
                " \"qlhsnt[.]lifealigned[.]hu\"",
                " \"fendqt[.]lifealigned[.]hu\"",
                " \"ci7uxmq7[.]proxy-harbor[.]digital\""
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
            "iocCount": 9727,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 9727,
                "newInLastHour": 0,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "37873872b4ee0938065d51f7571aaf09b5aad19c",
                "5a1971fb973e2175e2e76bbbc265794cb03ce094",
                "db67f6cdddbc0b12c1dcbd97099176ac883b27e1",
                "9364c682044d04a298c3fdbfa767aaea8fe8d58d",
                "a6822dd585e4b37d1d6196cb2dba01ac95830f0c"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 52385,
            "activeSources": 8,
            "criticalAlerts": 32323,
            "activeCampaigns": 211
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 22577,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "C2",
                "count": 9746,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 2825,
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
                "percentage": 95
            },
            {
                "name": "Tech",
                "percentage": 4
            },
            {
                "name": "Finance",
                "percentage": 0
            }
        ],
        "campaigns": [
            {
                "name": "malware_download",
                "count": 22053,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://42[.]228[.]42[.]239:41571/i",
                    "hxxps://kjvbjr[.]krokodilpince[.]hu/52e12495-eead-4dcf-93d8-2f7496f9bac2",
                    "hxxp://110[.]36[.]18[.]169:57003/i"
                ]
            },
            {
                "name": "CINS Threat List",
                "count": 15000,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]1[.]223[.]16",
                    "1[.]162[.]93[.]188",
                    "1[.]176[.]118[.]246"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1611,
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
                "count": 1449,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"45[.]67[.]230[.]81:443\"",
                    " \"194[.]58[.]76[.]12:443\"",
                    " \"194[.]58[.]126[.]182:443\""
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
                "count": 681,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "493f6dbb48806992e524df2a3a0fa0348cef243b",
                    "8a9c74049483847464da1ca3cf6f1f44e17a5f0f",
                    "c47bcbcbe0b1c474542c7fdc233ec68ffb4dcf14"
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
                "count": 549,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "37873872b4ee0938065d51f7571aaf09b5aad19c",
                    "42898c24435acf8ba2bf7fa0428f28a64d49be69",
                    "42f80c30ad7ca9a272453baabf7c7c8857b5970a"
                ]
            },
            {
                "name": "OffLoader",
                "count": 419,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "9364c682044d04a298c3fdbfa767aaea8fe8d58d",
                    "b6f3f71f5af8c7ead92da17e9c952910ce4466cd",
                    "c6bb2e2f4e409954b0be643121db126c99c768b4"
                ]
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious URLs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": "malware_download",
        "totalAttacksThisHour": 46493,
        "lastCalculated": "2026-05-25 23:21 IST"
    }
};
