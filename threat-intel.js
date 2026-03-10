// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-03-11T00:52:01.881626+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-03-11T00:52:01.573170+05:30",
    "lastUpdatedFormatted": "Mar 11, 2026 at 12:52 AM IST",
    "comparisonPeriod": "Mar 10 \u2013 Mar 11, 2026",
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
                "hxxps://ts67877[.]com/",
                "hxxp://ipfs[.]io/ipfs/bafkreibesbicar5pwyptvbgcolebqw5vetkodmjc6t4nvryuax7olkulsq/?eta=3mail@a[.]b[.]c0",
                "hxxp://34155dh8[.]org/Mobile/index[.]html",
                "hxxp://roblox[.]com[.]ge/users/1322190005/profile",
                "hxxps://ts67866[.]com/"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 652,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 652,
                "newInLastHour": 15,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"180f08eec33e60dece5478838462052aad8ab51fe07704c6de48685ed4cdc497",
                " \"3feabe54f4a47c30cb8665b2e6aae44aa293d3784cf57e8d2bb2d88a169afb5b",
                " \"28785af486ff66d9d2cbc7e7730af93eadc91345cfebc8949d068cd4363acad8",
                " \"cf23954ed0ec31d1e3b0073022bc759bd21a6c1fa2517db6d7dffe0488a4e02d",
                " \"db7fc2fef4f644d06e378b426e9a5a5c5ac7c29fb0d09ba56903fed1dbe6843b"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1536,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1536,
                "newInLastHour": 7,
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
                "1[.]15[.]51[.]236",
                "1[.]170[.]47[.]69",
                "1[.]180[.]115[.]126",
                "1[.]188[.]103[.]101",
                "1[.]192[.]177[.]65"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 7038,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 7038,
                "newInLastHour": 7038,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]15[.]136[.]28",
                "1[.]161[.]39[.]103",
                "1[.]192[.]189[.]251",
                "1[.]214[.]197[.]163",
                "1[.]220[.]95[.]211"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 19479,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 19479,
                "newInLastHour": 19479,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxps://x1y2[.]jovianth[.]in[.]net/verification[.]google",
                "hxxp://123[.]9[.]87[.]69:49381/bin[.]sh",
                "hxxp://110[.]36[.]19[.]51:50198/i",
                "hxxps://wr776[.]vylocore[.]in[.]net/verification[.]google",
                "hxxps://pt554[.]vylocore[.]in[.]net/verification[.]google"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 1160,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 1160,
                "newInLastHour": 1149,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"a9b8[.]jovianth[.]in[.]net\"",
                " \"x1y2[.]jovianth[.]in[.]net\"",
                " \"wr776[.]vylocore[.]in[.]net\"",
                " \"8xx[.]rest\"",
                " \"8xx[.]tech\""
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
            "iocCount": 9221,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 9221,
                "newInLastHour": 22,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "581cff3c3ff5140030c1b2dae80093f37df765df",
                "7ca748d42ca714a0017f176dd942ae77739b34be",
                "abc97e073da46b3dfe0c8a5ccfc416eeb221631c",
                "80c481f9b55d711b33854644fd736f4b642b42b8",
                "597545892f122729047032705d557fe787138c32"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 47293,
            "activeSources": 8,
            "criticalAlerts": 29338,
            "activeCampaigns": 212
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 20161,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "C2",
                "count": 9177,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 457,
                "trend": "stable",
                "percentage": -1
            },
            {
                "category": "Phishing",
                "count": 302,
                "trend": "stable",
                "percentage": 0
            }
        ],
        "targetedSectors": [
            {
                "name": "General",
                "percentage": 97
            },
            {
                "name": "Tech",
                "percentage": 2
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
                "count": 19426,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://42[.]56[.]183[.]69:49208/bin[.]sh",
                    "hxxp://222[.]138[.]134[.]251:51117/bin[.]sh",
                    "hxxp://45[.]141[.]26[.]73/bins/sora[.]x86"
                ]
            },
            {
                "name": "CINS Threat List",
                "count": 15000,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]15[.]51[.]236",
                    "1[.]170[.]47[.]69",
                    "1[.]180[.]115[.]126"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1529,
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
                "count": 1389,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "e074dd74eb8eb98468a94eb43b3487fe2b7f5980",
                    "d5a586a42fd4e36396467ae8d16045a5efd6bada",
                    "b4f112278f6f59e5e9d0a2aeb252c111a3ae8603"
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
                "count": 636,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "581cff3c3ff5140030c1b2dae80093f37df765df",
                    "6351234662461217b8b3178bd777b2dffe766ead",
                    "6b58bfd60fc3150331254a46d2e75f0856f5d0ae"
                ]
            },
            {
                "name": "LummaStealer",
                "count": 539,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "f9e8d701de1740086da792e2c9be70df261e1832",
                    "20f30e05d2a2de117bdad78811946e112dc4dd6c",
                    "2987e30402370bdcbf291aedc9cd52a9a79bda0c"
                ]
            },
            {
                "name": " \"js.clearfake\"",
                "count": 397,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"w1n_554p[.]quantomix[.]in[.]net\"",
                    " \"r5h_882c[.]quantomix[.]in[.]net\"",
                    " \"m2q_119x[.]quantomix[.]in[.]net\""
                ]
            },
            {
                "name": "Vidar",
                "count": 392,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "597545892f122729047032705d557fe787138c32",
                    "8af633744198ffd5bb1e437173eb0292f95c668e",
                    "edda834f9d99ba5d22b01adfab9c69873fa7c47c"
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
        "topAttackVector": "Malicious IPs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": "malware_download",
        "totalAttacksThisHour": 43015,
        "lastCalculated": "2026-03-11 00:52 IST"
    }
};
