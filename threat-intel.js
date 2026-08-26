// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-08-26T22:24:36.805097+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-08-26T22:24:36.402768+05:30",
    "lastUpdatedFormatted": "Aug 26, 2026 at 10:24 PM IST",
    "comparisonPeriod": "Aug 25 \u2013 Aug 26, 2026",
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
                "hxxps://2db39ur9[.]bndcy0h[.]com/",
                "hxxps://hk-dbs[.]org/IB/Welcome",
                "hxxps://signin[.]broker/E[.]E_VxQcthriusWax0fw",
                "hxxp://b50u[.]top/",
                "hxxp://secureloginxfiniity[.]weebly[.]com/"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 800,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 800,
                "newInLastHour": 101,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"c31f9424655fea54a94268e58276a86141e911d75fd60753da5278f6da16228f",
                " \"c98b05ad366e13c1f182a11fbc7458a521ecf073ccbf8df06676abcc4c8ae2ed",
                " \"4b3ab2a44fb4a811f1fbd26483fa09ebfb4354986b531ff5fe20164535918c18",
                " \"86d8ee69cd27bc0d193e298602665f9748e2ca1567c2a2e82b3e0d251f3b2a53",
                " \"277dc16af52e5af496b8f580e69c7fa3cbe05327462aa1dfeec70483ffb10eff"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1703,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1703,
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
                "1[.]12[.]229[.]231",
                "1[.]159[.]23[.]21",
                "1[.]177[.]162[.]4",
                "1[.]183[.]161[.]214",
                "1[.]189[.]125[.]236"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 5615,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 5615,
                "newInLastHour": 5615,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]0[.]164[.]165",
                "1[.]0[.]218[.]28",
                "1[.]14[.]64[.]225",
                "1[.]180[.]246[.]242",
                "1[.]2[.]174[.]204"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 16122,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 16122,
                "newInLastHour": 16122,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://182[.]116[.]121[.]1:57581/i",
                "hxxp://222[.]138[.]79[.]68:40887/i",
                "hxxp://62[.]60[.]226[.]140/files/8827821417/u3KZyzs[.]exe",
                "hxxp://219[.]157[.]58[.]187:41777/i",
                "hxxp://222[.]138[.]79[.]68:40887/bin[.]sh"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 6161,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 6161,
                "newInLastHour": 5921,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"ecoget[.]com[.]br\"",
                " \"drivesmartpeterborough[.]co[.]uk\"",
                " \"www[.]centrostudimusicali[.]it\"",
                " \"kyb5zwcp[.]en-us--xenburn[.]com\"",
                " \"www[.]dr-elist-reviews[.]com\""
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
            "iocCount": 10513,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 10513,
                "newInLastHour": 4,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "5df6480942779ca755ba42db5446f6492a3bb99b",
                "b73835be5d6f7dbb40f9df1347745bbb0963783c",
                "a4a31d169043dc65fd2b36a0352564244c820b1d",
                "aaf31b3f7acfe6dc859d1b6269c7e17337a61fd7",
                "b0dfb9c6353dc65a3b503bcb2258db457c5b5947"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 50775,
            "activeSources": 8,
            "criticalAlerts": 27473,
            "activeCampaigns": 264
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 16951,
                "trend": "stable",
                "percentage": 1
            },
            {
                "category": "C2",
                "count": 10522,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 4838,
                "trend": "stable",
                "percentage": 2
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
                "count": 16073,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://180[.]191[.]16[.]206:48801/bin[.]sh",
                    "hxxp://95[.]56[.]232[.]109:46966/bin[.]sh",
                    "hxxp://124[.]94[.]144[.]192:55986/bin[.]sh"
                ]
            },
            {
                "name": "CINS Threat List",
                "count": 15000,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]119[.]158[.]77",
                    "1[.]15[.]14[.]29",
                    "1[.]159[.]23[.]21"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1703,
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
                "count": 1440,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "7f44d36f1f6bd375ba4e4a7866328a76047ce498",
                    "f351f7dbe9c583f75758b39cd307f5359d110c73",
                    "7bf78d44f61a05e919479a1cf3e0ce158a50a0c6"
                ]
            },
            {
                "name": " \"win.cobalt_strike\"",
                "count": 1311,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"137[.]175[.]107[.]108:443\"",
                    " \"192[.]255[.]139[.]206:3306\"",
                    " \"192[.]255[.]139[.]206:10000\""
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
                "name": "Vidar",
                "count": 731,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "5d801efeb2e22aa0da901ffbce45db05a80a7b0b",
                    "64e6fe29e84ea3ecaaef08920d8ceb9567240166",
                    "7a9be497f84c09e7591ba7c7d69539a6e0468302"
                ]
            },
            {
                "name": "QuasarRAT",
                "count": 698,
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
                "name": " \"unknown\"",
                "count": 645,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"103[.]199[.]100[.]173:8848\"",
                    " \"47[.]98[.]129[.]153:8848\"",
                    " \"156[.]234[.]82[.]4:8848\""
                ]
            },
            {
                "name": "LummaStealer",
                "count": 558,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "a45080c92a0b2314966517a4643ebf280e88a11b",
                    "501d817bb1780acfe5e47082c43472bda8068e4d",
                    "2beac2ee8b2fe7625d4de9f5381d37f200965f91"
                ]
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious URLs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": "SSH Attacks",
        "totalAttacksThisHour": 43068,
        "lastCalculated": "2026-08-26 22:24 IST"
    }
};
