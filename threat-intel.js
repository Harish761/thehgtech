// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-05-21T21:18:40.609584+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-05-21T21:18:40.252713+05:30",
    "lastUpdatedFormatted": "May 21, 2026 at 09:18 PM IST",
    "comparisonPeriod": "May 20 \u2013 May 21, 2026",
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
                "hxxps://xfvhg-pmsm-npe5[.]p-mv4ac1tf[.]workers[.]dev/lp/oDB2ZXrYaHc",
                "hxxps://ipfs[.]io/ipfs/bafybeigkdzwrfaszzbdgf6urvbd2bcm2f53dk5plz3yunv57uvdipmc7kq",
                "hxxps://www[.]robiox[.]com[.]ua/users/7014957238/profile",
                "hxxp://www[.]cctv-whatsapp[.]com[.]cn/wp-admin/customize/class-wp-customize-code-editor-control[.]php",
                "hxxp://m9bdlf-ghfi0s-8u3-mx38j-jj2gx[.]netlify[.]app/"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 3500,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 3500,
                "newInLastHour": 1019,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"b97ed0ba07cc397201b120944ef0e5891fe63fc92d6d199ad5e682e2639faa16",
                " \"b928d2306f147b40e546c710b5a39d7670354f7bbc3d99191d0c0c63d6bafc5d",
                " \"b910d575fd7fa7024294de19cef2563366776131dbe4b63c9cf4e59a62056864",
                " \"b8eae0991f6147c8b5755d19a6093627363fd459b8bbec352a14ef7ab463ea9a",
                " \"b8e1470519bde2914b7a45bb0d31d12f1371c26900be6ce6bdc3525c22c8bc16"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1630,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1630,
                "newInLastHour": 1,
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
                "1[.]15[.]14[.]29",
                "1[.]161[.]183[.]127",
                "1[.]162[.]136[.]38",
                "1[.]162[.]164[.]41",
                "1[.]180[.]148[.]140"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 6026,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 6026,
                "newInLastHour": 6026,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]0[.]164[.]165",
                "1[.]117[.]58[.]48",
                "1[.]162[.]225[.]185",
                "1[.]194[.]210[.]131",
                "1[.]194[.]233[.]49"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 24083,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 24083,
                "newInLastHour": 24083,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxps://tree-observatory[.]christmas/aa5f89df-2b20-4b2e-aa64-e2b460c6fe6d/zone[.]id",
                "hxxp://123[.]11[.]72[.]164:41917/i",
                "hxxp://115[.]55[.]130[.]177:38753/i",
                "hxxp://42[.]226[.]64[.]231:44108/bin[.]sh",
                "hxxps://104[.]248[.]119[.]34/m"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 3089,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 3089,
                "newInLastHour": 3081,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"tree-observatory[.]christmas\"",
                " \"sns-clauder-cdn[.]beer\"",
                " \"anlytic-js-cloud[.]beer\"",
                " \"oshaduck123[.]duckdns[.]org\"",
                " \"cuit[.]ydns[.]eu\""
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
            "iocCount": 9736,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 9736,
                "newInLastHour": 3,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "167ddfd671ef30c31528515389cfdd11d9251558",
                "3cf2e022211760871544ad891d3b3b698c5f8792",
                "0d5b0889c583e4da90b365b1d73959a9ea745a86",
                "53c0f0608e2d03a10eab7e3a98d1de6c4ff534e6",
                "eb6901b9b0d7f6f53fcc09172d5182305ca358f9"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 56224,
            "activeSources": 8,
            "criticalAlerts": 36276,
            "activeCampaigns": 240
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 26560,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "C2",
                "count": 9716,
                "trend": "stable",
                "percentage": 1
            },
            {
                "category": "Botnet",
                "count": 2725,
                "trend": "stable",
                "percentage": -1
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
                "percentage": 94
            },
            {
                "name": "Tech",
                "percentage": 5
            },
            {
                "name": "Finance",
                "percentage": 0
            }
        ],
        "campaigns": [
            {
                "name": "malware_download",
                "count": 23999,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://61[.]54[.]236[.]125:34217/i",
                    "hxxps://busbytesadd[.]christmas/6464871c-26f3-41a3-8974-ebe3c9c23ad6/zone[.]id",
                    "hxxp://27[.]215[.]182[.]166:53016/i"
                ]
            },
            {
                "name": "CINS Threat List",
                "count": 15000,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]15[.]14[.]29",
                    "1[.]156[.]129[.]70",
                    "1[.]162[.]164[.]41"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1629,
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
                "count": 1414,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "d42a4a7e721a0503d81e3f47c72a0f93c53e4f2c",
                    "b08643668d383e55dd2698e1bcc34571c8dfcc6a",
                    "fa2598910f8313798f8ee2fbfe84668b718442b6"
                ]
            },
            {
                "name": " \"win.cobalt_strike\"",
                "count": 1384,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"156[.]225[.]22[.]84:80\"",
                    " \"121[.]199[.]27[.]49:80\"",
                    " \"8[.]134[.]207[.]30:7777\""
                ]
            },
            {
                "name": " \"n/a",
                "count": 849,
                "types": [
                    "hash"
                ],
                "sampleIndicators": [
                    " \"db9fb488a99fb9d029d9751bc4edb204c51bc91e3066ec3d23c03144efa4f376",
                    " \"1667fc6f28dc820c19c37fb2afe7258be6ff4628249c26ce18b09fd4af5840cc",
                    " \"a30e49e1f71c70c4bc72f62e80be05b837c4a01a8fcc12e0c5a4c2cf52e270fa"
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
                "count": 681,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "493f6dbb48806992e524df2a3a0fa0348cef243b",
                    "8a9c74049483847464da1ca3cf6f1f44e17a5f0f",
                    "c47bcbcbe0b1c474542c7fdc233ec68ffb4dcf14"
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
                "count": 536,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "cbcbab57af719e97174407cc1e97c57c3478d481",
                    "971333b66a8266c1bf37aba686b9b89fcd9a9e44",
                    "d401a5c721a25dd94d6eb02284f5e7b918c2b5df"
                ]
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious URLs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": " \"n/a",
        "totalAttacksThisHour": 49518,
        "lastCalculated": "2026-05-21 21:18 IST"
    }
};
