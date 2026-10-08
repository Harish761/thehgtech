// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-10-08T11:22:38.670250+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-10-08T11:22:38.302193+05:30",
    "lastUpdatedFormatted": "Oct 08, 2026 at 11:22 AM IST",
    "comparisonPeriod": "Oct 07 \u2013 Oct 08, 2026",
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
                "hxxps://www[.]getfollowersinstant[.]blogspot[.]com/",
                "hxxps://getfollowersinstant[.]blogspot[.]com/",
                "hxxps://koa-chi[.]vercel[.]app/taxpayeeemakeeee[.]html",
                "hxxps://worker-throbbing-cake-edea[.]roseober17[.]workers[.]dev/",
                "hxxp://security-server-page--churchh738[.]replit[.]app/"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 1306,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 1306,
                "newInLastHour": 62,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"69dafc3b40a5b0e5eddc7cba6ec32ca7316b7e5405d8c6d5adfbccc4c06620c0",
                " \"0f37ed17ba77ce94b880e16f1e38464ebaf5cd907666cf75075df16d9a166092",
                " \"63d5297ab9ccc40d45877940e18d5403e26914f1d71b59fb973f667d9095df54",
                " \"f0157306c1872b748e2a1c4edc12b516e0786fa01c61e9903f67d120c6ae3a90",
                " \"d6db1449d533d851dd6bd2030a03ac857deb4eecf2067038d4dafb85ab14c320"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1669,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1669,
                "newInLastHour": 1150,
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
                "1[.]145[.]29[.]140",
                "1[.]179[.]41[.]48",
                "1[.]193[.]63[.]3",
                "1[.]20[.]218[.]10"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 4810,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 4810,
                "newInLastHour": 4810,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]0[.]164[.]165",
                "1[.]117[.]24[.]10",
                "1[.]14[.]192[.]95",
                "1[.]14[.]240[.]247",
                "1[.]145[.]25[.]235"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 31765,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 31765,
                "newInLastHour": 31765,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxps://raw[.]githubusercontent[.]com/clatthys/EulenCheats-FiveM/HEAD/Loader[.]exe",
                "hxxps://raw[.]githubusercontent[.]com/ys3ngd/WarzoneExternalCheat/HEAD/Loader[.]exe",
                "hxxps://raw[.]githubusercontent[.]com/comptess/Exodus-Larp-Tool/HEAD/Exodus[.]exe",
                "hxxps://raw[.]githubusercontent[.]com/anniselth/FiveM-Mod-Menu/HEAD/Loader[.]exe",
                "hxxps://raw[.]githubusercontent[.]com/hannerlys/Swift-Executor/HEAD/Swift[.]exe"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 8143,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 8143,
                "newInLastHour": 7336,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"c0a8657812d38d49f796266003043b604826dbfb358b9167e520fb0949762be1\"",
                " \"hxxps://ikovrsps[.]com/Ikov[.]jar\"",
                " \"hxxps://ikovrsps[.]com/sikeikovnew[.]php\"",
                " \"hxxps://ikovrsps[.]com/siketxtikov[.]php\"",
                " \"hxxps://ikovrsps[.]com/gamefiles/image[.]exe\""
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
            "iocCount": 10914,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 10914,
                "newInLastHour": 210,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "001a8f07b150e2b1d6bcb715fd95c20a1e24dac3",
                "97b346a6656f38507fae979537c0baa86186a2d7",
                "a095f06a7ac8b272c1dd2e14e3b2508f4e4f86e3",
                "59478ff95804dce8ca9ac41fab9bee313879a882",
                "0f7363fdd9210d5cdcc0c7fa60a88b4a582fef18"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 67756,
            "activeSources": 8,
            "criticalAlerts": 43526,
            "activeCampaigns": 299
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 32834,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "C2",
                "count": 10692,
                "trend": "stable",
                "percentage": -1
            },
            {
                "category": "Botnet",
                "count": 4362,
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
                "count": 31461,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://222[.]79[.]177[.]52:34777/i",
                    "hxxp://61[.]52[.]132[.]92:56698/i",
                    "hxxp://115[.]57[.]255[.]84:48268/bin[.]sh"
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
                "name": " \"unknown_loader\"",
                "count": 1788,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"www[.]crookedhousebooks[.]com\"",
                    " \"www[.]daveshootsbookseller[.]com\"",
                    " \"www[.]diversitybooks[.]com[.]au\""
                ]
            },
            {
                "name": "AsyncRAT",
                "count": 1449,
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
                "count": 1285,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"114[.]215[.]184[.]158:8000\"",
                    " \"hxxp://69[.]49[.]229[.]88:443/MQEw\"",
                    " \"154[.]12[.]17[.]20:8080\""
                ]
            },
            {
                "name": "Vidar",
                "count": 756,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "0f7363fdd9210d5cdcc0c7fa60a88b4a582fef18",
                    "6bfc8dafb875c3e2ae6476df215805eb15298cbb",
                    "7a9913813778b16a5bf57aeb7dea4c93340c79c0"
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
                "count": 702,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "b292d5884328be709c0c79ffd7c82c3fe9846417",
                    "eabc77465bebeb1b8b4980dbaa185cfcf64b4f92",
                    "4768d20d3072a30b168c650b11a9e4d3e1a0dc60"
                ]
            },
            {
                "name": " \"js.clearfake\"",
                "count": 650,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"aacarrentals[.]com\"",
                    " \"tivex[.]store\"",
                    " \"letmeliveit[.]com\""
                ]
            },
            {
                "name": " \"win.pure_rat\"",
                "count": 631,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"93[.]152[.]214[.]174:443\"",
                    " \"84[.]200[.]91[.]170:56002\"",
                    " \"80[.]76[.]49[.]209:8080\""
                ]
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious URLs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": "Spamhaus DROP List",
        "totalAttacksThisHour": 60638,
        "lastCalculated": "2026-10-08 11:22 IST"
    }
};
