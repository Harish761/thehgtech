// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-02-03T18:52:50.387562+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-02-03T18:52:50.108935+05:30",
    "lastUpdatedFormatted": "Feb 03, 2026 at 06:52 PM IST",
    "comparisonPeriod": "Feb 02 \u2013 Feb 03, 2026",
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
                "hxxps://motoraddicts[.]ca/wp-content/maintenance/asset/app/kmnop/index[.]php",
                "hxxp://shopeeid185[.]blogspot[.]com/?m=1",
                "hxxps://easybank-landing-page-eight-psi[.]vercel[.]app/",
                "hxxp://www[.]easybank-landing-page-eight-psi[.]vercel[.]app/",
                "hxxps://www[.]mottamast-logies[.]godaddysites[.]com/"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 823,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 823,
                "newInLastHour": 65,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"6b0db4e232c1e07659f209a1609c8110ce9ccd554c5fed6500abbd16655e735b",
                " \"d944abab1481457eacf9f1d08f835980c2146ec91513e2eb94714c6abaec5f34",
                " \"ef6215b09bf71a96268a5cbf538f7009f5ad5342e4234e154dbcd58796693a91",
                " \"80dd7e14890056e8275cd36ec1e86acf6a068d3fa6262faff62b8ba0b5897fa3",
                " \"f419112ecb752170cf2e117417d2b1e3c18c80d14eedee75f7f80c81e68272a5"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1476,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1476,
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
                "1[.]15[.]14[.]29",
                "1[.]15[.]51[.]122",
                "1[.]170[.]157[.]15",
                "1[.]170[.]57[.]68"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 6532,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 6532,
                "newInLastHour": 6532,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]12[.]251[.]79",
                "1[.]145[.]100[.]86",
                "1[.]15[.]77[.]170",
                "1[.]194[.]219[.]159",
                "1[.]194[.]233[.]49"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 21210,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 21210,
                "newInLastHour": 21210,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://110[.]39[.]246[.]84:46760/bin[.]sh",
                "hxxp://110[.]37[.]59[.]148:55779/bin[.]sh",
                "hxxp://130[.]12[.]180[.]43/files/7302144605/dMksBLn[.]exe",
                "hxxp://222[.]138[.]149[.]204:41814/bin[.]sh",
                "hxxp://116[.]138[.]204[.]171:53983/i"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 713,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 713,
                "newInLastHour": 554,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"51[.]79[.]251[.]70:80\"",
                " \"192[.]236[.]154[.]155:443\"",
                " \"new[.]sys-update[.]online\"",
                " \"20[.]246[.]105[.]74:7772\"",
                " \"172[.]203[.]250[.]171:8000\""
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
                "137[.]184[.]9[.]29",
                "162[.]243[.]103[.]246",
                "167[.]86[.]75[.]145",
                "172[.]232[.]59[.]14",
                "34[.]204[.]119[.]63"
            ]
        },
        "SSL Blacklist": {
            "description": "Malicious SSL certificates used by botnet C2 servers. Helps detect encrypted malware communications.",
            "website": "https://sslbl.abuse.ch/",
            "updateFrequency": "Daily",
            "iocCount": 8851,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 8851,
                "newInLastHour": 0,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "5336e04495132330a766b2332013eff8bd9481e6",
                "436f02b3a63406707f6467d4880a691a2a3f53ea",
                "f1bb8bd97d70c986438f0cd5f46cd2992875659a",
                "0f4e5aaccb97182bf96d4dec2745543d2500e161",
                "1174cf685ee5148b65469947a7386b6303cbd471"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 48264,
            "activeSources": 8,
            "criticalAlerts": 30808,
            "activeCampaigns": 205
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 21979,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "C2",
                "count": 8829,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 349,
                "trend": "up",
                "percentage": 11
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
                "count": 21133,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://39[.]81[.]187[.]101:60768/bin[.]sh",
                    "hxxp://115[.]57[.]80[.]187:59076/i",
                    "hxxp://60[.]19[.]195[.]186:53081/bin[.]sh"
                ]
            },
            {
                "name": "CINS Threat List",
                "count": 15000,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]15[.]118[.]23",
                    "1[.]15[.]14[.]29",
                    "1[.]15[.]51[.]122"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1476,
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
                "count": 1377,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "f1bb8bd97d70c986438f0cd5f46cd2992875659a",
                    "98bd8df0057497dc91b608f7db0d0358c1e75d6b",
                    "76bc52f6b33ab0650dfdc050c5a15a227ce69ed0"
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
                "count": 615,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "436f02b3a63406707f6467d4880a691a2a3f53ea",
                    "e0cd22588c5eb33b575fd706a8cfb26a73302eac",
                    "0dec713d11506f454580c12573a23f934e9671d4"
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
            },
            {
                "name": "Malware",
                "count": 335,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "b73dc00950e4a6e8c228abf884c937e895a35b96",
                    "8dbe1d838c3ca9cb0217813c4909cb4be9fa39db",
                    "57f2f129b4b92f8a5a9b673485771a148c5d6159"
                ]
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious URLs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": "SSH Attacks",
        "totalAttacksThisHour": 43666,
        "lastCalculated": "2026-02-03 18:52 IST"
    }
};
