// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-07-13T20:24:45.593467+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-07-13T20:24:45.170862+05:30",
    "lastUpdatedFormatted": "Jul 13, 2026 at 08:24 PM IST",
    "comparisonPeriod": "Jul 12 \u2013 Jul 13, 2026",
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
                "hxxp://baseweb-whatsappp[.]hl[.]cn/",
                "hxxp://thinkim-whatsappp[.]hl[.]cn/",
                "hxxp://thinkim-whatsapp[.]hl[.]cn/",
                "hxxps://zlavor-prism-5d04be-trkt-aurora[.]pages[.]dev/",
                "hxxps://www[.]membershipaccess-movie[.]yvv[.]pei[.]mybluehost[.]me/login"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 534,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 534,
                "newInLastHour": 45,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"65ff7fe618c23625210043b07695c29876df39b4db3347199fa38b2412fed9fc",
                " \"7a8e12bf814ad24df54b360d6f80bd5abf196b948ed3fc419631579fd14ffb88",
                " \"b11880bbadb5a06cd44f60e08f48dd5592ad9add9377c81810f5216437415865",
                " \"09a78d4ca618d275809fa2af5f6f1b9b40d5ed2e552ba6ff1ef66b59ccaa1531",
                " \"53ea8c1cb4f4f461628f3383a80fe60957281342c1d713064f2f26d2542aa1b2"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 493,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 493,
                "newInLastHour": 0,
                "lastUpdate": "just now"
            },
            "types": [
                "ip-range"
            ],
            "sampleIndicators": [
                "2.26.75.0/24",
                "2.27.5.0/24",
                "2.58.56.0/24",
                "2.59.152.0/24",
                "2.59.153.0/24"
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
                "1[.]12[.]65[.]64",
                "1[.]146[.]41[.]216",
                "1[.]15[.]14[.]29",
                "1[.]159[.]52[.]66",
                "1[.]175[.]87[.]205"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 5519,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 5519,
                "newInLastHour": 5519,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]0[.]164[.]165",
                "1[.]1[.]220[.]166",
                "1[.]116[.]61[.]217",
                "1[.]15[.]227[.]58",
                "1[.]162[.]247[.]210"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 21199,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 21199,
                "newInLastHour": 21199,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxps://ulgqmzld[.]jadoou[.]online/bb7eb0e3-5f84-420b-817e-9bbffc51623a",
                "hxxp://200[.]112[.]129[.]158:58803/i",
                "hxxps://dzjr[.]bekabet[.]casino/0b8ec5af-51b5-41d2-a6f6-52672aa99344",
                "hxxp://59[.]42[.]90[.]102:56735/bin[.]sh",
                "hxxp://196[.]190[.]1[.]39:42645/i"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 4301,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 4301,
                "newInLastHour": 3971,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"ulgqmzld[.]jadoou[.]online\"",
                " \"dzjr[.]bekabet[.]casino\"",
                " \"rjhrnhqj[.]jadoou[.]online\"",
                " \"qwfh[.]bekabet[.]casino\"",
                " \"s[.]na-cs[.]com\""
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
            "iocCount": 10026,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 10026,
                "newInLastHour": 5,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "df82e74fbb5bc5ae778b1cc4012b097f1f9a133d",
                "501d817bb1780acfe5e47082c43472bda8068e4d",
                "c19f09bd89b19cd3223d0c039c41a5baa7307178",
                "8f000dbd7cc73e8857d42a3c7c15676305af6889",
                "12518c4545d6d6d57f43040cdd2dc966cd5ea6c4"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 53062,
            "activeSources": 8,
            "criticalAlerts": 31837,
            "activeCampaigns": 210
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 21686,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "C2",
                "count": 10151,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 3482,
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
                "count": 21147,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxps://zxx1gpmw[.]pars90[.]download/?ublib=064f99d4-76a2-4eea-9e0e-56421ee3d280",
                    "hxxp://27[.]216[.]199[.]130:36784/i",
                    "hxxps://ovcvaphj[.]jadoou[.]cfd/1db42ea1-b1e4-4362-a6a2-401372c0a395"
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
                    "1[.]146[.]41[.]216",
                    "1[.]159[.]52[.]66"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1680,
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
                "count": 1424,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "85f5e4e0d8c608a11c4e493eb349a7a4c8c4bc9d",
                    "d85fb33f78921ec5ce0a2c2a9e9f2b0e8281bfc9",
                    "6a338d0e652aeb230f0b42e3916ff0f8b86d7409"
                ]
            },
            {
                "name": " \"win.cobalt_strike\"",
                "count": 1413,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"151[.]239[.]24[.]33:9090\"",
                    " \"64[.]90[.]13[.]61:80\"",
                    " \"106[.]54[.]44[.]181:81\""
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
                "count": 644,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "cd1f1ffdd1055c9540758327ff1d7698068c9a93",
                    "745edb7835e0a1ef871d1c027651ed4dfbfd406c",
                    "94eea408b8c901de2367e36bf291ba947b368ee5"
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
                "count": 441,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "4af51082ffa699d104ec1f66263afc8efa99cf76",
                    "a838f21e4fbcf93b9dcb1adf61ce9a7e07729594",
                    "c24c5b16d1b72ff6933bdc9a5034808630f1413f"
                ]
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious URLs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": "SSH Attacks",
        "totalAttacksThisHour": 46044,
        "lastCalculated": "2026-07-13 20:24 IST"
    }
};
