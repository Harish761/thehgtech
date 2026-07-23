// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-07-23T16:02:44.298940+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-07-23T16:02:43.963940+05:30",
    "lastUpdatedFormatted": "Jul 23, 2026 at 04:02 PM IST",
    "comparisonPeriod": "Jul 22 \u2013 Jul 23, 2026",
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
                "hxxps://click-hostopoint-ch-redirect5824312[.]blogspot[.]com/",
                "hxxps://kimibon[.]rumahsakit[.]de/",
                "hxxps://sp3ct-furnak-biz8-polqik-hudem[.]pages[.]dev/",
                "hxxps://engimaticanendrandixit-max[.]github[.]io/Netflix-Clone-UI",
                "hxxp://groooufffgruisbdj[.]duckdns[.]org/"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 722,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 722,
                "newInLastHour": 112,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"fee6353b6b1d8a6efa09b78cc6a32a2cd65e6a90c171e406a162af3c09c5366f",
                " \"409f79a9ee68c282a7d2b5738d63a310dd33345cb43fb23f11f92f54308a8b1e",
                " \"ac116b7e2f9a0c0ec6d2e6f679aacdf9fe7bce28c7e879c562f2d4c84ccb9897",
                " \"46da15a3b55c4d70e1b5b4d98f6c7c99ef55acf9848eb9bbaa7aeb62c463ea60",
                " \"97eecc8084b277752a7c735a63868f6c30959c0f93aea72ed21d5f919ae58207"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1651,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1651,
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
                "1[.]0[.]225[.]205",
                "1[.]0[.]251[.]12",
                "1[.]0[.]253[.]184",
                "1[.]10[.]185[.]51",
                "1[.]1[.]130[.]50"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 9599,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 9599,
                "newInLastHour": 9599,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]0[.]164[.]165",
                "1[.]117[.]171[.]170",
                "1[.]15[.]227[.]58",
                "1[.]162[.]197[.]67",
                "1[.]162[.]247[.]182"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 15300,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 15300,
                "newInLastHour": 15300,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://110[.]39[.]255[.]227:57592/i",
                "hxxp://222[.]137[.]38[.]14:58676/i",
                "hxxp://115[.]57[.]199[.]189:44029/i",
                "hxxp://219[.]157[.]65[.]193:56360/i",
                "hxxp://110[.]37[.]76[.]64:57726/i"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 4097,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 4097,
                "newInLastHour": 3885,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"abcsgftr[.]cc\"",
                " \"azzy[.]bossynailspa[.]com\"",
                " \"62ukoitn[.]thetokestudio[.]com\"",
                " \"bossynailspa[.]com\"",
                " \"heatmeshbase[.]plasmagridunit[.]garden\""
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
            "iocCount": 10103,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 10103,
                "newInLastHour": 3,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "16508580f31edaaf4cbe08f9c417840fa4f918d0",
                "544c1e86e02e5ac18fabe17fff152e4c7e370990",
                "6ca71f241dad148aaee6ea4a345e1ef1adaa0ffb",
                "cfce3aaff2ad3eae49b37a60d606984bd1492e16",
                "b8b339de5ea80d17fb5ce2eb144d7ba28b33337a"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 47071,
            "activeSources": 8,
            "criticalAlerts": 26024,
            "activeCampaigns": 238
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 15806,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "C2",
                "count": 10218,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 3305,
                "trend": "stable",
                "percentage": -4
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
                "name": "CINS Threat List",
                "count": 15000,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]0[.]225[.]205",
                    "1[.]0[.]251[.]12",
                    "1[.]0[.]251[.]255"
                ]
            },
            {
                "name": "malware_download",
                "count": 14990,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://61[.]52[.]107[.]24:50209/i",
                    "hxxp://61[.]52[.]107[.]24:50209/bin[.]sh",
                    "hxxp://182[.]119[.]71[.]32:60620/i"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1668,
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
                "count": 1431,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "4e5b7b186ad51a93d4e1ba0e2b5ca006b62571be",
                    "c31650da58712771ad83fd5c6cef97905a255cc5",
                    "e86cb30b97c8af13b305fa5cdc7357e23f633447"
                ]
            },
            {
                "name": " \"win.cobalt_strike\"",
                "count": 1416,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"8[.]137[.]149[.]67:5216\"",
                    " \"47[.]101[.]51[.]235:2222\"",
                    " \"cdn[.]pixelcss[.]org\""
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
                "count": 693,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "4c67471be88dd63db2466621fe9e2a2d848f5b79",
                    "9cc76149b07c25893611bc8339406a6312ab2053",
                    "1b64957d1d878c0c0b0b346849db2e64d487aa17"
                ]
            },
            {
                "name": "Vidar",
                "count": 650,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "9000e46cabc64219fb1447d59d5443afcb412e36",
                    "e05145a93b7b5def1ca6c0e356cc4cdba3cbed9f",
                    "4264b1c47eac055ce604ef3509d23cd7e3bd584b"
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
                "count": 447,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "5dc598df9a1f9cf893ce86b54f8be517475d1ff9",
                    "50cad154b9d5fdd19c3f67162257de03d3a6afcd",
                    "572029fec2909ba613cee3c3698b8a49af83b428"
                ]
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious IPs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": "malware_download",
        "totalAttacksThisHour": 44205,
        "lastCalculated": "2026-07-23 16:02 IST"
    }
};
