// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-03-08T18:38:36.126168+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-03-08T18:38:35.836977+05:30",
    "lastUpdatedFormatted": "Mar 08, 2026 at 06:38 PM IST",
    "comparisonPeriod": "Mar 07 \u2013 Mar 08, 2026",
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
                "hxxp://weizihua[.]github[.]io/MyEtherWallet/",
                "hxxp://www[.]aposicilia[.]com/fr/",
                "hxxp://landjugend-beckum[.]de/6/6/3/login[.]php",
                "hxxps://imtokens[.]co/",
                "hxxps://roblox[.]com[.]ge/games/134374929677249/Obby-Vibe-Zone-NEW-POSES?privateServerLinkCode=25600398208546000332254510437439"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 1315,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 1315,
                "newInLastHour": 16,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"9c337452ed46748b08e42569a8a3a3146137a467991838f52c6e8a26274837c4",
                " \"719eba524be5955b258a721bb879f4cff3296bad8178bdc6b612b109b28c6fa3",
                " \"e807be75045514f477ef6ccaf07f211101a3df7c14971550bb80a14aa20ab00f",
                " \"4bb1a9591d047673fb0fbad3d7c41c2d55fbaeaeab26a61a205d278204316f7b",
                " \"8196b3c51e5b6519e101a5a3e8df77435ac19e9d58bfd9cbaac4b03492abc79a"
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
                "1[.]170[.]60[.]81",
                "1[.]180[.]252[.]30",
                "1[.]188[.]101[.]189",
                "1[.]188[.]23[.]25",
                "1[.]192[.]177[.]65"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 6586,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 6586,
                "newInLastHour": 6586,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]117[.]75[.]174",
                "1[.]12[.]45[.]226",
                "1[.]15[.]136[.]101",
                "1[.]15[.]136[.]28",
                "1[.]162[.]247[.]213"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 19366,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 19366,
                "newInLastHour": 19366,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxps://hub-path[.]crimsonridge[.]in[.]net/verification[.]google",
                "hxxp://27[.]37[.]230[.]121:53155/bin[.]sh",
                "hxxps://g755rs[.]crimsonridge[.]in[.]net/verification[.]google",
                "hxxp://222[.]133[.]100[.]187:40255/bin[.]sh",
                "hxxps://taltideal3[.]emberfield[.]in[.]net/verification[.]google"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 1104,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 1104,
                "newInLastHour": 882,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"gr1m-mark[.]crimsonridge[.]in[.]net\"",
                " \"mssl-bd[.]com\"",
                " \"hub-path[.]crimsonridge[.]in[.]net\"",
                " \"g755rs[.]crimsonridge[.]in[.]net\"",
                " \"taltideal3[.]emberfield[.]in[.]net\""
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
            "iocCount": 9205,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 9205,
                "newInLastHour": 18,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "d98a4d1dd928b3fa1f070ebc2349b4fc5ea9c893",
                "e2a5b820d463b605090d3d833d12252a22cd4510",
                "f78a257ac3bdf0503c3c8e10b84fcee62452df64",
                "1ace32f015a4033140d846ea8c663a5d207804cb",
                "1f0736f9b04b5580fae76c56ad9b5b4d3db31171"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 47626,
            "activeSources": 8,
            "criticalAlerts": 29695,
            "activeCampaigns": 239
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 20530,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "C2",
                "count": 9165,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 450,
                "trend": "down",
                "percentage": -60
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
                "count": 19069,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxps://solcoreet3[.]excitfollower[.]in[.]net/verification[.]google",
                    "hxxp://110[.]37[.]61[.]44:34207/bin[.]sh",
                    "hxxp://110[.]37[.]45[.]161:49884/i"
                ]
            },
            {
                "name": "CINS Threat List",
                "count": 15000,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]170[.]60[.]81",
                    "1[.]180[.]252[.]30",
                    "1[.]188[.]101[.]189"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1526,
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
                "count": 630,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "6b58bfd60fc3150331254a46d2e75f0856f5d0ae",
                    "78372e9666177fc65dbd5a41286bcd2f22c12bf0",
                    "58d0977e2eb2f58b80c1441ac8a77c7da332b266"
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
                "name": " \"n/a",
                "count": 388,
                "types": [
                    "hash"
                ],
                "sampleIndicators": [
                    " \"8c8ebe91852d4be8c2fa98bc65dd0d029833fc8451e2a91689603b8d3a330199",
                    " \"a0229d00383807201426e9f5b5438a412c6be05463125ef862faa6fb76193403",
                    " \"7547860f567f88ff064f34a6f2062c5b11768353ffdc5049bd13a3e1e633e379"
                ]
            },
            {
                "name": "Vidar",
                "count": 387,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "fc13b72e3fbc49e25fb617047297c3d1bf51da7f",
                    "493192edea58ec659ee270032660c6113e9b448e",
                    "b84f367205c3150a29707120bc237a5161d8886e"
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
        "fastestRisingThreat": "malware_download",
        "totalAttacksThisHour": 42186,
        "lastCalculated": "2026-03-08 18:38 IST"
    }
};
