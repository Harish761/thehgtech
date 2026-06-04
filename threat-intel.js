// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-06-05T02:03:11.260621+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-06-05T02:03:11.054400+05:30",
    "lastUpdatedFormatted": "Jun 05, 2026 at 02:03 AM IST",
    "comparisonPeriod": "Jun 04 \u2013 Jun 05, 2026",
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
                "hxxps://phylo-8[.]github[.]io/Amazon-github[.]io/",
                "hxxps://phylo-8[.]github[.]io/Amazon-github[.]io",
                "hxxp://freelanceconnect[.]id/",
                "hxxps://www[.]d666f999[.]shop/",
                "hxxp://meta-stack[.]pages[.]dev/appeals/submit-appeal-form/return"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 556,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 556,
                "newInLastHour": 40,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"7a3f81b47a88fe21419b693eed472ba5213c46612973b8429eca0f5811da9920",
                " \"e6e20e3d968364f220c3d09954e06c674475b8b2ff846aca2b6a3b74b8f731b1",
                " \"7675a20022117e292c15427ec78e97b9b27cb2811dcd58bd7aed8126c285db85",
                " \"58dff621e80964985c00844af20d277ce9f4147a1516232f8171f521ec262dc5",
                " \"a5f4aa3a2f1440aa5f72debaab848a427996c73287a6a6eded2a9b482684c39e"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1642,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1642,
                "newInLastHour": 6,
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
            "iocCount": 0,
            "iocDataUrl": "https://thehgtech.com/ioc-data/cins-army.json",
            "stats": {
                "total": 0,
                "newInLastHour": 0,
                "lastUpdate": "just now"
            },
            "types": [],
            "sampleIndicators": []
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 7697,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 7697,
                "newInLastHour": 7697,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]0[.]164[.]165",
                "1[.]116[.]61[.]217",
                "1[.]197[.]102[.]62",
                "1[.]20[.]175[.]122",
                "1[.]20[.]186[.]134"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 19857,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 19857,
                "newInLastHour": 19857,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://42[.]235[.]161[.]118:44269/i",
                "hxxp://182[.]123[.]197[.]138:54031/i",
                "hxxps://gbueeqa[.]eurothrombosis2018[.]com/79fbc845-b116-4d29-89b6-b758a6b7e38e",
                "hxxp://178[.]16[.]54[.]109/n[.]exe",
                "hxxp://178[.]16[.]54[.]109/x[.]exe"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 3621,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 3621,
                "newInLastHour": 3549,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"gbueeqa[.]eurothrombosis2018[.]com\"",
                " \"!z![.]eurothrombosis2018[.]com\"",
                " \"bfdibp[.]dahdahtoys[.]com\"",
                " \"154[.]88[.]96[.]33:8884\"",
                " \"129[.]150[.]46[.]86:8080\""
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
            "iocCount": 9859,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 9859,
                "newInLastHour": 112,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "28c3106cd1cec9a5dfec7f2ba3b0dd7e70784429",
                "7162dcab7590a4a6080e97d04f49cf0939db039c",
                "e42d598b3e6edb6b1899c5a72d03de435a82e4a3",
                "ff83fb186112903cb2e39578e268e1937cea9317",
                "f9f3f5ba3c746db5200118359cc83768d457e849"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 35679,
            "activeSources": 7,
            "criticalAlerts": 30110,
            "activeCampaigns": 229
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 20385,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "C2",
                "count": 9725,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 3256,
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
                "percentage": 94
            },
            {
                "name": "Tech",
                "percentage": 4
            },
            {
                "name": "Finance",
                "percentage": 0
            }
        ],
        "campaigns": [
            {
                "name": "malware_download",
                "count": 19827,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://bubblekip[.]info/",
                    "hxxps://jswnqpn[.]enfejarbazii[.]bet/edcfc2a2-82bd-490a-97d8-f35c94a4a599",
                    "hxxp://xzxni-135-134-92-71[.]run[.]pinggy-free[.]link/run[.]sh"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1636,
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
                "count": 1413,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "6a998d33a87c7b36c2be68ed5c1c63929c0d6be4",
                    "167ddfd671ef30c31528515389cfdd11d9251558",
                    "b08643668d383e55dd2698e1bcc34571c8dfcc6a"
                ]
            },
            {
                "name": " \"win.cobalt_strike\"",
                "count": 1409,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"107[.]150[.]105[.]91:8443\"",
                    " \"124[.]222[.]155[.]113:8443\"",
                    " \"119[.]45[.]166[.]6:443\""
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
                "count": 679,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "28c3106cd1cec9a5dfec7f2ba3b0dd7e70784429",
                    "bf26c599e3f5ea932f7b8c592138d42d49837713",
                    "5b27051d67aa2cce9314596003b68709a13fc003"
                ]
            },
            {
                "name": "Vidar",
                "count": 556,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "564b4902e12a0412bc9df5369f51cd6d273d5974",
                    "8d3af387e977c9f7725d1b7815d94d19855f1bfb",
                    "a4533c805837a80effd9ff29809a4b3bdd0de131"
                ]
            },
            {
                "name": "LummaStealer",
                "count": 553,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "ab7f083d77dc2b1b71c0aec9a417e0a5a036a5f9",
                    "7ce02a4df627573696141e40970ef60e246f9f3f",
                    "f58ffe7484653b53cea539b23da25bc8eeeb2c05"
                ]
            },
            {
                "name": "OffLoader",
                "count": 389,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "fb65cb3929bf5df8ed6de3cb5b2c6b87b3f6e3d9",
                    "7bba8eb1da43142534144a1aaf30b1be8a5ed134",
                    "3190ff29e738f3a056a97190ae61386c21eddefd"
                ]
            },
            {
                "name": "ConnectWise",
                "count": 364,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "25cec5dfbffe744af691b5fe996769cc84244f78",
                    "1fe4d1c9b7106f25e606894cb6a64f69c4862b29",
                    "a9f5a1cdf5c8168262c2e6cf9351698e156eeebd"
                ]
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious URLs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": "SSH Attacks",
        "totalAttacksThisHour": 31566,
        "lastCalculated": "2026-06-05 02:03 IST"
    }
};
