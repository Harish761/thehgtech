// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2025-12-12T18:32:05.440441+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2025-12-12T18:32:05.073178+05:30",
    "lastUpdatedFormatted": "Dec 12, 2025 at 06:32 PM IST",
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
                "hxxps://portalseguro-1[.]site/inicio/",
                "hxxp://peeldsb-rnicrosoft-login[.]work[.]gd/",
                "hxxps://webb-d4n4id[.]oofficial[.]biz[.]id/",
                "hxxp://www[.]robiox[.]com[.]py/users/382776298708/profile/",
                "hxxps://click2claims[.]com/amazon3/claims[.]html?lptoken=17f6651f528427c9491e&cep=N4Igdgpg7g+gFgSwC4wQExALhANgGYDMADEQJwQAcAtAOzkDGVALAIwEtUBGeOTVATPxZF6aehAL8mTEABoQANwQBnZKgzYArEwg1NpNESp4mAQxzM8NDp1LcqFUzU6chm/hUFzFKtUgQAthDKSKYBAA5YIPxE/JpULPwJ/AAqRDiY/KSYZAB0iRQAWt5KqkgA9gBO6lGcmhQ0NBQs1JwiRtKiVKakRAQONPSmmvim/JwS3kMRpggA5mA12DgUEGh47kyamngsmsJEiaTkaxTeYOVoEEsgRDAs55fXSACe4RBRADKmYGgIYHNHlcYPQ4LMwFgANq3e4gAC68nClWCEAANhB6Eg1jALlcsKBXu8vj8/gDvKFKnMICh0FEcL0KDgcCIWEw0A0DokXHV+Hggddadg7g95JAAB5IfEgQkfbAAeTweAglXJpkp1JuKzWeCInBo/DQpnoLB1h15YwIpHo/JudztMBgwsdMH45wgEqwYAArqjUQBfP3yUHgmDhcplBDlCGYUD0L2VZFgJAAOSeAElfu6sER5JxKj9QRm/uJlFC4YGQCoYMi/sjMVgkJUvRB5ABHZSRGMgUxoBQgsLhWYLG7AHv9iLqP3eHt98qK5UjmcKpWVNNoKfyUyKhCohCmLEjgAC/zw5Vyyi9nBBYLAkFRh433d+lXK6BHVwUa8fJJfb7fATQTQomAD81wAWUAx96F3egAGsjxPM9oIQOD0AfKZkX3BAFAFDQQGAehMP8HCvwwiAsJwnEwllfDCPI4iIGTajHzmWY8OAVj0BYtiYAAoDsA4tiIM0R90DwUxgLE0xRKCBBJNkmSIAQXjAPkpThMfAIjWArT6E0o0VP4/DdI07xyjY4DzK4syeL4yyhMgsz52qMBqOA48wFPXJpkHeYwFyOcVyooJ0PkZRrWwMCSBYGAAEEwNiwo5WTABhWKACUABEYDTOUAGVvC9CSBKKx8vS9QV8I8ryfKHfzXJCqcKyrSAoCwcTUWUCA/SAA="
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 812,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 812,
                "newInLastHour": 114,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"54f81ef56bf697c6bb0be53e87973618ef3be59e1539c634646273544dd52d0f",
                " \"5f6a6db3743bbe2132f934943e1fe431d70290878193c2d47c89dec99c2228cd",
                " \"eeb290df8a8b21c8452b6b766d15d139191db1c91c2d63bfdd1cf37aa277f450",
                " \"bea008c60facfa6bab1bf77d5fd9252e5ef6213f25f70f1863fa59267f3d69e9",
                " \"14d8b15c4be76ef562899bab4de96509e3c8d168de0e4a0043b30191239fedee"
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
                "1[.]15[.]118[.]23",
                "1[.]173[.]80[.]250",
                "1[.]177[.]22[.]68",
                "1[.]181[.]114[.]38"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 5579,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 5579,
                "newInLastHour": 5579,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]1[.]179[.]25",
                "1[.]12[.]53[.]235",
                "1[.]12[.]64[.]80",
                "1[.]13[.]79[.]144",
                "1[.]162[.]231[.]97"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 28873,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 28873,
                "newInLastHour": 28873,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxps://raw[.]githubusercontent[.]com/shreyas495/albiononline-cheat/main/bossed/albiononline-cheat-v1[.]7[.]zip",
                "hxxps://raw[.]githubusercontent[.]com/darkeye789/bloodhound-cheatsheet/main/cheatsheet/bloodhound-cheatsheet-1[.]3-alpha[.]1[.]zip",
                "hxxps://raw[.]githubusercontent[.]com/Textor205/fullyexternal-dota2/main/emulator/fullyexternal-dota2-3[.]9[.]zip",
                "hxxps://github[.]com/shreyas495/albiononline-cheat/raw/refs/heads/main/bossed/albiononline-cheat-v1[.]7[.]zip",
                "hxxps://raw[.]githubusercontent[.]com/Baha336/Cs2-ColaPredator-Hack-Cheat-Rcs-Esp-Aimbot-Exploit-Hwid-Spoofer-Csgo2/main/csgo/dependencies/microsoft/Cs2-ColaPredator-Hack-Cheat-Rcs-Esp-Aimbot-Exploit-Hwid-Spoofer-Csgo2-v3[.]7-alpha[.]1[.]zip"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 2379,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 2379,
                "newInLastHour": 2154,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"vz[.]snowcrest[.]ru\"",
                " \"cacodsq[.]click\"",
                " \"raisinc[.]cyou\"",
                " \"genustt[.]cyou\"",
                " \"servilg[.]click\""
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
            "iocCount": 8618,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 8618,
                "newInLastHour": 0,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "d290f26e5af29e87034418cfd5b100d7d2fead9d",
                "50def7da0eb236fcb1d55eb802039ddd95049da9",
                "d6e284f5f98ea579d66235833e9f2dc1bfaa59dd",
                "84c5b32bdca11a7e3850b93be0624cd8f75f2ef5",
                "7df151365b79ad2689b01337e63203476768d37a"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 57264,
            "activeSources": 8,
            "criticalAlerts": 38144,
            "activeCampaigns": 221
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 29549,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "C2",
                "count": 8595,
                "trend": "up",
                "percentage": 8581
            },
            {
                "category": "Botnet",
                "count": 1342,
                "trend": "stable",
                "percentage": -2
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
                "count": 28732,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxps://cwt[.]m1stleaf[.]ru/63v5ljdc",
                    "hxxps://cwt[.]m1stleaf[.]ru/616k64bq",
                    "hxxps://qo1u[.]m1stleaf[.]ru/r8nmokw2"
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
                    "1[.]177[.]22[.]68",
                    "1[.]181[.]114[.]38"
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
                "count": 461,
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
                "name": " \"unknown_stealer\"",
                "count": 400,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"hxxp://bamboopaw2021[.]sbs/b5a52ebb310b65f06dd10cfe69f72363/\"",
                    " \"bamboopaw2021[.]sbs\"",
                    " \"hxxps://api-w11c[.]onrender[.]com/api/send\""
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
        "totalAttacksThisHour": 52024,
        "lastCalculated": "2025-12-12 18:32 IST"
    }
};
