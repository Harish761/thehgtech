// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-07-19T12:10:03.915885+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-07-19T12:10:03.532822+05:30",
    "lastUpdatedFormatted": "Jul 19, 2026 at 12:10 PM IST",
    "comparisonPeriod": "Jul 18 \u2013 Jul 19, 2026",
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
                "hxxps://portainer2[.]dnsalias[.]com/cgi-bin/home[.]ha/",
                "hxxps://sankaterd[.]click/",
                "hxxps://ep-es-6d66nqpjptck-hrghbucmhcc0cee9[.]z01[.]azurefd[.]net/Win20Errfb020/index[.]html",
                "hxxp://hui2-d7haese0czayeder[.]z03[.]azurefd[.]net/",
                "hxxps://cqy9[.]com/"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 685,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 685,
                "newInLastHour": 15,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"f7fe0d0be53dc875f6101bce77f3314b3ee40319106fc87da06bf93e6c51ac8c",
                " \"3fe7dd0ff92a06d6e832728c5be15f86092ab3b27827231410184adeeb689c21",
                " \"a531f3e6224862abd00091c4955d535ace2bb886df53bdcd59c3a32b44c93629",
                " \"8ec920a35a7c6dd60e4aeb3b1ed09cd344f4c5191d4314a05ce72bf757377c86",
                " \"af1d19bf26f31a5f31b2ae4ca5afd32760e2ade17e8bc90baac8ff4adcafc782"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1677,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1677,
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
                "1[.]159[.]90[.]31",
                "1[.]165[.]0[.]157",
                "1[.]183[.]161[.]88",
                "1[.]191[.]147[.]34",
                "1[.]192[.]129[.]106"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 5641,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 5641,
                "newInLastHour": 5641,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]0[.]164[.]165",
                "1[.]15[.]103[.]109",
                "1[.]15[.]227[.]58",
                "1[.]162[.]245[.]230",
                "1[.]169[.]229[.]100"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 20537,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 20537,
                "newInLastHour": 20537,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://42[.]239[.]109[.]169:54600/i",
                "hxxp://60[.]211[.]30[.]133:55771/bin[.]sh",
                "hxxp://182[.]116[.]116[.]107:37779/bin[.]sh",
                "hxxp://125[.]43[.]26[.]64:56438/i",
                "hxxps://qjhi[.]taktikkbet[.]com/0c0de1f9-1f9a-4674-b154-ed5a96c25296"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 3959,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 3959,
                "newInLastHour": 3857,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"hxxps://kayhector[.]com/\"",
                " \"101[.]42[.]255[.]92:8082\"",
                " \"8[.]134[.]108[.]73:22\"",
                " \"101[.]42[.]255[.]92:5353\"",
                " \"xexop[.]burritodelight[.]com\""
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
            "iocCount": 10228,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 10228,
                "newInLastHour": 0,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "1e5253b44aa68a4b31f0dfc07df48b31798debca",
                "7f563e6df9b87f615f2d492ba68d5df373a6ca26",
                "a6df6eca49e13a8c5ebba1f86ca4c5766b1c1b97",
                "3cf6a282d22b606bce0ba5ad74526257eff4cf81",
                "3fb1dbcabe3bab0eb06fefe295821bff1007fb25"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 52368,
            "activeSources": 8,
            "criticalAlerts": 31434,
            "activeCampaigns": 220
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 21228,
                "trend": "stable",
                "percentage": -3
            },
            {
                "category": "C2",
                "count": 10206,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 3277,
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
                "count": 20504,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://123[.]14[.]250[.]177:55198/bin[.]sh",
                    "hxxp://61[.]53[.]99[.]119:36871/i",
                    "hxxp://115[.]48[.]144[.]122:55166/i"
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
                    "1[.]12[.]65[.]64",
                    "1[.]159[.]90[.]31"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1677,
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
                "count": 1430,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "c31650da58712771ad83fd5c6cef97905a255cc5",
                    "e86cb30b97c8af13b305fa5cdc7357e23f633447",
                    "c4e9396a3a0543fa79cc0a8f23395f90a15e03b0"
                ]
            },
            {
                "name": " \"win.cobalt_strike\"",
                "count": 1394,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"101[.]200[.]193[.]211:44321\"",
                    " \"38[.]76[.]169[.]75:870\"",
                    " \"130[.]94[.]34[.]66:6666\""
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
                "count": 649,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "4264b1c47eac055ce604ef3509d23cd7e3bd584b",
                    "58a5ded84c93621d72ecc14b386e0e6bea5d103a",
                    "1dedacf3710f30c15b9e73c9d719a969eec755e5"
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
            },
            {
                "name": " \"unknown\"",
                "count": 546,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"117[.]72[.]189[.]142:8000\"",
                    " \"43[.]143[.]128[.]126:9443\"",
                    " \"43[.]143[.]128[.]126:8081\""
                ]
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious URLs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": "SSH Attacks",
        "totalAttacksThisHour": 45355,
        "lastCalculated": "2026-07-19 12:10 IST"
    }
};
