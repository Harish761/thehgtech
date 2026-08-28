// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-08-28T16:45:11.964301+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-08-28T16:45:11.500011+05:30",
    "lastUpdatedFormatted": "Aug 28, 2026 at 04:45 PM IST",
    "comparisonPeriod": "Aug 27 \u2013 Aug 28, 2026",
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
                "hxxps://fls-a29a4b5f-2260-41e5-bea0-4308d9f12fa6[.]laravel[.]cloud/telegram123[.]html",
                "hxxp://brantal[.]vercel[.]app/",
                "hxxp://canpoly[.]vercel[.]app/",
                "hxxp://barracudaservicesinc[.]vercel[.]app/",
                "hxxp://nufloorspenticton[.]vercel[.]app/"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 881,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 881,
                "newInLastHour": 70,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"7108ff29916d064216aa2ece7fb395f1e3a73d12d19895bffc0bd46806cbf85a",
                " \"c9067c5f7a975ad3861fef91b4e82d3bb754d7dbf7e0bc2b774ad23cc3a295a1",
                " \"44b92b32e0316c96f5c5a05f25f492083ee7f282080b0f5abc2d1bc9a800dece",
                " \"be396a33faffcee871ad014ce0ecd317e8e878fefecd172c8d2bff211b3d8a22",
                " \"d247d169b650e0b2c538e456d456e4d95f2aa81eb50a459cce71168fa4a59cd2"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1705,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1705,
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
                "1[.]12[.]229[.]231",
                "1[.]183[.]148[.]62",
                "1[.]183[.]160[.]23",
                "1[.]189[.]125[.]236",
                "1[.]189[.]45[.]59"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 13137,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 13137,
                "newInLastHour": 13137,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]0[.]164[.]165",
                "1[.]1[.]242[.]233",
                "1[.]162[.]197[.]67",
                "1[.]162[.]198[.]126",
                "1[.]162[.]247[.]182"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 15963,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 15963,
                "newInLastHour": 15963,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://196[.]190[.]133[.]180:41857/i",
                "hxxp://115[.]56[.]43[.]164:34354/i",
                "hxxp://103[.]31[.]103[.]204:49856/i",
                "hxxp://42[.]242[.]128[.]179:35557/i",
                "hxxp://61[.]52[.]216[.]153:49651/i"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 7666,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 7666,
                "newInLastHour": 7510,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"144[.]48[.]124[.]92:18111\"",
                " \"144[.]48[.]124[.]92:1100\"",
                " \"144[.]48[.]124[.]92:8877\"",
                " \"1[.]13[.]251[.]23:8084\"",
                " \"zupee[.]download\""
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
            "iocCount": 10559,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 10559,
                "newInLastHour": 26,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "9d495a9c646e3962ac5445e9b4da6832164dc4ee",
                "841672d728070f0e4519a650a9c8618f9b80c502",
                "d123d7f43d63545c7a8f643acbe73e81f35c3f14",
                "94711c109335059bb2dc4d338f33d3083004d6fa",
                "4a67cf0297c6308d31cbd2e89cd5246817bb1330"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 50397,
            "activeSources": 8,
            "criticalAlerts": 27282,
            "activeCampaigns": 259
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 16760,
                "trend": "stable",
                "percentage": -2
            },
            {
                "category": "C2",
                "count": 10522,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 4462,
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
                "count": 15763,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://220[.]201[.]29[.]161:55723/i",
                    "hxxp://182[.]113[.]41[.]227:46418/bin[.]sh",
                    "hxxp://182[.]113[.]41[.]227:46418/i"
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
                    "1[.]189[.]125[.]236",
                    "1[.]189[.]45[.]59"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1645,
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
                "count": 1436,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "7f44d36f1f6bd375ba4e4a7866328a76047ce498",
                    "f351f7dbe9c583f75758b39cd307f5359d110c73",
                    "7bf78d44f61a05e919479a1cf3e0ce158a50a0c6"
                ]
            },
            {
                "name": " \"win.cobalt_strike\"",
                "count": 1341,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"121[.]4[.]38[.]18:8080\"",
                    " \"121[.]4[.]38[.]18:80\"",
                    " \"106[.]15[.]10[.]2:8080\""
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
                "count": 732,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "fd78e771cab22c3afad8a5d5c448ff05268f20dd",
                    "8b41b8741c4d2a24de0aba241f742f043f1014d1",
                    "db787c8625b794b3d2385274bfdf8f34d731d7d9"
                ]
            },
            {
                "name": "QuasarRAT",
                "count": 697,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "9b4c3ff8dc5891693f443320e3c1167c7cebe2b7",
                    "0f1b05653c3b3ab3bb4ecd772dd024668cbe8df1",
                    "b364395fee8c2e4c9eaf9a2531f6f7ac7bf8e4ae"
                ]
            },
            {
                "name": " \"js.iclickfix\"",
                "count": 640,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"royalensemble[.]com\"",
                    " \"85[.]239[.]149[.]16:443\"",
                    " \"robbywoj321[.]life\""
                ]
            },
            {
                "name": "LummaStealer",
                "count": 558,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "a45080c92a0b2314966517a4643ebf280e88a11b",
                    "501d817bb1780acfe5e47082c43472bda8068e4d",
                    "2beac2ee8b2fe7625d4de9f5381d37f200965f91"
                ]
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious IPs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": "SSH Attacks",
        "totalAttacksThisHour": 52072,
        "lastCalculated": "2026-08-28 16:45 IST"
    }
};
