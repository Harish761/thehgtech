// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-02-23T11:09:58.018976+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-02-23T11:09:57.738050+05:30",
    "lastUpdatedFormatted": "Feb 23, 2026 at 11:09 AM IST",
    "comparisonPeriod": "Feb 22 \u2013 Feb 23, 2026",
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
                "hxxps://allegrolokalnie[.]pl-919060[.]icu/oferta/simson-s51-4biegowy-do-remontu-silnik/48492",
                "hxxps://forsale[.]dynadot[.]com/evneural[.]com?drefid=2071",
                "hxxps://j1y4[.]github[.]io/netflix",
                "hxxps://qrco[.]de/bgckkm",
                "hxxps://qrco[.]de/bgcLYm"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 1050,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 1050,
                "newInLastHour": 2,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"7e7a670266e5c0a09a8bacf5dfa925cc2a87fd1157843c5531ddf945ccbff705",
                " \"2d7a59004931a77808b68181a1ea84ae350d7d167a6782dd94b4435a65b9071a",
                " \"d2cd6b6132ede525b285790d91182842b48130571a81b6433c69e83da53396f5",
                " \"12892cd7736d2a6df9c936077ca2e3254cf7a6dde4fca96a1ad7145acb271229",
                " \"387f989674b2c18e17a6d90c7ad026bb3d23f274b0f6c99ecec0b10627a1188a"
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
                "newInLastHour": 11,
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
                "1[.]10[.]211[.]66",
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
            "iocCount": 6033,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 6033,
                "newInLastHour": 6033,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]12[.]217[.]80",
                "1[.]165[.]130[.]37",
                "1[.]214[.]117[.]218",
                "1[.]220[.]64[.]218",
                "1[.]241[.]174[.]81"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 21046,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 21046,
                "newInLastHour": 21046,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://115[.]55[.]35[.]128:46594/i",
                "hxxp://222[.]139[.]225[.]239:39000/bin[.]sh",
                "hxxp://110[.]36[.]19[.]51:45253/bin[.]sh",
                "hxxp://39[.]79[.]128[.]10:43302/i",
                "hxxp://45[.]153[.]34[.]165/main_x86"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 1099,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 1099,
                "newInLastHour": 922,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"agricultural-monitoring[.]freshhill[.]ru\"",
                " \"impactanalysisview[.]globalstimul[.]in[.]net\"",
                " \"strategicdatasink[.]globalstimul[.]in[.]net\"",
                " \"dynamicmarketflow[.]globalstimul[.]in[.]net\"",
                " \"universalreachpoint[.]globalstimul[.]in[.]net\""
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
            "iocCount": 8996,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 8996,
                "newInLastHour": 2,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "6fd95f4a2d9cec238cbe2e1756890381c4fae3cb",
                "ffa35590d5d7b074cf1a830180a90cca4473f6c9",
                "de82f1f7daacb7b5d91bee3382a3e0a36037ded7",
                "c96e7c1cbfdcff64e90557779edd3af8a1b6a6c4",
                "682a5d662e691f728b8279c889f9d70dafc8bbc4"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 48880,
            "activeSources": 8,
            "criticalAlerts": 31012,
            "activeCampaigns": 202
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 22042,
                "trend": "stable",
                "percentage": -1
            },
            {
                "category": "C2",
                "count": 8970,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 640,
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
                "count": 20968,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://110[.]38[.]206[.]127:52203/i",
                    "hxxp://115[.]51[.]103[.]246:48265/bin[.]sh",
                    "hxxp://110[.]39[.]228[.]78:42228/i"
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
                    "1[.]10[.]211[.]66",
                    "1[.]11[.]132[.]194"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1472,
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
                "count": 623,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "c96e7c1cbfdcff64e90557779edd3af8a1b6a6c4",
                    "682a5d662e691f728b8279c889f9d70dafc8bbc4",
                    "313aa465da1c887d1189e74be08d3e79306192c2"
                ]
            },
            {
                "name": "LummaStealer",
                "count": 536,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "6fd95f4a2d9cec238cbe2e1756890381c4fae3cb",
                    "e2293f74d8d72bde90bb0424038259a9e3126e1b",
                    "69101b8edfa5d5e2ead4512a6d71c84748b0c012"
                ]
            },
            {
                "name": " \"Mirai",
                "count": 531,
                "types": [
                    "hash"
                ],
                "sampleIndicators": [
                    " \"d2cd6b6132ede525b285790d91182842b48130571a81b6433c69e83da53396f5",
                    " \"d332187f2feeb876e82cd97f91fd68152fa320217da57cceb0cf6a0d06ed1150",
                    " \"6d75c493adb9843cff7d6ed4b689f1c12bc2d807d3a2da9581bd63e9f4df8fed"
                ]
            },
            {
                "name": " \"win.formbook\"",
                "count": 388,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"b8b1444ffb91963e527fddee6e57ff81131b49a2\"",
                    " \"8c440039311d8f01c2a626dbb4f55bff11042f2f610306771d367b36adaa1b90\"",
                    " \"9ddd0f781a7c3e4620eb2c9846a303ec\""
                ]
            },
            {
                "name": " \"n/a",
                "count": 376,
                "types": [
                    "hash"
                ],
                "sampleIndicators": [
                    " \"12892cd7736d2a6df9c936077ca2e3254cf7a6dde4fca96a1ad7145acb271229",
                    " \"387f989674b2c18e17a6d90c7ad026bb3d23f274b0f6c99ecec0b10627a1188a",
                    " \"1da6633a2c4ebb0324934d564077553f15343b3afbaaa5005657b77e280aa357"
                ]
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious URLs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": "SSH Attacks",
        "totalAttacksThisHour": 43318,
        "lastCalculated": "2026-02-23 11:09 IST"
    }
};
