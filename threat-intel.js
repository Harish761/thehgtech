// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-09-08T18:20:05.500355+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-09-08T18:20:05.155170+05:30",
    "lastUpdatedFormatted": "Sep 08, 2026 at 06:20 PM IST",
    "comparisonPeriod": "Sep 07 \u2013 Sep 08, 2026",
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
            "iocCount": 902,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 902,
                "newInLastHour": 121,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"e91b81560b36e728f0f599e3b7d93ed31ea0aeb9c4bd6d08f48f1188e57fd7d4",
                " \"2312ae3c94e311c8c328f91a74519fdcb985acc42f87aa0e91681fb1bdbc40da",
                " \"e0c7e26e5b57860b4820bab234bed9d48edff4e092744ddfe5065de9a7f3e8c2",
                " \"7cc79c56e65205f98fdb5c0b1f6e3f3d971cdf0d9ac4dc5678b929c19f1062bb",
                " \"8c65d9805836b194f2b34cde260a0a0d52de3d73e1e0ce775e69e7179e9b5019"
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
                "newInLastHour": 57,
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
                "1[.]15[.]14[.]29",
                "1[.]183[.]41[.]171",
                "1[.]189[.]89[.]112"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 5554,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 5554,
                "newInLastHour": 5554,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]0[.]164[.]165",
                "1[.]174[.]197[.]92",
                "1[.]174[.]208[.]30",
                "1[.]20[.]94[.]169",
                "1[.]209[.]110[.]147"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 13872,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 13872,
                "newInLastHour": 13872,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://176[.]65[.]139[.]139/reflect[.]i686",
                "hxxp://176[.]65[.]139[.]139/arm8",
                "hxxp://176[.]65[.]139[.]139/reflect[.]sh4",
                "hxxps://spa-com[.]com/postback",
                "hxxp://176[.]65[.]139[.]139/launch[.]sh"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 9797,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 9797,
                "newInLastHour": 9592,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"jerichohair[.]com\"",
                " \"watsiia[.]top\"",
                " \"hxxps://watsiia[.]top/api/v1/session\"",
                " \"hxxps://watsiia[.]top/api/v1/verify\"",
                " \"217[.]60[.]103[.]46:2511\""
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
            "iocCount": 10664,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 10664,
                "newInLastHour": 196,
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
            "totalIndicators": 49325,
            "activeSources": 8,
            "criticalAlerts": 24983,
            "activeCampaigns": 250
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 14537,
                "trend": "stable",
                "percentage": -7
            },
            {
                "category": "C2",
                "count": 10446,
                "trend": "stable",
                "percentage": -1
            },
            {
                "category": "Botnet",
                "count": 4337,
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
                    "1[.]119[.]158[.]77",
                    "1[.]119[.]194[.]253",
                    "1[.]183[.]224[.]115"
                ]
            },
            {
                "name": "malware_download",
                "count": 13611,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://115[.]62[.]146[.]115:39533/i",
                    "hxxp://42[.]232[.]235[.]34:46172/i",
                    "hxxp://115[.]62[.]146[.]115:39533/bin[.]sh"
                ]
            },
            {
                "name": " \"js.iclickfix\"",
                "count": 1717,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"badger-kuis-vnex5[.]life\"",
                    " \"rock[.]betweenthebunz[.]co\"",
                    " \"ira-company[.]com\""
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1653,
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
                "count": 1433,
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
                "count": 1302,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"175[.]178[.]224[.]39:443\"",
                    " \"106[.]52[.]127[.]131:443\"",
                    " \"209[.]200[.]246[.]194:53\""
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
                "count": 712,
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
                "name": "QuasarRAT",
                "count": 685,
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
                "name": " \"js.clearfake\"",
                "count": 618,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"ntypt547[.]zen-zensulin[.]com\"",
                    " \"zen-zensulin[.]com\"",
                    " \"rqtcnh3v[.]web-blinzador[.]com\""
                ]
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious URLs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": " \"unknown_loader\"",
        "totalAttacksThisHour": 44697,
        "lastCalculated": "2026-09-08 18:20 IST"
    }
};
