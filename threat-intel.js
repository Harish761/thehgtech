// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-06-17T23:59:02.373985+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-06-17T23:59:02.041405+05:30",
    "lastUpdatedFormatted": "Jun 17, 2026 at 11:59 PM IST",
    "comparisonPeriod": "Jun 16 \u2013 Jun 17, 2026",
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
            "iocCount": 847,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 847,
                "newInLastHour": 86,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"c127ac46f61528c562a07acc04bd10c05757fac74d5688b793c3b9c90bca118e",
                " \"aecce5763bd7ebfe629b9c81ad37c820953d75bbae0ed65656331310dafad638",
                " \"00318220694b8e824b323dcf10b3adffedc9541f78f1bb3c60d82359e9ffe160",
                " \"1d6e842a4cf081f27638d09c8785520ccd00c7c91ce860220fe9f0bac816f306",
                " \"997a09b5cbbebd7e07fad4185d82ca28e8d259ffb93519f563313535e268ddf6"
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
                "1[.]12[.]229[.]231",
                "1[.]123[.]205[.]141",
                "1[.]14[.]250[.]106",
                "1[.]159[.]13[.]9",
                "1[.]164[.]107[.]152"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 6093,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 6093,
                "newInLastHour": 6093,
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
                "1[.]14[.]28[.]29"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 17199,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 17199,
                "newInLastHour": 17199,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxps://1ycpksxw[.]hugugmadani6[.]xyz/?ublib=64c9da85-2ede-4432-9eaa-83553b084903",
                "hxxp://110[.]39[.]255[.]227:59661/i",
                "hxxp://110[.]39[.]255[.]227:59661/bin[.]sh",
                "hxxp://110[.]36[.]80[.]173:56980/bin[.]sh",
                "hxxp://103[.]73[.]162[.]39/amd64"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 3954,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 3954,
                "newInLastHour": 3773,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"143[.]92[.]43[.]246:8087\"",
                " \"103[.]146[.]158[.]182:10443\"",
                " \"119[.]45[.]166[.]6:8084\"",
                " \"143[.]92[.]43[.]231:8087\"",
                " \"1ycpksxw[.]hugugmadani6[.]xyz\""
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
            "iocCount": 9990,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 9990,
                "newInLastHour": 14,
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
            "totalIndicators": 48929,
            "activeSources": 8,
            "criticalAlerts": 27999,
            "activeCampaigns": 251
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 18042,
                "trend": "stable",
                "percentage": 1
            },
            {
                "category": "C2",
                "count": 9957,
                "trend": "stable",
                "percentage": 1
            },
            {
                "category": "Botnet",
                "count": 3022,
                "trend": "stable",
                "percentage": -1
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
                "count": 17113,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://115[.]56[.]167[.]34:60753/i",
                    "hxxps://qgkzqew[.]azmoonzare[.]online/0c09af33-a857-4324-8242-a0b29d0c5940",
                    "hxxps://zyiirlrr[.]tarikhravannovin[.]shop/5d025454-aaa1-4694-8e70-d0c2546a6188"
                ]
            },
            {
                "name": "CINS Threat List",
                "count": 15000,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]123[.]205[.]141",
                    "1[.]159[.]13[.]9",
                    "1[.]164[.]107[.]152"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1708,
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
                "count": 1408,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"91[.]219[.]96[.]131:58908\"",
                    " \"185[.]92[.]190[.]217:8896\"",
                    " \"1[.]13[.]141[.]229:8480\""
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
                "count": 597,
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
        "fastestRisingThreat": "SSH Attacks",
        "totalAttacksThisHour": 42470,
        "lastCalculated": "2026-06-17 23:59 IST"
    }
};
