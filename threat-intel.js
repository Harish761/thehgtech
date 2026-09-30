// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-09-30T20:22:46.490705+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-09-30T20:22:46.175576+05:30",
    "lastUpdatedFormatted": "Sep 30, 2026 at 08:22 PM IST",
    "comparisonPeriod": "Sep 29 \u2013 Sep 30, 2026",
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
                "hxxps://gobli[.]world/to/pdfstedex[.]html",
                "hxxp://free-5506938[.]webadorsite[.]com/",
                "hxxps://en-ledger-us-live-cdn[.]netlify[.]app/",
                "hxxps://hawaslilaw[.]com/cgi/sfdoxs[.]html",
                "hxxps://mtoken-hk-cdn[.]autos/"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 1327,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 1327,
                "newInLastHour": 344,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"8e3df94a5ee61add57686c5939b1173aefa8be5814b0e76aec69cbf133cbd53d",
                " \"6a93861d9d3604a31a32485a317d5056b54b530588fdebe935b6e23d85272de7",
                " \"389a013800d3201b17aa1ea01b30ec6919a3757b5d5af583c4cb210e45e6eb18",
                " \"5ebb38c858a0b0202708649408ef7b79d02472fd61fd00d7f071f505388087f3",
                " \"a5ada65dd4534fe181f45f227ef28f9a86229ea3de5e2a693db652bb350f7a9c"
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
                "newInLastHour": 34,
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
                "1[.]12[.]229[.]231",
                "1[.]181[.]89[.]199",
                "1[.]192[.]129[.]106",
                "1[.]193[.]63[.]174"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 5378,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 5378,
                "newInLastHour": 5378,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]0[.]164[.]165",
                "1[.]117[.]72[.]220",
                "1[.]162[.]216[.]37",
                "1[.]162[.]248[.]139",
                "1[.]2[.]187[.]97"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 15362,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 15362,
                "newInLastHour": 15362,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxps://ficus[.]in/img/img_011624[.]png",
                "hxxps://nota-fical-online[.]lat/d/abaobwl?r=20147CFB5C8ED6466D",
                "hxxp://5[.]252[.]177[.]210:8090/test[.]bat",
                "hxxps://drive[.]google[.]com/uc?export=download&id=1csBpqeLvVXlby1H-hXTi8JliwAFl12rv",
                "hxxp://182[.]119[.]35[.]86:52393/i"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 6741,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 6741,
                "newInLastHour": 6373,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"9dg185kq[.]sensa138var[.]com\"",
                " \"nttdt2uz[.]teescleaning[.]com\"",
                " \"teescleaning[.]com\"",
                " \"hxxp://petcarv[.]click:8239/attachments\"",
                " \"hxxp://equigfy[.]biz:9932/sessions\""
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
            "iocCount": 10835,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 10835,
                "newInLastHour": 117,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "5fe196813d0bf092a5d8f3ef550fe959a86ccf87",
                "bfe74bc4c5528d9ea8172159d9f77822251ff841",
                "1779ccab363236a86e64a2a71f0d2daa44d2351a",
                "8a7391f717ea7997c5196091415a9d52e726ddf2",
                "bf9e6b1b3169fd64cc1fc836b4307a2c629b46b0"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 50818,
            "activeSources": 8,
            "criticalAlerts": 27097,
            "activeCampaigns": 261
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 16386,
                "trend": "stable",
                "percentage": -1
            },
            {
                "category": "C2",
                "count": 10711,
                "trend": "stable",
                "percentage": -1
            },
            {
                "category": "Botnet",
                "count": 4637,
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
                "name": "malware_download",
                "count": 15090,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://59[.]96[.]141[.]187:33588/i",
                    "hxxp://42[.]224[.]194[.]138:58573/i",
                    "hxxp://42[.]224[.]252[.]148:51347/i"
                ]
            },
            {
                "name": "CINS Threat List",
                "count": 15000,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]117[.]171[.]170",
                    "1[.]12[.]229[.]231",
                    "1[.]24[.]16[.]103"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1659,
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
                "count": 1454,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "205d49b6c7313e16e931e1b5873cc20be0dee85b",
                    "94c4ec66b6f57c29ac935890d7796decea67af37",
                    "81c9eddccea61f8fa9788208189d79b82e3443a4"
                ]
            },
            {
                "name": " \"win.cobalt_strike\"",
                "count": 1346,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"8[.]166[.]128[.]186:50053\"",
                    " \"104[.]143[.]204[.]78:8443\"",
                    " \"156[.]239[.]4[.]189:50050\""
                ]
            },
            {
                "name": "Vidar",
                "count": 772,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "86b5a5612e53988e28ed6604e8e9ff5476a46d0e",
                    "605e0b79c4a685b7da9524d6b71ec36bbd651b07",
                    "5f5d3a3225006f45ff8194536ef8e09cb194884d"
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
                "count": 707,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "c234496c7b0abcd873bb6bb5a54288b6d340b6ff",
                    "7a215b5a8eaf9b132cf84f22d9ee2202c2a028bf",
                    "8410f92dc9367bda715790bb163d32111731527d"
                ]
            },
            {
                "name": " \"unknown_loader\"",
                "count": 676,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"8f80af4c564e3e40d664d46956e30958b0864f9e1255dede9055144c878de7a9\"",
                    " \"thebeyondparadise[.]com\"",
                    " \"roofer-sutton[.]co[.]uk\""
                ]
            },
            {
                "name": " \"Mirai",
                "count": 644,
                "types": [
                    "hash"
                ],
                "sampleIndicators": [
                    " \"130e3e202b4c17ac6afea9a944739b3cbfe4a4f26b3a3f06b877588f4f0e256e",
                    " \"a8ec3432b30979327e26ef804d8014565240a5e3490690f305a0e4c9e15aa559",
                    " \"117a7ca405f65e3bc770fac74903e490011c35e65e1c359e8bea546841919da3"
                ]
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious URLs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": "malware_download",
        "totalAttacksThisHour": 42913,
        "lastCalculated": "2026-09-30 20:22 IST"
    }
};
