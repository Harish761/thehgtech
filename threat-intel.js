// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-05-02T14:47:29.969791+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-05-02T14:47:29.617150+05:30",
    "lastUpdatedFormatted": "May 02, 2026 at 02:47 PM IST",
    "comparisonPeriod": "May 01 \u2013 May 02, 2026",
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
                "hxxps://shining-whoever-570303[.]framer[.]app/",
                "hxxps://inexpensive-leprechaun-012730[.]framer[.]app/",
                "hxxps://plsfreshui[.]weebly[.]com/",
                "hxxps://adventurous-tetragon-867322[.]framer[.]app/",
                "hxxps://www[.]dpdlocake[.]shop/com"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 721,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 721,
                "newInLastHour": 36,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"8fa7c3818473d8a904cf5652a4fbd9ba96795a2e82b8f189d870ddb9a172353e",
                " \"6d25076b0cf8d493bd252bcfdee87c9ec9e23ddb814cfc671e3e80d31e2bf6f8",
                " \"d65c755ee4b5560ad58ac6ec373d5cedb332ce2282594d098b7360f9505daf0f",
                " \"947bf9d7c04554915b4c68b1152afeff923fcd74ab718e9c63a603fe48a7cd1e",
                " \"99b6cd32cc25ea611de1e0fe5d5b22b201a7e885da87ef1031988dc50986b562"
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
                "newInLastHour": 1217,
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
                "1[.]11[.]228[.]4",
                "1[.]120[.]3[.]95",
                "1[.]180[.]183[.]158",
                "1[.]188[.]101[.]0",
                "1[.]192[.]177[.]187"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 3596,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 3596,
                "newInLastHour": 3596,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]0[.]164[.]165",
                "1[.]214[.]117[.]218",
                "1[.]214[.]255[.]210",
                "1[.]214[.]42[.]172",
                "1[.]238[.]106[.]229"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 26648,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 26648,
                "newInLastHour": 26648,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://115[.]218[.]60[.]94:20200/bin[.]sh",
                "hxxps://risk[.]sculpture5traight[.]surf/9fd51fb7-b3ad-4c8f-bf05-b5423d14e06c/user_6747[.]google",
                "hxxp://42[.]226[.]65[.]136:53823/i",
                "hxxps://brave[.]archiv-checkered[.]surf/9fd51fb7-b3ad-4c8f-bf05-b5423d14e06c/user_6747[.]google",
                "hxxp://123[.]9[.]247[.]64:52612/i"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 2102,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 2102,
                "newInLastHour": 2094,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"rar[.]sculpture5traight[.]surf\"",
                " \"deltavie-iwyjqh[.]westcalm[.]surf\"",
                " \"risk[.]sculpture5traight[.]surf\"",
                " \"alpharecwyan0e[.]westcalm[.]surf\"",
                " \"brave[.]archiv-checkered[.]surf\""
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
            "iocCount": 9640,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 9640,
                "newInLastHour": 53,
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
            "totalIndicators": 54135,
            "activeSources": 8,
            "criticalAlerts": 36829,
            "activeCampaigns": 194
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 27255,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "C2",
                "count": 9574,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 500,
                "trend": "stable",
                "percentage": -6
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
                "count": 26553,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://27[.]220[.]186[.]209:48054/i",
                    "hxxp://123[.]10[.]143[.]128:41480/i",
                    "hxxp://42[.]234[.]146[.]6:51927/i"
                ]
            },
            {
                "name": "CINS Threat List",
                "count": 15000,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]120[.]3[.]95",
                    "1[.]169[.]9[.]130",
                    "1[.]180[.]183[.]158"
                ]
            },
            {
                "name": "AsyncRAT",
                "count": 1407,
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
                "count": 878,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"gold[.]chord1opari[.]surf\"",
                    " \"aqua[.]clogg-opposition[.]surf\"",
                    " \"pure[.]chord1opari[.]surf\""
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
                "count": 675,
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
                "count": 552,
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
                "count": 494,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "e7aa9efcff318eb419f2e54bd93aa2e061e70d1c",
                    "3ccd1090364addc6f2cd6ee15cbb9b57cdc11777",
                    "513656d150a201936049c3d3ff4f1c6efb7a8cc7"
                ]
            },
            {
                "name": "OffLoader",
                "count": 401,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "b977e869e493f70b3e7914a1eaa6abe2cc1ea04a",
                    "e7af95eaaa4c87398f4c4c80a66972f342bb3328",
                    "037598803e2603499edbf7275e43f7dd82abd8f3"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 400,
                "types": [
                    "ip-range"
                ],
                "sampleIndicators": [
                    "2.58.56.0/24",
                    "5.101.82.0/24",
                    "5.101.86.0/24"
                ]
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious URLs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": "Spamhaus DROP List",
        "totalAttacksThisHour": 48949,
        "lastCalculated": "2026-05-02 14:47 IST"
    }
};
