// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-10-03T02:09:21.106859+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-10-03T02:09:20.845298+05:30",
    "lastUpdatedFormatted": "Oct 03, 2026 at 02:09 AM IST",
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
            "iocCount": 1098,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 1098,
                "newInLastHour": 109,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"f1f30b60d24e42833a318e7c72110bf78d6d657fdbbd131fb9c720d81f0d25f0",
                " \"978d772094a988c3f9ac9f0d2eb68a1c03d22f0a6d3e0281090eb30944553569",
                " \"024dfa6ea07d68814dfceb237548715e1c08aa446e75da00ade8ee97ec9e1f4e",
                " \"18ad044a2922712d59dd21a51b060f9c0a05926bc2afc789d50d01b698d8abcc",
                " \"1f6a629f4fe0c5b61a11d9fe985c0c806e7358111857901c6a7a4744424cd1d5"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1691,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1691,
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
                "1[.]12[.]229[.]231",
                "1[.]15[.]14[.]29",
                "1[.]189[.]248[.]116",
                "1[.]193[.]56[.]152",
                "1[.]193[.]63[.]239"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 723,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 723,
                "newInLastHour": 723,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]0[.]164[.]165",
                "1[.]222[.]42[.]237",
                "1[.]95[.]187[.]152",
                "101[.]47[.]13[.]135",
                "101[.]47[.]156[.]170"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 16017,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 16017,
                "newInLastHour": 16017,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://123[.]14[.]58[.]117:38572/bin[.]sh",
                "hxxp://115[.]55[.]54[.]132:41453/i",
                "hxxp://220[.]161[.]160[.]97:56313/i",
                "hxxp://115[.]57[.]199[.]235:49961/i",
                "hxxp://77[.]79[.]160[.]210:35699/i"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 6723,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 6723,
                "newInLastHour": 6084,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"mebimaqe[.]workers[.]dev\"",
                " \"154[.]89[.]152[.]200:3306\"",
                " \"hxxp://prility[.]top:9932/contacts\"",
                " \"hxxp://visnary[.]my:5621/reports\"",
                " \"apulostereo[.]com\""
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
            "iocCount": 10869,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 10869,
                "newInLastHour": 21,
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
            "totalIndicators": 51288,
            "activeSources": 8,
            "criticalAlerts": 27830,
            "activeCampaigns": 262
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 17001,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "C2",
                "count": 10829,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 4597,
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
                "count": 15792,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://223[.]151[.]253[.]6:48039/i",
                    "hxxp://60[.]22[.]148[.]175:58364/bin[.]sh",
                    "hxxp://180[.]190[.]202[.]146:46282/i"
                ]
            },
            {
                "name": "CINS Threat List",
                "count": 15000,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]117[.]171[.]170",
                    "1[.]12[.]229[.]231",
                    "1[.]15[.]14[.]29"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1692,
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
                "count": 1323,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"159[.]75[.]202[.]228:443\"",
                    " \"141[.]255[.]166[.]178:8080\"",
                    " \"47[.]95[.]201[.]24:9443\""
                ]
            },
            {
                "name": " \"js.iclickfix\"",
                "count": 877,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"lucid-prism-gliatteoon[.]top\"",
                    " \"coral-thistle-kilmkruon[.]top\"",
                    " \"hxxps://www[.]elicamp[.]de/\""
                ]
            },
            {
                "name": "Vidar",
                "count": 805,
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
                "count": 624,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"78[.]17[.]25[.]46:56002\"",
                    " \"45[.]139[.]104[.]199:55006\"",
                    " \"149[.]88[.]76[.]74:444\""
                ]
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious URLs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": "malware_download",
        "totalAttacksThisHour": 38259,
        "lastCalculated": "2026-10-03 02:09 IST"
    }
};
