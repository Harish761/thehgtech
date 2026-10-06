// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-10-06T23:47:46.994452+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-10-06T23:47:46.521603+05:30",
    "lastUpdatedFormatted": "Oct 06, 2026 at 11:47 PM IST",
    "comparisonPeriod": "Oct 05 \u2013 Oct 06, 2026",
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
            "iocCount": 1548,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 1548,
                "newInLastHour": 212,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"b4991411975fbe9a19516114f5ad0c3dd897d3f998cf741db4661a09ba624cc1",
                " \"ba8ea35fb544e00be375e3ff080e5ed10af088c27f7cf12ee283e5351d740f2e",
                " \"d14e45479e964178f165e330954120cf0e3c26714af9a4339ccd41aa017a4c83",
                " \"bef45f3b51f4d42e2f0d5c4b44946d11e002f2b589be2fdf3e5ed2d0aad68ef3",
                " \"90438e02b7f3d87ba0d832308efe5f20d895713d52f614fd98e7fc3eb643b3b9"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1639,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1639,
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
                "1[.]203[.]186[.]149",
                "1[.]214[.]29[.]155",
                "1[.]215[.]138[.]43"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 4229,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 4229,
                "newInLastHour": 4229,
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
            "iocCount": 31139,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 31139,
                "newInLastHour": 31139,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://105[.]225[.]6[.]143:58051/i",
                "hxxp://115[.]96[.]229[.]130:52684/bin[.]sh",
                "hxxp://115[.]48[.]142[.]169:56163/i",
                "hxxp://222[.]246[.]12[.]105:60522/i",
                "hxxp://61[.]137[.]150[.]107:59822/bin[.]sh"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 9220,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 9220,
                "newInLastHour": 7233,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"www[.]portovecchio-corse[.]com\"",
                " \"www[.]pradelli[.]biz\"",
                " \"www[.]porcelli[.]eu\"",
                " \"www[.]pharmakeys[.]com\"",
                " \"www[.]pixelmedya[.]com[.]tr\""
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
                "newInLastHour": 18,
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
            "totalIndicators": 68833,
            "activeSources": 8,
            "criticalAlerts": 43304,
            "activeCampaigns": 277
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 32432,
                "trend": "up",
                "percentage": 81
            },
            {
                "category": "C2",
                "count": 10872,
                "trend": "stable",
                "percentage": 3
            },
            {
                "category": "Botnet",
                "count": 4197,
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
            },
            {
                "name": "Government",
                "percentage": 0
            }
        ],
        "campaigns": [
            {
                "name": "malware_download",
                "count": 30951,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://219[.]156[.]51[.]237:58720/i",
                    "hxxp://61[.]52[.]47[.]76:37443/bin[.]sh",
                    "hxxp://115[.]49[.]211[.]221:48972/i"
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
                "name": " \"elf.mirai\"",
                "count": 1640,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"ece6f4df5671938681d7c4c417cea50868317ca77b61a4f171cbe635a9b454cd\"",
                    " \"176[.]65[.]139[.]36:5050\"",
                    " \"707fc73c91ebe386a4443125a3f8a43d2523910922a46e352ce33977e59b0f2b\""
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
                "name": " \"win.asyncrat\"",
                "count": 1379,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"46[.]246[.]14[.]5:5064\"",
                    " \"192[.]162[.]199[.]186:7707\"",
                    " \"128[.]90[.]112[.]16:8081\""
                ]
            },
            {
                "name": " \"win.cobalt_strike\"",
                "count": 1284,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"188[.]227[.]14[.]105:8080\"",
                    " \"186[.]241[.]115[.]168:12443\"",
                    " \"109[.]206[.]247[.]245:10881\""
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
                "name": " \"js.clearfake\"",
                "count": 733,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"packupremovals[.]co[.]uk\"",
                    " \"8m6jizpz[.]sensa138[.]pro\"",
                    " \"paranaibaagora[.]com[.]br\""
                ]
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious URLs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": " \"unknown_loader\"",
        "totalAttacksThisHour": 58136,
        "lastCalculated": "2026-10-06 23:47 IST"
    }
};
