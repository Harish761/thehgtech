// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-05-28T21:51:41.624399+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-05-28T21:51:41.316063+05:30",
    "lastUpdatedFormatted": "May 28, 2026 at 09:51 PM IST",
    "comparisonPeriod": "May 27 \u2013 May 28, 2026",
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
                "hxxps://siqmnslxng[.]github[.]io/quickpalverify",
                "hxxps://matesanto[.]com/choiceandcontrol/choiceandcontrol[.]htm",
                "hxxp://www[.]gov-parkingqt[.]cyou/com/",
                "hxxps://bellverify-0d5803[.]webflow[.]io/",
                "hxxps://acn-awards[.]com/01KSK8ZWGJF0VDAGB43YXQ9SDE"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 1077,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 1077,
                "newInLastHour": 340,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"ca63429ce1111480dc2e35b5c12043e354e4f43eade12e9ef9493457ab91dc33",
                " \"36115e96dd16090fa669229c36d861ac7cff249e5562a3a272e74db1b7da33e7",
                " \"2232eb680881fa7bc2e9402cfedbbf416ff065426cb5309bb0c9ce8224632cd2",
                " \"e9634032df81334e9e960ab8b88ff05a0f7ec9c034dc012f816f09e23c18d41b",
                " \"536b3a548cd229eb50b654b38e9943e8f03e8d04bb22916a10684943885fafac"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1605,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1605,
                "newInLastHour": 6,
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
                "1[.]1[.]223[.]16",
                "1[.]12[.]229[.]231",
                "1[.]15[.]14[.]29",
                "1[.]162[.]111[.]181",
                "1[.]162[.]158[.]142"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 5750,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 5750,
                "newInLastHour": 5750,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]0[.]164[.]165",
                "1[.]12[.]217[.]80",
                "1[.]12[.]222[.]63",
                "1[.]192[.]191[.]10",
                "1[.]194[.]210[.]131"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 21478,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 21478,
                "newInLastHour": 21478,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://125[.]43[.]22[.]202:45035/bin[.]sh",
                "hxxps://jugha[.]webrevelem[.]hu/d4d9a24f-ecdf-453f-9f33-cd50a932f026",
                "hxxp://42[.]230[.]42[.]198:59921/Mozi[.]m",
                "hxxp://123[.]14[.]36[.]255:35853/i",
                "hxxps://pbwmk[.]wlwyb[.]com/e54bce3b-8738-4b9f-816a-3fa5c5e8184b"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 3423,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 3423,
                "newInLastHour": 3409,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"jugha[.]webrevelem[.]hu\"",
                " \"qbcao[.]webrevelem[.]hu\"",
                " \"hxxps://ali[.]bolaturbo88[.]top/\"",
                " \"ali[.]bolaturbo88[.]top\"",
                " \"coffeeandsuch[.]nl\""
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
            "iocCount": 9816,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 9816,
                "newInLastHour": 112,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "8e733b34e95a7b98ada40292b8d35e9040016e65",
                "4b19add85966daaef23fdea4c1527633a36a88ba",
                "9c5605a73a159de919523a8f844814d47e79a321",
                "1fe4d1c9b7106f25e606894cb6a64f69c4862b29",
                "5d7baf5503517e28f05467332d905eb8193e651b"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 52015,
            "activeSources": 8,
            "criticalAlerts": 31728,
            "activeCampaigns": 218
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 22043,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "C2",
                "count": 9685,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 2947,
                "trend": "stable",
                "percentage": -2
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
                "count": 21193,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxps://gitlab[.]com/Hoangdepzaivcl/ccc/-/raw/main/Loader[.]zip?ref_type=heads",
                    "hxxps://tempshare[.]su/files/FqxwNir05YR2",
                    "hxxps://gitlab[.]com/Hoangdepzaivcl/ccc/-/raw/main/dk[.]zip?ref_type=heads"
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
                    "1[.]12[.]229[.]231",
                    "1[.]15[.]14[.]29"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1600,
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
                "count": 1430,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"120[.]48[.]66[.]205:443\"",
                    " \"39[.]106[.]160[.]181:801\"",
                    " \"119[.]27[.]173[.]104:5555\""
                ]
            },
            {
                "name": "AsyncRAT",
                "count": 1413,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "6a998d33a87c7b36c2be68ed5c1c63929c0d6be4",
                    "167ddfd671ef30c31528515389cfdd11d9251558",
                    "b08643668d383e55dd2698e1bcc34571c8dfcc6a"
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
                    "9f0d33c1eaa7afd41009d0ec594c0a408d2df123",
                    "8a9c74049483847464da1ca3cf6f1f44e17a5f0f",
                    "c47bcbcbe0b1c474542c7fdc233ec68ffb4dcf14"
                ]
            },
            {
                "name": "LummaStealer",
                "count": 553,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "ab7f083d77dc2b1b71c0aec9a417e0a5a036a5f9",
                    "7ce02a4df627573696141e40970ef60e246f9f3f",
                    "f58ffe7484653b53cea539b23da25bc8eeeb2c05"
                ]
            },
            {
                "name": "Vidar",
                "count": 542,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "2de4fd0094bc96c8339f3b8c67985f8a7b89b84a",
                    "1b697067f699bc99bf6a48d003bfd9c9b289450d",
                    "e69e1ee3a1dd8500353a3d45dbc8ebd21c584863"
                ]
            },
            {
                "name": "OffLoader",
                "count": 388,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "7bba8eb1da43142534144a1aaf30b1be8a5ed134",
                    "3190ff29e738f3a056a97190ae61386c21eddefd",
                    "e9a78163613f7608cc9236ba4cb47ab2861c580e"
                ]
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious URLs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": "malware_download",
        "totalAttacksThisHour": 46400,
        "lastCalculated": "2026-05-28 21:51 IST"
    }
};
