// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-07-21T12:07:56.362008+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-07-21T12:07:56.005299+05:30",
    "lastUpdatedFormatted": "Jul 21, 2026 at 12:07 PM IST",
    "comparisonPeriod": "Jul 20 \u2013 Jul 21, 2026",
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
                "hxxps://lnk[.]ink/robIox[.]com[.]users-35142531842[.]profile",
                "hxxps://www[.]roblox[.]com[.]mu/users/6714926237/profile",
                "hxxp://www[.]18551[.]xyz/",
                "hxxps://telvora-gld-belxemi-a4v9dw72[.]pages[.]dev/send_appeal_request",
                "hxxps://resptectadpein[.]com//Last/log/web/cd[.]php"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 852,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 852,
                "newInLastHour": 87,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"053400e282b6ac5abb1dc9eeb320c3ede641529e429cfc363c8133b0739420f7",
                " \"8d50245db0afa4e25ac78646c32590170f796056bb4eec7dc7e4ad9989c0ab59",
                " \"26570ef2071d23c7f231cbbb1085aabca9a935d6413f6aa6b6fa0872aa05571f",
                " \"b86a145adcb90395127d64256074b4ec26c15a5b22f5a1fd4378763d915eb4f2",
                " \"c5fce7e926ebe9765b7dc39c2e7904d4ad04ad79fb5837af5d053cc9003bb298"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1663,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1663,
                "newInLastHour": 3,
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
                "1[.]159[.]90[.]31",
                "1[.]183[.]161[.]88",
                "1[.]190[.]44[.]125",
                "1[.]191[.]147[.]34",
                "1[.]192[.]46[.]208"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 5336,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 5336,
                "newInLastHour": 5336,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]0[.]164[.]165",
                "1[.]116[.]61[.]217",
                "1[.]15[.]227[.]58",
                "1[.]162[.]245[.]230",
                "1[.]162[.]62[.]76"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 20236,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 20236,
                "newInLastHour": 20236,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://192[.]255[.]195[.]158/13/img_050556[.]png",
                "hxxps://nameless-scene-7204[.]uploadeeeesclientess[.]workers[.]dev/FTM0-40PO-AO28-G98E/img_b0utd5[.]png",
                "hxxp://61[.]53[.]98[.]213:33122/i",
                "hxxp://110[.]37[.]97[.]32:58512/i",
                "hxxp://110[.]37[.]97[.]32:58512/bin[.]sh"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 4217,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 4217,
                "newInLastHour": 4097,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"newcoservicemower[.]com\"",
                " \"tourtrade[.]shop\"",
                " \"5[.]101[.]84[.]80:8996\"",
                " \"188[.]132[.]242[.]67:7329\"",
                " \"anyqwp6fce[.]localto[.]net\""
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
            "iocCount": 10207,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 10207,
                "newInLastHour": 47,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "632061b26a93455e9c4f0ac413deae710c920216",
                "991bf55fc47c006b3eedf6b348296f9f7aba20eb",
                "9c124d9fc4b10c04767b554f02b92d6591175e8a",
                "4e5b7b186ad51a93d4e1ba0e2b5ca006b62571be",
                "48381652ae3e124b686c25282dac3858a5f2de3e"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 52102,
            "activeSources": 8,
            "criticalAlerts": 31111,
            "activeCampaigns": 229
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 20943,
                "trend": "stable",
                "percentage": -1
            },
            {
                "category": "C2",
                "count": 10168,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 3428,
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
                "count": 20136,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://27[.]215[.]214[.]103:45500/i",
                    "hxxp://182[.]121[.]69[.]80:48513/i",
                    "hxxp://196[.]191[.]137[.]44:53180/bin[.]sh"
                ]
            },
            {
                "name": "CINS Threat List",
                "count": 15000,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]159[.]34[.]223",
                    "1[.]159[.]90[.]31",
                    "1[.]165[.]0[.]157"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1663,
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
                "name": " \"win.cobalt_strike\"",
                "count": 1465,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"8[.]137[.]149[.]67:3443\"",
                    " \"8[.]137[.]149[.]67:8000\"",
                    " \"47[.]94[.]162[.]43:22\""
                ]
            },
            {
                "name": "AsyncRAT",
                "count": 1430,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "c31650da58712771ad83fd5c6cef97905a255cc5",
                    "e86cb30b97c8af13b305fa5cdc7357e23f633447",
                    "c4e9396a3a0543fa79cc0a8f23395f90a15e03b0"
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
                "count": 691,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "4c67471be88dd63db2466621fe9e2a2d848f5b79",
                    "9cc76149b07c25893611bc8339406a6312ab2053",
                    "1b64957d1d878c0c0b0b346849db2e64d487aa17"
                ]
            },
            {
                "name": "Vidar",
                "count": 635,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "4264b1c47eac055ce604ef3509d23cd7e3bd584b",
                    "58a5ded84c93621d72ecc14b386e0e6bea5d103a",
                    "1dedacf3710f30c15b9e73c9d719a969eec755e5"
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
                "name": "ConnectWise",
                "count": 435,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "44319377ae94a257a0c081e5fdcb97d1d93b127d",
                    "287c688acd02bd779c6315eacc15e3d25145b616",
                    "a0cd40a589573d515fb3d7c30d6de0d45d40a4fa"
                ]
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious URLs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": "malware_download",
        "totalAttacksThisHour": 45111,
        "lastCalculated": "2026-07-21 12:07 IST"
    }
};
