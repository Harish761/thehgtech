// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-04-30T09:28:01.830327+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-04-30T09:28:01.459831+05:30",
    "lastUpdatedFormatted": "Apr 30, 2026 at 09:28 AM IST",
    "comparisonPeriod": "Apr 29 \u2013 Apr 30, 2026",
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
                "hxxp://verificarmicuentaa-microsoft2o26[.]zya[.]me/?i=1",
                "hxxps://k2gd4y06do-signin-primemembership[.]thetirecoozie[.]com/mobile/?auth_max_open=0&ref=wbnj3jJxDZRLTnenCk90RDG1z5nC0sRDTRwYXjGnZfZ9B8FACw1NpBDS3KihRBV4IUYcrL7UU4Z1Pmb8prfTzfoZntbWRYxGqxcB",
                "hxxps://search[.]app/FBky6",
                "hxxp://shekharscript[.]github[.]io/Netflix-clone",
                "hxxps://supportmediaportal[.]com/mail/?_r=298GNI"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 979,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 979,
                "newInLastHour": 117,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"edaa0a1753aa63333b05dcf5915b03111af53e4e10895c663f0bac9026c6cd95",
                " \"c100177c2929e8a6f91846da6836adff1755811a7d13fc64c758209a1ca4dd0f",
                " \"8bd4bbf845b88e487d9f4ca8df0333a8ab308fc34a6f4127cbcba0fe788a344b",
                " \"4396dcd67c308baa59c16cfbf8590459b09fff5f4efad250c9c966eba7632090",
                " \"63990e20a22b8ed8faf451a9e1f6226231e6a31833bf7eb87003253521cfb126"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1586,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1586,
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
                "1[.]10[.]133[.]201",
                "1[.]169[.]9[.]130",
                "1[.]180[.]183[.]158",
                "1[.]188[.]101[.]0",
                "1[.]197[.]102[.]62"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 3372,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 3372,
                "newInLastHour": 3372,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]0[.]164[.]165",
                "1[.]145[.]98[.]45",
                "1[.]214[.]42[.]172",
                "1[.]222[.]42[.]237",
                "1[.]238[.]106[.]229"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 26403,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 26403,
                "newInLastHour": 26403,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://61[.]52[.]107[.]218:45046/bin[.]sh",
                "hxxp://123[.]12[.]236[.]23:59227/bin[.]sh",
                "hxxps://codemeshsite[.]cryptosyncflow[.]bet/software-distribution-dxnp2c7/meta-verify[.]index",
                "hxxp://38[.]52[.]142[.]194:45099/i",
                "hxxp://123[.]5[.]113[.]237:33431/i"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 989,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 989,
                "newInLastHour": 955,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"signhostunit[.]cryptosyncflow[.]bet\"",
                " \"117[.]50[.]71[.]2:9999\"",
                " \"key6taskhub[.]cryptosyncflow[.]bet\"",
                " \"94[.]156[.]250[.]190:7781\"",
                " \"hxxp://94[.]250[.]250[.]235/generatormobile/supportmobile/phpframe/php/localServerdataMath/antiprodhtoppool/ruleServerWar/prod/phpcutrule/record/WarpluginCam/plugincore/limit/videoLinesecurebigloadsql[.]php\""
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
            "iocCount": 9577,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 9577,
                "newInLastHour": 13,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "0b28f0c230c982807f2446a5adb26323534a8444",
                "273c74ce7170a85b37f91741ce7faa534639e29a",
                "e7aa9efcff318eb419f2e54bd93aa2e061e70d1c",
                "baec0b516b841d0291da5463777d12e63c0851a9",
                "6b3dc8ea0ad9cf783a6542661b85560c17abe94d"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 55343,
            "activeSources": 8,
            "criticalAlerts": 37438,
            "activeCampaigns": 189
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 27831,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "C2",
                "count": 9607,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Phishing",
                "count": 339,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 227,
                "trend": "stable",
                "percentage": 0
            }
        ],
        "targetedSectors": [
            {
                "name": "General",
                "percentage": 84
            },
            {
                "name": "Tech",
                "percentage": 15
            },
            {
                "name": "Finance",
                "percentage": 0
            },
            {
                "name": "Government",
                "percentage": 0
            }
        ],
        "campaigns": [
            {
                "name": "malware_download",
                "count": 26891,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxps://riskmeshnode[.]dra7vexa[.]bet/cdk-msdn-3457325-null/load-file0dsdf567[.]chk",
                    "hxxp://60[.]23[.]233[.]12:57635/i",
                    "hxxp://124[.]235[.]248[.]76:47464/i"
                ]
            },
            {
                "name": "CINS Threat List",
                "count": 15000,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]10[.]133[.]201",
                    "1[.]120[.]3[.]95",
                    "1[.]169[.]9[.]130"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1615,
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
                "count": 1408,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "eb1d7370d422c478efcaad0a0c7c2a7baacc2455",
                    "5b20fb9d9a21e7a5d4be3b3a83063e9b3172d35d",
                    "021068795797aa6c83cb175fed0fc5da9247e7ca"
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
                "count": 675,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "bb085af0610557f877683616d87b7345b59c4f54",
                    "f78be258c92a94888f2e283ddb807dcc22689c86",
                    "e0127cb029c9d3778d15d3948b41ecdc8b44fb03"
                ]
            },
            {
                "name": "LummaStealer",
                "count": 554,
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
                "name": "Vidar",
                "count": 512,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "e7aa9efcff318eb419f2e54bd93aa2e061e70d1c",
                    "3ccd1090364addc6f2cd6ee15cbb9b57cdc11777",
                    "513656d150a201936049c3d3ff4f1c6efb7a8cc7"
                ]
            },
            {
                "name": " \"js.clearfake\"",
                "count": 436,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"riskmeshnode[.]dra7vexa[.]bet\"",
                    " \"odds8logicnet[.]dra7vexa[.]bet\"",
                    " \"vtc3eae[.]verda7lya[.]garden\""
                ]
            },
            {
                "name": "OffLoader",
                "count": 402,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "b977e869e493f70b3e7914a1eaa6abe2cc1ea04a",
                    "e7af95eaaa4c87398f4c4c80a66972f342bb3328",
                    "037598803e2603499edbf7275e43f7dd82abd8f3"
                ]
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious URLs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": " \"Mirai",
        "totalAttacksThisHour": 46167,
        "lastCalculated": "2026-04-30 09:28 IST"
    }
};
