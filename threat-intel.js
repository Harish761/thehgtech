// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-07-25T11:56:29.735904+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-07-25T11:56:29.418634+05:30",
    "lastUpdatedFormatted": "Jul 25, 2026 at 11:56 AM IST",
    "comparisonPeriod": "Jul 24 \u2013 Jul 25, 2026",
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
                "hxxps://japan-autoverify[.]index-login05[.]aliengpt[.]cc/jF5mQ7xA6mD9wS0uR0aD7cE2dY1xP4xY7qZ1tJ8k/",
                "hxxps://japan-autoverify[.]index-login05[.]qdkb[.]cc/jF5mQ7xA6mD9wS0uR0aD7cE2dY1xP4xY7qZ1tJ8k/",
                "hxxps://sp4ct-harvurin-biz8-korel-madix[.]pages[.]dev/",
                "hxxps://www[.]roblox[.]et/users/5366341830/profile",
                "hxxp://mkrjb1dqtwil-qtzxv109nnx-5b2c9d-vzk58a[.]pages[.]dev/"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 727,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 727,
                "newInLastHour": 11,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"816cfc27b4b97cac7493d355ea0fb0f111d57db0fbf611b0aa8819e0ed9c0044",
                " \"fa0e083227a2394550d09405503eaf0ddf4501a7988b0d0612296bfe16ef949a",
                " \"2e9aae52a4d86d9006695046d6ec8ce67f6999c567a524c18d8922072284e72e",
                " \"89de93e69e898d5da92c572f472fc8d0b3b1162eb8d98d4790d2fd6ff849de5b",
                " \"e999d3463eb7f77dca85bc0e3be1a8ff30dc44aa75a8dea846f132fa57808c41"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1668,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1668,
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
                "1[.]10[.]131[.]224",
                "1[.]10[.]185[.]51",
                "1[.]15[.]173[.]241",
                "1[.]15[.]227[.]58",
                "1[.]183[.]161[.]88"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 4608,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 4608,
                "newInLastHour": 4608,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]0[.]164[.]165",
                "1[.]162[.]5[.]215",
                "1[.]162[.]62[.]76",
                "1[.]197[.]102[.]62",
                "1[.]204[.]202[.]162"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 14907,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 14907,
                "newInLastHour": 14907,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://222[.]140[.]182[.]83:51928/i",
                "hxxp://222[.]140[.]182[.]83:51928/bin[.]sh",
                "hxxp://45[.]177[.]32[.]104:48133/bin[.]sh",
                "hxxp://182[.]117[.]32[.]243:40434/i",
                "hxxp://125[.]45[.]48[.]19:38849/i"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 4297,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 4297,
                "newInLastHour": 3851,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"hawaiistateofmind[.]com\"",
                " \"onmekcsdnvzwzvkynlt[.]happydragonchinesebistro[.]com\"",
                " \"gpnsfzvzqphjpluvmsr[.]happydragonchinesebistro[.]com\"",
                " \"happydragonchinesebistro[.]com\"",
                " \"60[.]205[.]115[.]92:44321\""
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
            "iocCount": 10260,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 10260,
                "newInLastHour": 0,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "7b5604ee44715ba0b4e92c2281f30c5a3416ca41",
                "d08e16884011f6910fe8087a74dac507ff7d2a6a",
                "8f0de55e89d97b4f3581f77805955a2b719563b8",
                "d447d27a879fe80420dc54244870f3f7d25993bb",
                "472239fd43cdfe3b960245672b183c4be200ed7a"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 47286,
            "activeSources": 8,
            "criticalAlerts": 25897,
            "activeCampaigns": 253
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 15659,
                "trend": "stable",
                "percentage": -3
            },
            {
                "category": "C2",
                "count": 10238,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 3339,
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
                "name": "CINS Threat List",
                "count": 15000,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]10[.]131[.]224",
                    "1[.]10[.]185[.]51",
                    "1[.]12[.]65[.]23"
                ]
            },
            {
                "name": "malware_download",
                "count": 14888,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://182[.]114[.]193[.]12:34103/i",
                    "hxxp://182[.]114[.]193[.]12:34103/bin[.]sh",
                    "hxxp://39[.]79[.]8[.]145:34405/i"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1669,
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
                "count": 1433,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "67044f9079f804d4a6217093c679897fec1f90e2",
                    "c7ec4c2fa1678702ae684a069cf37a4eef16ef27",
                    "4e5b7b186ad51a93d4e1ba0e2b5ca006b62571be"
                ]
            },
            {
                "name": " \"win.cobalt_strike\"",
                "count": 1411,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"182[.]92[.]117[.]223:1234\"",
                    " \"216[.]250[.]255[.]1:9000\"",
                    " \"209[.]200[.]246[.]194:34586\""
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
                "count": 693,
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
                "count": 655,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "472239fd43cdfe3b960245672b183c4be200ed7a",
                    "73202d8d2ac9a9e04c2bdefa6ea8db2860d779a9",
                    "12b3a868314cd43aa8d304a7e529bbd498ee74ee"
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
                "name": "OffLoader",
                "count": 448,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "820cd09994b3e76f6e89926a4b94ec0ccacd888c",
                    "5dc598df9a1f9cf893ce86b54f8be517475d1ff9",
                    "50cad154b9d5fdd19c3f67162257de03d3a6afcd"
                ]
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious IPs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": "SSH Attacks",
        "totalAttacksThisHour": 38682,
        "lastCalculated": "2026-07-25 11:56 IST"
    }
};
