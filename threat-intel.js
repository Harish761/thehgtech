// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-07-09T21:00:31.080972+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-07-09T21:00:30.600640+05:30",
    "lastUpdatedFormatted": "Jul 09, 2026 at 09:00 PM IST",
    "comparisonPeriod": "Jul 08 \u2013 Jul 09, 2026",
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
                "hxxp://sp0ct-belvor-biz-warnex-falqim[.]pages[.]dev/",
                "hxxps://usbankbusiness[.]vercel[.]app/",
                "hxxp://www[.]usbankbusiness[.]vercel[.]app/",
                "hxxp://hsawtse[.]eu[.]cc/",
                "hxxps://login-raiffeisen[.]info/blog/blog[.]php"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 932,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 932,
                "newInLastHour": 74,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"a74e6207d1525ea4d505fc7fb9546828e51a2d15cabc412ec8f949fec93fee23",
                " \"53330df52f154cee57e02c4047e39640327808edfa86f68a84a74516a3a353f2",
                " \"9c5edc9006283a724d619d2f230767343c8c22de736ab05af57fcc8226b69db5",
                " \"33d9b53c42674663d0d7d23c251a7dce5f2ea7992a42540e421ab3956e621595",
                " \"c5e1db463914d3b435ec1d61573dd1afe58a50217b3caca72daa280211f1d7cc"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1680,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1680,
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
                "1[.]119[.]194[.]226",
                "1[.]12[.]229[.]231",
                "1[.]157[.]105[.]181",
                "1[.]165[.]41[.]139",
                "1[.]188[.]100[.]176"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 9068,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 9068,
                "newInLastHour": 9068,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]0[.]164[.]165",
                "1[.]162[.]197[.]67",
                "1[.]162[.]225[.]185",
                "1[.]162[.]226[.]31",
                "1[.]162[.]247[.]182"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 22176,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 22176,
                "newInLastHour": 22176,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxps://iqtpiyvx[.]rabonabet[.]casino/4bff366a-847b-44b7-87ea-7c185c244717",
                "hxxp://110[.]37[.]74[.]11:51802/i",
                "hxxps://5rtckgb9[.]powershart[.]com/?ublib=a95aa363-6a05-42dc-bde0-69edbfff7890",
                "hxxp://45[.]198[.]224[.]249/void/void[.]mpsl",
                "hxxp://45[.]198[.]224[.]249/void/void[.]x86_64"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 4201,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 4201,
                "newInLastHour": 4086,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"iqtpiyvx[.]rabonabet[.]casino\"",
                " \"ooycseqc[.]rabonabet[.]casino\"",
                " \"rabonabet[.]casino\"",
                " \"hxxps://henreques[.]lol/api/v1/status\"",
                " \"hxxps://cloudpass7138[.]lol/update/package\""
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
            "iocCount": 10140,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 10140,
                "newInLastHour": 21,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "811f3a6d406105ca7844722f280f075058d1e1ae",
                "d06dfdf841a409515705fdf652154c78cf34a21e",
                "206219a2b2d7704733e09b28d639f4e574ed81df",
                "1e9d00de147af3c24b22721d8c18680150dad2d5",
                "16e2a45afc9c237a463c23e14110aebb700085db"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 54807,
            "activeSources": 8,
            "criticalAlerts": 33556,
            "activeCampaigns": 254
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 23455,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "C2",
                "count": 10101,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 3495,
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
                "count": 22100,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://112[.]248[.]110[.]0:35255/i",
                    "hxxps://xfcv55u8[.]iraniporn[.]video/?ublib=6ecfa6fe-e170-4920-b8e4-d9e5399d8e0a",
                    "hxxp://115[.]50[.]95[.]121:59995/bin[.]sh"
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
                    "1[.]158[.]52[.]79",
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
                "count": 1461,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"39[.]106[.]113[.]249:81\"",
                    " \"39[.]106[.]113[.]249:443\"",
                    " \"39[.]106[.]113[.]249:8080\""
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
                "count": 625,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "1e9d00de147af3c24b22721d8c18680150dad2d5",
                    "16e2a45afc9c237a463c23e14110aebb700085db",
                    "41fb7a086b442b60106c064b90f453aa98d0056b"
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
        "totalAttacksThisHour": 50730,
        "lastCalculated": "2026-07-09 21:00 IST"
    }
};
