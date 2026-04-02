// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-04-02T22:36:49.980334+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-04-02T22:36:49.673947+05:30",
    "lastUpdatedFormatted": "Apr 02, 2026 at 10:36 PM IST",
    "comparisonPeriod": "Apr 01 \u2013 Apr 02, 2026",
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
                "hxxps://rblox[.]me/s/users-463538495178-profi",
                "hxxps://guiadinheirocomshopee[.]shop/",
                "hxxps://s4w[.]in/SoiGk",
                "hxxps://iihttps-roblox[.]com/users/1924773525/profile",
                "hxxp://www[.]netflix-clone-cyan-gamma[.]vercel[.]app/"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 773,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 773,
                "newInLastHour": 34,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"eeaca1b194058fb37aeaeef21ab455c2f54b798a1f7128f767bae38e1d7a638f",
                " \"0ab588dcfdaa58554066e74f2af1820d2ec7e8349d2c6b3b2064dd51c502b14b",
                " \"e5eff5e950264f13829017e37e9dcef8a747e6da6486955476a463ec87f88631",
                " \"8d7252df516b2151ac14532a7baf6ffc3eb745f33b8f247b593eb0172ec8f971",
                " \"43c3894d7d44499a767bb843f6f16a1946071a0543ff0d121f6cf3aa4f88ef65"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1602,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1602,
                "newInLastHour": 2,
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
                "1[.]123[.]195[.]19",
                "1[.]123[.]227[.]253",
                "1[.]177[.]162[.]3",
                "1[.]178[.]175[.]72",
                "1[.]178[.]214[.]177"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 5012,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 5012,
                "newInLastHour": 5012,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]13[.]22[.]203",
                "1[.]162[.]223[.]47",
                "1[.]194[.]238[.]168",
                "1[.]214[.]117[.]218",
                "1[.]214[.]197[.]163"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 21640,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 21640,
                "newInLastHour": 21640,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://222[.]136[.]22[.]57:40679/i",
                "hxxp://222[.]142[.]208[.]17:54537/i",
                "hxxp://176[.]116[.]56[.]92:21885/i",
                "hxxp://27[.]217[.]198[.]91:45909/bin[.]sh",
                "hxxp://105[.]225[.]84[.]58:53869/bin[.]sh"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 836,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 836,
                "newInLastHour": 811,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"hxxps://t[.]me/fzebfy\"",
                " \"89[.]163[.]135[.]20:6503\"",
                " \"13[.]234[.]60[.]207:20778\"",
                " \"content[.]mvpstrat[.]com\"",
                " \"fff1f89c0e5a57690011c03d8bdfd32591511a0bcfe6b089d16a5897d3de60c8\""
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
            "iocCount": 9453,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 9453,
                "newInLastHour": 0,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "98c4ebd74e323dbf48000595c478afa4b953928f",
                "deff511f627ab662c23d4ee22cdf78869e1c194f",
                "2257a937ef96cd4821519404b0db02a2f3b506fa",
                "0a81be74d5e74dc517becc16324991db2597f5fb",
                "6a7082d678a42a1f99e5a0e086bea62a82a3f9fc"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 49601,
            "activeSources": 8,
            "criticalAlerts": 31849,
            "activeCampaigns": 215
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 22411,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "C2",
                "count": 9438,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 374,
                "trend": "up",
                "percentage": 24
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
                "percentage": 87
            },
            {
                "name": "Tech",
                "percentage": 12
            },
            {
                "name": "Finance",
                "percentage": 0
            }
        ],
        "campaigns": [
            {
                "name": "malware_download",
                "count": 21581,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://110[.]37[.]58[.]152:54537/bin[.]sh",
                    "hxxp://59[.]182[.]145[.]1:46980/bin[.]sh",
                    "hxxp://45[.]171[.]177[.]193:41280/bin[.]sh"
                ]
            },
            {
                "name": "CINS Threat List",
                "count": 15000,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]123[.]195[.]19",
                    "1[.]123[.]227[.]253",
                    "1[.]14[.]3[.]240"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1602,
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
                "count": 1395,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "9b940adeda4f1d48f5560f76bb8bfc6e46202d3b",
                    "7aa15098c33be8eea90c57dba4443afba38bce40",
                    "97ab9a73024e527aed8a20bbb1c573a21e35cc06"
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
                "count": 660,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "8b6050f589d432c56f05de438e4ec606926c97df",
                    "e1305a89f7c83c0204edeae7bb063f73c4a80612",
                    "4fb81998ac697ab9e998f1c69d89e7ea606850ed"
                ]
            },
            {
                "name": "LummaStealer",
                "count": 550,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "2ebb8f663f93eb9c8f169cc09a86f6dba1c85584",
                    "f05a2876d9129ec057ecaedfac9cc37ebe2138ad",
                    "460e554589554e5dbaeb2c6f4c6aaf93e31da41a"
                ]
            },
            {
                "name": "Vidar",
                "count": 471,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "deff511f627ab662c23d4ee22cdf78869e1c194f",
                    "6a7082d678a42a1f99e5a0e086bea62a82a3f9fc",
                    "717369000deeef90c52b7c3a0885c0371315847e"
                ]
            },
            {
                "name": "OffLoader",
                "count": 377,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "0a81be74d5e74dc517becc16324991db2597f5fb",
                    "a153d631044cb3a6e47f781170624fec9552c8c1",
                    "df46f5d70b9f8af16e2732ca36cc2e5a08bda1a9"
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
        "topAttackVector": "Malicious URLs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": "malware_download",
        "totalAttacksThisHour": 42804,
        "lastCalculated": "2026-04-02 22:36 IST"
    }
};
