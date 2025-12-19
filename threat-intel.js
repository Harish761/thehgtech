// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2025-12-19T14:11:26.278144+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2025-12-19T14:11:25.981906+05:30",
    "lastUpdatedFormatted": "Dec 19, 2025 at 02:11 PM IST",
    "comparisonPeriod": "Dec 18 \u2013 Dec 19, 2025",
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
                "hxxp://www[.]6366uu[.]com/",
                "hxxps://bet73047[.]com/about/cookies",
                "hxxps://www[.]by[.]4qiuj[.]com/",
                "hxxp://recruit[.]metacareersglobal[.]com/",
                "hxxps://m[.]g5115g[.]com/"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 726,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 726,
                "newInLastHour": 39,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"ee9912616b28d17b6a9974c167b05c293b589c286c9039caa9a1f6e5ca94d970",
                " \"b71af7c0029ca18f39677848a41d79791c7164cd6d7aeda6a2eb9263d6d107e8",
                " \"42045197135b6f598fbcd357402bd64d74a99816d3d738c5fccd2c055ae1391e",
                " \"bdf7479ed9d15ad280dbdec59efcb1c9e122d0db24a7cbe32ea4542e4bd0fcd2",
                " \"689d443df31b392d284f6ea706caf52335d72d02480aa63bda02e3850e16af30"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1473,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1473,
                "newInLastHour": 20,
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
                "1[.]10[.]223[.]148",
                "1[.]10[.]247[.]85",
                "1[.]1[.]179[.]25",
                "1[.]117[.]17[.]128",
                "1[.]15[.]118[.]23"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 5723,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 5723,
                "newInLastHour": 5723,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]12[.]64[.]80",
                "1[.]14[.]95[.]153",
                "1[.]214[.]197[.]163",
                "1[.]220[.]64[.]218",
                "1[.]221[.]66[.]66"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 25281,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 25281,
                "newInLastHour": 25281,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxps://tavern[.]drau8htl0dg[.]ru/o2cp5744",
                "hxxps://cadence[.]ch0reo8fin[.]ru/qynhefw4",
                "hxxp://113[.]64[.]250[.]1:39780/bin[.]sh",
                "hxxp://221[.]13[.]221[.]227:43769/bin[.]sh",
                "hxxps://cadence[.]ch0reo8fin[.]ru/nivayxtv"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 1174,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 1174,
                "newInLastHour": 974,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"tavern[.]drau8htl0dg[.]ru\"",
                " \"cadence[.]ch0reo8fin[.]ru\"",
                " \"pivot8[.]ch0reo8fin[.]ru\"",
                " \"rhythm[.]ch0reo8fin[.]ru\"",
                " \"34[.]199[.]239[.]75:443\""
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
                "15[.]204[.]219[.]215",
                "162[.]243[.]103[.]246",
                "167[.]86[.]75[.]145",
                "51[.]210[.]96[.]48"
            ]
        },
        "SSL Blacklist": {
            "description": "Malicious SSL certificates used by botnet C2 servers. Helps detect encrypted malware communications.",
            "website": "https://sslbl.abuse.ch/",
            "updateFrequency": "Daily",
            "iocCount": 136,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 136,
                "newInLastHour": 11,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "bb69bc0904d3300cc556bb5775e549677aeac371",
                "8a542e015117f2254f098cce2b471b592d4f56e8",
                "cb789c5fc5dfd28c4ca174e1569f00fb985c2751",
                "ce45edd9833acf5ed64d6c16acb355c3b71459a6",
                "42865538586255fae2d0a07ca739c92ce188c475"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 52351,
            "activeSources": 8,
            "criticalAlerts": 34475,
            "activeCampaigns": 200
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 25850,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "C2",
                "count": 8625,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 600,
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
                "count": 25119,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://42[.]230[.]55[.]171:39070/bin[.]sh",
                    "hxxp://110[.]37[.]52[.]73:41567/bin[.]sh",
                    "hxxp://117[.]213[.]82[.]221:33655/i"
                ]
            },
            {
                "name": "CINS Threat List",
                "count": 15000,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]10[.]223[.]148",
                    "1[.]10[.]247[.]85",
                    "1[.]1[.]179[.]25"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1453,
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
                "count": 1360,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "47800989ef4eda671b2a76a0cd9123ec7b0bc324",
                    "ae6ca91be0e1145adf2f7120ca3edec533d7573f",
                    "aebe846393cee6199796dc1524f82c22f5f1bb35"
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
                "count": 595,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "acfae6aa71276bdaa0f8f7046e4aa9254f080c2c",
                    "69b032a3fbc6d20d24fb410b437e1a31fb7619c8",
                    "5d5c32a9bf92da1d16d0558ed2ed9f19c821c8a9"
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
                "name": " \"Mirai",
                "count": 418,
                "types": [
                    "hash"
                ],
                "sampleIndicators": [
                    " \"f6ab108862bca791202ee90faf5ce2ae8f8ba5caa94d721fdca480f7f884553f",
                    " \"1ef86f38b7e44a7511f09e4bec9a1da105e70db6d522467ac14b4ea42df632c9",
                    " \"f7423286fa5cca435c852daca51cd40a7a383102658c272a27645c8bb17c6572"
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
        "fastestRisingThreat": "SSH Attacks",
        "totalAttacksThisHour": 47352,
        "lastCalculated": "2025-12-19 14:11 IST"
    }
};
