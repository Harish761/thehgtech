// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-06-07T10:21:40.449193+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-06-07T10:21:40.132009+05:30",
    "lastUpdatedFormatted": "Jun 07, 2026 at 10:21 AM IST",
    "comparisonPeriod": "Jun 06 \u2013 Jun 07, 2026",
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
                "hxxps://roblox[.]et/communities/9110392943/BaddiesZ",
                "hxxps://services-publics[.]grupozasacr[.]com/infospage[.]php",
                "hxxps://services-publics[.]grupozasacr[.]com/",
                "hxxps://www[.]roblox[.]com[.]bi/users/576024904941/profile",
                "hxxps://www[.]robiox[.]com[.]gr/users/6491303489/profile/"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 875,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 875,
                "newInLastHour": 21,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"3aa1ef439f4906a332b0b036ac439cced5248e2417fa0727a90df2fbd9e0862f",
                " \"598ebcfbc35afadc14ebbf24d7367948f679686a8d833ef2bbbf91f9c1769930",
                " \"2d3e9dbc20fa661f284a9c41383608bd750d3f36369f91d26ccdf300e54c2bd2",
                " \"5e4a4c44bec29b3c9c1297078e3275f65f2f11161a8ef39bcc2de9ca7c42b5e4",
                " \"a7569c18cfd60888f9b1051f99f8c648ca1bdc134e2f702fe936aa1778c178e6"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1642,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1642,
                "newInLastHour": 1203,
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
                "1[.]0[.]203[.]197",
                "1[.]119[.]194[.]226",
                "1[.]141[.]159[.]176",
                "1[.]15[.]35[.]79",
                "1[.]164[.]107[.]152"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 4681,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 4681,
                "newInLastHour": 4681,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]0[.]164[.]165",
                "1[.]116[.]110[.]170",
                "1[.]14[.]192[.]95",
                "1[.]201[.]123[.]182",
                "1[.]202[.]220[.]94"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 18466,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 18466,
                "newInLastHour": 18466,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://115[.]55[.]87[.]182:42337/i",
                "hxxp://112[.]248[.]188[.]117:46906/bin[.]sh",
                "hxxp://42[.]52[.]201[.]30:43700/bin[.]sh",
                "hxxp://115[.]48[.]162[.]135:48606/bin[.]sh",
                "hxxp://119[.]179[.]10[.]230:40234/bin[.]sh"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 3365,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 3365,
                "newInLastHour": 3357,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"jrnxmey[.]one1xbet[.]casino\"",
                " \"one1xbet[.]casino\"",
                " \"154[.]198[.]49[.]31:8080\"",
                " \"154[.]198[.]49[.]31:443\"",
                " \"167[.]71[.]233[.]187:8080\""
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
            "iocCount": 9866,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 9866,
                "newInLastHour": 122,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "a01bd4e7cb1064b5af288d0fbc48a06314f4c9af",
                "e88df6fa5cbae7002d552047f52594c7dbe46baa",
                "1826e244059546f2728d9dca86494828c95d0313",
                "44d317f1bdfcf7670d288c912cecd0737bc4cc1b",
                "ae590545961e96de860ea7434c0e8c69b924de6f"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 48753,
            "activeSources": 8,
            "criticalAlerts": 29631,
            "activeCampaigns": 238
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 19900,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "C2",
                "count": 9731,
                "trend": "stable",
                "percentage": -1
            },
            {
                "category": "Botnet",
                "count": 3024,
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
                "percentage": 96
            },
            {
                "name": "Tech",
                "percentage": 3
            },
            {
                "name": "Finance",
                "percentage": 0
            }
        ],
        "campaigns": [
            {
                "name": "malware_download",
                "count": 18984,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://110[.]36[.]27[.]209:50507/bin[.]sh",
                    "hxxps://hetljl[.]jamjahani[.]football/04ae5ae6-5230-45ce-aa7a-33fc9e1f6444",
                    "hxxp://219[.]155[.]200[.]114:37484/i"
                ]
            },
            {
                "name": "CINS Threat List",
                "count": 15000,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]0[.]203[.]197",
                    "1[.]10[.]185[.]224",
                    "1[.]11[.]228[.]4"
                ]
            },
            {
                "name": "AsyncRAT",
                "count": 1414,
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
                "count": 1383,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"156[.]245[.]235[.]51:8080\"",
                    " \"156[.]245[.]235[.]51:443\"",
                    " \"1314180598-d1gxufiq1h[.]ap-guangzhou[.]tencentscf[.]com\""
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
                "count": 680,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "ae590545961e96de860ea7434c0e8c69b924de6f",
                    "28c3106cd1cec9a5dfec7f2ba3b0dd7e70784429",
                    "bf26c599e3f5ea932f7b8c592138d42d49837713"
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
                "count": 539,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "44d317f1bdfcf7670d288c912cecd0737bc4cc1b",
                    "7cf0a3e58ceb76c0839efdd4adf64dd64fa6f6f2",
                    "90e3298b9df7e2c9ba08cc32cab77dee09be4f30"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 439,
                "types": [
                    "ip-range"
                ],
                "sampleIndicators": [
                    "2.58.56.0/24",
                    "2.59.152.0/24",
                    "2.59.153.0/24"
                ]
            },
            {
                "name": "OffLoader",
                "count": 410,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "fb65cb3929bf5df8ed6de3cb5b2c6b87b3f6e3d9",
                    "7bba8eb1da43142534144a1aaf30b1be8a5ed134",
                    "3190ff29e738f3a056a97190ae61386c21eddefd"
                ]
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious URLs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": "Spamhaus DROP List",
        "totalAttacksThisHour": 43155,
        "lastCalculated": "2026-06-07 10:21 IST"
    }
};
