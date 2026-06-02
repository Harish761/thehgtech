// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-06-03T03:56:12.895035+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-06-03T03:56:12.688007+05:30",
    "lastUpdatedFormatted": "Jun 03, 2026 at 03:56 AM IST",
    "comparisonPeriod": "Jun 02 \u2013 Jun 03, 2026",
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
                "hxxp://galeripemenangshopee012[.]blogspot[.]com/",
                "hxxp://galeri-promo2021[.]blogspot[.]com/",
                "hxxps://bafkreiegbqbcfv3bye424hhdqirq2wqiftdkjywtxlivtmx4zyhzkotcta[.]ipfs[.]dweb[.]link/",
                "hxxp://t-mobile[.]rxomdi[.]top/pay",
                "hxxp://t-mobile[.]cvnghb[.]top/pay"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 626,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 626,
                "newInLastHour": 13,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"a26d2eeecea147ce1a3dfd84bfaeee95a6d9204909cec0764a3fb40bc0476ee5",
                " \"09275ebdc5733fb114cc4be985acaeac93023f5563ab384e4ee0400cc78705d0",
                " \"a60f58618c8548ff60978d7c50176bebb38486690d87ba24a8581b62dd478228",
                " \"392c367b9a7ff8d9a7aa1694c7610a9ede461fa8aef51959bd2fd4ea7aef9a7a",
                " \"81f2397f3d5676b7aef66780c1d667c68e325b15b25a32a3702bacd86f47b7b8"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1597,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1597,
                "newInLastHour": 34,
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
            "iocCount": 0,
            "iocDataUrl": "https://thehgtech.com/ioc-data/cins-army.json",
            "stats": {
                "total": 0,
                "newInLastHour": 0,
                "lastUpdate": "just now"
            },
            "types": [],
            "sampleIndicators": []
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 6139,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 6139,
                "newInLastHour": 6139,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]0[.]164[.]165",
                "1[.]14[.]176[.]139",
                "1[.]14[.]180[.]163",
                "1[.]14[.]192[.]95",
                "1[.]15[.]22[.]22"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 20350,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 20350,
                "newInLastHour": 20350,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://123[.]14[.]233[.]170:35889/i",
                "hxxp://219[.]155[.]255[.]94:49299/bin[.]sh",
                "hxxp://31[.]56[.]209[.]229/zero[.]m68k",
                "hxxp://31[.]56[.]209[.]229/zero[.]mips",
                "hxxp://31[.]56[.]209[.]229/zero[.]mipsrouter"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 3741,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 3741,
                "newInLastHour": 3733,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"23q34ztp[.]luxerabet1[.]com\"",
                " \"ofslg5u1[.]luxerabet1[.]com\"",
                " \"luxerabet1[.]com\"",
                " \"0u9irsk6[.]luxerabet10[.]com\"",
                " \"zs42pkd6[.]luxerabet10[.]com\""
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
            "iocCount": 9831,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 9831,
                "newInLastHour": 126,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "d345baf20bd0de3b5004bd6d8d5b72cac4e7d04c",
                "c977d795cf06f3bdb9e88ec4700aebe3d3bbaf08",
                "7e1b7861379d0043ae42bac6a060e5a230bd2576",
                "b733673f2c221400c4e14bb6cea0f528a5dff337",
                "3b8b88139678299948bf1ccc9c0fbb2b4cb5e861"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 36433,
            "activeSources": 7,
            "criticalAlerts": 30794,
            "activeCampaigns": 219
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 20989,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "C2",
                "count": 9805,
                "trend": "stable",
                "percentage": 1
            },
            {
                "category": "Botnet",
                "count": 3440,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Phishing",
                "count": 300,
                "trend": "stable",
                "percentage": 0
            }
        ],
        "targetedSectors": [
            {
                "name": "General",
                "percentage": 94
            },
            {
                "name": "Tech",
                "percentage": 5
            },
            {
                "name": "Finance",
                "percentage": 0
            }
        ],
        "campaigns": [
            {
                "name": "malware_download",
                "count": 20330,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://218[.]59[.]12[.]12:58386/bin[.]sh",
                    "hxxp://125[.]40[.]83[.]68:56750/bin[.]sh",
                    "hxxp://221[.]15[.]22[.]104:39479/i"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1597,
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
                "name": " \"win.cobalt_strike\"",
                "count": 1418,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"106[.]53[.]61[.]9:443\"",
                    " \"47[.]111[.]227[.]56:443\"",
                    " \"154[.]194[.]251[.]43:443\""
                ]
            },
            {
                "name": "AsyncRAT",
                "count": 1416,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "6a998d33a87c7b36c2be68ed5c1c63929c0d6be4",
                    "167ddfd671ef30c31528515389cfdd11d9251558",
                    "d42a4a7e721a0503d81e3f47c72a0f93c53e4f2c"
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
                "count": 683,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "8e733b34e95a7b98ada40292b8d35e9040016e65",
                    "9f0d33c1eaa7afd41009d0ec594c0a408d2df123",
                    "493f6dbb48806992e524df2a3a0fa0348cef243b"
                ]
            },
            {
                "name": "Vidar",
                "count": 565,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "d345baf20bd0de3b5004bd6d8d5b72cac4e7d04c",
                    "c977d795cf06f3bdb9e88ec4700aebe3d3bbaf08",
                    "7e1b7861379d0043ae42bac6a060e5a230bd2576"
                ]
            },
            {
                "name": "LummaStealer",
                "count": 554,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "272e76f605bec1da1ea719df8dc0e7269de7d44e",
                    "ab7f083d77dc2b1b71c0aec9a417e0a5a036a5f9",
                    "7ce02a4df627573696141e40970ef60e246f9f3f"
                ]
            },
            {
                "name": "OffLoader",
                "count": 422,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "7bba8eb1da43142534144a1aaf30b1be8a5ed134",
                    "3190ff29e738f3a056a97190ae61386c21eddefd",
                    "e9a78163613f7608cc9236ba4cb47ab2861c580e"
                ]
            },
            {
                "name": " \"unknown\"",
                "count": 370,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"195[.]246[.]230[.]99:7443\"",
                    " \"my-electrum[.]at\"",
                    " \"txtsm188[.]top\""
                ]
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious URLs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": "malware_download",
        "totalAttacksThisHour": 30700,
        "lastCalculated": "2026-06-03 03:56 IST"
    }
};
