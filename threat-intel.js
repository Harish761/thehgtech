// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-10-11T04:58:10.359008+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-10-11T04:58:09.942319+05:30",
    "lastUpdatedFormatted": "Oct 11, 2026 at 04:58 AM IST",
    "comparisonPeriod": "Oct 10 \u2013 Oct 11, 2026",
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
                "hxxps://trezorio-xearn[.]gitbook[.]io/",
                "hxxps://f003[.]backblazeb2[.]com/file/tiackz/index[.]html",
                "hxxp://uf1k29[.]s[.]gy/NYl7df/",
                "hxxps://magadodia[.]site/produto/8677728",
                "hxxp://web-iostrt-trezr-cloud[.]framer[.]ai/"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 837,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 837,
                "newInLastHour": 20,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"2602c8ebac36cb9fb34f2c7db7ebad82fdd8fc55ef804399edb5c13a43d19937",
                " \"511e48979f24ea79abf1650411ce0ad2dc4830b53fc009dacdc966ac75f81639",
                " \"980abf36f7a59fb995746514840071af6463897f17de422d41c248de0dc03dda",
                " \"9d9291d7e83f348872d24cbc60a7d6ef1cdbdd8f8dd214b5624c43a9cfd51aad",
                " \"9ea1f8e83c99a88df3c938529d76d343cca7fbb37c3948f1560a2b39da2bd4ab"
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
                "1[.]0[.]215[.]19",
                "1[.]15[.]14[.]29",
                "1[.]193[.]58[.]33",
                "1[.]20[.]175[.]54",
                "1[.]215[.]138[.]43"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 4623,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 4623,
                "newInLastHour": 4623,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]0[.]164[.]165",
                "1[.]0[.]243[.]191",
                "1[.]117[.]72[.]220",
                "1[.]14[.]240[.]247",
                "1[.]162[.]245[.]71"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 33122,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 33122,
                "newInLastHour": 33122,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://219[.]157[.]39[.]4:49190/i",
                "hxxp://103[.]125[.]31[.]101:38195/i",
                "hxxp://182[.]126[.]90[.]240:41878/i",
                "hxxp://27[.]215[.]89[.]229:49916/bin[.]sh",
                "hxxp://182[.]126[.]90[.]240:41878/bin[.]sh"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 6888,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 6888,
                "newInLastHour": 6080,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"amberchronicles[.]store\"",
                " \"agentificial[.]com\"",
                " \"hgnqp55136[.]workers[.]dev\"",
                " \"baboa502[.]rtplive-miliarbet[.]online\"",
                " \"hxxp://31[.]77[.]144[.]86:49104/ddb64[.]dll\""
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
            "iocCount": 10920,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 10920,
                "newInLastHour": 0,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "3904919770fb59a5c74df86090853e3f19a09575",
                "3644a1d19d369a66e0970ee6e997736f1338727f",
                "9f71ec8a14e7a86f050b0484934ce8acc519fa91",
                "6d90086b95e788305c8127c70122f967f1cd2a48",
                "1f47c0e1175b385853ea70babda305baf0ac8709"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 68701,
            "activeSources": 8,
            "criticalAlerts": 44883,
            "activeCampaigns": 284
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 33962,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "C2",
                "count": 10921,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 4267,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Phishing",
                "count": 302,
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
                "count": 33095,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://146[.]66[.]249[.]137:55527/i",
                    "hxxp://115[.]57[.]60[.]50:55893/i",
                    "hxxp://115[.]55[.]129[.]129:55799/bin[.]sh"
                ]
            },
            {
                "name": "CINS Threat List",
                "count": 15000,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]0[.]215[.]19",
                    "1[.]192[.]129[.]106",
                    "1[.]193[.]58[.]33"
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
                "count": 1328,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"49[.]235[.]158[.]141:22\"",
                    " \"156[.]67[.]105[.]187:5698\"",
                    " \"156[.]67[.]105[.]187:11117\""
                ]
            },
            {
                "name": "Vidar",
                "count": 828,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "3644a1d19d369a66e0970ee6e997736f1338727f",
                    "dad953249b7dc6a1491183ca1f790b78038872c8",
                    "3013447f5f36ed0c97f878cd6106853088a49ef8"
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
                "count": 716,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "9f71ec8a14e7a86f050b0484934ce8acc519fa91",
                    "b292d5884328be709c0c79ffd7c82c3fe9846417",
                    "eabc77465bebeb1b8b4980dbaa185cfcf64b4f92"
                ]
            },
            {
                "name": " \"win.pure_rat\"",
                "count": 622,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"91[.]92[.]41[.]151:56003\"",
                    " \"82[.]26[.]66[.]167:443\"",
                    " \"45[.]192[.]211[.]91:56003\""
                ]
            },
            {
                "name": "LummaStealer",
                "count": 558,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "a45080c92a0b2314966517a4643ebf280e88a11b",
                    "501d817bb1780acfe5e47082c43472bda8068e4d",
                    "2beac2ee8b2fe7625d4de9f5381d37f200965f91"
                ]
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious URLs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": "SSH Attacks",
        "totalAttacksThisHour": 59150,
        "lastCalculated": "2026-10-11 04:58 IST"
    }
};
