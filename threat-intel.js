// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-05-05T23:15:39.690015+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-05-05T23:15:39.406447+05:30",
    "lastUpdatedFormatted": "May 05, 2026 at 11:15 PM IST",
    "comparisonPeriod": "May 04 \u2013 May 05, 2026",
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
                "hxxps://rajshree051205-cloud[.]github[.]io/Amazon-Clone",
                "hxxp://v17h[.]xyz/",
                "hxxp://member399[.]meta-agency-center[.]com/",
                "hxxps://login[.]bussines-partner-agency[.]com/",
                "hxxps://join[.]agency-collab-partner[.]com/"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 553,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 553,
                "newInLastHour": 150,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"21cb9b5c028d8453ec25c2a23249eae498ee45b134dbebc19dc6d3d85d853147",
                " \"79057c481d4f10025695833aa13573feb1a414924dc94a56052eb6efda12bb26",
                " \"678c0b16dea9c86be77d302d639e36c732fcdd10351a969647303753cf1e2482",
                " \"43b04ab73aa17b653b37ee09e7b2e6d3ef9019e1f4e4a5f493fa30402e755860",
                " \"b8c32969b8688cc12610e10509e43969a686e625e64d9f6a1d1db1f06ecff13b"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1616,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1616,
                "newInLastHour": 4,
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
                "1[.]177[.]63[.]24",
                "1[.]178[.]219[.]108",
                "1[.]180[.]183[.]158",
                "1[.]180[.]252[.]30",
                "1[.]192[.]179[.]247"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 4648,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 4648,
                "newInLastHour": 4648,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]0[.]164[.]165",
                "1[.]116[.]61[.]217",
                "1[.]13[.]22[.]203",
                "1[.]162[.]247[.]201",
                "1[.]214[.]117[.]218"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 28397,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 28397,
                "newInLastHour": 28397,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxps://ftpsrv[.]torex6lin[.]surf/sh5hne-c8b9b4-sskjy-znq2k2of-ybay3z/usr294-verif[.]confirm",
                "hxxp://27[.]37[.]24[.]218:60145/i",
                "hxxp://209[.]99[.]190[.]249:8080/Adobe%20PDF%20Reader[.]exe",
                "hxxp://209[.]99[.]190[.]249:8080/Adobe%C4%B0nstaller[.]exe",
                "hxxp://42[.]56[.]148[.]42:44943/bin[.]sh"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 1752,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 1752,
                "newInLastHour": 1749,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"ftpsrv[.]torex6lin[.]surf\"",
                " \"uykfqn[.]pavlore9[.]surf\"",
                " \"libsys[.]torex6lin[.]surf\"",
                " \"dawnsud[.]pavlore9[.]surf\"",
                " \"jobadm[.]torex6lin[.]surf\""
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
            "iocCount": 9622,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 9622,
                "newInLastHour": 8547,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "5ee1e0ab5f0782e83d62722e9a7ee91062102652",
                "c56ac80a032ff319463850125369cc514e83ed59",
                "cce12866188dc393f3c4e151caf38e32543a9c65",
                "c47bcbcbe0b1c474542c7fdc233ec68ffb4dcf14",
                "47fd399c8f9f2074b6d16aaa853cd6eaacecd1ed"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 48118,
            "activeSources": 8,
            "criticalAlerts": 29491,
            "activeCampaigns": 99
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 28372,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "C2",
                "count": 1119,
                "trend": "down",
                "percentage": -88
            },
            {
                "category": "Phishing",
                "count": 339,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 285,
                "trend": "stable",
                "percentage": 6
            }
        ],
        "targetedSectors": [
            {
                "name": "General",
                "percentage": 82
            },
            {
                "name": "Tech",
                "percentage": 17
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
                "count": 27908,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://pkgrun[.]quantumlinkpoint[.]lat/sh5hne-c8b9b4-sskjy-znq2k2of-ybay3z/usr294-verif[.]confirm",
                    "hxxps://usrgrp[.]ultratechstackweb[.]lat/kiss-m0dem-defndr-myrai-sdf934/kwtor[.]dll",
                    "hxxps://pkgrun[.]quantumlinkpoint[.]lat/sh5hne-c8b9b4-sskjy-znq2k2of-ybay3z/usr294-verif[.]confirm"
                ]
            },
            {
                "name": "CINS Threat List",
                "count": 15000,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]12[.]74[.]181",
                    "1[.]177[.]63[.]24",
                    "1[.]178[.]219[.]108"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1619,
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
                "name": " \"js.clearfake\"",
                "count": 861,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"optweb[.]ultratechstackweb[.]lat\"",
                    " \"pkgrun[.]quantumlinkpoint[.]lat\"",
                    " \"usrgrp[.]ultratechstackweb[.]lat\""
                ]
            },
            {
                "name": " \"unknown\"",
                "count": 508,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"api-download[.]us\"",
                    " \"hxxps://saviouronline[.]in\"",
                    " \"saviouronline[.]in\""
                ]
            },
            {
                "name": "Vidar",
                "count": 325,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "82f19aac31fa0b5c38858af039bc9b0133424046",
                    "fcf4598502929f58a832dd6aa1fba567340e504a",
                    "117c5e01959e7e48153743a519723339bd2e0825"
                ]
            },
            {
                "name": "Generic Phishing",
                "count": 293,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://debi357[.]github[.]io/Netflix-clone-website",
                    "hxxps://meta-business[.]invoice-ads-process[.]com/",
                    "hxxps://www[.]roblox[.]com[.]bi/games/89391218331997/I-DONT-NEED-A-SWORD-TO-SLAP?privateServerLinkCode=11605159453863706697758334864438"
                ]
            },
            {
                "name": " \"Mirai",
                "count": 182,
                "types": [
                    "hash"
                ],
                "sampleIndicators": [
                    " \"dde37f2c4d33f21b8d25512ea41312c81851a19ebcb432948a3c8aeee9bb5f98",
                    " \"1e92fdfd0dae462d1c2b827ddbaf7de636b723e848d1823068cb6e12fa9e3d36",
                    " \"41c51222dd1546ad8c4dd5de3bf6926d8bc6fec696be2b2d9f36d9e9ed3f48fd"
                ]
            },
            {
                "name": "OffLoader",
                "count": 159,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "b977e869e493f70b3e7914a1eaa6abe2cc1ea04a",
                    "e7af95eaaa4c87398f4c4c80a66972f342bb3328",
                    "037598803e2603499edbf7275e43f7dd82abd8f3"
                ]
            },
            {
                "name": " \"n/a",
                "count": 138,
                "types": [
                    "hash"
                ],
                "sampleIndicators": [
                    " \"f9428a2abd7af6d66a43ffd8927e8e63cdb0324080040657a7e82247164b4b2c",
                    " \"7c5fdcdde28760aa513d1c04aa8766a9318d39633014cecf8d2cfa0e9aa19391",
                    " \"3225a3ab257fe8ffb46149fb3642338e6e61bfd18a6bff5f4382557c9e4ea909"
                ]
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious URLs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": "AsyncRAT",
        "totalAttacksThisHour": 58800,
        "lastCalculated": "2026-05-05 23:15 IST"
    }
};
