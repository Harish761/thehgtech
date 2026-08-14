// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-08-14T14:45:55.446575+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-08-14T14:45:55.188199+05:30",
    "lastUpdatedFormatted": "Aug 14, 2026 at 02:45 PM IST",
    "comparisonPeriod": "Aug 13 \u2013 Aug 14, 2026",
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
                "hxxps://web3eoxdus[.]zapier[.]app/nav-en",
                "hxxps://ultralimiteprimedisponivel[.]s3[.]us-east-005[.]backblazeb2[.]com/aumento[.]html",
                "hxxps://gbinsta[.]cc/download-gb-insta-apk",
                "hxxp://6fa37b[.]icefactory[.]cl/",
                "hxxp://6f9a37[.]icefactory[.]cl/"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 954,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 954,
                "newInLastHour": 189,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"d393003e5e731f0b24e5df88a86b17efc3a47d7c3eb454ea65708069b30628de",
                " \"d02a806a385a2bb41a031a79061512dcf98c24512d2d96f57474243d13a581af",
                " \"02c7c8ec40b82738e76147ce4491ccaa6486899797384e07420269e7d69cbc10",
                " \"cdcf6356e2b101544a660c16e672ec81a0be2523f5bbee9abc36ae47ec93c8ea",
                " \"ece034ee44f19dbd335eeb5e0b79814583a91ae942731f4ed870a8d157c00dac"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1685,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1685,
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
                "2.26.75.0/24",
                "2.27.5.0/24"
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
                "1[.]140[.]210[.]242",
                "1[.]15[.]14[.]29",
                "1[.]172[.]222[.]189",
                "1[.]180[.]190[.]250",
                "1[.]181[.]200[.]22"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 4559,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 4559,
                "newInLastHour": 4559,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]0[.]164[.]165",
                "1[.]14[.]184[.]80",
                "1[.]178[.]214[.]92",
                "1[.]203[.]174[.]102",
                "1[.]217[.]23[.]206"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 16963,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 16963,
                "newInLastHour": 16963,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://176[.]65[.]139[.]130/bins/bin[.]mips",
                "hxxp://176[.]65[.]139[.]130/bins/bin[.]powerpc-440fp",
                "hxxp://176[.]65[.]139[.]130/bins/bin[.]powerpc",
                "hxxp://176[.]65[.]139[.]130/bins/bin[.]mipsel",
                "hxxp://176[.]65[.]139[.]130/bins/bin[.]sh4"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 5224,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 5224,
                "newInLastHour": 4899,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"172[.]188[.]0[.]134:22\"",
                " \"172[.]188[.]0[.]134:443\"",
                " \"43[.]128[.]21[.]190:123\"",
                " \"108[.]165[.]147[.]244:18080\"",
                " \"hxxps://sww[.]sm188cuan[.]top/\""
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
            "iocCount": 10417,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 10417,
                "newInLastHour": 13,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "dfde6725130631a83b3d0dc221736bad3db16918",
                "a45080c92a0b2314966517a4643ebf280e88a11b",
                "3141245c066d71ef08936296ffea7ea15082f7fd",
                "46a2a90c5813eda22263c058742902faf1def5a6",
                "183d02c077142b8701d1a719cc8cee3f8fb76072"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 50108,
            "activeSources": 8,
            "criticalAlerts": 28259,
            "activeCampaigns": 243
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 17854,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "C2",
                "count": 10405,
                "trend": "stable",
                "percentage": 2
            },
            {
                "category": "Botnet",
                "count": 3816,
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
                "count": 16815,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://2[.]26[.]81[.]46/eclipse[.]x86_64",
                    "hxxp://2[.]26[.]81[.]46/bins/arm7",
                    "hxxp://2[.]26[.]81[.]46/bins/mips"
                ]
            },
            {
                "name": "CINS Threat List",
                "count": 15000,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]140[.]210[.]242",
                    "1[.]172[.]222[.]189",
                    "1[.]181[.]200[.]22"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1685,
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
                "count": 1436,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "b5f071dd28b511f0b4b067507602a779feb4301f",
                    "714c56e9e207d5c8e08e1ca28cd9ba85f079d061",
                    "6647f9e4a2e273d7b78ff02be7114b0e9e2a719f"
                ]
            },
            {
                "name": " \"win.cobalt_strike\"",
                "count": 1326,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"43[.]225[.]157[.]17:8088\"",
                    " \"43[.]128[.]21[.]190:8080\"",
                    " \"43[.]128[.]21[.]190:8888\""
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
                "name": "Vidar",
                "count": 701,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "2a68cf483216956f8162c0334a75dac483bfaac6",
                    "7bbac2b67988c36fa1dbd3a75dc06629f766ccaf",
                    "78dc4f50971751cbf98b96219dd56f099095a717"
                ]
            },
            {
                "name": "QuasarRAT",
                "count": 698,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "9b4c3ff8dc5891693f443320e3c1167c7cebe2b7",
                    "0f1b05653c3b3ab3bb4ecd772dd024668cbe8df1",
                    "b364395fee8c2e4c9eaf9a2531f6f7ac7bf8e4ae"
                ]
            },
            {
                "name": "LummaStealer",
                "count": 557,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "501d817bb1780acfe5e47082c43472bda8068e4d",
                    "2beac2ee8b2fe7625d4de9f5381d37f200965f91",
                    "a46841d623a191366909b24375bee0eceea23bbe"
                ]
            },
            {
                "name": " \"js.clearfake\"",
                "count": 512,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"badenmasters[.]ch\"",
                    " \"3544[.]ch\"",
                    " \"06e948jz[.]spirosnet[.]com\""
                ]
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious URLs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": " \"js.iclickfix\"",
        "totalAttacksThisHour": 41928,
        "lastCalculated": "2026-08-14 14:45 IST"
    }
};
