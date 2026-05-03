// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-05-04T02:27:44.283187+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-05-04T02:27:43.938191+05:30",
    "lastUpdatedFormatted": "May 04, 2026 at 02:27 AM IST",
    "comparisonPeriod": "May 03 \u2013 May 04, 2026",
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
                "hxxp://789greeting[.]com/s/63BZGFSVBWSFCDX7Y9/584dd8/90eab167-7429-489f-99f6-ce86e8d0d81a",
                "hxxps://32[.]yateo[.]rest/",
                "hxxp://my-site-106195-102460[.]weeblysite[.]com/",
                "hxxps://meta-user[.]invoice-ads-program[.]com/",
                "hxxps://meta-customer[.]invoice-ads-program[.]com/"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 659,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 659,
                "newInLastHour": 19,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"290edd6d3ed29a29820d0ca6f5f62716426ea89f73bd1f575400ac2d78f39c8f",
                " \"b5b6a5431aac5ef2fd7ab06583a30d77d76c9d98e165d99773694d6c1a395bd8",
                " \"65fb4dbc4139471d0b512e72b3d96e18aa840cde86dc4ff3a0abf9aa477ed8cb",
                " \"86f697c2c9f941a7caa7336879a42b61fe8ddd8a5d210bdac6d624104ad48907",
                " \"9c0885ead4d68e9ed74f01cda1bf1c6b43d06d4b95eac664866592161331924a"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1612,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1612,
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
                "1[.]10[.]133[.]201",
                "1[.]11[.]228[.]4",
                "1[.]120[.]3[.]95",
                "1[.]180[.]183[.]158",
                "1[.]188[.]101[.]0"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 7654,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 7654,
                "newInLastHour": 7654,
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
            "iocCount": 27271,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 27271,
                "newInLastHour": 27271,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxps://omni[.]quantumwave[.]surf/9fd51fb7-b3ad-4c8f-bf05-b5423d14e06c/user_6747[.]google",
                "hxxp://42[.]231[.]41[.]174:46578/bin[.]sh",
                "hxxps://link[.]quantumwave[.]surf/9fd51fb7-b3ad-4c8f-bf05-b5423d14e06c/user_6747[.]google",
                "hxxp://27[.]37[.]75[.]114:36056/i",
                "hxxps://byte[.]quantumwave[.]surf/9fd51fb7-b3ad-4c8f-bf05-b5423d14e06c/user_6747[.]google"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 1552,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 1552,
                "newInLastHour": 1551,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"omni[.]zori6mav[.]surf\"",
                " \"link[.]quantumwave[.]surf\"",
                " \"kilo[.]zori6mav[.]surf\"",
                " \"byte[.]quantumwave[.]surf\"",
                " \"vortex[.]zori6mav[.]surf\""
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
            "iocCount": 9611,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 9611,
                "newInLastHour": 17,
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
            "totalIndicators": 55986,
            "activeSources": 8,
            "criticalAlerts": 37506,
            "activeCampaigns": 182
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 27896,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "C2",
                "count": 9610,
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
                "count": 146,
                "trend": "down",
                "percentage": -28
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
                "count": 27235,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxps://view[.]ipfsway[.]lat/9fd51fb7-b3ad-4c8f-bf05-b5423d14e06c/user_6747[.]google",
                    "hxxp://39[.]77[.]70[.]102:56562/bin[.]sh",
                    "hxxp://186[.]159[.]15[.]2:36242/bin[.]sh"
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
                    "1[.]180[.]183[.]158",
                    "1[.]193[.]63[.]176"
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
                "count": 821,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"macro[.]ladboost[.]lat\"",
                    " \"view[.]ipfsway[.]lat\"",
                    " \"point[.]ladboost[.]lat\""
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
                "count": 553,
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
                "count": 509,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "a41f3065955b7a428985483c22176fe4e53776ce",
                    "3ccd1090364addc6f2cd6ee15cbb9b57cdc11777",
                    "513656d150a201936049c3d3ff4f1c6efb7a8cc7"
                ]
            },
            {
                "name": " \"js.iclickfix\"",
                "count": 484,
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
        "totalAttacksThisHour": 51818,
        "lastCalculated": "2026-05-04 02:27 IST"
    }
};
