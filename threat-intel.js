// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-09-04T04:00:16.279412+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-09-04T04:00:15.940899+05:30",
    "lastUpdatedFormatted": "Sep 04, 2026 at 04:00 AM IST",
    "comparisonPeriod": "Sep 03 \u2013 Sep 04, 2026",
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
                "hxxps://md[.]rytzskl[.]com/file/sharep[.]html",
                "hxxps://www[.]hbabyaqq[.]blogspot[.]com/",
                "hxxps://tejas3861[.]github[.]io/Spotify-Clone",
                "hxxps://trustcapitallogini[.]webador[.]com/",
                "hxxps://vo[.]la/saKvUR9/"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 706,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 706,
                "newInLastHour": 38,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"b84f28bf2872715a977aafd9215358d078ae942c6e8ab1c5b397c189c9f5f970",
                " \"f0ceeb924803c55384a7491af8af5e229bf25e7e9864e3a94f5eaad4a07d925d",
                " \"56b77af451ae0a131689e1cb3a8964b210403cded8d5ea67fa2b6ec24edabab7",
                " \"593b391a23ff56696eb2ba54a45ec5eb9c6c574d2b45f5da8ef324cfa3dca95e",
                " \"27acfd79d14615e57aaaf388585dcd0be08ec68e2b5518f01e9e34fccb0bc580"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1652,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1652,
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
                "2.27.62.0/24",
                "2.56.192.0/22"
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
                "1[.]177[.]162[.]4",
                "1[.]183[.]148[.]62",
                "1[.]192[.]129[.]106",
                "1[.]192[.]176[.]104"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 11280,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 11280,
                "newInLastHour": 11280,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]0[.]164[.]165",
                "1[.]162[.]197[.]67",
                "1[.]162[.]237[.]203",
                "1[.]162[.]247[.]182",
                "1[.]174[.]208[.]30"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 15496,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 15496,
                "newInLastHour": 15496,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://61[.]176[.]69[.]173:36353/bin[.]sh",
                "hxxp://173[.]92[.]213[.]119:52110/bin[.]sh",
                "hxxp://182[.]126[.]93[.]33:37461/i",
                "hxxp://119[.]179[.]254[.]3:36720/i",
                "hxxp://119[.]179[.]254[.]3:36720/bin[.]sh"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 6172,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 6172,
                "newInLastHour": 5815,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"154[.]91[.]63[.]100:8084\"",
                " \"154[.]91[.]63[.]116:8084\"",
                " \"154[.]91[.]62[.]126:8084\"",
                " \"hxxps://cdn[.]jsdelivr[.]net/gh/cowenrty/60-13-96-DA-AA-3C/2b\"",
                " \"hxxps://raw[.]githubusercontent[.]com/cowenrty/60-13-96-DA-AA-3C/refs/heads/main/2b\""
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
            "iocCount": 10340,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 10340,
                "newInLastHour": 0,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "e85536b156e0cd96f57d1925fb4f9fadaf825b9a",
                "4157992dbca11ebbe0938db99c79c0769ff4e1b1",
                "5e9de84aab8968d3a10710904a0844d0c360d2a8",
                "d2ea1d53e2027b0378fa9346965edbcc0215e251",
                "dcd0ddb2675731126703bc235532e2fe60457b2a"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 49994,
            "activeSources": 8,
            "criticalAlerts": 26820,
            "activeCampaigns": 247
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 16216,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "C2",
                "count": 10604,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 4355,
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
                "count": 15492,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://119[.]179[.]254[.]3:36720/bin[.]sh",
                    "hxxp://122[.]241[.]130[.]212:45870/i",
                    "hxxp://66[.]212[.]173[.]225:46177/i"
                ]
            },
            {
                "name": "CINS Threat List",
                "count": 15000,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]177[.]162[.]2",
                    "1[.]183[.]160[.]23",
                    "1[.]192[.]129[.]106"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1709,
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
                "count": 1441,
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
                "count": 1290,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"8[.]219[.]134[.]47:22\"",
                    " \"43[.]155[.]9[.]112:80\"",
                    " \"43[.]155[.]9[.]112:8080\""
                ]
            },
            {
                "name": " \"js.iclickfix\"",
                "count": 924,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"barsuki8822[.]life\"",
                    " \"ilovusaverivy[.]com\"",
                    " \"uranbokachok[.]com\""
                ]
            },
            {
                "name": "Vidar",
                "count": 759,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "5e9de84aab8968d3a10710904a0844d0c360d2a8",
                    "145f0fa0f6134e66fa5c80989c13987baf799bda",
                    "6ddb71e5a27eccf80773188066ac92d9d39506d7"
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
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious IPs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": " \"Vidar",
        "totalAttacksThisHour": 47934,
        "lastCalculated": "2026-09-04 04:00 IST"
    }
};
