// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-07-04T15:51:36.652613+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-07-04T15:51:36.336367+05:30",
    "lastUpdatedFormatted": "Jul 04, 2026 at 03:51 PM IST",
    "comparisonPeriod": "Jul 03 \u2013 Jul 04, 2026",
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
                "hxxp://parkom[.]xyz/",
                "hxxp://bervani-gld-zarqumi-r2x6hz83[.]pages[.]dev/",
                "hxxps://www[.]robiox[.]com[.]py/communities/214543246234/_Xx",
                "hxxps://661815[.]com/",
                "hxxps://j110l[.]vip/"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 734,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 734,
                "newInLastHour": 63,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"10d8981d849d6562387d7eba486a0236512b8e74565af2ab4b151eca6793eda5",
                " \"eb3731e73016cfeb6df505636cda57c77059adb9de01f23710b4cd4702245a01",
                " \"1fc99d89a97b871588d69c79d880a3dda5242177cb2dd5e5874519f2bab0903e",
                " \"02f03cb49b63775846469d0c0b51f38c322ca24d8a19004468594ed87e443100",
                " \"e3d3a4fb9f550deb66947deaa5f21ca1bf84a74ccf413d77efc33e3300bc3764"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1681,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1681,
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
                "1[.]156[.]34[.]93",
                "1[.]159[.]81[.]89",
                "1[.]165[.]8[.]160",
                "1[.]192[.]178[.]255",
                "1[.]192[.]46[.]208"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 4605,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 4605,
                "newInLastHour": 4605,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]0[.]164[.]165",
                "1[.]1[.]220[.]166",
                "1[.]116[.]107[.]99",
                "1[.]12[.]223[.]79",
                "1[.]14[.]151[.]196"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 22313,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 22313,
                "newInLastHour": 22313,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://61[.]53[.]74[.]152:55571/i",
                "hxxp://115[.]48[.]150[.]182:60957/i",
                "hxxp://115[.]48[.]150[.]182:60957/bin[.]sh",
                "hxxp://222[.]138[.]181[.]53:41501/bin[.]sh",
                "hxxp://222[.]138[.]181[.]53:41501/i"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 4080,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 4080,
                "newInLastHour": 3849,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"three[.]followfromapps[.]icu\"",
                " \"goto[.]followfromapps[.]icu\"",
                " \"midpfv[.]xyz\"",
                " \"hxxps://kumlman[.]lol/file[.]js\"",
                " \"159[.]203[.]35[.]164:8080\""
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
            "iocCount": 10099,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 10099,
                "newInLastHour": 1,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "b87dc4ee057f64c6592d11ed074e03caf92e2851",
                "988bb7e571418b2800a0cc2d33a794ecf1eb42a7",
                "a37d8c8b3e427201148b485e4b23a59067fd3812",
                "fa925f013a4c8ed98cda12d1d8f06ef638b11301",
                "6617b3218632fe78cd223bfae98ae55ef69c13c2"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 54084,
            "activeSources": 8,
            "criticalAlerts": 33070,
            "activeCampaigns": 245
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 22993,
                "trend": "stable",
                "percentage": 1
            },
            {
                "category": "C2",
                "count": 10077,
                "trend": "stable",
                "percentage": 1
            },
            {
                "category": "Botnet",
                "count": 3464,
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
                "count": 22270,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxps://kwsgmru[.]btyek[.]click/ee58f8f3-3920-4673-aa28-5a026b0c9226",
                    "hxxp://42[.]86[.]60[.]249:33410/i",
                    "hxxp://222[.]91[.]248[.]119:49113/bin[.]sh"
                ]
            },
            {
                "name": "CINS Threat List",
                "count": 15000,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]156[.]34[.]93",
                    "1[.]159[.]81[.]89",
                    "1[.]165[.]8[.]160"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1681,
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
                "count": 1402,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"45[.]207[.]199[.]148:80\"",
                    " \"223[.]166[.]30[.]24:2082\"",
                    " \"172[.]245[.]226[.]120:80\""
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
                "count": 689,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "ac563907d31a21443760cee92a98b50bba6152aa",
                    "27e3cb5b0043884c7ebc0691e2e73ef3b95339ac",
                    "ae590545961e96de860ea7434c0e8c69b924de6f"
                ]
            },
            {
                "name": "Vidar",
                "count": 627,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "0d9b7493086b8a7b2687ee21026ed1cb8eac55e5",
                    "9970ddeb7d0e2dd711bc2af3646b417b201bfdf2",
                    "5ce60656e1fb7c3a46a0d6f4380613ff856f9f9d"
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
                "count": 435,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "6617b3218632fe78cd223bfae98ae55ef69c13c2",
                    "adee7459752a33ec85d89a1837d84e9e75f8ac6e",
                    "fa1ffe8c35c3aab0195800f52cf831125eeb4698"
                ]
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious URLs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": " \"win.strelastealer\"",
        "totalAttacksThisHour": 46136,
        "lastCalculated": "2026-07-04 15:51 IST"
    }
};
