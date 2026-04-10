// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-04-10T19:14:08.427902+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-04-10T19:14:08.134526+05:30",
    "lastUpdatedFormatted": "Apr 10, 2026 at 07:14 PM IST",
    "comparisonPeriod": "Apr 09 \u2013 Apr 10, 2026",
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
                "hxxp://acount[.]apple-severs[.]xyz/signIn/jp-ja/shop/TP4fUx7y6",
                "hxxps://layanan-shopee44[.]blogspot[.]com/",
                "hxxps://www[.]layanan-shopee44[.]blogspot[.]com/",
                "hxxps://kksave[.]com/open/ig/3871654311691917165/DW64RVlgZdt",
                "hxxps://www[.]kkinstagram[.]com/reel/DW64RVlgZdt/?igsh=MWhoeW1vY2Z5dzdrcg=="
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 533,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 533,
                "newInLastHour": 33,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"1d68dd9508577016d36cb36f6549502c5fc23448d5eaf64d8ed4b02b39801a4b",
                " \"7d73b78095f105c41eb95557f7e1f2c74799cd5612c51527e006ee4001800875",
                " \"2945f83d506dd5ad780761bb0c39cbb12a92ebec58106f609d1878d431594a9c",
                " \"d02be191dd30b0fad226464f414a4e1f531755bc95d098278cf85cc3dba27c52",
                " \"2bf13139147b91a0383143cf7506baafea322df1c33a8bcee0254f0887e74de7"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1534,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1534,
                "newInLastHour": 8,
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
                "1[.]159[.]69[.]241",
                "1[.]173[.]103[.]51",
                "1[.]183[.]0[.]10",
                "1[.]192[.]179[.]172",
                "1[.]192[.]207[.]2"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 1032,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 1032,
                "newInLastHour": 1032,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]0[.]164[.]165",
                "1[.]54[.]84[.]154",
                "1[.]65[.]137[.]250",
                "1[.]92[.]125[.]146",
                "1[.]92[.]131[.]22"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 21605,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 21605,
                "newInLastHour": 21605,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://62[.]60[.]226[.]159/kk[.]exe",
                "hxxp://113[.]94[.]31[.]231:56330/i",
                "hxxps://tradesyn[.]plix9anor[.]in[.]net/05fe317c-0981-4de2-bc8a-930d369db441/ck-3d80df5d12cdfe6450a782fc87bf66b444[.]google",
                "hxxp://39[.]74[.]98[.]237:51262/i",
                "hxxps://neuralvau[.]plix9anor[.]in[.]net/05fe317c-0981-4de2-bc8a-930d369db441/ck-3d80df5d12cdfe6450a782fc87bf66b444[.]google"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 891,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 891,
                "newInLastHour": 885,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"velvale7on[.]vortaqen[.]in[.]net\"",
                " \"tradesyn[.]plix9anor[.]in[.]net\"",
                " \"neuralvau[.]plix9anor[.]in[.]net\"",
                " \"4zure-hold[.]plix9anor[.]in[.]net\"",
                " \"v31vet0-sheet[.]plix9anor[.]in[.]net\""
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
            "iocCount": 9465,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 9465,
                "newInLastHour": 0,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "64887c68018383ce388d77b04d08fd918f97b3c1",
                "ee4dd385bf849f7621deed67382e64c17b864e20",
                "05f047ee67a239b926284ff3cafb7edd8af328e0",
                "3787ee8b1d038bf52620e33956b452f4aa38214f",
                "047f23f9ad2edaa5e34ae660ac30cd4ec5975e18"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 49403,
            "activeSources": 8,
            "criticalAlerts": 31648,
            "activeCampaigns": 192
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 22140,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "C2",
                "count": 9508,
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
                "count": 286,
                "trend": "down",
                "percentage": -30
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
                "count": 21519,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://122[.]151[.]156[.]198:57421/bin[.]sh",
                    "hxxps://scenevivid[.]honeupwar[.]in[.]net/05fe317c-0981-4de2-bc8a-930d369db441/ck-3d80df5d12cdfe6450a782fc87bf66b444[.]google",
                    "hxxp://27[.]215[.]126[.]166:53120/i"
                ]
            },
            {
                "name": "CINS Threat List",
                "count": 15000,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]123[.]227[.]253",
                    "1[.]159[.]69[.]241",
                    "1[.]173[.]103[.]51"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1583,
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
                "count": 485,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"scenevivid[.]honeupwar[.]in[.]net\"",
                    " \"rapivelv[.]honeupwar[.]in[.]net\"",
                    " \"jv0nel9[.]pampushkatimp[.]in[.]net\""
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
                "count": 389,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "e0a27ce50876b546c868d31dc2dc7a5688e4af9d",
                    "69b227d6aa7c8ac8710744ff4947d044d3c454c7",
                    "927e7a993c4e839007a5d10c4f97907cf436ca97"
                ]
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious URLs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": "malware_download",
        "totalAttacksThisHour": 38868,
        "lastCalculated": "2026-04-10 19:14 IST"
    }
};
