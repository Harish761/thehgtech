// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-07-21T02:48:59.244734+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-07-21T02:48:58.880727+05:30",
    "lastUpdatedFormatted": "Jul 21, 2026 at 02:48 AM IST",
    "comparisonPeriod": "Jul 20 \u2013 Jul 21, 2026",
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
                "hxxps://zlavor-vriba-5d04be-trkt-crendal[.]pages[.]dev/",
                "hxxp://sttrt-ledgrs[.]pages[.]dev/",
                "hxxps://facebook-login-web[.]blogspot[.]com/?m=1",
                "hxxps://msoftnow[.]ignorelist[.]com/wp/",
                "hxxps://girope[.]hu/tm1/open_documents_pdf/index[.]php/"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 749,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 749,
                "newInLastHour": 62,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"05feafe05fedb138116489ceca8a84b302ed59e2f3d18daa9527b057aa485c9a",
                " \"6ef76a3b50c9f70408e74e4c15d986f94979711d35f3f6744d1ab61387214eb6",
                " \"84d07f96725bc87d56f68936dd3879ffe67f1f8d694be9fbc4edd4a6d9a44615",
                " \"2e086924a7835d4679749992f6b684ccf2fa5ab7f33fa69201b22ccf1f98571c",
                " \"c165527a2aa356d02f68fd695fbfe5ae9170eb8b6862e48cf9758e0ec6eebe31"
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
                "1[.]119[.]194[.]226",
                "1[.]15[.]14[.]29",
                "1[.]159[.]34[.]223",
                "1[.]165[.]0[.]157",
                "1[.]179[.]44[.]60"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 5506,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 5506,
                "newInLastHour": 5506,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]0[.]164[.]165",
                "1[.]116[.]61[.]217",
                "1[.]15[.]227[.]58",
                "1[.]162[.]245[.]230",
                "1[.]162[.]62[.]76"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 20589,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 20589,
                "newInLastHour": 20589,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://117[.]95[.]212[.]118:35345/i",
                "hxxp://196[.]189[.]35[.]226:56218/i",
                "hxxp://182[.]118[.]240[.]77:44648/i",
                "hxxps://txvii[.]hazaratbet[.]bet/099279dc-fd6f-4e77-817d-7f3f253dbc37",
                "hxxps://ttvsj7o9[.]jdexteriorcleaning[.]com/?ublib=1b43aaa0-088d-44ee-8594-2227175f98ea"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 4028,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 4028,
                "newInLastHour": 3908,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"117[.]72[.]175[.]125:8090\"",
                " \"154[.]12[.]86[.]154:33306\"",
                " \"117[.]72[.]178[.]246:8081\"",
                " \"117[.]72[.]178[.]246:6379\"",
                " \"15[.]235[.]3[.]224:443\""
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
            "iocCount": 10219,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 10219,
                "newInLastHour": 0,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "1e5253b44aa68a4b31f0dfc07df48b31798debca",
                "7f563e6df9b87f615f2d492ba68d5df373a6ca26",
                "a6df6eca49e13a8c5ebba1f86ca4c5766b1c1b97",
                "3cf6a282d22b606bce0ba5ad74526257eff4cf81",
                "3fb1dbcabe3bab0eb06fefe295821bff1007fb25"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 52508,
            "activeSources": 8,
            "criticalAlerts": 31519,
            "activeCampaigns": 230
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 21313,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "C2",
                "count": 10206,
                "trend": "stable",
                "percentage": 1
            },
            {
                "category": "Botnet",
                "count": 3425,
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
                "count": 20571,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://182[.]126[.]90[.]227:37215/bin[.]sh",
                    "hxxp://111[.]127[.]235[.]14:58633/i",
                    "hxxp://42[.]235[.]84[.]235:42719/bin[.]sh"
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
                    "1[.]179[.]44[.]60",
                    "1[.]183[.]161[.]88"
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
                "count": 1445,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"43[.]139[.]50[.]42:3306\"",
                    " \"117[.]72[.]178[.]246:22\"",
                    " \"47[.]236[.]130[.]154:22\""
                ]
            },
            {
                "name": "AsyncRAT",
                "count": 1430,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "c31650da58712771ad83fd5c6cef97905a255cc5",
                    "e86cb30b97c8af13b305fa5cdc7357e23f633447",
                    "c4e9396a3a0543fa79cc0a8f23395f90a15e03b0"
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
                "count": 649,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "4264b1c47eac055ce604ef3509d23cd7e3bd584b",
                    "58a5ded84c93621d72ecc14b386e0e6bea5d103a",
                    "1dedacf3710f30c15b9e73c9d719a969eec755e5"
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
                "count": 446,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "50cad154b9d5fdd19c3f67162257de03d3a6afcd",
                    "572029fec2909ba613cee3c3698b8a49af83b428",
                    "68ffb512bc3f1f544502736127d3bdbd6ece390b"
                ]
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious URLs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": " \"Mirai",
        "totalAttacksThisHour": 45370,
        "lastCalculated": "2026-07-21 02:48 IST"
    }
};
