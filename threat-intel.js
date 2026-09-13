// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-09-14T02:33:14.967084+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-09-14T02:33:14.634397+05:30",
    "lastUpdatedFormatted": "Sep 14, 2026 at 02:33 AM IST",
    "comparisonPeriod": "Sep 13 \u2013 Sep 14, 2026",
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
                "hxxps://kqid7e1vkh3d0r88k3d[.]vercel[.]app/nsvw35re4hbarefsdbvzxcv",
                "hxxps://kqid7e1vkh3d0r88k3d[.]vercel[.]app/nsvw35re4hbarefsdbvzxcv[.]html",
                "hxxps://www[.]welcome-trezor-bridge[.]godaddysites[.]com/",
                "hxxps://iamivanaalawicash[.]blogspot[.]com/",
                "hxxps://www[.]iamivanaalawicash[.]blogspot[.]com/"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 403,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 403,
                "newInLastHour": 33,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"0b8333640232545d97f1fe98f9939147db5c1043613786e3c207d8dd54c8697b",
                " \"6ba4c44f01eb298223b7ecd25f0a2a0a248341638932b4f139c58009e0f49891",
                " \"98441442de4f74b035af7044472d762d7ee9bf013573c881b3b8d3cfdca46bbb",
                " \"07ad858076dfac1967b2f7ec8112a434c73e5f510b71cdf4c6786f4d0c6dd430",
                " \"9c013b9a4f2568f88e075dd3bcbee8c8fcf468b0a99d51c167d54806600fc633"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1723,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1723,
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
                "1[.]119[.]194[.]253",
                "1[.]12[.]229[.]231",
                "1[.]188[.]100[.]134",
                "1[.]192[.]129[.]106",
                "1[.]204[.]34[.]47"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 11446,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 11446,
                "newInLastHour": 11446,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]0[.]164[.]165",
                "1[.]117[.]59[.]169",
                "1[.]162[.]197[.]67",
                "1[.]162[.]247[.]182",
                "1[.]20[.]175[.]122"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 12671,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 12671,
                "newInLastHour": 12671,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://42[.]56[.]161[.]20:38561/i",
                "hxxp://182[.]121[.]59[.]52:33634/bin[.]sh",
                "hxxp://182[.]116[.]48[.]4:52963/bin[.]sh",
                "hxxp://39[.]74[.]115[.]234:54244/i",
                "hxxp://115[.]49[.]232[.]50:33070/i"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 10884,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 10884,
                "newInLastHour": 8039,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"lokibyra[.]workers[.]dev\"",
                " \"ombwnn9g6z[.]workers[.]dev\"",
                " \"193[.]112[.]28[.]215:2443\"",
                " \"104[.]248[.]156[.]16:80\"",
                " \"178[.]128[.]196[.]79:8443\""
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
            "iocCount": 10679,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 10679,
                "newInLastHour": 4,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "009a05eaf082d20ae13a65abda12afd959cd76de",
                "e129189e0ed0545baad30c054b5f51301d766516",
                "fcfc3b257b12e4c699e343f4c415b60f642d88f6",
                "db7000ad8c148580941840ce41d8efb95f478854",
                "60d55d4ff506bc654814ba6b26308f999766054a"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 51273,
            "activeSources": 8,
            "criticalAlerts": 23733,
            "activeCampaigns": 248
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 13060,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "C2",
                "count": 10673,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 4282,
                "trend": "stable",
                "percentage": -2
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
                    "1[.]192[.]129[.]106",
                    "1[.]207[.]32[.]183",
                    "1[.]24[.]16[.]104"
                ]
            },
            {
                "name": "malware_download",
                "count": 12632,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://105[.]184[.]11[.]78:56927/bin[.]sh",
                    "hxxp://124[.]95[.]45[.]62:51036/i",
                    "hxxp://124[.]95[.]45[.]62:51036/bin[.]sh"
                ]
            },
            {
                "name": " \"win.asyncrat\"",
                "count": 2848,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"84[.]247[.]187[.]47:4546\"",
                    " \"160[.]191[.]88[.]70:443\"",
                    " \"160[.]191[.]88[.]70:80\""
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1724,
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
                "count": 1447,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "048bd151ab0a9c0add6d5bba9dc73521e42d9a20",
                    "559a55c8c7779e0037429794a8836a1039dbcdc3",
                    "8e492f36b0c1412f2d872dc9d51c974d27733d47"
                ]
            },
            {
                "name": " \"js.iclickfix\"",
                "count": 1337,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"www[.]sioutsider[.]com\"",
                    " \"www[.]sitecnasnc[.]it\"",
                    " \"www[.]teesstation[.]com\""
                ]
            },
            {
                "name": " \"win.cobalt_strike\"",
                "count": 1326,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"112[.]124[.]22[.]77:22\"",
                    " \"112[.]124[.]22[.]77:8080\"",
                    " \"112[.]124[.]22[.]77:4444\""
                ]
            },
            {
                "name": " \"unknown_loader\"",
                "count": 1106,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"8aee7a413af09d4409da870471da4f6af7f93cae25e1837f8b34e170b0309cb8\"",
                    " \"b31c56eb8d0f9b3cc952cf7acb06edb9f2ad5def493087f25ce6c3a9c504c208\"",
                    " \"831759a2b305feaaa9faaa6672b0fe45130ad0bd23fe2c0d6f0e063448b83e0e\""
                ]
            },
            {
                "name": " \"js.clearfake\"",
                "count": 798,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"rzmi7dyf[.]khive[.]store\"",
                    " \"khive[.]store\"",
                    " \"hxxps://cdn[.]jsdelivr[.]net/gh/19875567137/0C-21-ED-097-4480-3E21-D48-4E/34-19-08-3C-5D-F10C21\""
                ]
            },
            {
                "name": "Vidar",
                "count": 776,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "60d55d4ff506bc654814ba6b26308f999766054a",
                    "f567b9fc86b00e059bdfea261466360804fbdb38",
                    "00095e3cd5dfc929d16036132665d7e3e9ef7cd6"
                ]
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious IPs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": " \"win.vidar\"",
        "totalAttacksThisHour": 47498,
        "lastCalculated": "2026-09-14 02:33 IST"
    }
};
