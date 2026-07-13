// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-07-14T01:29:49.352796+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-07-14T01:29:48.992367+05:30",
    "lastUpdatedFormatted": "Jul 14, 2026 at 01:29 AM IST",
    "comparisonPeriod": "Jul 13 \u2013 Jul 14, 2026",
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
                "hxxp://baseweb-whatsappp[.]hl[.]cn/",
                "hxxp://thinkim-whatsappp[.]hl[.]cn/",
                "hxxp://thinkim-whatsapp[.]hl[.]cn/",
                "hxxps://zlavor-prism-5d04be-trkt-aurora[.]pages[.]dev/",
                "hxxps://www[.]membershipaccess-movie[.]yvv[.]pei[.]mybluehost[.]me/login"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 540,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 540,
                "newInLastHour": 76,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"9b9f01a45caf0aa8968ae28849b1034616dbd3f578a01fa2ecab926be9c1a5d8",
                " \"71fbffcbab0e585ae33ff277a076366955661e39fee25b62c9f59392263025b3",
                " \"6ab43460e36b904dad331bb3b59cb2a341539b63af791013b2163e5bab8b85a4",
                " \"c5208ea8562b3627eded9f9ea09290d132c29fcf8046061d37069056d1128890",
                " \"e7f36ff4274b1fa4afb48a002b85aed82d788a399b0db3d5a4e886238777fb37"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1677,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1677,
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
                "1[.]119[.]194[.]226",
                "1[.]146[.]41[.]216",
                "1[.]15[.]14[.]29",
                "1[.]159[.]52[.]66",
                "1[.]175[.]87[.]205"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 4995,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 4995,
                "newInLastHour": 4995,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]0[.]164[.]165",
                "1[.]1[.]220[.]166",
                "1[.]162[.]247[.]210",
                "1[.]180[.]246[.]242",
                "1[.]192[.]63[.]54"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 21261,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 21261,
                "newInLastHour": 21261,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://216[.]249[.]4[.]20:48369/bin[.]sh",
                "hxxps://ecyz[.]plinko-1xbet[.]games/1427ff78-0347-4582-a70a-0b42a371875e",
                "hxxp://110[.]36[.]77[.]34:38726/i",
                "hxxp://219[.]155[.]195[.]215:53450/bin[.]sh",
                "hxxp://223[.]151[.]249[.]23:38648/bin[.]sh"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 4419,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 4419,
                "newInLastHour": 3992,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"85[.]8[.]149[.]156:444\"",
                " \"5[.]175[.]218[.]71:5691\"",
                " \"45[.]59[.]114[.]202:9090\"",
                " \"37[.]235[.]54[.]142:53236\"",
                " \"23[.]27[.]52[.]106:28736\""
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
            "iocCount": 10173,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 10173,
                "newInLastHour": 0,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "659379b480f2d3448f8946b0961115e00bfdbce0",
                "34ba6ed6fdcf11e71f689efe8e8bb5d723339125",
                "4ab5197c559d38f2d4886d00f7140b09318bc5ca",
                "11079f607edb45c25b11a2106e6ba510a055b98f",
                "df82e74fbb5bc5ae778b1cc4012b097f1f9a133d"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 53355,
            "activeSources": 8,
            "criticalAlerts": 31924,
            "activeCampaigns": 228
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 21764,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "C2",
                "count": 10160,
                "trend": "stable",
                "percentage": 1
            },
            {
                "category": "Botnet",
                "count": 3573,
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
                "count": 21243,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://110[.]36[.]25[.]33:45409/i",
                    "hxxps://p9kos7r3[.]scriptyek[.]com/?ublib=78ce0396-6765-4b9c-a78e-8a73ff3d54d8",
                    "hxxps://kzjx[.]betropol[.]bet/ac0e1f83-9ee4-4487-8a47-f81e3e90755c"
                ]
            },
            {
                "name": "CINS Threat List",
                "count": 15000,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]119[.]194[.]226",
                    "1[.]12[.]65[.]64",
                    "1[.]146[.]41[.]216"
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
                "name": "AsyncRAT",
                "count": 1426,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "34ba6ed6fdcf11e71f689efe8e8bb5d723339125",
                    "8f000dbd7cc73e8857d42a3c7c15676305af6889",
                    "85f5e4e0d8c608a11c4e493eb349a7a4c8c4bc9d"
                ]
            },
            {
                "name": " \"win.cobalt_strike\"",
                "count": 1421,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"3b483dce1793ec320b176f90492e1731\"",
                    " \"65a3bf90bb49d29d3970b75e5b6e16527c135e0784bc93a23b8f206e906db79f\"",
                    " \"c2ca3ffb1274c7c5898e84bac2e52e75d317cbb2\""
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
                "count": 693,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "4c67471be88dd63db2466621fe9e2a2d848f5b79",
                    "9cc76149b07c25893611bc8339406a6312ab2053",
                    "1b64957d1d878c0c0b0b346849db2e64d487aa17"
                ]
            },
            {
                "name": "Vidar",
                "count": 645,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "4ab5197c559d38f2d4886d00f7140b09318bc5ca",
                    "cd1f1ffdd1055c9540758327ff1d7698068c9a93",
                    "745edb7835e0a1ef871d1c027651ed4dfbfd406c"
                ]
            },
            {
                "name": "LummaStealer",
                "count": 557,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "501d817bb1780acfe5e47082c43472bda8068e4d",
                    "2beac2ee8b2fe7625d4de9f5381d37f200965f91",
                    "a46841d623a191366909b24375bee0eceea23bbe"
                ]
            },
            {
                "name": "OffLoader",
                "count": 442,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "659379b480f2d3448f8946b0961115e00bfdbce0",
                    "4af51082ffa699d104ec1f66263afc8efa99cf76",
                    "a838f21e4fbcf93b9dcb1adf61ce9a7e07729594"
                ]
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious URLs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": " \"n/a",
        "totalAttacksThisHour": 45629,
        "lastCalculated": "2026-07-14 01:29 IST"
    }
};
