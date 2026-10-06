// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-10-06T16:42:06.007146+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-10-06T16:42:05.768073+05:30",
    "lastUpdatedFormatted": "Oct 06, 2026 at 04:42 PM IST",
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
            "iocCount": 1455,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 1455,
                "newInLastHour": 627,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"7ef0b121f0059de02cea8c1280f4fdd0c440b057346984bfcf8606a2a66a8148",
                " \"c27403be262aec312ce680d4e89871f00d114bee6c7872374226dc315c9db74e",
                " \"0b5aea8e222b76dd2c7ab384b0909f099c4a9a39209e11677cfd5154535e9384",
                " \"d704c8f0869ec2026e2361b8d7de62a47f0c3c2fcecd65a15d1aef5b500b2a1b",
                " \"d1183f5ef4afd2710c31dc8274f861e4ce1f46ee0aad4234fab75d1844ebe2e5"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1640,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1640,
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
                "1[.]188[.]103[.]91",
                "1[.]193[.]56[.]152",
                "1[.]193[.]63[.]138",
                "1[.]203[.]186[.]149",
                "1[.]204[.]53[.]109"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 3855,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 3855,
                "newInLastHour": 3855,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]0[.]164[.]165",
                "1[.]117[.]24[.]10",
                "1[.]14[.]240[.]247",
                "1[.]15[.]221[.]192",
                "1[.]203[.]186[.]149"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 30951,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 30951,
                "newInLastHour": 30951,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://219[.]156[.]51[.]237:58720/i",
                "hxxp://61[.]52[.]47[.]76:37443/bin[.]sh",
                "hxxp://115[.]49[.]211[.]221:48972/i",
                "hxxp://219[.]155[.]228[.]240:45970/i",
                "hxxp://120[.]82[.]203[.]7:48991/bin[.]sh"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 8588,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 8588,
                "newInLastHour": 5644,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"packupremovals[.]co[.]uk\"",
                " \"31[.]59[.]39[.]40:4545\"",
                " \"155[.]103[.]71[.]210:55280\"",
                " \"78[.]40[.]209[.]168:2404\"",
                " \"8m6jizpz[.]sensa138[.]pro\""
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
            "iocCount": 10894,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 10894,
                "newInLastHour": 419,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "2c32691ea854fdd88474aec7283283c4e4fe9d10",
                "d6b483d29d98e74b22cf0275061f76fbb0574176",
                "0446b968d2664c7d195cb91e4938bf6b92d819da",
                "85eeedf7693129c522860142f2eb0c84f5fb355e",
                "6917195681c5f23ea6ebabed360e26ab7ff93a67"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 53899,
            "activeSources": 8,
            "criticalAlerts": 28371,
            "activeCampaigns": 272
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 17900,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "C2",
                "count": 10471,
                "trend": "stable",
                "percentage": -3
            },
            {
                "category": "Botnet",
                "count": 4177,
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
                "count": 16804,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://119[.]187[.]177[.]77:40993/bin[.]sh",
                    "hxxp://123[.]190[.]226[.]49:38853/bin[.]sh",
                    "hxxp://58[.]255[.]41[.]30:55205/bin[.]sh"
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
                    "1[.]15[.]14[.]29",
                    "1[.]193[.]56[.]152"
                ]
            },
            {
                "name": " \"elf.mirai\"",
                "count": 1919,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"4b76253c08ef2236b54014b96f910a3d85b3443e48a207917364e9c087b92e10\"",
                    " \"09a44d593c4310d1f14c32bd15842f4eeacee7977ed3d1295a5ba6d58e24407e\"",
                    " \"02f83c736dfa6efef7a46dbf7a2ff0bdf75c49ec67afcadcd90337f00a0e5a01\""
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1585,
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
                "count": 1449,
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
                "count": 728,
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
                "name": "QuasarRAT",
                "count": 691,
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
        "fastestRisingThreat": "malware_download",
        "totalAttacksThisHour": 56856,
        "lastCalculated": "2026-10-06 16:42 IST"
    }
};
