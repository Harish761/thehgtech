// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-09-29T16:06:39.485246+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-09-29T16:06:39.165808+05:30",
    "lastUpdatedFormatted": "Sep 29, 2026 at 04:06 PM IST",
    "comparisonPeriod": "Sep 28 \u2013 Sep 29, 2026",
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
                "hxxps://s[.]teams-ri[.]com/p/fjbd-cbch/aozzhxpi/",
                "hxxps://postoffice[.]claimhere[.]co[.]uk/support/home",
                "hxxps://postoffice[.]claimhere[.]co[.]uk/?mc_phishing_protection_id=191111-datccmsjqk5qfuqhnrcg",
                "hxxps://lnk[.]ink/U9OBT",
                "hxxps://www[.]roblox[.]com[.]do/games/118805555015549/Enhance1-Loot-To-Forge?privateServerLinkCode=179342586811142356386742832737"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 1308,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 1308,
                "newInLastHour": 281,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"7a4dcfa6f8c24150bb6f751e7c8c6b3a628cfac25dd6989c3b5b050c56259bc1",
                " \"c37fe23eff2c9d1c879ad5493a86666aed1d9551c12c9a38cc3fcbc7ea33cdd2",
                " \"3a98d48c9346e330c7eaccdd25d231e735958f5029e7756b2f9deec75b8125f2",
                " \"5d4242262fb4b13a8ee8c13d040dbe3820b6729d9d5924d48b78f3df53f3f94a",
                " \"1c7df6430643164ca8a0b2f36ff5cc2b27ee88ef4132b0f62160fe523c91c383"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1692,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1692,
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
                "1[.]117[.]171[.]170",
                "1[.]15[.]14[.]29",
                "1[.]193[.]63[.]101",
                "1[.]215[.]43[.]201",
                "1[.]24[.]16[.]103"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 5134,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 5134,
                "newInLastHour": 5134,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]0[.]164[.]165",
                "1[.]117[.]72[.]220",
                "1[.]15[.]77[.]170",
                "1[.]162[.]248[.]139",
                "1[.]2[.]187[.]97"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 15066,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 15066,
                "newInLastHour": 15066,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://116[.]140[.]72[.]57:42295/i",
                "hxxp://120[.]84[.]214[.]68:34472/bin[.]sh",
                "hxxp://113[.]203[.]196[.]89:53938/i",
                "hxxp://42[.]229[.]218[.]253:49209/bin[.]sh",
                "hxxp://222[.]127[.]170[.]183:51305/bin[.]sh"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 9100,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 9100,
                "newInLastHour": 7768,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"213[.]5[.]130[.]233:4782\"",
                " \"85[.]17[.]92[.]21:443\"",
                " \"80[.]76[.]49[.]48:5050\"",
                " \"46[.]246[.]6[.]15:8848\"",
                " \"45[.]127[.]32[.]150:57781\""
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
            "iocCount": 10840,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 10840,
                "newInLastHour": 18,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "a2e76af14703e85cc8a27f108e0ee93ce2d9afb4",
                "c234496c7b0abcd873bb6bb5a54288b6d340b6ff",
                "6aa91683111e7ecf0bc61912fecc00b294754b4e",
                "51616539837604afac222acc6e7a1cd2933f9b38",
                "557d7dfc6cc7127dfa30f7b31aa6462b21017d0a"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 55809,
            "activeSources": 8,
            "criticalAlerts": 26909,
            "activeCampaigns": 255
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 16109,
                "trend": "stable",
                "percentage": -2
            },
            {
                "category": "C2",
                "count": 10800,
                "trend": "stable",
                "percentage": 3
            },
            {
                "category": "Botnet",
                "count": 4465,
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
                "name": "CINS Threat List",
                "count": 15000,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]0[.]214[.]36",
                    "1[.]117[.]171[.]170",
                    "1[.]192[.]129[.]106"
                ]
            },
            {
                "name": "malware_download",
                "count": 14799,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://42[.]237[.]34[.]191:60213/i",
                    "hxxp://220[.]177[.]11[.]230:54471/bin[.]sh",
                    "hxxp://222[.]127[.]170[.]183:51305/i"
                ]
            },
            {
                "name": " \"win.asyncrat\"",
                "count": 4324,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"36[.]255[.]97[.]47:6606\"",
                    " \"63[.]176[.]174[.]154:4449\"",
                    " \"83[.]136[.]210[.]2:6666\""
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1692,
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
                "count": 1452,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "cb7fcaede3c6bb75e73ee72b8de7c23de2953dd4",
                    "990472ad57a4d7dcb13689a21b0c84252f5cf0a5",
                    "99500e5de097a58d95775e1f9da85597851bdb71"
                ]
            },
            {
                "name": " \"win.cobalt_strike\"",
                "count": 1428,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"114[.]215[.]184[.]158:1099\"",
                    " \"95[.]217[.]135[.]208:8080\"",
                    " \"114[.]215[.]184[.]158:22\""
                ]
            },
            {
                "name": " \"unknown_loader\"",
                "count": 1181,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"hxxps://buldumaski[.]cfd/apk/Ask%20Bul%20I%CC%87ndirici[.]apk\"",
                    " \"hxxps://scan[.]cyberessentials[.]live/usersc/testfiles/macro/CEPlus[.]docm\"",
                    " \"e38c53aedf49017c47725e4912fc7560e1c8ece2633c05057b22fd4a8ed28eb3\""
                ]
            },
            {
                "name": " \"js.iclickfix\"",
                "count": 1176,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"allowcheckd3[.]cc\"",
                    " \"cove-koi-hk753[.]xyz\"",
                    " \"ochre-quill-buindbaio[.]icu\""
                ]
            },
            {
                "name": "Vidar",
                "count": 806,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "86b5a5612e53988e28ed6604e8e9ff5476a46d0e",
                    "605e0b79c4a685b7da9524d6b71ec36bbd651b07",
                    "5f5d3a3225006f45ff8194536ef8e09cb194884d"
                ]
            },
            {
                "name": " \"Mirai",
                "count": 755,
                "types": [
                    "hash"
                ],
                "sampleIndicators": [
                    " \"70c545039eefe7d2333f47b809823fc09fc06b09e8dec33da42d80330777303b",
                    " \"93ed87581ecce61b2a9538a58c6a2918dc17cd17a7d1925e84d8d94a604b3a4c",
                    " \"5c52d0a934ebb03e0f0a3e95c5efea11267181c9d2b89c10eda94e75454599a7"
                ]
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious URLs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": "malware_download",
        "totalAttacksThisHour": 43572,
        "lastCalculated": "2026-09-29 16:06 IST"
    }
};
