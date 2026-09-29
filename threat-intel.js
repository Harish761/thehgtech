// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-09-29T23:32:14.289428+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-09-29T23:32:13.964272+05:30",
    "lastUpdatedFormatted": "Sep 29, 2026 at 11:32 PM IST",
    "comparisonPeriod": "Sep 28 \u2013 Sep 29, 2026",
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
                "hxxps://douyin[.]evergreenfin[.]ltd/",
                "hxxps://www[.]asodfihjgdioshi[.]xyz/",
                "hxxp://genie[.]evergreenfin[.]ltd/",
                "hxxp://geren[.]evergreenfin[.]ltd/",
                "hxxps://huiyuanlogin[.]evergreenfin[.]ltd/"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 1166,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 1166,
                "newInLastHour": 146,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"7700226f11681b7e2baf5ade8140b911b12f650376080baa1ddbddfc242ab750",
                " \"63cf3c5fc8658791f5192fda8279024cf0d10168e1eaed5ec5358454528f982c",
                " \"8cfeacb9bd7cea6377230c7d38e6a4934423db0b166ea06f7823d89d9c9baa39",
                " \"ce3bd70d21e643e3312f0fa7e2e8a33cf88ba93ce84fffdbf939aef631c72266",
                " \"2f106282ae302c21a34af10eb270c2408f8e7b21fc0b83f32d1a442a39bd598b"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1693,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1693,
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
                "1[.]15[.]14[.]29",
                "1[.]191[.]146[.]241",
                "1[.]192[.]129[.]106",
                "1[.]193[.]63[.]101",
                "1[.]193[.]63[.]174"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 5416,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 5416,
                "newInLastHour": 5416,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]0[.]164[.]165",
                "1[.]117[.]72[.]220",
                "1[.]162[.]248[.]139",
                "1[.]2[.]187[.]97",
                "1[.]209[.]110[.]147"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 15230,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 15230,
                "newInLastHour": 15230,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://218[.]16[.]164[.]56:47517/bin[.]sh",
                "hxxp://112[.]198[.]239[.]194:40684/i",
                "hxxp://182[.]117[.]77[.]44:51966/bin[.]sh",
                "hxxp://175[.]160[.]101[.]22:58191/i",
                "hxxp://120[.]84[.]213[.]128:47414/i"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 7833,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 7833,
                "newInLastHour": 6386,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"hxxps://cdn[.]jsdelivr[.]net/gh/52-7aa5/40ab-5bb6-d1f9b0-9634a4-e30/af07382d-dd95-4f5a-8848-6c006579068c\"",
                " \"hxxp://equigfy[.]biz:9932/articles\"",
                " \"hxxp://glotech[.]art:9932/attachments\"",
                " \"86x499ro[.]finowfurt[.]com\"",
                " \"yyhld3hh[.]pakketepaksempak[.]com\""
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
            "iocCount": 10840,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 10840,
                "newInLastHour": 3,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "5b60c9c03e269395e5900a70dc9121c44164a271",
                "5cf0d65dab7decdfdf1ae7d08e3d1a3696eee2b3",
                "317bcdde2a44975381c24cb95bfcc5c3132e64c5",
                "a2e76af14703e85cc8a27f108e0ee93ce2d9afb4",
                "c234496c7b0abcd873bb6bb5a54288b6d340b6ff"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 53311,
            "activeSources": 8,
            "criticalAlerts": 27219,
            "activeCampaigns": 260
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 16401,
                "trend": "stable",
                "percentage": 1
            },
            {
                "category": "C2",
                "count": 10818,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 4633,
                "trend": "stable",
                "percentage": 3
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
            },
            {
                "name": "Government",
                "percentage": 0
            }
        ],
        "campaigns": [
            {
                "name": "malware_download",
                "count": 15066,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://116[.]140[.]72[.]57:42295/i",
                    "hxxp://120[.]84[.]214[.]68:34472/bin[.]sh",
                    "hxxp://113[.]203[.]196[.]89:53938/i"
                ]
            },
            {
                "name": "CINS Threat List",
                "count": 15000,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]117[.]171[.]170",
                    "1[.]15[.]14[.]29",
                    "1[.]193[.]63[.]101"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1692,
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
                "count": 1456,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "205d49b6c7313e16e931e1b5873cc20be0dee85b",
                    "94c4ec66b6f57c29ac935890d7796decea67af37",
                    "81c9eddccea61f8fa9788208189d79b82e3443a4"
                ]
            },
            {
                "name": " \"win.cobalt_strike\"",
                "count": 1431,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"47[.]114[.]83[.]19:8084\"",
                    " \"153[.]80[.]242[.]105:9999\"",
                    " \"95[.]217[.]135[.]208:8443\""
                ]
            },
            {
                "name": " \"win.asyncrat\"",
                "count": 1379,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"36[.]255[.]97[.]47:8808\"",
                    " \"31[.]56[.]209[.]140:7707\"",
                    " \"88[.]251[.]66[.]233:2000\""
                ]
            },
            {
                "name": " \"unknown_loader\"",
                "count": 1203,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"4dd45bb7168a5588749f95a8e9c2e2d4ea658f23bb19233506ce52a552ae148a\"",
                    " \"companyharbor[.]xyz\"",
                    " \"88bb83327a85928ad0f501572d47c9c640ee915b5a23028568a97267ecbe265f\""
                ]
            },
            {
                "name": " \"js.iclickfix\"",
                "count": 1188,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"allowcheckd3[.]cc\"",
                    " \"cove-koi-hk753[.]xyz\"",
                    " \"ochre-quill-buindbaio[.]icu\""
                ]
            },
            {
                "name": "Vidar",
                "count": 806,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "86b5a5612e53988e28ed6604e8e9ff5476a46d0e",
                    "605e0b79c4a685b7da9524d6b71ec36bbd651b07",
                    "5f5d3a3225006f45ff8194536ef8e09cb194884d"
                ]
            },
            {
                "name": " \"Mirai",
                "count": 738,
                "types": [
                    "hash"
                ],
                "sampleIndicators": [
                    " \"1c7df6430643164ca8a0b2f36ff5cc2b27ee88ef4132b0f62160fe523c91c383",
                    " \"20d5fcc27775dec1ebd09aaa326ecec3cbe415e77527efe4f6367961effaea79",
                    " \"6c324799a2849a59c27c9ad4509a361103d5a7ee526cde5c2cb2aea58d1a5064"
                ]
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious URLs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": "SSH Attacks",
        "totalAttacksThisHour": 42487,
        "lastCalculated": "2026-09-29 23:32 IST"
    }
};
