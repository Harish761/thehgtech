// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-09-25T19:09:11.435066+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-09-25T19:09:11.117701+05:30",
    "lastUpdatedFormatted": "Sep 25, 2026 at 07:09 PM IST",
    "comparisonPeriod": "Sep 24 \u2013 Sep 25, 2026",
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
            "iocCount": 2278,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 2278,
                "newInLastHour": 224,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"3eca32b04244004e09bf20c0dcd93391cefb3ab0fe4e5db99d9f57aade4fb8d6",
                " \"efaa45813d1bd4740337f67ce8cd6ece87de1d3c73f7a5af35ab6a0ed9cbf953",
                " \"7bfafeccb0ebab17930840828091f6634310c0d5391b757576fe89562aadd552",
                " \"91af25336ae5256efe42d151f8330a77bf69896f18ee2e58ab35521c8dd5f5ea",
                " \"d1e1493692f087f68cb42894446c06c44f7dcf8aae9acbe5de19399bcb7fa709"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1708,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1708,
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
                "1[.]193[.]58[.]176",
                "1[.]193[.]63[.]81",
                "1[.]2[.]173[.]126",
                "1[.]220[.]119[.]115",
                "1[.]24[.]16[.]103"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 4978,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 4978,
                "newInLastHour": 4978,
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
            "iocCount": 14445,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 14445,
                "newInLastHour": 14445,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://113[.]230[.]20[.]235:42959/bin[.]sh",
                "hxxp://115[.]235[.]20[.]5:60263/i",
                "hxxp://94[.]154[.]43[.]253/ppc64le",
                "hxxp://94[.]154[.]43[.]253/ppc64",
                "hxxp://94[.]154[.]43[.]253/mips"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 8360,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 8360,
                "newInLastHour": 7965,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"bet1roulette[.]com\"",
                " \"69i8pi14[.]tobisha[.]com\"",
                " \"hxxps://higgsflield[.]net/\"",
                " \"imersion4cf[.]site\"",
                " \"172[.]94[.]46[.]114:1012\""
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
            "iocCount": 10805,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 10805,
                "newInLastHour": 20,
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
            "totalIndicators": 53827,
            "activeSources": 8,
            "criticalAlerts": 27649,
            "activeCampaigns": 277
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 16883,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "C2",
                "count": 10766,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 4259,
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
                    "1[.]117[.]59[.]169",
                    "1[.]20[.]186[.]172",
                    "1[.]2[.]173[.]126"
                ]
            },
            {
                "name": "malware_download",
                "count": 14212,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://78[.]38[.]19[.]164:38456/i",
                    "hxxp://182[.]127[.]153[.]253:41373/i",
                    "hxxp://123[.]12[.]35[.]173:57105/bin[.]sh"
                ]
            },
            {
                "name": " \"js.iclickfix\"",
                "count": 2130,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"rivistalibera[.]it\"",
                    " \"rooshnaf[.]com\"",
                    " \"rupertwinston[.]com\""
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1709,
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
                "name": " \"Mirai",
                "count": 1644,
                "types": [
                    "hash"
                ],
                "sampleIndicators": [
                    " \"3ef8580795f9e384a5c457cdd136c7b163fd03ce37f0e7d2961e1065aec52ed3",
                    " \"18712e078a6f5419ee21ddee6803395a98824021401781b51f1d08c6e1454536",
                    " \"847818db1ce56d2193d3a658104d396b24271eb0b96fcf398f256f2dc4e9665d"
                ]
            },
            {
                "name": "AsyncRAT",
                "count": 1452,
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
                "count": 1363,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"45[.]227[.]253[.]132:56225\"",
                    " \"43[.]136[.]69[.]37:443\"",
                    " \"42[.]51[.]44[.]173:18443\""
                ]
            },
            {
                "name": " \"unknown_loader\"",
                "count": 1313,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"yellowboximmigration[.]com\"",
                    " \"youngpropertypartners[.]com\"",
                    " \"yrmok[.]com\""
                ]
            },
            {
                "name": "Vidar",
                "count": 796,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "06ba62804f9d40f0ffb38ecd4c42b0229921cbde",
                    "fd081cbaf79596b443b9d591f9dd1390268db7f0",
                    "9780ed18b0a63e77e19611e7f46f640a64c1ad5e"
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
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious URLs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": "malware_download",
        "totalAttacksThisHour": 42937,
        "lastCalculated": "2026-09-25 19:09 IST"
    }
};
