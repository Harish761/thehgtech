// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-09-28T03:01:32.665691+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-09-28T03:01:32.276111+05:30",
    "lastUpdatedFormatted": "Sep 28, 2026 at 03:01 AM IST",
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
            "iocCount": 1295,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 1295,
                "newInLastHour": 17,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"15a4fc6c055faab1a1fee79d5e53bdb34ce4ab6631ff6110f46aeaa74a3a6f3d",
                " \"501bbdaa7c2384a52b0de97f1cc8429f14eef4a0e84a8c3e47f66b2c695906e0",
                " \"844a4999b58ebdcc662203defb19b1ea711d6e39022eb5d05147a810bb743282",
                " \"4cbf9e936c1a19566f2f42cc7e4a96bce640ac47519696242e7ea1271364ab26",
                " \"53849ec8dad42768758ad70fdb3985876e1eebcac190400407297b0f8951d702"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1701,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1701,
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
                "1[.]117[.]171[.]170",
                "1[.]15[.]14[.]29",
                "1[.]159[.]33[.]53",
                "1[.]24[.]16[.]10",
                "1[.]24[.]16[.]103"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 11719,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 11719,
                "newInLastHour": 11719,
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
            "iocCount": 14875,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 14875,
                "newInLastHour": 14875,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://210[.]208[.]110[.]42:35465/bin[.]sh",
                "hxxp://123[.]4[.]192[.]7:41778/i",
                "hxxp://210[.]208[.]111[.]220:56669/bin[.]sh",
                "hxxp://115[.]55[.]39[.]223:34496/i",
                "hxxp://116[.]68[.]162[.]210:36352/i"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 12339,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 12339,
                "newInLastHour": 8977,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"www[.]onyxplatform[.]org\"",
                " \"www[.]lueurbygreg[.]ch\"",
                " \"www[.]operationgoldstar[.]org\"",
                " \"voidravencitadel[.]com\"",
                " \"www[.]onlinecasinosuperclub[.]com\""
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
            "iocCount": 10814,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 10814,
                "newInLastHour": 0,
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
            "totalIndicators": 56279,
            "activeSources": 8,
            "criticalAlerts": 26979,
            "activeCampaigns": 263
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 16179,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "C2",
                "count": 10800,
                "trend": "up",
                "percentage": 388
            },
            {
                "category": "Botnet",
                "count": 4662,
                "trend": "stable",
                "percentage": 2
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
                "count": 14833,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://115[.]52[.]32[.]173:44482/i",
                    "hxxp://182[.]127[.]46[.]169:57332/bin[.]sh",
                    "hxxp://39[.]90[.]149[.]215:48318/i"
                ]
            },
            {
                "name": " \"win.asyncrat\"",
                "count": 3338,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"62[.]85[.]76[.]113:8808\"",
                    " \"46[.]151[.]182[.]5:8808\"",
                    " \"169[.]58[.]38[.]91:5552\""
                ]
            },
            {
                "name": " \"unknown_loader\"",
                "count": 1829,
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
                "name": "Spamhaus DROP List",
                "count": 1710,
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
                "name": " \"win.cobalt_strike\"",
                "count": 1700,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"47[.]114[.]83[.]19:8082\"",
                    " \"82[.]156[.]242[.]28:50050\"",
                    " \"47[.]98[.]124[.]244:50050\""
                ]
            },
            {
                "name": " \"js.iclickfix\"",
                "count": 1696,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"entry-verifed-cdn[.]codes\"",
                    " \"ant[.]bergamonerazzurra[.]com\"",
                    " \"communicationmagicwithmen[.]com\""
                ]
            },
            {
                "name": "AsyncRAT",
                "count": 1452,
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
                    " \"3d6778c3adb6112416e9e980331bbfd7ed7ee693eb1285d9a8dcfc6e2aff9d88",
                    " \"5b5456493c418135876a06a8ae73d36566eef15bc79ce27f2a68937e09cf9b86",
                    " \"63b263a95cb0aaf8d2c7cc4e77387575af20fdd04132fd723db5b3a5a6fea1d6"
                ]
            },
            {
                "name": "Vidar",
                "count": 806,
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
        "fastestRisingThreat": " \"win.cobalt_strike\"",
        "totalAttacksThisHour": 50893,
        "lastCalculated": "2026-09-28 03:01 IST"
    }
};
