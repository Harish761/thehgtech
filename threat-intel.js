// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-07-09T02:50:08.340423+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-07-09T02:50:07.984882+05:30",
    "lastUpdatedFormatted": "Jul 09, 2026 at 02:50 AM IST",
    "comparisonPeriod": "Jul 08 \u2013 Jul 09, 2026",
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
                "hxxps://agenciatributaria[.]doiih[.]cam/es",
                "hxxps://lnk[.]ink/3VQv5",
                "hxxp://itechbyte[.]com[.]br/dembe/page/",
                "hxxps://roblox[.]com[.]gr/404",
                "hxxps://secure-page-builder--joanpressy[.]replit[.]app/"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 1364,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 1364,
                "newInLastHour": 40,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"fd16598a8119bc7ee24ea59e7d308dd3e07a394e9b027524de3b44ce8cb86505",
                " \"06dfb8f076118342091b46840df9888f7f41db37356a1279f361451ef82636bf",
                " \"11c05dfdcb941e7542aa21f72025106ad107599116a28367c7eace8d272ae035",
                " \"6c9fd8ac684dcac825cdff69e6290cb2bbb0cb51cab82dccbe22aec52837120f",
                " \"ed9f708ab4be13822828d60e02d624faeaa81374ce214ba59b8f0cc21ff3e210"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1662,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1662,
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
                "1[.]159[.]81[.]89",
                "1[.]177[.]162[.]2",
                "1[.]183[.]41[.]171",
                "1[.]188[.]29[.]217"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 9081,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 9081,
                "newInLastHour": 9081,
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
            "iocCount": 22555,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 22555,
                "newInLastHour": 22555,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://27[.]215[.]176[.]9:57162/i",
                "hxxps://4z0tdlyo[.]calvaryhospice[.]org/?ublib=f0a461af-70f7-4907-b701-98ef305590eb",
                "hxxp://27[.]215[.]176[.]9:57162/bin[.]sh",
                "hxxps://ihnx[.]footbalpersian[.]ir/906ff932-3c62-4c96-8fd9-59ba0cec2529",
                "hxxps://jtemlhyz[.]enfej[.]casino/7a94b3d0-8fc5-4e83-b97c-6dbd7523c06c"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 4171,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 4171,
                "newInLastHour": 4061,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"fifa90[.]bet\"",
                " \"hxxp://37[.]1[.]213[.]59/y8jdGc5jS/index[.]php\"",
                " \"124[.]220[.]77[.]21:443\"",
                " \"122[.]51[.]215[.]90:443\"",
                " \"122[.]51[.]215[.]90:8080\""
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
            "iocCount": 9995,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 9995,
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
            "totalIndicators": 55192,
            "activeSources": 8,
            "criticalAlerts": 34055,
            "activeCampaigns": 254
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 23951,
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
                "count": 3371,
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
                "count": 22547,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://103[.]44[.]136[.]115:60710/i",
                    "hxxp://42[.]239[.]157[.]9:55135/i",
                    "hxxps://qakm[.]fiorentini[.]ir/5a5d55ff-f17c-4ebb-80f3-fabfe639e949"
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
                    "1[.]158[.]52[.]79",
                    "1[.]159[.]81[.]89"
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
                "count": 1457,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"st1-colud-google[.]bond\"",
                    " \"122[.]51[.]221[.]207:8080\"",
                    " \"122[.]51[.]221[.]207:443\""
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
                "count": 632,
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
                "count": 447,
                "types": [
                    "hash"
                ],
                "sampleIndicators": [
                    " \"9481dbfb659113e977977f4872d9e620a83a5811fdc30fc4054495fe48cdbcbe",
                    " \"2a57354f1393e07c42b82322d2b18ee2c6da7b18212db5788c94f857e4cfe121",
                    " \"cafa5753b4471a613cb44cd88fc36b9acef511509bf85f76940a2813808fc691"
                ]
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious URLs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": "malware_download",
        "totalAttacksThisHour": 51043,
        "lastCalculated": "2026-07-09 02:50 IST"
    }
};
