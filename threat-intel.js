// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-10-18T03:42:21.825864+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-10-18T03:42:21.430192+05:30",
    "lastUpdatedFormatted": "Oct 18, 2026 at 03:42 AM IST",
    "comparisonPeriod": "Oct 17 \u2013 Oct 18, 2026",
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
                "hxxp://netflix-clone-gamma[.]vercel[.]app/",
                "hxxps://rbcode[.]net/v/1ad1bbb204af65886dc43daa49cdcf19",
                "hxxps://s4w[.]in/roblox-com-games-2753915549-Blox-FruitsprivateServerLinkCode=15587938948810815525436529481543",
                "hxxp://nutflixcnm[.]netlify[.]app/",
                "hxxp://iphone-tracked[.]us/a[.]php"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 806,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 806,
                "newInLastHour": 29,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"a45d9932f01bc4fd5fe80558464fcb6848c025483acf5c1c7519d5471abecce4",
                " \"dfbb338d98a478d0ed46972fe03951e420b54933a47743005281183e2a1ed66c",
                " \"b886d2dade5e3e0e29aae79cd7b918599f9edec19c7b465bd62c31b8939c6689",
                " \"efcbc902526573131b2d6380639263df3af40de5eef0188957995e62deab4162",
                " \"6141ce3a41f35f753c23cb6240a47d70792557fe5e0e49920bf76b8e1b2cb949"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1633,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1633,
                "newInLastHour": 28,
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
                "1[.]14[.]149[.]30",
                "1[.]179[.]240[.]111",
                "1[.]183[.]41[.]171",
                "1[.]189[.]248[.]116"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 4453,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 4453,
                "newInLastHour": 4453,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]117[.]72[.]220",
                "1[.]14[.]240[.]247",
                "1[.]179[.]232[.]194",
                "1[.]214[.]214[.]114",
                "1[.]222[.]42[.]237"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 33615,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 33615,
                "newInLastHour": 33615,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://123[.]12[.]226[.]84:57201/i",
                "hxxp://216[.]126[.]86[.]6:48683/i",
                "hxxp://119[.]179[.]239[.]112:54832/bin[.]sh",
                "hxxp://42[.]225[.]205[.]23:45755/i",
                "hxxp://42[.]227[.]37[.]65:56329/i"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 8068,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 8068,
                "newInLastHour": 6572,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"y7[.]88idn[.]net\"",
                " \"hxxps://y7[.]88idn[.]net/\"",
                " \"hxxps://v1[.]988boss[.]org/z8/\"",
                " \"hxxps://y7[.]88idn[.]net\"",
                " \"hxxps://scentury[.]vn/\""
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
            "iocCount": 10934,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 10934,
                "newInLastHour": 125,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "0922f0b5df139ddc07c5f43fea6d84c885ecc833",
                "09545cca9c36c76f4982c4b648041a1606799b53",
                "d333c0b7e380afd2f156555b8110c00177b62e5d",
                "e6c0468f46efe40f3127d33641bfc3df8b2e5c7d",
                "4664c47d412c00bf067a325ffa9790db75efbe75"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 70176,
            "activeSources": 8,
            "criticalAlerts": 45247,
            "activeCampaigns": 276
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 34423,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "C2",
                "count": 10824,
                "trend": "stable",
                "percentage": 1
            },
            {
                "category": "Botnet",
                "count": 5314,
                "trend": "stable",
                "percentage": -2
            },
            {
                "category": "Phishing",
                "count": 302,
                "trend": "stable",
                "percentage": 0
            }
        ],
        "targetedSectors": [
            {
                "name": "General",
                "percentage": 98
            },
            {
                "name": "Tech",
                "percentage": 0
            },
            {
                "name": "Finance",
                "percentage": 0
            },
            {
                "name": "Government",
                "percentage": 0
            }
        ],
        "campaigns": [
            {
                "name": "malware_download",
                "count": 33595,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://120[.]84[.]228[.]184:53253/i",
                    "hxxp://123[.]10[.]239[.]193:60115/i",
                    "hxxp://222[.]136[.]20[.]242:37934/i"
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
                    "1[.]192[.]129[.]106"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1663,
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
                "count": 1451,
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
                "count": 1270,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"45[.]130[.]147[.]87:80\"",
                    " \"45[.]130[.]147[.]87:8080\"",
                    " \"45[.]130[.]147[.]87:443\""
                ]
            },
            {
                "name": " \"win.vidar\"",
                "count": 1078,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"hxxps://qj[.]988boss[.]org/p0/\"",
                    " \"hxxps://qj[.]988boss[.]org/uk/\"",
                    " \"hxxps://qj[.]988boss[.]org/x8/\""
                ]
            },
            {
                "name": "Vidar",
                "count": 812,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "0922f0b5df139ddc07c5f43fea6d84c885ecc833",
                    "09545cca9c36c76f4982c4b648041a1606799b53",
                    "d333c0b7e380afd2f156555b8110c00177b62e5d"
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
                "count": 714,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "650f90b14ecb5dc0160ea61d0620402c075c2f3d",
                    "64d01c8e86e0a3b51c270743879a1fe966af0db4",
                    "0f0a58e91f1c0f21ec7934e2f5e6b54187ed54be"
                ]
            },
            {
                "name": " \"elf.mirai\"",
                "count": 670,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"38[.]43[.]93[.]61:80\"",
                    " \"207ba61ec7b63cd3e5db41908de1ca3159238cdd74a965e6a81ce211cd586ebc\"",
                    " \"1b0286cedcf20b0df2c6916a6609d551b55c7812f427afa538f26e72eef9f88a\""
                ]
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious URLs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": " \"unknown\"",
        "totalAttacksThisHour": 60127,
        "lastCalculated": "2026-10-18 03:42 IST"
    }
};
