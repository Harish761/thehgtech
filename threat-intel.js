// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-07-13T16:55:20.437702+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-07-13T16:55:20.067611+05:30",
    "lastUpdatedFormatted": "Jul 13, 2026 at 04:55 PM IST",
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
                "hxxps://axodus-io[.]framer[.]ai/",
                "hxxps://073bethh[.]com/",
                "hxxp://sign-in-to-xfinity-10199[.]weebly[.]com/",
                "hxxps://suncoastb[.]dev/contact-us[.]php",
                "hxxps://chusyg[.]cc/"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 512,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 512,
                "newInLastHour": 55,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"655456dd88dbb7f8c7770dc5abd8637a4a5177c8df3edea15f51f49eee1cf325",
                " \"937c16c2f853b605c2be68982a65109fcd5f2cdf704b9438cd254a38ff529b7f",
                " \"e9d44973e8de7fd37d78b9fd88189c84d4f966dcf1d12fbcaaf18d4d98ffa66d",
                " \"bf02bd3f34a3f9526386a8fd7eb5d7d58dd30dfb3a1f4767df0ffccd85150180",
                " \"7f31b2c417af903470a865c011854acb2d0ce9ef3e497973d54e97fb68db74d8"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1680,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1680,
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
                "1[.]119[.]194[.]226",
                "1[.]146[.]41[.]216",
                "1[.]159[.]52[.]66",
                "1[.]175[.]87[.]205",
                "1[.]177[.]63[.]24"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 5465,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 5465,
                "newInLastHour": 5465,
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
            "iocCount": 21147,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 21147,
                "newInLastHour": 21147,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxps://zxx1gpmw[.]pars90[.]download/?ublib=064f99d4-76a2-4eea-9e0e-56421ee3d280",
                "hxxp://27[.]216[.]199[.]130:36784/i",
                "hxxps://ovcvaphj[.]jadoou[.]cfd/1db42ea1-b1e4-4362-a6a2-401372c0a395",
                "hxxp://60[.]215[.]23[.]95:55729/i",
                "hxxps://zxco[.]madgal[.]life/616c555d-6508-42f9-a266-2ba19cdef127"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 4245,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 4245,
                "newInLastHour": 3915,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"zxx1gpmw[.]pars90[.]download\"",
                " \"pars90[.]download\"",
                " \"154[.]88[.]99[.]59:8885\"",
                " \"154[.]88[.]99[.]60:8885\"",
                " \"154[.]88[.]99[.]58:8885\""
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
            "iocCount": 10173,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 10173,
                "newInLastHour": 7,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "cd1f1ffdd1055c9540758327ff1d7698068c9a93",
                "85f5e4e0d8c608a11c4e493eb349a7a4c8c4bc9d",
                "4c67471be88dd63db2466621fe9e2a2d848f5b79",
                "d85fb33f78921ec5ce0a2c2a9e9f2b0e8281bfc9",
                "38d23ac7c8e3f29dc51158a77665811f6a5e1341"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 53085,
            "activeSources": 8,
            "criticalAlerts": 31891,
            "activeCampaigns": 216
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 21747,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "C2",
                "count": 10144,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 3488,
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
                "count": 21091,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxps://frqljktr[.]jadoou[.]site/b8a7601f-d076-4287-b05f-0d4b7b21e27e",
                    "hxxp://196[.]189[.]198[.]193:36412/i",
                    "hxxp://42[.]235[.]144[.]196:35570/i"
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
                    "1[.]12[.]65[.]64",
                    "1[.]159[.]52[.]66"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1679,
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
                "count": 1423,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"45[.]32[.]253[.]166:8088\"",
                    " \"121[.]4[.]76[.]54:8888\"",
                    " \"120[.]26[.]244[.]247:10000\""
                ]
            },
            {
                "name": "AsyncRAT",
                "count": 1422,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "6a338d0e652aeb230f0b42e3916ff0f8b86d7409",
                    "41cbe997a63cc9211fd19593cfcf27602d10bcd8",
                    "526b4a8604d900869439980614e56e4b288fb46d"
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
                "count": 692,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "9cc76149b07c25893611bc8339406a6312ab2053",
                    "1b64957d1d878c0c0b0b346849db2e64d487aa17",
                    "83ff65960d2df4b29e78d6fd0342dcd5f053eb13"
                ]
            },
            {
                "name": "Vidar",
                "count": 641,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "7a8f361d188e552651fea1204d5399d889312da2",
                    "dcbc383f1a16d4b8baa7bfca1bb023f7f65c36f7",
                    "22cb3cb6d7b5b158d2156b1bd4018db8b5433ea7"
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
        "fastestRisingThreat": " \"js.clearfake\"",
        "totalAttacksThisHour": 45895,
        "lastCalculated": "2026-07-13 16:55 IST"
    }
};
