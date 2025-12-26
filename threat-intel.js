// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2025-12-27T02:01:56.949713+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2025-12-27T02:01:56.599788+05:30",
    "lastUpdatedFormatted": "Dec 27, 2025 at 02:01 AM IST",
    "comparisonPeriod": "Dec 26 \u2013 Dec 27, 2025",
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
                "hxxps://clickg2[.]com/lander/bouygues-fr--2-euro-/index[.]html",
                "hxxps://undian-shopee194[.]blogspot[.]com/",
                "hxxps://roblox[.]com[.]ge/communities/3889502855/",
                "hxxp://steamcounmunity[.]com/mirage",
                "hxxps://roblox[.]com[.]py/communities/4353415872/"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 1042,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 1042,
                "newInLastHour": 57,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"9103f9b3eb29575bd66ee638686940cd2be44518e8e70c1b84a63eefb02ea9c2",
                " \"b08c83f91138b07c2a9ec9dace60ef42fe0abd9a7d9fc5b50ab6200d71d0ac66",
                " \"d8e98e4dd365b3dbbe322504c3ce1ce69930dbba8572167d2ad1531594079c27",
                " \"5c2c44c4122633729164253f0e7a1aa41396f146e38d51e389433bf32543c25e",
                " \"3f4eaf7f46a580171091e644d35798c6b4bf5711456f649325986b0662f3e7ba"
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
                "1[.]15[.]118[.]23",
                "1[.]15[.]149[.]209",
                "1[.]157[.]99[.]66",
                "1[.]171[.]20[.]54",
                "1[.]171[.]34[.]122"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 5118,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 5118,
                "newInLastHour": 5118,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]14[.]95[.]153",
                "1[.]171[.]20[.]54",
                "1[.]214[.]197[.]163",
                "1[.]220[.]64[.]218",
                "1[.]221[.]66[.]66"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 27409,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 27409,
                "newInLastHour": 27409,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://42[.]235[.]16[.]251:51909/i",
                "hxxp://110[.]37[.]125[.]10:56512/bin[.]sh",
                "hxxp://91[.]208[.]206[.]49/wget[.]sh",
                "hxxp://91[.]208[.]206[.]49/x86_64",
                "hxxp://91[.]208[.]206[.]49/arm7"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 901,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 901,
                "newInLastHour": 751,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"awqiq4uh[.]amber-weld[.]ru\"",
                " \"3bi6uxbg[.]amber-weld[.]ru\"",
                " \"150[.]95[.]27[.]35:80\"",
                " \"3[.]143[.]145[.]55:443\"",
                " \"196[.]75[.]131[.]213:2222\""
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
            "iocCount": 8687,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 8687,
                "newInLastHour": 0,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "77ccc60769c2fcec1b720094cdaa0ff49e37227d",
                "8e22e996d0215c4e2cb73e5621cb9de904b861cf",
                "8b31dc2519edfe1fdac0ab790b3eae4bcb7ac4b3",
                "5afb5e6087c16b75b0bcf2a8aa2f1a530d333563",
                "46d2b4f1f4f2badc2f587f68386945a0c835c4ba"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 54642,
            "activeSources": 8,
            "criticalAlerts": 36959,
            "activeCampaigns": 198
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 28292,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "C2",
                "count": 8667,
                "trend": "up",
                "percentage": 4968
            },
            {
                "category": "Botnet",
                "count": 356,
                "trend": "stable",
                "percentage": 2
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
                "percentage": 98
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
                "count": 27255,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://110[.]36[.]16[.]78:42534/bin[.]sh",
                    "hxxp://182[.]126[.]123[.]57:55370/i",
                    "hxxp://182[.]121[.]251[.]42:40547/i"
                ]
            },
            {
                "name": "CINS Threat List",
                "count": 15000,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]15[.]118[.]23",
                    "1[.]15[.]149[.]209",
                    "1[.]157[.]99[.]66"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1474,
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
                "count": 1363,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "1a5aa767c2675014c5c0a10b2d9f4c63844a84f8",
                    "3a56a66eb43b679afa1edb58e0fddcadf74bb2a4",
                    "47800989ef4eda671b2a76a0cd9123ec7b0bc324"
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
                "count": 599,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "69affd6a91e38229fb655a62a52eb2b7af9fdfb4",
                    "be3b160ebe83bfc2e609bf912b36096e8dd2ffa3",
                    "243253f396aa30124e62cdd95a58cf8a3353fd88"
                ]
            },
            {
                "name": " \"Mirai",
                "count": 568,
                "types": [
                    "hash"
                ],
                "sampleIndicators": [
                    " \"5e112c695088bcf4aa2b573146555cd2d00bca46913dcd3bfd38ec4e94cbbc99",
                    " \"6b2b7a39f36b725b0959753444db43269aa1590ae3f5b55d8fff9eda8ec27016",
                    " \"9632cbbe2623111533bb9228b0bda0225721ab8378e1e6327173ff5d1dfc4082"
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
                "name": " \"js.clearfake\"",
                "count": 397,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"y5oo3pq2[.]amberweld[.]ru\"",
                    " \"w0tsflfs[.]sn1rlbucket[.]ru\"",
                    " \"79zxno9i[.]sn1rlbucket[.]ru\""
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
        "totalAttacksThisHour": 48639,
        "lastCalculated": "2025-12-27 02:01 IST"
    }
};
