// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-10-01T20:53:17.291042+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-10-01T20:53:16.981957+05:30",
    "lastUpdatedFormatted": "Oct 01, 2026 at 08:53 PM IST",
    "comparisonPeriod": "Sep 30 \u2013 Oct 01, 2026",
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
            "iocCount": 1333,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 1333,
                "newInLastHour": 388,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"8a6e1b4907b43527873e96a3a1e7aae7ab6ad1e8f0847f96b3ba24e011566ecf",
                " \"b9f6af899ff75f0d7c40313665c3dbffe48a0d7b08d7bcf5f818adb1747817a5",
                " \"4f9b86b42b5474fdb55cbd6e69be8a591eaaccbc0efaeea8c682ad8dc1b8aa33",
                " \"366a1589ef1afb6a73b072956bc0d0f237d05903a604a9bc49845e6706b31aff",
                " \"c2246563b2f7806e6d032d6c85bb44d7369499055aa6b5bc890ffc27668c30f7"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1692,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1692,
                "newInLastHour": 1,
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
                "1[.]15[.]14[.]29",
                "1[.]165[.]215[.]231",
                "1[.]192[.]129[.]106",
                "1[.]193[.]63[.]239",
                "1[.]203[.]186[.]149"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 4264,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 4264,
                "newInLastHour": 4264,
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
            "iocCount": 15739,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 15739,
                "newInLastHour": 15739,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://103[.]203[.]210[.]102:47655/bin[.]sh",
                "hxxp://59[.]97[.]252[.]89:59683/i",
                "hxxp://182[.]117[.]15[.]66:43039/bin[.]sh",
                "hxxp://87130921-60-20220830152356[.]webstarterz[.]com/new/secured_stub[.]ps1",
                "hxxp://87130921-60-20220830152356[.]webstarterz[.]com/secured_stub[.]ps1"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 6267,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 6267,
                "newInLastHour": 5731,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"155[.]103[.]69[.]190:7707\"",
                " \"102[.]220[.]163[.]27:3070\"",
                " \"saweva[.]workers[.]dev\"",
                " \"46[.]151[.]182[.]5:5050\"",
                " \"039489023[.]duckdns[.]org\""
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
            "iocCount": 10858,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 10858,
                "newInLastHour": 48,
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
            "totalIndicators": 51234,
            "activeSources": 8,
            "criticalAlerts": 27430,
            "activeCampaigns": 257
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 16633,
                "trend": "stable",
                "percentage": -1
            },
            {
                "category": "C2",
                "count": 10797,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 4902,
                "trend": "stable",
                "percentage": 0
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
                "count": 15342,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://91[.]92[.]242[.]236/files-129312398/files/file_f374c4d0079d076f[.]exe",
                    "hxxps://chrome[.]windows-browser[.]net/setup/downloads/ext1/ChromeSetup[.]exe",
                    "hxxp://94[.]154[.]43[.]26:8080/bot-linux-arm64"
                ]
            },
            {
                "name": "CINS Threat List",
                "count": 15000,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]117[.]171[.]170",
                    "1[.]12[.]229[.]231",
                    "1[.]165[.]215[.]231"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1691,
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
                "count": 1454,
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
                "count": 1333,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"162[.]35[.]243[.]205:443\"",
                    " \"37[.]120[.]238[.]187:8080\"",
                    " \"156[.]254[.]20[.]48:5998\""
                ]
            },
            {
                "name": "Vidar",
                "count": 807,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "d1f8cdf29e82994d89dfda8a9dcb541be63e83b3",
                    "107432baee23d80d32a4d6fe5d6a43d011114239",
                    "86b5a5612e53988e28ed6604e8e9ff5476a46d0e"
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
                "count": 711,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "c234496c7b0abcd873bb6bb5a54288b6d340b6ff",
                    "7a215b5a8eaf9b132cf84f22d9ee2202c2a028bf",
                    "8410f92dc9367bda715790bb163d32111731527d"
                ]
            },
            {
                "name": " \"win.pure_rat\"",
                "count": 632,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"45[.]225[.]135[.]166:56003\"",
                    " \"202[.]146[.]222[.]156:56002\"",
                    " \"202[.]146[.]222[.]156:56001\""
                ]
            },
            {
                "name": " \"Mirai",
                "count": 577,
                "types": [
                    "hash"
                ],
                "sampleIndicators": [
                    " \"11b606a4c098c99a6fae1c6c56fa09590616fe503639308b5e773c83df85b94e",
                    " \"fa6f34f439e2f40fcdccaa83a88e08fbe2e9285eba8c9e29228df3e3c16c1078",
                    " \"db11b9baed28a20871bf74a1126b1f202d974da51f865b2a6e3eccb1b0f9e4b6"
                ]
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious URLs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": "malware_download",
        "totalAttacksThisHour": 41476,
        "lastCalculated": "2026-10-01 20:53 IST"
    }
};
