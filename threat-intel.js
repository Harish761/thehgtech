// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2025-12-29T18:33:55.509529+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2025-12-29T18:33:55.150089+05:30",
    "lastUpdatedFormatted": "Dec 29, 2025 at 06:33 PM IST",
    "comparisonPeriod": "Dec 28 \u2013 Dec 29, 2025",
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
                "hxxps://dhlcanada[.]com/",
                "hxxps://bancolombiaprestamosonline[.]zeabur[.]app/",
                "hxxps://wgdxf[.]vip/",
                "hxxps://allegrolokalnie[.]pl-smart8124122[.]cfd/oferta/47949270/kierownica-logitech-g920-shifter",
                "hxxps://allegrolokalnie[.]pl-smart8124122[.]cfd/oferta/47949270/kierownica"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 1514,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 1514,
                "newInLastHour": 199,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"c3252617c43442a4b4493884a73dc4c2e1a86ca50093803475caacd1a4545ad8",
                " \"63841915cedf46bc0fcc414869bef8207e048ada4c0b2c72e7124fa945bea288",
                " \"682c94197c5a9e95be4c0024d45dd105d43405ee228c179cb9a3762e7094d234",
                " \"da4cd629e63c7e95beaf19fd6ca8f56e1705dbea90e3480ee2364a98897d4b58",
                " \"77ad81315e12fac54c2e5c59c92ccd0626da2629cd87b4c54654013ccd53a07e"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1471,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1471,
                "newInLastHour": 1,
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
                "1[.]15[.]118[.]23",
                "1[.]15[.]14[.]29",
                "1[.]157[.]99[.]66",
                "1[.]177[.]162[.]2",
                "1[.]177[.]63[.]16"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 5865,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 5865,
                "newInLastHour": 5865,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]12[.]217[.]80",
                "1[.]14[.]95[.]153",
                "1[.]145[.]101[.]122",
                "1[.]197[.]102[.]62",
                "1[.]201[.]164[.]58"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 26517,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 26517,
                "newInLastHour": 26517,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://110[.]36[.]16[.]68:51035/i",
                "hxxp://112[.]254[.]166[.]139:45162/bin[.]sh",
                "hxxp://113[.]238[.]10[.]79:60633/i",
                "hxxp://110[.]36[.]16[.]68:51035/bin[.]sh",
                "hxxp://175[.]165[.]198[.]73:33370/i"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 885,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 885,
                "newInLastHour": 685,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"77[.]110[.]115[.]239:8443\"",
                " \"154[.]201[.]64[.]231:443\"",
                " \"4yyzsm3c107cp[.]cfc-execute[.]bj[.]baidubce[.]com\"",
                " \"9xllntvv[.]mi5tpath[.]ru\"",
                " \"2oof5izm[.]mi5tpath[.]ru\""
            ]
        },
        "Feodo Tracker": {
            "description": "Botnet C2 server IPs from Feodo Tracker. Tracks Dridex, Emotet, TrickBot, QakBot, and BazarLoader.",
            "website": "https://feodotracker.abuse.ch/",
            "updateFrequency": "Hourly",
            "iocCount": 4,
            "iocDataUrl": "https://thehgtech.com/ioc-data/feodo-tracker.json",
            "stats": {
                "total": 4,
                "newInLastHour": 4,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "137[.]184[.]9[.]29",
                "15[.]204[.]219[.]215",
                "162[.]243[.]103[.]246",
                "167[.]86[.]75[.]145"
            ]
        },
        "SSL Blacklist": {
            "description": "Malicious SSL certificates used by botnet C2 servers. Helps detect encrypted malware communications.",
            "website": "https://sslbl.abuse.ch/",
            "updateFrequency": "Daily",
            "iocCount": 8702,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 8702,
                "newInLastHour": 7,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "c2433ae2f074166a3dacd6c8201c89d66a1e0cc1",
                "2f063e428f33595352b99ddca86ee7845e398bc0",
                "1448fc1d6a288c02919d44f74ba722c92f460f49",
                "af0d2418e9e8e5a7057f5d1a9b5604137b6acde4",
                "596a2c1bbef5e3603cc907b652162cec9a10c496"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 54330,
            "activeSources": 8,
            "criticalAlerts": 36683,
            "activeCampaigns": 193
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 28012,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "C2",
                "count": 8671,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 420,
                "trend": "up",
                "percentage": 18
            },
            {
                "category": "Phishing",
                "count": 301,
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
                "percentage": 1
            },
            {
                "name": "Finance",
                "percentage": 0
            }
        ],
        "campaigns": [
            {
                "name": "malware_download",
                "count": 26423,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://110[.]37[.]2[.]82:56639/bin[.]sh",
                    "hxxp://115[.]61[.]51[.]6:33777/i",
                    "hxxp://74[.]214[.]56[.]173:44655/bin[.]sh"
                ]
            },
            {
                "name": "CINS Threat List",
                "count": 15000,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]15[.]118[.]23",
                    "1[.]15[.]14[.]29",
                    "1[.]15[.]149[.]209"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1475,
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
                "count": 1363,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "1a5aa767c2675014c5c0a10b2d9f4c63844a84f8",
                    "3a56a66eb43b679afa1edb58e0fddcadf74bb2a4",
                    "47800989ef4eda671b2a76a0cd9123ec7b0bc324"
                ]
            },
            {
                "name": " \"Mirai",
                "count": 833,
                "types": [
                    "hash"
                ],
                "sampleIndicators": [
                    " \"563e517bf2118e54ccfc1a7e4b3ebac975d5e6ff413bf515d6d95f77f1148f15",
                    " \"0967c1e23ef98e028c153785e50c65980e410534d6e0caee881f20aca14af04e",
                    " \"9cbe1023f4fb427c16e00ee50a6fcc9d43216a2153d4b4e406f06394e32c4a46"
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
                "count": 597,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "2be6327a2b03aed6322898941f4e6c7ca29de8e5",
                    "69affd6a91e38229fb655a62a52eb2b7af9fdfb4",
                    "acfae6aa71276bdaa0f8f7046e4aa9254f080c2c"
                ]
            },
            {
                "name": "LummaStealer",
                "count": 535,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "e2293f74d8d72bde90bb0424038259a9e3126e1b",
                    "69101b8edfa5d5e2ead4512a6d71c84748b0c012",
                    "1d28cc6dca52e95f859739c39a04d794671f66d9"
                ]
            },
            {
                "name": " \"XWorm",
                "count": 403,
                "types": [
                    "hash"
                ],
                "sampleIndicators": [
                    " \"8d9504c5d5d8daabf8729523ea899b42a6cba01c4a0ada144b45068d42d17761",
                    " \"5ffd180ac98664de3927eeb537807250b6b7dd4ecd9bf58d60b4263dc0726adc",
                    " \"bd48f44bdd31045b9615fedf78ab2e5702dcb336e0995a8b898bcaa03ebe8d10"
                ]
            },
            {
                "name": "Rhadamanthys",
                "count": 355,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "f999c0da0e983becc1c935444c5e609be26b0bcf",
                    "4101579ae950c954fc1096adf43bdefcf0364cfd",
                    "0c3ee8188ce35b6bb11d5b12a0e1e28310188b4e"
                ]
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious URLs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": "SSH Attacks",
        "totalAttacksThisHour": 48578,
        "lastCalculated": "2025-12-29 18:33 IST"
    }
};
