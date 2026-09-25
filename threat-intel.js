// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-09-26T04:45:50.958371+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-09-26T04:45:50.697321+05:30",
    "lastUpdatedFormatted": "Sep 26, 2026 at 04:45 AM IST",
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
                "hxxp://yard749[.]pages[.]dev/",
                "hxxps://idshopee-59[.]blogspot[.]com/",
                "hxxps://security-server-landing-page--ginola080[.]replit[.]app/",
                "hxxps://tinyurl[.]com/2s3bx93x",
                "hxxps://trustpass[.]fun/o/fz204/7333160350973952#selectedbank9"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 2085,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 2085,
                "newInLastHour": 36,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"dfcc94aea6f4b58b8284a304eba53ed6f5137835c043147a7a894a6883702ca3",
                " \"989eaf22c518c16e5b4a8689a31b08395532d8d95484a7513e9776de4f76f4cf",
                " \"e56a09ca4554cba729520d8a6ba70dd937f007b26890ba40a97e24a6d097a56e",
                " \"ac31224da681cdaf4af410fc1c46e91ed98f51d2facdacbe08f2ee50cafcd95b",
                " \"1b1bcc19df2bed0d127422a99a02a17c1f6ab4e0ebd3367d4dd7c126a71a7754"
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
                "1[.]12[.]229[.]231",
                "1[.]177[.]162[.]3",
                "1[.]193[.]58[.]176",
                "1[.]193[.]63[.]81",
                "1[.]2[.]173[.]126"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 5001,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 5001,
                "newInLastHour": 5001,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]0[.]164[.]165",
                "1[.]161[.]144[.]132",
                "1[.]179[.]158[.]74",
                "1[.]203[.]186[.]149",
                "1[.]214[.]214[.]114"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 14648,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 14648,
                "newInLastHour": 14648,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://216[.]126[.]86[.]252:35767/bin[.]sh",
                "hxxp://42[.]238[.]120[.]21:49302/bin[.]sh",
                "hxxp://59[.]96[.]140[.]134:60111/i",
                "hxxp://112[.]239[.]97[.]213:52693/bin[.]sh",
                "hxxp://39[.]187[.]82[.]150:42316/bin[.]sh"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 8699,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 8699,
                "newInLastHour": 8316,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"mowanubi[.]workers[.]dev\"",
                " \"ey7e1ee6[.]kom303[.]com\"",
                " \"kom303[.]com\"",
                " \"rqecwy9l[.]betgit[.]casino\"",
                " \"415a732b88b4c3b3563cd942be670f024d39472d78c72ab045c627227ef613d9\""
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
            "iocCount": 10688,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 10688,
                "newInLastHour": 0,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "6769e788ce8fb4744dfb2ca047f4aa428ed075d5",
                "638b07a5521bc5b2de50dbed49e7eedcf451d838",
                "8130921b7ab8a3ed5d7df7dbedd7a583a7e55b8f",
                "389be5fc932b66d82d59d3b499a37cb540fdb62c",
                "9f25b7b257319fcbba26fb666fb9fb139e6b1100"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 53262,
            "activeSources": 8,
            "criticalAlerts": 27536,
            "activeCampaigns": 272
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 16750,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "C2",
                "count": 10786,
                "trend": "stable",
                "percentage": 2
            },
            {
                "category": "Botnet",
                "count": 4203,
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
                    "1[.]12[.]229[.]231",
                    "1[.]15[.]14[.]29",
                    "1[.]193[.]58[.]176"
                ]
            },
            {
                "name": "malware_download",
                "count": 14611,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://113[.]230[.]103[.]110:56084/bin[.]sh",
                    "hxxp://42[.]224[.]103[.]52:47712/i",
                    "hxxp://115[.]53[.]36[.]29:33277/bin[.]sh"
                ]
            },
            {
                "name": " \"unknown_loader\"",
                "count": 1886,
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
                "name": " \"js.iclickfix\"",
                "count": 1606,
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
                "name": "AsyncRAT",
                "count": 1452,
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
                "name": " \"win.cobalt_strike\"",
                "count": 1363,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"91[.]92[.]47[.]99:8088\"",
                    " \"47[.]114[.]83[.]19:1234\"",
                    " \"101[.]43[.]53[.]103:9123\""
                ]
            },
            {
                "name": " \"Mirai",
                "count": 1247,
                "types": [
                    "hash"
                ],
                "sampleIndicators": [
                    " \"0509a93983b51d8950ebfe3f098ab32e92794e610c36335c485472f6de48ff06",
                    " \"5e88950e5a7e46091b0eb0a038f4ac624ca62847cc71bec3b3f0b94ca0fbbecb",
                    " \"28e9b45889d78fe86ce451c91c2bd4eb32fc01cb9f66f5602314c6bafc1c3b6a"
                ]
            },
            {
                "name": "Vidar",
                "count": 803,
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
        "fastestRisingThreat": " \"unknown_loader\"",
        "totalAttacksThisHour": 43306,
        "lastCalculated": "2026-09-26 04:45 IST"
    }
};
