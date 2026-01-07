// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-01-08T02:06:20.996884+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-01-08T02:06:20.713102+05:30",
    "lastUpdatedFormatted": "Jan 08, 2026 at 02:06 AM IST",
    "comparisonPeriod": "Jan 07 \u2013 Jan 08, 2026",
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
            "iocCount": 571,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 571,
                "newInLastHour": 11,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"808fb4904d102f9ca6bc523db3be820d7614230f843ae128ddf86f946e8980f7",
                " \"c0900fed685ecf4bc6816d16edeb0677562d2bc3d0730df7e8f9a6e21f97889c",
                " \"c91fba8de4add13e837103826c3920c1fba53789cb257ba8f95b46fbfa768418",
                " \"fe653be58ebd9730fb9d852bc11cfd528c2ee08ec86cef8f3fc0bc44717b4eac",
                " \"58dd71aaa4f164ec08db9d54e30773965f5a37db5c4bf10109f04a3cd7a45c76"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1454,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1454,
                "newInLastHour": 13,
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
            "iocCount": 5216,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 5216,
                "newInLastHour": 5216,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]14[.]95[.]153",
                "1[.]194[.]236[.]11",
                "1[.]201[.]17[.]200",
                "1[.]214[.]197[.]163",
                "1[.]234[.]83[.]55"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 23314,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 23314,
                "newInLastHour": 23314,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://123[.]5[.]125[.]39:52348/bin[.]sh",
                "hxxp://109[.]115[.]242[.]166:52720/i",
                "hxxp://124[.]95[.]125[.]71:37538/i",
                "hxxp://130[.]12[.]180[.]20:36695//cat[.]sh",
                "hxxp://60[.]18[.]17[.]240:43244/i"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 1034,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 1034,
                "newInLastHour": 588,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"hxxps://cdn[.]jsdelivr[.]net/gh/fabriziovigna11/cdnd4510-712-s4-500/wefr\"",
                " \"3[.]132[.]202[.]210:443\"",
                " \"23[.]94[.]214[.]39:4444\"",
                " \"45[.]80[.]230[.]239:80\"",
                " \"103[.]23[.]172[.]132:443\""
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
            "iocCount": 8730,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 8730,
                "newInLastHour": 3,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "1cc94b7dc048c1564568bd234fee22d221c83a31",
                "3c08d459113e55b83f6097b80bb37a69e7b5c36c",
                "a5596f028f230edd3854fefc73cd806e09a1ec47",
                "91af5eca7a8fe3f022927a6f730b67fa01185474",
                "fc31a942240811d2698f097cd96fec876b6a0c83"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 50333,
            "activeSources": 8,
            "criticalAlerts": 32558,
            "activeCampaigns": 212
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 23847,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "C2",
                "count": 8711,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 528,
                "trend": "stable",
                "percentage": 0
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
                "count": 23256,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://xoclo[.]fordvungtau[.]com[.]vn/csk_arm5",
                    "hxxp://xoclo[.]fordvungtau[.]com[.]vn/csk_m68k",
                    "hxxp://xoclo[.]fordvungtau[.]com[.]vn/csk_arm7"
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
                "name": "Spamhaus DROP List",
                "count": 1441,
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
                "count": 1363,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "042a15f1d8ee27877713f2981272b7c125b6ec18",
                    "3a56a66eb43b679afa1edb58e0fddcadf74bb2a4",
                    "47800989ef4eda671b2a76a0cd9123ec7b0bc324"
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
                "count": 334,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "8dbe1d838c3ca9cb0217813c4909cb4be9fa39db",
                    "57f2f129b4b92f8a5a9b673485771a148c5d6159",
                    "9d33c03bf55d9c545df8079f848800f219cccf29"
                ]
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious URLs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": "SSH Attacks",
        "totalAttacksThisHour": 44449,
        "lastCalculated": "2026-01-08 02:06 IST"
    }
};
