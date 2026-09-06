// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-09-07T02:12:12.203419+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-09-07T02:12:11.959895+05:30",
    "lastUpdatedFormatted": "Sep 07, 2026 at 02:12 AM IST",
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
            "iocCount": 694,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 694,
                "newInLastHour": 89,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"61af149986db26f8e4d084e994cf43bc2595ed7668393401cef7a15afa999b57",
                " \"b9fd307d5a43dec31b053d3061920cfe73935900482f95049bbe6fbdf022aeb9",
                " \"0b98136afa6ba669417bd03c99bb34a37bcda97dc491dfde61236a4e08f7b614",
                " \"5ad7fcfde0a616ccaba02eaa95a55bc0befa61f7e1aea37402be23250ae6462b",
                " \"315d0bcd7a5adb872fc49dc16c6720fe930f55eff1877e9a4cc9366b4bf7328b"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1705,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1705,
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
                "1[.]117[.]59[.]169",
                "1[.]119[.]194[.]253",
                "1[.]12[.]229[.]231",
                "1[.]15[.]14[.]29",
                "1[.]183[.]160[.]23"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 5607,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 5607,
                "newInLastHour": 5607,
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
            "iocCount": 14567,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 14567,
                "newInLastHour": 14567,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://210[.]208[.]110[.]42:48479/bin[.]sh",
                "hxxp://8[.]219[.]239[.]117:60139/linux",
                "hxxp://8[.]219[.]108[.]63:60142/linux",
                "hxxp://8[.]219[.]201[.]139:60102/linux",
                "hxxp://106[.]225[.]235[.]90:60106/linux"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 6345,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 6345,
                "newInLastHour": 6052,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"ilovewithheart[.]com\"",
                " \"hxxps://fonni[.]net/\"",
                " \"global-stash[.]beer\"",
                " \"ileolubami[.]org[.]br\"",
                " \"www[.]icollagen[.]sk\""
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
            "iocCount": 10649,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 10649,
                "newInLastHour": 20,
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
            "totalIndicators": 49183,
            "activeSources": 8,
            "criticalAlerts": 25709,
            "activeCampaigns": 261
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 15098,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "C2",
                "count": 10611,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 4217,
                "trend": "stable",
                "percentage": 2
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
                "count": 14458,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://59[.]97[.]253[.]153:56432/i",
                    "hxxp://221[.]214[.]162[.]133:52343/bin[.]sh",
                    "hxxp://123[.]190[.]66[.]186:51800/i"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1707,
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
                    "7fa3afaafe3b7c5eab63712e58c9414a86d559ec",
                    "78527fc92bcf8d188b3bcab1b35ac5881e2aaa43",
                    "8c2a430246ca36ca14885fe1a101c61eaab4a96c"
                ]
            },
            {
                "name": " \"win.cobalt_strike\"",
                "count": 1318,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"206[.]237[.]120[.]90:48984\"",
                    " \"206[.]237[.]120[.]90:56632\"",
                    " \"223[.]109[.]142[.]7:7500\""
                ]
            },
            {
                "name": " \"js.iclickfix\"",
                "count": 1017,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"fxprovietnam[.]com\"",
                    " \"fynqolo[.]site\"",
                    " \"gaanwala[.]in\""
                ]
            },
            {
                "name": "Vidar",
                "count": 763,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "1baea4f8295715f075d3c0510b61017840047ae3",
                    "4454daf3ef7f7d71cf8e4ce8067c880f9976c952",
                    "7d5d941b4a1e4732fad44cce2a4ded87a20d5508"
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
                "count": 585,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"82[.]22[.]7[.]20:5069\"",
                    " \"108[.]187[.]43[.]137:56003\"",
                    " \"108[.]187[.]43[.]144:56003\""
                ]
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious URLs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": "malware_download",
        "totalAttacksThisHour": 41641,
        "lastCalculated": "2026-09-07 02:12 IST"
    }
};
