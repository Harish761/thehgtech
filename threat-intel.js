// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-09-19T17:57:26.384020+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-09-19T17:57:26.080154+05:30",
    "lastUpdatedFormatted": "Sep 19, 2026 at 05:57 PM IST",
    "comparisonPeriod": "Sep 18 \u2013 Sep 19, 2026",
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
            "iocCount": 1655,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 1655,
                "newInLastHour": 369,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"1ad42cab7899671275d79ff38317ae4df61d58de9d2e4f23facf297b5b33654b",
                " \"e97c94dba775b8e9984ffca2d20891b22a3611c918f09ff1b280b4aa8cbdbb4a",
                " \"51a6115ab0eb0a7d4a941a51e51def86e7b9fb80f2df557e752f3fc4cedd7aef",
                " \"adacb0b8d2cd1657968fc996c566e13a0132fb714c46316779583a41d76f7539",
                " \"8175a605125bce3e2a31bba5ebd9211d88cb05d2fbd448474db9aac56fea63e0"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1712,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1712,
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
                "1[.]188[.]100[.]255",
                "1[.]189[.]89[.]243"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 12123,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 12123,
                "newInLastHour": 12123,
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
                "1[.]161[.]144[.]132"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 12988,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 12988,
                "newInLastHour": 12988,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://110[.]139[.]18[.]164:33747/i",
                "hxxp://45[.]233[.]94[.]135:39288/i",
                "hxxp://123[.]4[.]40[.]181:47310/bin[.]sh",
                "hxxp://42[.]226[.]216[.]100:53095/i",
                "hxxp://45[.]233[.]94[.]135:39288/bin[.]sh"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 5423,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 5423,
                "newInLastHour": 5238,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"uhfao75u[.]usa--burnflow[.]com\"",
                " \"114[.]215[.]190[.]7:80\"",
                " \"114[.]215[.]190[.]7:8080\"",
                " \"114[.]215[.]190[.]7:22\"",
                " \"192[.]210[.]197[.]131:12313\""
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
            "iocCount": 10720,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 10720,
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
            "totalIndicators": 48799,
            "activeSources": 8,
            "criticalAlerts": 25000,
            "activeCampaigns": 246
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 14282,
                "trend": "stable",
                "percentage": -1
            },
            {
                "category": "C2",
                "count": 10718,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 4576,
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
                    "1[.]10[.]172[.]57",
                    "1[.]194[.]161[.]195",
                    "1[.]20[.]186[.]172"
                ]
            },
            {
                "name": "malware_download",
                "count": 12768,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://115[.]48[.]24[.]224:53645/bin[.]sh",
                    "hxxp://123[.]252[.]17[.]41:43633/bin[.]sh",
                    "hxxp://125[.]43[.]35[.]114:55836/i"
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
                "count": 1377,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"167[.]179[.]67[.]162:8443\"",
                    " \"36[.]255[.]97[.]162:4045\"",
                    " \"8[.]160[.]168[.]147:80\""
                ]
            },
            {
                "name": " \"win.asyncrat\"",
                "count": 1351,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"80[.]190[.]77[.]86:1003\"",
                    " \"128[.]90[.]136[.]246:4444\"",
                    " \"102[.]220[.]163[.]36:7707\""
                ]
            },
            {
                "name": " \"n/a",
                "count": 834,
                "types": [
                    "hash"
                ],
                "sampleIndicators": [
                    " \"2406b42d46d1aba07d8bbe21ecc07799ef478e327447fda14dedd6dede8a5f86",
                    " \"efa89746b5693167d3ec46b17c77bf3c97eccdaebc2ab907d2f1ac08729888b8",
                    " \"654dd2bef34c1a84a70315c12d50979e06e553c1f50530e95ab66e047d98f48d"
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
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious IPs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": "SSH Attacks",
        "totalAttacksThisHour": 46023,
        "lastCalculated": "2026-09-19 17:57 IST"
    }
};
