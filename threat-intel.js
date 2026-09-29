// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-09-30T05:08:59.933445+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-09-30T05:08:59.720141+05:30",
    "lastUpdatedFormatted": "Sep 30, 2026 at 05:08 AM IST",
    "comparisonPeriod": "Sep 29 \u2013 Sep 30, 2026",
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
                "hxxps://douyin[.]evergreenfin[.]ltd/",
                "hxxps://www[.]asodfihjgdioshi[.]xyz/",
                "hxxp://genie[.]evergreenfin[.]ltd/",
                "hxxp://geren[.]evergreenfin[.]ltd/",
                "hxxps://huiyuanlogin[.]evergreenfin[.]ltd/"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 1231,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 1231,
                "newInLastHour": 10,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"95a6c85b53738c4e88b773c837c7e47349bdc3fff629bcbc24304bc4f08cd46c",
                " \"2d51b62287627ef87a799e00b87b7658a94fc9838a86e191be55487a08f54c6f",
                " \"5730fa0599c8221b988850dbb5d8a3b860231efdb98550e722ef45d9b7af2d1c",
                " \"8393c695fcf826e5933989aa6276b390a5e12c716b513d0007307511e818ae30",
                " \"ace9d26f895cc7d631e697b84065308efa3c7b2968b1631c561b5e8c73ea4304"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1693,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1693,
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
                "1[.]117[.]171[.]170",
                "1[.]15[.]14[.]29",
                "1[.]177[.]162[.]4",
                "1[.]193[.]63[.]101",
                "1[.]24[.]16[.]10"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 5451,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 5451,
                "newInLastHour": 5451,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]0[.]164[.]165",
                "1[.]117[.]72[.]220",
                "1[.]162[.]216[.]37",
                "1[.]162[.]248[.]139",
                "1[.]2[.]187[.]97"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 15311,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 15311,
                "newInLastHour": 15311,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://154[.]223[.]128[.]222:54472/bin[.]sh",
                "hxxp://185[.]39[.]181[.]103:35427/i",
                "hxxp://42[.]180[.]85[.]86:44269/i",
                "hxxp://60[.]19[.]217[.]107:36620/i",
                "hxxp://59[.]58[.]115[.]103:56313/i"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 7704,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 7704,
                "newInLastHour": 6166,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"hxxps://frameworkservice[.]online/\"",
                " \"bluroofing[.]com\"",
                " \"abbaproyectosca[.]com\"",
                " \"adamgant[.]net\"",
                " \"chestnutgrovecapital[.]com\""
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
            "iocCount": 10843,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 10843,
                "newInLastHour": 233,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "5b60c9c03e269395e5900a70dc9121c44164a271",
                "5cf0d65dab7decdfdf1ae7d08e3d1a3696eee2b3",
                "317bcdde2a44975381c24cb95bfcc5c3132e64c5",
                "a2e76af14703e85cc8a27f108e0ee93ce2d9afb4",
                "c234496c7b0abcd873bb6bb5a54288b6d340b6ff"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 51783,
            "activeSources": 8,
            "criticalAlerts": 27147,
            "activeCampaigns": 260
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 16559,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "C2",
                "count": 10588,
                "trend": "stable",
                "percentage": -2
            },
            {
                "category": "Botnet",
                "count": 4510,
                "trend": "stable",
                "percentage": -2
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
                "name": "malware_download",
                "count": 15298,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://59[.]97[.]251[.]166:57710/bin[.]sh",
                    "hxxp://222[.]127[.]71[.]33:46157/i",
                    "hxxp://222[.]127[.]73[.]23:42679/bin[.]sh"
                ]
            },
            {
                "name": "CINS Threat List",
                "count": 15000,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]191[.]146[.]241",
                    "1[.]193[.]63[.]101",
                    "1[.]214[.]29[.]155"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1633,
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
                "count": 1444,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "205d49b6c7313e16e931e1b5873cc20be0dee85b",
                    "94c4ec66b6f57c29ac935890d7796decea67af37",
                    "81c9eddccea61f8fa9788208189d79b82e3443a4"
                ]
            },
            {
                "name": " \"win.asyncrat\"",
                "count": 1372,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"31[.]6[.]11[.]231:7777\"",
                    " \"31[.]56[.]209[.]140:6606\"",
                    " \"104[.]219[.]238[.]196:443\""
                ]
            },
            {
                "name": " \"win.cobalt_strike\"",
                "count": 1352,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"104[.]143[.]204[.]78:8443\"",
                    " \"156[.]239[.]4[.]189:50050\"",
                    " \"aaed196675895fcb5816edf09b0cb120\""
                ]
            },
            {
                "name": " \"unknown_loader\"",
                "count": 825,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"8f80af4c564e3e40d664d46956e30958b0864f9e1255dede9055144c878de7a9\"",
                    " \"thebeyondparadise[.]com\"",
                    " \"roofer-sutton[.]co[.]uk\""
                ]
            },
            {
                "name": "Vidar",
                "count": 739,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "86b5a5612e53988e28ed6604e8e9ff5476a46d0e",
                    "605e0b79c4a685b7da9524d6b71ec36bbd651b07",
                    "5f5d3a3225006f45ff8194536ef8e09cb194884d"
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
                "count": 693,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "c234496c7b0abcd873bb6bb5a54288b6d340b6ff",
                    "7a215b5a8eaf9b132cf84f22d9ee2202c2a028bf",
                    "8410f92dc9367bda715790bb163d32111731527d"
                ]
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious URLs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": "Vidar",
        "totalAttacksThisHour": 42536,
        "lastCalculated": "2026-09-30 05:08 IST"
    }
};
