// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-09-06T23:43:55.219038+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-09-06T23:43:54.852145+05:30",
    "lastUpdatedFormatted": "Sep 06, 2026 at 11:43 PM IST",
    "comparisonPeriod": "Sep 05 \u2013 Sep 06, 2026",
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
                "hxxps://www[.]nehsbe[.]cn/ww/",
                "hxxp://www[.]nehsbe[.]cn/",
                "hxxps://fb-meta-verified-47091[.]vercel[.]app/",
                "hxxps://www[.]fb-meta-verified-47091[.]vercel[.]app/",
                "hxxps://samaoluwasegun-dev[.]github[.]io/alexhoffmannboa/"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 613,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 613,
                "newInLastHour": 66,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"5d0f4e14adeac1256e4bfe68223af7555bdd2ea38141462dc913de6cf14edc46",
                " \"4813dffc1ed2b2a46c8e980a07edc668a3d26ca20d9cc65dc23b9c9dfd3dc2cf",
                " \"579c046d181eb09c4c28464382171bd5ebbd5761bdd463ed90f5d3ce8821bda8",
                " \"a5af065f87ff970e41614cf1d5221f3801babcac25d933ba972b7814403ad821",
                " \"eeeee04a1066f6e958cadf89005c14dc64b97ed4c0041faa7dbcf3881eeefe7f"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1707,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1707,
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
                "1[.]117[.]59[.]169",
                "1[.]119[.]194[.]253",
                "1[.]12[.]229[.]231",
                "1[.]163[.]204[.]175",
                "1[.]183[.]160[.]23"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 5502,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 5502,
                "newInLastHour": 5502,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]0[.]164[.]165",
                "1[.]12[.]37[.]6",
                "1[.]174[.]208[.]30",
                "1[.]178[.]222[.]238",
                "1[.]209[.]110[.]147"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 14458,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 14458,
                "newInLastHour": 14458,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://59[.]97[.]253[.]153:56432/i",
                "hxxp://221[.]214[.]162[.]133:52343/bin[.]sh",
                "hxxp://123[.]190[.]66[.]186:51800/i",
                "hxxp://217[.]60[.]195[.]187/qtm[.]arm6",
                "hxxp://217[.]60[.]195[.]187/qtm[.]x86"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 6467,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 6467,
                "newInLastHour": 5985,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"47[.]113[.]179[.]196:8089\"",
                " \"173[.]249[.]206[.]44:80\"",
                " \"154[.]91[.]56[.]111:8094\"",
                " \"206[.]237[.]120[.]90:48984\"",
                " \"gatorpressurewashingllc[.]com\""
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
            "iocCount": 10633,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 10633,
                "newInLastHour": 1,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "a66308a1fb09c8345228ca00335e633b2dabde53",
                "7fa3afaafe3b7c5eab63712e58c9414a86d559ec",
                "1baea4f8295715f075d3c0510b61017840047ae3",
                "5efdc565e73e10756c6962ebadd15cf4b1075ea9",
                "e649d5c0e33423531f5404ed8f985a3fc42fb934"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 47786,
            "activeSources": 8,
            "criticalAlerts": 25712,
            "activeCampaigns": 266
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 15083,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "C2",
                "count": 10629,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 4115,
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
                "name": "CINS Threat List",
                "count": 15000,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]12[.]229[.]231",
                    "1[.]183[.]160[.]23",
                    "1[.]189[.]108[.]155"
                ]
            },
            {
                "name": "malware_download",
                "count": 14378,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://61[.]53[.]237[.]27:49567/bin[.]sh",
                    "hxxp://194[.]59[.]30[.]180:35466/b/kal64",
                    "hxxp://194[.]59[.]30[.]180:35466/b/linux"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1708,
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
                "count": 1443,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "7fa3afaafe3b7c5eab63712e58c9414a86d559ec",
                    "78527fc92bcf8d188b3bcab1b35ac5881e2aaa43",
                    "8c2a430246ca36ca14885fe1a101c61eaab4a96c"
                ]
            },
            {
                "name": " \"win.cobalt_strike\"",
                "count": 1302,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"193[.]239[.]86[.]192:22\"",
                    " \"193[.]239[.]86[.]192:7000\"",
                    " \"193[.]239[.]86[.]192:8080\""
                ]
            },
            {
                "name": "Vidar",
                "count": 769,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "1baea4f8295715f075d3c0510b61017840047ae3",
                    "4454daf3ef7f7d71cf8e4ce8067c880f9976c952",
                    "7d5d941b4a1e4732fad44cce2a4ded87a20d5508"
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
                "count": 703,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "de0a287fb9997f0ffbd36df79b13cfda63f0bfcd",
                    "22d945ac6c7c00fb7bb5d0dc3618a82d46cfd1e2",
                    "6c6027c8ff18b0f79bd3c40848c2b189a18b49ac"
                ]
            },
            {
                "name": " \"win.pure_rat\"",
                "count": 585,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"82[.]22[.]7[.]20:5069\"",
                    " \"108[.]187[.]43[.]137:56003\"",
                    " \"108[.]187[.]43[.]144:56003\""
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
        "totalAttacksThisHour": 41317,
        "lastCalculated": "2026-09-06 23:43 IST"
    }
};
