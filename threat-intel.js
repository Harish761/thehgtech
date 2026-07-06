// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-07-06T23:48:55.297218+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-07-06T23:48:54.935015+05:30",
    "lastUpdatedFormatted": "Jul 06, 2026 at 11:48 PM IST",
    "comparisonPeriod": "Jul 05 \u2013 Jul 06, 2026",
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
            "iocCount": 512,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 512,
                "newInLastHour": 103,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"db023a90f2815b9ae7200d024ed8c75b3fa219104b26e2a30da0767721773615",
                " \"bb7554b559d6d3d336aff85cb331b40513b9e9e5235b24401e15ec0810aa61d3",
                " \"3d681ca349e4770e359b067428f742d5d34941d9d59bb9cc1b373e5c2fa37a1d",
                " \"8614fc066d4c8dfe26b101b53f48adaf94d28ca86aa958e79300b34abb4d504f",
                " \"4da1ad20dd78cf747ac77045d93a347bda68b3f577c31149b10819c0a2cf96eb"
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
                "1[.]159[.]81[.]89",
                "1[.]173[.]108[.]110",
                "1[.]190[.]98[.]234",
                "1[.]192[.]178[.]255",
                "1[.]193[.]63[.]144"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 4670,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 4670,
                "newInLastHour": 4670,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]0[.]164[.]165",
                "1[.]14[.]107[.]204",
                "1[.]162[.]247[.]182",
                "1[.]192[.]61[.]19",
                "1[.]214[.]214[.]114"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 21847,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 21847,
                "newInLastHour": 21847,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxps://x41eexzh[.]1xcart[.]net/?ublib=8ef4e24b-01a5-4191-bb9b-703f9d7471d4",
                "hxxp://103[.]63[.]231[.]168:33426/i",
                "hxxps://1xkf6w16[.]bet1forward[.]com/?ublib=7e6d377a-9b6c-408d-8609-c2097c8ca868",
                "hxxps://lfk25ohk[.]win1bahis[.]com/?ublib=b06ed3b7-8014-41e8-95cd-134e307f107e",
                "hxxp://42[.]56[.]201[.]203:39764/i"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 3877,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 3877,
                "newInLastHour": 3668,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"gxscmbb[.]1bet1yek[.]bet\"",
                " \"tirak90[.]ir\"",
                " \"x41eexzh[.]1xcart[.]net\"",
                " \"9hxo1zmj[.]1xcart[.]net\"",
                " \"1m4wielp[.]1xbtt[.]com\""
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
            "iocCount": 10079,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 10079,
                "newInLastHour": 9,
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
            "totalIndicators": 53503,
            "activeSources": 8,
            "criticalAlerts": 32358,
            "activeCampaigns": 246
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 22273,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "C2",
                "count": 10085,
                "trend": "stable",
                "percentage": 1
            },
            {
                "category": "Botnet",
                "count": 3271,
                "trend": "stable",
                "percentage": 2
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
                "count": 21774,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://91[.]92[.]242[.]236/files-129312398/files/file_94df6f2cd22533ce[.]exe",
                    "hxxp://60[.]23[.]239[.]85:39741/i",
                    "hxxp://125[.]46[.]199[.]204:41231/i"
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
                    "1[.]188[.]29[.]217"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1682,
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
                "count": 1421,
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
                "count": 1400,
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
                "count": 690,
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
                "count": 625,
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
                "name": "OffLoader",
                "count": 438,
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
        "fastestRisingThreat": "SSH Attacks",
        "totalAttacksThisHour": 45602,
        "lastCalculated": "2026-07-06 23:48 IST"
    }
};
