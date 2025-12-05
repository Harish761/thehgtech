// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2025-12-05T10:08:34.801095+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2025-12-05T10:08:34.508290+05:30",
    "lastUpdatedFormatted": "Dec 05, 2025 at 10:08 AM IST",
    "comparisonPeriod": "Dec 04 \u2013 Dec 05, 2025",
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
                "hxxps://roblox[.]com[.]ge/games/94641939467366/Fun-combat-game?privateServerLinkCode=91006313887146611551343620283535",
                "hxxp://piyushsingh24[.]github[.]io/spotify-clone",
                "hxxps://71pms7116aa5mketapp[.]peou[.]de/71PMs/Aa5MKEtAPp/6MUwbNfsyIzYe2bbfMTJ4D9qgen/71PMs/Aa5MKEtAPp/Finance/7116/anaheim[.]net/6MUwbNfsyIzYe2bbfMTJ",
                "hxxps://rbx-url[.]com/cH6-h99q",
                "hxxps://www[.]apprewards[.]xyz/"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 1241,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 1241,
                "newInLastHour": 23,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"9e4b906cc1513c2c1da331ea25881ead2ba68599a9429f5af619b97816eeebfc",
                " \"7fef427b27a7c8f894418bca3de3a29d75d0f992cb8d3068d94bc18aa1f0f34f",
                " \"33dfbe0bb1570713a9590a1765aca7a5524efafafcce529476f17df090b817c5",
                " \"4d3b8bfce2a9a553d00af15c4880998ccb4c7062776a4ac6522d92b235e7ef21",
                " \"8f20020d5b0669c889435750b00452672cb17fc2a87225a5341040bc05afc008"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1495,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1495,
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
                "1[.]1[.]176[.]58",
                "1[.]116[.]180[.]98",
                "1[.]117[.]17[.]128",
                "1[.]14[.]3[.]240",
                "1[.]15[.]20[.]205"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 5499,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 5499,
                "newInLastHour": 5499,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]116[.]123[.]48",
                "1[.]161[.]58[.]137",
                "1[.]168[.]241[.]144",
                "1[.]214[.]197[.]163",
                "1[.]214[.]42[.]172"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 29276,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 29276,
                "newInLastHour": 29276,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://110[.]37[.]67[.]117:58639/i",
                "hxxp://82[.]117[.]87[.]188/hiddenbin/boatnet[.]ppc",
                "hxxp://82[.]117[.]87[.]188/hiddenbin/boatnet[.]sh4",
                "hxxp://82[.]117[.]87[.]188/hiddenbin/boatnet[.]arm6",
                "hxxp://82[.]117[.]87[.]188/hiddenbin/boatnet[.]m68k"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 1193,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 1193,
                "newInLastHour": 958,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"sun[.]softcrest[.]ru\"",
                " \"flame[.]softcrest[.]ru\"",
                " \"23[.]132[.]164[.]56:6538\"",
                " \"drv[.]n1ghtstone[.]ru\"",
                " \"103[.]177[.]47[.]79:3790\""
            ]
        },
        "Feodo Tracker": {
            "description": "Botnet C2 server IPs from Feodo Tracker. Tracks Dridex, Emotet, TrickBot, QakBot, and BazarLoader.",
            "website": "https://feodotracker.abuse.ch/",
            "updateFrequency": "Hourly",
            "iocCount": 4,
            "iocDataUrl": "https://thehgtech.com/ioc-data/feodo-tracker.json",
            "stats": {
                "total": 4,
                "newInLastHour": 4,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "15[.]204[.]219[.]215",
                "152[.]89[.]239[.]34",
                "162[.]243[.]103[.]246",
                "51[.]210[.]96[.]48"
            ]
        },
        "SSL Blacklist": {
            "description": "Malicious SSL certificates used by botnet C2 servers. Helps detect encrypted malware communications.",
            "website": "https://sslbl.abuse.ch/",
            "updateFrequency": "Daily",
            "iocCount": 8565,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 8565,
                "newInLastHour": 8522,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "999bb8821f120870be5aa56ec743627cf67ffd17",
                "dc0113fb2c5c3bcd8dcad83080861eaa9e9b4156",
                "0831c75f233d7a6b5069670d3b862817ea50b533",
                "463d2faa6b38a16140bc5dc7cfbffc6c5d30761c",
                "2f5dc800ba6e420a1019dc0fd14226f205ed0835"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 48696,
            "activeSources": 8,
            "criticalAlerts": 30486,
            "activeCampaigns": 140
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 30439,
                "trend": "stable",
                "percentage": -2
            },
            {
                "category": "Botnet",
                "count": 563,
                "trend": "stable",
                "percentage": 2
            },
            {
                "category": "Phishing",
                "count": 300,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "C2",
                "count": 47,
                "trend": "down",
                "percentage": -99
            }
        ],
        "targetedSectors": [
            {
                "name": "General",
                "percentage": 98
            },
            {
                "name": "Tech",
                "percentage": 1
            },
            {
                "name": "Finance",
                "percentage": 0
            }
        ],
        "campaigns": [
            {
                "name": "malware_download",
                "count": 29204,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxps://trail[.]softr1ver[.]ru/cs02em1y",
                    "hxxps://trail[.]softr1ver[.]ru/iaw8j2m8",
                    "hxxps://light[.]softr1ver[.]ru/1hn18b47"
                ]
            },
            {
                "name": "CINS Threat List",
                "count": 15000,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]1[.]176[.]58",
                    "1[.]116[.]180[.]98",
                    "1[.]117[.]17[.]128"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1495,
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
                "name": " \"Mirai",
                "count": 607,
                "types": [
                    "hash"
                ],
                "sampleIndicators": [
                    " \"5cd9b9001b584dd843678fbd8c52f1d341bfaeb6dd498c7754b3f9e33b304bff",
                    " \"7ab8e6cb80957b3a7b4da9624c610481a565f122f27991e7c60474eb6d54fb71",
                    " \"2ae3b572b98f90359c36553cd7f58a25951f14f076d66a0a10caee3e40377129"
                ]
            },
            {
                "name": " \"js.clearfake\"",
                "count": 325,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"trail[.]softr1ver[.]ru\"",
                    " \"light[.]softr1ver[.]ru\"",
                    " \"house[.]softr1ver[.]ru\""
                ]
            },
            {
                "name": "Generic Phishing",
                "count": 294,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxps://roblox[.]com[.]ge/games/94641939467366/Fun-combat-game?privateServerLinkCode=91006313887146611551343620283535",
                    "hxxp://piyushsingh24[.]github[.]io/spotify-clone",
                    "hxxps://71pms7116aa5mketapp[.]peou[.]de/71PMs/Aa5MKEtAPp/6MUwbNfsyIzYe2bbfMTJ4D9qgen/71PMs/Aa5MKEtAPp/Finance/7116/anaheim[.]net/6MUwbNfsyIzYe2bbfMTJ"
                ]
            },
            {
                "name": " \"n/a",
                "count": 218,
                "types": [
                    "hash"
                ],
                "sampleIndicators": [
                    " \"6daa8193deb504ce4d305d41de870a0874039c77624f2da9bf3ff2c359a88780",
                    " \"4dec401b7d01d16b35bb30a691ba7325fea19d25509a954d86c7e635272aa50e",
                    " \"c78e1581513098a3cf064f3daf13198e6890433dc337c3765c9dd81065affeb5"
                ]
            },
            {
                "name": " \"unknown\"",
                "count": 134,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"212[.]11[.]64[.]108:5555\"",
                    " \"151[.]243[.]113[.]71:443\"",
                    " \"jjjgaasda[.]live\""
                ]
            },
            {
                "name": " \"win.cobalt_strike\"",
                "count": 73,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"hxxp://193[.]37[.]69[.]43:96/ZPqB\"",
                    " \"193[.]37[.]69[.]43:96\"",
                    " \"7p1e0901tm70n[.]cfc-execute[.]bj[.]baidubce[.]com\""
                ]
            },
            {
                "name": " \"win.vidar\"",
                "count": 68,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"46[.]62[.]240[.]214:443\"",
                    " \"d4d[.]automanpk[.]com\"",
                    " \"d4d[.]aqarhoosh[.]com\""
                ]
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious URLs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": "AsyncRAT",
        "totalAttacksThisHour": 59582,
        "lastCalculated": "2025-12-05 10:08 IST"
    }
};
