// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2025-12-07T18:23:09.923639+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2025-12-07T18:23:09.571268+05:30",
    "lastUpdatedFormatted": "Dec 07, 2025 at 06:23 PM IST",
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
                "hxxp://aktiffkanpaylatterll[.]meo[.]my[.]id/",
                "hxxps://sgkb-service[.]secppmerchge[.]my/pay/bank/sgkb/uYGnHquk",
                "hxxp://b45094[.]com/fish/255",
                "hxxps://roblox[.]com[.]ge/users/5599452335/profile",
                "hxxp://uphoudxinlogiz[.]godaddysites[.]com/"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 1123,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 1123,
                "newInLastHour": 108,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"61eb1c5f9942b95b8ffbdf2f1267e7719d53c6cb5985d78767ab00c5d0e51cad",
                " \"25c3ea220c5f0184e8221fd462d5ef8265f321b01924bd1f65852d2d759c9635",
                " \"077057533822c920bfde53db38c27cc75cbeb4da989a2efaf2700be57820df7d",
                " \"bfc3ad55703a734b7479f732d00517dd45a8ddc0283eab085561cbc9765d2cce",
                " \"1744e1ba7387a4506980d9cebf5dc9ad46691ed116cd1c146332e2e43413db2e"
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
                "1[.]176[.]134[.]251",
                "1[.]181[.]69[.]174"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 5316,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 5316,
                "newInLastHour": 5316,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]161[.]45[.]32",
                "1[.]194[.]200[.]251",
                "1[.]197[.]102[.]62",
                "1[.]214[.]197[.]163",
                "1[.]214[.]42[.]172"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 30130,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 30130,
                "newInLastHour": 30130,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://62[.]175[.]253[.]38:47568/i",
                "hxxp://152[.]172[.]159[.]99:8080/sshd",
                "hxxp://188[.]29[.]84[.]10:8001/sshd",
                "hxxp://62[.]1[.]24[.]49:54258/i",
                "hxxp://117[.]5[.]15[.]37:37779/sshd"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 910,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 910,
                "newInLastHour": 909,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"hestiapanel[.]xyz\"",
                " \"screenconnect[.]support\"",
                " \"server1magazine[.]com\"",
                " \"myexodus[.]app\"",
                " \"196[.]251[.]100[.]222:4444\""
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
                "newInLastHour": 0,
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
            "totalIndicators": 57264,
            "activeSources": 8,
            "criticalAlerts": 39562,
            "activeCampaigns": 189
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 31014,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "C2",
                "count": 8548,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 635,
                "trend": "stable",
                "percentage": 6
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
                "count": 29902,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://123[.]4[.]222[.]105:60160/i",
                    "hxxp://42[.]180[.]14[.]40:36769/i",
                    "hxxp://110[.]39[.]235[.]153:44687/i"
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
                "count": 637,
                "types": [
                    "hash"
                ],
                "sampleIndicators": [
                    " \"254e9599461db82a9688a4139f2fd0c022ca70916f6f2bbf481738628cf45c49",
                    " \"7754b081f9bd1245403f7f2f55da6011799107ca4828a41f51d394c66fe3ff6f",
                    " \"93c72c14a641ece969328d2fd80007bf30fa21d49a11d56b14897a2986ef2fa3"
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
        "totalAttacksThisHour": 51767,
        "lastCalculated": "2025-12-07 18:23 IST"
    }
};
