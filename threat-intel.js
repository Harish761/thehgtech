// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-04-05T00:38:28.111311+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-04-05T00:38:27.828564+05:30",
    "lastUpdatedFormatted": "Apr 05, 2026 at 12:38 AM IST",
    "comparisonPeriod": "Apr 04 \u2013 Apr 05, 2026",
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
                "hxxps://mdfarhan2550[.]github[.]io/amazon-clone/",
                "hxxp://f[.]digitalmaillane[.]com/igit/4/34wile9Pth4mtcv6mgPqixPscb1pzP5glPhiaPt6PmPf",
                "hxxps://www[.]robiox[.]com[.]py/users/315882877417/profile",
                "hxxps://roblox[.]com[.]ge/games/122403119468732/UPDATE-Bathroom-Vibe?privateServerLinkCode=73308487343188275213422670089349",
                "hxxps://www[.]netflix-clone-nu-nine[.]vercel[.]app/"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 439,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 439,
                "newInLastHour": 31,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"1bf3dd9d65a5424e50366f3f3a95d870e2ff93252e30a8e5964e785a68676d03",
                " \"aa8b48023efb7fcfc7d52f895770210874aaaf7d52c39bea2830c930847d1e84",
                " \"dfef2a4891f8b740e75b04a676fe4cb1657e3ab8ded9cb5f50be804068205c97",
                " \"40efc09351a85f9c38fe203c9ca174b1f15651934a3915fd7db18a89246df759",
                " \"58a28a05c1a68fbb5a9988b2f046a289dbf277fe95f3aeec8f8d6a7373324539"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1585,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1585,
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
                "1[.]14[.]3[.]240",
                "1[.]175[.]223[.]160",
                "1[.]176[.]134[.]241",
                "1[.]176[.]134[.]253"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 4564,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 4564,
                "newInLastHour": 4564,
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
            "iocCount": 21435,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 21435,
                "newInLastHour": 21435,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxps://open-book[.]edunoppress[.]in[.]net/05fe317c-0981-4de2-bc8a-930d369db441/verification[.]google",
                "hxxp://59[.]88[.]141[.]99:46930/Mozi[.]m",
                "hxxps://edu-portal[.]edunoppress[.]in[.]net/05fe317c-0981-4de2-bc8a-930d369db441/verification[.]google",
                "hxxp://112[.]248[.]105[.]38:50784/i",
                "hxxp://116[.]139[.]187[.]150:53084/i"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 540,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 540,
                "newInLastHour": 521,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"open-book[.]edunoppress[.]in[.]net\"",
                " \"edu-portal[.]edunoppress[.]in[.]net\"",
                " \"class-sync[.]edunoppress[.]in[.]net\"",
                " \"learn-gate[.]edunoppress[.]in[.]net\"",
                " \"study-flow[.]edunoppress[.]in[.]net\""
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
            "iocCount": 9427,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 9427,
                "newInLastHour": 15,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "ca8379ace3a696f4d68c40670d25330165101e17",
                "2a3041427baffe71000819e2aaef9b3da5d3a5c4",
                "98c4ebd74e323dbf48000595c478afa4b953928f",
                "deff511f627ab662c23d4ee22cdf78869e1c194f",
                "2257a937ef96cd4821519404b0db02a2f3b506fa"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 48648,
            "activeSources": 8,
            "criticalAlerts": 31273,
            "activeCampaigns": 192
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 21848,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "C2",
                "count": 9425,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Phishing",
                "count": 301,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 285,
                "trend": "stable",
                "percentage": -4
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
                "count": 21379,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxps://step-check[.]logicstream[.]in[.]net/verification[.]google",
                    "hxxp://222[.]140[.]130[.]223:49049/bin[.]sh",
                    "hxxps://main-frame[.]logicstream[.]in[.]net/verification[.]google"
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
                    "1[.]176[.]134[.]241"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1602,
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
                "count": 1394,
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
                "count": 659,
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
                "count": 548,
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
                "count": 469,
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
                "count": 375,
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
        "totalAttacksThisHour": 41872,
        "lastCalculated": "2026-04-05 00:38 IST"
    }
};
