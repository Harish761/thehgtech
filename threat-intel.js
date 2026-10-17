// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-10-17T09:43:37.612429+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-10-17T09:43:37.194743+05:30",
    "lastUpdatedFormatted": "Oct 17, 2026 at 09:43 AM IST",
    "comparisonPeriod": "Oct 16 \u2013 Oct 17, 2026",
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
                "hxxps://wh-appqqe[.]com/index[.]html",
                "hxxp://uphold[.]design/",
                "hxxp://span1531[.]github[.]io/Spotify_Cloner",
                "hxxps://location-findmy[.]cloud/help?IyQ",
                "hxxp://location-findmy[.]cloud/IyQ"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 612,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 612,
                "newInLastHour": 78,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"d7234d9249e7cc454cc684c0e7b124a32f4df870e1cac86188d8eeaf36f6819c",
                " \"ff8a872e26abc29f664ea497c0c589c04ffeca3b036785f141149ee78044f661",
                " \"453505bf331a5646152b88692dd2e3d9e40f61b2ac97945f78c76f05ad5a57a0",
                " \"b7ce973bae02b7dba67176c33da4664da3c3d6ecd11d22067549e63505e5c3bd",
                " \"276efc07b5ed6ab633028ec992c5b765a05770a5ff56506f86240569efbfbc93"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1690,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1690,
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
                "1[.]14[.]149[.]30",
                "1[.]179[.]240[.]111",
                "1[.]189[.]248[.]116",
                "1[.]192[.]129[.]106",
                "1[.]192[.]216[.]192"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 4461,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 4461,
                "newInLastHour": 4461,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]117[.]72[.]220",
                "1[.]179[.]232[.]194",
                "1[.]180[.]246[.]242",
                "1[.]214[.]214[.]114",
                "1[.]222[.]42[.]237"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 33237,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 33237,
                "newInLastHour": 33237,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://117[.]223[.]140[.]135:57357/i",
                "hxxp://115[.]48[.]137[.]150:57068/i",
                "hxxp://123[.]189[.]19[.]115:32896/i",
                "hxxp://59[.]97[.]252[.]189:49364/bin[.]sh",
                "hxxp://115[.]48[.]160[.]216:44939/bin[.]sh"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 8390,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 8390,
                "newInLastHour": 7041,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"relatedissy[.]workers[.]dev\"",
                " \"154[.]8[.]209[.]118:9001\"",
                " \"3[.]110[.]189[.]136:80\"",
                " \"efdf8e6d182ba4644375fa7eaad615b0df41f4e872e1550466e76c8b2d816ddb\"",
                " \"69960c0c2f1efd9e9e228d3ec1b435cdea5ad6ac7b5bb0c82b890a551dfff5f9\""
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
            "iocCount": 10949,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 10949,
                "newInLastHour": 0,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "09545cca9c36c76f4982c4b648041a1606799b53",
                "d333c0b7e380afd2f156555b8110c00177b62e5d",
                "e6c0468f46efe40f3127d33641bfc3df8b2e5c7d",
                "4664c47d412c00bf067a325ffa9790db75efbe75",
                "b3c1e060a727e4db1cf6131f1eb6e9bcca2ffb5d"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 71044,
            "activeSources": 8,
            "criticalAlerts": 45442,
            "activeCampaigns": 283
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 34494,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "C2",
                "count": 10948,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 6216,
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
                "count": 33879,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://1[.]62[.]87[.]116:49993/bin[.]sh",
                    "hxxp://62[.]60[.]226[.]140/files/7782139129/hrASF9L[.]exe",
                    "hxxp://115[.]62[.]181[.]158:36551/i"
                ]
            },
            {
                "name": "CINS Threat List",
                "count": 15000,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]117[.]58[.]215",
                    "1[.]12[.]229[.]231",
                    "1[.]14[.]149[.]30"
                ]
            },
            {
                "name": " \"win.vidar\"",
                "count": 1772,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"ah[.]88bravo[.]com\"",
                    " \"hxxps://ah[.]88bravo[.]com/\"",
                    " \"hxxps://ah[.]88bravo[.]com\""
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1690,
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
                "count": 1277,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"47[.]236[.]130[.]154:9999\"",
                    " \"financiales-groupe[.]com\"",
                    " \"47[.]97[.]206[.]32:50050\""
                ]
            },
            {
                "name": "Vidar",
                "count": 839,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "09545cca9c36c76f4982c4b648041a1606799b53",
                    "d333c0b7e380afd2f156555b8110c00177b62e5d",
                    "c389945d4fc75250b291953e0abad0662dd9ce7d"
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
                "count": 719,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "650f90b14ecb5dc0160ea61d0620402c075c2f3d",
                    "64d01c8e86e0a3b51c270743879a1fe966af0db4",
                    "0f0a58e91f1c0f21ec7934e2f5e6b54187ed54be"
                ]
            },
            {
                "name": " \"win.pure_rat\"",
                "count": 645,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"38[.]127[.]61[.]130:56001\"",
                    " \"38[.]127[.]61[.]130:56002\"",
                    " \"38[.]127[.]61[.]130:56003\""
                ]
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious URLs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": " \"elf.mirai\"",
        "totalAttacksThisHour": 60122,
        "lastCalculated": "2026-10-17 09:43 IST"
    }
};
