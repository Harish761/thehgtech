// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-01-17T22:04:38.733657+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-01-17T22:04:38.443716+05:30",
    "lastUpdatedFormatted": "Jan 17, 2026 at 10:04 PM IST",
    "comparisonPeriod": "Jan 16 \u2013 Jan 17, 2026",
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
                "hxxp://www[.]amazon-clone-jet-eight-44[.]vercel[.]app/",
                "hxxp://test[.]web3securenetwork[.]com/",
                "hxxp://bdvenlineabanvenezempresas[.]netlify[.]app/",
                "hxxps://guest-reserwationhub[.]click/PBTR7RMT",
                "hxxps://instagram-clone-tau-two[.]vercel[.]app/"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 513,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 513,
                "newInLastHour": 65,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"f61cf89ee05f9ca7a136ef41cb841f85030f1c6a8c912e3953e9c0428f717cb2",
                " \"6e59a69c6d75874df9377cb7e095127d690fdcff5ab88e8f86d155893ab77482",
                " \"7fad6f2368bc3cbe17ef7078c9041af857664108f2a7cb13562c6b6edff920bd",
                " \"71bf36822ea35578f0f0a3828d7238d35cef9b79b5a032ddbee42606b20d2056",
                " \"d8b0e72d3ffda641dcdb074212cfc2c56da77bd28a350a1970913f1cc74852e9"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1461,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1461,
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
                "1[.]0[.]202[.]30",
                "1[.]0[.]214[.]103",
                "1[.]0[.]214[.]168",
                "1[.]0[.]214[.]175",
                "1[.]0[.]214[.]188"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 5769,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 5769,
                "newInLastHour": 5769,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]14[.]12[.]141",
                "1[.]15[.]114[.]102",
                "1[.]161[.]49[.]101",
                "1[.]214[.]197[.]163",
                "1[.]221[.]66[.]66"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 23515,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 23515,
                "newInLastHour": 23515,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://42[.]230[.]68[.]72:50976/bin[.]sh",
                "hxxp://115[.]55[.]62[.]52:48445/i",
                "hxxps://cdn[.]jsdelivr[.]net/gh/escalator82-12-facecloth-junkyard/asset64-bundle-resolver/timeline-buffer-x32",
                "hxxp://219[.]156[.]152[.]21:34729/i",
                "hxxp://219[.]156[.]16[.]70:39788/i"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 1283,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 1283,
                "newInLastHour": 1263,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"hxxps://chromium[.]report[.]tech[.]b55081fa-9cd1-48c2-95d4-efe[.]crashnotify[.]org/browser/chrome?uuid=null\"",
                " \"hxxp://45[.]92[.]29[.]74/1[.]sh\"",
                " \"hxxp://45[.]92[.]29[.]74/wget[.]sh\"",
                " \"hxxps://cdn[.]jsdelivr[.]net/gh/escalator82-12-facecloth-junkyard/asset64-bundle-resolver/timeline-buffer-x32\"",
                " \"185[.]196[.]8[.]221:6606\""
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
                "34[.]204[.]119[.]63",
                "50[.]16[.]16[.]211"
            ]
        },
        "SSL Blacklist": {
            "description": "Malicious SSL certificates used by botnet C2 servers. Helps detect encrypted malware communications.",
            "website": "https://sslbl.abuse.ch/",
            "updateFrequency": "Daily",
            "iocCount": 8802,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 8802,
                "newInLastHour": 0,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "e1eee0b991daeddda5eb790822cace341505480d",
                "6ea8fc3980ed947d6d2c509c02a2e439c8d5f7e1",
                "9b483450f76d361de12dac4cdfe6370f291692b9",
                "61e69d864771077edac32b3fad04fbf6f6060929",
                "c8e6ce07c7fdb13a8c284698d3dd604857a1147e"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 50835,
            "activeSources": 8,
            "criticalAlerts": 32769,
            "activeCampaigns": 196
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 23989,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "C2",
                "count": 8780,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 1187,
                "trend": "down",
                "percentage": -11
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
                "count": 23461,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://182[.]116[.]116[.]216:52199/i",
                    "hxxp://117[.]199[.]234[.]240:36307/bin[.]sh",
                    "hxxps://cdn[.]jsdelivr[.]net/gh/escalator82-12-facecloth-junkyard/streaming-core-720p/worldstate"
                ]
            },
            {
                "name": "CINS Threat List",
                "count": 15000,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]0[.]170[.]118",
                    "1[.]0[.]202[.]30",
                    "1[.]0[.]214[.]168"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1461,
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
                "count": 1374,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "e1eee0b991daeddda5eb790822cace341505480d",
                    "8262ac683ec151cc53cb28d382ab595a7cb5aa3c",
                    "fb503acf7aee005f9d10bd635e9f6f8e12a1b309"
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
                "count": 608,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "68cda8cc402c23eb7b13968c1e8f01aae03db4bb",
                    "b22fd267edd11cd730bbc12794103f4f4bd1c28d",
                    "588bfb310a84e9090cac64559864fb3ec92fc706"
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
                "count": 389,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"www[.]y1675[.]top\"",
                    " \"www[.]yaksa[.]tech\"",
                    " \"www[.]ydnkll[.]top\""
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
        "topAttackVector": "Malicious URLs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": "malware_download",
        "totalAttacksThisHour": 45917,
        "lastCalculated": "2026-01-17 22:04 IST"
    }
};
