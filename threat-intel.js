// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-06-23T09:46:16.780343+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-06-23T09:46:16.428232+05:30",
    "lastUpdatedFormatted": "Jun 23, 2026 at 09:46 AM IST",
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
                "hxxp://qarzdeals[.]com/steve/netflix",
                "hxxps://azfit[.]com[.]br/sahmel/associates[.]html",
                "hxxp://www[.]amazon-app7[.]biz[.]id/",
                "hxxp://aizhara[.]apsny[.]land/assfv43/log[.]php/",
                "hxxps://clone-project-omega[.]vercel[.]app/"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 686,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 686,
                "newInLastHour": 47,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"33d22eaea23e98d0fafcf41bd525011923bb708f08efb9a838e4cd4b2f6be2e7",
                " \"81c6b50efe5c39ba960e8d85ce96ed421b4e31c4e0901ad7d295570ac941f5c4",
                " \"57a73c0f63198651cc6356136ecd0a31d47dbe8268af03ab35e81ec98e737bc4",
                " \"f5a82fe28e7e9ec459f4c98470820f5be243cd3189b32d717a060d8b01629108",
                " \"1cd5cbbd5684b64e77269967ca56e58f8c520a3b4b30eef3b7fac31a6cd671d5"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1693,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1693,
                "newInLastHour": 25,
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
                "1[.]15[.]35[.]79",
                "1[.]176[.]118[.]246",
                "1[.]192[.]177[.]156",
                "1[.]192[.]177[.]51",
                "1[.]193[.]63[.]180"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 4676,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 4676,
                "newInLastHour": 4676,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]14[.]28[.]29",
                "1[.]160[.]229[.]25",
                "1[.]162[.]239[.]42",
                "1[.]192[.]61[.]19",
                "1[.]20[.]228[.]110"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 22383,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 22383,
                "newInLastHour": 22383,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://182[.]113[.]205[.]183:34250/bin[.]sh",
                "hxxp://124[.]94[.]173[.]123:52089/i",
                "hxxp://42[.]235[.]90[.]140:35939/i",
                "hxxp://177[.]86[.]229[.]12:35254/bin[.]sh",
                "hxxp://42[.]235[.]90[.]140:35939/bin[.]sh"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 4787,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 4787,
                "newInLastHour": 4334,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"52[.]128[.]224[.]238:8084\"",
                " \"52[.]128[.]224[.]236:9191\"",
                " \"52[.]128[.]224[.]236:8089\"",
                " \"52[.]128[.]224[.]238:8089\"",
                " \"121[.]4[.]76[.]54:80\""
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
            "iocCount": 9988,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 9988,
                "newInLastHour": 35,
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
            "totalIndicators": 55138,
            "activeSources": 8,
            "criticalAlerts": 33385,
            "activeCampaigns": 260
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 23419,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "C2",
                "count": 9966,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 3727,
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
                "count": 22686,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://115[.]49[.]138[.]30:46620/i",
                    "hxxp://62[.]60[.]226[.]140/tron13/file[.]exe",
                    "hxxp://62[.]60[.]226[.]140/tron12/file[.]exe"
                ]
            },
            {
                "name": "CINS Threat List",
                "count": 15000,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]12[.]229[.]231",
                    "1[.]15[.]14[.]29",
                    "1[.]15[.]51[.]236"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1668,
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
                "count": 1428,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"42[.]193[.]15[.]237:9002\"",
                    " \"82fa0aa7387d7173c9a9ebd1e8dcbb84\"",
                    " \"7e1435b42bd584c4edeaa1fc4055de16e99c5242e0a9d0e24b5a677e1c356563\""
                ]
            },
            {
                "name": "AsyncRAT",
                "count": 1418,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "15a47f45b77ef377b9ec7f6aff1fc3fcca1c6035",
                    "3361a98a6c2746e41390b299202f149699f5a17d",
                    "49aa56f946089804e2bc8ae77a7b2fbaa5860e50"
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
                "count": 684,
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
                "count": 598,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "85b767752d352a3203c71f6b61fd32aeae6a806b",
                    "a75653fb0d720b53ce06b75400144f7348f56859",
                    "74c412ddb5e5ff23d519ed7f6c71d99fb8ffbaef"
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
                "name": " \"unknown\"",
                "count": 530,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"hxxps://ext2[.]info/time[.]php\"",
                    " \"hxxps://yodonoplasma[.]es/\"",
                    " \"hxxp://192[.]142[.]28[.]77/bachekuni/ohshit[.]x86\""
                ]
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious URLs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": "Spamhaus DROP List",
        "totalAttacksThisHour": 46805,
        "lastCalculated": "2026-06-23 09:46 IST"
    }
};
