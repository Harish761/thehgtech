// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-01-27T22:14:20.596479+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-01-27T22:14:20.333415+05:30",
    "lastUpdatedFormatted": "Jan 27, 2026 at 10:14 PM IST",
    "comparisonPeriod": "Jan 26 \u2013 Jan 27, 2026",
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
                "hxxps://en-sso-uphld-com-auth-io[.]typedream[.]app/",
                "hxxps://store[.]workshoprewardsvote[.]com/sharedfiles/filesdetails/id=3368312733/",
                "hxxps://robinhodlognusa[.]gitbook[.]io/",
                "hxxps://lfind-encontrar[.]help[.]jjjjjjddododo[.]com/aU3VXFP6/?pQgYyuXdcKVTV3Ibjh6YZRilf1Z10CrolY1nTV099h2R5z0AqwdN8PnZjqpZcJ3Ynldv9pyh1lCupOX4wB3LKJoQq0freEdpr1q5lO6pT3oQSwn7DrPmRp1O3dwIrZZyx144dEetwcsYHUEtSIDqHaHaSMy9n0F9apmChq6zrD",
                "hxxp://lfind-encontrar[.]help[.]jjjjjjddododo[.]com/?i=60724"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 890,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 890,
                "newInLastHour": 40,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"db6a7ba09ee0abe2f041037f4ff606567c17f59f3f7e35ab49d6a6400cc59944",
                " \"3108e12991421edf2db009520b87ec9827495ffc9d442f574b011b54fb297215",
                " \"6bd08db7fc4fa26607d52d0686510da22d4ff87224f52addd0589ba661d30747",
                " \"dbbb1c1ad17996d18e3e28537e0188b204657e87b8cb495e05bdb36c75cae466",
                " \"c6bc67fe261cb49119f4506ce05ef8822afba37c6d0dde26a5cde9e2dfbccf4a"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1472,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1472,
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
                "1[.]12[.]238[.]40",
                "1[.]15[.]118[.]23",
                "1[.]15[.]14[.]29",
                "1[.]15[.]95[.]172",
                "1[.]173[.]76[.]221"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 7049,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 7049,
                "newInLastHour": 7049,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]12[.]251[.]79",
                "1[.]12[.]64[.]80",
                "1[.]161[.]53[.]7",
                "1[.]214[.]197[.]163",
                "1[.]214[.]42[.]172"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 19508,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 19508,
                "newInLastHour": 19508,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://42[.]232[.]48[.]119:51590/i",
                "hxxp://42[.]235[.]149[.]92:60315/i",
                "hxxp://115[.]59[.]60[.]149:60403/bin[.]sh",
                "hxxp://119[.]179[.]237[.]179:46168/bin[.]sh",
                "hxxp://42[.]224[.]141[.]17:40324/i"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 889,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 889,
                "newInLastHour": 737,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"45[.]32[.]253[.]209:4518\"",
                " \"14[.]103[.]141[.]207:8084\"",
                " \"98[.]130[.]45[.]46:17738\"",
                " \"98[.]130[.]45[.]46:788\"",
                " \"18[.]100[.]125[.]240:2404\""
            ]
        },
        "Feodo Tracker": {
            "description": "Botnet C2 server IPs from Feodo Tracker. Tracks Dridex, Emotet, TrickBot, QakBot, and BazarLoader.",
            "website": "https://feodotracker.abuse.ch/",
            "updateFrequency": "Hourly",
            "iocCount": 6,
            "iocDataUrl": "https://thehgtech.com/ioc-data/feodo-tracker.json",
            "stats": {
                "total": 6,
                "newInLastHour": 6,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "137[.]184[.]9[.]29",
                "162[.]243[.]103[.]246",
                "167[.]86[.]75[.]145",
                "172[.]232[.]59[.]14",
                "34[.]204[.]119[.]63"
            ]
        },
        "SSL Blacklist": {
            "description": "Malicious SSL certificates used by botnet C2 servers. Helps detect encrypted malware communications.",
            "website": "https://sslbl.abuse.ch/",
            "updateFrequency": "Daily",
            "iocCount": 8814,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 8814,
                "newInLastHour": 10,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "8326aaafe66ed1eea591add8d79944837a05fed0",
                "a62fef1ec215606dbf0d3774ebe3f2a6ade92b38",
                "766d70a8be35c01b55e056b94d95f091b9843c14",
                "d88300b35fc29445f29fa339d3b842305c562256",
                "b0d85051fda8ae726a60c9ed332ee7cd8ffeab80"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 46839,
            "activeSources": 8,
            "criticalAlerts": 29154,
            "activeCampaigns": 202
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 20371,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "C2",
                "count": 8783,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 700,
                "trend": "stable",
                "percentage": -6
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
                "count": 19449,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://119[.]115[.]179[.]37:33367/bin[.]sh",
                    "hxxp://110[.]37[.]97[.]128:40497/bin[.]sh",
                    "hxxps://cdn[.]jsdelivr[.]net/gh/relight-73-unsigned/tk-hz-ctrl/22-api-cloud"
                ]
            },
            {
                "name": "CINS Threat List",
                "count": 15000,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]12[.]238[.]40",
                    "1[.]15[.]118[.]23",
                    "1[.]15[.]14[.]29"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1470,
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
                "count": 1375,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "76bc52f6b33ab0650dfdc050c5a15a227ce69ed0",
                    "e1eee0b991daeddda5eb790822cace341505480d",
                    "8262ac683ec151cc53cb28d382ab595a7cb5aa3c"
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
                "count": 608,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "b0d85051fda8ae726a60c9ed332ee7cd8ffeab80",
                    "68cda8cc402c23eb7b13968c1e8f01aae03db4bb",
                    "b22fd267edd11cd730bbc12794103f4f4bd1c28d"
                ]
            },
            {
                "name": "LummaStealer",
                "count": 535,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "e2293f74d8d72bde90bb0424038259a9e3126e1b",
                    "69101b8edfa5d5e2ead4512a6d71c84748b0c012",
                    "1d28cc6dca52e95f859739c39a04d794671f66d9"
                ]
            },
            {
                "name": " \"Mirai",
                "count": 421,
                "types": [
                    "hash"
                ],
                "sampleIndicators": [
                    " \"eba1d094b75564d87c5aa0e5e84dc9bcd5b7660389daf3cbf57368f35e70db2d",
                    " \"a0cca3015b335fdc20fc47255de080ac91a84fe0079f8613b4a27bed7cd0b2bf",
                    " \"6ee19c34f8c3fb8230961016ac7873a7098ed794c37c78fd2bccb71bd5ce7cae"
                ]
            },
            {
                "name": "Rhadamanthys",
                "count": 355,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "f999c0da0e983becc1c935444c5e609be26b0bcf",
                    "4101579ae950c954fc1096adf43bdefcf0364cfd",
                    "0c3ee8188ce35b6bb11d5b12a0e1e28310188b4e"
                ]
            },
            {
                "name": "Gozi",
                "count": 349,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "61d991d7063e5e7470daa3059357f8282e680bb7",
                    "68b4fc7da837c64332b9f019adaef4c7038ec85d",
                    "e0f7072057c5deeb21c598673740debc7f6eb8a1"
                ]
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious IPs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": "SSH Attacks",
        "totalAttacksThisHour": 42652,
        "lastCalculated": "2026-01-27 22:14 IST"
    }
};
