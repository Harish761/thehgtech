// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-07-31T23:18:59.270307+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-07-31T23:18:59.110226+05:30",
    "lastUpdatedFormatted": "Jul 31, 2026 at 11:18 PM IST",
    "comparisonPeriod": "Jul 30 \u2013 Jul 31, 2026",
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
                "hxxp://www[.]99nt[.]site/",
                "hxxps://451238[.]help/dpd/pl",
                "hxxp://tcy6-1n0-emeco-qbv7ql-qmsr5f[.]pages[.]dev/",
                "hxxp://www[.]fotosdemorrodochapeuba[.]com[.]br/enclosed/confidentiality[.]html",
                "hxxps://stunning-kulfi-78ebef[.]netlify[.]app/"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 721,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 721,
                "newInLastHour": 32,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"3384bfcae55f83d869976810b1abdd3366cb4f9fb7fb4ade58966669907a1c4b",
                " \"264a6ef8a8853d0e7dac18b0d4e043ab7579b4cc885093128012b34339cee194",
                " \"8b110d1c3070c80bd01d5a94fc80ddd37bfdf6ebd6a70105d8aed0b49166125a",
                " \"a33772ebe129636a5eeaabc018c34cd3c92306d3f65cbc8d5a3a2d02110c0ce1",
                " \"fef905b0e0bae7b6966b60cad1b8e4c98d22d6133d0c37a91085ee7ab4dd03b9"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1665,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1665,
                "newInLastHour": 49,
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
                "1[.]119[.]194[.]226",
                "1[.]120[.]13[.]5",
                "1[.]12[.]229[.]231",
                "1[.]140[.]3[.]11",
                "1[.]14[.]206[.]120"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 4426,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 4426,
                "newInLastHour": 4426,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]0[.]164[.]165",
                "1[.]12[.]37[.]6",
                "1[.]15[.]103[.]109",
                "1[.]162[.]18[.]135",
                "1[.]192[.]61[.]70"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 15595,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 15595,
                "newInLastHour": 15595,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://91[.]92[.]242[.]236/files-129312398/files/file_9e0cffe620fa84bb[.]exe",
                "hxxps://temp[.]sh/qvMei/server",
                "hxxp://46[.]236[.]65[.]141:54492/bin[.]sh",
                "hxxps://iptoasn[.]com/data/ip2asn-v4[.]tsv[.]gz",
                "hxxp://217[.]60[.]195[.]187/cats[.]sh"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 6038,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 6038,
                "newInLastHour": 5553,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"47[.]107[.]224[.]89:8443\"",
                " \"5[.]61[.]209[.]44:443\"",
                " \"104[.]248[.]189[.]195:443\"",
                " \"143[.]198[.]194[.]207:443\"",
                " \"201[.]79[.]11[.]32:443\""
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
            "iocCount": 10267,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 10267,
                "newInLastHour": 8590,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "014d51d79c5a5c80042abedb35231581ff07c2e7",
                "ed0d4b2a9c090b6af6c99fd5b899831da206d835",
                "7767913e33fac1ed9c448460267ca0e6cbe627b4",
                "fe50e363165e3e8d789daf4dc378f50a70f35a8a",
                "16fbb45457a2d8e67c556db46e051893917e2104"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 40820,
            "activeSources": 8,
            "criticalAlerts": 17962,
            "activeCampaigns": 175
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 16274,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 3589,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "C2",
                "count": 1688,
                "trend": "down",
                "percentage": -83
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
                "count": 15552,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://46[.]236[.]65[.]141:54492/i",
                    "hxxp://110[.]38[.]201[.]196:56049/bin[.]sh",
                    "hxxp://110[.]37[.]7[.]53:49904/bin[.]sh"
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
                    "1[.]12[.]229[.]231",
                    "1[.]140[.]3[.]11"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1616,
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
                "name": " \"js.iclickfix\"",
                "count": 1447,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"dth[.]travel\"",
                    " \"ecosweetbaby[.]es\"",
                    " \"cooperacionescolar[.]org\""
                ]
            },
            {
                "name": " \"win.cobalt_strike\"",
                "count": 1362,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"106[.]14[.]243[.]66:7777\"",
                    " \"106[.]14[.]243[.]66:24444\"",
                    " \"106[.]14[.]243[.]66:22\""
                ]
            },
            {
                "name": "Vidar",
                "count": 455,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "014d51d79c5a5c80042abedb35231581ff07c2e7",
                    "ed0d4b2a9c090b6af6c99fd5b899831da206d835",
                    "7767913e33fac1ed9c448460267ca0e6cbe627b4"
                ]
            },
            {
                "name": " \"js.clearfake\"",
                "count": 339,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"palfxxt[.]encompassrealestateschool[.]com\"",
                    " \"encompassrealestateschool[.]com\"",
                    " \"akhkdv[.]ecopro-edu[.]com\""
                ]
            },
            {
                "name": " \"unknown\"",
                "count": 332,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"102[.]117[.]167[.]134:7443\"",
                    " \"rdwebpentesting[.]info\"",
                    " \"hxxps://qyvbm[.]fun/api/command\""
                ]
            },
            {
                "name": " \"win.asyncrat\"",
                "count": 321,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"958e8f42467049f05c81b368bb71ff465642164a\"",
                    " \"962f8ccbacdfda078a35a1eb6dbcc11b\"",
                    " \"f3d48d753ee43f069763fcf06a8c9e3536dfed8b\""
                ]
            },
            {
                "name": "Generic Phishing",
                "count": 296,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://www[.]99nt[.]site/",
                    "hxxps://451238[.]help/dpd/pl",
                    "hxxp://tcy6-1n0-emeco-qbv7ql-qmsr5f[.]pages[.]dev/"
                ]
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious URLs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": "AsyncRAT",
        "totalAttacksThisHour": 49550,
        "lastCalculated": "2026-07-31 23:18 IST"
    }
};
