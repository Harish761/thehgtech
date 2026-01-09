// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-01-09T22:11:10.708324+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-01-09T22:11:10.310807+05:30",
    "lastUpdatedFormatted": "Jan 09, 2026 at 10:11 PM IST",
    "comparisonPeriod": "Jan 08 \u2013 Jan 09, 2026",
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
                "hxxps://bit[.]proxette[.]cc/info?b=YTo0OntzOjU6ImxhYmVsIjtzOjA6IiI7czozOiJ1c3IiO2k6Mjk3O3M6NDoibm9wZCI7czoxMToiZmxleHByb3guY2MiO3M6MToibyI7aTozNTt9",
                "hxxp://davvnig[.]github[.]io/restpassword-login",
                "hxxp://sshekhar758[.]github[.]io/Projects",
                "hxxp://sso-uphold-com-cdnn-auth-en-u[.]webflow[.]io/",
                "hxxp://shilpa-sahu[.]github[.]io/Amazon-Clone-UI"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 582,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 582,
                "newInLastHour": 128,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"1fa7f5b08c2275aa9311cca1ffadfbba8f86bbe0dd77c416ab9390267e0b8d05",
                " \"e25da47252edc7ed892494815c79baaf3636efcc68f161a36bada405cdd0c045",
                " \"48a57dd1ea6713c13ce5abeaf1b1d2265e535544255639d01afea400a563a205",
                " \"5bcbae541bca0b90b562eaf7d569f26e80c6babae1adb4f6bc67f28896f31219",
                " \"d5b16407766fcd816fd45086ff9fdaad98b32d3581c21dad9ce91b4c49461f41"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1466,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1466,
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
                "1[.]14[.]3[.]240",
                "1[.]15[.]51[.]236",
                "1[.]157[.]99[.]66",
                "1[.]176[.]134[.]251",
                "1[.]176[.]134[.]253"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 5295,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 5295,
                "newInLastHour": 5295,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]161[.]39[.]103",
                "1[.]214[.]197[.]163",
                "1[.]214[.]42[.]172",
                "1[.]220[.]64[.]218",
                "1[.]234[.]13[.]164"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 24418,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 24418,
                "newInLastHour": 24418,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://115[.]51[.]89[.]17:36199/",
                "hxxp://netrip[.]ddns[.]net/systemcl/arc/",
                "hxxp://195[.]158[.]88[.]156:13509/",
                "hxxp://down10d[.]zol[.]com[.]cn/zoldownload/",
                "hxxp://194[.]26[.]141[.]203/file/avahi_daemon/"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 7431,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 7431,
                "newInLastHour": 7245,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"170[.]64[.]236[.]179:8081\"",
                " \"107[.]173[.]135[.]36:15001\"",
                " \"119[.]45[.]243[.]43:8443\"",
                " \"119[.]45[.]157[.]93:8443\"",
                " \"185[.]193[.]126[.]158:60000\""
            ]
        },
        "Feodo Tracker": {
            "description": "Botnet C2 server IPs from Feodo Tracker. Tracks Dridex, Emotet, TrickBot, QakBot, and BazarLoader.",
            "website": "https://feodotracker.abuse.ch/",
            "updateFrequency": "Hourly",
            "iocCount": 4,
            "iocDataUrl": "https://thehgtech.com/ioc-data/feodo-tracker.json",
            "stats": {
                "total": 4,
                "newInLastHour": 4,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "137[.]184[.]9[.]29",
                "162[.]243[.]103[.]246",
                "167[.]86[.]75[.]145",
                "50[.]16[.]16[.]211"
            ]
        },
        "SSL Blacklist": {
            "description": "Malicious SSL certificates used by botnet C2 servers. Helps detect encrypted malware communications.",
            "website": "https://sslbl.abuse.ch/",
            "updateFrequency": "Daily",
            "iocCount": 8745,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 8745,
                "newInLastHour": 1,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "200bfaa32c985a0ff50f1505352ac510d2ed893d",
                "b73dc00950e4a6e8c228abf884c937e895a35b96",
                "9e4234cb97f80f891401c53044b55f00884362f1",
                "14f06e58d7ad9144863664dac627b8293e22aa0f",
                "f2a9a3c91bcb36779ab75ee49dad7d46b6b0dac4"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 57296,
            "activeSources": 8,
            "criticalAlerts": 33163,
            "activeCampaigns": 212
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 24442,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "C2",
                "count": 8721,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 7121,
                "trend": "up",
                "percentage": 1024
            },
            {
                "category": "Phishing",
                "count": 301,
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
                "count": 23883,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://123[.]11[.]14[.]55:43536/bin[.]sh",
                    "hxxp://113[.]236[.]132[.]166:55666/i",
                    "hxxp://115[.]49[.]7[.]189:37277/bin[.]sh"
                ]
            },
            {
                "name": "CINS Threat List",
                "count": 15000,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]14[.]3[.]240",
                    "1[.]15[.]51[.]236",
                    "1[.]157[.]99[.]66"
                ]
            },
            {
                "name": " \"unknown\"",
                "count": 6537,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"16[.]171[.]174[.]8:3333\"",
                    " \"41[.]59[.]91[.]197:8443\"",
                    " \"172[.]104[.]190[.]69:3333\""
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1465,
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
                "count": 1364,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "042a15f1d8ee27877713f2981272b7c125b6ec18",
                    "1a5aa767c2675014c5c0a10b2d9f4c63844a84f8",
                    "3a56a66eb43b679afa1edb58e0fddcadf74bb2a4"
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
                "count": 601,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "f14faecdb4b6a8e4722eff35b08ea8dfadf7b5f4",
                    "2be6327a2b03aed6322898941f4e6c7ca29de8e5",
                    "69affd6a91e38229fb655a62a52eb2b7af9fdfb4"
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
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious URLs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": "malware_download",
        "totalAttacksThisHour": 52392,
        "lastCalculated": "2026-01-09 22:11 IST"
    }
};
