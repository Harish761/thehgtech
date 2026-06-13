// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-06-13T10:14:06.045393+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-06-13T10:14:05.769562+05:30",
    "lastUpdatedFormatted": "Jun 13, 2026 at 10:14 AM IST",
    "comparisonPeriod": "Jun 12 \u2013 Jun 13, 2026",
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
                "hxxps://happy-ice-990137[.]framer[.]app/",
                "hxxps://usc1[.]contabostorage[.]com/2c982e1d6d4c4f9d9a5d2f875ea22c09:oop/all-domaiin[.]html",
                "hxxps://lihi2[.]me/k5ia1",
                "hxxps://fiverr-work-space[.]pro/project/maria4",
                "hxxps://absolutecaninepa[.]com/DocuSign/Mac/utility[.]php/"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 593,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 593,
                "newInLastHour": 78,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"5898a89be72d94efe6bfe8831265ac8e49f09963aecac50d13fa33de83ff2bc0",
                " \"167f9070e37185603c0d3acd1b065165bf49df88c7f87bfb5de055a72250c3be",
                " \"62a16acb5bb11c197b3d19cb99097e53b380020572e810e7cb1e20eb452b5bd5",
                " \"8eeef15670aed1df7acfe01632deed4dbde7bc0439fee30bc7a7e12414c028bf",
                " \"f2cbfb04c06d7a29349769b1c9b2c5c6b9b34f1d9f827d89b444016069f36656"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1665,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1665,
                "newInLastHour": 11,
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
                "1[.]15[.]35[.]79",
                "1[.]164[.]107[.]152",
                "1[.]176[.]118[.]246",
                "1[.]181[.]114[.]38",
                "1[.]190[.]65[.]182"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 8334,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 8334,
                "newInLastHour": 8334,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]1[.]220[.]166",
                "1[.]117[.]229[.]57",
                "1[.]14[.]28[.]29",
                "1[.]15[.]134[.]139",
                "1[.]15[.]221[.]192"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 17500,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 17500,
                "newInLastHour": 17500,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://152[.]236[.]4[.]8/godisdead[.]1",
                "hxxp://152[.]236[.]4[.]8/godisdead[.]12",
                "hxxp://152[.]236[.]4[.]8/godisdead[.]3",
                "hxxp://152[.]236[.]4[.]8/godisdead[.]7",
                "hxxp://152[.]236[.]4[.]8/godisdead[.]13"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 5974,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 5974,
                "newInLastHour": 5883,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"1d3a5e780488095d6174bcdc49ee16c0ea802a6a\"",
                " \"347187dc7824a887b8f6a3272b3baf12\"",
                " \"f16c4398c613a78c391f2e721f95d879e9bd356c\"",
                " \"fceaf8af1a6e83e0a1ae35a4a2fa35a7\"",
                " \"49999f257686cfba6fe9504ff99a7776f998e3ba4887d28d2957f040ac346306\""
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
            "iocCount": 9864,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 9864,
                "newInLastHour": 33,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "e81bedd0d62805a9bcad2b1cd652435cd9a59bcc",
                "48cf152a0f547ca2ee9668e57c7136e157ec96f5",
                "78e36aa21e77cf60799204d1fb0bac1f063aec42",
                "e3c434a1fc0269f0ad0fb43cdf93494e726d2f68",
                "a4f368e4e4c305b60212c016a4f1fa3a3a96a3de"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 51365,
            "activeSources": 8,
            "criticalAlerts": 28421,
            "activeCampaigns": 232
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 18549,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "C2",
                "count": 9872,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 3165,
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
                "percentage": 97
            },
            {
                "name": "Tech",
                "percentage": 2
            },
            {
                "name": "Finance",
                "percentage": 0
            }
        ],
        "campaigns": [
            {
                "name": "malware_download",
                "count": 17942,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxps://9w0va69z[.]shansbartar[.]bet/?ublib=afe56ead-49bb-4363-bf54-a24800be8320",
                    "hxxp://185[.]221[.]254[.]132:39515/bin[.]sh",
                    "hxxp://182[.]113[.]200[.]72:48171/bin[.]sh"
                ]
            },
            {
                "name": "CINS Threat List",
                "count": 15000,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]10[.]185[.]224",
                    "1[.]119[.]194[.]226",
                    "1[.]15[.]35[.]79"
                ]
            },
            {
                "name": " \"js.clearfake\"",
                "count": 2275,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"9w0va69z[.]shansbartar[.]bet\"",
                    " \"4y04a82z[.]hattrickbetkade[.]com\"",
                    " \"raqmk[.]mururhesabdari[.]xyz\""
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1686,
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
                "name": " \"win.cobalt_strike\"",
                "count": 1433,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"8[.]217[.]12[.]212:48080\"",
                    " \"1[.]13[.]141[.]229:8080\"",
                    " \"1[.]13[.]141[.]229:80\""
                ]
            },
            {
                "name": "AsyncRAT",
                "count": 1414,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "6a998d33a87c7b36c2be68ed5c1c63929c0d6be4",
                    "167ddfd671ef30c31528515389cfdd11d9251558",
                    "d42a4a7e721a0503d81e3f47c72a0f93c53e4f2c"
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
                "count": 684,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "ae590545961e96de860ea7434c0e8c69b924de6f",
                    "28c3106cd1cec9a5dfec7f2ba3b0dd7e70784429",
                    "bf26c599e3f5ea932f7b8c592138d42d49837713"
                ]
            },
            {
                "name": "Vidar",
                "count": 579,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "e3c434a1fc0269f0ad0fb43cdf93494e726d2f68",
                    "0505fd5b451911f764cd457d591ec4d355e609c8",
                    "a8f5e9a021f8df5a11743cc4ad447ccf81e7c300"
                ]
            },
            {
                "name": "LummaStealer",
                "count": 554,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "272e76f605bec1da1ea719df8dc0e7269de7d44e",
                    "ab7f083d77dc2b1b71c0aec9a417e0a5a036a5f9",
                    "7ce02a4df627573696141e40970ef60e246f9f3f"
                ]
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious URLs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": "SSH Attacks",
        "totalAttacksThisHour": 47144,
        "lastCalculated": "2026-06-13 10:14 IST"
    }
};
