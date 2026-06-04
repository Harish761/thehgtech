// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-06-04T21:07:52.938052+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-06-04T21:07:52.727158+05:30",
    "lastUpdatedFormatted": "Jun 04, 2026 at 09:07 PM IST",
    "comparisonPeriod": "Jun 03 \u2013 Jun 04, 2026",
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
            "iocCount": 517,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 517,
                "newInLastHour": 49,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"06242c945e9e456b7ea4f7ea712d42ae18f107c582e201227f2e8959ec5f1224",
                " \"d0bdcc7a420a60443623b9dc9fd79f2eed54301b405bf3567767aaa01677f9f0",
                " \"1730b6c2d30ec04fe1272da3315cecc66887d0d608deed55dd1dd4695eda97ac",
                " \"f8cd9038d08cc6dbbf22e98a8e00c126c9d9f1497d2b08ae3d7afbb344a591d0",
                " \"01809f13f7bd3f8df7d50240ae7d5bf2bfd31ba17f8c750bc62a0b8b31db0d5f"
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
            "iocCount": 7545,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 7545,
                "newInLastHour": 7545,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]0[.]164[.]165",
                "1[.]116[.]61[.]217",
                "1[.]14[.]176[.]139",
                "1[.]162[.]226[.]19",
                "1[.]197[.]102[.]62"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 19767,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 19767,
                "newInLastHour": 19767,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://39[.]67[.]212[.]225:56697/bin[.]sh",
                "hxxp://219[.]155[.]200[.]53:60030/bin[.]sh",
                "hxxp://123[.]14[.]98[.]224:35285/i",
                "hxxp://123[.]14[.]98[.]224:35285/bin[.]sh",
                "hxxp://221[.]15[.]188[.]165:58903/bin[.]sh"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 3578,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 3578,
                "newInLastHour": 3548,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"bofcv8ir[.]bet90boro[.]com\"",
                " \"gp0bowhq[.]bet90boro[.]com\"",
                " \"drckscr[.]bizbetslot[.]net\"",
                " \"!z![.]bizbetslot[.]net\"",
                " \"ltncnvk[.]bingobet90[.]com\""
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
            "iocCount": 9842,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 9842,
                "newInLastHour": 1,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "e42d598b3e6edb6b1899c5a72d03de435a82e4a3",
                "ff83fb186112903cb2e39578e268e1937cea9317",
                "f9f3f5ba3c746db5200118359cc83768d457e849",
                "caff4adfa4b82c536fb487576f223a5ee64d4194",
                "f86f5e9268dc6dda71fc61ebb657feeaadb9cec9"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 36071,
            "activeSources": 7,
            "criticalAlerts": 30033,
            "activeCampaigns": 232
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 20199,
                "trend": "stable",
                "percentage": 2
            },
            {
                "category": "C2",
                "count": 9834,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 3780,
                "trend": "stable",
                "percentage": 3
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
                "percentage": 95
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
                "count": 19668,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://123[.]5[.]144[.]157:57821/i",
                    "hxxp://110[.]39[.]241[.]60:47760/bin[.]sh",
                    "hxxp://182[.]126[.]126[.]34:54297/bin[.]sh"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1641,
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
                "count": 1439,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"43[.]255[.]157[.]229:8080\"",
                    " \"107[.]150[.]105[.]91:8080\"",
                    " \"204[.]194[.]49[.]142:80\""
                ]
            },
            {
                "name": "AsyncRAT",
                "count": 1416,
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
                "count": 685,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "bf26c599e3f5ea932f7b8c592138d42d49837713",
                    "5b27051d67aa2cce9314596003b68709a13fc003",
                    "8e733b34e95a7b98ada40292b8d35e9040016e65"
                ]
            },
            {
                "name": "Vidar",
                "count": 573,
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
                "name": " \"unknown\"",
                "count": 483,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"coffeefromarabica[.]monster\"",
                    " \"lskannsserv[.]beer\"",
                    " \"206[.]238[.]68[.]33:8383\""
                ]
            },
            {
                "name": "OffLoader",
                "count": 423,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "fb65cb3929bf5df8ed6de3cb5b2c6b87b3f6e3d9",
                    "7bba8eb1da43142534144a1aaf30b1be8a5ed134",
                    "3190ff29e738f3a056a97190ae61386c21eddefd"
                ]
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious URLs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": "malware_download",
        "totalAttacksThisHour": 31216,
        "lastCalculated": "2026-06-04 21:07 IST"
    }
};
