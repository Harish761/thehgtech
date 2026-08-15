// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-08-16T00:27:06.129421+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-08-16T00:27:05.750455+05:30",
    "lastUpdatedFormatted": "Aug 16, 2026 at 12:27 AM IST",
    "comparisonPeriod": "Aug 15 \u2013 Aug 16, 2026",
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
                "hxxp://crisp[.]call-whatapp[.]com[.]cn/",
                "hxxps://ceteris[.]fr/wp-content/plugins/www[.]wellsfargo[.]com/onlinebanking/updates/logon_verify/wellsfargo",
                "hxxps://ceteris[.]fr:443/wp-content/plugins/www[.]wellsfargo[.]com/onlinebanking/updates/logon_verify/wellsfargo/login[.]htm",
                "hxxps://ceteris[.]fr:443/wp-content/plugins/www[.]wellsfargo[.]com/onlinebanking/updates/logon_verify/wellsfargo/session[.]htm",
                "hxxps://ugolu2bpvn2wleduwqb5dyo4r6mkmwiezfb12-cg14v[.]vercel[.]app/"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 841,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 841,
                "newInLastHour": 17,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"94620f612e74609ad155ac854ca42b615e97361f0c6552e20ba902b690514a30",
                " \"3bccecdca2ce3415df0774388ee45110c85073ea0f5e6b7ea8b00a6a1e334336",
                " \"d64ad56eca41d47cfb7f534623071dbdff25a49cdceae4dc9de6d7cdfa22e7ea",
                " \"17922edaad96218b0cb61af51fb70955da7f9396418c4d83330fc80ce4c71a32",
                " \"e4369695ea1edf4969558c295376c32d042599fb3348c2e5ea2b8563e46db1f3"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1686,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1686,
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
                "1[.]119[.]158[.]77",
                "1[.]119[.]194[.]226",
                "1[.]140[.]210[.]242",
                "1[.]15[.]14[.]29",
                "1[.]15[.]227[.]58"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 4954,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 4954,
                "newInLastHour": 4954,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]0[.]164[.]165",
                "1[.]20[.]150[.]200",
                "1[.]203[.]174[.]102",
                "1[.]214[.]214[.]114",
                "1[.]220[.]233[.]171"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 17053,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 17053,
                "newInLastHour": 17053,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://125[.]110[.]49[.]243:54807/bin[.]sh",
                "hxxp://113[.]221[.]8[.]44:56847/i",
                "hxxp://115[.]50[.]101[.]188:34800/bin[.]sh",
                "hxxp://125[.]45[.]64[.]24:42706/i",
                "hxxp://125[.]45[.]64[.]24:42706/bin[.]sh"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 6799,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 6799,
                "newInLastHour": 6538,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"sessionx[.]net\"",
                " \"bxb41a9q[.]federationofpbos[.]org\"",
                " \"hxxps://cuuwa[.]ca/\"",
                " \"rublje[.]ba\"",
                " \"rskok[.]org\""
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
            "iocCount": 10442,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 10442,
                "newInLastHour": 1,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "057b2084f877c8737e60de6c07ad829ea411b9c6",
                "f3ba11a6cb8be921ee0fbd326de9a66220bcc82f",
                "dfde6725130631a83b3d0dc221736bad3db16918",
                "a45080c92a0b2314966517a4643ebf280e88a11b",
                "3141245c066d71ef08936296ffea7ea15082f7fd"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 51894,
            "activeSources": 8,
            "criticalAlerts": 28318,
            "activeCampaigns": 235
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 17899,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "C2",
                "count": 10419,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 4021,
                "trend": "stable",
                "percentage": 3
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
                "count": 17032,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://219[.]157[.]243[.]71:34099/i",
                    "hxxp://182[.]117[.]30[.]230:43216/i",
                    "hxxp://110[.]37[.]5[.]157:44447/i"
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
                    "1[.]12[.]229[.]231",
                    "1[.]140[.]210[.]242"
                ]
            },
            {
                "name": " \"js.iclickfix\"",
                "count": 1719,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"hxxp://94[.]26[.]90[.]126/OTGQqXnM9XS4dsIiC\"",
                    " \"hxxps://pub-18653d64d62d4ec886510b90fdfce453[.]r2[.]dev/GCt12d[.]zip\"",
                    " \"hxxp://pub-18653d64d62d4ec886510b90fdfce453[.]r2[.]dev/GCt12d[.]zip\""
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1686,
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
                "count": 1437,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "f50e245dc1e4a89d6cf5e07e31ae1392a3f9ad20",
                    "b5f071dd28b511f0b4b067507602a779feb4301f",
                    "714c56e9e207d5c8e08e1ca28cd9ba85f079d061"
                ]
            },
            {
                "name": " \"win.cobalt_strike\"",
                "count": 1305,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"107[.]172[.]217[.]148:8080\"",
                    " \"107[.]172[.]217[.]148:443\"",
                    " \"4[.]253[.]8[.]171:443\""
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
                "name": "Vidar",
                "count": 708,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "057b2084f877c8737e60de6c07ad829ea411b9c6",
                    "f3ba11a6cb8be921ee0fbd326de9a66220bcc82f",
                    "d18f8b968bd5981971d6699bdc4ed7b96a3e7248"
                ]
            },
            {
                "name": "QuasarRAT",
                "count": 698,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "9b4c3ff8dc5891693f443320e3c1167c7cebe2b7",
                    "0f1b05653c3b3ab3bb4ecd772dd024668cbe8df1",
                    "b364395fee8c2e4c9eaf9a2531f6f7ac7bf8e4ae"
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
        "fastestRisingThreat": " \"win.vidar\"",
        "totalAttacksThisHour": 43868,
        "lastCalculated": "2026-08-16 00:27 IST"
    }
};
