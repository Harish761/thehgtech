// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2025-12-07T00:18:31.256348+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2025-12-07T00:18:30.903816+05:30",
    "lastUpdatedFormatted": "Dec 07, 2025 at 12:18 AM IST",
    "comparisonPeriod": "Dec 06 \u2013 Dec 07, 2025",
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
                "hxxps://cn[.]plhhovyj[.]com/home/register",
                "hxxp://jixunjidian_com[.]51tiantian[.]com/",
                "hxxp://security-base-pro[.]daftpage[.]com/",
                "hxxp://roblox[.]com[.]ml/communities/5549878422/BrokenWand",
                "hxxp://b45030[.]com/poker/125"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 1136,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 1136,
                "newInLastHour": 143,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"d21d740522612a0a16de245eaecc17ec0f34520055c1a75b706187632c777b72",
                " \"6ce90d06651405ce42e30a0b9573337663689d020925e85a0015460ac52b90da",
                " \"4e3ad44b1299ddc873e17d5730f7f89e49cdf340dda126a6f9346fd342b2e2e5",
                " \"7c16bcd6ebf34b37190ae1e1fd854a8f6ea5a9cd61663df8a81816a96ab58ee3",
                " \"92db700af734af799d2e3a8ab2986081c195b50d96df826f34dd7c0c617864c8"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1495,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1495,
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
                "1[.]117[.]17[.]128",
                "1[.]15[.]118[.]23",
                "1[.]15[.]20[.]205",
                "1[.]176[.]134[.]242",
                "1[.]176[.]134[.]253"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 5300,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 5300,
                "newInLastHour": 5300,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]13[.]19[.]219",
                "1[.]161[.]45[.]32",
                "1[.]194[.]200[.]251",
                "1[.]214[.]197[.]163",
                "1[.]214[.]42[.]172"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 30360,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 30360,
                "newInLastHour": 30360,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://123[.]14[.]33[.]101:54339/bin[.]sh",
                "hxxp://182[.]116[.]116[.]198:38091/i",
                "hxxp://37[.]80[.]248[.]217/info[.]zip",
                "hxxp://176[.]117[.]107[.]154/bot",
                "hxxp://115[.]50[.]35[.]250:47918/i"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 965,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 965,
                "newInLastHour": 964,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"167[.]172[.]230[.]77:7443\"",
                " \"160[.]187[.]146[.]97:8080\"",
                " \"125[.]208[.]23[.]139:6666\"",
                " \"windowsnet[.]no-ip[.]org\"",
                " \"192[.]163[.]166[.]13:6669\""
            ]
        },
        "Feodo Tracker": {
            "description": "Botnet C2 server IPs from Feodo Tracker. Tracks Dridex, Emotet, TrickBot, QakBot, and BazarLoader.",
            "website": "https://feodotracker.abuse.ch/",
            "updateFrequency": "Hourly",
            "iocCount": 4,
            "iocDataUrl": "https://thehgtech.com/ioc-data/feodo-tracker.json",
            "stats": {
                "total": 4,
                "newInLastHour": 4,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "15[.]204[.]219[.]215",
                "152[.]89[.]239[.]34",
                "162[.]243[.]103[.]246",
                "51[.]210[.]96[.]48"
            ]
        },
        "SSL Blacklist": {
            "description": "Malicious SSL certificates used by botnet C2 servers. Helps detect encrypted malware communications.",
            "website": "https://sslbl.abuse.ch/",
            "updateFrequency": "Daily",
            "iocCount": 8571,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 8571,
                "newInLastHour": 1,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "573b729fac950570e3b37f6f69ec60bcae56b291",
                "bcff15c3732ad29938bb25474575c474b851de6b",
                "5e107e22cbc63bac0f4579c8b89222e351a5f2e1",
                "50384516c719adc002e99ca4b1cc4e34477ba63e",
                "decfd4408f420a95c3121f8222b9af125e2a10d6"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 57417,
            "activeSources": 8,
            "criticalAlerts": 39659,
            "activeCampaigns": 184
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 31112,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "C2",
                "count": 8547,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 619,
                "trend": "stable",
                "percentage": 3
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
                "count": 30018,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://42[.]231[.]115[.]59:51932/bin[.]sh",
                    "hxxp://170[.]205[.]54[.]44/dlr[.]arm5",
                    "hxxp://170[.]205[.]54[.]44/dlr[.]mips"
                ]
            },
            {
                "name": "CINS Threat List",
                "count": 15000,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]117[.]17[.]128",
                    "1[.]15[.]118[.]23",
                    "1[.]15[.]20[.]205"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1495,
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
                "count": 1357,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "463d2faa6b38a16140bc5dc7cfbffc6c5d30761c",
                    "3581e9cc8d250929c19ac08fd592430cd63145ba",
                    "1af063753cd3a9491c82807c3e25f805519c6e5a"
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
                "name": " \"Mirai",
                "count": 695,
                "types": [
                    "hash"
                ],
                "sampleIndicators": [
                    " \"e451fca4f10b962a8d276055bc847e001245b2a6cc96d1375eaa6e33ec37611f",
                    " \"83713aac9deadc3a3c29fabd776f1261443c3725b9a9138992458b12dc487a59",
                    " \"8ae183bec69f8243bb132313b550584895284dd88df42e4e19f2d7c5ddfe4064"
                ]
            },
            {
                "name": "QuasarRAT",
                "count": 593,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "5d5c32a9bf92da1d16d0558ed2ed9f19c821c8a9",
                    "31e9cb5ace32adba5c43bce257a6396f9fa0f21c",
                    "9432f61b3afd49f0c35b548b09db103221d9b8c5"
                ]
            },
            {
                "name": "LummaStealer",
                "count": 533,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "1d28cc6dca52e95f859739c39a04d794671f66d9",
                    "7b7c48a7d10c11ab988801fec68db41f6935ecf4",
                    "b57cc0f34294222d350c45d62c735547c8882195"
                ]
            },
            {
                "name": "Rhadamanthys",
                "count": 355,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "f999c0da0e983becc1c935444c5e609be26b0bcf",
                    "4101579ae950c954fc1096adf43bdefcf0364cfd",
                    "0c3ee8188ce35b6bb11d5b12a0e1e28310188b4e"
                ]
            },
            {
                "name": "Gozi",
                "count": 349,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "61d991d7063e5e7470daa3059357f8282e680bb7",
                    "68b4fc7da837c64332b9f019adaef4c7038ec85d",
                    "e0f7072057c5deeb21c598673740debc7f6eb8a1"
                ]
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious URLs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": "malware_download",
        "totalAttacksThisHour": 52072,
        "lastCalculated": "2025-12-07 00:18 IST"
    }
};
