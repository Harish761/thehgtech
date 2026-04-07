// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-04-08T02:30:12.374039+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-04-08T02:30:12.078634+05:30",
    "lastUpdatedFormatted": "Apr 08, 2026 at 02:30 AM IST",
    "comparisonPeriod": "Apr 07 \u2013 Apr 08, 2026",
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
                "hxxps://yashraj014[.]github[.]io/amazon-ui-clone/",
                "hxxp://aidasdir[.]github[.]io/MyEtherWallet/",
                "hxxps://webfun[.]website/landingpages/a462b1ba-cbb5-4aec-853c-99f6af486dd1/jhAEYEtInnqYxzPh_N4lL-B6doAiM3LckFuEP39p2Kc",
                "hxxps://www[.]robiox[.]com[.]py/users/144555541485/profile",
                "hxxps://consultacessoveicular[.]shop/"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 796,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 796,
                "newInLastHour": 1,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"f6a02666b49de9f444eef5d3ed6d810e8fd4e1251913db7c03f134478eb56efa",
                " \"47a9df1e4996d85028c465e9d943f3718578a5e1630ac08598600f9b5db5cf42",
                " \"ed56451bcc22bf64da6699061e8e749a82e6fa678b1108a0ba1049a68b8fd314",
                " \"549386ddf72495c938c2e4da895cb69dc3712f315fd84a07c0f9b57bc7f5c0c9",
                " \"63d81be212ebb69379fad022425480f7c4434ecfe4ce7ee3e3dd2c5d16bd4459"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1589,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1589,
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
                "1[.]0[.]248[.]118",
                "1[.]14[.]3[.]240",
                "1[.]157[.]69[.]63",
                "1[.]159[.]183[.]23",
                "1[.]159[.]69[.]241"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 4489,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 4489,
                "newInLastHour": 4489,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]13[.]22[.]203",
                "1[.]145[.]124[.]191",
                "1[.]207[.]102[.]177",
                "1[.]214[.]117[.]218",
                "1[.]214[.]197[.]163"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 21985,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 21985,
                "newInLastHour": 21985,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxps://vh47kmg3[.]nexuspatronage[.]digital/?=check&&actmn=EgkqhhvkjKJrJZXR",
                "hxxps://engine-hub[.]dialectrixengine[.]in[.]net/05fe317c-0981-4de2-bc8a-930d369db441/verification[.]google",
                "hxxps://process-io[.]dialectrixengine[.]in[.]net/05fe317c-0981-4de2-bc8a-930d369db441/verification[.]google",
                "hxxp://85[.]239[.]147[.]6/files/7024015129/0kEEdMR[.]exe",
                "hxxps://state-api[.]dialectrixengine[.]in[.]net/05fe317c-0981-4de2-bc8a-930d369db441/verification[.]google"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 1024,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 1024,
                "newInLastHour": 1018,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"vh47kmg3[.]nexuspatronage[.]digital\"",
                " \"engine-hub[.]dialectrixengine[.]in[.]net\"",
                " \"1on7q5g5[.]nexuspatronage[.]digital\"",
                " \"process-io[.]dialectrixengine[.]in[.]net\"",
                " \"state-api[.]dialectrixengine[.]in[.]net\""
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
            "iocCount": 9498,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 9498,
                "newInLastHour": 0,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "57beeab4afc1c37c717071048978266c9d48d9d5",
                "ed4739e216d716d1acf5ea5c7e0a1af900af57c3",
                "3eb4d7d8bce32ac81b93f1b828f32865d088eeec",
                "7e8dcf46f1bfd2574458730958b846d30cc24f63",
                "4866daa967432d5345a46c395fd6bd3825794c66"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 50158,
            "activeSources": 8,
            "criticalAlerts": 32258,
            "activeCampaigns": 199
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 22782,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "C2",
                "count": 9476,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 330,
                "trend": "stable",
                "percentage": 2
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
                "percentage": 87
            },
            {
                "name": "Tech",
                "percentage": 12
            },
            {
                "name": "Finance",
                "percentage": 0
            }
        ],
        "campaigns": [
            {
                "name": "malware_download",
                "count": 21954,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://216[.]107[.]139[.]197/RSW0",
                    "hxxps://growth-hub[.]ontogenesiscore[.]in[.]net/05fe317c-0981-4de2-bc8a-930d369db441/verification[.]google",
                    "hxxps://cell-logic[.]ontogenesiscore[.]in[.]net/05fe317c-0981-4de2-bc8a-930d369db441/verification[.]google"
                ]
            },
            {
                "name": "CINS Threat List",
                "count": 15000,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]123[.]227[.]253",
                    "1[.]157[.]69[.]63",
                    "1[.]159[.]183[.]23"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1590,
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
                "count": 1400,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "e7decd829f1c348a1d04ac6d5ce1470aa2ef4cea",
                    "42f9fb369604befacac247a220b2275c8e3dbb00",
                    "ee5e5cb42ab6153eb050d953ba58f03cd5b64f80"
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
                "count": 663,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "158c34ec24ca20df4cdce6f85d495a752d1cf446",
                    "5d2d24993bfab8579ce17ba0d5a18ab657c2fc90",
                    "9149e1f1d80f8e5b8bcf4311cfe94d40f7dc4702"
                ]
            },
            {
                "name": "LummaStealer",
                "count": 551,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "f58ffe7484653b53cea539b23da25bc8eeeb2c05",
                    "2ebb8f663f93eb9c8f169cc09a86f6dba1c85584",
                    "f05a2876d9129ec057ecaedfac9cc37ebe2138ad"
                ]
            },
            {
                "name": "Vidar",
                "count": 478,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "57beeab4afc1c37c717071048978266c9d48d9d5",
                    "be97447135b5337ed8a791276e6bcfe4d6f556f7",
                    "1c1edfab550d090f1278bcdcafc986ac89827f5c"
                ]
            },
            {
                "name": " \"Mirai",
                "count": 393,
                "types": [
                    "hash"
                ],
                "sampleIndicators": [
                    " \"43d75af7e645b2a3ead0008567729b59c2c628251880be53deaadfe95b5e2f6a",
                    " \"f7a49b6ab9eb1b400ce26b4db8f176ecfcbff4b2037c1393edc76eab2ca5d037",
                    " \"0c72da0d7145513af26f37b08ccbacea87e67a2978e3929e85b077983d76d340"
                ]
            },
            {
                "name": "OffLoader",
                "count": 385,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "448e34bdaa4390ecde578cf01c491ed16d6563a0",
                    "515c241fb00cbbf17827c3bfbdb7ad5378ed0fcd",
                    "7442a9c99b2b550565fea4c0c5a69a7d441c475e"
                ]
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious URLs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": "malware_download",
        "totalAttacksThisHour": 42798,
        "lastCalculated": "2026-04-08 02:30 IST"
    }
};
