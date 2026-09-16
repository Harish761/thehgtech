// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-09-16T10:11:41.961414+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-09-16T10:11:41.633049+05:30",
    "lastUpdatedFormatted": "Sep 16, 2026 at 10:11 AM IST",
    "comparisonPeriod": "Sep 15 \u2013 Sep 16, 2026",
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
                "hxxps://app-encontrarid[.]click/isignesp[.]php",
                "hxxps://fr-spotify[.]com/683gds/",
                "hxxps://fr-spotify[.]com/683gds/recaptcha-verify[.]php",
                "hxxps://sgspotifyclone[.]netlify[.]app/",
                "hxxps://lnk[.]ink/Scanning[.]pixiv"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 1245,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 1245,
                "newInLastHour": 113,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"d1595e71990f6e3ae10a352ffc3162262f76bd3430a5e662fc91b66ab1c61fb9",
                " \"fe41e284a1d4d5d6c94f3d300f7cfff194444221c3c817360b501af9c0aceb4d",
                " \"e358897a56de14a377ddd09447a6e603605b978c836be8f9243d401c5a9430ad",
                " \"738b948f3c355ec72859c927b57b12502f6acfd21dbd7ca03bc6ce16a71b11b8",
                " \"d84ba5e8c55a04d98438daee5293598a6aa91ea3a074c494f253c00a6005a526"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 560,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 560,
                "newInLastHour": 0,
                "lastUpdate": "just now"
            },
            "types": [
                "ip-range"
            ],
            "sampleIndicators": [
                "2.26.75.0/24",
                "2.27.5.0/24",
                "2.27.62.0/24",
                "2.57.17.0/24",
                "2.58.56.0/24"
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
                "1[.]12[.]229[.]231",
                "1[.]14[.]96[.]105",
                "1[.]20[.]174[.]139",
                "1[.]24[.]16[.]149"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 4701,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 4701,
                "newInLastHour": 4701,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]0[.]164[.]165",
                "1[.]14[.]64[.]225",
                "1[.]214[.]214[.]114",
                "1[.]222[.]42[.]237",
                "1[.]224[.]237[.]122"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 12554,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 12554,
                "newInLastHour": 12554,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://223[.]112[.]189[.]134:33646/bin[.]sh",
                "hxxp://91[.]92[.]242[.]236/files-129312398/files/file_0ad97829e0695995[.]exe",
                "hxxp://222[.]142[.]214[.]152:60003/bin[.]sh",
                "hxxp://37[.]13[.]199[.]103:27056/i",
                "hxxp://115[.]63[.]80[.]217:45926/i"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 9556,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 9556,
                "newInLastHour": 8248,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"hxxp://teculse[.]click:9210/documents\"",
                " \"hxxp://spiohop[.]shop:9932/orders\"",
                " \"hxxp://booohop[.]shop:5627/images\"",
                " \"hxxp://teculse[.]click:9210/webhooks\"",
                " \"hxxp://booohop[.]shop:5627/categories\""
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
            "iocCount": 10535,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 10535,
                "newInLastHour": 28,
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
            "totalIndicators": 51365,
            "activeSources": 8,
            "criticalAlerts": 24818,
            "activeCampaigns": 274
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 14153,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "C2",
                "count": 10665,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 5445,
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
                    "1[.]14[.]121[.]115",
                    "1[.]14[.]96[.]105",
                    "1[.]181[.]200[.]22"
                ]
            },
            {
                "name": "malware_download",
                "count": 12968,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://222[.]139[.]41[.]139:41068/bin[.]sh",
                    "hxxp://125[.]41[.]78[.]139:53006/i",
                    "hxxp://222[.]138[.]151[.]181:41950/i"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1724,
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
                "count": 1444,
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
                "count": 1440,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"47[.]81[.]57[.]227:8080\"",
                    " \"47[.]81[.]57[.]227:443\"",
                    " \"5[.]104[.]86[.]108:8088\""
                ]
            },
            {
                "name": " \"win.asyncrat\"",
                "count": 1379,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"82[.]26[.]66[.]136:6606\"",
                    " \"121[.]200[.]216[.]74:80\"",
                    " \"102[.]220[.]163[.]36:2502\""
                ]
            },
            {
                "name": " \"js.iclickfix\"",
                "count": 1144,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"www[.]briannacrawford[.]com\"",
                    " \"www[.]debrancheexpert[.]tv\"",
                    " \"www[.]duegolficharter[.]com\""
                ]
            },
            {
                "name": " \"unknown_loader\"",
                "count": 1069,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"townofmainbrook[.]ca\"",
                    " \"tpglighting[.]com\"",
                    " \"trdemo[.]com[.]au\""
                ]
            },
            {
                "name": "Vidar",
                "count": 772,
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
        "fastestRisingThreat": "SSH Attacks",
        "totalAttacksThisHour": 40949,
        "lastCalculated": "2026-09-16 10:11 IST"
    }
};
