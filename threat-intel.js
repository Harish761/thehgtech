// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-09-24T01:08:18.393408+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-09-24T01:08:18.089082+05:30",
    "lastUpdatedFormatted": "Sep 24, 2026 at 01:08 AM IST",
    "comparisonPeriod": "Sep 23 \u2013 Sep 24, 2026",
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
                "hxxps://face-book[.]com[.]vn/mau-anh-mua-he-2026",
                "hxxps://www[.]blockfi-coinage[.]com/",
                "hxxp://xfinityteamsservice[.]weebly[.]com/",
                "hxxp://loginxfinityinfo[.]weebly[.]com/",
                "hxxp://pine-crown-dust[.]pages[.]dev/"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 1895,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 1895,
                "newInLastHour": 365,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"caa2428596dc2a801f148058a9131136b2c1562fcff576ea549cb61631748043",
                " \"c70792d9d9ff1fc9c787e26644e13a972c95e9bc5e888cb378da0baeb3ef799c",
                " \"f7036168e88a8a113807c2ee1383a30632871575fee9fb16d294836005de6c76",
                " \"2f18cb31f94a912581b8c70140c6d6d978de828a4b480d15d8588f37d49c483f",
                " \"113fd4705c8cb71f1f9b62b1a57f87208d0c2560b66399d2b4ec8d1337642fb6"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1710,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1710,
                "newInLastHour": 1157,
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
                "1[.]117[.]59[.]169",
                "1[.]12[.]229[.]231",
                "1[.]145[.]32[.]156",
                "1[.]189[.]89[.]243",
                "1[.]193[.]58[.]176"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 11755,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 11755,
                "newInLastHour": 11755,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]0[.]164[.]165",
                "1[.]117[.]72[.]220",
                "1[.]14[.]122[.]79",
                "1[.]15[.]221[.]192",
                "1[.]161[.]144[.]132"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 14294,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 14294,
                "newInLastHour": 14294,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://222[.]138[.]118[.]172:57431/i",
                "hxxp://42[.]227[.]130[.]70:49778/bin[.]sh",
                "hxxp://125[.]47[.]23[.]202:55548/i",
                "hxxp://125[.]45[.]54[.]195:39138/bin[.]sh",
                "hxxp://42[.]230[.]16[.]127:54249/i"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 8363,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 8363,
                "newInLastHour": 7988,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"avhew86963[.]workers[.]dev\"",
                " \"187[.]77[.]30[.]227:5005\"",
                " \"23[.]94[.]66[.]124:80\"",
                " \"3[.]70[.]2[.]18:80\"",
                " \"3[.]70[.]2[.]18:443\""
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
            "iocCount": 10783,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 10783,
                "newInLastHour": 210,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "de58e571469c72f26cfb59884e06e2aa5db7d6ff",
                "180512bde178c27cef6b8597f301558d88f853e2",
                "82ad60b5fe3e77f88effbb586db3795a41e5f60b",
                "95688000a5176c85f77eb00ba69faef202ae6c24",
                "2c718d1d6454ad663cf963baecf3a1c81495716a"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 49264,
            "activeSources": 8,
            "criticalAlerts": 26498,
            "activeCampaigns": 281
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 15937,
                "trend": "stable",
                "percentage": 4
            },
            {
                "category": "C2",
                "count": 10561,
                "trend": "stable",
                "percentage": -1
            },
            {
                "category": "Botnet",
                "count": 4397,
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
                "name": "CINS Threat List",
                "count": 15000,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]117[.]59[.]169",
                    "1[.]12[.]229[.]231",
                    "1[.]145[.]32[.]156"
                ]
            },
            {
                "name": "malware_download",
                "count": 14180,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://123[.]7[.]226[.]60:33827/i",
                    "hxxp://186[.]149[.]204[.]12:33995/bin[.]sh",
                    "hxxp://112[.]198[.]195[.]40:38934/i"
                ]
            },
            {
                "name": "AsyncRAT",
                "count": 1442,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "cb7fcaede3c6bb75e73ee72b8de7c23de2953dd4",
                    "990472ad57a4d7dcb13689a21b0c84252f5cf0a5",
                    "99500e5de097a58d95775e1f9da85597851bdb71"
                ]
            },
            {
                "name": " \"win.cobalt_strike\"",
                "count": 1385,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"81[.]70[.]21[.]163:5985\"",
                    " \"111[.]231[.]116[.]164:55413\"",
                    " \"8[.]163[.]59[.]20:7000\""
                ]
            },
            {
                "name": " \"js.iclickfix\"",
                "count": 1151,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"velvet-otter-glagceis[.]life\"",
                    " \"hollow-forge-rook-guiyn[.]life\"",
                    " \"pemdistribution[.]com\""
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
                "count": 730,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "2d55d1a98da553c64dca5168488b90de1ac2b6dc",
                    "8ebcb44e692f32d2a4894ada4a06079a48bdf1a6",
                    "e368d5f28111dd2b577e949c59b254f7de1dae2b"
                ]
            },
            {
                "name": " \"n/a",
                "count": 697,
                "types": [
                    "hash"
                ],
                "sampleIndicators": [
                    " \"f719ac240214c99fb3cdb500e25e3148a4349d9a3ed34969425853e5976f7045",
                    " \"abf04f41c1cd68c2703c47b51effd93373edebd68dc0b08068378253cad41b6e",
                    " \"4ef17ce50dce021504f3b820562bd30c03dbc796d4c5dbbf745353be08c5984f"
                ]
            },
            {
                "name": "QuasarRAT",
                "count": 695,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "82ad60b5fe3e77f88effbb586db3795a41e5f60b",
                    "b85ab05112c6848ccf2dd6889903e1268cdc6a75",
                    "9b798f7d87edcf42680454660f593afd696ef8ca"
                ]
            },
            {
                "name": " \"Mirai",
                "count": 651,
                "types": [
                    "hash"
                ],
                "sampleIndicators": [
                    " \"02bbebf35a282b3aefa101f64e1a033b3f672bbdf078abc82f30c8121feda9f8",
                    " \"1069c06c780a7e7ebc0777cc7524de7b3589257cf3010896f3e4af813730f446",
                    " \"533d27d051380c648e979088fbec48948986818b0fcde602657f8e2204c42cc3"
                ]
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious IPs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": "Spamhaus DROP List",
        "totalAttacksThisHour": 51074,
        "lastCalculated": "2026-09-24 01:08 IST"
    }
};
