// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-09-14T10:16:21.996463+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-09-14T10:16:21.724115+05:30",
    "lastUpdatedFormatted": "Sep 14, 2026 at 10:16 AM IST",
    "comparisonPeriod": "Sep 13 \u2013 Sep 14, 2026",
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
                "hxxps://www[.]facebooklogin19[.]blogspot[.]com/",
                "hxxp://internalit[.]userid[.]team/view-request/login=req/NJrzQ42xFmCBrG3B5XncJtgyPwxZS-ef5VEA=2Aw==6WUNCWllZXWlaWVFfWA==/8jaGFIb7kjLGCqIyGQxA_FRytCS-5OJa/",
                "hxxp://internalit[.]userid[.]team/view-request/login=req/NJrzQ42xFmCBrG3B5XncJtgyPwxZS-ef5VEA=2Aw==/8jaGFIb7kjLGCqIyGQxA_FRytCS-5OJa/",
                "hxxp://www[.]cn-feed-whatsapp[.]com[.]cn/",
                "hxxps://greatdiscountdeal[.]com/Office_cookies/Email[.]account[.]html?="
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 411,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 411,
                "newInLastHour": 59,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"81591d89a7283bb11e05ce80e00256bea9218acbfcec5542cd9ffda9bd18db8a",
                " \"3f4545a5f15fe892f21df9ee911af2ed27a8e0fff9084c6b32b5056d9d18c187",
                " \"e51ee5140bead9c974f22988b80899cc2d10ab9efe6301853f2babe552c330f3",
                " \"a2718a829cf311f77dc8d9fdbd50246921b7783c8192827e79e007acf96ea6ca",
                " \"604495eeedb9f4124706a35b0907213716f43af17e7662e15e8c15eb41c13c46"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1612,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1612,
                "newInLastHour": 3,
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
                "1[.]10[.]172[.]57",
                "1[.]14[.]121[.]115",
                "1[.]181[.]200[.]22",
                "1[.]24[.]16[.]103",
                "1[.]24[.]16[.]120"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 11448,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 11448,
                "newInLastHour": 11448,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]0[.]164[.]165",
                "1[.]117[.]59[.]169",
                "1[.]14[.]64[.]225",
                "1[.]162[.]197[.]67",
                "1[.]162[.]247[.]182"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 12226,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 12226,
                "newInLastHour": 12226,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://221[.]14[.]170[.]47:43520/i",
                "hxxp://115[.]49[.]17[.]167:60965/i",
                "hxxp://115[.]42[.]71[.]239:59657/i",
                "hxxp://115[.]49[.]17[.]167:60965/bin[.]sh",
                "hxxp://115[.]42[.]71[.]239:59657/bin[.]sh"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 5743,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 5743,
                "newInLastHour": 4944,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"yg0ch6bz[.]blowfemme[.]com\"",
                " \"1cfx1w5z[.]zen-sulin[.]com\"",
                " \"107[.]152[.]44[.]169:5432\"",
                " \"8[.]145[.]61[.]81:22\"",
                " \"212[.]87[.]199[.]197:9090\""
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
            "iocCount": 10307,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 10307,
                "newInLastHour": 4,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "009a05eaf082d20ae13a65abda12afd959cd76de",
                "e129189e0ed0545baad30c054b5f51301d766516",
                "fcfc3b257b12e4c699e343f4c415b60f642d88f6",
                "db7000ad8c148580941840ce41d8efb95f478854",
                "60d55d4ff506bc654814ba6b26308f999766054a"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 51539,
            "activeSources": 8,
            "criticalAlerts": 23789,
            "activeCampaigns": 265
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 13116,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "C2",
                "count": 10673,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 4296,
                "trend": "stable",
                "percentage": 0
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
            }
        ],
        "campaigns": [
            {
                "name": "CINS Threat List",
                "count": 15000,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]188[.]100[.]134",
                    "1[.]205[.]52[.]2",
                    "1[.]24[.]16[.]102"
                ]
            },
            {
                "name": "malware_download",
                "count": 12675,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://66[.]212[.]187[.]214:58335/i",
                    "hxxp://105[.]186[.]143[.]114:35689/bin[.]sh",
                    "hxxp://66[.]212[.]187[.]214:58335/bin[.]sh"
                ]
            },
            {
                "name": " \"win.asyncrat\"",
                "count": 2865,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"84[.]247[.]187[.]47:6660\"",
                    " \"192[.]162[.]199[.]179:6606\"",
                    " \"c1e2ba7b65d7e8611f83d0ffbef4412083bcbdb8d26a496d82c98c635f64fddd\""
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1721,
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
                "count": 1447,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "048bd151ab0a9c0add6d5bba9dc73521e42d9a20",
                    "559a55c8c7779e0037429794a8836a1039dbcdc3",
                    "8e492f36b0c1412f2d872dc9d51c974d27733d47"
                ]
            },
            {
                "name": " \"win.cobalt_strike\"",
                "count": 1333,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"45[.]144[.]136[.]97:21\"",
                    " \"43[.]155[.]246[.]58:8888\"",
                    " \"45[.]144[.]136[.]97:8099\""
                ]
            },
            {
                "name": " \"js.iclickfix\"",
                "count": 1123,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"dev[.]hamiltonetfs[.]com\"",
                    " \"www[.]sioutsider[.]com\"",
                    " \"www[.]sitecnasnc[.]it\""
                ]
            },
            {
                "name": " \"unknown_loader\"",
                "count": 1090,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"prairielink[.]cfd\"",
                    " \"zouwemmig[.]cfd\"",
                    " \"8aee7a413af09d4409da870471da4f6af7f93cae25e1837f8b34e170b0309cb8\""
                ]
            },
            {
                "name": "Vidar",
                "count": 775,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "fcfc3b257b12e4c699e343f4c415b60f642d88f6",
                    "60d55d4ff506bc654814ba6b26308f999766054a",
                    "f567b9fc86b00e059bdfea261466360804fbdb38"
                ]
            },
            {
                "name": " \"js.clearfake\"",
                "count": 770,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"movementtowardchange[.]org\"",
                    " \"hxxps://cdn[.]jsdelivr[.]net/gh/orcall7634/7C-DF-CD-C1-77-38/84-62-B4r\"",
                    " \"1rlnt3t6[.]kiper[.]store\""
                ]
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious IPs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": " \"VShell",
        "totalAttacksThisHour": 43989,
        "lastCalculated": "2026-09-14 10:16 IST"
    }
};
