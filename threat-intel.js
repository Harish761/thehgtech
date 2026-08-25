// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-08-25T14:23:51.347429+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-08-25T14:23:51.034174+05:30",
    "lastUpdatedFormatted": "Aug 25, 2026 at 02:23 PM IST",
    "comparisonPeriod": "Aug 24 \u2013 Aug 25, 2026",
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
                "hxxp://openup[.]to/qyzf0km4",
                "hxxp://sp22ct-ravel-biz-kazu-pelo-f3p[.]pages[.]dev/",
                "hxxp://www[.]section[.]lat/",
                "hxxps://www[.]j86b[.]vip/",
                "hxxps://www[.]roblox[.]com[.]bi/games/120023201334582/-Bubble-Pop-Simulator?privateServerLinkCode=40701032093677820273245354551556"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 704,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 704,
                "newInLastHour": 33,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"2a342a58850c0093a668521123be38a9526063dbd2413010d6c17bb8bb1de0f6",
                " \"3dafebce7434991783231e900ba15d6e07dcc289b5cdcd1591917e1b1f5c7271",
                " \"5f034b7fdbb48074a41158643b0ba93f2605459ee6f46f9328475f63144312ee",
                " \"5ff841522a9f7c136b6adcab68d28f51dd6d2387555cf0fc3d62a2d8a8cf39c6",
                " \"464045e1cc7cd2a9148a5c246b479728440a309a28f7c29a75b5f6b878d81064"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1701,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1701,
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
                "1[.]119[.]158[.]77",
                "1[.]15[.]14[.]29",
                "1[.]180[.]190[.]250",
                "1[.]183[.]227[.]151",
                "1[.]192[.]129[.]106"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 5167,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 5167,
                "newInLastHour": 5167,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]0[.]164[.]165",
                "1[.]20[.]150[.]200",
                "1[.]20[.]215[.]65",
                "1[.]209[.]110[.]147",
                "1[.]214[.]214[.]114"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 16179,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 16179,
                "newInLastHour": 16179,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://39[.]79[.]22[.]252:52186/bin[.]sh",
                "hxxp://61[.]52[.]78[.]61:46235/i",
                "hxxp://115[.]55[.]232[.]171:37663/i",
                "hxxp://210[.]208[.]106[.]68:55668/bin[.]sh",
                "hxxp://146[.]190[.]156[.]187/bot"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 6424,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 6424,
                "newInLastHour": 6217,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"hxxps://mail[.]quwatt[.]com/\"",
                " \"toad[.]ampwin123[.]com\"",
                " \"150[.]129[.]80[.]247:8083\"",
                " \"143[.]92[.]62[.]110:8083\"",
                " \"114[.]132[.]178[.]92:8084\""
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
            "iocCount": 10528,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 10528,
                "newInLastHour": 1,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "64e6fe29e84ea3ecaaef08920d8ceb9567240166",
                "7a9be497f84c09e7591ba7c7d69539a6e0468302",
                "277cf8e1227351964ba2a8e57b49b26f8f8e353a",
                "9c0a9291be46e42b67835dff9e6c767fd6660287",
                "19cf66baa4727b080e283d10284993170c9b462b"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 50574,
            "activeSources": 8,
            "criticalAlerts": 27348,
            "activeCampaigns": 232
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 16840,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "C2",
                "count": 10508,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 4178,
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
                "count": 16101,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://125[.]40[.]46[.]37:33777/i",
                    "hxxp://113[.]239[.]246[.]19:33703/i",
                    "hxxp://150[.]241[.]65[.]250:889/venv/lib/python3[.]12/site-packages/pip/_vendor/urllib3/__pycache__/fields[.]cpython-312[.]pyc"
                ]
            },
            {
                "name": "CINS Threat List",
                "count": 15000,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]119[.]158[.]77",
                    "1[.]180[.]190[.]250",
                    "1[.]180[.]247[.]82"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1701,
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
                "count": 1290,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"64[.]83[.]24[.]34:8080\"",
                    " \"64[.]83[.]24[.]34:80\"",
                    " \"64[.]83[.]24[.]34:443\""
                ]
            },
            {
                "name": " \"js.iclickfix\"",
                "count": 1047,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"hut[.]yourbodybydesign[.]me\"",
                    " \"hxxps://serenevacation[.]com/wp-links-piss[.]php\"",
                    " \"hxxps://verico-de-id[.]beer/api[.]php\""
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
                "count": 732,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "7a9be497f84c09e7591ba7c7d69539a6e0468302",
                    "277cf8e1227351964ba2a8e57b49b26f8f8e353a",
                    "19cf66baa4727b080e283d10284993170c9b462b"
                ]
            },
            {
                "name": "QuasarRAT",
                "count": 698,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "9b4c3ff8dc5891693f443320e3c1167c7cebe2b7",
                    "0f1b05653c3b3ab3bb4ecd772dd024668cbe8df1",
                    "b364395fee8c2e4c9eaf9a2531f6f7ac7bf8e4ae"
                ]
            },
            {
                "name": "LummaStealer",
                "count": 558,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "a45080c92a0b2314966517a4643ebf280e88a11b",
                    "501d817bb1780acfe5e47082c43472bda8068e4d",
                    "2beac2ee8b2fe7625d4de9f5381d37f200965f91"
                ]
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious URLs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": "malware_download",
        "totalAttacksThisHour": 42902,
        "lastCalculated": "2026-08-25 14:23 IST"
    }
};
