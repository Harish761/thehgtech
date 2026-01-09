// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-01-10T02:05:24.939381+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-01-10T02:05:24.586534+05:30",
    "lastUpdatedFormatted": "Jan 10, 2026 at 02:05 AM IST",
    "comparisonPeriod": "Jan 09 \u2013 Jan 10, 2026",
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
                "hxxps://bit[.]proxette[.]cc/info?b=YTo0OntzOjU6ImxhYmVsIjtzOjA6IiI7czozOiJ1c3IiO2k6Mjk3O3M6NDoibm9wZCI7czoxMToiZmxleHByb3guY2MiO3M6MToibyI7aTozNTt9",
                "hxxp://davvnig[.]github[.]io/restpassword-login",
                "hxxp://sshekhar758[.]github[.]io/Projects",
                "hxxp://sso-uphold-com-cdnn-auth-en-u[.]webflow[.]io/",
                "hxxp://shilpa-sahu[.]github[.]io/Amazon-Clone-UI"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 614,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 614,
                "newInLastHour": 20,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"4f8ce641199c9064995018ffceb96c0fa69c79ad197f2b1ec987d47982e53bb6",
                " \"b44f296a861626f75ba90e2f0e0e48ec6b767e6191c331b97d4e1520729d43ae",
                " \"d3ba5979576b8b3e0b632e594857666b6fb2ace400f95ebae9efc980e13ddb09",
                " \"cfe5ac51b4c8b871b3a61c4727986eac6bfce831ef4e86de38f42b30648b2013",
                " \"8a41051d4c713ded84e23da06d7315ef07e5c0f6fc72884d42e038fd10b0ace6"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1466,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1466,
                "newInLastHour": 14,
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
                "1[.]14[.]3[.]240",
                "1[.]15[.]51[.]236",
                "1[.]157[.]99[.]66",
                "1[.]170[.]47[.]115",
                "1[.]176[.]134[.]241"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 5242,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 5242,
                "newInLastHour": 5242,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]194[.]236[.]11",
                "1[.]197[.]102[.]62",
                "1[.]214[.]197[.]163",
                "1[.]214[.]42[.]172",
                "1[.]220[.]64[.]218"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 24553,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 24553,
                "newInLastHour": 24553,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://175[.]174[.]4[.]223:55204/bin[.]sh",
                "hxxp://115[.]61[.]112[.]226:57898/bin[.]sh",
                "hxxp://42[.]229[.]161[.]122:52189/bin[.]sh",
                "hxxp://42[.]224[.]121[.]52:59604/i",
                "hxxp://123[.]7[.]227[.]37:58290/i"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 7442,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 7442,
                "newInLastHour": 7256,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"18[.]202[.]117[.]177:443\"",
                " \"213[.]163[.]198[.]111:10000\"",
                " \"217[.]154[.]217[.]139:443\"",
                " \"74[.]81[.]45[.]130:80\"",
                " \"91[.]219[.]238[.]142:9000\""
            ]
        },
        "Feodo Tracker": {
            "description": "Botnet C2 server IPs from Feodo Tracker. Tracks Dridex, Emotet, TrickBot, QakBot, and BazarLoader.",
            "website": "https://feodotracker.abuse.ch/",
            "updateFrequency": "Hourly",
            "iocCount": 4,
            "iocDataUrl": "https://thehgtech.com/ioc-data/feodo-tracker.json",
            "stats": {
                "total": 4,
                "newInLastHour": 4,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "137[.]184[.]9[.]29",
                "162[.]243[.]103[.]246",
                "167[.]86[.]75[.]145",
                "50[.]16[.]16[.]211"
            ]
        },
        "SSL Blacklist": {
            "description": "Malicious SSL certificates used by botnet C2 servers. Helps detect encrypted malware communications.",
            "website": "https://sslbl.abuse.ch/",
            "updateFrequency": "Daily",
            "iocCount": 233,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 233,
                "newInLastHour": 11,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "1c3edc0204ea789eef91aa7efa0dfe33b02bf7ef",
                "6da2919ee8ad8c6303f5db0f646510365c65a995",
                "5c4d91dc8735b4dabe0154b050ef49ed50ba1e2e",
                "8fa8b4de2a18dbf3bb43585b71891faf4c3ca8fc",
                "b172eb83a40e4012713db152e3f9e78fcc6822ed"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 58138,
            "activeSources": 8,
            "criticalAlerts": 33925,
            "activeCampaigns": 219
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 25203,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "C2",
                "count": 8722,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 7111,
                "trend": "stable",
                "percentage": 0
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
                "count": 24541,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://59[.]96[.]137[.]146:53815/i",
                    "hxxp://182[.]124[.]24[.]132:54514/i",
                    "hxxp://42[.]237[.]44[.]166:40909/i"
                ]
            },
            {
                "name": "CINS Threat List",
                "count": 15000,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]14[.]3[.]240",
                    "1[.]15[.]51[.]236",
                    "1[.]157[.]99[.]66"
                ]
            },
            {
                "name": " \"unknown\"",
                "count": 6542,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"192[.]252[.]176[.]59:5178\"",
                    " \"74[.]81[.]45[.]130:7443\"",
                    " \"111[.]230[.]19[.]96:8443\""
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1452,
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
                "count": 1366,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "8fa8b4de2a18dbf3bb43585b71891faf4c3ca8fc",
                    "7be9dbcc29554dd70c69f108d7763a35d7128ab1",
                    "014266e1afb2f9d30dd0616aaf27ec8fb6332fe2"
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
                "count": 602,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "659e6830e2b4abbaacfd7a6b8b16637dbc5465e0",
                    "f14faecdb4b6a8e4722eff35b08ea8dfadf7b5f4",
                    "2be6327a2b03aed6322898941f4e6c7ca29de8e5"
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
        "fastestRisingThreat": "Spamhaus DROP List",
        "totalAttacksThisHour": 52400,
        "lastCalculated": "2026-01-10 02:05 IST"
    }
};
