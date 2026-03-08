// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-03-09T02:08:18.759985+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-03-09T02:08:18.468572+05:30",
    "lastUpdatedFormatted": "Mar 09, 2026 at 02:08 AM IST",
    "comparisonPeriod": "Mar 08 \u2013 Mar 09, 2026",
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
                "hxxp://weizihua[.]github[.]io/MyEtherWallet/",
                "hxxp://www[.]aposicilia[.]com/fr/",
                "hxxp://landjugend-beckum[.]de/6/6/3/login[.]php",
                "hxxps://imtokens[.]co/",
                "hxxps://roblox[.]com[.]ge/games/134374929677249/Obby-Vibe-Zone-NEW-POSES?privateServerLinkCode=25600398208546000332254510437439"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 522,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 522,
                "newInLastHour": 32,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"ef838feb7da5f2375104712d6ddf3eef1cffc8f7899d877806205df69995c487",
                " \"2d448e3cdcaf941c910cad128a2c421e993a15cf2f35003805a56cf32fe11fd0",
                " \"be016ca4dd640e1b3e8b7aa5cdfd25dcea380588d0f21cbe4b043f70624af307",
                " \"1bb935b82759b360be241e1fbd0083889b8d1716bba650f4c786a98f4b6e50c0",
                " \"dcb445475f9c1f904eef13fb0f30d82b8d9c6af3a10659af2240d73dd9f26e92"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1538,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1538,
                "newInLastHour": 4,
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
                "1[.]170[.]60[.]81",
                "1[.]180[.]252[.]30",
                "1[.]188[.]101[.]189",
                "1[.]188[.]23[.]25"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 5576,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 5576,
                "newInLastHour": 5576,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]12[.]45[.]226",
                "1[.]15[.]136[.]28",
                "1[.]164[.]175[.]17",
                "1[.]194[.]225[.]247",
                "1[.]194[.]238[.]108"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 19665,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 19665,
                "newInLastHour": 19665,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxps://harvest-map[.]harvestgrove[.]in[.]net/verification[.]google",
                "hxxp://112[.]232[.]15[.]46:46367/i",
                "hxxp://182[.]113[.]4[.]159:60238/i",
                "hxxps://mant-net[.]overtmantram[.]in[.]net/verification[.]google",
                "hxxp://27[.]219[.]122[.]227:49622/i"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 1129,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 1129,
                "newInLastHour": 907,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"harvest-map[.]harvestgrove[.]in[.]net\"",
                " \"mant-net[.]overtmantram[.]in[.]net\"",
                " \"overt-base[.]overtmantram[.]in[.]net\"",
                " \"mant-v11[.]overtmantram[.]in[.]net\"",
                " \"overt-ref[.]overtmantram[.]in[.]net\""
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
            "iocCount": 9208,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 9208,
                "newInLastHour": 3,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "1906000bcbc6369f6361efa108bb803414e8e130",
                "472eb1f7d78f14512fb0fe4c9f1c62ae4b25d024",
                "fecbcfd7dcdac7eb882a84d60e0a0f8aa8413fe0",
                "d98a4d1dd928b3fa1f070ebc2349b4fc5ea9c893",
                "e2a5b820d463b605090d3d833d12252a22cd4510"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 47472,
            "activeSources": 8,
            "criticalAlerts": 29361,
            "activeCampaigns": 227
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 20178,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "C2",
                "count": 9183,
                "trend": "up",
                "percentage": 1238
            },
            {
                "category": "Botnet",
                "count": 588,
                "trend": "up",
                "percentage": 32
            },
            {
                "category": "Phishing",
                "count": 303,
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
                "percentage": 1
            },
            {
                "name": "Finance",
                "percentage": 0
            }
        ],
        "campaigns": [
            {
                "name": "malware_download",
                "count": 19537,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxps://boy-net[.]boynitsameow[.]in[.]net/verification[.]google",
                    "hxxp://42[.]229[.]161[.]113:58763/i",
                    "hxxp://112[.]31[.]189[.]32:57316/i"
                ]
            },
            {
                "name": "CINS Threat List",
                "count": 15000,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]170[.]60[.]81",
                    "1[.]180[.]252[.]30",
                    "1[.]188[.]101[.]189"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1534,
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
                "count": 634,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "6b58bfd60fc3150331254a46d2e75f0856f5d0ae",
                    "78372e9666177fc65dbd5a41286bcd2f22c12bf0",
                    "58d0977e2eb2f58b80c1441ac8a77c7da332b266"
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
                "name": "Vidar",
                "count": 394,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "fc13b72e3fbc49e25fb617047297c3d1bf51da7f",
                    "493192edea58ec659ee270032660c6113e9b448e",
                    "b84f367205c3150a29707120bc237a5161d8886e"
                ]
            },
            {
                "name": " \"js.clearfake\"",
                "count": 382,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"meow-run[.]boynitsameow[.]in[.]net\"",
                    " \"boy-net[.]boynitsameow[.]in[.]net\"",
                    " \"foll-flow[.]excitfollower[.]in[.]net\""
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
        "fastestRisingThreat": "SSH Attacks",
        "totalAttacksThisHour": 41492,
        "lastCalculated": "2026-03-09 02:08 IST"
    }
};
