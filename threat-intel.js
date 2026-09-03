// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-09-04T02:44:54.755390+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-09-04T02:44:54.370247+05:30",
    "lastUpdatedFormatted": "Sep 04, 2026 at 02:44 AM IST",
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
            "iocCount": 697,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 697,
                "newInLastHour": 8,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"6173641022865c703539ad968331c59f1d5da03add825a79b6d0719bf7c07ed1",
                " \"bec2b8cf49b15d40abc3d0f8d36ee3a2282928f36250278b1f27d9236e0d90db",
                " \"1465f0a6ed279e87983f39f9b81e989eb0e92898e21a364ab7fc17a84c808079",
                " \"0f08da5bc3d2c32bd0367d586279d4c7cfc7d35d7ac97cd2ead4b7f4327a8a3a",
                " \"07936bd8a05d6db787bfa5f8b10c1335ef708f660dcd2b1eee715c9b66283e80"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1709,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1709,
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
                "1[.]177[.]162[.]2",
                "1[.]183[.]160[.]23",
                "1[.]192[.]129[.]106",
                "1[.]192[.]216[.]192",
                "1[.]193[.]63[.]206"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 11284,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 11284,
                "newInLastHour": 11284,
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
            "iocCount": 15492,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 15492,
                "newInLastHour": 15492,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://119[.]179[.]254[.]3:36720/bin[.]sh",
                "hxxp://122[.]241[.]130[.]212:45870/i",
                "hxxp://66[.]212[.]173[.]225:46177/i",
                "hxxp://115[.]57[.]80[.]149:55734/i",
                "hxxp://66[.]212[.]173[.]225:46177/bin[.]sh"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 6165,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 6165,
                "newInLastHour": 5810,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"1[.]12[.]59[.]176:8084\"",
                " \"8[.]219[.]134[.]47:22\"",
                " \"43[.]155[.]9[.]112:80\"",
                " \"ritec4yt[.]usa-us-glycofree[.]com\"",
                " \"r0w5dkgm[.]usa-usa-lipovive[.]com\""
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
            "iocCount": 10626,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 10626,
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
            "totalIndicators": 49891,
            "activeSources": 8,
            "criticalAlerts": 26764,
            "activeCampaigns": 245
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 16160,
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
                "count": 4328,
                "trend": "stable",
                "percentage": -1
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
                "count": 15423,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://196[.]189[.]69[.]192:57870/bin[.]sh",
                    "hxxp://61[.]176[.]69[.]173:36353/i",
                    "hxxp://42[.]59[.]71[.]140:35247/i"
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
                    "1[.]119[.]194[.]253",
                    "1[.]15[.]14[.]29"
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
                "count": 1285,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"47[.]113[.]206[.]140:8080\"",
                    " \"47[.]113[.]206[.]140:80\"",
                    " \"46[.]151[.]182[.]190:22\""
                ]
            },
            {
                "name": " \"js.iclickfix\"",
                "count": 923,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"uranbokachok[.]com\"",
                    " \"xaz2[.]com\"",
                    " \"www[.]seachoice[.]co[.]uk\""
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
        "fastestRisingThreat": "malware_download",
        "totalAttacksThisHour": 47899,
        "lastCalculated": "2026-09-04 02:44 IST"
    }
};
