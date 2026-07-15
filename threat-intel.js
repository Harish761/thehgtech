// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-07-15T11:54:23.976219+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-07-15T11:54:23.621518+05:30",
    "lastUpdatedFormatted": "Jul 15, 2026 at 11:54 AM IST",
    "comparisonPeriod": "Jul 14 \u2013 Jul 15, 2026",
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
                "hxxp://dmcllnical[.]com/rr/0469404694/Ym9ubmllLmJhZGlyYUBwbmdwb3J0cy5jb20ucGc",
                "hxxp://dmcllnical[.]com/rr/0469404694/Ym9ubmllLmJhZGlyYUBwbmdwb3J0cy5jb20ucGc=",
                "hxxps://bac-uytbf[.]com/search",
                "hxxp://truez23pmwduv-frc7d3dkgghsc5au[.]z03[.]azurefd[.]net/",
                "hxxp://dmcllnical[.]com/rr/9564295642/ZW5hc2gua3VwZXNhbkBwbmdwb3J0cy5jb20ucGc"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 750,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 750,
                "newInLastHour": 31,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"df8c4564aeaad3174ebe2674d5a959dd7c445d59e6f6577e4693a0effd44e583",
                " \"0cde09cbb3ce1d89bc4aaa8fda394cb404c0aa8123b44350e281f15c97d1664e",
                " \"f66c6ec3837107d3163fc260921d598375cc5a9beae06e961bf4b073fb2b7664",
                " \"9c13c855e12616db30895d03c56f053cafa6be7055103afc260b41abce9d2bff",
                " \"0f963f03d73f3f874928d744e8188b3f61470f982ab1100a5645d0a3c27ee611"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1677,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1677,
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
                "1[.]15[.]14[.]29",
                "1[.]159[.]52[.]66",
                "1[.]192[.]177[.]87",
                "1[.]197[.]102[.]62",
                "1[.]197[.]227[.]7"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 5386,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 5386,
                "newInLastHour": 5386,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]0[.]164[.]165",
                "1[.]1[.]220[.]166",
                "1[.]162[.]231[.]16",
                "1[.]180[.]246[.]242",
                "1[.]192[.]63[.]54"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 21121,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 21121,
                "newInLastHour": 21121,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://149[.]71[.]39[.]60:49660/bin[.]sh",
                "hxxp://116[.]167[.]106[.]46:48393/bin[.]sh",
                "hxxp://60[.]184[.]133[.]62:46798/i",
                "hxxp://219[.]155[.]202[.]52:60988/bin[.]sh",
                "hxxps://mprwjkek[.]betwanaa[.]com/54dc2643-f934-475a-8f83-dc3a84bd0014"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 4482,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 4482,
                "newInLastHour": 4167,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"mprwjkek[.]betwanaa[.]com\"",
                " \"umnb[.]daddybetiran[.]live\"",
                " \"217[.]217[.]97[.]75:8787\"",
                " \"hxxps://kcosmetics[.]kr/\"",
                " \"a9fh521j[.]bazisangkaqazgeychidancepoli[.]com\""
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
            "iocCount": 10143,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 10143,
                "newInLastHour": 0,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "2e22d7adb72403b6ff2b18c7302cbfff8ea45010",
                "ca3454955272556813ca9be9954e720fa6b6796a",
                "eb8e9c5b1aa45b3d4ca6b05695a50aea57f7f56e",
                "3e615d9da0efbbbea30584bce2037017460f7251",
                "d75206e1bb0d0ab79c93e78178e102f6ef071732"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 53666,
            "activeSources": 8,
            "criticalAlerts": 32027,
            "activeCampaigns": 259
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 21855,
                "trend": "stable",
                "percentage": -1
            },
            {
                "category": "C2",
                "count": 10172,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 3715,
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
                "name": "malware_download",
                "count": 21092,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://115[.]48[.]160[.]227:39646/bin[.]sh",
                    "hxxp://103[.]176[.]139[.]56:48126/i",
                    "hxxps://12zjij7k[.]betrein90[.]com/?ublib=473366be-890f-47f7-8b9e-797d93513ca0"
                ]
            },
            {
                "name": "CINS Threat List",
                "count": 15000,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]119[.]194[.]226",
                    "1[.]159[.]52[.]66",
                    "1[.]175[.]87[.]205"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1677,
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
                "name": " \"win.cobalt_strike\"",
                "count": 1429,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"101[.]133[.]225[.]51:443\"",
                    " \"158[.]178[.]230[.]77:443\"",
                    " \"158[.]178[.]230[.]77:80\""
                ]
            },
            {
                "name": "AsyncRAT",
                "count": 1426,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "34ba6ed6fdcf11e71f689efe8e8bb5d723339125",
                    "8f000dbd7cc73e8857d42a3c7c15676305af6889",
                    "85f5e4e0d8c608a11c4e493eb349a7a4c8c4bc9d"
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
                "count": 693,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "4c67471be88dd63db2466621fe9e2a2d848f5b79",
                    "9cc76149b07c25893611bc8339406a6312ab2053",
                    "1b64957d1d878c0c0b0b346849db2e64d487aa17"
                ]
            },
            {
                "name": "Vidar",
                "count": 646,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "3403986d256e4ce608c0b4e9648d867a373ff6cc",
                    "4ab5197c559d38f2d4886d00f7140b09318bc5ca",
                    "cd1f1ffdd1055c9540758327ff1d7698068c9a93"
                ]
            },
            {
                "name": "LummaStealer",
                "count": 557,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "501d817bb1780acfe5e47082c43472bda8068e4d",
                    "2beac2ee8b2fe7625d4de9f5381d37f200965f91",
                    "a46841d623a191366909b24375bee0eceea23bbe"
                ]
            },
            {
                "name": "OffLoader",
                "count": 443,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "d75206e1bb0d0ab79c93e78178e102f6ef071732",
                    "659379b480f2d3448f8946b0961115e00bfdbce0",
                    "4af51082ffa699d104ec1f66263afc8efa99cf76"
                ]
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious URLs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": "malware_download",
        "totalAttacksThisHour": 46010,
        "lastCalculated": "2026-07-15 11:54 IST"
    }
};
