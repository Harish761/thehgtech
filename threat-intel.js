// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-08-29T12:28:14.614647+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-08-29T12:28:14.263423+05:30",
    "lastUpdatedFormatted": "Aug 29, 2026 at 12:28 PM IST",
    "comparisonPeriod": "Aug 28 \u2013 Aug 29, 2026",
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
                "hxxps://help-l-edg-er-liv-e[.]typedream[.]app/",
                "hxxps://companylogin[.]au/?r=26039595-725b-41c2-87ec-a95ec63f757c",
                "hxxps://xx[.]yvgvvyl[.]net/SECURE/securehtm/?naps",
                "hxxps://naviatayde[.]github[.]io/fb-login",
                "hxxps://otrsc[.]com/home/iTEAIItDVzUUjb5E0mzELKIaO9G2vqJ0qgUs?MpiY6NME_"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 939,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 939,
                "newInLastHour": 100,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"6ac913d7b651d1c16180ec33593bfbe11a54255e3bc1d7656fa57429411a6c94",
                " \"76816149ea97178199c1ee58080bb0d19498162550df12b3af9a4bb240ed76dc",
                " \"63c128dcb78f5ea819596b684e596f4d43be3178ea3f5c58800eba9e1d008d40",
                " \"5d7d7c4c8f67db20efa5b5bc3ca2daae643daee229421d22969f9fcb270eba20",
                " \"2b065c4fb737cb073e50ad11426ee821d2089d63b8b32e13e59192a9a6e18503"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1705,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1705,
                "newInLastHour": 10,
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
                "1[.]120[.]123[.]117",
                "1[.]181[.]200[.]22",
                "1[.]183[.]160[.]23",
                "1[.]189[.]45[.]59",
                "1[.]192[.]129[.]106"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 13193,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 13193,
                "newInLastHour": 13193,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]0[.]164[.]165",
                "1[.]1[.]242[.]233",
                "1[.]162[.]197[.]67",
                "1[.]162[.]198[.]126",
                "1[.]162[.]247[.]182"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 15409,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 15409,
                "newInLastHour": 15409,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://186[.]227[.]246[.]220:32769/bin[.]sh",
                "hxxps://141[.]140[.]0[.]167/Bin/ScreenConnect[.]ClientSetup[.]exe",
                "hxxps://141[.]140[.]0[.]167/bin/support[.]client[.]exe",
                "hxxp://196[.]190[.]69[.]149:58785/i",
                "hxxp://196[.]190[.]69[.]149:58785/bin[.]sh"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 7356,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 7356,
                "newInLastHour": 7065,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"145[.]223[.]23[.]25:3215\"",
                " \"hxxp://39[.]34[.]189[.]248:42346/Mozi[.]m\"",
                " \"hxxp://39[.]89[.]242[.]234:38903/Mozi[.]m\"",
                " \"ferrazzini[.]org\"",
                " \"guzory[.]workers[.]dev\""
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
            "iocCount": 10580,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 10580,
                "newInLastHour": 34,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "b34240912bc1f09b2e2342363647616b1088a1b0",
                "a6e6aa58bac84e56b868f5f618ef227b75d7208e",
                "ddfdf0aa1923b91144b9886e63430e063ad115a8",
                "e481c58f5012d5d8a5177bf84b055fc93c06e32e",
                "ef5c2a4999763064e2213dbe1c8ed696c0e8914b"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 51221,
            "activeSources": 8,
            "criticalAlerts": 26824,
            "activeCampaigns": 247
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 16298,
                "trend": "stable",
                "percentage": -4
            },
            {
                "category": "C2",
                "count": 10526,
                "trend": "stable",
                "percentage": 2
            },
            {
                "category": "Botnet",
                "count": 4523,
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
                "count": 15348,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://175[.]107[.]209[.]163:45781/i",
                    "hxxp://175[.]107[.]209[.]163:45781/bin[.]sh",
                    "hxxp://42[.]235[.]95[.]115:48397/i"
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
                    "1[.]189[.]125[.]236",
                    "1[.]189[.]45[.]59"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1695,
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
                "name": " \"js.iclickfix\"",
                "count": 1553,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"flowerpii9831[.]life\"",
                    " \"147[.]45[.]71[.]191:443\"",
                    " \"158[.]94[.]208[.]87:443\""
                ]
            },
            {
                "name": "AsyncRAT",
                "count": 1440,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "7f44d36f1f6bd375ba4e4a7866328a76047ce498",
                    "f351f7dbe9c583f75758b39cd307f5359d110c73",
                    "7bf78d44f61a05e919479a1cf3e0ce158a50a0c6"
                ]
            },
            {
                "name": " \"win.cobalt_strike\"",
                "count": 1364,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"8[.]134[.]166[.]14:54451\"",
                    " \"137[.]220[.]151[.]95:2222\"",
                    " \"117[.]72[.]182[.]5:888\""
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
                "name": "Vidar",
                "count": 735,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "8508e14457ad7de321edddf3688e124d5f1d652c",
                    "9f0464e29fb94333e1ad31740bf4d4bff89cbd28",
                    "fd78e771cab22c3afad8a5d5c448ff05268f20dd"
                ]
            },
            {
                "name": "QuasarRAT",
                "count": 699,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "d123d7f43d63545c7a8f643acbe73e81f35c3f14",
                    "9b4c3ff8dc5891693f443320e3c1167c7cebe2b7",
                    "0f1b05653c3b3ab3bb4ecd772dd024668cbe8df1"
                ]
            },
            {
                "name": " \"unknown_loader\"",
                "count": 698,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"440c[.]en-us-theeloncod[.]com\"",
                    " \"zupee[.]download\"",
                    " \"yonodigona[.]com\""
                ]
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious IPs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": "malware_download",
        "totalAttacksThisHour": 51116,
        "lastCalculated": "2026-08-29 12:28 IST"
    }
};
