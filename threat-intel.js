// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-06-17T03:51:46.466116+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-06-17T03:51:46.109302+05:30",
    "lastUpdatedFormatted": "Jun 17, 2026 at 03:51 AM IST",
    "comparisonPeriod": "Jun 16 \u2013 Jun 17, 2026",
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
                "hxxps://notifications-iqeq[.]com/ao2phuaeswxtsfpx",
                "hxxps://www[.]lootscanner[.]one/",
                "hxxps://www[.]exodussupport[.]vercel[.]app/",
                "hxxps://www[.]pemenangshopee389[.]blogspot[.]com/",
                "hxxps://netflix-gpt-fawn[.]vercel[.]app/"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 863,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 863,
                "newInLastHour": 22,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"3892bb4b2e6a0d05ac0a62fe1156db84b31655bab5f757411e058f832a2f8843",
                " \"43fc683aa6c8e087256870ea735557686fc62a557ab57495cd48f1d41cfc9fbb",
                " \"d6a84f65af7d0f475932a71c5ba2827330ce0b31fe00f7ad4074b3617cb56b5f",
                " \"98362f12d808586e6ccb3910e282fe3ff4d8c45f821ee9368917a371d3c46ca2",
                " \"e9b0ac9d79a62b28cb1b9eaef1eddee76cb252a49c99da4054fe987ed0c2ccab"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1708,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1708,
                "newInLastHour": 55,
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
                "1[.]15[.]35[.]79",
                "1[.]168[.]8[.]65",
                "1[.]172[.]245[.]166",
                "1[.]180[.]141[.]134"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 5228,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 5228,
                "newInLastHour": 5228,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]116[.]110[.]170",
                "1[.]117[.]150[.]44",
                "1[.]117[.]47[.]94",
                "1[.]14[.]28[.]29",
                "1[.]14[.]49[.]40"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 17386,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 17386,
                "newInLastHour": 17386,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxps://lueplxze[.]sadreislam[.]xyz/9139d630-78db-4224-bb67-aed2adc41375",
                "hxxp://110[.]36[.]20[.]85:36978/i",
                "hxxp://110[.]36[.]20[.]85:36978/bin[.]sh",
                "hxxp://115[.]56[.]181[.]132:46685/i",
                "hxxp://125[.]45[.]66[.]27:37920/i"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 3597,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 3597,
                "newInLastHour": 3555,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"lueplxze[.]sadreislam[.]xyz\"",
                " \"b17ae941d850e0d6baf662aa84b1df6e\"",
                " \"0f5b306d0e04b56939893e35f82e218b618fbe4ec3ea21ff7316e866a46e9eb2\"",
                " \"9489d727ae6c5e174ff63f8c1104022ea5bbc296\"",
                " \"jwzyamqu[.]questionsmotor[.]xyz\""
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
            "iocCount": 9982,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 9982,
                "newInLastHour": 32,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "e313dded93cdf3b45d590ed15e2e0e0fef620a71",
                "59f0554dda32cbf5b5b5b08fe508480d81172f2d",
                "3c94f5e78cc03430f78033b240e6c065c5937c6a",
                "4b2bfe2a2c3d4ed1d3995d5006d4a395469c33fe",
                "0ebf5398afb45300a7c1688c14f80a795b701945"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 48822,
            "activeSources": 8,
            "criticalAlerts": 28221,
            "activeCampaigns": 248
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 18277,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "C2",
                "count": 9944,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 3050,
                "trend": "stable",
                "percentage": 1
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
                "percentage": 98
            },
            {
                "name": "Tech",
                "percentage": 1
            },
            {
                "name": "Finance",
                "percentage": 0
            }
        ],
        "campaigns": [
            {
                "name": "malware_download",
                "count": 17378,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://110[.]37[.]95[.]120:46249/i",
                    "hxxps://zqxhkfn1[.]mohasebatadadi[.]xyz/?ublib=16c403df-ee33-4931-b155-78217da1b47e",
                    "hxxps://eoubkysl[.]psgnewsiran[.]com/8b1959a2-b037-4683-a826-3cafda615f12"
                ]
            },
            {
                "name": "CINS Threat List",
                "count": 15000,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]12[.]229[.]231",
                    "1[.]15[.]51[.]236",
                    "1[.]159[.]13[.]9"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1708,
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
                "count": 1420,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"39[.]106[.]205[.]6:8080\"",
                    " \"39[.]106[.]205[.]6:80\"",
                    " \"39[.]106[.]205[.]6:443\""
                ]
            },
            {
                "name": "AsyncRAT",
                "count": 1416,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "6a998d33a87c7b36c2be68ed5c1c63929c0d6be4",
                    "167ddfd671ef30c31528515389cfdd11d9251558",
                    "d42a4a7e721a0503d81e3f47c72a0f93c53e4f2c"
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
                "count": 687,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "ae590545961e96de860ea7434c0e8c69b924de6f",
                    "28c3106cd1cec9a5dfec7f2ba3b0dd7e70784429",
                    "bf26c599e3f5ea932f7b8c592138d42d49837713"
                ]
            },
            {
                "name": "Vidar",
                "count": 600,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "59f0554dda32cbf5b5b5b08fe508480d81172f2d",
                    "3c94f5e78cc03430f78033b240e6c065c5937c6a",
                    "54fdaf6635064f8d7e6f84b1118eb60edcc697e8"
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
                "count": 425,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "8f15e3e07c691ae493b4059222638003e0bf0a9b",
                    "031af28814511239c0172b71c2c5092660676632",
                    "fb65cb3929bf5df8ed6de3cb5b2c6b87b3f6e3d9"
                ]
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious URLs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": "PureLogsStealer",
        "totalAttacksThisHour": 41583,
        "lastCalculated": "2026-06-17 03:51 IST"
    }
};
