// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-08-21T02:09:27.467166+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-08-21T02:09:27.120786+05:30",
    "lastUpdatedFormatted": "Aug 21, 2026 at 02:09 AM IST",
    "comparisonPeriod": "Aug 20 \u2013 Aug 21, 2026",
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
                "hxxps://www[.]agingenieria[.]com[.]pe/wp-content/logs/newsletter/www[.]made-in-china[.]com/index[.]html",
                "hxxps://urlz[.]li/b12f2603",
                "hxxps://dccrsorgia[.]github[.]io/gov[.]in[.]crs[.]verifyCertificate[.]id-TMJK8JJy4RuII5JYuqLhWA8HRA/",
                "hxxps://dccrsorgia[.]github[.]io/gov[.]in[.]crs[.]verifyCertificate[.]id-TMJK8JJy4RuII5JYuqLhWA8HRA",
                "hxxps://aidenpiearce[.]github[.]io/Javascript-amazon"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 1220,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 1220,
                "newInLastHour": 32,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"d634856eecdf9465000e435cb8e8f8b57896d69086ed67ddd9a1a990cefc3b50",
                " \"d3c414ea55ff51e39378044996c77cf65c1c2403b8ad232bb8b5c8ee7cadd393",
                " \"de24c79b1a0383bc6afcb7224f273d84207d948c86e84ce4709cdfc5b82a71fb",
                " \"99ed5274e7d4abd06e4ce3ee1b893b0d2ed2082f62712fe6fe8e350013f63a5c",
                " \"cc411feb860ad470aa97c18ff8169ac2b14537a2e1ac3f29c742096aa1b48b4e"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1639,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1639,
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
                "1[.]119[.]158[.]77",
                "1[.]140[.]210[.]242",
                "1[.]180[.]190[.]250",
                "1[.]188[.]101[.]117",
                "1[.]189[.]84[.]37"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 5073,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 5073,
                "newInLastHour": 5073,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]0[.]164[.]165",
                "1[.]10[.]222[.]205",
                "1[.]2[.]189[.]132",
                "1[.]20[.]150[.]200",
                "1[.]209[.]110[.]147"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 16899,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 16899,
                "newInLastHour": 16899,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://182[.]120[.]13[.]196:55125/bin[.]sh",
                "hxxp://115[.]57[.]212[.]220:54561/i",
                "hxxp://140[.]237[.]7[.]157:41787/i",
                "hxxp://115[.]57[.]212[.]220:54561/bin[.]sh",
                "hxxp://42[.]230[.]209[.]22:37617/i"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 6987,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 6987,
                "newInLastHour": 6748,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"hxxps://www[.]accademiadeiromani[.]it/\"",
                " \"iniziativadalasalps[.]ch\"",
                " \"129[.]211[.]11[.]213:22\"",
                " \"129[.]211[.]11[.]213:5003\"",
                " \"118[.]25[.]37[.]47:8080\""
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
            "iocCount": 10487,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 10487,
                "newInLastHour": 7,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "7f73eeb03e7df441484d4610c5a0c3a02f166989",
                "3992dd5edcdf2ce5d143f933e2657640e00a58d4",
                "e0ffdffb5d9bf9216ea5e70d4fe2bae919f5a6ca",
                "e1fadee899789d8e802b8b88dcf67e4cae82ccf1",
                "0ad6076cb27bcdd5dd26fe56c022f4ab61ea00be"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 52623,
            "activeSources": 8,
            "criticalAlerts": 28686,
            "activeCampaigns": 249
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 18208,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "C2",
                "count": 10478,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 4482,
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
            }
        ],
        "campaigns": [
            {
                "name": "malware_download",
                "count": 16891,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://27[.]207[.]216[.]59:45025/i",
                    "hxxp://41[.]201[.]226[.]25:57585/i",
                    "hxxp://115[.]51[.]4[.]93:56227/i"
                ]
            },
            {
                "name": "CINS Threat List",
                "count": 15000,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]119[.]194[.]226",
                    "1[.]15[.]14[.]29",
                    "1[.]159[.]70[.]231"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1697,
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
                "name": " \"js.iclickfix\"",
                "count": 1528,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"ksr-racingparts[.]com\"",
                    " \"yourcapital[.]co[.]za\"",
                    " \"zeilberger-hartl[.]de\""
                ]
            },
            {
                "name": "AsyncRAT",
                "count": 1440,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "7f44d36f1f6bd375ba4e4a7866328a76047ce498",
                    "f351f7dbe9c583f75758b39cd307f5359d110c73",
                    "7bf78d44f61a05e919479a1cf3e0ce158a50a0c6"
                ]
            },
            {
                "name": " \"win.cobalt_strike\"",
                "count": 1355,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"129[.]211[.]11[.]213:8888\"",
                    " \"129[.]211[.]11[.]213:443\"",
                    " \"124[.]221[.]47[.]107:22\""
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
                "name": "Vidar",
                "count": 724,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "e1fadee899789d8e802b8b88dcf67e4cae82ccf1",
                    "732c7efa7d624c30b074e78df6595f54fde9188d",
                    "9ba597b7a850fe598927a226f6ab2efd3050ff95"
                ]
            },
            {
                "name": "QuasarRAT",
                "count": 696,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "b364395fee8c2e4c9eaf9a2531f6f7ac7bf8e4ae",
                    "ece1b6bdc8e62d35188aab274bdb0be28d84c43f",
                    "b14379b3743c37a26289499aca921c99998649f1"
                ]
            },
            {
                "name": " \"unknown\"",
                "count": 618,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"hxxps://psicopress[.]com/\"",
                    " \"106[.]54[.]41[.]209:10001\"",
                    " \"106[.]54[.]41[.]209:8080\""
                ]
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious URLs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": " \"js.clearfake\"",
        "totalAttacksThisHour": 44065,
        "lastCalculated": "2026-08-21 02:09 IST"
    }
};
