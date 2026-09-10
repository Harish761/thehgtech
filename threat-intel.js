// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-09-10T18:22:52.331401+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-09-10T18:22:51.938955+05:30",
    "lastUpdatedFormatted": "Sep 10, 2026 at 06:22 PM IST",
    "comparisonPeriod": "Sep 09 \u2013 Sep 10, 2026",
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
                "hxxp://sso---secure-robinhood--coms[.]webflow[.]io/",
                "hxxp://www[.]transfer-to-click[.]vercel[.]app/",
                "hxxps://mail-email-ionos--refactored-octo-computing-machine-production[.]up[.]railway[.]app/",
                "hxxp://metamask-update[.]github[.]io/",
                "hxxps://pembatalan-pinjamaanz[.]vrr[.]my[.]id/"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 988,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 988,
                "newInLastHour": 347,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"1f912d02d0e790f5da37ce25b366868aab67ec58d9ccf8d6ba7b25b49d722620",
                " \"3ac2984fed333b82ee4e58332df41cfb31f6f6f56b3e00285febef138f2bd864",
                " \"9aba970c5a0c5aa17d30720718a12c4bad31d826ef0e603c06c454d7b585fcde",
                " \"b1507fec0d085fb2c5aaaae94ee180f30cf4e628b6e30f7a4f6c20f509ffb1c5",
                " \"a283f8fa8b08688bac38396e9b59aacf89037577177611df9891c58a0739d4a9"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1699,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1699,
                "newInLastHour": 2,
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
                "1[.]145[.]32[.]156",
                "1[.]177[.]162[.]3",
                "1[.]181[.]200[.]22",
                "1[.]183[.]160[.]23"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 5360,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 5360,
                "newInLastHour": 5360,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]0[.]164[.]165",
                "1[.]174[.]197[.]92",
                "1[.]214[.]214[.]114",
                "1[.]222[.]42[.]237",
                "1[.]234[.]27[.]159"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 13589,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 13589,
                "newInLastHour": 13589,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://94[.]249[.]188[.]204/bins/arm5",
                "hxxp://176[.]65[.]149[.]210/bins/arm",
                "hxxp://94[.]249[.]188[.]204/bins/arm6",
                "hxxp://94[.]249[.]188[.]204/bins/x86_64",
                "hxxp://176[.]65[.]149[.]210/bins/mips"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 6010,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 6010,
                "newInLastHour": 5801,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"hxxps://cdn[.]jsdelivr[.]net/gh/34-19-44r/573-45-43cvi/B5-B0-74\"",
                " \"ponpesinayatullah[.]com\"",
                " \"quicksilvercleaning[.]ca\"",
                " \"pilotmonkeys[.]com\"",
                " \"qalbbyam[.]com\""
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
            "iocCount": 10674,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 10674,
                "newInLastHour": 41,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "da016d8c7ef2176f549cd35927d92a6d9cc9e253",
                "199e1fd0a2f1c805aae75b33803d0e27b874b892",
                "5df1d8183a0c35eed21884c00e84299ded6ece0c",
                "ad1e251a18db0657b238f75305b312593a6276a4",
                "28f2252914fd660fb663fae3995bfa2202285cfe"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 51336,
            "activeSources": 8,
            "criticalAlerts": 24709,
            "activeCampaigns": 251
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 14088,
                "trend": "stable",
                "percentage": -5
            },
            {
                "category": "C2",
                "count": 10621,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 4185,
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
            },
            {
                "name": "Government",
                "percentage": 0
            }
        ],
        "campaigns": [
            {
                "name": "CINS Threat List",
                "count": 15000,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]117[.]59[.]169",
                    "1[.]12[.]229[.]231",
                    "1[.]183[.]148[.]62"
                ]
            },
            {
                "name": "malware_download",
                "count": 13308,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://59[.]97[.]253[.]127:60070/i",
                    "hxxp://113[.]206[.]10[.]45:47047/i",
                    "hxxp://42[.]239[.]230[.]18:57135/i"
                ]
            },
            {
                "name": " \"unknown_loader\"",
                "count": 1975,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"bitfundedxcryptobanter[.]com\"",
                    " \"butecoemcasacampinas[.]com[.]br\"",
                    " \"clinicaveterinarialescampes[.]com\""
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1708,
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
                "name": " \"js.iclickfix\"",
                "count": 1586,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"hxxps://www[.]abelmomaroc[.]com\"",
                    " \"rug[.]betweenthebunz[.]co\"",
                    " \"remoteitprofessional[.]com\""
                ]
            },
            {
                "name": "AsyncRAT",
                "count": 1446,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "559a55c8c7779e0037429794a8836a1039dbcdc3",
                    "8e492f36b0c1412f2d872dc9d51c974d27733d47",
                    "b7c32dab3a4cd691ddcfee4bc1fed6d1d6f81c18"
                ]
            },
            {
                "name": " \"win.cobalt_strike\"",
                "count": 1307,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"38[.]190[.]198[.]56:23251\"",
                    " \"100[.]87[.]53[.]0:8443\"",
                    " \"83[.]229[.]123[.]249:22\""
                ]
            },
            {
                "name": " \"js.clearfake\"",
                "count": 1018,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"luminica[.]com[.]mx\"",
                    " \"mijnvirtueelassistent[.]be\"",
                    " \"gasgas[.]sagamoove[.]com[.]br\""
                ]
            },
            {
                "name": "Vidar",
                "count": 757,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "1edaae5bb268c6ec2f90076a7c47b7bfbc531a15",
                    "2be2964d2711f536de55aa929fa612ba69ebc405",
                    "b1709ae370ca3fb7ddb3fb49b6c1fca1303a4a97"
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
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious IPs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": "SSH Attacks",
        "totalAttacksThisHour": 40445,
        "lastCalculated": "2026-09-10 18:22 IST"
    }
};
