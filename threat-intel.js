// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-06-18T03:39:00.112106+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-06-18T03:38:59.798445+05:30",
    "lastUpdatedFormatted": "Jun 18, 2026 at 03:38 AM IST",
    "comparisonPeriod": "Jun 17 \u2013 Jun 18, 2026",
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
                "hxxps://hklogin[.]uat[.]mizuhoscfglobal[.]com/oauth2/authorize?response_type=code&client_id=bca4f495-a205-4cb4-8b0a-07f4d88a7584&scope=openid%20email%20profile&state=CeEiDbj5pJ71cSO2lzi7pvcGOXH7mmevbD7DFNqgeXo%3D&redirect_uri=hxxps://hk[.]uat[.]mizuhoscfglobal[.]com/scf/login/oauth2/code/fusionauth&nonce=-f1ca21YpsZjdNfCQ4Svmqe-0XxilP2uxOGLJ32BGs8",
                "hxxps://hk[.]uat[.]mizuhoscfglobal[.]com/scf/login/oauth2/code/fusionauth",
                "hxxps://docment[.]e-docssign[.]net/education_redirect_second?5372b28b-1718-482e-afd8-5ae0571cba68",
                "hxxps://docment[.]e-docssign[.]net/a6f4ab/5372b28b-1718-482e-afd8-5ae0571cba68",
                "hxxps://alexgalho[.]com[.]br/anodur"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 754,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 754,
                "newInLastHour": 16,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"3f67caa7355ed9411501c3c6669b0fbfac45996a2560f0b18e62555789246ed7",
                " \"c937c08d7148f0f5a4352b9a711e0b1410276dd7ca2627c8b8e19a90f8aee780",
                " \"b3606e2899aa12dd989c9be0b4b6b85ea6e0b53656ff11c4fd7b5791e9bb94de",
                " \"f8551f683ac49cda1666e623964a37ff3ea18f723ce452a55096029086ccdaa0",
                " \"1445fc404539ff262b568562c083ec11ff1c06b5c4fe7ee300c043c6bba60b7f"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1708,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1708,
                "newInLastHour": 10,
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
                "1[.]10[.]185[.]224",
                "1[.]12[.]229[.]231",
                "1[.]15[.]14[.]29",
                "1[.]15[.]35[.]79",
                "1[.]15[.]82[.]219"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 6055,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 6055,
                "newInLastHour": 6055,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]116[.]110[.]170",
                "1[.]117[.]150[.]44",
                "1[.]117[.]229[.]57",
                "1[.]117[.]47[.]94",
                "1[.]162[.]223[.]232"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 17237,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 17237,
                "newInLastHour": 17237,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://80[.]67[.]33[.]209:48796/i",
                "hxxp://110[.]39[.]226[.]207:35350/i",
                "hxxp://123[.]11[.]75[.]63:35753/i",
                "hxxp://175[.]165[.]83[.]36:50063/i",
                "hxxp://123[.]11[.]75[.]63:35753/bin[.]sh"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 3927,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 3927,
                "newInLastHour": 3683,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"hxxps://get[.]rzrrent[.]com/\"",
                " \"get[.]rzrrent[.]com\"",
                " \"hxxps://get[.]hanyasm188[.]top/\"",
                " \"get[.]hanyasm188[.]top\"",
                " \"h0cbv92p[.]golfbetkade[.]com\""
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
            "iocCount": 9993,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 9993,
                "newInLastHour": 6,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "487963ef755a226940a6b402895cc6cfe8ed2594",
                "010a6503f80cc4ae9d2cf4bc58b96754f8979a2b",
                "aa5491d3ac54bf6004f7b74c72ba71a18367773a",
                "27444283cb0b64a2a46f818afffc657a4fd4817b",
                "653a0e0eafd93c71a0363a99f55c8537a23843dc"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 48959,
            "activeSources": 8,
            "criticalAlerts": 28022,
            "activeCampaigns": 252
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 18057,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "C2",
                "count": 9965,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 3008,
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
                "percentage": 98
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
                "count": 17221,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://138[.]204[.]196[.]254:53747/i",
                    "hxxps://h2vkq89b[.]angizeshfarahani[.]store/?ublib=39d78721-7bb0-4538-ac2e-93420490df7e",
                    "hxxps://bbztdp6a[.]akhbarsport[.]info/?ublib=74aac300-d1f2-489e-b4f0-b0d37c75b09a"
                ]
            },
            {
                "name": "CINS Threat List",
                "count": 15000,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]10[.]185[.]224",
                    "1[.]12[.]229[.]231",
                    "1[.]15[.]14[.]29"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1698,
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
                "count": 1416,
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
                "name": " \"win.cobalt_strike\"",
                "count": 1414,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"221[.]132[.]29[.]137:81\"",
                    " \"119[.]45[.]166[.]6:9875\"",
                    " \"1[.]92[.]101[.]103:8006\""
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
                "count": 688,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "27e3cb5b0043884c7ebc0691e2e73ef3b95339ac",
                    "ae590545961e96de860ea7434c0e8c69b924de6f",
                    "28c3106cd1cec9a5dfec7f2ba3b0dd7e70784429"
                ]
            },
            {
                "name": "Vidar",
                "count": 601,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "59f0554dda32cbf5b5b5b08fe508480d81172f2d",
                    "3c94f5e78cc03430f78033b240e6c065c5937c6a",
                    "54fdaf6635064f8d7e6f84b1118eb60edcc697e8"
                ]
            },
            {
                "name": "LummaStealer",
                "count": 556,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "2beac2ee8b2fe7625d4de9f5381d37f200965f91",
                    "a46841d623a191366909b24375bee0eceea23bbe",
                    "272e76f605bec1da1ea719df8dc0e7269de7d44e"
                ]
            },
            {
                "name": "OffLoader",
                "count": 427,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "b7fca0fbc8179ef52e3239907257dcd0315cb2f1",
                    "8f15e3e07c691ae493b4059222638003e0bf0a9b",
                    "031af28814511239c0172b71c2c5092660676632"
                ]
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious URLs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": "malware_download",
        "totalAttacksThisHour": 42312,
        "lastCalculated": "2026-06-18 03:38 IST"
    }
};
