// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-09-29T04:56:50.656822+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-09-29T04:56:50.281918+05:30",
    "lastUpdatedFormatted": "Sep 29, 2026 at 04:56 AM IST",
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
            "iocCount": 1304,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 1304,
                "newInLastHour": 177,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"e49d415b80d9199000480ebafcd6b288752cc0935d8749943d65fd619139ba39",
                " \"583beb03667562e98ce5f82426658e7a3f937eff4f6e110f002e675f4f032a98",
                " \"bbe9c46885ad9515f383f8df2346e778c272876153e137bc18f9d92e4145d2de",
                " \"ee3a39e24bf112977ab8751b6ada3e738a4b37e0d289310b5eafb0b679590b6a",
                " \"27df14cd7b3cf35b0c7096714a0557cbff5ccb2d79627a93362f607025949b49"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1592,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1592,
                "newInLastHour": 4,
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
                "1[.]15[.]14[.]29",
                "1[.]159[.]33[.]53",
                "1[.]220[.]119[.]115"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 11819,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 11819,
                "newInLastHour": 11819,
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
            "iocCount": 15132,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 15132,
                "newInLastHour": 15132,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://115[.]55[.]133[.]93:51236/i",
                "hxxp://216[.]249[.]4[.]20:35937/i",
                "hxxp://115[.]50[.]230[.]33:47701/bin[.]sh",
                "hxxp://123[.]13[.]2[.]39:33633/i",
                "hxxp://115[.]49[.]78[.]103:50887/bin[.]sh"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 11937,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 11937,
                "newInLastHour": 7533,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"154[.]36[.]188[.]124:8080\"",
                " \"vgavoile[.]org\"",
                " \"www[.]tremendoussports[.]com\"",
                " \"www[.]ufa356[.]gripe\"",
                " \"www[.]ufabet888[.]party\""
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
            "iocCount": 10413,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 10413,
                "newInLastHour": 9,
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
            "totalIndicators": 56481,
            "activeSources": 8,
            "criticalAlerts": 27102,
            "activeCampaigns": 254
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 16311,
                "trend": "stable",
                "percentage": 2
            },
            {
                "category": "C2",
                "count": 10791,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 4400,
                "trend": "stable",
                "percentage": -6
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
                    "1[.]0[.]214[.]36",
                    "1[.]117[.]171[.]170",
                    "1[.]159[.]33[.]53"
                ]
            },
            {
                "name": "malware_download",
                "count": 14928,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://101[.]109[.]81[.]93:36236/i",
                    "hxxp://27[.]202[.]21[.]82:44040/i",
                    "hxxp://221[.]15[.]8[.]79:52781/i"
                ]
            },
            {
                "name": " \"win.asyncrat\"",
                "count": 4328,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"83[.]136[.]210[.]2:6666\"",
                    " \"80[.]190[.]77[.]86:20400\"",
                    " \"36[.]255[.]97[.]47:7707\""
                ]
            },
            {
                "name": " \"unknown_loader\"",
                "count": 1719,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"hxxps://scan[.]cyberessentials[.]live/usersc/testfiles/macro/CEPlus[.]docm\"",
                    " \"e38c53aedf49017c47725e4912fc7560e1c8ece2633c05057b22fd4a8ed28eb3\"",
                    " \"b657a4f887fa6c5fc0cda1b4809ffe9d03d63f110fa6bd88b828ee2ad8eb3e08\""
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1688,
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
                "name": " \"win.cobalt_strike\"",
                "count": 1424,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"156[.]239[.]4[.]189:8889\"",
                    " \"101[.]35[.]217[.]145:50050\"",
                    " \"114[.]66[.]27[.]110:8434\""
                ]
            },
            {
                "name": " \"js.iclickfix\"",
                "count": 1174,
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
                "name": " \"Mirai",
                "count": 855,
                "types": [
                    "hash"
                ],
                "sampleIndicators": [
                    " \"d0dc64eec7049199eb7516c17bd2daea7fdc14ee8c103f70f98a9340a1acfcfd",
                    " \"cfc4c4c0cb4652eda655845440c29e00c77659e21e331ea104dd056351328da8",
                    " \"efe91df0741a0529c898501bad566eabb460e45c9e6a74cd73026863f27fe1c7"
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
        "totalAttacksThisHour": 49979,
        "lastCalculated": "2026-09-29 04:56 IST"
    }
};
