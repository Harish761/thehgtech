// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-10-14T10:13:53.355674+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-10-14T10:13:52.861243+05:30",
    "lastUpdatedFormatted": "Oct 14, 2026 at 10:13 AM IST",
    "comparisonPeriod": "Oct 13 \u2013 Oct 14, 2026",
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
                "hxxps://handel[.]mobile[.]fahrzeuge[.]details[.]83477383[.]wm[.]sjqgvy[.]com/anfrangen/fahrzeug/",
                "hxxp://cp188[.]xyz/ww/",
                "hxxp://notaria11medellin[.]com/chulo/index[.]html",
                "hxxps://sk[.]yndssh[.]com/auth/",
                "hxxps://crownhillconsults[.]com/rfq"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 1132,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 1132,
                "newInLastHour": 54,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"7a2feccbbd016be9a383025f686c8fc44bcdbb7a175b9591cf743bca7bafd82f",
                " \"210f503fcd5cc49a20fee4f24e818e4849647b70f95d5509df883a2a24c656ad",
                " \"356bc40535d47f90369c6c930a6b91c74d5e5bcb1ad720947ce1721850cbcfd9",
                " \"0d10e8c243c9d13a8deee26c21d7b4fdd824bc6c6d83a465dab25c58ec0a906f",
                " \"fe0c806aa688e618d9c9c2ec60a339cbc3522c2d5c61c186938c630171f531c1"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1681,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1681,
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
                "1[.]193[.]58[.]33",
                "1[.]20[.]173[.]155",
                "1[.]215[.]138[.]43",
                "1[.]24[.]16[.]102",
                "1[.]24[.]16[.]106"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 4164,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 4164,
                "newInLastHour": 4164,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]0[.]164[.]165",
                "1[.]14[.]240[.]247",
                "1[.]15[.]221[.]192",
                "1[.]178[.]138[.]99",
                "1[.]2[.]225[.]235"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 33779,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 33779,
                "newInLastHour": 33779,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://27[.]204[.]195[.]222:57287/i",
                "hxxp://123[.]11[.]15[.]92:59026/i",
                "hxxp://119[.]179[.]215[.]124:50774/i",
                "hxxp://105[.]224[.]11[.]179:40617/bin[.]sh",
                "hxxps://rxb[.]immortales[.]fun/DivX[.]zip"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 7962,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 7962,
                "newInLastHour": 7021,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"ahzro54047[.]workers[.]dev\"",
                " \"hxxps://bk[.]77777w[.]net/t\"",
                " \"hxxps://bk[.]77777w[.]net/n\"",
                " \"hxxps://bk[.]77777w[.]net/nz/\"",
                " \"hxxps://bk[.]77777w[.]net/nz\""
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
            "iocCount": 10965,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 10965,
                "newInLastHour": 0,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "e6c0468f46efe40f3127d33641bfc3df8b2e5c7d",
                "4664c47d412c00bf067a325ffa9790db75efbe75",
                "b3c1e060a727e4db1cf6131f1eb6e9bcca2ffb5d",
                "11cfb1e85c316e9b9785c6778bc077bb04093dfd",
                "c389945d4fc75250b291953e0abad0662dd9ce7d"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 71031,
            "activeSources": 8,
            "criticalAlerts": 46219,
            "activeCampaigns": 290
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 35273,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "C2",
                "count": 10946,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 5823,
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
                "count": 34090,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://42[.]86[.]75[.]61:45923/i",
                    "hxxp://60[.]177[.]206[.]221:36365/i",
                    "hxxp://101[.]108[.]6[.]212:40608/bin[.]sh"
                ]
            },
            {
                "name": "CINS Threat List",
                "count": 15000,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]14[.]149[.]30",
                    "1[.]145[.]29[.]140",
                    "1[.]183[.]41[.]171"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1681,
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
                "count": 1372,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"hxxps://s8[.]77777w[.]net/yx\"",
                    " \"hxxps://s8[.]77777w[.]net/c5\"",
                    " \"hxxps://s8[.]77777w[.]net/ls/\""
                ]
            },
            {
                "name": " \"win.cobalt_strike\"",
                "count": 1318,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"49[.]233[.]181[.]236:8426\"",
                    " \"47[.]74[.]43[.]122:22\"",
                    " \"47[.]74[.]43[.]122:23817\""
                ]
            },
            {
                "name": "Vidar",
                "count": 837,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "c389945d4fc75250b291953e0abad0662dd9ce7d",
                    "515574d4dc4957fbd0043d3a4269485384e504e7",
                    "51f9d6339bfdb9321630392913941e04d921cf7d"
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
                "name": " \"win.pure_rat\"",
                "count": 635,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"91[.]219[.]236[.]214:443\"",
                    " \"89[.]190[.]158[.]87:4444\"",
                    " \"5[.]189[.]168[.]42:20002\""
                ]
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious URLs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": " \"win.vidar\"",
        "totalAttacksThisHour": 60323,
        "lastCalculated": "2026-10-14 10:13 IST"
    }
};
