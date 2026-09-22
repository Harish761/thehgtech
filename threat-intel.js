// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-09-23T03:05:15.262574+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-09-23T03:05:14.964054+05:30",
    "lastUpdatedFormatted": "Sep 23, 2026 at 03:05 AM IST",
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
            "iocCount": 1461,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 1461,
                "newInLastHour": 32,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"86163845b1a2468c0ee8b6e56779ec03b028f9e00a9ed168cde50c74ec708828",
                " \"af6cc23bb7330dc216fac680e05b1cb69f671fe504940a2a08af51eb90f5eeda",
                " \"c306e1f810a05432dd85deb3e0b3e880b36558130e5740aa46b54ca19556edd6",
                " \"a5b0255b53a2ad2263873500348b669f22819dfb3205bb56038c465e775d8e30",
                " \"ee25ec03e36f6cf0760a692fa34d98cca1add4e7e84a9ebeb0fe34b04b10afdd"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1711,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1711,
                "newInLastHour": 57,
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
                "1[.]15[.]14[.]29",
                "1[.]189[.]89[.]243",
                "1[.]192[.]110[.]50",
                "1[.]192[.]129[.]106"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 5480,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 5480,
                "newInLastHour": 5480,
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
            "iocCount": 13992,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 13992,
                "newInLastHour": 13992,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://92[.]248[.]238[.]90:17191/bin[.]sh",
                "hxxp://110[.]86[.]189[.]113:52448/bin[.]sh",
                "hxxp://182[.]121[.]46[.]93:46436/bin[.]sh",
                "hxxp://60[.]23[.]233[.]134:56485/i",
                "hxxp://45[.]183[.]184[.]74:54667/bin[.]sh"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 5673,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 5673,
                "newInLastHour": 5324,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"www[.]adeyinkaigbinoba[.]com\"",
                " \"academyofdanceschool[.]com[.]au\"",
                " \"absorganizationalhealth[.]com\"",
                " \"www[.]agenasteam[.]cz\"",
                " \"www[.]adlibentertainment[.]com[.]au\""
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
            "iocCount": 10776,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 10776,
                "newInLastHour": 208,
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
            "totalIndicators": 48533,
            "activeSources": 8,
            "criticalAlerts": 26013,
            "activeCampaigns": 280
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 15467,
                "trend": "stable",
                "percentage": 1
            },
            {
                "category": "C2",
                "count": 10546,
                "trend": "stable",
                "percentage": -1
            },
            {
                "category": "Botnet",
                "count": 4428,
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
                    "1[.]12[.]229[.]231",
                    "1[.]145[.]32[.]156",
                    "1[.]15[.]14[.]29"
                ]
            },
            {
                "name": "malware_download",
                "count": 13950,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://105[.]184[.]83[.]103:45157/bin[.]sh",
                    "hxxp://82[.]114[.]178[.]6:59807/i",
                    "hxxp://59[.]96[.]143[.]138:53299/bin[.]sh"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1654,
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
                "count": 1439,
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
                    " \"81[.]70[.]21[.]163:8888\"",
                    " \"1[.]12[.]59[.]176:8080\"",
                    " \"1[.]12[.]59[.]176:443\""
                ]
            },
            {
                "name": " \"n/a",
                "count": 791,
                "types": [
                    "hash"
                ],
                "sampleIndicators": [
                    " \"67c47f4cf24cdb313203a5ae17002dbd4fa1195ac99115a77afb8e74801e0858",
                    " \"5ee7d957c0c21bb78ec37e87fa5ec297ff4ad4b634b5f0514ab28dcc740abb7b",
                    " \"7a547e2bdcef36c52a24bcabf6dc0bb35804bfaf8ee8160d939995715b2daf8d"
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
                "name": "Vidar",
                "count": 734,
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
                "name": "QuasarRAT",
                "count": 687,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "9b798f7d87edcf42680454660f593afd696ef8ca",
                    "8cffe4fa8f624cb4c15790c414e04acde61e3651",
                    "de0a287fb9997f0ffbd36df79b13cfda63f0bfcd"
                ]
            },
            {
                "name": " \"win.pure_rat\"",
                "count": 586,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"84[.]200[.]91[.]170:443\"",
                    " \"5[.]175[.]169[.]148:443\"",
                    " \"217[.]60[.]195[.]60:443\""
                ]
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious IPs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": "Vidar",
        "totalAttacksThisHour": 40398,
        "lastCalculated": "2026-09-23 03:05 IST"
    }
};
