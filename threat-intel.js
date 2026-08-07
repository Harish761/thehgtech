// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-08-07T06:24:54.289150+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-08-07T06:24:53.947879+05:30",
    "lastUpdatedFormatted": "Aug 07, 2026 at 06:24 AM IST",
    "comparisonPeriod": "Aug 06 \u2013 Aug 07, 2026",
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
                "hxxps://youpic[.]id68143[.]click/account/verify/oczlmzpyan6we",
                "hxxps://www[.]roblox[.]com[.]bi/users/865192277060/profile",
                "hxxps://goo[.]su/iW6Gf2",
                "hxxps://luderlawe[.]com/smooth/zTzSgqqazyfNwxWXNaGAwEO7qhkxYH64xPOp?-m=bJv0VSF2",
                "hxxp://sp13ct-vardik-biz-kormel-pravsel[.]pages[.]dev/"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 1164,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 1164,
                "newInLastHour": 321,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"f4dc07d863c39fac212ae9c43b6eb84286a44306e2d26372617bcef641bbc693",
                " \"7661b8408aa9677341bf46a27561c9f6d3967ad2e72ea5eab4b665f283f9b3fd",
                " \"f949ba49ba8db0c49c0e22fa8c6f84ba7da8530b2bcc00c0df0f9cb17c69486f",
                " \"032f7dd5999ef63685afcf7040a3cde9fbf010efa507fdfe3f17d7630ce128de",
                " \"611c02afa2bc725622b7c5154f69b4d5b4f409a46f93ba67dbddcb224d90efc6"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1681,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1681,
                "newInLastHour": 19,
                "lastUpdate": "just now"
            },
            "types": [
                "ip-range"
            ],
            "sampleIndicators": [
                "1.10.16.0/20",
                "1.19.0.0/16",
                "1.32.128.0/18",
                "2.26.75.0/24",
                "2.27.5.0/24"
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
                "1[.]10[.]185[.]51",
                "1[.]119[.]194[.]226",
                "1[.]14[.]150[.]102",
                "1[.]15[.]14[.]29",
                "1[.]159[.]103[.]245"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 9807,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 9807,
                "newInLastHour": 9807,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]0[.]164[.]165",
                "1[.]116[.]61[.]217",
                "1[.]162[.]197[.]67",
                "1[.]162[.]247[.]182",
                "1[.]20[.]175[.]122"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 14624,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 14624,
                "newInLastHour": 14624,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://85[.]137[.]245[.]141:9001/1[.]exe",
                "hxxp://85[.]137[.]245[.]141:9001/2[.]exe",
                "hxxp://94[.]154[.]43[.]44/bins/bin[.]armv4eb",
                "hxxp://94[.]154[.]43[.]44/bins/bin[.]armv6l",
                "hxxp://94[.]154[.]43[.]44/bins/bin[.]x86_64"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 4589,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 4589,
                "newInLastHour": 4550,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"yoga-bern[.]ch\"",
                " \"shezaciszepiekna[.]pl\"",
                " \"soilvaporextraction[.]com\"",
                " \"newyorkjetcharter[.]com\"",
                " \"sfg-biasca[.]ch\""
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
            "iocCount": 10329,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 10329,
                "newInLastHour": 222,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "ece1b6bdc8e62d35188aab274bdb0be28d84c43f",
                "a9ebd28ce7e4ac020e6d263e228b8547e1914bfa",
                "448bf34943609cd5dcadf4b1dc58512df0718e57",
                "28db945e3beaf15a6f6d7fdf2dfc06a5f0319fc3",
                "22bedd3b6ea141fbe9b50681baa395909e014ad0"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 47414,
            "activeSources": 8,
            "criticalAlerts": 25950,
            "activeCampaigns": 233
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 15823,
                "trend": "stable",
                "percentage": -5
            },
            {
                "category": "C2",
                "count": 10127,
                "trend": "stable",
                "percentage": -1
            },
            {
                "category": "Botnet",
                "count": 3564,
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
            },
            {
                "name": "Government",
                "percentage": 0
            }
        ],
        "campaigns": [
            {
                "name": "CINS Threat List",
                "count": 15000,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]10[.]185[.]51",
                    "1[.]119[.]194[.]226",
                    "1[.]14[.]150[.]102"
                ]
            },
            {
                "name": "malware_download",
                "count": 14624,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://85[.]137[.]245[.]141:9001/1[.]exe",
                    "hxxp://85[.]137[.]245[.]141:9001/2[.]exe",
                    "hxxp://94[.]154[.]43[.]44/bins/bin[.]armv4eb"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1662,
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
                "count": 1419,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "6647f9e4a2e273d7b78ff02be7114b0e9e2a719f",
                    "4e5b7b186ad51a93d4e1ba0e2b5ca006b62571be",
                    "c31650da58712771ad83fd5c6cef97905a255cc5"
                ]
            },
            {
                "name": " \"win.cobalt_strike\"",
                "count": 1369,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"151[.]242[.]125[.]190:9527\"",
                    " \"hxxp://58[.]218[.]215[.]67:443/cloud-site/header-and-footer/shopping-cart[.]png\"",
                    " \"hxxp://118[.]112[.]10[.]10:443/common/advertisement/Fixed/float/smile[.]svg\""
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
                    "ece1b6bdc8e62d35188aab274bdb0be28d84c43f",
                    "b14379b3743c37a26289499aca921c99998649f1",
                    "4c67471be88dd63db2466621fe9e2a2d848f5b79"
                ]
            },
            {
                "name": "Vidar",
                "count": 625,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "a9ebd28ce7e4ac020e6d263e228b8547e1914bfa",
                    "30ae51f106a573be769968e15c0a6f56a2878a16",
                    "97dd1d6a2bc5769af6e0a7999bfaf2aeaf5452a1"
                ]
            },
            {
                "name": " \"js.clearfake\"",
                "count": 565,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"odds-portall[.]com\"",
                    " \"ipl--betting[.]com\"",
                    " \"iyyutr[.]valley-open-mri[.]com\""
                ]
            },
            {
                "name": "LummaStealer",
                "count": 556,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "501d817bb1780acfe5e47082c43472bda8068e4d",
                    "2beac2ee8b2fe7625d4de9f5381d37f200965f91",
                    "a46841d623a191366909b24375bee0eceea23bbe"
                ]
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious IPs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": " \"js.clearfake\"",
        "totalAttacksThisHour": 44848,
        "lastCalculated": "2026-08-07 06:24 IST"
    }
};
