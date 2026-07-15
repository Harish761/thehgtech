// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-07-15T19:33:39.768829+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-07-15T19:33:39.410195+05:30",
    "lastUpdatedFormatted": "Jul 15, 2026 at 07:33 PM IST",
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
            "iocCount": 889,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 889,
                "newInLastHour": 68,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"c426fb814aca8621ee6ff94fb6e5b3dc70817064c226752767728af415ac656d",
                " \"7726151c760826a29ca87856f71f27cbcfbb3f3e709d0e4574387465e43dda01",
                " \"0f10169a6e1864e1c615ea1c6ed967a493f8749a9af42dd431dfdae4d4529d73",
                " \"2e1ec88a8371829715fa154aec4b55165c0410623ed0ca6dc2e92768486f0678",
                " \"4d10378675eb57e00df605a9e149d6ce16fb7b315c561c8a9e411dde75c27971"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1676,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1676,
                "newInLastHour": 11,
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
                "1[.]159[.]90[.]31",
                "1[.]175[.]81[.]181",
                "1[.]177[.]162[.]2",
                "1[.]193[.]63[.]138"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 5295,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 5295,
                "newInLastHour": 5295,
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
                "1[.]20[.]140[.]252"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 21328,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 21328,
                "newInLastHour": 21328,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxps://pub-ce02802067934e0eb072f69bf6427bf6[.]r2[.]dev/tile[.]png",
                "hxxps://misty-cherry-cea3[.]uploadsimg[.]workers[.]dev/xyuvs",
                "hxxps://studiogioeli[.]it/armful/ATPI_Annual_Dinner[.]js",
                "hxxp://123[.]5[.]128[.]66:37180/i",
                "hxxps://kxxpvutsn[.]derbi[.]promo/d6fbf832-147d-40c4-a3c6-5bc258bb035c"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 4533,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 4533,
                "newInLastHour": 4216,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"kxxpvutsn[.]derbi[.]promo\"",
                " \"hxxps://fij[.]kijangturbo88[.]top/\"",
                " \"fij[.]ambiltogel[.]net\"",
                " \"hxxps://fij[.]ambiltogel[.]net/\"",
                " \"fij[.]kijangturbo88[.]top\""
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
            "iocCount": 10210,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 10210,
                "newInLastHour": 86,
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
            "totalIndicators": 53785,
            "activeSources": 8,
            "criticalAlerts": 32252,
            "activeCampaigns": 263
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 22149,
                "trend": "stable",
                "percentage": 1
            },
            {
                "category": "C2",
                "count": 10103,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 3719,
                "trend": "stable",
                "percentage": 1
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
                "count": 21255,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxps://0rlxki7g[.]bordbett10[.]com/?ublib=6577db6d-a247-4385-a5b4-571e6630c79e",
                    "hxxps://vjs8k4dd[.]betyek[.]bio/?ublib=0b07568c-0ae1-4d6d-8f0e-6c04db7b4e22",
                    "hxxp://46[.]236[.]65[.]23:60207/i"
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
                    "1[.]159[.]52[.]66",
                    "1[.]175[.]81[.]181"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1666,
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
                    " \"106[.]54[.]44[.]181:801\"",
                    " \"116[.]11[.]4[.]167:10443\"",
                    " \"118[.]89[.]69[.]45:80\""
                ]
            },
            {
                "name": "AsyncRAT",
                "count": 1421,
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
                "count": 690,
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
                "count": 628,
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
                "count": 554,
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
                "count": 431,
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
        "totalAttacksThisHour": 46309,
        "lastCalculated": "2026-07-15 19:33 IST"
    }
};
