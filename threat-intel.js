// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-08-08T14:23:46.191491+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-08-08T14:23:45.945296+05:30",
    "lastUpdatedFormatted": "Aug 08, 2026 at 02:23 PM IST",
    "comparisonPeriod": "Aug 07 \u2013 Aug 08, 2026",
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
                "hxxp://webdisk[.]20-244-0-63[.]cprapid[.]com/",
                "hxxp://safe-ldge-r-live[.]pages[.]dev/",
                "hxxps://ipfs[.]io/ipfs/bafybeib65hqaeocurjfgaqozudsqxji7qc5cc2c2ivjl7rdkai52sonm4q",
                "hxxp://outlooksereguri365[.]hstn[.]me/",
                "hxxps://www[.]roblox[.]com[.]bn/users/889521457001/profile"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 934,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 934,
                "newInLastHour": 18,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"b3d0ee25f77aaa1d74f6325ada58ba6beda3d0c760a2290451dedd36790942d2",
                " \"1079cfc48fc839376c86836abef8f8d2756f79abc690025ad303e04ed68b37b5",
                " \"e615cc96f7eec986fe4c10b109739dfb9a4ceaa8d0df87ef03474cf46b71b19a",
                " \"7b1a2f6b022063f43c9aadb9334041074426d13992086bcd991404faf5748233",
                " \"839351cde72ac36b141031444b7e68bed741378c39c5134e8e27e9609823bd98"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1683,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1683,
                "newInLastHour": 78,
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
                "1[.]12[.]229[.]231",
                "1[.]15[.]14[.]29",
                "1[.]159[.]103[.]245",
                "1[.]159[.]48[.]69",
                "1[.]178[.]120[.]81"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 4775,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 4775,
                "newInLastHour": 4775,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]0[.]164[.]165",
                "1[.]10[.]160[.]130",
                "1[.]116[.]61[.]217",
                "1[.]214[.]214[.]114",
                "1[.]220[.]146[.]226"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 14729,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 14729,
                "newInLastHour": 14729,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://123[.]11[.]207[.]175:45931/i",
                "hxxp://221[.]15[.]204[.]212:38964/i",
                "hxxp://5[.]182[.]210[.]174/4a4b8b",
                "hxxp://5[.]182[.]210[.]174/0c3474",
                "hxxp://5[.]182[.]210[.]174/d77667"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 4948,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 4948,
                "newInLastHour": 4693,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"0ksjitt3[.]hanovereyephotography[.]com\"",
                " \"xoxnfbr[.]eng--tinnitrol[.]com\"",
                " \"eng--tinnitrol[.]com\"",
                " \"engtinnitrol[.]com\"",
                " \"hitpanels[.]com\""
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
            "iocCount": 10340,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 10340,
                "newInLastHour": 70,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "8bdf129211692888e48d0970e49a8559450974dc",
                "d7d3f678f9b63334375db11eecc81be2db4db6f0",
                "cede10451532b072c7017c49ef4fcd273301a826",
                "769a6310d3d9533c1b3e0ddee3c1b6ebbda60891",
                "e63b53c2c26b9bff8f20e018efe7c166ec3c4acd"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 47874,
            "activeSources": 8,
            "criticalAlerts": 25902,
            "activeCampaigns": 247
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 15653,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "C2",
                "count": 10249,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 3523,
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
            },
            {
                "name": "Government",
                "percentage": 0
            }
        ],
        "campaigns": [
            {
                "name": "CINS Threat List",
                "count": 15000,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]10[.]185[.]51",
                    "1[.]15[.]14[.]29",
                    "1[.]159[.]103[.]245"
                ]
            },
            {
                "name": "malware_download",
                "count": 14607,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://182[.]113[.]2[.]97:36675/bin[.]sh",
                    "hxxp://182[.]116[.]115[.]143:48808/i",
                    "hxxp://178[.]16[.]54[.]109/molakc"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1605,
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
                "count": 1432,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "6647f9e4a2e273d7b78ff02be7114b0e9e2a719f",
                    "67044f9079f804d4a6217093c679897fec1f90e2",
                    "c7ec4c2fa1678702ae684a069cf37a4eef16ef27"
                ]
            },
            {
                "name": " \"win.cobalt_strike\"",
                "count": 1335,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"43[.]139[.]87[.]203:22\"",
                    " \"47[.]120[.]20[.]86:22\"",
                    " \"47[.]120[.]20[.]86:8000\""
                ]
            },
            {
                "name": " \"js.clearfake\"",
                "count": 830,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"gsbjjy[.]eng--nervearmor[.]com\"",
                    " \"hrwzfeq[.]eng-sleep-lean[.]us\"",
                    " \"eng-sleep-lean[.]us\""
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
                "count": 690,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "ece1b6bdc8e62d35188aab274bdb0be28d84c43f",
                    "b14379b3743c37a26289499aca921c99998649f1",
                    "4c67471be88dd63db2466621fe9e2a2d848f5b79"
                ]
            },
            {
                "name": "Vidar",
                "count": 645,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "a9ebd28ce7e4ac020e6d263e228b8547e1914bfa",
                    "30ae51f106a573be769968e15c0a6f56a2878a16",
                    "97dd1d6a2bc5769af6e0a7999bfaf2aeaf5452a1"
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
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious IPs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": "malware_download",
        "totalAttacksThisHour": 39668,
        "lastCalculated": "2026-08-08 14:23 IST"
    }
};
