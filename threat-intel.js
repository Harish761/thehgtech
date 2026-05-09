// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-05-09T15:10:50.139562+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-05-09T15:10:49.770775+05:30",
    "lastUpdatedFormatted": "May 09, 2026 at 03:10 PM IST",
    "comparisonPeriod": "May 08 \u2013 May 09, 2026",
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
                "hxxps://sanahameed92[.]github[.]io/Airbnb-Clone-website/",
                "hxxps://yashcode-04[.]github[.]io/Airbnb-using-tailwind",
                "hxxp://oixjajs-c5aqdpcab4fscccp[.]z03[.]azurefd[.]net/",
                "hxxp://widoazaew-arcna4erbzgmb2hn[.]z03[.]azurefd[.]net/",
                "hxxp://aikjotsood-tech[.]github[.]io/us"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 972,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 972,
                "newInLastHour": 12,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"02959a12149400b87d8c9db42a4fba5ebd8e8184dadc432fc5d565fef08f5bb5",
                " \"4a8e50d8cdd3714be1ff3a00e406b5cfffbc391a92b18b29602cbbd3d846591f",
                " \"0d4a07bdb41c27805c9ce7adaf623ca9689ab53aa133e84f1d99af8006f49932",
                " \"b3a73f1e60eb11ca697316528c85c214e37b734452e8701619a3c3dd3d35be39",
                " \"4a1dd2bf737357ff4c32df5b739cc5d8bb0003bcb35fbacc3174d36b2ef77cc0"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 410,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 410,
                "newInLastHour": 57,
                "lastUpdate": "just now"
            },
            "types": [
                "ip-range"
            ],
            "sampleIndicators": [
                "2.58.56.0/24",
                "5.101.82.0/24",
                "5.101.86.0/24",
                "5.230.195.0/24",
                "23.146.241.0/24"
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
                "1[.]123[.]140[.]136",
                "1[.]182[.]190[.]222",
                "1[.]183[.]41[.]171",
                "1[.]189[.]170[.]86",
                "1[.]190[.]67[.]254"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 4384,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 4384,
                "newInLastHour": 4384,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]0[.]164[.]165",
                "1[.]13[.]22[.]203",
                "1[.]14[.]255[.]125",
                "1[.]162[.]222[.]129",
                "1[.]162[.]225[.]162"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 28196,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 28196,
                "newInLastHour": 28196,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxps://fllegi2j[.]nanovo5kull[.]pics/99c7fa93-4d32-47c2-84f9-163f7755f5e3/check[.]rock",
                "hxxps://mramn[.]velorix[.]life/c2cb43a1-3db9-486a-a707-ee88bcdb4813/google[.]ocx",
                "hxxp://110[.]85[.]98[.]200:38787/i",
                "hxxp://125[.]41[.]215[.]248:36212/bin[.]sh",
                "hxxp://124[.]94[.]155[.]201:36974/i"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 1324,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 1324,
                "newInLastHour": 1318,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"fllegi2j[.]nanovo5kull[.]pics\"",
                " \"mramn[.]velorix[.]life\"",
                " \"9rtfhxav[.]nanovo5kull[.]pics\"",
                " \"mercore7is[.]velorix[.]life\"",
                " \"memory-tone[.]nanovo5kull[.]pics\""
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
            "iocCount": 9631,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 9631,
                "newInLastHour": 69,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "6da5a6bce253699b8db995f8955a4bf6482f12a3",
                "04472c9faf1014830def8016729f50a2b773a0ab",
                "cf08f1d2e3da9567cd2398ecb5f8df0503ce857f",
                "d30376a0f461e6cc126e18beb023e71c703912c0",
                "12adb13f09a921ef558cd28c50ac4de81e1b8ad3"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 56806,
            "activeSources": 8,
            "criticalAlerts": 38621,
            "activeCampaigns": 204
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 29028,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "C2",
                "count": 9593,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Phishing",
                "count": 339,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 260,
                "trend": "stable",
                "percentage": 0
            }
        ],
        "targetedSectors": [
            {
                "name": "General",
                "percentage": 85
            },
            {
                "name": "Tech",
                "percentage": 14
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
                "count": 28052,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxps://bit[.]vpsgateway[.]pics/73922b30-d888-4af7-9bb4-e76054f7aa33/check[.]so",
                    "hxxps://aut[.]clouditapp[.]pics/c2cb43a1-3db9-486a-a707-ee88bcdb4813/google[.]ocx",
                    "hxxps://open[.]openlogmgr[.]pics/c2cb43a1-3db9-486a-a707-ee88bcdb4813/google[.]ocx"
                ]
            },
            {
                "name": "CINS Threat List",
                "count": 15000,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]123[.]140[.]136",
                    "1[.]180[.]183[.]158",
                    "1[.]182[.]190[.]222"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1569,
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
                "count": 1410,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "5bb5b87a8f5d20bf3d5c6d64b3cf71fba84b43fd",
                    "0f6b3491e94f40a637680924c507a494426e534c",
                    "9833a3a7e27800d994a2924baf7a664dfff96e8c"
                ]
            },
            {
                "name": " \"js.clearfake\"",
                "count": 874,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"aut[.]clouditapp[.]pics\"",
                    " \"bit[.]vpsgateway[.]pics\"",
                    " \"open[.]openlogmgr[.]pics\""
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
                "count": 675,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "8a9c74049483847464da1ca3cf6f1f44e17a5f0f",
                    "c47bcbcbe0b1c474542c7fdc233ec68ffb4dcf14",
                    "a08099ae4318bfc81af69fd382081262cc4e9487"
                ]
            },
            {
                "name": "LummaStealer",
                "count": 554,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "272e76f605bec1da1ea719df8dc0e7269de7d44e",
                    "ab7f083d77dc2b1b71c0aec9a417e0a5a036a5f9",
                    "7ce02a4df627573696141e40970ef60e246f9f3f"
                ]
            },
            {
                "name": "Vidar",
                "count": 512,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "693673f31128d9637630776f2989b5c29c77b04d",
                    "4ea9780c4039e050f0e2433deaa076a1ed3e1cec",
                    "87e5589d7d33aa32595bc8f2ac6275a4f1620fb1"
                ]
            },
            {
                "name": "OffLoader",
                "count": 394,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "b977e869e493f70b3e7914a1eaa6abe2cc1ea04a",
                    "e7af95eaaa4c87398f4c4c80a66972f342bb3328",
                    "037598803e2603499edbf7275e43f7dd82abd8f3"
                ]
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious URLs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": "malware_download",
        "totalAttacksThisHour": 49341,
        "lastCalculated": "2026-05-09 15:10 IST"
    }
};
