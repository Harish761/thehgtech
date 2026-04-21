// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-04-21T09:09:30.338731+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-04-21T09:09:30.072349+05:30",
    "lastUpdatedFormatted": "Apr 21, 2026 at 09:09 AM IST",
    "comparisonPeriod": "Apr 20 \u2013 Apr 21, 2026",
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
                "hxxp://ahv3ctpms4e[.]webaccess-alert[.]comahv3ctpms4e[.]webaccess-alert[.]com/s/63BZGFSVBWSFCDX7Y9/584dd8/90eab167-7429-489f-99f6-ce86e8d0d81a",
                "hxxp://sucursal-svp[.]vercel[.]app/",
                "hxxps://creatic[.]com[.]ar/trsdx/",
                "hxxp://microsoft[.]account[.]trustedentity[.]com/http:/microsoft[.]authorised-support[.]com/new-account/EOzAFbYj1bjLmgufSIlKJJR9Kpvsy5kc3UkY=3Ag==7Wl5URVhEWFFDaFtYUF5ZaEBeQ19oR1ZEREBYRVM=/6Xx5KG1mKRNjeU3rSnC8diFTM7R4V1de/",
                "hxxp://microsoft[.]account[.]trustedentity[.]com/http:/microsoft[.]authorised-support[.]com/new-account/EOzAFbYj1bjLmgufSIlKJJR9Kpvsy5kc3UkY=3Ag==/6Xx5KG1mKRNjeU3rSnC8diFTM7R4V1de/?t=EOzAFbYj1bjLmgufSIlKJJR9Kpvsy5kc&p=6Xx5KG1mKRNjeU3rSnC8diFTM7R4V1de"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 1122,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 1122,
                "newInLastHour": 411,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"09d57b8f45e25f9f161470dc2853ed2a41986721ee7b919a7d33c8286dc30c75",
                " \"2a23549e3b73111d473e87fbc1f43e45e8576018af325b96891b6046cadcb3e8",
                " \"2782475af3287809eabfe279a25a1171a6d71df0f00ddec707c605b4f28021b6",
                " \"92f8522b1dc06652ca0bf0245a1d80e63229bfcdf5b905ad800882a34aa9e623",
                " \"70fc019e06a59aef35242fe5f7781d36e56f17da2b518a05f930b2bb1fde3b27"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1583,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1583,
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
                "1[.]176[.]118[.]246",
                "1[.]176[.]238[.]107",
                "1[.]180[.]153[.]254",
                "1[.]180[.]183[.]158",
                "1[.]180[.]94[.]210"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 2903,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 2903,
                "newInLastHour": 2903,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]0[.]164[.]165",
                "1[.]12[.]255[.]199",
                "1[.]14[.]181[.]94",
                "1[.]20[.]174[.]45",
                "1[.]214[.]117[.]218"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 25853,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 25853,
                "newInLastHour": 25853,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://42[.]56[.]219[.]68:46771/i",
                "hxxps://next-door3[.]guardiansti1l[.]in[.]net/05fe317c-0981-4de2-bc8a-930d369db441/ck-3d80df5d12cdfe6450a782fc87bf66b444[.]google",
                "hxxp://123[.]13[.]0[.]227:46636/i",
                "hxxps://city-wa-lk2[.]guardiansti1l[.]in[.]net/05fe317c-0981-4de2-bc8a-930d369db441/ck-3d80df5d12cdfe6450a782fc87bf66b444[.]google",
                "hxxp://221[.]15[.]227[.]138:34372/i"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 1003,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 1003,
                "newInLastHour": 1003,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"fullr-oom4[.]guardiansti1l[.]in[.]net\"",
                " \"next-door3[.]guardiansti1l[.]in[.]net\"",
                " \"city-wa-lk2[.]guardiansti1l[.]in[.]net\"",
                " \"top-f-loor1[.]guardiansti1l[.]in[.]net\"",
                " \"silver-ra-in6[.]condit-rearrange[.]in[.]net\""
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
            "iocCount": 9598,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 9598,
                "newInLastHour": 8539,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "9f7fd5816e0bf900bc5142ef5f6f1e9c0fb2cfdf",
                "b93106e8ef0b4d3e5d113dc064bfbba32ec861ae",
                "1773a4873e2b502598f3173dcd3438d5794d2470",
                "9f6a81c2f6dfe7c32948af71c6b834876847b7d7",
                "8ab957510922dd34aa1983008e81b837d0dfcea3"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 45889,
            "activeSources": 8,
            "criticalAlerts": 27994,
            "activeCampaigns": 93
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 26899,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "C2",
                "count": 1095,
                "trend": "down",
                "percentage": -88
            },
            {
                "category": "Phishing",
                "count": 339,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 187,
                "trend": "stable",
                "percentage": -2
            }
        ],
        "targetedSectors": [
            {
                "name": "General",
                "percentage": 77
            },
            {
                "name": "Tech",
                "percentage": 22
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
                "count": 26144,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxps://sweet-pear2[.]wi2sorim[.]in[.]net/05fe317c-0981-4de2-bc8a-930d369db441/ck-3d80df5d12cdfe6450a782fc87bf66b444[.]google",
                    "hxxp://182[.]114[.]255[.]63:53703/bin[.]sh",
                    "hxxp://222[.]139[.]229[.]201:55697/i"
                ]
            },
            {
                "name": "CINS Threat List",
                "count": 15000,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]10[.]133[.]198",
                    "1[.]1[.]176[.]58",
                    "1[.]141[.]180[.]217"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1588,
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
                "name": " \"js.clearfake\"",
                "count": 511,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"freshmilk3[.]wi2sorim[.]in[.]net\"",
                    " \"sweet-pear2[.]wi2sorim[.]in[.]net\"",
                    " \"tasty-apple1[.]wi2sorim[.]in[.]net\""
                ]
            },
            {
                "name": "Vidar",
                "count": 311,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "8ab957510922dd34aa1983008e81b837d0dfcea3",
                    "56df82cc0b474c9cc9343756093fec855746f664",
                    "0c98eb275733094129754fccb3af42479b5fcdc9"
                ]
            },
            {
                "name": "Generic Phishing",
                "count": 292,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxps://dpd[.]uexnaviro[.]cfd/com",
                    "hxxps://micr0soft-validate[.]865pro[.]com/validate/ready/acess/",
                    "hxxps://www[.]aramaiko[.]com/site/index[.]php"
                ]
            },
            {
                "name": " \"Mirai",
                "count": 227,
                "types": [
                    "hash"
                ],
                "sampleIndicators": [
                    " \"1c8144b767fd8b2d139516b611df431e57f25f55470845660693397dae47cc71",
                    " \"2e0f705a3ce36fc2faf33287957ce294ca9a2b5439094ebc0fc91c72c43a2358",
                    " \"b1113ca667d0c1e3c7ffa15dabc293d6a408ea661fb9b2e31bc765ae7e378b92"
                ]
            },
            {
                "name": " \"n/a",
                "count": 170,
                "types": [
                    "hash"
                ],
                "sampleIndicators": [
                    " \"a5d006dba3ec1debb2c917dc9311bb429125f2d518c117f7c1ab27ca1a16523d",
                    " \"dc5cf42efa0f32fd942f2d714499e5dea790d603d0e377e75c18962e399f30f1",
                    " \"1bcf17ce99fc748536317f9d28fd79f103f6166c1e548c0255ede0b434314352"
                ]
            },
            {
                "name": "OffLoader",
                "count": 159,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "b977e869e493f70b3e7914a1eaa6abe2cc1ea04a",
                    "e7af95eaaa4c87398f4c4c80a66972f342bb3328",
                    "037598803e2603499edbf7275e43f7dd82abd8f3"
                ]
            },
            {
                "name": " \"win.vidar\"",
                "count": 142,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"gjo[.]aasscc[.]how\"",
                    " \"hxxps://gjo[.]aasscc[.]how/\"",
                    " \"gjo[.]cebolinhaburger[.]com\""
                ]
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious URLs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": "AsyncRAT",
        "totalAttacksThisHour": 54014,
        "lastCalculated": "2026-04-21 09:09 IST"
    }
};
