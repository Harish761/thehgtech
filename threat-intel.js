// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-10-05T22:37:18.751694+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-10-05T22:37:18.404365+05:30",
    "lastUpdatedFormatted": "Oct 05, 2026 at 10:37 PM IST",
    "comparisonPeriod": "Oct 04 \u2013 Oct 05, 2026",
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
                "hxxp://dune-wave[.]pages[.]dev/",
                "hxxps://135461223[.]site/1990/27707926089121906-30390110286315/760405/x",
                "hxxps://135461223[.]site/1990/27707926089121906-30390110286315/760405",
                "hxxps://wetransfer-smoky[.]vercel[.]app/#mirensys@f91b7a73195f98d78e426e2bef4f4056457a[.]net",
                "hxxps://neu[.]planen[.]95-179-167-177[.]cpanel[.]site/de/update[.]php"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 1163,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 1163,
                "newInLastHour": 389,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"35afaa50f989d629aa5079bc4909d202806b0a35f570379d9fb3ae9f07039b55",
                " \"5381889f657250a50a62c8a629ee825ad3249a1ecac97454bbf9f0f0f30e7d6f",
                " \"374c1bcedd9eb8d9e537dd47759685e5d9db21c0aa9b943592cd95aadbd18248",
                " \"61cdb398e6cef582514436fdc1e3b02dc1d1bef1544d6c129fa10fc3e23702ee",
                " \"95a26fb357a295cf410c5acf03e044fd51996de32489a53daf066f5f8cf2cd37"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1638,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1638,
                "newInLastHour": 77,
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
                "1[.]15[.]11[.]89",
                "1[.]15[.]14[.]29",
                "1[.]192[.]129[.]106",
                "1[.]204[.]53[.]109",
                "1[.]214[.]29[.]155"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 2077,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 2077,
                "newInLastHour": 2077,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]0[.]164[.]165",
                "1[.]203[.]186[.]149",
                "1[.]214[.]214[.]114",
                "1[.]234[.]28[.]15",
                "1[.]238[.]106[.]229"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 16878,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 16878,
                "newInLastHour": 16878,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://64[.]89[.]161[.]65/sostener[.]vbs",
                "hxxps://64[.]89[.]161[.]65/proceso[.]vbs",
                "hxxps://64[.]89[.]161[.]65/sostener1[.]vbs",
                "hxxps://64[.]89[.]161[.]65/sostener[.]vbs",
                "hxxp://64[.]89[.]161[.]65/svchost[.]vbs"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 8510,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 8510,
                "newInLastHour": 6769,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"aonetruss[.]com[.]au\"",
                " \"amsrealtors[.]com[.]au\"",
                " \"lolibili[.]workers[.]dev\"",
                " \"zesukodu[.]workers[.]dev\"",
                " \"feeb166804622230cef1cf32abb6063d6b49b03f64a6cf27d5b4c5862a300ac4\""
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
            "iocCount": 10878,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 10878,
                "newInLastHour": 106,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "6def2654b3b68fb89142113e6c5ad1b9e866134c",
                "920de17c5bfce79df2950dacfb6a1f473e918edc",
                "184e5ede55f2eaf584182989d8a41411b6d34ae0",
                "77c620cd80ac90a263808350b4133b607d973373",
                "4e01833ef19ddbe7747012a4b08e54601bc318ae"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 55191,
            "activeSources": 8,
            "criticalAlerts": 28143,
            "activeCampaigns": 268
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 17369,
                "trend": "stable",
                "percentage": -1
            },
            {
                "category": "C2",
                "count": 10774,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 4187,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Phishing",
                "count": 301,
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
                "count": 16373,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://59[.]180[.]158[.]18:57700/bin[.]sh",
                    "hxxp://120[.]84[.]212[.]119:45721/i",
                    "hxxp://106[.]58[.]126[.]44:36106/i"
                ]
            },
            {
                "name": "CINS Threat List",
                "count": 15000,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]12[.]229[.]231",
                    "1[.]14[.]149[.]30",
                    "1[.]15[.]11[.]89"
                ]
            },
            {
                "name": " \"unknown_loader\"",
                "count": 2618,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"hxxps://rpg-translator-ea-guide[.]pages[.]dev/downloads/RPGTranslatorCompatibilityChecker-v0[.]1-Windows-x64[.]exe\"",
                    " \"call-united[.]com\"",
                    " \"cvpro4u[.]com\""
                ]
            },
            {
                "name": " \"elf.mirai\"",
                "count": 1906,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"70d911746eed11854ee20db2103a7fd453a7ec5e3124163b2e32eb03d3165b76\"",
                    " \"e7aeac7b5834cc74cc104dfb928a328c8182c0dd24d02ba43d2b831e9f63ec72\"",
                    " \"6ebed3c1e81d673fa1dfce726b7adfffcce35de329ffdf4f666f86c5ff61c7d1\""
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1614,
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
                "count": 1455,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "58b3990b07e9caaa2c504a5b9759d14eefcbc5e5",
                    "64c5f719aa0111be2ac04d785a8904b5baa22a88",
                    "5fe196813d0bf092a5d8f3ef550fe959a86ccf87"
                ]
            },
            {
                "name": " \"win.cobalt_strike\"",
                "count": 1318,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"101[.]34[.]208[.]175:18317\"",
                    " \"2ff26540ebb9100dae76a2ae040108ba9338113c\"",
                    " \"e4a34372eab0832d0682fa986a8e0b97\""
                ]
            },
            {
                "name": "Vidar",
                "count": 783,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "80a11d8978c116516b3e6e0dabdcd381bc3511a1",
                    "30cc75ff5ee466fba938458513d89d8270a5b882",
                    "60fd7f114b0a4015ad7f634223491259bc50ab7d"
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
                "count": 708,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "b292d5884328be709c0c79ffd7c82c3fe9846417",
                    "eabc77465bebeb1b8b4980dbaa185cfcf64b4f92",
                    "4768d20d3072a30b168c650b11a9e4d3e1a0dc60"
                ]
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious URLs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": "SSH Attacks",
        "totalAttacksThisHour": 41601,
        "lastCalculated": "2026-10-05 22:37 IST"
    }
};
