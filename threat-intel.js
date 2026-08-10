// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-08-10T15:13:12.372275+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-08-10T15:13:12.082190+05:30",
    "lastUpdatedFormatted": "Aug 10, 2026 at 03:13 PM IST",
    "comparisonPeriod": "Aug 09 \u2013 Aug 10, 2026",
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
                "hxxps://www[.]roblox[.]com[.]gr/users/622177948453/profile",
                "hxxps://webdomain03[.]dnscpanel[.]com/~aguiasda/it/inbank/auth/login[.]php",
                "hxxps://webdomain03[.]dnscpanel[.]com/~aguiasda/it/inbank/",
                "hxxps://steamcommumminty[.]cam/tradeoffer/new/partner=64318432token=r0igerPI34832",
                "hxxp://docusign[.]kecifang[.]net/"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 867,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 867,
                "newInLastHour": 140,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"c829ecdfad04daba449fb93106f176c5fd065f3642b70cc46ab4285246a3057d",
                " \"2a167fbe58a9d874dda8798e9b0d773d9316a217256a7e3f1d0c5e3e26f9f03a",
                " \"da9442ac1174544216a00fb1792f7ee019cb708e47cd5948a9632e24285b36cb",
                " \"d274113fd9270f0eeab5980c0e3e629e09695ba3ac35bc5e30771cda7cfe6b6e",
                " \"904bb06ad9ad3c8e4aa980b96cbecad85c14bd994af013d77121723c85a5e1a9"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1685,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1685,
                "newInLastHour": 39,
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
                "1[.]159[.]114[.]217",
                "1[.]177[.]63[.]20",
                "1[.]178[.]120[.]192",
                "1[.]183[.]161[.]31"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 4853,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 4853,
                "newInLastHour": 4853,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]0[.]164[.]165",
                "1[.]169[.]210[.]90",
                "1[.]180[.]246[.]242",
                "1[.]197[.]102[.]62",
                "1[.]209[.]110[.]147"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 16072,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 16072,
                "newInLastHour": 16072,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://125[.]43[.]103[.]43:39953/i",
                "hxxp://5[.]182[.]210[.]174/dc7ecc",
                "hxxp://5[.]182[.]210[.]174/c55677",
                "hxxp://5[.]182[.]210[.]174/a34888",
                "hxxp://5[.]182[.]210[.]174/0d5aa8"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 4164,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 4164,
                "newInLastHour": 3939,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"uhfazu[.]tiroalpaloes[.]co\"",
                " \"volrko[.]pro\"",
                " \"testmyopinion[.]live\"",
                " \"ronaldbeck[.]duckdns[.]org\"",
                " \"beckronald[.]duckdns[.]org\""
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
            "iocCount": 10369,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 10369,
                "newInLastHour": 110,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "32a8651489a0a5fb3fb0679514bed1e86c0c576c",
                "8f0bfca0ab1d555a035d5b498c9e26acdab3d7aa",
                "10444531944b9b521661ef3bd8d9848d70902bbd",
                "930851db267db9c407bc5adaa9d49f5c994abece",
                "88b2180ded8f8a30de34b4dc84c2328bbd0af49f"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 47907,
            "activeSources": 8,
            "criticalAlerts": 26844,
            "activeCampaigns": 232
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 16607,
                "trend": "stable",
                "percentage": 1
            },
            {
                "category": "C2",
                "count": 10237,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 3483,
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
                "name": "malware_download",
                "count": 15827,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://160[.]191[.]242[.]92/ar5",
                    "hxxp://160[.]191[.]242[.]92///main_mpsl",
                    "hxxp://160[.]191[.]242[.]92/sh4"
                ]
            },
            {
                "name": "CINS Threat List",
                "count": 15000,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]12[.]229[.]231",
                    "1[.]159[.]114[.]217",
                    "1[.]177[.]63[.]20"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1646,
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
                "count": 1428,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "714c56e9e207d5c8e08e1ca28cd9ba85f079d061",
                    "6647f9e4a2e273d7b78ff02be7114b0e9e2a719f",
                    "67044f9079f804d4a6217093c679897fec1f90e2"
                ]
            },
            {
                "name": " \"win.cobalt_strike\"",
                "count": 1279,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"36[.]140[.]162[.]173:12443\"",
                    " \"169[.]58[.]82[.]229:3389\"",
                    " \"139[.]196[.]111[.]118:111\""
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
                "count": 688,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "ece1b6bdc8e62d35188aab274bdb0be28d84c43f",
                    "b14379b3743c37a26289499aca921c99998649f1",
                    "4c67471be88dd63db2466621fe9e2a2d848f5b79"
                ]
            },
            {
                "name": "Vidar",
                "count": 640,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "b5b8bebd73d8e8aec88ccc17b1e27c34921667ae",
                    "cfe6dcd7527099d525ffa8cec0bd1ab5020d47a7",
                    "a9ebd28ce7e4ac020e6d263e228b8547e1914bfa"
                ]
            },
            {
                "name": "LummaStealer",
                "count": 557,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "501d817bb1780acfe5e47082c43472bda8068e4d",
                    "2beac2ee8b2fe7625d4de9f5381d37f200965f91",
                    "a46841d623a191366909b24375bee0eceea23bbe"
                ]
            },
            {
                "name": "ConnectWise",
                "count": 450,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "d7d3f678f9b63334375db11eecc81be2db4db6f0",
                    "cede10451532b072c7017c49ef4fcd273301a826",
                    "e63b53c2c26b9bff8f20e018efe7c166ec3c4acd"
                ]
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious URLs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": "malware_download",
        "totalAttacksThisHour": 40458,
        "lastCalculated": "2026-08-10 15:13 IST"
    }
};
