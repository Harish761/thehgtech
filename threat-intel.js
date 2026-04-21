// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-04-21T15:17:55.446515+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-04-21T15:17:55.095268+05:30",
    "lastUpdatedFormatted": "Apr 21, 2026 at 03:17 PM IST",
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
            "iocCount": 750,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 750,
                "newInLastHour": 42,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"48877a3a4c72c1daf3a80e3c034b56a04cec7ce3856887fed73e645e53c76b96",
                " \"aba14a64c2427ab54db44a605d5b408d57e713b3a4d26a226b657c3f9fb12928",
                " \"4016c65aa176fb5099eb0e40221e540a052d65e24b7798eda94298e919a4419b",
                " \"30f2a49ddba3f7a1b76124c112b6d01da4d440754f63441e12b1e30672a7ec0c",
                " \"346627d7d58703c3da5b604372778175219e5f7f8c0998f742ebede838fa79e4"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1550,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1550,
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
                "1[.]14[.]181[.]94",
                "1[.]15[.]51[.]236",
                "1[.]159[.]57[.]154",
                "1[.]176[.]118[.]246",
                "1[.]176[.]238[.]107"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 3551,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 3551,
                "newInLastHour": 3551,
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
            "iocCount": 26027,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 26027,
                "newInLastHour": 26027,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxps://realfa-ct3[.]wi3sorim[.]in[.]net/05fe317c-0981-4de2-bc8a-930d369db441/ck-3d80df5d12cdfe6450a782fc87bf66b444[.]google",
                "hxxp://182[.]121[.]158[.]55:33054/bin[.]sh",
                "hxxps://best-time2[.]wi3sorim[.]in[.]net/05fe317c-0981-4de2-bc8a-930d369db441/ck-3d80df5d12cdfe6450a782fc87bf66b444[.]google",
                "hxxp://115[.]50[.]202[.]74:59180/i",
                "hxxp://123[.]14[.]83[.]99:42786/bin[.]sh"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 1074,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 1074,
                "newInLastHour": 1074,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"just-ta-lk5[.]wi3sorim[.]in[.]net\"",
                " \"niceshot4[.]wi3sorim[.]in[.]net\"",
                " \"realfa-ct3[.]wi3sorim[.]in[.]net\"",
                " \"best-time2[.]wi3sorim[.]in[.]net\"",
                " \"goodnews1[.]wi3sorim[.]in[.]net\""
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
            "iocCount": 9576,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 9576,
                "newInLastHour": 8,
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
            "totalIndicators": 54566,
            "activeSources": 8,
            "criticalAlerts": 36618,
            "activeCampaigns": 186
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 27019,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "C2",
                "count": 9599,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Phishing",
                "count": 339,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 198,
                "trend": "stable",
                "percentage": 0
            }
        ],
        "targetedSectors": [
            {
                "name": "General",
                "percentage": 81
            },
            {
                "name": "Tech",
                "percentage": 18
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
                "count": 25910,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://58[.]65[.]215[.]0:42497/i",
                    "hxxps://light-mo-on6[.]championincomp[.]in[.]net/05fe317c-0981-4de2-bc8a-930d369db441/ck-3d80df5d12cdfe6450a782fc87bf66b444[.]google",
                    "hxxp://117[.]209[.]23[.]255:46920/i"
                ]
            },
            {
                "name": "CINS Threat List",
                "count": 15000,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]14[.]181[.]94",
                    "1[.]159[.]57[.]154",
                    "1[.]176[.]118[.]246"
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
                "name": "AsyncRAT",
                "count": 1407,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "eb1d7370d422c478efcaad0a0c7c2a7baacc2455",
                    "021068795797aa6c83cb175fed0fc5da9247e7ca",
                    "6e76ede9fb607e6701bf05cdf72378a0bd082d0f"
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
                "count": 676,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "bb085af0610557f877683616d87b7345b59c4f54",
                    "f78be258c92a94888f2e283ddb807dcc22689c86",
                    "e0127cb029c9d3778d15d3948b41ecdc8b44fb03"
                ]
            },
            {
                "name": "LummaStealer",
                "count": 554,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "272e76f605bec1da1ea719df8dc0e7269de7d44e",
                    "ab7f083d77dc2b1b71c0aec9a417e0a5a036a5f9",
                    "7ce02a4df627573696141e40970ef60e246f9f3f"
                ]
            },
            {
                "name": " \"js.clearfake\"",
                "count": 515,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"heavy-lo-ad1[.]tarny-tsedilka[.]in[.]net\"",
                    " \"light-mo-on6[.]championincomp[.]in[.]net\"",
                    " \"warmf-ire5[.]championincomp[.]in[.]net\""
                ]
            },
            {
                "name": "Vidar",
                "count": 506,
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
                "name": " \"n/a",
                "count": 429,
                "types": [
                    "hash"
                ],
                "sampleIndicators": [
                    " \"a8ea1c9138c365e208dfa812b0597a1f83a650dba47f09c3ae264fd238236d2d",
                    " \"ab30fb5ba0d540145ddfc6770a82b5ca2c75840052494f97b2f7e2445621e0b1",
                    " \"2a23549e3b73111d473e87fbc1f43e45e8576018af325b96891b6046cadcb3e8"
                ]
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious URLs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": "SSH Attacks",
        "totalAttacksThisHour": 46007,
        "lastCalculated": "2026-04-21 15:17 IST"
    }
};
