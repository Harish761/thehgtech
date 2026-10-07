// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-10-08T02:43:43.231253+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-10-08T02:43:42.791760+05:30",
    "lastUpdatedFormatted": "Oct 08, 2026 at 02:43 AM IST",
    "comparisonPeriod": "Oct 07 \u2013 Oct 08, 2026",
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
                "hxxp://www[.]csverifyme[.]com/",
                "hxxps://www[.]mazonniraq[.]com/",
                "hxxps://mmmm-nu-eight[.]vercel[.]app/",
                "hxxp://www[.]comcastinfoupdatesnow[.]weebly[.]com/",
                "hxxp://moonpay-commerce-ijsgokz66-heliofi[.]vercel[.]app/"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 1354,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 1354,
                "newInLastHour": 183,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"4c9f10d15948a46a365ba85af1b32a71ed563a59b0750639062ad55037dcf35b",
                " \"c8fa95f0b20f773f854a1b2d8147789aae5036033faa9eb9d33444feed150c3f",
                " \"a0870e2e08b510fe1cdee16809d0739e8e874be403a32966af3104cd72d01aa9",
                " \"09e877f618b21a60f6f5fa19c3b40a37864ca0ce0a9c9fd30590866e6f1fe592",
                " \"053f3268d31bd5ed129e6f0f5380a29fd90301caa1b7aff47015060097b5093e"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1670,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1670,
                "newInLastHour": 40,
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
                "1[.]15[.]14[.]29",
                "1[.]179[.]41[.]48",
                "1[.]188[.]103[.]91",
                "1[.]193[.]63[.]138",
                "1[.]215[.]138[.]43"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 4817,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 4817,
                "newInLastHour": 4817,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]0[.]164[.]165",
                "1[.]117[.]24[.]10",
                "1[.]14[.]192[.]95",
                "1[.]14[.]240[.]247",
                "1[.]15[.]221[.]192"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 31421,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 31421,
                "newInLastHour": 31421,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://91[.]92[.]242[.]236/files-129312398/files/file_a91bba92fab4558e[.]exe",
                "hxxp://78[.]38[.]123[.]220:3363/i",
                "hxxp://42[.]177[.]197[.]176:45748/bin[.]sh",
                "hxxp://163[.]142[.]95[.]171:44234/i",
                "hxxp://114[.]226[.]203[.]225:40173/bin[.]sh"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 8504,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 8504,
                "newInLastHour": 7555,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"196[.]77[.]102[.]208:8808\"",
                " \"alarmas[.]solutions\"",
                " \"3d-loft[.]com[.]ua\"",
                " \"allmotovelo[.]com[.]ua\"",
                " \"cosmari[.]com[.]ua\""
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
            "iocCount": 10906,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 10906,
                "newInLastHour": 125,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "001a8f07b150e2b1d6bcb715fd95c20a1e24dac3",
                "97b346a6656f38507fae979537c0baa86186a2d7",
                "a095f06a7ac8b272c1dd2e14e3b2508f4e4f86e3",
                "59478ff95804dce8ca9ac41fab9bee313879a882",
                "0f7363fdd9210d5cdcc0c7fa60a88b4a582fef18"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 68711,
            "activeSources": 8,
            "criticalAlerts": 43320,
            "activeCampaigns": 287
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 32543,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "C2",
                "count": 10777,
                "trend": "stable",
                "percentage": -1
            },
            {
                "category": "Botnet",
                "count": 4291,
                "trend": "stable",
                "percentage": 0
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
            },
            {
                "name": "Government",
                "percentage": 0
            }
        ],
        "campaigns": [
            {
                "name": "malware_download",
                "count": 31163,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://175[.]167[.]87[.]144:56600/i",
                    "hxxp://218[.]16[.]164[.]137:36531/bin[.]sh",
                    "hxxp://42[.]230[.]40[.]218:51321/i"
                ]
            },
            {
                "name": "CINS Threat List",
                "count": 15000,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]15[.]14[.]29",
                    "1[.]179[.]41[.]48",
                    "1[.]188[.]103[.]91"
                ]
            },
            {
                "name": " \"unknown_loader\"",
                "count": 1781,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"hxxps://chrisniagara[.]cc/\"",
                    " \"zpconstructionca[.]com\"",
                    " \"zugenergie[.]de\""
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1630,
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
                "count": 1456,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "58b3990b07e9caaa2c504a5b9759d14eefcbc5e5",
                    "64c5f719aa0111be2ac04d785a8904b5baa22a88",
                    "205d49b6c7313e16e931e1b5873cc20be0dee85b"
                ]
            },
            {
                "name": " \"win.cobalt_strike\"",
                "count": 1288,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"154[.]12[.]17[.]20:8080\"",
                    " \"154[.]12[.]17[.]20:22\"",
                    " \"154[.]12[.]17[.]20:443\""
                ]
            },
            {
                "name": "Vidar",
                "count": 787,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "6bfc8dafb875c3e2ae6476df215805eb15298cbb",
                    "7a9913813778b16a5bf57aeb7dea4c93340c79c0",
                    "6def2654b3b68fb89142113e6c5ad1b9e866134c"
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
                "count": 710,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "b292d5884328be709c0c79ffd7c82c3fe9846417",
                    "eabc77465bebeb1b8b4980dbaa185cfcf64b4f92",
                    "4768d20d3072a30b168c650b11a9e4d3e1a0dc60"
                ]
            },
            {
                "name": " \"js.clearfake\"",
                "count": 707,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"sawah[.]store\"",
                    " \"daooxmxq[.]djbpmstudio[.]com\"",
                    " \"sarmo[.]store\""
                ]
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious URLs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": "malware_download",
        "totalAttacksThisHour": 59446,
        "lastCalculated": "2026-10-08 02:43 IST"
    }
};
