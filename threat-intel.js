// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-09-26T18:30:06.502917+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-09-26T18:30:06.257204+05:30",
    "lastUpdatedFormatted": "Sep 26, 2026 at 06:30 PM IST",
    "comparisonPeriod": "Sep 25 \u2013 Sep 26, 2026",
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
                "hxxps://wunschprodukteauswahlen33s[.]ink/08Adjcn",
                "hxxps://tokenim-hk-cdn[.]beauty/",
                "hxxps://tokenim-hk-cdn[.]pics/",
                "hxxps://menuu-aktivaspays[.]laterd[.]my[.]id/",
                "hxxps://www[.]theodore3[.]com/the-cover-up/wp-content/upgrade/Microsoft[.]html#a[.]b@c"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 1593,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 1593,
                "newInLastHour": 156,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"9f81b884d84160c795ef99c63de83eff2df025d09dfefab31346d068166a8cce",
                " \"7d839bef911bba56eac1d8a9a009c8f01784c41115061b599aecc01572bc2ba5",
                " \"38b008b2a92fdd20d5a01cfb925ada602cb1ae73c02bd2819969c2a9a0253d06",
                " \"8c855bedd57062cf95635215d6c5c719e00e14d41b56433485ded9cd2d1f92d2",
                " \"06001be7d36e7837f489251f1c8bfe6b8333c7e9a2d69b334755f1f79cd23191"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1710,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1710,
                "newInLastHour": 60,
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
                "1[.]15[.]14[.]29",
                "1[.]193[.]58[.]176",
                "1[.]193[.]63[.]32",
                "1[.]2[.]173[.]126",
                "1[.]24[.]16[.]100"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 5006,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 5006,
                "newInLastHour": 5006,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]0[.]164[.]165",
                "1[.]161[.]144[.]132",
                "1[.]162[.]248[.]139",
                "1[.]179[.]158[.]74",
                "1[.]203[.]186[.]149"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 14500,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 14500,
                "newInLastHour": 14500,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://125[.]41[.]171[.]28:58495/bin[.]sh",
                "hxxp://115[.]50[.]89[.]9:44257/bin[.]sh",
                "hxxp://182[.]116[.]13[.]118:60029/i",
                "hxxp://116[.]248[.]81[.]126:46662/i",
                "hxxp://219[.]156[.]33[.]66:58682/bin[.]sh"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 8714,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 8714,
                "newInLastHour": 8421,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"9wudfh68[.]binazirvarzesh[.]ir\"",
                " \"binazirvarzesh[.]ir\"",
                " \"91[.]228[.]153[.]116:6886\"",
                " \"89[.]106[.]83[.]214:4443\"",
                " \"57[.]182[.]163[.]105:80\""
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
            "iocCount": 10819,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 10819,
                "newInLastHour": 37,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "a09be1ba7013678b6385135c590d4894b890dc75",
                "7a215b5a8eaf9b132cf84f22d9ee2202c2a028bf",
                "ec560bb2220f9640b3c9564c9f0ccf6f4a8da390",
                "6b615019c25c4b72d6e9a3e30395c21cc1ca323d",
                "1ffb85092fad1e9bdebb6bfa9a48a62828fd5def"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 52570,
            "activeSources": 8,
            "criticalAlerts": 27054,
            "activeCampaigns": 272
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 16294,
                "trend": "stable",
                "percentage": -2
            },
            {
                "category": "C2",
                "count": 10760,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 4173,
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
                "name": "CINS Threat List",
                "count": 15000,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]15[.]14[.]29",
                    "1[.]193[.]58[.]176",
                    "1[.]193[.]63[.]32"
                ]
            },
            {
                "name": "malware_download",
                "count": 14286,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://105[.]186[.]237[.]189:56277/i",
                    "hxxp://120[.]84[.]214[.]214:46724/i",
                    "hxxp://176[.]90[.]114[.]114:38709/i"
                ]
            },
            {
                "name": " \"unknown_loader\"",
                "count": 1976,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"anthoniaeg[.]com\"",
                    " \"barrosoebarroso[.]adv[.]br\"",
                    " \"businesstoday[.]id\""
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1650,
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
                "count": 1448,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "cb7fcaede3c6bb75e73ee72b8de7c23de2953dd4",
                    "990472ad57a4d7dcb13689a21b0c84252f5cf0a5",
                    "99500e5de097a58d95775e1f9da85597851bdb71"
                ]
            },
            {
                "name": " \"js.iclickfix\"",
                "count": 1398,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"jedinstvopd[.]com\"",
                    " \"joanperemassana[.]com\"",
                    " \"julianoferrari[.]com[.]br\""
                ]
            },
            {
                "name": " \"win.cobalt_strike\"",
                "count": 1359,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"178[.]253[.]31[.]5:80\"",
                    " \"91[.]92[.]47[.]99:8088\"",
                    " \"47[.]114[.]83[.]19:1234\""
                ]
            },
            {
                "name": " \"Mirai",
                "count": 1160,
                "types": [
                    "hash"
                ],
                "sampleIndicators": [
                    " \"99859b2887aa8d3b9433047e15a4f48e038aee82dbac896ac6c37d274e12ae94",
                    " \"de8482f9d7a9f378b610b934613b2fe2d1f3a3a0d9a0c247b5233aa8a5886142",
                    " \"5bb258c9527684f86673d35ff2c8ef03e5530d4582162b967d9c5398c18e9afa"
                ]
            },
            {
                "name": "Vidar",
                "count": 794,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "a4138cfc3c588247705c5cba498d35324463dfa2",
                    "06ba62804f9d40f0ffb38ecd4c42b0229921cbde",
                    "fd081cbaf79596b443b9d591f9dd1390268db7f0"
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
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious URLs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": " \"win.cobalt_strike\"",
        "totalAttacksThisHour": 43485,
        "lastCalculated": "2026-09-26 18:30 IST"
    }
};
