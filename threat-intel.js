// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-09-03T04:03:06.567569+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-09-03T04:03:06.230729+05:30",
    "lastUpdatedFormatted": "Sep 03, 2026 at 04:03 AM IST",
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
            "iocCount": 784,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 784,
                "newInLastHour": 16,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"6ece7c73a89d0aea67a9f38a49b7589b54e7e07ff4dd6cf1c4b7ff0905d15880",
                " \"847ccdf192ec6c7278d8f235ae3c6f48f11ff941fc1c2807680e2fc5344b1065",
                " \"ad820b12eaf9a124fd15f846859b765441ff31d83613872f829691905245809f",
                " \"2ae3c4bb100d33d7de57809caf7447d09e8afec83f28d246c3f9d772523f09d4",
                " \"cabddafb8e09e8d852901885bead3dccd00805d41bd5bde3cd0e08ccc9a7ac34"
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
                "1[.]119[.]158[.]77",
                "1[.]12[.]229[.]231",
                "1[.]183[.]41[.]171",
                "1[.]193[.]37[.]207",
                "1[.]193[.]63[.]206"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 11621,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 11621,
                "newInLastHour": 11621,
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
            "iocCount": 15914,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 15914,
                "newInLastHour": 15914,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://220[.]201[.]25[.]49:47541/bin[.]sh",
                "hxxp://95[.]9[.]35[.]137:43208/i",
                "hxxp://163[.]142[.]93[.]157:39139/i",
                "hxxp://183[.]151[.]171[.]156:58331/i",
                "hxxp://95[.]9[.]35[.]137:43208/bin[.]sh"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 5633,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 5633,
                "newInLastHour": 5164,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"zinury[.]workers[.]dev\"",
                " \"2343medieval[.]workers[.]dev\"",
                " \"speakingfepi21[.]life\"",
                " \"apparatinpi22[.]life\"",
                " \"bladehostpi[.]life\""
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
            "iocCount": 10623,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 10623,
                "newInLastHour": 35,
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
            "totalIndicators": 49738,
            "activeSources": 8,
            "criticalAlerts": 27296,
            "activeCampaigns": 246
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 16730,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "C2",
                "count": 10566,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 4485,
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
                "count": 15906,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://60[.]19[.]4[.]185:54029/bin[.]sh",
                    "hxxp://219[.]157[.]63[.]238:58386/bin[.]sh",
                    "hxxp://123[.]10[.]225[.]139:46476/bin[.]sh"
                ]
            },
            {
                "name": "CINS Threat List",
                "count": 15000,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]120[.]123[.]117",
                    "1[.]15[.]14[.]29",
                    "1[.]180[.]184[.]182"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1706,
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
                "count": 1441,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "8c2a430246ca36ca14885fe1a101c61eaab4a96c",
                    "7f44d36f1f6bd375ba4e4a7866328a76047ce498",
                    "f351f7dbe9c583f75758b39cd307f5359d110c73"
                ]
            },
            {
                "name": " \"win.cobalt_strike\"",
                "count": 1298,
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
                "count": 743,
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
                "count": 700,
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
                "count": 552,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"31[.]57[.]147[.]200:56001\"",
                    " \"31[.]57[.]147[.]200:56002\"",
                    " \"217[.]60[.]102[.]3:56003\""
                ]
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious IPs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": " \"js.iclickfix\"",
        "totalAttacksThisHour": 48055,
        "lastCalculated": "2026-09-03 04:03 IST"
    }
};
