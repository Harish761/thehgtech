// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-02-16T18:55:09.845835+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-02-16T18:55:09.573253+05:30",
    "lastUpdatedFormatted": "Feb 16, 2026 at 06:55 PM IST",
    "comparisonPeriod": "Feb 15 \u2013 Feb 16, 2026",
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
                "hxxp://matemaskklugn[.]webflow[.]io/",
                "hxxp://en---lldgerlive-auth[.]webflow[.]io/",
                "hxxps://mimosawedding[.]vn/wp-admin/network/es/ING-ES/Archive/",
                "hxxps://sykmo[.]mjt[.]lu/lnk/AVsAAIzqux0AAAAAAAAABBV0V00AAYKKI-4AAAAAADDrZwBphVS49pIAOhlmSbSFyZuUSZmNCwAst-w/1/MwRe8W9WhKx-6-QqzibEDQ/aHR0cHM6Ly9taW1vc2F3ZWRkaW5nLnZuL3dwLWFkbWluL25ldHdvcmsvZXMvSU5HLUVTL0FyY2hpdmUv",
                "hxxp://ht-27[.]github[.]io/Netflix-Clone"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 516,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 516,
                "newInLastHour": 96,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"055d777c3d38269f07d454f07abc985dfa52493b669cd3cc687304a0a6425122",
                " \"24efdf13f33075a322f548342170ee126726089179a7159cd51683a4ce606a57",
                " \"da30435ab61d02a3f377a0ec9a20d632a88da86ebb00e220a112a6caafe8a2dd",
                " \"688c658457069ba67ff844cb28f409cf8988a15cc22be92b4ac4b62404fbf207",
                " \"7d992792b5ed39e61eecfa1860baa276540f3193031b7a8f2f0c5a62c8a1214e"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1473,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1473,
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
                "1[.]0[.]164[.]165",
                "1[.]140[.]6[.]82",
                "1[.]15[.]116[.]189",
                "1[.]15[.]118[.]23",
                "1[.]15[.]22[.]112"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 6470,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 6470,
                "newInLastHour": 6470,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]13[.]79[.]212",
                "1[.]14[.]12[.]141",
                "1[.]14[.]254[.]146",
                "1[.]145[.]119[.]178",
                "1[.]194[.]219[.]159"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 19603,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 19603,
                "newInLastHour": 19603,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://172[.]86[.]114[.]147/ISIS[.]sh",
                "hxxp://172[.]86[.]114[.]147/a-r[.]m-4[.]ISIS",
                "hxxp://172[.]86[.]114[.]147/m-6[.]8-k[.]ISIS",
                "hxxp://172[.]86[.]114[.]147/s-h[.]4-[.]ISIS",
                "hxxp://172[.]86[.]114[.]147/p-o[.]w-e[.]ISIS"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 1072,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 1072,
                "newInLastHour": 912,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"si1h0uette-llnk[.]paw85silhouette[.]coupons\"",
                " \"31[.]45[.]231[.]174:10000\"",
                " \"151[.]243[.]109[.]247:8888\"",
                " \"contour[.]paw85silhouette[.]coupons\"",
                " \"c9t5q[.]paw85silhouette[.]coupons\""
            ]
        },
        "Feodo Tracker": {
            "description": "Botnet C2 server IPs from Feodo Tracker. Tracks Dridex, Emotet, TrickBot, QakBot, and BazarLoader.",
            "website": "https://feodotracker.abuse.ch/",
            "updateFrequency": "Hourly",
            "iocCount": 2,
            "iocDataUrl": "https://thehgtech.com/ioc-data/feodo-tracker.json",
            "stats": {
                "total": 2,
                "newInLastHour": 2,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "162[.]243[.]103[.]246",
                "172[.]232[.]59[.]14"
            ]
        },
        "SSL Blacklist": {
            "description": "Malicious SSL certificates used by botnet C2 servers. Helps detect encrypted malware communications.",
            "website": "https://sslbl.abuse.ch/",
            "updateFrequency": "Daily",
            "iocCount": 8917,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 8917,
                "newInLastHour": 0,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "c1c0073363896e9c687faf206199b45ffe4297b6",
                "c5091d64084fde2aa1305d4f4eb4eb136d8af5eb",
                "952943ce38e1497736f79a88ec948506a915990d",
                "e448b00d829b3223ae7fc3f099436017d2bb01a4",
                "5324e2c55e596d1d2e68031819751c0703ac9cd1"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 46654,
            "activeSources": 8,
            "criticalAlerts": 28860,
            "activeCampaigns": 196
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 19923,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "C2",
                "count": 8937,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 628,
                "trend": "up",
                "percentage": 16
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
            },
            {
                "name": "Government",
                "percentage": 0
            }
        ],
        "campaigns": [
            {
                "name": "malware_download",
                "count": 19446,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://182[.]121[.]46[.]75:44543/i",
                    "hxxp://110[.]37[.]52[.]73:55837/i",
                    "hxxp://96[.]44[.]154[.]205/156/ecu/ece[.]doc"
                ]
            },
            {
                "name": "CINS Threat List",
                "count": 15000,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]140[.]6[.]82",
                    "1[.]15[.]116[.]189",
                    "1[.]15[.]118[.]23"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1484,
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
                "count": 1383,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "bef81c1fd26e84e5e25a4182bf668304ba2891da",
                    "adb1b31a6283691b205839f5e3ce4f8ed7aa5f54",
                    "97e58eec776ad990a10d1f4a932e1a4ae48636b3"
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
                "count": 619,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "f7b6ed231ee6c9dc773697ae24f09c559fbee477",
                    "71f4fecadb5ed6289cca27ffaedd2ec02f4450e0",
                    "1ea8ec48d9f0b8873db62ceb0d56bc89bd5b326e"
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
                "name": "Vidar",
                "count": 366,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "c99dd917e7a01d0c7fdbc8edf8fe14b6a4673bf8",
                    "3e86dd1b2a8a50c4263271ffbe28deb2837b320f",
                    "a5ed9149808f93889c8c68e55082d39cf24ae8d7"
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
        "topAttackVector": "Malicious IPs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": "SSH Attacks",
        "totalAttacksThisHour": 42384,
        "lastCalculated": "2026-02-16 18:55 IST"
    }
};
