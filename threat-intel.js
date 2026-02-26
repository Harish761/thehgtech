// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-02-26T19:09:39.231227+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-02-26T19:09:38.886179+05:30",
    "lastUpdatedFormatted": "Feb 26, 2026 at 07:09 PM IST",
    "comparisonPeriod": "Feb 25 \u2013 Feb 26, 2026",
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
                "hxxp://pub-0c1a56b09e0d486882eda1d2f972fe31[.]r2[.]dev/index[.]html",
                "hxxps://roblox[.]com[.]py/games/87681080828382/1612-59?privateServerLinkCode=94039917790950526947285783345931",
                "hxxp://whatsapp-clone-frontend-liart[.]vercel[.]app/",
                "hxxp://pub-22cd87913c484496a71b7d21d6243800[.]r2[.]dev/index[.]html",
                "hxxp://kuccycoins[.]pages[.]dev/"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 728,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 728,
                "newInLastHour": 60,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"f3bb76e8988bd2170debbb745f78ee2349186b1bb05987e6b0a0e0af9024ac99",
                " \"e47473e724d24cc6d46868f2e2e05bd93705f4c94edb5363b7dec5262d9102d4",
                " \"109f8140cad0cec0f1e61586bde05bd22690b1bdaeaddaf1bd1d9ac1bd5c1bae",
                " \"cefdc085851a7317ef39e5df0c5bf71f34ed557ae3691f9518d9e7277e89325f",
                " \"609a6dc0a52703edb64110939bf976bd386d73387da1abeccf3186fe9891741b"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1524,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1524,
                "newInLastHour": 54,
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
                "1[.]0[.]219[.]253",
                "1[.]10[.]247[.]16",
                "1[.]11[.]132[.]194",
                "1[.]15[.]116[.]189",
                "1[.]157[.]81[.]197"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 6080,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 6080,
                "newInLastHour": 6080,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]14[.]12[.]141",
                "1[.]204[.]166[.]3",
                "1[.]214[.]42[.]172",
                "1[.]233[.]104[.]29",
                "1[.]241[.]174[.]81"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 21792,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 21792,
                "newInLastHour": 21792,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://198[.]23[.]177[.]223/90/gftyrggdgfdsd8f787d8f8d7g87fg88sdf778fdg8dsf8g[.]hta",
                "hxxp://85[.]11[.]167[.]183/arquivo_20260224055001[.]txt",
                "hxxp://91[.]92[.]241[.]197:5124/1/pp1/nsjd[.]png",
                "hxxp://125[.]40[.]108[.]152:51598/i",
                "hxxp://123[.]11[.]76[.]47:51107/bin[.]sh"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 793,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 793,
                "newInLastHour": 793,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"lusciouslinens[.]ca\"",
                " \"lupitaromasw[.]com\"",
                " \"91[.]232[.]103[.]250:3250\"",
                " \"157[.]151[.]245[.]77:8888\"",
                " \"lunchboxbyregina[.]com\""
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
                "162[.]243[.]103[.]246",
                "178[.]62[.]3[.]223",
                "34[.]204[.]119[.]63"
            ]
        },
        "SSL Blacklist": {
            "description": "Malicious SSL certificates used by botnet C2 servers. Helps detect encrypted malware communications.",
            "website": "https://sslbl.abuse.ch/",
            "updateFrequency": "Daily",
            "iocCount": 9092,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 9092,
                "newInLastHour": 6,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "90e63e5e9547adf8f93fa8a7cc53e894cae316ca",
                "e866a188684d5e7c272d4edcafcd8a317bee557a",
                "2eabf1c3027277a463e299054d25d40885912cf4",
                "f7891d2133cc57f48db8d7a50197e00d3170625f",
                "4f616f6f2a46ced5bd55cc6d05289878ec88cc3f"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 49185,
            "activeSources": 8,
            "criticalAlerts": 31563,
            "activeCampaigns": 208
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 22500,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "C2",
                "count": 9063,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 614,
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
                "count": 21708,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://24[.]88[.]242[.]17:51579/i",
                    "hxxp://115[.]56[.]152[.]220:50651/i",
                    "hxxp://42[.]234[.]233[.]136:44854/bin[.]sh"
                ]
            },
            {
                "name": "CINS Threat List",
                "count": 15000,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]10[.]247[.]16",
                    "1[.]10[.]247[.]213",
                    "1[.]11[.]132[.]194"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1476,
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
                "count": 1383,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "bef81c1fd26e84e5e25a4182bf668304ba2891da",
                    "adb1b31a6283691b205839f5e3ce4f8ed7aa5f54",
                    "97e58eec776ad990a10d1f4a932e1a4ae48636b3"
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
                "count": 624,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "a49ad700b0042b6d1e20153a6253bcc8ff17cff2",
                    "56dd33cfae66685bb9cf7f923d6e6752ff791705",
                    "2568edbf429d4745fe7ec67848063d60b82823d8"
                ]
            },
            {
                "name": "LummaStealer",
                "count": 537,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "2987e30402370bdcbf291aedc9cd52a9a79bda0c",
                    "6fd95f4a2d9cec238cbe2e1756890381c4fae3cb",
                    "e2293f74d8d72bde90bb0424038259a9e3126e1b"
                ]
            },
            {
                "name": "Vidar",
                "count": 374,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "a9376a357aebf80af91a289f9fcb916ee1c04384",
                    "2fe17ef982c9dcbecd93baa4c77df1bf7c8d19b0",
                    "66afb632b2131a12c4ee5896e88bc485662077eb"
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
        "totalAttacksThisHour": 44088,
        "lastCalculated": "2026-02-26 19:09 IST"
    }
};
