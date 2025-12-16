// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2025-12-16T07:51:45.709411+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2025-12-16T07:51:45.406074+05:30",
    "lastUpdatedFormatted": "Dec 16, 2025 at 07:51 AM IST",
    "comparisonPeriod": "Dec 15 \u2013 Dec 16, 2025",
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
                "hxxp://vkorg[.]webservis[.]ru/",
                "hxxp://lunero[.]shop/app/auth/en/BILLING/page/online[.]php",
                "hxxp://lunero[.]shop/app/auth/en/BILLING",
                "hxxp://www[.]instagram[.]dlscomunicacao[.]com[.]br/",
                "hxxp://faqs-coinbase-sign-in[.]wstd[.]io/"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 1481,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 1481,
                "newInLastHour": 97,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"6269c29c471bee0534d2df7af60b52a18238169e5191177de8e8e54b4015ebe8",
                " \"176634e90514396f0d9ca60dc19f766e1b979241beaf7b2f99a90a6d50083f16",
                " \"1d76631472db1ad1e222b5c59173d3820b670bdf30a11c1bef255c51607dd886",
                " \"028fa29429697946922fb784bcfafac38e2f117feee6d3f6f255bec88192bd96",
                " \"38b351e6545793d4b4a604d3bb984737793a593490898a6826b3f96878ff6092"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1495,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1495,
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
                "1[.]1[.]179[.]25",
                "1[.]123[.]20[.]64",
                "1[.]14[.]120[.]196",
                "1[.]161[.]61[.]55",
                "1[.]181[.]114[.]38"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 6162,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 6162,
                "newInLastHour": 6162,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]1[.]179[.]25",
                "1[.]13[.]175[.]150",
                "1[.]13[.]79[.]144",
                "1[.]194[.]200[.]251",
                "1[.]214[.]197[.]163"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 24690,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 24690,
                "newInLastHour": 24690,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxps://xiyp5[.]sp-1-nterpad[.]ru/3v4ru4bt",
                "hxxps://xiyp5[.]sp-1-nterpad[.]ru/9k36j8y5",
                "hxxps://omega[.]sp-1-nterpad[.]ru/oa5005gi",
                "hxxps://omega[.]sp-1-nterpad[.]ru/mpdke40a",
                "hxxps://l6vzy[.]sp-1-nterpad[.]ru/ykkx72pl"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 939,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 939,
                "newInLastHour": 790,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"xiyp5[.]sp-1-nterpad[.]ru\"",
                " \"omega[.]sp-1-nterpad[.]ru\"",
                " \"l6vzy[.]sp-1-nterpad[.]ru\"",
                " \"awy[.]sp-1-nterpad[.]ru\"",
                " \"delta[.]quartznibble[.]ru\""
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
                "162[.]243[.]103[.]246",
                "167[.]86[.]75[.]145",
                "51[.]210[.]96[.]48"
            ]
        },
        "SSL Blacklist": {
            "description": "Malicious SSL certificates used by botnet C2 servers. Helps detect encrypted malware communications.",
            "website": "https://sslbl.abuse.ch/",
            "updateFrequency": "Daily",
            "iocCount": 8638,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 8638,
                "newInLastHour": 2,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "4b1edb0875427c553bf5d42681e7a9fa8f93a35e",
                "c294112c931ab5f7a0f0195b65ed59679442ccea",
                "34d7f089684ee3ab9faf204b7d0a3a6d88826497",
                "13d50d3d407cb47a518087f05fcfc527a90df75c",
                "69b032a3fbc6d20d24fb410b437e1a31fb7619c8"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 53495,
            "activeSources": 8,
            "criticalAlerts": 35771,
            "activeCampaigns": 212
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 27158,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "C2",
                "count": 8613,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 425,
                "trend": "down",
                "percentage": -31
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
                "count": 25598,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://94[.]154[.]35[.]154/weball[.]sh",
                    "hxxps://xib[.]deep5ky[.]ru/qk03if6v",
                    "hxxps://line[.]deep5ky[.]ru/bgbo56d9"
                ]
            },
            {
                "name": "CINS Threat List",
                "count": 15000,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]1[.]179[.]25",
                    "1[.]123[.]20[.]64",
                    "1[.]161[.]61[.]55"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1495,
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
                "count": 1360,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "ae6ca91be0e1145adf2f7120ca3edec533d7573f",
                    "aebe846393cee6199796dc1524f82c22f5f1bb35",
                    "2f0654bc0b155cba85aa0be287860feff2045195"
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
                "name": " \"Mirai",
                "count": 597,
                "types": [
                    "hash"
                ],
                "sampleIndicators": [
                    " \"e3c6e81afd9370dbff44e082cb3fb5042caab00c95ff85398731cd2d3174868c",
                    " \"8c877912a9c0e746970f87d596e74f585af11eb9c1680bf659161520297742ca",
                    " \"b7f1682e0f09a2d785c3693bef5580bc2749807e56d67aba5ee20d329fd09e18"
                ]
            },
            {
                "name": "QuasarRAT",
                "count": 594,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "69b032a3fbc6d20d24fb410b437e1a31fb7619c8",
                    "5d5c32a9bf92da1d16d0558ed2ed9f19c821c8a9",
                    "31e9cb5ace32adba5c43bce257a6396f9fa0f21c"
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
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious URLs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": " \"n/a",
        "totalAttacksThisHour": 47045,
        "lastCalculated": "2025-12-16 07:51 IST"
    }
};
