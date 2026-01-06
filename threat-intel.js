// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-01-06T22:12:58.096200+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-01-06T22:12:57.813683+05:30",
    "lastUpdatedFormatted": "Jan 06, 2026 at 10:12 PM IST",
    "comparisonPeriod": "Jan 05 \u2013 Jan 06, 2026",
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
                "hxxps://mail[.]ericsbargains[.]com/wp-admin/sever/okil/",
                "hxxp://mashangyoushu[.]cn/c2[.]html",
                "hxxps://www[.]roblox[.]com[.]ml/communities/6787351349/Aesthetic-UGC",
                "hxxp://www[.]e365e[.]cc/",
                "hxxps://s3[.]us-east-2[.]amazonaws[.]com/0012120443332298355-s3[.]us-east-2[.]amazonaws[.]1999/about2[.]html"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 921,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 921,
                "newInLastHour": 47,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"202a990e53b83d04e82589bd7d448f5973d007fa7b07a72efbe7d5cb229df6e0",
                " \"5264ae16a10a482f4f9680d7bf96943c7e03d03f99497037dd70ee0ff27ef86b",
                " \"3aa7183d6d223a343a79db110fa4735b74820c38ac123cbdf28e1481b1027d60",
                " \"2d67b63f6e9fc47ffb790ef1db17bfdd71d7a85bbcb31d381c1feb210f5ad110",
                " \"be3f92f8376e736404aaf25660dd273d640a21169f18eb7d212b1e8b980ec55d"
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
                "1[.]15[.]118[.]23",
                "1[.]15[.]14[.]29",
                "1[.]15[.]51[.]236",
                "1[.]157[.]99[.]66",
                "1[.]176[.]134[.]250"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 5515,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 5515,
                "newInLastHour": 5515,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]12[.]64[.]80",
                "1[.]14[.]95[.]153",
                "1[.]214[.]197[.]163",
                "1[.]234[.]13[.]164",
                "1[.]234[.]83[.]55"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 23135,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 23135,
                "newInLastHour": 23135,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://42[.]52[.]89[.]234:37489/i",
                "hxxp://125[.]45[.]48[.]239:40381/i",
                "hxxp://182[.]126[.]66[.]192:38531/bin[.]sh",
                "hxxp://130[.]12[.]180[.]43/files/7782139129/l89Sfic[.]exe",
                "hxxp://113[.]221[.]57[.]7:34221/bin[.]sh"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 1077,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 1077,
                "newInLastHour": 751,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"hxxp://bobrecurwarmumsworms[.]com:8080/updater?for=76AB501390D0C329C365C14CDD1C4CAA\"",
                " \"hxxp://45[.]93[.]20[.]198/82878e5702cc452c[.]php\"",
                " \"109[.]199[.]97[.]78:60003\"",
                " \"3[.]132[.]51[.]96:443\"",
                " \"3[.]132[.]202[.]210:80\""
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
            "iocCount": 8722,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 8722,
                "newInLastHour": 3,
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
            "totalIndicators": 50473,
            "activeSources": 8,
            "criticalAlerts": 32665,
            "activeCampaigns": 220
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 23965,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "C2",
                "count": 8700,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 611,
                "trend": "stable",
                "percentage": 9
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
                "count": 23041,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://110[.]37[.]30[.]45:49703/bin[.]sh",
                    "hxxp://110[.]37[.]109[.]32:57096/i",
                    "hxxp://112[.]198[.]130[.]112:56568/i"
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
                    "1[.]157[.]99[.]66"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1456,
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
                "name": " \"Mirai",
                "count": 396,
                "types": [
                    "hash"
                ],
                "sampleIndicators": [
                    " \"f110c9722cc512ebcf524288b5008e842464ff61fa93350d7614e694e3686454",
                    " \"413b6ea96fcb76d4a00f67b35d63d0823b36fdf18fc18a8a8c5aadb2c357a08f",
                    " \"d20a3c1dda54a03f1424b74344411d9afb8eba2b0d14547d1ac3bfc2a183226d"
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
        "totalAttacksThisHour": 44756,
        "lastCalculated": "2026-01-06 22:12 IST"
    }
};
