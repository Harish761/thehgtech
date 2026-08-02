// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-08-02T12:12:03.124577+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-08-02T12:12:02.814813+05:30",
    "lastUpdatedFormatted": "Aug 02, 2026 at 12:12 PM IST",
    "comparisonPeriod": "Aug 01 \u2013 Aug 02, 2026",
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
                "hxxps://www[.]pos[.]augmentse[.]top/",
                "hxxps://augmentse[.]top/",
                "hxxps://www[.]ledger-wallet-app-xxa8[.]vercel[.]app/",
                "hxxps://https-roblodx[.]com/login?returnUrl=885962052",
                "hxxps://4971-nj3[.]sumsubio[.]com/sumsub2"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 659,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 659,
                "newInLastHour": 14,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"16e153644094fbba7ec924680c2f8cb203604bee06f3a77cbddb803c147af121",
                " \"0ffec6082c9540ac473d603f278168458f574ac9018ba5ed9b7b1e7ec1539133",
                " \"5c36d884cc8bb55a906013fadf14f21bf4a10fc57861633bd44d90f800c090d8",
                " \"aef01ab9e284b663cdd5caf288eff4120406ae452f5fb73e4b135c542aa59919",
                " \"f1dd856f66a38cae3488a9f077c4cc8c27445162e512cbb73770cac27436d869"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1664,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1664,
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
                "1[.]10[.]185[.]51",
                "1[.]119[.]194[.]226",
                "1[.]140[.]3[.]11",
                "1[.]15[.]82[.]219",
                "1[.]159[.]48[.]69"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 4424,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 4424,
                "newInLastHour": 4424,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]0[.]164[.]165",
                "1[.]12[.]37[.]6",
                "1[.]162[.]18[.]135",
                "1[.]192[.]61[.]70",
                "1[.]204[.]206[.]182"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 14864,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 14864,
                "newInLastHour": 14864,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://27[.]220[.]11[.]19:34692/bin[.]sh",
                "hxxp://219[.]157[.]180[.]80:46856/i",
                "hxxp://182[.]121[.]86[.]172:57830/i",
                "hxxp://219[.]157[.]180[.]80:46856/bin[.]sh",
                "hxxp://110[.]37[.]104[.]0:56112/i"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 5750,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 5750,
                "newInLastHour": 5341,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"2b9ljdva[.]tashabeautystore[.]com\"",
                " \"ytedgc[.]hemiuavip[.]com\"",
                " \"mgzfyvk[.]greenestreetchurch[.]com\"",
                " \"43[.]161[.]234[.]96:3232\"",
                " \"38[.]128[.]251[.]209:3000\""
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
            "iocCount": 10271,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 10271,
                "newInLastHour": 0,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "014d51d79c5a5c80042abedb35231581ff07c2e7",
                "ed0d4b2a9c090b6af6c99fd5b899831da206d835",
                "7767913e33fac1ed9c448460267ca0e6cbe627b4",
                "fe50e363165e3e8d789daf4dc378f50a70f35a8a",
                "16fbb45457a2d8e67c556db46e051893917e2104"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 48498,
            "activeSources": 8,
            "criticalAlerts": 25760,
            "activeCampaigns": 232
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 15509,
                "trend": "stable",
                "percentage": -4
            },
            {
                "category": "C2",
                "count": 10251,
                "trend": "stable",
                "percentage": 1
            },
            {
                "category": "Botnet",
                "count": 3536,
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
                    "1[.]10[.]185[.]51",
                    "1[.]119[.]194[.]226",
                    "1[.]140[.]3[.]11"
                ]
            },
            {
                "name": "malware_download",
                "count": 14832,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://182[.]116[.]32[.]218:39852/i",
                    "hxxp://182[.]113[.]32[.]18:55398/bin[.]sh",
                    "hxxp://182[.]116[.]32[.]218:39852/bin[.]sh"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1664,
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
                "name": " \"js.iclickfix\"",
                "count": 1490,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"jouwonderhoud[.]be\"",
                    " \"www[.]cevrev[.]com\"",
                    " \"www[.]cobelediciones[.]com\""
                ]
            },
            {
                "name": "AsyncRAT",
                "count": 1433,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "67044f9079f804d4a6217093c679897fec1f90e2",
                    "c7ec4c2fa1678702ae684a069cf37a4eef16ef27",
                    "4e5b7b186ad51a93d4e1ba0e2b5ca006b62571be"
                ]
            },
            {
                "name": " \"win.cobalt_strike\"",
                "count": 1388,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"103[.]41[.]19[.]111:80\"",
                    " \"103[.]41[.]19[.]111:443\"",
                    " \"156[.]224[.]18[.]21:8080\""
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
                    "4c67471be88dd63db2466621fe9e2a2d848f5b79",
                    "9cc76149b07c25893611bc8339406a6312ab2053",
                    "1b64957d1d878c0c0b0b346849db2e64d487aa17"
                ]
            },
            {
                "name": "Vidar",
                "count": 660,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "014d51d79c5a5c80042abedb35231581ff07c2e7",
                    "ed0d4b2a9c090b6af6c99fd5b899831da206d835",
                    "7767913e33fac1ed9c448460267ca0e6cbe627b4"
                ]
            },
            {
                "name": "LummaStealer",
                "count": 557,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "501d817bb1780acfe5e47082c43472bda8068e4d",
                    "2beac2ee8b2fe7625d4de9f5381d37f200965f91",
                    "a46841d623a191366909b24375bee0eceea23bbe"
                ]
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious URLs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": "malware_download",
        "totalAttacksThisHour": 39948,
        "lastCalculated": "2026-08-02 12:12 IST"
    }
};
