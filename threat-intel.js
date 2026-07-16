// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-07-16T15:49:43.887668+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-07-16T15:49:43.522894+05:30",
    "lastUpdatedFormatted": "Jul 16, 2026 at 03:49 PM IST",
    "comparisonPeriod": "Jul 15 \u2013 Jul 16, 2026",
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
                "hxxps://nl-i19sdn12k[.]replit[.]app/view/482915",
                "hxxp://cpciservicesnh[.]com/Adobe/",
                "hxxp://www[.]x25n[.]top/",
                "hxxp://www[.]x25q[.]top/",
                "hxxp://www[.]y26v[.]top/"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 941,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 941,
                "newInLastHour": 180,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"be234a21cd001fb8b770a7938d8e456ff58aca9a891b1f3c6b5279a219eaaca9",
                " \"d2338a127bed46401ea37a76e83166276b4f73cc1c171594b6383001a3e0cb4e",
                " \"c32de4ccec904d88014fd2228b653c7abb458a033244f3e0424c5420eccf5937",
                " \"c65504d546b414a45310ec3cf0728fddc601f788a53aa534bf02e76c54f3d321",
                " \"af05c0b7aefa3554b15792bab2ed7460b011d62ae64841541ebc24a33dd103d6"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1677,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1677,
                "newInLastHour": 18,
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
                "1[.]159[.]90[.]31",
                "1[.]175[.]81[.]181",
                "1[.]177[.]162[.]2",
                "1[.]180[.]184[.]182",
                "1[.]190[.]75[.]56"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 5156,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 5156,
                "newInLastHour": 5156,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]0[.]164[.]165",
                "1[.]1[.]220[.]166",
                "1[.]15[.]103[.]109",
                "1[.]162[.]231[.]16",
                "1[.]197[.]102[.]62"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 21042,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 21042,
                "newInLastHour": 21042,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxps://ftcfotjnd[.]adsbln2[.]xyz/85d96ca4-d374-4bd8-a864-c8c3ef38384f",
                "hxxp://125[.]45[.]66[.]92:56671/i",
                "hxxps://rzecbgjw[.]enfejartime[.]com/c24f5964-b8c2-4604-a208-58163fee6cc4",
                "hxxp://182[.]121[.]233[.]32:45190/bin[.]sh",
                "hxxp://110[.]37[.]88[.]141:56881/bin[.]sh"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 5300,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 5300,
                "newInLastHour": 5008,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"ftcfotjnd[.]adsbln2[.]xyz\"",
                " \"74[.]249[.]72[.]157:443\"",
                " \"138[.]124[.]84[.]7:8080\"",
                " \"138[.]124[.]84[.]7:443\"",
                " \"138[.]124[.]84[.]7:80\""
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
            "iocCount": 10219,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 10219,
                "newInLastHour": 140,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "d490abc2eba705abb1b6391b9be0a12f1e75331b",
                "e86cb30b97c8af13b305fa5cdc7357e23f633447",
                "c4e9396a3a0543fa79cc0a8f23395f90a15e03b0",
                "83424f01b8b7262f3a3cd61048d3337afdcca58a",
                "1db0412338ca7c2407e54aeb6791beeedd146c4c"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 53230,
            "activeSources": 8,
            "criticalAlerts": 31941,
            "activeCampaigns": 271
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 21884,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "C2",
                "count": 10057,
                "trend": "stable",
                "percentage": -1
            },
            {
                "category": "Botnet",
                "count": 3601,
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
            }
        ],
        "campaigns": [
            {
                "name": "malware_download",
                "count": 20961,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxps://ohdvttqo[.]tampabayspin[.]com/988124bc-6865-4532-8213-99b59c138374",
                    "hxxp://110[.]39[.]232[.]208:45430/i",
                    "hxxp://110[.]37[.]111[.]8:54696/i"
                ]
            },
            {
                "name": "CINS Threat List",
                "count": 15000,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]119[.]194[.]226",
                    "1[.]159[.]52[.]66",
                    "1[.]159[.]90[.]31"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1659,
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
                "name": " \"win.cobalt_strike\"",
                "count": 1477,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"14[.]29[.]160[.]181:8080\"",
                    " \"14[.]29[.]160[.]181:443\"",
                    " \"14[.]29[.]160[.]181:80\""
                ]
            },
            {
                "name": "AsyncRAT",
                "count": 1417,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "c11fd105f60ade90dc2611391ee6aa93e6c73375",
                    "34ba6ed6fdcf11e71f689efe8e8bb5d723339125",
                    "8f000dbd7cc73e8857d42a3c7c15676305af6889"
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
                "count": 683,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "4c67471be88dd63db2466621fe9e2a2d848f5b79",
                    "9cc76149b07c25893611bc8339406a6312ab2053",
                    "1b64957d1d878c0c0b0b346849db2e64d487aa17"
                ]
            },
            {
                "name": "Vidar",
                "count": 618,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "58a5ded84c93621d72ecc14b386e0e6bea5d103a",
                    "1dedacf3710f30c15b9e73c9d719a969eec755e5",
                    "3403986d256e4ce608c0b4e9648d867a373ff6cc"
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
                "count": 427,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "572029fec2909ba613cee3c3698b8a49af83b428",
                    "68ffb512bc3f1f544502736127d3bdbd6ece390b",
                    "d75206e1bb0d0ab79c93e78178e102f6ef071732"
                ]
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious URLs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": " \"win.metastealer\"",
        "totalAttacksThisHour": 46849,
        "lastCalculated": "2026-07-16 15:49 IST"
    }
};
