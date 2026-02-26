// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-02-26T14:30:52.987023+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-02-26T14:30:52.697215+05:30",
    "lastUpdatedFormatted": "Feb 26, 2026 at 02:30 PM IST",
    "comparisonPeriod": "Feb 25 \u2013 Feb 26, 2026",
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
                "hxxps://xxyzt[.]my[.]id/pengembaliandana[.]xxyzt[.]my[.]id/20-26New/",
                "hxxps://web-hard-ware-wallet-trezoor-doc[.]typedream[.]app/",
                "hxxp://1[.]bmt-whatsapp[.]com[.]cn/",
                "hxxps://clientesantander-ios[.]com/",
                "hxxp://www[.]899887v[.]weebly[.]com/"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 766,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 766,
                "newInLastHour": 73,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"85cffbf528025f8a8af7935e9e1ef285a9da23cb8f454b78143ab2960d339a15",
                " \"fbb3cf98340fa0de6309b42d3fc3233eed239f16c27b4e5038c1bd535f977870",
                " \"50816dc19ce03958d2421afc686909b61add7c49c5a66cd14d8061167aab3663",
                " \"f1b6c40b2803bf119cc84cb355229547e7949b2a29969f442690253d1eb52c0c",
                " \"89e349692b0e1bce9f3b2b94b5c94a9116340eb3dcd50b9e0e27da789d130e6b"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1476,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1476,
                "newInLastHour": 5,
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
                "1[.]10[.]247[.]16",
                "1[.]10[.]247[.]213",
                "1[.]11[.]132[.]194",
                "1[.]15[.]116[.]189",
                "1[.]15[.]22[.]112"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 4480,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 4480,
                "newInLastHour": 4480,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]15[.]77[.]170",
                "1[.]204[.]166[.]3",
                "1[.]214[.]117[.]218",
                "1[.]233[.]104[.]29",
                "1[.]241[.]174[.]81"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 21708,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 21708,
                "newInLastHour": 21708,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://24[.]88[.]242[.]17:51579/i",
                "hxxp://115[.]56[.]152[.]220:50651/i",
                "hxxp://42[.]234[.]233[.]136:44854/bin[.]sh",
                "hxxp://219[.]155[.]231[.]206:47178/bin[.]sh",
                "hxxp://219[.]157[.]220[.]151:54067/bin[.]sh"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 845,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 845,
                "newInLastHour": 845,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"lrlifetime[.]com\"",
                " \"lppm[.]umus[.]ac[.]id\"",
                " \"45[.]83[.]31[.]248:443\"",
                " \"196[.]65[.]216[.]170:2222\"",
                " \"199[.]101[.]111[.]120:3790\""
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
                "178[.]62[.]3[.]223",
                "34[.]204[.]119[.]63"
            ]
        },
        "SSL Blacklist": {
            "description": "Malicious SSL certificates used by botnet C2 servers. Helps detect encrypted malware communications.",
            "website": "https://sslbl.abuse.ch/",
            "updateFrequency": "Daily",
            "iocCount": 9087,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 9087,
                "newInLastHour": 39,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "e866a188684d5e7c272d4edcafcd8a317bee557a",
                "2eabf1c3027277a463e299054d25d40885912cf4",
                "f7891d2133cc57f48db8d7a50197e00d3170625f",
                "4f616f6f2a46ced5bd55cc6d05289878ec88cc3f",
                "dfd7a01bf7d72cfa649be0966395cb80ad5af1d3"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 49132,
            "activeSources": 8,
            "criticalAlerts": 31505,
            "activeCampaigns": 206
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 22476,
                "trend": "stable",
                "percentage": 1
            },
            {
                "category": "C2",
                "count": 9029,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 609,
                "trend": "stable",
                "percentage": -1
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
                "count": 21623,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://115[.]48[.]163[.]31:59931/i",
                    "hxxp://173[.]28[.]103[.]46:60067/bin[.]sh",
                    "hxxp://42[.]59[.]237[.]82:47910/i"
                ]
            },
            {
                "name": "CINS Threat List",
                "count": 15000,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]10[.]247[.]16",
                    "1[.]10[.]247[.]213",
                    "1[.]11[.]132[.]194"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1471,
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
                "count": 1382,
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
                "count": 625,
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
                "name": "Vidar",
                "count": 364,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "a9376a357aebf80af91a289f9fcb916ee1c04384",
                    "2fe17ef982c9dcbecd93baa4c77df1bf7c8d19b0",
                    "66afb632b2131a12c4ee5896e88bc485662077eb"
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
            },
            {
                "name": "Gozi",
                "count": 349,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "61d991d7063e5e7470daa3059357f8282e680bb7",
                    "68b4fc7da837c64332b9f019adaef4c7038ec85d",
                    "e0f7072057c5deeb21c598673740debc7f6eb8a1"
                ]
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious URLs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": "malware_download",
        "totalAttacksThisHour": 42453,
        "lastCalculated": "2026-02-26 14:30 IST"
    }
};
