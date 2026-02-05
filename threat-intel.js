// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-02-05T14:28:39.367216+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-02-05T14:28:39.084314+05:30",
    "lastUpdatedFormatted": "Feb 05, 2026 at 02:28 PM IST",
    "comparisonPeriod": "Feb 04 \u2013 Feb 05, 2026",
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
                "hxxp://schedule[.]cidoofo[.]digital/B6@Q9fRa/$3mail@a[.]b[.]c0",
                "hxxps://122era[.]nickles[.]cc/gives/",
                "hxxps://34key[.]proxette[.]cc/newtransfer",
                "hxxps://35joi[.]lofesdes[.]cc/info",
                "hxxp://bafkreiekbtzmshtc237taav2aevej2xm7rbnt5f4vkc5vavwijjg44m7vi[.]ipfs[.]dweb[.]link/"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 797,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 797,
                "newInLastHour": 34,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"625fa26f2d4a049e2d0f97cbcb3b5287d5196b49c7e9c3d73daf23fe3825b652",
                " \"cd63d2c525640c298ca8397c26fb71665166455f76f11de8b8663a4959ed3ea2",
                " \"cac9311f39b9a11b7cd020369801b14d8ba9afb21b7e65eb437f5d1d6807c43e",
                " \"091f2e8fff8bc8d83ec45640aeb6e12491614b577224cfe1813c7cd8a3e19474",
                " \"6a2ad4bf1ce6762ef84004adb6fad86c07da1e4e6142fcecff7e1ab68a6de799"
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
                "1[.]10[.]211[.]222",
                "1[.]14[.]3[.]240",
                "1[.]15[.]116[.]189",
                "1[.]15[.]51[.]122",
                "1[.]157[.]80[.]72"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 6802,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 6802,
                "newInLastHour": 6802,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]170[.]65[.]104",
                "1[.]194[.]219[.]159",
                "1[.]214[.]197[.]163",
                "1[.]214[.]42[.]172",
                "1[.]221[.]66[.]66"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 21323,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 21323,
                "newInLastHour": 21323,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://123[.]188[.]76[.]21:45414/i",
                "hxxp://182[.]119[.]61[.]223:51998/i",
                "hxxp://42[.]243[.]137[.]142:32825/i",
                "hxxp://130[.]12[.]180[.]43/files/6832239903/lrulllw[.]msi",
                "hxxp://115[.]50[.]222[.]19:48018/i"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 516,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 516,
                "newInLastHour": 516,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"185[.]87[.]50[.]147:8443\"",
                " \"150[.]136[.]164[.]223:8888\"",
                " \"36[.]133[.]104[.]30:4444\"",
                " \"196[.]75[.]113[.]90:2222\"",
                " \"212[.]227[.]58[.]233:80\""
            ]
        },
        "Feodo Tracker": {
            "description": "Botnet C2 server IPs from Feodo Tracker. Tracks Dridex, Emotet, TrickBot, QakBot, and BazarLoader.",
            "website": "https://feodotracker.abuse.ch/",
            "updateFrequency": "Hourly",
            "iocCount": 3,
            "iocDataUrl": "https://thehgtech.com/ioc-data/feodo-tracker.json",
            "stats": {
                "total": 3,
                "newInLastHour": 3,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "167[.]86[.]75[.]145",
                "172[.]232[.]59[.]14",
                "34[.]204[.]119[.]63"
            ]
        },
        "SSL Blacklist": {
            "description": "Malicious SSL certificates used by botnet C2 servers. Helps detect encrypted malware communications.",
            "website": "https://sslbl.abuse.ch/",
            "updateFrequency": "Daily",
            "iocCount": 8882,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 8882,
                "newInLastHour": 6,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "e224a0e12477fad80756859e96bf89af4af904ef",
                "1ea8ec48d9f0b8873db62ceb0d56bc89bd5b326e",
                "971eff3b46008afa8e51412a1f92e56fb16c0c8b",
                "33775d94078769a5fb2d35798e12075b6141af73",
                "6171d10623d6850c8048fef17a4e0f8d6462b3e7"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 48258,
            "activeSources": 8,
            "criticalAlerts": 31001,
            "activeCampaigns": 199
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 22149,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "C2",
                "count": 8852,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 418,
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
            }
        ],
        "campaigns": [
            {
                "name": "malware_download",
                "count": 21276,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://115[.]57[.]70[.]140:48604/bin[.]sh",
                    "hxxp://125[.]43[.]26[.]246:57101/bin[.]sh",
                    "hxxp://220[.]202[.]91[.]49:55110/i"
                ]
            },
            {
                "name": "CINS Threat List",
                "count": 15000,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]10[.]211[.]222",
                    "1[.]15[.]116[.]189",
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
                "count": 1378,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "a6d675b60e925179eaf8834d92a4744ddcd10eb3",
                    "f1bb8bd97d70c986438f0cd5f46cd2992875659a",
                    "98bd8df0057497dc91b608f7db0d0358c1e75d6b"
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
                "count": 616,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "bc3ca9fd7fdab7635c897aa5b61d0de4c471d1b9",
                    "436f02b3a63406707f6467d4880a691a2a3f53ea",
                    "e0cd22588c5eb33b575fd706a8cfb26a73302eac"
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
                "name": "Vidar",
                "count": 341,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "971eff3b46008afa8e51412a1f92e56fb16c0c8b",
                    "33775d94078769a5fb2d35798e12075b6141af73",
                    "6171d10623d6850c8048fef17a4e0f8d6462b3e7"
                ]
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious URLs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": "SSH Attacks",
        "totalAttacksThisHour": 43984,
        "lastCalculated": "2026-02-05 14:28 IST"
    }
};
