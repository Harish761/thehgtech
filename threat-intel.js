// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-07-07T09:42:21.208611+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-07-07T09:42:20.892114+05:30",
    "lastUpdatedFormatted": "Jul 07, 2026 at 09:42 AM IST",
    "comparisonPeriod": "Jul 06 \u2013 Jul 07, 2026",
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
                "hxxp://faizan-khanjada[.]github[.]io/amazon-web-clone/",
                "hxxp://https--www-roblox[.]cam/users/1179291790/profile",
                "hxxps://www[.]roblox[.]com[.]ml/users/386636816310/profile",
                "hxxps://whhaattss[.]blogspot[.]com/",
                "hxxp://brenox-filda-d5c471-shrr[.]pages[.]dev/"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 513,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 513,
                "newInLastHour": 46,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"5489a805b1e17f8c133f9947aa6b317524c7ee5a341bd3f2aee85b3a111f8f6a",
                " \"5de8f96372fba00afca1eab7df600d5584e93b87ce9363cbfcb0ce44fd742b38",
                " \"6ee3cd19645816a60c51c362a125837d49e066ca0d0c1f03cc2a40f0a45739d2",
                " \"4221c1eee1c15d74837a34ee1ccc5693271c4ad9570bada0f9bea03a1e104013",
                " \"0c62a122eba57c96a909e337501955b1bb2705c3ba56a6ef1d9b75f090404a34"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1680,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1680,
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
                "1[.]158[.]6[.]230",
                "1[.]159[.]81[.]89",
                "1[.]181[.]200[.]22",
                "1[.]192[.]178[.]255",
                "1[.]192[.]46[.]208"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 4674,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 4674,
                "newInLastHour": 4674,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]0[.]164[.]165",
                "1[.]15[.]221[.]192",
                "1[.]162[.]247[.]182",
                "1[.]192[.]61[.]19",
                "1[.]214[.]214[.]114"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 21495,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 21495,
                "newInLastHour": 21495,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://27[.]215[.]213[.]232:56127/bin[.]sh",
                "hxxp://115[.]59[.]61[.]161:44262/i",
                "hxxps://aekwtnf[.]1xyekbet[.]bet/cccde670-3058-497e-b734-4c977f9a0b03",
                "hxxp://125[.]46[.]199[.]204:41231/bin[.]sh",
                "hxxps://b58jef3z[.]22beet[.]com/?ublib=233ebe80-7a96-4603-a9c8-437ce0ac511e"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 3920,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 3920,
                "newInLastHour": 3645,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"aekwtnf[.]1xyekbet[.]bet\"",
                " \"1xyekbet[.]bet\"",
                " \"b58jef3z[.]22beet[.]com\"",
                " \"22beet[.]com\"",
                " \"nmsqiavn[.]enfejar-site[.]bet\""
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
            "iocCount": 10116,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 10116,
                "newInLastHour": 16,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "59658d5b08a31b31941b598ef4287fecf26a5e54",
                "6cd9f5c15b172c39fd51e13d36d39c73a4d1395a",
                "ec452c3c30499a1a6983877a2d881c1a8f2955ea",
                "e553bfd006337f4cb3a3acf5a681980d184b79e6",
                "c19f8a859e5635a3601eb27c9ac59c88dcf91be1"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 53400,
            "activeSources": 8,
            "criticalAlerts": 32534,
            "activeCampaigns": 232
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 22456,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "C2",
                "count": 10078,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 3283,
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
                "name": "malware_download",
                "count": 21893,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://110[.]38[.]208[.]89:56690/i",
                    "hxxp://110[.]38[.]208[.]89:56690/bin[.]sh",
                    "hxxp://123[.]132[.]156[.]131:50352/bin[.]sh"
                ]
            },
            {
                "name": "CINS Threat List",
                "count": 15000,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]158[.]6[.]230",
                    "1[.]173[.]108[.]110",
                    "1[.]183[.]41[.]171"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1678,
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
                "count": 1419,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "41cbe997a63cc9211fd19593cfcf27602d10bcd8",
                    "526b4a8604d900869439980614e56e4b288fb46d",
                    "49aa56f946089804e2bc8ae77a7b2fbaa5860e50"
                ]
            },
            {
                "name": " \"win.cobalt_strike\"",
                "count": 1398,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"101[.]34[.]235[.]198:443\"",
                    " \"101[.]34[.]235[.]198:80\"",
                    " \"49[.]234[.]14[.]253:443\""
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
                "count": 690,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "83ff65960d2df4b29e78d6fd0342dcd5f053eb13",
                    "ac563907d31a21443760cee92a98b50bba6152aa",
                    "27e3cb5b0043884c7ebc0691e2e73ef3b95339ac"
                ]
            },
            {
                "name": "Vidar",
                "count": 631,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "ec452c3c30499a1a6983877a2d881c1a8f2955ea",
                    "e553bfd006337f4cb3a3acf5a681980d184b79e6",
                    "d4611858ce65e847598f70af1a9b98ee96cc20f8"
                ]
            },
            {
                "name": "LummaStealer",
                "count": 556,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "2beac2ee8b2fe7625d4de9f5381d37f200965f91",
                    "a46841d623a191366909b24375bee0eceea23bbe",
                    "272e76f605bec1da1ea719df8dc0e7269de7d44e"
                ]
            },
            {
                "name": "OffLoader",
                "count": 435,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "6cd9f5c15b172c39fd51e13d36d39c73a4d1395a",
                    "c19f8a859e5635a3601eb27c9ac59c88dcf91be1",
                    "51addb0b10ea11992e4a7dcc168fe8c6eaddf0be"
                ]
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious URLs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": " \"n/a",
        "totalAttacksThisHour": 45183,
        "lastCalculated": "2026-07-07 09:42 IST"
    }
};
