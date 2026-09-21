// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-09-21T10:16:10.198720+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-09-21T10:16:09.900173+05:30",
    "lastUpdatedFormatted": "Sep 21, 2026 at 10:16 AM IST",
    "comparisonPeriod": "Sep 20 \u2013 Sep 21, 2026",
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
                "hxxp://onlineuserss[.]github[.]io/yahoo/verify[.]html",
                "hxxps://www[.]roblox[.]ly/users/1858923612/profile",
                "hxxp://addqs[.]com/au",
                "hxxps://www[.]roblox[.]com[.]hr/users/2645809249/profile",
                "hxxp://s[.]teams-ts[.]com/p/fjbd-cbch/ehimktft"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 1650,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 1650,
                "newInLastHour": 167,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"9e7d77c7df21abcdf0ff7a6f78c9fa47084f070306b6286fccc2c7a8199b1c56",
                " \"16f03091a93bf25c5f206c41bc41e2a238c1c55a3750ce9335e818dda6486074",
                " \"9087e723c9aea3ec4d8fca4c410fe41941b8eb158dccff432b8973332ed51ddc",
                " \"fb6ffe4171a0af5f7a30b978c55aa35ce00e4ee1cbf253b432a907f5c8cc7ac1",
                " \"c34b31ba33e12ab9251b02574514a81aa6d7ca974f8b8bb87b193695be69506c"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1711,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1711,
                "newInLastHour": 1,
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
                "1[.]14[.]69[.]226",
                "1[.]15[.]1[.]125",
                "1[.]173[.]106[.]65",
                "1[.]189[.]89[.]243",
                "1[.]24[.]16[.]149"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 11994,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 11994,
                "newInLastHour": 11994,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]0[.]164[.]165",
                "1[.]14[.]192[.]95",
                "1[.]14[.]209[.]20",
                "1[.]15[.]221[.]192",
                "1[.]161[.]144[.]132"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 12937,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 12937,
                "newInLastHour": 12937,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://113[.]168[.]88[.]3:33032/i",
                "hxxp://36[.]88[.]164[.]82:58641/i",
                "hxxp://120[.]28[.]200[.]110:42645/i",
                "hxxp://116[.]10[.]133[.]107:48435/i",
                "hxxp://123[.]11[.]13[.]174:40278/i"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 6283,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 6283,
                "newInLastHour": 5176,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"y7muyebir6[.]workers[.]dev\"",
                " \"yp1f3wpv[.]kickoffkingdom[.]com\"",
                " \"kickoffkingdom[.]com\"",
                " \"yfpdz41265[.]workers[.]dev\"",
                " \"42[.]193[.]169[.]176:8084\""
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
            "iocCount": 10752,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 10752,
                "newInLastHour": 24,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "0db74536080bbf99f4e8e8b53efd477d1ccaf3e0",
                "8daac8268eaa54e2c2d1aef6108fba9ba29eaa36",
                "372b91c0d31a75b4e1765af998d984881e34dab1",
                "dec7517543aba8ea73a1b336a0e72230bdfab6cc",
                "4c48cf2aee29c6b3dd9aceb27ae6674b27cec999"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 48670,
            "activeSources": 8,
            "criticalAlerts": 25467,
            "activeCampaigns": 232
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 14761,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "C2",
                "count": 10706,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 4169,
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
                    "1[.]14[.]156[.]5",
                    "1[.]14[.]69[.]226",
                    "1[.]189[.]89[.]243"
                ]
            },
            {
                "name": "malware_download",
                "count": 13029,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://170[.]238[.]123[.]66:37609/bin[.]sh",
                    "hxxp://175[.]107[.]209[.]245:36715/bin[.]sh",
                    "hxxp://182[.]113[.]232[.]150:44550/i"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1710,
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
                    "372b91c0d31a75b4e1765af998d984881e34dab1",
                    "9700462dfd419d0295b2753079208e939a853dce",
                    "048bd151ab0a9c0add6d5bba9dc73521e42d9a20"
                ]
            },
            {
                "name": " \"win.cobalt_strike\"",
                "count": 1376,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"45[.]192[.]204[.]42:2083\"",
                    " \"45[.]192[.]204[.]42:2053\"",
                    " \"45[.]192[.]204[.]42:8080\""
                ]
            },
            {
                "name": " \"win.asyncrat\"",
                "count": 1359,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"52[.]47[.]77[.]229:2000\"",
                    " \"102[.]220[.]163[.]36:6606\"",
                    " \"1746a28841e6de3faad920079ff9b2b041e2fbcfa43c15a0bd9de5901a5f2c49\""
                ]
            },
            {
                "name": " \"n/a",
                "count": 1055,
                "types": [
                    "hash"
                ],
                "sampleIndicators": [
                    " \"17c15e2b10ba39f8a1e298a84815fab3ca3ebec7c5b9ba6ee436df531d2b0a91",
                    " \"3ebe95f9159c0109766c79f284b736e05da410e55454d4644998a0966c7c6985",
                    " \"9e33ff78de4b1ddf3ceb3862613f3587e2dbf714b15adac5f4c1f1e3c17902d6"
                ]
            },
            {
                "name": "Vidar",
                "count": 782,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "dec7517543aba8ea73a1b336a0e72230bdfab6cc",
                    "4c48cf2aee29c6b3dd9aceb27ae6674b27cec999",
                    "ed64fe5bf9ba187fb8b7a54fce4a986d6681f4f2"
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
                "count": 705,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "ba3714d484afb75fd03911c59aa096cee9595955",
                    "8cffe4fa8f624cb4c15790c414e04acde61e3651",
                    "de0a287fb9997f0ffbd36df79b13cfda63f0bfcd"
                ]
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious IPs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": " \"unknown_loader\"",
        "totalAttacksThisHour": 45604,
        "lastCalculated": "2026-09-21 10:16 IST"
    }
};
