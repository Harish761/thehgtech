// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-01-04T02:02:23.004516+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-01-04T02:02:22.703357+05:30",
    "lastUpdatedFormatted": "Jan 04, 2026 at 02:02 AM IST",
    "comparisonPeriod": "Jan 03 \u2013 Jan 04, 2026",
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
                "hxxp://692e6414c3ffb2b12624b6fd--thunderous-sorbet-780abf[.]netlify[.]app/",
                "hxxp://geminei-logi[.]godaddysites[.]com/",
                "hxxp://kucooienleginnss[.]godaddysites[.]com/",
                "hxxps://domainserver1[.]weebly[.]com/",
                "hxxp://kucoinietlosginie[.]godaddysites[.]com/"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 1269,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 1269,
                "newInLastHour": 64,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"0030dff13d42b603188849cf5f8ab34fc2f9d23adb0f73831d26ef323a1b4c01",
                " \"0f600ee4ea2c2fc3f60769456cc29d9fc63771456e17640e01d474bb33598d81",
                " \"77eff96aca7e24a0276efb0c3ebec9efb39a700049d1f331d1b454a7f9fdcc87",
                " \"c63e2e1a9eef2b72e1e8c92d66cf65f27fb34966a09376b4d4ded55a176a90ce",
                " \"2d6cb6589fe95fecd52455fad883d0fcae68bfe9aa36de035a6422d1267f9355"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1468,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1468,
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
                "1[.]10[.]214[.]169",
                "1[.]10[.]214[.]187",
                "1[.]10[.]219[.]161",
                "1[.]15[.]118[.]23",
                "1[.]15[.]14[.]29"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 5555,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 5555,
                "newInLastHour": 5555,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]14[.]95[.]153",
                "1[.]161[.]40[.]132",
                "1[.]162[.]228[.]28",
                "1[.]162[.]246[.]79",
                "1[.]171[.]31[.]156"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 25161,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 25161,
                "newInLastHour": 25161,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxps://193[.]24[.]123[.]232/t/teste32[.]txt",
                "hxxp://193[.]24[.]123[.]232/t/qpwoe64[.]txt",
                "hxxps://193[.]24[.]123[.]232/t/qpwoe32[.]txt",
                "hxxps://193[.]24[.]123[.]232/t/qpwoe64[.]txt",
                "hxxp://193[.]24[.]123[.]232/t/teste64[.]txt"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 1440,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 1440,
                "newInLastHour": 1245,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"secure[.]ciberseguridad-eia[.]xyz\"",
                " \"93[.]198[.]184[.]177:81\"",
                " \"31[.]57[.]166[.]100:50001\"",
                " \"customer[.]cathost[.]io\"",
                " \"118[.]71[.]50[.]81:443\""
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
                "137[.]184[.]9[.]29",
                "167[.]86[.]75[.]145",
                "50[.]16[.]16[.]211"
            ]
        },
        "SSL Blacklist": {
            "description": "Malicious SSL certificates used by botnet C2 servers. Helps detect encrypted malware communications.",
            "website": "https://sslbl.abuse.ch/",
            "updateFrequency": "Daily",
            "iocCount": 8711,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 8711,
                "newInLastHour": 0,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "6bd23ff65ef66b7c0589133e5a3119f2d91ab3f1",
                "c8aad9c5f82a60570499842e439e5853a2a4fcf1",
                "6159992b2c6d63eb26c215499bba43316b6c91f7",
                "7cf99ff9b35a8f0a7307c92e3b1feeca96179038",
                "f14faecdb4b6a8e4722eff35b08ea8dfadf7b5f4"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 53303,
            "activeSources": 8,
            "criticalAlerts": 35095,
            "activeCampaigns": 189
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 26408,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "C2",
                "count": 8687,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 445,
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
                "count": 25079,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://42[.]233[.]164[.]13:37537/i",
                    "hxxp://42[.]55[.]43[.]165:54104/i",
                    "hxxp://182[.]121[.]154[.]114:47877/i"
                ]
            },
            {
                "name": "CINS Threat List",
                "count": 15000,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]10[.]214[.]169",
                    "1[.]10[.]214[.]187",
                    "1[.]10[.]219[.]161"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1468,
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
                "name": " \"unknown_stealer\"",
                "count": 798,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"yufit[.]biz\"",
                    " \"zoolasuites[.]com\"",
                    " \"zoomative[.]com\""
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
                "name": " \"Mirai",
                "count": 638,
                "types": [
                    "hash"
                ],
                "sampleIndicators": [
                    " \"bfdd21011b1a1a458d61d2fa9080c0292e888d1b5da2c9be96b8476d3fe2863e",
                    " \"78954ceb3fde7ca10e324a229a4bd1ca97a211689dcc4f673f0e2a7c97114fd4",
                    " \"6042e93dbc4f7aae0bbeacbf95ae819b249595526eeb8f39272053ae344359f5"
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
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious URLs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": "SSH Attacks",
        "totalAttacksThisHour": 47328,
        "lastCalculated": "2026-01-04 02:02 IST"
    }
};
