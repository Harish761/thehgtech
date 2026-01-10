// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-01-10T22:06:15.562344+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-01-10T22:06:15.209869+05:30",
    "lastUpdatedFormatted": "Jan 10, 2026 at 10:06 PM IST",
    "comparisonPeriod": "Jan 09 \u2013 Jan 10, 2026",
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
                "hxxp://www[.]h74e[.]xyz/",
                "hxxp://www[.]x80w[.]xyz/",
                "hxxps://wpner[.]cc/IhSmCeXL/?cadeaux-de-noel-amazon-2025[.]html",
                "hxxp://www[.]r31x[.]xyz/",
                "hxxp://www[.]p34l[.]xyz/"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 817,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 817,
                "newInLastHour": 137,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"ae7c5613ab50af19e36ed0f7cece02006a385abe933ef131edb7ee8235dfac7e",
                " \"05def39cb5d68efcc83c06b47c499a5f61f805a254110cf5787a036902ba3611",
                " \"23a8454c420170d6111a59b49db323d750b6f7d89f6ca41d7bf8fece045aa59d",
                " \"6b679b3256fcd416e13d4af1192344761179dc9091840d638911b852defa5fa2",
                " \"3bea60b226e676d1da97c01b675500089259a926845a93b71df9dc24f59d5053"
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
                "1[.]10[.]247[.]1",
                "1[.]15[.]14[.]29",
                "1[.]15[.]51[.]236",
                "1[.]170[.]47[.]115",
                "1[.]176[.]134[.]241"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 5356,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 5356,
                "newInLastHour": 5356,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]161[.]39[.]103",
                "1[.]194[.]236[.]11",
                "1[.]197[.]102[.]62",
                "1[.]214[.]197[.]163",
                "1[.]214[.]42[.]172"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 24048,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 24048,
                "newInLastHour": 24048,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://123[.]12[.]199[.]74:45249/i",
                "hxxp://218[.]60[.]254[.]147:54350/bin[.]sh",
                "hxxp://221[.]15[.]14[.]96:49179/bin[.]sh",
                "hxxp://115[.]61[.]16[.]253:33352/i",
                "hxxp://125[.]44[.]212[.]125:39798/i"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 7101,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 7101,
                "newInLastHour": 7101,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"hxxp://towerbingobongoboom[.]com:8080/updater?for=85A8192051669E4383E3D2041F07FDC6\"",
                " \"23[.]133[.]4[.]2:5178\"",
                " \"195[.]24[.]236[.]5:80\"",
                " \"154[.]85[.]44[.]24:8888\"",
                " \"85[.]237[.]211[.]100:31337\""
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
            "iocCount": 8762,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 8762,
                "newInLastHour": 17,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "9485d84666facdf62f9eb83088e526261477ca02",
                "e0ea6068f391170ab5ed0eec7f81183d6b9597e0",
                "aa32c04a00de32843bacb96f60c60a3ce34cbf05",
                "754974f9c9b1d75b2492ae363e7289124728d5b1",
                "ab3f93138fcf2dbaad6e32fe4a5e8c06ca499cfa"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 57217,
            "activeSources": 8,
            "criticalAlerts": 33386,
            "activeCampaigns": 191
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 24663,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "C2",
                "count": 8723,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 6880,
                "trend": "stable",
                "percentage": -2
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
                "count": 23927,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://112[.]248[.]160[.]112:47100/i",
                    "hxxp://39[.]87[.]29[.]154:33500/bin[.]sh",
                    "hxxp://123[.]5[.]124[.]238:55189/bin[.]sh"
                ]
            },
            {
                "name": "CINS Threat List",
                "count": 15000,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]10[.]247[.]1",
                    "1[.]15[.]14[.]29",
                    "1[.]15[.]51[.]236"
                ]
            },
            {
                "name": " \"unknown\"",
                "count": 6567,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"35[.]188[.]126[.]234:10443\"",
                    " \"159[.]69[.]214[.]152:13000\"",
                    " \"81[.]8[.]96[.]196:3333\""
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
                "count": 1367,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "8fa8b4de2a18dbf3bb43585b71891faf4c3ca8fc",
                    "7be9dbcc29554dd70c69f108d7763a35d7128ab1",
                    "014266e1afb2f9d30dd0616aaf27ec8fb6332fe2"
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
                "count": 602,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "659e6830e2b4abbaacfd7a6b8b16637dbc5465e0",
                    "f14faecdb4b6a8e4722eff35b08ea8dfadf7b5f4",
                    "2be6327a2b03aed6322898941f4e6c7ca29de8e5"
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
        "fastestRisingThreat": "SSH Attacks",
        "totalAttacksThisHour": 51964,
        "lastCalculated": "2026-01-10 22:06 IST"
    }
};
