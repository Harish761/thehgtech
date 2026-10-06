// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-10-06T05:45:20.556222+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-10-06T05:45:20.226595+05:30",
    "lastUpdatedFormatted": "Oct 06, 2026 at 05:45 AM IST",
    "comparisonPeriod": "Oct 05 \u2013 Oct 06, 2026",
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
                "hxxps://np7gesfzfdeq4j705h275wfucp309y[.]vaultsde[.]de/$falorpro@f25e9550b37acf6b588d58a0af16514c594c[.]com",
                "hxxps://pub-accc003cda5e4254b1e0228215d6bca5[.]r2[.]dev/update/Newserver_index[.]html?eta=pdgxsywgl@lulwytu[.]jsj",
                "hxxps://segurytylandrehotma[.]freepage[.]cc/",
                "hxxps://www[.]roblox[.]ly/users/2201766045/profile",
                "hxxp://roblox[.]com[.]mu/communities/1597305904/NaowiiiClothes"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 1098,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 1098,
                "newInLastHour": 183,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"df4c8d227144d67603d1b6528e9d5d76d510e7e1fef18549553c383328c1a9c4",
                " \"a525c76919698b097df01e31958a58ad700c2faaf0d927961b67c5fbb7f67069",
                " \"128a84a95534c6fa359c34d636a23926fb1679ba7e9586db1988185b8bbc4c07",
                " \"85ee6a49c511123c6a108cf6e6b3ba1c00b38d28af3d053a5146ca78fb8df3be",
                " \"b1ccbd09a9fd9f5bd46b40a330978f0b189a0a27e5e30844582afecccc5ab452"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1636,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1636,
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
                "1[.]15[.]11[.]89",
                "1[.]193[.]56[.]152",
                "1[.]213[.]214[.]233",
                "1[.]231[.]191[.]118"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 3079,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 3079,
                "newInLastHour": 3079,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]0[.]164[.]165",
                "1[.]117[.]24[.]10",
                "1[.]14[.]240[.]247",
                "1[.]203[.]186[.]149",
                "1[.]214[.]214[.]114"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 16784,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 16784,
                "newInLastHour": 16784,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://105[.]225[.]101[.]223:58213/bin[.]sh",
                "hxxp://27[.]215[.]9[.]11:37368/i",
                "hxxp://78[.]187[.]17[.]22:44505/i",
                "hxxp://61[.]162[.]131[.]138:56605/bin[.]sh",
                "hxxp://42[.]57[.]21[.]135:48888/bin[.]sh"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 8601,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 8601,
                "newInLastHour": 5514,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"n37sj661[.]sensa138[.]pro\"",
                " \"frpdanismanlik[.]com\"",
                " \"gotexasholdempoker[.]com\"",
                " \"www[.]formpacplasticsaust[.]com[.]au\"",
                " \"greenshop[.]lv\""
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
            "iocCount": 10893,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 10893,
                "newInLastHour": 24,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "6def2654b3b68fb89142113e6c5ad1b9e866134c",
                "920de17c5bfce79df2950dacfb6a1f473e918edc",
                "184e5ede55f2eaf584182989d8a41411b6d34ae0",
                "77c620cd80ac90a263808350b4133b607d973373",
                "4e01833ef19ddbe7747012a4b08e54601bc318ae"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 54372,
            "activeSources": 8,
            "criticalAlerts": 28923,
            "activeCampaigns": 275
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 18067,
                "trend": "stable",
                "percentage": 4
            },
            {
                "category": "C2",
                "count": 10856,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 4184,
                "trend": "stable",
                "percentage": 0
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
                "count": 16878,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://64[.]89[.]161[.]65/sostener[.]vbs",
                    "hxxps://64[.]89[.]161[.]65/proceso[.]vbs",
                    "hxxps://64[.]89[.]161[.]65/sostener1[.]vbs"
                ]
            },
            {
                "name": "CINS Threat List",
                "count": 15000,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]15[.]11[.]89",
                    "1[.]15[.]14[.]29",
                    "1[.]192[.]129[.]106"
                ]
            },
            {
                "name": " \"elf.mirai\"",
                "count": 1910,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"feeb166804622230cef1cf32abb6063d6b49b03f64a6cf27d5b4c5862a300ac4\"",
                    " \"860932ed9d256e4eb0003292915120d1eb8f62f5a86df9846b4b9dee792d12f8\"",
                    " \"9bf7db6ae7e33a99e034032940fbf703891584289c4820adf387d3d31a3e7285\""
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1638,
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
                "name": " \"win.asyncrat\"",
                "count": 1388,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"c61337c8ddc16d4c2d5cbb35bb1211cf\"",
                    " \"961466f8dc90b322c4e108432b6d7bf4e4f1545e\"",
                    " \"846e2b555e7c16d538c1e84b38bcb26a\""
                ]
            },
            {
                "name": " \"win.cobalt_strike\"",
                "count": 1293,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"101[.]34[.]208[.]175:18317\"",
                    " \"2ff26540ebb9100dae76a2ae040108ba9338113c\"",
                    " \"e4a34372eab0832d0682fa986a8e0b97\""
                ]
            },
            {
                "name": "Vidar",
                "count": 812,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "6def2654b3b68fb89142113e6c5ad1b9e866134c",
                    "f8f56c66c440df5666400e34a532c04d6ca4e5b0",
                    "a06e3d9da60d6d6b57b1ef0bc4bf4a5187196fef"
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
                "count": 715,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "b292d5884328be709c0c79ffd7c82c3fe9846417",
                    "eabc77465bebeb1b8b4980dbaa185cfcf64b4f92",
                    "4768d20d3072a30b168c650b11a9e4d3e1a0dc60"
                ]
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious URLs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": "SSH Attacks",
        "totalAttacksThisHour": 40891,
        "lastCalculated": "2026-10-06 05:45 IST"
    }
};
