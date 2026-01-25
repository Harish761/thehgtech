// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-01-26T00:23:06.990323+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-01-26T00:23:06.722092+05:30",
    "lastUpdatedFormatted": "Jan 26, 2026 at 12:23 AM IST",
    "comparisonPeriod": "Jan 25 \u2013 Jan 26, 2026",
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
                "hxxp://www[.]84376[.]xyz/",
                "hxxp://alert-mygps[.]support/imei-6729",
                "hxxps://store[.]workshop-glock18[.]cc/steamapps/skins/advance/content/",
                "hxxps://www[.]x96m[.]xyz/",
                "hxxps://blyaddddd[.]vercel[.]app/"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 640,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 640,
                "newInLastHour": 35,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"fac0f5c3a994959fad9e8b1e590c2d31b34b01a88faa4173cd986e239f4c6fd7",
                " \"10c14d19b4a9658d8643ddb46b5db04dc80d0c7599303c4364e5fa374b24031f",
                " \"4ae6607472fad075c5c06c322b873c9255c512569ca40477b2925b864df9d34c",
                " \"349d21d4479dbaed53f98df40704afdb7159f4495f82c1a1c8410eebcbab061b",
                " \"e4f8402845543fc38678a05aed3d269508d8c49f4c2910a9ead64c62d949594c"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1464,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1464,
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
                "1[.]12[.]238[.]40",
                "1[.]14[.]112[.]62",
                "1[.]15[.]118[.]23",
                "1[.]15[.]14[.]29"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 5885,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 5885,
                "newInLastHour": 5885,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]12[.]251[.]79",
                "1[.]12[.]64[.]80",
                "1[.]15[.]95[.]172",
                "1[.]214[.]197[.]163",
                "1[.]214[.]42[.]172"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 19892,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 19892,
                "newInLastHour": 19892,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://42[.]224[.]11[.]244:57806/bin[.]sh",
                "hxxp://182[.]123[.]140[.]215:37579/i",
                "hxxp://110[.]38[.]219[.]155:40975/bin[.]sh",
                "hxxp://61[.]243[.]138[.]201:51714/bin[.]sh",
                "hxxp://222[.]140[.]130[.]146:60116/bin[.]sh"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 906,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 906,
                "newInLastHour": 745,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"99[.]83[.]215[.]169:8118\"",
                " \"52[.]31[.]80[.]221:443\"",
                " \"47[.]101[.]154[.]14:443\"",
                " \"212[.]95[.]55[.]172:2404\"",
                " \"206[.]82[.]9[.]156:8808\""
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
            "iocCount": 8814,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 8814,
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
            "totalIndicators": 46978,
            "activeSources": 8,
            "criticalAlerts": 29300,
            "activeCampaigns": 209
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 20507,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "C2",
                "count": 8793,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 608,
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
                "count": 19861,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://117[.]200[.]115[.]19:47953/i",
                    "hxxp://123[.]8[.]178[.]134:46134/i",
                    "hxxp://123[.]12[.]229[.]161:57312/i"
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
                    "1[.]14[.]112[.]62",
                    "1[.]15[.]118[.]23"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1464,
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
                "name": " \"Mirai",
                "count": 363,
                "types": [
                    "hash"
                ],
                "sampleIndicators": [
                    " \"b44cb571bd84e3a4b06c7260a8bd68c98e647d4cb68c3629f2c7263e88126a7d",
                    " \"93b9307448b4b74889840101b77336a5153e5f07c13d368445f29a881079bd40",
                    " \"239d22c2de73458f22e29788e84a4405791d7b744142568949f0e9d2f098a4cd"
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
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious URLs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": "SSH Attacks",
        "totalAttacksThisHour": 41863,
        "lastCalculated": "2026-01-26 00:23 IST"
    }
};
