// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-03-09T14:28:17.631307+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-03-09T14:28:17.354091+05:30",
    "lastUpdatedFormatted": "Mar 09, 2026 at 02:28 PM IST",
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
                "hxxps://roblox[.]com[.]ge/games/131306514547473/Sussy-Neko-Obby-ONLY-1-REACH-THE-FINAL?privateServerLinkCode=78817906733575071642525552258439",
                "hxxps://www[.]robiox[.]com[.]gr/games/4924922222/Brookhaven-RP?privateServerLinkCode=80553779994823189053753798129570",
                "hxxps://ferhadbag-maker[.]github[.]io/index[.]/",
                "hxxps://ferhadbag-maker[.]github[.]io/index[.]",
                "hxxps://010365vip[.]com/"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 576,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 576,
                "newInLastHour": 92,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"dd893628d2aa25e542b26e521ced905a75736e4560631e08e1b77673a4691ed8",
                " \"0c5c5e8913579e246fcc2ff96f2fa8f5ce82b296ec0ae4952d25125a94ce5251",
                " \"c712fa2a946d36693a5bed3baeddf48585519ecdb28270bb0395ff18039b7404",
                " \"62912d57d1863bfc672fb26ed3954b937ea83661ab8ae7ac4db4131ea8347000",
                " \"87361ba2bb412dcf49f8738f3b8b9b7dccb557ad2e76ea8d98ffa5b098ae3886"
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
                "1[.]14[.]3[.]240",
                "1[.]170[.]47[.]69",
                "1[.]170[.]60[.]81",
                "1[.]188[.]103[.]101",
                "1[.]188[.]23[.]25"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 7177,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 7177,
                "newInLastHour": 7177,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]12[.]45[.]226",
                "1[.]161[.]39[.]103",
                "1[.]163[.]253[.]212",
                "1[.]164[.]175[.]17",
                "1[.]194[.]225[.]247"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 19482,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 19482,
                "newInLastHour": 19482,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://219[.]154[.]175[.]220:54462/i",
                "hxxps://link-logic[.]astronis[.]in[.]net/verification[.]google",
                "hxxp://110[.]37[.]115[.]91:37452/bin[.]sh",
                "hxxps://niv-flow[.]niventa[.]in[.]net/verification[.]google",
                "hxxps://term-sync[.]niventa[.]in[.]net/verification[.]google"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 1041,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 1041,
                "newInLastHour": 990,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"tkmfinancialservices[.]com\"",
                " \"northernvirginiapainting[.]com\"",
                " \"138[.]197[.]14[.]95:80\"",
                " \"134[.]122[.]13[.]34:8979\"",
                " \"fraziewealthmanagement[.]com\""
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
            "iocCount": 9198,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 9198,
                "newInLastHour": 27,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "8af633744198ffd5bb1e437173eb0292f95c668e",
                "edda834f9d99ba5d22b01adfab9c69873fa7c47c",
                "0ede08cde79bd849d4cb3f6a3bf44159375e7942",
                "1906000bcbc6369f6361efa108bb803414e8e130",
                "472eb1f7d78f14512fb0fe4c9f1c62ae4b25d024"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 46827,
            "activeSources": 8,
            "criticalAlerts": 29047,
            "activeCampaigns": 216
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 19885,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "C2",
                "count": 9162,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 409,
                "trend": "stable",
                "percentage": 0
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
            }
        ],
        "campaigns": [
            {
                "name": "malware_download",
                "count": 19288,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://125[.]41[.]136[.]64:40455/bin[.]sh",
                    "hxxp://110[.]39[.]252[.]138:50497/i",
                    "hxxps://raw[.]githubusercontent[.]com/Sacapalabanda/VALORANT-EFI-DRIVVER-Cheat-Hack/refs/heads/main/Hyprism/workflows/Cheat-DRIVVE-Hack-VALORAN-EF-spondaical[.]zip"
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
                    "1[.]170[.]60[.]81",
                    "1[.]188[.]101[.]189"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1537,
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
                "count": 1387,
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
                "count": 632,
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
                "name": " \"js.clearfake\"",
                "count": 387,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"dist-core[.]veloxis[.]in[.]net\"",
                    " \"lumi-edge[.]lumitron[.]in[.]net\"",
                    " \"ops-unit[.]lumitron[.]in[.]net\""
                ]
            },
            {
                "name": "Vidar",
                "count": 383,
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
        "fastestRisingThreat": "SSH Attacks",
        "totalAttacksThisHour": 43074,
        "lastCalculated": "2026-03-09 14:28 IST"
    }
};
