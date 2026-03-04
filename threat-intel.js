// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-03-04T18:49:29.245061+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-03-04T18:49:28.838193+05:30",
    "lastUpdatedFormatted": "Mar 04, 2026 at 06:49 PM IST",
    "comparisonPeriod": "Mar 03 \u2013 Mar 04, 2026",
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
                "hxxp://bafybeieioorq2gemlvbkffwwttxkijnn7lb3kjh4rbvh223jb5qrzesgqa[.]ipfs[.]dweb[.]link/rote634[.]html/",
                "hxxps://robiox[.]com[.]af/search/users/?keyword=",
                "hxxp://m[.]padisahabet[.]vip/",
                "hxxps://esdgte2[.]pages[.]dev/-/zh/gp/video/detail/b00cu0m74k/ref=atv_hm_hom_c_ob7591f8_brws_6_6?jic=8%7Cegrzdm9k/",
                "hxxps://shorten[.]tv/Summhaxatec"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 750,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 750,
                "newInLastHour": 111,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"d26acc49e0a1d0be5863f0407d64a622f6a37c474481df23948eb9e05021b0c4",
                " \"ef12aa289a6d744cccb7484234d56290899984f762a871bd45119b4fba75c2fe",
                " \"31cc1994f6fcbc4252908b1e45fdcd946feea3da0605d086214567143ade47f8",
                " \"05b34b01b200c4ac7a707c576eca50c9c4cb1e095750dcaa7bd4e0c0fa0aeb02",
                " \"d7eb98c48dd987b4b08e3383eda8ca971a231ff37ae1dc955af12ba331d86477"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1532,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1532,
                "newInLastHour": 3,
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
                "1[.]15[.]118[.]23",
                "1[.]170[.]61[.]110",
                "1[.]180[.]252[.]30",
                "1[.]188[.]101[.]189",
                "1[.]190[.]9[.]42"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 7144,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 7144,
                "newInLastHour": 7144,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]12[.]217[.]80",
                "1[.]13[.]6[.]145",
                "1[.]145[.]115[.]223",
                "1[.]145[.]98[.]105",
                "1[.]214[.]117[.]218"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 18949,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 18949,
                "newInLastHour": 18949,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://222[.]137[.]152[.]214:47599/i",
                "hxxp://42[.]227[.]247[.]75:37396/bin[.]sh",
                "hxxp://123[.]9[.]34[.]104:56032/i",
                "hxxp://42[.]227[.]176[.]178:35093/bin[.]sh",
                "hxxp://123[.]9[.]34[.]104:56032/bin[.]sh"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 1332,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 1332,
                "newInLastHour": 1138,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"h1gh-xpl0r[.]highexplos[.]in[.]net\"",
                " \"mcot[.]thai[.]org\"",
                " \"91[.]124[.]98[.]29:2525\"",
                " \"8a2yizw9[.]earedteach[.]digital\"",
                " \"v0ad7mre[.]earedteach[.]digital\""
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
            "iocCount": 9155,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 9155,
                "newInLastHour": 5,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "26cdbbd6a4fbb707f7975e40add9293ee86b5709",
                "7ac069fc350efebe9739bfd104f7c42e944d286d",
                "d5a586a42fd4e36396467ae8d16045a5efd6bada",
                "f856334cbdfb8b6d59158085280f3b830fab2fba",
                "db487bc68b31911611b2f35ebd5c2bd21a3ae5ec"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 47116,
            "activeSources": 8,
            "criticalAlerts": 28797,
            "activeCampaigns": 225
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 19671,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "C2",
                "count": 9126,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 1124,
                "trend": "stable",
                "percentage": -2
            },
            {
                "category": "Phishing",
                "count": 303,
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
                "count": 18870,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://42[.]227[.]238[.]104:36209/i",
                    "hxxp://115[.]55[.]235[.]2:49633/bin[.]sh",
                    "hxxp://42[.]227[.]238[.]104:36209/bin[.]sh"
                ]
            },
            {
                "name": "CINS Threat List",
                "count": 15000,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]15[.]118[.]23",
                    "1[.]170[.]61[.]110",
                    "1[.]180[.]252[.]30"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1530,
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
                "count": 1387,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "b4f112278f6f59e5e9d0a2aeb252c111a3ae8603",
                    "08ed72afb9e65a6b0c216c2f47dfea81d64c9289",
                    "41fe5784b1b9003fee99a449d0d7b6fa0ce038fe"
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
                "count": 630,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "ca70cb7bfbc3f071b0a03f7d77ed94339490ed8a",
                    "6f7f3607d11da6dbc7600245f36591f578272be3",
                    "7e54f4e1e1eaeeeaf7e1afe331c7307c96e04182"
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
                "count": 387,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "c6c5cbb14fe2839ef4ece10f4b65bf92808f8440",
                    "a5d8a396d7553814e5ac56706fde721dce28b849",
                    "dd1f8bbdf08eedbfdc5518f707f5009721d778a1"
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
        "fastestRisingThreat": "malware_download",
        "totalAttacksThisHour": 42653,
        "lastCalculated": "2026-03-04 18:49 IST"
    }
};
