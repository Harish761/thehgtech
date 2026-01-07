// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-01-07T18:34:55.771947+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-01-07T18:34:55.483110+05:30",
    "lastUpdatedFormatted": "Jan 07, 2026 at 06:34 PM IST",
    "comparisonPeriod": "Jan 06 \u2013 Jan 07, 2026",
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
                "hxxps://mr-rabi-111[.]github[.]io/Amazon[.]in---Clone",
                "hxxp://main-phone-080739[.]framer[.]app/",
                "hxxps://roblox[.]com[.]py/games/2753915549/TIGER-Blox-Fruits?privateServerLinkCode=87657924586401120235406872763526",
                "hxxp://creatorrewardspro[.]com/",
                "hxxps://www[.]robiox[.]com[.]py/games/121864768012064/UPD-Fish-It?privateServerLinkCode=263390665787799152850136178024"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 534,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 534,
                "newInLastHour": 40,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"0c4dc8d9c55677a0db96f67decea563c7145f4c6e61d41534e874939c45297a4",
                " \"5a9e3949576123117bf3dc3e3b2138c687e0704e98bc748a3ecbf1da1425fe18",
                " \"2de4842e5b335d0f59073cc0e26c8900498d3daddf2b809e6abbf795a75311ca",
                " \"1418475d89f2dfe538083b85578f311b02428920132694a7a4e8e8a061b546ba",
                " \"de1053ee2236b2bdeeec4f1b5ebb9c0b35676196a199d7cc56641d5710d47c53"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1457,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1457,
                "newInLastHour": 1393,
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
                "1[.]15[.]14[.]29",
                "1[.]15[.]51[.]236",
                "1[.]157[.]99[.]66"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 5038,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 5038,
                "newInLastHour": 5038,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]14[.]95[.]153",
                "1[.]201[.]17[.]200",
                "1[.]214[.]197[.]163",
                "1[.]234[.]83[.]55",
                "1[.]238[.]106[.]229"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 23090,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 23090,
                "newInLastHour": 23090,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://182[.]127[.]109[.]140:44753/i",
                "hxxp://219[.]157[.]210[.]139:35362/bin[.]sh",
                "hxxp://125[.]47[.]108[.]34:57746/bin[.]sh",
                "hxxp://123[.]8[.]176[.]76:49511/i",
                "hxxp://85[.]12[.]192[.]249:47644/bin[.]sh"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 997,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 997,
                "newInLastHour": 551,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"6bbwz4471hjbx[.]cfc-execute[.]bj[.]baidubce[.]com\"",
                " \"47[.]237[.]177[.]10:1688\"",
                " \"47[.]237[.]162[.]153:1123\"",
                " \"hxxp://47[.]84[.]113[.]198:8888/supershell/login/\"",
                " \"www[.]kasperskysecure[.]com\""
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
                "137[.]184[.]9[.]29",
                "162[.]243[.]103[.]246",
                "167[.]86[.]75[.]145",
                "50[.]16[.]16[.]211"
            ]
        },
        "SSL Blacklist": {
            "description": "Malicious SSL certificates used by botnet C2 servers. Helps detect encrypted malware communications.",
            "website": "https://sslbl.abuse.ch/",
            "updateFrequency": "Daily",
            "iocCount": 8726,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 8726,
                "newInLastHour": 0,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "36a986253d83188ceb6ec2273420bfe357074763",
                "efe213ac40a0cdf4190481c79eca5e183d511829",
                "28193206edc07f8b4f4bae53caa9d8bef4aaf75d",
                "8a8b05c977233e82e5e73e3bae77e1c3ed56c8f2",
                "69d4b3088855f9a2b0f99102a67814b68a6c6507"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 48686,
            "activeSources": 8,
            "criticalAlerts": 32141,
            "activeCampaigns": 218
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 23438,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "C2",
                "count": 8703,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 661,
                "trend": "stable",
                "percentage": -6
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
                "count": 22673,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://113[.]221[.]97[.]165:18727/[.]i",
                    "hxxp://117[.]241[.]199[.]209:57904/i",
                    "hxxp://115[.]63[.]10[.]215:34072/bin[.]sh"
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
                    "1[.]15[.]14[.]29"
                ]
            },
            {
                "name": "AsyncRAT",
                "count": 1364,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "042a15f1d8ee27877713f2981272b7c125b6ec18",
                    "1a5aa767c2675014c5c0a10b2d9f4c63844a84f8",
                    "3a56a66eb43b679afa1edb58e0fddcadf74bb2a4"
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
                "count": 601,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "f14faecdb4b6a8e4722eff35b08ea8dfadf7b5f4",
                    "2be6327a2b03aed6322898941f4e6c7ca29de8e5",
                    "69affd6a91e38229fb655a62a52eb2b7af9fdfb4"
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
                "name": "Malware",
                "count": 333,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "57f2f129b4b92f8a5a9b673485771a148c5d6159",
                    "9d33c03bf55d9c545df8079f848800f219cccf29",
                    "ce42969f947b5fdfde23bed7739689f99fc260e4"
                ]
            },
            {
                "name": "Generic Phishing",
                "count": 300,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxps://callback[.]yooroocrio[.]com[.]ru/DoZau!is/",
                    "hxxps://roblox[.]gf/users/9015844551/profile",
                    "hxxp://b45038[.]com/egame/160"
                ]
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious URLs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": "Spamhaus DROP List",
        "totalAttacksThisHour": 45416,
        "lastCalculated": "2026-01-07 18:34 IST"
    }
};
