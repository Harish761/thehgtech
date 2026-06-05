// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-06-05T10:12:50.051650+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-06-05T10:12:49.840992+05:30",
    "lastUpdatedFormatted": "Jun 05, 2026 at 10:12 AM IST",
    "comparisonPeriod": "Jun 04 \u2013 Jun 05, 2026",
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
                "hxxp://www[.]gov-parkingsii[.]cyou/com",
                "hxxps://t-mobile[.]sdxwuo[.]top/pay",
                "hxxps://t-mobile[.]bwcdkz[.]top/pay",
                "hxxps://t-mobile[.]rokpbm[.]top/pay",
                "hxxp://t-mobile[.]therqz[.]top/pay/"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 563,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 563,
                "newInLastHour": 41,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"972c93d7cec662851b13b110d38fb7f70cd87fd1d2ad22799f5b073dedf3c968",
                " \"1003203312e41803b4db093a637f8832195d841d76066a4887ad988ea3b6343c",
                " \"4016f6e4fe141cb8144bef18ab52dc4fa8bd6ffddc1d06d4d0e41fd6afcc9402",
                " \"9c70d387014907d3149f841f3e591e3f3b7b95aacb2af785e9c6f74a2c296fef",
                " \"4d182ced3c48ebddd6dd2994509cdf0bb246546db6520b967b941607f6f27978"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1610,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1610,
                "newInLastHour": 1,
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
            "iocCount": 7608,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 7608,
                "newInLastHour": 7608,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]0[.]164[.]165",
                "1[.]197[.]102[.]62",
                "1[.]2[.]220[.]103",
                "1[.]20[.]175[.]122",
                "1[.]20[.]186[.]134"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 18844,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 18844,
                "newInLastHour": 18844,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://182[.]119[.]29[.]164:59367/i",
                "hxxp://219[.]157[.]38[.]224:58000/bin[.]sh",
                "hxxp://125[.]43[.]225[.]33:40947/i",
                "hxxp://42[.]58[.]3[.]220:52533/i",
                "hxxp://182[.]119[.]29[.]164:59367/bin[.]sh"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 3691,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 3691,
                "newInLastHour": 3619,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"vobyslb[.]hilo[.]casino\"",
                " \"hilo[.]casino\"",
                " \"119[.]45[.]166[.]6:8080\"",
                " \"154[.]88[.]96[.]34:8884\"",
                " \"119[.]45[.]166[.]6:80\""
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
            "iocCount": 9764,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 9764,
                "newInLastHour": 3,
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
            "totalIndicators": 35846,
            "activeSources": 7,
            "criticalAlerts": 30285,
            "activeCampaigns": 232
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 20451,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "C2",
                "count": 9834,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 3237,
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
                "count": 19868,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://42[.]177[.]108[.]48:35970/bin[.]sh",
                    "hxxp://219[.]155[.]83[.]19:52758/bin[.]sh",
                    "hxxp://115[.]48[.]27[.]89:34153/i"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1641,
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
                "count": 1415,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "6a998d33a87c7b36c2be68ed5c1c63929c0d6be4",
                    "d42a4a7e721a0503d81e3f47c72a0f93c53e4f2c",
                    "b08643668d383e55dd2698e1bcc34571c8dfcc6a"
                ]
            },
            {
                "name": " \"win.cobalt_strike\"",
                "count": 1409,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"107[.]150[.]105[.]91:8443\"",
                    " \"124[.]222[.]155[.]113:8443\"",
                    " \"119[.]45[.]166[.]6:443\""
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
                "count": 686,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "28c3106cd1cec9a5dfec7f2ba3b0dd7e70784429",
                    "bf26c599e3f5ea932f7b8c592138d42d49837713",
                    "5b27051d67aa2cce9314596003b68709a13fc003"
                ]
            },
            {
                "name": "Vidar",
                "count": 573,
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
                "count": 423,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "fb65cb3929bf5df8ed6de3cb5b2c6b87b3f6e3d9",
                    "7bba8eb1da43142534144a1aaf30b1be8a5ed134",
                    "3190ff29e738f3a056a97190ae61386c21eddefd"
                ]
            },
            {
                "name": "ConnectWise",
                "count": 367,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "25cec5dfbffe744af691b5fe996769cc84244f78",
                    "1fe4d1c9b7106f25e606894cb6a64f69c4862b29",
                    "a9f5a1cdf5c8168262c2e6cf9351698e156eeebd"
                ]
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious URLs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": " \"js.clearfake\"",
        "totalAttacksThisHour": 30421,
        "lastCalculated": "2026-06-05 10:12 IST"
    }
};
