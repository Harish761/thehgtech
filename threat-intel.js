// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-03-25T14:33:48.931198+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-03-25T14:33:48.644137+05:30",
    "lastUpdatedFormatted": "Mar 25, 2026 at 02:33 PM IST",
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
            "iocCount": 782,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 782,
                "newInLastHour": 109,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"bab9dbd5431c8b69e1940530c478cb7155918015518fce631204ff2f5ea89484",
                " \"368db0967b71b3a24e6554f051f31407fdfe86dcaa6b9024a90aa493f414092a",
                " \"f9df468a386edbd3b0406f354abc8088cb8aded37fc485b2d4e4ca47ec4cdd0f",
                " \"9cc5419f02b532abc4c33f28b88c98614170039075ddaca52137e81496b3021c",
                " \"e4e5dd1daa3ae2c8e7ccd49b6e5fba21114388d4feccacaebd821f42666c6437"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1536,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1536,
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
                "1[.]15[.]118[.]23",
                "1[.]15[.]15[.]189",
                "1[.]183[.]160[.]11",
                "1[.]191[.]127[.]124"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 4204,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 4204,
                "newInLastHour": 4204,
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
            "iocCount": 20714,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 20714,
                "newInLastHour": 20714,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://117[.]211[.]35[.]139:32999/bin[.]sh",
                "hxxps://6slp[.]thistlecore[.]in[.]net/verification[.]google",
                "hxxp://27[.]207[.]204[.]7:49884/i",
                "hxxp://59[.]97[.]183[.]97:36055/i",
                "hxxps://quorcoreix1[.]thistlecore[.]in[.]net/verification[.]google"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 1125,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 1125,
                "newInLastHour": 1115,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"6slp[.]thistlecore[.]in[.]net\"",
                " \"quorcoreix1[.]thistlecore[.]in[.]net\"",
                " \"madeinchina[.]minhacasa[.]tv\"",
                " \"hxxps://bitbucket[.]org/1431243/12/downloads/css[.]js\"",
                " \"f1xegu[.]q7ravo[.]in[.]net\""
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
            "iocCount": 9375,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 9375,
                "newInLastHour": 1,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "9413d052ea89e6c879e577b62e5a55436f55dd8d",
                "f0558a6d99572f494ab316c7dc3e1f08076908f8",
                "60fb7400edece2b09a17663e06efdb9badde8e2e",
                "af122b6c757acb41574bdcb6e0b1bcd01bb2e483",
                "03dda1240ed1938576cbd9d3f6c51f778db895d1"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 48834,
            "activeSources": 8,
            "criticalAlerts": 30808,
            "activeCampaigns": 228
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 21443,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "C2",
                "count": 9365,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 638,
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
                "count": 20623,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://59[.]88[.]10[.]109:54668/bin[.]sh",
                    "hxxp://103[.]102[.]25[.]50:35778/i",
                    "hxxps://ext4point[.]stratagraphic[.]in[.]net/verification[.]google"
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
                "count": 1538,
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
                "count": 451,
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
                "count": 440,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"ext4point[.]stratagraphic[.]in[.]net\"",
                    " \"ext3data[.]stratagraphic[.]in[.]net\"",
                    " \"ext2proxy[.]stratagraphic[.]in[.]net\""
                ]
            },
            {
                "name": "OffLoader",
                "count": 364,
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
        "totalAttacksThisHour": 41448,
        "lastCalculated": "2026-03-25 14:33 IST"
    }
};
