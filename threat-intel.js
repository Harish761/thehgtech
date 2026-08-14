// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-08-15T00:59:33.761806+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-08-15T00:59:33.381895+05:30",
    "lastUpdatedFormatted": "Aug 15, 2026 at 12:59 AM IST",
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
                "hxxps://162[.]89[.]74[.]97[.]host[.]secureserver[.]net/scl[.]swisscom-kundenservice/CH-DE",
                "hxxps://trgwrnchovoqii1mtimelknmjvqxeqrlkzsf14-cg13s[.]vercel[.]app/",
                "hxxps://kc-transporte[.]de/webspace/",
                "hxxps://84f7a2[.]icefactory[.]cl/",
                "hxxps://70f263[.]icefactory[.]cl/"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 1054,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 1054,
                "newInLastHour": 24,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"33211c0e7a7b9545c13addcd452b68ab0f72b2d5fad857a7a3dd75c34a3fff09",
                " \"747f8f2c557f5ca2ff3ac797ffe4df4b2e042a747e5d728060c49bda2466e5c0",
                " \"d7f44f8336a745e0b074faa039203126b26ce7e46d89301fc9233fe2e193d6cf",
                " \"00180c06765fed73c87dec265fb389be957c9fdca36bd3b00f8c421e812631e2",
                " \"439d40c57e8d7bb72378735560cf7c1a863909860f12a92b50be712716936ad3"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1683,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1683,
                "newInLastHour": 10,
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
                "1[.]172[.]222[.]189",
                "1[.]178[.]120[.]147"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 4656,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 4656,
                "newInLastHour": 4656,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]0[.]164[.]165",
                "1[.]14[.]184[.]80",
                "1[.]178[.]214[.]92",
                "1[.]203[.]174[.]102",
                "1[.]214[.]214[.]114"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 17183,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 17183,
                "newInLastHour": 17183,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://91[.]92[.]242[.]236/files-129312398/files/file_8f2a9c058325ac38[.]exe",
                "hxxp://2[.]26[.]81[.]46/bins/arm6",
                "hxxp://45[.]38[.]249[.]63/data_x86",
                "hxxp://45[.]38[.]249[.]63/data_arm7",
                "hxxp://45[.]38[.]249[.]63/data_arm5"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 5448,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 5448,
                "newInLastHour": 5140,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"45[.]66[.]248[.]156:7443\"",
                " \"43[.]143[.]118[.]200:8084\"",
                " \"43[.]143[.]118[.]200:8443\"",
                " \"gtg-tobacco[.]de\"",
                " \"hxxps://nu7[.]sm188dadu[.]top/\""
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
            "iocCount": 10440,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 10440,
                "newInLastHour": 29,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "dfde6725130631a83b3d0dc221736bad3db16918",
                "a45080c92a0b2314966517a4643ebf280e88a11b",
                "3141245c066d71ef08936296ffea7ea15082f7fd",
                "46a2a90c5813eda22263c058742902faf1def5a6",
                "183d02c077142b8701d1a719cc8cee3f8fb76072"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 51159,
            "activeSources": 8,
            "criticalAlerts": 28636,
            "activeCampaigns": 255
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 18247,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "C2",
                "count": 10389,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 4004,
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
                "count": 17156,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://222[.]141[.]82[.]215:49425/i",
                    "hxxp://42[.]235[.]50[.]219:33430/bin[.]sh",
                    "hxxp://118[.]232[.]137[.]101:42009/i"
                ]
            },
            {
                "name": "CINS Threat List",
                "count": 15000,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]180[.]190[.]250",
                    "1[.]181[.]200[.]22",
                    "1[.]190[.]44[.]221"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1673,
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
                "count": 1337,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"118[.]196[.]95[.]249:8080\"",
                    " \"116[.]198[.]42[.]177:8081\"",
                    " \"118[.]196[.]95[.]249:80\""
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
                "count": 699,
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
                "name": " \"js.iclickfix\"",
                "count": 567,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"albexmoving[.]se\"",
                    " \"beatricemoren[.]se\"",
                    " \"zalgoedutech[.]com\""
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
        "fastestRisingThreat": "malware_download",
        "totalAttacksThisHour": 42347,
        "lastCalculated": "2026-08-15 00:59 IST"
    }
};
