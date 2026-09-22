// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-09-23T04:23:52.828320+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-09-23T04:23:52.433567+05:30",
    "lastUpdatedFormatted": "Sep 23, 2026 at 04:23 AM IST",
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
                "hxxps://kucoin_u_logi[.]godaddysites[.]com/",
                "hxxps://www[.]kucoin_u_logi[.]godaddysites[.]com/",
                "hxxp://pranavraj0562[.]github[.]io/Alfido_Tech_Task3",
                "hxxps://22e2915e[.]pinme[.]dev/for[.]html",
                "hxxps://geminuni-lggin0[.]godaddysites[.]com/"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 1439,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 1439,
                "newInLastHour": 21,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"ea6416b3fb4b6cb3709382bce1b28c55f49043eec99608a5c6995a694f5fc3c5",
                " \"70618550f6bffc42399f2e29129410d04a247e24e50783c7098f61d57b9c9a5e",
                " \"9d11df6d98fa57fb6acea9e4d2894e7ff479932d43e1963ffe6b73251641eba6",
                " \"f75c33c52d0a3559026c09065d7150441bd004cc8104d7df1122ca2280e0585b",
                " \"d733bf3a4a4c6b93bae9127e4b95f91f2a119936a0791394afa95bfcf8837219"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1676,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1676,
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
                "1[.]12[.]229[.]231",
                "1[.]145[.]32[.]156",
                "1[.]15[.]14[.]29",
                "1[.]177[.]162[.]4",
                "1[.]192[.]110[.]50"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 5545,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 5545,
                "newInLastHour": 5545,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]0[.]164[.]165",
                "1[.]117[.]72[.]220",
                "1[.]14[.]122[.]79",
                "1[.]180[.]246[.]242",
                "1[.]203[.]186[.]58"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 14010,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 14010,
                "newInLastHour": 14010,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://182[.]121[.]234[.]165:42289/bin[.]sh",
                "hxxp://103[.]18[.]13[.]63:39744/i",
                "hxxp://124[.]6[.]167[.]113:38678/bin[.]sh",
                "hxxp://180[.]244[.]10[.]211:49936/i",
                "hxxp://125[.]40[.]56[.]63:48029/i"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 5691,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 5691,
                "newInLastHour": 5342,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"aloha-handyman[.]us\"",
                " \"ailab42[.]com\"",
                " \"schulmat-peter[.]ch\"",
                " \"allinonesofts[.]pro\"",
                " \"addensurance[.]com\""
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
            "iocCount": 10666,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 10666,
                "newInLastHour": 0,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "2e57d619d591a232e8f11d850822531b3bda29a4",
                "e5c15371e2640fdbbed13f9a3d4128f84fe32c9b",
                "deb92b7c7be8b03d76c63ea02419b82e6e573f97",
                "0f3b052836a1071f9f929ad3516358185d5e078e",
                "a88b5b3ce1ac1236c2739396319f187df0f601f3"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 48918,
            "activeSources": 8,
            "criticalAlerts": 26234,
            "activeCampaigns": 283
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 15480,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "C2",
                "count": 10754,
                "trend": "stable",
                "percentage": 1
            },
            {
                "category": "Botnet",
                "count": 4475,
                "trend": "stable",
                "percentage": 1
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
                    "1[.]12[.]229[.]231",
                    "1[.]15[.]14[.]29",
                    "1[.]189[.]89[.]243"
                ]
            },
            {
                "name": "malware_download",
                "count": 13992,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://92[.]248[.]238[.]90:17191/bin[.]sh",
                    "hxxp://110[.]86[.]189[.]113:52448/bin[.]sh",
                    "hxxp://182[.]121[.]46[.]93:46436/bin[.]sh"
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
                "count": 1407,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"175[.]124[.]145[.]102:443\"",
                    " \"223[.]109[.]142[.]7:1080\"",
                    " \"81[.]70[.]21[.]163:389\""
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
                "name": " \"n/a",
                "count": 776,
                "types": [
                    "hash"
                ],
                "sampleIndicators": [
                    " \"86163845b1a2468c0ee8b6e56779ec03b028f9e00a9ed168cde50c74ec708828",
                    " \"af6cc23bb7330dc216fac680e05b1cb69f671fe504940a2a08af51eb90f5eeda",
                    " \"c306e1f810a05432dd85deb3e0b3e880b36558130e5740aa46b54ca19556edd6"
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
        "totalAttacksThisHour": 40223,
        "lastCalculated": "2026-09-23 04:23 IST"
    }
};
