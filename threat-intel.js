// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-10-05T01:02:31.342410+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-10-05T01:02:30.923727+05:30",
    "lastUpdatedFormatted": "Oct 05, 2026 at 01:02 AM IST",
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
            "iocCount": 1063,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 1063,
                "newInLastHour": 54,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"0577e2fd8f5da73991195505977723893ae8178d436ca747440eeb1ff9738bf9",
                " \"69240b9b37b2df84445847e4a5cbafb97e78927f288bd47f2a6519fde8465284",
                " \"344d1bb0ea95a2699d7ee461e4deaaaac2260048a29b0e5ec63bca6924e547bb",
                " \"95b54f0e5d5d5ef2bd87167bb0da4dd553aaf2da8e6a3a919e0ce881a78b6124",
                " \"3c579af3ac3f294aebdcbb98d326c5046a135bd1a159ba6c1a2ad6b2fbfe1dd5"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1691,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1691,
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
                "1[.]12[.]229[.]231",
                "1[.]14[.]149[.]30",
                "1[.]189[.]248[.]116",
                "1[.]193[.]56[.]152",
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
            "iocCount": 16563,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 16563,
                "newInLastHour": 16563,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://175[.]165[.]86[.]203:54160/bin[.]sh",
                "hxxp://116[.]72[.]151[.]234:45914/i",
                "hxxp://115[.]63[.]8[.]6:42824/i",
                "hxxp://163[.]142[.]95[.]133:35060/i",
                "hxxp://222[.]127[.]77[.]227:55176/i"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 11125,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 11125,
                "newInLastHour": 8018,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"call-united[.]com\"",
                " \"cvpro4u[.]com\"",
                " \"depannage-porte-sectionnelle[.]com\"",
                " \"energiainnovadora[.]com\"",
                " \"fitnessstudiopk[.]com\""
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
            "iocCount": 10888,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 10888,
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
            "totalIndicators": 56597,
            "activeSources": 8,
            "criticalAlerts": 28463,
            "activeCampaigns": 257
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 17597,
                "trend": "stable",
                "percentage": 2
            },
            {
                "category": "C2",
                "count": 10866,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 4272,
                "trend": "stable",
                "percentage": -3
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
                "count": 16475,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://180[.]190[.]203[.]41:50927/bin[.]sh",
                    "hxxp://42[.]226[.]65[.]18:39212/bin[.]sh",
                    "hxxp://113[.]230[.]63[.]71:50480/i"
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
                "count": 2636,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"hxxps://scan[.]cyberessentials[.]live/usersc/testfiles/macro/CEPlus[.]xlsm\"",
                    " \"hxxps://pub-db23b45b467441be828e9d97aa4997b6[.]r2[.]dev/mw3/MW3-XPLOITRON[.]exe\"",
                    " \"portalrioeste[.]com[.]br\""
                ]
            },
            {
                "name": " \"elf.mirai\"",
                "count": 1815,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"f2911fe9394e3d09f36be8d6c17b62fde5fab04d1e985173f23a543111c97fac\"",
                    " \"fc4e159f8478673943d1d52366f5c274f95fd6ddb3618bd75b873154e72fca0a\"",
                    " \"15c488a330362ce5dd621b40a057f8ee98d9f1a962e3f440acec53e34874dbeb\""
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
                "count": 1379,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"vsbet-official[.]com\"",
                    " \"93[.]233[.]96[.]34:51123\"",
                    " \"93[.]233[.]96[.]34:51124\""
                ]
            },
            {
                "name": " \"win.cobalt_strike\"",
                "count": 1322,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"106[.]55[.]253[.]229:8080\"",
                    " \"106[.]55[.]253[.]229:22\"",
                    " \"106[.]55[.]253[.]229:443\""
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
        "fastestRisingThreat": " \"elf.mirai\"",
        "totalAttacksThisHour": 39940,
        "lastCalculated": "2026-10-05 01:02 IST"
    }
};
