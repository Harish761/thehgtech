// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-09-28T04:28:21.720087+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-09-28T04:28:21.323485+05:30",
    "lastUpdatedFormatted": "Sep 28, 2026 at 04:28 AM IST",
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
                "hxxp://sockscheker[.]ru/config/config/bits225/session/?Search=Search&q=",
                "hxxps://amarulalodgewau[.]com/Wetransfer2/clients/",
                "hxxps://versandzentrum11[.]ink/tF7m4VX",
                "hxxps://timotimo34bb34-design[.]github[.]io/-insta-verify",
                "hxxps://1url[.]at/www/roblox-users-480257643212-profile"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 1287,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 1287,
                "newInLastHour": 9,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"6623747df793cec23cd37418d69cbf52274d5786d5accb96eb3cb6a21b7d9bdb",
                " \"3885483056da7dd60d2d725de17383b46f7a6a8226d803b26a585a3a3dc2c02c",
                " \"0a16eb285b9b6b45bb8ac62cd4ecd9dc33e824d1d2c2f1cdeab0233cb1c1984d",
                " \"e90612572911324615788f50df787658e32e6f81da2830564caf8172c70f34d9",
                " \"1987abcfd3a4c0b0929d2c2295255543eeacd2fe641b47e065f30d59efbbd5db"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1633,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1633,
                "newInLastHour": 9,
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
                "1[.]2[.]173[.]126",
                "1[.]24[.]16[.]10"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 11739,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 11739,
                "newInLastHour": 11739,
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
            "iocCount": 14905,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 14905,
                "newInLastHour": 14905,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://175[.]107[.]229[.]199:41380/bin[.]sh",
                "hxxp://113[.]238[.]162[.]8:48835/i",
                "hxxp://115[.]50[.]172[.]148:34894/bin[.]sh",
                "hxxp://60[.]23[.]237[.]100:43483/bin[.]sh",
                "hxxp://103[.]157[.]210[.]26:36860/bin[.]sh"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 12323,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 12323,
                "newInLastHour": 8962,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"lgzydh2o[.]mmbtours[.]com\"",
                " \"mmbtours[.]com\"",
                " \"82[.]156[.]242[.]28:443\"",
                " \"82[.]156[.]242[.]28:80\"",
                " \"82[.]156[.]242[.]28:8080\""
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
            "iocCount": 10730,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 10730,
                "newInLastHour": 8,
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
            "totalIndicators": 56329,
            "activeSources": 8,
            "criticalAlerts": 26989,
            "activeCampaigns": 262
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 16197,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "C2",
                "count": 10792,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 4713,
                "trend": "stable",
                "percentage": 1
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
                "count": 14875,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://210[.]208[.]110[.]42:35465/bin[.]sh",
                    "hxxp://123[.]4[.]192[.]7:41778/i",
                    "hxxp://210[.]208[.]111[.]220:56669/bin[.]sh"
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
                "count": 1806,
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
                "count": 1748,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"89[.]125[.]66[.]96:1002\"",
                    " \"8[.]163[.]98[.]217:50050\"",
                    " \"64[.]176[.]62[.]60:50050\""
                ]
            },
            {
                "name": " \"js.iclickfix\"",
                "count": 1714,
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
                "count": 1701,
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
                "count": 829,
                "types": [
                    "hash"
                ],
                "sampleIndicators": [
                    " \"501bbdaa7c2384a52b0de97f1cc8429f14eef4a0e84a8c3e47f66b2c695906e0",
                    " \"f23b4ff53e6c5e0434d9488a92fb504f260b0e9551f2ba5413b7d236132948e5",
                    " \"935e8ed273a2a45b8deec930ff1262c44175a415ed3a6ef10fd98466f323b059"
                ]
            },
            {
                "name": "Vidar",
                "count": 804,
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
        "fastestRisingThreat": "malware_download",
        "totalAttacksThisHour": 50937,
        "lastCalculated": "2026-09-28 04:28 IST"
    }
};
