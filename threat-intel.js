// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-06-23T01:09:17.073610+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-06-23T01:09:16.782961+05:30",
    "lastUpdatedFormatted": "Jun 23, 2026 at 01:09 AM IST",
    "comparisonPeriod": "Jun 22 \u2013 Jun 23, 2026",
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
                "hxxp://www[.]web-oulugames[.]com/",
                "hxxps://www[.]dbsgate[.]bnxway[.]us/connx/register[.]php",
                "hxxps://xmlf-ag9n-th11[.]mgeorgatos-netw1-com-s-account[.]workers[.]dev/73603076837c4d77",
                "hxxps://www[.]vailivre[.]com/",
                "hxxps://free[.]flowrodovias[.]site/"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 775,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 775,
                "newInLastHour": 207,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"edad96e122dfbdeb2c71cf52330085a3deeb04586062474c119a2ac2bab5ab47",
                " \"5ab8e924ad56b7d5ece3e62d70fcf8aaf83662608a1d9c3231ab26a426b73c3c",
                " \"c2a48c158f3e73ff2d06ccfc31544a8286b795ffce958eca30d9a3a0c93c257e",
                " \"865983b972f9f13e6f555a15aa1831e936e347691b6704fbec8a7c77296f4d98",
                " \"3e6661d8c7c86d181f5f5176b56e241d2de813e8bb53bc66e37479cbe2959327"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1663,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1663,
                "newInLastHour": 2,
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
                "1[.]15[.]51[.]236",
                "1[.]171[.]7[.]135",
                "1[.]176[.]118[.]246",
                "1[.]177[.]162[.]2"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 4841,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 4841,
                "newInLastHour": 4841,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]14[.]28[.]29",
                "1[.]192[.]61[.]19",
                "1[.]214[.]214[.]114",
                "1[.]222[.]42[.]237",
                "1[.]234[.]27[.]159"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 22647,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 22647,
                "newInLastHour": 22647,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://42[.]230[.]54[.]217:38030/bin[.]sh",
                "hxxp://42[.]237[.]18[.]21:59693/i",
                "hxxp://110[.]37[.]13[.]16:45101/i",
                "hxxp://61[.]53[.]83[.]190:44962/bin[.]sh",
                "hxxp://200[.]115[.]102[.]246:37935/i"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 4772,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 4772,
                "newInLastHour": 4514,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"one1xbetfa[.]com\"",
                " \"megaparivip[.]com\"",
                " \"hxxps://git[.]hitamsm188[.]top/\"",
                " \"git[.]utvrent[.]com\"",
                " \"hxxps://git[.]utvrent[.]com/\""
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
            "iocCount": 9961,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 9961,
                "newInLastHour": 16,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "c6693bd68a3017163e4af03742ea381bed99b122",
                "27c7759091f1604717e7ab8d9238a6c507af309d",
                "af9b4d589c6b08b420f41d0a13a2571f45d126a2",
                "8ccf76e13a2b6ba73ffa36fa1b73f6bc6fd06f56",
                "f453b4a0cf623b8f2659c584f583ea90d5f8d432"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 49493,
            "activeSources": 8,
            "criticalAlerts": 28041,
            "activeCampaigns": 240
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 18056,
                "trend": "stable",
                "percentage": 1
            },
            {
                "category": "C2",
                "count": 9985,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 3425,
                "trend": "stable",
                "percentage": 6
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
                "count": 17388,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://182[.]127[.]153[.]231:52074/bin[.]sh",
                    "hxxp://175[.]173[.]78[.]147:45925/i",
                    "hxxp://123[.]129[.]10[.]96:45552/i"
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
                    "1[.]12[.]229[.]231",
                    "1[.]171[.]7[.]135"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1691,
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
                "count": 1424,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"204[.]194[.]54[.]198:53\"",
                    " \"ns2[.]msgkg[.]xyz\"",
                    " \"ns1[.]msgkg[.]xyz\""
                ]
            },
            {
                "name": "AsyncRAT",
                "count": 1417,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "49aa56f946089804e2bc8ae77a7b2fbaa5860e50",
                    "6a998d33a87c7b36c2be68ed5c1c63929c0d6be4",
                    "167ddfd671ef30c31528515389cfdd11d9251558"
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
                "count": 609,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "a75653fb0d720b53ce06b75400144f7348f56859",
                    "74c412ddb5e5ff23d519ed7f6c71d99fb8ffbaef",
                    "d4ea5c5ed890d658f9ef23555e312c694793d831"
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
        "totalAttacksThisHour": 47532,
        "lastCalculated": "2026-06-23 01:09 IST"
    }
};
