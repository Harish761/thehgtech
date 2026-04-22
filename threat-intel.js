// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-04-22T09:06:09.187238+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-04-22T09:06:08.807543+05:30",
    "lastUpdatedFormatted": "Apr 22, 2026 at 09:06 AM IST",
    "comparisonPeriod": "Apr 21 \u2013 Apr 22, 2026",
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
                "hxxp://validar-datos-365[.]iceiy[.]com/",
                "hxxps://staemnaroruv[.]skin/50",
                "hxxps://support251[.]agency-partner-manage[.]com/",
                "hxxp://member51[.]strategic-digital-zone[.]com/",
                "hxxps://jnelw-lemp-etiw[.]p-je675f6e[.]workers[.]dev/lp/BWBJA9KG8PI/"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 860,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 860,
                "newInLastHour": 180,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"e9121ee0d14131466be33b166371afae3f5212b016736fdbcd0e0d4e650bfde2",
                " \"495630dca6cc2b16f4e01c5dc5e9af3189ca3cf405b5f1ef1a52d061fae43d05",
                " \"924767f2a315cefb9a044e4b0a17f3d4905f3cd34e531ebf50d99be79547338c",
                " \"3724c804231366ed429dd3c6ecf8cb51955a35fe0bae41d3c1dabc5b58f95186",
                " \"41c953d92959ab56f3f2e248b41b8b7272e9aba4dbe868f221808d6c3fc9a25a"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1541,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1541,
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
                "1[.]176[.]118[.]246",
                "1[.]176[.]238[.]107",
                "1[.]180[.]183[.]158",
                "1[.]180[.]252[.]30",
                "1[.]180[.]94[.]210"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 4480,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 4480,
                "newInLastHour": 4480,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]0[.]164[.]165",
                "1[.]14[.]181[.]94",
                "1[.]162[.]228[.]225",
                "1[.]214[.]197[.]163",
                "1[.]214[.]42[.]172"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 25787,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 25787,
                "newInLastHour": 25787,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxps://long-be-lt3[.]arena-plug[.]in[.]net/05fe317c-0981-4de2-bc8a-930d369db441/ck-3d80df5d12cdfe6450a782fc87bf66b444[.]google",
                "hxxps://white-shir-t2[.]arena-plug[.]in[.]net/05fe317c-0981-4de2-bc8a-930d369db441/ck-3d80df5d12cdfe6450a782fc87bf66b444[.]google",
                "hxxp://115[.]63[.]12[.]229:50276/bin[.]sh",
                "hxxp://115[.]52[.]29[.]228:40767/i",
                "hxxp://42[.]238[.]162[.]76:57129/bin[.]sh"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 1040,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 1040,
                "newInLastHour": 1040,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"gtn[.]az\"",
                " \"long-be-lt3[.]arena-plug[.]in[.]net\"",
                " \"white-shir-t2[.]arena-plug[.]in[.]net\"",
                " \"black-h-at1[.]arena-plug[.]in[.]net\"",
                " \"purewa-ter6[.]import8ravitate[.]in[.]net\""
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
            "iocCount": 9596,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 9596,
                "newInLastHour": 0,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "ea714daf2e106b7297763178ab7c6e38753ac5bd",
                "d01e5c2a9987277bfd045839b37c6b9944109e87",
                "282f3ef6e708184f7f5607348879e4442fa44181",
                "6715ad3eb2bf27bc3d853c2ebad3257a6e6cf04f",
                "9c02a5ba4157814436a42103d32ebe3f20ad87bd"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 54610,
            "activeSources": 8,
            "criticalAlerts": 36654,
            "activeCampaigns": 188
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 27042,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "C2",
                "count": 9612,
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
                "count": 227,
                "trend": "stable",
                "percentage": 0
            }
        ],
        "targetedSectors": [
            {
                "name": "General",
                "percentage": 80
            },
            {
                "name": "Tech",
                "percentage": 18
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
                "count": 26295,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://81[.]230[.]148[.]181:40652/i",
                    "hxxps://neo-c4rri[.]junkie-talker[.]in[.]net/05fe317c-0981-4de2-bc8a-930d369db441/ck-3d80df5d12cdfe6450a782fc87bf66b444[.]google",
                    "hxxp://123[.]189[.]134[.]198:40571/bin[.]sh"
                ]
            },
            {
                "name": "CINS Threat List",
                "count": 15000,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]14[.]181[.]94",
                    "1[.]15[.]133[.]19",
                    "1[.]15[.]51[.]236"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1588,
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
                "count": 512,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "ea714daf2e106b7297763178ab7c6e38753ac5bd",
                    "d01e5c2a9987277bfd045839b37c6b9944109e87",
                    "282f3ef6e708184f7f5607348879e4442fa44181"
                ]
            },
            {
                "name": " \"js.clearfake\"",
                "count": 506,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"4mbe-wave[.]junkie-talker[.]in[.]net\"",
                    " \"m46v[.]junkie-talker[.]in[.]net\"",
                    " \"6347[.]junkie-talker[.]in[.]net\""
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
        "fastestRisingThreat": " \"n/a",
        "totalAttacksThisHour": 46792,
        "lastCalculated": "2026-04-22 09:06 IST"
    }
};
