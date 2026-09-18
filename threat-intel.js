// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-09-19T00:30:08.867422+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-09-19T00:30:08.524761+05:30",
    "lastUpdatedFormatted": "Sep 19, 2026 at 12:30 AM IST",
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
                "hxxps://www[.]roblox[.]ly/users/8231296959/profile",
                "hxxps://www[.]roblox[.]com[.]am/games/142823291/Murder-Mystery-2?privateServerLinkCode=037625068419256218425781722588",
                "hxxp://pemenang-shopee4[.]blogspot[.]com/",
                "hxxps://ff[.]alwayssecuredhub[.]net/public/assets/jquery/jquery-3[.]3[.]1[.]min[.]js/",
                "hxxp://www[.]blizzcon[.]us[.]com/"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 1409,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 1409,
                "newInLastHour": 340,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"3aa9b36f26c9dfdb464f145b656ec5b1f6a55b6a7d6c4774dbd6e6cae0a110c5",
                " \"e80d37143b54b81a5d54a251cc7a317497e92a399c5f18ca506d01683b04903f",
                " \"9a0369f05cd24b818b5885b3866643d168f6f4216724641ca540613972e9e682",
                " \"aa79a7dcbb25ca219b06eae10c5f5e6d1e104a0169c3286d9a4e6e295fd188f7",
                " \"9e736e5d5024c050e144b54860b47265bfbde1faa3c33d157f6ab67e6019ed79"
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
                "newInLastHour": 61,
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
                "1[.]117[.]59[.]169",
                "1[.]14[.]121[.]115",
                "1[.]15[.]14[.]29",
                "1[.]189[.]89[.]243"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 5580,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 5580,
                "newInLastHour": 5580,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]0[.]164[.]165",
                "1[.]1[.]245[.]185",
                "1[.]10[.]244[.]218",
                "1[.]15[.]21[.]86",
                "1[.]161[.]144[.]132"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 13089,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 13089,
                "newInLastHour": 13089,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://180[.]190[.]108[.]2:59238/bin[.]sh",
                "hxxp://58[.]65[.]210[.]9:32979/i",
                "hxxp://105[.]186[.]118[.]54:40687/bin[.]sh",
                "hxxp://58[.]65[.]210[.]9:32979/bin[.]sh",
                "hxxp://219[.]156[.]99[.]138:35757/bin[.]sh"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 6778,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 6778,
                "newInLastHour": 5495,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"dveas[.]de\"",
                " \"bqcdtklw[.]slimsplitsmethod[.]us\"",
                " \"1d1b6225c43e9bc88c00729632fbfd852ea06f598e8977123bdf121e9a214d31\"",
                " \"hxxp://153[.]117[.]40[.]177:43176/Mozi[.]m\"",
                " \"hxxp://139[.]135[.]46[.]35:48942/Mozi[.]m\""
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
            "iocCount": 10740,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 10740,
                "newInLastHour": 290,
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
            "totalIndicators": 48493,
            "activeSources": 8,
            "criticalAlerts": 24808,
            "activeCampaigns": 247
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 14380,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "C2",
                "count": 10428,
                "trend": "stable",
                "percentage": -2
            },
            {
                "category": "Botnet",
                "count": 4522,
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
                    "1[.]117[.]59[.]169",
                    "1[.]14[.]121[.]115"
                ]
            },
            {
                "name": "malware_download",
                "count": 12980,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://39[.]59[.]57[.]253:43968/i",
                    "hxxp://39[.]59[.]57[.]253:43968/bin[.]sh",
                    "hxxps://github[.]com/flyingman11/Monero/releases/download/v1[.]0[.]0/Monero-installer-v1[.]0[.]0[.]bat"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1651,
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
                "count": 1435,
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
                "count": 1390,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"8[.]160[.]168[.]147:80\"",
                    " \"8[.]160[.]168[.]147:8080\"",
                    " \"8[.]160[.]168[.]147:443\""
                ]
            },
            {
                "name": " \"win.asyncrat\"",
                "count": 1354,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"128[.]90[.]136[.]246:4444\"",
                    " \"102[.]220[.]163[.]36:7707\"",
                    " \"194[.]26[.]192[.]153:2001\""
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
                "name": "Vidar",
                "count": 701,
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
                "name": "QuasarRAT",
                "count": 692,
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
                "name": " \"n/a",
                "count": 683,
                "types": [
                    "hash"
                ],
                "sampleIndicators": [
                    " \"8b17b9973deff8917b8d020b7d807712de3752848d95468daa8ebca73dc1ecbc",
                    " \"a6ceacda670b88e8a8ec9ff5da6a77d9f1c896d6479b2dadb700474a8c408f80",
                    " \"51d5cb5aafcfc301aaf4ab54013a52d1213b30f2e87f6eb4b961db757e88765f"
                ]
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious IPs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": "SSH Attacks",
        "totalAttacksThisHour": 40160,
        "lastCalculated": "2026-09-19 00:30 IST"
    }
};
