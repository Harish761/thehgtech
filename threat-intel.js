// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-04-11T22:21:47.218514+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-04-11T22:21:46.927623+05:30",
    "lastUpdatedFormatted": "Apr 11, 2026 at 10:21 PM IST",
    "comparisonPeriod": "Apr 10 \u2013 Apr 11, 2026",
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
                "hxxps://mauggz[.]github[.]io/hackbbva2019/",
                "hxxps://www[.]robiox[.]com[.]py/users/282744267386/profile",
                "hxxp://ipfs[.]io/ipfs/bafkreig3dxd35vpz5jwr7nuoqy3r5i5nu63hjdhnxgsi2asikwxhfycgqa",
                "hxxps://www[.]caisse-populaire-secure-log[.]com/connexion",
                "hxxps://www[.]caisse-populaire-secure-log[.]com/"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 505,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 505,
                "newInLastHour": 76,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"211208d79258bd6b8ecba13ed31ab67267d9c2174a981563ec451230570b194b",
                " \"7cfbf7d4e815e03c27b8f2f3326a78edf0f4e8a5800e2bd684162c400dbef97c",
                " \"7d09c7018e432a78f17dfe7eccddecef02e32e6e5ff94d7cd00bb737403bff01",
                " \"6b854b68444cc4b0fe9a3598a7478e5c417ac85d2bf9b44dfe0c45c23e17e73a",
                " \"c503b418230ed224898959e2960b4662b8c69be8bf4f252d0be3df2a51d702c7"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1558,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1558,
                "newInLastHour": 14,
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
                "1[.]10[.]133[.]129",
                "1[.]10[.]185[.]224",
                "1[.]1[.]176[.]58",
                "1[.]15[.]51[.]236",
                "1[.]165[.]184[.]158"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 766,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 766,
                "newInLastHour": 766,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]92[.]125[.]146",
                "1[.]92[.]131[.]22",
                "1[.]92[.]222[.]197",
                "1[.]94[.]226[.]80",
                "1[.]94[.]251[.]25"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 21959,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 21959,
                "newInLastHour": 21959,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxps://cjree[.]brinoxal[.]in[.]net/05fe317c-0981-4de2-bc8a-930d369db441/ck-3d80df5d12cdfe6450a782fc87bf66b444[.]google",
                "hxxp://182[.]124[.]132[.]73:57623/i",
                "hxxps://binaryrapid[.]qelto5rin[.]in[.]net/05fe317c-0981-4de2-bc8a-930d369db441/ck-3d80df5d12cdfe6450a782fc87bf66b444[.]google",
                "hxxp://113[.]69[.]157[.]35:57869/i",
                "hxxp://113[.]69[.]157[.]35:57869/bin[.]sh"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 833,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 833,
                "newInLastHour": 832,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"cjree[.]brinoxal[.]in[.]net\"",
                " \"binaryrapid[.]qelto5rin[.]in[.]net\"",
                " \"comp1le-mesh[.]qelto5rin[.]in[.]net\"",
                " \"ppb9[.]qelto5rin[.]in[.]net\"",
                " \"portalproxy[.]qelto5rin[.]in[.]net\""
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
            "iocCount": 9492,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 9492,
                "newInLastHour": 14,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "c23dec61c90a195517b1a3f585a9792097443d1e",
                "cfcc12d65074e250d9a78b5e3c6f9f8676c32893",
                "8c475e004037f89aef507d1ac97bf45ba952cc80",
                "f803ae013add053d1b0a3a5f1f460d5adb96a6e3",
                "2e15b765de2ed706d93067a04c00d3d19f468d69"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 49615,
            "activeSources": 8,
            "criticalAlerts": 31818,
            "activeCampaigns": 189
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 22318,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "C2",
                "count": 9500,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 304,
                "trend": "stable",
                "percentage": 4
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
                "percentage": 87
            },
            {
                "name": "Tech",
                "percentage": 12
            },
            {
                "name": "Finance",
                "percentage": 0
            }
        ],
        "campaigns": [
            {
                "name": "malware_download",
                "count": 21836,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://112[.]239[.]98[.]137:59676/i",
                    "hxxp://110[.]36[.]15[.]110:56283/i",
                    "hxxps://harvestfern[.]awry-pause[.]in[.]net/05fe317c-0981-4de2-bc8a-930d369db441/ck-3d80df5d12cdfe6450a782fc87bf66b444[.]google"
                ]
            },
            {
                "name": "CINS Threat List",
                "count": 15000,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]10[.]133[.]129",
                    "1[.]10[.]133[.]182",
                    "1[.]1[.]176[.]58"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1577,
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
                "count": 1400,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "05f047ee67a239b926284ff3cafb7edd8af328e0",
                    "c9efd5520dce50014bcd13b73569034d0e3971f2",
                    "e7decd829f1c348a1d04ac6d5ce1470aa2ef4cea"
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
                "count": 669,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "ee4dd385bf849f7621deed67382e64c17b864e20",
                    "3787ee8b1d038bf52620e33956b452f4aa38214f",
                    "f4c8b11947963395a1a1624aa04e8a717693f297"
                ]
            },
            {
                "name": "LummaStealer",
                "count": 552,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "ab7f083d77dc2b1b71c0aec9a417e0a5a036a5f9",
                    "7ce02a4df627573696141e40970ef60e246f9f3f",
                    "f58ffe7484653b53cea539b23da25bc8eeeb2c05"
                ]
            },
            {
                "name": " \"js.clearfake\"",
                "count": 498,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"harvestfern[.]awry-pause[.]in[.]net\"",
                    " \"qyfx7uy[.]awry-pause[.]in[.]net\"",
                    " \"majofres[.]awry-pause[.]in[.]net\""
                ]
            },
            {
                "name": "Vidar",
                "count": 481,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "047f23f9ad2edaa5e34ae660ac30cd4ec5975e18",
                    "19475fe405f20f1a346647ad71edb76bf9640797",
                    "1e7353a4873db7f099b9be0bbcdbd790e9b6014c"
                ]
            },
            {
                "name": "OffLoader",
                "count": 391,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "cfcc12d65074e250d9a78b5e3c6f9f8676c32893",
                    "8c475e004037f89aef507d1ac97bf45ba952cc80",
                    "f803ae013add053d1b0a3a5f1f460d5adb96a6e3"
                ]
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious URLs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": "malware_download",
        "totalAttacksThisHour": 38966,
        "lastCalculated": "2026-04-11 22:21 IST"
    }
};
