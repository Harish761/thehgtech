// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-10-03T03:57:57.886909+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-10-03T03:57:57.552628+05:30",
    "lastUpdatedFormatted": "Oct 03, 2026 at 03:57 AM IST",
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
                "hxxps://facebook-4[.]blogspot[.]com/",
                "hxxps://auth[.]properties/E[.]BPzGinUzM_SRe5RCWQ?/microsoftonline/mailbox/upgrade&userid=75468973984785978212312307887543",
                "hxxps://mainease[.]com/BP9SGCTK0422-the-evolution-of-empathy/",
                "hxxps://www[.]arizona99[.]co/",
                "hxxp://www[.]my-aol-account[.]blogspot[.]com/"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 1165,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 1165,
                "newInLastHour": 75,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"f1d56c7182c6436b26d47f0a64e297ee5b32a4002e6e589add0f5ff10b55c5f2",
                " \"fd7985d10d4d7b110e3e1f9cd0aa05abdadca4df11a82d907141612968970c25",
                " \"99a4f10d374c096e576e6b2e82594ce53ff1d429c545d10dbf3647c4ae79ac9a",
                " \"51538a2683287a88871c37be515268c34048e1e84b30eecea23164f864e4ecd4",
                " \"00575262fc54fb8a46fe59c5abc2b9c5229491da480df9f74aa6acb6954b24f7"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1632,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1632,
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
                "2.27.62.0/24",
                "2.56.192.0/22"
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
                "1[.]15[.]14[.]29",
                "1[.]189[.]248[.]116",
                "1[.]193[.]63[.]174",
                "1[.]193[.]63[.]239",
                "1[.]203[.]186[.]149"
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
            "iocCount": 16088,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 16088,
                "newInLastHour": 16088,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://193[.]178[.]158[.]57/bin/67dbf1a8e19934e4_thread_hijacking_cayOy4NB[.]exe",
                "hxxp://222[.]139[.]45[.]127:43346/i",
                "hxxp://113[.]236[.]70[.]177:42662/bin[.]sh",
                "hxxp://151[.]232[.]139[.]186:46040/bin[.]sh",
                "hxxp://175[.]151[.]218[.]17:33901/bin[.]sh"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 6891,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 6891,
                "newInLastHour": 6065,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"108[.]187[.]43[.]94:443\"",
                " \"9st40u0r1b[.]workers[.]dev\"",
                " \"cepeniso[.]workers[.]dev\"",
                " \"153[.]80[.]242[.]105:25\"",
                " \"154[.]92[.]252[.]60:8080\""
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
            "iocCount": 10582,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 10582,
                "newInLastHour": 3,
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
            "totalIndicators": 51703,
            "activeSources": 8,
            "criticalAlerts": 27988,
            "activeCampaigns": 262
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 17141,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "C2",
                "count": 10847,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 4565,
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
                "count": 16017,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://123[.]14[.]58[.]117:38572/bin[.]sh",
                    "hxxp://115[.]55[.]54[.]132:41453/i",
                    "hxxp://220[.]161[.]160[.]97:56313/i"
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
                    "1[.]15[.]14[.]29",
                    "1[.]189[.]248[.]116"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1691,
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
                "count": 1457,
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
                "count": 1328,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"141[.]255[.]166[.]178:80\"",
                    " \"141[.]255[.]166[.]178:443\"",
                    " \"153[.]80[.]242[.]105:8447\""
                ]
            },
            {
                "name": " \"js.iclickfix\"",
                "count": 1014,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"59na[.]com\"",
                    " \"kalooms[.]com\"",
                    " \"swfmedia[.]com\""
                ]
            },
            {
                "name": "Vidar",
                "count": 811,
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
                "count": 713,
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
        "fastestRisingThreat": "malware_download",
        "totalAttacksThisHour": 37537,
        "lastCalculated": "2026-10-03 03:57 IST"
    }
};
