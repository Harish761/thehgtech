// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-08-14T11:13:18.994229+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-08-14T11:13:18.646137+05:30",
    "lastUpdatedFormatted": "Aug 14, 2026 at 11:13 AM IST",
    "comparisonPeriod": "Aug 13 \u2013 Aug 14, 2026",
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
                "hxxps://web3eoxdus[.]zapier[.]app/nav-en",
                "hxxps://ultralimiteprimedisponivel[.]s3[.]us-east-005[.]backblazeb2[.]com/aumento[.]html",
                "hxxps://gbinsta[.]cc/download-gb-insta-apk",
                "hxxp://6fa37b[.]icefactory[.]cl/",
                "hxxp://6f9a37[.]icefactory[.]cl/"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 1012,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 1012,
                "newInLastHour": 39,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"6bec9c6d951391bee4c83407d49d2a4f3b5bc674ed30a695523ffcdef0eab9e6",
                " \"be901f336181469ce578fa642ed57c5ce81b4dff4ab12ab7cc19b518561b1685",
                " \"9a42875130fda04b169f9aa2890131fc2635f099ebb13acd5df473f33b45146b",
                " \"c2ed06ed137a8ea8dbbad3a8239c265f6941ec9905e83f22ab08b48873fc28ee",
                " \"5be5d9d0c8c8397dc046d08513b52cd81574bf093d781af139d43e5a928f6c3f"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1685,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1685,
                "newInLastHour": 19,
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
                "1[.]140[.]210[.]242",
                "1[.]172[.]222[.]189",
                "1[.]181[.]200[.]22",
                "1[.]190[.]139[.]156",
                "1[.]192[.]129[.]106"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 5063,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 5063,
                "newInLastHour": 5063,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]0[.]164[.]165",
                "1[.]116[.]61[.]217",
                "1[.]14[.]184[.]80",
                "1[.]178[.]214[.]92",
                "1[.]203[.]174[.]102"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 16815,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 16815,
                "newInLastHour": 16815,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://2[.]26[.]81[.]46/eclipse[.]x86_64",
                "hxxp://2[.]26[.]81[.]46/bins/arm7",
                "hxxp://2[.]26[.]81[.]46/bins/mips",
                "hxxp://2[.]26[.]81[.]46/eclipse[.]sh4",
                "hxxp://2[.]26[.]81[.]46/bins/mpsl"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 4864,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 4864,
                "newInLastHour": 4539,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"badenmasters[.]ch\"",
                " \"3544[.]ch\"",
                " \"hxxps://run[.]sm188cuan[.]top/\"",
                " \"run[.]sm188cuan[.]top\"",
                " \"hxxps://run[.]088idr[.]org/\""
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
            "iocCount": 10427,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 10427,
                "newInLastHour": 222,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "2a68cf483216956f8162c0334a75dac483bfaac6",
                "7bbac2b67988c36fa1dbd3a75dc06629f766ccaf",
                "9b4c3ff8dc5891693f443320e3c1167c7cebe2b7",
                "0f1b05653c3b3ab3bb4ecd772dd024668cbe8df1",
                "9cd7f02e5bd6f0cb16141c3205aa9b00b0fce027"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 49944,
            "activeSources": 8,
            "criticalAlerts": 28096,
            "activeCampaigns": 247
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 17913,
                "trend": "stable",
                "percentage": -2
            },
            {
                "category": "C2",
                "count": 10183,
                "trend": "stable",
                "percentage": -2
            },
            {
                "category": "Botnet",
                "count": 3834,
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
                "count": 16763,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://39[.]79[.]136[.]25:46193/i",
                    "hxxp://182[.]119[.]232[.]182:58614/bin[.]sh",
                    "hxxp://123[.]12[.]165[.]138:33116/i"
                ]
            },
            {
                "name": "CINS Threat List",
                "count": 15000,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]12[.]229[.]231",
                    "1[.]15[.]14[.]29",
                    "1[.]172[.]222[.]189"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1666,
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
                "count": 1420,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "b5f071dd28b511f0b4b067507602a779feb4301f",
                    "714c56e9e207d5c8e08e1ca28cd9ba85f079d061",
                    "6647f9e4a2e273d7b78ff02be7114b0e9e2a719f"
                ]
            },
            {
                "name": " \"win.cobalt_strike\"",
                "count": 1320,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"185[.]92[.]190[.]175:8896\"",
                    " \"113[.]52[.]135[.]27:19666\"",
                    " \"68[.]64[.]182[.]169:110\""
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
                "count": 687,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "9b4c3ff8dc5891693f443320e3c1167c7cebe2b7",
                    "0f1b05653c3b3ab3bb4ecd772dd024668cbe8df1",
                    "b364395fee8c2e4c9eaf9a2531f6f7ac7bf8e4ae"
                ]
            },
            {
                "name": "Vidar",
                "count": 654,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "2a68cf483216956f8162c0334a75dac483bfaac6",
                    "7bbac2b67988c36fa1dbd3a75dc06629f766ccaf",
                    "78dc4f50971751cbf98b96219dd56f099095a717"
                ]
            },
            {
                "name": "LummaStealer",
                "count": 556,
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
                "name": " \"js.clearfake\"",
                "count": 517,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"gentleclub[.]xyz\"",
                    " \"henryfilters[.]com\"",
                    " \"harajinkhamismushait[.]com\""
                ]
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious URLs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": "malware_download",
        "totalAttacksThisHour": 42002,
        "lastCalculated": "2026-08-14 11:13 IST"
    }
};
