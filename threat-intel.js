// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-04-12T11:31:22.918434+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-04-12T11:31:22.441299+05:30",
    "lastUpdatedFormatted": "Apr 12, 2026 at 11:31 AM IST",
    "comparisonPeriod": "Apr 11 \u2013 Apr 12, 2026",
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
                "hxxps://rblx[.]foo/s/MLdUZm",
                "hxxps://emilemoraes[.]github[.]io/Netflix-Clone-",
                "hxxps://shekharscript[.]github[.]io/Netflix-clone/",
                "hxxp://www[.]infinity-zone[.]com[.]pl/Steps/auth/login[.]php",
                "hxxp://www[.]infinity-zone[.]com[.]pl/"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 511,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 511,
                "newInLastHour": 3,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"a27df06c7167eced1ddaeb8adccaa5f60500f52bc7030389eed2a0903cdf8286",
                " \"9854587e5e51a2af8a4039c243fe5cef1eedd11961270f88c354f13542a3d2e7",
                " \"cba50529216a7d7a1505bdbd72ffa6399751e8e9e62f89562d11aa824982b472",
                " \"fd2b7f9ade749c08cfc11a27d0fb5f094d044a59b11b17a8767ff891f89f55a8",
                " \"d9d2ececc26200a3704d8c69ef2f9c2eceffe0ebafd7448c0801fcb7eaf68d44"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1591,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1591,
                "newInLastHour": 2,
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
                "1[.]123[.]231[.]55",
                "1[.]178[.]175[.]72",
                "1[.]192[.]179[.]172",
                "1[.]197[.]102[.]62",
                "1[.]197[.]251[.]231"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 828,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 828,
                "newInLastHour": 828,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]92[.]125[.]146",
                "1[.]92[.]131[.]22",
                "1[.]94[.]226[.]80",
                "1[.]95[.]195[.]50",
                "101[.]126[.]128[.]223"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 21659,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 21659,
                "newInLastHour": 21659,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxps://blob4-data[.]sox9liven[.]in[.]net/05fe317c-0981-4de2-bc8a-930d369db441/ck-3d80df5d12cdfe6450a782fc87bf66b444[.]google",
                "hxxp://182[.]123[.]190[.]106:46174/bin[.]sh",
                "hxxps://node3-pack[.]sox9liven[.]in[.]net/05fe317c-0981-4de2-bc8a-930d369db441/ck-3d80df5d12cdfe6450a782fc87bf66b444[.]google",
                "hxxps://api2-cert[.]sox9liven[.]in[.]net/05fe317c-0981-4de2-bc8a-930d369db441/ck-3d80df5d12cdfe6450a782fc87bf66b444[.]google",
                "hxxp://110[.]36[.]27[.]186:37845/i"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 868,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 868,
                "newInLastHour": 867,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"node3-pack[.]sox9liven[.]in[.]net\"",
                " \"api2-cert[.]sox9liven[.]in[.]net\"",
                " \"auth1-user[.]sox9liven[.]in[.]net\"",
                " \"drmartensoutlet[.]us[.]com\"",
                " \"ama[.]jp[.]net\""
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
            "iocCount": 9496,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 9496,
                "newInLastHour": 32,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "c23dec61c90a195517b1a3f585a9792097443d1e",
                "cfcc12d65074e250d9a78b5e3c6f9f8676c32893",
                "8c475e004037f89aef507d1ac97bf45ba952cc80",
                "f803ae013add053d1b0a3a5f1f460d5adb96a6e3",
                "2e15b765de2ed706d93067a04c00d3d19f468d69"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 49409,
            "activeSources": 8,
            "criticalAlerts": 31656,
            "activeCampaigns": 189
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 22174,
                "trend": "stable",
                "percentage": -1
            },
            {
                "category": "C2",
                "count": 9482,
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
                "count": 211,
                "trend": "stable",
                "percentage": -1
            }
        ],
        "targetedSectors": [
            {
                "name": "General",
                "percentage": 86
            },
            {
                "name": "Tech",
                "percentage": 13
            },
            {
                "name": "Finance",
                "percentage": 0
            }
        ],
        "campaigns": [
            {
                "name": "malware_download",
                "count": 21608,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://185[.]9[.]139[.]117:56264/bin[.]sh",
                    "hxxps://data2-fast[.]plu8moran[.]in[.]net/05fe317c-0981-4de2-bc8a-930d369db441/ck-3d80df5d12cdfe6450a782fc87bf66b444[.]google",
                    "hxxp://112[.]248[.]140[.]131:35523/i"
                ]
            },
            {
                "name": "CINS Threat List",
                "count": 15000,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]10[.]133[.]129",
                    "1[.]10[.]133[.]182",
                    "1[.]123[.]231[.]55"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1589,
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
                "count": 1402,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "05f047ee67a239b926284ff3cafb7edd8af328e0",
                    "c9efd5520dce50014bcd13b73569034d0e3971f2",
                    "e7decd829f1c348a1d04ac6d5ce1470aa2ef4cea"
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
                "count": 669,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "ee4dd385bf849f7621deed67382e64c17b864e20",
                    "3787ee8b1d038bf52620e33956b452f4aa38214f",
                    "f4c8b11947963395a1a1624aa04e8a717693f297"
                ]
            },
            {
                "name": "LummaStealer",
                "count": 553,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "ab7f083d77dc2b1b71c0aec9a417e0a5a036a5f9",
                    "7ce02a4df627573696141e40970ef60e246f9f3f",
                    "f58ffe7484653b53cea539b23da25bc8eeeb2c05"
                ]
            },
            {
                "name": " \"js.clearfake\"",
                "count": 508,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"data2-fast[.]plu8moran[.]in[.]net\"",
                    " \"site1-proxy[.]plu8moran[.]in[.]net\"",
                    " \"gate6-post[.]zorvelixan[.]in[.]net\""
                ]
            },
            {
                "name": "Vidar",
                "count": 466,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "047f23f9ad2edaa5e34ae660ac30cd4ec5975e18",
                    "19475fe405f20f1a346647ad71edb76bf9640797",
                    "1e7353a4873db7f099b9be0bbcdbd790e9b6014c"
                ]
            },
            {
                "name": "OffLoader",
                "count": 388,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "cfcc12d65074e250d9a78b5e3c6f9f8676c32893",
                    "8c475e004037f89aef507d1ac97bf45ba952cc80",
                    "f803ae013add053d1b0a3a5f1f460d5adb96a6e3"
                ]
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious URLs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": "malware_download",
        "totalAttacksThisHour": 38696,
        "lastCalculated": "2026-04-12 11:31 IST"
    }
};
