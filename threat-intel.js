// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2025-12-04T00:24:19.598998+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2025-12-04T00:24:19.223660+05:30",
    "lastUpdatedFormatted": "Dec 04, 2025 at 12:24 AM IST",
    "comparisonPeriod": "Dec 03 \u2013 Dec 04, 2025",
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
                "hxxps://www[.]whtasapp-xc[.]com/",
                "hxxps://ipfs[.]io/ipfs/bafkreiagmqc2ekwgapx7ln3agjmpm62dd2f7kzq5vwikdussuq6iwpiuxq/?eta=3mail@a[.]b[.]c0",
                "hxxp://mimosawedding[.]vn/wp-content/themes/mimosa/languages/Antaii/home",
                "hxxp://m[.]bybtis[.]com/",
                "hxxps://ipfs[.]io/ipfs/bafkreiaqobyzemgayn6j66qdxa6xicjzgjf2bp43c55w2sust57ks7ssvy"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 966,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 966,
                "newInLastHour": 34,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"19801bfff10fc0605820a7d7bf7a5cdbe07073188eec8308f62f228a7a0307c0",
                " \"aacea65e907af9e69c18064315be996f996a3e959384565324ce5dc267f26574",
                " \"a051e0daf341b5e642df9725b5da2bb1e15748d69261471866dd852b503ea475",
                " \"b17345e47292cd634489df6bcb0ae469986310ee28fcdc187c522fcc6d96136d",
                " \"9b13974c79f4a82b0503d09be90b48c38a1fd1b1a41528e98f6375a30aaa9ff5"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1452,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1452,
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
                "1[.]1[.]176[.]58",
                "1[.]116[.]180[.]98",
                "1[.]117[.]17[.]128",
                "1[.]14[.]3[.]240",
                "1[.]15[.]118[.]23"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 5244,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 5244,
                "newInLastHour": 5244,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]12[.]64[.]80",
                "1[.]14[.]254[.]146",
                "1[.]161[.]58[.]137",
                "1[.]194[.]200[.]251",
                "1[.]194[.]239[.]240"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 29879,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 29879,
                "newInLastHour": 29879,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://42[.]57[.]55[.]200:37696/bin[.]sh",
                "hxxp://222[.]127[.]52[.]229:39890/i",
                "hxxp://219[.]157[.]16[.]161:33399/i",
                "hxxp://115[.]58[.]142[.]73:35479/bin[.]sh",
                "hxxp://114[.]227[.]38[.]239:2674/bin[.]sh"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 1467,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 1467,
                "newInLastHour": 1276,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"rain[.]silentcrest[.]ru\"",
                " \"8tx1k[.]silentcrest[.]ru\"",
                " \"6zq[.]silentcrest[.]ru\"",
                " \"silent[.]silentcrest[.]ru\"",
                " \"xxblessingswealthyblessedman[.]duckdns[.]org\""
            ]
        },
        "Feodo Tracker": {
            "description": "Botnet C2 server IPs from Feodo Tracker. Tracks Dridex, Emotet, TrickBot, QakBot, and BazarLoader.",
            "website": "https://feodotracker.abuse.ch/",
            "updateFrequency": "Hourly",
            "iocCount": 4,
            "iocDataUrl": "https://thehgtech.com/ioc-data/feodo-tracker.json",
            "stats": {
                "total": 4,
                "newInLastHour": 4,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "15[.]204[.]219[.]215",
                "152[.]89[.]239[.]34",
                "162[.]243[.]103[.]246",
                "51[.]210[.]96[.]48"
            ]
        },
        "SSL Blacklist": {
            "description": "Malicious SSL certificates used by botnet C2 servers. Helps detect encrypted malware communications.",
            "website": "https://sslbl.abuse.ch/",
            "updateFrequency": "Daily",
            "iocCount": 8548,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 8548,
                "newInLastHour": 0,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "35f978dfe74d5149a244fb99ae861dc53d976b1f",
                "9cc8b187f164e52b6652317c01658435019bdce8",
                "b87ff5313281762d23f40bd0db3587b7099206fd",
                "2656f13ff82bace14ddd6020280d58e287f3eee9",
                "57cae088f095d41ea556fba0179c64e2b5b9a490"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 57534,
            "activeSources": 8,
            "criticalAlerts": 39287,
            "activeCampaigns": 217
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 30762,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "C2",
                "count": 8525,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 744,
                "trend": "stable",
                "percentage": 5
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
                "percentage": 98
            },
            {
                "name": "Tech",
                "percentage": 1
            },
            {
                "name": "Finance",
                "percentage": 0
            }
        ],
        "campaigns": [
            {
                "name": "malware_download",
                "count": 29758,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://182[.]126[.]86[.]124:33918/bin[.]sh",
                    "hxxp://182[.]119[.]179[.]197:32848/bin[.]sh",
                    "hxxp://196[.]251[.]107[.]94:5553/f3d5a80d27c049f2ba17d69b09c13bd5_build[.]exe"
                ]
            },
            {
                "name": "CINS Threat List",
                "count": 15000,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]1[.]176[.]58",
                    "1[.]116[.]180[.]98",
                    "1[.]117[.]17[.]128"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1456,
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
                "count": 1353,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "b6510825c2c07b1bf03f200b2a91a4ffe5f4daed",
                    "6137c89b82c858af9f0101ebc77af7d262ce5b73",
                    "6f6c70df3fd9f7a5f984e44b63720d670ea7ee0f"
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
                "count": 593,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "5d5c32a9bf92da1d16d0558ed2ed9f19c821c8a9",
                    "31e9cb5ace32adba5c43bce257a6396f9fa0f21c",
                    "9432f61b3afd49f0c35b548b09db103221d9b8c5"
                ]
            },
            {
                "name": "LummaStealer",
                "count": 533,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "1d28cc6dca52e95f859739c39a04d794671f66d9",
                    "7b7c48a7d10c11ab988801fec68db41f6935ecf4",
                    "b57cc0f34294222d350c45d62c735547c8882195"
                ]
            },
            {
                "name": " \"Mirai",
                "count": 482,
                "types": [
                    "hash"
                ],
                "sampleIndicators": [
                    " \"46c184ed8a33a88dfb7ceb780cba7c139071c45b078a27ac873e47610bf71bfc",
                    " \"5875c8fcb2c4ff7551c1c29ee86abb5ab558a47cd2899e30ca19cddf96ffd919",
                    " \"b9527cfbbc7c89fb1e378db72aa00cd078db99c581b45bf41da4f16bec32af73"
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
                "name": " \"js.clearfake\"",
                "count": 353,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"valley[.]l1ghtforest[.]ru\"",
                    " \"m22u9[.]l1ghtforest[.]ru\"",
                    " \"flame[.]l1ghtforest[.]ru\""
                ]
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious URLs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": "SSH Attacks",
        "totalAttacksThisHour": 51740,
        "lastCalculated": "2025-12-04 00:24 IST"
    }
};
