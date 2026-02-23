// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-02-23T22:43:29.476367+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-02-23T22:43:29.185271+05:30",
    "lastUpdatedFormatted": "Feb 23, 2026 at 10:43 PM IST",
    "comparisonPeriod": "Feb 22 \u2013 Feb 23, 2026",
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
                "hxxps://mypost[.]ycaskp[.]help/au/service/22/",
                "hxxp://www[.]bduedu[.]in/pay-fees/",
                "hxxps://geminibalance[.]520131401[.]xyz/",
                "hxxps://robloxr[.]com[.]es/users/1140465374/profile",
                "hxxps://www[.]robiox[.]com[.]py/users/225612695322/profile"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 1378,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 1378,
                "newInLastHour": 123,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"ba977e14aa3aa2b2bb40cfc3c548f9feb2ace0b3ea51932bf1d6bb8fad6d2d5d",
                " \"589490c7fc948a715e4be9191969df77b9efe5833a15a73ddf57287e2e01c080",
                " \"be2db69fbde37ce4b0dbd51a85cb18f78a1bfda70ef2f4ed7dcde75051f3659b",
                " \"bcd012f5f3d9e670affe7309a862a08408bd86d5926668458c4894f2795c610d",
                " \"4fd4d2dc42ab3b24c5494f3a0bd4e96d0b19ed85e6b8ca9ea5150a1a570fa16c"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1480,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1480,
                "newInLastHour": 2,
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
                "1[.]10[.]211[.]66",
                "1[.]1[.]176[.]58",
                "1[.]11[.]132[.]194",
                "1[.]15[.]116[.]189",
                "1[.]15[.]22[.]112"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 8100,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 8100,
                "newInLastHour": 8100,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]15[.]136[.]28",
                "1[.]165[.]130[.]37",
                "1[.]194[.]219[.]159",
                "1[.]214[.]117[.]218",
                "1[.]220[.]64[.]218"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 21557,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 21557,
                "newInLastHour": 21557,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://218[.]57[.]36[.]202:58264/bin[.]sh",
                "hxxp://110[.]37[.]61[.]110:41604/i",
                "hxxp://110[.]37[.]61[.]110:41604/bin[.]sh",
                "hxxp://182[.]127[.]29[.]85:47362/i",
                "hxxp://42[.]235[.]52[.]245:45446/i"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 1530,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 1530,
                "newInLastHour": 1353,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"central-navigation-hub[.]thenorthernvertex[.]com\"",
                " \"matildestileinnovazione[.]it\"",
                " \"forestfrond[.]wildfern[.]in[.]net\"",
                " \"central-monitoring-hub[.]clearcrest[.]ru\"",
                " \"hxxps://support-acrotab[.]de/de/\""
            ]
        },
        "Feodo Tracker": {
            "description": "Botnet C2 server IPs from Feodo Tracker. Tracks Dridex, Emotet, TrickBot, QakBot, and BazarLoader.",
            "website": "https://feodotracker.abuse.ch/",
            "updateFrequency": "Hourly",
            "iocCount": 2,
            "iocDataUrl": "https://thehgtech.com/ioc-data/feodo-tracker.json",
            "stats": {
                "total": 2,
                "newInLastHour": 2,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "162[.]243[.]103[.]246",
                "178[.]62[.]3[.]223"
            ]
        },
        "SSL Blacklist": {
            "description": "Malicious SSL certificates used by botnet C2 servers. Helps detect encrypted malware communications.",
            "website": "https://sslbl.abuse.ch/",
            "updateFrequency": "Daily",
            "iocCount": 8996,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 8996,
                "newInLastHour": 11,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "56dd33cfae66685bb9cf7f923d6e6752ff791705",
                "2568edbf429d4745fe7ec67848063d60b82823d8",
                "68f995179c2f05cf7f1723b0daafa249306b6724",
                "82553854835061d99abd869bf6240619af7177f7",
                "6daaae0552ed5067a6b2e15b06b10cde6f3a7c8c"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 50517,
            "activeSources": 8,
            "criticalAlerts": 31808,
            "activeCampaigns": 219
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 22794,
                "trend": "stable",
                "percentage": 1
            },
            {
                "category": "C2",
                "count": 9014,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 1412,
                "trend": "up",
                "percentage": 12
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
                "count": 21459,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxps://github[.]com/crminfos/png/raw/refs/heads/main/ifmrosh[.]zip",
                    "hxxps://github[.]com/crminfos/yos/raw/refs/heads/main/Factura-pendiente-01182026[.]zip",
                    "hxxps://github[.]com/crminfos/yos/raw/refs/heads/main/Document%238QzzExFsPNOwL45Ri9[.]zip"
                ]
            },
            {
                "name": "CINS Threat List",
                "count": 15000,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]10[.]211[.]66",
                    "1[.]1[.]176[.]58",
                    "1[.]11[.]132[.]194"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1479,
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
                "count": 1383,
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
                    "c96e7c1cbfdcff64e90557779edd3af8a1b6a6c4",
                    "682a5d662e691f728b8279c889f9d70dafc8bbc4",
                    "313aa465da1c887d1189e74be08d3e79306192c2"
                ]
            },
            {
                "name": " \"js.iclickfix\"",
                "count": 570,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"bennettarbitration[.]com\"",
                    " \"eventocontaduriafce[.]viajandoalcielo[.]com\"",
                    " \"gconfisur[.]com\""
                ]
            },
            {
                "name": " \"Mirai",
                "count": 541,
                "types": [
                    "hash"
                ],
                "sampleIndicators": [
                    " \"3526ed9ae1ae70a01c0e8e1d8cbcf1011607b2b1a4390db2a56cd9d02fe4a48d",
                    " \"88487949fa9c363fb6f4ccd8b739ca61df58afafe8968598cd43549ca8dd58e9",
                    " \"8aa1ec9c31ca74fd25ab0aa581faee30f5340a1eb2291e5670c37a028133eb4f"
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
                "name": " \"n/a",
                "count": 493,
                "types": [
                    "hash"
                ],
                "sampleIndicators": [
                    " \"d81df7fb144d48b80492ee597ba5b1806e8bf6b90b5788739c07657a4c463442",
                    " \"ec6f3c57c707b2605372c5365708f5c21fd1d3a61482a63fe36d516600bf771b",
                    " \"0e8fc9abf1965fc8e870f5a752f1af31b9e9cdef0684779bf037dfacd24f9126"
                ]
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious URLs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": "SSH Attacks",
        "totalAttacksThisHour": 46448,
        "lastCalculated": "2026-02-23 22:43 IST"
    }
};
