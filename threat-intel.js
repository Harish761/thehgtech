// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-10-01T11:10:36.835031+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-10-01T11:10:36.576555+05:30",
    "lastUpdatedFormatted": "Oct 01, 2026 at 11:10 AM IST",
    "comparisonPeriod": "Sep 30 \u2013 Oct 01, 2026",
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
                "hxxp://sendusdtupdated[.]vercel[.]app/",
                "hxxp://clone-facebook-five[.]vercel[.]app/",
                "hxxps://www[.]robiox[.]com[.]gr/games/139410450104051/Chat-with-AI-Emiko?privateServerLinkCode=45812450266095691462349652157130",
                "hxxp://www[.]sdafi-gudgo[.]com/",
                "hxxps://poodpted[.]com/"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 1265,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 1265,
                "newInLastHour": 69,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"4610ccf1547c2cb490b43b31bd9f6f79913e3339b4d6cb05db1a60eb04b2813f",
                " \"11b606a4c098c99a6fae1c6c56fa09590616fe503639308b5e773c83df85b94e",
                " \"fa6f34f439e2f40fcdccaa83a88e08fbe2e9285eba8c9e29228df3e3c16c1078",
                " \"1beabccc2954aceebc2e51ad36b0f704add1b50081526717a3535115a7da980e",
                " \"db11b9baed28a20871bf74a1126b1f202d974da51f865b2a6e3eccb1b0f9e4b6"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1691,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1691,
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
                "1[.]117[.]171[.]170",
                "1[.]12[.]229[.]231",
                "1[.]165[.]215[.]231",
                "1[.]192[.]129[.]106",
                "1[.]193[.]63[.]239"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 4828,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 4828,
                "newInLastHour": 4828,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]0[.]164[.]165",
                "1[.]117[.]72[.]220",
                "1[.]162[.]216[.]37",
                "1[.]214[.]214[.]114",
                "1[.]222[.]42[.]237"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 15342,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 15342,
                "newInLastHour": 15342,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://91[.]92[.]242[.]236/files-129312398/files/file_f374c4d0079d076f[.]exe",
                "hxxps://chrome[.]windows-browser[.]net/setup/downloads/ext1/ChromeSetup[.]exe",
                "hxxp://94[.]154[.]43[.]26:8080/bot-linux-arm64",
                "hxxp://94[.]154[.]43[.]26:8080/bot-darwin-amd64",
                "hxxps://github[.]com/dimdikoldu/salla/releases/download/31/31[.]zip"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 6812,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 6812,
                "newInLastHour": 6309,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"61942bb74fcf8d607f602c24c8075337108a639ba80b677d54ca7d4e105adbed\"",
                " \"eec6418e36b0f8b57f4a8f4ec7b7bcbeb8970cd6e24f2edc7f3c59c4cae677a7\"",
                " \"45[.]141[.]21[.]130:443\"",
                " \"89[.]44[.]80[.]7:58963\"",
                " \"entretiensol[.]com\""
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
            "iocCount": 10819,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 10819,
                "newInLastHour": 10,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "d1f8cdf29e82994d89dfda8a9dcb541be63e83b3",
                "c38737bf4c111f6be0d2f75ab9dc922cd8d5c7e3",
                "843de70648251c376b18fe872f7b5f4517a0e940",
                "5fe196813d0bf092a5d8f3ef550fe959a86ccf87",
                "bfe74bc4c5528d9ea8172159d9f77822251ff841"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 51500,
            "activeSources": 8,
            "criticalAlerts": 27757,
            "activeCampaigns": 259
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 16936,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "C2",
                "count": 10821,
                "trend": "stable",
                "percentage": 1
            },
            {
                "category": "Botnet",
                "count": 4872,
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
                "count": 15589,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://36[.]65[.]51[.]208:60234/bin[.]sh",
                    "hxxp://123[.]190[.]22[.]203:45590/i",
                    "hxxp://117[.]63[.]84[.]107:50448/bin[.]sh"
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
                    "1[.]181[.]89[.]199",
                    "1[.]24[.]16[.]10"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1691,
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
                "count": 1457,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "5fe196813d0bf092a5d8f3ef550fe959a86ccf87",
                    "205d49b6c7313e16e931e1b5873cc20be0dee85b",
                    "94c4ec66b6f57c29ac935890d7796decea67af37"
                ]
            },
            {
                "name": " \"win.cobalt_strike\"",
                "count": 1332,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"74[.]0[.]32[.]177:50050\"",
                    " \"74[.]0[.]32[.]177:443\"",
                    " \"c6ac51470c5be4b1ea6197b64cd99836\""
                ]
            },
            {
                "name": "Vidar",
                "count": 806,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "d1f8cdf29e82994d89dfda8a9dcb541be63e83b3",
                    "107432baee23d80d32a4d6fe5d6a43d011114239",
                    "86b5a5612e53988e28ed6604e8e9ff5476a46d0e"
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
                "count": 712,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "c234496c7b0abcd873bb6bb5a54288b6d340b6ff",
                    "7a215b5a8eaf9b132cf84f22d9ee2202c2a028bf",
                    "8410f92dc9367bda715790bb163d32111731527d"
                ]
            },
            {
                "name": " \"win.pure_rat\"",
                "count": 632,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"45[.]225[.]135[.]166:56003\"",
                    " \"202[.]146[.]222[.]156:56002\"",
                    " \"202[.]146[.]222[.]156:56001\""
                ]
            },
            {
                "name": " \"Mirai",
                "count": 597,
                "types": [
                    "hash"
                ],
                "sampleIndicators": [
                    " \"021fd8eaae8f604c93acf5091583bb3141e2afccf09a4b17d4a4a23bac100081",
                    " \"fa4bce734c9d206b56e9d851b29133f8df3c9350f85a24d400b833ee3dfdec62",
                    " \"431bffdebb8cd5dab38154867019746ca82f51a223ed6c9d849490e60acee869"
                ]
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious URLs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": " \"elf.mirai\"",
        "totalAttacksThisHour": 41864,
        "lastCalculated": "2026-10-01 11:10 IST"
    }
};
