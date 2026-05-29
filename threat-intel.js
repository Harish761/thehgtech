// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-05-29T17:08:28.701764+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-05-29T17:08:28.515129+05:30",
    "lastUpdatedFormatted": "May 29, 2026 at 05:08 PM IST",
    "comparisonPeriod": "May 28 \u2013 May 29, 2026",
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
                "hxxps://lnsta[.]fr/",
                "hxxp://flverr-verlflcation[.]com/work/verifyfreelancer",
                "hxxp://req-sup405902[.]lol/view/es",
                "hxxps://heritagetimileyin85-cloud[.]github[.]io/Live-Coding-Test-One",
                "hxxp://jaswanthlakshman[.]github[.]io/NetflixClone"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 1148,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 1148,
                "newInLastHour": 166,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"37e8fc3692a69b04324eea93dd65d70a329bd117c8126119357bc43680f79fa2",
                " \"450022431a5d5d5589895b878420747c860a85928d560f48355acbc8825ba744",
                " \"07f3b3b3d68b66d02e38edc1a4dde77f2245c3b33054b92322d757f0d27b4697",
                " \"6fa0be9fab7206904b68f08a672807bf32072cd73185a17f4298438d81a597af",
                " \"6ce412c50c1f14d7d065f1e1fecda3f1244f76c12dc0a2605d2656d0c925353a"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1606,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1606,
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
                "1[.]1[.]223[.]16",
                "1[.]15[.]14[.]29",
                "1[.]162[.]111[.]181",
                "1[.]177[.]63[.]24",
                "1[.]180[.]183[.]158"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 5643,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 5643,
                "newInLastHour": 5643,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]0[.]164[.]165",
                "1[.]12[.]217[.]80",
                "1[.]12[.]222[.]63",
                "1[.]14[.]206[.]154",
                "1[.]192[.]191[.]10"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 21122,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 21122,
                "newInLastHour": 21122,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://5[.]26[.]195[.]93:38994/i",
                "hxxp://113[.]236[.]100[.]191:35878/bin[.]sh",
                "hxxp://110[.]37[.]90[.]59:52067/bin[.]sh",
                "hxxp://115[.]58[.]173[.]24:59650/i",
                "hxxp://125[.]40[.]10[.]158:47992/bin[.]sh"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 3397,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 3397,
                "newInLastHour": 3385,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"hxxps://iyi[.]matriculaflix[.]com/\"",
                " \"iyi[.]depansm188[.]top\"",
                " \"hxxps://iyi[.]depansm188[.]top/\"",
                " \"iyi[.]matriculaflix[.]com\"",
                " \"mfrpd[.]sm188daftar[.]cfd\""
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
            "iocCount": 9819,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 9819,
                "newInLastHour": 66,
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
            "totalIndicators": 52000,
            "activeSources": 8,
            "criticalAlerts": 31731,
            "activeCampaigns": 214
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 21999,
                "trend": "stable",
                "percentage": -2
            },
            {
                "category": "C2",
                "count": 9732,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 2926,
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
                "count": 20858,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://125[.]43[.]41[.]122:59491/i",
                    "hxxp://115[.]58[.]146[.]33:49046/i",
                    "hxxp://125[.]24[.]10[.]235:55112/bin[.]sh"
                ]
            },
            {
                "name": "CINS Threat List",
                "count": 15000,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]1[.]223[.]16",
                    "1[.]162[.]111[.]181",
                    "1[.]162[.]93[.]188"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1598,
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
                "count": 1428,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"1364170351-gsw88cee73[.]ap-guangzhou[.]tencentscf[.]com\"",
                    " \"185[.]89[.]222[.]133:8443\"",
                    " \"120[.]48[.]66[.]205:443\""
                ]
            },
            {
                "name": "AsyncRAT",
                "count": 1412,
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
                "count": 673,
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
                "name": " \"Mirai",
                "count": 619,
                "types": [
                    "hash"
                ],
                "sampleIndicators": [
                    " \"2b38bbb299bb43147a122f896e4e4876ea8b40c453110954961019681fef915a",
                    " \"71d6805debf8fe437b557565a9e67b47bd153f27a08190f89d55a8efe0cbd92d",
                    " \"1e7d9ae20c8ca6b4e14ce9a92e76fa6db70d45584e1512be8f9e1967c9b7a724"
                ]
            },
            {
                "name": "LummaStealer",
                "count": 551,
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
                "name": "Vidar",
                "count": 544,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "4b19add85966daaef23fdea4c1527633a36a88ba",
                    "2de4fd0094bc96c8339f3b8c67985f8a7b89b84a",
                    "1b697067f699bc99bf6a48d003bfd9c9b289450d"
                ]
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious URLs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": "malware_download",
        "totalAttacksThisHour": 45695,
        "lastCalculated": "2026-05-29 17:08 IST"
    }
};
