// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-09-20T03:48:26.379506+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-09-20T03:48:26.089684+05:30",
    "lastUpdatedFormatted": "Sep 20, 2026 at 03:48 AM IST",
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
            "iocCount": 1640,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 1640,
                "newInLastHour": 88,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"b08a3de4b27d073af02609251a5fd5a061c46e9d630e634b0e568cdcb80550e7",
                " \"b5ebae007246dd0684c8c3197286d67050d60e38036256cfc6906d1ab245a09c",
                " \"48b881283fa0344c964e06f5ddd780f16d97878c181ef714f0b3640fc027c52b",
                " \"da2ef28e88f54e82f9258a4a3e554f774300802aa3cda0419fd97a25998f8c35",
                " \"8704cafecb314cb3118c0a44bfee2e312259c70bd3bdeb250034a7e7e7b7c6dd"
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
                "newInLastHour": 10,
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
                "1[.]119[.]194[.]253",
                "1[.]12[.]229[.]231",
                "1[.]15[.]14[.]29",
                "1[.]180[.]198[.]34",
                "1[.]188[.]100[.]255"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 12092,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 12092,
                "newInLastHour": 12092,
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
            "iocCount": 13101,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 13101,
                "newInLastHour": 13101,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://61[.]53[.]74[.]99:39925/bin[.]sh",
                "hxxp://103[.]172[.]186[.]170:41252/i",
                "hxxp://222[.]127[.]77[.]227:37700/i",
                "hxxp://115[.]53[.]246[.]49:42289/bin[.]sh",
                "hxxp://222[.]142[.]246[.]30:45576/bin[.]sh"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 5622,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 5622,
                "newInLastHour": 5416,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"evz9hzhn[.]bonuscode[.]in\"",
                " \"bonuscode[.]in\"",
                " \"101[.]43[.]31[.]60:123\"",
                " \"vaago81750[.]workers[.]dev\"",
                " \"bukawomi[.]workers[.]dev\""
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
                "newInLastHour": 38,
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
            "totalIndicators": 48145,
            "activeSources": 8,
            "criticalAlerts": 25395,
            "activeCampaigns": 244
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 14715,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "C2",
                "count": 10680,
                "trend": "stable",
                "percentage": 2
            },
            {
                "category": "Botnet",
                "count": 4491,
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
                    "1[.]119[.]194[.]253",
                    "1[.]14[.]69[.]226",
                    "1[.]15[.]14[.]29"
                ]
            },
            {
                "name": "malware_download",
                "count": 13065,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://83[.]219[.]1[.]198:53206/bin[.]sh",
                    "hxxp://123[.]14[.]152[.]98:55286/i",
                    "hxxp://182[.]126[.]85[.]105:36430/bin[.]sh"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1702,
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
                "count": 1373,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"149[.]30[.]232[.]29:8080\"",
                    " \"149[.]30[.]232[.]29:7000\"",
                    " \"149[.]30[.]232[.]29:80\""
                ]
            },
            {
                "name": " \"n/a",
                "count": 951,
                "types": [
                    "hash"
                ],
                "sampleIndicators": [
                    " \"2341858491161f7a8f76ba2e9611f395741a14ba90c651b8ba6fc3729b7dcc37",
                    " \"250a44c112b82eee97af1110479743e35faa9902d594cd99587ad73d3faeb734",
                    " \"4648d1618f2182465c025e5b12114a5d34978b3217f20ae282ca7f6e75e4d79a"
                ]
            },
            {
                "name": "Vidar",
                "count": 778,
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
        "fastestRisingThreat": "malware_download",
        "totalAttacksThisHour": 46050,
        "lastCalculated": "2026-09-20 03:48 IST"
    }
};
