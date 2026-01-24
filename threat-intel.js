// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-01-24T18:29:24.809166+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-01-24T18:29:24.577803+05:30",
    "lastUpdatedFormatted": "Jan 24, 2026 at 06:29 PM IST",
    "comparisonPeriod": "Jan 23 \u2013 Jan 24, 2026",
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
                "hxxp://uphull-loguun0[.]godaddysites[.]com/",
                "hxxp://www[.]mitta-ma-us-klogig-iin[.]godaddysites[.]com/",
                "hxxps://lesargousiers[.]ca/wp-admin/js/widgets/telek[.]html",
                "hxxp://www[.]roblox[.]com[.]kz/users/1832287491/profile/",
                "hxxps://pdf-salad-4eff[.]ehcswt3v[.]workers[.]dev/1805f07e-7b73-45c5-b75f-baa357437eac/"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 567,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 567,
                "newInLastHour": 26,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"b1c0c37d7dc32d7a551533ab1b7f6cd84a4130985d880561e11e17e366777199",
                " \"e913d614e7f8ade37dfd870596024efae10359a236aaaa0f01392cd635a9c2dd",
                " \"eefe0051050c3b4659220649fc9ca74c27d86c0afc3c9f99801e5b11c07146ab",
                " \"919b8229c1b4d60e1737899a8cf833644ef7b08e779e235790e4df722b2af42d",
                " \"191c0dcad939dd4d86162d8b2f58cf28fb3c3fc664f0a30bd1ec6197a72bc994"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1457,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1457,
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
                "1[.]0[.]170[.]118",
                "1[.]15[.]118[.]23",
                "1[.]15[.]14[.]29",
                "1[.]15[.]51[.]236",
                "1[.]15[.]95[.]172"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 6347,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 6347,
                "newInLastHour": 6347,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]1[.]178[.]75",
                "1[.]12[.]64[.]80",
                "1[.]15[.]95[.]172",
                "1[.]178[.]38[.]103",
                "1[.]203[.]97[.]79"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 20058,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 20058,
                "newInLastHour": 20058,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://113[.]231[.]78[.]25:34637/bin[.]sh",
                "hxxp://119[.]182[.]166[.]123:56411/i",
                "hxxp://130[.]12[.]180[.]43/files/maska/random[.]exe",
                "hxxps://cdn[.]jsdelivr[.]net/gh/paper-skydiver-drv8/crispy-machine-band3/projz",
                "hxxp://60[.]23[.]232[.]105:35984/i"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 861,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 861,
                "newInLastHour": 699,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"www[.]micrcscft[.]cyou\"",
                " \"hxxp://94[.]26[.]90[.]74/537e2870ea5a48dd[.]php\"",
                " \"ggjvk3v5bzopisqkf7kd5el2j40gdgcu[.]lambda-url[.]ap-southeast-1[.]on[.]aws\"",
                " \"hxxps://cdn[.]jsdelivr[.]net/gh/paper-skydiver-drv8/crispy-machine-band3/projz\"",
                " \"15[.]157[.]72[.]146:1309\""
            ]
        },
        "Feodo Tracker": {
            "description": "Botnet C2 server IPs from Feodo Tracker. Tracks Dridex, Emotet, TrickBot, QakBot, and BazarLoader.",
            "website": "https://feodotracker.abuse.ch/",
            "updateFrequency": "Hourly",
            "iocCount": 6,
            "iocDataUrl": "https://thehgtech.com/ioc-data/feodo-tracker.json",
            "stats": {
                "total": 6,
                "newInLastHour": 6,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "137[.]184[.]9[.]29",
                "162[.]243[.]103[.]246",
                "167[.]86[.]75[.]145",
                "172[.]232[.]59[.]14",
                "34[.]204[.]119[.]63"
            ]
        },
        "SSL Blacklist": {
            "description": "Malicious SSL certificates used by botnet C2 servers. Helps detect encrypted malware communications.",
            "website": "https://sslbl.abuse.ch/",
            "updateFrequency": "Daily",
            "iocCount": 8814,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 8814,
                "newInLastHour": 8523,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "8326aaafe66ed1eea591add8d79944837a05fed0",
                "a62fef1ec215606dbf0d3774ebe3f2a6ade92b38",
                "766d70a8be35c01b55e056b94d95f091b9843c14",
                "d88300b35fc29445f29fa339d3b842305c562256",
                "b0d85051fda8ae726a60c9ed332ee7cd8ffeab80"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 38600,
            "activeSources": 8,
            "criticalAlerts": 20939,
            "activeCampaigns": 115
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 20642,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 623,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Phishing",
                "count": 300,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "C2",
                "count": 297,
                "trend": "down",
                "percentage": -96
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
                "count": 19993,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://42[.]239[.]235[.]131:39420/i",
                    "hxxp://60[.]19[.]217[.]121:40010/bin[.]sh",
                    "hxxp://182[.]116[.]122[.]204:37776/bin[.]sh"
                ]
            },
            {
                "name": "CINS Threat List",
                "count": 15000,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]0[.]170[.]118",
                    "1[.]15[.]118[.]23",
                    "1[.]15[.]95[.]172"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1457,
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
                "name": "Generic Phishing",
                "count": 300,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://tolk[.]shorturl[.]lk/xhdsuR",
                    "hxxps://dub[.]sh/roblox[.]com/users/12905270/profile",
                    "hxxps://90466[.]xyz/"
                ]
            },
            {
                "name": " \"Mirai",
                "count": 267,
                "types": [
                    "hash"
                ],
                "sampleIndicators": [
                    " \"7d40bb1481289d073f5c8e3cbf661c98917b84b0751eeef078dec81dc5004648",
                    " \"d644216430162eedfd4802db751eff4f17377670b5c47228004dadd71897597c",
                    " \"627f0d07e47ff6d350f16cef6de0e3df821a99901465b8ea74825cd75340eed7"
                ]
            },
            {
                "name": " \"win.meterpreter\"",
                "count": 211,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"3[.]107[.]80[.]92:46143\"",
                    " \"3[.]107[.]80[.]92:8443\"",
                    " \"3[.]107[.]80[.]92:35693\""
                ]
            },
            {
                "name": " \"n/a",
                "count": 136,
                "types": [
                    "hash"
                ],
                "sampleIndicators": [
                    " \"6473ff099675cd5a7468f1f4bff1d22a3769f6a6d757a91bc87442b193b57b6b",
                    " \"b75acb8b2c20031009999077ccc5c21cc2e976356f3608d20e111eef7b75e1f4",
                    " \"5bb4c1199771c0288709922dd8f7c7469419ce7820ce54f90eaf21582d5b0658"
                ]
            },
            {
                "name": " \"unknown\"",
                "count": 130,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"102[.]117[.]162[.]141:7443\"",
                    " \"163[.]172[.]232[.]21:7443\"",
                    " \"wxqdcakvuv[.]com\""
                ]
            },
            {
                "name": "Vidar",
                "count": 109,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "a62fef1ec215606dbf0d3774ebe3f2a6ade92b38",
                    "766d70a8be35c01b55e056b94d95f091b9843c14",
                    "d88300b35fc29445f29fa339d3b842305c562256"
                ]
            },
            {
                "name": " \"win.vidar\"",
                "count": 74,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"95[.]217[.]242[.]159:443\"",
                    " \"65[.]109[.]241[.]62:443\"",
                    " \"cbb[.]lidiia[.]com[.]ua\""
                ]
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious IPs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": "AsyncRAT",
        "totalAttacksThisHour": 50959,
        "lastCalculated": "2026-01-24 18:29 IST"
    }
};
