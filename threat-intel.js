// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-09-27T00:41:15.549539+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-09-27T00:41:15.280424+05:30",
    "lastUpdatedFormatted": "Sep 27, 2026 at 12:41 AM IST",
    "comparisonPeriod": "Sep 26 \u2013 Sep 27, 2026",
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
                "hxxps://wunschprodukteauswahlen33s[.]ink/08Adjcn",
                "hxxps://tokenim-hk-cdn[.]beauty/",
                "hxxps://tokenim-hk-cdn[.]pics/",
                "hxxps://menuu-aktivaspays[.]laterd[.]my[.]id/",
                "hxxps://www[.]theodore3[.]com/the-cover-up/wp-content/upgrade/Microsoft[.]html#a[.]b@c"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 1389,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 1389,
                "newInLastHour": 234,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"20025a3b2c787bcda4596822ab979305a5fb69416f7db62d771edd133ee56efe",
                " \"3b2dc9b50df56a78d18e5b674a0033d3f46db14b3732a221d4ebd247b877fa54",
                " \"f33f709c1db1b252dbcae322b2340af81cfa72f9c62e60c37c57ef4f0d8151d0",
                " \"28e0c4d5bc6675537ba47c6529877a3194a29585fb86477f66bf13c79252d2f0",
                " \"564287515cfd64a967c9b95ca85445aad7b5302b1560767def4e9cdb9d6d0440"
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
                "1[.]193[.]58[.]176",
                "1[.]193[.]63[.]32",
                "1[.]2[.]173[.]126"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 5067,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 5067,
                "newInLastHour": 5067,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]0[.]164[.]165",
                "1[.]161[.]144[.]132",
                "1[.]162[.]248[.]139",
                "1[.]179[.]158[.]74",
                "1[.]203[.]186[.]149"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 14615,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 14615,
                "newInLastHour": 14615,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://175[.]23[.]90[.]116:52011/bin[.]sh",
                "hxxp://59[.]96[.]140[.]102:45900/i",
                "hxxp://161[.]81[.]121[.]227:44381/i",
                "hxxp://182[.]176[.]116[.]4:58070/bin[.]sh",
                "hxxp://42[.]232[.]224[.]97:51962/i"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 0,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 0,
                "newInLastHour": 0,
                "lastUpdate": "just now"
            },
            "types": [],
            "sampleIndicators": []
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
            "iocCount": 10802,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 10802,
                "newInLastHour": 3,
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
            "totalIndicators": 52641,
            "activeSources": 8,
            "criticalAlerts": 26917,
            "activeCampaigns": 282
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 16120,
                "trend": "stable",
                "percentage": -1
            },
            {
                "category": "C2",
                "count": 10797,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 4631,
                "trend": "stable",
                "percentage": 10
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
                    "1[.]15[.]14[.]29",
                    "1[.]193[.]58[.]176",
                    "1[.]193[.]63[.]32"
                ]
            },
            {
                "name": "malware_download",
                "count": 14500,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://125[.]41[.]171[.]28:58495/bin[.]sh",
                    "hxxp://115[.]50[.]89[.]9:44257/bin[.]sh",
                    "hxxp://182[.]116[.]13[.]118:60029/i"
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
                "count": 1676,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"13[.]140[.]59[.]149:443\"",
                    " \"46[.]250[.]228[.]119:1337\"",
                    " \"209[.]38[.]82[.]85:8443\""
                ]
            },
            {
                "name": " \"js.iclickfix\"",
                "count": 1641,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"autopartesjavier[.]com[.]mx\"",
                    " \"blazinkajunnorth[.]com\"",
                    " \"cortinasdeacerodlux[.]com\""
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
                "name": " \"unknown_loader\"",
                "count": 1436,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"beliefdesk[.]xyz\"",
                    " \"46023953112e499e1cb8cf4717b36401af19e68946af3ae04b11c57d5405f85b\"",
                    " \"87b6b24c06f99900a8aa579caedee1e402015884c925a98dcfb0fb38dfa2de22\""
                ]
            },
            {
                "name": " \"Mirai",
                "count": 1022,
                "types": [
                    "hash"
                ],
                "sampleIndicators": [
                    " \"7d839bef911bba56eac1d8a9a009c8f01784c41115061b599aecc01572bc2ba5",
                    " \"38b008b2a92fdd20d5a01cfb925ada602cb1ae73c02bd2819969c2a9a0253d06",
                    " \"8c855bedd57062cf95635215d6c5c719e00e14d41b56433485ded9cd2d1f92d2"
                ]
            },
            {
                "name": "Vidar",
                "count": 805,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "605e0b79c4a685b7da9524d6b71ec36bbd651b07",
                    "5f5d3a3225006f45ff8194536ef8e09cb194884d",
                    "a4138cfc3c588247705c5cba498d35324463dfa2"
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
        "fastestRisingThreat": "malware_download",
        "totalAttacksThisHour": 35224,
        "lastCalculated": "2026-09-27 00:41 IST"
    }
};
