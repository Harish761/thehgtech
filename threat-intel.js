// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2025-12-14T18:25:29.124375+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2025-12-14T18:25:28.779119+05:30",
    "lastUpdatedFormatted": "Dec 14, 2025 at 06:25 PM IST",
    "comparisonPeriod": "Dec 13 \u2013 Dec 14, 2025",
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
            "iocCount": 896,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 896,
                "newInLastHour": 28,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"ae2c866a614790adfaf25282e84307933b8cee5294c90861469e0577321bec73",
                " \"0985d2bd933aa5585e6454304a80ad2f32f8814d1d14add558038e033b482bdc",
                " \"05c944314d0c39b3f389a6ed36b5adc5f2d8521b5a1d9a82d2f36ab1acbbce87",
                " \"967b5c611d304385807ea2d865fa561c15cde0473dd63e768679a4f29f0e4563",
                " \"43f8f94ca5aa0af7bfb0cc1d2f664a46500a161b2d082b48b516d084ef485348"
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
            "iocCount": 5632,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 5632,
                "newInLastHour": 5632,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]13[.]175[.]150",
                "1[.]162[.]231[.]97",
                "1[.]20[.]220[.]158",
                "1[.]214[.]197[.]163",
                "1[.]220[.]64[.]218"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 28597,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 28597,
                "newInLastHour": 28597,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxps://nimbus5[.]cloudv1be[.]ru/70ockunu",
                "hxxps://nimbus5[.]cloudv1be[.]ru/bc72l9eo",
                "hxxps://cirrus[.]cloudv1be[.]ru/5sjo4bbn",
                "hxxps://6ifg[.]mistybyte[.]ru/vnckuc25",
                "hxxps://6ifg[.]mistybyte[.]ru/1w6f1tdb"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 979,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 979,
                "newInLastHour": 978,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"43[.]160[.]202[.]246:443\"",
                " \"nimbus5[.]cloudv1be[.]ru\"",
                " \"cirrus[.]cloudv1be[.]ru\"",
                " \"6ifg[.]mistybyte[.]ru\"",
                " \"whx[.]mistybyte[.]ru\""
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
            "iocCount": 8631,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 8631,
                "newInLastHour": 0,
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
            "totalIndicators": 55971,
            "activeSources": 8,
            "criticalAlerts": 38124,
            "activeCampaigns": 186
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 29516,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "C2",
                "count": 8608,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 674,
                "trend": "stable",
                "percentage": -7
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
                "count": 28541,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxps://ember[.]bluef1re[.]ru/91j8hris",
                    "hxxps://ember[.]bluef1re[.]ru/0s2f33xl",
                    "hxxps://trace[.]bluef1re[.]ru/crj208q1"
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
                "count": 420,
                "types": [
                    "hash"
                ],
                "sampleIndicators": [
                    " \"1168d7937065659a786c3258f8fa671bb28eb888018f5268ef180830e7d90ef9",
                    " \"30143f53edb33f11e8a5c301bda2e4a699ead7e0c02b3a9b3e0eb729cd4ffe89",
                    " \"0d0c42081620ff357d0aefc87acb44cd84c8ab2b6c452a033be4b3a88b43c4c1"
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
        "totalAttacksThisHour": 50539,
        "lastCalculated": "2025-12-14 18:25 IST"
    }
};
