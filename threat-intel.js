// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-08-12T02:28:37.622124+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-08-12T02:28:37.250990+05:30",
    "lastUpdatedFormatted": "Aug 12, 2026 at 02:28 AM IST",
    "comparisonPeriod": "Aug 11 \u2013 Aug 12, 2026",
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
                "hxxps://www[.]robiox[.]com[.]ps/users/8151803013/profile",
                "hxxps://bd3685[.]icefactory[.]cl/",
                "hxxps://0ee24f[.]icefactory[.]cl/",
                "hxxps://81cc79[.]icefactory[.]cl/",
                "hxxps://d51b01[.]icefactory[.]cl/"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 2080,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 2080,
                "newInLastHour": 72,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"ea27fa689b84ea7b60036e5fa33b8bd274f4d859f7beed73ac633fc052c8ed16",
                " \"533a79c053dd3c1351d7775f87e92ec012b7e97fdf1b0293a39e98508a41a609",
                " \"1ff9fc3b5964a1642acfd5001a35f65ec5eb70e5d1bf02b8bcd5289a1b61ae2d",
                " \"53d3d221367d88796ef4521042915ab765da70661fb38eb72953ac2cb294e5d1",
                " \"738a2fe1012eb3d25f9a0e4c340047d887343c836380218bf2aa7093d95e3589"
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
                "newInLastHour": 12,
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
                "1[.]119[.]158[.]77",
                "1[.]120[.]123[.]117",
                "1[.]140[.]3[.]11",
                "1[.]192[.]129[.]106",
                "1[.]192[.]46[.]208"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 10562,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 10562,
                "newInLastHour": 10562,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]0[.]164[.]165",
                "1[.]12[.]233[.]51",
                "1[.]14[.]106[.]163",
                "1[.]14[.]165[.]193",
                "1[.]14[.]64[.]225"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 16985,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 16985,
                "newInLastHour": 16985,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://175[.]148[.]158[.]154:36869/i",
                "hxxp://163[.]142[.]93[.]187:39139/bin[.]sh",
                "hxxp://112[.]251[.]225[.]122:36907/i",
                "hxxp://125[.]45[.]148[.]93:57695/bin[.]sh",
                "hxxp://175[.]148[.]158[.]154:36869/bin[.]sh"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 4341,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 4341,
                "newInLastHour": 4263,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"lnwmrko[.]buy-ignitra[.]com\"",
                " \"wzjhif[.]enus-slimsounds[.]com\"",
                " \"46[.]246[.]14[.]13:7044\"",
                " \"yoouslot88[.]org\"",
                " \"29e0fc6e480dc73a81e1162b614c4aac0b1a2cf93159f8ff43dc2798bbd89171\""
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
            "iocCount": 10368,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 10368,
                "newInLastHour": 79,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "64ba3430f767ced74b2828509a653187e9553971",
                "940df23eebede1e1e33a4c521ba05b4b37d04d68",
                "ffc71a7ba96b8801333ea2b9e7cd05d4cc2f718d",
                "95fcb5ff7bd5e1d06b1e585af4ba3ceb95f01164",
                "1674f349ec288a75ac123a1752d433a21ceddcef"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 50596,
            "activeSources": 8,
            "criticalAlerts": 29319,
            "activeCampaigns": 248
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 19026,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "C2",
                "count": 10293,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 3732,
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
                "name": "malware_download",
                "count": 16976,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://77[.]90[.]185[.]66/mirai[.]arm7",
                    "hxxps://www[.]dropbox[.]com/scl/fi/20bypo9tl56golwmhkuzx/WatchGoParty[.]exe?rlkey=djyz9nidcvc5e7ojr8adaoiaf&st=9ptdt498&dl=1",
                    "hxxps://github[.]com/faraza-1/chillvrmod[.]com/releases/download/v1[.]0[.]0/ChillVROut[.]exe"
                ]
            },
            {
                "name": "CINS Threat List",
                "count": 15000,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]120[.]123[.]117",
                    "1[.]12[.]229[.]231",
                    "1[.]15[.]14[.]29"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1674,
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
                "count": 1432,
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
                "count": 1307,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"178[.]128[.]80[.]204:8080\"",
                    " \"192[.]252[.]179[.]24:22\"",
                    " \"43[.]225[.]157[.]17:8009\""
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
                "count": 693,
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
                "name": "Vidar",
                "count": 656,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "95fcb5ff7bd5e1d06b1e585af4ba3ceb95f01164",
                    "1674f349ec288a75ac123a1752d433a21ceddcef",
                    "664729bef77ee9c9f2f523fc1305ef65fa05dbae"
                ]
            },
            {
                "name": "LummaStealer",
                "count": 556,
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
                "name": " \"n/a",
                "count": 551,
                "types": [
                    "hash"
                ],
                "sampleIndicators": [
                    " \"22630f34330fd5259344e237f3c977f7dd9f23047cf2bb866adff661f9eea5fd",
                    " \"1c3512436ae699c6d4ddb61628a030b90c85dae2c0465e879a815b0d3858c07f",
                    " \"109e7e69eb96d600c3e3798f59af8a0f57f5f8f1dad2dd789360294fe7c2c2c2"
                ]
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious IPs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": " \"n/a",
        "totalAttacksThisHour": 47278,
        "lastCalculated": "2026-08-12 02:28 IST"
    }
};
