// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-04-07T22:43:30.015993+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-04-07T22:43:29.726780+05:30",
    "lastUpdatedFormatted": "Apr 07, 2026 at 10:43 PM IST",
    "comparisonPeriod": "Apr 06 \u2013 Apr 07, 2026",
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
                "hxxps://yashraj014[.]github[.]io/amazon-ui-clone/",
                "hxxp://aidasdir[.]github[.]io/MyEtherWallet/",
                "hxxps://webfun[.]website/landingpages/a462b1ba-cbb5-4aec-853c-99f6af486dd1/jhAEYEtInnqYxzPh_N4lL-B6doAiM3LckFuEP39p2Kc",
                "hxxps://www[.]robiox[.]com[.]py/users/144555541485/profile",
                "hxxps://consultacessoveicular[.]shop/"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 800,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 800,
                "newInLastHour": 27,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"335001fdf98f94efd163c662c0387a7137acb66de548ad620970141c5a2a34f5",
                " \"55312ad840d43f760e7fdf791089e7fcea0e18cbd6e0c8960481bb1f097f3be2",
                " \"1339967c8919ed04d9643423765d641413ca5086ef6bcfa832db9ab4a4a2717a",
                " \"c2f18f6c5ef4700dd442b99552fa0a4e02a057c13cb7ba4f7ba0e46ccbbc30a9",
                " \"e7859e4924d3858332138ec262af2308ffacab2133a6b3bcdfa92fcacccaa15b"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1543,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1543,
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
                "1[.]0[.]248[.]118",
                "1[.]14[.]3[.]240",
                "1[.]157[.]69[.]63",
                "1[.]159[.]183[.]23",
                "1[.]176[.]134[.]241"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 4423,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 4423,
                "newInLastHour": 4423,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]13[.]22[.]203",
                "1[.]145[.]124[.]191",
                "1[.]207[.]102[.]177",
                "1[.]214[.]117[.]218",
                "1[.]214[.]197[.]163"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 21908,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 21908,
                "newInLastHour": 21908,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxps://rnl2[.]abyssrevue[.]in[.]net/05fe317c-0981-4de2-bc8a-930d369db441/verification[.]google",
                "hxxp://175[.]148[.]57[.]127:45797/bin[.]sh",
                "hxxp://182[.]123[.]208[.]67:43651/i",
                "hxxps://dense-graph[.]aeromechsadn[.]in[.]net/05fe317c-0981-4de2-bc8a-930d369db441/verification[.]google",
                "hxxp://222[.]140[.]215[.]72:53324/bin[.]sh"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 966,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 966,
                "newInLastHour": 960,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"airw5-field[.]abyssrevue[.]in[.]net\"",
                " \"rnl2[.]abyssrevue[.]in[.]net\"",
                " \"dense-graph[.]aeromechsadn[.]in[.]net\"",
                " \"z3vrw7[.]aeromechsadn[.]in[.]net\"",
                " \"dyntideor8[.]aeromechsadn[.]in[.]net\""
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
            "iocCount": 9462,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 9462,
                "newInLastHour": 0,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "57beeab4afc1c37c717071048978266c9d48d9d5",
                "ed4739e216d716d1acf5ea5c7e0a1af900af57c3",
                "3eb4d7d8bce32ac81b93f1b828f32865d088eeec",
                "7e8dcf46f1bfd2574458730958b846d30cc24f63",
                "4866daa967432d5345a46c395fd6bd3825794c66"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 50003,
            "activeSources": 8,
            "criticalAlerts": 32179,
            "activeCampaigns": 199
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 22703,
                "trend": "stable",
                "percentage": 1
            },
            {
                "category": "C2",
                "count": 9476,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 324,
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
                "percentage": 87
            },
            {
                "name": "Tech",
                "percentage": 12
            },
            {
                "name": "Finance",
                "percentage": 0
            }
        ],
        "campaigns": [
            {
                "name": "malware_download",
                "count": 21845,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxps://trimeshet[.]intellectnail[.]in[.]net/05fe317c-0981-4de2-bc8a-930d369db441/verification[.]google",
                    "hxxps://layerpine[.]intellectnail[.]in[.]net/05fe317c-0981-4de2-bc8a-930d369db441/verification[.]google",
                    "hxxp://42[.]229[.]160[.]161:45770/bin[.]sh"
                ]
            },
            {
                "name": "CINS Threat List",
                "count": 15000,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]0[.]248[.]118",
                    "1[.]123[.]227[.]253",
                    "1[.]14[.]3[.]240"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1590,
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
                "count": 1400,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "e7decd829f1c348a1d04ac6d5ce1470aa2ef4cea",
                    "42f9fb369604befacac247a220b2275c8e3dbb00",
                    "ee5e5cb42ab6153eb050d953ba58f03cd5b64f80"
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
                "count": 663,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "158c34ec24ca20df4cdce6f85d495a752d1cf446",
                    "5d2d24993bfab8579ce17ba0d5a18ab657c2fc90",
                    "9149e1f1d80f8e5b8bcf4311cfe94d40f7dc4702"
                ]
            },
            {
                "name": "LummaStealer",
                "count": 551,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "f58ffe7484653b53cea539b23da25bc8eeeb2c05",
                    "2ebb8f663f93eb9c8f169cc09a86f6dba1c85584",
                    "f05a2876d9129ec057ecaedfac9cc37ebe2138ad"
                ]
            },
            {
                "name": "Vidar",
                "count": 478,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "57beeab4afc1c37c717071048978266c9d48d9d5",
                    "be97447135b5337ed8a791276e6bcfe4d6f556f7",
                    "1c1edfab550d090f1278bcdcafc986ac89827f5c"
                ]
            },
            {
                "name": " \"Mirai",
                "count": 408,
                "types": [
                    "hash"
                ],
                "sampleIndicators": [
                    " \"e69851ee248181295b30144b8ce820b6172db4c9b0df1ceed62d86dd237a086c",
                    " \"4a0a32258dc4d1b68a1db743b8f6443982d541548b02cfd2060e690a38b03faa",
                    " \"6db301aa5e53ed0a4a957df6efdc30bfbe7dcea81a1d1aaeefd0b1b1a987fe60"
                ]
            },
            {
                "name": "OffLoader",
                "count": 385,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "448e34bdaa4390ecde578cf01c491ed16d6563a0",
                    "515c241fb00cbbf17827c3bfbdb7ad5378ed0fcd",
                    "7442a9c99b2b550565fea4c0c5a69a7d441c475e"
                ]
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious URLs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": "malware_download",
        "totalAttacksThisHour": 42623,
        "lastCalculated": "2026-04-07 22:43 IST"
    }
};
