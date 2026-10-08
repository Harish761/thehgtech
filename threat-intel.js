// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-10-09T02:45:34.970713+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-10-09T02:45:34.607311+05:30",
    "lastUpdatedFormatted": "Oct 09, 2026 at 02:45 AM IST",
    "comparisonPeriod": "Oct 08 \u2013 Oct 09, 2026",
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
                "hxxps://usps-email[.]com/",
                "hxxp://trusted-connection-anchor-182fu9ada8[.]s3[.]eu-west-1[.]amazonaws[.]com/gbp40plrdgwf5icw9h3z[.]html",
                "hxxps://office[.]biogeen[.]sbs/common/federation/oauth2msa",
                "hxxp://inregisterworkshop[.]com/",
                "hxxp://ebqprupn[.]biogeen[.]sbs/oauth20_authorize[.]srf?scope=openid%20profile%20email%20offline_access"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 932,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 932,
                "newInLastHour": 177,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"b7896370f8571cea7df547d342ee13734718ec0260068ce51b01c6aab6e8ccce",
                " \"427a774025774978b7cfd562d32086bbdc89d8ec4fad06c391ac4a55273ec69a",
                " \"e0122dca87d76fe2d0c26763d0c1221e653729785b31813ec66b3df8a9bb7601",
                " \"99ffcf74e73a85220c7837a17b6a0f4e1d60f8bd81f75959f38f5ac1068cec0d",
                " \"94fe66a3b0f22e8e37fd88eacb10f4e6dd57b8d63d18e7a0dc07c13d0679d45f"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1671,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1671,
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
                "1[.]13[.]156[.]8",
                "1[.]179[.]41[.]48",
                "1[.]192[.]129[.]106",
                "1[.]193[.]58[.]33",
                "1[.]193[.]63[.]3"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 4702,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 4702,
                "newInLastHour": 4702,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]0[.]164[.]165",
                "1[.]14[.]192[.]95",
                "1[.]14[.]240[.]247",
                "1[.]145[.]25[.]235",
                "1[.]160[.]214[.]25"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 32973,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 32973,
                "newInLastHour": 32973,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://42[.]229[.]175[.]66:55978/bin[.]sh",
                "hxxp://115[.]48[.]144[.]79:58929/i",
                "hxxp://103[.]111[.]23[.]12:49200/i",
                "hxxp://182[.]116[.]115[.]77:46115/i",
                "hxxp://182[.]127[.]179[.]145:57484/bin[.]sh"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 6518,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 6518,
                "newInLastHour": 5949,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"elset4[.]workers[.]dev\"",
                " \"ik[.]333vip[.]org\"",
                " \"hxxps://ik[.]333vip[.]org/\"",
                " \"176[.]97[.]117[.]157:443\"",
                " \"9x1od7j1[.]musux[.]store\""
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
            "iocCount": 10921,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 10921,
                "newInLastHour": 52,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "6355bba335e57be21b44a9ed609f549cb1384167",
                "09a025b75e698c89b1731847a757ccbc00244f42",
                "678674d7911f8cbb945607e91f8f05e7353be1d2",
                "7145cd3c537c8b6f07d27038330303754fd086cd",
                "1ccf99a4deb337e800230280e82782da64384694"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 67834,
            "activeSources": 8,
            "criticalAlerts": 44351,
            "activeCampaigns": 303
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 33495,
                "trend": "stable",
                "percentage": 1
            },
            {
                "category": "C2",
                "count": 10856,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 4264,
                "trend": "stable",
                "percentage": -1
            },
            {
                "category": "Phishing",
                "count": 301,
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
                "count": 32606,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://210[.]208[.]110[.]147:47846/bin[.]sh",
                    "hxxp://115[.]52[.]197[.]166:50949/bin[.]sh",
                    "hxxp://222[.]137[.]72[.]136:54589/i"
                ]
            },
            {
                "name": "CINS Threat List",
                "count": 15000,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]179[.]41[.]48",
                    "1[.]192[.]129[.]106",
                    "1[.]193[.]58[.]33"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1670,
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
                "count": 1456,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "58b3990b07e9caaa2c504a5b9759d14eefcbc5e5",
                    "64c5f719aa0111be2ac04d785a8904b5baa22a88",
                    "5fe196813d0bf092a5d8f3ef550fe959a86ccf87"
                ]
            },
            {
                "name": " \"win.cobalt_strike\"",
                "count": 1288,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"49[.]235[.]158[.]141:8080\"",
                    " \"49[.]235[.]158[.]141:80\"",
                    " \"49[.]235[.]158[.]141:443\""
                ]
            },
            {
                "name": "Vidar",
                "count": 819,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "0f7363fdd9210d5cdcc0c7fa60a88b4a582fef18",
                    "6bfc8dafb875c3e2ae6476df215805eb15298cbb",
                    "7a9913813778b16a5bf57aeb7dea4c93340c79c0"
                ]
            },
            {
                "name": " \"unknown_loader\"",
                "count": 815,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"trinea[.]cn\"",
                    " \"verbum[.]cz\"",
                    " \"vessant[.]com\""
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
                "count": 713,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "b292d5884328be709c0c79ffd7c82c3fe9846417",
                    "eabc77465bebeb1b8b4980dbaa185cfcf64b4f92",
                    "c234496c7b0abcd873bb6bb5a54288b6d340b6ff"
                ]
            },
            {
                "name": " \"win.pure_rat\"",
                "count": 625,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"93[.]152[.]214[.]174:443\"",
                    " \"84[.]200[.]91[.]170:56002\"",
                    " \"80[.]76[.]49[.]209:8080\""
                ]
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious URLs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": "malware_download",
        "totalAttacksThisHour": 59159,
        "lastCalculated": "2026-10-09 02:45 IST"
    }
};
