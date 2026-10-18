// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-10-19T00:04:52.972920+05:30 IST (2026-10-18 18:34 UTC)
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-10-19T00:04:52.455098+05:30",
    "lastUpdatedFormatted": "Oct 19, 2026 at 12:04 AM IST",
    "lastUpdatedUtc": "2026-10-18 18:34 UTC",
    "comparisonPeriod": "Oct 18 \u2013 Oct 19, 2026",
    "stats": {
        "totalIOCs": 0,
        "byType": {
            "url": 0,
            "ip": 0,
            "hash": 0,
            "domain": 0,
            "ssl-cert": 0,
            "ip-range": 0
        },
        "byVendor": {
            "OpenPhish": 0,
            "Malware Bazaar": 0,
            "Spamhaus DROP": 0,
            "CINS Army": 0,
            "Blocklist.de": 0,
            "URLhaus": 0,
            "ThreatFox": 0,
            "Feodo Tracker": 0,
            "SSL Blacklist": 0
        },
        "topMalware": [],
        "recentIOCs": [],
        "lastUpdated": "2026-10-19T00:04:52.455098+05:30",
        "lastUpdatedFormatted": "Oct 19, 2026 at 12:04 AM IST",
        "lastUpdatedUtc": "2026-10-18 18:34 UTC"
    },
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
                "lastUpdate": "2026-10-18 18:34 UTC"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://www[.]roblox[.]ly/users/1036952856/profile",
                "hxxp://digitley-dhl[.]azurewebsites[.]net/login",
                "hxxps://www[.]roblox[.]com[.]ml/games/9872472334/HLWN-Evade?privateServerLinkCode=384328757637766641742433182819",
                "hxxps://tiktokvip[.]cyou/",
                "hxxp://rss2[.]sayler[.]at/go/z2b4u2/z274y274"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 1830,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 1830,
                "newInLastHour": 924,
                "lastUpdate": "2026-10-18 18:34 UTC"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                "d01d6a5ae13395dbb373d81898a808df3c927f1356573b6a077cabd4fa8968f6",
                "594da4cf0e1c77ac193abbb3753392725c6cb7c767b8576553383277cfdfe575",
                "55e752670ec450ecb29c3c21f3f683e13ce7d51d0025fcff2c5f7d70ee045487",
                "1d78a96f98a707c3aaba5badf6caea0f0296fcb8de09134a41899800243a1651",
                "9af7b019d2eec68e5ac23de89013dcae5c850a60afcdb56fe6f7d782818f869e"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1690,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1690,
                "newInLastHour": 0,
                "lastUpdate": "2026-10-18 18:34 UTC"
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
            "iocCount": 18768,
            "iocDataUrl": "https://thehgtech.com/ioc-data/cins-army.json",
            "stats": {
                "total": 18768,
                "newInLastHour": 15000,
                "lastUpdate": "2026-10-18 18:34 UTC"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]12[.]229[.]231",
                "1[.]14[.]149[.]30",
                "1[.]179[.]240[.]111",
                "1[.]192[.]129[.]106",
                "1[.]193[.]57[.]156"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 4645,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 4645,
                "newInLastHour": 4392,
                "lastUpdate": "2026-10-18 18:34 UTC"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]14[.]240[.]247",
                "1[.]214[.]214[.]114",
                "1[.]222[.]42[.]237",
                "1[.]234[.]23[.]83",
                "1[.]238[.]106[.]229"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 33603,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 33603,
                "newInLastHour": 33603,
                "lastUpdate": "2026-10-18 18:34 UTC"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://115[.]50[.]38[.]196:33047/i",
                "hxxp://42[.]226[.]69[.]140:56903/i",
                "hxxp://182[.]113[.]209[.]116:49963/i",
                "hxxp://42[.]226[.]64[.]166:42549/i",
                "hxxp://182[.]119[.]14[.]2:35763/i"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 14039,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 14039,
                "newInLastHour": 6592,
                "lastUpdate": "2026-10-18 18:34 UTC"
            },
            "types": [
                "url",
                "hash",
                "domain",
                "ip"
            ],
            "sampleIndicators": [
                "hxxps://b[.]9windaftar[.]com/bp/",
                "ezn9tfkz[.]bewiseimmunize[.]com",
                "hxxps://b[.]9windaftar[.]com/ti/",
                "hxxp://190[.]196[.]253[.]19:11864/Mozi[.]m",
                "hxxp://176[.]65[.]139[.]76/bins/mips"
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
                "lastUpdate": "2026-10-18 18:34 UTC"
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
            "iocCount": 10995,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 10995,
                "newInLastHour": 0,
                "lastUpdate": "2026-10-18 18:34 UTC"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "38151a6b2438b2b645a27a891e1e15786f11a783",
                "eaefd82da94ee8839666b2a42d24dcc412d7de3c",
                "e2234aa66c80b118b69211f6e8f4efbd578a7587",
                "e2dbc11a546d739d12e547c38cdb4fd6cfacd4c4",
                "b97f1ae860fce04e1aae480e10b884da9826b17b"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 74247,
            "activeSources": 9,
            "criticalAlerts": 45418,
            "activeCampaigns": 265
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 34443,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "C2",
                "count": 10975,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 4926,
                "trend": "stable",
                "percentage": 0
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
                "percentage": 99
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
                "count": 33512,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxps://cdk[.]monther[.]life/DvnX[.]zip",
                    "hxxp://64[.]235[.]41[.]83/AI",
                    "hxxp://178[.]132[.]198[.]200/bins[.]sh"
                ]
            },
            {
                "name": "CINS Threat List",
                "count": 15000,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]117[.]58[.]215",
                    "1[.]12[.]229[.]231",
                    "1[.]14[.]149[.]30"
                ]
            },
            {
                "name": "SSH Attacks",
                "count": 4389,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]117[.]72[.]220",
                    "1[.]14[.]240[.]247",
                    "1[.]214[.]214[.]114"
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
                "name": " \"win.cobalt_strike\"",
                "count": 1265,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"140[.]143[.]193[.]143:443\"",
                    " \"118[.]26[.]111[.]141:80\"",
                    " \"118[.]26[.]111[.]141:8080\""
                ]
            },
            {
                "name": "Vidar",
                "count": 847,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "4fcc8c0172b376ebfc85d644c5f64f7cd60321a5",
                    "19f54af30146108b291727f6f4cfb6339b1c8f86",
                    "5189412bc415fe1fb2272c297498a47d2d160601"
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
                "count": 721,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "97001686e56437dda319c71d5b0deeb8647de6e3",
                    "5758a152f5bc1f96581c6530488f830766c45c96",
                    "650f90b14ecb5dc0160ea61d0620402c075c2f3d"
                ]
            },
            {
                "name": " \"elf.mirai\"",
                "count": 703,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"96ae59861488057af96d1ef61f9afa73fb3b46684d941e0d92de0a33e892b879\"",
                    " \"5a97ccdebd3aceeee438032c9e264df20ee41d30d1e4b87f5eb04ed05a234387\"",
                    " \"93d89d70e6882448f1a727922d0eabc413f235ff14dde23f7e1da9d769a987fb\""
                ]
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious URLs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": "CINS Threat List",
        "totalAttacksThisHour": 60816,
        "lastCalculated": "2026-10-19 00:04 IST"
    }
};
