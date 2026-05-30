// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-05-31T01:19:27.763790+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-05-31T01:19:27.465003+05:30",
    "lastUpdatedFormatted": "May 31, 2026 at 01:19 AM IST",
    "comparisonPeriod": "May 30 \u2013 May 31, 2026",
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
                "hxxp://shopeeid101[.]blogspot[.]com/",
                "hxxps://pixeltannu[.]github[.]io/netflix[.]clone",
                "hxxp://faduan[.]wasmer[.]app/apolloglobal",
                "hxxp://faduan[.]wasmer[.]app/emeraldrenews",
                "hxxps://urlto[.]me/291Tq"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 741,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 741,
                "newInLastHour": 67,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"b2c8cec7357421ff7447b2b9d18c5a157c945b7ce1a187dae0cce435e2230772",
                " \"1ee4942f0a15cd0a18e4b2a9ea4b2d88e33be006f4e1c2112c835cf784b1534c",
                " \"1272027c5bcbec553a38959bb8840ce7a5783a1fbcee1cb46101f4c6ce7ea0dc",
                " \"94ee6a713fca285575fb363b2059a79de9336bfdb8df3cfc5dda6eae12b10ea3",
                " \"b8cef2a7b5752064fec8648920ce1c3547fa2430e008f300dbd66446aad58d11"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 394,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 394,
                "newInLastHour": 1,
                "lastUpdate": "just now"
            },
            "types": [
                "ip-range"
            ],
            "sampleIndicators": [
                "2.58.56.0/24",
                "2.59.152.0/24",
                "2.59.153.0/24",
                "5.101.82.0/24",
                "5.101.86.0/24"
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
                "1[.]141[.]160[.]162",
                "1[.]141[.]181[.]123",
                "1[.]15[.]35[.]79",
                "1[.]159[.]81[.]212"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 7381,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 7381,
                "newInLastHour": 7381,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]0[.]164[.]165",
                "1[.]12[.]222[.]63",
                "1[.]14[.]206[.]154",
                "1[.]14[.]64[.]225",
                "1[.]15[.]103[.]109"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 20974,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 20974,
                "newInLastHour": 20974,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxps://nwmhtzx[.]suslink[.]com[.]pk/3f9e3bf5-c6e8-44f1-80ea-0192b5d601b8",
                "hxxp://182[.]127[.]153[.]32:48764/bin[.]sh",
                "hxxp://182[.]127[.]3[.]74:55514/i",
                "hxxp://115[.]51[.]17[.]74:37801/i",
                "hxxp://110[.]37[.]116[.]127:45198/i"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 3251,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 3251,
                "newInLastHour": 3238,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"nwmhtzx[.]suslink[.]com[.]pk\"",
                " \"157[.]20[.]182[.]17:1997\"",
                " \"tnslzkh[.]sus[.]com[.]pk\"",
                " \"fxxqmo5b[.]letrungkien[.]info\"",
                " \"jjrqzq1y[.]letrungkien[.]info\""
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
            "iocCount": 9698,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 9698,
                "newInLastHour": 0,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "dcd708a5925943afaf7eaf3b7a7fabeb332155c5",
                "8e733b34e95a7b98ada40292b8d35e9040016e65",
                "4b19add85966daaef23fdea4c1527633a36a88ba",
                "9c5605a73a159de919523a8f844814d47e79a321",
                "1fe4d1c9b7106f25e606894cb6a64f69c4862b29"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 51527,
            "activeSources": 8,
            "criticalAlerts": 31365,
            "activeCampaigns": 210
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 21567,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "C2",
                "count": 9798,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 2924,
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
                "percentage": 95
            },
            {
                "name": "Tech",
                "percentage": 4
            },
            {
                "name": "Finance",
                "percentage": 0
            }
        ],
        "campaigns": [
            {
                "name": "malware_download",
                "count": 20854,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://92[.]42[.]100[.]131/x86_64",
                    "hxxp://92[.]42[.]100[.]131/mpsl",
                    "hxxp://92[.]42[.]100[.]131/mips"
                ]
            },
            {
                "name": "CINS Threat List",
                "count": 15000,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]1[.]223[.]76",
                    "1[.]12[.]229[.]231",
                    "1[.]141[.]160[.]162"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1605,
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
                "count": 1423,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"113[.]31[.]106[.]210:80\"",
                    " \"113[.]31[.]106[.]210:443\"",
                    " \"113[.]31[.]106[.]210:8080\""
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
                "count": 683,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "8e733b34e95a7b98ada40292b8d35e9040016e65",
                    "9f0d33c1eaa7afd41009d0ec594c0a408d2df123",
                    "493f6dbb48806992e524df2a3a0fa0348cef243b"
                ]
            },
            {
                "name": "Vidar",
                "count": 559,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "4b19add85966daaef23fdea4c1527633a36a88ba",
                    "2de4fd0094bc96c8339f3b8c67985f8a7b89b84a",
                    "1b697067f699bc99bf6a48d003bfd9c9b289450d"
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
            },
            {
                "name": "OffLoader",
                "count": 422,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "7bba8eb1da43142534144a1aaf30b1be8a5ed134",
                    "3190ff29e738f3a056a97190ae61386c21eddefd",
                    "e9a78163613f7608cc9236ba4cb47ab2861c580e"
                ]
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious URLs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": "malware_download",
        "totalAttacksThisHour": 46966,
        "lastCalculated": "2026-05-31 01:19 IST"
    }
};
