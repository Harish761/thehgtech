// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-08-31T21:37:03.191741+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-08-31T21:37:02.844026+05:30",
    "lastUpdatedFormatted": "Aug 31, 2026 at 09:37 PM IST",
    "comparisonPeriod": "Aug 30 \u2013 Aug 31, 2026",
    "vendors": {
        "OpenPhish": {
            "description": "Real-time phishing URL feed updated every 15 minutes. Tracks active phishing sites targeting major brands and financial institutions.",
            "website": "https://openphish.com/",
            "updateFrequency": "Every 15 minutes",
            "iocCount": 297,
            "iocDataUrl": "https://thehgtech.com/ioc-data/openphish.json",
            "stats": {
                "total": 297,
                "newInLastHour": 297,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxps://urlto[.]me/2Bvde",
                "hxxp://new-click-app-99[.]surge[.]sh/",
                "hxxps://bsccoin-transfer[.]vercel[.]app/",
                "hxxp://www[.]cancelacionoutlook-two[.]vercel[.]app/",
                "hxxps://obonteeeezip--opticaperichi[.]replit[.]app/"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 763,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 763,
                "newInLastHour": 163,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"a4fa78bf4340698eca8b40d94b26a38cdcf090b006c179f47635368e6372f376",
                " \"7d3a68bcfc9e900a2f4c064630e4274c75e0f123cb5a1fc3b265adcb743bc92c",
                " \"199475a4d7f6af24f2ea00221ba1decfcad4ef79c6cff42b9dbed9b90525f47d",
                " \"9134d73a1b83587ba15ff9205646d73ead718cb161b606fe450dcc981709ea41",
                " \"8d9a05abe56fdabcd4a3887bb97c37958f9faeb7a66ef751d7a1f0750b97701d"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1704,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1704,
                "newInLastHour": 3,
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
                "1[.]12[.]229[.]231",
                "1[.]183[.]160[.]23",
                "1[.]183[.]41[.]170",
                "1[.]193[.]37[.]207",
                "1[.]198[.]31[.]248"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 7024,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 7024,
                "newInLastHour": 7024,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]0[.]164[.]165",
                "1[.]2[.]174[.]204",
                "1[.]20[.]150[.]200",
                "1[.]20[.]215[.]65",
                "1[.]214[.]214[.]114"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 15578,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 15578,
                "newInLastHour": 15578,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://112[.]242[.]12[.]244:37332/i",
                "hxxp://112[.]242[.]12[.]244:37332/bin[.]sh",
                "hxxp://39[.]90[.]185[.]198:50020/i",
                "hxxp://42[.]226[.]65[.]211:45778/i",
                "hxxp://60[.]214[.]60[.]167:37714/i"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 4614,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 4614,
                "newInLastHour": 4479,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"qoxyjymy[.]workers[.]dev\"",
                " \"hxxp://uygprdfkttn6xhsvngx3yjn2sa5mef6czptzkxnutgo7satsjqlo5pqd[.]onion:50051\"",
                " \"r2vpglmz42fs5762tchek55bg4kdg3c6ozipg7wqs2ghzbhsdtwkzmyd[.]onion\"",
                " \"rz5lecsm2re5ec4im362jnalrypxylxsdobuibuotbovvs4d3ctrcoyd[.]onion\"",
                " \"hhj2nouojnatg6gvhfgrcqdanoe244gf26pixpnrcoxs7jiqu4atvzyd[.]onion\""
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
            "iocCount": 10598,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 10598,
                "newInLastHour": 16,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "a7a6a1125d19a58e8b9ca2c7d187915e06c0adce",
                "52a61a5bae1d5d4fb771c4d8ab668c3570c77283",
                "ed312f7ad58a9faec6d3c93aabf598335fdf494c",
                "b1382377a32ee6c85e47edf264f1f6ef5b49e2a3",
                "d268bd42f68634bb226be6b56dc4b7c13e930d2a"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 48168,
            "activeSources": 8,
            "criticalAlerts": 26615,
            "activeCampaigns": 217
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 16048,
                "trend": "stable",
                "percentage": -2
            },
            {
                "category": "C2",
                "count": 10567,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 4201,
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
                "name": "malware_download",
                "count": 15260,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://203[.]204[.]158[.]100:48107/bin[.]sh",
                    "hxxp://222[.]141[.]127[.]225:42871/bin[.]sh",
                    "hxxp://115[.]50[.]31[.]109:50819/i"
                ]
            },
            {
                "name": "CINS Threat List",
                "count": 15000,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]181[.]200[.]22",
                    "1[.]183[.]160[.]23",
                    "1[.]192[.]176[.]104"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1705,
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
                "count": 1440,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "7f44d36f1f6bd375ba4e4a7866328a76047ce498",
                    "f351f7dbe9c583f75758b39cd307f5359d110c73",
                    "7bf78d44f61a05e919479a1cf3e0ce158a50a0c6"
                ]
            },
            {
                "name": " \"win.cobalt_strike\"",
                "count": 1298,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"106[.]15[.]10[.]2:5672\"",
                    " \"106[.]15[.]10[.]2:111\"",
                    " \"106[.]15[.]10[.]2:4369\""
                ]
            },
            {
                "name": "Vidar",
                "count": 747,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "a974b9d90161d8c5221961c65a975d81959cdb40",
                    "a7fa6117a38135c4d9c26ec7e37f15b361535edf",
                    "711c3a7bd15ae5377f4c395e23b3d8b8f1327ced"
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
            },
            {
                "name": "QuasarRAT",
                "count": 700,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "a6e6aa58bac84e56b868f5f618ef227b75d7208e",
                    "d123d7f43d63545c7a8f643acbe73e81f35c3f14",
                    "9b4c3ff8dc5891693f443320e3c1167c7cebe2b7"
                ]
            },
            {
                "name": "LummaStealer",
                "count": 558,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "a45080c92a0b2314966517a4643ebf280e88a11b",
                    "501d817bb1780acfe5e47082c43472bda8068e4d",
                    "2beac2ee8b2fe7625d4de9f5381d37f200965f91"
                ]
            },
            {
                "name": " \"win.pure_rat\"",
                "count": 539,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"94[.]228[.]166[.]168:56002\"",
                    " \"45[.]225[.]135[.]156:56003\"",
                    " \"217[.]60[.]195[.]109:56001\""
                ]
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious IPs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": "malware_download",
        "totalAttacksThisHour": 42565,
        "lastCalculated": "2026-08-31 21:37 IST"
    }
};
