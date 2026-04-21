// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-04-21T19:34:55.590544+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-04-21T19:34:55.290556+05:30",
    "lastUpdatedFormatted": "Apr 21, 2026 at 07:34 PM IST",
    "comparisonPeriod": "Apr 20 \u2013 Apr 21, 2026",
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
                "hxxps://www[.]llojin-mettaamak-uk[.]godaddysites[.]com/",
                "hxxps://ze2413[.]craftum[.]io/",
                "hxxp://www[.]cutt[.]ly/AtJtyUqk/",
                "hxxps://dpd[.]parvira[.]cfd/com/",
                "hxxps://wbsport[.]org/"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 765,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 765,
                "newInLastHour": 78,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"d50686e19bdac5b20800e9d13b9e7d0c3d7b1d852aba483f3301c65eab557c07",
                " \"f2851b57336b42164ce2acf5cf3a4dc0a60e4948568bfe7bb4f9a9ec7fb27aa0",
                " \"1a6007307eec998d554df1e2696a2d3e9bbea28a8a0c28768fa72f6ea909b9cd",
                " \"83d6ea067b62354130a50ab0a98d035ed488d84a4be9149968b4e8a4ee4ac5c5",
                " \"c48984951740e81969cadede474bc3330821987e4c7d7b84102a18c1b9ee9d37"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1588,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1588,
                "newInLastHour": 38,
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
                "1[.]14[.]181[.]94",
                "1[.]15[.]133[.]19",
                "1[.]159[.]57[.]154",
                "1[.]176[.]118[.]246",
                "1[.]176[.]238[.]107"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 4295,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 4295,
                "newInLastHour": 4295,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]0[.]164[.]165",
                "1[.]12[.]255[.]199",
                "1[.]14[.]181[.]94",
                "1[.]20[.]174[.]45",
                "1[.]214[.]117[.]218"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 26137,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 26137,
                "newInLastHour": 26137,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxps://63teisp[.]to4ramel[.]in[.]net/05fe317c-0981-4de2-bc8a-930d369db441/ck-3d80df5d12cdfe6450a782fc87bf66b444[.]google",
                "hxxps://hyperpul[.]to4ramel[.]in[.]net/05fe317c-0981-4de2-bc8a-930d369db441/ck-3d80df5d12cdfe6450a782fc87bf66b444[.]google",
                "hxxp://182[.]121[.]177[.]34:57500/i",
                "hxxp://182[.]121[.]177[.]34:57500/bin[.]sh",
                "hxxps://norspireum6[.]sylov9er[.]in[.]net/05fe317c-0981-4de2-bc8a-930d369db441/ck-3d80df5d12cdfe6450a782fc87bf66b444[.]google"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 1003,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 1003,
                "newInLastHour": 1003,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"talmeshis7[.]to4ramel[.]in[.]net\"",
                " \"old[.]cosmo[.]com[.]ge\"",
                " \"63teisp[.]to4ramel[.]in[.]net\"",
                " \"nokenmuliatama[.]co[.]id\"",
                " \"hyperpul[.]to4ramel[.]in[.]net\""
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
            "iocCount": 9629,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 9629,
                "newInLastHour": 53,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "9f7fd5816e0bf900bc5142ef5f6f1e9c0fb2cfdf",
                "b93106e8ef0b4d3e5d113dc064bfbba32ec861ae",
                "1773a4873e2b502598f3173dcd3438d5794d2470",
                "9f6a81c2f6dfe7c32948af71c6b834876847b7d7",
                "8ab957510922dd34aa1983008e81b837d0dfcea3"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 54282,
            "activeSources": 8,
            "criticalAlerts": 36319,
            "activeCampaigns": 184
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 26765,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "C2",
                "count": 9554,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Phishing",
                "count": 339,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 220,
                "trend": "up",
                "percentage": 11
            }
        ],
        "targetedSectors": [
            {
                "name": "General",
                "percentage": 81
            },
            {
                "name": "Tech",
                "percentage": 18
            },
            {
                "name": "Finance",
                "percentage": 0
            },
            {
                "name": "Government",
                "percentage": 0
            }
        ],
        "campaigns": [
            {
                "name": "malware_download",
                "count": 26027,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxps://realfa-ct3[.]wi3sorim[.]in[.]net/05fe317c-0981-4de2-bc8a-930d369db441/ck-3d80df5d12cdfe6450a782fc87bf66b444[.]google",
                    "hxxp://182[.]121[.]158[.]55:33054/bin[.]sh",
                    "hxxps://best-time2[.]wi3sorim[.]in[.]net/05fe317c-0981-4de2-bc8a-930d369db441/ck-3d80df5d12cdfe6450a782fc87bf66b444[.]google"
                ]
            },
            {
                "name": "CINS Threat List",
                "count": 15000,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]14[.]181[.]94",
                    "1[.]15[.]51[.]236",
                    "1[.]159[.]57[.]154"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1550,
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
                "count": 1406,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "eb1d7370d422c478efcaad0a0c7c2a7baacc2455",
                    "5b20fb9d9a21e7a5d4be3b3a83063e9b3172d35d",
                    "021068795797aa6c83cb175fed0fc5da9247e7ca"
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
                "count": 673,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "bb085af0610557f877683616d87b7345b59c4f54",
                    "f78be258c92a94888f2e283ddb807dcc22689c86",
                    "e0127cb029c9d3778d15d3948b41ecdc8b44fb03"
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
                "name": " \"js.clearfake\"",
                "count": 518,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"just-ta-lk5[.]wi3sorim[.]in[.]net\"",
                    " \"niceshot4[.]wi3sorim[.]in[.]net\"",
                    " \"realfa-ct3[.]wi3sorim[.]in[.]net\""
                ]
            },
            {
                "name": "Vidar",
                "count": 488,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "8ab957510922dd34aa1983008e81b837d0dfcea3",
                    "56df82cc0b474c9cc9343756093fec855746f664",
                    "0c98eb275733094129754fccb3af42479b5fcdc9"
                ]
            },
            {
                "name": "OffLoader",
                "count": 396,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "b977e869e493f70b3e7914a1eaa6abe2cc1ea04a",
                    "e7af95eaaa4c87398f4c4c80a66972f342bb3328",
                    "037598803e2603499edbf7275e43f7dd82abd8f3"
                ]
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious URLs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": "SSH Attacks",
        "totalAttacksThisHour": 46909,
        "lastCalculated": "2026-04-21 19:34 IST"
    }
};
