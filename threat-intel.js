// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-08-13T22:36:25.572978+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-08-13T22:36:25.259420+05:30",
    "lastUpdatedFormatted": "Aug 13, 2026 at 10:36 PM IST",
    "comparisonPeriod": "Aug 12 \u2013 Aug 13, 2026",
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
                "hxxps://logowanie-facebook[.]vercel[.]app/",
                "hxxp://helpry[.]jp/clxj-blockchain-rqdd-helpry-pgkzw-blockchain-wzojvh",
                "hxxps://logical-words-764346[.]framer[.]app/",
                "hxxps://frequent-industry-913696[.]framer[.]app/",
                "hxxp://www[.]m[.]6442[.]win/"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 1257,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 1257,
                "newInLastHour": 93,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"0b4aeaae90cd243556f14644404580c6365aedc1d6b2780f05d2622cd5249974",
                " \"a8f291510e59a0d9929809d9d7de3cc1958df12e14634895a513f95e3e37b7cb",
                " \"0977370b032f5af5f92e7f93c0917b5c27e78d7a68a0bb526e653591599311f0",
                " \"006bdbc34e844d18a837989fca82ab15552a26733268f54b1a832af30ad6a008",
                " \"505efd801cb4b1845436a2a2e35b88ecb6933afa2703c88b6db018fa4cebb930"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1626,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1626,
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
                "1[.]15[.]14[.]29",
                "1[.]181[.]200[.]22",
                "1[.]192[.]216[.]192",
                "1[.]193[.]63[.]11",
                "1[.]193[.]63[.]15"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 5320,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 5320,
                "newInLastHour": 5320,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]0[.]164[.]165",
                "1[.]116[.]61[.]217",
                "1[.]14[.]106[.]163",
                "1[.]14[.]184[.]80",
                "1[.]178[.]214[.]92"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 17145,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 17145,
                "newInLastHour": 17145,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://110[.]38[.]210[.]180:58578/i",
                "hxxps://sumiko[.]vu/praise/agent%20hype[.]bin",
                "hxxps://aeplled[.]cfd/stego/stego_7mpp3kpd10[.]png",
                "hxxps://midle-eastcompany[.]com/HypEEAugustBless2026[.]exe",
                "hxxps://totalfitting[.]com[.]au/super%20agent[.]exe"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 4819,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 4819,
                "newInLastHour": 4506,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"9a1c9e8f89df354e7704a1bdba5404b9\"",
                " \"67b59851c48c89880b692e238e54ad8b\"",
                " \"95d91cdeaf8991fec3618ca52a5d8a7e\"",
                " \"1768e374535e5aeaec71002ab68838e7\"",
                " \"6436a5ae81c78a3b38a2a2830bce2d36\""
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
            "iocCount": 10407,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 10407,
                "newInLastHour": 7,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "2a68cf483216956f8162c0334a75dac483bfaac6",
                "7bbac2b67988c36fa1dbd3a75dc06629f766ccaf",
                "9b4c3ff8dc5891693f443320e3c1167c7cebe2b7",
                "0f1b05653c3b3ab3bb4ecd772dd024668cbe8df1",
                "9cd7f02e5bd6f0cb16141c3205aa9b00b0fce027"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 50716,
            "activeSources": 8,
            "criticalAlerts": 28945,
            "activeCampaigns": 250
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 18547,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "C2",
                "count": 10398,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 3741,
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
                "count": 17094,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://95[.]9[.]35[.]137:54934/i",
                    "hxxp://192[.]109[.]139[.]79/flyudfg[.]png",
                    "hxxp://192[.]109[.]139[.]79/hdGFtyu[.]png"
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
                    "1[.]140[.]3[.]11",
                    "1[.]15[.]14[.]29"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1685,
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
                "count": 1436,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "b5f071dd28b511f0b4b067507602a779feb4301f",
                    "714c56e9e207d5c8e08e1ca28cd9ba85f079d061",
                    "6647f9e4a2e273d7b78ff02be7114b0e9e2a719f"
                ]
            },
            {
                "name": " \"win.cobalt_strike\"",
                "count": 1332,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"178[.]128[.]80[.]204:22\"",
                    " \"68[.]64[.]182[.]169:993\"",
                    " \"68[.]64[.]182[.]169:4190\""
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
                "count": 699,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "78dc4f50971751cbf98b96219dd56f099095a717",
                    "5b86c194e3e28190e76652c7a39e9acbf849ada2",
                    "9ea13ee5065114aee007c91c941ac3f8483c4326"
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
                "name": "LummaStealer",
                "count": 557,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "501d817bb1780acfe5e47082c43472bda8068e4d",
                    "2beac2ee8b2fe7625d4de9f5381d37f200965f91",
                    "a46841d623a191366909b24375bee0eceea23bbe"
                ]
            },
            {
                "name": " \"js.clearfake\"",
                "count": 500,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"us-tinni-trol[.]com\"",
                    " \"dc16h0z3[.]energyrevolutionsystem[.]org\"",
                    " \"imkc64pm[.]us-en-us-keyslimdrops[.]com\""
                ]
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious URLs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": "malware_download",
        "totalAttacksThisHour": 42377,
        "lastCalculated": "2026-08-13 22:36 IST"
    }
};
