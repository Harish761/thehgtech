// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-02-07T18:40:00.768951+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-02-07T18:40:00.489985+05:30",
    "lastUpdatedFormatted": "Feb 07, 2026 at 06:40 PM IST",
    "comparisonPeriod": "Feb 06 \u2013 Feb 07, 2026",
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
                "hxxp://pub-ba929d2ab1f04e75869e394f6d120bba[.]r2[.]dev/index[.]html",
                "hxxps://ipfs[.]io/ipfs/bafkreic2zu35b3dgqrknxnridzgte3nv5jzdw3jjaopaovolv432u2wwda/?eta=3mail@a[.]b[.]c0",
                "hxxp://www[.]p200h[.]xyz/",
                "hxxps://bybitvar[.]com/en/",
                "hxxps://bybitvar[.]com/"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 1186,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 1186,
                "newInLastHour": 87,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"4679b6adea4aae9614bb538695064ecdc49c5e698208a8b803b4fe85efc53eb9",
                " \"57713032536e7ebe5bd2e15501f75d50cb1b899cb40e89a5d08c5ec3697ddf34",
                " \"9071a5ddbd218d78224653419efeb2f728e03840313a8c23a3e977dfb9885e0d",
                " \"14e26249514530b7f57a5ab9df99c0f1b0cf0383af94a91c6acc6e08f1dc2b3b",
                " \"ac0a1cf3cd79aa907c915245782ba76eeb1af6e6636c60921dbd3167f8426f38"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1464,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1464,
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
                "2.56.192.0/22",
                "2.57.122.0/24"
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
                "1[.]15[.]116[.]189",
                "1[.]15[.]14[.]29",
                "1[.]157[.]80[.]72",
                "1[.]170[.]7[.]241",
                "1[.]176[.]118[.]246"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 6817,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 6817,
                "newInLastHour": 6817,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]162[.]237[.]85",
                "1[.]194[.]219[.]159",
                "1[.]214[.]197[.]163",
                "1[.]214[.]42[.]172",
                "1[.]220[.]38[.]246"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 21237,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 21237,
                "newInLastHour": 21237,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://119[.]179[.]254[.]51:51560/bin[.]sh",
                "hxxp://117[.]204[.]164[.]227:46345/i",
                "hxxp://61[.]3[.]129[.]52:58375/i",
                "hxxp://158[.]94[.]210[.]68/w[.]sh",
                "hxxp://158[.]94[.]210[.]68/nvr[.]sh"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 945,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 945,
                "newInLastHour": 829,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"hxxps://enjoyag[.]cyou/api\"",
                " \"www[.]perlecoiffeur[.]ch\"",
                " \"mabougies[.]ch\"",
                " \"77[.]237[.]234[.]130:8081\"",
                " \"172[.]67[.]71[.]10:8080\""
            ]
        },
        "Feodo Tracker": {
            "description": "Botnet C2 server IPs from Feodo Tracker. Tracks Dridex, Emotet, TrickBot, QakBot, and BazarLoader.",
            "website": "https://feodotracker.abuse.ch/",
            "updateFrequency": "Hourly",
            "iocCount": 3,
            "iocDataUrl": "https://thehgtech.com/ioc-data/feodo-tracker.json",
            "stats": {
                "total": 3,
                "newInLastHour": 3,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "162[.]243[.]103[.]246",
                "172[.]232[.]59[.]14",
                "34[.]204[.]119[.]63"
            ]
        },
        "SSL Blacklist": {
            "description": "Malicious SSL certificates used by botnet C2 servers. Helps detect encrypted malware communications.",
            "website": "https://sslbl.abuse.ch/",
            "updateFrequency": "Daily",
            "iocCount": 8873,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 8873,
                "newInLastHour": 0,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "8c027aea9f5810c556e38f4fe450504eee4fa910",
                "509bc2a51be1d6e6c4e4b76e2e2c3b21825c06f9",
                "97e58eec776ad990a10d1f4a932e1a4ae48636b3",
                "f7e2a35e1a581deef9040e6b02ff6b8c0f0f7134",
                "1a9293158cd9c2f346490d6fa18dc5390359e4ab"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 48928,
            "activeSources": 8,
            "criticalAlerts": 31051,
            "activeCampaigns": 215
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 22184,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "C2",
                "count": 8867,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 799,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Phishing",
                "count": 301,
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
                "count": 20956,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://45[.]94[.]31[.]13/lrs-refunds/82436-61420-3304-7894/IRS-Document[.]pkg",
                    "hxxp://45[.]94[.]31[.]13/lrs-refund/82436-61420-3304-7894/IRS-Document[.]exe",
                    "hxxp://45[.]94[.]31[.]13/lrs-refund/82436-61420-3304-7894/IRS-Document[.]pkg"
                ]
            },
            {
                "name": "CINS Threat List",
                "count": 15000,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]14[.]3[.]240",
                    "1[.]15[.]116[.]189",
                    "1[.]15[.]14[.]29"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1476,
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
                "count": 1381,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "97e58eec776ad990a10d1f4a932e1a4ae48636b3",
                    "f2c2503f8514647aba9776c4e9c3b55a97695d2e",
                    "7ebc8e1cac8c681aad9cfa05c76b0c52ecc87f7c"
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
                "count": 617,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "1ea8ec48d9f0b8873db62ceb0d56bc89bd5b326e",
                    "bc3ca9fd7fdab7635c897aa5b61d0de4c471d1b9",
                    "436f02b3a63406707f6467d4880a691a2a3f53ea"
                ]
            },
            {
                "name": "LummaStealer",
                "count": 535,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "e2293f74d8d72bde90bb0424038259a9e3126e1b",
                    "69101b8edfa5d5e2ead4512a6d71c84748b0c012",
                    "1d28cc6dca52e95f859739c39a04d794671f66d9"
                ]
            },
            {
                "name": "Rhadamanthys",
                "count": 355,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "f999c0da0e983becc1c935444c5e609be26b0bcf",
                    "4101579ae950c954fc1096adf43bdefcf0364cfd",
                    "0c3ee8188ce35b6bb11d5b12a0e1e28310188b4e"
                ]
            },
            {
                "name": "Gozi",
                "count": 349,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "61d991d7063e5e7470daa3059357f8282e680bb7",
                    "68b4fc7da837c64332b9f019adaef4c7038ec85d",
                    "e0f7072057c5deeb21c598673740debc7f6eb8a1"
                ]
            },
            {
                "name": "Vidar",
                "count": 344,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "509bc2a51be1d6e6c4e4b76e2e2c3b21825c06f9",
                    "e224a0e12477fad80756859e96bf89af4af904ef",
                    "971eff3b46008afa8e51412a1f92e56fb16c0c8b"
                ]
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious URLs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": "malware_download",
        "totalAttacksThisHour": 44273,
        "lastCalculated": "2026-02-07 18:40 IST"
    }
};
