// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-03-28T22:18:07.450627+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-03-28T22:18:07.153694+05:30",
    "lastUpdatedFormatted": "Mar 28, 2026 at 10:18 PM IST",
    "comparisonPeriod": "Mar 27 \u2013 Mar 28, 2026",
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
                "hxxp://fatin-israq[.]github[.]io/Netflix-Home-Page-Clone/",
                "hxxp://ilanrubinmusic[.]com/wp-admin/user/outlook-uni-oldenburg[.]html",
                "hxxps://xpj4110[.]com/",
                "hxxps://www[.]robiox[.]com[.]py/users/358472406272/profile",
                "hxxps://aicuemmnagnay[.]netlify[.]app/?naps"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 604,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 604,
                "newInLastHour": 37,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"b9044552cba4ad20c61abbb817f3caf6d24e7b3c8e34260cc5d8fcfa1ac683a0",
                " \"a03f88de8b5800d21c4c6ba2e35441a32d5e185ca826e430ab8f9e2b9aa01b4c",
                " \"77c18af2a5280f9cfecd1a82f2a50aca6dfeba8858130b0a544752126e130d33",
                " \"0160a5877f558baf6bb1423fef633a7ec31991c5f6090a7468a3e916f28636de",
                " \"498548828d3d715aacb7900edaebaca3e7efd18bec6d19bed6db1a39962139f4"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1535,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1535,
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
                "1[.]191[.]127[.]124",
                "1[.]192[.]177[.]194",
                "1[.]193[.]63[.]107",
                "1[.]193[.]63[.]139",
                "1[.]193[.]63[.]83"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 4703,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 4703,
                "newInLastHour": 4703,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]15[.]33[.]90",
                "1[.]192[.]189[.]251",
                "1[.]192[.]202[.]92",
                "1[.]194[.]219[.]159",
                "1[.]214[.]117[.]218"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 21216,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 21216,
                "newInLastHour": 21216,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxps://zd3cs[.]apexbloomera[.]in[.]net/verification[.]google",
                "hxxps://columnbinary[.]apexbloomera[.]in[.]net/verification[.]google",
                "hxxp://116[.]138[.]44[.]176:49328/i",
                "hxxp://117[.]209[.]80[.]214:34946/i",
                "hxxps://rvfh[.]horizonprospera[.]in[.]net/verification[.]google"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 1124,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 1124,
                "newInLastHour": 1104,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"zd3cs[.]apexbloomera[.]in[.]net\"",
                " \"columnbinary[.]apexbloomera[.]in[.]net\"",
                " \"rvfh[.]horizonprospera[.]in[.]net\"",
                " \"gather-line[.]horizonprospera[.]in[.]net\"",
                " \"cgnnhw[.]catalystventure[.]in[.]net\""
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
            "iocCount": 9384,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 9384,
                "newInLastHour": 15,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "9b940adeda4f1d48f5560f76bb8bfc6e46202d3b",
                "2ebb8f663f93eb9c8f169cc09a86f6dba1c85584",
                "8501fab6623b7b8f968d2b522da81c514918df66",
                "77af6e6bafaf9effbba2f8cb33c80effe6efe773",
                "be1e2e424052ffaf96e10700d5acd79eceba25e4"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 49232,
            "activeSources": 8,
            "criticalAlerts": 31184,
            "activeCampaigns": 215
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 21802,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "C2",
                "count": 9382,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 348,
                "trend": "stable",
                "percentage": -5
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
                "percentage": 89
            },
            {
                "name": "Tech",
                "percentage": 10
            },
            {
                "name": "Finance",
                "percentage": 0
            }
        ],
        "campaigns": [
            {
                "name": "malware_download",
                "count": 21139,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxps://notmar[.]pozellant[.]in[.]net/verification[.]google",
                    "hxxp://42[.]227[.]176[.]23:38866/bin[.]sh",
                    "hxxps://kjpf3o93[.]radiantprospera[.]digital/?=check&&actmn=pJMOHCsZoEDmHUgU"
                ]
            },
            {
                "name": "CINS Threat List",
                "count": 15000,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]191[.]127[.]124",
                    "1[.]192[.]177[.]194",
                    "1[.]193[.]63[.]107"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1552,
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
                "count": 1394,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "9b940adeda4f1d48f5560f76bb8bfc6e46202d3b",
                    "7aa15098c33be8eea90c57dba4443afba38bce40",
                    "97ab9a73024e527aed8a20bbb1c573a21e35cc06"
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
                "count": 655,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "77af6e6bafaf9effbba2f8cb33c80effe6efe773",
                    "38e6803834672d7669a414b41a68a80800041309",
                    "b39ef781d5025993ed84ed86715d0e1ad16e3520"
                ]
            },
            {
                "name": "LummaStealer",
                "count": 548,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "2ebb8f663f93eb9c8f169cc09a86f6dba1c85584",
                    "f05a2876d9129ec057ecaedfac9cc37ebe2138ad",
                    "460e554589554e5dbaeb2c6f4c6aaf93e31da41a"
                ]
            },
            {
                "name": " \"js.clearfake\"",
                "count": 494,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"kjpf3o93[.]radiantprospera[.]digital\"",
                    " \"notmar[.]pozellant[.]in[.]net\"",
                    " \"zrwn3l2y[.]radiantprospera[.]digital\""
                ]
            },
            {
                "name": "Vidar",
                "count": 456,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "8501fab6623b7b8f968d2b522da81c514918df66",
                    "be1e2e424052ffaf96e10700d5acd79eceba25e4",
                    "cfbf57b8861a2ecb82c130d7815e61aabfa08c84"
                ]
            },
            {
                "name": "OffLoader",
                "count": 368,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "cfdefb9b571940cbf746e3ff7a8d159e75c3daad",
                    "f72b15a90b86d3b726a98c4b54b1912ff67f0014",
                    "f9c3b7e52c81b2001740f7fcdb39339549af04dc"
                ]
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious URLs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": "malware_download",
        "totalAttacksThisHour": 42381,
        "lastCalculated": "2026-03-28 22:18 IST"
    }
};
