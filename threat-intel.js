// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-04-29T19:55:57.394969+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-04-29T19:55:57.029889+05:30",
    "lastUpdatedFormatted": "Apr 29, 2026 at 07:55 PM IST",
    "comparisonPeriod": "Apr 28 \u2013 Apr 29, 2026",
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
                "hxxps://invited[.]credits-center[.]com/",
                "hxxps://www[.]danilosolucoesdeti[.]com[.]br/sp/[.]@/main/",
                "hxxp://rdomingo078[.]github[.]io/PURCHASE-ORDER-ATTACHED/New%20Purchase%20Orderv2%20my%20page",
                "hxxps://seal-app-78uar[.]ondigitalocean[.]app/",
                "hxxps://ntcont[.]com/connect/"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 836,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 836,
                "newInLastHour": 101,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"65471e745397e92b3dd2ab9778cbd9c4c0f1471f9075c5860c9004a61ebd6a00",
                " \"8a559ab8f2cc7f4c0c52fb78beeecdb9995227ffbd766f4ff8e82721fe7b4438",
                " \"2b5063957a9c410797bdcb19fdc735e2454a687bcf4b4364497b0c3d8fbcb46c",
                " \"be119a21bedc3a79bf4dea8bcf5adf18304997a01ea23e276b9c31be37b789ab",
                " \"5aae35e2a68a8fff33f324c70f14780fc49cbf962a8aee46a29e258f2a1fa70c"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1615,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1615,
                "newInLastHour": 15,
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
                "1[.]169[.]39[.]171",
                "1[.]180[.]183[.]158",
                "1[.]192[.]177[.]187",
                "1[.]197[.]68[.]209",
                "1[.]20[.]172[.]113"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 3637,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 3637,
                "newInLastHour": 3637,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]0[.]164[.]165",
                "1[.]15[.]227[.]58",
                "1[.]214[.]117[.]218",
                "1[.]214[.]197[.]163",
                "1[.]214[.]42[.]172"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 26604,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 26604,
                "newInLastHour": 26604,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxps://meadow-cast[.]g1enmor[.]garden/cdk-msdn-3457325-null/load-file0dsdf567[.]chk",
                "hxxp://112[.]246[.]118[.]26:32802/i",
                "hxxp://221[.]203[.]231[.]80:32919/bin[.]sh",
                "hxxp://115[.]52[.]27[.]84:59552/i",
                "hxxps://pilot-brave[.]g1enmor[.]garden/cdk-msdn-3457325-null/load-file0dsdf567[.]chk"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 946,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 946,
                "newInLastHour": 931,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"meadow-cast[.]g1enmor[.]garden\"",
                " \"pilot-brave[.]g1enmor[.]garden\"",
                " \"vordraon9[.]g1enmor[.]garden\"",
                " \"sercrestar[.]ve1ori[.]garden\"",
                " \"307clahr[.]mistbr1a[.]garden\""
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
            "iocCount": 9636,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 9636,
                "newInLastHour": 1,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "0b28f0c230c982807f2446a5adb26323534a8444",
                "273c74ce7170a85b37f91741ce7faa534639e29a",
                "e7aa9efcff318eb419f2e54bd93aa2e061e70d1c",
                "baec0b516b841d0291da5463777d12e63c0851a9",
                "6b3dc8ea0ad9cf783a6542661b85560c17abe94d"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 54932,
            "activeSources": 8,
            "criticalAlerts": 37038,
            "activeCampaigns": 188
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 27419,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "C2",
                "count": 9619,
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
                "count": 223,
                "trend": "stable",
                "percentage": -3
            }
        ],
        "targetedSectors": [
            {
                "name": "General",
                "percentage": 84
            },
            {
                "name": "Tech",
                "percentage": 15
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
                "count": 26466,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://113[.]221[.]24[.]131:49975/i",
                    "hxxp://118[.]34[.]109[.]121:51317/i",
                    "hxxps://loose-mesh[.]grove5s[.]garden/cdk-msdn-3457325-null/load-file0dsdf567[.]chk"
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
                    "1[.]169[.]39[.]171",
                    "1[.]169[.]9[.]130"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1602,
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
                "count": 516,
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
                "name": " \"js.clearfake\"",
                "count": 458,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"zenforgeos3[.]peta1un[.]garden\"",
                    " \"loose-mesh[.]grove5s[.]garden\"",
                    " \"1aun0-zone[.]verd1ya[.]garden\""
                ]
            },
            {
                "name": " \"n/a",
                "count": 456,
                "types": [
                    "hash"
                ],
                "sampleIndicators": [
                    " \"f47e87499cf614a9a571a9fcec5d75f5a4c0a0f4b1b0cbb23caff7e56ed48c45",
                    " \"e6ab66d6f9f19908575f9276441b255c490c41d00904568f0ff8d0543a485a8f",
                    " \"5e44e14fc012b3b54c16d4af77b92d235b415e7de5704fa648c099c5d7172f2d"
                ]
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious URLs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": "SSH Attacks",
        "totalAttacksThisHour": 46594,
        "lastCalculated": "2026-04-29 19:55 IST"
    }
};
