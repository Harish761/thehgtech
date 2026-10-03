// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-10-03T10:38:46.202001+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-10-03T10:38:45.993738+05:30",
    "lastUpdatedFormatted": "Oct 03, 2026 at 10:38 AM IST",
    "comparisonPeriod": "Oct 02 \u2013 Oct 03, 2026",
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
                "hxxps://www[.]tinyurl-blox-web[.]blogspot[.]com/",
                "hxxps://g5[.]lu/gpun5",
                "hxxps://www[.]roblox[.]com[.]bn/games/77649408247578/2X-LUCK-Dungeon-Quest-Reborn?privateServerLinkCode=05360172335611206528299105303052",
                "hxxp://bridge-trezur-auth[.]wasmer[.]app/",
                "hxxps://agas6-szl-rh1a-y71b1-17-09-2026-aa[.]pages[.]dev/"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 1152,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 1152,
                "newInLastHour": 73,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"0683dae34749be13ed9c48fe8e71ada678c7189bc51bd373a5e69405458d62d7",
                " \"2e7044f87cdbca22208a00614dc292bb29f9b5f8cf602af91684a809c7d85b1f",
                " \"bda14fdc645f229c83c61815717e03e61ecec50e555c114fa8997eb2983848f4",
                " \"566b6a879e20c3d3eac8e692e233cf946879d47f14c577fdc343b06a11b1beab",
                " \"1cfbf1bad6c7128ba8e8580ec22f33d2996d1bad27eda6c44b5286dc9dbea3e3"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1663,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1663,
                "newInLastHour": 60,
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
                "1[.]12[.]229[.]231",
                "1[.]189[.]248[.]116",
                "1[.]213[.]214[.]233",
                "1[.]24[.]16[.]104",
                "1[.]24[.]16[.]105"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 0,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 0,
                "newInLastHour": 0,
                "lastUpdate": "just now"
            },
            "types": [],
            "sampleIndicators": []
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 15561,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 15561,
                "newInLastHour": 15561,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://182[.]126[.]92[.]177:43112/i",
                "hxxp://115[.]62[.]57[.]106:60731/i",
                "hxxp://196[.]190[.]69[.]149:45695/i",
                "hxxp://114[.]239[.]199[.]121:49462/i",
                "hxxp://46[.]236[.]65[.]12:60086/i"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 7155,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 7155,
                "newInLastHour": 6309,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"47[.]111[.]118[.]251:8443\"",
                " \"45[.]42[.]40[.]55:8084\"",
                " \"bbs[.]vic[.]edu[.]au\"",
                " \"balservicesgroup[.]com[.]au\"",
                " \"4f49e6e001ac5d606022adb8f26232894cbf970844848a9d8e7ed55231e1a8b4\""
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
            "iocCount": 10752,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 10752,
                "newInLastHour": 290,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "8c4c2867daf5d6ef1cc9d304fb4c6be488cd645a",
                "d89e701e024880cfd5f20e3f6ca748ee002f6bcd",
                "ff21ba4cde93cf84c7160e7bbf2d54a236e3f0ba",
                "5a0eb0b51d758eeb090d150a8664bafbcaa4bc3d",
                "b243f74faeb0e8cf30b79e84c846f40b31ce5f55"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 51663,
            "activeSources": 8,
            "criticalAlerts": 27839,
            "activeCampaigns": 260
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 17279,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "C2",
                "count": 10560,
                "trend": "stable",
                "percentage": -2
            },
            {
                "category": "Botnet",
                "count": 4581,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Phishing",
                "count": 301,
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
                "count": 16088,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://193[.]178[.]158[.]57/bin/67dbf1a8e19934e4_thread_hijacking_cayOy4NB[.]exe",
                    "hxxp://222[.]139[.]45[.]127:43346/i",
                    "hxxp://113[.]236[.]70[.]177:42662/bin[.]sh"
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
                    "1[.]189[.]248[.]116",
                    "1[.]193[.]63[.]174"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1632,
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
                "count": 1444,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "5fe196813d0bf092a5d8f3ef550fe959a86ccf87",
                    "205d49b6c7313e16e931e1b5873cc20be0dee85b",
                    "94c4ec66b6f57c29ac935890d7796decea67af37"
                ]
            },
            {
                "name": " \"win.cobalt_strike\"",
                "count": 1330,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"153[.]80[.]242[.]105:25\"",
                    " \"153[.]80[.]242[.]105:22\"",
                    " \"141[.]255[.]166[.]178:80\""
                ]
            },
            {
                "name": " \"js.iclickfix\"",
                "count": 1030,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"dns-ssl[.]com\"",
                    " \"59na[.]com\"",
                    " \"kalooms[.]com\""
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
                "count": 726,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "b243f74faeb0e8cf30b79e84c846f40b31ce5f55",
                    "8bc45d63603370c41a2d7d352cdecb01281f5264",
                    "4f2559300051882eff69dc21bc3d27da6f988751"
                ]
            },
            {
                "name": "QuasarRAT",
                "count": 700,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "4768d20d3072a30b168c650b11a9e4d3e1a0dc60",
                    "c234496c7b0abcd873bb6bb5a54288b6d340b6ff",
                    "7a215b5a8eaf9b132cf84f22d9ee2202c2a028bf"
                ]
            },
            {
                "name": " \"win.pure_rat\"",
                "count": 630,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"91[.]92[.]41[.]66:56002\"",
                    " \"91[.]92[.]41[.]92:443\"",
                    " \"216[.]250[.]252[.]103:443\""
                ]
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious URLs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": " \"elf.mirai\"",
        "totalAttacksThisHour": 37598,
        "lastCalculated": "2026-10-03 10:38 IST"
    }
};
