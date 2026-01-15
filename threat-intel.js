// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-01-15T22:19:10.430811+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-01-15T22:19:10.133854+05:30",
    "lastUpdatedFormatted": "Jan 15, 2026 at 10:19 PM IST",
    "comparisonPeriod": "Jan 14 \u2013 Jan 15, 2026",
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
                "hxxps://asfkxsojjjtfclcez3bydwxee40fujby[.]lambda-url[.]us-east-1[.]on[.]aws/OnDv-ViEw-vyLQ5NINAlQd7JYwyEBwWSwzPCKqy5v7bugFeRgplfJQCQHXa4_OmPMKoJBDIAYG1xC_coeaI83RsmHKdKD9RseAeDEEoivFLNWLBRBDcokb0WovVu8NXKnlc9CZTiF7tpUz1qAwaq0ReLHvYMpva6doYvAr7lssfvbGT7ybz/bD3BX4A4Tmjrh?a=c3dha2VAb3RzdWthLmNvLnVr",
                "hxxps://asfkxsojjjtfclcez3bydwxee40fujby[.]lambda-url[.]us-east-1[.]on[.]aws/?e=c3dha2VAb3RzdWthLmNvLnVr",
                "hxxps://origemferramentaria[.]com[.]br/desk",
                "hxxp://mail[.]allhrgroup[.]com/s/63BZGFSVBWSFCDX7Y9/584dd8/90eab167-7429-489f-99f6-ce86e8d0d81a",
                "hxxps://cosemarozono[.]com/denmark/okil"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 625,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 625,
                "newInLastHour": 26,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"9b2a630e6d367fb9d1fe122c6dbc3859c65bde3e2a2a6be653a23d364911f1fa",
                " \"b28c97c1752c8923c3886dd20cf7785b9a1a5cf2c4dbd749d74266ef43f3f76c",
                " \"2fcedee5b1a3f8f31d2e535df688f3cad8e9e9ddc9594e347e4026d4340720ab",
                " \"463cf5ec206771d24077403cdaa1bb2d590bd04c07f0e30676437e2b341c77e7",
                " \"771ffd8cb7ae3f948e51745ba8ba1e4192fab63342bac75c465ac91b146c78c7"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1446,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1446,
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
                "1[.]0[.]170[.]118",
                "1[.]14[.]3[.]240",
                "1[.]15[.]118[.]23",
                "1[.]15[.]51[.]236",
                "1[.]157[.]99[.]66"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 7096,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 7096,
                "newInLastHour": 7096,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]13[.]79[.]212",
                "1[.]14[.]12[.]141",
                "1[.]14[.]254[.]146",
                "1[.]162[.]249[.]243",
                "1[.]178[.]38[.]103"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 24181,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 24181,
                "newInLastHour": 24181,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://130[.]12[.]180[.]2/nigga[.]sh",
                "hxxp://182[.]117[.]148[.]75:49525/bin[.]sh",
                "hxxp://42[.]86[.]137[.]133:47421/i",
                "hxxp://59[.]89[.]8[.]143:40893/bin[.]sh",
                "hxxp://www[.]marketing[.]bebe9mayotte[.]com/cgi-tmp/Service[.]ps1"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 995,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 995,
                "newInLastHour": 995,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"gracefulm[.]fun\"",
                " \"3[.]86[.]4[.]129:27464\"",
                " \"54[.]198[.]104[.]171:587\"",
                " \"54[.]85[.]127[.]48:50805\"",
                " \"172[.]245[.]242[.]116:2083\""
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
                "137[.]184[.]9[.]29",
                "162[.]243[.]103[.]246",
                "167[.]86[.]75[.]145",
                "34[.]204[.]119[.]63",
                "50[.]16[.]16[.]211"
            ]
        },
        "SSL Blacklist": {
            "description": "Malicious SSL certificates used by botnet C2 servers. Helps detect encrypted malware communications.",
            "website": "https://sslbl.abuse.ch/",
            "updateFrequency": "Daily",
            "iocCount": 8770,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 8770,
                "newInLastHour": 4,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "9b483450f76d361de12dac4cdfe6370f291692b9",
                "61e69d864771077edac32b3fad04fbf6f6060929",
                "c8e6ce07c7fdb13a8c284698d3dd604857a1147e",
                "8262ac683ec151cc53cb28d382ab595a7cb5aa3c",
                "fb503acf7aee005f9d10bd635e9f6f8e12a1b309"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 51367,
            "activeSources": 8,
            "criticalAlerts": 33610,
            "activeCampaigns": 194
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 24836,
                "trend": "stable",
                "percentage": 1
            },
            {
                "category": "C2",
                "count": 8774,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 562,
                "trend": "up",
                "percentage": 37
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
                "count": 24132,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://122[.]237[.]106[.]194:51455/i",
                    "hxxp://222[.]140[.]186[.]81:45909/bin[.]sh",
                    "hxxp://110[.]37[.]1[.]0:48718/bin[.]sh"
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
                    "1[.]14[.]3[.]240",
                    "1[.]15[.]118[.]23"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1462,
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
                "count": 1372,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "fb503acf7aee005f9d10bd635e9f6f8e12a1b309",
                    "9655effafe3c6c663b4e64c12e41c9495e4fdfee",
                    "f5ceb2552024990dc2a9057b8938c4a0c1ea9fe3"
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
                "count": 608,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "68cda8cc402c23eb7b13968c1e8f01aae03db4bb",
                    "b22fd267edd11cd730bbc12794103f4f4bd1c28d",
                    "588bfb310a84e9090cac64559864fb3ec92fc706"
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
                "name": " \"unknown_stealer\"",
                "count": 365,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"fbnmoon[.]today\"",
                    " \"fbnmoon[.]shop\"",
                    " \"86[.]54[.]42[.]197:8888\""
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
        "totalAttacksThisHour": 47608,
        "lastCalculated": "2026-01-15 22:19 IST"
    }
};
