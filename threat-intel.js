// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-01-03T10:10:12.072560+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-01-03T10:10:11.745952+05:30",
    "lastUpdatedFormatted": "Jan 03, 2026 at 10:10 AM IST",
    "comparisonPeriod": "Jan 02 \u2013 Jan 03, 2026",
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
                "hxxp://www[.]x[.]pzfdyx[.]com/wap/",
                "hxxps://solfnipplesplayers[.]faqserv[.]com/carbon/ronaldo7[.]php/",
                "hxxp://gemini[.]lotxy[.]xyz/",
                "hxxps://coinbase-login-access[.]blogspot[.]com/",
                "hxxp://www[.]coinbase-login-access[.]blogspot[.]com/"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 1229,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 1229,
                "newInLastHour": 12,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"560ac051ba7e544ad7eecba19fdde685cfe538e68e5f721aa61a095b223c9436",
                " \"c4b2356d0c8a5aa5814f40d04dc0052b759c58604e64d2fb04376b17858425ad",
                " \"a239e564e9e26d4e550b86e50e09c3b3e21647dfa2e7108c62b24d0345687db6",
                " \"7edad86c094f657569d22c11fdd5c593723160bd0c131208b96658b655ba6afc",
                " \"523ddb2ad8a21458742b2139f96dcf3d3acc34372ee8e0d4ac6ed44a94a3f5b9"
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
                "1[.]10[.]214[.]163",
                "1[.]10[.]214[.]169",
                "1[.]10[.]214[.]187",
                "1[.]10[.]219[.]161",
                "1[.]15[.]118[.]23"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 5344,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 5344,
                "newInLastHour": 5344,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]14[.]95[.]153",
                "1[.]161[.]40[.]132",
                "1[.]161[.]57[.]21",
                "1[.]162[.]228[.]28",
                "1[.]162[.]246[.]79"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 24730,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 24730,
                "newInLastHour": 24730,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://58[.]47[.]104[.]237:34496/i",
                "hxxp://182[.]113[.]192[.]32:40925/i",
                "hxxp://221[.]14[.]184[.]123:40318/bin[.]sh",
                "hxxp://123[.]9[.]242[.]239:38984/i",
                "hxxp://42[.]226[.]219[.]89:59039/i"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 592,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 592,
                "newInLastHour": 397,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"37[.]60[.]254[.]24:8080\"",
                " \"oiastocks[.]pics\"",
                " \"5[.]89[.]181[.]222:443\"",
                " \"192[.]3[.]177[.]149:8080\"",
                " \"43[.]142[.]29[.]208:8898\""
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
            "iocCount": 8708,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 8708,
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
            "totalIndicators": 52047,
            "activeSources": 8,
            "criticalAlerts": 34687,
            "activeCampaigns": 182
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 26000,
                "trend": "stable",
                "percentage": -1
            },
            {
                "category": "C2",
                "count": 8687,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 390,
                "trend": "stable",
                "percentage": -4
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
                "count": 24730,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://58[.]47[.]104[.]237:34496/i",
                    "hxxp://182[.]113[.]192[.]32:40925/i",
                    "hxxp://221[.]14[.]184[.]123:40318/bin[.]sh"
                ]
            },
            {
                "name": "CINS Threat List",
                "count": 15000,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]10[.]214[.]163",
                    "1[.]10[.]214[.]169",
                    "1[.]10[.]214[.]187"
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
                "name": " \"Mirai",
                "count": 544,
                "types": [
                    "hash"
                ],
                "sampleIndicators": [
                    " \"3b77c047ed6dde4c9b6da088d07935f6aabbbba2139af90b72c696fb1b82be0e",
                    " \"0711944e0904582000fc93936884ce8e104f35e06d498741f9e87798e7cf6d0b",
                    " \"868efe280324f462f2ddd7932d93c4381bd693e01aeb76a2c46187d40f365531"
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
        "fastestRisingThreat": " \"win.quasar_rat\"",
        "totalAttacksThisHour": 45786,
        "lastCalculated": "2026-01-03 10:10 IST"
    }
};
