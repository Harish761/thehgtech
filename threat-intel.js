// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-02-06T14:27:20.421320+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-02-06T14:27:20.127626+05:30",
    "lastUpdatedFormatted": "Feb 06, 2026 at 02:27 PM IST",
    "comparisonPeriod": "Feb 05 \u2013 Feb 06, 2026",
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
                "hxxp://yezxm[.]cn/",
                "hxxps://florina[.]digital/ires/hidme26/",
                "hxxps://chafengshui[.]com/",
                "hxxps://coinbase-help[.]blogspot[.]com/2025/11/coinbase[.]html",
                "hxxps://coinbase-help[.]blogspot[.]com/2025/11/"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 1206,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 1206,
                "newInLastHour": 45,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"31dd07a9e3c84d5d139e41bba7a39fe449de128bdf7498062fb3d21f3d121fb5",
                " \"1f9d84dddfde1167a4c51ca35e0b8cb9aa22fb4f0e909b52587b542fc88e0430",
                " \"dd38f3b9c649eb51aa73bfd8a5761d423a90533bae188d9e7260736ca79c3d03",
                " \"2cbb6e278e9e92642e2fa2e2c0d191571e10cdd38a2a303cc7bc21448dd03927",
                " \"bc3323cddbbcb8367c894f637dcd7251aa2208391f5ed44998eba0c2e62fb548"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1474,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1474,
                "newInLastHour": 18,
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
                "1[.]119[.]209[.]130",
                "1[.]15[.]116[.]189",
                "1[.]157[.]80[.]72",
                "1[.]170[.]57[.]68",
                "1[.]170[.]7[.]241"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 7983,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 7983,
                "newInLastHour": 7983,
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
                "1[.]220[.]64[.]218"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 21256,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 21256,
                "newInLastHour": 21256,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://42[.]229[.]233[.]186:57355/i",
                "hxxp://112[.]237[.]45[.]170:34353/i",
                "hxxp://59[.]97[.]179[.]13:59830/bin[.]sh",
                "hxxp://130[.]12[.]180[.]120:8080/file/tbk[.]sh",
                "hxxp://130[.]12[.]180[.]120/file/adb-shell[.]sh"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 1171,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 1171,
                "newInLastHour": 1145,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"104[.]234[.]240[.]23:80\"",
                " \"104[.]234[.]240[.]23:443\"",
                " \"hxxps://mail[.]binbinartgallery[.]com/\"",
                " \"hxxps://jcptacticalllc[.]com/\"",
                " \"hxxps://mail[.]casadostoldoslimeira[.]com[.]br/\""
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
            "iocCount": 8850,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 8850,
                "newInLastHour": 35,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "e224a0e12477fad80756859e96bf89af4af904ef",
                "1ea8ec48d9f0b8873db62ceb0d56bc89bd5b326e",
                "971eff3b46008afa8e51412a1f92e56fb16c0c8b",
                "33775d94078769a5fb2d35798e12075b6141af73",
                "6171d10623d6850c8048fef17a4e0f8d6462b3e7"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 48945,
            "activeSources": 8,
            "criticalAlerts": 31249,
            "activeCampaigns": 219
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 22427,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "C2",
                "count": 8822,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 824,
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
                "name": "malware_download",
                "count": 21157,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://110[.]39[.]236[.]58:58136/bin[.]sh",
                    "hxxp://110[.]37[.]32[.]228:51075/i",
                    "hxxp://115[.]49[.]24[.]201:37258/i"
                ]
            },
            {
                "name": "CINS Threat List",
                "count": 15000,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]119[.]209[.]130",
                    "1[.]15[.]116[.]189",
                    "1[.]15[.]51[.]122"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1458,
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
                "count": 1377,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "a6d675b60e925179eaf8834d92a4744ddcd10eb3",
                    "f1bb8bd97d70c986438f0cd5f46cd2992875659a",
                    "98bd8df0057497dc91b608f7db0d0358c1e75d6b"
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
                "count": 613,
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
                "name": " \"n/a",
                "count": 345,
                "types": [
                    "hash"
                ],
                "sampleIndicators": [
                    " \"30fc234d3430e2bdd8d738dd12e5759822bfe4c2d0830be5eb91302478d27afe",
                    " \"5342651023332e9872144e2a72862eebe893d66ada4bf8179164e36b5d631b8d",
                    " \"045f2238026f838203f937a4b8a60893320023bece2d5c1ebd0f25af67df00e7"
                ]
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious IPs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": "SSH Attacks",
        "totalAttacksThisHour": 45785,
        "lastCalculated": "2026-02-06 14:27 IST"
    }
};
