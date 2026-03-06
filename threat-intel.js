// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-03-06T14:23:00.734483+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-03-06T14:23:00.461269+05:30",
    "lastUpdatedFormatted": "Mar 06, 2026 at 02:23 PM IST",
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
                "hxxp://rentrise[.]vercel[.]app/",
                "hxxps://zellepayyhelplinenumber[.]webflow[.]io/",
                "hxxp://bafybeifpqhyzn73oe4u5fepceonr6hbpvffuxj7vikwnwh3wkrp2v3blei[.]ipfs[.]infura-ipfs[.]io/",
                "hxxps://www[.]robiox[.]com[.]gr/communities/4745828544/idk-cz-sk-rivals",
                "hxxps://www[.]roblox[.]com[.]gl/games/77747658251236/2x-Luck-Sailor-Piece?privateServerLinkCode=897636487139464501064701149477"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 760,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 760,
                "newInLastHour": 35,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"b68a680ba87e80cb05c482dba25dd1e350dbd3997f3dd037387570865e6dae5f",
                " \"1e12f9db9842a221dc8ccbc885190cb5553e3e4ddaea16721f00da4264052896",
                " \"5bdc31fa48b8e5c8ab2f2c603af63f454b4190dd73e0dc3c8fd65c7746fa29b0",
                " \"150e2b307d306d8730f611a2c0c2613c9b3ad5ab3887a174b926a0a2a61c35e8",
                " \"7500925a26cecd84ebed2914855cdf0812a18661e1bb6f3c91dede36f34bd7f3"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1534,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1534,
                "newInLastHour": 3,
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
                "1[.]170[.]22[.]164",
                "1[.]170[.]60[.]81",
                "1[.]170[.]61[.]110",
                "1[.]188[.]101[.]189",
                "1[.]190[.]9[.]42"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 6543,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 6543,
                "newInLastHour": 6543,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]12[.]45[.]226",
                "1[.]13[.]6[.]145",
                "1[.]15[.]136[.]28",
                "1[.]161[.]39[.]103",
                "1[.]192[.]202[.]4"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 18544,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 18544,
                "newInLastHour": 18544,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://115[.]48[.]149[.]65:51051/i",
                "hxxp://61[.]137[.]153[.]168:57232/bin[.]sh",
                "hxxp://59[.]88[.]37[.]213:39475/i",
                "hxxps://cellculture[.]sdflkmicrobiol[.]in[.]net/verification[.]google",
                "hxxps://n4qx7[.]sdflkmicrobiol[.]in[.]net/verification[.]google"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 1863,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 1863,
                "newInLastHour": 1863,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"ygzulpfl[.]floatmurta[.]digital\"",
                " \"h5gxu4pp[.]floatmurta[.]digital\"",
                " \"v8kq3[.]annyprogramm[.]in[.]net\"",
                " \"microb1o-lattice[.]sdflkmicrobiol[.]in[.]net\"",
                " \"cellculture[.]sdflkmicrobiol[.]in[.]net\""
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
                "178[.]62[.]3[.]223",
                "27[.]133[.]154[.]218",
                "34[.]204[.]119[.]63"
            ]
        },
        "SSL Blacklist": {
            "description": "Malicious SSL certificates used by botnet C2 servers. Helps detect encrypted malware communications.",
            "website": "https://sslbl.abuse.ch/",
            "updateFrequency": "Daily",
            "iocCount": 9176,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 9176,
                "newInLastHour": 10,
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
            "totalIndicators": 46406,
            "activeSources": 8,
            "criticalAlerts": 28367,
            "activeCampaigns": 204
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 19224,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "C2",
                "count": 9143,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 743,
                "trend": "stable",
                "percentage": 0
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
            },
            {
                "name": "Government",
                "percentage": 0
            }
        ],
        "campaigns": [
            {
                "name": "malware_download",
                "count": 18441,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://123[.]8[.]5[.]188:46066/bin[.]sh",
                    "hxxps://stre-v9[.]aquastream[.]in[.]net/verification[.]google",
                    "hxxp://190[.]55[.]22[.]176:45197/bin[.]sh"
                ]
            },
            {
                "name": "CINS Threat List",
                "count": 15000,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]170[.]22[.]164",
                    "1[.]170[.]60[.]81",
                    "1[.]170[.]61[.]110"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1531,
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
                "count": 632,
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
                    "55079857bbb8b752780408b8f5ab6e0b6d41b96f",
                    "b242cf8e0628b8a1804d04399e9170fb5ca86d64",
                    "c6c5cbb14fe2839ef4ece10f4b65bf92808f8440"
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
        "topAttackVector": "Malicious IPs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": "SSH Attacks",
        "totalAttacksThisHour": 42301,
        "lastCalculated": "2026-03-06 14:23 IST"
    }
};
