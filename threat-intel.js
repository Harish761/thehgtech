// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-08-09T18:40:10.633734+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-08-09T18:40:10.366282+05:30",
    "lastUpdatedFormatted": "Aug 09, 2026 at 06:40 PM IST",
    "comparisonPeriod": "Aug 08 \u2013 Aug 09, 2026",
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
                "hxxps://www[.]roblox[.]com[.]bi/users/215129800049/profile",
                "hxxps://www[.]uphloll-xlugnm-io[.]godaddysites[.]com/",
                "hxxp://uphloll-xlugnm-io[.]godaddysites[.]com/",
                "hxxp://www[.]binance-register[.]blogspot[.]com/",
                "hxxp://hbkpt52lkww-xlbdwwur-2b7f3a-hbk44p[.]pages[.]dev/"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 689,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 689,
                "newInLastHour": 67,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"a1cdb3282a271e04416e9469996e165e590b7c8a7f81cea2b5f48fcc5e2f9e8e",
                " \"7e4884556618e3b17b54e687f3de1b32d19b95dbb2fecc5272a5801397ae9214",
                " \"2945fd14a9176b6d18e9bf072aa4a5bc89165e37d8f6fa4ad36246a1d81dc8c9",
                " \"b69f1a3e27a9a289275167b2dd8ead5ffb301c58917b2428319c44390f943fae",
                " \"f7a0fd41e0651ca37a99c1e9df3f02bb38a7d17d842a9c7f5a115d5994e1de9b"
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
                "1[.]15[.]14[.]29",
                "1[.]179[.]240[.]68",
                "1[.]183[.]161[.]31",
                "1[.]192[.]129[.]106",
                "1[.]192[.]179[.]82"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 4841,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 4841,
                "newInLastHour": 4841,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]0[.]164[.]165",
                "1[.]180[.]246[.]242",
                "1[.]197[.]102[.]62",
                "1[.]209[.]110[.]147",
                "1[.]214[.]214[.]114"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 15702,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 15702,
                "newInLastHour": 15702,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://36[.]48[.]41[.]248:36948/bin[.]sh",
                "hxxp://118[.]232[.]137[.]101:55129/bin[.]sh",
                "hxxp://175[.]167[.]254[.]183:35093/bin[.]sh",
                "hxxp://176[.]65[.]148[.]24:8081/lol",
                "hxxps://fkoqonr2vgbsw7qu[.]public[.]blob[.]vercel-storage[.]com/data[.]msi"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 4936,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 4936,
                "newInLastHour": 4518,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"36[.]140[.]162[.]173:12443\"",
                " \"124[.]222[.]104[.]163:8084\"",
                " \"169[.]58[.]82[.]229:3389\"",
                " \"139[.]196[.]111[.]118:111\"",
                " \"139[.]196[.]111[.]118:22\""
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
            "iocCount": 10354,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 10354,
                "newInLastHour": 0,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "0034d3f66acca402e4ae3d683e435f10d513006a",
                "1ab7aaf074b1e925322cd328b4d1343f46f4f91b",
                "b5b8bebd73d8e8aec88ccc17b1e27c34921667ae",
                "508ab3696a27249abc7ea437ee1b8bcb8a999d65",
                "02df529de5d2da5b01c0b557b02b289b060f344b"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 48549,
            "activeSources": 8,
            "criticalAlerts": 26620,
            "activeCampaigns": 253
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 16286,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "C2",
                "count": 10334,
                "trend": "stable",
                "percentage": 1
            },
            {
                "category": "Botnet",
                "count": 3546,
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
                "count": 15528,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://182[.]114[.]252[.]205:60751/i",
                    "hxxp://110[.]37[.]21[.]60:54714/i",
                    "hxxp://221[.]15[.]226[.]18:57698/bin[.]sh"
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
                    "1[.]179[.]240[.]68"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1683,
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
                "count": 1435,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "714c56e9e207d5c8e08e1ca28cd9ba85f079d061",
                    "6647f9e4a2e273d7b78ff02be7114b0e9e2a719f",
                    "67044f9079f804d4a6217093c679897fec1f90e2"
                ]
            },
            {
                "name": " \"win.cobalt_strike\"",
                "count": 1301,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"68[.]64[.]183[.]64:9088\"",
                    " \"45[.]207[.]211[.]207:22\"",
                    " \"45[.]207[.]211[.]207:8080\""
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
                    "ece1b6bdc8e62d35188aab274bdb0be28d84c43f",
                    "b14379b3743c37a26289499aca921c99998649f1",
                    "4c67471be88dd63db2466621fe9e2a2d848f5b79"
                ]
            },
            {
                "name": "Vidar",
                "count": 670,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "b5b8bebd73d8e8aec88ccc17b1e27c34921667ae",
                    "cfe6dcd7527099d525ffa8cec0bd1ab5020d47a7",
                    "a9ebd28ce7e4ac020e6d263e228b8547e1914bfa"
                ]
            },
            {
                "name": " \"js.clearfake\"",
                "count": 579,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"snuidm[.]shop-cognisurge[.]com\"",
                    " \"shop-cognisurge[.]com\"",
                    " \"syztfq[.]proznith[.]us\""
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
        "topAttackVector": "Malicious URLs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": "malware_download",
        "totalAttacksThisHour": 40433,
        "lastCalculated": "2026-08-09 18:40 IST"
    }
};
