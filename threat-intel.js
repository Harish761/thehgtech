// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-01-14T00:25:54.027044+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-01-14T00:25:53.537475+05:30",
    "lastUpdatedFormatted": "Jan 14, 2026 at 12:25 AM IST",
    "comparisonPeriod": "Jan 13 \u2013 Jan 14, 2026",
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
                "hxxp://365[.]505-606-707-808-909[.]canvbot[.]cn/betx/",
                "hxxp://netfimarketing[.]com/tde30e272t540c475fa9057c118s9ec03551[.]html",
                "hxxps://ipfs[.]io/ipfs/bafybeibpmuu4kmzgpvuboaeuqzia6jivzzxipx2cbruzvozskr2apfh42e",
                "hxxps://emailupdatechecking[.]weebly[.]com/",
                "hxxps://www[.]roblox[.]com[.]ml/users/7400871224/profile"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 840,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 840,
                "newInLastHour": 105,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"889da0f023a80481b99bef43e0175ed8450b976ea10c1ea105a0df8f8ba3ebbd",
                " \"1fd111954e3eefeef07557345918ea6527898b741dfd9242ff4f5c2ddceaa5e9",
                " \"a7a2fee71a87b93f3878d986dbde4220af38bb24c101aff8d61387a5b1605e20",
                " \"618cd001c2cf432346bc6beb98236cbfcf7feb50ceb2dfd43c6f0e58872dee67",
                " \"90d552da574192494b4280a1ee733f0c8238f5e07e80b31f4b8e028ba88ee7ea"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1461,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1461,
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
                "1[.]15[.]14[.]29",
                "1[.]15[.]51[.]236",
                "1[.]170[.]47[.]115",
                "1[.]172[.]195[.]228",
                "1[.]172[.]200[.]46"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 6877,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 6877,
                "newInLastHour": 6877,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]12[.]251[.]79",
                "1[.]12[.]64[.]80",
                "1[.]194[.]219[.]159",
                "1[.]194[.]233[.]49",
                "1[.]214[.]197[.]163"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 24305,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 24305,
                "newInLastHour": 24305,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://106[.]57[.]1[.]63:57132/i",
                "hxxp://42[.]7[.]30[.]89:53297/i",
                "hxxp://36[.]88[.]136[.]202:33435/bin[.]sh",
                "hxxp://110[.]37[.]64[.]254:54935/i",
                "hxxp://microsoft-telemetry[.]at/ozo/teq[.]exe"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 30706,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 30706,
                "newInLastHour": 30328,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"77[.]49[.]110[.]218:995\"",
                " \"3[.]27[.]190[.]83:443\"",
                " \"207[.]56[.]206[.]18:443\"",
                " \"193[.]26[.]115[.]238:5000\"",
                " \"150[.]139[.]157[.]24:10250\""
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
            "iocCount": 8773,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 8773,
                "newInLastHour": 3,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "6b965254f0991e2c19ba17ce4ba589dd6c2f2fda",
                "bee0ff91f5800361e8e470af7c0a12f06b8fdcf8",
                "15640ab78d74431d1643b4eb62ae3d9153666ae8",
                "8c03dadea265fd3a083ceb6610d6a89411d635ea",
                "c5dd75a59ccf69e1112a3e5667d0975a242fbc4a"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 81131,
            "activeSources": 8,
            "criticalAlerts": 33650,
            "activeCampaigns": 224
        },
        "topThreats": [
            {
                "category": "Botnet",
                "count": 30259,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Malware",
                "count": 24899,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "C2",
                "count": 8751,
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
                "name": " \"unknown\"",
                "count": 29842,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"nsnhzysbntsqdwpys6mhml33muccsvterxewh5rkbmcab7bg2ttevjqd[.]onion\"",
                    " \"tgsst34i6z4mwdj2kpigixxb3k3xfz7xhuqnsowvfvyu3snm6nv4s5ad[.]onion\"",
                    " \"myeli53ogsryjg2kob4xqxtwkr5oc5zj7jr5fcfizpytwe566k5thxyd[.]onion\""
                ]
            },
            {
                "name": "malware_download",
                "count": 24023,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://103[.]67[.]197[.]187:9999/Google_Chatgpt[.]exe",
                    "hxxp://103[.]67[.]197[.]187:9999/Dism_boxed2[.]exe",
                    "hxxp://42[.]235[.]189[.]141:34680/i"
                ]
            },
            {
                "name": "CINS Threat List",
                "count": 15000,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]15[.]14[.]29",
                    "1[.]15[.]51[.]236",
                    "1[.]170[.]47[.]115"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1460,
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
                "count": 1371,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "9655effafe3c6c663b4e64c12e41c9495e4fdfee",
                    "f5ceb2552024990dc2a9057b8938c4a0c1ea9fe3",
                    "d8c4d1a95c17efd9c3d51ddcbe2010d5f1b0de14"
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
                "count": 604,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "d3d8dc6a9d41a817b319484d943d3c86be823650",
                    "ab3f93138fcf2dbaad6e32fe4a5e8c06ca499cfa",
                    "659e6830e2b4abbaacfd7a6b8b16637dbc5465e0"
                ]
            },
            {
                "name": " \"Mirai",
                "count": 550,
                "types": [
                    "hash"
                ],
                "sampleIndicators": [
                    " \"928d92813b2c39909b2ceb8fa6f474a5f819eef41cf3673feb1510f65c0c41a5",
                    " \"d7ab9c0b6156e95d404191048b32be849ac99529f4d7104ef0a5340ab485b419",
                    " \"4244def73e3630fb9b88e80c6b1451dc8d4cd300ede84e21bf2cef2a9e1ccc78"
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
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious URLs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": "SSH Attacks",
        "totalAttacksThisHour": 76923,
        "lastCalculated": "2026-01-14 00:25 IST"
    }
};
