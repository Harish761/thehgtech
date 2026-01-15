// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-01-15T10:20:12.765699+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-01-15T10:20:12.477990+05:30",
    "lastUpdatedFormatted": "Jan 15, 2026 at 10:20 AM IST",
    "comparisonPeriod": "Jan 14 \u2013 Jan 15, 2026",
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
                "hxxps://mltradingco[.]com/login",
                "hxxps://gannapst[.]top/gh",
                "hxxps://cloudmail00[.]standard[.]us-east-1[.]oortstorages[.]com/inv1[.]ht",
                "hxxps://gayu9960[.]github[.]io/amazon-clone/",
                "hxxps://hcnhrqkgu74bxhlo7xvch3arblulplw7g72kkdj3ddp6vkqr4rsq[.]ar[.]randao[.]net/OJp4wUan-Budbv3qI-wRCui3rt839KUNOxjf6qoR5GU?eta="
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 543,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 543,
                "newInLastHour": 9,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"083e5beea5b26771cee1d513a4d864a85e87a7107f8e0cb8d0e586b5e9de908e",
                " \"4b41dc5c5b2b865c14d259702caea11f5eacee2bfe287a3fe24560a7455d2faa",
                " \"5e611c0ad2bb70becdf4a772162a14356ee476e3e0bebabd21cd00860bf4e4cc",
                " \"a3c6896c569118bc40fd12db9516c8a2dd60690a4e5d1eddce11b792b254e6bc",
                " \"7f811a1cdf3914ea41daa77485f3b4db99551015182b5c31594b35e521fabc11"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1461,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1461,
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
                "1[.]0[.]170[.]118",
                "1[.]14[.]3[.]240",
                "1[.]15[.]118[.]23",
                "1[.]15[.]51[.]236",
                "1[.]157[.]99[.]66"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 6654,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 6654,
                "newInLastHour": 6654,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]13[.]79[.]212",
                "1[.]14[.]12[.]141",
                "1[.]14[.]254[.]146",
                "1[.]162[.]249[.]243",
                "1[.]178[.]38[.]103"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 23790,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 23790,
                "newInLastHour": 23790,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://117[.]211[.]152[.]111:41344/i",
                "hxxp://117[.]198[.]12[.]197:40925/bin[.]sh",
                "hxxp://45[.]150[.]192[.]76/bins/dlr[.]ppc",
                "hxxp://45[.]150[.]192[.]76/bins/dlr[.]arm5",
                "hxxp://45[.]150[.]192[.]76/bins/dlr[.]mpsl"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 868,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 868,
                "newInLastHour": 868,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"199[.]101[.]111[.]69:3790\"",
                " \"54[.]226[.]241[.]245:80\"",
                " \"162[.]252[.]198[.]45:443\"",
                " \"42[.]115[.]10[.]126:443\"",
                " \"185[.]196[.]20[.]150:1911\""
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
                "137[.]184[.]9[.]29",
                "162[.]243[.]103[.]246",
                "167[.]86[.]75[.]145",
                "34[.]204[.]119[.]63",
                "50[.]16[.]16[.]211"
            ]
        },
        "SSL Blacklist": {
            "description": "Malicious SSL certificates used by botnet C2 servers. Helps detect encrypted malware communications.",
            "website": "https://sslbl.abuse.ch/",
            "updateFrequency": "Daily",
            "iocCount": 8771,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 8771,
                "newInLastHour": 3,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "1a7a89a6ee2a284e574d92f0033efc0a37a66a72",
                "6b965254f0991e2c19ba17ce4ba589dd6c2f2fda",
                "bee0ff91f5800361e8e470af7c0a12f06b8fdcf8",
                "15640ab78d74431d1643b4eb62ae3d9153666ae8",
                "8c03dadea265fd3a083ceb6610d6a89411d635ea"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 50930,
            "activeSources": 8,
            "criticalAlerts": 33078,
            "activeCampaigns": 211
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 24325,
                "trend": "stable",
                "percentage": -2
            },
            {
                "category": "C2",
                "count": 8753,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 432,
                "trend": "down",
                "percentage": -98
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
                "count": 23752,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://117[.]247[.]153[.]79:33831/i",
                    "hxxp://115[.]49[.]76[.]241:45777/bin[.]sh",
                    "hxxp://124[.]162[.]178[.]90:46518/bin[.]sh"
                ]
            },
            {
                "name": "CINS Threat List",
                "count": 15000,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]0[.]170[.]118",
                    "1[.]14[.]3[.]240",
                    "1[.]15[.]118[.]23"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1448,
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
                "count": 1370,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "9655effafe3c6c663b4e64c12e41c9495e4fdfee",
                    "f5ceb2552024990dc2a9057b8938c4a0c1ea9fe3",
                    "d8c4d1a95c17efd9c3d51ddcbe2010d5f1b0de14"
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
                "count": 604,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "d3d8dc6a9d41a817b319484d943d3c86be823650",
                    "ab3f93138fcf2dbaad6e32fe4a5e8c06ca499cfa",
                    "659e6830e2b4abbaacfd7a6b8b16637dbc5465e0"
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
                "name": " \"unknown_stealer\"",
                "count": 365,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"fbnmoon[.]today\"",
                    " \"fbnmoon[.]shop\"",
                    " \"86[.]54[.]42[.]197:8888\""
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
        "fastestRisingThreat": "SSH Attacks",
        "totalAttacksThisHour": 46642,
        "lastCalculated": "2026-01-15 10:20 IST"
    }
};
