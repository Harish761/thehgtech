// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-05-14T23:35:36.342326+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-05-14T23:35:36.031907+05:30",
    "lastUpdatedFormatted": "May 14, 2026 at 11:35 PM IST",
    "comparisonPeriod": "May 13 \u2013 May 14, 2026",
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
                "hxxp://b35aaa[.]com/poker/125",
                "hxxp://b35aaa[.]com/poker/216",
                "hxxp://b35aaa[.]com/sport/115",
                "hxxps://discord[.]fresh-soft[.]ru/?etext=2202[.]Mm1zi1xQwed46cjbAdGmvdVrHiHH9xltwtxQ51NnS1MLf0LsIjHjdTqm1QDaB6BUaHR2cmVvaHprbHF1YXN6eQ[.]2f6cab86819c593d63cb7ada4fde7a90594280a7",
                "hxxp://www[.]robiox[.]com[.]ua/users/1448219617/profile/"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 590,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 590,
                "newInLastHour": 30,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"e9e15953ad2b9424d4bb72097bdb5d993bfec22f19797c739ef7eb2bd87783c9",
                " \"a55a560802bea130e690d55e0ea059bd8eb1657ae2cdfdafaf6e3413413fa2d6",
                " \"df77fa417aee26c656609dfb92a3f982dc70077e24de46915bb0360b40bd837a",
                " \"a13224ad7037a6fdadde2373f83dd0a35ad9afdb888544c529720d3fbababbc2",
                " \"5fb830acf3046ba7152112c03a62f85feeef592dee7bdbecd41c9d40e38dc203"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1612,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1612,
                "newInLastHour": 33,
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
                "1[.]0[.]249[.]217",
                "1[.]162[.]160[.]202",
                "1[.]173[.]112[.]122",
                "1[.]191[.]147[.]239",
                "1[.]193[.]63[.]78"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 5379,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 5379,
                "newInLastHour": 5379,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]0[.]164[.]165",
                "1[.]1[.]220[.]166",
                "1[.]194[.]233[.]49",
                "1[.]214[.]197[.]163",
                "1[.]214[.]214[.]114"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 25933,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 25933,
                "newInLastHour": 25933,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxps://system-analytics-pro-guide[.]courses/3da71941-fb0e-4331-ab54-9a79c00560e4/google[.]cl",
                "hxxp://125[.]46[.]215[.]186:38346/bin[.]sh",
                "hxxp://110[.]38[.]201[.]35:46732/i",
                "hxxp://42[.]227[.]177[.]133:54013/i",
                "hxxps://masteringdigital-arch[.]courses/851ed414-d2ca-4b11-a466-a9f58b025cc8/google[.]cl"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 731,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 731,
                "newInLastHour": 685,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"system-analytics-pro-guide[.]courses\"",
                " \"masteringdigital-arch[.]courses\"",
                " \"logic-buffer-skills[.]courses\"",
                " \"expert-trading-academy[.]courses\"",
                " \"jmlzwn2l[.]limous-nitout[.]digital\""
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
            "iocCount": 9688,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 9688,
                "newInLastHour": 85,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "c3b80ea156c61148c1639d0c5c2eedd97d1dc9f7",
                "33ce7373545ee49eaae60e70c81ca1c1768061ea",
                "a7ebb36bfc096ff4c3337e3d4b93c60a45737d09",
                "c99556080925c1984193558fe2956dba8b72f758",
                "17e77e5099f947d0d081764e9068af08c10a5430"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 54197,
            "activeSources": 8,
            "criticalAlerts": 36060,
            "activeCampaigns": 193
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 26474,
                "trend": "stable",
                "percentage": 1
            },
            {
                "category": "C2",
                "count": 9586,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 598,
                "trend": "up",
                "percentage": 95
            },
            {
                "category": "Phishing",
                "count": 339,
                "trend": "stable",
                "percentage": 0
            }
        ],
        "targetedSectors": [
            {
                "name": "General",
                "percentage": 91
            },
            {
                "name": "Tech",
                "percentage": 8
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
                "count": 25868,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxps://handout-voivo-desk-ship-link[.]wiki/15ce3a08-7c9c-4292-b549-6f4bc27fb873/google[.]cl",
                    "hxxps://master-voivo-system-shop-slink[.]wiki/7ba6e339-50bb-4db5-b1f8-2bc8118b7b23/google[.]cl",
                    "hxxp://41[.]216[.]188[.]223/files/admin/ClipClap[.]exe"
                ]
            },
            {
                "name": "CINS Threat List",
                "count": 15000,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]0[.]249[.]217",
                    "1[.]15[.]51[.]236",
                    "1[.]162[.]160[.]202"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1579,
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
                "count": 1410,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "5bb5b87a8f5d20bf3d5c6d64b3cf71fba84b43fd",
                    "0f6b3491e94f40a637680924c507a494426e534c",
                    "9833a3a7e27800d994a2924baf7a664dfff96e8c"
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
                "count": 675,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "8a9c74049483847464da1ca3cf6f1f44e17a5f0f",
                    "c47bcbcbe0b1c474542c7fdc233ec68ffb4dcf14",
                    "a08099ae4318bfc81af69fd382081262cc4e9487"
                ]
            },
            {
                "name": "LummaStealer",
                "count": 552,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "272e76f605bec1da1ea719df8dc0e7269de7d44e",
                    "f58ffe7484653b53cea539b23da25bc8eeeb2c05",
                    "2ebb8f663f93eb9c8f169cc09a86f6dba1c85584"
                ]
            },
            {
                "name": "Vidar",
                "count": 501,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "693673f31128d9637630776f2989b5c29c77b04d",
                    "4ea9780c4039e050f0e2433deaa076a1ed3e1cec",
                    "87e5589d7d33aa32595bc8f2ac6275a4f1620fb1"
                ]
            },
            {
                "name": "OffLoader",
                "count": 395,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "b977e869e493f70b3e7914a1eaa6abe2cc1ea04a",
                    "e7af95eaaa4c87398f4c4c80a66972f342bb3328",
                    "037598803e2603499edbf7275e43f7dd82abd8f3"
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
        "totalAttacksThisHour": 47450,
        "lastCalculated": "2026-05-14 23:35 IST"
    }
};
