// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-10-18T15:18:26.195738+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-10-18T15:18:25.879786+05:30",
    "lastUpdatedFormatted": "Oct 18, 2026 at 03:18 PM IST",
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
                "hxxp://roblox[.]com[.]et/users/7999205213/profile",
                "hxxp://danaid[.]httpz[.]biz[.]id/",
                "hxxps://vinted-check[.]com/238874013",
                "hxxps://intokken[.]com/",
                "hxxps://rbcode[.]net/v/4cfdcf48ff6172d39bd47d7e28a8c7d0"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 917,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 917,
                "newInLastHour": 190,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"eae054b5afd8d1e49222ecaeafb9a753579c9b3ed1e0f543883cfdcb50f56c8d",
                " \"df7d917f62ca520b735dbdf2ebafc79a74fc57581d34bdb755c83e002bd39d09",
                " \"92da3ae00d6754c0fb139d9793323d5d5e52afe3acaa21b446c31fd338cef70e",
                " \"f508cea64889f952bf2f7e01b611c6a0cdb99796a417558d4dbe3accde4c0f09",
                " \"ce1729f9d953b8322612472511feacf62b152b4a31da39706e0e6a6735a26743"
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
                "1[.]117[.]58[.]215",
                "1[.]12[.]229[.]231",
                "1[.]14[.]149[.]30",
                "1[.]179[.]240[.]111",
                "1[.]192[.]129[.]106"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 4407,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 4407,
                "newInLastHour": 4407,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]117[.]72[.]220",
                "1[.]14[.]240[.]247",
                "1[.]214[.]214[.]114",
                "1[.]222[.]42[.]237",
                "1[.]234[.]23[.]83"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 33452,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 33452,
                "newInLastHour": 33452,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://222[.]140[.]227[.]97:55257/bin[.]sh",
                "hxxp://94[.]137[.]37[.]252:3344/i",
                "hxxp://125[.]42[.]26[.]110:42454/i",
                "hxxp://193[.]233[.]75[.]14/BK6E6L[.]exe",
                "hxxp://193[.]233[.]75[.]14/svchosts[.]exe"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 7428,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 7428,
                "newInLastHour": 6128,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"45[.]139[.]104[.]48:49001\"",
                " \"45[.]137[.]194[.]219:5000\"",
                " \"34[.]58[.]3[.]174:6932\"",
                " \"31[.]76[.]96[.]157:50357\"",
                " \"202[.]146[.]222[.]229:4443\""
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
            "iocCount": 10949,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 10949,
                "newInLastHour": 1,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "7ef960d6cfa5bae388a927a5e20f9238bcb22f92",
                "0922f0b5df139ddc07c5f43fea6d84c885ecc833",
                "09545cca9c36c76f4982c4b648041a1606799b53",
                "d333c0b7e380afd2f156555b8110c00177b62e5d",
                "e6c0468f46efe40f3127d33641bfc3df8b2e5c7d"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 69924,
            "activeSources": 8,
            "criticalAlerts": 45003,
            "activeCampaigns": 274
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 34054,
                "trend": "stable",
                "percentage": -1
            },
            {
                "category": "C2",
                "count": 10949,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 5090,
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
                "count": 33228,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://175[.]165[.]82[.]242:39646/i",
                    "hxxp://182[.]126[.]91[.]187:35575/i",
                    "hxxp://182[.]119[.]1[.]174:58757/i"
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
                    "1[.]14[.]149[.]30",
                    "1[.]179[.]240[.]111"
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
                "count": 1268,
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
                "count": 858,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"hxxps://hm[.]9nawin[.]org/kv/\"",
                    " \"hxxps://hm[.]9nawin[.]org/eo/\"",
                    " \"hxxps://igb[.]9nawin[.]org/hz/\""
                ]
            },
            {
                "name": "Vidar",
                "count": 840,
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
                "name": " \"unknown\"",
                "count": 758,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"159[.]75[.]118[.]45:5003\"",
                    " \"hxxps://naharamritshakti[.]com/\"",
                    " \"hxxps://bj66vn[.]com/\""
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
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious URLs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": "malware_download",
        "totalAttacksThisHour": 59483,
        "lastCalculated": "2026-10-18 15:18 IST"
    }
};
