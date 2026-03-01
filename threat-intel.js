// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-03-01T10:51:32.122143+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-03-01T10:51:31.830332+05:30",
    "lastUpdatedFormatted": "Mar 01, 2026 at 10:51 AM IST",
    "comparisonPeriod": "Feb 28 \u2013 Mar 01, 2026",
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
                "hxxps://www[.]robiox[.]com[.]py/games/102420333679038/LIMITED-TIME-Steal-A-Silksong?privateServerLinkCode=234825868738159702153778770421",
                "hxxps://support[.]rfe-v[.]com/kFlub",
                "hxxps://zhm23[.]github[.]io/netflix-clone",
                "hxxps://www[.]roblox[.]com[.]ml/users/8640321039/profile",
                "hxxps://tsihrewq333[.]pages[.]dev/gp/history/"
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
                "newInLastHour": 2,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"30577961b8385513744ff7dadade82b2a63f8fb2f4355dfa7ff13a067119d281",
                " \"f893677414d3e535739934646d783958e1f54d7c25efb9181f5d853f24e41be5",
                " \"41d25d3154a8e304d84312b49310ddf914339c5410c60c63d6ea8ebcd007b1b9",
                " \"f3a2aa787edbfbc232f116465a70353ef04666daa12f987af552e9f4aae93a07",
                " \"25b6d8bbe40affff5dba4cf204ec6875867486d8cdef1f23c5f4dc70ebd62042"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1534,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1534,
                "newInLastHour": 12,
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
                "1[.]170[.]61[.]110",
                "1[.]177[.]63[.]24",
                "1[.]180[.]252[.]30",
                "1[.]183[.]13[.]74",
                "1[.]188[.]101[.]101"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 6946,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 6946,
                "newInLastHour": 6946,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]194[.]233[.]49",
                "1[.]214[.]117[.]218",
                "1[.]214[.]197[.]163",
                "1[.]214[.]42[.]172",
                "1[.]220[.]64[.]218"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 21887,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 21887,
                "newInLastHour": 21887,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://58[.]47[.]16[.]134:54439/[.]i",
                "hxxp://124[.]94[.]81[.]59:48696/i",
                "hxxp://110[.]37[.]48[.]162:50561/i",
                "hxxp://61[.]3[.]111[.]33:39121/bin[.]sh",
                "hxxp://115[.]50[.]224[.]70:45627/i"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 642,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 642,
                "newInLastHour": 642,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"minascorretora[.]com[.]br\"",
                " \"mim03takerharjo[.]sch[.]id\"",
                " \"168[.]245[.]203[.]30:3790\"",
                " \"84[.]201[.]14[.]2:443\"",
                " \"54[.]249[.]167[.]126:80\""
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
                "178[.]62[.]3[.]223",
                "34[.]204[.]119[.]63"
            ]
        },
        "SSL Blacklist": {
            "description": "Malicious SSL certificates used by botnet C2 servers. Helps detect encrypted malware communications.",
            "website": "https://sslbl.abuse.ch/",
            "updateFrequency": "Daily",
            "iocCount": 9114,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 9114,
                "newInLastHour": 18,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "71d30109639e95033261ac02f9af0383f116b04d",
                "15f062f1105b3c69d4115feb35fa8a012b9e44bf",
                "f1bc1295c44190efd73ccd02bf1a141c6d734103",
                "842225ef85c564000eadbdb8c1a0d60ef0133df5",
                "ae8015c70ccb9dc07b523bf3e5888e199591c9b3"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 49172,
            "activeSources": 8,
            "criticalAlerts": 31698,
            "activeCampaigns": 203
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 22626,
                "trend": "stable",
                "percentage": -1
            },
            {
                "category": "C2",
                "count": 9072,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 469,
                "trend": "up",
                "percentage": 18
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
            },
            {
                "name": "Government",
                "percentage": 0
            }
        ],
        "campaigns": [
            {
                "name": "malware_download",
                "count": 21860,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://42[.]59[.]115[.]225:59235/i",
                    "hxxp://174[.]163[.]48[.]188:52789/bin[.]sh",
                    "hxxp://115[.]58[.]135[.]224:58373/i"
                ]
            },
            {
                "name": "CINS Threat List",
                "count": 15000,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]14[.]3[.]240",
                    "1[.]170[.]61[.]110",
                    "1[.]176[.]134[.]241"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1522,
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
                "count": 1385,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "08ed72afb9e65a6b0c216c2f47dfea81d64c9289",
                    "41fe5784b1b9003fee99a449d0d7b6fa0ce038fe",
                    "77df442635ce9bc4827eb251951620ad789ffadb"
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
                "count": 623,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "1489745b5c5f066b8beaec7181567513ca9eafd2",
                    "a49ad700b0042b6d1e20153a6253bcc8ff17cff2",
                    "56dd33cfae66685bb9cf7f923d6e6752ff791705"
                ]
            },
            {
                "name": "LummaStealer",
                "count": 537,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "2987e30402370bdcbf291aedc9cd52a9a79bda0c",
                    "6fd95f4a2d9cec238cbe2e1756890381c4fae3cb",
                    "e2293f74d8d72bde90bb0424038259a9e3126e1b"
                ]
            },
            {
                "name": "Vidar",
                "count": 371,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "f1bc1295c44190efd73ccd02bf1a141c6d734103",
                    "3257aeb7699555559ab3f9b109e2c761e7939389",
                    "567366638bf367630666c5ae9af1421fb2248f87"
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
        "fastestRisingThreat": "malware_download",
        "totalAttacksThisHour": 44810,
        "lastCalculated": "2026-03-01 10:51 IST"
    }
};
