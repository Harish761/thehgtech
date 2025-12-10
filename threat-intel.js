// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2025-12-10T07:49:30.006955+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2025-12-10T07:49:29.643356+05:30",
    "lastUpdatedFormatted": "Dec 10, 2025 at 07:49 AM IST",
    "comparisonPeriod": "Dec 09 \u2013 Dec 10, 2025",
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
                "hxxps://www[.]robiox[.]com[.]py/users/476431298791/profile",
                "hxxps://courierguy-thedelivery-southafrica[.]pages[.]dev/pag1_files/pag1_files/saved_resource(2)[.]html/",
                "hxxps://roblox[.]com[.]ge/games/920587237/DAY-9-Adopt-Me?privateServerLinkCode=57328233226280364464937420557884",
                "hxxps://courierguy-thedelivery-southafrica[.]pages[.]dev/pag1_files/pag1_files/saved_resource(4)[.]html/",
                "hxxps://courierguy-thedelivery-southafrica[.]pages[.]dev/pag1_files/saved_resource(3)[.]html/"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 1538,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 1538,
                "newInLastHour": 64,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"328db67686869dd1c02ba032fcc580ffcf0e37c40633dce534afb5d8fce25e13",
                " \"38deb748d2fa5ef68ffebfdc13122062f6d02d75d23ccc5ef52f4b2a9addd4bb",
                " \"64e3972234d9b7b0ed463da11209e7568cdc80f3610165f5523ac5efe1136ce0",
                " \"4b3b3c9ef30e121f9d3aba32d89b3a77fc57e4e5a8630f189cc63a8c23818975",
                " \"95d5e5ca4f47b3d93bcff47d77fa99dbdabd13f8fa02464c51bf58c2df549017"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1494,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1494,
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
                "1[.]176[.]134[.]251",
                "1[.]177[.]22[.]68",
                "1[.]181[.]114[.]38",
                "1[.]181[.]69[.]174"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 6514,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 6514,
                "newInLastHour": 6514,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]13[.]19[.]219",
                "1[.]13[.]79[.]144",
                "1[.]15[.]24[.]14",
                "1[.]161[.]49[.]186",
                "1[.]194[.]200[.]251"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 28477,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 28477,
                "newInLastHour": 28477,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://196[.]189[.]98[.]77:60145/bin[.]sh",
                "hxxp://91[.]92[.]243[.]183/slovsdih/sparc",
                "hxxp://91[.]92[.]243[.]183/slovsdih/mips",
                "hxxp://91[.]92[.]243[.]183/slovsdih/armv6l",
                "hxxp://91[.]92[.]243[.]183/slovsdih/armv5l"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 3816,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 3816,
                "newInLastHour": 3408,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"xr[.]fr1zzlepit[.]ru\"",
                " \"27[.]fr1zzlepit[.]ru\"",
                " \"3s[.]g0bcrumb[.]ru\"",
                " \"7a0xj[.]g0bcrumb[.]ru\"",
                " \"jumble[.]g0bcrumb[.]ru\""
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
            "iocCount": 8601,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 8601,
                "newInLastHour": 0,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "c078625aea4e1e9c0adf87a8a36998d6feab851a",
                "6ddf090c6ddcee20ae94b25b9a2944541620a64b",
                "f428360c1605f4853897e7fcc6805ab3c327e207",
                "4fc7ae833fc2ba4f6c54e180849c7f4ecaca1b1a",
                "e2293f74d8d72bde90bb0424038259a9e3126e1b"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 60726,
            "activeSources": 8,
            "criticalAlerts": 39192,
            "activeCampaigns": 226
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 30615,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "C2",
                "count": 8577,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 2004,
                "trend": "stable",
                "percentage": -1
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
            }
        ],
        "campaigns": [
            {
                "name": "malware_download",
                "count": 29052,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxps://kn6m[.]tinkerstep[.]ru/03nwqnet",
                    "hxxp://42[.]226[.]67[.]7:60294/bin[.]sh",
                    "hxxp://222[.]141[.]10[.]32:57156/bin[.]sh"
                ]
            },
            {
                "name": "CINS Threat List",
                "count": 15000,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]1[.]176[.]58",
                    "1[.]15[.]118[.]23",
                    "1[.]176[.]134[.]251"
                ]
            },
            {
                "name": " \"unknown_stealer\"",
                "count": 1920,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"hxxp://mossyden2011[.]sbs/b5a52ebb310b65f06dd10cfe69f72363/yj41avk5qvkdmvo\"",
                    " \"hxxp://mossyden2011[.]sbs/b5a52ebb310b65f06dd10cfe69f72363/ufcx6bc1ef45e7g\"",
                    " \"hxxp://mossyden2011[.]sbs/b5a52ebb310b65f06dd10cfe69f72363/m3o1azkhufs1enk\""
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1497,
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
                "count": 1359,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "aebe846393cee6199796dc1524f82c22f5f1bb35",
                    "2f0654bc0b155cba85aa0be287860feff2045195",
                    "463d2faa6b38a16140bc5dc7cfbffc6c5d30761c"
                ]
            },
            {
                "name": " \"win.dcrat\"",
                "count": 763,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"107[.]189[.]21[.]140:7000\"",
                    " \"69[.]167[.]11[.]28:443\"",
                    " \"54[.]38[.]110[.]98:22\""
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
                "count": 593,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "5d5c32a9bf92da1d16d0558ed2ed9f19c821c8a9",
                    "31e9cb5ace32adba5c43bce257a6396f9fa0f21c",
                    "9432f61b3afd49f0c35b548b09db103221d9b8c5"
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
                "name": " \"unknown\"",
                "count": 390,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"101[.]99[.]90[.]69:2850\"",
                    " \"101[.]99[.]90[.]165:2850\"",
                    " \"45[.]148[.]10[.]242:7443\""
                ]
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious URLs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": " \"js.clearfake\"",
        "totalAttacksThisHour": 53767,
        "lastCalculated": "2025-12-10 07:49 IST"
    }
};
