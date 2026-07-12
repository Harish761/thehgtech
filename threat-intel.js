// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-07-12T19:19:03.433188+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-07-12T19:19:03.031201+05:30",
    "lastUpdatedFormatted": "Jul 12, 2026 at 07:19 PM IST",
    "comparisonPeriod": "Jul 11 \u2013 Jul 12, 2026",
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
                "hxxps://metiaamask[.]github[.]io/",
                "hxxps://sp21ct7-sanvek-biz-kortri-ladven[.]pages[.]dev/",
                "hxxps://infoundianshopee11[.]blogspot[.]com/?m=1",
                "hxxp://ssl[.]wojiaogg[.]com/nl",
                "hxxp://rngkuqoo[.]elementor[.]cloud/Aa/AA/A/AR/ES/argentina/ar/ES9D303ESS/ESS4Z3499SES/82CFGU2554/index[.]html"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 606,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 606,
                "newInLastHour": 52,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"4baf23fdd336fe3f1b17af33f37af21809b56792d0a9433b4c4250a2ce7ff13d",
                " \"1c3dd2df833307040ddea68767faab876b4817e5160f2f5b8f1a76248833f51c",
                " \"ee1bddda91c3a8a3ca8b3fcc077c373dc80da17b94ae6dc7f4219116a49fd7ac",
                " \"4d74fa29ab5ab01f6f96d9a94a21c365aa3fd21de20164019e838d3d244fa8d5",
                " \"e79766b8a3cffa940cecc8a983fd7a0c0fc853b1aeb60af106ffeff48e3dfa5f"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1660,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1660,
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
                "1[.]12[.]65[.]64",
                "1[.]158[.]64[.]230",
                "1[.]159[.]52[.]66",
                "1[.]175[.]87[.]205"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 5452,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 5452,
                "newInLastHour": 5452,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]0[.]164[.]165",
                "1[.]1[.]220[.]166",
                "1[.]116[.]61[.]217",
                "1[.]15[.]221[.]192",
                "1[.]15[.]227[.]58"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 21294,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 21294,
                "newInLastHour": 21294,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://115[.]61[.]115[.]235:43187/i",
                "hxxp://115[.]55[.]144[.]131:44167/i",
                "hxxps://qfjwyksn[.]jadoobet[.]info/?ublib=45a7b450-cc43-4ba3-9f4b-8a91a5777ec5",
                "hxxps://zduyoblb[.]betropol[.]bet/2207261e-0ee9-4dcd-a0af-1585040d3e39",
                "hxxp://42[.]55[.]238[.]98:49506/i"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 4204,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 4204,
                "newInLastHour": 4082,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"qfjwyksn[.]jadoobet[.]info\"",
                " \"tdyx2uq8[.]jadoobet[.]info\"",
                " \"zduyoblb[.]betropol[.]bet\"",
                " \"kantnxrl[.]betropol[.]bet\"",
                " \"ltvz[.]jadoou[.]biz\""
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
            "iocCount": 10129,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 10129,
                "newInLastHour": 0,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "7a8f361d188e552651fea1204d5399d889312da2",
                "a133ce088d9ead15855e1343b8e643736d47d7d9",
                "dcbc383f1a16d4b8baa7bfca1bb023f7f65c36f7",
                "22cb3cb6d7b5b158d2156b1bd4018db8b5433ea7",
                "1199461c382373b4645960ca6875028d7c96ce16"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 53221,
            "activeSources": 8,
            "criticalAlerts": 31990,
            "activeCampaigns": 236
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 21848,
                "trend": "stable",
                "percentage": 1
            },
            {
                "category": "C2",
                "count": 10142,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 3563,
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
                "count": 21239,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://120[.]28[.]219[.]218:58497/bin[.]sh",
                    "hxxp://182[.]124[.]129[.]1:40347/bin[.]sh",
                    "hxxps://acthwqwn[.]behtarin-site-shartbandi[.]com/21e8f421-57c5-470b-80e7-7191fece8290"
                ]
            },
            {
                "name": "CINS Threat List",
                "count": 15000,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]12[.]229[.]231",
                    "1[.]158[.]64[.]230",
                    "1[.]159[.]52[.]66"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1680,
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
                "count": 1441,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"45[.]32[.]253[.]166:8088\"",
                    " \"121[.]4[.]76[.]54:8888\"",
                    " \"120[.]26[.]244[.]247:10000\""
                ]
            },
            {
                "name": "AsyncRAT",
                "count": 1422,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "6a338d0e652aeb230f0b42e3916ff0f8b86d7409",
                    "41cbe997a63cc9211fd19593cfcf27602d10bcd8",
                    "526b4a8604d900869439980614e56e4b288fb46d"
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
                "count": 692,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "9cc76149b07c25893611bc8339406a6312ab2053",
                    "1b64957d1d878c0c0b0b346849db2e64d487aa17",
                    "83ff65960d2df4b29e78d6fd0342dcd5f053eb13"
                ]
            },
            {
                "name": "Vidar",
                "count": 641,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "7a8f361d188e552651fea1204d5399d889312da2",
                    "dcbc383f1a16d4b8baa7bfca1bb023f7f65c36f7",
                    "22cb3cb6d7b5b158d2156b1bd4018db8b5433ea7"
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
                "name": "OffLoader",
                "count": 441,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "4af51082ffa699d104ec1f66263afc8efa99cf76",
                    "a838f21e4fbcf93b9dcb1adf61ce9a7e07729594",
                    "c24c5b16d1b72ff6933bdc9a5034808630f1413f"
                ]
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious URLs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": "malware_download",
        "totalAttacksThisHour": 46185,
        "lastCalculated": "2026-07-12 19:19 IST"
    }
};
