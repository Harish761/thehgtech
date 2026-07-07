// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-07-07T20:38:17.363969+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-07-07T20:38:17.030661+05:30",
    "lastUpdatedFormatted": "Jul 07, 2026 at 08:38 PM IST",
    "comparisonPeriod": "Jul 06 \u2013 Jul 07, 2026",
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
                "hxxp://lnk[.]ua/tSU6QVByr",
                "hxxps://steamcommnunmity[.]com/tradeoffer/new/partner=80159154token=w6tbasGP41221",
                "hxxp://www[.]tiketok[.]cc/h5/",
                "hxxp://www[.]tiketok[.]cc/",
                "hxxps://www[.]aijiu99[.]net/"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 1022,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 1022,
                "newInLastHour": 401,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"45ff2890d39b7bf352f421dcf4a966dcacc35c519d08d48deaa994b2eb15d76b",
                " \"c06a59cf4544f87c41201cd2908ce336269eaa7d8fcd78fd22ff95f23f76ea7c",
                " \"a33b673d3bdc52c6fa15d0d30caf8d714ac3b77cb318b6f1e74b74fad4e3d2e4",
                " \"f6e61182613f9669ba97a79320ecb4eb366cb0d011d6d0d1eaa0a7263a578343",
                " \"6d0b9036bfff055471e35ef1790ba2fbf4d601b50c13b4a122e6375ebb0be153"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1679,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1679,
                "newInLastHour": 54,
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
                "1[.]188[.]29[.]217",
                "1[.]192[.]199[.]227",
                "1[.]193[.]63[.]247",
                "1[.]196[.]17[.]158",
                "1[.]197[.]102[.]62"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 4710,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 4710,
                "newInLastHour": 4710,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]0[.]164[.]165",
                "1[.]15[.]221[.]192",
                "1[.]162[.]247[.]182",
                "1[.]192[.]61[.]19",
                "1[.]20[.]186[.]29"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 22799,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 22799,
                "newInLastHour": 22799,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://94[.]154[.]43[.]22/arm5",
                "hxxp://94[.]154[.]43[.]22/arm",
                "hxxp://111[.]70[.]13[.]127:37514/i",
                "hxxp://61[.]52[.]47[.]54:36456/i",
                "hxxp://111[.]70[.]13[.]127:37514/bin[.]sh"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 4093,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 4093,
                "newInLastHour": 3818,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"204[.]10[.]160[.]254:2404\"",
                " \"172[.]245[.]244[.]91:443\"",
                " \"198[.]135[.]54[.]25:3650\"",
                " \"microsft-auth[.]duckdns[.]org\"",
                " \"cdn-telemetry-relaynn[.]online\""
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
            "iocCount": 10126,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 10126,
                "newInLastHour": 140,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "bca627ea4b11ce235879ac54bcf5ca2121a6ed0c",
                "400866dbd7d2f51fbab5f7f73e98f60df8e0d798",
                "145b585a8d477243e229f4d660d1a9fc40b38243",
                "22549b9d0f61cb1d81ef6aea0ebc3689e38f12df",
                "a838f21e4fbcf93b9dcb1adf61ce9a7e07729594"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 54281,
            "activeSources": 8,
            "criticalAlerts": 33295,
            "activeCampaigns": 237
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 23331,
                "trend": "stable",
                "percentage": 5
            },
            {
                "category": "C2",
                "count": 9964,
                "trend": "stable",
                "percentage": -1
            },
            {
                "category": "Botnet",
                "count": 3349,
                "trend": "stable",
                "percentage": 1
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
                "count": 22642,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://196[.]190[.]69[.]149:54767/bin[.]sh",
                    "hxxp://60[.]162[.]194[.]130:46369/bin[.]sh",
                    "hxxp://zippycanyonez[.]pro/00101010101001/juan[.]x86_64"
                ]
            },
            {
                "name": "CINS Threat List",
                "count": 15000,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]158[.]6[.]230",
                    "1[.]181[.]200[.]22",
                    "1[.]188[.]29[.]217"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1625,
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
                "count": 1420,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"e365aac901114d3db00d42b59e56a037-cn-hangzhou[.]alicloudapi[.]com\"",
                    " \"3[.]29[.]91[.]108:50050\"",
                    " \"134[.]175[.]8[.]102:10050\""
                ]
            },
            {
                "name": "AsyncRAT",
                "count": 1414,
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
                "count": 682,
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
                "count": 593,
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
                "count": 552,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "272e76f605bec1da1ea719df8dc0e7269de7d44e",
                    "ab7f083d77dc2b1b71c0aec9a417e0a5a036a5f9",
                    "7ce02a4df627573696141e40970ef60e246f9f3f"
                ]
            },
            {
                "name": "OffLoader",
                "count": 429,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "a838f21e4fbcf93b9dcb1adf61ce9a7e07729594",
                    "c24c5b16d1b72ff6933bdc9a5034808630f1413f",
                    "6cd9f5c15b172c39fd51e13d36d39c73a4d1395a"
                ]
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious URLs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": " \"n/a",
        "totalAttacksThisHour": 47227,
        "lastCalculated": "2026-07-07 20:38 IST"
    }
};
