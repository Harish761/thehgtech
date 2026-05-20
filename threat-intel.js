// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-05-20T21:21:25.493864+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-05-20T21:21:25.139261+05:30",
    "lastUpdatedFormatted": "May 20, 2026 at 09:21 PM IST",
    "comparisonPeriod": "May 19 \u2013 May 20, 2026",
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
                "hxxp://www[.]j62n[.]vip/",
                "hxxps://praadconsulting[.]com/xmx/secure_access-5[.]html",
                "hxxps://www[.]robiox[.]com[.]py/users/253685455601/profile",
                "hxxps://cloudappleid[.]sviluppo[.]host/7823120-ACES/",
                "hxxps://auth-netfliix-mov[.]vercel[.]app/"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 781,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 781,
                "newInLastHour": 151,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"d72076a38bd2a14faa57f998fc2b525b6462b8c881040d8854b8f1b627c7687b",
                " \"88ff3e0ccafc6c2f88395efb386a8f3115f639fbae075e9879debed31fb90727",
                " \"b0cefb66b953e5184b6adb3035e9e267335ac5eabfe1848e07834777b9397b74",
                " \"1a4afce34918bdc74ae3f31edaffffaa0ee074d83618f53edfd88137927340b8",
                " \"125cc565e77c6db7dd998a8c7752c4087e2cf86bff5da96bced74640a042f6a1"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1609,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1609,
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
                "1[.]15[.]14[.]29",
                "1[.]156[.]129[.]70",
                "1[.]156[.]181[.]5",
                "1[.]162[.]164[.]41"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 5766,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 5766,
                "newInLastHour": 5766,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]0[.]164[.]165",
                "1[.]117[.]58[.]48",
                "1[.]162[.]225[.]185",
                "1[.]194[.]210[.]131",
                "1[.]214[.]214[.]114"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 24296,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 24296,
                "newInLastHour": 24296,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://220[.]158[.]232[.]160/arm/",
                "hxxp://220[.]158[.]232[.]160/arm",
                "hxxps://abimj[.]edu[.]af/institute/cloudiyaf/index[.]php",
                "hxxps://vantarat[.]st/file123",
                "hxxps://vantarat[.]st/rem"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 3045,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 3045,
                "newInLastHour": 3023,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"hxxps://cbs-tv[.]com[.]skysports1[.]com/\"",
                " \"9408dfa7ca622d0db087985ff6d4288b143e4e4a11c7a734ea4e151b73de8d00\"",
                " \"vantarat[.]st\"",
                " \"185[.]227[.]134[.]211:8808\"",
                " \"60[.]204[.]249[.]248:8085\""
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
            "iocCount": 9639,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 9639,
                "newInLastHour": 0,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "50e95582f4719b4eb6c316e332813b41adf449ed",
                "b58e61aaef8465db4eb766b265504bad4288195f",
                "73aa7640cd4b4b4a1adc4feac2b43c4269a869a0",
                "dc56ac0921f789585377f19e9ef12cfa1bc0d6c2",
                "4f391f6181ed04bbb503adffee6259ed57353749"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 54619,
            "activeSources": 8,
            "criticalAlerts": 34653,
            "activeCampaigns": 216
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 24951,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "C2",
                "count": 9702,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 2776,
                "trend": "stable",
                "percentage": -1
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
                "percentage": 93
            },
            {
                "name": "Tech",
                "percentage": 6
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
                "count": 24224,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://123[.]129[.]154[.]143:51205/bin[.]sh",
                    "hxxp://123[.]5[.]112[.]62:48740/bin[.]sh",
                    "hxxps://bloom-distribution-engine[.]garden/e8f5075d-9f41-48bb-96d8-8056d4b53d9f/google[.]ct"
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
                    "1[.]15[.]14[.]29",
                    "1[.]156[.]129[.]70"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1629,
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
                "count": 1418,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"1[.]92[.]101[.]103:8088\"",
                    " \"1[.]92[.]101[.]103:443\"",
                    " \"1[.]92[.]101[.]103:80\""
                ]
            },
            {
                "name": "AsyncRAT",
                "count": 1413,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "b08643668d383e55dd2698e1bcc34571c8dfcc6a",
                    "fa2598910f8313798f8ee2fbfe84668b718442b6",
                    "5bb5b87a8f5d20bf3d5c6d64b3cf71fba84b43fd"
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
                "count": 535,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "971333b66a8266c1bf37aba686b9b89fcd9a9e44",
                    "d401a5c721a25dd94d6eb02284f5e7b918c2b5df",
                    "42874ed125e23b73be13b7b8a7b89305ce979661"
                ]
            },
            {
                "name": "OffLoader",
                "count": 414,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "4f391f6181ed04bbb503adffee6259ed57353749",
                    "c4af518b550a6b1489d87ac39e317e3c16f1f7a7",
                    "c470e636bbf2e111e32699330bfe98e82e932c72"
                ]
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious URLs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": "malware_download",
        "totalAttacksThisHour": 48541,
        "lastCalculated": "2026-05-20 21:21 IST"
    }
};
