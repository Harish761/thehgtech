// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-10-06T06:46:26.462702+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-10-06T06:46:26.130739+05:30",
    "lastUpdatedFormatted": "Oct 06, 2026 at 06:46 AM IST",
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
            "iocCount": 1070,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 1070,
                "newInLastHour": 22,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"b21b3c043605ca472da929fa8225bb6d74a9752153fb901377db874bc65d10a7",
                " \"db7496961aa39f63f66dc17ee66d45d3327ae718e55caf15384b70f63e762faf",
                " \"b26587d97ae8aff4d9ab3e848ace294224c9f9e01185e89f3504eed6fc85b7a6",
                " \"70d09f7fa8adaa885f71c811ea8497b424ccd2cdd302b7a70cee9578c52e3821",
                " \"2e890cf52e64b43618b80ac13a6810bd3c9633575b165cc27e96e5ee4610429e"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1585,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1585,
                "newInLastHour": 4,
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
                "1[.]15[.]14[.]29",
                "1[.]193[.]56[.]152",
                "1[.]231[.]191[.]118",
                "1[.]24[.]16[.]10"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 3189,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 3189,
                "newInLastHour": 3189,
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
            "iocCount": 16804,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 16804,
                "newInLastHour": 16804,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://119[.]187[.]177[.]77:40993/bin[.]sh",
                "hxxp://123[.]190[.]226[.]49:38853/bin[.]sh",
                "hxxp://58[.]255[.]41[.]30:55205/bin[.]sh",
                "hxxp://61[.]52[.]158[.]31:46875/bin[.]sh",
                "hxxp://115[.]62[.]56[.]188:60731/bin[.]sh"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 8642,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 8642,
                "newInLastHour": 5299,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"imaginemoi[.]be\"",
                " \"highskyit[.]in\"",
                " \"ibu-bo[.]org\"",
                " \"home-decodesign[.]com\"",
                " \"inver-plan[.]com\""
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
            "iocCount": 10493,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 10493,
                "newInLastHour": 9,
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
            "totalIndicators": 54317,
            "activeSources": 8,
            "criticalAlerts": 28779,
            "activeCampaigns": 275
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 17908,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "C2",
                "count": 10871,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 4175,
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
                "count": 16784,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://105[.]225[.]101[.]223:58213/bin[.]sh",
                    "hxxp://27[.]215[.]9[.]11:37368/i",
                    "hxxp://78[.]187[.]17[.]22:44505/i"
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
                    "1[.]15[.]11[.]89",
                    "1[.]193[.]56[.]152"
                ]
            },
            {
                "name": " \"elf.mirai\"",
                "count": 1914,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"40e18dfbbb8082477c8e5a9a883a0a792c27d858b2918eb2f38df1695070020b\"",
                    " \"700982a7340b326fd1fb402dfab1d7991eb9ff85ba06437457f182ae9f041a88\"",
                    " \"bacd686528120d6216a3354cb4e3aebc16c6eb4e3795bd514d63d748a6098df5\""
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1636,
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
                "count": 1459,
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
                "count": 1386,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"102[.]220[.]160[.]198:2500\"",
                    " \"ae888688[.]com\"",
                    " \"bffx[.]io\""
                ]
            },
            {
                "name": " \"win.cobalt_strike\"",
                "count": 1299,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"43[.]134[.]112[.]45:7500\"",
                    " \"43[.]134[.]112[.]45:80\"",
                    " \"43[.]134[.]112[.]45:8080\""
                ]
            },
            {
                "name": "Vidar",
                "count": 818,
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
                "count": 714,
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
        "totalAttacksThisHour": 40632,
        "lastCalculated": "2026-10-06 06:46 IST"
    }
};
