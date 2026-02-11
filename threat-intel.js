// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-02-11T22:45:05.395743+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-02-11T22:45:05.099062+05:30",
    "lastUpdatedFormatted": "Feb 11, 2026 at 10:45 PM IST",
    "comparisonPeriod": "Feb 10 \u2013 Feb 11, 2026",
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
                "hxxps://eric-567249-brown[.]pages[.]dev/atok=nli4daemawux[.]yiyzcxsq3rauevls3ahveesgng[.]dea-1756674620[.]733788-0[.]0[.]1[.]1-/&original_path=/&cf-turnstile-response=0[.]wgggrk7_by_ap9jbe4xn5aq8vbhrelvlrgjfxqevraq8wyzzow6ulkvcjzjjy0opjoqjtxasw7uaxix_9zf06ff94wyrc9xhv0gxg_iq6jxix3cdbajw7leo_xq6rry3hlrsja/",
                "hxxp://wel-come-io-kucoin[.]pages[.]dev/",
                "hxxps://www[.]roblox[.]com[.]kz/games/2753915549/Blox-Fruits?privateServerLinkCode=67126987144719471434600113667567",
                "hxxps://us-i[.]github[.]io/x/mobile[.]html",
                "hxxps://maislimiteja[.]s3[.]us-east-005[.]backblazeb2[.]com/aumento[.]html"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 530,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 530,
                "newInLastHour": 88,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"ed469c2b4f210a87e14305a9f88d459202cb19731a11728f26449a55e40a53e2",
                " \"33cb9904dff99ead432d91d43e325f3eae9776ffbdda10027e5f45ca0b985015",
                " \"19c5a07c3523e8fe4c7fd1d28810e77ce25f4def48a7a53071855f645e995dc1",
                " \"379f70da9a5e49c82befae14511b69222ab8cef2f084876410be9621d5bf763b",
                " \"f3110b41a4006ad3afc849b446e32470b1acafbd46e7a54cfa2a53ca8b581af7"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1482,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1482,
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
                "1[.]119[.]209[.]130",
                "1[.]15[.]116[.]189",
                "1[.]15[.]14[.]29",
                "1[.]157[.]80[.]72",
                "1[.]157[.]9[.]5"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 5189,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 5189,
                "newInLastHour": 5189,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]12[.]217[.]80",
                "1[.]214[.]197[.]163",
                "1[.]234[.]83[.]55",
                "1[.]238[.]106[.]229",
                "1[.]246[.]14[.]161"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 19475,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 19475,
                "newInLastHour": 19475,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://130[.]12[.]180[.]43/files/5906738695/Rxp5i4r[.]exe",
                "hxxp://182[.]116[.]34[.]75:44388/bin[.]sh",
                "hxxps://comet[.]enter483pro[.]coupons/new-scheduledtask",
                "hxxps://hjekd8c[.]huowdy[.]com/WPS_office[.]zip",
                "hxxps://gitlab[.]com/lxxx1h/r1vl/-/raw/main/P616Z5YPGXB9[.]exe"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 2091,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 2091,
                "newInLastHour": 2086,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"tv88-km[.]cyou\"",
                " \"tv88-vip[.]com\"",
                " \"kp88[.]ink\"",
                " \"ax88vn01[.]com\"",
                " \"comet[.]enter483pro[.]coupons\""
            ]
        },
        "Feodo Tracker": {
            "description": "Botnet C2 server IPs from Feodo Tracker. Tracks Dridex, Emotet, TrickBot, QakBot, and BazarLoader.",
            "website": "https://feodotracker.abuse.ch/",
            "updateFrequency": "Hourly",
            "iocCount": 3,
            "iocDataUrl": "https://thehgtech.com/ioc-data/feodo-tracker.json",
            "stats": {
                "total": 3,
                "newInLastHour": 3,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "162[.]243[.]103[.]246",
                "172[.]232[.]59[.]14",
                "34[.]204[.]119[.]63"
            ]
        },
        "SSL Blacklist": {
            "description": "Malicious SSL certificates used by botnet C2 servers. Helps detect encrypted malware communications.",
            "website": "https://sslbl.abuse.ch/",
            "updateFrequency": "Daily",
            "iocCount": 8942,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 8942,
                "newInLastHour": 27,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "a38f2bfbc5ca952122a8e9fd9e5ed3bb2b734063",
                "6c6fcbd08c8130664b80e2282843d693d849f3aa",
                "d12dacaac4984d29ac317f8bc026dfb1187e8aa0",
                "895da3c451b3cf3c9f5f824b0d54af72cbb2b0e8",
                "f7b6ed231ee6c9dc773697ae24f09c559fbee477"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 47657,
            "activeSources": 8,
            "criticalAlerts": 28841,
            "activeCampaigns": 205
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 19947,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "C2",
                "count": 8894,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 1762,
                "trend": "up",
                "percentage": 188
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
                "count": 19387,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://123[.]11[.]13[.]207:53385/i",
                    "hxxps://meat-9q2t[.]unt452hub[.]coupons/EdgeGameAssist",
                    "hxxp://42[.]227[.]37[.]154:39705/bin[.]sh"
                ]
            },
            {
                "name": "CINS Threat List",
                "count": 15000,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]119[.]209[.]130",
                    "1[.]15[.]116[.]189",
                    "1[.]157[.]80[.]72"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1483,
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
                "count": 1382,
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
                "name": " \"win.quasar_rat\"",
                "count": 1355,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"zrnyxza[.]ru\"",
                    " \"zrsglol[.]com\"",
                    " \"zryupao[.]com\""
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
                "count": 618,
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
        "fastestRisingThreat": " \"js.iclickfix\"",
        "totalAttacksThisHour": 42168,
        "lastCalculated": "2026-02-11 22:45 IST"
    }
};
