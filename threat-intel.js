// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-01-24T10:12:47.777719+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-01-24T10:12:47.505508+05:30",
    "lastUpdatedFormatted": "Jan 24, 2026 at 10:12 AM IST",
    "comparisonPeriod": "Jan 23 \u2013 Jan 24, 2026",
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
                "hxxp://tolk[.]shorturl[.]lk/xhdsuR",
                "hxxps://dub[.]sh/roblox[.]com/users/12905270/profile",
                "hxxps://90466[.]xyz/",
                "hxxps://ipfs[.]io/ipfs/bafkreihhdl3zdd3ehxanyooy6jk5mk5cjljreclfmhnecbdsmjdeb67ux4?eta%5C=3mail@a[.]b[.]c0",
                "hxxp://com-630[.]pages[.]dev/dp/b084ntf5zy"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 610,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 610,
                "newInLastHour": 6,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"7e1ae4f4c2cb1a45847eeda1a2bf1af60bab7333f598153202373c4cc2954891",
                " \"f6d5705c99bf3a6aa78f41478335a86f5464171aaeda34dfb3b3098de2ac1ab3",
                " \"3d088f4b831e81434b09cd7665f5c19af08f499ca8c1092395fdf8f6c3f4a70f",
                " \"321d537e5d48cef97ce131a77fb06e76404862270393c85906052ddfef0d323f",
                " \"67f70f4f289129b249db493aa4a6b171c0f3ddcd182991ed148fe8b24a658e65"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1445,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1445,
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
                "1[.]0[.]170[.]118",
                "1[.]15[.]118[.]23",
                "1[.]172[.]240[.]233",
                "1[.]178[.]38[.]103",
                "1[.]183[.]226[.]231"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 5840,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 5840,
                "newInLastHour": 5840,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]1[.]178[.]75",
                "1[.]12[.]251[.]79",
                "1[.]12[.]64[.]80",
                "1[.]178[.]38[.]103",
                "1[.]214[.]197[.]163"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 19879,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 19879,
                "newInLastHour": 19879,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://42[.]56[.]48[.]219:56002/i",
                "hxxp://42[.]227[.]238[.]5:39269/i",
                "hxxp://110[.]38[.]215[.]152:44653/bin[.]sh",
                "hxxp://175[.]175[.]57[.]120:39949/bin[.]sh",
                "hxxp://117[.]211[.]35[.]134:52980/bin[.]sh"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 928,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 928,
                "newInLastHour": 765,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"16[.]52[.]76[.]32:46796\"",
                " \"3[.]29[.]27[.]216:17823\"",
                " \"54[.]167[.]219[.]87:46949\"",
                " \"54[.]167[.]219[.]87:54799\"",
                " \"44[.]211[.]134[.]122:8081\""
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
            "iocCount": 8803,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 8803,
                "newInLastHour": 0,
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
            "totalIndicators": 47032,
            "activeSources": 8,
            "criticalAlerts": 29379,
            "activeCampaigns": 219
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 20586,
                "trend": "stable",
                "percentage": -5
            },
            {
                "category": "C2",
                "count": 8793,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 626,
                "trend": "stable",
                "percentage": 1
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
                "count": 19830,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://130[.]12[.]180[.]43/files/8460986495/UMd3Upb[.]exe",
                    "hxxp://110[.]39[.]251[.]127:42786/bin[.]sh",
                    "hxxp://123[.]12[.]193[.]242:47751/i"
                ]
            },
            {
                "name": "CINS Threat List",
                "count": 15000,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]0[.]170[.]118",
                    "1[.]15[.]118[.]23",
                    "1[.]172[.]240[.]233"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1457,
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
                "count": 1375,
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
                "count": 609,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "b0d85051fda8ae726a60c9ed332ee7cd8ffeab80",
                    "68cda8cc402c23eb7b13968c1e8f01aae03db4bb",
                    "b22fd267edd11cd730bbc12794103f4f4bd1c28d"
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
        "fastestRisingThreat": "SSH Attacks",
        "totalAttacksThisHour": 41796,
        "lastCalculated": "2026-01-24 10:12 IST"
    }
};
