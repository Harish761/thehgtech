// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-03-23T02:10:15.982598+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-03-23T02:10:15.698287+05:30",
    "lastUpdatedFormatted": "Mar 23, 2026 at 02:10 AM IST",
    "comparisonPeriod": "Mar 22 \u2013 Mar 23, 2026",
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
                "hxxp://mazinlatheef06-del[.]github[.]io/netflix-website",
                "hxxp://ragend7[.]github[.]io/netflix",
                "hxxps://m[.]ezhj2znh069c[.]com:9229/account/reg?code=56846/",
                "hxxps://ronmenor[.]com/eee192/",
                "hxxps://kongworld[.]com/?naps/"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 650,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 650,
                "newInLastHour": 25,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"8239006e0b4296c0003ebf8a8955d40e7cb751efbcbf6e98490f76ca89bb4538",
                " \"47fcc3426f3d0e563b5c7692b0ea2a22321fa804747d7228c93a2c9dd45b7bc1",
                " \"4c2b21c9b013305c1f7d40351b1692dee7c86c72785ce53e27da621900b78ad5",
                " \"e98188fb59ac4ace244eaedacb7eb765b3cdca29bae74ce59ed7a2137c2afacf",
                " \"ce86f67220e57e39fe2cf009b28c45742e371ab3a5445cf304af0c29a6c5c8ab"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1535,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1535,
                "newInLastHour": 12,
                "lastUpdate": "just now"
            },
            "types": [
                "ip-range"
            ],
            "sampleIndicators": [
                "1.10.16.0/20",
                "1.19.0.0/16",
                "1.32.128.0/18",
                "2.56.192.0/22",
                "2.57.122.0/24"
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
                "1[.]0[.]253[.]217",
                "1[.]10[.]223[.]175",
                "1[.]14[.]3[.]240",
                "1[.]15[.]118[.]23",
                "1[.]161[.]138[.]75"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 3963,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 3963,
                "newInLastHour": 3963,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]164[.]175[.]121",
                "1[.]192[.]189[.]251",
                "1[.]197[.]102[.]62",
                "1[.]220[.]64[.]218",
                "1[.]234[.]27[.]159"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 20629,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 20629,
                "newInLastHour": 20629,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxps://ext1proc[.]acousticdatabuffer[.]in[.]net/verification[.]google",
                "hxxp://219[.]156[.]97[.]142:48691/bin[.]sh",
                "hxxp://182[.]123[.]225[.]10:44274/i",
                "hxxps://svc4link[.]spectralgateway[.]in[.]net/verification[.]google",
                "hxxps://svc3user[.]spectralgateway[.]in[.]net/verification[.]google"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 1174,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 1174,
                "newInLastHour": 1172,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"dev4work[.]chromaprocessing[.]in[.]net\"",
                " \"170[.]187[.]154[.]177:8080\"",
                " \"139[.]59[.]93[.]252:3790\"",
                " \"46[.]151[.]182[.]23:8090\"",
                " \"155[.]212[.]165[.]102:4321\""
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
            "iocCount": 9348,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 9348,
                "newInLastHour": 19,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "f8bb07018f233155ce6f17c64dce253ec5734981",
                "daa4e094b47b8c884475fc642924f7891d537687",
                "9b5d6e71e30e21da223ae28fe9015475a5300982",
                "137adb757afcb4e5980a5e6aa63ac498559309d2",
                "c23d6863f7ad286ca9f63354456c552d0b37d6a6"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 48503,
            "activeSources": 8,
            "criticalAlerts": 30501,
            "activeCampaigns": 198
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 21193,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "C2",
                "count": 9308,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Phishing",
                "count": 303,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 272,
                "trend": "up",
                "percentage": 30
            }
        ],
        "targetedSectors": [
            {
                "name": "General",
                "percentage": 92
            },
            {
                "name": "Tech",
                "percentage": 7
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
                "count": 20539,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxps://svc3edge[.]signalflowmetrics[.]in[.]net/verification[.]google",
                    "hxxp://27[.]37[.]215[.]51:34137/bin[.]sh",
                    "hxxps://svc2data[.]signalflowmetrics[.]in[.]net/verification[.]google"
                ]
            },
            {
                "name": "CINS Threat List",
                "count": 15000,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]0[.]253[.]217",
                    "1[.]10[.]223[.]175",
                    "1[.]14[.]3[.]240"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1524,
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
                "count": 1390,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "c415fb25075e3df71a6a9bf67750cbf6a6c7e868",
                    "ba3e7e73b6c654a979d4e4fe20b4aa24890b4518",
                    "e074dd74eb8eb98468a94eb43b3487fe2b7f5980"
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
                "count": 641,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "c23d6863f7ad286ca9f63354456c552d0b37d6a6",
                    "c1bf3f2892eca45233b47a9e7ca46f4719cd6700",
                    "634e580a85c375140b9a7f5972559dfd4f02033d"
                ]
            },
            {
                "name": "LummaStealer",
                "count": 545,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "ca0c1280a2c26415f8d77ca00a39c6986841da0c",
                    "fdd41b75b65c0dfb3a3873ddca6d77723a5e92b6",
                    "0211433cfdfedfc7352c1228fc58d9d2f9d49032"
                ]
            },
            {
                "name": " \"js.clearfake\"",
                "count": 479,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"svc3edge[.]signalflowmetrics[.]in[.]net\"",
                    " \"svc2data[.]signalflowmetrics[.]in[.]net\"",
                    " \"svc1sync[.]signalflowmetrics[.]in[.]net\""
                ]
            },
            {
                "name": "Vidar",
                "count": 434,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "7074621858c3ebbee2f40b6fbe04e64e494ca5fc",
                    "23d713f791bed5fda6646d195fe7402cbb5ba95b",
                    "e57c93f657e5054142f985327fdff4eb50b349f0"
                ]
            },
            {
                "name": " \"unknown\"",
                "count": 421,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"hxxp://178[.]16[.]52[.]201/9cca20c6df659f72/m_cpt2003[.]bin\"",
                    " \"hxxps://paanialert[.]com/\"",
                    " \"hxxps://anthy[.]ch/\""
                ]
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious URLs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": "malware_download",
        "totalAttacksThisHour": 41125,
        "lastCalculated": "2026-03-23 02:10 IST"
    }
};
