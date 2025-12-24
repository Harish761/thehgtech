// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2025-12-24T22:06:55.240357+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2025-12-24T22:06:54.895626+05:30",
    "lastUpdatedFormatted": "Dec 24, 2025 at 10:06 PM IST",
    "comparisonPeriod": "Dec 23 \u2013 Dec 24, 2025",
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
            "iocCount": 1071,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 1071,
                "newInLastHour": 117,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"dd9dc4b7fcb588393bccc7f63f0807299424d8d3e156b2a49078240ad2856e80",
                " \"32bbec68256cc9ecfb9b1605b91ce72b956d0b962e2aec1721a3c581824331b0",
                " \"385649808c7f255088c11d2368d85880528d378ff855403aba22e823a64d3707",
                " \"3ea033f7332d9d31e74b7f68e860308af59e8eb1bdfe4f0c65bd45bfeb5f64b5",
                " \"ee23b89de36c94d5cb79d6b27d9e727906db79035862ed2618243c41b31ccc4b"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1471,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1471,
                "newInLastHour": 13,
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
                "1[.]10[.]219[.]232",
                "1[.]1[.]176[.]58",
                "1[.]15[.]149[.]209",
                "1[.]157[.]99[.]66",
                "1[.]171[.]34[.]122"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 5353,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 5353,
                "newInLastHour": 5353,
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
            "iocCount": 27173,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 27173,
                "newInLastHour": 27173,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://27[.]213[.]6[.]213:60053/i",
                "hxxps://pt6vy[.]knurlpocket[.]ru/lqbqfnu2",
                "hxxps://pt6vy[.]knurlpocket[.]ru/h1zuhv0b",
                "hxxp://110[.]37[.]76[.]189:55569/i",
                "hxxp://175[.]165[.]108[.]217:50611/i"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 811,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 811,
                "newInLastHour": 808,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"oq808[.]knurlpocket[.]ru\"",
                " \"82[.]114[.]2[.]139:22\"",
                " \"1zqf[.]knurlpocket[.]ru\"",
                " \"mortar[.]knurlpocket[.]ru\"",
                " \"shadow[.]knurlpocket[.]ru\""
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
            "iocCount": 8674,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 8674,
                "newInLastHour": 3,
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
            "totalIndicators": 54123,
            "activeSources": 8,
            "criticalAlerts": 36548,
            "activeCampaigns": 198
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 27893,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "C2",
                "count": 8655,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 394,
                "trend": "stable",
                "percentage": 4
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
                "count": 26861,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://91[.]92[.]243[.]68/Fantazy[.]i686",
                    "hxxp://91[.]92[.]243[.]68/Fantazy[.]arm4",
                    "hxxp://katana[.]chernobyl[.]network/Fantazy[.]mpsl"
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
                "count": 1461,
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
                "count": 1362,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "3a56a66eb43b679afa1edb58e0fddcadf74bb2a4",
                    "47800989ef4eda671b2a76a0cd9123ec7b0bc324",
                    "ae6ca91be0e1145adf2f7120ca3edec533d7573f"
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
                "name": " \"Mirai",
                "count": 445,
                "types": [
                    "hash"
                ],
                "sampleIndicators": [
                    " \"8aacc395068b21a801b1ed4c70c428480ba9ffbc23be2d2ef813c8c583944d45",
                    " \"bf3b3e8235a980a6f281b9998ed4c89d9f1b94cf693a0fb63de5f07f49923a3f",
                    " \"e63c0d54851287cebfa405aaa19bb30556dcddfe2d9cd57411cc9e68f56b9686"
                ]
            },
            {
                "name": " \"js.clearfake\"",
                "count": 375,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"arblyn[.]ar2ble0ffend[.]ru\"",
                    " \"durmal[.]0rav2uterus[.]ru\"",
                    " \"pelqen[.]0rav2uterus[.]ru\""
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
        "fastestRisingThreat": "malware_download",
        "totalAttacksThisHour": 48771,
        "lastCalculated": "2025-12-24 22:06 IST"
    }
};
