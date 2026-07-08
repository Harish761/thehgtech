// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-07-08T23:18:34.642051+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-07-08T23:18:34.239962+05:30",
    "lastUpdatedFormatted": "Jul 08, 2026 at 11:18 PM IST",
    "comparisonPeriod": "Jul 07 \u2013 Jul 08, 2026",
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
                "hxxps://agenciatributaria[.]doiih[.]cam/es",
                "hxxps://lnk[.]ink/3VQv5",
                "hxxp://itechbyte[.]com[.]br/dembe/page/",
                "hxxps://roblox[.]com[.]gr/404",
                "hxxps://secure-page-builder--joanpressy[.]replit[.]app/"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 1384,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 1384,
                "newInLastHour": 37,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"86f77feba22ad9641d9464ac07c0fc4c2657f62cf02b85bdb50a192980265ebf",
                " \"6b8d7f6cc333d2e89b45821a83f7d2029e8a6cdcb0c92ec1e577dd2158cfa0e9",
                " \"3905019787477bee5434351d44d8477ea3182c124b8cb43d142e0e02b1da4210",
                " \"817dd50a5f00a50c9dd6645917a92ac202a144f8a393750ecf237f1948d075d1",
                " \"1f0780dc6c9b55e082a504bea8cff6b367fe775b8fa34485a0231024d9470e31"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1680,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1680,
                "newInLastHour": 56,
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
                "1[.]159[.]81[.]89",
                "1[.]190[.]98[.]234",
                "1[.]192[.]177[.]87"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 9106,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 9106,
                "newInLastHour": 9106,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]0[.]164[.]165",
                "1[.]15[.]221[.]192",
                "1[.]162[.]197[.]67",
                "1[.]162[.]225[.]185",
                "1[.]162[.]226[.]31"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 22513,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 22513,
                "newInLastHour": 22513,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxps://rcodtjdj[.]melbetiran[.]bet/89f5b321-1eca-4e6f-92d4-9b19eade73c1",
                "hxxp://105[.]224[.]33[.]217:41583/bin[.]sh",
                "hxxp://123[.]12[.]240[.]37:49403/i",
                "hxxp://91[.]92[.]242[.]236/files-129312398/files/file_55c1b708fcd2591a[.]exe",
                "hxxp://42[.]232[.]228[.]31:53154/bin[.]sh"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 4072,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 4072,
                "newInLastHour": 3999,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"rcodtjdj[.]melbetiran[.]bet\"",
                " \"aafnojwq[.]megashart[.]blog\"",
                " \"104[.]225[.]149[.]151:8080\"",
                " \"104[.]225[.]149[.]151:80\"",
                " \"104[.]225[.]149[.]151:443\""
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
            "iocCount": 10086,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 10086,
                "newInLastHour": 18,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "2d83749ee793d5dd905aebcee10c1898c7ce8110",
                "bca627ea4b11ce235879ac54bcf5ca2121a6ed0c",
                "400866dbd7d2f51fbab5f7f73e98f60df8e0d798",
                "145b585a8d477243e229f4d660d1a9fc40b38243",
                "22549b9d0f61cb1d81ef6aea0ebc3689e38f12df"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 55021,
            "activeSources": 8,
            "criticalAlerts": 33993,
            "activeCampaigns": 254
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 23906,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "C2",
                "count": 10087,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 3335,
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
                "count": 22475,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxps://zqjjyamd[.]megaparifarsi[.]com/172da6e7-0589-48bb-a507-ea3381cfd8e3",
                    "hxxp://105[.]225[.]113[.]253:36827/i",
                    "hxxp://110[.]37[.]65[.]212:34828/bin[.]sh"
                ]
            },
            {
                "name": "CINS Threat List",
                "count": 15000,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]158[.]52[.]79",
                    "1[.]159[.]81[.]89",
                    "1[.]188[.]29[.]217"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1624,
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
                "name": " \"win.cobalt_strike\"",
                "count": 1453,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"117[.]72[.]181[.]104:8080\"",
                    " \"117[.]72[.]181[.]104:80\"",
                    " \"185[.]92[.]190[.]185:8898\""
                ]
            },
            {
                "name": "AsyncRAT",
                "count": 1417,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "41cbe997a63cc9211fd19593cfcf27602d10bcd8",
                    "526b4a8604d900869439980614e56e4b288fb46d",
                    "15a47f45b77ef377b9ec7f6aff1fc3fcca1c6035"
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
                "count": 691,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "1b64957d1d878c0c0b0b346849db2e64d487aa17",
                    "83ff65960d2df4b29e78d6fd0342dcd5f053eb13",
                    "ac563907d31a21443760cee92a98b50bba6152aa"
                ]
            },
            {
                "name": "Vidar",
                "count": 626,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "72a2354f33ff1d38b31cb19209b4b90acafaf46d",
                    "ec452c3c30499a1a6983877a2d881c1a8f2955ea",
                    "e553bfd006337f4cb3a3acf5a681980d184b79e6"
                ]
            },
            {
                "name": "LummaStealer",
                "count": 556,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "2beac2ee8b2fe7625d4de9f5381d37f200965f91",
                    "a46841d623a191366909b24375bee0eceea23bbe",
                    "272e76f605bec1da1ea719df8dc0e7269de7d44e"
                ]
            },
            {
                "name": " \"n/a",
                "count": 444,
                "types": [
                    "hash"
                ],
                "sampleIndicators": [
                    " \"939a3db851e7f7648babfe390bb8d93338ba57870d66e1a6b846e5e1a3207440",
                    " \"d7c4f4f6b3cb4255775b4a29a10ed7d51dc641bda7a375c7a05d4f5681fe2758",
                    " \"3da5005749afcafd5d55d1ccdeca715e85e47c934df3c0843a567bc4fe4af1a9"
                ]
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious URLs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": "SSH Attacks",
        "totalAttacksThisHour": 51034,
        "lastCalculated": "2026-07-08 23:18 IST"
    }
};
