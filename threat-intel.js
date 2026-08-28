// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-08-29T03:43:48.760793+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-08-29T03:43:48.419959+05:30",
    "lastUpdatedFormatted": "Aug 29, 2026 at 03:43 AM IST",
    "comparisonPeriod": "Aug 28 \u2013 Aug 29, 2026",
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
                "hxxp://helps-ledgrr-live-app[.]pages[.]dev/",
                "hxxps://web-conect-ledger-live-download-sso[.]typedream[.]app/",
                "hxxp://xhstc88[.]com/",
                "hxxp://gruppofarina[.]net/css/PO/PO/FO/FO/corr[.]php",
                "hxxp://gruppofarina[.]net/css/PO/PO/FO/FO"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 944,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 944,
                "newInLastHour": 331,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"b10aea7eb8148ed909cf3b9809183d275be7f754077a7771f8802c6c4a231135",
                " \"566d053e454ae2efcf82d41a94af85effe0d46287a70bedacb80f10fb1e1e069",
                " \"e776b7f83b6352458c4a98682b36b5c29550a527371b677c71737626cee44184",
                " \"69d551dbb178fdb81d98c1e903486924cbf5ffe19ae1525b5e3414d6c5f100d7",
                " \"6529e3500de7cc4a42006c3b27bc59bf8e227a796dfd69edce8a0e4f3a97ffa5"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1686,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1686,
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
                "1[.]120[.]123[.]117",
                "1[.]12[.]229[.]231",
                "1[.]183[.]160[.]23",
                "1[.]188[.]5[.]46",
                "1[.]189[.]125[.]236"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 13181,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 13181,
                "newInLastHour": 13181,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]0[.]164[.]165",
                "1[.]1[.]242[.]233",
                "1[.]162[.]197[.]67",
                "1[.]162[.]198[.]126",
                "1[.]162[.]247[.]182"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 16155,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 16155,
                "newInLastHour": 16155,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://62[.]60[.]226[.]140/files/7299809293/zlYuYkG[.]bat",
                "hxxp://124[.]235[.]169[.]39:39615/i",
                "hxxps://gd[.]ozzhlb[.]net/bin/stego_pefqx5myie[.]png",
                "hxxps://drive[.]google[.]com/file/d/1r7M0rgvXklsZK-Xo6NRgM_gaG46QU4Dr/view?usp=sharing",
                "hxxp://176[.]65[.]139[.]137/bins/reaver[.]mips"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 7513,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 7513,
                "newInLastHour": 7231,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"a1q5ie1n[.]gtsdirect[.]com\"",
                " \"hvbabdh2[.]jeffmowatt[.]com\"",
                " \"jeffmowatt[.]com\"",
                " \"hqgetdsm[.]com\"",
                " \"ternar-trzeciak[.]com\""
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
            "iocCount": 10297,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 10297,
                "newInLastHour": 18,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "5e06eaa686adc5ca8fd118752c6667e826bbcad0",
                "41f8e81a4f9b3e7e70353a84e4bf87d687ddc79e",
                "407df66ac87ceb177c560e82df9521c8003b5f0d",
                "1389c26fb7ce71a7aa1514e86879daf6b373325a",
                "8f154a9a3584398eb6be34b0e2f05c79c63cea6a"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 52079,
            "activeSources": 8,
            "criticalAlerts": 27408,
            "activeCampaigns": 257
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 16871,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "C2",
                "count": 10537,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 4528,
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
                "count": 15963,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://196[.]190[.]133[.]180:41857/i",
                    "hxxp://115[.]56[.]43[.]164:34354/i",
                    "hxxp://103[.]31[.]103[.]204:49856/i"
                ]
            },
            {
                "name": "CINS Threat List",
                "count": 15000,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]12[.]229[.]231",
                    "1[.]183[.]148[.]62",
                    "1[.]183[.]160[.]23"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1705,
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
                "count": 1440,
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
                "count": 1381,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"117[.]72[.]182[.]5:7000\"",
                    " \"117[.]72[.]182[.]5:8888\"",
                    " \"117[.]72[.]182[.]5:3000\""
                ]
            },
            {
                "name": " \"js.iclickfix\"",
                "count": 1320,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"microsoftgeek[.]com\"",
                    " \"colorwayresin[.]ir\"",
                    " \"thomasrunge[.]net\""
                ]
            },
            {
                "name": " \"unknown_loader\"",
                "count": 938,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"zupee[.]download\"",
                    " \"yonodigona[.]com\"",
                    " \"yoonhoum[.]com\""
                ]
            },
            {
                "name": "Vidar",
                "count": 738,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "9f0464e29fb94333e1ad31740bf4d4bff89cbd28",
                    "fd78e771cab22c3afad8a5d5c448ff05268f20dd",
                    "8b41b8741c4d2a24de0aba241f742f043f1014d1"
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
                "count": 699,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "d123d7f43d63545c7a8f643acbe73e81f35c3f14",
                    "9b4c3ff8dc5891693f443320e3c1167c7cebe2b7",
                    "0f1b05653c3b3ab3bb4ecd772dd024668cbe8df1"
                ]
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious IPs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": " \"js.iclickfix\"",
        "totalAttacksThisHour": 52221,
        "lastCalculated": "2026-08-29 03:43 IST"
    }
};
