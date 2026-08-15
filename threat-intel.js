// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-08-16T02:03:56.959039+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-08-16T02:03:56.615882+05:30",
    "lastUpdatedFormatted": "Aug 16, 2026 at 02:03 AM IST",
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
            "iocCount": 774,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 774,
                "newInLastHour": 4,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"70c037b40986a30fea6f9f2ae504eee508c4e1ca0bd859e8a78237d130758cae",
                " \"3aef5773707bcd2ac1d33b4ab18be2341f4f6f40acf784837ebc9222770facf8",
                " \"1050e7ca3b05cc57187f2ac7bed5ccb2b49150ac0ef4a8f4ee686dab61eaa330",
                " \"afbd387612dae6d6d817231abb6465ad08ae34dd6c24568e2de89d9a3c5f30e0",
                " \"94620f612e74609ad155ac854ca42b615e97361f0c6552e20ba902b690514a30"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1685,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1685,
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
                "1[.]12[.]229[.]231",
                "1[.]140[.]210[.]242",
                "1[.]15[.]227[.]58",
                "1[.]178[.]120[.]147",
                "1[.]180[.]190[.]250"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 4963,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 4963,
                "newInLastHour": 4963,
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
            "iocCount": 17061,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 17061,
                "newInLastHour": 17061,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://46[.]159[.]139[.]237:45921/bin[.]sh",
                "hxxp://182[.]121[.]231[.]159:45731/bin[.]sh",
                "hxxp://182[.]121[.]82[.]149:47697/i",
                "hxxp://115[.]51[.]38[.]188:51859/bin[.]sh",
                "hxxp://182[.]121[.]82[.]149:47697/bin[.]sh"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 6811,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 6811,
                "newInLastHour": 6340,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"111[.]170[.]148[.]132:3306\"",
                " \"learning-objects[.]ch\"",
                " \"91[.]236[.]230[.]143:7443\"",
                " \"89[.]37[.]100[.]205:56003\"",
                " \"64[.]176[.]199[.]134:8443\""
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
            "iocCount": 10429,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 10429,
                "newInLastHour": 0,
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
            "totalIndicators": 52126,
            "activeSources": 8,
            "criticalAlerts": 28341,
            "activeCampaigns": 240
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 17921,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "C2",
                "count": 10420,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 4019,
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
                "count": 17053,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://125[.]110[.]49[.]243:54807/bin[.]sh",
                    "hxxp://113[.]221[.]8[.]44:56847/i",
                    "hxxp://115[.]50[.]101[.]188:34800/bin[.]sh"
                ]
            },
            {
                "name": "CINS Threat List",
                "count": 15000,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]119[.]158[.]77",
                    "1[.]119[.]194[.]226",
                    "1[.]140[.]210[.]242"
                ]
            },
            {
                "name": " \"js.iclickfix\"",
                "count": 1728,
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
                    " \"107[.]172[.]217[.]148:22\"",
                    " \"107[.]172[.]217[.]148:8080\"",
                    " \"107[.]172[.]217[.]148:443\""
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
                "name": " \"win.vidar\"",
                "count": 593,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"f9c60eb51354ab07885428d7b868ade6\"",
                    " \"63eedb85b370d3d55a6023987dc1ca36c49074b364804b3187aa9db9eac2dd33\"",
                    " \"89dba32d78049d5650f10eb53173461a4969b673\""
                ]
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious URLs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": " \"win.pure_rat\"",
        "totalAttacksThisHour": 43673,
        "lastCalculated": "2026-08-16 02:03 IST"
    }
};
