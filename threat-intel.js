// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-03-21T18:40:21.241251+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-03-21T18:40:20.954589+05:30",
    "lastUpdatedFormatted": "Mar 21, 2026 at 06:40 PM IST",
    "comparisonPeriod": "Mar 20 \u2013 Mar 21, 2026",
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
                "hxxp://gifts-marathon[.]click/id=5947221648",
                "hxxps://u[.]to/4TN3Ig",
                "hxxp://blekfilogon[.]webflow[.]io/",
                "hxxp://help--logie--kucuie[.]webflow[.]io/",
                "hxxp://www[.]amazonclone-nine-psi[.]vercel[.]app/"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 808,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 808,
                "newInLastHour": 85,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"a4da16b96abba3e940c2cdfdb6f206b3fad6e0d33134f6f3ec987cbcad9ed83b",
                " \"689d38aa455c64a1ae36e08f2531e97622aed9eb1e955639620ebb1966f34759",
                " \"0e552dea7d3438a9cb0e322c95d94eba11c66c546e10ccf180c54da97a6d96a0",
                " \"000056947961897b1ce18822fd4ba2b5ffcf9ec60e68c6b25e4490db553f4296",
                " \"7763c0136718763ecc30b82d987cf8806d53d3bb1a6cae6e6bfbc8632604f4b8"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1516,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1516,
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
                "1[.]14[.]3[.]240",
                "1[.]15[.]118[.]23",
                "1[.]161[.]138[.]75",
                "1[.]188[.]100[.]103",
                "1[.]189[.]229[.]231"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 5151,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 5151,
                "newInLastHour": 5151,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]164[.]175[.]121",
                "1[.]189[.]21[.]20",
                "1[.]214[.]117[.]218",
                "1[.]214[.]197[.]163",
                "1[.]214[.]255[.]210"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 20186,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 20186,
                "newInLastHour": 20186,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://158[.]94[.]208[.]7/files/8531638373/ELPdXJY[.]exe",
                "hxxp://110[.]37[.]36[.]89:53263/bin[.]sh",
                "hxxp://60[.]19[.]11[.]29:54382/bin[.]sh",
                "hxxp://180[.]190[.]186[.]97:54679/i",
                "hxxp://158[.]94[.]208[.]7/files/8520831842/YKvV4YH[.]exe"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 1785,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 1785,
                "newInLastHour": 1626,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"206[.]238[.]220[.]23:6666\"",
                " \"102[.]117[.]165[.]82:7443\"",
                " \"185[.]199[.]225[.]156:4950\"",
                " \"ayodhaltbohy-59438[.]portmap[.]host\"",
                " \"104[.]200[.]67[.]121:443\""
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
            "iocCount": 9313,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 9313,
                "newInLastHour": 15,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "daa4e094b47b8c884475fc642924f7891d537687",
                "9b5d6e71e30e21da223ae28fe9015475a5300982",
                "137adb757afcb4e5980a5e6aa63ac498559309d2",
                "c23d6863f7ad286ca9f63354456c552d0b37d6a6",
                "ca0c1280a2c26415f8d77ca00a39c6986841da0c"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 48829,
            "activeSources": 8,
            "criticalAlerts": 30166,
            "activeCampaigns": 210
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 20855,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "C2",
                "count": 9311,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 776,
                "trend": "stable",
                "percentage": -7
            },
            {
                "category": "Phishing",
                "count": 303,
                "trend": "stable",
                "percentage": 0
            }
        ],
        "targetedSectors": [
            {
                "name": "General",
                "percentage": 93
            },
            {
                "name": "Tech",
                "percentage": 6
            },
            {
                "name": "Finance",
                "percentage": 0
            }
        ],
        "campaigns": [
            {
                "name": "malware_download",
                "count": 20073,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://88[.]214[.]20[.]143/sshbins[.]sh",
                    "hxxps://unwitting[.]fluxobase[.]info/avoidsynthetic",
                    "hxxps://orbit2steel[.]terminalvariable[.]in[.]net/verification[.]google/"
                ]
            },
            {
                "name": "CINS Threat List",
                "count": 15000,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]10[.]154[.]89",
                    "1[.]10[.]165[.]207",
                    "1[.]14[.]3[.]240"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1533,
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
                "count": 1390,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "c415fb25075e3df71a6a9bf67750cbf6a6c7e868",
                    "ba3e7e73b6c654a979d4e4fe20b4aa24890b4518",
                    "e074dd74eb8eb98468a94eb43b3487fe2b7f5980"
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
                "count": 644,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "c1bf3f2892eca45233b47a9e7ca46f4719cd6700",
                    "634e580a85c375140b9a7f5972559dfd4f02033d",
                    "126fb0c3c98f6c3f9e359774e9b174a810eb9871"
                ]
            },
            {
                "name": " \"unknown\"",
                "count": 630,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"139[.]162[.]30[.]17:443\"",
                    " \"hxxps://fontawesome-js-ico[.]beer/api/css[.]js\"",
                    " \"fontawesome-js-ico[.]beer\""
                ]
            },
            {
                "name": "LummaStealer",
                "count": 543,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "0211433cfdfedfc7352c1228fc58d9d2f9d49032",
                    "8ebe0d48a1178a816162ca9b034b7b653d0fc12b",
                    "da0f6a5937d3c2d365ffeddb881b4136313e1afa"
                ]
            },
            {
                "name": " \"js.clearfake\"",
                "count": 480,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"cpz2[.]way2dot[.]in[.]net\"",
                    " \"ext2proc[.]analyticalhubnode[.]in[.]net\"",
                    " \"res4static[.]analyticsprocessing[.]in[.]net\""
                ]
            },
            {
                "name": " \"n/a",
                "count": 453,
                "types": [
                    "hash"
                ],
                "sampleIndicators": [
                    " \"1cc4d06ea2475d1edb57cf57abdc12f1056a56839a2006e07fa30e71356d57ba",
                    " \"e6ba480871feb484530dae559fb8d9940ac4bcb76861d5ca0897617d9b317324",
                    " \"df120f0e6952a2447f8323ab565b6a8560066f4cd8b7126b2fd0987b102239cc"
                ]
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious URLs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": " \"PEASS-NG",
        "totalAttacksThisHour": 42369,
        "lastCalculated": "2026-03-21 18:40 IST"
    }
};
