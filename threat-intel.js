// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-07-08T01:56:17.540913+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-07-08T01:56:17.132185+05:30",
    "lastUpdatedFormatted": "Jul 08, 2026 at 01:56 AM IST",
    "comparisonPeriod": "Jul 07 \u2013 Jul 08, 2026",
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
                "hxxp://lnk[.]ua/tSU6QVByr",
                "hxxps://steamcommnunmity[.]com/tradeoffer/new/partner=80159154token=w6tbasGP41221",
                "hxxp://www[.]tiketok[.]cc/h5/",
                "hxxp://www[.]tiketok[.]cc/",
                "hxxps://www[.]aijiu99[.]net/"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 1317,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 1317,
                "newInLastHour": 19,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"7c9a602edba953fca33c1a98d927511cb1fce0896ddef108c0468ab5e036aa38",
                " \"a9c0dc5e82922ae94c6ecb4a9541727f37c411b61a6f85140c0906ee492e5990",
                " \"8a1be81addf72b809a59c82b67972a5f2fb89452295c215e1de5f3f1cb171ca0",
                " \"2fb0a80581f2804c8f7015bde6020423893b051993da0fef87de526a123fe35d",
                " \"c3a7c223ee60cd90c1cfaba7d105320800cfbd66473589df00b41f871213bb71"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1681,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1681,
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
                "1[.]158[.]6[.]230",
                "1[.]159[.]81[.]89",
                "1[.]181[.]200[.]22",
                "1[.]188[.]29[.]217",
                "1[.]192[.]46[.]208"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 4632,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 4632,
                "newInLastHour": 4632,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]0[.]164[.]165",
                "1[.]15[.]221[.]192",
                "1[.]162[.]247[.]182",
                "1[.]192[.]61[.]19",
                "1[.]20[.]186[.]29"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 22878,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 22878,
                "newInLastHour": 22878,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://123[.]4[.]190[.]17:48149/i",
                "hxxps://npvnwrv[.]jetbet90iran[.]bet/3f59e222-db58-4089-9421-28b4d10984d8",
                "hxxp://115[.]55[.]10[.]88:38789/i",
                "hxxps://8djyx8g3[.]mellbet[.]net/?ublib=d65eefb1-fb9a-471c-9d5f-10be7e7779d5",
                "hxxp://42[.]224[.]27[.]77:34533/i"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 3970,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 3970,
                "newInLastHour": 3881,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"npvnwrv[.]jetbet90iran[.]bet\"",
                " \"jetbet90iran[.]bet\"",
                " \"safeimagehub[.]info\"",
                " \"8djyx8g3[.]mellbet[.]net\"",
                " \"mellbet[.]net\""
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
            "iocCount": 10126,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 10126,
                "newInLastHour": 48,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "bca627ea4b11ce235879ac54bcf5ca2121a6ed0c",
                "400866dbd7d2f51fbab5f7f73e98f60df8e0d798",
                "145b585a8d477243e229f4d660d1a9fc40b38243",
                "22549b9d0f61cb1d81ef6aea0ebc3689e38f12df",
                "a838f21e4fbcf93b9dcb1adf61ce9a7e07729594"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 55137,
            "activeSources": 8,
            "criticalAlerts": 34253,
            "activeCampaigns": 242
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 24197,
                "trend": "stable",
                "percentage": 1
            },
            {
                "category": "C2",
                "count": 10056,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 3360,
                "trend": "stable",
                "percentage": 0
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
                "count": 22844,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://91[.]92[.]242[.]236/files-129312398/files/file_362cb5e2f5df49e2[.]exe",
                    "hxxps://9qdbp5gv[.]bet90forward[.]win/?ublib=9492ee16-2ec3-48da-b29d-0c8aa0ecd312",
                    "hxxp://91[.]92[.]242[.]236/files-129312398/files/file_5138ba5ea3d78559[.]exe"
                ]
            },
            {
                "name": "CINS Threat List",
                "count": 15000,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]158[.]6[.]230",
                    "1[.]192[.]199[.]227",
                    "1[.]193[.]63[.]247"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1681,
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
                "count": 1418,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"8[.]163[.]93[.]232:443\"",
                    " \"8[.]163[.]93[.]232:1234\"",
                    " \"92[.]243[.]66[.]59:8448\""
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
                    "1b64957d1d878c0c0b0b346849db2e64d487aa17",
                    "83ff65960d2df4b29e78d6fd0342dcd5f053eb13",
                    "ac563907d31a21443760cee92a98b50bba6152aa"
                ]
            },
            {
                "name": "Vidar",
                "count": 613,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "72a2354f33ff1d38b31cb19209b4b90acafaf46d",
                    "ec452c3c30499a1a6983877a2d881c1a8f2955ea",
                    "e553bfd006337f4cb3a3acf5a681980d184b79e6"
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
                "name": " \"n/a",
                "count": 539,
                "types": [
                    "hash"
                ],
                "sampleIndicators": [
                    " \"a6397f51aa27b4db42c879087f22c52b8f437cfbe2a1f4665cd0577c5aa65bc0",
                    " \"2bb8f97ed5e56c9c022681045a27e369ac2a73d1f6775d29008f8fdafb36e05f",
                    " \"79a00dc593777f03f4de27e234f44908a91d600766f34b40f59aa2100000dd09"
                ]
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious URLs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": " \"js.clearfake\"",
        "totalAttacksThisHour": 46763,
        "lastCalculated": "2026-07-08 01:56 IST"
    }
};
