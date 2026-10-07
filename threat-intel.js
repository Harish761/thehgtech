// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-10-07T05:15:13.711808+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-10-07T05:15:13.217410+05:30",
    "lastUpdatedFormatted": "Oct 07, 2026 at 05:15 AM IST",
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
            "iocCount": 1527,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 1527,
                "newInLastHour": 6,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"18cf4d150e2e3826951ef827095803a3ccef4e15c552e8f96340a025f73c501f",
                " \"c027df0ed143719add201430d47033f8cb33bfeb74f830c73f5fb01c4932a041",
                " \"cbcefa22c0ff043ff55e4e4ad1bea200b32d8fe420fe6d9c0d7a4f4dfcec1642",
                " \"fa2384bd1fe35beb69afa1289e4856b015a9f822c4c8fc5acfdafa82b47aa94c",
                " \"20d4672f40c452d53b41227f669c481703677e302954c52158515f7003d2fb27"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1583,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1583,
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
                "1[.]188[.]103[.]91",
                "1[.]193[.]63[.]138",
                "1[.]204[.]53[.]109",
                "1[.]214[.]29[.]155",
                "1[.]215[.]138[.]43"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 4457,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 4457,
                "newInLastHour": 4457,
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
            "iocCount": 31221,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 31221,
                "newInLastHour": 31221,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://185[.]89[.]156[.]101:35112/i",
                "hxxp://115[.]51[.]88[.]191:59352/i",
                "hxxp://123[.]129[.]56[.]38:56147/bin[.]sh",
                "hxxp://92[.]42[.]134[.]80:38229/i",
                "hxxp://105[.]225[.]13[.]115:42157/i"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 9200,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 9200,
                "newInLastHour": 7161,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"89[.]32[.]41[.]19:49376\"",
                " \"fypazene[.]workers[.]dev\"",
                " \"zijpestijl[.]nl\"",
                " \"dyhasi[.]workers[.]dev\"",
                " \"www[.]wood-fermetures[.]com\""
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
            "iocCount": 10679,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 10679,
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
            "totalIndicators": 69847,
            "activeSources": 8,
            "criticalAlerts": 43640,
            "activeCampaigns": 291
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 32753,
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
                "count": 4235,
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
                "count": 31202,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://119[.]179[.]254[.]148:40760/bin[.]sh",
                    "hxxp://196[.]189[.]35[.]172:37629/i",
                    "hxxp://113[.]229[.]80[.]225:57356/i"
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
                    "1[.]193[.]56[.]152",
                    "1[.]193[.]63[.]138"
                ]
            },
            {
                "name": " \"unknown_loader\"",
                "count": 1791,
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
                "count": 1640,
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
                "name": " \"win.cobalt_strike\"",
                "count": 1292,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"47[.]94[.]56[.]71:8080\"",
                    " \"47[.]94[.]56[.]71:80\"",
                    " \"47[.]94[.]56[.]71:443\""
                ]
            },
            {
                "name": " \"elf.mirai\"",
                "count": 1180,
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
                "name": "Vidar",
                "count": 820,
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
                "count": 774,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"www[.]waypointagency[.]net\"",
                    " \"www[.]wonderfulecuador[.]org\"",
                    " \"www[.]zakazkovestolarstvo[.]sk\""
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
        "totalAttacksThisHour": 58153,
        "lastCalculated": "2026-10-07 05:15 IST"
    }
};
