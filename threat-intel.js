// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-05-22T16:43:17.881359+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-05-22T16:43:17.527432+05:30",
    "lastUpdatedFormatted": "May 22, 2026 at 04:43 PM IST",
    "comparisonPeriod": "May 21 \u2013 May 22, 2026",
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
                "hxxps://casaluna[.]spahotel[.]guru/",
                "hxxp://www[.]pcn-noticyo[.]cyou/com/",
                "hxxp://oc-google[.]com[.]cn/",
                "hxxp://bet365casinoplay[.]online/",
                "hxxp://hengyitong[.]com[.]cn/prointro[.]asp"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 3651,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 3651,
                "newInLastHour": 115,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"4233c6d6786b20c0cd2b184308541e7eeaa4a23dd2afdca07cf3d4da2f654d4f",
                " \"150fd7d0184e3aad7bebe991352dd1050b79b230825ce8f22e70e7d45800ab2a",
                " \"e252cd399ca7d1102917946ea9cbd9cf4e9d03bf0180d26a43946cafc4b7acb4",
                " \"17d6415df0d336e255df7689ae90039e48fd6e95d43fbbc34d5b4875ea9af47d",
                " \"b98c91f05c1be564d7e0f37950aa3ffbaccff1291d24df728a774845f5c32f60"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1618,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1618,
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
                "1[.]172[.]148[.]176",
                "1[.]176[.]118[.]246",
                "1[.]180[.]153[.]254",
                "1[.]180[.]183[.]158",
                "1[.]180[.]42[.]2"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 6040,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 6040,
                "newInLastHour": 6040,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]0[.]164[.]165",
                "1[.]116[.]61[.]217",
                "1[.]14[.]105[.]179",
                "1[.]15[.]103[.]109",
                "1[.]162[.]228[.]189"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 23542,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 23542,
                "newInLastHour": 23542,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://42[.]239[.]14[.]102:42616/i",
                "hxxp://182[.]121[.]215[.]209:49571/i",
                "hxxp://125[.]41[.]141[.]71:40774/i",
                "hxxps://formkey[.]asia/d01af252-520e-49c5-bb8f-dedf96636d23/ton[.]ch",
                "hxxps://chickencutlet-hacks[.]christmas/96a44b1a-a1ce-4725-92a8-c3de38e825ee/ton[.]ch"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 3129,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 3129,
                "newInLastHour": 3124,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"formkey[.]asia\"",
                " \"chickencutlet-hacks[.]christmas\"",
                " \"180[.]131[.]145[.]97:9995\"",
                " \"chroniclearchivekeeper[.]christmas\"",
                " \"46[.]151[.]182[.]76:8080\""
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
            "iocCount": 9710,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 9710,
                "newInLastHour": 1,
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
            "totalIndicators": 56804,
            "activeSources": 8,
            "criticalAlerts": 36788,
            "activeCampaigns": 249
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 27069,
                "trend": "stable",
                "percentage": -2
            },
            {
                "category": "C2",
                "count": 9719,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 2800,
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
                "count": 23404,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://112[.]238[.]131[.]71:48734/i",
                    "hxxp://112[.]238[.]131[.]71:48734/bin[.]sh",
                    "hxxps://quantumvelocitylabs[.]christmas/78875570-5e84-486b-a61d-0005477244e6/g[.]ch"
                ]
            },
            {
                "name": "CINS Threat List",
                "count": 15000,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]176[.]118[.]246",
                    "1[.]180[.]153[.]254",
                    "1[.]192[.]250[.]197"
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
                "count": 1387,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"49[.]232[.]4[.]144:18443\"",
                    " \"206[.]188[.]197[.]241:53\"",
                    " \"193[.]142[.]146[.]30:6555\""
                ]
            },
            {
                "name": " \"n/a",
                "count": 1054,
                "types": [
                    "hash"
                ],
                "sampleIndicators": [
                    " \"6e0ef3af90cd3e4a8d48b6e5fee62e5d88f69d007135314f9014e63cfb179e93",
                    " \"4d40b8a6f816c5f5c43e1d9565e457aaa3bbdb3c974fb2d72ec370f8f515ab36",
                    " \"bcc12c80f4bc3c9069c80298153156e6abde51fdcc52517185b0eccf09ee5a1b"
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
                "count": 536,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "cbcbab57af719e97174407cc1e97c57c3478d481",
                    "971333b66a8266c1bf37aba686b9b89fcd9a9e44",
                    "d401a5c721a25dd94d6eb02284f5e7b918c2b5df"
                ]
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious URLs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": "malware_download",
        "totalAttacksThisHour": 48127,
        "lastCalculated": "2026-05-22 16:43 IST"
    }
};
