// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-08-19T07:18:05.250084+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-08-19T07:18:04.902131+05:30",
    "lastUpdatedFormatted": "Aug 19, 2026 at 07:18 AM IST",
    "comparisonPeriod": "Aug 18 \u2013 Aug 19, 2026",
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
                "hxxp://www[.]deskthipk[.]com/",
                "hxxps://llori807[.]github[.]io/Netflix-Clone-2[.]0",
                "hxxp://vp-nm[.]abouali-mohammad-arad[.]workers[.]dev/",
                "hxxps://g5[.]lu/vu39k",
                "hxxps://loginfacebook3[.]blogspot[.]com/"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 1036,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 1036,
                "newInLastHour": 140,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"3980f39b92f36760b7e4758d0c4261245d2572985942c97e22f3094493f5df84",
                " \"64cda56c20ff6fce786658487df0881fabaa99776d5fc90836fcfaffbf1a24cf",
                " \"37b38b9303be79f30f74f7c0247ab5c6850c5ce16c4740e6b8273d6cfd926200",
                " \"565c7e58d69911df063704f17049462faa012852053f034b6aacf6651515304f",
                " \"dfa0e88fa2c28581d8c12b04d4f3e2518c578c62edc249dda867dbc7c0715d7a"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1680,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1680,
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
                "1[.]119[.]158[.]77",
                "1[.]140[.]210[.]242",
                "1[.]15[.]14[.]29",
                "1[.]183[.]161[.]214",
                "1[.]192[.]177[.]51"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 4819,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 4819,
                "newInLastHour": 4819,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]14[.]64[.]225",
                "1[.]20[.]150[.]200",
                "1[.]214[.]214[.]114",
                "1[.]222[.]42[.]237",
                "1[.]245[.]140[.]132"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 16552,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 16552,
                "newInLastHour": 16552,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://39[.]74[.]33[.]126:60319/i",
                "hxxp://27[.]194[.]211[.]108:59780/bin[.]sh",
                "hxxp://27[.]44[.]146[.]78:40164/i",
                "hxxp://39[.]74[.]33[.]126:60319/bin[.]sh",
                "hxxp://98[.]252[.]87[.]232:48523/i"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 8903,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 8903,
                "newInLastHour": 8861,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"tzmwem2q[.]usa-slimsounds[.]com\"",
                " \"196[.]251[.]107[.]252:24027\"",
                " \"intensivverlegung[.]ch\"",
                " \"aufstellungstage[.]ch\"",
                " \"dugrangranitos[.]com[.]br\""
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
            "iocCount": 10379,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 10379,
                "newInLastHour": 11,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "f351f7dbe9c583f75758b39cd307f5359d110c73",
                "e39fdf1800919f6dd77d89bcdbc0b1fe8a9352eb",
                "edbd45e54859ad7082efb79465ba938bb2581132",
                "7bf78d44f61a05e919479a1cf3e0ce158a50a0c6",
                "ffa6be04fe2e9c6b79776dcfc7ad3f41a403a64d"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 54010,
            "activeSources": 8,
            "criticalAlerts": 28420,
            "activeCampaigns": 234
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 17995,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "C2",
                "count": 10425,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 4681,
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
                "count": 16948,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://42[.]55[.]107[.]64:42203/i",
                    "hxxp://60[.]162[.]214[.]49:58599/bin[.]sh",
                    "hxxp://182[.]127[.]53[.]74:32795/bin[.]sh"
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
                    "1[.]140[.]210[.]242",
                    "1[.]165[.]27[.]71"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1690,
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
                "count": 1676,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"eggsjelly[.]space\"",
                    " \"cdn[.]zrorolite[.]com\"",
                    " \"hxxps://cdn[.]zrorolite[.]com/5NPL[.]js\""
                ]
            },
            {
                "name": " \"win.cobalt_strike\"",
                "count": 1439,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"124[.]220[.]34[.]180:80\"",
                    " \"124[.]220[.]34[.]180:8080\"",
                    " \"124[.]220[.]34[.]180:443\""
                ]
            },
            {
                "name": "AsyncRAT",
                "count": 1439,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "f351f7dbe9c583f75758b39cd307f5359d110c73",
                    "7bf78d44f61a05e919479a1cf3e0ce158a50a0c6",
                    "f50e245dc1e4a89d6cf5e07e31ae1392a3f9ad20"
                ]
            },
            {
                "name": " \"js.iclickfix\"",
                "count": 1374,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"xylopak[.]com\"",
                    " \"ycn[.]coop\"",
                    " \"ymbforexpro[.]com\""
                ]
            },
            {
                "name": " \"unknown\"",
                "count": 1049,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"flarclod[.]top\"",
                    " \"92[.]63[.]180[.]96:7443\"",
                    " \"102[.]117[.]161[.]35:7443\""
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
                "count": 710,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "e39fdf1800919f6dd77d89bcdbc0b1fe8a9352eb",
                    "952bcdeea03ea702626a30069c949581bf2d1b05",
                    "a52e17fe607d1e562e0cb67c6f2342e6b4dbf191"
                ]
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious URLs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": " \"js.iclickfix\"",
        "totalAttacksThisHour": 45690,
        "lastCalculated": "2026-08-19 07:18 IST"
    }
};
