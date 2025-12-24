// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2025-12-24T10:14:35.732765+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2025-12-24T10:14:35.431734+05:30",
    "lastUpdatedFormatted": "Dec 24, 2025 at 10:14 AM IST",
    "comparisonPeriod": "Dec 23 \u2013 Dec 24, 2025",
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
                "hxxps://wplink[.]cc/HZuIrkRR/?regali-di-natale-amazon-2025[.]html",
                "hxxps://shortwa[.]cc/GaxGUOFu/?weihnachtsgeschenke-amazon-2025[.]html",
                "hxxps://steamcommunitty[.]cc/dlcjungle/rust",
                "hxxp://kotamahjong[.]org[.]pafiikn[.]org/",
                "hxxps://clickwa[.]cc/HQxSRHgi/?regali-di-natale-amazon-2025[.]html"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 1042,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 1042,
                "newInLastHour": 8,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"6bf81a58f47093727e85a5175d3b7042384159ce7088fa94b4476bda09ea401e",
                " \"4acfcdad53d661fdf3619adf8e27cdcf86873016cd39c82ce0017bea39932bc1",
                " \"54cbe048b4ece6183ada3ddfb8b6767d75768a53e8ff58ff4fd2678d18dceaf3",
                " \"02c72d2c2da8bfd13307948c58bb936e8e3ed1f9a939aa52c1343a80a7fe37af",
                " \"2fcbcdc32f4a691796a5a464010fe930907311246a396d8546ac8fbf18283bb5"
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
                "newInLastHour": 1412,
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
                "1[.]15[.]118[.]23",
                "1[.]15[.]51[.]236",
                "1[.]157[.]99[.]66",
                "1[.]171[.]34[.]122"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 5647,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 5647,
                "newInLastHour": 5647,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]13[.]79[.]144",
                "1[.]171[.]34[.]122",
                "1[.]20[.]233[.]186",
                "1[.]213[.]196[.]20",
                "1[.]214[.]197[.]163"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 26400,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 26400,
                "newInLastHour": 26400,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxps://teqvax[.]gethun8le2r[.]ru/cp4n1oc8",
                "hxxp://117[.]241[.]197[.]126:59716/i",
                "hxxps://teqvax[.]gethun8le2r[.]ru/mwewj57n",
                "hxxp://182[.]117[.]68[.]243:48591/i",
                "hxxp://115[.]50[.]62[.]31:38059/i"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 781,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 781,
                "newInLastHour": 768,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"teqvax[.]gethun8le2r[.]ru\"",
                " \"folmir[.]gethun8le2r[.]ru\"",
                " \"wizfem[.]bo0ndc0pe[.]ru\"",
                " \"culdar[.]bo0ndc0pe[.]ru\"",
                " \"54[.]179[.]224[.]147:443\""
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
            "iocCount": 8678,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 8678,
                "newInLastHour": 0,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "57f2f129b4b92f8a5a9b673485771a148c5d6159",
                "064d9b53d5092f63001ccd5e9626d8c361717e62",
                "339b3d43e8b187bb1c1ea84c262336008c436d10",
                "514fb94f0a7068699e25fc15f989d409918371f8",
                "8484eeb5e15cdb579d6f53bfb4ac93783c03e3dd"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 52207,
            "activeSources": 8,
            "criticalAlerts": 36079,
            "activeCampaigns": 201
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 27424,
                "trend": "up",
                "percentage": 2339
            },
            {
                "category": "C2",
                "count": 8655,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 361,
                "trend": "stable",
                "percentage": -3
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
                "count": 26326,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://27[.]223[.]145[.]30:32980/bin[.]sh",
                    "hxxps://sag1[.]cl0udtrace[.]ru/p3ovmjt1",
                    "hxxp://182[.]117[.]68[.]243:48591/bin[.]sh"
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
                    "1[.]15[.]118[.]23",
                    "1[.]15[.]51[.]236"
                ]
            },
            {
                "name": "AsyncRAT",
                "count": 1362,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "3a56a66eb43b679afa1edb58e0fddcadf74bb2a4",
                    "47800989ef4eda671b2a76a0cd9123ec7b0bc324",
                    "ae6ca91be0e1145adf2f7120ca3edec533d7573f"
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
                "count": 599,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "69affd6a91e38229fb655a62a52eb2b7af9fdfb4",
                    "be3b160ebe83bfc2e609bf912b36096e8dd2ffa3",
                    "243253f396aa30124e62cdd95a58cf8a3353fd88"
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
                "name": " \"Mirai",
                "count": 488,
                "types": [
                    "hash"
                ],
                "sampleIndicators": [
                    " \"f5bca3bd65e7373b5c0c858f1869cc6f42b88f1d0a30216642b72bc2af839f78",
                    " \"04ba518de58bed84d295128d5da7b8fcb5b13b31f4d6d2a128f19f416cbcaba6",
                    " \"54f25250d130842188b71279ad473945777e953db4b86c2261ee755812dca74c"
                ]
            },
            {
                "name": " \"js.clearfake\"",
                "count": 367,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"sag1[.]cl0udtrace[.]ru\"",
                    " \"link[.]windm1nd[.]ru\"",
                    " \"hf[.]windm1nd[.]ru\""
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
        "fastestRisingThreat": "Spamhaus DROP List",
        "totalAttacksThisHour": 49539,
        "lastCalculated": "2025-12-24 10:14 IST"
    }
};
