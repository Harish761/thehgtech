// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-04-13T11:54:41.213463+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-04-13T11:54:40.922502+05:30",
    "lastUpdatedFormatted": "Apr 13, 2026 at 11:54 AM IST",
    "comparisonPeriod": "Apr 12 \u2013 Apr 13, 2026",
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
                "hxxps://netiflix[.]vercel[.]app/",
                "hxxp://www[.]netiflix[.]vercel[.]app/",
                "hxxp://kreknlugin[.]godaddysites[.]com/",
                "hxxp://groovgrsrangtoot[.]duckdns[.]org/",
                "hxxp://kiucun-log[.]godaddysites[.]com/"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 685,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 685,
                "newInLastHour": 41,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"3132a9b85061961036c69db8e0d6a0fa406d2fb23d8e6ec3882ba70f847e9b7b",
                " \"2b4d8e7bcaf850ead0283268ea0c5500c95e33c16283bba502506025e071928d",
                " \"ca2b898ad8c95acbddb45c9eab78fb555594d0213e2ce14ddf57380ff00f2dee",
                " \"0cb250f059b18d6b869f9ddc7ac78200332e8ee261a2f64d6e177f967b1a53dd",
                " \"df74ad3aa76bed163e0b3bd72dce5e4d390711e149b45d9ea17d150b38732911"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1576,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1576,
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
                "1[.]123[.]231[.]55",
                "1[.]178[.]175[.]72",
                "1[.]180[.]153[.]254",
                "1[.]182[.]190[.]117",
                "1[.]183[.]0[.]10"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 1005,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 1005,
                "newInLastHour": 1005,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]53[.]110[.]158",
                "1[.]94[.]226[.]80",
                "1[.]95[.]195[.]50",
                "101[.]126[.]128[.]223",
                "101[.]237[.]38[.]4"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 21956,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 21956,
                "newInLastHour": 21956,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://117[.]63[.]246[.]36:49016/bin[.]sh",
                "hxxp://110[.]37[.]117[.]225:35094/bin[.]sh",
                "hxxp://27[.]219[.]14[.]111:38777/i",
                "hxxp://42[.]242[.]164[.]219:33668/bin[.]sh",
                "hxxp://110[.]37[.]1[.]162:58224/bin[.]sh"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 970,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 970,
                "newInLastHour": 969,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"shape-harv[.]bry5laxon[.]in[.]net\"",
                " \"f0cu-logic[.]bry5laxon[.]in[.]net\"",
                " \"edpisblackbro-54955[.]portmap[.]host\"",
                " \"64[.]81[.]30[.]234:1399\"",
                " \"dllhosts[.]dynu[.]net\""
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
            "iocCount": 9526,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 9526,
                "newInLastHour": 0,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "f8f2497277c03b96a3b4a8ef77e0a0792478fae5",
                "9adbaea1d6a8bc4c4065569a77ddd9592de54f6e",
                "77ebda500a4e89331291ca82c91d3609d7cd093e",
                "6e76ede9fb607e6701bf05cdf72378a0bd082d0f",
                "4745a0ee817161b42ab57535d0f597b3b3f29826"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 49929,
            "activeSources": 8,
            "criticalAlerts": 32094,
            "activeCampaigns": 197
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 22556,
                "trend": "stable",
                "percentage": -1
            },
            {
                "category": "C2",
                "count": 9538,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 304,
                "trend": "stable",
                "percentage": -2
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
                "percentage": 86
            },
            {
                "name": "Tech",
                "percentage": 13
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
                "count": 21879,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxps://vapb64us[.]insti1partition[.]in[.]net/05fe317c-0981-4de2-bc8a-930d369db441/ck-3d80df5d12cdfe6450a782fc87bf66b444[.]google",
                    "hxxp://123[.]11[.]79[.]113:35702/bin[.]sh",
                    "hxxps://toos[.]insti1partition[.]in[.]net/05fe317c-0981-4de2-bc8a-930d369db441/ck-3d80df5d12cdfe6450a782fc87bf66b444[.]google"
                ]
            },
            {
                "name": "CINS Threat List",
                "count": 15000,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]123[.]231[.]55",
                    "1[.]15[.]51[.]236",
                    "1[.]178[.]175[.]72"
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
                "count": 1405,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "6e76ede9fb607e6701bf05cdf72378a0bd082d0f",
                    "a017b686ecf8d93d89bb2b46627c2c99d1aa7801",
                    "2133b3f9828d337225f5218087ca10a290f942dc"
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
                "count": 672,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "0a5d3ca898ee51340f483aa8f40e06c43813376e",
                    "15027af927e6be2c77fa1083e2ba69ed7ef77ec1",
                    "ee4dd385bf849f7621deed67382e64c17b864e20"
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
                "name": "Vidar",
                "count": 491,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "f8f2497277c03b96a3b4a8ef77e0a0792478fae5",
                    "e43ef806fe5a6767cd9fd7391d11e7db88a22efe",
                    "877b74f2ae6c1758dab9b5ef1bb45472b02dbc56"
                ]
            },
            {
                "name": " \"js.clearfake\"",
                "count": 488,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"assetrid[.]sanctua-ryunt[.]in[.]net\"",
                    " \"vapb64us[.]insti1partition[.]in[.]net\"",
                    " \"toos[.]insti1partition[.]in[.]net\""
                ]
            },
            {
                "name": "OffLoader",
                "count": 395,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "d99c3d7ed9e8aa5947b8675eadbee2ae11085f38",
                    "3963ac632a72fd088e1e2089573b8f5c5cf6faa6",
                    "4ed8a8b1f88a9b6d820bc8e9d17a5b074e0e5ee5"
                ]
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious URLs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": "malware_download",
        "totalAttacksThisHour": 39276,
        "lastCalculated": "2026-04-13 11:54 IST"
    }
};
