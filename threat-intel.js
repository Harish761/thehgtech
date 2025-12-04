// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2025-12-04T10:08:58.419424+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2025-12-04T10:08:58.065049+05:30",
    "lastUpdatedFormatted": "Dec 04, 2025 at 10:08 AM IST",
    "comparisonPeriod": "Dec 03 \u2013 Dec 04, 2025",
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
                "hxxps://akfinance[.]nexgenmunicipal[.]cfd/?e=3mail@a[.]b[.]c0",
                "hxxps://www[.]robiox[.]com[.]py/users/336952148980/profile",
                "hxxps://entlesstechnology[.]flatheadequity[.]cyou/",
                "hxxps://booking[.]confirmationid-829162[.]com/3dsecure/262334988?checkin_eta=14&email=3mail@a[.]b[.]c0&firstname=SIMON&lastname=CULHANE&nostayer=on&phone=+447801940098&radio=on&request=",
                "hxxps://www[.]roblox[.]com[.]py/communities/492057354/Rupula-Official-Group"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 1016,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 1016,
                "newInLastHour": 23,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"a4cf05a4c1e0b90781c5de2621fec4e6678e59308cc8904444d12f2c7bf82de1",
                " \"11ce22db555bb6c13e37428716c9f2841b61d6ad3ab5b42632b2ad0d06d3f120",
                " \"9f6fbbca2eceba50607e2e5415b8713f540ada9b2a5ca2359dd19b79fd543abb",
                " \"0c2fc7a67744d1f8f7c1e65c74d33eca19ee18aba95ca6f60d66d967ffd2c738",
                " \"1ef864be6c65f0a3d1747a1a45bf413d7fb213861a68a27b1c7635c21a50a83c"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1458,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1458,
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
                "1[.]1[.]176[.]58",
                "1[.]116[.]180[.]98",
                "1[.]117[.]17[.]128",
                "1[.]14[.]3[.]240",
                "1[.]15[.]20[.]205"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 4974,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 4974,
                "newInLastHour": 4974,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]161[.]58[.]137",
                "1[.]194[.]200[.]251",
                "1[.]194[.]239[.]240",
                "1[.]214[.]197[.]163",
                "1[.]221[.]66[.]66"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 29225,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 29225,
                "newInLastHour": 29225,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://115[.]49[.]27[.]252:46462/i",
                "hxxp://123[.]188[.]75[.]83:36206/i",
                "hxxp://117[.]254[.]181[.]203:46404/bin[.]sh",
                "hxxp://218[.]91[.]153[.]60:49089/i",
                "hxxp://115[.]55[.]53[.]153:49411/i"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 1479,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 1479,
                "newInLastHour": 1060,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"xr[.]n2zemt0ler[.]ru\"",
                " \"mint[.]n2zemt0ler[.]ru\"",
                " \"6c5k[.]n2zemt0ler[.]ru\"",
                " \"168[.]245[.]201[.]111:3790\"",
                " \"168[.]245[.]200[.]204:3790\""
            ]
        },
        "Feodo Tracker": {
            "description": "Botnet C2 server IPs from Feodo Tracker. Tracks Dridex, Emotet, TrickBot, QakBot, and BazarLoader.",
            "website": "https://feodotracker.abuse.ch/",
            "updateFrequency": "Hourly",
            "iocCount": 4,
            "iocDataUrl": "https://thehgtech.com/ioc-data/feodo-tracker.json",
            "stats": {
                "total": 4,
                "newInLastHour": 4,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "15[.]204[.]219[.]215",
                "152[.]89[.]239[.]34",
                "162[.]243[.]103[.]246",
                "51[.]210[.]96[.]48"
            ]
        },
        "SSL Blacklist": {
            "description": "Malicious SSL certificates used by botnet C2 servers. Helps detect encrypted malware communications.",
            "website": "https://sslbl.abuse.ch/",
            "updateFrequency": "Daily",
            "iocCount": 8553,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 8553,
                "newInLastHour": 0,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "df26c9fe62f56d8f47d090c6bb1cd49653f16625",
                "c9863652b26032c9a713ab5312ed7f7cf5058c94",
                "a693a9ac68d18ce4b56a6110124c92d829dc27e5",
                "92f56544870efe0eaa75387847cde4077d3133b0",
                "e75c12cbc2d27475c2ca00bb39b66dab04e6d5c0"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 56995,
            "activeSources": 8,
            "criticalAlerts": 38748,
            "activeCampaigns": 239
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 30218,
                "trend": "stable",
                "percentage": -2
            },
            {
                "category": "C2",
                "count": 8530,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 537,
                "trend": "stable",
                "percentage": -2
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
                "percentage": 98
            },
            {
                "name": "Tech",
                "percentage": 1
            },
            {
                "name": "Finance",
                "percentage": 0
            }
        ],
        "campaigns": [
            {
                "name": "malware_download",
                "count": 29165,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://110[.]37[.]19[.]211:44752/i",
                    "hxxp://157[.]66[.]146[.]183:57145/i",
                    "hxxp://222[.]141[.]74[.]190:39705/i"
                ]
            },
            {
                "name": "CINS Threat List",
                "count": 15000,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]1[.]176[.]58",
                    "1[.]116[.]180[.]98",
                    "1[.]117[.]17[.]128"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1458,
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
                "count": 1353,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "b6510825c2c07b1bf03f200b2a91a4ffe5f4daed",
                    "6137c89b82c858af9f0101ebc77af7d262ce5b73",
                    "6f6c70df3fd9f7a5f984e44b63720d670ea7ee0f"
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
                "count": 593,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "5d5c32a9bf92da1d16d0558ed2ed9f19c821c8a9",
                    "31e9cb5ace32adba5c43bce257a6396f9fa0f21c",
                    "9432f61b3afd49f0c35b548b09db103221d9b8c5"
                ]
            },
            {
                "name": " \"Mirai",
                "count": 538,
                "types": [
                    "hash"
                ],
                "sampleIndicators": [
                    " \"e52ab23f959a3b6950d3ce6a8f0f3babe9db1589815a46a7d0542d197e6d4d38",
                    " \"131521c69afb2adb0bae1c737f067d45a844ad43b1872a8e6d77d34ee49fc2ac",
                    " \"dea53bce5b5a461576b3112383599869dcb47e35d99aac6c2f17eb57c9727c87"
                ]
            },
            {
                "name": "LummaStealer",
                "count": 533,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "1d28cc6dca52e95f859739c39a04d794671f66d9",
                    "7b7c48a7d10c11ab988801fec68db41f6935ecf4",
                    "b57cc0f34294222d350c45d62c735547c8882195"
                ]
            },
            {
                "name": "Rhadamanthys",
                "count": 355,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "f999c0da0e983becc1c935444c5e609be26b0bcf",
                    "4101579ae950c954fc1096adf43bdefcf0364cfd",
                    "0c3ee8188ce35b6bb11d5b12a0e1e28310188b4e"
                ]
            },
            {
                "name": " \"js.clearfake\"",
                "count": 349,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"sky[.]gend2rlu1l[.]ru\"",
                    " \"31[.]getp0ver7y[.]ru\"",
                    " \"owl[.]getp0ver7y[.]ru\""
                ]
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious URLs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": "malware_download",
        "totalAttacksThisHour": 50586,
        "lastCalculated": "2025-12-04 10:08 IST"
    }
};
