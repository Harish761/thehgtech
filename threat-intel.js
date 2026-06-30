// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-06-30T20:09:04.524539+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-06-30T20:09:04.142095+05:30",
    "lastUpdatedFormatted": "Jun 30, 2026 at 08:09 PM IST",
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
                "hxxps://www[.]scartezzini[.]it/orus_de[.]html",
                "hxxps://piyushkumar754200-hash[.]github[.]io/amazon-clone/",
                "hxxps://portalpedagio-br[.]dynv6[.]net/freeflow/home[.]php/",
                "hxxp://fd[.]meluxuryrentals[.]com/Contents",
                "hxxp://asip[.]account-info[.]email/6197094-oH1faBZb-PKS9Q"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 871,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 871,
                "newInLastHour": 58,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"a1e468b77bab8faa8f6e42c37dd0c8f6556e5c529273118f67c6150fbd96c921",
                " \"93d63f76261aecdacafdce0b490cf032c90b48c227f0772d4a5dccc71998beaf",
                " \"bbd5232ebe3f65b3666a72aefbb30c3f4756f57953279bef51af7f3dbd2a29df",
                " \"65550f6d0ffec8421f703cdc7273d9c0563b3d480fe6702bad294a18afe72143",
                " \"51c6b54a5b498e78765d8a95c065ede84380ec1f0438462baefb82b7e3967bbb"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1684,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1684,
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
                "1[.]119[.]194[.]226",
                "1[.]15[.]14[.]29",
                "1[.]157[.]44[.]81",
                "1[.]176[.]118[.]246",
                "1[.]183[.]161[.]114"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 8984,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 8984,
                "newInLastHour": 8984,
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
                "1[.]14[.]203[.]20"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 22155,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 22155,
                "newInLastHour": 22155,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://222[.]137[.]5[.]187:58895/i",
                "hxxp://115[.]49[.]75[.]67:43854/bin[.]sh",
                "hxxp://110[.]186[.]231[.]27:35324/i",
                "hxxp://222[.]141[.]27[.]209:39927/i",
                "hxxp://125[.]40[.]48[.]134:58423/i"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 4606,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 4606,
                "newInLastHour": 3887,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"hxxps://kitchenandbathroomrodelingdigest[.]com/\"",
                " \"wt51peii[.]boomball[.]bet\"",
                " \"boomball[.]bet\"",
                " \"e43580fc868229155276b47518770c3d27bcf34c66020d34413be5cfd896e7a6\"",
                " \"757b20354a901501b2d8e99294940d1256d2d9140d336aded8307d95fdf479f3\""
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
            "iocCount": 10034,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 10034,
                "newInLastHour": 0,
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
            "totalIndicators": 54619,
            "activeSources": 8,
            "criticalAlerts": 33037,
            "activeCampaigns": 235
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 22977,
                "trend": "stable",
                "percentage": 1
            },
            {
                "category": "C2",
                "count": 10060,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 3585,
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
                "count": 22117,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://bip[.]priestsw[.]com/fee/optimized_MSI23[.]png",
                    "hxxp://91[.]92[.]242[.]236/files-129312398/files/file_aa85f097aed60931[.]exe",
                    "hxxps://pub-3bc1de741f8149f49bdbafa703067f24[.]r2[.]dev/tnnbbv[.]png"
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
                    "1[.]15[.]14[.]29"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1685,
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
                "count": 1420,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "526b4a8604d900869439980614e56e4b288fb46d",
                    "15a47f45b77ef377b9ec7f6aff1fc3fcca1c6035",
                    "3361a98a6c2746e41390b299202f149699f5a17d"
                ]
            },
            {
                "name": " \"win.cobalt_strike\"",
                "count": 1415,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"152[.]32[.]132[.]177:443\"",
                    " \"152[.]32[.]132[.]177:8899\"",
                    " \"39[.]97[.]246[.]75:80\""
                ]
            },
            {
                "name": " \"js.clearfake\"",
                "count": 905,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"6oekxs4k[.]vip1xbet[.]net\"",
                    " \"kdf[.]betbacklink[.]com\"",
                    " \"i5sofk6r[.]xbetone[.]com\""
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
                "count": 620,
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
        "totalAttacksThisHour": 50389,
        "lastCalculated": "2026-06-30 20:09 IST"
    }
};
