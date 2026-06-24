// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-06-24T09:50:14.400349+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-06-24T09:50:13.941812+05:30",
    "lastUpdatedFormatted": "Jun 24, 2026 at 09:50 AM IST",
    "comparisonPeriod": "Jun 23 \u2013 Jun 24, 2026",
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
                "hxxps://bdobd[.]cc/ph/",
                "hxxps://www[.]xfinityrefunds[.]com/token/D80399912EE94D188FE77D3700E35031",
                "hxxp://www[.]paylink-paypal[.]com/",
                "hxxps://alabid234[.]github[.]io/Amazon-Project/checkout[.]html",
                "hxxps://www[.]roblox[.]et/users/3451837749/profile"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 758,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 758,
                "newInLastHour": 28,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"e052bfab59ab1e074b7f2a998190e6d6094979bef2e93b59f32ffef096a24d83",
                " \"752faadcef0c8a53370583cddec408b88b0922655e260d424763ce00f08b91d4",
                " \"16c0a0857c5fdb37fa92edc3ab802e6581875bdd24cb1a29b2004a9f67b79b38",
                " \"eda8c3988086e3f74102f462592383be649059aa3599d1ad46808db223cff58c",
                " \"14c28a21dc6c756cbf84a5e250b590f9b12883293c66b1298c27e633f270421b"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1695,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1695,
                "newInLastHour": 54,
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
                "1[.]15[.]35[.]79",
                "1[.]15[.]51[.]236",
                "1[.]171[.]25[.]81",
                "1[.]172[.]244[.]46",
                "1[.]176[.]118[.]246"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 4612,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 4612,
                "newInLastHour": 4612,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]0[.]164[.]165",
                "1[.]1[.]220[.]166",
                "1[.]160[.]229[.]25",
                "1[.]162[.]239[.]42",
                "1[.]192[.]61[.]19"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 22437,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 22437,
                "newInLastHour": 22437,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://115[.]50[.]223[.]195:54233/i",
                "hxxp://182[.]127[.]153[.]193:49823/bin[.]sh",
                "hxxp://125[.]41[.]226[.]75:42100/i",
                "hxxp://115[.]53[.]245[.]107:51909/i",
                "hxxp://117[.]57[.]50[.]40:35167/i"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 4420,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 4420,
                "newInLastHour": 3948,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"49[.]233[.]9[.]4:80\"",
                " \"www[.]rmsmarineservice[.]com[.]qwqqwq[.]ggff[.]net\"",
                " \"jetbet1[.]live\"",
                " \"lib[.]esteghlal[.]news\"",
                " \"hxxps://lib[.]esteghlal[.]news/\""
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
            "iocCount": 10019,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 10019,
                "newInLastHour": 15,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "930ad835b903af414bb1a64dc5184fe8850b0d9c",
                "696e8986d2a5ecc7deacdedf0efecd16f249befe",
                "dd3ba97127142419e80ef9ae606bec55ca8500fd",
                "d1421c00fed86ca8b65f1617019fd1a0ceed22a7",
                "fbb234bb7df601783c1d25be2a386c9ab5d45e41"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 55295,
            "activeSources": 8,
            "criticalAlerts": 33601,
            "activeCampaigns": 262
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 23602,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "C2",
                "count": 9999,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 3645,
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
                "count": 22776,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://110[.]38[.]201[.]35:35729/bin[.]sh",
                    "hxxp://123[.]148[.]240[.]15:43983/i",
                    "hxxp://182[.]126[.]249[.]14:47256/i"
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
                    "1[.]15[.]35[.]79",
                    "1[.]171[.]25[.]81"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1641,
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
                "count": 1447,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"221[.]132[.]29[.]137:443\"",
                    " \"45[.]116[.]14[.]13:8080\"",
                    " \"45[.]116[.]14[.]13:80\""
                ]
            },
            {
                "name": "AsyncRAT",
                "count": 1415,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "15a47f45b77ef377b9ec7f6aff1fc3fcca1c6035",
                    "3361a98a6c2746e41390b299202f149699f5a17d",
                    "49aa56f946089804e2bc8ae77a7b2fbaa5860e50"
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
                "count": 688,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "27e3cb5b0043884c7ebc0691e2e73ef3b95339ac",
                    "ae590545961e96de860ea7434c0e8c69b924de6f",
                    "28c3106cd1cec9a5dfec7f2ba3b0dd7e70784429"
                ]
            },
            {
                "name": "Vidar",
                "count": 607,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "e14da247abd27ab816d07e94f012ba4a405ee77f",
                    "85b767752d352a3203c71f6b61fd32aeae6a806b",
                    "a75653fb0d720b53ce06b75400144f7348f56859"
                ]
            },
            {
                "name": "LummaStealer",
                "count": 556,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "2beac2ee8b2fe7625d4de9f5381d37f200965f91",
                    "a46841d623a191366909b24375bee0eceea23bbe",
                    "272e76f605bec1da1ea719df8dc0e7269de7d44e"
                ]
            },
            {
                "name": " \"unknown\"",
                "count": 555,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"91[.]92[.]242[.]235:7443\"",
                    " \"102[.]117[.]173[.]226:7443\"",
                    " \"newpopularimages[.]com\""
                ]
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious URLs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": "Spamhaus DROP List",
        "totalAttacksThisHour": 46399,
        "lastCalculated": "2026-06-24 09:50 IST"
    }
};
