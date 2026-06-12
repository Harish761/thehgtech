// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-06-13T02:06:11.627490+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-06-13T02:06:11.283331+05:30",
    "lastUpdatedFormatted": "Jun 13, 2026 at 02:06 AM IST",
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
                "hxxps://klelnanzeigen-deutsch[.]de-stvc7124[.]info/getpaymentm/195904461/m",
                "hxxps://www[.]roblox[.]com[.]ml/games/12055526085/Unknown-Story-Game-OFFICIAL?privateServerLinkCode=376373476201820323465283384846",
                "hxxps://saicharan-devoju[.]github[.]io/Netflix-clone",
                "hxxp://geminiloginm[.]webflow[.]io/",
                "hxxps://www[.]roblox[.]et/users/6612509654/profile"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 609,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 609,
                "newInLastHour": 16,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"06c225ee35c4c4f709e99f54d0d930b622ef3481a9a7aff2dec5d110b43d0389",
                " \"e0d01ef897fc50b5c3dc3a613d48a4c32c4cf6d973628773336d23c26181f3bd",
                " \"8fe1fed51558e70a559f372b3e27b43ff70d6375b0161a8efa966b2188937721",
                " \"f0869eca792d24c421ced7f32aaac21ee3f3151c6616fd3caf4d0bb2d3b998c6",
                " \"50b1664b5e16378ed8a3a3031596237fec3b8d2cb39f278645f4364eadeccf01"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1689,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1689,
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
                "1[.]10[.]185[.]224",
                "1[.]119[.]194[.]226",
                "1[.]15[.]35[.]79",
                "1[.]15[.]36[.]31",
                "1[.]159[.]87[.]163"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 8100,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 8100,
                "newInLastHour": 8100,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]1[.]220[.]166",
                "1[.]116[.]61[.]217",
                "1[.]117[.]229[.]57",
                "1[.]14[.]28[.]29",
                "1[.]15[.]134[.]139"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 17921,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 17921,
                "newInLastHour": 17921,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://42[.]239[.]246[.]79:42065/i",
                "hxxps://hopmx6jx[.]enfejarkade[.]online/?ublib=4e744f4c-cf9f-4294-a519-bcfde531e11a",
                "hxxps://dxxxyoqr[.]bet313[.]org/a043036d-90bc-4ad7-85ed-b9e416eb0c34",
                "hxxp://42[.]231[.]89[.]206:32933/bin[.]sh",
                "hxxps://ukfxv[.]motuntakhasosi[.]store/1098e15d-3b67-4383-a488-091e1bf8ab38"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 5959,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 5959,
                "newInLastHour": 5868,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"koiffqfm[.]enfejarkade[.]online\"",
                " \"dxxxyoqr[.]bet313[.]org\"",
                " \"114[.]132[.]227[.]144:8084\"",
                " \"134[.]175[.]250[.]157:18088\"",
                " \"8[.]138[.]103[.]47:8888\""
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
            "iocCount": 9861,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 9861,
                "newInLastHour": 0,
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
            "totalIndicators": 51401,
            "activeSources": 8,
            "criticalAlerts": 28443,
            "activeCampaigns": 236
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 18538,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "C2",
                "count": 9905,
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
                "count": 17900,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://222[.]140[.]185[.]131:57537/bin[.]sh",
                    "hxxp://112[.]227[.]251[.]132:39711/bin[.]sh",
                    "hxxps://oywlk[.]motorbook[.]xyz/29c283b3-28d8-4406-a383-8e0ad5565830"
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
                "count": 2272,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"oywlk[.]motorbook[.]xyz\"",
                    " \"9np2x3by[.]bordestan[.]com\"",
                    " \"dtphi824[.]akhbarsport[.]info\""
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1697,
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
                "count": 1434,
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
                "count": 1416,
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
                "count": 687,
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
                "count": 589,
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
        "totalAttacksThisHour": 47210,
        "lastCalculated": "2026-06-13 02:06 IST"
    }
};
