// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-06-05T20:55:00.710474+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-06-05T20:55:00.480286+05:30",
    "lastUpdatedFormatted": "Jun 05, 2026 at 08:55 PM IST",
    "comparisonPeriod": "Jun 04 \u2013 Jun 05, 2026",
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
                "hxxps://sp10ct6-vrolvik-biz-qortem-glurnax[.]pages[.]dev/",
                "hxxp://sp10ct6-glarnik-biz-frunor-plavtex[.]pages[.]dev/",
                "hxxps://linkedin[.]comunicazioni-sicure[.]it/actionrequired?rid=RwQSixi",
                "hxxps://wordpress-212173-0[.]cloudclusters[.]net/chf/swisspass-sbb/ch/payment[.]php",
                "hxxp://dennisriani2-design[.]github[.]io/onedrive/"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 783,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 783,
                "newInLastHour": 70,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"7aa2519f51bb1ef1bc72cd962990120899066480169e459a8be6267b1acca3e5",
                " \"4fe5088330fdb8b6e9cd8db5fdd5351724bf53ee301a59de4d42fde2c7a227d0",
                " \"67e55b73e07b3cb11d3f5bc1490cb585fb185c0267a7827cf801c9f6bb3abe7e",
                " \"61de5390812e7cdda02306c44ce5c5e308285a50a29820cc600ee0ca816b92a8",
                " \"924c38155e1c0b700633e32a0e5a22f410a7306476a001c4b0c967f4636f6d40"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1634,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1634,
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
                "2.56.192.0/22",
                "2.57.122.0/24"
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
                "1[.]1[.]223[.]129",
                "1[.]119[.]194[.]226",
                "1[.]12[.]229[.]231",
                "1[.]123[.]226[.]59",
                "1[.]140[.]99[.]153"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 5099,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 5099,
                "newInLastHour": 5099,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]0[.]164[.]165",
                "1[.]197[.]102[.]62",
                "1[.]2[.]220[.]103",
                "1[.]201[.]123[.]182",
                "1[.]202[.]220[.]94"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 19243,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 19243,
                "newInLastHour": 19243,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxps://1djqvowq[.]iaap2019[.]com/?ublib=9553a464-8210-4f70-9353-94a2bc2ed155",
                "hxxp://218[.]91[.]33[.]157:33594/bin[.]sh",
                "hxxp://115[.]196[.]208[.]209:46989/i",
                "hxxps://bdbxwze[.]electriccrash[.]bet/7667f86a-1a5c-4028-a7fc-ca6f4ba51616",
                "hxxps://ghuctqf[.]ef90bet[.]com/6a394140-a786-43cf-95da-013caf432300"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 3589,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 3589,
                "newInLastHour": 3517,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"1djqvowq[.]iaap2019[.]com\"",
                " \"nsz2gpgw[.]iaap2019[.]com\"",
                " \"154[.]88[.]99[.]45:8884\"",
                " \"154[.]88[.]99[.]43:8884\"",
                " \"154[.]88[.]99[.]53:8884\""
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
            "iocCount": 9799,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 9799,
                "newInLastHour": 0,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "e1c32b52b297f07860e5c2ff0b0ef604d8d929fc",
                "ded6028ef62f0258e17121e6beece5d9b124d48f",
                "545e17b0c27640889044d9780ef0f3ad8825b55a",
                "12a50b5c46ccd3c1dc155c31eb30438cc2225e89",
                "7cf0a3e58ceb76c0839efdd4adf64dd64fa6f6f2"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 35359,
            "activeSources": 7,
            "criticalAlerts": 29753,
            "activeCampaigns": 237
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 19910,
                "trend": "stable",
                "percentage": 2
            },
            {
                "category": "C2",
                "count": 9843,
                "trend": "stable",
                "percentage": 1
            },
            {
                "category": "Botnet",
                "count": 3192,
                "trend": "stable",
                "percentage": -2
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
                "percentage": 95
            },
            {
                "name": "Tech",
                "percentage": 4
            },
            {
                "name": "Finance",
                "percentage": 0
            }
        ],
        "campaigns": [
            {
                "name": "malware_download",
                "count": 19124,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://123[.]5[.]168[.]75:54129/i",
                    "hxxp://164[.]163[.]25[.]157:41716/bin[.]sh",
                    "hxxps://vvlainw[.]vip[.]tennis/6d04e913-8ea9-4573-95e4-2260893a9eb6"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1642,
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
                "count": 1416,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "6a998d33a87c7b36c2be68ed5c1c63929c0d6be4",
                    "167ddfd671ef30c31528515389cfdd11d9251558",
                    "d42a4a7e721a0503d81e3f47c72a0f93c53e4f2c"
                ]
            },
            {
                "name": " \"win.cobalt_strike\"",
                "count": 1408,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"119[.]45[.]166[.]6:9443\"",
                    " \"154[.]36[.]188[.]239:80\"",
                    " \"204[.]194[.]49[.]142:8080\""
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
                "count": 686,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "28c3106cd1cec9a5dfec7f2ba3b0dd7e70784429",
                    "bf26c599e3f5ea932f7b8c592138d42d49837713",
                    "5b27051d67aa2cce9314596003b68709a13fc003"
                ]
            },
            {
                "name": "Vidar",
                "count": 575,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "7cf0a3e58ceb76c0839efdd4adf64dd64fa6f6f2",
                    "90e3298b9df7e2c9ba08cc32cab77dee09be4f30",
                    "564b4902e12a0412bc9df5369f51cd6d273d5974"
                ]
            },
            {
                "name": "LummaStealer",
                "count": 554,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "272e76f605bec1da1ea719df8dc0e7269de7d44e",
                    "ab7f083d77dc2b1b71c0aec9a417e0a5a036a5f9",
                    "7ce02a4df627573696141e40970ef60e246f9f3f"
                ]
            },
            {
                "name": "OffLoader",
                "count": 423,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "fb65cb3929bf5df8ed6de3cb5b2c6b87b3f6e3d9",
                    "7bba8eb1da43142534144a1aaf30b1be8a5ed134",
                    "3190ff29e738f3a056a97190ae61386c21eddefd"
                ]
            },
            {
                "name": "ConnectWise",
                "count": 369,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "ded6028ef62f0258e17121e6beece5d9b124d48f",
                    "545e17b0c27640889044d9780ef0f3ad8825b55a",
                    "25cec5dfbffe744af691b5fe996769cc84244f78"
                ]
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious URLs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": "CINS Threat List",
        "totalAttacksThisHour": 43234,
        "lastCalculated": "2026-06-05 20:55 IST"
    }
};
