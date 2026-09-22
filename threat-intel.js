// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-09-23T01:12:38.619318+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-09-23T01:12:38.404093+05:30",
    "lastUpdatedFormatted": "Sep 23, 2026 at 01:12 AM IST",
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
            "iocCount": 1490,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 1490,
                "newInLastHour": 217,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"67c47f4cf24cdb313203a5ae17002dbd4fa1195ac99115a77afb8e74801e0858",
                " \"5ee7d957c0c21bb78ec37e87fa5ec297ff4ad4b634b5f0514ab28dcc740abb7b",
                " \"7a547e2bdcef36c52a24bcabf6dc0bb35804bfaf8ee8160d939995715b2daf8d",
                " \"9141bb4beefa108d3418e67d98e4e76468ea4a91dc25820e5cb3aef26a35c49a",
                " \"d45cfc7508afe11c833c5e81cffe3ca01b9e52a748d57ae3241627f67d09bce1"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1654,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1654,
                "newInLastHour": 3,
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
                "1[.]181[.]101[.]74"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 5517,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 5517,
                "newInLastHour": 5517,
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
            "iocCount": 13950,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 13950,
                "newInLastHour": 13950,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://105[.]184[.]83[.]103:45157/bin[.]sh",
                "hxxp://82[.]114[.]178[.]6:59807/i",
                "hxxp://59[.]96[.]143[.]138:53299/bin[.]sh",
                "hxxp://115[.]49[.]88[.]54:36589/bin[.]sh",
                "hxxp://119[.]186[.]190[.]69:48263/i"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 5566,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 5566,
                "newInLastHour": 5289,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"www[.]8andc[.]com\"",
                " \"www[.]4wdtechpr[.]com\"",
                " \"www[.]3gbv[.]com\"",
                " \"www[.]6sportsbetting[.]com\"",
                " \"abacusdrainrepairs[.]com\""
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
            "iocCount": 10568,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 10568,
                "newInLastHour": 25,
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
            "totalIndicators": 49267,
            "activeSources": 8,
            "criticalAlerts": 25985,
            "activeCampaigns": 265
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 15256,
                "trend": "stable",
                "percentage": 3
            },
            {
                "category": "C2",
                "count": 10729,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 4403,
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
                    "1[.]145[.]32[.]156",
                    "1[.]15[.]14[.]29",
                    "1[.]177[.]162[.]4"
                ]
            },
            {
                "name": "malware_download",
                "count": 13765,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://182[.]127[.]48[.]32:36350/bin[.]sh",
                    "hxxp://195[.]64[.]233[.]167:36127/i",
                    "hxxp://113[.]228[.]85[.]214:50311/bin[.]sh"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1708,
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
                "count": 1449,
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
                "count": 1405,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"111[.]230[.]37[.]219:50050\"",
                    " \"47[.]97[.]199[.]23:8080\"",
                    " \"47[.]97[.]199[.]23:443\""
                ]
            },
            {
                "name": " \"win.asyncrat\"",
                "count": 1365,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"46[.]40[.]193[.]169:1723\"",
                    " \"192[.]142[.]10[.]165:8808\"",
                    " \"188[.]137[.]227[.]133:7707\""
                ]
            },
            {
                "name": " \"n/a",
                "count": 838,
                "types": [
                    "hash"
                ],
                "sampleIndicators": [
                    " \"ae96654ce5a1c24086d2983bc246b8568db674059911175be883aba8151a72eb",
                    " \"232ee56ebbdc77d5068234bd91ce4c435dd4f8a7a4b542a27629feb572a1997a",
                    " \"248c6269576b164e0398e4e6a562d6783cf291002775a99cbf6e8b0b6d8c1ef3"
                ]
            },
            {
                "name": "Vidar",
                "count": 787,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "cf52101dfe4779d6d145fe111b5bd69043c0a667",
                    "0bf61cf448206d51a0b7a0cdece647df3ea1196f",
                    "a7bc5bdb50a33449b1f9c6037a703e58caa406bf"
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
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious IPs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": "malware_download",
        "totalAttacksThisHour": 40306,
        "lastCalculated": "2026-09-23 01:12 IST"
    }
};
