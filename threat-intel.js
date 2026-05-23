// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-05-23T22:44:08.613039+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-05-23T22:44:08.268473+05:30",
    "lastUpdatedFormatted": "May 23, 2026 at 10:44 PM IST",
    "comparisonPeriod": "May 22 \u2013 May 23, 2026",
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
                "hxxps://bra9-pts-facil[.]dynv6[.]net/B88547/B755154478447801/home[.]php?hash=11492896666a105285879ca2[.]43118919",
                "hxxp://dpd[.]bzqwnp[.]ink/com",
                "hxxp://dpd[.]deliverox[.]top/com",
                "hxxp://dpd[.]fqplxwr[.]cfd/com",
                "hxxp://www[.]ru-fairpay[.]shop/checkSb210466646/"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 645,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 645,
                "newInLastHour": 130,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"f0cd011c32b524599810e6f3d8f93b77dd8d0f36d2fd85cb0e2bad7f5487b0a5",
                " \"ee39f1387ecff828c7f30afd01eae3bca27727f804a4167e91a9c841d1790cb2",
                " \"495377a021f4027a3c64297f52fdb75771c2b0ad69787306620db1fb3fbe35cd",
                " \"99921cb2e67ae6b2b77ad716cb384d7edcdc258956a428b0d1d4390bbc91a50e",
                " \"6a32dde55c2141a5f6c0d1d73f562af67cfa8238829bc72386191956cdeb730c"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 393,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 393,
                "newInLastHour": 1,
                "lastUpdate": "just now"
            },
            "types": [
                "ip-range"
            ],
            "sampleIndicators": [
                "2.58.56.0/24",
                "2.59.152.0/24",
                "2.59.153.0/24",
                "5.101.82.0/24",
                "5.101.86.0/24"
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
                "1[.]123[.]226[.]35",
                "1[.]176[.]118[.]246",
                "1[.]177[.]162[.]3",
                "1[.]177[.]162[.]4",
                "1[.]180[.]153[.]254"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 5749,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 5749,
                "newInLastHour": 5749,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]0[.]164[.]165",
                "1[.]116[.]61[.]217",
                "1[.]14[.]105[.]179",
                "1[.]14[.]70[.]12",
                "1[.]15[.]103[.]109"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 22927,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 22927,
                "newInLastHour": 22927,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://125[.]42[.]66[.]252:40611/bin[.]sh",
                "hxxp://115[.]63[.]55[.]187:55034/i",
                "hxxp://123[.]12[.]25[.]36:46956/i",
                "hxxp://123[.]14[.]19[.]202:42325/i",
                "hxxp://115[.]63[.]55[.]187:55034/bin[.]sh"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 3183,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 3183,
                "newInLastHour": 3146,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"hxxxrrqo[.]northworkflow[.]christmas\"",
                " \"lkxwuddc[.]northworkflow[.]christmas\"",
                " \"adpptgxb[.]bell-processing-core[.]christmas\"",
                " \"kmhgspmw[.]holiday-control-node[.]christmas\"",
                " \"nuynpeej[.]frost-network-platform[.]christmas\""
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
            "iocCount": 9620,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 9620,
                "newInLastHour": 0,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "34a8dc4fb4f4b41fc7bbae738f988305739eb56a",
                "167ddfd671ef30c31528515389cfdd11d9251558",
                "3cf2e022211760871544ad891d3b3b698c5f8792",
                "0d5b0889c583e4da90b365b1d73959a9ea745a86",
                "53c0f0608e2d03a10eab7e3a98d1de6c4ff534e6"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 54427,
            "activeSources": 8,
            "criticalAlerts": 34319,
            "activeCampaigns": 231
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 24599,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "C2",
                "count": 9720,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 2862,
                "trend": "stable",
                "percentage": 1
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
                "percentage": 95
            },
            {
                "name": "Tech",
                "percentage": 4
            },
            {
                "name": "Finance",
                "percentage": 0
            }
        ],
        "campaigns": [
            {
                "name": "malware_download",
                "count": 22808,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://61[.]53[.]157[.]35:40778/i",
                    "hxxp://222[.]137[.]86[.]237:38564/bin[.]sh",
                    "hxxp://182[.]121[.]215[.]209:49571/bin[.]sh"
                ]
            },
            {
                "name": "CINS Threat List",
                "count": 15000,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]1[.]223[.]16",
                    "1[.]176[.]118[.]246",
                    "1[.]177[.]162[.]4"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1630,
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
                "count": 1415,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "167ddfd671ef30c31528515389cfdd11d9251558",
                    "d42a4a7e721a0503d81e3f47c72a0f93c53e4f2c",
                    "b08643668d383e55dd2698e1bcc34571c8dfcc6a"
                ]
            },
            {
                "name": " \"win.cobalt_strike\"",
                "count": 1410,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"60[.]204[.]239[.]241:80\"",
                    " \"5[.]109[.]182[.]231:443\"",
                    " \"60[.]204[.]239[.]241:443\""
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
                "count": 681,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "493f6dbb48806992e524df2a3a0fa0348cef243b",
                    "8a9c74049483847464da1ca3cf6f1f44e17a5f0f",
                    "c47bcbcbe0b1c474542c7fdc233ec68ffb4dcf14"
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
                "name": "Vidar",
                "count": 537,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "34a8dc4fb4f4b41fc7bbae738f988305739eb56a",
                    "cbcbab57af719e97174407cc1e97c57c3478d481",
                    "971333b66a8266c1bf37aba686b9b89fcd9a9e44"
                ]
            },
            {
                "name": " \"n/a",
                "count": 422,
                "types": [
                    "hash"
                ],
                "sampleIndicators": [
                    " \"4204657530d7f2e692cc0ced28a87adb8740573aa4c9b363d339b9cacda1ab8a",
                    " \"a68be64e01f2eb15167e470a5f8e1744b59b0787a3c1744dba0b5bb2716227bb",
                    " \"9e8e5f217a03e4fa008cba8a2df97743e66970a99ff917e86d58036d067a552a"
                ]
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious URLs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": "SSH Attacks",
        "totalAttacksThisHour": 47258,
        "lastCalculated": "2026-05-23 22:44 IST"
    }
};
