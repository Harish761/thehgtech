// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-09-09T02:50:11.829632+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-09-09T02:50:11.587126+05:30",
    "lastUpdatedFormatted": "Sep 09, 2026 at 02:50 AM IST",
    "comparisonPeriod": "Sep 08 \u2013 Sep 09, 2026",
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
                "hxxps://gurl[.]pro/roblox-users-8715356-profile",
                "hxxps://shorten[.]tv/l65iO",
                "hxxp://www[.]shorten[.]tv/jRftj/",
                "hxxps://itstrafflc[.]us/edoc/indextgpart[.]html",
                "hxxps://www[.]estudiocils[.]com[.]ar/home/nkl-log[.]php"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 858,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 858,
                "newInLastHour": 8,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"7622ea1ebd1e04d862e1e5a81d574f5cf83d068e8dbb09515489f598b91271c1",
                " \"aa2ea714e084456216408dc0aa127e920c4c9e2fbca59d203d6395618f6e69b9",
                " \"c3394372c2000643ce385269b0d8c648ccb8c833076a84bde397a3c01e7b4a5b",
                " \"4610b030d76dab5575dc7497d9017f44c05ae2c9480882f6fee3ae55c4a28fb1",
                " \"705a7fb8baae3f0aabe0145461e774b139db35bcc94b99d9378fa31d787f2e3f"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1706,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1706,
                "newInLastHour": 35,
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
                "1[.]119[.]194[.]253",
                "1[.]145[.]32[.]156",
                "1[.]183[.]224[.]115",
                "1[.]183[.]41[.]171",
                "1[.]189[.]89[.]112"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 5426,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 5426,
                "newInLastHour": 5426,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]0[.]164[.]165",
                "1[.]174[.]197[.]92",
                "1[.]20[.]94[.]169",
                "1[.]209[.]110[.]147",
                "1[.]214[.]214[.]114"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 13933,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 13933,
                "newInLastHour": 13933,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://103[.]19[.]49[.]134:36622/i",
                "hxxp://42[.]225[.]218[.]136:55344/i",
                "hxxp://115[.]56[.]156[.]211:55186/i",
                "hxxp://115[.]56[.]156[.]211:55186/bin[.]sh",
                "hxxp://182[.]127[.]110[.]105:38298/i"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 9679,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 9679,
                "newInLastHour": 9411,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"154[.]91[.]56[.]98:8094\"",
                " \"154[.]91[.]57[.]100:8094\"",
                " \"154[.]91[.]56[.]121:8094\"",
                " \"154[.]91[.]63[.]126:8094\"",
                " \"209[.]54[.]102[.]160:2404\""
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
            "iocCount": 10636,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 10636,
                "newInLastHour": 110,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "44c6dc94a23e05350af1ff687fef8b78cb089b8b",
                "32c779b627c28c168bcf744948c35f45462e9307",
                "cb2d6049ca9e2a20d92f8ee6ae28060d9d460b85",
                "bd12ed0d3f8dac14cb7de27202b10331831dc8c7",
                "4c12b6aa784f92a3c50fb7d99289ca32fe21ad4c"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 51978,
            "activeSources": 8,
            "criticalAlerts": 25338,
            "activeCampaigns": 263
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 14806,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "C2",
                "count": 10532,
                "trend": "stable",
                "percentage": -1
            },
            {
                "category": "Botnet",
                "count": 4173,
                "trend": "stable",
                "percentage": -2
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
                    "1[.]119[.]194[.]253",
                    "1[.]145[.]32[.]156",
                    "1[.]15[.]14[.]29"
                ]
            },
            {
                "name": "malware_download",
                "count": 13923,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://113[.]228[.]103[.]193:40664/i",
                    "hxxp://60[.]23[.]235[.]33:45384/bin[.]sh",
                    "hxxp://113[.]228[.]103[.]193:40664/bin[.]sh"
                ]
            },
            {
                "name": " \"js.iclickfix\"",
                "count": 2259,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"rug[.]betweenthebunz[.]co\"",
                    " \"remoteitprofessional[.]com\"",
                    " \"ialphai[.]com\""
                ]
            },
            {
                "name": " \"unknown_loader\"",
                "count": 1970,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"foldstation[.]cfd\"",
                    " \"fleshproduce[.]xyz\"",
                    " \"goldenseatnwa[.]com\""
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1671,
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
                "count": 1442,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "b7c32dab3a4cd691ddcfee4bc1fed6d1d6f81c18",
                    "7fa3afaafe3b7c5eab63712e58c9414a86d559ec",
                    "78527fc92bcf8d188b3bcab1b35ac5881e2aaa43"
                ]
            },
            {
                "name": " \"win.cobalt_strike\"",
                "count": 1294,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"42[.]194[.]241[.]92:80\"",
                    " \"42[.]194[.]241[.]92:8080\"",
                    " \"23[.]155[.]44[.]53:8080\""
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
                "count": 736,
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
                "name": " \"js.clearfake\"",
                "count": 711,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"jlxob4po[.]en-us-morningfatmelter[.]com\"",
                    " \"lp4avzjm[.]borderlinelakewood[.]com\"",
                    " \"borderlinelakewood[.]com\""
                ]
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious URLs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": "Spamhaus DROP List",
        "totalAttacksThisHour": 44228,
        "lastCalculated": "2026-09-09 02:50 IST"
    }
};
