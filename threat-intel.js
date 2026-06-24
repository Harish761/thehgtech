// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-06-24T20:20:46.007936+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-06-24T20:20:45.540401+05:30",
    "lastUpdatedFormatted": "Jun 24, 2026 at 08:20 PM IST",
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
                "hxxp://arshina896[.]github[.]io/instagram/",
                "hxxp://z-maniac-sidd[.]github[.]io/Netflix_clone/",
                "hxxp://nishkarsh71[.]github[.]io/Mini-Project/",
                "hxxps://ig[.]do/asuranlha1",
                "hxxps://qr[.]link/PwvkS2"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 694,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 694,
                "newInLastHour": 48,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"839468f2fe4e29c76b2f28a2734d04294b107b4c73898718e6ea5083ec9a8063",
                " \"13b7ca871f8ccdadcd5664f7434de18ea36bbff93a551f1061e215bbf7104947",
                " \"cd5a2e5352fddb3e46c36fe52ce460e3fbcf79a26b5421509f4a9a4a4fbd7c0e",
                " \"f787a3cc73b976e39f83689aa15ca4f73a2708a67f6b52902bd8b29b83778a4f",
                " \"d2894f596a9d4440c61ec3c929c05591a4cafbb58599ab97fee1b92c618a3939"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1673,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1673,
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
                "1[.]15[.]51[.]236",
                "1[.]159[.]80[.]125",
                "1[.]176[.]118[.]246",
                "1[.]183[.]161[.]114"
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
            "iocCount": 22872,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 22872,
                "newInLastHour": 22872,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://110[.]37[.]123[.]170:45886/bin[.]sh",
                "hxxp://222[.]139[.]33[.]64:54465/bin[.]sh",
                "hxxp://125[.]43[.]229[.]4:36249/bin[.]sh",
                "hxxp://115[.]62[.]34[.]107:59910/bin[.]sh",
                "hxxp://115[.]55[.]187[.]194:37069/i"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 4418,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 4418,
                "newInLastHour": 3934,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"9baeu5sl[.]zistzirezarebin[.]shop\"",
                " \"zistzirezarebin[.]shop\"",
                " \"103[.]53[.]80[.]201:443\"",
                " \"hxxps://psh[.]esteghlal[.]news/\"",
                " \"psh[.]holidaysm188[.]top\""
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
            "iocCount": 9928,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 9928,
                "newInLastHour": 1,
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
            "totalIndicators": 55083,
            "activeSources": 8,
            "criticalAlerts": 33507,
            "activeCampaigns": 259
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 23470,
                "trend": "stable",
                "percentage": 1
            },
            {
                "category": "C2",
                "count": 10037,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 3627,
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
                "count": 22783,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://42[.]57[.]38[.]11:45414/i",
                    "hxxps://she63245[.]vip1xbet[.]org/?ublib=a3c3fc31-9e9c-45dc-b0a7-7effc7330ab9",
                    "hxxp://222[.]139[.]40[.]145:52708/i"
                ]
            },
            {
                "name": "CINS Threat List",
                "count": 15000,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]11[.]228[.]4",
                    "1[.]15[.]35[.]79",
                    "1[.]15[.]51[.]236"
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
                "count": 1426,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"67[.]216[.]197[.]83:2083\"",
                    " \"67[.]216[.]197[.]83:2087\"",
                    " \"103[.]201[.]131[.]147:8888\""
                ]
            },
            {
                "name": "AsyncRAT",
                "count": 1420,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "526b4a8604d900869439980614e56e4b288fb46d",
                    "15a47f45b77ef377b9ec7f6aff1fc3fcca1c6035",
                    "3361a98a6c2746e41390b299202f149699f5a17d"
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
                "count": 612,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "1b74f82a9f35a6f50d374d9c4471ad5762654eee",
                    "f64cde665218b5b87ca3413a068864247c237b95",
                    "e14da247abd27ab816d07e94f012ba4a405ee77f"
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
                "count": 494,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"38[.]207[.]177[.]71:7443\"",
                    " \"hxxps://doc[.]eagle-web-concept[.]fr/matin/rend\"",
                    " \"hxxps://www[.]campeggioletizialivigno[.]it/\""
                ]
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious URLs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": " \"js.iclickfix\"",
        "totalAttacksThisHour": 46738,
        "lastCalculated": "2026-06-24 20:20 IST"
    }
};
