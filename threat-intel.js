// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-08-12T22:36:43.873999+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-08-12T22:36:43.613855+05:30",
    "lastUpdatedFormatted": "Aug 12, 2026 at 10:36 PM IST",
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
            "iocCount": 1711,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 1711,
                "newInLastHour": 36,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"c226c486d54ee56197ad84bcac9a8cc5d3e7c54cb5ee7b7c4bd4dfb339b9b77b",
                " \"11fc1bbfeeddff818ca8c6044852c52d6619e7900142d084dce2e7f73e4695c7",
                " \"979fd05f03fe4197096b4b64711bc933c5b3897a2f6095b32f00e9fb52cb1304",
                " \"be7d04f3bbca91674206a22fdedc0d4874a62ffe0dd164e98de6d3cb065a57bf",
                " \"31484b3b8b28b89ec2f373d7dd6ed333cec905c49703d0f6ddeb8ddefabdcd4a"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1632,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1632,
                "newInLastHour": 8,
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
                "2.57.17.0/24"
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
                "1[.]181[.]200[.]22",
                "1[.]192[.]179[.]82",
                "1[.]192[.]21[.]225",
                "1[.]193[.]63[.]61",
                "1[.]197[.]245[.]31"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 9655,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 9655,
                "newInLastHour": 9655,
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
            "iocCount": 17083,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 17083,
                "newInLastHour": 17083,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://27[.]37[.]103[.]246:42822/i",
                "hxxp://62[.]60[.]226[.]140/files/7646424755/gX8992r[.]bat",
                "hxxp://110[.]39[.]228[.]78:49446/i",
                "hxxp://110[.]39[.]228[.]78:49446/bin[.]sh",
                "hxxp://112[.]238[.]178[.]200:43963/i"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 4599,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 4599,
                "newInLastHour": 4313,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"ljnnay[.]synptigen[.]com\"",
                " \"synptigen[.]com\"",
                " \"hxxps://37[.]27[.]134[.]32\"",
                " \"qiziytn[.]theultimateoutlet[.]com\"",
                " \"theultimateoutlet[.]com\""
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
            "iocCount": 10269,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 10269,
                "newInLastHour": 5,
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
            "totalIndicators": 51473,
            "activeSources": 8,
            "criticalAlerts": 29878,
            "activeCampaigns": 254
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 19493,
                "trend": "stable",
                "percentage": 1
            },
            {
                "category": "C2",
                "count": 10385,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 3775,
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
                "count": 17078,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://60[.]189[.]111[.]145:37976/i",
                    "hxxp://joker[.]aec944b68370194a50[.]link:6556/k",
                    "hxxp://60[.]189[.]111[.]145:37976/bin[.]sh"
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
                    "1[.]180[.]190[.]250",
                    "1[.]181[.]200[.]22"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1678,
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
                "count": 1314,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"178[.]128[.]80[.]204:8085\"",
                    " \"169[.]58[.]82[.]229:21\"",
                    " \"169[.]58[.]121[.]189:22\""
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
                "name": "Vidar",
                "count": 693,
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
                "name": " \"n/a",
                "count": 547,
                "types": [
                    "hash"
                ],
                "sampleIndicators": [
                    " \"a6c2a5383814d42e4e8fe5194093a903b26720a9f1cbbdc7858702f3c913750a",
                    " \"cab88d241cae8ea133ae5d115fe4b5d6ebb257095802c3c32a61d81f6e8c5a76",
                    " \"c2bf14ac72156961d49aeaf44857aca592fd1cc5b32790266f5e097d1b58f79a"
                ]
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious IPs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": "SSH Attacks",
        "totalAttacksThisHour": 46405,
        "lastCalculated": "2026-08-12 22:36 IST"
    }
};
