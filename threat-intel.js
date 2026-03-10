// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-03-10T14:27:47.051987+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-03-10T14:27:46.778256+05:30",
    "lastUpdatedFormatted": "Mar 10, 2026 at 02:27 PM IST",
    "comparisonPeriod": "Mar 09 \u2013 Mar 10, 2026",
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
                "hxxp://bafybeieslyppdjfmmprcwy5x5q26aldivv27cnabjkzelit57mm2a3ems4[.]ipfs[.]infura-ipfs[.]io/",
                "hxxps://hellpdesk[.]net/?r=4212803e-2d6e-4041-93d4-d56b5ae4124f&rg=eu",
                "hxxps://hguijhfffhhh[.]weebly[.]com/",
                "hxxp://bafybeid6wkyhpgyjxckfn3mok2y6qqmbj62bcbra46cex33tlllv66onqu[.]ipfs[.]infura-ipfs[.]io/",
                "hxxps://more-grocery-603669[.]framer[.]app/"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 625,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 625,
                "newInLastHour": 54,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"f49a18cbdc206e3d73e7ce0cf33c5f0d5b91855ec979ce27c91fff3b6e4d129c",
                " \"2dc1d57d7599fc665b4fc94811c7ff03de4950106772c52789147213abb2424e",
                " \"ff372850545c7ce1939b874338f368871c72c45a37d3ef0385c1b2b76622cde5",
                " \"b4c08722442b890a0219b005c47e7ebd0b45e9b54ff196d8c5e4f50b0f38fa80",
                " \"fdb5302d39e0cb68ec1c9f883f6155dfa7e0b4dac120e3796eff1e50b9af418e"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1537,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1537,
                "newInLastHour": 1,
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
                "1[.]14[.]3[.]240",
                "1[.]15[.]51[.]236",
                "1[.]170[.]47[.]69",
                "1[.]170[.]60[.]81",
                "1[.]180[.]115[.]126"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 7461,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 7461,
                "newInLastHour": 7461,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]15[.]136[.]28",
                "1[.]161[.]39[.]103",
                "1[.]162[.]231[.]28",
                "1[.]192[.]189[.]251",
                "1[.]214[.]117[.]218"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 19213,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 19213,
                "newInLastHour": 19213,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://117[.]241[.]56[.]53:60662/i",
                "hxxps://buildsprou[.]goldsys[.]in[.]net/verification[.]google",
                "hxxp://117[.]216[.]177[.]12:39054/bin[.]sh",
                "hxxp://115[.]48[.]0[.]169:38334/i",
                "hxxp://158[.]94[.]211[.]222/files/7942715918/1SbgglW[.]exe"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 1156,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 1156,
                "newInLastHour": 1147,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"45[.]88[.]186[.]189:4782\"",
                " \"buildsprou[.]goldsys[.]in[.]net\"",
                " \"x2zev[.]goldsys[.]in[.]net\"",
                " \"drownthinsaltroutese[.]pw\"",
                " \"sausagenighte[.]online\""
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
            "iocCount": 9206,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 9206,
                "newInLastHour": 67,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "581cff3c3ff5140030c1b2dae80093f37df765df",
                "7ca748d42ca714a0017f176dd942ae77739b34be",
                "abc97e073da46b3dfe0c8a5ccfc416eeb221631c",
                "80c481f9b55d711b33854644fd736f4b642b42b8",
                "597545892f122729047032705d557fe787138c32"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 46744,
            "activeSources": 8,
            "criticalAlerts": 28900,
            "activeCampaigns": 207
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 19768,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "C2",
                "count": 9132,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 379,
                "trend": "stable",
                "percentage": -1
            },
            {
                "category": "Phishing",
                "count": 302,
                "trend": "stable",
                "percentage": 0
            }
        ],
        "targetedSectors": [
            {
                "name": "General",
                "percentage": 97
            },
            {
                "name": "Tech",
                "percentage": 2
            },
            {
                "name": "Finance",
                "percentage": 0
            }
        ],
        "campaigns": [
            {
                "name": "malware_download",
                "count": 19070,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://115[.]55[.]229[.]129:49633/bin[.]sh",
                    "hxxps://lp3-qv06[.]vertexanchor[.]in[.]net/verification[.]google",
                    "hxxp://42[.]238[.]192[.]58:49977/bin[.]sh"
                ]
            },
            {
                "name": "CINS Threat List",
                "count": 15000,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]15[.]51[.]236",
                    "1[.]170[.]47[.]69",
                    "1[.]170[.]60[.]81"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1538,
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
                "count": 1387,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "e074dd74eb8eb98468a94eb43b3487fe2b7f5980",
                    "d5a586a42fd4e36396467ae8d16045a5efd6bada",
                    "b4f112278f6f59e5e9d0a2aeb252c111a3ae8603"
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
                "count": 633,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "6351234662461217b8b3178bd777b2dffe766ead",
                    "6b58bfd60fc3150331254a46d2e75f0856f5d0ae",
                    "78372e9666177fc65dbd5a41286bcd2f22c12bf0"
                ]
            },
            {
                "name": "LummaStealer",
                "count": 539,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "f9e8d701de1740086da792e2c9be70df261e1832",
                    "20f30e05d2a2de117bdad78811946e112dc4dd6c",
                    "2987e30402370bdcbf291aedc9cd52a9a79bda0c"
                ]
            },
            {
                "name": "Vidar",
                "count": 386,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "597545892f122729047032705d557fe787138c32",
                    "8af633744198ffd5bb1e437173eb0292f95c668e",
                    "edda834f9d99ba5d22b01adfab9c69873fa7c47c"
                ]
            },
            {
                "name": " \"js.clearfake\"",
                "count": 382,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"lp3-qv06[.]vertexanchor[.]in[.]net\"",
                    " \"core-t9[.]tensorfield[.]in[.]net\"",
                    " \"main-p4[.]tensorfield[.]in[.]net\""
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
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious IPs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": "SSH Attacks",
        "totalAttacksThisHour": 43248,
        "lastCalculated": "2026-03-10 14:27 IST"
    }
};
