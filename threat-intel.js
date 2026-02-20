// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-02-20T18:50:52.733535+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-02-20T18:50:52.428612+05:30",
    "lastUpdatedFormatted": "Feb 20, 2026 at 06:50 PM IST",
    "comparisonPeriod": "Feb 19 \u2013 Feb 20, 2026",
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
                "hxxps://morriscrowereporting[.]com/pp178",
                "hxxps://alsaadnews[.]com/pp178",
                "hxxp://instagram-clone-tau-six[.]vercel[.]app/",
                "hxxp://learn-trzrbridg[.]wasmer[.]app/",
                "hxxp://kucoinlougn[.]webflow[.]io/"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 631,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 631,
                "newInLastHour": 45,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"5205d6ba7f178eef4f5bf57bed13f771baf0746d2508e936f0c065436daaeb2f",
                " \"777d96d6b2d12ad13c6972ce8cafa2f64de72157e8a352c689a0c048df3bc5b5",
                " \"3c7ae1ee34ef942d469f554ee6f85da4bc6f83c5fdd4b70b97e09161051f1fbe",
                " \"99652f3ff6a32d7a88a4e73702aca8fe4fb9663ea21ee0914c09d63d54691bd3",
                " \"e7e487a43cb64f9dc80524ed942f10d6379c6bad552216aeb70b8de3b4b46903"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1487,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1487,
                "newInLastHour": 7,
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
                "1[.]11[.]132[.]194",
                "1[.]15[.]116[.]189",
                "1[.]15[.]118[.]23",
                "1[.]15[.]22[.]112"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 7253,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 7253,
                "newInLastHour": 7253,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]145[.]98[.]105",
                "1[.]15[.]136[.]28",
                "1[.]162[.]225[.]217",
                "1[.]165[.]130[.]37",
                "1[.]194[.]219[.]159"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 20617,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 20617,
                "newInLastHour": 20617,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://110[.]37[.]14[.]251:38674/i",
                "hxxp://110[.]39[.]229[.]188:48500/bin[.]sh",
                "hxxps://forestleaf[.]bluefern[.]in[.]net/node_33-sync-patch",
                "hxxps://sunhunter[.]lionsand[.]in[.]net/area-cfg-master",
                "hxxp://178[.]141[.]74[.]223:45230/i"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 617,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 617,
                "newInLastHour": 617,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"forestleaf[.]bluefern[.]in[.]net\"",
                " \"sunhunter[.]lionsand[.]in[.]net\"",
                " \"sandpulse[.]lionsand[.]in[.]net\"",
                " \"wildlion[.]lionsand[.]in[.]net\"",
                " \"goldensand[.]lionsand[.]in[.]net\""
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
            "iocCount": 8991,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 8991,
                "newInLastHour": 0,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "de82f1f7daacb7b5d91bee3382a3e0a36037ded7",
                "c96e7c1cbfdcff64e90557779edd3af8a1b6a6c4",
                "682a5d662e691f728b8279c889f9d70dafc8bbc4",
                "17a5a3ef6c810022d695d6e0642ac0ccf8505600",
                "cf716cb4e11c0b7c8b7deda04db0df9332b5a5f9"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 47641,
            "activeSources": 8,
            "criticalAlerts": 30241,
            "activeCampaigns": 194
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 21271,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "C2",
                "count": 8970,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 343,
                "trend": "down",
                "percentage": -14
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
                "count": 20522,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://113[.]229[.]187[.]166:60344/i",
                    "hxxps://shockflare[.]highexplos[.]in[.]net/auth-api-ohy",
                    "hxxp://117[.]209[.]84[.]79:48748/i"
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
                    "1[.]11[.]132[.]194",
                    "1[.]15[.]116[.]189"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1481,
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
            },
            {
                "name": "Gozi",
                "count": 349,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "61d991d7063e5e7470daa3059357f8282e680bb7",
                    "68b4fc7da837c64332b9f019adaef4c7038ec85d",
                    "e0f7072057c5deeb21c598673740debc7f6eb8a1"
                ]
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious IPs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": "SSH Attacks",
        "totalAttacksThisHour": 43841,
        "lastCalculated": "2026-02-20 18:50 IST"
    }
};
