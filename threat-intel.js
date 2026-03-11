// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-03-11T14:26:45.675555+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-03-11T14:26:45.399526+05:30",
    "lastUpdatedFormatted": "Mar 11, 2026 at 02:26 PM IST",
    "comparisonPeriod": "Mar 10 \u2013 Mar 11, 2026",
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
                "hxxps://www[.]roblox[.]com[.]bn/users/266678570292/profile",
                "hxxps://roblox[.]com[.]ge/users/4558471406/profile",
                "hxxps://giddyddev[.]vercel[.]app/",
                "hxxps://en-ledgerlive[.]pages[.]dev/",
                "hxxps://pcdosilva01-spec[.]github[.]io/instagram/"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 574,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 574,
                "newInLastHour": 31,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"899f9c6fec07167f73bb346eb632a5494fa440bd14651da6cb0e21cbc9b69644",
                " \"835734079549b6932e3512b705eb51e4b051622f81f3e541f1ed041c2fb8b813",
                " \"2d0f49b4f602791d7341a1ca350e84d8ea622cfc09928b8d3f1df5ce48a11bc1",
                " \"029a0752ff7980c7548f57db44d530214e4c61783b81c0f66e4e8b52987a9031",
                " \"4b91b0281194181d282d3cbbf322a654bb99b88f6361e7c5b18762fa0dcbbfad"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1536,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1536,
                "newInLastHour": 6,
                "lastUpdate": "just now"
            },
            "types": [
                "ip-range"
            ],
            "sampleIndicators": [
                "1.10.16.0/20",
                "1.19.0.0/16",
                "1.32.128.0/18",
                "2.56.192.0/22",
                "2.57.122.0/24"
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
                "1[.]12[.]64[.]5",
                "1[.]15[.]118[.]23",
                "1[.]170[.]227[.]213",
                "1[.]170[.]47[.]69",
                "1[.]177[.]162[.]3"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 7411,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 7411,
                "newInLastHour": 7411,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]15[.]136[.]28",
                "1[.]164[.]175[.]119",
                "1[.]168[.]217[.]136",
                "1[.]192[.]189[.]251",
                "1[.]214[.]197[.]163"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 19069,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 19069,
                "newInLastHour": 19069,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://wire2spell[.]com/1[.]rar",
                "hxxps://spjx-1k1[.]pages[.]dev/download/android%E7%89%88[.]zip",
                "hxxp://109[.]236[.]48[.]121/kswapd1",
                "hxxp://109[.]236[.]48[.]121/vredisd0",
                "hxxp://109[.]236[.]48[.]121/ethd0"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 1102,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 1102,
                "newInLastHour": 1100,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"rkxv[.]keysum[.]in[.]net\"",
                " \"64[.]81[.]30[.]113:80\"",
                " \"pages[.]edenstanley[.]co[.]uk\"",
                " \"genefrost[.]keysum[.]in[.]net\"",
                " \"188[.]227[.]16[.]6:443\""
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
            "iocCount": 9229,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 9229,
                "newInLastHour": 35,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "8b47871555b697ac34385dd0622ef77a0ff99d65",
                "b918317471273f6346359afabcc1f14c4d22ebfb",
                "7692e8ab3cd18c1bd81d8541f62628560c2abf21",
                "56bad084f7d679dfddbe0f1ac2254b191051d348",
                "363c5465989001701bfd2de6993628e0264dc7e7"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 46661,
            "activeSources": 8,
            "criticalAlerts": 28756,
            "activeCampaigns": 203
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 19584,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "C2",
                "count": 9172,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 497,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Phishing",
                "count": 302,
                "trend": "stable",
                "percentage": 0
            }
        ],
        "targetedSectors": [
            {
                "name": "General",
                "percentage": 97
            },
            {
                "name": "Tech",
                "percentage": 2
            },
            {
                "name": "Finance",
                "percentage": 0
            }
        ],
        "campaigns": [
            {
                "name": "malware_download",
                "count": 18951,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://222[.]139[.]96[.]129:58743/bin[.]sh",
                    "hxxp://59[.]97[.]251[.]72:56065/i",
                    "hxxps://small-hub[.]silvura[.]in[.]net/verification[.]google"
                ]
            },
            {
                "name": "CINS Threat List",
                "count": 15000,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]12[.]64[.]5",
                    "1[.]15[.]118[.]23",
                    "1[.]170[.]47[.]69"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1530,
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
                "count": 1386,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "e074dd74eb8eb98468a94eb43b3487fe2b7f5980",
                    "d5a586a42fd4e36396467ae8d16045a5efd6bada",
                    "b4f112278f6f59e5e9d0a2aeb252c111a3ae8603"
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
                "count": 631,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "581cff3c3ff5140030c1b2dae80093f37df765df",
                    "6351234662461217b8b3178bd777b2dffe766ead",
                    "6b58bfd60fc3150331254a46d2e75f0856f5d0ae"
                ]
            },
            {
                "name": "LummaStealer",
                "count": 539,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "f9e8d701de1740086da792e2c9be70df261e1832",
                    "20f30e05d2a2de117bdad78811946e112dc4dd6c",
                    "2987e30402370bdcbf291aedc9cd52a9a79bda0c"
                ]
            },
            {
                "name": " \"js.clearfake\"",
                "count": 417,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"small-hub[.]silvura[.]in[.]net\"",
                    " \"deep-sea[.]estoria[.]in[.]net\"",
                    " \"sunny9[.]estoria[.]in[.]net\""
                ]
            },
            {
                "name": "Vidar",
                "count": 393,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "597545892f122729047032705d557fe787138c32",
                    "8af633744198ffd5bb1e437173eb0292f95c668e",
                    "edda834f9d99ba5d22b01adfab9c69873fa7c47c"
                ]
            },
            {
                "name": "Rhadamanthys",
                "count": 355,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "f999c0da0e983becc1c935444c5e609be26b0bcf",
                    "4101579ae950c954fc1096adf43bdefcf0364cfd",
                    "0c3ee8188ce35b6bb11d5b12a0e1e28310188b4e"
                ]
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious IPs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": "SSH Attacks",
        "totalAttacksThisHour": 42957,
        "lastCalculated": "2026-03-11 14:26 IST"
    }
};
