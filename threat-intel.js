// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-03-08T22:12:05.007517+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-03-08T22:12:04.722214+05:30",
    "lastUpdatedFormatted": "Mar 08, 2026 at 10:12 PM IST",
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
            "iocCount": 699,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 699,
                "newInLastHour": 13,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"510cb9281e7ee38b03d7ac08ad2d8f93bebe37f96adc886236125f67242f83bd",
                " \"984fd0f96cb6b7c24e9362a46b38aab89f8f3b21741d13012f82eb2c420a4a3f",
                " \"a59921bcefc601542a2ebd54002169b3decc0af2692b9e416233f4229d1f3baf",
                " \"fd7c20ef9bbfe7efb843a762cd2bfc8844353d87a07d52a243053d5367f617be",
                " \"99bb50fd4b8cc8fedc8301adffb242bab2cb25608da68d2a2a7fd78a7eff7217"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1538,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1538,
                "newInLastHour": 1,
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
            "iocCount": 6762,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 6762,
                "newInLastHour": 6762,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]12[.]45[.]226",
                "1[.]15[.]136[.]101",
                "1[.]15[.]136[.]28",
                "1[.]162[.]247[.]213",
                "1[.]164[.]175[.]17"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 19459,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 19459,
                "newInLastHour": 19459,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxps://nord-base[.]navignord[.]in[.]net/verification[.]google",
                "hxxps://zverda[.]space/FileArchiver[.]rar",
                "hxxps://exonautis[.]fr/download/Exonautis[.]zip",
                "hxxp://95[.]56[.]232[.]109:39091/i",
                "hxxps://zxjasjkask1992[.]sbs/load[.]ps1"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 1111,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 1111,
                "newInLastHour": 889,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"hxxp://146[.]103[.]113[.]60/get[.]php\"",
                " \"mouthfruit[.]cfd\"",
                " \"axon-ref[.]axonia[.]in[.]net\"",
                " \"hxxps://nu-5-vision-check[.]t3[.]storage[.]dev/index[.]html?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=tid_MAAMGPpGMLpRoEDyjizQTL_DKaqeERcIlVsFWSFfgBkhWqcSnv%2F20260308%2Fauto%2Fs3%2Faws4_request&X-Amz-Date=20260308T012654Z&X-Amz-Expires=2160000&X-Amz-SignedHeaders=host&X-Amz-Signature=92cea969c5827e9d296d69581418e6c26de0a62870dc793b9b7077f73eebd7b7\"",
                " \"neo-5tor[.]overtmantram[.]in[.]net\""
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
            "iocCount": 681,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 681,
                "newInLastHour": 1,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "fecbcfd7dcdac7eb882a84d60e0a0f8aa8413fe0",
                "d98a4d1dd928b3fa1f070ebc2349b4fc5ea9c893",
                "e2a5b820d463b605090d3d833d12252a22cd4510",
                "f78a257ac3bdf0503c3c8e10b84fcee62452df64",
                "1ace32f015a4033140d846ea8c663a5d207804cb"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 47832,
            "activeSources": 8,
            "criticalAlerts": 29888,
            "activeCampaigns": 238
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 20705,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "C2",
                "count": 9183,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 459,
                "trend": "stable",
                "percentage": 2
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
                "count": 19366,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxps://hub-path[.]crimsonridge[.]in[.]net/verification[.]google",
                    "hxxp://27[.]37[.]230[.]121:53155/bin[.]sh",
                    "hxxps://g755rs[.]crimsonridge[.]in[.]net/verification[.]google"
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
                "count": 1537,
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
                "count": 1389,
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
                "count": 634,
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
                "name": "Vidar",
                "count": 394,
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
            },
            {
                "name": "OffLoader",
                "count": 353,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "f78a257ac3bdf0503c3c8e10b84fcee62452df64",
                    "1ace32f015a4033140d846ea8c663a5d207804cb",
                    "3408754167a67b0ef2be34b781c65f489a406f4d"
                ]
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious IPs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": "SSH Attacks",
        "totalAttacksThisHour": 42430,
        "lastCalculated": "2026-03-08 22:12 IST"
    }
};
