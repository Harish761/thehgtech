// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-07-07T03:14:42.791538+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-07-07T03:14:42.461340+05:30",
    "lastUpdatedFormatted": "Jul 07, 2026 at 03:14 AM IST",
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
                "hxxps://15846[.]xyz/",
                "hxxp://www[.]15822[.]xyz/",
                "hxxps://www[.]roblox[.]com[.]ml/users/270353583680/profile",
                "hxxp://www[.]15831[.]xyz/",
                "hxxp://www[.]15830[.]xyz/"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 536,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 536,
                "newInLastHour": 11,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"5b64550c87fc3a579694133117a265c756fe36cd31de5ef0b87a6f2faae7f791",
                " \"810d409aef915e09eaa59b1cb8df60559c72b2da1ac0ab14ec875fbe58ac03d9",
                " \"cc668803553940c2c7ee1f6e7929d487b7c07fc41d8bc3f19c773bb67bf27eaf",
                " \"4b06e4c33a3ed62617c059ef47629b426971f2796f486449e19ae421f229fc16",
                " \"29e90df3f89e343059d0925b933b09237457401a1a1278fb1275fa3c5c80ef29"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1678,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1678,
                "newInLastHour": 3,
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
                "1[.]158[.]6[.]230",
                "1[.]173[.]108[.]110",
                "1[.]183[.]41[.]171",
                "1[.]190[.]98[.]234",
                "1[.]192[.]178[.]255"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 4671,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 4671,
                "newInLastHour": 4671,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]0[.]164[.]165",
                "1[.]14[.]107[.]204",
                "1[.]15[.]221[.]192",
                "1[.]162[.]247[.]182",
                "1[.]192[.]61[.]19"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 21893,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 21893,
                "newInLastHour": 21893,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://110[.]38[.]208[.]89:56690/i",
                "hxxp://110[.]38[.]208[.]89:56690/bin[.]sh",
                "hxxp://123[.]132[.]156[.]131:50352/bin[.]sh",
                "hxxp://105[.]184[.]158[.]249:59541/i",
                "hxxp://119[.]185[.]170[.]78:49993/bin[.]sh"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 3888,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 3888,
                "newInLastHour": 3613,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"217[.]217[.]97[.]75:4445\"",
                " \"hxxp://utiliq[.]xyz:7673\"",
                " \"ryovgcz[.]1xbeet[.]site\"",
                " \"1xbeet[.]site\"",
                " \"sfdvbdy[.]1xbeet[.]app\""
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
            "iocCount": 10100,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 10100,
                "newInLastHour": 30,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "59658d5b08a31b31941b598ef4287fecf26a5e54",
                "6cd9f5c15b172c39fd51e13d36d39c73a4d1395a",
                "ec452c3c30499a1a6983877a2d881c1a8f2955ea",
                "e553bfd006337f4cb3a3acf5a681980d184b79e6",
                "c19f8a859e5635a3601eb27c9ac59c88dcf91be1"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 53364,
            "activeSources": 8,
            "criticalAlerts": 32501,
            "activeCampaigns": 230
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 22437,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "C2",
                "count": 10064,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 3279,
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
                "count": 21878,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://42[.]225[.]207[.]24:52041/bin[.]sh",
                    "hxxp://123[.]13[.]52[.]232:33331/i",
                    "hxxps://sfdvbdy[.]1xbeet[.]app/12f40b9f-2830-4f41-9fe9-9213d6fa9ad1"
                ]
            },
            {
                "name": "CINS Threat List",
                "count": 15000,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]13[.]22[.]104",
                    "1[.]159[.]81[.]89",
                    "1[.]173[.]108[.]110"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1679,
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
                "count": 1418,
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
                "name": " \"win.cobalt_strike\"",
                "count": 1398,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"101[.]34[.]235[.]198:443\"",
                    " \"101[.]34[.]235[.]198:80\"",
                    " \"49[.]234[.]14[.]253:443\""
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
                "count": 689,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "83ff65960d2df4b29e78d6fd0342dcd5f053eb13",
                    "ac563907d31a21443760cee92a98b50bba6152aa",
                    "27e3cb5b0043884c7ebc0691e2e73ef3b95339ac"
                ]
            },
            {
                "name": "Vidar",
                "count": 622,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "ec452c3c30499a1a6983877a2d881c1a8f2955ea",
                    "e553bfd006337f4cb3a3acf5a681980d184b79e6",
                    "d4611858ce65e847598f70af1a9b98ee96cc20f8"
                ]
            },
            {
                "name": "LummaStealer",
                "count": 555,
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
                "name": "OffLoader",
                "count": 436,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "6cd9f5c15b172c39fd51e13d36d39c73a4d1395a",
                    "c19f8a859e5635a3601eb27c9ac59c88dcf91be1",
                    "51addb0b10ea11992e4a7dcc168fe8c6eaddf0be"
                ]
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious URLs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": "malware_download",
        "totalAttacksThisHour": 45526,
        "lastCalculated": "2026-07-07 03:14 IST"
    }
};
