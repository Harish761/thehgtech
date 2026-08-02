// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-08-02T19:17:34.363372+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-08-02T19:17:34.088643+05:30",
    "lastUpdatedFormatted": "Aug 02, 2026 at 07:17 PM IST",
    "comparisonPeriod": "Aug 01 \u2013 Aug 02, 2026",
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
                "hxxps://kkkksgsgdfdjfdhhfdhlhdflhxkkkk-dpxklwputyu8[.]edgeone[.]dev/index[.]html",
                "hxxp://sp4ct-xardevik-biz8-surem-falon[.]pages[.]dev/",
                "hxxp://xefinity[.]weebly[.]com/",
                "hxxps://www[.]roblox[.]com[.]bi/users/960976628439/profile",
                "hxxp://updatecomcastt[.]weebly[.]com/"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 565,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 565,
                "newInLastHour": 30,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"aeccec1db608341f32794d878b5fdb05d9f1194aec5a92142c60076dbf8c214a",
                " \"07c1e3de8f2346a60540a39925e97ba4f9825b74ce249fdfa8ebb69fc3804b43",
                " \"71f17c5e06548f128eb4f0cfafd247cc79894331f996c383fa5c2bcddfe9c5b8",
                " \"82bf3b4f90f617c0ed61d79e84dd2bf0672c6809993864d9e1c5a17125b60904",
                " \"9c0c712eb0969125e49ae2b43154bac9efa4617445de55696cb2bbad70fad02c"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1664,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1664,
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
                "1[.]159[.]48[.]69",
                "1[.]159[.]88[.]4",
                "1[.]192[.]179[.]232",
                "1[.]193[.]63[.]11"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 4447,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 4447,
                "newInLastHour": 4447,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]0[.]164[.]165",
                "1[.]12[.]37[.]6",
                "1[.]162[.]18[.]135",
                "1[.]192[.]61[.]70",
                "1[.]204[.]206[.]182"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 15138,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 15138,
                "newInLastHour": 15138,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxps://directdownloadl[.]ink/f/5239f7a9c7ae[.]exe",
                "hxxps://directdownloadl[.]ink/f/aca7ebab32cd[.]bat",
                "hxxps://directdownloadl[.]ink/f/0713a6e9e059[.]apk",
                "hxxps://directdownloadl[.]ink/f/452f5657e973[.]zip",
                "hxxps://safeuploadz[.]com/uploads/6a4b9d67c109e[.]exe"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 4236,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 4236,
                "newInLastHour": 4003,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"dggcsaj[.]jeuxdedragonballz[.]net\"",
                " \"hgmydz[.]jackpot888[.]de[.]com\"",
                " \"jeuxdedragonballz[.]net\"",
                " \"jackpot888[.]de[.]com\"",
                " \"hxxp://topxgax[.]click:4930\""
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
            "iocCount": 10273,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 10273,
                "newInLastHour": 0,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "014d51d79c5a5c80042abedb35231581ff07c2e7",
                "ed0d4b2a9c090b6af6c99fd5b899831da206d835",
                "7767913e33fac1ed9c448460267ca0e6cbe627b4",
                "fe50e363165e3e8d789daf4dc378f50a70f35a8a",
                "16fbb45457a2d8e67c556db46e051893917e2104"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 47271,
            "activeSources": 8,
            "criticalAlerts": 25821,
            "activeCampaigns": 231
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 15570,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "C2",
                "count": 10251,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 3540,
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
                "name": "CINS Threat List",
                "count": 15000,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]119[.]194[.]226",
                    "1[.]15[.]82[.]219",
                    "1[.]188[.]101[.]44"
                ]
            },
            {
                "name": "malware_download",
                "count": 14925,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://115[.]57[.]193[.]56:48546/i",
                    "hxxp://163[.]142[.]86[.]97:35671/i",
                    "hxxp://112[.]248[.]81[.]241:59045/i"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1664,
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
                "count": 1433,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "67044f9079f804d4a6217093c679897fec1f90e2",
                    "c7ec4c2fa1678702ae684a069cf37a4eef16ef27",
                    "4e5b7b186ad51a93d4e1ba0e2b5ca006b62571be"
                ]
            },
            {
                "name": " \"win.cobalt_strike\"",
                "count": 1389,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"156[.]224[.]18[.]21:8020\"",
                    " \"156[.]224[.]18[.]21:8000\"",
                    " \"156[.]224[.]18[.]21:110\""
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
                "count": 660,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "014d51d79c5a5c80042abedb35231581ff07c2e7",
                    "ed0d4b2a9c090b6af6c99fd5b899831da206d835",
                    "7767913e33fac1ed9c448460267ca0e6cbe627b4"
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
                "count": 448,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "820cd09994b3e76f6e89926a4b94ec0ccacd888c",
                    "5dc598df9a1f9cf893ce86b54f8be517475d1ff9",
                    "50cad154b9d5fdd19c3f67162257de03d3a6afcd"
                ]
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious IPs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": "malware_download",
        "totalAttacksThisHour": 38923,
        "lastCalculated": "2026-08-02 19:17 IST"
    }
};
