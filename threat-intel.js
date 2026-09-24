// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-09-25T04:40:38.846437+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-09-25T04:40:38.266198+05:30",
    "lastUpdatedFormatted": "Sep 25, 2026 at 04:40 AM IST",
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
            "iocCount": 2493,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 2493,
                "newInLastHour": 35,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"4d0ce94b3a82293113ed4284534dac4246b4225a7dcc11712b214e424dec06b1",
                " \"1675ce04808082271ff275024546ffb4db91fd5061333f234a9d369b07c65c88",
                " \"d8747b35fa316c16566be57e8e9ba0a1827e7a327aea6b2b43ef5bf3d04ae8c5",
                " \"2b9e79d0137424e4a2ba5b57acbf3dc703833eed10141341683e4f7050b60294",
                " \"db15c5b5a0a6295ee6a3d30be1b49ae668857ee54416d9d7e779f8f4541e50d6"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1709,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1709,
                "newInLastHour": 6,
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
                "1[.]177[.]162[.]4",
                "1[.]192[.]129[.]106",
                "1[.]193[.]58[.]176",
                "1[.]24[.]16[.]101",
                "1[.]24[.]16[.]103"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 11613,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 11613,
                "newInLastHour": 11613,
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
            "iocCount": 14488,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 14488,
                "newInLastHour": 14488,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://119[.]154[.]121[.]28:38962/i",
                "hxxp://36[.]35[.]72[.]255:48905/i",
                "hxxp://222[.]127[.]76[.]40:52775/i",
                "hxxp://222[.]127[.]227[.]201:49144/i",
                "hxxp://176[.]65[.]134[.]121:7356/bot[.]$m"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 9148,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 9148,
                "newInLastHour": 8602,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"rivistalibera[.]it\"",
                " \"rooshnaf[.]com\"",
                " \"rupertwinston[.]com\"",
                " \"shop[.]ascendantfinancial[.]ca\"",
                " \"solarsavercanada[.]com\""
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
            "iocCount": 10802,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 10802,
                "newInLastHour": 11,
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
            "totalIndicators": 53864,
            "activeSources": 8,
            "criticalAlerts": 27738,
            "activeCampaigns": 276
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 16969,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "C2",
                "count": 10769,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 4278,
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
                    "1[.]189[.]248[.]116",
                    "1[.]2[.]173[.]126",
                    "1[.]24[.]16[.]101"
                ]
            },
            {
                "name": "malware_download",
                "count": 14452,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://182[.]126[.]249[.]24:37834/bin[.]sh",
                    "hxxp://175[.]151[.]177[.]210:33943/i",
                    "hxxp://119[.]99[.]251[.]74:44042/i"
                ]
            },
            {
                "name": " \"js.iclickfix\"",
                "count": 2085,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"vale-quaiyn-jtbn8[.]life\"",
                    " \"hollow-badger-moasfraum[.]life\"",
                    " \"ashen-kindle-ridge-pruior[.]life\""
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1703,
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
                "count": 1452,
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
                "count": 1425,
                "types": [
                    "hash"
                ],
                "sampleIndicators": [
                    " \"08dc30c538f0a324f96fb6d225af9804615e4f4f408dee42d88b403d51837a91",
                    " \"2e52d8bb65b9eea5bc222398d54729a077c6892d4719790a2920bc2c9394c2a3",
                    " \"b0fdc205ebb00f343d56e682e118e75699fd15eea4309ead52dd2024929798ea"
                ]
            },
            {
                "name": " \"win.cobalt_strike\"",
                "count": 1358,
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
                "count": 796,
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
        "totalAttacksThisHour": 50060,
        "lastCalculated": "2026-09-25 04:40 IST"
    }
};
