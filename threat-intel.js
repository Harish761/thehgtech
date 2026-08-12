// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-08-13T02:27:30.686077+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-08-13T02:27:30.328389+05:30",
    "lastUpdatedFormatted": "Aug 13, 2026 at 02:27 AM IST",
    "comparisonPeriod": "Aug 12 \u2013 Aug 13, 2026",
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
                "hxxps://account-att-com-9161be[.]webflow[.]io/",
                "hxxp://www[.]done4you[.]tv/following/disclosures[.]html",
                "hxxps://www[.]noticeofpleadings[.]net/lumma/domainseizurenotice[.]htm",
                "hxxps://weaponswh[.]run/gnogasz",
                "hxxps://68a262[.]icefactory[.]cl/"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 1697,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 1697,
                "newInLastHour": 0,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"c91aec7eea473d54f6f4bdfd15e4f5e1f7e4f72740cbfd92364dfdf4fca75bd6",
                " \"5cfa6583cd9e509108240188caa996f4707dc57765a96c49ca68771f791f1b89",
                " \"cb938eeafd41a95adefbe4711e0ed136cca6f5704b5d4727ecaf6a0933bcde42",
                " \"b53ec7962041720c29f54d290734e6a8fe1e619753814de356b202251f9bbc3b",
                " \"15b63033ff22fae18a6fec5e1c5744b84c0f59dd204520b37bd899c887d6b8aa"
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
                "newInLastHour": 2,
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
                "1[.]180[.]190[.]250",
                "1[.]181[.]200[.]22",
                "1[.]188[.]5[.]237",
                "1[.]192[.]179[.]82",
                "1[.]192[.]21[.]225"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 9819,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 9819,
                "newInLastHour": 9819,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]0[.]164[.]165",
                "1[.]116[.]61[.]217",
                "1[.]12[.]233[.]51",
                "1[.]14[.]106[.]163",
                "1[.]14[.]165[.]193"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 17108,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 17108,
                "newInLastHour": 17108,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://175[.]146[.]6[.]50:52389/i",
                "hxxp://123[.]14[.]73[.]174:46201/i",
                "hxxp://80[.]67[.]33[.]209:34699/i",
                "hxxp://123[.]14[.]73[.]174:46201/bin[.]sh",
                "hxxp://175[.]146[.]6[.]50:52389/bin[.]sh"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 4740,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 4740,
                "newInLastHour": 4446,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"fosmhvf[.]en-en-en-slimsounds[.]com\"",
                " \"vbpqhn[.]usa-audizen-us[.]com\"",
                " \"hxxp://zadno[.]run:4219\"",
                " \"usa-audizen-us[.]com\"",
                " \"jydiadog[.]eng-nitrilean[.]com\""
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
            "iocCount": 10344,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 10344,
                "newInLastHour": 54,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "d8614f6c4127ebeaf66a898a8e7ce3801cf03c30",
                "08d8ee8314ace61bcc0481fe9c0e2bfaaccf34e0",
                "793ccba0eaedcd1a87bb5200cde5a1c9f21ad4ad",
                "8c798a5e27290e239890509e6b0c08c214664a87",
                "c0b1920e3d73babea5c2ef2af7ba72977e65586b"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 50829,
            "activeSources": 8,
            "criticalAlerts": 29165,
            "activeCampaigns": 244
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 18829,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "C2",
                "count": 10336,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 3755,
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
                "count": 17105,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://123[.]14[.]73[.]174:46201/bin[.]sh",
                    "hxxp://175[.]146[.]6[.]50:52389/bin[.]sh",
                    "hxxp://61[.]53[.]219[.]139:36865/i"
                ]
            },
            {
                "name": "CINS Threat List",
                "count": 15000,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]119[.]194[.]226",
                    "1[.]15[.]14[.]29",
                    "1[.]180[.]190[.]250"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1684,
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
                "count": 1315,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"159[.]75[.]123[.]199:9090\"",
                    " \"159[.]75[.]123[.]199:13306\"",
                    " \"159[.]75[.]123[.]199:3306\""
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
                "count": 695,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "b364395fee8c2e4c9eaf9a2531f6f7ac7bf8e4ae",
                    "ece1b6bdc8e62d35188aab274bdb0be28d84c43f",
                    "b14379b3743c37a26289499aca921c99998649f1"
                ]
            },
            {
                "name": "Vidar",
                "count": 676,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "08d8ee8314ace61bcc0481fe9c0e2bfaaccf34e0",
                    "793ccba0eaedcd1a87bb5200cde5a1c9f21ad4ad",
                    "8c798a5e27290e239890509e6b0c08c214664a87"
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
                "name": " \"Mirai",
                "count": 515,
                "types": [
                    "hash"
                ],
                "sampleIndicators": [
                    " \"5cfa6583cd9e509108240188caa996f4707dc57765a96c49ca68771f791f1b89",
                    " \"cb938eeafd41a95adefbe4711e0ed136cca6f5704b5d4727ecaf6a0933bcde42",
                    " \"b53ec7962041720c29f54d290734e6a8fe1e619753814de356b202251f9bbc3b"
                ]
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious IPs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": "SSH Attacks",
        "totalAttacksThisHour": 46734,
        "lastCalculated": "2026-08-13 02:27 IST"
    }
};
