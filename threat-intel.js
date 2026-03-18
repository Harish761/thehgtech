// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-03-18T19:18:39.730064+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-03-18T19:18:39.437106+05:30",
    "lastUpdatedFormatted": "Mar 18, 2026 at 07:18 PM IST",
    "comparisonPeriod": "Mar 17 \u2013 Mar 18, 2026",
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
                "hxxps://dracaroline[.]com/chvfz2wbz/",
                "hxxp://pub-502b05dd72194beeb3dbb59e5ca29d96[.]r2[.]dev/index[.]html",
                "hxxps://s3-deprecated[.]us-east-1[.]amazonaws[.]com/mashdwsa4115[.]jkdsaksimfssdawerfdd026fgfhgfdhsdhcfgthsdzd/index[.]html",
                "hxxps://confirmationportal[.]com/92457791-0bce-4181-b8dc-8c4510be8e3e/a/5a442cb9-c593-4961-8949-5914700c3a05/ccp?lid=bde818e3-49e4-42b7-8568-e80cac6cddcf",
                "hxxp://pdi[.]or[.]kr/"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 778,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 778,
                "newInLastHour": 161,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"1ceab50ed3e620490b2434b52a720e69b5f720cc545557ce1b7c5ccfad397806",
                " \"d0d65539d2aa308a16d29b02e74c7a7e54b87a7f7e6b880960d47561ff73f5ac",
                " \"9720400436419b66563adff2d10478390ef4ae6a64c2d6f9e928c87e24ea5c04",
                " \"27a5d818f690b4c0b1679381ee48ffafb8d3b4ad6247797c32698bd6992a224f",
                " \"1cf02c7f7f62f22e6a225977f9f72d9e98b60e61409dad09d8beb89c80a33a9c"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1527,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1527,
                "newInLastHour": 6,
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
                "1[.]15[.]15[.]189",
                "1[.]170[.]10[.]139",
                "1[.]172[.]216[.]100",
                "1[.]191[.]127[.]124"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 6039,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 6039,
                "newInLastHour": 6039,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]145[.]14[.]149",
                "1[.]162[.]198[.]111",
                "1[.]162[.]198[.]143",
                "1[.]164[.]175[.]189",
                "1[.]189[.]21[.]20"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 20214,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 20214,
                "newInLastHour": 20214,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxps://5hap-phase[.]yardnext[.]in[.]net/verification[.]google",
                "hxxp://61[.]53[.]87[.]82:40669/i",
                "hxxps://triline7en[.]yardnext[.]in[.]net/verification[.]google",
                "hxxp://60[.]22[.]19[.]229:60776/bin[.]sh",
                "hxxp://27[.]207[.]39[.]160:38486/i"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 2600,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 2600,
                "newInLastHour": 2568,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"oewl[.]yardnext[.]in[.]net\"",
                " \"5hap-phase[.]yardnext[.]in[.]net\"",
                " \"triline7en[.]yardnext[.]in[.]net\"",
                " \"c4mp-cast[.]yardnext[.]in[.]net\"",
                " \"38[.]148[.]242[.]188:6666\""
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
            "iocCount": 9304,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 9304,
                "newInLastHour": 47,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "a9af792faf99fff3d0df33db513b536fc8d5459c",
                "9a7d2413b51e8298dd81a5b972171256a92314a5",
                "a31fab540d1f334f2e1c17ec98037c4f091ff20e",
                "e1ce10280075e9e2f9e9a1ff614806cbe9e90875",
                "b05f82bc0a47f664788081d58bc969a5de187f3c"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 49197,
            "activeSources": 8,
            "criticalAlerts": 29796,
            "activeCampaigns": 219
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 20560,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "C2",
                "count": 9236,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 879,
                "trend": "up",
                "percentage": 11
            },
            {
                "category": "Phishing",
                "count": 303,
                "trend": "stable",
                "percentage": 0
            }
        ],
        "targetedSectors": [
            {
                "name": "General",
                "percentage": 95
            },
            {
                "name": "Tech",
                "percentage": 4
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
                    "hxxps://microneur[.]bokshire[.]in[.]net/verification[.]google",
                    "hxxp://115[.]53[.]44[.]74:40791/i",
                    "hxxp://182[.]127[.]128[.]122:48844/bin[.]sh"
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
                    "1[.]15[.]15[.]189",
                    "1[.]162[.]147[.]232"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1521,
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
                "count": 1387,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "ba3e7e73b6c654a979d4e4fe20b4aa24890b4518",
                    "e074dd74eb8eb98468a94eb43b3487fe2b7f5980",
                    "d5a586a42fd4e36396467ae8d16045a5efd6bada"
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
                "count": 634,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "d9fa0ea682b5e53c1fcad5edfc64b89fbfd468da",
                    "7692429d5ce694bd30c57fae26a56dd8fd960faf",
                    "f021dc8a50b47d94a454ff92d78bd1215597a759"
                ]
            },
            {
                "name": " \"unknown\"",
                "count": 596,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"hxxps://onnabarabane[.]net/script[.]sh\"",
                    " \"onnabarabane[.]net\"",
                    " \"69[.]5[.]189[.]8:56001\""
                ]
            },
            {
                "name": "LummaStealer",
                "count": 541,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "da0f6a5937d3c2d365ffeddb881b4136313e1afa",
                    "e30905555de39d1e66f834f672f6f14e9106839b",
                    "f9e8d701de1740086da792e2c9be70df261e1832"
                ]
            },
            {
                "name": " \"elf.mozi\"",
                "count": 529,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"hxxp://110[.]37[.]5[.]55:33751/i\"",
                    " \"hxxp://115[.]48[.]47[.]68:55835/i\"",
                    " \"hxxp://42[.]59[.]115[.]239:60942/i\""
                ]
            },
            {
                "name": " \"js.clearfake\"",
                "count": 479,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"microneur[.]bokshire[.]in[.]net\"",
                    " \"neuronbundle[.]bokshire[.]in[.]net\"",
                    " \"5andb0x-gate[.]bokshire[.]in[.]net\""
                ]
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious URLs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": "malware_download",
        "totalAttacksThisHour": 44340,
        "lastCalculated": "2026-03-18 19:18 IST"
    }
};
