// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-09-28T22:13:05.651263+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-09-28T22:13:05.355569+05:30",
    "lastUpdatedFormatted": "Sep 28, 2026 at 10:13 PM IST",
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
                "hxxp://ledger-com-strts[.]pages[.]dev/",
                "hxxps://filmistanstudios[.]com/fonts/purchase[.]html?e=valos@2c5a11bb81b5b1c04d53c01f56c510b84c79[.]net",
                "hxxp://square-nddax-en-us[.]square[.]site/",
                "hxxp://bet-facebook[.]blogspot[.]com/?m=1",
                "hxxp://www[.]bet-facebook[.]blogspot[.]com/?m=1"
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
                "newInLastHour": 342,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"de1ad3aa156cd293ab763bb29bf5eb4fd52a4b13bd344c78ebb780eab522b9e8",
                " \"c0ec658a22f429eb00b6ae721e04e238ea0ffa832283a60f1e5284e74d519e37",
                " \"3ec304fb79a6806dad014a2b03a2d1b32d2db9b89309c70cc6c3be0dc3faa025",
                " \"c0353632cd1f22b6d4944a0b3e2411558e3c5c4c168696741fd6207e3854c9ed",
                " \"d0dc64eec7049199eb7516c17bd2daea7fdc14ee8c103f70f98a9340a1acfcfd"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1688,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1688,
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
                "1[.]0[.]214[.]36",
                "1[.]117[.]171[.]170",
                "1[.]159[.]33[.]53",
                "1[.]220[.]119[.]115",
                "1[.]24[.]16[.]109"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 11818,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 11818,
                "newInLastHour": 11818,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]0[.]164[.]165",
                "1[.]117[.]72[.]220",
                "1[.]15[.]77[.]170",
                "1[.]161[.]144[.]132",
                "1[.]162[.]197[.]67"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 14928,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 14928,
                "newInLastHour": 14928,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://101[.]109[.]81[.]93:36236/i",
                "hxxp://27[.]202[.]21[.]82:44040/i",
                "hxxp://221[.]15[.]8[.]79:52781/i",
                "hxxp://115[.]53[.]209[.]172:44813/i",
                "hxxp://222[.]246[.]111[.]174:44574/i"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 12391,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 12391,
                "newInLastHour": 9065,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"440da933aecc21a57dba92324eaef042d47aa94f4a042b4523bd8a75c13864c3\"",
                " \"216[.]9[.]225[.]130:14641\"",
                " \"89[.]185[.]82[.]37:15987\"",
                " \"3d3a39b3154dcfe594e5a30c223231ce84009ed4c0223e81ce0363d3f7b36bec\"",
                " \"c844f9cddcda05bedc73a3ed1d3223bacc7c84061c90cc2a4cb9be4c8db5f97c\""
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
            "iocCount": 10813,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 10813,
                "newInLastHour": 24,
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
            "totalIndicators": 55971,
            "activeSources": 8,
            "criticalAlerts": 26633,
            "activeCampaigns": 259
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 15857,
                "trend": "stable",
                "percentage": -2
            },
            {
                "category": "C2",
                "count": 10776,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 4715,
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
                "count": 14596,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://159[.]253[.]120[.]209/bins/main_ppc",
                    "hxxp://159[.]253[.]120[.]209/bins/main_m68k",
                    "hxxp://159[.]253[.]120[.]209/bins/main_arm"
                ]
            },
            {
                "name": " \"win.asyncrat\"",
                "count": 3384,
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
                "count": 1787,
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
                "count": 1754,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"bbb[.]0101011010010111001[.]com\"",
                    " \"64[.]176[.]62[.]60:80\"",
                    " \"64[.]176[.]62[.]60:8080\""
                ]
            },
            {
                "name": " \"js.iclickfix\"",
                "count": 1710,
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
                "count": 1709,
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
                "count": 1451,
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
                "count": 799,
                "types": [
                    "hash"
                ],
                "sampleIndicators": [
                    " \"9ca5e62c6d31fa8d77360a8e6c5d2602cd57e8b50d89309ab7728e2e133e7043",
                    " \"5871b0701002cbbdd2a7ca290f724d69bbe2b0350bb459c02d2215b5364f4d64",
                    " \"e2d46a6b819865112dd88b7ccbcc34379d2c5711acadd0c6720fcd91b4909096"
                ]
            },
            {
                "name": "Vidar",
                "count": 798,
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
        "fastestRisingThreat": " \"win.asyncrat\"",
        "totalAttacksThisHour": 51484,
        "lastCalculated": "2026-09-28 22:13 IST"
    }
};
