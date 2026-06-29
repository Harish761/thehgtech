// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-06-30T03:11:51.676537+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-06-30T03:11:51.291119+05:30",
    "lastUpdatedFormatted": "Jun 30, 2026 at 03:11 AM IST",
    "comparisonPeriod": "Jun 29 \u2013 Jun 30, 2026",
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
                "hxxp://auth-apps-kucoin-sso--c-cdn[.]webflow[.]io/",
                "hxxp://claim-open-esl-org[.]sbs/",
                "hxxp://pub-e55d00bbe3f740a58ef8bd646105b158[.]r2[.]dev/auth[.]html",
                "hxxps://delvaie[.]com/login4841[.]php",
                "hxxps://delvaie[.]com/wrong[.]php"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 614,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 614,
                "newInLastHour": 35,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"25572b53676f1041dfec6ddd3ac1b47c5db8c384c98aac6238c463ada08ad523",
                " \"60c4a4620b83676a6f0d1cccd83d6f5e771e199752a9428e5d7c324bc3589382",
                " \"d54666088bc7da30f79d3436e7eb8c8753884b4803cb91c9ada58e20cf9e0b0a",
                " \"717d3530bec0d97d1f82ee8fe503e4d01040441873cabc2a9437c747bd8387b7",
                " \"c9caf3e4516b94a326bc1b0c787b0e29752e48b6ca55c72025ba7e03d32e7f8e"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1654,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1654,
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
                "1[.]10[.]185[.]224",
                "1[.]1[.]243[.]65",
                "1[.]119[.]194[.]226",
                "1[.]176[.]118[.]246",
                "1[.]177[.]162[.]2"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 5064,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 5064,
                "newInLastHour": 5064,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]0[.]164[.]165",
                "1[.]12[.]223[.]79",
                "1[.]14[.]107[.]204",
                "1[.]14[.]151[.]196",
                "1[.]14[.]192[.]95"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 22288,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 22288,
                "newInLastHour": 22288,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://176[.]106[.]241[.]72:51426/i",
                "hxxp://176[.]106[.]241[.]72:51426/bin[.]sh",
                "hxxp://91[.]92[.]242[.]236/files-129312398/files/file_ad2429816444a42e[.]exe",
                "hxxp://119[.]183[.]55[.]125:59507/i",
                "hxxp://27[.]219[.]96[.]206:52707/i"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 4527,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 4527,
                "newInLastHour": 3818,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"172[.]245[.]226[.]124:443\"",
                " \"hxxp://176[.]65[.]144[.]73/312b423bf6dd463f8d15[.]php\"",
                " \"158[.]160[.]75[.]185:40644\"",
                " \"45[.]141[.]27[.]68:4959\"",
                " \"hxxp://miedorama[.]com:4959\""
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
            "iocCount": 10020,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 10020,
                "newInLastHour": 16,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "078541bcc8ca1f620034dc2b29cbd968faf02ea6",
                "85725890743b16375132651911e3f692115128a8",
                "35f7eb4f519f8878beb88a02587ce4d82df24ce6",
                "4914d714908de0f52c22349b5b784f77442a27e6",
                "22254f34fc7bb27507295179034e621efba15cfe"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 54421,
            "activeSources": 8,
            "criticalAlerts": 32913,
            "activeCampaigns": 233
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 22869,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "C2",
                "count": 10044,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 3605,
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
                "count": 22251,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://176[.]65[.]148[.]71:8080/armv6l",
                    "hxxp://176[.]65[.]148[.]71:8080/mipsel",
                    "hxxp://176[.]65[.]148[.]71:8080/mips"
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
                    "1[.]119[.]194[.]226",
                    "1[.]12[.]229[.]231"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1682,
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
                "count": 1418,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "526b4a8604d900869439980614e56e4b288fb46d",
                    "49aa56f946089804e2bc8ae77a7b2fbaa5860e50",
                    "6a998d33a87c7b36c2be68ed5c1c63929c0d6be4"
                ]
            },
            {
                "name": " \"win.cobalt_strike\"",
                "count": 1406,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"172[.]245[.]226[.]124:80\"",
                    " \"112[.]124[.]71[.]123:53\"",
                    " \"answers[.]microsofl[.]ip-ddns[.]com\""
                ]
            },
            {
                "name": " \"js.clearfake\"",
                "count": 888,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"r32rtlhu[.]1xbetpartnersiran[.]com\"",
                    " \"moderncloudprotection[.]com\"",
                    " \"publicwebprotection[.]com\""
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
                "count": 619,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "85725890743b16375132651911e3f692115128a8",
                    "4914d714908de0f52c22349b5b784f77442a27e6",
                    "cb3467ed8453ec11060a815fe90e0c37957a205e"
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
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious URLs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": "malware_download",
        "totalAttacksThisHour": 46528,
        "lastCalculated": "2026-06-30 03:11 IST"
    }
};
