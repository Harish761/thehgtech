// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-09-25T03:12:49.720732+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-09-25T03:12:49.360373+05:30",
    "lastUpdatedFormatted": "Sep 25, 2026 at 03:12 AM IST",
    "comparisonPeriod": "Sep 24 \u2013 Sep 25, 2026",
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
                "hxxps://www[.]trzorsutelgin[.]godaddysites[.]com/",
                "hxxp://www[.]1234-six-omega[.]vercel[.]app/",
                "hxxps://www[.]trezrr-sfe-looggin[.]godaddysites[.]com/",
                "hxxps://test-tau-black-69[.]vercel[.]app/",
                "hxxp://www[.]test-tau-black-69[.]vercel[.]app/"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 2490,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 2490,
                "newInLastHour": 21,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"3a65fcc0a4e3916d47c3dba03e3b7f9e1451164a5b9baffda6b81183a3e7803d",
                " \"8d15cc886fe894acd7412dd540b0cb513eb8c6ebb7d7404daf04bbc8dfe013e7",
                " \"08dc30c538f0a324f96fb6d225af9804615e4f4f408dee42d88b403d51837a91",
                " \"951ad97fb9095b03cf85689bab67a32c8d22e21f09095fce71d922fdd35578ee",
                " \"26472c53b4c3f32c322fe5495dae7f1ac632326e07e57265d5e8601614d32cd4"
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
                "1[.]189[.]248[.]116",
                "1[.]2[.]173[.]126",
                "1[.]24[.]16[.]101",
                "1[.]24[.]16[.]103",
                "1[.]24[.]16[.]104"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 11664,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 11664,
                "newInLastHour": 11664,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]0[.]164[.]165",
                "1[.]15[.]221[.]192",
                "1[.]161[.]144[.]132",
                "1[.]162[.]197[.]67",
                "1[.]162[.]247[.]182"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 14452,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 14452,
                "newInLastHour": 14452,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://182[.]126[.]249[.]24:37834/bin[.]sh",
                "hxxp://175[.]151[.]177[.]210:33943/i",
                "hxxp://119[.]99[.]251[.]74:44042/i",
                "hxxp://180[.]117[.]143[.]21:43819/i",
                "hxxp://125[.]161[.]250[.]253:53581/i"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 9123,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 9123,
                "newInLastHour": 8577,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"plinko303[.]bet\"",
                " \"plinko[.]mobi\"",
                " \"cuo2gs4q[.]sportteen[.]ir\"",
                " \"hxxps://xx[.]234-e[.]com/\"",
                " \"xx[.]234-e[.]com\""
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
            "iocCount": 10791,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 10791,
                "newInLastHour": 58,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "06ba62804f9d40f0ffb38ecd4c42b0229921cbde",
                "aca5d4a8d82ba3feb8e85cd90158efba0d02f03f",
                "fd081cbaf79596b443b9d591f9dd1390268db7f0",
                "9780ed18b0a63e77e19611e7f46f640a64c1ad5e",
                "cadf6b3f7ceb64de2253e8c0734b867a2762987a"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 53852,
            "activeSources": 8,
            "criticalAlerts": 27667,
            "activeCampaigns": 272
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 16945,
                "trend": "stable",
                "percentage": 1
            },
            {
                "category": "C2",
                "count": 10722,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 4292,
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
                    "1[.]177[.]162[.]4",
                    "1[.]192[.]129[.]106"
                ]
            },
            {
                "name": "malware_download",
                "count": 14428,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://182[.]121[.]146[.]253:58584/i",
                    "hxxp://112[.]225[.]176[.]130:50733/i",
                    "hxxp://38[.]46[.]31[.]127:60341/bin[.]sh"
                ]
            },
            {
                "name": " \"js.iclickfix\"",
                "count": 2107,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"hxxps://sites[.]google[.]com/view/antibot172881\"",
                    " \"checkms5[.]cc\"",
                    " \"winsochacoon[.]com\""
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1707,
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
                "count": 1451,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "cb7fcaede3c6bb75e73ee72b8de7c23de2953dd4",
                    "990472ad57a4d7dcb13689a21b0c84252f5cf0a5",
                    "99500e5de097a58d95775e1f9da85597851bdb71"
                ]
            },
            {
                "name": " \"Mirai",
                "count": 1423,
                "types": [
                    "hash"
                ],
                "sampleIndicators": [
                    " \"fac672a784b82f7b8488fa18d4382d9ed4b6c63c21652586a72d66c58c99957c",
                    " \"41751c8d7c4786be97a56a60dc80cb8580ef28532d5c0af939adc9b6161b79de",
                    " \"85c716da58aede45676886a44211ebf9a32a85afa586f334c4d4b9c74bf1fd74"
                ]
            },
            {
                "name": " \"win.cobalt_strike\"",
                "count": 1363,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"209[.]38[.]82[.]85:8080\"",
                    " \"209[.]38[.]82[.]85:80\"",
                    " \"82[.]156[.]186[.]185:18443\""
                ]
            },
            {
                "name": " \"unknown_loader\"",
                "count": 1313,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"yellowboximmigration[.]com\"",
                    " \"youngpropertypartners[.]com\"",
                    " \"yrmok[.]com\""
                ]
            },
            {
                "name": "Vidar",
                "count": 783,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "06ba62804f9d40f0ffb38ecd4c42b0229921cbde",
                    "fd081cbaf79596b443b9d591f9dd1390268db7f0",
                    "9780ed18b0a63e77e19611e7f46f640a64c1ad5e"
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
        "fastestRisingThreat": "malware_download",
        "totalAttacksThisHour": 50079,
        "lastCalculated": "2026-09-25 03:12 IST"
    }
};
