// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-04-25T14:35:47.951979+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-04-25T14:35:47.609180+05:30",
    "lastUpdatedFormatted": "Apr 25, 2026 at 02:35 PM IST",
    "comparisonPeriod": "Apr 24 \u2013 Apr 25, 2026",
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
                "hxxps://accountterminationalert[.]weebly[.]com/",
                "hxxps://docusignsecuredfile0[.]weebly[.]com/",
                "hxxps://microsoft365niyn[.]weebly[.]com/",
                "hxxps://willing-gift-685217[.]framer[.]app/",
                "hxxps://itsuppports[.]com/?r=c7974179-651d-4cf3-b56c-516ce385d9cb"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 903,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 903,
                "newInLastHour": 29,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"7142ba9a0a96e7184d8da2d5514d4416191494cc709f424f924ceb26332171ec",
                " \"206645125a36e49da4e00750679ce3246814d775d6400b96f7befad1b1776487",
                " \"455fd8345586b8ef5d6bbdd9e180d91fe886ebc4cee6f59cee4eee92dfee1f83",
                " \"41e26a1db2f68a2f9215ff63aa60974415e338e121d98c18bc80ceea9116310c",
                " \"85fd9f2f65e1adf5dbd70c0cbf1259ed05f0b972870abf73d65d76a607d2b759"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1588,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1588,
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
                "1[.]1[.]140[.]136",
                "1[.]120[.]3[.]95",
                "1[.]15[.]51[.]236",
                "1[.]169[.]9[.]130"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 29904,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 29904,
                "newInLastHour": 29904,
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
            "iocCount": 25875,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 25875,
                "newInLastHour": 25875,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxps://serven5um[.]nov3liren[.]in[.]net/cdk-msdn-3457325-null/load-file0dsdf567[.]chk",
                "hxxp://114[.]227[.]183[.]124:56316/bin[.]sh",
                "hxxp://175[.]43[.]154[.]49:51489/bin[.]sh",
                "hxxp://219[.]157[.]63[.]81:45807/i",
                "hxxp://115[.]49[.]4[.]7:43447/i"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 829,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 829,
                "newInLastHour": 822,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"techel[.]co[.]ke\"",
                " \"airtellwireless[.]it[.]com\"",
                " \"tasheelbd[.]com\"",
                " \"104[.]21[.]9[.]66:443\"",
                " \"172[.]67[.]159[.]51:443\""
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
            "iocCount": 9622,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 9622,
                "newInLastHour": 9,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "386e3878708b3662a447b7e33cc91a0466e9b8a8",
                "ea714daf2e106b7297763178ab7c6e38753ac5bd",
                "d01e5c2a9987277bfd045839b37c6b9944109e87",
                "282f3ef6e708184f7f5607348879e4442fa44181",
                "6715ad3eb2bf27bc3d853c2ebad3257a6e6cf04f"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 54168,
            "activeSources": 8,
            "criticalAlerts": 36394,
            "activeCampaigns": 204
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 26790,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "C2",
                "count": 9604,
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
                "count": 171,
                "trend": "down",
                "percentage": -11
            }
        ],
        "targetedSectors": [
            {
                "name": "General",
                "percentage": 82
            },
            {
                "name": "Tech",
                "percentage": 17
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
                "count": 25786,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://125[.]45[.]65[.]121:37827/bin[.]sh",
                    "hxxps://sub-n3uron[.]zex8liron[.]in[.]net/cdk-msdn-3457325-null/load-file0dsdf567[.]chk",
                    "hxxp://42[.]231[.]93[.]100:60469/bin[.]sh"
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
                    "1[.]1[.]140[.]136",
                    "1[.]15[.]51[.]236"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1591,
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
                "count": 674,
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
                    "386e3878708b3662a447b7e33cc91a0466e9b8a8",
                    "ea714daf2e106b7297763178ab7c6e38753ac5bd",
                    "d01e5c2a9987277bfd045839b37c6b9944109e87"
                ]
            },
            {
                "name": " \"n/a",
                "count": 438,
                "types": [
                    "hash"
                ],
                "sampleIndicators": [
                    " \"eeda055330d668b20a44284ba525c15eee43e97bf576c80b6b8d42aecfd9e88f",
                    " \"40954b27b8d9c5affe5035f26727cf48ddbc3479cc0aefa75f4394637534bb57",
                    " \"f1d929206293540f1153d1aac7bc68cb0f9035cfd9d31c262976219275b414da"
                ]
            },
            {
                "name": "OffLoader",
                "count": 400,
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
        "topAttackVector": "Malicious IPs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": "SSH Attacks",
        "totalAttacksThisHour": 71944,
        "lastCalculated": "2026-04-25 14:35 IST"
    }
};
