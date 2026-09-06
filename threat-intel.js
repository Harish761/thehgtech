// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-09-07T03:35:49.469311+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-09-07T03:35:49.124100+05:30",
    "lastUpdatedFormatted": "Sep 07, 2026 at 03:35 AM IST",
    "comparisonPeriod": "Sep 06 \u2013 Sep 07, 2026",
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
                "hxxps://www[.]nehsbe[.]cn/ww/",
                "hxxp://www[.]nehsbe[.]cn/",
                "hxxps://fb-meta-verified-47091[.]vercel[.]app/",
                "hxxps://www[.]fb-meta-verified-47091[.]vercel[.]app/",
                "hxxps://samaoluwasegun-dev[.]github[.]io/alexhoffmannboa/"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 569,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 569,
                "newInLastHour": 56,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"5aa0cd0fb49efc5368952f1449686a63f61f33748892a08afe2c8e458dce70ae",
                " \"9831a1b023f28b6cfd4c7c83099270aa48e43bf7bd8842e8858993abce86dc24",
                " \"194f9a024339c321343fe1f96d91335308b7fe4f41bb3bd875cdfc3e8fc149ff",
                " \"e8bdbd96cb33b0e92cd7bae8f64e6599627dc3df656fc0a31435cd2bc06bd9a4",
                " \"c6a2648e2fb73c593025ad77df99644d0404997bf01d65466f6b2e38411ebf1e"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1596,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1596,
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
                "1[.]145[.]32[.]156",
                "1[.]163[.]204[.]175",
                "1[.]183[.]41[.]171",
                "1[.]189[.]108[.]155",
                "1[.]192[.]129[.]106"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 5609,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 5609,
                "newInLastHour": 5609,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]0[.]164[.]165",
                "1[.]12[.]37[.]6",
                "1[.]174[.]208[.]30",
                "1[.]178[.]222[.]238",
                "1[.]209[.]110[.]147"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 14578,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 14578,
                "newInLastHour": 14578,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://222[.]127[.]71[.]33:58739/bin[.]sh",
                "hxxp://125[.]45[.]19[.]146:59855/i",
                "hxxp://112[.]240[.]169[.]230:46314/i",
                "hxxp://42[.]237[.]110[.]194:36839/bin[.]sh",
                "hxxp://125[.]45[.]19[.]146:59855/bin[.]sh"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 6356,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 6356,
                "newInLastHour": 6061,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"instalacionesdeelectricidad[.]com\"",
                " \"integrativemedicineconsortium[.]net\"",
                " \"tr5d4edcny[.]workers[.]dev\"",
                " \"isletmebul[.]com[.]tr\"",
                " \"itchy[.]fr\""
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
            "iocCount": 10261,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 10261,
                "newInLastHour": 4,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "b1709ae370ca3fb7ddb3fb49b6c1fca1303a4a97",
                "a66308a1fb09c8345228ca00335e633b2dabde53",
                "7fa3afaafe3b7c5eab63712e58c9414a86d559ec",
                "1baea4f8295715f075d3c0510b61017840047ae3",
                "5efdc565e73e10756c6962ebadd15cf4b1075ea9"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 49265,
            "activeSources": 8,
            "criticalAlerts": 25915,
            "activeCampaigns": 256
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 15288,
                "trend": "stable",
                "percentage": 1
            },
            {
                "category": "C2",
                "count": 10627,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 4254,
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
                "name": "CINS Threat List",
                "count": 15000,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]117[.]59[.]169",
                    "1[.]119[.]194[.]253",
                    "1[.]12[.]229[.]231"
                ]
            },
            {
                "name": "malware_download",
                "count": 14567,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://210[.]208[.]110[.]42:48479/bin[.]sh",
                    "hxxp://8[.]219[.]239[.]117:60139/linux",
                    "hxxp://8[.]219[.]108[.]63:60142/linux"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1705,
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
                "count": 1443,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "7fa3afaafe3b7c5eab63712e58c9414a86d559ec",
                    "78527fc92bcf8d188b3bcab1b35ac5881e2aaa43",
                    "8c2a430246ca36ca14885fe1a101c61eaab4a96c"
                ]
            },
            {
                "name": " \"win.cobalt_strike\"",
                "count": 1321,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"120[.]77[.]254[.]122:8080\"",
                    " \"120[.]77[.]254[.]122:443\"",
                    " \"120[.]77[.]254[.]122:80\""
                ]
            },
            {
                "name": " \"js.iclickfix\"",
                "count": 1019,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"global-stash[.]beer\"",
                    " \"coal[.]albaikmenuonline[.]com\"",
                    " \"fxprovietnam[.]com\""
                ]
            },
            {
                "name": "Vidar",
                "count": 768,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "b1709ae370ca3fb7ddb3fb49b6c1fca1303a4a97",
                    "1baea4f8295715f075d3c0510b61017840047ae3",
                    "4454daf3ef7f7d71cf8e4ce8067c880f9976c952"
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
                "count": 703,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "de0a287fb9997f0ffbd36df79b13cfda63f0bfcd",
                    "22d945ac6c7c00fb7bb5d0dc3618a82d46cfd1e2",
                    "6c6027c8ff18b0f79bd3c40848c2b189a18b49ac"
                ]
            },
            {
                "name": " \"win.pure_rat\"",
                "count": 594,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"91[.]219[.]239[.]100:443\"",
                    " \"45[.]139[.]104[.]226:49001\"",
                    " \"31[.]57[.]38[.]7:56003\""
                ]
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious URLs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": " \"js.clearfake\"",
        "totalAttacksThisHour": 41616,
        "lastCalculated": "2026-09-07 03:35 IST"
    }
};
