// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-09-23T19:05:06.795291+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-09-23T19:05:06.588852+05:30",
    "lastUpdatedFormatted": "Sep 23, 2026 at 07:05 PM IST",
    "comparisonPeriod": "Sep 22 \u2013 Sep 23, 2026",
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
                "hxxps://face-book[.]com[.]vn/mau-anh-mua-he-2026",
                "hxxps://www[.]blockfi-coinage[.]com/",
                "hxxp://xfinityteamsservice[.]weebly[.]com/",
                "hxxp://loginxfinityinfo[.]weebly[.]com/",
                "hxxp://pine-crown-dust[.]pages[.]dev/"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 1730,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 1730,
                "newInLastHour": 580,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"f719ac240214c99fb3cdb500e25e3148a4349d9a3ed34969425853e5976f7045",
                " \"abf04f41c1cd68c2703c47b51effd93373edebd68dc0b08068378253cad41b6e",
                " \"4ef17ce50dce021504f3b820562bd30c03dbc796d4c5dbbf745353be08c5984f",
                " \"6c57ea42019f0f8696e81eb90a908da00ab7f3077d3cae71b98a94942507b73d",
                " \"5e5a98b072c0114f9dcc50a8c7456434c3d30ace711937aac81ed807a5e9c192"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 554,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 554,
                "newInLastHour": 0,
                "lastUpdate": "just now"
            },
            "types": [
                "ip-range"
            ],
            "sampleIndicators": [
                "2.26.75.0/24",
                "2.27.5.0/24",
                "2.27.62.0/24",
                "2.58.56.0/24",
                "2.59.152.0/24"
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
                "1[.]117[.]59[.]169",
                "1[.]12[.]229[.]231",
                "1[.]145[.]32[.]156",
                "1[.]177[.]162[.]4",
                "1[.]189[.]89[.]243"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 11840,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 11840,
                "newInLastHour": 11840,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]0[.]164[.]165",
                "1[.]117[.]72[.]220",
                "1[.]14[.]122[.]79",
                "1[.]15[.]221[.]192",
                "1[.]161[.]144[.]132"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 14180,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 14180,
                "newInLastHour": 14180,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://123[.]7[.]226[.]60:33827/i",
                "hxxp://186[.]149[.]204[.]12:33995/bin[.]sh",
                "hxxp://112[.]198[.]195[.]40:38934/i",
                "hxxp://124[.]92[.]78[.]169:41691/i",
                "hxxp://182[.]127[.]122[.]244:54992/bin[.]sh"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 6912,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 6912,
                "newInLastHour": 6678,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"luhepyso[.]workers[.]dev\"",
                " \"besthomerenovation[.]com\"",
                " \"betvictorth[.]info\"",
                " \"hxxps://nx[.]1betasia[.]org/\"",
                " \"nx[.]hg77[.]org\""
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
            "iocCount": 10583,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 10583,
                "newInLastHour": 15,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "82ad60b5fe3e77f88effbb586db3795a41e5f60b",
                "95688000a5176c85f77eb00ba69faef202ae6c24",
                "2c718d1d6454ad663cf963baecf3a1c81495716a",
                "5f1f3725db5f77872c27b2d4b1a6c8c32e4ee257",
                "b29e88da94c7ec5eac25efc49b444efcfb61b7de"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 48759,
            "activeSources": 8,
            "criticalAlerts": 26038,
            "activeCampaigns": 279
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 15284,
                "trend": "stable",
                "percentage": -1
            },
            {
                "category": "C2",
                "count": 10754,
                "trend": "stable",
                "percentage": 1
            },
            {
                "category": "Botnet",
                "count": 4483,
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
                    "1[.]189[.]89[.]243",
                    "1[.]20[.]186[.]172",
                    "1[.]24[.]16[.]58"
                ]
            },
            {
                "name": "malware_download",
                "count": 13866,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://113[.]238[.]173[.]237:46611/i",
                    "hxxp://39[.]40[.]165[.]127:44602/i",
                    "hxxp://39[.]40[.]165[.]127:44602/bin[.]sh"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1711,
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
                "count": 1450,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "99500e5de097a58d95775e1f9da85597851bdb71",
                    "372b91c0d31a75b4e1765af998d984881e34dab1",
                    "9700462dfd419d0295b2753079208e939a853dce"
                ]
            },
            {
                "name": " \"win.cobalt_strike\"",
                "count": 1400,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"81[.]70[.]97[.]147:8084\"",
                    " \"81[.]70[.]21[.]163:8899\"",
                    " \"114[.]66[.]27[.]110:60010\""
                ]
            },
            {
                "name": "Vidar",
                "count": 794,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "a88b5b3ce1ac1236c2739396319f187df0f601f3",
                    "cf52101dfe4779d6d145fe111b5bd69043c0a667",
                    "0bf61cf448206d51a0b7a0cdece647df3ea1196f"
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
                "name": " \"n/a",
                "count": 720,
                "types": [
                    "hash"
                ],
                "sampleIndicators": [
                    " \"dcb1c7a3a5ec3692a7db6e4d0d0f83f653ab5440e1510cf2e841fa3a3fcae48e",
                    " \"10933cdc279412973d81c953e6d73169e8e79194e400223a64e02a1494b9debc",
                    " \"ee799a275576298a32b5a2056072125abb6dece35c029a5780ff0694200d59fc"
                ]
            },
            {
                "name": "QuasarRAT",
                "count": 706,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "9b798f7d87edcf42680454660f593afd696ef8ca",
                    "ba3714d484afb75fd03911c59aa096cee9595955",
                    "8cffe4fa8f624cb4c15790c414e04acde61e3651"
                ]
            },
            {
                "name": " \"win.pure_rat\"",
                "count": 599,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"93[.]152[.]214[.]28:7222\"",
                    " \"45[.]88[.]91[.]54:56002\"",
                    " \"31[.]77[.]220[.]78:56003\""
                ]
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious IPs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": "SSH Attacks",
        "totalAttacksThisHour": 48598,
        "lastCalculated": "2026-09-23 19:05 IST"
    }
};
