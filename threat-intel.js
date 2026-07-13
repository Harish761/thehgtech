// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-07-13T13:02:01.043500+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-07-13T13:02:00.632462+05:30",
    "lastUpdatedFormatted": "Jul 13, 2026 at 01:02 PM IST",
    "comparisonPeriod": "Jul 12 \u2013 Jul 13, 2026",
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
                "hxxps://axodus-io[.]framer[.]ai/",
                "hxxps://073bethh[.]com/",
                "hxxp://sign-in-to-xfinity-10199[.]weebly[.]com/",
                "hxxps://suncoastb[.]dev/contact-us[.]php",
                "hxxps://chusyg[.]cc/"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 629,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 629,
                "newInLastHour": 11,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"e05f0a5fb139c75d51fefd5cb1c4346ca044f8f777e9c6b7e0f4dcdd7e00bc72",
                " \"2ecaf194a03c247d06ece3e041ff1ca6119db5686ce89e68a7c16729286bc2c4",
                " \"a2c832f061e7e92a22b9a09c0df7558a3ce7e4d95083d8b1530a6350223950d2",
                " \"d46c92e092c038c8f5cd01dd5204d76bb0961823a91103559a72367050c869c1",
                " \"04052c109be755361fd73902875a6552446525cc09d68a9b81eed56b9386d2e1"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1679,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1679,
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
                "1[.]12[.]65[.]64",
                "1[.]159[.]52[.]66",
                "1[.]175[.]87[.]205",
                "1[.]177[.]63[.]24"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 5521,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 5521,
                "newInLastHour": 5521,
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
            "iocCount": 21091,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 21091,
                "newInLastHour": 21091,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxps://frqljktr[.]jadoou[.]site/b8a7601f-d076-4287-b05f-0d4b7b21e27e",
                "hxxp://196[.]189[.]198[.]193:36412/i",
                "hxxp://42[.]235[.]144[.]196:35570/i",
                "hxxps://byagqv8a[.]fileboroo[.]com/?ublib=24901cc9-f3c6-4c2f-8e81-2458d20e816d",
                "hxxp://196[.]189[.]198[.]193:36412/bin[.]sh"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 4215,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 4215,
                "newInLastHour": 4213,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"frqljktr[.]jadoou[.]site\"",
                " \"154[.]88[.]98[.]60:8885\"",
                " \"154[.]88[.]98[.]47:8885\"",
                " \"154[.]88[.]98[.]59:8885\"",
                " \"206[.]189[.]119[.]212:8080\""
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
            "iocCount": 10166,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 10166,
                "newInLastHour": 2,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "7ddfe490347dc28f3e39de9be9d61940b6b98526",
                "25b12b6623c85699b128e0b49fab305fa6b53291",
                "7a8f361d188e552651fea1204d5399d889312da2",
                "a133ce088d9ead15855e1343b8e643736d47d7d9",
                "dcbc383f1a16d4b8baa7bfca1bb023f7f65c36f7"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 52832,
            "activeSources": 8,
            "criticalAlerts": 31854,
            "activeCampaigns": 220
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 21712,
                "trend": "stable",
                "percentage": -1
            },
            {
                "category": "C2",
                "count": 10142,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 3572,
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
                "count": 21038,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://124[.]135[.]10[.]58:51825/i",
                    "hxxp://27[.]215[.]48[.]54:39132/i",
                    "hxxps://viuc[.]jadoou[.]icu/2ea55e65-9381-448c-83ae-b586ecb21725"
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
                "count": 1424,
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
        "fastestRisingThreat": " \"apk.triada\"",
        "totalAttacksThisHour": 46143,
        "lastCalculated": "2026-07-13 13:02 IST"
    }
};
