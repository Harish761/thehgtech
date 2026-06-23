// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-06-23T23:38:11.583939+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-06-23T23:38:11.171497+05:30",
    "lastUpdatedFormatted": "Jun 23, 2026 at 11:38 PM IST",
    "comparisonPeriod": "Jun 22 \u2013 Jun 23, 2026",
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
                "hxxps://sia[.]inicioseguro[.]com/c/p/tc/3080/eece42f9-8c69-496a-a73d-054cd8cb10bb-79f1cb36-f9af-4af7-9acd-c4579cdfaf11/",
                "hxxps://www[.]r[.]oblox[.]com[.]et/users/8077342404/profile",
                "hxxp://hawkfs[.]icu/snx/pr/",
                "hxxps://www[.]roblox[.]com[.]bi/games/17625359962/RIVALS?privateServerLinkCode=26794274690145427755087934733914",
                "hxxp://www[.]gov-parkingiss[.]top/com/"
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
                "newInLastHour": 71,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"0ad7f891ca02d0f11a3209211f3f6543393774f317dcad291628d9d7c7f0865e",
                " \"011b3b20095e9de6e8c5f3a0f3ca18b5404869ada82599c4bf4473e2204953dc",
                " \"535011b2507447bf0de86fad901976eb9dab9fad81353f562fac3bdbbf605404",
                " \"7b5ab2c828cd839ed3175de2b656131a4e46693d952851fd72974ae5ffa6e522",
                " \"afc81242f78b72681897c590da4c4ccea2c714a9d132e867b2a40c479562bb77"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1694,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1694,
                "newInLastHour": 11,
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
                "1[.]12[.]229[.]231",
                "1[.]15[.]35[.]79",
                "1[.]171[.]171[.]216",
                "1[.]171[.]25[.]81"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 4726,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 4726,
                "newInLastHour": 4726,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]0[.]164[.]165",
                "1[.]160[.]229[.]25",
                "1[.]162[.]239[.]42",
                "1[.]192[.]61[.]19",
                "1[.]20[.]140[.]252"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 22739,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 22739,
                "newInLastHour": 22739,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://110[.]36[.]4[.]114:48440/i",
                "hxxp://182[.]124[.]174[.]44:40293/bin[.]sh",
                "hxxp://155[.]138[.]206[.]173/Bin/ScreenConnect[.]ClientSetup[.]exe",
                "hxxp://155[.]138[.]206[.]173/bin/support[.]client[.]exe",
                "hxxp://129[.]121[.]114[.]124/Q24I"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 4522,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 4522,
                "newInLastHour": 4307,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"hxxps://spc[.]esteghlal[.]news/\"",
                " \"spc[.]holidaysm188[.]top\"",
                " \"hxxps://spc[.]holidaysm188[.]top/\"",
                " \"spc[.]esteghlal[.]news\"",
                " \"haqoakt0[.]elmolnafs[.]xyz\""
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
            "iocCount": 10036,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 10036,
                "newInLastHour": 86,
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
            "totalIndicators": 55202,
            "activeSources": 8,
            "criticalAlerts": 33367,
            "activeCampaigns": 267
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 23439,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "C2",
                "count": 9928,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 3755,
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
                "percentage": 98
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
                "count": 22666,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://202[.]111[.]130[.]219:54872/i",
                    "hxxp://110[.]39[.]244[.]67:55119/i",
                    "hxxp://196[.]189[.]198[.]193:51349/i"
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
                    "1[.]15[.]35[.]79"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1683,
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
                "count": 1446,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"45[.]116[.]14[.]13:8080\"",
                    " \"45[.]116[.]14[.]13:80\"",
                    " \"209[.]126[.]7[.]188:81\""
                ]
            },
            {
                "name": "AsyncRAT",
                "count": 1413,
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
                "count": 685,
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
                "count": 591,
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
                "count": 553,
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
                "count": 552,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"hxxps://tafeqld-brisbane[.]com/\"",
                    " \"hxxps://porcherservicesandtransfer[.]com/\"",
                    " \"bestcheats[.]space\""
                ]
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious URLs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": "malware_download",
        "totalAttacksThisHour": 47245,
        "lastCalculated": "2026-06-23 23:38 IST"
    }
};
