// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-10-17T23:54:48.267082+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-10-17T23:54:47.836255+05:30",
    "lastUpdatedFormatted": "Oct 17, 2026 at 11:54 PM IST",
    "comparisonPeriod": "Oct 16 \u2013 Oct 17, 2026",
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
            "iocCount": 821,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 821,
                "newInLastHour": 155,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"607d55dbf8bb57d6557ad1d39df67d887ab5747a5d5d2ebb5ac6d0764252c1ad",
                " \"fcea054d899e718be63ddfe1107e65d00cca9f32850c5d950df649f44122fbdd",
                " \"82eba36c8ac1613f451333eae4bff558e53cf814938d4b181790644371400eec",
                " \"29b9e559fcfd59c54f49b366b8ae6982bf8262a5ab3401e31da72f6a3e826808",
                " \"5144bdcbafac26bd8f1474087f2133561c8a18edf1936a91f197957500c5f91b"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1631,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1631,
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
                "1[.]179[.]240[.]111",
                "1[.]183[.]41[.]171",
                "1[.]189[.]248[.]116",
                "1[.]193[.]57[.]156",
                "1[.]215[.]138[.]43"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 4464,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 4464,
                "newInLastHour": 4464,
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
            "iocCount": 33549,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 33549,
                "newInLastHour": 33549,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://222[.]142[.]211[.]129:50366/bin[.]sh",
                "hxxp://182[.]121[.]159[.]82:36890/bin[.]sh",
                "hxxp://60[.]23[.]235[.]147:58183/i",
                "hxxp://96[.]246[.]230[.]97:33953/i",
                "hxxp://115[.]50[.]248[.]32:50774/i"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 8205,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 8205,
                "newInLastHour": 6699,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"hxxp://190[.]196[.]253[.]121:10311/Mozi[.]a\"",
                " \"hxxp://190[.]196[.]253[.]82:11938/Mozi[.]a\"",
                " \"hxxp://113[.]238[.]162[.]54:52041/Mozi[.]m\"",
                " \"f6786557765875ccaeb53419708587920fa3049f8c0549b38805d147ba00025c\"",
                " \"hxxps://v4[.]988boss[.]org/aa/\""
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
            "iocCount": 10675,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 10675,
                "newInLastHour": 3,
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
            "totalIndicators": 70506,
            "activeSources": 8,
            "criticalAlerts": 45168,
            "activeCampaigns": 284
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 34222,
                "trend": "stable",
                "percentage": 1
            },
            {
                "category": "C2",
                "count": 10946,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 5648,
                "trend": "stable",
                "percentage": -5
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
                "count": 33475,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://103[.]125[.]174[.]116:33940/i",
                    "hxxp://45[.]198[.]224[.]164/i486",
                    "hxxp://45[.]198[.]224[.]164/x86"
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
                    "1[.]14[.]149[.]30",
                    "1[.]15[.]14[.]29"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1690,
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
                "count": 1459,
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
                "name": " \"win.vidar\"",
                "count": 1319,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"hxxps://n1[.]8mytogel[.]org/eq/\"",
                    " \"hxxps://n1[.]8mytogel[.]org/tq/\"",
                    " \"hxxps://n1[.]8mytogel[.]org/h8/\""
                ]
            },
            {
                "name": " \"win.cobalt_strike\"",
                "count": 1273,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"117[.]72[.]220[.]70:443\"",
                    " \"117[.]72[.]220[.]70:80\"",
                    " \"117[.]72[.]220[.]70:8080\""
                ]
            },
            {
                "name": "Vidar",
                "count": 839,
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
                "count": 719,
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
                "count": 678,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"391115a107f6d8ea9972676a7bf7e562317a50fff50eed3ba1b60be2eeb2c9ab\"",
                    " \"70c319b54e0697612f261285d54a6e6265b9128a63c8fed92a1856726527ab48\"",
                    " \"46c094a3b1943d87f70378f5957fecb60cc1d551f6ce19fdee3f9c29630c721d\""
                ]
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious URLs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": " \"Mirai",
        "totalAttacksThisHour": 60176,
        "lastCalculated": "2026-10-17 23:54 IST"
    }
};
