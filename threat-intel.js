// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-02-19T08:41:42.110663+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-02-19T08:41:41.822642+05:30",
    "lastUpdatedFormatted": "Feb 19, 2026 at 08:41 AM IST",
    "comparisonPeriod": "Feb 18 \u2013 Feb 19, 2026",
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
                "hxxps://www[.]robiox[.]com[.]py/games/4924922222/Brookhaven-RP?privateServerLinkCode=003074533947369737158311677547",
                "hxxps://roblox[.]com[.]py/games/116881334009378/V4-2p-775671?privateServerLinkCode=94039917790950526947285783345931",
                "hxxps://seunovolimitedisponivelporaqui[.]s3[.]us-east-005[.]backblazeb2[.]com/aumento[.]html",
                "hxxps://ultraaumentosoli[.]s3[.]us-east-005[.]backblazeb2[.]com/aumento[.]html",
                "hxxps://accounts[.]marketwebb[.]link/en/login/"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 1133,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 1133,
                "newInLastHour": 45,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"64b1dda6ef014880695645b59230d3ae68d4c7562b189971f6fdb14ac29d95f2",
                " \"41da9babfc9314663b1093cde26b51be006d4a50eba524e296e9195e012cb5ed",
                " \"8a669e6c2680886177f083ca7a3a7814199ba318d4861fe44014ab81838ab605",
                " \"4523165c9c78e89086acff14f16b660606ecea6daae833e39fb3983a8bf73f1c",
                " \"3c40dcd3f25e5eda1a32372e5e7b541973ee57c2bcfb2b7b191afca0a10ee957"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1474,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1474,
                "newInLastHour": 5,
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
                "1[.]0[.]164[.]165",
                "1[.]10[.]211[.]66",
                "1[.]11[.]132[.]194",
                "1[.]15[.]118[.]23",
                "1[.]15[.]22[.]112"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 6283,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 6283,
                "newInLastHour": 6283,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]145[.]98[.]105",
                "1[.]15[.]136[.]28",
                "1[.]15[.]77[.]170",
                "1[.]165[.]130[.]37",
                "1[.]165[.]130[.]39"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 20420,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 20420,
                "newInLastHour": 20420,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://115[.]63[.]185[.]170:44510/i",
                "hxxp://110[.]37[.]121[.]199:37355/bin[.]sh",
                "hxxp://115[.]63[.]17[.]254:36468/bin[.]sh",
                "hxxp://115[.]63[.]185[.]170:44510/bin[.]sh",
                "hxxp://115[.]50[.]3[.]161:50670/i"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 700,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 700,
                "newInLastHour": 674,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"Nexit-62461[.]portmap[.]host\"",
                " \"Nexit-53294[.]portmap[.]host\"",
                " \"156[.]246[.]95[.]51:80\"",
                " \"165[.]232[.]45[.]1:7000\"",
                " \"greenleaf[.]natureway[.]city\""
            ]
        },
        "Feodo Tracker": {
            "description": "Botnet C2 server IPs from Feodo Tracker. Tracks Dridex, Emotet, TrickBot, QakBot, and BazarLoader.",
            "website": "https://feodotracker.abuse.ch/",
            "updateFrequency": "Hourly",
            "iocCount": 3,
            "iocDataUrl": "https://thehgtech.com/ioc-data/feodo-tracker.json",
            "stats": {
                "total": 3,
                "newInLastHour": 3,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "162[.]243[.]103[.]246",
                "172[.]232[.]59[.]14",
                "178[.]62[.]3[.]223"
            ]
        },
        "SSL Blacklist": {
            "description": "Malicious SSL certificates used by botnet C2 servers. Helps detect encrypted malware communications.",
            "website": "https://sslbl.abuse.ch/",
            "updateFrequency": "Daily",
            "iocCount": 8989,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 8989,
                "newInLastHour": 22,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "66afb632b2131a12c4ee5896e88bc485662077eb",
                "6fee95d4146c24f6e3135638d0154a6365a09b97",
                "75598cc7651868766a5aefb311671bf02e6236de",
                "adf3f697ee22a8dc8ea8706f940bcdde0a72b6a5",
                "9b64cd9e6bd74585beeb263fcff0e91988921f88"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 48559,
            "activeSources": 8,
            "criticalAlerts": 30861,
            "activeCampaigns": 230
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 21918,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "C2",
                "count": 8943,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 426,
                "trend": "stable",
                "percentage": 1
            },
            {
                "category": "Phishing",
                "count": 301,
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
                "count": 20717,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://123[.]4[.]196[.]254:40293/bin[.]sh",
                    "hxxp://124[.]29[.]223[.]19:59157/i",
                    "hxxps://activebrain[.]conscious86jag[.]coupons/sense_data"
                ]
            },
            {
                "name": "CINS Threat List",
                "count": 15000,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]0[.]164[.]165",
                    "1[.]10[.]211[.]66",
                    "1[.]11[.]132[.]194"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1469,
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
                "count": 1382,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "bef81c1fd26e84e5e25a4182bf668304ba2891da",
                    "adb1b31a6283691b205839f5e3ce4f8ed7aa5f54",
                    "97e58eec776ad990a10d1f4a932e1a4ae48636b3"
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
                "count": 620,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "313aa465da1c887d1189e74be08d3e79306192c2",
                    "4091cdf235522076668c6f698479d4af4e5d2bf8",
                    "f7b6ed231ee6c9dc773697ae24f09c559fbee477"
                ]
            },
            {
                "name": "LummaStealer",
                "count": 535,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "e2293f74d8d72bde90bb0424038259a9e3126e1b",
                    "69101b8edfa5d5e2ead4512a6d71c84748b0c012",
                    "1d28cc6dca52e95f859739c39a04d794671f66d9"
                ]
            },
            {
                "name": "Vidar",
                "count": 362,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "66afb632b2131a12c4ee5896e88bc485662077eb",
                    "adf3f697ee22a8dc8ea8706f940bcdde0a72b6a5",
                    "9b64cd9e6bd74585beeb263fcff0e91988921f88"
                ]
            },
            {
                "name": "Rhadamanthys",
                "count": 355,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "f999c0da0e983becc1c935444c5e609be26b0bcf",
                    "4101579ae950c954fc1096adf43bdefcf0364cfd",
                    "0c3ee8188ce35b6bb11d5b12a0e1e28310188b4e"
                ]
            },
            {
                "name": "Gozi",
                "count": 349,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "61d991d7063e5e7470daa3059357f8282e680bb7",
                    "68b4fc7da837c64332b9f019adaef4c7038ec85d",
                    "e0f7072057c5deeb21c598673740debc7f6eb8a1"
                ]
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious URLs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": " \"n/a",
        "totalAttacksThisHour": 42752,
        "lastCalculated": "2026-02-19 08:41 IST"
    }
};
