// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-06-24T16:43:33.789220+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-06-24T16:43:33.384726+05:30",
    "lastUpdatedFormatted": "Jun 24, 2026 at 04:43 PM IST",
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
            "iocCount": 660,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 660,
                "newInLastHour": 57,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"e27a5045f2660cb54dff7d7e161e87dcb752a50c6ada34941615c0995349f0db",
                " \"d94a6d8e3d54432fcdb888a4f1e566f35c9ea8fc04381956f5e836da50390ee8",
                " \"84d1b628b1c1cb79ca79b3d289da400e90d8413c9e337c0c125e244b585699e5",
                " \"9d7fee6b208d97744d7c8b2f3e287f1df976c2f881fa7dcdf237984b423f1192",
                " \"c1ff355dcf854a5aee3c9645771070b516e117b189172e9517e1b015c314a7dc"
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
                "1[.]11[.]228[.]4",
                "1[.]15[.]35[.]79",
                "1[.]15[.]51[.]236",
                "1[.]159[.]80[.]125",
                "1[.]176[.]118[.]246"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 4578,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 4578,
                "newInLastHour": 4578,
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
            "iocCount": 22783,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 22783,
                "newInLastHour": 22783,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://42[.]57[.]38[.]11:45414/i",
                "hxxps://she63245[.]vip1xbet[.]org/?ublib=a3c3fc31-9e9c-45dc-b0a7-7effc7330ab9",
                "hxxp://222[.]139[.]40[.]145:52708/i",
                "hxxp://115[.]63[.]73[.]120:36456/bin[.]sh",
                "hxxp://222[.]138[.]182[.]107:39386/i"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 4581,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 4581,
                "newInLastHour": 4109,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"101[.]33[.]202[.]134:443\"",
                " \"hxxps://dev[.]esteghlal[.]news/\"",
                " \"dev[.]esteghlal[.]news\"",
                " \"hxxps://dev[.]holidaysm188[.]top/\"",
                " \"dev[.]holidaysm188[.]top\""
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
            "iocCount": 10059,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 10059,
                "newInLastHour": 41,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "fa2f278d16337931408552d5d7a0b75b229f8f31",
                "324e2fb8e2cef0b9cc4ed108f79f6006cce4ce34",
                "526b4a8604d900869439980614e56e4b288fb46d",
                "1f0ec506802cd022908e8029e20d7b5d3c525a39",
                "b3d9f61d0ccbe25f2239a1a50071c9a5b7b4e1ec"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 54634,
            "activeSources": 8,
            "criticalAlerts": 33219,
            "activeCampaigns": 263
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 23222,
                "trend": "stable",
                "percentage": -1
            },
            {
                "category": "C2",
                "count": 9997,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 3649,
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
                "count": 22437,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://115[.]50[.]223[.]195:54233/i",
                    "hxxp://182[.]127[.]153[.]193:49823/bin[.]sh",
                    "hxxp://125[.]41[.]226[.]75:42100/i"
                ]
            },
            {
                "name": "CINS Threat List",
                "count": 15000,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]15[.]35[.]79",
                    "1[.]15[.]51[.]236",
                    "1[.]171[.]25[.]81"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1695,
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
                    " \"49[.]233[.]9[.]4:80\"",
                    " \"www[.]rmsmarineservice[.]com[.]qwqqwq[.]ggff[.]net\"",
                    " \"221[.]132[.]29[.]137:443\""
                ]
            },
            {
                "name": "AsyncRAT",
                "count": 1419,
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
                "count": 609,
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
                "name": " \"unknown\"",
                "count": 557,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"91[.]92[.]242[.]235:7443\"",
                    " \"102[.]117[.]173[.]226:7443\"",
                    " \"newpopularimages[.]com\""
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
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious URLs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": "malware_download",
        "totalAttacksThisHour": 46873,
        "lastCalculated": "2026-06-24 16:43 IST"
    }
};
