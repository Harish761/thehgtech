// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-09-15T10:15:05.930604+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-09-15T10:15:05.662154+05:30",
    "lastUpdatedFormatted": "Sep 15, 2026 at 10:15 AM IST",
    "comparisonPeriod": "Sep 14 \u2013 Sep 15, 2026",
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
                "hxxp://bet83043[.]com/",
                "hxxps://messagerie02-livebox-ind[.]abrdns[.]com/id/soilandpile[.]com/wp-admin/js/js/char/num/index[.]html",
                "hxxps://s4w[.]in/roblox-com-users-8614733229-profile",
                "hxxps://somsper[.]lat/",
                "hxxps://montanarenaissance[.]co[.]za/wp1/dxtest/pdfurl[.]html"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 643,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 643,
                "newInLastHour": 72,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"a47f99ee1afb916c204d48410e385afe772895c1f2d40570eb63f22f5ee5bf99",
                " \"b84d080e5839eaf4ff997066dd152e1454bc71238c192ee2fbd1946a15214046",
                " \"2d6a529713ed9e2871b7553f253818c078d342b8e3475be140c8fb47bedcf125",
                " \"0e8870f48e3971b4f1586129a25be97ba15ff6fcca0b7abb303b7c02f1f94b85",
                " \"2899b8a2d4d7c47fff7e1c6cf63d8dbfb6c440a037ab399514f508164e2b0894"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1724,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1724,
                "newInLastHour": 3,
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
                "1[.]10[.]172[.]57",
                "1[.]181[.]200[.]22",
                "1[.]193[.]63[.]83",
                "1[.]205[.]52[.]2",
                "1[.]24[.]16[.]109"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 4914,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 4914,
                "newInLastHour": 4914,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]0[.]164[.]165",
                "1[.]117[.]59[.]169",
                "1[.]14[.]64[.]225",
                "1[.]214[.]214[.]114",
                "1[.]222[.]42[.]237"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 12445,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 12445,
                "newInLastHour": 12445,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://80[.]67[.]33[.]209:36384/i",
                "hxxp://101[.]108[.]96[.]80:50943/bin[.]sh",
                "hxxp://222[.]136[.]20[.]146:39354/i",
                "hxxp://196[.]189[.]40[.]159:41077/i",
                "hxxp://196[.]189[.]40[.]159:41077/bin[.]sh"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 7903,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 7903,
                "newInLastHour": 7067,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"hxxp://gofkaxz[.]click:8137/exports\"",
                " \"hxxp://trwehop[.]shop:5627/exports\"",
                " \"hxxp://teechop[.]shop:8213/messages\"",
                " \"sebehuco[.]workers[.]dev\"",
                " \"mossymorrow[.]com\""
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
            "iocCount": 10703,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 10703,
                "newInLastHour": 16,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "e458b2ccf8647aee41d64e46d1baadfc49e9e853",
                "14bc0ce6c63bf1c1554b4cd1772c60b57c38ab09",
                "7bc298ef18b49cfd44b5b429209035207250e25e",
                "d8f9205907b3bd3de4fb0513e5c53f167064a452",
                "009a05eaf082d20ae13a65abda12afd959cd76de"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 48756,
            "activeSources": 8,
            "criticalAlerts": 23953,
            "activeCampaigns": 280
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 13288,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "C2",
                "count": 10665,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 5341,
                "trend": "stable",
                "percentage": 4
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
                "name": "CINS Threat List",
                "count": 15000,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]10[.]172[.]57",
                    "1[.]14[.]121[.]115",
                    "1[.]15[.]14[.]29"
                ]
            },
            {
                "name": "malware_download",
                "count": 12657,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://115[.]59[.]10[.]50:42559/bin[.]sh",
                    "hxxp://125[.]43[.]226[.]64:40375/i",
                    "hxxp://182[.]117[.]113[.]198:38038/i"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1721,
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
                "count": 1446,
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
                "count": 1431,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"5[.]104[.]86[.]108:8889\"",
                    " \"114[.]215[.]188[.]153:9999\"",
                    " \"5[.]104[.]86[.]108:8884\""
                ]
            },
            {
                "name": " \"js.iclickfix\"",
                "count": 1079,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"www[.]noithatotolaocai[.]com\"",
                    " \"www[.]robloxfruit[.]site\"",
                    " \"www[.]vieclamuytin[.]com\""
                ]
            },
            {
                "name": "Vidar",
                "count": 773,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "14bc0ce6c63bf1c1554b4cd1772c60b57c38ab09",
                    "7bc298ef18b49cfd44b5b429209035207250e25e",
                    "fcfc3b257b12e4c699e343f4c415b60f642d88f6"
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
                "count": 704,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "8cffe4fa8f624cb4c15790c414e04acde61e3651",
                    "de0a287fb9997f0ffbd36df79b13cfda63f0bfcd",
                    "22d945ac6c7c00fb7bb5d0dc3618a82d46cfd1e2"
                ]
            },
            {
                "name": " \"unknown\"",
                "count": 620,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"hxxps://hashedsolver[.]icu/update1[.]ps1\"",
                    " \"hxxps://kachadigital[.]com/\"",
                    " \"hxxps://copiose[.]org/test_proliv/b?o=df2d61526e27a2bc\""
                ]
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious IPs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": " \"js.clearfake\"",
        "totalAttacksThisHour": 39822,
        "lastCalculated": "2026-09-15 10:15 IST"
    }
};
