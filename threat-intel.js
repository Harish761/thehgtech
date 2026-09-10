// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-09-11T03:59:25.552430+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-09-11T03:59:25.189192+05:30",
    "lastUpdatedFormatted": "Sep 11, 2026 at 03:59 AM IST",
    "comparisonPeriod": "Sep 10 \u2013 Sep 11, 2026",
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
            "iocCount": 1119,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 1119,
                "newInLastHour": 6,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"98f66f2bb6de3fb755ceac5b1a38fd3e45ad1727e825e7b11865dc67f4a00bf0",
                " \"81905a4e04a59b225dd0437cc23804a2f417fe760e0b3b320beaa07d23bd9daa",
                " \"93488f440d49aa01f7af8c85bb5b379a9d678030c0577a95b3e8f6499b4f3709",
                " \"f840ab670cff8c5a85b52a8133ad961aa8863abca0bcb1f12de1012e48d38dfb",
                " \"d66895d8da6d5eb1d8658647c80f66dce40236c06bb600f1c62a44a657f923b3"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1710,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1710,
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
                "1[.]117[.]59[.]169",
                "1[.]145[.]32[.]156",
                "1[.]15[.]14[.]29",
                "1[.]181[.]200[.]22",
                "1[.]183[.]41[.]170"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 5246,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 5246,
                "newInLastHour": 5246,
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
                "1[.]238[.]106[.]229"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 13711,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 13711,
                "newInLastHour": 13711,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://61[.]54[.]41[.]118:40394/i",
                "hxxp://115[.]55[.]151[.]48:39130/i",
                "hxxp://115[.]55[.]151[.]48:39130/bin[.]sh",
                "hxxp://182[.]113[.]28[.]110:45510/i",
                "hxxp://123[.]4[.]249[.]119:44171/i"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 11831,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 11831,
                "newInLastHour": 8010,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"lecato[.]workers[.]dev\"",
                " \"154[.]91[.]59[.]115:8074\"",
                " \"154[.]91[.]59[.]120:8074\"",
                " \"154[.]91[.]59[.]116:8074\"",
                " \"154[.]91[.]59[.]119:8074\""
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
            "iocCount": 10685,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 10685,
                "newInLastHour": 14,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "4a5cf0f4e8da154ed1c60ba064f0e733ce9c373e",
                "da016d8c7ef2176f549cd35927d92a6d9cc9e253",
                "199e1fd0a2f1c805aae75b33803d0e27b874b892",
                "5df1d8183a0c35eed21884c00e84299ded6ece0c",
                "ad1e251a18db0657b238f75305b312593a6276a4"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 53754,
            "activeSources": 8,
            "criticalAlerts": 25527,
            "activeCampaigns": 270
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 14878,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "C2",
                "count": 10649,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 4261,
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
                    "1[.]15[.]14[.]29"
                ]
            },
            {
                "name": "malware_download",
                "count": 13710,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://115[.]55[.]151[.]48:39130/i",
                    "hxxp://115[.]55[.]151[.]48:39130/bin[.]sh",
                    "hxxp://182[.]113[.]28[.]110:45510/i"
                ]
            },
            {
                "name": " \"win.asyncrat\"",
                "count": 3832,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"84[.]247[.]187[.]47:6661\"",
                    " \"84[.]247[.]187[.]47:8115\"",
                    " \"62[.]171[.]148[.]175:6606\""
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1710,
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
                "count": 1447,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "048bd151ab0a9c0add6d5bba9dc73521e42d9a20",
                    "559a55c8c7779e0037429794a8836a1039dbcdc3",
                    "8e492f36b0c1412f2d872dc9d51c974d27733d47"
                ]
            },
            {
                "name": " \"win.cobalt_strike\"",
                "count": 1293,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"38[.]76[.]190[.]209:8090\"",
                    " \"209[.]200[.]246[.]80:26513\"",
                    " \"209[.]200[.]246[.]80:4444\""
                ]
            },
            {
                "name": " \"unknown_loader\"",
                "count": 1080,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"southerncoastrealtors[.]com\"",
                    " \"southofheaventattoostudio[.]com\"",
                    " \"spanishspark[.]com\""
                ]
            },
            {
                "name": " \"js.clearfake\"",
                "count": 946,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"egmg2b5w[.]xen-burn[.]com\"",
                    " \"shuhdaekarbala[.]org[.]uk\"",
                    " \"skihousevemdalen[.]se\""
                ]
            },
            {
                "name": "Vidar",
                "count": 767,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "4a5cf0f4e8da154ed1c60ba064f0e733ce9c373e",
                    "1edaae5bb268c6ec2f90076a7c47b7bfbc531a15",
                    "2be2964d2711f536de55aa929fa612ba69ebc405"
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
        "topAttackVector": "Malicious URLs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": " \"unknown_loader\"",
        "totalAttacksThisHour": 42292,
        "lastCalculated": "2026-09-11 03:59 IST"
    }
};
