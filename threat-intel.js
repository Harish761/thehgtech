// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2025-12-25T02:02:35.756226+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2025-12-25T02:02:35.415720+05:30",
    "lastUpdatedFormatted": "Dec 25, 2025 at 02:02 AM IST",
    "comparisonPeriod": "Dec 24 \u2013 Dec 25, 2025",
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
                "hxxps://wpner[.]cc/FdCIViDO/?regalos-de-navidad-amazon-2025[.]html",
                "hxxps://linkwa[.]cc/KutWeuLt/?weihnachtsgeschenke-amazon-2025[.]html",
                "hxxp://uk[.]parking-pcntl[.]vip/i/",
                "hxxps://uk[.]parking-pcnyf[.]vip/i",
                "hxxps://gchjnjhjhjhjjk[.]framer[.]website/"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 1114,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 1114,
                "newInLastHour": 34,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"ee673621c3dbacbd95cb472cac37748f699608332c56a63b08500e2d0caeb566",
                " \"1300be15611ba32b7f330cb31de833f46c5ca2f43ae9133c064ca32e49cfd8d5",
                " \"ba07e6993d17f59bd1cbbc1a132000b6635e6116e3490f79907cafd5d2325b50",
                " \"1f9cc9c0426f8211702aa488bb637f8d8f20eb0e65b37a016f264c620796f768",
                " \"f361ab20e4d04c726ca9d892079224c7a0a676811fbb9109ff1ccf76ae2b4a77"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1474,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1474,
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
                "2.56.192.0/22",
                "2.57.122.0/24"
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
                "1[.]1[.]176[.]58",
                "1[.]15[.]149[.]209",
                "1[.]157[.]99[.]66",
                "1[.]171[.]34[.]122",
                "1[.]176[.]134[.]251"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 5703,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 5703,
                "newInLastHour": 5703,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]13[.]79[.]144",
                "1[.]145[.]64[.]133",
                "1[.]145[.]66[.]82",
                "1[.]171[.]34[.]122",
                "1[.]180[.]246[.]242"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 27289,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 27289,
                "newInLastHour": 27289,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://61[.]52[.]111[.]161:38953/bin[.]sh",
                "hxxp://178[.]16[.]55[.]189/files/1333144962/oAaZo9r[.]exe",
                "hxxps://lv2[.]fl0wmortar[.]ru/alyynbqq",
                "hxxp://110[.]37[.]3[.]227:54486/i",
                "hxxps://jr33x[.]amber-flint[.]ru/ih1tw64h"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 795,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 795,
                "newInLastHour": 792,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"lv2[.]fl0wmortar[.]ru\"",
                " \"jr33x[.]amber-flint[.]ru\"",
                " \"nccf0[.]amber-flint[.]ru\"",
                " \"52[.]40[.]97[.]75:80\"",
                " \"52[.]40[.]97[.]75:443\""
            ]
        },
        "Feodo Tracker": {
            "description": "Botnet C2 server IPs from Feodo Tracker. Tracks Dridex, Emotet, TrickBot, QakBot, and BazarLoader.",
            "website": "https://feodotracker.abuse.ch/",
            "updateFrequency": "Hourly",
            "iocCount": 4,
            "iocDataUrl": "https://thehgtech.com/ioc-data/feodo-tracker.json",
            "stats": {
                "total": 4,
                "newInLastHour": 4,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "15[.]204[.]219[.]215",
                "162[.]243[.]103[.]246",
                "167[.]86[.]75[.]145",
                "51[.]210[.]96[.]48"
            ]
        },
        "SSL Blacklist": {
            "description": "Malicious SSL certificates used by botnet C2 servers. Helps detect encrypted malware communications.",
            "website": "https://sslbl.abuse.ch/",
            "updateFrequency": "Daily",
            "iocCount": 8680,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 8680,
                "newInLastHour": 1,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "55d4b831d65ff226d922a2811fdc63844de3132c",
                "1a5aa767c2675014c5c0a10b2d9f4c63844a84f8",
                "fdca450de4393b70b271dc71ada5208aef3bcf49",
                "57f2f129b4b92f8a5a9b673485771a148c5d6159",
                "064d9b53d5092f63001ccd5e9626d8c361717e62"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 54626,
            "activeSources": 8,
            "criticalAlerts": 37041,
            "activeCampaigns": 195
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 28384,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "C2",
                "count": 8657,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 378,
                "trend": "stable",
                "percentage": -1
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
                "percentage": 1
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
                "count": 27233,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://178[.]16[.]55[.]189/files/6624765280/RLYw9Xq[.]exe",
                    "hxxps://flow[.]knurl-pocket[.]ru/bcv63oyw",
                    "hxxp://42[.]233[.]107[.]56:45861/bin[.]sh"
                ]
            },
            {
                "name": "CINS Threat List",
                "count": 15000,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]10[.]219[.]232",
                    "1[.]1[.]176[.]58",
                    "1[.]15[.]149[.]209"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1474,
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
                "count": 1363,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "1a5aa767c2675014c5c0a10b2d9f4c63844a84f8",
                    "3a56a66eb43b679afa1edb58e0fddcadf74bb2a4",
                    "47800989ef4eda671b2a76a0cd9123ec7b0bc324"
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
                "count": 599,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "69affd6a91e38229fb655a62a52eb2b7af9fdfb4",
                    "be3b160ebe83bfc2e609bf912b36096e8dd2ffa3",
                    "243253f396aa30124e62cdd95a58cf8a3353fd88"
                ]
            },
            {
                "name": " \"Mirai",
                "count": 588,
                "types": [
                    "hash"
                ],
                "sampleIndicators": [
                    " \"c1521d4634f342814ccbc2abe4fa8634b43af06633d1733d61b6b856a01fa48d",
                    " \"0d3c54bb8ca47f14bb732160a1c140af8dce207cf1246ac5476387457db6f014",
                    " \"26f170f5c06638dd25b1a509fbb21e702c677ede6bf57be97e6ba6c1abc2e26f"
                ]
            },
            {
                "name": "LummaStealer",
                "count": 535,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "e2293f74d8d72bde90bb0424038259a9e3126e1b",
                    "69101b8edfa5d5e2ead4512a6d71c84748b0c012",
                    "1d28cc6dca52e95f859739c39a04d794671f66d9"
                ]
            },
            {
                "name": " \"js.clearfake\"",
                "count": 388,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"flow[.]knurl-pocket[.]ru\"",
                    " \"oul[.]v0xenridge[.]ru\"",
                    " \"ripple[.]v0xenridge[.]ru\""
                ]
            },
            {
                "name": "Rhadamanthys",
                "count": 355,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "f999c0da0e983becc1c935444c5e609be26b0bcf",
                    "4101579ae950c954fc1096adf43bdefcf0364cfd",
                    "0c3ee8188ce35b6bb11d5b12a0e1e28310188b4e"
                ]
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious URLs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": "SSH Attacks",
        "totalAttacksThisHour": 49123,
        "lastCalculated": "2025-12-25 02:02 IST"
    }
};
