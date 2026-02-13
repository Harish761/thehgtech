// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-02-13T18:52:45.929125+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-02-13T18:52:45.650590+05:30",
    "lastUpdatedFormatted": "Feb 13, 2026 at 06:52 PM IST",
    "comparisonPeriod": "Feb 12 \u2013 Feb 13, 2026",
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
                "hxxps://mss32-25h2download[.]pro/",
                "hxxps://service-parceldhl[.]m-loma[.]com/t0JEEs/ZrP6YuiCXd97SQxCr90cdGYWQ0nBcX40olq1mt817M3UkuKq7xUdpyQFB9en4FH59KXgh3hw",
                "hxxps://i3bppf[.]cfd/o/avhno/1769852624532#selectedbank9",
                "hxxp://kuhychoinloghin[.]webflow[.]io/",
                "hxxp://husseinelmasri[.]github[.]io/Microsoft-Clone"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 761,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 761,
                "newInLastHour": 181,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"a34d832b104926cc85681475c21c47029708bbb14890ff9a1870024a416db88c",
                " \"77d58900406d8550cc5e794043f85730087b58cd67ff71ba1bdf788055de1783",
                " \"03ea093bf6bb44e9b98545a7730e7d6c007335fe0a240d17e17a1e958644c2be",
                " \"ac2f73d0ebaeef6d62ba86120563ed6b619e20b438d015a481dfb1c62af841be",
                " \"0e395624851500f9f17f428d2fca254bdcaa2d284a1540e9fdca49bbdc1b68d6"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1484,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1484,
                "newInLastHour": 21,
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
                "1[.]15[.]116[.]189",
                "1[.]15[.]118[.]23",
                "1[.]15[.]22[.]112",
                "1[.]157[.]9[.]5",
                "1[.]170[.]30[.]220"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 5938,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 5938,
                "newInLastHour": 5938,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]13[.]79[.]212",
                "1[.]15[.]116[.]189",
                "1[.]15[.]136[.]28",
                "1[.]15[.]77[.]170",
                "1[.]194[.]219[.]159"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 19314,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 19314,
                "newInLastHour": 19314,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://130[.]12[.]180[.]43/files/7461970488/l6Ujlzq[.]exe",
                "hxxp://42[.]235[.]166[.]231:48272/i",
                "hxxps://z9t2d[.]drift2cargo[.]coupons/msdn",
                "hxxp://115[.]54[.]183[.]102:15628/i",
                "hxxps://harbor[.]plint7marco[.]coupons/msdn"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 1436,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 1436,
                "newInLastHour": 1435,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"z9t2d[.]drift2cargo[.]coupons\"",
                " \"4[.]154[.]22[.]123:443\"",
                " \"harbor[.]plint7marco[.]coupons\"",
                " \"k4m8q[.]plint7marco[.]coupons\"",
                " \"n0va-rn[.]brisk4tango[.]coupons\""
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
            "iocCount": 8930,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 8930,
                "newInLastHour": 35,
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
            "totalIndicators": 48241,
            "activeSources": 8,
            "criticalAlerts": 28695,
            "activeCampaigns": 212
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 19792,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "C2",
                "count": 8903,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 2606,
                "trend": "up",
                "percentage": 13
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
                "count": 19111,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://5[.]142[.]113[.]170:22381/[.]i",
                    "hxxp://138[.]255[.]74[.]129:64010/[.]i",
                    "hxxp://45[.]134[.]38[.]7/[.]Sx86_64"
                ]
            },
            {
                "name": "CINS Threat List",
                "count": 15000,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]15[.]116[.]189",
                    "1[.]15[.]118[.]23",
                    "1[.]15[.]14[.]29"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1466,
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
                    " \"91[.]92[.]243[.]10:1234\"",
                    " \"diva[.]ru[.]com\"",
                    " \"gablewize[.]ru[.]com\""
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
                "count": 615,
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
                "name": " \"js.iclickfix\"",
                "count": 532,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"gesundeswasser[.]co\"",
                    " \"pub-dce4815fde8f4b84a55fe31ab7cf28c3[.]r2[.]dev\"",
                    " \"maheshwaree[.]com\""
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
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious URLs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": "SSH Attacks",
        "totalAttacksThisHour": 42227,
        "lastCalculated": "2026-02-13 18:52 IST"
    }
};
