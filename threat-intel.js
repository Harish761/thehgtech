// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-09-28T01:13:32.149008+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-09-28T01:13:31.844129+05:30",
    "lastUpdatedFormatted": "Sep 28, 2026 at 01:13 AM IST",
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
            "iocCount": 1319,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 1319,
                "newInLastHour": 156,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"52a63c6f9984abd5b875202df2f39751cbd7f0d4d55ee69b39bd8765148b48db",
                " \"3d6778c3adb6112416e9e980331bbfd7ed7ee693eb1285d9a8dcfc6e2aff9d88",
                " \"5b5456493c418135876a06a8ae73d36566eef15bc79ce27f2a68937e09cf9b86",
                " \"63b263a95cb0aaf8d2c7cc4e77387575af20fdd04132fd723db5b3a5a6fea1d6",
                " \"fe4bdb4f9039fb3f081c4572e9665c91b284edb3be687c781e36ab95be3803c7"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1710,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1710,
                "newInLastHour": 48,
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
                "1[.]193[.]58[.]176",
                "1[.]2[.]173[.]126"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 11724,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 11724,
                "newInLastHour": 11724,
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
            "iocCount": 14833,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 14833,
                "newInLastHour": 14833,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://115[.]52[.]32[.]173:44482/i",
                "hxxp://182[.]127[.]46[.]169:57332/bin[.]sh",
                "hxxp://39[.]90[.]149[.]215:48318/i",
                "hxxp://115[.]204[.]46[.]72:55415/i",
                "hxxp://185[.]130[.]235[.]107:59831/i"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 12290,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 12290,
                "newInLastHour": 8979,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"bmdul37446[.]workers[.]dev\"",
                " \"94[.]237[.]62[.]102:31337\"",
                " \"94[.]154[.]43[.]217:31337\"",
                " \"94[.]103[.]2[.]70:31337\"",
                " \"91[.]199[.]32[.]35:31337\""
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
                "newInLastHour": 8616,
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
            "totalIndicators": 48858,
            "activeSources": 8,
            "criticalAlerts": 18304,
            "activeCampaigns": 184
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 16093,
                "trend": "stable",
                "percentage": 2
            },
            {
                "category": "Botnet",
                "count": 4552,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "C2",
                "count": 2211,
                "trend": "down",
                "percentage": -79
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
                    "1[.]193[.]58[.]176",
                    "1[.]2[.]173[.]126",
                    "1[.]24[.]16[.]10"
                ]
            },
            {
                "name": "malware_download",
                "count": 14732,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://185[.]89[.]156[.]101:34940/i",
                    "hxxp://111[.]185[.]147[.]232:47470/i",
                    "hxxp://161[.]81[.]121[.]227:44381/bin[.]sh"
                ]
            },
            {
                "name": " \"win.asyncrat\"",
                "count": 3339,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"46[.]151[.]182[.]5:8808\"",
                    " \"169[.]58[.]38[.]91:5552\"",
                    " \"169[.]58[.]38[.]91:3110\""
                ]
            },
            {
                "name": " \"unknown_loader\"",
                "count": 2441,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"www[.]comoshops[.]com\"",
                    " \"www[.]ksbiblio[.]com\"",
                    " \"www[.]resourcebooks[.]net\""
                ]
            },
            {
                "name": " \"js.iclickfix\"",
                "count": 2342,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"communicationmagicwithmen[.]com\"",
                    " \"housedesignideas[.]net\"",
                    " \"internetandcableservicesatgadget[.]com\""
                ]
            },
            {
                "name": " \"win.cobalt_strike\"",
                "count": 1676,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"38[.]190[.]196[.]25:5638\"",
                    " \"14[.]225[.]212[.]124:53\"",
                    " \"ns1[.]kcsc[.]tf\""
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1662,
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
                "name": " \"Mirai",
                "count": 834,
                "types": [
                    "hash"
                ],
                "sampleIndicators": [
                    " \"b16ab770e95cd2aef7910b61515d25c7f0bc5adff9999ced9a5856085b041cee",
                    " \"72a62bcc740fe3e0b6c02667216ae3a2b35156458ddd02427898b603765cdba9",
                    " \"147d9709a32ba4fac8a6a5802f04b9810ce18bc7c7fc526e2becf3087070623a"
                ]
            },
            {
                "name": " \"win.pure_rat\"",
                "count": 624,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"80[.]76[.]49[.]48:7575\"",
                    " \"31[.]76[.]125[.]23:443\"",
                    " \"64[.]89[.]161[.]92:56001\""
                ]
            },
            {
                "name": "Vidar",
                "count": 597,
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
        "fastestRisingThreat": "AsyncRAT",
        "totalAttacksThisHour": 59661,
        "lastCalculated": "2026-09-28 01:13 IST"
    }
};
