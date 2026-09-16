// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-09-17T04:22:59.005052+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-09-17T04:22:58.648068+05:30",
    "lastUpdatedFormatted": "Sep 17, 2026 at 04:22 AM IST",
    "comparisonPeriod": "Sep 16 \u2013 Sep 17, 2026",
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
                "hxxps://schtrekh[.]de/img/",
                "hxxp://www[.]900599[.]cc/",
                "hxxps://farren[.]webdesignla[.]info/ga/click/2-115159033-1585-17249-33739-18616-2212d2c02a-1b10dc49b9",
                "hxxps://brayden-15[.]pages[.]dev/",
                "hxxps://ch-pak-informations[.]bolt[.]host/"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 1670,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 1670,
                "newInLastHour": 24,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"a51cd82b5a79b11cdbdb00cff26c7fd39ad6a4a5b410d2d20d3219527b93e595",
                " \"40bbdc238176be8fb2fc89145aed45b7d0c0150191d1101a40df85070b0c4398",
                " \"e020d703bde68b8d587bf7a5345f3e306ad06f1b732c0cf4ebd3950c90da53a0",
                " \"d35c15d807f3d3a28c4297019703cf8a05da1e275209ac30048a9dc43069a912",
                " \"3aa895ad2abdcc4926f052cf69f02f3b8ecff66b0c93e01e2e98b2252c4781af"
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
                "1[.]10[.]172[.]57",
                "1[.]117[.]59[.]169",
                "1[.]12[.]56[.]30",
                "1[.]14[.]96[.]105",
                "1[.]189[.]89[.]152"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 4706,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 4706,
                "newInLastHour": 4706,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]0[.]164[.]165",
                "1[.]1[.]245[.]185",
                "1[.]14[.]64[.]225",
                "1[.]20[.]82[.]225",
                "1[.]209[.]110[.]147"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 13221,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 13221,
                "newInLastHour": 13221,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://222[.]142[.]242[.]76:51781/i",
                "hxxp://222[.]127[.]53[.]189:44150/i",
                "hxxp://222[.]142[.]242[.]76:51781/bin[.]sh",
                "hxxp://182[.]123[.]192[.]25:51135/i",
                "hxxp://61[.]53[.]148[.]53:39023/i"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 7426,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 7426,
                "newInLastHour": 6221,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"123[.]57[.]30[.]209:9999\"",
                " \"49[.]234[.]47[.]190:80\"",
                " \"107[.]150[.]25[.]65:80\"",
                " \"47[.]120[.]46[.]170:8090\"",
                " \"45[.]77[.]220[.]145:8888\""
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
            "iocCount": 10614,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 10614,
                "newInLastHour": 0,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "1e5bfc073ee72f5ae99507c87f2479ec1d5f43b7",
                "c3e6df2402e57af3e0b7c66f8282efec4a387ac6",
                "ba3714d484afb75fd03911c59aa096cee9595955",
                "90bbe9f7eacacb9bff89bbe1345a2cb4a30d2eed",
                "46b898af8e29cb2fe186de2bfdf60bc01d617720"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 50024,
            "activeSources": 8,
            "criticalAlerts": 25588,
            "activeCampaigns": 254
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 14895,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "C2",
                "count": 10693,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 4499,
                "trend": "stable",
                "percentage": -4
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
                    "1[.]117[.]59[.]169",
                    "1[.]12[.]229[.]231",
                    "1[.]12[.]56[.]30"
                ]
            },
            {
                "name": "malware_download",
                "count": 13217,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://61[.]53[.]148[.]53:39023/i",
                    "hxxp://115[.]55[.]234[.]102:53882/bin[.]sh",
                    "hxxp://62[.]60[.]226[.]140/files/5356600191/fPk5ovp[.]exe"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1714,
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
                "count": 1368,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"114[.]215[.]188[.]153:888\"",
                    " \"139[.]196[.]174[.]152:83\"",
                    " \"192[.]3[.]199[.]18:443\""
                ]
            },
            {
                "name": " \"win.asyncrat\"",
                "count": 1364,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"102[.]220[.]163[.]36:443\"",
                    " \"benaditahd[.]duckdns[.]org\"",
                    " \"172[.]94[.]18[.]103:78\""
                ]
            },
            {
                "name": " \"unknown_loader\"",
                "count": 1058,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"dc834c0c0982771016202f3ca1808d3bba329379eba79e1d04db31cafb1f43e1\"",
                    " \"afd47ef7378e573c8e575b2030355a2b65a888bdaf56c00a1e6f8e5dc980e7e5\"",
                    " \"1a0c3d520e16ae12ffa918032e608f573b716f009a05c35f64b53f128bf7376d\""
                ]
            },
            {
                "name": "Vidar",
                "count": 781,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "90bbe9f7eacacb9bff89bbe1345a2cb4a30d2eed",
                    "f166dfb0e185cab2e7bfdfff50edc67f238195c3",
                    "14bc0ce6c63bf1c1554b4cd1772c60b57c38ab09"
                ]
            },
            {
                "name": " \"n/a",
                "count": 738,
                "types": [
                    "hash"
                ],
                "sampleIndicators": [
                    " \"ef1c7270096b4d0dffb394d09416320d12aa24b9d9b70f89998d90e42ac63098",
                    " \"06a18fc06425111a95fc85c16ff679538a66c9fed00c059261856c519cb1ad73",
                    " \"d9f3c46beb0cd04099b6af230298b90b972fdd228ec4c568d6908574cd9e9125"
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
        "topAttackVector": "Malicious URLs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": " \"n/a",
        "totalAttacksThisHour": 39477,
        "lastCalculated": "2026-09-17 04:22 IST"
    }
};
