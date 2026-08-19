// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-08-19T22:11:44.296181+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-08-19T22:11:43.985418+05:30",
    "lastUpdatedFormatted": "Aug 19, 2026 at 10:11 PM IST",
    "comparisonPeriod": "Aug 18 \u2013 Aug 19, 2026",
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
                "hxxp://facebologin[.]blogspot[.]com/",
                "hxxps://staking4portfolio[.]blogspot[.]com/",
                "hxxp://php-web-server--antijudas2323[.]replit[.]app/",
                "hxxp://www[.]staking2portfolio[.]blogspot[.]com/",
                "hxxps://www[.]ttk-pay-eua[.]vercel[.]app/"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 1356,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 1356,
                "newInLastHour": 162,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"cb4e37f0e8f74c15601bec334ba896af468fa928226ddaf29c93e6d57bdd4273",
                " \"ac3a8d8faf684f8e3fbe54612b39872b94b5673c512042d320b7e0c366b90a0d",
                " \"582b6889a7bce9a6760b488f608da2299a08fb569486fc9e634f0b277081c820",
                " \"5f39abfd528835a60d5c12508b51dd0184a2af86fb54de4075db3ce2beef7df0",
                " \"bd854d520c79651471b99bea03fb751593e5735a09d11d9cb8bd6214178bec48"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1692,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1692,
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
                "1[.]159[.]70[.]231",
                "1[.]165[.]27[.]71",
                "1[.]178[.]120[.]114",
                "1[.]180[.]190[.]250"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 4805,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 4805,
                "newInLastHour": 4805,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]0[.]164[.]165",
                "1[.]14[.]64[.]225",
                "1[.]2[.]189[.]132",
                "1[.]20[.]150[.]200",
                "1[.]222[.]42[.]237"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 16880,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 16880,
                "newInLastHour": 16880,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://60[.]217[.]123[.]198:46902/i",
                "hxxp://222[.]141[.]22[.]9:38226/bin[.]sh",
                "hxxp://42[.]224[.]121[.]161:40429/i",
                "hxxp://156[.]146[.]26[.]225:55397/i",
                "hxxp://42[.]224[.]121[.]161:40429/bin[.]sh"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 10203,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 10203,
                "newInLastHour": 9964,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"valokse[.]lol\"",
                " \"equiloompro-ai[.]ch\"",
                " \"ed8depc8[.]cardioslim-t[.]com\"",
                " \"cardioslim-t[.]com\"",
                " \"hxxp://zakuiru[.]shop:9048/files\""
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
            "iocCount": 10486,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 10486,
                "newInLastHour": 35,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "5e7110d4c25e3aef153d9d38610550ad510f23cf",
                "0b92ba05df90855d90170858ba91680d33f76e0f",
                "0b7abd7fefffcfe53a7ae01594e23d9488a214b4",
                "fca24c810592604f11de7dc12dc790c91cc118df",
                "abacd13c43005d6868d9b586e029a1d6a74e1470"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 55698,
            "activeSources": 8,
            "criticalAlerts": 28528,
            "activeCampaigns": 248
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 18099,
                "trend": "stable",
                "percentage": 1
            },
            {
                "category": "C2",
                "count": 10429,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 5065,
                "trend": "stable",
                "percentage": 4
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
            },
            {
                "name": "Government",
                "percentage": 0
            }
        ],
        "campaigns": [
            {
                "name": "malware_download",
                "count": 16811,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://175[.]148[.]157[.]224:54842/i",
                    "hxxp://125[.]42[.]27[.]234:57981/i",
                    "hxxp://175[.]107[.]209[.]203:44599/bin[.]sh"
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
                    "1[.]119[.]194[.]226",
                    "1[.]15[.]14[.]29"
                ]
            },
            {
                "name": " \"js.iclickfix\"",
                "count": 2398,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"iocriotao[.]icu\"",
                    " \"triapfog[.]com\"",
                    " \"mioiooo[.]icu\""
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1692,
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
                "name": " \"unknown_loader\"",
                "count": 1677,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"governorhobbies[.]cfd\"",
                    " \"sofazinc[.]cfd\"",
                    " \"snailsreading[.]xyz\""
                ]
            },
            {
                "name": "AsyncRAT",
                "count": 1440,
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
                "count": 1423,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"147[.]139[.]136[.]105:80\"",
                    " \"147[.]139[.]136[.]105:22\"",
                    " \"147[.]139[.]136[.]105:443\""
                ]
            },
            {
                "name": " \"unknown\"",
                "count": 1131,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"hxxps://kalekos[.]world/\"",
                    " \"111[.]170[.]148[.]132:36032\"",
                    " \"hxxp://196[.]251[.]107[.]186/acovp/login[.]php\""
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
                "count": 708,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "ab53f86d2ce32d9306f431e8e82f39cb31f48a53",
                    "304062e0d9d93dad14b84554abb56fd3af8266ff",
                    "4442db8ed5780616c630362ab45b8e59f40a2e5a"
                ]
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious URLs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": "malware_download",
        "totalAttacksThisHour": 47151,
        "lastCalculated": "2026-08-19 22:11 IST"
    }
};
