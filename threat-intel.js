// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-01-20T02:04:55.392371+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-01-20T02:04:55.111700+05:30",
    "lastUpdatedFormatted": "Jan 20, 2026 at 02:04 AM IST",
    "comparisonPeriod": "Jan 19 \u2013 Jan 20, 2026",
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
                "hxxps://roblox[.]com[.]ge/games/138228590324124/WEIRD-UWU-GAME?privateServerLinkCode=02887277781288244050039015701059",
                "hxxps://roblox[.]com[.]ge/games/102858192019505/Sussy-swap-baddies-worksupdated?privateServerLinkCode=83820147586406605708923598011258",
                "hxxp://73613[.]vip/",
                "hxxps://z24l[.]xyz/",
                "hxxp://e127[.]app/"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 894,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 894,
                "newInLastHour": 41,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"d9e27f68d622c07d2ede12efee960f882d38063fda7b24c68bd260c0d6c2a76a",
                " \"6f5082fbc7874b3eff509fba7ad65a08c55b7b705a7be51550f26d0dc5ed94b0",
                " \"9e8dc9042adf0ff04fd4ac0bd174648832d86913a2353683d43898a5e9373a5e",
                " \"7a8ad8afd8a283d6bc4b0359e575d8d0d5ec2702a054decda94df5d20d42b2ce",
                " \"9496e75825c687aa533f45c1ace274e64e66ff6868dc3629c1c31d77cd5b4d5e"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1444,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1444,
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
                "1[.]0[.]229[.]74",
                "1[.]0[.]243[.]243",
                "1[.]0[.]249[.]188",
                "1[.]0[.]250[.]153"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 6741,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 6741,
                "newInLastHour": 6741,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]15[.]114[.]102",
                "1[.]214[.]197[.]163",
                "1[.]214[.]42[.]172",
                "1[.]234[.]70[.]54",
                "1[.]234[.]83[.]55"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 22765,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 22765,
                "newInLastHour": 22765,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://123[.]133[.]208[.]204:39840/bin[.]sh",
                "hxxps://cdn[.]jsdelivr[.]net/gh/ws40-delta-xchg-fab8/unity-dedicated-server33/ws-code-sync",
                "hxxp://42[.]236[.]223[.]195:34337/i",
                "hxxp://43[.]251[.]226[.]153/bins/sora[.]i686",
                "hxxp://85[.]95[.]191[.]148:57781/i"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 408,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 408,
                "newInLastHour": 407,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"34[.]30[.]77[.]194:80\"",
                " \"217[.]217[.]255[.]48:8080\"",
                " \"1[.]54[.]115[.]86:443\"",
                " \"89[.]110[.]107[.]177:9000\"",
                " \"95[.]9[.]236[.]229:2000\""
            ]
        },
        "Feodo Tracker": {
            "description": "Botnet C2 server IPs from Feodo Tracker. Tracks Dridex, Emotet, TrickBot, QakBot, and BazarLoader.",
            "website": "https://feodotracker.abuse.ch/",
            "updateFrequency": "Hourly",
            "iocCount": 6,
            "iocDataUrl": "https://thehgtech.com/ioc-data/feodo-tracker.json",
            "stats": {
                "total": 6,
                "newInLastHour": 6,
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
            "iocCount": 8795,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 8795,
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
            "totalIndicators": 49588,
            "activeSources": 8,
            "criticalAlerts": 32434,
            "activeCampaigns": 184
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 23653,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "C2",
                "count": 8781,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 347,
                "trend": "stable",
                "percentage": -4
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
                "count": 22754,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://60[.]19[.]219[.]195:38923/i",
                    "hxxp://117[.]209[.]80[.]120:45203/i",
                    "hxxp://116[.]55[.]93[.]181:29926/[.]i"
                ]
            },
            {
                "name": "CINS Threat List",
                "count": 15000,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]0[.]202[.]30",
                    "1[.]0[.]229[.]74",
                    "1[.]0[.]243[.]243"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1448,
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
                "name": " \"Mirai",
                "count": 490,
                "types": [
                    "hash"
                ],
                "sampleIndicators": [
                    " \"36e763b23d789ec921a0a1c72d14331b93caadb6eea4d8d75335f3615294b2f2",
                    " \"e84b80bf7057a8903976c2a2c60b932682939f9917af9a0bdc058b3e91eb1592",
                    " \"5890413dd450f04adabe3a0c4c7b0794ecbf53740489b3c049f4653902cd39d3"
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
        "fastestRisingThreat": "SSH Attacks",
        "totalAttacksThisHour": 45260,
        "lastCalculated": "2026-01-20 02:04 IST"
    }
};
