// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-06-04T23:57:35.989507+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-06-04T23:57:35.779670+05:30",
    "lastUpdatedFormatted": "Jun 04, 2026 at 11:57 PM IST",
    "comparisonPeriod": "Jun 03 \u2013 Jun 04, 2026",
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
                "hxxps://phylo-8[.]github[.]io/Amazon-github[.]io/",
                "hxxps://phylo-8[.]github[.]io/Amazon-github[.]io",
                "hxxp://freelanceconnect[.]id/",
                "hxxps://www[.]d666f999[.]shop/",
                "hxxp://meta-stack[.]pages[.]dev/appeals/submit-appeal-form/return"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 531,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 531,
                "newInLastHour": 71,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"94b9522a2dd130419b9880df1e91814b556955fb25b7aba294758edfec77bc42",
                " \"dc65030a0e285fb075eaa4767a03a97e1dfcd08490d6af9d59b928b9062023b3",
                " \"0e79cbc30304f3be634964d17f79b109dc03eb17a7f75bdb80b44eee267a3af2",
                " \"1e36dbcdc7271bd1ab59a6c691abf66e0b66a3aa0422eb3462d413a9a7629f05",
                " \"23c5de99e65ef11c0cd4523896665985d3aeb67f5af576671e41cc888ee968fe"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1636,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1636,
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
            "iocCount": 7568,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 7568,
                "newInLastHour": 7568,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]0[.]164[.]165",
                "1[.]116[.]61[.]217",
                "1[.]162[.]226[.]19",
                "1[.]197[.]102[.]62",
                "1[.]20[.]175[.]122"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 19827,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 19827,
                "newInLastHour": 19827,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://bubblekip[.]info/",
                "hxxps://jswnqpn[.]enfejarbazii[.]bet/edcfc2a2-82bd-490a-97d8-f35c94a4a599",
                "hxxp://xzxni-135-134-92-71[.]run[.]pinggy-free[.]link/run[.]sh",
                "hxxp://203[.]177[.]28[.]149:59488/bin[.]sh",
                "hxxps://science4u[.]co[.]in/3[.]exe"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 3633,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 3633,
                "newInLastHour": 3588,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"151[.]243[.]109[.]130:9672\"",
                " \"207[.]154[.]230[.]229:8080\"",
                " \"207[.]154[.]230[.]229:443\"",
                " \"154[.]88[.]98[.]33:8884\"",
                " \"154[.]88[.]98[.]35:8884\""
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
            "iocCount": 9747,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 9747,
                "newInLastHour": 17,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "28c3106cd1cec9a5dfec7f2ba3b0dd7e70784429",
                "7162dcab7590a4a6080e97d04f49cf0939db039c",
                "e42d598b3e6edb6b1899c5a72d03de435a82e4a3",
                "ff83fb186112903cb2e39578e268e1937cea9317",
                "f9f3f5ba3c746db5200118359cc83768d457e849"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 35651,
            "activeSources": 7,
            "criticalAlerts": 30131,
            "activeCampaigns": 230
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 20311,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "C2",
                "count": 9820,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 3238,
                "trend": "down",
                "percentage": -14
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
                "count": 19767,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://39[.]67[.]212[.]225:56697/bin[.]sh",
                    "hxxp://219[.]155[.]200[.]53:60030/bin[.]sh",
                    "hxxp://123[.]14[.]98[.]224:35285/i"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1642,
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
                "count": 1402,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"156[.]234[.]24[.]48:8709\"",
                    " \"120[.]26[.]208[.]96:80\"",
                    " \"106[.]12[.]20[.]75:443\""
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
                "count": 684,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "bf26c599e3f5ea932f7b8c592138d42d49837713",
                    "5b27051d67aa2cce9314596003b68709a13fc003",
                    "8e733b34e95a7b98ada40292b8d35e9040016e65"
                ]
            },
            {
                "name": "Vidar",
                "count": 570,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "564b4902e12a0412bc9df5369f51cd6d273d5974",
                    "8d3af387e977c9f7725d1b7815d94d19855f1bfb",
                    "a4533c805837a80effd9ff29809a4b3bdd0de131"
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
                    "fb65cb3929bf5df8ed6de3cb5b2c6b87b3f6e3d9",
                    "3190ff29e738f3a056a97190ae61386c21eddefd",
                    "e9a78163613f7608cc9236ba4cb47ab2861c580e"
                ]
            },
            {
                "name": "ConnectWise",
                "count": 364,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "25cec5dfbffe744af691b5fe996769cc84244f78",
                    "dfa296408a06fbf413bbc9920a64f28bd7e87c2a",
                    "e0c5ff6a90a60b1d91c2abbdc0f119f2d4b44cc4"
                ]
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious URLs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": "malware_download",
        "totalAttacksThisHour": 31376,
        "lastCalculated": "2026-06-04 23:57 IST"
    }
};
