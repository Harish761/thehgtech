// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-01-04T14:08:45.466468+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-01-04T14:08:45.177318+05:30",
    "lastUpdatedFormatted": "Jan 04, 2026 at 02:08 PM IST",
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
                "hxxps://pancaketoken[.]com/",
                "hxxps://rbx-url[.]com/lbyB-1co",
                "hxxps://alemonda[.]pro/continuar/",
                "hxxps://skidbot[.]github[.]io/cybersecurity_phishing/",
                "hxxps://trezorsuite-docs[.]vercel[.]app/"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 1273,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 1273,
                "newInLastHour": 184,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"f54fbfcb038af9a12d446f0150b97fef7a71ca02eec07c517f0ed00fdbea8185",
                " \"344eded2d626ad7940a011da355615fcfa98e82c894eeef087b8a4391801614d",
                " \"086334f4bd742732be1e51432299ed1499318895272040c7b096ea42377bd4e8",
                " \"063365f34675cf176275324cabc91cc758ef1322562bf9bb6ff6624fac945f24",
                " \"b3d4d1f18ad895f06a1e5cefeddd63f78c80706b6fbbc7b7d65d6032f2bed793"
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
                "1[.]11[.]85[.]36",
                "1[.]15[.]118[.]23"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 6158,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 6158,
                "newInLastHour": 6158,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]14[.]95[.]153",
                "1[.]161[.]40[.]132",
                "1[.]162[.]246[.]79",
                "1[.]171[.]31[.]156",
                "1[.]171[.]38[.]201"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 24233,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 24233,
                "newInLastHour": 24233,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://42[.]53[.]58[.]14:42801/i",
                "hxxp://27[.]37[.]85[.]79:45857/bin[.]sh",
                "hxxp://invoker[.]rootxran[.]com:8081/Loader[.]efi",
                "hxxp://invoker[.]rootxran[.]com:8081/EfiGuardDxe[.]efi",
                "hxxp://222[.]140[.]159[.]21:42932/i"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 1092,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 1092,
                "newInLastHour": 1092,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"107[.]20[.]72[.]33:2762\"",
                " \"79[.]110[.]49[.]154:5555\"",
                " \"150[.]109[.]246[.]251:443\"",
                " \"154[.]91[.]84[.]46:444\"",
                " \"88[.]99[.]57[.]95:6745\""
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
            "iocCount": 8710,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 8710,
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
            "totalIndicators": 51855,
            "activeSources": 8,
            "criticalAlerts": 34038,
            "activeCampaigns": 167
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 25351,
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
                "category": "Phishing",
                "count": 301,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 249,
                "trend": "stable",
                "percentage": -1
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
                "count": 24161,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://103[.]160[.]130[.]8:34024/i",
                    "hxxp://182[.]118[.]146[.]219:47857/bin[.]sh",
                    "hxxp://110[.]36[.]0[.]196:55459/i"
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
                "count": 507,
                "types": [
                    "hash"
                ],
                "sampleIndicators": [
                    " \"b19e36e55363d19ba5af8fde9903ba8e7d9ef1966cf19763af2914e6b78a7495",
                    " \"87b5360fc1a9b326ab7cdece074614eb30e23bd0ff7b179cb121e29aac0edb31",
                    " \"1bc4dc66711c1edf331432d54b3a39f182656dd719e5731d786b902fcc916eab"
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
        "totalAttacksThisHour": 46970,
        "lastCalculated": "2026-01-04 14:08 IST"
    }
};
