// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-02-22T14:17:14.174034+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-02-22T14:17:13.937439+05:30",
    "lastUpdatedFormatted": "Feb 22, 2026 at 02:17 PM IST",
    "comparisonPeriod": "Feb 21 \u2013 Feb 22, 2026",
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
                "hxxps://www[.]clientesantaseguro[.]com/",
                "hxxps://notifyhubss[.]net/dc8ca50507eed34513p80a4a1bc2b3e98954[.]html",
                "hxxps://6bed10b4-7f14-47f0-9a8a-ae46c6e2c953-00-29op5zoaeva8f[.]picard[.]replit[.]dev/",
                "hxxps://8e0258e9-6bd9-445e-8f1f-fbb0b4e59bdc-00-3htge7vz2vu1z[.]riker[.]replit[.]dev/",
                "hxxp://bafkreig3vehsimtnps5cig5owkq5ownsvkmpptrsii4fktvq7hz3q5lbvu[.]ipfs[.]dweb[.]link/"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 435,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 435,
                "newInLastHour": 19,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"2c9bda6108de3a34226a97dad68c0b227610f9e569f312b38246607aadcaf2a4",
                " \"10ba901eea6044acb21d5c4a5127480e3e42b1d7c7d00d5df3ff7aa11cb54778",
                " \"e5ecc2b34bec322665d61d8e0c6e02c64c33ac98f9612b71cd0b114c1f1b4a1b",
                " \"1a450e29a8be35a90cdf439ac50c0b6017a30067aa040ec6c06631470fe4f40a",
                " \"a6f5f6da9c5b2307a84f9cf1791d66314b1aa086429c0b5df34ed749628f5c59"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1479,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1479,
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
                "1[.]0[.]164[.]165",
                "1[.]10[.]211[.]66",
                "1[.]11[.]132[.]194",
                "1[.]120[.]7[.]70",
                "1[.]14[.]3[.]240"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 6541,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 6541,
                "newInLastHour": 6541,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]12[.]217[.]80",
                "1[.]194[.]219[.]159",
                "1[.]220[.]64[.]218",
                "1[.]238[.]106[.]229",
                "1[.]241[.]174[.]81"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 20249,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 20249,
                "newInLastHour": 20249,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://123[.]129[.]132[.]110:37974/i",
                "hxxps://odbsasjd[.]upgrade4file[.]digital/?=check&&actmn=aIjlDJUshdaUlwoM",
                "hxxp://42[.]239[.]189[.]20:47069/i",
                "hxxps://lunc[.]revio[.]live/LunX[.]zip",
                "hxxp://94[.]156[.]170[.]255/webdav"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 1167,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 1167,
                "newInLastHour": 990,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"odbsasjd[.]upgrade4file[.]digital\"",
                " \"oprc9zre[.]upgrade4file[.]digital\"",
                " \"tightfeather[.]condenfeather[.]ru\"",
                " \"clearscript[.]purecode[.]in[.]net\"",
                " \"206[.]123[.]145[.]26:1999\""
            ]
        },
        "Feodo Tracker": {
            "description": "Botnet C2 server IPs from Feodo Tracker. Tracks Dridex, Emotet, TrickBot, QakBot, and BazarLoader.",
            "website": "https://feodotracker.abuse.ch/",
            "updateFrequency": "Hourly",
            "iocCount": 2,
            "iocDataUrl": "https://thehgtech.com/ioc-data/feodo-tracker.json",
            "stats": {
                "total": 2,
                "newInLastHour": 2,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "162[.]243[.]103[.]246",
                "178[.]62[.]3[.]223"
            ]
        },
        "SSL Blacklist": {
            "description": "Malicious SSL certificates used by botnet C2 servers. Helps detect encrypted malware communications.",
            "website": "https://sslbl.abuse.ch/",
            "updateFrequency": "Daily",
            "iocCount": 8994,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 8994,
                "newInLastHour": 8523,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "de82f1f7daacb7b5d91bee3382a3e0a36037ded7",
                "c96e7c1cbfdcff64e90557779edd3af8a1b6a6c4",
                "682a5d662e691f728b8279c889f9d70dafc8bbc4",
                "17a5a3ef6c810022d695d6e0642ac0ccf8505600",
                "cf716cb4e11c0b7c8b7deda04db0df9332b5a5f9"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 39087,
            "activeSources": 8,
            "criticalAlerts": 21108,
            "activeCampaigns": 108
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 20634,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 826,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "C2",
                "count": 474,
                "trend": "down",
                "percentage": -94
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
                "count": 20180,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://115[.]63[.]202[.]84:47878/bin[.]sh",
                    "hxxp://110[.]37[.]2[.]60:37043/i",
                    "hxxp://42[.]225[.]192[.]127:52172/i"
                ]
            },
            {
                "name": "CINS Threat List",
                "count": 15000,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]0[.]164[.]165",
                    "1[.]10[.]211[.]66",
                    "1[.]11[.]132[.]194"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1483,
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
                "name": " \"win.formbook\"",
                "count": 388,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"b8b1444ffb91963e527fddee6e57ff81131b49a2\"",
                    " \"8c440039311d8f01c2a626dbb4f55bff11042f2f610306771d367b36adaa1b90\"",
                    " \"9ddd0f781a7c3e4620eb2c9846a303ec\""
                ]
            },
            {
                "name": "Generic Phishing",
                "count": 290,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxps://www[.]clientesantaseguro[.]com/",
                    "hxxps://notifyhubss[.]net/dc8ca50507eed34513p80a4a1bc2b3e98954[.]html",
                    "hxxps://6bed10b4-7f14-47f0-9a8a-ae46c6e2c953-00-29op5zoaeva8f[.]picard[.]replit[.]dev/"
                ]
            },
            {
                "name": " \"Mirai",
                "count": 232,
                "types": [
                    "hash"
                ],
                "sampleIndicators": [
                    " \"8dab2697dd22b6ee54fe70e1797811cce578b271753e17b79699cfb81b09df58",
                    " \"a774b70d943f5ebb70aabc83be313d4bfda3746074de194c0047e1583c8335a5",
                    " \"235c1e6fc31d63ffeb14de6080d89ee70d1056124fe2305eba8035ac574a4c00"
                ]
            },
            {
                "name": "Vidar",
                "count": 179,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "66afb632b2131a12c4ee5896e88bc485662077eb",
                    "adf3f697ee22a8dc8ea8706f940bcdde0a72b6a5",
                    "9b64cd9e6bd74585beeb263fcff0e91988921f88"
                ]
            },
            {
                "name": " \"js.clearfake\"",
                "count": 178,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"superlink[.]ultranet[.]in[.]net\"",
                    " \"highrange[.]ultranet[.]in[.]net\"",
                    " \"fastexchange[.]fastlink[.]in[.]net\""
                ]
            },
            {
                "name": " \"js.iclickfix\"",
                "count": 171,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"v2[.]petrnesterov[.]com\"",
                    " \"xpekt[.]aurovine[.]com\"",
                    " \"relativeplanning[.]com\""
                ]
            },
            {
                "name": " \"n/a",
                "count": 132,
                "types": [
                    "hash"
                ],
                "sampleIndicators": [
                    " \"df76fbae5cfef242cb86d0f96e7f640735aa598e149dccf6febb0e5098a93478",
                    " \"72cf8ed16f27a07225e88c4871a7e9cda0b089c086e3a84e40cda6704cabedb2",
                    " \"b384ba0ad39c09ffe564ba247aef3223d6bf50ca3fc92201db4ed67ad0a1a4d2"
                ]
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious IPs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": "AsyncRAT",
        "totalAttacksThisHour": 51624,
        "lastCalculated": "2026-02-22 14:17 IST"
    }
};
