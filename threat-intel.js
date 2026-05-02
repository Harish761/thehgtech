// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-05-03T02:24:54.863316+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-05-03T02:24:54.498116+05:30",
    "lastUpdatedFormatted": "May 03, 2026 at 02:24 AM IST",
    "comparisonPeriod": "May 02 \u2013 May 03, 2026",
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
                "hxxps://invoice[.]center-meta-agency[.]com/",
                "hxxp://amitsingh-codes[.]github[.]io/netflixui-clone",
                "hxxp://doc-edge-pzau[.]inbox-share[.]workers[.]dev/l/sQBXwkEVJXo?challenge[.]turnstile=3051cf6c-edad-4f37-97d8-e1794f31aa54",
                "hxxps://globaluspslogistics[.]com[.]dackeltraum[.]com/",
                "hxxps://dzhbqdrq[.]elementor[.]cloud/pt/PT/PT6898SFGCCD/BOBMSX02X1/index[.]html"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 762,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 762,
                "newInLastHour": 32,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"304b1984a41b3544738b405efa1cb88ded18dbc09933c0be6259ad4940213bf7",
                " \"df0a07dd29ea4f469c2a59f2b196f6e88d9ea6f591c172b271f02113c30112f1",
                " \"79c8fb66c7fe1f74a1c8b8f931a5b8c1fbba56ec1619c68dc7a27b8d3bff8924",
                " \"7b1dd14bf9189ade7bea7c9e137e50cace9a9ec698e907dea2d24bde8e07b91b",
                " \"cda030ad2d0076fc2fc96aae278fbf21b2244b27826d3890da32adb1e953a42d"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1603,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1603,
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
                "1[.]10[.]133[.]201",
                "1[.]11[.]228[.]4",
                "1[.]120[.]3[.]95",
                "1[.]180[.]183[.]158",
                "1[.]192[.]177[.]187"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 6770,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 6770,
                "newInLastHour": 6770,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]0[.]143[.]115",
                "1[.]0[.]143[.]71",
                "1[.]0[.]164[.]165",
                "1[.]0[.]215[.]59",
                "1[.]10[.]141[.]248"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 27041,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 27041,
                "newInLastHour": 27041,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://61[.]137[.]158[.]117:53226/i",
                "hxxps://apex[.]urbanflowbase[.]lat/9fd51fb7-b3ad-4c8f-bf05-b5423d14e06c/user_6747[.]google",
                "hxxp://110[.]37[.]42[.]62:42623/bin[.]sh",
                "hxxps://skip[.]urbanflowbase[.]lat/9fd51fb7-b3ad-4c8f-bf05-b5423d14e06c/user_6747[.]google",
                "hxxps://91[.]206[.]169[.]134/bin/support[.]client[.]exe"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 1994,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 1994,
                "newInLastHour": 1989,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"mode[.]urbanflowbase[.]lat\"",
                " \"wzcg8[.]strangle-snup[.]surf\"",
                " \"34[.]124[.]142[.]136:443\"",
                " \"34[.]124[.]142[.]136:80\"",
                " \"203[.]160[.]54[.]22:8443\""
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
            "iocCount": 9635,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 9635,
                "newInLastHour": 0,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "bfc93167d1f9c356979db538f40440513ebd88d1",
                "80bd0d28db71c8bb7c56055d2894594f55054be6",
                "dfbc430daf40f0448ed30170103e9d829ee6b2e2",
                "a41f3065955b7a428985483c22176fe4e53776ce",
                "def45d954161dc6bf420131f900bd7cd9fd688c1"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 56333,
            "activeSources": 8,
            "criticalAlerts": 37380,
            "activeCampaigns": 195
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 27753,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "C2",
                "count": 9627,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 499,
                "trend": "stable",
                "percentage": -2
            },
            {
                "category": "Phishing",
                "count": 339,
                "trend": "stable",
                "percentage": 0
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
                "count": 27018,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxps://45[.]94[.]31[.]109/bin/support[.]client[.]exe",
                    "hxxps://45[.]94[.]31[.]109/Bin/ScreenConnect[.]ClientSetup[.]exe",
                    "hxxp://110[.]36[.]70[.]238:34758/bin[.]sh"
                ]
            },
            {
                "name": "CINS Threat List",
                "count": 15000,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]10[.]133[.]201",
                    "1[.]11[.]228[.]4",
                    "1[.]120[.]3[.]95"
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
                "count": 1408,
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
                "name": " \"js.clearfake\"",
                "count": 864,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"nx88[.]silvermoonlight[.]lat\"",
                    " \"caveapi[.]serious-substance[.]surf\"",
                    " \"zeno[.]silvermoonlight[.]lat\""
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
                "count": 517,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "a41f3065955b7a428985483c22176fe4e53776ce",
                    "e7aa9efcff318eb419f2e54bd93aa2e061e70d1c",
                    "3ccd1090364addc6f2cd6ee15cbb9b57cdc11777"
                ]
            },
            {
                "name": " \"js.iclickfix\"",
                "count": 485,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"zorbit[.]online\"",
                    " \"xn--80aa2bek9a[.]xn--p1ai\"",
                    " \"ygbrowsbeauty[.]com\""
                ]
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious URLs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": "malware_download",
        "totalAttacksThisHour": 51137,
        "lastCalculated": "2026-05-03 02:24 IST"
    }
};
