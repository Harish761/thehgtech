// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-03-17T22:44:58.736913+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-03-17T22:44:58.452279+05:30",
    "lastUpdatedFormatted": "Mar 17, 2026 at 10:44 PM IST",
    "comparisonPeriod": "Mar 16 \u2013 Mar 17, 2026",
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
                "hxxps://www[.]roblox[.]com[.]gl/users/274590671691/profile",
                "hxxps://www[.]o-shop[.]com/en/menu/eye-lenses/ciba-vision/air-optix-night-day-aqua-2551[.]html",
                "hxxps://validate-robinhood[.]com[.]emuna[.]info/",
                "hxxps://validate-robinhood[.]com/",
                "hxxps://invoicecarcareenquirydocusign[.]appwrite[.]network/"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 559,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 559,
                "newInLastHour": 98,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"60159fd7efbfe36648d9198629e47b84b6c15705e79c6238ca8c7f2551021c02",
                " \"e2b22f177123540eb26965e79d8a62f19afba15a7d6cdf1ca9e8212d72688f73",
                " \"322ad898efa0a932ee2264d62310fbd5a4358e0082d0ed1fa4dfd67f01965205",
                " \"3946b63adbb5ef4955c4c82192a969ead18f6ca7e3cc2c5834349a31358f5606",
                " \"87dcec6f3a6e66df8a64c73f866c039f97aae2bdaf1018297033327c4df42de1"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1525,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1525,
                "newInLastHour": 2,
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
                "1[.]15[.]15[.]189",
                "1[.]161[.]142[.]123",
                "1[.]162[.]147[.]232",
                "1[.]163[.]107[.]124",
                "1[.]169[.]241[.]122"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 8401,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 8401,
                "newInLastHour": 8401,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]14[.]141[.]8",
                "1[.]162[.]198[.]143",
                "1[.]164[.]175[.]189",
                "1[.]189[.]21[.]20",
                "1[.]220[.]64[.]218"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 19762,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 19762,
                "newInLastHour": 19762,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://110[.]37[.]55[.]92:35466/bin[.]sh",
                "hxxps://zentide0on[.]tempiso[.]in[.]net/verification[.]google",
                "hxxp://125[.]40[.]158[.]234:34778/bin[.]sh",
                "hxxps://royalmonitor[.]tempiso[.]in[.]net/verification[.]google",
                "hxxp://182[.]114[.]194[.]200:52589/i"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 1788,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 1788,
                "newInLastHour": 1762,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"plasticoscalidad[.]com\"",
                " \"golsec[.]inksky[.]in[.]net\"",
                " \"zentide0on[.]tempiso[.]in[.]net\"",
                " \"royalmonitor[.]tempiso[.]in[.]net\"",
                " \"5c4r-trail[.]tempiso[.]in[.]net\""
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
            "iocCount": 9283,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 9283,
                "newInLastHour": 19,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "8fd9243cdc76cff67c1da97c32a30cc868de987c",
                "c5472c7ec6cac644eba170ea2b487e06d127481c",
                "a6424f7b04438f3acec298c9333197df2b3c6526",
                "4f9e60ee24af588adb3d71b7c0617592c7f21b44",
                "5ec0b97b4993394721c873a4e9b8ed52cade22f0"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 48132,
            "activeSources": 8,
            "criticalAlerts": 29461,
            "activeCampaigns": 202
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 20214,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "C2",
                "count": 9247,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 512,
                "trend": "stable",
                "percentage": 8
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
                "percentage": 95
            },
            {
                "name": "Tech",
                "percentage": 4
            },
            {
                "name": "Finance",
                "percentage": 0
            }
        ],
        "campaigns": [
            {
                "name": "malware_download",
                "count": 19689,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://222[.]138[.]64[.]12:44625/bin[.]sh",
                    "hxxp://123[.]190[.]231[.]231:48718/bin[.]sh",
                    "hxxp://115[.]55[.]51[.]170:40829/i"
                ]
            },
            {
                "name": "CINS Threat List",
                "count": 15000,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]15[.]15[.]189",
                    "1[.]161[.]142[.]123",
                    "1[.]162[.]147[.]232"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1525,
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
                "count": 1390,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "ba3e7e73b6c654a979d4e4fe20b4aa24890b4518",
                    "e074dd74eb8eb98468a94eb43b3487fe2b7f5980",
                    "d5a586a42fd4e36396467ae8d16045a5efd6bada"
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
                "name": " \"unknown\"",
                "count": 659,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"hxxps://vblbs[.]beer/api/css[.]js\"",
                    " \"vblbs[.]beer\"",
                    " \"hxxps://networksolutionson[.]sbs/api/css[.]js\""
                ]
            },
            {
                "name": "QuasarRAT",
                "count": 639,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "d9fa0ea682b5e53c1fcad5edfc64b89fbfd468da",
                    "7692429d5ce694bd30c57fae26a56dd8fd960faf",
                    "f021dc8a50b47d94a454ff92d78bd1215597a759"
                ]
            },
            {
                "name": "LummaStealer",
                "count": 541,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "da0f6a5937d3c2d365ffeddb881b4136313e1afa",
                    "e30905555de39d1e66f834f672f6f14e9106839b",
                    "f9e8d701de1740086da792e2c9be70df261e1832"
                ]
            },
            {
                "name": " \"js.clearfake\"",
                "count": 487,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"geo-reg1st[.]blowoff[.]in[.]net\"",
                    " \"nypy0[.]highjoke[.]in[.]net\"",
                    " \"cry5ta-wave[.]highjoke[.]in[.]net\""
                ]
            },
            {
                "name": "Vidar",
                "count": 416,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "9a00a12fad770289e318387488aab1f3c5ab0cb6",
                    "4fe4c76644c524e662ba08364bb0405775eab374",
                    "da23f7db47ec680f55226ed5040cbcf4b9f55d64"
                ]
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious IPs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": "malware_download",
        "totalAttacksThisHour": 45349,
        "lastCalculated": "2026-03-17 22:44 IST"
    }
};
