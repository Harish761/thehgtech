// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-09-21T02:30:19.796490+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-09-21T02:30:19.485777+05:30",
    "lastUpdatedFormatted": "Sep 21, 2026 at 02:30 AM IST",
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
                "hxxp://suhanir7[.]github[.]io/Amazon_Clone",
                "hxxp://addqo[.]com/pl",
                "hxxps://main[.]d3thcdi1mb7dsr[.]amplifyapp[.]com/",
                "hxxp://varsha24-01[.]github[.]io/Amazon_Clone",
                "hxxps://ledger-live-downlloadd[.]blogspot[.]com/?m=1"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 1692,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 1692,
                "newInLastHour": 58,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"935e24466c7b67ee29b2767189572eb845940811d0a3e98843a65bb9f93fab65",
                " \"17cffe727712a861b652098cfa78a72616fe1075d1ec0066524eebe3ee826eb6",
                " \"3b4e327098bd46bee1e4c7c18f5c73900a9ddcda9131fdd73cfae4ef76b7ba47",
                " \"e412a1e9c8de8d806cc27ab46974609dd0526b6591c08cd5b83d61ee52a0485d",
                " \"063eabca563a7dc180986c04018ff49c7853db9d3e4adec2a960ffb1a7340066"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1634,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1634,
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
                "1[.]14[.]156[.]5",
                "1[.]14[.]69[.]226",
                "1[.]15[.]14[.]29",
                "1[.]173[.]106[.]65",
                "1[.]189[.]89[.]243"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 12032,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 12032,
                "newInLastHour": 12032,
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
            "iocCount": 13020,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 13020,
                "newInLastHour": 13020,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://175[.]165[.]67[.]92:58588/bin[.]sh",
                "hxxp://109[.]235[.]7[.]1:52247/bin[.]sh",
                "hxxp://222[.]140[.]183[.]43:37860/bin[.]sh",
                "hxxp://115[.]58[.]182[.]123:33235/bin[.]sh",
                "hxxp://221[.]14[.]42[.]14:50409/i"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 6173,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 6173,
                "newInLastHour": 5066,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"k4d8qigu[.]houtbriketten[.]net\"",
                " \"houtbriketten[.]net\"",
                " \"106[.]54[.]201[.]103:3000\"",
                " \"106[.]54[.]201[.]103:888\"",
                " \"106[.]54[.]201[.]103:22\""
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
            "iocCount": 10660,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 10660,
                "newInLastHour": 8,
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
            "totalIndicators": 48636,
            "activeSources": 8,
            "criticalAlerts": 25443,
            "activeCampaigns": 231
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 14721,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "C2",
                "count": 10722,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 4193,
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
                "name": "CINS Threat List",
                "count": 15000,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]14[.]156[.]5",
                    "1[.]14[.]69[.]226",
                    "1[.]15[.]14[.]29"
                ]
            },
            {
                "name": "malware_download",
                "count": 13006,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://79[.]106[.]74[.]167:39800/bin[.]sh",
                    "hxxp://45[.]172[.]218[.]181:43568/bin[.]sh",
                    "hxxp://62[.]60[.]226[.]140/files/7782139129/R0AQKpA[.]exe"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1700,
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
                "count": 1365,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"123[.]57[.]146[.]34:8080\"",
                    " \"123[.]57[.]146[.]34:443\"",
                    " \"47[.]121[.]130[.]18:18081\""
                ]
            },
            {
                "name": " \"win.asyncrat\"",
                "count": 1361,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"1746a28841e6de3faad920079ff9b2b041e2fbcfa43c15a0bd9de5901a5f2c49\"",
                    " \"174ab0c6b0889b8d8dfa0f460d465afceaafc0cb1a1273e9ad4ed55c86019138\"",
                    " \"17547e81212d54897a4060e58d4575b270565da3220bb59b5ca90673253c411e\""
                ]
            },
            {
                "name": " \"n/a",
                "count": 1035,
                "types": [
                    "hash"
                ],
                "sampleIndicators": [
                    " \"87eef6421c2d5d92b3ece83405282aae9b4a79cb0d75bc53940fe41e8548096f",
                    " \"e4f579f3949bdb1097c6f9f8abfc6e0fa3f8e340a47cb5b8bcae8eb01af539a8",
                    " \"2249b963cbc52f98bb3423bdea6666e7663f86f39a6432f215a5db4ce73735a6"
                ]
            },
            {
                "name": "Vidar",
                "count": 788,
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
        "fastestRisingThreat": "malware_download",
        "totalAttacksThisHour": 45500,
        "lastCalculated": "2026-09-21 02:30 IST"
    }
};
