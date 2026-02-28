// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-03-01T00:26:14.283256+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-03-01T00:26:14.002887+05:30",
    "lastUpdatedFormatted": "Mar 01, 2026 at 12:26 AM IST",
    "comparisonPeriod": "Feb 28 \u2013 Mar 01, 2026",
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
                "hxxps://stearmconmumniity[.]com/trade0ffers/new/partners=91874352pg9&token=HBjro030",
                "hxxps://dklatin[.]github[.]io/Facebook-Signup/",
                "hxxp://webaccess-email[.]mx/2513501[.]doc/18a80a/fad0f483-81b2-45c6-ad47-7272058d9cb6",
                "hxxps://instagram-clone-mu[.]vercel[.]app/",
                "hxxp://stecmcommnuily[.]com/tradeoffer/new/?partner=1026581594"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 837,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 837,
                "newInLastHour": 8,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"25d1cfe16ffa3f9107b5aa906fa23123a0e3035747cf8a070f83a9597b05147e",
                " \"d1bb4c74113654b35bc47415ab2b738a29171e12021461e7f2e3e331bc3b6e5a",
                " \"b1bb2b68a28ca28c0d31ced9558df53275a7afe97985dbf4d636c342f81ae12e",
                " \"4725da7cba1776e1e67297318988f98b222a338628e0eb3c4803df3012fb1f61",
                " \"ab358e2167c874c048d23c7d6ca3646f403b84c5321f56230d8362f36d98a146"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1518,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1518,
                "newInLastHour": 2,
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
                "1[.]14[.]3[.]240",
                "1[.]15[.]116[.]189",
                "1[.]170[.]61[.]110",
                "1[.]176[.]134[.]238",
                "1[.]176[.]134[.]241"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 6248,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 6248,
                "newInLastHour": 6248,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]194[.]233[.]49",
                "1[.]214[.]117[.]218",
                "1[.]214[.]197[.]163",
                "1[.]214[.]42[.]172",
                "1[.]220[.]64[.]218"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 22226,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 22226,
                "newInLastHour": 22226,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://59[.]182[.]119[.]128:2000/sshd",
                "hxxp://14[.]236[.]247[.]68/sshd",
                "hxxp://120[.]157[.]72[.]59:85/sshd",
                "hxxp://120[.]157[.]72[.]59:86/sshd",
                "hxxp://95[.]127[.]248[.]192:9000/sshd"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 621,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 621,
                "newInLastHour": 621,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"130[.]12[.]180[.]171:45\"",
                " \"hxxps://walwood[.]be/\"",
                " \"94[.]154[.]35[.]160:82\"",
                " \"218[.]255[.]179[.]148:36089\"",
                " \"162[.]245[.]218[.]27:4444\""
            ]
        },
        "Feodo Tracker": {
            "description": "Botnet C2 server IPs from Feodo Tracker. Tracks Dridex, Emotet, TrickBot, QakBot, and BazarLoader.",
            "website": "https://feodotracker.abuse.ch/",
            "updateFrequency": "Hourly",
            "iocCount": 3,
            "iocDataUrl": "https://thehgtech.com/ioc-data/feodo-tracker.json",
            "stats": {
                "total": 3,
                "newInLastHour": 3,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "162[.]243[.]103[.]246",
                "178[.]62[.]3[.]223",
                "34[.]204[.]119[.]63"
            ]
        },
        "SSL Blacklist": {
            "description": "Malicious SSL certificates used by botnet C2 servers. Helps detect encrypted malware communications.",
            "website": "https://sslbl.abuse.ch/",
            "updateFrequency": "Daily",
            "iocCount": 9108,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 9108,
                "newInLastHour": 2,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "71d30109639e95033261ac02f9af0383f116b04d",
                "15f062f1105b3c69d4115feb35fa8a012b9e44bf",
                "f1bc1295c44190efd73ccd02bf1a141c6d734103",
                "842225ef85c564000eadbdb8c1a0d60ef0133df5",
                "ae8015c70ccb9dc07b523bf3e5888e199591c9b3"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 49549,
            "activeSources": 8,
            "criticalAlerts": 32094,
            "activeCampaigns": 215
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 23006,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "C2",
                "count": 9088,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 444,
                "trend": "stable",
                "percentage": -1
            },
            {
                "category": "Phishing",
                "count": 301,
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
            },
            {
                "name": "Government",
                "percentage": 0
            }
        ],
        "campaigns": [
            {
                "name": "malware_download",
                "count": 22137,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://119[.]185[.]142[.]84:34281/bin[.]sh",
                    "hxxps://kn1kwx56[.]chromepepsi[.]digital/?=check&&actmn=hHRTlUlMnnyUpwMl",
                    "hxxp://182[.]126[.]120[.]247:51170/i"
                ]
            },
            {
                "name": "CINS Threat List",
                "count": 15000,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]14[.]3[.]240",
                    "1[.]15[.]116[.]189",
                    "1[.]170[.]61[.]110"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1532,
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
                "count": 1385,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "08ed72afb9e65a6b0c216c2f47dfea81d64c9289",
                    "41fe5784b1b9003fee99a449d0d7b6fa0ce038fe",
                    "77df442635ce9bc4827eb251951620ad789ffadb"
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
                "count": 627,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "1489745b5c5f066b8beaec7181567513ca9eafd2",
                    "a49ad700b0042b6d1e20153a6253bcc8ff17cff2",
                    "56dd33cfae66685bb9cf7f923d6e6752ff791705"
                ]
            },
            {
                "name": "LummaStealer",
                "count": 537,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "2987e30402370bdcbf291aedc9cd52a9a79bda0c",
                    "6fd95f4a2d9cec238cbe2e1756890381c4fae3cb",
                    "e2293f74d8d72bde90bb0424038259a9e3126e1b"
                ]
            },
            {
                "name": "Vidar",
                "count": 378,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "f1bc1295c44190efd73ccd02bf1a141c6d734103",
                    "3257aeb7699555559ab3f9b109e2c761e7939389",
                    "567366638bf367630666c5ae9af1421fb2248f87"
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
        "totalAttacksThisHour": 44410,
        "lastCalculated": "2026-03-01 00:26 IST"
    }
};
