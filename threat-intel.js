// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-08-18T18:32:41.752986+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-08-18T18:32:41.390258+05:30",
    "lastUpdatedFormatted": "Aug 18, 2026 at 06:32 PM IST",
    "comparisonPeriod": "Aug 17 \u2013 Aug 18, 2026",
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
                "hxxps://dravixa-gld-belquna-r9t8fw26[.]pages[.]dev/",
                "hxxps://www[.]submid-cotact136336[.]vercel[.]app/",
                "hxxp://xelzora-kxt-qelmavi-r5t2fc97[.]pages[.]dev/",
                "hxxps://roblox[.]com[.]ee/users/61018400/profile",
                "hxxps://phantom-eight-nu[.]vercel[.]app/"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 972,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 972,
                "newInLastHour": 68,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"6542a2348f6bc6b4e04629166bb5899f804269bd45786cb200a27ae8fd83f81e",
                " \"89e906327d8e85067e16f3eb077a4a891fd01773460363b235918035314703ea",
                " \"28403d16fcedbcc95b7608bb3921ecd48b1e9216e5d71be4961f9ee7d8c71153",
                " \"532015ceef91eff71878ee50e84efb8902d78bb5c34db25a241c5866784a840e",
                " \"0a97a720e22bd0ea1bb3f9534f552d05f3e12e04a03d3c72920469312dcdb18c"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1692,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1692,
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
                "1[.]12[.]229[.]231",
                "1[.]140[.]210[.]242",
                "1[.]165[.]27[.]71",
                "1[.]180[.]247[.]82",
                "1[.]183[.]161[.]214"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 4812,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 4812,
                "newInLastHour": 4812,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]14[.]64[.]225",
                "1[.]2[.]226[.]1",
                "1[.]20[.]150[.]200",
                "1[.]214[.]214[.]114",
                "1[.]220[.]233[.]171"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 16837,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 16837,
                "newInLastHour": 16837,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://61[.]53[.]133[.]115:54046/i",
                "hxxp://138[.]204[.]196[.]254:46255/bin[.]sh",
                "hxxp://83[.]228[.]109[.]209:34880/i",
                "hxxp://31[.]77[.]227[.]102/d/mini[.]mpsl",
                "hxxp://31[.]77[.]227[.]102/d/xd[.]arm4"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 7463,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 7463,
                "newInLastHour": 7322,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"hackuarium[.]net\"",
                " \"popkas[.]bond\"",
                " \"vineriadeimir[.]ch\"",
                " \"cleancit[.]ch\"",
                " \"hxxp://bravplo[.]click:7713/articles\""
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
            "iocCount": 10440,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 10440,
                "newInLastHour": 3,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "b00aa24dc7459e8a0a8f5fbb3d2a27bd646de1e3",
                "a52e17fe607d1e562e0cb67c6f2342e6b4dbf191",
                "8d6fdff168340e954aad4f0f924276cd5b6e31b2",
                "fa62c7ce7b7ec943d8853832560bc5a386aaf17e",
                "abe57abc8722c69494113060260ba340cd897744"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 51749,
            "activeSources": 8,
            "criticalAlerts": 28041,
            "activeCampaigns": 229
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 17614,
                "trend": "stable",
                "percentage": 1
            },
            {
                "category": "C2",
                "count": 10427,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 3955,
                "trend": "stable",
                "percentage": 2
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
                "name": "malware_download",
                "count": 16646,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://219[.]155[.]104[.]55:50766/bin[.]sh",
                    "hxxp://118[.]34[.]109[.]121:38226/bin[.]sh",
                    "hxxp://115[.]55[.]219[.]43:42748/i"
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
                    "1[.]140[.]210[.]242",
                    "1[.]165[.]27[.]71"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1692,
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
                "name": " \"unknown_loader\"",
                "count": 1688,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"ytcasinochamp[.]com\"",
                    " \"za-zen[.]nu\"",
                    " \"zavarovanje-osiguranje[.]eu\""
                ]
            },
            {
                "name": "AsyncRAT",
                "count": 1437,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "f50e245dc1e4a89d6cf5e07e31ae1392a3f9ad20",
                    "b5f071dd28b511f0b4b067507602a779feb4301f",
                    "714c56e9e207d5c8e08e1ca28cd9ba85f079d061"
                ]
            },
            {
                "name": " \"win.cobalt_strike\"",
                "count": 1331,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"38[.]76[.]183[.]197:10086\"",
                    " \"38[.]76[.]183[.]197:80\"",
                    " \"38[.]76[.]183[.]197:8080\""
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
                "count": 713,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "89bbec947a91917d4676037abb417ceb72770851",
                    "b26d3f583556acab11cbfa864f596c143b15f32d",
                    "fc5d9dddb01c263a67e7c485e04277afa82fbabf"
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
                "name": " \"js.clearfake\"",
                "count": 604,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"gigifilare[.]it\"",
                    " \"repdev[.]ch\"",
                    " \"carpet-sail[.]com\""
                ]
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious URLs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": " \"unknown\"",
        "totalAttacksThisHour": 44347,
        "lastCalculated": "2026-08-18 18:32 IST"
    }
};
