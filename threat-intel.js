// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-10-09T20:43:58.469949+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-10-09T20:43:58.078028+05:30",
    "lastUpdatedFormatted": "Oct 09, 2026 at 08:43 PM IST",
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
                "hxxps://feybnjuezzdd[.]jimdofree[.]com/",
                "hxxps://ipgrussia[.]run/",
                "hxxps://demspogo[.]com/d/page/login[.]php",
                "hxxps://pay-network[.]vercel[.]app/",
                "hxxp://paypall-login[.]blogspot[.]com/"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 918,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 918,
                "newInLastHour": 117,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"ca91314eb71e95a51202dfa4db5d513893c2abe7cf46f7d0f414ca1c58b7c902",
                " \"ab795b62a3b451aa69a1f580c3ea27b72ffce40fedfda6bc271ed189de2a10d7",
                " \"2dc310b4ce513cb82d9900aaaaae13353e9904750bc5b8c1654e78768b987b53",
                " \"2202bda817d1bb6be4f328045c192afa6ae2d794d3bac633d617f4f4f862f81e",
                " \"01d405d38a39cd42c105fbcba6ac43fd635ab2a15a8b4c2708de4911a85ea2e8"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1676,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1676,
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
                "1[.]12[.]229[.]231",
                "1[.]13[.]156[.]8",
                "1[.]15[.]14[.]29",
                "1[.]192[.]129[.]106",
                "1[.]193[.]58[.]33"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 4328,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 4328,
                "newInLastHour": 4328,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]0[.]164[.]165",
                "1[.]0[.]243[.]191",
                "1[.]14[.]192[.]95",
                "1[.]14[.]240[.]247",
                "1[.]145[.]25[.]235"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 32987,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 32987,
                "newInLastHour": 32987,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxps://downloads[.]go-xlr[.]com/GoXLR[.]zip",
                "hxxps://hardwood-studio-obviously-briefing[.]trycloudflare[.]com/download/winhost",
                "hxxp://175[.]149[.]88[.]179:34166/bin[.]sh",
                "hxxps://github[.]com/riddents/EulenCheats/raw/HEAD/Loader[.]exe",
                "hxxps://github[.]com/wakkaflipps/FiveM-Server-Unban/raw/HEAD/Silentum_Spoofer[.]exe"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 6398,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 6398,
                "newInLastHour": 5710,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"angkasa138cik[.]cyou\"",
                " \"angkasa138come[.]site\"",
                " \"amberden[.]store\"",
                " \"amberblog[.]store\"",
                " \"amberblogs[.]store\""
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
            "iocCount": 10919,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 10919,
                "newInLastHour": 62,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "3f7c12ee118bce0a51bcb4c1896fa9a79b30bfb7",
                "f1007872f795727c952c1f2b20966ec193b646a4",
                "f1d3bed8c625dc1785842ced7f1cf6aadb85942a",
                "f9ec94288d3a56dcecced514f673587156167472",
                "6355bba335e57be21b44a9ed609f549cb1384167"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 67996,
            "activeSources": 8,
            "criticalAlerts": 44577,
            "activeCampaigns": 291
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 33727,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "C2",
                "count": 10850,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 4365,
                "trend": "stable",
                "percentage": 1
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
                "count": 32721,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://113[.]230[.]51[.]234:35025/bin[.]sh",
                    "hxxp://105[.]225[.]46[.]193:36959/bin[.]sh",
                    "hxxp://182[.]123[.]192[.]144:51851/i"
                ]
            },
            {
                "name": "CINS Threat List",
                "count": 15000,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]10[.]206[.]21",
                    "1[.]12[.]229[.]231",
                    "1[.]13[.]156[.]8"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1669,
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
                "count": 1458,
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
                "count": 1292,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"114[.]215[.]184[.]158:7500\"",
                    " \"124[.]221[.]191[.]237:3668\"",
                    " \"1[.]12[.]253[.]219:443\""
                ]
            },
            {
                "name": "Vidar",
                "count": 804,
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
                "count": 714,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "b292d5884328be709c0c79ffd7c82c3fe9846417",
                    "eabc77465bebeb1b8b4980dbaa185cfcf64b4f92",
                    "4768d20d3072a30b168c650b11a9e4d3e1a0dc60"
                ]
            },
            {
                "name": " \"unknown_loader\"",
                "count": 670,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"coppertrack[.]cfd\"",
                    " \"zuma789-z[.]com\"",
                    " \"zypupmp[.]xyz\""
                ]
            },
            {
                "name": " \"win.pure_rat\"",
                "count": 634,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"46[.]151[.]182[.]67:56003\"",
                    " \"45[.]88[.]91[.]164:56002\"",
                    " \"31[.]57[.]147[.]42:443\""
                ]
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious URLs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": "malware_download",
        "totalAttacksThisHour": 58521,
        "lastCalculated": "2026-10-09 20:43 IST"
    }
};
