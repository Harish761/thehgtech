// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-02-24T01:09:22.810587+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-02-24T01:09:22.525359+05:30",
    "lastUpdatedFormatted": "Feb 24, 2026 at 01:09 AM IST",
    "comparisonPeriod": "Feb 23 \u2013 Feb 24, 2026",
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
                "hxxps://mypost[.]ycaskp[.]help/au/service/22/",
                "hxxp://www[.]bduedu[.]in/pay-fees/",
                "hxxps://geminibalance[.]520131401[.]xyz/",
                "hxxps://robloxr[.]com[.]es/users/1140465374/profile",
                "hxxps://www[.]robiox[.]com[.]py/users/225612695322/profile"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 1396,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 1396,
                "newInLastHour": 23,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"87a8788f64accf4a6338b086843fbe50c7a431c2a6f8f5d1a5d42ae54548b9f0",
                " \"dee9ffafbcefc48d148ba03836b2e25a4ca15fcaa67fdacf60dc324c27130718",
                " \"35355ac21f1baed0dac02a947f37c972859afaa02045c385683dbd74f991c1bc",
                " \"c5bd69dd7c58cc1b3a9ee8183f36578c10c5ab9fcbae83f1b5a2f770be32b210",
                " \"765b06d48da8554cdd725bc6a1649a19ff741668a5e0846b7eaccf5877c6eab4"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1481,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1481,
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
                "1[.]0[.]164[.]165",
                "1[.]1[.]176[.]58",
                "1[.]11[.]132[.]194",
                "1[.]15[.]116[.]189",
                "1[.]15[.]22[.]112"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 7513,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 7513,
                "newInLastHour": 7513,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]15[.]136[.]28",
                "1[.]165[.]130[.]37",
                "1[.]194[.]219[.]159",
                "1[.]214[.]117[.]218",
                "1[.]220[.]64[.]218"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 21587,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 21587,
                "newInLastHour": 21587,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://42[.]5[.]95[.]219:55765/i",
                "hxxp://60[.]18[.]70[.]146:60629/bin[.]sh",
                "hxxps://raw[.]githubusercontent[.]com/stevencohn8888-max/hj/refs/heads/main/ENCRYPTED[.]ps1",
                "hxxps://raw[.]githubusercontent[.]com/stevencohn8888-max/ghghg/refs/heads/main/SECURE[.]Ps1",
                "hxxps://github[.]com/stevencohn8888-max/6789098778909876/raw/refs/heads/main/Documento%236124[.]7z"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 1369,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 1369,
                "newInLastHour": 1369,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"green-grove-sync[.]vividgrove[.]in[.]net\"",
                " \"forest-logic-center[.]vividgrove[.]in[.]net\"",
                " \"tennesseefuneralhomes[.]com\"",
                " \"nature-grove-data[.]vividgrove[.]in[.]net\"",
                " \"contatoplus[.]com\""
            ]
        },
        "Feodo Tracker": {
            "description": "Botnet C2 server IPs from Feodo Tracker. Tracks Dridex, Emotet, TrickBot, QakBot, and BazarLoader.",
            "website": "https://feodotracker.abuse.ch/",
            "updateFrequency": "Hourly",
            "iocCount": 2,
            "iocDataUrl": "https://thehgtech.com/ioc-data/feodo-tracker.json",
            "stats": {
                "total": 2,
                "newInLastHour": 2,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "162[.]243[.]103[.]246",
                "178[.]62[.]3[.]223"
            ]
        },
        "SSL Blacklist": {
            "description": "Malicious SSL certificates used by botnet C2 servers. Helps detect encrypted malware communications.",
            "website": "https://sslbl.abuse.ch/",
            "updateFrequency": "Daily",
            "iocCount": 9055,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 9055,
                "newInLastHour": 63,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "a08d28fa68b345fc17f87b6e00a379e649162069",
                "d74330b97980ae7b43d7b8cdaaf707b28fe3011e",
                "471f3e5297da88c4db5df4fdf5f15bc7b2907ac9",
                "a0ed3229d8da754429c837d430c9e8e3d471e31b",
                "b95187c7649320c67e84bf6c30de2363555dca4e"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 50243,
            "activeSources": 8,
            "criticalAlerts": 31932,
            "activeCampaigns": 220
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 22961,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "C2",
                "count": 8971,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 1011,
                "trend": "down",
                "percentage": -28
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
                "percentage": 99
            },
            {
                "name": "Tech",
                "percentage": 0
            },
            {
                "name": "Finance",
                "percentage": 0
            }
        ],
        "campaigns": [
            {
                "name": "malware_download",
                "count": 21557,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://218[.]57[.]36[.]202:58264/bin[.]sh",
                    "hxxp://110[.]37[.]61[.]110:41604/i",
                    "hxxp://110[.]37[.]61[.]110:41604/bin[.]sh"
                ]
            },
            {
                "name": "CINS Threat List",
                "count": 15000,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]10[.]211[.]66",
                    "1[.]1[.]176[.]58",
                    "1[.]11[.]132[.]194"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1480,
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
                "count": 1381,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "97e58eec776ad990a10d1f4a932e1a4ae48636b3",
                    "f2c2503f8514647aba9776c4e9c3b55a97695d2e",
                    "7ebc8e1cac8c681aad9cfa05c76b0c52ecc87f7c"
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
                "count": 624,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "56dd33cfae66685bb9cf7f923d6e6752ff791705",
                    "2568edbf429d4745fe7ec67848063d60b82823d8",
                    "c96e7c1cbfdcff64e90557779edd3af8a1b6a6c4"
                ]
            },
            {
                "name": " \"js.iclickfix\"",
                "count": 570,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"bennettarbitration[.]com\"",
                    " \"eventocontaduriafce[.]viajandoalcielo[.]com\"",
                    " \"gconfisur[.]com\""
                ]
            },
            {
                "name": "LummaStealer",
                "count": 537,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "2987e30402370bdcbf291aedc9cd52a9a79bda0c",
                    "6fd95f4a2d9cec238cbe2e1756890381c4fae3cb",
                    "e2293f74d8d72bde90bb0424038259a9e3126e1b"
                ]
            },
            {
                "name": " \"n/a",
                "count": 524,
                "types": [
                    "hash"
                ],
                "sampleIndicators": [
                    " \"ba977e14aa3aa2b2bb40cfc3c548f9feb2ace0b3ea51932bf1d6bb8fad6d2d5d",
                    " \"589490c7fc948a715e4be9191969df77b9efe5833a15a73ddf57287e2e01c080",
                    " \"be2db69fbde37ce4b0dbd51a85cb18f78a1bfda70ef2f4ed7dcde75051f3659b"
                ]
            },
            {
                "name": " \"Mirai",
                "count": 509,
                "types": [
                    "hash"
                ],
                "sampleIndicators": [
                    " \"f4646d3ed97f7a0f985f067571d1066c1f8d0b9061f7162c051ea51efc986acf",
                    " \"91f9e1a24ea700822b660eee81789c7811256f5e7e8d0fb866a29dd7ec680702",
                    " \"40192cbb87bf2fa267204af50a197d762daebab1d2ef0c0cc4f9fbc0145495a6"
                ]
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious URLs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": "malware_download",
        "totalAttacksThisHour": 45858,
        "lastCalculated": "2026-02-24 01:09 IST"
    }
};
