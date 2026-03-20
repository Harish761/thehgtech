// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-03-20T10:49:08.910976+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-03-20T10:49:08.619865+05:30",
    "lastUpdatedFormatted": "Mar 20, 2026 at 10:49 AM IST",
    "comparisonPeriod": "Mar 19 \u2013 Mar 20, 2026",
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
                "hxxps://sso--secure--cdn--ndax--authth[.]webflow[.]io/",
                "hxxps://verication-casefb336384[.]vercel[.]app/",
                "hxxp://kucoinloginasa[.]webflow[.]io/",
                "hxxps://rblx[.]foo/s/dLRycL",
                "hxxp://app[.]635-488[.]com/"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 711,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 711,
                "newInLastHour": 63,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"feae0f8e003e8e2f450160570284537cdb153b94bd50775ff2286da9c8e49375",
                " \"381266f78bdc092297bc35f8a9bc7f95c341e265f8acf0660974aac14f899c25",
                " \"0fe2b6c7d0e9b57d2b6f7c3d3ffd05025eb3e4adf3f9c4937be8bd40154e5bd2",
                " \"cc6e416232368536c1fe1b1fd7c9ce1238bc2c2d710d32f597bccc3934a85d5a",
                " \"b72f0a9f7f964e9e7a22129e937db427a6f5f927296bb191720f68c937b5c418"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 237,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 237,
                "newInLastHour": 54,
                "lastUpdate": "just now"
            },
            "types": [
                "ip-range"
            ],
            "sampleIndicators": [
                "5.101.82.0/24",
                "23.146.241.0/24",
                "23.147.52.0/24",
                "23.147.148.0/24",
                "23.147.156.0/24"
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
                "1[.]10[.]154[.]89",
                "1[.]10[.]165[.]207",
                "1[.]15[.]118[.]23",
                "1[.]170[.]10[.]139",
                "1[.]176[.]134[.]253"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 5240,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 5240,
                "newInLastHour": 5240,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]145[.]14[.]149",
                "1[.]163[.]233[.]52",
                "1[.]189[.]21[.]20",
                "1[.]197[.]102[.]62",
                "1[.]214[.]117[.]218"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 20202,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 20202,
                "newInLastHour": 20202,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxps://point3local[.]virtualresource[.]in[.]net/verification[.]google",
                "hxxps://point2power[.]virtualresource[.]in[.]net/verification[.]google",
                "hxxp://175[.]9[.]135[.]215:39420/bin[.]sh",
                "hxxps://point1proc[.]virtualresource[.]in[.]net/verification[.]google",
                "hxxp://117[.]244[.]79[.]58:58644/bin[.]sh"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 1240,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 1240,
                "newInLastHour": 1212,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"point3local[.]virtualresource[.]in[.]net\"",
                " \"point2power[.]virtualresource[.]in[.]net\"",
                " \"point1proc[.]virtualresource[.]in[.]net\"",
                " \"host4link[.]datacentricnode[.]in[.]net\"",
                " \"host3dev[.]datacentricnode[.]in[.]net\""
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
            "iocCount": 9284,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 9284,
                "newInLastHour": 21,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "9d77eb9cdbe47e39906a6a8a2cfb6b4eef6f29b0",
                "f506d6391b6121bb867912603f1c231627013cb2",
                "126fb0c3c98f6c3f9e359774e9b174a810eb9871",
                "2b0d3754fbe14d940ef67296b7fbcc7b6b780c93",
                "bb50d3d5c445956dc5d72db51cf488465a463719"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 48683,
            "activeSources": 8,
            "criticalAlerts": 30133,
            "activeCampaigns": 222
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 20852,
                "trend": "stable",
                "percentage": -3
            },
            {
                "category": "C2",
                "count": 9281,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 443,
                "trend": "down",
                "percentage": -15
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
                "percentage": 94
            },
            {
                "name": "Tech",
                "percentage": 5
            },
            {
                "name": "Finance",
                "percentage": 0
            }
        ],
        "campaigns": [
            {
                "name": "malware_download",
                "count": 20140,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://36[.]70[.]231[.]171:46755/i",
                    "hxxps://load3core[.]infravariable[.]in[.]net/verification[.]google",
                    "hxxp://117[.]211[.]32[.]248:56596/bin[.]sh"
                ]
            },
            {
                "name": "CINS Threat List",
                "count": 15000,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]10[.]154[.]89",
                    "1[.]10[.]165[.]207",
                    "1[.]10[.]185[.]224"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1482,
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
                "count": 1391,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "c415fb25075e3df71a6a9bf67750cbf6a6c7e868",
                    "ba3e7e73b6c654a979d4e4fe20b4aa24890b4518",
                    "e074dd74eb8eb98468a94eb43b3487fe2b7f5980"
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
                "count": 639,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "126fb0c3c98f6c3f9e359774e9b174a810eb9871",
                    "d9fa0ea682b5e53c1fcad5edfc64b89fbfd468da",
                    "7692429d5ce694bd30c57fae26a56dd8fd960faf"
                ]
            },
            {
                "name": "LummaStealer",
                "count": 543,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "0211433cfdfedfc7352c1228fc58d9d2f9d49032",
                    "8ebe0d48a1178a816162ca9b034b7b653d0fc12b",
                    "da0f6a5937d3c2d365ffeddb881b4136313e1afa"
                ]
            },
            {
                "name": " \"elf.mozi\"",
                "count": 529,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"hxxp://110[.]37[.]5[.]55:33751/i\"",
                    " \"hxxp://115[.]48[.]47[.]68:55835/i\"",
                    " \"hxxp://42[.]59[.]115[.]239:60942/i\""
                ]
            },
            {
                "name": " \"js.clearfake\"",
                "count": 511,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"sat4link[.]infravariable[.]in[.]net\"",
                    " \"load3core[.]infravariable[.]in[.]net\"",
                    " \"entry2steel[.]infravariable[.]in[.]net\""
                ]
            },
            {
                "name": "Vidar",
                "count": 433,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "9d77eb9cdbe47e39906a6a8a2cfb6b4eef6f29b0",
                    "f506d6391b6121bb867912603f1c231627013cb2",
                    "2b0d3754fbe14d940ef67296b7fbcc7b6b780c93"
                ]
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious URLs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": "malware_download",
        "totalAttacksThisHour": 42097,
        "lastCalculated": "2026-03-20 10:49 IST"
    }
};
