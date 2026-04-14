// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-04-14T15:15:04.777420+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-04-14T15:15:04.470625+05:30",
    "lastUpdatedFormatted": "Apr 14, 2026 at 03:15 PM IST",
    "comparisonPeriod": "Apr 13 \u2013 Apr 14, 2026",
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
                "hxxp://deepflix-ui[.]vercel[.]app/",
                "hxxp://statement[.]amazingholidaycoupons[.]com/s/63BZGFSVBWSFCDX7Y9/584dd8/90eab167-7429-489f-99f6-ce86e8d0d81a",
                "hxxp://uditkumar-99[.]github[.]io/amazon-clone",
                "hxxp://ak20051908[.]github[.]io/netflix_home_page-",
                "hxxp://webmail[.]alertas-de-viaje[.]mx/s/63BZGFSVBWSFCDX7Y9/584dd8/90eab167-7429-489f-99f6-ce86e8d0d81a"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 750,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 750,
                "newInLastHour": 86,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"18ac4062d773325076eaea0844bebb295b18100bbb669c351b02ed79354da157",
                " \"6bfb75b0f69099db4778abbdad7bb65f3661d2d23cba6552cced9002f1440ae7",
                " \"0150605913e5cc05dbe79ed8f488d58140ac7c2853ca7853a7a78e9885628b9a",
                " \"0eaa4f2b818c69f113d4b98d4840c827c76a407fed4653c5f9b8114c7d815261",
                " \"31abeb72e1344d506c96df6802126f48e4e2e0f95056c6c51929e38a7d73eca1"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1577,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1577,
                "newInLastHour": 38,
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
                "1[.]175[.]134[.]212",
                "1[.]180[.]153[.]254",
                "1[.]182[.]190[.]117",
                "1[.]183[.]0[.]10"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 824,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 824,
                "newInLastHour": 824,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]190[.]98[.]62",
                "1[.]53[.]110[.]158",
                "1[.]64[.]12[.]160",
                "101[.]126[.]107[.]237",
                "101[.]126[.]154[.]252"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 24720,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 24720,
                "newInLastHour": 24720,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://182[.]119[.]59[.]148:36564/bin[.]sh",
                "hxxp://130[.]12[.]180[.]119:8080/21[.]exe",
                "hxxps://stone-flow[.]pra5noxel[.]in[.]net/05fe317c-0981-4de2-bc8a-930d369db441/ck-3d80df5d12cdfe6450a782fc87bf66b444[.]google",
                "hxxps://sandsto[.]pra5noxel[.]in[.]net/05fe317c-0981-4de2-bc8a-930d369db441/ck-3d80df5d12cdfe6450a782fc87bf66b444[.]google",
                "hxxp://91[.]92[.]243[.]242/h"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 963,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 963,
                "newInLastHour": 956,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"81[.]163[.]111[.]127:7707\"",
                " \"81[.]163[.]111[.]127:8808\"",
                " \"81[.]163[.]111[.]127:9001\"",
                " \"91[.]242[.]179[.]62:6606\"",
                " \"91[.]242[.]179[.]62:7707\""
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
            "iocCount": 9570,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 9570,
                "newInLastHour": 53,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "08715a9d4e9ce7466225ad56845853f652053ab9",
                "62db81002bfaa1cbb0142baf9bac6651fb627aee",
                "8ef1132c5f69f71c7a9cd95eae9da41763238767",
                "9f1acf378f9d9cbefe0cfd1968c5193a6a804237",
                "e2f5ea85358623b750f6d5bab64b2ad3ae085123"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 52583,
            "activeSources": 8,
            "criticalAlerts": 34780,
            "activeCampaigns": 206
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 25272,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "C2",
                "count": 9508,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 364,
                "trend": "stable",
                "percentage": 9
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
                "percentage": 81
            },
            {
                "name": "Tech",
                "percentage": 18
            },
            {
                "name": "Finance",
                "percentage": 0
            }
        ],
        "campaigns": [
            {
                "name": "malware_download",
                "count": 24561,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxps://vault4-tx[.]web-traffic-trace[.]in[.]net/05fe317c-0981-4de2-bc8a-930d369db441/ck-3d80df5d12cdfe6450a782fc87bf66b444[.]google",
                    "hxxps://api3-hop[.]web-traffic-trace[.]in[.]net/05fe317c-0981-4de2-bc8a-930d369db441/ck-3d80df5d12cdfe6450a782fc87bf66b444[.]google",
                    "hxxp://147[.]45[.]42[.]251/mipsel"
                ]
            },
            {
                "name": "CINS Threat List",
                "count": 15000,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]123[.]231[.]55",
                    "1[.]175[.]134[.]212",
                    "1[.]180[.]153[.]254"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1550,
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
                "count": 1405,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "5b20fb9d9a21e7a5d4be3b3a83063e9b3172d35d",
                    "021068795797aa6c83cb175fed0fc5da9247e7ca",
                    "6e76ede9fb607e6701bf05cdf72378a0bd082d0f"
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
                    "f91937b78dc36f7f7b9ff70f0f53afeefe7ad31d",
                    "0a5d3ca898ee51340f483aa8f40e06c43813376e",
                    "15027af927e6be2c77fa1083e2ba69ed7ef77ec1"
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
                "name": "Vidar",
                "count": 475,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "14728567db9ecd6e5f46c9e884f99d29c70788e2",
                    "f8f2497277c03b96a3b4a8ef77e0a0792478fae5",
                    "e43ef806fe5a6767cd9fd7391d11e7db88a22efe"
                ]
            },
            {
                "name": " \"js.clearfake\"",
                "count": 471,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"vault4-tx[.]web-traffic-trace[.]in[.]net\"",
                    " \"api3-hop[.]web-traffic-trace[.]in[.]net\"",
                    " \"node2-map[.]web-traffic-trace[.]in[.]net\""
                ]
            },
            {
                "name": "OffLoader",
                "count": 392,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "8e8d2629ca6f5b6750c69e687fa4c08e5a53616d",
                    "3c04424fca43ca40617cd9176b41d17db89903c8",
                    "c02490981880a8827ecc22ee918275d443173cf9"
                ]
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious URLs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": "malware_download",
        "totalAttacksThisHour": 41982,
        "lastCalculated": "2026-04-14 15:15 IST"
    }
};
