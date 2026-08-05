// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-08-05T16:14:16.739739+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-08-05T16:14:16.445080+05:30",
    "lastUpdatedFormatted": "Aug 05, 2026 at 04:14 PM IST",
    "comparisonPeriod": "Aug 04 \u2013 Aug 05, 2026",
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
                "hxxps://rbcode[.]net/v/26497cb67cbd07c6bdab07ccf711632f",
                "hxxp://yhinesl[.]com/",
                "hxxps://campaingofficial[.]vercel[.]app/front/",
                "hxxps://buildofficial[.]vercel[.]app/front/",
                "hxxps://www[.]campofficial[.]vercel[.]app/"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 1136,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 1136,
                "newInLastHour": 201,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"847d8f4998d22fde37eb76f99b6d91012c42965b741fe2cec453ca5876cdf147",
                " \"17843590f5ff6f7ce4f7036981fdddfc1057c2ecc34e81eba174c045f1e17e70",
                " \"6045d659050d22e1bdd3c6d71186cfc9c32d790a52cadb295ca21406f0fc0220",
                " \"8db6490330bba0c5cfbb1700025b19ea15435ad3ade60ba15f0548584daae0f8",
                " \"c67652b243f64f8aaa7d0fd042c0021082f944c1a236ea9f24ca13be166e2483"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1619,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1619,
                "newInLastHour": 8,
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
                "2.57.17.0/24"
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
                "1[.]159[.]48[.]69",
                "1[.]178[.]120[.]110",
                "1[.]20[.]173[.]46",
                "1[.]225[.]62[.]211"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 4990,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 4990,
                "newInLastHour": 4990,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]0[.]164[.]165",
                "1[.]192[.]61[.]70",
                "1[.]192[.]63[.]178",
                "1[.]194[.]233[.]49",
                "1[.]20[.]228[.]110"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 15400,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 15400,
                "newInLastHour": 15400,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://115[.]48[.]145[.]53:41733/i",
                "hxxp://182[.]123[.]178[.]25:50097/i",
                "hxxp://110[.]36[.]25[.]33:47305/bin[.]sh",
                "hxxp://115[.]55[.]246[.]67:45978/i",
                "hxxp://182[.]121[.]181[.]242:39984/bin[.]sh"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 4167,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 4167,
                "newInLastHour": 4085,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"nb8myksg[.]sandblastingaustin[.]com\"",
                " \"sandblastingaustin[.]com\"",
                " \"ciborin[.]shop\"",
                " \"64[.]89[.]160[.]29:4525\"",
                " \"opwiik[.]reesetransports[.]com\""
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
            "iocCount": 10172,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 10172,
                "newInLastHour": 5,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "ded1fe95801f3c3fd8a1c73360fbaef6697bcf34",
                "30ae51f106a573be769968e15c0a6f56a2878a16",
                "c2826e64fffde42b99ba86c30055eb2dbd064319",
                "97dd1d6a2bc5769af6e0a7999bfaf2aeaf5452a1",
                "964d86f575c50b29d2b7157331d556859dd43e5e"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 47704,
            "activeSources": 8,
            "criticalAlerts": 26564,
            "activeCampaigns": 239
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 16279,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "C2",
                "count": 10285,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 3712,
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
                "count": 15245,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://219[.]156[.]60[.]0:50595/i",
                    "hxxp://45[.]8[.]118[.]17:34250/i",
                    "hxxp://112[.]239[.]113[.]216:51622/i"
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
                    "1[.]15[.]82[.]219"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1664,
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
                "count": 1381,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"43[.]108[.]51[.]124:8080\"",
                    " \"43[.]108[.]51[.]124:7000\"",
                    " \"43[.]108[.]51[.]124:22155\""
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
                "count": 664,
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
        "totalAttacksThisHour": 39994,
        "lastCalculated": "2026-08-05 16:14 IST"
    }
};
