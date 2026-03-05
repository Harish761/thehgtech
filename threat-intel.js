// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-03-06T01:14:09.057365+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-03-06T01:14:08.782588+05:30",
    "lastUpdatedFormatted": "Mar 06, 2026 at 01:14 AM IST",
    "comparisonPeriod": "Mar 05 \u2013 Mar 06, 2026",
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
                "hxxp://loggiinbitmartt[.]webflow[.]io/",
                "hxxp://www[.]live-metaii-maask-logg-iin[.]godaddysites[.]com/",
                "hxxps://metamusklogiz-teac-logg[.]godaddysites[.]com/",
                "hxxp://www[.]metamusklogiz-teac-logg[.]godaddysites[.]com/",
                "hxxps://shorten[.]tv/neververyteam"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 747,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 747,
                "newInLastHour": 14,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"94056a60904d7dd021e4c29b87e550b3d5f507c7f38ce5fcb2599d4104a11adc",
                " \"bd7e4b9beae675f0a54cc53506a01192c34ea846c9762857e6281853da8e343d",
                " \"c32008c409c2d47c98ee62ad453ed951426c8e45f40b2a8f911fecd5936070d6",
                " \"0203d3b80409b74c74b0144c394eea39fd55381f9cc3893478906ae105c0174d",
                " \"16b28d499b3e3e7daa18346f4da791dd680daf5e09f3744693064476ba503afe"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 217,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 217,
                "newInLastHour": 60,
                "lastUpdate": "just now"
            },
            "types": [
                "ip-range"
            ],
            "sampleIndicators": [
                "5.101.82.0/24",
                "23.146.241.0/24",
                "23.147.52.0/24",
                "23.147.148.0/24",
                "23.147.156.0/24"
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
                "1[.]15[.]118[.]23",
                "1[.]170[.]22[.]164",
                "1[.]170[.]61[.]110",
                "1[.]176[.]134[.]251",
                "1[.]177[.]162[.]3"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 5559,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 5559,
                "newInLastHour": 5559,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]12[.]217[.]80",
                "1[.]13[.]6[.]145",
                "1[.]163[.]245[.]233",
                "1[.]204[.]166[.]3",
                "1[.]214[.]197[.]163"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 19181,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 19181,
                "newInLastHour": 19181,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxps://maku-base[.]makuhaportfol[.]in[.]net/verification[.]google",
                "hxxp://42[.]232[.]84[.]165:43244/i",
                "hxxp://182[.]126[.]125[.]215:36956/i",
                "hxxps://port-fol[.]makuhaportfol[.]in[.]net/verification[.]google",
                "hxxp://42[.]232[.]84[.]165:43244/bin[.]sh"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 1277,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 1277,
                "newInLastHour": 1273,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"port-v8[.]makuhaportfol[.]in[.]net\"",
                " \"maku-base[.]makuhaportfol[.]in[.]net\"",
                " \"port-fol[.]makuhaportfol[.]in[.]net\"",
                " \"synch03[.]corvetsynchron[.]in[.]net\"",
                " \"46[.]149[.]77[.]24:443\""
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
                "162[.]243[.]103[.]246",
                "178[.]62[.]3[.]223",
                "27[.]133[.]154[.]218",
                "34[.]204[.]119[.]63"
            ]
        },
        "SSL Blacklist": {
            "description": "Malicious SSL certificates used by botnet C2 servers. Helps detect encrypted malware communications.",
            "website": "https://sslbl.abuse.ch/",
            "updateFrequency": "Daily",
            "iocCount": 9136,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 9136,
                "newInLastHour": 21,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "55079857bbb8b752780408b8f5ab6e0b6d41b96f",
                "ce5d858d667d8ff8b7368054839cb9861c6dcfac",
                "bdcaabf46794dc1cddf8c619938430fcfad5d281",
                "b242cf8e0628b8a1804d04399e9170fb5ca86d64",
                "a77c21fc104c979fa3ce6b6d8627f25a4356712f"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 47076,
            "activeSources": 8,
            "criticalAlerts": 29054,
            "activeCampaigns": 204
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 19922,
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
                "count": 815,
                "trend": "stable",
                "percentage": -9
            },
            {
                "category": "Phishing",
                "count": 303,
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
                "count": 19140,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://124[.]95[.]124[.]97:39702/i",
                    "hxxps://micro-v5[.]hryvmicrobiol[.]in[.]net/verification[.]google",
                    "hxxp://124[.]95[.]124[.]97:39702/bin[.]sh"
                ]
            },
            {
                "name": "CINS Threat List",
                "count": 15000,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]15[.]118[.]23",
                    "1[.]170[.]22[.]164",
                    "1[.]170[.]61[.]110"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1472,
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
                "count": 1388,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "d5a586a42fd4e36396467ae8d16045a5efd6bada",
                    "b4f112278f6f59e5e9d0a2aeb252c111a3ae8603",
                    "08ed72afb9e65a6b0c216c2f47dfea81d64c9289"
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
                "count": 630,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "78372e9666177fc65dbd5a41286bcd2f22c12bf0",
                    "58d0977e2eb2f58b80c1441ac8a77c7da332b266",
                    "f856334cbdfb8b6d59158085280f3b830fab2fba"
                ]
            },
            {
                "name": "LummaStealer",
                "count": 537,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "2987e30402370bdcbf291aedc9cd52a9a79bda0c",
                    "6fd95f4a2d9cec238cbe2e1756890381c4fae3cb",
                    "e2293f74d8d72bde90bb0424038259a9e3126e1b"
                ]
            },
            {
                "name": "Vidar",
                "count": 387,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "c6c5cbb14fe2839ef4ece10f4b65bf92808f8440",
                    "a5d8a396d7553814e5ac56706fde721dce28b849",
                    "dd1f8bbdf08eedbfdc5518f707f5009721d778a1"
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
        "totalAttacksThisHour": 41412,
        "lastCalculated": "2026-03-06 01:14 IST"
    }
};
