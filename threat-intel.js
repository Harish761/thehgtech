// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-03-03T22:32:44.667765+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-03-03T22:32:44.372797+05:30",
    "lastUpdatedFormatted": "Mar 03, 2026 at 10:32 PM IST",
    "comparisonPeriod": "Mar 02 \u2013 Mar 03, 2026",
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
                "hxxps://www[.]robiox[.]com[.]gr/communities/4172582877/Free-robux-and-more",
                "hxxps://centre-backup-exodus-com-u[.]vercel[.]app/",
                "hxxps://officehomeprodprv[.]brazilsouth[.]cloudapp[.]azure[.]com/?from=NG",
                "hxxps://roblox[.]com[.]ge/users/8952334627/profile",
                "hxxps://symbol-vz[.]zeabur[.]app/"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 830,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 830,
                "newInLastHour": 127,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"8262a999b922f4db69bbae6222cd1ba9862081306539cd1061e17085010cf89f",
                " \"9899fe72ae403fa3a68ea803f410e50db67918a96a080bcebe3d947148d81cd8",
                " \"4f97c2202f87a03a5f4fc656355d43e3a7dfe752ba73ede19e11c8d967b2a96b",
                " \"6de74d9e38c026c4f3c4181545a8e92ffd35e6a5caa10619e362e258ce26fc89",
                " \"aecfabd96b0551eae1be95dee23e6028d3d3eb04dcaf8fbdb55783d219a40731"
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
                "newInLastHour": 7,
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
                "1[.]119[.]209[.]130",
                "1[.]15[.]118[.]23",
                "1[.]170[.]22[.]164",
                "1[.]170[.]61[.]110",
                "1[.]176[.]134[.]241"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 10196,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 10196,
                "newInLastHour": 10196,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]12[.]217[.]80",
                "1[.]145[.]115[.]223",
                "1[.]145[.]98[.]105",
                "1[.]164[.]174[.]157",
                "1[.]214[.]117[.]218"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 22145,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 22145,
                "newInLastHour": 22145,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://125[.]47[.]87[.]10:44252/i",
                "hxxp://175[.]149[.]157[.]249:36984/i",
                "hxxp://83[.]219[.]1[.]198:41331/i",
                "hxxps://red09[.]redhaven[.]in[.]net/verification[.]google",
                "hxxp://125[.]47[.]87[.]10:44252/bin[.]sh"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 1105,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 1105,
                "newInLastHour": 1105,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"red09[.]redhaven[.]in[.]net\"",
                " \"lp[.]adlersocial[.]com\"",
                " \"floridamovietheaters[.]com\"",
                " \"marceloubaldo[.]com[.]br\"",
                " \"forest-run[.]oaktrail[.]in[.]net\""
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
                "178[.]62[.]3[.]223",
                "34[.]204[.]119[.]63"
            ]
        },
        "SSL Blacklist": {
            "description": "Malicious SSL certificates used by botnet C2 servers. Helps detect encrypted malware communications.",
            "website": "https://sslbl.abuse.ch/",
            "updateFrequency": "Daily",
            "iocCount": 9143,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 9143,
                "newInLastHour": 22,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "751028c56810aca2a151e570bccfc1b1ec50c294",
                "7829cea0c2c8b8854819f1c9060c8de4b9d2192f",
                "c6c5cbb14fe2839ef4ece10f4b65bf92808f8440",
                "55e807a72e08b804a1c63d98bcc74d5d262b63f3",
                "bcc982f7d2bf74bf9daa476955d3a6f0fc9f23aa"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 49675,
            "activeSources": 8,
            "criticalAlerts": 31922,
            "activeCampaigns": 200
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 22819,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "C2",
                "count": 9103,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 760,
                "trend": "stable",
                "percentage": 7
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
                "count": 22018,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://115[.]56[.]152[.]7:48960/i",
                    "hxxp://112[.]248[.]185[.]73:49900/i",
                    "hxxp://112[.]242[.]15[.]165:59744/bin[.]sh"
                ]
            },
            {
                "name": "CINS Threat List",
                "count": 15000,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]119[.]209[.]130",
                    "1[.]15[.]118[.]23",
                    "1[.]170[.]22[.]164"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1526,
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
                "count": 1387,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "b4f112278f6f59e5e9d0a2aeb252c111a3ae8603",
                    "08ed72afb9e65a6b0c216c2f47dfea81d64c9289",
                    "41fe5784b1b9003fee99a449d0d7b6fa0ce038fe"
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
                    "ca70cb7bfbc3f071b0a03f7d77ed94339490ed8a",
                    "6f7f3607d11da6dbc7600245f36591f578272be3",
                    "7e54f4e1e1eaeeeaf7e1afe331c7307c96e04182"
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
                "count": 381,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "a5d8a396d7553814e5ac56706fde721dce28b849",
                    "dd1f8bbdf08eedbfdc5518f707f5009721d778a1",
                    "a321c9ecc998ce4ed63d0613f7bf6bfccc466595"
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
        "fastestRisingThreat": "SSH Attacks",
        "totalAttacksThisHour": 48905,
        "lastCalculated": "2026-03-03 22:32 IST"
    }
};
