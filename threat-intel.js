// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-06-11T17:46:24.903722+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-06-11T17:46:24.581683+05:30",
    "lastUpdatedFormatted": "Jun 11, 2026 at 05:46 PM IST",
    "comparisonPeriod": "Jun 10 \u2013 Jun 11, 2026",
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
                "hxxp://instagram-clone-login[.]vercel[.]app/",
                "hxxps://www[.]robiox[.]com[.]gr/users/548531114/profile",
                "hxxp://map-iphone[.]com/QPP",
                "hxxp://www[.]tiny[.]cc/jd94101/",
                "hxxp://thwmigj[.]yudasise[.]com/"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 966,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 966,
                "newInLastHour": 95,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"7bd843deb7436a21e49da50a5355c8ad3062c098dafe0c5b24fd68f02a708964",
                " \"13d8f15d2f25cf2d1d71e640ec7ef45869b088639daacb9c2a1cf7b98530a310",
                " \"8749292470dfe4aa44e8f291fa31bd5caea4051e64cbe87ed265132f9c4f3d5e",
                " \"75d7a2fb9c291354c3bead7c6182c3dbff803e068c72839771eb712ff1b3b6e8",
                " \"81614877b9a6a33fe6249bb9b6cc9a5f6084fff264a16a55dcf7c1425bf8f960"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1618,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1618,
                "newInLastHour": 85,
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
                "1[.]15[.]35[.]79",
                "1[.]15[.]36[.]31",
                "1[.]15[.]51[.]236",
                "1[.]176[.]118[.]246"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 7792,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 7792,
                "newInLastHour": 7792,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]1[.]220[.]166",
                "1[.]116[.]110[.]170",
                "1[.]116[.]61[.]217",
                "1[.]15[.]227[.]58",
                "1[.]192[.]61[.]19"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 18087,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 18087,
                "newInLastHour": 18087,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxps://omzuslys[.]hugugtatbigi[.]xyz/80cc8e26-7bc5-4c7d-8101-0a5b92295d09",
                "hxxps://yggwvgi[.]ramzfile[.]com/4d9bf206-4f02-4c29-bf31-3db8e617e484",
                "hxxp://112[.]93[.]138[.]41:35908/i",
                "hxxp://115[.]57[.]181[.]212:50218/bin[.]sh",
                "hxxps://btbwehpkp[.]drivingbook[.]xyz/dc1b3ebf-91df-413b-91ba-1f82af745ae6"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 6242,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 6242,
                "newInLastHour": 6209,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"hxxps://ffe[.]gasturbo88[.]top/\"",
                " \"ffe[.]glamisdunesrentals[.]com\"",
                " \"hxxps://ffe[.]glamisdunesrentals[.]com/\"",
                " \"ffe[.]gasturbo88[.]top\"",
                " \"211[.]159[.]225[.]77:8080\""
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
            "iocCount": 9781,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 9781,
                "newInLastHour": 61,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "48cf152a0f547ca2ee9668e57c7136e157ec96f5",
                "78e36aa21e77cf60799204d1fb0bac1f063aec42",
                "e3c434a1fc0269f0ad0fb43cdf93494e726d2f68",
                "a4f368e4e4c305b60212c016a4f1fa3a3a96a3de",
                "0505fd5b451911f764cd457d591ec4d355e609c8"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 49952,
            "activeSources": 8,
            "criticalAlerts": 28759,
            "activeCampaigns": 250
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 18916,
                "trend": "stable",
                "percentage": -3
            },
            {
                "category": "C2",
                "count": 9843,
                "trend": "up",
                "percentage": 637
            },
            {
                "category": "Botnet",
                "count": 3253,
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
                "percentage": 97
            },
            {
                "name": "Tech",
                "percentage": 2
            },
            {
                "name": "Finance",
                "percentage": 0
            }
        ],
        "campaigns": [
            {
                "name": "malware_download",
                "count": 17833,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://115[.]59[.]8[.]55:48575/bin[.]sh",
                    "hxxps://iznukhb[.]hesabdari2[.]xyz/13e33441-5d5f-40f0-a159-333cff5e21d3",
                    "hxxp://202[.]107[.]96[.]28:50487/i"
                ]
            },
            {
                "name": "CINS Threat List",
                "count": 15000,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]0[.]203[.]197",
                    "1[.]15[.]35[.]79",
                    "1[.]159[.]65[.]249"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1617,
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
                "count": 1402,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"34[.]92[.]128[.]98:8080\"",
                    " \"34[.]92[.]128[.]98:443\"",
                    " \"47[.]92[.]206[.]63:80\""
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
                "count": 683,
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
                "count": 567,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "39c142adbc6b401266f5cb025b7218246e36df74",
                    "cf62ecd77ed61f4b597c5a0fb29912f9d80a2d6b",
                    "244fab9da420579102b57ce615f0304b64c76d6b"
                ]
            },
            {
                "name": "LummaStealer",
                "count": 554,
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
                "name": " \"js.iclickfix\"",
                "count": 506,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"boldthrives[.]com\"",
                    " \"allcountiesroofingltd[.]co[.]uk\"",
                    " \"altecva[.]com\""
                ]
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious URLs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": " \"js.clearfake\"",
        "totalAttacksThisHour": 47634,
        "lastCalculated": "2026-06-11 17:46 IST"
    }
};
