// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-09-25T10:16:56.684097+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-09-25T10:16:56.336078+05:30",
    "lastUpdatedFormatted": "Sep 25, 2026 at 10:16 AM IST",
    "comparisonPeriod": "Sep 24 \u2013 Sep 25, 2026",
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
                "hxxps://uniparksl[.]qpon/gb",
                "hxxp://duco-hptr[.]onrender[.]com/",
                "hxxps://tokenim-cdn-hk[.]xyz/",
                "hxxps://tokenim-cdn-hk[.]cfd/",
                "hxxps://tokenim-cdn-hk[.]pics/"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 2644,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 2644,
                "newInLastHour": 264,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"3ef8580795f9e384a5c457cdd136c7b163fd03ce37f0e7d2961e1065aec52ed3",
                " \"bd01d8dfcb86adbaaecf212506e71d5207715f3e92316cda3f7ac41910022217",
                " \"12942bba4b7c24f3c9b37d972caea2d769c1882375faf5dc4b265a5dacdd63b3",
                " \"9b74712f8e5a46e0f9718bf6da01590a033d95da66c6f6a7b3d34fd8a3a385b9",
                " \"d521dc2da106ed44368a65f51095782f9d8e595305e773572a36d4e0b8bf6b46"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1709,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1709,
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
                "2.26.75.0/24",
                "2.27.5.0/24"
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
                "1[.]117[.]59[.]169",
                "1[.]20[.]186[.]172",
                "1[.]2[.]173[.]126",
                "1[.]220[.]119[.]115",
                "1[.]24[.]16[.]104"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 11584,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 11584,
                "newInLastHour": 11584,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]0[.]164[.]165",
                "1[.]161[.]144[.]132",
                "1[.]162[.]197[.]67",
                "1[.]162[.]247[.]182",
                "1[.]20[.]175[.]122"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 14212,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 14212,
                "newInLastHour": 14212,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://78[.]38[.]19[.]164:38456/i",
                "hxxp://182[.]127[.]153[.]253:41373/i",
                "hxxp://123[.]12[.]35[.]173:57105/bin[.]sh",
                "hxxp://222[.]127[.]68[.]115:47758/i",
                "hxxp://119[.]116[.]156[.]207:50311/i"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 9169,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 9169,
                "newInLastHour": 8622,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"lizususo[.]workers[.]dev\"",
                " \"violetdonia[.]workers[.]dev\"",
                " \"122[.]10[.]71[.]108:8888\"",
                " \"122[.]10[.]71[.]108:34890\"",
                " \"122[.]10[.]71[.]108:888\""
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
            "iocCount": 10788,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 10788,
                "newInLastHour": 0,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "06ba62804f9d40f0ffb38ecd4c42b0229921cbde",
                "aca5d4a8d82ba3feb8e85cd90158efba0d02f03f",
                "fd081cbaf79596b443b9d591f9dd1390268db7f0",
                "9780ed18b0a63e77e19611e7f46f640a64c1ad5e",
                "cadf6b3f7ceb64de2253e8c0734b867a2762987a"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 53945,
            "activeSources": 8,
            "criticalAlerts": 27788,
            "activeCampaigns": 277
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 17008,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "C2",
                "count": 10780,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 4265,
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
                "name": "CINS Threat List",
                "count": 15000,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]177[.]162[.]4",
                    "1[.]192[.]129[.]106",
                    "1[.]193[.]58[.]176"
                ]
            },
            {
                "name": "malware_download",
                "count": 14488,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://119[.]154[.]121[.]28:38962/i",
                    "hxxp://36[.]35[.]72[.]255:48905/i",
                    "hxxp://222[.]127[.]76[.]40:52775/i"
                ]
            },
            {
                "name": " \"js.iclickfix\"",
                "count": 2117,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"rivistalibera[.]it\"",
                    " \"rooshnaf[.]com\"",
                    " \"rupertwinston[.]com\""
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1709,
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
                "count": 1452,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "cb7fcaede3c6bb75e73ee72b8de7c23de2953dd4",
                    "990472ad57a4d7dcb13689a21b0c84252f5cf0a5",
                    "99500e5de097a58d95775e1f9da85597851bdb71"
                ]
            },
            {
                "name": " \"Mirai",
                "count": 1442,
                "types": [
                    "hash"
                ],
                "sampleIndicators": [
                    " \"2b9e79d0137424e4a2ba5b57acbf3dc703833eed10141341683e4f7050b60294",
                    " \"db15c5b5a0a6295ee6a3d30be1b49ae668857ee54416d9d7e779f8f4541e50d6",
                    " \"a4b07355c2e80bc6db323063799136b9e1dc57b799a66540d73c56b0f979af2f"
                ]
            },
            {
                "name": " \"win.cobalt_strike\"",
                "count": 1356,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"209[.]38[.]82[.]85:8080\"",
                    " \"209[.]38[.]82[.]85:80\"",
                    " \"82[.]156[.]186[.]185:18443\""
                ]
            },
            {
                "name": " \"unknown_loader\"",
                "count": 1313,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"yellowboximmigration[.]com\"",
                    " \"youngpropertypartners[.]com\"",
                    " \"yrmok[.]com\""
                ]
            },
            {
                "name": "Vidar",
                "count": 802,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "06ba62804f9d40f0ffb38ecd4c42b0229921cbde",
                    "fd081cbaf79596b443b9d591f9dd1390268db7f0",
                    "9780ed18b0a63e77e19611e7f46f640a64c1ad5e"
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
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious IPs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": " \"Mirai",
        "totalAttacksThisHour": 49987,
        "lastCalculated": "2026-09-25 10:16 IST"
    }
};
