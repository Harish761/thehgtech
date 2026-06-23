// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-06-24T03:18:11.346781+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-06-24T03:18:10.941432+05:30",
    "lastUpdatedFormatted": "Jun 24, 2026 at 03:18 AM IST",
    "comparisonPeriod": "Jun 23 \u2013 Jun 24, 2026",
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
                "hxxps://sia[.]inicioseguro[.]com/c/p/tc/3080/eece42f9-8c69-496a-a73d-054cd8cb10bb-79f1cb36-f9af-4af7-9acd-c4579cdfaf11/",
                "hxxps://www[.]r[.]oblox[.]com[.]et/users/8077342404/profile",
                "hxxp://hawkfs[.]icu/snx/pr/",
                "hxxps://www[.]roblox[.]com[.]bi/games/17625359962/RIVALS?privateServerLinkCode=26794274690145427755087934733914",
                "hxxp://www[.]gov-parkingiss[.]top/com/"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 799,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 799,
                "newInLastHour": 22,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"4fa2ccd05dc0b3a8dfcb2f089eba1a8cbf90b858dcf8f45c5f3c4c2539e55c63",
                " \"1639ab80ef54685a639a47eece8041ad21b950a107f667f241f0c2d6d5a937a8",
                " \"b9d3147f13395b4c9d6242340b22021abc3b3ff03755809fcbf24aea653c0b59",
                " \"fc92185b6516f3cdb0284201e14c96e5636d8f835fbf7eb6dc7bc704f70b89c7",
                " \"1b2fbd5f510d8c02ba709aafafaffdebb298e41fd78aef620bd06781e78a8b92"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1641,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1641,
                "newInLastHour": 1,
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
                "1[.]119[.]194[.]226",
                "1[.]15[.]35[.]79",
                "1[.]171[.]25[.]81",
                "1[.]172[.]244[.]46",
                "1[.]176[.]118[.]246"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 4730,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 4730,
                "newInLastHour": 4730,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]0[.]164[.]165",
                "1[.]160[.]229[.]25",
                "1[.]162[.]239[.]42",
                "1[.]20[.]140[.]252",
                "1[.]20[.]228[.]110"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 22776,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 22776,
                "newInLastHour": 22776,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://110[.]38[.]201[.]35:35729/bin[.]sh",
                "hxxp://123[.]148[.]240[.]15:43983/i",
                "hxxp://182[.]126[.]249[.]14:47256/i",
                "hxxp://123[.]148[.]240[.]15:43983/bin[.]sh",
                "hxxp://91[.]92[.]242[.]236/files-129312398/files/file_cc1c1aabd55380d4[.]exe"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 4753,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 4753,
                "newInLastHour": 4281,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"69xb4m1d[.]betmajic[.]cc\"",
                " \"8ra83hil[.]blackjackonlineplay83[.]com\"",
                " \"221[.]132[.]29[.]137:443\"",
                " \"hxxps://cdn[.]jsdelivr[.]net/gh/louis-mellor/2d-aee4-1433332c1@main/f5\"",
                " \"s7w5r3s2[.]onebet1x[.]com\""
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
            "iocCount": 10021,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 10021,
                "newInLastHour": 3,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "930ad835b903af414bb1a64dc5184fe8850b0d9c",
                "696e8986d2a5ecc7deacdedf0efecd16f249befe",
                "dd3ba97127142419e80ef9ae606bec55ca8500fd",
                "d1421c00fed86ca8b65f1617019fd1a0ceed22a7",
                "fbb234bb7df601783c1d25be2a386c9ab5d45e41"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 55343,
            "activeSources": 8,
            "criticalAlerts": 33596,
            "activeCampaigns": 263
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 23585,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "C2",
                "count": 10011,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 3645,
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
                "count": 22764,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://222[.]141[.]82[.]143:50860/i",
                    "hxxp://222[.]142[.]253[.]17:38197/i",
                    "hxxp://meow[.]otval[.]cfd/nova[.]sh"
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
                    "1[.]15[.]35[.]79",
                    "1[.]171[.]171[.]216"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1694,
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
                "count": 1446,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"45[.]116[.]14[.]13:8080\"",
                    " \"45[.]116[.]14[.]13:80\"",
                    " \"209[.]126[.]7[.]188:81\""
                ]
            },
            {
                "name": "AsyncRAT",
                "count": 1419,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "15a47f45b77ef377b9ec7f6aff1fc3fcca1c6035",
                    "3361a98a6c2746e41390b299202f149699f5a17d",
                    "49aa56f946089804e2bc8ae77a7b2fbaa5860e50"
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
                    "27e3cb5b0043884c7ebc0691e2e73ef3b95339ac",
                    "ae590545961e96de860ea7434c0e8c69b924de6f",
                    "28c3106cd1cec9a5dfec7f2ba3b0dd7e70784429"
                ]
            },
            {
                "name": "Vidar",
                "count": 608,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "e14da247abd27ab816d07e94f012ba4a405ee77f",
                    "85b767752d352a3203c71f6b61fd32aeae6a806b",
                    "a75653fb0d720b53ce06b75400144f7348f56859"
                ]
            },
            {
                "name": "LummaStealer",
                "count": 556,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "2beac2ee8b2fe7625d4de9f5381d37f200965f91",
                    "a46841d623a191366909b24375bee0eceea23bbe",
                    "272e76f605bec1da1ea719df8dc0e7269de7d44e"
                ]
            },
            {
                "name": " \"unknown\"",
                "count": 555,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"91[.]92[.]242[.]235:7443\"",
                    " \"102[.]117[.]173[.]226:7443\"",
                    " \"newpopularimages[.]com\""
                ]
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious URLs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": "malware_download",
        "totalAttacksThisHour": 47118,
        "lastCalculated": "2026-06-24 03:18 IST"
    }
};
