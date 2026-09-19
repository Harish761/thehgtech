// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-09-20T00:04:00.637989+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-09-20T00:04:00.340030+05:30",
    "lastUpdatedFormatted": "Sep 20, 2026 at 12:04 AM IST",
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
                "hxxps://usc1[.]contabostorage[.]com/e2dce81f193044d09b18133ea4583e24:azzzzz/obum[.]html",
                "hxxps://www[.]roblox[.]com[.]hr/communities/7544919641/EVADE",
                "hxxps://f005[.]backblazeb2[.]com/file/hottttty/Hotmailnew[.]html",
                "hxxps://www[.]roblox[.]com[.]do/users/152133768449/profile",
                "hxxp://www[.]rncjyr-eoeqes2n[.]vercel[.]app/"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 1603,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 1603,
                "newInLastHour": 203,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"8a04c08c246cebf987f4d0587ce596a671f77e328d9682fa8ba38c64fa0f9c28",
                " \"18ec5eaa33abeba1a205acbb6c071166a3a8fe4f6125a376faac87f93ce59929",
                " \"cf68a6e3c037a87ed2d89e88bb5a6ebf1f7642b38eba70762066f90874af37f4",
                " \"83be5ca22056567d8914d74de9fafe3bff619378f5693e08ecbedc2d1450ffa8",
                " \"30fbfca5c205f6496891e7cb390c10fd7cf6518e593c31fbf24a31b775b64d87"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1696,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1696,
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
                "1[.]12[.]229[.]231",
                "1[.]14[.]69[.]226",
                "1[.]180[.]198[.]34",
                "1[.]189[.]89[.]243",
                "1[.]192[.]110[.]50"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 12090,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 12090,
                "newInLastHour": 12090,
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
            "iocCount": 13037,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 13037,
                "newInLastHour": 13037,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://125[.]42[.]26[.]228:58928/bin[.]sh",
                "hxxp://119[.]185[.]241[.]38:33473/bin[.]sh",
                "hxxp://115[.]63[.]147[.]104:52369/i",
                "hxxp://42[.]235[.]50[.]251:55920/bin[.]sh",
                "hxxp://91[.]92[.]242[.]236/files-129312398/files/file_a5f2a045b5277aef[.]exe"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 5795,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 5795,
                "newInLastHour": 5606,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"hxxps://sreeanugraha[.]com/\"",
                " \"jb7207ut[.]us-tupitea[.]com\"",
                " \"149[.]30[.]232[.]29:8080\"",
                " \"149[.]30[.]232[.]29:7000\"",
                " \"149[.]30[.]232[.]29:80\""
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
            "iocCount": 10454,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 10454,
                "newInLastHour": 20,
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
            "totalIndicators": 47803,
            "activeSources": 8,
            "criticalAlerts": 25368,
            "activeCampaigns": 247
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 14670,
                "trend": "stable",
                "percentage": 2
            },
            {
                "category": "C2",
                "count": 10698,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 4533,
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
                    "1[.]12[.]229[.]231",
                    "1[.]14[.]69[.]226",
                    "1[.]180[.]198[.]34"
                ]
            },
            {
                "name": "malware_download",
                "count": 12988,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://110[.]139[.]18[.]164:33747/i",
                    "hxxp://45[.]233[.]94[.]135:39288/i",
                    "hxxp://123[.]4[.]40[.]181:47310/bin[.]sh"
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
                "count": 1357,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"114[.]215[.]190[.]7:80\"",
                    " \"114[.]215[.]190[.]7:8080\"",
                    " \"114[.]215[.]190[.]7:22\""
                ]
            },
            {
                "name": " \"n/a",
                "count": 892,
                "types": [
                    "hash"
                ],
                "sampleIndicators": [
                    " \"1ad42cab7899671275d79ff38317ae4df61d58de9d2e4f23facf297b5b33654b",
                    " \"e97c94dba775b8e9984ffca2d20891b22a3611c918f09ff1b280b4aa8cbdbb4a",
                    " \"51a6115ab0eb0a7d4a941a51e51def86e7b9fb80f2df557e752f3fc4cedd7aef"
                ]
            },
            {
                "name": "Vidar",
                "count": 782,
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
                "count": 704,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "ba3714d484afb75fd03911c59aa096cee9595955",
                    "de0a287fb9997f0ffbd36df79b13cfda63f0bfcd",
                    "22d945ac6c7c00fb7bb5d0dc3618a82d46cfd1e2"
                ]
            },
            {
                "name": " \"win.pure_rat\"",
                "count": 611,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"217[.]60[.]195[.]193:56002\"",
                    " \"217[.]60[.]195[.]193:56003\"",
                    " \"217[.]60[.]195[.]193:56001\""
                ]
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious IPs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": " \"js.iclickfix\"",
        "totalAttacksThisHour": 46261,
        "lastCalculated": "2026-09-20 00:04 IST"
    }
};
