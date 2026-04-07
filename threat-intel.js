// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-04-07T14:47:32.926681+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-04-07T14:47:32.640181+05:30",
    "lastUpdatedFormatted": "Apr 07, 2026 at 02:47 PM IST",
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
                "hxxp://juno-web-mail-75544b[.]webflow[.]io/",
                "hxxp://aaktivsipylaterindon[.]prestocu[.]biz[.]id/",
                "hxxps://zk-tiantianyingqiu[.]com/jp/",
                "hxxps://coeinsquarreelogi[.]webflow[.]io/",
                "hxxps://meets-choosing-jefferson-documented[.]trycloudflare[.]com/"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 624,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 624,
                "newInLastHour": 71,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"1c2296192762ef4a2e4e6fa51eb6f931669fa52e8c83d28eef76ef9a5f11750e",
                " \"905a82789988a28d0369c98bf00e150ecbff27d576a6a6add5bd99359f2092d3",
                " \"cfddfe6b645842b8ed34137a45a13736119d4d408f9fb99f62c5aa7d318c4747",
                " \"1b41bddd7bbed57b395306ace1d4e0154dd1a82f2b6bae3e0a70f8cccc7b7db4",
                " \"81c9b7db01704961a30e9903e71cd147551bf206f26e54a8eabd91d3320136eb"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1588,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1588,
                "newInLastHour": 11,
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
                "1[.]123[.]227[.]253",
                "1[.]157[.]69[.]63",
                "1[.]176[.]134[.]241",
                "1[.]177[.]162[.]3"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 4340,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 4340,
                "newInLastHour": 4340,
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
            "iocCount": 21644,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 21644,
                "newInLastHour": 21644,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxps://score-board[.]saklatwenty[.]in[.]net/05fe317c-0981-4de2-bc8a-930d369db441/verification[.]google",
                "hxxp://115[.]55[.]195[.]212:51230/bin[.]sh",
                "hxxps://main-route[.]leavedistribut[.]in[.]net/05fe317c-0981-4de2-bc8a-930d369db441/verification[.]google",
                "hxxp://176[.]65[.]139[.]35/bins/pmpsl",
                "hxxp://176[.]65[.]139[.]35/bins/psh4"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 895,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 895,
                "newInLastHour": 889,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"score-board[.]saklatwenty[.]in[.]net\"",
                " \"main-route[.]leavedistribut[.]in[.]net\"",
                " \"branch-node[.]leavedistribut[.]in[.]net\"",
                " \"send-relay[.]leavedistribut[.]in[.]net\"",
                " \"pack-svc[.]leavedistribut[.]in[.]net\""
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
            "iocCount": 9436,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 9436,
                "newInLastHour": 13,
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
            "totalIndicators": 49273,
            "activeSources": 8,
            "criticalAlerts": 31605,
            "activeCampaigns": 191
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 22142,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "C2",
                "count": 9463,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Phishing",
                "count": 301,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 253,
                "trend": "stable",
                "percentage": 0
            }
        ],
        "targetedSectors": [
            {
                "name": "General",
                "percentage": 88
            },
            {
                "name": "Tech",
                "percentage": 11
            },
            {
                "name": "Finance",
                "percentage": 0
            }
        ],
        "campaigns": [
            {
                "name": "malware_download",
                "count": 21492,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxps://sense-data[.]cognisphere[.]in[.]net/05fe317c-0981-4de2-bc8a-930d369db441/verification[.]google",
                    "hxxps://mind-web[.]cognisphere[.]in[.]net/05fe317c-0981-4de2-bc8a-930d369db441/verification[.]google",
                    "hxxp://110[.]36[.]77[.]19:51832/i"
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
                    "1[.]157[.]69[.]63"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1580,
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
                "count": 1399,
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
                "count": 472,
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
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious URLs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": "malware_download",
        "totalAttacksThisHour": 42273,
        "lastCalculated": "2026-04-07 14:47 IST"
    }
};
