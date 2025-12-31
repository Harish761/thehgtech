// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2025-12-31T07:53:03.223815+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2025-12-31T07:53:02.931465+05:30",
    "lastUpdatedFormatted": "Dec 31, 2025 at 07:53 AM IST",
    "comparisonPeriod": "Dec 30 \u2013 Dec 31, 2025",
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
                "hxxps://shortlink[.]st/rcU-uR3d",
                "hxxps://lnkwp[.]cc/FcVvTYMh/?regalos-de-navidad-amazon-2025[.]html",
                "hxxp://tt[.]itogitt[.]shop/",
                "hxxps://mxx9999[.]net/",
                "hxxps://b25vvv[.]com/fish/76"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 1571,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 1571,
                "newInLastHour": 249,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"cff4aac17cb1a17ace34404f841eebb020d3c34eb7e7cf0e08f98ee16987f06e",
                " \"0b7c2871f12ba1249dc3d532313843bc41462116ef1f6c8ac14cf2b0b9167304",
                " \"0d049051558df80b2e5e8d9653f199fbf481a4626d2f88bdae55d60c899b5915",
                " \"79cc442b325d250a069ff73c3ab050a6b671e6f28a93e44919f69739cd567f1d",
                " \"c498dcd7a6a5a62a112750ac147cc78d22532da675f0acaf23f596903830d712"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1466,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1466,
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
                "1[.]10[.]214[.]163",
                "1[.]15[.]118[.]23",
                "1[.]15[.]14[.]29",
                "1[.]157[.]99[.]66",
                "1[.]177[.]162[.]2"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 6701,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 6701,
                "newInLastHour": 6701,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]12[.]217[.]80",
                "1[.]12[.]64[.]80",
                "1[.]13[.]92[.]86",
                "1[.]145[.]101[.]122",
                "1[.]194[.]219[.]159"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 25022,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 25022,
                "newInLastHour": 25022,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://182[.]113[.]29[.]98:35970/bin[.]sh",
                "hxxp://110[.]39[.]233[.]41:47018/i",
                "hxxp://110[.]37[.]111[.]122:38949/i",
                "hxxp://110[.]37[.]97[.]128:57978/i",
                "hxxp://117[.]248[.]27[.]75:51064/bin[.]sh"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 1115,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 1115,
                "newInLastHour": 1004,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"jasm72mf[.]vagusbra[.]ru\"",
                " \"goe0vvjr[.]vagusbra[.]ru\"",
                " \"qzf73dvm[.]vagusbra[.]ru\"",
                " \"8bj1fusi[.]vagusbra[.]ru\"",
                " \"g9zj25k4[.]spikeslavage[.]ru\""
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
                "137[.]184[.]9[.]29",
                "15[.]204[.]219[.]215",
                "162[.]243[.]103[.]246",
                "167[.]86[.]75[.]145",
                "50[.]16[.]16[.]211"
            ]
        },
        "SSL Blacklist": {
            "description": "Malicious SSL certificates used by botnet C2 servers. Helps detect encrypted malware communications.",
            "website": "https://sslbl.abuse.ch/",
            "updateFrequency": "Daily",
            "iocCount": 8699,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 8699,
                "newInLastHour": 2,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "ad6e2e21ac68c72c8c702a51c4a6578277c15c0c",
                "3a474c04a2644f781bb3e4609b9f966791e104b5",
                "4b497ae5c83a1f18738d5eca13d3b85e56fffd92",
                "85f0fd986ad4a7955a5ea85764038f3bbb695cba",
                "c2433ae2f074166a3dacd6c8201c89d66a1e0cc1"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 53921,
            "activeSources": 8,
            "criticalAlerts": 36100,
            "activeCampaigns": 202
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 27418,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "C2",
                "count": 8682,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 495,
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
                "count": 25820,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxps://ukocpmma[.]offe7sawmi1[.]ru/?=check&&actmn=KRqtumBfBKTBnAOG",
                    "hxxps://ibn00ky3[.]offe7sawmi1[.]ru/?=check&&actmn=VduWajDfwWxGVGkc",
                    "hxxp://115[.]48[.]151[.]171:38760/i"
                ]
            },
            {
                "name": "CINS Threat List",
                "count": 15000,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]15[.]118[.]23",
                    "1[.]15[.]14[.]29",
                    "1[.]157[.]99[.]66"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1466,
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
                "name": " \"Mirai",
                "count": 743,
                "types": [
                    "hash"
                ],
                "sampleIndicators": [
                    " \"e84f3a7b0cb5e01a9368f7cc416f69a44d6790a0e416abd7dd622017ef75418c",
                    " \"d93adab1ae603b49f2d829d70f759073bee0720dfaa239cdc0fa277fab6a4f29",
                    " \"ba27e30d82e5411c821b368d7ae895b1adee3bffb1f9ed277ea79ce0e348627a"
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
                "count": 600,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "2be6327a2b03aed6322898941f4e6c7ca29de8e5",
                    "69affd6a91e38229fb655a62a52eb2b7af9fdfb4",
                    "be3b160ebe83bfc2e609bf912b36096e8dd2ffa3"
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
                "count": 380,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"ukocpmma[.]offe7sawmi1[.]ru\"",
                    " \"rs9b4h2k[.]offe7sawmi1[.]ru\"",
                    " \"ibn00ky3[.]offe7sawmi1[.]ru\""
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
        "totalAttacksThisHour": 48283,
        "lastCalculated": "2025-12-31 07:53 IST"
    }
};
