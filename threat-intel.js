// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-08-22T18:26:04.172074+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-08-22T18:26:03.834291+05:30",
    "lastUpdatedFormatted": "Aug 22, 2026 at 06:26 PM IST",
    "comparisonPeriod": "Aug 21 \u2013 Aug 22, 2026",
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
                "hxxps://api[.]msuto[.]com/",
                "hxxp://send-usdt-9999[.]netlify[.]app/",
                "hxxp://send-usdt-1-chi[.]vercel[.]app/",
                "hxxps://dau-ug-koreatyujdjhdjuuej6664746637-chi[.]vercel[.]app/?naps",
                "hxxp://www[.]undianshopee-2021[.]blogspot[.]com/"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 775,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 775,
                "newInLastHour": 80,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"34f42cdd83f22d56687585e1491336828bc3931bb3dfef05183a7db4ae39e856",
                " \"9d86ff6676fc5cb678c49c07ea88731b7016710b5a9666882042cbce1e3c51f2",
                " \"44c79975608861ee3a4bc452a4d643316d1d09641d40d8c9a63ed7536f3821a7",
                " \"b3aa80f62cf946fa6d290d17d895c2885c8c628e698a786549a31f28bfd9aaa1",
                " \"496f3cba557efd0d708b008b906c45b985b996905b2f8eb922a23b892b57cfdf"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1687,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1687,
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
                "1[.]119[.]158[.]77",
                "1[.]15[.]14[.]29",
                "1[.]188[.]101[.]117",
                "1[.]188[.]101[.]185",
                "1[.]188[.]29[.]48"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 5223,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 5223,
                "newInLastHour": 5223,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]14[.]64[.]225",
                "1[.]20[.]150[.]200",
                "1[.]20[.]215[.]65",
                "1[.]209[.]110[.]147",
                "1[.]214[.]214[.]114"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 16573,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 16573,
                "newInLastHour": 16573,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://180[.]252[.]216[.]68:38543/i",
                "hxxps://munihuacho[.]gob[.]pe/imagenes2/MSI_PRO[.]png",
                "hxxps://eccmice[.]com/dot/n1[.]png",
                "hxxps://eccmice[.]com/dot/mk4[.]png",
                "hxxps://eccmice[.]com/dot/mb[.]png"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 5267,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 5267,
                "newInLastHour": 5207,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"176[.]53[.]159[.]222:3334\"",
                " \"176[.]53[.]159[.]222:3333\"",
                " \"hxxps://pullout[.]ezgateway[.]net:7443/hype/ws\"",
                " \"pullout[.]ezgateway[.]net\"",
                " \"bogawacu[.]workers[.]dev\""
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
            "iocCount": 10520,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 10520,
                "newInLastHour": 14,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "9c0a9291be46e42b67835dff9e6c767fd6660287",
                "19cf66baa4727b080e283d10284993170c9b462b",
                "150e9fffc913a1c87bf94e7f2ad0354d4b6afea1",
                "01162aa2c2be7f9d16f646b94a1245726c68b110",
                "d8bdc29b8e9cdd5a849185ca6042d9c6f90d12e7"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 49443,
            "activeSources": 8,
            "criticalAlerts": 27678,
            "activeCampaigns": 231
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 17186,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "C2",
                "count": 10492,
                "trend": "up",
                "percentage": 442
            },
            {
                "category": "Botnet",
                "count": 4095,
                "trend": "stable",
                "percentage": -1
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
                "count": 16358,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://60[.]18[.]84[.]125:39736/bin[.]sh",
                    "hxxp://125[.]47[.]87[.]135:56962/i",
                    "hxxp://196[.]190[.]105[.]170:51134/i"
                ]
            },
            {
                "name": "CINS Threat List",
                "count": 15000,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]119[.]158[.]77",
                    "1[.]180[.]190[.]250",
                    "1[.]180[.]247[.]82"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1698,
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
                "count": 1439,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "7f44d36f1f6bd375ba4e4a7866328a76047ce498",
                    "f351f7dbe9c583f75758b39cd307f5359d110c73",
                    "7bf78d44f61a05e919479a1cf3e0ce158a50a0c6"
                ]
            },
            {
                "name": " \"win.cobalt_strike\"",
                "count": 1319,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"206[.]237[.]27[.]61:443\"",
                    " \"206[.]237[.]27[.]61:80\"",
                    " \"199[.]187[.]25[.]93:443\""
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
                "count": 729,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "0bb977bf9e0950a1a818660dde009ac9934bd1e2",
                    "0f47d296ca2a764238bfd644c7b716cffafa1352",
                    "aa50e1b4a6e7c66ba2ce4c1c82e62f8d74cd7202"
                ]
            },
            {
                "name": "QuasarRAT",
                "count": 698,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "9b4c3ff8dc5891693f443320e3c1167c7cebe2b7",
                    "0f1b05653c3b3ab3bb4ecd772dd024668cbe8df1",
                    "b364395fee8c2e4c9eaf9a2531f6f7ac7bf8e4ae"
                ]
            },
            {
                "name": "LummaStealer",
                "count": 558,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "a45080c92a0b2314966517a4643ebf280e88a11b",
                    "501d817bb1780acfe5e47082c43472bda8068e4d",
                    "2beac2ee8b2fe7625d4de9f5381d37f200965f91"
                ]
            },
            {
                "name": "ConnectWise",
                "count": 469,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "b94eb3bcd4a57442c30e14dd2067b0c6c46d9619",
                    "0b92ba05df90855d90170858ba91680d33f76e0f",
                    "0b7abd7fefffcfe53a7ae01594e23d9488a214b4"
                ]
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious URLs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": "malware_download",
        "totalAttacksThisHour": 42402,
        "lastCalculated": "2026-08-22 18:26 IST"
    }
};
