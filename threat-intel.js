// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-09-29T05:50:07.430597+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-09-29T05:50:07.075265+05:30",
    "lastUpdatedFormatted": "Sep 29, 2026 at 05:50 AM IST",
    "comparisonPeriod": "Sep 28 \u2013 Sep 29, 2026",
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
                "hxxps://s[.]teams-ri[.]com/p/fjbd-cbch/aozzhxpi/",
                "hxxps://postoffice[.]claimhere[.]co[.]uk/support/home",
                "hxxps://postoffice[.]claimhere[.]co[.]uk/?mc_phishing_protection_id=191111-datccmsjqk5qfuqhnrcg",
                "hxxps://lnk[.]ink/U9OBT",
                "hxxps://www[.]roblox[.]com[.]do/games/118805555015549/Enhance1-Loot-To-Forge?privateServerLinkCode=179342586811142356386742832737"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 1283,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 1283,
                "newInLastHour": 194,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"b68bfb5cda29f1776ca92e359a4e9c66710bc29b9f1e330088cb690843e5fc20",
                " \"cc3aa95bdf340f475fcbe3fcae9034eeaeede9b139a8c59ba83dd907cbe46e8e",
                " \"70c545039eefe7d2333f47b809823fc09fc06b09e8dec33da42d80330777303b",
                " \"93ed87581ecce61b2a9538a58c6a2918dc17cd17a7d1925e84d8d94a604b3a4c",
                " \"a1ee4cd886ed4b3c4526d58fcf960078f5bf3f3294b46adbf33524ef127ecea0"
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
                "newInLastHour": 104,
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
                "1[.]192[.]129[.]106",
                "1[.]214[.]29[.]155",
                "1[.]220[.]119[.]115"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 11913,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 11913,
                "newInLastHour": 11913,
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
            "iocCount": 14799,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 14799,
                "newInLastHour": 14799,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://42[.]237[.]34[.]191:60213/i",
                "hxxp://220[.]177[.]11[.]230:54471/bin[.]sh",
                "hxxp://222[.]127[.]170[.]183:51305/i",
                "hxxp://117[.]146[.]92[.]46:43245/bin[.]sh",
                "hxxp://103[.]151[.]42[.]13:38028/i"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 11908,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 11908,
                "newInLastHour": 7504,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"www[.]violaliquore[.]it\"",
                " \"www[.]vellomedia[.]com\"",
                " \"www[.]veemis[.]sk\"",
                " \"hxxps://46[.]62[.]167[.]86\"",
                " \"154[.]36[.]188[.]124:7070\""
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
            "iocCount": 10822,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 10822,
                "newInLastHour": 418,
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
            "totalIndicators": 55683,
            "activeSources": 8,
            "criticalAlerts": 26854,
            "activeCampaigns": 253
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 16463,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "C2",
                "count": 10391,
                "trend": "stable",
                "percentage": -3
            },
            {
                "category": "Botnet",
                "count": 4462,
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
                "name": "malware_download",
                "count": 15132,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://115[.]55[.]133[.]93:51236/i",
                    "hxxp://216[.]249[.]4[.]20:35937/i",
                    "hxxp://115[.]50[.]230[.]33:47701/bin[.]sh"
                ]
            },
            {
                "name": "CINS Threat List",
                "count": 15000,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]0[.]214[.]36",
                    "1[.]117[.]171[.]170",
                    "1[.]15[.]14[.]29"
                ]
            },
            {
                "name": " \"win.asyncrat\"",
                "count": 4324,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"36[.]255[.]97[.]47:6606\"",
                    " \"63[.]176[.]174[.]154:4449\"",
                    " \"83[.]136[.]210[.]2:6666\""
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1592,
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
                "count": 1442,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "cb7fcaede3c6bb75e73ee72b8de7c23de2953dd4",
                    "990472ad57a4d7dcb13689a21b0c84252f5cf0a5",
                    "372b91c0d31a75b4e1765af998d984881e34dab1"
                ]
            },
            {
                "name": " \"win.cobalt_strike\"",
                "count": 1428,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"114[.]215[.]184[.]158:1099\"",
                    " \"95[.]217[.]135[.]208:8080\"",
                    " \"114[.]215[.]184[.]158:22\""
                ]
            },
            {
                "name": " \"js.iclickfix\"",
                "count": 1194,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"allowcheckd3[.]cc\"",
                    " \"cove-koi-hk753[.]xyz\"",
                    " \"ochre-quill-buindbaio[.]icu\""
                ]
            },
            {
                "name": " \"unknown_loader\"",
                "count": 1173,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"hxxps://buldumaski[.]cfd/apk/Ask%20Bul%20I%CC%87ndirici[.]apk\"",
                    " \"hxxps://scan[.]cyberessentials[.]live/usersc/testfiles/macro/CEPlus[.]docm\"",
                    " \"e38c53aedf49017c47725e4912fc7560e1c8ece2633c05057b22fd4a8ed28eb3\""
                ]
            },
            {
                "name": " \"Mirai",
                "count": 778,
                "types": [
                    "hash"
                ],
                "sampleIndicators": [
                    " \"e49d415b80d9199000480ebafcd6b288752cc0935d8749943d65fd619139ba39",
                    " \"583beb03667562e98ce5f82426658e7a3f937eff4f6e110f002e675f4f032a98",
                    " \"b8062cb4b9c6dd69b168f10416584b0ed062bce5c02ccc2f44fb39115014de29"
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
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious IPs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": "Spamhaus DROP List",
        "totalAttacksThisHour": 50237,
        "lastCalculated": "2026-09-29 05:50 IST"
    }
};
