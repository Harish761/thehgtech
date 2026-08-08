// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-08-09T00:38:23.757189+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-08-09T00:38:23.351028+05:30",
    "lastUpdatedFormatted": "Aug 09, 2026 at 12:38 AM IST",
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
                "hxxp://facebookloginsignub[.]blogspot[.]com/",
                "hxxp://www[.]digitalplatforumu[.]com/",
                "hxxp://galyabet[.]app/",
                "hxxp://myaol-serv[.]cwrdl[.]workers[.]dev/",
                "hxxp://download-offical-trexrsuite[.]pages[.]dev/"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 937,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 937,
                "newInLastHour": 115,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"5fbac387b2baa24ac8073636e6ecb66be53a074c19a28da0508b32e37edfe6e0",
                " \"75e5f2230261d98282372fc448e602161efed867c8917a634879a6d9ae71a25e",
                " \"12087bc187ea1e677a07f587d47d9b544f9fd4e59cdcf314cc3647f57a1a4c34",
                " \"32a916a31fb701320af334687e9b92a3a1b54df172df50d4563321e46f2da6b3",
                " \"0552a5621e1a0f0d1fc6ba327454ad4542669110bd05059b0e50f5db69245780"
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
                "newInLastHour": 1,
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
                "1[.]178[.]120[.]81",
                "1[.]179[.]240[.]68",
                "1[.]183[.]194[.]182"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 4749,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 4749,
                "newInLastHour": 4749,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]0[.]164[.]165",
                "1[.]10[.]160[.]130",
                "1[.]197[.]102[.]62",
                "1[.]214[.]214[.]114",
                "1[.]220[.]146[.]226"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 15830,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 15830,
                "newInLastHour": 15830,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://182[.]119[.]196[.]19:60380/i",
                "hxxp://182[.]119[.]196[.]19:60380/bin[.]sh",
                "hxxp://60[.]23[.]194[.]16:48972/bin[.]sh",
                "hxxp://123[.]4[.]234[.]31:58798/bin[.]sh",
                "hxxp://115[.]56[.]169[.]46:45542/i"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 5194,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 5194,
                "newInLastHour": 4969,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"lsfccqf[.]en-superbrain[.]com\"",
                " \"en-superbrain[.]com\"",
                " \"rcslfw[.]eng-usa-synaptigen[.]com\"",
                " \"eng-usa-synaptigen[.]com\"",
                " \"38[.]60[.]227[.]165:7443\""
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
                "newInLastHour": 13,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "b5b8bebd73d8e8aec88ccc17b1e27c34921667ae",
                "508ab3696a27249abc7ea437ee1b8bcb8a999d65",
                "02df529de5d2da5b01c0b557b02b289b060f344b",
                "26d708c6ce4554e9fed0ae35556501faf8d0b01c",
                "3b0855807c94981dca90ba6eb15e94087c91fb52"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 48796,
            "activeSources": 8,
            "criticalAlerts": 26917,
            "activeCampaigns": 242
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 16598,
                "trend": "stable",
                "percentage": 3
            },
            {
                "category": "C2",
                "count": 10319,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 3488,
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
                "count": 15701,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://125[.]41[.]9[.]22:56917/bin[.]sh",
                    "hxxp://123[.]11[.]12[.]92:36844/bin[.]sh",
                    "hxxp://60[.]17[.]89[.]214:45559/i"
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
                    "1[.]12[.]229[.]231",
                    "1[.]159[.]48[.]69"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1682,
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
                "count": 1434,
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
                "count": 1306,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"45[.]207[.]211[.]207:80\"",
                    " \"124[.]222[.]145[.]172:22\"",
                    " \"111[.]228[.]62[.]67:8888\""
                ]
            },
            {
                "name": " \"js.clearfake\"",
                "count": 755,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"bitsjq[.]eng--usa-sugarmute[.]com\"",
                    " \"eng--usa-sugarmute[.]com\"",
                    " \"engusa-sugarmute[.]com\""
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
                "count": 668,
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
        "topAttackVector": "Malicious URLs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": "malware_download",
        "totalAttacksThisHour": 40982,
        "lastCalculated": "2026-08-09 00:38 IST"
    }
};
