// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-07-15T01:21:50.631506+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-07-15T01:21:50.229438+05:30",
    "lastUpdatedFormatted": "Jul 15, 2026 at 01:21 AM IST",
    "comparisonPeriod": "Jul 14 \u2013 Jul 15, 2026",
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
                "hxxps://divansh-chaurasiya[.]github[.]io/Netflix-clone-website",
                "hxxp://ntitwapp[.]wojiaogg[.]com/",
                "hxxps://digital-trzo-start[.]square[.]site/",
                "hxxps://help-io-trezo-en[.]square[.]site/",
                "hxxps://kucoinbuy[.]top/Trade/tradelist"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 763,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 763,
                "newInLastHour": 10,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"1bd9e446a11bf2dca961562ed807476067ea4ade0fa068c97b58173e651060f3",
                " \"31fa1cdc0530f8105b7f69e2b408fc5971dcdff3815ee6ab7bfbb7f756e0002e",
                " \"5df3574a5aacfd5eb8cabbef5a9153d7dffc854289639acffd1ed0f21bbf887a",
                " \"a3861ca7da0494b1ffa4dfb0d940d1c27a34a38481f861a55ec1cd4cd97ef9b2",
                " \"55aac3a0ab90b91703fa5b60f8b60f25c94993c8d1ab380298ebf6e1db2dff44"
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
                "newInLastHour": 53,
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
                "1[.]119[.]194[.]226",
                "1[.]12[.]65[.]64",
                "1[.]145[.]21[.]38",
                "1[.]15[.]14[.]29",
                "1[.]191[.]19[.]137"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 5270,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 5270,
                "newInLastHour": 5270,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]0[.]164[.]165",
                "1[.]1[.]220[.]166",
                "1[.]162[.]231[.]16",
                "1[.]162[.]247[.]210",
                "1[.]180[.]246[.]242"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 21397,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 21397,
                "newInLastHour": 21397,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://115[.]56[.]190[.]252:59720/i",
                "hxxp://222[.]139[.]87[.]128:46244/bin[.]sh",
                "hxxp://123[.]14[.]235[.]72:52104/i",
                "hxxps://tptc[.]betrein90[.]com/47a10b13-84db-4d5d-8462-8f8653c1892c",
                "hxxp://115[.]56[.]156[.]177:33000/bin[.]sh"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 4851,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 4851,
                "newInLastHour": 4211,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"217[.]60[.]241[.]10:7707\"",
                " \"boroo[.]bet\"",
                " \"192[.]169[.]7[.]60:7707\"",
                " \"192[.]169[.]7[.]60:8808\"",
                " \"191[.]101[.]130[.]245:5199\""
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
            "iocCount": 10192,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 10192,
                "newInLastHour": 140,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "eb8e9c5b1aa45b3d4ca6b05695a50aea57f7f56e",
                "3e615d9da0efbbbea30584bce2037017460f7251",
                "d75206e1bb0d0ab79c93e78178e102f6ef071732",
                "aa813482114409b8a5f198a39d02a77d492f7911",
                "39977fc471c8a241dbe54f09ba2caaca0261710f"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 53959,
            "activeSources": 8,
            "criticalAlerts": 32188,
            "activeCampaigns": 257
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 22158,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "C2",
                "count": 10030,
                "trend": "stable",
                "percentage": -1
            },
            {
                "category": "Botnet",
                "count": 3723,
                "trend": "stable",
                "percentage": 2
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
                "count": 21371,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://59[.]97[.]248[.]117:49918/bin[.]sh",
                    "hxxp://110[.]37[.]102[.]129:52323/bin[.]sh",
                    "hxxp://123[.]4[.]202[.]133:35648/i"
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
                    "1[.]12[.]65[.]64",
                    "1[.]145[.]21[.]38"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1624,
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
                "count": 1419,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "34ba6ed6fdcf11e71f689efe8e8bb5d723339125",
                    "8f000dbd7cc73e8857d42a3c7c15676305af6889",
                    "85f5e4e0d8c608a11c4e493eb349a7a4c8c4bc9d"
                ]
            },
            {
                "name": " \"win.cobalt_strike\"",
                "count": 1416,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"120[.]26[.]244[.]247:443\"",
                    " \"120[.]26[.]244[.]247:8080\"",
                    " \"120[.]26[.]244[.]247:80\""
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
                "count": 684,
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
                "count": 606,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "3403986d256e4ce608c0b4e9648d867a373ff6cc",
                    "4ab5197c559d38f2d4886d00f7140b09318bc5ca",
                    "cd1f1ffdd1055c9540758327ff1d7698068c9a93"
                ]
            },
            {
                "name": "LummaStealer",
                "count": 553,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "501d817bb1780acfe5e47082c43472bda8068e4d",
                    "272e76f605bec1da1ea719df8dc0e7269de7d44e",
                    "ab7f083d77dc2b1b71c0aec9a417e0a5a036a5f9"
                ]
            },
            {
                "name": "OffLoader",
                "count": 432,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "d75206e1bb0d0ab79c93e78178e102f6ef071732",
                    "659379b480f2d3448f8946b0961115e00bfdbce0",
                    "4af51082ffa699d104ec1f66263afc8efa99cf76"
                ]
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious URLs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": "Spamhaus DROP List",
        "totalAttacksThisHour": 46386,
        "lastCalculated": "2026-07-15 01:21 IST"
    }
};
