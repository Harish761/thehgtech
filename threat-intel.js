// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-08-25T22:22:13.945133+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-08-25T22:22:13.600892+05:30",
    "lastUpdatedFormatted": "Aug 25, 2026 at 10:22 PM IST",
    "comparisonPeriod": "Aug 24 \u2013 Aug 25, 2026",
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
                "hxxps://www[.]roblox[.]com[.]mu/users/8294879321/profile",
                "hxxp://royalbau[.]hu/msn/",
                "hxxp://connect-ledgerr-live[.]pages[.]dev/",
                "hxxp://en-ledgre[.]pages[.]dev/",
                "hxxp://usg-23up4-mcea1t-2e7cp-g6tdd6[.]pages[.]dev/"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 758,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 758,
                "newInLastHour": 109,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"78a29a09726ad370e782cbd3e88490cecea695112f9171d9d8168a18b25ef67b",
                " \"79c858d8229cea12e8450b021c4c4c45a6d636b18a31065968057e28b4116363",
                " \"0b1d575c0c0a08ef48683113372d7580a42acfac4442a3927314b86dff616c4e",
                " \"b0878b05bf0973a6c9ea8f8dbf996601ed8b9f26279485f967e4347102069954",
                " \"98fd9a8f28856d66e5d45e26749edec79ce1841c0f73b0d2244e1628527fec44"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1702,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1702,
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
                "1[.]0[.]164[.]165",
                "1[.]15[.]227[.]58",
                "1[.]183[.]227[.]151",
                "1[.]192[.]177[.]135",
                "1[.]193[.]63[.]32"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 5333,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 5333,
                "newInLastHour": 5333,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]0[.]164[.]165",
                "1[.]0[.]218[.]28",
                "1[.]20[.]150[.]200",
                "1[.]20[.]215[.]65",
                "1[.]209[.]110[.]147"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 16366,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 16366,
                "newInLastHour": 16366,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://115[.]57[.]60[.]24:40928/i",
                "hxxp://115[.]55[.]54[.]253:54557/i",
                "hxxp://42[.]231[.]64[.]103:58110/bin[.]sh",
                "hxxp://222[.]141[.]141[.]133:42626/i",
                "hxxp://175[.]165[.]76[.]134:43930/bin[.]sh"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 7094,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 7094,
                "newInLastHour": 7045,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"visitoldcastle[.]com\"",
                " \"walpot-technics[.]be\"",
                " \"waterandfiredamagewebsites[.]com\"",
                " \"whatpond[.]com\"",
                " \"yossiuzan[.]com\""
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
            "iocCount": 10520,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 10520,
                "newInLastHour": 10,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "7f1ed4a13d8a2ba6e690ecaf66a9dfa42dd8d9d1",
                "edd934290c1a24e425d4d6f6c82a08ebc392b89f",
                "b0cf2650da454ed5cc67102d95f8b9ba00602ead",
                "25042ea148aa7ccb23ebabb701cacca1d2fbd1d4",
                "5d801efeb2e22aa0da901ffbce45db05a80a7b0b"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 51223,
            "activeSources": 8,
            "criticalAlerts": 27588,
            "activeCampaigns": 221
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 17082,
                "trend": "stable",
                "percentage": 1
            },
            {
                "category": "C2",
                "count": 10506,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 4549,
                "trend": "stable",
                "percentage": 5
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
                "count": 16348,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://212[.]164[.]115[.]235:53007/bin[.]sh",
                    "hxxp://109[.]171[.]67[.]100:18713/i",
                    "hxxp://182[.]119[.]13[.]119:44968/bin[.]sh"
                ]
            },
            {
                "name": "CINS Threat List",
                "count": 15000,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]0[.]164[.]165",
                    "1[.]180[.]190[.]250",
                    "1[.]192[.]129[.]106"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1702,
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
                "count": 1304,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"182[.]92[.]78[.]7:443\"",
                    " \"182[.]92[.]78[.]7:8080\"",
                    " \"43[.]143[.]13[.]146:8080\""
                ]
            },
            {
                "name": " \"js.iclickfix\"",
                "count": 1062,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"hxxps://cdn[.]jsdelivr[.]net/gh/Patricia-38674/ret74kfd98j/nam1o0tych\"",
                    " \"eyestyle[.]co[.]nz\"",
                    " \"fourapostlesrealty[.]com\""
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
                "count": 731,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "64e6fe29e84ea3ecaaef08920d8ceb9567240166",
                    "7a9be497f84c09e7591ba7c7d69539a6e0468302",
                    "277cf8e1227351964ba2a8e57b49b26f8f8e353a"
                ]
            },
            {
                "name": "QuasarRAT",
                "count": 698,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "9b4c3ff8dc5891693f443320e3c1167c7cebe2b7",
                    "0f1b05653c3b3ab3bb4ecd772dd024668cbe8df1",
                    "b364395fee8c2e4c9eaf9a2531f6f7ac7bf8e4ae"
                ]
            },
            {
                "name": " \"unknown\"",
                "count": 668,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"154[.]90[.]70[.]20:49376\"",
                    " \"154[.]90[.]70[.]20:54123\"",
                    " \"154[.]90[.]70[.]20:61543\""
                ]
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious URLs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": " \"unknown_loader\"",
        "totalAttacksThisHour": 44168,
        "lastCalculated": "2026-08-25 22:22 IST"
    }
};
