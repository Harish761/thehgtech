// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-03-19T11:05:23.029931+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-03-19T11:05:22.746279+05:30",
    "lastUpdatedFormatted": "Mar 19, 2026 at 11:05 AM IST",
    "comparisonPeriod": "Mar 18 \u2013 Mar 19, 2026",
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
                "hxxps://owamos[.]ru/?rid=HKdOY1f",
                "hxxps://habiba2442[.]github[.]io/website/",
                "hxxps://pub-474d02dddcc94bebab789f8789066d06[.]r2[.]dev/savedozxxxc[.]html?email=3mail@b[.]c/",
                "hxxp://rblx[.]foo/s/roblox-profile",
                "hxxps://verifiedmeme[.]pages[.]dev/wallet/assets/unpkg[.]com/f[.][.]@1[.]5[.]3/dist/index-2[.]html/"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 754,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 754,
                "newInLastHour": 44,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"4b12139f0bc6a7ef12a930d35de53113a07a63895519d9836cbe33ff17b70eaf",
                " \"206409fb5d58822808770c996979068b7aa04850f77bedf41ddf82ca814bc404",
                " \"c9698f088b8e2207272a65388944608737408079b18650a0361aa4db5a8571a3",
                " \"8799b45837423ed2178e3521ddc524dbfc7cf23a7685c8ec55e2aee6f14df46a",
                " \"656aa8fd1ead567211a7f881b5ea4d20974fcdf6ee3c830f2ec8dda9eb4fe2f1"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1524,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1524,
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
                "1[.]15[.]118[.]23",
                "1[.]170[.]10[.]139",
                "1[.]191[.]127[.]124",
                "1[.]192[.]179[.]163",
                "1[.]192[.]206[.]139"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 4742,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 4742,
                "newInLastHour": 4742,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]145[.]14[.]149",
                "1[.]162[.]198[.]111",
                "1[.]163[.]233[.]52",
                "1[.]189[.]21[.]20",
                "1[.]197[.]102[.]62"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 20161,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 20161,
                "newInLastHour": 20161,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://112[.]242[.]61[.]134:36861/bin[.]sh",
                "hxxp://110[.]37[.]98[.]220:40839/i",
                "hxxp://110[.]37[.]28[.]220:35963/i",
                "hxxp://117[.]193[.]174[.]124:53008/i",
                "hxxp://110[.]39[.]252[.]138:46786/i"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 2163,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 2163,
                "newInLastHour": 2138,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"hxxps://74[.]0[.]32[.]211\"",
                " \"hxxps://157[.]180[.]81[.]4\"",
                " \"35x53u[.]yardnext[.]in[.]net\"",
                " \"hxxp://192[.]168[.]223[.]139:8443/fo8P\"",
                " \"196[.]75[.]151[.]163:2222\""
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
            "iocCount": 9303,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 9303,
                "newInLastHour": 30,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "839451714776101bc6be92d420544060c7e49097",
                "71cda6714845dc13a7c001d3933047f2c7119c09",
                "8ebe0d48a1178a816162ca9b034b7b653d0fc12b",
                "a9af792faf99fff3d0df33db513b536fc8d5459c",
                "9a7d2413b51e8298dd81a5b972171256a92314a5"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 49126,
            "activeSources": 8,
            "criticalAlerts": 30125,
            "activeCampaigns": 219
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 20869,
                "trend": "stable",
                "percentage": -1
            },
            {
                "category": "C2",
                "count": 9256,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 768,
                "trend": "stable",
                "percentage": -1
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
                "count": 20110,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://117[.]235[.]117[.]8:40693/bin[.]sh",
                    "hxxp://115[.]55[.]246[.]34:48695/bin[.]sh",
                    "hxxp://82[.]144[.]86[.]37:46593/bin[.]sh"
                ]
            },
            {
                "name": "CINS Threat List",
                "count": 15000,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]15[.]118[.]23",
                    "1[.]15[.]15[.]189",
                    "1[.]162[.]147[.]232"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1525,
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
                "count": 1388,
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
                "count": 641,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "d9fa0ea682b5e53c1fcad5edfc64b89fbfd468da",
                    "7692429d5ce694bd30c57fae26a56dd8fd960faf",
                    "f021dc8a50b47d94a454ff92d78bd1215597a759"
                ]
            },
            {
                "name": "LummaStealer",
                "count": 542,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "8ebe0d48a1178a816162ca9b034b7b653d0fc12b",
                    "da0f6a5937d3c2d365ffeddb881b4136313e1afa",
                    "e30905555de39d1e66f834f672f6f14e9106839b"
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
                "count": 503,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"serv4base[.]veloxunit[.]in[.]net\"",
                    " \"edge3dist[.]veloxunit[.]in[.]net\"",
                    " \"node2flow[.]veloxunit[.]in[.]net\""
                ]
            },
            {
                "name": "Vidar",
                "count": 415,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "a9af792faf99fff3d0df33db513b536fc8d5459c",
                    "9a7d2413b51e8298dd81a5b972171256a92314a5",
                    "a31fab540d1f334f2e1c17ec98037c4f091ff20e"
                ]
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious URLs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": "malware_download",
        "totalAttacksThisHour": 42420,
        "lastCalculated": "2026-03-19 11:05 IST"
    }
};
