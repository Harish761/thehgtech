// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-10-02T02:32:13.282328+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-10-02T02:32:12.950191+05:30",
    "lastUpdatedFormatted": "Oct 02, 2026 at 02:32 AM IST",
    "comparisonPeriod": "Oct 01 \u2013 Oct 02, 2026",
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
                "hxxps://webmail-ionos-auth-app-suite-didactic-carnival-production[.]up[.]railway[.]app/#janet1@6323c2d225fb097144f275f1c83df280b552[.]com",
                "hxxps://sendbscusdtbnb[.]vercel[.]app/",
                "hxxps://ka-importexportmicroframework[.]vercel[.]app/",
                "hxxp://www[.]ka-importexportmicroframework[.]vercel[.]app/",
                "hxxps://www[.]xhwdone[.]xyz/"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 1422,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 1422,
                "newInLastHour": 239,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"ee6e8977d1a6bcef6ce48592396ebec7e1acf7c7217ebe8649b940e5a6703d84",
                " \"24ebacb015c19d6f4b40cda0a72eebdc4a7ef2390d81c3f7e2684230208e2c6d",
                " \"994b3611a5bfa2608e86f905efabb8ca68314d077da9c40849122770fdd97687",
                " \"7210a8a8a01c36d0e5ab7fb1f474c8a4832379eb51c2a5139e47671f3299da5b",
                " \"1d1a37281626ad94aad571a4828b0b0994bfc4b7da2d14f121e0ef565c3afb62"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1676,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1676,
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
                "1[.]15[.]14[.]29",
                "1[.]192[.]129[.]106",
                "1[.]193[.]63[.]239",
                "1[.]203[.]186[.]149"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 3919,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 3919,
                "newInLastHour": 3919,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]0[.]164[.]165",
                "1[.]117[.]72[.]220",
                "1[.]162[.]216[.]37",
                "1[.]214[.]214[.]114",
                "1[.]222[.]42[.]237"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 15864,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 15864,
                "newInLastHour": 15864,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://221[.]225[.]253[.]118:47327/bin[.]sh",
                "hxxp://42[.]237[.]252[.]225:53425/bin[.]sh",
                "hxxp://60[.]18[.]1[.]146:39352/i",
                "hxxp://125[.]44[.]217[.]153:51472/i",
                "hxxp://42[.]230[.]219[.]48:36307/bin[.]sh"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 6207,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 6207,
                "newInLastHour": 5533,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"s5rjw3c7[.]sukalihatpantai[.]com\"",
                " \"sukalihatpantai[.]com\"",
                " \"z9coc5j3[.]webhostlounge[.]com\"",
                " \"6f191b8068b18b341bef972c6630ab91435ad84311a2877e8196d23c275b4bde\"",
                " \"b81a71fa2b2a01e87b9c21d293665235cf359e86676acb66dbe2fe4f5a931610\""
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
            "iocCount": 10713,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 10713,
                "newInLastHour": 9,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "d2bf0b9b894431307b05b47812645ef42cf169e6",
                "b4d984de5a6fad2a262360fede253124b6d08b41",
                "fae032e423544ab9e33d6e656d1a239e74b04637",
                "983cbec3d48ec620539fe07e608568279fe973ec",
                "cc3986460c930a304c6f86172dbafe27e3ab5ff7"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 51194,
            "activeSources": 8,
            "criticalAlerts": 27934,
            "activeCampaigns": 260
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 17098,
                "trend": "stable",
                "percentage": 2
            },
            {
                "category": "C2",
                "count": 10836,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 4644,
                "trend": "stable",
                "percentage": -5
            },
            {
                "category": "Phishing",
                "count": 301,
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
                "count": 15739,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://103[.]203[.]210[.]102:47655/bin[.]sh",
                    "hxxp://59[.]97[.]252[.]89:59683/i",
                    "hxxp://182[.]117[.]15[.]66:43039/bin[.]sh"
                ]
            },
            {
                "name": "CINS Threat List",
                "count": 15000,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]15[.]14[.]29",
                    "1[.]165[.]215[.]231",
                    "1[.]192[.]129[.]106"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1692,
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
                "count": 1457,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "5fe196813d0bf092a5d8f3ef550fe959a86ccf87",
                    "205d49b6c7313e16e931e1b5873cc20be0dee85b",
                    "94c4ec66b6f57c29ac935890d7796decea67af37"
                ]
            },
            {
                "name": " \"win.cobalt_strike\"",
                "count": 1323,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"43[.]139[.]239[.]108:443\"",
                    " \"93[.]185[.]165[.]104:22\"",
                    " \"93[.]185[.]165[.]104:443\""
                ]
            },
            {
                "name": "Vidar",
                "count": 806,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "8bc45d63603370c41a2d7d352cdecb01281f5264",
                    "4f2559300051882eff69dc21bc3d27da6f988751",
                    "5e64c59a01d6dbe03bd0b794c1d505663451c393"
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
                "count": 712,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "4768d20d3072a30b168c650b11a9e4d3e1a0dc60",
                    "c234496c7b0abcd873bb6bb5a54288b6d340b6ff",
                    "7a215b5a8eaf9b132cf84f22d9ee2202c2a028bf"
                ]
            },
            {
                "name": " \"win.pure_rat\"",
                "count": 624,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"45[.]139[.]104[.]232:55009\"",
                    " \"139[.]64[.]172[.]10:443\"",
                    " \"45[.]225[.]135[.]166:56003\""
                ]
            },
            {
                "name": " \"Mirai",
                "count": 571,
                "types": [
                    "hash"
                ],
                "sampleIndicators": [
                    " \"18a2634a8011f6df044d0a626e12f13d3fe159db7c64670fadc40995bd0a634e",
                    " \"112d6464096fe66a358c45d4edfd193348858a4a8b29c523942a9e84223a172e",
                    " \"3c7d735a61b8748c98480fa483f73b14436dfd7063f5f06a6c146e5341cc56c5"
                ]
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious URLs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": "malware_download",
        "totalAttacksThisHour": 40869,
        "lastCalculated": "2026-10-02 02:32 IST"
    }
};
