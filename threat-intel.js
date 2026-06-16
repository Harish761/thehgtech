// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-06-16T18:32:13.863136+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-06-16T18:32:13.557619+05:30",
    "lastUpdatedFormatted": "Jun 16, 2026 at 06:32 PM IST",
    "comparisonPeriod": "Jun 15 \u2013 Jun 16, 2026",
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
            "iocCount": 817,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 817,
                "newInLastHour": 178,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"a1c20108b2ddb67fd2d4470899e8c952f69d70571c6dc6d404a3e5b2cdc6b3eb",
                " \"3b64a98102380db428a52754fb2f61a44d070a50c125f6de9135af6aa0824d31",
                " \"8503a4a1f9734e9175366f1d4f1fa67f34fd72575b06f17835e1240d1a060d74",
                " \"4591d637db0c54a7081d4bc44d88fdd7d4a7914122a82a9f452e05b2f09bec18",
                " \"bddd8364e316a038ca59afe41d51ee9e0a7a787892d0e8b0b369d37583d6ab86"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1707,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1707,
                "newInLastHour": 10,
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
                "1[.]119[.]194[.]226",
                "1[.]15[.]35[.]79",
                "1[.]15[.]51[.]236",
                "1[.]15[.]82[.]219",
                "1[.]159[.]13[.]9"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 5252,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 5252,
                "newInLastHour": 5252,
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
            "iocCount": 17190,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 17190,
                "newInLastHour": 17190,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://219[.]155[.]14[.]110:53701/i",
                "hxxps://3hjfke61[.]usoleamoozesh[.]xyz/?ublib=e6b90f30-596d-461e-9392-eb4c8ece8a1e",
                "hxxps://pgfor[.]bookdrive[.]xyz/385fed85-99a7-48c6-acd2-73f6c92c60ae",
                "hxxps://bzdujmed[.]sazebetonarme[.]xyz/9f22f8de-61de-421c-8bb2-2567f1bb2278",
                "hxxp://atom[.]freehosting[.]dev/aes[.]js"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 3378,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 3378,
                "newInLastHour": 3360,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"pgfor[.]bookdrive[.]xyz\"",
                " \"bzdujmed[.]sazebetonarme[.]xyz\"",
                " \"hxxps://treviro[.]icu/file[.]js\"",
                " \"treviro[.]icu\"",
                " \"hxxps://treviro[.]icu/api/v1/session\""
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
            "iocCount": 9980,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 9980,
                "newInLastHour": 86,
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
            "totalIndicators": 48110,
            "activeSources": 8,
            "criticalAlerts": 27518,
            "activeCampaigns": 222
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 17643,
                "trend": "stable",
                "percentage": -4
            },
            {
                "category": "C2",
                "count": 9875,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 3188,
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
                "percentage": 98
            },
            {
                "name": "Tech",
                "percentage": 1
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
                "name": "malware_download",
                "count": 16859,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://103[.]44[.]136[.]115:54824/i",
                    "hxxps://82a3dcwt[.]sazehayefooladi[.]xyz/?ublib=b07c0f25-c56c-4039-a605-0459346a69b3",
                    "hxxp://103[.]44[.]136[.]115:54824/bin[.]sh"
                ]
            },
            {
                "name": "CINS Threat List",
                "count": 15000,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]15[.]35[.]79",
                    "1[.]159[.]13[.]9",
                    "1[.]164[.]107[.]152"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1697,
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
                "count": 1464,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"45[.]151[.]101[.]97:443\"",
                    " \"129[.]204[.]14[.]131:57000\"",
                    " \"47[.]120[.]20[.]86:8989\""
                ]
            },
            {
                "name": "AsyncRAT",
                "count": 1410,
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
                "count": 684,
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
                "count": 582,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "eb96b9eb03a776f21ad2937432c58fbc72efbabc",
                    "9e21649650307360f41b165d054d97889620c3fa",
                    "fad1aa4c3f36fab0335108ddc93772f10758e780"
                ]
            },
            {
                "name": "LummaStealer",
                "count": 553,
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
                "count": 412,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "031af28814511239c0172b71c2c5092660676632",
                    "736a1766d64ab37f96483dcbcd159c86fc49834e",
                    "fb65cb3929bf5df8ed6de3cb5b2c6b87b3f6e3d9"
                ]
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious URLs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": "malware_download",
        "totalAttacksThisHour": 41381,
        "lastCalculated": "2026-06-16 18:32 IST"
    }
};
