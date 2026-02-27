// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-02-27T22:23:03.772863+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-02-27T22:23:03.487951+05:30",
    "lastUpdatedFormatted": "Feb 27, 2026 at 10:23 PM IST",
    "comparisonPeriod": "Feb 26 \u2013 Feb 27, 2026",
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
                "hxxp://www[.]re11133[.]vercel[.]app/",
                "hxxps://admin2[.]ondoc[.]co[.]kr/vxgo4kiuum3baoChromepublicfari537[.]html?eta=3mail@a[.]b[.]c0",
                "hxxp://pub-8c1be1f2764c443096fe5ba20d7802b5[.]r2[.]dev/index[.]html",
                "hxxp://www[.]airbnb-demo-jade[.]vercel[.]app/",
                "hxxps://www[.]5mp[.]eu/fajlok2/email/index_www[.]5mp[.]eu_[.]html"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 804,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 804,
                "newInLastHour": 70,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"628485a140d84da6f1232b8aee4ad371a21e013e19f262839e9ad288a5ef9c14",
                " \"6822b1588ecf119ca8e8dc868812c371aa37c61417f522bc9f064450c7f7b20c",
                " \"f15f864bfd637a9577813fa24e7a77b64a7a098bad8f020f09f7dc067305dbd4",
                " \"e11074ed1e3e2c07461249b83510a177fd8254967fe864d1af190f4348855de7",
                " \"d6d5dd4d717ae9b2812b24267247e4b6170353114c90f70e985f4c8cf8104785"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1530,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1530,
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
                "1[.]15[.]22[.]112",
                "1[.]15[.]94[.]7",
                "1[.]170[.]61[.]110",
                "1[.]183[.]13[.]74",
                "1[.]188[.]101[.]101"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 6369,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 6369,
                "newInLastHour": 6369,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]14[.]12[.]141",
                "1[.]204[.]166[.]3",
                "1[.]214[.]197[.]163",
                "1[.]214[.]42[.]172",
                "1[.]220[.]64[.]218"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 22031,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 22031,
                "newInLastHour": 22031,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://115[.]50[.]226[.]133:40969/i",
                "hxxp://182[.]113[.]204[.]223:51875/i",
                "hxxp://110[.]37[.]9[.]197:35305/i",
                "hxxps://meetmeupgooupglemeet[.]info/GoodgleMeetup/Windows/download[.]php",
                "hxxp://110[.]37[.]9[.]197:35305/bin[.]sh"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 848,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 848,
                "newInLastHour": 848,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"api[.]kalygenesis[.]xyz\"",
                " \"5[.]252[.]153[.]53:3333\"",
                " \"rockcredit[.]space\"",
                " \"da2n21zm01f[.]com\"",
                " \"hinajonuci[.]cc\""
            ]
        },
        "Feodo Tracker": {
            "description": "Botnet C2 server IPs from Feodo Tracker. Tracks Dridex, Emotet, TrickBot, QakBot, and BazarLoader.",
            "website": "https://feodotracker.abuse.ch/",
            "updateFrequency": "Hourly",
            "iocCount": 3,
            "iocDataUrl": "https://thehgtech.com/ioc-data/feodo-tracker.json",
            "stats": {
                "total": 3,
                "newInLastHour": 3,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "162[.]243[.]103[.]246",
                "178[.]62[.]3[.]223",
                "34[.]204[.]119[.]63"
            ]
        },
        "SSL Blacklist": {
            "description": "Malicious SSL certificates used by botnet C2 servers. Helps detect encrypted malware communications.",
            "website": "https://sslbl.abuse.ch/",
            "updateFrequency": "Daily",
            "iocCount": 9107,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 9107,
                "newInLastHour": 8,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "567366638bf367630666c5ae9af1421fb2248f87",
                "08ed72afb9e65a6b0c216c2f47dfea81d64c9289",
                "22e8d373d50d4caa79a80fa3e0126b2f4d71e6f1",
                "08cd4be2f1f1a98c109e2f2de8837aefe9737e9f",
                "1c4c194832b7eb2412d82d5136accde3821bb186"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 49403,
            "activeSources": 8,
            "criticalAlerts": 31764,
            "activeCampaigns": 217
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 22689,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "C2",
                "count": 9075,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 656,
                "trend": "stable",
                "percentage": -4
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
                "count": 21884,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://117[.]193[.]151[.]154:53267/i",
                    "hxxp://42[.]231[.]93[.]16:51402/i",
                    "hxxp://117[.]193[.]151[.]154:53267/bin[.]sh"
                ]
            },
            {
                "name": "CINS Threat List",
                "count": 15000,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]11[.]132[.]194",
                    "1[.]15[.]94[.]7",
                    "1[.]170[.]61[.]110"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1534,
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
                "count": 1383,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "bef81c1fd26e84e5e25a4182bf668304ba2891da",
                    "adb1b31a6283691b205839f5e3ce4f8ed7aa5f54",
                    "97e58eec776ad990a10d1f4a932e1a4ae48636b3"
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
                "count": 627,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "1489745b5c5f066b8beaec7181567513ca9eafd2",
                    "a49ad700b0042b6d1e20153a6253bcc8ff17cff2",
                    "56dd33cfae66685bb9cf7f923d6e6752ff791705"
                ]
            },
            {
                "name": "LummaStealer",
                "count": 537,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "2987e30402370bdcbf291aedc9cd52a9a79bda0c",
                    "6fd95f4a2d9cec238cbe2e1756890381c4fae3cb",
                    "e2293f74d8d72bde90bb0424038259a9e3126e1b"
                ]
            },
            {
                "name": "Vidar",
                "count": 374,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "a9376a357aebf80af91a289f9fcb916ee1c04384",
                    "2fe17ef982c9dcbecd93baa4c77df1bf7c8d19b0",
                    "66afb632b2131a12c4ee5896e88bc485662077eb"
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
        "topAttackVector": "Malicious URLs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": "SSH Attacks",
        "totalAttacksThisHour": 44629,
        "lastCalculated": "2026-02-27 22:23 IST"
    }
};
