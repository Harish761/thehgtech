// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-03-09T00:28:44.735666+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-03-09T00:28:44.499201+05:30",
    "lastUpdatedFormatted": "Mar 09, 2026 at 12:28 AM IST",
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
            "iocCount": 617,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 617,
                "newInLastHour": 57,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"4e0397bca64a379fe67755773f7e85418bc038d5a96770ca2bf5288ec5dae9c6",
                " \"f0906eb7fcc09866de5a4b60306484b56e26b49851c88a40211e21118a45bc1e",
                " \"832300543239f19ce411d79abf1c09907d43672496512c36aeecafa9323b5bd8",
                " \"aa46b4303ee46bc1369441601c3db01dcc1437c896a5529172627b543593d779",
                " \"05a8956aad94f820f16bf78b5e320586b415147327bec05b8e7d143191476258"
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
                "1[.]170[.]60[.]81",
                "1[.]180[.]252[.]30",
                "1[.]188[.]101[.]189",
                "1[.]188[.]23[.]25",
                "1[.]192[.]177[.]65"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 4918,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 4918,
                "newInLastHour": 4918,
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
            "iocCount": 19537,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 19537,
                "newInLastHour": 19537,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxps://boy-net[.]boynitsameow[.]in[.]net/verification[.]google",
                "hxxp://42[.]229[.]161[.]113:58763/i",
                "hxxp://112[.]31[.]189[.]32:57316/i",
                "hxxp://125[.]40[.]227[.]204:59158/i",
                "hxxp://110[.]38[.]209[.]204:43462/bin[.]sh"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 1274,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 1274,
                "newInLastHour": 1052,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"meow-run[.]boynitsameow[.]in[.]net\"",
                " \"18[.]167[.]156[.]37:5676\"",
                " \"twieebcgsds[.]cn\"",
                " \"boy-net[.]boynitsameow[.]in[.]net\"",
                " \"foll-flow[.]excitfollower[.]in[.]net\""
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
            "iocCount": 9205,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 9205,
                "newInLastHour": 8525,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "fecbcfd7dcdac7eb882a84d60e0a0f8aa8413fe0",
                "d98a4d1dd928b3fa1f070ebc2349b4fc5ea9c893",
                "e2a5b820d463b605090d3d833d12252a22cd4510",
                "f78a257ac3bdf0503c3c8e10b84fcee62452df64",
                "1ace32f015a4033140d846ea8c663a5d207804cb"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 38793,
            "activeSources": 8,
            "criticalAlerts": 20841,
            "activeCampaigns": 131
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 20155,
                "trend": "stable",
                "percentage": -2
            },
            {
                "category": "C2",
                "count": 686,
                "trend": "down",
                "percentage": -92
            },
            {
                "category": "Botnet",
                "count": 443,
                "trend": "stable",
                "percentage": -3
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
                "count": 19459,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxps://nord-base[.]navignord[.]in[.]net/verification[.]google",
                    "hxxps://zverda[.]space/FileArchiver[.]rar",
                    "hxxps://exonautis[.]fr/download/Exonautis[.]zip"
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
                "count": 1538,
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
                "name": " \"js.clearfake\"",
                "count": 364,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"axon-ref[.]axonia[.]in[.]net\"",
                    " \"neo-5tor[.]overtmantram[.]in[.]net\"",
                    " \"sparrowmerg[.]overtmantram[.]in[.]net\""
                ]
            },
            {
                "name": "Generic Phishing",
                "count": 292,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://weizihua[.]github[.]io/MyEtherWallet/",
                    "hxxp://www[.]aposicilia[.]com/fr/",
                    "hxxp://landjugend-beckum[.]de/6/6/3/login[.]php"
                ]
            },
            {
                "name": " \"Mirai",
                "count": 241,
                "types": [
                    "hash"
                ],
                "sampleIndicators": [
                    " \"fd7c20ef9bbfe7efb843a762cd2bfc8844353d87a07d52a243053d5367f617be",
                    " \"99bb50fd4b8cc8fedc8301adffb242bab2cb25608da68d2a2a7fd78a7eff7217",
                    " \"d4aa597fd792aecd88f5cbfe1491efa5d14e5caa86a80eed93d8c4800c6ade16"
                ]
            },
            {
                "name": "Vidar",
                "count": 200,
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
                "name": " \"n/a",
                "count": 190,
                "types": [
                    "hash"
                ],
                "sampleIndicators": [
                    " \"510cb9281e7ee38b03d7ac08ad2d8f93bebe37f96adc886236125f67242f83bd",
                    " \"984fd0f96cb6b7c24e9362a46b38aab89f8f3b21741d13012f82eb2c420a4a3f",
                    " \"a59921bcefc601542a2ebd54002169b3decc0af2692b9e416233f4229d1f3baf"
                ]
            },
            {
                "name": " \"win.asyncrat\"",
                "count": 174,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"gate[.]vlxx-xxnn[.]com\"",
                    " \"mail9[.]vlxx-xxnn[.]com\"",
                    " \"mails[.]vlxx-xxnn[.]com\""
                ]
            },
            {
                "name": "OffLoader",
                "count": 112,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "fecbcfd7dcdac7eb882a84d60e0a0f8aa8413fe0",
                    "f78a257ac3bdf0503c3c8e10b84fcee62452df64",
                    "1ace32f015a4033140d846ea8c663a5d207804cb"
                ]
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious URLs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": "AsyncRAT",
        "totalAttacksThisHour": 49394,
        "lastCalculated": "2026-03-09 00:28 IST"
    }
};
