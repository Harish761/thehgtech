// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-10-08T04:45:31.768540+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-10-08T04:45:31.300619+05:30",
    "lastUpdatedFormatted": "Oct 08, 2026 at 04:45 AM IST",
    "comparisonPeriod": "Oct 07 \u2013 Oct 08, 2026",
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
                "hxxp://www[.]csverifyme[.]com/",
                "hxxps://www[.]mazonniraq[.]com/",
                "hxxps://mmmm-nu-eight[.]vercel[.]app/",
                "hxxp://www[.]comcastinfoupdatesnow[.]weebly[.]com/",
                "hxxp://moonpay-commerce-ijsgokz66-heliofi[.]vercel[.]app/"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 1347,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 1347,
                "newInLastHour": 27,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"c2e709c9d1de36e3a228e71d6ae7920c9f2e84fa73691508f8b73ea35855d6f7",
                " \"8b0b07aa426d0a1a2ce43412cd65d3541cda9ca38d2d8ba2ee6be09033f717da",
                " \"2782f0971bbab49699fb228e8c68b71b116f508b14ec5eb2e5774653e152c2ba",
                " \"d082bed899d8f975f201975f3c0517debd094cf40630649283de097b0361b8fc",
                " \"143bf4866461a98e05b0b0ea3d68dcbf070bf98f65e8627890d070591bb4b41f"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 520,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 520,
                "newInLastHour": 0,
                "lastUpdate": "just now"
            },
            "types": [
                "ip-range"
            ],
            "sampleIndicators": [
                "2.26.75.0/24",
                "2.27.5.0/24",
                "2.27.62.0/24",
                "2.58.56.0/24",
                "2.59.152.0/24"
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
                "1[.]192[.]129[.]106",
                "1[.]193[.]63[.]138",
                "1[.]215[.]138[.]43"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 4816,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 4816,
                "newInLastHour": 4816,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]0[.]164[.]165",
                "1[.]117[.]24[.]10",
                "1[.]14[.]192[.]95",
                "1[.]14[.]240[.]247",
                "1[.]15[.]221[.]192"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 31461,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 31461,
                "newInLastHour": 31461,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://222[.]79[.]177[.]52:34777/i",
                "hxxp://61[.]52[.]132[.]92:56698/i",
                "hxxp://115[.]57[.]255[.]84:48268/bin[.]sh",
                "hxxp://119[.]179[.]253[.]121:44046/i",
                "hxxp://219[.]157[.]67[.]216:44221/i"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 8409,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 8409,
                "newInLastHour": 7346,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"hxxps://aacarrentals[.]com/\"",
                " \"aacarrentals[.]com\"",
                " \"tivex[.]store\"",
                " \"buqusily[.]workers[.]dev\"",
                " \"3hgcabfd1k[.]workers[.]dev\""
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
            "iocCount": 10714,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 10714,
                "newInLastHour": 18,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "001a8f07b150e2b1d6bcb715fd95c20a1e24dac3",
                "97b346a6656f38507fae979537c0baa86186a2d7",
                "a095f06a7ac8b272c1dd2e14e3b2508f4e4f86e3",
                "59478ff95804dce8ca9ac41fab9bee313879a882",
                "0f7363fdd9210d5cdcc0c7fa60a88b4a582fef18"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 69160,
            "activeSources": 8,
            "criticalAlerts": 43685,
            "activeCampaigns": 301
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 32801,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "C2",
                "count": 10884,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 4357,
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
                "count": 31421,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://91[.]92[.]242[.]236/files-129312398/files/file_a91bba92fab4558e[.]exe",
                    "hxxp://78[.]38[.]123[.]220:3363/i",
                    "hxxp://42[.]177[.]197[.]176:45748/bin[.]sh"
                ]
            },
            {
                "name": "CINS Threat List",
                "count": 15000,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]15[.]14[.]29",
                    "1[.]179[.]41[.]48",
                    "1[.]188[.]103[.]91"
                ]
            },
            {
                "name": " \"unknown_loader\"",
                "count": 1788,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"www[.]crookedhousebooks[.]com\"",
                    " \"www[.]daveshootsbookseller[.]com\"",
                    " \"www[.]diversitybooks[.]com[.]au\""
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
                "count": 1457,
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
                "count": 1285,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"114[.]215[.]184[.]158:8000\"",
                    " \"hxxp://69[.]49[.]229[.]88:443/MQEw\"",
                    " \"154[.]12[.]17[.]20:8080\""
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
                    "4768d20d3072a30b168c650b11a9e4d3e1a0dc60"
                ]
            },
            {
                "name": " \"js.clearfake\"",
                "count": 666,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"alarmas[.]solutions\"",
                    " \"sushe[.]store\"",
                    " \"thesaltedmoon[.]com\""
                ]
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious URLs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": "malware_download",
        "totalAttacksThisHour": 58973,
        "lastCalculated": "2026-10-08 04:45 IST"
    }
};
