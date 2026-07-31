// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-07-31T19:58:58.302582+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-07-31T19:58:57.958320+05:30",
    "lastUpdatedFormatted": "Jul 31, 2026 at 07:58 PM IST",
    "comparisonPeriod": "Jul 30 \u2013 Jul 31, 2026",
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
                "hxxp://www[.]99nt[.]site/",
                "hxxps://451238[.]help/dpd/pl",
                "hxxp://tcy6-1n0-emeco-qbv7ql-qmsr5f[.]pages[.]dev/",
                "hxxp://www[.]fotosdemorrodochapeuba[.]com[.]br/enclosed/confidentiality[.]html",
                "hxxps://stunning-kulfi-78ebef[.]netlify[.]app/"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 722,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 722,
                "newInLastHour": 102,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"e585035f6f125ee2295f123809f7a66110284b1f2aa179387c8d257e0af3ab9c",
                " \"1d53415267784b1e56b7ef6019fffe58ed7df1cdf11b37dfa6f31fa5a935874b",
                " \"ecd6239cfb44faf5588d7d520f25d8f52c3f8e531bd3aa02af757a5463beee5c",
                " \"8f62b015889342eb72b8a3f2a31ec4dd35b72daee866bc75946b814cbad312ae",
                " \"f5652c6d2a20dd1a0571e0556eaa6ba15ffb9500a9ecc3c00c97e79bf4d5d640"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1616,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1616,
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
                "1[.]0[.]164[.]165",
                "1[.]12[.]229[.]231",
                "1[.]140[.]3[.]11",
                "1[.]15[.]24[.]165",
                "1[.]159[.]48[.]69"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 4448,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 4448,
                "newInLastHour": 4448,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]0[.]164[.]165",
                "1[.]12[.]37[.]6",
                "1[.]15[.]103[.]109",
                "1[.]162[.]18[.]135",
                "1[.]192[.]61[.]70"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 15552,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 15552,
                "newInLastHour": 15552,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://46[.]236[.]65[.]141:54492/i",
                "hxxp://110[.]38[.]201[.]196:56049/bin[.]sh",
                "hxxp://110[.]37[.]7[.]53:49904/bin[.]sh",
                "hxxp://221[.]13[.]233[.]182:47487/bin[.]sh",
                "hxxp://115[.]56[.]150[.]63:52973/i"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 5942,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 5942,
                "newInLastHour": 5634,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"palfxxt[.]encompassrealestateschool[.]com\"",
                " \"encompassrealestateschool[.]com\"",
                " \"akhkdv[.]ecopro-edu[.]com\"",
                " \"102[.]117[.]167[.]134:7443\"",
                " \"106[.]14[.]243[.]66:7777\""
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
            "iocCount": 1683,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 1683,
                "newInLastHour": 2,
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
            "totalIndicators": 49127,
            "activeSources": 8,
            "criticalAlerts": 26387,
            "activeCampaigns": 258
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 16138,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "C2",
                "count": 10249,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 3585,
                "trend": "stable",
                "percentage": -3
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
                "count": 15299,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://59[.]97[.]249[.]167:40316/bin[.]sh",
                    "hxxp://125[.]47[.]74[.]250:45378/i",
                    "hxxp://175[.]31[.]188[.]203:48322/i"
                ]
            },
            {
                "name": "CINS Threat List",
                "count": 15000,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]0[.]164[.]165",
                    "1[.]10[.]185[.]51",
                    "1[.]119[.]194[.]226"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1665,
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
                "name": " \"js.iclickfix\"",
                "count": 1448,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"dth[.]travel\"",
                    " \"ecosweetbaby[.]es\"",
                    " \"cooperacionescolar[.]org\""
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
                "count": 1358,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"45[.]87[.]53[.]6:8881\"",
                    " \"45[.]87[.]53[.]6:8887\"",
                    " \"45[.]87[.]53[.]6:8884\""
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
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious URLs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": "malware_download",
        "totalAttacksThisHour": 41043,
        "lastCalculated": "2026-07-31 19:58 IST"
    }
};
