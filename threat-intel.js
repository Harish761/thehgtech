// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-02-17T00:41:52.824961+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-02-17T00:41:52.550459+05:30",
    "lastUpdatedFormatted": "Feb 17, 2026 at 12:41 AM IST",
    "comparisonPeriod": "Feb 16 \u2013 Feb 17, 2026",
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
                "hxxp://matemaskklugn[.]webflow[.]io/",
                "hxxp://en---lldgerlive-auth[.]webflow[.]io/",
                "hxxps://mimosawedding[.]vn/wp-admin/network/es/ING-ES/Archive/",
                "hxxps://sykmo[.]mjt[.]lu/lnk/AVsAAIzqux0AAAAAAAAABBV0V00AAYKKI-4AAAAAADDrZwBphVS49pIAOhlmSbSFyZuUSZmNCwAst-w/1/MwRe8W9WhKx-6-QqzibEDQ/aHR0cHM6Ly9taW1vc2F3ZWRkaW5nLnZuL3dwLWFkbWluL25ldHdvcmsvZXMvSU5HLUVTL0FyY2hpdmUv",
                "hxxp://ht-27[.]github[.]io/Netflix-Clone"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 615,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 615,
                "newInLastHour": 67,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"21c4eeb21c8467489098c06e56b468460f8146ad7ca188d71887f1ec15650d34",
                " \"24631e1f66b98a31e903302751a66fda5732928dc0c7a01f864915408e9e3a55",
                " \"8ee4ec425bc0d8db050d13bbff98f483fff020050d49f40c5055ca2b9f6b1c4d",
                " \"051b272bbb197986e5495b692bf6185547fec89964d72be1e44b720cd4bfb5d1",
                " \"ea80f0e1a671a94e50579204be5a6e5cfe2ac96c5cbd7ec1028f94ca58ea0187"
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
                "1[.]0[.]164[.]165",
                "1[.]11[.]132[.]194",
                "1[.]140[.]6[.]82",
                "1[.]15[.]116[.]189",
                "1[.]15[.]118[.]23"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 5890,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 5890,
                "newInLastHour": 5890,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]13[.]79[.]212",
                "1[.]14[.]12[.]141",
                "1[.]14[.]254[.]146",
                "1[.]145[.]11[.]218",
                "1[.]145[.]119[.]178"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 19795,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 19795,
                "newInLastHour": 19795,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://130[.]12[.]180[.]43/files/8366207456/jtauUdV[.]exe",
                "hxxp://42[.]235[.]102[.]202:44497/i",
                "hxxp://42[.]235[.]102[.]202:44497/bin[.]sh",
                "hxxp://117[.]222[.]164[.]130:57925/bin[.]sh",
                "hxxp://42[.]228[.]240[.]196:33472/bin[.]sh"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 1054,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 1054,
                "newInLastHour": 901,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"5[.]101[.]86[.]27:46321\"",
                " \"218[.]255[.]179[.]148:36123\"",
                " \"223[.]109[.]212[.]168:10001\"",
                " \"www[.]armpentest[.]ink\"",
                " \"31[.]141[.]178[.]107:5130\""
            ]
        },
        "Feodo Tracker": {
            "description": "Botnet C2 server IPs from Feodo Tracker. Tracks Dridex, Emotet, TrickBot, QakBot, and BazarLoader.",
            "website": "https://feodotracker.abuse.ch/",
            "updateFrequency": "Hourly",
            "iocCount": 2,
            "iocDataUrl": "https://thehgtech.com/ioc-data/feodo-tracker.json",
            "stats": {
                "total": 2,
                "newInLastHour": 2,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "162[.]243[.]103[.]246",
                "172[.]232[.]59[.]14"
            ]
        },
        "SSL Blacklist": {
            "description": "Malicious SSL certificates used by botnet C2 servers. Helps detect encrypted malware communications.",
            "website": "https://sslbl.abuse.ch/",
            "updateFrequency": "Daily",
            "iocCount": 8971,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 8971,
                "newInLastHour": 4,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "65ee960de9398db3f6ab26a6fece2c9206681be5",
                "51bda118384a4df0d4d6dbf7c54d76b8b2b90633",
                "a7c61dff5bd7db98a5b23798e01ff02ce03f025c",
                "354e3a513d25e881b20e864f0ea0a3d0931d130f",
                "77b552aa5a212d5e62c7b0cd16c2245bd6b0fa03"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 47075,
            "activeSources": 8,
            "criticalAlerts": 29268,
            "activeCampaigns": 208
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 20326,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "C2",
                "count": 8942,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 625,
                "trend": "stable",
                "percentage": -7
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
                "count": 19735,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxps://bnt11[.]mainsage[.]coupons/09fa47a71346a",
                    "hxxp://123[.]9[.]197[.]109:48267/bin[.]sh",
                    "hxxps://customer-ref-91[.]goldberg[.]coupons/09fa47a71346a"
                ]
            },
            {
                "name": "CINS Threat List",
                "count": 15000,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]0[.]164[.]165",
                    "1[.]11[.]132[.]194",
                    "1[.]140[.]6[.]82"
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
                "count": 1383,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "bef81c1fd26e84e5e25a4182bf668304ba2891da",
                    "adb1b31a6283691b205839f5e3ce4f8ed7aa5f54",
                    "97e58eec776ad990a10d1f4a932e1a4ae48636b3"
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
                "count": 619,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "4091cdf235522076668c6f698479d4af4e5d2bf8",
                    "f7b6ed231ee6c9dc773697ae24f09c559fbee477",
                    "71f4fecadb5ed6289cca27ffaedd2ec02f4450e0"
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
                "name": "Vidar",
                "count": 366,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "c99dd917e7a01d0c7fdbc8edf8fe14b6a4673bf8",
                    "3e86dd1b2a8a50c4263271ffbe28deb2837b320f",
                    "a5ed9149808f93889c8c68e55082d39cf24ae8d7"
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
        "fastestRisingThreat": "malware_download",
        "totalAttacksThisHour": 41959,
        "lastCalculated": "2026-02-17 00:41 IST"
    }
};
