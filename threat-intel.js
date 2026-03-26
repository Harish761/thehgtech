// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-03-26T08:52:21.503121+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-03-26T08:52:21.213243+05:30",
    "lastUpdatedFormatted": "Mar 26, 2026 at 08:52 AM IST",
    "comparisonPeriod": "Mar 25 \u2013 Mar 26, 2026",
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
                "hxxp://icloud-id[.]support/script/login_2026/index[.]php",
                "hxxp://pemenang2021[.]blogspot[.]com/",
                "hxxp://shopee5477[.]blogspot[.]com/",
                "hxxp://faseehs169-shaikh[.]github[.]io/NetflixClone",
                "hxxp://ptshopee-69[.]blogspot[.]com/"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 806,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 806,
                "newInLastHour": 28,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"5bf94a9b23acf9041bbd9c66babee1fb117df0165bb9bbe5511981bddc3cb75a",
                " \"710ed04620dd7b4f5b21e05c22e3353fbbb2eaacd247666a6238b88c286308aa",
                " \"087d8ad89e86a067625085c072653ed9b1501818a1da6e2e15c12f9ad2353be2",
                " \"d29deee2e8bec85d2fcaec427f17d677f7de4f8387e00566b0b45ff81157bd31",
                " \"6aa919de55ae969183350533fed88642e1ccff428a63ae6664c5ea4b4cf9204a"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1550,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1550,
                "newInLastHour": 3,
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
                "1[.]15[.]118[.]23",
                "1[.]192[.]179[.]163",
                "1[.]192[.]46[.]208",
                "1[.]193[.]63[.]84",
                "1[.]197[.]228[.]180"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 5528,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 5528,
                "newInLastHour": 5528,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]116[.]123[.]72",
                "1[.]15[.]33[.]90",
                "1[.]189[.]21[.]20",
                "1[.]192[.]189[.]251",
                "1[.]192[.]202[.]92"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 20489,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 20489,
                "newInLastHour": 20489,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://115[.]55[.]192[.]186:52587/i",
                "hxxps://dev4space[.]oakcore[.]in[.]net/verification[.]google",
                "hxxps://dev3field[.]oakcore[.]in[.]net/verification[.]google",
                "hxxps://dev2outer[.]oakcore[.]in[.]net/verification[.]google",
                "hxxp://219[.]157[.]154[.]32:56737/i"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 1839,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 1839,
                "newInLastHour": 1825,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"dev4space[.]oakcore[.]in[.]net\"",
                " \"dev3field[.]oakcore[.]in[.]net\"",
                " \"bj88games[.]global\"",
                " \"mever[.]duckdns[.]org\"",
                " \"dev2outer[.]oakcore[.]in[.]net\""
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
            "iocCount": 9376,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 9376,
                "newInLastHour": 9,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "3892e7a2c8bd6e4755701c9d1d6af34795a75b5a",
                "f05a2876d9129ec057ecaedfac9cc37ebe2138ad",
                "1faf3762722a11f385dc5d9d4eb22a51594e83f5",
                "460e554589554e5dbaeb2c6f4c6aaf93e31da41a",
                "d59f81b85fcc5e75eddaea46f9fedaa93aa45e6f"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 49972,
            "activeSources": 8,
            "criticalAlerts": 31271,
            "activeCampaigns": 224
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 21908,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "C2",
                "count": 9363,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 1294,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Phishing",
                "count": 303,
                "trend": "stable",
                "percentage": 0
            }
        ],
        "targetedSectors": [
            {
                "name": "General",
                "percentage": 90
            },
            {
                "name": "Tech",
                "percentage": 9
            },
            {
                "name": "Finance",
                "percentage": 0
            }
        ],
        "campaigns": [
            {
                "name": "malware_download",
                "count": 21065,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://115[.]48[.]147[.]84:44518/i",
                    "hxxp://158[.]94[.]208[.]168/files/7180287117/Gb7grdV[.]exe",
                    "hxxps://colotone[.]fablegrove[.]in[.]net/verification[.]google"
                ]
            },
            {
                "name": "CINS Threat List",
                "count": 15000,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]14[.]3[.]240",
                    "1[.]15[.]118[.]23",
                    "1[.]183[.]160[.]11"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1551,
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
                "count": 1393,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "7aa15098c33be8eea90c57dba4443afba38bce40",
                    "97ab9a73024e527aed8a20bbb1c573a21e35cc06",
                    "51f20540cd77caa36702bb359c8c06949aecea02"
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
                "count": 649,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "3892e7a2c8bd6e4755701c9d1d6af34795a75b5a",
                    "38539fcee6bf1d363e1c8a3866913d7d8ee3d102",
                    "c61b06bc00a58330fcb94e0e18094f5128adf283"
                ]
            },
            {
                "name": "LummaStealer",
                "count": 549,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "f05a2876d9129ec057ecaedfac9cc37ebe2138ad",
                    "460e554589554e5dbaeb2c6f4c6aaf93e31da41a",
                    "7f065e37b5c0112620f7c97d3cd761e626e0faf4"
                ]
            },
            {
                "name": "Vidar",
                "count": 450,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "9413d052ea89e6c879e577b62e5a55436f55dd8d",
                    "60fb7400edece2b09a17663e06efdb9badde8e2e",
                    "afa1d275776f12ada15518a6ec15bf89f8678a18"
                ]
            },
            {
                "name": " \"js.clearfake\"",
                "count": 410,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"colotone[.]fablegrove[.]in[.]net\"",
                    " \"dyn-coreen[.]fablegrove[.]in[.]net\"",
                    " \"wolfreel[.]fablegrove[.]in[.]net\""
                ]
            },
            {
                "name": "OffLoader",
                "count": 364,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "d59f81b85fcc5e75eddaea46f9fedaa93aa45e6f",
                    "0b0dc82e3c43d6527d2e2d4e19195817d9731387",
                    "ad794607ab5dbb098a4c5bc5d87e1b3bcd659d74"
                ]
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious URLs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": "SSH Attacks",
        "totalAttacksThisHour": 43187,
        "lastCalculated": "2026-03-26 08:52 IST"
    }
};
