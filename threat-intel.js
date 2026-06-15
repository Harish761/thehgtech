// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-06-15T10:52:29.498868+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-06-15T10:52:29.160127+05:30",
    "lastUpdatedFormatted": "Jun 15, 2026 at 10:52 AM IST",
    "comparisonPeriod": "Jun 14 \u2013 Jun 15, 2026",
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
                "hxxps://grupocaceres[.]mx/file/sharepoint-3D7/",
                "hxxps://faecbook[.]vn/aigapbannayodaulienhecohauta?a",
                "hxxps://netflixpayment[.]creditcard/",
                "hxxps://virus-control[.]com/2513501[.]doc/18a80a/fad0f483-81b2-45c6-ad47-7272058d9cb6/",
                "hxxps://portalexpress[.]net/2fb8071a-0463-4603-8a2a-b8859236a0b1/a/194d7850-4d38-4b1d-93bd-988b7f0ac543/ccp?lid=d18f1519-03d3-4417-8f86-a0e6e2382c27&lang=en-GB&asid=701c25a7-804f-4989-96a2-ef584af60cb0&orgId=11f86543-48e6-4c96-a74f-d6f397914d48/"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 411,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 411,
                "newInLastHour": 60,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"c96c4c457cd79715aec52030a9492806afe54facaff15b6bc972470c6d964300",
                " \"6b98b4fa9b838b3164582d9a1329a7a6ff589d689b842d5d93c3f176775e225c",
                " \"faad3e86e2352660be852150af3ac8685b40887d58f25d3f0cd578bddbfa77a7",
                " \"dc68a7322cf65a249a08034b50d00f22b73782234ae9728760f73478f6d7caaf",
                " \"a96a3d39277dce0660dfc1a24843e6a6df1a45fa6c00a48b773096f0ef0eb24d"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1668,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1668,
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
                "1[.]15[.]35[.]79",
                "1[.]15[.]36[.]31",
                "1[.]164[.]107[.]152",
                "1[.]164[.]110[.]70",
                "1[.]172[.]245[.]166"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 5524,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 5524,
                "newInLastHour": 5524,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]1[.]220[.]166",
                "1[.]14[.]28[.]29",
                "1[.]14[.]49[.]40",
                "1[.]15[.]134[.]139",
                "1[.]192[.]61[.]19"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 17163,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 17163,
                "newInLastHour": 17163,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://42[.]229[.]220[.]76:44022/bin[.]sh",
                "hxxp://110[.]36[.]4[.]114:41307/i",
                "hxxps://qilapvvt[.]ganuneasasi[.]xyz/?ublib=03634b15-1e50-421f-b0fb-c7c1f5242acd",
                "hxxps://pnuwf[.]bankefile[.]com/a585e437-f996-4efa-916c-4bbad2290c8f",
                "hxxps://yl1r3n6e[.]shartbandifootballkade[.]online/?ublib=6106c9f6-2ff1-4f99-8711-1d19b7af7f1b"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 3464,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 3464,
                "newInLastHour": 3389,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"vazqhwad[.]sadreislam[.]xyz\"",
                " \"qilapvvt[.]ganuneasasi[.]xyz\"",
                " \"9zpx37x0[.]ganuneasasi[.]xyz\"",
                " \"ewa1b63u[.]fununetadris[.]shop\"",
                " \"ggt[.]glamisrents[.]com\""
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
            "iocCount": 9870,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 9870,
                "newInLastHour": 28,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "a9f2914bb882008d0bb1bd515e4b5b289eba24a0",
                "d3cc58d42356a8c4436ae4c534058891f7aa4704",
                "91277e257db81a1f95bfac515bf69523c78d1274",
                "bebfbdbe08ede143137c80c0e337e686f1698299",
                "e81bedd0d62805a9bcad2b1cd652435cd9a59bcc"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 48362,
            "activeSources": 8,
            "criticalAlerts": 27925,
            "activeCampaigns": 223
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 18044,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "C2",
                "count": 9881,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 3060,
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
                "percentage": 98
            },
            {
                "name": "Tech",
                "percentage": 1
            },
            {
                "name": "Finance",
                "percentage": 0
            }
        ],
        "campaigns": [
            {
                "name": "malware_download",
                "count": 17581,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxps://aasdaonz[.]mechanickhodakarami[.]shop/b657f4ef-fa14-46a2-95a9-be50525e3be0",
                    "hxxp://115[.]48[.]237[.]18:36275/i",
                    "hxxp://125[.]44[.]19[.]144:36745/i"
                ]
            },
            {
                "name": "CINS Threat List",
                "count": 15000,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]10[.]185[.]224",
                    "1[.]15[.]14[.]29",
                    "1[.]15[.]35[.]79"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1683,
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
                "name": " \"win.cobalt_strike\"",
                "count": 1447,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"103[.]47[.]83[.]115:443\"",
                    " \"103[.]47[.]83[.]115:8080\"",
                    " \"23[.]254[.]129[.]251:443\""
                ]
            },
            {
                "name": "AsyncRAT",
                "count": 1413,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "167ddfd671ef30c31528515389cfdd11d9251558",
                    "d42a4a7e721a0503d81e3f47c72a0f93c53e4f2c",
                    "b08643668d383e55dd2698e1bcc34571c8dfcc6a"
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
                "count": 686,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "ae590545961e96de860ea7434c0e8c69b924de6f",
                    "28c3106cd1cec9a5dfec7f2ba3b0dd7e70784429",
                    "bf26c599e3f5ea932f7b8c592138d42d49837713"
                ]
            },
            {
                "name": "Vidar",
                "count": 584,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "d3cc58d42356a8c4436ae4c534058891f7aa4704",
                    "91277e257db81a1f95bfac515bf69523c78d1274",
                    "bebfbdbe08ede143137c80c0e337e686f1698299"
                ]
            },
            {
                "name": "LummaStealer",
                "count": 553,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "272e76f605bec1da1ea719df8dc0e7269de7d44e",
                    "ab7f083d77dc2b1b71c0aec9a417e0a5a036a5f9",
                    "7ce02a4df627573696141e40970ef60e246f9f3f"
                ]
            },
            {
                "name": "OffLoader",
                "count": 422,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "736a1766d64ab37f96483dcbcd159c86fc49834e",
                    "fb65cb3929bf5df8ed6de3cb5b2c6b87b3f6e3d9",
                    "7bba8eb1da43142534144a1aaf30b1be8a5ed134"
                ]
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious URLs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": "SSH Attacks",
        "totalAttacksThisHour": 41483,
        "lastCalculated": "2026-06-15 10:52 IST"
    }
};
