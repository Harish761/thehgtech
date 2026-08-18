// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-08-18T22:13:45.962862+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-08-18T22:13:45.615116+05:30",
    "lastUpdatedFormatted": "Aug 18, 2026 at 10:13 PM IST",
    "comparisonPeriod": "Aug 17 \u2013 Aug 18, 2026",
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
                "hxxps://dravixa-gld-belquna-r9t8fw26[.]pages[.]dev/",
                "hxxps://www[.]submid-cotact136336[.]vercel[.]app/",
                "hxxp://xelzora-kxt-qelmavi-r5t2fc97[.]pages[.]dev/",
                "hxxps://roblox[.]com[.]ee/users/61018400/profile",
                "hxxps://phantom-eight-nu[.]vercel[.]app/"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 1098,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 1098,
                "newInLastHour": 182,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"1112082a44296158c15f82251d2eca768dbc9acc518d8aa3e818783369826050",
                " \"3d1edb1224c1659e1877a222dc6f5551537f3400f664eb1a4eb2594f16c7b2de",
                " \"9ccfe748c287766f5d03eda40401be8eac8c0fa90886be88beac5fc23485fd2e",
                " \"2f92eac51d5be36a9eee1c851ede04b24e10fe37a22a8bcb949dca7f02c9f1ca",
                " \"31edb8dedf393ccf149f508a7031da33d21ce8b7bc9cd8865e6948738bb92151"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 520,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 520,
                "newInLastHour": 0,
                "lastUpdate": "just now"
            },
            "types": [
                "ip-range"
            ],
            "sampleIndicators": [
                "2.26.75.0/24",
                "2.27.5.0/24",
                "2.57.17.0/24",
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
                "1[.]12[.]229[.]231",
                "1[.]140[.]210[.]242",
                "1[.]15[.]14[.]29",
                "1[.]183[.]161[.]214",
                "1[.]193[.]63[.]11"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 4793,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 4793,
                "newInLastHour": 4793,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]14[.]64[.]225",
                "1[.]2[.]226[.]1",
                "1[.]20[.]150[.]200",
                "1[.]214[.]214[.]114",
                "1[.]222[.]42[.]237"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 16924,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 16924,
                "newInLastHour": 16924,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://120[.]84[.]215[.]27:44835/i",
                "hxxp://176[.]65[.]139[.]212/eclipse[.]sh4",
                "hxxp://176[.]65[.]139[.]212/eclipse[.]i586",
                "hxxp://176[.]65[.]139[.]212/eclipse[.]m68k",
                "hxxp://176[.]65[.]139[.]212/eclipse[.]armv6l"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 8585,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 8585,
                "newInLastHour": 8543,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"xylopak[.]com\"",
                " \"ycn[.]coop\"",
                " \"ymbforexpro[.]com\"",
                " \"zahnarzt-stahlfast[.]de\"",
                " \"zelenilo[.]com\""
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
            "iocCount": 10278,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 10278,
                "newInLastHour": 18,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "f351f7dbe9c583f75758b39cd307f5359d110c73",
                "e39fdf1800919f6dd77d89bcdbc0b1fe8a9352eb",
                "edbd45e54859ad7082efb79465ba938bb2581132",
                "7bf78d44f61a05e919479a1cf3e0ce158a50a0c6",
                "ffa6be04fe2e9c6b79776dcfc7ad3f41a403a64d"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 52709,
            "activeSources": 8,
            "criticalAlerts": 28254,
            "activeCampaigns": 236
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 17836,
                "trend": "stable",
                "percentage": 1
            },
            {
                "category": "C2",
                "count": 10418,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 4686,
                "trend": "up",
                "percentage": 18
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
            },
            {
                "name": "Government",
                "percentage": 0
            }
        ],
        "campaigns": [
            {
                "name": "malware_download",
                "count": 16837,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://61[.]53[.]133[.]115:54046/i",
                    "hxxp://138[.]204[.]196[.]254:46255/bin[.]sh",
                    "hxxp://83[.]228[.]109[.]209:34880/i"
                ]
            },
            {
                "name": "CINS Threat List",
                "count": 15000,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]12[.]229[.]231",
                    "1[.]140[.]210[.]242",
                    "1[.]165[.]27[.]71"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1692,
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
                "name": " \"unknown_loader\"",
                "count": 1688,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"ytcasinochamp[.]com\"",
                    " \"za-zen[.]nu\"",
                    " \"zavarovanje-osiguranje[.]eu\""
                ]
            },
            {
                "name": "AsyncRAT",
                "count": 1436,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "f50e245dc1e4a89d6cf5e07e31ae1392a3f9ad20",
                    "714c56e9e207d5c8e08e1ca28cd9ba85f079d061",
                    "6647f9e4a2e273d7b78ff02be7114b0e9e2a719f"
                ]
            },
            {
                "name": " \"win.cobalt_strike\"",
                "count": 1432,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"110[.]42[.]255[.]63:5432\"",
                    " \"110[.]42[.]255[.]63:22\"",
                    " \"94[.]23[.]121[.]241:7433\""
                ]
            },
            {
                "name": " \"unknown\"",
                "count": 1008,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"hackuarium[.]net\"",
                    " \"vineriadeimir[.]ch\"",
                    " \"cleancit[.]ch\""
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
                "count": 711,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "a52e17fe607d1e562e0cb67c6f2342e6b4dbf191",
                    "8d6fdff168340e954aad4f0f924276cd5b6e31b2",
                    "89bbec947a91917d4676037abb417ceb72770851"
                ]
            },
            {
                "name": "QuasarRAT",
                "count": 698,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "9b4c3ff8dc5891693f443320e3c1167c7cebe2b7",
                    "0f1b05653c3b3ab3bb4ecd772dd024668cbe8df1",
                    "b364395fee8c2e4c9eaf9a2531f6f7ac7bf8e4ae"
                ]
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious URLs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": " \"js.iclickfix\"",
        "totalAttacksThisHour": 45765,
        "lastCalculated": "2026-08-18 22:13 IST"
    }
};
