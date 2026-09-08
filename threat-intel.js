// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-09-09T04:04:04.455019+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-09-09T04:04:04.161146+05:30",
    "lastUpdatedFormatted": "Sep 09, 2026 at 04:04 AM IST",
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
            "iocCount": 830,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 830,
                "newInLastHour": 28,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"65dd73ff6820fdc0aa1b7d449a1979592bc6f46a9d7a91bd6800c31268503fd4",
                " \"06710dd73fee4a517b98dac1823e091bb3defdef400d7a20c65ea78eb85c0f52",
                " \"b882d7626ff89aa52514fdb06a9333db386e98b31937d0184d65c8ba70474eed",
                " \"d49b6364096bad20e30d3c2be46c9aac136626f26f78ba0dc19ced6f897b073e",
                " \"25d775826462960f3e9aac0a58c5317f69809f2a403c09a242bbec88e0792069"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 542,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 542,
                "newInLastHour": 0,
                "lastUpdate": "just now"
            },
            "types": [
                "ip-range"
            ],
            "sampleIndicators": [
                "2.26.75.0/24",
                "2.27.5.0/24",
                "2.27.62.0/24",
                "2.57.17.0/24",
                "2.58.56.0/24"
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
                "1[.]177[.]63[.]23",
                "1[.]183[.]160[.]23",
                "1[.]189[.]89[.]112"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 5398,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 5398,
                "newInLastHour": 5398,
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
            "iocCount": 13937,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 13937,
                "newInLastHour": 13937,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://125[.]44[.]60[.]118:38038/i",
                "hxxp://119[.]127[.]7[.]102:56002/bin[.]sh",
                "hxxp://125[.]44[.]214[.]233:54441/i",
                "hxxp://42[.]53[.]134[.]221:56771/i",
                "hxxp://103[.]19[.]49[.]134:36622/i"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 9678,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 9678,
                "newInLastHour": 9410,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"102[.]220[.]161[.]72:2404\"",
                " \"leonardshow[.]clmcloud[.]app\"",
                " \"154[.]91[.]56[.]120:8094\"",
                " \"154[.]91[.]58[.]117:8094\"",
                " \"154[.]91[.]58[.]115:8094\""
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
            "iocCount": 10484,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 10484,
                "newInLastHour": 28,
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
            "totalIndicators": 52117,
            "activeSources": 8,
            "criticalAlerts": 25432,
            "activeCampaigns": 262
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 14818,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "C2",
                "count": 10614,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 4195,
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
                    "1[.]119[.]194[.]253",
                    "1[.]145[.]32[.]156",
                    "1[.]183[.]224[.]115"
                ]
            },
            {
                "name": "malware_download",
                "count": 13933,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://103[.]19[.]49[.]134:36622/i",
                    "hxxp://42[.]225[.]218[.]136:55344/i",
                    "hxxp://115[.]56[.]156[.]211:55186/i"
                ]
            },
            {
                "name": " \"js.iclickfix\"",
                "count": 2257,
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
                "count": 1706,
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
                "count": 1441,
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
                "name": "Vidar",
                "count": 761,
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
                "name": " \"js.clearfake\"",
                "count": 703,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"www[.]agentur-sport-artist[.]com\"",
                    " \"agpatrimoine[.]net\"",
                    " \"adria-bih[.]com\""
                ]
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious URLs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": " \"Mirai",
        "totalAttacksThisHour": 44106,
        "lastCalculated": "2026-09-09 04:04 IST"
    }
};
