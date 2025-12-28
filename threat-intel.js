// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2025-12-28T18:28:08.164257+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2025-12-28T18:28:07.825700+05:30",
    "lastUpdatedFormatted": "Dec 28, 2025 at 06:28 PM IST",
    "comparisonPeriod": "Dec 27 \u2013 Dec 28, 2025",
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
                "hxxps://shortlink[.]st/Q-z6f1t8",
                "hxxps://roblox[.]com[.]ge/users/8694929173/profile",
                "hxxp://www[.]amazon-clone-peach-eta[.]vercel[.]app/",
                "hxxps://roblox[.]com[.]ge/users/8225787955/profile",
                "hxxps://ledgor-lives-logins-io[.]pages[.]dev/"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 1410,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 1410,
                "newInLastHour": 73,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"7a037482e4045162e1647e6196f2af5b69ebefa1a0a3c865fe8b2f570c0b1598",
                " \"a71b53d55f537c34015bbf3fb99888033d58863fbc1ac7ed8a17af94f5d04bf1",
                " \"7990be030c8ffcdadc26f43adea115dfd7b705c24be1dcf1ebdf322f4b5f27bd",
                " \"f8c1bb3207f7a67f5d57c990b6b17220b03cdf833742899431a6d53c7fca89af",
                " \"cb3ccebc84bf047a11cc16e738f0822a2b62c6b840e1bba795bfcb65b7e990d2"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1474,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1474,
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
                "1[.]15[.]135[.]58",
                "1[.]15[.]14[.]29",
                "1[.]15[.]149[.]209",
                "1[.]176[.]134[.]251",
                "1[.]177[.]162[.]2"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 5215,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 5215,
                "newInLastHour": 5215,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]14[.]12[.]141",
                "1[.]145[.]101[.]122",
                "1[.]161[.]62[.]69",
                "1[.]197[.]102[.]62",
                "1[.]214[.]197[.]163"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 26994,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 26994,
                "newInLastHour": 26994,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://115[.]63[.]200[.]128:57270/bin[.]sh",
                "hxxp://hostphpwindowsdriversappssi[.]duckdns[.]org/Nueva%20carpeta/VmDocumentos[.]txt",
                "hxxps://archive[.]org/download/optimized_msi_20251227/optimized_MSI[.]png",
                "hxxps://files[.]catbox[.]moe/01hhn3[.]bat",
                "hxxps://files[.]catbox[.]moe/pxznk9[.]bat"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 667,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 667,
                "newInLastHour": 626,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"104[.]194[.]140[.]142:8443\"",
                " \"9pm93zo8[.]br1ghtf0rm[.]ru\"",
                " \"a2[.]nbdsnb2[.]top\"",
                " \"nmm9i8ce[.]br1ghtf0rm[.]ru\"",
                " \"ei353i4i[.]br1ghtf0rm[.]ru\""
            ]
        },
        "Feodo Tracker": {
            "description": "Botnet C2 server IPs from Feodo Tracker. Tracks Dridex, Emotet, TrickBot, QakBot, and BazarLoader.",
            "website": "https://feodotracker.abuse.ch/",
            "updateFrequency": "Hourly",
            "iocCount": 3,
            "iocDataUrl": "https://thehgtech.com/ioc-data/feodo-tracker.json",
            "stats": {
                "total": 3,
                "newInLastHour": 3,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "15[.]204[.]219[.]215",
                "162[.]243[.]103[.]246",
                "167[.]86[.]75[.]145"
            ]
        },
        "SSL Blacklist": {
            "description": "Malicious SSL certificates used by botnet C2 servers. Helps detect encrypted malware communications.",
            "website": "https://sslbl.abuse.ch/",
            "updateFrequency": "Daily",
            "iocCount": 8689,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 8689,
                "newInLastHour": 4,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "2be6327a2b03aed6322898941f4e6c7ca29de8e5",
                "12184cf278f7a334418580b93a2459f0358fd9fd",
                "733f676f539126a33ba45b6e2c8d3c9aee267dd8",
                "9e3a099b0392f90a85defa0a590527fc24c856ac",
                "18f6fb081557a654b26c348d6d9e6bffeb064e6f"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 54506,
            "activeSources": 8,
            "criticalAlerts": 37047,
            "activeCampaigns": 165
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 28378,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "C2",
                "count": 8669,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 379,
                "trend": "stable",
                "percentage": 7
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
            }
        ],
        "campaigns": [
            {
                "name": "malware_download",
                "count": 26900,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://42[.]234[.]143[.]189:55287/i",
                    "hxxp://42[.]239[.]229[.]142:40923/i",
                    "hxxp://39[.]79[.]144[.]163:53108/i"
                ]
            },
            {
                "name": "CINS Threat List",
                "count": 15000,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]15[.]135[.]58",
                    "1[.]15[.]14[.]29",
                    "1[.]15[.]149[.]209"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1474,
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
                "count": 1363,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "1a5aa767c2675014c5c0a10b2d9f4c63844a84f8",
                    "3a56a66eb43b679afa1edb58e0fddcadf74bb2a4",
                    "47800989ef4eda671b2a76a0cd9123ec7b0bc324"
                ]
            },
            {
                "name": " \"Mirai",
                "count": 840,
                "types": [
                    "hash"
                ],
                "sampleIndicators": [
                    " \"699f54e3ab8960f2def82ad7e7bc40b22c05c17aae5165ca65cf8859d5fd95cd",
                    " \"8e765f9a9ad8b12dfdaf4b6d06be7e5a61422438da84532e8eac10c05c9a3f12",
                    " \"ac7359833650ecd66414eb24a6373dda63aae79b8d6d741bca3f6e79bb94dcf2"
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
                "count": 599,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "69affd6a91e38229fb655a62a52eb2b7af9fdfb4",
                    "be3b160ebe83bfc2e609bf912b36096e8dd2ffa3",
                    "243253f396aa30124e62cdd95a58cf8a3353fd88"
                ]
            },
            {
                "name": "LummaStealer",
                "count": 535,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "e2293f74d8d72bde90bb0424038259a9e3126e1b",
                    "69101b8edfa5d5e2ead4512a6d71c84748b0c012",
                    "1d28cc6dca52e95f859739c39a04d794671f66d9"
                ]
            },
            {
                "name": " \"n/a",
                "count": 497,
                "types": [
                    "hash"
                ],
                "sampleIndicators": [
                    " \"37314238d3d67260457607c64bdd15bdd79659e2a4f6d048fd846418a259051d",
                    " \"3cdd8e454b6c8b9b68089c93b81ab68fd9c0b9b34c3b58a6bfd4d9411f84b334",
                    " \"538b2bf784bb0d28f892a8e129f75b0f46773de26f656a32ab34b740a424fdf8"
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
        "topAttackVector": "Malicious URLs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": "malware_download",
        "totalAttacksThisHour": 48215,
        "lastCalculated": "2025-12-28 18:28 IST"
    }
};
