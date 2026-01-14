// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-01-15T00:27:41.491219+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-01-15T00:27:41.026443+05:30",
    "lastUpdatedFormatted": "Jan 15, 2026 at 12:27 AM IST",
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
                "hxxps://roblox[.]com[.]ge/games/920587237/DAY-16-Adopt-Me?privateServerLinkCode=62824827491820618435381397230697",
                "hxxps://final-kimchi-072485[.]framer[.]app/",
                "hxxps://public-exoduswallt[.]framer[.]media/",
                "hxxps://consistent-play-637903[.]framer[.]app/",
                "hxxps://broader-presentations-469008[.]framer[.]app/"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 527,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 527,
                "newInLastHour": 45,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"b4195e7584ac97d9c444ee6292160c80f9c889e6cba27cc656506d3c5fcffd48",
                " \"928b2061aedb3ca6e65a4156966564dc3ded14c6fecc7d38268fb5cef884c3d0",
                " \"44c3796d72e2ee0273b6e463da9f78ada6928837d73b4a7af028bb2e3383949d",
                " \"1283bdb918a7f33e4150ef58cb73e47ca2024dd011e62e4350a71cfbfc5fe604",
                " \"15f436290b8f24c62fc556771464f45068d8cf839d1c4683b0a3398e64384bc5"
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
                "newInLastHour": 2,
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
                "1[.]14[.]3[.]240",
                "1[.]15[.]118[.]23",
                "1[.]157[.]99[.]66",
                "1[.]170[.]47[.]115",
                "1[.]170[.]61[.]246"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 5754,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 5754,
                "newInLastHour": 5754,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]12[.]64[.]80",
                "1[.]162[.]249[.]243",
                "1[.]178[.]38[.]103",
                "1[.]194[.]233[.]49",
                "1[.]197[.]102[.]62"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 24187,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 24187,
                "newInLastHour": 24187,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://222[.]140[.]107[.]107:60337/bin[.]sh",
                "hxxp://112[.]248[.]109[.]130:38442/i",
                "hxxp://182[.]121[.]14[.]101:53156/i",
                "hxxp://110[.]40[.]198[.]62:5555/02[.]08[.]2022[.]exe",
                "hxxp://110[.]40[.]198[.]62/02[.]08[.]2022[.]exe"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 30900,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 30900,
                "newInLastHour": 30672,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"wq4x0gt8l[.]localto[.]net\"",
                " \"20[.]82[.]176[.]195:7771\"",
                " \"cezamail[.]com[.]cezamail[.]com\"",
                " \"cezamail[.]com[.]localto[.]net\"",
                " \"promole5[.]ddnsfree[.]com\""
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
            "iocCount": 8774,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 8774,
                "newInLastHour": 7,
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
            "totalIndicators": 81088,
            "activeSources": 8,
            "criticalAlerts": 33414,
            "activeCampaigns": 213
        },
        "topThreats": [
            {
                "category": "Botnet",
                "count": 30229,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Malware",
                "count": 24665,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "C2",
                "count": 8749,
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
                "name": " \"unknown\"",
                "count": 29904,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"129[.]212[.]181[.]175:443\"",
                    " \"hxxps://zabaikalsk[.]logomebel[.]ru/\"",
                    " \"185[.]196[.]9[.]60:5555\""
                ]
            },
            {
                "name": "malware_download",
                "count": 24127,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://115[.]63[.]188[.]129:40760/i",
                    "hxxp://173[.]28[.]101[.]7:52287/i",
                    "hxxp://123[.]5[.]188[.]19:40314/i"
                ]
            },
            {
                "name": "CINS Threat List",
                "count": 15000,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]14[.]3[.]240",
                    "1[.]15[.]118[.]23",
                    "1[.]15[.]14[.]29"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1459,
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
                "count": 1371,
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
                    " \"86[.]54[.]42[.]197:8888\"",
                    " \"midnight-forge[.]cc\"",
                    " \"dashboard2-cqhtfds57-cihan-katircis-projects[.]vercel[.]app\""
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
        "totalAttacksThisHour": 75972,
        "lastCalculated": "2026-01-15 00:27 IST"
    }
};
