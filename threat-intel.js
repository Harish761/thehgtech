// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-03-05T00:51:10.439324+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-03-05T00:51:10.159293+05:30",
    "lastUpdatedFormatted": "Mar 05, 2026 at 12:51 AM IST",
    "comparisonPeriod": "Mar 04 \u2013 Mar 05, 2026",
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
                "hxxp://bafybeieioorq2gemlvbkffwwttxkijnn7lb3kjh4rbvh223jb5qrzesgqa[.]ipfs[.]dweb[.]link/rote634[.]html/",
                "hxxps://robiox[.]com[.]af/search/users/?keyword=",
                "hxxp://m[.]padisahabet[.]vip/",
                "hxxps://esdgte2[.]pages[.]dev/-/zh/gp/video/detail/b00cu0m74k/ref=atv_hm_hom_c_ob7591f8_brws_6_6?jic=8%7Cegrzdm9k/",
                "hxxps://shorten[.]tv/Summhaxatec"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 735,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 735,
                "newInLastHour": 8,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"3b0fea3b54306d61b79ac98c23d5e2425a856860e19f9606d6e6e1b8947eaa85",
                " \"53de02dd0d20f3c8371f1a970be6fb1367d5e1b63d2f779ba15041991d450b68",
                " \"da701cef0f825f0012ae82ede21b74c61806760c515f1f045cd9d050848e697c",
                " \"e3fcd5939117e6d491f2401bedc427173da1298d69f48b04ceb049817a3d47bd",
                " \"5923bca62a5df9e12255a6726bccbed3fbb84ba59385cc21d07cac986b2bdcb4"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1533,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1533,
                "newInLastHour": 5,
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
                "1[.]15[.]118[.]23",
                "1[.]170[.]61[.]110",
                "1[.]177[.]162[.]3",
                "1[.]180[.]252[.]30",
                "1[.]188[.]101[.]189"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 6995,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 6995,
                "newInLastHour": 6995,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]12[.]217[.]80",
                "1[.]13[.]6[.]145",
                "1[.]145[.]115[.]223",
                "1[.]214[.]117[.]218",
                "1[.]214[.]197[.]163"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 19059,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 19059,
                "newInLastHour": 19059,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://61[.]52[.]1[.]187:38848/i",
                "hxxps://long-run[.]longtime[.]in[.]net/verification[.]google",
                "hxxp://110[.]37[.]66[.]198:54237/i",
                "hxxp://202[.]107[.]93[.]187:42420/i",
                "hxxps://chrono07[.]longtime[.]in[.]net/verification[.]google"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 1304,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 1304,
                "newInLastHour": 1110,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"long-run[.]longtime[.]in[.]net\"",
                " \"go88vn[.]uk[.]com\"",
                " \"vcq[.]uk[.]com\"",
                " \"chrono07[.]longtime[.]in[.]net\"",
                " \"time-v2[.]longtime[.]in[.]net\""
            ]
        },
        "Feodo Tracker": {
            "description": "Botnet C2 server IPs from Feodo Tracker. Tracks Dridex, Emotet, TrickBot, QakBot, and BazarLoader.",
            "website": "https://feodotracker.abuse.ch/",
            "updateFrequency": "Hourly",
            "iocCount": 4,
            "iocDataUrl": "https://thehgtech.com/ioc-data/feodo-tracker.json",
            "stats": {
                "total": 4,
                "newInLastHour": 4,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "162[.]243[.]103[.]246",
                "178[.]62[.]3[.]223",
                "27[.]133[.]154[.]218",
                "34[.]204[.]119[.]63"
            ]
        },
        "SSL Blacklist": {
            "description": "Malicious SSL certificates used by botnet C2 servers. Helps detect encrypted malware communications.",
            "website": "https://sslbl.abuse.ch/",
            "updateFrequency": "Daily",
            "iocCount": 9125,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 9125,
                "newInLastHour": 18,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "26cdbbd6a4fbb707f7975e40add9293ee86b5709",
                "7ac069fc350efebe9739bfd104f7c42e944d286d",
                "d5a586a42fd4e36396467ae8d16045a5efd6bada",
                "f856334cbdfb8b6d59158085280f3b830fab2fba",
                "db487bc68b31911611b2f35ebd5c2bd21a3ae5ec"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 47100,
            "activeSources": 8,
            "criticalAlerts": 28947,
            "activeCampaigns": 229
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 19833,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "C2",
                "count": 9114,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 896,
                "trend": "stable",
                "percentage": -6
            },
            {
                "category": "Phishing",
                "count": 303,
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
                "count": 19020,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxps://haven-v7[.]ironhaven[.]in[.]net/verification[.]google",
                    "hxxp://112[.]242[.]60[.]170:59583/i",
                    "hxxp://123[.]5[.]147[.]188:51001/i"
                ]
            },
            {
                "name": "CINS Threat List",
                "count": 15000,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]15[.]118[.]23",
                    "1[.]170[.]61[.]110",
                    "1[.]180[.]252[.]30"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1528,
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
                "count": 1388,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "d5a586a42fd4e36396467ae8d16045a5efd6bada",
                    "b4f112278f6f59e5e9d0a2aeb252c111a3ae8603",
                    "08ed72afb9e65a6b0c216c2f47dfea81d64c9289"
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
                "count": 630,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "f856334cbdfb8b6d59158085280f3b830fab2fba",
                    "ca70cb7bfbc3f071b0a03f7d77ed94339490ed8a",
                    "6f7f3607d11da6dbc7600245f36591f578272be3"
                ]
            },
            {
                "name": "LummaStealer",
                "count": 537,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "2987e30402370bdcbf291aedc9cd52a9a79bda0c",
                    "6fd95f4a2d9cec238cbe2e1756890381c4fae3cb",
                    "e2293f74d8d72bde90bb0424038259a9e3126e1b"
                ]
            },
            {
                "name": "Vidar",
                "count": 382,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "c6c5cbb14fe2839ef4ece10f4b65bf92808f8440",
                    "a5d8a396d7553814e5ac56706fde721dce28b849",
                    "dd1f8bbdf08eedbfdc5518f707f5009721d778a1"
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
            },
            {
                "name": "Gozi",
                "count": 349,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "61d991d7063e5e7470daa3059357f8282e680bb7",
                    "68b4fc7da837c64332b9f019adaef4c7038ec85d",
                    "e0f7072057c5deeb21c598673740debc7f6eb8a1"
                ]
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious IPs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": "malware_download",
        "totalAttacksThisHour": 42499,
        "lastCalculated": "2026-03-05 00:51 IST"
    }
};
