// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-07-15T15:40:40.960513+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-07-15T15:40:40.607395+05:30",
    "lastUpdatedFormatted": "Jul 15, 2026 at 03:40 PM IST",
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
                "hxxp://dmcllnical[.]com/rr/0469404694/Ym9ubmllLmJhZGlyYUBwbmdwb3J0cy5jb20ucGc",
                "hxxp://dmcllnical[.]com/rr/0469404694/Ym9ubmllLmJhZGlyYUBwbmdwb3J0cy5jb20ucGc=",
                "hxxps://bac-uytbf[.]com/search",
                "hxxp://truez23pmwduv-frc7d3dkgghsc5au[.]z03[.]azurefd[.]net/",
                "hxxp://dmcllnical[.]com/rr/9564295642/ZW5hc2gua3VwZXNhbkBwbmdwb3J0cy5jb20ucGc"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 867,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 867,
                "newInLastHour": 155,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"54c812216657b8f2f3d8e5b202e38511367731ee881cee6ed982ae657eda6986",
                " \"a9b557921c40fd625b775e66d6fd99807058133057e94ee7483990f10817fdb4",
                " \"b6e7280ba661be15d93b1f814579580eb7c93e699353a5e79b1e219dec4283ca",
                " \"e360bf71b66974367fbc66142b415f91b51cafda8ee064fd044230e3693d01b2",
                " \"d6cdd792b00ce9204762d8a6b4a426b8e569cb5f356c512b51fb29514ca11d24"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1666,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1666,
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
                "1[.]15[.]14[.]29",
                "1[.]159[.]52[.]66",
                "1[.]175[.]81[.]181",
                "1[.]177[.]162[.]2",
                "1[.]193[.]63[.]138"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 5386,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 5386,
                "newInLastHour": 5386,
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
            "iocCount": 21255,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 21255,
                "newInLastHour": 21255,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxps://0rlxki7g[.]bordbett10[.]com/?ublib=6577db6d-a247-4385-a5b4-571e6630c79e",
                "hxxps://vjs8k4dd[.]betyek[.]bio/?ublib=0b07568c-0ae1-4d6d-8f0e-6c04db7b4e22",
                "hxxp://46[.]236[.]65[.]23:60207/i",
                "hxxps://brmzm[.]jadoou[.]space/d1a18065-4220-4288-9ef4-9d203819a90f",
                "hxxps://cgzt[.]behtarin-site-shartbandi-football[.]com/0e888cff-0881-48cf-8970-eacb0f78c572"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 4567,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 4567,
                "newInLastHour": 4252,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"hxxp://syntaxj[.]top:6278\"",
                " \"0rlxki7g[.]bordbett10[.]com\"",
                " \"bordbett10[.]com\"",
                " \"vjs8k4dd[.]betyek[.]bio\"",
                " \"betyek[.]bio\""
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
            "iocCount": 10125,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 10125,
                "newInLastHour": 68,
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
            "totalIndicators": 53478,
            "activeSources": 8,
            "criticalAlerts": 32019,
            "activeCampaigns": 259
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 21898,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "C2",
                "count": 10121,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 3675,
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
                "count": 21121,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://149[.]71[.]39[.]60:49660/bin[.]sh",
                    "hxxp://116[.]167[.]106[.]46:48393/bin[.]sh",
                    "hxxp://60[.]184[.]133[.]62:46798/i"
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
                    "1[.]192[.]177[.]87"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1677,
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
                "count": 1429,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"101[.]133[.]225[.]51:443\"",
                    " \"158[.]178[.]230[.]77:443\"",
                    " \"158[.]178[.]230[.]77:80\""
                ]
            },
            {
                "name": "AsyncRAT",
                "count": 1421,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "34ba6ed6fdcf11e71f689efe8e8bb5d723339125",
                    "8f000dbd7cc73e8857d42a3c7c15676305af6889",
                    "85f5e4e0d8c608a11c4e493eb349a7a4c8c4bc9d"
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
                "count": 624,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "3403986d256e4ce608c0b4e9648d867a373ff6cc",
                    "4ab5197c559d38f2d4886d00f7140b09318bc5ca",
                    "cd1f1ffdd1055c9540758327ff1d7698068c9a93"
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
                "count": 435,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "d75206e1bb0d0ab79c93e78178e102f6ef071732",
                    "659379b480f2d3448f8946b0961115e00bfdbce0",
                    "4af51082ffa699d104ec1f66263afc8efa99cf76"
                ]
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious URLs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": "malware_download",
        "totalAttacksThisHour": 46421,
        "lastCalculated": "2026-07-15 15:40 IST"
    }
};
