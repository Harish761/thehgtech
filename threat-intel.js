// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-07-19T02:30:53.304654+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-07-19T02:30:52.890624+05:30",
    "lastUpdatedFormatted": "Jul 19, 2026 at 02:30 AM IST",
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
                "hxxp://blog-425-fsdg[.]blogspot[.]com/",
                "hxxps://www[.]ly-facebook[.]blogspot[.]com/",
                "hxxp://ilavor-brund-3b82fc-mrkt-grendal[.]pages[.]dev/",
                "hxxp://shopee-jkt505[.]blogspot[.]com/?m=1",
                "hxxps://steemcommunty[.]com/tradeoffer/4367896439649"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 804,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 804,
                "newInLastHour": 36,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"12f403c241fe472d840be10776e24d78613401efa752e523e9892253f18eb73f",
                " \"a4d9ff95947ec0aee0aa0344cc7c41076b1474a613ed8eb995c5ce52cc4dc77a",
                " \"0cc4b3d85067560d977bd3db51484d2073dc07eab3115b0d606214e6666e86e9",
                " \"d6bb2dc0431405c4158cc15ed0171fd3a53986bc79149ada27dec7b1edcf5b14",
                " \"de2242d7b25c7129db2db9d37c4d3b10388769a9d69c02ed24df4d9375ae9bfd"
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
                "1[.]12[.]65[.]64",
                "1[.]15[.]14[.]29",
                "1[.]177[.]162[.]2",
                "1[.]191[.]147[.]34",
                "1[.]191[.]66[.]239"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 5460,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 5460,
                "newInLastHour": 5460,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]0[.]164[.]165",
                "1[.]116[.]61[.]217",
                "1[.]15[.]103[.]109",
                "1[.]15[.]227[.]58",
                "1[.]162[.]231[.]16"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 21134,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 21134,
                "newInLastHour": 21134,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://46[.]216[.]199[.]241:56837/i",
                "hxxp://182[.]126[.]106[.]230:39438/bin[.]sh",
                "hxxps://fazv[.]jadoobet[.]pro/fc1af01c-888e-4ae6-b146-c765ed570eb1",
                "hxxp://36[.]70[.]238[.]164:33041/i",
                "hxxp://46[.]216[.]199[.]241:56837/bin[.]sh"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 3956,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 3956,
                "newInLastHour": 3920,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"hxxps://windows-update-local[.]rest\"",
                " \"fazv[.]jadoobet[.]pro\"",
                " \"inasa[.]pdfbama[.]com\"",
                " \"47[.]108[.]140[.]10:9443\"",
                " \"47[.]108[.]140[.]10:3306\""
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
                "newInLastHour": 2,
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
            "totalIndicators": 52988,
            "activeSources": 8,
            "criticalAlerts": 32134,
            "activeCampaigns": 214
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 21930,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "C2",
                "count": 10204,
                "trend": "stable",
                "percentage": 1
            },
            {
                "category": "Botnet",
                "count": 3272,
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
                "count": 21122,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxps://jfwh[.]hazzarat[.]com/8a24b4c9-c882-422c-97f0-2be6703aafb2",
                    "hxxp://41[.]249[.]237[.]211:53635/bin[.]sh",
                    "hxxps://xhozx[.]onjabet1[.]com/e127eaad-917e-4d5b-9385-96ab6b96d8d7"
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
                    "1[.]191[.]66[.]239",
                    "1[.]192[.]129[.]106"
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
                "count": 1392,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"101[.]126[.]10[.]34:22\"",
                    " \"47[.]105[.]36[.]109:22\"",
                    " \"116[.]11[.]4[.]136:10443\""
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
                "count": 647,
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
                "count": 519,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"221[.]132[.]16[.]23:4444\"",
                    " \"221[.]132[.]16[.]23:9392\"",
                    " \"113[.]44[.]90[.]0:22\""
                ]
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious URLs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": " \"py.venus_stealer\"",
        "totalAttacksThisHour": 45857,
        "lastCalculated": "2026-07-19 02:30 IST"
    }
};
