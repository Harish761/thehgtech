// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-04-11T18:49:21.422725+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-04-11T18:49:21.104628+05:30",
    "lastUpdatedFormatted": "Apr 11, 2026 at 06:49 PM IST",
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
            "iocCount": 456,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 456,
                "newInLastHour": 96,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"1649aa15ff4adf65fafcaab19122796b23a21f506e6f3fe74d029483a8d166e9",
                " \"03e99f0b808938dbed94635c8385b2830c6d4cd01388511176c91a3c38aa02d0",
                " \"dee1f9121f3a6682101389f432b4dee709507f7ace0a21d9cdbe373a40998e73",
                " \"e3c741645c81ba04a1ce8095dce081f7452b67bf2927fe23e0d68d4f7021754b",
                " \"d4c0ad704d63fb6a994ac68a5f3cde09819118a8d4d801b22bdf5563d467a6fa"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1577,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1577,
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
                "1[.]10[.]133[.]129",
                "1[.]10[.]133[.]182",
                "1[.]1[.]176[.]58",
                "1[.]165[.]184[.]158",
                "1[.]180[.]153[.]254"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 797,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 797,
                "newInLastHour": 797,
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
            "iocCount": 21836,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 21836,
                "newInLastHour": 21836,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://112[.]239[.]98[.]137:59676/i",
                "hxxp://110[.]36[.]15[.]110:56283/i",
                "hxxps://harvestfern[.]awry-pause[.]in[.]net/05fe317c-0981-4de2-bc8a-930d369db441/ck-3d80df5d12cdfe6450a782fc87bf66b444[.]google",
                "hxxps://qyfx7uy[.]awry-pause[.]in[.]net/05fe317c-0981-4de2-bc8a-930d369db441/ck-3d80df5d12cdfe6450a782fc87bf66b444[.]google",
                "hxxp://110[.]38[.]201[.]196:54293/i"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 919,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 919,
                "newInLastHour": 918,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"harvestfern[.]awry-pause[.]in[.]net\"",
                " \"hxxp://a1156871[.]xsph[.]ru/c693e2aa[.]php\"",
                " \"qyfx7uy[.]awry-pause[.]in[.]net\"",
                " \"hxxps://dreff-nsdns[.]beer/api/css[.]js\"",
                " \"dreff-nsdns[.]beer\""
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
            "iocCount": 9522,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 9522,
                "newInLastHour": 0,
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
            "totalIndicators": 49429,
            "activeSources": 8,
            "criticalAlerts": 31612,
            "activeCampaigns": 189
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 22098,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "C2",
                "count": 9514,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Phishing",
                "count": 301,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 290,
                "trend": "up",
                "percentage": 33
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
                "count": 21654,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://outel[.]linchens[.]com/i686",
                    "hxxp://linchens[.]com/mipsel",
                    "hxxp://linchens[.]com/ppc"
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
                "count": 1591,
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
                "count": 1402,
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
                "count": 670,
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
                "count": 553,
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
                "count": 511,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"gate6-way[.]solid-build-trace[.]in[.]net\"",
                    " \"svc5-relay[.]solid-build-trace[.]in[.]net\"",
                    " \"vault4-root[.]solid-build-trace[.]in[.]net\""
                ]
            },
            {
                "name": "Vidar",
                "count": 484,
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
                "count": 392,
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
        "totalAttacksThisHour": 38952,
        "lastCalculated": "2026-04-11 18:49 IST"
    }
};
