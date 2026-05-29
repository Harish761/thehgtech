// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-05-29T10:07:32.333506+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-05-29T10:07:32.020878+05:30",
    "lastUpdatedFormatted": "May 29, 2026 at 10:07 AM IST",
    "comparisonPeriod": "May 28 \u2013 May 29, 2026",
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
                "hxxps://lnsta[.]fr/",
                "hxxp://flverr-verlflcation[.]com/work/verifyfreelancer",
                "hxxp://req-sup405902[.]lol/view/es",
                "hxxps://heritagetimileyin85-cloud[.]github[.]io/Live-Coding-Test-One",
                "hxxp://jaswanthlakshman[.]github[.]io/NetflixClone"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 1114,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 1114,
                "newInLastHour": 114,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"5bf2945ceaaac681fad1b9b999c6620ce8393f919179ce6ca0fef5b411e984e5",
                " \"2b38bbb299bb43147a122f896e4e4876ea8b40c453110954961019681fef915a",
                " \"71d6805debf8fe437b557565a9e67b47bd153f27a08190f89d55a8efe0cbd92d",
                " \"16520f80193c6e45d207ac0ffad8b29446194ad9734d7ee2ea8178f91eacf491",
                " \"79a064badf89f022b2ee3eee90c03f4a204cc5c84940db761ea4caf61ab38bd3"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1598,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1598,
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
                "1[.]1[.]223[.]16",
                "1[.]162[.]111[.]181",
                "1[.]162[.]93[.]188",
                "1[.]176[.]118[.]246",
                "1[.]180[.]153[.]254"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 5649,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 5649,
                "newInLastHour": 5649,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]0[.]164[.]165",
                "1[.]12[.]217[.]80",
                "1[.]192[.]191[.]10",
                "1[.]194[.]210[.]131",
                "1[.]202[.]220[.]94"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 20858,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 20858,
                "newInLastHour": 20858,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://125[.]43[.]41[.]122:59491/i",
                "hxxp://115[.]58[.]146[.]33:49046/i",
                "hxxp://125[.]24[.]10[.]235:55112/bin[.]sh",
                "hxxps://zntck[.]sm188dvlv[.]cfd/500c64d4-983b-40aa-9359-7b4041d6bb4b",
                "hxxp://125[.]41[.]226[.]141:42362/i"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 3371,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 3371,
                "newInLastHour": 3352,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"cash-win[.]nl\"",
                " \"zntck[.]sm188dvlv[.]cfd\"",
                " \"aonsz[.]sm188dvlv[.]cfd\"",
                " \"nwtca6gs[.]schleer[.]hu\"",
                " \"wh1523s7[.]schleer[.]hu\""
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
            "iocCount": 9754,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 9754,
                "newInLastHour": 5,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "8e733b34e95a7b98ada40292b8d35e9040016e65",
                "4b19add85966daaef23fdea4c1527633a36a88ba",
                "9c5605a73a159de919523a8f844814d47e79a321",
                "1fe4d1c9b7106f25e606894cb6a64f69c4862b29",
                "5d7baf5503517e28f05467332d905eb8193e651b"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 52698,
            "activeSources": 8,
            "criticalAlerts": 32439,
            "activeCampaigns": 211
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 22647,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "C2",
                "count": 9792,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 2913,
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
                "count": 21579,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://182[.]116[.]114[.]173:33396/bin[.]sh",
                    "hxxps://akfzi[.]lampaoszlopbolt[.]hu/273e0892-e361-4cb3-8939-92155a5f924b",
                    "hxxps://hxoaa2b8[.]parossag[.]hu/?ublib=bc6bae50-fdba-48c1-bcdb-429c08d10540"
                ]
            },
            {
                "name": "CINS Threat List",
                "count": 15000,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]1[.]223[.]16",
                    "1[.]15[.]14[.]29",
                    "1[.]162[.]111[.]181"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1606,
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
                    " \"1364170351-gsw88cee73[.]ap-guangzhou[.]tencentscf[.]com\"",
                    " \"185[.]89[.]222[.]133:8443\"",
                    " \"120[.]48[.]66[.]205:443\""
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
                "count": 682,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "8e733b34e95a7b98ada40292b8d35e9040016e65",
                    "9f0d33c1eaa7afd41009d0ec594c0a408d2df123",
                    "493f6dbb48806992e524df2a3a0fa0348cef243b"
                ]
            },
            {
                "name": " \"Mirai",
                "count": 560,
                "types": [
                    "hash"
                ],
                "sampleIndicators": [
                    " \"95f8631c837e2150fec4be8df4e20647cc4aec92720b7cbb934839bbc1da96a5",
                    " \"f12d8e4ddbc7fa3559bc0c0bedd96f73faf26466d0a9062164467e5023e1e341",
                    " \"ba8869584ba8cb931623debe6f6755208e19546474a2d155f5cb664d0acf6604"
                ]
            },
            {
                "name": "Vidar",
                "count": 557,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "4b19add85966daaef23fdea4c1527633a36a88ba",
                    "2de4fd0094bc96c8339f3b8c67985f8a7b89b84a",
                    "1b697067f699bc99bf6a48d003bfd9c9b289450d"
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
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious URLs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": " \"Mirai",
        "totalAttacksThisHour": 45283,
        "lastCalculated": "2026-05-29 10:07 IST"
    }
};
