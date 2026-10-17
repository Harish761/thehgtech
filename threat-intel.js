// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-10-18T02:20:41.600408+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-10-18T02:20:41.280827+05:30",
    "lastUpdatedFormatted": "Oct 18, 2026 at 02:20 AM IST",
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
            "iocCount": 803,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 803,
                "newInLastHour": 28,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"5e47989ec2b85caab9939ca63da53a25ee6eb9785312703355ea35138aae7e0e",
                " \"d511a6087f45b91342e8ed169c3997e22f91a0904c40f995903f52a550e43c47",
                " \"6ec9f8aed6a32b8565342e2adbe77e4f49d05b3de0d39a21962e614824f5baf9",
                " \"0fcebbdd5cf711270707f7c15081c410909cf4a2971d4765bfafd3f2a9ee5925",
                " \"d037f5a5cb2292237031ca99439f56184aff3439062d952b412c8ce5539ada06"
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
                "1[.]15[.]14[.]29",
                "1[.]192[.]129[.]106",
                "1[.]193[.]57[.]156",
                "1[.]215[.]138[.]43"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 4490,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 4490,
                "newInLastHour": 4490,
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
            "iocCount": 33595,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 33595,
                "newInLastHour": 33595,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://120[.]84[.]228[.]184:53253/i",
                "hxxp://123[.]10[.]239[.]193:60115/i",
                "hxxp://222[.]136[.]20[.]242:37934/i",
                "hxxp://39[.]79[.]105[.]143:33639/i",
                "hxxp://77[.]39[.]19[.]233:48646/i"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 7964,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 7964,
                "newInLastHour": 6488,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"796fd2f47ba19b912e7923cf2cf8225869a29459b330dad294ff54a923337761\"",
                " \"teamcase[.]it\"",
                " \"tecnobrasautomacao[.]com[.]br\"",
                " \"thewestybor[.]com\"",
                " \"theyouthtakeoverproject[.]org\""
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
            "iocCount": 10846,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 10846,
                "newInLastHour": 296,
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
            "totalIndicators": 70186,
            "activeSources": 8,
            "criticalAlerts": 45048,
            "activeCampaigns": 285
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 34395,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "C2",
                "count": 10653,
                "trend": "stable",
                "percentage": -2
            },
            {
                "category": "Botnet",
                "count": 5472,
                "trend": "stable",
                "percentage": -3
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
                "count": 33549,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://222[.]142[.]211[.]129:50366/bin[.]sh",
                    "hxxp://182[.]121[.]159[.]82:36890/bin[.]sh",
                    "hxxp://60[.]23[.]235[.]147:58183/i"
                ]
            },
            {
                "name": "CINS Threat List",
                "count": 15000,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]179[.]240[.]111",
                    "1[.]183[.]41[.]171",
                    "1[.]189[.]248[.]116"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1631,
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
                "count": 1446,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "58b3990b07e9caaa2c504a5b9759d14eefcbc5e5",
                    "64c5f719aa0111be2ac04d785a8904b5baa22a88",
                    "5fe196813d0bf092a5d8f3ef550fe959a86ccf87"
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
                "count": 1168,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"hxxps://v4[.]988boss[.]org/aa/\"",
                    " \"hxxps://v4[.]988boss[.]org/c/\"",
                    " \"w1[.]88idn[.]net\""
                ]
            },
            {
                "name": "Vidar",
                "count": 753,
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
                "count": 705,
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
                "count": 683,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"b7e1ce9255b89d08c5e95749f72993b8b50cfff17ee17f843dee947e873c8212\"",
                    " \"b193d8be2829268a360f1bbe57c99e9776b5fb2c8ee1c8332f99a136f9b1bd70\"",
                    " \"a47a7015e8a147b38d1b1a8805abfeba72ce5dc7730fe997eff8b59eff663338\""
                ]
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious URLs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": " \"js.iclickfix\"",
        "totalAttacksThisHour": 60262,
        "lastCalculated": "2026-10-18 02:20 IST"
    }
};
