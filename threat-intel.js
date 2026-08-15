// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-08-15T22:05:51.620318+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-08-15T22:05:51.276631+05:30",
    "lastUpdatedFormatted": "Aug 15, 2026 at 10:05 PM IST",
    "comparisonPeriod": "Aug 14 \u2013 Aug 15, 2026",
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
            "iocCount": 840,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 840,
                "newInLastHour": 27,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"7df1ad3f296151ca57f5041f4863d6309ec7c8e99918fd2c9c75be7b9e6cc64f",
                " \"7824e906e6bc2fe40b62b7fed3990103dd894ac0e27367ac4509eb9e2209dbcf",
                " \"9430beeddeb4625b87ca3fd1deb45141400c19c826c2140ccd2e264beea179f1",
                " \"12419d8ededdec0eaf1a62673d5d3a9810902385ae25881326cc3b8b331970da",
                " \"34fe876495ae17e947e2cfde048d48ab3b88d2b6e0168316c7faea7313363a12"
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
                "newInLastHour": 78,
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
                "1[.]12[.]229[.]231",
                "1[.]140[.]210[.]242",
                "1[.]15[.]14[.]29",
                "1[.]15[.]227[.]58"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 4923,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 4923,
                "newInLastHour": 4923,
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
            "iocCount": 17032,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 17032,
                "newInLastHour": 17032,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://219[.]157[.]243[.]71:34099/i",
                "hxxp://182[.]117[.]30[.]230:43216/i",
                "hxxp://110[.]37[.]5[.]157:44447/i",
                "hxxp://219[.]157[.]243[.]71:34099/bin[.]sh",
                "hxxp://115[.]49[.]30[.]151:34327/i"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 6590,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 6590,
                "newInLastHour": 6323,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"111[.]170[.]148[.]132:10086\"",
                " \"107[.]172[.]217[.]148:8080\"",
                " \"111[.]170[.]148[.]132:5000\"",
                " \"107[.]172[.]217[.]148:443\"",
                " \"k7o1ql3j[.]eng-us--goldalign[.]com\""
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
            "iocCount": 10441,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 10441,
                "newInLastHour": 72,
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
            "totalIndicators": 50551,
            "activeSources": 8,
            "criticalAlerts": 28283,
            "activeCampaigns": 242
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 17935,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "C2",
                "count": 10348,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 3892,
                "trend": "stable",
                "percentage": -1
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
                "count": 16995,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://61[.]53[.]1[.]186:40670/bin[.]sh",
                    "hxxp://59[.]97[.]254[.]10:40659/i",
                    "hxxp://36[.]88[.]136[.]194:60655/i"
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
                "name": "Spamhaus DROP List",
                "count": 1608,
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
                    "f50e245dc1e4a89d6cf5e07e31ae1392a3f9ad20",
                    "b5f071dd28b511f0b4b067507602a779feb4301f",
                    "714c56e9e207d5c8e08e1ca28cd9ba85f079d061"
                ]
            },
            {
                "name": " \"win.cobalt_strike\"",
                "count": 1298,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"47[.]84[.]15[.]240:8080\"",
                    " \"47[.]84[.]15[.]240:80\"",
                    " \"47[.]84[.]15[.]240:443\""
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
                "count": 693,
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
                "name": "Vidar",
                "count": 683,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "d18f8b968bd5981971d6699bdc4ed7b96a3e7248",
                    "d0944e5765a9b5767d3cf02e3bdd9f466c5391b7",
                    "4ee6cf96fce286a8e41faa52626ccf484c72a772"
                ]
            },
            {
                "name": " \"js.iclickfix\"",
                "count": 608,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"mon-blanc-02[.]cfd\"",
                    " \"timelevel12[.]com\"",
                    " \"albexmoving[.]se\""
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
        "fastestRisingThreat": " \"js.iclickfix\"",
        "totalAttacksThisHour": 43760,
        "lastCalculated": "2026-08-15 22:05 IST"
    }
};
