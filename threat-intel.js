// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2025-12-19T00:25:36.105276+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2025-12-19T00:25:35.803525+05:30",
    "lastUpdatedFormatted": "Dec 19, 2025 at 12:25 AM IST",
    "comparisonPeriod": "Dec 18 \u2013 Dec 19, 2025",
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
                "hxxp://clewdr[.]murasamesys[.]com/",
                "hxxp://www[.]rackspacliningsmaservico[.]vercel[.]app/",
                "hxxp://gemini[.]lotxy[.]xyz/",
                "hxxp://infoshopee579[.]blogspot[.]com/?m=1",
                "hxxps://roblox[.]com[.]py/games/7171174521/American-Plains-Mudding?privateServerLinkCode=07466066812720371197816699833725"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 811,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 811,
                "newInLastHour": 17,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"c36db5c9e90ed0abac94523ba9f0316e5dc662b9f331d548be9b8ea80806c9ab",
                " \"9993ae862e80930fc460454ed36f9811ab106eeb4731a6f319b3f9a09b284ae1",
                " \"5379f70b6cba563396465178716b85c7105b15d816102fb862f0c6b183335fae",
                " \"4712baad4e6783a34202e3ad58ed43106829f88656287dbfba4a688100ff615e",
                " \"dc1895c849163f0705b3e6eba2baa2bd60c4a96b26b2d519a99c67725d55499e"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1462,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1462,
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
                "1[.]10[.]247[.]85",
                "1[.]1[.]179[.]25",
                "1[.]117[.]17[.]128",
                "1[.]15[.]12[.]169",
                "1[.]15[.]51[.]236"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 5579,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 5579,
                "newInLastHour": 5579,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]14[.]95[.]153",
                "1[.]145[.]84[.]143",
                "1[.]171[.]19[.]69",
                "1[.]194[.]200[.]251",
                "1[.]214[.]197[.]163"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 25565,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 25565,
                "newInLastHour": 25565,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://110[.]37[.]26[.]193:54956/bin[.]sh",
                "hxxps://gale[.]g1zmobrain[.]ru/5nvncrrt",
                "hxxps://gale[.]g1zmobrain[.]ru/y61au1dt",
                "hxxp://113[.]239[.]68[.]145:52756/bin[.]sh",
                "hxxp://123[.]190[.]90[.]117:42712/bin[.]sh"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 997,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 997,
                "newInLastHour": 964,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"45[.]83[.]31[.]115:4000\"",
                " \"163[.]5[.]149[.]126:2323\"",
                " \"155[.]102[.]133[.]61:4506\"",
                " \"120[.]240[.]156[.]51:10250\"",
                " \"104[.]140[.]154[.]171:30136\""
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
            "iocCount": 8652,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 8652,
                "newInLastHour": 0,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "cb789c5fc5dfd28c4ca174e1569f00fb985c2751",
                "ce45edd9833acf5ed64d6c16acb355c3b71459a6",
                "42865538586255fae2d0a07ca739c92ce188c475",
                "4bf2c057cb49b609a1b111d1ca3374cb6641a52e",
                "056ec2f17db417adcb6356eb71b191f54336a851"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 52799,
            "activeSources": 8,
            "criticalAlerts": 35008,
            "activeCampaigns": 190
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 26374,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "C2",
                "count": 8634,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 657,
                "trend": "stable",
                "percentage": 0
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
                "percentage": 98
            },
            {
                "name": "Tech",
                "percentage": 1
            },
            {
                "name": "Finance",
                "percentage": 0
            }
        ],
        "campaigns": [
            {
                "name": "malware_download",
                "count": 25504,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxps://k9v3[.]sn-1-pixel[.]ru/u7gv0g8b",
                    "hxxps://k9v3[.]sn-1-pixel[.]ru/0z063hao",
                    "hxxp://41[.]110[.]181[.]226:45208/bin[.]sh"
                ]
            },
            {
                "name": "CINS Threat List",
                "count": 15000,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]10[.]247[.]85",
                    "1[.]1[.]179[.]25",
                    "1[.]117[.]17[.]128"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1475,
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
                "count": 1361,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "47800989ef4eda671b2a76a0cd9123ec7b0bc324",
                    "ae6ca91be0e1145adf2f7120ca3edec533d7573f",
                    "aebe846393cee6199796dc1524f82c22f5f1bb35"
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
                "count": 595,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "acfae6aa71276bdaa0f8f7046e4aa9254f080c2c",
                    "69b032a3fbc6d20d24fb410b437e1a31fb7619c8",
                    "5d5c32a9bf92da1d16d0558ed2ed9f19c821c8a9"
                ]
            },
            {
                "name": " \"Mirai",
                "count": 540,
                "types": [
                    "hash"
                ],
                "sampleIndicators": [
                    " \"db83670a7f1f979dca8718b92f8127db1d0860bcba26ec50e91ab49cf98ae7cb",
                    " \"ad15685f65cffb8efb629da4f74973b65406c744aff5cfd463e674f337490467",
                    " \"63b5f71387cdc1811b7b27eb4a8f058daf36fd95639efca60f42c5c962035780"
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
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious URLs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": "malware_download",
        "totalAttacksThisHour": 47429,
        "lastCalculated": "2025-12-19 00:25 IST"
    }
};
