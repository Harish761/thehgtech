// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-06-29T18:11:27.165359+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-06-29T18:11:26.839892+05:30",
    "lastUpdatedFormatted": "Jun 29, 2026 at 06:11 PM IST",
    "comparisonPeriod": "Jun 28 \u2013 Jun 29, 2026",
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
                "hxxp://auth-apps-kucoin-sso--c-cdn[.]webflow[.]io/",
                "hxxp://claim-open-esl-org[.]sbs/",
                "hxxp://pub-e55d00bbe3f740a58ef8bd646105b158[.]r2[.]dev/auth[.]html",
                "hxxps://delvaie[.]com/login4841[.]php",
                "hxxps://delvaie[.]com/wrong[.]php"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 505,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 505,
                "newInLastHour": 149,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"4a7ee630df4b7af2da5f8c5e511492735f558d2b234e07d3cf09db999a8ac5ef",
                " \"0219224c51d8bb89c231f16bd9993773af87f2fec19776a069e06943f051d717",
                " \"38f24a3c159f733c8f29820edd2a4f77a6218018d916d3c91db14da70848039f",
                " \"1a80fe00158319a0fc5e5f36549cb3b00ec4024ef65085fd238a74870d562240",
                " \"bee4e24128c232853bc1decc9e5db2cf0fcb14538936adf01d6356beb4ac820c"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1684,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1684,
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
                "1[.]12[.]229[.]231",
                "1[.]15[.]14[.]29",
                "1[.]176[.]118[.]246",
                "1[.]188[.]100[.]231",
                "1[.]188[.]23[.]20"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 4595,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 4595,
                "newInLastHour": 4595,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]0[.]164[.]165",
                "1[.]1[.]220[.]166",
                "1[.]12[.]223[.]79",
                "1[.]14[.]192[.]95",
                "1[.]14[.]28[.]29"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 22040,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 22040,
                "newInLastHour": 22040,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://112[.]249[.]57[.]185:33486/i",
                "hxxp://110[.]37[.]65[.]33:37262/i",
                "hxxp://182[.]127[.]46[.]49:37395/i",
                "hxxp://110[.]37[.]65[.]33:37262/bin[.]sh",
                "hxxps://depdoej0[.]taktikbet[.]bio/?ublib=05f579ce-ec56-4f50-af7b-5601f2335bb7"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 3609,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 3609,
                "newInLastHour": 3426,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"209[.]200[.]246[.]194:35885\"",
                " \"116[.]213[.]42[.]110:5006\"",
                " \"updatesrv[.]net\"",
                " \"web-analyzer-serv32[.]com\"",
                " \"hxxps://jasyn[.]kz/\""
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
            "iocCount": 10070,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 10070,
                "newInLastHour": 25,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "078541bcc8ca1f620034dc2b29cbd968faf02ea6",
                "85725890743b16375132651911e3f692115128a8",
                "35f7eb4f519f8878beb88a02587ce4d82df24ce6",
                "4914d714908de0f52c22349b5b784f77442a27e6",
                "22254f34fc7bb27507295179034e621efba15cfe"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 52840,
            "activeSources": 8,
            "criticalAlerts": 32390,
            "activeCampaigns": 225
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 22355,
                "trend": "stable",
                "percentage": -2
            },
            {
                "category": "C2",
                "count": 10035,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 3133,
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
                "count": 21900,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://221[.]14[.]107[.]150:50099/bin[.]sh",
                    "hxxp://124[.]131[.]107[.]74:34906/bin[.]sh",
                    "hxxp://123[.]129[.]128[.]187:58844/i"
                ]
            },
            {
                "name": "CINS Threat List",
                "count": 15000,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]1[.]243[.]65",
                    "1[.]157[.]77[.]101",
                    "1[.]176[.]118[.]246"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1694,
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
                "count": 1420,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "526b4a8604d900869439980614e56e4b288fb46d",
                    "15a47f45b77ef377b9ec7f6aff1fc3fcca1c6035",
                    "3361a98a6c2746e41390b299202f149699f5a17d"
                ]
            },
            {
                "name": " \"win.cobalt_strike\"",
                "count": 1405,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"1db264fab7a33a9962423109aa9fdcf1688eee74\"",
                    " \"8871665f04a761afb82cd425a9419130\"",
                    " \"536a20ad2c2de578288f060adba7ce718ca8b4ad3e9111e6e461dd482bd34cc8\""
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
                "count": 686,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "27e3cb5b0043884c7ebc0691e2e73ef3b95339ac",
                    "ae590545961e96de860ea7434c0e8c69b924de6f",
                    "28c3106cd1cec9a5dfec7f2ba3b0dd7e70784429"
                ]
            },
            {
                "name": "Vidar",
                "count": 614,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "85725890743b16375132651911e3f692115128a8",
                    "4914d714908de0f52c22349b5b784f77442a27e6",
                    "cb3467ed8453ec11060a815fe90e0c37957a205e"
                ]
            },
            {
                "name": "LummaStealer",
                "count": 556,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "2beac2ee8b2fe7625d4de9f5381d37f200965f91",
                    "a46841d623a191366909b24375bee0eceea23bbe",
                    "272e76f605bec1da1ea719df8dc0e7269de7d44e"
                ]
            },
            {
                "name": "OffLoader",
                "count": 423,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "fa1ffe8c35c3aab0195800f52cf831125eeb4698",
                    "dd3ba97127142419e80ef9ae606bec55ca8500fd",
                    "fbb234bb7df601783c1d25be2a386c9ab5d45e41"
                ]
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious URLs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": "SSH Attacks",
        "totalAttacksThisHour": 45543,
        "lastCalculated": "2026-06-29 18:11 IST"
    }
};
