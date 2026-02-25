// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-02-25T08:41:29.498242+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-02-25T08:41:29.204394+05:30",
    "lastUpdatedFormatted": "Feb 25, 2026 at 08:41 AM IST",
    "comparisonPeriod": "Feb 24 \u2013 Feb 25, 2026",
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
                "hxxps://roblox[.]com[.]ge/users/1932226121/profile",
                "hxxps://www[.]roblox[.]com[.]py/users/3756573833/profile",
                "hxxps://adobefilesopener[.]org/",
                "hxxps://jahreed9[.]github[.]io/Netflix-clone-website",
                "hxxps://roblox[.]com[.]ge/users/4326267595/profile"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 1031,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 1031,
                "newInLastHour": 21,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"8e75dc34d4e08c4f03db2fa125a1ecc90ad445e9a222d0ca191ba03827d823f9",
                " \"4ef0202d0b3b7cc2e39f47074faf010eb831198cd9588f7ce702722d8e24323b",
                " \"7969fd3648138292a9398f957f809ca67d9f3a1a9af91f7ac75ca5b2fbe3242a",
                " \"5b7fc8c557e347bb25266f804c45065e795d60f5c0e8f313171bb333485bb0e2",
                " \"389d3fefcaa011c88e9c9b613b9f546e7fac0a5c0878d757045e2bfb0ca71f9d"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1480,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1480,
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
                "1[.]10[.]247[.]213",
                "1[.]11[.]132[.]194",
                "1[.]15[.]116[.]189",
                "1[.]15[.]22[.]112",
                "1[.]15[.]51[.]236"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 5719,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 5719,
                "newInLastHour": 5719,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]14[.]12[.]141",
                "1[.]15[.]116[.]189",
                "1[.]15[.]136[.]28",
                "1[.]15[.]77[.]170",
                "1[.]194[.]219[.]159"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 21284,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 21284,
                "newInLastHour": 21284,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://130[.]12[.]180[.]43/files/1773787694/RMnsgES[.]exe",
                "hxxp://130[.]12[.]180[.]43/files/1773787694/RMnsgES[.]bat",
                "hxxp://117[.]221[.]161[.]179:48657/bin[.]sh",
                "hxxp://117[.]206[.]141[.]3:49020/i",
                "hxxp://45[.]8[.]118[.]17:42948/i"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 1522,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 1522,
                "newInLastHour": 1522,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"201[.]103[.]99[.]105:995\"",
                " \"123[.]60[.]53[.]85:10001\"",
                " \"137[.]220[.]219[.]244:8083\"",
                " \"179[.]110[.]250[.]222:7000\"",
                " \"51[.]250[.]29[.]72:443\""
            ]
        },
        "Feodo Tracker": {
            "description": "Botnet C2 server IPs from Feodo Tracker. Tracks Dridex, Emotet, TrickBot, QakBot, and BazarLoader.",
            "website": "https://feodotracker.abuse.ch/",
            "updateFrequency": "Hourly",
            "iocCount": 2,
            "iocDataUrl": "https://thehgtech.com/ioc-data/feodo-tracker.json",
            "stats": {
                "total": 2,
                "newInLastHour": 2,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "162[.]243[.]103[.]246",
                "178[.]62[.]3[.]223"
            ]
        },
        "SSL Blacklist": {
            "description": "Malicious SSL certificates used by botnet C2 servers. Helps detect encrypted malware communications.",
            "website": "https://sslbl.abuse.ch/",
            "updateFrequency": "Daily",
            "iocCount": 9074,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 9074,
                "newInLastHour": 0,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "deb508613e3293efe553c8d8d97ef35be71b5c5c",
                "eb23db59e4b3b55b41a9db1435ee07eebb398e7d",
                "2910817b2b70d3fcaf3ff8380f931948431c1178",
                "9422880b79f24259e5c81d28a5c90027a034f6aa",
                "4569809a1b2c3a8f6a10b0d630302ea802923614"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 50132,
            "activeSources": 8,
            "criticalAlerts": 31865,
            "activeCampaigns": 216
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 22816,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "C2",
                "count": 9049,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 1098,
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
                "count": 21680,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://115[.]55[.]248[.]199:41737/i",
                    "hxxp://117[.]209[.]81[.]231:46207/bin[.]sh",
                    "hxxp://123[.]190[.]18[.]50:60344/bin[.]sh"
                ]
            },
            {
                "name": "CINS Threat List",
                "count": 15000,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]11[.]132[.]194",
                    "1[.]14[.]3[.]240",
                    "1[.]15[.]118[.]23"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1483,
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
                "count": 626,
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
                "name": " \"js.iclickfix\"",
                "count": 570,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"bennettarbitration[.]com\"",
                    " \"eventocontaduriafce[.]viajandoalcielo[.]com\"",
                    " \"gconfisur[.]com\""
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
                "name": " \"n/a",
                "count": 416,
                "types": [
                    "hash"
                ],
                "sampleIndicators": [
                    " \"3d84c7ef670a117ded12c899ecd29189a5a018eafa163a1642ea3db10ba07922",
                    " \"129dfe23026a1e360b0966fb836feaefe6ddb6da11bf0282c2cb68907606441e",
                    " \"19fa8248db9c675faf5f0ce3809118a391d9bb8ce253ba31046490c9b10b7e5d"
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
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious URLs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": " \"win.strelastealer\"",
        "totalAttacksThisHour": 43848,
        "lastCalculated": "2026-02-25 08:41 IST"
    }
};
