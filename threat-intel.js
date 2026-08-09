// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-08-10T02:17:21.596561+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-08-10T02:17:21.296000+05:30",
    "lastUpdatedFormatted": "Aug 10, 2026 at 02:17 AM IST",
    "comparisonPeriod": "Aug 09 \u2013 Aug 10, 2026",
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
                "hxxps://www[.]roblox[.]com[.]bi/users/215129800049/profile",
                "hxxps://www[.]uphloll-xlugnm-io[.]godaddysites[.]com/",
                "hxxp://uphloll-xlugnm-io[.]godaddysites[.]com/",
                "hxxp://www[.]binance-register[.]blogspot[.]com/",
                "hxxp://hbkpt52lkww-xlbdwwur-2b7f3a-hbk44p[.]pages[.]dev/"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 754,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 754,
                "newInLastHour": 14,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"2e0cf5af50240dbbd1105637e53d2ffff73379ffdc13bc8483d47d39c44775c5",
                " \"6cae7a11941d4b5993a30bccf786ee39d0051736443df539b7c8cf551d8d4986",
                " \"bf807da85ac1b940cad9795a33f101467c72674d7f98ae6b61c3a5e3695a17a5",
                " \"f4bdbd0603010c136ee9582e391ea5546a5f8c1fe541c92425a6d046a38c648e",
                " \"16d2453b795df99b13d6ccb38ad2aecc4959a3e2ab796e9c611a76b95deadd0c"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1683,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1683,
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
                "2.26.75.0/24",
                "2.27.5.0/24"
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
                "1[.]119[.]194[.]226",
                "1[.]179[.]240[.]68",
                "1[.]188[.]5[.]237",
                "1[.]188[.]82[.]172",
                "1[.]192[.]129[.]106"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 4899,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 4899,
                "newInLastHour": 4899,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]0[.]164[.]165",
                "1[.]169[.]210[.]90",
                "1[.]180[.]246[.]242",
                "1[.]197[.]102[.]62",
                "1[.]209[.]110[.]147"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 15775,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 15775,
                "newInLastHour": 15775,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://110[.]37[.]61[.]166:59222/i",
                "hxxp://110[.]37[.]61[.]166:59222/bin[.]sh",
                "hxxp://182[.]121[.]9[.]194:56154/bin[.]sh",
                "hxxp://91[.]92[.]242[.]236/files-129312398/files/file_5939fd79fb073513[.]exe",
                "hxxp://115[.]202[.]187[.]105:58599/bin[.]sh"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 4177,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 4177,
                "newInLastHour": 3952,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"3igbupne[.]eng-bpzone[.]com\"",
                " \"mgeehor[.]prostavve[.]com\"",
                " \"fhodxy[.]en-us-echoxen[.]us\"",
                " \"geraldmetroz[.]ch\"",
                " \"en-us-echoxen[.]us\""
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
                "162[.]243[.]103[.]246",
                "178[.]62[.]3[.]223",
                "27[.]133[.]154[.]218",
                "34[.]204[.]119[.]63",
                "50[.]16[.]16[.]211"
            ]
        },
        "SSL Blacklist": {
            "description": "Malicious SSL certificates used by botnet C2 servers. Helps detect encrypted malware communications.",
            "website": "https://sslbl.abuse.ch/",
            "updateFrequency": "Daily",
            "iocCount": 10355,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 10355,
                "newInLastHour": 1,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "0034d3f66acca402e4ae3d683e435f10d513006a",
                "1ab7aaf074b1e925322cd328b4d1343f46f4f91b",
                "b5b8bebd73d8e8aec88ccc17b1e27c34921667ae",
                "508ab3696a27249abc7ea437ee1b8bcb8a999d65",
                "02df529de5d2da5b01c0b557b02b289b060f344b"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 48241,
            "activeSources": 8,
            "criticalAlerts": 26907,
            "activeCampaigns": 239
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 16574,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "C2",
                "count": 10333,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 3476,
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
                "count": 15762,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://36[.]69[.]66[.]139:39448/i",
                    "hxxp://103[.]249[.]199[.]3:49338/i",
                    "hxxp://103[.]249[.]199[.]3:49338/bin[.]sh"
                ]
            },
            {
                "name": "CINS Threat List",
                "count": 15000,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]119[.]194[.]226",
                    "1[.]15[.]14[.]29",
                    "1[.]159[.]103[.]245"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1683,
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
                "count": 1435,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "714c56e9e207d5c8e08e1ca28cd9ba85f079d061",
                    "6647f9e4a2e273d7b78ff02be7114b0e9e2a719f",
                    "67044f9079f804d4a6217093c679897fec1f90e2"
                ]
            },
            {
                "name": " \"win.cobalt_strike\"",
                "count": 1290,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"36[.]140[.]162[.]173:12443\"",
                    " \"169[.]58[.]82[.]229:3389\"",
                    " \"139[.]196[.]111[.]118:111\""
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
                "count": 695,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "ece1b6bdc8e62d35188aab274bdb0be28d84c43f",
                    "b14379b3743c37a26289499aca921c99998649f1",
                    "4c67471be88dd63db2466621fe9e2a2d848f5b79"
                ]
            },
            {
                "name": "Vidar",
                "count": 669,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "b5b8bebd73d8e8aec88ccc17b1e27c34921667ae",
                    "cfe6dcd7527099d525ffa8cec0bd1ab5020d47a7",
                    "a9ebd28ce7e4ac020e6d263e228b8547e1914bfa"
                ]
            },
            {
                "name": "LummaStealer",
                "count": 557,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "501d817bb1780acfe5e47082c43472bda8068e4d",
                    "2beac2ee8b2fe7625d4de9f5381d37f200965f91",
                    "a46841d623a191366909b24375bee0eceea23bbe"
                ]
            },
            {
                "name": "ConnectWise",
                "count": 454,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "d7d3f678f9b63334375db11eecc81be2db4db6f0",
                    "cede10451532b072c7017c49ef4fcd273301a826",
                    "e63b53c2c26b9bff8f20e018efe7c166ec3c4acd"
                ]
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious URLs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": "malware_download",
        "totalAttacksThisHour": 39946,
        "lastCalculated": "2026-08-10 02:17 IST"
    }
};
