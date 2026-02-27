// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-02-27T18:50:13.140060+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-02-27T18:50:12.850154+05:30",
    "lastUpdatedFormatted": "Feb 27, 2026 at 06:50 PM IST",
    "comparisonPeriod": "Feb 26 \u2013 Feb 27, 2026",
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
                "hxxp://www[.]re11133[.]vercel[.]app/",
                "hxxps://admin2[.]ondoc[.]co[.]kr/vxgo4kiuum3baoChromepublicfari537[.]html?eta=3mail@a[.]b[.]c0",
                "hxxp://pub-8c1be1f2764c443096fe5ba20d7802b5[.]r2[.]dev/index[.]html",
                "hxxp://www[.]airbnb-demo-jade[.]vercel[.]app/",
                "hxxps://www[.]5mp[.]eu/fajlok2/email/index_www[.]5mp[.]eu_[.]html"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 779,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 779,
                "newInLastHour": 101,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"3d345d56967d4027ee9d2b297f2f9be9a4d0c0fdf2e82239f40b3250af41066d",
                " \"9ba8dee5043176d0f9a0eba7b3f25a8156280cfb5862e0899f63798efed61143",
                " \"d0325940ec6f08e4dc556b4d79ed5aeb1f15f65dfb58e836c8703830452ff003",
                " \"5dcb1b91f204f55fa6e385913ff7cde95f0b7c0e40c2808540c1cd8db94442a1",
                " \"7ee339b6c14a2ec2ae0e18892e8cca216fffdd9bbf1f4701ea144d0efea265c3"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1534,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1534,
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
                "1[.]11[.]132[.]194",
                "1[.]15[.]94[.]7",
                "1[.]170[.]61[.]110",
                "1[.]176[.]134[.]241",
                "1[.]183[.]13[.]74"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 6089,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 6089,
                "newInLastHour": 6089,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]14[.]12[.]141",
                "1[.]15[.]136[.]28",
                "1[.]194[.]219[.]159",
                "1[.]204[.]166[.]3",
                "1[.]214[.]117[.]218"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 21884,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 21884,
                "newInLastHour": 21884,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://117[.]193[.]151[.]154:53267/i",
                "hxxp://42[.]231[.]93[.]16:51402/i",
                "hxxp://117[.]193[.]151[.]154:53267/bin[.]sh",
                "hxxp://42[.]224[.]77[.]64:45518/i",
                "hxxp://42[.]228[.]232[.]179:58652/i"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 804,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 804,
                "newInLastHour": 804,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"hxxp://77[.]90[.]185[.]66:6677/IRemotePanel\"",
                " \"nbcockj[.]com\"",
                " \"13[.]112[.]19[.]112:80\"",
                " \"222[.]80[.]156[.]9:8800\"",
                " \"199[.]101[.]111[.]153:3790\""
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
            "iocCount": 9099,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 9099,
                "newInLastHour": 32,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "56b86accd46807abc847389f1fcc4c73ef629841",
                "4034b813560128a7b5b72e65b9c58a15eeacf93c",
                "4c50e93c6a443306224c60f569205a7c44850295",
                "1489745b5c5f066b8beaec7181567513ca9eafd2",
                "d55e92f3ecb26b75c5ee55c29893b6dc3e9aa887"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 49293,
            "activeSources": 8,
            "criticalAlerts": 31646,
            "activeCampaigns": 216
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 22603,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "C2",
                "count": 9043,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 690,
                "trend": "stable",
                "percentage": 3
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
                "count": 21787,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://113[.]239[.]224[.]215:37988/i",
                    "hxxp://219[.]157[.]244[.]128:47483/i",
                    "hxxp://123[.]12[.]234[.]170:60130/i"
                ]
            },
            {
                "name": "CINS Threat List",
                "count": 15000,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]11[.]132[.]194",
                    "1[.]15[.]116[.]189",
                    "1[.]15[.]22[.]112"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1514,
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
                "count": 1381,
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
                "count": 623,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "1489745b5c5f066b8beaec7181567513ca9eafd2",
                    "a49ad700b0042b6d1e20153a6253bcc8ff17cff2",
                    "56dd33cfae66685bb9cf7f923d6e6752ff791705"
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
                "count": 360,
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
        "fastestRisingThreat": "SSH Attacks",
        "totalAttacksThisHour": 44233,
        "lastCalculated": "2026-02-27 18:50 IST"
    }
};
