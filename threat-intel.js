// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-09-03T02:42:26.056488+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-09-03T02:42:25.712251+05:30",
    "lastUpdatedFormatted": "Sep 03, 2026 at 02:42 AM IST",
    "comparisonPeriod": "Sep 02 \u2013 Sep 03, 2026",
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
                "hxxps://www[.]360applicationpages[.]com/AccountSelection/c?c=4203b005-48b6-45a0-a7f5-9b565c9ec1d1",
                "hxxp://www[.]mighty[.]ring-whatapp[.]com[.]cn/",
                "hxxps://go-for-free-verify-badge-here[.]surge[.]sh/",
                "hxxps://www[.]go-for-free-verify-badge-here[.]surge[.]sh/",
                "hxxps://www[.]gh0stmap[.]vercel[.]app/"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 797,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 797,
                "newInLastHour": 8,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"b98c9031c643b5c8f432c41df3512f5862e5e7272a117066b478eb137ffaccc3",
                " \"14b0fdba2beb047d7796352ce56ceabeebb1a70863f29f088a046ca05246196f",
                " \"c381052b7db304df78fe1964ddd318b1df808f89f81ea78bf63c8e4927356985",
                " \"54620981fdf60ef62541fc467aacf3acdcfbdc9df8de23e2dd0fbe33e3489c96",
                " \"6b290e28bce7de325c98067c618e42432d43ec7708028cec3908982285c00f65"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1706,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1706,
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
                "1[.]120[.]123[.]117",
                "1[.]15[.]14[.]29",
                "1[.]180[.]184[.]182",
                "1[.]183[.]148[.]62",
                "1[.]183[.]160[.]23"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 11634,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 11634,
                "newInLastHour": 11634,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]0[.]164[.]165",
                "1[.]162[.]197[.]67",
                "1[.]162[.]237[.]203",
                "1[.]162[.]247[.]182",
                "1[.]174[.]208[.]30"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 15906,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 15906,
                "newInLastHour": 15906,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://60[.]19[.]4[.]185:54029/bin[.]sh",
                "hxxp://219[.]157[.]63[.]238:58386/bin[.]sh",
                "hxxp://123[.]10[.]225[.]139:46476/bin[.]sh",
                "hxxp://196[.]189[.]9[.]27:53134/bin[.]sh",
                "hxxp://60[.]23[.]235[.]89:45712/i"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 5436,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 5436,
                "newInLastHour": 4967,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"mroio94396[.]workers[.]dev\"",
                " \"koxicy[.]workers[.]dev\"",
                " \"0n9dsmrx[.]shop-neurovera[.]us\"",
                " \"54[.]87[.]15[.]178:8082\"",
                " \"38[.]247[.]165[.]127:4655\""
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
            "iocCount": 10588,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 10588,
                "newInLastHour": 49,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "d2ea1d53e2027b0378fa9346965edbcc0215e251",
                "dcd0ddb2675731126703bc235532e2fe60457b2a",
                "145f0fa0f6134e66fa5c80989c13987baf799bda",
                "6712d3901855387b6d4f3d29576f04df40fa30c1",
                "26edae2d62f7008d9a3ea68999f41316f4cdf762"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 49474,
            "activeSources": 8,
            "criticalAlerts": 27271,
            "activeCampaigns": 247
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 16719,
                "trend": "stable",
                "percentage": 3
            },
            {
                "category": "C2",
                "count": 10552,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 4474,
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
                "count": 15895,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://58[.]255[.]40[.]142:44835/i",
                    "hxxp://150[.]241[.]65[.]250:889/venv/bin/python3",
                    "hxxp://182[.]121[.]239[.]171:36990/i"
                ]
            },
            {
                "name": "CINS Threat List",
                "count": 15000,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]119[.]158[.]77",
                    "1[.]12[.]229[.]231",
                    "1[.]180[.]184[.]182"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1703,
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
                "count": 1438,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "8c2a430246ca36ca14885fe1a101c61eaab4a96c",
                    "f351f7dbe9c583f75758b39cd307f5359d110c73",
                    "7bf78d44f61a05e919479a1cf3e0ce158a50a0c6"
                ]
            },
            {
                "name": " \"win.cobalt_strike\"",
                "count": 1299,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"23[.]148[.]212[.]176:53\"",
                    " \"180[.]76[.]250[.]42:1996\"",
                    " \"118[.]25[.]50[.]96:80\""
                ]
            },
            {
                "name": "Vidar",
                "count": 751,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "145f0fa0f6134e66fa5c80989c13987baf799bda",
                    "6ddb71e5a27eccf80773188066ac92d9d39506d7",
                    "bfb6503c7c6ce8af43c41197a7fcaec491baa810"
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
                "count": 701,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "6c6027c8ff18b0f79bd3c40848c2b189a18b49ac",
                    "a6e6aa58bac84e56b868f5f618ef227b75d7208e",
                    "d123d7f43d63545c7a8f643acbe73e81f35c3f14"
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
                "count": 544,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"45[.]11[.]230[.]111:56003\"",
                    " \"178[.]16[.]55[.]134:56003\"",
                    " \"91[.]92[.]47[.]214:6666\""
                ]
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious IPs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": " \"js.iclickfix\"",
        "totalAttacksThisHour": 47872,
        "lastCalculated": "2026-09-03 02:42 IST"
    }
};
