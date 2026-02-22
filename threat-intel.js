// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-02-22T22:15:00.311270+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-02-22T22:15:00.034387+05:30",
    "lastUpdatedFormatted": "Feb 22, 2026 at 10:15 PM IST",
    "comparisonPeriod": "Feb 21 \u2013 Feb 22, 2026",
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
                "hxxp://instagram-nextjs-three[.]vercel[.]app/",
                "hxxps://robiox[.]com[.]af/games/109983668079237/SKIBIDI-Steal-a-Brainrot?privateServerLinkCode=60290768689256836349005291940369",
                "hxxps://www[.]instshopee[.]com/",
                "hxxps://pedagiodigitalbrasil[.]com[.]br/",
                "hxxp://subtle-gumdrop-0c8344[.]netlify[.]app/"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 855,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 855,
                "newInLastHour": 354,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"afc999b024b524e71a6ccb00e05df73af541698971090447d40d831d4958a111",
                " \"a9a1bec82293228f65072c95a12a53edc08a3602ed40aa5e15fc2e4fa891d4a0",
                " \"a63b4b9df52c5586e5e633862562b8565a0e7a621fa40128e366fc99e5dd25ea",
                " \"bb069ae21ea35f433754f782cc0b4d2e8334e2e2ea435c2a5de49b6efe7a371e",
                " \"81fc53a74d746478aa8c15f56a85f3e51158a0849bf0f64f2b9c6aff90f99aed"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1483,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1483,
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
                "1[.]0[.]164[.]165",
                "1[.]10[.]211[.]66",
                "1[.]11[.]132[.]194",
                "1[.]15[.]116[.]189",
                "1[.]15[.]22[.]112"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 6786,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 6786,
                "newInLastHour": 6786,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]12[.]217[.]80",
                "1[.]15[.]136[.]28",
                "1[.]165[.]130[.]37",
                "1[.]214[.]197[.]163",
                "1[.]220[.]64[.]218"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 21264,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 21264,
                "newInLastHour": 21264,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://151[.]242[.]30[.]234/skid[.]x86",
                "hxxp://182[.]127[.]104[.]67:35508/i",
                "hxxp://196[.]190[.]65[.]223:81/hiddenbin/dvr1[.]sh",
                "hxxp://5[.]16[.]162[.]140:81/hiddenbin/dvr1[.]sh",
                "hxxp://110[.]37[.]80[.]62:60967/i"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 1062,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 1062,
                "newInLastHour": 885,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"leadgroup[.]chelnperson[.]in[.]net\"",
                " \"utilsync[.]baskadubutil[.]in[.]net\"",
                " \"servicedesk[.]baskadubutil[.]in[.]net\"",
                " \"maintool[.]baskadubutil[.]in[.]net\"",
                " \"tasknode[.]baskadubutil[.]in[.]net\""
            ]
        },
        "Feodo Tracker": {
            "description": "Botnet C2 server IPs from Feodo Tracker. Tracks Dridex, Emotet, TrickBot, QakBot, and BazarLoader.",
            "website": "https://feodotracker.abuse.ch/",
            "updateFrequency": "Hourly",
            "iocCount": 2,
            "iocDataUrl": "https://thehgtech.com/ioc-data/feodo-tracker.json",
            "stats": {
                "total": 2,
                "newInLastHour": 2,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "162[.]243[.]103[.]246",
                "178[.]62[.]3[.]223"
            ]
        },
        "SSL Blacklist": {
            "description": "Malicious SSL certificates used by botnet C2 servers. Helps detect encrypted malware communications.",
            "website": "https://sslbl.abuse.ch/",
            "updateFrequency": "Daily",
            "iocCount": 8997,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 8997,
                "newInLastHour": 2,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "6fd95f4a2d9cec238cbe2e1756890381c4fae3cb",
                "ffa35590d5d7b074cf1a830180a90cca4473f6c9",
                "de82f1f7daacb7b5d91bee3382a3e0a36037ded7",
                "c96e7c1cbfdcff64e90557779edd3af8a1b6a6c4",
                "682a5d662e691f728b8279c889f9d70dafc8bbc4"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 48224,
            "activeSources": 8,
            "criticalAlerts": 30300,
            "activeCampaigns": 199
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 21330,
                "trend": "stable",
                "percentage": 2
            },
            {
                "category": "C2",
                "count": 8970,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 787,
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
                "count": 20771,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxps://45[.]94[.]31[.]192/Bin/ScreenConnect[.]ClientSetup[.]msi?e=Access&y=Guest",
                    "hxxps://124[.]198[.]131[.]173/Bin/ScreenConnect[.]ClientSetup[.]msi?e=Access&y=Guest",
                    "hxxps://45[.]88[.]186[.]52/Bin/ScreenConnect[.]ClientSetup[.]msi?e=Access&y=Guest"
                ]
            },
            {
                "name": "CINS Threat List",
                "count": 15000,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]0[.]164[.]165",
                    "1[.]10[.]211[.]66",
                    "1[.]11[.]132[.]194"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1483,
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
                "count": 1383,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "bef81c1fd26e84e5e25a4182bf668304ba2891da",
                    "adb1b31a6283691b205839f5e3ce4f8ed7aa5f54",
                    "97e58eec776ad990a10d1f4a932e1a4ae48636b3"
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
                "count": 623,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "c96e7c1cbfdcff64e90557779edd3af8a1b6a6c4",
                    "682a5d662e691f728b8279c889f9d70dafc8bbc4",
                    "313aa465da1c887d1189e74be08d3e79306192c2"
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
                "name": " \"win.formbook\"",
                "count": 388,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"b8b1444ffb91963e527fddee6e57ff81131b49a2\"",
                    " \"8c440039311d8f01c2a626dbb4f55bff11042f2f610306771d367b36adaa1b90\"",
                    " \"9ddd0f781a7c3e4620eb2c9846a303ec\""
                ]
            },
            {
                "name": "Vidar",
                "count": 372,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "66afb632b2131a12c4ee5896e88bc485662077eb",
                    "adf3f697ee22a8dc8ea8706f940bcdde0a72b6a5",
                    "9b64cd9e6bd74585beeb263fcff0e91988921f88"
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
        "totalAttacksThisHour": 44593,
        "lastCalculated": "2026-02-22 22:14 IST"
    }
};
