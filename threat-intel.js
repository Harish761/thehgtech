// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-03-25T11:06:14.973594+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-03-25T11:06:14.682593+05:30",
    "lastUpdatedFormatted": "Mar 25, 2026 at 11:06 AM IST",
    "comparisonPeriod": "Mar 24 \u2013 Mar 25, 2026",
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
                "hxxps://guv[.]uxq[.]mybluehost[.]me/website_72a929c3/input/login[.]php",
                "hxxps://u[.]to/YVx3Ig",
                "hxxps://utsav568[.]github[.]io/github[.]io/",
                "hxxps://bhagirath0111[.]github[.]io/Amazon1/",
                "hxxp://eemansiddique[.]github[.]io/sales-force-static-website"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 796,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 796,
                "newInLastHour": 30,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"c333b6b2480c9215d30e6af45a013183d9626cf60ff95a61116cf71b45970374",
                " \"06b2cdc266c03715e8451f8a627752578a3c697f3e5fead325f05196742790ad",
                " \"76e93f078788bea53d954030785191a2cb75326fbb1d0caa9b91b9bfdc3b7572",
                " \"16f6c84618daaf1aefc1f3f2fae49d3559fd0306b53f053aefd36c39c150ef72",
                " \"04f5fcefc87a68013bf72af04c69f5dfc4944df9d2e990191ea06dcea0ae8ee2"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1538,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1538,
                "newInLastHour": 6,
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
                "1[.]0[.]253[.]217",
                "1[.]10[.]222[.]77",
                "1[.]15[.]118[.]23",
                "1[.]15[.]15[.]189",
                "1[.]183[.]160[.]11"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 4140,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 4140,
                "newInLastHour": 4140,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]163[.]193[.]34",
                "1[.]189[.]21[.]20",
                "1[.]192[.]189[.]251",
                "1[.]192[.]202[.]92",
                "1[.]197[.]102[.]62"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 20623,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 20623,
                "newInLastHour": 20623,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://59[.]88[.]10[.]109:54668/bin[.]sh",
                "hxxp://103[.]102[.]25[.]50:35778/i",
                "hxxps://ext4point[.]stratagraphic[.]in[.]net/verification[.]google",
                "hxxp://117[.]199[.]164[.]58:43401/bin[.]sh",
                "hxxp://117[.]26[.]226[.]221:52208/i"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 1185,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 1185,
                "newInLastHour": 1174,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"ext4point[.]stratagraphic[.]in[.]net\"",
                " \"ext3data[.]stratagraphic[.]in[.]net\"",
                " \"ext2proxy[.]stratagraphic[.]in[.]net\"",
                " \"ext1infra[.]stratagraphic[.]in[.]net\"",
                " \"svc4sat[.]rhyolitenodehub[.]in[.]net\""
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
            "iocCount": 9387,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 9387,
                "newInLastHour": 22,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "f0558a6d99572f494ab316c7dc3e1f08076908f8",
                "60fb7400edece2b09a17663e06efdb9badde8e2e",
                "af122b6c757acb41574bdcb6e0b1bcd01bb2e483",
                "03dda1240ed1938576cbd9d3f6c51f778db895d1",
                "2fe45c6b4dfa42ec5f86a81a81932869b0c16da6"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 48705,
            "activeSources": 8,
            "criticalAlerts": 30692,
            "activeCampaigns": 228
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 21349,
                "trend": "stable",
                "percentage": -5
            },
            {
                "category": "C2",
                "count": 9343,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 634,
                "trend": "stable",
                "percentage": 2
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
                "count": 20544,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://196[.]189[.]98[.]77:52781/bin[.]sh",
                    "hxxp://117[.]242[.]76[.]137:50959/bin[.]sh",
                    "hxxps://svc3user[.]magmaticbuffer[.]in[.]net/verification[.]google"
                ]
            },
            {
                "name": "CINS Threat List",
                "count": 15000,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]0[.]253[.]217",
                    "1[.]10[.]222[.]77",
                    "1[.]15[.]118[.]23"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1532,
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
                "count": 1394,
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
                    "38539fcee6bf1d363e1c8a3866913d7d8ee3d102",
                    "c61b06bc00a58330fcb94e0e18094f5128adf283",
                    "8f2ea97e92648473ca2a6d2f1607e1e36ac55346"
                ]
            },
            {
                "name": "LummaStealer",
                "count": 547,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "7f065e37b5c0112620f7c97d3cd761e626e0faf4",
                    "ba19ffedc0a28ed2055127327e4cd6873dcf5a4f",
                    "ca0c1280a2c26415f8d77ca00a39c6986841da0c"
                ]
            },
            {
                "name": "Vidar",
                "count": 445,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "60fb7400edece2b09a17663e06efdb9badde8e2e",
                    "afa1d275776f12ada15518a6ec15bf89f8678a18",
                    "5811fdb0d159f6f5effd6472a57c401aef033c44"
                ]
            },
            {
                "name": " \"js.clearfake\"",
                "count": 438,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"svc4link[.]magmaticbuffer[.]in[.]net\"",
                    " \"svc3user[.]magmaticbuffer[.]in[.]net\"",
                    " \"svc2base[.]magmaticbuffer[.]in[.]net\""
                ]
            },
            {
                "name": "OffLoader",
                "count": 362,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "0b0dc82e3c43d6527d2e2d4e19195817d9731387",
                    "ad794607ab5dbb098a4c5bc5d87e1b3bcd659d74",
                    "137adb757afcb4e5980a5e6aa63ac498559309d2"
                ]
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious URLs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": "malware_download",
        "totalAttacksThisHour": 41300,
        "lastCalculated": "2026-03-25 11:06 IST"
    }
};
