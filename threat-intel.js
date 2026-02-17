// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-02-18T00:59:38.582859+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-02-18T00:59:38.307371+05:30",
    "lastUpdatedFormatted": "Feb 18, 2026 at 12:59 AM IST",
    "comparisonPeriod": "Feb 17 \u2013 Feb 18, 2026",
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
            "iocCount": 1147,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 1147,
                "newInLastHour": 135,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"c0f4578e9139e9bb1a7cf24355f33a9d142ca7f981c890940955f493c9d72872",
                " \"175799bfd93b0d211bf0be2626b489e64ebff5bdccb68560e7af9c49fe040e78",
                " \"c46953cbc35b20f05689b3add134e34972519ab394314fe7b978a2b651762ed2",
                " \"3a8e30685e2bb20158b2a5442a9f59ef452fcf4d43ca7edb3204e44a57e67e40",
                " \"cd574904dd47552078824ffb133141fc799ed1eec0de501b66fa84567a76ec24"
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
            "iocCount": 6893,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 6893,
                "newInLastHour": 6893,
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
            "iocCount": 20233,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 20233,
                "newInLastHour": 20233,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://92[.]127[.]239[.]19:64742/[.]i",
                "hxxp://78[.]92[.]241[.]9:43121/[.]i",
                "hxxp://2[.]187[.]250[.]85:39885/[.]i",
                "hxxp://81[.]16[.]247[.]83:54069/[.]i",
                "hxxp://78[.]149[.]208[.]71:52875/[.]i"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 1073,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 1073,
                "newInLastHour": 839,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"calmnight[.]gentlewind[.]coupons\"",
                " \"151[.]243[.]109[.]247:4444\"",
                " \"summerday[.]gentlewind[.]coupons\"",
                " \"1[.]94[.]166[.]110:10001\"",
                " \"178[.]16[.]55[.]160:2323\""
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
            "iocCount": 8979,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 8979,
                "newInLastHour": 7,
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
            "totalIndicators": 47791,
            "activeSources": 8,
            "criticalAlerts": 29937,
            "activeCampaigns": 224
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 20989,
                "trend": "stable",
                "percentage": 1
            },
            {
                "category": "C2",
                "count": 8948,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 546,
                "trend": "stable",
                "percentage": 1
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
                "count": 19938,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://94[.]156[.]152[.]217/yarn",
                    "hxxp://94[.]156[.]152[.]217/bins/pspc",
                    "hxxp://110[.]37[.]18[.]21:33251/i"
                ]
            },
            {
                "name": "CINS Threat List",
                "count": 15000,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]0[.]164[.]165",
                    "1[.]11[.]132[.]194",
                    "1[.]15[.]118[.]23"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1472,
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
                "count": 1383,
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
                "count": 618,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "313aa465da1c887d1189e74be08d3e79306192c2",
                    "4091cdf235522076668c6f698479d4af4e5d2bf8",
                    "f7b6ed231ee6c9dc773697ae24f09c559fbee477"
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
                "name": "Vidar",
                "count": 369,
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
                "name": " \"Mirai",
                "count": 367,
                "types": [
                    "hash"
                ],
                "sampleIndicators": [
                    " \"d34e24978219766bb965326f67424074983406ccca35fb54a17f50fbe04b7945",
                    " \"2035949a25341757ec979bf241ec3fd33d4afb4f1ed8022b96910fe949fb36af",
                    " \"f74f3659cc7abc205eef5be1f4806554a1105ad3f7b5079d9613253097d007fd"
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
        "fastestRisingThreat": "malware_download",
        "totalAttacksThisHour": 43413,
        "lastCalculated": "2026-02-18 00:59 IST"
    }
};
