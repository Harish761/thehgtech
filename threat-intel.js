// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-09-22T18:51:41.916942+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-09-22T18:51:41.595774+05:30",
    "lastUpdatedFormatted": "Sep 22, 2026 at 06:51 PM IST",
    "comparisonPeriod": "Sep 21 \u2013 Sep 22, 2026",
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
            "iocCount": 1464,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 1464,
                "newInLastHour": 359,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"ae96654ce5a1c24086d2983bc246b8568db674059911175be883aba8151a72eb",
                " \"232ee56ebbdc77d5068234bd91ce4c435dd4f8a7a4b542a27629feb572a1997a",
                " \"248c6269576b164e0398e4e6a562d6783cf291002775a99cbf6e8b0b6d8c1ef3",
                " \"d436082c9c71c9a15d42332c0e50e5ff8e555a73b113a5d33e5f7c1c3050b36e",
                " \"fdb0a9a7f5d181c2ac16938a37d7faa375121a945d2e0e3e5c6f3340f8bdf6a4"
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
                "1[.]145[.]32[.]156",
                "1[.]15[.]14[.]29",
                "1[.]177[.]162[.]4",
                "1[.]181[.]101[.]74",
                "1[.]189[.]89[.]243"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 5542,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 5542,
                "newInLastHour": 5542,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]0[.]164[.]165",
                "1[.]117[.]72[.]220",
                "1[.]14[.]122[.]79",
                "1[.]14[.]192[.]95",
                "1[.]180[.]246[.]242"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 13765,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 13765,
                "newInLastHour": 13765,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://182[.]127[.]48[.]32:36350/bin[.]sh",
                "hxxp://195[.]64[.]233[.]167:36127/i",
                "hxxp://113[.]228[.]85[.]214:50311/bin[.]sh",
                "hxxp://181[.]174[.]231[.]21:54372/bin[.]sh",
                "hxxp://195[.]64[.]233[.]167:36127/bin[.]sh"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 6274,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 6274,
                "newInLastHour": 5021,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"ashleynewsome[.]com\"",
                " \"hxxps://217[.]60[.]103[.]124\"",
                " \"hxxps://172[.]238[.]110[.]27\"",
                " \"43[.]173[.]38[.]253:9035\"",
                " \"zaluposs[.]com\""
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
            "iocCount": 10751,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 10751,
                "newInLastHour": 3,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "7e5a601afffb3c09f07faa53d0aa0e138444f02a",
                "a7a833e979de1f4883108c9756fac1100dcc6fd8",
                "cf52101dfe4779d6d145fe111b5bd69043c0a667",
                "adcff1c66a3ba1c9446886eb9f6efdbec4f17688",
                "99500e5de097a58d95775e1f9da85597851bdb71"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 48608,
            "activeSources": 8,
            "criticalAlerts": 25450,
            "activeCampaigns": 262
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 14708,
                "trend": "stable",
                "percentage": -2
            },
            {
                "category": "C2",
                "count": 10742,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 4380,
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
                    "1[.]177[.]162[.]3",
                    "1[.]181[.]101[.]74",
                    "1[.]189[.]89[.]243"
                ]
            },
            {
                "name": "malware_download",
                "count": 13266,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://222[.]136[.]141[.]183:43857/i",
                    "hxxp://123[.]5[.]203[.]246:38472/bin[.]sh",
                    "hxxp://27[.]215[.]83[.]59:58679/i"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1715,
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
                "count": 1386,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"78[.]17[.]212[.]127:80\"",
                    " \"78[.]17[.]212[.]127:4444\"",
                    " \"60[.]217[.]23[.]146:7788\""
                ]
            },
            {
                "name": " \"win.asyncrat\"",
                "count": 1369,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"91[.]92[.]241[.]149:8808\"",
                    " \"52[.]47[.]77[.]229:3000\"",
                    " \"52[.]47[.]77[.]229:9000\""
                ]
            },
            {
                "name": " \"n/a",
                "count": 914,
                "types": [
                    "hash"
                ],
                "sampleIndicators": [
                    " \"ededcfc04224f39c27933343a8a7b3351580606ca529f26c1c8d0165457115d6",
                    " \"f6a2a23979851cabf9f815eb88e1e08d027efb2b2383366605e30531c68982cb",
                    " \"0f20bfa5bb9dc9a475e79f7ead3e713ad93f53ddcdc078a63fb589787f5372e4"
                ]
            },
            {
                "name": "Vidar",
                "count": 792,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "0bf61cf448206d51a0b7a0cdece647df3ea1196f",
                    "a7bc5bdb50a33449b1f9c6037a703e58caa406bf",
                    "dec7517543aba8ea73a1b336a0e72230bdfab6cc"
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
        "totalAttacksThisHour": 39995,
        "lastCalculated": "2026-09-22 18:51 IST"
    }
};
