// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-04-04T10:54:48.387074+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-04-04T10:54:48.104516+05:30",
    "lastUpdatedFormatted": "Apr 04, 2026 at 10:54 AM IST",
    "comparisonPeriod": "Apr 03 \u2013 Apr 04, 2026",
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
                "hxxp://gazing[.]pp[.]ua/",
                "hxxp://vipvideosxxx[.]binzaminrandow[.]site/",
                "hxxp://pub-3b2161932db04c4eaa01be3fb152244b[.]r2[.]dev/sweetjan[.]html?email=3mail@b[.]c",
                "hxxps://ingredients-probability-pixel-signals[.]trycloudflare[.]com/",
                "hxxps://pancakeswapfinances[.]pages[.]dev/r@2[.]webp/"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 493,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 493,
                "newInLastHour": 42,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"123d0b0b0e246646a29a3eeeca3cec00e015ac8d69a9d586bef992c2a1051009",
                " \"da6a639ff3e9b4e2ab0d399caa980ea25c30d06f123284114982f852bfdb548c",
                " \"8ada174e7f0845bee202dbb6613ac07665ae5fe9db08d297e8b8da06d096275d",
                " \"d468b6ada8e3dcbfa91c708de4fe1ca3e41bbe18b2f5af2054a2e0a5686fdc9d",
                " \"8120766b6b118ee6863f57d2a2f7f53752d282fd4d12d925f70b9ab74f003534"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1603,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1603,
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
                "1[.]123[.]227[.]253",
                "1[.]175[.]223[.]160",
                "1[.]177[.]162[.]2",
                "1[.]178[.]175[.]72",
                "1[.]188[.]100[.]252"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 4516,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 4516,
                "newInLastHour": 4516,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]13[.]22[.]203",
                "1[.]162[.]223[.]47",
                "1[.]194[.]238[.]168",
                "1[.]214[.]117[.]218",
                "1[.]214[.]197[.]163"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 21213,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 21213,
                "newInLastHour": 21213,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://59[.]96[.]143[.]217:35886/bin[.]sh",
                "hxxp://182[.]127[.]5[.]163:47285/bin[.]sh",
                "hxxp://115[.]55[.]163[.]38:50687/bin[.]sh",
                "hxxp://119[.]117[.]255[.]165:54237/i",
                "hxxp://175[.]148[.]214[.]98:41376/i"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 525,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 525,
                "newInLastHour": 499,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"185[.]14[.]92[.]89:5000\"",
                " \"notes-ease[.]gl[.]at[.]ply[.]gg\"",
                " \"killerboymaxilo-59859[.]portmap[.]host\"",
                " \"power-drive[.]infodynamics[.]in[.]net\"",
                " \"hxxps://lightef[.]cyou\""
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
            "iocCount": 9460,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 9460,
                "newInLastHour": 2,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "98c4ebd74e323dbf48000595c478afa4b953928f",
                "deff511f627ab662c23d4ee22cdf78869e1c194f",
                "2257a937ef96cd4821519404b0db02a2f3b506fa",
                "0a81be74d5e74dc517becc16324991db2597f5fb",
                "6a7082d678a42a1f99e5a0e086bea62a82a3f9fc"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 48519,
            "activeSources": 8,
            "criticalAlerts": 31091,
            "activeCampaigns": 192
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 21655,
                "trend": "stable",
                "percentage": -1
            },
            {
                "category": "C2",
                "count": 9436,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 330,
                "trend": "stable",
                "percentage": -1
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
                "percentage": 87
            },
            {
                "name": "Tech",
                "percentage": 12
            },
            {
                "name": "Finance",
                "percentage": 0
            }
        ],
        "campaigns": [
            {
                "name": "malware_download",
                "count": 21157,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://124[.]95[.]40[.]217:38819/bin[.]sh",
                    "hxxp://222[.]127[.]154[.]221:37931/bin[.]sh",
                    "hxxp://117[.]26[.]226[.]210:56557/i"
                ]
            },
            {
                "name": "CINS Threat List",
                "count": 15000,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]123[.]227[.]253",
                    "1[.]175[.]223[.]160",
                    "1[.]178[.]175[.]72"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1603,
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
                "count": 1395,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "9b940adeda4f1d48f5560f76bb8bfc6e46202d3b",
                    "7aa15098c33be8eea90c57dba4443afba38bce40",
                    "97ab9a73024e527aed8a20bbb1c573a21e35cc06"
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
                "count": 660,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "8b6050f589d432c56f05de438e4ec606926c97df",
                    "e1305a89f7c83c0204edeae7bb063f73c4a80612",
                    "4fb81998ac697ab9e998f1c69d89e7ea606850ed"
                ]
            },
            {
                "name": "LummaStealer",
                "count": 550,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "2ebb8f663f93eb9c8f169cc09a86f6dba1c85584",
                    "f05a2876d9129ec057ecaedfac9cc37ebe2138ad",
                    "460e554589554e5dbaeb2c6f4c6aaf93e31da41a"
                ]
            },
            {
                "name": "Vidar",
                "count": 471,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "deff511f627ab662c23d4ee22cdf78869e1c194f",
                    "6a7082d678a42a1f99e5a0e086bea62a82a3f9fc",
                    "717369000deeef90c52b7c3a0885c0371315847e"
                ]
            },
            {
                "name": "OffLoader",
                "count": 377,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "0a81be74d5e74dc517becc16324991db2597f5fb",
                    "a153d631044cb3a6e47f781170624fec9552c8c1",
                    "df46f5d70b9f8af16e2732ca36cc2e5a08bda1a9"
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
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious URLs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": "malware_download",
        "totalAttacksThisHour": 41577,
        "lastCalculated": "2026-04-04 10:54 IST"
    }
};
