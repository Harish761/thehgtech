// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2025-12-11T00:24:07.568920+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2025-12-11T00:24:07.214203+05:30",
    "lastUpdatedFormatted": "Dec 11, 2025 at 12:24 AM IST",
    "comparisonPeriod": "Dec 10 \u2013 Dec 11, 2025",
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
                "hxxp://trenchesoflife[.]netlify[.]app/",
                "hxxp://parking[.]fines31[.]top/i/",
                "hxxp://activatemembercc[.]com/dd[.]html",
                "hxxp://activatemembercc[.]com/fullz[.]html",
                "hxxps://qqwwertyza[.]edgeone[.]app/"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 746,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 746,
                "newInLastHour": 24,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"d36d3d941dfdd327600429dd566b576d9934ca30ee2caf5cbacaf2113cfb3048",
                " \"c7f7ccd1145ae14e5dc9000fd88a59bbc08f12d70f9ba34c3df631162dc54894",
                " \"f05b323569eea22a77466ad81b2269a088c65afef9dcd3aae7694d1082956c44",
                " \"0d24ee35cf06c1519b2b075ccaf2bf491635639b8756223d3b93c8a3a6afe7b9",
                " \"c31fcc01f0f596380a39690803dc56937cf44e444e9343a6acc0bb9ea400ad96"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1493,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1493,
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
                "1[.]1[.]176[.]58",
                "1[.]15[.]118[.]23",
                "1[.]176[.]134[.]251",
                "1[.]177[.]162[.]4",
                "1[.]177[.]22[.]68"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 6247,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 6247,
                "newInLastHour": 6247,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]13[.]19[.]219",
                "1[.]13[.]79[.]144",
                "1[.]15[.]24[.]14",
                "1[.]161[.]49[.]186",
                "1[.]162[.]251[.]28"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 29442,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 29442,
                "newInLastHour": 29442,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxps://github[.]com/pawanpandey29/hometask/raw/refs/heads/main/Application[.]zip",
                "hxxps://www[.]acro-drive[.]com/b/conf-nasta[.]mp4",
                "hxxps://cee[.]fe2rsos5is[.]ru/rmtb55lb",
                "hxxps://www[.]mediafire[.]com/file_premium/h1da134t1bycdqv/easy-bin[.]zip/file",
                "hxxps://github[.]com/ccer1l/Monotone-HWID-Spoofer/raw/refs/heads/main/Monotone[.]exe"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 3230,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 3230,
                "newInLastHour": 3035,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"122[.]188[.]44[.]12:10250\"",
                " \"pd[.]fu5spurch2s[.]ru\"",
                " \"cee[.]fe2rsos5is[.]ru\"",
                " \"light[.]fe2rsos5is[.]ru\"",
                " \"79[.]134[.]225[.]73:54923\""
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
            "iocCount": 8588,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 8588,
                "newInLastHour": 0,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "d7e0a3afe5bc152da922505aacd1a84489eb737d",
                "8374aa1e49eb8fbc2e7ba4ee5aff54591f4d6b6d",
                "d1f7fd94b5fdc4a570d49ff0e3891ce80c27e4ec",
                "ec6031f63b6551e10f61276781c325e6028cb1bf",
                "48f665e237042042432ae4d2aba268d6b091e2af"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 58776,
            "activeSources": 8,
            "criticalAlerts": 38733,
            "activeCampaigns": 214
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 30146,
                "trend": "stable",
                "percentage": -2
            },
            {
                "category": "C2",
                "count": 8587,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 1798,
                "trend": "stable",
                "percentage": -5
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
                "count": 29338,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://joker[.]proxywall[.]p-e[.]kr/main_x86",
                    "hxxp://joker[.]proxywall[.]p-e[.]kr/main_arm6",
                    "hxxp://joker[.]proxywall[.]p-e[.]kr/main_mips"
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
                    "1[.]15[.]118[.]23",
                    "1[.]176[.]134[.]251"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1497,
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
                "name": " \"unknown_stealer\"",
                "count": 840,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"api-logs-b794[.]onrender[.]com\"",
                    " \"hxxps://api-logs-b794[.]onrender[.]com/api/send\"",
                    " \"hxxps://api-logs-b794[.]onrender[.]com/api/dcinjection-send\""
                ]
            },
            {
                "name": " \"win.dcrat\"",
                "count": 767,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"87[.]120[.]107[.]24:5050\"",
                    " \"sex[.]55clubx[.]net\"",
                    " \"sex[.]servicecenters[.]in[.]net\""
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
        "topAttackVector": "Malicious URLs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": "malware_download",
        "totalAttacksThisHour": 54052,
        "lastCalculated": "2025-12-11 00:24 IST"
    }
};
