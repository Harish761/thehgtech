// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-06-14T16:24:02.852983+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-06-14T16:24:02.537031+05:30",
    "lastUpdatedFormatted": "Jun 14, 2026 at 04:24 PM IST",
    "comparisonPeriod": "Jun 13 \u2013 Jun 14, 2026",
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
                "hxxps://www[.]tioshxnsu[.]top/",
                "hxxps://www[.]roblox[.]com[.]et/users/276111199329/profile",
                "hxxps://old[.]citiretailservices[.]citibankonlline[.]com/?ch=1&js=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9[.]eyJhdWQiOiJKb2tlbiIsImV4cCI6MTc4MTM5NDgzNSwiaWF0IjoxNzgxMzg3NjM1LCJpc3MiOiJKb2tlbiIsImpzIjoxLCJqdGkiOiIzMnNjNTdkYWoxYjVxZXNibmsxYXVkZ3AiLCJuYmYiOjE3ODEzODc2MzUsInRzIjoxNzgxMzg3NjM1MDUyNzYxfQ[.]OQzJHyNkOo-uJxtejQEvn2vC7rujHxI8MEMutF1U5mU&sid=5f734050-6772-11f1-a590-843cf7263a1a",
                "hxxps://www[.]robiox[.]com[.]py/users/416132331125/profile",
                "hxxp://steamcomimunity[.]com/tradeoffer/new/partner=783662133token=l4hhebGA21835"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 434,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 434,
                "newInLastHour": 55,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"56d3ab85530ed1a559535aee18800748a2ae6181662b094253cce3b0347506f4",
                " \"6ac2066c2d4f9ce251bc47e46c107eec0352534666d654357d18e3e4c92bebf6",
                " \"afc0fa5f3a840787838c191d84abf09061c9257fbf61cbf87df46a9434b098db",
                " \"f63cf8280593ff1824a29b8d9efbc9c79d42e42b43fa34cf4ff30768456e27b9",
                " \"886953bf66a8e99df032b4b78f084ea32407f8bfe07c4e5fc22ab370d969bc56"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1697,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1697,
                "newInLastHour": 1202,
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
                "1[.]10[.]185[.]224",
                "1[.]12[.]229[.]231",
                "1[.]15[.]14[.]29",
                "1[.]15[.]35[.]79",
                "1[.]15[.]51[.]236"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 5670,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 5670,
                "newInLastHour": 5670,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]1[.]220[.]166",
                "1[.]117[.]229[.]57",
                "1[.]14[.]28[.]29",
                "1[.]15[.]134[.]139",
                "1[.]15[.]221[.]192"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 17398,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 17398,
                "newInLastHour": 17398,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://61[.]168[.]50[.]135:56688/i",
                "hxxps://raz1eve[.]shop/Girls[.]apk",
                "hxxps://cryptex-core[.]pw/cryptex1[.]4[.]zip",
                "hxxp://196[.]135[.]205[.]23:49805/Mozi[.]a",
                "hxxp://60[.]19[.]217[.]18:34317/Mozi[.]m"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 3311,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 3311,
                "newInLastHour": 3248,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"38fead1469cca1192eedb9dd2fc305ddbb15760771223891d8e7db1a7a8fe2ea\"",
                " \"whatdatcindy[.]com\"",
                " \"hxxps://whatdatcindy[.]com/nfront[.]php\"",
                " \"g4me[.]flashpopdownloadbutton[.]monster\"",
                " \"verification-js-cdn[.]boats\""
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
            "iocCount": 9917,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 9917,
                "newInLastHour": 122,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "e81bedd0d62805a9bcad2b1cd652435cd9a59bcc",
                "48cf152a0f547ca2ee9668e57c7136e157ec96f5",
                "78e36aa21e77cf60799204d1fb0bac1f063aec42",
                "e3c434a1fc0269f0ad0fb43cdf93494e726d2f68",
                "a4f368e4e4c305b60212c016a4f1fa3a3a96a3de"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 46931,
            "activeSources": 8,
            "criticalAlerts": 27520,
            "activeCampaigns": 223
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 17737,
                "trend": "stable",
                "percentage": -3
            },
            {
                "category": "C2",
                "count": 9783,
                "trend": "stable",
                "percentage": -1
            },
            {
                "category": "Botnet",
                "count": 3013,
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
                "count": 17266,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://27[.]220[.]90[.]250:53481/bin[.]sh",
                    "hxxp://125[.]42[.]244[.]94:58975/bin[.]sh",
                    "hxxp://123[.]12[.]196[.]139:35512/bin[.]sh"
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
                    "1[.]12[.]229[.]231",
                    "1[.]15[.]35[.]79"
                ]
            },
            {
                "name": "AsyncRAT",
                "count": 1414,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "6a998d33a87c7b36c2be68ed5c1c63929c0d6be4",
                    "167ddfd671ef30c31528515389cfdd11d9251558",
                    "d42a4a7e721a0503d81e3f47c72a0f93c53e4f2c"
                ]
            },
            {
                "name": " \"win.cobalt_strike\"",
                "count": 1401,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"120[.]27[.]245[.]127:8080\"",
                    " \"120[.]27[.]245[.]127:443\"",
                    " \"120[.]27[.]245[.]127:80\""
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
                "count": 680,
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
                "count": 552,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "e3c434a1fc0269f0ad0fb43cdf93494e726d2f68",
                    "0505fd5b451911f764cd457d591ec4d355e609c8",
                    "a8f5e9a021f8df5a11743cc4ad447ccf81e7c300"
                ]
            },
            {
                "name": "LummaStealer",
                "count": 552,
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
                "name": "Spamhaus DROP List",
                "count": 495,
                "types": [
                    "ip-range"
                ],
                "sampleIndicators": [
                    "2.58.56.0/24",
                    "2.59.152.0/24",
                    "2.59.153.0/24"
                ]
            },
            {
                "name": "OffLoader",
                "count": 411,
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
        "fastestRisingThreat": "Spamhaus DROP List",
        "totalAttacksThisHour": 43000,
        "lastCalculated": "2026-06-14 16:24 IST"
    }
};
