// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2025-12-12T00:25:32.210205+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2025-12-12T00:25:31.738247+05:30",
    "lastUpdatedFormatted": "Dec 12, 2025 at 12:25 AM IST",
    "comparisonPeriod": "Dec 11 \u2013 Dec 12, 2025",
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
                "hxxps://orangegames[.]org/landings/es-or-tower-ev/?transaction_id=a2czNENFLzRkRkZIVytyWXhSNmViQT09&source=72544_273140&pub=1144",
                "hxxps://auth-secure[.]me/8tLl56r1YR2F1N0?/workitems/3ont208h/WorkItemMention/VGhpcyBtaWdodCBiZSBhIEhveGh1bnQgc2ltdWxhdGlvbi4gT25seSBvbmUgd2F5IHRvIGZpbmQgb3V0Li4u",
                "hxxps://auth-secure[.]me/BL-Es5vMUNQcVFY?/workitems/3ont208h/WorkItemMention/VGhpcyBtaWdodCBiZSBhIEhveGh1bnQgc2ltdWxhdGlvbi4gT25seSBvbmUgd2F5IHRvIGZpbmQgb3V0Li4u",
                "hxxp://5p787teu5xu23ub1[.]jacksonvillesportsbetting[.]com/mpwhpi7z6k6z2eg/",
                "hxxp://crackaf-bubbles-frontend[.]vercel[.]app/swap"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 770,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 770,
                "newInLastHour": 52,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"65e1038f0c2f75f9ab264ebe9357ab6858d13f333acffb8456c781c3ef15864c",
                " \"8ea0522938a9539db74ae28455dfd4d7f5b6576ed84445ae6bc191f94867266a",
                " \"5170070b2fe2a33cabecbf4411e1ba76e2ca2c58168c31350a03a5dfe5d57b05",
                " \"bb9536a1b9e5a1924f22a61c9e09db1ee965383bb68ba71fb1795bdfdc72e939",
                " \"ecafd18ecdf7175aaacd765f2e1e0254fcd52989bf903df27b2be2a7c3855317"
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
                "newInLastHour": 11,
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
                "1[.]177[.]22[.]68",
                "1[.]181[.]114[.]38",
                "1[.]181[.]69[.]174",
                "1[.]193[.]63[.]113",
                "1[.]20[.]201[.]193"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 5708,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 5708,
                "newInLastHour": 5708,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]13[.]19[.]219",
                "1[.]13[.]79[.]144",
                "1[.]161[.]49[.]186",
                "1[.]162[.]251[.]28",
                "1[.]172[.]78[.]203"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 28987,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 28987,
                "newInLastHour": 28987,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxps://9yd[.]v0xletrill[.]ru/ufwy1h1p",
                "hxxps://9yd[.]v0xletrill[.]ru/s2gb7vu8",
                "hxxp://216[.]126[.]224[.]115/02[.]08[.]2022[.]exe",
                "hxxp://106[.]38[.]201[.]95:8080/02[.]08[.]2022[.]exe",
                "hxxp://173[.]44[.]141[.]136/02[.]08[.]2022[.]exe"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 2064,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 2064,
                "newInLastHour": 1842,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"9yd[.]v0xletrill[.]ru\"",
                " \"149[.]109[.]142[.]115:443\"",
                " \"125[.]24[.]81[.]254:7443\"",
                " \"brisk[.]v0xletrill[.]ru\"",
                " \"barge[.]pincer-loom[.]ru\""
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
            "iocCount": 8617,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 8617,
                "newInLastHour": 0,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "50def7da0eb236fcb1d55eb802039ddd95049da9",
                "d6e284f5f98ea579d66235833e9f2dc1bfaa59dd",
                "84c5b32bdca11a7e3850b93be0624cd8f75f2ef5",
                "7df151365b79ad2689b01337e63203476768d37a",
                "b9aad54edcd6cbe1cf94fa76da3a135fd414dbc4"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 57209,
            "activeSources": 8,
            "criticalAlerts": 38348,
            "activeCampaigns": 218
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 29754,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "C2",
                "count": 8594,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 1286,
                "trend": "stable",
                "percentage": 6
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
                "count": 28934,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxps://yard[.]pincerloom[.]ru/j9nrsrkt",
                    "hxxps://yard[.]pincerloom[.]ru/ft2coz0v",
                    "hxxps://orb[.]muddleoak[.]ru/51e5bihm"
                ]
            },
            {
                "name": "CINS Threat List",
                "count": 15000,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]170[.]74[.]173",
                    "1[.]177[.]22[.]68",
                    "1[.]181[.]114[.]38"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1484,
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
                "name": " \"win.phorpiex\"",
                "count": 467,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"ssofhoseuegsgrfnuy[.]net\"",
                    " \"slpsrgpsrhojifdijy[.]net\"",
                    " \"srndndubsbsifurfd[.]biz\""
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
        "fastestRisingThreat": "SSH Attacks",
        "totalAttacksThisHour": 51904,
        "lastCalculated": "2025-12-12 00:25 IST"
    }
};
