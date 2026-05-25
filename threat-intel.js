// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-05-26T01:40:03.725416+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-05-26T01:40:03.419547+05:30",
    "lastUpdatedFormatted": "May 26, 2026 at 01:40 AM IST",
    "comparisonPeriod": "May 25 \u2013 May 26, 2026",
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
            "iocCount": 473,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 473,
                "newInLastHour": 16,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"b14212857fe74349571dc653447dd59ff5938a768a65f90a3d4d653b669f8c83",
                " \"0492b2bc8b7abffd4c3017299bd9ff3c1d687bb558f25a1975e66f683ffbabea",
                " \"79f3bf637493dd999c0add52ac4920b82a57da781355c375d807e409b4ac1dcf",
                " \"3bad577daf532110598df89dd26132ede4c7d23523beb50c073c63dfffa145e5",
                " \"0409bda380f83c7110d4eba0f6df787d56fd99d6cf196a26e0dbf610e4b226f0"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1590,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1590,
                "newInLastHour": 7,
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
                "1[.]177[.]63[.]19",
                "1[.]180[.]153[.]254",
                "1[.]180[.]183[.]158"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 5831,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 5831,
                "newInLastHour": 5831,
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
            "iocCount": 22132,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 22132,
                "newInLastHour": 22132,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://115[.]48[.]128[.]180:48881/bin[.]sh",
                "hxxps://iejzed[.]liltkereskedohaz[.]hu/71130d2d-1299-4a5b-a840-5ccf59ac8ff2",
                "hxxp://194[.]32[.]248[.]126/updates/svchost[.]exe",
                "hxxp://194[.]32[.]248[.]126/updates/svchost_laptop[.]exe",
                "hxxp://194[.]32[.]248[.]126/updates/Windows%20Update%20Elevated%20Service[.]exe"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 3205,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 3205,
                "newInLastHour": 3201,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"iejzed[.]liltkereskedohaz[.]hu\"",
                " \"zawifk[.]liltkereskedohaz[.]hu\"",
                " \"91[.]92[.]242[.]64:6606\"",
                " \"54[.]196[.]247[.]235:8082\"",
                " \"5[.]101[.]83[.]143:7312\""
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
            "iocCount": 9759,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 9759,
                "newInLastHour": 41,
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
            "totalIndicators": 52380,
            "activeSources": 8,
            "criticalAlerts": 32294,
            "activeCampaigns": 212
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 22589,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "C2",
                "count": 9705,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 2826,
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
                "count": 22084,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://123[.]4[.]205[.]5:33029/i",
                    "hxxp://42[.]233[.]106[.]199:49145/i",
                    "hxxp://123[.]148[.]241[.]160:43983/bin[.]sh"
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
                "count": 1624,
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
                "count": 1450,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"194[.]58[.]93[.]75:443\"",
                    " \"45[.]67[.]230[.]81:443\"",
                    " \"194[.]58[.]76[.]12:443\""
                ]
            },
            {
                "name": "AsyncRAT",
                "count": 1412,
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
                "count": 678,
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
                "count": 552,
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
                "count": 540,
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
                "count": 415,
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
        "totalAttacksThisHour": 46533,
        "lastCalculated": "2026-05-26 01:40 IST"
    }
};
