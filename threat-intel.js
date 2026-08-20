// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-08-20T22:23:49.096690+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-08-20T22:23:48.716042+05:30",
    "lastUpdatedFormatted": "Aug 20, 2026 at 10:23 PM IST",
    "comparisonPeriod": "Aug 19 \u2013 Aug 20, 2026",
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
                "hxxps://www[.]agingenieria[.]com[.]pe/wp-content/logs/newsletter/www[.]made-in-china[.]com/index[.]html",
                "hxxps://urlz[.]li/b12f2603",
                "hxxps://dccrsorgia[.]github[.]io/gov[.]in[.]crs[.]verifyCertificate[.]id-TMJK8JJy4RuII5JYuqLhWA8HRA/",
                "hxxps://dccrsorgia[.]github[.]io/gov[.]in[.]crs[.]verifyCertificate[.]id-TMJK8JJy4RuII5JYuqLhWA8HRA",
                "hxxps://aidenpiearce[.]github[.]io/Javascript-amazon"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 1276,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 1276,
                "newInLastHour": 74,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"1aac5653d64b87ecafe82ad8e05221f7e983d24b59413aa22143340d73848628",
                " \"c30b44854e443bed32d07968e0639dae36729d77263c9f38d59147aee0422469",
                " \"015593f29c97aace5a8f838a69d90d217509a9d4c3f4985afe395fd75c16b8db",
                " \"c5e82fca91a7b8140781eecbe9f709e96eed638deea3acd5f0ca35ef79a221c0",
                " \"399ec5b106727e0e83eb280423a2ecb252acebcf2bee4bbb2a5658570c965e78"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1696,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1696,
                "newInLastHour": 12,
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
                "1[.]119[.]158[.]77",
                "1[.]119[.]194[.]226",
                "1[.]140[.]210[.]242",
                "1[.]159[.]70[.]231",
                "1[.]165[.]27[.]71"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 5029,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 5029,
                "newInLastHour": 5029,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]0[.]164[.]165",
                "1[.]10[.]222[.]205",
                "1[.]2[.]189[.]132",
                "1[.]20[.]150[.]200",
                "1[.]209[.]110[.]147"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 16873,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 16873,
                "newInLastHour": 16873,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://222[.]137[.]105[.]216:51325/i",
                "hxxps://gaiadeqi[.]com/clc[.]zip",
                "hxxps://kits[.]frog[.]tw/Images/stego_jxdqj7fw9j[.]png",
                "hxxp://178[.]16[.]53[.]176/DVB/eecrypted[.]ps1",
                "hxxp://178[.]16[.]53[.]176/DVB/ugcrypted[.]ps1"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 6802,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 6802,
                "newInLastHour": 6564,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"213[.]152[.]186[.]188:32605\"",
                " \"213[.]152[.]186[.]188:32635\"",
                " \"192[.]109[.]139[.]69:7443\"",
                " \"192[.]109[.]139[.]69:7080\"",
                " \"104[.]168[.]70[.]163:7080\""
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
            "iocCount": 10496,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 10496,
                "newInLastHour": 96,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "7f73eeb03e7df441484d4610c5a0c3a02f166989",
                "3992dd5edcdf2ce5d143f933e2657640e00a58d4",
                "e0ffdffb5d9bf9216ea5e70d4fe2bae919f5a6ca",
                "e1fadee899789d8e802b8b88dcf67e4cae82ccf1",
                "0ad6076cb27bcdd5dd26fe56c022f4ab61ea00be"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 53711,
            "activeSources": 8,
            "criticalAlerts": 28583,
            "activeCampaigns": 245
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 18194,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "C2",
                "count": 10389,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 4557,
                "trend": "down",
                "percentage": -11
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
                "count": 16782,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://61[.]53[.]84[.]173:60970/bin[.]sh",
                    "hxxp://123[.]14[.]178[.]128:40955/i",
                    "hxxp://123[.]14[.]178[.]128:40955/bin[.]sh"
                ]
            },
            {
                "name": "CINS Threat List",
                "count": 15000,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]140[.]210[.]242",
                    "1[.]159[.]70[.]231",
                    "1[.]165[.]27[.]71"
                ]
            },
            {
                "name": " \"js.iclickfix\"",
                "count": 2453,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"basecodereset[.]com\"",
                    " \"approvalrequest-api[.]com\"",
                    " \"fgx9[.]com\""
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1686,
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
                "count": 1434,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "7f44d36f1f6bd375ba4e4a7866328a76047ce498",
                    "f351f7dbe9c583f75758b39cd307f5359d110c73",
                    "7bf78d44f61a05e919479a1cf3e0ce158a50a0c6"
                ]
            },
            {
                "name": " \"win.cobalt_strike\"",
                "count": 1369,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"185[.]92[.]190[.]174:8896\"",
                    " \"103[.]185[.]249[.]199:5003\"",
                    " \"a16ee9fb562ceae9db13a9e6e683d2c6\""
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
                "name": "Vidar",
                "count": 703,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "e1fadee899789d8e802b8b88dcf67e4cae82ccf1",
                    "732c7efa7d624c30b074e78df6595f54fde9188d",
                    "9ba597b7a850fe598927a226f6ab2efd3050ff95"
                ]
            },
            {
                "name": "QuasarRAT",
                "count": 695,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "9b4c3ff8dc5891693f443320e3c1167c7cebe2b7",
                    "0f1b05653c3b3ab3bb4ecd772dd024668cbe8df1",
                    "b364395fee8c2e4c9eaf9a2531f6f7ac7bf8e4ae"
                ]
            },
            {
                "name": " \"Mirai",
                "count": 644,
                "types": [
                    "hash"
                ],
                "sampleIndicators": [
                    " \"f88d65205dbfa7cc6a2570d8dd717159c4c541ad5375d387a0536329f1f9a855",
                    " \"6e55fc8ea2db42fdd70c8456394b9fd22875d361ff0f40fb6bb1e926e7b8182d",
                    " \"f2d7f891a8f0e91ee37e40b7e37e0d47971f8b4967625d0b4f727d67483927db"
                ]
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious URLs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": "malware_download",
        "totalAttacksThisHour": 43953,
        "lastCalculated": "2026-08-20 22:23 IST"
    }
};
