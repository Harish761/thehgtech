// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-08-04T20:05:16.429121+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-08-04T20:05:16.197567+05:30",
    "lastUpdatedFormatted": "Aug 04, 2026 at 08:05 PM IST",
    "comparisonPeriod": "Aug 03 \u2013 Aug 04, 2026",
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
                "hxxps://rbcode[.]net/v/523e45df971f008eb055d8a32f59cec2",
                "hxxp://d4n4-aktifasi[.]flashcharger[.]my[.]id/",
                "hxxps://mail[.]appleflndme[.]com/FL26/",
                "hxxp://mail[.]fn-icloud[.]com/FL26/",
                "hxxp://mail[.]supportslcloud[.]help/FL26/"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 912,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 912,
                "newInLastHour": 167,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"ea86029605e9288a9320c3ca83f30e1e63d06936939a3039880f45770ea83831",
                " \"288136b92c3d8bfdcdf1e4ae25e2ad9fb740c268deab924783537b90eb4ad449",
                " \"d61b9f23583e391d02890d2af353c890d3fb40dec6faba2aa14dfb6d1eb197d8",
                " \"43f18b1026da73060d9af4797352c8273ecb6cc71da9190398cfe443c11d1ab8",
                " \"09a679a20c41dd3be6d9a2fb10906cb8e3037c2b9ea5b2f91c2e2b2b790962ce"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1652,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1652,
                "newInLastHour": 2,
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
                "1[.]10[.]185[.]51",
                "1[.]120[.]123[.]117",
                "1[.]15[.]82[.]219",
                "1[.]159[.]103[.]245",
                "1[.]178[.]120[.]110"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 5094,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 5094,
                "newInLastHour": 5094,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]0[.]164[.]165",
                "1[.]162[.]18[.]135",
                "1[.]192[.]61[.]70",
                "1[.]192[.]63[.]178",
                "1[.]194[.]233[.]49"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 15241,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 15241,
                "newInLastHour": 15241,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://125[.]41[.]0[.]156:58056/i",
                "hxxp://123[.]4[.]232[.]178:44233/i",
                "hxxp://79[.]137[.]194[.]83/run[.]exe",
                "hxxp://125[.]41[.]0[.]130:46833/bin[.]sh",
                "hxxp://125[.]41[.]0[.]156:58056/bin[.]sh"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 4241,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 4241,
                "newInLastHour": 4063,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"bt6b37z4[.]leesvillelakerealtor[.]com\"",
                " \"hxxps://indusrocktool[.]co[.]in/\"",
                " \"dmmcvi[.]ospreyyfx[.]com\"",
                " \"ospreyyfx[.]com\"",
                " \"130[.]12[.]182[.]39:7001\""
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
            "iocCount": 10230,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 10230,
                "newInLastHour": 11,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "ca9e642c1028f3a7fa79947493c34a981705a05d",
                "f5c8ee530b1fd817432a4bafad12126d1ae744d4",
                "92bebc09af464e669c68d95052916e76f989e043",
                "9b5e0b2f2acb07fb226b8805b3a5fb5a28035e6e",
                "942c595db95914eb4987a1e7ddd6f728fbc674ec"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 47380,
            "activeSources": 8,
            "criticalAlerts": 26197,
            "activeCampaigns": 248
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 15923,
                "trend": "stable",
                "percentage": 1
            },
            {
                "category": "C2",
                "count": 10274,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 3664,
                "trend": "stable",
                "percentage": 1
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
                "count": 15091,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://182[.]125[.]17[.]14:34545/i",
                    "hxxp://219[.]156[.]28[.]229:49206/i",
                    "hxxp://219[.]156[.]28[.]229:49206/bin[.]sh"
                ]
            },
            {
                "name": "CINS Threat List",
                "count": 15000,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]159[.]103[.]245",
                    "1[.]177[.]162[.]2",
                    "1[.]188[.]102[.]164"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1662,
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
                "count": 1434,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "6647f9e4a2e273d7b78ff02be7114b0e9e2a719f",
                    "67044f9079f804d4a6217093c679897fec1f90e2",
                    "c7ec4c2fa1678702ae684a069cf37a4eef16ef27"
                ]
            },
            {
                "name": " \"win.cobalt_strike\"",
                "count": 1384,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"154[.]12[.]94[.]16:22\"",
                    " \"182[.]92[.]83[.]146:8080\"",
                    " \"206[.]238[.]42[.]153:4433\""
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
                "count": 694,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "b14379b3743c37a26289499aca921c99998649f1",
                    "4c67471be88dd63db2466621fe9e2a2d848f5b79",
                    "9cc76149b07c25893611bc8339406a6312ab2053"
                ]
            },
            {
                "name": "Vidar",
                "count": 657,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "61042420cd71b5edcdd9ef7ff070deef7398a725",
                    "b2e42b1a036329fa6fef4477d35887b1d357711e",
                    "58243e4728cadacb308dfa0b964571e374ac3c1c"
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
                "name": "OffLoader",
                "count": 448,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "820cd09994b3e76f6e89926a4b94ec0ccacd888c",
                    "5dc598df9a1f9cf893ce86b54f8be517475d1ff9",
                    "50cad154b9d5fdd19c3f67162257de03d3a6afcd"
                ]
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious IPs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": "malware_download",
        "totalAttacksThisHour": 39883,
        "lastCalculated": "2026-08-04 20:05 IST"
    }
};
