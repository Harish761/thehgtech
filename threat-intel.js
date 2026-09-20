// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-09-20T10:16:10.357027+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-09-20T10:16:10.096594+05:30",
    "lastUpdatedFormatted": "Sep 20, 2026 at 10:16 AM IST",
    "comparisonPeriod": "Sep 19 \u2013 Sep 20, 2026",
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
                "hxxps://www[.]registromxdigital[.]com/",
                "hxxps://f005[.]backblazeb2[.]com/b2api/v1/b2_download_file_by_id?fileId=4_z9ab7c8e14fe3818fa60a0e11_f11411574f907a8cd_d20260909_m223503_c005_v0501037_t0037_u01788993303554",
                "hxxp://www[.]hadiahshopee552[.]blogspot[.]com/",
                "hxxp://cf[.]780411[.]xyz/en-us/windows/shop-pcs",
                "hxxps://qrco[.]de/bh1OuF"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 1756,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 1756,
                "newInLastHour": 286,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"4e2f0e58ec5a9f6f3d0a0fd6b496afdd2df1f38d053c38df682c898226154425",
                " \"b042caa730d5d29cf55e7c1c570ae1a830f0b1bca3edbb8778f994a674e70deb",
                " \"5964f962d96b459ed59ac7fc1970703e2242b1919130c2162925cc8d6cf1be26",
                " \"e39129081ae5922a28ee9ab9ea17fe150675c2c3d1d308faf9f4185954624497",
                " \"e93daebf9b1e5904551afa93f3ae39ee3685f6cac471ac103a0eb83474e2483f"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1664,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1664,
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
                "1[.]14[.]69[.]226",
                "1[.]173[.]106[.]65",
                "1[.]188[.]100[.]255",
                "1[.]20[.]186[.]172"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 12091,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 12091,
                "newInLastHour": 12091,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]0[.]164[.]165",
                "1[.]14[.]192[.]95",
                "1[.]14[.]209[.]20",
                "1[.]15[.]21[.]86",
                "1[.]15[.]221[.]192"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 12797,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 12797,
                "newInLastHour": 12797,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://59[.]180[.]132[.]51:55956/i",
                "hxxp://42[.]235[.]140[.]223:35556/i",
                "hxxp://42[.]228[.]105[.]163:39609/i",
                "hxxp://176[.]65[.]139[.]159/bins/i686",
                "hxxp://176[.]65[.]139[.]159/bins/x86"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 5567,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 5567,
                "newInLastHour": 5361,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"hxxps://squidscript[.]com/\"",
                " \"s6paj79n[.]en-en--enerflow[.]com\"",
                " \"81[.]70[.]21[.]163:8080\"",
                " \"81[.]70[.]21[.]163:443\"",
                " \"81[.]70[.]21[.]163:8091\""
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
            "iocCount": 2136,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 2136,
                "newInLastHour": 0,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "c625552b0cc88337be1533622d895a90d8f2d227",
                "c8f25096d3b14521a804d30fb8d618f4f0b33950",
                "d260d414670f40733184875b60bb353632e73fcc",
                "6e35a76a571969f0e27a8c8c1c11c8aa21330887",
                "894348a13bd989cadc0e7dab223b2d98dd2a2a8f"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 48120,
            "activeSources": 8,
            "criticalAlerts": 25486,
            "activeCampaigns": 244
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 14768,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "C2",
                "count": 10718,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 4372,
                "trend": "stable",
                "percentage": -2
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
                    "1[.]119[.]194[.]253",
                    "1[.]12[.]229[.]231",
                    "1[.]15[.]14[.]29"
                ]
            },
            {
                "name": "malware_download",
                "count": 13101,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://61[.]53[.]74[.]99:39925/bin[.]sh",
                    "hxxp://103[.]172[.]186[.]170:41252/i",
                    "hxxp://222[.]127[.]77[.]227:37700/i"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1712,
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
                "count": 1448,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "9700462dfd419d0295b2753079208e939a853dce",
                    "048bd151ab0a9c0add6d5bba9dc73521e42d9a20",
                    "559a55c8c7779e0037429794a8836a1039dbcdc3"
                ]
            },
            {
                "name": " \"win.cobalt_strike\"",
                "count": 1374,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"101[.]43[.]31[.]60:123\"",
                    " \"149[.]30[.]232[.]29:8080\"",
                    " \"149[.]30[.]232[.]29:7000\""
                ]
            },
            {
                "name": " \"n/a",
                "count": 965,
                "types": [
                    "hash"
                ],
                "sampleIndicators": [
                    " \"b5ebae007246dd0684c8c3197286d67050d60e38036256cfc6906d1ab245a09c",
                    " \"da2ef28e88f54e82f9258a4a3e554f774300802aa3cda0419fd97a25998f8c35",
                    " \"8704cafecb314cb3118c0a44bfee2e312259c70bd3bdeb250034a7e7e7b7c6dd"
                ]
            },
            {
                "name": "Vidar",
                "count": 787,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "6e35a76a571969f0e27a8c8c1c11c8aa21330887",
                    "894348a13bd989cadc0e7dab223b2d98dd2a2a8f",
                    "513c67627217e9e62bf86dad646acdccca6bae7d"
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
                "count": 705,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "ba3714d484afb75fd03911c59aa096cee9595955",
                    "8cffe4fa8f624cb4c15790c414e04acde61e3651",
                    "de0a287fb9997f0ffbd36df79b13cfda63f0bfcd"
                ]
            },
            {
                "name": " \"win.pure_rat\"",
                "count": 617,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"94[.]154[.]32[.]189:56002\"",
                    " \"94[.]154[.]32[.]189:443\"",
                    " \"94[.]154[.]32[.]189:56001\""
                ]
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious IPs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": " \"Mirai",
        "totalAttacksThisHour": 45840,
        "lastCalculated": "2026-09-20 10:16 IST"
    }
};
