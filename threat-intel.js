// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-02-17T22:40:35.053734+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-02-17T22:40:34.775664+05:30",
    "lastUpdatedFormatted": "Feb 17, 2026 at 10:40 PM IST",
    "comparisonPeriod": "Feb 16 \u2013 Feb 17, 2026",
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
                "hxxp://glistening-bonbon-2acaf3[.]netlify[.]app/",
                "hxxps://easy-bank-psi[.]vercel[.]app/",
                "hxxps://www[.]easy-bank-psi[.]vercel[.]app/",
                "hxxps://financeunisocks[.]xyz/",
                "hxxp://netflix-two-ashy[.]vercel[.]app/"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 1025,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 1025,
                "newInLastHour": 304,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"d34e24978219766bb965326f67424074983406ccca35fb54a17f50fbe04b7945",
                " \"2035949a25341757ec979bf241ec3fd33d4afb4f1ed8022b96910fe949fb36af",
                " \"2f2d721db46d14fb8d759b8b6f49c28b44586ba89063085528f57fb618783e0e",
                " \"594403b943ccccb6926833e355d3ca3d8af15251499bb36426d1f17bd7e5ec5d",
                " \"a80c12e9918e846ee99c8aed69c882e7a2587712300519099b538e73adf74e1a"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1472,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1472,
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
                "2.56.192.0/22",
                "2.57.122.0/24"
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
                "1[.]0[.]164[.]165",
                "1[.]11[.]132[.]194",
                "1[.]15[.]118[.]23",
                "1[.]15[.]22[.]112",
                "1[.]15[.]51[.]236"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 6962,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 6962,
                "newInLastHour": 6962,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]13[.]79[.]212",
                "1[.]14[.]12[.]141",
                "1[.]14[.]254[.]146",
                "1[.]145[.]11[.]218",
                "1[.]15[.]77[.]170"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 19938,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 19938,
                "newInLastHour": 19938,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://94[.]156[.]152[.]217/yarn",
                "hxxp://94[.]156[.]152[.]217/bins/pspc",
                "hxxp://110[.]37[.]18[.]21:33251/i",
                "hxxp://94[.]156[.]152[.]217/bins/parm",
                "hxxp://110[.]37[.]38[.]88:52412/i"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 1081,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 1081,
                "newInLastHour": 847,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"routing[.]apple2dispatch[.]coupons\"",
                " \"p8x1m[.]apple2dispatch[.]coupons\"",
                " \"l3rn0n-llne[.]lemon8logistics[.]coupons\"",
                " \"warehouse[.]lemon8logistics[.]coupons\"",
                " \"rnang0-rnix[.]mango6courier[.]coupons\""
            ]
        },
        "Feodo Tracker": {
            "description": "Botnet C2 server IPs from Feodo Tracker. Tracks Dridex, Emotet, TrickBot, QakBot, and BazarLoader.",
            "website": "https://feodotracker.abuse.ch/",
            "updateFrequency": "Hourly",
            "iocCount": 3,
            "iocDataUrl": "https://thehgtech.com/ioc-data/feodo-tracker.json",
            "stats": {
                "total": 3,
                "newInLastHour": 3,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "162[.]243[.]103[.]246",
                "172[.]232[.]59[.]14",
                "178[.]62[.]3[.]223"
            ]
        },
        "SSL Blacklist": {
            "description": "Malicious SSL certificates used by botnet C2 servers. Helps detect encrypted malware communications.",
            "website": "https://sslbl.abuse.ch/",
            "updateFrequency": "Daily",
            "iocCount": 8972,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 8972,
                "newInLastHour": 20,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "313aa465da1c887d1189e74be08d3e79306192c2",
                "99ccda510a0a8e3f692ae9aab985e15bd3ac1619",
                "e89906297ea54d3a4d9648c9b2602552d24f050e",
                "ddc804f989c85db6fb3f1185a6a3f8c73489f827",
                "d9f0ae4d93f594855b95e3fcb9672f882088bf87"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 47376,
            "activeSources": 8,
            "criticalAlerts": 29529,
            "activeCampaigns": 226
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 20594,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "C2",
                "count": 8935,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 540,
                "trend": "stable",
                "percentage": -2
            },
            {
                "category": "Phishing",
                "count": 301,
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
                "count": 19801,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxps://crate[.]peach3package[.]coupons/edge",
                    "hxxp://115[.]54[.]124[.]15:57879/i",
                    "hxxp://42[.]176[.]124[.]222:35772/bin[.]sh"
                ]
            },
            {
                "name": "CINS Threat List",
                "count": 15000,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]11[.]132[.]194",
                    "1[.]15[.]118[.]23",
                    "1[.]15[.]22[.]112"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1470,
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
                "count": 1380,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "bef81c1fd26e84e5e25a4182bf668304ba2891da",
                    "adb1b31a6283691b205839f5e3ce4f8ed7aa5f54",
                    "97e58eec776ad990a10d1f4a932e1a4ae48636b3"
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
                "count": 619,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "4091cdf235522076668c6f698479d4af4e5d2bf8",
                    "f7b6ed231ee6c9dc773697ae24f09c559fbee477",
                    "71f4fecadb5ed6289cca27ffaedd2ec02f4450e0"
                ]
            },
            {
                "name": "LummaStealer",
                "count": 535,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "e2293f74d8d72bde90bb0424038259a9e3126e1b",
                    "69101b8edfa5d5e2ead4512a6d71c84748b0c012",
                    "1d28cc6dca52e95f859739c39a04d794671f66d9"
                ]
            },
            {
                "name": " \"Mirai",
                "count": 380,
                "types": [
                    "hash"
                ],
                "sampleIndicators": [
                    " \"5bb7ac86b01c0f2dd4aa56b7c0a1a66d65cd0745d9760c533edb7024f45eacc3",
                    " \"ff38c4c73fbe1c98624a3dba227f51f7c61d10e75a6e0c3ff36b8926a4edb30e",
                    " \"7fbd8b70c4ec11802a8a4e9b857278bf81e4f57ad278f3309a87726f2b79fce6"
                ]
            },
            {
                "name": "Vidar",
                "count": 364,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "e89906297ea54d3a4d9648c9b2602552d24f050e",
                    "ddc804f989c85db6fb3f1185a6a3f8c73489f827",
                    "c8289f1dbf34119443a3077fd879c3433506f358"
                ]
            },
            {
                "name": "Rhadamanthys",
                "count": 355,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "f999c0da0e983becc1c935444c5e609be26b0bcf",
                    "4101579ae950c954fc1096adf43bdefcf0364cfd",
                    "0c3ee8188ce35b6bb11d5b12a0e1e28310188b4e"
                ]
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious IPs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": " \"Grandoreiro",
        "totalAttacksThisHour": 43378,
        "lastCalculated": "2026-02-17 22:40 IST"
    }
};
