// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-05-31T02:41:33.259923+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-05-31T02:41:32.974069+05:30",
    "lastUpdatedFormatted": "May 31, 2026 at 02:41 AM IST",
    "comparisonPeriod": "May 30 \u2013 May 31, 2026",
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
                "hxxp://shopeeid101[.]blogspot[.]com/",
                "hxxps://pixeltannu[.]github[.]io/netflix[.]clone",
                "hxxp://faduan[.]wasmer[.]app/apolloglobal",
                "hxxp://faduan[.]wasmer[.]app/emeraldrenews",
                "hxxps://urlto[.]me/291Tq"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 744,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 744,
                "newInLastHour": 23,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"2c3600c06cf3b885b5c832f69d9300d1f7b3e250a68b52d6e75203680fc552e5",
                " \"4f49ff8f307e2c92e88ccf16f58460741df58f48a94238e6cb39e7f9afec4875",
                " \"72183ab10958d6085de8b1f4de40565f6560476339b41a7af9919da1cc60d265",
                " \"5a0f9cbf75d2285e96ff171018a3633158eea0c2765007a317a814294aa4edfe",
                " \"27955052f7132cbdd10962c3c19ab49cd29e0ff280ceb563fa7565bd1f5af2cf"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1606,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1606,
                "newInLastHour": 1212,
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
                "1[.]1[.]223[.]76",
                "1[.]12[.]229[.]231",
                "1[.]123[.]161[.]46",
                "1[.]141[.]160[.]162",
                "1[.]15[.]35[.]79"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 7372,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 7372,
                "newInLastHour": 7372,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]0[.]164[.]165",
                "1[.]12[.]222[.]63",
                "1[.]14[.]206[.]154",
                "1[.]14[.]64[.]225",
                "1[.]15[.]103[.]109"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 20988,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 20988,
                "newInLastHour": 20988,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxps://45cbh9h6[.]liketudong[.]biz/?ublib=09063218-3263-4a1d-91f2-e9d48018b2d6",
                "hxxp://91[.]92[.]242[.]236/files-129312398/files/file_31a41992cb5eafba[.]exe",
                "hxxp://182[.]114[.]50[.]155:53529/i",
                "hxxps://bxhnheh[.]vostrovape[.]com/085ea1d6-65ee-4ae9-8890-37e422ddf547",
                "hxxp://222[.]140[.]131[.]238:44939/i"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 3248,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 3248,
                "newInLastHour": 3235,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"45cbh9h6[.]liketudong[.]biz\"",
                " \"liketudong[.]biz\"",
                " \"bxhnheh[.]vostrovape[.]com\"",
                " \"ccsrwcs[.]vostrovape[.]com\"",
                " \"47[.]84[.]185[.]69:6666\""
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
            "iocCount": 9811,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 9811,
                "newInLastHour": 122,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "dcd708a5925943afaf7eaf3b7a7fabeb332155c5",
                "8e733b34e95a7b98ada40292b8d35e9040016e65",
                "4b19add85966daaef23fdea4c1527633a36a88ba",
                "9c5605a73a159de919523a8f844814d47e79a321",
                "1fe4d1c9b7106f25e606894cb6a64f69c4862b29"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 50363,
            "activeSources": 8,
            "criticalAlerts": 31418,
            "activeCampaigns": 212
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 21742,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "C2",
                "count": 9676,
                "trend": "stable",
                "percentage": -1
            },
            {
                "category": "Botnet",
                "count": 2923,
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
                "count": 20974,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxps://nwmhtzx[.]suslink[.]com[.]pk/3f9e3bf5-c6e8-44f1-80ea-0192b5d601b8",
                    "hxxp://182[.]127[.]153[.]32:48764/bin[.]sh",
                    "hxxp://182[.]127[.]3[.]74:55514/i"
                ]
            },
            {
                "name": "CINS Threat List",
                "count": 15000,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]12[.]229[.]231",
                    "1[.]141[.]160[.]162",
                    "1[.]141[.]181[.]123"
                ]
            },
            {
                "name": " \"win.cobalt_strike\"",
                "count": 1422,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"113[.]31[.]106[.]210:80\"",
                    " \"113[.]31[.]106[.]210:443\"",
                    " \"113[.]31[.]106[.]210:8080\""
                ]
            },
            {
                "name": "AsyncRAT",
                "count": 1414,
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
                "count": 676,
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
                "name": "LummaStealer",
                "count": 552,
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
                "count": 522,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "4b19add85966daaef23fdea4c1527633a36a88ba",
                    "2de4fd0094bc96c8339f3b8c67985f8a7b89b84a",
                    "1b697067f699bc99bf6a48d003bfd9c9b289450d"
                ]
            },
            {
                "name": "OffLoader",
                "count": 409,
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
                "name": "Spamhaus DROP List",
                "count": 394,
                "types": [
                    "ip-range"
                ],
                "sampleIndicators": [
                    "2.58.56.0/24",
                    "2.59.152.0/24",
                    "2.59.153.0/24"
                ]
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious URLs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": "Spamhaus DROP List",
        "totalAttacksThisHour": 48257,
        "lastCalculated": "2026-05-31 02:41 IST"
    }
};
