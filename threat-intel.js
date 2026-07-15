// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-07-15T23:03:47.423802+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-07-15T23:03:47.047225+05:30",
    "lastUpdatedFormatted": "Jul 15, 2026 at 11:03 PM IST",
    "comparisonPeriod": "Jul 14 \u2013 Jul 15, 2026",
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
                "hxxps://maxiis[.]eu[.]cc/my",
                "hxxps://ammkbd[.]com/mycss/ch/376/step5[.]php",
                "hxxps://ammkbd[.]com/mycss/ch/376/load[.]php",
                "hxxp://shopee-performance-dashboard[.]pages[.]dev/",
                "hxxp://agenciatribteries[.]top/es"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 887,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 887,
                "newInLastHour": 35,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"c541350abf147807e5c8692f5a8d713e730fa49ecbd75706aca7805f2f500dd9",
                " \"b8cef8210aea4e212d3cfea0f3f7755417d7f11ef974c037fe2a6d5c779a4c2e",
                " \"c65ebc9010d7629446d6c5469cea1f17b7c2953f9e4c144c524a7a82a144379b",
                " \"490bd1040404e008b34953d5e76a9cef00287b86e498a55156c942ee27920f96",
                " \"bebe5852579772c396331a3593a2f9a2a69ac74e174901e563d8b2a3a4cdfc11"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1677,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1677,
                "newInLastHour": 1,
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
                "1[.]159[.]52[.]66",
                "1[.]159[.]90[.]31",
                "1[.]175[.]81[.]181",
                "1[.]177[.]162[.]2"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 5285,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 5285,
                "newInLastHour": 5285,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]0[.]164[.]165",
                "1[.]1[.]220[.]166",
                "1[.]162[.]231[.]16",
                "1[.]192[.]63[.]54",
                "1[.]197[.]102[.]62"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 21355,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 21355,
                "newInLastHour": 21355,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxps://tom[.]bouesti[.]edu[.]ng/Installer_L_X64_x86_2024[.]zip",
                "hxxp://105[.]224[.]109[.]82:60337/i",
                "hxxps://thepullmanfolkestone[.]com/ppisondeers[.]exe",
                "hxxp://27[.]207[.]73[.]215:50431/i",
                "hxxp://studiogioeli[.]it/trichloroflouromethane/Order[.]js"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 4359,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 4359,
                "newInLastHour": 4084,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"teamslinkintegrate[.]com\"",
                " \"tlinkintegrations[.]eu\"",
                " \"ua-chrome[.]net\"",
                " \"hxxps://granitehearth[.]top/status/profile-runtime[.]js\"",
                " \"hxxps://alianzaamericanaseguros[.]com/\""
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
            "iocCount": 10211,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 10211,
                "newInLastHour": 1,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "47a42b7e960e081fb973d80964554f4dea813c9d",
                "8ef5bc8cb7d00d8b89bacbd4f9405f402d1a002e",
                "0f50074c5489b97def2d220b8cd70bada3361220",
                "58a5ded84c93621d72ecc14b386e0e6bea5d103a",
                "1dedacf3710f30c15b9e73c9d719a969eec755e5"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 53941,
            "activeSources": 8,
            "criticalAlerts": 32432,
            "activeCampaigns": 270
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 22244,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "C2",
                "count": 10188,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 3680,
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
                "count": 21328,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxps://pub-ce02802067934e0eb072f69bf6427bf6[.]r2[.]dev/tile[.]png",
                    "hxxps://misty-cherry-cea3[.]uploadsimg[.]workers[.]dev/xyuvs",
                    "hxxps://studiogioeli[.]it/armful/ATPI_Annual_Dinner[.]js"
                ]
            },
            {
                "name": "CINS Threat List",
                "count": 15000,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]15[.]14[.]29",
                    "1[.]159[.]90[.]31",
                    "1[.]175[.]81[.]181"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1676,
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
                "count": 1427,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "c11fd105f60ade90dc2611391ee6aa93e6c73375",
                    "34ba6ed6fdcf11e71f689efe8e8bb5d723339125",
                    "8f000dbd7cc73e8857d42a3c7c15676305af6889"
                ]
            },
            {
                "name": " \"win.cobalt_strike\"",
                "count": 1423,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"70[.]39[.]181[.]126:80\"",
                    " \"120[.]76[.]143[.]184:22\"",
                    " \"111[.]228[.]55[.]96:22\""
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
                "count": 693,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "4c67471be88dd63db2466621fe9e2a2d848f5b79",
                    "9cc76149b07c25893611bc8339406a6312ab2053",
                    "1b64957d1d878c0c0b0b346849db2e64d487aa17"
                ]
            },
            {
                "name": "Vidar",
                "count": 648,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "58a5ded84c93621d72ecc14b386e0e6bea5d103a",
                    "1dedacf3710f30c15b9e73c9d719a969eec755e5",
                    "3403986d256e4ce608c0b4e9648d867a373ff6cc"
                ]
            },
            {
                "name": "LummaStealer",
                "count": 557,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "501d817bb1780acfe5e47082c43472bda8068e4d",
                    "2beac2ee8b2fe7625d4de9f5381d37f200965f91",
                    "a46841d623a191366909b24375bee0eceea23bbe"
                ]
            },
            {
                "name": "OffLoader",
                "count": 445,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "572029fec2909ba613cee3c3698b8a49af83b428",
                    "68ffb512bc3f1f544502736127d3bdbd6ece390b",
                    "d75206e1bb0d0ab79c93e78178e102f6ef071732"
                ]
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious URLs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": "malware_download",
        "totalAttacksThisHour": 46066,
        "lastCalculated": "2026-07-15 23:03 IST"
    }
};
