// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-08-12T19:07:11.137179+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-08-12T19:07:10.795662+05:30",
    "lastUpdatedFormatted": "Aug 12, 2026 at 07:07 PM IST",
    "comparisonPeriod": "Aug 11 \u2013 Aug 12, 2026",
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
            "iocCount": 2388,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 2388,
                "newInLastHour": 124,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"a6c2a5383814d42e4e8fe5194093a903b26720a9f1cbbdc7858702f3c913750a",
                " \"cab88d241cae8ea133ae5d115fe4b5d6ebb257095802c3c32a61d81f6e8c5a76",
                " \"c2bf14ac72156961d49aeaf44857aca592fd1cc5b32790266f5e097d1b58f79a",
                " \"a332d0013114183c5feef385e24a99330cf86166cbd9b36a80cb316efa32e4f0",
                " \"92b2989827051a5ed0d423a9114ba2a09663da312159df167f5a031ed796b268"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1678,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1678,
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
                "1[.]119[.]194[.]226",
                "1[.]180[.]190[.]250",
                "1[.]181[.]200[.]22",
                "1[.]183[.]161[.]31",
                "1[.]188[.]5[.]237"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 9596,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 9596,
                "newInLastHour": 9596,
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
            "iocCount": 17078,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 17078,
                "newInLastHour": 17078,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://60[.]189[.]111[.]145:37976/i",
                "hxxp://joker[.]aec944b68370194a50[.]link:6556/k",
                "hxxp://60[.]189[.]111[.]145:37976/bin[.]sh",
                "hxxp://94[.]154[.]43[.]76/miron[.]mipsrouter",
                "hxxp://94[.]154[.]43[.]76/miron[.]m68k"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 4617,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 4617,
                "newInLastHour": 4592,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"q3rir44c[.]eng--slimsounds[.]com\"",
                " \"112[.]213[.]110[.]210:441\"",
                " \"hairoco[.]se\"",
                " \"venixfit[.]com\"",
                " \"amarosalento[.]it\""
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
            "iocCount": 10407,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 10407,
                "newInLastHour": 0,
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
            "totalIndicators": 51022,
            "activeSources": 8,
            "criticalAlerts": 29683,
            "activeCampaigns": 253
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 19293,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "C2",
                "count": 10390,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 3757,
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
                "count": 16905,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://204[.]44[.]69[.]222/75/wemadegoodthingsforbestforever[.]hta",
                    "hxxps://essizs[.]com/img_170232[.]png",
                    "hxxps://long-wildflower-b4f5[.]gustavosoftware[.]workers[.]dev/qgeUK"
                ]
            },
            {
                "name": "CINS Threat List",
                "count": 15000,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]180[.]190[.]250",
                    "1[.]181[.]200[.]22",
                    "1[.]192[.]179[.]82"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1686,
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
                "count": 1313,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"169[.]58[.]121[.]189:80\"",
                    " \"169[.]58[.]121[.]189:443\"",
                    " \"169[.]58[.]121[.]189:4443\""
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
                "count": 696,
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
                "name": "QuasarRAT",
                "count": 696,
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
                "name": " \"n/a",
                "count": 552,
                "types": [
                    "hash"
                ],
                "sampleIndicators": [
                    " \"f6d8426be30c080da3641a4f2e942e5d8c6950c9f76486489bf6074b7f090b34",
                    " \"fa307f25415497d9199129e21d9511cfee130004bfb93d3caced89bb26b5cc88",
                    " \"a296390de23c639a034c11e0a71988ddb23f70c22b6c4f5b9c249e2739242c6b"
                ]
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious IPs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": " \"win.vidar\"",
        "totalAttacksThisHour": 46695,
        "lastCalculated": "2026-08-12 19:07 IST"
    }
};
