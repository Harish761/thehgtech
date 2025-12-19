// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2025-12-19T10:11:56.198239+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2025-12-19T10:11:55.900388+05:30",
    "lastUpdatedFormatted": "Dec 19, 2025 at 10:11 AM IST",
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
                "hxxp://www[.]6366uu[.]com/",
                "hxxps://bet73047[.]com/about/cookies",
                "hxxps://www[.]by[.]4qiuj[.]com/",
                "hxxp://recruit[.]metacareersglobal[.]com/",
                "hxxps://m[.]g5115g[.]com/"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 705,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 705,
                "newInLastHour": 3,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"cc6f6e9ed69008189ddbd378fd9abb42e97b9df516a5dde7cd2827c0f168dd3e",
                " \"03224277f831034a084fcbcc5def473d113edef62842e5337db2408b6281d501",
                " \"f6ab108862bca791202ee90faf5ce2ae8f8ba5caa94d721fdca480f7f884553f",
                " \"1ef86f38b7e44a7511f09e4bec9a1da105e70db6d522467ac14b4ea42df632c9",
                " \"f7423286fa5cca435c852daca51cd40a7a383102658c272a27645c8bb17c6572"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1453,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1453,
                "newInLastHour": 1,
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
                "1[.]10[.]223[.]148",
                "1[.]10[.]247[.]85",
                "1[.]1[.]179[.]25",
                "1[.]117[.]17[.]128",
                "1[.]15[.]118[.]23"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 5475,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 5475,
                "newInLastHour": 5475,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]12[.]64[.]80",
                "1[.]14[.]95[.]153",
                "1[.]194[.]200[.]251",
                "1[.]214[.]197[.]163",
                "1[.]220[.]64[.]218"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 25119,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 25119,
                "newInLastHour": 25119,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://42[.]230[.]55[.]171:39070/bin[.]sh",
                "hxxp://110[.]37[.]52[.]73:41567/bin[.]sh",
                "hxxp://117[.]213[.]82[.]221:33655/i",
                "hxxp://219[.]157[.]60[.]158:46674/i",
                "hxxps://flip[.]dou5etossin8[.]ru/s0um4puy"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 1122,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 1122,
                "newInLastHour": 1089,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"flip[.]dou5etossin8[.]ru\"",
                " \"wager2[.]dou5etossin8[.]ru\"",
                " \"token[.]dou5etossin8[.]ru\"",
                " \"forum[.]dict2tja8d[.]ru\"",
                " \"95[.]163[.]233[.]3:443\""
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
            "iocCount": 8648,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 8648,
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
            "totalIndicators": 52153,
            "activeSources": 8,
            "criticalAlerts": 34429,
            "activeCampaigns": 185
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 25795,
                "trend": "stable",
                "percentage": -2
            },
            {
                "category": "C2",
                "count": 8634,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 597,
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
                "count": 25042,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://115[.]55[.]250[.]232:60697/bin[.]sh",
                    "hxxp://110[.]37[.]0[.]37:60976/bin[.]sh",
                    "hxxp://120[.]61[.]202[.]236:42116/bin[.]sh"
                ]
            },
            {
                "name": "CINS Threat List",
                "count": 15000,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]10[.]223[.]148",
                    "1[.]10[.]247[.]85",
                    "1[.]1[.]179[.]25"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1472,
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
                "count": 436,
                "types": [
                    "hash"
                ],
                "sampleIndicators": [
                    " \"f7423286fa5cca435c852daca51cd40a7a383102658c272a27645c8bb17c6572",
                    " \"cd4a91fc0c6c7525ef207467906be0bcd8ceb901c4b6a5976ebddf527b091b16",
                    " \"0f0ea44229df5197183247494ca21e5ea140cc3a4feef1c0d8be48806c4b2048"
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
        "totalAttacksThisHour": 46991,
        "lastCalculated": "2025-12-19 10:11 IST"
    }
};
