// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-09-28T10:43:38.074707+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-09-28T10:43:37.711771+05:30",
    "lastUpdatedFormatted": "Sep 28, 2026 at 10:43 AM IST",
    "comparisonPeriod": "Sep 27 \u2013 Sep 28, 2026",
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
                "hxxps://html-preview-0725ab[.]previewship[.]net/",
                "hxxp://polar49-fork[.]pages[.]dev/",
                "hxxps://server[.]teleazuer[.]com/images/index[.]html",
                "hxxps://www[.]progran-shopee53[.]blogspot[.]com/",
                "hxxp://trailstone-au3[.]pages[.]dev/"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 1234,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 1234,
                "newInLastHour": 118,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"9ca5e62c6d31fa8d77360a8e6c5d2602cd57e8b50d89309ab7728e2e133e7043",
                " \"5871b0701002cbbdd2a7ca290f724d69bbe2b0350bb459c02d2215b5364f4d64",
                " \"e2d46a6b819865112dd88b7ccbcc34379d2c5711acadd0c6720fcd91b4909096",
                " \"d2308ce690cdcc2a36398b46275c093afb4cfb8360324516f331cde41b5280e3",
                " \"9278510531077f0774d4a9d47f1b7bc116b56d972ba85f3230a23a158eb8410b"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1709,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1709,
                "newInLastHour": 77,
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
                "1[.]117[.]171[.]170",
                "1[.]15[.]14[.]29",
                "1[.]159[.]33[.]53",
                "1[.]192[.]129[.]106",
                "1[.]2[.]173[.]126"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 11750,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 11750,
                "newInLastHour": 11750,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]0[.]164[.]165",
                "1[.]15[.]77[.]170",
                "1[.]161[.]144[.]132",
                "1[.]162[.]197[.]67",
                "1[.]162[.]247[.]182"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 14596,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 14596,
                "newInLastHour": 14596,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://159[.]253[.]120[.]209/bins/main_ppc",
                "hxxp://159[.]253[.]120[.]209/bins/main_m68k",
                "hxxp://159[.]253[.]120[.]209/bins/main_arm",
                "hxxp://159[.]253[.]120[.]209/bins/main_x86_64",
                "hxxp://159[.]253[.]120[.]209/bins/main_arm6"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 12329,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 12329,
                "newInLastHour": 9029,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"182[.]61[.]145[.]101:20269\"",
                " \"hxxps://46[.]62[.]199[.]175\"",
                " \"les-manufactures[.]ch\"",
                " \"v2y2nkzm[.]manchester1[.]site\"",
                " \"manchester1[.]site\""
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
            "iocCount": 10798,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 10798,
                "newInLastHour": 92,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "e58d378500a9237df93a66f055ac6e0dc900d7fa",
                "86b5a5612e53988e28ed6604e8e9ff5476a46d0e",
                "d92cdd1624e3d004a180b07c2d2f33406564f839",
                "a09be1ba7013678b6385135c590d4894b890dc75",
                "7a215b5a8eaf9b132cf84f22d9ee2202c2a028bf"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 56183,
            "activeSources": 8,
            "criticalAlerts": 26927,
            "activeCampaigns": 261
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 16219,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "C2",
                "count": 10708,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 4716,
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
                    "1[.]117[.]171[.]170",
                    "1[.]15[.]14[.]29",
                    "1[.]159[.]33[.]53"
                ]
            },
            {
                "name": "malware_download",
                "count": 14905,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://175[.]107[.]229[.]199:41380/bin[.]sh",
                    "hxxp://113[.]238[.]162[.]8:48835/i",
                    "hxxp://115[.]50[.]172[.]148:34894/bin[.]sh"
                ]
            },
            {
                "name": " \"win.asyncrat\"",
                "count": 3340,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"169[.]58[.]38[.]91:7755\"",
                    " \"128[.]90[.]135[.]219:7777\"",
                    " \"62[.]85[.]76[.]113:8808\""
                ]
            },
            {
                "name": " \"unknown_loader\"",
                "count": 1795,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"hxxp://66[.]179[.]30[.]146:443/?h=66[.]179[.]30[.]146&p=443&t=tcp&a=w64&stage=true\"",
                    " \"f7e67c3bfcee9cd325706f49b71e4b1992a1f652ec253c96533c41d2946dfbdb\"",
                    " \"80baec312ab88b224c92e5faa3bea53a63d7ec3099c64850e58db3f19023b3a0\""
                ]
            },
            {
                "name": " \"win.cobalt_strike\"",
                "count": 1751,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"82[.]156[.]242[.]28:443\"",
                    " \"82[.]156[.]242[.]28:80\"",
                    " \"82[.]156[.]242[.]28:8080\""
                ]
            },
            {
                "name": " \"js.iclickfix\"",
                "count": 1711,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"lute[.]bowlinggreenwinnelsonco[.]com\"",
                    " \"entry-verifed-cdn[.]codes\"",
                    " \"ant[.]bergamonerazzurra[.]com\""
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1633,
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
                "count": 1448,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "cb7fcaede3c6bb75e73ee72b8de7c23de2953dd4",
                    "990472ad57a4d7dcb13689a21b0c84252f5cf0a5",
                    "99500e5de097a58d95775e1f9da85597851bdb71"
                ]
            },
            {
                "name": " \"Mirai",
                "count": 828,
                "types": [
                    "hash"
                ],
                "sampleIndicators": [
                    " \"6623747df793cec23cd37418d69cbf52274d5786d5accb96eb3cb6a21b7d9bdb",
                    " \"3885483056da7dd60d2d725de17383b46f7a6a8226d803b26a585a3a3dc2c02c",
                    " \"0a16eb285b9b6b45bb8ac62cd4ecd9dc33e824d1d2c2f1cdeab0233cb1c1984d"
                ]
            },
            {
                "name": "Vidar",
                "count": 773,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "86b5a5612e53988e28ed6604e8e9ff5476a46d0e",
                    "605e0b79c4a685b7da9524d6b71ec36bbd651b07",
                    "5f5d3a3225006f45ff8194536ef8e09cb194884d"
                ]
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious IPs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": "Spamhaus DROP List",
        "totalAttacksThisHour": 50967,
        "lastCalculated": "2026-09-28 10:43 IST"
    }
};
