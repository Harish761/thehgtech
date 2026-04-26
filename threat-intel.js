// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-04-26T09:20:59.111113+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-04-26T09:20:58.783497+05:30",
    "lastUpdatedFormatted": "Apr 26, 2026 at 09:20 AM IST",
    "comparisonPeriod": "Apr 25 \u2013 Apr 26, 2026",
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
                "hxxps://roblox[.]com[.]bn/games/74538164085210/sword-fighting-347226",
                "hxxp://bafkreia4gwi65juhfno264zzcmomalln4ipqo25lmipuyw5rz52xjfxa24[.]ipfs[.]dweb[.]link/",
                "hxxp://bafkreiezyyuwkx6lx4ibhwdclgzdmqqi4o6lbn3h7hjc2mh3o3ms2zxb4q[.]ipfs[.]dweb[.]link/",
                "hxxps://bafkreih3eptu6xwmgwzjfhzqnxnn6rwbry2bghrzycrf763i3zfuzf7zya[.]ipfs[.]dweb[.]link/",
                "hxxp://bafkreihm3z3w3fm5cbxyrsc577dgyqe24phaporrc4akv75j4rjwtdnuxq[.]ipfs[.]dweb[.]link/"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 821,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 821,
                "newInLastHour": 77,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"2d42e16b1759e6b68c0d2ad1cecd4e37aace5e1c12796ef71850b3699fb1dc8e",
                " \"6a1ce24ec7f4253f03db939032cbea1c8d569b4b40aa83177d1f5f2407572163",
                " \"17b895fcfb6dc7a85a49fb1e3cdd9bcb1558486460044e44a7ecedd66da2aa62",
                " \"a49d0f67c34bd65b5f2900ca95b8a13abd95806cadea0e4870e0021432e077b0",
                " \"aa4d2cdb81d2d32f983a8894e03cd1c8f2e195ea76f96597eb6488d07f8d63f1"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1591,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1591,
                "newInLastHour": 33,
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
                "1[.]1[.]140[.]136",
                "1[.]169[.]9[.]130",
                "1[.]180[.]183[.]158",
                "1[.]192[.]176[.]34",
                "1[.]197[.]102[.]62"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 20647,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 20647,
                "newInLastHour": 20647,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]0[.]164[.]165",
                "1[.]13[.]22[.]203",
                "1[.]145[.]117[.]19",
                "1[.]214[.]117[.]218",
                "1[.]214[.]197[.]163"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 25826,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 25826,
                "newInLastHour": 25826,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://222[.]142[.]220[.]84:54716/bin[.]sh",
                "hxxps://ocul-xq7[.]raxen-tech[.]in[.]net/cdk-msdn-3457325-null/load-file0dsdf567[.]chk",
                "hxxps://mati-ns3w[.]raxen-tech[.]in[.]net/cdk-msdn-3457325-null/load-file0dsdf567[.]chk",
                "hxxp://182[.]113[.]11[.]27:53368/i",
                "hxxp://123[.]8[.]11[.]12:47705/i"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 804,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 804,
                "newInLastHour": 798,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"ocul-xq7[.]raxen-tech[.]in[.]net\"",
                " \"mati-ns3w[.]raxen-tech[.]in[.]net\"",
                " \"acti-cmf[.]zexon-plus[.]in[.]net\"",
                " \"ocche0o[.]zexon-plus[.]in[.]net\"",
                " \"travb7[.]zexon-plus[.]in[.]net\""
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
            "iocCount": 9623,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 9623,
                "newInLastHour": 44,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "6b3dc8ea0ad9cf783a6542661b85560c17abe94d",
                "3ccd1090364addc6f2cd6ee15cbb9b57cdc11777",
                "513656d150a201936049c3d3ff4f1c6efb7a8cc7",
                "386e3878708b3662a447b7e33cc91a0466e9b8a8",
                "ea714daf2e106b7297763178ab7c6e38753ac5bd"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 54621,
            "activeSources": 8,
            "criticalAlerts": 36857,
            "activeCampaigns": 199
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 27285,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "C2",
                "count": 9572,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Phishing",
                "count": 339,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 161,
                "trend": "stable",
                "percentage": 0
            }
        ],
        "targetedSectors": [
            {
                "name": "General",
                "percentage": 82
            },
            {
                "name": "Tech",
                "percentage": 17
            },
            {
                "name": "Finance",
                "percentage": 0
            },
            {
                "name": "Government",
                "percentage": 0
            }
        ],
        "campaigns": [
            {
                "name": "malware_download",
                "count": 26427,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://182[.]112[.]0[.]93:53945/i",
                    "hxxp://213[.]67[.]213[.]82:58805/i",
                    "hxxps://noir-1[.]rax7pavel[.]in[.]net/cdk-msdn-3457325-null/load-file0dsdf567[.]chk"
                ]
            },
            {
                "name": "CINS Threat List",
                "count": 15000,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]1[.]140[.]136",
                    "1[.]120[.]3[.]95",
                    "1[.]15[.]51[.]236"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1558,
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
                "count": 1403,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "eb1d7370d422c478efcaad0a0c7c2a7baacc2455",
                    "5b20fb9d9a21e7a5d4be3b3a83063e9b3172d35d",
                    "021068795797aa6c83cb175fed0fc5da9247e7ca"
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
                "count": 673,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "bb085af0610557f877683616d87b7345b59c4f54",
                    "f78be258c92a94888f2e283ddb807dcc22689c86",
                    "e0127cb029c9d3778d15d3948b41ecdc8b44fb03"
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
                "name": "Vidar",
                "count": 497,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "3ccd1090364addc6f2cd6ee15cbb9b57cdc11777",
                    "513656d150a201936049c3d3ff4f1c6efb7a8cc7",
                    "386e3878708b3662a447b7e33cc91a0466e9b8a8"
                ]
            },
            {
                "name": " \"js.clearfake\"",
                "count": 426,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"blue-mond-9k[.]rax7pavel[.]in[.]net\"",
                    " \"haus-5[.]zex1liron[.]in[.]net\"",
                    " \"kalt-7[.]zex1liron[.]in[.]net\""
                ]
            },
            {
                "name": "OffLoader",
                "count": 400,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "b977e869e493f70b3e7914a1eaa6abe2cc1ea04a",
                    "e7af95eaaa4c87398f4c4c80a66972f342bb3328",
                    "037598803e2603499edbf7275e43f7dd82abd8f3"
                ]
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious IPs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": "Spamhaus DROP List",
        "totalAttacksThisHour": 62730,
        "lastCalculated": "2026-04-26 09:20 IST"
    }
};
