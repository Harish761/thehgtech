// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-02-24T19:09:43.585633+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-02-24T19:09:43.296715+05:30",
    "lastUpdatedFormatted": "Feb 24, 2026 at 07:09 PM IST",
    "comparisonPeriod": "Feb 23 \u2013 Feb 24, 2026",
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
                "hxxps://oicana-34794-myltabas[.]pages[.]dev/help/contact/399121418862456",
                "hxxp://news[.]cistronixperu[.]com/rs3/login[.]php",
                "hxxp://www[.]g33wq-lzgz[.]vercel[.]app/",
                "hxxps://notafakedomain[.]org/landing/form/d5f3c9f7-ea9d-4326-a15a-ad9fed9d2cce",
                "hxxp://cesserieuxcette[.]weebly[.]com/"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 1490,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 1490,
                "newInLastHour": 98,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"1fd25cfec4fb450be589d9e4ab8a2193a001c014484b212f427d34acd223e4b6",
                " \"f3fbb7cd3f74be82f7f41dd36c20957ea5ef2de4c918c9a6e0be651e44557a1f",
                " \"ea382f4b7a5ebeba505e56d42046a420f23a9a126d868bebf3ca04a67cb241bd",
                " \"aae5a39c4ba4e5dbe6057d4b365f6baba494bc79a605c447f2ccb1d2ab62d551",
                " \"442cbdb88df8eb394c86dc2b3a4d042ca660d9b3d0c49d2e8c5e4361ac5cce9e"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1481,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1481,
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
                "1[.]0[.]164[.]165",
                "1[.]10[.]247[.]65",
                "1[.]11[.]132[.]194",
                "1[.]14[.]3[.]240",
                "1[.]15[.]116[.]189"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 7200,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 7200,
                "newInLastHour": 7200,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]14[.]12[.]141",
                "1[.]15[.]116[.]189",
                "1[.]15[.]77[.]170",
                "1[.]165[.]130[.]37",
                "1[.]194[.]219[.]159"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 21418,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 21418,
                "newInLastHour": 21418,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://42[.]227[.]2[.]151:54243/i",
                "hxxp://219[.]156[.]186[.]139:50659/bin[.]sh",
                "hxxp://42[.]227[.]2[.]151:54243/bin[.]sh",
                "hxxp://39[.]90[.]150[.]187:56203/bin[.]sh",
                "hxxp://115[.]48[.]148[.]27:41312/i"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 1507,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 1507,
                "newInLastHour": 1507,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"23[.]94[.]206[.]26:5610\"",
                " \"mgconsorcio[.]com\"",
                " \"5[.]61[.]40[.]97:45332\"",
                " \"hxxps://5[.]61[.]40[.]97:45332\"",
                " \"asas42424[.]dynuddns[.]net\""
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
            "iocCount": 9073,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 9073,
                "newInLastHour": 6,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "eb23db59e4b3b55b41a9db1435ee07eebb398e7d",
                "2910817b2b70d3fcaf3ff8380f931948431c1178",
                "9422880b79f24259e5c81d28a5c90027a034f6aa",
                "4569809a1b2c3a8f6a10b0d630302ea802923614",
                "ea34ccfb2a541a04a07c6c77b61b5d8c4b2b5a05"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 50171,
            "activeSources": 8,
            "criticalAlerts": 31908,
            "activeCampaigns": 216
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 22866,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "C2",
                "count": 9042,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 1093,
                "trend": "stable",
                "percentage": 5
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
                "count": 21296,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxps://chillwater[.]coldinriver[.]in[.]net/service/verification[.]google",
                    "hxxp://182[.]126[.]95[.]129:33915/i",
                    "hxxp://61[.]52[.]54[.]243:37571/bin[.]sh"
                ]
            },
            {
                "name": "CINS Threat List",
                "count": 15000,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]0[.]164[.]165",
                    "1[.]10[.]247[.]65",
                    "1[.]11[.]132[.]194"
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
                "name": " \"n/a",
                "count": 575,
                "types": [
                    "hash"
                ],
                "sampleIndicators": [
                    " \"dd279c3d027cef5a712bd504ff20939f016099bfa82d96928b47df262ff4bdd9",
                    " \"edc7c1d143fb149329981885f43182d71c5d1675ccc079e7e0b35ebdc43a13b3",
                    " \"3c112776a805d34920614b4e1c5e1ced2cd1d03e818dd461937a5bbb55369764"
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
                "name": " \"Mirai",
                "count": 543,
                "types": [
                    "hash"
                ],
                "sampleIndicators": [
                    " \"db8332da87936c4e44b1ad98823de83395f1d0db5af0f9e99a2a13d02bdb9a88",
                    " \"4c6117b78b73272d2cc431a85ebd9644b515baea414ee676709f288b12b52840",
                    " \"f83d32398be2836d987a1b3e33b851fdfbf59cb6d97d86bbde1d6f667c9cdedb"
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
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious URLs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": "malware_download",
        "totalAttacksThisHour": 45531,
        "lastCalculated": "2026-02-24 19:09 IST"
    }
};
