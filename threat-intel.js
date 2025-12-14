// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2025-12-15T02:01:14.060705+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2025-12-15T02:01:13.709513+05:30",
    "lastUpdatedFormatted": "Dec 15, 2025 at 02:01 AM IST",
    "comparisonPeriod": "Dec 14 \u2013 Dec 15, 2025",
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
                "hxxps://mathlearning[.]2004416[.]workers[.]dev/uadmin/uadmin[.]php/",
                "hxxps://gateway[.]ipfs[.]io/ipfs/QmTWMzrfTk1HEzSV1eXBT8JCfCfnVjvzzQ3f2HQSPfhGgf/",
                "hxxps://si[.]team-su[.]com/p/fhtb-mrgw/nwjrmgwv/",
                "hxxps://dpd-ptzzet[.]cfd/ptr",
                "hxxps://encrypt[.]wallet-connect-6pp[.]pages[.]dev/assets/assets/formtojson[.]js/"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 946,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 946,
                "newInLastHour": 31,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"b7bbc5e217162c0d2a5799c78b105037e0707de7eda04a0103a1161d8d604102",
                " \"6e2fb508779859da86754cea3a2a4b15e90d0df1f9695422080611b54826dc08",
                " \"92147d07877a45ff6462b0bfb22bbbe49466f1d6c3a853c36426acde59ca35da",
                " \"d3de098276976dc4d0986f947e8470bfd42c59e4c422b64a159e11b238d553f3",
                " \"27ac0a02c0cd622e7440a20a7307843f13285ff77b1f9666280affe8dd3e6076"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1495,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1495,
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
                "1[.]10[.]214[.]65",
                "1[.]1[.]179[.]25",
                "1[.]123[.]20[.]64",
                "1[.]15[.]118[.]23",
                "1[.]161[.]61[.]55"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 5635,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 5635,
                "newInLastHour": 5635,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]13[.]175[.]150",
                "1[.]162[.]231[.]97",
                "1[.]194[.]200[.]251",
                "1[.]20[.]220[.]158",
                "1[.]214[.]197[.]163"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 28788,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 28788,
                "newInLastHour": 28788,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxps://shade[.]darkp1xel[.]ru/5mzm1jy7",
                "hxxps://shade[.]darkp1xel[.]ru/rzasofy1",
                "hxxps://delta5[.]darkp1xel[.]ru/wt6s3q95",
                "hxxps://delta5[.]darkp1xel[.]ru/ccupap02",
                "hxxps://gamma[.]darkp1xel[.]ru/rnc0xn6v"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 859,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 859,
                "newInLastHour": 858,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"shade[.]darkp1xel[.]ru\"",
                " \"delta5[.]darkp1xel[.]ru\"",
                " \"216[.]92[.]60[.]88:443\"",
                " \"156[.]234[.]152[.]176:9812\"",
                " \"23[.]235[.]163[.]209:9812\""
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
            "iocCount": 8629,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 8629,
                "newInLastHour": 1,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "bf39408fcf66c8f2d9018d2aeb6bf743cf4ecabc",
                "42db76d7258b5310c6fdf9cc4f7d6d206711ff9e",
                "605fedf5b6ba598a3446c6a99b1fd2a6a0fdb58c",
                "d83ae9ca38bbbd42120b5efa7a125d35a8ae429c",
                "b6bd6b04935cb770d7ddf5d5fb3dd11fffb7a7c3"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 56063,
            "activeSources": 8,
            "criticalAlerts": 38386,
            "activeCampaigns": 179
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 29779,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "C2",
                "count": 8607,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 573,
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
                "count": 28768,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxps://rime[.]frostc0re[.]ru/ik7unbt7",
                    "hxxps://rime[.]frostc0re[.]ru/0375zezs",
                    "hxxps://satin[.]softdr1ve[.]ru/kfa84i35"
                ]
            },
            {
                "name": "CINS Threat List",
                "count": 15000,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]10[.]214[.]65",
                    "1[.]1[.]179[.]25",
                    "1[.]123[.]20[.]64"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1495,
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
                "count": 1360,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "ae6ca91be0e1145adf2f7120ca3edec533d7573f",
                    "aebe846393cee6199796dc1524f82c22f5f1bb35",
                    "2f0654bc0b155cba85aa0be287860feff2045195"
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
                "name": " \"Mirai",
                "count": 504,
                "types": [
                    "hash"
                ],
                "sampleIndicators": [
                    " \"6106a9316d7d294bc75cc57eeae832ef836d4a00395240e702fc168dccb93adb",
                    " \"60974d37ba4aceba633c9ffee55439a95a6d9099ccdf247df6186ebb82a7b8c3",
                    " \"2f0aeb866f29dcaff2f8b0554aeaf90cecd37c6bec22cd2de8005c28e515bba0"
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
        "totalAttacksThisHour": 50617,
        "lastCalculated": "2025-12-15 02:01 IST"
    }
};
