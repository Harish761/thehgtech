// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-01-12T00:21:46.404419+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-01-12T00:21:46.117706+05:30",
    "lastUpdatedFormatted": "Jan 12, 2026 at 12:21 AM IST",
    "comparisonPeriod": "Jan 11 \u2013 Jan 12, 2026",
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
                "hxxp://meytamask-logiiees[.]godaddysites[.]com/",
                "hxxp://iman110[.]com/",
                "hxxps://wedfew1[.]pages[.]dev/amz-books/discover?node=1&navStore=books&ref_=dp_bc_aui_C_2",
                "hxxps://www[.]robiox[.]com[.]py/users/169240651524/profile",
                "hxxps://surajranaware[.]github[.]io/Amazon_Clone/"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 896,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 896,
                "newInLastHour": 115,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"e3a50a907b6c71d9f3cb7571980cf3070ec0fadc6fb2a55516d5ff95083990f3",
                " \"62a3caec3c2fdd84163df5ee97033a35646fe2c2bf53bbdcd6ddde3a75d86b37",
                " \"58aa8091e5949c435203e9c3f44cf8eb4ccbc9852fa1e45f11b7551e7ba19f13",
                " \"96cd73b66c0dc79abf670ecdf6cf13e860862eec59f68275de72c65d44b1b352",
                " \"0583a4ac5691c6315ebf592b8bb02442889f7c8f303969101532ad6654a75b55"
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
                "1[.]0[.]170[.]118",
                "1[.]10[.]247[.]1",
                "1[.]14[.]3[.]240",
                "1[.]15[.]14[.]29",
                "1[.]15[.]51[.]236"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 5687,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 5687,
                "newInLastHour": 5687,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]145[.]90[.]220",
                "1[.]159[.]145[.]162",
                "1[.]161[.]39[.]103",
                "1[.]194[.]236[.]11",
                "1[.]196[.]177[.]49"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 24341,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 24341,
                "newInLastHour": 24341,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://117[.]200[.]92[.]201:58989/i",
                "hxxp://42[.]176[.]37[.]236:39953/bin[.]sh",
                "hxxp://168[.]195[.]7[.]106:58956/i",
                "hxxp://168[.]195[.]7[.]106:58956/bin[.]sh",
                "hxxp://42[.]180[.]38[.]60:57159/i"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 725,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 725,
                "newInLastHour": 518,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"99[.]83[.]220[.]247:443\"",
                " \"3[.]209[.]181[.]254:443\"",
                " \"207[.]56[.]195[.]76:443\"",
                " \"207[.]56[.]192[.]203:443\"",
                " \"18[.]190[.]71[.]162:443\""
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
            "iocCount": 8763,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 8763,
                "newInLastHour": 4,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "9485d84666facdf62f9eb83088e526261477ca02",
                "e0ea6068f391170ab5ed0eec7f81183d6b9597e0",
                "aa32c04a00de32843bacb96f60c60a3ce34cbf05",
                "754974f9c9b1d75b2492ae363e7289124728d5b1",
                "ab3f93138fcf2dbaad6e32fe4a5e8c06ca499cfa"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 51404,
            "activeSources": 8,
            "criticalAlerts": 33895,
            "activeCampaigns": 205
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 25159,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "C2",
                "count": 8736,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 443,
                "trend": "stable",
                "percentage": -3
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
                "count": 24266,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://42[.]232[.]231[.]41:59243/i",
                    "hxxp://182[.]126[.]240[.]225:55714/i",
                    "hxxp://123[.]12[.]81[.]131:33807/i"
                ]
            },
            {
                "name": "CINS Threat List",
                "count": 15000,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]10[.]247[.]1",
                    "1[.]14[.]3[.]240",
                    "1[.]15[.]14[.]29"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1466,
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
                "count": 1368,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "e0ea6068f391170ab5ed0eec7f81183d6b9597e0",
                    "8fa8b4de2a18dbf3bb43585b71891faf4c3ca8fc",
                    "7be9dbcc29554dd70c69f108d7763a35d7128ab1"
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
                    "ab3f93138fcf2dbaad6e32fe4a5e8c06ca499cfa",
                    "659e6830e2b4abbaacfd7a6b8b16637dbc5465e0",
                    "f14faecdb4b6a8e4722eff35b08ea8dfadf7b5f4"
                ]
            },
            {
                "name": " \"Mirai",
                "count": 557,
                "types": [
                    "hash"
                ],
                "sampleIndicators": [
                    " \"0330ccbedd93fbed9db02e27b391efd39f803b8cdc9d094de49e5c95eb7139ec",
                    " \"32ec71e6bd0173cdedb18e0a0ee36b9441e65ffb5e809f4773832aef3d909d58",
                    " \"e96a7a61b59fed58fbb34fadfcef4629705be63b186970917f62f3f7f990cfca"
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
        "fastestRisingThreat": " \"Mirai",
        "totalAttacksThisHour": 45969,
        "lastCalculated": "2026-01-12 00:21 IST"
    }
};
