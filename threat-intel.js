// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-05-08T02:43:05.608790+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-05-08T02:43:05.240813+05:30",
    "lastUpdatedFormatted": "May 08, 2026 at 02:43 AM IST",
    "comparisonPeriod": "May 07 \u2013 May 08, 2026",
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
                "hxxps://airbnb-seven-lime[.]vercel[.]app/",
                "hxxp://www[.]airbnb-seven-lime[.]vercel[.]app/",
                "hxxps://request-facebook[.]invoice-ads-manager[.]com/",
                "hxxps://netflix-kh-one[.]vercel[.]app/",
                "hxxp://www[.]netflix-kh-one[.]vercel[.]app/"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 510,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 510,
                "newInLastHour": 10,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"77fa74e99fbf6d24ffa903e6be3969544d7edbac8cb1ad135a850c89d7c84e13",
                " \"6c36528538655c6d7757accfc10e751fa6bf603ac5eebce8c110584abe89bccb",
                " \"046786f276c2a9f397b3b78767113e16023d4f897e750e27ddf4a1170edc4956",
                " \"94898f305abf2c72fd02cc868d6f1533998c19a73901facc8f9179ee4197ed3d",
                " \"d51ae2bcb5ae44ba3956af8c6ca95432a7e7c50a467dc74fedf2821c6b62bad4"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1617,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1617,
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
                "1[.]190[.]169[.]10",
                "1[.]192[.]251[.]154",
                "1[.]193[.]63[.]103",
                "1[.]193[.]63[.]116",
                "1[.]193[.]63[.]176"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 3845,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 3845,
                "newInLastHour": 3845,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]0[.]164[.]165",
                "1[.]162[.]247[.]201",
                "1[.]20[.]186[.]129",
                "1[.]214[.]117[.]218",
                "1[.]214[.]42[.]172"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 28122,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 28122,
                "newInLastHour": 28122,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://arkvenon1[.]represent-skittish[.]lat/kl0n-green-excel-yy3775-get65/gett3[.]verification",
                "hxxps://arkvenon1[.]represent-skittish[.]lat/kl0n-green-excel-yy3775-get65/gett3[.]verification",
                "hxxp://115[.]63[.]113[.]160:53599/bin[.]sh",
                "hxxps://ultraceda[.]sorix3en[.]lat/sh1ne-logs-neppy-upd8335-www3/get123c[.]camp",
                "hxxps://kernel-azur[.]represent-skittish[.]lat/kl0n-green-excel-yy3775-get65/gett3[.]verification"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 960,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 960,
                "newInLastHour": 960,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"ultraceda[.]sorix3en[.]lat\"",
                " \"arkvenon1[.]represent-skittish[.]lat\"",
                " \"massivesubtle[.]sorix3en[.]lat\"",
                " \"kernel-azur[.]represent-skittish[.]lat\"",
                " \"den53-plate[.]sorix3en[.]lat\""
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
            "iocCount": 9631,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 9631,
                "newInLastHour": 0,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "275d98e8ac40fa51490a1982fd621954d6ffe4c1",
                "642658f7ab86668339d1f98c7fb6a4200589db02",
                "5ee1e0ab5f0782e83d62722e9a7ee91062102652",
                "c56ac80a032ff319463850125369cc514e83ed59",
                "cce12866188dc393f3c4e151caf38e32543a9c65"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 56173,
            "activeSources": 8,
            "criticalAlerts": 38235,
            "activeCampaigns": 189
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 28594,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "C2",
                "count": 9641,
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
                "count": 191,
                "trend": "stable",
                "percentage": 3
            }
        ],
        "targetedSectors": [
            {
                "name": "General",
                "percentage": 84
            },
            {
                "name": "Tech",
                "percentage": 14
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
                "count": 28094,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://182[.]113[.]233[.]180:36557/bin[.]sh",
                    "hxxp://180[.]157[.]252[.]30:44116/bin[.]sh",
                    "hxxp://182[.]127[.]110[.]97:45835/bin[.]sh"
                ]
            },
            {
                "name": "CINS Threat List",
                "count": 15000,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]11[.]228[.]4",
                    "1[.]180[.]183[.]158",
                    "1[.]193[.]63[.]103"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1626,
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
                "count": 1409,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "9833a3a7e27800d994a2924baf7a664dfff96e8c",
                    "eb1d7370d422c478efcaad0a0c7c2a7baacc2455",
                    "5b20fb9d9a21e7a5d4be3b3a83063e9b3172d35d"
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
                "name": " \"js.clearfake\"",
                "count": 697,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"tatyixqn[.]dunkpo1ytechnic[.]digital\"",
                    " \"r4o3a9z5[.]dunkpo1ytechnic[.]digital\"",
                    " \"dunkpo1ytechnic[.]digital\""
                ]
            },
            {
                "name": "QuasarRAT",
                "count": 679,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "c47bcbcbe0b1c474542c7fdc233ec68ffb4dcf14",
                    "a08099ae4318bfc81af69fd382081262cc4e9487",
                    "bb085af0610557f877683616d87b7345b59c4f54"
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
                "count": 522,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "275d98e8ac40fa51490a1982fd621954d6ffe4c1",
                    "82f19aac31fa0b5c38858af039bc9b0133424046",
                    "fcf4598502929f58a832dd6aa1fba567340e504a"
                ]
            },
            {
                "name": "OffLoader",
                "count": 404,
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
        "topAttackVector": "Malicious URLs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": "SSH Attacks",
        "totalAttacksThisHour": 48242,
        "lastCalculated": "2026-05-08 02:43 IST"
    }
};
