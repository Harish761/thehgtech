// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2025-12-11T14:11:14.776299+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2025-12-11T14:11:14.420372+05:30",
    "lastUpdatedFormatted": "Dec 11, 2025 at 02:11 PM IST",
    "comparisonPeriod": "Dec 10 \u2013 Dec 11, 2025",
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
                "hxxps://exodus-backup-network-recovery-authkey-servicemember[.]codeanyapp[.]com/network/auto",
                "hxxp://macquariecapitalcentral[.]073202[.]com/education_redirect_second?8c5781c2-7b1e-4035-b1d7-990e269e5380",
                "hxxp://macquariecapitalcentral[.]073202[.]com/education_redirect_second/8c5781c2-7b1e-4035-b1d7-990e269e5380",
                "hxxp://m[.]venture-surveys[.]com/education_redirect_second?8c5781c2-7b1e-4035-b1d7-990e269e5380",
                "hxxp://m[.]venture-surveys[.]com/education_redirect_second/8c5781c2-7b1e-4035-b1d7-990e269e5380"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 855,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 855,
                "newInLastHour": 29,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"d790958515a8f5f4f116c06154f49a385e942d4ece9f98217a64bbe77834efb6",
                " \"e9ab6a004dc53a477e72b440de125cd44bcc38d583cbfc54815bfcf21011c772",
                " \"5b7f8c32934a9d5f64795e21100531ed75117ce54bb3c0d10c542aa692c639d9",
                " \"79480130e951b0a2078f84181da5a0494dc0ea346dd71c75303f6aaa79f99bab",
                " \"fd07c29486570e1fae1605acd6b11a6c36caa93fdf6297228aac898626728d19"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1497,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1497,
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
                "1[.]1[.]176[.]58",
                "1[.]170[.]74[.]173",
                "1[.]177[.]22[.]68",
                "1[.]181[.]114[.]38",
                "1[.]181[.]69[.]174"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 6133,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 6133,
                "newInLastHour": 6133,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]13[.]19[.]219",
                "1[.]13[.]79[.]144",
                "1[.]14[.]12[.]141",
                "1[.]161[.]49[.]186",
                "1[.]162[.]231[.]97"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 28730,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 28730,
                "newInLastHour": 28730,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxps://raw[.]githubusercontent[.]com/m1lleys/mills/refs/heads/main/m5n6b7v8[.]exe",
                "hxxps://cxks9[.]bu1gep2lest[.]ru/2brzxvur",
                "hxxps://5idt[.]c0rres5cour[.]ru/coy5zoeh",
                "hxxps://raw[.]githubusercontent[.]com/anuj4sharma/FiveM-Mod-Menu/main/weeshy/FiveM-Mod-Menu[.]zip",
                "hxxps://raw[.]githubusercontent[.]com/DayvidBlack/Bob/main/unsprouted/Bob[.]zip"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 1953,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 1953,
                "newInLastHour": 1953,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"boost[.]bu1gep2lest[.]ru\"",
                " \"cxks9[.]bu1gep2lest[.]ru\"",
                " \"5idt[.]c0rres5cour[.]ru\"",
                " \"njs[.]c0rres5cour[.]ru\"",
                " \"172[.]237[.]89[.]35:80\""
            ]
        },
        "Feodo Tracker": {
            "description": "Botnet C2 server IPs from Feodo Tracker. Tracks Dridex, Emotet, TrickBot, QakBot, and BazarLoader.",
            "website": "https://feodotracker.abuse.ch/",
            "updateFrequency": "Hourly",
            "iocCount": 4,
            "iocDataUrl": "https://thehgtech.com/ioc-data/feodo-tracker.json",
            "stats": {
                "total": 4,
                "newInLastHour": 4,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "15[.]204[.]219[.]215",
                "162[.]243[.]103[.]246",
                "167[.]86[.]75[.]145",
                "51[.]210[.]96[.]48"
            ]
        },
        "SSL Blacklist": {
            "description": "Malicious SSL certificates used by botnet C2 servers. Helps detect encrypted malware communications.",
            "website": "https://sslbl.abuse.ch/",
            "updateFrequency": "Daily",
            "iocCount": 8615,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 8615,
                "newInLastHour": 5,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "84c5b32bdca11a7e3850b93be0624cd8f75f2ef5",
                "7df151365b79ad2689b01337e63203476768d37a",
                "b9aad54edcd6cbe1cf94fa76da3a135fd414dbc4",
                "b47fd3a262d30f4f26cf6ed769233fae1b1264d5",
                "bb7c7f9d96244bc9bba61d4c821d004a60982bf0"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 57279,
            "activeSources": 8,
            "criticalAlerts": 38139,
            "activeCampaigns": 194
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 29552,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "C2",
                "count": 8587,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 1756,
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
                "count": 28655,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://178[.]16[.]55[.]189/files/7359455182/Chh4IXl[.]exe",
                    "hxxp://110[.]37[.]0[.]211:52427/i",
                    "hxxp://42[.]5[.]174[.]22:38393/i"
                ]
            },
            {
                "name": "CINS Threat List",
                "count": 15000,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]1[.]176[.]58",
                    "1[.]15[.]118[.]23",
                    "1[.]177[.]22[.]68"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1497,
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
                "count": 1360,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "ae6ca91be0e1145adf2f7120ca3edec533d7573f",
                    "aebe846393cee6199796dc1524f82c22f5f1bb35",
                    "2f0654bc0b155cba85aa0be287860feff2045195"
                ]
            },
            {
                "name": " \"win.dcrat\"",
                "count": 767,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"46[.]173[.]214[.]52:7777\"",
                    " \"87[.]120[.]107[.]24:5050\"",
                    " \"sex[.]55clubx[.]net\""
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
                "count": 593,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "5d5c32a9bf92da1d16d0558ed2ed9f19c821c8a9",
                    "31e9cb5ace32adba5c43bce257a6396f9fa0f21c",
                    "9432f61b3afd49f0c35b548b09db103221d9b8c5"
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
        "fastestRisingThreat": "SSH Attacks",
        "totalAttacksThisHour": 52154,
        "lastCalculated": "2025-12-11 14:11 IST"
    }
};
