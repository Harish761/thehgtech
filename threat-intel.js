// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-10-13T06:25:13.181265+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-10-13T06:25:12.890350+05:30",
    "lastUpdatedFormatted": "Oct 13, 2026 at 06:25 AM IST",
    "comparisonPeriod": "Oct 12 \u2013 Oct 13, 2026",
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
                "hxxps://bit-mart-hub[.]zapier[.]app/",
                "hxxp://cpcontacts[.]52-153-141-124[.]cprapid[.]com/?koncetlah&shem=aimgspe",
                "hxxps://rodrigosilvaanalyst[.]github[.]io/netflix",
                "hxxps://ritikbhanot9999[.]github[.]io/amazon-clone",
                "hxxps://rahil-azam[.]github[.]io/first-website"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 1037,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 1037,
                "newInLastHour": 186,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"e5b549a8088a137935103dc696337ab5a960e17d1902d1605542ac3fe9f9a4eb",
                " \"84f3cac897890280a802e6449493d4eb788a95f58daf7e0cdb575fd5b587853e",
                " \"f3b8d2f54c121729446d69615bb259a8882c73971e3a61bd9ac4e31e10044ed1",
                " \"afcb42ae57e83ba3187421ab16209404f6897eb8005f48145f1b4a6e690730bb",
                " \"e46445a2199f58ccf9e55bfd57a469ca65ac48d7674c879520874f2951d031ac"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1674,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1674,
                "newInLastHour": 77,
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
                "1[.]12[.]229[.]231",
                "1[.]14[.]149[.]30",
                "1[.]145[.]29[.]140",
                "1[.]192[.]129[.]106",
                "1[.]193[.]58[.]33"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 4304,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 4304,
                "newInLastHour": 4304,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]0[.]164[.]165",
                "1[.]14[.]240[.]247",
                "1[.]2[.]225[.]235",
                "1[.]214[.]214[.]114",
                "1[.]238[.]106[.]229"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 33555,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 33555,
                "newInLastHour": 33555,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://42[.]230[.]34[.]249:45500/i",
                "hxxp://42[.]231[.]174[.]164:60965/i",
                "hxxp://115[.]56[.]96[.]117:37445/i",
                "hxxp://101[.]108[.]13[.]178:40608/i",
                "hxxp://27[.]193[.]51[.]129:42610/bin[.]sh"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 6398,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 6398,
                "newInLastHour": 5897,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"hxxps://m[.]6r6r6[.]org/fg\"",
                " \"hxxps://m[.]6r6r6[.]org/ax\"",
                " \"hxxps://m[.]6r6r6[.]org/yi/\"",
                " \"hxxps://m[.]6r6r6[.]org/yi\"",
                " \"hxxps://m[.]6r6r6[.]org/y2\""
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
            "iocCount": 10941,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 10941,
                "newInLastHour": 112,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "11cfb1e85c316e9b9785c6778bc077bb04093dfd",
                "c389945d4fc75250b291953e0abad0662dd9ce7d",
                "24ec954313877b212b522682aef606180ff6f343",
                "515574d4dc4957fbd0043d3a4269485384e504e7",
                "51f9d6339bfdb9321630392913941e04d921cf7d"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 68630,
            "activeSources": 8,
            "criticalAlerts": 45556,
            "activeCampaigns": 289
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 34725,
                "trend": "stable",
                "percentage": 3
            },
            {
                "category": "C2",
                "count": 10831,
                "trend": "up",
                "percentage": 363
            },
            {
                "category": "Botnet",
                "count": 4919,
                "trend": "stable",
                "percentage": 8
            },
            {
                "category": "Phishing",
                "count": 302,
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
                "percentage": 0
            },
            {
                "name": "Finance",
                "percentage": 0
            },
            {
                "name": "Government",
                "percentage": 0
            }
        ],
        "campaigns": [
            {
                "name": "malware_download",
                "count": 33740,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://105[.]186[.]118[.]157:54387/bin[.]sh",
                    "hxxp://117[.]235[.]146[.]45:60112/bin[.]sh",
                    "hxxp://117[.]26[.]227[.]112:44031/bin[.]sh"
                ]
            },
            {
                "name": "CINS Threat List",
                "count": 15000,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]12[.]229[.]231",
                    "1[.]14[.]149[.]30",
                    "1[.]145[.]29[.]140"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1599,
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
                "count": 1455,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "58b3990b07e9caaa2c504a5b9759d14eefcbc5e5",
                    "64c5f719aa0111be2ac04d785a8904b5baa22a88",
                    "5fe196813d0bf092a5d8f3ef550fe959a86ccf87"
                ]
            },
            {
                "name": " \"win.cobalt_strike\"",
                "count": 1322,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"192[.]144[.]171[.]134:4433\"",
                    " \"149[.]50[.]116[.]109:10000\"",
                    " \"203[.]98[.]68[.]24:443\""
                ]
            },
            {
                "name": "Vidar",
                "count": 796,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "245f189a60a8b20a5dc562134b3d55d6539ac186",
                    "ab1d61a4f4692b105daa345a7185119f0d29cb79",
                    "9769dce57ee77a6da94da9c824cd923cb9599892"
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
                "count": 712,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "650f90b14ecb5dc0160ea61d0620402c075c2f3d",
                    "64d01c8e86e0a3b51c270743879a1fe966af0db4",
                    "0f0a58e91f1c0f21ec7934e2f5e6b54187ed54be"
                ]
            },
            {
                "name": " \"win.pure_rat\"",
                "count": 616,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"77[.]110[.]114[.]31:443\"",
                    " \"64[.]50[.]186[.]111:56002\"",
                    " \"37[.]72[.]168[.]199:56002\""
                ]
            },
            {
                "name": "LummaStealer",
                "count": 558,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "a45080c92a0b2314966517a4643ebf280e88a11b",
                    "501d817bb1780acfe5e47082c43472bda8068e4d",
                    "2beac2ee8b2fe7625d4de9f5381d37f200965f91"
                ]
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious URLs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": " \"win.vidar\"",
        "totalAttacksThisHour": 59436,
        "lastCalculated": "2026-10-13 06:25 IST"
    }
};
