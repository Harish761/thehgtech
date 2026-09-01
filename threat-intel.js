// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-09-01T18:57:25.443600+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-09-01T18:57:25.109401+05:30",
    "lastUpdatedFormatted": "Sep 01, 2026 at 06:57 PM IST",
    "comparisonPeriod": "Aug 31 \u2013 Sep 01, 2026",
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
                "hxxps://https-wvvw-roblox[.]com/users/1903963388/profile",
                "hxxp://learn-trezro-en-public[.]pages[.]dev/",
                "hxxp://ledger--life[.]pages[.]dev/",
                "hxxps://ledger-io-live-cdn[.]pages[.]dev/",
                "hxxps://hw7393[.]craftum[.]io/"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 697,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 697,
                "newInLastHour": 114,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"b36708f463e7939128f67b29a933f3a32fb83c207f90172f5070899000387821",
                " \"fe63eabfc2f3a00dcd860858be31ecad76ef657f9811fad182439fb17a22adf5",
                " \"44d642befc8738199f8ce2a97940cbf5fdbfdf3fefd004266b526197d3c4b317",
                " \"eac9fafb8e19bb12618199b48c79fb94cab8e447b09973b1443464a3f13ea5ed",
                " \"a3b92ad72cd1a4b1be8718057d90026d2c0b07d04c8b8ae8ab8ab2b6c29fd895"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1706,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1706,
                "newInLastHour": 31,
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
                "1[.]120[.]123[.]117",
                "1[.]12[.]229[.]231",
                "1[.]15[.]14[.]29",
                "1[.]183[.]160[.]23",
                "1[.]189[.]153[.]12"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 13221,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 13221,
                "newInLastHour": 13221,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]0[.]164[.]165",
                "1[.]162[.]197[.]67",
                "1[.]162[.]237[.]203",
                "1[.]162[.]247[.]182",
                "1[.]174[.]208[.]30"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 15483,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 15483,
                "newInLastHour": 15483,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://125[.]45[.]25[.]114:44399/i",
                "hxxp://115[.]56[.]163[.]153:51027/i",
                "hxxp://60[.]19[.]217[.]253:46181/i",
                "hxxp://125[.]45[.]25[.]114:44399/bin[.]sh",
                "hxxp://115[.]56[.]163[.]153:51027/bin[.]sh"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 4946,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 4946,
                "newInLastHour": 4715,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"p7n5n0qg[.]en-us-glucotrustt-bites[.]com\"",
                " \"dojomylo[.]workers[.]dev\"",
                " \"23[.]148[.]212[.]176:22\"",
                " \"23[.]148[.]212[.]176:8080\"",
                " \"23[.]148[.]212[.]176:443\""
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
            "iocCount": 10610,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 10610,
                "newInLastHour": 104,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "696ef14e986d01e7d9186a690a06849c9cc49c4b",
                "cab93f3d490ed168600f08e5cc4a55d4e8c503c8",
                "4e1d76e094c1a61d2e1ed367f67545fabe9bc074",
                "d55545d9e23fbf6f6b667d4e055454de1108a627",
                "4cc4e635af94a219c0c1eaa78c7c1eebdda49e1f"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 48222,
            "activeSources": 8,
            "criticalAlerts": 26491,
            "activeCampaigns": 236
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 16003,
                "trend": "stable",
                "percentage": -2
            },
            {
                "category": "C2",
                "count": 10488,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 4225,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Phishing",
                "count": 300,
                "trend": "stable",
                "percentage": 1
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
                "count": 15285,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://222[.]142[.]244[.]43:36726/bin[.]sh",
                    "hxxp://42[.]237[.]82[.]123:49531/i",
                    "hxxp://42[.]237[.]82[.]123:49531/bin[.]sh"
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
                    "1[.]181[.]200[.]22",
                    "1[.]183[.]160[.]23"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1676,
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
                    "8c2a430246ca36ca14885fe1a101c61eaab4a96c",
                    "7f44d36f1f6bd375ba4e4a7866328a76047ce498",
                    "f351f7dbe9c583f75758b39cd307f5359d110c73"
                ]
            },
            {
                "name": " \"win.cobalt_strike\"",
                "count": 1286,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"62[.]72[.]42[.]58:8080\"",
                    " \"62[.]72[.]42[.]58:80\"",
                    " \"62[.]72[.]42[.]58:443\""
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
                "count": 723,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "ed312f7ad58a9faec6d3c93aabf598335fdf494c",
                    "dac0432f5f74d7d465966420968c96166217923f",
                    "4af902fc388e5b848db1767a6c708e2ada0ad99a"
                ]
            },
            {
                "name": "QuasarRAT",
                "count": 695,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "a6e6aa58bac84e56b868f5f618ef227b75d7208e",
                    "d123d7f43d63545c7a8f643acbe73e81f35c3f14",
                    "9b4c3ff8dc5891693f443320e3c1167c7cebe2b7"
                ]
            },
            {
                "name": "LummaStealer",
                "count": 556,
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
                "name": " \"win.pure_rat\"",
                "count": 537,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"94[.]26[.]3[.]17:56003\"",
                    " \"5[.]175[.]182[.]184:443\"",
                    " \"199[.]231[.]191[.]3:443\""
                ]
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious IPs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": "SSH Attacks",
        "totalAttacksThisHour": 48973,
        "lastCalculated": "2026-09-01 18:57 IST"
    }
};
