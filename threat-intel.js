// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-04-06T22:31:13.869165+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-04-06T22:31:13.614586+05:30",
    "lastUpdatedFormatted": "Apr 06, 2026 at 10:31 PM IST",
    "comparisonPeriod": "Apr 05 \u2013 Apr 06, 2026",
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
                "hxxps://urban-window-repair-point[.]xyz/ja/",
                "hxxps://urlz[.]li/7f6b1866",
                "hxxps://sso-security[.]com/5l-4lypNJBg?/aG94aHVudA",
                "hxxps://roblox[.]com[.]py/users/6809138775/profile",
                "hxxp://www[.]70969[.]xyz/"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 775,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 775,
                "newInLastHour": 17,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"aa0dee7ef692920b74705fdf1f0117c5633dc8f5da7f68b5221039cdc56b9348",
                " \"2f4c73f09e78a886f6f8e260c1222081352a060392a8482966bbdefb3e90ebf4",
                " \"7fff1bf124cb684297ee823cf91fff62e8f94ada32e24b20b412bbedc52a92ad",
                " \"f088b7c8d334ee4ff0800e05c601607ade517f72851cea7a4769a049667420f8",
                " \"296bf78a478cb3cf554d448e9538d43797aa180af89a098cd6a68543d5e6a0dd"
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
                "1[.]159[.]183[.]23",
                "1[.]159[.]69[.]241",
                "1[.]183[.]0[.]38"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 4239,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 4239,
                "newInLastHour": 4239,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]13[.]22[.]203",
                "1[.]145[.]124[.]191",
                "1[.]214[.]117[.]218",
                "1[.]214[.]197[.]163",
                "1[.]214[.]255[.]210"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 21801,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 21801,
                "newInLastHour": 21801,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxps://core-net[.]logicalfabric[.]in[.]net/05fe317c-0981-4de2-bc8a-930d369db441/verification[.]google",
                "hxxps://stitch-api[.]logicalfabric[.]in[.]net/05fe317c-0981-4de2-bc8a-930d369db441/verification[.]google",
                "hxxps://thread-svc[.]logicalfabric[.]in[.]net/05fe317c-0981-4de2-bc8a-930d369db441/verification[.]google",
                "hxxp://125[.]43[.]36[.]108:36740/bin[.]sh",
                "hxxp://115[.]55[.]53[.]218:41063/i"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 760,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 760,
                "newInLastHour": 754,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"mind-stack[.]cognitivematrix[.]in[.]net\"",
                " \"core-net[.]logicalfabric[.]in[.]net\"",
                " \"stitch-api[.]logicalfabric[.]in[.]net\"",
                " \"thread-svc[.]logicalfabric[.]in[.]net\"",
                " \"mesh-router[.]logicalfabric[.]in[.]net\""
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
            "iocCount": 9476,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 9476,
                "newInLastHour": 8539,
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
            "totalIndicators": 41036,
            "activeSources": 8,
            "criticalAlerts": 23458,
            "activeCampaigns": 97
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 22494,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "C2",
                "count": 964,
                "trend": "down",
                "percentage": -89
            },
            {
                "category": "Phishing",
                "count": 301,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 206,
                "trend": "down",
                "percentage": -16
            }
        ],
        "targetedSectors": [
            {
                "name": "General",
                "percentage": 85
            },
            {
                "name": "Tech",
                "percentage": 14
            },
            {
                "name": "Finance",
                "percentage": 0
            }
        ],
        "campaigns": [
            {
                "name": "malware_download",
                "count": 21720,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://42[.]237[.]61[.]101:49876/bin[.]sh",
                    "hxxps://break-down[.]analyticvector[.]in[.]net/05fe317c-0981-4de2-bc8a-930d369db441/verification[.]google",
                    "hxxp://67[.]20[.]225[.]220:41113/i"
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
                "count": 1591,
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
                "name": " \"Mirai",
                "count": 328,
                "types": [
                    "hash"
                ],
                "sampleIndicators": [
                    " \"b0a28d6b10f76ea94f3e995df48f773b53744eb553b5ca6023165a44cd1c1443",
                    " \"e84d5b7d9ff1d785eea06f2e691faf47193bd8e5c3ef210f203a1e329f49fba8",
                    " \"156ed8a333c8d51ab3c140a2c03bcb0c809d6948dd46aba73d1c33f0c8fc803f"
                ]
            },
            {
                "name": "Generic Phishing",
                "count": 298,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxps://urban-window-repair-point[.]xyz/ja/",
                    "hxxps://urlz[.]li/7f6b1866",
                    "hxxps://sso-security[.]com/5l-4lypNJBg?/aG94aHVudA"
                ]
            },
            {
                "name": "Vidar",
                "count": 282,
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
                "name": " \"n/a",
                "count": 237,
                "types": [
                    "hash"
                ],
                "sampleIndicators": [
                    " \"35ae5a9054c55869a00cea31b43c2ac972bbc60d0549b3b1e086c02469c5ed9b",
                    " \"111cc2d2232705565c4dbbddf7d16104bbf83554248a2ed0520b4e37bdc3acf5",
                    " \"574352d0ad1c987594be210faff07d09f032d34ef418a5c5d618ee7862683b3f"
                ]
            },
            {
                "name": " \"unknown\"",
                "count": 198,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"xvideos-th[.]com\"",
                    " \"hxxps://www[.]printertechs[.]com\"",
                    " \"printertechs[.]com\""
                ]
            },
            {
                "name": " \"unknown_stealer\"",
                "count": 145,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"hxxps://weedhack[.]cy/api/component/lastModified\"",
                    " \"hxxps://receiver[.]cy/files/jar/module\"",
                    " \"hxxps://receiver[.]cy/files/jar/component\""
                ]
            },
            {
                "name": " \"js.clearfake\"",
                "count": 144,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"stat-render[.]analyticvector[.]in[.]net\"",
                    " \"break-down[.]analyticvector[.]in[.]net\"",
                    " \"decision-svc[.]rationalmatrix[.]in[.]net\""
                ]
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious URLs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": "AsyncRAT",
        "totalAttacksThisHour": 50655,
        "lastCalculated": "2026-04-06 22:31 IST"
    }
};
