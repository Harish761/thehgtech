// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2025-12-27T00:22:21.674416+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2025-12-27T00:22:21.411959+05:30",
    "lastUpdatedFormatted": "Dec 27, 2025 at 12:22 AM IST",
    "comparisonPeriod": "Dec 26 \u2013 Dec 27, 2025",
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
                "hxxps://clickg2[.]com/lander/bouygues-fr--2-euro-/index[.]html",
                "hxxps://undian-shopee194[.]blogspot[.]com/",
                "hxxps://roblox[.]com[.]ge/communities/3889502855/",
                "hxxp://steamcounmunity[.]com/mirage",
                "hxxps://roblox[.]com[.]py/communities/4353415872/"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 1011,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 1011,
                "newInLastHour": 108,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"5e112c695088bcf4aa2b573146555cd2d00bca46913dcd3bfd38ec4e94cbbc99",
                " \"6b2b7a39f36b725b0959753444db43269aa1590ae3f5b55d8fff9eda8ec27016",
                " \"9632cbbe2623111533bb9228b0bda0225721ab8378e1e6327173ff5d1dfc4082",
                " \"f602961b69ff4be169735423d69bf956d034c24adf45fe63091e55ec0a7b9d95",
                " \"1fa568c8d822c1e0fe092714fcee54dd67991c169c18f113dea284ffcf44e8b4"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1474,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1474,
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
                "1[.]15[.]118[.]23",
                "1[.]15[.]149[.]209",
                "1[.]157[.]99[.]66",
                "1[.]171[.]20[.]54",
                "1[.]171[.]34[.]122"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 5088,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 5088,
                "newInLastHour": 5088,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]14[.]95[.]153",
                "1[.]171[.]20[.]54",
                "1[.]214[.]197[.]163",
                "1[.]220[.]64[.]218",
                "1[.]221[.]66[.]66"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 27255,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 27255,
                "newInLastHour": 27255,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://110[.]36[.]16[.]78:42534/bin[.]sh",
                "hxxp://182[.]126[.]123[.]57:55370/i",
                "hxxp://182[.]121[.]251[.]42:40547/i",
                "hxxp://59[.]182[.]244[.]112:35741/i",
                "hxxp://110[.]38[.]197[.]49:44176/bin[.]sh"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 908,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 908,
                "newInLastHour": 758,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"y5oo3pq2[.]amberweld[.]ru\"",
                " \"61[.]143[.]184[.]9:19248\"",
                " \"45[.]144[.]66[.]181:587\"",
                " \"166[.]117[.]154[.]254:5140\"",
                " \"206[.]119[.]191[.]107:1699\""
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
                "162[.]243[.]103[.]246",
                "167[.]86[.]75[.]145",
                "51[.]210[.]96[.]48"
            ]
        },
        "SSL Blacklist": {
            "description": "Malicious SSL certificates used by botnet C2 servers. Helps detect encrypted malware communications.",
            "website": "https://sslbl.abuse.ch/",
            "updateFrequency": "Daily",
            "iocCount": 8690,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 8690,
                "newInLastHour": 8523,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "77ccc60769c2fcec1b720094cdaa0ff49e37227d",
                "8e22e996d0215c4e2cb73e5621cb9de904b861cf",
                "8b31dc2519edfe1fdac0ab790b3eae4bcb7ac4b3",
                "5afb5e6087c16b75b0bcf2a8aa2f1a530d333563",
                "46d2b4f1f4f2badc2f587f68386945a0c835c4ba"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 46039,
            "activeSources": 8,
            "criticalAlerts": 28347,
            "activeCampaigns": 95
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 28176,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 348,
                "trend": "stable",
                "percentage": -3
            },
            {
                "category": "Phishing",
                "count": 301,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "C2",
                "count": 171,
                "trend": "down",
                "percentage": -98
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
                "count": 27175,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://123[.]11[.]201[.]209:48571/bin[.]sh",
                    "hxxp://110[.]37[.]8[.]214:37812/i",
                    "hxxp://116[.]138[.]114[.]21:41962/bin[.]sh"
                ]
            },
            {
                "name": "CINS Threat List",
                "count": 15000,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]15[.]118[.]23",
                    "1[.]15[.]149[.]209",
                    "1[.]157[.]99[.]66"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1474,
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
                "count": 558,
                "types": [
                    "hash"
                ],
                "sampleIndicators": [
                    " \"8b44e2b3fa8a821297cd5c7d1e975880cddc7ca52ed631b4fd649f97260585a5",
                    " \"6056d173c5be9da191c767674b2e76bc1175dce0c664fddcb251f8536220095c",
                    " \"9f252d7cbfd8b9376ecbc3364b02323838bdb878135e9a116e51d32f7fa07399"
                ]
            },
            {
                "name": " \"js.clearfake\"",
                "count": 414,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"4jcqok7f[.]ed2kophtha1[.]ru\"",
                    " \"z5q5sgxv[.]ed2kophtha1[.]ru\"",
                    " \"uqjahm83[.]g0dnau8hty[.]ru\""
                ]
            },
            {
                "name": "Generic Phishing",
                "count": 296,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxps://clickg2[.]com/lander/bouygues-fr--2-euro-/index[.]html",
                    "hxxps://undian-shopee194[.]blogspot[.]com/",
                    "hxxps://roblox[.]com[.]ge/communities/3889502855/"
                ]
            },
            {
                "name": " \"n/a",
                "count": 257,
                "types": [
                    "hash"
                ],
                "sampleIndicators": [
                    " \"07fe5502ae5d0f19fa2c07e5dabd13d6447e0a580b790cd373ab368237a30037",
                    " \"4f5104aa63e972799aa097c7fb18e8e1364318a4bf6fbeed906563db440407d6",
                    " \"28e2f585285a6090985d0f2e997aa47536235180c35dbcaceb21c30873ca6618"
                ]
            },
            {
                "name": " \"unknown\"",
                "count": 96,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"64[.]32[.]48[.]49:443\"",
                    " \"18[.]119[.]94[.]147:80\"",
                    " \"18[.]119[.]94[.]147:443\""
                ]
            },
            {
                "name": "Vidar",
                "count": 72,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "77ccc60769c2fcec1b720094cdaa0ff49e37227d",
                    "46d2b4f1f4f2badc2f587f68386945a0c835c4ba",
                    "156578689662f3a0d71a36352f92c42f87a8eb90"
                ]
            },
            {
                "name": " \"win.asyncrat\"",
                "count": 51,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"45[.]156[.]87[.]134:7777\"",
                    " \"45[.]156[.]87[.]134:6006\"",
                    " \"bdkb0[.]ru[.]com\""
                ]
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious URLs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": "AsyncRAT",
        "totalAttacksThisHour": 57036,
        "lastCalculated": "2025-12-27 00:22 IST"
    }
};
