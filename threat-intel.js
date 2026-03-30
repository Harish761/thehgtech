// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-03-30T19:28:08.275328+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-03-30T19:28:07.962922+05:30",
    "lastUpdatedFormatted": "Mar 30, 2026 at 07:28 PM IST",
    "comparisonPeriod": "Mar 29 \u2013 Mar 30, 2026",
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
                "hxxps://mahiyasingh[.]github[.]io/ecommerce-ui",
                "hxxp://cna[.]cnj-sjpqdna9[.]com/",
                "hxxps://j[.]91boris[.]com/",
                "hxxps://assetsunlayercc[.]flazio[.]site/",
                "hxxps://microsoft[.]resolve-issue[.]click/"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 438,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 438,
                "newInLastHour": 69,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"5d3efd95113c0c2bf75aae8fc89d318123ecb178e4303b52cbf1ca7887357838",
                " \"017849e593fb62b78b65843da6af9ec5dbe85623a38b238c60a21ea5866ec600",
                " \"1b5e293b8a284ddd3cbb6949adb8d1709337d6d4a129159d9aa4d04448506f6c",
                " \"0f00c411430e2bc93bd4949653c29efa305ea75f7071f43cae050672095f0dce",
                " \"fe557842d9c53617a746d8ccc64126628a1972fe796c8ae343b26164bbd0f0be"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1550,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1550,
                "newInLastHour": 3,
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
                "1[.]10[.]202[.]59",
                "1[.]14[.]3[.]240",
                "1[.]174[.]69[.]6",
                "1[.]182[.]191[.]117",
                "1[.]183[.]46[.]50"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 4637,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 4637,
                "newInLastHour": 4637,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]12[.]217[.]80",
                "1[.]145[.]126[.]185",
                "1[.]15[.]33[.]90",
                "1[.]194[.]219[.]159",
                "1[.]197[.]102[.]62"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 21042,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 21042,
                "newInLastHour": 21042,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxps://gl0ss-grid[.]n0vabrook[.]in[.]net/verification[.]google",
                "hxxp://27[.]193[.]230[.]64:40914/i",
                "hxxp://27[.]207[.]184[.]58:54300/bin[.]sh",
                "hxxp://36[.]70[.]234[.]148:38506/bin[.]sh",
                "hxxp://117[.]235[.]123[.]214:38824/i"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 1096,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 1096,
                "newInLastHour": 1088,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"gl0ss-grid[.]n0vabrook[.]in[.]net\"",
                " \"hmndwk[.]n0vabrook[.]in[.]net\"",
                " \"capitclou[.]stormglade[.]in[.]net\"",
                " \"creekcargo[.]stormglade[.]in[.]net\"",
                " \"hxxps://allplanetssame[.]cfd/api/index[.]php\""
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
            "iocCount": 9433,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 9433,
                "newInLastHour": 22,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "3a34f580e3626ac9de04604b8d0a4c3abb8682aa",
                "426f482e33309401ce4ecf7958f5ae28e8ff1423",
                "5564b85fb641dbb29c8d4c265b4e41b3476a851d",
                "e1305a89f7c83c0204edeae7bb063f73c4a80612",
                "9a39dd3fec6c66ce980dbc07e4ad5103b2d0b09b"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 48625,
            "activeSources": 8,
            "criticalAlerts": 30707,
            "activeCampaigns": 190
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 21318,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "C2",
                "count": 9389,
                "trend": "up",
                "percentage": 944
            },
            {
                "category": "Botnet",
                "count": 500,
                "trend": "up",
                "percentage": 21
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
                "percentage": 88
            },
            {
                "name": "Tech",
                "percentage": 11
            },
            {
                "name": "Finance",
                "percentage": 0
            }
        ],
        "campaigns": [
            {
                "name": "malware_download",
                "count": 20901,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxps://riverrefine[.]oakwhisper[.]in[.]net/verification[.]google",
                    "hxxps://hyper-4uth[.]oakwhisper[.]in[.]net/verification[.]google",
                    "hxxp://123[.]8[.]9[.]140:39071/i"
                ]
            },
            {
                "name": "CINS Threat List",
                "count": 15000,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]10[.]202[.]59",
                    "1[.]14[.]3[.]240",
                    "1[.]182[.]191[.]117"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1549,
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
                "count": 1393,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "9b940adeda4f1d48f5560f76bb8bfc6e46202d3b",
                    "7aa15098c33be8eea90c57dba4443afba38bce40",
                    "c415fb25075e3df71a6a9bf67750cbf6a6c7e868"
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
                "count": 657,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "e1305a89f7c83c0204edeae7bb063f73c4a80612",
                    "4fb81998ac697ab9e998f1c69d89e7ea606850ed",
                    "33510aca342fd05d8d74aa957e95477aeb2e7ed7"
                ]
            },
            {
                "name": "LummaStealer",
                "count": 550,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "2ebb8f663f93eb9c8f169cc09a86f6dba1c85584",
                    "f05a2876d9129ec057ecaedfac9cc37ebe2138ad",
                    "460e554589554e5dbaeb2c6f4c6aaf93e31da41a"
                ]
            },
            {
                "name": " \"js.clearfake\"",
                "count": 483,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"riverrefine[.]oakwhisper[.]in[.]net\"",
                    " \"hyper-4uth[.]oakwhisper[.]in[.]net\"",
                    " \"filteglob[.]oakwhisper[.]in[.]net\""
                ]
            },
            {
                "name": "Vidar",
                "count": 454,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "426f482e33309401ce4ecf7958f5ae28e8ff1423",
                    "5564b85fb641dbb29c8d4c265b4e41b3476a851d",
                    "8501fab6623b7b8f968d2b522da81c514918df66"
                ]
            },
            {
                "name": "OffLoader",
                "count": 372,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "9a39dd3fec6c66ce980dbc07e4ad5103b2d0b09b",
                    "f2fec8875975bbc52993dea783327c6096c9b285",
                    "20d6dac19c714dd2102038eb700f10283940d822"
                ]
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious URLs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": "malware_download",
        "totalAttacksThisHour": 42166,
        "lastCalculated": "2026-03-30 19:28 IST"
    }
};
