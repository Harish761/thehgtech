// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-10-07T04:14:47.699949+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-10-07T04:14:47.306449+05:30",
    "lastUpdatedFormatted": "Oct 07, 2026 at 04:14 AM IST",
    "comparisonPeriod": "Oct 06 \u2013 Oct 07, 2026",
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
                "hxxps://com-ledger--io[.]pages[.]dev/",
                "hxxps://moltravi-zekun39471628[.]vercel[.]app/",
                "hxxp://uszoom01web[.]pages[.]dev/",
                "hxxps://mishthi-jaiswal[.]github[.]io/amazon-clone",
                "hxxp://www[.]mhrs-islemyap[.]vercel[.]app/"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 1525,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 1525,
                "newInLastHour": 25,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"243d7d7c79cccb577e5bc2eade7f2b6d32c502cbd39635f80476610035ae080c",
                " \"e74072e835179517a8591dab94f3e9375289318fe680840e61503b9c04336666",
                " \"5ec4c1ecaf67ba48a7f6ccebc065e587e7629654e455b15f67894240e63ac704",
                " \"0fad00ddec16b67f3131aa4efffbe32d78fca178407895920b7549667d7bbfbf",
                " \"64b9c6000e30cd09d2f81b418df20e1ff916fc0e34100df262830c8d15ba4cd8"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1640,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1640,
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
                "1[.]188[.]103[.]91",
                "1[.]193[.]56[.]152",
                "1[.]193[.]63[.]138",
                "1[.]203[.]186[.]149",
                "1[.]214[.]29[.]155"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 4412,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 4412,
                "newInLastHour": 4412,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]0[.]164[.]165",
                "1[.]117[.]24[.]10",
                "1[.]14[.]240[.]247",
                "1[.]15[.]221[.]192",
                "1[.]203[.]186[.]149"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 31202,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 31202,
                "newInLastHour": 31202,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://119[.]179[.]254[.]148:40760/bin[.]sh",
                "hxxp://196[.]189[.]35[.]172:37629/i",
                "hxxp://113[.]229[.]80[.]225:57356/i",
                "hxxp://196[.]191[.]233[.]24:43597/i",
                "hxxp://222[.]127[.]170[.]183:45331/bin[.]sh"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 9266,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 9266,
                "newInLastHour": 7444,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"www[.]waypointagency[.]net\"",
                " \"www[.]wonderfulecuador[.]org\"",
                " \"www[.]zakazkovestolarstvo[.]sk\"",
                " \"www[.]tsas-usa[.]org\"",
                " \"www[.]viniveri[.]net\""
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
            "iocCount": 10909,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 10909,
                "newInLastHour": 3,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "2c32691ea854fdd88474aec7283283c4e4fe9d10",
                "d6b483d29d98e74b22cf0275061f76fbb0574176",
                "0446b968d2664c7d195cb91e4938bf6b92d819da",
                "85eeedf7693129c522860142f2eb0c84f5fb355e",
                "6917195681c5f23ea6ebabed360e26ab7ff93a67"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 69760,
            "activeSources": 8,
            "criticalAlerts": 43600,
            "activeCampaigns": 279
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 32713,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "C2",
                "count": 10887,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 4229,
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
                "percentage": 98
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
                "count": 31139,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://105[.]225[.]6[.]143:58051/i",
                    "hxxp://115[.]96[.]229[.]130:52684/bin[.]sh",
                    "hxxp://115[.]48[.]142[.]169:56163/i"
                ]
            },
            {
                "name": "CINS Threat List",
                "count": 15000,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]188[.]103[.]91",
                    "1[.]193[.]63[.]138",
                    "1[.]203[.]186[.]149"
                ]
            },
            {
                "name": " \"unknown_loader\"",
                "count": 1811,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"zpconstructionca[.]com\"",
                    " \"zugenergie[.]de\"",
                    " \"zygrle[.]com\""
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1639,
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
                "count": 1459,
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
                "name": " \"elf.mirai\"",
                "count": 1368,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"139[.]162[.]5[.]254:3778\"",
                    " \"ece6f4df5671938681d7c4c417cea50868317ca77b61a4f171cbe635a9b454cd\"",
                    " \"176[.]65[.]139[.]36:5050\""
                ]
            },
            {
                "name": " \"win.cobalt_strike\"",
                "count": 1284,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"45[.]227[.]253[.]132:8080\"",
                    " \"45[.]227[.]253[.]132:443\"",
                    " \"45[.]227[.]253[.]132:80\""
                ]
            },
            {
                "name": "Vidar",
                "count": 821,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "7a9913813778b16a5bf57aeb7dea4c93340c79c0",
                    "6def2654b3b68fb89142113e6c5ad1b9e866134c",
                    "f8f56c66c440df5666400e34a532c04d6ca4e5b0"
                ]
            },
            {
                "name": " \"js.clearfake\"",
                "count": 776,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"www[.]portovecchio-corse[.]com\"",
                    " \"www[.]pradelli[.]biz\"",
                    " \"www[.]porcelli[.]eu\""
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
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious URLs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": "SSH Attacks",
        "totalAttacksThisHour": 58392,
        "lastCalculated": "2026-10-07 04:14 IST"
    }
};
