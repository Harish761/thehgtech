// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-05-03T12:07:02.887522+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-05-03T12:07:02.526979+05:30",
    "lastUpdatedFormatted": "May 03, 2026 at 12:07 PM IST",
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
                "hxxps://ipfs[.]io/ipfs/bafkreigl2k5fptwipwkjwk4ldzsewducdpxhrzcxiaqnfcuygdv5grbrmi?eta=valex9@094892cebb7879740025e9ac3969a04ab52c[.]com",
                "hxxps://www[.]usupholdbit[.]com/",
                "hxxp://appusujith222-hash[.]github[.]io/sample-project",
                "hxxps://sportsmanfront[.]com/",
                "hxxp://www[.]79367[.]cc/"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 722,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 722,
                "newInLastHour": 5,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"8ffdf472d53e3acd4a441cb0253872105d24e311a095f097e07d85cb733b502d",
                " \"2220ded0b6e8e5e917dd45ba7f85a510eda6a0017e4ed53ce89dc0f8e4a8ff27",
                " \"ff11e95d2ca67b70576f41af5905711a5ad457264a74148754a1e50bf2640992",
                " \"46a53b80f897ff8deb7babd0549aea64c9269ddc68ef43e8960fb2271c5739c2",
                " \"883241babed5fbdf3d4ef6736a55353d4b1b69c2b41891cd7da1caee19ba5373"
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
                "newInLastHour": 32,
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
                "1[.]120[.]3[.]95",
                "1[.]15[.]227[.]58",
                "1[.]180[.]183[.]158",
                "1[.]188[.]101[.]0"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 6447,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 6447,
                "newInLastHour": 6447,
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
            "iocCount": 26918,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 26918,
                "newInLastHour": 26918,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://115[.]50[.]41[.]9:47211/bin[.]sh",
                "hxxps://macro[.]goldenleafway[.]lat/9fd51fb7-b3ad-4c8f-bf05-b5423d14e06c/user_6747[.]google",
                "hxxp://175[.]168[.]230[.]209:33721/bin[.]sh",
                "hxxps://alpha[.]goldenleafway[.]lat/9fd51fb7-b3ad-4c8f-bf05-b5423d14e06c/user_6747[.]google",
                "hxxps://nx44[.]silverwoodhub[.]lat/9fd51fb7-b3ad-4c8f-bf05-b5423d14e06c/user_6747[.]google"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 1906,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 1906,
                "newInLastHour": 1901,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"shift[.]goldenleafway[.]lat\"",
                " \"zeta[.]cryptonodex[.]lat\"",
                " \"macro[.]goldenleafway[.]lat\"",
                " \"alpha[.]goldenleafway[.]lat\"",
                " \"fast[.]tari8lax[.]lat\""
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
            "iocCount": 9634,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 9634,
                "newInLastHour": 44,
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
            "totalIndicators": 55966,
            "activeSources": 8,
            "criticalAlerts": 37159,
            "activeCampaigns": 192
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 27576,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "C2",
                "count": 9583,
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
                "count": 311,
                "trend": "down",
                "percentage": -37
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
                "count": 26861,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxps://atlas[.]urbanlogicgrid[.]lat/9fd51fb7-b3ad-4c8f-bf05-b5423d14e06c/user_6747[.]google",
                    "hxxps://sync[.]urbanlogicgrid[.]lat/9fd51fb7-b3ad-4c8f-bf05-b5423d14e06c/user_6747[.]google",
                    "hxxps://beta[.]rapidfirepixel[.]lat/9fd51fb7-b3ad-4c8f-bf05-b5423d14e06c/user_6747[.]google"
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
                    "1[.]15[.]227[.]58",
                    "1[.]180[.]183[.]158"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1585,
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
                "name": " \"js.clearfake\"",
                "count": 953,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"atlas[.]urbanlogicgrid[.]lat\"",
                    " \"dash[.]fena7dor[.]lat\"",
                    " \"sync[.]urbanlogicgrid[.]lat\""
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
                "count": 499,
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
        "fastestRisingThreat": "SSH Attacks",
        "totalAttacksThisHour": 50652,
        "lastCalculated": "2026-05-03 12:07 IST"
    }
};
