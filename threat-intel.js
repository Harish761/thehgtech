// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-08-19T14:19:57.146249+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-08-19T14:19:56.853296+05:30",
    "lastUpdatedFormatted": "Aug 19, 2026 at 02:19 PM IST",
    "comparisonPeriod": "Aug 18 \u2013 Aug 19, 2026",
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
                "hxxp://www[.]deskthipk[.]com/",
                "hxxps://llori807[.]github[.]io/Netflix-Clone-2[.]0",
                "hxxp://vp-nm[.]abouali-mohammad-arad[.]workers[.]dev/",
                "hxxps://g5[.]lu/vu39k",
                "hxxps://loginfacebook3[.]blogspot[.]com/"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 1222,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 1222,
                "newInLastHour": 73,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"e300dd848f7fbfbb903fb6ad9074d4abb3141dc1be534307ee9628b7a865bf95",
                " \"21c1de790cc8a0fa8f69a5e409acc505983baadc856a5a7cdc802914a9ac0013",
                " \"36629c7a24034d46ecdd08ded2ec3a7ca14e3f5c87b67a11808ab95ed8027aac",
                " \"958d673e4aa911702d7a539d65e444b977d7c519a3f7d18b508c6a0bb4d1f2f0",
                " \"b16d5475d6f794ba2742d3974d484647ed0ba028e9ef88e10e289b9da5217308"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1692,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1692,
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
                "1[.]119[.]194[.]226",
                "1[.]140[.]210[.]242",
                "1[.]15[.]14[.]29",
                "1[.]165[.]27[.]71",
                "1[.]178[.]120[.]114"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 4795,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 4795,
                "newInLastHour": 4795,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]0[.]164[.]165",
                "1[.]14[.]64[.]225",
                "1[.]20[.]150[.]200",
                "1[.]222[.]42[.]237",
                "1[.]245[.]140[.]132"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 16649,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 16649,
                "newInLastHour": 16649,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxps://teakivo[.]com//wp-content/bin[.]exe",
                "hxxp://222[.]140[.]156[.]149:50285/bin[.]sh",
                "hxxp://120[.]84[.]213[.]18:32896/bin[.]sh",
                "hxxps://drive[.]google[.]com/uc?export=download&id=1zDAuolFaqf-s5nc96PTj-NMi5vlJTvMM",
                "hxxps://drive[.]google[.]com/uc?export=download&id=1U-4hfA9iI1EWW1MKtVpCi878-B9RhvGA"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 9811,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 9811,
                "newInLastHour": 9769,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"s33mon3y[.]noip[.]at\"",
                " \"222align[.]noip[.]at\"",
                " \"64[.]89[.]160[.]127:4055\"",
                " \"golfmontreux[.]ch\"",
                " \"hxxps://casaandaimemarica[.]com[.]br/\""
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
            "iocCount": 10474,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 10474,
                "newInLastHour": 43,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "173cb58c2538a3e2fccf3f3ae72b5713e4f810a3",
                "79e9e22d16866b1126c524c08afda88a225d6545",
                "ff4362ad98a2821b067bc4ae0624b7da832aad83",
                "030279988932ee4115de7e6e8cdeb91927c078db",
                "4a6e8bfafdb4754d3fbc09a01e52a88d9d4dd57c"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 54137,
            "activeSources": 8,
            "criticalAlerts": 28218,
            "activeCampaigns": 236
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 17808,
                "trend": "stable",
                "percentage": 1
            },
            {
                "category": "C2",
                "count": 10410,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 4673,
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
            },
            {
                "name": "Government",
                "percentage": 0
            }
        ],
        "campaigns": [
            {
                "name": "malware_download",
                "count": 16564,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://175[.]173[.]72[.]28:43930/bin[.]sh",
                    "hxxp://218[.]13[.]149[.]41:34202/i",
                    "hxxp://218[.]13[.]149[.]41:34202/bin[.]sh"
                ]
            },
            {
                "name": "CINS Threat List",
                "count": 15000,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]119[.]158[.]77",
                    "1[.]140[.]210[.]242",
                    "1[.]15[.]14[.]29"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1690,
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
                "name": " \"unknown_loader\"",
                "count": 1676,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"eggsjelly[.]space\"",
                    " \"cdn[.]zrorolite[.]com\"",
                    " \"hxxps://cdn[.]zrorolite[.]com/5NPL[.]js\""
                ]
            },
            {
                "name": " \"js.iclickfix\"",
                "count": 1657,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"voksenasenmusicacademies[.]com\"",
                    " \"planetaryshelter[.]com\"",
                    " \"renovadeco[.]be\""
                ]
            },
            {
                "name": "AsyncRAT",
                "count": 1437,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "f351f7dbe9c583f75758b39cd307f5359d110c73",
                    "7bf78d44f61a05e919479a1cf3e0ce158a50a0c6",
                    "f50e245dc1e4a89d6cf5e07e31ae1392a3f9ad20"
                ]
            },
            {
                "name": " \"win.cobalt_strike\"",
                "count": 1429,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"47[.]108[.]86[.]120:80\"",
                    " \"47[.]108[.]86[.]120:8080\"",
                    " \"47[.]108[.]86[.]120:443\""
                ]
            },
            {
                "name": " \"unknown\"",
                "count": 1057,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"alpen-initiative[.]ch\"",
                    " \"tiafe[.]ch\"",
                    " \"sistem-electromenager[.]ch\""
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
                "name": "Vidar",
                "count": 715,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "e39fdf1800919f6dd77d89bcdbc0b1fe8a9352eb",
                    "952bcdeea03ea702626a30069c949581bf2d1b05",
                    "a52e17fe607d1e562e0cb67c6f2342e6b4dbf191"
                ]
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious URLs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": " \"js.iclickfix\"",
        "totalAttacksThisHour": 46636,
        "lastCalculated": "2026-08-19 14:19 IST"
    }
};
