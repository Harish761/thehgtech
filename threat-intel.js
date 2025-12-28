// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2025-12-28T10:22:05.695103+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2025-12-28T10:22:05.337676+05:30",
    "lastUpdatedFormatted": "Dec 28, 2025 at 10:22 AM IST",
    "comparisonPeriod": "Dec 27 \u2013 Dec 28, 2025",
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
                "hxxps://go2wa[.]cc/KtTLgsQT/?weihnachtsgeschenke-amazon-2025[.]html",
                "hxxp://airbnb-ten-zeta[.]vercel[.]app/",
                "hxxps://allegrolokalnie[.]pl-2114247[.]icu/oferta/drzwi-zewnetrzne/36666",
                "hxxps://tpbpcommunitels234[.]framer[.]website/",
                "hxxps://ledgor-lives-login-eng[.]pages[.]dev/"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 1467,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 1467,
                "newInLastHour": 20,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"ae7f0fbc4d9a362e2ff035f025402ce0d2158735809438e1967e0d7d04449041",
                " \"fdea0f1864fc78071fe602b431ccc3c88ba02b0deacb1cdf4e5d7b62d5054017",
                " \"ce9c6f30d1f1eb4869ee268dfa793555a3da25291e0860b3636f288373968beb",
                " \"8c6e547878deb7493a7d928785de9540beb691b093a02a9c26291f287b526e6e",
                " \"b759dacdc11e3554c8b8f1de62f93759dbbb21ea4effd51422b79382d20a4f30"
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
                "1[.]15[.]135[.]58",
                "1[.]15[.]14[.]29",
                "1[.]15[.]149[.]209",
                "1[.]157[.]99[.]66",
                "1[.]171[.]34[.]122"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 5075,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 5075,
                "newInLastHour": 5075,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]14[.]12[.]141",
                "1[.]145[.]101[.]122",
                "1[.]197[.]102[.]62",
                "1[.]214[.]197[.]163",
                "1[.]220[.]64[.]218"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 26765,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 26765,
                "newInLastHour": 26765,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://130[.]12[.]180[.]20:36695/cat[.]sh",
                "hxxp://58[.]47[.]65[.]108:51752/bin[.]sh",
                "hxxps://s7gnorm4[.]f0ursme1ting[.]ru/?apikey=ouucPDnSwlhIxdmN&activityId=32a5d9b1-6d68-416b-a0b6-c075512bff40&ocid",
                "hxxps://301tnw8t[.]f0ursme1ting[.]ru/?apikey=xLCIyGeaXFsdXcWB&activityId=69a41989-ac3e-4211-b439-c5ca7bc7c673&ocid",
                "hxxp://42[.]234[.]143[.]189:55287/bin[.]sh"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 618,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 618,
                "newInLastHour": 618,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"301tnw8t[.]f0ursme1ting[.]ru\"",
                " \"s7gnorm4[.]f0ursme1ting[.]ru\"",
                " \"vz94j85x[.]f0ursme1ting[.]ru\"",
                " \"gnvkaki6[.]f0ursme1ting[.]ru\"",
                " \"74[.]207[.]236[.]7:443\""
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
                "15[.]204[.]219[.]215",
                "162[.]243[.]103[.]246",
                "167[.]86[.]75[.]145"
            ]
        },
        "SSL Blacklist": {
            "description": "Malicious SSL certificates used by botnet C2 servers. Helps detect encrypted malware communications.",
            "website": "https://sslbl.abuse.ch/",
            "updateFrequency": "Daily",
            "iocCount": 8692,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 8692,
                "newInLastHour": 0,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "18f6fb081557a654b26c348d6d9e6bffeb064e6f",
                "0b3c03d2685bcf32115f71fad8323c8c79f3ecf3",
                "e3f74b63bb455a42d4351baff1f1eccd69ae5747",
                "77ccc60769c2fcec1b720094cdaa0ff49e37227d",
                "8e22e996d0215c4e2cb73e5621cb9de904b861cf"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 54265,
            "activeSources": 8,
            "criticalAlerts": 36880,
            "activeCampaigns": 168
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 28211,
                "trend": "stable",
                "percentage": -1
            },
            {
                "category": "C2",
                "count": 8669,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 335,
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
                "count": 26717,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxps://3ei6h1fz[.]udmu7tsw2rp[.]ru/?apikey=gaAHBvdFAIhxjNtY&activityId=21e226b2-4203-4be7-83e3-5a44ec6b88ae&ocid",
                    "hxxps://xy53k61z[.]udmu7tsw2rp[.]ru/?apikey=sWzMJOqAAtumPgQF&activityId=5564a5f3-332c-4711-bf10-2590ca5b2700&ocid",
                    "hxxp://117[.]245[.]2[.]83:34881/i"
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
                    "1[.]15[.]14[.]29",
                    "1[.]15[.]149[.]209"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1474,
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
                    "1a5aa767c2675014c5c0a10b2d9f4c63844a84f8",
                    "3a56a66eb43b679afa1edb58e0fddcadf74bb2a4",
                    "47800989ef4eda671b2a76a0cd9123ec7b0bc324"
                ]
            },
            {
                "name": " \"Mirai",
                "count": 817,
                "types": [
                    "hash"
                ],
                "sampleIndicators": [
                    " \"7dfe84262ac771700ea5b4b03db4a8d2a3886c7e6cc67d7afcbbb6628cdc21a3",
                    " \"f336c0c42fc8fa71d3b3b8b09dcdade5a5263d9f7e1e647dc4961dc214a09ec9",
                    " \"68ef84df7739d61f92f777f1ef35b6f51435fa6d4f3aa9ab093b62d8a0580bff"
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
                "name": " \"n/a",
                "count": 522,
                "types": [
                    "hash"
                ],
                "sampleIndicators": [
                    " \"9dcb1b81434b42075eac3c353a592f9f9e4cad67656959359747f53d7a992850",
                    " \"cdef4bd77216698fc5cdffa8c11a2f0b1ccf8f750554258daee0b5621a5895ad",
                    " \"3e29ba307bbcba3c151a20e2842fdc4a96e08f073c58bfdbd6a5b408a3ae0909"
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
        "fastestRisingThreat": "SSH Attacks",
        "totalAttacksThisHour": 47781,
        "lastCalculated": "2025-12-28 10:22 IST"
    }
};
