// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-10-05T03:19:11.057778+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-10-05T03:19:10.670040+05:30",
    "lastUpdatedFormatted": "Oct 05, 2026 at 03:19 AM IST",
    "comparisonPeriod": "Oct 04 \u2013 Oct 05, 2026",
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
                "hxxps://www[.]roblox[.]ly/users/2892759210/profile",
                "hxxp://infomx-account-com[.]help/a[.]php",
                "hxxp://location-gpsmx-satelite[.]help/a[.]php",
                "hxxp://soporte-app-gps[.]us/a[.]php",
                "hxxp://www[.]chat-group-as-ruby[.]vercel[.]app/"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 1000,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 1000,
                "newInLastHour": 14,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"a62ae903603179c7f3cca4548bd2b46fdb4e13b3896f1e9a529813e13601ef82",
                " \"c34ebc389e99c4bfbddf726fc6f357aa625efb8afdf2abceef9454ab4026d687",
                " \"92365a186dec592d0741d2bf29cffd80029e56394311bde51d424abfdae3347b",
                " \"0b667fe4fc990f75d0ff341a3a8c0a6a8939006cbf74d1250e536dcaa020e262",
                " \"26774e49d90c14c84cf1a99a466f22e474db036d97b05e9cdef94d7bfe49cfc0"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1643,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1643,
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
                "1[.]14[.]149[.]30",
                "1[.]15[.]14[.]29",
                "1[.]203[.]186[.]149",
                "1[.]213[.]214[.]233",
                "1[.]215[.]43[.]201"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 0,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 0,
                "newInLastHour": 0,
                "lastUpdate": "just now"
            },
            "types": [],
            "sampleIndicators": []
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 16598,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 16598,
                "newInLastHour": 16598,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://193[.]178[.]158[.]57/bin/f83ecc00a27c5716_hwbp_syst_B2nASg1e[.]exe",
                "hxxp://182[.]112[.]31[.]192:54978/i",
                "hxxp://175[.]147[.]89[.]184:45139/bin[.]sh",
                "hxxp://175[.]147[.]89[.]184:45139/i",
                "hxxp://42[.]54[.]66[.]173:39782/i"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 11033,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 11033,
                "newInLastHour": 7775,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"skatools[.]com\"",
                " \"setsistemas[.]com\"",
                " \"solarenergypanelsonline[.]com\"",
                " \"tpkwireless[.]com\"",
                " \"kivahanpatisserie[.]com\""
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
            "iocCount": 2272,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 2272,
                "newInLastHour": 0,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "2d22783f272d8fb12ff94ac13466fcd9a9a2ccc2",
                "fec72b31ad1f9e2e080c83f3964b34fe81e4a8e4",
                "bfc3decb728fc2becb887cc23c6cf46a2fdcbb8d",
                "1c04120f29c25a1e06b4f48651fc9eaaecd45eaa",
                "07fa3f9a48cdbe0d045c16a741f09237aacf2c3d"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 56635,
            "activeSources": 8,
            "criticalAlerts": 28518,
            "activeCampaigns": 255
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 17652,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "C2",
                "count": 10866,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 4198,
                "trend": "stable",
                "percentage": -1
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
            }
        ],
        "campaigns": [
            {
                "name": "malware_download",
                "count": 16563,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://175[.]165[.]86[.]203:54160/bin[.]sh",
                    "hxxp://116[.]72[.]151[.]234:45914/i",
                    "hxxp://115[.]63[.]8[.]6:42824/i"
                ]
            },
            {
                "name": "CINS Threat List",
                "count": 15000,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]12[.]229[.]231",
                    "1[.]14[.]149[.]30",
                    "1[.]189[.]248[.]116"
                ]
            },
            {
                "name": " \"unknown_loader\"",
                "count": 2660,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"call-united[.]com\"",
                    " \"cvpro4u[.]com\"",
                    " \"depannage-porte-sectionnelle[.]com\""
                ]
            },
            {
                "name": " \"elf.mirai\"",
                "count": 1936,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"6405e74062001cee6bd48304ef8fa7a1ef8851533b29a48f80dc9f06f2ba8fef\"",
                    " \"c1733f4b2ace718b484b9d63af7713ddda9c6e9a182fec4e55b80d6ee56f635c\"",
                    " \"73362f2cb172216654c2f73341cbf23eceb67e39f9c125e7b719d2d73f261fab\""
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1691,
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
                "count": 1459,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "58b3990b07e9caaa2c504a5b9759d14eefcbc5e5",
                    "64c5f719aa0111be2ac04d785a8904b5baa22a88",
                    "5fe196813d0bf092a5d8f3ef550fe959a86ccf87"
                ]
            },
            {
                "name": " \"win.asyncrat\"",
                "count": 1409,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"main-tg88[.]store\"",
                    " \"vsbet-official[.]com\"",
                    " \"93[.]233[.]96[.]34:51123\""
                ]
            },
            {
                "name": " \"win.cobalt_strike\"",
                "count": 1315,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"144[.]172[.]68[.]200:8443\"",
                    " \"115[.]159[.]101[.]177:50050\"",
                    " \"106[.]55[.]253[.]229:8080\""
                ]
            },
            {
                "name": "Vidar",
                "count": 816,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "80a11d8978c116516b3e6e0dabdcd381bc3511a1",
                    "30cc75ff5ee466fba938458513d89d8270a5b882",
                    "60fd7f114b0a4015ad7f634223491259bc50ab7d"
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
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious URLs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": "malware_download",
        "totalAttacksThisHour": 39692,
        "lastCalculated": "2026-10-05 03:19 IST"
    }
};
