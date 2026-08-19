// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-08-20T02:09:00.889695+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-08-20T02:09:00.501160+05:30",
    "lastUpdatedFormatted": "Aug 20, 2026 at 02:09 AM IST",
    "comparisonPeriod": "Aug 19 \u2013 Aug 20, 2026",
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
                "hxxp://facebologin[.]blogspot[.]com/",
                "hxxps://staking4portfolio[.]blogspot[.]com/",
                "hxxp://php-web-server--antijudas2323[.]replit[.]app/",
                "hxxp://www[.]staking2portfolio[.]blogspot[.]com/",
                "hxxps://www[.]ttk-pay-eua[.]vercel[.]app/"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 1444,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 1444,
                "newInLastHour": 63,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"622ad8a0eb9290c6c1fb7924f6019e18b34fee8b7583d756f1c8750ed6e793e8",
                " \"3e7333a7d765a0277a04617c0ed54d2e79ef50e6787462e648a724981218021a",
                " \"77ea6c1d964d7bf9a1bdb5a7a34b6f707065235554ff7fc58dd2de2def70c53a",
                " \"5bb9a2335169cf8237cfa2e254340d6475788a091dd9be2e3a690e018fcb7ef0",
                " \"a7a3591258756996e1e0a2a8dd1722cd8d5f741c0ce5492dba1eebc0e52dfa32"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1639,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1639,
                "newInLastHour": 8,
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
                "2.57.17.0/24"
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
                "1[.]119[.]194[.]226",
                "1[.]140[.]210[.]242",
                "1[.]178[.]120[.]114",
                "1[.]193[.]63[.]6",
                "1[.]197[.]139[.]151"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 4850,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 4850,
                "newInLastHour": 4850,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]0[.]164[.]165",
                "1[.]14[.]64[.]225",
                "1[.]2[.]189[.]132",
                "1[.]20[.]150[.]200",
                "1[.]214[.]214[.]114"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 16949,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 16949,
                "newInLastHour": 16949,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://42[.]5[.]26[.]85:51916/i",
                "hxxp://42[.]231[.]190[.]213:48304/i",
                "hxxp://163[.]182[.]97[.]242:3654/i",
                "hxxp://42[.]231[.]190[.]213:48304/bin[.]sh",
                "hxxp://58[.]255[.]41[.]239:39378/bin[.]sh"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 10443,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 10443,
                "newInLastHour": 10204,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"hxxp://ce557109[.]tw1[.]ru/L1nc0In[.]php\"",
                " \"hxxp://zakuiru[.]shop:9048/profiles\"",
                " \"hxxp://kupzovo[.]shop:7567/exports\"",
                " \"hxxps://palaciomaravilla[.]com/\"",
                " \"valokse[.]lol\""
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
            "iocCount": 10346,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 10346,
                "newInLastHour": 5,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "687928f5bd90cb243f29760de8d299236de2cadf",
                "9ba597b7a850fe598927a226f6ab2efd3050ff95",
                "16545697d78cbada6dac236b73dbeff19c9035d1",
                "5e7110d4c25e3aef153d9d38610550ad510f23cf",
                "0b92ba05df90855d90170858ba91680d33f76e0f"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 56073,
            "activeSources": 8,
            "criticalAlerts": 28829,
            "activeCampaigns": 251
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 18367,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "C2",
                "count": 10462,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 5079,
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
                "name": "malware_download",
                "count": 16945,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://58[.]255[.]41[.]239:39378/bin[.]sh",
                    "hxxp://119[.]185[.]241[.]8:42488/i",
                    "hxxps://pub-1c4ef2a315ec4b89b9dfad9472afee69[.]r2[.]dev/zuyoking[.]png"
                ]
            },
            {
                "name": "CINS Threat List",
                "count": 15000,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]15[.]14[.]29",
                    "1[.]159[.]70[.]231",
                    "1[.]178[.]120[.]114"
                ]
            },
            {
                "name": " \"js.iclickfix\"",
                "count": 2508,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"olive-crete[.]com\"",
                    " \"palaciomaravilla[.]com\"",
                    " \"phenans[.]com[.]do\""
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1684,
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
                "name": " \"unknown_loader\"",
                "count": 1677,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"governorhobbies[.]cfd\"",
                    " \"sofazinc[.]cfd\"",
                    " \"snailsreading[.]xyz\""
                ]
            },
            {
                "name": "AsyncRAT",
                "count": 1440,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "7f44d36f1f6bd375ba4e4a7866328a76047ce498",
                    "f351f7dbe9c583f75758b39cd307f5359d110c73",
                    "7bf78d44f61a05e919479a1cf3e0ce158a50a0c6"
                ]
            },
            {
                "name": " \"win.cobalt_strike\"",
                "count": 1427,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"38[.]76[.]183[.]197:8082\"",
                    " \"8[.]222[.]188[.]173:443\"",
                    " \"8[.]219[.]220[.]240:7777\""
                ]
            },
            {
                "name": " \"unknown\"",
                "count": 1112,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"hxxps://mujerilumina[.]com/\"",
                    " \"hxxps://namaste[.]cat/\"",
                    " \"hxxps://saatavukatlikburosu[.]com/\""
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
                "name": "Vidar",
                "count": 721,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "9ba597b7a850fe598927a226f6ab2efd3050ff95",
                    "5e7110d4c25e3aef153d9d38610550ad510f23cf",
                    "ab53f86d2ce32d9306f431e8e82f39cb31f48a53"
                ]
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious URLs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": " \"unknown_stealer\"",
        "totalAttacksThisHour": 47384,
        "lastCalculated": "2026-08-20 02:09 IST"
    }
};
