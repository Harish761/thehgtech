// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-06-23T03:41:55.561291+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-06-23T03:41:55.213466+05:30",
    "lastUpdatedFormatted": "Jun 23, 2026 at 03:41 AM IST",
    "comparisonPeriod": "Jun 22 \u2013 Jun 23, 2026",
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
                "hxxp://www[.]web-oulugames[.]com/",
                "hxxps://www[.]dbsgate[.]bnxway[.]us/connx/register[.]php",
                "hxxps://xmlf-ag9n-th11[.]mgeorgatos-netw1-com-s-account[.]workers[.]dev/73603076837c4d77",
                "hxxps://www[.]vailivre[.]com/",
                "hxxps://free[.]flowrodovias[.]site/"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 706,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 706,
                "newInLastHour": 13,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"fb9881cb026b90f6ead249de94fd97488d49e3fff7f50f45c70410483aaa343a",
                " \"70cb436ed48972a4ed04b1b2daf2fcfccacfcc4d0cb5e88930ad995685758474",
                " \"39614a5587a9d13d814d70c6855834f61107ea7d9a1c1716237946cb595fa8c7",
                " \"bbfcc27dfcbdb84ba4394883089301d90e7ab9523e313f2133ee5bf5e4099ba2",
                " \"0b72a884e9dd5dea37718d7e7a99efbd167b53e24f49bbece1e169645ecc2513"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1668,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1668,
                "newInLastHour": 30,
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
                "1[.]12[.]229[.]231",
                "1[.]15[.]14[.]29",
                "1[.]15[.]51[.]236",
                "1[.]171[.]7[.]135",
                "1[.]177[.]162[.]4"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 4661,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 4661,
                "newInLastHour": 4661,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]14[.]28[.]29",
                "1[.]192[.]61[.]19",
                "1[.]214[.]214[.]114",
                "1[.]222[.]42[.]237",
                "1[.]235[.]192[.]214"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 22686,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 22686,
                "newInLastHour": 22686,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://115[.]49[.]138[.]30:46620/i",
                "hxxp://62[.]60[.]226[.]140/tron13/file[.]exe",
                "hxxp://62[.]60[.]226[.]140/tron12/file[.]exe",
                "hxxp://182[.]117[.]91[.]116:53358/i",
                "hxxp://115[.]49[.]138[.]30:46620/bin[.]sh"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 4785,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 4785,
                "newInLastHour": 4320,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"xbf6th7x[.]megaparicom[.]poker\"",
                " \"47[.]76[.]51[.]107:5678\"",
                " \"8[.]216[.]46[.]241:80\"",
                " \"67[.]225[.]189[.]140:8808\"",
                " \"42[.]193[.]15[.]237:9002\""
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
            "iocCount": 9988,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 9988,
                "newInLastHour": 104,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "c6693bd68a3017163e4af03742ea381bed99b122",
                "27c7759091f1604717e7ab8d9238a6c507af309d",
                "af9b4d589c6b08b420f41d0a13a2571f45d126a2",
                "8ccf76e13a2b6ba73ffa36fa1b73f6bc6fd06f56",
                "f453b4a0cf623b8f2659c584f583ea90d5f8d432"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 55189,
            "activeSources": 8,
            "criticalAlerts": 33410,
            "activeCampaigns": 262
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 23451,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "C2",
                "count": 9959,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 3727,
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
                "count": 22678,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://42[.]235[.]53[.]14:42008/i",
                    "hxxp://115[.]56[.]155[.]199:46909/i",
                    "hxxp://46[.]236[.]65[.]39:57803/i"
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
                    "1[.]12[.]229[.]231",
                    "1[.]15[.]51[.]236"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1693,
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
                "name": " \"win.cobalt_strike\"",
                "count": 1428,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"42[.]193[.]15[.]237:9002\"",
                    " \"82fa0aa7387d7173c9a9ebd1e8dcbb84\"",
                    " \"7e1435b42bd584c4edeaa1fc4055de16e99c5242e0a9d0e24b5a677e1c356563\""
                ]
            },
            {
                "name": "AsyncRAT",
                "count": 1419,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "15a47f45b77ef377b9ec7f6aff1fc3fcca1c6035",
                    "3361a98a6c2746e41390b299202f149699f5a17d",
                    "49aa56f946089804e2bc8ae77a7b2fbaa5860e50"
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
                "count": 688,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "27e3cb5b0043884c7ebc0691e2e73ef3b95339ac",
                    "ae590545961e96de860ea7434c0e8c69b924de6f",
                    "28c3106cd1cec9a5dfec7f2ba3b0dd7e70784429"
                ]
            },
            {
                "name": "Vidar",
                "count": 604,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "85b767752d352a3203c71f6b61fd32aeae6a806b",
                    "a75653fb0d720b53ce06b75400144f7348f56859",
                    "74c412ddb5e5ff23d519ed7f6c71d99fb8ffbaef"
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
                "name": " \"unknown\"",
                "count": 530,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"hxxps://ext2[.]info/time[.]php\"",
                    " \"hxxps://yodonoplasma[.]es/\"",
                    " \"hxxp://192[.]142[.]28[.]77/bachekuni/ohshit[.]x86\""
                ]
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious URLs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": "ConnectWise",
        "totalAttacksThisHour": 47119,
        "lastCalculated": "2026-06-23 03:41 IST"
    }
};
