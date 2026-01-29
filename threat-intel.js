// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-01-29T22:26:08.101669+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-01-29T22:26:07.833317+05:30",
    "lastUpdatedFormatted": "Jan 29, 2026 at 10:26 PM IST",
    "comparisonPeriod": "Jan 28 \u2013 Jan 29, 2026",
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
                "hxxps://telstraaserviceadmin[.]weebly[.]com/",
                "hxxps://www[.]mphengbona[.]co[.]za/finance/id[.]php",
                "hxxps://prevengo3[.]netsons[.]org/master/",
                "hxxps://host980825[.]stronawcal[.]pl/cembra/",
                "hxxp://t-mobile[.]wmbir[.]cc/pay"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 733,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 733,
                "newInLastHour": 50,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"90e509757a6106ec7e3d3555c02a80c0d6d6cbe6597b5fe2419492641ec76e5c",
                " \"6143dfdc6428ff6aa55662a3f765e02c50fd1b00f832d26e332dc9c98c2a8470",
                " \"6a6827eafd369653905715d2439ba34ee6bf5fd13d3ed7166fe7579f09f756d7",
                " \"13cfbfc7f4ca11fb21cd862d1f279a12112aa500224fa8739eda9a1a65c17bb5",
                " \"308efd60526b3b3cf9c64493f867c6e8b2cd3bc9b63a5eef99ea8009512f1637"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1467,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1467,
                "newInLastHour": 8,
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
                "1[.]15[.]14[.]29",
                "1[.]170[.]12[.]177",
                "1[.]170[.]24[.]236",
                "1[.]172[.]228[.]93",
                "1[.]173[.]76[.]221"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 5185,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 5185,
                "newInLastHour": 5185,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]15[.]114[.]102",
                "1[.]203[.]148[.]68",
                "1[.]214[.]197[.]163",
                "1[.]234[.]83[.]55",
                "1[.]248[.]227[.]206"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 19460,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 19460,
                "newInLastHour": 19460,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://31[.]56[.]120[.]29/cat[.]sh",
                "hxxp://31[.]56[.]120[.]29/iran[.]sparc",
                "hxxp://31[.]56[.]120[.]29/hiddenbin/boatnet[.]arm",
                "hxxp://31[.]56[.]120[.]29/hiddenbin/boatnet[.]mips",
                "hxxp://31[.]56[.]120[.]29/hiddenbin/boatnet[.]x86"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 782,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 782,
                "newInLastHour": 537,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"hxxps://cdn[.]jsdelivr[.]net/gh/web3call/ws014/st85\"",
                " \"tdrdomainnew[.]com\"",
                " \"207[.]189[.]164[.]112:9999\"",
                " \"151[.]64[.]17[.]150:8080\"",
                " \"103[.]177[.]47[.]176:3790\""
            ]
        },
        "Feodo Tracker": {
            "description": "Botnet C2 server IPs from Feodo Tracker. Tracks Dridex, Emotet, TrickBot, QakBot, and BazarLoader.",
            "website": "https://feodotracker.abuse.ch/",
            "updateFrequency": "Hourly",
            "iocCount": 6,
            "iocDataUrl": "https://thehgtech.com/ioc-data/feodo-tracker.json",
            "stats": {
                "total": 6,
                "newInLastHour": 6,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "137[.]184[.]9[.]29",
                "162[.]243[.]103[.]246",
                "167[.]86[.]75[.]145",
                "172[.]232[.]59[.]14",
                "34[.]204[.]119[.]63"
            ]
        },
        "SSL Blacklist": {
            "description": "Malicious SSL certificates used by botnet C2 servers. Helps detect encrypted malware communications.",
            "website": "https://sslbl.abuse.ch/",
            "updateFrequency": "Daily",
            "iocCount": 8806,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 8806,
                "newInLastHour": 24,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "8326aaafe66ed1eea591add8d79944837a05fed0",
                "a62fef1ec215606dbf0d3774ebe3f2a6ade92b38",
                "766d70a8be35c01b55e056b94d95f091b9843c14",
                "d88300b35fc29445f29fa339d3b842305c562256",
                "b0d85051fda8ae726a60c9ed332ee7cd8ffeab80"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 46422,
            "activeSources": 8,
            "criticalAlerts": 28875,
            "activeCampaigns": 215
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 20106,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "C2",
                "count": 8769,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 493,
                "trend": "stable",
                "percentage": 4
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
                "count": 19356,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://115[.]55[.]34[.]108:33163/i",
                    "hxxp://115[.]55[.]34[.]108:33163/bin[.]sh",
                    "hxxp://113[.]238[.]76[.]3:47684/i"
                ]
            },
            {
                "name": "CINS Threat List",
                "count": 15000,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]15[.]95[.]172",
                    "1[.]170[.]12[.]177",
                    "1[.]172[.]228[.]93"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1466,
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
                "count": 1374,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "76bc52f6b33ab0650dfdc050c5a15a227ce69ed0",
                    "e1eee0b991daeddda5eb790822cace341505480d",
                    "8262ac683ec151cc53cb28d382ab595a7cb5aa3c"
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
                "count": 605,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "b0d85051fda8ae726a60c9ed332ee7cd8ffeab80",
                    "d3d8dc6a9d41a817b319484d943d3c86be823650",
                    "ab3f93138fcf2dbaad6e32fe4a5e8c06ca499cfa"
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
            },
            {
                "name": "Gozi",
                "count": 349,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "61d991d7063e5e7470daa3059357f8282e680bb7",
                    "68b4fc7da837c64332b9f019adaef4c7038ec85d",
                    "e0f7072057c5deeb21c598673740debc7f6eb8a1"
                ]
            },
            {
                "name": "Malware",
                "count": 335,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "b73dc00950e4a6e8c228abf884c937e895a35b96",
                    "8dbe1d838c3ca9cb0217813c4909cb4be9fa39db",
                    "57f2f129b4b92f8a5a9b673485771a148c5d6159"
                ]
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious URLs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": "malware_download",
        "totalAttacksThisHour": 40570,
        "lastCalculated": "2026-01-29 22:26 IST"
    }
};
