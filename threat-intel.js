// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-09-26T03:15:49.284766+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-09-26T03:15:48.955120+05:30",
    "lastUpdatedFormatted": "Sep 26, 2026 at 03:15 AM IST",
    "comparisonPeriod": "Sep 25 \u2013 Sep 26, 2026",
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
                "hxxp://yard749[.]pages[.]dev/",
                "hxxps://idshopee-59[.]blogspot[.]com/",
                "hxxps://security-server-landing-page--ginola080[.]replit[.]app/",
                "hxxps://tinyurl[.]com/2s3bx93x",
                "hxxps://trustpass[.]fun/o/fz204/7333160350973952#selectedbank9"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 2112,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 2112,
                "newInLastHour": 41,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"17eccec26d1a4709dc43c9ef9f53d46033b88c25caf940d90bc451c6d8318719",
                " \"cf14fdbf5ac7247f5a96514e17c41b75c835f85b2bfd11d7f32407a19385873d",
                " \"0509a93983b51d8950ebfe3f098ab32e92794e610c36335c485472f6de48ff06",
                " \"557d08df35639c87683d146da715c9310eb50a994c2ef794fe9a4a96285bb1eb",
                " \"9a9f85c5a49ed771ffa3fdd4c6f22d1f48e3035827278a58d4299c13c1b2e1ab"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1709,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1709,
                "newInLastHour": 61,
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
                "1[.]193[.]58[.]176",
                "1[.]193[.]63[.]81",
                "1[.]20[.]175[.]56"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 5019,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 5019,
                "newInLastHour": 5019,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]0[.]164[.]165",
                "1[.]161[.]144[.]132",
                "1[.]179[.]158[.]74",
                "1[.]203[.]186[.]149",
                "1[.]214[.]214[.]114"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 14611,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 14611,
                "newInLastHour": 14611,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://113[.]230[.]103[.]110:56084/bin[.]sh",
                "hxxp://42[.]224[.]103[.]52:47712/i",
                "hxxp://115[.]53[.]36[.]29:33277/bin[.]sh",
                "hxxp://115[.]55[.]239[.]220:44596/bin[.]sh",
                "hxxp://42[.]224[.]96[.]58:52702/i"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 8717,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 8717,
                "newInLastHour": 8333,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"hxxps://testingcf[.]jsdelivr[.]net/gh/retwiry2536/9cC-a0B-7651B8ba-2-5bc-4-6/1Ec-595d-335\"",
                " \"xupasyda[.]workers[.]dev\"",
                " \"vdlvfw2krt[.]workers[.]dev\"",
                " \"www[.]desevillanasmaneras[.]es\"",
                " \"www[.]jtamortgage[.]com\""
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
            "iocCount": 10808,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 10808,
                "newInLastHour": 290,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "6769e788ce8fb4744dfb2ca047f4aa428ed075d5",
                "638b07a5521bc5b2de50dbed49e7eedcf451d838",
                "8130921b7ab8a3ed5d7df7dbedd7a583a7e55b8f",
                "389be5fc932b66d82d59d3b499a37cb540fdb62c",
                "9f25b7b257319fcbba26fb666fb9fb139e6b1100"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 52936,
            "activeSources": 8,
            "criticalAlerts": 27207,
            "activeCampaigns": 270
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 16711,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "C2",
                "count": 10496,
                "trend": "stable",
                "percentage": -2
            },
            {
                "category": "Botnet",
                "count": 4213,
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
                "name": "CINS Threat List",
                "count": 15000,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]12[.]229[.]231",
                    "1[.]15[.]14[.]29",
                    "1[.]193[.]58[.]176"
                ]
            },
            {
                "name": "malware_download",
                "count": 14570,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://61[.]53[.]122[.]4:56888/i",
                    "hxxp://105[.]224[.]56[.]236:51453/i",
                    "hxxp://60[.]186[.]209[.]6:47036/i"
                ]
            },
            {
                "name": " \"unknown_loader\"",
                "count": 1879,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"anthoniaeg[.]com\"",
                    " \"barrosoebarroso[.]adv[.]br\"",
                    " \"businesstoday[.]id\""
                ]
            },
            {
                "name": " \"js.iclickfix\"",
                "count": 1678,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"jedinstvopd[.]com\"",
                    " \"joanperemassana[.]com\"",
                    " \"julianoferrari[.]com[.]br\""
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1648,
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
                "count": 1439,
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
                "count": 1365,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"91[.]92[.]47[.]99:8088\"",
                    " \"47[.]114[.]83[.]19:1234\"",
                    " \"101[.]43[.]53[.]103:9123\""
                ]
            },
            {
                "name": " \"Mirai",
                "count": 1249,
                "types": [
                    "hash"
                ],
                "sampleIndicators": [
                    " \"7acce9503f657d38667113c8fe5dccd12855fe49766e050d4952408ab027ed2c",
                    " \"6828e6b6398b94ff7f6ca09f511561ad862c2936e860b262b8c1a6c23cd136ad",
                    " \"2bc3e8797f232baeecc0c0c2a236577dc955da8bcfb5c67fa5f56fe5fccb1214"
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
                "count": 717,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "a4138cfc3c588247705c5cba498d35324463dfa2",
                    "06ba62804f9d40f0ffb38ecd4c42b0229921cbde",
                    "fd081cbaf79596b443b9d591f9dd1390268db7f0"
                ]
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious URLs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": "Vidar",
        "totalAttacksThisHour": 43660,
        "lastCalculated": "2026-09-26 03:15 IST"
    }
};
