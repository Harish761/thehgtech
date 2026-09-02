// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-09-03T00:51:36.077579+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-09-03T00:51:35.738882+05:30",
    "lastUpdatedFormatted": "Sep 03, 2026 at 12:51 AM IST",
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
            "iocCount": 797,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 797,
                "newInLastHour": 287,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"b90022410dcee12e45e73327a6e1d9288aeeb175db0895445453e14f146d0c0f",
                " \"d4df270ea5a146713de213817b88ba95e575c2eea4c1e66f4c070cacc6ae1272",
                " \"85a2a141e838b0ab2d506444430b75870919caec56768af7631d1c8f83dee2e8",
                " \"a8b95815956cae833e1798b4f0f18f17c232c8f7e391bc577207dd6fd450211f",
                " \"024a468c83ccd295d61855b84cb6ab026dd6674b1609161426bc9b04cbf0f35c"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1703,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1703,
                "newInLastHour": 14,
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
                "1[.]180[.]184[.]182",
                "1[.]183[.]148[.]62",
                "1[.]183[.]41[.]170"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 11634,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 11634,
                "newInLastHour": 11634,
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
            "iocCount": 15895,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 15895,
                "newInLastHour": 15895,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://58[.]255[.]40[.]142:44835/i",
                "hxxp://150[.]241[.]65[.]250:889/venv/bin/python3",
                "hxxp://182[.]121[.]239[.]171:36990/i",
                "hxxp://27[.]215[.]84[.]127:37282/i",
                "hxxp://31[.]56[.]209[.]210/a/b/agent_armv5"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 5200,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 5200,
                "newInLastHour": 4731,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"zefoqoqa[.]workers[.]dev\"",
                " \"nacylera[.]workers[.]dev\"",
                " \"399suitable[.]workers[.]dev\"",
                " \"anamfxbot[.]ir\"",
                " \"6fx37ipf[.]thetrumptoken[.]net\""
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
            "iocCount": 10574,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 10574,
                "newInLastHour": 101,
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
            "totalIndicators": 48951,
            "activeSources": 8,
            "criticalAlerts": 26725,
            "activeCampaigns": 241
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 16225,
                "trend": "stable",
                "percentage": 1
            },
            {
                "category": "C2",
                "count": 10500,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 4500,
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
                "count": 15558,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://115[.]49[.]73[.]224:59218/bin[.]sh",
                    "hxxp://182[.]126[.]84[.]3:60500/bin[.]sh",
                    "hxxp://out-agent[.]duckdns[.]org:49094/bp[.]txt"
                ]
            },
            {
                "name": "CINS Threat List",
                "count": 15000,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]119[.]158[.]77",
                    "1[.]183[.]148[.]62",
                    "1[.]183[.]41[.]170"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1695,
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
                "count": 1437,
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
                "count": 1309,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"180[.]76[.]250[.]42:1996\"",
                    " \"118[.]25[.]50[.]96:80\"",
                    " \"8[.]148[.]26[.]139:8086\""
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
                "count": 723,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "6ddb71e5a27eccf80773188066ac92d9d39506d7",
                    "bfb6503c7c6ce8af43c41197a7fcaec491baa810",
                    "851e9888eda6290dc6d0c817ac0c82488a9e0bd8"
                ]
            },
            {
                "name": "QuasarRAT",
                "count": 698,
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
                "count": 557,
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
                "count": 547,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"91[.]92[.]47[.]214:6666\"",
                    " \"93[.]114[.]183[.]130:8711\"",
                    " \"56[.]69[.]248[.]141:443\""
                ]
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious IPs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": "malware_download",
        "totalAttacksThisHour": 47967,
        "lastCalculated": "2026-09-03 00:51 IST"
    }
};
