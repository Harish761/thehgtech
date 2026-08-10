// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-08-10T22:33:19.396208+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-08-10T22:33:19.024607+05:30",
    "lastUpdatedFormatted": "Aug 10, 2026 at 10:33 PM IST",
    "comparisonPeriod": "Aug 09 \u2013 Aug 10, 2026",
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
                "hxxp://x39p[.]top/",
                "hxxp://www[.]netflix-clone-opal-iota[.]vercel[.]app/",
                "hxxps://mansithakur204[.]github[.]io/spotify-inspired-music-player",
                "hxxp://www[.]site-jn6w55wca[.]godaddysites[.]com/",
                "hxxp://www[.]instagramfollowersfake[.]blogspot[.]com/"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 1490,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 1490,
                "newInLastHour": 708,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"e0108ae47d249c7764fc6d177cccf08bce5f8608f20ad79745b5ef292debb44d",
                " \"65dbe21962f1ecd850b8b0cabcc0f1a420d92dbf006ba94fdeda3e07472230bd",
                " \"244998b9eb1d4c64ae37c76010651b0e63307ac8a9ac454884aed7b3d3582227",
                " \"ee5a675efa018c0679a321c2de42fd26d7440f5cd904f772c84e0f744f459978",
                " \"b11c0cdc9c16683613cafa148e7bc400990bf9a198637780bf675cf109801822"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1675,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1675,
                "newInLastHour": 20,
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
                "1[.]12[.]229[.]231",
                "1[.]159[.]114[.]217",
                "1[.]177[.]63[.]20",
                "1[.]178[.]120[.]192",
                "1[.]183[.]161[.]31"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 4977,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 4977,
                "newInLastHour": 4977,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]0[.]164[.]165",
                "1[.]14[.]106[.]163",
                "1[.]14[.]77[.]186",
                "1[.]169[.]210[.]90",
                "1[.]180[.]246[.]242"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 16318,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 16318,
                "newInLastHour": 16318,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://115[.]50[.]98[.]44:53110/bin[.]sh",
                "hxxp://182[.]113[.]203[.]98:49336/bin[.]sh",
                "hxxp://182[.]119[.]229[.]251:51013/i",
                "hxxp://113[.]239[.]96[.]147:46916/i",
                "hxxp://221[.]15[.]192[.]179:36837/bin[.]sh"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 4256,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 4256,
                "newInLastHour": 3977,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"ynbfqi[.]enus-synaptigen[.]com\"",
                " \"enus-synaptigen[.]com\"",
                " \"5[.]223[.]80[.]130:318\"",
                " \"bypraqr[.]get--ignitra[.]com\"",
                " \"get--ignitra[.]com\""
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
            "iocCount": 10316,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 10316,
                "newInLastHour": 38,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "847e013a4d337babfdf203eba82d2d32717b9d2d",
                "13f40ae70a0fe1ae9e727ad329583635cf8090be",
                "263a7098595232fb1c9536d18a903858431212c0",
                "b9e2100c0408138edfedb92704bfc57ef9fb59f0",
                "32a8651489a0a5fb3fb0679514bed1e86c0c576c"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 48655,
            "activeSources": 8,
            "criticalAlerts": 27485,
            "activeCampaigns": 242
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 17172,
                "trend": "stable",
                "percentage": 1
            },
            {
                "category": "C2",
                "count": 10313,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 3544,
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
            },
            {
                "name": "Government",
                "percentage": 0
            }
        ],
        "campaigns": [
            {
                "name": "malware_download",
                "count": 16263,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://110[.]36[.]22[.]249:50192/i",
                    "hxxp://39[.]79[.]249[.]142:34161/bin[.]sh",
                    "hxxp://42[.]231[.]88[.]100:39090/bin[.]sh"
                ]
            },
            {
                "name": "CINS Threat List",
                "count": 15000,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]178[.]120[.]192",
                    "1[.]178[.]124[.]228",
                    "1[.]183[.]161[.]31"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1666,
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
                "count": 1435,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "714c56e9e207d5c8e08e1ca28cd9ba85f079d061",
                    "6647f9e4a2e273d7b78ff02be7114b0e9e2a719f",
                    "67044f9079f804d4a6217093c679897fec1f90e2"
                ]
            },
            {
                "name": " \"win.cobalt_strike\"",
                "count": 1287,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"101[.]35[.]129[.]174:8080\"",
                    " \"101[.]35[.]129[.]174:443\"",
                    " \"101[.]35[.]129[.]174:80\""
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
                "count": 694,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "b364395fee8c2e4c9eaf9a2531f6f7ac7bf8e4ae",
                    "ece1b6bdc8e62d35188aab274bdb0be28d84c43f",
                    "b14379b3743c37a26289499aca921c99998649f1"
                ]
            },
            {
                "name": "Vidar",
                "count": 657,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "3e3c44169f96771a93af70cef73772afc6530f39",
                    "5b0334a2bc768aa1fef1eb0d10bf52edb071bf1c",
                    "b5b8bebd73d8e8aec88ccc17b1e27c34921667ae"
                ]
            },
            {
                "name": "LummaStealer",
                "count": 556,
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
                "count": 454,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "55828dc9278fe7cc50514d9e95e64422804a0b84",
                    "11a907f87c27b67e87f201281797b95f53508752",
                    "aaaa57850472f7c23d75d9470b1f98655d5c3655"
                ]
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious URLs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": " \"Formbook",
        "totalAttacksThisHour": 41343,
        "lastCalculated": "2026-08-10 22:33 IST"
    }
};
