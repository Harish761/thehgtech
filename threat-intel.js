// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-07-18T11:44:15.058373+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-07-18T11:44:14.669910+05:30",
    "lastUpdatedFormatted": "Jul 18, 2026 at 11:44 AM IST",
    "comparisonPeriod": "Jul 17 \u2013 Jul 18, 2026",
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
                "hxxp://m28u[.]top/",
                "hxxps://hivancouverjerichobeach[.]hostel[.]town/",
                "hxxps://ultraupgradeativo[.]s3[.]us-east-005[.]backblazeb2[.]com/aumento[.]html",
                "hxxps://www[.]buyinstagramfollowers44[.]blogspot[.]com/?m=1",
                "hxxps://roblox[.]iconce[.]com/imualabastabrock"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 914,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 914,
                "newInLastHour": 7,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"7d994783bb9aa144a1961ef4bc361ba9b8e25dc1bf8d379e029879961b2f6b81",
                " \"b8d0d1d3c56e15688c3ba831809dc346536cb0fd863a967c2c1fa44a8edec2db",
                " \"e3bbdddc5483baab0b11bc42c4dd6f160a874ce7efc4d9f11d8d354eb4d0e09f",
                " \"881188af4d6bbe7c4837ce7354842cb7772fe65341477749a893827191bc9b54",
                " \"e402ab774841035c2f4e07a4f11bae65ed89cc9632b77f4ee9e5917c5a541f43"
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
                "1[.]183[.]161[.]88",
                "1[.]191[.]147[.]34",
                "1[.]191[.]66[.]239",
                "1[.]192[.]129[.]106"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 5354,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 5354,
                "newInLastHour": 5354,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]0[.]164[.]165",
                "1[.]116[.]61[.]217",
                "1[.]14[.]203[.]20",
                "1[.]15[.]103[.]109",
                "1[.]15[.]227[.]58"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 20675,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 20675,
                "newInLastHour": 20675,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://110[.]37[.]127[.]45:52145/i",
                "hxxps://hdz7omr1[.]nextbahis[.]blog/?ublib=00d4f7ea-16b1-41d6-af41-493405c20829",
                "hxxp://115[.]56[.]127[.]191:53522/i",
                "hxxps://i0bep9cj[.]medallionfoodsinctempura[.]com/?ublib=7c37f001-8260-46b0-bee9-82b217b2ec2e",
                "hxxp://125[.]41[.]8[.]156:44972/i"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 5048,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 5048,
                "newInLastHour": 4991,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"47[.]101[.]51[.]235:8000\"",
                " \"47[.]101[.]51[.]235:8888\"",
                " \"208[.]87[.]201[.]226:28888\"",
                " \"208[.]87[.]201[.]226:5003\"",
                " \"hdz7omr1[.]nextbahis[.]blog\""
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
            "iocCount": 10226,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 10226,
                "newInLastHour": 0,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "a6df6eca49e13a8c5ebba1f86ca4c5766b1c1b97",
                "3cf6a282d22b606bce0ba5ad74526257eff4cf81",
                "3fb1dbcabe3bab0eb06fefe295821bff1007fb25",
                "50cad154b9d5fdd19c3f67162257de03d3a6afcd",
                "f9a55e7a59b0fcbd7df9f5a445475480368598ce"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 53845,
            "activeSources": 8,
            "criticalAlerts": 31804,
            "activeCampaigns": 231
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 21600,
                "trend": "stable",
                "percentage": -1
            },
            {
                "category": "C2",
                "count": 10204,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 4428,
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
                "count": 20644,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://220[.]202[.]89[.]211:49820/i",
                    "hxxp://125[.]43[.]226[.]48:37804/i",
                    "hxxp://113[.]221[.]99[.]137:37914/bin[.]sh"
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
                "count": 1676,
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
                "count": 1386,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"43[.]167[.]177[.]224:6666\"",
                    " \"43[.]167[.]177[.]224:22\"",
                    " \"43[.]144[.]20[.]144:5004\""
                ]
            },
            {
                "name": " \"win.metastealer\"",
                "count": 997,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"yyowcsswsesksomi[.]xyz\"",
                    " \"yyqewussumqweisi[.]xyz\"",
                    " \"yyqisgekkgammukq[.]xyz\""
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
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious URLs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": "malware_download",
        "totalAttacksThisHour": 46333,
        "lastCalculated": "2026-07-18 11:44 IST"
    }
};
