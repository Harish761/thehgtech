// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-06-25T03:10:59.338627+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-06-25T03:10:58.930303+05:30",
    "lastUpdatedFormatted": "Jun 25, 2026 at 03:10 AM IST",
    "comparisonPeriod": "Jun 24 \u2013 Jun 25, 2026",
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
                "hxxp://arshina896[.]github[.]io/instagram/",
                "hxxp://z-maniac-sidd[.]github[.]io/Netflix_clone/",
                "hxxp://nishkarsh71[.]github[.]io/Mini-Project/",
                "hxxps://ig[.]do/asuranlha1",
                "hxxps://qr[.]link/PwvkS2"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 582,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 582,
                "newInLastHour": 12,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"b710e94d81dab6603ad14a45ee82926305bfb35f848d9108d4fc31eaf5161707",
                " \"07f1818fddf2e3fcde507aab8cded1356890eeabe10ea4b2941cc10df7e6e626",
                " \"0e838c6a588d00c029ea5e469e55e121688df7a6e8af7b75e53504dc81631cb5",
                " \"2122acaa42afef0b94d57ae665aad3e63bab5a28c07d03378feab8a4001312f4",
                " \"38653b45cc1ad44b143751d4cf64d1924b4b22bef833b8c8e341b2ba4b5e1470"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1692,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1692,
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
                "1[.]11[.]228[.]4",
                "1[.]119[.]194[.]226",
                "1[.]15[.]14[.]29",
                "1[.]159[.]80[.]125",
                "1[.]176[.]118[.]246"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 4567,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 4567,
                "newInLastHour": 4567,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]0[.]164[.]165",
                "1[.]160[.]229[.]25",
                "1[.]162[.]239[.]42",
                "1[.]192[.]61[.]19",
                "1[.]194[.]225[.]40"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 22959,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 22959,
                "newInLastHour": 22959,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://212[.]164[.]115[.]235:46901/bin[.]sh",
                "hxxp://27[.]44[.]145[.]210:40585/bin[.]sh",
                "hxxp://115[.]57[.]238[.]77:46268/bin[.]sh",
                "hxxp://59[.]42[.]89[.]142:56735/i",
                "hxxp://42[.]54[.]15[.]46:59843/bin[.]sh"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 4293,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 4293,
                "newInLastHour": 3977,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"b97pimiu[.]vip1x[.]bet\"",
                " \"hxxps://cdn[.]jsdelivr[.]net/gh/swiftvpnaccess/wanting-public-driver-barricade/256446-uuid\"",
                " \"5[.]249[.]162[.]81:4444\"",
                " \"123[.]56[.]42[.]40:8084\"",
                " \"hxxps://cdn[.]jsdelivr[.]net/gh/swiftvpnaccess/wanting-public-driver-barricade/78956-uuid\""
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
            "iocCount": 10057,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 10057,
                "newInLastHour": 14,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "fa2f278d16337931408552d5d7a0b75b229f8f31",
                "324e2fb8e2cef0b9cc4ed108f79f6006cce4ce34",
                "526b4a8604d900869439980614e56e4b288fb46d",
                "1f0ec506802cd022908e8029e20d7b5d3c525a39",
                "b3d9f61d0ccbe25f2239a1a50071c9a5b7b4e1ec"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 54849,
            "activeSources": 8,
            "criticalAlerts": 33569,
            "activeCampaigns": 243
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 23545,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "C2",
                "count": 10024,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 3341,
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
                "count": 22939,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://124[.]29[.]223[.]148:51277/i",
                    "hxxp://105[.]224[.]9[.]193:49037/i",
                    "hxxp://115[.]62[.]163[.]51:59693/bin[.]sh"
                ]
            },
            {
                "name": "CINS Threat List",
                "count": 15000,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]11[.]228[.]4",
                    "1[.]15[.]14[.]29",
                    "1[.]15[.]35[.]79"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1692,
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
                "name": " \"win.cobalt_strike\"",
                "count": 1430,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"52[.]86[.]125[.]111:8001\"",
                    " \"43[.]143[.]244[.]134:80\"",
                    " \"60[.]217[.]58[.]49:2121\""
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
                "count": 688,
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
                "count": 608,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "1b74f82a9f35a6f50d374d9c4471ad5762654eee",
                    "f64cde665218b5b87ca3413a068864247c237b95",
                    "e14da247abd27ab816d07e94f012ba4a405ee77f"
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
                "count": 432,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "dd3ba97127142419e80ef9ae606bec55ca8500fd",
                    "fbb234bb7df601783c1d25be2a386c9ab5d45e41",
                    "f453b4a0cf623b8f2659c584f583ea90d5f8d432"
                ]
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious URLs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": "SSH Attacks",
        "totalAttacksThisHour": 46834,
        "lastCalculated": "2026-06-25 03:10 IST"
    }
};
