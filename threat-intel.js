// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-09-06T09:56:34.442137+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-09-06T09:56:34.115300+05:30",
    "lastUpdatedFormatted": "Sep 06, 2026 at 09:56 AM IST",
    "comparisonPeriod": "Sep 05 \u2013 Sep 06, 2026",
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
                "hxxps://fd-kiara[.]github[.]io/indexa[.]html/",
                "hxxps://fd-kiara[.]github[.]io/indexa[.]html",
                "hxxps://www[.]24086[.]xyz/",
                "hxxps://br1[.]bbbooss[.]shop/brgtm/?pixel=1691965335246804&ts=1",
                "hxxps://br3[.]brvoeee[.]shop/brgtm/?pixel=1617165756475018&sx=1"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 725,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 725,
                "newInLastHour": 42,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"473791c0c00404f2205d290911241491c5fba8f6ec8b366775a7c78e1e00a7e2",
                " \"5c6680bcb7d08f4da0c5ea317a05b635a8cba388dadaea4177364d1650c0ca62",
                " \"efdf997d603e1f4c4737f5f8d8f20be7e59669ee70c122555c0eb21f05fad9d3",
                " \"67f0c442b8e6a1c84ad5cf8a1346cc691351c2b87162b9aea728d1123b7dc4ca",
                " \"ea8af9d5db3bfb32f7b0ae7183a3c2895e71985192e9437e4a8a24dedbf58443"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1630,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1630,
                "newInLastHour": 11,
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
                "1[.]119[.]194[.]253",
                "1[.]189[.]108[.]155",
                "1[.]189[.]116[.]185",
                "1[.]192[.]176[.]104",
                "1[.]193[.]37[.]103"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 11329,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 11329,
                "newInLastHour": 11329,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]0[.]164[.]165",
                "1[.]12[.]37[.]6",
                "1[.]162[.]197[.]67",
                "1[.]162[.]247[.]182",
                "1[.]174[.]208[.]30"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 14288,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 14288,
                "newInLastHour": 14288,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://182[.]127[.]166[.]145:47115/i",
                "hxxp://42[.]227[.]179[.]74:46846/i",
                "hxxp://115[.]48[.]140[.]200:33113/i",
                "hxxp://42[.]227[.]179[.]74:46846/bin[.]sh",
                "hxxp://175[.]175[.]60[.]81:49613/bin[.]sh"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 4984,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 4984,
                "newInLastHour": 4532,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"bp6wvsu3[.]us-us-en-geniusbrainsignal[.]com\"",
                " \"ehgbv6lm[.]us-thetrumptoken[.]com\"",
                " \"ptsefif6[.]us-thetrumptoken[.]com\"",
                " \"unnd8ttc[.]us-us-theeloncode[.]com\"",
                " \"us-us-theeloncode[.]com\""
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
            "iocCount": 10559,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 10559,
                "newInLastHour": 8,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "755c81877937861388f42dc73d5a6bf24c96e13b",
                "972c98978e420c02a8d8c5f87930dadc70adbbd8",
                "cd4fbb7112546836c61911e6b3a09770b6aebf29",
                "09cc432d307b2b2d67a102c9a579f24b511cfea2",
                "17ee516f7e99548d2b4d735f2100f2754d814288"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 48271,
            "activeSources": 8,
            "criticalAlerts": 26421,
            "activeCampaigns": 271
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 15819,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "C2",
                "count": 10602,
                "trend": "up",
                "percentage": 421
            },
            {
                "category": "Botnet",
                "count": 4076,
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
                "count": 15065,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://42[.]232[.]237[.]170:52434/i",
                    "hxxp://42[.]232[.]237[.]170:52434/bin[.]sh",
                    "hxxp://123[.]4[.]136[.]2:48734/i"
                ]
            },
            {
                "name": "CINS Threat List",
                "count": 15000,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]119[.]194[.]253",
                    "1[.]12[.]229[.]231",
                    "1[.]145[.]32[.]156"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1697,
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
                "count": 1440,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "8c2a430246ca36ca14885fe1a101c61eaab4a96c",
                    "7f44d36f1f6bd375ba4e4a7866328a76047ce498",
                    "f351f7dbe9c583f75758b39cd307f5359d110c73"
                ]
            },
            {
                "name": " \"win.cobalt_strike\"",
                "count": 1289,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"111[.]231[.]116[.]164:80\"",
                    " \"111[.]231[.]116[.]164:8080\"",
                    " \"111[.]231[.]116[.]164:443\""
                ]
            },
            {
                "name": "Vidar",
                "count": 759,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "09cc432d307b2b2d67a102c9a579f24b511cfea2",
                    "1bf12565f5b66f9f938f92411d31aea37d9676e8",
                    "5e9de84aab8968d3a10710904a0844d0c360d2a8"
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
                "count": 701,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "6c6027c8ff18b0f79bd3c40848c2b189a18b49ac",
                    "a6e6aa58bac84e56b868f5f618ef227b75d7208e",
                    "d123d7f43d63545c7a8f643acbe73e81f35c3f14"
                ]
            },
            {
                "name": "LummaStealer",
                "count": 558,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "a45080c92a0b2314966517a4643ebf280e88a11b",
                    "501d817bb1780acfe5e47082c43472bda8068e4d",
                    "2beac2ee8b2fe7625d4de9f5381d37f200965f91"
                ]
            },
            {
                "name": " \"win.pure_rat\"",
                "count": 554,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"83[.]136[.]211[.]230:56001\"",
                    " \"45[.]225[.]135[.]90:56003\"",
                    " \"45[.]139[.]104[.]226:443\""
                ]
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious IPs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": " \"unknown_loader\"",
        "totalAttacksThisHour": 45515,
        "lastCalculated": "2026-09-06 09:56 IST"
    }
};
