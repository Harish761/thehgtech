// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-05-23T09:34:10.586091+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-05-23T09:34:10.232577+05:30",
    "lastUpdatedFormatted": "May 23, 2026 at 09:34 AM IST",
    "comparisonPeriod": "May 22 \u2013 May 23, 2026",
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
                "hxxps://sfke-cahmcjf3b4fagvat[.]z03[.]azurefd[.]net/",
                "hxxp://wvwlistgtsfrsdrtosthts[.]fwh[.]is/",
                "hxxp://kakefot735bezill[.]crabdance[.]com/NBJGUHY-SBDGFCVDF/LHKJOUI-CQDSEZXA/VFGTHY-PMOLKJU/",
                "hxxps://saldonuturbinado[.]s3[.]us-east-005[.]backblazeb2[.]com/aumento[.]html",
                "hxxps://www[.]9268365[.]com/"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 1832,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 1832,
                "newInLastHour": 33,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"a7d2465bd9f87988a23979b0adc7d4e660eea1ec1fdad21792e1500b33b6a4da",
                " \"faf9f58775b9eac12bfab1831fb52426110565e3059e18f119495072736586f0",
                " \"e82d0ea97861fe4efc9721ae95146aa14b2393a7b66110a4299e20b229d565d1",
                " \"bb1d83bf2f3b09d9cd630ab0158b11c0dbced6df36d21a99e0ea723eda3bfd8c",
                " \"10bbd20b2f26a8e93ac0c4df3cb4f9c6b984c40f64e93f80846439e7374d4ce4"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1627,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1627,
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
                "1[.]1[.]223[.]16",
                "1[.]176[.]118[.]246",
                "1[.]180[.]153[.]254",
                "1[.]192[.]176[.]193",
                "1[.]192[.]250[.]197"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 5475,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 5475,
                "newInLastHour": 5475,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]0[.]164[.]165",
                "1[.]116[.]61[.]217",
                "1[.]14[.]105[.]179",
                "1[.]15[.]103[.]109",
                "1[.]162[.]228[.]189"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 22693,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 22693,
                "newInLastHour": 22693,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://39[.]90[.]151[.]181:39300/bin[.]sh",
                "hxxps://paqcfwvt[.]winter-pulse[.]christmas/a754bad3-7e7b-479d-b307-bcbfcb2a933f",
                "hxxp://115[.]55[.]8[.]145:60626/i",
                "hxxp://115[.]55[.]173[.]134:40180/bin[.]sh",
                "hxxp://110[.]39[.]235[.]164:35877/bin[.]sh"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 3205,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 3205,
                "newInLastHour": 3165,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"thdnyyif[.]winter-pulse[.]christmas\"",
                " \"paqcfwvt[.]winter-pulse[.]christmas\"",
                " \"hzlqlpfw[.]frost-engine[.]christmas\"",
                " \"brhwmjkk[.]frost-engine[.]christmas\"",
                " \"ihtfqktk[.]holiday-matrix[.]christmas\""
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
            "iocCount": 9692,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 9692,
                "newInLastHour": 0,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "34a8dc4fb4f4b41fc7bbae738f988305739eb56a",
                "167ddfd671ef30c31528515389cfdd11d9251558",
                "3cf2e022211760871544ad891d3b3b698c5f8792",
                "0d5b0889c583e4da90b365b1d73959a9ea745a86",
                "53c0f0608e2d03a10eab7e3a98d1de6c4ff534e6"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 55363,
            "activeSources": 8,
            "criticalAlerts": 35281,
            "activeCampaigns": 240
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 25561,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "C2",
                "count": 9720,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 2879,
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
                "percentage": 5
            },
            {
                "name": "Finance",
                "percentage": 0
            }
        ],
        "campaigns": [
            {
                "name": "malware_download",
                "count": 23676,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://91[.]92[.]242[.]236/files-129312398/files/file_05115473da05b069[.]exe",
                    "hxxp://60[.]19[.]39[.]8:44446/i",
                    "hxxp://115[.]63[.]229[.]45:39403/i"
                ]
            },
            {
                "name": "CINS Threat List",
                "count": 15000,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]1[.]223[.]16",
                    "1[.]176[.]118[.]246",
                    "1[.]180[.]183[.]158"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1630,
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
                "count": 1415,
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
                "name": " \"win.cobalt_strike\"",
                "count": 1411,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"35[.]220[.]177[.]232:4343\"",
                    " \"46[.]20[.]109[.]225:8999\"",
                    " \"158[.]94[.]173[.]11:12345\""
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
                "count": 681,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "493f6dbb48806992e524df2a3a0fa0348cef243b",
                    "8a9c74049483847464da1ca3cf6f1f44e17a5f0f",
                    "c47bcbcbe0b1c474542c7fdc233ec68ffb4dcf14"
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
                "count": 537,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "34a8dc4fb4f4b41fc7bbae738f988305739eb56a",
                    "cbcbab57af719e97174407cc1e97c57c3478d481",
                    "971333b66a8266c1bf37aba686b9b89fcd9a9e44"
                ]
            },
            {
                "name": " \"n/a",
                "count": 458,
                "types": [
                    "hash"
                ],
                "sampleIndicators": [
                    " \"eeb742cbdb41251b7a463e0a9beba32bbb4d04a42aab3121d81db4cd97250bfc",
                    " \"ba880fa7d4f502dde9db8e2683027bdd82c985a84d3dc4dbeebfcf66b7862059",
                    " \"7e33e7f1a5283bb30f034da6b2b05bdd7b595904ae5ecbdeca60b7348765d828"
                ]
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious URLs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": " \"unknown\"",
        "totalAttacksThisHour": 46671,
        "lastCalculated": "2026-05-23 09:34 IST"
    }
};
