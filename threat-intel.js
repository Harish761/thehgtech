// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-05-11T02:30:40.636839+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-05-11T02:30:40.267337+05:30",
    "lastUpdatedFormatted": "May 11, 2026 at 02:30 AM IST",
    "comparisonPeriod": "May 10 \u2013 May 11, 2026",
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
                "hxxps://dpd[.]kemarviox[.]cfd/com",
                "hxxps://mbhytamask-walt[.]gitbook[.]io/us",
                "hxxp://mbhytamask-walt[.]gitbook[.]io/",
                "hxxps://meta-id17632[.]invoice-ads-manager[.]com/",
                "hxxp://www[.]m167k[.]xyz/"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 576,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 576,
                "newInLastHour": 29,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"49988f9d356d4c21eb61cce538d0a9b70db4bbf0599384346ab140d7dbbb2271",
                " \"7cff5ff359133795e4adce5e99d813868e0b0e6fdd2e74e7c7e81dc19d58e733",
                " \"fdbfcfc5c14cacf2bd30a165643eaf36f7f020074c0dff21995e29c456ca7bd6",
                " \"7dfa1f14a32b63a056ec51fbafeb3920407a4136e4e9b7a9d48992bafa2e7f7b",
                " \"36fa706d37892da106c48c495a8c022f20f7bef7bc16fe23436e2440c1347a03"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1625,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1625,
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
                "1[.]0[.]140[.]158",
                "1[.]11[.]228[.]4",
                "1[.]190[.]169[.]10",
                "1[.]190[.]67[.]254",
                "1[.]191[.]146[.]96"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 4506,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 4506,
                "newInLastHour": 4506,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]0[.]164[.]165",
                "1[.]14[.]255[.]125",
                "1[.]162[.]222[.]129",
                "1[.]214[.]117[.]218",
                "1[.]214[.]197[.]163"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 28873,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 28873,
                "newInLastHour": 28873,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://110[.]37[.]86[.]55:57751/bin[.]sh",
                "hxxp://27[.]37[.]100[.]56:60470/i",
                "hxxp://27[.]37[.]112[.]245:60944/i",
                "hxxp://104[.]236[.]37[.]21/1[.]sh",
                "hxxp://104[.]236[.]37[.]21/masscan"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 1272,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 1272,
                "newInLastHour": 1252,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"ok99[.]jp[.]net\"",
                " \"hxxp://marconiliqhting[.]com/emma/encode[.]php\"",
                " \"64[.]23[.]231[.]32:9001\"",
                " \"5[.]78[.]110[.]145:7989\"",
                " \"46[.]109[.]239[.]103:8808\""
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
            "iocCount": 9667,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 9667,
                "newInLastHour": 51,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "6da5a6bce253699b8db995f8955a4bf6482f12a3",
                "04472c9faf1014830def8016729f50a2b773a0ab",
                "cf08f1d2e3da9567cd2398ecb5f8df0503ce857f",
                "d30376a0f461e6cc126e18beb023e71c703912c0",
                "12adb13f09a921ef558cd28c50ac4de81e1b8ad3"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 57303,
            "activeSources": 8,
            "criticalAlerts": 39016,
            "activeCampaigns": 167
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 29405,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "C2",
                "count": 9611,
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
                "count": 206,
                "trend": "up",
                "percentage": 82
            }
        ],
        "targetedSectors": [
            {
                "name": "General",
                "percentage": 85
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
                "count": 28865,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://123[.]12[.]25[.]56:52889/bin[.]sh",
                    "hxxps://bernasibutuwqu2[.]com/debug/loader[.]sh",
                    "hxxps://bernasibutuwqu2[.]com/debug/payload[.]applescript"
                ]
            },
            {
                "name": "CINS Threat List",
                "count": 15000,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]0[.]140[.]158",
                    "1[.]11[.]228[.]4",
                    "1[.]183[.]41[.]171"
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
                "count": 1406,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "5bb5b87a8f5d20bf3d5c6d64b3cf71fba84b43fd",
                    "0f6b3491e94f40a637680924c507a494426e534c",
                    "9833a3a7e27800d994a2924baf7a664dfff96e8c"
                ]
            },
            {
                "name": " \"js.clearfake\"",
                "count": 936,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"opsmgr[.]data-core-logic[.]wiki\"",
                    " \"extnetprox[.]devharbor[.]pics\"",
                    " \"cpuprocessormgr[.]data-core-logic[.]wiki\""
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
                "count": 677,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "8a9c74049483847464da1ca3cf6f1f44e17a5f0f",
                    "c47bcbcbe0b1c474542c7fdc233ec68ffb4dcf14",
                    "a08099ae4318bfc81af69fd382081262cc4e9487"
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
                "count": 504,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "693673f31128d9637630776f2989b5c29c77b04d",
                    "4ea9780c4039e050f0e2433deaa076a1ed3e1cec",
                    "87e5589d7d33aa32595bc8f2ac6275a4f1620fb1"
                ]
            },
            {
                "name": "OffLoader",
                "count": 396,
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
        "fastestRisingThreat": " \"Mirai",
        "totalAttacksThisHour": 50016,
        "lastCalculated": "2026-05-11 02:30 IST"
    }
};
