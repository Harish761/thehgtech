// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-07-08T15:58:58.429031+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-07-08T15:58:58.035976+05:30",
    "lastUpdatedFormatted": "Jul 08, 2026 at 03:58 PM IST",
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
                "hxxp://9659aap19[.]vip/",
                "hxxp://tt-come[.]cfd/",
                "hxxps://www[.]roblox[.]com[.]ml/users/282564278986/profile",
                "hxxp://bafkreiak6rgnyp5ck6773bzh327hyjmfcbs7i6t6ihj35zuz2vljnyuh54[.]ipfs[.]dweb[.]link/",
                "hxxp://tksm[.]eu[.]cc/"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 1401,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 1401,
                "newInLastHour": 87,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"1c275edff53298c21d94ebac4cd30199666a0872e5072dcc704b74fb440d9d07",
                " \"f34ccaabd453d1a48109ea8f96b224c845ff03da08059db5ae5c63b3bf21bc15",
                " \"c7f1d6bbcd6e90be086547b367b5a612535d235fb83f6dbc9aff049494db2238",
                " \"45d9d7b300ec1181ba48a102c1d486f18c1f9aa15f501e9542709f48175c53d2",
                " \"cc515b0e55bb4bf4e871004e2f3f4de25cdc7259db8fdd45e7088d869733078d"
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
                "1[.]158[.]52[.]79",
                "1[.]159[.]81[.]89",
                "1[.]183[.]41[.]171",
                "1[.]188[.]29[.]217",
                "1[.]196[.]17[.]158"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 8910,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 8910,
                "newInLastHour": 8910,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]0[.]164[.]165",
                "1[.]15[.]221[.]192",
                "1[.]162[.]197[.]67",
                "1[.]162[.]225[.]185",
                "1[.]162[.]226[.]31"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 22427,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 22427,
                "newInLastHour": 22427,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://222[.]136[.]52[.]228:56020/bin[.]sh",
                "hxxps://bwup[.]catsandcarp[.]com/2af7d0f8-d488-4646-9d1e-ad290a2df45a",
                "hxxp://163[.]142[.]95[.]89:43256/i",
                "hxxp://200[.]112[.]129[.]57:42371/bin[.]sh",
                "hxxp://182[.]127[.]4[.]27:43671/i"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 4008,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 4008,
                "newInLastHour": 3884,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"bwup[.]catsandcarp[.]com\"",
                " \"188[.]48[.]208[.]56:1177\"",
                " \"47[.]108[.]140[.]10:443\"",
                " \"47[.]108[.]140[.]10:80\"",
                " \"47[.]108[.]140[.]10:8080\""
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
            "iocCount": 10127,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 10127,
                "newInLastHour": 1,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "2d83749ee793d5dd905aebcee10c1898c7ce8110",
                "bca627ea4b11ce235879ac54bcf5ca2121a6ed0c",
                "400866dbd7d2f51fbab5f7f73e98f60df8e0d798",
                "145b585a8d477243e229f4d660d1a9fc40b38243",
                "22549b9d0f61cb1d81ef6aea0ebc3689e38f12df"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 54942,
            "activeSources": 8,
            "criticalAlerts": 33867,
            "activeCampaigns": 250
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 23763,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "C2",
                "count": 10104,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 3413,
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
                "count": 22353,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://116[.]139[.]183[.]228:43439/bin[.]sh",
                    "hxxp://115[.]55[.]192[.]200:33588/i",
                    "hxxp://115[.]55[.]192[.]200:33588/bin[.]sh"
                ]
            },
            {
                "name": "CINS Threat List",
                "count": 15000,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]158[.]52[.]79",
                    "1[.]159[.]81[.]89",
                    "1[.]183[.]41[.]171"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1680,
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
                "name": " \"win.cobalt_strike\"",
                "count": 1446,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"172[.]245[.]226[.]120:8080\"",
                    " \"39[.]106[.]80[.]126:8080\"",
                    " \"159[.]75[.]195[.]231:8080\""
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
                "count": 691,
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
                "count": 633,
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
                "name": " \"n/a",
                "count": 559,
                "types": [
                    "hash"
                ],
                "sampleIndicators": [
                    " \"ecf00732179f5ec70ebf55c50812a3520092f351926b89307d928f5b83601e72",
                    " \"d17c88b48d370d0b7360bd8987d2ca664a750d45d1bc51f2a269262592c5fff1",
                    " \"05107cd7d97c5735f95cf0460ce1da2db4631abbc167c0b21842949bdca6651c"
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
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious URLs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": "SSH Attacks",
        "totalAttacksThisHour": 50615,
        "lastCalculated": "2026-07-08 15:58 IST"
    }
};
